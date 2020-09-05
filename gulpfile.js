const webpack = require('webpack');
let gulp = require('gulp');
let $ = require('gulp-load-plugins')({ pattern: '*' });
const isSync = process.argv.indexOf('--sync') !== -1;
const isDev = process.argv.indexOf('--dev') !== -1;
const isProd = !isDev;

// console.log(JSON.stringify($));
let pckg = require('./package.json');
let webconf = {
	output: {
		filename: 'common.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
					loader: 'babel-loader',
					options: { presets: ['@babel/preset-env'] }
				}
		}]
	},
	externals: {
		jquery: 'jQuery'
	},
	mode: isDev ? 'development' : 'production',
	devtool: isDev ? 'eval-source-map' : 'none'
};

let pth = {
	pbl: {
		root: './docs/',
		html: './docs/',
		js: './docs/',
		css: './docs/',
		img: './docs/images/',
		fnts: './docs/fonts/'
	},
	src: {
		root: './src/',
		html: './src/[^_]*.html', // src/*.html - взять все файлы с расширением кроме _
		js: './src/js/common.js',
		jslib: './src/js/[^common]*.js',
		css: './src/scss/style.scss',
		scss: './src/scss/lib/',
		img: ['./src/images/**','!./src/images/**/*.psd'],
		fnts: './src/fonts/**/*.*',
		tmp: './src/tmp/'
	},
	wtch: {
		html: './src/**/*.html',
		js: ['./src/js/**/*.js','./src/blocks/**/*.js'],
		css: ['./src/scss/**/*.scss','./src/blocks/**/*.scss'],
		img: './src/images/**/*.*',
		fnts: './src/fonts/**/*.*'
	}
};

function swallowError (error) {
	console.log(error.toString())
	this.emit('end')
}

function clear() {
	return $.del(pth.pbl.root + '*');
}

function js() {
	return gulp.src(pth.src.js)
		.pipe($.webpackStream(webconf))
		.on('error', swallowError)
		.pipe(gulp.dest(pth.pbl.js))
		.pipe($.if(isSync, $.browserSync.stream()));
}

function jslib () {
	let paths = [];
	Object.entries(pckg.externalJs).forEach(function ([key, value], index) {
		paths[index] = `node_modules/${key}/${value}`;
	});
	return gulp.src(paths)
		.pipe(gulp.dest(pth.pbl.js));
}

function html() {
	return gulp.src(pth.src.html)
		.pipe($.fileInclude({ prefix: '@@', basepath: '@file' }))
		.pipe($.lipsumVars())
		.on('error', swallowError)
		.pipe(gulp.dest(pth.pbl.html))
		.pipe($.if(isSync, $.browserSync.stream()));
}

function styles() {
	return gulp.src(pth.src.css)
		.pipe($.if(isDev, $.sourcemaps.init()))
		.pipe($.sassGlob())
		.pipe($.sass())
		.on('error', swallowError)
		.pipe($.autoprefixer({ cascade: false }))
		.pipe($.if(isProd, $.cleanCss({ level: 2 })))
		.pipe($.if(isDev, $.sourcemaps.write()))
		.pipe(gulp.dest(pth.pbl.css))
		.pipe($.if(isSync, $.browserSync.stream()));
}

function images() {
	// возможно вместо удаления, лучше будет использовать gulp-newer
	return $.del([pth.pbl.img+'*']).then(function(paths) {
		gulp.src(pth.src.img)
		.pipe(gulp.dest(pth.pbl.img))
		.pipe($.if(isSync, $.browserSync.stream()));
		console.log('Deleted files and folders:\n', paths.join('\n'));
	});
}

function fonts() {
	return $.del([pth.pbl.fnts+'*']).then(function(paths) {
		gulp.src(pth.src.fnts)
		.pipe(gulp.dest(pth.pbl.fnts))
		.pipe($.if(isSync, $.browserSync.stream()));
		console.log('Deleted files and folders:\n', paths.join('\n'));
	});
}

function watch() {
	if(isSync) {
		$.browserSync.init({
			server: { baseDir: pth.pbl.root }
		});
	}
	gulp.watch(pth.wtch.js, js);
	gulp.watch(pth.wtch.html, html);
	gulp.watch(pth.wtch.css, styles);
	gulp.watch(pth.wtch.img, images);
	gulp.watch(pth.wtch.fnts, fonts);
}

function grid(done) {
	$.smartGrid('./src/scss/lib', pckg.smartgrid);
	done();
}

const build = gulp.series(clear, gulp.parallel(html, js, jslib, styles, images, fonts));

exports.build = build;
exports.watch = gulp.series(build, watch);
exports.grid = grid;
