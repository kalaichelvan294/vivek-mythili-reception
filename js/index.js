var Cl = Object.defineProperty;
var Ol = (s, t, i) => t in s ? Cl(s, t, {enumerable: !0, configurable: !0, writable: !0, value: i}) : s[t] = i;
var R = (s, t, i) => Ol(s, typeof t != "symbol" ? t + "" : t, i);
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) e(r);
    new MutationObserver(r => {
        for (const n of r) if (n.type === "childList") for (const o of n.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && e(o)
    }).observe(document, {childList: !0, subtree: !0});

    function i(r) {
        const n = {};
        return r.integrity && (n.integrity = r.integrity), r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? n.credentials = "include" : r.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
    }

    function e(r) {
        if (r.ep) return;
        r.ep = !0;
        const n = i(r);
        fetch(r.href, n)
    }
})();

function ni(s) {
    if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s
}

function Jo(s, t) {
    s.prototype = Object.create(t.prototype), s.prototype.constructor = s, s.__proto__ = t
}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Pe = {autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: {lineHeight: ""}},
    vr = {duration: .5, overwrite: !1, delay: 0}, Ws, Xt, ct, Re = 1e8, rt = 1 / Re, gs = Math.PI * 2, Ml = gs / 4,
    Dl = 0, ta = Math.sqrt, Rl = Math.cos, Al = Math.sin, zt = function (t) {
        return typeof t == "string"
    }, mt = function (t) {
        return typeof t == "function"
    }, ui = function (t) {
        return typeof t == "number"
    }, Bs = function (t) {
        return typeof t > "u"
    }, Qe = function (t) {
        return typeof t == "object"
    }, ce = function (t) {
        return t !== !1
    }, Vs = function () {
        return typeof window < "u"
    }, _n = function (t) {
        return mt(t) || zt(t)
    }, ea = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () {
    }, Zt = Array.isArray, ms = /(?:-?\.?\d|\.)+/gi, ia = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    cr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, es = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ra = /[+-]=-?[.\d]+/,
    na = /[^,'"\[\]\s]+/gi, Ll = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ht, qe, ys, Hs, ke = {}, In = {}, sa,
    oa = function (t) {
        return (In = wr(t, ke)) && pe
    }, Us = function (t, i) {
        return console.warn("Invalid property", t, "set to", i, "Missing plugin? gsap.registerPlugin()")
    }, tn = function (t, i) {
        return !i && console.warn(t)
    }, aa = function (t, i) {
        return t && (ke[t] = i) && In && (In[t] = i) || ke
    }, en = function () {
        return 0
    }, zl = {suppressEvents: !0, isStart: !0, kill: !1}, Cn = {suppressEvents: !0, kill: !1}, Nl = {suppressEvents: !0},
    qs = {}, Si = [], vs = {}, la, we = {}, is = {}, _o = 30, On = [], $s = "", Gs = function (t) {
        var i = t[0], e, r;
        if (Qe(i) || mt(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = On.length; r-- && !On[r].targetTest(i);) ;
            e = On[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Ra(t[r], e))) || t.splice(r, 1);
        return t
    }, Hi = function (t) {
        return t._gsap || Gs(Ae(t))[0]._gsap
    }, ua = function (t, i, e) {
        return (e = t[i]) && mt(e) ? t[i]() : Bs(e) && t.getAttribute && t.getAttribute(i) || e
    }, fe = function (t, i) {
        return (t = t.split(",")).forEach(i) || t
    }, xt = function (t) {
        return Math.round(t * 1e5) / 1e5 || 0
    }, Et = function (t) {
        return Math.round(t * 1e7) / 1e7 || 0
    }, dr = function (t, i) {
        var e = i.charAt(0), r = parseFloat(i.substr(2));
        return t = parseFloat(t), e === "+" ? t + r : e === "-" ? t - r : e === "*" ? t * r : t / r
    }, Fl = function (t, i) {
        for (var e = i.length, r = 0; t.indexOf(i[r]) < 0 && ++r < e;) ;
        return r < e
    }, Yn = function () {
        var t = Si.length, i = Si.slice(0), e, r;
        for (vs = {}, Si.length = 0, e = 0; e < t; e++) r = i[e], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
    }, Ks = function (t) {
        return !!(t._initted || t._startAt || t.add)
    }, ca = function (t, i, e, r) {
        Si.length && !Xt && Yn(), t.render(i, e, !!(Xt && i < 0 && Ks(t))), Si.length && !Xt && Yn()
    }, fa = function (t) {
        var i = parseFloat(t);
        return (i || i === 0) && (t + "").match(na).length < 2 ? i : zt(t) ? t.trim() : t
    }, ha = function (t) {
        return t
    }, Ee = function (t, i) {
        for (var e in i) e in t || (t[e] = i[e]);
        return t
    }, Il = function (t) {
        return function (i, e) {
            for (var r in e) r in i || r === "duration" && t || r === "ease" || (i[r] = e[r])
        }
    }, wr = function (t, i) {
        for (var e in i) t[e] = i[e];
        return t
    }, go = function s(t, i) {
        for (var e in i) e !== "__proto__" && e !== "constructor" && e !== "prototype" && (t[e] = Qe(i[e]) ? s(t[e] || (t[e] = {}), i[e]) : i[e]);
        return t
    }, Xn = function (t, i) {
        var e = {}, r;
        for (r in t) r in i || (e[r] = t[r]);
        return e
    }, Wr = function (t) {
        var i = t.parent || ht, e = t.keyframes ? Il(Zt(t.keyframes)) : Ee;
        if (ce(t.inherit)) for (; i;) e(t, i.vars.defaults), i = i.parent || i._dp;
        return t
    }, Yl = function (t, i) {
        for (var e = t.length, r = e === i.length; r && e-- && t[e] === i[e];) ;
        return e < 0
    }, da = function (t, i, e, r, n) {
        var o = t[r], a;
        if (n) for (a = i[n]; o && o[n] > a;) o = o._prev;
        return o ? (i._next = o._next, o._next = i) : (i._next = t[e], t[e] = i), i._next ? i._next._prev = i : t[r] = i, i._prev = o, i.parent = i._dp = t, i
    }, Zn = function (t, i, e, r) {
        e === void 0 && (e = "_first"), r === void 0 && (r = "_last");
        var n = i._prev, o = i._next;
        n ? n._next = o : t[e] === i && (t[e] = o), o ? o._prev = n : t[r] === i && (t[r] = n), i._next = i._prev = i.parent = null
    }, Ei = function (t, i) {
        t.parent && (!i || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
    }, Ui = function (t, i) {
        if (t && (!i || i._end > t._dur || i._start < 0)) for (var e = t; e;) e._dirty = 1, e = e.parent;
        return t
    }, Xl = function (t) {
        for (var i = t.parent; i && i.parent;) i._dirty = 1, i.totalDuration(), i = i.parent;
        return t
    }, ws = function (t, i, e, r) {
        return t._startAt && (Xt ? t._startAt.revert(Cn) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(i, !0, r))
    }, Wl = function s(t) {
        return !t || t._ts && s(t.parent)
    }, mo = function (t) {
        return t._repeat ? xr(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }, xr = function (t, i) {
        var e = Math.floor(t = Et(t / i));
        return t && e === t ? e - 1 : e
    }, Wn = function (t, i) {
        return (t - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur)
    }, jn = function (t) {
        return t._end = Et(t._start + (t._tDur / Math.abs(t._ts || t._rts || rt) || 0))
    }, Qn = function (t, i) {
        var e = t._dp;
        return e && e.smoothChildTiming && t._ts && (t._start = Et(e._time - (t._ts > 0 ? i / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - i) / -t._ts)), jn(t), e._dirty || Ui(e, t)), t
    }, pa = function (t, i) {
        var e;
        if ((i._time || !i._dur && i._initted || i._start < t._time && (i._dur || !i.add)) && (e = Wn(t.rawTime(), i), (!i._dur || fn(0, i.totalDuration(), e) - i._tTime > rt) && i.render(e, !0)), Ui(t, i)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration()) for (e = t; e._dp;) e.rawTime() >= 0 && e.totalTime(e._tTime), e = e._dp;
            t._zTime = -rt
        }
    }, Ge = function (t, i, e, r) {
        return i.parent && Ei(i), i._start = Et((ui(e) ? e : e || t !== ht ? Oe(t, e, i) : t._time) + i._delay), i._end = Et(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)), da(t, i, "_first", "_last", t._sort ? "_start" : 0), xs(i) || (t._recent = i), r || pa(t, i), t._ts < 0 && Qn(t, t._tTime), t
    }, _a = function (t, i) {
        return (ke.ScrollTrigger || Us("scrollTrigger", i)) && ke.ScrollTrigger.create(i, t)
    }, ga = function (t, i, e, r, n) {
        if (js(t, i, n), !t._initted) return 1;
        if (!e && t._pt && !Xt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && la !== be.frame) return Si.push(t), t._lazy = [n, r], 1
    }, Bl = function s(t) {
        var i = t.parent;
        return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || s(i))
    }, xs = function (t) {
        var i = t.data;
        return i === "isFromStart" || i === "isStart"
    }, Vl = function (t, i, e, r) {
        var n = t.ratio,
            o = i < 0 || !i && (!t._start && Bl(t) && !(!t._initted && xs(t)) || (t._ts < 0 || t._dp._ts < 0) && !xs(t)) ? 0 : 1,
            a = t._rDelay, l = 0, u, c, p;
        if (a && t._repeat && (l = fn(0, t._tDur, i), c = xr(l, a), t._yoyo && c & 1 && (o = 1 - o), c !== xr(t._tTime, a) && (n = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== n || Xt || r || t._zTime === rt || !i && t._zTime) {
            if (!t._initted && ga(t, i, r, e, l)) return;
            for (p = t._zTime, t._zTime = i || (e ? rt : 0), e || (e = i && !p), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = l, u = t._pt; u;) u.r(o, u.d), u = u._next;
            i < 0 && ws(t, i, e, !0), t._onUpdate && !e && Se(t, "onUpdate"), l && t._repeat && !e && t.parent && Se(t, "onRepeat"), (i >= t._tDur || i < 0) && t.ratio === o && (o && Ei(t, 1), !e && !Xt && (Se(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
        } else t._zTime || (t._zTime = i)
    }, Hl = function (t, i, e) {
        var r;
        if (e > i) for (r = t._first; r && r._start <= e;) {
            if (r.data === "isPause" && r._start > i) return r;
            r = r._next
        } else for (r = t._last; r && r._start >= e;) {
            if (r.data === "isPause" && r._start < i) return r;
            r = r._prev
        }
    }, br = function (t, i, e, r) {
        var n = t._repeat, o = Et(i) || 0, a = t._tTime / t._tDur;
        return a && !r && (t._time *= o / t._dur), t._dur = o, t._tDur = n ? n < 0 ? 1e10 : Et(o * (n + 1) + t._rDelay * n) : o, a > 0 && !r && Qn(t, t._tTime = t._tDur * a), t.parent && jn(t), e || Ui(t.parent, t), t
    }, yo = function (t) {
        return t instanceof se ? Ui(t) : br(t, t._dur)
    }, Ul = {_start: 0, endTime: en, totalDuration: en}, Oe = function s(t, i, e) {
        var r = t.labels, n = t._recent || Ul, o = t.duration() >= Re ? n.endTime(!1) : t._dur, a, l, u;
        return zt(i) && (isNaN(i) || i in r) ? (l = i.charAt(0), u = i.substr(-1) === "%", a = i.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (i = i.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (u ? (a < 0 ? n : e).totalDuration() / 100 : 1)) : a < 0 ? (i in r || (r[i] = o), r[i]) : (l = parseFloat(i.charAt(a - 1) + i.substr(a + 1)), u && e && (l = l / 100 * (Zt(e) ? e[0] : e).totalDuration()), a > 1 ? s(t, i.substr(0, a - 1), e) + l : o + l)) : i == null ? o : +i
    }, Br = function (t, i, e) {
        var r = ui(i[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), o = i[n], a, l;
        if (r && (o.duration = i[1]), o.parent = e, t) {
            for (a = o, l = e; l && !("immediateRender" in a);) a = l.vars.defaults || {}, l = ce(l.vars.inherit) && l.parent;
            o.immediateRender = ce(a.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = i[n - 1]
        }
        return new kt(i[0], o, i[n + 1])
    }, Mi = function (t, i) {
        return t || t === 0 ? i(t) : i
    }, fn = function (t, i, e) {
        return e < t ? t : e > i ? i : e
    }, Gt = function (t, i) {
        return !zt(t) || !(i = Ll.exec(t)) ? "" : i[1]
    }, ql = function (t, i, e) {
        return Mi(e, function (r) {
            return fn(t, i, r)
        })
    }, bs = [].slice, ma = function (t, i) {
        return t && Qe(t) && "length" in t && (!i && !t.length || t.length - 1 in t && Qe(t[0])) && !t.nodeType && t !== qe
    }, $l = function (t, i, e) {
        return e === void 0 && (e = []), t.forEach(function (r) {
            var n;
            return zt(r) && !i || ma(r, 1) ? (n = e).push.apply(n, Ae(r)) : e.push(r)
        }) || e
    }, Ae = function (t, i, e) {
        return ct && !i && ct.selector ? ct.selector(t) : zt(t) && !e && (ys || !Tr()) ? bs.call((i || Hs).querySelectorAll(t), 0) : Zt(t) ? $l(t, e) : ma(t) ? bs.call(t, 0) : t ? [t] : []
    }, Ts = function (t) {
        return t = Ae(t)[0] || tn("Invalid scope") || {}, function (i) {
            var e = t.current || t.nativeElement || t;
            return Ae(i, e.querySelectorAll ? e : e === t ? tn("Invalid scope") || Hs.createElement("div") : t)
        }
    }, ya = function (t) {
        return t.sort(function () {
            return .5 - Math.random()
        })
    }, va = function (t) {
        if (mt(t)) return t;
        var i = Qe(t) ? t : {each: t}, e = qi(i.ease), r = i.from || 0, n = parseFloat(i.base) || 0, o = {},
            a = r > 0 && r < 1, l = isNaN(r) || a, u = i.axis, c = r, p = r;
        return zt(r) ? c = p = {
            center: .5,
            edges: .5,
            end: 1
        }[r] || 0 : !a && l && (c = r[0], p = r[1]), function (h, f, _) {
            var d = (_ || i).length, g = o[d], b, w, S, v, T, P, x, C, k;
            if (!g) {
                if (k = i.grid === "auto" ? 0 : (i.grid || [1, Re])[1], !k) {
                    for (x = -Re; x < (x = _[k++].getBoundingClientRect().left) && k < d;) ;
                    k < d && k--
                }
                for (g = o[d] = [], b = l ? Math.min(k, d) * c - .5 : r % k, w = k === Re ? 0 : l ? d * p / k - .5 : r / k | 0, x = 0, C = Re, P = 0; P < d; P++) S = P % k - b, v = w - (P / k | 0), g[P] = T = u ? Math.abs(u === "y" ? v : S) : ta(S * S + v * v), T > x && (x = T), T < C && (C = T);
                r === "random" && ya(g), g.max = x - C, g.min = C, g.v = d = (parseFloat(i.amount) || parseFloat(i.each) * (k > d ? d - 1 : u ? u === "y" ? d / k : k : Math.max(k, d / k)) || 0) * (r === "edges" ? -1 : 1), g.b = d < 0 ? n - d : n, g.u = Gt(i.amount || i.each) || 0, e = e && d < 0 ? Oa(e) : e
            }
            return d = (g[h] - g.min) / g.max || 0, Et(g.b + (e ? e(d) : d) * g.v) + g.u
        }
    }, Ss = function (t) {
        var i = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (e) {
            var r = Et(Math.round(parseFloat(e) / t) * t * i);
            return (r - r % 1) / i + (ui(e) ? 0 : Gt(e))
        }
    }, wa = function (t, i) {
        var e = Zt(t), r, n;
        return !e && Qe(t) && (r = e = t.radius || Re, t.values ? (t = Ae(t.values), (n = !ui(t[0])) && (r *= r)) : t = Ss(t.increment)), Mi(i, e ? mt(t) ? function (o) {
            return n = t(o), Math.abs(n - o) <= r ? n : o
        } : function (o) {
            for (var a = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), u = Re, c = 0, p = t.length, h, f; p--;) n ? (h = t[p].x - a, f = t[p].y - l, h = h * h + f * f) : h = Math.abs(t[p] - a), h < u && (u = h, c = p);
            return c = !r || u <= r ? t[c] : o, n || c === o || ui(o) ? c : c + Gt(o)
        } : Ss(t))
    }, xa = function (t, i, e, r) {
        return Mi(Zt(t) ? !i : e === !0 ? !!(e = 0) : !r, function () {
            return Zt(t) ? t[~~(Math.random() * t.length)] : (e = e || 1e-5) && (r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) && Math.floor(Math.round((t - e / 2 + Math.random() * (i - t + e * .99)) / e) * e * r) / r
        })
    }, Gl = function () {
        for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++) i[e] = arguments[e];
        return function (r) {
            return i.reduce(function (n, o) {
                return o(n)
            }, r)
        }
    }, Kl = function (t, i) {
        return function (e) {
            return t(parseFloat(e)) + (i || Gt(e))
        }
    }, Zl = function (t, i, e) {
        return Ta(t, i, 0, 1, e)
    }, ba = function (t, i, e) {
        return Mi(e, function (r) {
            return t[~~i(r)]
        })
    }, jl = function s(t, i, e) {
        var r = i - t;
        return Zt(t) ? ba(t, s(0, t.length), i) : Mi(e, function (n) {
            return (r + (n - t) % r) % r + t
        })
    }, Ql = function s(t, i, e) {
        var r = i - t, n = r * 2;
        return Zt(t) ? ba(t, s(0, t.length - 1), i) : Mi(e, function (o) {
            return o = (n + (o - t) % n) % n || 0, t + (o > r ? n - o : o)
        })
    }, rn = function (t) {
        for (var i = 0, e = "", r, n, o, a; ~(r = t.indexOf("random(", i));) o = t.indexOf(")", r), a = t.charAt(r + 7) === "[", n = t.substr(r + 7, o - r - 7).match(a ? na : ms), e += t.substr(i, r - i) + xa(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), i = o + 1;
        return e + t.substr(i, t.length - i)
    }, Ta = function (t, i, e, r, n) {
        var o = i - t, a = r - e;
        return Mi(n, function (l) {
            return e + ((l - t) / o * a || 0)
        })
    }, Jl = function s(t, i, e, r) {
        var n = isNaN(t + i) ? 0 : function (f) {
            return (1 - f) * t + f * i
        };
        if (!n) {
            var o = zt(t), a = {}, l, u, c, p, h;
            if (e === !0 && (r = 1) && (e = null), o) t = {p: t}, i = {p: i}; else if (Zt(t) && !Zt(i)) {
                for (c = [], p = t.length, h = p - 2, u = 1; u < p; u++) c.push(s(t[u - 1], t[u]));
                p--, n = function (_) {
                    _ *= p;
                    var d = Math.min(h, ~~_);
                    return c[d](_ - d)
                }, e = i
            } else r || (t = wr(Zt(t) ? [] : {}, t));
            if (!c) {
                for (l in i) Zs.call(a, t, l, "get", i[l]);
                n = function (_) {
                    return to(_, a) || (o ? t.p : t)
                }
            }
        }
        return Mi(e, n)
    }, vo = function (t, i, e) {
        var r = t.labels, n = Re, o, a, l;
        for (o in r) a = r[o] - i, a < 0 == !!e && a && n > (a = Math.abs(a)) && (l = o, n = a);
        return l
    }, Se = function (t, i, e) {
        var r = t.vars, n = r[i], o = ct, a = t._ctx, l, u, c;
        if (n) return l = r[i + "Params"], u = r.callbackScope || t, e && Si.length && Yn(), a && (ct = a), c = l ? n.apply(u, l) : n.call(u), ct = o, c
    }, Lr = function (t) {
        return Ei(t), t.scrollTrigger && t.scrollTrigger.kill(!!Xt), t.progress() < 1 && Se(t, "onInterrupt"), t
    }, fr, Sa = [], Pa = function (t) {
        if (t) if (t = !t.name && t.default || t, Vs() || t.headless) {
            var i = t.name, e = mt(t), r = i && !e && t.init ? function () {
                    this._props = []
                } : t, n = {init: en, render: to, add: Zs, kill: _u, modifier: pu, rawVars: 0},
                o = {targetTest: 0, get: 0, getSetter: Js, aliases: {}, register: 0};
            if (Tr(), t !== r) {
                if (we[i]) return;
                Ee(r, Ee(Xn(t, n), o)), wr(r.prototype, wr(n, Xn(t, o))), we[r.prop = i] = r, t.targetTest && (On.push(r), qs[i] = 1), i = (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) + "Plugin"
            }
            aa(i, r), t.register && t.register(pe, r, he)
        } else Sa.push(t)
    }, it = 255, zr = {
        aqua: [0, it, it],
        lime: [0, it, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, it],
        navy: [0, 0, 128],
        white: [it, it, it],
        olive: [128, 128, 0],
        yellow: [it, it, 0],
        orange: [it, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [it, 0, 0],
        pink: [it, 192, 203],
        cyan: [0, it, it],
        transparent: [it, it, it, 0]
    }, rs = function (t, i, e) {
        return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? i + (e - i) * t * 6 : t < .5 ? e : t * 3 < 2 ? i + (e - i) * (2 / 3 - t) * 6 : i) * it + .5 | 0
    }, ka = function (t, i, e) {
        var r = t ? ui(t) ? [t >> 16, t >> 8 & it, t & it] : 0 : zr.black, n, o, a, l, u, c, p, h, f, _;
        if (!r) {
            if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), zr[t]) r = zr[t]; else if (t.charAt(0) === "#") {
                if (t.length < 6 && (n = t.charAt(1), o = t.charAt(2), a = t.charAt(3), t = "#" + n + n + o + o + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9) return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & it, r & it, parseInt(t.substr(7), 16) / 255];
                t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & it, t & it]
            } else if (t.substr(0, 3) === "hsl") {
                if (r = _ = t.match(ms), !i) l = +r[0] % 360 / 360, u = +r[1] / 100, c = +r[2] / 100, o = c <= .5 ? c * (u + 1) : c + u - c * u, n = c * 2 - o, r.length > 3 && (r[3] *= 1), r[0] = rs(l + 1 / 3, n, o), r[1] = rs(l, n, o), r[2] = rs(l - 1 / 3, n, o); else if (~t.indexOf("=")) return r = t.match(ia), e && r.length < 4 && (r[3] = 1), r
            } else r = t.match(ms) || zr.transparent;
            r = r.map(Number)
        }
        return i && !_ && (n = r[0] / it, o = r[1] / it, a = r[2] / it, p = Math.max(n, o, a), h = Math.min(n, o, a), c = (p + h) / 2, p === h ? l = u = 0 : (f = p - h, u = c > .5 ? f / (2 - p - h) : f / (p + h), l = p === n ? (o - a) / f + (o < a ? 6 : 0) : p === o ? (a - n) / f + 2 : (n - o) / f + 4, l *= 60), r[0] = ~~(l + .5), r[1] = ~~(u * 100 + .5), r[2] = ~~(c * 100 + .5)), e && r.length < 4 && (r[3] = 1), r
    }, Ea = function (t) {
        var i = [], e = [], r = -1;
        return t.split(Pi).forEach(function (n) {
            var o = n.match(cr) || [];
            i.push.apply(i, o), e.push(r += o.length + 1)
        }), i.c = e, i
    }, wo = function (t, i, e) {
        var r = "", n = (t + r).match(Pi), o = i ? "hsla(" : "rgba(", a = 0, l, u, c, p;
        if (!n) return t;
        if (n = n.map(function (h) {
            return (h = ka(h, i, 1)) && o + (i ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")"
        }), e && (c = Ea(t), l = e.c, l.join(r) !== c.c.join(r))) for (u = t.replace(Pi, "1").split(cr), p = u.length - 1; a < p; a++) r += u[a] + (~l.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (c.length ? c : n.length ? n : e).shift());
        if (!u) for (u = t.split(Pi), p = u.length - 1; a < p; a++) r += u[a] + n[a];
        return r + u[p]
    }, Pi = (function () {
        var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
        for (t in zr) s += "|" + t + "\\b";
        return new RegExp(s + ")", "gi")
    })(), tu = /hsl[a]?\(/, Ca = function (t) {
        var i = t.join(" "), e;
        if (Pi.lastIndex = 0, Pi.test(i)) return e = tu.test(i), t[1] = wo(t[1], e), t[0] = wo(t[0], e, Ea(t[1])), !0
    }, nn, be = (function () {
        var s = Date.now, t = 500, i = 33, e = s(), r = e, n = 1e3 / 240, o = n, a = [], l, u, c, p, h, f,
            _ = function d(g) {
                var b = s() - r, w = g === !0, S, v, T, P;
                if ((b > t || b < 0) && (e += b - i), r += b, T = r - e, S = T - o, (S > 0 || w) && (P = ++p.frame, h = T - p.time * 1e3, p.time = T = T / 1e3, o += S + (S >= n ? 4 : n - S), v = 1), w || (l = u(d)), v) for (f = 0; f < a.length; f++) a[f](T, h, P, g)
            };
        return p = {
            time: 0, frame: 0, tick: function () {
                _(!0)
            }, deltaRatio: function (g) {
                return h / (1e3 / (g || 60))
            }, wake: function () {
                sa && (!ys && Vs() && (qe = ys = window, Hs = qe.document || {}, ke.gsap = pe, (qe.gsapVersions || (qe.gsapVersions = [])).push(pe.version), oa(In || qe.GreenSockGlobals || !qe.gsap && qe || {}), Sa.forEach(Pa)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && p.sleep(), u = c || function (g) {
                    return setTimeout(g, o - p.time * 1e3 + 1 | 0)
                }, nn = 1, _(2))
            }, sleep: function () {
                (c ? cancelAnimationFrame : clearTimeout)(l), nn = 0, u = en
            }, lagSmoothing: function (g, b) {
                t = g || 1 / 0, i = Math.min(b || 33, t)
            }, fps: function (g) {
                n = 1e3 / (g || 240), o = p.time * 1e3 + n
            }, add: function (g, b, w) {
                var S = b ? function (v, T, P, x) {
                    g(v, T, P, x), p.remove(S)
                } : g;
                return p.remove(g), a[w ? "unshift" : "push"](S), Tr(), S
            }, remove: function (g, b) {
                ~(b = a.indexOf(g)) && a.splice(b, 1) && f >= b && f--
            }, _listeners: a
        }, p
    })(), Tr = function () {
        return !nn && be.wake()
    }, K = {}, eu = /^[\d.\-M][\d.\-,\s]/, iu = /["']/g, ru = function (t) {
        for (var i = {}, e = t.substr(1, t.length - 3).split(":"), r = e[0], n = 1, o = e.length, a, l, u; n < o; n++) l = e[n], a = n !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), i[r] = isNaN(u) ? u.replace(iu, "").trim() : +u, r = l.substr(a + 1).trim();
        return i
    }, nu = function (t) {
        var i = t.indexOf("(") + 1, e = t.indexOf(")"), r = t.indexOf("(", i);
        return t.substring(i, ~r && r < e ? t.indexOf(")", e + 1) : e)
    }, su = function (t) {
        var i = (t + "").split("("), e = K[i[0]];
        return e && i.length > 1 && e.config ? e.config.apply(null, ~t.indexOf("{") ? [ru(i[1])] : nu(t).split(",").map(fa)) : K._CE && eu.test(t) ? K._CE("", t) : e
    }, Oa = function (t) {
        return function (i) {
            return 1 - t(1 - i)
        }
    }, Ma = function s(t, i) {
        for (var e = t._first, r; e;) e instanceof se ? s(e, i) : e.vars.yoyoEase && (!e._yoyo || !e._repeat) && e._yoyo !== i && (e.timeline ? s(e.timeline, i) : (r = e._ease, e._ease = e._yEase, e._yEase = r, e._yoyo = i)), e = e._next
    }, qi = function (t, i) {
        return t && (mt(t) ? t : K[t] || su(t)) || i
    }, er = function (t, i, e, r) {
        e === void 0 && (e = function (l) {
            return 1 - i(1 - l)
        }), r === void 0 && (r = function (l) {
            return l < .5 ? i(l * 2) / 2 : 1 - i((1 - l) * 2) / 2
        });
        var n = {easeIn: i, easeOut: e, easeInOut: r}, o;
        return fe(t, function (a) {
            K[a] = ke[a] = n, K[o = a.toLowerCase()] = e;
            for (var l in n) K[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = K[a + "." + l] = n[l]
        }), n
    }, Da = function (t) {
        return function (i) {
            return i < .5 ? (1 - t(1 - i * 2)) / 2 : .5 + t((i - .5) * 2) / 2
        }
    }, ns = function s(t, i, e) {
        var r = i >= 1 ? i : 1, n = (e || (t ? .3 : .45)) / (i < 1 ? i : 1), o = n / gs * (Math.asin(1 / r) || 0),
            a = function (c) {
                return c === 1 ? 1 : r * Math.pow(2, -10 * c) * Al((c - o) * n) + 1
            }, l = t === "out" ? a : t === "in" ? function (u) {
                return 1 - a(1 - u)
            } : Da(a);
        return n = gs / n, l.config = function (u, c) {
            return s(t, u, c)
        }, l
    }, ss = function s(t, i) {
        i === void 0 && (i = 1.70158);
        var e = function (o) {
            return o ? --o * o * ((i + 1) * o + i) + 1 : 0
        }, r = t === "out" ? e : t === "in" ? function (n) {
            return 1 - e(1 - n)
        } : Da(e);
        return r.config = function (n) {
            return s(t, n)
        }, r
    };
fe("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, t) {
    var i = t < 5 ? t + 1 : t;
    er(s + ",Power" + (i - 1), t ? function (e) {
        return Math.pow(e, i)
    } : function (e) {
        return e
    }, function (e) {
        return 1 - Math.pow(1 - e, i)
    }, function (e) {
        return e < .5 ? Math.pow(e * 2, i) / 2 : 1 - Math.pow((1 - e) * 2, i) / 2
    })
});
K.Linear.easeNone = K.none = K.Linear.easeIn;
er("Elastic", ns("in"), ns("out"), ns());
(function (s, t) {
    var i = 1 / t, e = 2 * i, r = 2.5 * i, n = function (a) {
        return a < i ? s * a * a : a < e ? s * Math.pow(a - 1.5 / t, 2) + .75 : a < r ? s * (a -= 2.25 / t) * a + .9375 : s * Math.pow(a - 2.625 / t, 2) + .984375
    };
    er("Bounce", function (o) {
        return 1 - n(1 - o)
    }, n)
})(7.5625, 2.75);
er("Expo", function (s) {
    return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s)
});
er("Circ", function (s) {
    return -(ta(1 - s * s) - 1)
});
er("Sine", function (s) {
    return s === 1 ? 1 : -Rl(s * Ml) + 1
});
er("Back", ss("in"), ss("out"), ss());
K.SteppedEase = K.steps = ke.SteppedEase = {
    config: function (t, i) {
        t === void 0 && (t = 1);
        var e = 1 / t, r = t + (i ? 0 : 1), n = i ? 1 : 0, o = 1 - rt;
        return function (a) {
            return ((r * fn(0, o, a) | 0) + n) * e
        }
    }
};
vr.ease = K["quad.out"];
fe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (s) {
    return $s += s + "," + s + "Params,"
});
var Ra = function (t, i) {
    this.id = Dl++, t._gsap = this, this.target = t, this.harness = i, this.get = i ? i.get : ua, this.set = i ? i.getSetter : Js
}, sn = (function () {
    function s(i) {
        this.vars = i, this._delay = +i.delay || 0, (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) && (this._rDelay = i.repeatDelay || 0, this._yoyo = !!i.yoyo || !!i.yoyoEase), this._ts = 1, br(this, +i.duration, 1, 1), this.data = i.data, ct && (this._ctx = ct, ct.data.push(this)), nn || be.wake()
    }

    var t = s.prototype;
    return t.delay = function (e) {
        return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
    }, t.duration = function (e) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
    }, t.totalDuration = function (e) {
        return arguments.length ? (this._dirty = 0, br(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }, t.totalTime = function (e, r) {
        if (Tr(), !arguments.length) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (Qn(this, e), !n._dp || n.parent || pa(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && Ge(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== e || !this._dur && !r || this._initted && Math.abs(this._zTime) === rt || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), ca(this, e, r)), this
    }, t.time = function (e, r) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + mo(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), r) : this._time
    }, t.totalProgress = function (e, r) {
        return arguments.length ? this.totalTime(this.totalDuration() * e, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
    }, t.progress = function (e, r) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + mo(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }, t.iteration = function (e, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (e - 1) * n, r) : this._repeat ? xr(this._tTime, n) + 1 : 1
    }, t.timeScale = function (e, r) {
        if (!arguments.length) return this._rts === -rt ? 0 : this._rts;
        if (this._rts === e) return this;
        var n = this.parent && this._ts ? Wn(this.parent._time, this) : this._tTime;
        return this._rts = +e || 0, this._ts = this._ps || e === -rt ? 0 : this._rts, this.totalTime(fn(-Math.abs(this._delay), this.totalDuration(), n), r !== !1), jn(this), Xl(this)
    }, t.paused = function (e) {
        return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Tr(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== rt && (this._tTime -= rt)))), this) : this._ps
    }, t.startTime = function (e) {
        if (arguments.length) {
            this._start = e;
            var r = this.parent || this._dp;
            return r && (r._sort || !this.parent) && Ge(r, this, e - this._delay), this
        }
        return this._start
    }, t.endTime = function (e) {
        return this._start + (ce(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }, t.rawTime = function (e) {
        var r = this.parent || this._dp;
        return r ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Wn(r.rawTime(e), this) : this._tTime : this._tTime
    }, t.revert = function (e) {
        e === void 0 && (e = Nl);
        var r = Xt;
        return Xt = e, Ks(this) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), this.data !== "nested" && e.kill !== !1 && this.kill(), Xt = r, this
    }, t.globalTime = function (e) {
        for (var r = this, n = arguments.length ? e : r.rawTime(); r;) n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
        return !this.parent && this._sat ? this._sat.globalTime(e) : n
    }, t.repeat = function (e) {
        return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, yo(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }, t.repeatDelay = function (e) {
        if (arguments.length) {
            var r = this._time;
            return this._rDelay = e, yo(this), r ? this.time(r) : this
        }
        return this._rDelay
    }, t.yoyo = function (e) {
        return arguments.length ? (this._yoyo = e, this) : this._yoyo
    }, t.seek = function (e, r) {
        return this.totalTime(Oe(this, e), ce(r))
    }, t.restart = function (e, r) {
        return this.play().totalTime(e ? -this._delay : 0, ce(r)), this._dur || (this._zTime = -rt), this
    }, t.play = function (e, r) {
        return e != null && this.seek(e, r), this.reversed(!1).paused(!1)
    }, t.reverse = function (e, r) {
        return e != null && this.seek(e || this.totalDuration(), r), this.reversed(!0).paused(!1)
    }, t.pause = function (e, r) {
        return e != null && this.seek(e, r), this.paused(!0)
    }, t.resume = function () {
        return this.paused(!1)
    }, t.reversed = function (e) {
        return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -rt : 0)), this) : this._rts < 0
    }, t.invalidate = function () {
        return this._initted = this._act = 0, this._zTime = -rt, this
    }, t.isActive = function () {
        var e = this.parent || this._dp, r = this._start, n;
        return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(!0)) >= r && n < this.endTime(!0) - rt)
    }, t.eventCallback = function (e, r, n) {
        var o = this.vars;
        return arguments.length > 1 ? (r ? (o[e] = r, n && (o[e + "Params"] = n), e === "onUpdate" && (this._onUpdate = r)) : delete o[e], this) : o[e]
    }, t.then = function (e) {
        var r = this;
        return new Promise(function (n) {
            var o = mt(e) ? e : ha, a = function () {
                var u = r.then;
                r.then = null, mt(o) && (o = o(r)) && (o.then || o === r) && (r.then = u), n(o), r.then = u
            };
            r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a
        })
    }, t.kill = function () {
        Lr(this)
    }, s
})();
Ee(sn.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -rt,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var se = (function (s) {
    Jo(t, s);

    function t(e, r) {
        var n;
        return e === void 0 && (e = {}), n = s.call(this, e) || this, n.labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = ce(e.sortChildren), ht && Ge(e.parent || ht, ni(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && _a(ni(n), e.scrollTrigger), n
    }

    var i = t.prototype;
    return i.to = function (r, n, o) {
        return Br(0, arguments, this), this
    }, i.from = function (r, n, o) {
        return Br(1, arguments, this), this
    }, i.fromTo = function (r, n, o, a) {
        return Br(2, arguments, this), this
    }, i.set = function (r, n, o) {
        return n.duration = 0, n.parent = this, Wr(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new kt(r, n, Oe(this, o), 1), this
    }, i.call = function (r, n, o) {
        return Ge(this, kt.delayedCall(0, r, n), o)
    }, i.staggerTo = function (r, n, o, a, l, u, c) {
        return o.duration = n, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = c, o.parent = this, new kt(r, o, Oe(this, l)), this
    }, i.staggerFrom = function (r, n, o, a, l, u, c) {
        return o.runBackwards = 1, Wr(o).immediateRender = ce(o.immediateRender), this.staggerTo(r, n, o, a, l, u, c)
    }, i.staggerFromTo = function (r, n, o, a, l, u, c, p) {
        return a.startAt = o, Wr(a).immediateRender = ce(a.immediateRender), this.staggerTo(r, n, a, l, u, c, p)
    }, i.render = function (r, n, o) {
        var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = r <= 0 ? 0 : Et(r),
            p = this._zTime < 0 != r < 0 && (this._initted || !u), h, f, _, d, g, b, w, S, v, T, P, x;
        if (this !== ht && c > l && r >= 0 && (c = l), c !== this._tTime || o || p) {
            if (a !== this._time && u && (c += this._time - a, r += this._time - a), h = c, v = this._start, S = this._ts, b = !S, p && (u || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
                if (P = this._yoyo, g = u + this._rDelay, this._repeat < -1 && r < 0) return this.totalTime(g * 100 + r, n, o);
                if (h = Et(c % g), c === l ? (d = this._repeat, h = u) : (T = Et(c / g), d = ~~T, d && d === T && (h = u, d--), h > u && (h = u)), T = xr(this._tTime, g), !a && this._tTime && T !== d && this._tTime - T * g - this._dur <= 0 && (T = d), P && d & 1 && (h = u - h, x = 1), d !== T && !this._lock) {
                    var C = P && T & 1, k = C === (P && d & 1);
                    if (d < T && (C = !C), a = C ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (x ? 0 : Et(d * g)), n, !u)._lock = 0, this._tTime = c, !n && this.parent && Se(this, "onRepeat"), this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1), a && a !== this._time || b !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (u = this._dur, l = this._tDur, k && (this._lock = 2, a = C ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !x && this.invalidate()), this._lock = 0, !this._ts && !b) return this;
                    Ma(this, x)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (w = Hl(this, Et(a), Et(h)), w && (c -= h - (h = w._start))), this._tTime = c, this._time = h, this._act = !S, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && c && !n && !T && (Se(this, "onStart"), this._tTime !== c)) return this;
            if (h >= a && r >= 0) for (f = this._first; f;) {
                if (_ = f._next, (f._act || h >= f._start) && f._ts && w !== f) {
                    if (f.parent !== this) return this.render(r, n, o);
                    if (f.render(f._ts > 0 ? (h - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (h - f._start) * f._ts, n, o), h !== this._time || !this._ts && !b) {
                        w = 0, _ && (c += this._zTime = -rt);
                        break
                    }
                }
                f = _
            } else {
                f = this._last;
                for (var E = r < 0 ? r : h; f;) {
                    if (_ = f._prev, (f._act || E <= f._end) && f._ts && w !== f) {
                        if (f.parent !== this) return this.render(r, n, o);
                        if (f.render(f._ts > 0 ? (E - f._start) * f._ts : (f._dirty ? f.totalDuration() : f._tDur) + (E - f._start) * f._ts, n, o || Xt && Ks(f)), h !== this._time || !this._ts && !b) {
                            w = 0, _ && (c += this._zTime = E ? -rt : rt);
                            break
                        }
                    }
                    f = _
                }
            }
            if (w && !n && (this.pause(), w.render(h >= a ? 0 : -rt)._zTime = h >= a ? 1 : -1, this._ts)) return this._start = v, jn(this), this.render(r, n, o);
            this._onUpdate && !n && Se(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && a) && (v === this._start || Math.abs(S) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && Ei(this, 1), !n && !(r < 0 && !a) && (c || a || !l) && (Se(this, c === l && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, i.add = function (r, n) {
        var o = this;
        if (ui(n) || (n = Oe(this, n, r)), !(r instanceof sn)) {
            if (Zt(r)) return r.forEach(function (a) {
                return o.add(a, n)
            }), this;
            if (zt(r)) return this.addLabel(r, n);
            if (mt(r)) r = kt.delayedCall(0, r); else return this
        }
        return this !== r ? Ge(this, r, n) : this
    }, i.getChildren = function (r, n, o, a) {
        r === void 0 && (r = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), a === void 0 && (a = -Re);
        for (var l = [], u = this._first; u;) u._start >= a && (u instanceof kt ? n && l.push(u) : (o && l.push(u), r && l.push.apply(l, u.getChildren(!0, n, o)))), u = u._next;
        return l
    }, i.getById = function (r) {
        for (var n = this.getChildren(1, 1, 1), o = n.length; o--;) if (n[o].vars.id === r) return n[o]
    }, i.remove = function (r) {
        return zt(r) ? this.removeLabel(r) : mt(r) ? this.killTweensOf(r) : (r.parent === this && Zn(this, r), r === this._recent && (this._recent = this._last), Ui(this))
    }, i.totalTime = function (r, n) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Et(be.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), s.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime
    }, i.addLabel = function (r, n) {
        return this.labels[r] = Oe(this, n), this
    }, i.removeLabel = function (r) {
        return delete this.labels[r], this
    }, i.addPause = function (r, n, o) {
        var a = kt.delayedCall(0, n || en, o);
        return a.data = "isPause", this._hasPause = 1, Ge(this, a, Oe(this, r))
    }, i.removePause = function (r) {
        var n = this._first;
        for (r = Oe(this, r); n;) n._start === r && n.data === "isPause" && Ei(n), n = n._next
    }, i.killTweensOf = function (r, n, o) {
        for (var a = this.getTweensOf(r, o), l = a.length; l--;) vi !== a[l] && a[l].kill(r, n);
        return this
    }, i.getTweensOf = function (r, n) {
        for (var o = [], a = Ae(r), l = this._first, u = ui(n), c; l;) l instanceof kt ? Fl(l._targets, a) && (u ? (!vi || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, n)).length && o.push.apply(o, c), l = l._next;
        return o
    }, i.tweenTo = function (r, n) {
        n = n || {};
        var o = this, a = Oe(o, r), l = n, u = l.startAt, c = l.onStart, p = l.onStartParams, h = l.immediateRender, f,
            _ = kt.to(o, Ee({
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || rt,
                onStart: function () {
                    if (o.pause(), !f) {
                        var g = n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
                        _._dur !== g && br(_, g, 0, 1).render(_._time, !0, !0), f = 1
                    }
                    c && c.apply(_, p || [])
                }
            }, n));
        return h ? _.render(0) : _
    }, i.tweenFromTo = function (r, n, o) {
        return this.tweenTo(n, Ee({startAt: {time: Oe(this, r)}}, o))
    }, i.recent = function () {
        return this._recent
    }, i.nextLabel = function (r) {
        return r === void 0 && (r = this._time), vo(this, Oe(this, r))
    }, i.previousLabel = function (r) {
        return r === void 0 && (r = this._time), vo(this, Oe(this, r), 1)
    }, i.currentLabel = function (r) {
        return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + rt)
    }, i.shiftChildren = function (r, n, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, u; a;) a._start >= o && (a._start += r, a._end += r), a = a._next;
        if (n) for (u in l) l[u] >= o && (l[u] += r);
        return Ui(this)
    }, i.invalidate = function (r) {
        var n = this._first;
        for (this._lock = 0; n;) n.invalidate(r), n = n._next;
        return s.prototype.invalidate.call(this, r)
    }, i.clear = function (r) {
        r === void 0 && (r = !0);
        for (var n = this._first, o; n;) o = n._next, this.remove(n), n = o;
        return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Ui(this)
    }, i.totalDuration = function (r) {
        var n = 0, o = this, a = o._last, l = Re, u, c, p;
        if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
        if (o._dirty) {
            for (p = o.parent; a;) u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > l && o._sort && a._ts && !o._lock ? (o._lock = 1, Ge(o, a, c - a._delay, 1)._lock = 0) : l = c, c < 0 && a._ts && (n -= c, (!p && !o._dp || p && p.smoothChildTiming) && (o._start += c / o._ts, o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), a._end > n && a._ts && (n = a._end), a = u;
            br(o, o === ht && o._time > n ? o._time : n, 1, 1), o._dirty = 0
        }
        return o._tDur
    }, t.updateRoot = function (r) {
        if (ht._ts && (ca(ht, Wn(r, ht)), la = be.frame), be.frame >= _o) {
            _o += Pe.autoSleep || 120;
            var n = ht._first;
            if ((!n || !n._ts) && Pe.autoSleep && be._listeners.length < 2) {
                for (; n && !n._ts;) n = n._next;
                n || be.sleep()
            }
        }
    }, t
})(sn);
Ee(se.prototype, {_lock: 0, _hasPause: 0, _forcing: 0});
var ou = function (t, i, e, r, n, o, a) {
    var l = new he(this._pt, t, i, 0, 1, Ia, null, n), u = 0, c = 0, p, h, f, _, d, g, b, w;
    for (l.b = e, l.e = r, e += "", r += "", (b = ~r.indexOf("random(")) && (r = rn(r)), o && (w = [e, r], o(w, t, i), e = w[0], r = w[1]), h = e.match(es) || []; p = es.exec(r);) _ = p[0], d = r.substring(u, p.index), f ? f = (f + 1) % 5 : d.substr(-5) === "rgba(" && (f = 1), _ !== h[c++] && (g = parseFloat(h[c - 1]) || 0, l._pt = {
        _next: l._pt,
        p: d || c === 1 ? d : ",",
        s: g,
        c: _.charAt(1) === "=" ? dr(g, _) - g : parseFloat(_) - g,
        m: f && f < 4 ? Math.round : 0
    }, u = es.lastIndex);
    return l.c = u < r.length ? r.substring(u, r.length) : "", l.fp = a, (ra.test(r) || b) && (l.e = 0), this._pt = l, l
}, Zs = function (t, i, e, r, n, o, a, l, u, c) {
    mt(r) && (r = r(n || 0, t, o));
    var p = t[i],
        h = e !== "get" ? e : mt(p) ? u ? t[i.indexOf("set") || !mt(t["get" + i.substr(3)]) ? i : "get" + i.substr(3)](u) : t[i]() : p,
        f = mt(p) ? u ? fu : Na : Qs, _;
    if (zt(r) && (~r.indexOf("random(") && (r = rn(r)), r.charAt(1) === "=" && (_ = dr(h, r) + (Gt(h) || 0), (_ || _ === 0) && (r = _))), !c || h !== r || Ps) return !isNaN(h * r) && r !== "" ? (_ = new he(this._pt, t, i, +h || 0, r - (h || 0), typeof p == "boolean" ? du : Fa, 0, f), u && (_.fp = u), a && _.modifier(a, this, t), this._pt = _) : (!p && !(i in t) && Us(i, r), ou.call(this, t, i, h, r, f, l || Pe.stringFilter, u))
}, au = function (t, i, e, r, n) {
    if (mt(t) && (t = Vr(t, n, i, e, r)), !Qe(t) || t.style && t.nodeType || Zt(t) || ea(t)) return zt(t) ? Vr(t, n, i, e, r) : t;
    var o = {}, a;
    for (a in t) o[a] = Vr(t[a], n, i, e, r);
    return o
}, Aa = function (t, i, e, r, n, o) {
    var a, l, u, c;
    if (we[t] && (a = new we[t]).init(n, a.rawVars ? i[t] : au(i[t], r, n, o, e), e, r, o) !== !1 && (e._pt = l = new he(e._pt, n, t, 0, 1, a.render, a, 0, a.priority), e !== fr)) for (u = e._ptLookup[e._targets.indexOf(n)], c = a._props.length; c--;) u[a._props[c]] = l;
    return a
}, vi, Ps, js = function s(t, i, e) {
    var r = t.vars, n = r.ease, o = r.startAt, a = r.immediateRender, l = r.lazy, u = r.onUpdate, c = r.runBackwards,
        p = r.yoyoEase, h = r.keyframes, f = r.autoRevert, _ = t._dur, d = t._startAt, g = t._targets, b = t.parent,
        w = b && b.data === "nested" ? b.vars.targets : g, S = t._overwrite === "auto" && !Ws, v = t.timeline, T, P, x,
        C, k, E, N, O, q, H, Z, $, z;
    if (v && (!h || !n) && (n = "none"), t._ease = qi(n, vr.ease), t._yEase = p ? Oa(qi(p === !0 ? n : p, vr.ease)) : 0, p && t._yoyo && !t._repeat && (p = t._yEase, t._yEase = t._ease, t._ease = p), t._from = !v && !!r.runBackwards, !v || h && !r.stagger) {
        if (O = g[0] ? Hi(g[0]).harness : 0, $ = O && r[O.prop], T = Xn(r, qs), d && (d._zTime < 0 && d.progress(1), i < 0 && c && a && !f ? d.render(-1, !0) : d.revert(c && _ ? Cn : zl), d._lazy = 0), o) {
            if (Ei(t._startAt = kt.set(g, Ee({
                data: "isStart",
                overwrite: !1,
                parent: b,
                immediateRender: !0,
                lazy: !d && ce(l),
                startAt: null,
                delay: 0,
                onUpdate: u && function () {
                    return Se(t, "onUpdate")
                },
                stagger: 0
            }, o))), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (Xt || !a && !f) && t._startAt.revert(Cn), a && _ && i <= 0 && e <= 0) {
                i && (t._zTime = i);
                return
            }
        } else if (c && _ && !d) {
            if (i && (a = !1), x = Ee({
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !d && ce(l),
                immediateRender: a,
                stagger: 0,
                parent: b
            }, T), $ && (x[O.prop] = $), Ei(t._startAt = kt.set(g, x)), t._startAt._dp = 0, t._startAt._sat = t, i < 0 && (Xt ? t._startAt.revert(Cn) : t._startAt.render(-1, !0)), t._zTime = i, !a) s(t._startAt, rt, rt); else if (!i) return
        }
        for (t._pt = t._ptCache = 0, l = _ && ce(l) || l && !_, P = 0; P < g.length; P++) {
            if (k = g[P], N = k._gsap || Gs(g)[P]._gsap, t._ptLookup[P] = H = {}, vs[N.id] && Si.length && Yn(), Z = w === g ? P : w.indexOf(k), O && (q = new O).init(k, $ || T, t, Z, w) !== !1 && (t._pt = C = new he(t._pt, k, q.name, 0, 1, q.render, q, 0, q.priority), q._props.forEach(function (Q) {
                H[Q] = C
            }), q.priority && (E = 1)), !O || $) for (x in T) we[x] && (q = Aa(x, T, t, Z, k, w)) ? q.priority && (E = 1) : H[x] = C = Zs.call(t, k, x, "get", T[x], Z, w, 0, r.stringFilter);
            t._op && t._op[P] && t.kill(k, t._op[P]), S && t._pt && (vi = t, ht.killTweensOf(k, H, t.globalTime(i)), z = !t.parent, vi = 0), t._pt && l && (vs[N.id] = 1)
        }
        E && Ya(t), t._onInit && t._onInit(t)
    }
    t._onUpdate = u, t._initted = (!t._op || t._pt) && !z, h && i <= 0 && v.render(Re, !0, !0)
}, lu = function (t, i, e, r, n, o, a, l) {
    var u = (t._pt && t._ptCache || (t._ptCache = {}))[i], c, p, h, f;
    if (!u) for (u = t._ptCache[i] = [], h = t._ptLookup, f = t._targets.length; f--;) {
        if (c = h[f][i], c && c.d && c.d._pt) for (c = c.d._pt; c && c.p !== i && c.fp !== i;) c = c._next;
        if (!c) return Ps = 1, t.vars[i] = "+=0", js(t, a), Ps = 0, l ? tn(i + " not eligible for reset") : 1;
        u.push(c)
    }
    for (f = u.length; f--;) p = u[f], c = p._pt || p, c.s = (r || r === 0) && !n ? r : c.s + (r || 0) + o * c.c, c.c = e - c.s, p.e && (p.e = xt(e) + Gt(p.e)), p.b && (p.b = c.s + Gt(p.b))
}, uu = function (t, i) {
    var e = t[0] ? Hi(t[0]).harness : 0, r = e && e.aliases, n, o, a, l;
    if (!r) return i;
    n = wr({}, i);
    for (o in r) if (o in n) for (l = r[o].split(","), a = l.length; a--;) n[l[a]] = n[o];
    return n
}, cu = function (t, i, e, r) {
    var n = i.ease || r || "power1.inOut", o, a;
    if (Zt(i)) a = e[t] || (e[t] = []), i.forEach(function (l, u) {
        return a.push({t: u / (i.length - 1) * 100, v: l, e: n})
    }); else for (o in i) a = e[o] || (e[o] = []), o === "ease" || a.push({t: parseFloat(t), v: i[o], e: n})
}, Vr = function (t, i, e, r, n) {
    return mt(t) ? t.call(i, e, r, n) : zt(t) && ~t.indexOf("random(") ? rn(t) : t
}, La = $s + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", za = {};
fe(La + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
    return za[s] = 1
});
var kt = (function (s) {
    Jo(t, s);

    function t(e, r, n, o) {
        var a;
        typeof r == "number" && (n.duration = r, r = n, n = null), a = s.call(this, o ? r : Wr(r)) || this;
        var l = a.vars, u = l.duration, c = l.delay, p = l.immediateRender, h = l.stagger, f = l.overwrite,
            _ = l.keyframes, d = l.defaults, g = l.scrollTrigger, b = l.yoyoEase, w = r.parent || ht,
            S = (Zt(e) || ea(e) ? ui(e[0]) : "length" in r) ? [e] : Ae(e), v, T, P, x, C, k, E, N;
        if (a._targets = S.length ? Gs(S) : tn("GSAP target " + e + " not found. https://gsap.com", !Pe.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = f, _ || h || _n(u) || _n(c)) {
            if (r = a.vars, v = a.timeline = new se({
                data: "nested",
                defaults: d || {},
                targets: w && w.data === "nested" ? w.vars.targets : S
            }), v.kill(), v.parent = v._dp = ni(a), v._start = 0, h || _n(u) || _n(c)) {
                if (x = S.length, E = h && va(h), Qe(h)) for (C in h) ~La.indexOf(C) && (N || (N = {}), N[C] = h[C]);
                for (T = 0; T < x; T++) P = Xn(r, za), P.stagger = 0, b && (P.yoyoEase = b), N && wr(P, N), k = S[T], P.duration = +Vr(u, ni(a), T, k, S), P.delay = (+Vr(c, ni(a), T, k, S) || 0) - a._delay, !h && x === 1 && P.delay && (a._delay = c = P.delay, a._start += c, P.delay = 0), v.to(k, P, E ? E(T, k, S) : 0), v._ease = K.none;
                v.duration() ? u = c = 0 : a.timeline = 0
            } else if (_) {
                Wr(Ee(v.vars.defaults, {ease: "none"})), v._ease = qi(_.ease || r.ease || "none");
                var O = 0, q, H, Z;
                if (Zt(_)) _.forEach(function ($) {
                    return v.to(S, $, ">")
                }), v.duration(); else {
                    P = {};
                    for (C in _) C === "ease" || C === "easeEach" || cu(C, _[C], P, _.easeEach);
                    for (C in P) for (q = P[C].sort(function ($, z) {
                        return $.t - z.t
                    }), O = 0, T = 0; T < q.length; T++) H = q[T], Z = {
                        ease: H.e,
                        duration: (H.t - (T ? q[T - 1].t : 0)) / 100 * u
                    }, Z[C] = H.v, v.to(S, Z, O), O += Z.duration;
                    v.duration() < u && v.to({}, {duration: u - v.duration()})
                }
            }
            u || a.duration(u = v.duration())
        } else a.timeline = 0;
        return f === !0 && !Ws && (vi = ni(a), ht.killTweensOf(S), vi = 0), Ge(w, ni(a), n), r.reversed && a.reverse(), r.paused && a.paused(!0), (p || !u && !_ && a._start === Et(w._time) && ce(p) && Wl(ni(a)) && w.data !== "nested") && (a._tTime = -rt, a.render(Math.max(0, -c) || 0)), g && _a(ni(a), g), a
    }

    var i = t.prototype;
    return i.render = function (r, n, o) {
        var a = this._time, l = this._tDur, u = this._dur, c = r < 0, p = r > l - rt && !c ? l : r < rt ? 0 : r, h, f,
            _, d, g, b, w, S, v;
        if (!u) Vl(this, r, n, o); else if (p !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
            if (h = p, S = this.timeline, this._repeat) {
                if (d = u + this._rDelay, this._repeat < -1 && c) return this.totalTime(d * 100 + r, n, o);
                if (h = Et(p % d), p === l ? (_ = this._repeat, h = u) : (g = Et(p / d), _ = ~~g, _ && _ === g ? (h = u, _--) : h > u && (h = u)), b = this._yoyo && _ & 1, b && (v = this._yEase, h = u - h), g = xr(this._tTime, d), h === a && !o && this._initted && _ === g) return this._tTime = p, this;
                _ !== g && (S && this._yEase && Ma(S, b), this.vars.repeatRefresh && !b && !this._lock && h !== d && this._initted && (this._lock = o = 1, this.render(Et(d * _), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (ga(this, c ? r : h, o, n, p)) return this._tTime = 0, this;
                if (a !== this._time && !(o && this.vars.repeatRefresh && _ !== g)) return this;
                if (u !== this._dur) return this.render(r, n, o)
            }
            if (this._tTime = p, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = w = (v || this._ease)(h / u), this._from && (this.ratio = w = 1 - w), !a && p && !n && !g && (Se(this, "onStart"), this._tTime !== p)) return this;
            for (f = this._pt; f;) f.r(w, f.d), f = f._next;
            S && S.render(r < 0 ? r : S._dur * S._ease(h / this._dur), n, o) || this._startAt && (this._zTime = r), this._onUpdate && !n && (c && ws(this, r, n, o), Se(this, "onUpdate")), this._repeat && _ !== g && this.vars.onRepeat && !n && this.parent && Se(this, "onRepeat"), (p === this._tDur || !p) && this._tTime === p && (c && !this._onUpdate && ws(this, r, !0, !0), (r || !u) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && Ei(this, 1), !n && !(c && !a) && (p || a || b) && (Se(this, p === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(p < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, i.targets = function () {
        return this._targets
    }, i.invalidate = function (r) {
        return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), s.prototype.invalidate.call(this, r)
    }, i.resetTo = function (r, n, o, a, l) {
        nn || be.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
        return this._initted || js(this, u), c = this._ease(u / this._dur), lu(this, r, n, o, a, c, u, l) ? this.resetTo(r, n, o, a, 1) : (Qn(this, 0), this.parent || da(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, i.kill = function (r, n) {
        if (n === void 0 && (n = "all"), !r && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? Lr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Xt), this;
        if (this.timeline) {
            var o = this.timeline.totalDuration();
            return this.timeline.killTweensOf(r, n, vi && vi.vars.overwrite !== !0)._first || Lr(this), this.parent && o !== this.timeline.totalDuration() && br(this, this._dur * this.timeline._tDur / o, 0, 1), this
        }
        var a = this._targets, l = r ? Ae(r) : a, u = this._ptLookup, c = this._pt, p, h, f, _, d, g, b;
        if ((!n || n === "all") && Yl(a, l)) return n === "all" && (this._pt = 0), Lr(this);
        for (p = this._op = this._op || [], n !== "all" && (zt(n) && (d = {}, fe(n, function (w) {
            return d[w] = 1
        }), n = d), n = uu(a, n)), b = a.length; b--;) if (~l.indexOf(a[b])) {
            h = u[b], n === "all" ? (p[b] = n, _ = h, f = {}) : (f = p[b] = p[b] || {}, _ = n);
            for (d in _) g = h && h[d], g && ((!("kill" in g.d) || g.d.kill(d) === !0) && Zn(this, g, "_pt"), delete h[d]), f !== "all" && (f[d] = 1)
        }
        return this._initted && !this._pt && c && Lr(this), this
    }, t.to = function (r, n) {
        return new t(r, n, arguments[2])
    }, t.from = function (r, n) {
        return Br(1, arguments)
    }, t.delayedCall = function (r, n, o, a) {
        return new t(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: r,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: o,
            onReverseCompleteParams: o,
            callbackScope: a
        })
    }, t.fromTo = function (r, n, o) {
        return Br(2, arguments)
    }, t.set = function (r, n) {
        return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n)
    }, t.killTweensOf = function (r, n, o) {
        return ht.killTweensOf(r, n, o)
    }, t
})(sn);
Ee(kt.prototype, {_targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0});
fe("staggerTo,staggerFrom,staggerFromTo", function (s) {
    kt[s] = function () {
        var t = new se, i = bs.call(arguments, 0);
        return i.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), t[s].apply(t, i)
    }
});
var Qs = function (t, i, e) {
    return t[i] = e
}, Na = function (t, i, e) {
    return t[i](e)
}, fu = function (t, i, e, r) {
    return t[i](r.fp, e)
}, hu = function (t, i, e) {
    return t.setAttribute(i, e)
}, Js = function (t, i) {
    return mt(t[i]) ? Na : Bs(t[i]) && t.setAttribute ? hu : Qs
}, Fa = function (t, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e6) / 1e6, i)
}, du = function (t, i) {
    return i.set(i.t, i.p, !!(i.s + i.c * t), i)
}, Ia = function (t, i) {
    var e = i._pt, r = "";
    if (!t && i.b) r = i.b; else if (t === 1 && i.e) r = i.e; else {
        for (; e;) r = e.p + (e.m ? e.m(e.s + e.c * t) : Math.round((e.s + e.c * t) * 1e4) / 1e4) + r, e = e._next;
        r += i.c
    }
    i.set(i.t, i.p, r, i)
}, to = function (t, i) {
    for (var e = i._pt; e;) e.r(t, e.d), e = e._next
}, pu = function (t, i, e, r) {
    for (var n = this._pt, o; n;) o = n._next, n.p === r && n.modifier(t, i, e), n = o
}, _u = function (t) {
    for (var i = this._pt, e, r; i;) r = i._next, i.p === t && !i.op || i.op === t ? Zn(this, i, "_pt") : i.dep || (e = 1), i = r;
    return !e
}, gu = function (t, i, e, r) {
    r.mSet(t, i, r.m.call(r.tween, e, r.mt), r)
}, Ya = function (t) {
    for (var i = t._pt, e, r, n, o; i;) {
        for (e = i._next, r = n; r && r.pr > i.pr;) r = r._next;
        (i._prev = r ? r._prev : o) ? i._prev._next = i : n = i, (i._next = r) ? r._prev = i : o = i, i = e
    }
    t._pt = n
}, he = (function () {
    function s(i, e, r, n, o, a, l, u, c) {
        this.t = e, this.s = n, this.c = o, this.p = r, this.r = a || Fa, this.d = l || this, this.set = u || Qs, this.pr = c || 0, this._next = i, i && (i._prev = this)
    }

    var t = s.prototype;
    return t.modifier = function (e, r, n) {
        this.mSet = this.mSet || this.set, this.set = gu, this.m = e, this.mt = n, this.tween = r
    }, s
})();
fe($s + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (s) {
    return qs[s] = 1
});
ke.TweenMax = ke.TweenLite = kt;
ke.TimelineLite = ke.TimelineMax = se;
ht = new se({sortChildren: !1, defaults: vr, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0});
Pe.stringFilter = Ca;
var $i = [], Mn = {}, mu = [], xo = 0, yu = 0, os = function (t) {
    return (Mn[t] || mu).map(function (i) {
        return i()
    })
}, ks = function () {
    var t = Date.now(), i = [];
    t - xo > 2 && (os("matchMediaInit"), $i.forEach(function (e) {
        var r = e.queries, n = e.conditions, o, a, l, u;
        for (a in r) o = qe.matchMedia(r[a]).matches, o && (l = 1), o !== n[a] && (n[a] = o, u = 1);
        u && (e.revert(), l && i.push(e))
    }), os("matchMediaRevert"), i.forEach(function (e) {
        return e.onMatch(e, function (r) {
            return e.add(null, r)
        })
    }), xo = t, os("matchMedia"))
}, Xa = (function () {
    function s(i, e) {
        this.selector = e && Ts(e), this.data = [], this._r = [], this.isReverted = !1, this.id = yu++, i && this.add(i)
    }

    var t = s.prototype;
    return t.add = function (e, r, n) {
        mt(e) && (n = r, r = e, e = mt);
        var o = this, a = function () {
            var u = ct, c = o.selector, p;
            return u && u !== o && u.data.push(o), n && (o.selector = Ts(n)), ct = o, p = r.apply(o, arguments), mt(p) && o._r.push(p), ct = u, o.selector = c, o.isReverted = !1, p
        };
        return o.last = a, e === mt ? a(o, function (l) {
            return o.add(null, l)
        }) : e ? o[e] = a : a
    }, t.ignore = function (e) {
        var r = ct;
        ct = null, e(this), ct = r
    }, t.getTweens = function () {
        var e = [];
        return this.data.forEach(function (r) {
            return r instanceof s ? e.push.apply(e, r.getTweens()) : r instanceof kt && !(r.parent && r.parent.data === "nested") && e.push(r)
        }), e
    }, t.clear = function () {
        this._r.length = this.data.length = 0
    }, t.kill = function (e, r) {
        var n = this;
        if (e ? (function () {
            for (var a = n.getTweens(), l = n.data.length, u; l--;) u = n.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function (c) {
                return a.splice(a.indexOf(c), 1)
            }));
            for (a.map(function (c) {
                return {
                    g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
                    t: c
                }
            }).sort(function (c, p) {
                return p.g - c.g || -1 / 0
            }).forEach(function (c) {
                return c.t.revert(e)
            }), l = n.data.length; l--;) u = n.data[l], u instanceof se ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof kt) && u.revert && u.revert(e);
            n._r.forEach(function (c) {
                return c(e, n)
            }), n.isReverted = !0
        })() : this.data.forEach(function (a) {
            return a.kill && a.kill()
        }), this.clear(), r) for (var o = $i.length; o--;) $i[o].id === this.id && $i.splice(o, 1)
    }, t.revert = function (e) {
        this.kill(e || {})
    }, s
})(), vu = (function () {
    function s(i) {
        this.contexts = [], this.scope = i, ct && ct.data.push(this)
    }

    var t = s.prototype;
    return t.add = function (e, r, n) {
        Qe(e) || (e = {matches: e});
        var o = new Xa(0, n || this.scope), a = o.conditions = {}, l, u, c;
        ct && !o.selector && (o.selector = ct.selector), this.contexts.push(o), r = o.add("onMatch", r), o.queries = e;
        for (u in e) u === "all" ? c = 1 : (l = qe.matchMedia(e[u]), l && ($i.indexOf(o) < 0 && $i.push(o), (a[u] = l.matches) && (c = 1), l.addListener ? l.addListener(ks) : l.addEventListener("change", ks)));
        return c && r(o, function (p) {
            return o.add(null, p)
        }), this
    }, t.revert = function (e) {
        this.kill(e || {})
    }, t.kill = function (e) {
        this.contexts.forEach(function (r) {
            return r.kill(e, !0)
        })
    }, s
})(), Bn = {
    registerPlugin: function () {
        for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++) i[e] = arguments[e];
        i.forEach(function (r) {
            return Pa(r)
        })
    },
    timeline: function (t) {
        return new se(t)
    },
    getTweensOf: function (t, i) {
        return ht.getTweensOf(t, i)
    },
    getProperty: function (t, i, e, r) {
        zt(t) && (t = Ae(t)[0]);
        var n = Hi(t || {}).get, o = e ? ha : fa;
        return e === "native" && (e = ""), t && (i ? o((we[i] && we[i].get || n)(t, i, e, r)) : function (a, l, u) {
            return o((we[a] && we[a].get || n)(t, a, l, u))
        })
    },
    quickSetter: function (t, i, e) {
        if (t = Ae(t), t.length > 1) {
            var r = t.map(function (c) {
                return pe.quickSetter(c, i, e)
            }), n = r.length;
            return function (c) {
                for (var p = n; p--;) r[p](c)
            }
        }
        t = t[0] || {};
        var o = we[i], a = Hi(t), l = a.harness && (a.harness.aliases || {})[i] || i, u = o ? function (c) {
            var p = new o;
            fr._pt = 0, p.init(t, e ? c + e : c, fr, 0, [t]), p.render(1, p), fr._pt && to(1, fr)
        } : a.set(t, l);
        return o ? u : function (c) {
            return u(t, l, e ? c + e : c, a, 1)
        }
    },
    quickTo: function (t, i, e) {
        var r, n = pe.to(t, Ee((r = {}, r[i] = "+=0.1", r.paused = !0, r.stagger = 0, r), e || {})),
            o = function (l, u, c) {
                return n.resetTo(i, l, u, c)
            };
        return o.tween = n, o
    },
    isTweening: function (t) {
        return ht.getTweensOf(t, !0).length > 0
    },
    defaults: function (t) {
        return t && t.ease && (t.ease = qi(t.ease, vr.ease)), go(vr, t || {})
    },
    config: function (t) {
        return go(Pe, t || {})
    },
    registerEffect: function (t) {
        var i = t.name, e = t.effect, r = t.plugins, n = t.defaults, o = t.extendTimeline;
        (r || "").split(",").forEach(function (a) {
            return a && !we[a] && !ke[a] && tn(i + " effect requires " + a + " plugin.")
        }), is[i] = function (a, l, u) {
            return e(Ae(a), Ee(l || {}, n), u)
        }, o && (se.prototype[i] = function (a, l, u) {
            return this.add(is[i](a, Qe(l) ? l : (u = l) && {}, this), u)
        })
    },
    registerEase: function (t, i) {
        K[t] = qi(i)
    },
    parseEase: function (t, i) {
        return arguments.length ? qi(t, i) : K
    },
    getById: function (t) {
        return ht.getById(t)
    },
    exportRoot: function (t, i) {
        t === void 0 && (t = {});
        var e = new se(t), r, n;
        for (e.smoothChildTiming = ce(t.smoothChildTiming), ht.remove(e), e._dp = 0, e._time = e._tTime = ht._time, r = ht._first; r;) n = r._next, (i || !(!r._dur && r instanceof kt && r.vars.onComplete === r._targets[0])) && Ge(e, r, r._start - r._delay), r = n;
        return Ge(ht, e, 0), e
    },
    context: function (t, i) {
        return t ? new Xa(t, i) : ct
    },
    matchMedia: function (t) {
        return new vu(t)
    },
    matchMediaRefresh: function () {
        return $i.forEach(function (t) {
            var i = t.conditions, e, r;
            for (r in i) i[r] && (i[r] = !1, e = 1);
            e && t.revert()
        }) || ks()
    },
    addEventListener: function (t, i) {
        var e = Mn[t] || (Mn[t] = []);
        ~e.indexOf(i) || e.push(i)
    },
    removeEventListener: function (t, i) {
        var e = Mn[t], r = e && e.indexOf(i);
        r >= 0 && e.splice(r, 1)
    },
    utils: {
        wrap: jl,
        wrapYoyo: Ql,
        distribute: va,
        random: xa,
        snap: wa,
        normalize: Zl,
        getUnit: Gt,
        clamp: ql,
        splitColor: ka,
        toArray: Ae,
        selector: Ts,
        mapRange: Ta,
        pipe: Gl,
        unitize: Kl,
        interpolate: Jl,
        shuffle: ya
    },
    install: oa,
    effects: is,
    ticker: be,
    updateRoot: se.updateRoot,
    plugins: we,
    globalTimeline: ht,
    core: {
        PropTween: he,
        globals: aa,
        Tween: kt,
        Timeline: se,
        Animation: sn,
        getCache: Hi,
        _removeLinkedListItem: Zn,
        reverting: function () {
            return Xt
        },
        context: function (t) {
            return t && ct && (ct.data.push(t), t._ctx = ct), ct
        },
        suppressOverwrites: function (t) {
            return Ws = t
        }
    }
};
fe("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
    return Bn[s] = kt[s]
});
be.add(se.updateRoot);
fr = Bn.to({}, {duration: 0});
var wu = function (t, i) {
    for (var e = t._pt; e && e.p !== i && e.op !== i && e.fp !== i;) e = e._next;
    return e
}, xu = function (t, i) {
    var e = t._targets, r, n, o;
    for (r in i) for (n = e.length; n--;) o = t._ptLookup[n][r], o && (o = o.d) && (o._pt && (o = wu(o, r)), o && o.modifier && o.modifier(i[r], t, e[n], r))
}, as = function (t, i) {
    return {
        name: t, headless: 1, rawVars: 1, init: function (r, n, o) {
            o._onInit = function (a) {
                var l, u;
                if (zt(n) && (l = {}, fe(n, function (c) {
                    return l[c] = 1
                }), n = l), i) {
                    l = {};
                    for (u in n) l[u] = i(n[u]);
                    n = l
                }
                xu(a, n)
            }
        }
    }
}, pe = Bn.registerPlugin({
    name: "attr", init: function (t, i, e, r, n) {
        var o, a, l;
        this.tween = e;
        for (o in i) l = t.getAttribute(o) || "", a = this.add(t, "setAttribute", (l || 0) + "", i[o], r, n, 0, 0, o), a.op = o, a.b = l, this._props.push(o)
    }, render: function (t, i) {
        for (var e = i._pt; e;) Xt ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), e = e._next
    }
}, {
    name: "endArray", headless: 1, init: function (t, i) {
        for (var e = i.length; e--;) this.add(t, e, t[e] || 0, i[e], 0, 0, 0, 0, 0, 1)
    }
}, as("roundProps", Ss), as("modifiers"), as("snap", wa)) || Bn;
kt.version = se.version = pe.version = "3.13.0";
sa = 1;
Vs() && Tr();
K.Power0;
K.Power1;
K.Power2;
K.Power3;
K.Power4;
K.Linear;
K.Quad;
K.Cubic;
K.Quart;
K.Quint;
K.Strong;
K.Elastic;
K.Back;
K.SteppedEase;
K.Bounce;
K.Sine;
K.Expo;
K.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var bo, wi, pr, eo, Wi, To, io, bu = function () {
        return typeof window < "u"
    }, ci = {}, Ii = 180 / Math.PI, _r = Math.PI / 180, sr = Math.atan2, So = 1e8, ro = /([A-Z])/g,
    Tu = /(left|right|width|margin|padding|x)/i, Su = /[\s,\(]\S/,
    Ke = {autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity"}, Es = function (t, i) {
        return i.set(i.t, i.p, Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i)
    }, Pu = function (t, i) {
        return i.set(i.t, i.p, t === 1 ? i.e : Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u, i)
    }, ku = function (t, i) {
        return i.set(i.t, i.p, t ? Math.round((i.s + i.c * t) * 1e4) / 1e4 + i.u : i.b, i)
    }, Eu = function (t, i) {
        var e = i.s + i.c * t;
        i.set(i.t, i.p, ~~(e + (e < 0 ? -.5 : .5)) + i.u, i)
    }, Wa = function (t, i) {
        return i.set(i.t, i.p, t ? i.e : i.b, i)
    }, Ba = function (t, i) {
        return i.set(i.t, i.p, t !== 1 ? i.b : i.e, i)
    }, Cu = function (t, i, e) {
        return t.style[i] = e
    }, Ou = function (t, i, e) {
        return t.style.setProperty(i, e)
    }, Mu = function (t, i, e) {
        return t._gsap[i] = e
    }, Du = function (t, i, e) {
        return t._gsap.scaleX = t._gsap.scaleY = e
    }, Ru = function (t, i, e, r, n) {
        var o = t._gsap;
        o.scaleX = o.scaleY = e, o.renderTransform(n, o)
    }, Au = function (t, i, e, r, n) {
        var o = t._gsap;
        o[i] = e, o.renderTransform(n, o)
    }, dt = "transform", de = dt + "Origin", Lu = function s(t, i) {
        var e = this, r = this.target, n = r.style, o = r._gsap;
        if (t in ci && n) {
            if (this.tfm = this.tfm || {}, t !== "transform") t = Ke[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function (a) {
                return e.tfm[a] = si(r, a)
            }) : this.tfm[t] = o.x ? o[t] : si(r, t), t === de && (this.tfm.zOrigin = o.zOrigin); else return Ke.transform.split(",").forEach(function (a) {
                return s.call(e, a, i)
            });
            if (this.props.indexOf(dt) >= 0) return;
            o.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(de, i, "")), t = dt
        }
        (n || i) && this.props.push(t, i, n[t])
    }, Va = function (t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    }, zu = function () {
        var t = this.props, i = this.target, e = i.style, r = i._gsap, n, o;
        for (n = 0; n < t.length; n += 3) t[n + 1] ? t[n + 1] === 2 ? i[t[n]](t[n + 2]) : i[t[n]] = t[n + 2] : t[n + 2] ? e[t[n]] = t[n + 2] : e.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(ro, "-$1").toLowerCase());
        if (this.tfm) {
            for (o in this.tfm) r[o] = this.tfm[o];
            r.svg && (r.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), n = io(), (!n || !n.isStart) && !e[dt] && (Va(e), r.zOrigin && e[de] && (e[de] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1)
        }
    }, Ha = function (t, i) {
        var e = {target: t, props: [], revert: zu, save: Lu};
        return t._gsap || pe.core.getCache(t), i && t.style && t.nodeType && i.split(",").forEach(function (r) {
            return e.save(r)
        }), e
    }, Ua, Cs = function (t, i) {
        var e = wi.createElementNS ? wi.createElementNS((i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : wi.createElement(t);
        return e && e.style ? e : wi.createElement(t)
    }, Le = function s(t, i, e) {
        var r = getComputedStyle(t);
        return r[i] || r.getPropertyValue(i.replace(ro, "-$1").toLowerCase()) || r.getPropertyValue(i) || !e && s(t, Sr(i) || i, 1) || ""
    }, Po = "O,Moz,ms,Ms,Webkit".split(","), Sr = function (t, i, e) {
        var r = i || Wi, n = r.style, o = 5;
        if (t in n && !e) return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); o-- && !(Po[o] + t in n);) ;
        return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Po[o] : "") + t
    }, Os = function () {
        bu() && window.document && (bo = window, wi = bo.document, pr = wi.documentElement, Wi = Cs("div") || {style: {}}, Cs("div"), dt = Sr(dt), de = dt + "Origin", Wi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ua = !!Sr("perspective"), io = pe.core.reverting, eo = 1)
    }, ko = function (t) {
        var i = t.ownerSVGElement, e = Cs("svg", i && i.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            r = t.cloneNode(!0), n;
        r.style.display = "block", e.appendChild(r), pr.appendChild(e);
        try {
            n = r.getBBox()
        } catch {
        }
        return e.removeChild(r), pr.removeChild(e), n
    }, Eo = function (t, i) {
        for (var e = i.length; e--;) if (t.hasAttribute(i[e])) return t.getAttribute(i[e])
    }, qa = function (t) {
        var i, e;
        try {
            i = t.getBBox()
        } catch {
            i = ko(t), e = 1
        }
        return i && (i.width || i.height) || e || (i = ko(t)), i && !i.width && !i.x && !i.y ? {
            x: +Eo(t, ["x", "cx", "x1"]) || 0,
            y: +Eo(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : i
    }, $a = function (t) {
        return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && qa(t))
    }, ji = function (t, i) {
        if (i) {
            var e = t.style, r;
            i in ci && i !== de && (i = dt), e.removeProperty ? (r = i.substr(0, 2), (r === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i), e.removeProperty(r === "--" ? i : i.replace(ro, "-$1").toLowerCase())) : e.removeAttribute(i)
        }
    }, xi = function (t, i, e, r, n, o) {
        var a = new he(t._pt, i, e, 0, 1, o ? Ba : Wa);
        return t._pt = a, a.b = r, a.e = n, t._props.push(e), a
    }, Co = {deg: 1, rad: 1, turn: 1}, Nu = {grid: 1, flex: 1}, Ci = function s(t, i, e, r) {
        var n = parseFloat(e) || 0, o = (e + "").trim().substr((n + "").length) || "px", a = Wi.style, l = Tu.test(i),
            u = t.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), p = 100,
            h = r === "px", f = r === "%", _, d, g, b;
        if (r === o || !n || Co[r] || Co[o]) return n;
        if (o !== "px" && !h && (n = s(t, i, e, "px")), b = t.getCTM && $a(t), (f || o === "%") && (ci[i] || ~i.indexOf("adius"))) return _ = b ? t.getBBox()[l ? "width" : "height"] : t[c], xt(f ? n / _ * p : n / 100 * _);
        if (a[l ? "width" : "height"] = p + (h ? o : r), d = r !== "rem" && ~i.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode, b && (d = (t.ownerSVGElement || {}).parentNode), (!d || d === wi || !d.appendChild) && (d = wi.body), g = d._gsap, g && f && g.width && l && g.time === be.time && !g.uncache) return xt(n / g.width * p);
        if (f && (i === "height" || i === "width")) {
            var w = t.style[i];
            t.style[i] = p + r, _ = t[c], w ? t.style[i] = w : ji(t, i)
        } else (f || o === "%") && !Nu[Le(d, "display")] && (a.position = Le(t, "position")), d === t && (a.position = "static"), d.appendChild(Wi), _ = Wi[c], d.removeChild(Wi), a.position = "absolute";
        return l && f && (g = Hi(d), g.time = be.time, g.width = d[c]), xt(h ? _ * n / p : _ && n ? p / _ * n : 0)
    }, si = function (t, i, e, r) {
        var n;
        return eo || Os(), i in Ke && i !== "transform" && (i = Ke[i], ~i.indexOf(",") && (i = i.split(",")[0])), ci[i] && i !== "transform" ? (n = an(t, r), n = i !== "transformOrigin" ? n[i] : n.svg ? n.origin : Hn(Le(t, de)) + " " + n.zOrigin + "px") : (n = t.style[i], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Vn[i] && Vn[i](t, i, e) || Le(t, i) || ua(t, i) || (i === "opacity" ? 1 : 0))), e && !~(n + "").trim().indexOf(" ") ? Ci(t, i, n, e) + e : n
    }, Fu = function (t, i, e, r) {
        if (!e || e === "none") {
            var n = Sr(i, t, 1), o = n && Le(t, n, 1);
            o && o !== e ? (i = n, e = o) : i === "borderColor" && (e = Le(t, "borderTopColor"))
        }
        var a = new he(this._pt, t.style, i, 0, 1, Ia), l = 0, u = 0, c, p, h, f, _, d, g, b, w, S, v, T;
        if (a.b = e, a.e = r, e += "", r += "", r.substring(0, 6) === "var(--" && (r = Le(t, r.substring(4, r.indexOf(")")))), r === "auto" && (d = t.style[i], t.style[i] = r, r = Le(t, i) || r, d ? t.style[i] = d : ji(t, i)), c = [e, r], Ca(c), e = c[0], r = c[1], h = e.match(cr) || [], T = r.match(cr) || [], T.length) {
            for (; p = cr.exec(r);) g = p[0], w = r.substring(l, p.index), _ ? _ = (_ + 1) % 5 : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") && (_ = 1), g !== (d = h[u++] || "") && (f = parseFloat(d) || 0, v = d.substr((f + "").length), g.charAt(1) === "=" && (g = dr(f, g) + v), b = parseFloat(g), S = g.substr((b + "").length), l = cr.lastIndex - S.length, S || (S = S || Pe.units[i] || v, l === r.length && (r += S, a.e += S)), v !== S && (f = Ci(t, i, d, S) || 0), a._pt = {
                _next: a._pt,
                p: w || u === 1 ? w : ",",
                s: f,
                c: b - f,
                m: _ && _ < 4 || i === "zIndex" ? Math.round : 0
            });
            a.c = l < r.length ? r.substring(l, r.length) : ""
        } else a.r = i === "display" && r === "none" ? Ba : Wa;
        return ra.test(r) && (a.e = 0), this._pt = a, a
    }, Oo = {top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%"}, Iu = function (t) {
        var i = t.split(" "), e = i[0], r = i[1] || "50%";
        return (e === "top" || e === "bottom" || r === "left" || r === "right") && (t = e, e = r, r = t), i[0] = Oo[e] || e, i[1] = Oo[r] || r, i.join(" ")
    }, Yu = function (t, i) {
        if (i.tween && i.tween._time === i.tween._dur) {
            var e = i.t, r = e.style, n = i.u, o = e._gsap, a, l, u;
            if (n === "all" || n === !0) r.cssText = "", l = 1; else for (n = n.split(","), u = n.length; --u > -1;) a = n[u], ci[a] && (l = 1, a = a === "transformOrigin" ? de : dt), ji(e, a);
            l && (ji(e, dt), o && (o.svg && e.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", an(e, 1), o.uncache = 1, Va(r)))
        }
    }, Vn = {
        clearProps: function (t, i, e, r, n) {
            if (n.data !== "isFromStart") {
                var o = t._pt = new he(t._pt, i, e, 0, 0, Yu);
                return o.u = r, o.pr = -10, o.tween = n, t._props.push(e), 1
            }
        }
    }, on = [1, 0, 0, 1, 0, 0], Ga = {}, Ka = function (t) {
        return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
    }, Mo = function (t) {
        var i = Le(t, dt);
        return Ka(i) ? on : i.substr(7).match(ia).map(xt)
    }, no = function (t, i) {
        var e = t._gsap || Hi(t), r = t.style, n = Mo(t), o, a, l, u;
        return e.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? on : n) : (n === on && !t.offsetParent && t !== pr && !e.svg && (l = r.display, r.display = "block", o = t.parentNode, (!o || !t.offsetParent && !t.getBoundingClientRect().width) && (u = 1, a = t.nextElementSibling, pr.appendChild(t)), n = Mo(t), l ? r.display = l : ji(t, "display"), u && (a ? o.insertBefore(t, a) : o ? o.appendChild(t) : pr.removeChild(t))), i && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    }, Ms = function (t, i, e, r, n, o) {
        var a = t._gsap, l = n || no(t, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, p = a.xOffset || 0, h = a.yOffset || 0,
            f = l[0], _ = l[1], d = l[2], g = l[3], b = l[4], w = l[5], S = i.split(" "), v = parseFloat(S[0]) || 0,
            T = parseFloat(S[1]) || 0, P, x, C, k;
        e ? l !== on && (x = f * g - _ * d) && (C = v * (g / x) + T * (-d / x) + (d * w - g * b) / x, k = v * (-_ / x) + T * (f / x) - (f * w - _ * b) / x, v = C, T = k) : (P = qa(t), v = P.x + (~S[0].indexOf("%") ? v / 100 * P.width : v), T = P.y + (~(S[1] || S[0]).indexOf("%") ? T / 100 * P.height : T)), r || r !== !1 && a.smooth ? (b = v - u, w = T - c, a.xOffset = p + (b * f + w * d) - b, a.yOffset = h + (b * _ + w * g) - w) : a.xOffset = a.yOffset = 0, a.xOrigin = v, a.yOrigin = T, a.smooth = !!r, a.origin = i, a.originIsAbsolute = !!e, t.style[de] = "0px 0px", o && (xi(o, a, "xOrigin", u, v), xi(o, a, "yOrigin", c, T), xi(o, a, "xOffset", p, a.xOffset), xi(o, a, "yOffset", h, a.yOffset)), t.setAttribute("data-svg-origin", v + " " + T)
    }, an = function (t, i) {
        var e = t._gsap || new Ra(t);
        if ("x" in e && !i && !e.uncache) return e;
        var r = t.style, n = e.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(t), u = Le(t, de) || "0", c, p, h, f,
            _, d, g, b, w, S, v, T, P, x, C, k, E, N, O, q, H, Z, $, z, Q, st, m, ot, jt, Ne, pt, Nt;
        return c = p = h = d = g = b = w = S = v = 0, f = _ = 1, e.svg = !!(t.getCTM && $a(t)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (r[dt] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[dt] !== "none" ? l[dt] : "")), r.scale = r.rotate = r.translate = "none"), x = no(t, e.svg), e.svg && (e.uncache ? (Q = t.getBBox(), u = e.xOrigin - Q.x + "px " + (e.yOrigin - Q.y) + "px", z = "") : z = !i && t.getAttribute("data-svg-origin"), Ms(t, z || u, !!z || e.originIsAbsolute, e.smooth !== !1, x)), T = e.xOrigin || 0, P = e.yOrigin || 0, x !== on && (N = x[0], O = x[1], q = x[2], H = x[3], c = Z = x[4], p = $ = x[5], x.length === 6 ? (f = Math.sqrt(N * N + O * O), _ = Math.sqrt(H * H + q * q), d = N || O ? sr(O, N) * Ii : 0, w = q || H ? sr(q, H) * Ii + d : 0, w && (_ *= Math.abs(Math.cos(w * _r))), e.svg && (c -= T - (T * N + P * q), p -= P - (T * O + P * H))) : (Nt = x[6], Ne = x[7], m = x[8], ot = x[9], jt = x[10], pt = x[11], c = x[12], p = x[13], h = x[14], C = sr(Nt, jt), g = C * Ii, C && (k = Math.cos(-C), E = Math.sin(-C), z = Z * k + m * E, Q = $ * k + ot * E, st = Nt * k + jt * E, m = Z * -E + m * k, ot = $ * -E + ot * k, jt = Nt * -E + jt * k, pt = Ne * -E + pt * k, Z = z, $ = Q, Nt = st), C = sr(-q, jt), b = C * Ii, C && (k = Math.cos(-C), E = Math.sin(-C), z = N * k - m * E, Q = O * k - ot * E, st = q * k - jt * E, pt = H * E + pt * k, N = z, O = Q, q = st), C = sr(O, N), d = C * Ii, C && (k = Math.cos(C), E = Math.sin(C), z = N * k + O * E, Q = Z * k + $ * E, O = O * k - N * E, $ = $ * k - Z * E, N = z, Z = Q), g && Math.abs(g) + Math.abs(d) > 359.9 && (g = d = 0, b = 180 - b), f = xt(Math.sqrt(N * N + O * O + q * q)), _ = xt(Math.sqrt($ * $ + Nt * Nt)), C = sr(Z, $), w = Math.abs(C) > 2e-4 ? C * Ii : 0, v = pt ? 1 / (pt < 0 ? -pt : pt) : 0), e.svg && (z = t.getAttribute("transform"), e.forceCSS = t.setAttribute("transform", "") || !Ka(Le(t, dt)), z && t.setAttribute("transform", z))), Math.abs(w) > 90 && Math.abs(w) < 270 && (n ? (f *= -1, w += d <= 0 ? 180 : -180, d += d <= 0 ? 180 : -180) : (_ *= -1, w += w <= 0 ? 180 : -180)), i = i || e.uncache, e.x = c - ((e.xPercent = c && (!i && e.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? t.offsetWidth * e.xPercent / 100 : 0) + o, e.y = p - ((e.yPercent = p && (!i && e.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-p) ? -50 : 0))) ? t.offsetHeight * e.yPercent / 100 : 0) + o, e.z = h + o, e.scaleX = xt(f), e.scaleY = xt(_), e.rotation = xt(d) + a, e.rotationX = xt(g) + a, e.rotationY = xt(b) + a, e.skewX = w + a, e.skewY = S + a, e.transformPerspective = v + o, (e.zOrigin = parseFloat(u.split(" ")[2]) || !i && e.zOrigin || 0) && (r[de] = Hn(u)), e.xOffset = e.yOffset = 0, e.force3D = Pe.force3D, e.renderTransform = e.svg ? Wu : Ua ? Za : Xu, e.uncache = 0, e
    }, Hn = function (t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, ls = function (t, i, e) {
        var r = Gt(i);
        return xt(parseFloat(i) + parseFloat(Ci(t, "x", e + "px", r))) + r
    }, Xu = function (t, i) {
        i.z = "0px", i.rotationY = i.rotationX = "0deg", i.force3D = 0, Za(t, i)
    }, Ni = "0deg", Dr = "0px", Fi = ") ", Za = function (t, i) {
        var e = i || this, r = e.xPercent, n = e.yPercent, o = e.x, a = e.y, l = e.z, u = e.rotation, c = e.rotationY,
            p = e.rotationX, h = e.skewX, f = e.skewY, _ = e.scaleX, d = e.scaleY, g = e.transformPerspective,
            b = e.force3D, w = e.target, S = e.zOrigin, v = "", T = b === "auto" && t && t !== 1 || b === !0;
        if (S && (p !== Ni || c !== Ni)) {
            var P = parseFloat(c) * _r, x = Math.sin(P), C = Math.cos(P), k;
            P = parseFloat(p) * _r, k = Math.cos(P), o = ls(w, o, x * k * -S), a = ls(w, a, -Math.sin(P) * -S), l = ls(w, l, C * k * -S + S)
        }
        g !== Dr && (v += "perspective(" + g + Fi), (r || n) && (v += "translate(" + r + "%, " + n + "%) "), (T || o !== Dr || a !== Dr || l !== Dr) && (v += l !== Dr || T ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + Fi), u !== Ni && (v += "rotate(" + u + Fi), c !== Ni && (v += "rotateY(" + c + Fi), p !== Ni && (v += "rotateX(" + p + Fi), (h !== Ni || f !== Ni) && (v += "skew(" + h + ", " + f + Fi), (_ !== 1 || d !== 1) && (v += "scale(" + _ + ", " + d + Fi), w.style[dt] = v || "translate(0, 0)"
    }, Wu = function (t, i) {
        var e = i || this, r = e.xPercent, n = e.yPercent, o = e.x, a = e.y, l = e.rotation, u = e.skewX, c = e.skewY,
            p = e.scaleX, h = e.scaleY, f = e.target, _ = e.xOrigin, d = e.yOrigin, g = e.xOffset, b = e.yOffset,
            w = e.forceCSS, S = parseFloat(o), v = parseFloat(a), T, P, x, C, k;
        l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= _r, u *= _r, T = Math.cos(l) * p, P = Math.sin(l) * p, x = Math.sin(l - u) * -h, C = Math.cos(l - u) * h, u && (c *= _r, k = Math.tan(u - c), k = Math.sqrt(1 + k * k), x *= k, C *= k, c && (k = Math.tan(c), k = Math.sqrt(1 + k * k), T *= k, P *= k)), T = xt(T), P = xt(P), x = xt(x), C = xt(C)) : (T = p, C = h, P = x = 0), (S && !~(o + "").indexOf("px") || v && !~(a + "").indexOf("px")) && (S = Ci(f, "x", o, "px"), v = Ci(f, "y", a, "px")), (_ || d || g || b) && (S = xt(S + _ - (_ * T + d * x) + g), v = xt(v + d - (_ * P + d * C) + b)), (r || n) && (k = f.getBBox(), S = xt(S + r / 100 * k.width), v = xt(v + n / 100 * k.height)), k = "matrix(" + T + "," + P + "," + x + "," + C + "," + S + "," + v + ")", f.setAttribute("transform", k), w && (f.style[dt] = k)
    }, Bu = function (t, i, e, r, n) {
        var o = 360, a = zt(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? Ii : 1), u = l - r, c = r + u + "deg", p, h;
        return a && (p = n.split("_")[1], p === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), p === "cw" && u < 0 ? u = (u + o * So) % o - ~~(u / o) * o : p === "ccw" && u > 0 && (u = (u - o * So) % o - ~~(u / o) * o)), t._pt = h = new he(t._pt, i, e, r, u, Pu), h.e = c, h.u = "deg", t._props.push(e), h
    }, Do = function (t, i) {
        for (var e in i) t[e] = i[e];
        return t
    }, Vu = function (t, i, e) {
        var r = Do({}, e._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = e.style, a, l, u, c, p, h, f, _;
        r.svg ? (u = e.getAttribute("transform"), e.setAttribute("transform", ""), o[dt] = i, a = an(e, 1), ji(e, dt), e.setAttribute("transform", u)) : (u = getComputedStyle(e)[dt], o[dt] = i, a = an(e, 1), o[dt] = u);
        for (l in ci) u = r[l], c = a[l], u !== c && n.indexOf(l) < 0 && (f = Gt(u), _ = Gt(c), p = f !== _ ? Ci(e, l, u, _) : parseFloat(u), h = parseFloat(c), t._pt = new he(t._pt, a, l, p, h - p, Es), t._pt.u = _ || 0, t._props.push(l));
        Do(a, r)
    };
fe("padding,margin,Width,Radius", function (s, t) {
    var i = "Top", e = "Right", r = "Bottom", n = "Left",
        o = (t < 3 ? [i, e, r, n] : [i + n, i + e, r + e, r + n]).map(function (a) {
            return t < 2 ? s + a : "border" + a + s
        });
    Vn[t > 1 ? "border" + s : s] = function (a, l, u, c, p) {
        var h, f;
        if (arguments.length < 4) return h = o.map(function (_) {
            return si(a, _, u)
        }), f = h.join(" "), f.split(h[0]).length === 5 ? h[0] : f;
        h = (c + "").split(" "), f = {}, o.forEach(function (_, d) {
            return f[_] = h[d] = h[d] || h[(d - 1) / 2 | 0]
        }), a.init(l, f, p)
    }
});
var ja = {
    name: "css", register: Os, targetTest: function (t) {
        return t.style && t.nodeType
    }, init: function (t, i, e, r, n) {
        var o = this._props, a = t.style, l = e.vars.startAt, u, c, p, h, f, _, d, g, b, w, S, v, T, P, x, C;
        eo || Os(), this.styles = this.styles || Ha(t), C = this.styles.props, this.tween = e;
        for (d in i) if (d !== "autoRound" && (c = i[d], !(we[d] && Aa(d, i, e, r, t, n)))) {
            if (f = typeof c, _ = Vn[d], f === "function" && (c = c.call(e, r, t, n), f = typeof c), f === "string" && ~c.indexOf("random(") && (c = rn(c)), _) _(this, t, d, c, e) && (x = 1); else if (d.substr(0, 2) === "--") u = (getComputedStyle(t).getPropertyValue(d) + "").trim(), c += "", Pi.lastIndex = 0, Pi.test(u) || (g = Gt(u), b = Gt(c)), b ? g !== b && (u = Ci(t, d, u, b) + b) : g && (c += g), this.add(a, "setProperty", u, c, r, n, 0, 0, d), o.push(d), C.push(d, 0, a[d]); else if (f !== "undefined") {
                if (l && d in l ? (u = typeof l[d] == "function" ? l[d].call(e, r, t, n) : l[d], zt(u) && ~u.indexOf("random(") && (u = rn(u)), Gt(u + "") || u === "auto" || (u += Pe.units[d] || Gt(si(t, d)) || ""), (u + "").charAt(1) === "=" && (u = si(t, d))) : u = si(t, d), h = parseFloat(u), w = f === "string" && c.charAt(1) === "=" && c.substr(0, 2), w && (c = c.substr(2)), p = parseFloat(c), d in Ke && (d === "autoAlpha" && (h === 1 && si(t, "visibility") === "hidden" && p && (h = 0), C.push("visibility", 0, a.visibility), xi(this, a, "visibility", h ? "inherit" : "hidden", p ? "inherit" : "hidden", !p)), d !== "scale" && d !== "transform" && (d = Ke[d], ~d.indexOf(",") && (d = d.split(",")[0]))), S = d in ci, S) {
                    if (this.styles.save(d), f === "string" && c.substring(0, 6) === "var(--" && (c = Le(t, c.substring(4, c.indexOf(")"))), p = parseFloat(c)), v || (T = t._gsap, T.renderTransform && !i.parseTransform || an(t, i.parseTransform), P = i.smoothOrigin !== !1 && T.smooth, v = this._pt = new he(this._pt, a, dt, 0, 1, T.renderTransform, T, 0, -1), v.dep = 1), d === "scale") this._pt = new he(this._pt, T, "scaleY", T.scaleY, (w ? dr(T.scaleY, w + p) : p) - T.scaleY || 0, Es), this._pt.u = 0, o.push("scaleY", d), d += "X"; else if (d === "transformOrigin") {
                        C.push(de, 0, a[de]), c = Iu(c), T.svg ? Ms(t, c, 0, P, 0, this) : (b = parseFloat(c.split(" ")[2]) || 0, b !== T.zOrigin && xi(this, T, "zOrigin", T.zOrigin, b), xi(this, a, d, Hn(u), Hn(c)));
                        continue
                    } else if (d === "svgOrigin") {
                        Ms(t, c, 1, P, 0, this);
                        continue
                    } else if (d in Ga) {
                        Bu(this, T, d, h, w ? dr(h, w + c) : c);
                        continue
                    } else if (d === "smoothOrigin") {
                        xi(this, T, "smooth", T.smooth, c);
                        continue
                    } else if (d === "force3D") {
                        T[d] = c;
                        continue
                    } else if (d === "transform") {
                        Vu(this, c, t);
                        continue
                    }
                } else d in a || (d = Sr(d) || d);
                if (S || (p || p === 0) && (h || h === 0) && !Su.test(c) && d in a) g = (u + "").substr((h + "").length), p || (p = 0), b = Gt(c) || (d in Pe.units ? Pe.units[d] : g), g !== b && (h = Ci(t, d, u, b)), this._pt = new he(this._pt, S ? T : a, d, h, (w ? dr(h, w + p) : p) - h, !S && (b === "px" || d === "zIndex") && i.autoRound !== !1 ? Eu : Es), this._pt.u = b || 0, g !== b && b !== "%" && (this._pt.b = u, this._pt.r = ku); else if (d in a) Fu.call(this, t, d, u, w ? w + c : c); else if (d in t) this.add(t, d, u || t[d], w ? w + c : c, r, n); else if (d !== "parseTransform") {
                    Us(d, c);
                    continue
                }
                S || (d in a ? C.push(d, 0, a[d]) : typeof t[d] == "function" ? C.push(d, 2, t[d]()) : C.push(d, 1, u || t[d])), o.push(d)
            }
        }
        x && Ya(this)
    }, render: function (t, i) {
        if (i.tween._time || !io()) for (var e = i._pt; e;) e.r(t, e.d), e = e._next; else i.styles.revert()
    }, get: si, aliases: Ke, getSetter: function (t, i, e) {
        var r = Ke[i];
        return r && r.indexOf(",") < 0 && (i = r), i in ci && i !== de && (t._gsap.x || si(t, "x")) ? e && To === e ? i === "scale" ? Du : Mu : (To = e || {}) && (i === "scale" ? Ru : Au) : t.style && !Bs(t.style[i]) ? Cu : ~i.indexOf("-") ? Ou : Js(t, i)
    }, core: {_removeProperty: ji, _getMatrix: no}
};
pe.utils.checkPrefix = Sr;
pe.core.getStyleSaver = Ha;
(function (s, t, i, e) {
    var r = fe(s + "," + t + "," + i, function (n) {
        ci[n] = 1
    });
    fe(t, function (n) {
        Pe.units[n] = "deg", Ga[n] = 1
    }), Ke[r[13]] = s + "," + t, fe(e, function (n) {
        var o = n.split(":");
        Ke[o[1]] = r[o[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
fe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (s) {
    Pe.units[s] = "px"
});
pe.registerPlugin(ja);
var at = pe.registerPlugin(ja) || pe;
at.core.Tween;

function Hu(s, t) {
    for (var i = 0; i < t.length; i++) {
        var e = t[i];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(s, e.key, e)
    }
}

function Uu(s, t, i) {
    return t && Hu(s.prototype, t), s
}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var Yt, Dn, Te, bi, Ti, gr, Qa, Yi, Hr, Ja, ai, Be, tl, el = function () {
    return Yt || typeof window < "u" && (Yt = window.gsap) && Yt.registerPlugin && Yt
}, il = 1, hr = [], V = [], je = [], Ur = Date.now, Ds = function (t, i) {
    return i
}, qu = function () {
    var t = Hr.core, i = t.bridge || {}, e = t._scrollers, r = t._proxies;
    e.push.apply(e, V), r.push.apply(r, je), V = e, je = r, Ds = function (o, a) {
        return i[o](a)
    }
}, ki = function (t, i) {
    return ~je.indexOf(t) && je[je.indexOf(t) + 1][i]
}, qr = function (t) {
    return !!~Ja.indexOf(t)
}, ee = function (t, i, e, r, n) {
    return t.addEventListener(i, e, {passive: r !== !1, capture: !!n})
}, te = function (t, i, e, r) {
    return t.removeEventListener(i, e, !!r)
}, gn = "scrollLeft", mn = "scrollTop", Rs = function () {
    return ai && ai.isPressed || V.cache++
}, Un = function (t, i) {
    var e = function r(n) {
        if (n || n === 0) {
            il && (Te.history.scrollRestoration = "manual");
            var o = ai && ai.isPressed;
            n = r.v = Math.round(n) || (ai && ai.iOS ? 1 : 0), t(n), r.cacheID = V.cache, o && Ds("ss", n)
        } else (i || V.cache !== r.cacheID || Ds("ref")) && (r.cacheID = V.cache, r.v = t());
        return r.v + r.offset
    };
    return e.offset = 0, t && e
}, oe = {
    s: gn, p: "left", p2: "Left", os: "right", os2: "Right", d: "width", d2: "Width", a: "x", sc: Un(function (s) {
        return arguments.length ? Te.scrollTo(s, Mt.sc()) : Te.pageXOffset || bi[gn] || Ti[gn] || gr[gn] || 0
    })
}, Mt = {
    s: mn,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: oe,
    sc: Un(function (s) {
        return arguments.length ? Te.scrollTo(oe.sc(), s) : Te.pageYOffset || bi[mn] || Ti[mn] || gr[mn] || 0
    })
}, ue = function (t, i) {
    return (i && i._ctx && i._ctx.selector || Yt.utils.toArray)(t)[0] || (typeof t == "string" && Yt.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null)
}, $u = function (t, i) {
    for (var e = i.length; e--;) if (i[e] === t || i[e].contains(t)) return !0;
    return !1
}, Oi = function (t, i) {
    var e = i.s, r = i.sc;
    qr(t) && (t = bi.scrollingElement || Ti);
    var n = V.indexOf(t), o = r === Mt.sc ? 1 : 2;
    !~n && (n = V.push(t) - 1), V[n + o] || ee(t, "scroll", Rs);
    var a = V[n + o], l = a || (V[n + o] = Un(ki(t, e), !0) || (qr(t) ? r : Un(function (u) {
        return arguments.length ? t[e] = u : t[e]
    })));
    return l.target = t, a || (l.smooth = Yt.getProperty(t, "scrollBehavior") === "smooth"), l
}, As = function (t, i, e) {
    var r = t, n = t, o = Ur(), a = o, l = i || 50, u = Math.max(500, l * 3), c = function (_, d) {
        var g = Ur();
        d || g - o > l ? (n = r, r = _, a = o, o = g) : e ? r += _ : r = n + (_ - n) / (g - a) * (o - a)
    }, p = function () {
        n = r = e ? 0 : r, a = o = 0
    }, h = function (_) {
        var d = a, g = n, b = Ur();
        return (_ || _ === 0) && _ !== r && c(_), o === a || b - a > u ? 0 : (r + (e ? g : -g)) / ((e ? b : o) - d) * 1e3
    };
    return {update: c, reset: p, getVelocity: h}
}, Rr = function (t, i) {
    return i && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t
}, Ro = function (t) {
    var i = Math.max.apply(Math, t), e = Math.min.apply(Math, t);
    return Math.abs(i) >= Math.abs(e) ? i : e
}, rl = function () {
    Hr = Yt.core.globals().ScrollTrigger, Hr && Hr.core && qu()
}, nl = function (t) {
    return Yt = t || el(), !Dn && Yt && typeof document < "u" && document.body && (Te = window, bi = document, Ti = bi.documentElement, gr = bi.body, Ja = [Te, bi, Ti, gr], Yt.utils.clamp, tl = Yt.core.context || function () {
    }, Yi = "onpointerenter" in gr ? "pointer" : "mouse", Qa = bt.isTouch = Te.matchMedia && Te.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Te || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Be = bt.eventTypes = ("ontouchstart" in Ti ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Ti ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function () {
        return il = 0
    }, 500), rl(), Dn = 1), Dn
};
oe.op = Mt;
V.cache = 0;
var bt = (function () {
    function s(i) {
        this.init(i)
    }

    var t = s.prototype;
    return t.init = function (e) {
        Dn || nl(Yt) || console.warn("Please gsap.registerPlugin(Observer)"), Hr || rl();
        var r = e.tolerance, n = e.dragMinimum, o = e.type, a = e.target, l = e.lineHeight, u = e.debounce,
            c = e.preventDefault, p = e.onStop, h = e.onStopDelay, f = e.ignore, _ = e.wheelSpeed, d = e.event,
            g = e.onDragStart, b = e.onDragEnd, w = e.onDrag, S = e.onPress, v = e.onRelease, T = e.onRight,
            P = e.onLeft, x = e.onUp, C = e.onDown, k = e.onChangeX, E = e.onChangeY, N = e.onChange, O = e.onToggleX,
            q = e.onToggleY, H = e.onHover, Z = e.onHoverEnd, $ = e.onMove, z = e.ignoreCheck, Q = e.isNormalizer,
            st = e.onGestureStart, m = e.onGestureEnd, ot = e.onWheel, jt = e.onEnable, Ne = e.onDisable,
            pt = e.onClick, Nt = e.scrollSpeed, Wt = e.capture, Tt = e.allowClicks, Qt = e.lockAxis, Bt = e.onLockAxis;
        this.target = a = ue(a) || Ti, this.vars = e, f && (f = Yt.utils.toArray(f)), r = r || 1e-9, n = n || 0, _ = _ || 1, Nt = Nt || 1, o = o || "wheel,touch,pointer", u = u !== !1, l || (l = parseFloat(Te.getComputedStyle(gr).lineHeight) || 22);
        var fi, Jt, ae, j, yt, le, _e, y = this, ge = 0, Je = 0, hi = e.passive || !c && e.passive !== !1,
            _t = Oi(a, oe), ti = Oi(a, Mt), di = _t(), Di = ti(),
            Dt = ~o.indexOf("touch") && !~o.indexOf("pointer") && Be[0] === "pointerdown", pi = qr(a),
            vt = a.ownerDocument || bi, Fe = [0, 0, 0], Ce = [0, 0, 0], ei = 0, Er = function () {
                return ei = Ur()
            }, St = function (L, J) {
                return (y.event = L) && f && $u(L.target, f) || J && Dt && L.pointerType !== "touch" || z && z(L, J)
            }, hn = function () {
                y._vx.reset(), y._vy.reset(), Jt.pause(), p && p(y)
            }, ii = function () {
                var L = y.deltaX = Ro(Fe), J = y.deltaY = Ro(Ce), M = Math.abs(L) >= r, F = Math.abs(J) >= r;
                N && (M || F) && N(y, L, J, Fe, Ce), M && (T && y.deltaX > 0 && T(y), P && y.deltaX < 0 && P(y), k && k(y), O && y.deltaX < 0 != ge < 0 && O(y), ge = y.deltaX, Fe[0] = Fe[1] = Fe[2] = 0), F && (C && y.deltaY > 0 && C(y), x && y.deltaY < 0 && x(y), E && E(y), q && y.deltaY < 0 != Je < 0 && q(y), Je = y.deltaY, Ce[0] = Ce[1] = Ce[2] = 0), (j || ae) && ($ && $(y), ae && (g && ae === 1 && g(y), w && w(y), ae = 0), j = !1), le && !(le = !1) && Bt && Bt(y), yt && (ot(y), yt = !1), fi = 0
            }, ir = function (L, J, M) {
                Fe[M] += L, Ce[M] += J, y._vx.update(L), y._vy.update(J), u ? fi || (fi = requestAnimationFrame(ii)) : ii()
            }, rr = function (L, J) {
                Qt && !_e && (y.axis = _e = Math.abs(L) > Math.abs(J) ? "x" : "y", le = !0), _e !== "y" && (Fe[2] += L, y._vx.update(L, !0)), _e !== "x" && (Ce[2] += J, y._vy.update(J, !0)), u ? fi || (fi = requestAnimationFrame(ii)) : ii()
            }, _i = function (L) {
                if (!St(L, 1)) {
                    L = Rr(L, c);
                    var J = L.clientX, M = L.clientY, F = J - y.x, A = M - y.y, I = y.isDragging;
                    y.x = J, y.y = M, (I || (F || A) && (Math.abs(y.startX - J) >= n || Math.abs(y.startY - M) >= n)) && (ae = I ? 2 : 1, I || (y.isDragging = !0), rr(F, A))
                }
            }, Ri = y.onPress = function (Y) {
                St(Y, 1) || Y && Y.button || (y.axis = _e = null, Jt.pause(), y.isPressed = !0, Y = Rr(Y), ge = Je = 0, y.startX = y.x = Y.clientX, y.startY = y.y = Y.clientY, y._vx.reset(), y._vy.reset(), ee(Q ? a : vt, Be[1], _i, hi, !0), y.deltaX = y.deltaY = 0, S && S(y))
            }, U = y.onRelease = function (Y) {
                if (!St(Y, 1)) {
                    te(Q ? a : vt, Be[1], _i, !0);
                    var L = !isNaN(y.y - y.startY), J = y.isDragging,
                        M = J && (Math.abs(y.x - y.startX) > 3 || Math.abs(y.y - y.startY) > 3), F = Rr(Y);
                    !M && L && (y._vx.reset(), y._vy.reset(), c && Tt && Yt.delayedCall(.08, function () {
                        if (Ur() - ei > 300 && !Y.defaultPrevented) {
                            if (Y.target.click) Y.target.click(); else if (vt.createEvent) {
                                var A = vt.createEvent("MouseEvents");
                                A.initMouseEvent("click", !0, !0, Te, 1, F.screenX, F.screenY, F.clientX, F.clientY, !1, !1, !1, !1, 0, null), Y.target.dispatchEvent(A)
                            }
                        }
                    })), y.isDragging = y.isGesturing = y.isPressed = !1, p && J && !Q && Jt.restart(!0), ae && ii(), b && J && b(y), v && v(y, M)
                }
            }, Ai = function (L) {
                return L.touches && L.touches.length > 1 && (y.isGesturing = !0) && st(L, y.isDragging)
            }, Ie = function () {
                return (y.isGesturing = !1) || m(y)
            }, Ye = function (L) {
                if (!St(L)) {
                    var J = _t(), M = ti();
                    ir((J - di) * Nt, (M - Di) * Nt, 1), di = J, Di = M, p && Jt.restart(!0)
                }
            }, Xe = function (L) {
                if (!St(L)) {
                    L = Rr(L, c), ot && (yt = !0);
                    var J = (L.deltaMode === 1 ? l : L.deltaMode === 2 ? Te.innerHeight : 1) * _;
                    ir(L.deltaX * J, L.deltaY * J, 0), p && !Q && Jt.restart(!0)
                }
            }, Li = function (L) {
                if (!St(L)) {
                    var J = L.clientX, M = L.clientY, F = J - y.x, A = M - y.y;
                    y.x = J, y.y = M, j = !0, p && Jt.restart(!0), (F || A) && rr(F, A)
                }
            }, nr = function (L) {
                y.event = L, H(y)
            }, ri = function (L) {
                y.event = L, Z(y)
            }, Cr = function (L) {
                return St(L) || Rr(L, c) && pt(y)
            };
        Jt = y._dc = Yt.delayedCall(h || .25, hn).pause(), y.deltaX = y.deltaY = 0, y._vx = As(0, 50, !0), y._vy = As(0, 50, !0), y.scrollX = _t, y.scrollY = ti, y.isDragging = y.isGesturing = y.isPressed = !1, tl(this), y.enable = function (Y) {
            return y.isEnabled || (ee(pi ? vt : a, "scroll", Rs), o.indexOf("scroll") >= 0 && ee(pi ? vt : a, "scroll", Ye, hi, Wt), o.indexOf("wheel") >= 0 && ee(a, "wheel", Xe, hi, Wt), (o.indexOf("touch") >= 0 && Qa || o.indexOf("pointer") >= 0) && (ee(a, Be[0], Ri, hi, Wt), ee(vt, Be[2], U), ee(vt, Be[3], U), Tt && ee(a, "click", Er, !0, !0), pt && ee(a, "click", Cr), st && ee(vt, "gesturestart", Ai), m && ee(vt, "gestureend", Ie), H && ee(a, Yi + "enter", nr), Z && ee(a, Yi + "leave", ri), $ && ee(a, Yi + "move", Li)), y.isEnabled = !0, y.isDragging = y.isGesturing = y.isPressed = j = ae = !1, y._vx.reset(), y._vy.reset(), di = _t(), Di = ti(), Y && Y.type && Ri(Y), jt && jt(y)), y
        }, y.disable = function () {
            y.isEnabled && (hr.filter(function (Y) {
                return Y !== y && qr(Y.target)
            }).length || te(pi ? vt : a, "scroll", Rs), y.isPressed && (y._vx.reset(), y._vy.reset(), te(Q ? a : vt, Be[1], _i, !0)), te(pi ? vt : a, "scroll", Ye, Wt), te(a, "wheel", Xe, Wt), te(a, Be[0], Ri, Wt), te(vt, Be[2], U), te(vt, Be[3], U), te(a, "click", Er, !0), te(a, "click", Cr), te(vt, "gesturestart", Ai), te(vt, "gestureend", Ie), te(a, Yi + "enter", nr), te(a, Yi + "leave", ri), te(a, Yi + "move", Li), y.isEnabled = y.isPressed = y.isDragging = !1, Ne && Ne(y))
        }, y.kill = y.revert = function () {
            y.disable();
            var Y = hr.indexOf(y);
            Y >= 0 && hr.splice(Y, 1), ai === y && (ai = 0)
        }, hr.push(y), Q && qr(a) && (ai = y), y.enable(d)
    }, Uu(s, [{
        key: "velocityX", get: function () {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY", get: function () {
            return this._vy.getVelocity()
        }
    }]), s
})();
bt.version = "3.13.0";
bt.create = function (s) {
    return new bt(s)
};
bt.register = nl;
bt.getAll = function () {
    return hr.slice()
};
bt.getById = function (s) {
    return hr.filter(function (t) {
        return t.vars.id === s
    })[0]
};
el() && Yt.registerPlugin(bt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var D, lr, B, nt, xe, tt, so, qn, ln, $r, Nr, yn, qt, Jn, Ls, re, Ao, Lo, ur, sl, us, ol, ie, zs, al, ll, yi, Ns, oo,
    mr, ao, $n, Fs, cs, vn = 1, $t = Date.now, fs = $t(), ze = 0, Fr = 0, zo = function (t, i, e) {
        var r = ve(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
        return e["_" + i + "Clamp"] = r, r ? t.substr(6, t.length - 7) : t
    }, No = function (t, i) {
        return i && (!ve(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t
    }, Gu = function s() {
        return Fr && requestAnimationFrame(s)
    }, Fo = function () {
        return Jn = 1
    }, Io = function () {
        return Jn = 0
    }, $e = function (t) {
        return t
    }, Ir = function (t) {
        return Math.round(t * 1e5) / 1e5 || 0
    }, ul = function () {
        return typeof window < "u"
    }, cl = function () {
        return D || ul() && (D = window.gsap) && D.registerPlugin && D
    }, Qi = function (t) {
        return !!~so.indexOf(t)
    }, fl = function (t) {
        return (t === "Height" ? ao : B["inner" + t]) || xe["client" + t] || tt["client" + t]
    }, hl = function (t) {
        return ki(t, "getBoundingClientRect") || (Qi(t) ? function () {
            return Nn.width = B.innerWidth, Nn.height = ao, Nn
        } : function () {
            return oi(t)
        })
    }, Ku = function (t, i, e) {
        var r = e.d, n = e.d2, o = e.a;
        return (o = ki(t, "getBoundingClientRect")) ? function () {
            return o()[r]
        } : function () {
            return (i ? fl(n) : t["client" + n]) || 0
        }
    }, Zu = function (t, i) {
        return !i || ~je.indexOf(t) ? hl(t) : function () {
            return Nn
        }
    }, Ze = function (t, i) {
        var e = i.s, r = i.d2, n = i.d, o = i.a;
        return Math.max(0, (e = "scroll" + r) && (o = ki(t, e)) ? o() - hl(t)()[n] : Qi(t) ? (xe[e] || tt[e]) - fl(r) : t[e] - t["offset" + r])
    }, wn = function (t, i) {
        for (var e = 0; e < ur.length; e += 3) (!i || ~i.indexOf(ur[e + 1])) && t(ur[e], ur[e + 1], ur[e + 2])
    }, ve = function (t) {
        return typeof t == "string"
    }, Kt = function (t) {
        return typeof t == "function"
    }, Yr = function (t) {
        return typeof t == "number"
    }, Xi = function (t) {
        return typeof t == "object"
    }, Ar = function (t, i, e) {
        return t && t.progress(i ? 0 : 1) && e && t.pause()
    }, hs = function (t, i) {
        if (t.enabled) {
            var e = t._ctx ? t._ctx.add(function () {
                return i(t)
            }) : i(t);
            e && e.totalTime && (t.callbackAnimation = e)
        }
    }, or = Math.abs, dl = "left", pl = "top", lo = "right", uo = "bottom", Gi = "width", Ki = "height", Gr = "Right",
    Kr = "Left", Zr = "Top", jr = "Bottom", Pt = "padding", Me = "margin", Pr = "Width", co = "Height", Ot = "px",
    De = function (t) {
        return B.getComputedStyle(t)
    }, ju = function (t) {
        var i = De(t).position;
        t.style.position = i === "absolute" || i === "fixed" ? i : "relative"
    }, Yo = function (t, i) {
        for (var e in i) e in t || (t[e] = i[e]);
        return t
    }, oi = function (t, i) {
        var e = i && De(t)[Ls] !== "matrix(1, 0, 0, 1, 0, 0)" && D.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1), r = t.getBoundingClientRect();
        return e && e.progress(0).kill(), r
    }, Gn = function (t, i) {
        var e = i.d2;
        return t["offset" + e] || t["client" + e] || 0
    }, _l = function (t) {
        var i = [], e = t.labels, r = t.duration(), n;
        for (n in e) i.push(e[n] / r);
        return i
    }, Qu = function (t) {
        return function (i) {
            return D.utils.snap(_l(t), i)
        }
    }, fo = function (t) {
        var i = D.utils.snap(t), e = Array.isArray(t) && t.slice(0).sort(function (r, n) {
            return r - n
        });
        return e ? function (r, n, o) {
            o === void 0 && (o = .001);
            var a;
            if (!n) return i(r);
            if (n > 0) {
                for (r -= o, a = 0; a < e.length; a++) if (e[a] >= r) return e[a];
                return e[a - 1]
            } else for (a = e.length, r += o; a--;) if (e[a] <= r) return e[a];
            return e[0]
        } : function (r, n, o) {
            o === void 0 && (o = .001);
            var a = i(r);
            return !n || Math.abs(a - r) < o || a - r < 0 == n < 0 ? a : i(n < 0 ? r - t : r + t)
        }
    }, Ju = function (t) {
        return function (i, e) {
            return fo(_l(t))(i, e.direction)
        }
    }, xn = function (t, i, e, r) {
        return e.split(",").forEach(function (n) {
            return t(i, n, r)
        })
    }, Lt = function (t, i, e, r, n) {
        return t.addEventListener(i, e, {passive: !r, capture: !!n})
    }, At = function (t, i, e, r) {
        return t.removeEventListener(i, e, !!r)
    }, bn = function (t, i, e) {
        e = e && e.wheelHandler, e && (t(i, "wheel", e), t(i, "touchmove", e))
    }, Xo = {startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal"},
    Tn = {toggleActions: "play", anticipatePin: 0}, Kn = {top: 0, left: 0, center: .5, bottom: 1, right: 1},
    Rn = function (t, i) {
        if (ve(t)) {
            var e = t.indexOf("="), r = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
            ~e && (t.indexOf("%") > e && (r *= i / 100), t = t.substr(0, e - 1)), t = r + (t in Kn ? Kn[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0)
        }
        return t
    }, Sn = function (t, i, e, r, n, o, a, l) {
        var u = n.startColor, c = n.endColor, p = n.fontSize, h = n.indent, f = n.fontWeight, _ = nt.createElement("div"),
            d = Qi(e) || ki(e, "pinType") === "fixed", g = t.indexOf("scroller") !== -1, b = d ? tt : e,
            w = t.indexOf("start") !== -1, S = w ? u : c,
            v = "border-color:" + S + ";font-size:" + p + ";color:" + S + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return v += "position:" + ((g || l) && d ? "fixed;" : "absolute;"), (g || l || !d) && (v += (r === Mt ? lo : uo) + ":" + (o + parseFloat(h)) + "px;"), a && (v += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), _._isStart = w, _.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")), _.style.cssText = v, _.innerText = i || i === 0 ? t + "-" + i : t, b.children[0] ? b.insertBefore(_, b.children[0]) : b.appendChild(_), _._offset = _["offset" + r.op.d2], An(_, 0, r, w), _
    }, An = function (t, i, e, r) {
        var n = {display: "block"}, o = e[r ? "os2" : "p2"], a = e[r ? "p2" : "os2"];
        t._isFlipped = r, n[e.a + "Percent"] = r ? -100 : 0, n[e.a] = r ? "1px" : 0, n["border" + o + Pr] = 1, n["border" + a + Pr] = 0, n[e.p] = i + "px", D.set(t, n)
    }, W = [], Is = {}, un, Wo = function () {
        return $t() - ze > 34 && (un || (un = requestAnimationFrame(li)))
    }, ar = function () {
        (!ie || !ie.isPressed || ie.startX > tt.clientWidth) && (V.cache++, ie ? un || (un = requestAnimationFrame(li)) : li(), ze || tr("scrollStart"), ze = $t())
    }, ds = function () {
        ll = B.innerWidth, al = B.innerHeight
    }, Xr = function (t) {
        V.cache++, (t === !0 || !qt && !ol && !nt.fullscreenElement && !nt.webkitFullscreenElement && (!zs || ll !== B.innerWidth || Math.abs(B.innerHeight - al) > B.innerHeight * .25)) && qn.restart(!0)
    }, Ji = {}, tc = [], gl = function s() {
        return At(X, "scrollEnd", s) || Bi(!0)
    }, tr = function (t) {
        return Ji[t] && Ji[t].map(function (i) {
            return i()
        }) || tc
    }, ye = [], ml = function (t) {
        for (var i = 0; i < ye.length; i += 5) (!t || ye[i + 4] && ye[i + 4].query === t) && (ye[i].style.cssText = ye[i + 1], ye[i].getBBox && ye[i].setAttribute("transform", ye[i + 2] || ""), ye[i + 3].uncache = 1)
    }, ho = function (t, i) {
        var e;
        for (re = 0; re < W.length; re++) e = W[re], e && (!i || e._ctx === i) && (t ? e.kill(1) : e.revert(!0, !0));
        $n = !0, i && ml(i), i || tr("revert")
    }, yl = function (t, i) {
        V.cache++, (i || !ne) && V.forEach(function (e) {
            return Kt(e) && e.cacheID++ && (e.rec = 0)
        }), ve(t) && (B.history.scrollRestoration = oo = t)
    }, ne, Zi = 0, Bo, ec = function () {
        if (Bo !== Zi) {
            var t = Bo = Zi;
            requestAnimationFrame(function () {
                return t === Zi && Bi(!0)
            })
        }
    }, vl = function () {
        tt.appendChild(mr), ao = !ie && mr.offsetHeight || B.innerHeight, tt.removeChild(mr)
    }, Vo = function (t) {
        return ln(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function (i) {
            return i.style.display = t ? "none" : "block"
        })
    }, Bi = function (t, i) {
        if (xe = nt.documentElement, tt = nt.body, so = [B, nt, xe, tt], ze && !t && !$n) {
            Lt(X, "scrollEnd", gl);
            return
        }
        vl(), ne = X.isRefreshing = !0, V.forEach(function (r) {
            return Kt(r) && ++r.cacheID && (r.rec = r())
        });
        var e = tr("refreshInit");
        sl && X.sort(), i || ho(), V.forEach(function (r) {
            Kt(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0))
        }), W.slice(0).forEach(function (r) {
            return r.refresh()
        }), $n = !1, W.forEach(function (r) {
            if (r._subPinOffset && r.pin) {
                var n = r.vars.horizontal ? "offsetWidth" : "offsetHeight", o = r.pin[n];
                r.revert(!0, 1), r.adjustPinSpacing(r.pin[n] - o), r.refresh()
            }
        }), Fs = 1, Vo(!0), W.forEach(function (r) {
            var n = Ze(r.scroller, r._dir), o = r.vars.end === "max" || r._endClamp && r.end > n,
                a = r._startClamp && r.start >= n;
            (o || a) && r.setPositions(a ? n - 1 : r.start, o ? Math.max(a ? n : r.start + 1, n) : r.end, !0)
        }), Vo(!1), Fs = 0, e.forEach(function (r) {
            return r && r.render && r.render(-1)
        }), V.forEach(function (r) {
            Kt(r) && (r.smooth && requestAnimationFrame(function () {
                return r.target.style.scrollBehavior = "smooth"
            }), r.rec && r(r.rec))
        }), yl(oo, 1), qn.pause(), Zi++, ne = 2, li(2), W.forEach(function (r) {
            return Kt(r.vars.onRefresh) && r.vars.onRefresh(r)
        }), ne = X.isRefreshing = !1, tr("refresh")
    }, Ys = 0, Ln = 1, Qr, li = function (t) {
        if (t === 2 || !ne && !$n) {
            X.isUpdating = !0, Qr && Qr.update(0);
            var i = W.length, e = $t(), r = e - fs >= 50, n = i && W[0].scroll();
            if (Ln = Ys > n ? -1 : 1, ne || (Ys = n), r && (ze && !Jn && e - ze > 200 && (ze = 0, tr("scrollEnd")), Nr = fs, fs = e), Ln < 0) {
                for (re = i; re-- > 0;) W[re] && W[re].update(0, r);
                Ln = 1
            } else for (re = 0; re < i; re++) W[re] && W[re].update(0, r);
            X.isUpdating = !1
        }
        un = 0
    },
    Xs = [dl, pl, uo, lo, Me + jr, Me + Gr, Me + Zr, Me + Kr, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    zn = Xs.concat([Gi, Ki, "boxSizing", "max" + Pr, "max" + co, "position", Me, Pt, Pt + Zr, Pt + Gr, Pt + jr, Pt + Kr]),
    ic = function (t, i, e) {
        yr(e);
        var r = t._gsap;
        if (r.spacerIsNative) yr(r.spacerState); else if (t._gsap.swappedIn) {
            var n = i.parentNode;
            n && (n.insertBefore(t, i), n.removeChild(i))
        }
        t._gsap.swappedIn = !1
    }, ps = function (t, i, e, r) {
        if (!t._gsap.swappedIn) {
            for (var n = Xs.length, o = i.style, a = t.style, l; n--;) l = Xs[n], o[l] = e[l];
            o.position = e.position === "absolute" ? "absolute" : "relative", e.display === "inline" && (o.display = "inline-block"), a[uo] = a[lo] = "auto", o.flexBasis = e.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[Gi] = Gn(t, oe) + Ot, o[Ki] = Gn(t, Mt) + Ot, o[Pt] = a[Me] = a[pl] = a[dl] = "0", yr(r), a[Gi] = a["max" + Pr] = e[Gi], a[Ki] = a["max" + co] = e[Ki], a[Pt] = e[Pt], t.parentNode !== i && (t.parentNode.insertBefore(i, t), i.appendChild(t)), t._gsap.swappedIn = !0
        }
    }, rc = /([A-Z])/g, yr = function (t) {
        if (t) {
            var i = t.t.style, e = t.length, r = 0, n, o;
            for ((t.t._gsap || D.core.getCache(t.t)).uncache = 1; r < e; r += 2) o = t[r + 1], n = t[r], o ? i[n] = o : i[n] && i.removeProperty(n.replace(rc, "-$1").toLowerCase())
        }
    }, Pn = function (t) {
        for (var i = zn.length, e = t.style, r = [], n = 0; n < i; n++) r.push(zn[n], e[zn[n]]);
        return r.t = t, r
    }, nc = function (t, i, e) {
        for (var r = [], n = t.length, o = e ? 8 : 0, a; o < n; o += 2) a = t[o], r.push(a, a in i ? i[a] : t[o + 1]);
        return r.t = t.t, r
    }, Nn = {left: 0, top: 0}, Ho = function (t, i, e, r, n, o, a, l, u, c, p, h, f, _) {
        Kt(t) && (t = t(l)), ve(t) && t.substr(0, 3) === "max" && (t = h + (t.charAt(4) === "=" ? Rn("0" + t.substr(3), e) : 0));
        var d = f ? f.time() : 0, g, b, w;
        if (f && f.seek(0), isNaN(t) || (t = +t), Yr(t)) f && (t = D.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, h, t)), a && An(a, e, r, !0); else {
            Kt(i) && (i = i(l));
            var S = (t || "0").split(" "), v, T, P, x;
            w = ue(i, l) || tt, v = oi(w) || {}, (!v || !v.left && !v.top) && De(w).display === "none" && (x = w.style.display, w.style.display = "block", v = oi(w), x ? w.style.display = x : w.style.removeProperty("display")), T = Rn(S[0], v[r.d]), P = Rn(S[1] || "0", e), t = v[r.p] - u[r.p] - c + T + n - P, a && An(a, P, r, e - P < 20 || a._isStart && P > 20), e -= e - P
        }
        if (_ && (l[_] = t || -.001, t < 0 && (t = 0)), o) {
            var C = t + e, k = o._isStart;
            g = "scroll" + r.d2, An(o, C, r, k && C > 20 || !k && (p ? Math.max(tt[g], xe[g]) : o.parentNode[g]) <= C + 1), p && (u = oi(a), p && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Ot))
        }
        return f && w && (g = oi(w), f.seek(h), b = oi(w), f._caScrollDist = g[r.p] - b[r.p], t = t / f._caScrollDist * h), f && f.seek(d), f ? t : Math.round(t)
    }, sc = /(webkit|moz|length|cssText|inset)/i, Uo = function (t, i, e, r) {
        if (t.parentNode !== i) {
            var n = t.style, o, a;
            if (i === tt) {
                t._stOrig = n.cssText, a = De(t);
                for (o in a) !+o && !sc.test(o) && a[o] && typeof n[o] == "string" && o !== "0" && (n[o] = a[o]);
                n.top = e, n.left = r
            } else n.cssText = t._stOrig;
            D.core.getCache(t).uncache = 1, i.appendChild(t)
        }
    }, wl = function (t, i, e) {
        var r = i, n = r;
        return function (o) {
            var a = Math.round(t());
            return a !== r && a !== n && Math.abs(a - r) > 3 && Math.abs(a - n) > 3 && (o = a, e && e()), n = r, r = Math.round(o), r
        }
    }, kn = function (t, i, e) {
        var r = {};
        r[i.p] = "+=" + e, D.set(t, r)
    }, qo = function (t, i) {
        var e = Oi(t, i), r = "_scroll" + i.p2, n = function o(a, l, u, c, p) {
            var h = o.tween, f = l.onComplete, _ = {};
            u = u || e();
            var d = wl(e, u, function () {
                h.kill(), o.tween = 0
            });
            return p = c && p || 0, c = c || a - u, h && h.kill(), l[r] = a, l.inherit = !1, l.modifiers = _, _[r] = function () {
                return d(u + c * h.ratio + p * h.ratio * h.ratio)
            }, l.onUpdate = function () {
                V.cache++, o.tween && li()
            }, l.onComplete = function () {
                o.tween = 0, f && f.call(h)
            }, h = o.tween = D.to(t, l), h
        };
        return t[r] = e, e.wheelHandler = function () {
            return n.tween && n.tween.kill() && (n.tween = 0)
        }, Lt(t, "wheel", e.wheelHandler), X.isTouch && Lt(t, "touchmove", e.wheelHandler), n
    }, X = (function () {
        function s(i, e) {
            lr || s.register(D) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Ns(this), this.init(i, e)
        }

        var t = s.prototype;
        return t.init = function (e, r) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Fr) {
                this.update = this.refresh = this.kill = $e;
                return
            }
            e = Yo(ve(e) || Yr(e) || e.nodeType ? {trigger: e} : e, Tn);
            var n = e, o = n.onUpdate, a = n.toggleClass, l = n.id, u = n.onToggle, c = n.onRefresh, p = n.scrub,
                h = n.trigger, f = n.pin, _ = n.pinSpacing, d = n.invalidateOnRefresh, g = n.anticipatePin,
                b = n.onScrubComplete, w = n.onSnapComplete, S = n.once, v = n.snap, T = n.pinReparent, P = n.pinSpacer,
                x = n.containerAnimation, C = n.fastScrollEnd, k = n.preventOverlaps,
                E = e.horizontal || e.containerAnimation && e.horizontal !== !1 ? oe : Mt, N = !p && p !== 0,
                O = ue(e.scroller || B), q = D.core.getCache(O), H = Qi(O),
                Z = ("pinType" in e ? e.pinType : ki(O, "pinType") || H && "fixed") === "fixed",
                $ = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], z = N && e.toggleActions.split(" "),
                Q = "markers" in e ? e.markers : Tn.markers, st = H ? 0 : parseFloat(De(O)["border" + E.p2 + Pr]) || 0,
                m = this, ot = e.onRefreshInit && function () {
                    return e.onRefreshInit(m)
                }, jt = Ku(O, H, E), Ne = Zu(O, H), pt = 0, Nt = 0, Wt = 0, Tt = Oi(O, E), Qt, Bt, fi, Jt, ae, j, yt, le, _e, y,
                ge, Je, hi, _t, ti, di, Di, Dt, pi, vt, Fe, Ce, ei, Er, St, hn, ii, ir, rr, _i, Ri, U, Ai, Ie, Ye, Xe, Li,
                nr, ri;
            if (m._startClamp = m._endClamp = !1, m._dir = E, g *= 45, m.scroller = O, m.scroll = x ? x.time.bind(x) : Tt, Jt = Tt(), m.vars = e, r = r || e.animation, "refreshPriority" in e && (sl = 1, e.refreshPriority === -9999 && (Qr = m)), q.tweenScroll = q.tweenScroll || {
                top: qo(O, Mt),
                left: qo(O, oe)
            }, m.tweenTo = Qt = q.tweenScroll[E.p], m.scrubDuration = function (M) {
                Ai = Yr(M) && M, Ai ? U ? U.duration(M) : U = D.to(r, {
                    ease: "expo",
                    totalProgress: "+=0",
                    inherit: !1,
                    duration: Ai,
                    paused: !0,
                    onComplete: function () {
                        return b && b(m)
                    }
                }) : (U && U.progress(1).kill(), U = 0)
            }, r && (r.vars.lazy = !1, r._initted && !m.isReverted || r.vars.immediateRender !== !1 && e.immediateRender !== !1 && r.duration() && r.render(0, !0, !0), m.animation = r.pause(), r.scrollTrigger = m, m.scrubDuration(p), _i = 0, l || (l = r.vars.id)), v && ((!Xi(v) || v.push) && (v = {snapTo: v}), "scrollBehavior" in tt.style && D.set(H ? [tt, xe] : O, {scrollBehavior: "auto"}), V.forEach(function (M) {
                return Kt(M) && M.target === (H ? nt.scrollingElement || xe : O) && (M.smooth = !1)
            }), fi = Kt(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? Qu(r) : v.snapTo === "labelsDirectional" ? Ju(r) : v.directional !== !1 ? function (M, F) {
                return fo(v.snapTo)(M, $t() - Nt < 500 ? 0 : F.direction)
            } : D.utils.snap(v.snapTo), Ie = v.duration || {
                min: .1,
                max: 2
            }, Ie = Xi(Ie) ? $r(Ie.min, Ie.max) : $r(Ie, Ie), Ye = D.delayedCall(v.delay || Ai / 2 || .1, function () {
                var M = Tt(), F = $t() - Nt < 500, A = Qt.tween;
                if ((F || Math.abs(m.getVelocity()) < 10) && !A && !Jn && pt !== M) {
                    var I = (M - j) / _t, Rt = r && !N ? r.totalProgress() : I,
                        G = F ? 0 : (Rt - Ri) / ($t() - Nr) * 1e3 || 0, wt = D.utils.clamp(-I, 1 - I, or(G / 2) * G / .185),
                        Vt = I + (v.inertia === !1 ? 0 : wt), gt, lt, et = v, We = et.onStart, ft = et.onInterrupt,
                        me = et.onComplete;
                    if (gt = fi(Vt, m), Yr(gt) || (gt = Vt), lt = Math.max(0, Math.round(j + gt * _t)), M <= yt && M >= j && lt !== M) {
                        if (A && !A._initted && A.data <= or(lt - M)) return;
                        v.inertia === !1 && (wt = gt - I), Qt(lt, {
                            duration: Ie(or(Math.max(or(Vt - Rt), or(gt - Rt)) * .185 / G / .05 || 0)),
                            ease: v.ease || "power3",
                            data: or(lt - M),
                            onInterrupt: function () {
                                return Ye.restart(!0) && ft && ft(m)
                            },
                            onComplete: function () {
                                m.update(), pt = Tt(), r && !N && (U ? U.resetTo("totalProgress", gt, r._tTime / r._tDur) : r.progress(gt)), _i = Ri = r && !N ? r.totalProgress() : m.progress, w && w(m), me && me(m)
                            }
                        }, M, wt * _t, lt - M - wt * _t), We && We(m, Qt.tween)
                    }
                } else m.isActive && pt !== M && Ye.restart(!0)
            }).pause()), l && (Is[l] = m), h = m.trigger = ue(h || f !== !0 && f), ri = h && h._gsap && h._gsap.stRevert, ri && (ri = ri(m)), f = f === !0 ? h : ue(f), ve(a) && (a = {
                targets: h,
                className: a
            }), f && (_ === !1 || _ === Me || (_ = !_ && f.parentNode && f.parentNode.style && De(f.parentNode).display === "flex" ? !1 : Pt), m.pin = f, Bt = D.core.getCache(f), Bt.spacer ? ti = Bt.pinState : (P && (P = ue(P), P && !P.nodeType && (P = P.current || P.nativeElement), Bt.spacerIsNative = !!P, P && (Bt.spacerState = Pn(P))), Bt.spacer = Dt = P || nt.createElement("div"), Dt.classList.add("pin-spacer"), l && Dt.classList.add("pin-spacer-" + l), Bt.pinState = ti = Pn(f)), e.force3D !== !1 && D.set(f, {force3D: !0}), m.spacer = Dt = Bt.spacer, rr = De(f), Er = rr[_ + E.os2], vt = D.getProperty(f), Fe = D.quickSetter(f, E.a, Ot), ps(f, Dt, rr), Di = Pn(f)), Q) {
                Je = Xi(Q) ? Yo(Q, Xo) : Xo, y = Sn("scroller-start", l, O, E, Je, 0), ge = Sn("scroller-end", l, O, E, Je, 0, y), pi = y["offset" + E.op.d2];
                var Cr = ue(ki(O, "content") || O);
                le = this.markerStart = Sn("start", l, Cr, E, Je, pi, 0, x), _e = this.markerEnd = Sn("end", l, Cr, E, Je, pi, 0, x), x && (nr = D.quickSetter([le, _e], E.a, Ot)), !Z && !(je.length && ki(O, "fixedMarkers") === !0) && (ju(H ? tt : O), D.set([y, ge], {force3D: !0}), hn = D.quickSetter(y, E.a, Ot), ir = D.quickSetter(ge, E.a, Ot))
            }
            if (x) {
                var Y = x.vars.onUpdate, L = x.vars.onUpdateParams;
                x.eventCallback("onUpdate", function () {
                    m.update(0, 0, 1), Y && Y.apply(x, L || [])
                })
            }
            if (m.previous = function () {
                return W[W.indexOf(m) - 1]
            }, m.next = function () {
                return W[W.indexOf(m) + 1]
            }, m.revert = function (M, F) {
                if (!F) return m.kill(!0);
                var A = M !== !1 || !m.enabled, I = qt;
                A !== m.isReverted && (A && (Xe = Math.max(Tt(), m.scroll.rec || 0), Wt = m.progress, Li = r && r.progress()), le && [le, _e, y, ge].forEach(function (Rt) {
                    return Rt.style.display = A ? "none" : "block"
                }), A && (qt = m, m.update(A)), f && (!T || !m.isActive) && (A ? ic(f, Dt, ti) : ps(f, Dt, De(f), St)), A || m.update(A), qt = I, m.isReverted = A)
            }, m.refresh = function (M, F, A, I) {
                if (!((qt || !m.enabled) && !F)) {
                    if (f && M && ze) {
                        Lt(s, "scrollEnd", gl);
                        return
                    }
                    !ne && ot && ot(m), qt = m, Qt.tween && !A && (Qt.tween.kill(), Qt.tween = 0), U && U.pause(), d && r && (r.revert({kill: !1}).invalidate(), r.getChildren && r.getChildren(!0, !0, !1).forEach(function (gi) {
                        return gi.vars.immediateRender && gi.render(0, !0, !0)
                    })), m.isReverted || m.revert(!0, !0), m._subPinOffset = !1;
                    var Rt = jt(), G = Ne(), wt = x ? x.duration() : Ze(O, E), Vt = _t <= .01 || !_t, gt = 0, lt = I || 0,
                        et = Xi(A) ? A.end : e.end, We = e.endTrigger || h,
                        ft = Xi(A) ? A.start : e.start || (e.start === 0 || !h ? 0 : f ? "0 0" : "0 100%"),
                        me = m.pinnedContainer = e.pinnedContainer && ue(e.pinnedContainer, m),
                        Ve = h && Math.max(0, W.indexOf(m)) || 0, Ft = Ve, It, Ht, zi, dn, Ut, Ct, He, ts, po, Or, Ue, Mr,
                        pn;
                    for (Q && Xi(A) && (Mr = D.getProperty(y, E.p), pn = D.getProperty(ge, E.p)); Ft-- > 0;) Ct = W[Ft], Ct.end || Ct.refresh(0, 1) || (qt = m), He = Ct.pin, He && (He === h || He === f || He === me) && !Ct.isReverted && (Or || (Or = []), Or.unshift(Ct), Ct.revert(!0, !0)), Ct !== W[Ft] && (Ve--, Ft--);
                    for (Kt(ft) && (ft = ft(m)), ft = zo(ft, "start", m), j = Ho(ft, h, Rt, E, Tt(), le, y, m, G, st, Z, wt, x, m._startClamp && "_startClamp") || (f ? -.001 : 0), Kt(et) && (et = et(m)), ve(et) && !et.indexOf("+=") && (~et.indexOf(" ") ? et = (ve(ft) ? ft.split(" ")[0] : "") + et : (gt = Rn(et.substr(2), Rt), et = ve(ft) ? ft : (x ? D.utils.mapRange(0, x.duration(), x.scrollTrigger.start, x.scrollTrigger.end, j) : j) + gt, We = h)), et = zo(et, "end", m), yt = Math.max(j, Ho(et || (We ? "100% 0" : wt), We, Rt, E, Tt() + gt, _e, ge, m, G, st, Z, wt, x, m._endClamp && "_endClamp")) || -.001, gt = 0, Ft = Ve; Ft--;) Ct = W[Ft], He = Ct.pin, He && Ct.start - Ct._pinPush <= j && !x && Ct.end > 0 && (It = Ct.end - (m._startClamp ? Math.max(0, Ct.start) : Ct.start), (He === h && Ct.start - Ct._pinPush < j || He === me) && isNaN(ft) && (gt += It * (1 - Ct.progress)), He === f && (lt += It));
                    if (j += gt, yt += gt, m._startClamp && (m._startClamp += gt), m._endClamp && !ne && (m._endClamp = yt || -.001, yt = Math.min(yt, Ze(O, E))), _t = yt - j || (j -= .01) && .001, Vt && (Wt = D.utils.clamp(0, 1, D.utils.normalize(j, yt, Xe))), m._pinPush = lt, le && gt && (It = {}, It[E.a] = "+=" + gt, me && (It[E.p] = "-=" + Tt()), D.set([le, _e], It)), f && !(Fs && m.end >= Ze(O, E))) It = De(f), dn = E === Mt, zi = Tt(), Ce = parseFloat(vt(E.a)) + lt, !wt && yt > 1 && (Ue = (H ? nt.scrollingElement || xe : O).style, Ue = {
                        style: Ue,
                        value: Ue["overflow" + E.a.toUpperCase()]
                    }, H && De(tt)["overflow" + E.a.toUpperCase()] !== "scroll" && (Ue.style["overflow" + E.a.toUpperCase()] = "scroll")), ps(f, Dt, It), Di = Pn(f), Ht = oi(f, !0), ts = Z && Oi(O, dn ? oe : Mt)(), _ ? (St = [_ + E.os2, _t + lt + Ot], St.t = Dt, Ft = _ === Pt ? Gn(f, E) + _t + lt : 0, Ft && (St.push(E.d, Ft + Ot), Dt.style.flexBasis !== "auto" && (Dt.style.flexBasis = Ft + Ot)), yr(St), me && W.forEach(function (gi) {
                        gi.pin === me && gi.vars.pinSpacing !== !1 && (gi._subPinOffset = !0)
                    }), Z && Tt(Xe)) : (Ft = Gn(f, E), Ft && Dt.style.flexBasis !== "auto" && (Dt.style.flexBasis = Ft + Ot)), Z && (Ut = {
                        top: Ht.top + (dn ? zi - j : ts) + Ot,
                        left: Ht.left + (dn ? ts : zi - j) + Ot,
                        boxSizing: "border-box",
                        position: "fixed"
                    }, Ut[Gi] = Ut["max" + Pr] = Math.ceil(Ht.width) + Ot, Ut[Ki] = Ut["max" + co] = Math.ceil(Ht.height) + Ot, Ut[Me] = Ut[Me + Zr] = Ut[Me + Gr] = Ut[Me + jr] = Ut[Me + Kr] = "0", Ut[Pt] = It[Pt], Ut[Pt + Zr] = It[Pt + Zr], Ut[Pt + Gr] = It[Pt + Gr], Ut[Pt + jr] = It[Pt + jr], Ut[Pt + Kr] = It[Pt + Kr], di = nc(ti, Ut, T), ne && Tt(0)), r ? (po = r._initted, us(1), r.render(r.duration(), !0, !0), ei = vt(E.a) - Ce + _t + lt, ii = Math.abs(_t - ei) > 1, Z && ii && di.splice(di.length - 2, 2), r.render(0, !0, !0), po || r.invalidate(!0), r.parent || r.totalTime(r.totalTime()), us(0)) : ei = _t, Ue && (Ue.value ? Ue.style["overflow" + E.a.toUpperCase()] = Ue.value : Ue.style.removeProperty("overflow-" + E.a)); else if (h && Tt() && !x) for (Ht = h.parentNode; Ht && Ht !== tt;) Ht._pinOffset && (j -= Ht._pinOffset, yt -= Ht._pinOffset), Ht = Ht.parentNode;
                    Or && Or.forEach(function (gi) {
                        return gi.revert(!1, !0)
                    }), m.start = j, m.end = yt, Jt = ae = ne ? Xe : Tt(), !x && !ne && (Jt < Xe && Tt(Xe), m.scroll.rec = 0), m.revert(!1, !0), Nt = $t(), Ye && (pt = -1, Ye.restart(!0)), qt = 0, r && N && (r._initted || Li) && r.progress() !== Li && r.progress(Li || 0, !0).render(r.time(), !0, !0), (Vt || Wt !== m.progress || x || d || r && !r._initted) && (r && !N && (r._initted || Wt || r.vars.immediateRender !== !1) && r.totalProgress(x && j < -.001 && !Wt ? D.utils.normalize(j, yt, 0) : Wt, !0), m.progress = Vt || (Jt - j) / _t === Wt ? 0 : Wt), f && _ && (Dt._pinOffset = Math.round(m.progress * ei)), U && U.invalidate(), isNaN(Mr) || (Mr -= D.getProperty(y, E.p), pn -= D.getProperty(ge, E.p), kn(y, E, Mr), kn(le, E, Mr - (I || 0)), kn(ge, E, pn), kn(_e, E, pn - (I || 0))), Vt && !ne && m.update(), c && !ne && !hi && (hi = !0, c(m), hi = !1)
                }
            }, m.getVelocity = function () {
                return (Tt() - ae) / ($t() - Nr) * 1e3 || 0
            }, m.endAnimation = function () {
                Ar(m.callbackAnimation), r && (U ? U.progress(1) : r.paused() ? N || Ar(r, m.direction < 0, 1) : Ar(r, r.reversed()))
            }, m.labelToScroll = function (M) {
                return r && r.labels && (j || m.refresh() || j) + r.labels[M] / r.duration() * _t || 0
            }, m.getTrailing = function (M) {
                var F = W.indexOf(m), A = m.direction > 0 ? W.slice(0, F).reverse() : W.slice(F + 1);
                return (ve(M) ? A.filter(function (I) {
                    return I.vars.preventOverlaps === M
                }) : A).filter(function (I) {
                    return m.direction > 0 ? I.end <= j : I.start >= yt
                })
            }, m.update = function (M, F, A) {
                if (!(x && !A && !M)) {
                    var I = ne === !0 ? Xe : m.scroll(), Rt = M ? 0 : (I - j) / _t, G = Rt < 0 ? 0 : Rt > 1 ? 1 : Rt || 0,
                        wt = m.progress, Vt, gt, lt, et, We, ft, me, Ve;
                    if (F && (ae = Jt, Jt = x ? Tt() : I, v && (Ri = _i, _i = r && !N ? r.totalProgress() : G)), g && f && !qt && !vn && ze && (!G && j < I + (I - ae) / ($t() - Nr) * g ? G = 1e-4 : G === 1 && yt > I + (I - ae) / ($t() - Nr) * g && (G = .9999)), G !== wt && m.enabled) {
                        if (Vt = m.isActive = !!G && G < 1, gt = !!wt && wt < 1, ft = Vt !== gt, We = ft || !!G != !!wt, m.direction = G > wt ? 1 : -1, m.progress = G, We && !qt && (lt = G && !wt ? 0 : G === 1 ? 1 : wt === 1 ? 2 : 3, N && (et = !ft && z[lt + 1] !== "none" && z[lt + 1] || z[lt], Ve = r && (et === "complete" || et === "reset" || et in r))), k && (ft || Ve) && (Ve || p || !r) && (Kt(k) ? k(m) : m.getTrailing(k).forEach(function (zi) {
                            return zi.endAnimation()
                        })), N || (U && !qt && !vn ? (U._dp._time - U._start !== U._time && U.render(U._dp._time - U._start), U.resetTo ? U.resetTo("totalProgress", G, r._tTime / r._tDur) : (U.vars.totalProgress = G, U.invalidate().restart())) : r && r.totalProgress(G, !!(qt && (Nt || M)))), f) {
                            if (M && _ && (Dt.style[_ + E.os2] = Er), !Z) Fe(Ir(Ce + ei * G)); else if (We) {
                                if (me = !M && G > wt && yt + 1 > I && I + 1 >= Ze(O, E), T) if (!M && (Vt || me)) {
                                    var Ft = oi(f, !0), It = I - j;
                                    Uo(f, tt, Ft.top + (E === Mt ? It : 0) + Ot, Ft.left + (E === Mt ? 0 : It) + Ot)
                                } else Uo(f, Dt);
                                yr(Vt || me ? di : Di), ii && G < 1 && Vt || Fe(Ce + (G === 1 && !me ? ei : 0))
                            }
                        }
                        v && !Qt.tween && !qt && !vn && Ye.restart(!0), a && (ft || S && G && (G < 1 || !cs)) && ln(a.targets).forEach(function (zi) {
                            return zi.classList[Vt || S ? "add" : "remove"](a.className)
                        }), o && !N && !M && o(m), We && !qt ? (N && (Ve && (et === "complete" ? r.pause().totalProgress(1) : et === "reset" ? r.restart(!0).pause() : et === "restart" ? r.restart(!0) : r[et]()), o && o(m)), (ft || !cs) && (u && ft && hs(m, u), $[lt] && hs(m, $[lt]), S && (G === 1 ? m.kill(!1, 1) : $[lt] = 0), ft || (lt = G === 1 ? 1 : 3, $[lt] && hs(m, $[lt]))), C && !Vt && Math.abs(m.getVelocity()) > (Yr(C) ? C : 2500) && (Ar(m.callbackAnimation), U ? U.progress(1) : Ar(r, et === "reverse" ? 1 : !G, 1))) : N && o && !qt && o(m)
                    }
                    if (ir) {
                        var Ht = x ? I / x.duration() * (x._caScrollDist || 0) : I;
                        hn(Ht + (y._isFlipped ? 1 : 0)), ir(Ht)
                    }
                    nr && nr(-I / x.duration() * (x._caScrollDist || 0))
                }
            }, m.enable = function (M, F) {
                m.enabled || (m.enabled = !0, Lt(O, "resize", Xr), H || Lt(O, "scroll", ar), ot && Lt(s, "refreshInit", ot), M !== !1 && (m.progress = Wt = 0, Jt = ae = pt = Tt()), F !== !1 && m.refresh())
            }, m.getTween = function (M) {
                return M && Qt ? Qt.tween : U
            }, m.setPositions = function (M, F, A, I) {
                if (x) {
                    var Rt = x.scrollTrigger, G = x.duration(), wt = Rt.end - Rt.start;
                    M = Rt.start + wt * M / G, F = Rt.start + wt * F / G
                }
                m.refresh(!1, !1, {start: No(M, A && !!m._startClamp), end: No(F, A && !!m._endClamp)}, I), m.update()
            }, m.adjustPinSpacing = function (M) {
                if (St && M) {
                    var F = St.indexOf(E.d) + 1;
                    St[F] = parseFloat(St[F]) + M + Ot, St[1] = parseFloat(St[1]) + M + Ot, yr(St)
                }
            }, m.disable = function (M, F) {
                if (m.enabled && (M !== !1 && m.revert(!0, !0), m.enabled = m.isActive = !1, F || U && U.pause(), Xe = 0, Bt && (Bt.uncache = 1), ot && At(s, "refreshInit", ot), Ye && (Ye.pause(), Qt.tween && Qt.tween.kill() && (Qt.tween = 0)), !H)) {
                    for (var A = W.length; A--;) if (W[A].scroller === O && W[A] !== m) return;
                    At(O, "resize", Xr), H || At(O, "scroll", ar)
                }
            }, m.kill = function (M, F) {
                m.disable(M, F), U && !F && U.kill(), l && delete Is[l];
                var A = W.indexOf(m);
                A >= 0 && W.splice(A, 1), A === re && Ln > 0 && re--, A = 0, W.forEach(function (I) {
                    return I.scroller === m.scroller && (A = 1)
                }), A || ne || (m.scroll.rec = 0), r && (r.scrollTrigger = null, M && r.revert({kill: !1}), F || r.kill()), le && [le, _e, y, ge].forEach(function (I) {
                    return I.parentNode && I.parentNode.removeChild(I)
                }), Qr === m && (Qr = 0), f && (Bt && (Bt.uncache = 1), A = 0, W.forEach(function (I) {
                    return I.pin === f && A++
                }), A || (Bt.spacer = 0)), e.onKill && e.onKill(m)
            }, W.push(m), m.enable(!1, !1), ri && ri(m), r && r.add && !_t) {
                var J = m.update;
                m.update = function () {
                    m.update = J, V.cache++, j || yt || m.refresh()
                }, D.delayedCall(.01, m.update), _t = .01, j = yt = 0
            } else m.refresh();
            f && ec()
        }, s.register = function (e) {
            return lr || (D = e || cl(), ul() && window.document && s.enable(), lr = Fr), lr
        }, s.defaults = function (e) {
            if (e) for (var r in e) Tn[r] = e[r];
            return Tn
        }, s.disable = function (e, r) {
            Fr = 0, W.forEach(function (o) {
                return o[r ? "kill" : "disable"](e)
            }), At(B, "wheel", ar), At(nt, "scroll", ar), clearInterval(yn), At(nt, "touchcancel", $e), At(tt, "touchstart", $e), xn(At, nt, "pointerdown,touchstart,mousedown", Fo), xn(At, nt, "pointerup,touchend,mouseup", Io), qn.kill(), wn(At);
            for (var n = 0; n < V.length; n += 3) bn(At, V[n], V[n + 1]), bn(At, V[n], V[n + 2])
        }, s.enable = function () {
            if (B = window, nt = document, xe = nt.documentElement, tt = nt.body, D && (ln = D.utils.toArray, $r = D.utils.clamp, Ns = D.core.context || $e, us = D.core.suppressOverwrites || $e, oo = B.history.scrollRestoration || "auto", Ys = B.pageYOffset || 0, D.core.globals("ScrollTrigger", s), tt)) {
                Fr = 1, mr = document.createElement("div"), mr.style.height = "100vh", mr.style.position = "absolute", vl(), Gu(), bt.register(D), s.isTouch = bt.isTouch, yi = bt.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), zs = bt.isTouch === 1, Lt(B, "wheel", ar), so = [B, nt, xe, tt], D.matchMedia ? (s.matchMedia = function (u) {
                    var c = D.matchMedia(), p;
                    for (p in u) c.add(p, u[p]);
                    return c
                }, D.addEventListener("matchMediaInit", function () {
                    return ho()
                }), D.addEventListener("matchMediaRevert", function () {
                    return ml()
                }), D.addEventListener("matchMedia", function () {
                    Bi(0, 1), tr("matchMedia")
                }), D.matchMedia().add("(orientation: portrait)", function () {
                    return ds(), ds
                })) : console.warn("Requires GSAP 3.11.0 or later"), ds(), Lt(nt, "scroll", ar);
                var e = tt.hasAttribute("style"), r = tt.style, n = r.borderTopStyle, o = D.core.Animation.prototype, a, l;
                for (o.revert || Object.defineProperty(o, "revert", {
                    value: function () {
                        return this.time(-.01, !0)
                    }
                }), r.borderTopStyle = "solid", a = oi(tt), Mt.m = Math.round(a.top + Mt.sc()) || 0, oe.m = Math.round(a.left + oe.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), e || (tt.setAttribute("style", ""), tt.removeAttribute("style")), yn = setInterval(Wo, 250), D.delayedCall(.5, function () {
                    return vn = 0
                }), Lt(nt, "touchcancel", $e), Lt(tt, "touchstart", $e), xn(Lt, nt, "pointerdown,touchstart,mousedown", Fo), xn(Lt, nt, "pointerup,touchend,mouseup", Io), Ls = D.utils.checkPrefix("transform"), zn.push(Ls), lr = $t(), qn = D.delayedCall(.2, Bi).pause(), ur = [nt, "visibilitychange", function () {
                    var u = B.innerWidth, c = B.innerHeight;
                    nt.hidden ? (Ao = u, Lo = c) : (Ao !== u || Lo !== c) && Xr()
                }, nt, "DOMContentLoaded", Bi, B, "load", Bi, B, "resize", Xr], wn(Lt), W.forEach(function (u) {
                    return u.enable(0, 1)
                }), l = 0; l < V.length; l += 3) bn(At, V[l], V[l + 1]), bn(At, V[l], V[l + 2])
            }
        }, s.config = function (e) {
            "limitCallbacks" in e && (cs = !!e.limitCallbacks);
            var r = e.syncInterval;
            r && clearInterval(yn) || (yn = r) && setInterval(Wo, r), "ignoreMobileResize" in e && (zs = s.isTouch === 1 && e.ignoreMobileResize), "autoRefreshEvents" in e && (wn(At) || wn(Lt, e.autoRefreshEvents || "none"), ol = (e.autoRefreshEvents + "").indexOf("resize") === -1)
        }, s.scrollerProxy = function (e, r) {
            var n = ue(e), o = V.indexOf(n), a = Qi(n);
            ~o && V.splice(o, a ? 6 : 2), r && (a ? je.unshift(B, r, tt, r, xe, r) : je.unshift(n, r))
        }, s.clearMatchMedia = function (e) {
            W.forEach(function (r) {
                return r._ctx && r._ctx.query === e && r._ctx.kill(!0, !0)
            })
        }, s.isInViewport = function (e, r, n) {
            var o = (ve(e) ? ue(e) : e).getBoundingClientRect(), a = o[n ? Gi : Ki] * r || 0;
            return n ? o.right - a > 0 && o.left + a < B.innerWidth : o.bottom - a > 0 && o.top + a < B.innerHeight
        }, s.positionInViewport = function (e, r, n) {
            ve(e) && (e = ue(e));
            var o = e.getBoundingClientRect(), a = o[n ? Gi : Ki],
                l = r == null ? a / 2 : r in Kn ? Kn[r] * a : ~r.indexOf("%") ? parseFloat(r) * a / 100 : parseFloat(r) || 0;
            return n ? (o.left + l) / B.innerWidth : (o.top + l) / B.innerHeight
        }, s.killAll = function (e) {
            if (W.slice(0).forEach(function (n) {
                return n.vars.id !== "ScrollSmoother" && n.kill()
            }), e !== !0) {
                var r = Ji.killAll || [];
                Ji = {}, r.forEach(function (n) {
                    return n()
                })
            }
        }, s
    })();
X.version = "3.13.0";
X.saveStyles = function (s) {
    return s ? ln(s).forEach(function (t) {
        if (t && t.style) {
            var i = ye.indexOf(t);
            i >= 0 && ye.splice(i, 5), ye.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), D.core.getCache(t), Ns())
        }
    }) : ye
};
X.revert = function (s, t) {
    return ho(!s, t)
};
X.create = function (s, t) {
    return new X(s, t)
};
X.refresh = function (s) {
    return s ? Xr(!0) : (lr || X.register()) && Bi(!0)
};
X.update = function (s) {
    return ++V.cache && li(s === !0 ? 2 : 0)
};
X.clearScrollMemory = yl;
X.maxScroll = function (s, t) {
    return Ze(s, t ? oe : Mt)
};
X.getScrollFunc = function (s, t) {
    return Oi(ue(s), t ? oe : Mt)
};
X.getById = function (s) {
    return Is[s]
};
X.getAll = function () {
    return W.filter(function (s) {
        return s.vars.id !== "ScrollSmoother"
    })
};
X.isScrolling = function () {
    return !!ze
};
X.snapDirectional = fo;
X.addEventListener = function (s, t) {
    var i = Ji[s] || (Ji[s] = []);
    ~i.indexOf(t) || i.push(t)
};
X.removeEventListener = function (s, t) {
    var i = Ji[s], e = i && i.indexOf(t);
    e >= 0 && i.splice(e, 1)
};
X.batch = function (s, t) {
    var i = [], e = {}, r = t.interval || .016, n = t.batchMax || 1e9, o = function (u, c) {
        var p = [], h = [], f = D.delayedCall(r, function () {
            c(p, h), p = [], h = []
        }).pause();
        return function (_) {
            p.length || f.restart(!0), p.push(_.trigger), h.push(_), n <= p.length && f.progress(1)
        }
    }, a;
    for (a in t) e[a] = a.substr(0, 2) === "on" && Kt(t[a]) && a !== "onRefreshInit" ? o(a, t[a]) : t[a];
    return Kt(n) && (n = n(), Lt(X, "refresh", function () {
        return n = t.batchMax()
    })), ln(s).forEach(function (l) {
        var u = {};
        for (a in e) u[a] = e[a];
        u.trigger = l, i.push(X.create(u))
    }), i
};
var $o = function (t, i, e, r) {
    return i > r ? t(r) : i < 0 && t(0), e > r ? (r - i) / (e - i) : e < 0 ? i / (i - e) : 1
}, _s = function s(t, i) {
    i === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = i === !0 ? "auto" : i ? "pan-" + i + (bt.isTouch ? " pinch-zoom" : "") : "none", t === xe && s(tt, i)
}, En = {auto: 1, scroll: 1}, oc = function (t) {
    var i = t.event, e = t.target, r = t.axis, n = (i.changedTouches ? i.changedTouches[0] : i).target,
        o = n._gsap || D.core.getCache(n), a = $t(), l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (; n && n !== tt && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(En[(l = De(n)).overflowY] || En[l.overflowX]));) n = n.parentNode;
        o._isScroll = n && n !== e && !Qi(n) && (En[(l = De(n)).overflowY] || En[l.overflowX]), o._isScrollT = a
    }
    (o._isScroll || r === "x") && (i.stopPropagation(), i._gsapAllow = !0)
}, xl = function (t, i, e, r) {
    return bt.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: i,
        onWheel: r = r && oc,
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
            return e && Lt(nt, bt.eventTypes[0], Ko, !1, !0)
        },
        onDisable: function () {
            return At(nt, bt.eventTypes[0], Ko, !0)
        }
    })
}, ac = /(input|label|select|textarea)/i, Go, Ko = function (t) {
    var i = ac.test(t.target.tagName);
    (i || Go) && (t._gsapAllow = !0, Go = i)
}, lc = function (t) {
    Xi(t) || (t = {}), t.preventDefault = t.isNormalizer = t.allowClicks = !0, t.type || (t.type = "wheel,touch"), t.debounce = !!t.debounce, t.id = t.id || "normalizer";
    var i = t, e = i.normalizeScrollX, r = i.momentum, n = i.allowNestedScroll, o = i.onRelease, a, l,
        u = ue(t.target) || xe, c = D.core.globals().ScrollSmoother, p = c && c.get(),
        h = yi && (t.content && ue(t.content) || p && t.content !== !1 && !p.smooth() && p.content()), f = Oi(u, Mt),
        _ = Oi(u, oe), d = 1,
        g = (bt.isTouch && B.visualViewport ? B.visualViewport.scale * B.visualViewport.width : B.outerWidth) / B.innerWidth,
        b = 0, w = Kt(r) ? function () {
            return r(a)
        } : function () {
            return r || 2.8
        }, S, v, T = xl(u, t.type, !0, n), P = function () {
            return v = !1
        }, x = $e, C = $e, k = function () {
            l = Ze(u, Mt), C = $r(yi ? 1 : 0, l), e && (x = $r(0, Ze(u, oe))), S = Zi
        }, E = function () {
            h._gsap.y = Ir(parseFloat(h._gsap.y) + f.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", f.offset = f.cacheID = 0
        }, N = function () {
            if (v) {
                requestAnimationFrame(P);
                var Q = Ir(a.deltaY / 2), st = C(f.v - Q);
                if (h && st !== f.v + f.offset) {
                    f.offset = st - f.v;
                    var m = Ir((parseFloat(h && h._gsap.y) || 0) - f.offset);
                    h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + m + ", 0, 1)", h._gsap.y = m + "px", f.cacheID = V.cache, li()
                }
                return !0
            }
            f.offset && E(), v = !0
        }, O, q, H, Z, $ = function () {
            k(), O.isActive() && O.vars.scrollY > l && (f() > l ? O.progress(1) && f(l) : O.resetTo("scrollY", l))
        };
    return h && D.set(h, {y: "+=0"}), t.ignoreCheck = function (z) {
        return yi && z.type === "touchmove" && N() || d > 1.05 && z.type !== "touchstart" || a.isGesturing || z.touches && z.touches.length > 1
    }, t.onPress = function () {
        v = !1;
        var z = d;
        d = Ir((B.visualViewport && B.visualViewport.scale || 1) / g), O.pause(), z !== d && _s(u, d > 1.01 ? !0 : e ? !1 : "x"), q = _(), H = f(), k(), S = Zi
    }, t.onRelease = t.onGestureStart = function (z, Q) {
        if (f.offset && E(), !Q) Z.restart(!0); else {
            V.cache++;
            var st = w(), m, ot;
            e && (m = _(), ot = m + st * .05 * -z.velocityX / .227, st *= $o(_, m, ot, Ze(u, oe)), O.vars.scrollX = x(ot)), m = f(), ot = m + st * .05 * -z.velocityY / .227, st *= $o(f, m, ot, Ze(u, Mt)), O.vars.scrollY = C(ot), O.invalidate().duration(st).play(.01), (yi && O.vars.scrollY >= l || m >= l - 1) && D.to({}, {
                onUpdate: $,
                duration: st
            })
        }
        o && o(z)
    }, t.onWheel = function () {
        O._ts && O.pause(), $t() - b > 1e3 && (S = 0, b = $t())
    }, t.onChange = function (z, Q, st, m, ot) {
        if (Zi !== S && k(), Q && e && _(x(m[2] === Q ? q + (z.startX - z.x) : _() + Q - m[1])), st) {
            f.offset && E();
            var jt = ot[2] === st, Ne = jt ? H + z.startY - z.y : f() + st - ot[1], pt = C(Ne);
            jt && Ne !== pt && (H += pt - Ne), f(pt)
        }
        (st || Q) && li()
    }, t.onEnable = function () {
        _s(u, e ? !1 : "x"), X.addEventListener("refresh", $), Lt(B, "resize", $), f.smooth && (f.target.style.scrollBehavior = "auto", f.smooth = _.smooth = !1), T.enable()
    }, t.onDisable = function () {
        _s(u, !0), At(B, "resize", $), X.removeEventListener("refresh", $), T.kill()
    }, t.lockAxis = t.lockAxis !== !1, a = new bt(t), a.iOS = yi, yi && !f() && f(1), yi && D.ticker.add($e), Z = a._dc, O = D.to(a, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: e ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: wl(f, f(), function () {
                return O.pause()
            })
        },
        onUpdate: li,
        onComplete: Z.vars.onComplete
    }), a
};
X.sort = function (s) {
    if (Kt(s)) return W.sort(s);
    var t = B.pageYOffset || 0;
    return X.getAll().forEach(function (i) {
        return i._sortY = i.trigger ? t + i.trigger.getBoundingClientRect().top : i.start + B.innerHeight
    }), W.sort(s || function (i, e) {
        return (i.vars.refreshPriority || 0) * -1e6 + (i.vars.containerAnimation ? 1e6 : i._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + (e.vars.refreshPriority || 0) * -1e6)
    })
};
X.observe = function (s) {
    return new bt(s)
};
X.normalizeScroll = function (s) {
    if (typeof s > "u") return ie;
    if (s === !0 && ie) return ie.enable();
    if (s === !1) {
        ie && ie.kill(), ie = s;
        return
    }
    var t = s instanceof bt ? s : lc(s);
    return ie && ie.target === t.target && ie.kill(), Qi(t.target) && (ie = t), t
};
X.core = {
    _getVelocityProp: As, _inputObserver: xl, _scrollers: V, _proxies: je, bridge: {
        ss: function () {
            ze || tr("scrollStart"), ze = $t()
        }, ref: function () {
            return qt
        }
    }
};
cl() && D.registerPlugin(X);
var uc = "1.3.11";

function bl(s, t, i) {
    return Math.max(s, Math.min(t, i))
}

function cc(s, t, i) {
    return (1 - i) * s + i * t
}

function fc(s, t, i, e) {
    return cc(s, t, 1 - Math.exp(-i * e))
}

function hc(s, t) {
    return (s % t + t) % t
}

var dc = class {
    constructor() {
        R(this, "isRunning", !1);
        R(this, "value", 0);
        R(this, "from", 0);
        R(this, "to", 0);
        R(this, "currentTime", 0);
        R(this, "lerp");
        R(this, "duration");
        R(this, "easing");
        R(this, "onUpdate")
    }

    advance(s) {
        var i;
        if (!this.isRunning) return;
        let t = !1;
        if (this.duration && this.easing) {
            this.currentTime += s;
            const e = bl(0, this.currentTime / this.duration, 1);
            t = e >= 1;
            const r = t ? 1 : this.easing(e);
            this.value = this.from + (this.to - this.from) * r
        } else this.lerp ? (this.value = fc(this.value, this.to, this.lerp * 60, s), Math.round(this.value) === this.to && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
        t && this.stop(), (i = this.onUpdate) == null || i.call(this, this.value, t)
    }

    stop() {
        this.isRunning = !1
    }

    fromTo(s, t, {lerp: i, duration: e, easing: r, onStart: n, onUpdate: o}) {
        this.from = this.value = s, this.to = t, this.lerp = i, this.duration = e, this.easing = r, this.currentTime = 0, this.isRunning = !0, n == null || n(), this.onUpdate = o
    }
};

function pc(s, t) {
    let i;
    return function (...e) {
        let r = this;
        clearTimeout(i), i = setTimeout(() => {
            i = void 0, s.apply(r, e)
        }, t)
    }
}

var _c = class {
    constructor(s, t, {autoResize: i = !0, debounce: e = 250} = {}) {
        R(this, "width", 0);
        R(this, "height", 0);
        R(this, "scrollHeight", 0);
        R(this, "scrollWidth", 0);
        R(this, "debouncedResize");
        R(this, "wrapperResizeObserver");
        R(this, "contentResizeObserver");
        R(this, "resize", () => {
            this.onWrapperResize(), this.onContentResize()
        });
        R(this, "onWrapperResize", () => {
            this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
        });
        R(this, "onContentResize", () => {
            this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
        });
        this.wrapper = s, this.content = t, i && (this.debouncedResize = pc(this.resize, e), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
    }

    destroy() {
        var s, t;
        (s = this.wrapperResizeObserver) == null || s.disconnect(), (t = this.contentResizeObserver) == null || t.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
    }

    get limit() {
        return {x: this.scrollWidth - this.width, y: this.scrollHeight - this.height}
    }
}, Tl = class {
    constructor() {
        R(this, "events", {})
    }

    emit(s, ...t) {
        var e;
        let i = this.events[s] || [];
        for (let r = 0, n = i.length; r < n; r++) (e = i[r]) == null || e.call(i, ...t)
    }

    on(s, t) {
        var i;
        return (i = this.events[s]) != null && i.push(t) || (this.events[s] = [t]), () => {
            var e;
            this.events[s] = (e = this.events[s]) == null ? void 0 : e.filter(r => t !== r)
        }
    }

    off(s, t) {
        var i;
        this.events[s] = (i = this.events[s]) == null ? void 0 : i.filter(e => t !== e)
    }

    destroy() {
        this.events = {}
    }
}, Zo = 100 / 6, mi = {passive: !1}, gc = class {
    constructor(s, t = {wheelMultiplier: 1, touchMultiplier: 1}) {
        R(this, "touchStart", {x: 0, y: 0});
        R(this, "lastDelta", {x: 0, y: 0});
        R(this, "window", {width: 0, height: 0});
        R(this, "emitter", new Tl);
        R(this, "onTouchStart", s => {
            const {clientX: t, clientY: i} = s.targetTouches ? s.targetTouches[0] : s;
            this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
                x: 0,
                y: 0
            }, this.emitter.emit("scroll", {deltaX: 0, deltaY: 0, event: s})
        });
        R(this, "onTouchMove", s => {
            const {clientX: t, clientY: i} = s.targetTouches ? s.targetTouches[0] : s,
                e = -(t - this.touchStart.x) * this.options.touchMultiplier,
                r = -(i - this.touchStart.y) * this.options.touchMultiplier;
            this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
                x: e,
                y: r
            }, this.emitter.emit("scroll", {deltaX: e, deltaY: r, event: s})
        });
        R(this, "onTouchEnd", s => {
            this.emitter.emit("scroll", {deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: s})
        });
        R(this, "onWheel", s => {
            let {deltaX: t, deltaY: i, deltaMode: e} = s;
            const r = e === 1 ? Zo : e === 2 ? this.window.width : 1,
                n = e === 1 ? Zo : e === 2 ? this.window.height : 1;
            t *= r, i *= n, t *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
                deltaX: t,
                deltaY: i,
                event: s
            })
        });
        R(this, "onWindowResize", () => {
            this.window = {width: window.innerWidth, height: window.innerHeight}
        });
        this.element = s, this.options = t, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, mi), this.element.addEventListener("touchstart", this.onTouchStart, mi), this.element.addEventListener("touchmove", this.onTouchMove, mi), this.element.addEventListener("touchend", this.onTouchEnd, mi)
    }

    on(s, t) {
        return this.emitter.on(s, t)
    }

    destroy() {
        this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, mi), this.element.removeEventListener("touchstart", this.onTouchStart, mi), this.element.removeEventListener("touchmove", this.onTouchMove, mi), this.element.removeEventListener("touchend", this.onTouchEnd, mi)
    }
}, jo = s => Math.min(1, 1.001 - Math.pow(2, -10 * s)), mc = class {
    constructor({
                    wrapper: s = window,
                    content: t = document.documentElement,
                    eventsTarget: i = s,
                    smoothWheel: e = !0,
                    syncTouch: r = !1,
                    syncTouchLerp: n = .075,
                    touchInertiaExponent: o = 1.7,
                    duration: a,
                    easing: l,
                    lerp: u = .1,
                    infinite: c = !1,
                    orientation: p = "vertical",
                    gestureOrientation: h = p === "horizontal" ? "both" : "vertical",
                    touchMultiplier: f = 1,
                    wheelMultiplier: _ = 1,
                    autoResize: d = !0,
                    prevent: g,
                    virtualScroll: b,
                    overscroll: w = !0,
                    autoRaf: S = !1,
                    anchors: v = !1,
                    autoToggle: T = !1,
                    allowNestedScroll: P = !1,
                    __experimental__naiveDimensions: x = !1
                } = {}) {
        R(this, "_isScrolling", !1);
        R(this, "_isStopped", !1);
        R(this, "_isLocked", !1);
        R(this, "_preventNextNativeScrollEvent", !1);
        R(this, "_resetVelocityTimeout", null);
        R(this, "__rafID", null);
        R(this, "isTouching");
        R(this, "time", 0);
        R(this, "userData", {});
        R(this, "lastVelocity", 0);
        R(this, "velocity", 0);
        R(this, "direction", 0);
        R(this, "options");
        R(this, "targetScroll");
        R(this, "animatedScroll");
        R(this, "animate", new dc);
        R(this, "emitter", new Tl);
        R(this, "dimensions");
        R(this, "virtualScroll");
        R(this, "onScrollEnd", s => {
            s instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === !1) && s.stopPropagation()
        });
        R(this, "dispatchScrollendEvent", () => {
            this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                bubbles: this.options.wrapper === window,
                detail: {lenisScrollEnd: !0}
            }))
        });
        R(this, "onTransitionEnd", s => {
            if (s.propertyName.includes("overflow")) {
                const t = this.isHorizontal ? "overflow-x" : "overflow-y", i = getComputedStyle(this.rootElement)[t];
                ["hidden", "clip"].includes(i) ? this.internalStop() : this.internalStart()
            }
        });
        R(this, "onClick", s => {
            const i = s.composedPath().find(e => {
                var r, n, o;
                return e instanceof HTMLAnchorElement && (((r = e.getAttribute("href")) == null ? void 0 : r.startsWith("#")) || ((n = e.getAttribute("href")) == null ? void 0 : n.startsWith("/#")) || ((o = e.getAttribute("href")) == null ? void 0 : o.startsWith("./#")))
            });
            if (i) {
                const e = i.getAttribute("href");
                if (e) {
                    const r = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0;
                    let n = `#${e.split("#")[1]}`;
                    ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(e) && (n = 0), this.scrollTo(n, r)
                }
            }
        });
        R(this, "onPointerDown", s => {
            s.button === 1 && this.reset()
        });
        R(this, "onVirtualScroll", s => {
            if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(s) === !1) return;
            const {deltaX: t, deltaY: i, event: e} = s;
            if (this.emitter.emit("virtual-scroll", {
                deltaX: t,
                deltaY: i,
                event: e
            }), e.ctrlKey || e.lenisStopPropagation) return;
            const r = e.type.includes("touch"), n = e.type.includes("wheel");
            this.isTouching = e.type === "touchstart" || e.type === "touchmove";
            const o = t === 0 && i === 0;
            if (this.options.syncTouch && r && e.type === "touchstart" && o && !this.isStopped && !this.isLocked) {
                this.reset();
                return
            }
            const l = this.options.gestureOrientation === "vertical" && i === 0 || this.options.gestureOrientation === "horizontal" && t === 0;
            if (o || l) return;
            let u = e.composedPath();
            u = u.slice(0, u.indexOf(this.rootElement));
            const c = this.options.prevent;
            if (u.find(g => {
                var b, w, S;
                return g instanceof HTMLElement && (typeof c == "function" && (c == null ? void 0 : c(g)) || ((b = g.hasAttribute) == null ? void 0 : b.call(g, "data-lenis-prevent")) || r && ((w = g.hasAttribute) == null ? void 0 : w.call(g, "data-lenis-prevent-touch")) || n && ((S = g.hasAttribute) == null ? void 0 : S.call(g, "data-lenis-prevent-wheel")) || this.options.allowNestedScroll && this.checkNestedScroll(g, {
                    deltaX: t,
                    deltaY: i
                }))
            })) return;
            if (this.isStopped || this.isLocked) {
                e.cancelable && e.preventDefault();
                return
            }
            if (!(this.options.syncTouch && r || this.options.smoothWheel && n)) {
                this.isScrolling = "native", this.animate.stop(), e.lenisStopPropagation = !0;
                return
            }
            let h = i;
            this.options.gestureOrientation === "both" ? h = Math.abs(i) > Math.abs(t) ? i : t : this.options.gestureOrientation === "horizontal" && (h = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && i > 0 || this.animatedScroll === this.limit && i < 0)) && (e.lenisStopPropagation = !0), e.cancelable && e.preventDefault();
            const f = r && this.options.syncTouch, d = r && e.type === "touchend";
            d && (h = Math.sign(this.velocity) * Math.pow(Math.abs(this.velocity), this.options.touchInertiaExponent)), this.scrollTo(this.targetScroll + h, {
                programmatic: !1, ...f ? {lerp: d ? this.options.syncTouchLerp : 1} : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing
                }
            })
        });
        R(this, "onNativeScroll", () => {
            if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
                this._preventNextNativeScrollEvent = !1;
                return
            }
            if (this.isScrolling === !1 || this.isScrolling === "native") {
                const s = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - s, this.direction = Math.sign(this.animatedScroll - s), this.isStopped || (this.isScrolling = "native"), this.emit(), this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout(() => {
                    this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                }, 400))
            }
        });
        R(this, "raf", s => {
            const t = s - (this.time || s);
            this.time = s, this.animate.advance(t * .001), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
        });
        window.lenisVersion = uc, (!s || s === document.documentElement) && (s = window), typeof a == "number" && typeof l != "function" ? l = jo : typeof l == "function" && typeof a != "number" && (a = 1), this.options = {
            wrapper: s,
            content: t,
            eventsTarget: i,
            smoothWheel: e,
            syncTouch: r,
            syncTouchLerp: n,
            touchInertiaExponent: o,
            duration: a,
            easing: l,
            lerp: u,
            infinite: c,
            gestureOrientation: h,
            orientation: p,
            touchMultiplier: f,
            wheelMultiplier: _,
            autoResize: d,
            prevent: g,
            virtualScroll: b,
            overscroll: w,
            autoRaf: S,
            anchors: v,
            autoToggle: T,
            allowNestedScroll: P,
            __experimental__naiveDimensions: x
        }, this.dimensions = new _c(s, t, {autoResize: d}), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {capture: !0}), this.options.anchors && this.options.wrapper === window && this.options.wrapper.addEventListener("click", this.onClick, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new gc(i, {
            touchMultiplier: f,
            wheelMultiplier: _
        }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {passive: !0}), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
    }

    destroy() {
        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {capture: !0}), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), this.options.anchors && this.options.wrapper === window && this.options.wrapper.removeEventListener("click", this.onClick, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this.__rafID && cancelAnimationFrame(this.__rafID)
    }

    on(s, t) {
        return this.emitter.on(s, t)
    }

    off(s, t) {
        return this.emitter.off(s, t)
    }

    setScroll(s) {
        this.isHorizontal ? this.options.wrapper.scrollTo({
            left: s,
            behavior: "instant"
        }) : this.options.wrapper.scrollTo({top: s, behavior: "instant"})
    }

    resize() {
        this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
    }

    emit() {
        this.emitter.emit("scroll", this)
    }

    reset() {
        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
    }

    start() {
        if (this.isStopped) {
            if (this.options.autoToggle) {
                this.rootElement.style.removeProperty("overflow");
                return
            }
            this.internalStart()
        }
    }

    internalStart() {
        this.isStopped && (this.reset(), this.isStopped = !1, this.emit())
    }

    stop() {
        if (!this.isStopped) {
            if (this.options.autoToggle) {
                this.rootElement.style.setProperty("overflow", "clip");
                return
            }
            this.internalStop()
        }
    }

    internalStop() {
        this.isStopped || (this.reset(), this.isStopped = !0, this.emit())
    }

    scrollTo(s, {
        offset: t = 0,
        immediate: i = !1,
        lock: e = !1,
        duration: r = this.options.duration,
        easing: n = this.options.easing,
        lerp: o = this.options.lerp,
        onStart: a,
        onComplete: l,
        force: u = !1,
        programmatic: c = !0,
        userData: p
    } = {}) {
        if (!((this.isStopped || this.isLocked) && !u)) {
            if (typeof s == "string" && ["top", "left", "start"].includes(s)) s = 0; else if (typeof s == "string" && ["bottom", "right", "end"].includes(s)) s = this.limit; else {
                let h;
                if (typeof s == "string" ? h = document.querySelector(s) : s instanceof HTMLElement && (s != null && s.nodeType) && (h = s), h) {
                    if (this.options.wrapper !== window) {
                        const _ = this.rootElement.getBoundingClientRect();
                        t -= this.isHorizontal ? _.left : _.top
                    }
                    const f = h.getBoundingClientRect();
                    s = (this.isHorizontal ? f.left : f.top) + this.animatedScroll
                }
            }
            if (typeof s == "number") {
                if (s += t, s = Math.round(s), this.options.infinite) {
                    if (c) {
                        this.targetScroll = this.animatedScroll = this.scroll;
                        const h = s - this.animatedScroll;
                        h > this.limit / 2 ? s = s - this.limit : h < -this.limit / 2 && (s = s + this.limit)
                    }
                } else s = bl(0, s, this.limit);
                if (s === this.targetScroll) {
                    a == null || a(this), l == null || l(this);
                    return
                }
                if (this.userData = p ?? {}, i) {
                    this.animatedScroll = this.targetScroll = s, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), l == null || l(this), this.userData = {}, requestAnimationFrame(() => {
                        this.dispatchScrollendEvent()
                    });
                    return
                }
                c || (this.targetScroll = s), typeof r == "number" && typeof n != "function" ? n = jo : typeof n == "function" && typeof r != "number" && (r = 1), this.animate.fromTo(this.animatedScroll, s, {
                    duration: r,
                    easing: n,
                    lerp: o,
                    onStart: () => {
                        e && (this.isLocked = !0), this.isScrolling = "smooth", a == null || a(this)
                    },
                    onUpdate: (h, f) => {
                        this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = h - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = h, this.setScroll(this.scroll), c && (this.targetScroll = h), f || this.emit(), f && (this.reset(), this.emit(), l == null || l(this), this.userData = {}, requestAnimationFrame(() => {
                            this.dispatchScrollendEvent()
                        }), this.preventNextNativeScrollEvent())
                    }
                })
            }
        }
    }

    preventNextNativeScrollEvent() {
        this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
            this._preventNextNativeScrollEvent = !1
        })
    }

    checkNestedScroll(s, {deltaX: t, deltaY: i}) {
        const e = Date.now(), r = s._lenis ?? (s._lenis = {});
        let n, o, a, l, u, c, p, h;
        const f = this.options.gestureOrientation;
        if (e - (r.time ?? 0) > 2e3) {
            r.time = Date.now();
            const T = window.getComputedStyle(s);
            r.computedStyle = T;
            const P = T.overflowX, x = T.overflowY;
            if (n = ["auto", "overlay", "scroll"].includes(P), o = ["auto", "overlay", "scroll"].includes(x), r.hasOverflowX = n, r.hasOverflowY = o, !n && !o || f === "vertical" && !o || f === "horizontal" && !n) return !1;
            u = s.scrollWidth, c = s.scrollHeight, p = s.clientWidth, h = s.clientHeight, a = u > p, l = c > h, r.isScrollableX = a, r.isScrollableY = l, r.scrollWidth = u, r.scrollHeight = c, r.clientWidth = p, r.clientHeight = h
        } else a = r.isScrollableX, l = r.isScrollableY, n = r.hasOverflowX, o = r.hasOverflowY, u = r.scrollWidth, c = r.scrollHeight, p = r.clientWidth, h = r.clientHeight;
        if (!n && !o || !a && !l || f === "vertical" && (!o || !l) || f === "horizontal" && (!n || !a)) return !1;
        let _;
        if (f === "horizontal") _ = "x"; else if (f === "vertical") _ = "y"; else {
            const T = t !== 0, P = i !== 0;
            T && n && a && (_ = "x"), P && o && l && (_ = "y")
        }
        if (!_) return !1;
        let d, g, b, w, S;
        if (_ === "x") d = s.scrollLeft, g = u - p, b = t, w = n, S = a; else if (_ === "y") d = s.scrollTop, g = c - h, b = i, w = o, S = l; else return !1;
        return (b > 0 ? d < g : d > 0) && w && S
    }

    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }

    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }

    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }

    get actualScroll() {
        const s = this.options.wrapper;
        return this.isHorizontal ? s.scrollX ?? s.scrollLeft : s.scrollY ?? s.scrollTop
    }

    get scroll() {
        return this.options.infinite ? hc(this.animatedScroll, this.limit) : this.animatedScroll
    }

    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }

    get isScrolling() {
        return this._isScrolling
    }

    set isScrolling(s) {
        this._isScrolling !== s && (this._isScrolling = s, this.updateClassName())
    }

    get isStopped() {
        return this._isStopped
    }

    set isStopped(s) {
        this._isStopped !== s && (this._isStopped = s, this.updateClassName())
    }

    get isLocked() {
        return this._isLocked
    }

    set isLocked(s) {
        this._isLocked !== s && (this._isLocked = s, this.updateClassName())
    }

    get isSmooth() {
        return this.isScrolling === "smooth"
    }

    get className() {
        let s = "lenis";
        return this.options.autoToggle && (s += " lenis-autoToggle"), this.isStopped && (s += " lenis-stopped"), this.isLocked && (s += " lenis-locked"), this.isScrolling && (s += " lenis-scrolling"), this.isScrolling === "smooth" && (s += " lenis-smooth"), s
    }

    updateClassName() {
        this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
    }

    cleanUpClassName() {
        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
    }
};
at.registerPlugin(X);
"scrollRestoration" in history && (history.scrollRestoration = "manual");
window.scrollTo(0, 0);
const Fn = document.querySelector("#opening"), yc = document.querySelector("#openInvitation"),
    Vi = document.querySelector("#weddingMusic"), cn = document.querySelector("#soundControl"),
    vc = cn.querySelector(".sound-label"), Sl = document.querySelector(".nav"),
    wc = document.querySelector(".scroll-progress span"),
    ut = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let Qo = !1, Pl = !1;
at.set(".title-line > span", {yPercent: 110});
const kr = new mc({
    duration: 1.08,
    easing: s => Math.min(1, 1.001 - Math.pow(2, -10 * s)),
    smoothWheel: !0,
    wheelMultiplier: .86,
    touchMultiplier: 1.25
});
kr.stop();
kr.on("scroll", X.update);
at.ticker.add(s => {
    kr.raf(s * 1e3)
});
at.ticker.lagSmoothing(0);

function Jr(s) {
    Pl = s, cn.classList.toggle("is-muted", !s), cn.setAttribute("aria-label", s ? "Pause music" : "Play music"), vc.textContent = s ? "Sound on" : "Sound off"
}

async function xc() {
    Vi.volume = 0;
    try {
        await Vi.play(), Jr(!0), at.to(Vi, {volume: .34, duration: 2.8, ease: "power2.out"})
    } catch {
        Jr(!1)
    }
}

function bc() {
    const s = window.matchMedia("(max-width: 900px)").matches;
    at.timeline().to(".hero-image-wrap", {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: ut ? .01 : 1.45,
        ease: "power4.inOut"
    }, 0).to(".hero-image-wrap img", {
        scale: 1,
        duration: ut ? .01 : 2.2,
        ease: "power3.out"
    }, 0).to(".title-line > span", {
        yPercent: 0,
        duration: ut ? .01 : 1.1,
        stagger: .12,
        ease: "power4.out"
    }, .25).to(".title-amp", {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: ut ? .01 : .75,
        ease: "back.out(1.8)"
    }, .58).to([".hero-eyebrow", ".hero-meta", ".hero-intro"], {
        opacity: 1,
        y: 0,
        duration: ut ? .01 : .75,
        stagger: .11,
        ease: "power3.out"
    }, .72).to(".circle-link", {opacity: 1, scale: 1, duration: ut ? .01 : .8, ease: "back.out(1.4)"}, 1.02)
}

function kl() {
    if (Qo) return;
    Qo = !0, window.scrollTo(0, 0), xc();
    const s = ut ? .01 : 2.35;
    at.timeline({
        defaults: {ease: "power4.inOut"}, onComplete: () => {
            Fn.style.display = "none", Fn.setAttribute("aria-hidden", "true"), document.body.classList.remove("is-locked"), window.scrollTo(0, 0), kr.scrollTo(0, {immediate: !0}), kr.start(), X.refresh()
        }
    }).to(".opening-card", {
        opacity: 0,
        yPercent: -7,
        scale: .94,
        duration: ut ? .01 : .5,
        ease: "power3.in"
    }, 0).to(".sound-note", {opacity: 0, y: 10, duration: ut ? .01 : .35}, 0).to(".curtain-seam", {
        width: ut ? 2 : 32,
        opacity: 1,
        boxShadow: "0 0 35px rgba(255,238,230,.95), 0 0 95px rgba(255,215,205,.65)",
        duration: ut ? .01 : .55,
        ease: "power2.out"
    }, .05).to(".curtain-panel-left", {
        xPercent: -96,
        scaleX: .32,
        skewY: -1.3,
        filter: "brightness(.72) blur(1px)",
        duration: s
    }, .38).to(".curtain-panel-right", {
        xPercent: 96,
        scaleX: .32,
        skewY: 1.3,
        filter: "brightness(.72) blur(1px)",
        duration: s
    }, .38).to(".curtain-seam", {
        width: "42vw",
        opacity: 0,
        duration: ut ? .01 : 1.35,
        ease: "power3.out"
    }, .45).to(".curtain-valance", {
        yPercent: -120,
        scaleY: .9,
        opacity: 0,
        filter: "drop-shadow(0 40px 45px rgba(0,0,0,.48)) brightness(.78)",
        duration: s,
        ease: "power4.inOut"
    }, .38).to(".cinema-bar-top", {
        yPercent: -110,
        duration: ut ? .01 : 1,
        ease: "power3.inOut"
    }, 1.35).to(".cinema-bar-bottom", {
        yPercent: 110,
        duration: ut ? .01 : 1,
        ease: "power3.inOut"
    }, 1.35).to(".opening-reveal img", {
        scale: 1.04,
        duration: ut ? .01 : 3,
        ease: "power3.out"
    }, .45).to(Fn, {autoAlpha: 0, duration: ut ? .01 : .65, ease: "power2.out"}, s + .44).to(Sl, {
        opacity: 1,
        yPercent: 0,
        duration: ut ? .01 : .8,
        ease: "power3.out"
    }, s + .42).to(cn, {
        opacity: 1,
        y: 0,
        pointerEvents: "auto",
        duration: ut ? .01 : .6,
        ease: "power3.out"
    }, s + .55).call(bc, [], s + .2)
}

Fn.addEventListener("click", kl);
yc.addEventListener("click", kl);
cn.addEventListener("click", async () => {
    if (Pl) {
        at.to(Vi, {volume: 0, duration: .65, onComplete: () => Vi.pause()}), Jr(!1);
        return
    }
    try {
        await Vi.play(), at.to(Vi, {volume: .34, duration: .85}), Jr(!0)
    } catch {
        Jr(!1)
    }
});
window.addEventListener("scroll", () => {
    const s = window.scrollY, t = document.documentElement.scrollHeight - window.innerHeight;
    wc.style.transform = `scaleX(${t > 0 ? s / t : 0})`, Sl.classList.toggle("is-scrolled", s > window.innerHeight * .72)
}, {passive: !0});
document.querySelectorAll('a[href^="#"]').forEach(s => {
    s.addEventListener("click", t => {
        const i = document.querySelector(s.getAttribute("href"));
        i && (t.preventDefault(), kr.scrollTo(i, {offset: -64}))
    })
});
at.utils.toArray(".reveal-up").forEach(s => {
    at.to(s, {
        opacity: 1,
        y: 0,
        duration: ut ? .01 : .95,
        ease: "power3.out",
        scrollTrigger: {trigger: s, start: "top 86%", once: !0}
    })
});
at.utils.toArray(".reveal-scale").forEach(s => {
    at.to(s, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: ut ? .01 : .9,
        ease: "back.out(1.35)",
        scrollTrigger: {trigger: s, start: "top 84%", once: !0}
    })
});
at.utils.toArray(".image-reveal").forEach(s => {
    const t = s.classList.contains("portrait-card") ? s.querySelector(".portrait-media") : s,
        i = t.querySelector("img");
    at.to(t, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: ut ? .01 : 1.25,
        ease: "power4.inOut",
        scrollTrigger: {trigger: s, start: "top 85%", once: !0}
    }), i && at.fromTo(i, {scale: 1.12}, {
        scale: 1.02,
        duration: ut ? .01 : 1.7,
        ease: "power3.out",
        scrollTrigger: {trigger: s, start: "top 85%", once: !0}
    })
});
at.utils.toArray(".story-chapter").forEach(s => {
    at.from(s.children, {
        opacity: 0,
        y: 45,
        duration: ut ? .01 : .9,
        stagger: .12,
        ease: "power3.out",
        scrollTrigger: {trigger: s, start: "top 72%", end: "bottom 38%", toggleActions: "play none none reverse"}
    })
});
ut || (at.to(".story-image img", {
    yPercent: 8,
    ease: "none",
    scrollTrigger: {trigger: ".story", start: "top top", end: "bottom bottom", scrub: !0}
}), at.to(".venue-image img", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {trigger: ".venue", start: "top bottom", end: "bottom top", scrub: !0}
}), at.utils.toArray(".gallery-item img").forEach(s => {
    at.to(s, {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {trigger: s.parentElement, start: "top bottom", end: "bottom top", scrub: !0}
    })
}));
document.querySelectorAll(".event-plus").forEach(s => {
    s.addEventListener("click", () => {
        const i = s.closest(".event-row").classList.toggle("is-open");
        s.setAttribute("aria-expanded", String(i))
    })
});
document.querySelectorAll(".faq-item button").forEach(s => {
    s.addEventListener("click", () => {
        const t = s.closest(".faq-item"), i = t.classList.contains("is-open");
        document.querySelectorAll(".faq-item.is-open").forEach(e => {
            e.classList.remove("is-open"), e.querySelector("button").setAttribute("aria-expanded", "false")
        }), i || (t.classList.add("is-open"), s.setAttribute("aria-expanded", "true")), window.setTimeout(() => X.refresh(), 480)
    })
});
document.querySelector("#saveDate").addEventListener("click", () => {
    const s = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Vivek and Mythili//Reception//EN",
        "BEGIN:VEVENT",
        "UID:vivek-mythili-reception-2027",
        "DTSTAMP:20261128T000000Z",
        "DTSTART:20261128T180000Z",
        "DTEND:20261128T200000Z",
        "SUMMARY:Vivek & Mythili's Reception",
        "LOCATION:Hotel Vijay Elanza Coimbatore",
        "DESCRIPTION:Join us for Vivek and Mythili's wedding celebration.",
        "END:VEVENT",
        "END:VCALENDAR"
    ].join(`\r
`), t = new Blob([s], {type: "text/calendar;charset=utf-8"}), i = document.createElement("a");
    i.href = URL.createObjectURL(t), i.download = "vivek-mythili-wedding.ics", i.click(), URL.revokeObjectURL(i.href)
});
const Tc = new Date("2026-11-28T18:00:00+05:30").getTime();

function El() {
    const s = Math.max(0, Tc - Date.now()), t = {
        days: Math.floor(s / 864e5),
        hours: Math.floor(s / 36e5) % 24,
        minutes: Math.floor(s / 6e4) % 60,
        seconds: Math.floor(s / 1e3) % 60
    };
    Object.entries(t).forEach(([i, e]) => {
        document.querySelector(`#${i}`).textContent = String(e)
    })
}

El();
window.setInterval(El, 1000);

document.querySelector("#rsvpForm").addEventListener("submit", async e => {
    e.preventDefault();

    const form = e.currentTarget;
    const button = form.querySelector(".submit-button");

    try {
        button.disabled = true;

        const guestName = document.querySelector("#guestName").value.trim();
        const attendance = document.querySelector("#attendance").value;
        const guestCount = document.querySelector("#guestCount").value;
        const guestMessage = document.querySelector("#guestMessage").value.trim();

        const errors = [];

        if (!guestName) {
            errors.push("Name is required");
        }

        if (guestName.length > 200) {
            errors.push("Name cannot exceed 100 characters");
        }

        if (!["yes", "no"].includes(attendance)) {
            errors.push("Invalid attendance selection");
        }

        const count = Number(guestCount);

        if (!Number.isInteger(count)) {
            errors.push("Guest count must be a whole number");
        }

        if (count < 1 || count > 25) {
            errors.push("Guest count must be between 1 and 20");
        }

        if (guestMessage.length > 800) {
            errors.push("Message cannot exceed 500 characters");
        }

        if (errors.length) {
            button.disabled = false;
            alert(errors.join("\n"));
            return;
        }

        const payload = {
            guestName,
            attendance,
            guestCount: count,
            guestMessage
        };

        console.log(payload);

        const formData = new FormData();

        formData.append("guestName", payload.guestName);
        formData.append("attendance", payload.attendance);
        formData.append("guestCount", payload.guestCount);
        formData.append("guestMessage", payload.guestMessage);
        formData.append("event", "reception");

        const response = await fetch("https://script.google.com/macros/s/AKfycbybj6DueUR8PdubFvROfIuIVuEwACToPhFJgq_vGlVY96_gxK9mU1JDNe0BlmjSdD-r/exec", {
            method: "POST",
            mode: "no-cors",
            body: formData
        });

        console.log("Response:", response);

        at.to(form, {
            opacity: 0,
            y: -15,
            duration: 0.45,
            onComplete: () => {
                form.style.display = "none";

                const success = document.querySelector("#rsvpSuccess");

                success.classList.add("is-visible");

                at.fromTo(
                    success.children,
                    {
                        opacity: 0,
                        y: 20
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        stagger: 0.1,
                        ease: "power3.out"
                    }
                );

                X.refresh();
            }
        });

    } catch (error) {
        console.error(error);
        button.disabled = false;
    }
});
window.addEventListener("load", () => {
    document.body.classList.add("is-ready"), X.refresh()
});
