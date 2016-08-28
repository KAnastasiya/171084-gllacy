/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

		__webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * DOM-elements for login form
	 * @constant
	 * @type {Object}
	 */
	var login = {
	  btnShow: $('.user__btn--login'),
	  fields: $('.login__form input'),
	  login: $('.login__form input[name="login"]'),
	  submit: $('.btn--login')
	};

	/**
	 * Set in forms users data, saved in localStorage
	 */
	var _setSavedUserInfo = function _setSavedUserInfo() {
	  var lastLogin = localStorage.getItem('login');

	  if (lastLogin) {
	    login.login.val(lastLogin);
	  }
	};

	/**
	 * Set focus in first empty forms field
	 */
	var _setFocusInFirstEmptyField = function _setFocusInFirstEmptyField() {
	  $.each(login.fields, function (index, elem) {
	    var element = $(elem);
	    if (!element.val()) {
	      element.focus();
	      return false;
	    }
	  });
	};

	/**
	 * Handler for submit button clickfields
	 */
	var _onSubmitClick = function _onSubmitClick(event) {
	  $.each(login.fields, function (index, elem) {
	    var element = $(elem);
	    if (!element.val()) {
	      event.preventDefault();
	      element.addClass('error');
	    } else {
	      if (element.attr('name') === 'login') {
	        localStorage.setItem('login', element.val());
	      } else if (element.attr('name') === 'password') {
	        localStorage.setItem('password', element.val());
	      }
	    }
	  });
	};

	/**
	 * Handler for hover on 'Show login' button
	 */
	var _onLoginMouseEnter = function _onLoginMouseEnter() {
	  _setSavedUserInfo();
	  _setFocusInFirstEmptyField();
	};

	/**
	 * Handler for unhover on 'Show login' button
	 */
	var _onLoginMouseLeave = function _onLoginMouseLeave() {
	  $.each(login.fields, function (index, elem) {
	    var element = $(elem);
	    element.val('');
	  });
	};

	// Set event handlers for feedback window
	login.btnShow.mouseenter(_onLoginMouseEnter);
	login.btnShow.mouseleave(_onLoginMouseLeave);
	login.submit.click(_onSubmitClick);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGViMGNhZDQxN2RlZWJlN2UwNjU0Pzc5NzkiLCJ3ZWJwYWNrOi8vL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9ibG9ja3MvbG9naW4vbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlYjBjYWQ0MTdkZWViZTdlMDY1NFxuICoqLyIsImltcG9ydCAnLi9ibG9ja3MvbG9naW4vbG9naW4uanMnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbW1vbi5qc1xuICoqLyIsIi8qKlxuICogRE9NLWVsZW1lbnRzIGZvciBsb2dpbiBmb3JtXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IGxvZ2luID0ge1xuICBidG5TaG93OiAkKCcudXNlcl9fYnRuLS1sb2dpbicpLFxuICBmaWVsZHM6ICQoJy5sb2dpbl9fZm9ybSBpbnB1dCcpLFxuICBsb2dpbjogJCgnLmxvZ2luX19mb3JtIGlucHV0W25hbWU9XCJsb2dpblwiXScpLFxuICBzdWJtaXQ6ICQoJy5idG4tLWxvZ2luJylcbn07XG5cbi8qKlxuICogU2V0IGluIGZvcm1zIHVzZXJzIGRhdGEsIHNhdmVkIGluIGxvY2FsU3RvcmFnZVxuICovXG5sZXQgX3NldFNhdmVkVXNlckluZm8gPSAoKSA9PiB7XG4gIGxldCBsYXN0TG9naW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9naW4nKTtcblxuICBpZihsYXN0TG9naW4pIHtcbiAgICBsb2dpbi5sb2dpbi52YWwobGFzdExvZ2luKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgZm9jdXMgaW4gZmlyc3QgZW1wdHkgZm9ybXMgZmllbGRcbiAqL1xubGV0IF9zZXRGb2N1c0luRmlyc3RFbXB0eUZpZWxkID0gKCkgPT4ge1xuICAkLmVhY2gobG9naW4uZmllbGRzLCAoaW5kZXgsIGVsZW0pID0+IHtcbiAgICBsZXQgZWxlbWVudCA9ICQoZWxlbSk7XG4gICAgaWYoIWVsZW1lbnQudmFsKCkpIHtcbiAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBIYW5kbGVyIGZvciBzdWJtaXQgYnV0dG9uIGNsaWNrZmllbGRzXG4gKi9cbmxldCBfb25TdWJtaXRDbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICQuZWFjaChsb2dpbi5maWVsZHMsIChpbmRleCwgZWxlbSkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gJChlbGVtKTtcbiAgICBpZiggIWVsZW1lbnQudmFsKCkgKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZWxlbWVudC5hZGRDbGFzcygnZXJyb3InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoIGVsZW1lbnQuYXR0cignbmFtZScpID09PSAnbG9naW4nICkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9naW4nLCBlbGVtZW50LnZhbCgpKTtcbiAgICAgIH0gZWxzZSBpZiAoIGVsZW1lbnQuYXR0cignbmFtZScpID09PSAncGFzc3dvcmQnICkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFzc3dvcmQnLCBlbGVtZW50LnZhbCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKiBIYW5kbGVyIGZvciBob3ZlciBvbiAnU2hvdyBsb2dpbicgYnV0dG9uXG4gKi9cbmxldCBfb25Mb2dpbk1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gIF9zZXRTYXZlZFVzZXJJbmZvKCk7XG4gIF9zZXRGb2N1c0luRmlyc3RFbXB0eUZpZWxkKCk7XG59O1xuXG4vKipcbiAqIEhhbmRsZXIgZm9yIHVuaG92ZXIgb24gJ1Nob3cgbG9naW4nIGJ1dHRvblxuICovXG5sZXQgX29uTG9naW5Nb3VzZUxlYXZlID0gKCkgPT4ge1xuICAkLmVhY2gobG9naW4uZmllbGRzLCAoaW5kZXgsIGVsZW0pID0+IHtcbiAgICBsZXQgZWxlbWVudCA9ICQoZWxlbSk7XG4gICAgZWxlbWVudC52YWwoJycpO1xuICB9KTtcbn07XG5cbi8vIFNldCBldmVudCBoYW5kbGVycyBmb3IgZmVlZGJhY2sgd2luZG93XG5sb2dpbi5idG5TaG93Lm1vdXNlZW50ZXIoX29uTG9naW5Nb3VzZUVudGVyKTtcbmxvZ2luLmJ0blNob3cubW91c2VsZWF2ZShfb25Mb2dpbk1vdXNlTGVhdmUpO1xubG9naW4uc3VibWl0LmNsaWNrKF9vblN1Ym1pdENsaWNrKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9ibG9ja3MvbG9naW4vbG9naW4uanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7Ozs7Ozs7QUNBQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9