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
	  btnShow: $('.user__item--login'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGNhZTM5ZjUxMDhmNzIwNzEwYmFjP2QwOTUiLCJ3ZWJwYWNrOi8vL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9ibG9ja3MvbG9naW4vbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBjYWUzOWY1MTA4ZjcyMDcxMGJhY1xuICoqLyIsImltcG9ydCAnLi9ibG9ja3MvbG9naW4vbG9naW4uanMnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbW1vbi5qc1xuICoqLyIsIi8qKlxuICogRE9NLWVsZW1lbnRzIGZvciBsb2dpbiBmb3JtXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IGxvZ2luID0ge1xuICBidG5TaG93OiAkKCcudXNlcl9faXRlbS0tbG9naW4nKSxcbiAgZmllbGRzOiAkKCcubG9naW5fX2Zvcm0gaW5wdXQnKSxcbiAgbG9naW46ICQoJy5sb2dpbl9fZm9ybSBpbnB1dFtuYW1lPVwibG9naW5cIl0nKSxcbiAgc3VibWl0OiAkKCcuYnRuLS1sb2dpbicpXG59O1xuXG4vKipcbiAqIFNldCBpbiBmb3JtcyB1c2VycyBkYXRhLCBzYXZlZCBpbiBsb2NhbFN0b3JhZ2VcbiAqL1xubGV0IF9zZXRTYXZlZFVzZXJJbmZvID0gKCkgPT4ge1xuICBsZXQgbGFzdExvZ2luID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2luJyk7XG5cbiAgaWYobGFzdExvZ2luKSB7XG4gICAgbG9naW4ubG9naW4udmFsKGxhc3RMb2dpbik7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IGZvY3VzIGluIGZpcnN0IGVtcHR5IGZvcm1zIGZpZWxkXG4gKi9cbmxldCBfc2V0Rm9jdXNJbkZpcnN0RW1wdHlGaWVsZCA9ICgpID0+IHtcbiAgJC5lYWNoKGxvZ2luLmZpZWxkcywgKGluZGV4LCBlbGVtKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSAkKGVsZW0pO1xuICAgIGlmKCFlbGVtZW50LnZhbCgpKSB7XG4gICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogSGFuZGxlciBmb3Igc3VibWl0IGJ1dHRvbiBjbGlja2ZpZWxkc1xuICovXG5sZXQgX29uU3VibWl0Q2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAkLmVhY2gobG9naW4uZmllbGRzLCAoaW5kZXgsIGVsZW0pID0+IHtcbiAgICBsZXQgZWxlbWVudCA9ICQoZWxlbSk7XG4gICAgaWYoICFlbGVtZW50LnZhbCgpICkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKCBlbGVtZW50LmF0dHIoJ25hbWUnKSA9PT0gJ2xvZ2luJyApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2luJywgZWxlbWVudC52YWwoKSk7XG4gICAgICB9IGVsc2UgaWYgKCBlbGVtZW50LmF0dHIoJ25hbWUnKSA9PT0gJ3Bhc3N3b3JkJyApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bhc3N3b3JkJywgZWxlbWVudC52YWwoKSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogSGFuZGxlciBmb3IgaG92ZXIgb24gJ1Nob3cgbG9naW4nIGJ1dHRvblxuICovXG5sZXQgX29uTG9naW5Nb3VzZUVudGVyID0gKCkgPT4ge1xuICBfc2V0U2F2ZWRVc2VySW5mbygpO1xuICBfc2V0Rm9jdXNJbkZpcnN0RW1wdHlGaWVsZCgpO1xufTtcblxuLyoqXG4gKiBIYW5kbGVyIGZvciB1bmhvdmVyIG9uICdTaG93IGxvZ2luJyBidXR0b25cbiAqL1xubGV0IF9vbkxvZ2luTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgJC5lYWNoKGxvZ2luLmZpZWxkcywgKGluZGV4LCBlbGVtKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSAkKGVsZW0pO1xuICAgIGVsZW1lbnQudmFsKCcnKTtcbiAgfSk7XG59O1xuXG4vLyBTZXQgZXZlbnQgaGFuZGxlcnMgZm9yIGZlZWRiYWNrIHdpbmRvd1xubG9naW4uYnRuU2hvdy5tb3VzZWVudGVyKF9vbkxvZ2luTW91c2VFbnRlcik7XG5sb2dpbi5idG5TaG93Lm1vdXNlbGVhdmUoX29uTG9naW5Nb3VzZUxlYXZlKTtcbmxvZ2luLnN1Ym1pdC5jbGljayhfb25TdWJtaXRDbGljayk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvYmxvY2tzL2xvZ2luL2xvZ2luLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7Ozs7O0FDQUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==