!function() {
    var e, t, n, r, o = {
        3607: function(e, t, n) {
            "use strict";
            n(492),
            n(6492),
            n(9311),
            n(2598),
            n(3800),
            n(3108);
            var r = n(411)
              , o = n.n(r);
            n(4140);
            "object-fit"in document.createElement("a").style || n(9213),
            o().polyfill(),
            "remove"in Element.prototype || (Element.prototype.remove = function() {
                this.parentNode && this.parentNode.removeChild(this)
            }
            ),
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
            Element.prototype.closest || (Element.prototype.closest = function(e) {
                var t = this;
                do {
                    if (t.matches(e))
                        return t;
                    t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType);
                return null
            }
            ),
            [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach((function(e) {
                e.hasOwnProperty("prepend") || Object.defineProperty(e, "prepend", {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    value: function() {
                        var e = Array.prototype.slice.call(arguments)
                          , t = document.createDocumentFragment();
                        e.forEach((function(e) {
                            var n = e instanceof Node;
                            t.appendChild(n ? e : document.createTextNode(String(e)))
                        }
                        )),
                        this.insertBefore(t, this.firstChild)
                    }
                })
            }
            ));
            n(5845);
            var i = n(8276)
              , a = n.n(i)
              , c = n(6871);
            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        l(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            a().register({
                request: function(e, t) {
                    if (t && ("PATCH" === t.method || "DELETE" === t.method)) {
                        var n = s({}, t.headers);
                        n.Accept = "application/json",
                        n["Content-Type"] = "application/json",
                        t.headers = n
                    }
                    var r = s({}, t)
                      , o = document.querySelector("[data-root-api]");
                    return o && (e = o.getAttribute("data-root-api") + e),
                    [e, r]
                },
                requestError: function(e) {
                    return Promise.reject(e)
                },
                response: function(e) {
                    return e
                },
                responseError: function(e) {
                    return Promise.reject(e)
                }
            });
            n(3716);
            var d, f, p, m, v, h = n(5931), y = n(3671), g = h.ig.getter("property", "fb:app_id");
            window.fbAsyncInit = function() {
                FB.init({
                    appId: g,
                    xfbml: !0,
                    version: y.Yu
                })
            }
            ,
            d = document,
            f = "script",
            p = "facebook-jssdk",
            v = d.getElementsByTagName(f)[0],
            d.getElementById(p) || ((m = d.createElement(f)).id = p,
            m.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=".concat(y.Yu, "&appId=").concat(g),
            v.parentNode.insertBefore(m, v));
            var b = n(1302)
              , w = n(6562)
              , _ = n(1704)
              , x = n(1785)
              , k = n(7091)
              , E = n(4031);
            function O(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a)
                      , u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            function S(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            O(i, r, o, a, c, "next", e)
                        }
                        function c(e) {
                            O(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            function j(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var L = document.querySelector(".udn-idle")
              , P = ["mousemove", "click", "scroll", "keydown"]
              , A = null
              , C = null
              , N = !1
              , R = function() {
                function e(t, n) {
                    !function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    this.cleared = !1,
                    this.id = setTimeout(t, n)
                }
                var t, n, r;
                return t = e,
                (n = [{
                    key: "clear",
                    value: function() {
                        this.cleared = !0,
                        clearTimeout(this.id)
                    }
                }]) && j(t.prototype, n),
                r && j(t, r),
                e
            }();
            function T() {
                return (T = S(regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!(window.innerWidth < y.sO.tablet)) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return M(),
                                B(),
                                e.prev = 5,
                                N = !0,
                                e.next = 9,
                                (0,
                                x.wY)(_.N.idlePage);
                            case 9:
                                return t = e.sent,
                                e.next = 12,
                                (0,
                                k.Vx)(t, L, q, (0,
                                h.hB)());
                            case 12:
                                E.Z.setClass("idle-open"),
                                L.addEventListener("click", I),
                                googletag.pubads && !(0,
                                h.hB)() && googletag.pubads().refresh([window.idle_slot1]),
                                e.next = 22;
                                break;
                            case 17:
                                e.prev = 17,
                                e.t0 = e.catch(5),
                                N = !1,
                                q();
                            case 22:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[5, 17]])
                }
                )))).apply(this, arguments)
            }
            function I(e) {
                "udn-idle" === e.target.className && (L.removeEventListener("click", I),
                q())
            }
            function D() {
                C && C.clear(),
                C = new R((function() {
                    !function() {
                        T.apply(this, arguments)
                    }()
                }
                ),y.JW.interactionInterval),
                P.forEach((function(e) {
                    window.addEventListener(e, Z, !1)
                }
                ))
            }
            function q() {
                E.Z.removeClass("idle-open"),
                N = !1,
                Z()
            }
            function M() {
                C && C.clear(),
                A && A.clear()
            }
            function Z() {
                N ? A.clear() : (M(),
                B(),
                A = new R(D,y.JW.wait))
            }
            function B() {
                P.forEach((function(e) {
                    window.removeEventListener(e, Z, !1)
                }
                ))
            }
            n(7921);
            function U(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a)
                      , u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            function Y(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return W(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return W(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return W(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function W(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var H, J = document.querySelectorAll(".context-box--collapsable"), z = document.getElementById("gotop"), F = document.querySelectorAll(".btn-follow"), $ = document.querySelector(".udn-overlay");
            document.querySelector(".wrapper-aside");
            if ((0,
            b.YZ)(),
            z.addEventListener("click", (function(e) {
                e.preventDefault(),
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }
            )),
            Y(F).forEach(function() {
                var e, t = (e = regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                t.addEventListener("click", w.Cv);
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )),
                function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            U(i, r, o, a, c, "next", e)
                        }
                        function c(e) {
                            U(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
                );
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()),
            F.length) {
                var X = Y(F).map((function(e) {
                    var t = e.dataset
                      , n = t.id
                      , r = t.site
                      , o = t.type;
                    return {
                        me: n.toString(),
                        s: r.toString(),
                        type: o
                    }
                }
                ));
                (0,
                b.bg)() && (0,
                w.GO)(X)
            }
            function V(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return G(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return G(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return G(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function G(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function Q(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a)
                      , u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            function K(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            Q(i, r, o, a, c, "next", e)
                        }
                        function c(e) {
                            Q(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            $ && $.addEventListener("click", (function(e) {
                e.preventDefault(),
                E.Z.removeAllClasses()
            }
            )),
            window.innerWidth > y.sO.desktop && y.JW.state && (A = new R(D,y.JW.wait)),
            Y(J).forEach((function(e) {
                e.querySelector(".context-box__header").addEventListener("click", (function(t) {
                    t.preventDefault(),
                    t.stopImmediatePropagation();
                    var n = e.classList.contains("hide")
                      , r = e.querySelector(".btn-collapse");
                    r.setAttribute("aria-expanded", n),
                    r.textContent = n ? "關閉" : "展開",
                    e.classList.toggle("hide")
                }
                ))
            }
            ));
            var ee, te = document.querySelector(".navigation"), ne = document.querySelector(".custom-menu"), re = document.getElementById("setMenu"), oe = document.getElementById("resetMenu"), ie = document.querySelector(".custom-menu--button__holder"), ae = document.querySelector(".custom-menu--main .custom-menu--button__holder"), ce = document.querySelector(".navigation-toggler"), ue = (document.querySelector(".navigation-wrapper"),
            document.getElementById("customize")), se = localStorage.getItem(y.oY), le = !1, de = !1;
            try {
                se ? ve(JSON.parse(se)) : ve()
            } catch (e) {}
            function fe(e) {
                var t = document.querySelectorAll(".custom-menu--button");
                de = e,
                e ? (ne.classList.add("is-editing"),
                (ee = new H(document.querySelectorAll(".custom-menu--button__holder"),{
                    draggable: ".custom-menu--button"
                })).on("sortable:start", (function() {
                    le = !0,
                    re.classList.remove("disabled"),
                    ie.classList.add("drop-active")
                }
                )),
                ee.on("sortable:stop", (function() {
                    ie.classList.remove("drop-active")
                }
                )),
                V(t).forEach((function(e) {
                    return e.addEventListener("click", me)
                }
                ))) : pe()
            }
            function pe() {
                de = !1;
                var e = document.querySelectorAll(".custom-menu--button");
                ne.classList.remove("is-editing"),
                V(e).forEach((function(e) {
                    return e.removeEventListener("click", me)
                }
                )),
                ee && ee.destroy()
            }
            function me(e) {
                e.preventDefault()
            }
            function ve() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.__UDN__.initialMenu;
                e.hasOwnProperty("selected") || (e = window.__UDN__.initialMenu),
                ge(e.selected),
                ye(e.selected)
            }
            function he(e) {
                var t = Object.assign([], window.__UDN__.initialMenu.selected)
                  , n = Object.assign([], e).map((function(e) {
                    return t.find((function(t) {
                        return t.id === e.id
                    }
                    ))
                }
                )).filter(Boolean);
                if (Set) {
                    var r = new Set;
                    n = n.filter((function(e) {
                        var t = r.has(e.id);
                        return r.add(e.id),
                        !t
                    }
                    ))
                }
                var o = t.filter(function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "id";
                    return function(n) {
                        return 0 == e.filter((function(e) {
                            return e[t] == n[t]
                        }
                        )).length
                    }
                }(n));
                return [].concat(V(n), V(o))
            }
            function ye() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V(window.__UDN__.initialMenu.selected)
                  , t = Object.assign({}, window.__UDN__.initialMenu)
                  , n = he(e);
                we(),
                t.fixed.map((function(e) {
                    ae.appendChild(_e(e, !0))
                }
                )),
                t.mobile && t.mobile.map((function(e) {
                    ae.appendChild(_e(e, !0, "custom-menu--mobile"))
                }
                )),
                n.map((function(e) {
                    ae.appendChild(_e(e))
                }
                )),
                t.shopping && ae.appendChild(_e(t.shopping, !0)),
                t.ads.map((function(e) {
                    ae.appendChild(_e(e, !0, "custom-menu--sales"))
                }
                ))
            }
            function ge() {
                return be.apply(this, arguments)
            }
            function be() {
                return be = K(regeneratorRuntime.mark((function e() {
                    var t, n, r, o, i = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = i.length > 0 && void 0 !== i[0] ? i[0] : V(window.__UDN__.initialMenu.selected),
                                n = Object.assign({}, window.__UDN__.initialMenu),
                                r = he(t),
                                o = [r, []],
                                e.next = 6,
                                (0,
                                k.av)({
                                    endMenu: n.shopping,
                                    fixed: n.fixed,
                                    mobile: n.mobile,
                                    menu: o,
                                    ads: n.ads,
                                    current: n.current
                                }, te);
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                be.apply(this, arguments)
            }
            function we() {
                V(document.querySelectorAll(".custom-menu--button__holder")).forEach((function(e) {
                    for (; e.firstChild; )
                        e.firstChild.parentNode.removeChild(e.firstChild)
                }
                ))
            }
            function _e(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
                  , r = document.createElement("a");
                return r.className = "btn btn-border btn-border--blue custom-menu--button " + n,
                t && (r.classList.add("custom-menu--button-disabled"),
                r.classList.add("disabled")),
                e.hasOwnProperty("id") && (r.dataset.id = e.id),
                r.href = e.href,
                r.innerText = e.title,
                r
            }
            function xe(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return ke(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return ke(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return ke(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function ke(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function Ee(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a)
                      , u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            ue.addEventListener("click", (function(e) {
                fe(!0)
            }
            )),
            ce.addEventListener("click", function() {
                var e = K(regeneratorRuntime.mark((function e(t) {
                    var r;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t.preventDefault(),
                                ee || (0,
                                h.Du)()) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 4,
                                n.e(875).then(n.t.bind(n, 4415, 23));
                            case 4:
                                r = e.sent,
                                H = r.default;
                            case 6:
                                E.Z.setClasses(["menu-open", "custom"]);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()),
            re.addEventListener("click", function() {
                var e = K(regeneratorRuntime.mark((function e(t) {
                    var n, r, o;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t.preventDefault(),
                                de) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (le) {
                                    e.next = 6;
                                    break
                                }
                                return fe(!1),
                                e.abrupt("return");
                            case 6:
                                return n = document.querySelectorAll(".custom-menu--button__holder .custom-menu--button:not(.custom-menu--button-disabled)"),
                                r = V(n).map((function(e) {
                                    var t = e.dataset
                                      , n = e.innerText;
                                    return {
                                        id: t.id,
                                        title: n,
                                        href: t.href
                                    }
                                }
                                )),
                                o = {
                                    selected: r,
                                    fixed: window.__UDN__.initialMenu.fixed,
                                    version: window.__UDN__.initialMenu.version
                                },
                                localStorage.setItem(y.oY, JSON.stringify(o)),
                                e.next = 12,
                                ve(o);
                            case 12:
                                fe(!1),
                                re.classList.add("disabled");
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()),
            oe.addEventListener("click", (function(e) {
                e.preventDefault(),
                re.classList.remove("disabled"),
                le = !1,
                localStorage.removeItem(y.oY),
                ge(),
                ye(),
                pe()
            }
            ));
            var Oe = document.querySelectorAll(".menu-toggler")
              , Se = document.querySelectorAll(".overlay-menu .close-btn")
              , je = document.querySelectorAll(".input-holder input")
              , Le = document.querySelectorAll(".btn-search");
            (0,
            h.RH)();
            if (window.innerWidth > y.sO.desktop) {
                var Pe = function() {
                    var e, t = (e = regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    n.e(679).then(n.bind(n, 2388));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )),
                    function() {
                        var t = this
                          , n = arguments;
                        return new Promise((function(r, o) {
                            var i = e.apply(t, n);
                            function a(e) {
                                Ee(i, r, o, a, c, "next", e)
                            }
                            function c(e) {
                                Ee(i, r, o, a, c, "throw", e)
                            }
                            a(void 0)
                        }
                        ))
                    }
                    );
                    return function() {
                        return t.apply(this, arguments)
                    }
                }();
                Pe()
            }
            function Ae(e) {
                var t = e.target
                  , n = "input" === t.tagName.toLowerCase() ? t.value : t.closest(".input-holder").querySelector("input").value;
                "" !== n.trim() && (window.location.href = y.ez + n)
            }
            xe(Oe).forEach((function(e) {
                e.addEventListener("click", (function(t) {
                    t.preventDefault();
                    var n = "true" === e.getAttribute("aria-pressed");
                    e.setAttribute("aria-pressed", !n),
                    E.Z.setClasses(["menu-open", "full"]),
                    document.querySelector(".overlay-menu .input-holder input").focus()
                }
                ))
            }
            )),
            xe(Se).forEach((function(e) {
                e.addEventListener("click", (function(e) {
                    e.preventDefault(),
                    xe(Oe).forEach((function(e) {
                        return e.setAttribute("aria-pressed", "false")
                    }
                    )),
                    E.Z.removeAllClasses()
                }
                ))
            }
            )),
            xe(Le).forEach((function(e) {
                e.addEventListener("click", Ae)
            }
            )),
            xe(je).forEach((function(e) {
                e.addEventListener("keyup", (function(e) {
                    13 === e.keyCode && Ae(e)
                }
                ))
            }
            )),
            window.addEventListener("scroll", (function(e) {
                (0,
                h.EU)() >= window.__UDN__.menuTop ? (document.body.classList.add("menu-stick"),
                document.getElementById("gotop").classList.add("show")) : (document.body.classList.remove("menu-stick"),
                document.getElementById("gotop").classList.remove("show"))
            }
            ));
            var Ce = n(3903);
            function Ne(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function Re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ne(Object(n), !0).forEach((function(t) {
                        Te(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function Te(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function Ie(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a)
                      , u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            function De(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            Ie(i, r, o, a, c, "next", e)
                        }
                        function c(e) {
                            Ie(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            function qe(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return Me(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return Me(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Me(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Me(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var Ze = document.querySelectorAll(".btn-more--news")
              , Be = {};
            function Ue(e, t, n) {
                return Ye.apply(this, arguments)
            }
            function Ye() {
                return (Ye = De(regeneratorRuntime.mark((function e(t, n, r) {
                    var o, i, a, c, u, s;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                (0,
                                x.wY)(_.N.more, Re({
                                    page: t,
                                    channelId: h.ig.getter("name", "channel_id"),
                                    type: n
                                }, r));
                            case 2:
                                return o = e.sent,
                                i = o.lists,
                                a = o.end,
                                c = o.page,
                                u = o.state,
                                s = o.message,
                                e.abrupt("return", {
                                    lists: i,
                                    end: a,
                                    page: c,
                                    state: u,
                                    message: s
                                });
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function We(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return He(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return He(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return He(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function He(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function Je(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a)
                      , u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            function ze(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            Je(i, r, o, a, c, "next", e)
                        }
                        function c(e) {
                            Je(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            function Fe() {
                return Fe = ze(regeneratorRuntime.mark((function e() {
                    var t, n, r;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return r = function(e) {
                                    var t = e.id
                                      , n = e.title
                                      , r = e.totalVote
                                      , o = e.options
                                      , i = e.img
                                      , a = document.querySelector(".udn-vote__title")
                                      , c = document.querySelector(".udn-vote__total span")
                                      , u = document.querySelector(".vote-img")
                                      , s = document.querySelector(".udn-vote__link")
                                      , l = document.querySelectorAll(".udn-vote__list");
                                    a.textContent = n,
                                    c.textContent = r,
                                    u.style.backgroundImage = 'url("'.concat(i, '")'),
                                    u.classList.add("vote-img--filled"),
                                    s.href = y.DB + "?act_code=" + t;
                                    var d = o.sort((function(e, t) {
                                        return t.count - e.count
                                    }
                                    ));
                                    We(l).forEach((function(e, t) {
                                        var n = d[t];
                                        if (void 0 === n)
                                            return e.style.visibility = "hidden",
                                            void (e.style.opacity = 0);
                                        var o = n.count
                                          , i = 0 !== r ? Math.round(100 * o / r) : 0
                                          , a = "\n        <h5>".concat(n.title, '</h5>\n        <span class="udn-vote__count">\n          <span class="udn-vote__percent text-orange">').concat(i, '%</span>\n          <span class="udn-vote__quantity">').concat(o, '</span>\n        </span>\n        <span class="udn-vote__progress" role="progressbar" style="width: ').concat(i, '%;" aria-valuenow="').concat(i, '" aria-valuemin="0"\n        aria-valuemax="100"></span>\n      ');
                                        e.innerHTML = a
                                    }
                                    ))
                                }
                                ,
                                t = document.querySelector(".udn-vote"),
                                t.dataset.id,
                                e.prev = 3,
                                e.next = 6,
                                (0,
                                x.wY)("".concat(_.N.voteFunc), {
                                    channelId: h.ig.getter("name", "channel_id")
                                });
                            case 6:
                                (n = e.sent).state ? r(n) : c.Z.showNotification({
                                    title: "錯誤",
                                    message: n.message
                                }),
                                e.next = 14;
                                break;
                            case 10:
                                e.prev = 10,
                                e.t0 = e.catch(3),
                                c.Z.showNotification({
                                    title: "錯誤",
                                    message: "投票模組不明錯誤"
                                });
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[3, 10]])
                }
                ))),
                Fe.apply(this, arguments)
            }
            qe(Ze).forEach((function(e, t) {
                var n = e.dataset.type + "-" + t
                  , r = (0,
                Ce.ZP)(e, Ce.JW);
                n && (Be[n] = []),
                e.addEventListener("click", function() {
                    var n = De(regeneratorRuntime.mark((function n(o) {
                        var i, a, u, s, l, d, f, p, m, v, h, y, g;
                        return regeneratorRuntime.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (i = o.target.dataset,
                                    a = i.page,
                                    u = i.query,
                                    s = i.type,
                                    l = s + "-" + t,
                                    d = JSON.parse(u.replace(/'/g, '"')),
                                    a && l) {
                                        n.next = 5;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 5:
                                    if (!r.isLoading && !r.isEnd) {
                                        n.next = 7;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 7:
                                    return r.dispatchAction(Ce.br),
                                    n.prev = 8,
                                    n.next = 11,
                                    Ue(parseInt(a) + 1, s, d);
                                case 11:
                                    if (f = n.sent,
                                    p = f.lists,
                                    m = f.end,
                                    v = f.page,
                                    h = f.state,
                                    y = f.message,
                                    h) {
                                        n.next = 21;
                                        break
                                    }
                                    return r.dispatchAction(Ce.pn),
                                    c.Z.showNotification({
                                        title: "錯誤",
                                        message: y
                                    }),
                                    n.abrupt("return");
                                case 21:
                                    return g = e.closest(".more-news").querySelector(".story-list__holder--append"),
                                    Be[l] = [].concat(qe(Be[l]), qe(p)),
                                    n.next = 25,
                                    (0,
                                    k._f)(Be[l], g);
                                case 25:
                                    if ((0,
                                    n.sent)(),
                                    o.target.dataset.page = parseInt(v) || parseInt(a) + 1,
                                    !m) {
                                        n.next = 31;
                                        break
                                    }
                                    return r.dispatchAction(Ce._H),
                                    n.abrupt("return");
                                case 31:
                                    r.dispatchAction(Ce.JW),
                                    n.next = 39;
                                    break;
                                case 34:
                                    n.prev = 34,
                                    n.t0 = n.catch(8),
                                    r.dispatchAction(Ce.pn),
                                    c.Z.showNotification({
                                        title: "錯誤",
                                        message: "看更多模組錯誤"
                                    });
                                case 39:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, null, [[8, 34]])
                    }
                    )));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }())
            }
            ));
            var $e = document.querySelector(".udn-calendar__days");
            function Xe(e) {
                return ("0" + e).slice(-2)
            }
            var Ve = n(8461);
            function Ge(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a)
                      , u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            function Qe(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            Ge(i, r, o, a, c, "next", e)
                        }
                        function c(e) {
                            Ge(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            var Ke, et, tt, nt, rt, ot = document.querySelector(".feature-guess"), it = document.querySelector(".context-box__astrology"), at = document.querySelector(".cate-list__subheader"), ct = document.querySelector(".udn-vote"), ut = document.querySelector(".udn-calendar");
            function st() {
                return (st = Qe(regeneratorRuntime.mark((function e() {
                    var t, r, o;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                n.e(678).then(n.bind(n, 9205));
                            case 2:
                                t = e.sent,
                                r = t.default,
                                o = t.initHourSelect,
                                new r(document.getElementById("year"),document.getElementById("month"),document.getElementById("day"),1980,1,1),
                                o(document.getElementById("hour"), 1, 0),
                                document.getElementById("astrology").addEventListener("submit", (function(e) {
                                    var t = document.getElementById("name").value;
                                    return "" === t.trim() ? (Ve.Z.alert({
                                        title: "請輸入姓名"
                                    }),
                                    e.preventDefault(),
                                    !1) : -1 !== t.search(/\d/) ? (Ve.Z.alert({
                                        title: "姓名不可填寫數字"
                                    }),
                                    e.preventDefault(),
                                    !1) : void 0
                                }
                                ));
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function lt() {
                return (lt = Qe(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                n.e(796).then(n.bind(n, 4853));
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function dt() {
                return (dt = Qe(regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                Promise.all([n.e(994), n.e(242)]).then(n.bind(n, 9315));
                            case 2:
                                t = e.sent,
                                t.vueSlide(".udn-slider", __UDN__.newsLists);
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            __UDN__.newsLists && function() {
                dt.apply(this, arguments)
            }(),
            ot && function() {
                lt.apply(this, arguments)
            }(),
            it && function() {
                st.apply(this, arguments)
            }(),
            at && window.innerWidth > y.sO.tablet && (Ke = at,
            nt = !1,
            rt = "undefined" != typeof window && "ontouchstart"in window,
            Ke.addEventListener(rt ? "touchstart" : "mousedown", (function(e) {
                var t = rt ? e.changedTouches[0].pageX : e.pageX;
                nt = !0,
                Ke.classList.add("active"),
                et = t - Ke.offsetLeft,
                tt = Ke.scrollLeft
            }
            )),
            Ke.addEventListener("mouseleave", (function() {
                nt = !1,
                Ke.classList.remove("active")
            }
            )),
            Ke.addEventListener(rt ? "touchend" : "mouseup", (function() {
                nt = !1,
                Ke.classList.remove("active")
            }
            )),
            Ke.addEventListener(rt ? "touchmove" : "mousemove", (function(e) {
                if (nt) {
                    e.preventDefault();
                    var t = 3 * ((rt ? e.changedTouches[0].pageX : e.pageX) - Ke.offsetLeft - et);
                    Ke.scrollLeft = tt - t
                }
            }
            ))),
            ct && function() {
                Fe.apply(this, arguments)
            }(),
            ut && function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.dayToActive
                  , n = void 0 === t ? null : t
                  , r = e.monthToActive
                  , o = void 0 === r ? null : r
                  , i = e.yearToActive
                  , a = void 0 === i ? null : i
                  , c = e.includedToday
                  , u = void 0 !== c && c
                  , s = n ? new Date("".concat(a, "-").concat(o, "-").concat(n)) : new Date
                  , l = s.getDate()
                  , d = s.getMonth()
                  , f = s.getFullYear();
                $e.innerHTML = "";
                for (var p = 30, m = [], v = u ? 0 : 1; v <= p; v++) {
                    var h = l - v
                      , g = p - v;
                    if (h <= 0) {
                        for (var b = 0; b <= g; b++) {
                            var w = new Date(f,d,0).getDate() - b;
                            m.push({
                                day: w,
                                month: 0 === d ? 12 : d,
                                year: 0 === d ? f - 1 : f
                            })
                        }
                        break
                    }
                    m.push({
                        day: h,
                        month: d + 1,
                        year: f
                    })
                }
                for (var _ = m[m.length - 1].day, x = m[m.length - 1].month, k = m[m.length - 1].year, E = new Date("".concat(k, "-").concat(x, "-").concat(_)).getDay(), O = 1; O <= E; O++)
                    m.push({
                        day: "",
                        month: d,
                        year: 0 === d ? f - 1 : f
                    });
                for (var S = 1; S <= m.length; S++) {
                    var j = document.createElement("li")
                      , L = document.createTextNode(m[S - 1].day);
                    if (n ? n === m[S - 1].day && o === m[S - 1].month && j.classList.add("active") : 1 === S && j.classList.add("active"),
                    d === m[S - 1].month && j.classList.add("last-month"),
                    "" !== m[S - 1].day) {
                        j.setAttribute("data-day", Xe(m[S - 1].day)),
                        j.setAttribute("data-month", Xe(m[S - 1].month)),
                        j.setAttribute("data-year", m[S - 1].year);
                        var P = document.createElement("a")
                          , A = "".concat(m[S - 1].year).concat(Xe(m[S - 1].month)).concat(Xe(m[S - 1].day));
                        P.href = "".concat(y.iI, "?date=").concat(A),
                        P.title = A,
                        P.appendChild(L),
                        j.appendChild(P)
                    }
                    $e.prepend(j)
                }
            }()
        },
        1704: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return o
                }
            });
            var r = n(3671)
              , o = {};
            ["subMenu", "idlePage", "feature", "more", "temperature", "weatherForecast", "follow", "collection", "likeNews", "discuss", "vote", "voteActCode", "paywall_article", "getMbrAccount", "pv"].forEach((function(e) {
                Object.defineProperty(o, e, {
                    get: function() {
                        return "".concat(r.vU, "/").concat(e.toLowerCase())
                    }
                })
            }
            )),
            o.geocode = "https://maps.googleapis.com/maps/api/geocode/json",
            o.geoCodeGov = "https://api.nlsc.gov.tw/other/TownVillagePointQuery",
            o.voteFunc = "/funcap/vote/voteIndexJson.jsp",
            o.tagEvent = "/eventCollect/clickEvent",
            o.votePost = "/funcap/vote/votingJson.jsp",
            o.voteMore = "/funcap/vote/voteMoreNewsJson.jsp",
            o.discussFunc = "/funcap/discuss/disListJson.jsp",
            o.discussPost = "/funcap/discuss/disAddJson.jsp",
            o.myPage = "/mypage",
            o.gamelive = "/uapi/gamelive",
            o.dddRecommendation = "https://rec-dot-ddd-model-gap.appspot.com/recommendation",
            o.dddImpression = "https://rec-logs-dot-ddd-model-gap.appspot.com/logs/impression",
            o.dddClick = "https://rec-logs-dot-ddd-model-gap.appspot.com/logs/click",
            o.common = "/common2",
            o.weatherForecastLab = "/weather/api/weatherforecast",
            o.temperatureLab = "/weather/api/temperature"
        },
        3671: function(e, t, n) {
            "use strict";
            n.d(t, {
                oY: function() {
                    return o
                },
                c8: function() {
                    return i
                },
                iI: function() {
                    return a
                },
                DB: function() {
                    return c
                },
                BY: function() {
                    return u
                },
                ez: function() {
                    return s
                },
                vU: function() {
                    return l
                },
                Yu: function() {
                    return d
                },
                Ag: function() {
                    return f
                },
                zq: function() {
                    return p
                },
                E9: function() {
                    return m
                },
                gO: function() {
                    return v
                },
                xn: function() {
                    return h
                },
                f6: function() {
                    return y
                },
                DS: function() {
                    return g
                },
                JW: function() {
                    return b
                },
                sO: function() {
                    return w
                }
            });
            var r = "udn:"
              , o = "".concat(r, "menu")
              , i = ("".concat(r, "text"),
            "".concat(r, "recommendation"))
              , a = ("".concat(r, "location"),
            "/news/archive")
              , c = "/func/vote/"
              , u = "/mypage/mynewsCustomize"
              , s = "/search/word/2/"
              , l = "/api"
              , d = "v5.0"
              , f = 120882
              , p = function(e) {
                return parseInt(e) === f || 8799 === parseInt(e)
            }
              , m = {
                member: "udnland",
                avatar: "udnavatar",
                login: "udngold",
                nickname: "nickname",
                um2: "um2",
                oldMember: "udnmember"
            }
              , v = "https://member.udn.com/member/center.jsp?hold=y"
              , h = 15
              , y = 24
              , g = !0
              , b = {
                wait: 3e5,
                state: !0,
                interactionInterval: 15e3
            }
              , w = {
                initial: 1297,
                desktop: 1023,
                tablet: 767
            }
        },
        1302: function(e, t, n) {
            "use strict";
            n.d(t, {
                bg: function() {
                    return d
                },
                Ce: function() {
                    return f
                },
                ZX: function() {
                    return p
                },
                YZ: function() {
                    return v
                }
            });
            var r = n(7921)
              , o = n.n(r)
              , i = n(9495)
              , a = n(1055)
              , c = n(5931)
              , u = n(1732)
              , s = (n(1785),
            n(8461))
              , l = n(3671);
            n(1704);
            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "login"
                  , t = (0,
                c.ej)(l.E9[e]);
                return "undefined" !== t && (t || !1)
            }
            function f() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "login";
                return !!d(e) || (s.Z.confirm({
                    title: "會員限定",
                    message: "請登入會員～"
                }, (function() {
                    window.location.href = (0,
                    c.gp)()
                }
                )),
                !1)
            }
            function p() {
                return o().get(l.E9.member)
            }
            function m() {
                var e, t = o().get(l.E9.avatar) || "https://g.udn.com.tw/community/img/user_all/myimage/noface.gif", n = document.querySelector(".member-button"), r = document.querySelector(".site-product__link--member");
                d() ? (n.querySelector("i").style.backgroundImage = "url(".concat(t, ")"),
                n.classList.add("member-button--islogin"),
                n.setAttribute("title", "會員資料"),
                n.addEventListener("click", (function() {
                    if (n.setAttribute("aria-pressed", ("true" !== n.getAttribute("aria-pressed")).toString()),
                    document.body.classList.contains("dropdown--open"))
                        return document.body.classList.remove("dropdown--open"),
                        void e.destroy();
                    document.body.classList.add("dropdown--open"),
                    function(e) {
                        var t = document.getElementById("memberDropdown");
                        (0,
                        i.oo)(e, t, {
                            placement: "bottom",
                            middleware: [(0,
                            a.cv)(10)]
                        }).then((function(e) {
                            var n = e.x
                              , r = e.y;
                            Object.assign(t.style, {
                                left: "".concat(n, "px"),
                                top: "".concat(r, "px")
                            })
                        }
                        ))
                    }(n),
                    (e = (0,
                    u.Z)({
                        parentClassName: "member-button",
                        callback: function() {
                            document.body.classList.remove("dropdown--open")
                        }
                    })).register()
                }
                ))) : (n.classList.remove("member-button--islogin"),
                n.setAttribute("title", "登入"),
                o().remove(l.E9.member),
                o().remove(l.E9.avatar),
                o().remove(l.E9.login),
                o().remove(l.E9.oldMember),
                o().remove(l.E9.nickname),
                n.addEventListener("click", (function() {
                    window.location.href = (0,
                    c.gp)()
                }
                ))),
                r && r.setAttribute("href", d() ? l.gO : "https://member.udn.com")
            }
            function v() {
                var e = document.querySelector(".member-button");
                m(),
                e.classList.remove("member-button--isloading")
            }
            window.Cookies = o()
        },
        3716: function() {
            "onLine"in navigator && (navigator.onLine || document.body.classList.add("offline-mode"),
            window.addEventListener("offline", (function(e) {
                document.body.classList.add("offline-mode")
            }
            )),
            window.addEventListener("online", (function(e) {
                document.body.classList.remove("offline-mode")
            }
            )))
        },
        5845: function() {
            function e(e, n) {
                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, n) {
                        if (!e)
                            return;
                        if ("string" == typeof e)
                            return t(e, n);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r)
                            return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                            return t(e, n)
                    }(e)) || n && e && "number" == typeof e.length) {
                        r && (e = r);
                        var o = 0
                          , i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return o >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[o++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, c = !0, u = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return c = e.done,
                        e
                    },
                    e: function(e) {
                        u = !0,
                        a = e
                    },
                    f: function() {
                        try {
                            c || null == r.return || r.return()
                        } finally {
                            if (u)
                                throw a
                        }
                    }
                }
            }
            function t(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            "serviceWorker"in navigator && navigator.serviceWorker.getRegistrations().then((function(t) {
                var n, r = e(t);
                try {
                    for (r.s(); !(n = r.n()).done; )
                        n.value
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
            }
            ))
        },
        3016: function(e, t, n) {
            "use strict";
            n.d(t, {
                zh: function() {
                    return l
                }
            });
            var r = n(1704)
              , o = n(5931)
              , i = n(1785)
              , a = n(8461)
              , c = n(6871);
            function u(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a)
                      , u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            function s(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            u(i, r, o, a, c, "next", e)
                        }
                        function c(e) {
                            u(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            function l(e, t) {
                a.Z.confirm({
                    title: "警告",
                    message: "確認移除收藏？"
                }, s(regeneratorRuntime.mark((function n() {
                    var r;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                d(t)();
                            case 2:
                                n.sent && (r = e.target.closest(".story-list__news"),
                                (0,
                                o.Wl)(r));
                            case 5:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))))
            }
            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.ig.getter("property", "og:url");
                return s(regeneratorRuntime.mark((function t() {
                    var n, o;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.prev = 0,
                                t.next = 3,
                                (0,
                                i.wY)(r.N.myPage + "/sdelete", {
                                    u: e
                                }, {});
                            case 3:
                                if (n = t.sent,
                                o = n.error,
                                "true" !== n.del) {
                                    t.next = 9;
                                    break
                                }
                                return c.Z.showNotification({
                                    title: "完成",
                                    message: "已移除收藏",
                                    nType: "success"
                                }),
                                t.abrupt("return", !0);
                            case 9:
                                return c.Z.showNotification({
                                    title: "錯誤",
                                    message: o
                                }),
                                t.abrupt("return", !1);
                            case 13:
                                return t.prev = 13,
                                t.t0 = t.catch(0),
                                t.abrupt("return", !1);
                            case 17:
                                return t.abrupt("return", !1);
                            case 18:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[0, 13]])
                }
                )))
            }
        },
        9032: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return y
                },
                a: function() {
                    return b
                }
            });
            var r, o, i = n(6562), a = n(1704), c = n(3671), u = n(1302), s = n(1785), l = n(5931), d = n(1732), f = n(1437);
            function p(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a)
                      , u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            function m(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            p(i, r, o, a, c, "next", e)
                        }
                        function c(e) {
                            p(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            function v() {
                return h.apply(this, arguments)
            }
            function h() {
                return (h = m(regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 3,
                                n.e(122).then(n.t.bind(n, 850, 23));
                            case 3:
                                t = e.sent,
                                r = t.default;
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function y(e) {
                return g.apply(this, arguments)
            }
            function g() {
                return (g = m(regeneratorRuntime.mark((function e(t) {
                    var n, o, i, u;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = (0,
                                l.rg)(),
                                e.next = 3,
                                v();
                            case 3:
                                if (o = localStorage.getItem(c.c8)) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return");
                            case 6:
                                return i = r.parse(o),
                                u = i.rule,
                                e.next = 9,
                                (0,
                                s.D1)(a.N.dddClick, {
                                    ga_id: (0,
                                    l.nE)(),
                                    pid: t,
                                    timestamp: (new Date).getTime(),
                                    url: l.ig.getter("property", "og:url"),
                                    screen_size: "".concat(n.width, "x").concat(n.height),
                                    rule: u
                                }, "POST", {
                                    credentials: "include"
                                });
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function b(e) {
                return w.apply(this, arguments)
            }
            function w() {
                return (w = m(regeneratorRuntime.mark((function e(t) {
                    var n, a, c, u, s, l, p, m, h;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                v();
                            case 2:
                                return n = t.target,
                                a = r.parse(n.dataset.settings),
                                c = a.subscriptionId,
                                u = a.subscriptionType,
                                s = a.subscriptionSite,
                                l = "false",
                                e.next = 10,
                                f.Z.start();
                            case 10:
                                if (e.sent) {
                                    e.next = 13;
                                    break
                                }
                                return e.abrupt("return");
                            case 13:
                                if (o && o.destroy(),
                                o = (0,
                                d.Z)({
                                    parentClassName: "feature-guess__list",
                                    callback: function() {
                                        document.querySelector(".feature-guess__dialog") && document.querySelector(".feature-guess__dialog").remove()
                                    }
                                }),
                                !c) {
                                    e.next = 21;
                                    break
                                }
                                return e.next = 18,
                                (0,
                                i.tw)({
                                    site: s,
                                    id: c,
                                    type: u
                                });
                            case 18:
                                p = e.sent,
                                m = p.me,
                                l = m;
                            case 21:
                                h = _({
                                    title: a.subscriptionText,
                                    id: c,
                                    site: s,
                                    type: u,
                                    isFollow: l,
                                    lists: a.interest,
                                    root: o
                                }),
                                n.parentNode.parentNode.appendChild(h),
                                o.register(),
                                h.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center"
                                });
                            case 25:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function _(e) {
                var t = e.title
                  , n = e.id
                  , r = e.lists
                  , o = e.type
                  , a = e.site
                  , u = e.isFollow
                  , s = e.root
                  , l = document.createElement("div");
                l.className = "feature-guess__dialog show";
                var d = document.createElement("h4");
                d.className = "follow-tag text-orange";
                var f = document.createElement("span");
                if (f.className = "follow-tag__title",
                f.textContent = void 0 !== t ? t : "個人化",
                d.appendChild(f),
                void 0 !== t) {
                    var p = document.createElement("span");
                    p.className = "btn btn-follow",
                    "true" === u && p.classList.add("subscribed"),
                    p.tabIndex = -1,
                    p.setAttribute("role", "button"),
                    p.setAttribute("aria-label", "follow"),
                    p.setAttribute("data-id", n),
                    p.setAttribute("data-type", o),
                    p.setAttribute("data-site", a),
                    p.setAttribute("title", "".concat(t)),
                    p.addEventListener("click", i.Cv),
                    p.textContent = "追蹤",
                    d.appendChild(p)
                }
                l.appendChild(d);
                var m = document.createElement("div");
                m.className = "interest-lists",
                r.forEach((function(e) {
                    m.appendChild(function(e, t) {
                        var n = e.title
                          , r = e.type
                          , o = e.id
                          , i = e.site
                          , a = document.createElement("span");
                        a.className = "interest",
                        a.dataset.id = o,
                        a.dataset.type = r,
                        a.innerHTML = '對 <span class="text-black"> '.concat(n, " </span> 沒興趣");
                        var c = document.createElement("i");
                        return c.className = "i-hide",
                        a.prepend(c),
                        a.addEventListener("click", x({
                            title: n,
                            type: r,
                            id: o,
                            site: i
                        }, t)),
                        a
                    }(e, n))
                }
                ));
                var v = document.createElement("div");
                v.className = "dialog-actions";
                var h = document.createElement("a");
                h.className = "btn",
                h.href = c.BY,
                h.textContent = "喜好管理";
                var y = document.createElement("span");
                return y.className = "btn interest-close",
                y.setAttribute("role", "button"),
                y.setAttribute("aria-label", "close dialog"),
                y.textContent = "關閉",
                y.addEventListener("click", (function(e) {
                    s.destroy()
                }
                )),
                v.appendChild(h),
                v.appendChild(y),
                l.appendChild(m),
                l.appendChild(v),
                l
            }
            function x(e, t) {
                var n = e.title
                  , o = e.type
                  , i = e.id
                  , c = e.site;
                return function() {
                    var e = m(regeneratorRuntime.mark((function e(l) {
                        var d, f, p = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ((0,
                                    u.Ce)()) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return d = l.target.parentNode.closest(".feature-guess__list").querySelector(".btn-setting"),
                                    this.classList.add("hide"),
                                    (f = r.parse(d.dataset.settings)).subscriptionId === t && (f.interest = f.interest.filter((function(e) {
                                        return e.title !== n
                                    }
                                    )),
                                    d.dataset.settings = r.stringify(f)),
                                    e.prev = 6,
                                    e.next = 9,
                                    (0,
                                    s.wY)(a.N.myPage + "/myact", {
                                        i: i,
                                        t: o,
                                        s: c,
                                        a: "dislike"
                                    }, {});
                                case 9:
                                    e.sent && (this.removeEventListener("click", x),
                                    setTimeout((function() {
                                        p.parentNode.removeChild(p)
                                    }
                                    ), 1e3)),
                                    e.next = 15;
                                    break;
                                case 13:
                                    e.prev = 13,
                                    e.t0 = e.catch(6);
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[6, 13]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }
        },
        6562: function(e, t, n) {
            "use strict";
            n.d(t, {
                Cv: function() {
                    return p
                },
                GO: function() {
                    return k
                },
                tw: function() {
                    return b
                }
            });
            var r = n(1704)
              , o = n(1437)
              , i = n(1302)
              , a = n(5931)
              , c = n(1785)
              , u = n(8461)
              , s = n(6871);
            function l(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a)
                      , u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            function d(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            l(i, r, o, a, c, "next", e)
                        }
                        function c(e) {
                            l(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            var f = !1;
            function p(e) {
                return m.apply(this, arguments)
            }
            function m() {
                return (m = d(regeneratorRuntime.mark((function e(t) {
                    var n, s, l, d, p, m, y, g, b, w;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t.preventDefault(),
                                e.next = 3,
                                o.Z.start();
                            case 3:
                                if (e.sent) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return");
                            case 7:
                                if (!f) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("return");
                            case 9:
                                if ((0,
                                i.Ce)()) {
                                    e.next = 11;
                                    break
                                }
                                return e.abrupt("return");
                            case 11:
                                if (n = t.target.dataset.id,
                                s = t.target.dataset.type,
                                l = t.target.title,
                                d = t.target.dataset.site,
                                p = t.target.classList.contains("subscribed"),
                                n && s) {
                                    e.next = 18;
                                    break
                                }
                                return e.abrupt("return");
                            case 18:
                                if (f = !0,
                                !(0,
                                a.rs)(t.target, "mynews-follow")) {
                                    e.next = 22;
                                    break
                                }
                                return _({
                                    e: t,
                                    id: n,
                                    type: s,
                                    tagText: l,
                                    site: d
                                }),
                                e.abrupt("return");
                            case 22:
                                return m = p ? "/mdelete" : "/fm",
                                e.prev = 23,
                                e.next = 26,
                                (0,
                                c.wY)(r.N.myPage + m, {
                                    me: n,
                                    type: s,
                                    s: d
                                }, {});
                            case 26:
                                if (y = e.sent,
                                g = y.del,
                                b = y.save,
                                w = y.error,
                                "true" === g || "true" === b) {
                                    e.next = 34;
                                    break
                                }
                                return u.Z.alert({
                                    title: "錯誤",
                                    message: w
                                }),
                                f = !1,
                                e.abrupt("return");
                            case 34:
                                p ? h({
                                    e: t,
                                    tagText: l
                                }) : v({
                                    e: t,
                                    tagText: l
                                }),
                                e.next = 40;
                                break;
                            case 37:
                                e.prev = 37,
                                e.t0 = e.catch(23),
                                u.Z.alert({
                                    title: "錯誤",
                                    message: e.t0
                                });
                            case 40:
                                f = !1;
                            case 41:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[23, 37]])
                }
                )))).apply(this, arguments)
            }
            function v(e) {
                var t = e.e
                  , n = e.tagText;
                t.target.classList.add("subscribed"),
                s.Z.showNotification({
                    title: "完成",
                    message: "已追蹤 ".concat(n, '，未來可至<a href="https://udn.com/mypage/mynewsCustomize">我的新聞</a>閱讀'),
                    nType: "success"
                })
            }
            function h(e) {
                var t = e.e
                  , n = e.tagText;
                t.target.classList.remove("subscribed"),
                s.Z.showNotification({
                    title: "完成",
                    message: "已取消追蹤 ".concat(n),
                    nType: "success"
                })
            }
            function y(e) {
                return g.apply(this, arguments)
            }
            function g() {
                return (g = d(regeneratorRuntime.mark((function e(t) {
                    var n;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                (0,
                                c.wY)(r.N.myPage + "/mes", {
                                    ms: encodeURIComponent(JSON.stringify({
                                        data: t
                                    }))
                                }, {
                                    credentials: "include"
                                });
                            case 3:
                                return n = e.sent,
                                e.abrupt("return", n);
                            case 7:
                                return e.prev = 7,
                                e.t0 = e.catch(0),
                                e.abrupt("return", {
                                    error: e.t0,
                                    result: ""
                                });
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 7]])
                }
                )))).apply(this, arguments)
            }
            function b(e) {
                return w.apply(this, arguments)
            }
            function w() {
                return (w = d(regeneratorRuntime.mark((function e(t) {
                    var n, o, i, a;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.site,
                                o = t.id,
                                i = t.type,
                                e.prev = 1,
                                e.next = 4,
                                (0,
                                c.wY)(r.N.myPage + "/me", {
                                    s: n,
                                    me: o,
                                    type: i
                                }, {
                                    credentials: "include"
                                });
                            case 4:
                                return a = e.sent,
                                e.abrupt("return", a);
                            case 8:
                                return e.prev = 8,
                                e.t0 = e.catch(1),
                                e.abrupt("return", {
                                    error: e.t0,
                                    me: "false"
                                });
                            case 11:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 8]])
                }
                )))).apply(this, arguments)
            }
            function _(e) {
                return x.apply(this, arguments)
            }
            function x() {
                return (x = d(regeneratorRuntime.mark((function e(t) {
                    var n, o, i, a, s, l, d, m, y, g, b, w, _, x, k;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (n = t.e,
                                o = t.id,
                                i = t.tagText,
                                a = t.type,
                                s = t.site,
                                l = n.target.classList.contains("subscribed"),
                                d = document.querySelector('.btn-follow[data-id="'.concat(o, '"]')),
                                m = l ? "/mdelete" : "/fm",
                                a) {
                                    e.next = 8;
                                    break
                                }
                                return f = !1,
                                e.abrupt("return");
                            case 8:
                                return e.prev = 8,
                                e.next = 11,
                                (0,
                                c.wY)(r.N.myPage + m, {
                                    me: o,
                                    type: a,
                                    s: s
                                }, {});
                            case 11:
                                if (y = e.sent,
                                g = y.del,
                                b = y.save,
                                w = y.error,
                                "true" === g || "true" === b) {
                                    e.next = 19;
                                    break
                                }
                                return u.Z.alert({
                                    title: "錯誤",
                                    message: w
                                }),
                                f = !1,
                                e.abrupt("return");
                            case 19:
                                "channel" === a || "class" === a || "cate" === a ? l ? (h({
                                    e: n,
                                    tagText: i
                                }),
                                n.target.closest(".mynews-follow__channel").classList.remove("subscribed")) : (v({
                                    e: n,
                                    tagText: i
                                }),
                                n.target.closest(".mynews-follow__channel").classList.add("subscribed")) : l ? (h({
                                    e: n,
                                    tagText: i
                                }),
                                d.removeEventListener("click", p),
                                d.closest(".mynews-follow__content").remove()) : (v({
                                    e: n,
                                    tagText: i
                                }),
                                _ = d.closest(".mynews-follow__content").cloneNode(!0),
                                x = _.querySelector(".btn-follow"),
                                k = document.querySelector('.mynews-follow__wrapper[data-holder="content"]'),
                                x.classList.add("subscribed"),
                                x.addEventListener("click", p),
                                k.appendChild(_),
                                d.closest(".mynews-follow__content").remove()),
                                e.next = 25;
                                break;
                            case 22:
                                e.prev = 22,
                                e.t0 = e.catch(8),
                                u.Z.alert({
                                    title: "錯誤",
                                    message: e.t0
                                });
                            case 25:
                                f = !1;
                            case 26:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[8, 22]])
                }
                )))).apply(this, arguments)
            }
            function k(e) {
                return E.apply(this, arguments)
            }
            function E() {
                return (E = d(regeneratorRuntime.mark((function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                y(t);
                            case 2:
                                n = e.sent,
                                (r = n.result) && r.forEach((function(e) {
                                    var t = e.me
                                      , n = e.s
                                      , r = e.type
                                      , o = document.querySelector('.btn-follow[data-id="'.concat(t, '"][data-site="').concat(n, '"][data-type="').concat(r, '"]'));
                                    o && o.classList.add("subscribed")
                                }
                                ));
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
        },
        8461: function(e, t, n) {
            "use strict";
            var r = n(4031);
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var i = function() {
                function e() {
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    e.instance ? e.instance : (e.instance = this,
                    this)
                }
                var t, n, i;
                return t = e,
                (n = [{
                    key: "createBox",
                    value: function(e, t) {
                        var n = e.title
                          , o = e.message
                          , i = e.type
                          , a = document.createElement("section");
                        a.className = "udn-box";
                        var c = document.createElement("div");
                        c.className = "udn-box__container";
                        var u = document.createElement("h2");
                        if (u.className = "udn-box__title",
                        u.textContent = n || "未知錯誤",
                        c.appendChild(u),
                        void 0 !== o) {
                            var s = document.createElement("div");
                            s.innerHTML = o,
                            s.className = "udn-box__content",
                            c.appendChild(s)
                        }
                        var l = document.createElement("div");
                        l.className = "udn-box__button btn-holder btn-holder--center";
                        var d = document.createElement("button");
                        if (d.className = "btn btn-box btn-red btn-ripple",
                        d.textContent = "confirm" === i ? "取消" : "確認",
                        d.addEventListener("click", (function(e) {
                            e.preventDefault(),
                            p()
                        }
                        )),
                        "confirm" === i) {
                            var f = document.createElement("button");
                            f.className = "btn btn-box btn-blue btn-ripple",
                            f.textContent = "確定",
                            f.addEventListener("click", (function(e) {
                                e.preventDefault(),
                                p(),
                                t()
                            }
                            )),
                            l.appendChild(f)
                        }
                        function p() {
                            r.Z.removeClass("alert-open"),
                            setTimeout((function() {
                                a.parentNode.removeChild(a)
                            }
                            ), 1e3)
                        }
                        document.addEventListener("keydown", (function e(t) {
                            "Escape" === t.key && (p(),
                            document.removeEventListener("keydown", e))
                        }
                        )),
                        l.appendChild(d),
                        c.appendChild(l),
                        a.appendChild(c),
                        document.body.appendChild(a)
                    }
                }, {
                    key: "alert",
                    value: function(e) {
                        var t = e.title
                          , n = e.message;
                        r.Z.setClass("alert-open"),
                        this.createBox({
                            title: t,
                            message: n,
                            type: "alert"
                        })
                    }
                }, {
                    key: "confirm",
                    value: function(e, t) {
                        var n = e.title
                          , o = e.message;
                        r.Z.setClass("alert-open"),
                        this.createBox({
                            title: n,
                            message: o,
                            type: "confirm"
                        }, t)
                    }
                }]) && o(t.prototype, n),
                i && o(t, i),
                e
            }()
              , a = new i;
            t.Z = a
        },
        1437: function(e, t, n) {
            "use strict";
            var r = n(8461);
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var i = function() {
                function e() {
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    e.instance ? e.instance : (e.instance = this,
                    this.timeoutHandler = null,
                    this.counter = 0,
                    this)
                }
                var t, n, i;
                return t = e,
                (n = [{
                    key: "start",
                    value: function() {
                        return this.counter >= 3 ? (r.Z.alert({
                            title: "警告",
                            message: '<img src="//j.udn.com.tw/img/emoticons_10.gif" class="icon">深呼吸，放慢動作<br>請勿在短時間內操作同一功能唷～'
                        }),
                        !1) : (this.counter++,
                        this.timer(),
                        !0)
                    }
                }, {
                    key: "timer",
                    value: function() {
                        var e = this;
                        clearTimeout(this.timeoutHandler),
                        this.timeoutHandler = setTimeout((function() {
                            e.counter = 0
                        }
                        ), 3e3)
                    }
                }]) && o(t.prototype, n),
                i && o(t, i),
                e
            }()
              , a = new i;
            t.Z = a
        },
        1785: function(e, t, n) {
            "use strict";
            n.d(t, {
                wY: function() {
                    return p
                },
                D1: function() {
                    return v
                }
            });
            var r = n(7885)
              , o = n.n(r);
            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n)
                        return;
                    var r, o, i = [], a = !0, c = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value),
                        !t || i.length !== t); a = !0)
                            ;
                    } catch (e) {
                        c = !0,
                        o = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c)
                                throw o
                        }
                    }
                    return i
                }(e, t) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return a(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        s(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function l(e) {
                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                l(e)
            }
            function d(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a)
                      , u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            function f(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            d(i, r, o, a, c, "next", e)
                        }
                        function c(e) {
                            d(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            function p(e) {
                return m.apply(this, arguments)
            }
            function m() {
                return m = f(regeneratorRuntime.mark((function e(t) {
                    var n, r, i, a, c = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = c.length > 1 && void 0 !== c[1] ? c[1] : {},
                                r = c.length > 2 && void 0 !== c[2] ? c[2] : {},
                                i = c.length > 3 && void 0 !== c[3] ? c[3] : "json",
                                a = Object.entries(n).map((function(e) {
                                    return "".concat(e[0], "=").concat(e[1])
                                }
                                )).join("&"),
                                e.abrupt("return", o()("".concat(t, "?").concat(a), u({
                                    method: "GET"
                                }, r)).then((function(e) {
                                    return e[i]()
                                }
                                )));
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                m.apply(this, arguments)
            }
            function v(e) {
                return h.apply(this, arguments)
            }
            function h() {
                return h = f(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, c, s, l = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = l.length > 1 && void 0 !== l[1] ? l[1] : {},
                                r = l.length > 2 && void 0 !== l[2] ? l[2] : "POST",
                                a = l.length > 3 ? l[3] : void 0,
                                c = l.length > 4 && void 0 !== l[4] ? l[4] : "json",
                                s = y(n),
                                Object.entries(n).map((function(e) {
                                    var t = i(e, 2)
                                      , n = t[0]
                                      , r = t[1];
                                    return encodeURIComponent(n) + "=" + encodeURIComponent(r)
                                }
                                )).join("&"),
                                e.abrupt("return", o()(t, u({
                                    method: r,
                                    headers: {
                                        "Content-Type": "application/x-www-form-urlencoded"
                                    },
                                    body: s
                                }, a)).then((function(e) {
                                    return e[c]()
                                }
                                )).catch((function(e) {
                                    return {
                                        state: !1,
                                        message: e
                                    }
                                }
                                )));
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                h.apply(this, arguments)
            }
            function y(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                if ("object" === l(e))
                    for (var r in e)
                        y(e[r], t ? t + "[]" : r, n);
                else
                    n.push(t + "=" + encodeURIComponent(e));
                return n.join("&")
            }
        },
        5931: function(e, t, n) {
            "use strict";
            n.d(t, {
                EU: function() {
                    return a
                },
                Ds: function() {
                    return c
                },
                ig: function() {
                    return u
                },
                oc: function() {
                    return s
                },
                Sy: function() {
                    return l
                },
                ej: function() {
                    return d
                },
                gp: function() {
                    return f
                },
                Du: function() {
                    return p
                },
                hB: function() {
                    return m
                },
                RH: function() {
                    return v
                },
                $C: function() {
                    return h
                },
                rs: function() {
                    return y
                },
                Wl: function() {
                    return g
                },
                rg: function() {
                    return b
                },
                nE: function() {
                    return w
                },
                EE: function() {
                    return _
                }
            });
            var r = n(3671)
              , o = (n(8461),
            n(7921))
              , i = n.n(o);
            var a = function() {
                var e = void 0 !== window.pageXOffset || void 0
                  , t = "CSS1Compat" === (document.compatMode || "");
                return e ? window.pageYOffset : t ? document.documentElement.scrollTop : document.body.scrollTop
            }
              , c = function(e, t) {
                var n = null;
                return function() {
                    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
                        o[i] = arguments[i];
                    n && clearTimeout(n),
                    n = setTimeout((function() {
                        e.apply(void 0, o)
                    }
                    ), t)
                }
            }
              , u = {
                getter: function(e, t) {
                    try {
                        var n = document.querySelector("meta[".concat(e, '="').concat(t, '"]'));
                        return n ? n.getAttribute("content") : ""
                    } catch (e) {
                        return ""
                    }
                }
            }
              , s = function(e, t) {
                t = null == t ? 1 : t;
                var n = null == e ? 0 : e.length;
                if (!n || t < 1)
                    return [];
                t = t > n ? n : t;
                for (var r = -1, o = n - 1, i = function(e, t) {
                    var n = -1
                      , r = e.length;
                    for (t || (t = new Array(r)); ++n < r; )
                        t[n] = e[n];
                    return t
                }(e); ++r < t; ) {
                    var a = r + Math.floor(Math.random() * (o - r + 1))
                      , c = i[a];
                    i[a] = i[r],
                    i[r] = c
                }
                return function(e, t, n) {
                    var r = null == e ? 0 : e.length;
                    if (!r)
                        return [];
                    (t = null == t ? 0 : t) < 0 && (t = -t > r ? 0 : r + t),
                    (n = (n = void 0 === n ? r : n) > r ? r : n) < 0 && (n += r),
                    r = t > n ? 0 : n - t >>> 0,
                    t >>>= 0;
                    for (var o = -1, i = new Array(r); ++o < r; )
                        i[o] = e[o + t];
                    return i
                }(i, 0, t)
            }
              , l = function(e) {
                for (var t = e.length - 1; t > 0; t--) {
                    var n = Math.floor(Math.random() * (t + 1))
                      , r = [e[n], e[t]];
                    e[t] = r[0],
                    e[n] = r[1]
                }
                return e
            };
            function d(e) {
                var t = ("; " + document.cookie).split("; " + e + "=");
                if (2 == t.length)
                    return t.pop().split(";").shift()
            }
            function f() {
                var e = parseInt(u.getter("name", "cate_id")) === r.Ag ? "udnvip" : "news";
                if (p())
                    return "https://member.udn.com/member/login.jsp?site=".concat(e, "&again=y&redirect=").concat(window.location.href);
                var t = new URL(window.location.href)
                  , n = t.origin + t.pathname;
                return e = window.innerWidth > r.sO.tablet ? "news" : "m_news",
                "https://member.udn.com/member/login.jsp?site=".concat(e, "&again=y&redirect=").concat(n)
            }
            var p = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : /MSIE|Trident/
                  , t = window.navigator.userAgent
                  , n = e.test(t);
                return n
            };
            var m = function() {
                return parseInt(u.getter("name", "cate_id")) === r.Ag
            }
              , v = function() {
                if (!document.body.classList.contains("menu-stick")) {
                    var e = document.querySelector(".header")
                      , t = document.querySelector(".header-wrapper")
                      , n = e.offsetTop + t.clientHeight;
                    return window.__UDN__ = window.__UDN__ || {},
                    window.__UDN__.menuTop = n,
                    n
                }
            };
            function h(e) {
                var t = e.state
                  , n = e.scrollTopEl
                  , r = e.callBackFn
                  , o = e.infinite
                  , i = void 0 !== o && o;
                window.addEventListener("scroll", (function e() {
                    if (t)
                        return;
                    if (n.getBoundingClientRect().top - window.innerHeight <= 0) {
                        if (r(e),
                        i)
                            return;
                        t = !0,
                        window.removeEventListener("scroll", e)
                    }
                }
                ))
            }
            function y(e, t) {
                return e.className.split(" ").indexOf(t) >= 0 || e.parentElement && y(e.parentNode, t)
            }
            function g(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3
                  , n = t / 1e3;
                e.style.transition = "all " + n + "s ease-in-out",
                e.style.visibility = "hidden",
                e.style.opacity = 0,
                e.style.transform = "translateX(-50vw)",
                setTimeout((function() {
                    e.parentNode.removeChild(e)
                }
                ), t)
            }
            function b() {
                return {
                    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                }
            }
            function w() {
                var e = i().get("_ga")
                  , t = e ? e.split(".") : [];
                return t.splice(0, 2),
                t.length ? t.join(".") : "__"
            }
            function _(e) {
                var t = new Date(e)
                  , n = new Date
                  , r = Date.parse(t) - Date.parse(n)
                  , o = Math.floor(r / 1e3 % 60)
                  , i = Math.floor(r / 1e3 / 60 % 60)
                  , a = Math.floor(r / 36e5 % 24);
                return {
                    total: r,
                    days: Math.floor(r / 864e5),
                    hours: a,
                    minutes: i,
                    seconds: o,
                    date: t,
                    now: n
                }
            }
        },
        7091: function(e, t, n) {
            "use strict";
            n.d(t, {
                _f: function() {
                    return V
                },
                gP: function() {
                    return Q
                },
                $r: function() {
                    return oe
                },
                xD: function() {
                    return ae
                },
                Vx: function() {
                    return ue
                },
                av: function() {
                    return le
                }
            });
            var r, o, i, a, c, u, s, l, d, f, p, m, v, h, y, g, b, w, _, x, k, E, O, S, j, L, P, A, C, N, R, T, I, D, q, M = n(5931), Z = n(3016), B = n(9032), U = n(3671);
            function Y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    n.push.apply(n, r)
                }
                return n
            }
            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Y(Object(n), !0).forEach((function(t) {
                        H(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function H(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            function J(e, t) {
                return t || (t = e.slice(0)),
                Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            function z(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a)
                      , u = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o)
            }
            function F(e) {
                return function() {
                    var t = this
                      , n = arguments;
                    return new Promise((function(r, o) {
                        var i = e.apply(t, n);
                        function a(e) {
                            z(i, r, o, a, c, "next", e)
                        }
                        function c(e) {
                            z(i, r, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            function $() {
                return X.apply(this, arguments)
            }
            function X() {
                return (X = F(regeneratorRuntime.mark((function e() {
                    var t;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (D) {
                                    e.next = 9;
                                    break
                                }
                                if (!M.Du) {
                                    e.next = 4;
                                    break
                                }
                                return e.next = 4,
                                n.e(869).then(n.t.bind(n, 2813, 23));
                            case 4:
                                return e.next = 6,
                                n.e(500).then(n.bind(n, 2394));
                            case 6:
                                t = e.sent,
                                D = t.html,
                                q = t.render;
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function V(e, t) {
                return G.apply(this, arguments)
            }
            function G() {
                return G = F(regeneratorRuntime.mark((function e(t, n) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", F(regeneratorRuntime.mark((function e() {
                                    var r;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                $();
                                            case 2:
                                                return e.next = 4,
                                                Promise.all(t.map(function() {
                                                    var e = F(regeneratorRuntime.mark((function e(t) {
                                                        var n, r, o, i;
                                                        return regeneratorRuntime.wrap((function(e) {
                                                            for (; ; )
                                                                switch (e.prev = e.next) {
                                                                case 0:
                                                                    return n = t.hasOwnProperty("vote") ? {
                                                                        vote: t.vote
                                                                    } : {},
                                                                    r = {},
                                                                    o = t.hasOwnProperty("collectionId") ? {
                                                                        collectionId: t.collectionId
                                                                    } : {},
                                                                    i = t.hasOwnProperty("cateLink") ? {
                                                                        cate: {
                                                                            href: t.cateLink,
                                                                            title: t.cateTitle
                                                                        }
                                                                    } : {},
                                                                    e.next = 6,
                                                                    ne({
                                                                        data: W(W(W(W({
                                                                            href: t.titleLink,
                                                                            title: t.title,
                                                                            source: t.url,
                                                                            video: void 0 !== t.video && t.video,
                                                                            image: {
                                                                                width: 300,
                                                                                height: 200
                                                                            },
                                                                            paragraph: t.hasOwnProperty("paragraph") ? t.paragraph : "",
                                                                            time: t.time,
                                                                            view: t.hasOwnProperty("view") ? t.view : ""
                                                                        }, n), r), o), i)
                                                                    });
                                                                case 6:
                                                                    return e.abrupt("return", e.sent);
                                                                case 7:
                                                                case "end":
                                                                    return e.stop()
                                                                }
                                                        }
                                                        ), e)
                                                    }
                                                    )));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()));
                                            case 4:
                                                r = e.sent,
                                                q(r, n);
                                            case 7:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                ))));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                G.apply(this, arguments)
            }
            function Q(e) {
                return K.apply(this, arguments)
            }
            function K() {
                return (K = F(regeneratorRuntime.mark((function e(t) {
                    var n, r, o, i, a, c, u, s, l, d, f, p, m, v, h, y, g;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.urlPrefix,
                                r = t.list,
                                o = t.feat,
                                t.isIndex,
                                i = t.json5,
                                e.next = 3,
                                $();
                            case 3:
                                return a = r.img,
                                c = r.title,
                                u = r.link,
                                s = r.settings,
                                l = r.articleId,
                                d = r.story_list,
                                f = r.content_level,
                                p = o.querySelector(".story-list__image--holder"),
                                m = o.querySelector(".story-list__text h3"),
                                v = o.querySelector(".btn-setting"),
                                h = o.querySelector(".btn-like"),
                                y = u + "?from=ddd-umaylikenews_ch2" + n,
                                h.dataset.id = l,
                                (g = document.createElement("a")).href = y,
                                g.textContent = c,
                                g.title = c,
                                g.dataset.story_list = d || "list_猜你喜歡",
                                g.dataset.content_level = f,
                                m.appendChild(g),
                                p.href = y,
                                o.dataset.id = l,
                                g.addEventListener("click", (function() {
                                    (0,
                                    B.O)(l)
                                }
                                )),
                                e.t0 = q,
                                e.next = 23,
                                ee({
                                    source: a,
                                    width: 300,
                                    height: 200
                                });
                            case 23:
                                e.t1 = e.sent,
                                e.t2 = p,
                                (0,
                                e.t0)(e.t1, e.t2),
                                v.dataset.settings = i.stringify(s);
                            case 28:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function ee(e) {
                return te.apply(this, arguments)
            }
            function te() {
                return (te = F(regeneratorRuntime.mark((function e(t) {
                    var n, a, c, u, s, l;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return s = function() {
                                    return u ? u.map((function(e) {
                                        return D(o || (o = J(['\n        <source\n          media="(min-width: ', 'px)"\n          data-srcset="\n              ', "&w=", '&nt=1"\n          type="image/webp"\n        />\n        <source\n          media="(min-width: ', 'px)"\n          data-srcset="\n            ', "&w=", '"\n          type="image/jpeg"\n        />\n      '])), e, n, 2 * a, e, n, 2 * a)
                                    }
                                    )) : D(r || (r = J([""])))
                                }
                                ,
                                n = t.source,
                                a = t.width,
                                c = t.media,
                                u = void 0 !== c && c,
                                t.height,
                                e.next = 4,
                                $();
                            case 4:
                                return "&",
                                n.includes("pgw.udn.com") || (n = "//pgw.udn.com.tw/gw/photo.php?u=".concat(n)),
                                l = D(i || (i = J(["\n    <picture>\n      ", '\n      <source\n        data-srcset="\n                    ', "", "w=", '&nt=1,"\n        type="image/webp"\n      />\n      <source\n        data-srcset="\n                    ', "", "w=", ',"\n        type="image/jpeg"\n      />\n\n      <img\n        data-src="', "", "w=", '"\n        loading="lazy"\n        class="lazyload"\n        alt=""\n      />\n    </picture>\n  '])), s(), n, "&", a, n, "&", a, n, "&", a),
                                e.abrupt("return", l);
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function ne(e) {
                return re.apply(this, arguments)
            }
            function re() {
                return (re = F(regeneratorRuntime.mark((function e(t) {
                    var n, r, o, i;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return i = function(e) {
                                    return "" === e || void 0 === e ? D(l || (l = J([""]))) : isNaN(e) ? D(f || (f = J([""]))) : D(d || (d = J(['\n        <span class="story-list__view"><i class="i-eye-3"></i>', "</span>\n      "])), e)
                                }
                                ,
                                o = function(e) {
                                    return e ? D(u || (u = J(['\n        <time class="story-list__time" datetime="', '"\n          >', "</time\n        >\n      "])), e.dateTime, e.date) : D(s || (s = J([""])))
                                }
                                ,
                                r = function(e) {
                                    return e ? D(a || (a = J(['\n        <a\n          href="', '"\n          title="', '"\n          class="story-list__cate btn btn-blue"\n          >', "</a\n        >\n      "])), e.href, e.title, e.title) : D(c || (c = J([""])))
                                }
                                ,
                                n = t.data,
                                e.t0 = D,
                                e.t1 = p || (p = J(['\n    <div\n      class="story-list__news ', " ", '"\n    >\n      <div class="story-list__image">\n        <a\n          href="', '"\n          title="', '"\n          class="story-list__image--holder"\n        >\n          ', '\n        </a>\n      </div>\n      <div class="story-list__text">\n        <h2>\n          <a href="', '" title="', '">', "</a>\n        </h2>\n\n        ", "\n      </div>\n    </div>\n  "])),
                                e.t2 = n.video ? "story-list__video" : "",
                                e.t3 = n.hasOwnProperty("vote") ? "story-list__vote" : "",
                                e.t4 = n.href,
                                e.t5 = n.title,
                                e.next = 12,
                                ee({
                                    source: n.source,
                                    width: n.image.width,
                                    height: n.image.height
                                });
                            case 12:
                                return e.t6 = e.sent,
                                e.t7 = n.href,
                                e.t8 = n.title,
                                e.t9 = n.title,
                                e.t10 = n.hasOwnProperty("vote") ? D(m || (m = J(['\n              <div class="story-list__info">\n                <div class="vote-rules">\n                  <span class="time-left"\n                    >剩餘時間：\n                    ', '\n                  </span>\n                  <span class="total"\n                    >', "：\n                    ", '\n                  </span>\n                </div>\n\n                <div class="btn-holder">\n                  <a href="', '" class="btn btn-blue btn-vote">\n                    ', ' <i class="i-vote2"></i\n                  ></a>\n                </div>\n              </div>\n            '])), (0,
                                M.EE)(n.vote.endTime).days < 0 ? "已結束" : (0,
                                M.EE)(n.vote.endTime).days + "天 " + (0,
                                M.EE)(n.vote.endTime).hours + "小時", (0,
                                M.EE)(n.vote.endTime).days < 0 ? "總投票數" : "目前總投票數", n.vote.total, n.href, (0,
                                M.EE)(n.vote.endTime).days < 0 ? "看結果" : "投票") : D(v || (v = J(["\n              ", '\n\n              <div class="story-list__info">\n                ', "\n                ", "\n                ", " ", "\n                ", "\n              </div>\n            "])), n.hasOwnProperty("paragraph") ? D(h || (h = J(['\n                    <p>\n                      <a href="', '" title="', '"\n                        >', "</a\n                      >\n                    </p>\n                  "])), n.href, n.title, n.paragraph) : "", n.hasOwnProperty("feature") ? D(y || (y = J(['\n                      <div class="feature-guess__tools">\n                        <span\n                          class="story-list__setting btn btn-icon btn-setting btn-setting--ajax"\n                          data-settings="', '"\n                          role="button"\n                          @click=', '\n                          aria-label="最愛設定"\n                        ></span>\n                      </div>\n                    '])), n.feature, B.a) : "", n.hasOwnProperty("collectionId") ? D(g || (g = J(['\n                      <span\n                        class="btn btn-icon btn-bookmark--cancel"\n                        role="button"\n                        aria-label="移除收藏"\n                        data-id="', '"\n                        @click=', "\n                      ></span>\n                    "])), n.collectionId, (function(e) {
                                    e.preventDefault(),
                                    (0,
                                    Z.zh)(e, n.href)
                                }
                                )) : "", i(n.view), r(n.cate), o(n.time)),
                                e.abrupt("return", (0,
                                e.t0)(e.t1, e.t2, e.t3, e.t4, e.t5, e.t6, e.t7, e.t8, e.t9, e.t10));
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function oe(e, t) {
                return ie.apply(this, arguments)
            }
            function ie() {
                return (ie = F(regeneratorRuntime.mark((function e(t, n) {
                    var r, o, i;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return o = function() {
                                    return t.hasOwnProperty("ads") ? D(_ || (_ = J(['\n        <div class="navigation-submenu__footer__issues">\n          ', "\n        </div>\n      "])), t.ads.map((function(e) {
                                        return D(x || (x = J(['\n              <a\n                class="list-ellipsis"\n                target="_blank"\n                title="', '"\n                href="', '"\n                >', "</a\n              >\n            "])), e.title, e.link, e.title)
                                    }
                                    ))) : ""
                                }
                                ,
                                r = function() {
                                    return t.hasOwnProperty("recommendation") ? D(b || (b = J(['\n        <div class="navigation-submenu__footer__recomendation">\n          ', "\n        </div>\n      "])), t.recommendation.map((function(e) {
                                        return D(w || (w = J(['\n              <a class="arrow-icon" href="', '" title="', '"\n                >', "</a\n              >\n            "])), e.link, e.title, e.title)
                                    }
                                    ))) : ""
                                }
                                ,
                                e.next = 4,
                                $();
                            case 4:
                                i = D(k || (k = J([" ", " ", " "])), r(), o()),
                                q(i, n);
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
            function ae(e, t) {
                return ce.apply(this, arguments)
            }
            function ce() {
                return ce = F(regeneratorRuntime.mark((function e(t, n) {
                    var r, o;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                $();
                            case 2:
                                return r = function() {
                                    var e = F(regeneratorRuntime.mark((function e(t) {
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if (void 0 !== t.thumb) {
                                                        e.next = 2;
                                                        break
                                                    }
                                                    return e.abrupt("return", "");
                                                case 2:
                                                    return e.t0 = D,
                                                    e.t1 = E || (E = J(['\n      <div class="context-box__content">\n        <a\n          class="thumb-list thumb-rec"\n          href="', '"\n          title="', '"\n          data-story_list="', '"\n          data-content_level="', '"\n        >\n          ', '\n          <h4 class="thumb-list__title">', "</h4>\n        </a>\n        ", "\n      </div>\n    "])),
                                                    e.t2 = t.thumb.link,
                                                    e.t3 = t.thumb.title,
                                                    e.t4 = t.thumb.story_list,
                                                    e.t5 = t.thumb.content_level,
                                                    e.next = 10,
                                                    ee({
                                                        source: t.thumb.img,
                                                        width: 160,
                                                        height: 100
                                                    });
                                                case 10:
                                                    return e.t6 = e.sent,
                                                    e.t7 = t.thumb.title,
                                                    e.t8 = t.lists.map((function(e) {
                                                        return D(O || (O = J(['\n            <a\n              href="', '"\n              title="', '"\n              class="list-ellipsis ', '"\n              data-story_list="', '"\n              data-content_level="', '"\n              >', "</a\n            >\n          "])), e.link, e.title, e.focus ? "text-orange" : "", e.story_list, e.content_level, e.title)
                                                    }
                                                    )),
                                                    e.abrupt("return", (0,
                                                    e.t0)(e.t1, e.t2, e.t3, e.t4, e.t5, e.t6, e.t7, e.t8));
                                                case 14:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                e.next = 5,
                                Promise.all(t.map(function() {
                                    var e = F(regeneratorRuntime.mark((function e(t, n) {
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.t0 = D,
                                                    e.t1 = S || (S = J(['\n        <section\n          class="context-box ', '"\n          data-index="', '"\n        >\n          <header class="context-box__header">\n            <h3 class="context-box__title">', '</h3>\n            <a\n              class="btn context-box__more"\n              href="', '"\n              title="', '"\n            ></a>\n          </header>\n          ', "\n        </section>\n      "])),
                                                    e.t2 = 0 === n ? "active" : "",
                                                    e.t3 = n,
                                                    e.t4 = t.title,
                                                    e.t5 = t.href,
                                                    e.t6 = t.title,
                                                    e.next = 9,
                                                    r(t);
                                                case 9:
                                                    return e.t7 = e.sent,
                                                    e.abrupt("return", (0,
                                                    e.t0)(e.t1, e.t2, e.t3, e.t4, e.t5, e.t6, e.t7));
                                                case 11:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t, n) {
                                        return e.apply(this, arguments)
                                    }
                                }()));
                            case 5:
                                o = e.sent,
                                q(o, n);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                ce.apply(this, arguments)
            }
            function ue(e, t, n) {
                return se.apply(this, arguments)
            }
            function se() {
                return se = F(regeneratorRuntime.mark((function e(t, n, r) {
                    var o, i, a, c, u, s = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return o = s.length > 3 && void 0 !== s[3] && s[3],
                                e.next = 3,
                                $();
                            case 3:
                                return i = {
                                    width: 300,
                                    height: 200
                                },
                                a = {
                                    handleEvent: function(e) {
                                        r()
                                    },
                                    capture: !0
                                },
                                c = function(e) {
                                    return o ? "" : D(j || (j = J([' <div id="', '" class="udn-ads udn-idle-mixed"></div> '])), e[0])
                                }
                                ,
                                e.t0 = D,
                                e.t1 = L || (L = J(['\n    <div class="udn-idle__container">\n      <div class="btn close-btn" aria-label="Close" @click=', '>\n        <i class="i-close"></i>\n      </div>\n\n      <header class="udn-idle__header">\n        <a\n          href="', '"\n          class="udn-idle__logo"\n          title="', '"\n        >\n          ', '\n        </a>\n\n        <div class="udn-idle__text">\n          <div class="udn-idle__subtext">\n            <span\n              class="arrow-icon"\n              title="', '"\n              style="padding-right: 5px;"\n              >', '</span\n            >\n          </div>\n          <h3 class="udn-idle__title">\n            <a href="', '" title="', '">', '</a>\n          </h3>\n        </div>\n      </header>\n\n      <div class="udn-idle__content story-list__holder">\n        ', "\n        ", "\n        ", "\n      </div>\n    </div>\n  "])),
                                e.t2 = a,
                                e.t3 = t.thumbHref,
                                e.t4 = t.header,
                                e.next = 13,
                                ee({
                                    source: t.thumb,
                                    width: 150,
                                    height: 150
                                });
                            case 13:
                                return e.t5 = e.sent,
                                e.t6 = t.header,
                                e.t7 = t.header,
                                e.t8 = t.href,
                                e.t9 = t.title,
                                e.t10 = t.title,
                                e.next = 21,
                                ne({
                                    data: W(W({}, t.lists[0]), {}, {
                                        image: W({}, i)
                                    })
                                });
                            case 21:
                                return e.t11 = e.sent,
                                e.next = 24,
                                ne({
                                    data: W(W({}, t.lists[1]), {}, {
                                        image: W({}, i)
                                    })
                                });
                            case 24:
                                e.t12 = e.sent,
                                e.t13 = c(t.dfp),
                                u = (0,
                                e.t0)(e.t1, e.t2, e.t3, e.t4, e.t5, e.t6, e.t7, e.t8, e.t9, e.t10, e.t11, e.t12, e.t13),
                                q(u, n);
                            case 28:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                ))),
                se.apply(this, arguments)
            }
            function le(e, t) {
                return de.apply(this, arguments)
            }
            function de() {
                return (de = F(regeneratorRuntime.mark((function e(t, n) {
                    var r, o, i, a, c, u, s, l, d;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return l = function(e) {
                                    return e ? D(A || (A = J(['\n          <a\n            class="navigation-list navigation-fixed"\n            data-id="', '"\n            href="', '"\n            title="', '"\n            target="_blank"\n            >', "</a\n          >\n        "])), e.id, e.href, e.title, e.title) : ""
                                }
                                ,
                                s = function() {
                                    return window.innerWidth < U.sO.tablet && o ? o.map((function(e) {
                                        return D(P || (P = J(['\n            <a\n              class="navigation-list navigation-fixed ', ' navigation-list--mobile"\n              data-id="', '"\n              title="', '"\n              href="', '"\n              >', "</a\n            >\n          "])), e.id === a ? "active" : "", e.id, e.title, e.href, e.title)
                                    }
                                    )) : ""
                                }
                                ,
                                r = t.fixed,
                                o = t.mobile,
                                i = t.menu,
                                a = t.current,
                                c = t.endMenu,
                                u = t.ads,
                                e.next = 5,
                                $();
                            case 5:
                                d = D(C || (C = J(['\n    <a\n      href="/news/index"\n      class="navigation-list navigation-fixed home"\n      title="回聯合新聞網首頁"\n      ><img alt="udn logo" src="/static/img/logo.svg?20200206"\n    /></a>\n    ', "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  "])), r.map((function(e) {
                                    return D(N || (N = J(['\n        <a\n          class="navigation-list navigation-fixed ', " ", '"\n          data-id="', '"\n          title="', '"\n          href="', '"\n          >', "</a\n        >\n      "])), e.id === a ? "active" : "", (0,
                                    U.zq)(e.id) ? "navigation-list--vip" : "", e.id, e.title, e.href, e.title)
                                }
                                )), s(), i[0].map((function(e) {
                                    return D(R || (R = J(['\n        <a\n          class="navigation-list ', " ", '"\n          data-id="', '"\n          title="', '"\n          href="', '"\n          >', "</a\n        >\n      "])), e.id === a ? "active" : "", (0,
                                    U.zq)(e.id) ? "navigation-list--vip" : "", e.id, e.title, e.href, e.title)
                                }
                                )), l(c), i[1].map((function(e) {
                                    return D(T || (T = J(['\n        <a\n          class="navigation-list ', '"\n          data-id="', '"\n          href="', '"\n          title="', '"\n          >', "</a\n        >\n      "])), e.id === a ? "active" : "", e.id, e.href, e.title, e.title)
                                }
                                )), u.map((function(e) {
                                    return D(I || (I = J(['\n        <a\n          class="navigation-list navigation-fixed navigation--sales"\n          href="', '"\n          title="', '"\n          >', "</a\n        >\n      "])), e.href, e.title, e.title)
                                }
                                ))),
                                q(d, n);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))).apply(this, arguments)
            }
        },
        6871: function(e, t, n) {
            "use strict";
            var r = n(4959)
              , o = n.n(r);
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var a = function() {
                function e() {
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    e.instance ? e.instance : (e.instance = this,
                    this.notifier = o(),
                    this.config = {
                        api: {
                            type: "danger",
                            icon: "https://j.udn.com.tw/img/emoticons_09.gif"
                        },
                        success: {
                            type: "success",
                            icon: "https://j.udn.com.tw/img/emoticons_04.gif"
                        }
                    },
                    this)
                }
                var t, n, r;
                return t = e,
                (n = [{
                    key: "showNotification",
                    value: function(e) {
                        var t = e.title
                          , n = e.message
                          , r = void 0 === n ? "不明錯誤" : n
                          , o = e.nType
                          , i = void 0 === o ? "api" : o
                          , a = e.timeout
                          , c = void 0 === a ? 4e3 : a
                          , u = this.config[i]
                          , s = u.type
                          , l = u.icon;
                        return this.notifier.show(t, r, s, l, c)
                    }
                }, {
                    key: "hideNotification",
                    value: function() {
                        o().hide(this.notifier)
                    }
                }]) && i(t.prototype, n),
                r && i(t, r),
                e
            }()
              , c = new a;
            t.Z = c
        },
        4031: function(e, t) {
            "use strict";
            function n(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return r(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return r(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            var i = function() {
                function e() {
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                    e.instance ? e.instance : (e.instance = this,
                    this.classes = [],
                    this)
                }
                var t, r, i;
                return t = e,
                r = [{
                    key: "getClasses",
                    value: function() {
                        return this.classes
                    }
                }, {
                    key: "setClasses",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return this.classes = [].concat(n(this.classes), n(e)),
                        this.classes.forEach((function(e) {
                            document.body.classList.contains(e) || document.body.classList.add(e)
                        }
                        )),
                        this.classes
                    }
                }, {
                    key: "setClass",
                    value: function(e) {
                        return document.body.classList.add(e),
                        this.classes
                    }
                }, {
                    key: "removeClass",
                    value: function(e) {
                        return this.classes = this.classes.filter((function(t) {
                            return t !== e
                        }
                        )),
                        document.body.classList.remove(e),
                        this.classes
                    }
                }, {
                    key: "removeAllClasses",
                    value: function() {
                        return this.classes.forEach((function(e) {
                            document.body.classList.remove(e)
                        }
                        )),
                        this.classes = [],
                        this.classes
                    }
                }],
                r && o(t.prototype, r),
                i && o(t, i),
                e
            }()
              , a = new i;
            t.Z = a
        },
        1732: function(e, t, n) {
            "use strict";
            var r = n(5931);
            t.Z = function(e) {
                var t = e.parentClassName
                  , n = e.callback
                  , o = function e(o) {
                    (0,
                    r.rs)(o.target, t) || (document.removeEventListener("click", e),
                    n())
                };
                return {
                    register: function() {
                        document.addEventListener("click", o)
                    },
                    destroy: function() {
                        n(),
                        document.removeEventListener("click", o)
                    }
                }
            }
        },
        3903: function(e, t, n) {
            "use strict";
            n.d(t, {
                br: function() {
                    return r
                },
                JW: function() {
                    return o
                },
                pn: function() {
                    return i
                },
                _H: function() {
                    return a
                },
                sq: function() {
                    return c
                },
                zr: function() {
                    return u
                }
            });
            var r = "loading"
              , o = "idle"
              , i = "error"
              , a = "finished"
              , c = "opened"
              , u = "open-loading";
            t.ZP = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o
                  , n = arguments.length > 3 ? arguments[3] : void 0
                  , i = t
                  , c = null;
                void 0 !== n || e.className;
                return e.dataset.state = i,
                {
                    dispatchAction: function(t) {
                        c = i,
                        e.dataset.state = t,
                        i = t
                    },
                    get getState() {
                        return i
                    },
                    get getPrevState() {
                        return c
                    },
                    get isLoading() {
                        return i == r
                    },
                    get isEnd() {
                        return i === a
                    },
                    debugging: function(e) {
                        e
                    }
                }
            }
        }
    }, i = {};
    function a(e) {
        var t = i[e];
        if (void 0 !== t)
            return t.exports;
        var n = i[e] = {
            exports: {}
        };
        return o[e].call(n.exports, n, n.exports, a),
        n.exports
    }
    a.m = o,
    e = [],
    a.O = function(t, n, r, o) {
        if (!n) {
            var i = 1 / 0;
            for (l = 0; l < e.length; l++) {
                n = e[l][0],
                r = e[l][1],
                o = e[l][2];
                for (var c = !0, u = 0; u < n.length; u++)
                    (!1 & o || i >= o) && Object.keys(a.O).every((function(e) {
                        return a.O[e](n[u])
                    }
                    )) ? n.splice(u--, 1) : (c = !1,
                    o < i && (i = o));
                if (c) {
                    e.splice(l--, 1);
                    var s = r();
                    void 0 !== s && (t = s)
                }
            }
            return t
        }
        o = o || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > o; l--)
            e[l] = e[l - 1];
        e[l] = [n, r, o]
    }
    ,
    a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return a.d(t, {
            a: t
        }),
        t
    }
    ,
    n = Object.getPrototypeOf ? function(e) {
        return Object.getPrototypeOf(e)
    }
    : function(e) {
        return e.__proto__
    }
    ,
    a.t = function(e, r) {
        if (1 & r && (e = this(e)),
        8 & r)
            return e;
        if ("object" == typeof e && e) {
            if (4 & r && e.__esModule)
                return e;
            if (16 & r && "function" == typeof e.then)
                return e
        }
        var o = Object.create(null);
        a.r(o);
        var i = {};
        t = t || [null, n({}), n([]), n(n)];
        for (var c = 2 & r && e; "object" == typeof c && !~t.indexOf(c); c = n(c))
            Object.getOwnPropertyNames(c).forEach((function(t) {
                i[t] = function() {
                    return e[t]
                }
            }
            ));
        return i.default = function() {
            return e
        }
        ,
        a.d(o, i),
        o
    }
    ,
    a.d = function(e, t) {
        for (var n in t)
            a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    a.f = {},
    a.e = function(e) {
        return Promise.all(Object.keys(a.f).reduce((function(t, n) {
            return a.f[n](e, t),
            t
        }
        ), []))
    }
    ,
    a.u = function(e) {
        return "static/js/" + ({
            122: "JSON5",
            242: "udn-slider",
            500: "lit-html",
            678: "udn-astrology",
            679: "udn-submenu",
            796: "udn-feature",
            869: "webcomponents-template",
            875: "sortable"
        }[e] || e) + ".bundle.js?tsb=1655369738131"
    }
    ,
    a.miniCssF = function(e) {}
    ,
    a.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r = {},
    a.l = function(e, t, n, o) {
        if (r[e])
            r[e].push(t);
        else {
            var i, c;
            if (void 0 !== n)
                for (var u = document.getElementsByTagName("script"), s = 0; s < u.length; s++) {
                    var l = u[s];
                    if (l.getAttribute("src") == e) {
                        i = l;
                        break
                    }
                }
            i || (c = !0,
            (i = document.createElement("script")).charset = "utf-8",
            i.timeout = 120,
            a.nc && i.setAttribute("nonce", a.nc),
            i.src = e),
            r[e] = [t];
            var d = function(t, n) {
                i.onerror = i.onload = null,
                clearTimeout(f);
                var o = r[e];
                if (delete r[e],
                i.parentNode && i.parentNode.removeChild(i),
                o && o.forEach((function(e) {
                    return e(n)
                }
                )),
                t)
                    return t(n)
            }
              , f = setTimeout(d.bind(null, void 0, {
                type: "timeout",
                target: i
            }), 12e4);
            i.onerror = d.bind(null, i.onerror),
            i.onload = d.bind(null, i.onload),
            c && document.head.appendChild(i)
        }
    }
    ,
    a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a.p = "/",
    function() {
        var e = {
            504: 0
        };
        a.f.j = function(t, n) {
            var r = a.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    n.push(r[2]);
                else {
                    var o = new Promise((function(n, o) {
                        r = e[t] = [n, o]
                    }
                    ));
                    n.push(r[2] = o);
                    var i = a.p + a.u(t)
                      , c = new Error;
                    a.l(i, (function(n) {
                        if (a.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                        r)) {
                            var o = n && ("load" === n.type ? "missing" : n.type)
                              , i = n && n.target && n.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")",
                            c.name = "ChunkLoadError",
                            c.type = o,
                            c.request = i,
                            r[1](c)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ,
        a.O.j = function(t) {
            return 0 === e[t]
        }
        ;
        var t = function(t, n) {
            var r, o, i = n[0], c = n[1], u = n[2], s = 0;
            if (i.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (r in c)
                    a.o(c, r) && (a.m[r] = c[r]);
                if (u)
                    var l = u(a)
            }
            for (t && t(n); s < i.length; s++)
                o = i[s],
                a.o(e, o) && e[o] && e[o][0](),
                e[i[s]] = 0;
            return a.O(l)
        }
          , n = self.webpackChunk = self.webpackChunk || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }(),
    a.O(void 0, [736, 867], (function() {
        return a(1202)
    }
    ));
    var c = a.O(void 0, [736, 867], (function() {
        return a(3607)
    }
    ));
    c = a.O(c)
}();
