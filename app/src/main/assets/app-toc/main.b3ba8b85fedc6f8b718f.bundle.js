webpackJsonp([1], {
    "+3/4": function(t, e, n) {
        "use strict";
        n.d(e, "a", function() { return o });
        var i = n("TToO"),
            o = function(t) {
                function e(e) { t.call(this), this.scheduler = e }
                return Object(i.b)(e, t), e.create = function(t) { return new e(t) }, e.dispatch = function(t) { t.subscriber.complete() }, e.prototype._subscribe = function(t) {
                    var n = this.scheduler;
                    if (n) return n.schedule(e.dispatch, 0, { subscriber: t });
                    t.complete()
                }, e
            }(n("YaPU").a)
    },
    "+CnV": function(t, e, n) {
        "use strict";
        n.d(e, "a", function() { return i });
        var i = function(t) { var e, i = n("AMGY").a.Symbol; return "function" == typeof i ? i.observable ? e = i.observable : (e = i("observable"), i.observable = e) : e = "@@observable", e }()
    },
    "/iUD": function(t, e, n) {
        "use strict";
        e.a = function(t) { return "function" == typeof t }
    },
    "/nXB": function(t, e, n) {
        "use strict";
        var i = n("YaPU"),
            o = n("Veqx"),
            r = n("1Q68"),
            l = n("TToO"),
            s = n("PIsA"),
            a = n("tZ2B"),
            u = function() {
                function t(t, e, n) { void 0 === n && (n = Number.POSITIVE_INFINITY), this.project = t, this.resultSelector = e, this.concurrent = n }
                return t.prototype.call = function(t, e) { return e.subscribe(new c(t, this.project, this.resultSelector, this.concurrent)) }, t
            }(),
            c = function(t) {
                function e(e, n, i, o) { void 0 === o && (o = Number.POSITIVE_INFINITY), t.call(this, e), this.project = n, this.resultSelector = i, this.concurrent = o, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0 }
                return Object(l.b)(e, t), e.prototype._next = function(t) { this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t) }, e.prototype._tryNext = function(t) {
                    var e, n = this.index++;
                    try { e = this.project(t, n) } catch (t) { return void this.destination.error(t) }
                    this.active++, this._innerSub(e, t, n)
                }, e.prototype._innerSub = function(t, e, n) { this.add(Object(s.a)(this, t, e, n)) }, e.prototype._complete = function() { this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete() }, e.prototype.notifyNext = function(t, e, n, i, o) { this.resultSelector ? this._notifyResultSelector(t, e, n, i) : this.destination.next(e) }, e.prototype._notifyResultSelector = function(t, e, n, i) {
                    var o;
                    try { o = this.resultSelector(t, e, n, i) } catch (t) { return void this.destination.error(t) }
                    this.destination.next(o)
                }, e.prototype.notifyComplete = function(t) {
                    var e = this.buffer;
                    this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                }, e
            }(a.a);

        function d(t) { return t }
        e.a = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
            var n = Number.POSITIVE_INFINITY,
                l = null,
                s = t[t.length - 1];
            return Object(r.a)(s) ? (l = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof s && (n = t.pop()), null === l && 1 === t.length && t[0] instanceof i.a ? t[0] : function(t) {
                return void 0 === t && (t = Number.POSITIVE_INFINITY),
                    function(t, e, n) {
                        return void 0 === n && (n = Number.POSITIVE_INFINITY),
                            function(i) { return "number" == typeof e && (n = e, e = null), i.lift(new u(t, e, n)) }
                    }(d, null, t)
            }(n)(new o.a(t, l))
        }
    },
    "/zV6": function(t, e, n) {
        t.exports = function() {
            "use strict";
            var t = { album: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="5" y="2" width="10" height="1" /> <rect x="3" y="4" width="14" height="1" /> <rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11" /></svg>', ban: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /> <line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5" /></svg>', behance: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z" /> <path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z" /> <rect x="13" y="4" width="5" height="1.4" /></svg>', bell: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z" /> <path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16" /></svg>', bold: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z" /></svg>', bolt: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z" /></svg>', bookmark: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5" /></svg>', calendar: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z" /> <rect width="1" height="3" x="6" y="2" /> <rect width="1" height="3" x="13" y="2" /></svg>', camera: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8" /> <path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z" /></svg>', cart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="7.3" cy="17.3" r="1.4" /> <circle cx="13.3" cy="17.3" r="1.4" /> <polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5" /></svg>', check: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4" /></svg>', clock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /> <rect x="9" y="4" width="1" height="7" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625" /></svg>', close: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4" /> <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16" /></svg>', code: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16" /> <polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16" /></svg>', cog: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31" /> <path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z" /></svg>', comment: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z" /></svg>', commenting: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5" /> <circle cx="10" cy="8" r="1" /> <circle cx="6" cy="8" r="1" /> <circle cx="14" cy="8" r="1" /></svg>', comments: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13" /> <path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z" /></svg>', copy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16" /> <polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17" /></svg>', database: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14" /> <path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11" /> <path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25" /> <path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64" /></svg>', desktop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="8" y="15" width="1" height="2" /> <rect x="11" y="15" width="1" height="2" /> <rect x="5" y="16" width="10" height="1" /> <rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11" /></svg>', download: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10" /> <rect x="3" y="17" width="13" height="1" /> <line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3" /></svg>', dribbble: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5" /> <path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6" /> <path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4" /> <circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9" /></svg>', expand: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="13 2 18 2 18 7 17 7 17 3 13 3" /> <polygon points="2 13 3 13 3 17 7 17 7 18 2 18" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11" /></svg>', facebook: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z" /></svg>', file: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17" /></svg>', flickr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="5.5" cy="9.5" r="3.5" /> <circle cx="14.5" cy="9.5" r="3.5" /></svg>', folder: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5" /></svg>', forward: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z" /></svg>', foursquare: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z" /></svg>', future: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10" /> <rect x="9" y="4" width="1" height="7" /> <path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1" /></svg>', github: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z" /></svg>', gitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="3.5" y="1" width="1.531" height="11.471" /> <rect x="7.324" y="4.059" width="1.529" height="15.294" /> <rect x="11.148" y="4.059" width="1.527" height="15.294" /> <rect x="14.971" y="4.059" width="1.529" height="8.412" /></svg>', google: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z" /></svg>', grid: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="2" width="3" height="3" /> <rect x="8" y="2" width="3" height="3" /> <rect x="14" y="2" width="3" height="3" /> <rect x="2" y="8" width="3" height="3" /> <rect x="8" y="8" width="3" height="3" /> <rect x="14" y="8" width="3" height="3" /> <rect x="2" y="14" width="3" height="3" /> <rect x="8" y="14" width="3" height="3" /> <rect x="14" y="14" width="3" height="3" /></svg>', happy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="13" cy="7" r="1" /> <circle cx="7" cy="7" r="1" /> <circle fill="none" stroke="#000" cx="10" cy="10" r="8.5" /> <path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4" /></svg>', hashtag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z" /></svg>', heart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z" /></svg>', history: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10" /> <rect x="9" y="4" width="1" height="7" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625" id="Shape" /></svg>', home: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65" /> <polygon points="15 4 18 4 18 7 17 7 17 5 15 5" /> <polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19" /></svg>', image: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="16.1" cy="6.1" r="1.1" /> <rect fill="none" stroke="#000" x="0.5" y="2.5" width="19" height="15" /> <polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14" /> <polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14" /></svg>', info: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /></svg>', instagram: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z" /> <circle cx="14.87" cy="5.26" r="1.09" /> <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z" /></svg>', italic: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z" /></svg>', joomla: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z" /> <path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8" /> <path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8" /> <path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7" /></svg>', laptop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect y="16" width="20" height="1" /> <rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10" /></svg>', lifesaver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z" /></svg>', link: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975" /></svg>', linkedin: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z" /> <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z" /></svg>', list: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="6" y="4" width="12" height="1" /> <rect x="6" y="9" width="12" height="1" /> <rect x="6" y="14" width="12" height="1" /> <rect x="2" y="4" width="2" height="1" /> <rect x="2" y="9" width="2" height="1" /> <rect x="2" y="14" width="2" height="1" /></svg>', location: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z" /> <circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3" /></svg>', lock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5" /> <path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8" /></svg>', mail: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5" /> <path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z" /></svg>', menu: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="4" width="16" height="1" /> <rect x="2" y="9" width="16" height="1" /> <rect x="2" y="14" width="16" height="1" /></svg>', minus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect height="1" width="18" y="9" x="1" /></svg>', more: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="3" cy="10" r="2" /> <circle cx="10" cy="10" r="2" /> <circle cx="17" cy="10" r="2" /></svg>', move: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="4,5 1,5 1,9 2,9 2,6 4,6 " /> <polygon points="1,16 2,16 2,18 4,18 4,19 1,19 " /> <polygon points="14,16 14,19 11,19 11,18 13,18 13,16 " /> <rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13" /> <rect x="1" y="11" width="1" height="3" /> <rect x="6" y="18" width="3" height="1" /></svg>', nut: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3" /> <circle fill="none" stroke="#000" cx="10" cy="10" r="3.5" /></svg>', pagekit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19 " /></svg>', pencil: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z" /> <path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148" /></svg>', phone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z" /> <circle cx="10.5" cy="16.5" r="0.8" /></svg>', pinterest: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1" /></svg>', play: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15" /></svg>', plus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="9" y="1" width="1" height="17" /> <rect x="1" y="9" width="17" height="1" /></svg>', pull: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7" /> <line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2" /> <polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5" /></svg>', push: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3" /> <line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1" /> <polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5" /></svg>', question: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /> <circle cx="10.44" cy="14.42" r="1.05" /> <path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75" /></svg>', receiver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611" /></svg>', refresh: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5" /> <polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9" /></svg>', reply: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z" /></svg>', rss: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="3.12" cy="16.8" r="1.85" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5" /></svg>', search: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z" /></svg>', server: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="3" y="3" width="1" height="2" /> <rect x="5" y="3" width="1" height="2" /> <rect x="7" y="3" width="1" height="2" /> <rect x="16" y="3" width="1" height="1" /> <rect x="16" y="10" width="1" height="1" /> <circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4" /> <rect x="3" y="10" width="1" height="2" /> <rect x="5" y="10" width="1" height="2" /> <rect x="9.5" y="14" width="1" height="2" /> <rect x="3" y="17" width="6" height="1" /> <rect x="11" y="17" width="6" height="1" /> <rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5" /> <rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5" /></svg>', settings: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15" /> <ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15" /> <circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15" /> <rect x="1" y="3" width="3" height="1" /> <rect x="10" y="3" width="8" height="1" /> <rect x="1" y="9" width="8" height="1" /> <rect x="15" y="9" width="3" height="1" /> <rect x="1" y="15" width="3" height="1" /> <rect x="10" y="15" width="8" height="1" /></svg>', shrink: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="11 4 12 4 12 8 16 8 16 9 11 9" /> <polygon points="4 11 9 11 9 16 8 16 8 12 4 12" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12" /></svg>', social: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7" /> <line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3" /></svg>', soundcloud: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z" /> <rect x="6" y="6.5" width="1.5" height="8.5" /> <rect x="3" y="8" width="1.5" height="7" /> <rect y="10" width="1.5" height="5" /></svg>', star: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27" /></svg>', strikethrough: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z" /> <rect x="3" y="10" width="15" height="1" /></svg>', table: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="1" y="3" width="18" height="1" /> <rect x="1" y="7" width="18" height="1" /> <rect x="1" y="11" width="18" height="1" /> <rect x="1" y="15" width="18" height="1" /></svg>', tablet: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z" /> <circle cx="10.5" cy="16.3" r="0.8" /></svg>', tag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z" /> <circle cx="14" cy="6" r="1" /></svg>', thumbnails: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5" /> <rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5" /> <rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5" /> <rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5" /></svg>', trash: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3" /> <polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4" /> <rect x="8" y="7" width="1" height="9" /> <rect x="11" y="7" width="1" height="9" /> <rect x="2" y="3" width="16" height="1" /></svg>', tripadvisor: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z" /></svg>', tumblr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z" /></svg>', tv: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="7" y="16" width="6" height="1" /> <rect fill="none" stroke="#000" x="0.5" y="3.5" width="19" height="11" /></svg>', twitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74" /></svg>', uikit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3" /> <polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3" /></svg>', unlock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10" /> <path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9" /></svg>', upload: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8 " /> <rect x="3" y="17" width="13" height="1" /> <line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4" /></svg>', user: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2" /></svg>', users: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1" /></svg>', vimeo: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z" /></svg>', warning: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="14" r="1" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /> <path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z" /></svg>', whatsapp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9" /></svg>', wordpress: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z" /></svg>', world: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M1,10.5 L19,10.5" /> <path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5" /> <path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5" /> <path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z" /> <circle fill="none" stroke="#000" cx="10" cy="10.5" r="9" /></svg>', xing: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z" /> <path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z" /></svg>', yelp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z" /></svg>', youtube: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z" /></svg>', "500px": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719\t\tc0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449\t\tc-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045\t\tc-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z" /> <path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066\t\tc0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564\t\tc0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271\t\tc0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z" /> <path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521\t\tc-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53\t\tc-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203\t\tc-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604\t\tc0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645\t\tc1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z" /> <path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461\t\tc0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882\t\tc0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881\t\tc-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461\t\tc-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915\t\tC5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0\t\tc0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408\t\tc0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406\t\tc-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799\t\tc0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468\t\tc-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607\t\tc0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038\t\tc-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113\t\tc-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z" /></svg>', "arrow-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66" /> <line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15" /></svg>', "arrow-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5" /> <line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52" /></svg>', "arrow-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14" /> <line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5" /></svg>', "arrow-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4" /> <line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5" /></svg>', "chevron-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7" /></svg>', "chevron-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4" /></svg>', "chevron-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16" /></svg>', "chevron-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13" /></svg>', "cloud-download": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6" /> <polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16" /> <path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5" /></svg>', "cloud-upload": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6" /> <polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75" /> <path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5" /></svg>', "credit-card": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12" /> <rect x="1" y="7" width="18" height="3" /></svg>', "file-edit": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z" /> <polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5" /></svg>', "git-branch": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2" /> <circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2" /> <circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2" /> <path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5" /></svg>', "git-fork": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79" /> <circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79" /> <ellipse fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" rx="1.79" ry="1.79" /> <path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57" /></svg>', "github-alt": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z" /></svg>', "google-plus": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z" /> <polygon points="20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9 " /></svg>', "minus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9" /> <line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5" /></svg>', "more-vertical": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="3" r="2" /> <circle cx="10" cy="10" r="2" /> <circle cx="10" cy="17" r="2" /></svg>', "paint-bucket": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61" /> <path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z" /></svg>', "phone-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z" /> <circle cx="3.8" cy="10.5" r="0.8" /></svg>', "play-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /></svg>', "plus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9" /> <line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14" /> <line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5" /></svg>', "quote-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z" /> <path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z" /></svg>', "sign-in": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3" /> <polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5" /></svg>', "sign-out": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5" /> <polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3" /></svg>', "tablet-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z" /> <circle cx="3.7" cy="10.5" r="0.8" /></svg>', "triangle-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="5 7 15 7 10 12" /></svg>', "triangle-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="12 5 7 10 12 15" /></svg>', "triangle-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="8 5 13 10 8 15" /></svg>', "triangle-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="5 13 10 8 15 13" /></svg>', "video-camera": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="18,6 18,14 12,10 " /> <rect x="2" y="5" width="12" height="10" /></svg>' };

            function e(n) { e.installed || n.icon.add(t) }
            return "undefined" != typeof window && window.UIkit && window.UIkit.use(e), e
        }()
    },
    0: function(t, e, n) { t.exports = n("SD63") },
    "1Q68": function(t, e, n) {
        "use strict";
        e.a = function(t) { return t && "function" == typeof t.schedule }
    },
    "2EC8": function(t, e, n) {
        t.exports = function() {
            "use strict";

            function t(t, e) { return function(n) { var i = arguments.length; return i ? i > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e) } }
            var e = Object.prototype.hasOwnProperty;

            function n(t, n) { return e.call(t, n) }
            var i = /([a-z\d])([A-Z])/g;

            function o(t) { return t.replace(i, "$1-$2").toLowerCase() }
            var r = /-(\w)/g;

            function l(t) { return t.replace(r, s) }

            function s(t, e) { return e ? e.toUpperCase() : "" }

            function a(t) { return t.length ? s(0, t.charAt(0)) + t.slice(1) : "" }
            var u = String.prototype,
                c = u.startsWith || function(t) { return 0 === this.lastIndexOf(t, 0) };

            function d(t, e) { return c.call(t, e) }
            var h = u.endsWith || function(t) { return this.substr(-t.length) === t };

            function p(t, e) { return h.call(t, e) }
            var f = function(t) { return ~this.indexOf(t) },
                g = u.includes || f,
                m = Array.prototype.includes || f;

            function v(t, e) { return t && (S(t) ? g : m).call(t, e) }
            var y = Array.isArray;

            function w(t) { return "function" == typeof t }

            function b(t) { return null !== t && "object" == typeof t }

            function _(t) { return b(t) && Object.getPrototypeOf(t) === Object.prototype }

            function C(t) { return b(t) && t === t.window }

            function k(t) { return b(t) && 9 === t.nodeType }

            function x(t) { return b(t) && !!t.jquery }

            function T(t) { return t instanceof Node || b(t) && 1 === t.nodeType }

            function I(t) { return t instanceof NodeList || t instanceof HTMLCollection }

            function E(t) { return "boolean" == typeof t }

            function S(t) { return "string" == typeof t }

            function M(t) { return "number" == typeof t }

            function O(t) { return M(t) || S(t) && !isNaN(t - parseFloat(t)) }

            function A(t) { return void 0 === t }

            function P(t) { return E(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t }

            function L(t) { var e = Number(t); return !isNaN(e) && e }

            function V(t) { return parseFloat(t) || 0 }

            function D(t) { return T(t) || C(t) || k(t) ? t : I(t) || x(t) ? t[0] : y(t) ? D(t[0]) : null }
            var N = Array.prototype;

            function B(t) { return T(t) ? [t] : I(t) ? N.slice.call(t) : y(t) ? t.map(D).filter(Boolean) : x(t) ? t.toArray() : [] }

            function j(t) { return y(t) ? t : S(t) ? t.split(/,(?![^(]*\))/).map(function(t) { return O(t) ? L(t) : P(t.trim()) }) : [t] }

            function R(t) { return t ? p(t, "ms") ? V(t) : 1e3 * V(t) : 0 }

            function U(t, e, n) { return t.replace(new RegExp(e + "|" + n, "mg"), function(t) { return t === e ? n : e }) }
            var $ = Object.assign || function(t) {
                for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
                t = Object(t);
                for (var o = 0; o < e.length; o++) {
                    var r = e[o];
                    if (null !== r)
                        for (var l in r) n(r, l) && (t[l] = r[l])
                }
                return t
            };

            function F(t, e) {
                for (var n in t)
                    if (!1 === e.call(t[n], t[n], n)) break
            }

            function H(t, e, n) { return void 0 === e && (e = 0), void 0 === n && (n = 1), Math.min(Math.max(t, e), n) }

            function z() {}

            function G(t, e) { return t.left <= e.right && e.left <= t.right && t.top <= e.bottom && e.top <= t.bottom }

            function Z(t, e) { return G({ top: t.y, bottom: t.y, left: t.x, right: t.x }, e) }
            var q = { ratio: function(t, e, n) { var i, o = "width" === e ? "height" : "width"; return (i = {})[o] = Math.round(n * t[o] / t[e]), i[e] = n, i }, contain: function(t, e) { var n = this; return F(t = $({}, t), function(i, o) { return t = t[o] > e[o] ? n.ratio(t, o, e[o]) : t }), t }, cover: function(t, e) { var n = this; return F(t = this.contain(t, e), function(i, o) { return t = t[o] < e[o] ? n.ratio(t, o, e[o]) : t }), t } };

            function W(t, e, n) {
                if (b(e))
                    for (var i in e) W(t, i, e[i]);
                else {
                    if (A(n)) return (t = D(t)) && t.getAttribute(e);
                    B(t).forEach(function(t) { w(n) && (n = n.call(t, W(t, e))), null === n ? Y(t, e) : t.setAttribute(e, n) })
                }
            }

            function Q(t, e) { return B(t).some(function(t) { return t.hasAttribute(e) }) }

            function Y(t, e) { t = B(t), e.split(" ").forEach(function(e) { return t.forEach(function(t) { return t.removeAttribute(e) }) }) }

            function K(t, e, n, i) { W(t, e, function(t) { return t ? t.replace(n, i) : t }) }

            function X(t, e) {
                for (var n = 0, i = [e, "data-" + e]; n < i.length; n++)
                    if (Q(t, i[n])) return W(t, i[n])
            }
            var J = "Promise" in window ? window.Promise : nt,
                tt = 2,
                et = "setImmediate" in window ? setImmediate : setTimeout;

            function nt(t) { this.state = tt, this.value = void 0, this.deferred = []; var e = this; try { t(function(t) { e.resolve(t) }, function(t) { e.reject(t) }) } catch (t) { e.reject(t) } }
            nt.reject = function(t) { return new nt(function(e, n) { n(t) }) }, nt.resolve = function(t) { return new nt(function(e, n) { e(t) }) }, nt.all = function(t) {
                return new nt(function(e, n) {
                    var i = [],
                        o = 0;

                    function r(n) { return function(r) { i[n] = r, (o += 1) === t.length && e(i) } }
                    0 === t.length && e(i);
                    for (var l = 0; l < t.length; l += 1) nt.resolve(t[l]).then(r(l), n)
                })
            }, nt.race = function(t) { return new nt(function(e, n) { for (var i = 0; i < t.length; i += 1) nt.resolve(t[i]).then(e, n) }) };
            var it = nt.prototype;
            it.resolve = function(t) {
                var e = this;
                if (e.state === tt) {
                    if (t === e) throw new TypeError("Promise settled with itself.");
                    var n = !1;
                    try { var i = t && t.then; if (null !== t && b(t) && w(i)) return void i.call(t, function(t) { n || e.resolve(t), n = !0 }, function(t) { n || e.reject(t), n = !0 }) } catch (t) { return void(n || e.reject(t)) }
                    e.state = 0, e.value = t, e.notify()
                }
            }, it.reject = function(t) {
                if (this.state === tt) {
                    if (t === this) throw new TypeError("Promise settled with itself.");
                    this.state = 1, this.value = t, this.notify()
                }
            }, it.notify = function() {
                var t = this;
                et(function() {
                    if (t.state !== tt)
                        for (; t.deferred.length;) {
                            var e = t.deferred.shift(),
                                n = e[0],
                                i = e[1],
                                o = e[2],
                                r = e[3];
                            try { 0 === t.state ? w(n) ? o(n.call(void 0, t.value)) : o(t.value) : 1 === t.state && (w(i) ? o(i.call(void 0, t.value)) : r(t.value)) } catch (t) { r(t) }
                        }
                })
            }, it.then = function(t, e) { var n = this; return new nt(function(i, o) { n.deferred.push([t, e, i, o]), n.notify() }) }, it.catch = function(t) { return this.then(void 0, t) };
            var ot, rt = window,
                lt = document,
                st = lt.documentElement,
                at = "rtl" === W(st, "dir"),
                ut = rt.MutationObserver,
                ct = "ontouchstart" in rt,
                dt = rt.PointerEvent,
                ht = ct || rt.DocumentTouch && lt instanceof DocumentTouch || navigator.maxTouchPoints,
                pt = ht ? "mousedown " + (ct ? "touchstart" : "pointerdown") : "mousedown",
                ft = ht ? "mousemove " + (ct ? "touchmove" : "pointermove") : "mousemove",
                gt = ht ? "mouseup " + (ct ? "touchend" : "pointerup") : "mouseup",
                mt = ht && dt ? "pointerenter" : "mouseenter",
                vt = ht && dt ? "pointerleave" : "mouseleave",
                yt = {};

            function wt(t, e) { return D(t) || _t(t, It(t) ? e : lt) }

            function bt(t, e) { var n = B(t); return n.length && n || Ct(t, It(t) ? e : lt) }

            function _t(t, e) { return D(kt(t, e, "querySelector")) }

            function Ct(t, e) { return B(kt(t, e, "querySelectorAll")) }

            function kt(t, e, n) {
                if (void 0 === e && (e = lt), !t || !S(t)) return null;
                var i;
                It(t = t.replace(Tt, "$1 *")) && (i = [], t = t.split(",").map(function(t, n) {
                    var o = e;
                    if ("!" === (t = t.trim())[0]) {
                        var r = t.substr(1).trim().split(" ");
                        o = At(e.parentNode, r[0]), t = r.slice(1).join(" ")
                    }
                    return o ? (o.id || (o.id = "uk-" + Date.now() + n, i.push(function() { return Y(o, "id") })), "#" + Vt(o.id) + " " + t) : null
                }).filter(Boolean).join(","), e = lt);
                try { return e[n](t) } catch (t) { return null } finally { i && i.forEach(function(t) { return t() }) }
            }(ot = lt.createElement("_").classList) && (ot.add("a", "b"), ot.toggle("c", !1), yt.Multiple = ot.contains("b"), yt.Force = !ot.contains("c"), yt.ClassList = !0), ot = null;
            var xt = /(^|,)\s*[!>+~]/,
                Tt = /([!>+~])(?=\s+[!>+~]|\s*$)/g;

            function It(t) { return S(t) && t.match(xt) }
            var Et = Element.prototype,
                St = Et.matches || Et.webkitMatchesSelector || Et.msMatchesSelector;

            function Mt(t, e) { return B(t).some(function(t) { return St.call(t, e) }) }
            var Ot = Et.closest || function(t) {
                var e = this;
                do {
                    if (Mt(e, t)) return e;
                    e = e.parentNode
                } while (e && 1 === e.nodeType)
            };

            function At(t, e) { return d(e, ">") && (e = e.slice(1)), T(t) ? t.parentNode && Ot.call(t, e) : B(t).map(function(t) { return t.parentNode && Ot.call(t, e) }).filter(Boolean) }

            function Pt(t, e) { for (var n = [], i = D(t).parentNode; i && 1 === i.nodeType;) Mt(i, e) && n.push(i), i = i.parentNode; return n }
            var Lt = rt.CSS && CSS.escape || function(t) { return t.replace(/([^\x7f-\uFFFF\w-])/g, function(t) { return "\\" + t }) };

            function Vt(t) { return S(t) ? Lt.call(null, t) : "" }
            var Dt = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, menuitem: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 };

            function Nt(t) { return B(t).some(function(t) { return Dt[t.tagName.toLowerCase()] }) }

            function Bt(t) { return B(t).some(function(t) { return t.offsetHeight || t.getBoundingClientRect().height }) }
            var jt = "input,select,textarea,button";

            function Rt(t) { return B(t).some(function(t) { return Mt(t, jt) }) }

            function Ut(t, e) { return B(t).filter(function(t) { return Mt(t, e) }) }

            function $t(t, e) { return S(e) ? Mt(t, e) || At(t, e) : t === e || D(e).contains(D(t)) }

            function Ft() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = qt(t),
                    i = n[0],
                    o = n[1],
                    r = n[2],
                    l = n[3],
                    s = n[4];
                return i = Qt(i), r && (l = function(t, e, n) {
                        var i = this;
                        return function(o) {
                            var r = o.target,
                                l = ">" === e[0] ? Ct(e, t).reverse().filter(function(t) { return $t(r, t) })[0] : At(r, e);
                            l && (o.delegate = t, o.current = l, n.call(i, o))
                        }
                    }(i, r, l)), l.length > 1 && (l = function(t) { return function(e) { return y(e.detail) ? t.apply(t, [e].concat(e.detail)) : t(e) } }(l)), o.split(" ").forEach(function(t) { return i && i.addEventListener(t, l, s) }),
                    function() { return Ht(i, o, l, s) }
            }

            function Ht(t, e, n, i) { void 0 === i && (i = !1), (t = Qt(t)) && e.split(" ").forEach(function(e) { return t.removeEventListener(e, n, i) }) }

            function zt() {
                for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                var n = qt(t),
                    i = n[3],
                    o = n[5],
                    r = Ft(n[0], n[1], n[2], function(t) {
                        var e = !o || o(t);
                        e && (r(), i(t, e))
                    }, n[4]);
                return r
            }

            function Gt(t, e, n) { return Yt(t).reduce(function(t, i) { return t && i.dispatchEvent(Zt(e, !0, !0, n)) }, !0) }

            function Zt(t, e, n, i) {
                if (void 0 === e && (e = !0), void 0 === n && (n = !1), S(t)) {
                    var o = document.createEvent("CustomEvent");
                    o.initCustomEvent(t, e, n, i), t = o
                }
                return t
            }

            function qt(t) { return S(t[0]) && (t[0] = _t(t[0])), w(t[2]) && t.splice(2, 0, !1), t }

            function Wt(t) { return "EventTarget" in window ? t instanceof EventTarget : t && "addEventListener" in t }

            function Qt(t) { return Wt(t) ? t : D(t) }

            function Yt(t) { return Wt(t) ? [t] : y(t) ? t.map(Qt).filter(Boolean) : B(t) }

            function Kt(t, e) {
                return new J(function(n, i) {
                    var o = $({ data: null, method: "GET", headers: {}, xhr: new XMLHttpRequest, beforeSend: z, responseType: "" }, e);
                    o.beforeSend(o);
                    var r = o.xhr;
                    for (var l in o)
                        if (l in r) try { r[l] = o[l] } catch (t) {}
                    for (var s in r.open(o.method.toUpperCase(), t), o.headers) r.setRequestHeader(s, o.headers[s]);
                    Ft(r, "load", function() { 0 === r.status || r.status >= 200 && r.status < 300 || 304 === r.status ? n(r) : i($(Error(r.statusText), { xhr: r, status: r.status })) }), Ft(r, "error", function() { return i($(Error("Network Error"), { xhr: r })) }), Ft(r, "timeout", function() { return i($(Error("Network Timeout"), { xhr: r })) }), r.send(o.data)
                })
            }

            function Xt() { return "complete" === lt.readyState || "loading" !== lt.readyState && !st.doScroll }

            function Jt(t) {
                if (Xt()) t();
                else var e = function() { n(), i(), t() },
                    n = Ft(lt, "DOMContentLoaded", e),
                    i = Ft(rt, "load", e)
            }

            function te(t, e) { return e ? B(t).indexOf(D(e)) : B((t = D(t)) && t.parentNode.children).indexOf(t) }

            function ee(t, e, n, i) { void 0 === n && (n = 0), void 0 === i && (i = !1); var o = (e = B(e)).length; return t = O(t) ? L(t) : "next" === t ? n + 1 : "previous" === t ? n - 1 : te(e, t), i ? H(t, 0, o - 1) : (t %= o) < 0 ? t + o : t }

            function ne(t) { return (t = D(t)).innerHTML = "", t }

            function ie(t, e) { return t = D(t), A(e) ? t.innerHTML : oe(t.hasChildNodes() ? ne(t) : t, e) }

            function oe(t, e) { return t = D(t), se(e, function(e) { return t.appendChild(e) }) }

            function re(t, e) { return t = D(t), se(e, function(e) { return t.parentNode.insertBefore(e, t) }) }

            function le(t, e) { return t = D(t), se(e, function(e) { return t.nextSibling ? re(t.nextSibling, e) : oe(t.parentNode, e) }) }

            function se(t, e) { return (t = S(t) ? fe(t) : t) ? "length" in t ? B(t).map(e) : e(t) : null }

            function ae(t) { B(t).map(function(t) { return t.parentNode && t.parentNode.removeChild(t) }) }

            function ue(t, e) { for (e = D(re(t, e)); e.firstChild;) e = e.firstChild; return oe(e, t), e }

            function ce(t, e) { return B(B(t).map(function(t) { return t.hasChildNodes ? ue(B(t.childNodes), e) : oe(t, e) })) }

            function de(t) { B(t).map(function(t) { return t.parentNode }).filter(function(t, e, n) { return n.indexOf(t) === e }).forEach(function(t) { re(t, t.childNodes), ae(t) }) }
            var he = /^\s*<(\w+|!)[^>]*>/,
                pe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

            function fe(t) { var e = pe.exec(t); if (e) return lt.createElement(e[1]); var n = lt.createElement("div"); return he.test(t) ? n.insertAdjacentHTML("beforeend", t.trim()) : n.textContent = t, n.childNodes.length > 1 ? B(n.childNodes) : n.firstChild }

            function ge(t) {
                for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                _e(t, e, "add")
            }

            function me(t) {
                for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                _e(t, e, "remove")
            }

            function ve(t, e) { K(t, "class", new RegExp("(^|\\s)" + e + "(?!\\S)", "g"), "") }

            function ye(t) {
                for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                e[0] && me(t, e[0]), e[1] && ge(t, e[1])
            }

            function we(t, e) { return yt.ClassList && B(t).some(function(t) { return t.classList.contains(e) }) }

            function be(t) {
                for (var e = [], n = arguments.length - 1; n-- > 0;) e[n] = arguments[n + 1];
                if (yt.ClassList && e.length) {
                    var i = S((e = Ce(e))[e.length - 1]) ? [] : e.pop();
                    e = e.filter(Boolean), B(t).forEach(function(t) { for (var n = t.classList, o = 0; o < e.length; o++) yt.Force ? n.toggle.apply(n, [e[o]].concat(i)) : n[(A(i) ? !n.contains(e[o]) : i) ? "add" : "remove"](e[o]) })
                }
            }

            function _e(t, e, n) {
                e = Ce(e).filter(Boolean), yt.ClassList && e.length && B(t).forEach(function(t) {
                    var i = t.classList;
                    yt.Multiple ? i[n].apply(i, e) : e.forEach(function(t) { return i[n](t) })
                })
            }

            function Ce(t) { return t.reduce(function(t, e) { return t.concat.call(t, S(e) && v(e, " ") ? e.trim().split(" ") : e) }, []) }
            var ke = { "animation-iteration-count": !0, "column-count": !0, "fill-opacity": !0, "flex-grow": !0, "flex-shrink": !0, "font-weight": !0, "line-height": !0, opacity: !0, order: !0, orphans: !0, widows: !0, "z-index": !0, zoom: !0 };

            function xe(t, e, n) {
                return B(t).map(function(t) {
                    if (S(e)) {
                        if (e = Oe(e), A(n)) return Ie(t, e);
                        n || 0 === n ? t.style[e] = O(n) && !ke[e] ? n + "px" : n : t.style.removeProperty(e)
                    } else {
                        if (y(e)) { var i = Te(t); return e.reduce(function(t, e) { return t[e] = i[Oe(e)], t }, {}) }
                        b(e) && F(e, function(e, n) { return xe(t, n, e) })
                    }
                    return t
                })[0]
            }

            function Te(t, e) { return (t = D(t)).ownerDocument.defaultView.getComputedStyle(t, e) }

            function Ie(t, e, n) { return Te(t, n)[e] }
            var Ee = {};

            function Se(t) {
                if (!(t in Ee)) {
                    var e = oe(st, lt.createElement("div"));
                    ge(e, "var-" + t);
                    try { Ee[t] = Ie(e, "content", ":before").replace(/^["'](.*)["']$/, "$1"), Ee[t] = JSON.parse(Ee[t]) } catch (t) {}
                    st.removeChild(e)
                }
                return Ee[t]
            }
            var Me = {};

            function Oe(t) {
                var e = Me[t];
                return e || (e = Me[t] = function(t) {
                    if ((t = o(t)) in Pe) return t;
                    for (var e, n = Ae.length; n--;)
                        if ((e = "-" + Ae[n] + "-" + t) in Pe) return e
                }(t) || t), e
            }
            var Ae = ["webkit", "moz", "ms"],
                Pe = lt.createElement("_").style;

            function Le(t, e, n, i) {
                return void 0 === n && (n = 400), void 0 === i && (i = "linear"), J.all(B(t).map(function(t) {
                    return new J(function(o, r) {
                        for (var l in e) { var s = xe(t, l); "" === s && xe(t, l, s) }
                        var a = setTimeout(function() { return Gt(t, "transitionend") }, n);
                        zt(t, "transitionend transitioncanceled", function(e) {
                            var n = e.type;
                            clearTimeout(a), me(t, "uk-transition"), xe(t, { "transition-property": "", "transition-duration": "", "transition-timing-function": "" }), "transitioncanceled" === n ? r() : o()
                        }, !1, function(e) { return t === e.target }), ge(t, "uk-transition"), xe(t, $({ "transition-property": Object.keys(e).map(Oe).join(","), "transition-duration": n + "ms", "transition-timing-function": i }, e))
                    })
                }))
            }
            var Ve = { start: Le, stop: function(t) { return Gt(t, "transitionend"), J.resolve() }, cancel: function(t) { Gt(t, "transitioncanceled") }, inProgress: function(t) { return we(t, "uk-transition") } },
                De = "uk-animation-",
                Ne = "uk-cancel-animation";

            function Be(t, e, n, i, o) {
                var r = arguments;
                return void 0 === n && (n = 200), J.all(B(t).map(function(t) {
                    return new J(function(l, s) {
                        if (we(t, Ne)) requestAnimationFrame(function() { return J.resolve().then(function() { return Be.apply(void 0, r).then(l, s) }) });
                        else {
                            var a = e + " " + De + (o ? "leave" : "enter");
                            d(e, De) && (i && (a += " uk-transform-origin-" + i), o && (a += " " + De + "reverse")), u(), zt(t, "animationend animationcancel", function(e) { var n = !1; "animationcancel" === e.type ? (s(), u()) : (l(), J.resolve().then(function() { n = !0, u() })), requestAnimationFrame(function() { n || (ge(t, Ne), requestAnimationFrame(function() { return me(t, Ne) })) }) }, !1, function(e) { return t === e.target }), xe(t, "animationDuration", n + "ms"), ge(t, a)
                        }

                        function u() { xe(t, "animationDuration", ""), ve(t, De + "\\S*") }
                    })
                }))
            }
            var je = new RegExp(De + "(enter|leave)"),
                Re = { in: function(t, e, n, i) { return Be(t, e, n, i, !1) }, out: function(t, e, n, i) { return Be(t, e, n, i, !0) }, inProgress: function(t) { return je.test(W(t, "class")) }, cancel: function(t) { Gt(t, "animationcancel") } };

            function Ue(t, e) { return S(t) ? Fe(t) ? D(fe(t)) : _t(t, e) : D(t) }

            function $e(t, e) { return S(t) ? Fe(t) ? B(fe(t)) : Ct(t, e) : B(t) }

            function Fe(t) { return "<" === t[0] || t.match(/^\s*</) }
            var He = { width: ["x", "left", "right"], height: ["y", "top", "bottom"] };

            function ze(t, e, n, i, o, r, l, s) {
                n = Je(n), i = Je(i);
                var a = { element: n, target: i };
                if (!t || !e) return a;
                var u = Ze(t),
                    c = Ze(e),
                    d = c;
                return Xe(d, n, u, -1), Xe(d, i, c, 1), o = tn(o, u.width, u.height), r = tn(r, c.width, c.height), o.x += r.x, o.y += r.y, d.left += o.x, d.top += o.y, s = Ze(s || on(t)), l && F(He, function(t, e) {
                    var r = t[0],
                        h = t[1],
                        p = t[2];
                    if (!0 === l || v(l, r)) {
                        var f = n[r] === h ? -u[e] : n[r] === p ? u[e] : 0,
                            g = i[r] === h ? c[e] : i[r] === p ? -c[e] : 0;
                        if (d[h] < s[h] || d[h] + u[e] > s[p]) {
                            var m = u[e] / 2,
                                y = "center" === i[r] ? -c[e] / 2 : 0;
                            "center" === n[r] && (w(m, y) || w(-m, -y)) || w(f, g)
                        }
                    }

                    function w(t, n) { var i = d[h] + t + n - 2 * o[r]; if (i >= s[h] && i + u[e] <= s[p]) return d[h] = i, ["element", "target"].forEach(function(n) { a[n][r] = t ? a[n][r] === He[e][1] ? He[e][2] : He[e][1] : a[n][r] }), !0 }
                }), Ge(t, d), a
            }

            function Ge(t, e) {
                if (t = D(t), !e) return Ze(t);
                var n = Ge(t),
                    i = xe(t, "position");
                ["left", "top"].forEach(function(o) {
                    if (o in e) {
                        var r = xe(t, o);
                        t.style[o] = e[o] - n[o] + V("absolute" === i && "auto" === r ? qe(t)[o] : r) + "px"
                    }
                })
            }

            function Ze(t) {
                var e = on(t = D(t)),
                    n = e.pageYOffset,
                    i = e.pageXOffset;
                if (C(t)) {
                    var o = t.innerHeight,
                        r = t.innerWidth;
                    return { top: n, left: i, height: o, width: r, bottom: n + o, right: i + r }
                }
                var l = !1;
                Bt(t) || (l = t.style.display, t.style.display = "block");
                var s = t.getBoundingClientRect();
                return !1 !== l && (t.style.display = l), { height: s.height, width: s.width, top: s.top + n, left: s.left + i, bottom: s.bottom + n, right: s.right + i }
            }

            function qe(t) {
                var e = function(t) { for (var e = D(t).offsetParent; e && "static" === xe(e, "position");) e = e.offsetParent; return e || ln(t) }(t = D(t)),
                    n = e === ln(t) ? { top: 0, left: 0 } : Ge(e),
                    i = ["top", "left"].reduce(function(i, o) { var r = a(o); return i[o] -= n[o] + (V(xe(t, "margin" + r)) || 0) + (V(xe(e, "border" + r + "Width")) || 0), i }, Ge(t));
                return { top: i.top, left: i.left }
            }
            var We = Ye("height"),
                Qe = Ye("width");

            function Ye(t) {
                var e = a(t);
                return function(n, i) {
                    if (n = D(n), A(i)) { if (C(n)) return n["inner" + e]; if (k(n)) { var o = n.documentElement; return Math.max(o.offsetHeight, o.scrollHeight) } return i = "auto" === (i = xe(n, t)) ? n["offset" + e] : V(i) || 0, Ke(t, n, i) }
                    xe(n, t, i || 0 === i ? Ke(t, n, i) + "px" : "")
                }
            }

            function Ke(t, e, n) { return "border-box" === xe(e, "boxSizing") ? He[t].slice(1).map(a).reduce(function(t, n) { return t - V(xe(e, "padding" + n)) - V(xe(e, "border" + n + "Width")) }, n) : n }

            function Xe(t, e, n, i) {
                F(He, function(o, r) {
                    var l = o[0],
                        s = o[1];
                    e[l] === o[2] ? t[s] += n[r] * i : "center" === e[l] && (t[s] += n[r] * i / 2)
                })
            }

            function Je(t) {
                var e = /left|center|right/,
                    n = /top|center|bottom/;
                return 1 === (t = (t || "").split(" ")).length && (t = e.test(t[0]) ? t.concat(["center"]) : n.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), { x: e.test(t[0]) ? t[0] : "center", y: n.test(t[1]) ? t[1] : "center" }
            }

            function tn(t, e, n) {
                var i = (t || "").split(" "),
                    o = i[0],
                    r = i[1];
                return { x: o ? V(o) * (p(o, "%") ? e / 100 : 1) : 0, y: r ? V(r) * (p(r, "%") ? n / 100 : 1) : 0 }
            }

            function en(t) {
                switch (t) {
                    case "left":
                        return "right";
                    case "right":
                        return "left";
                    case "top":
                        return "bottom";
                    case "bottom":
                        return "top";
                    default:
                        return t
                }
            }

            function nn(t, e, n) { void 0 === e && (e = 0), void 0 === n && (n = 0); var i = on(t = D(t)); return G(t.getBoundingClientRect(), { top: e, left: n, bottom: e + We(i), right: n + Qe(i) }) }

            function on(t) { return C(t) ? t : rn(t).defaultView }

            function rn(t) { return D(t).ownerDocument }

            function ln(t) { return rn(t).documentElement }
            var sn = { reads: [], writes: [], read: function(t) { return this.reads.push(t), an(), t }, write: function(t) { return this.writes.push(t), an(), t }, clear: function(t) { return cn(this.reads, t) || cn(this.writes, t) }, flush: function() { un(this.reads), un(this.writes.splice(0, this.writes.length)), this.scheduled = !1, (this.reads.length || this.writes.length) && an() } };

            function an() { sn.scheduled || (sn.scheduled = !0, requestAnimationFrame(sn.flush.bind(sn))) }

            function un(t) { for (var e; e = t.shift();) e() }

            function cn(t, e) { var n = t.indexOf(e); return !!~n && !!t.splice(n, 1) }

            function dn() {}

            function hn(t, e) { return (e.y - t.y) / (e.x - t.x) }
            dn.prototype = {
                positions: [],
                position: null,
                init: function() {
                    var t = this;
                    this.positions = [], this.position = null;
                    var e = !1;
                    this.unbind = Ft(lt, "mousemove", function(n) {
                        e || (setTimeout(function() {
                            var i = Date.now(),
                                o = t.positions.length;
                            o && i - t.positions[o - 1].time > 100 && t.positions.splice(0, o), t.positions.push({ time: i, x: n.pageX, y: n.pageY }), t.positions.length > 5 && t.positions.shift(), e = !1
                        }, 5), e = !0)
                    })
                },
                cancel: function() { this.unbind && this.unbind() },
                movesTo: function(t) {
                    if (this.positions.length < 2) return !1;
                    var e = Ge(t),
                        n = this.positions[this.positions.length - 1],
                        i = this.positions[0];
                    if (e.left <= n.x && n.x <= e.right && e.top <= n.y && n.y <= e.bottom) return !1;
                    var o = [
                        [{ x: e.left, y: e.top }, { x: e.right, y: e.bottom }],
                        [{ x: e.right, y: e.top }, { x: e.left, y: e.bottom }]
                    ];
                    return e.right <= n.x || (e.left >= n.x ? (o[0].reverse(), o[1].reverse()) : e.bottom <= n.y ? o[0].reverse() : e.top >= n.y && o[1].reverse()), !!o.reduce(function(t, e) { return t + (hn(i, e[0]) < hn(n, e[0]) && hn(i, e[1]) > hn(n, e[1])) }, 0)
                }
            };
            var pn = {};
            pn.args = pn.events = pn.init = pn.created = pn.beforeConnect = pn.connected = pn.ready = pn.beforeDisconnect = pn.disconnected = pn.destroy = function(t, e) { return t = t && !y(t) ? [t] : t, e ? t ? t.concat(e) : y(e) ? e : [e] : t }, pn.update = function(t, e) { return pn.args(t, w(e) ? { read: e } : e) }, pn.props = function(t, e) { return y(e) && (e = e.reduce(function(t, e) { return t[e] = String, t }, {})), pn.methods(t, e) }, pn.computed = pn.defaults = pn.methods = function(t, e) { return e ? t ? $({}, t, e) : e : t };
            var fn = function(t, e) { return A(e) ? t : e };

            function gn(t, e) {
                var i = {};
                if (e.mixins)
                    for (var o = 0, r = e.mixins.length; o < r; o++) t = gn(t, e.mixins[o]);
                for (var l in t) a(l);
                for (var s in e) n(t, s) || a(s);

                function a(n) { i[n] = (pn[n] || fn)(t[n], e[n]) }
                return i
            }
            var mn = 0,
                vn = function(t) { this.id = ++mn, this.el = D(t) };

            function yn(t, e) { try { t.contentWindow.postMessage(JSON.stringify($({ event: "command" }, e)), "*") } catch (t) {} }
            vn.prototype.isVideo = function() { return this.isYoutube() || this.isVimeo() || this.isHTML5() }, vn.prototype.isHTML5 = function() { return "VIDEO" === this.el.tagName }, vn.prototype.isIFrame = function() { return "IFRAME" === this.el.tagName }, vn.prototype.isYoutube = function() { return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/) }, vn.prototype.isVimeo = function() { return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/) }, vn.prototype.enableApi = function() {
                var t = this;
                if (this.ready) return this.ready;
                var e, n = this.isYoutube(),
                    i = this.isVimeo();
                return n || i ? this.ready = new J(function(o) {
                    var r;
                    zt(t.el, "load", function() {
                        if (n) {
                            var i = function() { return yn(t.el, { event: "listening", id: t.id }) };
                            e = setInterval(i, 100), i()
                        }
                    }), (r = function(e) { return n && e.id === t.id && "onReady" === e.event || i && Number(e.player_id) === t.id }, new J(function(t) { zt(rt, "message", function(e, n) { return t(n) }, !1, function(t) { var e = t.data; if (e && S(e)) { try { e = JSON.parse(e) } catch (t) { return } return e && r(e) } }) })).then(function() { o(), e && clearInterval(e) }), W(t.el, "src", t.el.src + (v(t.el.src, "?") ? "&" : "?") + (n ? "enablejsapi=1" : "api=1&player_id=" + mn))
                }) : J.resolve()
            }, vn.prototype.play = function() {
                var t = this;
                if (this.isVideo())
                    if (this.isIFrame()) this.enableApi().then(function() { return yn(t.el, { func: "playVideo", method: "play" }) });
                    else if (this.isHTML5()) try { this.el.play() } catch (t) {}
            }, vn.prototype.pause = function() {
                var t = this;
                this.isVideo() && (this.isIFrame() ? this.enableApi().then(function() { return yn(t.el, { func: "pauseVideo", method: "pause" }) }) : this.isHTML5() && this.el.pause())
            }, vn.prototype.mute = function() {
                var t = this;
                this.isVideo() && (this.isIFrame() ? this.enableApi().then(function() { return yn(t.el, { func: "mute", method: "setVolume", value: 0 }) }) : this.isHTML5() && (this.el.muted = !0, W(this.el, "muted", "")))
            };
            var wn, bn, _n, Cn, kn = {};

            function xn() { wn && clearTimeout(wn), bn && clearTimeout(bn), _n && clearTimeout(_n), wn = bn = _n = null, kn = {} }
            Jt(function() {
                Ft(lt, "click", function() { return Cn = !0 }, !0), Ft(lt, pt, function(t) {
                    var e = t.target,
                        n = En(t),
                        i = n.x,
                        o = n.y,
                        r = Date.now(),
                        l = Sn(t.type);
                    kn.type && kn.type !== l || (kn.el = "tagName" in e ? e : e.parentNode, wn && clearTimeout(wn), kn.x1 = i, kn.y1 = o, kn.last && r - kn.last <= 250 && (kn = {}), kn.type = l, kn.last = r, Cn = t.button > 0)
                }), Ft(lt, ft, function(t) {
                    if (!t.defaultPrevented) {
                        var e = En(t),
                            n = e.y;
                        kn.x2 = e.x, kn.y2 = n
                    }
                }), Ft(lt, gt, function(t) {
                    var e = t.type,
                        n = t.target;
                    kn.type === Sn(e) && (kn.x2 && Math.abs(kn.x1 - kn.x2) > 30 || kn.y2 && Math.abs(kn.y1 - kn.y2) > 30 ? bn = setTimeout(function() {
                        var t, e, n, i, o;
                        kn.el && (Gt(kn.el, "swipe"), Gt(kn.el, "swipe" + (e = (t = kn).x1, n = t.x2, i = t.y1, o = t.y2, Math.abs(e - n) >= Math.abs(i - o) ? e - n > 0 ? "Left" : "Right" : i - o > 0 ? "Up" : "Down"))), kn = {}
                    }) : "last" in kn ? (_n = setTimeout(function() { return Gt(kn.el, "tap") }), kn.el && "mouseup" !== e && $t(n, kn.el) && (wn = setTimeout(function() { wn = null, kn.el && !Cn && Gt(kn.el, "click"), kn = {} }, 350))) : kn = {})
                }), Ft(lt, "touchcancel", xn), Ft(rt, "scroll", xn)
            });
            var Tn = !1;

            function In(t) { return Tn || "touch" === t.pointerType }

            function En(t) {
                var e = t.touches,
                    n = t.changedTouches,
                    i = e && e[0] || n && n[0] || t;
                return { x: i.pageX, y: i.pageY }
            }

            function Sn(t) { return t.slice(0, 5) }
            Ft(lt, "touchstart", function() { return Tn = !0 }, !0), Ft(lt, "click", function() { Tn = !1 }), Ft(lt, "touchcancel", function() { return Tn = !1 }, !0);
            var Mn = Object.freeze({
                ajax: Kt,
                transition: Le,
                Transition: Ve,
                animate: Be,
                Animation: Re,
                attr: W,
                hasAttr: Q,
                removeAttr: Y,
                filterAttr: K,
                data: X,
                addClass: ge,
                removeClass: me,
                removeClasses: ve,
                replaceClass: ye,
                hasClass: we,
                toggleClass: be,
                $: Ue,
                $$: $e,
                positionAt: ze,
                offset: Ge,
                position: qe,
                height: We,
                width: Qe,
                flipPosition: en,
                isInView: nn,
                scrolledOver: function(t) {
                    var e = on(t = D(t)),
                        n = rn(t),
                        i = t.offsetHeight,
                        o = function(t) {
                            var e = 0;
                            do { e += t.offsetTop } while (t = t.offsetParent);
                            return e
                        }(t),
                        r = We(e),
                        l = r + Math.min(0, o - r),
                        s = Math.max(0, r - (We(n) - (o + i)));
                    return H((l + e.pageYOffset - o) / ((l + (i - (s < r ? s : 0))) / 100) / 100)
                },
                isReady: Xt,
                ready: Jt,
                index: te,
                getIndex: ee,
                empty: ne,
                html: ie,
                prepend: function(t, e) { return (t = D(t)).hasChildNodes() ? se(e, function(e) { return t.insertBefore(e, t.firstChild) }) : oe(t, e) },
                append: oe,
                before: re,
                after: le,
                remove: ae,
                wrapAll: ue,
                wrapInner: ce,
                unwrap: de,
                fragment: fe,
                win: rt,
                doc: lt,
                docEl: st,
                isRtl: at,
                Observer: ut,
                hasTouch: ht,
                pointerDown: pt,
                pointerMove: ft,
                pointerUp: gt,
                pointerEnter: mt,
                pointerLeave: vt,
                getImage: function(t) {
                    return new J(function(e, n) {
                        var i = new Image;
                        i.onerror = n, i.onload = function() { return e(i) }, i.src = t
                    })
                },
                supports: yt,
                on: Ft,
                off: Ht,
                once: zt,
                trigger: Gt,
                createEvent: Zt,
                toEventTargets: Yt,
                preventClick: function() { var t = setTimeout(zt(document, "click", function(e) { e.preventDefault(), e.stopImmediatePropagation(), clearTimeout(t) }, !0)) },
                fastdom: sn,
                isVoidElement: Nt,
                isVisible: Bt,
                selInput: jt,
                isInput: Rt,
                filter: Ut,
                within: $t,
                bind: t,
                hasOwn: n,
                hyphenate: o,
                camelize: l,
                ucfirst: a,
                startsWith: d,
                endsWith: p,
                includes: v,
                isArray: y,
                isFunction: w,
                isObject: b,
                isPlainObject: _,
                isWindow: C,
                isDocument: k,
                isJQuery: x,
                isNode: T,
                isNodeCollection: I,
                isBoolean: E,
                isString: S,
                isNumber: M,
                isNumeric: O,
                isUndefined: A,
                toBoolean: P,
                toNumber: L,
                toFloat: V,
                toNode: D,
                toNodes: B,
                toList: j,
                toMs: R,
                swap: U,
                assign: $,
                each: F,
                sortBy: function(t, e) { return t.sort(function(t, n) { return t[e] > n[e] ? 1 : n[e] > t[e] ? -1 : 0 }) },
                clamp: H,
                noop: z,
                intersectRect: G,
                pointInRect: Z,
                Dimensions: q,
                MouseTracker: dn,
                mergeOptions: gn,
                Player: vn,
                Promise: J,
                Deferred: function() {
                    var t = this;
                    this.promise = new J(function(e, n) { t.reject = n, t.resolve = e })
                },
                query: wt,
                queryAll: bt,
                find: _t,
                findAll: Ct,
                matches: Mt,
                closest: At,
                parents: Pt,
                escape: Vt,
                css: xe,
                getStyles: Te,
                getStyle: Ie,
                getCssVar: Se,
                propName: Oe,
                isTouch: In,
                getPos: En
            });

            function On(t) { return !(!d(t, "uk-") && !d(t, "data-uk-")) && l(t.replace("data-uk-", "").replace("uk-", "")) }
            var An, Pn = function(t) { this._init(t) };
            Pn.util = Mn, Pn.data = "__uikit__", Pn.prefix = "uk-", Pn.options = {}, Pn.instances = {}, Pn.elements = [],
                function(t) {
                    var e, n = t.data;

                    function i(t, e) {
                        if (t)
                            for (var n in t) t[n]._isReady && t[n]._callUpdate(e)
                    }
                    t.use = function(t) { if (!t.installed) return t.call(null, this), t.installed = !0, this }, t.mixin = function(e, n) { n = (S(n) ? t.components[n] : n) || this, (e = gn({}, e)).mixins = n.options.mixins, delete n.options.mixins, n.options = gn(e, n.options) }, t.extend = function(t) { t = t || {}; var e = function(t) { this._init(t) }; return (e.prototype = Object.create(this.prototype)).constructor = e, e.options = gn(this.options, t), e.super = this, e.extend = this.extend, e }, t.update = function(e, o, r) {
                        if (void 0 === r && (r = !1), e = Zt(e || "update"), o)
                            if (o = D(o), r)
                                do { i(o[n], e), o = o.parentNode } while (o);
                            else ! function t(e, n) {
                                if (1 === e.nodeType)
                                    for (n(e), e = e.firstElementChild; e;) t(e, n), e = e.nextElementSibling
                            }(o, function(t) { return i(t[n], e) });
                        else i(t.instances, e)
                    }, Object.defineProperty(t, "container", { get: function() { return e || lt.body }, set: function(t) { e = Ue(t) } })
                }(Pn), (An = Pn).prototype._callHook = function(t) {
                    var e = this,
                        n = this.$options[t];
                    n && n.forEach(function(t) { return t.call(e) })
                }, An.prototype._callConnected = function() {
                    var t = this;
                    this._connected || (v(An.elements, this.$options.el) || An.elements.push(this.$options.el), An.instances[this._uid] = this, this._data = {}, this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObserver(), this._callHook("connected"), this._isReady || Jt(function() { return t._callReady() }), this._callUpdate())
                }, An.prototype._callDisconnected = function() { if (this._connected) { this._callHook("beforeDisconnect"), this._observer && (this._observer.disconnect(), this._observer = null); var t = An.elements.indexOf(this.$options.el);~t && An.elements.splice(t, 1), delete An.instances[this._uid], this._unbindEvents(), this._callHook("disconnected"), this._connected = !1 } }, An.prototype._callReady = function() { this._isReady || (this._isReady = !0, this._callHook("ready"), this._resetComputeds(), this._callUpdate()) }, An.prototype._callUpdate = function(t) {
                    var e = this,
                        n = (t = Zt(t || "update")).type;
                    v(["update", "load", "resize"], n) && this._resetComputeds();
                    var i = this.$options.update,
                        o = this._frames,
                        r = o.reads,
                        l = o.writes;
                    i && i.forEach(function(i, o) {
                        var s = i.read,
                            a = i.write;
                        ("update" === n || v(i.events, n)) && (s && !v(sn.reads, r[o]) && (r[o] = sn.read(function() { var n = s.call(e, e._data, t);!1 === n && a ? (sn.clear(l[o]), delete l[o]) : _(n) && $(e._data, n), delete r[o] })), a && !v(sn.writes, l[o]) && (l[o] = sn.write(function() { a.call(e, e._data, t), delete l[o] })))
                    })
                },
                function(e) {
                    var i = 0;

                    function r(t, e) {
                        var n = {},
                            i = t.args;
                        void 0 === i && (i = []);
                        var r = t.props;
                        void 0 === r && (r = {});
                        var s = t.el;
                        if (!r) return n;
                        for (var a in r) {
                            var u = o(a);
                            if (Q(s, u)) {
                                var h = c(r[a], W(s, u), s);
                                if ("target" === u && (!h || d(h, "_"))) continue;
                                n[a] = h
                            }
                        }
                        var p = function(t, e) {
                            var n;
                            void 0 === e && (e = []);
                            try {
                                return t ? d(t, "{") ? JSON.parse(t) : e.length && !v(t, ":") ? ((n = {})[e[0]] = t, n) : t.split(";").reduce(function(t, e) {
                                    var n = e.split(/:(.+)/),
                                        i = n[0],
                                        o = n[1];
                                    return i && o && (t[i.trim()] = o.trim()), t
                                }, {}) : {}
                            } catch (t) { return {} }
                        }(X(s, e), i);
                        for (var f in p) {
                            var g = l(f);
                            void 0 !== r[g] && (n[g] = c(r[g], p[f], s))
                        }
                        return n
                    }

                    function s(t, e, i) {
                        Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: function() {
                                var o = t._computeds,
                                    r = t.$props,
                                    l = t.$el;
                                return n(o, e) || (o[e] = i.call(t, r, l)), o[e]
                            },
                            set: function(n) { t._computeds[e] = n }
                        })
                    }

                    function a(e, n, i) {
                        _(n) || (n = { name: i, handler: n });
                        var o, r = n.name,
                            l = n.el,
                            s = n.handler,
                            u = n.capture,
                            c = n.delegate,
                            d = n.filter,
                            h = n.self;
                        l = w(l) ? l.call(e) : l || e.$el, y(l) ? l.forEach(function(t) { return a(e, $({}, n, { el: t }), i) }) : !l || d && !d.call(e) || (o = S(s) ? e[s] : t(s, e), s = function(t) { return y(t.detail) ? o.apply(void 0, [t].concat(t.detail)) : o(t) }, h && (s = function(t) { return function(e) { if (e.target === e.currentTarget || e.target === e.current) return t.call(null, e) } }(s)), e._events.push(Ft(l, r, c ? S(c) ? c : c.call(e) : null, s, u)))
                    }

                    function u(t, e) { return t.every(function(t) { return !t || !n(t, e) }) }

                    function c(t, e, n) {
                        return t === Boolean ? P(e) : t === Number ? L(e) : "query" === t ? wt(e, n) : "list" === t ? j(e) : "media" === t ? function(t) {
                            if (S(t))
                                if ("@" === t[0]) t = V(Se("media-" + t.substr(1)));
                                else if (isNaN(t)) return t;
                            return !(!t || isNaN(t)) && "(min-width: " + t + "px)"
                        }(e) : t ? t(e) : e
                    }
                    e.prototype.props = {}, e.prototype._init = function(t) { t = this.$options = gn(this.constructor.options, t = t || {}), this.$el = null, this.$name = e.prefix + o(this.$options.name), this.$props = {}, this._frames = { reads: {}, writes: {} }, this._events = [], this._uid = i++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), t.el && this.$mount(t.el) }, e.prototype._initData = function() {
                        var t = this.$options,
                            e = t.defaults,
                            i = t.data;
                        void 0 === i && (i = {});
                        var o = t.args;
                        void 0 === o && (o = []);
                        var r = t.props;
                        void 0 === r && (r = {});
                        var l = t.el;
                        for (var s in o.length && y(i) && (i = i.slice(0, o.length).reduce(function(t, e, n) { return _(e) ? $(t, e) : t[o[n]] = e, t }, {})), $({}, e, r)) this.$props[s] = this[s] = n(i, s) && !A(i[s]) ? c(r[s], i[s], l) : e ? e[s] && y(e[s]) ? e[s].concat() : e[s] : null
                    }, e.prototype._initMethods = function() {
                        var e = this.$options.methods;
                        if (e)
                            for (var n in e) this[n] = t(e[n], this)
                    }, e.prototype._initComputeds = function() {
                        var t = this.$options.computed;
                        if (this._resetComputeds(), t)
                            for (var e in t) s(this, e, t[e])
                    }, e.prototype._resetComputeds = function() { this._computeds = {} }, e.prototype._initProps = function(t) { var e; for (e in this._resetComputeds(), t = t || r(this.$options, this.$name)) A(t[e]) || (this.$props[e] = t[e]); var n = [this.$options.computed, this.$options.methods]; for (e in this.$props) e in t && u(n, e) && (this[e] = this.$props[e]) }, e.prototype._initEvents = function() {
                        var t = this,
                            e = this.$options.events;
                        e && e.forEach(function(e) {
                            if (n(e, "handler")) a(t, e);
                            else
                                for (var i in e) a(t, e[i], i)
                        })
                    }, e.prototype._unbindEvents = function() { this._events.forEach(function(t) { return t() }), this._events = [] }, e.prototype._initObserver = function() {
                        var t = this,
                            e = this.$options,
                            n = e.attrs,
                            i = e.props,
                            l = e.el;
                        !this._observer && i && n && ut && (n = y(n) ? n : Object.keys(i).map(function(t) { return o(t) }), this._observer = new ut(function() {
                            var e = r(t.$options, t.$name);
                            n.some(function(n) { return !A(e[n]) && e[n] !== t.$props[n] }) && t.$reset(e)
                        }), this._observer.observe(l, { attributes: !0, attributeFilter: n.concat([this.$name, "data-" + this.$name]) }))
                    }
                }(Pn),
                function(t) {
                    var e = t.data;
                    t.prototype.$mount = function(t) {
                        var n = this.$options.name;
                        t[e] || (t[e] = {}), t[e][n] || (t[e][n] = this, this.$el = this.$options.el = this.$options.el || t, this._initProps(), this._callHook("init"), $t(t, st) && this._callConnected())
                    }, t.prototype.$emit = function(t) { this._callUpdate(t) }, t.prototype.$update = function(e, n) { t.update(e, this.$options.el, n) }, t.prototype.$reset = function(t) { this._callDisconnected(), this._initProps(t), this._callConnected() }, t.prototype.$destroy = function(t) {
                        void 0 === t && (t = !1);
                        var n = this.$options,
                            i = n.el,
                            o = n.name;
                        i && this._callDisconnected(), this._callHook("destroy"), i && i[e] && (delete i[e][o], Object.keys(i[e]).length || delete i[e], t && ae(this.$el))
                    }
                }(Pn),
                function(t) {
                    var e = t.data;
                    t.components = {}, t.component = function(e, n) {
                        var i = l(e);
                        if (_(n)) n.name = i, n = t.extend(n);
                        else {
                            if (A(n)) return t.components[i];
                            n.options.name = i
                        }
                        return t.components[i] = n, t[i] = function(e, n) {
                            for (var o = arguments.length, r = Array(o); o--;) r[o] = arguments[o];
                            return _(e) ? new t.components[i]({ data: e }) : t.components[i].options.functional ? new t.components[i]({ data: [].concat(r) }) : e && e.nodeType ? l(e) : $e(e).map(l)[0];

                            function l(e) { var o = t.getComponent(e, i); return o && n && o.$reset(n), o || new t.components[i]({ el: e, data: n || {} }) }
                        }, t._initialized && !n.options.functional && sn.read(function() { return t[i]("[uk-" + e + "],[data-uk-" + e + "]") }), t.components[i]
                    }, t.getComponents = function(t) { return t && (t = x(t) ? t[0] : t) && t[e] || {} }, t.getComponent = function(e, n) { return t.getComponents(e)[n] }, t.connect = function(n) {
                        if (n[e])
                            for (var i in n[e]) n[e][i]._callConnected();
                        for (var o = 0; o < n.attributes.length; o++) {
                            var r = On(n.attributes[o].name);
                            r && r in t.components && t[r](n)
                        }
                    }, t.disconnect = function(t) { for (var n in t[e]) t[e][n]._callDisconnected() }
                }(Pn);
            var Ln, Vn, Dn = { init: function() { ge(this.$el, this.$name) } },
                Nn = { props: { container: Boolean }, defaults: { container: !0 }, computed: { container: function(t) { var e = t.container; return !0 === e && Pn.container || e && Ue(e) } } },
                Bn = {
                    props: { cls: Boolean, animation: "list", duration: Number, origin: String, transition: String, queued: Boolean },
                    defaults: { cls: !1, animation: [!1], duration: 200, origin: !1, transition: "linear", queued: !1, initProps: { overflow: "", height: "", paddingTop: "", paddingBottom: "", marginTop: "", marginBottom: "" }, hideProps: { overflow: "hidden", height: 0, paddingTop: 0, paddingBottom: 0, marginTop: 0, marginBottom: 0 } },
                    computed: { hasAnimation: function(t) { return !!t.animation[0] }, hasTransition: function(t) { return this.hasAnimation && !0 === t.animation[0] } },
                    methods: {
                        toggleElement: function(t, e, n) {
                            var i = this;
                            return new J(function(o) {
                                var r, l = function(t) { return J.all(t.map(function(t) { return i._toggleElement(t, e, n) })) },
                                    s = (t = B(t)).filter(function(t) { return i.isToggled(t) }),
                                    a = t.filter(function(t) { return !v(s, t) });
                                if (i.queued && A(n) && A(e) && i.hasAnimation && !(t.length < 2)) {
                                    var u = lt.body,
                                        c = u.scrollTop,
                                        d = s[0],
                                        h = Re.inProgress(d) && we(d, "uk-animation-leave") || Ve.inProgress(d) && "0px" === d.style.height;
                                    r = l(s), h || (r = r.then(function() { var t = l(a); return u.scrollTop = c, t }))
                                } else r = l(a.concat(s));
                                r.then(o, z)
                            })
                        },
                        toggleNow: function(t, e) { var n = this; return new J(function(i) { return J.all(B(t).map(function(t) { return n._toggleElement(t, e, !1) })).then(i, z) }) },
                        isToggled: function(t) { var e = B(t || this.$el); return this.cls ? we(e, this.cls.split(" ")[0]) : !Q(e, "hidden") },
                        updateAria: function(t) {!1 === this.cls && W(t, "aria-hidden", !this.isToggled(t)) },
                        _toggleElement: function(t, e, n) { var i = this; if (e = E(e) ? e : Re.inProgress(t) ? we(t, "uk-animation-leave") : Ve.inProgress(t) ? "0px" === t.style.height : !this.isToggled(t), !Gt(t, "before" + (e ? "show" : "hide"), [this])) return J.reject(); var o = (!1 !== n && this.hasAnimation ? this.hasTransition ? this._toggleHeight : this._toggleAnimation : this._toggleImmediate)(t, e); return Gt(t, e ? "show" : "hide", [this]), o.then(function() { Gt(t, e ? "shown" : "hidden", [i]), Pn.update(null, t) }) },
                        _toggle: function(t, e) { t && (this.cls ? be(t, this.cls, v(this.cls, " ") ? void 0 : e) : W(t, "hidden", e ? null : ""), $e("[autofocus]", t).some(function(t) { return Bt(t) && (t.focus() || !0) }), this.updateAria(t), Pn.update(null, t)) },
                        _toggleImmediate: function(t, e) { return this._toggle(t, e), J.resolve() },
                        _toggleHeight: function(t, e) {
                            var n = this,
                                i = Ve.inProgress(t),
                                o = t.hasChildNodes ? V(xe(t.firstElementChild, "marginTop")) + V(xe(t.lastElementChild, "marginBottom")) : 0,
                                r = Bt(t) ? We(t) + (i ? 0 : o) : 0;
                            Ve.cancel(t), this.isToggled(t) || this._toggle(t, !0), We(t, ""), sn.flush();
                            var l = We(t) + (i ? 0 : o);
                            return We(t, r), (e ? Ve.start(t, $({}, this.initProps, { overflow: "hidden", height: l }), Math.round(this.duration * (1 - r / l)), this.transition) : Ve.start(t, this.hideProps, Math.round(this.duration * (r / l)), this.transition).then(function() { return n._toggle(t, !1) })).then(function() { return xe(t, n.initProps) })
                        },
                        _toggleAnimation: function(t, e) { var n = this; return Re.cancel(t), e ? (this._toggle(t, !0), Re.in(t, this.animation[0], this.duration, this.origin)) : Re.out(t, this.animation[1] || this.animation[0], this.duration, this.origin).then(function() { return n._toggle(t, !1) }) }
                    }
                },
                jn = {
                    mixins: [Dn, Nn, Bn],
                    props: { clsPanel: String, selClose: String, escClose: Boolean, bgClose: Boolean, stack: Boolean },
                    defaults: { cls: "uk-open", escClose: !0, bgClose: !0, overlay: !0, stack: !1 },
                    computed: { panel: function(t, e) { return Ue("." + t.clsPanel, e) }, transitionElement: function() { return this.panel }, transitionDuration: function() { return R(xe(this.transitionElement, "transitionDuration")) } },
                    events: [{ name: "click", delegate: function() { return this.selClose }, handler: function(t) { t.preventDefault(), this.hide() } }, { name: "toggle", self: !0, handler: function(t) { t.defaultPrevented || (t.preventDefault(), this.toggle()) } }, {
                        name: "beforeshow",
                        self: !0,
                        handler: function(t) {
                            var e = Ln && Ln !== this && Ln;
                            if (Ln = this, e) {
                                if (!this.stack) return e.hide().then(this.show), void t.preventDefault();
                                this.prev = e
                            }
                            Vn || (Vn = [Ft(st, "click", function(t) { Ln && Ln.bgClose && !t.defaultPrevented && !$t(t.target, Ln.panel || Ln.$el) && Ln.hide() }), Ft(lt, "keydown", function(t) { 27 === t.keyCode && Ln && Ln.escClose && (t.preventDefault(), Ln.hide()) })])
                        }
                    }, {
                        name: "beforehide",
                        self: !0,
                        handler: function() {
                            (Ln = Ln && Ln !== this && Ln || this.prev) || (Vn && Vn.forEach(function(t) { return t() }), Vn = null)
                        }
                    }, { name: "show", self: !0, handler: function() { we(st, this.clsPage) || (this.scrollbarWidth = Qe(rt) - st.offsetWidth, xe(lt.body, "overflowY", this.scrollbarWidth && this.overlay ? "scroll" : "")), ge(st, this.clsPage) } }, {
                        name: "hidden",
                        self: !0,
                        handler: function() {
                            for (var t, e = this.prev; e;) {
                                if (e.clsPage === this.clsPage) { t = !0; break }
                                e = e.prev
                            }
                            t || me(st, this.clsPage), !this.prev && xe(lt.body, "overflowY", "")
                        }
                    }],
                    methods: { toggle: function() { return this.isToggled() ? this.hide() : this.show() }, show: function() { if (!this.isToggled()) return this.container && this.$el.parentNode !== this.container && (oe(this.container, this.$el), this._callConnected()), this.toggleNow(this.$el, !0) }, hide: function() { if (this.isToggled()) return this.toggleNow(this.$el, !1) }, getActive: function() { return Ln }, _toggleImmediate: function(t, e) { var n = this; return new J(function(i) { return requestAnimationFrame(function() { n._toggle(t, e), n.transitionDuration ? zt(n.transitionElement, "transitionend", i, !1, function(t) { return t.target === n.transitionElement }) : i() }) }) } }
                },
                Rn = {
                    props: { pos: String, offset: null, flip: Boolean, clsPos: String },
                    defaults: { pos: "bottom-" + (at ? "right" : "left"), flip: !0, offset: !1, clsPos: "" },
                    computed: { pos: function(t) { var e = t.pos; return (e + (v(e, "-") ? "" : "-center")).split("-") }, dir: function() { return this.pos[0] }, align: function() { return this.pos[1] } },
                    methods: {
                        positionAt: function(t, e, n) {
                            var i;
                            ve(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"), xe(t, { top: "", left: "" });
                            var o = this.offset;
                            o = O(o) ? o : (i = Ue(o)) ? Ge(i)["x" === r ? "left" : "top"] - Ge(e)["x" === r ? "right" : "bottom"] : 0;
                            var r = this.getAxis(),
                                l = ze(t, e, "x" === r ? en(this.dir) + " " + this.align : this.align + " " + en(this.dir), "x" === r ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === r ? "" + ("left" === this.dir ? -o : o) : " " + ("top" === this.dir ? -o : o), null, this.flip, n).target,
                                s = l.x,
                                a = l.y;
                            this.dir = "x" === r ? s : a, this.align = "x" === r ? a : s, be(t, this.clsPos + "-" + this.dir + "-" + this.align, !1 === this.offset)
                        },
                        getAxis: function() { return "top" === this.dir || "bottom" === this.dir ? "y" : "x" }
                    }
                };

            function Un(t) {
                t.component("accordion", {
                    mixins: [Dn, Bn],
                    props: { targets: String, active: null, collapsible: Boolean, multiple: Boolean, toggle: String, content: String, transition: String },
                    defaults: { targets: "> *", active: !1, animation: [!0], collapsible: !0, multiple: !1, clsOpen: "uk-open", toggle: "> .uk-accordion-title", content: "> .uk-accordion-content", transition: "ease" },
                    computed: { items: function(t, e) { return $e(t.targets, e) } },
                    events: [{ name: "click", delegate: function() { return this.targets + " " + this.$props.toggle }, handler: function(t) { t.preventDefault(), this.toggle(te($e(this.targets + " " + this.$props.toggle, this.$el), t.current)) } }],
                    connected: function() {
                        if (!1 !== this.active) {
                            var t = this.items[Number(this.active)];
                            t && !we(t, this.clsOpen) && this.toggle(t, !1)
                        }
                    },
                    update: function() {
                        var t = this;
                        this.items.forEach(function(e) { return t._toggleImmediate(Ue(t.content, e), we(e, t.clsOpen)) });
                        var e = !this.collapsible && !we(this.items, this.clsOpen) && this.items[0];
                        e && this.toggle(e, !1)
                    },
                    methods: {
                        toggle: function(t, e) {
                            var n = this,
                                i = ee(t, this.items),
                                o = Ut(this.items, "." + this.clsOpen);
                            (t = this.items[i]) && [t].concat(!this.multiple && !v(o, t) && o || []).forEach(function(i) {
                                var r = i === t,
                                    l = r && !we(i, n.clsOpen);
                                if (l || !r || n.collapsible || !(o.length < 2)) {
                                    be(i, n.clsOpen, l);
                                    var s = i._wrapper ? i._wrapper.firstElementChild : Ue(n.content, i);
                                    i._wrapper || (i._wrapper = ue(s, "<div>"), W(i._wrapper, "hidden", l ? "" : null)), n._toggleImmediate(s, !0), n.toggleElement(i._wrapper, l, e).then(function() { we(i, n.clsOpen) === l && (l || n._toggleImmediate(s, !1), i._wrapper = null, de(s)) })
                                }
                            })
                        }
                    }
                })
            }

            function $n(t) {
                t.component("alert", {
                    attrs: !0,
                    mixins: [Dn, Bn],
                    args: "animation",
                    props: { close: String },
                    defaults: { animation: [!0], selClose: ".uk-alert-close", duration: 150, hideProps: $({ opacity: 0 }, Bn.defaults.hideProps) },
                    events: [{ name: "click", delegate: function() { return this.selClose }, handler: function(t) { t.preventDefault(), this.close() } }],
                    methods: {
                        close: function() {
                            var t = this;
                            this.toggleElement(this.$el).then(function() { return t.$destroy(!0) })
                        }
                    }
                })
            }

            function Fn(t) {
                Jt(function() {
                    var e = 0,
                        n = 0;
                    if (Ft(rt, "load resize", t.update), Ft(rt, "scroll", function(n) { n.dir = e <= rt.pageYOffset ? "down" : "up", n.scrollY = e = rt.pageYOffset, t.update(n) }), Ft(lt, "animationstart", function(t) {
                            var e = t.target;
                            (xe(e, "animationName") || "").match(/^uk-.*(left|right)/) && (n++, lt.body.style.overflowX = "hidden", setTimeout(function() {--n || (lt.body.style.overflowX = "") }, R(xe(e, "animationDuration")) + 100))
                        }, !0), ht) {
                        var i = "uk-hover";
                        Ft(lt, "tap", function(t) { var e = t.target; return $e("." + i).forEach(function(t) { return !$t(e, t) && me(t, i) }) }), Object.defineProperty(t, "hoverSelector", { set: function(t) { Ft(lt, "tap", t, function(t) { return ge(t.current, i) }) } }), t.hoverSelector = ".uk-animation-toggle, .uk-transition-toggle, [uk-hover]"
                    }
                })
            }

            function Hn(t) {
                t.component("cover", {
                    mixins: [Dn, t.components.video.options],
                    props: { width: Number, height: Number },
                    defaults: { automute: !0 },
                    update: {
                        write: function() {
                            var t = this.$el;
                            if (Bt(t)) {
                                var e = t.parentNode,
                                    n = e.offsetHeight,
                                    i = e.offsetWidth;
                                xe(xe(t, { width: "", height: "" }), q.cover({ width: this.width || t.clientWidth, height: this.height || t.clientHeight }, { width: i + (i % 2 ? 1 : 0), height: n + (n % 2 ? 1 : 0) }))
                            }
                        },
                        events: ["load", "resize"]
                    },
                    events: { loadedmetadata: function() { this.$emit() } }
                })
            }

            function zn(t) {
                var e, n;
                t.component("drop", {
                    mixins: [Rn, Bn],
                    args: "pos",
                    props: { mode: "list", toggle: Boolean, boundary: "query", boundaryAlign: Boolean, delayShow: Number, delayHide: Number, clsDrop: String },
                    defaults: { mode: ["click", "hover"], toggle: !0, boundary: rt, boundaryAlign: !1, delayShow: 0, delayHide: 800, clsDrop: !1, hoverIdle: 200, animation: ["uk-animation-fade"], cls: "uk-open" },
                    computed: { clsDrop: function(t) { return t.clsDrop || "uk-" + this.$options.name }, clsPos: function() { return this.clsDrop } },
                    init: function() { this.tracker = new dn, ge(this.$el, this.clsDrop) },
                    connected: function() {
                        var e = this.$props.toggle;
                        this.toggle = e && t.toggle(S(e) ? wt(e, this.$el) : this.$el.previousElementSibling, { target: this.$el, mode: this.mode }), this.updateAria(this.$el)
                    },
                    events: [{ name: "click", delegate: function() { return "." + this.clsDrop + "-close" }, handler: function(t) { t.preventDefault(), this.hide(!1) } }, {
                        name: "click",
                        delegate: function() { return 'a[href^="#"]' },
                        handler: function(t) {
                            if (!t.defaultPrevented) {
                                var e = t.target.hash;
                                e || t.preventDefault(), e && $t(e, this.$el) || this.hide(!1)
                            }
                        }
                    }, { name: "beforescroll", handler: function() { this.hide(!1) } }, { name: "toggle", self: !0, handler: function(t, e) { t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e, !1) } }, { name: mt, filter: function() { return v(this.mode, "hover") }, handler: function(t) { In(t) || (e && e !== this && e.toggle && v(e.toggle.mode, "hover") && !$t(t.target, e.toggle.$el) && !Z({ x: t.pageX, y: t.pageY }, Ge(e.$el)) && e.hide(!1), t.preventDefault(), this.show(this.toggle)) } }, { name: "toggleshow", handler: function(t, e) { e && !v(e.target, this.$el) || (t.preventDefault(), this.show(e || this.toggle)) } }, { name: "togglehide " + vt, handler: function(t, e) { In(t) || e && !v(e.target, this.$el) || (t.preventDefault(), this.toggle && v(this.toggle.mode, "hover") && this.hide()) } }, { name: "beforeshow", self: !0, handler: function() { this.clearTimers(), this.position() } }, {
                        name: "show",
                        self: !0,
                        handler: function() {
                            this.tracker.init(), ge(this.toggle.$el, this.cls), W(this.toggle.$el, "aria-expanded", "true"), n || (n = !0, Ft(st, "click", function(t) {
                                var n, i = t.target;
                                if (!t.defaultPrevented)
                                    for (; e && e !== n && !$t(i, e.$el) && (!e.toggle || !$t(i, e.toggle.$el));) n = e, e.hide(!1)
                            }))
                        }
                    }, { name: "beforehide", self: !0, handler: function() { this.clearTimers() } }, {
                        name: "hide",
                        handler: function(t) {
                            var n = t.target;
                            this.$el === n ? (e = this.isActive() ? null : e, me(this.toggle.$el, this.cls), W(this.toggle.$el, "aria-expanded", "false"), this.toggle.$el.blur(), $e("a, button", this.toggle.$el).forEach(function(t) { return t.blur() }), this.tracker.cancel()) : e = null === e && $t(n, this.$el) && this.isToggled() ? this : e
                        }
                    }],
                    update: { write: function() { this.isToggled() && !Re.inProgress(this.$el) && this.position() }, events: ["resize"] },
                    methods: {
                        show: function(t, n) {
                            var i = this;
                            void 0 === n && (n = !0);
                            var o = function() { return !i.isToggled() && i.toggleElement(i.$el, !0) },
                                r = function() {
                                    if (i.toggle = t || i.toggle, i.clearTimers(), !i.isActive())
                                        if (n && e && e !== i && e.isDelaying) i.showTimer = setTimeout(i.show, 10);
                                        else {
                                            if (i.isParentOf(e)) {
                                                if (!e.hideTimer) return;
                                                e.hide(!1)
                                            } else if (e && !i.isChildOf(e) && !i.isParentOf(e))
                                                for (var r; e && e !== r && !i.isChildOf(e);) r = e, e.hide(!1);
                                            n && i.delayShow ? i.showTimer = setTimeout(o, i.delayShow) : o(), e = i
                                        }
                                };
                            t && this.toggle && t.$el !== this.toggle.$el ? (zt(this.$el, "hide", r), this.hide(!1)) : r()
                        },
                        hide: function(t) {
                            var e = this;
                            void 0 === t && (t = !0);
                            var n = function() { return e.toggleNow(e.$el, !1) };
                            this.clearTimers(), this.isDelaying = this.tracker.movesTo(this.$el), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, this.hoverIdle) : t && this.delayHide ? this.hideTimer = setTimeout(n, this.delayHide) : n()
                        },
                        clearTimers: function() { clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1 },
                        isActive: function() { return e === this },
                        isChildOf: function(t) { return t && t !== this && $t(this.$el, t.$el) },
                        isParentOf: function(t) { return t && t !== this && $t(t.$el, this.$el) },
                        position: function() {
                            ve(this.$el, this.clsDrop + "-(stack|boundary)"), xe(this.$el, { top: "", left: "", display: "block" }), be(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
                            var t = Ge(this.boundary),
                                e = this.boundaryAlign ? t : Ge(this.toggle.$el);
                            if ("justify" === this.align) {
                                var n = "y" === this.getAxis() ? "width" : "height";
                                xe(this.$el, n, e[n])
                            } else this.$el.offsetWidth > Math.max(t.right - e.left, e.right - t.left) && ge(this.$el, this.clsDrop + "-stack");
                            this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary), xe(this.$el, "display", "")
                        }
                    }
                }), t.drop.getActive = function() { return e }
            }

            function Gn(t) { t.component("dropdown", t.components.drop.extend({ name: "dropdown" })) }

            function Zn(t) {
                t.component("form-custom", {
                    mixins: [Dn],
                    args: "target",
                    props: { target: Boolean },
                    defaults: { target: !1 },
                    computed: { input: function(t, e) { return Ue(jt, e) }, state: function() { return this.input.nextElementSibling }, target: function(t, e) { var n = t.target; return n && (!0 === n && this.input.parentNode === e && this.input.nextElementSibling || wt(n, e)) } },
                    update: function() {
                        var t, e = this.target,
                            n = this.input;
                        e && (e[Rt(e) ? "value" : "textContent"] = n.files && n.files[0] ? n.files[0].name : Mt(n, "select") && (t = $e("option", n).filter(function(t) { return t.selected })[0]) ? t.textContent : n.value)
                    },
                    events: [{
                        name: "focusin focusout mouseenter mouseleave",
                        delegate: jt,
                        handler: function(t) {
                            var e = t.type;
                            t.current === this.input && be(this.state, "uk-" + (v(e, "focus") ? "focus" : "hover"), v(["focusin", "mouseenter"], e))
                        }
                    }, { name: "change", handler: function() { this.$emit() } }]
                })
            }

            function qn(t) {
                t.component("gif", {
                    update: {
                        read: function(t) {
                            var e = nn(this.$el);
                            if (!e || t.isInView === e) return !1;
                            t.isInView = e
                        },
                        write: function() { this.$el.src = this.$el.src },
                        events: ["scroll", "load", "resize"]
                    }
                })
            }

            function Wn(t) { t.component("grid", t.components.margin.extend({ mixins: [Dn], name: "grid", defaults: { margin: "uk-grid-margin", clsStack: "uk-grid-stack" }, update: { write: function(t) { be(this.$el, this.clsStack, t.stacks) }, events: ["load", "resize"] } })) }

            function Qn(t) {
                t.component("height-match", {
                    args: "target",
                    props: { target: String, row: Boolean },
                    defaults: { target: "> *", row: !0 },
                    computed: { elements: function(t, e) { return $e(t.target, e) } },
                    update: {
                        read: function() {
                            var t = this,
                                e = !1;
                            return xe(this.elements, "minHeight", ""), { rows: this.row ? this.elements.reduce(function(t, n) { return e !== n.offsetTop ? t.push([n]) : t[t.length - 1].push(n), e = n.offsetTop, t }, []).map(function(e) { return t.match(e) }) : [this.match(this.elements)] }
                        },
                        write: function(t) { t.rows.forEach(function(t) { return xe(t.elements, "minHeight", t.height) }) },
                        events: ["load", "resize"]
                    },
                    methods: {
                        match: function(t) {
                            if (t.length < 2) return {};
                            var e = [],
                                n = 0;
                            return t.forEach(function(t) {
                                var i, o;
                                Bt(t) || (i = W(t, "style"), o = W(t, "hidden"), W(t, { style: (i || "") + ";display:block !important;", hidden: null })), n = Math.max(n, t.offsetHeight), e.push(t.offsetHeight), A(i) || W(t, { style: i, hidden: o })
                            }), t = t.filter(function(t, i) { return e[i] < n }), { height: n, elements: t }
                        }
                    }
                })
            }

            function Yn(t) {
                function e(t) { return t && t.offsetHeight || 0 }
                t.component("height-viewport", {
                    props: { expand: Boolean, offsetTop: Boolean, offsetBottom: Boolean, minHeight: Number },
                    defaults: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 },
                    update: {
                        write: function() {
                            xe(this.$el, "boxSizing", "border-box");
                            var t, n = We(rt),
                                i = 0;
                            if (this.expand) {
                                xe(this.$el, { height: "", minHeight: "" });
                                var o = n - e(st);
                                o > 0 && (t = e(this.$el) + o)
                            } else {
                                var r = Ge(this.$el).top;
                                r < n / 2 && this.offsetTop && (i += r), !0 === this.offsetBottom ? i += e(this.$el.nextElementSibling) : O(this.offsetBottom) ? i += n / 100 * this.offsetBottom : this.offsetBottom && p(this.offsetBottom, "px") ? i += V(this.offsetBottom) : S(this.offsetBottom) && (i += e(wt(this.offsetBottom, this.$el))), t = i ? "calc(100vh - " + i + "px)" : "100vh"
                            }
                            if (t) {
                                xe(this.$el, { height: "", minHeight: t });
                                var l = this.$el.offsetHeight;
                                this.minHeight && this.minHeight > l && xe(this.$el, "minHeight", this.minHeight), n - i >= l && xe(this.$el, "height", t)
                            }
                        },
                        events: ["load", "resize"]
                    }
                })
            }
            var Kn, Xn = '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
                Jn = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
                ti = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
                ei = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
                ni = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
                ii = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
                oi = '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
                ri = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
                li = '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
                si = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
                ai = '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
                ui = '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
                ci = '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
                di = '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
                hi = '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
                pi = '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>';

            function fi(t) {
                var e = {},
                    n = { spinner: hi, totop: pi, marker: ti, "close-icon": Xn, "close-large": Jn, "navbar-toggle-icon": ei, "overlay-icon": ni, "pagination-next": ii, "pagination-previous": oi, "search-icon": ri, "search-large": li, "search-navbar": si, "slidenav-next": ai, "slidenav-next-large": ui, "slidenav-previous": ci, "slidenav-previous-large": di };

                function i(e, n) { t.component(e, t.components.icon.extend({ name: e, mixins: n ? [n] : [], defaults: { icon: e } })) }
                t.component("icon", t.components.svg.extend({ attrs: ["icon", "ratio"], mixins: [Dn], name: "icon", args: "icon", props: ["icon"], defaults: { exclude: ["id", "style", "class", "src", "icon"] }, init: function() { ge(this.$el, "uk-icon"), at && (this.icon = U(U(this.icon, "left", "right"), "previous", "next")) }, methods: { getSvg: function() { var t = function(t) { return n[t] ? (e[t] || (e[t] = Ue(n[t].trim())), e[t]) : null }(this.icon); return t ? J.resolve(t) : J.reject("Icon not found.") } } })), ["marker", "navbar-toggle-icon", "overlay-icon", "pagination-previous", "pagination-next", "totop"].forEach(function(t) { return i(t) }), ["slidenav-previous", "slidenav-next"].forEach(function(t) { return i(t, { init: function() { ge(this.$el, "uk-slidenav"), we(this.$el, "uk-slidenav-large") && (this.icon += "-large") } }) }), i("search-icon", { init: function() { we(this.$el, "uk-search-icon") && Pt(this.$el, ".uk-search-large").length ? this.icon = "search-large" : Pt(this.$el, ".uk-search-navbar").length && (this.icon = "search-navbar") } }), i("close", { init: function() { this.icon = "close-" + (we(this.$el, "uk-close-large") ? "large" : "icon") } }), i("spinner", {
                    connected: function() {
                        var t = this;
                        this.svg.then(function(e) { return 1 !== t.ratio && xe(Ue("circle", e), "stroke-width", 1 / t.ratio) }, z)
                    }
                }), t.icon.add = function(i) { Object.keys(i).forEach(function(t) { n[t] = i[t], delete e[t] }), t._initialized && F(t.instances, function(t) { "icon" === t.$options.name && t.$reset() }) }
            }

            function gi(t) {
                t.component("leader", {
                    mixins: [Dn],
                    props: { fill: String, media: "media" },
                    defaults: { fill: "", media: !1, clsWrapper: "uk-leader-fill", clsHide: "uk-leader-hide", attrFill: "data-fill" },
                    computed: { fill: function(t) { return t.fill || Se("leader-fill") } },
                    connected: function() {
                        var t;
                        t = ce(this.$el, '<span class="' + this.clsWrapper + '">'), this.wrapper = t[0]
                    },
                    disconnected: function() { de(this.wrapper.childNodes) },
                    update: [{
                        read: function(t) {
                            var e = t.changed,
                                n = t.width,
                                i = n;
                            return { width: n = Math.floor(this.$el.offsetWidth / 2), changed: e || i !== n, hide: this.media && !rt.matchMedia(this.media).matches }
                        },
                        write: function(t) { be(this.wrapper, this.clsHide, t.hide), t.changed && (t.changed = !1, W(this.wrapper, this.attrFill, new Array(t.width).join(this.fill))) },
                        events: ["load", "resize"]
                    }]
                })
            }

            function mi(t) {
                t.component("margin", {
                    props: { margin: String, firstColumn: Boolean },
                    defaults: { margin: "uk-margin-small-top", firstColumn: "uk-first-column" },
                    update: {
                        read: function(t) {
                            var e = this.$el.children;
                            if (!e.length || !Bt(this.$el)) return t.rows = !1;
                            t.stacks = !0;
                            for (var n = [
                                    []
                                ], i = 0; i < e.length; i++) {
                                var o = e[i],
                                    r = o.getBoundingClientRect();
                                if (r.height)
                                    for (var l = n.length - 1; l >= 0; l--) {
                                        var s = n[l];
                                        if (!s[0]) { s.push(o); break }
                                        var a = s[0].getBoundingClientRect();
                                        if (r.top >= Math.floor(a.bottom)) { n.push([o]); break }
                                        if (Math.floor(r.bottom) > a.top) {
                                            if (t.stacks = !1, r.left < a.left && !at) { s.unshift(o); break }
                                            s.push(o);
                                            break
                                        }
                                        if (0 === l) { n.unshift([o]); break }
                                    }
                            }
                            t.rows = n
                        },
                        write: function(t) {
                            var e = this;
                            t.rows.forEach(function(t, n) { return t.forEach(function(t, i) { be(t, e.margin, 0 !== n), be(t, e.firstColumn, 0 === i) }) })
                        },
                        events: ["load", "resize"]
                    }
                })
            }

            function vi(t) {
                t.component("modal", { mixins: [jn], defaults: { clsPage: "uk-modal-page", clsPanel: "uk-modal-dialog", selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full" }, events: [{ name: "show", self: !0, handler: function() { we(this.panel, "uk-margin-auto-vertical") ? ge(this.$el, "uk-flex") : xe(this.$el, "display", "block"), We(this.$el) } }, { name: "hidden", self: !0, handler: function() { xe(this.$el, "display", ""), me(this.$el, "uk-flex") } }] }), t.component("overflow-auto", {
                    mixins: [Dn],
                    computed: { modal: function(t, e) { return At(e, ".uk-modal") }, panel: function(t, e) { return At(e, ".uk-modal-dialog") } },
                    connected: function() { xe(this.$el, "minHeight", 150) },
                    update: {
                        write: function() {
                            if (this.panel && this.modal) {
                                var t = xe(this.$el, "maxHeight");
                                xe(xe(this.$el, "maxHeight", 150), "maxHeight", Math.max(150, 150 + We(this.modal) - this.panel.offsetHeight)), t !== xe(this.$el, "maxHeight") && Gt(this.$el, "resize")
                            }
                        },
                        events: ["load", "resize"]
                    }
                }), t.modal.dialog = function(e, n) { var i = t.modal(' <div class="uk-modal"> <div class="uk-modal-dialog">' + e + "</div> </div> ", n); return i.show(), Ft(i.$el, "hidden", function(t) { t.target === t.currentTarget && i.$destroy(!0) }), i }, t.modal.alert = function(e, n) { return n = $({ bgClose: !1, escClose: !1, labels: t.modal.labels }, n), new J(function(i) { return Ft(t.modal.dialog(' <div class="uk-modal-body">' + (S(e) ? e : ie(e)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + n.labels.ok + "</button> </div> ", n).$el, "hide", i) }) }, t.modal.confirm = function(e, n) {
                    return n = $({ bgClose: !1, escClose: !0, labels: t.modal.labels }, n), new J(function(i, o) {
                        var r = t.modal.dialog(' <form> <div class="uk-modal-body">' + (S(e) ? e : ie(e)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + n.labels.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + n.labels.ok + "</button> </div> </form> ", n),
                            l = !1;
                        Ft(r.$el, "submit", "form", function(t) { t.preventDefault(), i(), l = !0, r.hide() }), Ft(r.$el, "hide", function() { l || o() })
                    })
                }, t.modal.prompt = function(e, n, i) {
                    return i = $({ bgClose: !1, escClose: !0, labels: t.modal.labels }, i), new J(function(o) {
                        var r = t.modal.dialog(' <form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (S(e) ? e : ie(e)) + '</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + i.labels.cancel + '</button> <button class="uk-button uk-button-primary">' + i.labels.ok + "</button> </div> </form> ", i),
                            l = Ue("input", r.$el);
                        l.value = n;
                        var s = !1;
                        Ft(r.$el, "submit", "form", function(t) { t.preventDefault(), o(l.value), s = !0, r.hide() }), Ft(r.$el, "hide", function() { s || o(null) })
                    })
                }, t.modal.labels = { ok: "Ok", cancel: "Cancel" }
            }

            function yi(t) { t.component("nav", t.components.accordion.extend({ name: "nav", defaults: { targets: "> .uk-parent", toggle: "> a", content: "> ul" } })) }

            function wi(t) {
                t.component("navbar", {
                    mixins: [Dn],
                    props: { dropdown: String, mode: "list", align: String, offset: Number, boundary: Boolean, boundaryAlign: Boolean, clsDrop: String, delayShow: Number, delayHide: Number, dropbar: Boolean, dropbarMode: String, dropbarAnchor: "query", duration: Number },
                    defaults: { dropdown: ".uk-navbar-nav > li", align: at ? "right" : "left", clsDrop: "uk-navbar-dropdown", mode: void 0, offset: void 0, delayShow: void 0, delayHide: void 0, boundaryAlign: void 0, flip: "x", boundary: !0, dropbar: !1, dropbarMode: "slide", dropbarAnchor: !1, duration: 200 },
                    computed: { boundary: function(t, e) { var n = t.boundary; return !0 === n || t.boundaryAlign ? e : n }, pos: function(t) { return "bottom-" + t.align } },
                    beforeConnect: function() {
                        var t = this.$props.dropbar;
                        this.dropbar = t && (S(t) && wt(t, this.$el) || Ue("<div></div>")), this.dropbar && (ge(this.dropbar, "uk-navbar-dropbar"), "slide" === this.dropbarMode && ge(this.dropbar, "uk-navbar-dropbar-slide"))
                    },
                    disconnected: function() { this.dropbar && ae(this.dropbar) },
                    update: function() { t.drop($e(this.dropdown + " ." + this.clsDrop, this.$el).filter(function(e) { return !t.getComponent(e, "drop") && !t.getComponent(e, "dropdown") }), $({}, this.$props, { boundary: this.boundary, pos: this.pos, offset: this.dropbar || this.offset })) },
                    events: [{
                        name: "mouseover",
                        delegate: function() { return this.dropdown },
                        handler: function(t) {
                            var e = t.current,
                                n = this.getActive();
                            n && n.toggle && !$t(n.toggle.$el, e) && !n.tracker.movesTo(n.$el) && n.hide(!1)
                        }
                    }, {
                        name: "mouseleave",
                        el: function() { return this.dropbar },
                        handler: function() {
                            var t = this.getActive();
                            t && !Mt(this.dropbar, ":hover") && t.hide()
                        }
                    }, { name: "beforeshow", capture: !0, filter: function() { return this.dropbar }, handler: function() { this.dropbar.parentNode || le(this.dropbarAnchor || this.$el, this.dropbar) } }, {
                        name: "show",
                        capture: !0,
                        filter: function() { return this.dropbar },
                        handler: function(t, e) {
                            var n = e.$el;
                            this.clsDrop && ge(n, this.clsDrop + "-dropbar"), this.transitionTo(n.offsetHeight + V(xe(n, "margin-top")) + V(xe(n, "margin-bottom")), n)
                        }
                    }, {
                        name: "beforehide",
                        filter: function() { return this.dropbar },
                        handler: function(t, e) {
                            var n = e.$el,
                                i = this.getActive();
                            Mt(this.dropbar, ":hover") && i && i.$el === n && t.preventDefault()
                        }
                    }, {
                        name: "hide",
                        filter: function() { return this.dropbar },
                        handler: function(t, e) {
                            var n = e.$el,
                                i = this.getActive();
                            (!i || i && i.$el === n) && this.transitionTo(0)
                        }
                    }],
                    methods: {
                        getActive: function() { var e = t.drop.getActive(); return e && v(e.mode, "hover") && $t(e.toggle.$el, this.$el) && e },
                        transitionTo: function(t, e) {
                            var n = this.dropbar,
                                i = Bt(n) ? We(n) : 0;
                            return xe(e = i < t && e, { height: i, overflow: "hidden" }), We(n, i), Ve.cancel([e, n]), Ve.start([e, n], { height: t }, this.duration).catch(z).finally(function() { return xe(e, { height: "", overflow: "" }) })
                        }
                    }
                })
            }

            function bi(t) {
                t.component("offcanvas", {
                    mixins: [jn],
                    args: "mode",
                    props: { content: String, mode: String, flip: Boolean, overlay: Boolean },
                    defaults: { content: ".uk-offcanvas-content", mode: "slide", flip: !1, overlay: !1, clsPage: "uk-offcanvas-page", clsContainer: "uk-offcanvas-container", clsPanel: "uk-offcanvas-bar", clsFlip: "uk-offcanvas-flip", clsContent: "uk-offcanvas-content", clsContentAnimation: "uk-offcanvas-content-animation", clsSidebarAnimation: "uk-offcanvas-bar-animation", clsMode: "uk-offcanvas", clsOverlay: "uk-offcanvas-overlay", selClose: ".uk-offcanvas-close" },
                    computed: { content: function(t) { return Ue(t.content) || lt.body }, clsFlip: function(t) { return t.flip ? t.clsFlip : "" }, clsOverlay: function(t) { return t.overlay ? t.clsOverlay : "" }, clsMode: function(t) { return t.clsMode + "-" + t.mode }, clsSidebarAnimation: function(t) { var e = t.mode; return "none" === e || "reveal" === e ? "" : t.clsSidebarAnimation }, clsContentAnimation: function(t) { var e = t.mode; return "push" !== e && "reveal" !== e ? "" : t.clsContentAnimation }, transitionElement: function(t) { return "reveal" === t.mode ? this.panel.parentNode : this.panel } },
                    update: { write: function() { this.getActive() === this && ((this.overlay || this.clsContentAnimation) && Qe(this.content, Qe(rt) - this.scrollbarWidth), this.overlay && (We(this.content, We(rt)), Kn && (this.content.scrollTop = Kn.y))) }, events: ["resize"] },
                    events: [{
                        name: "click",
                        delegate: function() { return 'a[href^="#"]' },
                        handler: function(t) {
                            var e = t.current;
                            e.hash && Ue(e.hash, this.content) && (Kn = null, this.hide())
                        }
                    }, { name: "beforescroll", filter: function() { return this.overlay }, handler: function(t, e, n) { e && n && this.isToggled() && Ue(n, this.content) && (zt(this.$el, "hidden", function() { return e.scrollTo(n) }), t.preventDefault()) } }, { name: "show", self: !0, handler: function() { Kn = Kn || { x: rt.pageXOffset, y: rt.pageYOffset }, "reveal" !== this.mode || we(this.panel, this.clsMode) || (ue(this.panel, "<div>"), ge(this.panel.parentNode, this.clsMode)), xe(st, "overflowY", (!this.clsContentAnimation || this.flip) && this.scrollbarWidth && this.overlay ? "scroll" : ""), ge(lt.body, this.clsContainer, this.clsFlip, this.clsOverlay), We(lt.body), ge(this.content, this.clsContentAnimation), ge(this.panel, this.clsSidebarAnimation + " " + ("reveal" !== this.mode ? this.clsMode : "")), ge(this.$el, this.clsOverlay), xe(this.$el, "display", "block"), We(this.$el) } }, {
                        name: "hide",
                        self: !0,
                        handler: function() {
                            me(this.content, this.clsContentAnimation);
                            var t = this.getActive();
                            ("none" === this.mode || t && t !== this && t !== this.prev) && Gt(this.panel, "transitionend")
                        }
                    }, {
                        name: "hidden",
                        self: !0,
                        handler: function() {
                            if ("reveal" === this.mode && de(this.panel), this.overlay) {
                                if (!Kn) {
                                    var t = this.content;
                                    Kn = { x: t.scrollLeft, y: t.scrollTop }
                                }
                            } else Kn = { x: rt.pageXOffset, y: rt.pageYOffset };
                            me(this.panel, this.clsSidebarAnimation, this.clsMode), me(this.$el, this.clsOverlay), xe(this.$el, "display", ""), me(lt.body, this.clsContainer, this.clsFlip, this.clsOverlay), lt.body.scrollTop = Kn.y, xe(st, "overflow-y", ""), Qe(this.content, ""), We(this.content, ""), rt.scrollTo(Kn.x, Kn.y), Kn = null
                        }
                    }, { name: "swipeLeft swipeRight", handler: function(t) { this.isToggled() && In(t) && ("swipeLeft" === t.type && !this.flip || "swipeRight" === t.type && this.flip) && this.hide() } }]
                })
            }

            function _i(t) { t.component("responsive", { props: ["width", "height"], init: function() { ge(this.$el, "uk-responsive-width") }, update: { read: function() { return !!(Bt(this.$el) && this.width && this.height) && { width: Qe(this.$el.parentNode), height: this.height } }, write: function(t) { We(this.$el, q.contain({ height: this.height, width: this.width }, t).height) }, events: ["load", "resize"] } }) }

            function Ci(t) {
                t.component("scroll", {
                    props: { duration: Number, offset: Number },
                    defaults: { duration: 1e3, offset: 0 },
                    methods: {
                        scrollTo: function(t) {
                            var e = this;
                            t = t && Ue(t) || lt.body;
                            var n = We(lt),
                                i = We(rt),
                                o = Ge(t).top - this.offset;
                            if (o + i > n && (o = n - i), Gt(this.$el, "beforescroll", [this, t])) {
                                var r = Date.now(),
                                    l = rt.pageYOffset,
                                    s = function() {
                                        var n, i = l + (o - l) * (n = H((Date.now() - r) / e.duration), .5 * (1 - Math.cos(Math.PI * n)));
                                        rt.scrollTo(rt.pageXOffset, i), i !== o ? requestAnimationFrame(s) : Gt(e.$el, "scrolled", [e, t])
                                    };
                                s()
                            }
                        }
                    },
                    events: { click: function(t) { t.defaultPrevented || (t.preventDefault(), this.scrollTo(Vt(this.$el.hash).substr(1))) } }
                })
            }

            function ki(t) {
                t.component("scrollspy", {
                    args: "cls",
                    props: { cls: "list", target: String, hidden: Boolean, offsetTop: Number, offsetLeft: Number, repeat: Boolean, delay: Number },
                    defaults: { cls: [], target: !1, hidden: !0, offsetTop: 0, offsetLeft: 0, repeat: !1, delay: 0, inViewClass: "uk-scrollspy-inview" },
                    computed: { elements: function(t, e) { var n = t.target; return n ? $e(n, e) : [e] } },
                    update: [{ write: function() { this.hidden && xe(Ut(this.elements, ":not(." + this.inViewClass + ")"), "visibility", "hidden") } }, {
                        read: function(e) {
                            var n = this;
                            if (!t._initialized) return "complete" === lt.readyState && requestAnimationFrame(function() { return n.$emit() }), !1;
                            this.elements.forEach(function(t, i) {
                                var o = e[i];
                                if (!o || o.el !== t) {
                                    var r = X(t, "uk-scrollspy-class");
                                    o = { el: t, toggles: r && r.split(",") || n.cls }
                                }
                                o.show = nn(t, n.offsetTop, n.offsetLeft), e[i] = o
                            })
                        },
                        write: function(e) {
                            var n = this,
                                i = 1 === this.elements.length ? 1 : 0;
                            this.elements.forEach(function(o, r) {
                                var l = e[r],
                                    s = l.toggles[r] || l.toggles[0];
                                if (!l.show || l.inview || l.timer) !l.show && l.inview && n.repeat && (l.timer && (clearTimeout(l.timer), delete l.timer), xe(o, "visibility", n.hidden ? "hidden" : ""), me(o, n.inViewClass), be(o, s), Gt(o, "outview"), t.update(null, o), l.inview = !1);
                                else {
                                    var a = function() { xe(o, "visibility", ""), ge(o, n.inViewClass), be(o, s), Gt(o, "inview"), t.update(null, o), l.inview = !0, delete l.timer };
                                    n.delay && i ? l.timer = setTimeout(a, n.delay * i) : a(), i++
                                }
                            })
                        },
                        events: ["scroll", "load", "resize"]
                    }]
                })
            }

            function xi(t) {
                t.component("scrollspy-nav", {
                    props: { cls: String, closest: String, scroll: Boolean, overflow: Boolean, offset: Number },
                    defaults: { cls: "uk-active", closest: !1, scroll: !1, overflow: !0, offset: 0 },
                    computed: { links: function(t, e) { return $e('a[href^="#"]', e).filter(function(t) { return t.hash }) }, elements: function() { return this.closest ? At(this.links, this.closest) : this.links }, targets: function() { return $e(this.links.map(function(t) { return t.hash }).join(",")) } },
                    update: [{ read: function() { this.scroll && t.scroll(this.links, { offset: this.offset || 0 }) } }, {
                        read: function(t) {
                            var e = this,
                                n = rt.pageYOffset + this.offset + 1,
                                i = We(lt) - We(rt) + this.offset;
                            t.active = !1, this.targets.every(function(o, r) {
                                var l = Ge(o).top,
                                    s = r + 1 === e.targets.length;
                                if (!e.overflow && (0 === r && l > n || s && l + o.offsetTop < n)) return !1;
                                if (!s && Ge(e.targets[r + 1]).top <= n) return !0;
                                if (n >= i)
                                    for (var a = e.targets.length - 1; a > r; a--)
                                        if (nn(e.targets[a])) { o = e.targets[a]; break }
                                return !(t.active = Ue(Ut(e.links, '[href="#' + o.id + '"]')))
                            })
                        },
                        write: function(t) {
                            var e = t.active;
                            this.links.forEach(function(t) { return t.blur() }), me(this.elements, this.cls), e && Gt(this.$el, "active", [e, ge(this.closest ? At(e, this.closest) : e, this.cls)])
                        },
                        events: ["scroll", "load", "resize"]
                    }]
                })
            }

            function Ti(t) {
                function e(t, e) {
                    var n = e.$el,
                        i = e[t + "Offset"],
                        o = e.$props[t];
                    if (o) { if (O(o)) return i + V(o); if (S(o) && o.match(/^-?\d+vh$/)) return We(rt) * V(o) / 100; var r = !0 === o ? n.parentNode : wt(o, n); return r ? Ge(r).top + r.offsetHeight : void 0 }
                }
                t.component("sticky", {
                    mixins: [Dn],
                    attrs: !0,
                    props: { top: null, bottom: Boolean, offset: Number, animation: String, clsActive: String, clsInactive: String, clsFixed: String, clsBelow: String, selTarget: String, widthElement: "query", showOnUp: Boolean, media: "media", target: Number },
                    defaults: { top: 0, bottom: !1, offset: 0, animation: "", clsActive: "uk-active", clsInactive: "", clsFixed: "uk-sticky-fixed", clsBelow: "uk-sticky-below", selTarget: "", widthElement: !1, showOnUp: !1, media: !1, target: !1 },
                    computed: { selTarget: function(t, e) { var n = t.selTarget; return n && Ue(n, e) || e } },
                    connected: function() { this.placeholder = Ue('<div class="uk-sticky-placeholder"></div>'), this.widthElement = this.$props.widthElement || this.placeholder, this.isActive || this.hide() },
                    disconnected: function() { this.isActive && (this.isActive = !1, this.hide(), me(this.selTarget, this.clsInactive)), ae(this.placeholder), this.placeholder = null, this.widthElement = null },
                    ready: function() {
                        var t = this;
                        if (this.target && location.hash && rt.pageYOffset > 0) {
                            var e = Ue(location.hash);
                            e && sn.read(function() {
                                var n = Ge(e).top,
                                    i = Ge(t.$el).top,
                                    o = t.$el.offsetHeight;
                                i + o >= n && i <= n + e.offsetHeight && rt.scrollTo(0, n - o - t.target - t.offset)
                            })
                        }
                    },
                    events: [{ name: "active", self: !0, handler: function() { ye(this.selTarget, this.clsInactive, this.clsActive) } }, { name: "inactive", self: !0, handler: function() { ye(this.selTarget, this.clsActive, this.clsInactive) } }],
                    update: [{
                        write: function() {
                            var t = this.placeholder,
                                n = (this.isActive ? t : this.$el).offsetHeight;
                            xe(t, $({ height: "absolute" !== xe(this.$el, "position") ? n : "" }, xe(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"]))), $t(t, st) || (le(this.$el, t), W(t, "hidden", "")), W(this.widthElement, "hidden", null), this.width = this.widthElement.offsetWidth, W(this.widthElement, "hidden", this.isActive ? null : ""), this.topOffset = Ge(this.isActive ? t : this.$el).top, this.bottomOffset = this.topOffset + n;
                            var i = e("bottom", this);
                            this.top = Math.max(V(e("top", this)), this.topOffset) - this.offset, this.bottom = i && i - n, this.inactive = this.media && !rt.matchMedia(this.media).matches, this.isActive && this.update()
                        },
                        events: ["load", "resize"]
                    }, {
                        read: function(t, e) { var n = e.scrollY; return void 0 === n && (n = rt.pageYOffset), { scroll: this.scroll = n, visible: Bt(this.$el) } },
                        write: function(t, e) {
                            var n = this,
                                i = t.scroll;
                            void 0 === e && (e = {});
                            var o = e.dir;
                            if (!(i < 0 || !t.visible || this.disabled || this.showOnUp && !o))
                                if (this.inactive || i < this.top || this.showOnUp && (i <= this.top || "down" === o || "up" === o && !this.isActive && i <= this.bottomOffset)) {
                                    if (!this.isActive) return;
                                    this.isActive = !1, this.animation && i > this.topOffset ? (Re.cancel(this.$el), Re.out(this.$el, this.animation).then(function() { return n.hide() }, z)) : this.hide()
                                } else this.isActive ? this.update() : this.animation ? (Re.cancel(this.$el), this.show(), Re.in(this.$el, this.animation).catch(z)) : this.show()
                        },
                        events: ["scroll"]
                    }],
                    methods: {
                        show: function() { this.isActive = !0, this.update(), W(this.placeholder, "hidden", null) },
                        hide: function() { this.isActive && !we(this.selTarget, this.clsActive) || Gt(this.$el, "inactive"), me(this.$el, this.clsFixed, this.clsBelow), xe(this.$el, { position: "", top: "", width: "" }), W(this.placeholder, "hidden", "") },
                        update: function() {
                            var t = 0 !== this.top || this.scroll > this.top,
                                e = Math.max(0, this.offset);
                            this.bottom && this.scroll > this.bottom - this.offset && (e = this.bottom - this.scroll), xe(this.$el, { position: "fixed", top: e + "px", width: this.width }), we(this.selTarget, this.clsActive) ? t || Gt(this.$el, "inactive") : t && Gt(this.$el, "active"), be(this.$el, this.clsBelow, this.scroll > this.bottomOffset), ge(this.$el, this.clsFixed)
                        }
                    }
                })
            }
            var Ii = {};

            function Ei(t) {
                t.component("svg", {
                    attrs: !0,
                    props: { id: String, icon: String, src: String, style: String, width: Number, height: Number, ratio: Number, class: String },
                    defaults: { ratio: 1, id: !1, exclude: ["src"], class: "" },
                    init: function() { this.class += " uk-svg" },
                    connected: function() {
                        var t = this;
                        if (!this.icon && v(this.src, "#")) {
                            var i, o = this.src.split("#");
                            o.length > 1 && (this.src = (i = o)[0], this.icon = i[1])
                        }
                        this.svg = this.getSvg().then(function(i) {
                            var o;
                            if (S(i) ? (t.icon && v(i, "<symbol") && (i = function(t, i) {
                                    var o;
                                    if (!n[t])
                                        for (n[t] = {}; o = e.exec(t);) n[t][o[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + o[1] + "svg>";
                                    return n[t][i]
                                }(i, t.icon) || i), o = Ue(i.substr(i.indexOf("<svg")))) : o = i.cloneNode(!0), !o) return J.reject("SVG not found.");
                            var r = W(o, "viewBox");
                            for (var l in r && (r = r.split(" "), t.width = t.$props.width || r[2], t.height = t.$props.height || r[3]), t.width *= t.ratio, t.height *= t.ratio, t.$options.props) t[l] && !v(t.exclude, l) && W(o, l, t[l]);
                            t.id || Y(o, "id"), t.width && !t.height && Y(o, "height"), t.height && !t.width && Y(o, "width");
                            var s = t.$el;
                            if (Nt(s) || "CANVAS" === s.tagName) {
                                W(s, { hidden: !0, id: null });
                                var a = s.nextElementSibling;
                                a && o.isEqualNode(a) ? o = a : le(s, o)
                            } else {
                                var u = s.lastElementChild;
                                u && o.isEqualNode(u) ? o = u : oe(s, o)
                            }
                            return t.svgEl = o, o
                        }, z)
                    },
                    disconnected: function() {
                        var t = this;
                        Nt(this.$el) && W(this.$el, { hidden: null, id: this.id || null }), this.svg && this.svg.then(function(e) { return (!t._connected || e !== t.svgEl) && ae(e) }, z), this.svg = this.svgEl = null
                    },
                    methods: { getSvg: function() { var t = this; return this.src ? Ii[this.src] ? Ii[this.src] : (Ii[this.src] = new J(function(e, n) { d(t.src, "data:") ? e(decodeURIComponent(t.src.split(",")[1])) : Kt(t.src).then(function(t) { return e(t.response) }, function() { return n("SVG not found.") }) }), Ii[this.src]) : J.reject() } }
                });
                var e = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g,
                    n = {}
            }

            function Si(t) {
                t.component("switcher", {
                    mixins: [Bn],
                    args: "connect",
                    props: { connect: String, toggle: String, active: Number, swiping: Boolean },
                    defaults: { connect: "~.uk-switcher", toggle: "> *", active: 0, swiping: !0, cls: "uk-active", clsContainer: "uk-switcher", attrItem: "uk-switcher-item", queued: !0 },
                    computed: { connects: function(t, e) { return bt(t.connect, e) }, toggles: function(t, e) { return $e(t.toggle, e) } },
                    events: [{ name: "click", delegate: function() { return this.toggle + ":not(.uk-disabled)" }, handler: function(t) { t.preventDefault(), this.show(t.current) } }, { name: "click", el: function() { return this.connects }, delegate: function() { return "[" + this.attrItem + "],[data-" + this.attrItem + "]" }, handler: function(t) { t.preventDefault(), this.show(X(t.current, this.attrItem)) } }, { name: "swipeRight swipeLeft", filter: function() { return this.swiping }, el: function() { return this.connects }, handler: function(t) { In(t) && (t.preventDefault(), rt.getSelection().toString() || this.show("swipeLeft" === t.type ? "next" : "previous")) } }],
                    update: function() {
                        var t = this;
                        this.connects.forEach(function(e) { return t.updateAria(e.children) }), this.show(Ut(this.toggles, "." + this.cls)[0] || this.toggles[this.active] || this.toggles[0])
                    },
                    methods: {
                        show: function(t) {
                            for (var e, n = this, i = this.toggles.length, o = !!this.connects.length && te(Ut(this.connects[0].children, "." + this.cls)[0]), r = o >= 0, l = "previous" === t ? -1 : 1, s = ee(t, this.toggles, o), a = 0; a < i; a++, s = (s + l + i) % i)
                                if (!Mt(n.toggles[s], ".uk-disabled, [disabled]")) { e = n.toggles[s]; break }!e || o >= 0 && we(e, this.cls) || o === s || (me(this.toggles, this.cls), W(this.toggles, "aria-expanded", !1), ge(e, this.cls), W(e, "aria-expanded", !0), this.connects.forEach(function(t) { r ? n.toggleElement([t.children[o], t.children[s]]) : n.toggleNow(t.children[s]) }))
                        }
                    }
                })
            }

            function Mi(t) {
                t.component("tab", t.components.switcher.extend({
                    mixins: [Dn],
                    name: "tab",
                    props: { media: "media" },
                    defaults: { media: 960, attrItem: "uk-tab-item" },
                    init: function() {
                        var e = we(this.$el, "uk-tab-left") ? "uk-tab-left" : !!we(this.$el, "uk-tab-right") && "uk-tab-right";
                        e && t.toggle(this.$el, { cls: e, mode: "media", media: this.media })
                    }
                }))
            }

            function Oi(t) {
                t.component("toggle", {
                    mixins: [t.mixin.togglable],
                    args: "target",
                    props: { href: String, target: null, mode: "list", media: "media" },
                    defaults: { href: !1, target: !1, mode: "click", queued: !0, media: !1 },
                    computed: { target: function(t, e) { var n = t.target; return (n = bt(n || t.href, e)).length && n || [e] } },
                    events: [{ name: mt + " " + vt, filter: function() { return v(this.mode, "hover") }, handler: function(t) { In(t) || this.toggle("toggle" + (t.type === mt ? "show" : "hide")) } }, {
                        name: "click",
                        filter: function() { return v(this.mode, "click") || ht },
                        handler: function(t) {
                            var e;
                            (In(t) || v(this.mode, "click")) && ((At(t.target, 'a[href="#"], button') || (e = At(t.target, "a[href]")) && (this.cls || !Bt(this.target) || e.hash && Mt(this.target, e.hash))) && zt(lt, "click", function(t) { return t.preventDefault() }), this.toggle())
                        }
                    }],
                    update: {
                        write: function() {
                            if (v(this.mode, "media") && this.media) {
                                var t = this.isToggled(this.target);
                                (rt.matchMedia(this.media).matches ? !t : t) && this.toggle()
                            }
                        },
                        events: ["load", "resize"]
                    },
                    methods: { toggle: function(t) { Gt(this.target, t || "toggle", [this]) && this.toggleElement(this.target) } }
                })
            }

            function Ai(t) { t.component("video", { props: { automute: Boolean, autoplay: Boolean }, defaults: { automute: !1, autoplay: !0 }, computed: { inView: function(t) { return "inview" === t.autoplay } }, ready: function() { this.player = new vn(this.$el), this.automute && this.player.mute() }, update: [{ read: function(t, e) { var n = e.type; return !(!this.player || !("scroll" !== n && "resize" !== n || this.inView)) && { visible: Bt(this.$el) && "hidden" !== xe(this.$el, "visibility"), inView: this.inView && nn(this.$el) } }, write: function(t) { var e = t.inView;!t.visible || this.inView && !e ? this.player.pause() : (!0 === this.autoplay || this.inView && e) && this.player.play() }, events: ["load", "resize", "scroll"] }] }) }

            function Pi(t, e) { return void 0 === t && (t = 0), void 0 === e && (e = "%"), "translateX(" + t + (t ? e : "") + ")" }

            function Li(t) { return "scale3d(" + t + ", " + t + ", 1)" }

            function Vi(t) {
                if (!Vi.installed) {
                    var e = t.util,
                        n = e.$,
                        i = e.assign,
                        o = e.clamp,
                        r = e.fastdom,
                        l = e.getIndex,
                        s = e.hasClass,
                        a = e.isNumber,
                        u = e.isRtl,
                        c = e.Promise,
                        d = e.toNodes,
                        h = e.trigger;
                    t.mixin.slider = {
                        attrs: !0,
                        mixins: [function(t) {
                            var e = t.util,
                                n = e.doc;
                            return {
                                props: { autoplay: Boolean, autoplayInterval: Number, pauseOnHover: Boolean },
                                defaults: { autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0 },
                                connected: function() { this.startAutoplay() },
                                disconnected: function() { this.stopAutoplay() },
                                events: [{ name: "visibilitychange", el: n, handler: function() { n.hidden ? this.stopAutoplay() : this.startAutoplay() } }, { name: e.pointerDown, handler: "stopAutoplay" }, { name: "mouseenter", filter: function() { return this.autoplay }, handler: function() { this.isHovering = !0 } }, { name: "mouseleave", filter: function() { return this.autoplay }, handler: function() { this.isHovering = !1 } }],
                                methods: {
                                    startAutoplay: function() {
                                        var t = this;
                                        this.stopAutoplay(), this.autoplay && (this.interval = setInterval(function() { return !(t.isHovering && t.pauseOnHover) && !t.stack.length && t.show("next") }, this.autoplayInterval))
                                    },
                                    stopAutoplay: function() { this.interval && clearInterval(this.interval) }
                                }
                            }
                        }(t), function(t) {
                            var e = t.util,
                                n = e.doc,
                                i = e.getPos,
                                o = e.includes,
                                r = e.isRtl,
                                l = e.isTouch,
                                s = e.off,
                                a = e.on,
                                u = e.pointerMove,
                                c = e.pointerUp,
                                d = e.preventClick,
                                h = e.trigger,
                                p = e.win;
                            return {
                                defaults: { threshold: 10, preventCatch: !1 },
                                init: function() {
                                    var t = this;
                                    ["start", "move", "end"].forEach(function(e) {
                                        var n = t[e];
                                        t[e] = function(e) {
                                            var o = i(e).x * (r ? -1 : 1);
                                            t.prevPos = o !== t.pos ? t.pos : t.prevPos, t.pos = o, n(e)
                                        }
                                    })
                                },
                                events: [{ name: e.pointerDown, delegate: function() { return this.slidesSelector }, handler: function(t) { var e;!l(t) && !(e = t.target).children.length && e.childNodes.length || t.button > 0 || this.length < 2 || this.preventCatch || this.start(t) } }, { name: "dragstart", handler: function(t) { t.preventDefault() } }],
                                methods: {
                                    start: function() { this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.translate(this.percent), this._transitioner.cancel(), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, this.unbindMove = a(n, u, this.move, { capture: !0, passive: !1 }), a(p, "scroll", this.unbindMove), a(n, c, this.end, !0) },
                                    move: function(t) {
                                        var e = this,
                                            n = this.pos - this.drag;
                                        if (!(0 === n || this.prevPos === this.pos || !this.dragging && Math.abs(n) < this.threshold)) {
                                            t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = n < 0 ? 1 : -1;
                                            for (var i = this.slides, r = this.prevIndex, l = Math.abs(n), s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || i[r].offsetWidth; s !== r && l > a;) e.drag -= a * e.dir, l -= a, s = e.getIndex((r = s) + e.dir, r), a = e._getDistance(r, s) || i[r].offsetWidth;
                                            this.percent = l / a;
                                            var u, c = i[r],
                                                d = i[s],
                                                p = this.index !== s,
                                                f = r === s;
                                            [this.index, this.prevIndex].filter(function(t) { return !o([s, r], t) }).forEach(function(t) { h(i[t], "itemhidden", [e]), u = !0, f && (e.prevIndex = r) }), (this.index === r && this.prevIndex !== r || u && f) && h(i[this.index], "itemshown", [this]), p && (this.prevIndex = r, this.index = s, !f && h(c, "beforeitemhide", [this]), h(d, "beforeitemshow", [this])), (u || this.length < 3) && this._transitioner && this._transitioner.reset(), this._transitioner = this._translate(Math.abs(this.percent), c, !f && d), p && (!f && h(c, "itemhide", [this]), h(d, "itemshow", [this]))
                                        }
                                    },
                                    end: function() {
                                        if (s(p, "scroll", this.unbindMove), this.unbindMove(), s(n, c, this.end, !0), this.dragging) {
                                            if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
                                            else {
                                                var t = (r ? this.dir * (r ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                                                this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0)
                                            }
                                            d()
                                        }
                                        this.drag = this.percent = null
                                    }
                                }
                            }
                        }(t), function(t) {
                            var e = t.util,
                                n = e.$,
                                i = e.$$,
                                o = e.data,
                                r = e.html,
                                l = e.toggleClass,
                                s = e.toNumber;
                            return {
                                defaults: { selNav: !1 },
                                computed: { nav: function(t, e) { return n(t.selNav, e) }, navItemSelector: function(t) { var e = t.attrItem; return "[" + e + "],[data-" + e + "]" }, navItems: function(t, e) { return i(this.navItemSelector, e) } },
                                update: [{
                                    write: function() {
                                        var t = this;
                                        this.nav && this.length !== this.nav.children.length && r(this.nav, this.slides.map(function(e, n) { return "<li " + t.attrItem + '="' + n + '"><a href="#"></a></li>' }).join("")), l(i(this.navItemSelector, this.$el).concat(this.nav), "uk-hidden", !this.maxIndex), this.updateNav()
                                    },
                                    events: ["load", "resize"]
                                }],
                                events: [{ name: "click", delegate: function() { return this.navItemSelector }, handler: function(t) { t.preventDefault(), t.current.blur(), this.show(o(t.current, this.attrItem)) } }, { name: "itemshow", handler: "updateNav" }],
                                methods: {
                                    updateNav: function() {
                                        var t = this,
                                            e = this.getValidIndex();
                                        this.navItems.forEach(function(n) {
                                            var i = o(n, t.attrItem);
                                            l(n, t.clsActive, s(i) === e), l(n, "uk-invisible", t.finite && ("previous" === i && 0 === e || "next" === i && e >= t.maxIndex))
                                        })
                                    }
                                }
                            }
                        }(t)],
                        props: { clsActivated: Boolean, easing: String, index: Number, finite: Boolean, velocity: Number },
                        defaults: { easing: "ease", finite: !1, velocity: 1, index: 0, stack: [], percent: 0, clsActive: "uk-active", clsActivated: !1, Transitioner: !1, transitionOptions: {} },
                        computed: { duration: function(t, e) { return Di(e.offsetWidth / t.velocity) }, length: function() { return this.slides.length }, list: function(t, e) { return n(t.selList, e) }, maxIndex: function() { return this.length - 1 }, slidesSelector: function(t) { return t.selList + " > *" }, slides: function() { return d(this.list.children) } },
                        methods: {
                            show: function(t, e) {
                                var n = this;
                                if (void 0 === e && (e = !1), !this.dragging && this.length) {
                                    var i = this.stack,
                                        o = e ? 0 : i.length,
                                        l = function() { i.splice(o, 1), i.length && n.show(i.shift(), !0) };
                                    if (i[e ? "unshift" : "push"](t), !e && i.length > 1) 2 === i.length && this._transitioner.forward(Math.min(this.duration, 200));
                                    else {
                                        var a = this.index,
                                            u = s(this.slides, this.clsActive) && this.slides[a],
                                            d = this.getIndex(t, this.index),
                                            p = this.slides[d];
                                        if (u !== p) { if (this.dir = function(t, e) { return "next" === t ? 1 : "previous" === t ? -1 : t < e ? -1 : 1 }(t, a), this.prevIndex = a, this.index = d, u && h(u, "beforeitemhide", [this]), !h(p, "beforeitemshow", [this, u])) return this.index = this.prevIndex, void l(); var f = this._show(u, p, e).then(function() { return u && h(u, "itemhidden", [n]), h(p, "itemshown", [n]), new c(function(t) { r.write(function() { i.shift(), i.length ? n.show(i.shift(), !0) : n._transitioner = null, t() }) }) }); return u && h(u, "itemhide", [this]), h(p, "itemshow", [this]), f }
                                        l()
                                    }
                                }
                            },
                            getIndex: function(t, e) { return void 0 === t && (t = this.index), void 0 === e && (e = this.index), o(l(t, this.slides, e, this.finite), 0, this.maxIndex) },
                            getValidIndex: function(t, e) { return void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), this.getIndex(t, e) },
                            _show: function(t, e, n) { if (this._transitioner = this._getTransitioner(t, e, this.dir, i({ easing: n ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing }, this.transitionOptions)), !n && !t) return this._transitioner.translate(1), c.resolve(); var o = this.stack.length; return this._transitioner[o > 1 ? "forward" : "show"](o > 1 ? Math.min(this.duration, 75 + 75 / (o - 1)) : this.duration, this.percent) },
                            _getDistance: function(t, e) { return new this._getTransitioner(t, t !== e && e).getDistance() },
                            _translate: function(t, e, n) { void 0 === e && (e = this.prevIndex), void 0 === n && (n = this.index); var i = this._getTransitioner(e !== n && e, n); return i.translate(t), i },
                            _getTransitioner: function(t, e, n, i) { return void 0 === t && (t = this.prevIndex), void 0 === e && (e = this.index), void 0 === n && (n = this.dir || 1), void 0 === i && (i = this.transitionOptions), new this.Transitioner(a(t) ? this.slides[t] : t, a(e) ? this.slides[e] : e, n * (u ? -1 : 1), i) }
                        }
                    }
                }
            }

            function Di(t) { return .5 * t + 300 }

            function Ni(t) {
                if (!Ni.installed) {
                    t.use(Vi);
                    var e = t.mixin,
                        n = t.util,
                        i = n.addClass,
                        o = n.assign,
                        r = n.fastdom,
                        l = n.isNumber,
                        s = n.removeClass,
                        a = function(t) {
                            var e = t.util.css,
                                n = { slide: { show: function(t) { return [{ transform: Pi(-100 * t) }, { transform: Pi() }] }, percent: function(t) { return n.translated(t) }, translate: function(t, e) { return [{ transform: Pi(-100 * e * t) }, { transform: Pi(100 * e * (1 - t)) }] } }, translated: function(t) { return Math.abs(e(t, "transform").split(",")[4] / t.offsetWidth) || 0 } };
                            return n
                        }(t),
                        u = function(t) {
                            var e = t.util,
                                n = e.createEvent,
                                i = e.clamp,
                                o = e.css,
                                r = e.Deferred,
                                l = e.noop,
                                s = e.Promise,
                                a = e.Transition,
                                u = e.trigger;

                            function c(t, e, i) { u(t, n(e, !1, !1, i)) }
                            return function(t, e, n, u) {
                                var d = u.animation,
                                    h = u.easing,
                                    p = d.percent,
                                    f = d.translate,
                                    g = d.show;
                                void 0 === g && (g = l);
                                var m = g(n),
                                    v = new r;
                                return {
                                    dir: n,
                                    show: function(o, r, u) {
                                        var d = this;
                                        void 0 === r && (r = 0);
                                        var p = u ? "linear" : h;
                                        return o -= Math.round(o * i(r, -1, 1)), this.translate(r), c(e, "itemin", { percent: r, duration: o, timing: p, dir: n }), c(t, "itemout", { percent: 1 - r, duration: o, timing: p, dir: n }), s.all([a.start(e, m[1], o, p), a.start(t, m[0], o, p)]).then(function() { d.reset(), v.resolve() }, l), v.promise
                                    },
                                    stop: function() { return a.stop([e, t]) },
                                    cancel: function() { a.cancel([e, t]) },
                                    reset: function() { for (var n in m[0]) o([e, t], n, "") },
                                    forward: function(n, i) { return void 0 === i && (i = this.percent()), a.cancel([e, t]), this.show(n, i, !0) },
                                    translate: function(i) {
                                        var r = f(i, n);
                                        o(e, r[1]), o(t, r[0]), c(e, "itemtranslatein", { percent: i, dir: n }), c(t, "itemtranslateout", { percent: 1 - i, dir: n })
                                    },
                                    percent: function() { return p(t || e, e, n) },
                                    getDistance: function() { return t.offsetWidth }
                                }
                            }
                        }(t);
                    t.mixin.slideshow = {
                        mixins: [e.slider],
                        props: { animation: String },
                        defaults: { animation: "slide", clsActivated: "uk-transition-active", Animations: a, Transitioner: u },
                        computed: {
                            animation: function(t) {
                                var e = t.animation,
                                    n = t.Animations;
                                return o(e in n ? n[e] : n.slide, { name: e })
                            },
                            transitionOptions: function() { return { animation: this.animation } }
                        },
                        events: { "itemshow itemhide itemshown itemhidden": function(e) { t.update(null, e.target) }, itemshow: function() { l(this.prevIndex) && r.flush() }, beforeitemshow: function(t) { i(t.target, this.clsActive) }, itemshown: function(t) { i(t.target, this.clsActivated) }, itemhidden: function(t) { s(t.target, this.clsActive, this.clsActivated) } }
                    }
                }
            }

            function Bi(t) {
                if (!Bi.installed) {
                    t.use(Ni);
                    var e = t.mixin,
                        n = t.util,
                        i = n.$,
                        o = n.addClass,
                        r = n.ajax,
                        l = n.append,
                        s = n.assign,
                        a = n.attr,
                        u = n.css,
                        c = n.doc,
                        d = n.getImage,
                        h = n.html,
                        p = n.index,
                        f = n.on,
                        g = n.pointerDown,
                        m = n.pointerMove,
                        v = n.removeClass,
                        y = n.Transition,
                        w = n.trigger,
                        b = function(t) {
                            var e = t.util,
                                n = e.css;
                            return (0, e.assign)({}, t.mixin.slideshow.defaults.Animations, { fade: { show: function() { return [{ opacity: 0 }, { opacity: 1 }] }, percent: function(t) { return 1 - n(t, "opacity") }, translate: function(t) { return [{ opacity: 1 - t }, { opacity: t }] } }, scale: { show: function() { return [{ opacity: 0, transform: Li(.8) }, { opacity: 1, transform: Li(1) }] }, percent: function(t) { return 1 - n(t, "opacity") }, translate: function(t) { return [{ opacity: 1 - t, transform: Li(1 - .2 * t) }, { opacity: t, transform: Li(.8 + .2 * t) }] } } })
                        }(t);
                    t.component("lightbox-panel", {
                        mixins: [e.container, e.modal, e.togglable, e.slideshow],
                        functional: !0,
                        defaults: { preload: 1, videoAutoplay: !1, delayControls: 3e3, items: [], cls: "uk-open", clsPage: "uk-lightbox-page", selList: ".uk-lightbox-items", attrItem: "uk-lightbox-item", selClose: ".uk-close-large", pauseOnHover: !1, velocity: 2, Animations: b, template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href="#" uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>' },
                        created: function() {
                            var t = this;
                            this.$mount(l(this.container, this.template)), this.caption = i(".uk-lightbox-caption", this.$el), this.items.forEach(function() { return l(t.list, "<li></li>") })
                        },
                        events: [{ name: m + " " + g + " keydown", handler: "showControls" }, { name: "click", self: !0, delegate: function() { return this.slidesSelector }, handler: function(t) { t.preventDefault(), this.hide() } }, { name: "shown", self: !0, handler: "showControls" }, { name: "hide", self: !0, handler: function() { this.hideControls(), v(this.slides, this.clsActive), y.stop(this.slides) } }, {
                            name: "keyup",
                            el: function() { return c },
                            handler: function(t) {
                                if (this.isToggled(this.$el)) switch (t.keyCode) {
                                    case 37:
                                        this.show("previous");
                                        break;
                                    case 39:
                                        this.show("next")
                                }
                            }
                        }, { name: "beforeitemshow", handler: function(t) { this.isToggled() || (this.preventCatch = !0, t.preventDefault(), this.toggleNow(this.$el, !0), this.animation = b.scale, v(t.target, this.clsActive), this.stack.splice(1, 0, this.index)) } }, {
                            name: "itemshow",
                            handler: function(t) {
                                var e = p(t.target),
                                    n = this.getItem(e).caption;
                                u(this.caption, "display", n ? "" : "none"), h(this.caption, n);
                                for (var i = 0; i <= this.preload; i++) this.loadItem(this.getIndex(e + i)), this.loadItem(this.getIndex(e - i))
                            }
                        }, { name: "itemshown", handler: function() { this.preventCatch = !1 } }, {
                            name: "itemload",
                            handler: function(t, e) {
                                var n, o = this,
                                    l = e.source,
                                    s = e.type,
                                    u = e.alt;
                                if (this.setItem(e, "<span uk-spinner></span>"), l)
                                    if ("image" === s || l.match(/\.(jp(e)?g|png|gif|svg)$/i)) d(l).then(function(t) { return o.setItem(e, '<img width="' + t.width + '" height="' + t.height + '" src="' + l + '" alt="' + (u || "") + '">') }, function() { return o.setError(e) });
                                    else if ("video" === s || l.match(/\.(mp4|webm|ogv)$/i)) {
                                    var c = i("<video controls playsinline" + (e.poster ? ' poster="' + e.poster + '"' : "") + ' uk-video="autoplay: ' + this.videoAutoplay + '"></video>');
                                    a(c, "src", l), f(c, "error", function() { return o.setError(e) }), f(c, "loadedmetadata", function() { a(c, { width: c.videoWidth, height: c.videoHeight }), o.setItem(e, c) })
                                } else if ("iframe" === s) this.setItem(e, '<iframe class="uk-lightbox-iframe" src="' + l + '" frameborder="0" allowfullscreen></iframe>');
                                else if (n = l.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/) || l.match(/()youtu\.be\/(.*)/)) {
                                    var h = n[2],
                                        p = function(t, i) { return void 0 === t && (t = 640), void 0 === i && (i = 450), o.setItem(e, _("//www.youtube" + (n[1] || "") + ".com/embed/" + h, t, i, o.videoAutoplay)) };
                                    d("//img.youtube.com/vi/" + h + "/maxresdefault.jpg").then(function(t) {
                                        var e = t.width,
                                            n = t.height;
                                        120 === e && 90 === n ? d("//img.youtube.com/vi/" + h + "/0.jpg").then(function(t) { return p(t.width, t.height) }, p) : p(e, n)
                                    }, p)
                                } else(n = l.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)) && r("//vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(l), { responseType: "json" }).then(function(t) { var i = t.response; return o.setItem(e, _("//player.vimeo.com/video/" + n[2], i.width, i.height, o.videoAutoplay)) })
                            }
                        }],
                        methods: {
                            loadItem: function(t) {
                                void 0 === t && (t = this.index);
                                var e = this.getItem(t);
                                e.content || w(this.$el, "itemload", [e])
                            },
                            getItem: function(t) { return void 0 === t && (t = this.index), this.items[t] || {} },
                            setItem: function(e, n) {
                                s(e, { content: n });
                                var i = h(this.slides[this.items.indexOf(e)], n);
                                w(this.$el, "itemloaded", [this, i]), t.update(null, i)
                            },
                            setError: function(t) { this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>') },
                            showControls: function() { clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), o(this.$el, "uk-active", "uk-transition-active") },
                            hideControls: function() { v(this.$el, "uk-active", "uk-transition-active") }
                        }
                    })
                }

                function _(t, e, n, i) { return '<iframe src="' + t + '" width="' + e + '" height="' + n + '" style="max-width: 100%; box-sizing: border-box;" frameborder="0" allowfullscreen uk-video="autoplay: ' + i + '" uk-responsive></iframe>' }
            }

            function ji(t) {
                if (!ji.installed) {
                    var e = t.util,
                        n = e.css,
                        i = e.Dimensions,
                        o = e.each,
                        r = e.getImage,
                        l = e.includes,
                        s = e.isNumber,
                        a = e.isUndefined,
                        u = e.toFloat,
                        c = e.win,
                        d = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity"];
                    t.mixin.parallax = {
                        props: d.reduce(function(t, e) { return t[e] = "list", t }, { media: "media" }),
                        defaults: d.reduce(function(t, e) { return t[e] = void 0, t }, { media: !1 }),
                        computed: {
                            props: function(t, e) {
                                var i = this;
                                return d.reduce(function(o, r) {
                                    if (a(t[r])) return o;
                                    var s, c, d, h = r.match(/color/i),
                                        p = h || "opacity" === r,
                                        f = t[r].slice(0);
                                    p && n(e, r, ""), f.length < 2 && f.unshift(("scale" === r ? 1 : p ? n(e, r) : 0) || 0);
                                    var g = l(f.join(""), "%") ? "%" : "px";
                                    if (h) {
                                        var m = e.style.color;
                                        f = f.map(function(t) { return n(n(e, "color", t), "color").split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(function(t) { return u(t) }) }), e.style.color = m
                                    } else f = f.map(u);
                                    if (r.match(/^bg/))
                                        if (n(e, "background-position-" + r[2], ""), c = n(e, "backgroundPosition").split(" ")["x" === r[2] ? 0 : 1], i.covers) {
                                            var v = Math.min.apply(Math, f),
                                                y = Math.max.apply(Math, f),
                                                w = f.indexOf(v) < f.indexOf(y);
                                            d = y - v, f = f.map(function(t) { return t - (w ? v : y) }), s = (w ? -d : 0) + "px"
                                        } else s = c;
                                    return o[r] = { steps: f, unit: g, pos: s, bgPos: c, diff: d }, o
                                }, {})
                            },
                            bgProps: function() { var t = this; return ["bgx", "bgy"].filter(function(e) { return e in t.props }) },
                            covers: function(t, e) { return "cover" === n("" !== e.style.backgroundSize ? n(e, "backgroundSize", "") : e, "backgroundSize") }
                        },
                        disconnected: function() { delete this._image },
                        update: [{
                            read: function(t) {
                                var e = this;
                                if (t.active = !this.media || c.matchMedia(this.media).matches, t.image && (t.image.dimEl = { width: this.$el.offsetWidth, height: this.$el.offsetHeight }), !("image" in t) && this.covers && this.bgProps.length) {
                                    var i = n(this.$el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
                                    i && (t.image = !1, r(i).then(function(n) { t.image = { width: n.naturalWidth, height: n.naturalHeight }, e.$emit() }))
                                }
                            },
                            write: function(t) {
                                var e = this,
                                    o = t.image;
                                if (o)
                                    if (t.active) {
                                        var r = o.dimEl,
                                            l = i.cover(o, r);
                                        this.bgProps.forEach(function(t) {
                                            var n = e.props[t],
                                                s = n.diff,
                                                a = n.bgPos,
                                                u = n.steps,
                                                c = "bgy" === t ? "height" : "width",
                                                d = l[c] - r[c];
                                            if (a.match(/%$|0px/)) {
                                                if (d < s) r[c] = l[c] + s - d;
                                                else if (d > s) {
                                                    var h = parseFloat(a);
                                                    h && (e.props[t].steps = u.map(function(t) { return t - (d - s) / (100 / h) }))
                                                }
                                                l = i.cover(o, r)
                                            }
                                        }), n(this.$el, { backgroundSize: l.width + "px " + l.height + "px", backgroundRepeat: "no-repeat" })
                                    } else n(this.$el, { backgroundSize: "", backgroundRepeat: "" })
                            },
                            events: ["load", "resize"]
                        }],
                        methods: {
                            reset: function() {
                                var t = this;
                                o(this.getCss(0), function(e, i) { return n(t.$el, i, "") })
                            },
                            getCss: function(t) {
                                var e = this.props,
                                    n = !1;
                                return Object.keys(e).reduce(function(i, o) {
                                    var r = e[o],
                                        l = r.steps,
                                        s = r.unit,
                                        a = r.pos,
                                        c = p(l, t);
                                    switch (o) {
                                        case "x":
                                        case "y":
                                            if (n) break;
                                            var d = ["x", "y"].map(function(n) { return o === n ? c + s : e[n] ? p(e[n].steps, t) + e[n].unit : 0 });
                                            n = i.transform += " translate3d(" + d[0] + ", " + d[1] + ", 0)";
                                            break;
                                        case "rotate":
                                            i.transform += " rotate(" + c + "deg)";
                                            break;
                                        case "scale":
                                            i.transform += " scale(" + c + ")";
                                            break;
                                        case "bgy":
                                        case "bgx":
                                            i["background-position-" + o[2]] = "calc(" + a + " + " + (c + s) + ")";
                                            break;
                                        case "color":
                                        case "backgroundColor":
                                        case "borderColor":
                                            var f = h(l, t),
                                                g = f[1],
                                                m = f[2];
                                            i[o] = "rgba(" + f[0].map(function(t, e) { return t += m * (g[e] - t), 3 === e ? u(t) : parseInt(t, 10) }).join(",") + ")";
                                            break;
                                        case "blur":
                                            i.filter += " blur(" + c + "px)";
                                            break;
                                        case "hue":
                                            i.filter += " hue-rotate(" + c + "deg)";
                                            break;
                                        case "fopacity":
                                            i.filter += " opacity(" + c + "%)";
                                            break;
                                        case "grayscale":
                                        case "invert":
                                        case "saturate":
                                        case "sepia":
                                            i.filter += " " + o + "(" + c + "%)";
                                            break;
                                        default:
                                            i[o] = c
                                    }
                                    return i
                                }, { transform: "", filter: "" })
                            }
                        }
                    }
                }

                function h(t, e) {
                    var n = t.length - 1,
                        i = Math.min(Math.floor(n * e), n - 1),
                        o = t.slice(i, i + 2);
                    return o.push(1 === e ? 1 : e % (1 / n) * n), o
                }

                function p(t, e) {
                    var n = h(t, e),
                        i = n[0],
                        o = n[1],
                        r = n[2];
                    return (s(i) ? i + Math.abs(i - o) * r * (i < o ? 1 : -1) : +o).toFixed(2)
                }
            }

            function Ri(t) {
                var e = t.util.removeClass;
                return {
                    update: [{
                        write: function() {
                            if (!this.stack.length && !this.dragging) {
                                var t = this.getValidIndex();
                                delete this.index, e(this.slides, this.clsActive, this.clsActivated), this.show(t)
                            }
                        },
                        events: ["load", "resize"]
                    }]
                }
            }

            function Ui(t, e) {
                t.use(ji);
                var n = t.util,
                    i = n.closest,
                    o = n.css,
                    r = n.endsWith,
                    l = n.noop,
                    s = n.Transition;
                return {
                    mixins: [t.mixin.parallax],
                    computed: { item: function() { var n = t.getComponent(i(this.$el, ".uk-" + e), e); return n && i(this.$el, n.slidesSelector) } },
                    events: [{ name: "itemshown", self: !0, el: function() { return this.item }, handler: function() { o(this.$el, this.getCss(.5)) } }, {
                        name: "itemin itemout",
                        self: !0,
                        el: function() { return this.item },
                        handler: function(t) {
                            var e = t.type,
                                n = t.detail,
                                i = n.percent,
                                r = n.duration,
                                c = n.timing,
                                d = n.dir;
                            s.cancel(this.$el), o(this.$el, this.getCss(u(e, d, i))), s.start(this.$el, this.getCss(a(e) ? .5 : d > 0 ? 1 : 0), r, c).catch(l)
                        }
                    }, { name: "transitioncanceled transitionend", self: !0, el: function() { return this.item }, handler: function() { s.cancel(this.$el) } }, {
                        name: "itemtranslatein itemtranslateout",
                        self: !0,
                        el: function() { return this.item },
                        handler: function(t) {
                            var e = t.type,
                                n = t.detail,
                                i = n.percent,
                                r = n.dir;
                            s.cancel(this.$el), o(this.$el, this.getCss(u(e, r, i)))
                        }
                    }]
                };

                function a(t) { return r(t, "in") }

                function u(t, e, n) { return n /= 2, a(t) ? e < 0 ? 1 - n : n : e < 0 ? n : 1 - n }
            }
            return Pn.version = "3.0.0-beta.40",
                function(t) { t.mixin.class = Dn, t.mixin.container = Nn, t.mixin.modal = jn, t.mixin.position = Rn, t.mixin.togglable = Bn }(Pn),
                function(t) { t.use(Oi), t.use(Un), t.use($n), t.use(Ai), t.use(Hn), t.use(zn), t.use(Gn), t.use(Zn), t.use(Qn), t.use(Yn), t.use(mi), t.use(qn), t.use(Wn), t.use(gi), t.use(vi), t.use(yi), t.use(wi), t.use(bi), t.use(_i), t.use(Ci), t.use(ki), t.use(xi), t.use(Ti), t.use(Ei), t.use(fi), t.use(Si), t.use(Mi), t.use(Fn) }(Pn), Pn.use(function t(e) {
                    if (!t.installed) {
                        var n = e.util,
                            i = n.$,
                            o = n.doc,
                            r = n.empty,
                            l = n.html;
                        e.component("countdown", {
                            mixins: [e.mixin.class],
                            attrs: !0,
                            props: { date: String, clsWrapper: String },
                            defaults: { date: "", clsWrapper: ".uk-countdown-%unit%" },
                            computed: { date: function(t) { return Date.parse(t.date) }, days: function(t, e) { return i(t.clsWrapper.replace("%unit%", "days"), e) }, hours: function(t, e) { return i(t.clsWrapper.replace("%unit%", "hours"), e) }, minutes: function(t, e) { return i(t.clsWrapper.replace("%unit%", "minutes"), e) }, seconds: function(t, e) { return i(t.clsWrapper.replace("%unit%", "seconds"), e) }, units: function() { var t = this; return ["days", "hours", "minutes", "seconds"].filter(function(e) { return t[e] }) } },
                            connected: function() { this.start() },
                            disconnected: function() {
                                var t = this;
                                this.stop(), this.units.forEach(function(e) { return r(t[e]) })
                            },
                            events: [{ name: "visibilitychange", el: o, handler: function() { o.hidden ? this.stop() : this.start() } }],
                            update: {
                                write: function() {
                                    var t, e = this,
                                        n = { total: t = this.date - Date.now(), seconds: t / 1e3 % 60, minutes: t / 1e3 / 60 % 60, hours: t / 1e3 / 60 / 60 % 24, days: t / 1e3 / 60 / 60 / 24 };
                                    n.total <= 0 && (this.stop(), n.days = n.hours = n.minutes = n.seconds = 0), this.units.forEach(function(t) {
                                        var i = String(Math.floor(n[t])),
                                            o = e[t];
                                        o.textContent !== (i = i.length < 2 ? "0" + i : i) && ((i = i.split("")).length !== o.children.length && l(o, i.map(function() { return "<span></span>" }).join("")), i.forEach(function(t, e) { return o.children[e].textContent = t }))
                                    })
                                }
                            },
                            methods: {
                                start: function() {
                                    var t = this;
                                    this.stop(), this.date && this.units.length && (this.$emit(), this.timer = setInterval(function() { return t.$emit() }, 1e3))
                                },
                                stop: function() { this.timer && (clearInterval(this.timer), this.timer = null) }
                            }
                        })
                    }
                }), Pn.use(function t(e) {
                    if (!t.installed) {
                        var n = e.util,
                            i = n.addClass,
                            o = n.css,
                            r = n.scrolledOver,
                            l = n.sortBy,
                            s = n.toFloat;
                        e.component("grid-parallax", e.components.grid.extend({
                            props: { target: String, translate: Number },
                            defaults: { target: !1, translate: 150 },
                            computed: { translate: function(t) { return Math.abs(t.translate) } },
                            init: function() { i(this.$el, "uk-grid") },
                            disconnected: function() { this.reset(), o(this.$el, "marginBottom", "") },
                            update: [{ read: function(t) { var e = t.rows; return { columns: e && e[0] && e[0].length || 0, rows: e && e.map(function(t) { return l(t, "offsetLeft") }) } }, write: function(t) { o(this.$el, "marginBottom", t.columns > 1 ? this.translate + s(o(o(this.$el, "marginBottom", ""), "marginBottom")) : "") }, events: ["load", "resize"] }, {
                                read: function() { return { scrolled: r(this.$el) * this.translate } },
                                write: function(t) {
                                    var e = t.rows,
                                        n = t.scrolled;
                                    if (!e || 1 === t.columns || !n) return this.reset();
                                    e.forEach(function(t) { return t.forEach(function(t, e) { return o(t, "transform", "translateY(" + (e % 2 ? n : n / 8) + "px)") }) })
                                },
                                events: ["scroll", "load", "resize"]
                            }],
                            methods: { reset: function() { o(this.$el.children, "transform", "") } }
                        })), e.components.gridParallax.options.update.unshift({ read: function() { this.reset() }, events: ["load", "resize"] })
                    }
                }), Pn.use(function t(e) {
                    if (!t.installed) {
                        e.use(Bi);
                        var n = e.util,
                            i = n.$$,
                            o = n.assign,
                            r = n.data,
                            l = n.index,
                            s = e.components.lightboxPanel.options;
                        e.component("lightbox", {
                            attrs: !0,
                            props: o({ toggle: String }, s.props),
                            defaults: o({ toggle: "a" }, Object.keys(s.props).reduce(function(t, e) { return t[e] = s.defaults[e], t }, {})),
                            computed: { toggles: function(t, e) { return i(t.toggle, e) } },
                            disconnected: function() { this._destroy() },
                            events: [{ name: "click", delegate: function() { return this.toggle + ":not(.uk-disabled)" }, handler: function(t) { t.preventDefault(), t.current.blur(), this.show(l(this.toggles, t.current)) } }],
                            update: function(t) {
                                var e, n;
                                this.panel && this.animation && (this.panel.$props.animation = this.animation, this.panel.$emit()), !this.panel || t.toggles && (e = t.toggles).length === (n = this.toggles).length && e.every(function(t, e) { return t !== n[e] }) || (t.toggles = this.toggles, this._destroy(), this._init())
                            },
                            methods: { _init: function() { return this.panel = this.panel || e.lightboxPanel(o({}, this.$props, { items: this.toggles.reduce(function(t, e) { return t.push(["href", "caption", "type", "poster", "alt"].reduce(function(t, n) { return t["href" === n ? "source" : n] = r(e, n), t }, {})), t }, []) })) }, _destroy: function() { this.panel && (this.panel.$destroy(!0), this.panel = null) }, show: function(t) { return this.panel || this._init(), this.panel.show(t) }, hide: function() { return this.panel && this.panel.hide() } }
                        })
                    }
                }), Pn.use(function t(e) {
                    var n;
                    if (!t.installed) {
                        var i = e.util,
                            o = i.append,
                            r = i.closest,
                            l = i.css,
                            s = i.each,
                            a = i.pointerLeave,
                            u = i.remove,
                            c = i.toFloat,
                            d = i.Transition,
                            h = i.trigger,
                            p = {};
                        e.component("notification", {
                            functional: !0,
                            args: ["message", "status"],
                            defaults: { message: "", status: "", timeout: 5e3, group: null, pos: "top-center", clsClose: "uk-notification-close", clsMsg: "uk-notification-message" },
                            created: function() {
                                p[this.pos] || (p[this.pos] = o(e.container, '<div class="uk-notification uk-notification-' + this.pos + '"></div>'));
                                var t = l(p[this.pos], "display", "block");
                                this.$mount(o(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href="#" class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"))
                            },
                            ready: function() {
                                var t = this,
                                    e = c(l(this.$el, "marginBottom"));
                                d.start(l(this.$el, { opacity: 0, marginTop: -this.$el.offsetHeight, marginBottom: 0 }), { opacity: 1, marginTop: 0, marginBottom: e }).then(function() { t.timeout && (t.timer = setTimeout(t.close, t.timeout)) })
                            },
                            events: (n = { click: function(t) { r(t.target, 'a[href="#"]') && t.preventDefault(), this.close() } }, n[i.pointerEnter] = function() { this.timer && clearTimeout(this.timer) }, n[a] = function() { this.timeout && (this.timer = setTimeout(this.close, this.timeout)) }, n),
                            methods: {
                                close: function(t) {
                                    var e = this,
                                        n = function() { h(e.$el, "close", [e]), u(e.$el), p[e.pos].children.length || l(p[e.pos], "display", "none") };
                                    this.timer && clearTimeout(this.timer), t ? n() : d.start(this.$el, { opacity: 0, marginTop: -this.$el.offsetHeight, marginBottom: 0 }).then(n)
                                }
                            }
                        }), e.notification.closeAll = function(t, n) { s(e.instances, function(e) { "notification" !== e.$options.name || t && t !== e.group || e.close(n) }) }
                    }
                }), Pn.use(function t(e) {
                    if (!t.installed) {
                        e.use(ji);
                        var n = e.util,
                            i = n.clamp,
                            o = n.css,
                            r = n.scrolledOver,
                            l = n.query;
                        e.component("parallax", {
                            mixins: [e.mixin.parallax],
                            props: { target: String, viewport: Number, easing: Number },
                            defaults: { target: !1, viewport: 1, easing: 1 },
                            computed: { target: function(t, e) { var n = t.target; return n && l(n, e) || e } },
                            update: [{
                                read: function(t) { return { prev: t.percent, percent: function(t, e) { return i(t * (1 - (e - e * t))) }(r(this.target) / (this.viewport || 1), this.easing) } },
                                write: function(t, e) {
                                    var n = t.prev,
                                        i = t.percent;
                                    "scroll" !== e.type && (n = !1), t.active ? n !== i && o(this.$el, this.getCss(i)) : this.reset()
                                },
                                events: ["scroll", "load", "resize"]
                            }]
                        })
                    }
                }), Pn.use(function t(e) {
                    if (!t.installed) {
                        e.use(Vi);
                        var n = e.mixin,
                            i = e.util,
                            o = i.$,
                            r = i.$$,
                            l = i.addClass,
                            s = i.css,
                            a = i.data,
                            u = i.includes,
                            c = i.isNumeric,
                            d = i.isUndefined,
                            h = i.toggleClass,
                            p = i.toFloat,
                            f = function(t) {
                                var e = t.util,
                                    n = e.clamp,
                                    i = e.createEvent,
                                    o = e.css,
                                    r = e.Deferred,
                                    l = e.includes,
                                    s = e.index,
                                    a = e.isRtl,
                                    u = e.noop,
                                    c = e.sortBy,
                                    d = e.toNodes,
                                    h = e.Transition,
                                    p = e.trigger,
                                    f = (0, e.assign)(function(t, e, i, d) {
                                        var p = d.center,
                                            v = d.easing,
                                            y = d.list,
                                            w = new r,
                                            b = t ? f.getLeft(t, y, p) : f.getLeft(e, y, p) + e.offsetWidth * i,
                                            _ = e ? f.getLeft(e, y, p) : b + t.offsetWidth * i * (a ? -1 : 1);
                                        return {
                                            dir: i,
                                            show: function(e, o, r) { void 0 === o && (o = 0); var l = r ? "linear" : v; return e -= Math.round(e * n(o, -1, 1)), this.translate(o), t && this.updateTranslates(), o = t ? o : n(o, 0, 1), g(this.getItemIn(), "itemin", { percent: o, duration: e, timing: l, dir: i }), t && g(this.getItemIn(!0), "itemout", { percent: 1 - o, duration: e, timing: l, dir: i }), h.start(y, { transform: Pi(-_ * (a ? -1 : 1), "px") }, e, l).then(w.resolve, u), w.promise },
                                            stop: function() { return h.stop(y) },
                                            cancel: function() { h.cancel(y) },
                                            reset: function() { o(y, "transform", "") },
                                            forward: function(t, e) { return void 0 === e && (e = this.percent()), h.cancel(y), this.show(t, e, !0) },
                                            translate: function(e) {
                                                var r = this.getDistance() * i * (a ? -1 : 1);
                                                o(y, "transform", Pi(n(r - r * e - _, -f.getWidth(y), y.offsetWidth) * (a ? -1 : 1), "px")), this.updateTranslates(), t && (e = n(e, -1, 1), g(this.getItemIn(), "itemtranslatein", { percent: e, dir: i }), g(this.getItemIn(!0), "itemtranslateout", { percent: 1 - e, dir: i }))
                                            },
                                            percent: function() { return Math.abs((o(y, "transform").split(",")[4] * (a ? -1 : 1) + b) / (_ - b)) },
                                            getDistance: function() { return Math.abs(_ - b) },
                                            getItemIn: function(e) {
                                                void 0 === e && (e = !1);
                                                var n = this.getActives(),
                                                    o = c(m(y), "offsetLeft"),
                                                    r = s(o, n[i * (e ? -1 : 1) > 0 ? n.length - 1 : 0]);
                                                return ~r && o[r + (t && !e ? i : 0)]
                                            },
                                            getActives: function() { var n = f.getLeft(t || e, y, p); return c(m(y).filter(function(t) { var e = f.getElLeft(t, y); return e >= n && e + t.offsetWidth <= y.offsetWidth + n }), "offsetLeft") },
                                            updateTranslates: function() {
                                                var t = this.getActives();
                                                m(y).forEach(function(n) {
                                                    var i = l(t, n);
                                                    g(n, "itemtranslate" + (i ? "in" : "out"), { percent: i ? 1 : 0, dir: n.offsetLeft <= e.offsetLeft ? 1 : -1 })
                                                })
                                            }
                                        }
                                    }, { getLeft: function(t, e, n) { var i = this.getElLeft(t, e); return n ? i - this.center(t, e) : Math.min(i, this.getMax(e)) }, getMax: function(t) { return Math.max(0, this.getWidth(t) - t.offsetWidth) }, getWidth: function(t) { return m(t).reduce(function(t, e) { return e.offsetWidth + t }, 0) }, getMaxWidth: function(t) { return m(t).reduce(function(t, e) { return Math.max(t, e.offsetWidth) }, 0) }, center: function(t, e) { return e.offsetWidth / 2 - t.offsetWidth / 2 }, getElLeft: function(t, e) { return (t.offsetLeft + (a ? t.offsetWidth - e.offsetWidth : 0)) * (a ? -1 : 1) } });

                                function g(t, e, n) { p(t, i(e, !1, !1, n)) }

                                function m(t) { return d(t.children) }
                                return f
                            }(e);
                        e.component("slider-parallax", Ui(e, "slider")), e.component("slider", {
                            mixins: [n.class, n.slider, Ri(e)],
                            props: { center: Boolean, sets: Boolean },
                            defaults: { center: !1, sets: !1, attrItem: "uk-slider-item", selList: ".uk-slider-items", selNav: ".uk-slider-nav", clsContainer: "uk-slider-container", Transitioner: f },
                            computed: {
                                avgWidth: function() { return f.getWidth(this.list) / this.length },
                                finite: function(t) { return t.finite || f.getWidth(this.list) < this.list.offsetWidth + f.getMaxWidth(this.list) + this.center },
                                maxIndex: function() {
                                    if (!this.finite || this.center && !this.sets) return this.length - 1;
                                    if (this.center) return this.sets[this.sets.length - 1];
                                    s(this.slides, "order", "");
                                    for (var t = f.getMax(this.list), e = this.length; e--;)
                                        if (f.getElLeft(this.list.children[e], this.list) < t) return Math.min(e + 1, this.length - 1);
                                    return 0
                                },
                                sets: function(t) {
                                    var e = this,
                                        n = t.sets,
                                        i = this.list.offsetWidth / (this.center ? 2 : 1),
                                        o = 0,
                                        r = i,
                                        l = 0;
                                    return (n = n && this.slides.reduce(function(t, n, s) {
                                        var a = n.offsetWidth;
                                        if (l + a > o && (!e.center && s > e.maxIndex && (s = e.maxIndex), !u(t, s))) {
                                            var c = e.slides[s + 1];
                                            e.center && c && a < r - c.offsetWidth / 2 ? r -= a : (r = i, t.push(s), o = l + i + (e.center ? a / 2 : 0))
                                        }
                                        return l += a, t
                                    }, [])) && n.length && n
                                },
                                transitionOptions: function() { return { center: this.center, list: this.list } }
                            },
                            connected: function() { h(this.$el, this.clsContainer, !o("." + this.clsContainer, this.$el)) },
                            update: {
                                write: function() {
                                    var t = this;
                                    r("[" + this.attrItem + "],[data-" + this.attrItem + "]", this.$el).forEach(function(e) {
                                        var n = a(e, t.attrItem);
                                        t.maxIndex && h(e, "uk-hidden", c(n) && (t.sets && !u(t.sets, p(n)) || n > t.maxIndex))
                                    })
                                },
                                events: ["load", "resize"]
                            },
                            events: {
                                beforeitemshow: function(t) {
                                    !this.dragging && this.sets && this.stack.length < 2 && !u(this.sets, this.index) && (this.index = this.getValidIndex());
                                    var e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                                    if (!this.dragging && e > 1) {
                                        for (var n = 0; n < e; n++) this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                                        t.preventDefault()
                                    } else this.duration = Di(this.avgWidth / this.velocity) * ((this.dir < 0 || !this.slides[this.prevIndex] ? this.slides[this.index] : this.slides[this.prevIndex]).offsetWidth / this.avgWidth), this.reorder()
                                },
                                itemshow: function() {!d(this.prevIndex) && l(this._getTransitioner().getItemIn(), this.clsActive) },
                                itemshown: function() {
                                    var t = this,
                                        e = this._getTransitioner(this.index).getActives();
                                    this.slides.forEach(function(n) { return h(n, t.clsActive, u(e, n)) }), (!this.sets || u(this.sets, p(this.index))) && this.slides.forEach(function(n) { return h(n, t.clsActivated, u(e, n)) })
                                }
                            },
                            methods: {
                                reorder: function() {
                                    var t = this;
                                    if (s(this.slides, "order", ""), !this.finite) {
                                        var e = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                                        if (this.slides.forEach(function(n, i) { return s(n, "order", t.dir > 0 && i < e ? 1 : t.dir < 0 && i >= t.index ? -1 : "") }), this.center)
                                            for (var n = this.list.offsetWidth / 2 - this.slides[e].offsetWidth / 2, i = 0; n > 0;) {
                                                var o = t.getIndex(--i + e, e),
                                                    r = t.slides[o];
                                                s(r, "order", o > e ? -2 : -1), n -= r.offsetWidth
                                            }
                                    }
                                },
                                getValidIndex: function(t, e) {
                                    var n;
                                    if (void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t;
                                    do {
                                        if (u(this.sets, t)) return t;
                                        n = t, t = this.getIndex(t + this.dir, e)
                                    } while (t !== n);
                                    return t
                                }
                            }
                        })
                    }
                }), Pn.use(function t(e) {
                    if (!t.installed) {
                        e.use(Ni);
                        var n = e.mixin,
                            i = e.util.height,
                            o = function(t) {
                                var e = t.util,
                                    n = e.css,
                                    i = (0, e.assign)({}, t.mixin.slideshow.defaults.Animations, { fade: { show: function() { return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }] }, percent: function(t) { return 1 - n(t, "opacity") }, translate: function(t) { return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }] } }, scale: { show: function() { return [{ opacity: 0, transform: Li(1.5), zIndex: 0 }, { zIndex: -1 }] }, percent: function(t) { return 1 - n(t, "opacity") }, translate: function(t) { return [{ opacity: 1 - t, transform: Li(1 + .5 * t), zIndex: 0 }, { zIndex: -1 }] } }, pull: { show: function(t) { return t < 0 ? [{ transform: Pi(30), zIndex: -1 }, { transform: Pi(), zIndex: 0 }] : [{ transform: Pi(-100), zIndex: 0 }, { transform: Pi(), zIndex: -1 }] }, percent: function(t, e, n) { return n < 0 ? 1 - i.translated(e) : i.translated(t) }, translate: function(t, e) { return e < 0 ? [{ transform: Pi(30 * t), zIndex: -1 }, { transform: Pi(-100 * (1 - t)), zIndex: 0 }] : [{ transform: Pi(100 * -t), zIndex: 0 }, { transform: Pi(30 * (1 - t)), zIndex: -1 }] } }, push: { show: function(t) { return t < 0 ? [{ transform: Pi(100), zIndex: 0 }, { transform: Pi(), zIndex: -1 }] : [{ transform: Pi(-30), zIndex: -1 }, { transform: Pi(), zIndex: 0 }] }, percent: function(t, e, n) { return n > 0 ? 1 - i.translated(e) : i.translated(t) }, translate: function(t, e) { return e < 0 ? [{ transform: Pi(100 * t), zIndex: 0 }, { transform: Pi(-30 * (1 - t)), zIndex: -1 }] : [{ transform: Pi(-30 * t), zIndex: -1 }, { transform: Pi(100 * (1 - t)), zIndex: 0 }] } } });
                                return i
                            }(e);
                        e.component("slideshow-parallax", Ui(e, "slideshow")), e.component("slideshow", {
                            mixins: [n.class, n.slideshow, Ri(e)],
                            props: { ratio: String, minHeight: Boolean, maxHeight: Boolean },
                            defaults: { ratio: "16:9", minHeight: !1, maxHeight: !1, selList: ".uk-slideshow-items", attrItem: "uk-slideshow-item", selNav: ".uk-slideshow-nav", Animations: o },
                            update: {
                                read: function() {
                                    var t = this.ratio.split(":").map(Number),
                                        e = t[1];
                                    return e = e * this.$el.offsetWidth / t[0], this.minHeight && (e = Math.max(this.minHeight, e)), this.maxHeight && (e = Math.min(this.maxHeight, e)), { height: e }
                                },
                                write: function(t) { i(this.list, Math.floor(t.height)) },
                                events: ["load", "resize"]
                            }
                        })
                    }
                }), Pn.use(function t(e) {
                    var n;
                    if (!t.installed) {
                        var i = e.util,
                            o = i.addClass,
                            r = i.after,
                            l = i.assign,
                            s = i.append,
                            a = i.attr,
                            u = i.before,
                            c = i.closest,
                            d = i.css,
                            h = i.doc,
                            p = i.docEl,
                            f = i.height,
                            g = i.fastdom,
                            m = i.getPos,
                            v = i.includes,
                            y = i.index,
                            w = i.isInput,
                            b = i.noop,
                            _ = i.offset,
                            C = i.off,
                            k = i.on,
                            x = i.pointerMove,
                            T = i.pointerUp,
                            I = i.position,
                            E = i.preventClick,
                            S = i.Promise,
                            M = i.remove,
                            O = i.removeClass,
                            A = i.toggleClass,
                            P = i.toNodes,
                            L = i.Transition,
                            V = i.trigger,
                            D = i.win,
                            N = i.within;
                        e.component("sortable", {
                            mixins: [e.mixin.class],
                            props: { group: String, animation: Number, threshold: Number, clsItem: String, clsPlaceholder: String, clsDrag: String, clsDragState: String, clsBase: String, clsNoDrag: String, clsEmpty: String, clsCustom: String, handle: String },
                            defaults: { group: !1, animation: 150, threshold: 5, clsItem: "uk-sortable-item", clsPlaceholder: "uk-sortable-placeholder", clsDrag: "uk-sortable-drag", clsDragState: "uk-drag", clsBase: "uk-sortable", clsNoDrag: "uk-sortable-nodrag", clsEmpty: "uk-sortable-empty", clsCustom: "", handle: !1 },
                            init: function() {
                                var t = this;
                                ["init", "start", "move", "end"].forEach(function(e) {
                                    var n = t[e];
                                    t[e] = function(e) {
                                        t.scrollY = D.pageYOffset;
                                        var i = m(e);
                                        t.pos = { x: i.x, y: i.y }, n(e)
                                    }
                                })
                            },
                            events: (n = {}, n[i.pointerDown] = "init", n),
                            update: {
                                write: function() {
                                    if (this.clsEmpty && A(this.$el, this.clsEmpty, !this.$el.children.length), this.drag) {
                                        _(this.drag, { top: this.pos.y + this.origin.top, left: this.pos.x + this.origin.left });
                                        var t, e = _(this.drag).top,
                                            n = e + this.drag.offsetHeight;
                                        e > 0 && e < this.scrollY ? t = this.scrollY - 5 : n < f(h) && n > f(D) + this.scrollY && (t = this.scrollY + 5), t && setTimeout(function() { return D.scrollTo(D.scrollX, t) }, 5)
                                    }
                                }
                            },
                            methods: {
                                init: function(t) {
                                    var e = t.target,
                                        n = t.button,
                                        i = t.defaultPrevented,
                                        o = P(this.$el.children).filter(function(t) { return N(e, t) })[0];
                                    !o || w(t.target) || this.handle && !N(e, this.handle) || n > 0 || N(e, "." + this.clsNoDrag) || i || (t.preventDefault(), this.touched = [this], this.placeholder = o, this.origin = l({ target: e, index: y(o) }, this.pos), k(p, x, this.move), k(p, T, this.end), k(D, "scroll", this.scroll), this.threshold || this.start(t))
                                },
                                start: function(t) {
                                    this.drag = s(e.container, this.placeholder.outerHTML.replace(/^<li/i, "<div").replace(/li>$/i, "div>")), d(this.drag, l({ boxSizing: "border-box", width: this.placeholder.offsetWidth, height: this.placeholder.offsetHeight }, d(this.placeholder, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]))), a(this.drag, "uk-no-boot", ""), o(this.drag, this.clsDrag, this.clsCustom), f(this.drag.firstElementChild, f(this.placeholder.firstElementChild));
                                    var n = _(this.placeholder);
                                    l(this.origin, { left: n.left - this.pos.x, top: n.top - this.pos.y }), o(this.placeholder, this.clsPlaceholder), o(this.$el.children, this.clsItem), o(p, this.clsDragState), V(this.$el, "start", [this, this.placeholder, this.drag]), this.move(t)
                                },
                                move: function(t) {
                                    if (this.drag) {
                                        this.$emit();
                                        var e = "mousemove" === t.type ? t.target : h.elementFromPoint(this.pos.x - h.body.scrollLeft, this.pos.y - h.body.scrollTop),
                                            n = B(e),
                                            i = B(this.placeholder),
                                            o = n !== i;
                                        if (n && !N(e, this.placeholder) && (!o || n.group && n.group === i.group)) {
                                            if (e = n.$el === e.parentNode && e || P(n.$el.children).filter(function(t) { return N(e, t) })[0], o) i.remove(this.placeholder);
                                            else if (!e) return;
                                            n.insert(this.placeholder, e), v(this.touched, n) || this.touched.push(n)
                                        }
                                    } else(Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
                                },
                                scroll: function() {
                                    var t = D.pageYOffset;
                                    t !== this.scrollY && (this.pos.y += t - this.scrollY, this.scrollY = t, this.$emit())
                                },
                                end: function(t) {
                                    if (C(p, x, this.move), C(p, T, this.end), C(D, "scroll", this.scroll), this.drag) {
                                        E();
                                        var e = B(this.placeholder);
                                        this === e ? this.origin.index !== y(this.placeholder) && V(this.$el, "moved", [this, this.placeholder]) : (V(e.$el, "added", [e, this.placeholder]), V(this.$el, "removed", [this, this.placeholder])), V(this.$el, "stop", [this]), M(this.drag), this.drag = null;
                                        var n = this.touched.map(function(t) { return t.clsPlaceholder + " " + t.clsItem }).join(" ");
                                        this.touched.forEach(function(t) { return O(t.$el.children, n) }), O(p, this.clsDragState)
                                    } else "mouseup" !== t.type && N(t.target, "a[href]") && (location.href = c(t.target, "a[href]").href)
                                },
                                insert: function(t, e) {
                                    var n = this;
                                    o(this.$el.children, this.clsItem);
                                    var i = function() { e ? !N(t, n.$el) || function(t, e) { return t.parentNode === e.parentNode && y(t) > y(e) }(t, e) ? u(e, t) : r(e, t) : s(n.$el, t) };
                                    this.animation ? this.animate(i) : i()
                                },
                                remove: function(t) { N(t, this.$el) && (this.animation ? this.animate(function() { return M(t) }) : M(t)) },
                                animate: function(t) {
                                    var e = this,
                                        n = [],
                                        i = P(this.$el.children),
                                        o = { position: "", width: "", height: "", pointerEvents: "", top: "", left: "", bottom: "", right: "" };
                                    i.forEach(function(t) { n.push(l({ position: "absolute", pointerEvents: "none", width: t.offsetWidth, height: t.offsetHeight }, I(t))) }), t(), i.forEach(L.cancel), d(this.$el.children, o), this.$update("update", !0), g.flush(), d(this.$el, "minHeight", f(this.$el));
                                    var r = i.map(function(t) { return I(t) });
                                    S.all(i.map(function(t, i) { return L.start(d(t, n[i]), r[i], e.animation) })).then(function() { d(e.$el, "minHeight", ""), d(i, o), e.$update("update", !0), g.flush() }, b)
                                }
                            }
                        })
                    }

                    function B(t) { return t && (e.getComponent(t, "sortable") || B(t.parentNode)) }
                }), Pn.use(function t(e) {
                    var n;
                    if (!t.installed) {
                        var i = e.util,
                            o = e.mixin,
                            r = i.append,
                            l = i.attr,
                            s = i.doc,
                            a = i.flipPosition,
                            u = i.hasAttr,
                            c = i.includes,
                            d = i.isTouch,
                            h = i.isVisible,
                            p = i.matches,
                            f = i.on,
                            g = i.pointerDown,
                            m = i.pointerLeave,
                            v = i.remove,
                            y = i.within,
                            w = [];
                        e.component("tooltip", {
                            attrs: !0,
                            args: "title",
                            mixins: [o.container, o.togglable, o.position],
                            props: { delay: Number, title: String },
                            defaults: { pos: "top", title: "", delay: 0, animation: ["uk-animation-scale-up"], duration: 100, cls: "uk-active", clsPos: "uk-tooltip" },
                            beforeConnect: function() { this._hasTitle = u(this.$el, "title"), l(this.$el, { title: "", "aria-expanded": !1 }) },
                            disconnected: function() { this.hide(), l(this.$el, { title: this._hasTitle ? this.title : null, "aria-expanded": null }) },
                            methods: {
                                show: function() {
                                    var t = this;
                                    c(w, this) || (w.forEach(function(t) { return t.hide() }), w.push(this), this._unbind = f(s, "click", function(e) { return !y(e.target, t.$el) && t.hide() }), clearTimeout(this.showTimer), this.tooltip = r(this.container, '<div class="' + this.clsPos + '" aria-hidden><div class="' + this.clsPos + '-inner">' + this.title + "</div></div>"), l(this.$el, "aria-expanded", !0), this.positionAt(this.tooltip, this.$el), this.origin = "y" === this.getAxis() ? a(this.dir) + "-" + this.align : this.align + "-" + a(this.dir), this.showTimer = setTimeout(function() { t.toggleElement(t.tooltip, !0), t.hideTimer = setInterval(function() { h(t.$el) || t.hide() }, 150) }, this.delay))
                                },
                                hide: function() { var t = w.indexOf(this);!~t || p(this.$el, "input") && this.$el === s.activeElement || (w.splice(t, 1), clearTimeout(this.showTimer), clearInterval(this.hideTimer), l(this.$el, "aria-expanded", !1), this.toggleElement(this.tooltip, !1), this.tooltip && v(this.tooltip), this.tooltip = !1, this._unbind()) }
                            },
                            events: (n = {}, n["focus " + i.pointerEnter + " " + g] = function(t) { t.type === g && d(t) || this.show() }, n.blur = "hide", n[m] = function(t) { d(t) || this.hide() }, n)
                        })
                    }
                }), Pn.use(function t(e) {
                    if (!t.installed) {
                        var n = e.util,
                            i = n.addClass,
                            o = n.ajax,
                            r = n.matches,
                            l = n.noop,
                            s = n.on,
                            a = n.removeClass,
                            u = n.trigger;
                        e.component("upload", {
                            props: { allow: String, clsDragover: String, concurrent: Number, maxSize: Number, mime: String, msgInvalidMime: String, msgInvalidName: String, msgInvalidSize: String, multiple: Boolean, name: String, params: Object, type: String, url: String },
                            defaults: { allow: !1, clsDragover: "uk-dragover", concurrent: 1, maxSize: 0, mime: !1, msgInvalidMime: "Invalid File Type: %s", msgInvalidName: "Invalid File Name: %s", msgInvalidSize: "Invalid File Size: %s Bytes Max", multiple: !1, name: "files[]", params: {}, type: "POST", url: "", abort: l, beforeAll: l, beforeSend: l, complete: l, completeAll: l, error: l, fail: l, load: l, loadEnd: l, loadStart: l, progress: l },
                            events: {
                                change: function(t) { r(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "") },
                                drop: function(t) {
                                    d(t);
                                    var e = t.dataTransfer;
                                    e && e.files && (a(this.$el, this.clsDragover), this.upload(e.files))
                                },
                                dragenter: function(t) { d(t) },
                                dragover: function(t) { d(t), i(this.$el, this.clsDragover) },
                                dragleave: function(t) { d(t), a(this.$el, this.clsDragover) }
                            },
                            methods: {
                                upload: function(t) {
                                    var e = this;
                                    if (t.length) {
                                        u(this.$el, "upload", [t]);
                                        for (var n = 0; n < t.length; n++) { if (e.maxSize && 1e3 * e.maxSize < t[n].size) return void e.fail(e.msgInvalidSize.replace("%s", e.allow)); if (e.allow && !c(e.allow, t[n].name)) return void e.fail(e.msgInvalidName.replace("%s", e.allow)); if (e.mime && !c(e.mime, t[n].type)) return void e.fail(e.msgInvalidMime.replace("%s", e.mime)) }
                                        this.multiple || (t = [t[0]]), this.beforeAll(this, t);
                                        var i = function(t, e) {
                                                for (var n = [], i = 0; i < t.length; i += e) {
                                                    for (var o = [], r = 0; r < e; r++) o.push(t[i + r]);
                                                    n.push(o)
                                                }
                                                return n
                                            }(t, this.concurrent),
                                            r = function(t) {
                                                var n = new FormData;
                                                for (var l in t.forEach(function(t) { return n.append(e.name, t) }), e.params) n.append(l, e.params[l]);
                                                o(e.url, {
                                                    data: n,
                                                    method: e.type,
                                                    beforeSend: function(t) {
                                                        var n = t.xhr;
                                                        n.upload && s(n.upload, "progress", e.progress), ["loadStart", "load", "loadEnd", "abort"].forEach(function(t) { return s(n, t.toLowerCase(), e[t]) }), e.beforeSend(t)
                                                    }
                                                }).then(function(t) { e.complete(t), i.length ? r(i.shift()) : e.completeAll(t) }, function(t) { return e.error(t.message) })
                                            };
                                        r(i.shift())
                                    }
                                }
                            }
                        })
                    }

                    function c(t, e) { return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i")) }

                    function d(t) { t.preventDefault(), t.stopPropagation() }
                }),
                function(t) {
                    var e = t.connect,
                        n = t.disconnect;

                    function i() { r(lt.body, e), sn.flush(), new ut(function(t) { return t.forEach(o) }).observe(st, { childList: !0, subtree: !0, characterData: !0, attributes: !0 }), t._initialized = !0 }

                    function o(i) {
                        var o = i.target;
                        ("attributes" !== i.type ? function(t) { for (var o = i.addedNodes, l = i.removedNodes, s = 0; s < o.length; s++) r(o[s], e); for (var a = 0; a < l.length; a++) r(l[a], n); return !0 }() : function(e) {
                            var n = i.target,
                                o = i.attributeName;
                            if ("href" === o) return !0;
                            var r = On(o);
                            if (r && r in t.components) { if (Q(n, o)) return t[r](n), !0; var l = t.getComponent(n, r); return l ? (l.$destroy(), !0) : void 0 }
                        }()) && t.update("update", o, !0)
                    }

                    function r(t, e) {
                        if (1 === t.nodeType && !Q(t, "uk-no-boot"))
                            for (e(t), t = t.firstElementChild; t;) {
                                var n = t.nextElementSibling;
                                r(t, e), t = n
                            }
                    }
                    ut && (lt.body ? i() : new ut(function() { lt.body && (this.disconnect(), i()) }).observe(st, { childList: !0, subtree: !0 }))
                }(Pn), Pn
        }()
    },
    AMGY: function(t, e, n) {
        "use strict";
        (function(t) {
            n.d(e, "a", function() { return r });
            var i = "undefined" != typeof window && window,
                o = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                r = i || "undefined" != typeof t && t || o
        }).call(e, n("DuR2"))
    },
    BX3T: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() { return i });
        var i = Array.isArray || function(t) { return t && "number" == typeof t.length }
    },
    DuR2: function(t, e) {
        var n;
        n = function() { return this }();
        try { n = n || Function("return this")() || (0, eval)("this") } catch (t) { "object" == typeof window && (n = window) }
        t.exports = n
    },
    GK6M: function(t, e, n) {
        "use strict";
        e.a = function(t) { return i = t, r };
        var i, o = n("fKB6");

        function r() { try { return i.apply(this, arguments) } catch (t) { return o.a.e = t, o.a } }
    },
    Jnfr: function(t, e) {
        function n(t) { return Promise.resolve().then(function() { throw new Error("Cannot find module '" + t + "'.") }) }
        n.keys = function() { return [] }, n.resolve = n, t.exports = n, n.id = "Jnfr"
    },
    OVmG: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() { return a });
        var i = n("TToO"),
            o = n("/iUD"),
            r = n("VwZZ"),
            l = n("t7NR"),
            s = n("tLDX"),
            a = function(t) {
                function e(n, i, o) {
                    switch (t.call(this), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                        case 0:
                            this.destination = l.a;
                            break;
                        case 1:
                            if (!n) { this.destination = l.a; break }
                            if ("object" == typeof n) { n instanceof e ? (this.syncErrorThrowable = n.syncErrorThrowable, this.destination = n, this.destination.add(this)) : (this.syncErrorThrowable = !0, this.destination = new u(this, n)); break }
                        default:
                            this.syncErrorThrowable = !0, this.destination = new u(this, n, i, o)
                    }
                }
                return Object(i.b)(e, t), e.prototype[s.a] = function() { return this }, e.create = function(t, n, i) { var o = new e(t, n, i); return o.syncErrorThrowable = !1, o }, e.prototype.next = function(t) { this.isStopped || this._next(t) }, e.prototype.error = function(t) { this.isStopped || (this.isStopped = !0, this._error(t)) }, e.prototype.complete = function() { this.isStopped || (this.isStopped = !0, this._complete()) }, e.prototype.unsubscribe = function() { this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this)) }, e.prototype._next = function(t) { this.destination.next(t) }, e.prototype._error = function(t) { this.destination.error(t), this.unsubscribe() }, e.prototype._complete = function() { this.destination.complete(), this.unsubscribe() }, e.prototype._unsubscribeAndRecycle = function() {
                    var t = this._parent,
                        e = this._parents;
                    return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = e, this
                }, e
            }(r.a),
            u = function(t) {
                function e(e, n, i, r) {
                    var s;
                    t.call(this), this._parentSubscriber = e;
                    var a = this;
                    Object(o.a)(n) ? s = n : n && (s = n.next, i = n.error, r = n.complete, n !== l.a && (a = Object.create(n), Object(o.a)(a.unsubscribe) && this.add(a.unsubscribe.bind(a)), a.unsubscribe = this.unsubscribe.bind(this))), this._context = a, this._next = s, this._error = i, this._complete = r
                }
                return Object(i.b)(e, t), e.prototype.next = function(t) {
                    if (!this.isStopped && this._next) {
                        var e = this._parentSubscriber;
                        e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                    }
                }, e.prototype.error = function(t) {
                    if (!this.isStopped) {
                        var e = this._parentSubscriber;
                        if (this._error) e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                        else {
                            if (!e.syncErrorThrowable) throw this.unsubscribe(), t;
                            e.syncErrorValue = t, e.syncErrorThrown = !0, this.unsubscribe()
                        }
                    }
                }, e.prototype.complete = function() {
                    var t = this;
                    if (!this.isStopped) {
                        var e = this._parentSubscriber;
                        if (this._complete) {
                            var n = function() { return t._complete.call(t._context) };
                            e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                        } else this.unsubscribe()
                    }
                }, e.prototype.__tryOrUnsub = function(t, e) { try { t.call(this._context, e) } catch (t) { throw this.unsubscribe(), t } }, e.prototype.__tryOrSetError = function(t, e, n) { try { e.call(this._context, n) } catch (e) { return t.syncErrorValue = e, t.syncErrorThrown = !0, !0 } return !1 }, e.prototype._unsubscribe = function() {
                    var t = this._parentSubscriber;
                    this._context = null, this._parentSubscriber = null, t.unsubscribe()
                }, e
            }(a)
    },
    PIsA: function(t, e, n) {
        "use strict";
        var i = n("AMGY"),
            o = n("dgOU"),
            r = n("YaPU"),
            l = function(t) {
                var e = t.Symbol;
                if ("function" == typeof e) return e.iterator || (e.iterator = e("iterator polyfill")), e.iterator;
                var n = t.Set;
                if (n && "function" == typeof(new n)["@@iterator"]) return "@@iterator";
                var i = t.Map;
                if (i)
                    for (var o = Object.getOwnPropertyNames(i.prototype), r = 0; r < o.length; ++r) { var l = o[r]; if ("entries" !== l && "size" !== l && i.prototype[l] === i.prototype.entries) return l }
                return "@@iterator"
            }(i.a),
            s = n("TToO"),
            a = function(t) {
                function e(e, n, i) { t.call(this), this.parent = e, this.outerValue = n, this.outerIndex = i, this.index = 0 }
                return Object(s.b)(e, t), e.prototype._next = function(t) { this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this) }, e.prototype._error = function(t) { this.parent.notifyError(t, this), this.unsubscribe() }, e.prototype._complete = function() { this.parent.notifyComplete(this), this.unsubscribe() }, e
            }(n("OVmG").a),
            u = n("+CnV");
        e.a = function(t, e, n, s) {
            var c, d = new a(t, n, s);
            if (d.closed) return null;
            if (e instanceof r.a) return e._isScalar ? (d.next(e.value), d.complete(), null) : (d.syncErrorThrowable = !0, e.subscribe(d));
            if ((c = e) && "number" == typeof c.length) {
                for (var h = 0, p = e.length; h < p && !d.closed; h++) d.next(e[h]);
                d.closed || d.complete()
            } else {
                if (e && "function" != typeof e.subscribe && "function" == typeof e.then) return e.then(function(t) { d.closed || (d.next(t), d.complete()) }, function(t) { return d.error(t) }).then(null, function(t) { i.a.setTimeout(function() { throw t }) }), d;
                if (e && "function" == typeof e[l])
                    for (var f = e[l]();;) { var g = f.next(); if (g.done) { d.complete(); break } if (d.next(g.value), d.closed) break } else if (e && "function" == typeof e[u.a]) {
                        var m = e[u.a]();
                        if ("function" == typeof m.subscribe) return m.subscribe(new a(t, n, s));
                        d.error(new TypeError("Provided object does not correctly implement Symbol.observable"))
                    } else {
                        var v = Object(o.a)(e) ? "an invalid object" : "'" + e + "'";
                        d.error(new TypeError("You provided " + v + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."))
                    }
            }
            return null
        }
    },
    Rf9G: function(t, e, n) {
        "use strict";
        var i = n("TToO"),
            o = n("g5jc"),
            r = n("YaPU"),
            l = n("OVmG"),
            s = n("VwZZ");

        function a() { return function(t) { return t.lift(new u(t)) } }
        var u = function() {
                function t(t) { this.connectable = t }
                return t.prototype.call = function(t, e) {
                    var n = this.connectable;
                    n._refCount++;
                    var i = new c(t, n),
                        o = e.subscribe(i);
                    return i.closed || (i.connection = n.connect()), o
                }, t
            }(),
            c = function(t) {
                function e(e, n) { t.call(this, e), this.connectable = n }
                return Object(i.b)(e, t), e.prototype._unsubscribe = function() {
                    var t = this.connectable;
                    if (t) {
                        this.connectable = null;
                        var e = t._refCount;
                        if (e <= 0) this.connection = null;
                        else if (t._refCount = e - 1, e > 1) this.connection = null;
                        else {
                            var n = this.connection,
                                i = t._connection;
                            this.connection = null, !i || n && i !== n || i.unsubscribe()
                        }
                    } else this.connection = null
                }, e
            }(l.a),
            d = function(t) {
                function e(e, n) { t.call(this), this.source = e, this.subjectFactory = n, this._refCount = 0, this._isComplete = !1 }
                return Object(i.b)(e, t), e.prototype._subscribe = function(t) { return this.getSubject().subscribe(t) }, e.prototype.getSubject = function() { var t = this._subject; return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject }, e.prototype.connect = function() { var t = this._connection; return t || (this._isComplete = !1, (t = this._connection = new s.a).add(this.source.subscribe(new p(this.getSubject(), this))), t.closed ? (this._connection = null, t = s.a.EMPTY) : this._connection = t), t }, e.prototype.refCount = function() { return a()(this) }, e
            }(r.a).prototype,
            h = { operator: { value: null }, _refCount: { value: 0, writable: !0 }, _subject: { value: null, writable: !0 }, _connection: { value: null, writable: !0 }, _subscribe: { value: d._subscribe }, _isComplete: { value: d._isComplete, writable: !0 }, getSubject: { value: d.getSubject }, connect: { value: d.connect }, refCount: { value: d.refCount } },
            p = function(t) {
                function e(e, n) { t.call(this, e), this.connectable = n }
                return Object(i.b)(e, t), e.prototype._error = function(e) { this._unsubscribe(), t.prototype._error.call(this, e) }, e.prototype._complete = function() { this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this) }, e.prototype._unsubscribe = function() {
                    var t = this.connectable;
                    if (t) {
                        this.connectable = null;
                        var e = t._connection;
                        t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                    }
                }, e
            }(o.b);

        function f() { return new o.a }
        e.a = function() {
            return this, a()((t = f, function(e) {
                var n;
                n = "function" == typeof t ? t : function() { return t };
                var i = Object.create(e, h);
                return i.source = e, i.subjectFactory = n, i
            })(this));
            var t
        }
    },
    SD63: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = n("WT6e"),
            o = n("2EC8"),
            r = n("/zV6");
        o.use(r);
        var l = function() {},
            s = n("TToO"),
            a = n("YaPU"),
            u = n("GK6M"),
            c = n("/iUD"),
            d = n("fKB6"),
            h = n("VwZZ"),
            p = Object.prototype.toString,
            f = function(t) {
                function e(e, n, i, o) { t.call(this), this.sourceObj = e, this.eventName = n, this.selector = i, this.options = o }
                return Object(s.b)(e, t), e.create = function(t, n, i, o) { return Object(c.a)(i) && (o = i, i = void 0), new e(t, n, o, i) }, e.setupSubscription = function(t, n, i, o, r) {
                    var l;
                    if (function(t) { return !!t && "[object NodeList]" === p.call(t) }(t) || function(t) { return !!t && "[object HTMLCollection]" === p.call(t) }(t))
                        for (var s = 0, a = t.length; s < a; s++) e.setupSubscription(t[s], n, i, o, r);
                    else if (function(t) { return !!t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener }(t)) {
                        var u = t;
                        t.addEventListener(n, i, r), l = function() { return u.removeEventListener(n, i) }
                    } else if (function(t) { return !!t && "function" == typeof t.on && "function" == typeof t.off }(t)) {
                        var c = t;
                        t.on(n, i), l = function() { return c.off(n, i) }
                    } else {
                        if (! function(t) { return !!t && "function" == typeof t.addListener && "function" == typeof t.removeListener }(t)) throw new TypeError("Invalid event target");
                        var d = t;
                        t.addListener(n, i), l = function() { return d.removeListener(n, i) }
                    }
                    o.add(new h.a(l))
                }, e.prototype._subscribe = function(t) {
                    var n = this.selector;
                    e.setupSubscription(this.sourceObj, this.eventName, n ? function() {
                        for (var e = [], i = 0; i < arguments.length; i++) e[i - 0] = arguments[i];
                        var o = Object(u.a)(n).apply(void 0, e);
                        o === d.a ? t.error(d.a.e) : t.next(o)
                    } : function(e) { return t.next(e) }, t, this.options)
                }, e
            }(a.a).create,
            g = "NOTIFY_INCOMING",
            m = "TOC_DATA_INCOMING",
            v = "DOWNLOADS_DATA_INCOMING",
            y = function() {
                function t() {
                    this.initSamples(), window.initApp = function(t, e) {
                        switch (t) {
                            case "toc":
                                document.dispatchEvent(new CustomEvent(m, { detail: e }));
                                break;
                            case "downloads":
                                document.dispatchEvent(new CustomEvent(v, { detail: e }))
                        }
                    }, window.addEventListener("message", function(t) {
                        var e = t.data;
                        window.initApp(e.type, e.content), window.messageParent = function(e) { window.parent.postMessage(e, t.origin) }
                    })
                }
                return t.prototype.sendDataAppToClient = function(t, e) { window.appRef ? window.appRef[t](JSON.stringify(e)) : window.webkit ? window.webkit.messageHandlers.appRef.postMessage(JSON.stringify({ eventName: t, data: e })) : window.messageParent ? window.messageParent({ eventName: t, data: e }) : window.dispatchEventFlag && document.dispatchEvent(new CustomEvent(t, { detail: e })) }, t.prototype.initSamples = function() {
                    var t = { templateType: "", copyright: ["Infosys Copyright"], keywords: ["Agile", "front\xe2\u20ac\u201cend", "Logistics", "angular", "Lifescience", "Microservices", "Application", "business Source", "Healthcare", "service", "tools", "client", "IT", "end user", "technology", "management", "health", "services", "Customers", "Technology", "Full stack", "wireless carrier", "business", "development", "Consumer", "Service", "application", "web page development", "Infosys", "SPA", "Client", "Retail", "revenue", "Services", "Finance", "customer", "AJAX", "technologies", "framework", "hosting", "Frameworks", "platforms", "internet", "retail", "Insurance", "developers", "Industry", "microservice", "Microservice", "library"], accessibility: ["All"], downloadUrl: "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124141701138841601368/adm-services_1515759039533_do_2124141701138841601368_3.0_spine.ecar", isIframeSupported: "Yes", extractedText: "", voiceCredits: "", language: ["English"], mimeType: "application/vnd.ekstep.content-collection", body: "", preRequistes: "Knowledge of Computer Fundamentals", sourceUrl: "https://lex.infosysapps.com", skills: [], appIcon: "/*urlOfRepo:port*//content/ETA/do_2124141701138841601368/ADM Course.png?type=artifacts", me_totalTimespent: 0, releaseNotes: "", me_averageTimespentPerSession: 0, children: [{ templateType: "", copyright: ["Infosys Copyright"], keywords: ["Finance", "Service", "business", "Infosys", "IT", "Customers"], accessibility: ["All"], downloadUrl: "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124141581842104321356/fs-service-line_1515400295641_do_2124141581842104321356_1.0.ecar", isIframeSupported: "Yes", extractedText: "", voiceCredits: "", language: ["English"], mimeType: "video/mp4", body: "", preRequistes: "Knowledge of Computer Fundamentals", sourceUrl: "https://lex.infosysapps.com", skills: [], appIcon: "/*urlOfRepo:port*//content/ETA/do_2124141581842104321356/FS Service Line.PNG?type=artifacts", me_totalTimespent: 0, releaseNotes: "", me_averageTimespentPerSession: 0, children: [], collections: [{ identifier: "do_2124141701138841601368", depth: null, visibility: null, compatibilityLevel: null, name: "ADM Services", description: "The module covers the details on the Infosys leading application development and management (ADM) services. Our Agile methodology execution and consulting services are spread across vertical offerings and distinguished by robust processes and IPs coupled with strong talent enabling programs.  Our certified agile methodology consultants along with large-scale proven delivery capabilities in various vertical domains. Infosys ADM services scored the highest ratings, primarily due to our focus on cost-effectiveness, delivery excellence, and willingness to stay accountable for deliverable's.", index: null, mimeType: null, objectType: "Content", relation: "hasSequenceMember", status: null }], me_totalRatings: 0, artifactUrl: "", msArtifactDetails: { videoId: "a26bc37d-61dc-46b6-a51f-1eb3245225d9", channelId: "2ff1204a-13ed-4e3e-bc48-9babe36faeb6" }, collaborators: [], contentType: "Resource", identifier: "do_2124141581842104321356", lastUpdatedBy: "sundarks", translatable: !1, thumbnail: "/*urlOfRepo:port*//content/ETA/do_2124141581842104321356/FS Service Line.PNG?type=artifacts", audience: ["sales"], visibility: "Default", isExternal: "no", microsites: ["All"], mediaType: "content", versionDate: "2018-01-08T08:31:35.641+0000", tags: [{ id: "8518309769193529081", type: "Category", value: "Sales" }, { id: "3221979790810563327", type: "SubTrack", value: "Infosys Service Lines" }], complexityLevel: "Beginner", license: "", unit: "ETA", interactivityLevel: "", concepts: [], size: 64258, domain: "", name: "FS Service Line", me_averageSessionsPerDevice: 0, collaboratorDetails: [], publisher: "Seema_Acharya", forkable: !1, contentIdAtSource: "do_2124141581842104321356", attributions: ["Labstorm"], status: "Live", me_averageInteractionsPerMin: 0, grayScaleAppIcon: "", me_totalSessionsCount: 11, imageCredits: "", description: "Financial Services (FS) is one of the major business verticals at Infosys and also the oldest. Over 27% of our revenue today is generated by our FS unit. This video provides an overview of our core capabilities and highlights our expertise in modernizing the IT landscape of our financial customers across the world.", sourceIconUrl: "", posterImage: "/*urlOfRepo:port*//content/ETA/do_2124141581842104321356/FS Service Line.PNG?type=artifacts", me_totalSideloads: 0, duration: 202, minOsVersion: "4.4", transcript: "", me_totalComments: 0, checksum: "", lastUpdatedOn: "2018-01-08T08:31:34.274+0000", me_totalDevices: 0, track: [{ visibility: "public", name: "Primer", id: "2376859782053855080", status: "active" }], ipReview: [], me_totalDownloads: 0, owner: "sundarks", loadingMessage: "Loading...", creator: "sundarks", contentUrlAtSource: "", os: ["All"], soundCredits: "", trackOwner: "Seema_Acharya", me_totalInteractions: 0, pkgVersion: "1", versionKey: "1515400296009", me_averageRating: 0, versionCreatedBy: "sundarks", learningObjective: "", developer: "", sourceName: "Lex", sourceShortName: "Lex", resourceType: "Prelude" }, { templateType: "", copyright: ["Infosys Copyright"], keywords: ["Healthcare", "Insurance", "Lifescience", "business", "Infosys", "revenue", "IT", "health", "Client"], accessibility: ["All"], downloadUrl: "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124141605505187841358/hilife-sales-portal_1515400577787_do_2124141605505187841358_1.0.ecar", isIframeSupported: "Yes", extractedText: "", voiceCredits: "", language: ["English"], mimeType: "video/mp4", body: "", preRequistes: "Knowledge of Computer Fundamentals", sourceUrl: "https://lex.infosysapps.com", skills: [], appIcon: "/*urlOfRepo:port*//content/ETA/do_2124141605505187841358/HILife Sales Portal.png?type=artifacts", me_totalTimespent: 0, releaseNotes: "", me_averageTimespentPerSession: 0, children: [], collections: [{ identifier: "do_2124141701138841601368", depth: null, visibility: null, compatibilityLevel: null, name: "ADM Services", description: "The module covers the details on the Infosys leading application development and management (ADM) services. Our Agile methodology execution and consulting services are spread across vertical offerings and distinguished by robust processes and IPs coupled with strong talent enabling programs.  Our certified agile methodology consultants along with large-scale proven delivery capabilities in various vertical domains. Infosys ADM services scored the highest ratings, primarily due to our focus on cost-effectiveness, delivery excellence, and willingness to stay accountable for deliverable's.", index: null, mimeType: null, objectType: "Content", relation: "hasSequenceMember", status: null }], me_totalRatings: 0, artifactUrl: "/*urlOfRepo:port*//content/ETA/do_2124141605505187841358/HILife Sales Portal.mp4?type=assets", msArtifactDetails: { videoId: "19cc90f3-7fd5-49bc-821f-d8692081e050", channelId: "2ff1204a-13ed-4e3e-bc48-9babe36faeb6" }, collaborators: [], contentType: "Resource", identifier: "do_2124141605505187841358", lastUpdatedBy: "sundarks", translatable: !1, thumbnail: "/*urlOfRepo:port*//content/ETA/do_2124141605505187841358/HILife Sales Portal.png?type=artifacts", audience: ["sales"], visibility: "Default", isExternal: "no", microsites: ["All"], mediaType: "content", versionDate: "2018-01-08T08:36:17.787+0000", tags: [{ id: "8518309769193529081", type: "Category", value: "Sales" }, { id: "3221979790810563327", type: "SubTrack", value: "Infosys Service Lines" }], complexityLevel: "Beginner", license: "", unit: "ETA", interactivityLevel: "", concepts: [], size: 64290, domain: "", name: "HIL Service line", me_averageSessionsPerDevice: 0, collaboratorDetails: [], publisher: "Seema_Acharya", forkable: !1, contentIdAtSource: "do_2124141605505187841358", attributions: ["Labstorm"], status: "Live", me_averageInteractionsPerMin: 0, grayScaleAppIcon: "", me_totalSessionsCount: 7, imageCredits: "", description: "Healthcare , Insurance and Lifesciences is one the major business verticals at Infosys and has global presence in America and Europe. Healthcare  has contributed 3.0% to Infosys revenue in FY16. This video provides an overview of our core capabilities and highlights our expertise in modernizing the IT landscape of our Health , Insurance and Life sciences services to our clients across the world.", sourceIconUrl: "", posterImage: "/*urlOfRepo:port*//content/ETA/do_2124141605505187841358/HILife Sales Portal.png?type=artifacts", me_totalSideloads: 0, duration: 374, minOsVersion: "4.4", transcript: "", me_totalComments: 0, checksum: "", lastUpdatedOn: "2018-01-08T08:36:16.474+0000", me_totalDevices: 0, track: [{ visibility: "public", name: "Primer", id: "2376859782053855080", status: "active" }], ipReview: [], me_totalDownloads: 0, owner: "sundarks", loadingMessage: "Loading...", creator: "sundarks", contentUrlAtSource: "", os: ["All"], soundCredits: "", trackOwner: "Seema_Acharya", me_totalInteractions: 0, pkgVersion: "1", versionKey: "1515400578253", me_averageRating: 0, versionCreatedBy: "sundarks", learningObjective: "", developer: "", sourceName: "Lex", sourceShortName: "Lex", resourceType: "Prelude" }, { templateType: "", copyright: ["Infosys Copyright"], keywords: ["Retail", "Consumer", "Logistics", "business", "Customers", "IT"], accessibility: ["All"], downloadUrl: "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124141654502522881364/rcl_1515401157947_do_2124141654502522881364_1.0.ecar", isIframeSupported: "Yes", extractedText: "", voiceCredits: "", language: ["English"], mimeType: "video/mp4", body: "", preRequistes: "Knowledge of Computer Fundamentals", sourceUrl: "https://lex.infosysapps.com", skills: [], appIcon: "/*urlOfRepo:port*//content/ETA/do_2124141654502522881364/RCL.png?type=artifacts", me_totalTimespent: 0, releaseNotes: "", me_averageTimespentPerSession: 0, children: [], collections: [{ identifier: "do_2124141701138841601368", depth: null, visibility: null, compatibilityLevel: null, name: "ADM Services", description: "The module covers the details on the Infosys leading application development and management (ADM) services. Our Agile methodology execution and consulting services are spread across vertical offerings and distinguished by robust processes and IPs coupled with strong talent enabling programs.  Our certified agile methodology consultants along with large-scale proven delivery capabilities in various vertical domains. Infosys ADM services scored the highest ratings, primarily due to our focus on cost-effectiveness, delivery excellence, and willingness to stay accountable for deliverable's.", index: null, mimeType: null, objectType: "Content", relation: "hasSequenceMember", status: null }], me_totalRatings: 0, artifactUrl: "/*urlOfRepo:port*//content/ETA/do_2124141654502522881364/RCL.mp4?type=assets", msArtifactDetails: { videoId: "29117802-0aaa-4fc2-b8b9-95ba03346848", channelId: "2ff1204a-13ed-4e3e-bc48-9babe36faeb6" }, collaborators: [], contentType: "Resource", identifier: "do_2124141654502522881364", lastUpdatedBy: "sundarks", translatable: !1, thumbnail: "/*urlOfRepo:port*//content/ETA/do_2124141654502522881364/RCL.png?type=artifacts", audience: ["sales"], visibility: "Default", isExternal: "no", microsites: ["All"], mediaType: "content", versionDate: "2018-01-08T08:45:57.947+0000", tags: [{ id: "8518309769193529081", type: "Category", value: "Sales" }, { id: "3221979790810563327", type: "SubTrack", value: "Infosys Service Lines" }], complexityLevel: "Beginner", license: "", unit: "ETA", interactivityLevel: "", concepts: [], size: 64271, domain: "", name: "RCL Service line", me_averageSessionsPerDevice: 0, collaboratorDetails: [], publisher: "Seema_Acharya", forkable: !1, contentIdAtSource: "do_2124141654502522881364", attributions: ["Labstorm"], status: "Live", me_averageInteractionsPerMin: 0, grayScaleAppIcon: "", me_totalSessionsCount: 8, imageCredits: "", description: "Retail Consumer Logistics (RCL) is one of the major business verticals at Infosys and also the second largest unit at Infosys. This video provides an overview of our core capabilities and highlights our expertise in modernizing the IT landscape of our retail customers across the world. Details of our workforce and our global partners are also provided.", sourceIconUrl: "", posterImage: "/*urlOfRepo:port*//content/ETA/do_2124141654502522881364/RCL.png?type=artifacts", me_totalSideloads: 0, duration: 148, minOsVersion: "4.4", transcript: "", me_totalComments: 0, checksum: "", lastUpdatedOn: "2018-01-08T08:45:56.620+0000", me_totalDevices: 0, track: [{ visibility: "public", name: "Primer", id: "2376859782053855080", status: "active" }], ipReview: [], me_totalDownloads: 0, owner: "sundarks", loadingMessage: "Loading...", creator: "sundarks", contentUrlAtSource: "", os: ["All"], soundCredits: "", trackOwner: "Seema_Acharya", me_totalInteractions: 0, pkgVersion: "1", versionKey: "1515401158524", me_averageRating: 0, versionCreatedBy: "sundarks", learningObjective: "", developer: "", sourceName: "Lex", sourceShortName: "Lex", resourceType: "Prelude" }, { templateType: "", copyright: ["Infosys Copyright"], keywords: ["Client", "Industry", "Services", "business Source"], accessibility: ["All"], downloadUrl: "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124141663644385281365/source_1515401357047_do_2124141663644385281365_1.0.ecar", isIframeSupported: "Yes", extractedText: "", voiceCredits: "", language: ["English"], mimeType: "video/mp4", body: "", preRequistes: "Knowledge of Computer Fundamentals", sourceUrl: "https://lex.infosysapps.com", skills: [], appIcon: "/*urlOfRepo:port*//content/ETA/do_2124141663644385281365/Source.png?type=artifacts", me_totalTimespent: 0, releaseNotes: "", me_averageTimespentPerSession: 0, children: [], collections: [{ identifier: "do_2124141701138841601368", depth: null, visibility: null, compatibilityLevel: null, name: "ADM Services", description: "The module covers the details on the Infosys leading application development and management (ADM) services. Our Agile methodology execution and consulting services are spread across vertical offerings and distinguished by robust processes and IPs coupled with strong talent enabling programs.  Our certified agile methodology consultants along with large-scale proven delivery capabilities in various vertical domains. Infosys ADM services scored the highest ratings, primarily due to our focus on cost-effectiveness, delivery excellence, and willingness to stay accountable for deliverable's.", index: null, mimeType: null, objectType: "Content", relation: "hasSequenceMember", status: null }], me_totalRatings: 0, artifactUrl: "/*urlOfRepo:port*//content/ETA/do_2124141663644385281365/Source.mp4?type=assets", msArtifactDetails: { videoId: "c0da3e56-7776-43f2-8195-482e1d22ab8b", channelId: "2ff1204a-13ed-4e3e-bc48-9babe36faeb6" }, collaborators: [], contentType: "Resource", identifier: "do_2124141663644385281365", lastUpdatedBy: "sundarks", translatable: !1, thumbnail: "/*urlOfRepo:port*//content/ETA/do_2124141663644385281365/Source.png?type=artifacts", audience: ["sales"], visibility: "Default", isExternal: "no", microsites: ["All"], mediaType: "content", versionDate: "2018-01-08T08:49:17.047+0000", tags: [{ id: "8518309769193529081", type: "Category", value: "Sales" }, { id: "3221979790810563327", type: "SubTrack", value: "Infosys Service Lines" }], complexityLevel: "Beginner", license: "", unit: "ETA", interactivityLevel: "", concepts: [], size: 64379, domain: "", name: "SOURCE Service line", me_averageSessionsPerDevice: 0, collaboratorDetails: [], publisher: "Seema_Acharya", forkable: !1, contentIdAtSource: "do_2124141663644385281365", attributions: ["Labstorm"], status: "Live", me_averageInteractionsPerMin: 0, grayScaleAppIcon: "", me_totalSessionsCount: 3, imageCredits: "", description: "This video is meant to provide a quick overview of the SOURCE unit at Infosys. A brief snapshot of our clientele, industry segments and revenues is provided. Information on our workforce, technical services, consulting, research investments and future outlook are detailed. This educational asset is intended to familiarize the learner with the success we have had so far in adding value to our client's business and how we intend to make new inroads into the future by continuing to stay relevant to them in a rapidly changing business environment.", sourceIconUrl: "", posterImage: "/*urlOfRepo:port*//content/ETA/do_2124141663644385281365/Source.png?type=artifacts", me_totalSideloads: 0, duration: 427, minOsVersion: "4.4", transcript: "", me_totalComments: 0, checksum: "", lastUpdatedOn: "2018-01-08T08:49:15.299+0000", me_totalDevices: 0, track: [{ visibility: "public", name: "Primer", id: "2376859782053855080", status: "active" }], ipReview: [], me_totalDownloads: 0, owner: "sundarks", loadingMessage: "Loading...", creator: "sundarks", contentUrlAtSource: "", os: ["All"], soundCredits: "", trackOwner: "Seema_Acharya", me_totalInteractions: 0, pkgVersion: "1", versionKey: "1515401357389", me_averageRating: 0, versionCreatedBy: "sundarks", learningObjective: "", developer: "", sourceName: "Lex", sourceShortName: "Lex", resourceType: "Prelude" }, { templateType: "", copyright: ["Infosys Copyright"], keywords: ["front\xe2\u20ac\u201cend", "internet", "retail", "application", "web page development", "SPA", "developers", "angular", "AJAX", "technologies", "Application", "framework", "customer", "Frameworks", "Full stack", "business", "end user", "technology"], accessibility: ["All"], downloadUrl: "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_212417090722750464150/ui-technologies_1515758695979_do_212417090722750464150_1.0_spine.ecar", isIframeSupported: "Yes", extractedText: "", voiceCredits: "", language: ["English"], mimeType: "application/vnd.ekstep.content-collection", body: "", preRequistes: "Knowledge of Computer Fundamentals", sourceUrl: "https://lex.infosysapps.com", skills: [], appIcon: "/*urlOfRepo:port*//content/ETA/do_212417090722750464150/UI Technologies collection.jpg?type=artifacts", me_totalTimespent: 0, releaseNotes: "", me_averageTimespentPerSession: 0, children: [{ templateType: "", copyright: ["Infosys Copyright"], keywords: ["internet", "application", "technology", "web page development", "AJAX", "SPA", "Frameworks"], accessibility: ["All"], downloadUrl: "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124141679631155201366/ui-technologies_1515401490073_do_2124141679631155201366_1.0.ecar", isIframeSupported: "Yes", extractedText: "", voiceCredits: "", language: ["English"], mimeType: "video/mp4", body: "", preRequistes: "Knowledge of Computer Fundamentals", sourceUrl: "https://lex.infosysapps.com", skills: [], appIcon: "/*urlOfRepo:port*//content/ETA/do_2124141679631155201366/UI Technologies.jpg?type=artifacts", me_totalTimespent: 0, releaseNotes: "", me_averageTimespentPerSession: 0, children: [], collections: [{ identifier: "do_212417090722750464150", depth: null, visibility: null, compatibilityLevel: null, name: "UI Technologies", description: "In the current world of information Technology, the user interface is everything designed into an information device with which a person may interact. Nowadays there is more dependency of many companies on web applications and mobile applications which led to increase in the priority on UI for improving the users overall experience.", index: null, mimeType: null, objectType: "Content", relation: "hasSequenceMember", status: null }], me_totalRatings: 0, artifactUrl: "/*urlOfRepo:port*//content/ETA/do_2124141679631155201366/UI Technologies.mp4?type=assets", msArtifactDetails: { videoId: "1f9afdc4-1bda-4073-afc1-a39c99a3121a", channelId: "2ff1204a-13ed-4e3e-bc48-9babe36faeb6" }, collaborators: [], contentType: "Resource", identifier: "do_2124141679631155201366", lastUpdatedBy: "sundarks", translatable: !1, thumbnail: "/*urlOfRepo:port*//content/ETA/do_2124141679631155201366/UI Technologies.jpg?type=artifacts", audience: ["sales"], visibility: "Default", isExternal: "no", microsites: ["All"], mediaType: "content", versionDate: "2018-01-08T08:51:30.072+0000", tags: [{ id: "8518309769193529081", type: "Category", value: "Sales" }, { id: "5633070920084935171", type: "SubTrack", value: "Tech Overview" }], complexityLevel: "Beginner", license: "", unit: "ETA", interactivityLevel: "", concepts: [{ identifier: 464, depth: null, visibility: null, compatibilityLevel: null, name: "Web application", description: null, index: null, mimeType: null, objectType: "Concept", relation: "associatedTo", status: "approved" }, { identifier: 12437, depth: null, visibility: null, compatibilityLevel: null, name: "Ajax (programming)", description: null, index: null, mimeType: null, objectType: "Concept", relation: "associatedTo", status: "approved" }], size: 64346, domain: "", name: "Overview of UI Technologies", me_averageSessionsPerDevice: 0, collaboratorDetails: [], publisher: "Seema_Acharya", forkable: !1, contentIdAtSource: "do_2124141679631155201366", attributions: ["Labstorm"], status: "Live", me_averageInteractionsPerMin: 0, grayScaleAppIcon: "", me_totalSessionsCount: 40, imageCredits: "", description: "The internet today is teeming with content, apps and highly interactive content. The greatest challenge for a web application developer today is about using the right technology. This video traces the evolution of web page development from simple web pages in the past to highly interactive, innovative pages today, through the use of modern day frameworks such as AJAX and Single Page Architecture (SPA), The video covers these technologies briefly highlighting their usage, popularity and underlying benefits.", sourceIconUrl: "", posterImage: "/*urlOfRepo:port*//content/ETA/do_2124141679631155201366/UI Technologies.jpg?type=artifacts", me_totalSideloads: 0, duration: 175, minOsVersion: "4.4", transcript: "", me_totalComments: 0, checksum: "", lastUpdatedOn: "2018-01-08T08:51:28.883+0000", me_totalDevices: 0, track: [{ visibility: "public", name: "Primer", id: "2376859782053855080", status: "active" }], ipReview: [], me_totalDownloads: 0, owner: "sundarks", loadingMessage: "Loading...", creator: "sundarks", contentUrlAtSource: "", os: ["All"], soundCredits: "", trackOwner: "Seema_Acharya", me_totalInteractions: 0, pkgVersion: "1", versionKey: "1515401490504", me_averageRating: 0, versionCreatedBy: "sundarks", learningObjective: "", developer: "", sourceName: "Lex", sourceShortName: "Lex", resourceType: "Prelude" }, { templateType: "", copyright: ["Infosys Copyright"], keywords: ["Full stack", "Application", "developers", "front\xe2\u20ac\u201cend", "technologies"], accessibility: ["All"], downloadUrl: "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124141596312535041357/full-stack_1515400445725_do_2124141596312535041357_1.0.ecar", isIframeSupported: "Yes", extractedText: "", voiceCredits: "", language: ["English"], mimeType: "video/mp4", body: "", preRequistes: "Knowledge of Computer Fundamentals", sourceUrl: "https://lex.infosysapps.com", skills: [], appIcon: "/*urlOfRepo:port*//content/ETA/do_2124141596312535041357/Full Stack.png?type=artifacts", me_totalTimespent: 0, releaseNotes: "", me_averageTimespentPerSession: 0, children: [], collections: [{ identifier: "do_212417090722750464150", depth: null, visibility: null, compatibilityLevel: null, name: "UI Technologies", description: "In the current world of information Technology, the user interface is everything designed into an information device with which a person may interact. Nowadays there is more dependency of many companies on web applications and mobile applications which led to increase in the priority on UI for improving the users overall experience.", index: null, mimeType: null, objectType: "Content", relation: "hasSequenceMember", status: null }], me_totalRatings: 0, artifactUrl: "/*urlOfRepo:port*//content/ETA/do_2124141596312535041357/Full Stack.mp4?type=assets", msArtifactDetails: { videoId: "649641e2-f0c4-4d81-bc2b-cad3aab59e53", channelId: "2ff1204a-13ed-4e3e-bc48-9babe36faeb6" }, collaborators: [], contentType: "Resource", identifier: "do_2124141596312535041357", lastUpdatedBy: "sundarks", translatable: !1, thumbnail: "/*urlOfRepo:port*//content/ETA/do_2124141596312535041357/Full Stack.png?type=artifacts", audience: ["sales"], visibility: "Default", isExternal: "no", microsites: ["All"], mediaType: "content", versionDate: "2018-01-08T08:34:05.725+0000", tags: [{ id: "8518309769193529081", type: "Category", value: "Sales" }, { id: "5633070920084935171", type: "SubTrack", value: "Tech Overview" }], complexityLevel: "Beginner", license: "", unit: "ETA", interactivityLevel: "", concepts: [], size: 64234, domain: "", name: "Full Stack Application Development using Front End Technologies", me_averageSessionsPerDevice: 0, collaboratorDetails: [], publisher: "Seema_Acharya", forkable: !1, contentIdAtSource: "do_2124141596312535041357", attributions: ["Labstorm"], status: "Live", me_averageInteractionsPerMin: 0, grayScaleAppIcon: "", me_totalSessionsCount: 85, imageCredits: "", description: "The demand for full stack application developers is increasing today. The video provides an overview of the various front-end technologies that one needs to learn to become a successful full stack developer by describing the developmental phases of an online book store as an illustration.", sourceIconUrl: "", posterImage: "/*urlOfRepo:port*//content/ETA/do_2124141596312535041357/Full Stack.png?type=artifacts", me_totalSideloads: 0, duration: 173, minOsVersion: "4.4", transcript: "", me_totalComments: 0, checksum: "", lastUpdatedOn: "2018-01-08T08:34:04.242+0000", me_totalDevices: 0, track: [{ visibility: "public", name: "Primer", id: "2376859782053855080", status: "active" }], ipReview: [], me_totalDownloads: 0, owner: "sundarks", loadingMessage: "Loading...", contentUrlAtSource: "", os: ["All"], soundCredits: "", trackOwner: "Seema_Acharya", me_totalInteractions: 0, pkgVersion: "1", versionKey: "1515400446133", me_averageRating: 0, versionCreatedBy: "sundarks", learningObjective: "", developer: "", sourceName: "Lex", sourceShortName: "Lex", resourceType: "Prelude" }, { templateType: "", copyright: ["Infosys Copyright"], keywords: ["angular", "framework", "end user", "retail", "customer", "business"], accessibility: ["All"], downloadUrl: "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124141629356687361361/infosys-cs-angular_1515400838678_do_2124141629356687361361_1.0.ecar", isIframeSupported: "Yes", extractedText: "", voiceCredits: "", language: ["English"], mimeType: "video/mp4", body: "", preRequistes: "Knowledge of Computer Fundamentals", sourceUrl: "https://lex.infosysapps.com", skills: [], appIcon: "/*urlOfRepo:port*//content/ETA/do_2124141629356687361361/Infosys CS Angular.jpg?type=artifacts", me_totalTimespent: 0, releaseNotes: "", me_averageTimespentPerSession: 0, children: [], collections: [{ identifier: "do_212417090722750464150", depth: null, visibility: null, compatibilityLevel: null, name: "UI Technologies", description: "In the current world of information Technology, the user interface is everything designed into an information device with which a person may interact. Nowadays there is more dependency of many companies on web applications and mobile applications which led to increase in the priority on UI for improving the users overall experience.", index: null, mimeType: null, objectType: "Content", relation: "hasSequenceMember", status: null }], me_totalRatings: 0, artifactUrl: "/*urlOfRepo:port*//content/ETA/do_2124141629356687361361/Infosys CS Angular.mp4?type=assets", msArtifactDetails: { videoId: "344e3068-5922-4001-bd3e-c4874b782d77", channelId: "2ff1204a-13ed-4e3e-bc48-9babe36faeb6" }, collaborators: [], contentType: "Resource", identifier: "do_2124141629356687361361", lastUpdatedBy: "sundarks", translatable: !1, thumbnail: "/*urlOfRepo:port*//content/ETA/do_2124141629356687361361/Infosys CS Angular.jpg?type=artifacts", audience: ["sales"], visibility: "Default", isExternal: "no", microsites: ["All"], mediaType: "content", versionDate: "2018-01-08T08:40:38.678+0000", tags: [{ id: "8518309769193529081", type: "Category", value: "Sales" }, { id: "7319134251569376456", type: "SubTrack", value: "Case Studies" }], complexityLevel: "Beginner", license: "", unit: "ETA", interactivityLevel: "", concepts: [], size: 64281, domain: "", name: "Infosys Case Studies for UI Technologies", me_averageSessionsPerDevice: 0, collaboratorDetails: [], publisher: "Seema_Acharya", forkable: !1, contentIdAtSource: "do_2124141629356687361361", attributions: ["Labstorm"], status: "Live", me_averageInteractionsPerMin: 0, grayScaleAppIcon: "", me_totalSessionsCount: 10, imageCredits: "", description: "This video provides an overview of our success stories in using the angular framework to provide an enhanced online experience to the end user. The first case story is of a large retail customer in the UK and the second is a leading technology provider in the oil and natural gas industry. The video covers in brief, the business need, the solution provided and the benefits reaped.", sourceIconUrl: "", posterImage: "/*urlOfRepo:port*//content/ETA/do_2124141629356687361361/Infosys CS Angular.jpg?type=artifacts", me_totalSideloads: 0, duration: 116, minOsVersion: "4.4", transcript: "", me_totalComments: 0, checksum: "", lastUpdatedOn: "2018-01-08T08:40:37.429+0000", me_totalDevices: 0, track: [{ visibility: "public", name: "Credentials", id: "9139793842890189874", status: "active" }], ipReview: [], me_totalDownloads: 0, owner: "sundarks", loadingMessage: "Loading...", creator: "sundarks", contentUrlAtSource: "", os: ["All"], soundCredits: "", trackOwner: "Seema_Acharya", me_totalInteractions: 0, pkgVersion: "1", versionKey: "1515400839278", me_averageRating: 0, versionCreatedBy: "sundarks", learningObjective: "", developer: "", sourceName: "Lex", sourceShortName: "Lex", resourceType: "Case Study" }], collections: [{ identifier: "do_2124141701138841601368", depth: null, visibility: null, compatibilityLevel: null, name: "ADM Services", description: "The module covers the details on the Infosys leading application development and management (ADM) services. Our Agile methodology execution and consulting services are spread across vertical offerings and distinguished by robust processes and IPs coupled with strong talent enabling programs.  Our certified agile methodology consultants along with large-scale proven delivery capabilities in various vertical domains. Infosys ADM services scored the highest ratings, primarily due to our focus on cost-effectiveness, delivery excellence, and willingness to stay accountable for deliverable's.", index: null, mimeType: null, objectType: "Content", relation: "hasSequenceMember", status: null }], me_totalRatings: 0, artifactUrl: "", msArtifactDetails: {}, collaborators: [], contentType: "Collection", identifier: "do_212417090722750464150", lastUpdatedBy: "sundarks", translatable: !1, thumbnail: "/*urlOfRepo:port*//content/ETA/do_212417090722750464150/UI Technologies collection.jpg?type=artifacts", audience: ["sales"], visibility: "Default", isExternal: "no", microsites: ["All"], mediaType: "content", versionDate: "2018-01-12T12:04:53.885+0000", tags: [{ id: "8518309769193529081", type: "Category", value: "Sales" }, { id: "5633070920084935171", type: "SubTrack", value: "Tech Overview" }], complexityLevel: "Beginner", license: "", unit: "ETA", interactivityLevel: "", concepts: [{ identifier: "464", depth: null, visibility: null, compatibilityLevel: null, name: "Web application", description: null, index: null, mimeType: null, objectType: "Concept", relation: "associatedTo", status: "approved" }, { identifier: "12437", depth: null, visibility: null, compatibilityLevel: null, name: "Ajax (programming)", description: null, index: null, mimeType: null, objectType: "Concept", relation: "associatedTo", status: "approved" }], size: 155414, domain: "", name: "UI Technologies", me_averageSessionsPerDevice: 0, collaboratorDetails: [], publisher: "Seema_Acharya", forkable: !1, contentIdAtSource: "do_212417090722750464150", attributions: [""], status: "Live", me_averageInteractionsPerMin: 0, grayScaleAppIcon: "", me_totalSessionsCount: 135, imageCredits: "", description: "In the current world of information Technology, the user interface is everything designed into an information device with which a person may interact. Nowadays there is more dependency of many companies on web applications and mobile applications which led to increase in the priority on UI for improving the users overall experience.", sourceIconUrl: "", posterImage: "/*urlOfRepo:port*//content/ETA/do_212417090722750464150/UI Technologies collection.jpg?type=artifacts", me_totalSideloads: 0, duration: 464, minOsVersion: "4.4", transcript: "", me_totalComments: 0, checksum: "", lastUpdatedOn: "2018-01-12T12:04:51.731+0000", me_totalDevices: 0, track: [{ visibility: "public", name: "Primer", id: "2376859782053855080", status: "active" }], ipReview: [], me_totalDownloads: 0, owner: "sundarks", loadingMessage: "Loading...", creator: "sundarks", contentUrlAtSource: "", os: ["All"], soundCredits: "", trackOwner: "Seema_Acharya", me_totalInteractions: 0, pkgVersion: "1", versionKey: "1515758696738", me_averageRating: 0, versionCreatedBy: "sundarks", learningObjective: "", developer: "", sourceName: "Lex", sourceShortName: "Lex", resourceType: "Prelude" }, { templateType: "", copyright: ["Infosys Copyright"], keywords: ["retail", "tools", "Microservices", "platforms", "business", "services", "wireless carrier", "hosting", "framework", "Technology", "microservice", "Microservice", "client", "library", "IT"], accessibility: ["All"], downloadUrl: "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_212415684448862208142/microservices_1515587027247_do_212415684448862208142_1.0_spine.ecar", isIframeSupported: "Yes", extractedText: "", voiceCredits: "", language: ["English"], mimeType: "application/vnd.ekstep.content-collection", body: "", preRequistes: "Knowledge of Computer Fundamentals", sourceUrl: "https://lex.infosysapps.com", skills: [], appIcon: "/*urlOfRepo:port*//content/ETA/do_212415684448862208142/MicroserviceCollection.jpg?type=artifacts", me_totalTimespent: 0, releaseNotes: "", me_averageTimespentPerSession: 0, children: [{ templateType: "", copyright: ["Infosys Copyright"], keywords: ["Microservices", "IT", "services", "Technology"], accessibility: ["All"], downloadUrl: "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124141646153891841363/microservices_1515401044945_do_2124141646153891841363_1.0.ecar", isIframeSupported: "Yes", extractedText: "", voiceCredits: "", language: ["English"], mimeType: "video/mp4", body: "", preRequistes: "Knowledge of Computer Fundamentals", sourceUrl: "https://lex.infosysapps.com", skills: [], appIcon: "/*urlOfRepo:port*//content/ETA/do_2124141646153891841363/Microservices.jpg?type=artifacts", me_totalTimespent: 0, releaseNotes: "", me_averageTimespentPerSession: 0, children: [], collections: [{ identifier: "do_212415684448862208142", depth: null, visibility: null, compatibilityLevel: null, name: "Microservices", description: 'Microservices also known as the microservice architecture is an architectural style that structures an enterprise application as a collection of loosely coupled services, which implement business capabilities. The central idea behind microservices is that some types of applications become easier to build and maintain when they are broken down into smaller pieces which work together. Each of the component is continuously developed and separately maintained, and the application is then simply the sum of its constituent components. This is in contrast to a traditional, "monolithic" application which is all developed all in one piece.', index: null, mimeType: null, objectType: "Content", relation: "hasSequenceMember", status: null }], me_totalRatings: 0, artifactUrl: "/*urlOfRepo:port*//content/ETA/do_2124141646153891841363/Microservices.mp4?type=assets", msArtifactDetails: { videoId: "1254e168-5667-483f-b21e-318ddd9cd8ed", channelId: "2ff1204a-13ed-4e3e-bc48-9babe36faeb6" }, collaborators: [], contentType: "Resource", identifier: "do_2124141646153891841363", lastUpdatedBy: "sundarks", translatable: !1, thumbnail: "/*urlOfRepo:port*//content/ETA/do_2124141646153891841363/Microservices.jpg?type=artifacts", audience: ["sales"], visibility: "Default", isExternal: "no", microsites: ["All"], mediaType: "content", versionDate: "2018-01-08T08:44:04.944+0000", tags: [{ id: "8518309769193529081", type: "Category", value: "Sales" }, { id: "5633070920084935171", type: "SubTrack", value: "Tech Overview" }], complexityLevel: "Beginner", license: "", unit: "ETA", interactivityLevel: "", concepts: [{ identifier: "59539", depth: null, visibility: null, compatibilityLevel: null, name: "Microservices", description: null, index: null, mimeType: null, objectType: "Concept", relation: "associatedTo", status: "approved" }], size: 64336, domain: "", name: "Overview of Microservices", me_averageSessionsPerDevice: 0, collaboratorDetails: [], publisher: "Seema_Acharya", forkable: !1, contentIdAtSource: "do_2124141646153891841363", attributions: ["Labstorm"], status: "Live", me_averageInteractionsPerMin: 0, grayScaleAppIcon: "", me_totalSessionsCount: 10, imageCredits: "", description: "Microservices is the new buzz word that we hear in the IT industry today. This video aims at demystifying this new concept. You will learn the basics of what is meant by microservices and how they are different from traditional monolithic services, the important characteristics of microservices and how they help businesses, along with a summary of trends & early adopters of this technology. A brief illustration of how microservices power the linkedin portal is also covered.", sourceIconUrl: "", posterImage: "/*urlOfRepo:port*//content/ETA/do_2124141646153891841363/Microservices.jpg?type=artifacts", me_totalSideloads: 0, duration: 428, minOsVersion: "4.4", transcript: "", me_totalComments: 0, checksum: "", lastUpdatedOn: "2018-01-08T08:44:03.288+0000", me_totalDevices: 0, track: [{ visibility: "public", name: "Primer", id: "2376859782053855080", status: "active" }], ipReview: [], me_totalDownloads: 0, owner: "sundarks", loadingMessage: "Loading...", creator: "sundarks", contentUrlAtSource: "", os: ["All"], soundCredits: "", trackOwner: "Seema_Acharya", me_totalInteractions: 0, pkgVersion: "1", versionKey: "1515401045384", me_averageRating: 0, versionCreatedBy: "sundarks", learningObjective: "", developer: "", sourceName: "Lex", sourceShortName: "Lex", resourceType: "Prelude" }, { templateType: "", copyright: ["Infosys Copyright"], keywords: ["Microservice", "tools", "framework", "library", "platforms", "hosting"], accessibility: ["All"], downloadUrl: "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124141616045260801359/infosys-accelerators-for-microservices_1515400737899_do_2124141616045260801359_1.0.ecar", isIframeSupported: "Yes", extractedText: "", voiceCredits: "", language: ["English"], mimeType: "video/mp4", body: "", preRequistes: "Knowledge of Computer Fundamentals", sourceUrl: "https://lex.infosysapps.com", skills: [], appIcon: "/*urlOfRepo:port*//content/ETA/do_2124141616045260801359/Infosys Accelerators for Microservices.jpg?type=artifacts", me_totalTimespent: 0, releaseNotes: "", me_averageTimespentPerSession: 0, children: [], collections: [{ identifier: "do_212415684448862208142", depth: null, visibility: null, compatibilityLevel: null, name: "Microservices", description: 'Microservices also known as the microservice architecture is an architectural style that structures an enterprise application as a collection of loosely coupled services, which implement business capabilities. The central idea behind microservices is that some types of applications become easier to build and maintain when they are broken down into smaller pieces which work together. Each of the component is continuously developed and separately maintained, and the application is then simply the sum of its constituent components. This is in contrast to a traditional, "monolithic" application which is all developed all in one piece.', index: null, mimeType: null, objectType: "Content", relation: "hasSequenceMember", status: null }], me_totalRatings: 0, artifactUrl: "/*urlOfRepo:port*//content/ETA/do_2124141616045260801359/Infosys Accelerators for Microservices.mp4?type=assets", msArtifactDetails: { videoId: "f2a692da-3e6a-4699-b58a-dcf059d4a26e", channelId: "2ff1204a-13ed-4e3e-bc48-9babe36faeb6" }, collaborators: [], contentType: "Resource", identifier: "do_2124141616045260801359", lastUpdatedBy: "sundarks", translatable: !1, thumbnail: "/*urlOfRepo:port*//content/ETA/do_2124141616045260801359/Infosys Accelerators for Microservices.jpg?type=artifacts", audience: ["sales"], visibility: "Default", isExternal: "no", microsites: ["All"], mediaType: "content", versionDate: "2018-01-08T08:38:57.899+0000", tags: [{ id: "8518309769193529081", type: "Category", value: "Sales" }, { id: "5633070920084935171", type: "SubTrack", value: "Tech Overview" }], complexityLevel: "Beginner", license: "", unit: "ETA", interactivityLevel: "", concepts: [{ identifier: "59539", depth: null, visibility: null, compatibilityLevel: null, name: "Microservices", description: null, index: null, mimeType: null, objectType: "Concept", relation: "associatedTo", status: "approved" }, { identifier: 2504, depth: null, visibility: null, compatibilityLevel: null, name: "Open source", description: null, index: null, mimeType: null, objectType: "Concept", relation: "associatedTo", status: "approved" }], size: 64242, domain: "", name: "Infosys Accelerators for Microservices", me_averageSessionsPerDevice: 0, collaboratorDetails: [], publisher: "Seema_Acharya", forkable: !1, contentIdAtSource: "do_2124141616045260801359", attributions: ["Labstorm"], status: "Live", me_averageInteractionsPerMin: 0, grayScaleAppIcon: "", me_totalSessionsCount: 3, imageCredits: "", description: "Microservice development requires many tools, frameworks, libraries and platforms for design, deployment and hosting. This video provides an overview of the  Infosys corner stone platform - A pre-integrated platform consisting of various open source projects that aids accelerated development.", sourceIconUrl: "", posterImage: "/*urlOfRepo:port*//content/ETA/do_2124141616045260801359/Infosys Accelerators for Microservices.jpg?type=artifacts", me_totalSideloads: 0, duration: 253, minOsVersion: "4.4", transcript: "", me_totalComments: 0, checksum: "", lastUpdatedOn: "2018-01-08T08:38:56.134+0000", me_totalDevices: 0, track: [{ visibility: "public", name: "Primer", id: "2376859782053855080", status: "active" }], ipReview: [], me_totalDownloads: 0, owner: "sundarks", loadingMessage: "Loading...", creator: "sundarks", contentUrlAtSource: "", os: ["All"], soundCredits: "", trackOwner: "Seema_Acharya", me_totalInteractions: 0, pkgVersion: "1", versionKey: "1515400738287", me_averageRating: 0, versionCreatedBy: "sundarks", learningObjective: "", developer: "", sourceName: "Lex", sourceShortName: "Lex", resourceType: "Prelude" }, { templateType: "", copyright: ["Infosys Copyright"], keywords: ["microservice", "client", "retail", "wireless carrier", "business"], accessibility: ["All"], downloadUrl: "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_2124141637670092801362/microservices-case-studies_1515400948741_do_2124141637670092801362_1.0.ecar", isIframeSupported: "Yes", extractedText: "", voiceCredits: "", language: ["English"], mimeType: "video/mp4", body: "", preRequistes: "Knowledge of Computer Fundamentals", sourceUrl: "https://lex.infosysapps.com", skills: [], appIcon: "/*urlOfRepo:port*//content/ETA/do_2124141637670092801362/Microservices case studies.jpg?type=artifacts", me_totalTimespent: 0, releaseNotes: "", me_averageTimespentPerSession: 0, children: [], collections: [{ identifier: "do_212415684448862208142", depth: null, visibility: null, compatibilityLevel: null, name: "Microservices", description: 'Microservices also known as the microservice architecture is an architectural style that structures an enterprise application as a collection of loosely coupled services, which implement business capabilities. The central idea behind microservices is that some types of applications become easier to build and maintain when they are broken down into smaller pieces which work together. Each of the component is continuously developed and separately maintained, and the application is then simply the sum of its constituent components. This is in contrast to a traditional, "monolithic" application which is all developed all in one piece.', index: null, mimeType: null, objectType: "Content", relation: "hasSequenceMember", status: null }], me_totalRatings: 0, artifactUrl: "/*urlOfRepo:port*//content/ETA/do_2124141637670092801362/Microservices case studies.mp4?type=assets", msArtifactDetails: { videoId: "277b1e92-eb17-4715-8fba-53114583c27f", channelId: "2ff1204a-13ed-4e3e-bc48-9babe36faeb6" }, collaborators: [], contentType: "Resource", identifier: "do_2124141637670092801362", lastUpdatedBy: "sundarks", translatable: !1, thumbnail: "/*urlOfRepo:port*//content/ETA/do_2124141637670092801362/Microservices case studies.jpg?type=artifacts", audience: ["sales"], visibility: "Default", isExternal: "no", microsites: ["All"], mediaType: "content", versionDate: "2018-01-08T08:42:28.741+0000", tags: [{ id: "8518309769193529081", type: "Category", value: "Sales" }, { id: "7319134251569376456", type: "SubTrack", value: "Case Studies" }], complexityLevel: "Beginner", license: "", unit: "ETA", interactivityLevel: "", concepts: [{ identifier: "59539", depth: null, visibility: null, compatibilityLevel: null, name: "Microservices", description: null, index: null, mimeType: null, objectType: "Concept", relation: "associatedTo", status: "approved" }], size: 64269, domain: "", name: "Microservices Case Studies", me_averageSessionsPerDevice: 0, collaboratorDetails: [], publisher: "Seema_Acharya", forkable: !1, contentIdAtSource: "do_2124141637670092801362", attributions: ["Labstorm"], status: "Live", me_averageInteractionsPerMin: 0, grayScaleAppIcon: "", me_totalSessionsCount: 3, imageCredits: "", description: "This video provides an overview of our success stories in using microservice development to address issues faced by our global clients The first case story is of a large global cash and carry retailer in Germany and the second is a leading wireless carrier in the US. The video covers in brief, the business need, the solution provided and the benefits reaped.", sourceIconUrl: "", posterImage: "/*urlOfRepo:port*//content/ETA/do_2124141637670092801362/Microservices case studies.jpg?type=artifacts", me_totalSideloads: 0, duration: 196, minOsVersion: "4.4", transcript: "", me_totalComments: 0, checksum: "", lastUpdatedOn: "2018-01-08T08:42:27.926+0000", me_totalDevices: 0, track: [{ visibility: "public", name: "Credentials", id: "9139793842890189874", status: "active" }], ipReview: [], me_totalDownloads: 0, owner: "sundarks", loadingMessage: "Loading...", creator: "sundarks", contentUrlAtSource: "", os: ["All"], soundCredits: "", trackOwner: "Seema_Acharya", me_totalInteractions: 0, pkgVersion: "1", versionKey: "1515400949124", me_averageRating: 0, versionCreatedBy: "sundarks", learningObjective: "", developer: "", sourceName: "Lex", sourceShortName: "Lex", resourceType: "Case Study" }], collections: [{ identifier: "do_2124141701138841601368", depth: null, visibility: null, compatibilityLevel: null, name: "ADM Services", description: "The module covers the details on the Infosys leading application development and management (ADM) services. Our Agile methodology execution and consulting services are spread across vertical offerings and distinguished by robust processes and IPs coupled with strong talent enabling programs.  Our certified agile methodology consultants along with large-scale proven delivery capabilities in various vertical domains. Infosys ADM services scored the highest ratings, primarily due to our focus on cost-effectiveness, delivery excellence, and willingness to stay accountable for deliverable's.", index: null, mimeType: null, objectType: "Content", relation: "hasSequenceMember", status: null }], me_totalRatings: 0, artifactUrl: "", msArtifactDetails: {}, collaborators: [], contentType: "Collection", identifier: "do_212415684448862208142", lastUpdatedBy: "sundarks", translatable: !1, thumbnail: "/*urlOfRepo:port*//content/ETA/do_212415684448862208142/MicroserviceCollection.jpg?type=artifacts", audience: ["sales"], visibility: "Default", isExternal: "no", microsites: ["All"], mediaType: "content", versionDate: "2018-01-10T12:23:45.872+0000", tags: [{ id: "8518309769193529081", type: "Category", value: "Sales" }, { id: "5633070920084935171", type: "SubTrack", value: "Tech Overview" }], complexityLevel: "Beginner", license: "", unit: "ETA", interactivityLevel: "", concepts: [{ identifier: "59539", depth: null, visibility: null, compatibilityLevel: null, name: "Microservices", description: null, index: null, mimeType: null, objectType: "Concept", relation: "associatedTo", status: "approved" }, { identifier: "2504", depth: null, visibility: null, compatibilityLevel: null, name: "Open source", description: null, index: null, mimeType: null, objectType: "Concept", relation: "associatedTo", status: "approved" }], size: 155570, domain: "", name: "Microservices", me_averageSessionsPerDevice: 0, collaboratorDetails: [], publisher: "Seema_Acharya", forkable: !1, contentIdAtSource: "do_212415684448862208142", attributions: [""], status: "Live", me_averageInteractionsPerMin: 0, grayScaleAppIcon: "", me_totalSessionsCount: 16, imageCredits: "", description: 'Microservices also known as the microservice architecture is an architectural style that structures an enterprise application as a collection of loosely coupled services, which implement business capabilities. The central idea behind microservices is that some types of applications become easier to build and maintain when they are broken down into smaller pieces which work together. Each of the component is continuously developed and separately maintained, and the application is then simply the sum of its constituent components. This is in contrast to a traditional, ""monolithic"" application which is all developed all in one piece.', sourceIconUrl: "", posterImage: "/*urlOfRepo:port*//content/ETA/do_212415684448862208142/MicroserviceCollection.jpg?type=artifacts", me_totalSideloads: 0, duration: 877, minOsVersion: "4.4", transcript: "", me_totalComments: 0, checksum: "", lastUpdatedOn: "2018-01-10T12:23:44.091+0000", me_totalDevices: 0, track: [{ visibility: "public", name: "Primer", id: "2376859782053855080", status: "active" }], ipReview: [], me_totalDownloads: 0, owner: "sundarks", loadingMessage: "Loading...", creator: "sundarks", contentUrlAtSource: "", os: ["All"], soundCredits: "", trackOwner: "Seema_Acharya", me_totalInteractions: 0, pkgVersion: "1", versionKey: "1515587028121", me_averageRating: 0, versionCreatedBy: "sundarks", learningObjective: "", developer: "", sourceName: "Lex", sourceShortName: "Lex", resourceType: "Prelude" }], collections: [], me_totalRatings: 0, artifactUrl: "", msArtifactDetails: {}, collaborators: [], contentType: "Course", identifier: "do_2124141701138841601368", lastUpdatedBy: "sundarks", translatable: !1, thumbnail: "/*urlOfRepo:port*//content/ETA/do_2124141701138841601368/ADM Course.png?type=artifacts", audience: ["sales"], visibility: "Default", isExternal: "no", microsites: ["All"], mediaType: "content", versionDate: "2018-01-12T12:10:32.448+0000", tags: [{ id: "8518309769193529081", type: "Category", value: "Sales" }, { id: "3221979790810563327", type: "SubTrack", value: "Infosys Service Lines" }], complexityLevel: "Beginner", license: "", unit: "ETA", interactivityLevel: "", concepts: [{ identifier: "464", depth: null, visibility: null, compatibilityLevel: null, name: "Web application", description: null, index: null, mimeType: null, objectType: "Concept", relation: "associatedTo", status: "approved" }, { identifier: "12437", depth: null, visibility: null, compatibilityLevel: null, name: "Ajax (programming)", description: null, index: null, mimeType: null, objectType: "Concept", relation: "associatedTo", status: "approved" }, { identifier: "59539", depth: null, visibility: null, compatibilityLevel: null, name: "Microservices", description: null, index: null, mimeType: null, objectType: "Concept", relation: "associatedTo", status: "approved" }, { identifier: "2504", depth: null, visibility: null, compatibilityLevel: null, name: "Open source", description: null, index: null, mimeType: null, objectType: "Concept", relation: "associatedTo", status: "approved" }], size: 559172, domain: "", name: "ADM Services", me_averageSessionsPerDevice: 0, collaboratorDetails: [], publisher: "Seema_Acharya", forkable: !1, contentIdAtSource: "do_2124141701138841601368", attributions: [], status: "Live", me_averageInteractionsPerMin: 0, grayScaleAppIcon: "", me_totalSessionsCount: 180, imageCredits: "", description: "The video covers  details of the Application Development and Management (ADM) services at Infosys. Our Agile methodology execution and consulting services are spread across vertical offerings and distinguished by robust processes and IPs coupled with strong talent enablement programs.  Our certified agile methodology consultants along with large-scale proven delivery capabilities in various vertical domains. Infosys ADM services scored the highest ratings, primarily due to our focus on cost-effectiveness, delivery excellence, and willingness to stay accountable for deliverables.", sourceIconUrl: "", posterImage: "/*urlOfRepo:port*//content/ETA/do_2124141701138841601368/ADM Course.png?type=artifacts", me_totalSideloads: 0, duration: 2492, minOsVersion: "4.4", transcript: "", me_totalComments: 0, checksum: "", lastUpdatedOn: "2018-01-12T12:10:31.232+0000", me_totalDevices: 0, track: [{ visibility: "public", name: "Primer", id: "2376859782053855080", status: "active" }], ipReview: [], me_totalDownloads: 0, owner: "sundarks", loadingMessage: "Loading...", creator: "sundarks", contentUrlAtSource: "", os: ["All"], soundCredits: "", trackOwner: "Seema_Acharya", me_totalInteractions: 0, pkgVersion: "1", versionKey: "1515759040692", me_averageRating: 0, versionCreatedBy: "sundarks", learningObjective: "", developer: "", sourceName: "Lex", sourceShortName: "Lex", resourceType: "Prelude" },
                        e = Date.now(),
                        n = function() { return { status: "failed", progress: 45, downloadInitOn: e - 1e4, downloadFinishedOn: e - 5e3, expires: e + 1e4 } },
                        i = [{ content: t, meta: n() }].concat(t.children.map(function(t) { return { content: t, meta: n() } }));
                    window.samples = { downloads: i, toc: t }
                }, t
            }(),
            w = function() {
                function t(t) { this.svc = t }
                return t.prototype.ngOnInit = function() {
                    var t = this;
                    this.docTocSubs = f(document, m).subscribe(function(e) { t.content = e.detail, t.type = "toc" }), this.docDownloadSub = f(document, v).subscribe(function(e) { t.content = e.detail, t.type = "downloads" })
                }, t.prototype.ngOnDestroy = function() { this.docTocSubs && this.docTocSubs.unsubscribe(), this.docDownloadSub && this.docDownloadSub.unsubscribe() }, t
            }(),
            b = function() {
                function t() {}
                return t.prototype.ngOnInit = function() {}, t
            }(),
            _ = i.T({
                encapsulation: 0,
                styles: [
                    [""]
                ],
                data: {}
            });

        function C(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "span", [
                ["class", "uk-text-meta"]
            ], null, null, null, null, null)), (t()(), i._15(1, null, ["", " views"])), (t()(), i._15(-1, null, ["\n"]))], null, function(t, e) { t(e, 1, 0, e.component.viewCount) })
        }
        var k = function() {
                function t() {}
                return t.prototype.transform = function(t, e) {
                    if (t <= 0) return "";
                    var n = Math.floor(t / 3600),
                        i = Math.floor(t % 3600 / 60),
                        o = Math.floor(t % 3600 % 60),
                        r = "",
                        l = "";
                    return e && "colon" !== e ? "hours" === e ? (n > 0 && (r += n + "h"), i > 0 && (n > 0 && (l = " "), r += "" + l + i + "m"), o > 0 && 0 === n && (i > 0 && (l = " "), r += "" + l + o + "s"), r) : void 0 : (n > 0 && (r += n + ":"), r += i > 0 ? this.pad(i, 2) + ":" : "00:", r += o > 0 ? this.pad(o, 2) : "00")
                }, t.prototype.pad = function(t, e) { for (var n = t + ""; n.length < e;) n = "0" + n; return n }, t
            }(),
            x = function() {
                function t() {}
                return t.prototype.ngOnInit = function() {}, t
            }(),
            T = i.T({
                encapsulation: 0,
                styles: [
                    [""]
                ],
                data: {}
            });

        function I(t) {
            return i._17(0, [i._8(0, k, []), (t()(), i.V(1, 0, null, null, 7, "span", [
                ["class", "uk-text-meta"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(3, 0, null, null, 0, "button", [
                ["class", ""],
                ["uk-icon", "icon:clock"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(5, 0, null, null, 2, "span", [], null, null, null, null, null)), (t()(), i._15(6, null, [" ", ""])), i._10(7, 2), (t()(), i._15(-1, null, ["\n"])), (t()(), i._15(-1, null, ["\n"]))], null, function(t, e) {
                var n = e.component;
                t(e, 6, 0, i._16(e, 6, 0, t(e, 7, 0, i._6(e, 0), n.contentDuration, "hours")))
            })
        }
        var E = function() {},
            S = ["en", [
                    ["a", "p"],
                    ["AM", "PM"]
                ],
                [
                    ["AM", "PM"], ,
                ],
                [
                    ["S", "M", "T", "W", "T", "F", "S"],
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                ], , [
                    ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                ], , [
                    ["B", "A"],
                    ["BC", "AD"],
                    ["Before Christ", "Anno Domini"]
                ], 0, [6, 0],
                ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                ["{1}, {0}", , "{1} 'at' {0}"],
                [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "$", "US Dollar",
                function(t) {
                    var e = Math.floor(Math.abs(t)),
                        n = t.toString().replace(/^[^.]*\.?/, "").length;
                    return 1 === e && 0 === n ? 1 : 5
                }
            ],
            M = {},
            O = function() { var t = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 }; return t[t.Zero] = "Zero", t[t.One] = "One", t[t.Two] = "Two", t[t.Few] = "Few", t[t.Many] = "Many", t[t.Other] = "Other", t }(),
            A = function() { var t = { Format: 0, Standalone: 1 }; return t[t.Format] = "Format", t[t.Standalone] = "Standalone", t }(),
            P = function() { var t = { Narrow: 0, Abbreviated: 1, Wide: 2, Short: 3 }; return t[t.Narrow] = "Narrow", t[t.Abbreviated] = "Abbreviated", t[t.Wide] = "Wide", t[t.Short] = "Short", t }(),
            L = function() { var t = { Short: 0, Medium: 1, Long: 2, Full: 3 }; return t[t.Short] = "Short", t[t.Medium] = "Medium", t[t.Long] = "Long", t[t.Full] = "Full", t }(),
            V = function() { var t = { Decimal: 0, Group: 1, List: 2, PercentSign: 3, PlusSign: 4, MinusSign: 5, Exponential: 6, SuperscriptingExponent: 7, PerMille: 8, Infinity: 9, NaN: 10, TimeSeparator: 11, CurrencyDecimal: 12, CurrencyGroup: 13 }; return t[t.Decimal] = "Decimal", t[t.Group] = "Group", t[t.List] = "List", t[t.PercentSign] = "PercentSign", t[t.PlusSign] = "PlusSign", t[t.MinusSign] = "MinusSign", t[t.Exponential] = "Exponential", t[t.SuperscriptingExponent] = "SuperscriptingExponent", t[t.PerMille] = "PerMille", t[t.Infinity] = "Infinity", t[t.NaN] = "NaN", t[t.TimeSeparator] = "TimeSeparator", t[t.CurrencyDecimal] = "CurrencyDecimal", t[t.CurrencyGroup] = "CurrencyGroup", t }();

        function D(t, e) { return U(F(t)[10], e) }

        function N(t, e) { return U(F(t)[11], e) }

        function B(t, e) { return U(F(t)[12], e) }

        function j(t, e) {
            var n = F(t),
                i = n[13][e];
            if ("undefined" == typeof i) { if (e === V.CurrencyDecimal) return n[13][V.Decimal]; if (e === V.CurrencyGroup) return n[13][V.Group] }
            return i
        }

        function R(t) { if (!t[18]) throw new Error('Missing extra locale data for the locale "' + t[0] + '". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.') }

        function U(t, e) {
            for (var n = e; n > -1; n--)
                if ("undefined" != typeof t[n]) return t[n];
            throw new Error("Locale data API: locale data undefined")
        }

        function $(t) { var e = t.split(":"); return { hours: +e[0], minutes: +e[1] } }

        function F(t) {
            var e = t.toLowerCase().replace(/_/g, "-"),
                n = M[e];
            if (n) return n;
            var i = e.split("-")[0];
            if (n = M[i]) return n;
            if ("en" === i) return S;
            throw new Error('Missing locale data for the locale "' + t + '".')
        }
        var H = new i.l("UseV4Plurals"),
            z = function() {},
            G = function(t) {
                function e(e, n) { var i = t.call(this) || this; return i.locale = e, i.deprecatedPluralFn = n, i }
                return Object(s.b)(e, t), e.prototype.getPluralCategory = function(t, e) {
                    switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(e || this.locale, t) : function(t) { return F(t)[17] }(e || this.locale)(t)) {
                        case O.Zero:
                            return "zero";
                        case O.One:
                            return "one";
                        case O.Two:
                            return "two";
                        case O.Few:
                            return "few";
                        case O.Many:
                            return "many";
                        default:
                            return "other"
                    }
                }, e
            }(z),
            Z = function() {
                function t(t, e, n, i) { this._iterableDiffers = t, this._keyValueDiffers = e, this._ngEl = n, this._renderer = i, this._initialClasses = [] }
                return Object.defineProperty(t.prototype, "klass", { set: function(t) { this._applyInitialClasses(!0), this._initialClasses = "string" == typeof t ? t.split(/\s+/) : [], this._applyInitialClasses(!1), this._applyClasses(this._rawClass, !1) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClass", { set: function(t) { this._cleanupClasses(this._rawClass), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof t ? t.split(/\s+/) : t, this._rawClass && (Object(i.Z)(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create()) }, enumerable: !0, configurable: !0 }), t.prototype.ngDoCheck = function() {
                    if (this._iterableDiffer) {
                        var t = this._iterableDiffer.diff(this._rawClass);
                        t && this._applyIterableChanges(t)
                    } else if (this._keyValueDiffer) {
                        var e = this._keyValueDiffer.diff(this._rawClass);
                        e && this._applyKeyValueChanges(e)
                    }
                }, t.prototype._cleanupClasses = function(t) { this._applyClasses(t, !0), this._applyInitialClasses(!1) }, t.prototype._applyKeyValueChanges = function(t) {
                    var e = this;
                    t.forEachAddedItem(function(t) { return e._toggleClass(t.key, t.currentValue) }), t.forEachChangedItem(function(t) { return e._toggleClass(t.key, t.currentValue) }), t.forEachRemovedItem(function(t) { t.previousValue && e._toggleClass(t.key, !1) })
                }, t.prototype._applyIterableChanges = function(t) {
                    var e = this;
                    t.forEachAddedItem(function(t) {
                        if ("string" != typeof t.item) throw new Error("NgClass can only toggle CSS classes expressed as strings, got " + Object(i._14)(t.item));
                        e._toggleClass(t.item, !0)
                    }), t.forEachRemovedItem(function(t) { return e._toggleClass(t.item, !1) })
                }, t.prototype._applyInitialClasses = function(t) {
                    var e = this;
                    this._initialClasses.forEach(function(n) { return e._toggleClass(n, !t) })
                }, t.prototype._applyClasses = function(t, e) {
                    var n = this;
                    t && (Array.isArray(t) || t instanceof Set ? t.forEach(function(t) { return n._toggleClass(t, !e) }) : Object.keys(t).forEach(function(i) { null != t[i] && n._toggleClass(i, !e) }))
                }, t.prototype._toggleClass = function(t, e) {
                    var n = this;
                    (t = t.trim()) && t.split(/\s+/g).forEach(function(t) { e ? n._renderer.addClass(n._ngEl.nativeElement, t) : n._renderer.removeClass(n._ngEl.nativeElement, t) })
                }, t
            }(),
            q = function() {
                function t(t, e, n, i) { this.$implicit = t, this.ngForOf = e, this.index = n, this.count = i }
                return Object.defineProperty(t.prototype, "first", { get: function() { return 0 === this.index }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "last", { get: function() { return this.index === this.count - 1 }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "even", { get: function() { return this.index % 2 == 0 }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "odd", { get: function() { return !this.even }, enumerable: !0, configurable: !0 }), t
            }(),
            W = function() {
                function t(t, e, n) { this._viewContainer = t, this._template = e, this._differs = n, this._differ = null }
                return Object.defineProperty(t.prototype, "ngForTrackBy", { get: function() { return this._trackByFn }, set: function(t) { Object(i.L)() && null != t && "function" != typeof t && console && console.warn && console.warn("trackBy must be a function, but received " + JSON.stringify(t) + ". See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."), this._trackByFn = t }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngForTemplate", { set: function(t) { t && (this._template = t) }, enumerable: !0, configurable: !0 }), t.prototype.ngOnChanges = function(t) { if ("ngForOf" in t) { var e = t.ngForOf.currentValue; if (!this._differ && e) try { this._differ = this._differs.find(e).create(this.ngForTrackBy) } catch (t) { throw new Error("Cannot find a differ supporting object '" + e + "' of type '" + ((n = e).name || typeof n) + "'. NgFor only supports binding to Iterables such as Arrays.") } } var n }, t.prototype.ngDoCheck = function() {
                    if (this._differ) {
                        var t = this._differ.diff(this.ngForOf);
                        t && this._applyChanges(t)
                    }
                }, t.prototype._applyChanges = function(t) {
                    var e = this,
                        n = [];
                    t.forEachOperation(function(t, i, o) {
                        if (null == t.previousIndex) {
                            var r = e._viewContainer.createEmbeddedView(e._template, new q(null, e.ngForOf, -1, -1), o),
                                l = new Q(t, r);
                            n.push(l)
                        } else null == o ? e._viewContainer.remove(i) : (r = e._viewContainer.get(i), e._viewContainer.move(r, o), l = new Q(t, r), n.push(l))
                    });
                    for (var i = 0; i < n.length; i++) this._perViewChange(n[i].view, n[i].record);
                    i = 0;
                    for (var o = this._viewContainer.length; i < o; i++) {
                        var r = this._viewContainer.get(i);
                        r.context.index = i, r.context.count = o
                    }
                    t.forEachIdentityChange(function(t) { e._viewContainer.get(t.currentIndex).context.$implicit = t.item })
                }, t.prototype._perViewChange = function(t, e) { t.context.$implicit = e.item }, t
            }(),
            Q = function(t, e) { this.record = t, this.view = e },
            Y = function() {
                function t(t, e) { this._viewContainer = t, this._context = new K, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e }
                return Object.defineProperty(t.prototype, "ngIf", { set: function(t) { this._context.$implicit = this._context.ngIf = t, this._updateView() }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngIfThen", { set: function(t) { this._thenTemplateRef = t, this._thenViewRef = null, this._updateView() }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngIfElse", { set: function(t) { this._elseTemplateRef = t, this._elseViewRef = null, this._updateView() }, enumerable: !0, configurable: !0 }), t.prototype._updateView = function() { this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context))) }, t
            }(),
            K = function() { this.$implicit = null, this.ngIf = null },
            X = function() {
                function t(t, e) { this._viewContainerRef = t, this._templateRef = e, this._created = !1 }
                return t.prototype.create = function() { this._created = !0, this._viewContainerRef.createEmbeddedView(this._templateRef) }, t.prototype.destroy = function() { this._created = !1, this._viewContainerRef.clear() }, t.prototype.enforceState = function(t) { t && !this._created ? this.create() : !t && this._created && this.destroy() }, t
            }(),
            J = function() {
                function t() { this._defaultUsed = !1, this._caseCount = 0, this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1 }
                return Object.defineProperty(t.prototype, "ngSwitch", { set: function(t) { this._ngSwitch = t, 0 === this._caseCount && this._updateDefaultCases(!0) }, enumerable: !0, configurable: !0 }), t.prototype._addCase = function() { return this._caseCount++ }, t.prototype._addDefault = function(t) { this._defaultViews || (this._defaultViews = []), this._defaultViews.push(t) }, t.prototype._matchCase = function(t) { var e = t == this._ngSwitch; return this._lastCasesMatched = this._lastCasesMatched || e, this._lastCaseCheckIndex++, this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched), this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1), e }, t.prototype._updateDefaultCases = function(t) { if (this._defaultViews && t !== this._defaultUsed) { this._defaultUsed = t; for (var e = 0; e < this._defaultViews.length; e++) this._defaultViews[e].enforceState(t) } }, t
            }(),
            tt = function() {
                function t(t, e, n) { this.ngSwitch = n, n._addCase(), this._view = new X(t, e) }
                return t.prototype.ngDoCheck = function() { this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase)) }, t
            }(),
            et = {},
            nt = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
            it = function() { var t = { Short: 0, ShortGMT: 1, Long: 2, Extended: 3 }; return t[t.Short] = "Short", t[t.ShortGMT] = "ShortGMT", t[t.Long] = "Long", t[t.Extended] = "Extended", t }(),
            ot = function() { var t = { FullYear: 0, Month: 1, Date: 2, Hours: 3, Minutes: 4, Seconds: 5, Milliseconds: 6, Day: 7 }; return t[t.FullYear] = "FullYear", t[t.Month] = "Month", t[t.Date] = "Date", t[t.Hours] = "Hours", t[t.Minutes] = "Minutes", t[t.Seconds] = "Seconds", t[t.Milliseconds] = "Milliseconds", t[t.Day] = "Day", t }(),
            rt = function() { var t = { DayPeriods: 0, Days: 1, Months: 2, Eras: 3 }; return t[t.DayPeriods] = "DayPeriods", t[t.Days] = "Days", t[t.Months] = "Months", t[t.Eras] = "Eras", t }();

        function lt(t, e) { return e && (t = t.replace(/\{([^}]+)}/g, function(t, n) { return null != e && n in e ? e[n] : t })), t }

        function st(t, e, n, i, o) {
            void 0 === n && (n = "-");
            var r = "";
            (t < 0 || o && t <= 0) && (o ? t = 1 - t : (t = -t, r = n));
            for (var l = "" + t; l.length < e;) l = "0" + l;
            return i && (l = l.substr(l.length - e)), r + l
        }

        function at(t, e, n, i, o) {
            return void 0 === n && (n = 0), void 0 === i && (i = !1), void 0 === o && (o = !1),
                function(r, l) {
                    var s = function(t, e, n) {
                        switch (t) {
                            case ot.FullYear:
                                return e.getFullYear();
                            case ot.Month:
                                return e.getMonth();
                            case ot.Date:
                                return e.getDate();
                            case ot.Hours:
                                return e.getHours();
                            case ot.Minutes:
                                return e.getMinutes();
                            case ot.Seconds:
                                return e.getSeconds();
                            case ot.Milliseconds:
                                var i = 1 === n ? 100 : 2 === n ? 10 : 1;
                                return Math.round(e.getMilliseconds() / i);
                            case ot.Day:
                                return e.getDay();
                            default:
                                throw new Error('Unknown DateType value "' + t + '".')
                        }
                    }(t, r, e);
                    return (n > 0 || s > -n) && (s += n), t === ot.Hours && 0 === s && -12 === n && (s = 12), st(s, e, j(l, V.MinusSign), i, o)
                }
        }

        function ut(t, e, n, i) {
            return void 0 === n && (n = A.Format), void 0 === i && (i = !1),
                function(o, r) {
                    return function(t, e, n, i, o, r) {
                        switch (n) {
                            case rt.Months:
                                return function(t, e, n) { var i = F(t); return U(U([i[5], i[6]], e), n) }(e, o, i)[t.getMonth()];
                            case rt.Days:
                                return function(t, e, n) { var i = F(t); return U(U([i[3], i[4]], e), n) }(e, o, i)[t.getDay()];
                            case rt.DayPeriods:
                                var l = t.getHours(),
                                    s = t.getMinutes();
                                if (r) {
                                    var a, u = function(t) { var e = F(t); return R(e), (e[18][2] || []).map(function(t) { return "string" == typeof t ? $(t) : [$(t[0]), $(t[1])] }) }(e),
                                        c = function(t, e, n) { var i = F(t); return R(i), U(U([i[18][0], i[18][1]], e) || [], n) || [] }(e, o, i);
                                    if (u.forEach(function(t, e) {
                                            if (Array.isArray(t)) {
                                                var n = t[0],
                                                    i = t[1],
                                                    o = i.hours;
                                                l >= n.hours && s >= n.minutes && (l < o || l === o && s < i.minutes) && (a = c[e])
                                            } else t.hours === l && t.minutes === s && (a = c[e])
                                        }), a) return a
                                }
                                return function(t, e, n) { var i = F(t); return U(U([i[1], i[2]], e), n) }(e, o, i)[l < 12 ? 0 : 1];
                            case rt.Eras:
                                return function(t, e) { return U(F(t)[7], e) }(e, i)[t.getFullYear() <= 0 ? 0 : 1];
                            default:
                                throw new Error("unexpected translation type " + n)
                        }
                    }(o, r, t, e, n, i)
                }
        }

        function ct(t) {
            return function(e, n, i) {
                var o = -1 * i,
                    r = j(n, V.MinusSign),
                    l = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
                switch (t) {
                    case it.Short:
                        return (o >= 0 ? "+" : "") + st(l, 2, r) + st(Math.abs(o % 60), 2, r);
                    case it.ShortGMT:
                        return "GMT" + (o >= 0 ? "+" : "") + st(l, 1, r);
                    case it.Long:
                        return "GMT" + (o >= 0 ? "+" : "") + st(l, 2, r) + ":" + st(Math.abs(o % 60), 2, r);
                    case it.Extended:
                        return 0 === i ? "Z" : (o >= 0 ? "+" : "") + st(l, 2, r) + ":" + st(Math.abs(o % 60), 2, r);
                    default:
                        throw new Error('Unknown zone width "' + t + '"')
                }
            }
        }
        var dt = 0,
            ht = 4;

        function pt(t, e) {
            return void 0 === e && (e = !1),
                function(n, i) {
                    var o, r, l, s;
                    if (e) {
                        var a = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
                            u = n.getDate();
                        o = 1 + Math.floor((u + a) / 7)
                    } else {
                        var c = (l = n.getFullYear(), s = new Date(l, dt, 1).getDay(), new Date(l, 0, 1 + (s <= ht ? ht : ht + 7) - s)),
                            d = (r = n, new Date(r.getFullYear(), r.getMonth(), r.getDate() + (ht - r.getDay()))).getTime() - c.getTime();
                        o = 1 + Math.round(d / 6048e5)
                    }
                    return st(o, t, j(i, V.MinusSign))
                }
        }
        var ft = {};

        function gt(t, e) { t = t.replace(/:/g, ""); var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4; return isNaN(n) ? e : n }

        function mt(t, e) { return Error("InvalidPipeArgument: '" + e + "' for pipe '" + Object(i._14)(t) + "'") }
        var vt = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
            yt = function() {
                function t(t) { this.locale = t }
                return t.prototype.transform = function(e, n, i, o) {
                    if (void 0 === n && (n = "mediumDate"), null == e || "" === e || e != e) return null;
                    var r, l;
                    if ("string" == typeof e && (e = e.trim()), wt(e)) r = e;
                    else if (isNaN(e - parseFloat(e)))
                        if ("string" == typeof e && /^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)) {
                            var s = e.split("-").map(function(t) { return +t });
                            r = new Date(s[0], s[1] - 1, s[2])
                        } else r = "string" == typeof e && (l = e.match(vt)) ? function(t) {
                            var e = new Date(0),
                                n = 0,
                                i = 0,
                                o = t[8] ? e.setUTCHours : e.setHours;
                            t[9] && (n = +(t[9] + t[10]), i = +(t[9] + t[11])), (t[8] ? e.setUTCFullYear : e.setFullYear).call(e, +t[1], +t[2] - 1, +t[3]);
                            var r = +(t[4] || "0") - n,
                                l = +(t[5] || "0") - i,
                                s = +(t[6] || "0"),
                                a = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                            return o.call(e, r, l, s, a), e
                        }(l) : new Date(e);
                    else r = new Date(parseFloat(e));
                    if (!wt(r)) throw mt(t, e);
                    return function(t, e, n, i) {
                        e = function t(e, n) {
                            var i = function(t) { return F(t)[0] }(e);
                            if (et[i] = et[i] || {}, et[i][n]) return et[i][n];
                            var o = "";
                            switch (n) {
                                case "shortDate":
                                    o = D(e, L.Short);
                                    break;
                                case "mediumDate":
                                    o = D(e, L.Medium);
                                    break;
                                case "longDate":
                                    o = D(e, L.Long);
                                    break;
                                case "fullDate":
                                    o = D(e, L.Full);
                                    break;
                                case "shortTime":
                                    o = N(e, L.Short);
                                    break;
                                case "mediumTime":
                                    o = N(e, L.Medium);
                                    break;
                                case "longTime":
                                    o = N(e, L.Long);
                                    break;
                                case "fullTime":
                                    o = N(e, L.Full);
                                    break;
                                case "short":
                                    var r = t(e, "shortTime"),
                                        l = t(e, "shortDate");
                                    o = lt(B(e, L.Short), [r, l]);
                                    break;
                                case "medium":
                                    var s = t(e, "mediumTime"),
                                        a = t(e, "mediumDate");
                                    o = lt(B(e, L.Medium), [s, a]);
                                    break;
                                case "long":
                                    var u = t(e, "longTime"),
                                        c = t(e, "longDate");
                                    o = lt(B(e, L.Long), [u, c]);
                                    break;
                                case "full":
                                    var d = t(e, "fullTime"),
                                        h = t(e, "fullDate");
                                    o = lt(B(e, L.Full), [d, h])
                            }
                            return o && (et[i][n] = o), o
                        }(n, e) || e;
                        for (var o, r = []; e;) {
                            if (!(o = nt.exec(e))) { r.push(e); break }
                            var l = (r = r.concat(o.slice(1))).pop();
                            if (!l) break;
                            e = l
                        }
                        var s = t.getTimezoneOffset();
                        i && (s = gt(i, s), t = function(t, e, n) { var i = t.getTimezoneOffset(); return function(t, e) { return (t = new Date(t.getTime())).setMinutes(t.getMinutes() + e), t }(t, -1 * (gt(e, i) - i)) }(t, i));
                        var a = "";
                        return r.forEach(function(e) {
                            var i = function(t) {
                                if (ft[t]) return ft[t];
                                var e;
                                switch (t) {
                                    case "G":
                                    case "GG":
                                    case "GGG":
                                        e = ut(rt.Eras, P.Abbreviated);
                                        break;
                                    case "GGGG":
                                        e = ut(rt.Eras, P.Wide);
                                        break;
                                    case "GGGGG":
                                        e = ut(rt.Eras, P.Narrow);
                                        break;
                                    case "y":
                                        e = at(ot.FullYear, 1, 0, !1, !0);
                                        break;
                                    case "yy":
                                        e = at(ot.FullYear, 2, 0, !0, !0);
                                        break;
                                    case "yyy":
                                        e = at(ot.FullYear, 3, 0, !1, !0);
                                        break;
                                    case "yyyy":
                                        e = at(ot.FullYear, 4, 0, !1, !0);
                                        break;
                                    case "M":
                                    case "L":
                                        e = at(ot.Month, 1, 1);
                                        break;
                                    case "MM":
                                    case "LL":
                                        e = at(ot.Month, 2, 1);
                                        break;
                                    case "MMM":
                                        e = ut(rt.Months, P.Abbreviated);
                                        break;
                                    case "MMMM":
                                        e = ut(rt.Months, P.Wide);
                                        break;
                                    case "MMMMM":
                                        e = ut(rt.Months, P.Narrow);
                                        break;
                                    case "LLL":
                                        e = ut(rt.Months, P.Abbreviated, A.Standalone);
                                        break;
                                    case "LLLL":
                                        e = ut(rt.Months, P.Wide, A.Standalone);
                                        break;
                                    case "LLLLL":
                                        e = ut(rt.Months, P.Narrow, A.Standalone);
                                        break;
                                    case "w":
                                        e = pt(1);
                                        break;
                                    case "ww":
                                        e = pt(2);
                                        break;
                                    case "W":
                                        e = pt(1, !0);
                                        break;
                                    case "d":
                                        e = at(ot.Date, 1);
                                        break;
                                    case "dd":
                                        e = at(ot.Date, 2);
                                        break;
                                    case "E":
                                    case "EE":
                                    case "EEE":
                                        e = ut(rt.Days, P.Abbreviated);
                                        break;
                                    case "EEEE":
                                        e = ut(rt.Days, P.Wide);
                                        break;
                                    case "EEEEE":
                                        e = ut(rt.Days, P.Narrow);
                                        break;
                                    case "EEEEEE":
                                        e = ut(rt.Days, P.Short);
                                        break;
                                    case "a":
                                    case "aa":
                                    case "aaa":
                                        e = ut(rt.DayPeriods, P.Abbreviated);
                                        break;
                                    case "aaaa":
                                        e = ut(rt.DayPeriods, P.Wide);
                                        break;
                                    case "aaaaa":
                                        e = ut(rt.DayPeriods, P.Narrow);
                                        break;
                                    case "b":
                                    case "bb":
                                    case "bbb":
                                        e = ut(rt.DayPeriods, P.Abbreviated, A.Standalone, !0);
                                        break;
                                    case "bbbb":
                                        e = ut(rt.DayPeriods, P.Wide, A.Standalone, !0);
                                        break;
                                    case "bbbbb":
                                        e = ut(rt.DayPeriods, P.Narrow, A.Standalone, !0);
                                        break;
                                    case "B":
                                    case "BB":
                                    case "BBB":
                                        e = ut(rt.DayPeriods, P.Abbreviated, A.Format, !0);
                                        break;
                                    case "BBBB":
                                        e = ut(rt.DayPeriods, P.Wide, A.Format, !0);
                                        break;
                                    case "BBBBB":
                                        e = ut(rt.DayPeriods, P.Narrow, A.Format, !0);
                                        break;
                                    case "h":
                                        e = at(ot.Hours, 1, -12);
                                        break;
                                    case "hh":
                                        e = at(ot.Hours, 2, -12);
                                        break;
                                    case "H":
                                        e = at(ot.Hours, 1);
                                        break;
                                    case "HH":
                                        e = at(ot.Hours, 2);
                                        break;
                                    case "m":
                                        e = at(ot.Minutes, 1);
                                        break;
                                    case "mm":
                                        e = at(ot.Minutes, 2);
                                        break;
                                    case "s":
                                        e = at(ot.Seconds, 1);
                                        break;
                                    case "ss":
                                        e = at(ot.Seconds, 2);
                                        break;
                                    case "S":
                                        e = at(ot.Milliseconds, 1);
                                        break;
                                    case "SS":
                                        e = at(ot.Milliseconds, 2);
                                        break;
                                    case "SSS":
                                        e = at(ot.Milliseconds, 3);
                                        break;
                                    case "Z":
                                    case "ZZ":
                                    case "ZZZ":
                                        e = ct(it.Short);
                                        break;
                                    case "ZZZZZ":
                                        e = ct(it.Extended);
                                        break;
                                    case "O":
                                    case "OO":
                                    case "OOO":
                                    case "z":
                                    case "zz":
                                    case "zzz":
                                        e = ct(it.ShortGMT);
                                        break;
                                    case "OOOO":
                                    case "ZZZZ":
                                    case "zzzz":
                                        e = ct(it.Long);
                                        break;
                                    default:
                                        return null
                                }
                                return ft[t] = e, e
                            }(e);
                            a += i ? i(t, n, s) : "''" === e ? "'" : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                        }), a
                    }(r, n, o || this.locale, i)
                }, t
            }();

        function wt(t) { return t instanceof Date && !isNaN(t.valueOf()) }
        var bt = function() {
                function t() {}
                return t.prototype.transform = function(e) { if (!e) return e; if ("string" != typeof e) throw mt(t, e); return e.split(/\b/g).map(function(t) { return function(t) { return t ? t[0].toUpperCase() + t.substr(1).toLowerCase() : t }(t) }).join("") }, t
            }(),
            _t = function() {
                function t() {}
                return t.prototype.transform = function(e) { if (!e) return e; if ("string" != typeof e) throw mt(t, e); return e.toUpperCase() }, t
            }(),
            Ct = function() {},
            kt = new i.l("DocumentToken"),
            xt = function() {
                function t() {
                    var t = this;
                    f(document, g).subscribe(function(e) { t.notify(e.detail) })
                }
                return t.prototype.notify = function(t) { o.notification({ message: t, status: "primary", pos: "bottom-right", timeout: 2e3 }) }, t.prototype.getUIDropRef = function(t) { return o.drop(t) }, t.prototype.getUIDropdownRef = function(t) { return o.dropdown(t) }, t.prototype.modalPopup = function(t, e) { t && e && ("show" === e ? o.modal(t).show() : o.modal(t).hide()) }, t.prototype.getUIModelRef = function(t) { return o.modal(t) }, t.prototype.getPagination = function(t, e, n) {
                    void 0 === e && (e = 1), void 0 === n && (n = 5);
                    var i, o, r = Math.ceil(t / n);
                    r <= 4 ? (i = 1, o = r) : e <= 3 ? (i = 1, o = 4) : e + 1 >= r ? (i = r - 3, o = r) : (i = e - 2, o = e + 1);
                    for (var l = (e - 1) * n, s = Math.min(l + n - 1, t - 1), a = [], u = i; u < o + 1; u++) a.push(u);
                    return { currentPage: e, totalPages: r, startPage: i, endPage: o, startIndex: l, endIndex: s, pages: a }
                }, t.prototype.destroyOffcanvas = function(t) {
                    var e = new Set(["uk-offcanvas-container", "uk-offcanvas-flip", "uk-offcanvas-overlay"]);
                    document.body.className = document.body.className.split(" ").filter(function(t) { return !e.has(t) }).join(" ");
                    var n = document.getElementById(t);
                    n && (n.remove ? n.remove() : n.removeNode && n.removeNode())
                }, t.prototype.hideOffCanvasElem = function(t) {
                    var e = document.getElementById(t);
                    e && o.offcanvas(e).hide()
                }, t.prototype.removeElementById = function(t) {
                    var e = document.getElementById(t);
                    e && (e.remove ? e.remove() : e.removeNode && e.removeNode())
                }, t
            }(),
            Tt = n("g5jc"),
            It = n("x6VL"),
            Et = function(t) {
                function e(e) { t.call(this), this._value = e }
                return Object(s.b)(e, t), Object.defineProperty(e.prototype, "value", { get: function() { return this.getValue() }, enumerable: !0, configurable: !0 }), e.prototype._subscribe = function(e) { var n = t.prototype._subscribe.call(this, e); return n && !n.closed && e.next(this._value), n }, e.prototype.getValue = function() { if (this.hasError) throw this.thrownError; if (this.closed) throw new It.a; return this._value }, e.prototype.next = function(e) { t.prototype.next.call(this, this._value = e) }, e
            }(Tt.a),
            St = function() {
                function t() { this.bookmarkChangeNotifier = new Et(0), this.bookmarkInOrder = [] }
                return t.prototype.getConfig = function() { return { bookmark: !0, download: !0, goals: !0, like: !0, share: !0, feedback: !0, cohorts: !0, call: !0, mailer: !0 } }, t.prototype.getAllLikedIds = function() { throw new Error("Not implemented") }, t.prototype.like = function(t) { throw new Error("Not implemented") }, t.prototype.unlike = function(t) { throw new Error("Not implemented") }, t.prototype.getAllBookmarkedId = function() { throw new Error("Not implemented") }, t.prototype.bookmark = function(t) { throw new Error("Not implemented") }, t.prototype.unbookmark = function(t) { throw new Error("Not implemented") }, t.prototype.download = function(t) { throw new Error("Not implemented") }, t.prototype.isDownloadable = function(t) { throw new Error("Not implemented") }, t.prototype.shareMailSend = function(t, e, n, i) { throw new Error("Not Implemented") }, t.prototype.goalsTelemetryEvent = function(t) { throw new Error("Not Implemented") }, t.prototype.fetchUserGoals = function() { throw new Error("Not Implemented") }, t.prototype.updateGoal = function(t) { throw new Error("Not implemented") }, t
            }(),
            Mt = function() {
                function t() {}
                return t.prototype.navigateTo = function(t, e) { throw new Error("Not implemented") }, t.prototype.newTabRequest = function(t) { throw new Error("Not implemented") }, t.prototype.navigateToUrl = function(t) { throw new Error("Not implemented") }, t
            }(),
            Ot = function() {
                function t(t, e, n) { this.svc = t, this.util = e, this.navReq = n, this.goalFetchInProgress = !1, this.goalUpdateInprogress = !1, this.userGoals = [], this.show = !0, this.show = this.svc.getConfig().goals }
                return t.prototype.ngOnInit = function() { this.show && (this.goalModelRef = this.util.getUIModelRef(this.goalModal.nativeElement), this.goalDeleteRef = this.util.getUIModelRef(this.deleteModal.nativeElement)) }, t.prototype.ngOnDestroy = function() { this.util.modalPopup(this.goalModal.nativeElement, "hide"), this.util.modalPopup(this.deleteModal.nativeElement, "hide") }, t.prototype.fetchGoals = function() {
                    var t = this;
                    this.openGoalModal(), this.selectedGoal = {}, this.goalFetchInProgress = !0, this.svc.fetchUserGoals().subscribe(function(e) { t.goalFetchInProgress = !1, t.userGoals = e; for (var n = 0; n < t.userGoals.length; n++) t.userGoals[n].isChecked = -1 !== t.userGoals[n].goal_content_id.indexOf(t.cid) }, function(e) { t.util.notify("Some error occured! Unable to fetch your goals"), t.goalFetchInProgress = !1 })
                }, t.prototype.goalsChanged = function(t) {
                    if (t.isChecked) {
                        var e = t.goal_content_id.indexOf(this.cid);
                        t.goal_content_id.splice(e, 1)
                    } else t.goal_content_id.push(this.cid);
                    this.selectedGoal = t, 0 === this.selectedGoal.goal_content_id.length ? this.openDeleteModal() : this.updateGoal(!1)
                }, t.prototype.updateGoal = function(t) {
                    var e = this;
                    void 0 === t && (t = !1), this.goalUpdateInprogress = !0;
                    var n = { goal_data: [] };
                    n.goal_data[0] = {}, n.goal_data[0].goal_content_id = this.selectedGoal.goal_content_id, n.goal_data[0].goal_title = this.selectedGoal.goal_title, n.goal_data[0].goal_desc = this.selectedGoal.goal_desc, n.goal_data[0].goal_id = this.selectedGoal.goal_id, n.goal_data[0].goal_type = "user", this.svc.updateGoal(n).subscribe(function(n) { e.goalUpdateInprogress = !1, e.fetchGoals(), "success" === n.response[0].output[0].result ? ("success" === n.response[0].output[0].message ? e.util.notify(t ? "Goal successfully deleted" : "Goal succesfully updated") : "success" !== n.response[0].output[0].message && e.util.notify(n.response[0].output[0].message), e.svc.goalsTelemetryEvent(t ? "removed" : "updated")) : "fail" === n.response[0].output[0].result && ("fail" === n.response[0].output[0].message ? e.util.notify(t ? "Goal delete failed" : "Goal update failed! Please try again") : "fail" !== n.response[0].output[0].message && e.util.notify(n.response[0].output[0].message), e.svc.goalsTelemetryEvent("update_failed")) }, function(t) { e.util.notify("Some error occured! Please try again"), e.goalUpdateInprogress = !1 })
                }, t.prototype.navigate = function(t, e) { this.closeGoalModal(), this.navReq.navigateTo(t, e) }, t.prototype.openGoalModal = function() { this.goalModelRef.show() }, t.prototype.closeGoalModal = function() { this.goalModelRef.hide() }, t.prototype.openDeleteModal = function() { this.goalDeleteRef.show() }, t.prototype.closeDeleteModal = function() { this.goalDeleteRef.hide() }, t
            }(),
            At = i.T({
                encapsulation: 0,
                styles: [
                    [".goal-list[_ngcontent-%COMP%]{-webkit-overflow-scrolling:touch;height:100%;-ms-overflow-style:none;max-height:220px;overflow-y:auto}.goal-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px;height:5px}@media screen and (min-width:640px){.goal-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:10px;height:10px}}@media (hover:none){.goal-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:0!important;height:0!important}}.goal-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #ddd;-webkit-box-shadow:inset 0 0 6px #ddd}.goal-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:rgba(200,200,200,.5);outline:#eee solid 1px}.colorCode0[_ngcontent-%COMP%]{background-color:#e65d5d}.colorCode1[_ngcontent-%COMP%]{background-color:#428e9e}.colorCode2[_ngcontent-%COMP%]{background-color:#508b61}.colorCode3[_ngcontent-%COMP%]{background-color:#b89a5f}.colorCode4[_ngcontent-%COMP%]{background-color:#af578b}.colorCode5[_ngcontent-%COMP%]{background-color:#7896d2}.colorCode6[_ngcontent-%COMP%]{background-color:#24adb9}.user-goal[_ngcontent-%COMP%]{padding:5px;line-height:1.3;margin-bottom:5px}.cur-pointer[_ngcontent-%COMP%]{cursor:pointer}.title[_ngcontent-%COMP%]{color:rgba(33,33,33,.75)}"]
                ],
                data: {}
            });

        function Pt(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 3, "div", [
                ["class", "uk-inline"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(2, 0, null, null, 0, "button", [
                ["class", "uk-margin-right uk-text-meta"],
                ["title", "Add to goals"],
                ["uk-icon", "icon: plus-circle"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.fetchGoals() && i), i }, null, null)), (t()(), i._15(-1, null, ["\n"]))], null, null)
        }

        function Lt(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "hr", [
                ["class", "uk-margin-small"]
            ], null, null, null, null, null))], null, null)
        }

        function Vt(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 3, "div", [
                ["class", "uk-text-center"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(2, 0, null, null, 0, "div", [
                ["uk-spinner", ""]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n        "]))], null, null)
        }

        function Dt(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 11, "div", [
                ["class", "user-goal uk-flex"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n            "])), (t()(), i.V(2, 0, null, null, 3, "div", [], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n              "])), (t()(), i.V(4, 0, null, null, 0, "input", [
                ["class", "uk-checkbox"],
                ["type", "checkbox"]
            ], [
                [8, "disabled", 0],
                [8, "checked", 0]
            ], [
                [null, "change"]
            ], function(t, e, n) { var i = !0; return "change" === e && (i = !1 !== t.component.goalsChanged(t.context.$implicit) && i), i }, null, null)), (t()(), i._15(-1, null, ["\n            "])), (t()(), i._15(-1, null, ["\n            "])), (t()(), i.V(7, 0, null, null, 3, "div", [], null, null, null, null, null)), i.U(8, 278528, null, 0, Z, [i.n, i.o, i.h, i.w], { ngClass: [0, "ngClass"] }, null), i._9(9, { "uk-margin-small-left": 0 }), (t()(), i._15(10, null, ["", ""])), (t()(), i._15(-1, null, ["\n          "]))], function(t, e) { t(e, 8, 0, t(e, 9, 0, !0)) }, function(t, e) {
                var n = e.component;
                t(e, 4, 0, n.goalUpdateInprogress || n.goalFetchInProgress, e.context.$implicit.isChecked), t(e, 10, 0, e.context.$implicit.goal_title)
            })
        }

        function Nt(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 3, "div", [
                ["class", "uk-text-center"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(2, 0, null, null, 0, "div", [
                ["uk-spinner", ""]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n      "]))], null, null)
        }

        function Bt(t) {
            return i._17(0, [i._13(402653184, 1, { goalModal: 0 }), i._13(402653184, 2, { deleteModal: 0 }), (t()(), i.Q(16777216, null, null, 1, null, Pt)), i.U(3, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n\n"])), (t()(), i.V(5, 0, [
                [1, 0],
                ["goalModal", 1]
            ], null, 40, "div", [
                ["uk-modal", ""]
            ], [
                [8, "hidden", 0]
            ], null, null, null, null)), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(7, 0, null, null, 37, "div", [
                ["class", "uk-modal-dialog uk-margin-auto-vertical"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(9, 0, null, null, 0, "button", [
                ["class", "uk-modal-close-default"],
                ["type", "button"],
                ["uk-close", ""]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(11, 0, null, null, 32, "div", [
                ["class", "uk-modal-body uk-overflow-auto uk-padding-remove"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(13, 0, null, null, 29, "div", [
                ["class", "uk-padding-small"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(15, 0, null, null, 1, "div", [
                ["class", "uk-comment-title uk-text-muted uk-text-truncate"]
            ], null, null, null, null, null)), (t()(), i._15(16, null, ["", ""])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(18, 0, null, null, 1, "h4", [
                ["class", "uk-comment-title uk-margin-small-top uk-margin-remove-bottom title"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["Add to"])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.Q(16777216, null, null, 1, null, Lt)), i.U(22, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.Q(16777216, null, null, 1, null, Vt)), i.U(25, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(27, 0, null, null, 4, "div", [
                ["class", "goal-list"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, Dt)), i.U(30, 802816, null, 0, W, [i.E, i.B, i.n], { ngForOf: [0, "ngForOf"] }, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(33, 0, null, null, 0, "hr", [
                ["class", "uk-margin-small"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(35, 0, null, null, 6, "div", [
                ["class", "cur-pointer uk-comment-title title uk-padding-remove"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0,
                    o = t.component;
                return "click" === e && (i = !1 !== o.navigate("/profile/goals", { t: "add", id: o.cid }) && i), i
            }, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(37, 0, null, null, 0, "span", [
                ["uk-icon", "icon: plus; ratio: 0.8"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(39, 0, null, null, 1, "span", [
                ["class", "uk-margin-small-left"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["A new goal"])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i._15(-1, null, ["\n  "])), (t()(), i._15(-1, null, ["\n"])), (t()(), i._15(-1, null, ["\n\n"])), (t()(), i.V(47, 0, [
                [2, 0],
                ["deleteModal", 1]
            ], null, 27, "div", [
                ["uk-modal", ""]
            ], [
                [8, "hidden", 0]
            ], null, null, null, null)), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(49, 0, null, null, 24, "div", [
                ["class", "uk-modal-dialog uk-margin-auto-vertical"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(51, 0, null, null, 0, "button", [
                ["class", "uk-modal-close-default"],
                ["type", "button"],
                ["uk-close", ""]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(53, 0, null, null, 19, "div", [
                ["class", "uk-modal-body"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(55, 0, null, null, 1, "h3", [
                ["class", "title uk-text-truncate"]
            ], null, null, null, null, null)), (t()(), i._15(56, null, ["Delete goal: '", "'"])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(58, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), i._15(-1, null, ["Removing this course from goal will delete the goal. Do you wish to proceed?"])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.Q(16777216, null, null, 1, null, Nt)), i.U(62, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(64, 0, null, null, 7, "p", [
                ["class", "uk-text-right"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(66, 0, null, null, 1, "button", [
                ["class", "uk-button uk-button-default uk-modal-close"],
                ["type", "button"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0,
                    o = t.component;
                return "click" === e && (o.closeDeleteModal(), o.openGoalModal(), i = !1 !== o.fetchGoals() && i), i
            }, null, null)), (t()(), i._15(-1, null, ["Cancel"])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(69, 0, null, null, 1, "button", [
                ["class", "uk-button uk-button-danger"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.updateGoal(!0) && i), i }, null, null)), (t()(), i._15(-1, null, ["Proceed"])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i._15(-1, null, ["\n  "])), (t()(), i._15(-1, null, ["\n"])), (t()(), i._15(-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, n.show), t(e, 22, 0, n.userGoals.length > 0), t(e, 25, 0, n.goalFetchInProgress && 0 === n.userGoals.length), t(e, 30, 0, n.userGoals), t(e, 62, 0, n.goalUpdateInprogress)
            }, function(t, e) {
                var n = e.component;
                t(e, 5, 0, !n.show), t(e, 16, 0, n.entityTitle), t(e, 47, 0, !n.show), t(e, 56, 0, null == n.selectedGoal ? null : n.selectedGoal.goal_title)
            })
        }
        var jt = n("Veqx").a.of,
            Rt = n("OVmG");

        function Ut(t, e, n) { return function(i) { return i.lift(new $t(t, e, n)) } }
        var $t = function() {
                function t(t, e, n) { this.nextOrObserver = t, this.error = e, this.complete = n }
                return t.prototype.call = function(t, e) { return e.subscribe(new Ft(t, this.nextOrObserver, this.error, this.complete)) }, t
            }(),
            Ft = function(t) {
                function e(e, n, i, o) {
                    t.call(this, e);
                    var r = new Rt.a(n, i, o);
                    r.syncErrorThrowable = !0, this.add(r), this.safeSubscriber = r
                }
                return Object(s.b)(e, t), e.prototype._next = function(t) {
                    var e = this.safeSubscriber;
                    e.next(t), e.syncErrorThrown ? this.destination.error(e.syncErrorValue) : this.destination.next(t)
                }, e.prototype._error = function(t) {
                    var e = this.safeSubscriber;
                    e.error(t), this.destination.error(e.syncErrorThrown ? e.syncErrorValue : t)
                }, e.prototype._complete = function() {
                    var t = this.safeSubscriber;
                    t.complete(), t.syncErrorThrown ? this.destination.error(t.syncErrorValue) : this.destination.complete()
                }, e
            }(Rt.a),
            Ht = function() {
                function t(t) { this.svc = t, this.changeCount = 0, this.show = !0, this.lookup = {}, this.show = this.svc.getConfig().bookmark, this.show && this.updateHash(!0) }
                return t.prototype.updateHash = function(t, e) {
                    var n = this;
                    (e && e.length ? jt(e) : this.svc.getAllBookmarkedId()).subscribe(function(e) { t ? (e.forEach(function(t) { n.lookup[t] = !0 }), Array.prototype.unshift.apply(n.svc.bookmarkInOrder, e)) : e.forEach(function(t) { t in n.lookup && (delete n.lookup[t], n.svc.bookmarkInOrder.splice(n.svc.bookmarkInOrder.indexOf(t), 1)) }), n.svc.bookmarkChangeNotifier.next(++n.changeCount) })
                }, t.prototype.bookmark = function(t) { var e = this; return this.svc.bookmark(t).pipe(Ut(function(n) { e.updateHash(!0, [t]) })) }, t.prototype.unbookmark = function(t) { var e = this; return this.svc.unbookmark(t).pipe(Ut(function(n) { e.updateHash(!1, [t]) })) }, t
            }(),
            zt = function() {
                function t(t) { this.svc = t, this.inprogress = !1, this.show = !0, this.show = t.show }
                return t.prototype.ngOnInit = function() { this.show && (this.lookup = this.svc.lookup) }, t.prototype.unbookmark = function(t) {
                    var e = this;
                    t.stopPropagation(), t.preventDefault(), this.inprogress || (this.inprogress = !0, this.svc.unbookmark(this.cid).subscribe(function(t) { e.inprogress = !1 }))
                }, t.prototype.bookmark = function(t) {
                    var e = this;
                    t.stopPropagation(), t.preventDefault(), this.inprogress || (this.inprogress = !0, this.svc.bookmark(this.cid).subscribe(function(t) { e.inprogress = !1 }))
                }, t
            }(),
            Gt = i.T({
                encapsulation: 0,
                styles: [
                    [""]
                ],
                data: {}
            });

        function Zt(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "button", [
                ["class", "uk-margin-right uk-text-meta"],
                ["title", "Bookmark"],
                ["uk-icon", "icon: bookmark"]
            ], [
                [8, "hidden", 0]
            ], [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.bookmark(n) && i), i }, null, null))], null, function(t, e) {
                var n = e.component;
                t(e, 0, 0, n.lookup[n.cid] || n.inprogress)
            })
        }

        function qt(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "button", [
                ["class", "uk-margin-right uk-text-meta fill"],
                ["title", "UnBookmark"],
                ["uk-icon", "icon: bookmark"]
            ], [
                [8, "hidden", 0]
            ], [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.unbookmark(n) && i), i }, null, null))], null, function(t, e) {
                var n = e.component;
                t(e, 0, 0, !n.lookup[n.cid] || n.inprogress)
            })
        }

        function Wt(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "span", [
                ["class", "uk-margin-right uk-text-meta"],
                ["title", "Updating ..."],
                ["uk-icon", "icon: clock"]
            ], [
                [8, "hidden", 0]
            ], null, null, null, null))], null, function(t, e) { t(e, 0, 0, !e.component.inprogress) })
        }

        function Qt(t) {
            return i._17(0, [(t()(), i.Q(16777216, null, null, 1, null, Zt)), i.U(1, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n"])), (t()(), i.Q(16777216, null, null, 1, null, qt)), i.U(4, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n"])), (t()(), i.Q(16777216, null, null, 1, null, Wt)), i.U(7, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.show), t(e, 4, 0, n.show), t(e, 7, 0, n.show)
            }, null)
        }
        var Yt = function() {
                function t(t) { this.svc = t, this.show = !1 }
                return t.prototype.ngOnInit = function() { this.show = this.svc.getConfig().download && this.svc.isDownloadable(this.cid) }, t.prototype.download = function() { this.svc.download(this.cid) }, t
            }(),
            Kt = i.T({
                encapsulation: 0,
                styles: [
                    [""]
                ],
                data: {}
            });

        function Xt(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "button", [
                ["class", "uk-icon-link uk-margin-right uk-text-meta"],
                ["title", "Download"],
                ["uk-icon", "icon: download"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.download() && i), i }, null, null))], null, null)
        }

        function Jt(t) { return i._17(0, [(t()(), i.Q(16777216, null, null, 1, null, Xt)), i.U(1, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n"]))], function(t, e) { t(e, 1, 0, e.component.show) }, null) }
        var te = function() {
                function t(t, e) { this.actionSvc = t, this.navReq = e, this.show = !0 }
                return t.prototype.ngOnInit = function() { this.show = this.actionSvc.getConfig().cohorts }, t.prototype.navigate = function(t, e) { this.navReq.navigateTo(t, e) }, t
            }(),
            ee = i.T({
                encapsulation: 0,
                styles: [
                    [""]
                ],
                data: {}
            });

        function ne(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "button", [
                ["class", "uk-icon-link uk-margin-right uk-text-meta"],
                ["title", "Cohorts"],
                ["uk-icon", "icon: users"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0,
                    o = t.component;
                return "click" === e && (i = !1 !== o.navigate("/cohorts/" + o.cid) && i), i
            }, null, null))], null, null)
        }

        function ie(t) { return i._17(0, [(t()(), i.Q(16777216, null, null, 1, null, ne)), i.U(1, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n"]))], function(t, e) { t(e, 1, 0, e.component.show) }, null) }
        var oe = function() {
                function t(t) {
                    var e = this;
                    this.svc = t, this.lookup = {}, this.svc.getConfig().like && t.getAllLikedIds().subscribe(function(t) { t.forEach(function(t) { e.lookup[t] = !0 }) })
                }
                return t.prototype.like = function(t) { var e = this; return this.svc.like(t).pipe(Ut(function(n) { e.lookup[t] = !0 })) }, t.prototype.unlike = function(t) { var e = this; return this.svc.unlike(t).pipe(Ut(function(n) { delete e.lookup[t] })) }, t
            }(),
            re = function() {
                function t(t, e) { this.svc = t, this.inprogress = !1, this.show = !0, this.show = e.getConfig().like }
                return t.prototype.ngOnInit = function() {}, t.prototype.unlike = function(t) {
                    var e = this;
                    t.stopPropagation(), t.preventDefault(), this.inprogress || (this.inprogress = !0, this.svc.unlike(this.cid).subscribe(function(t) { e.inprogress = !1 }))
                }, t.prototype.like = function(t) {
                    var e = this;
                    t.stopPropagation(), t.preventDefault(), this.inprogress || (this.inprogress = !0, this.svc.like(this.cid).subscribe(function(t) { e.inprogress = !1 }))
                }, t
            }(),
            le = i.T({
                encapsulation: 0,
                styles: [
                    [""]
                ],
                data: {}
            });

        function se(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "button", [
                ["class", "uk-margin-right uk-text-meta"],
                ["title", "Like"],
                ["uk-icon", "icon: heart"]
            ], [
                [8, "hidden", 0]
            ], [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.like(n) && i), i }, null, null))], null, function(t, e) {
                var n = e.component;
                t(e, 0, 0, n.svc.lookup[n.cid] || n.inprogress)
            })
        }

        function ae(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "button", [
                ["class", "uk-margin-right uk-text-meta fill"],
                ["title", "Unlike"],
                ["uk-icon", "icon: heart"]
            ], [
                [8, "hidden", 0]
            ], [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.unlike(n) && i), i }, null, null))], null, function(t, e) {
                var n = e.component;
                t(e, 0, 0, !n.svc.lookup[n.cid] || n.inprogress)
            })
        }

        function ue(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "span", [
                ["class", "uk-margin-right uk-text-meta"],
                ["title", "Updating ..."],
                ["uk-icon", "icon: clock"]
            ], [
                [8, "hidden", 0]
            ], null, null, null, null))], null, function(t, e) { t(e, 0, 0, !e.component.inprogress) })
        }

        function ce(t) {
            return i._17(0, [(t()(), i.Q(16777216, null, null, 1, null, se)), i.U(1, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n"])), (t()(), i.Q(16777216, null, null, 1, null, ae)), i.U(4, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n"])), (t()(), i.Q(16777216, null, null, 1, null, ue)), i.U(7, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.show), t(e, 4, 0, n.show), t(e, 7, 0, n.show)
            }, null)
        }
        var de = n("+3/4"),
            he = n("BX3T"),
            pe = n("PIsA"),
            fe = n("tZ2B"),
            ge = function(t) {
                function e(e, n) { t.call(this), this.sources = e, this.resultSelector = n }
                return Object(s.b)(e, t), e.create = function() { for (var t = [], n = 0; n < arguments.length; n++) t[n - 0] = arguments[n]; if (null === t || 0 === arguments.length) return new de.a; var i = null; return "function" == typeof t[t.length - 1] && (i = t.pop()), 1 === t.length && Object(he.a)(t[0]) && (t = t[0]), 0 === t.length ? new de.a : new e(t, i) }, e.prototype._subscribe = function(t) { return new me(t, this.sources, this.resultSelector) }, e
            }(a.a),
            me = function(t) {
                function e(e, n, i) {
                    t.call(this, e), this.sources = n, this.resultSelector = i, this.completed = 0, this.haveValues = 0;
                    var o = n.length;
                    this.total = o, this.values = new Array(o);
                    for (var r = 0; r < o; r++) {
                        var l = n[r],
                            s = Object(pe.a)(this, l, null, r);
                        s && (s.outerIndex = r, this.add(s))
                    }
                }
                return Object(s.b)(e, t), e.prototype.notifyNext = function(t, e, n, i, o) { this.values[n] = e, o._hasValue || (o._hasValue = !0, this.haveValues++) }, e.prototype.notifyComplete = function(t) {
                    var e = this.destination,
                        n = this.haveValues,
                        i = this.resultSelector,
                        o = this.values,
                        r = o.length;
                    if (t._hasValue) {
                        if (this.completed++, this.completed === r) {
                            if (n === r) {
                                var l = i ? i.apply(this, o) : o;
                                e.next(l)
                            }
                            e.complete()
                        }
                    } else e.complete()
                }, e
            }(fe.a),
            ve = ge.create,
            ye = n("AMGY");

        function we(t) {
            var e = t.subscriber;
            e.closed || (e.next(t.value), e.complete())
        }

        function be(t) {
            var e = t.subscriber;
            e.closed || e.error(t.err)
        }
        var _e = function(t) {
                function e(e, n) { t.call(this), this.promise = e, this.scheduler = n }
                return Object(s.b)(e, t), e.create = function(t, n) { return new e(t, n) }, e.prototype._subscribe = function(t) {
                    var e = this,
                        n = this.promise,
                        i = this.scheduler;
                    if (null == i) this._isScalar ? t.closed || (t.next(this.value), t.complete()) : n.then(function(n) { e.value = n, e._isScalar = !0, t.closed || (t.next(n), t.complete()) }, function(e) { t.closed || t.error(e) }).then(null, function(t) { ye.a.setTimeout(function() { throw t }) });
                    else if (this._isScalar) { if (!t.closed) return i.schedule(we, 0, { value: this.value, subscriber: t }) } else n.then(function(n) { e.value = n, e._isScalar = !0, t.closed || t.add(i.schedule(we, 0, { value: n, subscriber: t })) }, function(e) { t.closed || t.add(i.schedule(be, 0, { err: e, subscriber: t })) }).then(null, function(t) { ye.a.setTimeout(function() { throw t }) })
                }, e
            }(a.a).create,
            Ce = function() {
                function t(t, e) { this.project = t, this.thisArg = e }
                return t.prototype.call = function(t, e) { return e.subscribe(new ke(t, this.project, this.thisArg)) }, t
            }(),
            ke = function(t) {
                function e(e, n, i) { t.call(this, e), this.project = n, this.count = 0, this.thisArg = i || this }
                return Object(s.b)(e, t), e.prototype._next = function(t) {
                    var e;
                    try { e = this.project.call(this.thisArg, t, this.count++) } catch (t) { return void this.destination.error(t) }
                    this.destination.next(e)
                }, e
            }(Rt.a),
            xe = null;

        function Te() { return xe }
        var Ie, Ee = { class: "className", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" },
            Se = { "\b": "Backspace", "\t": "Tab", "\x7f": "Delete", "\x1b": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" },
            Me = { A: "1", B: "2", C: "3", D: "4", E: "5", F: "6", G: "7", H: "8", I: "9", J: "*", K: "+", M: "-", N: ".", O: "/", "`": "0", "\x90": "NumLock" };
        i.W.Node && (Ie = i.W.Node.prototype.contains || function(t) { return !!(16 & this.compareDocumentPosition(t)) });
        var Oe, Ae = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return Object(s.b)(e, t), e.prototype.parse = function(t) { throw new Error("parse not implemented") }, e.makeCurrent = function() {
                    var t;
                    t = new e, xe || (xe = t)
                }, e.prototype.hasProperty = function(t, e) { return e in t }, e.prototype.setProperty = function(t, e, n) { t[e] = n }, e.prototype.getProperty = function(t, e) { return t[e] }, e.prototype.invoke = function(t, e, n) {
                    var i;
                    (i = t)[e].apply(i, n)
                }, e.prototype.logError = function(t) { window.console && (console.error ? console.error(t) : console.log(t)) }, e.prototype.log = function(t) { window.console && window.console.log && window.console.log(t) }, e.prototype.logGroup = function(t) { window.console && window.console.group && window.console.group(t) }, e.prototype.logGroupEnd = function() { window.console && window.console.groupEnd && window.console.groupEnd() }, Object.defineProperty(e.prototype, "attrToPropMap", { get: function() { return Ee }, enumerable: !0, configurable: !0 }), e.prototype.contains = function(t, e) { return Ie.call(t, e) }, e.prototype.querySelector = function(t, e) { return t.querySelector(e) }, e.prototype.querySelectorAll = function(t, e) { return t.querySelectorAll(e) }, e.prototype.on = function(t, e, n) { t.addEventListener(e, n, !1) }, e.prototype.onAndCancel = function(t, e, n) {
                    return t.addEventListener(e, n, !1),
                        function() { t.removeEventListener(e, n, !1) }
                }, e.prototype.dispatchEvent = function(t, e) { t.dispatchEvent(e) }, e.prototype.createMouseEvent = function(t) { var e = this.getDefaultDocument().createEvent("MouseEvent"); return e.initEvent(t, !0, !0), e }, e.prototype.createEvent = function(t) { var e = this.getDefaultDocument().createEvent("Event"); return e.initEvent(t, !0, !0), e }, e.prototype.preventDefault = function(t) { t.preventDefault(), t.returnValue = !1 }, e.prototype.isPrevented = function(t) { return t.defaultPrevented || null != t.returnValue && !t.returnValue }, e.prototype.getInnerHTML = function(t) { return t.innerHTML }, e.prototype.getTemplateContent = function(t) { return "content" in t && this.isTemplateElement(t) ? t.content : null }, e.prototype.getOuterHTML = function(t) { return t.outerHTML }, e.prototype.nodeName = function(t) { return t.nodeName }, e.prototype.nodeValue = function(t) { return t.nodeValue }, e.prototype.type = function(t) { return t.type }, e.prototype.content = function(t) { return this.hasProperty(t, "content") ? t.content : t }, e.prototype.firstChild = function(t) { return t.firstChild }, e.prototype.nextSibling = function(t) { return t.nextSibling }, e.prototype.parentElement = function(t) { return t.parentNode }, e.prototype.childNodes = function(t) { return t.childNodes }, e.prototype.childNodesAsList = function(t) { for (var e = t.childNodes, n = new Array(e.length), i = 0; i < e.length; i++) n[i] = e[i]; return n }, e.prototype.clearNodes = function(t) { for (; t.firstChild;) t.removeChild(t.firstChild) }, e.prototype.appendChild = function(t, e) { t.appendChild(e) }, e.prototype.removeChild = function(t, e) { t.removeChild(e) }, e.prototype.replaceChild = function(t, e, n) { t.replaceChild(e, n) }, e.prototype.remove = function(t) { return t.parentNode && t.parentNode.removeChild(t), t }, e.prototype.insertBefore = function(t, e, n) { t.insertBefore(n, e) }, e.prototype.insertAllBefore = function(t, e, n) { n.forEach(function(n) { return t.insertBefore(n, e) }) }, e.prototype.insertAfter = function(t, e, n) { t.insertBefore(n, e.nextSibling) }, e.prototype.setInnerHTML = function(t, e) { t.innerHTML = e }, e.prototype.getText = function(t) { return t.textContent }, e.prototype.setText = function(t, e) { t.textContent = e }, e.prototype.getValue = function(t) { return t.value }, e.prototype.setValue = function(t, e) { t.value = e }, e.prototype.getChecked = function(t) { return t.checked }, e.prototype.setChecked = function(t, e) { t.checked = e }, e.prototype.createComment = function(t) { return this.getDefaultDocument().createComment(t) }, e.prototype.createTemplate = function(t) { var e = this.getDefaultDocument().createElement("template"); return e.innerHTML = t, e }, e.prototype.createElement = function(t, e) { return (e = e || this.getDefaultDocument()).createElement(t) }, e.prototype.createElementNS = function(t, e, n) { return (n = n || this.getDefaultDocument()).createElementNS(t, e) }, e.prototype.createTextNode = function(t, e) { return (e = e || this.getDefaultDocument()).createTextNode(t) }, e.prototype.createScriptTag = function(t, e, n) { var i = (n = n || this.getDefaultDocument()).createElement("SCRIPT"); return i.setAttribute(t, e), i }, e.prototype.createStyleElement = function(t, e) { var n = (e = e || this.getDefaultDocument()).createElement("style"); return this.appendChild(n, this.createTextNode(t, e)), n }, e.prototype.createShadowRoot = function(t) { return t.createShadowRoot() }, e.prototype.getShadowRoot = function(t) { return t.shadowRoot }, e.prototype.getHost = function(t) { return t.host }, e.prototype.clone = function(t) { return t.cloneNode(!0) }, e.prototype.getElementsByClassName = function(t, e) { return t.getElementsByClassName(e) }, e.prototype.getElementsByTagName = function(t, e) { return t.getElementsByTagName(e) }, e.prototype.classList = function(t) { return Array.prototype.slice.call(t.classList, 0) }, e.prototype.addClass = function(t, e) { t.classList.add(e) }, e.prototype.removeClass = function(t, e) { t.classList.remove(e) }, e.prototype.hasClass = function(t, e) { return t.classList.contains(e) }, e.prototype.setStyle = function(t, e, n) { t.style[e] = n }, e.prototype.removeStyle = function(t, e) { t.style[e] = "" }, e.prototype.getStyle = function(t, e) { return t.style[e] }, e.prototype.hasStyle = function(t, e, n) { var i = this.getStyle(t, e) || ""; return n ? i == n : i.length > 0 }, e.prototype.tagName = function(t) { return t.tagName }, e.prototype.attributeMap = function(t) {
                    for (var e = new Map, n = t.attributes, i = 0; i < n.length; i++) {
                        var o = n.item(i);
                        e.set(o.name, o.value)
                    }
                    return e
                }, e.prototype.hasAttribute = function(t, e) { return t.hasAttribute(e) }, e.prototype.hasAttributeNS = function(t, e, n) { return t.hasAttributeNS(e, n) }, e.prototype.getAttribute = function(t, e) { return t.getAttribute(e) }, e.prototype.getAttributeNS = function(t, e, n) { return t.getAttributeNS(e, n) }, e.prototype.setAttribute = function(t, e, n) { t.setAttribute(e, n) }, e.prototype.setAttributeNS = function(t, e, n, i) { t.setAttributeNS(e, n, i) }, e.prototype.removeAttribute = function(t, e) { t.removeAttribute(e) }, e.prototype.removeAttributeNS = function(t, e, n) { t.removeAttributeNS(e, n) }, e.prototype.templateAwareRoot = function(t) { return this.isTemplateElement(t) ? this.content(t) : t }, e.prototype.createHtmlDocument = function() { return document.implementation.createHTMLDocument("fakeTitle") }, e.prototype.getDefaultDocument = function() { return document }, e.prototype.getBoundingClientRect = function(t) { try { return t.getBoundingClientRect() } catch (t) { return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 } } }, e.prototype.getTitle = function(t) { return t.title }, e.prototype.setTitle = function(t, e) { t.title = e || "" }, e.prototype.elementMatches = function(t, e) { return !!this.isElementNode(t) && (t.matches && t.matches(e) || t.msMatchesSelector && t.msMatchesSelector(e) || t.webkitMatchesSelector && t.webkitMatchesSelector(e)) }, e.prototype.isTemplateElement = function(t) { return this.isElementNode(t) && "TEMPLATE" === t.nodeName }, e.prototype.isTextNode = function(t) { return t.nodeType === Node.TEXT_NODE }, e.prototype.isCommentNode = function(t) { return t.nodeType === Node.COMMENT_NODE }, e.prototype.isElementNode = function(t) { return t.nodeType === Node.ELEMENT_NODE }, e.prototype.hasShadowRoot = function(t) { return null != t.shadowRoot && t instanceof HTMLElement }, e.prototype.isShadowRoot = function(t) { return t instanceof DocumentFragment }, e.prototype.importIntoDoc = function(t) { return document.importNode(this.templateAwareRoot(t), !0) }, e.prototype.adoptNode = function(t) { return document.adoptNode(t) }, e.prototype.getHref = function(t) { return t.getAttribute("href") }, e.prototype.getEventKey = function(t) {
                    var e = t.key;
                    if (null == e) {
                        if (null == (e = t.keyIdentifier)) return "Unidentified";
                        e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && Me.hasOwnProperty(e) && (e = Me[e]))
                    }
                    return Se[e] || e
                }, e.prototype.getGlobalEventTarget = function(t, e) { return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null }, e.prototype.getHistory = function() { return window.history }, e.prototype.getLocation = function() { return window.location }, e.prototype.getBaseHref = function(t) { var e, n = Pe || (Pe = document.querySelector("base")) ? Pe.getAttribute("href") : null; return null == n ? null : (e = n, Oe || (Oe = document.createElement("a")), Oe.setAttribute("href", e), "/" === Oe.pathname.charAt(0) ? Oe.pathname : "/" + Oe.pathname) }, e.prototype.resetBaseElement = function() { Pe = null }, e.prototype.getUserAgent = function() { return window.navigator.userAgent }, e.prototype.setData = function(t, e, n) { this.setAttribute(t, "data-" + e, n) }, e.prototype.getData = function(t, e) { return this.getAttribute(t, "data-" + e) }, e.prototype.getComputedStyle = function(t) { return getComputedStyle(t) }, e.prototype.supportsWebAnimation = function() { return "function" == typeof Element.prototype.animate }, e.prototype.performanceNow = function() { return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime() }, e.prototype.supportsCookies = function() { return !0 }, e.prototype.getCookie = function(t) {
                    return function(t, e) {
                        e = encodeURIComponent(e);
                        for (var n = 0, i = t.split(";"); n < i.length; n++) {
                            var o = i[n],
                                r = o.indexOf("="),
                                l = -1 == r ? [o, ""] : [o.slice(0, r), o.slice(r + 1)],
                                s = l[1];
                            if (l[0].trim() === e) return decodeURIComponent(s)
                        }
                        return null
                    }(document.cookie, t)
                }, e.prototype.setCookie = function(t, e) { document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) }, e
            }(function(t) {
                function e() {
                    var e = t.call(this) || this;
                    e._animationPrefix = null, e._transitionEnd = null;
                    try {
                        var n = e.createElement("div", document);
                        if (null != e.getStyle(n, "animationName")) e._animationPrefix = "";
                        else
                            for (var i = ["Webkit", "Moz", "O", "ms"], o = 0; o < i.length; o++)
                                if (null != e.getStyle(n, i[o] + "AnimationName")) { e._animationPrefix = "-" + i[o].toLowerCase() + "-"; break } var r = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                        Object.keys(r).forEach(function(t) { null != e.getStyle(n, t) && (e._transitionEnd = r[t]) })
                    } catch (t) { e._animationPrefix = null, e._transitionEnd = null }
                    return e
                }
                return Object(s.b)(e, t), e.prototype.getDistributedNodes = function(t) { return t.getDistributedNodes() }, e.prototype.resolveAndSetHref = function(t, e, n) { t.href = null == n ? e : e + "/../" + n }, e.prototype.supportsDOMEvents = function() { return !0 }, e.prototype.supportsNativeShadowDOM = function() { return "function" == typeof document.body.createShadowRoot }, e.prototype.getAnimationPrefix = function() { return this._animationPrefix ? this._animationPrefix : "" }, e.prototype.getTransitionEnd = function() { return this._transitionEnd ? this._transitionEnd : "" }, e.prototype.supportsAnimation = function() { return null != this._animationPrefix && null != this._transitionEnd }, e
            }(function() {
                function t() { this.resourceLoaderType = null }
                return Object.defineProperty(t.prototype, "attrToPropMap", { get: function() { return this._attrToPropMap }, set: function(t) { this._attrToPropMap = t }, enumerable: !0, configurable: !0 }), t
            }())),
            Pe = null,
            Le = kt;

        function Ve() { return !!window.history.pushState }
        var De = function(t) {
                function e(e) { var n = t.call(this) || this; return n._doc = e, n._init(), n }
                return Object(s.b)(e, t), e.prototype._init = function() { this.location = Te().getLocation(), this._history = Te().getHistory() }, e.prototype.getBaseHrefFromDOM = function() { return Te().getBaseHref(this._doc) }, e.prototype.onPopState = function(t) { Te().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1) }, e.prototype.onHashChange = function(t) { Te().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1) }, Object.defineProperty(e.prototype, "pathname", { get: function() { return this.location.pathname }, set: function(t) { this.location.pathname = t }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "search", { get: function() { return this.location.search }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "hash", { get: function() { return this.location.hash }, enumerable: !0, configurable: !0 }), e.prototype.pushState = function(t, e, n) { Ve() ? this._history.pushState(t, e, n) : this.location.hash = n }, e.prototype.replaceState = function(t, e, n) { Ve() ? this._history.replaceState(t, e, n) : this.location.hash = n }, e.prototype.forward = function() { this._history.forward() }, e.prototype.back = function() { this._history.back() }, e.ctorParameters = function() { return [{ type: void 0, decorators: [{ type: i.k, args: [Le] }] }] }, e
            }(E),
            Ne = function() {
                function t(t) { this._doc = t, this._dom = Te() }
                return t.prototype.addTag = function(t, e) { return void 0 === e && (e = !1), t ? this._getOrCreateElement(t, e) : null }, t.prototype.addTags = function(t, e) { var n = this; return void 0 === e && (e = !1), t ? t.reduce(function(t, i) { return i && t.push(n._getOrCreateElement(i, e)), t }, []) : [] }, t.prototype.getTag = function(t) { return t && this._dom.querySelector(this._doc, "meta[" + t + "]") || null }, t.prototype.getTags = function(t) { if (!t) return []; var e = this._dom.querySelectorAll(this._doc, "meta[" + t + "]"); return e ? [].slice.call(e) : [] }, t.prototype.updateTag = function(t, e) {
                    if (!t) return null;
                    e = e || this._parseSelector(t);
                    var n = this.getTag(e);
                    return n ? this._setMetaElementAttributes(t, n) : this._getOrCreateElement(t, !0)
                }, t.prototype.removeTag = function(t) { this.removeTagElement(this.getTag(t)) }, t.prototype.removeTagElement = function(t) { t && this._dom.remove(t) }, t.prototype._getOrCreateElement = function(t, e) {
                    if (void 0 === e && (e = !1), !e) {
                        var n = this._parseSelector(t),
                            i = this.getTag(n);
                        if (i && this._containsAttributes(t, i)) return i
                    }
                    var o = this._dom.createElement("meta");
                    this._setMetaElementAttributes(t, o);
                    var r = this._dom.getElementsByTagName(this._doc, "head")[0];
                    return this._dom.appendChild(r, o), o
                }, t.prototype._setMetaElementAttributes = function(t, e) { var n = this; return Object.keys(t).forEach(function(i) { return n._dom.setAttribute(e, i, t[i]) }), e }, t.prototype._parseSelector = function(t) { var e = t.name ? "name" : "property"; return e + '="' + t[e] + '"' }, t.prototype._containsAttributes = function(t, e) { var n = this; return Object.keys(t).every(function(i) { return n._dom.getAttribute(e, i) === t[i] }) }, t
            }(),
            Be = new i.l("TRANSITION_ID"),
            je = [{
                provide: i.b,
                useFactory: function(t, e, n) {
                    return function() {
                        n.get(i.c).donePromise.then(function() {
                            var n = Te();
                            Array.prototype.slice.apply(n.querySelectorAll(e, "style[ng-transition]")).filter(function(e) { return n.getAttribute(e, "ng-transition") === t }).forEach(function(t) { return n.remove(t) })
                        })
                    }
                },
                deps: [Be, Le, i.m],
                multi: !0
            }],
            Re = function() {
                function t() {}
                return t.init = function() { Object(i.N)(new t) }, t.prototype.addToWindow = function(t) {
                    i.W.getAngularTestability = function(e, n) { void 0 === n && (n = !0); var i = t.findTestabilityInTree(e, n); if (null == i) throw new Error("Could not find testability for element."); return i }, i.W.getAllAngularTestabilities = function() { return t.getAllTestabilities() }, i.W.getAllAngularRootElements = function() { return t.getAllRootElements() }, i.W.frameworkStabilizers || (i.W.frameworkStabilizers = []), i.W.frameworkStabilizers.push(function(t) {
                        var e = i.W.getAllAngularTestabilities(),
                            n = e.length,
                            o = !1,
                            r = function(e) { o = o || e, 0 == --n && t(o) };
                        e.forEach(function(t) { t.whenStable(r) })
                    })
                }, t.prototype.findTestabilityInTree = function(t, e, n) { if (null == e) return null; var i = t.getTestability(e); return null != i ? i : n ? Te().isShadowRoot(e) ? this.findTestabilityInTree(t, Te().getHost(e), !0) : this.findTestabilityInTree(t, Te().parentElement(e), !0) : null }, t
            }(),
            Ue = function() {
                function t(t) { this._doc = t }
                return t.prototype.getTitle = function() { return Te().getTitle(this._doc) }, t.prototype.setTitle = function(t) { Te().setTitle(this._doc, t) }, t
            }();

        function $e(t, e) { "undefined" != typeof COMPILED && COMPILED || ((i.W.ng = i.W.ng || {})[t] = e) }
        var Fe = { ApplicationRef: i.e, NgZone: i.s };

        function He(t) { return Object(i.K)(t) }
        var ze = new i.l("EventManagerPlugins"),
            Ge = function() {
                function t(t, e) {
                    var n = this;
                    this._zone = e, this._eventNameToPlugin = new Map, t.forEach(function(t) { return t.manager = n }), this._plugins = t.slice().reverse()
                }
                return t.prototype.addEventListener = function(t, e, n) { return this._findPluginFor(e).addEventListener(t, e, n) }, t.prototype.addGlobalEventListener = function(t, e, n) { return this._findPluginFor(e).addGlobalEventListener(t, e, n) }, t.prototype.getZone = function() { return this._zone }, t.prototype._findPluginFor = function(t) { var e = this._eventNameToPlugin.get(t); if (e) return e; for (var n = this._plugins, i = 0; i < n.length; i++) { var o = n[i]; if (o.supports(t)) return this._eventNameToPlugin.set(t, o), o } throw new Error("No event manager plugin found for event " + t) }, t
            }(),
            Ze = function() {
                function t(t) { this._doc = t }
                return t.prototype.addGlobalEventListener = function(t, e, n) { var i = Te().getGlobalEventTarget(this._doc, t); if (!i) throw new Error("Unsupported event target " + i + " for event " + e); return this.addEventListener(i, e, n) }, t
            }(),
            qe = function() {
                function t() { this._stylesSet = new Set }
                return t.prototype.addStyles = function(t) {
                    var e = this,
                        n = new Set;
                    t.forEach(function(t) { e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t)) }), this.onStylesAdded(n)
                }, t.prototype.onStylesAdded = function(t) {}, t.prototype.getAllStyles = function() { return Array.from(this._stylesSet) }, t
            }(),
            We = function(t) {
                function e(e) { var n = t.call(this) || this; return n._doc = e, n._hostNodes = new Set, n._styleNodes = new Set, n._hostNodes.add(e.head), n }
                return Object(s.b)(e, t), e.prototype._addStylesToHost = function(t, e) {
                    var n = this;
                    t.forEach(function(t) {
                        var i = n._doc.createElement("style");
                        i.textContent = t, n._styleNodes.add(e.appendChild(i))
                    })
                }, e.prototype.addHost = function(t) { this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t) }, e.prototype.removeHost = function(t) { this._hostNodes.delete(t) }, e.prototype.onStylesAdded = function(t) {
                    var e = this;
                    this._hostNodes.forEach(function(n) { return e._addStylesToHost(t, n) })
                }, e.prototype.ngOnDestroy = function() { this._styleNodes.forEach(function(t) { return Te().remove(t) }) }, e
            }(qe),
            Qe = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
            Ye = /%COMP%/g,
            Ke = "_nghost-%COMP%",
            Xe = "_ngcontent-%COMP%";

        function Je(t, e, n) {
            for (var i = 0; i < e.length; i++) {
                var o = e[i];
                Array.isArray(o) ? Je(t, o, n) : (o = o.replace(Ye, t), n.push(o))
            }
            return n
        }

        function tn(t) { return function(e) {!1 === t(e) && (e.preventDefault(), e.returnValue = !1) } }
        var en = function() {
                function t(t, e) { this.eventManager = t, this.sharedStylesHost = e, this.rendererByCompId = new Map, this.defaultRenderer = new nn(t) }
                return t.prototype.createRenderer = function(t, e) {
                    if (!t || !e) return this.defaultRenderer;
                    switch (e.encapsulation) {
                        case i.F.Emulated:
                            var n = this.rendererByCompId.get(e.id);
                            return n || (n = new sn(this.eventManager, this.sharedStylesHost, e), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n;
                        case i.F.Native:
                            return new an(this.eventManager, this.sharedStylesHost, t, e);
                        default:
                            if (!this.rendererByCompId.has(e.id)) {
                                var o = Je(e.id, e.styles, []);
                                this.sharedStylesHost.addStyles(o), this.rendererByCompId.set(e.id, this.defaultRenderer)
                            }
                            return this.defaultRenderer
                    }
                }, t.prototype.begin = function() {}, t.prototype.end = function() {}, t
            }(),
            nn = function() {
                function t(t) { this.eventManager = t, this.data = Object.create(null) }
                return t.prototype.destroy = function() {}, t.prototype.createElement = function(t, e) { return e ? document.createElementNS(Qe[e], t) : document.createElement(t) }, t.prototype.createComment = function(t) { return document.createComment(t) }, t.prototype.createText = function(t) { return document.createTextNode(t) }, t.prototype.appendChild = function(t, e) { t.appendChild(e) }, t.prototype.insertBefore = function(t, e, n) { t && t.insertBefore(e, n) }, t.prototype.removeChild = function(t, e) { t && t.removeChild(e) }, t.prototype.selectRootElement = function(t) { var e = "string" == typeof t ? document.querySelector(t) : t; if (!e) throw new Error('The selector "' + t + '" did not match any elements'); return e.textContent = "", e }, t.prototype.parentNode = function(t) { return t.parentNode }, t.prototype.nextSibling = function(t) { return t.nextSibling }, t.prototype.setAttribute = function(t, e, n, i) {
                    if (i) {
                        e = i + ":" + e;
                        var o = Qe[i];
                        o ? t.setAttributeNS(o, e, n) : t.setAttribute(e, n)
                    } else t.setAttribute(e, n)
                }, t.prototype.removeAttribute = function(t, e, n) {
                    if (n) {
                        var i = Qe[n];
                        i ? t.removeAttributeNS(i, e) : t.removeAttribute(n + ":" + e)
                    } else t.removeAttribute(e)
                }, t.prototype.addClass = function(t, e) { t.classList.add(e) }, t.prototype.removeClass = function(t, e) { t.classList.remove(e) }, t.prototype.setStyle = function(t, e, n, o) { o & i.y.DashCase ? t.style.setProperty(e, n, o & i.y.Important ? "important" : "") : t.style[e] = n }, t.prototype.removeStyle = function(t, e, n) { n & i.y.DashCase ? t.style.removeProperty(e) : t.style[e] = "" }, t.prototype.setProperty = function(t, e, n) { rn(e, "property"), t[e] = n }, t.prototype.setValue = function(t, e) { t.nodeValue = e }, t.prototype.listen = function(t, e, n) { return rn(e, "listener"), "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, tn(n)) : this.eventManager.addEventListener(t, e, tn(n)) }, t
            }(),
            on = "@".charCodeAt(0);

        function rn(t, e) { if (t.charCodeAt(0) === on) throw new Error("Found the synthetic " + e + " " + t + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.') }
        var ln, sn = function(t) {
                function e(e, n, i) {
                    var o = t.call(this, e) || this;
                    o.component = i;
                    var r = Je(i.id, i.styles, []);
                    return n.addStyles(r), o.contentAttr = Xe.replace(Ye, i.id), o.hostAttr = Ke.replace(Ye, i.id), o
                }
                return Object(s.b)(e, t), e.prototype.applyToHost = function(e) { t.prototype.setAttribute.call(this, e, this.hostAttr, "") }, e.prototype.createElement = function(e, n) { var i = t.prototype.createElement.call(this, e, n); return t.prototype.setAttribute.call(this, i, this.contentAttr, ""), i }, e
            }(nn),
            an = function(t) {
                function e(e, n, i, o) {
                    var r = t.call(this, e) || this;
                    r.sharedStylesHost = n, r.hostEl = i, r.component = o, r.shadowRoot = i.createShadowRoot(), r.sharedStylesHost.addHost(r.shadowRoot);
                    for (var l = Je(o.id, o.styles, []), s = 0; s < l.length; s++) {
                        var a = document.createElement("style");
                        a.textContent = l[s], r.shadowRoot.appendChild(a)
                    }
                    return r
                }
                return Object(s.b)(e, t), e.prototype.nodeOrShadowRoot = function(t) { return t === this.hostEl ? this.shadowRoot : t }, e.prototype.destroy = function() { this.sharedStylesHost.removeHost(this.shadowRoot) }, e.prototype.appendChild = function(e, n) { return t.prototype.appendChild.call(this, this.nodeOrShadowRoot(e), n) }, e.prototype.insertBefore = function(e, n, i) { return t.prototype.insertBefore.call(this, this.nodeOrShadowRoot(e), n, i) }, e.prototype.removeChild = function(e, n) { return t.prototype.removeChild.call(this, this.nodeOrShadowRoot(e), n) }, e.prototype.parentNode = function(e) { return this.nodeOrShadowRoot(t.prototype.parentNode.call(this, this.nodeOrShadowRoot(e))) }, e
            }(nn),
            un = "undefined" != typeof Zone && Zone.__symbol__ || function(t) { return "__zone_symbol__" + t },
            cn = un("addEventListener"),
            dn = un("removeEventListener"),
            hn = {},
            pn = "__zone_symbol__propagationStopped";
        "undefined" != typeof Zone && Zone[un("BLACK_LISTED_EVENTS")] && (ln = {});
        var fn = function(t) { return !!ln && ln.hasOwnProperty(t) },
            gn = function(t) {
                var e = hn[t.type];
                if (e) {
                    var n = this[e];
                    if (n) {
                        var i = [t];
                        if (1 === n.length) return (l = n[0]).zone !== Zone.current ? l.zone.run(l.handler, this, i) : l.handler.apply(this, i);
                        for (var o = n.slice(), r = 0; r < o.length && !0 !== t[pn]; r++) {
                            var l;
                            (l = o[r]).zone !== Zone.current ? l.zone.run(l.handler, this, i) : l.handler.apply(this, i)
                        }
                    }
                }
            },
            mn = function(t) {
                function e(e, n) { var i = t.call(this, e) || this; return i.ngZone = n, i.patchEvent(), i }
                return Object(s.b)(e, t), e.prototype.patchEvent = function() {
                    if (Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
                        var t = Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
                        Event.prototype.stopImmediatePropagation = function() { this && (this[pn] = !0), t && t.apply(this, arguments) }
                    }
                }, e.prototype.supports = function(t) { return !0 }, e.prototype.addEventListener = function(t, e, n) {
                    var o = this,
                        r = n;
                    if (!t[cn] || i.s.isInAngularZone() && !fn(e)) t.addEventListener(e, r, !1);
                    else {
                        var l = hn[e];
                        l || (l = hn[e] = un("ANGULAR" + e + "FALSE"));
                        var s = t[l],
                            a = s && s.length > 0;
                        s || (s = t[l] = []);
                        var u = fn(e) ? Zone.root : Zone.current;
                        if (0 === s.length) s.push({ zone: u, handler: r });
                        else {
                            for (var c = !1, d = 0; d < s.length; d++)
                                if (s[d].handler === r) { c = !0; break }
                            c || s.push({ zone: u, handler: r })
                        }
                        a || t[cn](e, gn, !1)
                    }
                    return function() { return o.removeEventListener(t, e, r) }
                }, e.prototype.removeEventListener = function(t, e, n) {
                    var i = t[dn];
                    if (!i) return t.removeEventListener.apply(t, [e, n, !1]);
                    var o = hn[e],
                        r = o && t[o];
                    if (!r) return t.removeEventListener.apply(t, [e, n, !1]);
                    for (var l = !1, s = 0; s < r.length; s++)
                        if (r[s].handler === n) { l = !0, r.splice(s, 1); break }
                    l ? 0 === r.length && i.apply(t, [e, gn, !1]) : t.removeEventListener.apply(t, [e, n, !1])
                }, e
            }(Ze),
            vn = { pan: !0, panstart: !0, panmove: !0, panend: !0, pancancel: !0, panleft: !0, panright: !0, panup: !0, pandown: !0, pinch: !0, pinchstart: !0, pinchmove: !0, pinchend: !0, pinchcancel: !0, pinchin: !0, pinchout: !0, press: !0, pressup: !0, rotate: !0, rotatestart: !0, rotatemove: !0, rotateend: !0, rotatecancel: !0, swipe: !0, swipeleft: !0, swiperight: !0, swipeup: !0, swipedown: !0, tap: !0 },
            yn = new i.l("HammerGestureConfig"),
            wn = function() {
                function t() { this.events = [], this.overrides = {} }
                return t.prototype.buildHammer = function(t) { var e = new Hammer(t); for (var n in e.get("pinch").set({ enable: !0 }), e.get("rotate").set({ enable: !0 }), this.overrides) e.get(n).set(this.overrides[n]); return e }, t
            }(),
            bn = function(t) {
                function e(e, n) { var i = t.call(this, e) || this; return i._config = n, i }
                return Object(s.b)(e, t), e.prototype.supports = function(t) { if (!vn.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t)) return !1; if (!window.Hammer) throw new Error("Hammer.js is not loaded, can not bind " + t + " event"); return !0 }, e.prototype.addEventListener = function(t, e, n) {
                    var i = this,
                        o = this.manager.getZone();
                    return e = e.toLowerCase(), o.runOutsideAngular(function() {
                        var r = i._config.buildHammer(t),
                            l = function(t) { o.runGuarded(function() { n(t) }) };
                        return r.on(e, l),
                            function() { return r.off(e, l) }
                    })
                }, e.prototype.isCustomEvent = function(t) { return this._config.events.indexOf(t) > -1 }, e
            }(Ze),
            _n = ["alt", "control", "meta", "shift"],
            Cn = { alt: function(t) { return t.altKey }, control: function(t) { return t.ctrlKey }, meta: function(t) { return t.metaKey }, shift: function(t) { return t.shiftKey } },
            kn = function(t) {
                function e(e) { return t.call(this, e) || this }
                return Object(s.b)(e, t), e.prototype.supports = function(t) { return null != e.parseEventName(t) }, e.prototype.addEventListener = function(t, n, i) {
                    var o = e.parseEventName(n),
                        r = e.eventCallback(o.fullKey, i, this.manager.getZone());
                    return this.manager.getZone().runOutsideAngular(function() { return Te().onAndCancel(t, o.domEventName, r) })
                }, e.parseEventName = function(t) {
                    var n = t.toLowerCase().split("."),
                        i = n.shift();
                    if (0 === n.length || "keydown" !== i && "keyup" !== i) return null;
                    var o = e._normalizeKey(n.pop()),
                        r = "";
                    if (_n.forEach(function(t) {
                            var e = n.indexOf(t);
                            e > -1 && (n.splice(e, 1), r += t + ".")
                        }), r += o, 0 != n.length || 0 === o.length) return null;
                    var l = {};
                    return l.domEventName = i, l.fullKey = r, l
                }, e.getEventFullKey = function(t) {
                    var e = "",
                        n = Te().getEventKey(t);
                    return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), _n.forEach(function(i) { i != n && (0, Cn[i])(t) && (e += i + ".") }), e += n
                }, e.eventCallback = function(t, n, i) { return function(o) { e.getEventFullKey(o) === t && i.runGuarded(function() { return n(o) }) } }, e._normalizeKey = function(t) {
                    switch (t) {
                        case "esc":
                            return "escape";
                        default:
                            return t
                    }
                }, e
            }(Ze),
            xn = function() {
                function t(t, e) {
                    this.defaultDoc = t, this.DOM = e;
                    var n = this.DOM.createHtmlDocument();
                    if (this.inertBodyElement = n.body, null == this.inertBodyElement) {
                        var i = this.DOM.createElement("html", n);
                        this.inertBodyElement = this.DOM.createElement("body", n), this.DOM.appendChild(i, this.inertBodyElement), this.DOM.appendChild(n, i)
                    }
                    this.DOM.setInnerHTML(this.inertBodyElement, '<svg><g onload="this.parentNode.remove()"></g></svg>'), !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.DOM.setInnerHTML(this.inertBodyElement, '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'), this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && function() { try { return !!window.DOMParser } catch (t) { return !1 } }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR
                }
                return t.prototype.getInertBodyElement_XHR = function(t) {
                    t = "<body><remove></remove>" + t + "</body>";
                    try { t = encodeURI(t) } catch (t) { return null }
                    var e = new XMLHttpRequest;
                    e.responseType = "document", e.open("GET", "data:text/html;charset=utf-8," + t, !1), e.send(null);
                    var n = e.response.body;
                    return n.removeChild(n.firstChild), n
                }, t.prototype.getInertBodyElement_DOMParser = function(t) { t = "<body><remove></remove>" + t + "</body>"; try { var e = (new window.DOMParser).parseFromString(t, "text/html").body; return e.removeChild(e.firstChild), e } catch (t) { return null } }, t.prototype.getInertBodyElement_InertDocument = function(t) { var e = this.DOM.createElement("template"); return "content" in e ? (this.DOM.setInnerHTML(e, t), e) : (this.DOM.setInnerHTML(this.inertBodyElement, t), this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement) }, t.prototype.stripCustomNsAttrs = function(t) {
                    var e = this;
                    this.DOM.attributeMap(t).forEach(function(n, i) { "xmlns:ns1" !== i && 0 !== i.indexOf("ns1:") || e.DOM.removeAttribute(t, i) });
                    for (var n = 0, i = this.DOM.childNodesAsList(t); n < i.length; n++) {
                        var o = i[n];
                        this.DOM.isElementNode(o) && this.stripCustomNsAttrs(o)
                    }
                }, t
            }(),
            Tn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            In = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

        function En(t) { return (t = String(t)).match(Tn) || t.match(In) ? t : (Object(i.L)() && Te().log("WARNING: sanitizing unsafe URL value " + t + " (see http://g.co/ng/security#xss)"), "unsafe:" + t) }

        function Sn(t) { for (var e = {}, n = 0, i = t.split(","); n < i.length; n++) e[i[n]] = !0; return e }

        function Mn() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; for (var n = {}, i = 0, o = t; i < o.length; i++) { var r = o[i]; for (var l in r) r.hasOwnProperty(l) && (n[l] = !0) } return n }
        var On, An = Sn("area,br,col,hr,img,wbr"),
            Pn = Sn("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            Ln = Sn("rp,rt"),
            Vn = Mn(Ln, Pn),
            Dn = Mn(An, Mn(Pn, Sn("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Mn(Ln, Sn("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Vn),
            Nn = Sn("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
            Bn = Sn("srcset"),
            jn = Mn(Nn, Bn, Sn("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width")),
            Rn = function() {
                function t() { this.sanitizedSomething = !1, this.buf = [], this.DOM = Te() }
                return t.prototype.sanitizeChildren = function(t) {
                    for (var e = this.DOM.firstChild(t); e;)
                        if (this.DOM.isElementNode(e) ? this.startElement(e) : this.DOM.isTextNode(e) ? this.chars(this.DOM.nodeValue(e)) : this.sanitizedSomething = !0, this.DOM.firstChild(e)) e = this.DOM.firstChild(e);
                        else
                            for (; e;) {
                                this.DOM.isElementNode(e) && this.endElement(e);
                                var n = this.checkClobberedElement(e, this.DOM.nextSibling(e));
                                if (n) { e = n; break }
                                e = this.checkClobberedElement(e, this.DOM.parentElement(e))
                            }
                    return this.buf.join("")
                }, t.prototype.startElement = function(t) {
                    var e = this,
                        n = this.DOM.nodeName(t).toLowerCase();
                    Dn.hasOwnProperty(n) ? (this.buf.push("<"), this.buf.push(n), this.DOM.attributeMap(t).forEach(function(t, n) {
                        var i, o = n.toLowerCase();
                        jn.hasOwnProperty(o) ? (Nn[o] && (t = En(t)), Bn[o] && (i = t, t = (i = String(i)).split(",").map(function(t) { return En(t.trim()) }).join(", ")), e.buf.push(" "), e.buf.push(n), e.buf.push('="'), e.buf.push(Fn(t)), e.buf.push('"')) : e.sanitizedSomething = !0
                    }), this.buf.push(">")) : this.sanitizedSomething = !0
                }, t.prototype.endElement = function(t) {
                    var e = this.DOM.nodeName(t).toLowerCase();
                    Dn.hasOwnProperty(e) && !An.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">"))
                }, t.prototype.chars = function(t) { this.buf.push(Fn(t)) }, t.prototype.checkClobberedElement = function(t, e) { if (e && this.DOM.contains(t, e)) throw new Error("Failed to sanitize html because the element is clobbered: " + this.DOM.getOuterHTML(t)); return e }, t
            }(),
            Un = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            $n = /([^\#-~ |!])/g;

        function Fn(t) { return t.replace(/&/g, "&amp;").replace(Un, function(t) { return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";" }).replace($n, function(t) { return "&#" + t.charCodeAt(0) + ";" }).replace(/</g, "&lt;").replace(/>/g, "&gt;") }
        var Hn = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
            zn = /^url\(([^)]+)\)$/,
            Gn = function() {},
            Zn = function(t) {
                function e(e) { var n = t.call(this) || this; return n._doc = e, n }
                return Object(s.b)(e, t), e.prototype.sanitize = function(t, e) {
                    if (null == e) return null;
                    switch (t) {
                        case i.A.NONE:
                            return e;
                        case i.A.HTML:
                            return e instanceof Wn ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "HTML"), function(t, e) {
                                var n = Te(),
                                    o = null;
                                try {
                                    On = On || new xn(t, n);
                                    var r = e ? String(e) : "";
                                    o = On.getInertBodyElement(r);
                                    var l = 5,
                                        s = r;
                                    do {
                                        if (0 === l) throw new Error("Failed to sanitize html because the input is unstable");
                                        l--, r = s, s = n.getInnerHTML(o), o = On.getInertBodyElement(r)
                                    } while (r !== s);
                                    var a = new Rn,
                                        u = a.sanitizeChildren(n.getTemplateContent(o) || o);
                                    return Object(i.L)() && a.sanitizedSomething && n.log("WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss)."), u
                                } finally {
                                    if (o)
                                        for (var c = n.getTemplateContent(o) || o, d = 0, h = n.childNodesAsList(c); d < h.length; d++) n.removeChild(c, h[d])
                                }
                            }(this._doc, String(e)));
                        case i.A.STYLE:
                            return e instanceof Qn ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "Style"), function(t) { if (!(t = String(t).trim())) return ""; var e = t.match(zn); return e && En(e[1]) === e[1] || t.match(Hn) && function(t) { for (var e = !0, n = !0, i = 0; i < t.length; i++) { var o = t.charAt(i); "'" === o && n ? e = !e : '"' === o && e && (n = !n) } return e && n }(t) ? t : (Object(i.L)() && Te().log("WARNING: sanitizing unsafe style value " + t + " (see http://g.co/ng/security#xss)."), "unsafe") }(e));
                        case i.A.SCRIPT:
                            if (e instanceof Yn) return e.changingThisBreaksApplicationSecurity;
                            throw this.checkNotSafeValue(e, "Script"), new Error("unsafe value used in a script context");
                        case i.A.URL:
                            return e instanceof Xn || e instanceof Kn ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "URL"), En(String(e)));
                        case i.A.RESOURCE_URL:
                            if (e instanceof Xn) return e.changingThisBreaksApplicationSecurity;
                            throw this.checkNotSafeValue(e, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
                        default:
                            throw new Error("Unexpected SecurityContext " + t + " (see http://g.co/ng/security#xss)")
                    }
                }, e.prototype.checkNotSafeValue = function(t, e) { if (t instanceof qn) throw new Error("Required a safe " + e + ", got a " + t.getTypeName() + " (see http://g.co/ng/security#xss)") }, e.prototype.bypassSecurityTrustHtml = function(t) { return new Wn(t) }, e.prototype.bypassSecurityTrustStyle = function(t) { return new Qn(t) }, e.prototype.bypassSecurityTrustScript = function(t) { return new Yn(t) }, e.prototype.bypassSecurityTrustUrl = function(t) { return new Kn(t) }, e.prototype.bypassSecurityTrustResourceUrl = function(t) { return new Xn(t) }, e
            }(Gn),
            qn = function() {
                function t(t) { this.changingThisBreaksApplicationSecurity = t }
                return t.prototype.toString = function() { return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)" }, t
            }(),
            Wn = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return Object(s.b)(e, t), e.prototype.getTypeName = function() { return "HTML" }, e
            }(qn),
            Qn = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return Object(s.b)(e, t), e.prototype.getTypeName = function() { return "Style" }, e
            }(qn),
            Yn = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return Object(s.b)(e, t), e.prototype.getTypeName = function() { return "Script" }, e
            }(qn),
            Kn = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return Object(s.b)(e, t), e.prototype.getTypeName = function() { return "URL" }, e
            }(qn),
            Xn = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return Object(s.b)(e, t), e.prototype.getTypeName = function() { return "ResourceURL" }, e
            }(qn),
            Jn = [{ provide: i.u, useValue: "browser" }, { provide: i.v, useValue: function() { Ae.makeCurrent(), Re.init() }, multi: !0 }, { provide: E, useClass: De, deps: [Le] }, { provide: Le, useFactory: function() { return document }, deps: [] }],
            ti = Object(i.H)(i.M, "browser", Jn);

        function ei() { return new i.i }
        var ni = function() {
            function t(t) { if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.") }
            return t.withServerTransition = function(e) { return { ngModule: t, providers: [{ provide: i.a, useValue: e.appId }, { provide: Be, useExisting: i.a }, je] } }, t
        }();
        "undefined" != typeof window && window;
        var ii = function() {
                function t() {}
                return Object.defineProperty(t.prototype, "value", { get: function() { return this.control ? this.control.value : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "valid", { get: function() { return this.control ? this.control.valid : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "invalid", { get: function() { return this.control ? this.control.invalid : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "pending", { get: function() { return this.control ? this.control.pending : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "disabled", { get: function() { return this.control ? this.control.disabled : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "enabled", { get: function() { return this.control ? this.control.enabled : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "errors", { get: function() { return this.control ? this.control.errors : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "pristine", { get: function() { return this.control ? this.control.pristine : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "dirty", { get: function() { return this.control ? this.control.dirty : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "touched", { get: function() { return this.control ? this.control.touched : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "status", { get: function() { return this.control ? this.control.status : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "untouched", { get: function() { return this.control ? this.control.untouched : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "statusChanges", { get: function() { return this.control ? this.control.statusChanges : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "valueChanges", { get: function() { return this.control ? this.control.valueChanges : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "path", { get: function() { return null }, enumerable: !0, configurable: !0 }), t.prototype.reset = function(t) { void 0 === t && (t = void 0), this.control && this.control.reset(t) }, t.prototype.hasError = function(t, e) { return !!this.control && this.control.hasError(t, e) }, t.prototype.getError = function(t, e) { return this.control ? this.control.getError(t, e) : null }, t
            }(),
            oi = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return Object(s.b)(e, t), Object.defineProperty(e.prototype, "formDirective", { get: function() { return null }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "path", { get: function() { return null }, enumerable: !0, configurable: !0 }), e
            }(ii);

        function ri(t) { return null == t || 0 === t.length }
        var li = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
            si = function() {
                function t() {}
                return t.min = function(t) { return function(e) { if (ri(e.value) || ri(t)) return null; var n = parseFloat(e.value); return !isNaN(n) && n < t ? { min: { min: t, actual: e.value } } : null } }, t.max = function(t) { return function(e) { if (ri(e.value) || ri(t)) return null; var n = parseFloat(e.value); return !isNaN(n) && n > t ? { max: { max: t, actual: e.value } } : null } }, t.required = function(t) { return ri(t.value) ? { required: !0 } : null }, t.requiredTrue = function(t) { return !0 === t.value ? null : { required: !0 } }, t.email = function(t) { return li.test(t.value) ? null : { email: !0 } }, t.minLength = function(t) { return function(e) { if (ri(e.value)) return null; var n = e.value ? e.value.length : 0; return n < t ? { minlength: { requiredLength: t, actualLength: n } } : null } }, t.maxLength = function(t) { return function(e) { var n = e.value ? e.value.length : 0; return n > t ? { maxlength: { requiredLength: t, actualLength: n } } : null } }, t.pattern = function(e) { return e ? ("string" == typeof e ? (i = "", "^" !== e.charAt(0) && (i += "^"), i += e, "$" !== e.charAt(e.length - 1) && (i += "$"), n = new RegExp(i)) : (i = e.toString(), n = e), function(t) { if (ri(t.value)) return null; var e = t.value; return n.test(e) ? null : { pattern: { requiredPattern: i, actualValue: e } } }) : t.nullValidator; var n, i }, t.nullValidator = function(t) { return null }, t.compose = function(t) { if (!t) return null; var e = t.filter(ai); return 0 == e.length ? null : function(t) { return ci(function(t, n) { return e.map(function(e) { return e(t) }) }(t)) } }, t.composeAsync = function(t) { if (!t) return null; var e = t.filter(ai); return 0 == e.length ? null : function(t) { var n = function(t, n) { return e.map(function(e) { return e(t) }) }(t).map(ui); return (function(t, e) { return function(t, e) { return function(n) { if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?"); return n.lift(new Ce(t, e)) } }(t, e)(this) }).call(ve(n), ci) } }, t
            }();

        function ai(t) { return null != t }

        function ui(t) { var e = Object(i._1)(t) ? _e(t) : t; if (!Object(i._0)(e)) throw new Error("Expected validator to return Promise or Observable."); return e }

        function ci(t) { var e = t.reduce(function(t, e) { return null != e ? Object(s.a)({}, t, e) : t }, {}); return 0 === Object.keys(e).length ? null : e }
        var di = new i.l("NgValueAccessor"),
            hi = function() {
                function t(t, e) { this._renderer = t, this._elementRef = e, this.onChange = function(t) {}, this.onTouched = function() {} }
                return t.prototype.writeValue = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "checked", t) }, t.prototype.registerOnChange = function(t) { this.onChange = t }, t.prototype.registerOnTouched = function(t) { this.onTouched = t }, t.prototype.setDisabledState = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }, t
            }(),
            pi = new i.l("CompositionEventMode"),
            fi = function() {
                function t(t, e, n) {
                    var i;
                    this._renderer = t, this._elementRef = e, this._compositionMode = n, this.onChange = function(t) {}, this.onTouched = function() {}, this._composing = !1, null == this._compositionMode && (this._compositionMode = (i = Te() ? Te().getUserAgent() : "", !/android (\d+)/.test(i.toLowerCase())))
                }
                return t.prototype.writeValue = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t) }, t.prototype.registerOnChange = function(t) { this.onChange = t }, t.prototype.registerOnTouched = function(t) { this.onTouched = t }, t.prototype.setDisabledState = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }, t.prototype._handleInput = function(t) {
                    (!this._compositionMode || this._compositionMode && !this._composing) && this.onChange(t)
                }, t.prototype._compositionStart = function() { this._composing = !0 }, t.prototype._compositionEnd = function(t) { this._composing = !1, this._compositionMode && this.onChange(t) }, t
            }();

        function gi(t) { return t.validate ? function(e) { return t.validate(e) } : t }

        function mi(t) { return t.validate ? function(e) { return t.validate(e) } : t }
        var vi = function() {
            function t(t, e) { this._renderer = t, this._elementRef = e, this.onChange = function(t) {}, this.onTouched = function() {} }
            return t.prototype.writeValue = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "value", null == t ? "" : t) }, t.prototype.registerOnChange = function(t) { this.onChange = function(e) { t("" == e ? null : parseFloat(e)) } }, t.prototype.registerOnTouched = function(t) { this.onTouched = t }, t.prototype.setDisabledState = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }, t
        }();

        function yi() { throw new Error("unimplemented") }
        var wi = function(t) {
                function e() { var e = null !== t && t.apply(this, arguments) || this; return e._parent = null, e.name = null, e.valueAccessor = null, e._rawValidators = [], e._rawAsyncValidators = [], e }
                return Object(s.b)(e, t), Object.defineProperty(e.prototype, "validator", { get: function() { return yi() }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "asyncValidator", { get: function() { return yi() }, enumerable: !0, configurable: !0 }), e
            }(ii),
            bi = function() {
                function t() { this._accessors = [] }
                return t.prototype.add = function(t, e) { this._accessors.push([t, e]) }, t.prototype.remove = function(t) {
                    for (var e = this._accessors.length - 1; e >= 0; --e)
                        if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1)
                }, t.prototype.select = function(t) {
                    var e = this;
                    this._accessors.forEach(function(n) { e._isSameGroup(n, t) && n[1] !== t && n[1].fireUncheck(t.value) })
                }, t.prototype._isSameGroup = function(t, e) { return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name }, t
            }(),
            _i = function() {
                function t(t, e, n, i) { this._renderer = t, this._elementRef = e, this._registry = n, this._injector = i, this.onChange = function() {}, this.onTouched = function() {} }
                return t.prototype.ngOnInit = function() { this._control = this._injector.get(wi), this._checkName(), this._registry.add(this._control, this) }, t.prototype.ngOnDestroy = function() { this._registry.remove(this) }, t.prototype.writeValue = function(t) { this._state = t === this.value, this._renderer.setProperty(this._elementRef.nativeElement, "checked", this._state) }, t.prototype.registerOnChange = function(t) {
                    var e = this;
                    this._fn = t, this.onChange = function() { t(e.value), e._registry.select(e) }
                }, t.prototype.fireUncheck = function(t) { this.writeValue(t) }, t.prototype.registerOnTouched = function(t) { this.onTouched = t }, t.prototype.setDisabledState = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }, t.prototype._checkName = function() { this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(), !this.name && this.formControlName && (this.name = this.formControlName) }, t.prototype._throwNameError = function() { throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ') }, t
            }();

        function Ci(t, e) { return e.path.concat([t]) }

        function ki(t, e) {
            t || Ti(e, "Cannot find control with"), e.valueAccessor || Ti(e, "No value accessor for form control with"), t.validator = si.compose([t.validator, e.validator]), t.asyncValidator = si.composeAsync([t.asyncValidator, e.asyncValidator]), e.valueAccessor.writeValue(t.value),
                function(t, e) { e.valueAccessor.registerOnChange(function(n) { t._pendingValue = n, t._pendingChange = !0, t._pendingDirty = !0, "change" === t.updateOn && xi(t, e) }) }(t, e),
                function(t, e) { t.registerOnChange(function(t, n) { e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t) }) }(t, e),
                function(t, e) { e.valueAccessor.registerOnTouched(function() { t._pendingTouched = !0, "blur" === t.updateOn && t._pendingChange && xi(t, e), "submit" !== t.updateOn && t.markAsTouched() }) }(t, e), e.valueAccessor.setDisabledState && t.registerOnDisabledChange(function(t) { e.valueAccessor.setDisabledState(t) }), e._rawValidators.forEach(function(e) { e.registerOnValidatorChange && e.registerOnValidatorChange(function() { return t.updateValueAndValidity() }) }), e._rawAsyncValidators.forEach(function(e) { e.registerOnValidatorChange && e.registerOnValidatorChange(function() { return t.updateValueAndValidity() }) })
        }

        function xi(t, e) { e.viewToModelUpdate(t._pendingValue), t._pendingDirty && t.markAsDirty(), t.setValue(t._pendingValue, { emitModelToViewChange: !1 }), t._pendingChange = !1 }

        function Ti(t, e) { var n; throw n = t.path.length > 1 ? "path: '" + t.path.join(" -> ") + "'" : t.path[0] ? "name: '" + t.path + "'" : "unspecified name attribute", new Error(e + " " + n) }

        function Ii(t) { return null != t ? si.compose(t.map(gi)) : null }

        function Ei(t) { return null != t ? si.composeAsync(t.map(mi)) : null }
        var Si = [hi, function() {
                function t(t, e) { this._renderer = t, this._elementRef = e, this.onChange = function(t) {}, this.onTouched = function() {} }
                return t.prototype.writeValue = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "value", parseFloat(t)) }, t.prototype.registerOnChange = function(t) { this.onChange = function(e) { t("" == e ? null : parseFloat(e)) } }, t.prototype.registerOnTouched = function(t) { this.onTouched = t }, t.prototype.setDisabledState = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }, t
            }(), vi, function() {
                function t(t, e) { this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = function(t) {}, this.onTouched = function() {}, this._compareWith = i._2 }
                return Object.defineProperty(t.prototype, "compareWith", {
                    set: function(t) {
                        if ("function" != typeof t) throw new Error("compareWith must be a function, but received " + JSON.stringify(t));
                        this._compareWith = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.writeValue = function(t) {
                    this.value = t;
                    var e = this._getOptionId(t);
                    null == e && this._renderer.setProperty(this._elementRef.nativeElement, "selectedIndex", -1);
                    var n = function(t, e) { return null == t ? "" + e : (e && "object" == typeof e && (e = "Object"), (t + ": " + e).slice(0, 50)) }(e, t);
                    this._renderer.setProperty(this._elementRef.nativeElement, "value", n)
                }, t.prototype.registerOnChange = function(t) {
                    var e = this;
                    this.onChange = function(n) { e.value = e._getOptionValue(n), t(e.value) }
                }, t.prototype.registerOnTouched = function(t) { this.onTouched = t }, t.prototype.setDisabledState = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }, t.prototype._registerOption = function() { return (this._idCounter++).toString() }, t.prototype._getOptionId = function(t) { for (var e = 0, n = Array.from(this._optionMap.keys()); e < n.length; e++) { var i = n[e]; if (this._compareWith(this._optionMap.get(i), t)) return i } return null }, t.prototype._getOptionValue = function(t) { var e = function(t) { return t.split(":")[0] }(t); return this._optionMap.has(e) ? this._optionMap.get(e) : t }, t
            }(), function() {
                function t(t, e) { this._renderer = t, this._elementRef = e, this._optionMap = new Map, this._idCounter = 0, this.onChange = function(t) {}, this.onTouched = function() {}, this._compareWith = i._2 }
                return Object.defineProperty(t.prototype, "compareWith", {
                    set: function(t) {
                        if ("function" != typeof t) throw new Error("compareWith must be a function, but received " + JSON.stringify(t));
                        this._compareWith = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.writeValue = function(t) {
                    var e, n = this;
                    if (this.value = t, Array.isArray(t)) {
                        var i = t.map(function(t) { return n._getOptionId(t) });
                        e = function(t, e) { t._setSelected(i.indexOf(e.toString()) > -1) }
                    } else e = function(t, e) { t._setSelected(!1) };
                    this._optionMap.forEach(e)
                }, t.prototype.registerOnChange = function(t) {
                    var e = this;
                    this.onChange = function(n) {
                        var i = [];
                        if (n.hasOwnProperty("selectedOptions"))
                            for (var o = n.selectedOptions, r = 0; r < o.length; r++) {
                                var l = o.item(r),
                                    s = e._getOptionValue(l.value);
                                i.push(s)
                            } else
                                for (o = n.options, r = 0; r < o.length; r++)(l = o.item(r)).selected && (s = e._getOptionValue(l.value), i.push(s));
                        e.value = i, t(i)
                    }
                }, t.prototype.registerOnTouched = function(t) { this.onTouched = t }, t.prototype.setDisabledState = function(t) { this._renderer.setProperty(this._elementRef.nativeElement, "disabled", t) }, t.prototype._registerOption = function(t) { var e = (this._idCounter++).toString(); return this._optionMap.set(e, t), e }, t.prototype._getOptionId = function(t) { for (var e = 0, n = Array.from(this._optionMap.keys()); e < n.length; e++) { var i = n[e]; if (this._compareWith(this._optionMap.get(i)._value, t)) return i } return null }, t.prototype._getOptionValue = function(t) { var e = function(t) { return t.split(":")[0] }(t); return this._optionMap.has(e) ? this._optionMap.get(e)._value : t }, t
            }(), _i],
            Mi = function(t) {
                function e() { return null !== t && t.apply(this, arguments) || this }
                return Object(s.b)(e, t), e.prototype.ngOnInit = function() { this._checkParentType(), this.formDirective.addFormGroup(this) }, e.prototype.ngOnDestroy = function() { this.formDirective && this.formDirective.removeFormGroup(this) }, Object.defineProperty(e.prototype, "control", { get: function() { return this.formDirective.getFormGroup(this) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "path", { get: function() { return Ci(this.name, this._parent) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "formDirective", { get: function() { return this._parent ? this._parent.formDirective : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "validator", { get: function() { return Ii(this._validators) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "asyncValidator", { get: function() { return Ei(this._asyncValidators) }, enumerable: !0, configurable: !0 }), e.prototype._checkParentType = function() {}, e
            }(oi),
            Oi = function() {
                function t(t) { this._cd = t }
                return Object.defineProperty(t.prototype, "ngClassUntouched", { get: function() { return !!this._cd.control && this._cd.control.untouched }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassTouched", { get: function() { return !!this._cd.control && this._cd.control.touched }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassPristine", { get: function() { return !!this._cd.control && this._cd.control.pristine }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassDirty", { get: function() { return !!this._cd.control && this._cd.control.dirty }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassValid", { get: function() { return !!this._cd.control && this._cd.control.valid }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassInvalid", { get: function() { return !!this._cd.control && this._cd.control.invalid }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "ngClassPending", { get: function() { return !!this._cd.control && this._cd.control.pending }, enumerable: !0, configurable: !0 }), t
            }(),
            Ai = function(t) {
                function e(e) { return t.call(this, e) || this }
                return Object(s.b)(e, t), e
            }(Oi),
            Pi = function(t) {
                function e(e) { return t.call(this, e) || this }
                return Object(s.b)(e, t), e
            }(Oi);

        function Li(t) { var e = Di(t) ? t.validators : t; return Array.isArray(e) ? Ii(e) : e || null }

        function Vi(t, e) { var n = Di(e) ? e.asyncValidators : t; return Array.isArray(n) ? Ei(n) : n || null }

        function Di(t) { return null != t && !Array.isArray(t) && "object" == typeof t }
        var Ni = function() {
                function t(t, e) { this.validator = t, this.asyncValidator = e, this._onCollectionChange = function() {}, this.pristine = !0, this.touched = !1, this._onDisabledChange = [] }
                return Object.defineProperty(t.prototype, "parent", { get: function() { return this._parent }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "valid", { get: function() { return "VALID" === this.status }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "invalid", { get: function() { return "INVALID" === this.status }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "pending", { get: function() { return "PENDING" == this.status }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "disabled", { get: function() { return "DISABLED" === this.status }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "enabled", { get: function() { return "DISABLED" !== this.status }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "dirty", { get: function() { return !this.pristine }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "untouched", { get: function() { return !this.touched }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "updateOn", { get: function() { return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change" }, enumerable: !0, configurable: !0 }), t.prototype.setValidators = function(t) { this.validator = Li(t) }, t.prototype.setAsyncValidators = function(t) { this.asyncValidator = Vi(t) }, t.prototype.clearValidators = function() { this.validator = null }, t.prototype.clearAsyncValidators = function() { this.asyncValidator = null }, t.prototype.markAsTouched = function(t) { void 0 === t && (t = {}), this.touched = !0, this._parent && !t.onlySelf && this._parent.markAsTouched(t) }, t.prototype.markAsUntouched = function(t) { void 0 === t && (t = {}), this.touched = !1, this._pendingTouched = !1, this._forEachChild(function(t) { t.markAsUntouched({ onlySelf: !0 }) }), this._parent && !t.onlySelf && this._parent._updateTouched(t) }, t.prototype.markAsDirty = function(t) { void 0 === t && (t = {}), this.pristine = !1, this._parent && !t.onlySelf && this._parent.markAsDirty(t) }, t.prototype.markAsPristine = function(t) { void 0 === t && (t = {}), this.pristine = !0, this._pendingDirty = !1, this._forEachChild(function(t) { t.markAsPristine({ onlySelf: !0 }) }), this._parent && !t.onlySelf && this._parent._updatePristine(t) }, t.prototype.markAsPending = function(t) { void 0 === t && (t = {}), this.status = "PENDING", this._parent && !t.onlySelf && this._parent.markAsPending(t) }, t.prototype.disable = function(t) { void 0 === t && (t = {}), this.status = "DISABLED", this.errors = null, this._forEachChild(function(e) { e.disable(Object(s.a)({}, t, { onlySelf: !0 })) }), this._updateValue(), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._updateAncestors(t), this._onDisabledChange.forEach(function(t) { return t(!0) }) }, t.prototype.enable = function(t) { void 0 === t && (t = {}), this.status = "VALID", this._forEachChild(function(e) { e.enable(Object(s.a)({}, t, { onlySelf: !0 })) }), this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }), this._updateAncestors(t), this._onDisabledChange.forEach(function(t) { return t(!1) }) }, t.prototype._updateAncestors = function(t) { this._parent && !t.onlySelf && (this._parent.updateValueAndValidity(t), this._parent._updatePristine(), this._parent._updateTouched()) }, t.prototype.setParent = function(t) { this._parent = t }, t.prototype.updateValueAndValidity = function(t) { void 0 === t && (t = {}), this._setInitialStatus(), this._updateValue(), this.enabled && (this._cancelExistingSubscription(), this.errors = this._runValidator(), this.status = this._calculateStatus(), "VALID" !== this.status && "PENDING" !== this.status || this._runAsyncValidator(t.emitEvent)), !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)), this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t) }, t.prototype._updateTreeValidity = function(t) { void 0 === t && (t = { emitEvent: !0 }), this._forEachChild(function(e) { return e._updateTreeValidity(t) }), this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }) }, t.prototype._setInitialStatus = function() { this.status = this._allControlsDisabled() ? "DISABLED" : "VALID" }, t.prototype._runValidator = function() { return this.validator ? this.validator(this) : null }, t.prototype._runAsyncValidator = function(t) {
                    var e = this;
                    if (this.asyncValidator) {
                        this.status = "PENDING";
                        var n = ui(this.asyncValidator(this));
                        this._asyncValidationSubscription = n.subscribe(function(n) { return e.setErrors(n, { emitEvent: t }) })
                    }
                }, t.prototype._cancelExistingSubscription = function() { this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe() }, t.prototype.setErrors = function(t, e) { void 0 === e && (e = {}), this.errors = t, this._updateControlsErrors(!1 !== e.emitEvent) }, t.prototype.get = function(t) { return function(t, e, n) { return null == e ? null : (e instanceof Array || (e = e.split(".")), e instanceof Array && 0 === e.length ? null : e.reduce(function(t, e) { return t instanceof ji ? t.controls[e] || null : t instanceof Ri && t.at(e) || null }, t)) }(this, t) }, t.prototype.getError = function(t, e) { var n = e ? this.get(e) : this; return n && n.errors ? n.errors[t] : null }, t.prototype.hasError = function(t, e) { return !!this.getError(t, e) }, Object.defineProperty(t.prototype, "root", { get: function() { for (var t = this; t._parent;) t = t._parent; return t }, enumerable: !0, configurable: !0 }), t.prototype._updateControlsErrors = function(t) { this.status = this._calculateStatus(), t && this.statusChanges.emit(this.status), this._parent && this._parent._updateControlsErrors(t) }, t.prototype._initObservables = function() { this.valueChanges = new i.j, this.statusChanges = new i.j }, t.prototype._calculateStatus = function() { return this._allControlsDisabled() ? "DISABLED" : this.errors ? "INVALID" : this._anyControlsHaveStatus("PENDING") ? "PENDING" : this._anyControlsHaveStatus("INVALID") ? "INVALID" : "VALID" }, t.prototype._anyControlsHaveStatus = function(t) { return this._anyControls(function(e) { return e.status === t }) }, t.prototype._anyControlsDirty = function() { return this._anyControls(function(t) { return t.dirty }) }, t.prototype._anyControlsTouched = function() { return this._anyControls(function(t) { return t.touched }) }, t.prototype._updatePristine = function(t) { void 0 === t && (t = {}), this.pristine = !this._anyControlsDirty(), this._parent && !t.onlySelf && this._parent._updatePristine(t) }, t.prototype._updateTouched = function(t) { void 0 === t && (t = {}), this.touched = this._anyControlsTouched(), this._parent && !t.onlySelf && this._parent._updateTouched(t) }, t.prototype._isBoxedValue = function(t) { return "object" == typeof t && null !== t && 2 === Object.keys(t).length && "value" in t && "disabled" in t }, t.prototype._registerOnCollectionChange = function(t) { this._onCollectionChange = t }, t.prototype._setUpdateStrategy = function(t) { Di(t) && null != t.updateOn && (this._updateOn = t.updateOn) }, t
            }(),
            Bi = function(t) {
                function e(e, n, i) { void 0 === e && (e = null); var o = t.call(this, Li(n), Vi(i, n)) || this; return o._onChange = [], o._applyFormState(e), o._setUpdateStrategy(n), o.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }), o._initObservables(), o }
                return Object(s.b)(e, t), e.prototype.setValue = function(t, e) {
                    var n = this;
                    void 0 === e && (e = {}), this.value = this._pendingValue = t, this._onChange.length && !1 !== e.emitModelToViewChange && this._onChange.forEach(function(t) { return t(n.value, !1 !== e.emitViewToModelChange) }), this.updateValueAndValidity(e)
                }, e.prototype.patchValue = function(t, e) { void 0 === e && (e = {}), this.setValue(t, e) }, e.prototype.reset = function(t, e) { void 0 === t && (t = null), void 0 === e && (e = {}), this._applyFormState(t), this.markAsPristine(e), this.markAsUntouched(e), this.setValue(this.value, e), this._pendingChange = !1 }, e.prototype._updateValue = function() {}, e.prototype._anyControls = function(t) { return !1 }, e.prototype._allControlsDisabled = function() { return this.disabled }, e.prototype.registerOnChange = function(t) { this._onChange.push(t) }, e.prototype._clearChangeFns = function() { this._onChange = [], this._onDisabledChange = [], this._onCollectionChange = function() {} }, e.prototype.registerOnDisabledChange = function(t) { this._onDisabledChange.push(t) }, e.prototype._forEachChild = function(t) {}, e.prototype._syncPendingControls = function() { return !("submit" !== this.updateOn || (this._pendingDirty && this.markAsDirty(), this._pendingTouched && this.markAsTouched(), !this._pendingChange) || (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)) }, e.prototype._applyFormState = function(t) { this._isBoxedValue(t) ? (this.value = this._pendingValue = t.value, t.disabled ? this.disable({ onlySelf: !0, emitEvent: !1 }) : this.enable({ onlySelf: !0, emitEvent: !1 })) : this.value = this._pendingValue = t }, e
            }(Ni),
            ji = function(t) {
                function e(e, n, i) { var o = t.call(this, Li(n), Vi(i, n)) || this; return o.controls = e, o._initObservables(), o._setUpdateStrategy(n), o._setUpControls(), o.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }), o }
                return Object(s.b)(e, t), e.prototype.registerControl = function(t, e) { return this.controls[t] ? this.controls[t] : (this.controls[t] = e, e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e) }, e.prototype.addControl = function(t, e) { this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange() }, e.prototype.removeControl = function(t) { this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}), delete this.controls[t], this.updateValueAndValidity(), this._onCollectionChange() }, e.prototype.setControl = function(t, e) { this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}), delete this.controls[t], e && this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange() }, e.prototype.contains = function(t) { return this.controls.hasOwnProperty(t) && this.controls[t].enabled }, e.prototype.setValue = function(t, e) {
                    var n = this;
                    void 0 === e && (e = {}), this._checkAllValuesPresent(t), Object.keys(t).forEach(function(i) { n._throwIfControlMissing(i), n.controls[i].setValue(t[i], { onlySelf: !0, emitEvent: e.emitEvent }) }), this.updateValueAndValidity(e)
                }, e.prototype.patchValue = function(t, e) {
                    var n = this;
                    void 0 === e && (e = {}), Object.keys(t).forEach(function(i) { n.controls[i] && n.controls[i].patchValue(t[i], { onlySelf: !0, emitEvent: e.emitEvent }) }), this.updateValueAndValidity(e)
                }, e.prototype.reset = function(t, e) { void 0 === t && (t = {}), void 0 === e && (e = {}), this._forEachChild(function(n, i) { n.reset(t[i], { onlySelf: !0, emitEvent: e.emitEvent }) }), this.updateValueAndValidity(e), this._updatePristine(e), this._updateTouched(e) }, e.prototype.getRawValue = function() { return this._reduceChildren({}, function(t, e, n) { return t[n] = e instanceof Bi ? e.value : e.getRawValue(), t }) }, e.prototype._syncPendingControls = function() { var t = this._reduceChildren(!1, function(t, e) { return !!e._syncPendingControls() || t }); return t && this.updateValueAndValidity({ onlySelf: !0 }), t }, e.prototype._throwIfControlMissing = function(t) { if (!Object.keys(this.controls).length) throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "); if (!this.controls[t]) throw new Error("Cannot find form control with name: " + t + ".") }, e.prototype._forEachChild = function(t) {
                    var e = this;
                    Object.keys(this.controls).forEach(function(n) { return t(e.controls[n], n) })
                }, e.prototype._setUpControls = function() {
                    var t = this;
                    this._forEachChild(function(e) { e.setParent(t), e._registerOnCollectionChange(t._onCollectionChange) })
                }, e.prototype._updateValue = function() { this.value = this._reduceValue() }, e.prototype._anyControls = function(t) {
                    var e = this,
                        n = !1;
                    return this._forEachChild(function(i, o) { n = n || e.contains(o) && t(i) }), n
                }, e.prototype._reduceValue = function() { var t = this; return this._reduceChildren({}, function(e, n, i) { return (n.enabled || t.disabled) && (e[i] = n.value), e }) }, e.prototype._reduceChildren = function(t, e) { var n = t; return this._forEachChild(function(t, i) { n = e(n, t, i) }), n }, e.prototype._allControlsDisabled = function() {
                    for (var t = 0, e = Object.keys(this.controls); t < e.length; t++)
                        if (this.controls[e[t]].enabled) return !1;
                    return Object.keys(this.controls).length > 0 || this.disabled
                }, e.prototype._checkAllValuesPresent = function(t) { this._forEachChild(function(e, n) { if (void 0 === t[n]) throw new Error("Must supply a value for form control with name: '" + n + "'.") }) }, e
            }(Ni),
            Ri = function(t) {
                function e(e, n, i) { var o = t.call(this, Li(n), Vi(i, n)) || this; return o.controls = e, o._initObservables(), o._setUpdateStrategy(n), o._setUpControls(), o.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }), o }
                return Object(s.b)(e, t), e.prototype.at = function(t) { return this.controls[t] }, e.prototype.push = function(t) { this.controls.push(t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange() }, e.prototype.insert = function(t, e) { this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity() }, e.prototype.removeAt = function(t) { this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}), this.controls.splice(t, 1), this.updateValueAndValidity() }, e.prototype.setControl = function(t, e) { this.controls[t] && this.controls[t]._registerOnCollectionChange(function() {}), this.controls.splice(t, 1), e && (this.controls.splice(t, 0, e), this._registerControl(e)), this.updateValueAndValidity(), this._onCollectionChange() }, Object.defineProperty(e.prototype, "length", { get: function() { return this.controls.length }, enumerable: !0, configurable: !0 }), e.prototype.setValue = function(t, e) {
                    var n = this;
                    void 0 === e && (e = {}), this._checkAllValuesPresent(t), t.forEach(function(t, i) { n._throwIfControlMissing(i), n.at(i).setValue(t, { onlySelf: !0, emitEvent: e.emitEvent }) }), this.updateValueAndValidity(e)
                }, e.prototype.patchValue = function(t, e) {
                    var n = this;
                    void 0 === e && (e = {}), t.forEach(function(t, i) { n.at(i) && n.at(i).patchValue(t, { onlySelf: !0, emitEvent: e.emitEvent }) }), this.updateValueAndValidity(e)
                }, e.prototype.reset = function(t, e) { void 0 === t && (t = []), void 0 === e && (e = {}), this._forEachChild(function(n, i) { n.reset(t[i], { onlySelf: !0, emitEvent: e.emitEvent }) }), this.updateValueAndValidity(e), this._updatePristine(e), this._updateTouched(e) }, e.prototype.getRawValue = function() { return this.controls.map(function(t) { return t instanceof Bi ? t.value : t.getRawValue() }) }, e.prototype._syncPendingControls = function() { var t = this.controls.reduce(function(t, e) { return !!e._syncPendingControls() || t }, !1); return t && this.updateValueAndValidity({ onlySelf: !0 }), t }, e.prototype._throwIfControlMissing = function(t) { if (!this.controls.length) throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "); if (!this.at(t)) throw new Error("Cannot find form control at index " + t) }, e.prototype._forEachChild = function(t) { this.controls.forEach(function(e, n) { t(e, n) }) }, e.prototype._updateValue = function() {
                    var t = this;
                    this.value = this.controls.filter(function(e) { return e.enabled || t.disabled }).map(function(t) { return t.value })
                }, e.prototype._anyControls = function(t) { return this.controls.some(function(e) { return e.enabled && t(e) }) }, e.prototype._setUpControls = function() {
                    var t = this;
                    this._forEachChild(function(e) { return t._registerControl(e) })
                }, e.prototype._checkAllValuesPresent = function(t) { this._forEachChild(function(e, n) { if (void 0 === t[n]) throw new Error("Must supply a value for form control at index: " + n + ".") }) }, e.prototype._allControlsDisabled = function() {
                    for (var t = 0, e = this.controls; t < e.length; t++)
                        if (e[t].enabled) return !1;
                    return this.controls.length > 0 || this.disabled
                }, e.prototype._registerControl = function(t) { t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange) }, e
            }(Ni),
            Ui = Promise.resolve(null),
            $i = function(t) {
                function e(e, n) { var o = t.call(this) || this; return o.submitted = !1, o._directives = [], o.ngSubmit = new i.j, o.form = new ji({}, Ii(e), Ei(n)), o }
                return Object(s.b)(e, t), e.prototype.ngAfterViewInit = function() { this._setUpdateStrategy() }, Object.defineProperty(e.prototype, "formDirective", { get: function() { return this }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "control", { get: function() { return this.form }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "path", { get: function() { return [] }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "controls", { get: function() { return this.form.controls }, enumerable: !0, configurable: !0 }), e.prototype.addControl = function(t) {
                    var e = this;
                    Ui.then(function() {
                        var n = e._findContainer(t.path);
                        t.control = n.registerControl(t.name, t.control), ki(t.control, t), t.control.updateValueAndValidity({ emitEvent: !1 }), e._directives.push(t)
                    })
                }, e.prototype.getControl = function(t) { return this.form.get(t.path) }, e.prototype.removeControl = function(t) {
                    var e = this;
                    Ui.then(function() {
                        var n, i, o = e._findContainer(t.path);
                        o && o.removeControl(t.name), (i = (n = e._directives).indexOf(t)) > -1 && n.splice(i, 1)
                    })
                }, e.prototype.addFormGroup = function(t) {
                    var e = this;
                    Ui.then(function() {
                        var n = e._findContainer(t.path),
                            i = new ji({});
                        (function(t, e) { null == t && Ti(e, "Cannot find control with"), t.validator = si.compose([t.validator, e.validator]), t.asyncValidator = si.composeAsync([t.asyncValidator, e.asyncValidator]) })(i, t), n.registerControl(t.name, i), i.updateValueAndValidity({ emitEvent: !1 })
                    })
                }, e.prototype.removeFormGroup = function(t) {
                    var e = this;
                    Ui.then(function() {
                        var n = e._findContainer(t.path);
                        n && n.removeControl(t.name)
                    })
                }, e.prototype.getFormGroup = function(t) { return this.form.get(t.path) }, e.prototype.updateModel = function(t, e) {
                    var n = this;
                    Ui.then(function() { n.form.get(t.path).setValue(e) })
                }, e.prototype.setValue = function(t) { this.control.setValue(t) }, e.prototype.onSubmit = function(t) { return this.submitted = !0, e = this._directives, this.form._syncPendingControls(), e.forEach(function(t) { var e = t.control; "submit" === e.updateOn && e._pendingChange && (t.viewToModelUpdate(e._pendingValue), e._pendingChange = !1) }), this.ngSubmit.emit(t), !1; var e }, e.prototype.onReset = function() { this.resetForm() }, e.prototype.resetForm = function(t) { void 0 === t && (t = void 0), this.form.reset(t), this.submitted = !1 }, e.prototype._setUpdateStrategy = function() { this.options && null != this.options.updateOn && (this.form._updateOn = this.options.updateOn) }, e.prototype._findContainer = function(t) { return t.pop(), t.length ? this.form.get(t) : this.form }, e
            }(oi),
            Fi = '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
            Hi = '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',
            zi = function() {
                function t() {}
                return t.modelParentException = function() { throw new Error('\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      \n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });\n\n      Or, if you\'d like to avoid registering this form control, indicate that it\'s standalone in ngModelOptions:\n\n      Example:\n\n      \n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  ') }, t.formGroupNameException = function() { throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Fi + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Hi) }, t.missingNameException = function() { throw new Error('If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">') }, t.modelGroupParentException = function() { throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Fi + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Hi) }, t
            }(),
            Gi = function(t) {
                function e(e, n, i) { var o = t.call(this) || this; return o._parent = e, o._validators = n, o._asyncValidators = i, o }
                return Object(s.b)(e, t), e.prototype._checkParentType = function() { this._parent instanceof e || this._parent instanceof $i || zi.modelGroupParentException() }, e
            }(Mi),
            Zi = Promise.resolve(null),
            qi = function(t) {
                function e(e, n, o, r) {
                    var l = t.call(this) || this;
                    return l.control = new Bi, l._registered = !1, l.update = new i.j, l._parent = e, l._rawValidators = n || [], l._rawAsyncValidators = o || [], l.valueAccessor = function(t, e) {
                        if (!e) return null;
                        var n = void 0,
                            i = void 0,
                            o = void 0;
                        return e.forEach(function(e) {
                            var r;
                            e.constructor === fi ? n = e : (r = e, Si.some(function(t) { return r.constructor === t }) ? (i && Ti(t, "More than one built-in value accessor matches form control with"), i = e) : (o && Ti(t, "More than one custom value accessor matches form control with"), o = e))
                        }), o || i || n || (Ti(t, "No valid value accessor for form control with"), null)
                    }(l, r), l
                }
                return Object(s.b)(e, t), e.prototype.ngOnChanges = function(t) {
                    this._checkForErrors(), this._registered || this._setUpControl(), "isDisabled" in t && this._updateDisabled(t),
                        function(t, e) { if (!t.hasOwnProperty("model")) return !1; var n = t.model; return !!n.isFirstChange() || !Object(i._2)(e, n.currentValue) }(t, this.viewModel) && (this._updateValue(this.model), this.viewModel = this.model)
                }, e.prototype.ngOnDestroy = function() { this.formDirective && this.formDirective.removeControl(this) }, Object.defineProperty(e.prototype, "path", { get: function() { return this._parent ? Ci(this.name, this._parent) : [this.name] }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "formDirective", { get: function() { return this._parent ? this._parent.formDirective : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "validator", { get: function() { return Ii(this._rawValidators) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "asyncValidator", { get: function() { return Ei(this._rawAsyncValidators) }, enumerable: !0, configurable: !0 }), e.prototype.viewToModelUpdate = function(t) { this.viewModel = t, this.update.emit(t) }, e.prototype._setUpControl = function() { this._setUpdateStrategy(), this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this), this._registered = !0 }, e.prototype._setUpdateStrategy = function() { this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn) }, e.prototype._isStandalone = function() { return !this._parent || !(!this.options || !this.options.standalone) }, e.prototype._setUpStandalone = function() { ki(this.control, this), this.control.updateValueAndValidity({ emitEvent: !1 }) }, e.prototype._checkForErrors = function() { this._isStandalone() || this._checkParentType(), this._checkName() }, e.prototype._checkParentType = function() {!(this._parent instanceof Gi) && this._parent instanceof Mi ? zi.formGroupNameException() : this._parent instanceof Gi || this._parent instanceof $i || zi.modelParentException() }, e.prototype._checkName = function() { this.options && this.options.name && (this.name = this.options.name), this._isStandalone() || this.name || zi.missingNameException() }, e.prototype._updateValue = function(t) {
                    var e = this;
                    Zi.then(function() { e.control.setValue(t, { emitViewToModelChange: !1 }) })
                }, e.prototype._updateDisabled = function(t) {
                    var e = this,
                        n = t.isDisabled.currentValue,
                        i = "" === n || n && "false" !== n;
                    Zi.then(function() { i && !e.control.disabled ? e.control.disable() : !i && e.control.disabled && e.control.enable() })
                }, e
            }(wi),
            Wi = function() {
                function t() {}
                return t.prototype.group = function(t, e) { void 0 === e && (e = null); var n = this._reduceControls(t); return new ji(n, null != e ? e.validator : null, null != e ? e.asyncValidator : null) }, t.prototype.control = function(t, e, n) { return new Bi(t, e, n) }, t.prototype.array = function(t, e, n) {
                    var i = this,
                        o = t.map(function(t) { return i._createControl(t) });
                    return new Ri(o, e, n)
                }, t.prototype._reduceControls = function(t) {
                    var e = this,
                        n = {};
                    return Object.keys(t).forEach(function(i) { n[i] = e._createControl(t[i]) }), n
                }, t.prototype._createControl = function(t) { return t instanceof Bi || t instanceof ji || t instanceof Ri ? t : Array.isArray(t) ? this.control(t[0], t.length > 1 ? t[1] : null, t.length > 2 ? t[2] : null) : this.control(t) }, t
            }(),
            Qi = function() {},
            Yi = function() {},
            Ki = function() {},
            Xi = function() {},
            Ji = function() {
                function t(t, e) { this.util = t, this.actionSvc = e, this.mailBody = "I want to share this artifact that I found on Lex.", this.show = !0, this.show = this.actionSvc.getConfig().share }
                return t.prototype.ngOnInit = function() { this.show && (this.formId = "form_" + this.cid + "_" + ++t.frmId, this.modelRef = this.util.getUIModelRef(this.modal.nativeElement)) }, t.prototype.ngOnDestroy = function() { this.util.modalPopup(this.modal.nativeElement, "hide") }, t.prototype.share = function() {
                    var t = this;
                    this.actionSvc.shareMailSend(this.cid, this.mailIds, this.mailBody).subscribe(function() { t.util.notify("Successfully shared " + t.ctitle + " with " + t.mailIds), t.closeModal() }, function(e) { t.util.notify("Unable to share : " + t.ctitle), t.closeModal() })
                }, t.prototype.openModal = function() { this.modelRef.show() }, t.prototype.closeModal = function() { this.modelRef.hide() }, t.frmId = 0, t
            }(),
            to = i.T({
                encapsulation: 0,
                styles: [
                    [""]
                ],
                data: {}
            });

        function eo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "a", [
                ["class", "uk-margin-right uk-text-meta"],
                ["title", "Share"],
                ["uk-icon", "icon: social"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.openModal() && i), i }, null, null))], null, null)
        }

        function no(t) {
            return i._17(0, [i._13(402653184, 1, { modal: 0 }), (t()(), i.Q(16777216, null, null, 1, null, eo)), i.U(2, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n"])), (t()(), i.V(4, 0, [
                [1, 0],
                ["modal", 1]
            ], null, 56, "div", [
                ["uk-modal", ""]
            ], [
                [8, "id", 0],
                [8, "hidden", 0]
            ], null, null, null, null)), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(6, 0, null, null, 53, "div", [
                ["class", "uk-modal-dialog"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(8, 0, null, null, 0, "button", [
                ["class", "uk-modal-close-default"],
                ["type", "button"],
                ["uk-close", ""]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(10, 0, null, null, 39, "div", [
                ["class", "uk-modal-body"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(12, 0, null, null, 36, "form", [
                ["novalidate", ""]
            ], [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "submit"],
                [null, "reset"]
            ], function(t, e, n) { var o = !0; return "submit" === e && (o = !1 !== i._6(t, 14).onSubmit(n) && o), "reset" === e && (o = !1 !== i._6(t, 14).onReset() && o), o }, null, null)), i.U(13, 16384, null, 0, Qi, [], null, null), i.U(14, 4210688, null, 0, $i, [
                [8, null],
                [8, null]
            ], null, null), i._11(2048, null, oi, null, [$i]), i.U(16, 16384, null, 0, Pi, [oi], null, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(18, 0, null, null, 29, "fieldset", [
                ["class", "uk-fieldset"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(20, 0, null, null, 1, "legend", [
                ["class", "uk-legend "]
            ], null, null, null, null, null)), (t()(), i._15(21, null, ["Share : ", ""])), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(23, 0, null, null, 0, "hr", [
                ["class", "uk-divider-small"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(25, 0, null, null, 1, "p", [
                ["class", "uk-text-meta"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n            Enter email-id(s) without '@infosys.com' separated by semicolon(;)\n          "])), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(28, 0, null, null, 8, "div", [
                ["class", "uk-margin"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n            "])), (t()(), i.V(30, 0, null, null, 5, "input", [
                ["class", "uk-input"],
                ["placeholder", "eg: xyz;abc"],
                ["type", "text"]
            ], [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "ngModelChange"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"]
            ], function(t, e, n) {
                var o = !0,
                    r = t.component;
                return "input" === e && (o = !1 !== i._6(t, 31)._handleInput(n.target.value) && o), "blur" === e && (o = !1 !== i._6(t, 31).onTouched() && o), "compositionstart" === e && (o = !1 !== i._6(t, 31)._compositionStart() && o), "compositionend" === e && (o = !1 !== i._6(t, 31)._compositionEnd(n.target.value) && o), "ngModelChange" === e && (o = !1 !== (r.mailIds = n) && o), o
            }, null, null)), i.U(31, 16384, null, 0, fi, [i.w, i.h, [2, pi]], null, null), i._11(1024, null, di, function(t) { return [t] }, [fi]), i.U(33, 671744, null, 0, qi, [
                [2, oi],
                [8, null],
                [8, null],
                [2, di]
            ], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i._11(2048, null, wi, null, [qi]), i.U(35, 16384, null, 0, Ai, [wi], null, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(38, 0, null, null, 8, "div", [
                ["class", "uk-margin"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n            "])), (t()(), i.V(40, 0, null, null, 5, "textarea", [
                ["class", "uk-textarea"],
                ["placeholder", "Your message here ..."],
                ["rows", "5"]
            ], [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "ngModelChange"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"]
            ], function(t, e, n) {
                var o = !0,
                    r = t.component;
                return "input" === e && (o = !1 !== i._6(t, 41)._handleInput(n.target.value) && o), "blur" === e && (o = !1 !== i._6(t, 41).onTouched() && o), "compositionstart" === e && (o = !1 !== i._6(t, 41)._compositionStart() && o), "compositionend" === e && (o = !1 !== i._6(t, 41)._compositionEnd(n.target.value) && o), "ngModelChange" === e && (o = !1 !== (r.mailBody = n) && o), o
            }, null, null)), i.U(41, 16384, null, 0, fi, [i.w, i.h, [2, pi]], null, null), i._11(1024, null, di, function(t) { return [t] }, [fi]), i.U(43, 671744, null, 0, qi, [
                [2, oi],
                [8, null],
                [8, null],
                [2, di]
            ], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i._11(2048, null, wi, null, [qi]), i.U(45, 16384, null, 0, Ai, [wi], null, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(51, 0, null, null, 7, "div", [
                ["class", "uk-modal-footer uk-text-right"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(53, 0, null, null, 1, "button", [
                ["class", "uk-button uk-button-default"],
                ["type", "button"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.closeModal() && i), i }, null, null)), (t()(), i._15(-1, null, ["Cancel"])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(56, 0, null, null, 1, "button", [
                ["class", "uk-button uk-button-primary"],
                ["type", "button"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.share() && i), i }, null, null)), (t()(), i._15(-1, null, ["Share Now"])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i._15(-1, null, ["\n  "])), (t()(), i._15(-1, null, ["\n"])), (t()(), i._15(-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 2, 0, n.show), t(e, 33, 0, "mailIds" + n.formId, n.mailIds), t(e, 43, 0, "mailBody" + n.formId, n.mailBody)
            }, function(t, e) {
                var n = e.component;
                t(e, 4, 0, "share_modal" + n.formId, !n.show), t(e, 12, 0, i._6(e, 16).ngClassUntouched, i._6(e, 16).ngClassTouched, i._6(e, 16).ngClassPristine, i._6(e, 16).ngClassDirty, i._6(e, 16).ngClassValid, i._6(e, 16).ngClassInvalid, i._6(e, 16).ngClassPending), t(e, 21, 0, n.ctitle), t(e, 30, 0, i._6(e, 35).ngClassUntouched, i._6(e, 35).ngClassTouched, i._6(e, 35).ngClassPristine, i._6(e, 35).ngClassDirty, i._6(e, 35).ngClassValid, i._6(e, 35).ngClassInvalid, i._6(e, 35).ngClassPending), t(e, 40, 0, i._6(e, 45).ngClassUntouched, i._6(e, 45).ngClassTouched, i._6(e, 45).ngClassPristine, i._6(e, 45).ngClassDirty, i._6(e, 45).ngClassValid, i._6(e, 45).ngClassInvalid, i._6(e, 45).ngClassPending)
            })
        }
        var io = function() {
                function t() { this.profileError = new i.j }
                return t.prototype.ngOnInit = function() {}, Object.defineProperty(t.prototype, "photoUrl", { get: function() { return location.origin + "/clientApi/user/photo/" + this.email }, enumerable: !0, configurable: !0 }), t.prototype.profileImageError = function() { this.profileError.emit() }, t
            }(),
            oo = i.T({
                encapsulation: 0,
                styles: [
                    [".profileImage[_ngcontent-%COMP%]{margin:10px;width:50px;height:50px;border-radius:50%;min-width:50px}.colorCode0[_ngcontent-%COMP%]{background-color:#e65d5d}.colorCode1[_ngcontent-%COMP%]{background-color:#428e9e}.colorCode2[_ngcontent-%COMP%]{background-color:#508b61}.colorCode3[_ngcontent-%COMP%]{background-color:#b89a5f}.colorCode4[_ngcontent-%COMP%]{background-color:#af578b}.colorCode5[_ngcontent-%COMP%]{background-color:#7896d2}.colorCode6[_ngcontent-%COMP%]{background-color:#24adb9}.profileImg[_ngcontent-%COMP%]{margin:0;width:70px;height:70px;border-radius:50%}"]
                ],
                data: {}
            });

        function ro(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "img", [], [
                [1, "src", 4]
            ], [
                [null, "error"]
            ], function(t, e, n) { var i = !0; return "error" === e && (i = !1 !== t.component.profileImageError() && i), i }, null, null)), i.U(1, 278528, null, 0, Z, [i.n, i.o, i.h, i.w], { ngClass: [0, "ngClass"] }, null)], function(t, e) { t(e, 1, 0, "large" === e.component.imageSize ? "profileImg" : "profileImage") }, function(t, e) { t(e, 0, 0, e.component.photoUrl) })
        }
        var lo = function() {
                function t() {}
                return t.prototype.transform = function(t, e) { var n = ""; return t && e ? n = t !== e ? t + " " + e : t : t && !e ? n = t : !t && e && (n = e), n }, t
            }(),
            so = function() {
                function t(t, e) { this.util = t, this.actionSvc = e, this.mailBody = "I need your help in 'Elaborate your query'", this.checkBody = "I need your help in 'Elaborate your query'", this.show = !0, this.show = this.actionSvc.getConfig().mailer }
                return t.prototype.ngOnInit = function() { this.show && (this.modelRef = this.util.getUIModelRef(this.sendMailModal.nativeElement)), this.content && (this.contentUrl = window.location.origin + ("application/vnd.ekstep.content-collection" === this.content.mimeType ? "/toc/" : "/viewer/") + this.content.identifier) }, t.prototype.ngOnDestroy = function() { this.util.modalPopup(this.sendMailModal.nativeElement, "hide") }, t.prototype.share = function() {
                    var t = this;
                    this.allMailIds && (this.mailIds = this.allMailIds), this.recipient && (this.mailIds = this.recipient.email.split("@")[0]), this.mailBody.length < 20 ? this.util.notify("Minimum 20 characters needed") : this.actionSvc.shareMailSend(this.content.identifier, this.mailIds, this.mailBody, "query").subscribe(function() { t.util.notify("Successfully sent mail to " + t.mailIds), t.closeModal() }, function(e) { t.util.notify("Unable to send mail to " + t.mailIds), t.closeModal() })
                }, t.prototype.openModal = function() { this.modelRef.show(), this.mailBody = "I need your help in 'Elaborate your query'" }, t.prototype.closeModal = function() { this.modelRef.hide() }, t.frmId = 0, t
            }(),
            ao = i.T({
                encapsulation: 0,
                styles: [
                    [".send-mail[_ngcontent-%COMP%], .url-color[_ngcontent-%COMP%], .url-color[_ngcontent-%COMP%]:hover{color:#3f51b5}a[_ngcontent-%COMP%]:hover{color:#999}"]
                ],
                data: {}
            });

        function uo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "a", [
                ["class", "uk-margin-right uk-text-meta"],
                ["title", "Send mail"],
                ["uk-icon", "icon: mail"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.openModal() && i), i }, null, null))], null, null)
        }

        function co(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "a", [
                ["class", "uk-margin-right send-mail url-color"],
                ["title", "Send mail"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.openModal() && i), i }, null, null)), (t()(), i._15(-1, null, ["Mail all"]))], null, null)
        }

        function ho(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 3, "p", [], null, null, null, null, null)), (t()(), i._15(1, null, ["Have a query for ", " ? "])), i._10(2, 2), i._10(3, 1)], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.recipient.firstName || n.recipient.lastName ? i._16(e, 1, 0, t(e, 3, 0, i._6(e.parent, 0), i._16(e, 1, 0, t(e, 2, 0, i._6(e.parent, 1), n.recipient.firstName, n.recipient.lastName)))) : n.recipient.email)
            })
        }

        function po(t) {
            return i._17(0, [i._8(0, bt, []), i._8(0, lo, []), i._13(402653184, 1, { sendMailModal: 0 }), (t()(), i.Q(16777216, null, null, 1, null, uo)), i.U(4, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n"])), (t()(), i.Q(16777216, null, null, 1, null, co)), i.U(7, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n\n"])), (t()(), i.V(9, 0, [
                [1, 0],
                ["sendMailModal", 1]
            ], null, 54, "div", [
                ["uk-modal", ""]
            ], [
                [8, "hidden", 0]
            ], null, null, null, null)), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(11, 0, null, null, 51, "div", [
                ["class", "uk-modal-dialog uk-margin-remove-bottom uk-margin-auto-vertical"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(13, 0, null, null, 0, "button", [
                ["class", "uk-modal-close-default"],
                ["type", "button"],
                ["uk-close", ""]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(15, 0, null, null, 37, "div", [
                ["class", "uk-modal-body"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(17, 0, null, null, 34, "form", [
                ["novalidate", ""]
            ], [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "submit"],
                [null, "reset"]
            ], function(t, e, n) { var o = !0; return "submit" === e && (o = !1 !== i._6(t, 19).onSubmit(n) && o), "reset" === e && (o = !1 !== i._6(t, 19).onReset() && o), o }, null, null)), i.U(18, 16384, null, 0, Qi, [], null, null), i.U(19, 4210688, null, 0, $i, [
                [8, null],
                [8, null]
            ], null, null), i._11(2048, null, oi, null, [$i]), i.U(21, 16384, null, 0, Pi, [oi], null, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(23, 0, null, null, 27, "fieldset", [
                ["class", "uk-fieldset"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, ho)), i.U(26, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(28, 0, null, null, 1, "p", [], [
                [8, "hidden", 0]
            ], null, null, null, null)), (t()(), i._15(-1, null, ["Have a query ?"])), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(31, 0, null, null, 0, "hr", [], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(33, 0, null, null, 6, "p", [], null, null, null, null, null)), (t()(), i._15(-1, null, [" Hi,\n            "])), (t()(), i.V(35, 0, null, null, 0, "br", [], null, null, null, null, null)), (t()(), i._15(-1, null, ["I found your reference on Lex while going through\n            "])), (t()(), i.V(37, 0, null, null, 1, "a", [
                ["class", "url-color"],
                ["target", "_blank"]
            ], [
                [8, "href", 4]
            ], null, null, null, null)), (t()(), i._15(38, null, [" ", ""])), (t()(), i._15(-1, null, ["\n          "])), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(41, 0, null, null, 8, "div", [
                ["class", "uk-margin"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n            "])), (t()(), i.V(43, 0, null, null, 5, "textarea", [
                ["class", "uk-textarea"],
                ["rows", "5"]
            ], [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "ngModelChange"],
                [null, "input"],
                [null, "blur"],
                [null, "compositionstart"],
                [null, "compositionend"]
            ], function(t, e, n) {
                var o = !0,
                    r = t.component;
                return "input" === e && (o = !1 !== i._6(t, 44)._handleInput(n.target.value) && o), "blur" === e && (o = !1 !== i._6(t, 44).onTouched() && o), "compositionstart" === e && (o = !1 !== i._6(t, 44)._compositionStart() && o), "compositionend" === e && (o = !1 !== i._6(t, 44)._compositionEnd(n.target.value) && o), "ngModelChange" === e && (o = !1 !== (r.mailBody = n) && o), o
            }, null, null)), i.U(44, 16384, null, 0, fi, [i.w, i.h, [2, pi]], null, null), i._11(1024, null, di, function(t) { return [t] }, [fi]), i.U(46, 671744, null, 0, qi, [
                [2, oi],
                [8, null],
                [8, null],
                [2, di]
            ], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), i._11(2048, null, wi, null, [qi]), i.U(48, 16384, null, 0, Ai, [wi], null, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(54, 0, null, null, 7, "div", [
                ["class", "uk-modal-footer uk-text-right"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(56, 0, null, null, 1, "button", [
                ["class", "uk-button uk-button-default"],
                ["type", "button"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.closeModal() && i), i }, null, null)), (t()(), i._15(-1, null, ["Cancel"])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(59, 0, null, null, 1, "button", [
                ["class", "uk-button uk-button-primary"],
                ["type", "button"]
            ], [
                [8, "disabled", 0]
            ], [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.share() && i), i }, null, null)), (t()(), i._15(-1, null, ["Send"])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i._15(-1, null, ["\n  "])), (t()(), i._15(-1, null, ["\n"])), (t()(), i._15(-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 4, 0, !n.allMailIds && n.show), t(e, 7, 0, n.allMailIds && n.show), t(e, 26, 0, n.recipient), t(e, 46, 0, "mailBody", n.mailBody)
            }, function(t, e) {
                var n = e.component;
                t(e, 9, 0, !n.show), t(e, 17, 0, i._6(e, 21).ngClassUntouched, i._6(e, 21).ngClassTouched, i._6(e, 21).ngClassPristine, i._6(e, 21).ngClassDirty, i._6(e, 21).ngClassValid, i._6(e, 21).ngClassInvalid, i._6(e, 21).ngClassPending), t(e, 28, 0, n.recipient), t(e, 37, 0, i.Y(1, "", n.contentUrl, "")), t(e, 38, 0, n.content.name), t(e, 43, 0, i._6(e, 48).ngClassUntouched, i._6(e, 48).ngClassTouched, i._6(e, 48).ngClassPristine, i._6(e, 48).ngClassDirty, i._6(e, 48).ngClassValid, i._6(e, 48).ngClassInvalid, i._6(e, 48).ngClassPending), t(e, 59, 0, n.mailBody === n.checkBody)
            })
        }
        var fo = function() {
                function t(t, e) { this.util = t, this.actionSvc = e, this.show = !0, this.show = this.actionSvc.getConfig().call }
                return t.prototype.ngOnInit = function() { this.show && (this.modelRef = this.util.getUIModelRef(this.callModal.nativeElement)) }, t.prototype.ngOnDestroy = function() { this.util.modalPopup(this.callModal.nativeElement, "hide") }, t.prototype.openModal = function() { this.modelRef.show() }, t.prototype.closeModal = function() { this.modelRef.hide() }, t
            }(),
            go = i.T({
                encapsulation: 0,
                styles: [
                    [".url-color[_ngcontent-%COMP%], .url-color[_ngcontent-%COMP%]:hover{color:#3f51b5}a[_ngcontent-%COMP%]:hover{color:#999}"]
                ],
                data: {}
            });

        function mo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "a", [
                ["class", "uk-text-meta"],
                ["title", "Call"],
                ["uk-icon", "icon: receiver"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.openModal() && i), i }, null, null))], null, null)
        }

        function vo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 3, "p", [], null, null, null, null, null)), (t()(), i._15(1, null, ["Have a query for ", " ? "])), i._10(2, 2), i._10(3, 1)], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, i._16(e, 1, 0, t(e, 3, 0, i._6(e.parent, 0), i._16(e, 1, 0, t(e, 2, 0, i._6(e.parent, 1), n.callData.firstName, n.callData.lastName)))))
            })
        }

        function yo(t) { return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "p", [], null, null, null, null, null)), (t()(), i._15(1, null, ["Have a query for ", " ?"]))], null, function(t, e) { t(e, 1, 0, e.component.callData.email) }) }

        function wo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), i._15(1, null, [" City : ", ""])), i._10(2, 1)], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, i._16(e, 1, 0, t(e, 2, 0, i._6(e.parent, 0), n.callData.city)))
            })
        }

        function bo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 4, "div", [], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n              Call :\n              "])), (t()(), i.V(2, 0, null, null, 1, "a", [
                ["class", "url-color"]
            ], [
                [8, "href", 4]
            ], null, null, null, null)), (t()(), i._15(3, null, ["", ""])), (t()(), i._15(-1, null, ["\n            "]))], null, function(t, e) {
                var n = e.component;
                t(e, 2, 0, i.Y(1, "tel:", n.callData.phoneNo, "")), t(e, 3, 0, n.callData.phoneNo)
            })
        }

        function _o(t) {
            return i._17(0, [i._8(0, bt, []), i._8(0, lo, []), i._13(402653184, 1, { callModal: 0 }), (t()(), i.Q(16777216, null, null, 1, null, mo)), i.U(4, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n"])), (t()(), i.V(6, 0, [
                [1, 0],
                ["callModal", 1]
            ], null, 34, "div", [
                ["uk-modal", ""]
            ], [
                [8, "hidden", 0]
            ], null, null, null, null)), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(8, 0, null, null, 31, "div", [
                ["class", "uk-modal-dialog uk-margin-auto-vertical"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(10, 0, null, null, 0, "button", [
                ["class", "uk-modal-close-default"],
                ["type", "button"],
                ["uk-close", ""]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(12, 0, null, null, 26, "div", [
                ["class", "uk-modal-body"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(14, 0, null, null, 23, "form", [
                ["novalidate", ""]
            ], [
                [2, "ng-untouched", null],
                [2, "ng-touched", null],
                [2, "ng-pristine", null],
                [2, "ng-dirty", null],
                [2, "ng-valid", null],
                [2, "ng-invalid", null],
                [2, "ng-pending", null]
            ], [
                [null, "submit"],
                [null, "reset"]
            ], function(t, e, n) { var o = !0; return "submit" === e && (o = !1 !== i._6(t, 16).onSubmit(n) && o), "reset" === e && (o = !1 !== i._6(t, 16).onReset() && o), o }, null, null)), i.U(15, 16384, null, 0, Qi, [], null, null), i.U(16, 4210688, null, 0, $i, [
                [8, null],
                [8, null]
            ], null, null), i._11(2048, null, oi, null, [$i]), i.U(18, 16384, null, 0, Pi, [oi], null, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(20, 0, null, null, 16, "fieldset", [
                ["class", "uk-fieldset"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, vo)), i.U(23, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, yo)), i.U(26, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(28, 0, null, null, 7, "div", [
                ["class", "uk-margin"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n            "])), (t()(), i.Q(16777216, null, null, 1, null, wo)), i.U(31, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n            "])), (t()(), i.Q(16777216, null, null, 1, null, bo)), i.U(34, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i._15(-1, null, ["\n  "])), (t()(), i._15(-1, null, ["\n"])), (t()(), i._15(-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 4, 0, n.show), t(e, 23, 0, n.callData.firstName || n.callData.lastName), t(e, 26, 0, !n.callData.firstName && !n.callData.lastName), t(e, 31, 0, n.callData.city), t(e, 34, 0, n.callData.phoneNo)
            }, function(t, e) { t(e, 6, 0, !e.component.show), t(e, 14, 0, i._6(e, 18).ngClassUntouched, i._6(e, 18).ngClassTouched, i._6(e, 18).ngClassPristine, i._6(e, 18).ngClassDirty, i._6(e, 18).ngClassValid, i._6(e, 18).ngClassInvalid, i._6(e, 18).ngClassPending) })
        }
        var Co = function() {
                function t() {}
                return t.prototype.fetchOtherResource = function(t, e) { throw new Error("Not implemented") }, t.prototype.downloadCardAction = function(t, e) { throw new Error("Not implemented") }, t.prototype.getFirstChild = function(t) {
                    for (;;) {
                        if ("Resource" === t.contentType) return t;
                        t = t.children[0]
                    }
                }, t
            }(),
            ko = function() {
                function t(t) { this.svc = t, this.expand = !1, this.resumeCollectionResourceHash = {} }
                return t.prototype.ngOnInit = function() { this.updateForcedUrl() }, t.prototype.ngOnChanges = function() { this.updateForcedUrl() }, t.prototype.updateForcedUrl = function() { "Resource" !== this.content.contentType && (this.forcedNavigationUrl = this.resumeCollectionResourceHash[this.content.identifier] ? "/viewer/" + this.resumeCollectionResourceHash[this.content.identifier] : this.getFirstChildUrl()) }, t.prototype.getFirstChildUrl = function() { var t = this.svc.getFirstChild(this.content); if (t) return "/viewer/" + t.identifier }, t
            }(),
            xo = function() {
                function t() {}
                return t.prototype.transform = function(t, e) { return { id: t.identifier, courseId: e, artifactUrl: t.artifactUrl, title: t.name, duration: t.duration, image: t.appIcon && t.appIcon.length > 0 ? t.appIcon.replace(/http:\/\/(\d{2,3}.){3}\d{2,3}:\d{4}/, "") : "./assets/app_logos/lex-logo-trans.svg", contentType: t.contentType, resourceType: t.resourceType, date: t.lastUpdatedOn || "2018-01-12T12:41:35.600+0000", mime: t.mimeType, type: t.mediaType, source: t.sourceShortName || "internal", url: ("application/vnd.ekstep.content-collection" === t.mimeType ? "/toc/" : "/viewer/") + t.identifier, description: t.description, complexityLevel: t.complexityLevel, viewCount: t.me_totalSessionsCount, reasons: t.recommendReasons, reasonPrefix: t.reasonPrefix } }, t
            }(),
            To = function() {
                function t() { this.hasBackGround = !0 }
                return t.prototype.ngOnInit = function() { this.icon = this.getIcon() }, t.prototype.getIcon = function() {
                    switch (this.mime) {
                        case "application/vnd.ekstep.ecml-archive":
                        case "application/epub":
                        case "application/vnd.ekstep.h5p-archive":
                        case "application/html":
                            return this.alt = "Resource", "code";
                        case "video/mp4":
                            return this.alt = "Video", "play";
                        case "application/pdf":
                            return this.alt = "PDF Document", "file";
                        case "application/quiz":
                            return this.alt = "Quiz", "question";
                        case "video/webm":
                            return this.alt = "Video", "play";
                        case "video/x-youtube":
                            return this.alt = "Youtube Video", "youtube";
                        case "application/web-module":
                            return this.alt = "Web Module", "copy";
                        default:
                            if ("Course" === this.contentType) return this.alt = "Course", "folder";
                            if ("Collection" === this.contentType) return this.alt = "Learning Module", "album";
                            if ("Learning Path" === this.contentType) return this.alt = "Program", "list"
                    }
                }, t
            }(),
            Io = i.T({
                encapsulation: 0,
                styles: [
                    [""]
                ],
                data: {}
            });

        function Eo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 5, "span", [], [
                [8, "title", 0]
            ], null, null, null, null)), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(2, 0, null, null, 2, "a", [], [
                [1, "uk-icon", 0]
            ], null, null, null, null)), i.U(3, 278528, null, 0, Z, [i.n, i.o, i.h, i.w], { ngClass: [0, "ngClass"] }, null), i._9(4, { "uk-icon-button uk-button-primary uk-icon-large": 0 }), (t()(), i._15(-1, null, ["\n"])), (t()(), i._15(-1, null, ["\n"]))], function(t, e) { t(e, 3, 0, t(e, 4, 0, e.component.hasBackGround)) }, function(t, e) {
                var n = e.component;
                t(e, 0, 0, n.alt), t(e, 2, 0, "icon: " + n.icon)
            })
        }
        var So = function() {
                function t() {}
                return t.prototype.transform = function(t) { var e; return t >= 0 ? t < 1e3 ? String(t) : t >= 1e3 && t < 1e6 ? (e = (t / 1e3).toFixed(1) + "K").includes(".0K") ? e.split(".")[0] + "K" : e : (e = (t / 1e6).toFixed(1) + "M").includes(".0M") ? e.split(".")[0] + "M" : e : "" }, t
            }(),
            Mo = function() {
                function t(t, e, n) { this.sanitizer = t, this.util = e, this.navReq = n, this.progress = 0, this.cardClick = new i.j, this.expandedDescription = !1, this.isMobile = !1 }
                return t.prototype.ngOnInit = function() { /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (this.isMobile = !0), this.bgImage = this.sanitizer.bypassSecurityTrustStyle('url("' + this.cardContent.image + '")'), this.isResource = "resource" === this.cardContent.contentType.toLowerCase() }, t.prototype.expand = function() { this.cardClick.emit({ id: this.cardContent.id }) }, t.prototype.navigate = function(t, e) { this.navReq.navigateTo(this.forcedNavigationUrl || t, e) }, t.prototype.resourceUnavailable = function() { this.util.notify("Resource unavailable") }, t
            }(),
            Oo = i.T({
                encapsulation: 0,
                styles: [
                    [".imageSection[_ngcontent-%COMP%]{background-color:#999;background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;width:70px}.colorCode0[_ngcontent-%COMP%]{background-color:#e65d5d}.colorCode1[_ngcontent-%COMP%]{background-color:#428e9e}.colorCode2[_ngcontent-%COMP%]{background-color:#508b61}.colorCode3[_ngcontent-%COMP%]{background-color:#b89a5f}.colorCode4[_ngcontent-%COMP%]{background-color:#af578b}.colorCode5[_ngcontent-%COMP%]{background-color:#7896d2}.colorCode6[_ngcontent-%COMP%]{background-color:#24adb9}.uk-card[_ngcontent-%COMP%]{border-bottom:1px solid #c5cae9}.toggleIcon[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;cursor:pointer}.uk-card-title[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:lighter}.uk-card-title.resource[_ngcontent-%COMP%]{margin-right:20px!important}.card-link[_ngcontent-%COMP%]{text-decoration:none!important}.uk-progress[_ngcontent-%COMP%]{height:5px;position:absolute;left:0;right:0;bottom:0}.icons[_ngcontent-%COMP%]{cursor:pointer}.details[_ngcontent-%COMP%]{margin-top:10px!important}.uk-subnav[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding-left:0!important}.uk-subnav[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{padding-left:20px!important}.uk-subnav-divider[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:nth-child(n+2):not(.uk-first-column)::before{margin-right:10px!important}.greyed[_ngcontent-%COMP%]{opacity:.9;background-color:rgba(0,0,0,.09);-webkit-transform:translate(1px,1px);transform:translate(1px,1px)}.greyed[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.09);-webkit-transform:translate(3px,1px);transform:translate(3px,1px)}.greyed-image[_ngcontent-%COMP%]{-webkit-filter:grayscale(.9) contrast(.7) opacity(.9);filter:grayscale(.9) contrast(.7) opacity(.9)}.description[_ngcontent-%COMP%]{margin:0;padding:10px}"]
                ],
                data: {}
            });

        function Ao(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "lex-card-icon", [
                ["class", "uk-position-center"]
            ], null, null, null, Eo, Io)), i.U(1, 114688, null, 0, To, [], { mime: [0, "mime"], contentType: [1, "contentType"] }, null)], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.cardContent.mime, n.cardContent.contentType)
            }, null)
        }

        function Po(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "div", [
                ["class", "uk-text-truncate uk-text-meta cur-pointer"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.expand() && i), i }, null, null)), (t()(), i._15(1, null, ["", ""]))], null, function(t, e) { t(e, 1, 0, e.component.cardContent.description) })
        }

        function Lo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 4, "li", [], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(2, 0, null, null, 1, "span", [
                ["class", "uk-margin-small-right uk-margin-remove-left uk-text-meta uk-text-capitalize"]
            ], null, null, null, null, null)), (t()(), i._15(3, null, ["", ""])), (t()(), i._15(-1, null, ["\n        "]))], null, function(t, e) { t(e, 3, 0, e.component.cardContent.complexityLevel) })
        }

        function Vo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 5, "li", [], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(2, 0, null, null, 2, "span", [
                ["class", "uk-margin-small-right uk-margin-remove-left uk-text-meta uk-text-capitalize"]
            ], null, null, null, null, null)), (t()(), i._15(3, null, ["", ""])), i._10(4, 2), (t()(), i._15(-1, null, ["\n        "]))], null, function(t, e) {
                var n = e.component;
                t(e, 3, 0, i._16(e, 3, 0, t(e, 4, 0, i._6(e.parent, 0), n.cardContent.duration, "colon")))
            })
        }

        function Do(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 5, "li", [], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(2, 0, null, null, 2, "span", [
                ["class", "uk-text-meta uk-text-lowercase"]
            ], null, null, null, null, null)), (t()(), i._15(3, null, ["", " views"])), i._10(4, 1), (t()(), i._15(-1, null, ["\n        "]))], null, function(t, e) {
                var n = e.component;
                t(e, 3, 0, i._16(e, 3, 0, t(e, 4, 0, i._6(e.parent, 2), n.cardContent.viewCount)))
            })
        }

        function No(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "lex-btn-goal", [], null, null, null, Bt, At)), i.U(1, 245760, null, 0, Ot, [St, xt, Mt], { cid: [0, "cid"], entityTitle: [1, "entityTitle"] }, null)], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.cardContent.id, n.cardContent.title)
            }, null)
        }

        function Bo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "progress", [
                ["class", "uk-progress"],
                ["max", "100"]
            ], [
                [8, "value", 0]
            ], null, null, null, null))], null, function(t, e) { t(e, 0, 0, i.Y(1, "", e.component.progress, "")) })
        }

        function jo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "div", [
                ["style", "position:absolute;top:0;bottom:0;right:0;left:0;"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.resourceUnavailable() && i), i }, null, null))], null, null)
        }

        function Ro(t) {
            return i._17(0, [i._8(0, k, []), i._8(0, yt, [i.p]), i._8(0, So, []), (t()(), i.V(3, 0, null, null, 74, "div", [
                ["class", "uk-card uk-card-default uk-flex uk-margin-remove"],
                ["uk-grid", ""]
            ], null, null, null, null, null)), i.U(4, 278528, null, 0, Z, [i.n, i.o, i.h, i.w], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i._9(5, { greyed: 0 }), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(7, 0, null, null, 6, "div", [
                ["class", "imageSection uk-flex-stretch cur-pointer"]
            ], [
                [8, "title", 0],
                [4, "background-image", null]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0,
                    o = t.component;
                return "click" === e && (i = !1 !== o.navigate(o.cardContent.url, { courseId: o.cardContent.courseId }) && i), i
            }, null, null)), i.U(8, 278528, null, 0, Z, [i.n, i.o, i.h, i.w], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i._9(9, { resource: 0, "greyed-image": 1 }), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.Q(16777216, null, null, 1, null, Ao)), i.U(12, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n  "])), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(15, 0, null, null, 55, "div", [
                ["class", "uk-width-expand uk-padding-small"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(17, 0, null, null, 6, "h4", [
                ["class", "uk-card-title uk-margin-remove uk-text-truncate"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0,
                    o = t.component;
                return "click" === e && (i = !1 !== o.navigate(o.cardContent.url, { courseId: o.cardContent.courseId }) && i), i
            }, null, null)), i.U(18, 278528, null, 0, Z, [i.n, i.o, i.h, i.w], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i._9(19, { resource: 0 }), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(21, 0, null, null, 1, "span", [
                ["class", "uk-text-truncate uk-margin-small-right cur-pointer"]
            ], null, null, null, null, null)), (t()(), i._15(22, null, ["", " "])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(25, 0, null, null, 0, "span", [
                ["class", "toggleIcon"]
            ], [
                [1, "uk-icon", 0]
            ], [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.expand() && i), i }, null, null)), (t()(), i._15(-1, null, ["\n\n    "])), (t()(), i.Q(16777216, null, null, 1, null, Po)), i.U(28, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(30, 0, null, null, 39, "div", [], [
                [8, "hidden", 0]
            ], null, null, null, null)), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(32, 0, null, null, 17, "ul", [
                ["class", "uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-vertical details"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.Q(16777216, null, null, 1, null, Lo)), i.U(35, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.Q(16777216, null, null, 1, null, Vo)), i.U(38, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(40, 0, null, null, 5, "li", [], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(42, 0, null, null, 2, "span", [
                ["class", "uk-margin-small-right uk-margin-remove-left uk-text-meta uk-text-capitalize"]
            ], null, null, null, null, null)), (t()(), i._15(43, null, ["", ""])), i._10(44, 2), (t()(), i._15(-1, null, ["\n        "])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.Q(16777216, null, null, 1, null, Do)), i.U(48, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n      "])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(51, 0, null, null, 14, "p", [
                ["class", "uk-margin-small-top uk-margin-remove-bottom uk-clearfix"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(53, 0, null, null, 1, "lex-btn-bookmark", [
                ["class", "btn"]
            ], null, null, null, Qt, Gt)), i.U(54, 114688, null, 0, zt, [Ht], { cid: [0, "cid"] }, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.Q(16777216, null, null, 1, null, No)), i.U(57, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(59, 0, null, null, 1, "lex-btn-download", [
                ["class", "btn"]
            ], [
                [8, "hidden", 0]
            ], null, null, Jt, Kt)), i.U(60, 114688, null, 0, Yt, [St], { cid: [0, "cid"] }, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(62, 0, null, null, 1, "lex-btn-cohorts", [
                ["class", "btn"]
            ], null, null, null, ie, ee)), i.U(63, 114688, null, 0, te, [St, Mt], { cid: [0, "cid"] }, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.Q(16777216, null, null, 1, null, Bo)), i.U(68, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n    "])), (t()(), i._15(-1, null, ["\n  "])), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(72, 0, null, null, 1, "div", [
                ["class", "uk-text-meta cur-pointer description uk-width-1-1"]
            ], [
                [8, "hidden", 0]
            ], [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.expand() && i), i }, null, null)), (t()(), i._15(73, null, ["", ""])), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.Q(16777216, null, null, 1, null, jo)), i.U(76, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n"])), (t()(), i._15(-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 4, 0, "uk-card uk-card-default uk-flex uk-margin-remove", t(e, 5, 0, (!n.cardContent.artifactUrl || 0 == n.cardContent.artifactUrl.length) && n.isResource)), t(e, 8, 0, "imageSection uk-flex-stretch cur-pointer", t(e, 9, 0, n.isResource, (!n.cardContent.artifactUrl || 0 == n.cardContent.artifactUrl.length) && n.isResource)), t(e, 12, 0, n.isExpanded), t(e, 18, 0, "uk-card-title uk-margin-remove uk-text-truncate", t(e, 19, 0, n.isResource)), t(e, 28, 0, !n.isResource && !n.isExpanded), t(e, 35, 0, n.cardContent.complexityLevel && !n.isMobile), t(e, 38, 0, n.cardContent.duration), t(e, 48, 0, n.cardContent.viewCount > 4), t(e, 54, 0, n.cardContent.id), t(e, 57, 0, "Collection" !== n.cardContent.contentType && "Resource" !== n.cardContent.contentType), t(e, 60, 0, n.cardContent.id), t(e, 63, 0, n.cardContent.id), t(e, 68, 0, n.progress > 0), t(e, 76, 0, (!n.cardContent.artifactUrl || 0 == n.cardContent.artifactUrl.length) && n.isResource)
            }, function(t, e) {
                var n = e.component;
                t(e, 7, 0, n.cardContent.title, n.bgImage), t(e, 22, 0, n.cardContent.title), t(e, 25, 0, "icon: chevron-" + (n.isExpanded ? "up" : "down")), t(e, 30, 0, !n.isExpanded), t(e, 43, 0, i._16(e, 43, 0, t(e, 44, 0, i._6(e, 1), n.cardContent.date, "MMM'' yy"))), t(e, 59, 0, "Learning Path" === n.cardContent.contentType || "Assessment" == n.cardContent.resourceType), t(e, 72, 0, !n.isExpanded), t(e, 73, 0, n.cardContent.description)
            })
        }
        var Uo = i.T({
            encapsulation: 0,
            styles: [
                [".content-addtional-meta[_ngcontent-%COMP%]{border-bottom:1px solid #c5cae9}.children[_ngcontent-%COMP%]{padding-left:20px}"]
            ],
            data: {}
        });

        function $o(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "lex-recursive-content-card", [], null, null, null, Ho, Uo)), i.U(1, 638976, null, 0, ko, [Co], { content: [0, "content"], courseId: [1, "courseId"], expand: [2, "expand"], resumeCollectionResourceHash: [3, "resumeCollectionResourceHash"] }, null)], function(t, e) {
                var n = e.component;
                t(e, 1, 0, e.context.$implicit, n.courseId, !1, n.resumeCollectionResourceHash)
            }, null)
        }

        function Fo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 4, "div", [
                ["class", "children"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.Q(16777216, null, null, 1, null, $o)), i.U(3, 802816, null, 0, W, [i.E, i.B, i.n], { ngForOf: [0, "ngForOf"] }, null), (t()(), i._15(-1, null, ["\n  "]))], function(t, e) { t(e, 3, 0, e.component.content.children) }, null)
        }

        function Ho(t) {
            return i._17(0, [i._8(0, xo, []), (t()(), i.V(1, 0, null, null, 8, "section", [
                ["class", "recursive-container"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(3, 0, null, null, 2, "lex-list-card", [], null, [
                [null, "cardClick"]
            ], function(t, e, n) {
                var i = !0,
                    o = t.component;
                return "cardClick" === e && (i = 0 != (o.expand = !o.expand) && i), i
            }, Ro, Oo)), i.U(4, 114688, null, 0, Mo, [Gn, xt, Mt], { cardContent: [0, "cardContent"], isExpanded: [1, "isExpanded"], forcedNavigationUrl: [2, "forcedNavigationUrl"] }, { cardClick: "cardClick" }), i._10(5, 2), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.Q(16777216, null, null, 1, null, Fo)), i.U(8, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n"])), (t()(), i._15(-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 4, 0, i._16(e, 4, 0, t(e, 5, 0, i._6(e, 0), n.content, n.courseId)), n.expand, n.forcedNavigationUrl), t(e, 8, 0, n.expand)
            }, null)
        }
        var zo = function() {
                function t() {}
                return t.prototype.transform = function(t, e) { if (t) { var n = ""; return t.split(" ").forEach(function(t) { n += t.charAt(0) }), (n = n.replace(/[^a-zA-Z ]/g, "")).slice(0, e) } return "" }, t
            }(),
            Go = function() {
                function t(t, e, n) { this.svc = t, this.navReq = e, this.sanitizer = n, this.authors = [], this.documentCount = 0, this.videoCount = 0, this.quizCount = 0, this.youTubeCount = 0, this.collectionCount = 0, this.currentTab = "about", this.profileImageUnavailableHash = {} }
                return t.prototype.ngOnInit = function() {}, t.prototype.noProfileImage = function(t) { this.profileImageUnavailableHash[t] = !0 }, t.prototype.ngOnChanges = function() {
                    var t = this;
                    this.authors.length && this.authors.map(function(e) { e.imageUrl && (e.sanitizedImageUrl = t.sanitizer.bypassSecurityTrustUrl(e.imageUrl)), e.mobilePhone && (e.callMeta = {}, e.callMeta.city = e.city ? e.city : null, e.callMeta.phoneNo = e.mobilePhone, e.callMeta.firstName = e.givenName ? e.givenName : null, e.callMeta.lastName = e.surname ? e.surname : null), e.onPremisesUserPrincipalName && (e.mailMeta = {}, e.mailMeta.email = e.onPremisesUserPrincipalName.split("@")[0], e.mailMeta.firstName = e.givenName ? e.givenName : null, e.mailMeta.lastName = e.surname ? e.surname : null) }), this.content && (this.currentTab = "about", this.progStruc = this.updateProgramStructure(this.content, { docs: 0, video: 0, quiz: 0, youtube: 0, collection: -1, misc: 0 }))
                }, t.prototype.updateProgramStructure = function(t, e) {
                    var n = this;
                    if (t && "Resource" !== t.contentType) e.collection += 1, t.children.forEach(function(t) { e = n.updateProgramStructure(t, e) });
                    else if (t && "Resource" === t.contentType) {
                        switch (t.mimeType) {
                            case "application/quiz":
                                e.quiz += 1;
                                break;
                            case "video/mp4":
                                e.video += 1;
                                break;
                            case "video/x-youtube":
                                e.youtube += 1;
                                break;
                            case "application/pdf":
                                e.docs += 1;
                                break;
                            default:
                                e.misc += 1
                        }
                        return e
                    }
                    return e
                }, t.prototype.startCourse = function() {
                    var t = this.svc.getFirstChild(this.content);
                    this.navReq.navigateTo("/viewer/" + t.identifier, { courseId: this.content.identifier })
                }, t.prototype.navigate = function(t, e) { this.navReq.navigateTo(t, e) }, t
            }(),
            Zo = i.T({
                encapsulation: 0,
                styles: [
                    ["lex-recursive-content-card[_ngcontent-%COMP%]{-webkit-box-shadow:0 5px 15px #c5cae9;box-shadow:0 5px 15px #c5cae9;margin-bottom:10px;display:block}.colorCode0[_ngcontent-%COMP%]{background-color:#e65d5d}.colorCode1[_ngcontent-%COMP%]{background-color:#428e9e}.colorCode2[_ngcontent-%COMP%]{background-color:#508b61}.colorCode3[_ngcontent-%COMP%]{background-color:#b89a5f}.colorCode4[_ngcontent-%COMP%]{background-color:#af578b}.colorCode5[_ngcontent-%COMP%]{background-color:#7896d2}.colorCode6[_ngcontent-%COMP%]{background-color:#24adb9}.uk-cover-container[_ngcontent-%COMP%]{padding:10px}.backgroundImg[_ngcontent-%COMP%]{z-index:-1}.course-title[_ngcontent-%COMP%]{font-size:2.25rem;font-weight:lighter;margin-bottom:10px}.course-icon[_ngcontent-%COMP%]{width:130px;height:130px;line-height:130px;border-radius:50%;background-color:#c5cae9;color:#3f51b5;padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}.profile-icon[_ngcontent-%COMP%]{margin:10px;width:50px;height:50px;line-height:50px;border-radius:50%;background-color:#c5cae9;color:#3f51b5;-webkit-box-sizing:border-box;box-sizing:border-box}a[_ngcontent-%COMP%]:hover{color:#999}.color-white[_ngcontent-%COMP%]{color:#fff}.btn[_ngcontent-%COMP%]{display:inline-block;height:25px}.pad-left[_ngcontent-%COMP%]{padding-left:15px}"]
                ],
                data: {}
            });

        function qo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 3, "div", [
                ["class", "uk-text-center uk-padding uk-margin"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(2, 0, null, null, 0, "div", [
                ["uk-spinner", "ratio: 3"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n"]))], null, null)
        }

        function Wo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "lex-btn-views", [
                ["class", "btn uk-margin-small-left"]
            ], null, null, null, C, _)), i.U(1, 114688, null, 0, b, [], { viewCount: [0, "viewCount"] }, null)], function(t, e) { t(e, 1, 0, e.component.content.me_totalSessionsCount) }, null)
        }

        function Qo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "lex-btn-duration", [
                ["class", "btn uk-margin-small-left"]
            ], null, null, null, I, T)), i.U(1, 114688, null, 0, x, [], { contentDuration: [0, "contentDuration"] }, null)], function(t, e) { t(e, 1, 0, e.component.content.duration) }, null)
        }

        function Yo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "lex-btn-goal", [], null, null, null, Bt, At)), i.U(1, 245760, null, 0, Ot, [St, xt, Mt], { cid: [0, "cid"], entityTitle: [1, "entityTitle"] }, null)], function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.content.identifier, n.content.name)
            }, null)
        }

        function Ko(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 19, "div", [
                ["class", "uk-width-1-1 uk-flex uk-flex-middle uk-margin-small-top"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(2, 0, null, null, 1, "lex-btn-bookmark", [
                ["class", "btn"]
            ], null, null, null, Qt, Gt)), i.U(3, 114688, null, 0, zt, [Ht], { cid: [0, "cid"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, Yo)), i.U(6, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(8, 0, null, null, 1, "lex-btn-download", [
                ["class", "btn"]
            ], [
                [8, "hidden", 0]
            ], null, null, Jt, Kt)), i.U(9, 114688, null, 0, Yt, [St], { cid: [0, "cid"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(11, 0, null, null, 1, "lex-btn-cohorts", [
                ["class", "btn"]
            ], null, null, null, ie, ee)), i.U(12, 114688, null, 0, te, [St, Mt], { cid: [0, "cid"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(14, 0, null, null, 1, "lex-btn-like", [
                ["class", "btn"]
            ], null, null, null, ce, le)), i.U(15, 114688, null, 0, re, [oe, St], { cid: [0, "cid"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(17, 0, null, null, 1, "lex-btn-share", [
                ["class", "btn"]
            ], null, null, null, no, to)), i.U(18, 245760, null, 0, Ji, [xt, St], { cid: [0, "cid"], ctitle: [1, "ctitle"] }, null), (t()(), i._15(-1, null, ["\n        "]))], function(t, e) {
                var n = e.component;
                t(e, 3, 0, n.content.identifier), t(e, 6, 0, "Collection" !== n.content.contentType && "Resource" !== n.content.contentType), t(e, 9, 0, n.content.identifier), t(e, 12, 0, n.content.identifier), t(e, 15, 0, n.content.identifier), t(e, 18, 0, n.content.identifier, n.content.name)
            }, function(t, e) {
                var n = e.component;
                t(e, 8, 0, "Learning Path" === n.content.contentType || "Assessment" == n.content.resourceType)
            })
        }

        function Xo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 64, "div", [], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(2, 0, null, null, 38, "div", [
                ["class", " uk-flex uk-flex-middle uk-cover-container"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(4, 0, null, null, 0, "img", [
                ["alt", ""],
                ["class", "backgroundImg"],
                ["src", "./assets/others/banner_course.png"],
                ["uk-cover", ""]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(6, 0, null, null, 33, "div", [
                ["class", "uk-width-1-1 uk-margin-remove-left"],
                ["uk-grid", ""]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(8, 0, null, null, 6, "div", [
                ["class", "uk-width-1-4 uk-text-center uk-visible@s uk-flex uk-flex-center uk-flex-middle"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(10, 0, null, null, 3, "h3", [
                ["class", "course-icon uk-text-truncate"]
            ], null, null, null, null, null)), (t()(), i._15(11, null, ["", ""])), i._10(12, 2), i._10(13, 1), (t()(), i._15(-1, null, ["\n      "])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(16, 0, null, null, 22, "div", [
                ["class", "uk-width-3-4@s uk-width-1-1"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(18, 0, null, null, 1, "h2", [
                ["class", "course-title"]
            ], null, null, null, null, null)), (t()(), i._15(19, null, ["", ""])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(21, 0, null, null, 13, "div", [
                ["class", "uk-width-1-1"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(23, 0, null, null, 1, "button", [
                ["class", "color-white uk-button uk-button-small uk-button-primary"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.startCourse() && i), i }, null, null)), (t()(), i._15(-1, null, ["Start Learning"])), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.V(26, 0, null, null, 7, "span", [
                ["class", "uk-text-nowrap"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n            "])), (t()(), i.Q(16777216, null, null, 1, null, Wo)), i.U(29, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n            "])), (t()(), i.Q(16777216, null, null, 1, null, Qo)), i.U(32, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.Q(16777216, null, null, 1, null, Ko)), i.U(37, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n      "])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i._15(-1, null, ["\n  "])), (t()(), i._15(-1, null, ["\n  "])), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(43, 0, null, null, 20, "div", [
                ["class", "tab-container uk-container"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(45, 0, null, null, 17, "ul", [
                ["uk-tab", ""]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(47, 0, null, null, 6, "li", [
                ["class", "tab-item"]
            ], null, null, null, null, null)), i.U(48, 278528, null, 0, Z, [i.n, i.o, i.h, i.w], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i._9(49, { "uk-active": 0 }), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(51, 0, null, null, 1, "a", [], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== (t.component.currentTab = "about") && i), i }, null, null)), (t()(), i._15(52, null, ["About ", ""])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(55, 0, null, null, 6, "li", [
                ["class", "tab-item"]
            ], null, null, null, null, null)), i.U(56, 278528, null, 0, Z, [i.n, i.o, i.h, i.w], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i._9(57, { "uk-active": 0 }), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(59, 0, null, null, 1, "a", [], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== (t.component.currentTab = "toc") && i), i }, null, null)), (t()(), i._15(-1, null, ["TOC"])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i._15(-1, null, ["\n  "])), (t()(), i._15(-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 29, 0, n.content.me_totalSessionsCount > 10), t(e, 32, 0, n.content.duration), t(e, 37, 0, n.content), t(e, 48, 0, "tab-item", t(e, 49, 0, "about" === n.currentTab)), t(e, 56, 0, "tab-item", t(e, 57, 0, "toc" === n.currentTab))
            }, function(t, e) {
                var n = e.component;
                t(e, 11, 0, i._16(e, 11, 0, t(e, 13, 0, i._6(e.parent, 0), i._16(e, 11, 0, t(e, 12, 0, i._6(e.parent, 1), null == n.content ? null : n.content.name, 4))))), t(e, 19, 0, null == n.content ? null : n.content.name), t(e, 52, 0, "Learning Path" === n.content.contentType ? "Program" : "Collection" === n.content.contentType ? "Learning Module" : n.content.contentType)
            })
        }

        function Jo(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 4, "div", [
                ["class", "uk-card uk-card-default uk-margin-top uk-padding-small"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(2, 0, null, null, 1, "p", [
                ["class", "uk-margin text-size uk-text-meta"]
            ], null, null, null, null, null)), (t()(), i._15(3, null, [" ", " "])), (t()(), i._15(-1, null, ["\n      "]))], null, function(t, e) { t(e, 3, 0, e.component.content.description) })
        }

        function tr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 7, "div", [
                ["class", "uk-card uk-card-default uk-margin-top uk-padding-small"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(2, 0, null, null, 1, "p", [
                ["class", "title uk-margin"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, [" Learning Objective "])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(5, 0, null, null, 1, "p", [
                ["class", "uk-margin text-size uk-text-meta"]
            ], null, null, null, null, null)), (t()(), i._15(6, null, [" ", " "])), (t()(), i._15(-1, null, ["\n      "]))], null, function(t, e) { t(e, 6, 0, e.component.content.learningObjective) })
        }

        function er(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "li", [
                ["class", "uk-margin-small-bottom"]
            ], null, null, null, null, null)), (t()(), i._15(1, null, ["", " ", " "]))], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.progStruc.collection, n.progStruc.collection > 1 ? "learning modules" : "learning module")
            })
        }

        function nr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "li", [
                ["class", "uk-margin-small-bottom"]
            ], null, null, null, null, null)), (t()(), i._15(1, null, ["", " ", " "]))], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.progStruc.quiz, n.progStruc.quiz > 1 ? "quizzes" : "quiz")
            })
        }

        function ir(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "li", [
                ["class", "uk-margin-small-bottom"]
            ], null, null, null, null, null)), (t()(), i._15(1, null, ["", " ", ""]))], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.progStruc.docs, n.progStruc.docs > 1 ? "documents" : "document")
            })
        }

        function or(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "li", [
                ["class", "uk-margin-small-bottom"]
            ], null, null, null, null, null)), (t()(), i._15(1, null, ["", " ", ""]))], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.progStruc.video, n.progStruc.video > 1 ? "videos" : "video")
            })
        }

        function rr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "li", [
                ["class", "uk-margin-small-bottom"]
            ], null, null, null, null, null)), (t()(), i._15(1, null, ["", " ", ""]))], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.progStruc.youtube, n.progStruc.youtube > 1 ? "youtube videos" : "youtube video")
            })
        }

        function lr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "li", [
                ["class", "uk-margin-small-bottom"]
            ], null, null, null, null, null)), (t()(), i._15(1, null, ["", " ", ""]))], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, n.progStruc.misc, n.progStruc.misc > 1 ? "other resources" : "other resource")
            })
        }

        function sr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 2, "p", [], null, null, null, null, null)), (t()(), i._15(1, null, ["", " estimated learning time"])), i._10(2, 2)], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, i._16(e, 1, 0, t(e, 2, 0, i._6(e.parent.parent, 2), n.content.duration, "hours")))
            })
        }

        function ar(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "li", [
                ["class", "text-size uk-text-meta uk-margin-top"]
            ], null, null, null, null, null)), (t()(), i._15(1, null, [" ", " "]))], null, function(t, e) { t(e, 1, 0, e.context.$implicit.name) })
        }

        function ur(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 7, "div", [
                ["class", "uk-card uk-card-default uk-margin-top uk-padding-small"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(2, 0, null, null, 4, "ul", [
                ["class", "title uk-list uk-list-bullet uk-margin"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, [" Skills\n          "])), (t()(), i.Q(16777216, null, null, 1, null, ar)), i.U(5, 802816, null, 0, W, [i.E, i.B, i.n], { ngForOf: [0, "ngForOf"] }, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i._15(-1, null, ["\n      "]))], function(t, e) {
                var n = e.component;
                t(e, 5, 0, null == n.content ? null : n.content.skills)
            }, null)
        }

        function cr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 3, "h3", [
                ["class", "profile-icon uk-text-truncate"]
            ], null, null, null, null, null)), (t()(), i._15(1, null, ["", ""])), i._10(2, 2), i._10(3, 1)], null, function(t, e) { t(e, 1, 0, i._16(e, 1, 0, t(e, 3, 0, i._6(e.parent.parent.parent.parent.parent.parent, 0), i._16(e, 1, 0, t(e, 2, 0, i._6(e.parent.parent.parent.parent.parent.parent, 1), e.parent.parent.context.$implicit.name, 2))))) })
        }

        function dr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 4, "div", [
                ["class", "uk-width-1-6 uk-visible@s uk-text-center uk-padding-remove"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n                "])), (t()(), i.Q(16777216, null, null, 1, null, cr)), i.U(3, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n              "]))], function(t, e) { t(e, 3, 0, e.parent.context.$implicit.name) }, null)
        }

        function hr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 4, "div", [
                ["class", "uk-width-1-6 uk-visible@s uk-padding-remove"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n                "])), (t()(), i.V(2, 0, null, null, 1, "lex-user-profile", [], null, [
                [null, "profileError"]
            ], function(t, e, n) { var i = !0; return "profileError" === e && (i = !1 !== t.component.noProfileImage(t.parent.context.$implicit.email) && i), i }, ro, oo)), i.U(3, 114688, null, 0, io, [], { email: [0, "email"] }, { profileError: "profileError" }), (t()(), i._15(-1, null, ["\n              "]))], function(t, e) { t(e, 3, 0, e.parent.context.$implicit.email) }, null)
        }

        function pr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 21, "li", [
                ["class", "uk-text-meta"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n            "])), (t()(), i.V(2, 0, null, null, 18, "div", [
                ["class", "uk-width-1-1 uk-flex uk-flex-middle uk-margin-remove-left"],
                ["uk-grid", ""]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n              "])), (t()(), i.Q(16777216, null, null, 1, null, dr)), i.U(5, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n              "])), (t()(), i.Q(16777216, null, null, 1, null, hr)), i.U(8, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n              "])), (t()(), i.V(10, 0, null, null, 9, "div", [
                ["class", "uk-width-5-6@s uk-width-1-1 pad-left"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n                "])), (t()(), i.V(12, 0, null, null, 1, "div", [], null, null, null, null, null)), (t()(), i._15(13, null, ["", ""])), (t()(), i._15(-1, null, ["\n                "])), (t()(), i.V(15, 0, null, null, 3, "div", [], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n                  "])), (t()(), i.V(17, 0, null, null, 0, "a", [
                ["uk-icon", "icon: mail"]
            ], [
                [8, "href", 4]
            ], null, null, null, null)), (t()(), i._15(-1, null, ["\n                "])), (t()(), i._15(-1, null, ["\n              "])), (t()(), i._15(-1, null, ["\n            "])), (t()(), i._15(-1, null, ["\n          "]))], function(t, e) {
                var n = e.component;
                t(e, 5, 0, n.profileImageUnavailableHash[e.context.$implicit.email]), t(e, 8, 0, !n.profileImageUnavailableHash[e.context.$implicit.email])
            }, function(t, e) { t(e, 13, 0, e.context.$implicit.name), t(e, 17, 0, i.Y(1, "mailto:", e.context.$implicit.email, "")) })
        }

        function fr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 4, "ul", [
                ["class", "uk-list uk-list-divider"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, pr)), i.U(3, 802816, null, 0, W, [i.E, i.B, i.n], { ngForOf: [0, "ngForOf"] }, null), (t()(), i._15(-1, null, ["\n        "]))], function(t, e) { t(e, 3, 0, e.component.content.creatorDetails) }, null)
        }

        function gr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 3, "h3", [
                ["class", "profile-icon uk-text-truncate"]
            ], null, null, null, null, null)), (t()(), i._15(1, null, ["", ""])), i._10(2, 2), i._10(3, 1)], null, function(t, e) { t(e, 1, 0, i._16(e, 1, 0, t(e, 3, 0, i._6(e.parent.parent.parent.parent.parent.parent, 0), i._16(e, 1, 0, t(e, 2, 0, i._6(e.parent.parent.parent.parent.parent.parent, 1), e.parent.parent.context.$implicit.givenName, 2))))) })
        }

        function mr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 3, "h3", [
                ["class", "profile-icon uk-text-truncate"]
            ], null, null, null, null, null)), (t()(), i._15(1, null, ["", ""])), i._10(2, 2), i._10(3, 1)], null, function(t, e) { t(e, 1, 0, i._16(e, 1, 0, t(e, 3, 0, i._6(e.parent.parent.parent.parent.parent.parent, 0), i._16(e, 1, 0, t(e, 2, 0, i._6(e.parent.parent.parent.parent.parent.parent, 1), e.parent.parent.context.$implicit.surname, 2))))) })
        }

        function vr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "h3", [
                ["class", "profile-icon uk-text-truncate"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["NA"]))], null, null)
        }

        function yr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 10, "div", [
                ["class", "uk-width-1-6 uk-visible@s uk-text-center uk-padding-remove"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n                "])), (t()(), i.Q(16777216, null, null, 1, null, gr)), i.U(3, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n                "])), (t()(), i.Q(16777216, null, null, 1, null, mr)), i.U(6, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n                "])), (t()(), i.Q(16777216, null, null, 1, null, vr)), i.U(9, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n              "]))], function(t, e) { t(e, 3, 0, e.parent.context.$implicit.givenName), t(e, 6, 0, !e.parent.context.$implicit.givenName && e.parent.context.$implicit.surname), t(e, 9, 0, !e.parent.context.$implicit.givenName && !e.parent.context.$implicit.surname) }, null)
        }

        function wr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 4, "div", [
                ["class", "uk-width-1-6 uk-visible@s uk-padding-remove"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n                "])), (t()(), i.V(2, 0, null, null, 1, "lex-user-profile", [], null, [
                [null, "profileError"]
            ], function(t, e, n) { var i = !0; return "profileError" === e && (i = !1 !== t.component.noProfileImage(t.parent.context.$implicit.onPremisesUserPrincipalName) && i), i }, ro, oo)), i.U(3, 114688, null, 0, io, [], { email: [0, "email"] }, { profileError: "profileError" }), (t()(), i._15(-1, null, ["\n              "]))], function(t, e) { t(e, 3, 0, e.parent.context.$implicit.onPremisesUserPrincipalName) }, null)
        }

        function br(t) { return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i._15(1, null, ["", ""]))], null, function(t, e) { t(e, 1, 0, e.parent.parent.context.$implicit.givenName) }) }

        function _r(t) { return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i._15(1, null, ["", ""]))], null, function(t, e) { t(e, 1, 0, e.parent.parent.context.$implicit.surname) }) }

        function Cr(t) { return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i._15(1, null, ["", ""]))], null, function(t, e) { t(e, 1, 0, e.parent.parent.context.$implicit.jobTitle + ",") }) }

        function kr(t) { return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i._15(1, null, ["", ""]))], null, function(t, e) { t(e, 1, 0, e.parent.parent.context.$implicit.department + ",") }) }

        function xr(t) { return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (t()(), i._15(1, null, ["", ""]))], null, function(t, e) { t(e, 1, 0, e.parent.parent.context.$implicit.city) }) }

        function Tr(t) { return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "lex-btn-send-mail", [], null, null, null, po, ao)), i.U(1, 245760, null, 0, so, [xt, St], { recipient: [0, "recipient"], content: [1, "content"] }, null)], function(t, e) { t(e, 1, 0, e.parent.parent.context.$implicit.mailMeta, e.component.content) }, null) }

        function Ir(t) { return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "lex-btn-call", [], null, null, null, _o, go)), i.U(1, 245760, null, 0, fo, [xt, St], { callData: [0, "callData"] }, null)], function(t, e) { t(e, 1, 0, e.parent.parent.context.$implicit.callMeta) }, null) }

        function Er(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 31, "div", [
                ["class", "uk-width-5-6@s uk-width-1-1 pad-left"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n                "])), (t()(), i.V(2, 0, null, null, 7, "div", [], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n                  "])), (t()(), i.Q(16777216, null, null, 1, null, br)), i.U(5, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n                  "])), (t()(), i.Q(16777216, null, null, 1, null, _r)), i.U(8, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n                "])), (t()(), i._15(-1, null, ["\n                "])), (t()(), i.V(11, 0, null, null, 10, "div", [], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n                  "])), (t()(), i.Q(16777216, null, null, 1, null, Cr)), i.U(14, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n                  "])), (t()(), i.Q(16777216, null, null, 1, null, kr)), i.U(17, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n                  "])), (t()(), i.Q(16777216, null, null, 1, null, xr)), i.U(20, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n                "])), (t()(), i._15(-1, null, ["\n                "])), (t()(), i.V(23, 0, null, null, 7, "div", [], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n                  "])), (t()(), i.Q(16777216, null, null, 1, null, Tr)), i.U(26, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n                  "])), (t()(), i.Q(16777216, null, null, 1, null, Ir)), i.U(29, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n                "])), (t()(), i._15(-1, null, ["\n              "]))], function(t, e) { t(e, 5, 0, e.parent.context.$implicit.givenName), t(e, 8, 0, e.parent.context.$implicit.surname), t(e, 14, 0, e.parent.context.$implicit.jobTitle), t(e, 17, 0, e.parent.context.$implicit.department), t(e, 20, 0, e.parent.context.$implicit.city), t(e, 26, 0, e.parent.context.$implicit.mailMeta), t(e, 29, 0, e.parent.context.$implicit.callMeta) }, null)
        }

        function Sr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 13, "li", [
                ["class", "uk-text-meta"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n            "])), (t()(), i.V(2, 0, null, null, 10, "div", [
                ["class", "uk-width-1-1 uk-flex uk-flex-middle uk-margin-remove-left"],
                ["uk-grid", ""]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n              "])), (t()(), i.Q(16777216, null, null, 1, null, yr)), i.U(5, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n              "])), (t()(), i.Q(16777216, null, null, 1, null, wr)), i.U(8, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n              "])), (t()(), i.Q(16777216, null, null, 1, null, Er)), i.U(11, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n            "])), (t()(), i._15(-1, null, ["\n          "]))], function(t, e) {
                var n = e.component;
                t(e, 5, 0, n.profileImageUnavailableHash[e.context.$implicit.onPremisesUserPrincipalName]), t(e, 8, 0, !n.profileImageUnavailableHash[e.context.$implicit.onPremisesUserPrincipalName]), t(e, 11, 0, e.context.$implicit)
            }, null)
        }

        function Mr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 4, "ul", [
                ["class", "uk-list uk-list-divider"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, Sr)), i.U(3, 802816, null, 0, W, [i.E, i.B, i.n], { ngForOf: [0, "ngForOf"] }, null), (t()(), i._15(-1, null, ["\n        "]))], function(t, e) { t(e, 3, 0, e.component.authors) }, null)
        }

        function Or(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 10, "div", [
                ["class", "uk-card uk-card-default uk-margin-top uk-padding-small"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(2, 0, null, null, 1, "p", [
                ["class", "uk-margin fwlighter"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["Authors"])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.Q(16777216, null, null, 1, null, fr)), i.U(6, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.Q(16777216, null, null, 1, null, Mr)), i.U(9, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n      "]))], function(t, e) {
                var n = e.component;
                t(e, 6, 0, 0 === n.authors.length), t(e, 9, 0, n.authors.length > 0)
            }, null)
        }

        function Ar(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 52, "div", [
                ["class", "uk-container"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(2, 0, null, null, 49, "div", [
                ["uk-grid", ""]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(4, 0, null, null, 40, "div", [
                ["class", "uk-width-1-1 uk-width-2-3@m"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.Q(16777216, null, null, 1, null, Jo)), i.U(7, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.Q(16777216, null, null, 1, null, tr)), i.U(10, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(12, 0, null, null, 28, "div", [
                ["class", "uk-card uk-card-default uk-margin-top uk-padding-small"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(14, 0, null, null, 1, "p", [
                ["class", "title"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["Program Structure"])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(17, 0, null, null, 22, "ul", [
                ["class", "text-size uk-text-meta"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, er)), i.U(20, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, nr)), i.U(23, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, ir)), i.U(26, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, or)), i.U(29, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, rr)), i.U(32, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, lr)), i.U(35, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, sr)), i.U(38, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.Q(16777216, null, null, 1, null, ur)), i.U(43, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n    "])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(46, 0, null, null, 4, "div", [
                ["class", "uk-width-1-1 uk-width-1-3@m"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.Q(16777216, null, null, 1, null, Or)), i.U(49, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n    "])), (t()(), i._15(-1, null, ["\n  "])), (t()(), i._15(-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 7, 0, null == n.content ? null : n.content.description), t(e, 10, 0, null == n.content ? null : n.content.learningObjective), t(e, 20, 0, 0 !== n.progStruc.collection), t(e, 23, 0, 0 !== n.progStruc.quiz), t(e, 26, 0, 0 !== n.progStruc.docs), t(e, 29, 0, 0 !== n.progStruc.video), t(e, 32, 0, 0 !== n.progStruc.youtube), t(e, 35, 0, 0 !== n.progStruc.misc), t(e, 38, 0, n.content.duration), t(e, 43, 0, (null == n.content ? null : null == n.content.skills ? null : n.content.skills.length) > 0), t(e, 49, 0, (null == n.content ? null : null == n.content.creatorDetails ? null : n.content.creatorDetails.length) > 0)
            }, null)
        }

        function Pr(t) { return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "lex-recursive-content-card", [], null, null, null, Ho, Uo)), i.U(1, 638976, null, 0, ko, [Co], { content: [0, "content"], courseId: [1, "courseId"] }, null)], function(t, e) { t(e, 1, 0, e.context.$implicit, e.component.content.identifier) }, null) }

        function Lr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 4, "div", [
                ["class", "uk-container uk-margin-top uk-margin-large-bottom"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.Q(16777216, null, null, 1, null, Pr)), i.U(3, 802816, null, 0, W, [i.E, i.B, i.n], { ngForOf: [0, "ngForOf"] }, null), (t()(), i._15(-1, null, ["\n"]))], function(t, e) { t(e, 3, 0, e.component.content.children) }, null)
        }

        function Vr(t) {
            return i._17(0, [i._8(0, _t, []), i._8(0, zo, []), i._8(0, k, []), (t()(), i.Q(16777216, null, null, 1, null, qo)), i.U(4, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n\n"])), (t()(), i._15(-1, null, ["\n"])), (t()(), i.Q(16777216, null, null, 1, null, Xo)), i.U(8, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n\n"])), (t()(), i._15(-1, null, ["\n"])), (t()(), i.Q(16777216, null, null, 1, null, Ar)), i.U(12, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n\n"])), (t()(), i._15(-1, null, ["\n"])), (t()(), i.Q(16777216, null, null, 1, null, Lr)), i.U(16, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 4, 0, !n.content), t(e, 8, 0, n.content), t(e, 12, 0, n.content && "about" === n.currentTab), t(e, 16, 0, n.content && "toc" === n.currentTab)
            }, null)
        }
        var Dr = function() {
                function t(t, e, n, i, o) { this.navRequest = t, this.cardSvc = e, this.contentToCard = n, this.sanitizer = i, this.utility = o, this.cardDisabled = !1 }
                return t.prototype.ngOnInit = function() {}, t.prototype.ngOnChanges = function() { this.content && (this.cardContent = this.contentToCard.transform(this.content, void 0), this.bgImage = this.sanitizer.bypassSecurityTrustStyle('url("' + this.cardContent.image + '")')), this.meta && (this.meta.status = this.meta.status.toLowerCase(), "downloading" !== this.meta.status && "initiated" !== this.meta.status || "resource" !== this.cardContent.contentType.toLowerCase() || (this.cardDisabled = !0)) }, t.prototype.navigate = function(t, e) {
                    if ("downloaded" === this.meta.status || "resource" !== this.cardContent.contentType.toLowerCase()) this.navRequest.navigateTo(t, e);
                    else {
                        var n = "";
                        switch (this.meta.status) {
                            case "cancelled":
                                n = "Unable to open. Download was cancelled!";
                                break;
                            case "failed":
                                n = "Unable to open. Download was failed!";
                                break;
                            default:
                                n = "Downloading in progress. Please hold on!"
                        }
                        this.utility.notify(n)
                    }
                }, t.prototype.action = function(t) { this.cardSvc.downloadCardAction(t, this.content.identifier) }, t
            }(),
            Nr = i.T({
                encapsulation: 0,
                styles: [
                    [".imageSection[_ngcontent-%COMP%]{background-color:#999;background-repeat:no-repeat;background-size:cover;background-position:center;position:relative;width:20%;min-width:50px;max-width:212px}.colorCode0[_ngcontent-%COMP%]{background-color:#e65d5d}.colorCode1[_ngcontent-%COMP%]{background-color:#428e9e}.colorCode2[_ngcontent-%COMP%]{background-color:#508b61}.colorCode3[_ngcontent-%COMP%]{background-color:#b89a5f}.colorCode4[_ngcontent-%COMP%]{background-color:#af578b}.colorCode5[_ngcontent-%COMP%]{background-color:#7896d2}.colorCode6[_ngcontent-%COMP%]{background-color:#24adb9}.download-title[_ngcontent-%COMP%]{color:rgba(33,33,33,.75)}.uk-card-title[_ngcontent-%COMP%]{font-size:1.3rem}.caps[_ngcontent-%COMP%]{text-transform:capitalize}.loader-color[_ngcontent-%COMP%]{color:#3f51b5}.uk-progress[_ngcontent-%COMP%]{height:5px;position:absolute;left:0;right:0;bottom:0}.nowrap[_ngcontent-%COMP%]{white-space:nowrap}.status-border[_ngcontent-%COMP%]{-webkit-filter:grayscale(0);filter:grayscale(0);border-right:3px solid;border-top-right-radius:3px;border-bottom-right-radius:3px}.status-progress-border[_ngcontent-%COMP%]{border-right-color:orange}.status-failed-border[_ngcontent-%COMP%]{border-right-color:brown}.status-success-border[_ngcontent-%COMP%]{border-right-color:green}.action-retry[_ngcontent-%COMP%]{color:brown}.action-retry[_ngcontent-%COMP%]:active{color:#3f51b5}.greyed-op[_ngcontent-%COMP%]{opacity:.9;background-color:rgba(0,0,0,.09);-webkit-transform:translate(1px,1px);transform:translate(1px,1px)}.greyed-op[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.09);-webkit-transform:translate(3px,1px);transform:translate(3px,1px)}.grey-image[_ngcontent-%COMP%]{-webkit-filter:grayscale(.9) contrast(.7) opacity(.9);filter:grayscale(.9) contrast(.7) opacity(.9)}"]
                ],
                data: {}
            });

        function Br(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "span", [
                ["class", "uk-position-center loader-color"],
                ["uk-spinner", "ratio: 1.5"]
            ], null, null, null, null, null))], null, null)
        }

        function jr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "span", [
                ["class", "cur-pointer"],
                ["title", "Cancel Download"],
                ["uk-icon", "icon: close"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.action("cancel") && i), i }, null, null))], null, null)
        }

        function Rr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "span", [
                ["class", "cur-pointer"],
                ["title", "Retry Download"],
                ["uk-icon", "icon: refresh"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.action("retry") && i), i }, null, null))], null, null)
        }

        function Ur(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 0, "span", [
                ["class", "cur-pointer uk-margin-small-right"],
                ["uk-icon", "icon: trash"]
            ], [
                [8, "title", 0]
            ], [
                [null, "click"]
            ], function(t, e, n) { var i = !0; return "click" === e && (i = !1 !== t.component.action("remove") && i), i }, null, null))], null, function(t, e) { t(e, 0, 0, e.component.actionItem) })
        }

        function $r(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 2, "span", [], null, null, null, null, null)), (t()(), i._15(1, null, ["Expires on ", " "])), i._10(2, 1)], null, function(t, e) {
                var n = e.component;
                t(e, 1, 0, i._16(e, 1, 0, t(e, 2, 0, i._6(e.parent, 0), n.meta.expires)))
            })
        }

        function Fr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "div", [
                ["class", "uk-text-meta uk-text-capitalize"]
            ], null, null, null, null, null)), (t()(), i._15(1, null, ["", ""]))], null, function(t, e) { t(e, 1, 0, e.component.meta.status) })
        }

        function Hr(t) {
            return i._17(0, [i._8(0, yt, [i.p]), (t()(), i.V(1, 0, null, null, 54, "div", [
                ["class", "uk-card uk-card-default uk-card-hover uk-flex uk-margin-remove"],
                ["uk-grid", ""]
            ], null, null, null, null, null)), i.U(2, 278528, null, 0, Z, [i.n, i.o, i.h, i.w], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i._9(3, { "greyed-op": 0, "status-border": 1, "status-progress-border": 2, "status-success-border": 3, "status-failed-border": 4 }), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.V(5, 0, null, null, 9, "div", [
                ["class", "imageSection uk-flex-stretch"]
            ], [
                [8, "title", 0],
                [4, "background-image", null]
            ], [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0,
                    o = t.component;
                return "click" === e && (i = !1 !== o.navigate(o.cardContent.url) && i), i
            }, null, null)), i.U(6, 278528, null, 0, Z, [i.n, i.o, i.h, i.w], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i._9(7, { "cur-pointer": 0, "grey-image": 1 }), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(9, 0, null, null, 1, "lex-card-icon", [
                ["class", "uk-position-center"]
            ], [
                [8, "hidden", 0]
            ], null, null, Eo, Io)), i.U(10, 114688, null, 0, To, [], { mime: [0, "mime"], contentType: [1, "contentType"], hasBackGround: [2, "hasBackGround"] }, null), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.Q(16777216, null, null, 1, null, Br)), i.U(13, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n  "])), (t()(), i._15(-1, null, ["\n\n  "])), (t()(), i.V(16, 0, null, null, 38, "div", [
                ["class", "uk-width-expand uk-padding-small uk-padding-remove-top uk-position-relative"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n    "])), (t()(), i.V(18, 0, null, null, 6, "h4", [
                ["class", "uk-card-title uk-margin-remove uk-text-truncate"]
            ], null, [
                [null, "click"]
            ], function(t, e, n) {
                var i = !0,
                    o = t.component;
                return "click" === e && (i = !1 !== o.navigate(o.cardContent.url) && i), i
            }, null, null)), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(20, 0, null, null, 3, "span", [
                ["class", "uk-text-truncate download-title uk-margin-small-right"]
            ], null, null, null, null, null)), i.U(21, 278528, null, 0, Z, [i.n, i.o, i.h, i.w], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i._9(22, { "cur-pointer": 0 }), (t()(), i._15(23, null, ["", ""])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i._15(-1, null, ["\n\n    "])), (t()(), i.V(26, 0, null, null, 24, "div", [
                ["class", "uk-text-meta"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n      "])), (t()(), i.V(28, 0, null, null, 21, "div", [
                ["class", "uk-flex uk-flex-between uk-flex-row-reverse"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(30, 0, null, null, 10, "div", [
                ["class", "uk-flex"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, jr)), i.U(33, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, Rr)), i.U(36, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, Ur)), i.U(39, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i.V(42, 0, null, null, 4, "div", [], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n          "])), (t()(), i.Q(16777216, null, null, 1, null, $r)), i.U(45, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n        "])), (t()(), i._15(-1, null, ["\n\n        "])), (t()(), i._15(-1, null, ["\n        "])), (t()(), i._15(-1, null, ["\n      "])), (t()(), i._15(-1, null, ["\n    "])), (t()(), i._15(-1, null, ["\n\n    "])), (t()(), i.Q(16777216, null, null, 1, null, Fr)), i.U(53, 16384, null, 0, Y, [i.E, i.B], { ngIf: [0, "ngIf"] }, null), (t()(), i._15(-1, null, ["\n  "])), (t()(), i._15(-1, null, ["\n"]))], function(t, e) {
                var n = e.component;
                t(e, 2, 0, "uk-card uk-card-default uk-card-hover uk-flex uk-margin-remove", t(e, 3, 0, n.cardDisabled, !0, "downloading" === n.meta.status || "initiated" === n.meta.status, "downloaded" === n.meta.status, "failed" === n.meta.status || "cancelled" === n.meta.status)), t(e, 6, 0, "imageSection uk-flex-stretch", t(e, 7, 0, !n.cardDisabled, n.cardDisabled)), t(e, 10, 0, n.cardContent.mime, n.cardContent.contentType, !0), t(e, 13, 0, "downloading" === n.meta.status), t(e, 21, 0, "uk-text-truncate download-title uk-margin-small-right", t(e, 22, 0, !n.cardDisabled)), t(e, 33, 0, "downloading" === n.meta.status || "initiated" === n.meta.status), t(e, 36, 0, "cancelled" === n.meta.status || "failed" === n.meta.status), t(e, 39, 0, "cancelled" === n.meta.status || "failed" === n.meta.status || "downloaded" === n.meta.status), t(e, 45, 0, n.meta.expires), t(e, 53, 0, null == n.meta ? null : n.meta.status)
            }, function(t, e) {
                var n = e.component;
                t(e, 5, 0, n.cardContent.title, n.bgImage), t(e, 9, 0, "Resource" !== n.cardContent.contentType), t(e, 23, 0, n.cardContent.title)
            })
        }
        var zr = function() {
                function t() {}
                return t.prototype.ngOnInit = function() {}, t
            }(),
            Gr = i.T({
                encapsulation: 0,
                styles: [
                    [""]
                ],
                data: {}
            });

        function Zr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 2, "lex-download-card", [
                ["class", "uk-margin-small-top uk-display-block"]
            ], null, null, null, Hr, Nr)), i._11(512, null, xo, xo, []), i.U(2, 638976, null, 0, Dr, [Mt, Co, xo, Gn, xt], { content: [0, "content"], meta: [1, "meta"] }, null)], function(t, e) { t(e, 2, 0, e.context.$implicit.content, e.context.$implicit.meta) }, null)
        }

        function qr(t) {
            return i._17(0, [(t()(), i.V(0, 0, null, null, 4, "div", [
                ["class", "uk-container uk-margin-medium-bottom"]
            ], null, null, null, null, null)), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.Q(16777216, null, null, 1, null, Zr)), i.U(3, 802816, null, 0, W, [i.E, i.B, i.n], { ngForOf: [0, "ngForOf"] }, null), (t()(), i._15(-1, null, ["\n"])), (t()(), i._15(-1, null, ["\n"]))], function(t, e) { t(e, 3, 0, e.component.downloads) }, null)
        }
        var Wr = i.T({
            encapsulation: 0,
            styles: [
                [""]
            ],
            data: {}
        });

        function Qr(t) { return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "lex-toc", [], null, null, null, Vr, Zo)), i.U(1, 638976, null, 0, Go, [Co, Mt, Gn], { content: [0, "content"] }, null)], function(t, e) { t(e, 1, 0, e.component.content) }, null) }

        function Yr(t) { return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "toc-downloads", [], null, null, null, qr, Gr)), i.U(1, 114688, null, 0, zr, [], { downloads: [0, "downloads"] }, null)], function(t, e) { t(e, 1, 0, e.component.content) }, null) }

        function Kr(t) { return i._17(0, [(t()(), i.V(0, 0, null, null, 8, "div", [], null, null, null, null, null)), i.U(1, 16384, null, 0, J, [], { ngSwitch: [0, "ngSwitch"] }, null), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.Q(16777216, null, null, 1, null, Qr)), i.U(4, 278528, null, 0, tt, [i.E, i.B, J], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (t()(), i._15(-1, null, ["\n  "])), (t()(), i.Q(16777216, null, null, 1, null, Yr)), i.U(7, 278528, null, 0, tt, [i.E, i.B, J], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (t()(), i._15(-1, null, ["\n"])), (t()(), i._15(-1, null, ["\n"]))], function(t, e) { t(e, 1, 0, e.component.type), t(e, 4, 0, "toc"), t(e, 7, 0, "downloads") }, null) }
        var Xr = i.R("app-root", w, function(t) { return i._17(0, [(t()(), i.V(0, 0, null, null, 1, "app-root", [], null, null, null, Kr, Wr)), i.U(1, 245760, null, 0, w, [y], null, null)], function(t, e) { t(e, 1, 0) }, null) }, {}, {}, []),
            Jr = function(t) {
                function e(e) { var n = t.call(this) || this; return n.globalSvc = e, n }
                return Object(s.b)(e, t), e.prototype.getConfig = function() { return { bookmark: !1, download: !1, goals: !1, like: !1, share: !1, feedback: !1, cohorts: !1, call: !1, mailer: !1 } }, e
            }(St),
            tl = function(t) {
                function e(e) { var n = t.call(this) || this; return n.globalInterface = e, n }
                return Object(s.b)(e, t), e.prototype.navigateTo = function(t, e) { this.globalInterface.sendDataAppToClient("NAVIGATION_DATA_OUTGOING", { url: t, params: e }) }, e
            }(Mt),
            el = function(t) {
                function e(e) { var n = t.call(this) || this; return n.globalInterface = e, n }
                return Object(s.b)(e, t), e.prototype.downloadCardAction = function(t, e) {
                    var n = "";
                    switch (t) {
                        case "retry":
                            n = "DOWNLOAD_RETRY";
                            break;
                        case "remove":
                            n = "DOWNLOAD_REMOVE";
                            break;
                        case "cancel":
                            n = "DOWNLOAD_CANCEL"
                    }
                    console.log("eventName >", n), this.globalInterface.sendDataAppToClient(n, { id: e })
                }, e
            }(Co),
            nl = function() {},
            il = function() {},
            ol = function() {},
            rl = function() {},
            ll = i.S(l, [w], function(t) {
                return i._3([i._4(512, i.g, i.O, [
                    [8, [Xr]],
                    [3, i.g], i.q
                ]), i._4(5120, i.p, i._12, [
                    [3, i.p]
                ]), i._4(4608, z, G, [i.p, [2, H]]), i._4(4608, i.f, i.f, []), i._4(5120, i.a, i.X, []), i._4(5120, i.n, i._5, []), i._4(5120, i.o, i._7, []), i._4(4608, Gn, Zn, [kt]), i._4(6144, i.z, null, [Gn]), i._4(4608, yn, wn, []), i._4(5120, ze, function(t, e, n, i, o) { return [new mn(t, e), new kn(n), new bn(i, o)] }, [kt, i.s, kt, kt, yn]), i._4(4608, Ge, Ge, [ze, i.s]), i._4(135680, We, We, [kt]), i._4(4608, en, en, [Ge, We]), i._4(6144, i.x, null, [en]), i._4(6144, qe, null, [We]), i._4(4608, i.C, i.C, [i.s]), i._4(4608, Ne, Ne, [kt]), i._4(4608, Ue, Ue, [kt]), i._4(4608, bi, bi, []), i._4(4608, Wi, Wi, []), i._4(4608, xt, xt, []), i._4(4608, y, y, []), i._4(4608, St, Jr, [y]), i._4(4608, Ht, Ht, [St]), i._4(4608, oe, oe, [St]), i._4(4608, Mt, tl, [y]), i._4(4608, Co, el, [y]), i._4(512, Ct, Ct, []), i._4(1024, i.i, ei, []), i._4(1024, i.b, function(t) { return [(e = t, $e("probe", He), $e("coreTokens", Object(s.a)({}, Fe, (e || []).reduce(function(t, e) { return t[e.name] = e.token, t }, {}))), function() { return He })]; var e }, [
                    [2, i.r]
                ]), i._4(512, i.c, i.c, [
                    [2, i.b]
                ]), i._4(131584, i.e, i.e, [i.s, i.P, i.m, i.i, i.g, i.c]), i._4(512, i.d, i.d, [i.e]), i._4(512, ni, ni, [
                    [3, ni]
                ]), i._4(512, Yi, Yi, []), i._4(512, Ki, Ki, []), i._4(512, Xi, Xi, []), i._4(512, nl, nl, []), i._4(512, il, il, []), i._4(512, ol, ol, []), i._4(512, rl, rl, []), i._4(512, l, l, [])])
            });
        Object(i.I)(), ti().bootstrapModuleFactory(ll).catch(function(t) { return console.log(t) })
    },
    TToO: function(t, e, n) {
        "use strict";
        e.b = function(t, e) {
            function n() { this.constructor = t }
            i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }, n.d(e, "a", function() { return o });
        var i = Object.setPrototypeOf || { __proto__: [] }
        instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) }, o = Object.assign || function(t) {
            for (var e, n = 1, i = arguments.length; n < i; n++)
                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }
    },
    Veqx: function(t, e, n) {
        "use strict";
        var i = n("TToO"),
            o = n("YaPU"),
            r = function(t) {
                function e(e, n) { t.call(this), this.value = e, this.scheduler = n, this._isScalar = !0, n && (this._isScalar = !1) }
                return Object(i.b)(e, t), e.create = function(t, n) { return new e(t, n) }, e.dispatch = function(t) {
                    var e = t.value,
                        n = t.subscriber;
                    t.done ? n.complete() : (n.next(e), n.closed || (t.done = !0, this.schedule(t)))
                }, e.prototype._subscribe = function(t) {
                    var n = this.value,
                        i = this.scheduler;
                    if (i) return i.schedule(e.dispatch, 0, { done: !1, value: n, subscriber: t });
                    t.next(n), t.closed || t.complete()
                }, e
            }(o.a),
            l = n("+3/4"),
            s = n("1Q68");
        n.d(e, "a", function() { return a });
        var a = function(t) {
            function e(e, n) { t.call(this), this.array = e, this.scheduler = n, n || 1 !== e.length || (this._isScalar = !0, this.value = e[0]) }
            return Object(i.b)(e, t), e.create = function(t, n) { return new e(t, n) }, e.of = function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n - 0] = arguments[n];
                var i = t[t.length - 1];
                Object(s.a)(i) ? t.pop() : i = null;
                var o = t.length;
                return o > 1 ? new e(t, i) : 1 === o ? new r(t[0], i) : new l.a(i)
            }, e.dispatch = function(t) {
                var e = t.array,
                    n = t.index,
                    i = t.subscriber;
                n >= t.count ? i.complete() : (i.next(e[n]), i.closed || (t.index = n + 1, this.schedule(t)))
            }, e.prototype._subscribe = function(t) {
                var n = this.array,
                    i = n.length,
                    o = this.scheduler;
                if (o) return o.schedule(e.dispatch, 0, { array: n, index: 0, count: i, subscriber: t });
                for (var r = 0; r < i && !t.closed; r++) t.next(n[r]);
                t.complete()
            }, e
        }(o.a)
    },
    VwZZ: function(t, e, n) {
        "use strict";
        var i = n("BX3T"),
            o = n("dgOU"),
            r = n("/iUD"),
            l = n("GK6M"),
            s = n("fKB6"),
            a = n("TToO"),
            u = function(t) {
                function e(e) {
                    t.call(this), this.errors = e;
                    var n = Error.call(this, e ? e.length + " errors occurred during unsubscription:\n  " + e.map(function(t, e) { return e + 1 + ") " + t.toString() }).join("\n  ") : "");
                    this.name = n.name = "UnsubscriptionError", this.stack = n.stack, this.message = n.message
                }
                return Object(a.b)(e, t), e
            }(Error);
        n.d(e, "a", function() { return c });
        var c = function() {
            function t(t) { this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t) }
            var e;
            return t.prototype.unsubscribe = function() {
                var t, e = !1;
                if (!this.closed) {
                    var n = this._parent,
                        a = this._parents,
                        c = this._unsubscribe,
                        h = this._subscriptions;
                    this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                    for (var p = -1, f = a ? a.length : 0; n;) n.remove(this), n = ++p < f && a[p] || null;
                    if (Object(r.a)(c) && Object(l.a)(c).call(this) === s.a && (e = !0, t = t || (s.a.e instanceof u ? d(s.a.e.errors) : [s.a.e])), Object(i.a)(h))
                        for (p = -1, f = h.length; ++p < f;) {
                            var g = h[p];
                            if (Object(o.a)(g) && Object(l.a)(g.unsubscribe).call(g) === s.a) {
                                e = !0, t = t || [];
                                var m = s.a.e;
                                m instanceof u ? t = t.concat(d(m.errors)) : t.push(m)
                            }
                        }
                    if (e) throw new u(t)
                }
            }, t.prototype.add = function(e) {
                if (!e || e === t.EMPTY) return t.EMPTY;
                if (e === this) return this;
                var n = e;
                switch (typeof e) {
                    case "function":
                        n = new t(e);
                    case "object":
                        if (n.closed || "function" != typeof n.unsubscribe) return n;
                        if (this.closed) return n.unsubscribe(), n;
                        if ("function" != typeof n._addParent) {
                            var i = n;
                            (n = new t)._subscriptions = [i]
                        }
                        break;
                    default:
                        throw new Error("unrecognized teardown " + e + " added to Subscription.")
                }
                return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), n
            }, t.prototype.remove = function(t) { var e = this._subscriptions; if (e) { var n = e.indexOf(t); - 1 !== n && e.splice(n, 1) } }, t.prototype._addParent = function(t) {
                var e = this._parent,
                    n = this._parents;
                e && e !== t ? n ? -1 === n.indexOf(t) && n.push(t) : this._parents = [t] : this._parent = t
            }, t.EMPTY = ((e = new t).closed = !0, e), t
        }();

        function d(t) { return t.reduce(function(t, e) { return t.concat(e instanceof u ? e.errors : e) }, []) }
    },
    WT6e: function(t, e, n) {
        "use strict";
        (function(t) {
            n.d(e, "e", function() { return Kt }), n.d(e, "I", function() { return zt }), n.d(e, "L", function() { return Gt }), n.d(e, "H", function() { return qt }), n.d(e, "r", function() { return Zt }), n.d(e, "a", function() { return ot }), n.d(e, "v", function() { return st }), n.d(e, "u", function() { return at }), n.d(e, "b", function() { return nt }), n.d(e, "c", function() { return it }), n.d(e, "K", function() { return de }), n.d(e, "C", function() { return Nt }), n.d(e, "N", function() { return jt }), n.d(e, "p", function() { return Ve }), n.d(e, "d", function() { return je }), n.d(e, "j", function() { return St }), n.d(e, "i", function() { return J }), n.d(e, "z", function() { return Ue }), n.d(e, "A", function() { return Re }), n.d(e, "F", function() { return h }), n.d(e, "D", function() { return p }), n.d(e, "J", function() { return S }), n.d(e, "m", function() { return L }), n.d(e, "l", function() { return u }), n.d(e, "k", function() { return g }), n.d(e, "t", function() { return m }), n.d(e, "s", function() { return Mt }), n.d(e, "w", function() { return ee }), n.d(e, "x", function() { return Jt }), n.d(e, "y", function() { return te }), n.d(e, "f", function() { return ht }), n.d(e, "g", function() { return bt }), n.d(e, "h", function() { return ne }), n.d(e, "q", function() { return kt }), n.d(e, "B", function() { return oe }), n.d(e, "E", function() { return re }), n.d(e, "n", function() { return Se }), n.d(e, "o", function() { return Me }), n.d(e, "G", function() { return fe }), n.d(e, "M", function() { return Le }), n.d(e, "Z", function() { return me }), n.d(e, "P", function() { return ct }), n.d(e, "O", function() { return _t }), n.d(e, "W", function() { return _ }), n.d(e, "_2", function() { return I }), n.d(e, "_14", function() { return E }), n.d(e, "_0", function() { return et }), n.d(e, "_1", function() { return tt }), n.d(e, "Q", function() { return Vn }), n.d(e, "R", function() { return Jn }), n.d(e, "S", function() { return or }), n.d(e, "T", function() { return rn }), n.d(e, "U", function() { return Ci }), n.d(e, "V", function() { return Dn }), n.d(e, "Y", function() { return Pn }), n.d(e, "_3", function() { return zn }), n.d(e, "_4", function() { return Hn }), n.d(e, "_6", function() { return ci }), n.d(e, "_8", function() { return ki }), n.d(e, "_11", function() { return xi }), n.d(e, "_9", function() { return Zi }), n.d(e, "_10", function() { return Gi }), n.d(e, "_13", function() { return Ri }), n.d(e, "_15", function() { return Wi }), n.d(e, "_16", function() { return en }), n.d(e, "_17", function() { return Ki }), n.d(e, "_5", function() { return De }), n.d(e, "_7", function() { return Ne }), n.d(e, "_12", function() { return Be }), n.d(e, "X", function() { return rt });
            var i = n("TToO"),
                o = n("YaPU"),
                r = n("/nXB"),
                l = n("Rf9G"),
                s = n("g5jc"),
                a = n("VwZZ"),
                u = function() {
                    function t(t) { this._desc = t, this.ngMetadataName = "InjectionToken" }
                    return t.prototype.toString = function() { return "InjectionToken " + this._desc }, t
                }(),
                c = "__paramaters__";

            function d(t, e, n) {
                var i = function(t) { return function() { for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]; if (t) { var i = t.apply(void 0, e); for (var o in i) this[o] = i[o] } } }(e);

                function o() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    if (this instanceof o) return i.apply(this, t), this;
                    var n, r = new((n = o).bind.apply(n, [void 0].concat(t)));
                    return l.annotation = r, l;

                    function l(t, e, n) { for (var i = t.hasOwnProperty(c) ? t[c] : Object.defineProperty(t, c, { value: [] })[c]; i.length <= n;) i.push(null); return (i[n] = i[n] || []).push(r), t }
                }
                return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = t, o.annotationCls = o, o
            }
            var h = function() { var t = { Emulated: 0, Native: 1, None: 2 }; return t[t.Emulated] = "Emulated", t[t.Native] = "Native", t[t.None] = "None", t }(),
                p = function(t) { this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".") },
                f = new p("5.2.7"),
                g = d("Inject", function(t) { return { token: t } }),
                m = d("Optional"),
                v = d("Self"),
                y = d("SkipSelf"),
                w = "undefined" != typeof window && window,
                b = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                _ = w || "undefined" != typeof t && t || b,
                C = Promise.resolve(0),
                k = null;

            function x() {
                if (!k) {
                    var t = _.Symbol;
                    if (t && t.iterator) k = t.iterator;
                    else
                        for (var e = Object.getOwnPropertyNames(Map.prototype), n = 0; n < e.length; ++n) { var i = e[n]; "entries" !== i && "size" !== i && Map.prototype[i] === Map.prototype.entries && (k = i) }
                }
                return k
            }

            function T(t) { "undefined" == typeof Zone ? C.then(function() { t && t.apply(null, null) }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t) }

            function I(t, e) { return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e) }

            function E(t) { if ("string" == typeof t) return t; if (t instanceof Array) return "[" + t.map(E).join(", ") + "]"; if (null == t) return "" + t; if (t.overriddenName) return "" + t.overriddenName; if (t.name) return "" + t.name; var e = t.toString(); if (null == e) return "" + e; var n = e.indexOf("\n"); return -1 === n ? e : e.substring(0, n) }

            function S(t) { return t.__forward_ref__ = S, t.toString = function() { return E(this()) }, t }

            function M(t) { return "function" == typeof t && t.hasOwnProperty("__forward_ref__") && t.__forward_ref__ === S ? t() : t }
            var O = "__source",
                A = new Object,
                P = function() {
                    function t() {}
                    return t.prototype.get = function(t, e) { if (void 0 === e && (e = A), e === A) throw new Error("NullInjectorError: No provider for " + E(t) + "!"); return e }, t
                }(),
                L = function() {
                    function t() {}
                    return t.create = function(t, e) { return Array.isArray(t) ? new H(t, e) : new H(t.providers, t.parent, t.name || null) }, t.THROW_IF_NOT_FOUND = A, t.NULL = new P, t
                }(),
                V = function(t) { return t },
                D = [],
                N = V,
                B = function() { return Array.prototype.slice.call(arguments) },
                j = {},
                R = function(t) {
                    for (var e in t)
                        if (t[e] === j) return e;
                    throw Error("!prop")
                }({ provide: String, useValue: j }),
                U = L.NULL,
                $ = /\n/gm,
                F = "\u0275",
                H = function() {
                    function t(t, e, n) {
                        void 0 === e && (e = U), void 0 === n && (n = null), this.parent = e, this.source = n;
                        var i = this._records = new Map;
                        i.set(L, { token: L, fn: V, deps: D, value: this, useNew: !1 }),
                            function t(e, n) {
                                if (n)
                                    if ((n = M(n)) instanceof Array)
                                        for (var i = 0; i < n.length; i++) t(e, n[i]);
                                    else {
                                        if ("function" == typeof n) throw Z("Function/Class not supported", n);
                                        if (!n || "object" != typeof n || !n.provide) throw Z("Unexpected provider", n);
                                        var o = M(n.provide),
                                            r = function(t) {
                                                var e = function(t) {
                                                        var e = D,
                                                            n = t.deps;
                                                        if (n && n.length) {
                                                            e = [];
                                                            for (var i = 0; i < n.length; i++) {
                                                                var o = 6;
                                                                if ((a = M(n[i])) instanceof Array)
                                                                    for (var r = 0, l = a; r < l.length; r++) {
                                                                        var s = l[r];
                                                                        s instanceof m || s == m ? o |= 1 : s instanceof y || s == y ? o &= -3 : s instanceof v || s == v ? o &= -5 : a = s instanceof g ? s.token : M(s)
                                                                    }
                                                                e.push({ token: a, options: o })
                                                            }
                                                        } else if (t.useExisting) {
                                                            var a;
                                                            e = [{ token: a = M(t.useExisting), options: 6 }]
                                                        } else if (!(n || R in t)) throw Z("'deps' required", t);
                                                        return e
                                                    }(t),
                                                    n = V,
                                                    i = D,
                                                    o = !1,
                                                    r = M(t.provide);
                                                if (R in t) i = t.useValue;
                                                else if (t.useFactory) n = t.useFactory;
                                                else if (t.useExisting);
                                                else if (t.useClass) o = !0, n = M(t.useClass);
                                                else {
                                                    if ("function" != typeof r) throw Z("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", t);
                                                    o = !0, n = r
                                                }
                                                return { deps: e, fn: n, useNew: o, value: i }
                                            }(n);
                                        if (!0 === n.multi) {
                                            var l = e.get(o);
                                            if (l) { if (l.fn !== B) throw z(o) } else e.set(o, l = { token: n.provide, deps: [], useNew: !1, fn: B, value: D });
                                            l.deps.push({ token: o = n, options: 6 })
                                        }
                                        var s = e.get(o);
                                        if (s && s.fn == B) throw z(o);
                                        e.set(o, r)
                                    }
                            }(i, t)
                    }
                    return t.prototype.get = function(t, e) {
                        var n = this._records.get(t);
                        try {
                            return function t(e, n, i, o, r) {
                                try {
                                    return function(e, n, i, o, r) {
                                        var l, s;
                                        if (n) {
                                            if ((l = n.value) == N) throw Error(F + "Circular dependency");
                                            if (l === D) {
                                                n.value = N;
                                                var a = n.useNew,
                                                    u = n.fn,
                                                    c = n.deps,
                                                    d = D;
                                                if (c.length) {
                                                    d = [];
                                                    for (var h = 0; h < c.length; h++) {
                                                        var p = c[h],
                                                            f = p.options,
                                                            g = 2 & f ? i.get(p.token) : void 0;
                                                        d.push(t(p.token, g, i, g || 4 & f ? o : U, 1 & f ? null : L.THROW_IF_NOT_FOUND))
                                                    }
                                                }
                                                n.value = l = a ? new((s = u).bind.apply(s, [void 0].concat(d))) : u.apply(void 0, d)
                                            }
                                        } else l = o.get(e, r);
                                        return l
                                    }(e, n, i, o, r)
                                } catch (t) { throw t instanceof Error || (t = new Error(t)), (t.ngTempTokenPath = t.ngTempTokenPath || []).unshift(e), n && n.value == N && (n.value = D), t }
                            }(t, n, this._records, this.parent, e)
                        } catch (e) { var i = e.ngTempTokenPath; throw t[O] && i.unshift(t[O]), e.message = G("\n" + e.message, i, this.source), e.ngTokenPath = i, e.ngTempTokenPath = null, e }
                    }, t.prototype.toString = function() { var t = []; return this._records.forEach(function(e, n) { return t.push(E(n)) }), "StaticInjector[" + t.join(", ") + "]" }, t
                }();

            function z(t) { return Z("Cannot mix multi providers and regular providers", t) }

            function G(t, e, n) {
                void 0 === n && (n = null), t = t && "\n" === t.charAt(0) && t.charAt(1) == F ? t.substr(2) : t;
                var i = E(e);
                if (e instanceof Array) i = e.map(E).join(" -> ");
                else if ("object" == typeof e) {
                    var o = [];
                    for (var r in e)
                        if (e.hasOwnProperty(r)) {
                            var l = e[r];
                            o.push(r + ":" + ("string" == typeof l ? JSON.stringify(l) : E(l)))
                        }
                    i = "{" + o.join(", ") + "}"
                }
                return "StaticInjectorError" + (n ? "(" + n + ")" : "") + "[" + i + "]: " + t.replace($, "\n  ")
            }

            function Z(t, e) { return new Error(G(t, e)) }
            var q = "ngDebugContext",
                W = "ngOriginalError",
                Q = "ngErrorLogger";

            function Y(t) { return t[q] }

            function K(t) { return t[W] }

            function X(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                t.error.apply(t, e)
            }
            var J = function() {
                function t() { this._console = console }
                return t.prototype.handleError = function(t) {
                    var e = this._findOriginalError(t),
                        n = this._findContext(t),
                        i = function(t) { return t[Q] || X }(t);
                    i(this._console, "ERROR", t), e && i(this._console, "ORIGINAL ERROR", e), n && i(this._console, "ERROR CONTEXT", n)
                }, t.prototype._findContext = function(t) { return t ? Y(t) ? Y(t) : this._findContext(K(t)) : null }, t.prototype._findOriginalError = function(t) { for (var e = K(t); e && K(e);) e = K(e); return e }, t
            }();

            function tt(t) { return !!t && "function" == typeof t.then }

            function et(t) { return !!t && "function" == typeof t.subscribe }
            Function;
            var nt = new u("Application Initializer"),
                it = function() {
                    function t(t) {
                        var e = this;
                        this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise(function(t, n) { e.resolve = t, e.reject = n })
                    }
                    return t.prototype.runInitializers = function() {
                        var t = this;
                        if (!this.initialized) {
                            var e = [],
                                n = function() { t.done = !0, t.resolve() };
                            if (this.appInits)
                                for (var i = 0; i < this.appInits.length; i++) {
                                    var o = this.appInits[i]();
                                    tt(o) && e.push(o)
                                }
                            Promise.all(e).then(function() { n() }).catch(function(e) { t.reject(e) }), 0 === e.length && n(), this.initialized = !0
                        }
                    }, t
                }(),
                ot = new u("AppId");

            function rt() { return "" + lt() + lt() + lt() }

            function lt() { return String.fromCharCode(97 + Math.floor(25 * Math.random())) }
            var st = new u("Platform Initializer"),
                at = new u("Platform ID"),
                ut = new u("appBootstrapListener"),
                ct = function() {
                    function t() {}
                    return t.prototype.log = function(t) { console.log(t) }, t.prototype.warn = function(t) { console.warn(t) }, t.ctorParameters = function() { return [] }, t
                }();

            function dt() { throw new Error("Runtime compiler is not loaded") }
            var ht = function() {
                    function t() {}
                    return t.prototype.compileModuleSync = function(t) { throw dt() }, t.prototype.compileModuleAsync = function(t) { throw dt() }, t.prototype.compileModuleAndAllComponentsSync = function(t) { throw dt() }, t.prototype.compileModuleAndAllComponentsAsync = function(t) { throw dt() }, t.prototype.clearCache = function() {}, t.prototype.clearCacheFor = function(t) {}, t
                }(),
                pt = function() {},
                ft = function() {};

            function gt(t) { var e = Error("No component factory found for " + E(t) + ". Did you add it to @NgModule.entryComponents?"); return e[yt] = t, e }
            var mt, vt, yt = "ngComponent",
                wt = function() {
                    function t() {}
                    return t.prototype.resolveComponentFactory = function(t) { throw gt(t) }, t
                }(),
                bt = function() {
                    function t() {}
                    return t.NULL = new wt, t
                }(),
                _t = function() {
                    function t(t, e, n) {
                        this._parent = e, this._ngModule = n, this._factories = new Map;
                        for (var i = 0; i < t.length; i++) {
                            var o = t[i];
                            this._factories.set(o.componentType, o)
                        }
                    }
                    return t.prototype.resolveComponentFactory = function(t) { var e = this._factories.get(t); if (!e && this._parent && (e = this._parent.resolveComponentFactory(t)), !e) throw gt(t); return new Ct(e, this._ngModule) }, t
                }(),
                Ct = function(t) {
                    function e(e, n) { var i = t.call(this) || this; return i.factory = e, i.ngModule = n, i.selector = e.selector, i.componentType = e.componentType, i.ngContentSelectors = e.ngContentSelectors, i.inputs = e.inputs, i.outputs = e.outputs, i }
                    return Object(i.b)(e, t), e.prototype.create = function(t, e, n, i) { return this.factory.create(t, e, n, i || this.ngModule) }, e
                }(ft),
                kt = function() {},
                xt = function() { var t = _.wtf; return !(!t || !(mt = t.trace) || (vt = mt.events, 0)) }();

            function Tt(t, e) { return null }
            var It = xt ? function(t, e) { return void 0 === e && (e = null), vt.createScope(t, e) } : function(t, e) { return Tt },
                Et = xt ? function(t, e) { return mt.leaveScope(t, e), e } : function(t, e) { return e },
                St = function(t) {
                    function e(e) { void 0 === e && (e = !1); var n = t.call(this) || this; return n.__isAsync = e, n }
                    return Object(i.b)(e, t), e.prototype.emit = function(e) { t.prototype.next.call(this, e) }, e.prototype.subscribe = function(e, n, i) {
                        var o, r = function(t) { return null },
                            l = function() { return null };
                        e && "object" == typeof e ? (o = this.__isAsync ? function(t) { setTimeout(function() { return e.next(t) }) } : function(t) { e.next(t) }, e.error && (r = this.__isAsync ? function(t) { setTimeout(function() { return e.error(t) }) } : function(t) { e.error(t) }), e.complete && (l = this.__isAsync ? function() { setTimeout(function() { return e.complete() }) } : function() { e.complete() })) : (o = this.__isAsync ? function(t) { setTimeout(function() { return e(t) }) } : function(t) { e(t) }, n && (r = this.__isAsync ? function(t) { setTimeout(function() { return n(t) }) } : function(t) { n(t) }), i && (l = this.__isAsync ? function() { setTimeout(function() { return i() }) } : function() { i() }));
                        var s = t.prototype.subscribe.call(this, o, r, l);
                        return e instanceof a.a && e.add(s), s
                    }, e
                }(s.a),
                Mt = function() {
                    function t(t) {
                        var e, n = t.enableLongStackTrace,
                            i = void 0 !== n && n;
                        if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new St(!1), this.onMicrotaskEmpty = new St(!1), this.onStable = new St(!1), this.onError = new St(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                        Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), i && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), (e = this)._inner = e._inner.fork({ name: "angular", properties: { isAngularZone: !0 }, onInvokeTask: function(t, n, i, o, r, l) { try { return Lt(e), t.invokeTask(i, o, r, l) } finally { Vt(e) } }, onInvoke: function(t, n, i, o, r, l, s) { try { return Lt(e), t.invoke(i, o, r, l, s) } finally { Vt(e) } }, onHasTask: function(t, n, i, o) { t.hasTask(i, o), n === i && ("microTask" == o.change ? (e.hasPendingMicrotasks = o.microTask, Pt(e)) : "macroTask" == o.change && (e.hasPendingMacrotasks = o.macroTask)) }, onHandleError: function(t, n, i, o) { return t.handleError(i, o), e.runOutsideAngular(function() { return e.onError.emit(o) }), !1 } })
                    }
                    return t.isInAngularZone = function() { return !0 === Zone.current.get("isAngularZone") }, t.assertInAngularZone = function() { if (!t.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!") }, t.assertNotInAngularZone = function() { if (t.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!") }, t.prototype.run = function(t, e, n) { return this._inner.run(t, e, n) }, t.prototype.runTask = function(t, e, n, i) {
                        var o = this._inner,
                            r = o.scheduleEventTask("NgZoneEvent: " + i, t, At, Ot, Ot);
                        try { return o.runTask(r, e, n) } finally { o.cancelTask(r) }
                    }, t.prototype.runGuarded = function(t, e, n) { return this._inner.runGuarded(t, e, n) }, t.prototype.runOutsideAngular = function(t) { return this._outer.run(t) }, t
                }();

            function Ot() {}
            var At = {};

            function Pt(t) { if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try { t._nesting++, t.onMicrotaskEmpty.emit(null) } finally { if (t._nesting--, !t.hasPendingMicrotasks) try { t.runOutsideAngular(function() { return t.onStable.emit(null) }) } finally { t.isStable = !0 } } }

            function Lt(t) { t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null)) }

            function Vt(t) { t._nesting--, Pt(t) }
            var Dt = function() {
                    function t() { this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new St, this.onMicrotaskEmpty = new St, this.onStable = new St, this.onError = new St }
                    return t.prototype.run = function(t) { return t() }, t.prototype.runGuarded = function(t) { return t() }, t.prototype.runOutsideAngular = function(t) { return t() }, t.prototype.runTask = function(t) { return t() }, t
                }(),
                Nt = function() {
                    function t(t) { this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this._watchAngularEvents() }
                    return t.prototype._watchAngularEvents = function() {
                        var t = this;
                        this._ngZone.onUnstable.subscribe({ next: function() { t._didWork = !0, t._isZoneStable = !1 } }), this._ngZone.runOutsideAngular(function() { t._ngZone.onStable.subscribe({ next: function() { Mt.assertNotInAngularZone(), T(function() { t._isZoneStable = !0, t._runCallbacksIfReady() }) } }) })
                    }, t.prototype.increasePendingRequestCount = function() { return this._pendingCount += 1, this._didWork = !0, this._pendingCount }, t.prototype.decreasePendingRequestCount = function() { if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero"); return this._runCallbacksIfReady(), this._pendingCount }, t.prototype.isStable = function() { return this._isZoneStable && 0 == this._pendingCount && !this._ngZone.hasPendingMacrotasks }, t.prototype._runCallbacksIfReady = function() {
                        var t = this;
                        this.isStable() ? T(function() {
                            for (; 0 !== t._callbacks.length;) t._callbacks.pop()(t._didWork);
                            t._didWork = !1
                        }) : this._didWork = !0
                    }, t.prototype.whenStable = function(t) { this._callbacks.push(t), this._runCallbacksIfReady() }, t.prototype.getPendingRequestCount = function() { return this._pendingCount }, t.prototype.findProviders = function(t, e, n) { return [] }, t
                }(),
                Bt = function() {
                    function t() { this._applications = new Map, Ut.addToWindow(this) }
                    return t.prototype.registerApplication = function(t, e) { this._applications.set(t, e) }, t.prototype.unregisterApplication = function(t) { this._applications.delete(t) }, t.prototype.unregisterAllApplications = function() { this._applications.clear() }, t.prototype.getTestability = function(t) { return this._applications.get(t) || null }, t.prototype.getAllTestabilities = function() { return Array.from(this._applications.values()) }, t.prototype.getAllRootElements = function() { return Array.from(this._applications.keys()) }, t.prototype.findTestabilityInTree = function(t, e) { return void 0 === e && (e = !0), Ut.findTestabilityInTree(this, t, e) }, t.ctorParameters = function() { return [] }, t
                }();

            function jt(t) { Ut = t }
            var Rt, Ut = new(function() {
                    function t() {}
                    return t.prototype.addToWindow = function(t) {}, t.prototype.findTestabilityInTree = function(t, e, n) { return null }, t
                }()),
                $t = !0,
                Ft = !1,
                Ht = new u("AllowMultipleToken");

            function zt() {
                if (Ft) throw new Error("Cannot enable prod mode after platform setup.");
                $t = !1
            }

            function Gt() { return Ft = !0, $t }
            var Zt = function(t, e) { this.name = t, this.token = e };

            function qt(t, e, n) {
                void 0 === n && (n = []);
                var i = "Platform: " + e,
                    o = new u(i);
                return function(e) {
                    void 0 === e && (e = []);
                    var r = Wt();
                    if (!r || r.injector.get(Ht, !1))
                        if (t) t(n.concat(e).concat({ provide: o, useValue: !0 }));
                        else {
                            var l = n.concat(e).concat({ provide: o, useValue: !0 });
                            ! function(t) {
                                if (Rt && !Rt.destroyed && !Rt.injector.get(Ht, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                Rt = t.get(Qt);
                                var e = t.get(st, null);
                                e && e.forEach(function(t) { return t() })
                            }(L.create({ providers: l, name: i }))
                        }
                    return function(t) { var e = Wt(); if (!e) throw new Error("No platform exists!"); if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first."); return e }(o)
                }
            }

            function Wt() { return Rt && !Rt.destroyed ? Rt : null }
            var Qt = function() {
                function t(t) { this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1 }
                return t.prototype.bootstrapModuleFactory = function(t, e) {
                    var n, i = this,
                        o = "noop" === (n = e ? e.ngZone : void 0) ? new Dt : ("zone.js" === n ? void 0 : n) || new Mt({ enableLongStackTrace: Gt() }),
                        r = [{ provide: Mt, useValue: o }];
                    return o.run(function() {
                        var e = L.create({ providers: r, parent: i.injector, name: t.moduleType.name }),
                            n = t.create(e),
                            l = n.injector.get(J, null);
                        if (!l) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                        return n.onDestroy(function() { return Xt(i._modules, n) }), o.runOutsideAngular(function() { return o.onError.subscribe({ next: function(t) { l.handleError(t) } }) }),
                            function(t, e, o) { try { var r = ((l = n.injector.get(it)).runInitializers(), l.donePromise.then(function() { return i._moduleDoBootstrap(n), n })); return tt(r) ? r.catch(function(n) { throw e.runOutsideAngular(function() { return t.handleError(n) }), n }) : r } catch (n) { throw e.runOutsideAngular(function() { return t.handleError(n) }), n } var l }(l, o)
                    })
                }, t.prototype.bootstrapModule = function(t, e) {
                    var n = this;
                    void 0 === e && (e = []);
                    var i = this.injector.get(pt),
                        o = Yt({}, e);
                    return i.createCompiler([o]).compileModuleAsync(t).then(function(t) { return n.bootstrapModuleFactory(t, o) })
                }, t.prototype._moduleDoBootstrap = function(t) {
                    var e = t.injector.get(Kt);
                    if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(function(t) { return e.bootstrap(t) });
                    else {
                        if (!t.instance.ngDoBootstrap) throw new Error("The module " + E(t.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');
                        t.instance.ngDoBootstrap(e)
                    }
                    this._modules.push(t)
                }, t.prototype.onDestroy = function(t) { this._destroyListeners.push(t) }, Object.defineProperty(t.prototype, "injector", { get: function() { return this._injector }, enumerable: !0, configurable: !0 }), t.prototype.destroy = function() {
                    if (this._destroyed) throw new Error("The platform has already been destroyed!");
                    this._modules.slice().forEach(function(t) { return t.destroy() }), this._destroyListeners.forEach(function(t) { return t() }), this._destroyed = !0
                }, Object.defineProperty(t.prototype, "destroyed", { get: function() { return this._destroyed }, enumerable: !0, configurable: !0 }), t
            }();

            function Yt(t, e) { return Array.isArray(e) ? e.reduce(Yt, t) : Object(i.a)({}, t, e) }
            var Kt = function() {
                function t(t, e, n, i, s, a) {
                    var u = this;
                    this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = i, this._componentFactoryResolver = s, this._initStatus = a, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = Gt(), this._zone.onMicrotaskEmpty.subscribe({ next: function() { u._zone.run(function() { u.tick() }) } });
                    var c = new o.a(function(t) { u._stable = u._zone.isStable && !u._zone.hasPendingMacrotasks && !u._zone.hasPendingMicrotasks, u._zone.runOutsideAngular(function() { t.next(u._stable), t.complete() }) }),
                        d = new o.a(function(t) {
                            var e;
                            u._zone.runOutsideAngular(function() { e = u._zone.onStable.subscribe(function() { Mt.assertNotInAngularZone(), T(function() { u._stable || u._zone.hasPendingMacrotasks || u._zone.hasPendingMicrotasks || (u._stable = !0, t.next(!0)) }) }) });
                            var n = u._zone.onUnstable.subscribe(function() { Mt.assertInAngularZone(), u._stable && (u._stable = !1, u._zone.runOutsideAngular(function() { t.next(!1) })) });
                            return function() { e.unsubscribe(), n.unsubscribe() }
                        });
                    this.isStable = Object(r.a)(c, l.a.call(d))
                }
                return t.prototype.bootstrap = function(t, e) {
                    var n, i = this;
                    if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                    n = t instanceof ft ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
                    var o = n instanceof Ct ? null : this._injector.get(kt),
                        r = n.create(L.NULL, [], e || n.selector, o);
                    r.onDestroy(function() { i._unloadComponent(r) });
                    var l = r.injector.get(Nt, null);
                    return l && r.injector.get(Bt).registerApplication(r.location.nativeElement, l), this._loadComponent(r), Gt() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), r
                }, t.prototype.tick = function() { var e = this; if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively"); var n = t._tickScope(); try { this._runningTick = !0, this._views.forEach(function(t) { return t.detectChanges() }), this._enforceNoNewChanges && this._views.forEach(function(t) { return t.checkNoChanges() }) } catch (t) { this._zone.runOutsideAngular(function() { return e._exceptionHandler.handleError(t) }) } finally { this._runningTick = !1, Et(n) } }, t.prototype.attachView = function(t) {
                    var e = t;
                    this._views.push(e), e.attachToAppRef(this)
                }, t.prototype.detachView = function(t) {
                    var e = t;
                    Xt(this._views, e), e.detachFromAppRef()
                }, t.prototype._loadComponent = function(t) { this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(ut, []).concat(this._bootstrapListeners).forEach(function(e) { return e(t) }) }, t.prototype._unloadComponent = function(t) { this.detachView(t.hostView), Xt(this.components, t) }, t.prototype.ngOnDestroy = function() { this._views.slice().forEach(function(t) { return t.destroy() }) }, Object.defineProperty(t.prototype, "viewCount", { get: function() { return this._views.length }, enumerable: !0, configurable: !0 }), t._tickScope = It("ApplicationRef#tick()"), t
            }();

            function Xt(t, e) {
                var n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
            var Jt = function() {},
                te = function() { var t = { Important: 1, DashCase: 2 }; return t[t.Important] = "Important", t[t.DashCase] = "DashCase", t }(),
                ee = function() {},
                ne = function(t) { this.nativeElement = t },
                ie = function() {
                    function t() { this.dirty = !0, this._results = [], this.changes = new St, this.length = 0 }
                    return t.prototype.map = function(t) { return this._results.map(t) }, t.prototype.filter = function(t) { return this._results.filter(t) }, t.prototype.find = function(t) { return this._results.find(t) }, t.prototype.reduce = function(t, e) { return this._results.reduce(t, e) }, t.prototype.forEach = function(t) { this._results.forEach(t) }, t.prototype.some = function(t) { return this._results.some(t) }, t.prototype.toArray = function() { return this._results.slice() }, t.prototype[x()] = function() { return this._results[x()]() }, t.prototype.toString = function() { return this._results.toString() }, t.prototype.reset = function(t) { this._results = function t(e) { return e.reduce(function(e, n) { var i = Array.isArray(n) ? t(n) : n; return e.concat(i) }, []) }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0] }, t.prototype.notifyOnChanges = function() { this.changes.emit(this) }, t.prototype.setDirty = function() { this.dirty = !0 }, t.prototype.destroy = function() { this.changes.complete(), this.changes.unsubscribe() }, t
                }(),
                oe = function() {},
                re = function() {},
                le = function() {
                    function t(t, e, n) { this._debugContext = n, this.nativeNode = t, e && e instanceof se ? e.addChild(this) : this.parent = null, this.listeners = [] }
                    return Object.defineProperty(t.prototype, "injector", { get: function() { return this._debugContext.injector }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "componentInstance", { get: function() { return this._debugContext.component }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "context", { get: function() { return this._debugContext.context }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "references", { get: function() { return this._debugContext.references }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "providerTokens", { get: function() { return this._debugContext.providerTokens }, enumerable: !0, configurable: !0 }), t
                }(),
                se = function(t) {
                    function e(e, n, i) { var o = t.call(this, e, n, i) || this; return o.properties = {}, o.attributes = {}, o.classes = {}, o.styles = {}, o.childNodes = [], o.nativeElement = e, o }
                    return Object(i.b)(e, t), e.prototype.addChild = function(t) { t && (this.childNodes.push(t), t.parent = this) }, e.prototype.removeChild = function(t) { var e = this.childNodes.indexOf(t); - 1 !== e && (t.parent = null, this.childNodes.splice(e, 1)) }, e.prototype.insertChildrenAfter = function(t, e) {
                        var n, i = this,
                            o = this.childNodes.indexOf(t); - 1 !== o && ((n = this.childNodes).splice.apply(n, [o + 1, 0].concat(e)), e.forEach(function(t) { t.parent && t.parent.removeChild(t), t.parent = i }))
                    }, e.prototype.insertBefore = function(t, e) { var n = this.childNodes.indexOf(t); - 1 === n ? this.addChild(e) : (e.parent && e.parent.removeChild(e), e.parent = this, this.childNodes.splice(n, 0, e)) }, e.prototype.query = function(t) { return this.queryAll(t)[0] || null }, e.prototype.queryAll = function(t) { var e = []; return ae(this, t, e), e }, e.prototype.queryAllNodes = function(t) { var e = []; return ue(this, t, e), e }, Object.defineProperty(e.prototype, "children", { get: function() { return this.childNodes.filter(function(t) { return t instanceof e }) }, enumerable: !0, configurable: !0 }), e.prototype.triggerEventHandler = function(t, e) { this.listeners.forEach(function(n) { n.name == t && n.callback(e) }) }, e
                }(le);

            function ae(t, e, n) { t.childNodes.forEach(function(t) { t instanceof se && (e(t) && n.push(t), ae(t, e, n)) }) }

            function ue(t, e, n) { t instanceof se && t.childNodes.forEach(function(t) { e(t) && n.push(t), t instanceof se && ue(t, e, n) }) }
            var ce = new Map;

            function de(t) { return ce.get(t) || null }

            function he(t) { ce.set(t.nativeNode, t) }

            function pe(t, e) {
                var n = me(t),
                    i = me(e);
                return n && i ? function(t, e, n) {
                    for (var i = t[x()](), o = e[x()]();;) {
                        var r = i.next(),
                            l = o.next();
                        if (r.done && l.done) return !0;
                        if (r.done || l.done) return !1;
                        if (!n(r.value, l.value)) return !1
                    }
                }(t, e, pe) : !(n || !t || "object" != typeof t && "function" != typeof t || i || !e || "object" != typeof e && "function" != typeof e) || I(t, e)
            }
            var fe = function() {
                    function t(t) { this.wrapped = t }
                    return t.wrap = function(e) { return new t(e) }, t.unwrap = function(e) { return t.isWrapped(e) ? e.wrapped : e }, t.isWrapped = function(e) { return e instanceof t }, t
                }(),
                ge = function() {
                    function t(t, e, n) { this.previousValue = t, this.currentValue = e, this.firstChange = n }
                    return t.prototype.isFirstChange = function() { return this.firstChange }, t
                }();

            function me(t) { return !!ve(t) && (Array.isArray(t) || !(t instanceof Map) && x() in t) }

            function ve(t) { return null !== t && ("function" == typeof t || "object" == typeof t) }
            var ye = function() {
                    function t() {}
                    return t.prototype.supports = function(t) { return me(t) }, t.prototype.create = function(t) { return new be(t) }, t
                }(),
                we = function(t, e) { return e },
                be = function() {
                    function t(t) { this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || we }
                    return t.prototype.forEachItem = function(t) { var e; for (e = this._itHead; null !== e; e = e._next) t(e) }, t.prototype.forEachOperation = function(t) {
                        for (var e = this._itHead, n = this._removalsHead, i = 0, o = null; e || n;) {
                            var r = !n || e && e.currentIndex < xe(n, i, o) ? e : n,
                                l = xe(r, i, o),
                                s = r.currentIndex;
                            if (r === n) i--, n = n._nextRemoved;
                            else if (e = e._next, null == r.previousIndex) i++;
                            else {
                                o || (o = []);
                                var a = l - i,
                                    u = s - i;
                                if (a != u) {
                                    for (var c = 0; c < a; c++) {
                                        var d = c < o.length ? o[c] : o[c] = 0,
                                            h = d + c;
                                        u <= h && h < a && (o[c] = d + 1)
                                    }
                                    o[r.previousIndex] = u - a
                                }
                            }
                            l !== s && t(r, l, s)
                        }
                    }, t.prototype.forEachPreviousItem = function(t) { var e; for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e) }, t.prototype.forEachAddedItem = function(t) { var e; for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e) }, t.prototype.forEachMovedItem = function(t) { var e; for (e = this._movesHead; null !== e; e = e._nextMoved) t(e) }, t.prototype.forEachRemovedItem = function(t) { var e; for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e) }, t.prototype.forEachIdentityChange = function(t) { var e; for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e) }, t.prototype.diff = function(t) { if (null == t && (t = []), !me(t)) throw new Error("Error trying to diff '" + E(t) + "'. Only arrays and iterables are allowed"); return this.check(t) ? this : null }, t.prototype.onDestroy = function() {}, t.prototype.check = function(t) {
                        var e = this;
                        this._reset();
                        var n, i, o, r = this._itHead,
                            l = !1;
                        if (Array.isArray(t)) { this.length = t.length; for (var s = 0; s < this.length; s++) o = this._trackByFn(s, i = t[s]), null !== r && I(r.trackById, o) ? (l && (r = this._verifyReinsertion(r, i, o, s)), I(r.item, i) || this._addIdentityChange(r, i)) : (r = this._mismatch(r, i, o, s), l = !0), r = r._next } else n = 0,
                            function(t, e) {
                                if (Array.isArray(t))
                                    for (var n = 0; n < t.length; n++) e(t[n]);
                                else
                                    for (var i = t[x()](), o = void 0; !(o = i.next()).done;) e(o.value)
                            }(t, function(t) { o = e._trackByFn(n, t), null !== r && I(r.trackById, o) ? (l && (r = e._verifyReinsertion(r, t, o, n)), I(r.item, t) || e._addIdentityChange(r, t)) : (r = e._mismatch(r, t, o, n), l = !0), r = r._next, n++ }), this.length = n;
                        return this._truncate(r), this.collection = t, this.isDirty
                    }, Object.defineProperty(t.prototype, "isDirty", { get: function() { return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead }, enumerable: !0, configurable: !0 }), t.prototype._reset = function() {
                        if (this.isDirty) {
                            var t = void 0,
                                e = void 0;
                            for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
                            for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
                            for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
                            this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                        }
                    }, t.prototype._mismatch = function(t, e, n, i) { var o; return null === t ? o = this._itTail : (o = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, i)) ? (I(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, o, i)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (I(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, o, i)) : t = this._addAfter(new _e(e, n), o, i), t }, t.prototype._verifyReinsertion = function(t, e, n, i) { var o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null); return null !== o ? t = this._reinsertAfter(o, t._prev, i) : t.currentIndex != i && (t.currentIndex = i, this._addToMoves(t, i)), t }, t.prototype._truncate = function(t) {
                        for (; null !== t;) {
                            var e = t._next;
                            this._addToRemovals(this._unlink(t)), t = e
                        }
                        null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                    }, t.prototype._reinsertAfter = function(t, e, n) {
                        null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                        var i = t._prevRemoved,
                            o = t._nextRemoved;
                        return null === i ? this._removalsHead = o : i._nextRemoved = o, null === o ? this._removalsTail = i : o._prevRemoved = i, this._insertAfter(t, e, n), this._addToMoves(t, n), t
                    }, t.prototype._moveAfter = function(t, e, n) { return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t }, t.prototype._addAfter = function(t, e, n) { return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t }, t.prototype._insertAfter = function(t, e, n) { var i = null === e ? this._itHead : e._next; return t._next = i, t._prev = e, null === i ? this._itTail = t : i._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new ke), this._linkedRecords.put(t), t.currentIndex = n, t }, t.prototype._remove = function(t) { return this._addToRemovals(this._unlink(t)) }, t.prototype._unlink = function(t) {
                        null !== this._linkedRecords && this._linkedRecords.remove(t);
                        var e = t._prev,
                            n = t._next;
                        return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t
                    }, t.prototype._addToMoves = function(t, e) { return t.previousIndex === e ? t : (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t, t) }, t.prototype._addToRemovals = function(t) { return null === this._unlinkedRecords && (this._unlinkedRecords = new ke), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t }, t.prototype._addIdentityChange = function(t, e) { return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t }, t
                }(),
                _e = function(t, e) { this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null },
                Ce = function() {
                    function t() { this._head = null, this._tail = null }
                    return t.prototype.add = function(t) { null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t) }, t.prototype.get = function(t, e) {
                        var n;
                        for (n = this._head; null !== n; n = n._nextDup)
                            if ((null === e || e <= n.currentIndex) && I(n.trackById, t)) return n;
                        return null
                    }, t.prototype.remove = function(t) {
                        var e = t._prevDup,
                            n = t._nextDup;
                        return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
                    }, t
                }(),
                ke = function() {
                    function t() { this.map = new Map }
                    return t.prototype.put = function(t) {
                        var e = t.trackById,
                            n = this.map.get(e);
                        n || (n = new Ce, this.map.set(e, n)), n.add(t)
                    }, t.prototype.get = function(t, e) { var n = this.map.get(t); return n ? n.get(t, e) : null }, t.prototype.remove = function(t) { var e = t.trackById; return this.map.get(e).remove(t) && this.map.delete(e), t }, Object.defineProperty(t.prototype, "isEmpty", { get: function() { return 0 === this.map.size }, enumerable: !0, configurable: !0 }), t.prototype.clear = function() { this.map.clear() }, t
                }();

            function xe(t, e, n) { var i = t.previousIndex; if (null === i) return i; var o = 0; return n && i < n.length && (o = n[i]), i + e + o }
            var Te = function() {
                    function t() {}
                    return t.prototype.supports = function(t) { return t instanceof Map || ve(t) }, t.prototype.create = function() { return new Ie }, t
                }(),
                Ie = function() {
                    function t() { this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null }
                    return Object.defineProperty(t.prototype, "isDirty", { get: function() { return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead }, enumerable: !0, configurable: !0 }), t.prototype.forEachItem = function(t) { var e; for (e = this._mapHead; null !== e; e = e._next) t(e) }, t.prototype.forEachPreviousItem = function(t) { var e; for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e) }, t.prototype.forEachChangedItem = function(t) { var e; for (e = this._changesHead; null !== e; e = e._nextChanged) t(e) }, t.prototype.forEachAddedItem = function(t) { var e; for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e) }, t.prototype.forEachRemovedItem = function(t) { var e; for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e) }, t.prototype.diff = function(t) { if (t) { if (!(t instanceof Map || ve(t))) throw new Error("Error trying to diff '" + E(t) + "'. Only maps and objects are allowed") } else t = new Map; return this.check(t) ? this : null }, t.prototype.onDestroy = function() {}, t.prototype.check = function(t) {
                        var e = this;
                        this._reset();
                        var n = this._mapHead;
                        if (this._appendAfter = null, this._forEach(t, function(t, i) {
                                if (n && n.key === i) e._maybeAddToChanges(n, t), e._appendAfter = n, n = n._next;
                                else {
                                    var o = e._getOrCreateRecordForKey(i, t);
                                    n = e._insertBeforeOrAppend(n, o)
                                }
                            }), n) { n._prev && (n._prev._next = null), this._removalsHead = n; for (var i = n; null !== i; i = i._nextRemoved) i === this._mapHead && (this._mapHead = null), this._records.delete(i.key), i._nextRemoved = i._next, i.previousValue = i.currentValue, i.currentValue = null, i._prev = null, i._next = null }
                        return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                    }, t.prototype._insertBeforeOrAppend = function(t, e) { if (t) { var n = t._prev; return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t } return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null }, t.prototype._getOrCreateRecordForKey = function(t, e) {
                        if (this._records.has(t)) {
                            var n = this._records.get(t);
                            this._maybeAddToChanges(n, e);
                            var i = n._prev,
                                o = n._next;
                            return i && (i._next = o), o && (o._prev = i), n._next = null, n._prev = null, n
                        }
                        var r = new Ee(t);
                        return this._records.set(t, r), r.currentValue = e, this._addToAdditions(r), r
                    }, t.prototype._reset = function() {
                        if (this.isDirty) {
                            var t = void 0;
                            for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
                            for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
                            for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                            this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                        }
                    }, t.prototype._maybeAddToChanges = function(t, e) { I(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t)) }, t.prototype._addToAdditions = function(t) { null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t) }, t.prototype._addToChanges = function(t) { null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t) }, t.prototype._forEach = function(t, e) { t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(function(n) { return e(t[n], n) }) }, t
                }(),
                Ee = function(t) { this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null },
                Se = function() {
                    function t(t) { this.factories = t }
                    return t.create = function(e, n) { if (null != n) { var i = n.factories.slice(); return new t(e = e.concat(i)) } return new t(e) }, t.extend = function(e) {
                        return {
                            provide: t,
                            useFactory: function(n) { if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector"); return t.create(e, n) },
                            deps: [
                                [t, new y, new m]
                            ]
                        }
                    }, t.prototype.find = function(t) { var e, n = this.factories.find(function(e) { return e.supports(t) }); if (null != n) return n; throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((e = t).name || typeof e) + "'") }, t
                }(),
                Me = function() {
                    function t(t) { this.factories = t }
                    return t.create = function(e, n) {
                        if (n) {
                            var i = n.factories.slice();
                            e = e.concat(i)
                        }
                        return new t(e)
                    }, t.extend = function(e) {
                        return {
                            provide: t,
                            useFactory: function(n) { if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector"); return t.create(e, n) },
                            deps: [
                                [t, new y, new m]
                            ]
                        }
                    }, t.prototype.find = function(t) { var e = this.factories.find(function(e) { return e.supports(t) }); if (e) return e; throw new Error("Cannot find a differ supporting object '" + t + "'") }, t
                }(),
                Oe = [new Te],
                Ae = new Se([new ye]),
                Pe = new Me(Oe),
                Le = qt(null, "core", [{ provide: at, useValue: "unknown" }, { provide: Qt, deps: [L] }, { provide: Bt, deps: [] }, { provide: ct, deps: [] }]),
                Ve = new u("LocaleId");

            function De() { return Ae }

            function Ne() { return Pe }

            function Be(t) { return t || "en-US" }
            var je = function(t) {},
                Re = function() { var t = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 }; return t[t.NONE] = "NONE", t[t.HTML] = "HTML", t[t.STYLE] = "STYLE", t[t.SCRIPT] = "SCRIPT", t[t.URL] = "URL", t[t.RESOURCE_URL] = "RESOURCE_URL", t }(),
                Ue = function() {};

            function $e(t, e, n) {
                var i = t.state,
                    o = 1792 & i;
                return o === e ? (t.state = -1793 & i | n, t.initIndex = -1, !0) : o === n
            }

            function Fe(t, e, n) { return (1792 & t.state) === e && t.initIndex <= n && (t.initIndex = n + 1, !0) }

            function He(t, e) { return t.nodes[e] }

            function ze(t, e) { return t.nodes[e] }

            function Ge(t, e) { return t.nodes[e] }

            function Ze(t, e) { return t.nodes[e] }

            function qe(t, e) { return t.nodes[e] }
            var We = { setCurrentNode: void 0, createRootView: void 0, createEmbeddedView: void 0, createComponentView: void 0, createNgModuleRef: void 0, overrideProvider: void 0, overrideComponentView: void 0, clearOverrides: void 0, checkAndUpdateView: void 0, checkNoChangesView: void 0, destroyView: void 0, resolveDep: void 0, createDebugContext: void 0, handleEvent: void 0, updateDirectives: void 0, updateRenderer: void 0, dirtyParentQueries: void 0 };

            function Qe(t, e, n, i) {
                var o = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + e + "'. Current value: '" + n + "'.";
                return i && (o += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
                    function(t, e) { var n = new Error(t); return Ye(n, e), n }(o, t)
            }

            function Ye(t, e) { t[q] = e, t[Q] = e.logError.bind(e) }

            function Ke(t) { return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + t) }
            var Xe = function() {},
                Je = new Map;

            function tn(t) { var e = Je.get(t); return e || (e = E(t) + "_" + Je.size, Je.set(t, e)), e }

            function en(t, e, n, i) {
                if (fe.isWrapped(i)) {
                    i = fe.unwrap(i);
                    var o = t.def.nodes[e].bindingIndex + n,
                        r = fe.unwrap(t.oldValues[o]);
                    t.oldValues[o] = new fe(r)
                }
                return i
            }
            var nn = "$$undefined",
                on = "$$empty";

            function rn(t) { return { id: nn, styles: t.styles, encapsulation: t.encapsulation, data: t.data } }
            var ln = 0;

            function sn(t, e, n, i) { return !(!(2 & t.state) && I(t.oldValues[e.bindingIndex + n], i)) }

            function an(t, e, n, i) { return !!sn(t, e, n, i) && (t.oldValues[e.bindingIndex + n] = i, !0) }

            function un(t, e, n, i) { var o = t.oldValues[e.bindingIndex + n]; if (1 & t.state || !pe(o, i)) { var r = e.bindings[n].name; throw Qe(We.createDebugContext(t, e.nodeIndex), r + ": " + o, r + ": " + i, 0 != (1 & t.state)) } }

            function cn(t) { for (var e = t; e;) 2 & e.def.flags && (e.state |= 8), e = e.viewContainerParent || e.parent }

            function dn(t, e) { for (var n = t; n && n !== e;) n.state |= 64, n = n.viewContainerParent || n.parent }

            function hn(t, e, n, i) { try { return cn(33554432 & t.def.nodes[e].flags ? ze(t, e).componentView : t), We.handleEvent(t, e, n, i) } catch (e) { t.root.errorHandler.handleError(e) } }

            function pn(t) { return t.parent ? ze(t.parent, t.parentNodeDef.nodeIndex) : null }

            function fn(t) { return t.parent ? t.parentNodeDef.parent : null }

            function gn(t, e) {
                switch (201347067 & e.flags) {
                    case 1:
                        return ze(t, e.nodeIndex).renderElement;
                    case 2:
                        return He(t, e.nodeIndex).renderText
                }
            }

            function mn(t) { return !!t.parent && !!(32768 & t.parentNodeDef.flags) }

            function vn(t) { return !(!t.parent || 32768 & t.parentNodeDef.flags) }

            function yn(t) { return 1 << t % 32 }

            function wn(t) {
                var e = {},
                    n = 0,
                    i = {};
                return t && t.forEach(function(t) {
                    var o = t[0],
                        r = t[1];
                    "number" == typeof o ? (e[o] = r, n |= yn(o)) : i[o] = r
                }), { matchedQueries: e, references: i, matchedQueryIds: n }
            }

            function bn(t, e) { return t.map(function(t) { var n, i; return Array.isArray(t) ? (i = t[0], n = t[1]) : (i = 0, n = t), n && ("function" == typeof n || "object" == typeof n) && e && Object.defineProperty(n, O, { value: e, configurable: !0 }), { flags: i, token: n, tokenKey: tn(n) } }) }

            function _n(t, e, n) { var i = n.renderParent; return i ? 0 == (1 & i.flags) || 0 == (33554432 & i.flags) || i.element.componentRendererType && i.element.componentRendererType.encapsulation === h.Native ? ze(t, n.renderParent.nodeIndex).renderElement : void 0 : e }
            var Cn = new WeakMap;

            function kn(t) { var e = Cn.get(t); return e || ((e = t(function() { return Xe })).factory = t, Cn.set(t, e)), e }

            function xn(t, e, n, i, o) { 3 === e && (n = t.renderer.parentNode(gn(t, t.def.lastRenderRootNode))), Tn(t, e, 0, t.def.nodes.length - 1, n, i, o) }

            function Tn(t, e, n, i, o, r, l) {
                for (var s = n; s <= i; s++) {
                    var a = t.def.nodes[s];
                    11 & a.flags && En(t, a, e, o, r, l), s += a.childCount
                }
            }

            function In(t, e, n, i, o, r) {
                for (var l = t; l && !mn(l);) l = l.parent;
                for (var s = l.parent, a = fn(l), u = a.nodeIndex + a.childCount, c = a.nodeIndex + 1; c <= u; c++) {
                    var d = s.def.nodes[c];
                    d.ngContentIndex === e && En(s, d, n, i, o, r), c += d.childCount
                }
                if (!s.parent) {
                    var h = t.root.projectableNodes[e];
                    if (h)
                        for (c = 0; c < h.length; c++) Sn(t, h[c], n, i, o, r)
                }
            }

            function En(t, e, n, i, o, r) {
                if (8 & e.flags) In(t, e.ngContent.index, n, i, o, r);
                else {
                    var l = gn(t, e);
                    if (3 === n && 33554432 & e.flags && 48 & e.bindingFlags ? (16 & e.bindingFlags && Sn(t, l, n, i, o, r), 32 & e.bindingFlags && Sn(ze(t, e.nodeIndex).componentView, l, n, i, o, r)) : Sn(t, l, n, i, o, r), 16777216 & e.flags)
                        for (var s = ze(t, e.nodeIndex).viewContainer._embeddedViews, a = 0; a < s.length; a++) xn(s[a], n, i, o, r);
                    1 & e.flags && !e.element.name && Tn(t, n, e.nodeIndex + 1, e.nodeIndex + e.childCount, i, o, r)
                }
            }

            function Sn(t, e, n, i, o, r) {
                var l = t.renderer;
                switch (n) {
                    case 1:
                        l.appendChild(i, e);
                        break;
                    case 2:
                        l.insertBefore(i, e, o);
                        break;
                    case 3:
                        l.removeChild(i, e);
                        break;
                    case 0:
                        r.push(e)
                }
            }
            var Mn = /^:([^:]+):(.+)$/;

            function On(t) { if (":" === t[0]) { var e = t.match(Mn); return [e[1], e[2]] } return ["", t] }

            function An(t) { for (var e = 0, n = 0; n < t.length; n++) e |= t[n].flags; return e }

            function Pn(t, e, n, i, o, r, l, s, a, u, c, d, h, p, f, g, m, v, y, w) {
                switch (t) {
                    case 1:
                        return e + Ln(n) + i;
                    case 2:
                        return e + Ln(n) + i + Ln(o) + r;
                    case 3:
                        return e + Ln(n) + i + Ln(o) + r + Ln(l) + s;
                    case 4:
                        return e + Ln(n) + i + Ln(o) + r + Ln(l) + s + Ln(a) + u;
                    case 5:
                        return e + Ln(n) + i + Ln(o) + r + Ln(l) + s + Ln(a) + u + Ln(c) + d;
                    case 6:
                        return e + Ln(n) + i + Ln(o) + r + Ln(l) + s + Ln(a) + u + Ln(c) + d + Ln(h) + p;
                    case 7:
                        return e + Ln(n) + i + Ln(o) + r + Ln(l) + s + Ln(a) + u + Ln(c) + d + Ln(h) + p + Ln(f) + g;
                    case 8:
                        return e + Ln(n) + i + Ln(o) + r + Ln(l) + s + Ln(a) + u + Ln(c) + d + Ln(h) + p + Ln(f) + g + Ln(m) + v;
                    case 9:
                        return e + Ln(n) + i + Ln(o) + r + Ln(l) + s + Ln(a) + u + Ln(c) + d + Ln(h) + p + Ln(f) + g + Ln(m) + v + Ln(y) + w;
                    default:
                        throw new Error("Does not support more than 9 expressions")
                }
            }

            function Ln(t) { return null != t ? t.toString() : "" }

            function Vn(t, e, n, i, o, r) { t |= 1; var l = wn(e); return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, flags: t, checkIndex: -1, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: l.matchedQueries, matchedQueryIds: l.matchedQueryIds, references: l.references, ngContentIndex: n, childCount: i, bindings: [], bindingFlags: 0, outputs: [], element: { ns: null, name: null, attrs: null, template: r ? kn(r) : null, componentProvider: null, componentView: null, componentRendererType: null, publicProviders: null, allProviders: null, handleEvent: o || Xe }, provider: null, text: null, query: null, ngContent: null } }

            function Dn(t, e, n, i, o, r, l, s, a, u, c, d) {
                void 0 === l && (l = []), u || (u = Xe);
                var p = wn(n),
                    f = p.matchedQueries,
                    g = p.references,
                    m = p.matchedQueryIds,
                    v = null,
                    y = null;
                r && (v = (A = On(r))[0], y = A[1]), s = s || [];
                for (var w = new Array(s.length), b = 0; b < s.length; b++) {
                    var _ = s[b],
                        C = _[0],
                        k = _[2],
                        x = On(_[1]),
                        T = x[0],
                        I = x[1],
                        E = void 0,
                        S = void 0;
                    switch (15 & C) {
                        case 4:
                            S = k;
                            break;
                        case 1:
                        case 8:
                            E = k
                    }
                    w[b] = { flags: C, ns: T, name: I, nonMinifiedName: I, securityContext: E, suffix: S }
                }
                a = a || [];
                var M = new Array(a.length);
                for (b = 0; b < a.length; b++) {
                    var O = a[b];
                    M[b] = { type: 0, target: O[0], eventName: O[1], propName: null }
                }
                var A, P = (l = l || []).map(function(t) {
                    var e = t[1],
                        n = On(t[0]);
                    return [n[0], n[1], e]
                });
                return d = function(t) {
                    if (t && t.id === nn) {
                        var e = null != t.encapsulation && t.encapsulation !== h.None || t.styles.length || Object.keys(t.data).length;
                        t.id = e ? "c" + ln++ : on
                    }
                    return t && t.id === on && (t = null), t || null
                }(d), c && (e |= 33554432), { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: t, flags: e |= 1, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: f, matchedQueryIds: m, references: g, ngContentIndex: i, childCount: o, bindings: w, bindingFlags: An(w), outputs: M, element: { ns: v, name: y, attrs: P, template: null, componentProvider: null, componentView: c || null, componentRendererType: d, publicProviders: null, allProviders: null, handleEvent: u || Xe }, provider: null, text: null, query: null, ngContent: null }
            }

            function Nn(t, e, n) {
                var i, o = n.element,
                    r = t.root.selectorOrNode,
                    l = t.renderer;
                if (t.parent || !r) {
                    i = o.name ? l.createElement(o.name, o.ns) : l.createComment("");
                    var s = _n(t, e, n);
                    s && l.appendChild(s, i)
                } else i = l.selectRootElement(r);
                if (o.attrs)
                    for (var a = 0; a < o.attrs.length; a++) {
                        var u = o.attrs[a];
                        l.setAttribute(i, u[1], u[2], u[0])
                    }
                return i
            }

            function Bn(t, e, n, i) {
                for (var o = 0; o < n.outputs.length; o++) {
                    var r = n.outputs[o],
                        l = jn(t, n.nodeIndex, (d = r.eventName, (c = r.target) ? c + ":" + d : d)),
                        s = r.target,
                        a = t;
                    "component" === r.target && (s = null, a = e);
                    var u = a.renderer.listen(s || i, r.eventName, l);
                    t.disposables[n.outputIndex + o] = u
                }
                var c, d
            }

            function jn(t, e, n) { return function(i) { return hn(t, e, n, i) } }

            function Rn(t, e, n, i) {
                if (!an(t, e, n, i)) return !1;
                var o = e.bindings[n],
                    r = ze(t, e.nodeIndex),
                    l = r.renderElement,
                    s = o.name;
                switch (15 & o.flags) {
                    case 1:
                        ! function(t, e, n, i, o, r) {
                            var l = e.securityContext,
                                s = l ? t.root.sanitizer.sanitize(l, r) : r;
                            s = null != s ? s.toString() : null;
                            var a = t.renderer;
                            null != r ? a.setAttribute(n, o, s, i) : a.removeAttribute(n, o, i)
                        }(t, o, l, o.ns, s, i);
                        break;
                    case 2:
                        ! function(t, e, n, i) {
                            var o = t.renderer;
                            i ? o.addClass(e, n) : o.removeClass(e, n)
                        }(t, l, s, i);
                        break;
                    case 4:
                        ! function(t, e, n, i, o) {
                            var r = t.root.sanitizer.sanitize(Re.STYLE, o);
                            if (null != r) {
                                r = r.toString();
                                var l = e.suffix;
                                null != l && (r += l)
                            } else r = null;
                            var s = t.renderer;
                            null != r ? s.setStyle(n, i, r) : s.removeStyle(n, i)
                        }(t, o, l, s, i);
                        break;
                    case 8:
                        ! function(t, e, n, i, o) {
                            var r = e.securityContext,
                                l = r ? t.root.sanitizer.sanitize(r, o) : o;
                            t.renderer.setProperty(n, i, l)
                        }(33554432 & e.flags && 32 & o.flags ? r.componentView : t, o, l, s, i)
                }
                return !0
            }
            var Un = new Object,
                $n = tn(L),
                Fn = tn(kt);

            function Hn(t, e, n, i) { return n = M(n), { index: -1, deps: bn(i, E(e)), flags: t, token: e, value: n } }

            function zn(t) {
                for (var e = {}, n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.index = n, e[tn(i.token)] = i
                }
                return { factory: null, providersByKey: e, providers: t }
            }

            function Gn(t, e, n) {
                if (void 0 === n && (n = L.THROW_IF_NOT_FOUND), 8 & e.flags) return e.token;
                if (2 & e.flags && (n = null), 1 & e.flags) return t._parent.get(e.token, n);
                var i = e.tokenKey;
                switch (i) {
                    case $n:
                    case Fn:
                        return t
                }
                var o = t._def.providersByKey[i];
                if (o) { var r = t._providers[o.index]; return void 0 === r && (r = t._providers[o.index] = Zn(t, o)), r === Un ? void 0 : r }
                return t._parent.get(e.token, n)
            }

            function Zn(t, e) {
                var n;
                switch (201347067 & e.flags) {
                    case 512:
                        n = function(t, e, n) {
                            var i = n.length;
                            switch (i) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(Gn(t, n[0]));
                                case 2:
                                    return new e(Gn(t, n[0]), Gn(t, n[1]));
                                case 3:
                                    return new e(Gn(t, n[0]), Gn(t, n[1]), Gn(t, n[2]));
                                default:
                                    for (var o = new Array(i), r = 0; r < i; r++) o[r] = Gn(t, n[r]);
                                    return new(e.bind.apply(e, [void 0].concat(o)))
                            }
                        }(t, e.value, e.deps);
                        break;
                    case 1024:
                        n = function(t, e, n) {
                            var i = n.length;
                            switch (i) {
                                case 0:
                                    return e();
                                case 1:
                                    return e(Gn(t, n[0]));
                                case 2:
                                    return e(Gn(t, n[0]), Gn(t, n[1]));
                                case 3:
                                    return e(Gn(t, n[0]), Gn(t, n[1]), Gn(t, n[2]));
                                default:
                                    for (var o = Array(i), r = 0; r < i; r++) o[r] = Gn(t, n[r]);
                                    return e.apply(void 0, o)
                            }
                        }(t, e.value, e.deps);
                        break;
                    case 2048:
                        n = Gn(t, e.deps[0]);
                        break;
                    case 256:
                        n = e.value
                }
                return void 0 === n ? Un : n
            }

            function qn(t, e) { var n = t.viewContainer._embeddedViews; if ((null == e || e >= n.length) && (e = n.length - 1), e < 0) return null; var i = n[e]; return i.viewContainerParent = null, Kn(n, e), We.dirtyParentQueries(i), Qn(i), i }

            function Wn(t, e, n) {
                var i = e ? gn(e, e.def.lastRenderRootNode) : t.renderElement;
                xn(n, 2, n.renderer.parentNode(i), n.renderer.nextSibling(i), void 0)
            }

            function Qn(t) { xn(t, 3, null, null, void 0) }

            function Yn(t, e, n) { e >= t.length ? t.push(n) : t.splice(e, 0, n) }

            function Kn(t, e) { e >= t.length - 1 ? t.pop() : t.splice(e, 1) }
            var Xn = new Object;

            function Jn(t, e, n, i, o, r) { return new ti(t, e, n, i, o, r) }
            var ti = function(t) {
                    function e(e, n, i, o, r, l) { var s = t.call(this) || this; return s.selector = e, s.componentType = n, s._inputs = o, s._outputs = r, s.ngContentSelectors = l, s.viewDefFactory = i, s }
                    return Object(i.b)(e, t), Object.defineProperty(e.prototype, "inputs", {
                        get: function() {
                            var t = [],
                                e = this._inputs;
                            for (var n in e) t.push({ propName: n, templateName: e[n] });
                            return t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "outputs", { get: function() { var t = []; for (var e in this._outputs) t.push({ propName: e, templateName: this._outputs[e] }); return t }, enumerable: !0, configurable: !0 }), e.prototype.create = function(t, e, n, i) {
                        if (!i) throw new Error("ngModule should be provided");
                        var o = kn(this.viewDefFactory),
                            r = o.nodes[0].element.componentProvider.nodeIndex,
                            l = We.createRootView(t, e || [], n, o, i, Xn),
                            s = Ge(l, r).instance;
                        return n && l.renderer.setAttribute(ze(l, 0).renderElement, "ng-version", f.full), new ei(l, new ri(l), s)
                    }, e
                }(ft),
                ei = function(t) {
                    function e(e, n, i) { var o = t.call(this) || this; return o._view = e, o._viewRef = n, o._component = i, o._elDef = o._view.def.nodes[0], o.hostView = n, o.changeDetectorRef = n, o.instance = i, o }
                    return Object(i.b)(e, t), Object.defineProperty(e.prototype, "location", { get: function() { return new ne(ze(this._view, this._elDef.nodeIndex).renderElement) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "injector", { get: function() { return new ui(this._view, this._elDef) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "componentType", { get: function() { return this._component.constructor }, enumerable: !0, configurable: !0 }), e.prototype.destroy = function() { this._viewRef.destroy() }, e.prototype.onDestroy = function(t) { this._viewRef.onDestroy(t) }, e
                }(function() {});

            function ni(t, e, n) { return new ii(t, e, n) }
            var ii = function() {
                function t(t, e, n) { this._view = t, this._elDef = e, this._data = n, this._embeddedViews = [] }
                return Object.defineProperty(t.prototype, "element", { get: function() { return new ne(this._data.renderElement) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "injector", { get: function() { return new ui(this._view, this._elDef) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "parentInjector", { get: function() { for (var t = this._view, e = this._elDef.parent; !e && t;) e = fn(t), t = t.parent; return t ? new ui(t, e) : new ui(this._view, null) }, enumerable: !0, configurable: !0 }), t.prototype.clear = function() {
                    for (var t = this._embeddedViews.length - 1; t >= 0; t--) {
                        var e = qn(this._data, t);
                        We.destroyView(e)
                    }
                }, t.prototype.get = function(t) { var e = this._embeddedViews[t]; if (e) { var n = new ri(e); return n.attachToViewContainerRef(this), n } return null }, Object.defineProperty(t.prototype, "length", { get: function() { return this._embeddedViews.length }, enumerable: !0, configurable: !0 }), t.prototype.createEmbeddedView = function(t, e, n) { var i = t.createEmbeddedView(e || {}); return this.insert(i, n), i }, t.prototype.createComponent = function(t, e, n, i, o) {
                    var r = n || this.parentInjector;
                    o || t instanceof Ct || (o = r.get(kt));
                    var l = t.create(r, i, void 0, o);
                    return this.insert(l.hostView, e), l
                }, t.prototype.insert = function(t, e) {
                    if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                    var n, i, o, r, l = t;
                    return o = l._view, r = (n = this._data).viewContainer._embeddedViews, null !== (i = e) && void 0 !== i || (i = r.length), o.viewContainerParent = this._view, Yn(r, i, o),
                        function(t, e) {
                            var n = pn(e);
                            if (n && n !== t && !(16 & e.state)) {
                                e.state |= 16;
                                var i = n.template._projectedViews;
                                i || (i = n.template._projectedViews = []), i.push(e),
                                    function(t, n) { if (!(4 & n.flags)) { e.parent.def.nodeFlags |= 4, n.flags |= 4; for (var i = n.parent; i;) i.childFlags |= 4, i = i.parent } }(0, e.parentNodeDef)
                            }
                        }(n, o), We.dirtyParentQueries(o), Wn(n, i > 0 ? r[i - 1] : null, o), l.attachToViewContainerRef(this), t
                }, t.prototype.move = function(t, e) { if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!"); var n, i, o, r, l, s = this._embeddedViews.indexOf(t._view); return o = e, l = (r = (n = this._data).viewContainer._embeddedViews)[i = s], Kn(r, i), null == o && (o = r.length), Yn(r, o, l), We.dirtyParentQueries(l), Qn(l), Wn(n, o > 0 ? r[o - 1] : null, l), t }, t.prototype.indexOf = function(t) { return this._embeddedViews.indexOf(t._view) }, t.prototype.remove = function(t) {
                    var e = qn(this._data, t);
                    e && We.destroyView(e)
                }, t.prototype.detach = function(t) { var e = qn(this._data, t); return e ? new ri(e) : null }, t
            }();

            function oi(t) { return new ri(t) }
            var ri = function() {
                function t(t) { this._view = t, this._viewContainerRef = null, this._appRef = null }
                return Object.defineProperty(t.prototype, "rootNodes", { get: function() { return xn(this._view, 0, void 0, void 0, t = []), t; var t }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "context", { get: function() { return this._view.context }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "destroyed", { get: function() { return 0 != (128 & this._view.state) }, enumerable: !0, configurable: !0 }), t.prototype.markForCheck = function() { cn(this._view) }, t.prototype.detach = function() { this._view.state &= -5 }, t.prototype.detectChanges = function() {
                    var t = this._view.root.rendererFactory;
                    t.begin && t.begin();
                    try { We.checkAndUpdateView(this._view) } finally { t.end && t.end() }
                }, t.prototype.checkNoChanges = function() { We.checkNoChangesView(this._view) }, t.prototype.reattach = function() { this._view.state |= 4 }, t.prototype.onDestroy = function(t) { this._view.disposables || (this._view.disposables = []), this._view.disposables.push(t) }, t.prototype.destroy = function() { this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), We.destroyView(this._view) }, t.prototype.detachFromAppRef = function() { this._appRef = null, Qn(this._view), We.dirtyParentQueries(this._view) }, t.prototype.attachToAppRef = function(t) {
                    if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                    this._appRef = t
                }, t.prototype.attachToViewContainerRef = function(t) {
                    if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                    this._viewContainerRef = t
                }, t
            }();

            function li(t, e) { return new si(t, e) }
            var si = function(t) {
                function e(e, n) { var i = t.call(this) || this; return i._parentView = e, i._def = n, i }
                return Object(i.b)(e, t), e.prototype.createEmbeddedView = function(t) { return new ri(We.createEmbeddedView(this._parentView, this._def, this._def.element.template, t)) }, Object.defineProperty(e.prototype, "elementRef", { get: function() { return new ne(ze(this._parentView, this._def.nodeIndex).renderElement) }, enumerable: !0, configurable: !0 }), e
            }(oe);

            function ai(t, e) { return new ui(t, e) }
            var ui = function() {
                function t(t, e) { this.view = t, this.elDef = e }
                return t.prototype.get = function(t, e) { return void 0 === e && (e = L.THROW_IF_NOT_FOUND), We.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), { flags: 0, token: t, tokenKey: tn(t) }, e) }, t
            }();

            function ci(t, e) { var n = t.def.nodes[e]; if (1 & n.flags) { var i = ze(t, n.nodeIndex); return n.element.template ? i.template : i.renderElement } if (2 & n.flags) return He(t, n.nodeIndex).renderText; if (20240 & n.flags) return Ge(t, n.nodeIndex).instance; throw new Error("Illegal state: read nodeValue for node index " + e) }

            function di(t) { return new hi(t.renderer) }
            var hi = function() {
                function t(t) { this.delegate = t }
                return t.prototype.selectRootElement = function(t) { return this.delegate.selectRootElement(t) }, t.prototype.createElement = function(t, e) {
                    var n = On(e),
                        i = this.delegate.createElement(n[1], n[0]);
                    return t && this.delegate.appendChild(t, i), i
                }, t.prototype.createViewRoot = function(t) { return t }, t.prototype.createTemplateAnchor = function(t) { var e = this.delegate.createComment(""); return t && this.delegate.appendChild(t, e), e }, t.prototype.createText = function(t, e) { var n = this.delegate.createText(e); return t && this.delegate.appendChild(t, n), n }, t.prototype.projectNodes = function(t, e) { for (var n = 0; n < e.length; n++) this.delegate.appendChild(t, e[n]) }, t.prototype.attachViewAfter = function(t, e) { for (var n = this.delegate.parentNode(t), i = this.delegate.nextSibling(t), o = 0; o < e.length; o++) this.delegate.insertBefore(n, e[o], i) }, t.prototype.detachView = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e],
                            i = this.delegate.parentNode(n);
                        this.delegate.removeChild(i, n)
                    }
                }, t.prototype.destroyView = function(t, e) { for (var n = 0; n < e.length; n++) this.delegate.destroyNode(e[n]) }, t.prototype.listen = function(t, e, n) { return this.delegate.listen(t, e, n) }, t.prototype.listenGlobal = function(t, e, n) { return this.delegate.listen(t, e, n) }, t.prototype.setElementProperty = function(t, e, n) { this.delegate.setProperty(t, e, n) }, t.prototype.setElementAttribute = function(t, e, n) {
                    var i = On(e),
                        o = i[0],
                        r = i[1];
                    null != n ? this.delegate.setAttribute(t, r, n, o) : this.delegate.removeAttribute(t, r, o)
                }, t.prototype.setBindingDebugInfo = function(t, e, n) {}, t.prototype.setElementClass = function(t, e, n) { n ? this.delegate.addClass(t, e) : this.delegate.removeClass(t, e) }, t.prototype.setElementStyle = function(t, e, n) { null != n ? this.delegate.setStyle(t, e, n) : this.delegate.removeStyle(t, e) }, t.prototype.invokeElementMethod = function(t, e, n) { t[e].apply(t, n) }, t.prototype.setText = function(t, e) { this.delegate.setValue(t, e) }, t.prototype.animate = function() { throw new Error("Renderer.animate is no longer supported!") }, t
            }();

            function pi(t, e, n, i) { return new fi(t, e, n, i) }
            var fi = function() {
                    function t(t, e, n, i) {
                        this._moduleType = t, this._parent = e, this._bootstrapComponents = n, this._def = i, this._destroyListeners = [], this._destroyed = !1, this.injector = this,
                            function(t) {
                                for (var e = t._def, n = t._providers = new Array(e.providers.length), i = 0; i < e.providers.length; i++) {
                                    var o = e.providers[i];
                                    4096 & o.flags || (n[i] = Zn(t, o))
                                }
                            }(this)
                    }
                    return t.prototype.get = function(t, e) { return void 0 === e && (e = L.THROW_IF_NOT_FOUND), Gn(this, { token: t, tokenKey: tn(t), flags: 0 }, e) }, Object.defineProperty(t.prototype, "instance", { get: function() { return this.get(this._moduleType) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "componentFactoryResolver", { get: function() { return this.get(bt) }, enumerable: !0, configurable: !0 }), t.prototype.destroy = function() {
                        if (this._destroyed) throw new Error("The ng module " + E(this.instance.constructor) + " has already been destroyed.");
                        this._destroyed = !0,
                            function(t, e) {
                                for (var n = t._def, i = 0; i < n.providers.length; i++)
                                    if (131072 & n.providers[i].flags) {
                                        var o = t._providers[i];
                                        o && o !== Un && o.ngOnDestroy()
                                    }
                            }(this), this._destroyListeners.forEach(function(t) { return t() })
                    }, t.prototype.onDestroy = function(t) { this._destroyListeners.push(t) }, t
                }(),
                gi = tn(function() {}),
                mi = tn(ee),
                vi = tn(ne),
                yi = tn(re),
                wi = tn(oe),
                bi = tn(function() {}),
                _i = tn(L);

            function Ci(t, e, n, i, o, r, l, s) {
                var a = [];
                if (l)
                    for (var u in l) {
                        var c = l[u];
                        a[c[0]] = { flags: 8, name: u, nonMinifiedName: c[1], ns: null, securityContext: null, suffix: null }
                    }
                var d = [];
                if (s)
                    for (var h in s) d.push({ type: 1, propName: h, target: null, eventName: s[h] });
                return Ti(t, e |= 16384, n, i, o, o, r, a, d)
            }

            function ki(t, e, n) { return Ti(-1, t |= 16, null, 0, e, e, n) }

            function xi(t, e, n, i, o) { return Ti(-1, t, e, 0, n, i, o) }

            function Ti(t, e, n, i, o, r, l, s, a) {
                var u = wn(n),
                    c = u.matchedQueries,
                    d = u.references,
                    h = u.matchedQueryIds;
                a || (a = []), s || (s = []), r = M(r);
                var p = bn(l, E(o));
                return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: t, flags: e, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: c, matchedQueryIds: h, references: d, ngContentIndex: -1, childCount: i, bindings: s, bindingFlags: An(s), outputs: a, element: null, provider: { token: o, value: r, deps: p }, text: null, query: null, ngContent: null }
            }

            function Ii(t, e) { return Oi(t, e) }

            function Ei(t, e) { for (var n = t; n.parent && !mn(n);) n = n.parent; return Ai(n.parent, fn(n), !0, e.provider.value, e.provider.deps) }

            function Si(t, e) {
                var n = Ai(t, e.parent, (32768 & e.flags) > 0, e.provider.value, e.provider.deps);
                if (e.outputs.length)
                    for (var i = 0; i < e.outputs.length; i++) {
                        var o = e.outputs[i],
                            r = n[o.propName].subscribe(Mi(t, e.parent.nodeIndex, o.eventName));
                        t.disposables[e.outputIndex + i] = r.unsubscribe.bind(r)
                    }
                return n
            }

            function Mi(t, e, n) { return function(i) { return hn(t, e, n, i) } }

            function Oi(t, e) {
                var n = (8192 & e.flags) > 0,
                    i = e.provider;
                switch (201347067 & e.flags) {
                    case 512:
                        return Ai(t, e.parent, n, i.value, i.deps);
                    case 1024:
                        return function(t, e, n, i, o) {
                            var r = o.length;
                            switch (r) {
                                case 0:
                                    return i();
                                case 1:
                                    return i(Li(t, e, n, o[0]));
                                case 2:
                                    return i(Li(t, e, n, o[0]), Li(t, e, n, o[1]));
                                case 3:
                                    return i(Li(t, e, n, o[0]), Li(t, e, n, o[1]), Li(t, e, n, o[2]));
                                default:
                                    for (var l = Array(r), s = 0; s < r; s++) l[s] = Li(t, e, n, o[s]);
                                    return i.apply(void 0, l)
                            }
                        }(t, e.parent, n, i.value, i.deps);
                    case 2048:
                        return Li(t, e.parent, n, i.deps[0]);
                    case 256:
                        return i.value
                }
            }

            function Ai(t, e, n, i, o) {
                var r = o.length;
                switch (r) {
                    case 0:
                        return new i;
                    case 1:
                        return new i(Li(t, e, n, o[0]));
                    case 2:
                        return new i(Li(t, e, n, o[0]), Li(t, e, n, o[1]));
                    case 3:
                        return new i(Li(t, e, n, o[0]), Li(t, e, n, o[1]), Li(t, e, n, o[2]));
                    default:
                        for (var l = new Array(r), s = 0; s < r; s++) l[s] = Li(t, e, n, o[s]);
                        return new(i.bind.apply(i, [void 0].concat(l)))
                }
            }
            var Pi = {};

            function Li(t, e, n, i, o) {
                if (void 0 === o && (o = L.THROW_IF_NOT_FOUND), 8 & i.flags) return i.token;
                var r = t;
                2 & i.flags && (o = null);
                var l = i.tokenKey;
                for (l === bi && (n = !(!e || !e.element.componentView)), e && 1 & i.flags && (n = !1, e = e.parent); t;) {
                    if (e) switch (l) {
                        case gi:
                            return di(Vi(t, e, n));
                        case mi:
                            return Vi(t, e, n).renderer;
                        case vi:
                            return new ne(ze(t, e.nodeIndex).renderElement);
                        case yi:
                            return ze(t, e.nodeIndex).viewContainer;
                        case wi:
                            if (e.element.template) return ze(t, e.nodeIndex).template;
                            break;
                        case bi:
                            return oi(Vi(t, e, n));
                        case _i:
                            return ai(t, e);
                        default:
                            var s = (n ? e.element.allProviders : e.element.publicProviders)[l];
                            if (s) { var a = Ge(t, s.nodeIndex); return a || (a = { instance: Oi(t, s) }, t.nodes[s.nodeIndex] = a), a.instance }
                    }
                    n = mn(t), e = fn(t), t = t.parent
                }
                var u = r.root.injector.get(i.token, Pi);
                return u !== Pi || o === Pi ? u : r.root.ngModule.injector.get(i.token, o)
            }

            function Vi(t, e, n) {
                var i;
                if (n) i = ze(t, e.nodeIndex).componentView;
                else
                    for (i = t; i.parent && !mn(i);) i = i.parent;
                return i
            }

            function Di(t, e, n, i, o, r) {
                if (32768 & n.flags) {
                    var l = ze(t, n.parent.nodeIndex).componentView;
                    2 & l.def.flags && (l.state |= 8)
                }
                if (e.instance[n.bindings[i].name] = o, 524288 & n.flags) {
                    r = r || {};
                    var s = fe.unwrap(t.oldValues[n.bindingIndex + i]);
                    r[n.bindings[i].nonMinifiedName] = new ge(s, o, 0 != (2 & t.state))
                }
                return t.oldValues[n.bindingIndex + i] = o, r
            }

            function Ni(t, e) {
                if (t.def.nodeFlags & e)
                    for (var n = t.def.nodes, i = 0, o = 0; o < n.length; o++) {
                        var r = n[o],
                            l = r.parent;
                        for (!l && r.flags & e && ji(t, o, r.flags & e, i++), 0 == (r.childFlags & e) && (o += r.childCount); l && 1 & l.flags && o === l.nodeIndex + l.childCount;) l.directChildFlags & e && (i = Bi(t, l, e, i)), l = l.parent
                    }
            }

            function Bi(t, e, n, i) {
                for (var o = e.nodeIndex + 1; o <= e.nodeIndex + e.childCount; o++) {
                    var r = t.def.nodes[o];
                    r.flags & n && ji(t, o, r.flags & n, i++), o += r.childCount
                }
                return i
            }

            function ji(t, e, n, i) {
                var o = Ge(t, e);
                if (o) {
                    var r = o.instance;
                    r && (We.setCurrentNode(t, e), 1048576 & n && Fe(t, 512, i) && r.ngAfterContentInit(), 2097152 & n && r.ngAfterContentChecked(), 4194304 & n && Fe(t, 768, i) && r.ngAfterViewInit(), 8388608 & n && r.ngAfterViewChecked(), 131072 & n && r.ngOnDestroy())
                }
            }

            function Ri(t, e, n) { var i = []; for (var o in n) i.push({ propName: o, bindingType: n[o] }); return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: -1, flags: t, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, ngContentIndex: -1, matchedQueries: {}, matchedQueryIds: 0, references: {}, childCount: 0, bindings: [], bindingFlags: 0, outputs: [], element: null, provider: null, text: null, query: { id: e, filterId: yn(e), bindings: i }, ngContent: null } }

            function Ui(t) {
                for (var e = t.def.nodeMatchedQueries; t.parent && vn(t);) {
                    var n = t.parentNodeDef;
                    t = t.parent;
                    for (var i = n.nodeIndex + n.childCount, o = 0; o <= i; o++) 67108864 & (r = t.def.nodes[o]).flags && 536870912 & r.flags && (r.query.filterId & e) === r.query.filterId && qe(t, o).setDirty(), !(1 & r.flags && o + r.childCount < n.nodeIndex) && 67108864 & r.childFlags && 536870912 & r.childFlags || (o += r.childCount)
                }
                if (134217728 & t.def.nodeFlags)
                    for (o = 0; o < t.def.nodes.length; o++) {
                        var r;
                        134217728 & (r = t.def.nodes[o]).flags && 536870912 & r.flags && qe(t, o).setDirty(), o += r.childCount
                    }
            }

            function $i(t, e) {
                var n = qe(t, e.nodeIndex);
                if (n.dirty) {
                    var i, o = void 0;
                    if (67108864 & e.flags) {
                        var r = e.parent.parent;
                        o = Fi(t, r.nodeIndex, r.nodeIndex + r.childCount, e.query, []), i = Ge(t, e.parent.nodeIndex).instance
                    } else 134217728 & e.flags && (o = Fi(t, 0, t.def.nodes.length - 1, e.query, []), i = t.component);
                    n.reset(o);
                    for (var l = e.query.bindings, s = !1, a = 0; a < l.length; a++) {
                        var u = l[a],
                            c = void 0;
                        switch (u.bindingType) {
                            case 0:
                                c = n.first;
                                break;
                            case 1:
                                c = n, s = !0
                        }
                        i[u.propName] = c
                    }
                    s && n.notifyOnChanges()
                }
            }

            function Fi(t, e, n, i, o) {
                for (var r = e; r <= n; r++) {
                    var l = t.def.nodes[r],
                        s = l.matchedQueries[i.id];
                    if (null != s && o.push(Hi(t, l, s)), 1 & l.flags && l.element.template && (l.element.template.nodeMatchedQueries & i.filterId) === i.filterId) {
                        var a = ze(t, r);
                        if ((l.childMatchedQueries & i.filterId) === i.filterId && (Fi(t, r + 1, r + l.childCount, i, o), r += l.childCount), 16777216 & l.flags)
                            for (var u = a.viewContainer._embeddedViews, c = 0; c < u.length; c++) {
                                var d = u[c],
                                    h = pn(d);
                                h && h === a && Fi(d, 0, d.def.nodes.length - 1, i, o)
                            }
                        var p = a.template._projectedViews;
                        if (p)
                            for (c = 0; c < p.length; c++) {
                                var f = p[c];
                                Fi(f, 0, f.def.nodes.length - 1, i, o)
                            }
                    }(l.childMatchedQueries & i.filterId) !== i.filterId && (r += l.childCount)
                }
                return o
            }

            function Hi(t, e, n) {
                if (null != n) switch (n) {
                    case 1:
                        return ze(t, e.nodeIndex).renderElement;
                    case 0:
                        return new ne(ze(t, e.nodeIndex).renderElement);
                    case 2:
                        return ze(t, e.nodeIndex).template;
                    case 3:
                        return ze(t, e.nodeIndex).viewContainer;
                    case 4:
                        return Ge(t, e.nodeIndex).instance
                }
            }

            function zi(t, e, n) {
                var i = _n(t, e, n);
                i && In(t, n.ngContent.index, 1, i, null, void 0)
            }

            function Gi(t, e) { return qi(128, t, new Array(e + 1)) }

            function Zi(t, e) {
                for (var n = Object.keys(e), i = n.length, o = new Array(i), r = 0; r < i; r++) {
                    var l = n[r];
                    o[e[l]] = l
                }
                return qi(64, t, o)
            }

            function qi(t, e, n) {
                for (var i = new Array(n.length), o = 0; o < n.length; o++) {
                    var r = n[o];
                    i[o] = { flags: 8, name: r, ns: null, nonMinifiedName: r, securityContext: null, suffix: null }
                }
                return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: e, flags: t, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: {}, matchedQueryIds: 0, references: {}, ngContentIndex: -1, childCount: 0, bindings: i, bindingFlags: An(i), outputs: [], element: null, provider: null, text: null, query: null, ngContent: null }
            }

            function Wi(t, e, n) { for (var i = new Array(n.length - 1), o = 1; o < n.length; o++) i[o - 1] = { flags: 8, name: null, ns: null, nonMinifiedName: null, securityContext: null, suffix: n[o] }; return { nodeIndex: -1, parent: null, renderParent: null, bindingIndex: -1, outputIndex: -1, checkIndex: t, flags: 2, childFlags: 0, directChildFlags: 0, childMatchedQueries: 0, matchedQueries: {}, matchedQueryIds: 0, references: {}, ngContentIndex: e, childCount: 0, bindings: i, bindingFlags: 8, outputs: [], element: null, provider: null, text: { prefix: n[0] }, query: null, ngContent: null } }

            function Qi(t, e, n) {
                var i, o = t.renderer;
                i = o.createText(n.text.prefix);
                var r = _n(t, e, n);
                return r && o.appendChild(r, i), { renderText: i }
            }

            function Yi(t, e) { return (null != t ? t.toString() : "") + e.suffix }

            function Ki(t, e, n, i) {
                for (var o = 0, r = 0, l = 0, s = 0, a = 0, u = null, c = null, d = !1, h = !1, p = null, f = 0; f < e.length; f++) {
                    var g = e[f];
                    if (g.nodeIndex = f, g.parent = u, g.bindingIndex = o, g.outputIndex = r, g.renderParent = c, l |= g.flags, a |= g.matchedQueryIds, g.element) {
                        var m = g.element;
                        m.publicProviders = u ? u.element.publicProviders : Object.create(null), m.allProviders = m.publicProviders, d = !1, h = !1, g.element.template && (a |= g.element.template.nodeMatchedQueries)
                    }
                    if (Ji(u, g, e.length), o += g.bindings.length, r += g.outputs.length, !c && 3 & g.flags && (p = g), 20224 & g.flags) {
                        d || (d = !0, u.element.publicProviders = Object.create(u.element.publicProviders), u.element.allProviders = u.element.publicProviders);
                        var v = 0 != (32768 & g.flags);
                        0 == (8192 & g.flags) || v ? u.element.publicProviders[tn(g.provider.token)] = g : (h || (h = !0, u.element.allProviders = Object.create(u.element.publicProviders)), u.element.allProviders[tn(g.provider.token)] = g), v && (u.element.componentProvider = g)
                    }
                    if (u ? (u.childFlags |= g.flags, u.directChildFlags |= g.flags, u.childMatchedQueries |= g.matchedQueryIds, g.element && g.element.template && (u.childMatchedQueries |= g.element.template.nodeMatchedQueries)) : s |= g.flags, g.childCount > 0) u = g, Xi(g) || (c = g);
                    else
                        for (; u && f === u.nodeIndex + u.childCount;) {
                            var y = u.parent;
                            y && (y.childFlags |= u.childFlags, y.childMatchedQueries |= u.childMatchedQueries), c = (u = y) && Xi(u) ? u.renderParent : u
                        }
                }
                return { factory: null, nodeFlags: l, rootNodeFlags: s, nodeMatchedQueries: a, flags: t, nodes: e, updateDirectives: n || Xe, updateRenderer: i || Xe, handleEvent: function(t, n, i, o) { return e[n].element.handleEvent(t, i, o) }, bindingCount: o, outputCount: r, lastRenderRootNode: p }
            }

            function Xi(t) { return 0 != (1 & t.flags) && null === t.element.name }

            function Ji(t, e, n) { var i = e.element && e.element.template; if (i) { if (!i.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!"); if (i.lastRenderRootNode && 16777216 & i.lastRenderRootNode.flags) throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + e.nodeIndex + "!") } if (20224 & e.flags && 0 == (1 & (t ? t.flags : 0))) throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " + e.nodeIndex + "!"); if (e.query) { if (67108864 & e.flags && (!t || 0 == (16384 & t.flags))) throw new Error("Illegal State: Content Query nodes need to be children of directives, at index " + e.nodeIndex + "!"); if (134217728 & e.flags && t) throw new Error("Illegal State: View Query nodes have to be top level nodes, at index " + e.nodeIndex + "!") } if (e.childCount) { var o = t ? t.nodeIndex + t.childCount : n - 1; if (e.nodeIndex <= o && e.nodeIndex + e.childCount > o) throw new Error("Illegal State: childCount of node leads outside of parent, at index " + e.nodeIndex + "!") } }

            function to(t, e, n, i) { var o = io(t.root, t.renderer, t, e, n); return oo(o, t.component, i), ro(o), o }

            function eo(t, e, n) { var i = io(t, t.renderer, null, null, e); return oo(i, n, n), ro(i), i }

            function no(t, e, n, i) { var o, r = e.element.componentRendererType; return o = r ? t.root.rendererFactory.createRenderer(i, r) : t.root.renderer, io(t.root, o, t, e.element.componentProvider, n) }

            function io(t, e, n, i, o) {
                var r = new Array(o.nodes.length),
                    l = o.outputCount ? new Array(o.outputCount) : null;
                return { def: o, parent: n, viewContainerParent: null, parentNodeDef: i, context: null, component: null, nodes: r, state: 13, root: t, renderer: e, oldValues: new Array(o.bindingCount), disposables: l, initIndex: -1 }
            }

            function oo(t, e, n) { t.component = e, t.context = n }

            function ro(t) {
                var e;
                mn(t) && (e = ze(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement);
                for (var n = t.def, i = t.nodes, o = 0; o < n.nodes.length; o++) {
                    var r = n.nodes[o];
                    We.setCurrentNode(t, o);
                    var l = void 0;
                    switch (201347067 & r.flags) {
                        case 1:
                            var s = Nn(t, e, r),
                                a = void 0;
                            if (33554432 & r.flags) {
                                var u = kn(r.element.componentView);
                                a = We.createComponentView(t, r, u, s)
                            }
                            Bn(t, a, r, s), l = { renderElement: s, componentView: a, viewContainer: null, template: r.element.template ? li(t, r) : void 0 }, 16777216 & r.flags && (l.viewContainer = ni(t, r, l));
                            break;
                        case 2:
                            l = Qi(t, e, r);
                            break;
                        case 512:
                        case 1024:
                        case 2048:
                        case 256:
                            (l = i[o]) || 4096 & r.flags || (l = { instance: Ii(t, r) });
                            break;
                        case 16:
                            l = { instance: Ei(t, r) };
                            break;
                        case 16384:
                            (l = i[o]) || (l = { instance: Si(t, r) }), 32768 & r.flags && oo(ze(t, r.parent.nodeIndex).componentView, l.instance, l.instance);
                            break;
                        case 32:
                        case 64:
                        case 128:
                            l = { value: void 0 };
                            break;
                        case 67108864:
                        case 134217728:
                            l = new ie;
                            break;
                        case 8:
                            zi(t, e, r), l = void 0
                    }
                    i[o] = l
                }
                go(t, fo.CreateViewNodes), wo(t, 201326592, 268435456, 0)
            }

            function lo(t) { uo(t), We.updateDirectives(t, 1), mo(t, fo.CheckNoChanges), We.updateRenderer(t, 1), go(t, fo.CheckNoChanges), t.state &= -97 }

            function so(t) {
                1 & t.state ? (t.state &= -2, t.state |= 2) : t.state &= -3, $e(t, 0, 256), uo(t), We.updateDirectives(t, 0), mo(t, fo.CheckAndUpdate), wo(t, 67108864, 536870912, 0);
                var e = $e(t, 256, 512);
                Ni(t, 2097152 | (e ? 1048576 : 0)), We.updateRenderer(t, 0), go(t, fo.CheckAndUpdate), wo(t, 134217728, 536870912, 0), Ni(t, 8388608 | ((e = $e(t, 512, 768)) ? 4194304 : 0)), 2 & t.def.flags && (t.state &= -9), t.state &= -97, $e(t, 768, 1024)
            }

            function ao(t, e, n, i, o, r, l, s, a, u, c, d, h) {
                return 0 === n ? function(t, e, n, i, o, r, l, s, a, u, c, d) {
                    switch (201347067 & e.flags) {
                        case 1:
                            return function(t, e, n, i, o, r, l, s, a, u, c, d) {
                                var h = e.bindings.length,
                                    p = !1;
                                return h > 0 && Rn(t, e, 0, n) && (p = !0), h > 1 && Rn(t, e, 1, i) && (p = !0), h > 2 && Rn(t, e, 2, o) && (p = !0), h > 3 && Rn(t, e, 3, r) && (p = !0), h > 4 && Rn(t, e, 4, l) && (p = !0), h > 5 && Rn(t, e, 5, s) && (p = !0), h > 6 && Rn(t, e, 6, a) && (p = !0), h > 7 && Rn(t, e, 7, u) && (p = !0), h > 8 && Rn(t, e, 8, c) && (p = !0), h > 9 && Rn(t, e, 9, d) && (p = !0), p
                            }(t, e, n, i, o, r, l, s, a, u, c, d);
                        case 2:
                            return function(t, e, n, i, o, r, l, s, a, u, c, d) {
                                var h = !1,
                                    p = e.bindings,
                                    f = p.length;
                                if (f > 0 && an(t, e, 0, n) && (h = !0), f > 1 && an(t, e, 1, i) && (h = !0), f > 2 && an(t, e, 2, o) && (h = !0), f > 3 && an(t, e, 3, r) && (h = !0), f > 4 && an(t, e, 4, l) && (h = !0), f > 5 && an(t, e, 5, s) && (h = !0), f > 6 && an(t, e, 6, a) && (h = !0), f > 7 && an(t, e, 7, u) && (h = !0), f > 8 && an(t, e, 8, c) && (h = !0), f > 9 && an(t, e, 9, d) && (h = !0), h) {
                                    var g = e.text.prefix;
                                    f > 0 && (g += Yi(n, p[0])), f > 1 && (g += Yi(i, p[1])), f > 2 && (g += Yi(o, p[2])), f > 3 && (g += Yi(r, p[3])), f > 4 && (g += Yi(l, p[4])), f > 5 && (g += Yi(s, p[5])), f > 6 && (g += Yi(a, p[6])), f > 7 && (g += Yi(u, p[7])), f > 8 && (g += Yi(c, p[8])), f > 9 && (g += Yi(d, p[9]));
                                    var m = He(t, e.nodeIndex).renderText;
                                    t.renderer.setValue(m, g)
                                }
                                return h
                            }(t, e, n, i, o, r, l, s, a, u, c, d);
                        case 16384:
                            return function(t, e, n, i, o, r, l, s, a, u, c, d) {
                                var h = Ge(t, e.nodeIndex),
                                    p = h.instance,
                                    f = !1,
                                    g = void 0,
                                    m = e.bindings.length;
                                return m > 0 && sn(t, e, 0, n) && (f = !0, g = Di(t, h, e, 0, n, g)), m > 1 && sn(t, e, 1, i) && (f = !0, g = Di(t, h, e, 1, i, g)), m > 2 && sn(t, e, 2, o) && (f = !0, g = Di(t, h, e, 2, o, g)), m > 3 && sn(t, e, 3, r) && (f = !0, g = Di(t, h, e, 3, r, g)), m > 4 && sn(t, e, 4, l) && (f = !0, g = Di(t, h, e, 4, l, g)), m > 5 && sn(t, e, 5, s) && (f = !0, g = Di(t, h, e, 5, s, g)), m > 6 && sn(t, e, 6, a) && (f = !0, g = Di(t, h, e, 6, a, g)), m > 7 && sn(t, e, 7, u) && (f = !0, g = Di(t, h, e, 7, u, g)), m > 8 && sn(t, e, 8, c) && (f = !0, g = Di(t, h, e, 8, c, g)), m > 9 && sn(t, e, 9, d) && (f = !0, g = Di(t, h, e, 9, d, g)), g && p.ngOnChanges(g), 65536 & e.flags && Fe(t, 256, e.nodeIndex) && p.ngOnInit(), 262144 & e.flags && p.ngDoCheck(), f
                            }(t, e, n, i, o, r, l, s, a, u, c, d);
                        case 32:
                        case 64:
                        case 128:
                            return function(t, e, n, i, o, r, l, s, a, u, c, d) {
                                var h = e.bindings,
                                    p = !1,
                                    f = h.length;
                                if (f > 0 && an(t, e, 0, n) && (p = !0), f > 1 && an(t, e, 1, i) && (p = !0), f > 2 && an(t, e, 2, o) && (p = !0), f > 3 && an(t, e, 3, r) && (p = !0), f > 4 && an(t, e, 4, l) && (p = !0), f > 5 && an(t, e, 5, s) && (p = !0), f > 6 && an(t, e, 6, a) && (p = !0), f > 7 && an(t, e, 7, u) && (p = !0), f > 8 && an(t, e, 8, c) && (p = !0), f > 9 && an(t, e, 9, d) && (p = !0), p) {
                                    var g = Ze(t, e.nodeIndex),
                                        m = void 0;
                                    switch (201347067 & e.flags) {
                                        case 32:
                                            m = new Array(h.length), f > 0 && (m[0] = n), f > 1 && (m[1] = i), f > 2 && (m[2] = o), f > 3 && (m[3] = r), f > 4 && (m[4] = l), f > 5 && (m[5] = s), f > 6 && (m[6] = a), f > 7 && (m[7] = u), f > 8 && (m[8] = c), f > 9 && (m[9] = d);
                                            break;
                                        case 64:
                                            m = {}, f > 0 && (m[h[0].name] = n), f > 1 && (m[h[1].name] = i), f > 2 && (m[h[2].name] = o), f > 3 && (m[h[3].name] = r), f > 4 && (m[h[4].name] = l), f > 5 && (m[h[5].name] = s), f > 6 && (m[h[6].name] = a), f > 7 && (m[h[7].name] = u), f > 8 && (m[h[8].name] = c), f > 9 && (m[h[9].name] = d);
                                            break;
                                        case 128:
                                            var v = n;
                                            switch (f) {
                                                case 1:
                                                    m = v.transform(n);
                                                    break;
                                                case 2:
                                                    m = v.transform(i);
                                                    break;
                                                case 3:
                                                    m = v.transform(i, o);
                                                    break;
                                                case 4:
                                                    m = v.transform(i, o, r);
                                                    break;
                                                case 5:
                                                    m = v.transform(i, o, r, l);
                                                    break;
                                                case 6:
                                                    m = v.transform(i, o, r, l, s);
                                                    break;
                                                case 7:
                                                    m = v.transform(i, o, r, l, s, a);
                                                    break;
                                                case 8:
                                                    m = v.transform(i, o, r, l, s, a, u);
                                                    break;
                                                case 9:
                                                    m = v.transform(i, o, r, l, s, a, u, c);
                                                    break;
                                                case 10:
                                                    m = v.transform(i, o, r, l, s, a, u, c, d)
                                            }
                                    }
                                    g.value = m
                                }
                                return p
                            }(t, e, n, i, o, r, l, s, a, u, c, d);
                        default:
                            throw "unreachable"
                    }
                }(t, e, i, o, r, l, s, a, u, c, d, h) : function(t, e, n) {
                    switch (201347067 & e.flags) {
                        case 1:
                            return function(t, e, n) { for (var i = !1, o = 0; o < n.length; o++) Rn(t, e, o, n[o]) && (i = !0); return i }(t, e, n);
                        case 2:
                            return function(t, e, n) {
                                for (var i = e.bindings, o = !1, r = 0; r < n.length; r++) an(t, e, r, n[r]) && (o = !0);
                                if (o) {
                                    var l = "";
                                    for (r = 0; r < n.length; r++) l += Yi(n[r], i[r]);
                                    l = e.text.prefix + l;
                                    var s = He(t, e.nodeIndex).renderText;
                                    t.renderer.setValue(s, l)
                                }
                                return o
                            }(t, e, n);
                        case 16384:
                            return function(t, e, n) { for (var i = Ge(t, e.nodeIndex), o = i.instance, r = !1, l = void 0, s = 0; s < n.length; s++) sn(t, e, s, n[s]) && (r = !0, l = Di(t, i, e, s, n[s], l)); return l && o.ngOnChanges(l), 65536 & e.flags && Fe(t, 256, e.nodeIndex) && o.ngOnInit(), 262144 & e.flags && o.ngDoCheck(), r }(t, e, n);
                        case 32:
                        case 64:
                        case 128:
                            return function(t, e, n) {
                                for (var i = e.bindings, o = !1, r = 0; r < n.length; r++) an(t, e, r, n[r]) && (o = !0);
                                if (o) {
                                    var l = Ze(t, e.nodeIndex),
                                        s = void 0;
                                    switch (201347067 & e.flags) {
                                        case 32:
                                            s = n;
                                            break;
                                        case 64:
                                            for (s = {}, r = 0; r < n.length; r++) s[i[r].name] = n[r];
                                            break;
                                        case 128:
                                            var a = n[0],
                                                u = n.slice(1);
                                            s = a.transform.apply(a, u)
                                    }
                                    l.value = s
                                }
                                return o
                            }(t, e, n);
                        default:
                            throw "unreachable"
                    }
                }(t, e, i)
            }

            function uo(t) {
                var e = t.def;
                if (4 & e.nodeFlags)
                    for (var n = 0; n < e.nodes.length; n++) {
                        var i = e.nodes[n];
                        if (4 & i.flags) {
                            var o = ze(t, n).template._projectedViews;
                            if (o)
                                for (var r = 0; r < o.length; r++) {
                                    var l = o[r];
                                    l.state |= 32, dn(l, t)
                                }
                        } else 0 == (4 & i.childFlags) && (n += i.childCount)
                    }
            }

            function co(t, e, n, i, o, r, l, s, a, u, c, d, h) {
                return 0 === n ? function(t, e, n, i, o, r, l, s, a, u, c, d) {
                    var h = e.bindings.length;
                    h > 0 && un(t, e, 0, n), h > 1 && un(t, e, 1, i), h > 2 && un(t, e, 2, o), h > 3 && un(t, e, 3, r), h > 4 && un(t, e, 4, l), h > 5 && un(t, e, 5, s), h > 6 && un(t, e, 6, a), h > 7 && un(t, e, 7, u), h > 8 && un(t, e, 8, c), h > 9 && un(t, e, 9, d)
                }(t, e, i, o, r, l, s, a, u, c, d, h) : function(t, e, n) { for (var i = 0; i < n.length; i++) un(t, e, i, n[i]) }(t, e, i), !1
            }

            function ho(t, e) { if (qe(t, e.nodeIndex).dirty) throw Qe(We.createDebugContext(t, e.nodeIndex), "Query " + e.query.id + " not dirty", "Query " + e.query.id + " dirty", 0 != (1 & t.state)) }

            function po(t) {
                if (!(128 & t.state)) {
                    if (mo(t, fo.Destroy), go(t, fo.Destroy), Ni(t, 131072), t.disposables)
                        for (var e = 0; e < t.disposables.length; e++) t.disposables[e]();
                    ! function(t) {
                        if (16 & t.state) {
                            var e = pn(t);
                            if (e) {
                                var n = e.template._projectedViews;
                                n && (Kn(n, n.indexOf(t)), We.dirtyParentQueries(t))
                            }
                        }
                    }(t), t.renderer.destroyNode && function(t) {
                        for (var e = t.def.nodes.length, n = 0; n < e; n++) {
                            var i = t.def.nodes[n];
                            1 & i.flags ? t.renderer.destroyNode(ze(t, n).renderElement) : 2 & i.flags ? t.renderer.destroyNode(He(t, n).renderText) : (67108864 & i.flags || 134217728 & i.flags) && qe(t, n).destroy()
                        }
                    }(t), mn(t) && t.renderer.destroy(), t.state |= 128
                }
            }
            var fo = function() { var t = { CreateViewNodes: 0, CheckNoChanges: 1, CheckNoChangesProjectedViews: 2, CheckAndUpdate: 3, CheckAndUpdateProjectedViews: 4, Destroy: 5 }; return t[t.CreateViewNodes] = "CreateViewNodes", t[t.CheckNoChanges] = "CheckNoChanges", t[t.CheckNoChangesProjectedViews] = "CheckNoChangesProjectedViews", t[t.CheckAndUpdate] = "CheckAndUpdate", t[t.CheckAndUpdateProjectedViews] = "CheckAndUpdateProjectedViews", t[t.Destroy] = "Destroy", t }();

            function go(t, e) {
                var n = t.def;
                if (33554432 & n.nodeFlags)
                    for (var i = 0; i < n.nodes.length; i++) {
                        var o = n.nodes[i];
                        33554432 & o.flags ? vo(ze(t, i).componentView, e) : 0 == (33554432 & o.childFlags) && (i += o.childCount)
                    }
            }

            function mo(t, e) {
                var n = t.def;
                if (16777216 & n.nodeFlags)
                    for (var i = 0; i < n.nodes.length; i++) {
                        var o = n.nodes[i];
                        if (16777216 & o.flags)
                            for (var r = ze(t, i).viewContainer._embeddedViews, l = 0; l < r.length; l++) vo(r[l], e);
                        else 0 == (16777216 & o.childFlags) && (i += o.childCount)
                    }
            }

            function vo(t, e) {
                var n = t.state;
                switch (e) {
                    case fo.CheckNoChanges:
                        0 == (128 & n) && (12 == (12 & n) ? lo(t) : 64 & n && yo(t, fo.CheckNoChangesProjectedViews));
                        break;
                    case fo.CheckNoChangesProjectedViews:
                        0 == (128 & n) && (32 & n ? lo(t) : 64 & n && yo(t, e));
                        break;
                    case fo.CheckAndUpdate:
                        0 == (128 & n) && (12 == (12 & n) ? so(t) : 64 & n && yo(t, fo.CheckAndUpdateProjectedViews));
                        break;
                    case fo.CheckAndUpdateProjectedViews:
                        0 == (128 & n) && (32 & n ? so(t) : 64 & n && yo(t, e));
                        break;
                    case fo.Destroy:
                        po(t);
                        break;
                    case fo.CreateViewNodes:
                        ro(t)
                }
            }

            function yo(t, e) { mo(t, e), go(t, e) }

            function wo(t, e, n, i) {
                if (t.def.nodeFlags & e && t.def.nodeFlags & n)
                    for (var o = t.def.nodes.length, r = 0; r < o; r++) {
                        var l = t.def.nodes[r];
                        if (l.flags & e && l.flags & n) switch (We.setCurrentNode(t, l.nodeIndex), i) {
                            case 0:
                                $i(t, l);
                                break;
                            case 1:
                                ho(t, l)
                        }
                        l.childFlags & e && l.childFlags & n || (r += l.childCount)
                    }
            }
            var bo = !1;

            function _o(t, e, n, i, o, r) { return eo(ko(t, o, o.injector.get(Jt), e, n), i, r) }

            function Co(t, e, n, i, o, r) {
                var l = o.injector.get(Jt),
                    s = ko(t, o, new nr(l), e, n),
                    a = Po(i);
                return tr($o.create, eo, null, [s, a, r])
            }

            function ko(t, e, n, i, o) {
                var r = e.injector.get(Ue),
                    l = e.injector.get(J);
                return { ngModule: e, injector: t, projectableNodes: i, selectorOrNode: o, sanitizer: r, rendererFactory: n, renderer: n.createRenderer(null, null), errorHandler: l }
            }

            function xo(t, e, n, i) { var o = Po(n); return tr($o.create, to, null, [t, e, o, i]) }

            function To(t, e, n, i) { return n = So.get(e.element.componentProvider.provider.token) || Po(n), tr($o.create, no, null, [t, e, n, i]) }

            function Io(t, e, n, i) {
                return pi(t, e, n, function(t) {
                    var e = function(t) {
                            var e = !1,
                                n = !1;
                            return 0 === Eo.size ? { hasOverrides: e, hasDeprecatedOverrides: n } : (t.providers.forEach(function(t) {
                                var i = Eo.get(t.token);
                                3840 & t.flags && i && (e = !0, n = n || i.deprecatedBehavior)
                            }), { hasOverrides: e, hasDeprecatedOverrides: n })
                        }(t),
                        n = e.hasDeprecatedOverrides;
                    return e.hasOverrides ? (function(t) {
                        for (var e = 0; e < t.providers.length; e++) {
                            var i = t.providers[e];
                            n && (i.flags |= 4096);
                            var o = Eo.get(i.token);
                            o && (i.flags = -3841 & i.flags | o.flags, i.deps = bn(o.deps), i.value = o.value)
                        }
                    }(t = t.factory(function() { return Xe })), t) : t
                }(i))
            }
            var Eo = new Map,
                So = new Map;

            function Mo(t) { Eo.set(t.token, t) }

            function Oo(t, e) {
                var n = kn(kn(e.viewDefFactory).nodes[0].element.componentView);
                So.set(t, n)
            }

            function Ao() { Eo.clear(), So.clear() }

            function Po(t) {
                if (0 === Eo.size) return t;
                var e = function(t) {
                    for (var e = [], n = null, i = 0; i < t.nodes.length; i++) {
                        var o = t.nodes[i];
                        1 & o.flags && (n = o), n && 3840 & o.flags && Eo.has(o.provider.token) && (e.push(n.nodeIndex), n = null)
                    }
                    return e
                }(t);
                if (0 === e.length) return t;
                t = t.factory(function() { return Xe });
                for (var n = 0; n < e.length; n++) i(t, e[n]);
                return t;

                function i(t, e) {
                    for (var n = e + 1; n < t.nodes.length; n++) {
                        var i = t.nodes[n];
                        if (1 & i.flags) return;
                        if (3840 & i.flags) {
                            var o = i.provider,
                                r = Eo.get(o.token);
                            r && (i.flags = -3841 & i.flags | r.flags, o.deps = bn(r.deps), o.value = r.value)
                        }
                    }
                }
            }

            function Lo(t, e, n, i, o, r, l, s, a, u, c, d, h) { var p = t.def.nodes[e]; return ao(t, p, n, i, o, r, l, s, a, u, c, d, h), 224 & p.flags ? Ze(t, e).value : void 0 }

            function Vo(t, e, n, i, o, r, l, s, a, u, c, d, h) { var p = t.def.nodes[e]; return co(t, p, n, i, o, r, l, s, a, u, c, d, h), 224 & p.flags ? Ze(t, e).value : void 0 }

            function Do(t) { return tr($o.detectChanges, so, null, [t]) }

            function No(t) { return tr($o.checkNoChanges, lo, null, [t]) }

            function Bo(t) { return tr($o.destroy, po, null, [t]) }
            var jo, Ro, Uo, $o = function() { var t = { create: 0, detectChanges: 1, checkNoChanges: 2, destroy: 3, handleEvent: 4 }; return t[t.create] = "create", t[t.detectChanges] = "detectChanges", t[t.checkNoChanges] = "checkNoChanges", t[t.destroy] = "destroy", t[t.handleEvent] = "handleEvent", t }();

            function Fo(t, e) { Ro = t, Uo = e }

            function Ho(t, e, n, i) { return Fo(t, e), tr($o.handleEvent, t.def.handleEvent, null, [t, e, n, i]) }

            function zo(t, e) { if (128 & t.state) throw Ke($o[jo]); return Fo(t, Yo(t, 0)), t.def.updateDirectives(function(t, n, i) { for (var o = [], r = 3; r < arguments.length; r++) o[r - 3] = arguments[r]; var l = t.def.nodes[n]; return 0 === e ? Zo(t, l, i, o) : qo(t, l, i, o), 16384 & l.flags && Fo(t, Yo(t, n)), 224 & l.flags ? Ze(t, l.nodeIndex).value : void 0 }, t) }

            function Go(t, e) { if (128 & t.state) throw Ke($o[jo]); return Fo(t, Ko(t, 0)), t.def.updateRenderer(function(t, n, i) { for (var o = [], r = 3; r < arguments.length; r++) o[r - 3] = arguments[r]; var l = t.def.nodes[n]; return 0 === e ? Zo(t, l, i, o) : qo(t, l, i, o), 3 & l.flags && Fo(t, Ko(t, n)), 224 & l.flags ? Ze(t, l.nodeIndex).value : void 0 }, t) }

            function Zo(t, e, n, i) {
                if (ao.apply(void 0, [t, e, n].concat(i))) {
                    var o = 1 === n ? i[0] : i;
                    if (16384 & e.flags) {
                        for (var r = {}, l = 0; l < e.bindings.length; l++) {
                            var s = e.bindings[l],
                                a = o[l];
                            8 & s.flags && (r[(h = s.nonMinifiedName, "ng-reflect-" + (h = h.replace(/[$@]/g, "_").replace(Wo, function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return "-" + t[1].toLowerCase() })))] = Qo(a))
                        }
                        var u = e.parent,
                            c = ze(t, u.nodeIndex).renderElement;
                        if (u.element.name)
                            for (var d in r) null != (a = r[d]) ? t.renderer.setAttribute(c, d, a) : t.renderer.removeAttribute(c, d);
                        else t.renderer.setValue(c, "bindings=" + JSON.stringify(r, null, 2))
                    }
                }
                var h
            }

            function qo(t, e, n, i) { co.apply(void 0, [t, e, n].concat(i)) }
            var Wo = /([A-Z])/g;

            function Qo(t) { try { return null != t ? t.toString().slice(0, 30) : t } catch (t) { return "[ERROR] Exception while trying to serialize the value" } }

            function Yo(t, e) { for (var n = e; n < t.def.nodes.length; n++) { var i = t.def.nodes[n]; if (16384 & i.flags && i.bindings && i.bindings.length) return n } return null }

            function Ko(t, e) { for (var n = e; n < t.def.nodes.length; n++) { var i = t.def.nodes[n]; if (3 & i.flags && i.bindings && i.bindings.length) return n } return null }
            var Xo = function() {
                function t(t, e) {
                    this.view = t, this.nodeIndex = e, null == e && (this.nodeIndex = e = 0), this.nodeDef = t.def.nodes[e];
                    for (var n = this.nodeDef, i = t; n && 0 == (1 & n.flags);) n = n.parent;
                    if (!n)
                        for (; !n && i;) n = fn(i), i = i.parent;
                    this.elDef = n, this.elView = i
                }
                return Object.defineProperty(t.prototype, "elOrCompView", { get: function() { return ze(this.elView, this.elDef.nodeIndex).componentView || this.view }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "injector", { get: function() { return ai(this.elView, this.elDef) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "component", { get: function() { return this.elOrCompView.component }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "context", { get: function() { return this.elOrCompView.context }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "providerTokens", {
                    get: function() {
                        var t = [];
                        if (this.elDef)
                            for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                                var n = this.elView.def.nodes[e];
                                20224 & n.flags && t.push(n.provider.token), e += n.childCount
                            }
                        return t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "references", {
                    get: function() {
                        var t = {};
                        if (this.elDef) {
                            Jo(this.elView, this.elDef, t);
                            for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                                var n = this.elView.def.nodes[e];
                                20224 & n.flags && Jo(this.elView, n, t), e += n.childCount
                            }
                        }
                        return t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "componentRenderElement", { get: function() { var t = function(t) { for (; t && !mn(t);) t = t.parent; return t.parent ? ze(t.parent, fn(t).nodeIndex) : null }(this.elOrCompView); return t ? t.renderElement : void 0 }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "renderNode", { get: function() { return 2 & this.nodeDef.flags ? gn(this.view, this.nodeDef) : gn(this.elView, this.elDef) }, enumerable: !0, configurable: !0 }), t.prototype.logError = function(t) {
                    for (var e, n, i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
                    2 & this.nodeDef.flags ? (e = this.view.def, n = this.nodeDef.nodeIndex) : (e = this.elView.def, n = this.elDef.nodeIndex);
                    var r = function(t, e) { for (var n = -1, i = 0; i <= e; i++) 3 & t.nodes[i].flags && n++; return n }(e, n),
                        l = -1;
                    e.factory(function() { return ++l === r ? (e = t.error).bind.apply(e, [t].concat(i)) : Xe; var e }), l < r && (t.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), t.error.apply(t, i))
                }, t
            }();

            function Jo(t, e, n) { for (var i in e.references) n[i] = Hi(t, e, e.references[i]) }

            function tr(t, e, n, i) {
                var o = jo,
                    r = Ro,
                    l = Uo;
                try { jo = t; var s = e.apply(n, i); return Ro = r, Uo = l, jo = o, s } catch (t) {
                    if (Y(t) || !Ro) throw t;
                    throw

                    function(t, e) { return t instanceof Error || (t = new Error(t.toString())), Ye(t, e), t }(t, er())
                }
            }

            function er() { return Ro ? new Xo(Ro, Uo) : null }
            var nr = function() {
                    function t(t) { this.delegate = t }
                    return t.prototype.createRenderer = function(t, e) { return new ir(this.delegate.createRenderer(t, e)) }, t.prototype.begin = function() { this.delegate.begin && this.delegate.begin() }, t.prototype.end = function() { this.delegate.end && this.delegate.end() }, t.prototype.whenRenderingDone = function() { return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null) }, t
                }(),
                ir = function() {
                    function t(t) { this.delegate = t, this.data = this.delegate.data }
                    return t.prototype.destroyNode = function(t) {! function(t) { ce.delete(t.nativeNode) }(de(t)), this.delegate.destroyNode && this.delegate.destroyNode(t) }, t.prototype.destroy = function() { this.delegate.destroy() }, t.prototype.createElement = function(t, e) {
                        var n = this.delegate.createElement(t, e),
                            i = er();
                        if (i) {
                            var o = new se(n, null, i);
                            o.name = t, he(o)
                        }
                        return n
                    }, t.prototype.createComment = function(t) {
                        var e = this.delegate.createComment(t),
                            n = er();
                        return n && he(new le(e, null, n)), e
                    }, t.prototype.createText = function(t) {
                        var e = this.delegate.createText(t),
                            n = er();
                        return n && he(new le(e, null, n)), e
                    }, t.prototype.appendChild = function(t, e) {
                        var n = de(t),
                            i = de(e);
                        n && i && n instanceof se && n.addChild(i), this.delegate.appendChild(t, e)
                    }, t.prototype.insertBefore = function(t, e, n) {
                        var i = de(t),
                            o = de(e),
                            r = de(n);
                        i && o && i instanceof se && i.insertBefore(r, o), this.delegate.insertBefore(t, e, n)
                    }, t.prototype.removeChild = function(t, e) {
                        var n = de(t),
                            i = de(e);
                        n && i && n instanceof se && n.removeChild(i), this.delegate.removeChild(t, e)
                    }, t.prototype.selectRootElement = function(t) {
                        var e = this.delegate.selectRootElement(t),
                            n = er();
                        return n && he(new se(e, null, n)), e
                    }, t.prototype.setAttribute = function(t, e, n, i) {
                        var o = de(t);
                        o && o instanceof se && (o.attributes[i ? i + ":" + e : e] = n), this.delegate.setAttribute(t, e, n, i)
                    }, t.prototype.removeAttribute = function(t, e, n) {
                        var i = de(t);
                        i && i instanceof se && (i.attributes[n ? n + ":" + e : e] = null), this.delegate.removeAttribute(t, e, n)
                    }, t.prototype.addClass = function(t, e) {
                        var n = de(t);
                        n && n instanceof se && (n.classes[e] = !0), this.delegate.addClass(t, e)
                    }, t.prototype.removeClass = function(t, e) {
                        var n = de(t);
                        n && n instanceof se && (n.classes[e] = !1), this.delegate.removeClass(t, e)
                    }, t.prototype.setStyle = function(t, e, n, i) {
                        var o = de(t);
                        o && o instanceof se && (o.styles[e] = n), this.delegate.setStyle(t, e, n, i)
                    }, t.prototype.removeStyle = function(t, e, n) {
                        var i = de(t);
                        i && i instanceof se && (i.styles[e] = null), this.delegate.removeStyle(t, e, n)
                    }, t.prototype.setProperty = function(t, e, n) {
                        var i = de(t);
                        i && i instanceof se && (i.properties[e] = n), this.delegate.setProperty(t, e, n)
                    }, t.prototype.listen = function(t, e, n) {
                        if ("string" != typeof t) {
                            var i = de(t);
                            i && i.listeners.push(new function(t, e) { this.name = t, this.callback = e }(e, n))
                        }
                        return this.delegate.listen(t, e, n)
                    }, t.prototype.parentNode = function(t) { return this.delegate.parentNode(t) }, t.prototype.nextSibling = function(t) { return this.delegate.nextSibling(t) }, t.prototype.setValue = function(t, e) { return this.delegate.setValue(t, e) }, t
                }();

            function or(t, e, n) { return new lr(t, e, n) }
            var rr, lr = function(t) {
                function e(e, n, i) { var o = t.call(this) || this; return o.moduleType = e, o._bootstrapComponents = n, o._ngModuleDefFactory = i, o }
                return Object(i.b)(e, t), e.prototype.create = function(t) {
                    ! function() {
                        if (!bo) {
                            bo = !0;
                            var t = Gt() ? { setCurrentNode: Fo, createRootView: Co, createEmbeddedView: xo, createComponentView: To, createNgModuleRef: Io, overrideProvider: Mo, overrideComponentView: Oo, clearOverrides: Ao, checkAndUpdateView: Do, checkNoChangesView: No, destroyView: Bo, createDebugContext: function(t, e) { return new Xo(t, e) }, handleEvent: Ho, updateDirectives: zo, updateRenderer: Go } : { setCurrentNode: function() {}, createRootView: _o, createEmbeddedView: to, createComponentView: no, createNgModuleRef: pi, overrideProvider: Xe, overrideComponentView: Xe, clearOverrides: Xe, checkAndUpdateView: so, checkNoChangesView: lo, destroyView: po, createDebugContext: function(t, e) { return new Xo(t, e) }, handleEvent: function(t, e, n, i) { return t.def.handleEvent(t, e, n, i) }, updateDirectives: function(t, e) { return t.def.updateDirectives(0 === e ? Lo : Vo, t) }, updateRenderer: function(t, e) { return t.def.updateRenderer(0 === e ? Lo : Vo, t) } };
                            We.setCurrentNode = t.setCurrentNode, We.createRootView = t.createRootView, We.createEmbeddedView = t.createEmbeddedView, We.createComponentView = t.createComponentView, We.createNgModuleRef = t.createNgModuleRef, We.overrideProvider = t.overrideProvider, We.overrideComponentView = t.overrideComponentView, We.clearOverrides = t.clearOverrides, We.checkAndUpdateView = t.checkAndUpdateView, We.checkNoChangesView = t.checkNoChangesView, We.destroyView = t.destroyView, We.resolveDep = Li, We.createDebugContext = t.createDebugContext, We.handleEvent = t.handleEvent, We.updateDirectives = t.updateDirectives, We.updateRenderer = t.updateRenderer, We.dirtyParentQueries = Ui
                        }
                    }();
                    var e = kn(this._ngModuleDefFactory);
                    return We.createNgModuleRef(this.moduleType, t || L.NULL, this._bootstrapComponents, e)
                }, e
            }(function() {});
            "undefined" == typeof ngDevMode && ("undefined" != typeof window && (window.ngDevMode = !0), "undefined" != typeof self && (self.ngDevMode = !0), "undefined" != typeof t && (t.ngDevMode = !0)), rr = function(t, e, n) { return { parent: rr, id: null, node: null, data: [], ngStaticData: [], cleanup: null, renderer: null, child: null, tail: null, next: null, bindingStartIndex: null, creationMode: !0, viewHookStartIndex: null } }()
        }).call(e, n("DuR2"))
    },
    YaPU: function(t, e, n) {
        "use strict";
        var i = n("AMGY"),
            o = n("OVmG"),
            r = n("tLDX"),
            l = n("t7NR"),
            s = n("+CnV");
        n.d(e, "a", function() { return a });
        var a = function() {
            function t(t) { this._isScalar = !1, t && (this._subscribe = t) }
            return t.prototype.lift = function(e) { var n = new t; return n.source = this, n.operator = e, n }, t.prototype.subscribe = function(t, e, n) {
                var i = this.operator,
                    s = function(t, e, n) { if (t) { if (t instanceof o.a) return t; if (t[r.a]) return t[r.a]() } return t || e || n ? new o.a(t, e, n) : new o.a(l.a) }(t, e, n);
                if (i ? i.call(s, this.source) : s.add(this.source || !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown)) throw s.syncErrorValue;
                return s
            }, t.prototype._trySubscribe = function(t) { try { return this._subscribe(t) } catch (e) { t.syncErrorThrown = !0, t.syncErrorValue = e, t.error(e) } }, t.prototype.forEach = function(t, e) {
                var n = this;
                if (e || (i.a.Rx && i.a.Rx.config && i.a.Rx.config.Promise ? e = i.a.Rx.config.Promise : i.a.Promise && (e = i.a.Promise)), !e) throw new Error("no Promise impl found");
                return new e(function(e, i) {
                    var o;
                    o = n.subscribe(function(e) { if (o) try { t(e) } catch (t) { i(t), o.unsubscribe() } else t(e) }, i, e)
                })
            }, t.prototype._subscribe = function(t) { return this.source.subscribe(t) }, t.prototype[s.a] = function() { return this }, t.prototype.pipe = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e]; return 0 === t.length ? this : ((n = t) ? 1 === n.length ? n[0] : function(t) { return n.reduce(function(t, e) { return e(t) }, t) } : function() {})(this); var n }, t.prototype.toPromise = function(t) {
                var e = this;
                if (t || (i.a.Rx && i.a.Rx.config && i.a.Rx.config.Promise ? t = i.a.Rx.config.Promise : i.a.Promise && (t = i.a.Promise)), !t) throw new Error("no Promise impl found");
                return new t(function(t, n) {
                    var i;
                    e.subscribe(function(t) { return i = t }, function(t) { return n(t) }, function() { return t(i) })
                })
            }, t.create = function(e) { return new t(e) }, t
        }()
    },
    dgOU: function(t, e, n) {
        "use strict";
        e.a = function(t) { return null != t && "object" == typeof t }
    },
    fKB6: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() { return i });
        var i = { e: {} }
    },
    g5jc: function(t, e, n) {
        "use strict";
        var i = n("TToO"),
            o = n("YaPU"),
            r = n("OVmG"),
            l = n("VwZZ"),
            s = n("x6VL"),
            a = function(t) {
                function e(e, n) { t.call(this), this.subject = e, this.subscriber = n, this.closed = !1 }
                return Object(i.b)(e, t), e.prototype.unsubscribe = function() {
                    if (!this.closed) {
                        this.closed = !0;
                        var t = this.subject,
                            e = t.observers;
                        if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) { var n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1) }
                    }
                }, e
            }(l.a),
            u = n("tLDX");
        n.d(e, "b", function() { return c }), n.d(e, "a", function() { return d });
        var c = function(t) {
                function e(e) { t.call(this, e), this.destination = e }
                return Object(i.b)(e, t), e
            }(r.a),
            d = function(t) {
                function e() { t.call(this), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null }
                return Object(i.b)(e, t), e.prototype[u.a] = function() { return new c(this) }, e.prototype.lift = function(t) { var e = new h(this, this); return e.operator = t, e }, e.prototype.next = function(t) {
                    if (this.closed) throw new s.a;
                    if (!this.isStopped)
                        for (var e = this.observers, n = e.length, i = e.slice(), o = 0; o < n; o++) i[o].next(t)
                }, e.prototype.error = function(t) {
                    if (this.closed) throw new s.a;
                    this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                    for (var e = this.observers, n = e.length, i = e.slice(), o = 0; o < n; o++) i[o].error(t);
                    this.observers.length = 0
                }, e.prototype.complete = function() {
                    if (this.closed) throw new s.a;
                    this.isStopped = !0;
                    for (var t = this.observers, e = t.length, n = t.slice(), i = 0; i < e; i++) n[i].complete();
                    this.observers.length = 0
                }, e.prototype.unsubscribe = function() { this.isStopped = !0, this.closed = !0, this.observers = null }, e.prototype._trySubscribe = function(e) { if (this.closed) throw new s.a; return t.prototype._trySubscribe.call(this, e) }, e.prototype._subscribe = function(t) { if (this.closed) throw new s.a; return this.hasError ? (t.error(this.thrownError), l.a.EMPTY) : this.isStopped ? (t.complete(), l.a.EMPTY) : (this.observers.push(t), new a(this, t)) }, e.prototype.asObservable = function() { var t = new o.a; return t.source = this, t }, e.create = function(t, e) { return new h(t, e) }, e
            }(o.a),
            h = function(t) {
                function e(e, n) { t.call(this), this.destination = e, this.source = n }
                return Object(i.b)(e, t), e.prototype.next = function(t) {
                    var e = this.destination;
                    e && e.next && e.next(t)
                }, e.prototype.error = function(t) {
                    var e = this.destination;
                    e && e.error && this.destination.error(t)
                }, e.prototype.complete = function() {
                    var t = this.destination;
                    t && t.complete && this.destination.complete()
                }, e.prototype._subscribe = function(t) { return this.source ? this.source.subscribe(t) : l.a.EMPTY }, e
            }(d)
    },
    t7NR: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() { return i });
        var i = { closed: !0, next: function(t) {}, error: function(t) { throw t }, complete: function() {} }
    },
    tLDX: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() { return o });
        var i = n("AMGY").a.Symbol,
            o = "function" == typeof i && "function" == typeof i.for ? i.for("rxSubscriber") : "@@rxSubscriber"
    },
    tZ2B: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() { return o });
        var i = n("TToO"),
            o = function(t) {
                function e() { t.apply(this, arguments) }
                return Object(i.b)(e, t), e.prototype.notifyNext = function(t, e, n, i, o) { this.destination.next(e) }, e.prototype.notifyError = function(t, e) { this.destination.error(t) }, e.prototype.notifyComplete = function(t) { this.destination.complete() }, e
            }(n("OVmG").a)
    },
    x6VL: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() { return o });
        var i = n("TToO"),
            o = function(t) {
                function e() {
                    var e = t.call(this, "object unsubscribed");
                    this.name = e.name = "ObjectUnsubscribedError", this.stack = e.stack, this.message = e.message
                }
                return Object(i.b)(e, t), e
            }(Error)
    }
}, [0]);