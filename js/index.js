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

	__webpack_require__(5);

		__webpack_require__(6);

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var _setPageBg = function _setPageBg(element) {
	  var pageBg = void 0;
	  console.log($(element).attr('id'));
	  switch ($(element).attr('id')) {
	    case 'slider__point--1':
	      pageBg = '#849d8f';
	      break;
	    case 'slider__point--2':
	      pageBg = '#8996a6';
	      break;
	    case 'slider__point--3':
	      pageBg = '#9d8b84';
	      break;
	    default:
	      pageBg = '#849d8f';
	  }

	  $('body').css('background-color', pageBg);
	};

	(function () {
	  $('#slider__point--1').attr('checked', 'true');
	  _setPageBg($('#slider__point--1'));

	  $('.slider__point').click(function () {
	    _setPageBg(this);
	  });
	})();

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Html DOM-element
	 * @constant
	 * @type {Element}
	 */
	var page = $('html');

	/**
	 * DOM-elements for feedback modal window
	 * @constant
	 * @type {Object}
	 */
	var modalFeedback = {
	  window: $('#feedback'),
	  btnShow: $('.btn--feedback-show'),
	  btnClose: $('#feedback .icon--close'),
	  fields: $('#feedback input, #feedback textarea')
	};

	/**
	 * Show modal function
	 * @param  {Element} modal
	 */
	var _showModal = function _showModal(modal) {
	  modal.addClass('modal--active');
	  var width = $('body').width();
	  $('body').width(width);
	  page.addClass('lock');
	};

	/**
	 * Hide modal function
	 * @param  {Element} modal
	 */
	var _hideModal = function _hideModal(modal) {
	  modal.removeClass('modal--active');
	  page.removeClass('lock');
	};

	/**
	 * Handler for clicking on button 'Show modal window'
	 * @param  {Element} modal
	 * @param  {Object} event
	 */
	var _onShowClick = function _onShowClick(modal) {
	  return function (event) {
	    event.preventDefault();
	    _showModal(modal);
	  };
	};

	/**
	 * Handler for clicking on button 'Hide modal window'
	 * @param  {Element} modal
	 */
	var _onCloseClick = function _onCloseClick(modal) {
	  return function () {
	    _hideModal(modal);
	  };
	};

	/**
	 * Handler for clicking on modal window overlay
	 * @param  {Element} modal
	 * @param  {Object} event
	 */
	var _onOverlayClick = function _onOverlayClick(modal) {
	  return function (event) {
	    if (event.target === event.currentTarget) {
	      $('body').width('');
	      _hideModal(modal);
	    }
	  };
	};

	/**
	 * Handler for changing values of fields in feddback form
	 */
	var _onFieldValueChange = function _onFieldValueChange() {
	  $(this).toggleClass('filled', $(this).val() !== '');
	};

	// Set event handlers for feedback window
	modalFeedback.btnShow.click(_onShowClick(modalFeedback.window));
	modalFeedback.btnClose.click(_onCloseClick(modalFeedback.window));
	modalFeedback.window.click(_onOverlayClick(modalFeedback.window));
	modalFeedback.fields.change(_onFieldValueChange);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(7);

	$('.google-map').gmap3({
	  map: {
	    options: {
	      center: [59.9394949, 30.3283302],
	      zoom: 16,
	      backgroundColor: '#f5f5f5',
	      scrollwheel: false,
	      mapTypeControlOptions: {
	        style: window.google.maps.MapTypeControlStyle.DROPDOWN_MENU
	      }
	    }
	  },
	  marker: {
	    latLng: [59.9387942, 30.3230833],
	    options: {
	      icon: new window.google.maps.MarkerImage('img/map/img/marker.png')
	    }
	  }
		});

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!function (t, n) {
	  function e(t) {
	    return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t));
	  }function o(t) {
	    return "string" == typeof t;
	  }function i(t) {
	    return "number" == typeof t;
	  }function a(t) {
	    return t === n;
	  }function r() {
	    q = google.maps, A || (A = { verbose: !1, queryLimit: { attempt: 5, delay: 250, random: 250 }, classes: function () {
	        var n = {};return t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer TransitLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "), function (t, e) {
	          n[e] = q[e];
	        }), n;
	      }(), map: { mapTypeId: q.MapTypeId.ROADMAP, center: [46.578498, 2.457275], zoom: 2 }, overlay: { pane: "floatPane", content: "", offset: { x: 0, y: 0 } }, geoloc: { getCurrentPosition: { maximumAge: 6e4, timeout: 5e3 } } });
	  }function s(t, n) {
	    return a(t) ? "gmap3_" + (n ? Z + 1 : ++Z) : t;
	  }function u(t) {
	    var n,
	        e = q.version.split(".");for (t = t.split("."), n = 0; n < e.length; n++) {
	      e[n] = parseInt(e[n], 10);
	    }for (n = 0; n < t.length; n++) {
	      if (t[n] = parseInt(t[n], 10), !e.hasOwnProperty(n)) return !1;if (e[n] < t[n]) return !1;
	    }return !0;
	  }function l(n, e, o, i, a) {
	    function r(e, i) {
	      e && t.each(e, function (t, e) {
	        var r = n,
	            s = e;R(e) && (r = e[0], s = e[1]), i(o, t, function (t) {
	          s.apply(r, [a || o, t, u]);
	        });
	      });
	    }var s = e.td || {},
	        u = { id: i, data: s.data, tag: s.tag };r(s.events, q.event.addListener), r(s.onces, q.event.addListenerOnce);
	  }function d(t) {
	    var n,
	        e = [];for (n in t) {
	      t.hasOwnProperty(n) && e.push(n);
	    }return e;
	  }function c(t, n) {
	    var e,
	        o = arguments;for (e = 2; e < o.length; e++) {
	      if (n in o[e] && o[e].hasOwnProperty(n)) return void (t[n] = o[e][n]);
	    }
	  }function p(n, e) {
	    var o,
	        i,
	        a = ["data", "tag", "id", "events", "onces"],
	        r = {};if (n.td) for (o in n.td) {
	      n.td.hasOwnProperty(o) && "options" !== o && "values" !== o && (r[o] = n.td[o]);
	    }for (i = 0; i < a.length; i++) {
	      c(r, a[i], e, n.td);
	    }return r.options = t.extend({}, n.opts || {}, e.options || {}), r;
	  }function f() {
	    if (A.verbose) {
	      var t,
	          n = [];if (window.console && z(console.error)) {
	        for (t = 0; t < arguments.length; t++) {
	          n.push(arguments[t]);
	        }console.error.apply(console, n);
	      } else {
	        for (n = "", t = 0; t < arguments.length; t++) {
	          n += arguments[t].toString() + " ";
	        }alert(n);
	      }
	    }
	  }function g(t) {
	    return (i(t) || o(t)) && "" !== t && !isNaN(t);
	  }function h(t) {
	    var n,
	        o = [];if (!a(t)) if (e(t)) {
	      if (i(t.length)) o = t;else for (n in t) {
	        o.push(t[n]);
	      }
	    } else o.push(t);return o;
	  }function v(n) {
	    return n ? z(n) ? n : (n = h(n), function (o) {
	      var i;if (a(o)) return !1;if (e(o)) {
	        for (i = 0; i < o.length; i++) {
	          if (t.inArray(o[i], n) >= 0) return !0;
	        }return !1;
	      }return t.inArray(o, n) >= 0;
	    }) : void 0;
	  }function m(t, n, e) {
	    var i = n ? t : null;return !t || o(t) ? i : t.latLng ? m(t.latLng) : t instanceof q.LatLng ? t : g(t.lat) ? new q.LatLng(t.lat, t.lng) : !e && R(t) && g(t[0]) && g(t[1]) ? new q.LatLng(t[0], t[1]) : i;
	  }function y(t) {
	    var n, e;return !t || t instanceof q.LatLngBounds ? t || null : (R(t) ? 2 === t.length ? (n = m(t[0]), e = m(t[1])) : 4 === t.length && (n = m([t[0], t[1]]), e = m([t[2], t[3]])) : "ne" in t && "sw" in t ? (n = m(t.ne), e = m(t.sw)) : "n" in t && "e" in t && "s" in t && "w" in t && (n = m([t.n, t.e]), e = m([t.s, t.w])), n && e ? new q.LatLngBounds(e, n) : null);
	  }function w(t, n, e, i, a) {
	    var r = e ? m(i.td, !1, !0) : !1,
	        s = r ? { latLng: r } : i.td.address ? o(i.td.address) ? { address: i.td.address } : i.td.address : !1,
	        u = s ? G.get(s) : !1,
	        l = this;s ? (a = a || 0, u ? (i.latLng = u.results[0].geometry.location, i.results = u.results, i.status = u.status, n.apply(t, [i])) : (s.location && (s.location = m(s.location)), s.bounds && (s.bounds = y(s.bounds)), M().geocode(s, function (o, r) {
	      r === q.GeocoderStatus.OK ? (G.store(s, { results: o, status: r }), i.latLng = o[0].geometry.location, i.results = o, i.status = r, n.apply(t, [i])) : r === q.GeocoderStatus.OVER_QUERY_LIMIT && a < A.queryLimit.attempt ? setTimeout(function () {
	        w.apply(l, [t, n, e, i, a + 1]);
	      }, A.queryLimit.delay + Math.floor(Math.random() * A.queryLimit.random)) : (f("geocode failed", r, s), i.latLng = i.results = !1, i.status = r, n.apply(t, [i]));
	    }))) : (i.latLng = m(i.td, !1, !0), n.apply(t, [i]));
	  }function L(n, e, o, i) {
	    function a() {
	      do {
	        s++;
	      } while (s < n.length && !("address" in n[s]));return s >= n.length ? void o.apply(e, [i]) : void w(r, function (e) {
	        delete e.td, t.extend(n[s], e), a.apply(r, []);
	      }, !0, { td: n[s] });
	    }var r = this,
	        s = -1;a();
	  }function b(t, n, e) {
	    var o = !1;navigator && navigator.geolocation ? navigator.geolocation.getCurrentPosition(function (i) {
	      o || (o = !0, e.latLng = new q.LatLng(i.coords.latitude, i.coords.longitude), n.apply(t, [e]));
	    }, function () {
	      o || (o = !0, e.latLng = !1, n.apply(t, [e]));
	    }, e.opts.getCurrentPosition) : (e.latLng = !1, n.apply(t, [e]));
	  }function x(t) {
	    var n,
	        o = !1;if (e(t) && t.hasOwnProperty("get")) {
	      for (n in t) {
	        if ("get" !== n) return !1;
	      }o = !t.get.hasOwnProperty("callback");
	    }return o;
	  }function M() {
	    return V.geocoder || (V.geocoder = new q.Geocoder()), V.geocoder;
	  }function I() {
	    var t = [];this.get = function (n) {
	      if (t.length) {
	        var o,
	            i,
	            a,
	            r,
	            s,
	            u = d(n);for (o = 0; o < t.length; o++) {
	          for (r = t[o], s = u.length === r.keys.length, i = 0; i < u.length && s; i++) {
	            a = u[i], s = a in r.request, s && (s = e(n[a]) && "equals" in n[a] && z(n[a]) ? n[a].equals(r.request[a]) : n[a] === r.request[a]);
	          }if (s) return r.results;
	        }
	      }
	    }, this.store = function (n, e) {
	      t.push({ request: n, keys: d(n), results: e });
	    };
	  }function P() {
	    var t = [],
	        n = this;n.empty = function () {
	      return !t.length;
	    }, n.add = function (n) {
	      t.push(n);
	    }, n.get = function () {
	      return t.length ? t[0] : !1;
	    }, n.ack = function () {
	      t.shift();
	    };
	  }function B() {
	    function n(t) {
	      return { id: t.id, name: t.name, object: t.obj, tag: t.tag, data: t.data };
	    }function e(t) {
	      z(t.setMap) && t.setMap(null), z(t.remove) && t.remove(), z(t.free) && t.free(), t = null;
	    }var o = {},
	        i = {},
	        r = this;r.add = function (t, n, e, a) {
	      var u = t.td || {},
	          l = s(u.id);return o[n] || (o[n] = []), l in i && r.clearById(l), i[l] = { obj: e, sub: a, name: n, id: l, tag: u.tag, data: u.data }, o[n].push(l), l;
	    }, r.getById = function (t, e, o) {
	      var a = !1;return t in i && (a = e ? i[t].sub : o ? n(i[t]) : i[t].obj), a;
	    }, r.get = function (t, e, a, r) {
	      var s,
	          u,
	          l = v(a);if (!o[t] || !o[t].length) return null;for (s = o[t].length; s;) {
	        if (s--, u = o[t][e ? s : o[t].length - s - 1], u && i[u]) {
	          if (l && !l(i[u].tag)) continue;return r ? n(i[u]) : i[u].obj;
	        }
	      }return null;
	    }, r.all = function (t, e, r) {
	      var s = [],
	          u = v(e),
	          l = function l(t) {
	        var e, a;for (e = 0; e < o[t].length; e++) {
	          if (a = o[t][e], a && i[a]) {
	            if (u && !u(i[a].tag)) continue;s.push(r ? n(i[a]) : i[a].obj);
	          }
	        }
	      };if (t in o) l(t);else if (a(t)) for (t in o) {
	        l(t);
	      }return s;
	    }, r.rm = function (t, n, e) {
	      var a, s;if (!o[t]) return !1;if (n) {
	        if (e) for (a = o[t].length - 1; a >= 0 && (s = o[t][a], !n(i[s].tag)); a--) {} else for (a = 0; a < o[t].length && (s = o[t][a], !n(i[s].tag)); a++) {}
	      } else a = e ? o[t].length - 1 : 0;return a in o[t] ? r.clearById(o[t][a], a) : !1;
	    }, r.clearById = function (t, n) {
	      if (t in i) {
	        var r,
	            s = i[t].name;for (r = 0; a(n) && r < o[s].length; r++) {
	          t === o[s][r] && (n = r);
	        }return e(i[t].obj), i[t].sub && e(i[t].sub), delete i[t], o[s].splice(n, 1), !0;
	      }return !1;
	    }, r.objGetById = function (t) {
	      var n, e;if (o.clusterer) for (e in o.clusterer) {
	        if ((n = i[o.clusterer[e]].obj.getById(t)) !== !1) return n;
	      }return !1;
	    }, r.objClearById = function (t) {
	      var n;if (o.clusterer) for (n in o.clusterer) {
	        if (i[o.clusterer[n]].obj.clearById(t)) return !0;
	      }return null;
	    }, r.clear = function (t, n, e, i) {
	      var a,
	          s,
	          u,
	          l = v(i);if (t && t.length) t = h(t);else {
	        t = [];for (a in o) {
	          t.push(a);
	        }
	      }for (s = 0; s < t.length; s++) {
	        if (u = t[s], n) r.rm(u, l, !0);else if (e) r.rm(u, l, !1);else for (; r.rm(u, l, !1);) {}
	      }
	    }, r.objClear = function (n, e, a, r) {
	      var s;if (o.clusterer && (t.inArray("marker", n) >= 0 || !n.length)) for (s in o.clusterer) {
	        i[o.clusterer[s]].obj.clear(e, a, r);
	      }
	    };
	  }function k(n, e, i) {
	    function a(t) {
	      var n = {};return n[t] = {}, n;
	    }function r() {
	      var t;for (t in i) {
	        if (i.hasOwnProperty(t) && !u.hasOwnProperty(t)) return t;
	      }
	    }var s,
	        u = {},
	        l = this,
	        d = { latLng: { map: !1, marker: !1, infowindow: !1, circle: !1, overlay: !1, getlatlng: !1, getmaxzoom: !1, getelevation: !1, streetviewpanorama: !1, getaddress: !0 }, geoloc: { getgeoloc: !0 } };o(i) && (i = a(i)), l.run = function () {
	      for (var o, a; o = r();) {
	        if (z(n[o])) return s = o, a = t.extend(!0, {}, A[o] || {}, i[o].options || {}), void (o in d.latLng ? i[o].values ? L(i[o].values, n, n[o], { td: i[o], opts: a, session: u }) : w(n, n[o], d.latLng[o], { td: i[o], opts: a, session: u }) : o in d.geoloc ? b(n, n[o], { td: i[o], opts: a, session: u }) : n[o].apply(n, [{ td: i[o], opts: a, session: u }]));u[o] = null;
	      }e.apply(n, [i, u]);
	    }, l.ack = function (t) {
	      u[s] = t, l.run.apply(l, []);
	    };
	  }function j() {
	    return V.ds || (V.ds = new q.DirectionsService()), V.ds;
	  }function O() {
	    return V.dms || (V.dms = new q.DistanceMatrixService()), V.dms;
	  }function C() {
	    return V.mzs || (V.mzs = new q.MaxZoomService()), V.mzs;
	  }function T() {
	    return V.es || (V.es = new q.ElevationService()), V.es;
	  }function E(t, n) {
	    function e() {
	      var t = this;return t.onAdd = function () {}, t.onRemove = function () {}, t.draw = function () {}, A.classes.OverlayView.apply(t, []);
	    }e.prototype = A.classes.OverlayView.prototype;var o = new e();return o.setMap(t), o;
	  }function S(n, o, i) {
	    function a(t) {
	      S[t] || (delete _[t].options.map, S[t] = new A.classes.Marker(_[t].options), l(n, { td: _[t] }, S[t], _[t].id));
	    }function r() {
	      return (y = U.getProjection()) ? (P = !0, j.push(q.event.addListener(o, "zoom_changed", f)), j.push(q.event.addListener(o, "bounds_changed", f)), void h()) : void setTimeout(function () {
	        r.apply(k, []);
	      }, 25);
	    }function u(t) {
	      e(O[t]) ? (z(O[t].obj.setMap) && O[t].obj.setMap(null), z(O[t].obj.remove) && O[t].obj.remove(), z(O[t].shadow.remove) && O[t].obj.remove(), z(O[t].shadow.setMap) && O[t].shadow.setMap(null), delete O[t].obj, delete O[t].shadow) : S[t] && S[t].setMap(null), delete O[t];
	    }function d() {
	      var t,
	          n,
	          e,
	          o,
	          i,
	          a,
	          r,
	          s,
	          u = Math.cos,
	          l = Math.sin,
	          d = arguments;return d[0] instanceof q.LatLng ? (t = d[0].lat(), e = d[0].lng(), d[1] instanceof q.LatLng ? (n = d[1].lat(), o = d[1].lng()) : (n = d[1], o = d[2])) : (t = d[0], e = d[1], d[2] instanceof q.LatLng ? (n = d[2].lat(), o = d[2].lng()) : (n = d[2], o = d[3])), i = Math.PI * t / 180, a = Math.PI * e / 180, r = Math.PI * n / 180, s = Math.PI * o / 180, 6371e3 * Math.acos(Math.min(u(i) * u(r) * u(a) * u(s) + u(i) * l(a) * u(r) * l(s) + l(i) * l(r), 1));
	    }function c() {
	      var t = d(o.getCenter(), o.getBounds().getNorthEast()),
	          n = new q.Circle({ center: o.getCenter(), radius: 1.25 * t });return n.getBounds();
	    }function p() {
	      var t,
	          n = {};for (t in O) {
	        n[t] = !0;
	      }return n;
	    }function f() {
	      clearTimeout(m), m = setTimeout(h, 25);
	    }function g(t) {
	      var n = y.fromLatLngToDivPixel(t),
	          e = y.fromDivPixelToLatLng(new q.Point(n.x + i.radius, n.y - i.radius)),
	          o = y.fromDivPixelToLatLng(new q.Point(n.x - i.radius, n.y + i.radius));return new q.LatLngBounds(o, e);
	    }function h() {
	      if (!x && !I && P) {
	        var n,
	            e,
	            a,
	            r,
	            s,
	            l,
	            d,
	            f,
	            h,
	            v,
	            m,
	            y = !1,
	            b = [],
	            k = {},
	            j = o.getZoom(),
	            C = "maxZoom" in i && j > i.maxZoom,
	            T = p();for (M = !1, j > 3 && (s = c(), y = s.getSouthWest().lng() < s.getNorthEast().lng()), n = 0; n < _.length; n++) {
	          !_[n] || y && !s.contains(_[n].options.position) || w && !w(D[n]) || b.push(n);
	        }for (;;) {
	          for (n = 0; k[n] && n < b.length;) {
	            n++;
	          }if (n === b.length) break;if (r = [], B && !C) {
	            m = 10;do {
	              for (f = r, r = [], m--, d = f.length ? s.getCenter() : _[b[n]].options.position, s = g(d), e = n; e < b.length; e++) {
	                k[e] || s.contains(_[b[e]].options.position) && r.push(e);
	              }
	            } while (f.length < r.length && r.length > 1 && m);
	          } else for (e = n; e < b.length; e++) {
	            if (!k[e]) {
	              r.push(e);break;
	            }
	          }for (l = { indexes: [], ref: [] }, h = v = 0, a = 0; a < r.length; a++) {
	            k[r[a]] = !0, l.indexes.push(b[r[a]]), l.ref.push(b[r[a]]), h += _[b[r[a]]].options.position.lat(), v += _[b[r[a]]].options.position.lng();
	          }h /= r.length, v /= r.length, l.latLng = new q.LatLng(h, v), l.ref = l.ref.join("-"), l.ref in T ? delete T[l.ref] : (1 === r.length && (O[l.ref] = !0), L(l));
	        }t.each(T, function (t) {
	          u(t);
	        }), I = !1;
	      }
	    }var m,
	        y,
	        w,
	        L,
	        b,
	        x = !1,
	        M = !1,
	        I = !1,
	        P = !1,
	        B = !0,
	        k = this,
	        j = [],
	        O = {},
	        C = {},
	        T = {},
	        S = [],
	        _ = [],
	        D = [],
	        U = E(o, i.radius);r(), k.getById = function (t) {
	      return t in C ? (a(C[t]), S[C[t]]) : !1;
	    }, k.rm = function (t) {
	      var n = C[t];S[n] && S[n].setMap(null), delete S[n], S[n] = !1, delete _[n], _[n] = !1, delete D[n], D[n] = !1, delete C[t], delete T[n], M = !0;
	    }, k.clearById = function (t) {
	      return t in C ? (k.rm(t), !0) : void 0;
	    }, k.clear = function (t, n, e) {
	      var o,
	          i,
	          a,
	          r,
	          s,
	          u = [],
	          l = v(e);for (t ? (o = _.length - 1, i = -1, a = -1) : (o = 0, i = _.length, a = 1), r = o; r !== i && (!_[r] || l && !l(_[r].tag) || (u.push(T[r]), !n && !t)); r += a) {}for (s = 0; s < u.length; s++) {
	        k.rm(u[s]);
	      }
	    }, k.add = function (t, n) {
	      t.id = s(t.id), k.clearById(t.id), C[t.id] = S.length, T[S.length] = t.id, S.push(null), _.push(t), D.push(n), M = !0;
	    }, k.addMarker = function (t, e) {
	      e = e || {}, e.id = s(e.id), k.clearById(e.id), e.options || (e.options = {}), e.options.position = t.getPosition(), l(n, { td: e }, t, e.id), C[e.id] = S.length, T[S.length] = e.id, S.push(t), _.push(e), D.push(e.data || {}), M = !0;
	    }, k.td = function (t) {
	      return _[t];
	    }, k.value = function (t) {
	      return D[t];
	    }, k.marker = function (t) {
	      return t in S ? (a(t), S[t]) : !1;
	    }, k.markerIsSet = function (t) {
	      return Boolean(S[t]);
	    }, k.setMarker = function (t, n) {
	      S[t] = n;
	    }, k.store = function (t, n, e) {
	      O[t.ref] = { obj: n, shadow: e };
	    }, k.free = function () {
	      var n;for (n = 0; n < j.length; n++) {
	        q.event.removeListener(j[n]);
	      }j = [], t.each(O, function (t) {
	        u(t);
	      }), O = {}, t.each(_, function (t) {
	        _[t] = null;
	      }), _ = [], t.each(S, function (t) {
	        S[t] && (S[t].setMap(null), delete S[t]);
	      }), S = [], t.each(D, function (t) {
	        delete D[t];
	      }), D = [], C = {}, T = {};
	    }, k.filter = function (t) {
	      w = t, h();
	    }, k.enable = function (t) {
	      B !== t && (B = t, h());
	    }, k.display = function (t) {
	      L = t;
	    }, k.error = function (t) {
	      b = t;
	    }, k.beginUpdate = function () {
	      x = !0;
	    }, k.endUpdate = function () {
	      x = !1, M && h();
	    }, k.autofit = function (t) {
	      var n;for (n = 0; n < _.length; n++) {
	        _[n] && t.extend(_[n].options.position);
	      }
	    };
	  }function _(t, n) {
	    var e = this;e.id = function () {
	      return t;
	    }, e.filter = function (t) {
	      n.filter(t);
	    }, e.enable = function () {
	      n.enable(!0);
	    }, e.disable = function () {
	      n.enable(!1);
	    }, e.add = function (t, e, o) {
	      o || n.beginUpdate(), n.addMarker(t, e), o || n.endUpdate();
	    }, e.getById = function (t) {
	      return n.getById(t);
	    }, e.clearById = function (t, e) {
	      var o;return e || n.beginUpdate(), o = n.clearById(t), e || n.endUpdate(), o;
	    }, e.clear = function (t, e, o, i) {
	      i || n.beginUpdate(), n.clear(t, e, o), i || n.endUpdate();
	    };
	  }function D(n, e, o, i) {
	    var a = this,
	        r = [];A.classes.OverlayView.call(a), a.setMap(n), a.onAdd = function () {
	      var n = a.getPanes();e.pane in n && t(n[e.pane]).append(i), t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function (n, e) {
	        r.push(q.event.addDomListener(i[0], e, function (n) {
	          t.Event(n).stopPropagation(), q.event.trigger(a, e, [n]), a.draw();
	        }));
	      }), r.push(q.event.addDomListener(i[0], "contextmenu", function (n) {
	        t.Event(n).stopPropagation(), q.event.trigger(a, "rightclick", [n]), a.draw();
	      }));
	    }, a.getPosition = function () {
	      return o;
	    }, a.setPosition = function (t) {
	      o = t, a.draw();
	    }, a.draw = function () {
	      var t = a.getProjection().fromLatLngToDivPixel(o);i.css("left", t.x + e.offset.x + "px").css("top", t.y + e.offset.y + "px");
	    }, a.onRemove = function () {
	      var t;for (t = 0; t < r.length; t++) {
	        q.event.removeListener(r[t]);
	      }i.remove();
	    }, a.hide = function () {
	      i.hide();
	    }, a.show = function () {
	      i.show();
	    }, a.toggle = function () {
	      i && (i.is(":visible") ? a.show() : a.hide());
	    }, a.toggleDOM = function () {
	      a.setMap(a.getMap() ? null : n);
	    }, a.getDOMElement = function () {
	      return i[0];
	    };
	  }function U(i) {
	    function r() {
	      !b && (b = M.get()) && b.run();
	    }function d() {
	      b = null, M.ack(), r.call(x);
	    }function c(t) {
	      var n,
	          e = t.td.callback;e && (n = Array.prototype.slice.call(arguments, 1), z(e) ? e.apply(i, n) : R(e) && z(e[1]) && e[1].apply(e[0], n));
	    }function g(t, n, e) {
	      e && l(i, t, n, e), c(t, n), b.ack(n);
	    }function v(n, e) {
	      e = e || {};var o = e.td && e.td.options ? e.td.options : 0;E ? o && (o.center && (o.center = m(o.center)), E.setOptions(o)) : (o = e.opts || t.extend(!0, {}, A.map, o || {}), o.center = n || m(o.center), E = new A.classes.Map(i.get(0), o));
	    }function w(e) {
	      var o,
	          a,
	          r = new S(i, E, e),
	          s = {},
	          u = {},
	          d = [],
	          c = /^[0-9]+$/;for (a in e) {
	        c.test(a) ? (d.push(1 * a), u[a] = e[a], u[a].width = u[a].width || 0, u[a].height = u[a].height || 0) : s[a] = e[a];
	      }return d.sort(function (t, n) {
	        return t > n;
	      }), o = s.calculator ? function (n) {
	        var e = [];return t.each(n, function (t, n) {
	          e.push(r.value(n));
	        }), s.calculator.apply(i, [e]);
	      } : function (t) {
	        return t.length;
	      }, r.error(function () {
	        f.apply(x, arguments);
	      }), r.display(function (a) {
	        var c,
	            p,
	            f,
	            g,
	            h,
	            v,
	            y = o(a.indexes);if (e.force || y > 1) for (c = 0; c < d.length; c++) {
	          d[c] <= y && (p = u[d[c]]);
	        }p ? (h = p.offset || [-p.width / 2, -p.height / 2], f = t.extend({}, s), f.options = t.extend({ pane: "overlayLayer", content: p.content ? p.content.replace("CLUSTER_COUNT", y) : "", offset: { x: ("x" in h ? h.x : h[0]) || 0, y: ("y" in h ? h.y : h[1]) || 0 } }, s.options || {}), g = x.overlay({ td: f, opts: f.options, latLng: m(a) }, !0), f.options.pane = "floatShadow", f.options.content = t(document.createElement("div")).width(p.width + "px").height(p.height + "px").css({ cursor: "pointer" }), v = x.overlay({ td: f, opts: f.options, latLng: m(a) }, !0), s.data = { latLng: m(a), markers: [] }, t.each(a.indexes, function (t, n) {
	          s.data.markers.push(r.value(n)), r.markerIsSet(n) && r.marker(n).setMap(null);
	        }), l(i, { td: s }, v, n, { main: g, shadow: v }), r.store(a, g, v)) : t.each(a.indexes, function (t, n) {
	          r.marker(n).setMap(E);
	        });
	      }), r;
	    }function L(n, e, o) {
	      var a = [],
	          r = "values" in n.td;return r || (n.td.values = [{ options: n.opts }]), n.td.values.length ? (v(), t.each(n.td.values, function (t, r) {
	        var s,
	            u,
	            d,
	            c,
	            f = p(n, r);if (f.options[o]) if (f.options[o][0][0] && R(f.options[o][0][0])) for (u = 0; u < f.options[o].length; u++) {
	          for (d = 0; d < f.options[o][u].length; d++) {
	            f.options[o][u][d] = m(f.options[o][u][d]);
	          }
	        } else for (u = 0; u < f.options[o].length; u++) {
	          f.options[o][u] = m(f.options[o][u]);
	        }f.options.map = E, c = new q[e](f.options), a.push(c), s = I.add({ td: f }, e.toLowerCase(), c), l(i, { td: f }, c, s);
	      }), void g(n, r ? a : a[0])) : void g(n, !1);
	    }var b,
	        x = this,
	        M = new P(),
	        I = new B(),
	        E = null;x._plan = function (t) {
	      var n;for (n = 0; n < t.length; n++) {
	        M.add(new k(x, d, t[n]));
	      }r();
	    }, x.map = function (t) {
	      v(t.latLng, t), l(i, t, E), g(t, E);
	    }, x.destroy = function (t) {
	      I.clear(), i.empty(), E && (E = null), g(t, !0);
	    }, x.overlay = function (n, e) {
	      var o = [],
	          a = "values" in n.td;return a || (n.td.values = [{ latLng: n.latLng, options: n.opts }]), n.td.values.length ? (D.__initialised || (D.prototype = new A.classes.OverlayView(), D.__initialised = !0), t.each(n.td.values, function (a, r) {
	        var s,
	            u,
	            d = p(n, r),
	            c = t(document.createElement("div")).css({ border: "none", borderWidth: 0, position: "absolute" });c.append(d.options.content), u = new D(E, d.options, m(d) || m(r), c), o.push(u), c = null, e || (s = I.add(n, "overlay", u), l(i, { td: d }, u, s));
	      }), e ? o[0] : void g(n, a ? o : o[0])) : void g(n, !1);
	    }, x.marker = function (n) {
	      var e,
	          o,
	          a,
	          r = "values" in n.td,
	          u = !E;return r || (n.opts.position = n.latLng || m(n.opts.position), n.td.values = [{ options: n.opts }]), n.td.values.length ? (u && v(), n.td.cluster && !E.getBounds() ? void q.event.addListenerOnce(E, "bounds_changed", function () {
	        x.marker.apply(x, [n]);
	      }) : void (n.td.cluster ? (n.td.cluster instanceof _ ? (o = n.td.cluster, a = I.getById(o.id(), !0)) : (a = w(n.td.cluster), o = new _(s(n.td.id, !0), a), I.add(n, "clusterer", o, a)), a.beginUpdate(), t.each(n.td.values, function (t, e) {
	        var o = p(n, e);o.options.position = m(o.options.position ? o.options.position : e), o.options.position && (o.options.map = E, u && (E.setCenter(o.options.position), u = !1), a.add(o, e));
	      }), a.endUpdate(), g(n, o)) : (e = [], t.each(n.td.values, function (t, o) {
	        var a,
	            r,
	            s = p(n, o);s.options.position = m(s.options.position ? s.options.position : o), s.options.position && (s.options.map = E, u && (E.setCenter(s.options.position), u = !1), r = new A.classes.Marker(s.options), e.push(r), a = I.add({ td: s }, "marker", r), l(i, { td: s }, r, a));
	      }), g(n, r ? e : e[0])))) : void g(n, !1);
	    }, x.getroute = function (t) {
	      t.opts.origin = m(t.opts.origin, !0), t.opts.destination = m(t.opts.destination, !0), j().route(t.opts, function (n, e) {
	        c(t, e === q.DirectionsStatus.OK ? n : !1, e), b.ack();
	      });
	    }, x.getdistance = function (t) {
	      var n;for (t.opts.origins = h(t.opts.origins), n = 0; n < t.opts.origins.length; n++) {
	        t.opts.origins[n] = m(t.opts.origins[n], !0);
	      }for (t.opts.destinations = h(t.opts.destinations), n = 0; n < t.opts.destinations.length; n++) {
	        t.opts.destinations[n] = m(t.opts.destinations[n], !0);
	      }O().getDistanceMatrix(t.opts, function (n, e) {
	        c(t, e === q.DistanceMatrixStatus.OK ? n : !1, e), b.ack();
	      });
	    }, x.infowindow = function (e) {
	      var o = [],
	          r = "values" in e.td;r || (e.latLng && (e.opts.position = e.latLng), e.td.values = [{ options: e.opts }]), t.each(e.td.values, function (t, s) {
	        var u,
	            d,
	            c = p(e, s);c.options.position = m(c.options.position ? c.options.position : s.latLng), E || v(c.options.position), d = new A.classes.InfoWindow(c.options), d && (a(c.open) || c.open) && (r ? d.open(E, c.anchor || n) : d.open(E, c.anchor || (e.latLng ? n : e.session.marker ? e.session.marker : n))), o.push(d), u = I.add({ td: c }, "infowindow", d), l(i, { td: c }, d, u);
	      }), g(e, r ? o : o[0]);
	    }, x.circle = function (n) {
	      var e = [],
	          o = "values" in n.td;return o || (n.opts.center = n.latLng || m(n.opts.center), n.td.values = [{ options: n.opts }]), n.td.values.length ? (t.each(n.td.values, function (t, o) {
	        var a,
	            r,
	            s = p(n, o);s.options.center = m(s.options.center ? s.options.center : o), E || v(s.options.center), s.options.map = E, r = new A.classes.Circle(s.options), e.push(r), a = I.add({ td: s }, "circle", r), l(i, { td: s }, r, a);
	      }), void g(n, o ? e : e[0])) : void g(n, !1);
	    }, x.getaddress = function (t) {
	      c(t, t.results, t.status), b.ack();
	    }, x.getlatlng = function (t) {
	      c(t, t.results, t.status), b.ack();
	    }, x.getmaxzoom = function (t) {
	      C().getMaxZoomAtLatLng(t.latLng, function (n) {
	        c(t, n.status === q.MaxZoomStatus.OK ? n.zoom : !1, status), b.ack();
	      });
	    }, x.getelevation = function (t) {
	      var n,
	          e = [],
	          o = function o(n, e) {
	        c(t, e === q.ElevationStatus.OK ? n : !1, e), b.ack();
	      };if (t.latLng) e.push(t.latLng);else for (e = h(t.td.locations || []), n = 0; n < e.length; n++) {
	        e[n] = m(e[n]);
	      }if (e.length) T().getElevationForLocations({ locations: e }, o);else {
	        if (t.td.path && t.td.path.length) for (n = 0; n < t.td.path.length; n++) {
	          e.push(m(t.td.path[n]));
	        }e.length ? T().getElevationAlongPath({ path: e, samples: t.td.samples }, o) : b.ack();
	      }
	    }, x.defaults = function (n) {
	      t.each(n.td, function (n, o) {
	        e(A[n]) ? A[n] = t.extend({}, A[n], o) : A[n] = o;
	      }), b.ack(!0);
	    }, x.rectangle = function (n) {
	      var e = [],
	          o = "values" in n.td;return o || (n.td.values = [{ options: n.opts }]), n.td.values.length ? (t.each(n.td.values, function (t, o) {
	        var a,
	            r,
	            s = p(n, o);s.options.bounds = y(s.options.bounds ? s.options.bounds : o), E || v(s.options.bounds.getCenter()), s.options.map = E, r = new A.classes.Rectangle(s.options), e.push(r), a = I.add({ td: s }, "rectangle", r), l(i, { td: s }, r, a);
	      }), void g(n, o ? e : e[0])) : void g(n, !1);
	    }, x.polyline = function (t) {
	      L(t, "Polyline", "path");
	    }, x.polygon = function (t) {
	      L(t, "Polygon", "paths");
	    }, x.trafficlayer = function (t) {
	      v();var n = I.get("trafficlayer");n || (n = new A.classes.TrafficLayer(), n.setMap(E), I.add(t, "trafficlayer", n)), g(t, n);
	    }, x.transitlayer = function (t) {
	      v();var n = I.get("transitlayer");n || (n = new A.classes.TransitLayer(), n.setMap(E), I.add(t, "transitlayer", n)), g(t, n);
	    }, x.bicyclinglayer = function (t) {
	      v();var n = I.get("bicyclinglayer");n || (n = new A.classes.BicyclingLayer(), n.setMap(E), I.add(t, "bicyclinglayer", n)), g(t, n);
	    }, x.groundoverlay = function (t) {
	      t.opts.bounds = y(t.opts.bounds), t.opts.bounds && v(t.opts.bounds.getCenter());var n,
	          e = new A.classes.GroundOverlay(t.opts.url, t.opts.bounds, t.opts.opts);e.setMap(E), n = I.add(t, "groundoverlay", e), g(t, e, n);
	    }, x.streetviewpanorama = function (n) {
	      n.opts.opts || (n.opts.opts = {}), n.latLng ? n.opts.opts.position = n.latLng : n.opts.opts.position && (n.opts.opts.position = m(n.opts.opts.position)), n.td.divId ? n.opts.container = document.getElementById(n.td.divId) : n.opts.container && (n.opts.container = t(n.opts.container).get(0));var e,
	          o = new A.classes.StreetViewPanorama(n.opts.container, n.opts.opts);o && E.setStreetView(o), e = I.add(n, "streetviewpanorama", o), g(n, o, e);
	    }, x.kmllayer = function (n) {
	      var e = [],
	          o = "values" in n.td;return o || (n.td.values = [{ options: n.opts }]), n.td.values.length ? (t.each(n.td.values, function (t, o) {
	        var a,
	            r,
	            s,
	            d = p(n, o);E || v(), s = d.options, d.options.opts && (s = d.options.opts, d.options.url && (s.url = d.options.url)), s.map = E, r = u("3.10") ? new A.classes.KmlLayer(s) : new A.classes.KmlLayer(s.url, s), e.push(r), a = I.add({ td: d }, "kmllayer", r), l(i, { td: d }, r, a);
	      }), void g(n, o ? e : e[0])) : void g(n, !1);
	    }, x.panel = function (n) {
	      v();var e,
	          o,
	          r = 0,
	          s = 0,
	          u = t(document.createElement("div"));u.css({ position: "absolute", zIndex: 1e3, visibility: "hidden" }), n.opts.content && (o = t(n.opts.content), u.append(o), i.first().prepend(u), a(n.opts.left) ? a(n.opts.right) ? n.opts.center && (r = (i.width() - o.width()) / 2) : r = i.width() - o.width() - n.opts.right : r = n.opts.left, a(n.opts.top) ? a(n.opts.bottom) ? n.opts.middle && (s = (i.height() - o.height()) / 2) : s = i.height() - o.height() - n.opts.bottom : s = n.opts.top, u.css({ top: s, left: r, visibility: "visible" })), e = I.add(n, "panel", u), g(n, u, e), u = null;
	    }, x.directionsrenderer = function (n) {
	      n.opts.map = E;var e,
	          o = new q.DirectionsRenderer(n.opts);n.td.divId ? o.setPanel(document.getElementById(n.td.divId)) : n.td.container && o.setPanel(t(n.td.container).get(0)), e = I.add(n, "directionsrenderer", o), g(n, o, e);
	    }, x.getgeoloc = function (t) {
	      g(t, t.latLng);
	    }, x.styledmaptype = function (t) {
	      v();var n = new A.classes.StyledMapType(t.td.styles, t.opts);E.mapTypes.set(t.td.id, n), g(t, n);
	    }, x.imagemaptype = function (t) {
	      v();var n = new A.classes.ImageMapType(t.opts);E.mapTypes.set(t.td.id, n), g(t, n);
	    }, x.autofit = function (n) {
	      var e = new q.LatLngBounds();t.each(I.all(), function (t, n) {
	        n.getPosition && n.getPosition() ? e.extend(n.getPosition()) : n.getBounds && n.getBounds() ? (e.extend(n.getBounds().getNorthEast()), e.extend(n.getBounds().getSouthWest())) : n.getPaths && n.getPaths() ? n.getPaths().forEach(function (t) {
	          t.forEach(function (t) {
	            e.extend(t);
	          });
	        }) : n.getPath && n.getPath() ? n.getPath().forEach(function (t) {
	          e.extend(t);
	        }) : n.getCenter && n.getCenter() ? e.extend(n.getCenter()) : "function" == typeof _ && n instanceof _ && (n = I.getById(n.id(), !0), n && n.autofit(e));
	      }), e.isEmpty() || E.getBounds() && E.getBounds().equals(e) || ("maxZoom" in n.td && q.event.addListenerOnce(E, "bounds_changed", function () {
	        this.getZoom() > n.td.maxZoom && this.setZoom(n.td.maxZoom);
	      }), E.fitBounds(e)), g(n, !0);
	    }, x.clear = function (n) {
	      if (o(n.td)) {
	        if (I.clearById(n.td) || I.objClearById(n.td)) return void g(n, !0);n.td = { name: n.td };
	      }n.td.id ? t.each(h(n.td.id), function (t, n) {
	        I.clearById(n) || I.objClearById(n);
	      }) : (I.clear(h(n.td.name), n.td.last, n.td.first, n.td.tag), I.objClear(h(n.td.name), n.td.last, n.td.first, n.td.tag)), g(n, !0);
	    }, x.get = function (e, i, a) {
	      var r,
	          s,
	          u = i ? e : e.td;return i || (a = u.full), o(u) ? (s = I.getById(u, !1, a) || I.objGetById(u), s === !1 && (r = u, u = {})) : r = u.name, "map" === r && (s = E), s || (s = [], u.id ? (t.each(h(u.id), function (t, n) {
	        s.push(I.getById(n, !1, a) || I.objGetById(n));
	      }), R(u.id) || (s = s[0])) : (t.each(r ? h(r) : [n], function (n, e) {
	        var o;u.first ? (o = I.get(e, !1, u.tag, a), o && s.push(o)) : u.all ? t.each(I.all(e, u.tag, a), function (t, n) {
	          s.push(n);
	        }) : (o = I.get(e, !0, u.tag, a), o && s.push(o));
	      }), u.all || R(r) || (s = s[0]))), s = R(s) || !u.all ? s : [s], i ? s : void g(e, s);
	    }, x.exec = function (n) {
	      t.each(h(n.td.func), function (e, o) {
	        t.each(x.get(n.td, !0, n.td.hasOwnProperty("full") ? n.td.full : !0), function (t, n) {
	          o.call(i, n);
	        });
	      }), g(n, !0);
	    }, x.trigger = function (n) {
	      if (o(n.td)) q.event.trigger(E, n.td);else {
	        var e = [E, n.td.eventName];n.td.var_args && t.each(n.td.var_args, function (t, n) {
	          e.push(n);
	        }), q.event.trigger.apply(q.event, e);
	      }c(n), b.ack();
	    };
	  }var A,
	      q,
	      Z = 0,
	      z = t.isFunction,
	      R = t.isArray,
	      V = {},
	      G = new I();t.fn.gmap3 = function () {
	    var n,
	        e = [],
	        o = !0,
	        i = [];for (r(), n = 0; n < arguments.length; n++) {
	      arguments[n] && e.push(arguments[n]);
	    }return e.length || e.push("map"), t.each(this, function () {
	      var n = t(this),
	          a = n.data("gmap3");o = !1, a || (a = new U(n), n.data("gmap3", a)), 1 !== e.length || "get" !== e[0] && !x(e[0]) ? a._plan(e) : "get" === e[0] ? i.push(a.get("map", !0)) : i.push(a.get(e[0].get, !0, e[0].get.full));
	    }), i.length ? 1 === i.length ? i[0] : i : this;
	  };
		}(jQuery);

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWU1ODRjZDAxNzBjNDUxY2YwYTc/ZWRhZiIsIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvYmxvY2tzL3NsaWRlci9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ibG9ja3MvZmVlZGJhY2svZmVlZGJhY2suanMiLCJ3ZWJwYWNrOi8vL3NyYy9ibG9ja3MvbWFwL2pzL21hcC5qcyIsIndlYnBhY2s6Ly8vc3JjL2Jsb2Nrcy9tYXAvanMvZ21hcDMubWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNWU1ODRjZDAxNzBjNDUxY2YwYTdcbiAqKi8iLCJpbXBvcnQgJy4vYmxvY2tzL3NsaWRlci9zbGlkZXIuanMnO1xuaW1wb3J0ICcuL2Jsb2Nrcy9mZWVkYmFjay9mZWVkYmFjay5qcyc7XG5pbXBvcnQgJy4vYmxvY2tzL21hcC9qcy9tYXAuanMnO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2luZGV4LmpzXG4gKiovIiwibGV0IF9zZXRQYWdlQmcgPSAoZWxlbWVudCkgPT4ge1xuICBsZXQgcGFnZUJnO1xuICBjb25zb2xlLmxvZyggJChlbGVtZW50KS5hdHRyKCdpZCcpICk7XG4gIHN3aXRjaCggJChlbGVtZW50KS5hdHRyKCdpZCcpICkge1xuICAgIGNhc2UgJ3NsaWRlcl9fcG9pbnQtLTEnOlxuICAgICAgcGFnZUJnID0gJyM4NDlkOGYnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2xpZGVyX19wb2ludC0tMic6XG4gICAgICBwYWdlQmcgPSAnIzg5OTZhNic7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzbGlkZXJfX3BvaW50LS0zJzpcbiAgICAgIHBhZ2VCZyA9ICcjOWQ4Yjg0JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBwYWdlQmcgPSAnIzg0OWQ4Zic7XG4gIH1cblxuICAkKCdib2R5JykuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgcGFnZUJnKTtcbn07XG5cbihmdW5jdGlvbigpIHtcbiAgJCgnI3NsaWRlcl9fcG9pbnQtLTEnKS5hdHRyKCdjaGVja2VkJywgJ3RydWUnKTtcbiAgX3NldFBhZ2VCZyggJCgnI3NsaWRlcl9fcG9pbnQtLTEnKSApO1xuXG4gICQoJy5zbGlkZXJfX3BvaW50JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgX3NldFBhZ2VCZyh0aGlzKTtcbiAgfSk7XG59KSgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2Jsb2Nrcy9zbGlkZXIvc2xpZGVyLmpzXG4gKiovIiwiLyoqXG4gKiBIdG1sIERPTS1lbGVtZW50XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtFbGVtZW50fVxuICovXG5jb25zdCBwYWdlID0gJCgnaHRtbCcpO1xuXG4vKipcbiAqIERPTS1lbGVtZW50cyBmb3IgZmVlZGJhY2sgbW9kYWwgd2luZG93XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IG1vZGFsRmVlZGJhY2sgPSB7XG4gIHdpbmRvdzogJCgnI2ZlZWRiYWNrJyksXG4gIGJ0blNob3c6ICQoJy5idG4tLWZlZWRiYWNrLXNob3cnKSxcbiAgYnRuQ2xvc2U6ICQoJyNmZWVkYmFjayAuaWNvbi0tY2xvc2UnKSxcbiAgZmllbGRzOiAkKCcjZmVlZGJhY2sgaW5wdXQsICNmZWVkYmFjayB0ZXh0YXJlYScpXG59O1xuXG4vKipcbiAqIFNob3cgbW9kYWwgZnVuY3Rpb25cbiAqIEBwYXJhbSAge0VsZW1lbnR9IG1vZGFsXG4gKi9cbmxldCBfc2hvd01vZGFsID0gKG1vZGFsKSA9PiB7XG4gIG1vZGFsLmFkZENsYXNzKCdtb2RhbC0tYWN0aXZlJyk7XG4gIGxldCB3aWR0aCA9ICQoJ2JvZHknKS53aWR0aCgpO1xuICAkKCdib2R5Jykud2lkdGgod2lkdGgpO1xuICBwYWdlLmFkZENsYXNzKCdsb2NrJyk7XG59O1xuXG4vKipcbiAqIEhpZGUgbW9kYWwgZnVuY3Rpb25cbiAqIEBwYXJhbSAge0VsZW1lbnR9IG1vZGFsXG4gKi9cbmxldCBfaGlkZU1vZGFsID0gKG1vZGFsKSA9PiB7XG4gIG1vZGFsLnJlbW92ZUNsYXNzKCdtb2RhbC0tYWN0aXZlJyk7XG4gIHBhZ2UucmVtb3ZlQ2xhc3MoJ2xvY2snKTtcbn07XG5cbi8qKlxuICogSGFuZGxlciBmb3IgY2xpY2tpbmcgb24gYnV0dG9uICdTaG93IG1vZGFsIHdpbmRvdydcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG1vZGFsXG4gKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gKi9cbmxldCBfb25TaG93Q2xpY2sgPSAobW9kYWwpID0+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBfc2hvd01vZGFsKG1vZGFsKTtcbiAgfTtcbn07XG5cbi8qKlxuICogSGFuZGxlciBmb3IgY2xpY2tpbmcgb24gYnV0dG9uICdIaWRlIG1vZGFsIHdpbmRvdydcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG1vZGFsXG4gKi9cbmxldCBfb25DbG9zZUNsaWNrID0gKG1vZGFsKSA9PiB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBfaGlkZU1vZGFsKG1vZGFsKTtcbiAgfTtcbn07XG5cbi8qKlxuICogSGFuZGxlciBmb3IgY2xpY2tpbmcgb24gbW9kYWwgd2luZG93IG92ZXJsYXlcbiAqIEBwYXJhbSAge0VsZW1lbnR9IG1vZGFsXG4gKiBAcGFyYW0gIHtPYmplY3R9IGV2ZW50XG4gKi9cbmxldCBfb25PdmVybGF5Q2xpY2sgPSAobW9kYWwpID0+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgJCgnYm9keScpLndpZHRoKCcnKTtcbiAgICAgIF9oaWRlTW9kYWwobW9kYWwpO1xuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogSGFuZGxlciBmb3IgY2hhbmdpbmcgdmFsdWVzIG9mIGZpZWxkcyBpbiBmZWRkYmFjayBmb3JtXG4gKi9cbmxldCBfb25GaWVsZFZhbHVlQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZpbGxlZCcsICQodGhpcykudmFsKCkgIT09ICcnKTtcbn07XG5cbi8vIFNldCBldmVudCBoYW5kbGVycyBmb3IgZmVlZGJhY2sgd2luZG93XG5tb2RhbEZlZWRiYWNrLmJ0blNob3cuY2xpY2soX29uU2hvd0NsaWNrKG1vZGFsRmVlZGJhY2sud2luZG93KSk7XG5tb2RhbEZlZWRiYWNrLmJ0bkNsb3NlLmNsaWNrKF9vbkNsb3NlQ2xpY2sobW9kYWxGZWVkYmFjay53aW5kb3cpKTtcbm1vZGFsRmVlZGJhY2sud2luZG93LmNsaWNrKF9vbk92ZXJsYXlDbGljayhtb2RhbEZlZWRiYWNrLndpbmRvdykpO1xubW9kYWxGZWVkYmFjay5maWVsZHMuY2hhbmdlKF9vbkZpZWxkVmFsdWVDaGFuZ2UpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2Jsb2Nrcy9mZWVkYmFjay9mZWVkYmFjay5qc1xuICoqLyIsImltcG9ydCAnLi9nbWFwMy5taW4nO1xuXG4kKCcuZ29vZ2xlLW1hcCcpLmdtYXAzKHtcbiAgbWFwOiB7XG4gICAgb3B0aW9uczoge1xuICAgICAgY2VudGVyOiBbNTkuOTM5NDk0OSwgMzAuMzI4MzMwMl0sXG4gICAgICB6b29tOiAxNixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjUnLFxuICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxuICAgICAgbWFwVHlwZUNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgIHN0eWxlOiB3aW5kb3cuZ29vZ2xlLm1hcHMuTWFwVHlwZUNvbnRyb2xTdHlsZS5EUk9QRE9XTl9NRU5VXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtYXJrZXI6IHtcbiAgICBsYXRMbmc6IFs1OS45Mzg3OTQyLCAzMC4zMjMwODMzXSxcbiAgICBvcHRpb25zOiB7XG4gICAgICBpY29uOiBuZXcgd2luZG93Lmdvb2dsZS5tYXBzLk1hcmtlckltYWdlKCdpbWcvbWFwL2ltZy9tYXJrZXIucG5nJylcbiAgICB9XG4gIH1cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2Jsb2Nrcy9tYXAvanMvbWFwLmpzXG4gKiovIiwiIWZ1bmN0aW9uKHQsbil7ZnVuY3Rpb24gZSh0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdH1mdW5jdGlvbiBvKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIGkodCl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHR9ZnVuY3Rpb24gYSh0KXtyZXR1cm4gdD09PW59ZnVuY3Rpb24gcigpe3E9Z29vZ2xlLm1hcHMsQXx8KEE9e3ZlcmJvc2U6ITEscXVlcnlMaW1pdDp7YXR0ZW1wdDo1LGRlbGF5OjI1MCxyYW5kb206MjUwfSxjbGFzc2VzOmZ1bmN0aW9uKCl7dmFyIG49e307cmV0dXJuIHQuZWFjaChcIk1hcCBNYXJrZXIgSW5mb1dpbmRvdyBDaXJjbGUgUmVjdGFuZ2xlIE92ZXJsYXlWaWV3IFN0cmVldFZpZXdQYW5vcmFtYSBLbWxMYXllciBUcmFmZmljTGF5ZXIgVHJhbnNpdExheWVyIEJpY3ljbGluZ0xheWVyIEdyb3VuZE92ZXJsYXkgU3R5bGVkTWFwVHlwZSBJbWFnZU1hcFR5cGVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24odCxlKXtuW2VdPXFbZV19KSxufSgpLG1hcDp7bWFwVHlwZUlkOnEuTWFwVHlwZUlkLlJPQURNQVAsY2VudGVyOls0Ni41Nzg0OTgsMi40NTcyNzVdLHpvb206Mn0sb3ZlcmxheTp7cGFuZTpcImZsb2F0UGFuZVwiLGNvbnRlbnQ6XCJcIixvZmZzZXQ6e3g6MCx5OjB9fSxnZW9sb2M6e2dldEN1cnJlbnRQb3NpdGlvbjp7bWF4aW11bUFnZTo2ZTQsdGltZW91dDo1ZTN9fX0pfWZ1bmN0aW9uIHModCxuKXtyZXR1cm4gYSh0KT9cImdtYXAzX1wiKyhuP1orMTorK1opOnR9ZnVuY3Rpb24gdSh0KXt2YXIgbixlPXEudmVyc2lvbi5zcGxpdChcIi5cIik7Zm9yKHQ9dC5zcGxpdChcIi5cIiksbj0wO248ZS5sZW5ndGg7bisrKWVbbl09cGFyc2VJbnQoZVtuXSwxMCk7Zm9yKG49MDtuPHQubGVuZ3RoO24rKyl7aWYodFtuXT1wYXJzZUludCh0W25dLDEwKSwhZS5oYXNPd25Qcm9wZXJ0eShuKSlyZXR1cm4hMTtpZihlW25dPHRbbl0pcmV0dXJuITF9cmV0dXJuITB9ZnVuY3Rpb24gbChuLGUsbyxpLGEpe2Z1bmN0aW9uIHIoZSxpKXtlJiZ0LmVhY2goZSxmdW5jdGlvbih0LGUpe3ZhciByPW4scz1lO1IoZSkmJihyPWVbMF0scz1lWzFdKSxpKG8sdCxmdW5jdGlvbih0KXtzLmFwcGx5KHIsW2F8fG8sdCx1XSl9KX0pfXZhciBzPWUudGR8fHt9LHU9e2lkOmksZGF0YTpzLmRhdGEsdGFnOnMudGFnfTtyKHMuZXZlbnRzLHEuZXZlbnQuYWRkTGlzdGVuZXIpLHIocy5vbmNlcyxxLmV2ZW50LmFkZExpc3RlbmVyT25jZSl9ZnVuY3Rpb24gZCh0KXt2YXIgbixlPVtdO2ZvcihuIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShuKSYmZS5wdXNoKG4pO3JldHVybiBlfWZ1bmN0aW9uIGModCxuKXt2YXIgZSxvPWFyZ3VtZW50cztmb3IoZT0yO2U8by5sZW5ndGg7ZSsrKWlmKG4gaW4gb1tlXSYmb1tlXS5oYXNPd25Qcm9wZXJ0eShuKSlyZXR1cm4gdm9pZCh0W25dPW9bZV1bbl0pfWZ1bmN0aW9uIHAobixlKXt2YXIgbyxpLGE9W1wiZGF0YVwiLFwidGFnXCIsXCJpZFwiLFwiZXZlbnRzXCIsXCJvbmNlc1wiXSxyPXt9O2lmKG4udGQpZm9yKG8gaW4gbi50ZCluLnRkLmhhc093blByb3BlcnR5KG8pJiZcIm9wdGlvbnNcIiE9PW8mJlwidmFsdWVzXCIhPT1vJiYocltvXT1uLnRkW29dKTtmb3IoaT0wO2k8YS5sZW5ndGg7aSsrKWMocixhW2ldLGUsbi50ZCk7cmV0dXJuIHIub3B0aW9ucz10LmV4dGVuZCh7fSxuLm9wdHN8fHt9LGUub3B0aW9uc3x8e30pLHJ9ZnVuY3Rpb24gZigpe2lmKEEudmVyYm9zZSl7dmFyIHQsbj1bXTtpZih3aW5kb3cuY29uc29sZSYmeihjb25zb2xlLmVycm9yKSl7Zm9yKHQ9MDt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKW4ucHVzaChhcmd1bWVudHNbdF0pO2NvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSxuKX1lbHNle2ZvcihuPVwiXCIsdD0wO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspbis9YXJndW1lbnRzW3RdLnRvU3RyaW5nKCkrXCIgXCI7YWxlcnQobil9fX1mdW5jdGlvbiBnKHQpe3JldHVybihpKHQpfHxvKHQpKSYmXCJcIiE9PXQmJiFpc05hTih0KX1mdW5jdGlvbiBoKHQpe3ZhciBuLG89W107aWYoIWEodCkpaWYoZSh0KSlpZihpKHQubGVuZ3RoKSlvPXQ7ZWxzZSBmb3IobiBpbiB0KW8ucHVzaCh0W25dKTtlbHNlIG8ucHVzaCh0KTtyZXR1cm4gb31mdW5jdGlvbiB2KG4pe3JldHVybiBuP3oobik/bjoobj1oKG4pLGZ1bmN0aW9uKG8pe3ZhciBpO2lmKGEobykpcmV0dXJuITE7aWYoZShvKSl7Zm9yKGk9MDtpPG8ubGVuZ3RoO2krKylpZih0LmluQXJyYXkob1tpXSxuKT49MClyZXR1cm4hMDtyZXR1cm4hMX1yZXR1cm4gdC5pbkFycmF5KG8sbik+PTB9KTp2b2lkIDB9ZnVuY3Rpb24gbSh0LG4sZSl7dmFyIGk9bj90Om51bGw7cmV0dXJuIXR8fG8odCk/aTp0LmxhdExuZz9tKHQubGF0TG5nKTp0IGluc3RhbmNlb2YgcS5MYXRMbmc/dDpnKHQubGF0KT9uZXcgcS5MYXRMbmcodC5sYXQsdC5sbmcpOiFlJiZSKHQpJiZnKHRbMF0pJiZnKHRbMV0pP25ldyBxLkxhdExuZyh0WzBdLHRbMV0pOml9ZnVuY3Rpb24geSh0KXt2YXIgbixlO3JldHVybiF0fHx0IGluc3RhbmNlb2YgcS5MYXRMbmdCb3VuZHM/dHx8bnVsbDooUih0KT8yPT09dC5sZW5ndGg/KG49bSh0WzBdKSxlPW0odFsxXSkpOjQ9PT10Lmxlbmd0aCYmKG49bShbdFswXSx0WzFdXSksZT1tKFt0WzJdLHRbM11dKSk6XCJuZVwiaW4gdCYmXCJzd1wiaW4gdD8obj1tKHQubmUpLGU9bSh0LnN3KSk6XCJuXCJpbiB0JiZcImVcImluIHQmJlwic1wiaW4gdCYmXCJ3XCJpbiB0JiYobj1tKFt0Lm4sdC5lXSksZT1tKFt0LnMsdC53XSkpLG4mJmU/bmV3IHEuTGF0TG5nQm91bmRzKGUsbik6bnVsbCl9ZnVuY3Rpb24gdyh0LG4sZSxpLGEpe3ZhciByPWU/bShpLnRkLCExLCEwKTohMSxzPXI/e2xhdExuZzpyfTppLnRkLmFkZHJlc3M/byhpLnRkLmFkZHJlc3MpP3thZGRyZXNzOmkudGQuYWRkcmVzc306aS50ZC5hZGRyZXNzOiExLHU9cz9HLmdldChzKTohMSxsPXRoaXM7cz8oYT1hfHwwLHU/KGkubGF0TG5nPXUucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbixpLnJlc3VsdHM9dS5yZXN1bHRzLGkuc3RhdHVzPXUuc3RhdHVzLG4uYXBwbHkodCxbaV0pKToocy5sb2NhdGlvbiYmKHMubG9jYXRpb249bShzLmxvY2F0aW9uKSkscy5ib3VuZHMmJihzLmJvdW5kcz15KHMuYm91bmRzKSksTSgpLmdlb2NvZGUocyxmdW5jdGlvbihvLHIpe3I9PT1xLkdlb2NvZGVyU3RhdHVzLk9LPyhHLnN0b3JlKHMse3Jlc3VsdHM6byxzdGF0dXM6cn0pLGkubGF0TG5nPW9bMF0uZ2VvbWV0cnkubG9jYXRpb24saS5yZXN1bHRzPW8saS5zdGF0dXM9cixuLmFwcGx5KHQsW2ldKSk6cj09PXEuR2VvY29kZXJTdGF0dXMuT1ZFUl9RVUVSWV9MSU1JVCYmYTxBLnF1ZXJ5TGltaXQuYXR0ZW1wdD9zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dy5hcHBseShsLFt0LG4sZSxpLGErMV0pfSxBLnF1ZXJ5TGltaXQuZGVsYXkrTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKkEucXVlcnlMaW1pdC5yYW5kb20pKTooZihcImdlb2NvZGUgZmFpbGVkXCIscixzKSxpLmxhdExuZz1pLnJlc3VsdHM9ITEsaS5zdGF0dXM9cixuLmFwcGx5KHQsW2ldKSl9KSkpOihpLmxhdExuZz1tKGkudGQsITEsITApLG4uYXBwbHkodCxbaV0pKX1mdW5jdGlvbiBMKG4sZSxvLGkpe2Z1bmN0aW9uIGEoKXtkbyBzKys7d2hpbGUoczxuLmxlbmd0aCYmIShcImFkZHJlc3NcImluIG5bc10pKTtyZXR1cm4gcz49bi5sZW5ndGg/dm9pZCBvLmFwcGx5KGUsW2ldKTp2b2lkIHcocixmdW5jdGlvbihlKXtkZWxldGUgZS50ZCx0LmV4dGVuZChuW3NdLGUpLGEuYXBwbHkocixbXSl9LCEwLHt0ZDpuW3NdfSl9dmFyIHI9dGhpcyxzPS0xO2EoKX1mdW5jdGlvbiBiKHQsbixlKXt2YXIgbz0hMTtuYXZpZ2F0b3ImJm5hdmlnYXRvci5nZW9sb2NhdGlvbj9uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKGkpe298fChvPSEwLGUubGF0TG5nPW5ldyBxLkxhdExuZyhpLmNvb3Jkcy5sYXRpdHVkZSxpLmNvb3Jkcy5sb25naXR1ZGUpLG4uYXBwbHkodCxbZV0pKX0sZnVuY3Rpb24oKXtvfHwobz0hMCxlLmxhdExuZz0hMSxuLmFwcGx5KHQsW2VdKSl9LGUub3B0cy5nZXRDdXJyZW50UG9zaXRpb24pOihlLmxhdExuZz0hMSxuLmFwcGx5KHQsW2VdKSl9ZnVuY3Rpb24geCh0KXt2YXIgbixvPSExO2lmKGUodCkmJnQuaGFzT3duUHJvcGVydHkoXCJnZXRcIikpe2ZvcihuIGluIHQpaWYoXCJnZXRcIiE9PW4pcmV0dXJuITE7bz0hdC5nZXQuaGFzT3duUHJvcGVydHkoXCJjYWxsYmFja1wiKX1yZXR1cm4gb31mdW5jdGlvbiBNKCl7cmV0dXJuIFYuZ2VvY29kZXJ8fChWLmdlb2NvZGVyPW5ldyBxLkdlb2NvZGVyKSxWLmdlb2NvZGVyfWZ1bmN0aW9uIEkoKXt2YXIgdD1bXTt0aGlzLmdldD1mdW5jdGlvbihuKXtpZih0Lmxlbmd0aCl7dmFyIG8saSxhLHIscyx1PWQobik7Zm9yKG89MDtvPHQubGVuZ3RoO28rKyl7Zm9yKHI9dFtvXSxzPXUubGVuZ3RoPT09ci5rZXlzLmxlbmd0aCxpPTA7aTx1Lmxlbmd0aCYmcztpKyspYT11W2ldLHM9YSBpbiByLnJlcXVlc3QscyYmKHM9ZShuW2FdKSYmXCJlcXVhbHNcImluIG5bYV0mJnooblthXSk/blthXS5lcXVhbHMoci5yZXF1ZXN0W2FdKTpuW2FdPT09ci5yZXF1ZXN0W2FdKTtpZihzKXJldHVybiByLnJlc3VsdHN9fX0sdGhpcy5zdG9yZT1mdW5jdGlvbihuLGUpe3QucHVzaCh7cmVxdWVzdDpuLGtleXM6ZChuKSxyZXN1bHRzOmV9KX19ZnVuY3Rpb24gUCgpe3ZhciB0PVtdLG49dGhpcztuLmVtcHR5PWZ1bmN0aW9uKCl7cmV0dXJuIXQubGVuZ3RofSxuLmFkZD1mdW5jdGlvbihuKXt0LnB1c2gobil9LG4uZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHQubGVuZ3RoP3RbMF06ITF9LG4uYWNrPWZ1bmN0aW9uKCl7dC5zaGlmdCgpfX1mdW5jdGlvbiBCKCl7ZnVuY3Rpb24gbih0KXtyZXR1cm57aWQ6dC5pZCxuYW1lOnQubmFtZSxvYmplY3Q6dC5vYmosdGFnOnQudGFnLGRhdGE6dC5kYXRhfX1mdW5jdGlvbiBlKHQpe3oodC5zZXRNYXApJiZ0LnNldE1hcChudWxsKSx6KHQucmVtb3ZlKSYmdC5yZW1vdmUoKSx6KHQuZnJlZSkmJnQuZnJlZSgpLHQ9bnVsbH12YXIgbz17fSxpPXt9LHI9dGhpcztyLmFkZD1mdW5jdGlvbih0LG4sZSxhKXt2YXIgdT10LnRkfHx7fSxsPXModS5pZCk7cmV0dXJuIG9bbl18fChvW25dPVtdKSxsIGluIGkmJnIuY2xlYXJCeUlkKGwpLGlbbF09e29iajplLHN1YjphLG5hbWU6bixpZDpsLHRhZzp1LnRhZyxkYXRhOnUuZGF0YX0sb1tuXS5wdXNoKGwpLGx9LHIuZ2V0QnlJZD1mdW5jdGlvbih0LGUsbyl7dmFyIGE9ITE7cmV0dXJuIHQgaW4gaSYmKGE9ZT9pW3RdLnN1YjpvP24oaVt0XSk6aVt0XS5vYmopLGF9LHIuZ2V0PWZ1bmN0aW9uKHQsZSxhLHIpe3ZhciBzLHUsbD12KGEpO2lmKCFvW3RdfHwhb1t0XS5sZW5ndGgpcmV0dXJuIG51bGw7Zm9yKHM9b1t0XS5sZW5ndGg7czspaWYocy0tLHU9b1t0XVtlP3M6b1t0XS5sZW5ndGgtcy0xXSx1JiZpW3VdKXtpZihsJiYhbChpW3VdLnRhZykpY29udGludWU7cmV0dXJuIHI/bihpW3VdKTppW3VdLm9ian1yZXR1cm4gbnVsbH0sci5hbGw9ZnVuY3Rpb24odCxlLHIpe3ZhciBzPVtdLHU9dihlKSxsPWZ1bmN0aW9uKHQpe3ZhciBlLGE7Zm9yKGU9MDtlPG9bdF0ubGVuZ3RoO2UrKylpZihhPW9bdF1bZV0sYSYmaVthXSl7aWYodSYmIXUoaVthXS50YWcpKWNvbnRpbnVlO3MucHVzaChyP24oaVthXSk6aVthXS5vYmopfX07aWYodCBpbiBvKWwodCk7ZWxzZSBpZihhKHQpKWZvcih0IGluIG8pbCh0KTtyZXR1cm4gc30sci5ybT1mdW5jdGlvbih0LG4sZSl7dmFyIGEscztpZighb1t0XSlyZXR1cm4hMTtpZihuKWlmKGUpZm9yKGE9b1t0XS5sZW5ndGgtMTthPj0wJiYocz1vW3RdW2FdLCFuKGlbc10udGFnKSk7YS0tKTtlbHNlIGZvcihhPTA7YTxvW3RdLmxlbmd0aCYmKHM9b1t0XVthXSwhbihpW3NdLnRhZykpO2ErKyk7ZWxzZSBhPWU/b1t0XS5sZW5ndGgtMTowO3JldHVybiBhIGluIG9bdF0/ci5jbGVhckJ5SWQob1t0XVthXSxhKTohMX0sci5jbGVhckJ5SWQ9ZnVuY3Rpb24odCxuKXtpZih0IGluIGkpe3ZhciByLHM9aVt0XS5uYW1lO2ZvcihyPTA7YShuKSYmcjxvW3NdLmxlbmd0aDtyKyspdD09PW9bc11bcl0mJihuPXIpO3JldHVybiBlKGlbdF0ub2JqKSxpW3RdLnN1YiYmZShpW3RdLnN1YiksZGVsZXRlIGlbdF0sb1tzXS5zcGxpY2UobiwxKSwhMH1yZXR1cm4hMX0sci5vYmpHZXRCeUlkPWZ1bmN0aW9uKHQpe3ZhciBuLGU7aWYoby5jbHVzdGVyZXIpZm9yKGUgaW4gby5jbHVzdGVyZXIpaWYoKG49aVtvLmNsdXN0ZXJlcltlXV0ub2JqLmdldEJ5SWQodCkpIT09ITEpcmV0dXJuIG47cmV0dXJuITF9LHIub2JqQ2xlYXJCeUlkPWZ1bmN0aW9uKHQpe3ZhciBuO2lmKG8uY2x1c3RlcmVyKWZvcihuIGluIG8uY2x1c3RlcmVyKWlmKGlbby5jbHVzdGVyZXJbbl1dLm9iai5jbGVhckJ5SWQodCkpcmV0dXJuITA7cmV0dXJuIG51bGx9LHIuY2xlYXI9ZnVuY3Rpb24odCxuLGUsaSl7dmFyIGEscyx1LGw9dihpKTtpZih0JiZ0Lmxlbmd0aCl0PWgodCk7ZWxzZXt0PVtdO2ZvcihhIGluIG8pdC5wdXNoKGEpfWZvcihzPTA7czx0Lmxlbmd0aDtzKyspaWYodT10W3NdLG4pci5ybSh1LGwsITApO2Vsc2UgaWYoZSlyLnJtKHUsbCwhMSk7ZWxzZSBmb3IoO3Iucm0odSxsLCExKTspO30sci5vYmpDbGVhcj1mdW5jdGlvbihuLGUsYSxyKXt2YXIgcztpZihvLmNsdXN0ZXJlciYmKHQuaW5BcnJheShcIm1hcmtlclwiLG4pPj0wfHwhbi5sZW5ndGgpKWZvcihzIGluIG8uY2x1c3RlcmVyKWlbby5jbHVzdGVyZXJbc11dLm9iai5jbGVhcihlLGEscil9fWZ1bmN0aW9uIGsobixlLGkpe2Z1bmN0aW9uIGEodCl7dmFyIG49e307cmV0dXJuIG5bdF09e30sbn1mdW5jdGlvbiByKCl7dmFyIHQ7Zm9yKHQgaW4gaSlpZihpLmhhc093blByb3BlcnR5KHQpJiYhdS5oYXNPd25Qcm9wZXJ0eSh0KSlyZXR1cm4gdH12YXIgcyx1PXt9LGw9dGhpcyxkPXtsYXRMbmc6e21hcDohMSxtYXJrZXI6ITEsaW5mb3dpbmRvdzohMSxjaXJjbGU6ITEsb3ZlcmxheTohMSxnZXRsYXRsbmc6ITEsZ2V0bWF4em9vbTohMSxnZXRlbGV2YXRpb246ITEsc3RyZWV0dmlld3Bhbm9yYW1hOiExLGdldGFkZHJlc3M6ITB9LGdlb2xvYzp7Z2V0Z2VvbG9jOiEwfX07byhpKSYmKGk9YShpKSksbC5ydW49ZnVuY3Rpb24oKXtmb3IodmFyIG8sYTtvPXIoKTspe2lmKHoobltvXSkpcmV0dXJuIHM9byxhPXQuZXh0ZW5kKCEwLHt9LEFbb118fHt9LGlbb10ub3B0aW9uc3x8e30pLHZvaWQobyBpbiBkLmxhdExuZz9pW29dLnZhbHVlcz9MKGlbb10udmFsdWVzLG4sbltvXSx7dGQ6aVtvXSxvcHRzOmEsc2Vzc2lvbjp1fSk6dyhuLG5bb10sZC5sYXRMbmdbb10se3RkOmlbb10sb3B0czphLHNlc3Npb246dX0pOm8gaW4gZC5nZW9sb2M/YihuLG5bb10se3RkOmlbb10sb3B0czphLHNlc3Npb246dX0pOm5bb10uYXBwbHkobixbe3RkOmlbb10sb3B0czphLHNlc3Npb246dX1dKSk7dVtvXT1udWxsfWUuYXBwbHkobixbaSx1XSl9LGwuYWNrPWZ1bmN0aW9uKHQpe3Vbc109dCxsLnJ1bi5hcHBseShsLFtdKX19ZnVuY3Rpb24gaigpe3JldHVybiBWLmRzfHwoVi5kcz1uZXcgcS5EaXJlY3Rpb25zU2VydmljZSksVi5kc31mdW5jdGlvbiBPKCl7cmV0dXJuIFYuZG1zfHwoVi5kbXM9bmV3IHEuRGlzdGFuY2VNYXRyaXhTZXJ2aWNlKSxWLmRtc31mdW5jdGlvbiBDKCl7cmV0dXJuIFYubXpzfHwoVi5tenM9bmV3IHEuTWF4Wm9vbVNlcnZpY2UpLFYubXpzfWZ1bmN0aW9uIFQoKXtyZXR1cm4gVi5lc3x8KFYuZXM9bmV3IHEuRWxldmF0aW9uU2VydmljZSksVi5lc31mdW5jdGlvbiBFKHQsbil7ZnVuY3Rpb24gZSgpe3ZhciB0PXRoaXM7cmV0dXJuIHQub25BZGQ9ZnVuY3Rpb24oKXt9LHQub25SZW1vdmU9ZnVuY3Rpb24oKXt9LHQuZHJhdz1mdW5jdGlvbigpe30sQS5jbGFzc2VzLk92ZXJsYXlWaWV3LmFwcGx5KHQsW10pfWUucHJvdG90eXBlPUEuY2xhc3Nlcy5PdmVybGF5Vmlldy5wcm90b3R5cGU7dmFyIG89bmV3IGU7cmV0dXJuIG8uc2V0TWFwKHQpLG99ZnVuY3Rpb24gUyhuLG8saSl7ZnVuY3Rpb24gYSh0KXtTW3RdfHwoZGVsZXRlIF9bdF0ub3B0aW9ucy5tYXAsU1t0XT1uZXcgQS5jbGFzc2VzLk1hcmtlcihfW3RdLm9wdGlvbnMpLGwobix7dGQ6X1t0XX0sU1t0XSxfW3RdLmlkKSl9ZnVuY3Rpb24gcigpe3JldHVybih5PVUuZ2V0UHJvamVjdGlvbigpKT8oUD0hMCxqLnB1c2gocS5ldmVudC5hZGRMaXN0ZW5lcihvLFwiem9vbV9jaGFuZ2VkXCIsZikpLGoucHVzaChxLmV2ZW50LmFkZExpc3RlbmVyKG8sXCJib3VuZHNfY2hhbmdlZFwiLGYpKSx2b2lkIGgoKSk6dm9pZCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ci5hcHBseShrLFtdKX0sMjUpfWZ1bmN0aW9uIHUodCl7ZShPW3RdKT8oeihPW3RdLm9iai5zZXRNYXApJiZPW3RdLm9iai5zZXRNYXAobnVsbCkseihPW3RdLm9iai5yZW1vdmUpJiZPW3RdLm9iai5yZW1vdmUoKSx6KE9bdF0uc2hhZG93LnJlbW92ZSkmJk9bdF0ub2JqLnJlbW92ZSgpLHooT1t0XS5zaGFkb3cuc2V0TWFwKSYmT1t0XS5zaGFkb3cuc2V0TWFwKG51bGwpLGRlbGV0ZSBPW3RdLm9iaixkZWxldGUgT1t0XS5zaGFkb3cpOlNbdF0mJlNbdF0uc2V0TWFwKG51bGwpLGRlbGV0ZSBPW3RdfWZ1bmN0aW9uIGQoKXt2YXIgdCxuLGUsbyxpLGEscixzLHU9TWF0aC5jb3MsbD1NYXRoLnNpbixkPWFyZ3VtZW50cztyZXR1cm4gZFswXWluc3RhbmNlb2YgcS5MYXRMbmc/KHQ9ZFswXS5sYXQoKSxlPWRbMF0ubG5nKCksZFsxXWluc3RhbmNlb2YgcS5MYXRMbmc/KG49ZFsxXS5sYXQoKSxvPWRbMV0ubG5nKCkpOihuPWRbMV0sbz1kWzJdKSk6KHQ9ZFswXSxlPWRbMV0sZFsyXWluc3RhbmNlb2YgcS5MYXRMbmc/KG49ZFsyXS5sYXQoKSxvPWRbMl0ubG5nKCkpOihuPWRbMl0sbz1kWzNdKSksaT1NYXRoLlBJKnQvMTgwLGE9TWF0aC5QSSplLzE4MCxyPU1hdGguUEkqbi8xODAscz1NYXRoLlBJKm8vMTgwLDYzNzFlMypNYXRoLmFjb3MoTWF0aC5taW4odShpKSp1KHIpKnUoYSkqdShzKSt1KGkpKmwoYSkqdShyKSpsKHMpK2woaSkqbChyKSwxKSl9ZnVuY3Rpb24gYygpe3ZhciB0PWQoby5nZXRDZW50ZXIoKSxvLmdldEJvdW5kcygpLmdldE5vcnRoRWFzdCgpKSxuPW5ldyBxLkNpcmNsZSh7Y2VudGVyOm8uZ2V0Q2VudGVyKCkscmFkaXVzOjEuMjUqdH0pO3JldHVybiBuLmdldEJvdW5kcygpfWZ1bmN0aW9uIHAoKXt2YXIgdCxuPXt9O2Zvcih0IGluIE8pblt0XT0hMDtyZXR1cm4gbn1mdW5jdGlvbiBmKCl7Y2xlYXJUaW1lb3V0KG0pLG09c2V0VGltZW91dChoLDI1KX1mdW5jdGlvbiBnKHQpe3ZhciBuPXkuZnJvbUxhdExuZ1RvRGl2UGl4ZWwodCksZT15LmZyb21EaXZQaXhlbFRvTGF0TG5nKG5ldyBxLlBvaW50KG4ueCtpLnJhZGl1cyxuLnktaS5yYWRpdXMpKSxvPXkuZnJvbURpdlBpeGVsVG9MYXRMbmcobmV3IHEuUG9pbnQobi54LWkucmFkaXVzLG4ueStpLnJhZGl1cykpO3JldHVybiBuZXcgcS5MYXRMbmdCb3VuZHMobyxlKX1mdW5jdGlvbiBoKCl7aWYoIXgmJiFJJiZQKXt2YXIgbixlLGEscixzLGwsZCxmLGgsdixtLHk9ITEsYj1bXSxrPXt9LGo9by5nZXRab29tKCksQz1cIm1heFpvb21cImluIGkmJmo+aS5tYXhab29tLFQ9cCgpO2ZvcihNPSExLGo+MyYmKHM9YygpLHk9cy5nZXRTb3V0aFdlc3QoKS5sbmcoKTxzLmdldE5vcnRoRWFzdCgpLmxuZygpKSxuPTA7bjxfLmxlbmd0aDtuKyspIV9bbl18fHkmJiFzLmNvbnRhaW5zKF9bbl0ub3B0aW9ucy5wb3NpdGlvbil8fHcmJiF3KERbbl0pfHxiLnB1c2gobik7Zm9yKDs7KXtmb3Iobj0wO2tbbl0mJm48Yi5sZW5ndGg7KW4rKztpZihuPT09Yi5sZW5ndGgpYnJlYWs7aWYocj1bXSxCJiYhQyl7bT0xMDtkbyBmb3IoZj1yLHI9W10sbS0tLGQ9Zi5sZW5ndGg/cy5nZXRDZW50ZXIoKTpfW2Jbbl1dLm9wdGlvbnMucG9zaXRpb24scz1nKGQpLGU9bjtlPGIubGVuZ3RoO2UrKylrW2VdfHxzLmNvbnRhaW5zKF9bYltlXV0ub3B0aW9ucy5wb3NpdGlvbikmJnIucHVzaChlKTt3aGlsZShmLmxlbmd0aDxyLmxlbmd0aCYmci5sZW5ndGg+MSYmbSl9ZWxzZSBmb3IoZT1uO2U8Yi5sZW5ndGg7ZSsrKWlmKCFrW2VdKXtyLnB1c2goZSk7YnJlYWt9Zm9yKGw9e2luZGV4ZXM6W10scmVmOltdfSxoPXY9MCxhPTA7YTxyLmxlbmd0aDthKyspa1tyW2FdXT0hMCxsLmluZGV4ZXMucHVzaChiW3JbYV1dKSxsLnJlZi5wdXNoKGJbclthXV0pLGgrPV9bYltyW2FdXV0ub3B0aW9ucy5wb3NpdGlvbi5sYXQoKSx2Kz1fW2JbclthXV1dLm9wdGlvbnMucG9zaXRpb24ubG5nKCk7aC89ci5sZW5ndGgsdi89ci5sZW5ndGgsbC5sYXRMbmc9bmV3IHEuTGF0TG5nKGgsdiksbC5yZWY9bC5yZWYuam9pbihcIi1cIiksbC5yZWYgaW4gVD9kZWxldGUgVFtsLnJlZl06KDE9PT1yLmxlbmd0aCYmKE9bbC5yZWZdPSEwKSxMKGwpKX10LmVhY2goVCxmdW5jdGlvbih0KXt1KHQpfSksST0hMX19dmFyIG0seSx3LEwsYix4PSExLE09ITEsST0hMSxQPSExLEI9ITAsaz10aGlzLGo9W10sTz17fSxDPXt9LFQ9e30sUz1bXSxfPVtdLEQ9W10sVT1FKG8saS5yYWRpdXMpO3IoKSxrLmdldEJ5SWQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW4gQz8oYShDW3RdKSxTW0NbdF1dKTohMX0say5ybT1mdW5jdGlvbih0KXt2YXIgbj1DW3RdO1Nbbl0mJlNbbl0uc2V0TWFwKG51bGwpLGRlbGV0ZSBTW25dLFNbbl09ITEsZGVsZXRlIF9bbl0sX1tuXT0hMSxkZWxldGUgRFtuXSxEW25dPSExLGRlbGV0ZSBDW3RdLGRlbGV0ZSBUW25dLE09ITB9LGsuY2xlYXJCeUlkPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluIEM/KGsucm0odCksITApOnZvaWQgMH0say5jbGVhcj1mdW5jdGlvbih0LG4sZSl7dmFyIG8saSxhLHIscyx1PVtdLGw9dihlKTtmb3IodD8obz1fLmxlbmd0aC0xLGk9LTEsYT0tMSk6KG89MCxpPV8ubGVuZ3RoLGE9MSkscj1vO3IhPT1pJiYoIV9bcl18fGwmJiFsKF9bcl0udGFnKXx8KHUucHVzaChUW3JdKSwhbiYmIXQpKTtyKz1hKTtmb3Iocz0wO3M8dS5sZW5ndGg7cysrKWsucm0odVtzXSl9LGsuYWRkPWZ1bmN0aW9uKHQsbil7dC5pZD1zKHQuaWQpLGsuY2xlYXJCeUlkKHQuaWQpLENbdC5pZF09Uy5sZW5ndGgsVFtTLmxlbmd0aF09dC5pZCxTLnB1c2gobnVsbCksXy5wdXNoKHQpLEQucHVzaChuKSxNPSEwfSxrLmFkZE1hcmtlcj1mdW5jdGlvbih0LGUpe2U9ZXx8e30sZS5pZD1zKGUuaWQpLGsuY2xlYXJCeUlkKGUuaWQpLGUub3B0aW9uc3x8KGUub3B0aW9ucz17fSksZS5vcHRpb25zLnBvc2l0aW9uPXQuZ2V0UG9zaXRpb24oKSxsKG4se3RkOmV9LHQsZS5pZCksQ1tlLmlkXT1TLmxlbmd0aCxUW1MubGVuZ3RoXT1lLmlkLFMucHVzaCh0KSxfLnB1c2goZSksRC5wdXNoKGUuZGF0YXx8e30pLE09ITB9LGsudGQ9ZnVuY3Rpb24odCl7cmV0dXJuIF9bdF19LGsudmFsdWU9ZnVuY3Rpb24odCl7cmV0dXJuIERbdF19LGsubWFya2VyPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluIFM/KGEodCksU1t0XSk6ITF9LGsubWFya2VySXNTZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIEJvb2xlYW4oU1t0XSl9LGsuc2V0TWFya2VyPWZ1bmN0aW9uKHQsbil7U1t0XT1ufSxrLnN0b3JlPWZ1bmN0aW9uKHQsbixlKXtPW3QucmVmXT17b2JqOm4sc2hhZG93OmV9fSxrLmZyZWU9ZnVuY3Rpb24oKXt2YXIgbjtmb3Iobj0wO248ai5sZW5ndGg7bisrKXEuZXZlbnQucmVtb3ZlTGlzdGVuZXIoaltuXSk7aj1bXSx0LmVhY2goTyxmdW5jdGlvbih0KXt1KHQpfSksTz17fSx0LmVhY2goXyxmdW5jdGlvbih0KXtfW3RdPW51bGx9KSxfPVtdLHQuZWFjaChTLGZ1bmN0aW9uKHQpe1NbdF0mJihTW3RdLnNldE1hcChudWxsKSxkZWxldGUgU1t0XSl9KSxTPVtdLHQuZWFjaChELGZ1bmN0aW9uKHQpe2RlbGV0ZSBEW3RdfSksRD1bXSxDPXt9LFQ9e319LGsuZmlsdGVyPWZ1bmN0aW9uKHQpe3c9dCxoKCl9LGsuZW5hYmxlPWZ1bmN0aW9uKHQpe0IhPT10JiYoQj10LGgoKSl9LGsuZGlzcGxheT1mdW5jdGlvbih0KXtMPXR9LGsuZXJyb3I9ZnVuY3Rpb24odCl7Yj10fSxrLmJlZ2luVXBkYXRlPWZ1bmN0aW9uKCl7eD0hMH0say5lbmRVcGRhdGU9ZnVuY3Rpb24oKXt4PSExLE0mJmgoKX0say5hdXRvZml0PWZ1bmN0aW9uKHQpe3ZhciBuO2ZvcihuPTA7bjxfLmxlbmd0aDtuKyspX1tuXSYmdC5leHRlbmQoX1tuXS5vcHRpb25zLnBvc2l0aW9uKX19ZnVuY3Rpb24gXyh0LG4pe3ZhciBlPXRoaXM7ZS5pZD1mdW5jdGlvbigpe3JldHVybiB0fSxlLmZpbHRlcj1mdW5jdGlvbih0KXtuLmZpbHRlcih0KX0sZS5lbmFibGU9ZnVuY3Rpb24oKXtuLmVuYWJsZSghMCl9LGUuZGlzYWJsZT1mdW5jdGlvbigpe24uZW5hYmxlKCExKX0sZS5hZGQ9ZnVuY3Rpb24odCxlLG8pe298fG4uYmVnaW5VcGRhdGUoKSxuLmFkZE1hcmtlcih0LGUpLG98fG4uZW5kVXBkYXRlKCl9LGUuZ2V0QnlJZD1mdW5jdGlvbih0KXtyZXR1cm4gbi5nZXRCeUlkKHQpfSxlLmNsZWFyQnlJZD1mdW5jdGlvbih0LGUpe3ZhciBvO3JldHVybiBlfHxuLmJlZ2luVXBkYXRlKCksbz1uLmNsZWFyQnlJZCh0KSxlfHxuLmVuZFVwZGF0ZSgpLG99LGUuY2xlYXI9ZnVuY3Rpb24odCxlLG8saSl7aXx8bi5iZWdpblVwZGF0ZSgpLG4uY2xlYXIodCxlLG8pLGl8fG4uZW5kVXBkYXRlKCl9fWZ1bmN0aW9uIEQobixlLG8saSl7dmFyIGE9dGhpcyxyPVtdO0EuY2xhc3Nlcy5PdmVybGF5Vmlldy5jYWxsKGEpLGEuc2V0TWFwKG4pLGEub25BZGQ9ZnVuY3Rpb24oKXt2YXIgbj1hLmdldFBhbmVzKCk7ZS5wYW5lIGluIG4mJnQobltlLnBhbmVdKS5hcHBlbmQoaSksdC5lYWNoKFwiZGJsY2xpY2sgY2xpY2sgbW91c2VvdmVyIG1vdXNlbW92ZSBtb3VzZW91dCBtb3VzZXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihuLGUpe3IucHVzaChxLmV2ZW50LmFkZERvbUxpc3RlbmVyKGlbMF0sZSxmdW5jdGlvbihuKXt0LkV2ZW50KG4pLnN0b3BQcm9wYWdhdGlvbigpLHEuZXZlbnQudHJpZ2dlcihhLGUsW25dKSxhLmRyYXcoKX0pKX0pLHIucHVzaChxLmV2ZW50LmFkZERvbUxpc3RlbmVyKGlbMF0sXCJjb250ZXh0bWVudVwiLGZ1bmN0aW9uKG4pe3QuRXZlbnQobikuc3RvcFByb3BhZ2F0aW9uKCkscS5ldmVudC50cmlnZ2VyKGEsXCJyaWdodGNsaWNrXCIsW25dKSxhLmRyYXcoKX0pKX0sYS5nZXRQb3NpdGlvbj1mdW5jdGlvbigpe3JldHVybiBvfSxhLnNldFBvc2l0aW9uPWZ1bmN0aW9uKHQpe289dCxhLmRyYXcoKX0sYS5kcmF3PWZ1bmN0aW9uKCl7dmFyIHQ9YS5nZXRQcm9qZWN0aW9uKCkuZnJvbUxhdExuZ1RvRGl2UGl4ZWwobyk7aS5jc3MoXCJsZWZ0XCIsdC54K2Uub2Zmc2V0LngrXCJweFwiKS5jc3MoXCJ0b3BcIix0LnkrZS5vZmZzZXQueStcInB4XCIpfSxhLm9uUmVtb3ZlPWZ1bmN0aW9uKCl7dmFyIHQ7Zm9yKHQ9MDt0PHIubGVuZ3RoO3QrKylxLmV2ZW50LnJlbW92ZUxpc3RlbmVyKHJbdF0pO2kucmVtb3ZlKCl9LGEuaGlkZT1mdW5jdGlvbigpe2kuaGlkZSgpfSxhLnNob3c9ZnVuY3Rpb24oKXtpLnNob3coKX0sYS50b2dnbGU9ZnVuY3Rpb24oKXtpJiYoaS5pcyhcIjp2aXNpYmxlXCIpP2Euc2hvdygpOmEuaGlkZSgpKX0sYS50b2dnbGVET009ZnVuY3Rpb24oKXthLnNldE1hcChhLmdldE1hcCgpP251bGw6bil9LGEuZ2V0RE9NRWxlbWVudD1mdW5jdGlvbigpe3JldHVybiBpWzBdfX1mdW5jdGlvbiBVKGkpe2Z1bmN0aW9uIHIoKXshYiYmKGI9TS5nZXQoKSkmJmIucnVuKCl9ZnVuY3Rpb24gZCgpe2I9bnVsbCxNLmFjaygpLHIuY2FsbCh4KX1mdW5jdGlvbiBjKHQpe3ZhciBuLGU9dC50ZC5jYWxsYmFjaztlJiYobj1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkseihlKT9lLmFwcGx5KGksbik6UihlKSYmeihlWzFdKSYmZVsxXS5hcHBseShlWzBdLG4pKX1mdW5jdGlvbiBnKHQsbixlKXtlJiZsKGksdCxuLGUpLGModCxuKSxiLmFjayhuKX1mdW5jdGlvbiB2KG4sZSl7ZT1lfHx7fTt2YXIgbz1lLnRkJiZlLnRkLm9wdGlvbnM/ZS50ZC5vcHRpb25zOjA7RT9vJiYoby5jZW50ZXImJihvLmNlbnRlcj1tKG8uY2VudGVyKSksRS5zZXRPcHRpb25zKG8pKToobz1lLm9wdHN8fHQuZXh0ZW5kKCEwLHt9LEEubWFwLG98fHt9KSxvLmNlbnRlcj1ufHxtKG8uY2VudGVyKSxFPW5ldyBBLmNsYXNzZXMuTWFwKGkuZ2V0KDApLG8pKX1mdW5jdGlvbiB3KGUpe3ZhciBvLGEscj1uZXcgUyhpLEUsZSkscz17fSx1PXt9LGQ9W10sYz0vXlswLTldKyQvO2ZvcihhIGluIGUpYy50ZXN0KGEpPyhkLnB1c2goMSphKSx1W2FdPWVbYV0sdVthXS53aWR0aD11W2FdLndpZHRofHwwLHVbYV0uaGVpZ2h0PXVbYV0uaGVpZ2h0fHwwKTpzW2FdPWVbYV07cmV0dXJuIGQuc29ydChmdW5jdGlvbih0LG4pe3JldHVybiB0Pm59KSxvPXMuY2FsY3VsYXRvcj9mdW5jdGlvbihuKXt2YXIgZT1bXTtyZXR1cm4gdC5lYWNoKG4sZnVuY3Rpb24odCxuKXtlLnB1c2goci52YWx1ZShuKSl9KSxzLmNhbGN1bGF0b3IuYXBwbHkoaSxbZV0pfTpmdW5jdGlvbih0KXtyZXR1cm4gdC5sZW5ndGh9LHIuZXJyb3IoZnVuY3Rpb24oKXtmLmFwcGx5KHgsYXJndW1lbnRzKX0pLHIuZGlzcGxheShmdW5jdGlvbihhKXt2YXIgYyxwLGYsZyxoLHYseT1vKGEuaW5kZXhlcyk7aWYoZS5mb3JjZXx8eT4xKWZvcihjPTA7YzxkLmxlbmd0aDtjKyspZFtjXTw9eSYmKHA9dVtkW2NdXSk7cD8oaD1wLm9mZnNldHx8Wy1wLndpZHRoLzIsLXAuaGVpZ2h0LzJdLGY9dC5leHRlbmQoe30scyksZi5vcHRpb25zPXQuZXh0ZW5kKHtwYW5lOlwib3ZlcmxheUxheWVyXCIsY29udGVudDpwLmNvbnRlbnQ/cC5jb250ZW50LnJlcGxhY2UoXCJDTFVTVEVSX0NPVU5UXCIseSk6XCJcIixvZmZzZXQ6e3g6KFwieFwiaW4gaD9oLng6aFswXSl8fDAseTooXCJ5XCJpbiBoP2gueTpoWzFdKXx8MH19LHMub3B0aW9uc3x8e30pLGc9eC5vdmVybGF5KHt0ZDpmLG9wdHM6Zi5vcHRpb25zLGxhdExuZzptKGEpfSwhMCksZi5vcHRpb25zLnBhbmU9XCJmbG9hdFNoYWRvd1wiLGYub3B0aW9ucy5jb250ZW50PXQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkud2lkdGgocC53aWR0aCtcInB4XCIpLmhlaWdodChwLmhlaWdodCtcInB4XCIpLmNzcyh7Y3Vyc29yOlwicG9pbnRlclwifSksdj14Lm92ZXJsYXkoe3RkOmYsb3B0czpmLm9wdGlvbnMsbGF0TG5nOm0oYSl9LCEwKSxzLmRhdGE9e2xhdExuZzptKGEpLG1hcmtlcnM6W119LHQuZWFjaChhLmluZGV4ZXMsZnVuY3Rpb24odCxuKXtzLmRhdGEubWFya2Vycy5wdXNoKHIudmFsdWUobikpLHIubWFya2VySXNTZXQobikmJnIubWFya2VyKG4pLnNldE1hcChudWxsKX0pLGwoaSx7dGQ6c30sdixuLHttYWluOmcsc2hhZG93OnZ9KSxyLnN0b3JlKGEsZyx2KSk6dC5lYWNoKGEuaW5kZXhlcyxmdW5jdGlvbih0LG4pe3IubWFya2VyKG4pLnNldE1hcChFKX0pfSkscn1mdW5jdGlvbiBMKG4sZSxvKXt2YXIgYT1bXSxyPVwidmFsdWVzXCJpbiBuLnRkO3JldHVybiByfHwobi50ZC52YWx1ZXM9W3tvcHRpb25zOm4ub3B0c31dKSxuLnRkLnZhbHVlcy5sZW5ndGg/KHYoKSx0LmVhY2gobi50ZC52YWx1ZXMsZnVuY3Rpb24odCxyKXt2YXIgcyx1LGQsYyxmPXAobixyKTtpZihmLm9wdGlvbnNbb10paWYoZi5vcHRpb25zW29dWzBdWzBdJiZSKGYub3B0aW9uc1tvXVswXVswXSkpZm9yKHU9MDt1PGYub3B0aW9uc1tvXS5sZW5ndGg7dSsrKWZvcihkPTA7ZDxmLm9wdGlvbnNbb11bdV0ubGVuZ3RoO2QrKylmLm9wdGlvbnNbb11bdV1bZF09bShmLm9wdGlvbnNbb11bdV1bZF0pO2Vsc2UgZm9yKHU9MDt1PGYub3B0aW9uc1tvXS5sZW5ndGg7dSsrKWYub3B0aW9uc1tvXVt1XT1tKGYub3B0aW9uc1tvXVt1XSk7Zi5vcHRpb25zLm1hcD1FLGM9bmV3IHFbZV0oZi5vcHRpb25zKSxhLnB1c2goYykscz1JLmFkZCh7dGQ6Zn0sZS50b0xvd2VyQ2FzZSgpLGMpLGwoaSx7dGQ6Zn0sYyxzKX0pLHZvaWQgZyhuLHI/YTphWzBdKSk6dm9pZCBnKG4sITEpfXZhciBiLHg9dGhpcyxNPW5ldyBQLEk9bmV3IEIsRT1udWxsO3guX3BsYW49ZnVuY3Rpb24odCl7dmFyIG47Zm9yKG49MDtuPHQubGVuZ3RoO24rKylNLmFkZChuZXcgayh4LGQsdFtuXSkpO3IoKX0seC5tYXA9ZnVuY3Rpb24odCl7dih0LmxhdExuZyx0KSxsKGksdCxFKSxnKHQsRSl9LHguZGVzdHJveT1mdW5jdGlvbih0KXtJLmNsZWFyKCksaS5lbXB0eSgpLEUmJihFPW51bGwpLGcodCwhMCl9LHgub3ZlcmxheT1mdW5jdGlvbihuLGUpe3ZhciBvPVtdLGE9XCJ2YWx1ZXNcImluIG4udGQ7cmV0dXJuIGF8fChuLnRkLnZhbHVlcz1be2xhdExuZzpuLmxhdExuZyxvcHRpb25zOm4ub3B0c31dKSxuLnRkLnZhbHVlcy5sZW5ndGg/KEQuX19pbml0aWFsaXNlZHx8KEQucHJvdG90eXBlPW5ldyBBLmNsYXNzZXMuT3ZlcmxheVZpZXcsRC5fX2luaXRpYWxpc2VkPSEwKSx0LmVhY2gobi50ZC52YWx1ZXMsZnVuY3Rpb24oYSxyKXt2YXIgcyx1LGQ9cChuLHIpLGM9dChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKS5jc3Moe2JvcmRlcjpcIm5vbmVcIixib3JkZXJXaWR0aDowLHBvc2l0aW9uOlwiYWJzb2x1dGVcIn0pO2MuYXBwZW5kKGQub3B0aW9ucy5jb250ZW50KSx1PW5ldyBEKEUsZC5vcHRpb25zLG0oZCl8fG0ociksYyksby5wdXNoKHUpLGM9bnVsbCxlfHwocz1JLmFkZChuLFwib3ZlcmxheVwiLHUpLGwoaSx7dGQ6ZH0sdSxzKSl9KSxlP29bMF06dm9pZCBnKG4sYT9vOm9bMF0pKTp2b2lkIGcobiwhMSl9LHgubWFya2VyPWZ1bmN0aW9uKG4pe3ZhciBlLG8sYSxyPVwidmFsdWVzXCJpbiBuLnRkLHU9IUU7cmV0dXJuIHJ8fChuLm9wdHMucG9zaXRpb249bi5sYXRMbmd8fG0obi5vcHRzLnBvc2l0aW9uKSxuLnRkLnZhbHVlcz1be29wdGlvbnM6bi5vcHRzfV0pLG4udGQudmFsdWVzLmxlbmd0aD8odSYmdigpLG4udGQuY2x1c3RlciYmIUUuZ2V0Qm91bmRzKCk/dm9pZCBxLmV2ZW50LmFkZExpc3RlbmVyT25jZShFLFwiYm91bmRzX2NoYW5nZWRcIixmdW5jdGlvbigpe3gubWFya2VyLmFwcGx5KHgsW25dKX0pOnZvaWQobi50ZC5jbHVzdGVyPyhuLnRkLmNsdXN0ZXIgaW5zdGFuY2VvZiBfPyhvPW4udGQuY2x1c3RlcixhPUkuZ2V0QnlJZChvLmlkKCksITApKTooYT13KG4udGQuY2x1c3Rlciksbz1uZXcgXyhzKG4udGQuaWQsITApLGEpLEkuYWRkKG4sXCJjbHVzdGVyZXJcIixvLGEpKSxhLmJlZ2luVXBkYXRlKCksdC5lYWNoKG4udGQudmFsdWVzLGZ1bmN0aW9uKHQsZSl7dmFyIG89cChuLGUpO28ub3B0aW9ucy5wb3NpdGlvbj1tKG8ub3B0aW9ucy5wb3NpdGlvbj9vLm9wdGlvbnMucG9zaXRpb246ZSksby5vcHRpb25zLnBvc2l0aW9uJiYoby5vcHRpb25zLm1hcD1FLHUmJihFLnNldENlbnRlcihvLm9wdGlvbnMucG9zaXRpb24pLHU9ITEpLGEuYWRkKG8sZSkpfSksYS5lbmRVcGRhdGUoKSxnKG4sbykpOihlPVtdLHQuZWFjaChuLnRkLnZhbHVlcyxmdW5jdGlvbih0LG8pe3ZhciBhLHIscz1wKG4sbyk7cy5vcHRpb25zLnBvc2l0aW9uPW0ocy5vcHRpb25zLnBvc2l0aW9uP3Mub3B0aW9ucy5wb3NpdGlvbjpvKSxzLm9wdGlvbnMucG9zaXRpb24mJihzLm9wdGlvbnMubWFwPUUsdSYmKEUuc2V0Q2VudGVyKHMub3B0aW9ucy5wb3NpdGlvbiksdT0hMSkscj1uZXcgQS5jbGFzc2VzLk1hcmtlcihzLm9wdGlvbnMpLGUucHVzaChyKSxhPUkuYWRkKHt0ZDpzfSxcIm1hcmtlclwiLHIpLGwoaSx7dGQ6c30scixhKSl9KSxnKG4scj9lOmVbMF0pKSkpOnZvaWQgZyhuLCExKX0seC5nZXRyb3V0ZT1mdW5jdGlvbih0KXt0Lm9wdHMub3JpZ2luPW0odC5vcHRzLm9yaWdpbiwhMCksdC5vcHRzLmRlc3RpbmF0aW9uPW0odC5vcHRzLmRlc3RpbmF0aW9uLCEwKSxqKCkucm91dGUodC5vcHRzLGZ1bmN0aW9uKG4sZSl7Yyh0LGU9PT1xLkRpcmVjdGlvbnNTdGF0dXMuT0s/bjohMSxlKSxiLmFjaygpfSl9LHguZ2V0ZGlzdGFuY2U9ZnVuY3Rpb24odCl7dmFyIG47Zm9yKHQub3B0cy5vcmlnaW5zPWgodC5vcHRzLm9yaWdpbnMpLG49MDtuPHQub3B0cy5vcmlnaW5zLmxlbmd0aDtuKyspdC5vcHRzLm9yaWdpbnNbbl09bSh0Lm9wdHMub3JpZ2luc1tuXSwhMCk7Zm9yKHQub3B0cy5kZXN0aW5hdGlvbnM9aCh0Lm9wdHMuZGVzdGluYXRpb25zKSxuPTA7bjx0Lm9wdHMuZGVzdGluYXRpb25zLmxlbmd0aDtuKyspdC5vcHRzLmRlc3RpbmF0aW9uc1tuXT1tKHQub3B0cy5kZXN0aW5hdGlvbnNbbl0sITApO08oKS5nZXREaXN0YW5jZU1hdHJpeCh0Lm9wdHMsZnVuY3Rpb24obixlKXtjKHQsZT09PXEuRGlzdGFuY2VNYXRyaXhTdGF0dXMuT0s/bjohMSxlKSxiLmFjaygpfSl9LHguaW5mb3dpbmRvdz1mdW5jdGlvbihlKXt2YXIgbz1bXSxyPVwidmFsdWVzXCJpbiBlLnRkO3J8fChlLmxhdExuZyYmKGUub3B0cy5wb3NpdGlvbj1lLmxhdExuZyksZS50ZC52YWx1ZXM9W3tvcHRpb25zOmUub3B0c31dKSx0LmVhY2goZS50ZC52YWx1ZXMsZnVuY3Rpb24odCxzKXt2YXIgdSxkLGM9cChlLHMpO2Mub3B0aW9ucy5wb3NpdGlvbj1tKGMub3B0aW9ucy5wb3NpdGlvbj9jLm9wdGlvbnMucG9zaXRpb246cy5sYXRMbmcpLEV8fHYoYy5vcHRpb25zLnBvc2l0aW9uKSxkPW5ldyBBLmNsYXNzZXMuSW5mb1dpbmRvdyhjLm9wdGlvbnMpLGQmJihhKGMub3Blbil8fGMub3BlbikmJihyP2Qub3BlbihFLGMuYW5jaG9yfHxuKTpkLm9wZW4oRSxjLmFuY2hvcnx8KGUubGF0TG5nP246ZS5zZXNzaW9uLm1hcmtlcj9lLnNlc3Npb24ubWFya2VyOm4pKSksby5wdXNoKGQpLHU9SS5hZGQoe3RkOmN9LFwiaW5mb3dpbmRvd1wiLGQpLGwoaSx7dGQ6Y30sZCx1KX0pLGcoZSxyP286b1swXSl9LHguY2lyY2xlPWZ1bmN0aW9uKG4pe3ZhciBlPVtdLG89XCJ2YWx1ZXNcImluIG4udGQ7cmV0dXJuIG98fChuLm9wdHMuY2VudGVyPW4ubGF0TG5nfHxtKG4ub3B0cy5jZW50ZXIpLG4udGQudmFsdWVzPVt7b3B0aW9uczpuLm9wdHN9XSksbi50ZC52YWx1ZXMubGVuZ3RoPyh0LmVhY2gobi50ZC52YWx1ZXMsZnVuY3Rpb24odCxvKXt2YXIgYSxyLHM9cChuLG8pO3Mub3B0aW9ucy5jZW50ZXI9bShzLm9wdGlvbnMuY2VudGVyP3Mub3B0aW9ucy5jZW50ZXI6byksRXx8dihzLm9wdGlvbnMuY2VudGVyKSxzLm9wdGlvbnMubWFwPUUscj1uZXcgQS5jbGFzc2VzLkNpcmNsZShzLm9wdGlvbnMpLGUucHVzaChyKSxhPUkuYWRkKHt0ZDpzfSxcImNpcmNsZVwiLHIpLGwoaSx7dGQ6c30scixhKX0pLHZvaWQgZyhuLG8/ZTplWzBdKSk6dm9pZCBnKG4sITEpfSx4LmdldGFkZHJlc3M9ZnVuY3Rpb24odCl7Yyh0LHQucmVzdWx0cyx0LnN0YXR1cyksYi5hY2soKX0seC5nZXRsYXRsbmc9ZnVuY3Rpb24odCl7Yyh0LHQucmVzdWx0cyx0LnN0YXR1cyksYi5hY2soKX0seC5nZXRtYXh6b29tPWZ1bmN0aW9uKHQpe0MoKS5nZXRNYXhab29tQXRMYXRMbmcodC5sYXRMbmcsZnVuY3Rpb24obil7Yyh0LG4uc3RhdHVzPT09cS5NYXhab29tU3RhdHVzLk9LP24uem9vbTohMSxzdGF0dXMpLGIuYWNrKCl9KX0seC5nZXRlbGV2YXRpb249ZnVuY3Rpb24odCl7dmFyIG4sZT1bXSxvPWZ1bmN0aW9uKG4sZSl7Yyh0LGU9PT1xLkVsZXZhdGlvblN0YXR1cy5PSz9uOiExLGUpLGIuYWNrKCl9O2lmKHQubGF0TG5nKWUucHVzaCh0LmxhdExuZyk7ZWxzZSBmb3IoZT1oKHQudGQubG9jYXRpb25zfHxbXSksbj0wO248ZS5sZW5ndGg7bisrKWVbbl09bShlW25dKTtpZihlLmxlbmd0aClUKCkuZ2V0RWxldmF0aW9uRm9yTG9jYXRpb25zKHtsb2NhdGlvbnM6ZX0sbyk7ZWxzZXtpZih0LnRkLnBhdGgmJnQudGQucGF0aC5sZW5ndGgpZm9yKG49MDtuPHQudGQucGF0aC5sZW5ndGg7bisrKWUucHVzaChtKHQudGQucGF0aFtuXSkpO2UubGVuZ3RoP1QoKS5nZXRFbGV2YXRpb25BbG9uZ1BhdGgoe3BhdGg6ZSxzYW1wbGVzOnQudGQuc2FtcGxlc30sbyk6Yi5hY2soKX19LHguZGVmYXVsdHM9ZnVuY3Rpb24obil7dC5lYWNoKG4udGQsZnVuY3Rpb24obixvKXtlKEFbbl0pP0Fbbl09dC5leHRlbmQoe30sQVtuXSxvKTpBW25dPW99KSxiLmFjayghMCl9LHgucmVjdGFuZ2xlPWZ1bmN0aW9uKG4pe3ZhciBlPVtdLG89XCJ2YWx1ZXNcImluIG4udGQ7cmV0dXJuIG98fChuLnRkLnZhbHVlcz1be29wdGlvbnM6bi5vcHRzfV0pLG4udGQudmFsdWVzLmxlbmd0aD8odC5lYWNoKG4udGQudmFsdWVzLGZ1bmN0aW9uKHQsbyl7dmFyIGEscixzPXAobixvKTtzLm9wdGlvbnMuYm91bmRzPXkocy5vcHRpb25zLmJvdW5kcz9zLm9wdGlvbnMuYm91bmRzOm8pLEV8fHYocy5vcHRpb25zLmJvdW5kcy5nZXRDZW50ZXIoKSkscy5vcHRpb25zLm1hcD1FLHI9bmV3IEEuY2xhc3Nlcy5SZWN0YW5nbGUocy5vcHRpb25zKSxlLnB1c2gociksYT1JLmFkZCh7dGQ6c30sXCJyZWN0YW5nbGVcIixyKSxsKGkse3RkOnN9LHIsYSl9KSx2b2lkIGcobixvP2U6ZVswXSkpOnZvaWQgZyhuLCExKX0seC5wb2x5bGluZT1mdW5jdGlvbih0KXtMKHQsXCJQb2x5bGluZVwiLFwicGF0aFwiKX0seC5wb2x5Z29uPWZ1bmN0aW9uKHQpe0wodCxcIlBvbHlnb25cIixcInBhdGhzXCIpfSx4LnRyYWZmaWNsYXllcj1mdW5jdGlvbih0KXt2KCk7dmFyIG49SS5nZXQoXCJ0cmFmZmljbGF5ZXJcIik7bnx8KG49bmV3IEEuY2xhc3Nlcy5UcmFmZmljTGF5ZXIsbi5zZXRNYXAoRSksSS5hZGQodCxcInRyYWZmaWNsYXllclwiLG4pKSxnKHQsbil9LHgudHJhbnNpdGxheWVyPWZ1bmN0aW9uKHQpe3YoKTt2YXIgbj1JLmdldChcInRyYW5zaXRsYXllclwiKTtufHwobj1uZXcgQS5jbGFzc2VzLlRyYW5zaXRMYXllcixuLnNldE1hcChFKSxJLmFkZCh0LFwidHJhbnNpdGxheWVyXCIsbikpLGcodCxuKX0seC5iaWN5Y2xpbmdsYXllcj1mdW5jdGlvbih0KXt2KCk7dmFyIG49SS5nZXQoXCJiaWN5Y2xpbmdsYXllclwiKTtufHwobj1uZXcgQS5jbGFzc2VzLkJpY3ljbGluZ0xheWVyLG4uc2V0TWFwKEUpLEkuYWRkKHQsXCJiaWN5Y2xpbmdsYXllclwiLG4pKSxnKHQsbil9LHguZ3JvdW5kb3ZlcmxheT1mdW5jdGlvbih0KXt0Lm9wdHMuYm91bmRzPXkodC5vcHRzLmJvdW5kcyksdC5vcHRzLmJvdW5kcyYmdih0Lm9wdHMuYm91bmRzLmdldENlbnRlcigpKTt2YXIgbixlPW5ldyBBLmNsYXNzZXMuR3JvdW5kT3ZlcmxheSh0Lm9wdHMudXJsLHQub3B0cy5ib3VuZHMsdC5vcHRzLm9wdHMpO2Uuc2V0TWFwKEUpLG49SS5hZGQodCxcImdyb3VuZG92ZXJsYXlcIixlKSxnKHQsZSxuKX0seC5zdHJlZXR2aWV3cGFub3JhbWE9ZnVuY3Rpb24obil7bi5vcHRzLm9wdHN8fChuLm9wdHMub3B0cz17fSksbi5sYXRMbmc/bi5vcHRzLm9wdHMucG9zaXRpb249bi5sYXRMbmc6bi5vcHRzLm9wdHMucG9zaXRpb24mJihuLm9wdHMub3B0cy5wb3NpdGlvbj1tKG4ub3B0cy5vcHRzLnBvc2l0aW9uKSksbi50ZC5kaXZJZD9uLm9wdHMuY29udGFpbmVyPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG4udGQuZGl2SWQpOm4ub3B0cy5jb250YWluZXImJihuLm9wdHMuY29udGFpbmVyPXQobi5vcHRzLmNvbnRhaW5lcikuZ2V0KDApKTt2YXIgZSxvPW5ldyBBLmNsYXNzZXMuU3RyZWV0Vmlld1Bhbm9yYW1hKG4ub3B0cy5jb250YWluZXIsbi5vcHRzLm9wdHMpO28mJkUuc2V0U3RyZWV0VmlldyhvKSxlPUkuYWRkKG4sXCJzdHJlZXR2aWV3cGFub3JhbWFcIixvKSxnKG4sbyxlKX0seC5rbWxsYXllcj1mdW5jdGlvbihuKXt2YXIgZT1bXSxvPVwidmFsdWVzXCJpbiBuLnRkO3JldHVybiBvfHwobi50ZC52YWx1ZXM9W3tvcHRpb25zOm4ub3B0c31dKSxuLnRkLnZhbHVlcy5sZW5ndGg/KHQuZWFjaChuLnRkLnZhbHVlcyxmdW5jdGlvbih0LG8pe3ZhciBhLHIscyxkPXAobixvKTtFfHx2KCkscz1kLm9wdGlvbnMsZC5vcHRpb25zLm9wdHMmJihzPWQub3B0aW9ucy5vcHRzLGQub3B0aW9ucy51cmwmJihzLnVybD1kLm9wdGlvbnMudXJsKSkscy5tYXA9RSxyPXUoXCIzLjEwXCIpP25ldyBBLmNsYXNzZXMuS21sTGF5ZXIocyk6bmV3IEEuY2xhc3Nlcy5LbWxMYXllcihzLnVybCxzKSxlLnB1c2gociksYT1JLmFkZCh7dGQ6ZH0sXCJrbWxsYXllclwiLHIpLGwoaSx7dGQ6ZH0scixhKX0pLHZvaWQgZyhuLG8/ZTplWzBdKSk6dm9pZCBnKG4sITEpfSx4LnBhbmVsPWZ1bmN0aW9uKG4pe3YoKTt2YXIgZSxvLHI9MCxzPTAsdT10KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO3UuY3NzKHtwb3NpdGlvbjpcImFic29sdXRlXCIsekluZGV4OjFlMyx2aXNpYmlsaXR5OlwiaGlkZGVuXCJ9KSxuLm9wdHMuY29udGVudCYmKG89dChuLm9wdHMuY29udGVudCksdS5hcHBlbmQobyksaS5maXJzdCgpLnByZXBlbmQodSksYShuLm9wdHMubGVmdCk/YShuLm9wdHMucmlnaHQpP24ub3B0cy5jZW50ZXImJihyPShpLndpZHRoKCktby53aWR0aCgpKS8yKTpyPWkud2lkdGgoKS1vLndpZHRoKCktbi5vcHRzLnJpZ2h0OnI9bi5vcHRzLmxlZnQsYShuLm9wdHMudG9wKT9hKG4ub3B0cy5ib3R0b20pP24ub3B0cy5taWRkbGUmJihzPShpLmhlaWdodCgpLW8uaGVpZ2h0KCkpLzIpOnM9aS5oZWlnaHQoKS1vLmhlaWdodCgpLW4ub3B0cy5ib3R0b206cz1uLm9wdHMudG9wLHUuY3NzKHt0b3A6cyxsZWZ0OnIsdmlzaWJpbGl0eTpcInZpc2libGVcIn0pKSxlPUkuYWRkKG4sXCJwYW5lbFwiLHUpLGcobix1LGUpLHU9bnVsbH0seC5kaXJlY3Rpb25zcmVuZGVyZXI9ZnVuY3Rpb24obil7bi5vcHRzLm1hcD1FO3ZhciBlLG89bmV3IHEuRGlyZWN0aW9uc1JlbmRlcmVyKG4ub3B0cyk7bi50ZC5kaXZJZD9vLnNldFBhbmVsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG4udGQuZGl2SWQpKTpuLnRkLmNvbnRhaW5lciYmby5zZXRQYW5lbCh0KG4udGQuY29udGFpbmVyKS5nZXQoMCkpLGU9SS5hZGQobixcImRpcmVjdGlvbnNyZW5kZXJlclwiLG8pLGcobixvLGUpfSx4LmdldGdlb2xvYz1mdW5jdGlvbih0KXtnKHQsdC5sYXRMbmcpfSx4LnN0eWxlZG1hcHR5cGU9ZnVuY3Rpb24odCl7digpO3ZhciBuPW5ldyBBLmNsYXNzZXMuU3R5bGVkTWFwVHlwZSh0LnRkLnN0eWxlcyx0Lm9wdHMpO0UubWFwVHlwZXMuc2V0KHQudGQuaWQsbiksZyh0LG4pfSx4LmltYWdlbWFwdHlwZT1mdW5jdGlvbih0KXt2KCk7dmFyIG49bmV3IEEuY2xhc3Nlcy5JbWFnZU1hcFR5cGUodC5vcHRzKTtFLm1hcFR5cGVzLnNldCh0LnRkLmlkLG4pLGcodCxuKX0seC5hdXRvZml0PWZ1bmN0aW9uKG4pe3ZhciBlPW5ldyBxLkxhdExuZ0JvdW5kczt0LmVhY2goSS5hbGwoKSxmdW5jdGlvbih0LG4pe24uZ2V0UG9zaXRpb24mJm4uZ2V0UG9zaXRpb24oKT9lLmV4dGVuZChuLmdldFBvc2l0aW9uKCkpOm4uZ2V0Qm91bmRzJiZuLmdldEJvdW5kcygpPyhlLmV4dGVuZChuLmdldEJvdW5kcygpLmdldE5vcnRoRWFzdCgpKSxlLmV4dGVuZChuLmdldEJvdW5kcygpLmdldFNvdXRoV2VzdCgpKSk6bi5nZXRQYXRocyYmbi5nZXRQYXRocygpP24uZ2V0UGF0aHMoKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QuZm9yRWFjaChmdW5jdGlvbih0KXtlLmV4dGVuZCh0KX0pfSk6bi5nZXRQYXRoJiZuLmdldFBhdGgoKT9uLmdldFBhdGgoKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2UuZXh0ZW5kKHQpfSk6bi5nZXRDZW50ZXImJm4uZ2V0Q2VudGVyKCk/ZS5leHRlbmQobi5nZXRDZW50ZXIoKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgXyYmbiBpbnN0YW5jZW9mIF8mJihuPUkuZ2V0QnlJZChuLmlkKCksITApLG4mJm4uYXV0b2ZpdChlKSl9KSxlLmlzRW1wdHkoKXx8RS5nZXRCb3VuZHMoKSYmRS5nZXRCb3VuZHMoKS5lcXVhbHMoZSl8fChcIm1heFpvb21cImluIG4udGQmJnEuZXZlbnQuYWRkTGlzdGVuZXJPbmNlKEUsXCJib3VuZHNfY2hhbmdlZFwiLGZ1bmN0aW9uKCl7dGhpcy5nZXRab29tKCk+bi50ZC5tYXhab29tJiZ0aGlzLnNldFpvb20obi50ZC5tYXhab29tKX0pLEUuZml0Qm91bmRzKGUpKSxnKG4sITApfSx4LmNsZWFyPWZ1bmN0aW9uKG4pe2lmKG8obi50ZCkpe2lmKEkuY2xlYXJCeUlkKG4udGQpfHxJLm9iakNsZWFyQnlJZChuLnRkKSlyZXR1cm4gdm9pZCBnKG4sITApO24udGQ9e25hbWU6bi50ZH19bi50ZC5pZD90LmVhY2goaChuLnRkLmlkKSxmdW5jdGlvbih0LG4pe0kuY2xlYXJCeUlkKG4pfHxJLm9iakNsZWFyQnlJZChuKX0pOihJLmNsZWFyKGgobi50ZC5uYW1lKSxuLnRkLmxhc3Qsbi50ZC5maXJzdCxuLnRkLnRhZyksSS5vYmpDbGVhcihoKG4udGQubmFtZSksbi50ZC5sYXN0LG4udGQuZmlyc3Qsbi50ZC50YWcpKSxnKG4sITApfSx4LmdldD1mdW5jdGlvbihlLGksYSl7dmFyIHIscyx1PWk/ZTplLnRkO3JldHVybiBpfHwoYT11LmZ1bGwpLG8odSk/KHM9SS5nZXRCeUlkKHUsITEsYSl8fEkub2JqR2V0QnlJZCh1KSxzPT09ITEmJihyPXUsdT17fSkpOnI9dS5uYW1lLFwibWFwXCI9PT1yJiYocz1FKSxzfHwocz1bXSx1LmlkPyh0LmVhY2goaCh1LmlkKSxmdW5jdGlvbih0LG4pe3MucHVzaChJLmdldEJ5SWQobiwhMSxhKXx8SS5vYmpHZXRCeUlkKG4pKX0pLFIodS5pZCl8fChzPXNbMF0pKToodC5lYWNoKHI/aChyKTpbbl0sZnVuY3Rpb24obixlKXt2YXIgbzt1LmZpcnN0PyhvPUkuZ2V0KGUsITEsdS50YWcsYSksbyYmcy5wdXNoKG8pKTp1LmFsbD90LmVhY2goSS5hbGwoZSx1LnRhZyxhKSxmdW5jdGlvbih0LG4pe3MucHVzaChuKX0pOihvPUkuZ2V0KGUsITAsdS50YWcsYSksbyYmcy5wdXNoKG8pKX0pLHUuYWxsfHxSKHIpfHwocz1zWzBdKSkpLHM9UihzKXx8IXUuYWxsP3M6W3NdLGk/czp2b2lkIGcoZSxzKX0seC5leGVjPWZ1bmN0aW9uKG4pe3QuZWFjaChoKG4udGQuZnVuYyksZnVuY3Rpb24oZSxvKXt0LmVhY2goeC5nZXQobi50ZCwhMCxuLnRkLmhhc093blByb3BlcnR5KFwiZnVsbFwiKT9uLnRkLmZ1bGw6ITApLGZ1bmN0aW9uKHQsbil7by5jYWxsKGksbil9KX0pLGcobiwhMCl9LHgudHJpZ2dlcj1mdW5jdGlvbihuKXtpZihvKG4udGQpKXEuZXZlbnQudHJpZ2dlcihFLG4udGQpO2Vsc2V7dmFyIGU9W0Usbi50ZC5ldmVudE5hbWVdO24udGQudmFyX2FyZ3MmJnQuZWFjaChuLnRkLnZhcl9hcmdzLGZ1bmN0aW9uKHQsbil7ZS5wdXNoKG4pfSkscS5ldmVudC50cmlnZ2VyLmFwcGx5KHEuZXZlbnQsZSl9YyhuKSxiLmFjaygpfX12YXIgQSxxLFo9MCx6PXQuaXNGdW5jdGlvbixSPXQuaXNBcnJheSxWPXt9LEc9bmV3IEk7dC5mbi5nbWFwMz1mdW5jdGlvbigpe3ZhciBuLGU9W10sbz0hMCxpPVtdO2ZvcihyKCksbj0wO248YXJndW1lbnRzLmxlbmd0aDtuKyspYXJndW1lbnRzW25dJiZlLnB1c2goYXJndW1lbnRzW25dKTtyZXR1cm4gZS5sZW5ndGh8fGUucHVzaChcIm1hcFwiKSx0LmVhY2godGhpcyxmdW5jdGlvbigpe3ZhciBuPXQodGhpcyksYT1uLmRhdGEoXCJnbWFwM1wiKTtvPSExLGF8fChhPW5ldyBVKG4pLG4uZGF0YShcImdtYXAzXCIsYSkpLDEhPT1lLmxlbmd0aHx8XCJnZXRcIiE9PWVbMF0mJiF4KGVbMF0pP2EuX3BsYW4oZSk6XCJnZXRcIj09PWVbMF0/aS5wdXNoKGEuZ2V0KFwibWFwXCIsITApKTppLnB1c2goYS5nZXQoZVswXS5nZXQsITAsZVswXS5nZXQuZnVsbCkpfSksaS5sZW5ndGg/MT09PWkubGVuZ3RoP2lbMF06aTp0aGlzfX0oalF1ZXJ5KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9ibG9ja3MvbWFwL2pzL2dtYXAzLm1pbi5qc1xuICoqLyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMxQkE7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUxBO0FBREE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFaQTs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Iiwic291cmNlUm9vdCI6IiJ9