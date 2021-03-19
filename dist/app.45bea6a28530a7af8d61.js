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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\nvar api = {\n  apiKey: 'c11a864308cc4de789d2d084aad69e5d',\n  apiUrl: 'https://newsapi.org/v2/top-headlines'\n};\n\nvar FormData = function FormData(country, category, query) {\n  _classCallCheck(this, FormData);\n\n  this.country = country;\n  this.category = category;\n  this.query = query;\n};\n\nfunction fetcher(formData) {\n  return new Promise(function (resolve, reject) {\n    fetch(\"\".concat(api.apiUrl, \"?country=\").concat(formData.country).concat(formData.category).concat(formData.query, \"&apiKey=\").concat(api.apiKey)).then(function (response) {\n      return response.json();\n    }).then(function (results) {\n      return resolve(results);\n    })[\"catch\"](function (err) {\n      return reject(err);\n    });\n  });\n}\n\nfunction readChecker() {\n  var checkButtons = document.querySelectorAll('.status');\n  var urls = document.querySelectorAll('.readMoreUrl');\n  checkButtons.forEach(function (btn) {\n    btn.addEventListener('click', function () {\n      btn.classList.toggle('green');\n      btn.parentElement.classList.toggle('transitioned');\n    });\n  });\n  urls.forEach(function (url) {\n    url.addEventListener('click', function () {\n      url.parentElement.classList.toggle('transitioned');\n    });\n  });\n}\n\nfunction newsDeleter() {\n  var news = document.querySelectorAll('.newsCard');\n\n  if (news.length) {\n    news.forEach(function (element) {\n      element.remove();\n    });\n  }\n}\n\nfunction cardCreator(fetchResult) {\n  var parentNode = document.querySelector('#mainArea');\n  newsDeleter();\n  fetchResult.forEach(function (element) {\n    var date = new Date(Date.parse(element.publishedAt));\n    var monthNumber;\n\n    if (date.getMonth() < 10) {\n      monthNumber = \"0\".concat(date.getMonth());\n    }\n\n    var template = \"\\n    <div class='newsCard'>\\n      <img src=\\\"\".concat(element.urlToImage || 'https://picsum.photos/id/1062/5092/3395', \"\\\" alt=\\\"img\\\">\\n      <h2 class='title'>\").concat(element.title, \"</h2>\\n      <p class='author'>\").concat(element.author || '', \"</p>\\n      <p class='date'><span>\").concat(date.getDate(), \"</span>-<span>\").concat(monthNumber, \"</span>-<span>\").concat(date.getFullYear(), \"</span>\\n      <span>\").concat(date.getHours(), \":</span><span>\").concat(date.getMinutes(), \"</span></p>\\n      <a class='readMoreUrl' href=\\\"\").concat(element.url, \"\\\" target=\\\"_blank\\\">Read more >>></a>\\n      <button class='status'></button>\\n    </div>\\n  \");\n    parentNode.insertAdjacentHTML('beforeend', template);\n  });\n  readChecker();\n}\n\ndocument.forms.news.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var form = document.forms.news;\n  var country = form.querySelector('#countySelect').value;\n  var category = form.querySelector('#category').value;\n  var query = form.querySelector('#query').value;\n\n  if (!category) {\n    category = '';\n  } else {\n    category = \"&category=\".concat(category);\n  }\n\n  if (!query) {\n    query = '';\n  } else {\n    query = \"&q=\".concat(query);\n  }\n\n  var formData = new FormData(country, category, query);\n  fetcher(formData).then(function (result) {\n    return cardCreator(result.articles);\n  });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });