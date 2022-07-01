"use strict";
(self.webpackChunk = self.webpackChunk || []).push([[242], {
    9315: function(t, e, i) {
        i.r(e),
        i.d(e, {
            vueSlide: function() {
                return h
            }
        });
        var s = i(1994)
          , n = i.n(s)
          , r = i(3671)
          , a = i(5931)
          , h = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".udn-slider"
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return new (n())({
                el: t,
                data: {
                    currentIndex: 0,
                    currentTranslate: 0,
                    isTouch: "undefined" != typeof window && "ontouchstart"in window,
                    dragging: !1,
                    startX: null,
                    startY: null,
                    direction: null,
                    dragOffsetX: 0,
                    autoplay: !1,
                    autoPlayInterval: null,
                    autoPlayTimer: 5e3,
                    shouldClick: !0,
                    clickThreshold: 20,
                    maxSlide: 17,
                    slideWidth: null,
                    translateArray: [],
                    lists: e
                },
                computed: {
                    styleObject: function() {
                        return {
                            transform: "translate3d(" + this.currentTranslate + "px, 0, 0)",
                            transition: this.dragging ? "none" : "transform .3s linear",
                            cursor: this.dragging ? "grabbing" : "grab",
                            flexBasis: this.translateArray[1] + "px"
                        }
                    }
                },
                mounted: function() {
                    var t = this;
                    if (this.slideWidth = this.$refs.slider.offsetWidth,
                    this.translateArray = this.lists.map((function(e, i) {
                        return t.slideWidth * i
                    }
                    )),
                    this.$refs.slider.dataset.options)
                        for (var e = JSON.parse(this.$refs.slider.dataset.options.replace(/'/g, '"')), i = 0, s = Object.keys(e); i < s.length; i++) {
                            var n = s[i];
                            this[n] = e[n]
                        }
                    window.innerWidth < r.sO.tablet && (this.autoplay = !1),
                    this.$refs.sliderWrapper.style.width = this.slideWidth * this.translateArray.length + "px",
                    this.$refs.sliderWrapper.addEventListener(this.isTouch ? "touchstart" : "mousedown", this.handleDragStart, {
                        capture: !0,
                        passive: !1
                    });
                    var h = this.lists.filter((function(t) {
                        return "dfp" === t.type
                    }
                    )).map((function(t) {
                        return t.id
                    }
                    ));
                    h.length && this.callDFPSlots(h),
                    window.addEventListener("resize", (0,
                    a.Ds)((function() {
                        requestAnimationFrame((function() {
                            t.resetSizes()
                        }
                        ))
                    }
                    ), 500)),
                    this.intervalFunction()
                },
                created: function() {
                    this.lists.length > this.maxSlide && (this.lists.length = this.maxSlide)
                },
                methods: {
                    resetSizes: function() {
                        var t = this;
                        this.slideWidth = this.$refs.slider.offsetWidth,
                        this.$refs.sliderWrapper.style.width = this.slideWidth * this.translateArray.length + "px",
                        this.translateArray = this.lists.map((function(e, i) {
                            return t.slideWidth * i
                        }
                        )),
                        this.goTo(this.currentIndex)
                    },
                    callDFPSlots: function(t) {
                        t.forEach((function(t) {
                            googletag.cmd.push((function() {
                                googletag.display(t)
                            }
                            ))
                        }
                        ))
                    },
                    clearInterval: function(t) {
                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e.toString = function() {
                            return t.toString()
                        }
                        ,
                        e
                    }((function() {
                        clearInterval(this.autoPlayInterval)
                    }
                    )),
                    intervalFunction: function() {
                        var t = this;
                        this.autoplay && (this.autoPlayInterval && clearInterval(this.autoPlayInterval),
                        this.autoPlayInterval = setInterval((function() {
                            t.currentIndex === t.lists.length - 1 ? t.currentIndex = 0 : t.currentIndex++,
                            t.goTo(t.currentIndex)
                        }
                        ), this.autoPlayTimer))
                    },
                    isDraggingState: function(t) {
                        this.dragging = t
                    },
                    handleDragStart: function(t) {
                        this.$refs.slider.style.backgroundImage = "none",
                        2 !== t.button && (this.autoPlayInterval && clearInterval(this.autoPlayInterval),
                        document.addEventListener(this.isTouch ? "touchend" : "mouseup", this.handleDragEnd, {
                            passive: !1
                        }),
                        this.isTouch || document.addEventListener("click", this.handleClick),
                        document.addEventListener(this.isTouch ? "touchmove" : "mousemove", this.handleDragMove, {
                            passive: !1
                        }),
                        window.addEventListener("touchmove", this.preventTouch, {
                            passive: !1
                        }),
                        document.addEventListener("touchmove", this.preventTouch, {
                            passive: !1
                        }),
                        this.startX = this.isTouch ? t.changedTouches[0].clientX : t.clientX,
                        this.startY = this.isTouch ? t.changedTouches[0].clientY : t.clientY,
                        this.isDraggingState(!0))
                    },
                    preventTouch: function(t) {
                        var e = t.changedTouches[0].clientX;
                        if (Math.abs(this.startX) - e > 20)
                            return t.preventDefault(),
                            t.returnValue = !1,
                            !1
                    },
                    handleDragMove: function(t) {
                        if (t.stopPropagation(),
                        t.stopImmediatePropagation(),
                        this.isTouch || t.preventDefault(),
                        this.dragging) {
                            var e = this.isTouch ? t.changedTouches[0].clientX : t.clientX
                              , i = this.isTouch ? t.changedTouches[0].clientY : t.clientY
                              , s = this.getTranslate(this.currentIndex);
                            this.dragOffsetX = this.startX - e;
                            var n = s - this.dragOffsetX;
                            this.isTouch && Math.abs(this.dragOffsetX) < Math.abs(this.startY - i) && t.cancelable ? t.preventDefault() : this.currentTranslate = n
                        }
                    },
                    handleClick: function(t) {
                        this.shouldClick || (t.stopImmediatePropagation(),
                        t.stopPropagation(),
                        t.preventDefault(),
                        this.shouldClick = !0),
                        document.removeEventListener("click", this.handleClick)
                    },
                    handleDragEnd: function(t) {
                        if (this.dragging && (this.isDraggingState(!1),
                        0 !== this.dragOffsetX)) {
                            Math.sign(this.dragOffsetX) > 0 ? this.goTo(this.currentIndex + 1) : this.goTo(this.currentIndex - 1);
                            var e = Math.abs(this.dragOffsetX);
                            this.shouldClick = e < this.clickThreshold,
                            this.dragOffsetX = 0,
                            document.removeEventListener(this.isTouch ? "touchend" : "mouseup", this.handleDragEnd),
                            document.removeEventListener(this.isTouch ? "touchmove" : "mousemove", this.handleDragMove),
                            window.removeEventListener("touchmove", this.preventTouch),
                            document.removeEventListener("touchmove", this.preventTouch)
                        }
                    },
                    getTranslate: function(t) {
                        return -this.translateArray[t]
                    },
                    translateWrapper: function(t) {
                        return "translateX(" + t + ")"
                    },
                    goTo: function(t) {
                        this.$refs.slider.style.backgroundImage = "none",
                        t < 0 || t > this.lists.length - 1 ? this.goTo(this.currentIndex) : (this.currentTranslate = this.getTranslate(t),
                        this.currentIndex = t,
                        this.intervalFunction())
                    }
                }
            })
        }
    }
}]);
