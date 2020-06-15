/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/common.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/navi-1/navi-1.js":
/*!*************************************!*\
  !*** ./src/blocks/navi-1/navi-1.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  $(\".navi-1__menu\").on('touchstart', 'li:not(.hover)', function (e) {\n    e.preventDefault();\n    $(this).addClass('hover').siblings().removeClass('hover');\n  });\n  $('input.navi-1__toggle').on(\"change\", function () {\n    var $body = $('body');\n\n    if ($(this).is(':checked')) {\n      $body.css({\n        'position': 'fixed',\n        'overflow': 'hidden',\n        'width': '100%'\n      });\n    } else {\n      $body.removeAttr('style');\n    }\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL25hdmktMS9uYXZpLTEuanM/Y2MyMyJdLCJuYW1lcyI6WyIkIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJhZGRDbGFzcyIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCIkYm9keSIsImlzIiwiY3NzIiwicmVtb3ZlQXR0ciJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQyxZQUFNO0FBQ05BLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJDLEVBQW5CLENBQXNCLFlBQXRCLEVBQW9DLGdCQUFwQyxFQUFzRCxVQUFTQyxDQUFULEVBQVk7QUFDakVBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBSCxLQUFDLENBQUMsSUFBRCxDQUFELENBQ0NJLFFBREQsQ0FDVSxPQURWLEVBRUNDLFFBRkQsR0FHQ0MsV0FIRCxDQUdhLE9BSGI7QUFJQSxHQU5EO0FBUUFOLEdBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCQyxFQUExQixDQUE2QixRQUE3QixFQUF1QyxZQUFXO0FBQ2pELFFBQUlNLEtBQUssR0FBR1AsQ0FBQyxDQUFDLE1BQUQsQ0FBYjs7QUFDQSxRQUFJQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLEVBQVIsQ0FBVyxVQUFYLENBQUosRUFBNEI7QUFDM0JELFdBQUssQ0FBQ0UsR0FBTixDQUFVO0FBQ1Qsb0JBQVksT0FESDtBQUVULG9CQUFZLFFBRkg7QUFHVCxpQkFBUztBQUhBLE9BQVY7QUFLQSxLQU5ELE1BTU87QUFDTkYsV0FBSyxDQUFDRyxVQUFOLENBQWlCLE9BQWpCO0FBQ0E7QUFDRCxHQVhEO0FBWUEsQ0FyQkQiLCJmaWxlIjoiLi9zcmMvYmxvY2tzL25hdmktMS9uYXZpLTEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoKCkgPT4ge1xuXHQkKFwiLm5hdmktMV9fbWVudVwiKS5vbigndG91Y2hzdGFydCcsICdsaTpub3QoLmhvdmVyKScsIGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JCh0aGlzKVxuXHRcdC5hZGRDbGFzcygnaG92ZXInKVxuXHRcdC5zaWJsaW5ncygpXG5cdFx0LnJlbW92ZUNsYXNzKCdob3ZlcicpO1xuXHR9KTtcdFxuXHRcblx0JCgnaW5wdXQubmF2aS0xX190b2dnbGUnKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0aWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcblx0XHRcdCRib2R5LmNzcyh7XG5cdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXG5cdFx0XHRcdCdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuXHRcdFx0XHQnd2lkdGgnOiAnMTAwJSdcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkYm9keS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXHRcdH1cblx0fSk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/navi-1/navi-1.js\n");

/***/ }),

/***/ "./src/blocks/navi-2/navi-2.js":
/*!*************************************!*\
  !*** ./src/blocks/navi-2/navi-2.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var navi = document.querySelector('.navi-2');\n  var offset = navi.offsetTop; // console.log(parseInt(getComputedStyle(navi).height));\n\n  function pinHeader() {\n    navi.classList[window.pageYOffset > offset ? 'add' : 'remove']('navi-2_fixed');\n  }\n\n  window.onscroll = function () {\n    pinHeader();\n  };\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL25hdmktMi9uYXZpLTIuanM/ZjdlMSJdLCJuYW1lcyI6WyJuYXZpIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2Zmc2V0Iiwib2Zmc2V0VG9wIiwicGluSGVhZGVyIiwiY2xhc3NMaXN0Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJvbnNjcm9sbCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQyxZQUFNO0FBQ04sTUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBYjtBQUNBLE1BQU1DLE1BQU0sR0FBR0gsSUFBSSxDQUFDSSxTQUFwQixDQUZNLENBR047O0FBRUEsV0FBU0MsU0FBVCxHQUFxQjtBQUNwQkwsUUFBSSxDQUFDTSxTQUFMLENBQWdCQyxNQUFNLENBQUNDLFdBQVAsR0FBcUJMLE1BQXJCLEdBQThCLEtBQTlCLEdBQXNDLFFBQXRELEVBQWlFLGNBQWpFO0FBQ0E7O0FBQ0RJLFFBQU0sQ0FBQ0UsUUFBUCxHQUFrQixZQUFZO0FBQzdCSixhQUFTO0FBQ04sR0FGSjtBQUlBLENBWkQiLCJmaWxlIjoiLi9zcmMvYmxvY2tzL25hdmktMi9uYXZpLTIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoKCkgPT4ge1xuXHRjb25zdCBuYXZpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmktMicpO1xuXHRjb25zdCBvZmZzZXQgPSBuYXZpLm9mZnNldFRvcDtcblx0Ly8gY29uc29sZS5sb2cocGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShuYXZpKS5oZWlnaHQpKTtcblxuXHRmdW5jdGlvbiBwaW5IZWFkZXIoKSB7XG5cdFx0bmF2aS5jbGFzc0xpc3RbKHdpbmRvdy5wYWdlWU9mZnNldCA+IG9mZnNldCA/ICdhZGQnIDogJ3JlbW92ZScpXSgnbmF2aS0yX2ZpeGVkJyk7XG5cdH1cblx0d2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdHBpbkhlYWRlcigpXG4gICAgfTtcblxufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/navi-2/navi-2.js\n");

/***/ }),

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_navi_1_navi_1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/navi-1/navi-1.js */ \"./src/blocks/navi-1/navi-1.js\");\n/* harmony import */ var _blocks_navi_1_navi_1_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_navi_1_navi_1_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_navi_2_navi_2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/navi-2/navi-2.js */ \"./src/blocks/navi-2/navi-2.js\");\n/* harmony import */ var _blocks_navi_2_navi_2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_navi_2_navi_2_js__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tbW9uLmpzPzQ0MGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL2pzL2NvbW1vbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2Jsb2Nrcy9uYXZpLTEvbmF2aS0xLmpzXCI7XHJcbmltcG9ydCBcIi4uL2Jsb2Nrcy9uYXZpLTIvbmF2aS0yLmpzXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/common.js\n");

/***/ })

/******/ });