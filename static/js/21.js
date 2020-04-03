/*!
 * byui前端敏捷开发平台 : vue-element-admin-beautiful
 *  copyright:1204505056@qq.com 
 *  author: chuzhixin <1204505056@qq.com> 
 *  participants: liyanna,songmeiyu,lizhenguo
 *  time: 2020-4-3 9:17:54
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/_core-js@3.6.4@core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/_core-js@3.6.4@core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/_core-js@3.6.4@core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var xgplayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xgplayer */ "./node_modules/_xgplayer@2.6.5@xgplayer/dist/index.js");
/* harmony import */ var xgplayer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xgplayer__WEBPACK_IMPORTED_MODULE_4__);




//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Custom',
  props: {
    config: {
      type: Object,
      default: function _default() {
        return {
          id: 'mse',
          url: ''
        };
      }
    },
    rootStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    jumpNum: {
      type: Number,
      default: function _default() {
        return 5;
      }
    }
  },
  data: function data() {
    return {
      player: null,
      finalConfig: {
        volume: 0,
        autoplayMuted: true,
        //解决浏览器非静音阻止自动播放机制
        autoplay: true,
        //自动播放
        loop: true,
        //循环播放
        fluid: true,
        //流式布局
        videoInit: true,
        //加载首屏
        playbackRate: [0.5, 0.75, 1, 1.5, 2],
        //快进设置
        pip: false,
        //画中画
        screenShot: false,
        //开启截屏
        lang: 'zh-cn',
        keyShortcut: 'false',
        enterLogo: {
          url: '',
          width: 231,
          height: 42
        },
        enterBg: {
          color: 'rgba(0,0,0,0.87)'
        },
        enterTips: {
          background: 'linear-gradient(to right, rgba(0,0,0,0.87), #3D96FD, rgba(86,195,248), #3D96FD, rgba(0,0,0,0.87))'
        }
      }
    };
  },
  mounted: function mounted() {
    this.init();
  },
  beforeUpdate: function beforeUpdate() {
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.player && typeof this.player.destroy === 'function' && this.player.destroy();
  },
  methods: {
    init: function init() {
      var that = this;

      var leftfps = function leftfps(player) {
        console.log('1');
        var util = xgplayer__WEBPACK_IMPORTED_MODULE_4___default.a.util;
        var btn = util.createDom('byui-leftfps', '<p class="name"><span>后退' + that.jumpNum + '秒</span></p>', {
          tabindex: 99
        }, 'byui-leftfps');
        var root = player.controls;
        console.log(util);
        root.appendChild(btn);
        var ev = ['click', 'touchend'];
        ev.forEach(function (item) {
          btn.addEventListener(item, function (e) {
            if (player.currentTime - that.jumpNum >= 0) {
              player.currentTime -= Number(that.jumpNum);
            } else {
              player.currentTime = 0;
            }

            player.pause();
            setTimeout(function () {
              player.pause();
            }, 100);
            e.preventDefault();
            e.stopPropagation();
          }, false);
        });
      };

      xgplayer__WEBPACK_IMPORTED_MODULE_4___default.a.install('leftfps', leftfps);

      var rightfps = function rightfps(player) {
        var util = xgplayer__WEBPACK_IMPORTED_MODULE_4___default.a.util;
        var btn = util.createDom('byui-rightfps', '<p class="name"><span>前进' + that.jumpNum + '秒</span></p>', {
          tabindex: 100
        }, 'byui-rightfps');
        var root = player.controls;
        root.appendChild(btn);
        var ev = ['click', 'touchend'];
        ev.forEach(function (item) {
          btn.addEventListener(item, function (e) {
            if (player.currentTime + that.jumpNum >= 0) {
              player.currentTime += Number(that.jumpNum);
            } else {
              player.currentTime = 0;
            }

            player.pause();
            setTimeout(function () {
              player.pause();
            }, 100);
            e.preventDefault();
            e.stopPropagation();
          }, false);
        });
      };

      xgplayer__WEBPACK_IMPORTED_MODULE_4___default.a.install('rightfps', rightfps);
      /* const saveScreenShot = function (data, filename) {
        const saveLink = document.createElement('a')
        saveLink.href = data
        saveLink.download = filename
        const event = document.createEvent('MouseEvents')
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        saveLink.dispatchEvent(event)
      } */

      var screenShot11 = function screenShot11(player) {
        // const player = this
        var util = xgplayer__WEBPACK_IMPORTED_MODULE_4___default.a.util; // if (!player.config.screenShot11) {
        //   return
        // }

        var btn = util.createDom('byui-screenShot', '<p class="name"><span>截图</span></p>', {
          tabindex: 111
        }, 'byui-screenShot');
        var canvas = document.createElement('canvas');
        var canvasCtx = canvas.getContext('2d');
        var img = new Image();
        canvas.width = this.config.width || 600;
        canvas.height = this.config.height || 337.5;
        var ratio = canvas.width / canvas.height;
        var root = player.controls;
        root.appendChild(btn);
        var array = ['click', 'touchstart'];
        array.forEach(function (item) {
          btn.addEventListener(item, function (e) {
            e.preventDefault();
            e.stopPropagation();

            img.onload = function () {
              canvasCtx.drawImage(player.video, 0, 0, canvas.width, canvas.height);
              img.setAttribute('crossOrigin', 'anonymous'); // img.src = canvas.toDataURL('image/png',ratio).replace('image/png', 'image/octet-stream');

              img.src = canvas.toDataURL('image/png', ratio);
              var screenShotImg = img.src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream'); // console.log(img.src);

              that.$emit('getImgSrc', img.src); // saveScreenShot(screenShotImg, '截图.png')
            }();
          });
        });
      };

      xgplayer__WEBPACK_IMPORTED_MODULE_4___default.a.install('screenShot11', screenShot11);
      this.finalConfig = Object.assign(this.finalConfig, this.config);

      if (this.finalConfig.url && this.finalConfig.url !== '') {
        this.player = new xgplayer__WEBPACK_IMPORTED_MODULE_4___default.a(this.finalConfig);
        this.$emit('player', this.player);
        var $player = this.player;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/flv.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./node_modules/_zx-player@0.9.0@zx-player/components/flv.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xgplayer_flv_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xgplayer-flv.js */ "./node_modules/_xgplayer-flv.js@2.1.1@xgplayer-flv.js/dist/index.js");
/* harmony import */ var xgplayer_flv_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xgplayer_flv_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xgplayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xgplayer */ "./node_modules/_xgplayer@2.6.5@xgplayer/dist/index.js");
/* harmony import */ var xgplayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xgplayer__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Flv',
  props: {
    config: {
      type: Object,
      default: function _default() {
        return {
          id: 'mse',
          url: ''
        };
      }
    },
    rootStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      player: null,
      finalConfig: {
        volume: 0,
        autoplayMuted: true,
        //解决浏览器非静音阻止自动播放机制
        autoplay: true,
        //自动播放
        loop: true,
        //循环播放
        fluid: true,
        //流式布局
        videoInit: true,
        //加载首屏
        playbackRate: [0.5, 0.75, 1, 1.5, 2],
        //快进设置
        pip: true,
        //画中画
        screenShot: true,
        //开启截屏
        lang: 'zh-cn',
        hasVideo: true,
        hasAudio: true,
        flvOptionalConfig: {
          enableWorker: true
        },
        enterLogo: {
          url: '',
          width: 231,
          height: 42
        },
        enterBg: {
          color: 'rgba(0,0,0,0.87)'
        },
        enterTips: {
          background: 'linear-gradient(to right, rgba(0,0,0,0.87), #3D96FD, rgba(86,195,248), #3D96FD, rgba(0,0,0,0.87))'
        }
      }
    };
  },
  mounted: function mounted() {
    this.init();
  },
  beforeUpdate: function beforeUpdate() {
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.player && typeof this.player.destroy === 'function' && this.player.destroy();
  },
  methods: {
    init: function init() {
      this.finalConfig = Object.assign(this.finalConfig, this.config);

      if (this.finalConfig.url && this.finalConfig.url !== '') {
        this.player = new xgplayer_flv_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.finalConfig);
        this.$emit('player', this.player);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/hls.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./node_modules/_zx-player@0.9.0@zx-player/components/hls.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xgplayer_hls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xgplayer-hls.js */ "./node_modules/_xgplayer-hls.js@2.1.6@xgplayer-hls.js/dist/index.js");
/* harmony import */ var xgplayer_hls_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xgplayer_hls_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xgplayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xgplayer */ "./node_modules/_xgplayer@2.6.5@xgplayer/dist/index.js");
/* harmony import */ var xgplayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xgplayer__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Hls',
  props: {
    config: {
      type: Object,
      default: function _default() {
        return {
          id: 'mse',
          url: ''
        };
      }
    },
    rootStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      player: null,
      finalConfig: {
        volume: 0,
        autoplayMuted: true,
        //解决浏览器非静音阻止自动播放机制
        autoplay: true,
        //自动播放
        loop: true,
        //循环播放
        fluid: true,
        //流式布局
        videoInit: true,
        //加载首屏
        playbackRate: [0.5, 0.75, 1, 1.5, 2],
        //快进设置
        pip: true,
        //画中画
        screenShot: true,
        //开启截屏
        lang: 'zh-cn',
        enterLogo: {
          url: '',
          width: 231,
          height: 42
        },
        enterBg: {
          color: 'rgba(0,0,0,0.87)'
        },
        enterTips: {
          background: 'linear-gradient(to right, rgba(0,0,0,0.87), #3D96FD, rgba(86,195,248), #3D96FD, rgba(0,0,0,0.87))'
        }
      }
    };
  },
  mounted: function mounted() {
    this.init();
  },
  beforeUpdate: function beforeUpdate() {
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.player && typeof this.player.destroy === 'function' && this.player.destroy();
  },
  methods: {
    init: function init() {
      this.finalConfig = Object.assign(this.finalConfig, this.config);

      if (this.finalConfig.url && this.finalConfig.url !== '') {
        this.player = new xgplayer_hls_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.finalConfig);
        this.$emit('player', this.player);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var xgplayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xgplayer */ "./node_modules/_xgplayer@2.6.5@xgplayer/dist/index.js");
/* harmony import */ var xgplayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xgplayer__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Mp4',
  props: {
    config: {
      type: Object,
      default: function _default() {
        return {
          id: 'mse',
          url: ''
        };
      }
    },
    rootStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      player: null,
      finalConfig: {
        volume: 0,
        autoplayMuted: true,
        //解决浏览器非静音阻止自动播放机制
        autoplay: true,
        //自动播放
        loop: true,
        //循环播放
        fluid: true,
        //流式布局
        videoInit: true,
        //加载首屏
        playbackRate: [0.5, 0.75, 1, 1.5, 2],
        //快进设置
        pip: true,
        //画中画
        screenShot: true,
        //开启截屏
        lang: 'zh-cn',
        enterLogo: {
          url: '',
          width: 231,
          height: 42
        },
        enterBg: {
          color: 'rgba(0,0,0,0.87)'
        },
        enterTips: {
          background: 'linear-gradient(to right, rgba(0,0,0,0.87), #3D96FD, rgba(86,195,248), #3D96FD, rgba(0,0,0,0.87))'
        }
      }
    };
  },
  mounted: function mounted() {
    this.init();
  },
  beforeUpdate: function beforeUpdate() {
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.player && typeof this.player.destroy === 'function' && this.player.destroy();
  },
  methods: {
    init: function init() {
      this.finalConfig = Object.assign(this.finalConfig, this.config);

      if (this.finalConfig.url && this.finalConfig.url !== '') {
        this.player = new xgplayer__WEBPACK_IMPORTED_MODULE_0___default.a(this.finalConfig);
        this.$emit('player', this.player);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7ebb1f94-vue-loader-template\"}!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=template&id=b5d5edc0&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7ebb1f94-vue-loader-template"}!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=template&id=b5d5edc0& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { style: _vm.rootStyle, attrs: { id: _vm.config.id } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7ebb1f94-vue-loader-template\"}!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/flv.vue?vue&type=template&id=12be1ad1&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7ebb1f94-vue-loader-template"}!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./node_modules/_zx-player@0.9.0@zx-player/components/flv.vue?vue&type=template&id=12be1ad1& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { style: _vm.rootStyle, attrs: { id: _vm.config.id } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7ebb1f94-vue-loader-template\"}!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/hls.vue?vue&type=template&id=7c604ad0&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7ebb1f94-vue-loader-template"}!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./node_modules/_zx-player@0.9.0@zx-player/components/hls.vue?vue&type=template&id=7c604ad0& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { style: _vm.rootStyle, attrs: { id: _vm.config.id } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7ebb1f94-vue-loader-template\"}!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue?vue&type=template&id=ef89e65c&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7ebb1f94-vue-loader-template"}!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue?vue&type=template&id=ef89e65c& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { style: _vm.rootStyle, attrs: { id: _vm.config.id } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../_css-loader@3.4.2@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@3.4.2@css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/* byui scss全局变量开始 */\n/*浅色风格开始*/\n/*浅色风格结束*/\n/*黑色风格开始*/\n/*黑色风格结束*/\n/*蓝色风格开始*/\n/*蓝色风格结束*/\n/* byui scss全局变量结束 */\n.xgplayer-start {\n  display: none !important;\n}\n.xgplayer-controls {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n.xgplayer-skin-default .xgplayer-playbackrate .name {\n  top: 10px;\n}\n.byui-screenShot {\n  -webkit-box-ordinal-group: 13;\n      -ms-flex-order: 12;\n          order: 12;\n  position: relative;\n  outline: none;\n  display: block;\n  cursor: pointer;\n  height: 20px;\n  top: 10px;\n}\n.byui-screenShot .name {\n  text-align: center;\n  font-family: PingFangSC-Regular;\n  font-size: 13px;\n  line-height: 20px;\n  height: 20px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.byui-screenShot .name span {\n  width: 60px;\n  height: 20px;\n  line-height: 20px;\n  background: rgba(0, 0, 0, 0.38);\n  border-radius: 10px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.byui-leftfps,\n.byui-rightfps {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n  position: relative;\n  outline: none;\n  display: block;\n  cursor: pointer;\n  height: 20px;\n  top: 10px;\n}\n.byui-leftfps .name,\n.byui-rightfps .name {\n  text-align: center;\n  font-family: PingFangSC-Regular;\n  font-size: 13px;\n  line-height: 20px;\n  height: 20px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.byui-leftfps .name span,\n.byui-rightfps .name span {\n  width: 60px;\n  height: 20px;\n  line-height: 20px;\n  background: rgba(0, 0, 0, 0.38);\n  border-radius: 10px;\n  display: inline-block;\n  vertical-align: middle;\n}", "",{"version":3,"sources":["D:/Development/WebStormProjects/vue-element-admin-beautiful/node_modules/_zx-player@0.9.0@zx-player/components/custom.vue","D:/Development/WebStormProjects/vue-element-admin-beautiful/node_modules/_zx-player@0.9.0@zx-player/components/D:/Development/WebStormProjects/vue-element-admin-beautiful/src/styles/variables.scss","D:/Development/WebStormProjects/vue-element-admin-beautiful/node_modules/_zx-player@0.9.0@zx-player/components/D:/Development/WebStormProjects/vue-element-admin-beautiful/node_modules/_zx-player@0.9.0@zx-player/components/custom.vue"],"names":[],"mappings":"AAAA,gBAAgB;ACChB,oBAAA;AACA,SAAA;AAMA,SAAA;AACA,SAAA;AAMA,SAAA;AACA,SAAA;AAMA,SAAA;AA2BA,oBAAA;ACyIA;EACC,wBAAA;AFxKD;AE0KA;EACC,+BAAA;EAAA,+BAAA;EAAA,wBAAA;AFvKD;AEyKA;EACC,SAAA;AFtKD;AEwKA;EAEC,6BAAA;MAAA,kBAAA;UAAA,SAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,eAAA;EACA,YAAA;EACA,SAAA;AFrKD;AEsKC;EACC,kBAAA;EACA,+BAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,+BAAA;AFpKF;AEqKE;EACC,WAAA;EACA,YAAA;EACA,iBAAA;EACA,+BAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;AFnKH;AEuKA;;EAGC,4BAAA;MAAA,iBAAA;UAAA,QAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,eAAA;EACA,YAAA;EACA,SAAA;AFpKD;AEqKC;;EACC,kBAAA;EACA,+BAAA;EACA,eAAA;EACA,iBAAA;EACA,YAAA;EACA,+BAAA;AFlKF;AEmKE;;EACC,WAAA;EACA,YAAA;EACA,iBAAA;EACA,+BAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;AFhKH","file":"custom.vue?vue&type=style&index=0&lang=scss&","sourcesContent":["@charset \"UTF-8\";\n/* byui scss全局变量开始 */\n/*浅色风格开始*/\n/*浅色风格结束*/\n/*黑色风格开始*/\n/*黑色风格结束*/\n/*蓝色风格开始*/\n/*蓝色风格结束*/\n/* byui scss全局变量结束 */\n:export {\n  menuText: #ffffff;\n  menuTextAcive: #ffffff;\n  menuBackground: #2a58ad;\n  menuActiveBackground: #22468a;\n  tagViewsActiveBackground: #1890ff;\n}\n\n.xgplayer-start {\n  display: none !important;\n}\n\n.xgplayer-controls {\n  display: flex !important;\n}\n\n.xgplayer-skin-default .xgplayer-playbackrate .name {\n  top: 10px;\n}\n\n.byui-screenShot {\n  -moz-box-ordinal-group: 12;\n  order: 12;\n  position: relative;\n  outline: none;\n  display: block;\n  cursor: pointer;\n  height: 20px;\n  top: 10px;\n}\n.byui-screenShot .name {\n  text-align: center;\n  font-family: PingFangSC-Regular;\n  font-size: 13px;\n  line-height: 20px;\n  height: 20px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.byui-screenShot .name span {\n  width: 60px;\n  height: 20px;\n  line-height: 20px;\n  background: rgba(0, 0, 0, 0.38);\n  border-radius: 10px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.byui-leftfps,\n.byui-rightfps {\n  -moz-box-ordinal-group: 2;\n  order: 2;\n  position: relative;\n  outline: none;\n  display: block;\n  cursor: pointer;\n  height: 20px;\n  top: 10px;\n}\n.byui-leftfps .name,\n.byui-rightfps .name {\n  text-align: center;\n  font-family: PingFangSC-Regular;\n  font-size: 13px;\n  line-height: 20px;\n  height: 20px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.byui-leftfps .name span,\n.byui-rightfps .name span {\n  width: 60px;\n  height: 20px;\n  line-height: 20px;\n  background: rgba(0, 0, 0, 0.38);\n  border-radius: 10px;\n  display: inline-block;\n  vertical-align: middle;\n}","@charset \"utf-8\";\n/* byui scss全局变量开始 */\n/*浅色风格开始*/\n$base-menu-background: #e7eaed;\n$base-menu-active-background: rgba(#1890ff, 0.5);\n$base-menu-text: #001529;\n$base-menu-text-active: #001529;\n$base-title: #001529;\n/*浅色风格结束*/\n/*黑色风格开始*/\n$base-menu-background: #001529;\n$base-menu-active-background: #1890ff;\n$base-menu-text: #ffffff;\n$base-menu-text-active: #ffffff;\n$base-title: #ffffff;\n/*黑色风格结束*/\n/*蓝色风格开始*/\n$base-menu-background: #2a58ad;\n$base-menu-active-background: #22468a;\n$base-menu-text: #ffffff;\n$base-menu-text-active: #ffffff;\n$base-title: #ffffff;\n/*蓝色风格结束*/\n$base-font-size-small: 12px;\n$base-font-size-default: 14px;\n$base-font-size-big: 16px;\n$base-font-size-bigger: 18px;\n$base-font-size-max: 22px;\n$base-color-header: $base-menu-background;\n$base-color-blue: #1890ff;\n$base-color-white: #ffffff;\n$base-color-black: #000000;\n$base-color-yellow: #ffba00;\n$base-color-red: #ff4d4f;\n$base-color-gray: #97a8be;\n$base-main-width: 1279px;\n$base-border-radius: 2px;\n$base-border-color: #ebeef5;\n$base-form-width: 600px;\n$base-input-height: 32px;\n$base-pagination-height: 28px;\n$base-dialog-title-height: 40px;\n$base-padding: 15px;\n$base-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n$base-font-color: #606266;\n$base-left-menu-width: 225px;\n$base-right-content-width: calc(100vw - 225px);\n$base-left-menu-width-min: 65px;\n$base-right-content-width-min: calc(100vw - 65px);\n/* byui scss全局变量结束 */\n:export {\n  menuText: $base-menu-text;\n  menuTextAcive: $base-menu-text-active;\n  menuBackground: $base-menu-background;\n  menuActiveBackground: $base-menu-active-background;\n  tagViewsActiveBackground: $base-color-blue;\n}\n","@import \"~@/styles/variables.scss\";\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.xgplayer-start {\r\n\tdisplay: none !important;\r\n}\r\n.xgplayer-controls {\r\n\tdisplay: flex !important;\r\n}\r\n.xgplayer-skin-default .xgplayer-playbackrate .name {\r\n\ttop: 10px;\r\n}\r\n.byui-screenShot {\r\n\t-moz-box-ordinal-group: 12;\r\n\torder: 12;\r\n\tposition: relative;\r\n\toutline: none;\r\n\tdisplay: block;\r\n\tcursor: pointer;\r\n\theight: 20px;\r\n\ttop: 10px;\r\n\t.name {\r\n\t\ttext-align: center;\r\n\t\tfont-family: PingFangSC-Regular;\r\n\t\tfont-size: 13px;\r\n\t\tline-height: 20px;\r\n\t\theight: 20px;\r\n\t\tcolor: hsla(0, 0%, 100%, 0.8);\r\n\t\tspan {\r\n\t\t\twidth: 60px;\r\n\t\t\theight: 20px;\r\n\t\t\tline-height: 20px;\r\n\t\t\tbackground: rgba(0, 0, 0, 0.38);\r\n\t\t\tborder-radius: 10px;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tvertical-align: middle;\r\n\t\t}\r\n\t}\r\n}\r\n.byui-leftfps,\r\n.byui-rightfps {\r\n\t-moz-box-ordinal-group: 2;\r\n\torder: 2;\r\n\tposition: relative;\r\n\toutline: none;\r\n\tdisplay: block;\r\n\tcursor: pointer;\r\n\theight: 20px;\r\n\ttop: 10px;\r\n\t.name {\r\n\t\ttext-align: center;\r\n\t\tfont-family: PingFangSC-Regular;\r\n\t\tfont-size: 13px;\r\n\t\tline-height: 20px;\r\n\t\theight: 20px;\r\n\t\tcolor: hsla(0, 0%, 100%, 0.8);\r\n\t\tspan {\r\n\t\t\twidth: 60px;\r\n\t\t\theight: 20px;\r\n\t\t\tline-height: 20px;\r\n\t\t\tbackground: rgba(0, 0, 0, 0.38);\r\n\t\t\tborder-radius: 10px;\r\n\t\t\tdisplay: inline-block;\r\n\t\t\tvertical-align: middle;\r\n\t\t}\r\n\t}\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"menuText": "#ffffff",
	"menuTextAcive": "#ffffff",
	"menuBackground": "#2a58ad",
	"menuActiveBackground": "#22468a",
	"tagViewsActiveBackground": "#1890ff"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js?!./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.2@vue-style-loader??ref--8-oneOf-1-0!./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../_css-loader@3.4.2@css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../_vue-loader@15.9.1@vue-loader/lib/loaders/stylePostLoader.js!../../_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!../../_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./custom.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js").default
var update = add("b627f77c", content, false, {"sourceMap":true,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/_xgplayer-flv.js@2.1.1@xgplayer-flv.js/dist/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_xgplayer-flv.js@2.1.1@xgplayer-flv.js/dist/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! xgplayer */ "./node_modules/_xgplayer@2.6.5@xgplayer/dist/index.js")):undefined}(window,function(e){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(2),s=(i=a)&&i.__esModule?i:{default:i};var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"e",value:function(t,n){t&&!e.FORCE_GLOBAL_TAG||(t=e.GLOBAL_TAG);var i="["+t+"] > "+n;e.ENABLE_CALLBACK&&e.emitter.emit("log","error",i),e.ENABLE_ERROR}},{key:"i",value:function(t,n){t&&!e.FORCE_GLOBAL_TAG||(t=e.GLOBAL_TAG);var i="["+t+"] > "+n;e.ENABLE_CALLBACK&&e.emitter.emit("log","info",i),e.ENABLE_INFO}},{key:"w",value:function(t,n){t&&!e.FORCE_GLOBAL_TAG||(t=e.GLOBAL_TAG);var i="["+t+"] > "+n;e.ENABLE_CALLBACK&&e.emitter.emit("log","warn",i),e.ENABLE_WARN}},{key:"d",value:function(t,n){t&&!e.FORCE_GLOBAL_TAG||(t=e.GLOBAL_TAG);var i="["+t+"] > "+n;e.ENABLE_CALLBACK&&e.emitter.emit("log","debug",i),e.ENABLE_DEBUG}},{key:"v",value:function(t,n){t&&!e.FORCE_GLOBAL_TAG||(t=e.GLOBAL_TAG);var i="["+t+"] > "+n;e.ENABLE_CALLBACK&&e.emitter.emit("log","verbose",i),e.ENABLE_VERBOSE}}]),e}();o.GLOBAL_TAG="flv.js",o.FORCE_GLOBAL_TAG=!1,o.ENABLE_ERROR=!0,o.ENABLE_INFO=!0,o.ENABLE_WARN=!0,o.ENABLE_DEBUG=!0,o.ENABLE_VERBOSE=!0,o.ENABLE_CALLBACK=!1,o.emitter=new s.default,t.default=o,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=t.RuntimeException=function(){function e(t){s(this,e),this._message=t}return i(e,[{key:"toString",value:function(){return this.name+": "+this.message}},{key:"name",get:function(){return"RuntimeException"}},{key:"message",get:function(){return this._message}}]),e}();t.IllegalStateException=function(e){function t(e){return s(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,o),i(t,[{key:"name",get:function(){return"IllegalStateException"}}]),t}(),t.InvalidArgumentException=function(e){function t(e){return s(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,o),i(t,[{key:"name",get:function(){return"InvalidArgumentException"}}]),t}(),t.NotImplementedException=function(e){function t(e){return s(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,o),i(t,[{key:"name",get:function(){return"NotImplementedException"}}]),t}()},function(e,t,n){"use strict";var i,r="object"==typeof Reflect?Reflect:null,a=r&&"function"==typeof r.apply?r.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};i=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var u=10;function l(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function d(e,t,n,i){var r,a,s,o;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(a=e._events)?(a=e._events=Object.create(null),e._eventsCount=0):(void 0!==a.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),a=e._events),s=a[t]),void 0===s)s=a[t]=n,++e._eventsCount;else if("function"==typeof s?s=a[t]=i?[n,s]:[s,n]:i?s.unshift(n):s.push(n),(r=l(e))>0&&s.length>r&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=s.length,o=u,console&&console.warn&&console.warn(o)}return e}function h(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=function(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,a(this.listener,this.target,e))}.bind(i);return r.listener=n,i.wrapFn=r,r}function f(e,t,n){var i=e._events;if(void 0===i)return[];var r=i[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):_(r,r.length)}function c(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function _(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");u=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return l(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,r=this._events;if(void 0!==r)i=i&&void 0===r.error;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var o=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw o.context=s,o}var u=r[e];if(void 0===u)return!1;if("function"==typeof u)a(u,this,t);else{var l=u.length,d=_(u,l);for(n=0;n<l;++n)a(d[n],this,t)}return!0},o.prototype.addListener=function(e,t){return d(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return d(this,e,t,!0)},o.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,h(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,h(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,i,r,a,s;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,a=n.length-1;a>=0;a--)if(n[a]===t||n[a].listener===t){s=n[a].listener,r=a;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,a=Object.keys(n);for(i=0;i<a.length;++i)"removeListener"!==(r=a[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},o.prototype.listeners=function(e){return f(this,e,!0)},o.prototype.rawListeners=function(e){return f(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):c.call(e,t)},o.prototype.listenerCount=c,o.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseLoader=t.LoaderErrors=t.LoaderStatus=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(1);var a=t.LoaderStatus={kIdle:0,kConnecting:1,kBuffering:2,kError:3,kComplete:4};t.LoaderErrors={OK:"OK",EXCEPTION:"Exception",HTTP_STATUS_CODE_INVALID:"HttpStatusCodeInvalid",CONNECTING_TIMEOUT:"ConnectingTimeout",EARLY_EOF:"EarlyEof",UNRECOVERABLE_EARLY_EOF:"UnrecoverableEarlyEof"},t.BaseLoader=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._type=t||"undefined",this._status=a.kIdle,this._needStash=!1,this._onContentLengthKnown=null,this._onURLRedirect=null,this._onDataArrival=null,this._onError=null,this._onComplete=null}return i(e,[{key:"destroy",value:function(){this._status=a.kIdle,this._onContentLengthKnown=null,this._onURLRedirect=null,this._onDataArrival=null,this._onError=null,this._onComplete=null}},{key:"isWorking",value:function(){return this._status===a.kConnecting||this._status===a.kBuffering}},{key:"open",value:function(e,t){throw new r.NotImplementedException("Unimplemented abstract function!")}},{key:"abort",value:function(){throw new r.NotImplementedException("Unimplemented abstract function!")}},{key:"type",get:function(){return this._type}},{key:"status",get:function(){return this._status}},{key:"needStashBuffer",get:function(){return this._needStash}},{key:"onContentLengthKnown",get:function(){return this._onContentLengthKnown},set:function(e){this._onContentLengthKnown=e}},{key:"onURLRedirect",get:function(){return this._onURLRedirect},set:function(e){this._onURLRedirect=e}},{key:"onDataArrival",get:function(){return this._onDataArrival},set:function(e){this._onDataArrival=e}},{key:"onError",get:function(){return this._onError},set:function(e){this._onError=e}},{key:"onComplete",get:function(){return this._onComplete},set:function(e){this._onComplete=e}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={};!function(){var e=self.navigator.userAgent.toLowerCase(),t=/(edge)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(chrome)[ \/]([\w.]+)/.exec(e)||/(iemobile)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(firefox)[ \/]([\w.]+)/.exec(e)||[],n=/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(android)/.exec(e)||/(windows)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||[],r={browser:t[5]||t[3]||t[1]||"",version:t[2]||t[4]||"0",majorVersion:t[4]||t[2]||"0",platform:n[0]||""},a={};if(r.browser){a[r.browser]=!0;var s=r.majorVersion.split(".");a.version={major:parseInt(r.majorVersion,10),string:r.version},s.length>1&&(a.version.minor=parseInt(s[1],10)),s.length>2&&(a.version.build=parseInt(s[2],10))}if(r.platform&&(a[r.platform]=!0),(a.chrome||a.opr||a.safari)&&(a.webkit=!0),a.rv||a.iemobile){a.rv&&delete a.rv;r.browser="msie",a.msie=!0}if(a.edge){delete a.edge;r.browser="msedge",a.msedge=!0}if(a.opr){r.browser="opera",a.opera=!0}if(a.safari&&a.android){r.browser="android",a.android=!0}for(var o in a.name=r.browser,a.platform=r.platform,i)i.hasOwnProperty(o)&&delete i[o];Object.assign(i,a)}(),t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={IO_ERROR:"io_error",DEMUX_ERROR:"demux_error",INIT_SEGMENT:"init_segment",MEDIA_SEGMENT:"media_segment",LOADING_COMPLETE:"loading_complete",RECOVERED_EARLY_EOF:"recovered_early_eof",MEDIA_INFO:"media_info",STATISTICS_INFO:"statistics_info",RECOMMEND_SEEKPOINT:"recommend_seekpoint",LOADED_SEI:"loaded_sei"},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createDefaultConfig=function(){return Object.assign({},i)};var i=t.defaultConfig={enableWorker:!1,enableStashBuffer:!0,stashInitialSize:void 0,isLive:!1,lazyLoad:!0,lazyLoadMaxDuration:180,lazyLoadRecoverDuration:30,deferLoadAfterSourceOpen:!0,autoCleanupMaxBackwardDuration:180,autoCleanupMinBackwardDuration:120,statisticsInfoReportInterval:600,fixAudioTimestampGap:!0,accurateSeek:!1,seekType:"range",seekParamStart:"bstart",seekParamEnd:"bend",rangeLoadZeroStart:!1,customSeekHandler:void 0,reuseRedirectedURL:!1}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={ERROR:"error",LOADING_COMPLETE:"loading_complete",RECOVERED_EARLY_EOF:"recovered_early_eof",MEDIA_INFO:"media_info",STATISTICS_INFO:"statistics_info",LOADED_SEI:"loaded_sei"},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=s(n(2)),a=s(n(0));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"getConfig",value:function(){return{globalTag:a.default.GLOBAL_TAG,forceGlobalTag:a.default.FORCE_GLOBAL_TAG,enableVerbose:a.default.ENABLE_VERBOSE,enableDebug:a.default.ENABLE_DEBUG,enableInfo:a.default.ENABLE_INFO,enableWarn:a.default.ENABLE_WARN,enableError:a.default.ENABLE_ERROR,enableCallback:a.default.ENABLE_CALLBACK}}},{key:"applyConfig",value:function(e){a.default.GLOBAL_TAG=e.globalTag,a.default.FORCE_GLOBAL_TAG=e.forceGlobalTag,a.default.ENABLE_VERBOSE=e.enableVerbose,a.default.ENABLE_DEBUG=e.enableDebug,a.default.ENABLE_INFO=e.enableInfo,a.default.ENABLE_WARN=e.enableWarn,a.default.ENABLE_ERROR=e.enableError,a.default.ENABLE_CALLBACK=e.enableCallback}},{key:"_notifyChange",value:function(){var t=e.emitter;if(t.listenerCount("change")>0){var n=e.getConfig();t.emit("change",n)}}},{key:"registerListener",value:function(t){e.emitter.addListener("change",t)}},{key:"removeListener",value:function(t){e.emitter.removeListener("change",t)}},{key:"addLogListener",value:function(t){a.default.emitter.addListener("log",t),a.default.emitter.listenerCount("log")>0&&(a.default.ENABLE_CALLBACK=!0,e._notifyChange())}},{key:"removeLogListener",value:function(t){a.default.emitter.removeListener("log",t),0===a.default.emitter.listenerCount("log")&&(a.default.ENABLE_CALLBACK=!1,e._notifyChange())}},{key:"forceGlobalTag",get:function(){return a.default.FORCE_GLOBAL_TAG},set:function(t){a.default.FORCE_GLOBAL_TAG=t,e._notifyChange()}},{key:"globalTag",get:function(){return a.default.GLOBAL_TAG},set:function(t){a.default.GLOBAL_TAG=t,e._notifyChange()}},{key:"enableAll",get:function(){return a.default.ENABLE_VERBOSE&&a.default.ENABLE_DEBUG&&a.default.ENABLE_INFO&&a.default.ENABLE_WARN&&a.default.ENABLE_ERROR},set:function(t){a.default.ENABLE_VERBOSE=t,a.default.ENABLE_DEBUG=t,a.default.ENABLE_INFO=t,a.default.ENABLE_WARN=t,a.default.ENABLE_ERROR=t,e._notifyChange()}},{key:"enableDebug",get:function(){return a.default.ENABLE_DEBUG},set:function(t){a.default.ENABLE_DEBUG=t,e._notifyChange()}},{key:"enableVerbose",get:function(){return a.default.ENABLE_VERBOSE},set:function(t){a.default.ENABLE_VERBOSE=t,e._notifyChange()}},{key:"enableInfo",get:function(){return a.default.ENABLE_INFO},set:function(t){a.default.ENABLE_INFO=t,e._notifyChange()}},{key:"enableWarn",get:function(){return a.default.ENABLE_WARN},set:function(t){a.default.ENABLE_WARN=t,e._notifyChange()}},{key:"enableError",get:function(){return a.default.ENABLE_ERROR},set:function(t){a.default.ENABLE_ERROR=t,e._notifyChange()}}]),e}();o.emitter=new r.default,t.default=o,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mimeType=null,this.duration=null,this.hasAudio=null,this.hasVideo=null,this.audioCodec=null,this.videoCodec=null,this.audioDataRate=null,this.videoDataRate=null,this.audioSampleRate=null,this.audioChannelCount=null,this.width=null,this.height=null,this.fps=null,this.profile=null,this.level=null,this.refFrames=null,this.chromaFormat=null,this.sarNum=null,this.sarDen=null,this.metadata=null,this.segments=null,this.segmentCount=null,this.hasKeyframesIndex=null,this.keyframesIndex=null}return i(e,[{key:"isComplete",value:function(){var e=!1===this.hasAudio||!0===this.hasAudio&&null!=this.audioCodec&&null!=this.audioSampleRate&&null!=this.audioChannelCount,t=!1===this.hasVideo||!0===this.hasVideo&&null!=this.videoCodec&&null!=this.width&&null!=this.height&&null!=this.fps&&null!=this.profile&&null!=this.level&&null!=this.refFrames&&null!=this.chromaFormat&&null!=this.sarNum&&null!=this.sarDen;return null!=this.mimeType&&null!=this.duration&&null!=this.metadata&&null!=this.hasKeyframesIndex&&e&&t}},{key:"isSeekable",value:function(){return!0===this.hasKeyframesIndex}},{key:"getNearestKeyframe",value:function(e){if(null==this.keyframesIndex)return null;var t=this.keyframesIndex,n=this._search(t.times,e);return{index:n,milliseconds:t.times[n],fileposition:t.filepositions[n]}}},{key:"_search",value:function(e,t){var n=0,i=e.length-1,r=0,a=0,s=i;for(t<e[0]&&(n=0,a=s+1);a<=s;){if((r=a+Math.floor((s-a)/2))===i||t>=e[r]&&t<e[r+1]){n=r;break}e[r]<t?a=r+1:s=r-1}return n}}]),e}();t.default=r,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={OK:"OK",FORMAT_ERROR:"FormatError",FORMAT_UNSUPPORTED:"FormatUnsupported",CODEC_UNSUPPORTED:"CodecUnsupported"},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"install",value:function(){Object.setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Object.assign=Object.assign||function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(e),n=1;n<arguments.length;n++){var i=arguments[n];if(null!=i)for(var r in i)i.hasOwnProperty(r)&&(t[r]=i[r])}return t},"function"!=typeof self.Promise&&n(22).polyfill()}}]),e}();r.install(),t.default=r,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=_(n(0)),a=_(n(13)),s=n(3),o=_(n(26)),u=_(n(27)),l=(_(n(28)),_(n(29))),d=_(n(30)),h=_(n(31)),f=_(n(32)),c=n(1);function _(e){return e&&e.__esModule?e:{default:e}}var m=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.TAG="IOController",this._config=n,this._extraData=i,this._stashInitialSize=393216,null!=n.stashInitialSize&&n.stashInitialSize>0&&(this._stashInitialSize=n.stashInitialSize),this._stashUsed=0,this._stashSize=this._stashInitialSize,this._bufferSize=3145728,this._stashBuffer=new ArrayBuffer(this._bufferSize),this._stashByteStart=0,this._enableStash=!0,!1===n.enableStashBuffer&&(this._enableStash=!1),this._loader=null,this._loaderClass=null,this._seekHandler=null,this._dataSource=t,this._isWebSocketURL=/wss?:\/\/(.+?)/.test(t.url),this._refTotalLength=t.filesize?t.filesize:null,this._totalLength=this._refTotalLength,this._fullRequestFlag=!1,this._currentRange=null,this._redirectedURL=null,this._speedNormalized=0,this._speedSampler=new a.default,this._speedNormalizeList=[64,128,256,384,512,768,1024,1536,2048,3072,4096],this._isEarlyEofReconnecting=!1,this._paused=!1,this._resumeFrom=0,this._onDataArrival=null,this._onSeeked=null,this._onError=null,this._onComplete=null,this._onRedirect=null,this._onRecoveredEarlyEof=null,this._selectSeekHandler(),this._selectLoader(),this._createLoader()}return i(e,[{key:"destroy",value:function(){this._loader.isWorking()&&this._loader.abort(),this._loader.destroy(),this._loader=null,this._loaderClass=null,this._dataSource=null,this._stashBuffer=null,this._stashUsed=this._stashSize=this._bufferSize=this._stashByteStart=0,this._currentRange=null,this._speedSampler=null,this._isEarlyEofReconnecting=!1,this._onDataArrival=null,this._onSeeked=null,this._onError=null,this._onComplete=null,this._onRedirect=null,this._onRecoveredEarlyEof=null,this._extraData=null}},{key:"isWorking",value:function(){return this._loader&&this._loader.isWorking()&&!this._paused}},{key:"isPaused",value:function(){return this._paused}},{key:"_selectSeekHandler",value:function(){var e=this._config;if("range"===e.seekType)this._seekHandler=new h.default(this._config.rangeLoadZeroStart);else if("param"===e.seekType){var t=e.seekParamStart||"bstart",n=e.seekParamEnd||"bend";this._seekHandler=new f.default(t,n)}else{if("custom"!==e.seekType)throw new c.InvalidArgumentException("Invalid seekType in config: "+e.seekType);if("function"!=typeof e.customSeekHandler)throw new c.InvalidArgumentException("Custom seekType specified in config but invalid customSeekHandler!");this._seekHandler=new e.customSeekHandler}}},{key:"_selectLoader",value:function(){if(this._isWebSocketURL)this._loaderClass=d.default;else if(o.default.isSupported())this._loaderClass=o.default;else if(u.default.isSupported())this._loaderClass=u.default;else{if(!l.default.isSupported())throw new c.RuntimeException("Your browser doesn't support xhr with arraybuffer responseType!");this._loaderClass=l.default}}},{key:"_createLoader",value:function(){this._loader=new this._loaderClass(this._seekHandler,this._config),!1===this._loader.needStashBuffer&&(this._enableStash=!1),this._loader.onContentLengthKnown=this._onContentLengthKnown.bind(this),this._loader.onURLRedirect=this._onURLRedirect.bind(this),this._loader.onDataArrival=this._onLoaderChunkArrival.bind(this),this._loader.onComplete=this._onLoaderComplete.bind(this),this._loader.onError=this._onLoaderError.bind(this)}},{key:"open",value:function(e){this._currentRange={from:0,to:-1},e&&(this._currentRange.from=e),this._speedSampler.reset(),e||(this._fullRequestFlag=!0),this._loader.open(this._dataSource,Object.assign({},this._currentRange))}},{key:"abort",value:function(){this._loader.abort(),this._paused&&(this._paused=!1,this._resumeFrom=0)}},{key:"pause",value:function(){this.isWorking()&&(this._loader.abort(),0!==this._stashUsed?(this._resumeFrom=this._stashByteStart,this._currentRange.to=this._stashByteStart-1):this._resumeFrom=this._currentRange.to+1,this._stashUsed=0,this._stashByteStart=0,this._paused=!0)}},{key:"resume",value:function(){if(this._paused){this._paused=!1;var e=this._resumeFrom;this._resumeFrom=0,this._internalSeek(e,!0)}}},{key:"seek",value:function(e){this._paused=!1,this._stashUsed=0,this._stashByteStart=0,this._internalSeek(e,!0)}},{key:"_internalSeek",value:function(e,t){this._loader.isWorking()&&this._loader.abort(),this._flushStashBuffer(t),this._loader.destroy(),this._loader=null;var n={from:e,to:-1};this._currentRange={from:n.from,to:-1},this._speedSampler.reset(),this._stashSize=this._stashInitialSize,this._createLoader(),this._loader.open(this._dataSource,n),this._onSeeked&&this._onSeeked()}},{key:"updateUrl",value:function(e){if(!e||"string"!=typeof e||0===e.length)throw new c.InvalidArgumentException("Url must be a non-empty string!");this._dataSource.url=e}},{key:"_expandBuffer",value:function(e){for(var t=this._stashSize;t+1048576<e;)t*=2;if((t+=1048576)!==this._bufferSize){var n=new ArrayBuffer(t);if(this._stashUsed>0){var i=new Uint8Array(this._stashBuffer,0,this._stashUsed);new Uint8Array(n,0,t).set(i,0)}this._stashBuffer=n,this._bufferSize=t}}},{key:"_normalizeSpeed",value:function(e){var t=this._speedNormalizeList,n=t.length-1,i=0,r=0,a=n;if(e<t[0])return t[0];for(;r<=a;){if((i=r+Math.floor((a-r)/2))===n||e>=t[i]&&e<t[i+1])return t[i];t[i]<e?r=i+1:a=i-1}}},{key:"_adjustStashSize",value:function(e){var t=0;(t=this._config.isLive?e:e<512?e:e>=512&&e<=1024?Math.floor(1.5*e):2*e)>8192&&(t=8192);var n=1024*t+1048576;this._bufferSize<n&&this._expandBuffer(n),this._stashSize=1024*t}},{key:"_dispatchChunks",value:function(e,t){return this._currentRange.to=t+e.byteLength-1,this._onDataArrival(e,t)}},{key:"_onURLRedirect",value:function(e){this._redirectedURL=e,this._onRedirect&&this._onRedirect(e)}},{key:"_onContentLengthKnown",value:function(e){e&&this._fullRequestFlag&&(this._totalLength=e,this._fullRequestFlag=!1)}},{key:"_onLoaderChunkArrival",value:function(e,t,n){if(!this._onDataArrival)throw new c.IllegalStateException("IOController: No existing consumer (onDataArrival) callback!");if(!this._paused){this._isEarlyEofReconnecting&&(this._isEarlyEofReconnecting=!1,this._onRecoveredEarlyEof&&this._onRecoveredEarlyEof()),this._speedSampler.addBytes(e.byteLength);var i=this._speedSampler.lastSecondKBps;if(0!==i){var r=this._normalizeSpeed(i);this._speedNormalized!==r&&(this._speedNormalized=r,this._adjustStashSize(r))}if(this._enableStash)if(0===this._stashUsed&&0===this._stashByteStart&&(this._stashByteStart=t),this._stashUsed+e.byteLength<=this._stashSize){new Uint8Array(this._stashBuffer,0,this._stashSize).set(new Uint8Array(e),this._stashUsed),this._stashUsed+=e.byteLength}else{var a=new Uint8Array(this._stashBuffer,0,this._bufferSize);if(this._stashUsed>0){var s=this._stashBuffer.slice(0,this._stashUsed),o=this._dispatchChunks(s,this._stashByteStart);if(o<s.byteLength){if(o>0){var u=new Uint8Array(s,o);a.set(u,0),this._stashUsed=u.byteLength,this._stashByteStart+=o}}else this._stashUsed=0,this._stashByteStart+=o;this._stashUsed+e.byteLength>this._bufferSize&&(this._expandBuffer(this._stashUsed+e.byteLength),a=new Uint8Array(this._stashBuffer,0,this._bufferSize)),a.set(new Uint8Array(e),this._stashUsed),this._stashUsed+=e.byteLength}else{var l=this._dispatchChunks(e,t);if(l<e.byteLength){var d=e.byteLength-l;d>this._bufferSize&&(this._expandBuffer(d),a=new Uint8Array(this._stashBuffer,0,this._bufferSize)),a.set(new Uint8Array(e,l),0),this._stashUsed+=d,this._stashByteStart=t+l}}}else if(0===this._stashUsed){var h=this._dispatchChunks(e,t);if(h<e.byteLength){var f=e.byteLength-h;f>this._bufferSize&&this._expandBuffer(f),new Uint8Array(this._stashBuffer,0,this._bufferSize).set(new Uint8Array(e,h),0),this._stashUsed+=f,this._stashByteStart=t+h}}else{this._stashUsed+e.byteLength>this._bufferSize&&this._expandBuffer(this._stashUsed+e.byteLength);var _=new Uint8Array(this._stashBuffer,0,this._bufferSize);_.set(new Uint8Array(e),this._stashUsed),this._stashUsed+=e.byteLength;var m=this._dispatchChunks(this._stashBuffer.slice(0,this._stashUsed),this._stashByteStart);if(m<this._stashUsed&&m>0){var p=new Uint8Array(this._stashBuffer,m);_.set(p,0)}this._stashUsed-=m,this._stashByteStart+=m}}}},{key:"_flushStashBuffer",value:function(e){if(this._stashUsed>0){var t=this._stashBuffer.slice(0,this._stashUsed),n=this._dispatchChunks(t,this._stashByteStart),i=t.byteLength-n;if(n<t.byteLength){if(!e){if(n>0){var a=new Uint8Array(this._stashBuffer,0,this._bufferSize),s=new Uint8Array(t,n);a.set(s,0),this._stashUsed=s.byteLength,this._stashByteStart+=n}return 0}r.default.w(this.TAG,i+" bytes unconsumed data remain when flush buffer, dropped")}return this._stashUsed=0,this._stashByteStart=0,i}return 0}},{key:"_onLoaderComplete",value:function(e,t){this._flushStashBuffer(!0),this._onComplete&&this._onComplete(this._extraData)}},{key:"_onLoaderError",value:function(e,t){switch(r.default.e(this.TAG,"Loader error, code = "+t.code+", msg = "+t.msg),this._flushStashBuffer(!1),this._isEarlyEofReconnecting&&(this._isEarlyEofReconnecting=!1,e=s.LoaderErrors.UNRECOVERABLE_EARLY_EOF),e){case s.LoaderErrors.EARLY_EOF:if(!this._config.isLive&&this._totalLength){var n=this._currentRange.to+1;return void(n<this._totalLength&&(r.default.w(this.TAG,"Connection lost, trying reconnect..."),this._isEarlyEofReconnecting=!0,this._internalSeek(n,!1)))}e=s.LoaderErrors.UNRECOVERABLE_EARLY_EOF;break;case s.LoaderErrors.UNRECOVERABLE_EARLY_EOF:case s.LoaderErrors.CONNECTING_TIMEOUT:case s.LoaderErrors.HTTP_STATUS_CODE_INVALID:case s.LoaderErrors.EXCEPTION:}if(!this._onError)throw new c.RuntimeException("IOException: "+t.msg);this._onError(e,t)}},{key:"status",get:function(){return this._loader.status}},{key:"extraData",get:function(){return this._extraData},set:function(e){this._extraData=e}},{key:"onDataArrival",get:function(){return this._onDataArrival},set:function(e){this._onDataArrival=e}},{key:"onSeeked",get:function(){return this._onSeeked},set:function(e){this._onSeeked=e}},{key:"onError",get:function(){return this._onError},set:function(e){this._onError=e}},{key:"onComplete",get:function(){return this._onComplete},set:function(e){this._onComplete=e}},{key:"onRedirect",get:function(){return this._onRedirect},set:function(e){this._onRedirect=e}},{key:"onRecoveredEarlyEof",get:function(){return this._onRecoveredEarlyEof},set:function(e){this._onRecoveredEarlyEof=e}},{key:"currentURL",get:function(){return this._dataSource.url}},{key:"hasRedirect",get:function(){return null!=this._redirectedURL||null!=this._dataSource.redirectedURL}},{key:"currentRedirectedURL",get:function(){return this._redirectedURL||this._dataSource.redirectedURL}},{key:"currentSpeed",get:function(){return this._loaderClass===l.default?this._loader.currentSpeed:this._speedSampler.lastSecondKBps}},{key:"loaderType",get:function(){return this._loader.type}}]),e}();t.default=m,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._firstCheckpoint=0,this._lastCheckpoint=0,this._intervalBytes=0,this._totalBytes=0,this._lastSecondBytes=0,self.performance&&self.performance.now?this._now=self.performance.now.bind(self.performance):this._now=Date.now}return i(e,[{key:"reset",value:function(){this._firstCheckpoint=this._lastCheckpoint=0,this._totalBytes=this._intervalBytes=0,this._lastSecondBytes=0}},{key:"addBytes",value:function(e){0===this._firstCheckpoint?(this._firstCheckpoint=this._now(),this._lastCheckpoint=this._firstCheckpoint,this._intervalBytes+=e,this._totalBytes+=e):this._now()-this._lastCheckpoint<1e3?(this._intervalBytes+=e,this._totalBytes+=e):(this._lastSecondBytes=this._intervalBytes,this._intervalBytes=e,this._totalBytes+=e,this._lastCheckpoint=this._now())}},{key:"currentKBps",get:function(){this.addBytes(0);var e=(this._now()-this._lastCheckpoint)/1e3;return 0==e&&(e=1),this._intervalBytes/e/1024}},{key:"lastSecondKBps",get:function(){return this.addBytes(0),0!==this._lastSecondBytes?this._lastSecondBytes/1024:this._now()-this._lastCheckpoint>=500?this.currentKBps:0}},{key:"averageKBps",get:function(){var e=(this._now()-this._firstCheckpoint)/1e3;return this._totalBytes/e/1024}}]),e}();t.default=r,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=c(n(2)),a=c(n(0)),s=c(n(4)),o=c(n(9)),u=c(n(35)),l=c(n(40)),d=c(n(10)),h=c(n(12)),f=c(n(5));n(3);function c(e){return e&&e.__esModule?e:{default:e}}var _=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.TAG="TransmuxingController",this._emitter=new r.default,this._config=n,t.segments||(t.segments=[{duration:t.duration,filesize:t.filesize,url:t.url}]),"boolean"!=typeof t.cors&&(t.cors=!0),"boolean"!=typeof t.withCredentials&&(t.withCredentials=!1),this._mediaDataSource=t,this._currentSegmentIndex=0;var i=0;this._mediaDataSource.segments.forEach(function(e){e.timestampBase=i,i+=e.duration,e.cors=t.cors,e.withCredentials=t.withCredentials,n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy)}),isNaN(i)||this._mediaDataSource.duration===i||(this._mediaDataSource.duration=i),this._mediaInfo=null,this._demuxer=null,this._remuxer=null,this._ioctl=null,this._pendingSeekTime=null,this._pendingResolveSeekPoint=null,this._statisticsReporter=null}return i(e,[{key:"destroy",value:function(){this._mediaInfo=null,this._mediaDataSource=null,this._statisticsReporter&&this._disableStatisticsReporter(),this._ioctl&&(this._ioctl.destroy(),this._ioctl=null),this._demuxer&&(this._demuxer.destroy(),this._demuxer=null),this._remuxer&&(this._remuxer.destroy(),this._remuxer=null),this._emitter.removeAllListeners(),this._emitter=null}},{key:"on",value:function(e,t){this._emitter.addListener(e,t)}},{key:"off",value:function(e,t){this._emitter.removeListener(e,t)}},{key:"start",value:function(){this._loadSegment(0),this._enableStatisticsReporter()}},{key:"_loadSegment",value:function(e,t){this._currentSegmentIndex=e;var n=this._mediaDataSource.segments[e],i=this._ioctl=new h.default(n,this._config,e);i.onError=this._onIOException.bind(this),i.onSeeked=this._onIOSeeked.bind(this),i.onComplete=this._onIOComplete.bind(this),i.onRedirect=this._onIORedirect.bind(this),i.onRecoveredEarlyEof=this._onIORecoveredEarlyEof.bind(this),t?this._demuxer.bindDataSource(this._ioctl):i.onDataArrival=this._onInitChunkArrival.bind(this),i.open(t)}},{key:"stop",value:function(){this._internalAbort(),this._disableStatisticsReporter()}},{key:"_internalAbort",value:function(){this._ioctl&&(this._ioctl.destroy(),this._ioctl=null)}},{key:"pause",value:function(){this._ioctl&&this._ioctl.isWorking()&&(this._ioctl.pause(),this._disableStatisticsReporter())}},{key:"resume",value:function(){this._ioctl&&this._ioctl.isPaused()&&(this._ioctl.resume(),this._enableStatisticsReporter())}},{key:"seek",value:function(e){if(null!=this._mediaInfo&&this._mediaInfo.isSeekable()){var t=this._searchSegmentIndexContains(e);if(t===this._currentSegmentIndex){var n=this._mediaInfo.segments[t];if(null==n)this._pendingSeekTime=e;else{var i=n.getNearestKeyframe(e);this._remuxer.seek(i.milliseconds),this._ioctl.seek(i.fileposition),this._pendingResolveSeekPoint=i.milliseconds}}else{var r=this._mediaInfo.segments[t];if(null==r)this._pendingSeekTime=e,this._internalAbort(),this._remuxer.seek(),this._remuxer.insertDiscontinuity(),this._loadSegment(t);else{var a=r.getNearestKeyframe(e);this._internalAbort(),this._remuxer.seek(e),this._remuxer.insertDiscontinuity(),this._demuxer.resetMediaInfo(),this._demuxer.timestampBase=this._mediaDataSource.segments[t].timestampBase,this._loadSegment(t,a.fileposition),this._pendingResolveSeekPoint=a.milliseconds,this._reportSegmentMediaInfo(t)}}this._enableStatisticsReporter()}}},{key:"_searchSegmentIndexContains",value:function(e){for(var t=this._mediaDataSource.segments,n=t.length-1,i=0;i<t.length;i++)if(e<t[i].timestampBase){n=i-1;break}return n}},{key:"_onInitChunkArrival",value:function(e,t){var n=this,i=null,r=0;if(t>0)this._demuxer.bindDataSource(this._ioctl),this._demuxer.timestampBase=this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase,r=this._demuxer.parseChunks(e,t);else if((i=u.default.probe(e)).match){this._demuxer=new u.default(i,this._config),this._remuxer||(this._remuxer=new l.default(this._config));var s=this._mediaDataSource;null==s.duration||isNaN(s.duration)||(this._demuxer.overridedDuration=s.duration),"boolean"==typeof s.hasAudio&&(this._demuxer.overridedHasAudio=s.hasAudio),"boolean"==typeof s.hasVideo&&(this._demuxer.overridedHasVideo=s.hasVideo),this._demuxer.timestampBase=s.segments[this._currentSegmentIndex].timestampBase,this._demuxer.onError=this._onDemuxException.bind(this),this._demuxer.onMediaInfo=this._onMediaInfo.bind(this),this._demuxer.onLoadedSei=this._onLoadedSei.bind(this),this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)),this._remuxer.onInitSegment=this._onRemuxerInitSegmentArrival.bind(this),this._remuxer.onMediaSegment=this._onRemuxerMediaSegmentArrival.bind(this),r=this._demuxer.parseChunks(e,t)}else i=null,a.default.e(this.TAG,"Non-FLV, Unsupported media type!"),Promise.resolve().then(function(){n._internalAbort()}),this._emitter.emit(f.default.DEMUX_ERROR,d.default.FORMAT_UNSUPPORTED,"Non-FLV, Unsupported media type"),r=0;return r}},{key:"_onMediaInfo",value:function(e){var t=this;null==this._mediaInfo&&(this._mediaInfo=Object.assign({},e),this._mediaInfo.keyframesIndex=null,this._mediaInfo.segments=[],this._mediaInfo.segmentCount=this._mediaDataSource.segments.length,Object.setPrototypeOf(this._mediaInfo,o.default.prototype));var n=Object.assign({},e);Object.setPrototypeOf(n,o.default.prototype),this._mediaInfo.segments[this._currentSegmentIndex]=n,this._reportSegmentMediaInfo(this._currentSegmentIndex),null!=this._pendingSeekTime&&Promise.resolve().then(function(){var e=t._pendingSeekTime;t._pendingSeekTime=null,t.seek(e)})}},{key:"_onLoadedSei",value:function(e,t){this._emitter.emit(f.default.LOADED_SEI,e,t)}},{key:"_onIOSeeked",value:function(){this._remuxer.insertDiscontinuity()}},{key:"_onIOComplete",value:function(e){var t=e+1;t<this._mediaDataSource.segments.length?(this._internalAbort(),this._remuxer.flushStashedSamples(),this._loadSegment(t)):(this._remuxer.flushStashedSamples(),this._emitter.emit(f.default.LOADING_COMPLETE),this._disableStatisticsReporter())}},{key:"_onIORedirect",value:function(e){var t=this._ioctl.extraData;this._mediaDataSource.segments[t].redirectedURL=e}},{key:"_onIORecoveredEarlyEof",value:function(){this._emitter.emit(f.default.RECOVERED_EARLY_EOF)}},{key:"_onIOException",value:function(e,t){a.default.e(this.TAG,"IOException: type = "+e+", code = "+t.code+", msg = "+t.msg),this._emitter.emit(f.default.IO_ERROR,e,t),this._disableStatisticsReporter()}},{key:"_onDemuxException",value:function(e,t){a.default.e(this.TAG,"DemuxException: type = "+e+", info = "+t),this._emitter.emit(f.default.DEMUX_ERROR,e,t)}},{key:"_onRemuxerInitSegmentArrival",value:function(e,t){this._emitter.emit(f.default.INIT_SEGMENT,e,t)}},{key:"_onRemuxerMediaSegmentArrival",value:function(e,t){if(null==this._pendingSeekTime&&(this._emitter.emit(f.default.MEDIA_SEGMENT,e,t),null!=this._pendingResolveSeekPoint&&"video"===e)){var n=t.info.syncPoints,i=this._pendingResolveSeekPoint;this._pendingResolveSeekPoint=null,s.default.safari&&n.length>0&&n[0].originalDts===i&&(i=n[0].pts),this._emitter.emit(f.default.RECOMMEND_SEEKPOINT,i)}}},{key:"_enableStatisticsReporter",value:function(){null==this._statisticsReporter&&(this._statisticsReporter=self.setInterval(this._reportStatisticsInfo.bind(this),this._config.statisticsInfoReportInterval))}},{key:"_disableStatisticsReporter",value:function(){this._statisticsReporter&&(self.clearInterval(this._statisticsReporter),this._statisticsReporter=null)}},{key:"_reportSegmentMediaInfo",value:function(e){var t=this._mediaInfo.segments[e],n=Object.assign({},t);n.duration=this._mediaInfo.duration,n.segmentCount=this._mediaInfo.segmentCount,delete n.segments,delete n.keyframesIndex,this._emitter.emit(f.default.MEDIA_INFO,n)}},{key:"_reportStatisticsInfo",value:function(){var e={};e.url=this._ioctl.currentURL,e.hasRedirect=this._ioctl.hasRedirect,e.hasRedirect&&(e.redirectedURL=this._ioctl.currentRedirectedURL),e.speed=this._ioctl.currentSpeed,e.loaderType=this._ioctl.loaderType,e.currentSegmentIndex=this._currentSegmentIndex,e.totalSegmentCount=this._mediaDataSource.segments.length,this._emitter.emit(f.default.STATISTICS_INFO,e)}}]),e}();t.default=_,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.SampleInfo=function e(t,n,i,a,s){r(this,e),this.dts=t,this.pts=n,this.duration=i,this.originalDts=a,this.isSyncPoint=s,this.fileposition=null},t.MediaSegmentInfo=function(){function e(){r(this,e),this.beginDts=0,this.endDts=0,this.beginPts=0,this.endPts=0,this.originalBeginDts=0,this.originalEndDts=0,this.syncPoints=[],this.firstSample=null,this.lastSample=null}return i(e,[{key:"appendSyncPoint",value:function(e){e.isSyncPoint=!0,this.syncPoints.push(e)}}]),e}(),t.IDRSampleList=function(){function e(){r(this,e),this._list=[]}return i(e,[{key:"clear",value:function(){this._list=[]}},{key:"appendArray",value:function(e){var t=this._list;0!==e.length&&(t.length>0&&e[0].originalDts<t[t.length-1].originalDts&&this.clear(),Array.prototype.push.apply(t,e))}},{key:"getLastSyncPointBeforeDts",value:function(e){if(0==this._list.length)return null;var t=this._list,n=0,i=t.length-1,r=0,a=0,s=i;for(e<t[0].dts&&(n=0,a=s+1);a<=s;){if((r=a+Math.floor((s-a)/2))===i||e>=t[r].dts&&e<t[r+1].dts){n=r;break}t[r].dts<e?a=r+1:s=r-1}return this._list[n]}}]),e}(),t.MediaSegmentInfoList=function(){function e(t){r(this,e),this._type=t,this._list=[],this._lastAppendLocation=-1}return i(e,[{key:"isEmpty",value:function(){return 0===this._list.length}},{key:"clear",value:function(){this._list=[],this._lastAppendLocation=-1}},{key:"_searchNearestSegmentBefore",value:function(e){var t=this._list;if(0===t.length)return-2;var n=t.length-1,i=0,r=0,a=n,s=0;if(e<t[0].originalBeginDts)return s=-1;for(;r<=a;){if((i=r+Math.floor((a-r)/2))===n||e>t[i].lastSample.originalDts&&e<t[i+1].originalBeginDts){s=i;break}t[i].originalBeginDts<e?r=i+1:a=i-1}return s}},{key:"_searchNearestSegmentAfter",value:function(e){return this._searchNearestSegmentBefore(e)+1}},{key:"append",value:function(e){var t=this._list,n=e,i=this._lastAppendLocation,r=0;-1!==i&&i<t.length&&n.originalBeginDts>=t[i].lastSample.originalDts&&(i===t.length-1||i<t.length-1&&n.originalBeginDts<t[i+1].originalBeginDts)?r=i+1:t.length>0&&(r=this._searchNearestSegmentBefore(n.originalBeginDts)+1),this._lastAppendLocation=r,this._list.splice(r,0,n)}},{key:"getLastSegmentBefore",value:function(e){var t=this._searchNearestSegmentBefore(e);return t>=0?this._list[t]:null}},{key:"getLastSampleBefore",value:function(e){var t=this.getLastSegmentBefore(e);return null!=t?t.lastSample:null}},{key:"getLastSyncPointBefore",value:function(e){for(var t=this._searchNearestSegmentBefore(e),n=this._list[t].syncPoints;0===n.length&&t>0;)t--,n=this._list[t].syncPoints;return n.length>0?n[n.length-1]:null}},{key:"type",get:function(){return this._type}},{key:"length",get:function(){return this._list.length}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={ERROR:"error",SOURCE_OPEN:"source_open",UPDATE_END:"update_end",BUFFER_FULL:"buffer_full"},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorDetails=t.ErrorTypes=void 0;var i,r=n(3),a=n(10),s=(i=a)&&i.__esModule?i:{default:i};t.ErrorTypes={NETWORK_ERROR:"NetworkError",MEDIA_ERROR:"MediaError",OTHER_ERROR:"OtherError"},t.ErrorDetails={NETWORK_EXCEPTION:r.LoaderErrors.EXCEPTION,NETWORK_STATUS_CODE_INVALID:r.LoaderErrors.HTTP_STATUS_CODE_INVALID,NETWORK_TIMEOUT:r.LoaderErrors.CONNECTING_TIMEOUT,NETWORK_UNRECOVERABLE_EARLY_EOF:r.LoaderErrors.UNRECOVERABLE_EARLY_EOF,MEDIA_MSE_ERROR:"MediaMSEError",MEDIA_FORMAT_ERROR:s.default.FORMAT_ERROR,MEDIA_FORMAT_UNSUPPORTED:s.default.FORMAT_UNSUPPORTED,MEDIA_CODEC_UNSUPPORTED:s.default.CODEC_UNSUPPORTED}},function(e,t,n){e.exports=n(19)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=s(n(20)),a=s(n(21));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.flvOpts={type:"flv"},n.optionalConfig={},r.default.util.deepCopy(n.flvOpts,e),r.default.util.deepCopy(n.optionalConfig,e.flvOptionalConfig);var i=n;return Object.defineProperty(i,"src",{get:function(){return i.currentSrc},set:function(e){i.flv_load(e);i.volume;i.video.muted=!0,r.default.util.addClass(i.root,"xgplayer-is-enter"),i.once("playing",function(){r.default.util.removeClass(i.root,"xgplayer-is-enter"),i.video.muted=!1}),i.once("canplay",function(){i.play()})},configurable:!0}),i.once("complete",function(){if(i.__flv__=a.default.createPlayer(n.flvOpts,n.optionalConfig),i.createInstance(i.__flv__),i.config.isLive){r.default.util.addClass(i.root,"xgplayer-is-live");var e=r.default.util.createDom("xg-live","正在直播",{},"xgplayer-live");i.controls.appendChild(e)}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.default),i(t,[{key:"createInstance",value:function(e){var t=this;t.video.addEventListener("contextmenu",function(e){e.preventDefault()}),e.attachMediaElement(t.video),e.load(),e.play(),e.on(a.default.Events.ERROR,function(e){t.emit("error",new r.default.Errors("other",t.config.url))}),e.on(a.default.Events.LOADED_SEI,function(e,n){t.emit("loaded_sei",e,n)}),e.on(a.default.Events.STATISTICS_INFO,function(e){t.emit("statistics_info",e)}),e.on(a.default.Events.MEDIA_INFO,function(e){t.mediainfo=e,t.emit("MEDIA_INFO",e)}),t.once("destroy",function(){e.destroy(),t.__flv__=null})}},{key:"flv_load",value:function(e){var t=this.flvOpts;t.segments=[{cors:!0,duration:void 0,filesize:void 0,timestampBase:0,url:e,withCredentials:!1}],t.url=e,this.flv_load_mds(t)}},{key:"flv_load_mds",value:function(e){void 0!==this.__flv__&&null!=this.__flv__&&(this.__flv__.unload(),this.__flv__.detachMediaElement(),this.__flv__.destroy(),this.__flv__=null),this.__flv__=a.default.createPlayer(e,this.optionalConfig),this.__flv__.attachMediaElement(this.video),this.__flv__.load()}},{key:"switchURL",value:function(e){var t=this,n=0;t.config.isLive||(n=t.currentTime),t.flv_load(e);t.volume;t.video.muted=!0,r.default.util.addClass(t.root,"xgplayer-is-enter"),t.once("playing",function(){r.default.util.removeClass(t.root,"xgplayer-is-enter"),t.video.muted=!1}),t.once("canplay",function(){t.config.isLive||(t.currentTime=n),t.play()})}}]),t}();o.isSupported=a.default.isSupported,t.default=o,e.exports=t.default},function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=f(n(11)),a=f(n(25)),s=f(n(33)),o=f(n(46)),u=f(n(7)),l=n(17),d=f(n(8)),h=n(1);function f(e){return e&&e.__esModule?e:{default:e}}r.default.install();var c={createPlayer:function(e,t){var n=e;if(null==n||"object"!==(void 0===n?"undefined":i(n)))throw new h.InvalidArgumentException("MediaDataSource must be an javascript object!");if(!n.hasOwnProperty("type"))throw new h.InvalidArgumentException("MediaDataSource must has type field to indicate video file type!");switch(n.type){case"flv":return new s.default(n,t);default:return new o.default(n,t)}},isSupported:function(){return a.default.supportMSEH264Playback()},getFeatureList:function(){return a.default.getFeatureList()}};c.Events=u.default,c.ErrorTypes=l.ErrorTypes,c.ErrorDetails=l.ErrorDetails,c.FlvPlayer=s.default,c.NativePlayer=o.default,c.LoggingControl=d.default,Object.defineProperty(c,"version",{enumerable:!0,get:function(){return"__VERSION__"}}),t.default=c,e.exports=t.default},function(e,t,n){(function(t,n){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */var i;i=function(){"use strict";function e(e){return"function"==typeof e}var i=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},r=0,a=void 0,s=void 0,o=function(e,t){_[r]=e,_[r+1]=t,2===(r+=2)&&(s?s(m):E())},u="undefined"!=typeof window?window:void 0,l=u||{},d=l.MutationObserver||l.WebKitMutationObserver,h="undefined"==typeof self&&void 0!==t&&"[object process]"==={}.toString.call(t),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function c(){var e=setTimeout;return function(){return e(m,1)}}var _=new Array(1e3);function m(){for(var e=0;e<r;e+=2)(0,_[e])(_[e+1]),_[e]=void 0,_[e+1]=void 0;r=0}var p,v,g,y,E=void 0;function b(e,t){var n=this,i=new this.constructor(L);void 0===i[k]&&U(i);var r=n._state;if(r){var a=arguments[r-1];o(function(){return B(r,i,a,n._result)})}else M(n,i,e,t);return i}function S(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(L);return T(t,e),t}h?E=function(){return t.nextTick(m)}:d?(v=0,g=new d(m),y=document.createTextNode(""),g.observe(y,{characterData:!0}),E=function(){y.data=v=++v%2}):f?((p=new MessageChannel).port1.onmessage=m,E=function(){return p.port2.postMessage(0)}):E=void 0===u?function(){try{var e=Function("return this")().require("vertx");return void 0!==(a=e.runOnLoop||e.runOnContext)?function(){a(m)}:c()}catch(e){return c()}}():c();var k=Math.random().toString(36).substring(2);function L(){}var w=void 0,R=1,A=2;function O(t,n,i){n.constructor===t.constructor&&i===b&&n.constructor.resolve===S?function(e,t){t._state===R?I(e,t._result):t._state===A?x(e,t._result):M(t,void 0,function(t){return T(e,t)},function(t){return x(e,t)})}(t,n):void 0===i?I(t,n):e(i)?function(e,t,n){o(function(e){var i=!1,r=function(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}(n,t,function(n){i||(i=!0,t!==n?T(e,n):I(e,n))},function(t){i||(i=!0,x(e,t))},e._label);!i&&r&&(i=!0,x(e,r))},e)}(t,n,i):I(t,n)}function T(e,t){if(e===t)x(e,new TypeError("You cannot resolve a promise with itself"));else if(r=typeof(i=t),null===i||"object"!==r&&"function"!==r)I(e,t);else{var n=void 0;try{n=t.then}catch(t){return void x(e,t)}O(e,t,n)}var i,r}function C(e){e._onerror&&e._onerror(e._result),D(e)}function I(e,t){e._state===w&&(e._result=t,e._state=R,0!==e._subscribers.length&&o(D,e))}function x(e,t){e._state===w&&(e._state=A,e._result=t,o(C,e))}function M(e,t,n,i){var r=e._subscribers,a=r.length;e._onerror=null,r[a]=t,r[a+R]=n,r[a+A]=i,0===a&&e._state&&o(D,e)}function D(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,a=e._result,s=0;s<t.length;s+=3)i=t[s],r=t[s+n],i?B(n,i,r,a):r(a);e._subscribers.length=0}}function B(t,n,i,r){var a=e(i),s=void 0,o=void 0,u=!0;if(a){try{s=i(r)}catch(e){u=!1,o=e}if(n===s)return void x(n,new TypeError("A promises callback cannot return that same promise."))}else s=r;n._state!==w||(a&&u?T(n,s):!1===u?x(n,o):t===R?I(n,s):t===A&&x(n,s))}var P=0;function U(e){e[k]=P++,e._state=void 0,e._result=void 0,e._subscribers=[]}var N=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(L),this.promise[k]||U(this.promise),i(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?I(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&I(this.promise,this._result))):x(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===w&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===S){var r=void 0,a=void 0,s=!1;try{r=e.then}catch(e){s=!0,a=e}if(r===b&&e._state!==w)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===F){var o=new n(L);s?x(o,a):O(o,e,r),this._willSettleAt(o,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},e.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===w&&(this._remaining--,e===A?x(i,n):this._result[t]=n),0===this._remaining&&I(i,this._result)},e.prototype._willSettleAt=function(e,t){var n=this;M(e,void 0,function(e){return n._settledAt(R,t,e)},function(e){return n._settledAt(A,t,e)})},e}(),F=function(){function t(e){this[k]=P++,this._result=this._state=void 0,this._subscribers=[],L!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t(function(t){T(e,t)},function(t){x(e,t)})}catch(t){x(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var n=this.constructor;return e(t)?this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})}):this.then(t,t)},t}();return F.prototype.then=b,F.all=function(e){return new N(this,e).promise},F.race=function(e){var t=this;return i(e)?new t(function(n,i){for(var r=e.length,a=0;a<r;a++)t.resolve(e[a]).then(n,i)}):new t(function(e,t){return t(new TypeError("You must pass an array to race."))})},F.resolve=S,F.reject=function(e){var t=new this(L);return x(t,e),t},F._setScheduler=function(e){s=e},F._setAsap=function(e){o=e},F._asap=o,F.polyfill=function(){var e=void 0;if(void 0!==n)e=n;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var i=null;try{i=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===i&&!t.cast)return}e.Promise=F},F.Promise=F,F},e.exports=i()}).call(this,n(23),n(24))},function(e,t){var n,i,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(e){i=s}}();var u,l=[],d=!1,h=-1;function f(){d&&u&&(d=!1,u.length?l=u.concat(l):h=-1,l.length&&c())}function c(){if(!d){var e=o(f);d=!0;for(var t=l.length;t;){for(u=l,l=[];++h<t;)u&&u[h].run();h=-1,t=l.length}u=null,d=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function _(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new _(e,t)),1!==l.length||d||o(c)},_.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(12),s=(i=a)&&i.__esModule?i:{default:i},o=n(6);var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"supportMSEH264Playback",value:function(){return window.MediaSource&&window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')}},{key:"supportNetworkStreamIO",value:function(){var e=new s.default({},(0,o.createDefaultConfig)()),t=e.loaderType;return e.destroy(),"fetch-stream-loader"==t||"xhr-moz-chunked-loader"==t}},{key:"getNetworkLoaderTypeName",value:function(){var e=new s.default({},(0,o.createDefaultConfig)()),t=e.loaderType;return e.destroy(),t}},{key:"supportNativeMediaPlayback",value:function(t){null==e.videoElement&&(e.videoElement=window.document.createElement("video"));var n=e.videoElement.canPlayType(t);return"probably"===n||"maybe"==n}},{key:"getFeatureList",value:function(){var t={mseFlvPlayback:!1,mseLiveFlvPlayback:!1,networkStreamIO:!1,networkLoaderName:"",nativeMP4H264Playback:!1,nativeWebmVP8Playback:!1,nativeWebmVP9Playback:!1};return t.mseFlvPlayback=e.supportMSEH264Playback(),t.networkStreamIO=e.supportNetworkStreamIO(),t.networkLoaderName=e.getNetworkLoaderTypeName(),t.mseLiveFlvPlayback=t.mseFlvPlayback&&t.networkStreamIO,t.nativeMP4H264Playback=e.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"'),t.nativeWebmVP8Playback=e.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"'),t.nativeWebmVP9Playback=e.supportNativeMediaPlayback('video/webm; codecs="vp9"'),t}}]),e}();t.default=u,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=(u(n(0)),u(n(4))),s=n(3),o=n(1);function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"fetch-stream-loader"));return i.TAG="FetchStreamLoader",i._seekHandler=e,i._config=n,i._needStash=!0,i._requestAbort=!1,i._contentLength=null,i._receivedLength=0,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.BaseLoader),r(t,null,[{key:"isSupported",value:function(){try{var e=a.default.msedge&&a.default.version.minor>=15048,t=!a.default.msedge||e;return self.fetch&&self.ReadableStream&&t}catch(e){return!1}}}]),r(t,[{key:"destroy",value:function(){this.isWorking()&&this.abort(),function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(i):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"open",value:function(e,t){var n=this;this._dataSource=e,this._range=t;var r=e.url;this._config.reuseRedirectedURL&&null!=e.redirectedURL&&(r=e.redirectedURL);var a=this._seekHandler.getConfig(r,t),u=new self.Headers;if("object"===i(a.headers)){var l=a.headers;for(var d in l)l.hasOwnProperty(d)&&u.append(d,l[d])}var h={method:"GET",headers:u,mode:"cors",cache:"default",referrerPolicy:"no-referrer-when-downgrade"};!1===e.cors&&(h.mode="same-origin"),e.withCredentials&&(h.credentials="include"),e.referrerPolicy&&(h.referrerPolicy=e.referrerPolicy),this._status=s.LoaderStatus.kConnecting,self.fetch(a.url,h).then(function(e){if(n._requestAbort)return n._requestAbort=!1,void(n._status=s.LoaderStatus.kIdle);if(e.ok&&e.status>=200&&e.status<=299){if(e.url!==a.url&&n._onURLRedirect){var t=n._seekHandler.removeURLParameters(e.url);n._onURLRedirect(t)}var i=e.headers.get("Content-Length");return null!=i&&(n._contentLength=parseInt(i),0!==n._contentLength&&n._onContentLengthKnown&&n._onContentLengthKnown(n._contentLength)),n._pump.call(n,e.body.getReader())}if(n._status=s.LoaderStatus.kError,!n._onError)throw new o.RuntimeException("FetchStreamLoader: Http code invalid, "+e.status+" "+e.statusText);n._onError(s.LoaderErrors.HTTP_STATUS_CODE_INVALID,{code:e.status,msg:e.statusText})}).catch(function(e){if(n._status=s.LoaderStatus.kError,!n._onError)throw e;n._onError(s.LoaderErrors.EXCEPTION,{code:-1,msg:e.message})})}},{key:"abort",value:function(){this._requestAbort=!0}},{key:"_pump",value:function(e){var t=this;return e.read().then(function(n){if(n.done)if(null!==t._contentLength&&t._receivedLength<t._contentLength){t._status=s.LoaderStatus.kError;var i=s.LoaderErrors.EARLY_EOF,r={code:-1,msg:"Fetch stream meet Early-EOF"};if(!t._onError)throw new o.RuntimeException(r.msg);t._onError(i,r)}else t._status=s.LoaderStatus.kComplete,t._onComplete&&t._onComplete(t._range.from,t._range.from+t._receivedLength-1);else{if(!0===t._requestAbort)return t._requestAbort=!1,t._status=s.LoaderStatus.kComplete,e.cancel();t._status=s.LoaderStatus.kBuffering;var a=n.value.buffer,u=t._range.from+t._receivedLength;t._receivedLength+=a.byteLength,t._onDataArrival&&t._onDataArrival(a,u,t._receivedLength),t._pump(e)}}).catch(function(e){if(11!==e.code||!a.default.msedge){t._status=s.LoaderStatus.kError;var n=0,i=null;if(19!==e.code&&"network error"!==e.message||!(null===t._contentLength||null!==t._contentLength&&t._receivedLength<t._contentLength)?(n=s.LoaderErrors.EXCEPTION,i={code:e.code,msg:e.message}):(n=s.LoaderErrors.EARLY_EOF,i={code:e.code,msg:"Fetch stream meet Early-EOF"}),!t._onError)throw new o.RuntimeException(i.msg);t._onError(n,i)}})}}]),t}();t.default=l,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),o=(i=s)&&i.__esModule?i:{default:i},u=n(3),l=n(1);var d=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"xhr-moz-chunked-loader"));return i.TAG="MozChunkedLoader",i._seekHandler=e,i._config=n,i._needStash=!0,i._xhr=null,i._requestAbort=!1,i._contentLength=null,i._receivedLength=0,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.BaseLoader),a(t,null,[{key:"isSupported",value:function(){try{var e=new XMLHttpRequest;return e.open("GET","https://example.com",!0),e.responseType="moz-chunked-arraybuffer","moz-chunked-arraybuffer"===e.responseType}catch(e){return o.default.w("MozChunkedLoader",e.message),!1}}}]),a(t,[{key:"destroy",value:function(){this.isWorking()&&this.abort(),this._xhr&&(this._xhr.onreadystatechange=null,this._xhr.onprogress=null,this._xhr.onloadend=null,this._xhr.onerror=null,this._xhr=null),function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(i):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"open",value:function(e,t){this._dataSource=e,this._range=t;var n=e.url;this._config.reuseRedirectedURL&&null!=e.redirectedURL&&(n=e.redirectedURL);var i=this._seekHandler.getConfig(n,t);this._requestURL=i.url;var a=this._xhr=new XMLHttpRequest;if(a.open("GET",i.url,!0),a.responseType="moz-chunked-arraybuffer",a.onreadystatechange=this._onReadyStateChange.bind(this),a.onprogress=this._onProgress.bind(this),a.onloadend=this._onLoadEnd.bind(this),a.onerror=this._onXhrError.bind(this),e.withCredentials&&(a.withCredentials=!0),"object"===r(i.headers)){var s=i.headers;for(var o in s)s.hasOwnProperty(o)&&a.setRequestHeader(o,s[o])}this._status=u.LoaderStatus.kConnecting,a.send()}},{key:"abort",value:function(){this._requestAbort=!0,this._xhr&&this._xhr.abort(),this._status=u.LoaderStatus.kComplete}},{key:"_onReadyStateChange",value:function(e){var t=e.target;if(2===t.readyState){if(null!=t.responseURL&&t.responseURL!==this._requestURL&&this._onURLRedirect){var n=this._seekHandler.removeURLParameters(t.responseURL);this._onURLRedirect(n)}if(0!==t.status&&(t.status<200||t.status>299)){if(this._status=u.LoaderStatus.kError,!this._onError)throw new l.RuntimeException("MozChunkedLoader: Http code invalid, "+t.status+" "+t.statusText);this._onError(u.LoaderErrors.HTTP_STATUS_CODE_INVALID,{code:t.status,msg:t.statusText})}else this._status=u.LoaderStatus.kBuffering}}},{key:"_onProgress",value:function(e){if(this._status!==u.LoaderStatus.kError){null===this._contentLength&&null!==e.total&&0!==e.total&&(this._contentLength=e.total,this._onContentLengthKnown&&this._onContentLengthKnown(this._contentLength));var t=e.target.response,n=this._range.from+this._receivedLength;this._receivedLength+=t.byteLength,this._onDataArrival&&this._onDataArrival(t,n,this._receivedLength)}}},{key:"_onLoadEnd",value:function(e){!0!==this._requestAbort?this._status!==u.LoaderStatus.kError&&(this._status=u.LoaderStatus.kComplete,this._onComplete&&this._onComplete(this._range.from,this._range.from+this._receivedLength-1)):this._requestAbort=!1}},{key:"_onXhrError",value:function(e){this._status=u.LoaderStatus.kError;var t=0,n=null;if(this._contentLength&&e.loaded<this._contentLength?(t=u.LoaderErrors.EARLY_EOF,n={code:-1,msg:"Moz-Chunked stream meet Early-Eof"}):(t=u.LoaderErrors.EXCEPTION,n={code:-1,msg:e.constructor.name+" "+e.type}),!this._onError)throw new l.RuntimeException(n.msg);this._onError(t,n)}}]),t}();t.default=d,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),o=(i=s)&&i.__esModule?i:{default:i},u=n(3),l=n(1);var d=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"xhr-msstream-loader"));return i.TAG="MSStreamLoader",i._seekHandler=e,i._config=n,i._needStash=!0,i._xhr=null,i._reader=null,i._totalRange=null,i._currentRange=null,i._currentRequestURL=null,i._currentRedirectedURL=null,i._contentLength=null,i._receivedLength=0,i._bufferLimit=16777216,i._lastTimeBufferSize=0,i._isReconnecting=!1,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.BaseLoader),a(t,null,[{key:"isSupported",value:function(){try{if(void 0===self.MSStream||void 0===self.MSStreamReader)return!1;var e=new XMLHttpRequest;return e.open("GET","https://example.com",!0),e.responseType="ms-stream","ms-stream"===e.responseType}catch(e){return o.default.w("MSStreamLoader",e.message),!1}}}]),a(t,[{key:"destroy",value:function(){this.isWorking()&&this.abort(),this._reader&&(this._reader.onprogress=null,this._reader.onload=null,this._reader.onerror=null,this._reader=null),this._xhr&&(this._xhr.onreadystatechange=null,this._xhr=null),function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(i):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"open",value:function(e,t){this._internalOpen(e,t,!1)}},{key:"_internalOpen",value:function(e,t,n){this._dataSource=e,n?this._currentRange=t:this._totalRange=t;var i=e.url;this._config.reuseRedirectedURL&&(null!=this._currentRedirectedURL?i=this._currentRedirectedURL:null!=e.redirectedURL&&(i=e.redirectedURL));var a=this._seekHandler.getConfig(i,t);this._currentRequestURL=a.url;var s=this._reader=new self.MSStreamReader;s.onprogress=this._msrOnProgress.bind(this),s.onload=this._msrOnLoad.bind(this),s.onerror=this._msrOnError.bind(this);var o=this._xhr=new XMLHttpRequest;if(o.open("GET",a.url,!0),o.responseType="ms-stream",o.onreadystatechange=this._xhrOnReadyStateChange.bind(this),o.onerror=this._xhrOnError.bind(this),e.withCredentials&&(o.withCredentials=!0),"object"===r(a.headers)){var l=a.headers;for(var d in l)l.hasOwnProperty(d)&&o.setRequestHeader(d,l[d])}this._isReconnecting?this._isReconnecting=!1:this._status=u.LoaderStatus.kConnecting,o.send()}},{key:"abort",value:function(){this._internalAbort(),this._status=u.LoaderStatus.kComplete}},{key:"_internalAbort",value:function(){this._reader&&(1===this._reader.readyState&&this._reader.abort(),this._reader.onprogress=null,this._reader.onload=null,this._reader.onerror=null,this._reader=null),this._xhr&&(this._xhr.abort(),this._xhr.onreadystatechange=null,this._xhr=null)}},{key:"_xhrOnReadyStateChange",value:function(e){var t=e.target;if(2===t.readyState)if(t.status>=200&&t.status<=299){if(this._status=u.LoaderStatus.kBuffering,null!=t.responseURL){var n=this._seekHandler.removeURLParameters(t.responseURL);t.responseURL!==this._currentRequestURL&&n!==this._currentRedirectedURL&&(this._currentRedirectedURL=n,this._onURLRedirect&&this._onURLRedirect(n))}var i=t.getResponseHeader("Content-Length");if(null!=i&&null==this._contentLength){var r=parseInt(i);r>0&&(this._contentLength=r,this._onContentLengthKnown&&this._onContentLengthKnown(this._contentLength))}}else{if(this._status=u.LoaderStatus.kError,!this._onError)throw new l.RuntimeException("MSStreamLoader: Http code invalid, "+t.status+" "+t.statusText);this._onError(u.LoaderErrors.HTTP_STATUS_CODE_INVALID,{code:t.status,msg:t.statusText})}else if(3===t.readyState&&t.status>=200&&t.status<=299){this._status=u.LoaderStatus.kBuffering;var a=t.response;this._reader.readAsArrayBuffer(a)}}},{key:"_xhrOnError",value:function(e){this._status=u.LoaderStatus.kError;var t=u.LoaderErrors.EXCEPTION,n={code:-1,msg:e.constructor.name+" "+e.type};if(!this._onError)throw new l.RuntimeException(n.msg);this._onError(t,n)}},{key:"_msrOnProgress",value:function(e){var t=e.target.result;if(null!=t){var n=t.slice(this._lastTimeBufferSize);this._lastTimeBufferSize=t.byteLength;var i=this._totalRange.from+this._receivedLength;this._receivedLength+=n.byteLength,this._onDataArrival&&this._onDataArrival(n,i,this._receivedLength),t.byteLength>=this._bufferLimit&&(o.default.v(this.TAG,"MSStream buffer exceeded max size near "+(i+n.byteLength)+", reconnecting..."),this._doReconnectIfNeeded())}else this._doReconnectIfNeeded()}},{key:"_doReconnectIfNeeded",value:function(){if(null==this._contentLength||this._receivedLength<this._contentLength){this._isReconnecting=!0,this._lastTimeBufferSize=0,this._internalAbort();var e={from:this._totalRange.from+this._receivedLength,to:-1};this._internalOpen(this._dataSource,e,!0)}}},{key:"_msrOnLoad",value:function(e){this._status=u.LoaderStatus.kComplete,this._onComplete&&this._onComplete(this._totalRange.from,this._totalRange.from+this._receivedLength-1)}},{key:"_msrOnError",value:function(e){this._status=u.LoaderStatus.kError;var t=0,n=null;if(this._contentLength&&this._receivedLength<this._contentLength?(t=u.LoaderErrors.EARLY_EOF,n={code:-1,msg:"MSStream meet Early-Eof"}):(t=u.LoaderErrors.EARLY_EOF,n={code:-1,msg:e.constructor.name+" "+e.type}),!this._onError)throw new l.RuntimeException(n.msg);this._onError(t,n)}}]),t}();t.default=d,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=l(n(0)),s=l(n(13)),o=n(3),u=n(1);function l(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"xhr-range-loader"));return i.TAG="RangeLoader",i._seekHandler=e,i._config=n,i._needStash=!1,i._chunkSizeKBList=[128,256,384,512,768,1024,1536,2048,3072,4096,5120,6144,7168,8192],i._currentChunkSizeKB=384,i._currentSpeedNormalized=0,i._zeroSpeedChunkCount=0,i._xhr=null,i._speedSampler=new s.default,i._requestAbort=!1,i._waitForTotalLength=!1,i._totalLengthReceived=!1,i._currentRequestURL=null,i._currentRedirectedURL=null,i._currentRequestRange=null,i._totalLength=null,i._contentLength=null,i._receivedLength=0,i._lastTimeLoaded=0,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.BaseLoader),r(t,null,[{key:"isSupported",value:function(){try{var e=new XMLHttpRequest;return e.open("GET","https://example.com",!0),e.responseType="arraybuffer","arraybuffer"===e.responseType}catch(e){return a.default.w("RangeLoader",e.message),!1}}}]),r(t,[{key:"destroy",value:function(){this.isWorking()&&this.abort(),this._xhr&&(this._xhr.onreadystatechange=null,this._xhr.onprogress=null,this._xhr.onload=null,this._xhr.onerror=null,this._xhr=null),function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(i):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"open",value:function(e,t){this._dataSource=e,this._range=t,this._status=o.LoaderStatus.kConnecting;var n=!1;null!=this._dataSource.filesize&&0!==this._dataSource.filesize&&(n=!0,this._totalLength=this._dataSource.filesize),this._totalLengthReceived||n?this._openSubRange():(this._waitForTotalLength=!0,this._internalOpen(this._dataSource,{from:0,to:-1}))}},{key:"_openSubRange",value:function(){var e=1024*this._currentChunkSizeKB,t=this._range.from+this._receivedLength,n=t+e;null!=this._contentLength&&n-this._range.from>=this._contentLength&&(n=this._range.from+this._contentLength-1),this._currentRequestRange={from:t,to:n},this._internalOpen(this._dataSource,this._currentRequestRange)}},{key:"_internalOpen",value:function(e,t){this._lastTimeLoaded=0;var n=e.url;this._config.reuseRedirectedURL&&(null!=this._currentRedirectedURL?n=this._currentRedirectedURL:null!=e.redirectedURL&&(n=e.redirectedURL));var r=this._seekHandler.getConfig(n,t);this._currentRequestURL=r.url;var a=this._xhr=new XMLHttpRequest;if(a.open("GET",r.url,!0),a.responseType="arraybuffer",a.onreadystatechange=this._onReadyStateChange.bind(this),a.onprogress=this._onProgress.bind(this),a.onload=this._onLoad.bind(this),a.onerror=this._onXhrError.bind(this),e.withCredentials&&(a.withCredentials=!0),"object"===i(r.headers)){var s=r.headers;for(var o in s)s.hasOwnProperty(o)&&a.setRequestHeader(o,s[o])}a.send()}},{key:"abort",value:function(){this._requestAbort=!0,this._internalAbort(),this._status=o.LoaderStatus.kComplete}},{key:"_internalAbort",value:function(){this._xhr&&(this._xhr.onreadystatechange=null,this._xhr.onprogress=null,this._xhr.onload=null,this._xhr.onerror=null,this._xhr.abort(),this._xhr=null)}},{key:"_onReadyStateChange",value:function(e){var t=e.target;if(2===t.readyState){if(null!=t.responseURL){var n=this._seekHandler.removeURLParameters(t.responseURL);t.responseURL!==this._currentRequestURL&&n!==this._currentRedirectedURL&&(this._currentRedirectedURL=n,this._onURLRedirect&&this._onURLRedirect(n))}if(t.status>=200&&t.status<=299){if(this._waitForTotalLength)return;this._status=o.LoaderStatus.kBuffering}else{if(this._status=o.LoaderStatus.kError,!this._onError)throw new u.RuntimeException("RangeLoader: Http code invalid, "+t.status+" "+t.statusText);this._onError(o.LoaderErrors.HTTP_STATUS_CODE_INVALID,{code:t.status,msg:t.statusText})}}}},{key:"_onProgress",value:function(e){if(this._status!==o.LoaderStatus.kError){if(null===this._contentLength){var t=!1;if(this._waitForTotalLength){this._waitForTotalLength=!1,this._totalLengthReceived=!0,t=!0;var n=e.total;this._internalAbort(),null!=n&0!==n&&(this._totalLength=n)}if(-1===this._range.to?this._contentLength=this._totalLength-this._range.from:this._contentLength=this._range.to-this._range.from+1,t)return void this._openSubRange();this._onContentLengthKnown&&this._onContentLengthKnown(this._contentLength)}var i=e.loaded-this._lastTimeLoaded;this._lastTimeLoaded=e.loaded,this._speedSampler.addBytes(i)}}},{key:"_normalizeSpeed",value:function(e){var t=this._chunkSizeKBList,n=t.length-1,i=0,r=0,a=n;if(e<t[0])return t[0];for(;r<=a;){if((i=r+Math.floor((a-r)/2))===n||e>=t[i]&&e<t[i+1])return t[i];t[i]<e?r=i+1:a=i-1}}},{key:"_onLoad",value:function(e){if(this._status!==o.LoaderStatus.kError)if(this._waitForTotalLength)this._waitForTotalLength=!1;else{this._lastTimeLoaded=0;var t=this._speedSampler.lastSecondKBps;if(0===t&&(this._zeroSpeedChunkCount++,this._zeroSpeedChunkCount>=3&&(t=this._speedSampler.currentKBps)),0!==t){var n=this._normalizeSpeed(t);this._currentSpeedNormalized!==n&&(this._currentSpeedNormalized=n,this._currentChunkSizeKB=n)}var i=e.target.response,r=this._range.from+this._receivedLength;this._receivedLength+=i.byteLength;var a=!1;null!=this._contentLength&&this._receivedLength<this._contentLength?this._openSubRange():a=!0,this._onDataArrival&&this._onDataArrival(i,r,this._receivedLength),a&&(this._status=o.LoaderStatus.kComplete,this._onComplete&&this._onComplete(this._range.from,this._range.from+this._receivedLength-1))}}},{key:"_onXhrError",value:function(e){this._status=o.LoaderStatus.kError;var t=0,n=null;if(this._contentLength&&this._receivedLength>0&&this._receivedLength<this._contentLength?(t=o.LoaderErrors.EARLY_EOF,n={code:-1,msg:"RangeLoader meet Early-Eof"}):(t=o.LoaderErrors.EXCEPTION,n={code:-1,msg:e.constructor.name+" "+e.type}),!this._onError)throw new u.RuntimeException(n.msg);this._onError(t,n)}},{key:"currentSpeed",get:function(){return this._speedSampler.lastSecondKBps}}]),t}();t.default=d,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(0),s=((i=a)&&i.__esModule,n(3)),o=n(1);var u=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"websocket-loader"));return e.TAG="WebSocketLoader",e._needStash=!0,e._ws=null,e._requestAbort=!1,e._receivedLength=0,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.BaseLoader),r(t,null,[{key:"isSupported",value:function(){try{return void 0!==self.WebSocket}catch(e){return!1}}}]),r(t,[{key:"destroy",value:function(){this._ws&&this.abort(),function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(i):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"open",value:function(e){try{var t=this._ws=new self.WebSocket(e.url);t.binaryType="arraybuffer",t.onopen=this._onWebSocketOpen.bind(this),t.onclose=this._onWebSocketClose.bind(this),t.onmessage=this._onWebSocketMessage.bind(this),t.onerror=this._onWebSocketError.bind(this),this._status=s.LoaderStatus.kConnecting}catch(e){this._status=s.LoaderStatus.kError;var n={code:e.code,msg:e.message};if(!this._onError)throw new o.RuntimeException(n.msg);this._onError(s.LoaderErrors.EXCEPTION,n)}}},{key:"abort",value:function(){var e=this._ws;!e||0!==e.readyState&&1!==e.readyState||(this._requestAbort=!0,e.close()),this._ws=null,this._status=s.LoaderStatus.kComplete}},{key:"_onWebSocketOpen",value:function(e){this._status=s.LoaderStatus.kBuffering}},{key:"_onWebSocketClose",value:function(e){!0!==this._requestAbort?(this._status=s.LoaderStatus.kComplete,this._onComplete&&this._onComplete(0,this._receivedLength-1)):this._requestAbort=!1}},{key:"_onWebSocketMessage",value:function(e){var t=this;if(e.data instanceof ArrayBuffer)this._dispatchArrayBuffer(e.data);else if(e.data instanceof Blob){var n=new FileReader;n.onload=function(){t._dispatchArrayBuffer(n.result)},n.readAsArrayBuffer(e.data)}else{this._status=s.LoaderStatus.kError;var i={code:-1,msg:"Unsupported WebSocket message type: "+e.data.constructor.name};if(!this._onError)throw new o.RuntimeException(i.msg);this._onError(s.LoaderErrors.EXCEPTION,i)}}},{key:"_dispatchArrayBuffer",value:function(e){var t=e,n=this._receivedLength;this._receivedLength+=t.byteLength,this._onDataArrival&&this._onDataArrival(t,n,this._receivedLength)}},{key:"_onWebSocketError",value:function(e){this._status=s.LoaderStatus.kError;var t={code:e.code,msg:e.message};if(!this._onError)throw new o.RuntimeException(t.msg);this._onError(s.LoaderErrors.EXCEPTION,t)}}]),t}();t.default=u,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._zeroStart=t||!1}return i(e,[{key:"getConfig",value:function(e,t){var n={};if(0!==t.from||-1!==t.to){var i=void 0;i=-1!==t.to?"bytes="+t.from.toString()+"-"+t.to.toString():"bytes="+t.from.toString()+"-",n.Range=i}else this._zeroStart&&(n.Range="bytes=0-");return{url:e,headers:n}}},{key:"removeURLParameters",value:function(e){return e}}]),e}();t.default=r,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._startName=t,this._endName=n}return i(e,[{key:"getConfig",value:function(e,t){var n=e;if(0!==t.from||-1!==t.to){var i=!0;-1===n.indexOf("?")&&(n+="?",i=!1),i&&(n+="&"),n+=this._startName+"="+t.from.toString(),-1!==t.to&&(n+="&"+this._endName+"="+t.to.toString())}return{url:n,headers:{}}}},{key:"removeURLParameters",value:function(e){var t=e.split("?")[0],n=void 0,i=e.indexOf("?");-1!==i&&(n=e.substring(i+1));var r="";if(null!=n&&n.length>0)for(var a=n.split("&"),s=0;s<a.length;s++){var o=a[s].split("="),u=s>0;o[0]!==this._startName&&o[0]!==this._endName&&(u&&(r+="&"),r+=a[s])}return 0===r.length?t:t+"?"+r}}]),e}();t.default=r,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=p(n(2)),s=p(n(0)),o=p(n(4)),u=p(n(7)),l=p(n(34)),d=p(n(5)),h=p(n(45)),f=p(n(16)),c=n(17),_=n(6),m=n(1);function p(e){return e&&e.__esModule?e:{default:e}}var v=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.TAG="FlvPlayer",this._type="FlvPlayer",this._emitter=new a.default,this._config=(0,_.createDefaultConfig)(),"object"===(void 0===n?"undefined":i(n))&&Object.assign(this._config,n),"flv"!==t.type.toLowerCase())throw new m.InvalidArgumentException("FlvPlayer requires an flv MediaDataSource input!");!0===t.isLive&&(this._config.isLive=!0),this.e={onvLoadedMetadata:this._onvLoadedMetadata.bind(this),onvSeeking:this._onvSeeking.bind(this),onvCanPlay:this._onvCanPlay.bind(this),onvStalled:this._onvStalled.bind(this),onvProgress:this._onvProgress.bind(this)},self.performance&&self.performance.now?this._now=self.performance.now.bind(self.performance):this._now=Date.now,this._pendingSeekTime=null,this._requestSetTime=!1,this._seekpointRecord=null,this._progressChecker=null,this._mediaDataSource=t,this._mediaElement=null,this._msectl=null,this._transmuxer=null,this._mseSourceOpened=!1,this._hasPendingLoad=!1,this._receivedCanPlay=!1,this._mediaInfo=null,this._statisticsInfo=null;var r=o.default.chrome&&(o.default.version.major<50||50===o.default.version.major&&o.default.version.build<2661);this._alwaysSeekKeyframe=!!(r||o.default.msedge||o.default.msie),this._alwaysSeekKeyframe&&(this._config.accurateSeek=!1)}return r(e,[{key:"destroy",value:function(){null!=this._progressChecker&&(window.clearInterval(this._progressChecker),this._progressChecker=null),this._transmuxer&&this.unload(),this._mediaElement&&this.detachMediaElement(),this.e=null,this._mediaDataSource=null,this._emitter.removeAllListeners(),this._emitter=null}},{key:"on",value:function(e,t){var n=this;e===u.default.MEDIA_INFO?null!=this._mediaInfo&&Promise.resolve().then(function(){n._emitter.emit(u.default.MEDIA_INFO,n.mediaInfo)}):e===u.default.STATISTICS_INFO&&null!=this._statisticsInfo&&Promise.resolve().then(function(){n._emitter.emit(u.default.STATISTICS_INFO,n.statisticsInfo)}),this._emitter.addListener(e,t)}},{key:"off",value:function(e,t){this._emitter.removeListener(e,t)}},{key:"attachMediaElement",value:function(e){var t=this;if(this._mediaElement=e,e.addEventListener("loadedmetadata",this.e.onvLoadedMetadata),e.addEventListener("seeking",this.e.onvSeeking),e.addEventListener("canplay",this.e.onvCanPlay),e.addEventListener("stalled",this.e.onvStalled),e.addEventListener("progress",this.e.onvProgress),this._msectl=new h.default(this._config),this._msectl.on(f.default.UPDATE_END,this._onmseUpdateEnd.bind(this)),this._msectl.on(f.default.BUFFER_FULL,this._onmseBufferFull.bind(this)),this._msectl.on(f.default.SOURCE_OPEN,function(){t._mseSourceOpened=!0,t._hasPendingLoad&&(t._hasPendingLoad=!1,t.load())}),this._msectl.on(f.default.ERROR,function(e){t._emitter.emit(u.default.ERROR,c.ErrorTypes.MEDIA_ERROR,c.ErrorDetails.MEDIA_MSE_ERROR,e)}),this._msectl.attachMediaElement(e),null!=this._pendingSeekTime)try{e.currentTime=this._pendingSeekTime,this._pendingSeekTime=null}catch(e){}}},{key:"detachMediaElement",value:function(){this._mediaElement&&(this._msectl.detachMediaElement(),this._mediaElement.removeEventListener("loadedmetadata",this.e.onvLoadedMetadata),this._mediaElement.removeEventListener("seeking",this.e.onvSeeking),this._mediaElement.removeEventListener("canplay",this.e.onvCanPlay),this._mediaElement.removeEventListener("stalled",this.e.onvStalled),this._mediaElement.removeEventListener("progress",this.e.onvProgress),this._mediaElement=null),this._msectl&&(this._msectl.destroy(),this._msectl=null)}},{key:"load",value:function(){var e=this;if(!this._mediaElement)throw new m.IllegalStateException("HTMLMediaElement must be attached before load()!");if(this._transmuxer)throw new m.IllegalStateException("FlvPlayer.load() has been called, please call unload() first!");this._hasPendingLoad||(this._config.deferLoadAfterSourceOpen&&!1===this._mseSourceOpened?this._hasPendingLoad=!0:(this._mediaElement.readyState>0&&(this._requestSetTime=!0,this._mediaElement.currentTime=0),this._transmuxer=new l.default(this._mediaDataSource,this._config),this._transmuxer.on(d.default.INIT_SEGMENT,function(t,n){e._msectl.appendInitSegment(n)}),this._transmuxer.on(d.default.MEDIA_SEGMENT,function(t,n){if(e._msectl.appendMediaSegment(n),e._config.lazyLoad&&!e._config.isLive){var i=e._mediaElement.currentTime;n.info.endDts>=1e3*(i+e._config.lazyLoadMaxDuration)&&null==e._progressChecker&&(s.default.v(e.TAG,"Maximum buffering duration exceeded, suspend transmuxing task"),e._suspendTransmuxer())}}),this._transmuxer.on(d.default.LOADING_COMPLETE,function(){e._msectl.endOfStream(),e._emitter.emit(u.default.LOADING_COMPLETE)}),this._transmuxer.on(d.default.RECOVERED_EARLY_EOF,function(){e._emitter.emit(u.default.RECOVERED_EARLY_EOF)}),this._transmuxer.on(d.default.IO_ERROR,function(t,n){e._emitter.emit(u.default.ERROR,c.ErrorTypes.NETWORK_ERROR,t,n)}),this._transmuxer.on(d.default.DEMUX_ERROR,function(t,n){e._emitter.emit(u.default.ERROR,c.ErrorTypes.MEDIA_ERROR,t,{code:-1,msg:n})}),this._transmuxer.on(d.default.MEDIA_INFO,function(t){e._mediaInfo=t,e._emitter.emit(u.default.MEDIA_INFO,Object.assign({},t))}),this._transmuxer.on(d.default.STATISTICS_INFO,function(t){e._statisticsInfo=e._fillStatisticsInfo(t),e._emitter.emit(u.default.STATISTICS_INFO,Object.assign({},e._statisticsInfo))}),this._transmuxer.on(d.default.RECOMMEND_SEEKPOINT,function(t){e._mediaElement&&!e._config.accurateSeek&&(e._requestSetTime=!0,e._mediaElement.currentTime=t/1e3)}),this._transmuxer.on(d.default.LOADED_SEI,function(t,n){e._emitter.emit(u.default.LOADED_SEI,t,n)}),this._transmuxer.open()))}},{key:"unload",value:function(){this._mediaElement&&this._mediaElement.pause(),this._msectl&&this._msectl.seek(0),this._transmuxer&&(this._transmuxer.close(),this._transmuxer.destroy(),this._transmuxer=null)}},{key:"play",value:function(){var e=this._mediaElement.play();return void 0!==e&&e?e.catch(function(){}):void 0}},{key:"pause",value:function(){this._mediaElement.pause()}},{key:"_fillStatisticsInfo",value:function(e){if(e.playerType=this._type,!(this._mediaElement instanceof HTMLVideoElement))return e;var t=!0,n=0,i=0;if(this._mediaElement.getVideoPlaybackQuality){var r=this._mediaElement.getVideoPlaybackQuality();n=r.totalVideoFrames,i=r.droppedVideoFrames}else null!=this._mediaElement.webkitDecodedFrameCount?(n=this._mediaElement.webkitDecodedFrameCount,i=this._mediaElement.webkitDroppedFrameCount):t=!1;return t&&(e.decodedFrames=n,e.droppedFrames=i),e}},{key:"_onmseUpdateEnd",value:function(){if(this._config.lazyLoad&&!this._config.isLive){for(var e=this._mediaElement.buffered,t=this._mediaElement.currentTime,n=0,i=0;i<e.length;i++){var r=e.start(i),a=e.end(i);if(r<=t&&t<a){r,n=a;break}}n>=t+this._config.lazyLoadMaxDuration&&null==this._progressChecker&&(s.default.v(this.TAG,"Maximum buffering duration exceeded, suspend transmuxing task"),this._suspendTransmuxer())}}},{key:"_onmseBufferFull",value:function(){s.default.v(this.TAG,"MSE SourceBuffer is full, suspend transmuxing task"),null==this._progressChecker&&this._suspendTransmuxer()}},{key:"_suspendTransmuxer",value:function(){this._transmuxer&&(this._transmuxer.pause(),null==this._progressChecker&&(this._progressChecker=window.setInterval(this._checkProgressAndResume.bind(this),1e3)))}},{key:"_checkProgressAndResume",value:function(){for(var e=this._mediaElement.currentTime,t=this._mediaElement.buffered,n=!1,i=0;i<t.length;i++){var r=t.start(i),a=t.end(i);if(e>=r&&e<a){e>=a-this._config.lazyLoadRecoverDuration&&(n=!0);break}}n&&(window.clearInterval(this._progressChecker),this._progressChecker=null,n&&(s.default.v(this.TAG,"Continue loading from paused position"),this._transmuxer.resume()))}},{key:"_isTimepointBuffered",value:function(e){for(var t=this._mediaElement.buffered,n=0;n<t.length;n++){var i=t.start(n),r=t.end(n);if(e>=i&&e<r)return!0}return!1}},{key:"_internalSeek",value:function(e){var t=this._isTimepointBuffered(e),n=!1,i=0;if(e<1&&this._mediaElement.buffered.length>0){var r=this._mediaElement.buffered.start(0);(r<1&&e<r||o.default.safari)&&(n=!0,i=o.default.safari?.1:r)}if(n)this._requestSetTime=!0,this._mediaElement.currentTime=i;else if(t){if(this._alwaysSeekKeyframe){var a=this._msectl.getNearestKeyframe(Math.floor(1e3*e));this._requestSetTime=!0,this._mediaElement.currentTime=null!=a?a.dts/1e3:e}else this._requestSetTime=!0,this._mediaElement.currentTime=e;null!=this._progressChecker&&this._checkProgressAndResume()}else null!=this._progressChecker&&(window.clearInterval(this._progressChecker),this._progressChecker=null),this._msectl.seek(e),this._transmuxer.seek(Math.floor(1e3*e)),this._config.accurateSeek&&(this._requestSetTime=!0,this._mediaElement.currentTime=e)}},{key:"_checkAndApplyUnbufferedSeekpoint",value:function(){if(this._seekpointRecord)if(this._seekpointRecord.recordTime<=this._now()-100){var e=this._mediaElement.currentTime;this._seekpointRecord=null,this._isTimepointBuffered(e)||(null!=this._progressChecker&&(window.clearTimeout(this._progressChecker),this._progressChecker=null),this._msectl.seek(e),this._transmuxer.seek(Math.floor(1e3*e)),this._config.accurateSeek&&(this._requestSetTime=!0,this._mediaElement.currentTime=e))}else window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this),50)}},{key:"_checkAndResumeStuckPlayback",value:function(e){var t=this._mediaElement;if(e||!this._receivedCanPlay||t.readyState<2){var n=t.buffered;n.length>0&&t.currentTime<n.start(0)&&(s.default.w(this.TAG,"Playback seems stuck at "+t.currentTime+", seek to "+n.start(0)),this._requestSetTime=!0,this._mediaElement.currentTime=n.start(0),this._mediaElement.removeEventListener("progress",this.e.onvProgress))}else this._mediaElement.removeEventListener("progress",this.e.onvProgress)}},{key:"_onvLoadedMetadata",value:function(e){null!=this._pendingSeekTime&&(this._mediaElement.currentTime=this._pendingSeekTime,this._pendingSeekTime=null)}},{key:"_onvSeeking",value:function(e){var t=this._mediaElement.currentTime,n=this._mediaElement.buffered;if(this._requestSetTime)this._requestSetTime=!1;else{if(t<1&&n.length>0){var i=n.start(0);if(i<1&&t<i||o.default.safari)return this._requestSetTime=!0,void(this._mediaElement.currentTime=o.default.safari?.1:i)}if(this._isTimepointBuffered(t)){if(this._alwaysSeekKeyframe){var r=this._msectl.getNearestKeyframe(Math.floor(1e3*t));null!=r&&(this._requestSetTime=!0,this._mediaElement.currentTime=r.dts/1e3)}null!=this._progressChecker&&this._checkProgressAndResume()}else this._seekpointRecord={seekPoint:t,recordTime:this._now()},window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this),50)}}},{key:"_onvCanPlay",value:function(e){this._receivedCanPlay=!0,this._mediaElement.removeEventListener("canplay",this.e.onvCanPlay)}},{key:"_onvStalled",value:function(e){this._checkAndResumeStuckPlayback(!0)}},{key:"_onvProgress",value:function(e){this._checkAndResumeStuckPlayback()}},{key:"type",get:function(){return this._type}},{key:"buffered",get:function(){return this._mediaElement.buffered}},{key:"duration",get:function(){return this._mediaElement.duration}},{key:"volume",get:function(){return this._mediaElement.volume},set:function(e){this._mediaElement.volume=e}},{key:"muted",get:function(){return this._mediaElement.muted},set:function(e){this._mediaElement.muted=e}},{key:"currentTime",get:function(){return this._mediaElement?this._mediaElement.currentTime:0},set:function(e){this._mediaElement?this._internalSeek(e):this._pendingSeekTime=e}},{key:"mediaInfo",get:function(){return Object.assign({},this._mediaInfo)}},{key:"statisticsInfo",get:function(){return null==this._statisticsInfo&&(this._statisticsInfo={}),this._statisticsInfo=this._fillStatisticsInfo(this._statisticsInfo),Object.assign({},this._statisticsInfo)}}]),e}();t.default=v,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=h(n(2)),a=h(n(0)),s=h(n(8)),o=h(n(14)),u=h(n(5)),l=h(n(43)),d=h(n(9));function h(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(t,i){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.TAG="Transmuxer",this._emitter=new r.default,i.enableWorker&&"undefined"!=typeof Worker)try{var d=n(44);this._worker=d(l.default),this._workerDestroying=!1,this._worker.addEventListener("message",this._onWorkerMessage.bind(this)),this._worker.postMessage({cmd:"init",param:[t,i]}),this.e={onLoggingConfigChanged:this._onLoggingConfigChanged.bind(this)},s.default.registerListener(this.e.onLoggingConfigChanged),this._worker.postMessage({cmd:"logging_config",param:s.default.getConfig()})}catch(e){a.default.e(this.TAG,"Error while initialize transmuxing worker, fallback to inline transmuxing"),this._worker=null,this._controller=new o.default(t,i)}else this._controller=new o.default(t,i);if(this._controller){var h=this._controller;h.on(u.default.IO_ERROR,this._onIOError.bind(this)),h.on(u.default.DEMUX_ERROR,this._onDemuxError.bind(this)),h.on(u.default.INIT_SEGMENT,this._onInitSegment.bind(this)),h.on(u.default.MEDIA_SEGMENT,this._onMediaSegment.bind(this)),h.on(u.default.LOADING_COMPLETE,this._onLoadingComplete.bind(this)),h.on(u.default.RECOVERED_EARLY_EOF,this._onRecoveredEarlyEof.bind(this)),h.on(u.default.MEDIA_INFO,this._onMediaInfo.bind(this)),h.on(u.default.STATISTICS_INFO,this._onStatisticsInfo.bind(this)),h.on(u.default.RECOMMEND_SEEKPOINT,this._onRecommendSeekpoint.bind(this)),h.on(u.default.LOADED_SEI,this._onLoadedSei.bind(this))}}return i(e,[{key:"destroy",value:function(){this._worker?this._workerDestroying||(this._workerDestroying=!0,this._worker.postMessage({cmd:"destroy"}),s.default.removeListener(this.e.onLoggingConfigChanged),this.e=null):(this._controller.destroy(),this._controller=null),this._emitter.removeAllListeners(),this._emitter=null}},{key:"on",value:function(e,t){this._emitter.addListener(e,t)}},{key:"off",value:function(e,t){this._emitter.removeListener(e,t)}},{key:"hasWorker",value:function(){return null!=this._worker}},{key:"open",value:function(){this._worker?this._worker.postMessage({cmd:"start"}):this._controller.start()}},{key:"close",value:function(){this._worker?this._worker.postMessage({cmd:"stop"}):this._controller.stop()}},{key:"seek",value:function(e){this._worker?this._worker.postMessage({cmd:"seek",param:e}):this._controller.seek(e)}},{key:"pause",value:function(){this._worker?this._worker.postMessage({cmd:"pause"}):this._controller.pause()}},{key:"resume",value:function(){this._worker?this._worker.postMessage({cmd:"resume"}):this._controller.resume()}},{key:"_onInitSegment",value:function(e,t){var n=this;Promise.resolve().then(function(){n._emitter.emit(u.default.INIT_SEGMENT,e,t)})}},{key:"_onMediaSegment",value:function(e,t){var n=this;Promise.resolve().then(function(){n._emitter.emit(u.default.MEDIA_SEGMENT,e,t)})}},{key:"_onLoadingComplete",value:function(){var e=this;Promise.resolve().then(function(){e._emitter.emit(u.default.LOADING_COMPLETE)})}},{key:"_onRecoveredEarlyEof",value:function(){var e=this;Promise.resolve().then(function(){e._emitter.emit(u.default.RECOVERED_EARLY_EOF)})}},{key:"_onMediaInfo",value:function(e){var t=this;Promise.resolve().then(function(){t._emitter.emit(u.default.MEDIA_INFO,e)})}},{key:"_onStatisticsInfo",value:function(e){var t=this;Promise.resolve().then(function(){t._emitter.emit(u.default.STATISTICS_INFO,e)})}},{key:"_onIOError",value:function(e,t){var n=this;Promise.resolve().then(function(){n._emitter.emit(u.default.IO_ERROR,e,t)})}},{key:"_onDemuxError",value:function(e,t){var n=this;Promise.resolve().then(function(){n._emitter.emit(u.default.DEMUX_ERROR,e,t)})}},{key:"_onRecommendSeekpoint",value:function(e){var t=this;Promise.resolve().then(function(){t._emitter.emit(u.default.RECOMMEND_SEEKPOINT,e)})}},{key:"_onLoadedSei",value:function(e,t){var n=this;Promise.resolve().then(function(){n._emitter.emit(u.default.LOADED_SEI,e,t)})}},{key:"_onLoggingConfigChanged",value:function(e){this._worker&&this._worker.postMessage({cmd:"logging_config",param:e})}},{key:"_onWorkerMessage",value:function(e){var t=e.data,n=t.data;if("destroyed"===t.msg||this._workerDestroying)return this._workerDestroying=!1,this._worker.terminate(),void(this._worker=null);switch(t.msg){case u.default.INIT_SEGMENT:case u.default.MEDIA_SEGMENT:this._emitter.emit(t.msg,n.type,n.data);break;case u.default.LOADING_COMPLETE:case u.default.RECOVERED_EARLY_EOF:this._emitter.emit(t.msg);break;case u.default.MEDIA_INFO:Object.setPrototypeOf(n,d.default.prototype),this._emitter.emit(t.msg,n);break;case u.default.STATISTICS_INFO:this._emitter.emit(t.msg,n);break;case u.default.IO_ERROR:case u.default.DEMUX_ERROR:this._emitter.emit(t.msg,n.type,n.info);break;case u.default.RECOMMEND_SEEKPOINT:this._emitter.emit(t.msg,n);break;case"logcat_callback":a.default.emitter.emit("log",n.type,n.logcat)}}}]),e}();t.default=f,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=f(n(0)),s=f(n(36)),o=f(n(38)),u=f(n(10)),l=f(n(9)),d=n(1),h=f(n(2));function f(e){return e&&e.__esModule?e:{default:e}}var c=function(){function e(t,n){var i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.TAG="FLVDemuxer",this._emitter=new h.default,this._config=n,this._onError=null,this._onMediaInfo=null,this._onTrackMetadata=null,this._onDataAvailable=null,this._dataOffset=t.dataOffset,this._firstParse=!0,this._dispatch=!1,this._hasAudio=t.hasAudioTrack,this._hasVideo=t.hasVideoTrack,this._hasAudioFlagOverrided=!1,this._hasVideoFlagOverrided=!1,this._audioInitialMetadataDispatched=!1,this._videoInitialMetadataDispatched=!1,this._mediaInfo=new l.default,this._mediaInfo.hasAudio=this._hasAudio,this._mediaInfo.hasVideo=this._hasVideo,this._metadata=null,this._audioMetadata=null,this._videoMetadata=null,this._naluLengthSize=4,this._timestampBase=0,this._timescale=1e3,this._duration=0,this._durationOverrided=!1,this._referenceFrameRate={fixed:!0,fps:23.976,fps_num:23976,fps_den:1e3},this._flvSoundRateTable=[5500,11025,22050,44100,48e3],this._mpegSamplingRates=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],this._mpegAudioV10SampleRateTable=[44100,48e3,32e3,0],this._mpegAudioV20SampleRateTable=[22050,24e3,16e3,0],this._mpegAudioV25SampleRateTable=[11025,12e3,8e3,0],this._mpegAudioL1BitRateTable=[0,32,64,96,128,160,192,224,256,288,320,352,384,416,448,-1],this._mpegAudioL2BitRateTable=[0,32,48,56,64,80,96,112,128,160,192,224,256,320,384,-1],this._mpegAudioL3BitRateTable=[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320,-1],this._videoTrack={type:"video",id:1,sequenceNumber:0,samples:[],length:0},this._audioTrack={type:"audio",id:2,sequenceNumber:0,samples:[],length:0},this._littleEndian=(i=new ArrayBuffer(2),new DataView(i).setInt16(0,256,!0),256===new Int16Array(i)[0])}return r(e,[{key:"destroy",value:function(){this._mediaInfo=null,this._metadata=null,this._audioMetadata=null,this._videoMetadata=null,this._videoTrack=null,this._audioTrack=null,this._onError=null,this._onMediaInfo=null,this._onTrackMetadata=null,this._onDataAvailable=null,this._emitter.removeAllListeners(),this._emitter=null}},{key:"bindDataSource",value:function(e){return e.onDataArrival=this.parseChunks.bind(this),this}},{key:"resetMediaInfo",value:function(){this._mediaInfo=new l.default}},{key:"_isInitialMetadataDispatched",value:function(){return this._hasAudio&&this._hasVideo?this._audioInitialMetadataDispatched&&this._videoInitialMetadataDispatched:this._hasAudio&&!this._hasVideo?this._audioInitialMetadataDispatched:!(this._hasAudio||!this._hasVideo)&&this._videoInitialMetadataDispatched}},{key:"parseChunks",value:function(t,n){if(!(this._onError&&this._onMediaInfo&&this._onTrackMetadata&&this._onDataAvailable))throw new d.IllegalStateException("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");var i=0,r=this._littleEndian;if(0===n){if(!(t.byteLength>13))return 0;i=e.probe(t).dataOffset}this._firstParse&&(this._firstParse=!1,n+i!==this._dataOffset&&a.default.w(this.TAG,"First time parsing but chunk byteStart invalid!"),0!==new DataView(t,i).getUint32(0,!r)&&a.default.w(this.TAG,"PrevTagSize0 !== 0 !!!"),i+=4);for(;i<t.byteLength;){this._dispatch=!0;var s=new DataView(t,i);if(i+11+4>t.byteLength)break;var o=s.getUint8(0),u=16777215&s.getUint32(0,!r);if(i+11+u+4>t.byteLength)break;if(8===o||9===o||18===o){var l=s.getUint8(4),h=s.getUint8(5),f=s.getUint8(6)|h<<8|l<<16|s.getUint8(7)<<24;0!==(16777215&s.getUint32(7,!r))&&a.default.w(this.TAG,"Meet tag which has StreamID != 0!");var c=i+11;switch(o){case 8:this._parseAudioData(t,c,u,f);break;case 9:this._parseVideoData(t,c,u,f,n+i);break;case 18:this._parseScriptData(t,c,u)}var _=s.getUint32(11+u,!r);_!==11+u&&a.default.w(this.TAG,"Invalid PrevTagSize "+_),i+=11+u+4}else a.default.w(this.TAG,"Unsupported tag type "+o+", skipped"),i+=11+u+4}return this._isInitialMetadataDispatched()&&this._dispatch&&(this._audioTrack.length||this._videoTrack.length)&&this._onDataAvailable(this._audioTrack,this._videoTrack),i}},{key:"_parseScriptData",value:function(e,t,n){var r=s.default.parseScriptData(e,t,n);if(r.hasOwnProperty("onMetaData")){if(null==r.onMetaData||"object"!==i(r.onMetaData))return void a.default.w(this.TAG,"Invalid onMetaData structure!");this._metadata&&a.default.w(this.TAG,"Found another onMetaData tag!"),this._metadata=r;var o=this._metadata.onMetaData;if(this._emitter.emit("metadata_arrived",o),"boolean"==typeof o.hasAudio&&!1===this._hasAudioFlagOverrided&&(this._hasAudio=o.hasAudio,this._mediaInfo.hasAudio=this._hasAudio),"boolean"==typeof o.hasVideo&&!1===this._hasVideoFlagOverrided&&(this._hasVideo=o.hasVideo,this._mediaInfo.hasVideo=this._hasVideo),"number"==typeof o.audiodatarate&&(this._mediaInfo.audioDataRate=o.audiodatarate),"number"==typeof o.videodatarate&&(this._mediaInfo.videoDataRate=o.videodatarate),"number"==typeof o.width&&(this._mediaInfo.width=o.width),"number"==typeof o.height&&(this._mediaInfo.height=o.height),"number"==typeof o.duration){if(!this._durationOverrided){var u=Math.floor(o.duration*this._timescale);this._duration=u,this._mediaInfo.duration=u}}else this._mediaInfo.duration=0;if("number"==typeof o.framerate){var l=Math.floor(1e3*o.framerate);if(l>0){var d=l/1e3;this._referenceFrameRate.fixed=!0,this._referenceFrameRate.fps=d,this._referenceFrameRate.fps_num=l,this._referenceFrameRate.fps_den=1e3,this._mediaInfo.fps=d}}if("object"===i(o.keyframes)){this._mediaInfo.hasKeyframesIndex=!0;var h=o.keyframes;this._mediaInfo.keyframesIndex=this._parseKeyframesIndex(h),o.keyframes=null}else this._mediaInfo.hasKeyframesIndex=!1;this._dispatch=!1,this._mediaInfo.metadata=o,a.default.v(this.TAG,"Parsed onMetaData"),this._mediaInfo.isComplete()&&this._onMediaInfo(this._mediaInfo)}}},{key:"_parseKeyframesIndex",value:function(e){for(var t=[],n=[],i=1;i<e.times.length;i++){var r=this._timestampBase+Math.floor(1e3*e.times[i]);t.push(r),n.push(e.filepositions[i])}return{times:t,filepositions:n}}},{key:"_parseAudioData",value:function(e,t,n,i){if(n<=1)a.default.w(this.TAG,"Flv: Invalid audio packet, missing SoundData payload!");else if(!0!==this._hasAudioFlagOverrided||!1!==this._hasAudio){this._littleEndian;var r=new DataView(e,t,n).getUint8(0),s=r>>>4;if(2===s||10===s){var o=0,l=(12&r)>>>2;if(l>=0&&l<=4){o=this._flvSoundRateTable[l];var d=1&r,h=this._audioMetadata,f=this._audioTrack;if(h||(!1===this._hasAudio&&!1===this._hasAudioFlagOverrided&&(this._hasAudio=!0,this._mediaInfo.hasAudio=!0),(h=this._audioMetadata={}).type="audio",h.id=f.id,h.timescale=this._timescale,h.duration=this._duration,h.audioSampleRate=o,h.channelCount=0===d?1:2),10===s){var c=this._parseAACAudioData(e,t+1,n-1);if(null==c)return;if(0===c.packetType){h.config&&a.default.w(this.TAG,"Found another AudioSpecificConfig!");var _=c.data;h.audioSampleRate=_.samplingRate,h.channelCount=_.channelCount,h.codec=_.codec,h.originalCodec=_.originalCodec,h.config=_.config,h.refSampleDuration=1024/h.audioSampleRate*h.timescale,a.default.v(this.TAG,"Parsed AudioSpecificConfig"),this._isInitialMetadataDispatched()?this._dispatch&&(this._audioTrack.length||this._videoTrack.length)&&this._onDataAvailable(this._audioTrack,this._videoTrack):this._audioInitialMetadataDispatched=!0,this._dispatch=!1,this._onTrackMetadata("audio",h);var m=this._mediaInfo;m.audioCodec=h.originalCodec,m.audioSampleRate=h.audioSampleRate,m.audioChannelCount=h.channelCount,m.hasVideo?null!=m.videoCodec&&(m.mimeType='video/x-flv; codecs="'+m.videoCodec+","+m.audioCodec+'"'):m.mimeType='video/x-flv; codecs="'+m.audioCodec+'"',m.isComplete()&&this._onMediaInfo(m)}else if(1===c.packetType){var p=this._timestampBase+i,v={unit:c.data,length:c.data.byteLength,dts:p,pts:p};f.samples.push(v),f.length+=c.data.length}else a.default.e(this.TAG,"Flv: Unsupported AAC data type "+c.packetType)}else if(2===s){if(!h.codec){var g=this._parseMP3AudioData(e,t+1,n-1,!0);if(null==g)return;h.audioSampleRate=g.samplingRate,h.channelCount=g.channelCount,h.codec=g.codec,h.originalCodec=g.originalCodec,h.refSampleDuration=1152/h.audioSampleRate*h.timescale,a.default.v(this.TAG,"Parsed MPEG Audio Frame Header"),this._audioInitialMetadataDispatched=!0,this._onTrackMetadata("audio",h);var y=this._mediaInfo;y.audioCodec=h.codec,y.audioSampleRate=h.audioSampleRate,y.audioChannelCount=h.channelCount,y.audioDataRate=g.bitRate,y.hasVideo?null!=y.videoCodec&&(y.mimeType='video/x-flv; codecs="'+y.videoCodec+","+y.audioCodec+'"'):y.mimeType='video/x-flv; codecs="'+y.audioCodec+'"',y.isComplete()&&this._onMediaInfo(y)}var E=this._parseMP3AudioData(e,t+1,n-1,!1);if(null==E)return;var b=this._timestampBase+i,S={unit:E,length:E.byteLength,dts:b,pts:b};f.samples.push(S),f.length+=E.length}}else this._onError(u.default.FORMAT_ERROR,"Flv: Invalid audio sample rate idx: "+l)}else this._onError(u.default.CODEC_UNSUPPORTED,"Flv: Unsupported audio codec idx: "+s)}}},{key:"_parseAACAudioData",value:function(e,t,n){if(!(n<=1)){var i={},r=new Uint8Array(e,t,n);return i.packetType=r[0],0===r[0]?i.data=this._parseAACAudioSpecificConfig(e,t+1,n-1):i.data=r.subarray(1),i}a.default.w(this.TAG,"Flv: Invalid AAC packet, missing AACPacketType or/and Data!")}},{key:"_parseAACAudioSpecificConfig",value:function(e,t,n){var i,r,a=new Uint8Array(e,t,n),s=null,o=0,l=null;if(o=i=a[0]>>>3,(r=(7&a[0])<<1|a[1]>>>7)<0||r>=this._mpegSamplingRates.length)this._onError(u.default.FORMAT_ERROR,"Flv: AAC invalid sampling frequency index!");else{var d=this._mpegSamplingRates[r],h=(120&a[1])>>>3;if(!(h<0||h>=8)){5===o&&(l=(7&a[1])<<1|a[2]>>>7,(124&a[2])>>>2);var f=self.navigator.userAgent.toLowerCase();return-1!==f.indexOf("firefox")?r>=6?(o=5,s=new Array(4),l=r-3):(o=2,s=new Array(2),l=r):-1!==f.indexOf("android")?(o=2,s=new Array(2),l=r):(o=5,l=r,s=new Array(4),r>=6?l=r-3:1===h&&(o=2,s=new Array(2),l=r)),s[0]=o<<3,s[0]|=(15&r)>>>1,s[1]=(15&r)<<7,s[1]|=(15&h)<<3,5===o&&(s[1]|=(15&l)>>>1,s[2]=(1&l)<<7,s[2]|=8,s[3]=0),{config:s,samplingRate:d,channelCount:h,codec:"mp4a.40."+o,originalCodec:"mp4a.40."+i}}this._onError(u.default.FORMAT_ERROR,"Flv: AAC invalid channel configuration")}}},{key:"_parseMP3AudioData",value:function(e,t,n,i){if(!(n<4)){this._littleEndian;var r=new Uint8Array(e,t,n),s=null;if(i){if(255!==r[0])return;var o=r[1]>>>3&3,u=(6&r[1])>>1,l=(240&r[2])>>>4,d=(12&r[2])>>>2,h=3!==(r[3]>>>6&3)?2:1,f=0,c=0;switch(o){case 0:f=this._mpegAudioV25SampleRateTable[d];break;case 2:f=this._mpegAudioV20SampleRateTable[d];break;case 3:f=this._mpegAudioV10SampleRateTable[d]}switch(u){case 1:34,l<this._mpegAudioL3BitRateTable.length&&(c=this._mpegAudioL3BitRateTable[l]);break;case 2:33,l<this._mpegAudioL2BitRateTable.length&&(c=this._mpegAudioL2BitRateTable[l]);break;case 3:32,l<this._mpegAudioL1BitRateTable.length&&(c=this._mpegAudioL1BitRateTable[l])}s={bitRate:c,samplingRate:f,channelCount:h,codec:"mp3",originalCodec:"mp3"}}else s=r;return s}a.default.w(this.TAG,"Flv: Invalid MP3 packet, header missing!")}},{key:"_parseVideoData",value:function(e,t,n,i,r){if(n<=1)a.default.w(this.TAG,"Flv: Invalid video packet, missing VideoData payload!");else if(!0!==this._hasVideoFlagOverrided||!1!==this._hasVideo){var s=new Uint8Array(e,t,n)[0],o=(240&s)>>>4,l=15&s;7===l?this._parseAVCVideoPacket(e,t+1,n-1,i,r,o):this._onError(u.default.CODEC_UNSUPPORTED,"Flv: Unsupported codec in video frame: "+l)}}},{key:"_parseAVCVideoPacket",value:function(e,t,n,i,r,s){if(n<4)a.default.w(this.TAG,"Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");else{var o=this._littleEndian,l=new DataView(e,t,n),d=l.getUint8(0),h=(16777215&l.getUint32(0,!o))<<8>>8;if(0===d)this._parseAVCDecoderConfigurationRecord(e,t+4,n-4);else if(1===d)this._parseAVCVideoData(e,t+4,n-4,i,r,s,h);else if(2!==d)return void this._onError(u.default.FORMAT_ERROR,"Flv: Invalid video packet type "+d)}}},{key:"_parseAVCDecoderConfigurationRecord",value:function(e,t,n){if(n<7)a.default.w(this.TAG,"Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");else{var i=this._videoMetadata,r=this._videoTrack,s=this._littleEndian,l=new DataView(e,t,n);i?void 0!==i.avcc&&a.default.w(this.TAG,"Found another AVCDecoderConfigurationRecord!"):(!1===this._hasVideo&&!1===this._hasVideoFlagOverrided&&(this._hasVideo=!0,this._mediaInfo.hasVideo=!0),(i=this._videoMetadata={}).type="video",i.id=r.id,i.timescale=this._timescale,i.duration=this._duration);var d=l.getUint8(0),h=l.getUint8(1);l.getUint8(2),l.getUint8(3);if(1===d&&0!==h)if(this._naluLengthSize=1+(3&l.getUint8(4)),3===this._naluLengthSize||4===this._naluLengthSize){var f=31&l.getUint8(5);if(0!==f){f>1&&a.default.w(this.TAG,"Flv: Strange AVCDecoderConfigurationRecord: SPS Count = "+f);for(var c=6,_=0;_<f;_++){var m=l.getUint16(c,!s);if(c+=2,0!==m){var p=new Uint8Array(e,t+c,m);c+=m;var v=o.default.parseSPS(p);if(0===_){i.codecWidth=v.codec_size.width,i.codecHeight=v.codec_size.height,i.presentWidth=v.present_size.width,i.presentHeight=v.present_size.height,i.profile=v.profile_string,i.level=v.level_string,i.bitDepth=v.bit_depth,i.chromaFormat=v.chroma_format,i.sarRatio=v.par_ratio,i.frameRate=v.frame_rate,!1!==v.frame_rate.fixed&&0!==v.frame_rate.fps_num&&0!==v.frame_rate.fps_den||(i.frameRate=this._referenceFrameRate);var g=i.frameRate.fps_den,y=i.frameRate.fps_num;i.refSampleDuration=i.timescale*(g/y);for(var E=p.subarray(1,4),b="avc1.",S=0;S<3;S++){var k=E[S].toString(16);k.length<2&&(k="0"+k),b+=k}i.codec=b;var L=this._mediaInfo;L.width=i.codecWidth,L.height=i.codecHeight,L.fps=i.frameRate.fps,L.profile=i.profile,L.level=i.level,L.refFrames=v.ref_frames,L.chromaFormat=v.chroma_format_string,L.sarNum=i.sarRatio.width,L.sarDen=i.sarRatio.height,L.videoCodec=b,L.hasAudio?null!=L.audioCodec&&(L.mimeType='video/x-flv; codecs="'+L.videoCodec+","+L.audioCodec+'"'):L.mimeType='video/x-flv; codecs="'+L.videoCodec+'"',L.isComplete()&&this._onMediaInfo(L)}}}var w=l.getUint8(c);if(0!==w){w>1&&a.default.w(this.TAG,"Flv: Strange AVCDecoderConfigurationRecord: PPS Count = "+w),c++;for(var R=0;R<w;R++){var A=l.getUint16(c,!s);c+=2,0!==A&&(c+=A)}i.avcc=new Uint8Array(n),i.avcc.set(new Uint8Array(e,t,n),0),a.default.v(this.TAG,"Parsed AVCDecoderConfigurationRecord"),this._isInitialMetadataDispatched()?this._dispatch&&(this._audioTrack.length||this._videoTrack.length)&&this._onDataAvailable(this._audioTrack,this._videoTrack):this._videoInitialMetadataDispatched=!0,this._dispatch=!1,this._onTrackMetadata("video",i)}else this._onError(u.default.FORMAT_ERROR,"Flv: Invalid AVCDecoderConfigurationRecord: No PPS")}else this._onError(u.default.FORMAT_ERROR,"Flv: Invalid AVCDecoderConfigurationRecord: No SPS")}else this._onError(u.default.FORMAT_ERROR,"Flv: Strange NaluLengthSizeMinusOne: "+(this._naluLengthSize-1));else this._onError(u.default.FORMAT_ERROR,"Flv: Invalid AVCDecoderConfigurationRecord")}}},{key:"_parseAVCVideoData",value:function(e,t,n,i,r,s,o){for(var u=this._littleEndian,l=new DataView(e,t,n),d=[],h=0,f=0,c=this._naluLengthSize,_=this._timestampBase+i,m=1===s;f<n;){if(f+4>=n){a.default.w(this.TAG,"Malformed Nalu near timestamp "+_+", offset = "+f+", dataSize = "+n);break}var p=l.getUint32(f,!u);if(3===c&&(p>>>=8),p>n-c)return void a.default.w(this.TAG,"Malformed Nalus near timestamp "+_+", NaluSize > DataSize!");var v=31&l.getUint8(f+c);5===v&&(m=!0);var g=new Uint8Array(e,t+f,c+p),y={type:v,data:g};d.push(y),h+=g.byteLength,f+=c+p}if(d.length){var E=this._videoTrack,b={units:d,length:h,isKeyframe:m,dts:_,cts:o,pts:_+o};m&&(b.fileposition=r),E.samples.push(b),E.length+=h}}},{key:"onTrackMetadata",get:function(){return this._onTrackMetadata},set:function(e){this._onTrackMetadata=e}},{key:"onMediaInfo",get:function(){return this._onMediaInfo},set:function(e){this._onMediaInfo=e}},{key:"onError",get:function(){return this._onError},set:function(e){this._onError=e}},{key:"onDataAvailable",get:function(){return this._onDataAvailable},set:function(e){this._onDataAvailable=e}},{key:"timestampBase",get:function(){return this._timestampBase},set:function(e){this._timestampBase=e}},{key:"overridedDuration",get:function(){return this._duration},set:function(e){this._durationOverrided=!0,this._duration=e,this._mediaInfo.duration=e}},{key:"overridedHasAudio",set:function(e){this._hasAudioFlagOverrided=!0,this._hasAudio=e,this._mediaInfo.hasAudio=e}},{key:"overridedHasVideo",set:function(e){this._hasVideoFlagOverrided=!0,this._hasVideo=e,this._mediaInfo.hasVideo=e}}],[{key:"probe",value:function(e){var t=new Uint8Array(e),n={match:!1};if(70!==t[0]||76!==t[1]||86!==t[2]||1!==t[3])return n;var i,r,a=(4&t[4])>>>2!=0,s=0!=(1&t[4]),o=(i=t)[r=5]<<24|i[r+1]<<16|i[r+2]<<8|i[r+3];return o<9?n:{match:!0,consumed:o,dataOffset:o,hasAudioTrack:a,hasVideoTrack:s}}}]),e}();t.default=c,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=o(n(0)),a=o(n(37)),s=n(1);function o(e){return e&&e.__esModule?e:{default:e}}var u,l=(u=new ArrayBuffer(2),new DataView(u).setInt16(0,256,!0),256===new Int16Array(u)[0]),d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"parseScriptData",value:function(t,n,i){var a={};try{var s=e.parseValue(t,n,i),o=e.parseValue(t,n+s.size,i-s.size);a[s.data]=o.data}catch(e){r.default.e("AMF",e.toString())}return a}},{key:"parseObject",value:function(t,n,i){if(i<3)throw new s.IllegalStateException("Data not enough when parse ScriptDataObject");var r=e.parseString(t,n,i),a=e.parseValue(t,n+r.size,i-r.size),o=a.objectEnd;return{data:{name:r.data,value:a.data},size:r.size+a.size,objectEnd:o}}},{key:"parseVariable",value:function(t,n,i){return e.parseObject(t,n,i)}},{key:"parseString",value:function(e,t,n){if(n<2)throw new s.IllegalStateException("Data not enough when parse String");var i=new DataView(e,t,n).getUint16(0,!l);return{data:i>0?(0,a.default)(new Uint8Array(e,t+2,i)):"",size:2+i}}},{key:"parseLongString",value:function(e,t,n){if(n<4)throw new s.IllegalStateException("Data not enough when parse LongString");var i=new DataView(e,t,n).getUint32(0,!l);return{data:i>0?(0,a.default)(new Uint8Array(e,t+4,i)):"",size:4+i}}},{key:"parseDate",value:function(e,t,n){if(n<10)throw new s.IllegalStateException("Data size invalid when parse Date");var i=new DataView(e,t,n),r=i.getFloat64(0,!l),a=i.getInt16(8,!l);return{data:new Date(r+=60*a*1e3),size:10}}},{key:"parseValue",value:function(t,n,i){if(i<1)throw new s.IllegalStateException("Data not enough when parse Value");var a=new DataView(t,n,i),o=1,u=a.getUint8(0),d=void 0,h=!1;try{switch(u){case 0:d=a.getFloat64(1,!l),o+=8;break;case 1:d=!!a.getUint8(1),o+=1;break;case 2:var f=e.parseString(t,n+1,i-1);d=f.data,o+=f.size;break;case 3:d={};var c=0;9==(16777215&a.getUint32(i-4,!l))&&(c=3);for(var _=1e4;o<i-4&&_-- >0;){var m=e.parseObject(t,n+o,i-o-c);if(m.objectEnd)break;d[m.data.name]=m.data.value,o+=m.size}if(o<=i-3)9===(16777215&a.getUint32(o-1,!l))&&(o+=3);break;case 8:d={},o+=4;var p=0;9==(16777215&a.getUint32(i-4,!l))&&(p=3);for(var v=1e4;o<i-8&&v-- >0;){var g=e.parseVariable(t,n+o,i-o-p);if(g.objectEnd)break;d[g.data.name]=g.data.value,o+=g.size}if(o<=i-3)9===(16777215&a.getUint32(o-1,!l))&&(o+=3);break;case 9:d=void 0,o=1,h=!0;break;case 10:d=[];var y=a.getUint32(1,!l);o+=4;for(var E=0;E<y;E++){var b=e.parseValue(t,n+o,i-o);d.push(b.data),o+=b.size}break;case 11:var S=e.parseDate(t,n+1,i-1);d=S.data,o+=S.size;break;case 12:var k=e.parseString(t,n+1,i-1);d=k.data,o+=k.size;break;default:o=i,r.default.w("AMF","Unsupported AMF value type "+u)}}catch(e){r.default.e("AMF",e.toString())}return{data:d,size:o,objectEnd:h}}}]),e}();t.default=d,e.exports=t.default},function(e,t,n){"use strict";function i(e,t,n){var i=e;if(t+n<i.length){for(;n--;)if(128!=(192&i[++t]))return!1;return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=[],n=e,r=0,a=e.length;r<a;)if(n[r]<128)t.push(String.fromCharCode(n[r])),++r;else{if(n[r]<192);else if(n[r]<224){if(i(n,r,1)){var s=(31&n[r])<<6|63&n[r+1];if(s>=128){t.push(String.fromCharCode(65535&s)),r+=2;continue}}}else if(n[r]<240){if(i(n,r,2)){var o=(15&n[r])<<12|(63&n[r+1])<<6|63&n[r+2];if(o>=2048&&55296!=(63488&o)){t.push(String.fromCharCode(65535&o)),r+=3;continue}}}else if(n[r]<248&&i(n,r,3)){var u=(7&n[r])<<18|(63&n[r+1])<<12|(63&n[r+2])<<6|63&n[r+3];if(u>65536&&u<1114112){u-=65536,t.push(String.fromCharCode(u>>>10|55296)),t.push(String.fromCharCode(1023&u|56320)),r+=4;continue}}t.push(String.fromCharCode(65533)),++r}return t.join("")},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(39),s=(i=a)&&i.__esModule?i:{default:i};var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"_ebsp2rbsp",value:function(e){for(var t=e,n=t.byteLength,i=new Uint8Array(n),r=0,a=0;a<n;a++)a>=2&&3===t[a]&&0===t[a-1]&&0===t[a-2]||(i[r]=t[a],r++);return new Uint8Array(i.buffer,0,r)}},{key:"parseSPS",value:function(t){var n=e._ebsp2rbsp(t),i=new s.default(n);i.readByte();var r=i.readByte();i.readByte();var a=i.readByte();i.readUEG();var o=e.getProfileString(r),u=e.getLevelString(a),l=1,d=420,h=8;if((100===r||110===r||122===r||244===r||44===r||83===r||86===r||118===r||128===r||138===r||144===r)&&(3===(l=i.readUEG())&&i.readBits(1),l<=3&&(d=[0,420,422,444][l]),h=i.readUEG()+8,i.readUEG(),i.readBits(1),i.readBool()))for(var f=3!==l?8:12,c=0;c<f;c++)i.readBool()&&(c<6?e._skipScalingList(i,16):e._skipScalingList(i,64));i.readUEG();var _=i.readUEG();if(0===_)i.readUEG();else if(1===_){i.readBits(1),i.readSEG(),i.readSEG();for(var m=i.readUEG(),p=0;p<m;p++)i.readSEG()}var v=i.readUEG();i.readBits(1);var g=i.readUEG(),y=i.readUEG(),E=i.readBits(1);0===E&&i.readBits(1),i.readBits(1);var b=0,S=0,k=0,L=0;i.readBool()&&(b=i.readUEG(),S=i.readUEG(),k=i.readUEG(),L=i.readUEG());var w=1,R=1,A=0,O=!0,T=0,C=0;if(i.readBool()){if(i.readBool()){var I=i.readByte();I>0&&I<16?(w=[1,12,10,16,40,24,20,32,80,18,15,64,160,4,3,2][I-1],R=[1,11,11,11,33,11,11,11,33,11,11,33,99,3,2,1][I-1]):255===I&&(w=i.readByte()<<8|i.readByte(),R=i.readByte()<<8|i.readByte())}if(i.readBool()&&i.readBool(),i.readBool()&&(i.readBits(4),i.readBool()&&i.readBits(24)),i.readBool()&&(i.readUEG(),i.readUEG()),i.readBool()){var x=i.readBits(32),M=i.readBits(32);O=i.readBool(),A=(T=M)/(C=2*x)}}var D=1;1===w&&1===R||(D=w/R);var B=0,P=0;0===l?(B=1,P=2-E):(B=3===l?1:2,P=(1===l?2:1)*(2-E));var U=16*(g+1),N=16*(y+1)*(2-E);U-=(b+S)*B,N-=(k+L)*P;var F=Math.ceil(U*D);return i.destroy(),i=null,{profile_string:o,level_string:u,bit_depth:h,ref_frames:v,chroma_format:d,chroma_format_string:e.getChromaFormatString(d),frame_rate:{fixed:O,fps:A,fps_den:C,fps_num:T},par_ratio:{width:w,height:R},codec_size:{width:U,height:N},present_size:{width:F,height:N}}}},{key:"_skipScalingList",value:function(e,t){for(var n=8,i=8,r=0;r<t;r++)0!==i&&(i=(n+e.readSEG()+256)%256),n=0===i?n:i}},{key:"getProfileString",value:function(e){switch(e){case 66:return"Baseline";case 77:return"Main";case 88:return"Extended";case 100:return"High";case 110:return"High10";case 122:return"High422";case 244:return"High444";default:return"Unknown"}}},{key:"getLevelString",value:function(e){return(e/10).toFixed(1)}},{key:"getChromaFormatString",value:function(e){switch(e){case 420:return"4:2:0";case 422:return"4:2:2";case 444:return"4:4:4";default:return"Unknown"}}}]),e}();t.default=o,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(1);var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.TAG="ExpGolomb",this._buffer=t,this._buffer_index=0,this._total_bytes=t.byteLength,this._total_bits=8*t.byteLength,this._current_word=0,this._current_word_bits_left=0}return i(e,[{key:"destroy",value:function(){this._buffer=null}},{key:"_fillCurrentWord",value:function(){var e=this._total_bytes-this._buffer_index;if(e<=0)throw new r.IllegalStateException("ExpGolomb: _fillCurrentWord() but no bytes available");var t=Math.min(4,e),n=new Uint8Array(4);n.set(this._buffer.subarray(this._buffer_index,this._buffer_index+t)),this._current_word=new DataView(n.buffer).getUint32(0,!1),this._buffer_index+=t,this._current_word_bits_left=8*t}},{key:"readBits",value:function(e){if(e>32)throw new r.InvalidArgumentException("ExpGolomb: readBits() bits exceeded max 32bits!");if(e<=this._current_word_bits_left){var t=this._current_word>>>32-e;return this._current_word<<=e,this._current_word_bits_left-=e,t}var n=this._current_word_bits_left?this._current_word:0;n>>>=32-this._current_word_bits_left;var i=e-this._current_word_bits_left;this._fillCurrentWord();var a=Math.min(i,this._current_word_bits_left),s=this._current_word>>>32-a;return this._current_word<<=a,this._current_word_bits_left-=a,n=n<<a|s}},{key:"readBool",value:function(){return 1===this.readBits(1)}},{key:"readByte",value:function(){return this.readBits(8)}},{key:"_skipLeadingZero",value:function(){var e=void 0;for(e=0;e<this._current_word_bits_left;e++)if(0!=(this._current_word&2147483648>>>e))return this._current_word<<=e,this._current_word_bits_left-=e,e;return this._fillCurrentWord(),e+this._skipLeadingZero()}},{key:"readUEG",value:function(){var e=this._skipLeadingZero();return this.readBits(e+1)-1}},{key:"readSEG",value:function(){var e=this.readUEG();return 1&e?e+1>>>1:-1*(e>>>1)}}]),e}();t.default=a,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=d(n(0)),a=d(n(41)),s=d(n(42)),o=d(n(4)),u=n(15),l=n(1);function d(e){return e&&e.__esModule?e:{default:e}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.TAG="MP4Remuxer",this._config=t,this._isLive=!0===t.isLive,this._dtsBase=-1,this._dtsBaseInited=!1,this._audioDtsBase=1/0,this._videoDtsBase=1/0,this._audioNextDts=void 0,this._videoNextDts=void 0,this._audioStashedLastSample=null,this._videoStashedLastSample=null,this._audioMeta=null,this._videoMeta=null,this._audioSegmentInfoList=new u.MediaSegmentInfoList("audio"),this._videoSegmentInfoList=new u.MediaSegmentInfoList("video"),this._onInitSegment=null,this._onMediaSegment=null,this._forceFirstIDR=!(!o.default.chrome||!(o.default.version.major<50||50===o.default.version.major&&o.default.version.build<2661)),this._fillSilentAfterSeek=o.default.msedge||o.default.msie,this._mp3UseMpegAudio=!o.default.firefox,this._fillAudioTimestampGap=this._config.fixAudioTimestampGap}return i(e,[{key:"destroy",value:function(){this._dtsBase=-1,this._dtsBaseInited=!1,this._audioMeta=null,this._videoMeta=null,this._audioSegmentInfoList.clear(),this._audioSegmentInfoList=null,this._videoSegmentInfoList.clear(),this._videoSegmentInfoList=null,this._onInitSegment=null,this._onMediaSegment=null}},{key:"bindDataSource",value:function(e){return e.onDataAvailable=this.remux.bind(this),e.onTrackMetadata=this._onTrackMetadataReceived.bind(this),this}},{key:"insertDiscontinuity",value:function(){this._audioNextDts=this._videoNextDts=void 0}},{key:"seek",value:function(e){this._audioStashedLastSample=null,this._videoStashedLastSample=null,this._videoSegmentInfoList.clear(),this._audioSegmentInfoList.clear()}},{key:"remux",value:function(e,t){if(!this._onMediaSegment)throw new l.IllegalStateException("MP4Remuxer: onMediaSegment callback must be specificed!");this._dtsBaseInited||this._calculateDtsBase(e,t),this._remuxVideo(t),this._remuxAudio(e)}},{key:"_onTrackMetadataReceived",value:function(e,t){var n=null,i="mp4",r=t.codec;if("audio"===e)this._audioMeta=t,"mp3"===t.codec&&this._mp3UseMpegAudio?(i="mpeg",r="",n=new Uint8Array):n=a.default.generateInitSegment(t);else{if("video"!==e)return;this._videoMeta=t,n=a.default.generateInitSegment(t)}if(!this._onInitSegment)throw new l.IllegalStateException("MP4Remuxer: onInitSegment callback must be specified!");this._onInitSegment(e,{type:e,data:n.buffer,codec:r,container:e+"/"+i,mediaDuration:t.duration})}},{key:"_calculateDtsBase",value:function(e,t){this._dtsBaseInited||(e.samples&&e.samples.length&&(this._audioDtsBase=e.samples[0].dts),t.samples&&t.samples.length&&(this._videoDtsBase=t.samples[0].dts),this._dtsBase=Math.min(this._audioDtsBase,this._videoDtsBase),this._dtsBaseInited=!0)}},{key:"flushStashedSamples",value:function(){var e=this._videoStashedLastSample,t=this._audioStashedLastSample,n={type:"video",id:1,sequenceNumber:0,samples:[],length:0};null!=e&&(n.samples.push(e),n.length=e.length);var i={type:"audio",id:2,sequenceNumber:0,samples:[],length:0};null!=t&&(i.samples.push(t),i.length=t.length),this._videoStashedLastSample=null,this._audioStashedLastSample=null,this._remuxVideo(n,!0),this._remuxAudio(i,!0)}},{key:"_remuxAudio",value:function(e,t){if(null!=this._audioMeta){var n,i=e,l=i.samples,d=void 0,h=-1,f=this._audioMeta.refSampleDuration,c="mp3"===this._audioMeta.codec&&this._mp3UseMpegAudio,_=this._dtsBaseInited&&void 0===this._audioNextDts,m=!1;if(l&&0!==l.length&&(1!==l.length||t)){var p=0,v=null,g=0;c?(p=0,g=i.length):(p=8,g=8+i.length);var y=null;if(l.length>1&&(g-=(y=l.pop()).length),null!=this._audioStashedLastSample){var E=this._audioStashedLastSample;this._audioStashedLastSample=null,l.unshift(E),g+=E.length}null!=y&&(this._audioStashedLastSample=y);var b=l[0].dts-this._dtsBase;if(this._audioNextDts)d=b-this._audioNextDts;else if(this._audioSegmentInfoList.isEmpty())d=0,this._fillSilentAfterSeek&&!this._videoSegmentInfoList.isEmpty()&&"mp3"!==this._audioMeta.originalCodec&&(m=!0);else{var S=this._audioSegmentInfoList.getLastSampleBefore(b);if(null!=S){var k=b-(S.originalDts+S.duration);k<=3&&(k=0),d=b-(S.dts+S.duration+k)}else d=0}if(m){var L=b-d,w=this._videoSegmentInfoList.getLastSegmentBefore(b);if(null!=w&&w.beginDts<L){var R=s.default.getSilentFrame(this._audioMeta.originalCodec,this._audioMeta.channelCount);if(R){var A=w.beginDts,O=L-w.beginDts;r.default.v(this.TAG,"InsertPrefixSilentAudio: dts: "+A+", duration: "+O),l.unshift({unit:R,dts:A,pts:A}),g+=R.byteLength}}else m=!1}for(var T=[],C=0;C<l.length;C++){var I=l[C],x=I.unit,M=I.dts-this._dtsBase,D=M,B=!1,P=null,U=0;if(!(M<-.001)){if("mp3"!==this._audioMeta.codec){var N=M;if(this._audioNextDts&&(N=this._audioNextDts),(d=M-N)<=-3*f){r.default.w(this.TAG,"Dropping 1 audio frame (originalDts: "+M+" ms ,curRefDts: "+N+" ms)  due to dtsCorrection: "+d+" ms overlap.");continue}if(d>=3*f&&this._fillAudioTimestampGap&&!o.default.safari){B=!0;var F=Math.floor(d/f);r.default.w(this.TAG,"Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.\noriginalDts: "+M+" ms, curRefDts: "+N+" ms, dtsCorrection: "+Math.round(d)+" ms, generate: "+F+" frames"),D=Math.floor(N),U=Math.floor(N+f)-D;var j=s.default.getSilentFrame(this._audioMeta.originalCodec,this._audioMeta.channelCount);null==j&&(r.default.w(this.TAG,"Unable to generate silent frame for "+this._audioMeta.originalCodec+" with "+this._audioMeta.channelCount+" channels, repeat last frame"),j=x),P=[];for(var G=0;G<F;G++){N+=f;var V=Math.floor(N),z=Math.floor(N+f)-V,K={dts:V,pts:V,cts:0,unit:j,size:j.byteLength,duration:z,originalDts:M,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0}};P.push(K),g+=x.byteLength}this._audioNextDts=N+f}else D=Math.floor(N),U=Math.floor(N+f)-D,this._audioNextDts=N+f}else{if(D=M-d,C!==l.length-1)U=l[C+1].dts-this._dtsBase-d-D;else if(null!=y)U=y.dts-this._dtsBase-d-D;else U=T.length>=1?T[T.length-1].duration:Math.floor(f);this._audioNextDts=D+U}-1===h&&(h=D),T.push({dts:D,pts:D,cts:0,unit:I.unit,size:I.unit.byteLength,duration:U,originalDts:M,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0}}),B&&T.push.apply(T,P)}}if(0===T.length)return i.samples=[],void(i.length=0);c?v=new Uint8Array(g):((v=new Uint8Array(g))[0]=g>>>24&255,v[1]=g>>>16&255,v[2]=g>>>8&255,v[3]=255&g,v.set(a.default.types.mdat,4));for(var H=0;H<T.length;H++){var q=T[H].unit;v.set(q,p),p+=q.byteLength}var W=T[T.length-1];n=W.dts+W.duration;var X=new u.MediaSegmentInfo;X.beginDts=h,X.endDts=n,X.beginPts=h,X.endPts=n,X.originalBeginDts=T[0].originalDts,X.originalEndDts=W.originalDts+W.duration,X.firstSample=new u.SampleInfo(T[0].dts,T[0].pts,T[0].duration,T[0].originalDts,!1),X.lastSample=new u.SampleInfo(W.dts,W.pts,W.duration,W.originalDts,!1),this._isLive||this._audioSegmentInfoList.append(X),i.samples=T,i.sequenceNumber++;var Y=null;Y=c?new Uint8Array:a.default.moof(i,h),i.samples=[],i.length=0;var Z={type:"audio",data:this._mergeBoxes(Y,v).buffer,sampleCount:T.length,info:X};c&&_&&(Z.timestampOffset=h),this._onMediaSegment("audio",Z)}}}},{key:"_remuxVideo",value:function(e,t){if(null!=this._videoMeta){var n,i,r=e,s=r.samples,o=void 0,l=-1,d=-1;if(s&&0!==s.length&&(1!==s.length||t)){var h=8,f=null,c=8+e.length,_=null;if(s.length>1&&(c-=(_=s.pop()).length),null!=this._videoStashedLastSample){var m=this._videoStashedLastSample;this._videoStashedLastSample=null,s.unshift(m),c+=m.length}null!=_&&(this._videoStashedLastSample=_);var p=s[0].dts-this._dtsBase;if(this._videoNextDts)o=p-this._videoNextDts;else if(this._videoSegmentInfoList.isEmpty())o=0;else{var v=this._videoSegmentInfoList.getLastSampleBefore(p);if(null!=v){var g=p-(v.originalDts+v.duration);g<=3&&(g=0),o=p-(v.dts+v.duration+g)}else o=0}for(var y=new u.MediaSegmentInfo,E=[],b=0;b<s.length;b++){var S=s[b],k=S.dts-this._dtsBase,L=S.isKeyframe,w=k-o,R=S.cts,A=w+R;-1===l&&(l=w,d=A);var O=0;if(b!==s.length-1)O=s[b+1].dts-this._dtsBase-o-w;else if(null!=_)O=_.dts-this._dtsBase-o-w;else O=E.length>=1?E[E.length-1].duration:Math.floor(this._videoMeta.refSampleDuration);if(L){var T=new u.SampleInfo(w,A,O,S.dts,!0);T.fileposition=S.fileposition,y.appendSyncPoint(T)}E.push({dts:w,pts:A,cts:R,units:S.units,size:S.length,isKeyframe:L,duration:O,originalDts:k,flags:{isLeading:0,dependsOn:L?2:1,isDependedOn:L?1:0,hasRedundancy:0,isNonSync:L?0:1}})}(f=new Uint8Array(c))[0]=c>>>24&255,f[1]=c>>>16&255,f[2]=c>>>8&255,f[3]=255&c,f.set(a.default.types.mdat,4);for(var C=0;C<E.length;C++)for(var I=E[C].units;I.length;){var x=I.shift().data;f.set(x,h),h+=x.byteLength}var M=E[E.length-1];if(n=M.dts+M.duration,i=M.pts+M.duration,this._videoNextDts=n,y.beginDts=l,y.endDts=n,y.beginPts=d,y.endPts=i,y.originalBeginDts=E[0].originalDts,y.originalEndDts=M.originalDts+M.duration,y.firstSample=new u.SampleInfo(E[0].dts,E[0].pts,E[0].duration,E[0].originalDts,E[0].isKeyframe),y.lastSample=new u.SampleInfo(M.dts,M.pts,M.duration,M.originalDts,M.isKeyframe),this._isLive||this._videoSegmentInfoList.append(y),r.samples=E,r.sequenceNumber++,this._forceFirstIDR){var D=E[0].flags;D.dependsOn=2,D.isNonSync=0}var B=a.default.moof(r,l);r.samples=[],r.length=0,this._onMediaSegment("video",{type:"video",data:this._mergeBoxes(B,f).buffer,sampleCount:E.length,info:y})}}}},{key:"_mergeBoxes",value:function(e,t){var n=new Uint8Array(e.byteLength+t.byteLength);return n.set(e,0),n.set(t,e.byteLength),n}},{key:"onInitSegment",get:function(){return this._onInitSegment},set:function(e){this._onInitSegment=e}},{key:"onMediaSegment",get:function(){return this._onMediaSegment},set:function(e){this._onMediaSegment=e}}]),e}();t.default=h,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"init",value:function(){for(var t in e.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[],".mp3":[]},e.types)e.types.hasOwnProperty(t)&&(e.types[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);var n=e.constants={};n.FTYP=new Uint8Array([105,115,111,109,0,0,0,1,105,115,111,109,97,118,99,49]),n.STSD_PREFIX=new Uint8Array([0,0,0,0,0,0,0,1]),n.STTS=new Uint8Array([0,0,0,0,0,0,0,0]),n.STSC=n.STCO=n.STTS,n.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),n.HDLR_VIDEO=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),n.HDLR_AUDIO=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]),n.DREF=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),n.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),n.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0])}},{key:"box",value:function(e){for(var t=8,n=null,i=Array.prototype.slice.call(arguments,1),r=i.length,a=0;a<r;a++)t+=i[a].byteLength;(n=new Uint8Array(t))[0]=t>>>24&255,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n.set(e,4);for(var s=8,o=0;o<r;o++)n.set(i[o],s),s+=i[o].byteLength;return n}},{key:"generateInitSegment",value:function(t){var n=e.box(e.types.ftyp,e.constants.FTYP),i=e.moov(t),r=new Uint8Array(n.byteLength+i.byteLength);return r.set(n,0),r.set(i,n.byteLength),r}},{key:"moov",value:function(t){var n=e.mvhd(t.timescale,t.duration),i=e.trak(t),r=e.mvex(t);return e.box(e.types.moov,n,i,r)}},{key:"mvhd",value:function(t,n){return e.box(e.types.mvhd,new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,t>>>24&255,t>>>16&255,t>>>8&255,255&t,n>>>24&255,n>>>16&255,n>>>8&255,255&n,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]))}},{key:"trak",value:function(t){return e.box(e.types.trak,e.tkhd(t),e.mdia(t))}},{key:"tkhd",value:function(t){var n=t.id,i=t.duration,r=t.presentWidth,a=t.presentHeight;return e.box(e.types.tkhd,new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,n>>>24&255,n>>>16&255,n>>>8&255,255&n,0,0,0,0,i>>>24&255,i>>>16&255,i>>>8&255,255&i,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,r>>>8&255,255&r,0,0,a>>>8&255,255&a,0,0]))}},{key:"mdia",value:function(t){return e.box(e.types.mdia,e.mdhd(t),e.hdlr(t),e.minf(t))}},{key:"mdhd",value:function(t){var n=t.timescale,i=t.duration;return e.box(e.types.mdhd,new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,n>>>24&255,n>>>16&255,n>>>8&255,255&n,i>>>24&255,i>>>16&255,i>>>8&255,255&i,85,196,0,0]))}},{key:"hdlr",value:function(t){var n=null;return n="audio"===t.type?e.constants.HDLR_AUDIO:e.constants.HDLR_VIDEO,e.box(e.types.hdlr,n)}},{key:"minf",value:function(t){var n=null;return n="audio"===t.type?e.box(e.types.smhd,e.constants.SMHD):e.box(e.types.vmhd,e.constants.VMHD),e.box(e.types.minf,n,e.dinf(),e.stbl(t))}},{key:"dinf",value:function(){return e.box(e.types.dinf,e.box(e.types.dref,e.constants.DREF))}},{key:"stbl",value:function(t){return e.box(e.types.stbl,e.stsd(t),e.box(e.types.stts,e.constants.STTS),e.box(e.types.stsc,e.constants.STSC),e.box(e.types.stsz,e.constants.STSZ),e.box(e.types.stco,e.constants.STCO))}},{key:"stsd",value:function(t){return"audio"===t.type?"mp3"===t.codec?e.box(e.types.stsd,e.constants.STSD_PREFIX,e.mp3(t)):e.box(e.types.stsd,e.constants.STSD_PREFIX,e.mp4a(t)):e.box(e.types.stsd,e.constants.STSD_PREFIX,e.avc1(t))}},{key:"mp3",value:function(t){var n=t.channelCount,i=t.audioSampleRate,r=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,n,0,16,0,0,0,0,i>>>8&255,255&i,0,0]);return e.box(e.types[".mp3"],r)}},{key:"mp4a",value:function(t){var n=t.channelCount,i=t.audioSampleRate,r=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,n,0,16,0,0,0,0,i>>>8&255,255&i,0,0]);return e.box(e.types.mp4a,r,e.esds(t))}},{key:"esds",value:function(t){var n=t.config||[],i=n.length,r=new Uint8Array([0,0,0,0,3,23+i,0,1,0,4,15+i,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([i]).concat(n).concat([6,1,2]));return e.box(e.types.esds,r)}},{key:"avc1",value:function(t){var n=t.avcc,i=t.codecWidth,r=t.codecHeight,a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,i>>>8&255,255&i,r>>>8&255,255&r,0,72,0,0,0,72,0,0,0,0,0,0,0,1,10,120,113,113,47,102,108,118,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,255,255]);return e.box(e.types.avc1,a,e.box(e.types.avcC,n))}},{key:"mvex",value:function(t){return e.box(e.types.mvex,e.trex(t))}},{key:"trex",value:function(t){var n=t.id,i=new Uint8Array([0,0,0,0,n>>>24&255,n>>>16&255,n>>>8&255,255&n,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]);return e.box(e.types.trex,i)}},{key:"moof",value:function(t,n){return e.box(e.types.moof,e.mfhd(t.sequenceNumber),e.traf(t,n))}},{key:"mfhd",value:function(t){var n=new Uint8Array([0,0,0,0,t>>>24&255,t>>>16&255,t>>>8&255,255&t]);return e.box(e.types.mfhd,n)}},{key:"traf",value:function(t,n){var i=t.id,r=e.box(e.types.tfhd,new Uint8Array([0,0,0,0,i>>>24&255,i>>>16&255,i>>>8&255,255&i])),a=e.box(e.types.tfdt,new Uint8Array([0,0,0,0,n>>>24&255,n>>>16&255,n>>>8&255,255&n])),s=e.sdtp(t),o=e.trun(t,s.byteLength+16+16+8+16+8+8);return e.box(e.types.traf,r,a,o,s)}},{key:"sdtp",value:function(t){for(var n=t.samples||[],i=n.length,r=new Uint8Array(4+i),a=0;a<i;a++){var s=n[a].flags;r[a+4]=s.isLeading<<6|s.dependsOn<<4|s.isDependedOn<<2|s.hasRedundancy}return e.box(e.types.sdtp,r)}},{key:"trun",value:function(t,n){var i=t.samples||[],r=i.length,a=12+16*r,s=new Uint8Array(a);n+=8+a,s.set([0,0,15,1,r>>>24&255,r>>>16&255,r>>>8&255,255&r,n>>>24&255,n>>>16&255,n>>>8&255,255&n],0);for(var o=0;o<r;o++){var u=i[o].duration,l=i[o].size,d=i[o].flags,h=i[o].cts;s.set([u>>>24&255,u>>>16&255,u>>>8&255,255&u,l>>>24&255,l>>>16&255,l>>>8&255,255&l,d.isLeading<<2|d.dependsOn,d.isDependedOn<<6|d.hasRedundancy<<4|d.isNonSync,0,0,h>>>24&255,h>>>16&255,h>>>8&255,255&h],12+16*o)}return e.box(e.types.trun,s)}},{key:"mdat",value:function(t){return e.box(e.types.mdat,t)}}]),e}();r.init(),t.default=r,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"getSilentFrame",value:function(e,t){if("mp4a.40.2"===e){if(1===t)return new Uint8Array([0,200,0,128,35,128]);if(2===t)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224])}else{if(1===t)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}return null}}]),e}();t.default=r,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o(n(0));var i=o(n(8)),r=o(n(11)),a=o(n(14)),s=o(n(5));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=null,n=function(t,n){e.postMessage({msg:"logcat_callback",data:{type:t,logcat:n}})}.bind(this);r.default.install(),e.addEventListener("message",function(r){switch(r.data.cmd){case"init":(t=new a.default(r.data.param[0],r.data.param[1])).on(s.default.IO_ERROR,function(t,n){e.postMessage({msg:s.default.IO_ERROR,data:{type:t,info:n}})}.bind(this)),t.on(s.default.DEMUX_ERROR,function(t,n){e.postMessage({msg:s.default.DEMUX_ERROR,data:{type:t,info:n}})}.bind(this)),t.on(s.default.INIT_SEGMENT,function(t,n){var i={msg:s.default.INIT_SEGMENT,data:{type:t,data:n}};e.postMessage(i,[n.data])}.bind(this)),t.on(s.default.MEDIA_SEGMENT,function(t,n){var i={msg:s.default.MEDIA_SEGMENT,data:{type:t,data:n}};e.postMessage(i,[n.data])}.bind(this)),t.on(s.default.LOADING_COMPLETE,function(){var t={msg:s.default.LOADING_COMPLETE};e.postMessage(t)}.bind(this)),t.on(s.default.RECOVERED_EARLY_EOF,function(){var t={msg:s.default.RECOVERED_EARLY_EOF};e.postMessage(t)}.bind(this)),t.on(s.default.MEDIA_INFO,function(t){var n={msg:s.default.MEDIA_INFO,data:t};e.postMessage(n)}.bind(this)),t.on(s.default.STATISTICS_INFO,function(t){var n={msg:s.default.STATISTICS_INFO,data:t};e.postMessage(n)}.bind(this)),t.on(s.default.RECOMMEND_SEEKPOINT,function(t){e.postMessage({msg:s.default.RECOMMEND_SEEKPOINT,data:t})}.bind(this));break;case"destroy":t&&(t.destroy(),t=null),e.postMessage({msg:"destroyed"});break;case"start":t.start();break;case"stop":t.stop();break;case"seek":t.seek(r.data.param);break;case"pause":t.pause();break;case"resume":t.resume();break;case"logging_config":var o=r.data.param;i.default.applyConfig(o),!0===o.enableCallback?i.default.addLogListener(n):i.default.removeLogListener(n)}})},e.exports=t.default},function(e,t){var n=arguments[3],i=arguments[4],r=arguments[5],a=JSON.stringify;e.exports=function(e,t){for(var s,o=Object.keys(r),u=0,l=o.length;u<l;u++){var d=o[u],h=r[d].exports;if(h===e||h&&h.default===e){s=d;break}}if(!s){s=Math.floor(Math.pow(16,8)*Math.random()).toString(16);var f={};for(u=0,l=o.length;u<l;u++){f[d=o[u]]=d}i[s]=["function(require,module,exports){"+e+"(self); }",f]}var c=Math.floor(Math.pow(16,8)*Math.random()).toString(16),_={};_[s]=s,i[c]=["function(require,module,exports){var f = require("+a(s)+");(f.default ? f.default : f)(self);}",_];var m={};!function e(t){m[t]=!0;for(var n in i[t][1]){var r=i[t][1][n];m[r]||e(r)}}(c);var p="("+n+")({"+Object.keys(m).map(function(e){return a(e)+":["+i[e][0]+","+a(i[e][1])+"]"}).join(",")+"},{},["+a(c)+"])",v=window.URL||window.webkitURL||window.mozURL||window.msURL,g=new Blob([p],{type:"text/javascript"});if(t&&t.bare)return g;var y=v.createObjectURL(g),E=new Worker(y);return E.objectURL=y,E}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=d(n(2)),a=d(n(0)),s=d(n(4)),o=d(n(16)),u=n(15),l=n(1);function d(e){return e&&e.__esModule?e:{default:e}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.TAG="MSEController",this._config=t,this._emitter=new r.default,this._config.isLive&&null==this._config.autoCleanupSourceBuffer&&(this._config.autoCleanupSourceBuffer=!0),this.e={onSourceOpen:this._onSourceOpen.bind(this),onSourceEnded:this._onSourceEnded.bind(this),onSourceClose:this._onSourceClose.bind(this),onSourceBufferError:this._onSourceBufferError.bind(this),onSourceBufferUpdateEnd:this._onSourceBufferUpdateEnd.bind(this)},this._mediaSource=null,this._mediaSourceObjectURL=null,this._mediaElement=null,this._isBufferFull=!1,this._hasPendingEos=!1,this._requireSetMediaDuration=!1,this._pendingMediaDuration=0,this._pendingSourceBufferInit=[],this._mimeTypes={video:null,audio:null},this._sourceBuffers={video:null,audio:null},this._lastInitSegments={video:null,audio:null},this._pendingSegments={video:[],audio:[]},this._pendingRemoveRanges={video:[],audio:[]},this._idrList=new u.IDRSampleList}return i(e,[{key:"destroy",value:function(){(this._mediaElement||this._mediaSource)&&this.detachMediaElement(),this.e=null,this._emitter.removeAllListeners(),this._emitter=null}},{key:"on",value:function(e,t){this._emitter.addListener(e,t)}},{key:"off",value:function(e,t){this._emitter.removeListener(e,t)}},{key:"attachMediaElement",value:function(e){if(this._mediaSource)throw new l.IllegalStateException("MediaSource has been attached to an HTMLMediaElement!");var t=this._mediaSource=new window.MediaSource;t.addEventListener("sourceopen",this.e.onSourceOpen),t.addEventListener("sourceended",this.e.onSourceEnded),t.addEventListener("sourceclose",this.e.onSourceClose),this._mediaElement=e,this._mediaSourceObjectURL=window.URL.createObjectURL(this._mediaSource),e.src=this._mediaSourceObjectURL}},{key:"detachMediaElement",value:function(){if(this._mediaSource){var e=this._mediaSource;for(var t in this._sourceBuffers){var n=this._pendingSegments[t];n.splice(0,n.length),this._pendingSegments[t]=null,this._pendingRemoveRanges[t]=null,this._lastInitSegments[t]=null;var i=this._sourceBuffers[t];i&&("closed"!==e.readyState&&(e.removeSourceBuffer(i),i.removeEventListener("error",this.e.onSourceBufferError),i.removeEventListener("updateend",this.e.onSourceBufferUpdateEnd)),this._mimeTypes[t]=null,this._sourceBuffers[t]=null)}if("open"===e.readyState)try{e.endOfStream()}catch(e){a.default.e(this.TAG,e.message)}e.removeEventListener("sourceopen",this.e.onSourceOpen),e.removeEventListener("sourceended",this.e.onSourceEnded),e.removeEventListener("sourceclose",this.e.onSourceClose),this._pendingSourceBufferInit=[],this._isBufferFull=!1,this._idrList.clear(),this._mediaSource=null}this._mediaElement&&(this._mediaElement.src="",this._mediaElement.removeAttribute("src"),this._mediaElement=null),this._mediaSourceObjectURL&&(window.URL.revokeObjectURL(this._mediaSourceObjectURL),this._mediaSourceObjectURL=null)}},{key:"appendInitSegment",value:function(e,t){if(!this._mediaSource||"open"!==this._mediaSource.readyState)return this._pendingSourceBufferInit.push(e),void this._pendingSegments[e.type].push(e);var n=e,i=""+n.container;n.codec&&n.codec.length>0&&(i+=";codecs="+n.codec);var r=!1;if(a.default.v(this.TAG,"Received Initialization Segment, mimeType: "+i),this._lastInitSegments[n.type]=n,i!==this._mimeTypes[n.type]){if(this._mimeTypes[n.type])a.default.v(this.TAG,"Notice: "+n.type+" mimeType changed, origin: "+this._mimeTypes[n.type]+", target: "+i);else{r=!0;try{var u=this._sourceBuffers[n.type]=this._mediaSource.addSourceBuffer(i);u.addEventListener("error",this.e.onSourceBufferError),u.addEventListener("updateend",this.e.onSourceBufferUpdateEnd)}catch(e){return a.default.e(this.TAG,e.message),void this._emitter.emit(o.default.ERROR,{code:e.code,msg:e.message})}}this._mimeTypes[n.type]=i}t||this._pendingSegments[n.type].push(n),r||this._sourceBuffers[n.type]&&!this._sourceBuffers[n.type].updating&&this._doAppendSegments(),s.default.safari&&"audio/mpeg"===n.container&&n.mediaDuration>0&&(this._requireSetMediaDuration=!0,this._pendingMediaDuration=n.mediaDuration/1e3,this._updateMediaSourceDuration())}},{key:"appendMediaSegment",value:function(e){var t=e;this._pendingSegments[t.type].push(t),this._config.autoCleanupSourceBuffer&&this._needCleanupSourceBuffer()&&this._doCleanupSourceBuffer();var n=this._sourceBuffers[t.type];!n||n.updating||this._hasPendingRemoveRanges()||this._doAppendSegments()}},{key:"seek",value:function(e){for(var t in this._sourceBuffers)if(this._sourceBuffers[t]){var n=this._sourceBuffers[t];if("open"===this._mediaSource.readyState)try{n.abort()}catch(e){a.default.e(this.TAG,e.message)}this._idrList.clear();var i=this._pendingSegments[t];if(i.splice(0,i.length),"closed"!==this._mediaSource.readyState){for(var r=0;r<n.buffered.length;r++){var o=n.buffered.start(r),u=n.buffered.end(r);this._pendingRemoveRanges[t].push({start:o,end:u})}if(n.updating||this._doRemoveRanges(),s.default.safari){var l=this._lastInitSegments[t];l&&(this._pendingSegments[t].push(l),n.updating||this._doAppendSegments())}}}}},{key:"endOfStream",value:function(){var e=this._mediaSource,t=this._sourceBuffers;e&&"open"===e.readyState?t.video&&t.video.updating||t.audio&&t.audio.updating?this._hasPendingEos=!0:(this._hasPendingEos=!1,e.endOfStream()):e&&"closed"===e.readyState&&this._hasPendingSegments()&&(this._hasPendingEos=!0)}},{key:"getNearestKeyframe",value:function(e){return this._idrList.getLastSyncPointBeforeDts(e)}},{key:"_needCleanupSourceBuffer",value:function(){if(!this._config.autoCleanupSourceBuffer)return!1;var e=this._mediaElement.currentTime;for(var t in this._sourceBuffers){var n=this._sourceBuffers[t];if(n){var i=n.buffered;if(i.length>=1&&e-i.start(0)>=this._config.autoCleanupMaxBackwardDuration)return!0}}return!1}},{key:"_doCleanupSourceBuffer",value:function(){var e=this._mediaElement.currentTime;for(var t in this._sourceBuffers){var n=this._sourceBuffers[t];if(n){for(var i=n.buffered,r=!1,a=0;a<i.length;a++){var s=i.start(a),o=i.end(a);if(s<=e&&e<o+3){if(e-s>=this._config.autoCleanupMaxBackwardDuration){r=!0;var u=e-this._config.autoCleanupMinBackwardDuration;this._pendingRemoveRanges[t].push({start:s,end:u})}}else o<e&&(r=!0,this._pendingRemoveRanges[t].push({start:s,end:o}))}r&&!n.updating&&this._doRemoveRanges()}}}},{key:"_updateMediaSourceDuration",value:function(){var e=this._sourceBuffers;if(0!==this._mediaElement.readyState&&"open"===this._mediaSource.readyState&&!(e.video&&e.video.updating||e.audio&&e.audio.updating)){var t=this._mediaSource.duration,n=this._pendingMediaDuration;n>0&&(isNaN(t)||n>t)&&(a.default.v(this.TAG,"Update MediaSource duration from "+t+" to "+n),this._mediaSource.duration=n),this._requireSetMediaDuration=!1,this._pendingMediaDuration=0}}},{key:"_doRemoveRanges",value:function(){for(var e in this._pendingRemoveRanges)if(this._sourceBuffers[e]&&!this._sourceBuffers[e].updating)for(var t=this._sourceBuffers[e],n=this._pendingRemoveRanges[e];n.length&&!t.updating;){var i=n.shift();t.remove(i.start,i.end)}}},{key:"_doAppendSegments",value:function(){var e=this._pendingSegments;for(var t in e)if(this._sourceBuffers[t]&&!this._sourceBuffers[t].updating&&e[t].length>0){var n=e[t].shift();if(n.timestampOffset){var i=this._sourceBuffers[t].timestampOffset,r=n.timestampOffset/1e3;Math.abs(i-r)>.1&&(a.default.v(this.TAG,"Update MPEG audio timestampOffset from "+i+" to "+r),this._sourceBuffers[t].timestampOffset=r),delete n.timestampOffset}if(!n.data||0===n.data.byteLength)continue;try{this._sourceBuffers[t].appendBuffer(n.data),this._isBufferFull=!1,"video"===t&&n.hasOwnProperty("info")&&this._idrList.appendArray(n.info.syncPoints)}catch(e){this._pendingSegments[t].unshift(n),22===e.code?(this._isBufferFull||this._emitter.emit(o.default.BUFFER_FULL),this._isBufferFull=!0):(a.default.e(this.TAG,e.message),this._emitter.emit(o.default.ERROR,{code:e.code,msg:e.message}))}}}},{key:"_onSourceOpen",value:function(){if(a.default.v(this.TAG,"MediaSource onSourceOpen"),this._mediaSource.removeEventListener("sourceopen",this.e.onSourceOpen),this._pendingSourceBufferInit.length>0)for(var e=this._pendingSourceBufferInit;e.length;){var t=e.shift();this.appendInitSegment(t,!0)}this._hasPendingSegments()&&this._doAppendSegments(),this._emitter.emit(o.default.SOURCE_OPEN)}},{key:"_onSourceEnded",value:function(){a.default.v(this.TAG,"MediaSource onSourceEnded")}},{key:"_onSourceClose",value:function(){a.default.v(this.TAG,"MediaSource onSourceClose"),this._mediaSource&&null!=this.e&&(this._mediaSource.removeEventListener("sourceopen",this.e.onSourceOpen),this._mediaSource.removeEventListener("sourceended",this.e.onSourceEnded),this._mediaSource.removeEventListener("sourceclose",this.e.onSourceClose))}},{key:"_hasPendingSegments",value:function(){var e=this._pendingSegments;return e.video.length>0||e.audio.length>0}},{key:"_hasPendingRemoveRanges",value:function(){var e=this._pendingRemoveRanges;return e.video.length>0||e.audio.length>0}},{key:"_onSourceBufferUpdateEnd",value:function(){this._requireSetMediaDuration?this._updateMediaSourceDuration():this._hasPendingRemoveRanges()?this._doRemoveRanges():this._hasPendingSegments()?this._doAppendSegments():this._hasPendingEos&&this.endOfStream(),this._emitter.emit(o.default.UPDATE_END)}},{key:"_onSourceBufferError",value:function(e){a.default.e(this.TAG,"SourceBuffer Error: "+e)}}]),e}();t.default=h,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=l(n(2)),s=l(n(7)),o=n(6),u=n(1);function l(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.TAG="NativePlayer",this._type="NativePlayer",this._emitter=new a.default,this._config=(0,o.createDefaultConfig)(),"object"===(void 0===n?"undefined":i(n))&&Object.assign(this._config,n),"flv"===t.type.toLowerCase())throw new u.InvalidArgumentException("NativePlayer does't support flv MediaDataSource input!");if(t.hasOwnProperty("segments"))throw new u.InvalidArgumentException("NativePlayer("+t.type+") doesn't support multipart playback!");this.e={onvLoadedMetadata:this._onvLoadedMetadata.bind(this)},this._pendingSeekTime=null,this._statisticsReporter=null,this._mediaDataSource=t,this._mediaElement=null}return r(e,[{key:"destroy",value:function(){this._mediaElement&&(this.unload(),this.detachMediaElement()),this.e=null,this._mediaDataSource=null,this._emitter.removeAllListeners(),this._emitter=null}},{key:"on",value:function(e,t){var n=this;e===s.default.MEDIA_INFO?null!=this._mediaElement&&0!==this._mediaElement.readyState&&Promise.resolve().then(function(){n._emitter.emit(s.default.MEDIA_INFO,n.mediaInfo)}):e===s.default.STATISTICS_INFO&&null!=this._mediaElement&&0!==this._mediaElement.readyState&&Promise.resolve().then(function(){n._emitter.emit(s.default.STATISTICS_INFO,n.statisticsInfo)}),this._emitter.addListener(e,t)}},{key:"off",value:function(e,t){this._emitter.removeListener(e,t)}},{key:"attachMediaElement",value:function(e){if(this._mediaElement=e,e.addEventListener("loadedmetadata",this.e.onvLoadedMetadata),null!=this._pendingSeekTime)try{e.currentTime=this._pendingSeekTime,this._pendingSeekTime=null}catch(e){}}},{key:"detachMediaElement",value:function(){this._mediaElement&&(this._mediaElement.src="",this._mediaElement.removeAttribute("src"),this._mediaElement.removeEventListener("loadedmetadata",this.e.onvLoadedMetadata),this._mediaElement=null),null!=this._statisticsReporter&&(window.clearInterval(this._statisticsReporter),this._statisticsReporter=null)}},{key:"load",value:function(){if(!this._mediaElement)throw new u.IllegalStateException("HTMLMediaElement must be attached before load()!");this._mediaElement.src=this._mediaDataSource.url,this._mediaElement.readyState>0&&(this._mediaElement.currentTime=0),this._mediaElement.preload="auto",this._mediaElement.load(),this._statisticsReporter=window.setInterval(this._reportStatisticsInfo.bind(this),this._config.statisticsInfoReportInterval)}},{key:"unload",value:function(){this._mediaElement&&(this._mediaElement.src="",this._mediaElement.removeAttribute("src")),null!=this._statisticsReporter&&(window.clearInterval(this._statisticsReporter),this._statisticsReporter=null)}},{key:"play",value:function(){var e=this._mediaElement.play();return void 0!==e&&e?e.catch(function(){}):void 0}},{key:"pause",value:function(){this._mediaElement.pause()}},{key:"_onvLoadedMetadata",value:function(e){null!=this._pendingSeekTime&&(this._mediaElement.currentTime=this._pendingSeekTime,this._pendingSeekTime=null),this._emitter.emit(s.default.MEDIA_INFO,this.mediaInfo)}},{key:"_reportStatisticsInfo",value:function(){this._emitter.emit(s.default.STATISTICS_INFO,this.statisticsInfo)}},{key:"type",get:function(){return this._type}},{key:"buffered",get:function(){return this._mediaElement.buffered}},{key:"duration",get:function(){return this._mediaElement.duration}},{key:"volume",get:function(){return this._mediaElement.volume},set:function(e){this._mediaElement.volume=e}},{key:"muted",get:function(){return this._mediaElement.muted},set:function(e){this._mediaElement.muted=e}},{key:"currentTime",get:function(){return this._mediaElement?this._mediaElement.currentTime:0},set:function(e){this._mediaElement?this._mediaElement.currentTime=e:this._pendingSeekTime=e}},{key:"mediaInfo",get:function(){var e={mimeType:(this._mediaElement instanceof HTMLAudioElement?"audio/":"video/")+this._mediaDataSource.type};return this._mediaElement&&(e.duration=Math.floor(1e3*this._mediaElement.duration),this._mediaElement instanceof HTMLVideoElement&&(e.width=this._mediaElement.videoWidth,e.height=this._mediaElement.videoHeight)),e}},{key:"statisticsInfo",get:function(){var e={playerType:this._type,url:this._mediaDataSource.url};if(!(this._mediaElement instanceof HTMLVideoElement))return e;var t=!0,n=0,i=0;if(this._mediaElement.getVideoPlaybackQuality){var r=this._mediaElement.getVideoPlaybackQuality();n=r.totalVideoFrames,i=r.droppedVideoFrames}else null!=this._mediaElement.webkitDecodedFrameCount?(n=this._mediaElement.webkitDecodedFrameCount,i=this._mediaElement.webkitDroppedFrameCount):t=!1;return t&&(e.decodedFrames=n,e.droppedFrames=i),e}}]),e}();t.default=d,e.exports=t.default}])});

/***/ }),

/***/ "./node_modules/_xgplayer-hls.js@2.1.6@xgplayer-hls.js/dist/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_xgplayer-hls.js@2.1.6@xgplayer-hls.js/dist/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! xgplayer */ "./node_modules/_xgplayer@2.6.5@xgplayer/dist/index.js")):undefined}(window,function(e){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=80)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.logger=t.enableLogs=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=r(7);function n(){}var o={trace:n,debug:n,log:n,warn:n,info:n,error:n},s=o;var l=(0,a.getSelfScope)();function u(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];r.forEach(function(t){s[t]=e[t]?e[t].bind(e):function(e){var t=l.console[e];return t?function(){for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];i[0]&&(i[0]=function(e,t){return t="["+e+"] > "+t}(e,i[0])),t.apply(l.console,i)}:n}(t)})}t.enableLogs=function(e){if(!0===e||"object"===(void 0===e?"undefined":i(e))){u(e,"debug","log","info","warn","error");try{s.log()}catch(e){s=o}}else s=o},t.logger=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={MEDIA_ATTACHING:"hlsMediaAttaching",MEDIA_ATTACHED:"hlsMediaAttached",MEDIA_DETACHING:"hlsMediaDetaching",MEDIA_DETACHED:"hlsMediaDetached",BUFFER_RESET:"hlsBufferReset",BUFFER_CODECS:"hlsBufferCodecs",BUFFER_CREATED:"hlsBufferCreated",BUFFER_APPENDING:"hlsBufferAppending",BUFFER_APPENDED:"hlsBufferAppended",BUFFER_EOS:"hlsBufferEos",BUFFER_FLUSHING:"hlsBufferFlushing",BUFFER_FLUSHED:"hlsBufferFlushed",MANIFEST_LOADING:"hlsManifestLoading",MANIFEST_LOADED:"hlsManifestLoaded",MANIFEST_PARSED:"hlsManifestParsed",LEVEL_SWITCHING:"hlsLevelSwitching",LEVEL_SWITCHED:"hlsLevelSwitched",LEVEL_LOADING:"hlsLevelLoading",LEVEL_LOADED:"hlsLevelLoaded",LEVEL_UPDATED:"hlsLevelUpdated",LEVEL_PTS_UPDATED:"hlsLevelPtsUpdated",AUDIO_TRACKS_UPDATED:"hlsAudioTracksUpdated",AUDIO_TRACK_SWITCHING:"hlsAudioTrackSwitching",AUDIO_TRACK_SWITCHED:"hlsAudioTrackSwitched",AUDIO_TRACK_LOADING:"hlsAudioTrackLoading",AUDIO_TRACK_LOADED:"hlsAudioTrackLoaded",SUBTITLE_TRACKS_UPDATED:"hlsSubtitleTracksUpdated",SUBTITLE_TRACK_SWITCH:"hlsSubtitleTrackSwitch",SUBTITLE_TRACK_LOADING:"hlsSubtitleTrackLoading",SUBTITLE_TRACK_LOADED:"hlsSubtitleTrackLoaded",SUBTITLE_FRAG_PROCESSED:"hlsSubtitleFragProcessed",INIT_PTS_FOUND:"hlsInitPtsFound",FRAG_LOADING:"hlsFragLoading",FRAG_LOAD_PROGRESS:"hlsFragLoadProgress",FRAG_LOAD_EMERGENCY_ABORTED:"hlsFragLoadEmergencyAborted",FRAG_LOADED:"hlsFragLoaded",FRAG_DECRYPTED:"hlsFragDecrypted",FRAG_PARSING_INIT_SEGMENT:"hlsFragParsingInitSegment",FRAG_PARSING_USERDATA:"hlsFragParsingUserdata",FRAG_PARSING_METADATA:"hlsFragParsingMetadata",FRAG_PARSING_DATA:"hlsFragParsingData",FRAG_PARSED:"hlsFragParsed",FRAG_BUFFERED:"hlsFragBuffered",FRAG_CHANGED:"hlsFragChanged",FPS_DROP:"hlsFpsDrop",FPS_DROP_LEVEL_CAPPING:"hlsFpsDropLevelCapping",ERROR:"hlsError",DESTROYING:"hlsDestroying",KEY_LOADING:"hlsKeyLoading",KEY_LOADED:"hlsKeyLoaded",STREAM_STATE_TRANSITION:"hlsStreamStateTransition"},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ErrorTypes={NETWORK_ERROR:"networkError",MEDIA_ERROR:"mediaError",KEY_SYSTEM_ERROR:"keySystemError",MUX_ERROR:"muxError",OTHER_ERROR:"otherError"},t.ErrorDetails={KEY_SYSTEM_NO_KEYS:"keySystemNoKeys",KEY_SYSTEM_NO_ACCESS:"keySystemNoAccess",KEY_SYSTEM_NO_SESSION:"keySystemNoSession",KEY_SYSTEM_LICENSE_REQUEST_FAILED:"keySystemLicenseRequestFailed",MANIFEST_LOAD_ERROR:"manifestLoadError",MANIFEST_LOAD_TIMEOUT:"manifestLoadTimeOut",MANIFEST_PARSING_ERROR:"manifestParsingError",MANIFEST_INCOMPATIBLE_CODECS_ERROR:"manifestIncompatibleCodecsError",LEVEL_LOAD_ERROR:"levelLoadError",LEVEL_LOAD_TIMEOUT:"levelLoadTimeOut",LEVEL_SWITCH_ERROR:"levelSwitchError",AUDIO_TRACK_LOAD_ERROR:"audioTrackLoadError",AUDIO_TRACK_LOAD_TIMEOUT:"audioTrackLoadTimeOut",FRAG_LOAD_ERROR:"fragLoadError",FRAG_LOAD_TIMEOUT:"fragLoadTimeOut",FRAG_DECRYPT_ERROR:"fragDecryptError",FRAG_PARSING_ERROR:"fragParsingError",REMUX_ALLOC_ERROR:"remuxAllocError",KEY_LOAD_ERROR:"keyLoadError",KEY_LOAD_TIMEOUT:"keyLoadTimeOut",BUFFER_ADD_CODEC_ERROR:"bufferAddCodecError",BUFFER_APPEND_ERROR:"bufferAppendError",BUFFER_APPENDING_ERROR:"bufferAppendingError",BUFFER_STALLED_ERROR:"bufferStalledError",BUFFER_FULL_ERROR:"bufferFullError",BUFFER_SEEK_OVER_HOLE:"bufferSeekOverHole",BUFFER_NUDGE_ON_STALL:"bufferNudgeOnStall",INTERNAL_EXCEPTION:"internalException"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=r(0),o=r(2),s=function(e){return e&&e.__esModule?e:{default:e}}(r(1));var l={hlsEventGeneric:!0,hlsHandlerDestroying:!0,hlsHandlerDestroyed:!0},u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hls=t,this.onEvent=this.onEvent.bind(this);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];this.handledEvents=i,this.useGenericHandler=!0,this.registerListeners()}return a(e,[{key:"destroy",value:function(){this.onHandlerDestroying(),this.unregisterListeners(),this.onHandlerDestroyed()}},{key:"onHandlerDestroying",value:function(){}},{key:"onHandlerDestroyed",value:function(){}},{key:"isEventHandler",value:function(){return"object"===i(this.handledEvents)&&this.handledEvents.length&&"function"==typeof this.onEvent}},{key:"registerListeners",value:function(){this.isEventHandler()&&this.handledEvents.forEach(function(e){if(l[e])throw new Error("Forbidden event-name: "+e);this.hls.on(e,this.onEvent)},this)}},{key:"unregisterListeners",value:function(){this.isEventHandler()&&this.handledEvents.forEach(function(e){this.hls.off(e,this.onEvent)},this)}},{key:"onEvent",value:function(e,t){this.onEventGeneric(e,t)}},{key:"onEventGeneric",value:function(e,t){try{(function(e,t){var r="on"+e.replace("hls","");if("function"!=typeof this[r])throw new Error("Event "+e+" has no generic handler in this "+this.constructor.name+" class (tried "+r+")");return this[r].bind(this,t)}).call(this,e,t).call()}catch(t){n.logger.error("An internal error happened while handling event "+e+'. Error message: "'+t.message+'". Here is a stacktrace:',t),this.hls.trigger(s.default.ERROR,{type:o.ErrorTypes.OTHER_ERROR,details:o.ErrorDetails.INTERNAL_EXCEPTION,fatal:!1,event:e,err:t})}}}]),e}();t.default=u,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();t.BufferHelper=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"isBuffered",value:function(e,t){try{if(e)for(var r=e.buffered,i=0;i<r.length;i++)if(t>=r.start(i)&&t<=r.end(i))return!0}catch(e){}return!1}},{key:"bufferInfo",value:function(e,t,r){try{if(e){var i=e.buffered,a=[],n=void 0;for(n=0;n<i.length;n++)a.push({start:i.start(n),end:i.end(n)});return this.bufferedInfo(a,t,r)}}catch(e){}return{len:0,start:t,end:t,nextStart:void 0}}},{key:"bufferedInfo",value:function(e,t,r){var i=[],a=void 0,n=void 0,o=void 0,s=void 0,l=void 0;for(e.sort(function(e,t){var r=e.start-t.start;return r||t.end-e.end}),l=0;l<e.length;l++){var u=i.length;if(u){var d=i[u-1].end;e[l].start-d<r?e[l].end>d&&(i[u-1].end=e[l].end):i.push(e[l])}else i.push(e[l])}for(l=0,a=0,n=o=t;l<i.length;l++){var f=i[l].start,c=i[l].end;if(t+r>=f&&t<c)n=f,a=(o=c)-t;else if(t+r<f){s=f;break}}return{len:a,start:n,end:o,nextStart:s}}}]),e}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addGroupId=function(e,t,r){switch(t){case"audio":e.audioGroupIds||(e.audioGroupIds=[]),e.audioGroupIds.push(r);break;case"text":e.textGroupIds||(e.textGroupIds=[]),e.textGroupIds.push(r)}},t.updatePTS=a,t.updateFragPTSDTS=n,t.mergeDetails=function(e,t){t.initSegment&&e.initSegment&&(t.initSegment=e.initSegment);var r=0,a=void 0;if(o(e,t,function(e,i){r=e.cc-i.cc,Number.isFinite(e.startPTS)&&(i.start=i.startPTS=e.startPTS,i.endPTS=e.endPTS,i.duration=e.duration,i.backtracked=e.backtracked,i.dropped=e.dropped,a=i),t.PTSKnown=!0}),!t.PTSKnown)return;if(r){i.logger.log("discontinuity sliding from playlist, take drift into account");for(var l=t.fragments,u=0;u<l.length;u++)l[u].cc+=r}a?n(t,a,a.startPTS,a.endPTS,a.startDTS,a.endDTS):s(e,t);t.PTSKnown=e.PTSKnown},t.mergeSubtitlePlaylists=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=-1;o(e,t,function(e,t,r){t.start=e.start,i=r});var a=t.fragments;if(i<0)return void a.forEach(function(e){e.start+=r});for(var n=i+1;n<a.length;n++)a[n].start=a[n-1].start+a[n-1].duration},t.mapFragmentIntersection=o,t.adjustSliding=s,t.computeReloadInterval=function(e,t,r){var i=1e3*(t.averagetargetduration?t.averagetargetduration:t.targetduration),a=i/2;e&&t.endSN===e.endSN&&(i=a);r&&(i=Math.max(a,i-(window.performance.now()-r)));return Math.round(i)};var i=r(0);function a(e,t,r){var a=e[t],n=e[r],o=n.startPTS;Number.isFinite(o)?r>t?(a.duration=o-a.start,a.duration<0&&i.logger.warn("negative duration computed for frag "+a.sn+",level "+a.level+", there should be some duration drift between playlist and fragment!")):(n.duration=a.start-o,n.duration<0&&i.logger.warn("negative duration computed for frag "+n.sn+",level "+n.level+", there should be some duration drift between playlist and fragment!")):n.start=r>t?a.start+a.duration:Math.max(a.start-n.duration,0)}function n(e,t,r,i,n,o){var s=r;if(Number.isFinite(t.startPTS)){var l=Math.abs(t.startPTS-r);Number.isFinite(t.deltaPTS)?t.deltaPTS=Math.max(l,t.deltaPTS):t.deltaPTS=l,s=Math.max(r,t.startPTS),r=Math.min(r,t.startPTS),i=Math.max(i,t.endPTS),n=Math.min(n,t.startDTS),o=Math.max(o,t.endDTS)}var u=r-t.start;t.start=t.startPTS=r,t.maxStartPTS=s,t.endPTS=i,t.startDTS=n,t.endDTS=o,t.duration=i-r;var d=t.sn;if(!e||d<e.startSN||d>e.endSN)return 0;var f,c=void 0,h=void 0;for(f=d-e.startSN,(c=e.fragments)[f]=t,h=f;h>0;h--)a(c,h,h-1);for(h=f;h<c.length-1;h++)a(c,h,h+1);return e.PTSKnown=!0,u}function o(e,t,r){if(e&&t)for(var i=Math.max(e.startSN,t.startSN)-t.startSN,a=Math.min(e.endSN,t.endSN)-t.startSN,n=t.startSN-e.startSN,o=i;o<=a;o++){var s=e.fragments[n+o],l=t.fragments[o];if(!s||!l)break;r(s,l,o)}}function s(e,t){var r=t.startSN-e.startSN,i=e.fragments,a=t.fragments;if(!(r<0||r>i.length))for(var n=0;n<a.length;n++)a[n].start+=i[r].start}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FragmentTracker=t.FragmentState=void 0;var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=o(r(3)),n=o(r(1));function o(e){return e&&e.__esModule?e:{default:e}}var s=t.FragmentState={NOT_LOADED:"NOT_LOADED",APPENDING:"APPENDING",PARTIAL:"PARTIAL",OK:"OK"};t.FragmentTracker=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n.default.BUFFER_APPENDED,n.default.FRAG_BUFFERED,n.default.FRAG_LOADED));return r.bufferPadding=.2,r.fragments=Object.create(null),r.timeRanges=Object.create(null),r.config=e.config,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),i(t,[{key:"destroy",value:function(){this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.config=null,a.default.prototype.destroy.call(this),function e(t,r,i){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,r,i)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(i):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"getBufferedFrag",value:function(e,t){var r=this.fragments,i=Object.keys(r).filter(function(i){var a=r[i];if(a.body.type!==t)return!1;if(!a.buffered)return!1;var n=a.body;return n.startPTS<=e&&e<=n.endPTS});if(0===i.length)return null;var a=i.pop();return r[a].body}},{key:"detectEvictedFragments",value:function(e,t){var r=this,i=void 0,a=void 0;Object.keys(this.fragments).forEach(function(n){var o=r.fragments[n];if(!0===o.buffered){var s=o.range[e];if(s){i=s.time;for(var l=0;l<i.length;l++)if(a=i[l],!1===r.isTimeBuffered(a.startPTS,a.endPTS,t)){r.removeFragment(o.body);break}}}})}},{key:"detectPartialFragments",value:function(e){var t=this,r=this.getFragmentKey(e),i=this.fragments[r];i&&(i.buffered=!0,Object.keys(this.timeRanges).forEach(function(r){if(e.hasElementaryStream(r)){var a=t.timeRanges[r];i.range[r]=t.getBufferedTimes(e.startPTS,e.endPTS,a)}}))}},{key:"getBufferedTimes",value:function(e,t,r){for(var i=[],a=void 0,n=void 0,o=!1,s=0;s<r.length;s++){if(a=r.start(s)-this.bufferPadding,n=r.end(s)+this.bufferPadding,e>=a&&t<=n){i.push({startPTS:Math.max(e,r.start(s)),endPTS:Math.min(t,r.end(s))});break}if(e<n&&t>a)i.push({startPTS:Math.max(e,r.start(s)),endPTS:Math.min(t,r.end(s))}),o=!0;else if(t<=a)break}return{time:i,partial:o}}},{key:"getFragmentKey",value:function(e){return e.type+"_"+e.level+"_"+e.urlId+"_"+e.sn}},{key:"getPartialFragment",value:function(e){var t=this,r=void 0,i=void 0,a=void 0,n=null,o=0;return Object.keys(this.fragments).forEach(function(s){var l=t.fragments[s];t.isPartial(l)&&(i=l.body.startPTS-t.bufferPadding,a=l.body.endPTS+t.bufferPadding,e>=i&&e<=a&&(r=Math.min(e-i,a-e),o<=r&&(n=l.body,o=r)))}),n}},{key:"getState",value:function(e){var t=this.getFragmentKey(e),r=this.fragments[t],i=s.NOT_LOADED;return void 0!==r&&(i=r.buffered?!0===this.isPartial(r)?s.PARTIAL:s.OK:s.APPENDING),i}},{key:"isPartial",value:function(e){return!0===e.buffered&&(void 0!==e.range.video&&!0===e.range.video.partial||void 0!==e.range.audio&&!0===e.range.audio.partial)}},{key:"isTimeBuffered",value:function(e,t,r){for(var i=void 0,a=void 0,n=0;n<r.length;n++){if(i=r.start(n)-this.bufferPadding,a=r.end(n)+this.bufferPadding,e>=i&&t<=a)return!0;if(t<=i)return!1}return!1}},{key:"onFragLoaded",value:function(e){var t=e.frag;Number.isFinite(t.sn)&&!t.bitrateTest&&(this.fragments[this.getFragmentKey(t)]={body:t,range:Object.create(null),buffered:!1})}},{key:"onBufferAppended",value:function(e){var t=this;this.timeRanges=e.timeRanges,Object.keys(this.timeRanges).forEach(function(e){var r=t.timeRanges[e];t.detectEvictedFragments(e,r)})}},{key:"onFragBuffered",value:function(e){this.detectPartialFragments(e.frag)}},{key:"hasFragment",value:function(e){var t=this.getFragmentKey(e);return void 0!==this.fragments[t]}},{key:"removeFragment",value:function(e){var t=this.getFragmentKey(e);delete this.fragments[t]}},{key:"removeAllFragments",value:function(){this.fragments=Object.create(null)}}]),t}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSelfScope=function(){return"undefined"==typeof window?self:window}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"isHeader",value:function(e,t){return t+10<=e.length&&73===e[t]&&68===e[t+1]&&51===e[t+2]&&e[t+3]<255&&e[t+4]<255&&e[t+6]<128&&e[t+7]<128&&e[t+8]<128&&e[t+9]<128}},{key:"isFooter",value:function(e,t){return t+10<=e.length&&51===e[t]&&68===e[t+1]&&73===e[t+2]&&e[t+3]<255&&e[t+4]<255&&e[t+6]<128&&e[t+7]<128&&e[t+8]<128&&e[t+9]<128}},{key:"getID3Data",value:function(t,r){for(var i=r,a=0;e.isHeader(t,r);){a+=10,a+=e._readSize(t,r+6),e.isFooter(t,r+10)&&(a+=10),r+=a}if(a>0)return t.subarray(i,i+a)}},{key:"_readSize",value:function(e,t){var r=0;return r=(127&e[t])<<21,r|=(127&e[t+1])<<14,r|=(127&e[t+2])<<7,r|=127&e[t+3]}},{key:"getTimeStamp",value:function(t){for(var r=e.getID3Frames(t),i=0;i<r.length;i++){var a=r[i];if(e.isTimeStampFrame(a))return e._readTimeStamp(a)}}},{key:"isTimeStampFrame",value:function(e){return e&&"PRIV"===e.key&&"com.apple.streaming.transportStreamTimestamp"===e.info}},{key:"_getFrameData",value:function(t){var r=String.fromCharCode(t[0],t[1],t[2],t[3]),i=e._readSize(t,4);return{type:r,size:i,data:t.subarray(10,10+i)}}},{key:"getID3Frames",value:function(t){for(var r=0,i=[];e.isHeader(t,r);){for(var a=e._readSize(t,r+6),n=(r+=10)+a;r+8<n;){var o=e._getFrameData(t.subarray(r)),s=e._decodeFrame(o);s&&i.push(s),r+=o.size+10}e.isFooter(t,r)&&(r+=10)}return i}},{key:"_decodeFrame",value:function(t){return"PRIV"===t.type?e._decodePrivFrame(t):"T"===t.type[0]?e._decodeTextFrame(t):"W"===t.type[0]?e._decodeURLFrame(t):void 0}},{key:"_readTimeStamp",value:function(e){if(8===e.data.byteLength){var t=new Uint8Array(e.data),r=1&t[3],i=(t[4]<<23)+(t[5]<<15)+(t[6]<<7)+t[7];return i/=45,r&&(i+=47721858.84),Math.round(i)}}},{key:"_decodePrivFrame",value:function(t){if(!(t.size<2)){var r=e._utf8ArrayToStr(t.data,!0),i=new Uint8Array(t.data.subarray(r.length+1));return{key:t.type,info:r,data:i.buffer}}}},{key:"_decodeTextFrame",value:function(t){if(!(t.size<2)){if("TXXX"===t.type){var r=1,i=e._utf8ArrayToStr(t.data.subarray(r));r+=i.length+1;var a=e._utf8ArrayToStr(t.data.subarray(r));return{key:t.type,info:i,data:a}}var n=e._utf8ArrayToStr(t.data.subarray(1));return{key:t.type,data:n}}}},{key:"_decodeURLFrame",value:function(t){if("WXXX"===t.type){if(t.size<2)return;var r=1,i=e._utf8ArrayToStr(t.data.subarray(r));r+=i.length+1;var a=e._utf8ArrayToStr(t.data.subarray(r));return{key:t.type,info:i,data:a}}var n=e._utf8ArrayToStr(t.data);return{key:t.type,data:n}}},{key:"_utf8ArrayToStr",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e.length,i=void 0,a=void 0,n=void 0,o="",s=0;s<r;){if(0===(i=e[s++])&&t)return o;if(0!==i&&3!==i)switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:o+=String.fromCharCode(i);break;case 12:case 13:a=e[s++],o+=String.fromCharCode((31&i)<<6|63&a);break;case 14:a=e[s++],n=e[s++],o+=String.fromCharCode((15&i)<<12|(63&a)<<6|(63&n)<<0)}}return o}}]),e}(),n=a._utf8ArrayToStr;t.default=a,t.utf8ArrayToStr=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={search:function(e,t){for(var r=0,i=e.length-1,a=null,n=null;r<=i;){var o=t(n=e[a=(r+i)/2|0]);if(o>0)r=a+1;else{if(!(o<0))return n;i=a-1}}return null}},e.exports=t.default},function(e,t,r){!function(t){var r=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,i=/^([^\/?#]*)(.*)$/,a=/(?:\/|^)\.(?=\/)/g,n=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,o={buildAbsoluteURL:function(e,t,r){if(r=r||{},e=e.trim(),!(t=t.trim())){if(!r.alwaysNormalize)return e;var a=o.parseURL(e);if(!a)throw new Error("Error trying to parse base URL.");return a.path=o.normalizePath(a.path),o.buildURLFromParts(a)}var n=o.parseURL(t);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return r.alwaysNormalize?(n.path=o.normalizePath(n.path),o.buildURLFromParts(n)):t;var s=o.parseURL(e);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var l=i.exec(s.path);s.netLoc=l[1],s.path=l[2]}s.netLoc&&!s.path&&(s.path="/");var u={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(u.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var d=s.path,f=d.substring(0,d.lastIndexOf("/")+1)+n.path;u.path=o.normalizePath(f)}else u.path=s.path,n.params||(u.params=s.params,n.query||(u.query=s.query));return null===u.path&&(u.path=r.alwaysNormalize?o.normalizePath(n.path):n.path),o.buildURLFromParts(u)},parseURL:function(e){var t=r.exec(e);return t?{scheme:t[1]||"",netLoc:t[2]||"",path:t[3]||"",params:t[4]||"",query:t[5]||"",fragment:t[6]||""}:null},normalizePath:function(e){for(e=e.split("").reverse().join("").replace(a,"");e.length!==(e=e.replace(n,"")).length;);return e.split("").reverse().join("")},buildURLFromParts:function(e){return e.scheme+e.netLoc+e.path+e.params+e.query+e.fragment}};e.exports=o}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.State=void 0;var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(r(17)),n=r(6),o=r(4),s=r(0);var l=t.State={STOPPED:"STOPPED",STARTING:"STARTING",IDLE:"IDLE",PAUSED:"PAUSED",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",BUFFER_FLUSHING:"BUFFER_FLUSHING",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"},u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),i(t,[{key:"doTick",value:function(){}},{key:"startLoad",value:function(){}},{key:"stopLoad",value:function(){var e=this.fragCurrent;e&&(e.loader&&e.loader.abort(),this.fragmentTracker.removeFragment(e)),this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=l.STOPPED}},{key:"_streamEnded",value:function(e,t){var r=this.fragCurrent,i=this.fragmentTracker;if(!t.live&&r&&!r.backtracked&&r.sn===t.endSN&&!e.nextStart){var a=i.getState(r);return a===n.FragmentState.PARTIAL||a===n.FragmentState.OK}return!1}},{key:"onMediaSeeking",value:function(){var e=this.config,t=this.media,r=this.mediaBuffer,i=this.state,a=t?t.currentTime:null,n=o.BufferHelper.bufferInfo(r||t,a,this.config.maxBufferHole);if(Number.isFinite(a)&&s.logger.log("media seeking to "+a.toFixed(3)),i===l.FRAG_LOADING){var u=this.fragCurrent;if(0===n.len&&u){var d=e.maxFragLookUpTolerance,f=u.start-d,c=u.start+u.duration+d;a<f||a>c?(u.loader&&(s.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),u.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.state=l.IDLE):s.logger.log("seeking outside of buffer but within currently loaded fragment range")}}else i===l.ENDED&&(0===n.len&&(this.fragPrevious=null,this.fragCurrent=null),this.state=l.IDLE);t&&(this.lastCurrentTime=a),this.loadedmetadata||(this.nextLoadPosition=this.startPosition=a),this.tick()}},{key:"onMediaEnded",value:function(){this.startPosition=this.lastCurrentTime=0}},{key:"onHandlerDestroying",value:function(){this.stopLoad(),function e(t,r,i){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,r,i)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(i):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"onHandlerDestroying",this).call(this)}},{key:"onHandlerDestroyed",value:function(){this.state=l.STOPPED,this.fragmentTracker=null}}]),t}();t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getMediaSource=function(){if("undefined"!=typeof window)return window.MediaSource||window.WebKitMediaSource}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=d(r(69)),n=d(r(68)),o=d(r(67)),s=r(2),l=r(0),u=d(r(1));function d(e){return e&&e.__esModule?e:{default:e}}var f=(0,r(7).getSelfScope)(),c=function(){function e(t,r){var i=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).removePKCS7Padding,a=void 0===i||i;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.logEnabled=!0,this.observer=t,this.config=r,this.removePKCS7Padding=a,a)try{var n=f.crypto;n&&(this.subtle=n.subtle||n.webkitSubtle)}catch(e){}this.disableWebCrypto=!this.subtle}return i(e,[{key:"isSync",value:function(){return this.disableWebCrypto&&this.config.enableSoftwareAES}},{key:"decrypt",value:function(e,t,r,i){var s=this;if(this.disableWebCrypto&&this.config.enableSoftwareAES){this.logEnabled&&(l.logger.log("JS AES decrypt"),this.logEnabled=!1);var u=this.decryptor;u||(this.decryptor=u=new o.default),u.expandKey(t),i(u.decrypt(e,0,r,this.removePKCS7Padding))}else{this.logEnabled&&(l.logger.log("WebCrypto AES decrypt"),this.logEnabled=!1);var d=this.subtle;this.key!==t&&(this.key=t,this.fastAesKey=new n.default(d,t)),this.fastAesKey.expandKey().then(function(n){new a.default(d,r).decrypt(e,n).catch(function(a){s.onWebCryptoError(a,e,t,r,i)}).then(function(e){i(e)})}).catch(function(a){s.onWebCryptoError(a,e,t,r,i)})}}},{key:"onWebCryptoError",value:function(e,t,r,i,a){this.config.enableSoftwareAES?(l.logger.log("WebCrypto Error, disable WebCrypto API"),this.disableWebCrypto=!0,this.logEnabled=!0,this.decrypt(t,r,i,a)):(l.logger.error("decrypting error : "+e.message),this.observer.trigger(u.default.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.FRAG_DECRYPT_ERROR,fatal:!0,reason:e.message}))}},{key:"destroy",value:function(){var e=this.decryptor;e&&(e.destroy(),this.decryptor=void 0)}}]),e}();t.default=c,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(10)),n=function(e){return e&&e.__esModule?e:{default:e}}(r(28));function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(){function e(){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=null,this._byteRange=null,this._decryptdata=null,this.tagList=[],this.programDateTime=null,this.rawProgramDateTime=null,this._elementaryStreams=(o(t={},e.ElementaryStreamTypes.AUDIO,!1),o(t,e.ElementaryStreamTypes.VIDEO,!1),t)}return i(e,[{key:"addElementaryStream",value:function(e){this._elementaryStreams[e]=!0}},{key:"hasElementaryStream",value:function(e){return!0===this._elementaryStreams[e]}},{key:"createInitializationVector",value:function(e){for(var t=new Uint8Array(16),r=12;r<16;r++)t[r]=e>>8*(15-r)&255;return t}},{key:"fragmentDecryptdataFromLevelkey",value:function(e,t){var r=e;return e&&e.method&&e.uri&&!e.iv&&((r=new n.default).method=e.method,r.baseuri=e.baseuri,r.reluri=e.reluri,r.iv=this.createInitializationVector(t)),r}},{key:"url",get:function(){return!this._url&&this.relurl&&(this._url=a.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url},set:function(e){this._url=e}},{key:"byteRange",get:function(){if(!this._byteRange&&!this.rawByteRange)return[];if(this._byteRange)return this._byteRange;var e=[];if(this.rawByteRange){var t=this.rawByteRange.split("@",2);if(1===t.length){var r=this.lastByteRangeEndOffset;e[0]=r||0}else e[0]=parseInt(t[1]);e[1]=parseInt(t[0])+e[0],this._byteRange=e}return e}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"decryptdata",get:function(){return this._decryptdata||(this._decryptdata=this.fragmentDecryptdataFromLevelkey(this.levelkey,this.sn)),this._decryptdata}},{key:"endProgramDateTime",get:function(){if(!Number.isFinite(this.programDateTime))return null;var e=Number.isFinite(this.duration)?this.duration:0;return this.programDateTime+1e3*e}},{key:"encrypted",get:function(){return!(!this.decryptdata||null===this.decryptdata.uri||null!==this.decryptdata.key)}}],[{key:"ElementaryStreamTypes",get:function(){return{AUDIO:"audio",VIDEO:"video"}}}]),e}();t.default=s,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fixLineBreaks=void 0;var i=function(e){return e&&e.__esModule?e:{default:e}}(r(40));var a=function(){return{decode:function(e){if(!e)return"";if("string"!=typeof e)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}};function n(){this.window=window,this.state="INITIAL",this.buffer="",this.decoder=new a,this.regionList=[]}function o(){this.values=Object.create(null)}function s(e,t,r,i){var a=i?e.split(i):[e];for(var n in a)if("string"==typeof a[n]){var o=a[n].split(r);if(2===o.length)t(o[0],o[1])}}o.prototype={set:function(e,t){this.get(e)||""===t||(this.values[e]=t)},get:function(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,r){for(var i=0;i<r.length;++i)if(t===r[i]){this.set(e,t);break}},integer:function(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return!!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(t=parseFloat(t))>=0&&t<=100)&&(this.set(e,t),!0)}};var l=new i.default(0,0,0),u="middle"===l.align?"middle":"center";function d(e,t,r){var i=e;function a(){var t=function(e){function t(e,t,r,i){return 3600*(0|e)+60*(0|t)+(0|r)+(0|i)/1e3}var r=e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return r?r[3]?t(r[1],r[2],r[3].replace(":",""),r[4]):r[1]>59?t(r[1],r[2],0,r[4]):t(0,r[1],r[2],r[4]):null}(e);if(null===t)throw new Error("Malformed timestamp: "+i);return e=e.replace(/^[^\sa-zA-Z-]+/,""),t}function n(){e=e.replace(/^\s+/,"")}if(n(),t.startTime=a(),n(),"--\x3e"!==e.substr(0,3))throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): "+i);e=e.substr(3),n(),t.endTime=a(),n(),function(e,t){var i=new o;s(e,function(e,t){switch(e){case"region":for(var a=r.length-1;a>=0;a--)if(r[a].id===t){i.set(e,r[a].region);break}break;case"vertical":i.alt(e,t,["rl","lr"]);break;case"line":var n=t.split(","),o=n[0];i.integer(e,o),i.percent(e,o)&&i.set("snapToLines",!1),i.alt(e,o,["auto"]),2===n.length&&i.alt("lineAlign",n[1],["start",u,"end"]);break;case"position":n=t.split(","),i.percent(e,n[0]),2===n.length&&i.alt("positionAlign",n[1],["start",u,"end","line-left","line-right","auto"]);break;case"size":i.percent(e,t);break;case"align":i.alt(e,t,["start",u,"end","left","right"])}},/:/,/\s/),t.region=i.get("region",null),t.vertical=i.get("vertical","");var a=i.get("line","auto");"auto"===a&&-1===l.line&&(a=-1),t.line=a,t.lineAlign=i.get("lineAlign","start"),t.snapToLines=i.get("snapToLines",!0),t.size=i.get("size",100),t.align=i.get("align",u);var n=i.get("position","auto");"auto"===n&&50===l.position&&(n="start"===t.align||"left"===t.align?0:"end"===t.align||"right"===t.align?100:50),t.position=n}(e,t)}function f(e){return e.replace(/<br(?: \/)?>/gi,"\n")}n.prototype={parse:function(e){var t=this;function r(){var e=t.buffer,r=0;for(e=f(e);r<e.length&&"\r"!==e[r]&&"\n"!==e[r];)++r;var i=e.substr(0,r);return"\r"===e[r]&&++r,"\n"===e[r]&&++r,t.buffer=e.substr(r),i}function a(e){s(e,function(e,t){e},/:/)}e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));try{var n=void 0;if("INITIAL"===t.state){if(!/\r\n|\n/.test(t.buffer))return this;var o=(n=r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!o||!o[0])throw new Error("Malformed WebVTT signature.");t.state="HEADER"}for(var l=!1;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(l?l=!1:n=r(),t.state){case"HEADER":/:/.test(n)?a(n):n||(t.state="ID");continue;case"NOTE":n||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(n)){t.state="NOTE";break}if(!n)continue;if(t.cue=new i.default(0,0,""),t.state="CUE",-1===n.indexOf("--\x3e")){t.cue.id=n;continue}case"CUE":try{d(n,t.cue,t.regionList)}catch(e){t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":var u=-1!==n.indexOf("--\x3e");if(!n||u&&(l=!0)){t.oncue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}t.cue.text&&(t.cue.text+="\n"),t.cue.text+=n;continue;case"BADCUE":n||(t.state="ID");continue}}}catch(e){"CUETEXT"===t.state&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state="INITIAL"===t.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){try{if(this.buffer+=this.decoder.decode(),(this.cue||"HEADER"===this.state)&&(this.buffer+="\n\n",this.parse()),"INITIAL"===this.state)throw new Error("Malformed WebVTT signature.")}catch(e){throw e}return this.onflush&&this.onflush(),this}},t.fixLineBreaks=f,t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendAddTrackEvent=function(e,t){var r=null;try{r=new window.Event("addtrack")}catch(e){(r=document.createEvent("Event")).initEvent("addtrack",!1,!1)}r.track=e,t.dispatchEvent(r)},t.clearCurrentCues=function(e){if(e&&e.cues)for(;e.cues.length>0;)e.removeCue(e.cues[0])}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(r(3));var n=function(e){function t(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=Array(i>1?i-1:0),n=1;n<i;n++)a[n-1]=arguments[n];var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,e].concat(a)));return o._tickInterval=null,o._tickTimer=null,o._tickCallCount=0,o._boundTick=o.tick.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),i(t,[{key:"onHandlerDestroying",value:function(){this.clearNextTick(),this.clearInterval()}},{key:"hasInterval",value:function(){return!!this._tickInterval}},{key:"hasNextTick",value:function(){return!!this._tickTimer}},{key:"setInterval",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return!this._tickInterval&&(this._tickInterval=setInterval(this._boundTick,e),!0)})},{key:"clearInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return!!this._tickInterval&&(clearInterval(this._tickInterval),this._tickInterval=null,!0)})},{key:"clearNextTick",value:function(){return!!this._tickTimer&&(clearTimeout(this._tickTimer),this._tickTimer=null,!0)}},{key:"tick",value:function(){this._tickCallCount++,1===this._tickCallCount&&(this.doTick(),this._tickCallCount>1&&(this.clearNextTick(),this._tickTimer=setTimeout(this._boundTick,0)),this._tickCallCount=0)}},{key:"doTick",value:function(){}}]),t}();t.default=n,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findFragmentByPDT=function(e,t,r){if(!Array.isArray(e)||!e.length||!Number.isFinite(t))return null;if(t<e[0].programDateTime)return null;if(t>=e[e.length-1].endProgramDateTime)return null;r=r||0;for(var i=0;i<e.length;++i){var a=e[i];if(n(t,r,a))return a}return null},t.findFragmentByPTS=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=e?t[e.sn-t[0].sn+1]:null;if(o&&!a(r,n,o))return o;return i.default.search(t,a.bind(null,r,n))},t.fragmentWithinToleranceTest=a,t.pdtWithinToleranceTest=n;var i=function(e){return e&&e.__esModule?e:{default:e}}(r(9));function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],i=Math.min(t,r.duration+(r.deltaPTS?r.deltaPTS:0));return r.start+r.duration-i<=e?1:r.start-i>e&&r.start?-1:0}function n(e,t,r){var i=1e3*Math.min(t,r.duration+(r.deltaPTS?r.deltaPTS:0));return r.endProgramDateTime-i>e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findFirstFragWithCC=n,t.findFragWithCC=function(e,t){return i.default.search(e,function(e){return e.cc<t?1:e.cc>t?-1:0})},t.shouldAlignOnDiscontinuities=o,t.findDiscontinuousReferenceFrag=s,t.adjustPts=l,t.alignStream=function(e,t,r){u(e,r,t),!r.PTSKnown&&t&&d(r,t.details)},t.alignDiscontinuities=u,t.alignPDT=d;var i=function(e){return e&&e.__esModule?e:{default:e}}(r(9)),a=r(0);function n(e,t){for(var r=null,i=0;i<e.length;i+=1){var a=e[i];if(a&&a.cc===t){r=a;break}}return r}function o(e,t,r){var i=!1;return t&&t.details&&r&&(r.endCC>r.startCC||e&&e.cc<r.startCC)&&(i=!0),i}function s(e,t){var r=e.fragments,i=t.fragments;if(i.length&&r.length){var o=n(r,i[0].cc);if(o&&(!o||o.startPTS))return o;a.logger.log("No frag in previous level to align on")}else a.logger.log("No fragments to align")}function l(e,t){t.fragments.forEach(function(t){if(t){var r=t.start+e;t.start=t.startPTS=r,t.endPTS=r+t.duration}}),t.PTSKnown=!0}function u(e,t,r){if(o(e,r,t)){var i=s(r.details,t);i&&(a.logger.log("Adjusting PTS using last level due to CC increase within current level"),l(i.start,t))}}function d(e,t){if(t&&t.fragments.length){if(!e.hasProgramDateTime||!t.hasProgramDateTime)return;var r=t.fragments[0].programDateTime,i=(e.fragments[0].programDateTime-r)/1e3+t.fragments[0].start;Number.isFinite(i)&&(a.logger.log("adjusting PTS using programDateTime delta, sliding:"+i.toFixed(3)),l(i,e))}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={toString:function(e){for(var t="",r=e.length,i=0;i<r;i++)t+="["+e.start(i).toFixed(3)+","+e.end(i).toFixed(3)+"]";return t}},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Observer=void 0;var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=r(57);t.Observer=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.EventEmitter),i(t,[{key:"trigger",value:function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];this.emit.apply(this,[e,e].concat(r))}}]),t}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={BitratesMap:[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],SamplingRateMap:[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],SamplesCoefficients:[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],BytesInSlot:[0,1,1,4],appendFrame:function(e,t,r,i,a){if(!(r+24>t.length)){var n=this.parseHeader(t,r);if(n&&r+n.frameLength<=t.length){var o=i+a*(9e4*n.samplesPerFrame/n.sampleRate),s={unit:t.subarray(r,r+n.frameLength),pts:o,dts:o};return e.config=[],e.channelCount=n.channelCount,e.samplerate=n.sampleRate,e.samples.push(s),e.len+=n.frameLength,{sample:s,length:n.frameLength}}}},parseHeader:function(e,t){var r=e[t+1]>>3&3,a=e[t+1]>>1&3,n=e[t+2]>>4&15,o=e[t+2]>>2&3,s=e[t+2]>>1&1;if(1!==r&&0!==n&&15!==n&&3!==o){var l=3===r?3-a:3===a?3:4,u=1e3*i.BitratesMap[14*l+n-1],d=3===r?0:2===r?1:2,f=i.SamplingRateMap[3*d+o],c=e[t+3]>>6==3?1:2,h=i.SamplesCoefficients[r][a],v=i.BytesInSlot[a],g=8*h*v;return{sampleRate:f,channelCount:c,frameLength:parseInt(h*u/f+s,10)*v,samplesPerFrame:g}}},isHeaderPattern:function(e,t){return 255===e[t]&&224==(224&e[t+1])&&0!=(6&e[t+1])},isHeader:function(e,t){return!!(t+1<e.length&&this.isHeaderPattern(e,t))},probe:function(e,t){if(t+1<e.length&&this.isHeaderPattern(e,t)){var r=this.parseHeader(e,t),i=4;r&&r.frameLength&&(i=r.frameLength);var a=t+i;if(a===e.length||a+1<e.length&&this.isHeaderPattern(e,a))return!0}return!1}};t.default=i,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAudioConfig=o,t.isHeaderPattern=s,t.getHeaderLength=l,t.getFullFrameLength=u,t.isHeader=function(e,t){if(t+1<e.length&&s(e,t))return!0;return!1},t.probe=function(e,t){if(t+1<e.length&&s(e,t)){var r=l(e,t),i=r;t+5<e.length&&(i=u(e,t));var a=t+i;if(a===e.length||a+1<e.length&&s(e,a))return!0}return!1},t.initTrackConfig=function(e,t,r,a,n){if(!e.samplerate){var s=o(t,r,a,n);e.config=s.config,e.samplerate=s.samplerate,e.channelCount=s.channelCount,e.codec=s.codec,e.manifestCodec=s.manifestCodec,i.logger.log("parsed codec:"+e.codec+",rate:"+s.samplerate+",nb channel:"+s.channelCount)}},t.getFrameDuration=d,t.parseFrameHeader=f,t.appendFrame=function(e,t,r,i,a){var n=d(e.samplerate),o=f(t,r,i,a,n);if(o){var s=o.stamp,l=o.headerLength,u=o.frameLength,c={unit:t.subarray(r+l,r+l+u),pts:s,dts:s};return e.samples.push(c),e.len+=u,{sample:c,length:u+l}}return};var i=r(0),a=r(2),n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));r(7);function o(e,t,r,o){var s,l=void 0,u=void 0,d=void 0,f=void 0,c=navigator.userAgent.toLowerCase(),h=o,v=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];if(l=1+((192&t[r+2])>>>6),!((s=(60&t[r+2])>>>2)>v.length-1))return d=(1&t[r+2])<<2,d|=(192&t[r+3])>>>6,i.logger.log("manifest codec:"+o+",ADTS data:type:"+l+",sampleingIndex:"+s+"["+v[s]+"Hz],channelConfig:"+d),/firefox/i.test(c)?s>=6?(l=5,f=new Array(4),u=s-3):(l=2,f=new Array(2),u=s):-1!==c.indexOf("android")?(l=2,f=new Array(2),u=s):(l=5,f=new Array(4),o&&(-1!==o.indexOf("mp4a.40.29")||-1!==o.indexOf("mp4a.40.5"))||!o&&s>=6?u=s-3:((o&&-1!==o.indexOf("mp4a.40.2")&&(s>=6&&1===d||/vivaldi/i.test(c))||!o&&1===d)&&(l=2,f=new Array(2)),u=s)),f[0]=l<<3,f[0]|=(14&s)>>1,f[1]|=(1&s)<<7,f[1]|=d<<3,5===l&&(f[1]|=(14&u)>>1,f[2]=(1&u)<<7,f[2]|=8,f[3]=0),{config:f,samplerate:v[s],channelCount:d,codec:"mp4a.40."+l,manifestCodec:h};e.trigger(n.default.ERROR,{type:a.ErrorTypes.MEDIA_ERROR,details:a.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+s})}function s(e,t){return 255===e[t]&&240==(246&e[t+1])}function l(e,t){return 1&e[t+1]?7:9}function u(e,t){return(3&e[t+3])<<11|e[t+4]<<3|(224&e[t+5])>>>5}function d(e){return 9216e4/e}function f(e,t,r,i,a){var n,o=void 0,s=e.length;if(n=l(e,t),o=u(e,t),(o-=n)>0&&t+n+o<=s)return{headerLength:n,frameLength:o,stamp:r+i*a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=g(r(1)),n=r(2),o=g(r(13)),s=g(r(66)),l=g(r(29)),u=g(r(65)),d=g(r(62)),f=g(r(61)),c=g(r(58)),h=r(7),v=r(0);function g(e){return e&&e.__esModule?e:{default:e}}var p=(0,h.getSelfScope)(),y=void 0;try{y=p.performance.now.bind(p.performance)}catch(e){v.logger.debug("Unable to use Performance API on this environment"),y=p.Date.now}var m=function(){function e(t,r,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.observer=t,this.typeSupported=r,this.config=i,this.vendor=a}return i(e,[{key:"destroy",value:function(){var e=this.demuxer;e&&e.destroy()}},{key:"push",value:function(e,t,r,i,n,s,l,u,d,f,c,h){var v=this;if(e.byteLength>0&&null!=t&&null!=t.key&&"AES-128"===t.method){var g=this.decrypter;null==g&&(g=this.decrypter=new o.default(this.observer,this.config));var p=y();g.decrypt(e,t.key.buffer,t.iv.buffer,function(e){var o=y();v.observer.trigger(a.default.FRAG_DECRYPTED,{stats:{tstart:p,tdecrypt:o}}),v.pushDecrypted(new Uint8Array(e),t,new Uint8Array(r),i,n,s,l,u,d,f,c,h)})}else this.pushDecrypted(new Uint8Array(e),t,new Uint8Array(r),i,n,s,l,u,d,f,c,h)}},{key:"pushDecrypted",value:function(e,t,r,i,o,h,v,g,p,y,m,b){var E=this.demuxer;if(!E||(v||g)&&!this.probe(e)){for(var _=this.observer,T=this.typeSupported,S=this.config,k=[{demux:u.default,remux:f.default},{demux:l.default,remux:c.default},{demux:s.default,remux:f.default},{demux:d.default,remux:f.default}],R=0,A=k.length;R<A;R++){var w=k[R],O=w.demux.probe;if(O(e)){var L=this.remuxer=new w.remux(_,S,T,this.vendor);E=new w.demux(_,L,S,T),this.probe=O;break}}if(!E)return void _.trigger(a.default.ERROR,{type:n.ErrorTypes.MEDIA_ERROR,details:n.ErrorDetails.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"});this.demuxer=E}var D=this.remuxer;(v||g)&&(E.resetInitSegment(r,i,o,y),D.resetInitSegment()),v&&(E.resetTimeStamp(b),D.resetTimeStamp(b)),"function"==typeof E.setDecryptData&&E.setDecryptData(t),E.append(e,h,p,m)}}]),e}();t.default=m,e.exports=t.default},function(e,t,r){"use strict";var i,a="object"==typeof Reflect?Reflect:null,n=a&&"function"==typeof a.apply?a.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};i=a&&"function"==typeof a.ownKeys?a.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var l=10;function u(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function d(e,t,r,i){var a,n,o;if("function"!=typeof r)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r);if(void 0===(n=e._events)?(n=e._events=Object.create(null),e._eventsCount=0):(void 0!==n.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),n=e._events),o=n[t]),void 0===o)o=n[t]=r,++e._eventsCount;else if("function"==typeof o?o=n[t]=i?[r,o]:[o,r]:i?o.unshift(r):o.push(r),(a=u(e))>0&&o.length>a&&!o.warned){o.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=e,s.type=t,s.count=o.length,function(e){console&&console.warn&&console.warn(e)}(s)}return e}function f(e,t,r){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},a=function(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,n(this.listener,this.target,e))}.bind(i);return a.listener=r,i.wrapFn=a,a}function c(e,t,r){var i=e._events;if(void 0===i)return[];var a=i[t];return void 0===a?[]:"function"==typeof a?r?[a.listener||a]:[a]:r?function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(a):v(a,a.length)}function h(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function v(e,t){for(var r=new Array(t),i=0;i<t;++i)r[i]=e[i];return r}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return l},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");l=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return u(this)},s.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var i="error"===e,a=this._events;if(void 0!==a)i=i&&void 0===a.error;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var s=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw s.context=o,s}var l=a[e];if(void 0===l)return!1;if("function"==typeof l)n(l,this,t);else{var u=l.length,d=v(l,u);for(r=0;r<u;++r)n(d[r],this,t)}return!0},s.prototype.addListener=function(e,t){return d(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return d(this,e,t,!0)},s.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,f(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,f(this,e,t)),this},s.prototype.removeListener=function(e,t){var r,i,a,n,o;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(i=this._events))return this;if(void 0===(r=i[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(a=-1,n=r.length-1;n>=0;n--)if(r[n]===t||r[n].listener===t){o=r[n].listener,a=n;break}if(a<0)return this;0===a?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,a),1===r.length&&(i[e]=r[0]),void 0!==i.removeListener&&this.emit("removeListener",e,o||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,r,i;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var a,n=Object.keys(r);for(i=0;i<n.length;++i)"removeListener"!==(a=n[i])&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},s.prototype.listeners=function(e){return c(this,e,!0)},s.prototype.rawListeners=function(e){return c(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},s.prototype.listenerCount=h,s.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=(r(25),function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(70))),n=c(r(1)),o=c(r(24)),s=r(0),l=r(2),u=r(12),d=r(7),f=r(21);function c(e){return e&&e.__esModule?e:{default:e}}var h=(0,d.getSelfScope)(),v=(0,u.getMediaSource)(),g=function(){function e(t,r){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hls=t,this.id=r;var u=this.observer=new f.Observer,d=t.config,c=function(e,r){(r=r||{}).frag=i.frag,r.id=i.id,t.trigger(e,r)};u.on(n.default.FRAG_DECRYPTED,c),u.on(n.default.FRAG_PARSING_INIT_SEGMENT,c),u.on(n.default.FRAG_PARSING_DATA,c),u.on(n.default.FRAG_PARSED,c),u.on(n.default.ERROR,c),u.on(n.default.FRAG_PARSING_METADATA,c),u.on(n.default.FRAG_PARSING_USERDATA,c),u.on(n.default.INIT_PTS_FOUND,c);var g={mp4:v.isTypeSupported("video/mp4"),mpeg:v.isTypeSupported("audio/mpeg"),mp3:v.isTypeSupported('audio/mp4; codecs="mp3"')},p=navigator.vendor;if(d.enableWorker&&"undefined"!=typeof Worker){s.logger.log("demuxing in webworker");var y=void 0;try{y=this.w=a(56),this.onwmsg=this.onWorkerMessage.bind(this),y.addEventListener("message",this.onwmsg),y.onerror=function(e){t.trigger(n.default.ERROR,{type:l.ErrorTypes.OTHER_ERROR,details:l.ErrorDetails.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",err:{message:e.message+" ("+e.filename+":"+e.lineno+")"}})},y.postMessage({cmd:"init",typeSupported:g,vendor:p,id:r,config:JSON.stringify(d)})}catch(e){s.logger.warn("Error in worker:",e),s.logger.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"),y&&h.URL.revokeObjectURL(y.objectURL),this.demuxer=new o.default(u,g,d,p),this.w=void 0}}else this.demuxer=new o.default(u,g,d,p)}return i(e,[{key:"destroy",value:function(){var e=this.w;if(e)e.removeEventListener("message",this.onwmsg),e.terminate(),this.w=null;else{var t=this.demuxer;t&&(t.destroy(),this.demuxer=null)}var r=this.observer;r&&(r.removeAllListeners(),this.observer=null)}},{key:"push",value:function(e,t,r,i,a,n,o,l){var u=this.w,d=Number.isFinite(a.startPTS)?a.startPTS:a.start,f=a.decryptdata,c=this.frag,h=!(c&&a.cc===c.cc),v=!(c&&a.level===c.level),g=c&&a.sn===c.sn+1,p=!v&&g;if(h&&s.logger.log(this.id+":discontinuity detected"),v&&s.logger.log(this.id+":switch detected"),this.frag=a,u)u.postMessage({cmd:"demux",data:e,decryptdata:f,initSegment:t,audioCodec:r,videoCodec:i,timeOffset:d,discontinuity:h,trackSwitch:v,contiguous:p,duration:n,accurateTimeOffset:o,defaultInitPTS:l},e instanceof ArrayBuffer?[e]:[]);else{var y=this.demuxer;y&&y.push(e,f,t,r,i,d,h,v,p,n,o,l)}}},{key:"onWorkerMessage",value:function(e){var t=e.data,r=this.hls;switch(t.event){case"init":h.URL.revokeObjectURL(this.w.objectURL);break;case n.default.FRAG_PARSING_DATA:t.data.data1=new Uint8Array(t.data1),t.data2&&(t.data.data2=new Uint8Array(t.data2));default:t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,r.trigger(t.event,t.data)}}}]),e}();t.default=g,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,drac:!0,dvav:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0}};t.isCodecType=function(e,t){var r=i[t];return!!r&&!0===r[e.slice(0,4)]},t.isCodecSupportedInMp4=function(e,t){return window.MediaSource.isTypeSupported((t||"video")+'/mp4;codecs="'+e+'"')}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(10));var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.method=null,this.key=null,this.iv=null,this._uri=null}return i(e,[{key:"uri",get:function(){return!this._uri&&this.reluri&&(this._uri=a.buildAbsoluteURL(this.baseuri,this.reluri,{alwaysNormalize:!0})),this._uri}}]),e}();t.default=n,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=r(0),n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));var o=Math.pow(2,32)-1,s=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.observer=t,this.remuxer=r}return i(e,[{key:"resetTimeStamp",value:function(e){this.initPTS=e}},{key:"resetInitSegment",value:function(t,r,i,a){if(t&&t.byteLength){var o=this.initData=e.parseInitSegment(t);null==r&&(r="mp4a.40.5"),null==i&&(i="avc1.42e01e");var s={};o.audio&&o.video?s.audiovideo={container:"video/mp4",codec:r+","+i,initSegment:a?t:null}:(o.audio&&(s.audio={container:"audio/mp4",codec:r,initSegment:a?t:null}),o.video&&(s.video={container:"video/mp4",codec:i,initSegment:a?t:null})),this.observer.trigger(n.default.FRAG_PARSING_INIT_SEGMENT,{tracks:s})}else r&&(this.audioCodec=r),i&&(this.videoCodec=i)}},{key:"append",value:function(t,r,i,a){var o=this.initData;o||(this.resetInitSegment(t,this.audioCodec,this.videoCodec,!1),o=this.initData);var s,l=this.initPTS;if(void 0===l){var u=e.getStartDTS(o,t);this.initPTS=l=u-r,this.observer.trigger(n.default.INIT_PTS_FOUND,{initPTS:l})}e.offsetStartDTS(o,t,l),s=e.getStartDTS(o,t),this.remuxer.remux(o.audio,o.video,null,null,s,i,a,t)}},{key:"destroy",value:function(){}}],[{key:"probe",value:function(t){return e.findBox({data:t,start:0,end:Math.min(t.length,16384)},["moof"]).length>0}},{key:"bin2str",value:function(e){return String.fromCharCode.apply(null,e)}},{key:"readUint16",value:function(e,t){e.data&&(t+=e.start,e=e.data);var r=e[t]<<8|e[t+1];return r<0?65536+r:r}},{key:"readUint32",value:function(e,t){e.data&&(t+=e.start,e=e.data);var r=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3];return r<0?4294967296+r:r}},{key:"writeUint32",value:function(e,t,r){e.data&&(t+=e.start,e=e.data),e[t]=r>>24,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r}},{key:"findBox",value:function(t,r){var i=[],a=void 0,n=void 0,o=void 0,s=void 0,l=void 0,u=void 0,d=void 0;if(t.data?(u=t.start,s=t.end,t=t.data):(u=0,s=t.byteLength),!r.length)return null;for(a=u;a<s;)n=e.readUint32(t,a),o=e.bin2str(t.subarray(a+4,a+8)),d=n>1?a+n:s,o===r[0]&&(1===r.length?i.push({data:t,start:a+8,end:d}):(l=e.findBox({data:t,start:a+8,end:d},r.slice(1))).length&&(i=i.concat(l))),a=d;return i}},{key:"parseSegmentIndex",value:function(t){var r=e.findBox(t,["moov"])[0],i=r?r.end:null,a=0,n=e.findBox(t,["sidx"]),o=void 0;if(!n||!n[0])return null;o=[];var s=(n=n[0]).data[0];a=0===s?8:16;var l=e.readUint32(n,a);a+=4;a+=0===s?8:16,a+=2;var u=n.end+0,d=e.readUint16(n,a);a+=2;for(var f=0;f<d;f++){var c=a,h=e.readUint32(n,c);c+=4;var v=2147483647&h;if(1===(2147483648&h)>>>31)return void console.warn("SIDX has hierarchical references (not supported)");var g=e.readUint32(n,c);c+=4,o.push({referenceSize:v,subsegmentDuration:g,info:{duration:g/l,start:u,end:u+v-1}}),u+=v,a=c+=4}return{earliestPresentationTime:0,timescale:l,version:s,referencesCount:d,references:o,moovEndOffset:i}}},{key:"parseInitSegment",value:function(t){var r=[];return e.findBox(t,["moov","trak"]).forEach(function(t){var i=e.findBox(t,["tkhd"])[0];if(i){var n=i.data[i.start],o=0===n?12:20,s=e.readUint32(i,o),l=e.findBox(t,["mdia","mdhd"])[0];if(l){o=0===(n=l.data[l.start])?12:20;var u=e.readUint32(l,o),d=e.findBox(t,["mdia","hdlr"])[0];if(d){var f={soun:"audio",vide:"video"}[e.bin2str(d.data.subarray(d.start+8,d.start+12))];if(f){var c=e.findBox(t,["mdia","minf","stbl","stsd"]);if(c.length){c=c[0];var h=e.bin2str(c.data.subarray(c.start+12,c.start+16));a.logger.log("MP4Demuxer:"+f+":"+h+" found")}r[s]={timescale:u,type:f},r[f]={timescale:u,id:s}}}}}}),r}},{key:"getStartDTS",value:function(t,r){var i,a,n=void 0;return n=e.findBox(r,["moof","traf"]),i=[].concat.apply([],n.map(function(r){return e.findBox(r,["tfhd"]).map(function(i){var a,n;return a=e.readUint32(i,4),n=t[a].timescale||9e4,e.findBox(r,["tfdt"]).map(function(t){var r,i=void 0;return r=t.data[t.start],i=e.readUint32(t,4),1===r&&(i*=Math.pow(2,32),i+=e.readUint32(t,8)),i})[0]/n})})),a=Math.min.apply(null,i),isFinite(a)?a:0}},{key:"offsetStartDTS",value:function(t,r,i){e.findBox(r,["moof","traf"]).map(function(r){return e.findBox(r,["tfhd"]).map(function(a){var n=e.readUint32(a,4),s=t[n].timescale||9e4;e.findBox(r,["tfdt"]).map(function(t){var r=t.data[t.start],a=e.readUint32(t,4);if(0===r)e.writeUint32(t,4,a-i*s);else{a*=Math.pow(2,32),a+=e.readUint32(t,8),a-=i*s,a=Math.max(a,0);var n=Math.floor(a/(o+1)),l=Math.floor(a%(o+1));e.writeUint32(t,4,n),e.writeUint32(t,8,l)}})})})}}]),e}();t.default=s,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=d(r(1)),n=d(r(3)),o=r(2),s=r(0),l=d(r(29)),u=d(r(76));function d(e){return e&&e.__esModule?e:{default:e}}var f=window.performance,c={MANIFEST:"manifest",LEVEL:"level",AUDIO_TRACK:"audioTrack",SUBTITLE_TRACK:"subtitleTrack"},h={MAIN:"main",AUDIO:"audio",SUBTITLE:"subtitle"},v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a.default.MANIFEST_LOADING,a.default.LEVEL_LOADING,a.default.AUDIO_TRACK_LOADING,a.default.SUBTITLE_TRACK_LOADING));return r.loaders={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),i(t,[{key:"createInternalLoader",value:function(e){var t=this.hls.config,r=t.pLoader,i=t.loader,a=new(r||i)(t);return e.loader=a,this.loaders[e.type]=a,a}},{key:"getInternalLoader",value:function(e){return this.loaders[e.type]}},{key:"resetInternalLoader",value:function(e){this.loaders[e]&&delete this.loaders[e]}},{key:"destroyInternalLoaders",value:function(){for(var e in this.loaders){var t=this.loaders[e];t&&t.destroy(),this.resetInternalLoader(e)}}},{key:"destroy",value:function(){this.destroyInternalLoaders(),function e(t,r,i){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,r,i)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(i):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"onManifestLoading",value:function(e){this.load(e.url,{type:c.MANIFEST,level:0,id:null})}},{key:"onLevelLoading",value:function(e){this.load(e.url,{type:c.LEVEL,level:e.level,id:e.id})}},{key:"onAudioTrackLoading",value:function(e){this.load(e.url,{type:c.AUDIO_TRACK,level:null,id:e.id})}},{key:"onSubtitleTrackLoading",value:function(e){this.load(e.url,{type:c.SUBTITLE_TRACK,level:null,id:e.id})}},{key:"load",value:function(e,t){var r=this.hls.config;s.logger.debug("Loading playlist of type "+t.type+", level: "+t.level+", id: "+t.id);var i=this.getInternalLoader(t);if(i){var a=i.context;if(a&&a.url===e)return s.logger.trace("playlist request ongoing"),!1;s.logger.warn("aborting previous loader for type: "+t.type),i.abort()}var n=void 0,o=void 0,l=void 0,u=void 0;switch(t.type){case c.MANIFEST:n=r.manifestLoadingMaxRetry,o=r.manifestLoadingTimeOut,l=r.manifestLoadingRetryDelay,u=r.manifestLoadingMaxRetryTimeout;break;case c.LEVEL:n=0,o=r.levelLoadingTimeOut;break;default:n=r.levelLoadingMaxRetry,o=r.levelLoadingTimeOut,l=r.levelLoadingRetryDelay,u=r.levelLoadingMaxRetryTimeout}i=this.createInternalLoader(t),t.url=e,t.responseType=t.responseType||"";var d={timeout:o,maxRetry:n,retryDelay:l,maxRetryDelay:u},f={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};return s.logger.debug("Calling internal loader delegate for URL: "+e),i.load(t,d,f),!0}},{key:"loadsuccess",value:function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(r.isSidxRequest)return this._handleSidxRequest(e,r),void this._handlePlaylistLoaded(e,t,r,i);this.resetInternalLoader(r.type);var a=e.data;t.tload=f.now(),0===a.indexOf("#EXTM3U")?a.indexOf("#EXTINF:")>0||a.indexOf("#EXT-X-TARGETDURATION:")>0?this._handleTrackOrLevelPlaylist(e,t,r,i):this._handleMasterPlaylist(e,t,r,i):this._handleManifestParsingError(e,r,"no EXTM3U delimiter",i)}},{key:"loaderror",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this._handleNetworkError(t,r,!1,e)}},{key:"loadtimeout",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this._handleNetworkError(t,r,!0)}},{key:"_handleMasterPlaylist",value:function(e,r,i,n){var o=this.hls,l=e.data,d=t.getResponseUrl(e,i),f=u.default.parseMasterPlaylist(l,d);if(f.length){var c=f.map(function(e){return{id:e.attrs.AUDIO,codec:e.audioCodec}}),h=u.default.parseMasterPlaylistMedia(l,d,"AUDIO",c),v=u.default.parseMasterPlaylistMedia(l,d,"SUBTITLES");if(h.length){var g=!1;h.forEach(function(e){e.url||(g=!0)}),!1===g&&f[0].audioCodec&&!f[0].attrs.AUDIO&&(s.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),h.unshift({type:"main",name:"main"}))}o.trigger(a.default.MANIFEST_LOADED,{levels:f,audioTracks:h,subtitles:v,url:d,stats:r,networkDetails:n})}else this._handleManifestParsingError(e,i,"no level found in manifest",n)}},{key:"_handleTrackOrLevelPlaylist",value:function(e,r,i,n){var o=this.hls,s=i.id,l=i.level,d=i.type,h=t.getResponseUrl(e,i),v=Number.isFinite(s)?s:0,g=Number.isFinite(l)?l:v,p=t.mapContextToLevelType(i),y=u.default.parseLevelPlaylist(e.data,h,g,p,v);if(y.tload=r.tload,d===c.MANIFEST){var m={url:h,details:y};o.trigger(a.default.MANIFEST_LOADED,{levels:[m],audioTracks:[],url:h,stats:r,networkDetails:n})}if(r.tparsed=f.now(),y.needSidxRanges){var b=y.initSegment.url;this.load(b,{isSidxRequest:!0,type:d,level:l,levelDetails:y,id:s,rangeStart:0,rangeEnd:2048,responseType:"arraybuffer"})}else i.levelDetails=y,this._handlePlaylistLoaded(e,r,i,n)}},{key:"_handleSidxRequest",value:function(e,t){var r=l.default.parseSegmentIndex(new Uint8Array(e.data));if(r){var i=r.references,a=t.levelDetails;i.forEach(function(e,t){var r=e.info,i=a.fragments[t];0===i.byteRange.length&&(i.rawByteRange=String(1+r.end-r.start)+"@"+String(r.start))}),a.initSegment.rawByteRange=String(r.moovEndOffset)+"@0"}}},{key:"_handleManifestParsingError",value:function(e,t,r,i){this.hls.trigger(a.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.MANIFEST_PARSING_ERROR,fatal:!0,url:e.url,reason:r,networkDetails:i})}},{key:"_handleNetworkError",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;s.logger.info("A network error occured while loading a "+e.type+"-type playlist");var n=void 0,l=void 0,u=this.getInternalLoader(e);switch(e.type){case c.MANIFEST:n=r?o.ErrorDetails.MANIFEST_LOAD_TIMEOUT:o.ErrorDetails.MANIFEST_LOAD_ERROR,l=!0;break;case c.LEVEL:n=r?o.ErrorDetails.LEVEL_LOAD_TIMEOUT:o.ErrorDetails.LEVEL_LOAD_ERROR,l=!1;break;case c.AUDIO_TRACK:n=r?o.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,l=!1;break;default:l=!1}u&&(u.abort(),this.resetInternalLoader(e.type));var d={type:o.ErrorTypes.NETWORK_ERROR,details:n,fatal:l,url:u.url,loader:u,context:e,networkDetails:t};i&&(d.response=i),this.hls.trigger(a.default.ERROR,d)}},{key:"_handlePlaylistLoaded",value:function(e,r,i,n){var o=i.type,s=i.level,l=i.id,u=i.levelDetails;if(u.targetduration)if(t.canHaveQualityLevels(i.type))this.hls.trigger(a.default.LEVEL_LOADED,{details:u,level:s||0,id:l||0,stats:r,networkDetails:n});else switch(o){case c.AUDIO_TRACK:this.hls.trigger(a.default.AUDIO_TRACK_LOADED,{details:u,id:l,stats:r,networkDetails:n});break;case c.SUBTITLE_TRACK:this.hls.trigger(a.default.SUBTITLE_TRACK_LOADED,{details:u,id:l,stats:r,networkDetails:n})}else this._handleManifestParsingError(e,i,"invalid target duration",n)}}],[{key:"canHaveQualityLevels",value:function(e){return e!==c.AUDIO_TRACK&&e!==c.SUBTITLE_TRACK}},{key:"mapContextToLevelType",value:function(e){switch(e.type){case c.AUDIO_TRACK:return h.AUDIO;case c.SUBTITLE_TRACK:return h.SUBTITLE;default:return h.MAIN}}},{key:"getResponseUrl",value:function(e,t){var r=e.url;return void 0!==r&&0!==r.indexOf("data:")||(r=t.url),r}},{key:"ContextType",get:function(){return c}},{key:"LevelType",get:function(){return h}}]),t}();t.default=v,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={getBrowserVersion:function(){var e=navigator.userAgent;if(e.toLowerCase().indexOf("mobile")>-1)return"Unknown";if(e.indexOf("Firefox")>-1)return"Firefox "+e.match(/firefox\/[\d.]+/gi)[0].match(/[\d]+/)[0];if(e.indexOf("Edge")>-1)return"Edge "+e.match(/edge\/[\d.]+/gi)[0].match(/[\d]+/)[0];if(e.indexOf("rv:11")>-1)return"IE 11";if(e.indexOf("Opera")>-1||e.indexOf("OPR")>-1){if(e.indexOf("Opera")>-1)return"Opera "+e.match(/opera\/[\d.]+/gi)[0].match(/[\d]+/)[0];if(e.indexOf("OPR")>-1)return"Opera "+e.match(/opr\/[\d.]+/gi)[0].match(/[\d]+/)[0]}else{if(e.indexOf("Chrome")>-1)return"Chrome "+e.match(/chrome\/[\d.]+/gi)[0].match(/[\d]+/)[0];if(e.indexOf("Safari")>-1)return"Safari "+e.match(/safari\/[\d.]+/gi)[0].match(/[\d]+/)[0];if(!(e.indexOf("MSIE")>-1||e.indexOf("Trident")>-1))return"Unknown";if(e.indexOf("MSIE")>-1)return"IE "+e.match(/msie [\d.]+/gi)[0].match(/[\d]+/)[0];if(e.indexOf("Trident")>-1){var t=e.match(/trident\/[\d.]+/gi)[0].match(/[\d]+/)[0];return"IE "+(parseInt(t)+4)}}}};t.default=i,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="undefined"!=typeof window&&window.navigator&&window.navigator.requestMediaKeySystemAccess?window.navigator.requestMediaKeySystemAccess.bind(window.navigator):null;t.requestMediaKeySystemAccess=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=l(r(3)),n=l(r(1)),o=r(2),s=r(0);function l(e){return e&&e.__esModule?e:{default:e}}var u=window.XMLHttpRequest,d="com.widevine.alpha",f="com.microsoft.playready",c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n.default.MEDIA_ATTACHED,n.default.MANIFEST_PARSED));return r._widevineLicenseUrl=e.config.widevineLicenseUrl,r._licenseXhrSetup=e.config.licenseXhrSetup,r._emeEnabled=e.config.emeEnabled,r._requestMediaKeySystemAccess=e.config.requestMediaKeySystemAccessFunc,r._mediaKeysList=[],r._media=null,r._hasSetMediaKeys=!1,r._isMediaEncrypted=!1,r._requestLicenseFailureCount=0,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),i(t,[{key:"getLicenseServerUrl",value:function(e){var t=void 0;switch(e){case d:t=this._widevineLicenseUrl;break;default:t=null}return t||(s.logger.error('No license server URL configured for key-system "'+e+'"'),this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0})),t}},{key:"_attemptKeySystemAccess",value:function(e,t,r){var i=this,a=function(e,t,r){switch(e){case d:return function(e,t,r){var i={videoCapabilities:[]};return t.forEach(function(e){i.videoCapabilities.push({contentType:'video/mp4; codecs="'+e+'"'})}),[i]}(0,r);default:throw Error("Unknown key-system: "+e)}}(e,0,r);a?(s.logger.log("Requesting encrypted media key-system access"),this.requestMediaKeySystemAccess(e,a).then(function(t){i._onMediaKeySystemAccessObtained(e,t)}).catch(function(t){s.logger.error('Failed to obtain key-system "'+e+'" access:',t)})):s.logger.warn("Can not create config for key-system (maybe because platform is not supported):",e)}},{key:"_onMediaKeySystemAccessObtained",value:function(e,t){var r=this;s.logger.log('Access for key-system "'+e+'" obtained');var i={mediaKeys:null,mediaKeysSession:null,mediaKeysSessionInitialized:!1,mediaKeySystemAccess:t,mediaKeySystemDomain:e};this._mediaKeysList.push(i),t.createMediaKeys().then(function(t){i.mediaKeys=t,s.logger.log('Media-keys created for key-system "'+e+'"'),r._onMediaKeysCreated()}).catch(function(e){s.logger.error("Failed to create media-keys:",e)})}},{key:"_onMediaKeysCreated",value:function(){var e=this;this._mediaKeysList.forEach(function(t){t.mediaKeysSession||(t.mediaKeysSession=t.mediaKeys.createSession(),e._onNewMediaKeySession(t.mediaKeysSession))})}},{key:"_onNewMediaKeySession",value:function(e){var t=this;s.logger.log("New key-system session "+e.sessionId),e.addEventListener("message",function(r){t._onKeySessionMessage(e,r.message)},!1)}},{key:"_onKeySessionMessage",value:function(e,t){s.logger.log("Got EME message event, creating license request"),this._requestLicense(t,function(t){s.logger.log("Received license data, updating key-session"),e.update(t)})}},{key:"_onMediaEncrypted",value:function(e,t){s.logger.log('Media is encrypted using "'+e+'" init data type'),this._isMediaEncrypted=!0,this._mediaEncryptionInitDataType=e,this._mediaEncryptionInitData=t,this._attemptSetMediaKeys(),this._generateRequestWithPreferredKeySession()}},{key:"_attemptSetMediaKeys",value:function(){if(!this._hasSetMediaKeys){var e=this._mediaKeysList[0];if(!e||!e.mediaKeys)return s.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),void this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_NO_KEYS,fatal:!0});s.logger.log("Setting keys for encrypted media"),this._media.setMediaKeys(e.mediaKeys),this._hasSetMediaKeys=!0}}},{key:"_generateRequestWithPreferredKeySession",value:function(){var e=this,t=this._mediaKeysList[0];if(!t)return s.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),void this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,fatal:!0});if(t.mediaKeysSessionInitialized)s.logger.warn("Key-Session already initialized but requested again");else{var r=t.mediaKeysSession;r||(s.logger.error("Fatal: Media is encrypted but no key-session existing"),this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_NO_SESSION,fatal:!0}));var i=this._mediaEncryptionInitDataType,a=this._mediaEncryptionInitData;s.logger.log('Generating key-session request for "'+i+'" init data type'),t.mediaKeysSessionInitialized=!0,r.generateRequest(i,a).then(function(){s.logger.debug("Key-session generation succeeded")}).catch(function(t){s.logger.error("Error generating key-session request:",t),e.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_NO_SESSION,fatal:!1})})}}},{key:"_createLicenseXhr",value:function(e,t,r){var i=new u,a=this._licenseXhrSetup;try{if(a)try{a(i,e)}catch(t){i.open("POST",e,!0),a(i,e)}i.readyState||i.open("POST",e,!0)}catch(e){return s.logger.error("Error setting up key-system license XHR",e),void this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0})}return i.responseType="arraybuffer",i.onreadystatechange=this._onLicenseRequestReadyStageChange.bind(this,i,e,t,r),i}},{key:"_onLicenseRequestReadyStageChange",value:function(e,t,r,i){switch(e.readyState){case 4:if(200===e.status)this._requestLicenseFailureCount=0,s.logger.log("License request succeeded"),i(e.response);else{if(s.logger.error("License Request XHR failed ("+t+"). Status: "+e.status+" ("+e.statusText+")"),this._requestLicenseFailureCount++,this._requestLicenseFailureCount<=3){var a=3-this._requestLicenseFailureCount+1;return s.logger.warn("Retrying license request, "+a+" attempts left"),void this._requestLicense(r,i)}this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0})}}}},{key:"_generateLicenseRequestChallenge",value:function(e,t){var r=void 0;return e.mediaKeySystemDomain===f?s.logger.error("PlayReady is not supported (yet)"):e.mediaKeySystemDomain===d?r=t:s.logger.error("Unsupported key-system:",e.mediaKeySystemDomain),r}},{key:"_requestLicense",value:function(e,t){s.logger.log("Requesting content license for key-system");var r=this._mediaKeysList[0];if(!r)return s.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),void this.hls.trigger(n.default.ERROR,{type:o.ErrorTypes.KEY_SYSTEM_ERROR,details:o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,fatal:!0});var i=this.getLicenseServerUrl(r.mediaKeySystemDomain),a=this._createLicenseXhr(i,e,t);s.logger.log("Sending license request to URL: "+i),a.send(this._generateLicenseRequestChallenge(r,e))}},{key:"onMediaAttached",value:function(e){var t=this;if(this._emeEnabled){var r=e.media;this._media=r,r.addEventListener("encrypted",function(e){t._onMediaEncrypted(e.initDataType,e.initData)})}}},{key:"onManifestParsed",value:function(e){if(this._emeEnabled){var t=e.levels.map(function(e){return e.audioCodec}),r=e.levels.map(function(e){return e.videoCodec});this._attemptKeySystemAccess(d,t,r)}}},{key:"requestMediaKeySystemAccess",get:function(){if(!this._requestMediaKeySystemAccess)throw new Error("No requestMediaKeySystemAccess function configured");return this._requestMediaKeySystemAccess}}]),t}();t.default=c,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SubtitleStreamController=void 0;var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=h(r(1)),n=r(0),o=h(r(13)),s=r(4),l=r(18),u=r(6),d=r(11),f=h(d),c=r(5);function h(e){return e&&e.__esModule?e:{default:e}}var v=window.performance;t.SubtitleStreamController=function(e){function t(e,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a.default.MEDIA_ATTACHED,a.default.MEDIA_DETACHING,a.default.ERROR,a.default.KEY_LOADED,a.default.FRAG_LOADED,a.default.SUBTITLE_TRACKS_UPDATED,a.default.SUBTITLE_TRACK_SWITCH,a.default.SUBTITLE_TRACK_LOADED,a.default.SUBTITLE_FRAG_PROCESSED,a.default.LEVEL_UPDATED));return i.fragmentTracker=r,i.config=e.config,i.state=d.State.STOPPED,i.tracks=[],i.tracksBuffered=[],i.currentTrackId=-1,i.decrypter=new o.default(e,e.config),i.lastAVStart=0,i._onMediaSeeking=i.onMediaSeeking.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,f.default),i(t,[{key:"onSubtitleFragProcessed",value:function(e){var t=e.frag,r=e.success;if(this.fragPrevious=t,this.state=d.State.IDLE,r){var i=this.tracksBuffered[this.currentTrackId];if(i){for(var a=void 0,n=t.start,o=0;o<i.length;o++)if(n>=i[o].start&&n<=i[o].end){a=i[o];break}var s=t.start+t.duration;a?a.end=s:(a={start:n,end:s},i.push(a))}}}},{key:"onMediaAttached",value:function(e){var t=e.media;this.media=t,t.addEventListener("seeking",this._onMediaSeeking),this.state=d.State.IDLE}},{key:"onMediaDetaching",value:function(){this.media.removeEventListener("seeking",this._onMediaSeeking),this.media=null,this.state=d.State.STOPPED}},{key:"onError",value:function(e){var t=e.frag;t&&"subtitle"===t.type&&(this.state=d.State.IDLE)}},{key:"onSubtitleTracksUpdated",value:function(e){var t=this;n.logger.log("subtitle tracks updated"),this.tracksBuffered=[],this.tracks=e.subtitleTracks,this.tracks.forEach(function(e){t.tracksBuffered[e.id]=[]})}},{key:"onSubtitleTrackSwitch",value:function(e){if(this.currentTrackId=e.id,this.tracks&&-1!==this.currentTrackId){var t=this.tracks[this.currentTrackId];t&&t.details&&this.setInterval(500)}else this.clearInterval()}},{key:"onSubtitleTrackLoaded",value:function(e){var t=e.id,r=e.details,i=this.currentTrackId,a=this.tracks,n=a[i];t>=a.length||t!==i||!n||(r.live&&(0,c.mergeSubtitlePlaylists)(n.details,r,this.lastAVStart),n.details=r,this.setInterval(500))}},{key:"onKeyLoaded",value:function(){this.state===d.State.KEY_LOADING&&(this.state=d.State.IDLE)}},{key:"onFragLoaded",value:function(e){var t=this.fragCurrent,r=e.frag.decryptdata,i=e.frag,n=this.hls;if(this.state===d.State.FRAG_LOADING&&t&&"subtitle"===e.frag.type&&t.sn===e.frag.sn&&e.payload.byteLength>0&&r&&r.key&&"AES-128"===r.method){var o=v.now();this.decrypter.decrypt(e.payload,r.key.buffer,r.iv.buffer,function(e){var t=v.now();n.trigger(a.default.FRAG_DECRYPTED,{frag:i,payload:e,stats:{tstart:o,tdecrypt:t}})})}}},{key:"onLevelUpdated",value:function(e){var t=e.details.fragments;this.lastAVStart=t.length?t[0].start:0}},{key:"doTick",value:function(){if(this.media)switch(this.state){case d.State.IDLE:var e=this.config,t=this.currentTrackId,r=this.fragmentTracker,i=this.media,o=this.tracks;if(!o||!o[t]||!o[t].details)break;var f=e.maxBufferHole,c=e.maxFragLookUpTolerance,h=Math.min(e.maxBufferLength,e.maxMaxBufferLength),v=s.BufferHelper.bufferedInfo(this._getBuffered(),i.currentTime,f),g=v.end,p=v.len,y=o[t].details,m=y.fragments,b=m.length,E=m[b-1].start+m[b-1].duration;if(p>h)return;var _=void 0,T=this.fragPrevious;g<E?(T&&y.hasProgramDateTime&&(_=(0,l.findFragmentByPDT)(m,T.endProgramDateTime,c)),_||(_=(0,l.findFragmentByPTS)(T,m,g,c))):_=m[b-1],_&&_.encrypted?(n.logger.log("Loading key for "+_.sn),this.state=d.State.KEY_LOADING,this.hls.trigger(a.default.KEY_LOADING,{frag:_})):_&&r.getState(_)===u.FragmentState.NOT_LOADED&&(this.fragCurrent=_,this.state=d.State.FRAG_LOADING,this.hls.trigger(a.default.FRAG_LOADING,{frag:_}))}else this.state=d.State.IDLE}},{key:"stopLoad",value:function(){this.lastAVStart=0,function e(t,r,i){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,r,i)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(i):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"stopLoad",this).call(this)}},{key:"_getBuffered",value:function(){return this.tracksBuffered[this.currentTrackId]||[]}},{key:"onMediaSeeking",value:function(){this.fragPrevious=null}}]),t}()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=l(r(1)),n=l(r(3)),o=r(0),s=r(5);function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a.default.MEDIA_ATTACHED,a.default.MEDIA_DETACHING,a.default.MANIFEST_LOADED,a.default.SUBTITLE_TRACK_LOADED));return r.tracks=[],r.trackId=-1,r.media=null,r.stopped=!0,r.subtitleDisplay=!0,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),i(t,[{key:"destroy",value:function(){n.default.prototype.destroy.call(this)}},{key:"onMediaAttached",value:function(e){var t=this;this.media=e.media,this.media&&(this.queuedDefaultTrack&&(this.subtitleTrack=this.queuedDefaultTrack,delete this.queuedDefaultTrack),this.trackChangeListener=this._onTextTracksChanged.bind(this),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.subtitlePollingInterval=setInterval(function(){t.trackChangeListener()},500):this.media.textTracks.addEventListener("change",this.trackChangeListener))}},{key:"onMediaDetaching",value:function(){this.media&&(this.useTextTrackPolling?clearInterval(this.subtitlePollingInterval):this.media.textTracks.removeEventListener("change",this.trackChangeListener),this.media=null)}},{key:"onManifestLoaded",value:function(e){var t=this,r=e.subtitles||[];this.tracks=r,this.hls.trigger(a.default.SUBTITLE_TRACKS_UPDATED,{subtitleTracks:r}),r.forEach(function(e){e.default&&(t.media?t.subtitleTrack=e.id:t.queuedDefaultTrack=e.id)})}},{key:"onSubtitleTrackLoaded",value:function(e){var t=this,r=e.id,i=e.details,a=this.trackId,n=this.tracks,l=n[a];if(r>=n.length||r!==a||!l||this.stopped)this._clearReloadTimer();else if(o.logger.log("subtitle track "+r+" loaded"),i.live){var u=(0,s.computeReloadInterval)(l.details,i,e.stats.trequest);o.logger.log("Reloading live subtitle playlist in "+u+"ms"),this.timer=setTimeout(function(){t._loadCurrentTrack()},u)}else this._clearReloadTimer()}},{key:"startLoad",value:function(){this.stopped=!1,this._loadCurrentTrack()}},{key:"stopLoad",value:function(){this.stopped=!0,this._clearReloadTimer()}},{key:"_clearReloadTimer",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null)}},{key:"_loadCurrentTrack",value:function(){var e=this.trackId,t=this.tracks,r=this.hls,i=t[e];e<0||!i||i.details&&!i.details.live||(o.logger.log("Loading subtitle track "+e),r.trigger(a.default.SUBTITLE_TRACK_LOADING,{url:i.url,id:e}))}},{key:"_toggleTrackModes",value:function(e){var t=this.media,r=this.subtitleDisplay,i=this.trackId;if(t){var a=d(t.textTracks);if(-1===e)[].slice.call(a).forEach(function(e){e.mode="disabled"});else{var n=a[i];n&&(n.mode="disabled")}var o=a[e];o&&(o.mode=r?"showing":"hidden")}}},{key:"_setSubtitleTrackInternal",value:function(e){var t=this.hls,r=this.tracks;!Number.isFinite(e)||e<-1||e>=r.length||(this.trackId=e,o.logger.log("Switching to subtitle track "+e),t.trigger(a.default.SUBTITLE_TRACK_SWITCH,{id:e}),this._loadCurrentTrack())}},{key:"_onTextTracksChanged",value:function(){if(this.media){for(var e=-1,t=d(this.media.textTracks),r=0;r<t.length;r++)if("hidden"===t[r].mode)e=r;else if("showing"===t[r].mode){e=r;break}this.subtitleTrack=e}}},{key:"subtitleTracks",get:function(){return this.tracks}},{key:"subtitleTrack",get:function(){return this.trackId},set:function(e){this.trackId!==e&&(this._toggleTrackModes(e),this._setSubtitleTrackInternal(e))}}]),t}();function d(e){for(var t=[],r=0;r<e.length;r++){var i=e[r];"subtitles"===i.kind&&i.label&&t.push(e[r])}return t}t.default=u,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(r(15)),a=r(8);var n=function(e,t,r){return e.substr(r||0,t.length)===t},o=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return(t>>>0).toString()},s={parse:function(e,t,r,s,l,u){var d=(0,a.utf8ArrayToStr)(new Uint8Array(e)).trim().replace(/\r\n|\n\r|\n|\r/g,"\n").split("\n"),f="00:00.000",c=0,h=0,v=0,g=[],p=void 0,y=!0,m=new i.default;m.oncue=function(e){var t=r[s],i=r.ccOffset;t&&t.new&&(void 0!==h?i=r.ccOffset=t.start:function(e,t,r){var i=e[t],a=e[i.prevCC];if(!a||!a.new&&i.new)return e.ccOffset=e.presentationOffset=i.start,void(i.new=!1);for(;a&&a.new;)e.ccOffset+=i.start-a.start,i.new=!1,a=e[(i=a).prevCC];e.presentationOffset=r}(r,s,v)),v&&(i=v-r.presentationOffset),e.startTime+=i-h,e.endTime+=i-h,e.id=o(e.startTime.toString())+o(e.endTime.toString())+o(e.text),e.text=decodeURIComponent(encodeURIComponent(e.text)),e.endTime>0&&g.push(e)},m.onparsingerror=function(e){p=e},m.onflush=function(){p&&u?u(p):l(g)},d.forEach(function(e){if(y){if(n(e,"X-TIMESTAMP-MAP=")){y=!1,e.substr(16).split(",").forEach(function(e){n(e,"LOCAL:")?f=e.substr(6):n(e,"MPEGTS:")&&(c=parseInt(e.substr(7)))});try{t+(9e4*r[s].start||0)<0&&(t+=8589934592),c-=t,h=function(e){var t=parseInt(e.substr(-3)),r=parseInt(e.substr(-6,2)),i=parseInt(e.substr(-9,2)),a=e.length>9?parseInt(e.substr(0,e.indexOf(":"))):0;return Number.isFinite(t)&&Number.isFinite(r)&&Number.isFinite(i)&&Number.isFinite(a)?(t+=1e3*r,t+=6e4*i,t+=36e5*a):-1}(f)/1e3,v=c/9e4,-1===h&&(p=new Error("Malformed X-TIMESTAMP-MAP: "+e))}catch(t){p=new Error("Malformed X-TIMESTAMP-MAP: "+e)}return}""===e&&(y=!1)}m.parse(e+"\n")}),m.flush()}};t.default=s,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();var a=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.timelineController=t,this.trackName=r,this.startTime=null,this.endTime=null,this.screen=null}return i(e,[{key:"dispatchCue",value:function(){null!==this.startTime&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen),this.startTime=null)}},{key:"newCue",value:function(e,t,r){(null===this.startTime||this.startTime>e)&&(this.startTime=e),this.endTime=t,this.screen=r,this.timelineController.createCaptionsTrack(this.trackName)}}]),e}();t.default=a,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},o=function(e){var t=e;return n.hasOwnProperty(e)&&(t=n[e]),String.fromCharCode(t)},s=15,l=100,u={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},d={17:2,18:4,21:6,22:8,23:10,19:13,20:15},f={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},c={25:2,26:4,29:6,30:8,31:10,27:13,28:15},h=["white","green","blue","cyan","red","yellow","magenta","black","transparent"],v={verboseFilter:{DATA:3,DEBUG:3,INFO:2,WARNING:2,TEXT:1,ERROR:0},time:null,verboseLevel:0,setTime:function(e){this.time=e},log:function(e,t){this.verboseFilter[e];this.verboseLevel}},g=function(e){for(var t=[],r=0;r<e.length;r++)t.push(e[r].toString(16));return t},p=function(){function e(t,r,i,n,o){a(this,e),this.foreground=t||"white",this.underline=r||!1,this.italics=i||!1,this.background=n||"black",this.flash=o||!1}return i(e,[{key:"reset",value:function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}},{key:"setStyles",value:function(e){for(var t=["foreground","underline","italics","background","flash"],r=0;r<t.length;r++){var i=t[r];e.hasOwnProperty(i)&&(this[i]=e[i])}}},{key:"isDefault",value:function(){return"white"===this.foreground&&!this.underline&&!this.italics&&"black"===this.background&&!this.flash}},{key:"equals",value:function(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash}},{key:"copy",value:function(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash}},{key:"toString",value:function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash}}]),e}(),y=function(){function e(t,r,i,n,o,s){a(this,e),this.uchar=t||" ",this.penState=new p(r,i,n,o,s)}return i(e,[{key:"reset",value:function(){this.uchar=" ",this.penState.reset()}},{key:"setChar",value:function(e,t){this.uchar=e,this.penState.copy(t)}},{key:"setPenState",value:function(e){this.penState.copy(e)}},{key:"equals",value:function(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)}},{key:"copy",value:function(e){this.uchar=e.uchar,this.penState.copy(e.penState)}},{key:"isEmpty",value:function(){return" "===this.uchar&&this.penState.isDefault()}}]),e}(),m=function(){function e(){a(this,e),this.chars=[];for(var t=0;t<l;t++)this.chars.push(new y);this.pos=0,this.currPenState=new p}return i(e,[{key:"equals",value:function(e){for(var t=!0,r=0;r<l;r++)if(!this.chars[r].equals(e.chars[r])){t=!1;break}return t}},{key:"copy",value:function(e){for(var t=0;t<l;t++)this.chars[t].copy(e.chars[t])}},{key:"isEmpty",value:function(){for(var e=!0,t=0;t<l;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e}},{key:"setCursor",value:function(e){this.pos!==e&&(this.pos=e),this.pos<0?(v.log("ERROR","Negative cursor position "+this.pos),this.pos=0):this.pos>l&&(v.log("ERROR","Too large cursor position "+this.pos),this.pos=l)}},{key:"moveCursor",value:function(e){var t=this.pos+e;if(e>1)for(var r=this.pos+1;r<t+1;r++)this.chars[r].setPenState(this.currPenState);this.setCursor(t)}},{key:"backSpace",value:function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)}},{key:"insertChar",value:function(e){e>=144&&this.backSpace();var t=o(e);this.pos>=l?v.log("ERROR","Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!"):(this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1))}},{key:"clearFromPos",value:function(e){var t=void 0;for(t=e;t<l;t++)this.chars[t].reset()}},{key:"clear",value:function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()}},{key:"clearToEndOfRow",value:function(){this.clearFromPos(this.pos)}},{key:"getTextString",value:function(){for(var e=[],t=!0,r=0;r<l;r++){var i=this.chars[r].uchar;" "!==i&&(t=!1),e.push(i)}return t?"":e.join("")}},{key:"setPenStyles",value:function(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)}}]),e}(),b=function(){function e(){a(this,e),this.rows=[];for(var t=0;t<s;t++)this.rows.push(new m);this.currRow=s-1,this.nrRollUpRows=null,this.reset()}return i(e,[{key:"reset",value:function(){for(var e=0;e<s;e++)this.rows[e].clear();this.currRow=s-1}},{key:"equals",value:function(e){for(var t=!0,r=0;r<s;r++)if(!this.rows[r].equals(e.rows[r])){t=!1;break}return t}},{key:"copy",value:function(e){for(var t=0;t<s;t++)this.rows[t].copy(e.rows[t])}},{key:"isEmpty",value:function(){for(var e=!0,t=0;t<s;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e}},{key:"backSpace",value:function(){this.rows[this.currRow].backSpace()}},{key:"clearToEndOfRow",value:function(){this.rows[this.currRow].clearToEndOfRow()}},{key:"insertChar",value:function(e){this.rows[this.currRow].insertChar(e)}},{key:"setPen",value:function(e){this.rows[this.currRow].setPenStyles(e)}},{key:"moveCursor",value:function(e){this.rows[this.currRow].moveCursor(e)}},{key:"setCursor",value:function(e){v.log("INFO","setCursor: "+e),this.rows[this.currRow].setCursor(e)}},{key:"setPAC",value:function(e){v.log("INFO","pacData = "+JSON.stringify(e));var t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(var r=0;r<s;r++)this.rows[r].clear();var i=this.currRow+1-this.nrRollUpRows,a=this.lastOutputScreen;if(a){var n=a.rows[i].cueStartTime;if(n&&n<v.time)for(var o=0;o<this.nrRollUpRows;o++)this.rows[t-this.nrRollUpRows+o+1].copy(a.rows[i+o])}}this.currRow=t;var l=this.rows[this.currRow];if(null!==e.indent){var u=e.indent,d=Math.max(u-1,0);l.setCursor(e.indent),e.color=l.chars[d].penState.foreground}var f={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(f)}},{key:"setBkgData",value:function(e){v.log("INFO","bkgData = "+JSON.stringify(e)),this.backSpace(),this.setPen(e),this.insertChar(32)}},{key:"setRollUpRows",value:function(e){this.nrRollUpRows=e}},{key:"rollUp",value:function(){if(null!==this.nrRollUpRows){v.log("TEXT",this.getDisplayText());var e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),v.log("INFO","Rolling up")}else v.log("DEBUG","roll_up but nrRollUpRows not set yet")}},{key:"getDisplayText",value:function(e){e=e||!1;for(var t=[],r="",i=-1,a=0;a<s;a++){var n=this.rows[a].getTextString();n&&(i=a+1,e?t.push("Row "+i+": '"+n+"'"):t.push(n.trim()))}return t.length>0&&(r=e?"["+t.join(" | ")+"]":t.join("\n")),r}},{key:"getTextAndFormat",value:function(){return this.rows}}]),e}(),E=function(){function e(t,r){a(this,e),this.chNr=t,this.outputFilter=r,this.mode=null,this.verbose=0,this.displayedMemory=new b,this.nonDisplayedMemory=new b,this.lastOutputScreen=new b,this.currRollUpRow=this.displayedMemory.rows[s-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}return i(e,[{key:"reset",value:function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.currRollUpRow=this.displayedMemory.rows[s-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.lastCueEndTime=null}},{key:"getHandler",value:function(){return this.outputFilter}},{key:"setHandler",value:function(e){this.outputFilter=e}},{key:"setPAC",value:function(e){this.writeScreen.setPAC(e)}},{key:"setBkgData",value:function(e){this.writeScreen.setBkgData(e)}},{key:"setMode",value:function(e){e!==this.mode&&(this.mode=e,v.log("INFO","MODE="+e),"MODE_POP-ON"===this.mode?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),"MODE_ROLL-UP"!==this.mode&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)}},{key:"insertChars",value:function(e){for(var t=0;t<e.length;t++)this.writeScreen.insertChar(e[t]);var r=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";v.log("INFO",r+": "+this.writeScreen.getDisplayText(!0)),"MODE_PAINT-ON"!==this.mode&&"MODE_ROLL-UP"!==this.mode||(v.log("TEXT","DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())}},{key:"ccRCL",value:function(){v.log("INFO","RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")}},{key:"ccBS",value:function(){v.log("INFO","BS - BackSpace"),"MODE_TEXT"!==this.mode&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())}},{key:"ccAOF",value:function(){}},{key:"ccAON",value:function(){}},{key:"ccDER",value:function(){v.log("INFO","DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()}},{key:"ccRU",value:function(e){v.log("INFO","RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)}},{key:"ccFON",value:function(){v.log("INFO","FON - Flash On"),this.writeScreen.setPen({flash:!0})}},{key:"ccRDC",value:function(){v.log("INFO","RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")}},{key:"ccTR",value:function(){v.log("INFO","TR"),this.setMode("MODE_TEXT")}},{key:"ccRTD",value:function(){v.log("INFO","RTD"),this.setMode("MODE_TEXT")}},{key:"ccEDM",value:function(){v.log("INFO","EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)}},{key:"ccCR",value:function(){v.log("CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)}},{key:"ccENM",value:function(){v.log("INFO","ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()}},{key:"ccEOC",value:function(){if(v.log("INFO","EOC - End Of Caption"),"MODE_POP-ON"===this.mode){var e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,v.log("TEXT","DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)}},{key:"ccTO",value:function(e){v.log("INFO","TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)}},{key:"ccMIDROW",value:function(e){var t={flash:!1};if(t.underline=e%2==1,t.italics=e>=46,t.italics)t.foreground="white";else{var r=Math.floor(e/2)-16;t.foreground=["white","green","blue","cyan","red","yellow","magenta"][r]}v.log("INFO","MIDROW: "+JSON.stringify(t)),this.writeScreen.setPen(t)}},{key:"outputDataUpdate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=v.time;null!==t&&this.outputFilter&&(null!==this.cueStartTime||this.displayedMemory.isEmpty()?this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue&&(this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),!0===e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue()),this.cueStartTime=this.displayedMemory.isEmpty()?null:t):this.cueStartTime=t,this.lastOutputScreen.copy(this.displayedMemory))}},{key:"cueSplitAtTime",value:function(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))}}]),e}(),_=function(){function e(t,r,i){a(this,e),this.field=t||1,this.outputs=[r,i],this.channels=[new E(1,r),new E(2,i)],this.currChNr=-1,this.lastCmdA=null,this.lastCmdB=null,this.bufferedData=[],this.startTime=null,this.lastTime=null,this.dataCounters={padding:0,char:0,cmd:0,other:0}}return i(e,[{key:"getHandler",value:function(e){return this.channels[e].getHandler()}},{key:"setHandler",value:function(e,t){this.channels[e].setHandler(t)}},{key:"addData",value:function(e,t){var r=void 0,i=void 0,a=void 0,n=!1;this.lastTime=e,v.setTime(e);for(var o=0;o<t.length;o+=2)if(i=127&t[o],a=127&t[o+1],0!==i||0!==a){if(v.log("DATA","["+g([t[o],t[o+1]])+"] -> ("+g([i,a])+")"),(r=this.parseCmd(i,a))||(r=this.parseMidrow(i,a)),r||(r=this.parsePAC(i,a)),r||(r=this.parseBackgroundAttributes(i,a)),!r)if(n=this.parseChars(i,a))if(this.currChNr&&this.currChNr>=0)this.channels[this.currChNr-1].insertChars(n);else v.log("WARNING","No channel found yet. TEXT-MODE?");r?this.dataCounters.cmd+=2:n?this.dataCounters.char+=2:(this.dataCounters.other+=2,v.log("WARNING","Couldn't parse cleaned data "+g([i,a])+" orig: "+g([t[o],t[o+1]])))}else this.dataCounters.padding+=2}},{key:"parseCmd",value:function(e,t){var r=null;if(!((20===e||28===e)&&t>=32&&t<=47)&&!((23===e||31===e)&&t>=33&&t<=35))return!1;if(e===this.lastCmdA&&t===this.lastCmdB)return this.lastCmdA=null,this.lastCmdB=null,v.log("DEBUG","Repeated command ("+g([e,t])+") is dropped"),!0;r=20===e||23===e?1:2;var i=this.channels[r-1];return 20===e||28===e?32===t?i.ccRCL():33===t?i.ccBS():34===t?i.ccAOF():35===t?i.ccAON():36===t?i.ccDER():37===t?i.ccRU(2):38===t?i.ccRU(3):39===t?i.ccRU(4):40===t?i.ccFON():41===t?i.ccRDC():42===t?i.ccTR():43===t?i.ccRTD():44===t?i.ccEDM():45===t?i.ccCR():46===t?i.ccENM():47===t&&i.ccEOC():i.ccTO(t-32),this.lastCmdA=e,this.lastCmdB=t,this.currChNr=r,!0}},{key:"parseMidrow",value:function(e,t){var r=null;return(17===e||25===e)&&t>=32&&t<=47&&((r=17===e?1:2)!==this.currChNr?(v.log("ERROR","Mismatch channel in midrow parsing"),!1):(this.channels[r-1].ccMIDROW(t),v.log("DEBUG","MIDROW ("+g([e,t])+")"),!0))}},{key:"parsePAC",value:function(e,t){var r,i=null;if(!((e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127)&&!((16===e||24===e)&&t>=64&&t<=95))return!1;if(e===this.lastCmdA&&t===this.lastCmdB)return this.lastCmdA=null,this.lastCmdB=null,!0;r=e<=23?1:2,i=t>=64&&t<=95?1===r?u[e]:f[e]:1===r?d[e]:c[e];var a=this.interpretPAC(i,t);return this.channels[r-1].setPAC(a),this.lastCmdA=e,this.lastCmdB=t,this.currChNr=r,!0}},{key:"interpretPAC",value:function(e,t){var r=t,i={color:null,italics:!1,indent:null,underline:!1,row:e};return r=t>95?t-96:t-64,i.underline=1==(1&r),r<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(r/2)]:r<=15?(i.italics=!0,i.color="white"):i.indent=4*Math.floor((r-16)/2),i}},{key:"parseChars",value:function(e,t){var r=null,i=null,a=null;if(e>=25?(r=2,a=e-8):(r=1,a=e),a>=17&&a<=19){var n=t;n=17===a?t+80:18===a?t+112:t+144,v.log("INFO","Special char '"+o(n)+"' in channel "+r),i=[n]}else e>=32&&e<=127&&(i=0===t?[e]:[e,t]);if(i){var s=g(i);v.log("DEBUG","Char codes =  "+s.join(",")),this.lastCmdA=null,this.lastCmdB=null}return i}},{key:"parseBackgroundAttributes",value:function(e,t){var r,i=void 0,a=void 0;return((16===e||24===e)&&t>=32&&t<=47||(23===e||31===e)&&t>=45&&t<=47)&&(i={},16===e||24===e?(a=Math.floor((t-32)/2),i.background=h[a],t%2==1&&(i.background=i.background+"_semi")):45===t?i.background="transparent":(i.foreground="black",47===t&&(i.underline=!0)),r=e<24?1:2,this.channels[r-1].setBkgData(i),this.lastCmdA=null,this.lastCmdB=null,!0)}},{key:"reset",value:function(){for(var e=0;e<this.channels.length;e++)this.channels[e]&&this.channels[e].reset();this.lastCmdA=null,this.lastCmdB=null}},{key:"cueSplitAtTime",value:function(e){for(var t=0;t<this.channels.length;t++)this.channels[t]&&this.channels[t].cueSplitAtTime(e)}}]),e}();t.default=_,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=f(r(1)),n=f(r(3)),o=f(r(38)),s=f(r(37)),l=f(r(36)),u=r(0),d=r(16);function f(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return e&&e.label===t.name&&!(e.textTrack1||e.textTrack2)}function h(e,t,r,i){return Math.min(t,i)-Math.max(e,r)}var v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a.default.MEDIA_ATTACHING,a.default.MEDIA_DETACHING,a.default.FRAG_PARSING_USERDATA,a.default.FRAG_DECRYPTED,a.default.MANIFEST_LOADING,a.default.MANIFEST_LOADED,a.default.FRAG_LOADED,a.default.LEVEL_SWITCHING,a.default.INIT_PTS_FOUND));if(r.hls=e,r.config=e.config,r.enabled=!0,r.Cues=e.config.cueHandler,r.textTracks=[],r.tracks=[],r.unparsedVttFrags=[],r.initPTS=[],r.cueRanges=[],r.captionsTracks={},r.captionsProperties={textTrack1:{label:r.config.captionsTextTrack1Label,languageCode:r.config.captionsTextTrack1LanguageCode},textTrack2:{label:r.config.captionsTextTrack2Label,languageCode:r.config.captionsTextTrack2LanguageCode}},r.config.enableCEA708Captions){var i=new s.default(r,"textTrack1"),n=new s.default(r,"textTrack2");r.cea608Parser=new o.default(0,i,n)}return r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),i(t,[{key:"addCues",value:function(e,t,r,i){for(var a=this.cueRanges,n=!1,o=a.length;o--;){var s=a[o],l=h(s[0],s[1],t,r);if(l>=0&&(s[0]=Math.min(s[0],t),s[1]=Math.max(s[1],r),n=!0,l/(r-t)>.5))return}n||a.push([t,r]),this.Cues.newCue(this.captionsTracks[e],t,r,i)}},{key:"onInitPtsFound",value:function(e){var t=this;if("main"===e.id&&(this.initPTS[e.frag.cc]=e.initPTS),this.unparsedVttFrags.length){var r=this.unparsedVttFrags;this.unparsedVttFrags=[],r.forEach(function(e){t.onFragLoaded(e)})}}},{key:"getExistingTrack",value:function(e){var t=this.media;if(t)for(var r=0;r<t.textTracks.length;r++){var i=t.textTracks[r];if(i[e])return i}return null}},{key:"createCaptionsTrack",value:function(e){var t=this.captionsProperties[e],r=t.label,i=t.languageCode,a=this.captionsTracks;if(!a[e]){var n=this.getExistingTrack(e);if(n)a[e]=n,(0,d.clearCurrentCues)(a[e]),(0,d.sendAddTrackEvent)(a[e],this.media);else{var o=this.createTextTrack("captions",r,i);o&&(o[e]=!0,a[e]=o)}}}},{key:"createTextTrack",value:function(e,t,r){var i=this.media;if(i)return i.addTextTrack(e,t,r)}},{key:"destroy",value:function(){n.default.prototype.destroy.call(this)}},{key:"onMediaAttaching",value:function(e){this.media=e.media,this._cleanTracks()}},{key:"onMediaDetaching",value:function(){var e=this.captionsTracks;Object.keys(e).forEach(function(t){(0,d.clearCurrentCues)(e[t]),delete e[t]})}},{key:"onManifestLoading",value:function(){this.lastSn=-1,this.prevCC=-1,this.vttCCs={ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!1}},this._cleanTracks()}},{key:"_cleanTracks",value:function(){var e=this.media;if(e){var t=e.textTracks;if(t)for(var r=0;r<t.length;r++)(0,d.clearCurrentCues)(t[r])}}},{key:"onManifestLoaded",value:function(e){var t=this;if(this.textTracks=[],this.unparsedVttFrags=this.unparsedVttFrags||[],this.initPTS=[],this.cueRanges=[],this.config.enableWebVTT){this.tracks=e.subtitles||[];var r=this.media?this.media.textTracks:[];this.tracks.forEach(function(e,i){var a=void 0;if(i<r.length){for(var n=null,o=0;o<r.length;o++)if(c(r[o],e)){n=r[o];break}n&&(a=n)}a||(a=t.createTextTrack("subtitles",e.name,e.lang)),e.default?a.mode=t.hls.subtitleDisplay?"showing":"hidden":a.mode="disabled",t.textTracks.push(a)})}}},{key:"onLevelSwitching",value:function(){this.enabled="NONE"!==this.hls.currentLevel.closedCaptions}},{key:"onFragLoaded",value:function(e){var t=e.frag,r=e.payload;if("main"===t.type){var i=t.sn;if(i!==this.lastSn+1){var n=this.cea608Parser;n&&n.reset()}this.lastSn=i}else if("subtitle"===t.type)if(r.byteLength){if(!Number.isFinite(this.initPTS[t.cc]))return this.unparsedVttFrags.push(e),void(this.initPTS.length&&this.hls.trigger(a.default.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t}));var o=t.decryptdata;null!=o&&null!=o.key&&"AES-128"===o.method||this._parseVTTs(t,r)}else this.hls.trigger(a.default.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t})}},{key:"_parseVTTs",value:function(e,t){var r=this.vttCCs;r[e.cc]||(r[e.cc]={start:e.start,prevCC:this.prevCC,new:!0},this.prevCC=e.cc);var i=this.textTracks,n=this.hls;l.default.parse(t,this.initPTS[e.cc],r,e.cc,function(t){var r=i[e.level];"disabled"!==r.mode?(t.forEach(function(e){if(!r.cues.getCueById(e.id))try{r.addCue(e)}catch(i){var t=new window.TextTrackCue(e.startTime,e.endTime,e.text);t.id=e.id,r.addCue(t)}}),n.trigger(a.default.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})):n.trigger(a.default.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e})},function(t){u.logger.log("Failed to parse VTT cue: "+t),n.trigger(a.default.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e})})}},{key:"onFragDecrypted",value:function(e){var t=e.payload,r=e.frag;if("subtitle"===r.type){if(!Number.isFinite(this.initPTS[r.cc]))return void this.unparsedVttFrags.push(e);this._parseVTTs(r,t)}}},{key:"onFragParsingUserdata",value:function(e){if(this.enabled&&this.config.enableCEA708Captions)for(var t=0;t<e.samples.length;t++){var r=this.extractCea608Data(e.samples[t].bytes);this.cea608Parser.addData(e.samples[t].pts,r)}}},{key:"extractCea608Data",value:function(e){for(var t=31&e[0],r=2,i=void 0,a=void 0,n=void 0,o=[],s=0;s<t;s++)i=e[r++],a=127&e[r++],n=127&e[r++],0===a&&0===n||0!=(4&i)&&0===(3&i)&&(o.push(a),o.push(n));return o}}]),t}();t.default=v,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if("undefined"!=typeof window&&window.VTTCue)return window.VTTCue;var e="auto",t={"":!0,lr:!0,rl:!0},r={start:!0,middle:!0,end:!0,left:!0,right:!0};function i(e){return"string"==typeof e&&(!!r[e.toLowerCase()]&&e.toLowerCase())}function a(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]=r[i]}return e}function n(r,n,o){var s=this,l=function(){if("undefined"!=typeof navigator)return/MSIE\s8\.0/.test(navigator.userAgent)}(),u={};l?s=document.createElement("custom"):u.enumerable=!0,s.hasBeenReset=!1;var d="",f=!1,c=r,h=n,v=o,g=null,p="",y=!0,m="auto",b="start",E=50,_="middle",T=50,S="middle";if(Object.defineProperty(s,"id",a({},u,{get:function(){return d},set:function(e){d=""+e}})),Object.defineProperty(s,"pauseOnExit",a({},u,{get:function(){return f},set:function(e){f=!!e}})),Object.defineProperty(s,"startTime",a({},u,{get:function(){return c},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");c=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"endTime",a({},u,{get:function(){return h},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");h=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"text",a({},u,{get:function(){return v},set:function(e){v=""+e,this.hasBeenReset=!0}})),Object.defineProperty(s,"region",a({},u,{get:function(){return g},set:function(e){g=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"vertical",a({},u,{get:function(){return p},set:function(e){var r=function(e){return"string"==typeof e&&!!t[e.toLowerCase()]&&e.toLowerCase()}(e);if(!1===r)throw new SyntaxError("An invalid or illegal string was specified.");p=r,this.hasBeenReset=!0}})),Object.defineProperty(s,"snapToLines",a({},u,{get:function(){return y},set:function(e){y=!!e,this.hasBeenReset=!0}})),Object.defineProperty(s,"line",a({},u,{get:function(){return m},set:function(t){if("number"!=typeof t&&t!==e)throw new SyntaxError("An invalid number or illegal string was specified.");m=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"lineAlign",a({},u,{get:function(){return b},set:function(e){var t=i(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");b=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"position",a({},u,{get:function(){return E},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.");E=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"positionAlign",a({},u,{get:function(){return _},set:function(e){var t=i(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");_=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"size",a({},u,{get:function(){return T},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.");T=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"align",a({},u,{get:function(){return S},set:function(e){var t=i(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");S=t,this.hasBeenReset=!0}})),s.displayState=void 0,l)return s}return n.prototype.getCueAsHTML=function(){return window.WebVTT.convertCueToDOMTree(window,this.text)},n}(),e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.newCue=function(e,t,r,a){for(var n=void 0,o=void 0,s=void 0,l=void 0,u=void 0,d=window.VTTCue||window.TextTrackCue,f=0;f<a.rows.length;f++)if(n=a.rows[f],s=!0,l=0,u="",!n.isEmpty()){for(var c=0;c<n.chars.length;c++)n.chars[c].uchar.match(/\s/)&&s?l++:(u+=n.chars[c].uchar,s=!1);n.cueStartTime=t,t===r&&(r+=1e-4),o=new d(t,r,(0,i.fixLineBreaks)(u.trim())),l>=16?l--:l++,navigator.userAgent.match(/Firefox\//)?o.line=f+1:o.line=f>7?f-2:f+1,o.align="left",o.position=Math.max(0,Math.min(100,l/32*100+(navigator.userAgent.match(/Firefox\//)?50:0))),e.addCue(o)}};var i=r(15)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=y(r(9)),n=r(4),o=y(r(26)),s=y(r(1)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(5)),u=y(r(20)),d=r(2),f=r(0),c=r(19),h=r(6),v=y(r(14)),g=r(11),p=y(g);function y(e){return e&&e.__esModule?e:{default:e}}var m=window.performance,b=function(e){function t(e,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,s.default.MEDIA_ATTACHED,s.default.MEDIA_DETACHING,s.default.AUDIO_TRACKS_UPDATED,s.default.AUDIO_TRACK_SWITCHING,s.default.AUDIO_TRACK_LOADED,s.default.KEY_LOADED,s.default.FRAG_LOADED,s.default.FRAG_PARSING_INIT_SEGMENT,s.default.FRAG_PARSING_DATA,s.default.FRAG_PARSED,s.default.ERROR,s.default.BUFFER_RESET,s.default.BUFFER_CREATED,s.default.BUFFER_APPENDED,s.default.BUFFER_FLUSHED,s.default.INIT_PTS_FOUND));return i.fragmentTracker=r,i.config=e.config,i.audioCodecSwap=!1,i._state=g.State.STOPPED,i.initPTS=[],i.waitingFragment=null,i.videoTrackCC=null,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,p.default),i(t,[{key:"onInitPtsFound",value:function(e){var t=e.id,r=e.frag.cc,i=e.initPTS;"main"===t&&(this.initPTS[r]=i,this.videoTrackCC=r,f.logger.log("InitPTS for cc: "+r+" found from video track: "+i),this.state===g.State.WAITING_INIT_PTS&&this.tick())}},{key:"startLoad",value:function(e){if(this.tracks){var t=this.lastCurrentTime;this.stopLoad(),this.setInterval(100),this.fragLoadError=0,t>0&&-1===e?(f.logger.log("audio:override startPosition with lastCurrentTime @"+t.toFixed(3)),this.state=g.State.IDLE):(this.lastCurrentTime=this.startPosition?this.startPosition:e,this.state=g.State.STARTING),this.nextLoadPosition=this.startPosition=this.lastCurrentTime,this.tick()}else this.startPosition=e,this.state=g.State.STOPPED}},{key:"doTick",value:function(){var e=void 0,t=void 0,r=void 0,i=this.hls,o=i.config;switch(this.state){case g.State.ERROR:case g.State.PAUSED:case g.State.BUFFER_FLUSHING:break;case g.State.STARTING:this.state=g.State.WAITING_TRACK,this.loadedmetadata=!1;break;case g.State.IDLE:var l=this.tracks;if(!l)break;if(!this.media&&(this.startFragRequested||!o.startFragPrefetch))break;if(this.loadedmetadata)e=this.media.currentTime;else if(void 0===(e=this.nextLoadPosition))break;var u=this.mediaBuffer?this.mediaBuffer:this.media,d=this.videoBuffer?this.videoBuffer:this.media,v=n.BufferHelper.bufferInfo(u,e,o.maxBufferHole),p=n.BufferHelper.bufferInfo(d,e,o.maxBufferHole),y=v.len,b=v.end,E=this.fragPrevious,_=Math.min(o.maxBufferLength,o.maxMaxBufferLength),T=Math.max(_,p.len),S=this.audioSwitch,k=this.trackId;if((y<T||S)&&k<l.length){if(void 0===(r=l[k].details)){this.state=g.State.WAITING_TRACK;break}if(!S&&this._streamEnded(v,r))return this.hls.trigger(s.default.BUFFER_EOS,{type:"audio"}),void(this.state=g.State.ENDED);var R=r.fragments,A=R.length,w=R[0].start,O=R[A-1].start+R[A-1].duration,L=void 0;if(S)if(r.live&&!r.PTSKnown)f.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"),b=0;else if(b=e,r.PTSKnown&&e<w){if(!(v.end>w||v.nextStart))return;f.logger.log("alt audio track ahead of main track, seek to start of alt audio track"),this.media.currentTime=w+.05}if(r.initSegment&&!r.initSegment.data)L=r.initSegment;else if(b<=w){if(L=R[0],null!==this.videoTrackCC&&L.cc!==this.videoTrackCC&&(L=(0,c.findFragWithCC)(R,this.videoTrackCC)),r.live&&L.loadIdx&&L.loadIdx===this.fragLoadIdx){var D=v.nextStart?v.nextStart:w;return f.logger.log("no alt audio available @currentTime:"+this.media.currentTime+", seeking @"+(D+.05)),void(this.media.currentTime=D+.05)}}else{var P=void 0,I=o.maxFragLookUpTolerance,C=E?R[E.sn-R[0].sn+1]:void 0,x=function(e){var t=Math.min(I,e.duration);return e.start+e.duration-t<=b?1:e.start-t>b&&e.start?-1:0};b<O?(b>O-I&&(I=0),P=C&&!x(C)?C:a.default.search(R,x)):P=R[A-1],P&&(L=P,w=P.start,E&&L.level===E.level&&L.sn===E.sn&&(L.sn<r.endSN?(L=R[L.sn+1-r.startSN],f.logger.log("SN just loaded, load next one: "+L.sn)):L=null))}L&&(L.encrypted?(f.logger.log("Loading key for "+L.sn+" of ["+r.startSN+" ,"+r.endSN+"],track "+k),this.state=g.State.KEY_LOADING,i.trigger(s.default.KEY_LOADING,{frag:L})):(f.logger.log("Loading "+L.sn+", cc: "+L.cc+" of ["+r.startSN+" ,"+r.endSN+"],track "+k+", currentTime:"+e+",bufferEnd:"+b.toFixed(3)),this.fragCurrent=L,(S||this.fragmentTracker.getState(L)===h.FragmentState.NOT_LOADED)&&(this.startFragRequested=!0,Number.isFinite(L.sn)&&(this.nextLoadPosition=L.start+L.duration),i.trigger(s.default.FRAG_LOADING,{frag:L}),this.state=g.State.FRAG_LOADING)))}break;case g.State.WAITING_TRACK:(t=this.tracks[this.trackId])&&t.details&&(this.state=g.State.IDLE);break;case g.State.FRAG_LOADING_WAITING_RETRY:var M=m.now(),F=this.retryDate,N=(u=this.media)&&u.seeking;(!F||M>=F||N)&&(f.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"),this.state=g.State.IDLE);break;case g.State.WAITING_INIT_PTS:var U=this.videoTrackCC;if(void 0===this.initPTS[U])break;var B=this.waitingFragment;if(B){var G=B.frag.cc;U!==G?(t=this.tracks[this.trackId]).details&&t.details.live&&(f.logger.warn("Waiting fragment CC ("+G+") does not match video track CC ("+U+")"),this.waitingFragment=null,this.state=g.State.IDLE):(this.state=g.State.FRAG_LOADING,this.onFragLoaded(this.waitingFragment),this.waitingFragment=null)}else this.state=g.State.IDLE;break;case g.State.STOPPED:case g.State.FRAG_LOADING:case g.State.PARSING:case g.State.PARSED:case g.State.ENDED:}}},{key:"onMediaAttached",value:function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("ended",this.onvended);var r=this.config;this.tracks&&r.autoStartLoad&&this.startLoad(r.startPosition)}},{key:"onMediaDetaching",value:function(){var e=this.media;e&&e.ended&&(f.logger.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1,this.stopLoad()}},{key:"onAudioTracksUpdated",value:function(e){f.logger.log("audio tracks updated"),this.tracks=e.audioTracks}},{key:"onAudioTrackSwitching",value:function(e){var t=!!e.url;this.trackId=e.id,this.fragCurrent=null,this.state=g.State.PAUSED,this.waitingFragment=null,t?this.setInterval(100):this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),t&&(this.audioSwitch=!0,this.state=g.State.IDLE),this.tick()}},{key:"onAudioTrackLoaded",value:function(e){var t=e.details,r=e.id,i=this.tracks[r],a=t.totalduration,n=0;if(f.logger.log("track "+r+" loaded ["+t.startSN+","+t.endSN+"],duration:"+a),t.live){var o=i.details;o&&t.fragments.length>0?(l.mergeDetails(o,t),n=t.fragments[0].start,t.PTSKnown?f.logger.log("live audio playlist sliding:"+n.toFixed(3)):f.logger.log("live audio playlist - outdated PTS, unknown sliding")):(t.PTSKnown=!1,f.logger.log("live audio playlist - first load, unknown sliding"))}else t.PTSKnown=!1;if(i.details=t,!this.startFragRequested){if(-1===this.startPosition){var s=t.startTimeOffset;Number.isFinite(s)?(f.logger.log("start time offset found in playlist, adjust startPosition to "+s),this.startPosition=s):this.startPosition=0}this.nextLoadPosition=this.startPosition}this.state===g.State.WAITING_TRACK&&(this.state=g.State.IDLE),this.tick()}},{key:"onKeyLoaded",value:function(){this.state===g.State.KEY_LOADING&&(this.state=g.State.IDLE,this.tick())}},{key:"onFragLoaded",value:function(e){var t=this.fragCurrent,r=e.frag;if(this.state===g.State.FRAG_LOADING&&t&&"audio"===r.type&&r.level===t.level&&r.sn===t.sn){var i=this.tracks[this.trackId],a=i.details,n=a.totalduration,l=t.level,u=t.sn,d=t.cc,c=this.config.defaultAudioCodec||i.audioCodec||"mp4a.40.2",h=this.stats=e.stats;if("initSegment"===u)this.state=g.State.IDLE,h.tparsed=h.tbuffered=m.now(),a.initSegment.data=e.payload,this.hls.trigger(s.default.FRAG_BUFFERED,{stats:h,frag:t,id:"audio"}),this.tick();else{this.state=g.State.PARSING,this.appended=!1,this.demuxer||(this.demuxer=new o.default(this.hls,"audio"));var v=this.initPTS[d],p=a.initSegment?a.initSegment.data:[];if(a.initSegment||void 0!==v){this.pendingBuffering=!0,f.logger.log("Demuxing "+u+" of ["+a.startSN+" ,"+a.endSN+"],track "+l);this.demuxer.push(e.payload,p,c,null,t,n,!1,v)}else f.logger.log("unknown video PTS for continuity counter "+d+", waiting for video PTS before demuxing audio frag "+u+" of ["+a.startSN+" ,"+a.endSN+"],track "+l),this.waitingFragment=e,this.state=g.State.WAITING_INIT_PTS}}this.fragLoadError=0}},{key:"onFragParsingInitSegment",value:function(e){var t=this.fragCurrent,r=e.frag;if(t&&"audio"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===g.State.PARSING){var i=e.tracks,a=void 0;if(i.video&&delete i.video,a=i.audio){a.levelCodec=a.codec,a.id=e.id,this.hls.trigger(s.default.BUFFER_CODECS,i),f.logger.log("audio track:audio,container:"+a.container+",codecs[level/parsed]=["+a.levelCodec+"/"+a.codec+"]");var n=a.initSegment;if(n){var o={type:"audio",data:n,parent:"audio",content:"initSegment"};this.audioSwitch?this.pendingData=[o]:(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(s.default.BUFFER_APPENDING,o))}this.tick()}}}},{key:"onFragParsingData",value:function(e){var t=this,r=this.fragCurrent,i=e.frag;if(r&&"audio"===e.id&&"audio"===e.type&&i.sn===r.sn&&i.level===r.level&&this.state===g.State.PARSING){var a=this.trackId,n=this.tracks[a],o=this.hls;Number.isFinite(e.endPTS)||(e.endPTS=e.startPTS+r.duration,e.endDTS=e.startDTS+r.duration),r.addElementaryStream(v.default.ElementaryStreamTypes.AUDIO),f.logger.log("parsed "+e.type+",PTS:["+e.startPTS.toFixed(3)+","+e.endPTS.toFixed(3)+"],DTS:["+e.startDTS.toFixed(3)+"/"+e.endDTS.toFixed(3)+"],nb:"+e.nb),l.updateFragPTSDTS(n.details,r,e.startPTS,e.endPTS);var u=this.audioSwitch,c=this.media,h=!1;if(u&&c)if(c.readyState){var p=c.currentTime;f.logger.log("switching audio track : currentTime:"+p),p>=e.startPTS&&(f.logger.log("switching audio track : flushing all audio"),this.state=g.State.BUFFER_FLUSHING,o.trigger(s.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),h=!0,this.audioSwitch=!1,o.trigger(s.default.AUDIO_TRACK_SWITCHED,{id:a}))}else this.audioSwitch=!1,o.trigger(s.default.AUDIO_TRACK_SWITCHED,{id:a});var y=this.pendingData;if(!y)return f.logger.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"),void o.trigger(s.default.ERROR,{type:d.ErrorTypes.MEDIA_ERROR,details:null,fatal:!0});this.audioSwitch||([e.data1,e.data2].forEach(function(t){t&&t.length&&y.push({type:e.type,data:t,parent:"audio",content:"data"})}),!h&&y.length&&(y.forEach(function(e){t.state===g.State.PARSING&&(t.pendingBuffering=!0,t.hls.trigger(s.default.BUFFER_APPENDING,e))}),this.pendingData=[],this.appended=!0)),this.tick()}}},{key:"onFragParsed",value:function(e){var t=this.fragCurrent,r=e.frag;t&&"audio"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===g.State.PARSING&&(this.stats.tparsed=m.now(),this.state=g.State.PARSED,this._checkAppendedParsed())}},{key:"onBufferReset",value:function(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1}},{key:"onBufferCreated",value:function(e){var t=e.tracks.audio;t&&(this.mediaBuffer=t.buffer,this.loadedmetadata=!0),e.tracks.video&&(this.videoBuffer=e.tracks.video.buffer)}},{key:"onBufferAppended",value:function(e){if("audio"===e.parent){var t=this.state;t!==g.State.PARSING&&t!==g.State.PARSED||(this.pendingBuffering=e.pending>0,this._checkAppendedParsed())}}},{key:"_checkAppendedParsed",value:function(){if(!(this.state!==g.State.PARSED||this.appended&&this.pendingBuffering)){var e=this.fragCurrent,t=this.stats,r=this.hls;if(e){this.fragPrevious=e,t.tbuffered=m.now(),r.trigger(s.default.FRAG_BUFFERED,{stats:t,frag:e,id:"audio"});var i=this.mediaBuffer?this.mediaBuffer:this.media;f.logger.log("audio buffered : "+u.default.toString(i.buffered)),this.audioSwitch&&this.appended&&(this.audioSwitch=!1,r.trigger(s.default.AUDIO_TRACK_SWITCHED,{id:this.trackId})),this.state=g.State.IDLE}this.tick()}}},{key:"onError",value:function(e){var t=e.frag;if(!t||"audio"===t.type)switch(e.details){case d.ErrorDetails.FRAG_LOAD_ERROR:case d.ErrorDetails.FRAG_LOAD_TIMEOUT:var r=e.frag;if(r&&"audio"!==r.type)break;if(!e.fatal){var i=this.fragLoadError;i?i++:i=1;var a=this.config;if(i<=a.fragLoadingMaxRetry){this.fragLoadError=i;var o=Math.min(Math.pow(2,i-1)*a.fragLoadingRetryDelay,a.fragLoadingMaxRetryTimeout);f.logger.warn("AudioStreamController: frag loading failed, retry in "+o+" ms"),this.retryDate=m.now()+o,this.state=g.State.FRAG_LOADING_WAITING_RETRY}else f.logger.error("AudioStreamController: "+e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.state=g.State.ERROR}break;case d.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:case d.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:case d.ErrorDetails.KEY_LOAD_ERROR:case d.ErrorDetails.KEY_LOAD_TIMEOUT:this.state!==g.State.ERROR&&(this.state=e.fatal?g.State.ERROR:g.State.IDLE,f.logger.warn("AudioStreamController: "+e.details+" while loading frag, now switching to "+this.state+" state ..."));break;case d.ErrorDetails.BUFFER_FULL_ERROR:if("audio"===e.parent&&(this.state===g.State.PARSING||this.state===g.State.PARSED)){var l=this.mediaBuffer,u=this.media.currentTime;if(l&&n.BufferHelper.isBuffered(l,u)&&n.BufferHelper.isBuffered(l,u+.5)){var c=this.config;c.maxMaxBufferLength>=c.maxBufferLength&&(c.maxMaxBufferLength/=2,f.logger.warn("AudioStreamController: reduce max buffer length to "+c.maxMaxBufferLength+"s")),this.state=g.State.IDLE}else f.logger.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"),this.fragCurrent=null,this.state=g.State.BUFFER_FLUSHING,this.hls.trigger(s.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"})}}}},{key:"onBufferFlushed",value:function(){var e=this,t=this.pendingData;t&&t.length?(f.logger.log("AudioStreamController: appending pending audio data after buffer flushed"),t.forEach(function(t){e.hls.trigger(s.default.BUFFER_APPENDING,t)}),this.appended=!0,this.pendingData=[],this.state=g.State.PARSED):(this.state=g.State.IDLE,this.fragPrevious=null,this.tick())}},{key:"state",set:function(e){if(this.state!==e){var t=this.state;this._state=e,f.logger.log("audio stream:"+t+"->"+e)}},get:function(){return this._state}}]),t}();t.default=b,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=l(r(1)),n=l(r(17)),o=r(0),s=r(2);function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a.default.MANIFEST_LOADING,a.default.MANIFEST_PARSED,a.default.AUDIO_TRACK_LOADED,a.default.AUDIO_TRACK_SWITCHED,a.default.LEVEL_LOADED,a.default.ERROR));return r._trackId=-1,r._selectDefaultTrack=!0,r.tracks=[],r.trackIdBlacklist=Object.create(null),r.audioGroupId=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),i(t,[{key:"onManifestLoading",value:function(){this.tracks=[],this._trackId=-1,this._selectDefaultTrack=!0}},{key:"onManifestParsed",value:function(e){var t=this.tracks=e.audioTracks||[];this.hls.trigger(a.default.AUDIO_TRACKS_UPDATED,{audioTracks:t})}},{key:"onAudioTrackLoaded",value:function(e){if(e.id>=this.tracks.length)o.logger.warn("Invalid audio track id:",e.id);else{if(o.logger.log("audioTrack "+e.id+" loaded"),this.tracks[e.id].details=e.details,e.details.live&&!this.hasInterval()){var t=1e3*e.details.targetduration;this.setInterval(t)}!e.details.live&&this.hasInterval()&&this.clearInterval()}}},{key:"onAudioTrackSwitched",value:function(e){var t=this.tracks[e.id].groupId;t&&this.audioGroupId!==t&&(this.audioGroupId=t)}},{key:"onLevelLoaded",value:function(e){var t=this.hls.levels[e.level];if(t.audioGroupIds){var r=t.audioGroupIds[t.urlId];this.audioGroupId!==r&&(this.audioGroupId=r,this._selectInitialAudioTrack())}}},{key:"onError",value:function(e){e.type===s.ErrorTypes.NETWORK_ERROR&&(e.fatal&&this.clearInterval(),e.details===s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR&&(o.logger.warn("Network failure on audio-track id:",e.context.id),this._handleLoadError()))}},{key:"_setAudioTrack",value:function(e){if(this._trackId===e&&this.tracks[this._trackId].details)o.logger.debug("Same id as current audio-track passed, and track details available -> no-op");else if(e<0||e>=this.tracks.length)o.logger.warn("Invalid id passed to audio-track controller");else{var t=this.tracks[e];o.logger.log("Now switching to audio-track index "+e),this.clearInterval(),this._trackId=e;var r=t.url,i=t.type,n=t.id;this.hls.trigger(a.default.AUDIO_TRACK_SWITCHING,{id:n,type:i,url:r}),this._loadTrackDetailsIfNeeded(t)}}},{key:"doTick",value:function(){this._updateTrack(this._trackId)}},{key:"_selectInitialAudioTrack",value:function(){var e=this,t=this.tracks;if(t.length){var r=this.tracks[this._trackId],i=null;if(r&&(i=r.name),this._selectDefaultTrack){var n=t.filter(function(e){return e.default});n.length?t=n:o.logger.warn("No default audio tracks defined")}var l=!1,u=function(){t.forEach(function(t){l||e.audioGroupId&&t.groupId!==e.audioGroupId||i&&i!==t.name||(e._setAudioTrack(t.id),l=!0)})};u(),l||(i=null,u()),l||(o.logger.error("No track found for running audio group-ID: "+this.audioGroupId),this.hls.trigger(a.default.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,fatal:!0}))}}},{key:"_needsTrackLoading",value:function(e){var t=e.details,r=e.url;return!(t&&!t.live)&&!!r}},{key:"_loadTrackDetailsIfNeeded",value:function(e){if(this._needsTrackLoading(e)){var t=e.url,r=e.id;o.logger.log("loading audio-track playlist for id: "+r),this.hls.trigger(a.default.AUDIO_TRACK_LOADING,{url:t,id:r})}}},{key:"_updateTrack",value:function(e){if(!(e<0||e>=this.tracks.length)){this.clearInterval(),this._trackId=e,o.logger.log("trying to update audio-track "+e);var t=this.tracks[e];this._loadTrackDetailsIfNeeded(t)}}},{key:"_handleLoadError",value:function(){this.trackIdBlacklist[this._trackId]=!0;var e=this._trackId,t=this.tracks[e],r=t.name,i=t.language,a=t.groupId;o.logger.warn("Loading failed on audio track id: "+e+", group-id: "+a+', name/language: "'+r+'" / "'+i+'"');for(var n=e,s=0;s<this.tracks.length;s++){if(!this.trackIdBlacklist[s])if(this.tracks[s].name===r){n=s;break}}n!==e?(o.logger.log("Attempting audio-track fallback id:",n,"group-id:",this.tracks[n].groupId),this._setAudioTrack(n)):o.logger.warn('No fallback audio-track found for name/language: "'+r+'" / "'+i+'"')}},{key:"audioTracks",get:function(){return this.tracks}},{key:"audioTrack",get:function(){return this._trackId},set:function(e){this._setAudioTrack(e),this._selectDefaultTrack=!1}}]),t}();t.default=u,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=r(0);var n=window,o=n.performance,s=n.XMLHttpRequest,l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t&&t.xhrSetup&&(this.xhrSetup=t.xhrSetup)}return i(e,[{key:"destroy",value:function(){this.abort(),this.loader=null}},{key:"abort",value:function(){var e=this.loader;e&&4!==e.readyState&&(this.stats.aborted=!0,e.abort()),window.clearTimeout(this.requestTimeout),this.requestTimeout=null,window.clearTimeout(this.retryTimeout),this.retryTimeout=null}},{key:"load",value:function(e,t,r){this.context=e,this.config=t,this.callbacks=r,this.stats={trequest:o.now(),retry:0},this.retryDelay=t.retryDelay,this.loadInternal()}},{key:"loadInternal",value:function(){var e=void 0,t=this.context;e=this.loader=new s;var r=this.stats;r.tfirst=0,r.loaded=0;var i=this.xhrSetup;try{if(i)try{i(e,t.url)}catch(r){e.open("GET",t.url,!0),i(e,t.url)}e.readyState||e.open("GET",t.url,!0)}catch(r){return void this.callbacks.onError({code:e.status,text:r.message},t,e)}t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),this.config.timeout),e.send()}},{key:"readystatechange",value:function(e){var t=e.currentTarget,r=t.readyState,i=this.stats,n=this.context,s=this.config;if(!i.aborted&&r>=2)if(window.clearTimeout(this.requestTimeout),0===i.tfirst&&(i.tfirst=Math.max(o.now(),i.trequest)),4===r){var l=t.status;if(l>=200&&l<300){i.tload=Math.max(i.tfirst,o.now());var u=void 0,d=void 0;d="arraybuffer"===n.responseType?(u=t.response).byteLength:(u=t.responseText).length,i.loaded=i.total=d;var f={url:t.responseURL,data:u};this.callbacks.onSuccess(f,i,n,t)}else i.retry>=s.maxRetry||l>=400&&l<499?(a.logger.error(l+" while loading "+n.url),this.callbacks.onError({code:l,text:t.statusText},n,t)):(a.logger.warn(l+" while loading "+n.url+", retrying in "+this.retryDelay+"..."),this.destroy(),this.retryTimeout=window.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,s.maxRetryDelay),i.retry++)}else this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),s.timeout)}},{key:"loadtimeout",value:function(){a.logger.warn("timeout while loading "+this.context.url),this.callbacks.onTimeout(this.stats,this.context,null)}},{key:"loadprogress",value:function(e){var t=e.currentTarget,r=this.stats;r.loaded=e.loaded,e.lengthComputable&&(r.total=e.total);var i=this.callbacks.onProgress;i&&i(r,this.context,null,t)}}]),e}();t.default=l,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=s(r(1)),n=s(r(3)),o=r(0);function s(e){return e&&e.__esModule?e:{default:e}}var l=window.performance,u=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a.default.MEDIA_ATTACHING))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),i(t,[{key:"destroy",value:function(){this.timer&&clearInterval(this.timer),this.isVideoPlaybackQualityAvailable=!1}},{key:"onMediaAttaching",value:function(e){var t=this.hls.config;t.capLevelOnFPSDrop&&("function"==typeof(this.video=e.media instanceof window.HTMLVideoElement?e.media:null).getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),clearInterval(this.timer),this.timer=setInterval(this.checkFPSInterval.bind(this),t.fpsDroppedMonitoringPeriod))}},{key:"checkFPS",value:function(e,t,r){var i=l.now();if(t){if(this.lastTime){var n=i-this.lastTime,s=r-this.lastDroppedFrames,u=t-this.lastDecodedFrames,d=1e3*s/n,f=this.hls;if(f.trigger(a.default.FPS_DROP,{currentDropped:s,currentDecoded:u,totalDroppedFrames:r}),d>0&&s>f.config.fpsDroppedMonitoringThreshold*u){var c=f.currentLevel;o.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+c),c>0&&(-1===f.autoLevelCapping||f.autoLevelCapping>=c)&&(c-=1,f.trigger(a.default.FPS_DROP_LEVEL_CAPPING,{level:c,droppedLevel:f.currentLevel}),f.autoLevelCapping=c,f.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=t}}},{key:"checkFPSInterval",value:function(){var e=this.video;if(e)if(this.isVideoPlaybackQualityAvailable){var t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)}}]),t}();t.default=u,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=o(r(1)),n=o(r(3));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a.default.FPS_DROP_LEVEL_CAPPING,a.default.MEDIA_ATTACHING,a.default.MANIFEST_PARSED,a.default.BUFFER_CODECS,a.default.MEDIA_DETACHING));return r.autoLevelCapping=Number.POSITIVE_INFINITY,r.firstLevel=null,r.levels=[],r.media=null,r.restrictedLevels=[],r.timer=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),i(t,[{key:"destroy",value:function(){this.hls.config.capLevelToPlayerSize&&(this.media=null,this._stopCapping())}},{key:"onFpsDropLevelCapping",value:function(e){t.isLevelAllowed(e.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(e.droppedLevel)}},{key:"onMediaAttaching",value:function(e){this.media=e.media instanceof window.HTMLVideoElement?e.media:null}},{key:"onManifestParsed",value:function(e){var t=this.hls;this.restrictedLevels=[],this.levels=e.levels,this.firstLevel=e.firstLevel,t.config.capLevelToPlayerSize&&e.video&&this._startCapping()}},{key:"onBufferCodecs",value:function(e){this.hls.config.capLevelToPlayerSize&&e.video&&this._startCapping()}},{key:"onLevelsUpdated",value:function(e){this.levels=e.levels}},{key:"onMediaDetaching",value:function(){this._stopCapping()}},{key:"detectPlayerSize",value:function(){if(this.media){var e=this.levels?this.levels.length:0;if(e){var t=this.hls;t.autoLevelCapping=this.getMaxLevel(e-1),t.autoLevelCapping>this.autoLevelCapping&&t.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}}},{key:"getMaxLevel",value:function(e){var r=this;if(!this.levels)return-1;var i=this.levels.filter(function(i,a){return t.isLevelAllowed(a,r.restrictedLevels)&&a<=e});return t.getMaxLevelByMediaSize(i,this.mediaWidth,this.mediaHeight)}},{key:"_startCapping",value:function(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),clearInterval(this.timer),this.timer=setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())}},{key:"_stopCapping",value:function(){this.restrictedLevels=[],this.firstLevel=null,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(this.timer=clearInterval(this.timer),this.timer=null)}},{key:"mediaWidth",get:function(){var e=void 0,r=this.media;return r&&(e=r.width||r.clientWidth||r.offsetWidth,e*=t.contentScaleFactor),e}},{key:"mediaHeight",get:function(){var e=void 0,r=this.media;return r&&(e=r.height||r.clientHeight||r.offsetHeight,e*=t.contentScaleFactor),e}}],[{key:"isLevelAllowed",value:function(e){return-1===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).indexOf(e)}},{key:"getMaxLevelByMediaSize",value:function(e,t,r){if(!e||e&&!e.length)return-1;for(var i=function(e,t){return!t||(e.width!==t.width||e.height!==t.height)},a=e.length-1,n=0;n<e.length;n+=1){var o=e[n];if((o.width>=t||o.height>=r)&&i(o,e[n+1])){a=n;break}}return a}},{key:"contentScaleFactor",get:function(){var e=1;try{e=window.devicePixelRatio}catch(e){}return e}}]),t}();t.default=s,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=l(r(1)),n=l(r(3)),o=r(0),s=r(2);function l(e){return e&&e.__esModule?e:{default:e}}var u=(0,r(12).getMediaSource)(),d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a.default.MEDIA_ATTACHING,a.default.MEDIA_DETACHING,a.default.MANIFEST_PARSED,a.default.BUFFER_RESET,a.default.BUFFER_APPENDING,a.default.BUFFER_CODECS,a.default.BUFFER_EOS,a.default.BUFFER_FLUSHING,a.default.LEVEL_PTS_UPDATED,a.default.LEVEL_UPDATED));return r._msDuration=null,r._levelDuration=null,r._levelTargetDuration=10,r._live=null,r._objectUrl=null,r.bufferCodecEventsExpected=0,r.onsbue=r.onSBUpdateEnd.bind(r),r.onsbe=r.onSBUpdateError.bind(r),r.pendingTracks={},r.tracks={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),i(t,[{key:"destroy",value:function(){n.default.prototype.destroy.call(this)}},{key:"onLevelPtsUpdated",value:function(e){var t=e.type,r=this.tracks.audio;if("audio"===t&&r&&"audio/mpeg"===r.container){var i=this.sourceBuffer.audio;if(Math.abs(i.timestampOffset-e.start)>.1){var a=i.updating;try{i.abort()}catch(e){o.logger.warn("can not abort audio buffer: "+e)}a?this.audioTimestampOffset=e.start:(o.logger.warn("change mpeg audio timestamp offset from "+i.timestampOffset+" to "+e.start),i.timestampOffset=e.start)}}}},{key:"onManifestParsed",value:function(e){this.bufferCodecEventsExpected=e.altAudio?2:1,o.logger.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")}},{key:"onMediaAttaching",value:function(e){var t=this.media=e.media;if(t){var r=this.mediaSource=new u;this.onmso=this.onMediaSourceOpen.bind(this),this.onmse=this.onMediaSourceEnded.bind(this),this.onmsc=this.onMediaSourceClose.bind(this),r.addEventListener("sourceopen",this.onmso),r.addEventListener("sourceended",this.onmse),r.addEventListener("sourceclose",this.onmsc),t.src=window.URL.createObjectURL(r),this._objectUrl=t.src}}},{key:"onMediaDetaching",value:function(){o.logger.log("media source detaching");var e=this.mediaSource;if(e){if("open"===e.readyState)try{e.endOfStream()}catch(e){o.logger.warn("onMediaDetaching:"+e.message+" while calling endOfStream")}e.removeEventListener("sourceopen",this.onmso),e.removeEventListener("sourceended",this.onmse),e.removeEventListener("sourceclose",this.onmsc),this.media&&(window.URL.revokeObjectURL(this._objectUrl),this.media.src===this._objectUrl?(this.media.removeAttribute("src"),this.media.load()):o.logger.warn("media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.pendingTracks={},this.tracks={},this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}this.onmso=this.onmse=this.onmsc=null,this.hls.trigger(a.default.MEDIA_DETACHED)}},{key:"onMediaSourceOpen",value:function(){o.logger.log("media source opened"),this.hls.trigger(a.default.MEDIA_ATTACHED,{media:this.media});var e=this.mediaSource;e&&e.removeEventListener("sourceopen",this.onmso),this.checkPendingTracks()}},{key:"checkPendingTracks",value:function(){var e=this.bufferCodecEventsExpected,t=this.pendingTracks,r=Object.keys(t).length;(r&&!e||2===r)&&(this.createSourceBuffers(t),this.pendingTracks={},this.doAppending())}},{key:"onMediaSourceClose",value:function(){o.logger.log("media source closed")}},{key:"onMediaSourceEnded",value:function(){o.logger.log("media source ended")}},{key:"onSBUpdateEnd",value:function(){if(this.audioTimestampOffset){var e=this.sourceBuffer.audio;o.logger.warn("change mpeg audio timestamp offset from "+e.timestampOffset+" to "+this.audioTimestampOffset),e.timestampOffset=this.audioTimestampOffset,delete this.audioTimestampOffset}this._needsFlush&&this.doFlush(),this._needsEos&&this.checkEos(),this.appending=!1;var t=this.parent,r=this.segments.reduce(function(e,r){return r.parent===t?e+1:e},0),i={},n=this.sourceBuffer;for(var s in n)i[s]=n[s].buffered;if(!1===this._paused&&i.video&&i.video.length>0&&i.audio&&i.audio.length>0)if(i.video.end(0)-i.video.start(0)>1&&i.audio.end(0)-i.audio.start(0)>1){var l=Math.max(i.video.start(0),i.audio.start(0));this.media.currentTime=l,this.media.play(),delete this._paused}else{var u=Math.max(i.video.end(0),i.audio.end(0));this.media.currentTime=u,this.media.play()}this.hls.trigger(a.default.BUFFER_APPENDED,{parent:t,pending:r,timeRanges:i}),this._needsFlush||this.doAppending(),this.updateMediaElementDuration(),0===r&&this.flushLiveBackBuffer()}},{key:"onSBUpdateError",value:function(e){o.logger.error("sourceBuffer error:",e),this.hls.trigger(a.default.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1})}},{key:"onBufferReset",value:function(){var e=this.sourceBuffer;for(var t in e){var r=e[t];try{this.mediaSource.removeSourceBuffer(r),r.removeEventListener("updateend",this.onsbue),r.removeEventListener("error",this.onsbe)}catch(e){}}this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}},{key:"onBufferCodecs",value:function(e){var t=this;Object.keys(e).forEach(function(r){t.pendingTracks[r]=e[r]});var r=this.mediaSource;this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),r&&"open"===r.readyState&&this.checkPendingTracks()}},{key:"createSourceBuffers",value:function(e){var t=this.sourceBuffer,r=this.mediaSource;for(var i in e)if(!t[i]){var n=e[i],l=n.levelCodec||n.codec,d=n.container+";codecs="+l;o.logger.log("creating sourceBuffer("+d+")");try{var f=t[i]=r.addSourceBuffer(d);f.addEventListener("updateend",this.onsbue),f.addEventListener("error",this.onsbe),this.tracks[i]={codec:l,container:n.container},n.buffer=f}catch(e){if(22==e.code){o.logger.log("Found new track, try to rebuild"),this._paused=!1;var c=this.mediaSource=new u;this.onmso=this.onMediaSourceOpen.bind(this),this.onmse=this.onMediaSourceEnded.bind(this),this.onmsc=this.onMediaSourceClose.bind(this);for(var h=0;h<Object.keys(this.tracks).length;h++){var v=this.tracks[Object.keys(this.tracks)[h]];this.pendingTracks[Object.keys(this.tracks)[h]]=v}this.tracks={},this.sourceBuffer={},c.addEventListener("sourceopen",this.onmso),c.addEventListener("sourceended",this.onmse),c.addEventListener("sourceclose",this.onmsc),this.media.src=window.URL.createObjectURL(c),this._objectUrl=media.src}else o.logger.error("error while trying to add sourceBuffer:"+e.message),this.hls.trigger(a.default.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.BUFFER_ADD_CODEC_ERROR,fatal:!1,err:e,mimeType:d})}}this.hls.trigger(a.default.BUFFER_CREATED,{tracks:e})}},{key:"onBufferAppending",value:function(e){this._needsFlush||(this.segments?this.segments.push(e):this.segments=[e],this.doAppending())}},{key:"onBufferAppendFail",value:function(e){o.logger.error("sourceBuffer error:",e.event),this.hls.trigger(a.default.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.BUFFER_APPENDING_ERROR,fatal:!1})}},{key:"onBufferEos",value:function(e){var t=this.sourceBuffer,r=e.type;for(var i in t)r&&i!==r||t[i].ended||(t[i].ended=!0,o.logger.log(i+" sourceBuffer now EOS"));this.checkEos()}},{key:"checkEos",value:function(){var e=this.sourceBuffer,t=this.mediaSource;if(t&&"open"===t.readyState){for(var r in e){var i=e[r];if(!i.ended)return;if(i.updating)return void(this._needsEos=!0)}o.logger.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");try{t.endOfStream()}catch(e){o.logger.warn("exception while calling mediaSource.endOfStream()")}this._needsEos=!1}else this._needsEos=!1}},{key:"onBufferFlushing",value:function(e){this.flushRange.push({start:e.startOffset,end:e.endOffset,type:e.type}),this.flushBufferCounter=0,this.doFlush()}},{key:"flushLiveBackBuffer",value:function(){if(this._live){var e=this.hls.config.liveBackBufferLength;if(isFinite(e)&&!(e<0))for(var t=this.media.currentTime,r=this.sourceBuffer,i=Object.keys(r),a=t-Math.max(e,this._levelTargetDuration),n=i.length-1;n>=0;n--){var o=i[n],s=r[o].buffered;s.length>0&&a>s.start(0)&&this.removeBufferRange(o,r[o],0,a)}}}},{key:"onLevelUpdated",value:function(e){var t=e.details;t.fragments.length>0&&(this._levelDuration=t.totalduration+t.fragments[0].start,this._levelTargetDuration=t.averagetargetduration||t.targetduration||10,this._live=t.live,this.updateMediaElementDuration())}},{key:"updateMediaElementDuration",value:function(){var e,t=this.hls.config;if(null!==this._levelDuration&&this.media&&this.mediaSource&&this.sourceBuffer&&0!==this.media.readyState&&"open"===this.mediaSource.readyState){for(var r in this.sourceBuffer)if(!0===this.sourceBuffer[r].updating)return;e=this.media.duration,null===this._msDuration&&(this._msDuration=this.mediaSource.duration),!0===this._live&&!0===t.liveDurationInfinity?(o.logger.log("Media Source duration is set to Infinity"),this._msDuration=this.mediaSource.duration=1/0):(this._levelDuration>this._msDuration&&this._levelDuration>e||!Number.isFinite(e))&&(o.logger.log("Updating Media Source duration to "+this._levelDuration.toFixed(3)),this._msDuration=this.mediaSource.duration=this._levelDuration)}}},{key:"doFlush",value:function(){for(;this.flushRange.length;){var e=this.flushRange[0];if(!this.flushBuffer(e.start,e.end,e.type))return void(this._needsFlush=!0);this.flushRange.shift(),this.flushBufferCounter=0}if(0===this.flushRange.length){this._needsFlush=!1;var t=0,r=this.sourceBuffer;try{for(var i in r)t+=r[i].buffered.length}catch(e){o.logger.error("error while accessing sourceBuffer.buffered")}this.appended=t,this.hls.trigger(a.default.BUFFER_FLUSHED)}}},{key:"doAppending",value:function(){var e=this.hls,t=this.segments,r=this.sourceBuffer;if(Object.keys(r).length){if(this.media.error)return this.segments=[],void o.logger.error("trying to append although a media error occured, flush segment and abort");if(this.appending)return;if(t&&t.length){var i=t.shift();try{var n=r[i.type];n?n.updating?t.unshift(i):(n.ended=!1,this.parent=i.parent,n.appendBuffer(i.data),this.appendError=0,this.appended++,this.appending=!0):this.onSBUpdateEnd()}catch(r){o.logger.error("error while trying to append buffer:"+r.message),t.unshift(i);var l={type:s.ErrorTypes.MEDIA_ERROR,parent:i.parent};22!==r.code?(this.appendError?this.appendError++:this.appendError=1,l.details=s.ErrorDetails.BUFFER_APPEND_ERROR,this.appendError>e.config.appendErrorMaxRetry?(o.logger.log("fail "+e.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),this.segments=[],l.fatal=!0,e.trigger(a.default.ERROR,l)):(l.fatal=!1,e.trigger(a.default.ERROR,l))):(this.segments=[],l.details=s.ErrorDetails.BUFFER_FULL_ERROR,l.fatal=!1,e.trigger(a.default.ERROR,l))}}}}},{key:"flushBuffer",value:function(e,t,r){var i=void 0,a=this.sourceBuffer;if(Object.keys(a).length){if(o.logger.log("flushBuffer,pos/start/end: "+this.media.currentTime.toFixed(3)+"/"+e+"/"+t),this.flushBufferCounter<this.appended){for(var n in a)if(!r||n===r){if((i=a[n]).ended=!1,i.updating)return o.logger.warn("cannot flush, sb updating in progress"),!1;if(this.removeBufferRange(n,i,e,t))return this.flushBufferCounter++,!1}}else o.logger.warn("abort flushing too many retries");o.logger.log("buffer flushed")}return!0}},{key:"removeBufferRange",value:function(e,t,r,i){try{for(var a=0;a<t.buffered.length;a++){var n=t.buffered.start(a),s=t.buffered.end(a),l=Math.max(n,r),u=Math.min(s,i);if(Math.min(u,s)-l>.5)return o.logger.log("sb remove "+e+" ["+l+","+u+"], of ["+n+","+s+"], pos:"+this.media.currentTime),t.remove(l,u),!0}}catch(e){o.logger.warn("removeBufferRange failed",e)}return!1}}]),t}();t.default=d,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.alpha_=t?Math.exp(Math.log(.5)/t):0,this.estimate_=0,this.totalWeight_=0}return i(e,[{key:"sample",value:function(e,t){var r=Math.pow(this.alpha_,e);this.estimate_=t*(1-r)+r*this.estimate_,this.totalWeight_+=e}},{key:"getTotalWeight",value:function(){return this.totalWeight_}},{key:"getEstimate",value:function(){if(this.alpha_){var e=1-Math.pow(this.alpha_,this.totalWeight_);return this.estimate_/e}return this.estimate_}}]),e}();t.default=a,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(r(48));var n=function(){function e(t,r,i,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.hls=t,this.defaultEstimate_=n,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new a.default(r),this.fast_=new a.default(i)}return i(e,[{key:"sample",value:function(e,t){var r=8e3*t/(e=Math.max(e,this.minDelayMs_)),i=e/1e3;this.fast_.sample(i,r),this.slow_.sample(i,r)}},{key:"canEstimate",value:function(){var e=this.fast_;return e&&e.getTotalWeight()>=this.minWeight_}},{key:"getEstimate",value:function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_}},{key:"destroy",value:function(){}}]),e}();t.default=n,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=d(r(1)),n=d(r(3)),o=r(4),s=r(2),l=r(0),u=d(r(49));function d(e){return e&&e.__esModule?e:{default:e}}var f=window.performance,c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a.default.FRAG_LOADING,a.default.FRAG_LOADED,a.default.FRAG_BUFFERED,a.default.ERROR));return r.lastLoadedFragLevel=0,r._nextAutoLevel=-1,r.hls=e,r.timer=null,r._bwEstimator=null,r.onCheck=r._abandonRulesCheck.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),i(t,[{key:"destroy",value:function(){this.clearTimer(),n.default.prototype.destroy.call(this)}},{key:"onFragLoading",value:function(e){var t=e.frag;if("main"===t.type&&(this.timer||(this.fragCurrent=t,this.timer=setInterval(this.onCheck,100)),!this._bwEstimator)){var r=this.hls,i=r.config,a=t.level,n=void 0,o=void 0;r.levels[a].details.live?(n=i.abrEwmaFastLive,o=i.abrEwmaSlowLive):(n=i.abrEwmaFastVoD,o=i.abrEwmaSlowVoD),this._bwEstimator=new u.default(r,o,n,i.abrEwmaDefaultEstimate)}}},{key:"_abandonRulesCheck",value:function(){var e=this.hls,t=e.media,r=this.fragCurrent;if(r){var i=r.loader,n=e.minAutoLevel;if(!i||i.stats&&i.stats.aborted)return l.logger.warn("frag loader destroy or aborted, disarm abandonRules"),this.clearTimer(),void(this._nextAutoLevel=-1);var s=i.stats;if(t&&s&&(!t.paused&&0!==t.playbackRate||!t.readyState)&&r.autoLevel&&r.level){var u=f.now()-s.trequest,d=Math.abs(t.playbackRate);if(u>500*r.duration/d){var c=e.levels,h=Math.max(1,s.bw?s.bw/8:1e3*s.loaded/u),v=c[r.level],g=v.realBitrate?Math.max(v.realBitrate,v.bitrate):v.bitrate,p=s.total?s.total:Math.max(s.loaded,Math.round(r.duration*g/8)),y=t.currentTime,m=(p-s.loaded)/h,b=(o.BufferHelper.bufferInfo(t,y,e.config.maxBufferHole).end-y)/d;if(b<2*r.duration/d&&m>b){var E=void 0,_=void 0;for(_=r.level-1;_>n;_--){var T=c[_].realBitrate?Math.max(c[_].realBitrate,c[_].bitrate):c[_].bitrate;if((E=r.duration*T/(6.4*h))<b)break}E<m&&(l.logger.warn("loading too slow, abort fragment loading and switch to level "+_+":fragLoadedDelay["+_+"]<fragLoadedDelay["+(r.level-1)+"];bufferStarvationDelay:"+E.toFixed(1)+"<"+m.toFixed(1)+":"+b.toFixed(1)),e.nextLoadLevel=_,this._bwEstimator.sample(u,s.loaded),i.abort(),this.clearTimer(),e.trigger(a.default.FRAG_LOAD_EMERGENCY_ABORTED,{frag:r,stats:s}))}}}}}},{key:"onFragLoaded",value:function(e){var t=e.frag;if("main"===t.type&&Number.isFinite(t.sn)){if(this.clearTimer(),this.lastLoadedFragLevel=t.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var r=this.hls.levels[t.level],i=(r.loaded?r.loaded.bytes:0)+e.stats.loaded,a=(r.loaded?r.loaded.duration:0)+e.frag.duration;r.loaded={bytes:i,duration:a},r.realBitrate=Math.round(8*i/a)}if(e.frag.bitrateTest){var n=e.stats;n.tparsed=n.tbuffered=n.tload,this.onFragBuffered(e)}}}},{key:"onFragBuffered",value:function(e){var t=e.stats,r=e.frag;if(!0!==t.aborted&&"main"===r.type&&Number.isFinite(r.sn)&&(!r.bitrateTest||t.tload===t.tbuffered)){var i=t.tparsed-t.trequest;l.logger.log("latency/loading/parsing/append/kbps:"+Math.round(t.tfirst-t.trequest)+"/"+Math.round(t.tload-t.tfirst)+"/"+Math.round(t.tparsed-t.tload)+"/"+Math.round(t.tbuffered-t.tparsed)+"/"+Math.round(8*t.loaded/(t.tbuffered-t.trequest))),this._bwEstimator.sample(i,t.loaded),t.bwEstimate=this._bwEstimator.getEstimate(),r.bitrateTest?this.bitrateTestDelay=i/1e3:this.bitrateTestDelay=0}}},{key:"onError",value:function(e){switch(e.details){case s.ErrorDetails.FRAG_LOAD_ERROR:case s.ErrorDetails.FRAG_LOAD_TIMEOUT:this.clearTimer()}}},{key:"clearTimer",value:function(){clearInterval(this.timer),this.timer=null}},{key:"_findBestLevel",value:function(e,t,r,i,a,n,o,s,u){for(var d=a;d>=i;d--){var f=u[d];if(f){var c=f.details,h=c?c.totalduration/c.fragments.length:t,v=!!c&&c.live,g=void 0;g=d<=e?o*r:s*r;var p=u[d].realBitrate?Math.max(u[d].realBitrate,u[d].bitrate):u[d].bitrate,y=p*h/g;if(l.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+d+"/"+Math.round(g)+"/"+p+"/"+h+"/"+n+"/"+y),g>p&&(!y||v&&!this.bitrateTestDelay||y<n))return d}}return-1}},{key:"nextAutoLevel",get:function(){var e=this._nextAutoLevel,t=this._bwEstimator;if(!(-1===e||t&&t.canEstimate()))return e;var r=this._nextABRAutoLevel;return-1!==e&&(r=Math.min(e,r)),r},set:function(e){this._nextAutoLevel=e}},{key:"_nextABRAutoLevel",get:function(){var e=this.hls,t=e.maxAutoLevel,r=e.levels,i=e.config,a=e.minAutoLevel,n=e.media,s=this.lastLoadedFragLevel,u=this.fragCurrent?this.fragCurrent.duration:0,d=n?n.currentTime:0,f=n&&0!==n.playbackRate?Math.abs(n.playbackRate):1,c=this._bwEstimator?this._bwEstimator.getEstimate():i.abrEwmaDefaultEstimate,h=(o.BufferHelper.bufferInfo(n,d,i.maxBufferHole).end-d)/f,v=this._findBestLevel(s,u,c,a,t,h,i.abrBandWidthFactor,i.abrBandWidthUpFactor,r);if(v>=0)return v;l.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");var g=u?Math.min(u,i.maxStarvationDelay):i.maxStarvationDelay,p=i.abrBandWidthFactor,y=i.abrBandWidthUpFactor;if(0===h){var m=this.bitrateTestDelay;if(m)g=(u?Math.min(u,i.maxLoadingDelay):i.maxLoadingDelay)-m,l.logger.trace("bitrate test took "+Math.round(1e3*m)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*g)+" ms"),p=y=1}return v=this._findBestLevel(s,u,c,a,t,h+g,p,y,r),Math.max(v,0)}}]),t}();t.default=c,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hlsDefaultConfig=void 0;var i=p(r(50)),a=p(r(47)),n=p(r(46)),o=p(r(45)),s=p(r(44)),l=p(r(43)),u=p(r(42)),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(41)),f=p(r(39)),c=p(r(35)),h=r(34),v=p(r(33)),g=r(32);function p(e){return e&&e.__esModule?e:{default:e}}var y=t.hlsDefaultConfig={autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,maxBufferSize:6e7,maxBufferHole:.5,lowBufferWatchdogPeriod:.5,highBufferWatchdogPeriod:3,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,liveDurationInfinity:!1,liveBackBufferLength:1/0,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:s.default,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,abrController:i.default,bufferController:a.default,capLevelController:n.default,fpsController:o.default,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,requestMediaKeySystemAccessFunc:g.requestMediaKeySystemAccess};y.subtitleStreamController=h.SubtitleStreamController,y.subtitleTrackController=c.default,y.timelineController=f.default,y.cueHandler=d,y.enableCEA708Captions=!0,y.enableWebVTT=!0,y.captionsTextTrack1Label="English",y.captionsTextTrack1LanguageCode="en",y.captionsTextTrack2Label="Spanish",y.captionsTextTrack2LanguageCode="es",y.audioStreamController=u.default,y.audioTrackController=l.default,y.emeController=v.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSupported=function(){var e=(0,i.getMediaSource)(),t=window.SourceBuffer||window.WebKitSourceBuffer,r=e&&"function"==typeof e.isTypeSupported&&e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),a=!t||t.prototype&&"function"==typeof t.prototype.appendBuffer&&"function"==typeof t.prototype.remove;return!!r&&!!a};var i=r(12)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=l(r(1)),n=l(r(3)),o=l(r(8)),s=r(16);function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a.default.MEDIA_ATTACHED,a.default.MEDIA_DETACHING,a.default.FRAG_PARSING_METADATA));return r.id3Track=void 0,r.media=void 0,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),i(t,[{key:"destroy",value:function(){n.default.prototype.destroy.call(this)}},{key:"onMediaAttached",value:function(e){this.media=e.media,this.media}},{key:"onMediaDetaching",value:function(){(0,s.clearCurrentCues)(this.id3Track),this.id3Track=void 0,this.media=void 0}},{key:"getID3Track",value:function(e){for(var t=0;t<e.length;t++){var r=e[t];if("metadata"===r.kind&&"id3"===r.label)return(0,s.sendAddTrackEvent)(r,this.media),r}return this.media.addTextTrack("metadata","id3")}},{key:"onFragParsingMetadata",value:function(e){var t=e.frag,r=e.samples;this.id3Track||(this.id3Track=this.getID3Track(this.media.textTracks),this.id3Track.mode="hidden");for(var i=window.WebKitDataCue||window.VTTCue||window.TextTrackCue,a=0;a<r.length;a++){var n=o.default.getID3Frames(r[a].data);if(n){var s=r[a].pts,l=a<r.length-1?r[a+1].pts:t.endPTS;s===l&&(l+=1e-4);for(var u=0;u<n.length;u++){var d=n[u];if(!o.default.isTimeStampFrame(d)){var f=new i(s,l,"");f.value=d,this.id3Track.addCue(f)}}}}}}]),t}();t.default=u,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),n=f(r(1)),o=f(r(3)),s=r(0),l=r(2),u=r(27),d=r(5);function f(e){return e&&e.__esModule?e:{default:e}}window.performance;var c=void 0,h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n.default.MANIFEST_LOADED,n.default.LEVEL_LOADED,n.default.AUDIO_TRACK_SWITCHED,n.default.FRAG_LOADED,n.default.ERROR));return r.canload=!1,r.currentLevelIndex=null,r.manualLevelIndex=-1,r.timer=null,c=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default),a(t,[{key:"onHandlerDestroying",value:function(){this.clearTimer(),this.manualLevelIndex=-1}},{key:"clearTimer",value:function(){null!==this.timer&&(clearTimeout(this.timer),this.timer=null)}},{key:"startLoad",value:function(){var e=this._levels;this.canload=!0,this.levelRetryCount=0,e&&e.forEach(function(e){e.loadError=0;var t=e.details;t&&t.live&&(e.details=void 0)}),null!==this.timer&&this.loadLevel()}},{key:"stopLoad",value:function(){this.canload=!1}},{key:"onManifestLoaded",value:function(e){var t=[],r=[],i=void 0,a={},o=null,f=!1,h=!1;if(e.levels.forEach(function(e){var r=e.attrs;e.loadError=0,e.fragmentError=!1,f=f||!!e.videoCodec,h=h||!!e.audioCodec,c&&e.audioCodec&&-1!==e.audioCodec.indexOf("mp4a.40.34")&&(e.audioCodec=void 0),(o=a[e.bitrate])?o.url.push(e.url):(e.url=[e.url],e.urlId=0,a[e.bitrate]=e,t.push(e)),r&&(r.AUDIO&&(h=!0,(0,d.addGroupId)(o||e,"audio",r.AUDIO)),r.SUBTITLES&&(0,d.addGroupId)(o||e,"text",r.SUBTITLES))}),f&&h&&(t=t.filter(function(e){return!!e.videoCodec})),t=t.filter(function(e){var t=e.audioCodec,r=e.videoCodec;return(!t||(0,u.isCodecSupportedInMp4)(t,"audio"))&&(!r||(0,u.isCodecSupportedInMp4)(r,"video"))}),e.audioTracks&&(r=e.audioTracks.filter(function(e){return!e.audioCodec||(0,u.isCodecSupportedInMp4)(e.audioCodec,"audio")})).forEach(function(e,t){e.id=t}),t.length>0){i=t[0].bitrate,t.sort(function(e,t){return e.bitrate-t.bitrate}),this._levels=t;for(var v=0;v<t.length;v++)if(t[v].bitrate===i){this._firstLevel=v,s.logger.log("manifest loaded,"+t.length+" level(s) found, first bitrate:"+i);break}this.hls.trigger(n.default.MANIFEST_PARSED,{levels:t,audioTracks:r,firstLevel:this._firstLevel,stats:e.stats,audio:h,video:f,altAudio:r.some(function(e){return!!e.url})})}else this.hls.trigger(n.default.ERROR,{type:l.ErrorTypes.MEDIA_ERROR,details:l.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:this.hls.url,reason:"no level with compatible codecs found in manifest"})}},{key:"setLevelInternal",value:function(e){var t=this._levels,r=this.hls;if(e>=0&&e<t.length){if(this.clearTimer(),this.currentLevelIndex!==e){s.logger.log("switching to level "+e),this.currentLevelIndex=e;var i=t[e];i.level=e,r.trigger(n.default.LEVEL_SWITCHING,i)}var a=t[e],o=a.details;if(!o||o.live){var u=a.urlId;r.trigger(n.default.LEVEL_LOADING,{url:a.url[u],level:e,id:u})}}else r.trigger(n.default.ERROR,{type:l.ErrorTypes.OTHER_ERROR,details:l.ErrorDetails.LEVEL_SWITCH_ERROR,level:e,fatal:!1,reason:"invalid level idx"})}},{key:"onError",value:function(e){if(e.fatal)e.type===l.ErrorTypes.NETWORK_ERROR&&this.clearTimer();else{var t=!1,r=!1,i=void 0;switch(e.details){case l.ErrorDetails.FRAG_LOAD_ERROR:case l.ErrorDetails.FRAG_LOAD_TIMEOUT:case l.ErrorDetails.KEY_LOAD_ERROR:case l.ErrorDetails.KEY_LOAD_TIMEOUT:i=e.frag.level,r=!0;break;case l.ErrorDetails.LEVEL_LOAD_ERROR:case l.ErrorDetails.LEVEL_LOAD_TIMEOUT:i=e.context.level,t=!0;break;case l.ErrorDetails.REMUX_ALLOC_ERROR:i=e.level,t=!0}void 0!==i&&this.recoverLevel(e,i,t,r)}}},{key:"recoverLevel",value:function(e,t,r,i){var a=this,n=this.hls.config,o=e.details,l=this._levels[t],u=void 0,d=void 0,f=void 0;if(l.loadError++,l.fragmentError=i,r){if(!(this.levelRetryCount+1<=n.levelLoadingMaxRetry))return s.logger.error("level controller, cannot recover from "+o+" error"),this.currentLevelIndex=null,this.clearTimer(),void(e.fatal=!0);d=Math.min(Math.pow(2,this.levelRetryCount)*n.levelLoadingRetryDelay,n.levelLoadingMaxRetryTimeout),this.timer=setTimeout(function(){return a.loadLevel()},d),e.levelRetry=!0,this.levelRetryCount++,s.logger.warn("level controller, "+o+", retry in "+d+" ms, current retry count is "+this.levelRetryCount)}(r||i)&&((u=l.url.length)>1&&l.loadError<u?(l.urlId=(l.urlId+1)%u,l.details=void 0,s.logger.warn("level controller, "+o+" for level "+t+": switching to redundant URL-id "+l.urlId)):-1===this.manualLevelIndex?(f=0===t?this._levels.length-1:t-1,s.logger.warn("level controller, "+o+": switch to "+f),this.hls.nextAutoLevel=this.currentLevelIndex=f):i&&(s.logger.warn("level controller, "+o+": reload a fragment"),this.currentLevelIndex=null))}},{key:"onFragLoaded",value:function(e){var t=e.frag;if(void 0!==t&&"main"===t.type){var r=this._levels[t.level];void 0!==r&&(r.fragmentError=!1,r.loadError=0,this.levelRetryCount=0)}}},{key:"onLevelLoaded",value:function(e){var t=this,r=e.level,i=e.details;if(r===this.currentLevelIndex){var a=this._levels[r];if(a.fragmentError||(a.loadError=0,this.levelRetryCount=0),i.live){var n=(0,d.computeReloadInterval)(a.details,i,e.stats.trequest);s.logger.log("live playlist, reload in "+Math.round(n)+" ms"),this.timer=setTimeout(function(){return t.loadLevel()},n)}else this.clearTimer()}}},{key:"onAudioTrackSwitched",value:function(e){var t=this.hls.audioTracks[e.id].groupId,r=this.hls.levels[this.currentLevelIndex];if(r&&r.audioGroupIds){for(var i=-1,a=0;a<r.audioGroupIds.length;a++)if(r.audioGroupIds[a]===t){i=a;break}i!==r.urlId&&(r.urlId=i,this.startLoad())}}},{key:"loadLevel",value:function(){if(s.logger.debug("call to loadLevel"),null!==this.currentLevelIndex&&this.canload){var e=this._levels[this.currentLevelIndex];if("object"===(void 0===e?"undefined":i(e))&&e.url.length>0){var t=this.currentLevelIndex,r=e.urlId,a=e.url[r];s.logger.log("Attempt loading level index "+t+" with URL-id "+r),this.hls.trigger(n.default.LEVEL_LOADING,{url:a,level:t,id:r})}}}},{key:"levels",get:function(){return this._levels}},{key:"level",get:function(){return this.currentLevelIndex},set:function(e){var t=this._levels;t&&(e=Math.min(e,t.length-1),this.currentLevelIndex===e&&t[e].details||this.setLevelInternal(e))}},{key:"manualLevel",get:function(){return this.manualLevelIndex},set:function(e){this.manualLevelIndex=e,void 0===this._startLevel&&(this._startLevel=e),-1!==e&&(this.level=e)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(e){this._firstLevel=e}},{key:"startLevel",get:function(){if(void 0===this._startLevel){var e=this.hls.config.startLevel;return void 0!==e?e:this._firstLevel}return this._startLevel},set:function(e){this._startLevel=e}},{key:"nextLoadLevel",get:function(){return-1!==this.manualLevelIndex?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(e){this.level=e,-1===this.manualLevelIndex&&(this.hls.nextAutoLevel=e)}}]),t}();t.default=h,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=r(4),n=r(2),o=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),s=r(0);var l=function(){function e(t,r,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t,this.media=r,this.fragmentTracker=i,this.hls=a,this.stallReported=!1}return i(e,[{key:"poll",value:function(e,t){var r=this.config,i=this.media,n=i.currentTime,o=window.performance.now();if(n!==e)return this.stallReported&&(s.logger.warn("playback not stuck anymore @"+n+", after "+Math.round(o-this.stalled)+"ms"),this.stallReported=!1),this.stalled=null,void(this.nudgeRetry=0);if(!(i.ended||!i.buffered.length||i.readyState>2||i.seeking&&a.BufferHelper.isBuffered(i,n))){var l=o-this.stalled,u=a.BufferHelper.bufferInfo(i,n,r.maxBufferHole);this.stalled?(l>=1e3&&this._reportStall(u.len),this._tryFixBufferStall(u,l)):this.stalled=o}}},{key:"_tryFixBufferStall",value:function(e,t){var r=this.config,i=this.fragmentTracker,a=this.media.currentTime,n=i.getPartialFragment(a);n&&this._trySkipBufferHole(n),e.len>.5&&t>1e3*r.highBufferWatchdogPeriod&&(this.stalled=null,this._tryNudgeBuffer())}},{key:"_reportStall",value:function(e){var t=this.hls,r=this.media;this.stallReported||(this.stallReported=!0,s.logger.warn("Playback stalling at @"+r.currentTime+" due to low buffer"),t.trigger(o.default.ERROR,{type:n.ErrorTypes.MEDIA_ERROR,details:n.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!1,buffer:e}))}},{key:"_trySkipBufferHole",value:function(e){for(var t=this.hls,r=this.media,i=r.currentTime,a=0,l=0;l<r.buffered.length;l++){var u=r.buffered.start(l);if(i>=a&&i<u)return r.currentTime=Math.max(u,r.currentTime+.1),s.logger.warn("skipping hole, adjusting currentTime from "+i+" to "+r.currentTime),this.stalled=null,void t.trigger(o.default.ERROR,{type:n.ErrorTypes.MEDIA_ERROR,details:n.ErrorDetails.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+i+" to "+r.currentTime,frag:e});a=r.buffered.end(l)}}},{key:"_tryNudgeBuffer",value:function(){var e=this.config,t=this.hls,r=this.media,i=r.currentTime,a=(this.nudgeRetry||0)+1;if(this.nudgeRetry=a,a<e.nudgeMaxRetry){var l=i+a*e.nudgeOffset;s.logger.log("adjust currentTime from "+i+" to "+l),r.currentTime=l,t.trigger(o.default.ERROR,{type:n.ErrorTypes.MEDIA_ERROR,details:n.ErrorDetails.BUFFER_NUDGE_ON_STALL,fatal:!1})}else s.logger.error("still stuck in high buffer @"+i+" after "+e.nudgeMaxRetry+", raise fatal error"),t.trigger(o.default.ERROR,{type:n.ErrorTypes.MEDIA_ERROR,details:n.ErrorDetails.BUFFER_STALLED_ERROR,fatal:!0})}}]),e}();t.default=l,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(r(24)),a=s(r(1)),n=r(0),o=r(25);function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=new o.EventEmitter;t.trigger=function(e){for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];t.emit.apply(t,[e,e].concat(i))},t.off=function(e){for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];t.removeListener.apply(t,[e].concat(i))};var r=function(t,r){e.postMessage({event:t,data:r})};e.addEventListener("message",function(a){var o=a.data;switch(o.cmd){case"init":var s=JSON.parse(o.config);e.demuxer=new i.default(t,o.typeSupported,s,o.vendor),(0,n.enableLogs)(s.debug),r("init",null);break;case"demux":e.demuxer.push(o.data,o.decryptdata,o.initSegment,o.audioCodec,o.videoCodec,o.timeOffset,o.discontinuity,o.trackSwitch,o.contiguous,o.duration,o.accurateTimeOffset,o.defaultInitPTS)}}),t.on(a.default.FRAG_DECRYPTED,r),t.on(a.default.FRAG_PARSING_INIT_SEGMENT,r),t.on(a.default.FRAG_PARSED,r),t.on(a.default.ERROR,r),t.on(a.default.FRAG_PARSING_METADATA,r),t.on(a.default.FRAG_PARSING_USERDATA,r),t.on(a.default.INIT_PTS_FOUND,r),t.on(a.default.FRAG_PARSING_DATA,function(t,r){var i=[],a={event:t,data:r};r.data1&&(a.data1=r.data1.buffer,i.push(r.data1.buffer),delete r.data1),r.data2&&(a.data2=r.data2.buffer,i.push(r.data2.buffer),delete r.data2),e.postMessage(a,i)})},e.exports=t.default},function(e,t,r){"use strict";var i=Object.prototype.hasOwnProperty,a="~";function n(){}function o(e,t,r,i,n){if("function"!=typeof r)throw new TypeError("The listener must be a function");var o=new function(e,t,r){this.fn=e,this.context=t,this.once=r||!1}(r,i||e,n),s=a?a+t:t;return e._events[s]?e._events[s].fn?e._events[s]=[e._events[s],o]:e._events[s].push(o):(e._events[s]=o,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function l(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(a=!1)),l.prototype.eventNames=function(){var e,t,r=[];if(0===this._eventsCount)return r;for(t in e=this._events)i.call(e,t)&&r.push(a?t.slice(1):t);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},l.prototype.listeners=function(e){var t=a?a+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,n=r.length,o=new Array(n);i<n;i++)o[i]=r[i].fn;return o},l.prototype.listenerCount=function(e){var t=a?a+e:e,r=this._events[t];return r?r.fn?1:r.length:0},l.prototype.emit=function(e,t,r,i,n,o){var s=a?a+e:e;if(!this._events[s])return!1;var l,u,d=this._events[s],f=arguments.length;if(d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),f){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,t),!0;case 3:return d.fn.call(d.context,t,r),!0;case 4:return d.fn.call(d.context,t,r,i),!0;case 5:return d.fn.call(d.context,t,r,i,n),!0;case 6:return d.fn.call(d.context,t,r,i,n,o),!0}for(u=1,l=new Array(f-1);u<f;u++)l[u-1]=arguments[u];d.fn.apply(d.context,l)}else{var c,h=d.length;for(u=0;u<h;u++)switch(d[u].once&&this.removeListener(e,d[u].fn,void 0,!0),f){case 1:d[u].fn.call(d[u].context);break;case 2:d[u].fn.call(d[u].context,t);break;case 3:d[u].fn.call(d[u].context,t,r);break;case 4:d[u].fn.call(d[u].context,t,r,i);break;default:if(!l)for(c=1,l=new Array(f-1);c<f;c++)l[c-1]=arguments[c];d[u].fn.apply(d[u].context,l)}}return!0},l.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},l.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},l.prototype.removeListener=function(e,t,r,i){var n=a?a+e:e;if(!this._events[n])return this;if(!t)return s(this,n),this;var o=this._events[n];if(o.fn)o.fn!==t||i&&!o.once||r&&o.context!==r||s(this,n);else{for(var l=0,u=[],d=o.length;l<d;l++)(o[l].fn!==t||i&&!o[l].once||r&&o[l].context!==r)&&u.push(o[l]);u.length?this._events[n]=1===u.length?u[0]:u:s(this,n)}return this},l.prototype.removeAllListeners=function(e){var t;return e?(t=a?a+e:e,this._events[t]&&s(this,t)):(this._events=new n,this._eventsCount=0),this},l.prototype.off=l.prototype.removeListener,l.prototype.addListener=l.prototype.on,l.prefixed=a,l.EventEmitter=l,e.exports=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(r(1));var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.observer=t}return i(e,[{key:"destroy",value:function(){}},{key:"resetTimeStamp",value:function(){}},{key:"resetInitSegment",value:function(){}},{key:"remux",value:function(e,t,r,i,n,o,s,l){var u=this.observer,d="";e&&(d+="audio"),t&&(d+="video"),u.trigger(a.default.FRAG_PARSING_DATA,{data1:l,startPTS:n,startDTS:n,type:d,hasAudio:!!e,hasVideo:!!t,nb:1,dropped:0}),u.trigger(a.default.FRAG_PARSED)}}]),e}();t.default=n,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();var a=Math.pow(2,32)-1,n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"init",value:function(){e.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};var t=void 0;for(t in e.types)e.types.hasOwnProperty(t)&&(e.types[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);var r=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);e.HDLR_TYPES={video:r,audio:i};var a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),n=new Uint8Array([0,0,0,0,0,0,0,0]);e.STTS=e.STSC=e.STCO=n,e.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),e.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),e.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),e.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var o=new Uint8Array([105,115,111,109]),s=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);e.FTYP=e.box(e.types.ftyp,o,l,o,s),e.DINF=e.box(e.types.dinf,e.box(e.types.dref,a))}},{key:"box",value:function(e){for(var t=Array.prototype.slice.call(arguments,1),r=8,i=t.length,a=i,n=void 0;i--;)r+=t[i].byteLength;for((n=new Uint8Array(r))[0]=r>>24&255,n[1]=r>>16&255,n[2]=r>>8&255,n[3]=255&r,n.set(e,4),i=0,r=8;i<a;i++)n.set(t[i],r),r+=t[i].byteLength;return n}},{key:"hdlr",value:function(t){return e.box(e.types.hdlr,e.HDLR_TYPES[t])}},{key:"mdat",value:function(t){return e.box(e.types.mdat,t)}},{key:"mdhd",value:function(t,r){r*=t;var i=Math.floor(r/(a+1)),n=Math.floor(r%(a+1));return e.box(e.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,i>>24,i>>16&255,i>>8&255,255&i,n>>24,n>>16&255,n>>8&255,255&n,85,196,0,0]))}},{key:"mdia",value:function(t){return e.box(e.types.mdia,e.mdhd(t.timescale,t.duration),e.hdlr(t.type),e.minf(t))}},{key:"mfhd",value:function(t){return e.box(e.types.mfhd,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,255&t]))}},{key:"minf",value:function(t){return"audio"===t.type?e.box(e.types.minf,e.box(e.types.smhd,e.SMHD),e.DINF,e.stbl(t)):e.box(e.types.minf,e.box(e.types.vmhd,e.VMHD),e.DINF,e.stbl(t))}},{key:"moof",value:function(t,r,i){return e.box(e.types.moof,e.mfhd(t),e.traf(i,r))}},{key:"moov",value:function(t){for(var r=t.length,i=[];r--;)i[r]=e.trak(t[r]);return e.box.apply(null,[e.types.moov,e.mvhd(t[0].timescale,t[0].duration)].concat(i).concat(e.mvex(t)))}},{key:"mvex",value:function(t){for(var r=t.length,i=[];r--;)i[r]=e.trex(t[r]);return e.box.apply(null,[e.types.mvex].concat(i))}},{key:"mvhd",value:function(t,r){r*=t;var i=Math.floor(r/(a+1)),n=Math.floor(r%(a+1)),o=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,i>>24,i>>16&255,i>>8&255,255&i,n>>24,n>>16&255,n>>8&255,255&n,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return e.box(e.types.mvhd,o)}},{key:"sdtp",value:function(t){var r=t.samples||[],i=new Uint8Array(4+r.length),a=void 0,n=void 0;for(n=0;n<r.length;n++)a=r[n].flags,i[n+4]=a.dependsOn<<4|a.isDependedOn<<2|a.hasRedundancy;return e.box(e.types.sdtp,i)}},{key:"stbl",value:function(t){return e.box(e.types.stbl,e.stsd(t),e.box(e.types.stts,e.STTS),e.box(e.types.stsc,e.STSC),e.box(e.types.stsz,e.STSZ),e.box(e.types.stco,e.STCO))}},{key:"avc1",value:function(t){var r=[],i=[],a=void 0,n=void 0,o=void 0;for(a=0;a<t.sps.length;a++)o=(n=t.sps[a]).byteLength,r.push(o>>>8&255),r.push(255&o),r=r.concat(Array.prototype.slice.call(n));for(a=0;a<t.pps.length;a++)o=(n=t.pps[a]).byteLength,i.push(o>>>8&255),i.push(255&o),i=i.concat(Array.prototype.slice.call(n));var s=e.box(e.types.avcC,new Uint8Array([1,r[3],r[4],r[5],255,224|t.sps.length].concat(r).concat([t.pps.length]).concat(i))),l=t.width,u=t.height,d=t.pixelRatio[0],f=t.pixelRatio[1];return e.box(e.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,u>>8&255,255&u,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),s,e.box(e.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),e.box(e.types.pasp,new Uint8Array([d>>24,d>>16&255,d>>8&255,255&d,f>>24,f>>16&255,f>>8&255,255&f])))}},{key:"esds",value:function(e){var t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))}},{key:"mp4a",value:function(t){var r=t.samplerate;return e.box(e.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),e.box(e.types.esds,e.esds(t)))}},{key:"mp3",value:function(t){var r=t.samplerate;return e.box(e.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]))}},{key:"stsd",value:function(t){return"audio"===t.type?t.isAAC||"mp3"!==t.codec?e.box(e.types.stsd,e.STSD,e.mp4a(t)):e.box(e.types.stsd,e.STSD,e.mp3(t)):e.box(e.types.stsd,e.STSD,e.avc1(t))}},{key:"tkhd",value:function(t){var r=t.id,i=t.duration*t.timescale,n=t.width,o=t.height,s=Math.floor(i/(a+1)),l=Math.floor(i%(a+1));return e.box(e.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,s>>24,s>>16&255,s>>8&255,255&s,l>>24,l>>16&255,l>>8&255,255&l,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,n>>8&255,255&n,0,0,o>>8&255,255&o,0,0]))}},{key:"traf",value:function(t,r){var i=e.sdtp(t),n=t.id,o=Math.floor(r/(a+1)),s=Math.floor(r%(a+1));return e.box(e.types.traf,e.box(e.types.tfhd,new Uint8Array([0,0,0,0,n>>24,n>>16&255,n>>8&255,255&n])),e.box(e.types.tfdt,new Uint8Array([1,0,0,0,o>>24,o>>16&255,o>>8&255,255&o,s>>24,s>>16&255,s>>8&255,255&s])),e.trun(t,i.length+16+20+8+16+8+8),i)}},{key:"trak",value:function(t){return t.duration=t.duration||4294967295,e.box(e.types.trak,e.tkhd(t),e.mdia(t))}},{key:"trex",value:function(t){var r=t.id;return e.box(e.types.trex,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}},{key:"trun",value:function(t,r){var i=t.samples||[],a=i.length,n=12+16*a,o=new Uint8Array(n),s=void 0,l=void 0,u=void 0,d=void 0,f=void 0,c=void 0;for(r+=8+n,o.set([0,0,15,1,a>>>24&255,a>>>16&255,a>>>8&255,255&a,r>>>24&255,r>>>16&255,r>>>8&255,255&r],0),s=0;s<a;s++)u=(l=i[s]).duration,d=l.size,f=l.flags,c=l.cts,o.set([u>>>24&255,u>>>16&255,u>>>8&255,255&u,d>>>24&255,d>>>16&255,d>>>8&255,255&d,f.isLeading<<2|f.dependsOn,f.isDependedOn<<6|f.hasRedundancy<<4|f.paddingValue<<1|f.isNonSync,61440&f.degradPrio,15&f.degradPrio,c>>>24&255,c>>>16&255,c>>>8&255,255&c],12+16*s);return e.box(e.types.trun,o)}},{key:"initSegment",value:function(t){e.types||e.init();var r=e.moov(t),i=void 0;return(i=new Uint8Array(e.FTYP.byteLength+r.byteLength)).set(e.FTYP),i.set(r,e.FTYP.byteLength),i}}]),e}();t.default=n,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"getSilentFrame",value:function(e,t){switch(e){case"mp4a.40.2":if(1===t)return new Uint8Array([0,200,0,128,35,128]);if(2===t)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(1===t)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}return null}}]),e}();t.default=a,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=u(r(60)),n=u(r(59)),o=u(r(1)),s=r(2),l=r(0);function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(t,r,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.observer=t,this.config=r,this.typeSupported=i;var n=navigator.userAgent;this.isSafari=a&&a.indexOf("Apple")>-1&&n&&!n.match("CriOS"),this.ISGenerated=!1}return i(e,[{key:"destroy",value:function(){}},{key:"resetTimeStamp",value:function(e){this._initPTS=this._initDTS=e}},{key:"resetInitSegment",value:function(){this.ISGenerated=!1}},{key:"remux",value:function(e,t,r,i,a,n,s){if(this.ISGenerated||this.generateIS(e,t,a),this.ISGenerated){var u=e.samples.length,d=t.samples.length,f=a,c=a;if(u&&d){var h=(e.samples[0].pts-t.samples[0].pts)/t.inputTimeScale;f+=Math.max(0,h),c+=Math.max(0,-h)}if(u){e.timescale||(l.logger.warn("regenerate InitSegment as audio detected"),this.generateIS(e,t,a));var v=this.remuxAudio(e,f,n,s);if(d){var g=void 0;v&&(g=v.endPTS-v.startPTS),t.timescale||(l.logger.warn("regenerate InitSegment as video detected"),this.generateIS(e,t,a)),this.remuxVideo(t,c,n,g,s)}}else if(d){var p=this.remuxVideo(t,c,n,0,s);p&&e.codec&&this.remuxEmptyAudio(e,f,n,p)}}r.samples.length&&this.remuxID3(r,a),i.samples.length&&this.remuxText(i,a),this.observer.trigger(o.default.FRAG_PARSED)}},{key:"generateIS",value:function(e,t,r){var i=this.observer,a=e.samples,u=t.samples,d=this.typeSupported,f="audio/mp4",c={},h={tracks:c},v=void 0===this._initPTS,g=void 0,p=void 0;if(v&&(g=p=1/0),e.config&&a.length&&(e.timescale=e.samplerate,l.logger.log("audio sampling rate : "+e.samplerate),e.isAAC||(d.mpeg?(f="audio/mpeg",e.codec=""):d.mp3&&(e.codec="mp3")),c.audio={container:f,codec:e.codec,initSegment:!e.isAAC&&d.mpeg?new Uint8Array:n.default.initSegment([e]),metadata:{channelCount:e.channelCount}},v&&(g=p=a[0].pts-e.inputTimeScale*r)),t.sps&&t.pps&&u.length){var y=t.inputTimeScale;t.timescale=y,c.video={container:"video/mp4",codec:t.codec,initSegment:n.default.initSegment([t]),metadata:{width:t.width,height:t.height}},v&&(g=Math.min(g,u[0].pts-y*r),p=Math.min(p,u[0].dts-y*r),this.observer.trigger(o.default.INIT_PTS_FOUND,{initPTS:g}))}Object.keys(c).length?(i.trigger(o.default.FRAG_PARSING_INIT_SEGMENT,h),this.ISGenerated=!0,v&&(this._initPTS=g,this._initDTS=p)):i.trigger(o.default.ERROR,{type:s.ErrorTypes.MEDIA_ERROR,details:s.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"no audio/video samples found"})}},{key:"remuxVideo",value:function(e,t,r,i,a){var u,d,f,c=8,h=void 0,v=void 0,g=void 0,p=void 0,y=e.timescale,m=e.samples,b=[],E=m.length,_=this._PTSNormalize,T=this._initPTS,S=this.nextAvcDts,k=this.isSafari;if(0!==E){k&&(r|=m.length&&S&&(a&&Math.abs(t-S/y)<.1||Math.abs(m[0].pts-S-T)<y/5)),r||(S=t*y),m.forEach(function(e){e.pts=_(e.pts-T,S),e.dts=_(e.dts-T,S)}),m.sort(function(e,t){var r=e.dts-t.dts,i=e.pts-t.pts;return r||i||e.id-t.id});var R=m.reduce(function(e,t){return Math.max(Math.min(e,t.pts-t.dts),-18e3)},0);if(R<0){l.logger.warn("PTS < DTS detected in video samples, shifting DTS by "+Math.round(R/90)+" ms to overcome this issue");for(var A=0;A<m.length;A++)m[A].dts+=R}var w=m[0];p=Math.max(w.dts,0),g=Math.max(w.pts,0);var O=Math.round((p-S)/90);r&&O&&(O>1?l.logger.log("AVC:"+O+" ms hole between fragments detected,filling it"):O<-1&&l.logger.log("AVC:"+-O+" ms overlapping between fragments detected"),p=S,m[0].dts=p,g=Math.max(g-O,S),m[0].pts=g,l.logger.log("Video/PTS/DTS adjusted: "+Math.round(g/90)+"/"+Math.round(p/90)+",delta:"+O+" ms")),w=m[m.length-1],f=Math.max(w.dts,0),d=Math.max(w.pts,0,f),k&&(h=Math.round((f-p)/(m.length-1)));for(var L=0,D=0,P=0;P<E;P++){for(var I=m[P],C=I.units,x=C.length,M=0,F=0;F<x;F++)M+=C[F].data.length;D+=M,L+=x,I.length=M,I.dts=k?p+P*h:Math.max(I.dts,p),I.pts=Math.max(I.pts,I.dts)}var N=D+4*L+8;try{v=new Uint8Array(N)}catch(e){return void this.observer.trigger(o.default.ERROR,{type:s.ErrorTypes.MUX_ERROR,details:s.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:N,reason:"fail allocating video mdat "+N})}var U=new DataView(v.buffer);U.setUint32(0,N),v.set(n.default.types.mdat,4);for(var B=0;B<E;B++){for(var G=m[B],j=G.units,K=0,H=void 0,V=0,W=j.length;V<W;V++){var Y=j[V],q=Y.data,X=Y.data.byteLength;U.setUint32(c,X),c+=4,v.set(q,c),c+=X,K+=4+X}if(k)H=Math.max(0,h*Math.round((G.pts-G.dts)/h));else{if(B<E-1)h=m[B+1].dts-G.dts;else{var z=this.config,Q=G.dts-m[B>0?B-1:B].dts;if(z.stretchShortVideoTrack){var $=z.maxBufferHole,J=Math.floor($*y),Z=(i?g+i*y:this.nextAudioPts)-G.pts;Z>J?((h=Z-Q)<0&&(h=Q),l.logger.log("It is approximately "+Z/90+" ms to the next segment; using duration "+h/90+" ms for the last video frame.")):h=Q}else h=Q}H=Math.round(G.pts-G.dts)}b.push({size:K,duration:h,cts:H,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:G.key?2:1,isNonSync:G.key?0:1}})}this.nextAvcDts=f+h;var ee=e.dropped;if(e.len=0,e.nbNalu=0,e.dropped=0,b.length&&navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var te=b[0].flags;te.dependsOn=2,te.isNonSync=0}e.samples=b,u=n.default.moof(e.sequenceNumber++,p,e),e.samples=[];var re={data1:u,data2:v,startPTS:g/y,endPTS:(d+h)/y,startDTS:p/y,endDTS:this.nextAvcDts/y,type:"video",hasAudio:!1,hasVideo:!0,nb:b.length,dropped:ee};return this.observer.trigger(o.default.FRAG_PARSING_DATA,re),re}}},{key:"remuxAudio",value:function(e,t,r,i){var u=e.inputTimeScale,d=e.timescale,f=u/d,c=(e.isAAC?1024:1152)*f,h=this._PTSNormalize,v=this._initPTS,g=!e.isAAC&&this.typeSupported.mpeg,p=void 0,y=void 0,m=void 0,b=void 0,E=void 0,_=void 0,T=void 0,S=e.samples,k=[],R=this.nextAudioPts;if(r|=S.length&&R&&(i&&Math.abs(t-R/u)<.1||Math.abs(S[0].pts-R-v)<20*c),S.forEach(function(e){e.pts=e.dts=h(e.pts-v,t*u)}),0!==(S=S.filter(function(e){return e.pts>=0})).length){if(r||(R=i?t*u:S[0].pts),e.isAAC)for(var A=this.config.maxAudioFramesDrift,w=0,O=R;w<S.length;){var L,D=S[w];L=D.pts-O;var P=Math.abs(1e3*L/u);if(L<=-A*c)l.logger.warn("Dropping 1 audio frame @ "+(O/u).toFixed(3)+"s due to "+Math.round(P)+" ms overlap."),S.splice(w,1),e.len-=D.unit.length;else if(L>=A*c&&P<1e4&&O){var I=Math.round(L/c);l.logger.warn("Injecting "+I+" audio frame @ "+(O/u).toFixed(3)+"s due to "+Math.round(1e3*L/u)+" ms gap.");for(var C=0;C<I;C++){var x=Math.max(O,0);(m=a.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(l.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),m=D.unit.subarray()),S.splice(w,0,{unit:m,pts:x,dts:x}),e.len+=m.length,O+=c,w++}D.pts=D.dts=O,O+=c,w++}else Math.abs(L),D.pts=D.dts=O,O+=c,w++}for(var M=0,F=S.length;M<F;M++){var N=S[M],U=N.unit,B=N.pts;if(void 0!==T)y.duration=Math.round((B-T)/f);else{var G=Math.round(1e3*(B-R)/u),j=0;if(r&&e.isAAC&&G){if(G>0&&G<1e4)j=Math.round((B-R)/c),l.logger.log(G+" ms hole between AAC samples detected,filling it"),j>0&&((m=a.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(m=U.subarray()),e.len+=j*m.length);else if(G<-12){l.logger.log("drop overlapping AAC sample, expected/parsed/delta:"+(R/u).toFixed(3)+"s/"+(B/u).toFixed(3)+"s/"+-G+"ms"),e.len-=U.byteLength;continue}B=R}if(_=B,!(e.len>0))return;var K=g?e.len:e.len+8;p=g?0:8;try{b=new Uint8Array(K)}catch(e){return void this.observer.trigger(o.default.ERROR,{type:s.ErrorTypes.MUX_ERROR,details:s.ErrorDetails.REMUX_ALLOC_ERROR,fatal:!1,bytes:K,reason:"fail allocating audio mdat "+K})}g||(new DataView(b.buffer).setUint32(0,K),b.set(n.default.types.mdat,4));for(var H=0;H<j;H++)(m=a.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(l.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),m=U.subarray()),b.set(m,p),p+=m.byteLength,y={size:m.byteLength,cts:0,duration:1024,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},k.push(y)}b.set(U,p);var V=U.byteLength;p+=V,y={size:V,cts:0,duration:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},k.push(y),T=B}var W=0,Y=k.length;if(Y>=2&&(W=k[Y-2].duration,y.duration=W),Y){this.nextAudioPts=R=T+f*W,e.len=0,e.samples=k,E=g?new Uint8Array:n.default.moof(e.sequenceNumber++,_/f,e),e.samples=[];var q=_/u,X=R/u,z={data1:E,data2:b,startPTS:q,endPTS:X,startDTS:q,endDTS:X,type:"audio",hasAudio:!0,hasVideo:!1,nb:Y};return this.observer.trigger(o.default.FRAG_PARSING_DATA,z),z}return null}}},{key:"remuxEmptyAudio",value:function(e,t,r,i){var n=e.inputTimeScale,o=n/(e.samplerate?e.samplerate:n),s=this.nextAudioPts,u=(void 0!==s?s:i.startDTS*n)+this._initDTS,d=i.endDTS*n+this._initDTS,f=1024*o,c=Math.ceil((d-u)/f),h=a.default.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);if(l.logger.warn("remux empty Audio"),h){for(var v=[],g=0;g<c;g++){var p=u+g*f;v.push({unit:h,pts:p,dts:p}),e.len+=h.length}e.samples=v,this.remuxAudio(e,t,r)}else l.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")}},{key:"remuxID3",value:function(e){var t=e.samples.length,r=void 0,i=e.inputTimeScale,a=this._initPTS,n=this._initDTS;if(t){for(var s=0;s<t;s++)(r=e.samples[s]).pts=(r.pts-a)/i,r.dts=(r.dts-n)/i;this.observer.trigger(o.default.FRAG_PARSING_METADATA,{samples:e.samples})}e.samples=[]}},{key:"remuxText",value:function(e){e.samples.sort(function(e,t){return e.pts-t.pts});var t=e.samples.length,r=void 0,i=e.inputTimeScale,a=this._initPTS;if(t){for(var n=0;n<t;n++)(r=e.samples[n]).pts=(r.pts-a)/i;this.observer.trigger(o.default.FRAG_PARSING_USERDATA,{samples:e.samples})}e.samples=[]}},{key:"_PTSNormalize",value:function(e,t){var r=void 0;if(void 0===t)return e;for(r=t<e?-8589934592:8589934592;Math.abs(e-t)>4294967296;)e+=r;return e}}]),e}();t.default=d,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=s(r(8)),n=r(0),o=s(r(22));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.observer=t,this.config=i,this.remuxer=r}return i(e,[{key:"resetInitSegment",value:function(e,t,r,i){this._audioTrack={container:"audio/mpeg",type:"audio",id:-1,sequenceNumber:0,isAAC:!1,samples:[],len:0,manifestCodec:t,duration:i,inputTimeScale:9e4}}},{key:"resetTimeStamp",value:function(){}},{key:"append",value:function(e,t,r,i){for(var n=a.default.getID3Data(e,0),s=a.default.getTimeStamp(n),l=s?90*s:9e4*t,u=n.length,d=e.length,f=0,c=0,h=this._audioTrack,v=[{pts:l,dts:l,data:n}];u<d;)if(o.default.isHeader(e,u)){var g=o.default.appendFrame(h,e,u,l,f);if(!g)break;u+=g.length,c=g.sample.pts,f++}else a.default.isHeader(e,u)?(n=a.default.getID3Data(e,u),v.push({pts:c,dts:c,data:n}),u+=n.length):u++;this.remuxer.remux(h,{samples:[]},{samples:v,inputTimeScale:9e4},{samples:[]},t,r,i)}},{key:"destroy",value:function(){}}],[{key:"probe",value:function(e){var t=void 0,r=void 0,i=a.default.getID3Data(e,0);if(i&&void 0!==a.default.getTimeStamp(i))for(t=i.length,r=Math.min(e.length-1,t+100);t<r;t++)if(o.default.probe(e,t))return n.logger.log("MPEG Audio sync word found !"),!0;return!1}}]),e}();t.default=l,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(r(13));var n=function(){function e(t,r,i,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.decryptdata=i,this.discardEPB=n,this.decrypter=new a.default(t,r,{removePKCS7Padding:!1})}return i(e,[{key:"decryptBuffer",value:function(e,t){this.decrypter.decrypt(e,this.decryptdata.key.buffer,this.decryptdata.iv.buffer,t)}},{key:"decryptAacSample",value:function(e,t,r,i){var a=e[t].unit,n=a.subarray(16,a.length-a.length%16),o=n.buffer.slice(n.byteOffset,n.byteOffset+n.length),s=this;this.decryptBuffer(o,function(n){n=new Uint8Array(n),a.set(n,16),i||s.decryptAacSamples(e,t+1,r)})}},{key:"decryptAacSamples",value:function(e,t,r){for(;;t++){if(t>=e.length)return void r();if(!(e[t].unit.length<32)){var i=this.decrypter.isSync();if(this.decryptAacSample(e,t,r,i),!i)return}}}},{key:"getAvcEncryptedData",value:function(e){for(var t=16*Math.floor((e.length-48)/160)+16,r=new Int8Array(t),i=0,a=32;a<=e.length-16;a+=160,i+=16)r.set(e.subarray(a,a+16),i);return r}},{key:"getAvcDecryptedUnit",value:function(e,t){t=new Uint8Array(t);for(var r=0,i=32;i<=e.length-16;i+=160,r+=16)e.set(t.subarray(r,r+16),i);return e}},{key:"decryptAvcSample",value:function(e,t,r,i,a,n){var o=this.discardEPB(a.data),s=this.getAvcEncryptedData(o),l=this;this.decryptBuffer(s.buffer,function(s){a.data=l.getAvcDecryptedUnit(o,s),n||l.decryptAvcSamples(e,t,r+1,i)})}},{key:"decryptAvcSamples",value:function(e,t,r,i){for(;;t++,r=0){if(t>=e.length)return void i();for(var a=e[t].units;!(r>=a.length);r++){var n=a[r];if(!(n.length<=48||1!==n.type&&5!==n.type)){var o=this.decrypter.isSync();if(this.decryptAvcSample(e,t,r,i,n,o),!o)return}}}}}]),e}();t.default=n,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=r(0);var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=t,this.bytesAvailable=t.byteLength,this.word=0,this.bitsAvailable=0}return i(e,[{key:"loadWord",value:function(){var e=this.data,t=this.bytesAvailable,r=e.byteLength-t,i=new Uint8Array(4),a=Math.min(4,t);if(0===a)throw new Error("no bytes available");i.set(e.subarray(r,r+a)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=8*a,this.bytesAvailable-=a}},{key:"skipBits",value:function(e){var t=void 0;this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,e-=(t=e>>3)>>3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)}},{key:"readBits",value:function(e){var t=Math.min(this.bitsAvailable,e),r=this.word>>>32-t;return e>32&&a.logger.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0?this.word<<=t:this.bytesAvailable>0&&this.loadWord(),(t=e-t)>0&&this.bitsAvailable?r<<t|this.readBits(t):r}},{key:"skipLZ",value:function(){var e=void 0;for(e=0;e<this.bitsAvailable;++e)if(0!=(this.word&2147483648>>>e))return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()}},{key:"skipUEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"skipEG",value:function(){this.skipBits(1+this.skipLZ())}},{key:"readUEG",value:function(){var e=this.skipLZ();return this.readBits(e+1)-1}},{key:"readEG",value:function(){var e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}},{key:"readBoolean",value:function(){return 1===this.readBits(1)}},{key:"readUByte",value:function(){return this.readBits(8)}},{key:"readUShort",value:function(){return this.readBits(16)}},{key:"readUInt",value:function(){return this.readBits(32)}},{key:"skipScalingList",value:function(e){var t=8,r=8,i=void 0;for(i=0;i<e;i++)0!==r&&(r=(t+this.readEG()+256)%256),t=0===r?t:r}},{key:"readSPS",value:function(){var e,t,r,i,a=0,n=0,o=0,s=0,l=void 0,u=void 0,d=void 0,f=this.readUByte.bind(this),c=this.readBits.bind(this),h=this.readUEG.bind(this),v=this.readBoolean.bind(this),g=this.skipBits.bind(this),p=this.skipEG.bind(this),y=this.skipUEG.bind(this),m=this.skipScalingList.bind(this);if(f(),e=f(),c(5),g(3),f(),y(),100===e||110===e||122===e||244===e||44===e||83===e||86===e||118===e||128===e){var b=h();if(3===b&&g(1),y(),y(),g(1),v())for(u=3!==b?8:12,d=0;d<u;d++)v()&&m(d<6?16:64)}y();var E=h();if(0===E)h();else if(1===E)for(g(1),p(),p(),l=h(),d=0;d<l;d++)p();y(),g(1),t=h(),r=h(),0===(i=c(1))&&g(1),g(1),v()&&(a=h(),n=h(),o=h(),s=h());var _=[1,1];if(v()&&v())switch(f()){case 1:_=[1,1];break;case 2:_=[12,11];break;case 3:_=[10,11];break;case 4:_=[16,11];break;case 5:_=[40,33];break;case 6:_=[24,11];break;case 7:_=[20,11];break;case 8:_=[32,11];break;case 9:_=[80,33];break;case 10:_=[18,11];break;case 11:_=[15,11];break;case 12:_=[64,33];break;case 13:_=[160,99];break;case 14:_=[4,3];break;case 15:_=[3,2];break;case 16:_=[2,1];break;case 255:_=[f()<<8|f(),f()<<8|f()]}return{width:Math.ceil(16*(t+1)-2*a-2*n),height:(2-i)*(r+1)*16-(i?2:4)*(o+s),pixelRatio:_}}},{key:"readSliceType",value:function(){return this.readUByte(),this.readUEG(),this.readUEG()}}]),e}();t.default=n,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(23)),n=f(r(22)),o=f(r(1)),s=f(r(64)),l=f(r(63)),u=r(0),d=r(2);function f(e){return e&&e.__esModule?e:{default:e}}var c={video:1,audio:2,id3:3,text:4},h=function(){function e(t,r,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.observer=t,this.config=i,this.typeSupported=a,this.remuxer=r,this.sampleAes=null}return i(e,[{key:"setDecryptData",value:function(e){null!=e&&null!=e.key&&"SAMPLE-AES"===e.method?this.sampleAes=new l.default(this.observer,this.config,e,this.discardEPB):this.sampleAes=null}},{key:"resetInitSegment",value:function(t,r,i,a){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack=e.createTrack("video",a),this._audioTrack=e.createTrack("audio",a),this._id3Track=e.createTrack("id3",a),this._txtTrack=e.createTrack("text",a),this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.audioCodec=r,this.videoCodec=i,this._duration=a}},{key:"resetTimeStamp",value:function(){}},{key:"append",value:function(t,r,i,a){var n=void 0,s=t.length,l=void 0,f=void 0,c=void 0,h=void 0,v=!1;this.contiguous=i;var g=this.pmtParsed,p=this._avcTrack,y=this._audioTrack,m=this._id3Track,b=p.pid,E=y.pid,_=m.pid,T=this._pmtId,S=p.pesData,k=y.pesData,R=m.pesData,A=this._parsePAT,w=this._parsePMT,O=this._parsePES,L=this._parseAVCPES.bind(this),D=this._parseAACPES.bind(this),P=this._parseMPEGPES.bind(this),I=this._parseID3PES.bind(this),C=e._syncOffset(t);for(s-=(s+C)%188,n=C;n<s;n+=188)if(71===t[n]){if(l=!!(64&t[n+1]),f=((31&t[n+1])<<8)+t[n+2],(48&t[n+3])>>4>1){if((c=n+5+t[n+4])===n+188)continue}else c=n+4;switch(f){case b:l&&(S&&(h=O(S))&&void 0!==h.pts&&L(h,!1),S={data:[],size:0}),S&&(S.data.push(t.subarray(c,n+188)),S.size+=n+188-c);break;case E:l&&(k&&(h=O(k))&&void 0!==h.pts&&(y.isAAC?D(h):P(h)),k={data:[],size:0}),k&&(k.data.push(t.subarray(c,n+188)),k.size+=n+188-c);break;case _:l&&(R&&(h=O(R))&&void 0!==h.pts&&I(h),R={data:[],size:0}),R&&(R.data.push(t.subarray(c,n+188)),R.size+=n+188-c);break;case 0:l&&(c+=t[c]+1),T=this._pmtId=A(t,c);break;case T:l&&(c+=t[c]+1);var x=w(t,c,!0===this.typeSupported.mpeg||!0===this.typeSupported.mp3,null!=this.sampleAes);(b=x.avc)>0&&(p.pid=b),(E=x.audio)>0&&(y.pid=E,y.isAAC=x.isAAC),(_=x.id3)>0&&(m.pid=_),v&&!g&&(u.logger.log("reparse from beginning"),v=!1,n=C-188),g=this.pmtParsed=!0;break;case 17:case 8191:break;default:v=!0}}else this.observer.trigger(o.default.ERROR,{type:d.ErrorTypes.MEDIA_ERROR,details:d.ErrorDetails.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"});S&&(h=O(S))&&void 0!==h.pts?(L(h,!0),p.pesData=null):p.pesData=S,k&&(h=O(k))&&void 0!==h.pts?(y.isAAC?D(h):P(h),y.pesData=null):(k&&k.size&&u.logger.log("last AAC PES packet truncated,might overlap between fragments"),y.pesData=k),R&&(h=O(R))&&void 0!==h.pts?(I(h),m.pesData=null):m.pesData=R,null==this.sampleAes?this.remuxer.remux(y,p,m,this._txtTrack,r,i,a):this.decryptAndRemux(y,p,m,this._txtTrack,r,i,a)}},{key:"decryptAndRemux",value:function(e,t,r,i,a,n,o){if(e.samples&&e.isAAC){var s=this;this.sampleAes.decryptAacSamples(e.samples,0,function(){s.decryptAndRemuxAvc(e,t,r,i,a,n,o)})}else this.decryptAndRemuxAvc(e,t,r,i,a,n,o)}},{key:"decryptAndRemuxAvc",value:function(e,t,r,i,a,n,o){if(t.samples){var s=this;this.sampleAes.decryptAvcSamples(t.samples,0,0,function(){s.remuxer.remux(e,t,r,i,a,n,o)})}else this.remuxer.remux(e,t,r,i,a,n,o)}},{key:"destroy",value:function(){this._initPTS=this._initDTS=void 0,this._duration=0}},{key:"_parsePAT",value:function(e,t){return(31&e[t+10])<<8|e[t+11]}},{key:"_parsePMT",value:function(e,t,r,i){var a,n=void 0,o={audio:-1,avc:-1,id3:-1,isAAC:!0};for(a=t+3+((15&e[t+1])<<8|e[t+2])-4,t+=12+((15&e[t+10])<<8|e[t+11]);t<a;){switch(n=(31&e[t+1])<<8|e[t+2],e[t]){case 207:if(!i){u.logger.log("unkown stream type:"+e[t]);break}case 15:-1===o.audio&&(o.audio=n);break;case 21:-1===o.id3&&(o.id3=n);break;case 219:if(!i){u.logger.log("unkown stream type:"+e[t]);break}case 27:-1===o.avc&&(o.avc=n);break;case 3:case 4:r?-1===o.audio&&(o.audio=n,o.isAAC=!1):u.logger.log("MPEG audio found, not supported in this browser for now");break;case 36:u.logger.warn("HEVC stream type found, not supported for now");break;default:u.logger.log("unkown stream type:"+e[t])}t+=5+((15&e[t+3])<<8|e[t+4])}return o}},{key:"_parsePES",value:function(e){var t=0,r=void 0,i=void 0,a=void 0,n=void 0,o=void 0,s=void 0,l=void 0,d=void 0,f=e.data;if(!e||0===e.size)return null;for(;f[0].length<19&&f.length>1;){var c=new Uint8Array(f[0].length+f[1].length);c.set(f[0]),c.set(f[1],f[0].length),f[0]=c,f.splice(1,1)}if(1===((r=f[0])[0]<<16)+(r[1]<<8)+r[2]){if((a=(r[4]<<8)+r[5])&&a>e.size-6)return null;192&(i=r[7])&&((s=536870912*(14&r[9])+4194304*(255&r[10])+16384*(254&r[11])+128*(255&r[12])+(254&r[13])/2)>4294967295&&(s-=8589934592),64&i?((l=536870912*(14&r[14])+4194304*(255&r[15])+16384*(254&r[16])+128*(255&r[17])+(254&r[18])/2)>4294967295&&(l-=8589934592),s-l>54e5&&(u.logger.warn(Math.round((s-l)/9e4)+"s delta between PTS and DTS, align them"),s=l)):l=s),d=(n=r[8])+9,e.size-=d,o=new Uint8Array(e.size);for(var h=0,v=f.length;h<v;h++){var g=(r=f[h]).byteLength;if(d){if(d>g){d-=g;continue}r=r.subarray(d),g-=d,d=0}o.set(r,t),t+=g}return a&&(a-=n+3),{data:o,pts:s,dts:l,len:a}}return null}},{key:"pushAccesUnit",value:function(e,t){if(e.units.length&&e.frame){var r=t.samples,i=r.length;!this.config.forceKeyFrameOnDiscontinuity||!0===e.key||t.sps&&(i||this.contiguous)?(e.id=i,r.push(e)):t.dropped++}e.debug.length&&u.logger.log(e.pts+"/"+e.dts+":"+e.debug)}},{key:"_parseAVCPES",value:function(e,t){var r=this,i=this._avcTrack,a=this._parseAVCNALu(e.data),n=void 0,o=this.avcSample,l=void 0,u=!1,d=void 0,f=this.pushAccesUnit.bind(this),c=function(e,t,r,i){return{key:e,pts:t,dts:r,units:[],debug:i}};e.data=null,o&&a.length&&!i.audFound&&(f(o,i),o=this.avcSample=c(!1,e.pts,e.dts,"")),a.forEach(function(t){switch(t.type){case 1:l=!0,o||(o=r.avcSample=c(!0,e.pts,e.dts,"")),o.frame=!0;var a=t.data;if(u&&a.length>4){var h=new s.default(a).readSliceType();2!==h&&4!==h&&7!==h&&9!==h||(o.key=!0)}break;case 5:l=!0,o||(o=r.avcSample=c(!0,e.pts,e.dts,"")),o.key=!0,o.frame=!0;break;case 6:l=!0,(n=new s.default(r.discardEPB(t.data))).readUByte();for(var v=0,g=0,p=!1,y=0;!p&&n.bytesAvailable>1;){v=0;do{v+=y=n.readUByte()}while(255===y);g=0;do{g+=y=n.readUByte()}while(255===y);if(4===v&&0!==n.bytesAvailable){if(p=!0,181===n.readUByte())if(49===n.readUShort())if(1195456820===n.readUInt())if(3===n.readUByte()){var m=n.readUByte(),b=31&m,E=[m,n.readUByte()];for(d=0;d<b;d++)E.push(n.readUByte()),E.push(n.readUByte()),E.push(n.readUByte());r._insertSampleInOrder(r._txtTrack.samples,{type:3,pts:e.pts,bytes:E})}}else if(g<n.bytesAvailable)for(d=0;d<g;d++)n.readUByte()}break;case 7:if(l=!0,u=!0,!i.sps){var _=(n=new s.default(t.data)).readSPS();i.width=_.width,i.height=_.height,i.pixelRatio=_.pixelRatio,i.sps=[t.data],i.duration=r._duration;var T=t.data.subarray(1,4),S="avc1.";for(d=0;d<3;d++){var k=T[d].toString(16);k.length<2&&(k="0"+k),S+=k}i.codec=S}break;case 8:l=!0,i.pps||(i.pps=[t.data]);break;case 9:l=!1,i.audFound=!0,o&&f(o,i),o=r.avcSample=c(!1,e.pts,e.dts,"");break;case 12:l=!1;break;default:l=!1,o&&(o.debug+="unknown NAL "+t.type+" ")}o&&l&&o.units.push(t)}),t&&o&&(f(o,i),this.avcSample=null)}},{key:"_insertSampleInOrder",value:function(e,t){var r=e.length;if(r>0){if(t.pts>=e[r-1].pts)e.push(t);else for(var i=r-1;i>=0;i--)if(t.pts<e[i].pts){e.splice(i,0,t);break}}else e.push(t)}},{key:"_getLastNalUnit",value:function(){var e=this.avcSample,t=void 0;if(!e||0===e.units.length){var r=this._avcTrack.samples;e=r[r.length-1]}if(e){var i=e.units;t=i[i.length-1]}return t}},{key:"_parseAVCNALu",value:function(e){var t=0,r=e.byteLength,i=void 0,a=void 0,n=this._avcTrack,o=n.naluState||0,s=o,l=[],u=void 0,d=-1,f=void 0;for(-1===o&&(d=0,f=31&e[0],o=0,t=1);t<r;)if(i=e[t++],o)if(1!==o)if(i)if(1===i){if(d>=0)u={data:e.subarray(d,t-o-1),type:f},l.push(u);else{var c=this._getLastNalUnit();if(c&&(s&&t<=4-s&&c.state&&(c.data=c.data.subarray(0,c.data.byteLength-s)),(a=t-o-1)>0)){var h=new Uint8Array(c.data.byteLength+a);h.set(c.data,0),h.set(e.subarray(0,a),c.data.byteLength),c.data=h}}t<r?(d=t,f=31&e[t],o=0):o=-1}else o=0;else o=3;else o=i?0:2;else o=i?0:1;if(d>=0&&o>=0&&(u={data:e.subarray(d,r),type:f,state:o},l.push(u)),0===l.length){var v=this._getLastNalUnit();if(v){var g=new Uint8Array(v.data.byteLength+e.byteLength);g.set(v.data,0),g.set(e,v.data.byteLength),v.data=g}}return n.naluState=o,l}},{key:"discardEPB",value:function(e){for(var t,r=e.byteLength,i=[],a=1,n=void 0;a<r-2;)0===e[a]&&0===e[a+1]&&3===e[a+2]?(i.push(a+2),a+=2):a++;if(0===i.length)return e;t=r-i.length,n=new Uint8Array(t);var o=0;for(a=0;a<t;o++,a++)o===i[0]&&(o++,i.shift()),n[a]=e[o];return n}},{key:"_parseAACPES",value:function(e){var t,r,i=this._audioTrack,n=e.data,s=e.pts,l=this.aacOverFlow,f=this.aacLastPTS,c=void 0,h=void 0,v=void 0;if(l){var g=new Uint8Array(l.byteLength+n.byteLength);g.set(l,0),g.set(n,l.byteLength),n=g}for(h=0,r=n.length;h<r-1&&!a.isHeader(n,h);h++);if(h){var p=void 0,y=void 0;if(h<r-1?(p="AAC PES did not start with ADTS header,offset:"+h,y=!1):(p="no ADTS header found in AAC PES",y=!0),u.logger.warn("parsing error:"+p),this.observer.trigger(o.default.ERROR,{type:d.ErrorTypes.MEDIA_ERROR,details:d.ErrorDetails.FRAG_PARSING_ERROR,fatal:y,reason:p}),y)return}if(a.initTrackConfig(i,this.observer,n,h,this.audioCodec),c=0,t=a.getFrameDuration(i.samplerate),l&&f){var m=f+t;Math.abs(m-s)>1&&(u.logger.log("AAC: align PTS for overlapping frames by "+Math.round((m-s)/90)),s=m)}for(;h<r;)if(a.isHeader(n,h)&&h+5<r){var b=a.appendFrame(i,n,h,s,c);if(!b)break;h+=b.length,v=b.sample.pts,c++}else h++;l=h<r?n.subarray(h,r):null,this.aacOverFlow=l,this.aacLastPTS=v}},{key:"_parseMPEGPES",value:function(e){for(var t=e.data,r=t.length,i=0,a=0,o=e.pts;a<r;)if(n.default.isHeader(t,a)){var s=n.default.appendFrame(this._audioTrack,t,a,o,i);if(!s)break;a+=s.length,i++}else a++}},{key:"_parseID3PES",value:function(e){this._id3Track.samples.push(e)}}],[{key:"probe",value:function(t){var r=e._syncOffset(t);return!(r<0)&&(r&&u.logger.warn("MPEG2-TS detected but first sync word found @ offset "+r+", junk ahead ?"),!0)}},{key:"_syncOffset",value:function(e){for(var t=Math.min(1e3,e.length-564),r=0;r<t;){if(71===e[r]&&71===e[r+188]&&71===e[r+376])return r;r++}return-1}},{key:"createTrack",value:function(e,t){return{container:"video"===e||"audio"===e?"video/mp2t":void 0,type:e,id:c[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],len:0,dropped:"video"===e?0:void 0,isAAC:"audio"===e||void 0,duration:"audio"===e?t:void 0}}}]),e}();t.default=h,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(23)),n=r(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r(8));var s=function(){function e(t,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.observer=t,this.config=i,this.remuxer=r}return i(e,[{key:"resetInitSegment",value:function(e,t,r,i){this._audioTrack={container:"audio/adts",type:"audio",id:0,sequenceNumber:0,isAAC:!0,samples:[],len:0,manifestCodec:t,duration:i,inputTimeScale:9e4}}},{key:"resetTimeStamp",value:function(){}},{key:"append",value:function(e,t,r,i){for(var s=this._audioTrack,l=o.default.getID3Data(e,0)||[],u=o.default.getTimeStamp(l),d=Number.isFinite(u)?90*u:9e4*t,f=0,c=d,h=e.length,v=l.length,g=[{pts:c,dts:c,data:l}];v<h-1;)if(a.isHeader(e,v)&&v+5<h){a.initTrackConfig(s,this.observer,e,v,s.manifestCodec);var p=a.appendFrame(s,e,v,d,f);if(!p){n.logger.log("Unable to parse AAC frame");break}v+=p.length,c=p.sample.pts,f++}else o.default.isHeader(e,v)?(l=o.default.getID3Data(e,v),g.push({pts:c,dts:c,data:l}),v+=l.length):v++;this.remuxer.remux(s,{samples:[]},{samples:g,inputTimeScale:9e4},{samples:[]},t,r,i)}},{key:"destroy",value:function(){}}],[{key:"probe",value:function(e){if(!e)return!1;for(var t=(o.default.getID3Data(e,0)||[]).length,r=e.length;t<r;t++)if(a.probe(e,t))return n.logger.log("ADTS sync word found !"),!0;return!1}}]),e}();t.default=s,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();function a(e){var t=e.byteLength,r=t&&new DataView(e).getUint8(t-1);return r?e.slice(0,t-r):e}t.removePadding=a;var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.initTable()}return i(e,[{key:"uint8ArrayToUint32Array_",value:function(e){for(var t=new DataView(e),r=new Uint32Array(4),i=0;i<4;i++)r[i]=t.getUint32(4*i);return r}},{key:"initTable",value:function(){var e=this.sBox,t=this.invSBox,r=this.subMix,i=r[0],a=r[1],n=r[2],o=r[3],s=this.invSubMix,l=s[0],u=s[1],d=s[2],f=s[3],c=new Uint32Array(256),h=0,v=0,g=0;for(g=0;g<256;g++)c[g]=g<128?g<<1:g<<1^283;for(g=0;g<256;g++){var p=v^v<<1^v<<2^v<<3^v<<4;p=p>>>8^255&p^99,e[h]=p,t[p]=h;var y=c[h],m=c[y],b=c[m],E=257*c[p]^16843008*p;i[h]=E<<24|E>>>8,a[h]=E<<16|E>>>16,n[h]=E<<8|E>>>24,o[h]=E,E=16843009*b^65537*m^257*y^16843008*h,l[p]=E<<24|E>>>8,u[p]=E<<16|E>>>16,d[p]=E<<8|E>>>24,f[p]=E,h?(h=y^c[c[c[b^y]]],v^=c[c[v]]):h=v=1}}},{key:"expandKey",value:function(e){for(var t=this.uint8ArrayToUint32Array_(e),r=!0,i=0;i<t.length&&r;)r=t[i]===this.key[i],i++;if(!r){this.key=t;var a=this.keySize=t.length;if(4!==a&&6!==a&&8!==a)throw new Error("Invalid aes key size="+a);var n=this.ksRows=4*(a+6+1),o=void 0,s=void 0,l=this.keySchedule=new Uint32Array(n),u=this.invKeySchedule=new Uint32Array(n),d=this.sBox,f=this.rcon,c=this.invSubMix,h=c[0],v=c[1],g=c[2],p=c[3],y=void 0,m=void 0;for(o=0;o<n;o++)o<a?y=l[o]=t[o]:(m=y,o%a==0?(m=d[(m=m<<8|m>>>24)>>>24]<<24|d[m>>>16&255]<<16|d[m>>>8&255]<<8|d[255&m],m^=f[o/a|0]<<24):a>6&&o%a==4&&(m=d[m>>>24]<<24|d[m>>>16&255]<<16|d[m>>>8&255]<<8|d[255&m]),l[o]=y=(l[o-a]^m)>>>0);for(s=0;s<n;s++)o=n-s,m=3&s?l[o]:l[o-4],u[s]=s<4||o<=4?m:h[d[m>>>24]]^v[d[m>>>16&255]]^g[d[m>>>8&255]]^p[d[255&m]],u[s]=u[s]>>>0}}},{key:"networkToHostOrderSwap",value:function(e){return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24}},{key:"decrypt",value:function(e,t,r,i){for(var n=this.keySize+6,o=this.invKeySchedule,s=this.invSBox,l=this.invSubMix,u=l[0],d=l[1],f=l[2],c=l[3],h=this.uint8ArrayToUint32Array_(r),v=h[0],g=h[1],p=h[2],y=h[3],m=new Int32Array(e),b=new Int32Array(m.length),E=void 0,_=void 0,T=void 0,S=void 0,k=void 0,R=void 0,A=void 0,w=void 0,O=void 0,L=void 0,D=void 0,P=void 0,I=void 0,C=void 0,x=this.networkToHostOrderSwap;t<m.length;){for(O=x(m[t]),L=x(m[t+1]),D=x(m[t+2]),P=x(m[t+3]),k=O^o[0],R=P^o[1],A=D^o[2],w=L^o[3],I=4,C=1;C<n;C++)E=u[k>>>24]^d[R>>16&255]^f[A>>8&255]^c[255&w]^o[I],_=u[R>>>24]^d[A>>16&255]^f[w>>8&255]^c[255&k]^o[I+1],T=u[A>>>24]^d[w>>16&255]^f[k>>8&255]^c[255&R]^o[I+2],S=u[w>>>24]^d[k>>16&255]^f[R>>8&255]^c[255&A]^o[I+3],k=E,R=_,A=T,w=S,I+=4;E=s[k>>>24]<<24^s[R>>16&255]<<16^s[A>>8&255]<<8^s[255&w]^o[I],_=s[R>>>24]<<24^s[A>>16&255]<<16^s[w>>8&255]<<8^s[255&k]^o[I+1],T=s[A>>>24]<<24^s[w>>16&255]<<16^s[k>>8&255]<<8^s[255&R]^o[I+2],S=s[w>>>24]<<24^s[k>>16&255]<<16^s[R>>8&255]<<8^s[255&A]^o[I+3],I+=3,b[t]=x(E^v),b[t+1]=x(S^g),b[t+2]=x(T^p),b[t+3]=x(_^y),v=O,g=L,p=D,y=P,t+=4}return i?a(b.buffer):b.buffer}},{key:"destroy",value:function(){this.key=void 0,this.keySize=void 0,this.ksRows=void 0,this.sBox=void 0,this.invSBox=void 0,this.subMix=void 0,this.invSubMix=void 0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.rcon=void 0}}]),e}();t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();var a=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.subtle=t,this.key=r}return i(e,[{key:"expandKey",value:function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])}}]),e}();t.default=a,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();var a=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.subtle=t,this.aesIV=r}return i(e,[{key:"decrypt",value:function(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)}}]),e}();t.default=a,e.exports=t.default},function(e,t,r){function i(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var i=r(r.s=ENTRY_MODULE);return i.default||i}var a="[\\.|\\-|\\+|\\w|/|@]+",n="\\(\\s*(/\\*.*?\\*/)?\\s*.*?("+a+").*?\\)";function o(e){return(e+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function s(e){return!isNaN(1*e)}function l(e,t,i){var l={};l[i]=[];var u=t.toString(),d=u.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);if(!d)return l;for(var f,c=d[1],h=new RegExp("(\\\\n|\\W)"+o(c)+n,"g");f=h.exec(u);)"dll-reference"!==f[3]&&l[i].push(f[3]);for(h=new RegExp("\\("+o(c)+'\\("(dll-reference\\s('+a+'))"\\)\\)'+n,"g");f=h.exec(u);)e[f[2]]||(l[i].push(f[1]),e[f[2]]=r(f[1]).m),l[f[2]]=l[f[2]]||[],l[f[2]].push(f[4]);for(var v=Object.keys(l),g=0;g<v.length;g++)for(var p=0;p<l[v[g]].length;p++)s(l[v[g]][p])&&(l[v[g]][p]=1*l[v[g]][p]);return l}function u(e){return Object.keys(e).reduce(function(t,r){return t||e[r].length>0},!1)}e.exports=function(e,t){t=t||{};var a={main:r.m},n=t.all?{main:Object.keys(a.main)}:function(e,t){for(var r={main:[t]},i={main:[]},a={main:{}};u(r);)for(var n=Object.keys(r),o=0;o<n.length;o++){var s=n[o],d=r[s].pop();if(a[s]=a[s]||{},!a[s][d]&&e[s][d]){a[s][d]=!0,i[s]=i[s]||[],i[s].push(d);for(var f=l(e,e[s][d],s),c=Object.keys(f),h=0;h<c.length;h++)r[c[h]]=r[c[h]]||[],r[c[h]]=r[c[h]].concat(f[c[h]])}}return i}(a,e),o="";Object.keys(n).filter(function(e){return"main"!==e}).forEach(function(e){for(var t=0;n[e][t];)t++;n[e].push(t),a[e][t]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",o=o+"var "+e+" = ("+i.toString().replace("ENTRY_MODULE",JSON.stringify(t))+")({"+n[e].map(function(t){return JSON.stringify(t)+": "+a[e][t].toString()}).join(",")+"});\n"}),o=o+"new (("+i.toString().replace("ENTRY_MODULE",JSON.stringify(e))+")({"+n.main.map(function(e){return JSON.stringify(e)+": "+a.main[e].toString()}).join(",")+"}))(self);";var s=new window.Blob([o],{type:"text/javascript"});if(t.bare)return s;var d=(window.URL||window.webkitURL||window.mozURL||window.msURL).createObjectURL(s),f=new window.Worker(d);return f.objectURL=d,f}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=E(r(9)),n=r(4),o=E(r(26)),s=E(r(1)),l=r(6),u=E(r(14)),d=E(r(30)),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(5)),c=E(r(20)),h=r(2),v=r(0),g=r(19),p=r(18),y=E(r(55)),m=r(11),b=E(m);function E(e){return e&&e.__esModule?e:{default:e}}var _=function(e){function t(e,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,s.default.MEDIA_ATTACHED,s.default.MEDIA_DETACHING,s.default.MANIFEST_LOADING,s.default.MANIFEST_PARSED,s.default.LEVEL_LOADED,s.default.KEY_LOADED,s.default.FRAG_LOADED,s.default.FRAG_LOAD_EMERGENCY_ABORTED,s.default.FRAG_PARSING_INIT_SEGMENT,s.default.FRAG_PARSING_DATA,s.default.FRAG_PARSED,s.default.ERROR,s.default.AUDIO_TRACK_SWITCHING,s.default.AUDIO_TRACK_SWITCHED,s.default.BUFFER_CREATED,s.default.BUFFER_APPENDED,s.default.BUFFER_FLUSHED));return i.fragmentTracker=r,i.config=e.config,i.audioCodecSwap=!1,i._state=m.State.STOPPED,i.stallReported=!1,i.gapController=null,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,b.default),i(t,[{key:"startLoad",value:function(e){if(this.levels){var t=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.setInterval(100),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var i=r.startLevel;-1===i&&(i=0,this.bitrateTest=!0),this.level=r.nextLoadLevel=i,this.loadedmetadata=!1}t>0&&-1===e&&(v.logger.log("override startPosition with lastCurrentTime @"+t.toFixed(3)),e=t),this.state=m.State.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}else this.forceStartLoad=!0,this.state=m.State.STOPPED}},{key:"stopLoad",value:function(){this.forceStartLoad=!1,function e(t,r,i){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,r,i)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(i):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"stopLoad",this).call(this)}},{key:"doTick",value:function(){switch(this.state){case m.State.BUFFER_FLUSHING:this.fragLoadError=0;break;case m.State.IDLE:this._doTickIdle();break;case m.State.WAITING_LEVEL:var e=this.levels[this.level];e&&e.details&&(this.state=m.State.IDLE);break;case m.State.FRAG_LOADING_WAITING_RETRY:var t=window.performance.now(),r=this.retryDate;(!r||t>=r||this.media&&this.media.seeking)&&(v.logger.log("mediaController: retryDate reached, switch back to IDLE state"),this.state=m.State.IDLE);break;case m.State.ERROR:case m.State.STOPPED:case m.State.FRAG_LOADING:case m.State.PARSING:case m.State.PARSED:case m.State.ENDED:}this._checkBuffer(),this._checkFragmentChanged()}},{key:"_doTickIdle",value:function(){var e=this.hls,t=e.config,r=this.media;if(void 0!==this.levelLastLoaded&&(r||!this.startFragRequested&&t.startFragPrefetch)){var i=void 0;i=this.loadedmetadata?r.currentTime:this.nextLoadPosition;var a=e.nextLoadLevel,o=this.levels[a];if(o){var l=o.bitrate,u=void 0;u=l?Math.max(8*t.maxBufferSize/l,t.maxBufferLength):t.maxBufferLength,u=Math.min(u,t.maxMaxBufferLength);var d=n.BufferHelper.bufferInfo(this.mediaBuffer?this.mediaBuffer:r,i,t.maxBufferHole),f=d.len;if(!(f>=u)){v.logger.trace("buffer length of "+f.toFixed(3)+" is below max of "+u.toFixed(3)+". checking for more payload ..."),this.level=e.nextLoadLevel=a;var c=o.details;if(!c||c.live&&this.levelLastLoaded!==a)this.state=m.State.WAITING_LEVEL;else{if(this._streamEnded(d,c)){var h={};return this.altAudio&&(h.type="video"),this.hls.trigger(s.default.BUFFER_EOS,h),void(this.state=m.State.ENDED)}this._fetchPayloadOrEos(i,d,c)}}}}}},{key:"_fetchPayloadOrEos",value:function(e,t,r){var i=this.fragPrevious,a=this.level,n=r.fragments,o=n.length;if(0!==o){var s=n[0].start,l=n[o-1].start+n[o-1].duration,u=t.end,d=void 0;if(r.initSegment&&!r.initSegment.data)d=r.initSegment;else if(r.live){var f=this.config.initialLiveManifestSize;if(o<f)return void v.logger.warn("Can not start playback of a level, reason: not enough fragments "+o+" < "+f);if(null===(d=this._ensureFragmentAtLivePoint(r,u,s,l,i,n,o)))return}else u<s&&(d=n[0]);d||(d=this._findFragment(s,i,o,n,u,l,r)),d&&(d.encrypted?(v.logger.log("Loading key for "+d.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+a),this._loadKey(d)):(v.logger.log("Loading "+d.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+a+", currentTime:"+e.toFixed(3)+",bufferEnd:"+u.toFixed(3)),this._loadFragment(d)))}}},{key:"_ensureFragmentAtLivePoint",value:function(e,t,r,i,n,o,s){var l=this.hls.config,u=this.media,d=void 0,f=void 0!==l.liveMaxLatencyDuration?l.liveMaxLatencyDuration:l.liveMaxLatencyDurationCount*e.targetduration;if(t<Math.max(r-l.maxFragLookUpTolerance,i-f)){var c=this.liveSyncPosition=this.computeLivePosition(r,e);v.logger.log("buffer end: "+t.toFixed(3)+" is located too far from the end of live sliding playlist, reset currentTime to : "+c.toFixed(3)),t=c,u&&u.readyState&&u.duration>c&&(u.currentTime=c),this.nextLoadPosition=c}if(e.PTSKnown&&t>i&&u&&u.readyState)return null;if(this.startFragRequested&&!e.PTSKnown){if(n)if(e.hasProgramDateTime)v.logger.log("live playlist, switching playlist, load frag with same PDT: "+n.programDateTime),d=(0,p.findFragmentByPDT)(o,n.endProgramDateTime,l.maxFragLookUpTolerance);else{var h=n.sn+1;if(h>=e.startSN&&h<=e.endSN){var g=o[h-e.startSN];n.cc===g.cc&&(d=g,v.logger.log("live playlist, switching playlist, load frag with next SN: "+d.sn))}d||(d=a.default.search(o,function(e){return n.cc-e.cc}))&&v.logger.log("live playlist, switching playlist, load frag with same CC: "+d.sn)}d||(d=o[Math.min(s-1,Math.round(s/2))],v.logger.log("live playlist, switching playlist, unknown, load middle frag : "+d.sn))}return d}},{key:"_findFragment",value:function(e,t,r,i,a,n,o){var s=this.hls.config,l=void 0;if(a<n){var u=a>n-s.maxFragLookUpTolerance?0:s.maxFragLookUpTolerance;l=(0,p.findFragmentByPTS)(t,i,a,u)}else l=i[r-1];if(l){var d=l.sn-o.startSN,f=t&&l.level===t.level,c=i[d-1],h=i[d+1];if(t&&l.sn===t.sn)if(f&&!l.backtracked)if(l.sn<o.endSN){var g=t.deltaPTS;g&&g>s.maxBufferHole&&t.dropped&&d?(l=c,v.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")):(l=h,v.logger.log("SN just loaded, load next one: "+l.sn,l))}else l=null;else l.backtracked&&(h&&h.backtracked?(v.logger.warn("Already backtracked from fragment "+h.sn+", will not backtrack to fragment "+l.sn+". Loading fragment "+h.sn),l=h):(v.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),l.dropped=0,c?(l=c).backtracked=!0:d&&(l=null)))}return l}},{key:"_loadKey",value:function(e){this.state=m.State.KEY_LOADING,this.hls.trigger(s.default.KEY_LOADING,{frag:e})}},{key:"_loadFragment",value:function(e){var t=this.fragmentTracker.getState(e);this.fragCurrent=e,this.startFragRequested=!0,Number.isFinite(e.sn)&&!e.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),e.backtracked||t===l.FragmentState.NOT_LOADED||t===l.FragmentState.PARTIAL?(e.autoLevel=this.hls.autoLevelEnabled,e.bitrateTest=this.bitrateTest,this.hls.trigger(s.default.FRAG_LOADING,{frag:e}),this.demuxer||(this.demuxer=new o.default(this.hls,"main")),this.state=m.State.FRAG_LOADING):t===l.FragmentState.APPENDING&&this._reduceMaxBufferLength(e.duration)&&this.fragmentTracker.removeFragment(e)}},{key:"getBufferedFrag",value:function(e){return this.fragmentTracker.getBufferedFrag(e,d.default.LevelType.MAIN)}},{key:"followingBufferedFrag",value:function(e){return e?this.getBufferedFrag(e.endPTS+.5):null}},{key:"_checkFragmentChanged",value:function(){var e=void 0,t=void 0,r=this.media;if(r&&r.readyState&&!1===r.seeking&&((t=r.currentTime)>this.lastCurrentTime&&(this.lastCurrentTime=t),n.BufferHelper.isBuffered(r,t)?e=this.getBufferedFrag(t):n.BufferHelper.isBuffered(r,t+.1)&&(e=this.getBufferedFrag(t+.1)),e)){var i=e;if(i!==this.fragPlaying){this.hls.trigger(s.default.FRAG_CHANGED,{frag:i});var a=i.level;this.fragPlaying&&this.fragPlaying.level===a||this.hls.trigger(s.default.LEVEL_SWITCHED,{level:a}),this.fragPlaying=i}}}},{key:"immediateLevelSwitch",value:function(){if(v.logger.log("immediateLevelSwitch"),!this.immediateSwitch){this.immediateSwitch=!0;var e=this.media,t=void 0;e?(t=e.paused,e.pause()):t=!0,this.previouslyPaused=t}var r=this.fragCurrent;r&&r.loader&&r.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)}},{key:"immediateLevelSwitchEnd",value:function(){var e=this.media;e&&e.buffered.length&&(this.immediateSwitch=!1,n.BufferHelper.isBuffered(e,e.currentTime)&&(e.currentTime-=1e-4),this.previouslyPaused||e.play())}},{key:"nextLevelSwitch",value:function(){var e=this.media;if(e&&e.readyState){var t,r=void 0,i=void 0;if((t=this.getBufferedFrag(e.currentTime))&&t.startPTS>1&&this.flushMainBuffer(0,t.startPTS-1),e.paused)r=0;else{var a=this.hls.nextLoadLevel,n=this.levels[a],o=this.fragLastKbps;r=o&&this.fragCurrent?this.fragCurrent.duration*n.bitrate/(1e3*o)+1:0}if((i=this.getBufferedFrag(e.currentTime+r))&&(i=this.followingBufferedFrag(i))){var s=this.fragCurrent;s&&s.loader&&s.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(i.maxStartPTS,Number.POSITIVE_INFINITY)}}}},{key:"flushMainBuffer",value:function(e,t){this.state=m.State.BUFFER_FLUSHING;var r={startOffset:e,endOffset:t};this.altAudio&&(r.type="video"),this.hls.trigger(s.default.BUFFER_FLUSHING,r)}},{key:"onMediaAttached",value:function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("seeked",this.onvseeked),t.addEventListener("ended",this.onvended);var r=this.config;this.levels&&r.autoStartLoad&&this.hls.startLoad(r.startPosition),this.gapController=new y.default(r,t,this.fragmentTracker,this.hls)}},{key:"onMediaDetaching",value:function(){var e=this.media;e&&e.ended&&(v.logger.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var t=this.levels;t&&t.forEach(function(e){e.details&&e.details.fragments.forEach(function(e){e.backtracked=void 0})}),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("seeked",this.onvseeked),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.stopLoad()}},{key:"onMediaSeeked",value:function(){var e=this.media,t=e?e.currentTime:void 0;Number.isFinite(t)&&v.logger.log("media seeked to "+t.toFixed(3)),this.tick()}},{key:"onManifestLoading",value:function(){v.logger.log("trigger BUFFER_RESET"),this.hls.trigger(s.default.BUFFER_RESET),this.fragmentTracker.removeAllFragments(),this.stalled=!1,this.startPosition=this.lastCurrentTime=0}},{key:"onManifestParsed",value:function(e){var t=!1,r=!1,i=void 0;e.levels.forEach(function(e){(i=e.audioCodec)&&(-1!==i.indexOf("mp4a.40.2")&&(t=!0),-1!==i.indexOf("mp4a.40.5")&&(r=!0))}),this.audioCodecSwitch=t&&r,this.audioCodecSwitch&&v.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=e.levels,this.startFragRequested=!1;var a=this.config;(a.autoStartLoad||this.forceStartLoad)&&this.hls.startLoad(a.startPosition)}},{key:"onLevelLoaded",value:function(e){var t=e.details,r=e.level,i=this.levels[this.levelLastLoaded],a=this.levels[r],n=t.totalduration,o=0;if(v.logger.log("level "+r+" loaded ["+t.startSN+","+t.endSN+"],duration:"+n),t.live){var l=a.details;l&&t.fragments.length>0?(f.mergeDetails(l,t),o=t.fragments[0].start,this.liveSyncPosition=this.computeLivePosition(o,l),t.PTSKnown&&Number.isFinite(o)?v.logger.log("live playlist sliding:"+o.toFixed(3)):(v.logger.log("live playlist - outdated PTS, unknown sliding"),(0,g.alignStream)(this.fragPrevious,i,t))):(v.logger.log("live playlist - first load, unknown sliding"),t.PTSKnown=!1,(0,g.alignStream)(this.fragPrevious,i,t))}else t.PTSKnown=!1;if(a.details=t,this.levelLastLoaded=r,this.hls.trigger(s.default.LEVEL_UPDATED,{details:t,level:r}),!1===this.startFragRequested){if(-1===this.startPosition||-1===this.lastCurrentTime){var u=t.startTimeOffset;Number.isFinite(u)?(u<0&&(v.logger.log("negative start time offset "+u+", count from end of last fragment"),u=o+n+u),v.logger.log("start time offset found in playlist, adjust startPosition to "+u),this.startPosition=u):t.live?(this.startPosition=this.computeLivePosition(o,t),v.logger.log("configure startPosition to "+this.startPosition)):this.startPosition=0,this.lastCurrentTime=this.startPosition}this.nextLoadPosition=this.startPosition}this.state===m.State.WAITING_LEVEL&&(this.state=m.State.IDLE),this.tick()}},{key:"onKeyLoaded",value:function(){this.state===m.State.KEY_LOADING&&(this.state=m.State.IDLE,this.tick())}},{key:"onFragLoaded",value:function(e){var t=this.fragCurrent,r=this.hls,i=this.levels,a=this.media,n=e.frag;if(this.state===m.State.FRAG_LOADING&&t&&"main"===n.type&&n.level===t.level&&n.sn===t.sn){var l=e.stats,u=i[t.level],d=u.details;if(this.bitrateTest=!1,this.stats=l,v.logger.log("Loaded "+t.sn+" of ["+d.startSN+" ,"+d.endSN+"],level "+t.level),n.bitrateTest&&r.nextLoadLevel)this.state=m.State.IDLE,this.startFragRequested=!1,l.tparsed=l.tbuffered=window.performance.now(),r.trigger(s.default.FRAG_BUFFERED,{stats:l,frag:t,id:"main"}),this.tick();else if("initSegment"===n.sn)this.state=m.State.IDLE,l.tparsed=l.tbuffered=window.performance.now(),d.initSegment.data=e.payload,r.trigger(s.default.FRAG_BUFFERED,{stats:l,frag:t,id:"main"}),this.tick();else{v.logger.log("Parsing "+t.sn+" of ["+d.startSN+" ,"+d.endSN+"],level "+t.level+", cc "+t.cc),this.state=m.State.PARSING,this.pendingBuffering=!0,this.appended=!1,n.bitrateTest&&(n.bitrateTest=!1,this.fragmentTracker.onFragLoaded({frag:n}));var f=!(a&&a.seeking)&&(d.PTSKnown||!d.live),c=d.initSegment?d.initSegment.data:[],h=this._getAudioCodec(u);(this.demuxer=this.demuxer||new o.default(this.hls,"main")).push(e.payload,c,h,u.videoCodec,t,d.totalduration,f)}}this.fragLoadError=0}},{key:"onFragParsingInitSegment",value:function(e){var t=this.fragCurrent,r=e.frag;if(t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===m.State.PARSING){var i=e.tracks,a=void 0,n=void 0;if(i.audio&&this.altAudio&&delete i.audio,n=i.audio){var o=this.levels[this.level].audioCodec,l=navigator.userAgent.toLowerCase();o&&this.audioCodecSwap&&(v.logger.log("swapping playlist audio codec"),o=-1!==o.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),this.audioCodecSwitch&&1!==n.metadata.channelCount&&-1===l.indexOf("firefox")&&(o="mp4a.40.5"),-1!==l.indexOf("android")&&"audio/mpeg"!==n.container&&(o="mp4a.40.2",v.logger.log("Android: force audio codec to "+o)),n.levelCodec=o,n.id=e.id}for(a in(n=i.video)&&(n.levelCodec=this.levels[this.level].videoCodec,n.id=e.id),this.hls.trigger(s.default.BUFFER_CODECS,i),i){n=i[a],v.logger.log("main track:"+a+",container:"+n.container+",codecs[level/parsed]=["+n.levelCodec+"/"+n.codec+"]");var u=n.initSegment;u&&(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(s.default.BUFFER_APPENDING,{type:a,data:u,parent:"main",content:"initSegment"}))}this.tick()}}},{key:"onFragParsingData",value:function(e){var t=this,r=this.fragCurrent,i=e.frag;if(r&&"main"===e.id&&i.sn===r.sn&&i.level===r.level&&("audio"!==e.type||!this.altAudio)&&this.state===m.State.PARSING){var a=this.levels[this.level],n=r;if(Number.isFinite(e.endPTS)||(e.endPTS=e.startPTS+r.duration,e.endDTS=e.startDTS+r.duration),!0===e.hasAudio&&n.addElementaryStream(u.default.ElementaryStreamTypes.AUDIO),!0===e.hasVideo&&n.addElementaryStream(u.default.ElementaryStreamTypes.VIDEO),v.logger.log("Parsed "+e.type+",PTS:["+e.startPTS.toFixed(3)+","+e.endPTS.toFixed(3)+"],DTS:["+e.startDTS.toFixed(3)+"/"+e.endDTS.toFixed(3)+"],nb:"+e.nb+",dropped:"+(e.dropped||0)),"video"===e.type)if(n.dropped=e.dropped,n.dropped)if(n.backtracked)v.logger.warn("Already backtracked on this fragment, appending with the gap",n.sn);else{var o=a.details;if(!o||n.sn!==o.startSN)return v.logger.warn("missing video frame(s), backtracking fragment",n.sn),this.fragmentTracker.removeFragment(n),n.backtracked=!0,this.nextLoadPosition=e.startPTS,this.state=m.State.IDLE,this.fragPrevious=n,void this.tick();v.logger.warn("missing video frame(s) on first frag, appending with gap",n.sn)}else n.backtracked=!1;var l=f.updateFragPTSDTS(a.details,n,e.startPTS,e.endPTS,e.startDTS,e.endDTS),d=this.hls;d.trigger(s.default.LEVEL_PTS_UPDATED,{details:a.details,level:this.level,drift:l,type:e.type,start:e.startPTS,end:e.endPTS}),[e.data1,e.data2].forEach(function(r){r&&r.length&&t.state===m.State.PARSING&&(t.appended=!0,t.pendingBuffering=!0,d.trigger(s.default.BUFFER_APPENDING,{type:e.type,data:r,parent:"main",content:"data"}))}),this.tick()}}},{key:"onFragParsed",value:function(e){var t=this.fragCurrent,r=e.frag;t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===m.State.PARSING&&(this.stats.tparsed=window.performance.now(),this.state=m.State.PARSED,this._checkAppendedParsed())}},{key:"onAudioTrackSwitching",value:function(e){var t=!!e.url,r=e.id;if(!t){if(this.mediaBuffer!==this.media){v.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var i=this.fragCurrent;i.loader&&(v.logger.log("switching to main audio track, cancel main fragment load"),i.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=m.State.IDLE}var a=this.hls;a.trigger(s.default.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),a.trigger(s.default.AUDIO_TRACK_SWITCHED,{id:r}),this.altAudio=!1}}},{key:"onAudioTrackSwitched",value:function(e){var t=e.id,r=!!this.hls.audioTracks[t].url;if(r){var i=this.videoBuffer;i&&this.mediaBuffer!==i&&(v.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=i)}this.altAudio=r,this.tick()}},{key:"onBufferCreated",value:function(e){var t=e.tracks,r=void 0,i=void 0,a=!1;for(var n in t){var o=t[n];"main"===o.id?(i=n,r=o,"video"===n&&(this.videoBuffer=t[n].buffer)):a=!0}a&&r?(v.logger.log("alternate track found, use "+i+".buffered to schedule main fragment loading"),this.mediaBuffer=r.buffer):this.mediaBuffer=this.media}},{key:"onBufferAppended",value:function(e){if("main"===e.parent){var t=this.state;t!==m.State.PARSING&&t!==m.State.PARSED||(this.pendingBuffering=e.pending>0,this._checkAppendedParsed())}}},{key:"_checkAppendedParsed",value:function(){if(!(this.state!==m.State.PARSED||this.appended&&this.pendingBuffering)){var e=this.fragCurrent;if(e){var t=this.mediaBuffer?this.mediaBuffer:this.media;v.logger.log("main buffered : "+c.default.toString(t.buffered)),this.fragPrevious=e;var r=this.stats;r.tbuffered=window.performance.now(),this.fragLastKbps=Math.round(8*r.total/(r.tbuffered-r.tfirst)),this.hls.trigger(s.default.FRAG_BUFFERED,{stats:r,frag:e,id:"main"}),this.state=m.State.IDLE}this.tick()}}},{key:"onError",value:function(e){var t=e.frag||this.fragCurrent;if(!t||"main"===t.type){var r=!!this.media&&n.BufferHelper.isBuffered(this.media,this.media.currentTime)&&n.BufferHelper.isBuffered(this.media,this.media.currentTime+.5);switch(e.details){case h.ErrorDetails.FRAG_LOAD_ERROR:case h.ErrorDetails.FRAG_LOAD_TIMEOUT:case h.ErrorDetails.KEY_LOAD_ERROR:case h.ErrorDetails.KEY_LOAD_TIMEOUT:if(!e.fatal)if(this.fragLoadError+1<=this.config.fragLoadingMaxRetry){var i=Math.min(Math.pow(2,this.fragLoadError)*this.config.fragLoadingRetryDelay,this.config.fragLoadingMaxRetryTimeout);v.logger.warn("mediaController: frag loading failed, retry in "+i+" ms"),this.retryDate=window.performance.now()+i,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.fragLoadError++,this.state=m.State.FRAG_LOADING_WAITING_RETRY}else v.logger.error("mediaController: "+e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.state=m.State.ERROR;break;case h.ErrorDetails.LEVEL_LOAD_ERROR:case h.ErrorDetails.LEVEL_LOAD_TIMEOUT:this.state!==m.State.ERROR&&(e.fatal?(this.state=m.State.ERROR,v.logger.warn("streamController: "+e.details+",switch to "+this.state+" state ...")):e.levelRetry||this.state!==m.State.WAITING_LEVEL||(this.state=m.State.IDLE));break;case h.ErrorDetails.BUFFER_FULL_ERROR:"main"!==e.parent||this.state!==m.State.PARSING&&this.state!==m.State.PARSED||(r?(this._reduceMaxBufferLength(this.config.maxBufferLength),this.state=m.State.IDLE):(v.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"),this.fragCurrent=null,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)))}}}},{key:"_reduceMaxBufferLength",value:function(e){var t=this.config;return t.maxMaxBufferLength>=e&&(t.maxMaxBufferLength/=2,v.logger.warn("main:reduce max buffer length to "+t.maxMaxBufferLength+"s"),!0)}},{key:"_checkBuffer",value:function(){var e=this.media;if(e&&0!==e.readyState){var t=(this.mediaBuffer?this.mediaBuffer:e).buffered;!this.loadedmetadata&&t.length?(this.loadedmetadata=!0,this._seekToStartPos()):this.immediateSwitch?this.immediateLevelSwitchEnd():this.gapController.poll(this.lastCurrentTime,t)}}},{key:"onFragLoadEmergencyAborted",value:function(){this.state=m.State.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tick()}},{key:"onBufferFlushed",value:function(){var e=this.mediaBuffer?this.mediaBuffer:this.media;e&&this.fragmentTracker.detectEvictedFragments(u.default.ElementaryStreamTypes.VIDEO,e.buffered),this.state=m.State.IDLE,this.fragPrevious=null}},{key:"swapAudioCodec",value:function(){this.audioCodecSwap=!this.audioCodecSwap}},{key:"computeLivePosition",value:function(e,t){var r=void 0!==this.config.liveSyncDuration?this.config.liveSyncDuration:this.config.liveSyncDurationCount*t.targetduration;return e+Math.max(0,t.totalduration-r)}},{key:"_seekToStartPos",value:function(){var e=this.media,t=e.currentTime,r=e.seeking?t:this.startPosition;t!==r&&(v.logger.log("target start position not buffered, seek to buffered.start(0) "+r+" from current time "+t+" "),e.currentTime=r)}},{key:"_getAudioCodec",value:function(e){var t=this.config.defaultAudioCodec||e.audioCodec;return this.audioCodecSwap&&(v.logger.log("swapping playlist audio codec"),t&&(t=-1!==t.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5")),t}},{key:"state",set:function(e){if(this.state!==e){var t=this.state;this._state=e,v.logger.log("main stream:"+t+"->"+e),this.hls.trigger(s.default.STREAM_STATE_TRANSITION,{previousState:t,nextState:e})}},get:function(){return this._state}},{key:"currentLevel",get:function(){var e=this.media;if(e){var t=this.getBufferedFrag(e.currentTime);if(t)return t.level}return-1}},{key:"nextBufferedFrag",get:function(){var e=this.media;return e?this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)):null}},{key:"nextLevel",get:function(){var e=this.nextBufferedFrag;return e?e.level:-1}},{key:"liveSyncPosition",get:function(){return this._liveSyncPosition},set:function(e){this._liveSyncPosition=e}}]),t}();t.default=_,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=l(r(1)),n=l(r(3)),o=r(2),s=r(0);function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a.default.KEY_LOADING));return r.loaders={},r.decryptkey=null,r.decrypturl=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),i(t,[{key:"destroy",value:function(){for(var e in this.loaders){var t=this.loaders[e];t&&t.destroy()}this.loaders={},n.default.prototype.destroy.call(this)}},{key:"onKeyLoading",value:function(e){var t=e.frag,r=t.type,i=this.loaders[r],n=t.decryptdata,o=n.uri;if(o!==this.decrypturl||null===this.decryptkey){var l=this.hls.config;i&&(s.logger.warn("abort previous key loader for type:"+r),i.abort()),t.loader=this.loaders[r]=new l.loader(l),this.decrypturl=o,this.decryptkey=null;var u,d,f;u={url:o,frag:t,responseType:"arraybuffer"},d={timeout:l.fragLoadingTimeOut,maxRetry:0,retryDelay:l.fragLoadingRetryDelay,maxRetryDelay:l.fragLoadingMaxRetryTimeout},f={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)},t.loader.load(u,d,f)}else this.decryptkey&&(n.key=this.decryptkey,this.hls.trigger(a.default.KEY_LOADED,{frag:t}))}},{key:"loadsuccess",value:function(e,t,r){var i=r.frag;this.decryptkey=i.decryptdata.key=new Uint8Array(e.data),i.loader=void 0,this.loaders[i.type]=void 0,this.hls.trigger(a.default.KEY_LOADED,{frag:i})}},{key:"loaderror",value:function(e,t){var r=t.frag,i=r.loader;i&&i.abort(),this.loaders[t.type]=void 0,this.hls.trigger(a.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.KEY_LOAD_ERROR,fatal:!1,frag:r,response:e})}},{key:"loadtimeout",value:function(e,t){var r=t.frag,i=r.loader;i&&i.abort(),this.loaders[t.type]=void 0,this.hls.trigger(a.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.KEY_LOAD_TIMEOUT,fatal:!1,frag:r})}}]),t}();t.default=u,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=l(r(1)),n=l(r(3)),o=r(2),s=r(0);function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a.default.FRAG_LOADING));return r.loaders={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),i(t,[{key:"destroy",value:function(){var e=this.loaders;for(var r in e){var i=e[r];i&&i.destroy()}this.loaders={},function e(t,r,i){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,r,i)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(i):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"onFragLoading",value:function(e){var t=e.frag,r=t.type,i=this.loaders,a=this.hls.config,n=a.fLoader,o=a.loader;t.loaded=0;var l=i[r];l&&(s.logger.warn("abort previous fragment loader for type: "+r),l.abort()),l=i[r]=t.loader=a.fLoader?new n(a):new o(a);var u,d,f=void 0;f={url:t.url,frag:t,responseType:"arraybuffer",progressData:!1};var c=t.byteRangeStartOffset,h=t.byteRangeEndOffset;Number.isFinite(c)&&Number.isFinite(h)&&(f.rangeStart=c,f.rangeEnd=h),u={timeout:a.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:a.fragLoadingMaxRetryTimeout},d={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this),onProgress:this.loadprogress.bind(this)},l.load(f,u,d)}},{key:"loadsuccess",value:function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=e.data,o=r.frag;o.loader=void 0,this.loaders[o.type]=void 0,this.hls.trigger(a.default.FRAG_LOADED,{payload:n,frag:o,stats:t,networkDetails:i})}},{key:"loaderror",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=t.frag,n=i.loader;n&&n.abort(),this.loaders[i.type]=void 0,this.hls.trigger(a.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.FRAG_LOAD_ERROR,fatal:!1,frag:t.frag,response:e,networkDetails:r})}},{key:"loadtimeout",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=t.frag,n=i.loader;n&&n.abort(),this.loaders[i.type]=void 0,this.hls.trigger(a.default.ERROR,{type:o.ErrorTypes.NETWORK_ERROR,details:o.ErrorDetails.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t.frag,networkDetails:r})}},{key:"loadprogress",value:function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=t.frag;n.loaded=e.loaded,this.hls.trigger(a.default.FRAG_LOAD_PROGRESS,{frag:n,stats:e,networkDetails:i})}}]),t}();t.default=u,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();var a=/^(\d+)x(\d+)$/,n=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,o=function(){function e(t){for(var r in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),"string"==typeof t&&(t=e.parseAttrList(t)),t)t.hasOwnProperty(r)&&(this[r]=t[r])}return i(e,[{key:"decimalInteger",value:function(e){var t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t}},{key:"hexadecimalInteger",value:function(e){if(this[e]){var t=(this[e]||"0x").slice(2);t=(1&t.length?"0":"")+t;for(var r=new Uint8Array(t.length/2),i=0;i<t.length/2;i++)r[i]=parseInt(t.slice(2*i,2*i+2),16);return r}return null}},{key:"hexadecimalIntegerAsNumber",value:function(e){var t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t}},{key:"decimalFloatingPoint",value:function(e){return parseFloat(this[e])}},{key:"enumeratedString",value:function(e){return this[e]}},{key:"decimalResolution",value:function(e){var t=a.exec(this[e]);if(null!==t)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}}}],[{key:"parseAttrList",value:function(e){var t=void 0,r={};for(n.lastIndex=0;null!==(t=n.exec(e));){var i=t[2];0===i.indexOf('"')&&i.lastIndexOf('"')===i.length-1&&(i=i.slice(1,-1)),r[t[1]]=i}return r}}]),e}();t.default=o,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.endCC=0,this.endSN=0,this.fragments=[],this.initSegment=null,this.live=!0,this.needSidxRanges=!1,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=t,this.version=null}return i(e,[{key:"hasProgramDateTime",get:function(){return!(!this.fragments[0]||!Number.isFinite(this.fragments[0].programDateTime))}}]),e}();t.default=a,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(10)),n=f(r(14)),o=f(r(75)),s=f(r(28)),l=f(r(74)),u=r(0),d=r(27);function f(e){return e&&e.__esModule?e:{default:e}}var c=/#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,h=/#EXT-X-MEDIA:(.*)/g,v=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/|(?!#)([\S+ ?]+)/.source,/|#EXT-X-BYTERANGE:*(.+)/.source,/|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/|#.*/.source].join(""),"g"),g=/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,p=/\.(mp4|m4s|m4v|m4a)$/i,y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"findGroup",value:function(e,t){if(!e)return null;for(var r=null,i=0;i<e.length;i++){var a=e[i];a.id===t&&(r=a)}return r}},{key:"convertAVC1ToAVCOTI",value:function(e){var t=void 0,r=e.split(".");return r.length>2?(t=r.shift()+".",t+=parseInt(r.shift()).toString(16),t+=("000"+parseInt(r.shift()).toString(16)).substr(-4)):t=e,t}},{key:"resolve",value:function(e,t){return a.buildAbsoluteURL(t,e,{alwaysNormalize:!0})}},{key:"parseMasterPlaylist",value:function(t,r){var i=[],a=void 0;function n(e,t){["video","audio"].forEach(function(r){var i=e.filter(function(e){return(0,d.isCodecType)(e,r)});if(i.length){var a=i.filter(function(e){return 0===e.lastIndexOf("avc1",0)||0===e.lastIndexOf("mp4a",0)});t[r+"Codec"]=a.length>0?a[0]:i[0],e=e.filter(function(e){return-1===i.indexOf(e)})}}),t.unknownCodecs=e}for(c.lastIndex=0;null!=(a=c.exec(t));){var o={},s=o.attrs=new l.default(a[1]);o.url=e.resolve(a[2],r);var u=s.decimalResolution("RESOLUTION");u&&(o.width=u.width,o.height=u.height),o.bitrate=s.decimalInteger("AVERAGE-BANDWIDTH")||s.decimalInteger("BANDWIDTH"),o.name=s.NAME,n([].concat((s.CODECS||"").split(/[ ,]+/)),o),o.videoCodec&&-1!==o.videoCodec.indexOf("avc1")&&(o.videoCodec=e.convertAVC1ToAVCOTI(o.videoCodec)),i.push(o)}return i}},{key:"parseMasterPlaylistMedia",value:function(t,r,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=void 0,o=[],s=0;for(h.lastIndex=0;null!==(n=h.exec(t));){var u={},d=new l.default(n[1]);if(d.TYPE===i){if(u.groupId=d["GROUP-ID"],u.name=d.NAME,u.type=i,u.default="YES"===d.DEFAULT,u.autoselect="YES"===d.AUTOSELECT,u.forced="YES"===d.FORCED,d.URI&&(u.url=e.resolve(d.URI,r)),u.lang=d.LANGUAGE,u.name||(u.name=u.lang),a.length){var f=e.findGroup(a,u.groupId);u.audioCodec=f?f.codec:a[0].codec}u.id=s++,o.push(u)}}return o}},{key:"parseLevelPlaylist",value:function(e,t,r,i,a){var d=0,f=0,c=new o.default(t),h=new s.default,y=0,b=null,E=new n.default,_=void 0,T=void 0,S=null;for(v.lastIndex=0;null!==(_=v.exec(e));){var k=_[1];if(k){E.duration=parseFloat(k);var R=(" "+_[2]).slice(1);E.title=R||null,E.tagList.push(R?["INF",k,R]:["INF",k])}else if(_[3]){if(Number.isFinite(E.duration)){var A=d++;E.type=i,E.start=f,E.levelkey=h,E.sn=A,E.level=r,E.cc=y,E.urlId=a,E.baseurl=t,E.relurl=(" "+_[3]).slice(1),m(E,b),c.fragments.push(E),b=E,f+=E.duration,E=new n.default}}else if(_[4]){if(E.rawByteRange=(" "+_[4]).slice(1),b){var w=b.byteRangeEndOffset;w&&(E.lastByteRangeEndOffset=w)}}else if(_[5])E.rawProgramDateTime=(" "+_[5]).slice(1),E.tagList.push(["PROGRAM-DATE-TIME",E.rawProgramDateTime]),null===S&&(S=c.fragments.length);else{for(_=_[0].match(g),T=1;T<_.length&&void 0===_[T];T++);var O=(" "+_[T+1]).slice(1),L=(" "+_[T+2]).slice(1);switch(_[T]){case"#":E.tagList.push(L?[O,L]:[O]);break;case"PLAYLIST-TYPE":c.type=O.toUpperCase();break;case"MEDIA-SEQUENCE":d=c.startSN=parseInt(O);break;case"TARGETDURATION":c.targetduration=parseFloat(O);break;case"VERSION":c.version=parseInt(O);break;case"EXTM3U":break;case"ENDLIST":c.live=!1;break;case"DIS":y++,E.tagList.push(["DIS"]);break;case"DISCONTINUITY-SEQ":y=parseInt(O);break;case"KEY":var D=O,P=new l.default(D),I=P.enumeratedString("METHOD"),C=P.URI,x=P.hexadecimalInteger("IV");I&&(h=new s.default,C&&["AES-128","SAMPLE-AES","SAMPLE-AES-CENC"].indexOf(I)>=0&&(h.method=I,h.baseuri=t,h.reluri=C,h.key=null,h.iv=x));break;case"START":var M=O,F=new l.default(M).decimalFloatingPoint("TIME-OFFSET");Number.isFinite(F)&&(c.startTimeOffset=F);break;case"MAP":var N=new l.default(O);E.relurl=N.URI,E.rawByteRange=N.BYTERANGE,E.baseurl=t,E.level=r,E.type=i,E.sn="initSegment",c.initSegment=E,(E=new n.default).rawProgramDateTime=c.initSegment.rawProgramDateTime;break;default:u.logger.warn("line parsed but not handled: "+_)}}}return(E=b)&&!E.relurl&&(c.fragments.pop(),f-=E.duration),c.totalduration=f,c.averagetargetduration=f/c.fragments.length,c.endSN=d-1,c.startCC=c.fragments[0]?c.fragments[0].cc:0,c.endCC=y,!c.initSegment&&c.fragments.length&&c.fragments.every(function(e){return p.test(e.relurl)})&&(u.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),(E=new n.default).relurl=c.fragments[0].relurl,E.baseurl=t,E.level=r,E.type=i,E.sn="initSegment",c.initSegment=E,c.needSidxRanges=!0),S&&function(e,t){for(var r=e[t],i=t-1;i>=0;i--){var a=e[i];a.programDateTime=r.programDateTime-1e3*a.duration,r=a}}(c.fragments,S),c}}]),e}();function m(e,t){e.rawProgramDateTime?e.programDateTime=Date.parse(e.rawProgramDateTime):t&&t.programDateTime&&(e.programDateTime=t.endProgramDateTime),Number.isFinite(e.programDateTime)||(e.programDateTime=null,e.rawProgramDateTime=null)}t.default=y,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(10)),n=r(2),o=m(r(30)),s=m(r(73)),l=m(r(72)),u=r(6),d=m(r(71)),f=m(r(54)),c=m(r(53)),h=r(52),v=r(0),g=r(51),p=m(r(1)),y=r(21);function m(e){return e&&e.__esModule?e:{default:e}}var b=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),i=t.DefaultConfig;if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");for(var a in i)a in e||(e[a]=i[a]);if(void 0!==e.liveMaxLatencyDurationCount&&e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');if(void 0!==e.liveMaxLatencyDuration&&(e.liveMaxLatencyDuration<=e.liveSyncDuration||void 0===e.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');(0,v.enableLogs)(e.debug),r.config=e,r._autoLevelCapping=-1;var n=r.abrController=new e.abrController(r),h=new e.bufferController(r),g=new e.capLevelController(r),p=new e.fpsController(r),y=new o.default(r),m=new s.default(r),b=new l.default(r),E=new c.default(r),_=r.levelController=new f.default(r),T=new u.FragmentTracker(r),S=[_,r.streamController=new d.default(r,T)],k=e.audioStreamController;k&&S.push(new k(r,T)),r.networkControllers=S;var R=[y,m,b,n,h,g,p,E,T];if(k=e.audioTrackController){var A=new k(r);r.audioTrackController=A,R.push(A)}if(k=e.subtitleTrackController){var w=new k(r);r.subtitleTrackController=w,S.push(w)}if(k=e.emeController){var O=new k(r);r.emeController=O,R.push(O)}return(k=e.subtitleStreamController)&&S.push(new k(r,T)),(k=e.timelineController)&&R.push(new k(r)),r.coreComponents=R,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,y.Observer),i(t,null,[{key:"isSupported",value:function(){return(0,h.isSupported)()}},{key:"version",get:function(){return __VERSION__}},{key:"Events",get:function(){return p.default}},{key:"ErrorTypes",get:function(){return n.ErrorTypes}},{key:"ErrorDetails",get:function(){return n.ErrorDetails}},{key:"DefaultConfig",get:function(){return t.defaultConfig?t.defaultConfig:g.hlsDefaultConfig},set:function(e){t.defaultConfig=e}}]),i(t,[{key:"destroy",value:function(){v.logger.log("destroy"),this.trigger(p.default.DESTROYING),this.detachMedia(),this.coreComponents.concat(this.networkControllers).forEach(function(e){e.destroy()}),this.url=null,this.removeAllListeners(),this._autoLevelCapping=-1}},{key:"attachMedia",value:function(e){v.logger.log("attachMedia"),this.media=e,this.trigger(p.default.MEDIA_ATTACHING,{media:e})}},{key:"detachMedia",value:function(){v.logger.log("detachMedia"),this.trigger(p.default.MEDIA_DETACHING),this.media=null}},{key:"loadSource",value:function(e){e=a.buildAbsoluteURL(window.location.href,e,{alwaysNormalize:!0}),v.logger.log("loadSource:"+e),this.url=e,this.trigger(p.default.MANIFEST_LOADING,{url:e})}},{key:"startLoad",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;v.logger.log("startLoad("+e+")"),this.networkControllers.forEach(function(t){t.startLoad(e)})}},{key:"stopLoad",value:function(){v.logger.log("stopLoad"),this.networkControllers.forEach(function(e){e.stopLoad()})}},{key:"swapAudioCodec",value:function(){v.logger.log("swapAudioCodec"),this.streamController.swapAudioCodec()}},{key:"recoverMediaError",value:function(){v.logger.log("recoverMediaError");var e=this.media;this.detachMedia(),this.attachMedia(e)}},{key:"levels",get:function(){return this.levelController.levels}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(e){v.logger.log("set currentLevel:"+e),this.loadLevel=e,this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(e){v.logger.log("set nextLevel:"+e),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(e){v.logger.log("set loadLevel:"+e),this.levelController.manualLevel=e}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(e){this.levelController.nextLoadLevel=e}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(e){v.logger.log("set firstLevel:"+e),this.levelController.firstLevel=e}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(e){v.logger.log("set startLevel:"+e);-1!==e&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(e){v.logger.log("set autoLevelCapping:"+e),this._autoLevelCapping=e}},{key:"autoLevelEnabled",get:function(){return-1===this.levelController.manualLevel}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){for(var e=this.levels,t=this.config.minAutoBitrate,r=e?e.length:0,i=0;i<r;i++){if((e[i].realBitrate?Math.max(e[i].realBitrate,e[i].bitrate):e[i].bitrate)>t)return i}return 0}},{key:"maxAutoLevel",get:function(){var e=this.levels,t=this.autoLevelCapping;return-1===t&&e&&e.length?e.length-1:t}},{key:"nextAutoLevel",get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(e){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,e)}},{key:"audioTracks",get:function(){var e=this.audioTrackController;return e?e.audioTracks:[]}},{key:"audioTrack",get:function(){var e=this.audioTrackController;return e?e.audioTrack:-1},set:function(e){var t=this.audioTrackController;t&&(t.audioTrack=e)}},{key:"liveSyncPosition",get:function(){return this.streamController.liveSyncPosition}},{key:"subtitleTracks",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTrack:-1},set:function(e){var t=this.subtitleTrackController;t&&(t.subtitleTrack=e)}},{key:"subtitleDisplay",get:function(){var e=this.subtitleTrackController;return!!e&&e.subtitleDisplay},set:function(e){var t=this.subtitleTrackController;t&&(t.subtitleDisplay=e)}}]),t}();t.default=b,e.exports=t.default},function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),a=s(r(78)),n=s(r(77)),o=s(r(31));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.hlsOpts=e.hlsOpts||{};var i=a.default.util,s=r;if(r.browser=o.default.getBrowserVersion(),void 0===s.config.useHls){if("mobile"===a.default.sniffer.device&&"MacIntel"!==navigator.platform&&"Win32"!==navigator.platform||r.browser.indexOf("Safari")>-1)return l(r)}else if(!s.config.useHls)return l(r);Number.isFinite=Number.isFinite||function(e){return"number"==typeof e&&isFinite(e)};var u=void 0;return u=new n.default(r.hlsOpts),r.hls=u,Object.defineProperty(s,"src",{get:function(){return s.currentSrc},set:function(e){i.removeClass(s.root,"xgplayer-is-live");var t=document.querySelector(".xgplayer-live");t&&t.parentNode.removeChild(t);var r=s.paused;s.hls.stopLoad(),s.hls.detachMedia(),s.hls.destroy(),s.hls=new n.default(s.hlsOpts),s.register(e),r?s.hls.loadSource(e):(s.pause(),s.once("pause",function(){s.hls.loadSource(e)}),s.once("canplay",function(){var e=s.video.play();void 0!==e&&e&&e.catch(function(e){})})),s.hls.attachMedia(s.video),s.once("canplay",function(){s.currentTime=0})},configurable:!0}),r.register(r.config.url),r.once("complete",function(){if(u.attachMedia(s.video),s.once("canplay",function(){var e=s.video.play();void 0!==e&&e&&e.catch(function(e){})}),s.config.isLive&&(i.addClass(s.root,"xgplayer-is-live"),!i.findDom(s.root,".xgplayer-live"))){var e=i.createDom("xg-live","正在直播",{},"xgplayer-live");s.controls.appendChild(e)}}),r.once("destroy",function(){u.stopLoad()}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default),i(t,[{key:"register",value:function(e){var t=this.hls,r=a.default.util,i=this;t.on(n.default.Events.MEDIA_ATTACHED,function(){t.loadSource(e)}),t.on(n.default.Events.LEVEL_LOADED,function(e,a){if(!t.inited&&(t.inited=!0,a&&a.details&&a.details.live&&(r.addClass(i.root,"xgplayer-is-live"),!r.findDom(i.root,".xgplayer-live")))){var n=r.createDom("xg-live","正在直播",{},"xgplayer-live");i.controls.appendChild(n)}}),t.on(n.default.Events.ERROR,function(e,r){if(i.emit("HLS_ERROR",{errorType:r.type,errorDetails:r.details,errorFatal:r.fatal}),r.fatal)switch(r.type){case n.default.ErrorTypes.NETWORK_ERROR:t.startLoad();break;case n.default.ErrorTypes.MEDIA_ERROR:t.recoverMediaError();break;default:i.emit("error",r)}}),this._statistics()}},{key:"_statistics",value:function(){var e={speed:0,playerType:"HlsPlayer"},t={videoDataRate:0,audioDataRate:0},r=this.hls,i=this;r.on(n.default.Events.FRAG_LOAD_PROGRESS,function(t,r){e.speed=r.stats.loaded/1e3}),r.on(n.default.Events.FRAG_PARSING_DATA,function(e,r){"video"===r.type&&(t.fps=parseInt(r.nb/(r.endPTS-r.startPTS)))}),r.on(n.default.Events.FRAG_PARSING_INIT_SEGMENT,function(e,r){if(t.hasAudio=!(!r.tracks||!r.tracks.audio),t.hasVideo=!(!r.tracks||!r.tracks.audio),t.hasAudio){var a=r.tracks.audio;t.audioChannelCount=a.metadata&&a.metadata.channelCount?a.metadata.channelCount:0,t.audioCodec=a.codec}if(t.hasVideo){var n=r.tracks.video;t.videoCodec=n.codec,t.width=n.metadata&&n.metadata.width?n.metadata.width:0,t.height=n.metadata&&n.metadata.height?n.metadata.height:0}t.duration=r.frag&&r.frag.duration?r.frag.duration:0,t.level=r.frag&&r.frag.level?r.frag.level:0,(t.videoCodec||t.audioCodec)&&(t.mimeType='video/hls; codecs="'+t.videoCodec+";"+t.audioCodec+'"'),i.mediainfo=t,i.emit("media_info",t)}),this._statisticsTimmer=setInterval(function(){i.emit("statistics_info",e),e.speed=0},1e3)}},{key:"destroy",value:function(){(function e(t,r,i){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,r);if(void 0===a){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,r,i)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(i):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),clearInterval(this._statisticsTimmer)}}]),t}();u.isSupported=n.default.isSupported,t.default=u,e.exports=t.default},function(e,t,r){e.exports=r(79)}])});

/***/ }),

/***/ "./node_modules/_xgplayer@2.6.5@xgplayer/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/_xgplayer@2.6.5@xgplayer/dist/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _proxy = __webpack_require__(10);

var _proxy2 = _interopRequireDefault(_proxy);

var _util = __webpack_require__(3);

var _util2 = _interopRequireDefault(_util);

var _database = __webpack_require__(30);

var _database2 = _interopRequireDefault(_database);

var _sniffer = __webpack_require__(6);

var _sniffer2 = _interopRequireDefault(_sniffer);

var _error = __webpack_require__(4);

var _error2 = _interopRequireDefault(_error);

var _draggabilly = __webpack_require__(31);

var _draggabilly2 = _interopRequireDefault(_draggabilly);

var _url = __webpack_require__(36);

var _downloadjs = __webpack_require__(37);

var _downloadjs2 = _interopRequireDefault(_downloadjs);

var _package = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Proxy) {
  _inherits(Player, _Proxy);

  function Player(options) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, options));

    _this.config = _util2.default.deepCopy({
      width: 600,
      height: 337.5,
      ignores: [],
      whitelist: [],
      lang: (document.documentElement.getAttribute('lang') || navigator.language || 'zh-cn').toLocaleLowerCase(),
      inactive: 3000,
      volume: 0.6,
      controls: true,
      controlsList: ['nodownload']
    }, options);
    _this.version = _package.version;
    _this.userTimer = null;
    _this.waitTimer = null;
    _this.database = new _database2.default();
    _this.history = [];
    _this.isProgressMoving = false;
    _this.root = _util2.default.findDom(document, '#' + _this.config.id);
    _this.controls = _util2.default.createDom('xg-controls', '', {
      unselectable: 'on',
      onselectstart: 'return false'
    }, 'xgplayer-controls');
    if (_this.config.isShowControl) {
      _this.controls.style.display = 'none';
    }
    if (!_this.root) {
      var el = _this.config.el;
      if (el && el.nodeType === 1) {
        _this.root = el;
      } else {
        var _ret;

        _this.emit('error', new _error2.default({
          type: 'use',
          errd: {
            line: 45,
            handle: 'Constructor',
            msg: 'container id can\'t be empty'
          },
          vid: _this.config.vid
        }));
        console.error('container id can\'t be empty');
        return _ret = false, _possibleConstructorReturn(_this, _ret);
      }
    }
    // this.rootBackup = util.copyDom(this.root)
    _util2.default.addClass(_this.root, 'xgplayer xgplayer-' + _sniffer2.default.device + ' xgplayer-nostart ' + (_this.config.controls ? '' : 'no-controls'));
    _this.root.appendChild(_this.controls);
    if (_this.config.fluid) {
      _this.root.style['max-width'] = '100%';
      _this.root.style['width'] = '100%';
      _this.root.style['height'] = '0';
      _this.root.style['padding-top'] = _this.config.height * 100 / _this.config.width + '%';

      _this.video.style['position'] = 'absolute';
      _this.video.style['top'] = '0';
      _this.video.style['left'] = '0';
    } else {
      // this.root.style.width = `${this.config.width}px`
      // this.root.style.height = `${this.config.height}px`
      if (_this.config.width) {
        if (typeof _this.config.width !== 'number') {
          _this.root.style.width = _this.config.width;
        } else {
          _this.root.style.width = _this.config.width + 'px';
        }
      }
      if (_this.config.height) {
        if (typeof _this.config.height !== 'number') {
          _this.root.style.height = _this.config.height;
        } else {
          _this.root.style.height = _this.config.height + 'px';
        }
      }
    }
    if (_this.config.execBeforePluginsCall) {
      _this.config.execBeforePluginsCall.forEach(function (item) {
        item.call(_this, _this);
      });
    }
    if (_this.config.controlStyle && _util2.default.typeOf(_this.config.controlStyle) === 'String') {
      var self = _this;
      fetch(self.config.controlStyle, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }).then(function (res) {
        if (res.ok) {
          res.json().then(function (obj) {
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop)) {
                self.config[prop] = obj[prop];
              }
            }
            self.pluginsCall();
          });
        }
      }).catch(function (err) {
        console.log('Fetch错误:' + err);
      });
    } else {
      _this.pluginsCall();
    }
    _this.ev.forEach(function (item) {
      var evName = Object.keys(item)[0];
      var evFunc = _this[item[evName]];
      if (evFunc) {
        _this.on(evName, evFunc);
      }
    });

    ['focus', 'blur'].forEach(function (item) {
      _this.on(item, _this['on' + item.charAt(0).toUpperCase() + item.slice(1)]);
    });
    var player = _this;
    _this.mousemoveFunc = function () {
      player.emit('focus');
      if (!player.config.closeFocusVideoFocus) {
        player.video.focus();
      }
    };
    _this.root.addEventListener('mousemove', _this.mousemoveFunc);
    _this.playFunc = function () {
      player.emit('focus');
      if (!player.config.closePlayVideoFocus) {
        player.video.focus();
      }
    };
    player.once('play', _this.playFunc);

    _this.getVideoSize = function () {
      if (this.video.videoWidth && this.video.videoHeight) {
        var containerSize = player.root.getBoundingClientRect();
        if (player.config.fitVideoSize === 'auto') {
          if (containerSize.width / containerSize.height > this.video.videoWidth / this.video.videoHeight) {
            player.root.style.height = this.video.videoHeight / this.video.videoWidth * containerSize.width + 'px';
          } else {
            player.root.style.width = this.video.videoWidth / this.video.videoHeight * containerSize.height + 'px';
          }
        } else if (player.config.fitVideoSize === 'fixWidth') {
          player.root.style.height = this.video.videoHeight / this.video.videoWidth * containerSize.width + 'px';
        } else if (player.config.fitVideoSize === 'fixHeight') {
          player.root.style.width = this.video.videoWidth / this.video.videoHeight * containerSize.height + 'px';
        }
      }
    };
    player.once('loadeddata', _this.getVideoSize);

    setTimeout(function () {
      _this.emit('ready');
      _this.isReady = true;
    }, 0);

    if (!_this.config.keyShortcut || _this.config.keyShortcut === 'on') {
      ['video', 'controls'].forEach(function (item) {
        player[item].addEventListener('keydown', function (e) {
          player.onKeydown(e, player);
        });
      });
    }
    if (_this.config.videoInit) {
      if (_util2.default.hasClass(_this.root, 'xgplayer-nostart')) {
        _this.start();
      }
    }
    if (player.config.rotate) {
      player.on('requestFullscreen', _this.updateRotateDeg);
      player.on('exitFullscreen', _this.updateRotateDeg);
    }

    function onDestroy() {
      player.root.removeEventListener('mousemove', player.mousemoveFunc);
      player.off('destroy', onDestroy);
    }
    player.once('destroy', onDestroy);
    return _this;
  }

  _createClass(Player, [{
    key: 'start',
    value: function start() {
      var _this2 = this;

      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.url;

      var root = this.root;
      var player = this;
      if (!url || url === '') {
        this.emit('urlNull');
      }
      this.logParams.playSrc = url;
      this.canPlayFunc = function () {
        var playPromise = player.play();
        if (playPromise !== undefined && playPromise) {
          playPromise.then(function () {
            player.emit('autoplay started');
          }).catch(function () {
            player.emit('autoplay was prevented');
            Player.util.addClass(player.root, 'xgplayer-is-autoplay');
          });
        }
        player.off('canplay', player.canPlayFunc);
      };
      if (_util2.default.typeOf(url) === 'String') {
        if (url.indexOf('blob:') > -1 && url === this.video.src) {
          //在Chromium环境下用mse url给video二次赋值会导致错误
        } else {
          this.video.src = url;
        }
      } else {
        url.forEach(function (item) {
          _this2.video.appendChild(_util2.default.createDom('source', '', {
            src: '' + item.src,
            type: '' + (item.type || '')
          }));
        });
      }
      this.logParams.pt = new Date().getTime();
      this.logParams.vt = this.logParams.pt;
      this.loadeddataFunc = function () {
        player.logParams.vt = new Date().getTime();
        if (player.logParams.pt > player.logParams.vt) {
          player.logParams.pt = player.logParams.vt;
        }
        player.logParams.vd = player.video.duration;
      };
      this.once('loadeddata', this.loadeddataFunc);
      if (this.config.autoplay) {
        this.on('canplay', this.canPlayFunc);
      }
      root.insertBefore(this.video, root.firstChild);
      setTimeout(function () {
        _this2.emit('complete');
      }, 1);
    }
  }, {
    key: 'reload',
    value: function reload() {
      this.video.load();
      this.reloadFunc = function () {
        // eslint-disable-next-line handle-callback-err
        var playPromise = this.play();
        if (playPromise !== undefined && playPromise) {
          playPromise.catch(function (err) {});
        }
      };
      this.once('loadeddata', this.reloadFunc);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      var isDelDom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var player = this;
      clearInterval(this.bulletResizeTimer);
      for (var k in this._interval) {
        clearInterval(this._interval[k]);
        this._interval[k] = null;
      }
      this.ev.forEach(function (item) {
        var evName = Object.keys(item)[0];
        var evFunc = _this3[item[evName]];
        if (evFunc) {
          _this3.off(evName, evFunc);
        }
      });
      if (this.loadeddataFunc) {
        this.off('loadeddata', this.loadeddataFunc);
      }
      if (this.reloadFunc) {
        this.off('loadeddata', this.reloadFunc);
      }
      if (this.replayFunc) {
        this.off('play', this.replayFunc);
      }
      if (this.playFunc) {
        this.off('play', this.playFunc);
      }
      if (this.getVideoSize) {
        this.off('loadeddata', this.getVideoSize);
      };
      ['focus', 'blur'].forEach(function (item) {
        _this3.off(item, _this3['on' + item.charAt(0).toUpperCase() + item.slice(1)]);
      });
      if (!this.config.keyShortcut || this.config.keyShortcut === 'on') {
        ['video', 'controls'].forEach(function (item) {
          if (_this3[item]) {
            _this3[item].removeEventListener('keydown', function (e) {
              player.onKeydown(e, player);
            });
          }
        });
      }

      function destroyFunc() {
        this.emit('destroy');
        // this.root.id = this.root.id + '_del'
        // parentNode.insertBefore(this.rootBackup, this.root)

        // fix video destroy https://stackoverflow.com/questions/3258587/how-to-properly-unload-destroy-a-video-element
        this.video.removeAttribute('src'); // empty source
        this.video.load();
        if (isDelDom) {
          // parentNode.removeChild(this.root)
          this.root.innerHTML = '';
          var classNameList = this.root.className.split(' ');
          if (classNameList.length > 0) {
            this.root.className = classNameList.filter(function (name) {
              return name.indexOf('xgplayer') < 0;
            }).join(' ');
          } else {
            this.root.className = '';
          }
        }
        for (var _k in this) {
          // if (k !== 'config') {
          delete this[_k];
          // }
        }
        this.off('pause', destroyFunc);
      }

      if (!this.paused) {
        this.pause();
        this.once('pause', destroyFunc);
      } else {
        destroyFunc.call(this);
      }
      _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'replay',
    value: function replay() {
      var self = this;
      var _replay = this._replay;
      // ie9 bugfix
      _util2.default.removeClass(this.root, 'xgplayer-ended');
      this.logParams = {
        bc: 0,
        bu_acu_t: 0,
        played: [],
        pt: new Date().getTime(),
        vt: new Date().getTime(),
        vd: 0
      };
      this.logParams.pt = new Date().getTime();
      this.logParams.vt = this.logParams.pt;
      this.replayFunc = function () {
        self.logParams.vt = new Date().getTime();
        if (self.logParams.pt > self.logParams.vt) {
          self.logParams.pt = self.logParams.vt;
        }
        self.logParams.vd = self.video.duration;
      };
      this.once('play', this.replayFunc);
      this.logParams.playSrc = this.video.currentSrc;
      if (_replay && _replay instanceof Function) {
        _replay();
      } else {
        this.currentTime = 0;
        // eslint-disable-next-line handle-callback-err
        var playPromise = this.play();
        if (playPromise !== undefined && playPromise) {
          playPromise.catch(function (err) {});
        }
      }
    }
  }, {
    key: 'getFullscreen',
    value: function getFullscreen(el) {
      var player = this;
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen(window.Element.ALLOW_KEYBOARD_INPUT);
      } else if (player.video.webkitSupportsFullscreen) {
        player.video.webkitEnterFullscreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      } else {
        _util2.default.addClass(el, 'xgplayer-is-cssfullscreen');
      }
    }
  }, {
    key: 'exitFullscreen',
    value: function exitFullscreen(el) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      _util2.default.removeClass(el, 'xgplayer-is-cssfullscreen');
    }
  }, {
    key: 'getCssFullscreen',
    value: function getCssFullscreen() {
      var player = this;
      if (player.config.fluid) {
        player.root.style['padding-top'] = '';
      }
      _util2.default.addClass(player.root, 'xgplayer-is-cssfullscreen');
      player.emit('requestCssFullscreen');
    }
  }, {
    key: 'exitCssFullscreen',
    value: function exitCssFullscreen() {
      var player = this;
      if (player.config.fluid) {
        player.root.style['width'] = '100%';
        player.root.style['height'] = '0';
        player.root.style['padding-top'] = player.config.height * 100 / player.config.width + '%';
      }
      _util2.default.removeClass(player.root, 'xgplayer-is-cssfullscreen');
      player.emit('exitCssFullscreen');
    }
  }, {
    key: 'getRotateFullscreen',
    value: function getRotateFullscreen() {
      var player = this;
      document.documentElement.style.width = '100%';
      document.documentElement.style.height = '100%';
      if (player.root && !Player.util.hasClass(player.root, 'xgplayer-rotate-fullscreen')) {
        Player.util.addClass(player.root, 'xgplayer-rotate-fullscreen');
      }
      player.emit('getRotateFullscreen');
    }
  }, {
    key: 'exitRotateFullscreen',
    value: function exitRotateFullscreen() {
      var player = this;
      document.documentElement.style.width = 'unset';
      document.documentElement.style.height = 'unset';
      if (player.root && Player.util.hasClass(player.root, 'xgplayer-rotate-fullscreen')) {
        Player.util.removeClass(player.root, 'xgplayer-rotate-fullscreen');
      }
      player.emit('exitRotateFullscreen');
    }
  }, {
    key: 'download',
    value: function download() {
      var url = (0, _url.getAbsoluteURL)(this.config.url);
      (0, _downloadjs2.default)(url);
    }
  }, {
    key: 'pluginsCall',
    value: function pluginsCall() {
      var _this4 = this;

      var self = this;
      if (Player.plugins) {
        var ignores = this.config.ignores;
        Object.keys(Player.plugins).forEach(function (name) {
          var descriptor = Player.plugins[name];
          if (!ignores.some(function (item) {
            return name === item || name === 's_' + item;
          })) {
            if (['pc', 'tablet', 'mobile'].some(function (type) {
              return type === name;
            })) {
              if (name === _sniffer2.default.device) {
                setTimeout(function () {
                  descriptor.call(self, self);
                }, 0);
              }
            } else {
              descriptor.call(_this4, _this4);
            }
          }
        });
      }
    }
  }, {
    key: 'getPIP',
    value: function getPIP() {
      // let ro = this.root.getBoundingClientRect()
      // let Top = ro.top
      // let Left = ro.left
      var dragLay = _util2.default.createDom('xg-pip-lay', '<div></div>', {}, 'xgplayer-pip-lay');
      this.root.appendChild(dragLay);
      var dragHandle = _util2.default.createDom('xg-pip-drag', '<div class="drag-handle"><span>点击按住可拖动视频</span></div>', { tabindex: 9 }, 'xgplayer-pip-drag');
      this.root.appendChild(dragHandle);
      // eslint-disable-next-line no-unused-vars
      var draggie = new _draggabilly2.default('.xgplayer', {
        handle: '.drag-handle'
      });
      _util2.default.addClass(this.root, 'xgplayer-pip-active');
      this.root.style.right = 0;
      this.root.style.bottom = '200px';
      this.root.style.top = '';
      this.root.style.left = '';
      this.root.style.width = '320px';
      this.root.style.height = '180px';
      if (this.config.pipConfig) {
        if (this.config.pipConfig.top !== undefined) {
          this.root.style.top = this.config.pipConfig.top + 'px';
          this.root.style.bottom = '';
        }
        if (this.config.pipConfig.bottom !== undefined) {
          this.root.style.bottom = this.config.pipConfig.bottom + 'px';
        }
        if (this.config.pipConfig.left !== undefined) {
          this.root.style.left = this.config.pipConfig.left + 'px';
          this.root.style.right = '';
        }
        if (this.config.pipConfig.right !== undefined) {
          this.root.style.right = this.config.pipConfig.right + 'px';
        }
        if (this.config.pipConfig.width !== undefined) {
          this.root.style.width = this.config.pipConfig.width + 'px';
        }
        if (this.config.pipConfig.height !== undefined) {
          this.root.style.height = this.config.pipConfig.height + 'px';
        }
      }
      if (this.config.fluid) {
        this.root.style['padding-top'] = '';
      }
      var player = this;
      ['click', 'touchend'].forEach(function (item) {
        dragLay.addEventListener(item, function (e) {
          e.preventDefault();
          e.stopPropagation();
          player.exitPIP();
          // player.root.style.top = `${Top}px`
          // player.root.style.left = `${Left}px`
        });
      });
    }
  }, {
    key: 'exitPIP',
    value: function exitPIP() {
      _util2.default.removeClass(this.root, 'xgplayer-pip-active');
      this.root.style.right = '';
      this.root.style.bottom = '';
      this.root.style.top = '';
      this.root.style.left = '';
      if (this.config.fluid) {
        this.root.style['width'] = '100%';
        this.root.style['height'] = '0';
        this.root.style['padding-top'] = this.config.height * 100 / this.config.width + '%';
      } else {
        if (this.config.width) {
          if (typeof this.config.width !== 'number') {
            this.root.style.width = this.config.width;
          } else {
            this.root.style.width = this.config.width + 'px';
          }
        }
        if (this.config.height) {
          if (typeof this.config.height !== 'number') {
            this.root.style.height = this.config.height;
          } else {
            this.root.style.height = this.config.height + 'px';
          }
        }
      }

      var dragLay = _util2.default.findDom(this.root, '.xgplayer-pip-lay');
      if (dragLay && dragLay.parentNode) {
        dragLay.parentNode.removeChild(dragLay);
      }
      var dragHandle = _util2.default.findDom(this.root, '.xgplayer-pip-drag');
      if (dragHandle && dragHandle.parentNode) {
        dragHandle.parentNode.removeChild(dragHandle);
      }
    }
  }, {
    key: 'updateRotateDeg',
    value: function updateRotateDeg() {
      var player = this;
      if (!player.rotateDeg) {
        player.rotateDeg = 0;
      }

      var width = player.root.offsetWidth;
      var height = player.root.offsetHeight;
      var targetWidth = player.video.videoWidth;
      var targetHeight = player.video.videoHeight;

      if (!player.config.rotate.innerRotate && player.config.rotate.controlsFix) {
        player.root.style.width = height + 'px';
        player.root.style.height = width + 'px';
      }

      var scale = void 0;
      if (player.rotateDeg === 0.25 || player.rotateDeg === 0.75) {
        if (player.config.rotate.innerRotate) {
          if (targetWidth / targetHeight > height / width) {
            // 旋转后纵向撑满
            var videoWidth = 0;
            if (targetHeight / targetWidth > height / width) {
              // 旋转前是纵向撑满
              videoWidth = height * targetWidth / targetHeight;
            } else {
              // 旋转前是横向撑满
              videoWidth = width;
            }
            scale = height / videoWidth;
          } else {
            // 旋转后横向撑满
            var videoHeight = 0;
            if (targetHeight / targetWidth > height / width) {
              // 旋转前是纵向撑满
              videoHeight = height;
            } else {
              // 旋转前是横向撑满
              videoHeight = width * targetHeight / targetWidth;
            }
            scale = width / videoHeight;
          }
        } else {
          if (width >= height) {
            scale = width / height;
          } else {
            scale = height / width;
          }
        }
        scale = parseFloat(scale.toFixed(5));
      } else {
        scale = 1;
      }

      if (player.config.rotate.innerRotate) {
        player.video.style.transformOrigin = 'center center';
        player.video.style.transform = 'rotate(' + player.rotateDeg + 'turn) scale(' + scale + ')';
        player.video.style.webKitTransform = 'rotate(' + player.rotateDeg + 'turn) scale(' + scale + ')';
      } else {
        if (player.config.rotate.controlsFix) {
          player.video.style.transformOrigin = 'center center';
          player.video.style.transform = 'rotate(' + player.rotateDeg + 'turn) scale(' + scale + ')';
          player.video.style.webKitTransform = 'rotate(' + player.rotateDeg + 'turn) scale(' + scale + ')';
        } else {
          player.root.style.transformOrigin = 'center center';
          player.root.style.transform = 'rotate(' + player.rotateDeg + 'turn) scale(' + 1 + ')';
          player.root.style.webKitTransform = 'rotate(' + player.rotateDeg + 'turn) scale(' + 1 + ')';
        }
      }
    }
  }, {
    key: 'rotate',
    value: function rotate() {
      var clockwise = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var innerRotate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var times = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      var player = this;
      if (!player.rotateDeg) {
        player.rotateDeg = 0;
      }
      var factor = clockwise ? 1 : -1;

      player.rotateDeg = (player.rotateDeg + 1 + factor * 0.25 * times) % 1;
      this.updateRotateDeg();

      player.emit('rotate', player.rotateDeg * 360);
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      var player = this;
      _util2.default.removeClass(this.root, 'xgplayer-inactive');
      if (player.userTimer) {
        clearTimeout(player.userTimer);
      }
      player.userTimer = setTimeout(function () {
        player.emit('blur');
      }, player.config.inactive);
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      // this.video.blur()
      if (!this.paused && !this.ended && !this.config.closeInactive) {
        _util2.default.addClass(this.root, 'xgplayer-inactive');
      }
    }
  }, {
    key: 'onPlay',
    value: function onPlay() {
      _util2.default.addClass(this.root, 'xgplayer-isloading');
      _util2.default.addClass(this.root, 'xgplayer-playing');
      _util2.default.removeClass(this.root, 'xgplayer-pause');
    }
  }, {
    key: 'onPause',
    value: function onPause() {
      _util2.default.addClass(this.root, 'xgplayer-pause');
      if (this.userTimer) {
        clearTimeout(this.userTimer);
      }
      this.emit('focus');
    }
  }, {
    key: 'onEnded',
    value: function onEnded() {
      _util2.default.addClass(this.root, 'xgplayer-ended');
      _util2.default.removeClass(this.root, 'xgplayer-playing');
    }
  }, {
    key: 'onSeeking',
    value: function onSeeking() {
      this.isSeeking = true;
      // 兼容IE下无法触发waiting事件的问题 seeking的时候直接出发waiting
      this.onWaiting();
      // util.addClass(this.root, 'seeking');
    }
  }, {
    key: 'onTimeupdate',
    value: function onTimeupdate() {
      // for ie,playing fired before waiting
      if (this.waitTimer) {
        clearTimeout(this.waitTimer);
      }
      _util2.default.removeClass(this.root, 'xgplayer-isloading');
    }
  }, {
    key: 'onSeeked',
    value: function onSeeked() {
      // for ie,playing fired before waiting
      this.isSeeking = false;
      if (this.waitTimer) {
        clearTimeout(this.waitTimer);
      }
      _util2.default.removeClass(this.root, 'xgplayer-isloading');
    }
  }, {
    key: 'onWaiting',
    value: function onWaiting() {
      var self = this;
      if (self.waitTimer) {
        clearTimeout(self.waitTimer);
      }
      if (self.checkTimer) {
        clearInterval(self.checkTimer);
        self.checkTimer = null;
      }
      var time = self.currentTime;
      self.waitTimer = setTimeout(function () {
        _util2.default.addClass(self.root, 'xgplayer-isloading');
        self.checkTimer = setInterval(function () {
          if (self.currentTime !== time) {
            _util2.default.removeClass(this.root, 'xgplayer-isloading');
            clearInterval(self.checkTimer);
            self.checkTimer = null;
          }
        }, 1000);
      }, 500);
    }
  }, {
    key: 'onPlaying',
    value: function onPlaying() {
      // 兼容safari下无法自动播放会触发该事件的场景
      if (this.paused) {
        return;
      }
      this.isSeeking = false;
      if (this.waitTimer) {
        clearTimeout(this.waitTimer);
      }
      _util2.default.removeClass(this.root, 'xgplayer-isloading xgplayer-nostart xgplayer-pause xgplayer-ended xgplayer-is-error xgplayer-replay');
      _util2.default.addClass(this.root, 'xgplayer-playing');
    }
  }, {
    key: 'onKeydown',
    value: function onKeydown(event, player) {
      // let player = this
      var e = event || window.event;
      if (e && (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40 || e.keyCode === 32)) {
        player.emit('focus');
      }
      if (e && (e.keyCode === 40 || e.keyCode === 38)) {
        if (player.controls) {
          var volumeSlider = player.controls.querySelector('.xgplayer-slider');
          if (volumeSlider) {
            if (_util2.default.hasClass(volumeSlider, 'xgplayer-none')) {
              _util2.default.removeClass(volumeSlider, 'xgplayer-none');
            }
            if (player.sliderTimer) {
              clearTimeout(player.sliderTimer);
            }
            player.sliderTimer = setTimeout(function () {
              _util2.default.addClass(volumeSlider, 'xgplayer-none');
            }, player.config.inactive);
          }
        }
        if (e && e.keyCode === 40) {
          // 按 down
          if (player.volume - 0.1 >= 0) {
            player.volume = parseFloat((player.volume - 0.1).toFixed(1));
          } else {
            player.volume = 0;
          }
        } else if (e && e.keyCode === 38) {
          // 按 up
          if (player.volume + 0.1 <= 1) {
            player.volume = parseFloat((player.volume + 0.1).toFixed(1));
          } else {
            player.volume = 1;
          }
        }
      } else if (e && e.keyCode === 39) {
        // 按 right
        if (player.currentTime + 10 <= player.duration) {
          player.currentTime += 10;
        } else {
          player.currentTime = player.duration - 1;
        }
      } else if (e && e.keyCode === 37) {
        // 按 left
        if (player.currentTime - 10 >= 0) {
          player.currentTime -= 10;
        } else {
          player.currentTime = 0;
        }
      } else if (e && e.keyCode === 32) {
        // 按 spacebar
        if (player.paused) {
          // eslint-disable-next-line handle-callback-err
          var playPromise = player.play();
          if (playPromise !== undefined && playPromise) {
            playPromise.catch(function (err) {});
          }
        } else {
          player.pause();
        }
      }
    }
  }], [{
    key: 'install',
    value: function install(name, descriptor) {
      if (!Player.plugins) {
        Player.plugins = {};
      }
      if (!Player.plugins[name]) {
        Player.plugins[name] = descriptor;
      }
    }
  }, {
    key: 'use',
    value: function use(name, descriptor) {
      if (!Player.plugins) {
        Player.plugins = {};
      }
      Player.plugins[name] = descriptor;
    }
  }]);

  return Player;
}(_proxy2.default);

Player.util = _util2.default;
Player.sniffer = _sniffer2.default;
Player.Errors = _error2.default;

exports.default = Player;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _undefined = __webpack_require__(23)(); // Support ES3 engines

module.exports = function (val) {
  return val !== _undefined && val !== null;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ES3 safe

var _undefined = void 0;

module.exports = function (value) {
  return value !== _undefined && value !== null;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var util = {};

util.createDom = function () {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var tpl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var cname = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  var dom = document.createElement(el);
  dom.className = cname;
  dom.innerHTML = tpl;
  Object.keys(attrs).forEach(function (item) {
    var key = item;
    var value = attrs[item];
    if (el === 'video' || el === 'audio') {
      if (value) {
        dom.setAttribute(key, value);
      }
    } else {
      dom.setAttribute(key, value);
    }
  });
  return dom;
};

util.hasClass = function (el, className) {
  if (!el) {
    return false;
  }

  if (el.classList) {
    return Array.prototype.some.call(el.classList, function (item) {
      return item === className;
    });
  } else {
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }
};

util.addClass = function (el, className) {
  if (!el) {
    return;
  }

  if (el.classList) {
    className.replace(/(^\s+|\s+$)/g, '').split(/\s+/g).forEach(function (item) {
      item && el.classList.add(item);
    });
  } else if (!util.hasClass(el, className)) {
    el.className += ' ' + className;
  }
};

util.removeClass = function (el, className) {
  if (!el) {
    return;
  }

  if (el.classList) {
    className.split(/\s+/g).forEach(function (item) {
      el.classList.remove(item);
    });
  } else if (util.hasClass(el, className)) {
    className.split(/\s+/g).forEach(function (item) {
      var reg = new RegExp('(\\s|^)' + item + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    });
  }
};

util.toggleClass = function (el, className) {
  if (!el) {
    return;
  }

  className.split(/\s+/g).forEach(function (item) {
    if (util.hasClass(el, item)) {
      util.removeClass(el, item);
    } else {
      util.addClass(el, item);
    }
  });
};

util.findDom = function () {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var sel = arguments[1];

  var dom = void 0;
  // fix querySelector IDs that start with a digit
  // https://stackoverflow.com/questions/37270787/uncaught-syntaxerror-failed-to-execute-queryselector-on-document
  try {
    dom = el.querySelector(sel);
  } catch (e) {
    if (sel.indexOf('#') === 0) {
      dom = el.getElementById(sel.slice(1));
    }
  }
  return dom;
};

util.padStart = function (str, length, pad) {
  var charstr = String(pad);
  var len = length >> 0;
  var maxlen = Math.ceil(len / charstr.length);
  var chars = [];
  var r = String(str);
  while (maxlen--) {
    chars.push(charstr);
  }
  return chars.join('').substring(0, len - r.length) + r;
};

util.format = function (time) {
  if (window.isNaN(time)) {
    return '';
  }
  var hour = util.padStart(Math.floor(time / 3600), 2, 0);
  var minute = util.padStart(Math.floor((time - hour * 3600) / 60), 2, 0);
  var second = util.padStart(Math.floor(time - hour * 3600 - minute * 60), 2, 0);
  return (hour === '00' ? [minute, second] : [hour, minute, second]).join(':');
};

util.event = function (e) {
  if (e.touches) {
    var touch = e.touches[0] || e.changedTouches[0];
    e.clientX = touch.clientX || 0;
    e.clientY = touch.clientY || 0;
    e.offsetX = touch.pageX - touch.target.offsetLeft;
    e.offsetY = touch.pageY - touch.target.offsetTop;
  }
  e._target = e.target || e.srcElement;
};

util.typeOf = function (obj) {
  return Object.prototype.toString.call(obj).match(/([^\s.*]+)(?=]$)/g)[0];
};

util.deepCopy = function (dst, src) {
  if (util.typeOf(src) === 'Object' && util.typeOf(dst) === 'Object') {
    Object.keys(src).forEach(function (key) {
      if (util.typeOf(src[key]) === 'Object' && !(src[key] instanceof Node)) {
        if (!dst[key]) {
          dst[key] = src[key];
        } else {
          util.deepCopy(dst[key], src[key]);
        }
      } else if (util.typeOf(src[key]) === 'Array') {
        dst[key] = util.typeOf(dst[key]) === 'Array' ? dst[key].concat(src[key]) : src[key];
      } else {
        dst[key] = src[key];
      }
    });
    return dst;
  }
};
util.getBgImage = function (el) {
  // fix: return current page url when url is none
  var url = (el.currentStyle || window.getComputedStyle(el, null)).backgroundImage;
  if (!url || url === 'none') {
    return '';
  }
  var a = document.createElement('a');
  a.href = url.replace(/url\("|"\)/g, '');
  return a.href;
};

util.copyDom = function (dom) {
  if (dom && dom.nodeType === 1) {
    var back = document.createElement(dom.tagName);
    Array.prototype.forEach.call(dom.attributes, function (node) {
      back.setAttribute(node.name, node.value);
    });
    if (dom.innerHTML) {
      back.innerHTML = dom.innerHTML;
    }
    return back;
  } else {
    return '';
  }
};

util.setInterval = function (context, eventName, intervalFunc, frequency) {
  if (!context._interval[eventName]) {
    context._interval[eventName] = setInterval(intervalFunc.bind(context), frequency);
  }
};

util.clearInterval = function (context, eventName) {
  clearInterval(context._interval[eventName]);
  context._interval[eventName] = null;
};

util.createImgBtn = function (name, imgUrl, width, height) {
  var btn = util.createDom('xg-' + name, '', {}, 'xgplayer-' + name + '-img');
  btn.style.backgroundImage = 'url("' + imgUrl + '")';
  if (width && height) {
    var w = void 0,
        h = void 0,
        unit = void 0;
    ['px', 'rem', 'em', 'pt', 'dp', 'vw', 'vh', 'vm', '%'].every(function (item) {
      if (width.indexOf(item) > -1 && height.indexOf(item) > -1) {
        w = parseFloat(width.slice(0, width.indexOf(item)).trim());
        h = parseFloat(height.slice(0, height.indexOf(item)).trim());
        unit = item;
        return false;
      } else {
        return true;
      }
    });
    btn.style.width = '' + w + unit;
    btn.style.height = '' + h + unit;
    btn.style.backgroundSize = '' + w + unit + ' ' + h + unit;
    if (name === 'start') {
      btn.style.margin = '-' + h / 2 + unit + ' auto auto -' + w / 2 + unit;
    } else {
      btn.style.margin = 'auto 5px auto 5px';
    }
  }
  return btn;
};

util.Hex2RGBA = function (hex, alpha) {
  var rgb = []; // 定义rgb数组
  if (/^\#[0-9A-F]{3}$/i.test(hex)) {
    var sixHex = '#';
    hex.replace(/[0-9A-F]/ig, function (kw) {
      sixHex += kw + kw;
    });
    hex = sixHex;
  }
  if (/^#[0-9A-F]{6}$/i.test(hex)) {
    hex.replace(/[0-9A-F]{2}/ig, function (kw) {
      rgb.push(eval('0x' + kw));
    });
    return 'rgba(' + rgb.join(',') + ', ' + alpha + ')';
  } else {
    return 'rgba(255, 255, 255, 0.1)';
  }
};

exports.default = util;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _package = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorTypes = {
  network: {
    code: 1,
    msg: '视频下载错误',
    remark: '只要视频下载错误就使用此类型，无论是video本身的超时还是xhr的分段请求超时或者资源不存在'
  },
  mse: {
    code: 2,
    msg: '流追加错误',
    remark: '追加流的时候如果类型不对、无法被正确解码则会触发此类错误'
  },
  parse: {
    code: 3,
    msg: '解析错误',
    remark: 'mp4、hls、flv我们都是使用js进行格式解析，如果解析失败则会触发此类错误'
  },
  format: {
    code: 4,
    msg: '格式错误',
    remark: '如果浏览器不支持的格式导致播放错误'
  },
  decoder: {
    code: 5,
    msg: '解码错误',
    remark: '浏览器解码异常会抛出此类型错误'
  },
  runtime: {
    code: 6,
    msg: '语法错误',
    remark: '播放器语法错误'
  },
  timeout: {
    code: 7,
    msg: '播放超时',
    remark: '播放过程中无法正常请求下一个分段导致播放中断'
  },
  other: {
    code: 8,
    msg: '其他错误',
    remark: '不可知的错误或被忽略的错误类型'
  }
};

var Errors = function Errors(type, currentTime, duration, networkState, readyState, src, currentSrc, ended) {
  var errd = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : { line: '', handle: '', msg: '', version: '' };
  var errorCode = arguments[9];
  var mediaError = arguments[10];

  _classCallCheck(this, Errors);

  var r = {};
  if (arguments.length > 1) {
    r.playerVersion = _package.version; // 播放器版本
    r.errorType = type;
    r.domain = document.domain; // domain
    r.duration = duration; // 视频时长
    r.currentTime = currentTime;
    r.networkState = networkState;
    r.readyState = readyState;
    r.currentSrc = currentSrc;
    r.src = src;
    r.ended = ended;
    r.errd = errd; // 错误详情
    r.ex = (ErrorTypes[type] || {}).msg; // 补充信息
    r.errorCode = errorCode;
    r.mediaError = mediaError;
  } else {
    var arg = arguments[0];
    Object.keys(arg).map(function (key) {
      r[key] = arg[key];
    });
    r.ex = (arg.type && ErrorTypes[arg.type] || {}).msg;
  }
  return r;
};

exports.default = Errors;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"xgplayer\",\"version\":\"2.6.5\",\"description\":\"video player\",\"main\":\"./dist/index.js\",\"typings\":\"./types/index.d.ts\",\"bin\":{\"xgplayer\":\"bin/xgplayer.js\"},\"scripts\":{\"prepare\":\"npm run build\",\"build\":\"webpack --progress --display-chunks -p\",\"watch\":\"webpack --progress --display-chunks -p --watch --mode development\"},\"keywords\":[\"video\",\"player\"],\"babel\":{\"presets\":[\"es2015\"],\"plugins\":[\"add-module-exports\",\"babel-plugin-bulk-import\"]},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/bytedance/xgplayer.git\"},\"author\":\"yinguohui@bytedance.com\",\"license\":\"MIT\",\"dependencies\":{\"chalk\":\"^2.3.2\",\"commander\":\"^2.15.1\",\"danmu.js\":\"^0.1.0\",\"deepmerge\":\"^1.5.0\",\"downloadjs\":\"1.4.7\",\"draggabilly\":\"^2.2.0\",\"event-emitter\":\"^0.3.5\",\"fs-extra\":\"^5.0.0\",\"install\":\"^0.13.0\",\"pasition\":\"^1.0.1\",\"request-frame\":\"^1.5.3\"},\"browserslist\":[\"> 5%\",\"IE 9\",\"iOS 7\",\"Firefox > 20\"],\"devDependencies\":{\"@types/events\":\"^3.0.0\",\"autoprefixer\":\"^9.1.5\",\"babel-core\":\"^6.26.3\",\"babel-loader\":\"^7.1.4\",\"babel-plugin-add-module-exports\":\"^0.2.1\",\"babel-plugin-bulk-import\":\"^1.0.2\",\"babel-plugin-transform-object-rest-spread\":\"^6.26.0\",\"babel-plugin-transform-runtime\":\"^6.23.0\",\"babel-preset-es2015\":\"^6.24.1\",\"chai\":\"^4.1.2\",\"core-js\":\"^2.5.4\",\"css-loader\":\"^0.28.11\",\"json-loader\":\"^0.5.7\",\"node-sass\":\"^4.8.3\",\"postcss-cssnext\":\"^3.1.0\",\"postcss-loader\":\"^2.1.5\",\"raw-loader\":\"^2.0.0\",\"sass-loader\":\"^6.0.7\",\"style-loader\":\"^0.20.3\",\"sugarss\":\"^1.0.1\",\"webpack\":\"^4.11.0\",\"webpack-cli\":\"^3.0.2\",\"zlib\":\"^1.0.5\"}}");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sniffer = {
  get device() {
    var r = sniffer.os;
    return r.isPc ? 'pc' : 'mobile';
    // return r.isPc ? 'pc' : r.isTablet ? 'tablet' : 'mobile'
  },
  get browser() {
    var ua = navigator.userAgent.toLowerCase();
    var reg = {
      ie: /rv:([\d.]+)\) like gecko/,
      firfox: /firefox\/([\d.]+)/,
      chrome: /chrome\/([\d.]+)/,
      opera: /opera.([\d.]+)/,
      safari: /version\/([\d.]+).*safari/
    };
    return [].concat(Object.keys(reg).filter(function (key) {
      return reg[key].test(ua);
    }))[0];
  },
  get os() {
    var ua = navigator.userAgent;
    var isWindowsPhone = /(?:Windows Phone)/.test(ua);
    var isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
    var isAndroid = /(?:Android)/.test(ua);
    var isFireFox = /(?:Firefox)/.test(ua);
    var isTablet = /(?:iPad|PlayBook)/.test(ua) || isAndroid && !/(?:Mobile)/.test(ua) || isFireFox && /(?:Tablet)/.test(ua);
    var isPhone = /(?:iPhone)/.test(ua) && !isTablet;
    var isPc = !isPhone && !isAndroid && !isSymbian && !isTablet;
    return {
      isTablet: isTablet,
      isPhone: isPhone,
      isAndroid: isAndroid,
      isPc: isPc,
      isSymbian: isSymbian,
      isWindowsPhone: isWindowsPhone,
      isFireFox: isFireFox
    };
  }
};

exports.default = sniffer;
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable */
var _extends = Object.assign || function (e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r];for (var t in n) {
      if (Object.prototype.hasOwnProperty.call(n, t)) {
        e[t] = n[t];
      }
    }
  }return e;
};function _classCallCheck(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var undef = undefined;var Env = function e() {
  var A = this;_classCallCheck(this, e);this.set = function (e, r) {
    var n = e;var t = r;if (t === null) {
      return false;
    }var i = "";if (n.indexOf(".") > -1) {
      var s = n.split(".");i = s[0];n = s[1];
    }if (n === "os_version") {
      t = "" + t;
    }if (i) {
      if (i === "user" || i === "header") {
        A.envInfo[i][n] = t;
      } else if (i === "headers") {
        A.envInfo.header.headers[n] = t;
      } else {
        A.envInfo.header.headers.custom[n] = t;
      }
    } else if (A.envInfo.user.hasOwnProperty(n)) {
      if (["user_type", "device_id", "ip_addr_id"].indexOf(n) > -1) {
        A.envInfo.user[n] = Number(t);
      } else if (["user_id", "web_id", "user_unique_id", "ssid"].indexOf(n) > -1) {
        A.envInfo.user[n] = String(t);
      } else if (["user_is_auth", "user_is_login"].indexOf(n) > -1) {
        A.envInfo.user[n] = Boolean(t);
      }
    } else if (A.envInfo.header.hasOwnProperty(n)) {
      A.envInfo.header[n] = t;
    } else if (A.envInfo.header.headers.hasOwnProperty(n)) {
      A.envInfo.header.headers[n] = t;
    } else {
      A.envInfo.header.headers.custom[n] = t;
    }
  };this.get = function () {
    var e = { user: {}, header: { headers: { custom: {} } } };var r = A.envInfo;var n = r.user;var t = Object.keys(n);for (var i = t, s = Array.isArray(i), o = 0, i = s ? i : i[Symbol.iterator]();;) {
      var a;if (s) {
        if (o >= i.length) break;a = i[o++];
      } else {
        o = i.next();if (o.done) break;a = o.value;
      }var u = a;if (n[u] !== undef) {
        e.user[u] = n[u];
      }
    }var f = r.header;var c = Object.keys(f);for (var d = c, l = Array.isArray(d), _ = 0, d = l ? d : d[Symbol.iterator]();;) {
      var v;if (l) {
        if (_ >= d.length) break;v = d[_++];
      } else {
        _ = d.next();if (_.done) break;v = _.value;
      }var h = v;if (f[h] !== undef && h !== "headers") {
        e.header[h] = f[h];
      }
    }var p = r.header.headers;var g = Object.keys(p);for (var b = g, y = Array.isArray(b), m = 0, b = y ? b : b[Symbol.iterator]();;) {
      var w;if (y) {
        if (m >= b.length) break;w = b[m++];
      } else {
        m = b.next();if (m.done) break;w = m.value;
      }var O = w;if (O !== "custom" && p[O] !== undef) {
        e.header.headers[O] = p[O];
      }
    }var k = r.header.headers.custom;var C = Object.keys(k);if (C.length) {
      for (var S = C, E = Array.isArray(S), R = 0, S = E ? S : S[Symbol.iterator]();;) {
        var x;if (E) {
          if (R >= S.length) break;x = S[R++];
        } else {
          R = S.next();if (R.done) break;x = R.value;
        }var z = x;e.header.headers.custom[z] = k[z];
      }
    }var T = { user: e.user, header: _extends({}, e.header, { headers: e.header.headers }) };return T;
  };this.envInfo = { user: { user_unique_id: undef, user_type: undef, user_id: undef, user_is_auth: undef, user_is_login: undef, device_id: undef, web_id: undef, ip_addr_id: undef, ssid: undef }, header: { app_id: undef, app_name: undef, app_install_id: undef, app_package: undef, app_channel: undef, app_version: undef, os_name: undef, os_version: undef, device_model: undef, ab_client: undef, ab_version: undef, traffic_type: undef, utm_source: undef, utm_medium: undef, utm_campaign: undef, client_ip: undef, device_brand: undef, os_api: undef, access: undef, language: undef, region: undef, app_language: undef, app_region: undef, creative_id: undef, ad_id: undef, campaign_id: undef, log_type: undef, rnd: undef, platform: undef, sdk_version: undef, province: undef, city: undef, timezone: undef, tz_offset: undef, tz_name: undef, sim_region: undef, carrier: undef, resolution: undef, browser: undef, browser_version: undef, referrer: undef, referrer_host: undef, headers: { utm_term: undef, utm_content: undef, custom: {} } } };
};var parseURL = function e(r) {
  var n = document.createElement("a");n.href = r;return n;
};var parseUrlQuery = function e(r) {
  var n = parseURL(r).search;n = n.slice(1);var i = {};n.split("&").forEach(function (e) {
    var r = e.split("="),
        n = r[0],
        t = r[1];i[n] = decodeURIComponent(typeof t === "undefined" ? "" : t);
  });return i;
};var undef$1 = "";var screen_width = screen.width || 0;var screen_height = screen.height || 0;var screen_size = screen_width + " x " + screen_height;var appVersion = navigator.appVersion;var userAgent = navigator.userAgent;var language = navigator.language;var referrer = document.referrer;var referrer_host = parseURL(referrer).hostname;var urlQueryObj = parseUrlQuery(location.href);var os_name = undef$1;var os_version = undef$1;var browser = "";var browser_version = "" + parseFloat(appVersion);var versionOffset = void 0;var semiIndex = void 0;if ((versionOffset = userAgent.indexOf("Opera")) !== -1) {
  browser = "Opera";browser_version = userAgent.substring(versionOffset + 6);if ((versionOffset = userAgent.indexOf("Version")) !== -1) {
    browser_version = userAgent.substring(versionOffset + 8);
  }
}if ((versionOffset = userAgent.indexOf("Edge")) !== -1) {
  browser = "Microsoft Edge";browser_version = userAgent.substring(versionOffset + 5);
} else if ((versionOffset = userAgent.indexOf("MSIE")) !== -1) {
  browser = "Microsoft Internet Explorer";browser_version = userAgent.substring(versionOffset + 5);
} else if ((versionOffset = userAgent.indexOf("Chrome")) !== -1) {
  browser = "Chrome";browser_version = userAgent.substring(versionOffset + 7);
} else if ((versionOffset = userAgent.indexOf("Safari")) !== -1) {
  browser = "Safari";browser_version = userAgent.substring(versionOffset + 7);if ((versionOffset = userAgent.indexOf("Version")) !== -1) {
    browser_version = userAgent.substring(versionOffset + 8);
  }
} else if ((versionOffset = userAgent.indexOf("Firefox")) !== -1) {
  browser = "Firefox";browser_version = userAgent.substring(versionOffset + 8);
}if ((semiIndex = browser_version.indexOf(";")) !== -1) {
  browser_version = browser_version.substring(0, semiIndex);
}if ((semiIndex = browser_version.indexOf(" ")) !== -1) {
  browser_version = browser_version.substring(0, semiIndex);
}if ((semiIndex = browser_version.indexOf(")")) !== -1) {
  browser_version = browser_version.substring(0, semiIndex);
}var platform = /Mobile|htc|mini|Android|iP(ad|od|hone)/.test(appVersion) ? "wap" : "web";var clientOpts = [{ s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ }, { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ }, { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ }, { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ }, { s: "Android", r: /Android/ }, { s: "Sun OS", r: /SunOS/ }, { s: "Linux", r: /(Linux|X11)/ }, { s: "iOS", r: /(iPhone|iPad|iPod)/ }, { s: "Mac OS X", r: /Mac OS X/ }, { s: "Mac OS", r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ }];for (var i = 0; i < clientOpts.length; i++) {
  var cs = clientOpts[i];if (cs.r.test(userAgent)) {
    os_name = cs.s;break;
  }
}function getVersion(e, r) {
  var n = e.exec(r);if (n && n[1]) {
    return n[1];
  }return "";
}if (/Windows/.test(os_name)) {
  os_version = getVersion(/Windows (.*)/, os_name);os_name = "windows";
}function getAndroidVersion(e) {
  var r = getVersion(/Android ([\.\_\d]+)/, e);if (!r) {
    r = getVersion(/Android\/([\.\_\d]+)/, e);
  }return r;
}switch (os_name) {case "Mac OS X":
    os_version = getVersion(/Mac OS X (10[\.\_\d]+)/, userAgent);os_name = "mac";break;case "Android":
    os_version = getAndroidVersion(userAgent);os_name = "android";break;case "iOS":
    os_version = /OS (\d+)_(\d+)_?(\d+)?/.exec(appVersion);if (!os_version) {
      os_version = "";
    } else {
      os_version = os_version[1] + "." + os_version[2] + "." + (os_version[3] | 0);
    }os_name = "ios";break;}var browser$1 = { screen_size: screen_size, browser: browser, browser_version: browser_version, platform: platform, os_name: os_name, os_version: os_version, userAgent: userAgent, screen_width: screen_width, screen_height: screen_height, device_model: os_name, language: language, referrer: referrer, referrer_host: referrer_host, utm_source: urlQueryObj.utm_source, utm_medium: urlQueryObj.utm_medium, utm_campaign: urlQueryObj.utm_campaign, utm_term: urlQueryObj.utm_term, utm_content: urlQueryObj.utm_content };var StorageCache = { get: function e(r) {
    var n = 'no localStorage';if (localStorage && localStorage.getItem) {
      n = localStorage.getItem(r);
    }var t = n;try {
      if (n && typeof n === "string") {
        t = JSON.parse(n);
      }
    } catch (e) {}return t;
  }, set: function e(r, n) {
    try {
      var t = typeof n === "string" ? n : JSON.stringify(n);if (localStorage && localStorage.setItem) {
        localStorage.setItem(r, t);
      }
    } catch (e) {}
  } };var TEA_CACHE_PREFIX = "__tea_cache_";var TEA_LOGGER_PREFIX = "[tea-sdk]";var ERROR_CODE = { NO_URL_PREFIX: 4001, IMG_ON_ERROR: 4e3, IMG_CATCH_ERROR: 4002, BEACON_STATUS_FALSE: 4003, XHR_ON_ERROR: 500, RESPONSE_DATA_ERROR: 5001 };var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (e) {
  return typeof e === "undefined" ? "undefined" : _typeof2(e);
} : function (e) {
  return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
};function _classCallCheck$1(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var Logger = function e() {
  var s = this;var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";_classCallCheck$1(this, e);this.init = function (e) {
    s.isLog = e;
  };this.info = function (e) {
    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) {
      n[t - 1] = arguments[t];
    }if (s.isLog) {
      var i;(i = console).log.apply(i, [s.prefix + e].concat(n));
    }
  };this.warn = function (e) {
    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) {
      n[t - 1] = arguments[t];
    }if (s.isLog) {
      var i;(i = console).warn.apply(i, [s.prefix + e].concat(n));
    }
  };this.error = function (e) {
    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) {
      n[t - 1] = arguments[t];
    }if (s.isLog) {
      var i;(i = console).error.apply(i, [s.prefix + e].concat(n));
    }
  };this.dir = function () {
    if (s.isLog) {
      var e;(e = console).dir.apply(e, arguments);
    }
  };this.table = function (e) {
    if (s.isLog) {
      console.table(e);
    }
  };this.logJSON = function (e) {
    if ((typeof e === "undefined" ? "undefined" : _typeof(e)) === "object" && s.isLog) {
      s.info("", JSON.stringify(e, null, 2));
    }
  };this.deprecated = function (e) {
    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++) {
      n[t - 1] = arguments[t];
    }s.warn.apply(s, ["[DEPRECATED]" + e].concat(n));
  };this.throw = function (e) {
    s.error(s.prefix);throw new Error(e);
  };var n = r ? "[" + r + "]" : "";this.prefix = TEA_LOGGER_PREFIX + n;
};var logger = new Logger();var fetchTokens = function e(r, n, t, i) {
  var s = new XMLHttpRequest();s.open("POST", r, true);s.setRequestHeader("Content-Type", "application/json; charset=utf-8");s.onload = function () {
    try {
      var e = JSON.parse(s.responseText);if (t) {
        t(e);
      }
    } catch (e) {
      if (i) {
        i();
      }
    }
  };s.onerror = function () {
    if (i) {
      i();
    }
  };s.send(JSON.stringify(n));
};function _classCallCheck$2(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}function _possibleConstructorReturn(e, r) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return r && ((typeof r === "undefined" ? "undefined" : _typeof2(r)) === "object" || typeof r === "function") ? r : e;
}function _inherits(e, r) {
  if (typeof r !== "function" && r !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof r === "undefined" ? "undefined" : _typeof2(r)));
  }e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } });if (r) Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r;
}var date = new Date();var timeZoneMin = date.getTimezoneOffset();var timezone = parseInt(-timeZoneMin / 60, 10);var tz_offset = timeZoneMin * 60;var sdk_version = void 0;try {
  sdk_version = "3.2.7";
} catch (e) {
  sdk_version = "2.x";
}var ClientEnv = function (r) {
  _inherits(n, r);function n() {
    _classCallCheck$2(this, n);var e = _possibleConstructorReturn(this, r.call(this));e.initClientEnv = function () {
      e.set("os_name", browser$1.os_name);e.set("os_version", browser$1.os_version);e.set("device_model", browser$1.device_model);e.set("platform", browser$1.platform);e.set("sdk_version", sdk_version);e.set("browser", browser$1.browser);e.set("browser_version", browser$1.browser_version);e.set("language", browser$1.language);e.set("timezone", timezone);e.set("tz_offset", tz_offset);e.set("resolution", browser$1.screen_width + "x" + browser$1.screen_height);e.set("screen_width", browser$1.screen_width);e.set("screen_height", browser$1.screen_height);e.set("referrer", browser$1.referrer);e.set("referrer_host", browser$1.referrer_host);e.set("utm_source", browser$1.utm_source);e.set("utm_medium", browser$1.utm_medium);e.set("utm_campaign", browser$1.utm_campaign);e.set("utm_term", browser$1.utm_term);e.set("utm_content", browser$1.utm_content);
    };e.initClientEnv();return e;
  }return n;
}(Env);var clientEnvManager = new ClientEnv();function _classCallCheck$3(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var Type = function () {
  function e() {
    _classCallCheck$3(this, e);
  }e.prototype.isString = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "String";
  };e.prototype.isNumber = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "Number";
  };e.prototype.isBoolean = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "Boolean";
  };e.prototype.isFunction = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "Function";
  };e.prototype.isNull = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "Null";
  };e.prototype.isUndefined = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "Undefined";
  };e.prototype.isObj = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "Object";
  };e.prototype.isArray = function e(r) {
    return Object.prototype.toString.call(r).slice(8, -1) === "Array";
  };e.prototype.isFalse = function e(r) {
    if (r === "" || r === undefined || r === null || r === "null" || r === "undefined" || r === 0 || r === false || r === NaN) return true;return false;
  };e.prototype.isTrue = function e(r) {
    return !this.isFalse(r);
  };e.prototype.isLowIE = function e() {
    return window.XDomainRequest;
  };return e;
}();var types = new Type();function decrypto(e, r, n) {
  if (typeof e !== "string" || typeof r !== "number" || typeof n !== "number") {
    return;
  }var t = [];var i = [];n = n <= 25 ? n : n % 25;var s = String.fromCharCode(n + 97);t = e.split(s);for (var o = 0; o < t.length; o++) {
    var a = parseInt(t[o], n);a = a * 1 ^ r;var u = String.fromCharCode(a);i.push(u);
  }var f = i.join("");return f;
}var decodeXXX = function e(r) {
  return decrypto(r, 64, 25);
};function b(e) {
  return e ? (e ^ Math.random() * 16 >> e / 4).toString(10) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
}var webid = function e() {
  return b().replace(/-/g, "").slice(0, 19);
};var _extends$1 = Object.assign || function (e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r];for (var t in n) {
      if (Object.prototype.hasOwnProperty.call(n, t)) {
        e[t] = n[t];
      }
    }
  }return e;
};function _classCallCheck$4(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}function _possibleConstructorReturn$1(e, r) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return r && ((typeof r === "undefined" ? "undefined" : _typeof2(r)) === "object" || typeof r === "function") ? r : e;
}function _inherits$1(e, r) {
  if (typeof r !== "function" && r !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof r === "undefined" ? "undefined" : _typeof2(r)));
  }e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } });if (r) Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r;
}var urlPrefix = { cn: "1fz22z22z1nz21z4mz4bz4bz1kz1az21z4az21z1lz21z21z1bz1iz4az1az1mz1k", sg: "1fz22z22z1nz21z4mz4bz4bz21z1ez18z1jz1gz49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k", va: "1fz22z22z1nz21z4mz4bz4bz1kz18z1jz1gz24z18z49z1kz1az21z4az19z27z22z1cz1mz24z1cz20z21z1cz18z4az1az1mz1k" };var getCookie = function e(r) {
  try {
    var n = document.cookie.match(new RegExp("(?:^|;)\\s*" + r + "=([^;]+)"));return decodeURIComponent(n ? n[1] : "");
  } catch (e) {
    return "";
  }
};var AppChannelEnv = function (e) {
  _inherits$1(r, e);function r() {
    _classCallCheck$4(this, r);var f = _possibleConstructorReturn$1(this, e.call(this));f.init = function (e) {
      var r = e.app_id,
          n = e.channel,
          t = e.log,
          i = e.channel_domain,
          s = e.name;if (typeof r !== "number") {
        throw new Error("app_id 必须是一个数字，注意检查是否是以`string`的方式传入的？");
      }f.logger = new Logger(s);f.logger.init(t);f.initConfigs(e);f.initUrls(n, i);f.setEnv("app_id", r);
    };f.initConfigs = function (e) {
      var r = e.app_id,
          n = e.disable_ssid,
          t = e.disable_webid,
          i = e.disable_sdk_monitor;f.app_id = r;f.evtDataCacheKey = TEA_CACHE_PREFIX + "events_" + r;if (n) {
        f.logger.info("ssid已禁用，设置user_unique_id不会请求ssid接口。");f.isSsidDisabled = true;
      }if (t) {
        f.logger.info("webid服务已禁用，ssid同时被禁用。将本地生成webid。");f.isWebidDisabled = true;f.isSsidDisabled = true;
      }if (i) {
        f.logger.info("SDK监控已禁用。");f.isSdkMonitorDisabled = true;
      }
    };f.initUrls = function (e, r) {
      if (e === "internal") {
        f.logger.warn("channel 的值 internal 已被废弃，已自动改为 cn。");e = "cn";
      }if (!r && !urlPrefix[e]) {
        throw new Error("channel 变量只能是 `cn`, `sg`,`va`");
      }var n = r || decodeXXX(urlPrefix[e]);n = n.replace(/\/+$/, "");f.reportUrl = n + "/v1/list";f.userTokensPrefix = "" + n;
    };f.setEnv = function (e, r) {
      if (e === "app_id") {
        f.checkUserToken(r);
      }if (e === "user_unique_id") {
        if (f.blackUuid.some(function (e) {
          return e === String(r);
        })) {
          f.logger.warn('设置了无效的值 {user_unique_id："%s"}。该操作已忽略。', r);return;
        }f.verifyTokens(r);
      }if (e === "web_id") {
        if (!r) {
          return;
        }if (!f.envInfo.user.user_unique_id || f.envInfo.user.user_unique_id && f.envInfo.user.user_unique_id === f.envInfo.user.web_id) {
          f.set("user_unique_id", r);
        }
      }f.set(e, r);
    };f.transferFromCookie = function () {
      var e = f.tokensCacheKey;var r = "tt_webid";var n = "__tea_sdk__ssid";var t = "__tea_sdk__user_unique_id";var i = getCookie(r);var s = getCookie(n);var o = getCookie(t);if (types.isLowIE()) {
        if (i) {
          var a = { web_id: i, ssid: i, user_unique_id: i };StorageCache.set(e, JSON.stringify(a));
        }return false;
      }if (i && s && o) {
        var u = { web_id: i, ssid: s, user_unique_id: o };StorageCache.set(e, JSON.stringify(u));
      }
    };f.purifyBlackUuid = function () {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};if (f.blackUuid.some(function (e) {
        return e === r.user_unique_id;
      })) {
        var e = {};f.setUserTokens(e);f.logger.warn('检测到无效的用户标识，已重置用户状态。{user_unique_id: "%s"}', r.user_unique_id);return e;
      }return r;
    };f.getUserTokens = function () {
      return StorageCache.get(f.tokensCacheKey) || {};
    };f.setUserTokens = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};return StorageCache.set(f.tokensCacheKey, e);
    };f.checkUserToken = function (e) {
      var r = TEA_CACHE_PREFIX + "tokens_" + e;f.tokensCacheKey = r;f.transferFromCookie();var n = f.purifyBlackUuid(f.getUserTokens());if (n.user_unique_id && n.web_id) {
        f.envInfo.user.user_unique_id = n.user_unique_id;f.envInfo.user.web_id = n.web_id;f.envInfo.user.ssid = n.ssid || "";f.logger.info("初始化已经检测到了 webid user_unique_id，一般情况下不需要再次验证 id 了");f.unlock();
      } else {
        f.requestWebId(e);
      }
    };f.saveTokenToStorage = function (e) {
      var r = e.web_id,
          n = e.ssid,
          t = e.user_unique_id;f.setUserTokens({ web_id: r, ssid: n, user_unique_id: t });
    };f.requestWebId = function () {
      f.isRequestWebId = true;var n = function e(r) {
        var n = f.envInfo.user.web_id || r.web_id;var t = r.ssid;f.isRequestWebId = false;f.envInfo.user.ssid = t;f.envInfo.user.web_id = n;f.envInfo.user.user_unique_id = n;f.saveTokenToStorage({ web_id: n, ssid: t, user_unique_id: n });if (f.waitForVerifyTokens) {
          f.lock();f.verifyTokens(f.realUuid);
        } else {
          f.unlock();if (f.callback) {
            f.callback();
          }
        }
      };var e = function e() {
        n({ web_id: webid(), ssid: "" });
      };var r = function e() {
        var r = f.userTokensPrefix + "/v1/user/webid";fetchTokens(r, { app_id: f.app_id, url: location.href, user_agent: browser$1.userAgent, referer: browser$1.referrer, user_unique_id: "" }, function (e) {
          if (e.e !== 0) {
            f.logger.error("请求 webid 失败。请联系管理员。");
          } else {
            n(e);
          }
        }, function () {
          f.isRequestWebId = false;f.logger.error("获取 webid 失败，数据将不会被上报");
        });
      };if (f.isWebidDisabled) {
        e();
      } else {
        r();
      }
    };f.verifyTokens = function (e) {
      var r = f.tokensCacheKey;f.waitForVerifyTokens = false;f.realUuid = "" + e;if (f.isRequestWebId) {
        f.waitForVerifyTokens = true;f.logger.info("正在请求 webid，requestSsid 将会在前者请求完毕之后被调用");return false;
      }var n = f.getUserTokens();if (n.user_unique_id === f.realUuid && n.ssid && n.web_id) {
        f.logger.info("传入的 user_id/user_unique_id 与 缓存中的完全一致，无需再次请求");f.unlock();
      } else {
        f.lock();f.envInfo.user.user_unique_id = f.realUuid;var t = _extends$1({}, f.getUserTokens(), { user_unique_id: f.realUuid });StorageCache.set(r, JSON.stringify(t));if (types.isLowIE()) {
          f.unlock();return false;
        }if (f.isSsidDisabled) {
          f.unlock();if (f.callback) {
            f.callback();
          }
        } else {
          f.requestSsid();
        }
      }
    };f.requestSsid = function () {
      var n = f.getUserTokens();var e = f.userTokensPrefix + "/v1/user/ssid";fetchTokens(e, { app_id: f.app_id, web_id: n.web_id, user_unique_id: "" + n.user_unique_id }, function (e) {
        f.unlock();if (e.e !== 0) {
          f.logger.error("请求 ssid 失败~");
        } else {
          f.envInfo.user.ssid = e.ssid;var r = _extends$1({}, n, { ssid: e.ssid });f.setUserTokens(r);f.logger.info("根据 user_unique_id 更新 ssid 成功！注意：在这之前不应该有数据被发出去");if (f.callback) {
            f.callback();
          }
        }
      }, function () {
        f.unlock();f.logger.error("根据 user_unique_id 获取新 ssid 失败");
      });
    };f.setEvtParams = function (e) {
      var r = _extends$1({}, e);Object.keys(r).forEach(function (e) {
        f.evtParams[e] = r[e];
      });
    };f.mergeEnvToEvents = function (e) {
      var r = f.mergeEnv();var n = [];var t = 0;var i = void 0;e.forEach(function (e) {
        var r = !!e.params.__disable_storage__;if (typeof i === "undefined") {
          i = r;
        } else if (r !== i || n[t].length >= 5) {
          t += 1;i = !i;
        }n[t] = n[t] || [];n[t].push(e);
      });var s = n.map(function (e) {
        return { events: e.map(function (e) {
            var r = _extends$1({}, f.evtParams, e.params);delete r.__disable_storage__;return _extends$1({}, e, { params: JSON.stringify(r) });
          }), user: r.user, header: r.header, verbose: f.debugMode ? 1 : undefined, __disable_storage__: e[0].params.__disable_storage__ };
      });return s;
    };f.mergeEnv = function () {
      var e = f.get();var r = clientEnvManager.get();var n = _extends$1({}, e.user);var t = _extends$1({}, r.header.headers.custom, e.header.headers.custom);var i = _extends$1({}, r.header.headers, e.header.headers, { custom: t });var s = _extends$1({}, r.header, e.header);var o = { user: n, header: _extends$1({}, s, { headers: JSON.stringify(i) }) };return o;
    };f.evtParams = {};f.reportUrl = "";f.userTokensPrefix = "";f.isSsidDisabled = false;f.isWebidDisabled = false;f.isSdkMonitorDisabled = false;f.debugMode = false;f.blackUuid = ["null", "undefined", "0", "", "None"];f.logger = function () {};return f;
  }r.prototype.lock = function e() {
    this.isUserTokensReady = false;
  };r.prototype.unlock = function e() {
    this.isUserTokensReady = true;
  };r.prototype.enableDebugMode = function e(r) {
    this.debugMode = r;
  };return r;
}(Env);function _classCallCheck$5(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var MemoryCache = function e() {
  var n = this;_classCallCheck$5(this, e);this.set = function (e, r) {
    n.cache[e] = r;
  };this.get = function (e) {
    return n.cache[e];
  };this.clean = function (e) {
    n.cache[e] = undefined;
  };this.cache = {};
};var memoryCacheManager = new MemoryCache();function _classCallCheck$6(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var EventStorageManager = function () {
  function t(e) {
    var r = e.disable_storage,
        n = r === undefined ? false : r;_classCallCheck$6(this, t);this._isPersistent = !n;this._storage = this._isPersistent ? StorageCache : new MemoryCache();this._storageKey = "";this._data = undefined;
  }t.prototype.setStorageKey = function e(r) {
    this._storageKey = r;
  };t.prototype.getAllEvents = function e() {
    var n = this.getData();Object.keys(n).reduce(function (e, r) {
      return e.concat(n[r] || []);
    }, []);
  };t.prototype.getData = function e() {
    this._checkIsDataInit();return this._data;
  };t.prototype.add = function e(r) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];this._checkIsDataInit();if (n.length !== 0) {
      this._data[r] = n;this._save();
    }
  };t.prototype.delete = function e(r) {
    this._checkIsDataInit();if (this._data[r]) {
      delete this._data[r];this._save();
    }
  };t.prototype._checkIsDataInit = function e() {
    if (typeof this._data === "undefined") {
      try {
        var r = this._getDataFromStorage();if (types.isArray(r)) {
          var n;this._data = (n = {}, n[webid()] = r, n);this._save();
        } else {
          this._data = r;
        }
      } catch (e) {
        this._data = {};
      }
    }
  };t.prototype._checkStorageKey = function e() {
    if (!this._storageKey) {
      throw new Error("must call setStorageKey('xxx') first");
    }
  };t.prototype._getDataFromStorage = function e() {
    this._checkStorageKey();return this._storage.get(this._storageKey) || {};
  };t.prototype._save = function e() {
    this._checkStorageKey();this._storage.set(this._storageKey, this._data);
  };return t;
}();var encodePayload = function e(r) {
  var n = "";for (var t in r) {
    if (r.hasOwnProperty(t)) {
      n += "&" + t + "=" + encodeURIComponent(JSON.stringify(r[t]));
    }
  }n = n[0] === "&" ? n.slice(1) : n;return n;
};var sendByImg = function e(r, n) {
  try {
    var t = r.split("v1")[0];n.forEach(function (e) {
      var r = encodePayload(e);var n = new Image(1, 1);n.onload = function () {
        n = null;
      };n.onerror = function () {
        n = null;
      };n.src = t + "/v1/gif?" + r;
    });
  } catch (e) {}
};var postSdkLog = function e(r, n) {
  if (window.XDomainRequest) {
    return sendByImg(r, n);
  }var t = new XMLHttpRequest();t.open("POST", r + "?rdn=" + Math.random(), true);t.onload = function () {};t.onerror = function () {
    t.abort();
  };t.send(JSON.stringify(n));
};var encodePayload$1 = function e(r) {
  var n = "";for (var t in r) {
    if (r.hasOwnProperty(t)) {
      n += "&" + t + "=" + encodeURIComponent(JSON.stringify(r[t]));
    }
  }n = n[0] === "&" ? n.slice(1) : n;return n;
};var sendByImg$1 = function e(t, i, s, o) {
  try {
    var a = t.split("v1")[0];if (!a) {
      o(t, i, ERROR_CODE.NO_URL_PREFIX);return;
    }i.forEach(function (e) {
      var r = encodePayload$1(e);var n = new Image(1, 1);n.onload = function () {
        n = null;s();
      };n.onerror = function () {
        n = null;o(t, i, ERROR_CODE.IMG_ON_ERROR);
      };n.src = a + "/v1/gif?" + r;
    });
  } catch (e) {
    o(t, i, ERROR_CODE.IMG_CATCH_ERROR, e.message);
  }
};var request = function e(r) {
  var n = r.url,
      t = r.data,
      i = r.success,
      s = r.fail,
      o = r.notSure,
      a = r.isUnload;var u = t;if (window.XDomainRequest) {
    sendByImg$1(n, u, i, s);return;
  }if (a) {
    if (window.navigator && window.navigator.sendBeacon) {
      o();var f = window.navigator.sendBeacon(n, JSON.stringify(u));if (f) {
        i();
      } else {
        s(n, t, ERROR_CODE.BEACON_STATUS_FALSE);
      }return;
    }sendByImg$1(n, u, i, s);return;
  }var c = new XMLHttpRequest();c.open("POST", n + "?rdn=" + Math.random(), true);c.onload = function () {
    i(n, u, c.responseText);
  };c.onerror = function () {
    c.abort();s(n, u, ERROR_CODE.XHR_ON_ERROR);
  };c.send(JSON.stringify(u));
};function _classCallCheck$7(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var EventSender = function e(r) {
  var c = this;_classCallCheck$7(this, e);this.send = function (e) {
    var r = e.url,
        n = e.data,
        a = e.success,
        i = e.fail,
        u = e.eventError,
        t = e.notSure,
        s = e.isUnload;request({ url: r, data: n, success: function e(r, n, t) {
        a();try {
          var i = JSON.parse(t);var s = i.e;if (s !== 0) {
            var o = "未知错误";if (s === -2) {
              o = "事件格式错误！请检查字段类型是否正确。";
            }c.logger.error("数据上报失败！", "错误码：" + s + "。错误信息：" + o);u(n, s);sdkMonitorOnError(r, n, s);
          }
        } catch (e) {
          sdkMonitorOnError(r, n, ERROR_CODE.RESPONSE_DATA_ERROR);
        }
      }, fail: function e(r, n, t) {
        c.logger.error("数据上报失败！", "错误码：" + t);i(n, t);sdkMonitorOnError(r, n, t);
      }, notSure: t, isUnload: s });if (!c.isSdkMonitorDisabled && !c.isSdkOnLoadEventReady) {
      c.isSdkOnLoadEventReady = true;try {
        var o = n[0].header;var f = n[0].user;sdkMonitorOnload(r, { app_id: o.app_id, app_name: o.app_name, sdk_version: o.sdk_version, web_id: f.web_id });
      } catch (e) {}
    }
  };this.logger = r.logger || logger;this.isSdkOnLoadEventReady = false;this.isSdkMonitorDisabled = false;
};var sdkMonitorOnload = function e(r, n) {
  try {
    var t = { event: "onload", params: JSON.stringify({ app_id: n.app_id, app_name: n.app_name || "", sdk_version: n.sdk_version }), local_time_ms: Date.now() };var i = { events: [t], user: { user_unique_id: n.web_id }, header: { app_id: 1338 } };setTimeout(function () {
      postSdkLog(r, [i]);
    }, 16);
  } catch (e) {}
};var sdkMonitorOnError = function e(r, n, t) {
  try {
    var i = n[0].user;var s = n[0].header;var o = [];n.forEach(function (e) {
      e.events.forEach(function (e) {
        o.push(e);
      });
    });var a = o.map(function (e) {
      return { event: "on_error", params: JSON.stringify({ error_code: t, app_id: s.app_id, app_name: s.app_name || "", error_event: e.event, local_time_ms: e.local_time_ms, tea_event_index: Date.now(), params: e.params, header: JSON.stringify(s), user: JSON.stringify(i) }), local_time_ms: Date.now() };
    });var u = { events: a, user: { user_unique_id: i.user_unique_id }, header: { app_id: 1338 } };setTimeout(function () {
      postSdkLog(r, [u]);
    }, 16);
  } catch (e) {}
};function _classCallCheck$8(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}function _possibleConstructorReturn$2(e, r) {
  if (!e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return r && ((typeof r === "undefined" ? "undefined" : _typeof2(r)) === "object" || typeof r === "function") ? r : e;
}function _inherits$2(e, r) {
  if (typeof r !== "function" && r !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof r === "undefined" ? "undefined" : _typeof2(r)));
  }e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } });if (r) Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r;
}var AppChannel = function (u) {
  _inherits$2(f, u);function f(e) {
    _classCallCheck$8(this, f);var o = _possibleConstructorReturn$2(this, u.call(this));o.addListener = function () {
      window.addEventListener("unload", function () {
        o.report(true);
      }, false);window.addEventListener("beforeunload", function () {
        o.report(true);
      }, false);document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") {
          o.report(true);
        }
      }, false);
    };o.setReady = function (e) {
      o.isReady = e;o.eventSender.isSdkMonitorDisabled = o.isSdkMonitorDisabled;o.checkAndSendCachedStorageEvents();o.report();
    };o.eventReportTimer = null;o.event = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var n = memoryCacheManager.get(o.evtDataCacheKey) || [];var t = r ? [].concat(e, n) : [].concat(n, e);memoryCacheManager.set(o.evtDataCacheKey, t);if (t.length >= 5) {
        o.report();
      } else {
        if (o.eventReportTimer) {
          clearTimeout(o.eventReportTimer);
        }o.eventReportTimer = setTimeout(function () {
          o.report();o.eventReportTimer = null;
        }, o.waitForBatchTime);
      }
    };o.report = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;if (!o.isUserTokensReady) {
        return false;
      }if (!o.isReady) {
        return false;
      }var r = memoryCacheManager.get(o.evtDataCacheKey) || [];memoryCacheManager.clean(o.evtDataCacheKey);var n = o.mergeEnvToEvents(r);o.sendData(n, e);
    };o.sendData = function (e, n) {
      var t = [];var i = 0;var s = void 0;e.forEach(function (e) {
        var r = !!e.__disable_storage__;if (typeof s === "undefined") {
          s = r;
        } else if (r !== s || t[i].length >= 5) {
          i += 1;s = !s;
        }t[i] = t[i] || [];t[i].push(e);
      });t.forEach(function (e) {
        var r = webid();if (!e[0].__disable_storage__) {
          o.eventStorage.add(r, e);
        }o._sendData(r, e, n);
      });
    };o.checkAndSendCachedStorageEvents = function () {
      var r = o.eventStorage.getData();var e = Object.keys(r);if (e.length > 0) {
        e.forEach(function (e) {
          o._sendData(e, r[e]);
        });
      }
    };o._sendData = function (r, e, n) {
      o.isReporting = true;var t = function e() {
        o.isReporting = false;
      };o.eventSender.send({ url: o.reportUrl, data: e, success: function e() {
          t();o.sendDataSuccess(r);
        }, fail: function e(r, n) {
          t();o.reportErrorCallback(r, n);setTimeout(function () {
            o.report();
          }, 3e3);
        }, eventError: function e(r, n) {
          o.reportErrorCallback(r, n);
        }, notSure: t, isUnload: n });
    };o.sendDataSuccess = function (e) {
      o.eventStorage.delete(e);o.report();
    };var r = e.log,
        n = e.disable_storage,
        t = e.max_batch_num,
        i = t === undefined ? 5 : t,
        s = e.batch_time,
        a = s === undefined ? 30 : s;o.init(e);o.maxBatchNum = i;o.waitForBatchTime = a;o.isReady = false;o.addListener();o.enableDebugMode(!!r);o.eventStorage = new EventStorageManager({ disable_storage: n });o.eventStorage.setStorageKey(o.evtDataCacheKey);o.eventSender = new EventSender({ logger: o.logger });o.reportErrorCallback = function () {};return o;
  }return f;
}(AppChannelEnv);var _extends$2 = Object.assign || function (e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r];for (var t in n) {
      if (Object.prototype.hasOwnProperty.call(n, t)) {
        e[t] = n[t];
      }
    }
  }return e;
};function _classCallCheck$9(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var getEventIndex = function () {
  var e = +Date.now() + Number(("" + Math.random()).slice(2, 8));return function () {
    e += 1;return e;
  };
}();var preprocessEvent = function e(r, n) {
  var t = /^event\./;var i = r;if (t.test(r)) {
    i = r.slice(6);
  }var s = n;if (!types.isObj(s)) {
    s = {};
  }s.event_index = getEventIndex();var o = { event: i, params: s, local_time_ms: +new Date() };return o;
};var Collector = function e(r) {
  var u = this;_classCallCheck$9(this, e);this.init = function (e) {
    if (!types.isObj(e)) {
      throw new Error("init 的参数必须是Object类型");
    }u.logger.init(e.log);u.channel = new AppChannel(_extends$2({}, e, { name: u.name }));u.channel.callback = function () {
      if (u.callbackSend) {
        u.start();
      }
    };
  };this.config = function (e) {
    if (!types.isObj(e)) {
      u.logger.throw("config 参数必须是 {} 的格式");
    }if (e.log) {
      u.logger.init(true);u.channel.enableDebugMode(true);e.log = null;
    }var r = Object.keys(e);if (!r.length) {
      return false;
    }for (var n = r, t = Array.isArray(n), i = 0, n = t ? n : n[Symbol.iterator]();;) {
      var s;if (t) {
        if (i >= n.length) break;s = n[i++];
      } else {
        i = n.next();if (i.done) break;s = i.value;
      }var o = s;var a = e[o];switch (o) {case "evtParams":
          u.channel.setEvtParams(a);break;case "disable_ssid":
          u.logger.deprecated("(disable_ssid)请通过init函数来设置。");if (a) {
            u.logger.info("ssid已禁用，设置user_unique_id不会请求ssid接口。");u.channel.isSsidDisabled = a;
          }break;case "disable_auto_pv":
          if (a) {
            u.logger.info("已禁止默认上报predefine_pageview事件，需手动上报。");u._autoSendPV = false;
          }break;case "_staging_flag":
          if ("" + a === "1") {
            u.logger.info("根据_staging_flag设置，数据将会上报到stag 表。");
          }u.channel.setEvtParams({ _staging_flag: Number(a) });break;case "reportErrorCallback":
          if (typeof a === "function") {
            u.channel.reportErrorCallback = a;
          }break;default:
          u.channel.setEnv(o, a);}
    }
  };this.send = function () {
    u.start();
  };this.start = function () {
    if (u.channel.isUserTokensReady) {
      if (u._isSendFuncCalled) {
        return;
      }u._isSendFuncCalled = true;u.logger.info("看到本提示，意味着用户信息已完全就绪，上报通道打开。用户标识如下：");u.logger.logJSON(u.channel.get().user);if (u._autoSendPV) {
        u.predefinePageView();
      }u.channel.setReady(true);
    } else {
      u.callbackSend = true;
    }
  };this.predefinePageView = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var r = { title: document.title || location.pathname, url: location.href, url_path: location.pathname };var n = _extends$2({}, r, e);u.event("predefine_pageview", n, true);
  };this.event = function () {
    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) {
      r[n] = arguments[n];
    }var t = types.isBoolean(r[r.length - 1]);var i = t ? r[r.length - 1] : false;var s = t ? r.slice(0, r.length - 1) : r;var o = s[0];var a = [];if (!types.isArray(o)) {
      a[0] = s;
    } else {
      a = s;
    }a = a.map(function (e) {
      return preprocessEvent.apply(undefined, e);
    });u.channel.event(a, i);
  };this._isSendFuncCalled = false;this._autoSendPV = true;this.name = r;this.logger = new Logger(r);
};Collector.exportMethods = ["init", "config", "send", "start", "predefinePageView"];function _classCallCheck$a(e, r) {
  if (!(e instanceof r)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var CollectorAsync = function e(r) {
  var o = this;_classCallCheck$a(this, e);this._exportCollect = function () {
    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) {
      r[n] = arguments[n];
    }if (o._isQueueProcessed) {
      o._executeCmd.apply(o, r);return;
    }o.cmdQueue.push(r);o._processCmdQueue();
  };this._processCmdQueue = function () {
    if (o.cmdQueue.length === 0) {
      return;
    }var e = function e(r, t, i) {
      var s = -1;r.forEach(function (e, r) {
        var n = typeof i !== "undefined" ? e[i] : e;if (n === t) {
          s = r;
        }
      });return s;
    };var n = e(o.cmdQueue, "init", "0");if (n !== -1) {
      o._isQueueProcessed = true;o._executeCmd.apply(o, o.cmdQueue[n]);o.cmdQueue.forEach(function (e, r) {
        if (r !== n) {
          o._executeCmd.apply(o, e);
        }
      });o.cmdQueue = [];
    }
  };this._executeCmd = function () {
    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) {
      r[n] = arguments[n];
    }var t = r[0];if (Collector.exportMethods.indexOf(t) > -1) {
      var i;(i = o.colloctor)[t].apply(i, r.slice(1));
    } else {
      var s;(s = o.colloctor).event.apply(s, r);
    }
  };this.name = r || "Collector" + +new Date();this.cmdQueue = [];this.colloctor = new Collector(this.name);this._isQueueProcessed = false;this._processCmdQueue();this._exportCollect.init = this._exportCollect.bind(this, "init");this._exportCollect.config = this._exportCollect.bind(this, "config");this._exportCollect.send = this._exportCollect.bind(this, "send");this._exportCollect.start = this._exportCollect.bind(this, "start");this._exportCollect.predefinePageView = this._exportCollect.bind(this, "predefinePageView");return this._exportCollect;
};exports.default = CollectorAsync;
module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _volume = __webpack_require__(38);

var _volume2 = _interopRequireDefault(_volume);

var _start = __webpack_require__(39);

var _start2 = _interopRequireDefault(_start);

var _screenShot = __webpack_require__(40);

var _screenShot2 = _interopRequireDefault(_screenShot);

var _rotate = __webpack_require__(41);

var _rotate2 = _interopRequireDefault(_rotate);

var _replay = __webpack_require__(42);

var _replay2 = _interopRequireDefault(_replay);

var _reload = __webpack_require__(43);

var _reload2 = _interopRequireDefault(_reload);

var _playNext = __webpack_require__(44);

var _playNext2 = _interopRequireDefault(_playNext);

var _play = __webpack_require__(45);

var _play2 = _interopRequireDefault(_play);

var _pip = __webpack_require__(46);

var _pip2 = _interopRequireDefault(_pip);

var _pc = __webpack_require__(47);

var _pc2 = _interopRequireDefault(_pc);

var _mobile = __webpack_require__(48);

var _mobile2 = _interopRequireDefault(_mobile);

var _memoryPlay = __webpack_require__(49);

var _memoryPlay2 = _interopRequireDefault(_memoryPlay);

var _logger = __webpack_require__(50);

var _logger2 = _interopRequireDefault(_logger);

var _localPreview = __webpack_require__(51);

var _localPreview2 = _interopRequireDefault(_localPreview);

var _i18n = __webpack_require__(52);

var _i18n2 = _interopRequireDefault(_i18n);

var _fullscreen = __webpack_require__(53);

var _fullscreen2 = _interopRequireDefault(_fullscreen);

var _errorRetry = __webpack_require__(54);

var _errorRetry2 = _interopRequireDefault(_errorRetry);

var _download = __webpack_require__(55);

var _download2 = _interopRequireDefault(_download);

var _definition = __webpack_require__(56);

var _definition2 = _interopRequireDefault(_definition);

var _danmu = __webpack_require__(57);

var _danmu2 = _interopRequireDefault(_danmu);

var _cssFullscreen = __webpack_require__(58);

var _cssFullscreen2 = _interopRequireDefault(_cssFullscreen);

var _collect = __webpack_require__(7);

var _collect2 = _interopRequireDefault(_collect);

var _skin = __webpack_require__(59);

var _skin2 = _interopRequireDefault(_skin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Controls = {};

function _buildTree(v, p, a) {
  var o = v;
  p.map(function (_, i) {
    o[_] = i == p.length - 1 ? a : o[_] || {};
    o = o[_];
  });
}

_buildTree(Controls, ['controls', 'collect'], _collect2.default);

_buildTree(Controls, ['controls', 'cssFullscreen'], _cssFullscreen2.default);

_buildTree(Controls, ['controls', 'danmu'], _danmu2.default);

_buildTree(Controls, ['controls', 'definition'], _definition2.default);

_buildTree(Controls, ['controls', 'download'], _download2.default);

_buildTree(Controls, ['controls', 'errorRetry'], _errorRetry2.default);

_buildTree(Controls, ['controls', 'fullscreen'], _fullscreen2.default);

_buildTree(Controls, ['controls', 'i18n'], _i18n2.default);

_buildTree(Controls, ['controls', 'localPreview'], _localPreview2.default);

_buildTree(Controls, ['controls', 'logger'], _logger2.default);

_buildTree(Controls, ['controls', 'memoryPlay'], _memoryPlay2.default);

_buildTree(Controls, ['controls', 'mobile'], _mobile2.default);

_buildTree(Controls, ['controls', 'pc'], _pc2.default);

_buildTree(Controls, ['controls', 'pip'], _pip2.default);

_buildTree(Controls, ['controls', 'play'], _play2.default);

_buildTree(Controls, ['controls', 'playNext'], _playNext2.default);

_buildTree(Controls, ['controls', 'reload'], _reload2.default);

_buildTree(Controls, ['controls', 'replay'], _replay2.default);

_buildTree(Controls, ['controls', 'rotate'], _rotate2.default);

_buildTree(Controls, ['controls', 'screenShot'], _screenShot2.default);

_buildTree(Controls, ['controls', 'start'], _start2.default);

_buildTree(Controls, ['controls', 'volume'], _volume2.default);

exports.default = _player2.default;
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmitter = __webpack_require__(11);

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _util = __webpack_require__(3);

var _util2 = _interopRequireDefault(_util);

var _error = __webpack_require__(4);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Proxy = function () {
  function Proxy(options) {
    _classCallCheck(this, Proxy);

    this.logParams = {
      bc: 0,
      bu_acu_t: 0,
      played: []
    };
    this._hasStart = false;
    this.videoConfig = {
      controls: !!options.isShowControl,
      autoplay: options.autoplay,
      playsinline: options.playsinline,
      'webkit-playsinline': options.playsinline,
      'x5-playsinline': options.playsinline,
      'x5-video-player-type': options['x5-video-player-type'] || options['x5VideoPlayerType'],
      'x5-video-player-fullscreen': options['x5-video-player-fullscreen'] || options['x5VideoPlayerFullscreen'],
      'x5-video-orientation': options['x5-video-orientation'] || options['x5VideoOrientation'],
      airplay: options['airplay'],
      'webkit-airplay': options['airplay'],
      tabindex: 2,
      mediaType: options.mediaType || 'video'
    };
    if (options.loop) {
      this.videoConfig.loop = 'loop';
    }
    var textTrackDom = '';
    this.textTrackShowDefault = true;
    if (options.textTrack && Array.isArray(options.textTrack) && (navigator.userAgent.indexOf('Chrome') > -1 || navigator.userAgent.indexOf('Firefox') > -1)) {
      if (options.textTrack.length > 0 && !options.textTrack.some(function (track) {
        return track.default;
      })) {
        options.textTrack[0].default = true;
        this.textTrackShowDefault = false;
      }
      options.textTrack.some(function (track) {
        if (track.src && track.label && track.default) {
          textTrackDom += '<track src="' + track.src + '" ';
          if (track.kind) {
            textTrackDom += 'kind="' + track.kind + '" ';
          }
          textTrackDom += 'label="' + track.label + '" ';
          if (track.srclang) {
            textTrackDom += 'srclang="' + track.srclang + '" ';
          }
          textTrackDom += (track.default ? 'default' : '') + '>';
          return true;
        }
      });
      this.videoConfig.crossorigin = 'anonymous';
    }
    if (options.textTrackStyle) {
      var style = document.createElement('style');
      this.textTrackStyle = style;
      document.head.appendChild(style);
      var styleStr = '';
      for (var index in options.textTrackStyle) {
        styleStr += index + ': ' + options.textTrackStyle[index] + ';';
      }
      var wrap = options.id ? '#' + options.id : options.el.id ? '#' + options.el.id : '.' + options.el.className;
      if (style.sheet.insertRule) {
        style.sheet.insertRule(wrap + ' video::cue { ' + styleStr + ' }', 0);
      } else if (style.sheet.addRule) {
        style.sheet.addRule(wrap + ' video::cue', styleStr);
      }
    }
    this.video = _util2.default.createDom(this.videoConfig.mediaType, textTrackDom, this.videoConfig, '');
    if (!this.textTrackShowDefault && textTrackDom) {
      var trackDoms = this.video.getElementsByTagName('Track');
      trackDoms[0].track.mode = 'hidden';
    }
    if (options.autoplay) {
      this.video.autoplay = true;
      if (options.autoplayMuted) {
        this.video.muted = true;
      }
    }
    this.ev = ['play', 'playing', 'pause', 'ended', 'error', 'seeking', 'seeked', 'timeupdate', 'waiting', 'canplay', 'canplaythrough', 'durationchange', 'volumechange', 'loadeddata'].map(function (item) {
      return _defineProperty({}, item, 'on' + item.charAt(0).toUpperCase() + item.slice(1));
    });
    (0, _eventEmitter2.default)(this);

    this._interval = {};
    var lastBuffer = '0,0';
    var self = this;

    this.ev.forEach(function (item) {
      self.evItem = Object.keys(item)[0];
      var name = Object.keys(item)[0];
      self.video.addEventListener(Object.keys(item)[0], function () {
        // fix when video destroy called and video reload
        if (!self.logParams) {
          return;
        }
        if (name === 'play') {
          self.hasStart = true;
        } else if (name === 'waiting') {
          self.logParams.bc++;
          self.inWaitingStart = new Date().getTime();
        } else if (name === 'playing') {
          if (self.inWaitingStart) {
            self.logParams.bu_acu_t += new Date().getTime() - self.inWaitingStart;
            self.inWaitingStart = undefined;
          }
        } else if (name === 'loadeddata') {
          self.logParams.played.push({
            begin: 0,
            end: -1
          });
        } else if (name === 'seeking') {
          self.logParams.played.push({
            begin: self.video.currentTime,
            end: -1
          });
        } else if (self && self.logParams && self.logParams.played && name === 'timeupdate') {
          if (self.logParams.played.length < 1) {
            self.logParams.played.push({
              begin: self.video.currentTime,
              end: -1
            });
          }
          self.logParams.played[self.logParams.played.length - 1].end = self.video.currentTime;
        }
        if (name === 'error') {
          // process the error
          self._onError(name);
        } else {
          self.emit(name, self);
        }

        if (self.hasOwnProperty('_interval')) {
          if (['ended', 'error', 'timeupdate'].indexOf(name) < 0) {
            clearInterval(self._interval['bufferedChange']);
            _util2.default.setInterval(self, 'bufferedChange', function () {
              if (self.video && self.video.buffered) {
                var curBuffer = [];
                for (var i = 0, len = self.video.buffered.length; i < len; i++) {
                  curBuffer.push([self.video.buffered.start(i), self.video.buffered.end(i)]);
                }
                if (curBuffer.toString() !== lastBuffer) {
                  lastBuffer = curBuffer.toString();
                  self.emit('bufferedChange', curBuffer);
                }
              }
            }, 200);
          } else {
            if (name !== 'timeupdate') {
              _util2.default.clearInterval(self, 'bufferedChange');
            }
          }
        }
      }, false);
    });
  }
  /**
   * 错误监听处理逻辑抽离
   */


  _createClass(Proxy, [{
    key: '_onError',
    value: function _onError(name) {
      if (this.video && this.video.error) {
        this.emit(name, new _error2.default('other', this.currentTime, this.duration, this.networkState, this.readyState, this.currentSrc, this.src, this.ended, {
          line: 162,
          msg: this.error,
          handle: 'Constructor'
        }, this.video.error.code, this.video.error));
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.textTrackStyle) {
        this.textTrackStyle.parentNode.removeChild(this.textTrackStyle);
      }
    }
  }, {
    key: 'play',
    value: function play() {
      return this.video.play();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.video.pause();
    }
  }, {
    key: 'canPlayType',
    value: function canPlayType(type) {
      return this.video.canPlayType(type);
    }
  }, {
    key: 'getBufferedRange',
    value: function getBufferedRange() {
      var range = [0, 0];
      var video = this.video;
      var buffered = video.buffered;
      var currentTime = video.currentTime;
      if (buffered) {
        for (var i = 0, len = buffered.length; i < len; i++) {
          range[0] = buffered.start(i);
          range[1] = buffered.end(i);
          if (range[0] <= currentTime && currentTime <= range[1]) {
            break;
          }
        }
      }
      if (range[0] - currentTime <= 0 && currentTime - range[1] <= 0) {
        return range;
      } else {
        return [0, 0];
      }
    }
  }, {
    key: 'hasStart',
    get: function get() {
      return this._hasStart;
    },
    set: function set(bool) {
      if (typeof bool === 'boolean' && bool === true && !this._hasStart) {
        this._hasStart = true;
        this.emit('hasstart');
      }
    }
  }, {
    key: 'autoplay',
    set: function set(isTrue) {
      this.video.autoplay = isTrue;
    },
    get: function get() {
      return this.video.autoplay;
    }
  }, {
    key: 'buffered',
    get: function get() {
      return this.video.buffered;
    }
  }, {
    key: 'crossOrigin',
    get: function get() {
      return this.video.crossOrigin;
    },
    set: function set(isTrue) {
      this.video.crossOrigin = isTrue;
    }
  }, {
    key: 'currentSrc',
    get: function get() {
      return this.video.currentSrc;
    },
    set: function set(src) {
      this.video.currentSrc = src;
    }
  }, {
    key: 'currentTime',
    get: function get() {
      return this.video.currentTime;
    },
    set: function set(time) {
      if (typeof isFinite === 'function' && !isFinite(time)) return;
      this.video.currentTime = time;
      this.emit('currentTimeChange');
    }
  }, {
    key: 'defaultMuted',
    get: function get() {
      return this.video.defaultMuted;
    },
    set: function set(isTrue) {
      this.video.defaultMuted = isTrue;
    }
  }, {
    key: 'duration',
    get: function get() {
      return this.video.duration;
    }
  }, {
    key: 'ended',
    get: function get() {
      return this.video.ended;
    }
  }, {
    key: 'error',
    get: function get() {
      var err = this.video.error;
      if (!err) {
        return null;
      }
      var status = [{
        en: 'MEDIA_ERR_ABORTED',
        cn: '取回过程被用户中止'
      }, {
        en: 'MEDIA_ERR_NETWORK',
        cn: '当下载时发生错误'
      }, {
        en: 'MEDIA_ERR_DECODE',
        cn: '当解码时发生错误'
      }, {
        en: 'MEDIA_ERR_SRC_NOT_SUPPORTED',
        cn: '不支持音频/视频'
      }];
      return this.lang ? this.lang[status[err.code - 1].en] : status[err.code - 1].en;
    }
  }, {
    key: 'loop',
    get: function get() {
      return this.video.loop;
    },
    set: function set(isTrue) {
      this.video.loop = isTrue;
    }
  }, {
    key: 'muted',
    get: function get() {
      return this.video.muted;
    },
    set: function set(isTrue) {
      this.video.muted = isTrue;
    }
  }, {
    key: 'networkState',
    get: function get() {
      var status = [{
        en: 'NETWORK_EMPTY',
        cn: '音频/视频尚未初始化'
      }, {
        en: 'NETWORK_IDLE',
        cn: '音频/视频是活动的且已选取资源，但并未使用网络'
      }, {
        en: 'NETWORK_LOADING',
        cn: '浏览器正在下载数据'
      }, {
        en: 'NETWORK_NO_SOURCE',
        cn: '未找到音频/视频来源'
      }];
      return this.lang ? this.lang[status[this.video.networkState].en] : status[this.video.networkState].en;
    }
  }, {
    key: 'paused',
    get: function get() {
      return this.video.paused;
    }
  }, {
    key: 'playbackRate',
    get: function get() {
      return this.video.playbackRate;
    },
    set: function set(rate) {
      this.video.playbackRate = rate;
    }
  }, {
    key: 'played',
    get: function get() {
      return this.video.played;
    }
  }, {
    key: 'preload',
    get: function get() {
      return this.video.preload;
    },
    set: function set(isTrue) {
      this.video.preload = isTrue;
    }
  }, {
    key: 'readyState',
    get: function get() {
      var status = [{
        en: 'HAVE_NOTHING',
        cn: '没有关于音频/视频是否就绪的信息'
      }, {
        en: 'HAVE_METADATA',
        cn: '关于音频/视频就绪的元数据'
      }, {
        en: 'HAVE_CURRENT_DATA',
        cn: '关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒'
      }, {
        en: 'HAVE_FUTURE_DATA',
        cn: '当前及至少下一帧的数据是可用的'
      }, {
        en: 'HAVE_ENOUGH_DATA',
        cn: '可用数据足以开始播放'
      }];
      return this.lang ? this.lang[status[this.video.readyState].en] : status[this.video.readyState];
    }
  }, {
    key: 'seekable',
    get: function get() {
      return this.video.seekable;
    }
  }, {
    key: 'seeking',
    get: function get() {
      return this.video.seeking;
    }
  }, {
    key: 'src',
    get: function get() {
      return this.video.src;
    },
    set: function set(url) {
      var self = this;
      if (!_util2.default.hasClass(this.root, 'xgplayer-ended')) {
        this.emit('urlchange', JSON.parse(JSON.stringify(self.logParams)));
      }
      this.logParams = {
        bc: 0,
        bu_acu_t: 0,
        played: [],
        pt: new Date().getTime(),
        vt: new Date().getTime(),
        vd: 0
      };
      this.video.pause();
      this.video.src = url;
      this.emit('srcChange');
      this.logParams.playSrc = url;
      this.logParams.pt = new Date().getTime();
      this.logParams.vt = this.logParams.pt;
      function ldFunc() {
        self.logParams.vt = new Date().getTime();
        if (self.logParams.pt > self.logParams.vt) {
          self.logParams.pt = self.logParams.vt;
        }
        self.logParams.vd = self.video.duration;
        self.off('loadeddata', ldFunc);
      }
      this.once('loadeddata', ldFunc);
    }
  }, {
    key: 'poster',
    set: function set(posterUrl) {
      var poster = _util2.default.findDom(this.root, '.xgplayer-poster');
      if (poster) {
        poster.style.backgroundImage = 'url(' + posterUrl + ')';
      }
    }
  }, {
    key: 'volume',
    get: function get() {
      return this.video.volume;
    },
    set: function set(vol) {
      this.video.volume = vol;
    }
  }, {
    key: 'fullscreen',
    get: function get() {
      return _util2.default.hasClass(this.root, 'xgplayer-is-fullscreen') || _util2.default.hasClass(this.root, 'xgplayer-fullscreen-active');
    }
  }, {
    key: 'bullet',
    get: function get() {
      return _util2.default.findDom(this.root, 'xg-bullet') ? _util2.default.hasClass(_util2.default.findDom(this.root, 'xg-bullet'), 'xgplayer-has-bullet') : false;
    }
  }, {
    key: 'textTrack',
    get: function get() {
      return _util2.default.hasClass(this.root, 'xgplayer-is-textTrack');
    }
  }, {
    key: 'pip',
    get: function get() {
      return _util2.default.hasClass(this.root, 'xgplayer-pip-active');
    }
  }]);

  return Proxy;
}();

exports.default = Proxy;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var d = __webpack_require__(12),
    callable = __webpack_require__(29),
    apply = Function.prototype.apply,
    call = Function.prototype.call,
    create = Object.create,
    defineProperty = Object.defineProperty,
    defineProperties = Object.defineProperties,
    hasOwnProperty = Object.prototype.hasOwnProperty,
    descriptor = { configurable: true, enumerable: false, writable: true },
    on,
    _once2,
    off,
    emit,
    methods,
    descriptors,
    base;

on = function on(type, listener) {
	var data;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) data[type] = listener;else if (_typeof(data[type]) === 'object') data[type].push(listener);else data[type] = [data[type], listener];

	return this;
};

_once2 = function once(type, listener) {
	var _once, self;

	callable(listener);
	self = this;
	on.call(this, type, _once = function once() {
		off.call(self, type, _once);
		apply.call(listener, this, arguments);
	});

	_once.__eeOnceListener__ = listener;
	return this;
};

off = function off(type, listener) {
	var data, listeners, candidate, i;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) return this;
	data = this.__ee__;
	if (!data[type]) return this;
	listeners = data[type];

	if ((typeof listeners === 'undefined' ? 'undefined' : _typeof(listeners)) === 'object') {
		for (i = 0; candidate = listeners[i]; ++i) {
			if (candidate === listener || candidate.__eeOnceListener__ === listener) {
				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];else listeners.splice(i, 1);
			}
		}
	} else {
		if (listeners === listener || listeners.__eeOnceListener__ === listener) {
			delete data[type];
		}
	}

	return this;
};

emit = function emit(type) {
	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) return;
	listeners = this.__ee__[type];
	if (!listeners) return;

	if ((typeof listeners === 'undefined' ? 'undefined' : _typeof(listeners)) === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) {
			args[i - 1] = arguments[i];
		}listeners = listeners.slice();
		for (i = 0; listener = listeners[i]; ++i) {
			apply.call(listener, this, args);
		}
	} else {
		switch (arguments.length) {
			case 1:
				call.call(listeners, this);
				break;
			case 2:
				call.call(listeners, this, arguments[1]);
				break;
			case 3:
				call.call(listeners, this, arguments[1], arguments[2]);
				break;
			default:
				l = arguments.length;
				args = new Array(l - 1);
				for (i = 1; i < l; ++i) {
					args[i - 1] = arguments[i];
				}
				apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: _once2,
	off: off,
	emit: emit
};

descriptors = {
	on: d(on),
	once: d(_once2),
	off: d(off),
	emit: d(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function exports(o) {
	return o == null ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(2),
    isPlainFunction = __webpack_require__(13),
    assign = __webpack_require__(17),
    normalizeOpts = __webpack_require__(25),
    contains = __webpack_require__(26);

var d = module.exports = function (dscr, value /*, options*/) {
	var c, e, w, options, desc;
	if (arguments.length < 2 || typeof dscr !== "string") {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
		w = contains.call(dscr, "w");
	} else {
		c = w = true;
		e = false;
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set /*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== "string") {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (!isValue(get)) {
		get = undefined;
	} else if (!isPlainFunction(get)) {
		options = get;
		get = set = undefined;
	} else if (!isValue(set)) {
		set = undefined;
	} else if (!isPlainFunction(set)) {
		options = set;
		set = undefined;
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
	} else {
		c = true;
		e = false;
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__(14);

var classRe = /^\s*class[\s{/}]/,
    functionToString = Function.prototype.toString;

module.exports = function (value) {
	if (!isFunction(value)) return false;
	if (classRe.test(functionToString.call(value))) return false;
	return true;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototype = __webpack_require__(15);

module.exports = function (value) {
	if (typeof value !== "function") return false;

	if (!hasOwnProperty.call(value, "length")) return false;

	try {
		if (typeof value.length !== "number") return false;
		if (typeof value.call !== "function") return false;
		if (typeof value.apply !== "function") return false;
	} catch (error) {
		return false;
	}

	return !isPrototype(value);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(16);

module.exports = function (value) {
	if (!isObject(value)) return false;
	try {
		if (!value.constructor) return false;
		return value.constructor.prototype === value;
	} catch (error) {
		return false;
	}
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isValue = __webpack_require__(2);

// prettier-ignore
var possibleTypes = { "object": true, "function": true, "undefined": true /* document.all */ };

module.exports = function (value) {
	if (!isValue(value)) return false;
	return hasOwnProperty.call(possibleTypes, typeof value === "undefined" ? "undefined" : _typeof(value));
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(18)() ? Object.assign : __webpack_require__(19);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	var assign = Object.assign,
	    obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(20),
    value = __webpack_require__(24),
    max = Math.max;

module.exports = function (dest, src /*, …srcn*/) {
	var error,
	    i,
	    length = max(arguments.length, 2),
	    assign;
	dest = Object(value(dest));
	assign = function assign(key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(21)() ? Object.keys : __webpack_require__(22);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(1);

var keys = Object.keys;

module.exports = function (object) {
  return keys(isValue(object) ? Object(object) : object);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// eslint-disable-next-line no-empty-function

module.exports = function () {};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(1);

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isValue = __webpack_require__(1);

var forEach = Array.prototype.forEach,
    create = Object.create;

var process = function process(src, obj) {
	var key;
	for (key in src) {
		obj[key] = src[key];
	}
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1 /*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(27)() ? String.prototype.contains : __webpack_require__(28);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return str.contains("dwa") === true && str.contains("foo") === false;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString /*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (fn) {
	if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
	return fn;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INDEXDB = function () {
  function INDEXDB() {
    var mydb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: 'xgplayer', version: 1, db: null, ojstore: { name: 'xg-m4a', keypath: 'vid' } };

    _classCallCheck(this, INDEXDB);

    this.indexedDB = window.indexedDB || window.webkitindexedDB;
    this.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange; // 键范围
    this.myDB = mydb;
  }

  _createClass(INDEXDB, [{
    key: 'openDB',
    value: function openDB(callback) {
      var _this = this;

      // 建立或打开数据库，建立对象存储空间(ObjectStore)
      var self = this;
      var version = this.myDB.version || 1;
      var request = self.indexedDB.open(self.myDB.name, version);
      request.onerror = function (e) {
        // console.log('e.currentTarget.error.message')
      };
      request.onsuccess = function (e) {
        _this.myDB.db = e.target.result;
        // console.log('成功建立并打开数据库:' + this.myDB.name + ' version' + this.myDB.version)
        callback.call(self);
      };
      request.onupgradeneeded = function (e) {
        var db = e.target.result;
        var transaction = e.target.transaction;
        var store = void 0;
        if (!db.objectStoreNames.contains(self.myDB.ojstore.name)) {
          // 没有该对象空间时创建该对象空间
          store = db.createObjectStore(self.myDB.ojstore.name, { keyPath: self.myDB.ojstore.keypath });
          // console.log('成功建立对象存储空间：' + this.myDB.ojstore.name)
        }
      };
    }
  }, {
    key: 'deletedb',
    value: function deletedb() {
      // 删除数据库
      var self = this;
      self.indexedDB.deleteDatabase(this.myDB.name);
      // console.log(this.myDB.name + '数据库已删除')
    }
  }, {
    key: 'closeDB',
    value: function closeDB() {
      // 关闭数据库
      this.myDB.db.close();
      // console.log('数据库已关闭')
    }
  }, {
    key: 'addData',
    value: function addData(storename, data) {
      // 添加数据，重复添加会报错
      var store = this.myDB.db.transaction(storename, 'readwrite').objectStore(storename);
      var request = void 0;
      for (var i = 0; i < data.length; i++) {
        request = store.add(data[i]);
        request.onerror = function () {
          // console.error('add添加数据库中已有该数据')
        };
        request.onsuccess = function () {
          // console.log('add添加数据已存入数据库')
        };
      }
    }
  }, {
    key: 'putData',
    value: function putData(storename, data) {
      // 添加数据，重复添加会更新原有数据
      var store = this.myDB.db.transaction(storename, 'readwrite').objectStore(storename);
      var request = void 0;
      for (var i = 0; i < data.length; i++) {
        request = store.put(data[i]);
        request.onerror = function () {
          // console.error('put添加数据库中已有该数据')
        };
        request.onsuccess = function () {
          // console.log('put添加数据已存入数据库')
        };
      }
    }
  }, {
    key: 'getDataByKey',
    value: function getDataByKey(storename, key, callback) {
      var self = this;
      // 根据存储空间的键找到对应数据
      var store = this.myDB.db.transaction(storename, 'readwrite').objectStore(storename);
      var request = store.get(key);
      request.onerror = function () {
        // console.error('getDataByKey error')
        callback.call(self, null);
      };
      request.onsuccess = function (e) {
        var result = e.target.result;
        // console.log('查找数据成功')
        callback.call(self, result);
      };
    }
  }, {
    key: 'deleteData',
    value: function deleteData(storename, key) {
      // 删除某一条记录
      var store = this.myDB.db.transaction(storename, 'readwrite').objectStore(storename);
      store.delete(key);
      // console.log('已删除存储空间' + storename + '中' + key + '记录')
    }
  }, {
    key: 'clearData',
    value: function clearData(storename) {
      // 删除存储空间全部记录
      var store = this.myDB.db.transaction(storename, 'readwrite').objectStore(storename);
      store.clear();
      // console.log('已删除存储空间' + storename + '全部记录')
    }
  }]);

  return INDEXDB;
}();

exports.default = INDEXDB;
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Draggabilly v2.2.0
 * Make that shiz draggable
 * https://draggabilly.desandro.com
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(32), __webpack_require__(33)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (getSize, Unidragger) {
      return factory(window, getSize, Unidragger);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, getSize, Unidragger) {

  'use strict';

  // -------------------------- helpers & variables -------------------------- //

  // extend objects

  function extend(a, b) {
    for (var prop in b) {
      a[prop] = b[prop];
    }
    return a;
  }

  function noop() {}

  var jQuery = window.jQuery;

  // --------------------------  -------------------------- //

  function Draggabilly(element, options) {
    // querySelector if string
    this.element = typeof element == 'string' ? document.querySelector(element) : element;

    if (jQuery) {
      this.$element = jQuery(this.element);
    }

    // options
    this.options = extend({}, this.constructor.defaults);
    this.option(options);

    this._create();
  }

  // inherit Unidragger methods
  var proto = Draggabilly.prototype = Object.create(Unidragger.prototype);

  Draggabilly.defaults = {};

  /**
   * set options
   * @param {Object} opts
   */
  proto.option = function (opts) {
    extend(this.options, opts);
  };

  // css position values that don't need to be set
  var positionValues = {
    relative: true,
    absolute: true,
    fixed: true
  };

  proto._create = function () {
    // properties
    this.position = {};
    this._getPosition();

    this.startPoint = { x: 0, y: 0 };
    this.dragPoint = { x: 0, y: 0 };

    this.startPosition = extend({}, this.position);

    // set relative positioning
    var style = getComputedStyle(this.element);
    if (!positionValues[style.position]) {
      this.element.style.position = 'relative';
    }

    // events, bridge jQuery events from vanilla
    this.on('pointerDown', this.onPointerDown);
    this.on('pointerMove', this.onPointerMove);
    this.on('pointerUp', this.onPointerUp);

    this.enable();
    this.setHandles();
  };

  /**
   * set this.handles and bind start events to 'em
   */
  proto.setHandles = function () {
    this.handles = this.options.handle ? this.element.querySelectorAll(this.options.handle) : [this.element];

    this.bindHandles();
  };

  /**
   * emits events via EvEmitter and jQuery events
   * @param {String} type - name of event
   * @param {Event} event - original event
   * @param {Array} args - extra arguments
   */
  proto.dispatchEvent = function (type, event, args) {
    var emitArgs = [event].concat(args);
    this.emitEvent(type, emitArgs);
    this.dispatchJQueryEvent(type, event, args);
  };

  proto.dispatchJQueryEvent = function (type, event, args) {
    var jQuery = window.jQuery;
    // trigger jQuery event
    if (!jQuery || !this.$element) {
      return;
    }
    // create jQuery event
    var $event = jQuery.Event(event);
    $event.type = type;
    this.$element.trigger($event, args);
  };

  // -------------------------- position -------------------------- //

  // get x/y position from style
  proto._getPosition = function () {
    var style = getComputedStyle(this.element);
    var x = this._getPositionCoord(style.left, 'width');
    var y = this._getPositionCoord(style.top, 'height');
    // clean up 'auto' or other non-integer values
    this.position.x = isNaN(x) ? 0 : x;
    this.position.y = isNaN(y) ? 0 : y;

    this._addTransformPosition(style);
  };

  proto._getPositionCoord = function (styleSide, measure) {
    if (styleSide.indexOf('%') != -1) {
      // convert percent into pixel for Safari, #75
      var parentSize = getSize(this.element.parentNode);
      // prevent not-in-DOM element throwing bug, #131
      return !parentSize ? 0 : parseFloat(styleSide) / 100 * parentSize[measure];
    }
    return parseInt(styleSide, 10);
  };

  // add transform: translate( x, y ) to position
  proto._addTransformPosition = function (style) {
    var transform = style.transform;
    // bail out if value is 'none'
    if (transform.indexOf('matrix') !== 0) {
      return;
    }
    // split matrix(1, 0, 0, 1, x, y)
    var matrixValues = transform.split(',');
    // translate X value is in 12th or 4th position
    var xIndex = transform.indexOf('matrix3d') === 0 ? 12 : 4;
    var translateX = parseInt(matrixValues[xIndex], 10);
    // translate Y value is in 13th or 5th position
    var translateY = parseInt(matrixValues[xIndex + 1], 10);
    this.position.x += translateX;
    this.position.y += translateY;
  };

  // -------------------------- events -------------------------- //

  proto.onPointerDown = function (event, pointer) {
    this.element.classList.add('is-pointer-down');
    this.dispatchJQueryEvent('pointerDown', event, [pointer]);
  };

  /**
   * drag start
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto.dragStart = function (event, pointer) {
    if (!this.isEnabled) {
      return;
    }
    this._getPosition();
    this.measureContainment();
    // position _when_ drag began
    this.startPosition.x = this.position.x;
    this.startPosition.y = this.position.y;
    // reset left/top style
    this.setLeftTop();

    this.dragPoint.x = 0;
    this.dragPoint.y = 0;

    this.element.classList.add('is-dragging');
    this.dispatchEvent('dragStart', event, [pointer]);
    // start animation
    this.animate();
  };

  proto.measureContainment = function () {
    var container = this.getContainer();
    if (!container) {
      return;
    }

    var elemSize = getSize(this.element);
    var containerSize = getSize(container);
    var elemRect = this.element.getBoundingClientRect();
    var containerRect = container.getBoundingClientRect();

    var borderSizeX = containerSize.borderLeftWidth + containerSize.borderRightWidth;
    var borderSizeY = containerSize.borderTopWidth + containerSize.borderBottomWidth;

    var position = this.relativeStartPosition = {
      x: elemRect.left - (containerRect.left + containerSize.borderLeftWidth),
      y: elemRect.top - (containerRect.top + containerSize.borderTopWidth)
    };

    this.containSize = {
      width: containerSize.width - borderSizeX - position.x - elemSize.width,
      height: containerSize.height - borderSizeY - position.y - elemSize.height
    };
  };

  proto.getContainer = function () {
    var containment = this.options.containment;
    if (!containment) {
      return;
    }
    var isElement = containment instanceof HTMLElement;
    // use as element
    if (isElement) {
      return containment;
    }
    // querySelector if string
    if (typeof containment == 'string') {
      return document.querySelector(containment);
    }
    // fallback to parent element
    return this.element.parentNode;
  };

  // ----- move event ----- //

  proto.onPointerMove = function (event, pointer, moveVector) {
    this.dispatchJQueryEvent('pointerMove', event, [pointer, moveVector]);
  };

  /**
   * drag move
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto.dragMove = function (event, pointer, moveVector) {
    if (!this.isEnabled) {
      return;
    }
    var dragX = moveVector.x;
    var dragY = moveVector.y;

    var grid = this.options.grid;
    var gridX = grid && grid[0];
    var gridY = grid && grid[1];

    dragX = applyGrid(dragX, gridX);
    dragY = applyGrid(dragY, gridY);

    dragX = this.containDrag('x', dragX, gridX);
    dragY = this.containDrag('y', dragY, gridY);

    // constrain to axis
    dragX = this.options.axis == 'y' ? 0 : dragX;
    dragY = this.options.axis == 'x' ? 0 : dragY;

    this.position.x = this.startPosition.x + dragX;
    this.position.y = this.startPosition.y + dragY;
    // set dragPoint properties
    this.dragPoint.x = dragX;
    this.dragPoint.y = dragY;

    this.dispatchEvent('dragMove', event, [pointer, moveVector]);
  };

  function applyGrid(value, grid, method) {
    method = method || 'round';
    return grid ? Math[method](value / grid) * grid : value;
  }

  proto.containDrag = function (axis, drag, grid) {
    if (!this.options.containment) {
      return drag;
    }
    var measure = axis == 'x' ? 'width' : 'height';

    var rel = this.relativeStartPosition[axis];
    var min = applyGrid(-rel, grid, 'ceil');
    var max = this.containSize[measure];
    max = applyGrid(max, grid, 'floor');
    return Math.max(min, Math.min(max, drag));
  };

  // ----- end event ----- //

  /**
   * pointer up
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto.onPointerUp = function (event, pointer) {
    this.element.classList.remove('is-pointer-down');
    this.dispatchJQueryEvent('pointerUp', event, [pointer]);
  };

  /**
   * drag end
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto.dragEnd = function (event, pointer) {
    if (!this.isEnabled) {
      return;
    }
    // use top left position when complete
    this.element.style.transform = '';
    this.setLeftTop();
    this.element.classList.remove('is-dragging');
    this.dispatchEvent('dragEnd', event, [pointer]);
  };

  // -------------------------- animation -------------------------- //

  proto.animate = function () {
    // only render and animate if dragging
    if (!this.isDragging) {
      return;
    }

    this.positionDrag();

    var _this = this;
    requestAnimationFrame(function animateFrame() {
      _this.animate();
    });
  };

  // left/top positioning
  proto.setLeftTop = function () {
    this.element.style.left = this.position.x + 'px';
    this.element.style.top = this.position.y + 'px';
  };

  proto.positionDrag = function () {
    this.element.style.transform = 'translate3d( ' + this.dragPoint.x + 'px, ' + this.dragPoint.y + 'px, 0)';
  };

  // ----- staticClick ----- //

  proto.staticClick = function (event, pointer) {
    this.dispatchEvent('staticClick', event, [pointer]);
  };

  // ----- methods ----- //

  /**
   * @param {Number} x
   * @param {Number} y
   */
  proto.setPosition = function (x, y) {
    this.position.x = x;
    this.position.y = y;
    this.setLeftTop();
  };

  proto.enable = function () {
    this.isEnabled = true;
  };

  proto.disable = function () {
    this.isEnabled = false;
    if (this.isDragging) {
      this.dragEnd();
    }
  };

  proto.destroy = function () {
    this.disable();
    // reset styles
    this.element.style.transform = '';
    this.element.style.left = '';
    this.element.style.top = '';
    this.element.style.position = '';
    // unbind handles
    this.unbindHandles();
    // remove jQuery data
    if (this.$element) {
      this.$element.removeData('draggabilly');
    }
  };

  // ----- jQuery bridget ----- //

  // required for jQuery bridget
  proto._init = noop;

  if (jQuery && jQuery.bridget) {
    jQuery.bridget('draggabilly', Draggabilly);
  }

  // -----  ----- //

  return Draggabilly;
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

(function (window, factory) {
  /* jshint strict: false */ /* globals define, module */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory() {
  'use strict';

  // -------------------------- helpers -------------------------- //

  // get a number from a string, not a percentage

  function getStyleSize(value) {
    var num = parseFloat(value);
    // not a percent like '100%', and a number
    var isValid = value.indexOf('%') == -1 && !isNaN(num);
    return isValid && num;
  }

  function noop() {}

  var logError = typeof console == 'undefined' ? noop : function (message) {
    console.error(message);
  };

  // -------------------------- measurements -------------------------- //

  var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];

  var measurementsLength = measurements.length;

  function getZeroSize() {
    var size = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    };
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      size[measurement] = 0;
    }
    return size;
  }

  // -------------------------- getStyle -------------------------- //

  /**
   * getStyle, get style of element, check for Firefox bug
   * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
   */
  function getStyle(elem) {
    var style = getComputedStyle(elem);
    if (!style) {
      logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
    }
    return style;
  }

  // -------------------------- setup -------------------------- //

  var isSetup = false;

  var isBoxSizeOuter;

  /**
   * setup
   * check isBoxSizerOuter
   * do on first getSize() rather than on page load for Firefox bug
   */
  function setup() {
    // setup once
    if (isSetup) {
      return;
    }
    isSetup = true;

    // -------------------------- box sizing -------------------------- //

    /**
     * Chrome & Safari measure the outer-width on style.width on border-box elems
     * IE11 & Firefox<29 measures the inner-width
     */
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style.boxSizing = 'border-box';

    var body = document.body || document.documentElement;
    body.appendChild(div);
    var style = getStyle(div);
    // round value for browser zoom. desandro/masonry#928
    isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
    getSize.isBoxSizeOuter = isBoxSizeOuter;

    body.removeChild(div);
  }

  // -------------------------- getSize -------------------------- //

  function getSize(elem) {
    setup();

    // use querySeletor if elem is string
    if (typeof elem == 'string') {
      elem = document.querySelector(elem);
    }

    // do not proceed on non-objects
    if (!elem || (typeof elem === 'undefined' ? 'undefined' : _typeof(elem)) != 'object' || !elem.nodeType) {
      return;
    }

    var style = getStyle(elem);

    // if hidden, everything is 0
    if (style.display == 'none') {
      return getZeroSize();
    }

    var size = {};
    size.width = elem.offsetWidth;
    size.height = elem.offsetHeight;

    var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

    // get all measurements
    for (var i = 0; i < measurementsLength; i++) {
      var measurement = measurements[i];
      var value = style[measurement];
      var num = parseFloat(value);
      // any 'auto', 'medium' value will be 0
      size[measurement] = !isNaN(num) ? num : 0;
    }

    var paddingWidth = size.paddingLeft + size.paddingRight;
    var paddingHeight = size.paddingTop + size.paddingBottom;
    var marginWidth = size.marginLeft + size.marginRight;
    var marginHeight = size.marginTop + size.marginBottom;
    var borderWidth = size.borderLeftWidth + size.borderRightWidth;
    var borderHeight = size.borderTopWidth + size.borderBottomWidth;

    var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

    // overwrite width and height if we can get it from style
    var styleWidth = getStyleSize(style.width);
    if (styleWidth !== false) {
      size.width = styleWidth + (
      // add padding and border unless it's already including it
      isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
    }

    var styleHeight = getStyleSize(style.height);
    if (styleHeight !== false) {
      size.height = styleHeight + (
      // add padding and border unless it's already including it
      isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
    }

    size.innerWidth = size.width - (paddingWidth + borderWidth);
    size.innerHeight = size.height - (paddingHeight + borderHeight);

    size.outerWidth = size.width + marginWidth;
    size.outerHeight = size.height + marginHeight;

    return size;
  }

  return getSize;
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Unidragger v2.3.0
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

(function (window, factory) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(34)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Unipointer) {
      return factory(window, Unipointer);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, Unipointer) {

  'use strict';

  // -------------------------- Unidragger -------------------------- //

  function Unidragger() {}

  // inherit Unipointer & EvEmitter
  var proto = Unidragger.prototype = Object.create(Unipointer.prototype);

  // ----- bind start ----- //

  proto.bindHandles = function () {
    this._bindHandles(true);
  };

  proto.unbindHandles = function () {
    this._bindHandles(false);
  };

  /**
   * Add or remove start event
   * @param {Boolean} isAdd
   */
  proto._bindHandles = function (isAdd) {
    // munge isAdd, default to true
    isAdd = isAdd === undefined ? true : isAdd;
    // bind each handle
    var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
    var touchAction = isAdd ? this._touchActionValue : '';
    for (var i = 0; i < this.handles.length; i++) {
      var handle = this.handles[i];
      this._bindStartEvent(handle, isAdd);
      handle[bindMethod]('click', this);
      // touch-action: none to override browser touch gestures. metafizzy/flickity#540
      if (window.PointerEvent) {
        handle.style.touchAction = touchAction;
      }
    }
  };

  // prototype so it can be overwriteable by Flickity
  proto._touchActionValue = 'none';

  // ----- start event ----- //

  /**
   * pointer start
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto.pointerDown = function (event, pointer) {
    var isOkay = this.okayPointerDown(event);
    if (!isOkay) {
      return;
    }
    // track start event position
    this.pointerDownPointer = pointer;

    event.preventDefault();
    this.pointerDownBlur();
    // bind move and end events
    this._bindPostStartEvents(event);
    this.emitEvent('pointerDown', [event, pointer]);
  };

  // nodes that have text fields
  var cursorNodes = {
    TEXTAREA: true,
    INPUT: true,
    SELECT: true,
    OPTION: true
  };

  // input types that do not have text fields
  var clickTypes = {
    radio: true,
    checkbox: true,
    button: true,
    submit: true,
    image: true,
    file: true
  };

  // dismiss inputs with text fields. flickity#403, flickity#404
  proto.okayPointerDown = function (event) {
    var isCursorNode = cursorNodes[event.target.nodeName];
    var isClickType = clickTypes[event.target.type];
    var isOkay = !isCursorNode || isClickType;
    if (!isOkay) {
      this._pointerReset();
    }
    return isOkay;
  };

  // kludge to blur previously focused input
  proto.pointerDownBlur = function () {
    var focused = document.activeElement;
    // do not blur body for IE10, metafizzy/flickity#117
    var canBlur = focused && focused.blur && focused != document.body;
    if (canBlur) {
      focused.blur();
    }
  };

  // ----- move event ----- //

  /**
   * drag move
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto.pointerMove = function (event, pointer) {
    var moveVector = this._dragPointerMove(event, pointer);
    this.emitEvent('pointerMove', [event, pointer, moveVector]);
    this._dragMove(event, pointer, moveVector);
  };

  // base pointer move logic
  proto._dragPointerMove = function (event, pointer) {
    var moveVector = {
      x: pointer.pageX - this.pointerDownPointer.pageX,
      y: pointer.pageY - this.pointerDownPointer.pageY
    };
    // start drag if pointer has moved far enough to start drag
    if (!this.isDragging && this.hasDragStarted(moveVector)) {
      this._dragStart(event, pointer);
    }
    return moveVector;
  };

  // condition if pointer has moved far enough to start drag
  proto.hasDragStarted = function (moveVector) {
    return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3;
  };

  // ----- end event ----- //

  /**
   * pointer up
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto.pointerUp = function (event, pointer) {
    this.emitEvent('pointerUp', [event, pointer]);
    this._dragPointerUp(event, pointer);
  };

  proto._dragPointerUp = function (event, pointer) {
    if (this.isDragging) {
      this._dragEnd(event, pointer);
    } else {
      // pointer didn't move enough for drag to start
      this._staticClick(event, pointer);
    }
  };

  // -------------------------- drag -------------------------- //

  // dragStart
  proto._dragStart = function (event, pointer) {
    this.isDragging = true;
    // prevent clicks
    this.isPreventingClicks = true;
    this.dragStart(event, pointer);
  };

  proto.dragStart = function (event, pointer) {
    this.emitEvent('dragStart', [event, pointer]);
  };

  // dragMove
  proto._dragMove = function (event, pointer, moveVector) {
    // do not drag if not dragging yet
    if (!this.isDragging) {
      return;
    }

    this.dragMove(event, pointer, moveVector);
  };

  proto.dragMove = function (event, pointer, moveVector) {
    event.preventDefault();
    this.emitEvent('dragMove', [event, pointer, moveVector]);
  };

  // dragEnd
  proto._dragEnd = function (event, pointer) {
    // set flags
    this.isDragging = false;
    // re-enable clicking async
    setTimeout(function () {
      delete this.isPreventingClicks;
    }.bind(this));

    this.dragEnd(event, pointer);
  };

  proto.dragEnd = function (event, pointer) {
    this.emitEvent('dragEnd', [event, pointer]);
  };

  // ----- onclick ----- //

  // handle all clicks and prevent clicks when dragging
  proto.onclick = function (event) {
    if (this.isPreventingClicks) {
      event.preventDefault();
    }
  };

  // ----- staticClick ----- //

  // triggered after pointer down & up with no/tiny movement
  proto._staticClick = function (event, pointer) {
    // ignore emulated mouse up clicks
    if (this.isIgnoringMouseUp && event.type == 'mouseup') {
      return;
    }

    this.staticClick(event, pointer);

    // set flag for emulated clicks 300ms after touchend
    if (event.type != 'mouseup') {
      this.isIgnoringMouseUp = true;
      // reset flag after 300ms
      setTimeout(function () {
        delete this.isIgnoringMouseUp;
      }.bind(this), 400);
    }
  };

  proto.staticClick = function (event, pointer) {
    this.emitEvent('staticClick', [event, pointer]);
  };

  // ----- utils ----- //

  Unidragger.getPointerPoint = Unipointer.getPointerPoint;

  // -----  ----- //

  return Unidragger;
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

(function (window, factory) {
  // universal module definition
  /* jshint strict: false */ /*global define, module, require */
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(35)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (EvEmitter) {
      return factory(window, EvEmitter);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window, function factory(window, EvEmitter) {

  'use strict';

  function noop() {}

  function Unipointer() {}

  // inherit EvEmitter
  var proto = Unipointer.prototype = Object.create(EvEmitter.prototype);

  proto.bindStartEvent = function (elem) {
    this._bindStartEvent(elem, true);
  };

  proto.unbindStartEvent = function (elem) {
    this._bindStartEvent(elem, false);
  };

  /**
   * Add or remove start event
   * @param {Boolean} isAdd - remove if falsey
   */
  proto._bindStartEvent = function (elem, isAdd) {
    // munge isAdd, default to true
    isAdd = isAdd === undefined ? true : isAdd;
    var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';

    // default to mouse events
    var startEvent = 'mousedown';
    if (window.PointerEvent) {
      // Pointer Events
      startEvent = 'pointerdown';
    } else if ('ontouchstart' in window) {
      // Touch Events. iOS Safari
      startEvent = 'touchstart';
    }
    elem[bindMethod](startEvent, this);
  };

  // trigger handler methods for events
  proto.handleEvent = function (event) {
    var method = 'on' + event.type;
    if (this[method]) {
      this[method](event);
    }
  };

  // returns the touch that we're keeping track of
  proto.getTouch = function (touches) {
    for (var i = 0; i < touches.length; i++) {
      var touch = touches[i];
      if (touch.identifier == this.pointerIdentifier) {
        return touch;
      }
    }
  };

  // ----- start event ----- //

  proto.onmousedown = function (event) {
    // dismiss clicks from right or middle buttons
    var button = event.button;
    if (button && button !== 0 && button !== 1) {
      return;
    }
    this._pointerDown(event, event);
  };

  proto.ontouchstart = function (event) {
    this._pointerDown(event, event.changedTouches[0]);
  };

  proto.onpointerdown = function (event) {
    this._pointerDown(event, event);
  };

  /**
   * pointer start
   * @param {Event} event
   * @param {Event or Touch} pointer
   */
  proto._pointerDown = function (event, pointer) {
    // dismiss right click and other pointers
    // button = 0 is okay, 1-4 not
    if (event.button || this.isPointerDown) {
      return;
    }

    this.isPointerDown = true;
    // save pointer identifier to match up touch events
    this.pointerIdentifier = pointer.pointerId !== undefined ?
    // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;

    this.pointerDown(event, pointer);
  };

  proto.pointerDown = function (event, pointer) {
    this._bindPostStartEvents(event);
    this.emitEvent('pointerDown', [event, pointer]);
  };

  // hash of events to be bound after start event
  var postStartEvents = {
    mousedown: ['mousemove', 'mouseup'],
    touchstart: ['touchmove', 'touchend', 'touchcancel'],
    pointerdown: ['pointermove', 'pointerup', 'pointercancel']
  };

  proto._bindPostStartEvents = function (event) {
    if (!event) {
      return;
    }
    // get proper events to match start event
    var events = postStartEvents[event.type];
    // bind events to node
    events.forEach(function (eventName) {
      window.addEventListener(eventName, this);
    }, this);
    // save these arguments
    this._boundPointerEvents = events;
  };

  proto._unbindPostStartEvents = function () {
    // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
    if (!this._boundPointerEvents) {
      return;
    }
    this._boundPointerEvents.forEach(function (eventName) {
      window.removeEventListener(eventName, this);
    }, this);

    delete this._boundPointerEvents;
  };

  // ----- move event ----- //

  proto.onmousemove = function (event) {
    this._pointerMove(event, event);
  };

  proto.onpointermove = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerMove(event, event);
    }
  };

  proto.ontouchmove = function (event) {
    var touch = this.getTouch(event.changedTouches);
    if (touch) {
      this._pointerMove(event, touch);
    }
  };

  /**
   * pointer move
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */
  proto._pointerMove = function (event, pointer) {
    this.pointerMove(event, pointer);
  };

  // public
  proto.pointerMove = function (event, pointer) {
    this.emitEvent('pointerMove', [event, pointer]);
  };

  // ----- end event ----- //


  proto.onmouseup = function (event) {
    this._pointerUp(event, event);
  };

  proto.onpointerup = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerUp(event, event);
    }
  };

  proto.ontouchend = function (event) {
    var touch = this.getTouch(event.changedTouches);
    if (touch) {
      this._pointerUp(event, touch);
    }
  };

  /**
   * pointer up
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */
  proto._pointerUp = function (event, pointer) {
    this._pointerDone();
    this.pointerUp(event, pointer);
  };

  // public
  proto.pointerUp = function (event, pointer) {
    this.emitEvent('pointerUp', [event, pointer]);
  };

  // ----- pointer done ----- //

  // triggered on pointer up & pointer cancel
  proto._pointerDone = function () {
    this._pointerReset();
    this._unbindPostStartEvents();
    this.pointerDone();
  };

  proto._pointerReset = function () {
    // reset properties
    this.isPointerDown = false;
    delete this.pointerIdentifier;
  };

  proto.pointerDone = noop;

  // ----- pointer cancel ----- //

  proto.onpointercancel = function (event) {
    if (event.pointerId == this.pointerIdentifier) {
      this._pointerCancel(event, event);
    }
  };

  proto.ontouchcancel = function (event) {
    var touch = this.getTouch(event.changedTouches);
    if (touch) {
      this._pointerCancel(event, touch);
    }
  };

  /**
   * pointer cancel
   * @param {Event} event
   * @param {Event or Touch} pointer
   * @private
   */
  proto._pointerCancel = function (event, pointer) {
    this._pointerDone();
    this.pointerCancel(event, pointer);
  };

  // public
  proto.pointerCancel = function (event, pointer) {
    this.emitEvent('pointerCancel', [event, pointer]);
  };

  // -----  ----- //

  // utility function for getting x/y coords from event
  Unipointer.getPointerPoint = function (pointer) {
    return {
      x: pointer.pageX,
      y: pointer.pageY
    };
  };

  // -----  ----- //

  return Unipointer;
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

(function (global, factory) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if (true) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window != 'undefined' ? window : undefined, function () {

  "use strict";

  function EvEmitter() {}

  var proto = EvEmitter.prototype;

  proto.on = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // set events hash
    var events = this._events = this._events || {};
    // set listeners array
    var listeners = events[eventName] = events[eventName] || [];
    // only add once
    if (listeners.indexOf(listener) == -1) {
      listeners.push(listener);
    }

    return this;
  };

  proto.once = function (eventName, listener) {
    if (!eventName || !listener) {
      return;
    }
    // add event
    this.on(eventName, listener);
    // set once flag
    // set onceEvents hash
    var onceEvents = this._onceEvents = this._onceEvents || {};
    // set onceListeners object
    var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
    // set flag
    onceListeners[listener] = true;

    return this;
  };

  proto.off = function (eventName, listener) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    var index = listeners.indexOf(listener);
    if (index != -1) {
      listeners.splice(index, 1);
    }

    return this;
  };

  proto.emitEvent = function (eventName, args) {
    var listeners = this._events && this._events[eventName];
    if (!listeners || !listeners.length) {
      return;
    }
    // copy over to avoid interference if .off() in listener
    listeners = listeners.slice(0);
    args = args || [];
    // once stuff
    var onceListeners = this._onceEvents && this._onceEvents[eventName];

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off(eventName, listener);
        // unset once flag
        delete onceListeners[listener];
      }
      // trigger listener
      listener.apply(this, args);
    }

    return this;
  };

  proto.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };

  return EvEmitter;
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getAbsoluteURL = exports.getAbsoluteURL = function getAbsoluteURL(url) {
  // Check if absolute URL
  if (!url.match(/^https?:\/\//)) {
    var div = document.createElement('div');
    div.innerHTML = '<a href="' + url + '">x</a>';
    url = div.firstChild.href;
  }
  return url;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//download.js v4.2, by dandavis; 2008-2016. [MIT] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

(function (root, factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})(undefined, function () {

	return function download(data, strFileName, strMimeType) {

		var self = window,
		    // this script is only for browsers anyway...
		defaultMime = "application/octet-stream",
		    // this default mime also triggers iframe downloads
		mimeType = strMimeType || defaultMime,
		    payload = data,
		    url = !strFileName && !strMimeType && payload,
		    anchor = document.createElement("a"),
		    toString = function toString(a) {
			return String(a);
		},
		    myBlob = self.Blob || self.MozBlob || self.WebKitBlob || toString,
		    fileName = strFileName || "download",
		    blob,
		    reader;
		myBlob = myBlob.call ? myBlob.bind(self) : Blob;

		if (String(this) === "true") {
			//reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload = [payload, mimeType];
			mimeType = payload[0];
			payload = payload[1];
		}

		if (url && url.length < 2048) {
			// if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split("/").pop().split("?")[0];
			anchor.href = url; // assign href prop to temp anchor
			if (anchor.href.indexOf(url) !== -1) {
				// if the browser determines that it's a potentially valid url path:
				var ajax = new XMLHttpRequest();
				ajax.open("GET", url, true);
				ajax.responseType = 'blob';
				ajax.onload = function (e) {
					download(e.target.response, fileName, defaultMime);
				};
				setTimeout(function () {
					ajax.send();
				}, 0); // allows setting custom ajax headers using the return:
				return ajax;
			} // end if valid url?
		} // end if url?


		//go ahead and download dataURLs right away
		if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(payload)) {

			if (payload.length > 1024 * 1024 * 1.999 && myBlob !== toString) {
				payload = dataUrlToBlob(payload);
				mimeType = payload.type || defaultMime;
			} else {
				return navigator.msSaveBlob ? // IE10 can't do a[download], only Blobs:
				navigator.msSaveBlob(dataUrlToBlob(payload), fileName) : saver(payload); // everyone else can save dataURLs un-processed
			}
		} else {
			//not data url, is it a string with special needs?
			if (/([\x80-\xff])/.test(payload)) {
				var i = 0,
				    tempUiArr = new Uint8Array(payload.length),
				    mx = tempUiArr.length;
				for (i; i < mx; ++i) {
					tempUiArr[i] = payload.charCodeAt(i);
				}payload = new myBlob([tempUiArr], { type: mimeType });
			}
		}
		blob = payload instanceof myBlob ? payload : new myBlob([payload], { type: mimeType });

		function dataUrlToBlob(strUrl) {
			var parts = strUrl.split(/[:;,]/),
			    type = parts[1],
			    decoder = parts[2] == "base64" ? atob : decodeURIComponent,
			    binData = decoder(parts.pop()),
			    mx = binData.length,
			    i = 0,
			    uiArr = new Uint8Array(mx);

			for (i; i < mx; ++i) {
				uiArr[i] = binData.charCodeAt(i);
			}return new myBlob([uiArr], { type: type });
		}

		function saver(url, winMode) {

			if ('download' in anchor) {
				//html5 A[download]
				anchor.href = url;
				anchor.setAttribute("download", fileName);
				anchor.className = "download-js-link";
				anchor.innerHTML = "downloading...";
				anchor.style.display = "none";
				document.body.appendChild(anchor);
				setTimeout(function () {
					anchor.click();
					document.body.removeChild(anchor);
					if (winMode === true) {
						setTimeout(function () {
							self.URL.revokeObjectURL(anchor.href);
						}, 250);
					}
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
				if (/^data:/.test(url)) url = "data:" + url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if (!window.open(url)) {
					// popup blocked, offer direct download:
					if (confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")) {
						location.href = url;
					}
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement("iframe");
			document.body.appendChild(f);

			if (!winMode && /^data:/.test(url)) {
				// force a mime that will download:
				url = "data:" + url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src = url;
			setTimeout(function () {
				document.body.removeChild(f);
			}, 333);
		} //end saver


		if (navigator.msSaveBlob) {
			// IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if (self.URL) {
			// simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		} else {
			// handle non-Blob()+non-URL browsers:
			if (typeof blob === "string" || blob.constructor === toString) {
				try {
					return saver("data:" + mimeType + ";base64," + self.btoa(blob));
				} catch (y) {
					return saver("data:" + mimeType + "," + encodeURIComponent(blob));
				}
			}

			// Blob but not URL support:
			reader = new FileReader();
			reader.onload = function (e) {
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
	}; /* end download() */
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var volume = function volume() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  var container = void 0,
      slider = void 0,
      bar = void 0,
      selected = void 0,
      icon = void 0;
  function onCanplay() {
    player.volume = _player2.default.sniffer.device === 'mobile' ? 1 : player.config.volume;
    container = player.controls.querySelector('.xgplayer-volume');
    slider = container.querySelector('.xgplayer-slider');
    bar = container.querySelector('.xgplayer-bar');
    selected = container.querySelector('.xgplayer-drag');
    icon = container.querySelector('.xgplayer-icon');
  }
  player.once('canplay', onCanplay);

  function onVolumeBarClick(e) {
    player.video.muted = false;
    slider.focus();
    util.event(e);

    var barRect = bar.getBoundingClientRect();
    var pos = { x: e.clientX, y: e.clientY };
    var height = selected.getBoundingClientRect().height;
    var isMove = false;
    var onMove = function onMove(e) {
      e.preventDefault();
      e.stopPropagation();
      util.event(e);
      isMove = true;
      var w = height - e.clientY + pos.y;
      var now = w / barRect.height;
      selected.style.height = w + 'px';
      player.volume = Math.max(Math.min(now, 1), 0);
    };
    var onUp = function onUp(e) {
      e.preventDefault();
      e.stopPropagation();
      util.event(e);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);

      if (!isMove) {
        var w = barRect.height - (e.clientY - barRect.top);
        var now = w / barRect.height;
        selected.style.height = w + 'px';
        if (now <= 0) {
          if (player.volume > 0) {
            selected.volume = player.video.volume;
          } else {
            now = selected.volume;
          }
        }
        player.volume = Math.max(Math.min(now, 1), 0);
      }
      slider.volume = player.volume;
      isMove = false;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return false;
  }
  player.on('volumeBarClick', onVolumeBarClick);

  function onVolumeIconClick() {
    if (_player2.default.sniffer.device === 'mobile') {
      // util.removeClass(root, 'xgplayer-volume-muted')
      // util.removeClass(root, 'xgplayer-volume-large')
      if (player.video.muted) {
        player.video.muted = false;
        // util.addClass(root, 'xgplayer-volume-large')
      } else {
        player.video.muted = true;
        // util.addClass(root, 'xgplayer-volume-muted')
      }
    } else {
      player.video.muted = false;
      if (player.volume < 0.1) {
        if (slider.volume < 0.1) {
          player.volume = 0.6;
        } else {
          player.volume = slider.volume;
        }
      } else {
        player.volume = 0;
      }
    }
    // onVolumeChange ()
  }
  player.on('volumeIconClick', onVolumeIconClick);

  function onVolumeIconEnter() {
    util.addClass(root, 'xgplayer-volume-active');
    if (container) {
      container.focus();
    }
  }
  player.on('volumeIconEnter', onVolumeIconEnter);

  function onVolumeIconLeave() {
    util.removeClass(root, 'xgplayer-volume-active');
  }
  player.on('volumeIconLeave', onVolumeIconLeave);

  var _changeTimer = null;
  function onVolumeChange() {
    if (_changeTimer) {
      clearTimeout(_changeTimer);
    }
    _changeTimer = setTimeout(function () {
      if (_player2.default.sniffer.device === 'mobile') {
        util.removeClass(root, 'xgplayer-volume-muted');
        util.removeClass(root, 'xgplayer-volume-large');
        if (player.video.muted) {
          util.addClass(root, 'xgplayer-volume-muted');
        } else {
          util.addClass(root, 'xgplayer-volume-large');
        }
      } else {
        util.removeClass(root, 'xgplayer-volume-muted');
        util.removeClass(root, 'xgplayer-volume-small');
        util.removeClass(root, 'xgplayer-volume-large');
        if (player.volume === 0) {
          util.addClass(root, 'xgplayer-volume-muted');
        } else if (player.volume < 0.5) {
          util.addClass(root, 'xgplayer-volume-small');
        } else {
          util.addClass(root, 'xgplayer-volume-large');
        }
        if (!bar) return;
        var containerHeight = bar.getBoundingClientRect().height || 76;
        selected.style.height = player.volume * containerHeight + 'px';
      }
    }, 50);
  }
  player.on('volumechange', onVolumeChange);

  function onDestroy() {
    player.off('canplay', onCanplay);
    player.off('volumeBarClick', onVolumeBarClick);
    player.off('volumeIconClick', onVolumeIconClick);
    player.off('volumeIconEnter', onVolumeIconEnter);
    player.off('volumeIconLeave', onVolumeIconLeave);
    player.off('volumechange', onVolumeChange);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('volume', volume);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var start = function start() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;

  function onCanplay() {
    util.removeClass(root, 'xgplayer-is-enter');
  }

  function onPlaying() {
    util.removeClass(root, 'xgplayer-is-enter');
  }

  function onStartBtnClick() {
    if (util.hasClass(root, 'xgplayer-nostart')) {
      util.removeClass(root, 'xgplayer-nostart'); // for ie quick switch
      util.addClass(root, 'xgplayer-is-enter');
      player.on('canplay', onCanplay);
      player.once('playing', onPlaying);
      if (!root.querySelector('video')) {
        player.start();
      }
      var playPromise = player.play();
      if (playPromise !== undefined && playPromise) {
        playPromise.catch(function (err) {});
      }
    } else {
      if (player.paused) {
        util.removeClass(root, 'xgplayer-nostart xgplayer-isloading');
        setTimeout(function () {
          var playPromise = player.play();
          if (playPromise !== undefined && playPromise) {
            playPromise.catch(function (err) {});
          }
        }, 10);
      }
    }
  }
  player.on('startBtnClick', onStartBtnClick);

  function onDestroy() {
    player.off('canplay', onCanplay);
    player.off('playing', onPlaying);
    player.off('startBtnClick', onStartBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('start', start);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var screenShot = function screenShot() {
  var player = this;
  var root = player.root;
  var screenShotOptions = player.config.screenShot;
  if (!screenShotOptions) {
    return;
  }

  var encoderOptions = 0.92;
  if (screenShotOptions.quality || screenShotOptions.quality === 0) {
    encoderOptions = screenShotOptions.quality;
  }
  var type = screenShotOptions.type === undefined ? 'image/png' : screenShotOptions.type;
  var format = screenShotOptions.format === undefined ? '.png' : screenShotOptions.format;

  var canvas = document.createElement('canvas');
  var canvasCtx = canvas.getContext('2d');
  var img = new Image();
  canvas.width = this.config.width || 600;
  canvas.height = this.config.height || 337.5;

  var saveScreenShot = function saveScreenShot(data, filename) {
    var saveLink = document.createElement('a');
    saveLink.href = data;
    saveLink.download = filename;
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    saveLink.dispatchEvent(event);
  };

  function onScreenShotBtnClick() {
    var save = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    canvas.width = player.video.videoWidth || 600;
    canvas.height = player.video.videoHeight || 337.5;
    img.onload = function () {
      canvasCtx.drawImage(player.video, 0, 0, canvas.width, canvas.height);
      img.setAttribute('crossOrigin', 'anonymous');
      img.src = canvas.toDataURL(type, encoderOptions).replace(type, 'image/octet-stream');
      var screenShotImg = img.src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
      player.emit('screenShot', screenShotImg);
      save && saveScreenShot(screenShotImg, '截图' + format);
    }();
  }
  player.on('screenShotBtnClick', onScreenShotBtnClick);

  function onDestroy() {
    player.off('screenShotBtnClick', onScreenShotBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('screenShot', screenShot);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rotate = function rotate() {
  var player = this;
  var rotateConfig = player.config.rotate;
  if (!rotateConfig) {
    return;
  }

  function onRotateBtnClick() {
    player.rotate(rotateConfig.clockwise, rotateConfig.innerRotate);
  }
  player.on('rotateBtnClick', onRotateBtnClick);

  function onDestroy() {
    player.off('rotateBtnClick', onRotateBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('rotate', rotate);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replay = function replay() {
  var player = this;
  var util = _player2.default.util;
  var root = player.root;

  function onReplayBtnClick() {
    util.removeClass(root, 'replay');
    player.replay();
  }
  player.on('replayBtnClick', onReplayBtnClick);

  function onEnded() {
    if (!player.config.loop) {
      util.addClass(root, 'replay');
    }
  }
  player.on('ended', onEnded);

  function onDestroy() {
    player.off('replayBtnClick', onReplayBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('replay', replay);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reload = function reload() {
  var player = this;
  var reloadConfig = player.config.reload;
  if (!reloadConfig) {
    return;
  }

  function onReloadBtnClick() {
    _player2.default.util.removeClass(player.root, 'xgplayer-is-error');
    player.src = player.config.url;
  }
  player.on('reloadBtnClick', onReloadBtnClick);

  function onDestroy() {
    player.off('reloadBtnClick', onReloadBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('reload', reload);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var playNext = function playNext() {
  var player = this;
  var root = player.root;
  var nextBtn = player.config.playNext;
  player.currentVideoIndex = -1;

  function onPlayNextBtnClick() {
    if (player.currentVideoIndex + 1 < nextBtn.urlList.length) {
      player.currentVideoIndex++;
      player.video.autoplay = true;
      player.src = nextBtn.urlList[player.currentVideoIndex];
      player.emit('playerNext', player.currentVideoIndex + 1);
    } else {
      player.emit('urlList last');
    }
  }
  player.on('playNextBtnClick', onPlayNextBtnClick);

  function onDestroy() {
    player.off('playNextBtnClick', onPlayNextBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('playNext', playNext);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var play = function play() {
  var player = this;

  function onPlayBtnClick() {
    if (player.ended) {
      return;
    }
    if (player.paused) {
      var playPromise = player.play();
      if (playPromise !== undefined && playPromise) {
        playPromise.catch(function (err) {});
      }
    } else {
      player.pause();
    }
  }
  player.on('playBtnClick', onPlayBtnClick);

  function onDestroy() {
    player.off('playBtnClick', onPlayBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('play', play);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pip = function pip() {
  var player = this;
  var util = _player2.default.util;
  var root = player.root;
  function onPipBtnClick() {
    if (util.hasClass(root, 'xgplayer-pip-active')) {
      player.exitPIP();
    } else {
      player.getPIP();
    }
  }
  player.on('pipBtnClick', onPipBtnClick);

  function onDestroy() {
    player.off('pipBtnClick', onPipBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('pip', pip);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pc = function pc() {
  var player = this;
  var util = _player2.default.util;var controls = player.controls;var root = player.root;
  var clk = 0;var _click_ = void 0;

  player.onElementClick = function (e, element) {
    e.preventDefault();
    if (!this.config.closeVideoStopPropagation) {
      e.stopPropagation();
    }
    var player = this;
    if (!player.config.closeVideoClick) {
      clk++;
      if (_click_) {
        clearTimeout(_click_);
      }
      if (clk === 1) {
        _click_ = setTimeout(function () {
          if (util.hasClass(player.root, 'xgplayer-nostart')) {
            return false;
          } else if (!player.ended) {
            if (player.paused) {
              var playPromise = player.play();
              if (playPromise !== undefined && playPromise) {
                playPromise.catch(function (err) {});
              }
            } else {
              player.pause();
            }
          }
          clk = 0;
        }, 200);
      } else {
        clk = 0;
      }
    }
  };
  player.video.addEventListener('click', function (e) {
    player.onElementClick(e, player.video);
  }, false);

  player.onElementDblclick = function (e, element) {
    e.preventDefault();
    e.stopPropagation();
    var player = this;
    if (!player.config.closeVideoDblclick) {
      var fullscreen = controls.querySelector('.xgplayer-fullscreen');
      if (fullscreen) {
        var _clk = void 0;
        if (document.createEvent) {
          _clk = document.createEvent('Event');
          _clk.initEvent('click', true, true);
        } else {
          _clk = new Event('click');
        }
        fullscreen.dispatchEvent(_clk);
      }
    }
  };
  player.video.addEventListener('dblclick', function (e) {
    player.onElementDblclick(e, player.video);
  }, false);

  function onMouseEnter() {
    clearTimeout(player.leavePlayerTimer);
    player.emit('focus', player);
  }
  root.addEventListener('mouseenter', onMouseEnter);

  function onMouseLeave() {
    if (!player.config.closePlayerBlur) {
      player.leavePlayerTimer = setTimeout(function () {
        player.emit('blur', player);
      }, player.config.leavePlayerTime || 0);
    }
  }
  root.addEventListener('mouseleave', onMouseLeave);

  function onControlMouseEnter(e) {
    if (player.userTimer) {
      clearTimeout(player.userTimer);
    }
  }
  controls.addEventListener('mouseenter', onControlMouseEnter, false);

  function onControlMouseLeave(e) {
    if (!player.config.closeControlsBlur) {
      player.emit('focus', player);
    }
  }
  controls.addEventListener('mouseleave', onControlMouseLeave, false);

  function onReady(e) {
    if (player.config.autoplay) {
      player.start();
    }
  }
  player.once('ready', onReady);

  function onDestroy() {
    root.removeEventListener('mouseenter', onMouseEnter);
    root.removeEventListener('mouseleave', onMouseLeave);
    player.off('ready', onReady);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('pc', pc);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mobile = function mobile() {
  var player = this;
  var util = _player2.default.util;var controls = player.controls;var root = player.root;

  player.onElementTouchend = function (e, element) {
    e.preventDefault();
    e.stopPropagation();
    var player = this;
    if (util.hasClass(root, 'xgplayer-inactive')) {
      player.emit('focus');
    } else {
      player.emit('blur');
    }
    if (!player.config.closeVideoTouch && !player.isTouchMove) {
      if (util.hasClass(player.root, 'xgplayer-nostart')) {
        return false;
      } else if (!player.ended) {
        if (player.paused) {
          var playPromise = player.play();
          if (playPromise !== undefined && playPromise) {
            playPromise.catch(function (err) {});
          }
        } else {
          player.pause();
        }
      }
    }
  };
  player.video.addEventListener('touchend', function (e) {
    player.onElementTouchend(e, player.video);
  }, false);

  player.video.addEventListener('touchstart', function () {
    player.isTouchMove = false;
  });

  player.video.addEventListener('touchmove', function () {
    player.isTouchMove = true;
  });

  function onReady(e) {
    if (player.config.autoplay) {
      player.start();
    }
  }
  player.once('ready', onReady);

  function onDestroy() {
    player.off('ready', onReady);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('mobile', mobile);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var memoryPlay = function memoryPlay() {
  var player = this;
  player.on('memoryPlayStart', function (lastPlayTime) {
    player.currentTime = lastPlayTime;
  });
};

_player2.default.install('memoryPlay', memoryPlay);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _sniffer = __webpack_require__(6);

var _sniffer2 = _interopRequireDefault(_sniffer);

var _collect = __webpack_require__(7);

var _collect2 = _interopRequireDefault(_collect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = function logger() {
  var player = this;
  var util = _player2.default.util;
  if (player.config.noLog !== true) {
    var endedFunc = function endedFunc() {
      var played = player.video.played;
      var watch_dur = computeWatchDur(player.logParams.played);
      var et = new Date().getTime();
      judgePtVt();
      var obj = {
        url: player.logParams.pluginSrc ? player.logParams.pluginSrc : player.logParams.playSrc,
        vid: player.config.vid,
        bc: player.logParams.bc - 1 > 0 ? player.logParams.bc - 1 : 0,
        bb: player.logParams.bc - 1 > 0 ? 1 : 0,
        bu_acu_t: player.logParams.bu_acu_t,
        pt: player.logParams.pt,
        vt: player.logParams.vt,
        vd: player.logParams.vd * 1000,
        watch_dur: parseFloat((watch_dur * 1000).toFixed(3)),
        cur_play_pos: parseFloat((player.currentTime * 1000).toFixed(3)),
        et: et
      };
      window.__xigua_log_sdk__('c', obj);
    };

    var urlchangeFunc = function urlchangeFunc() {
      var played = player.video.played;
      var watch_dur = computeWatchDur(player.logParams.played);
      var lt = new Date().getTime();
      judgePtVt();
      var obj = {
        url: player.logParams.pluginSrc ? player.logParams.pluginSrc : player.logParams.playSrc,
        vid: player.config.vid,
        bc: player.logParams.bc - 1 > 0 ? player.logParams.bc - 1 : 0,
        bb: player.logParams.bc - 1 > 0 ? 1 : 0,
        bu_acu_t: player.logParams.bu_acu_t,
        pt: player.logParams.pt,
        vt: player.logParams.vt,
        vd: player.logParams.vd * 1000,
        watch_dur: parseFloat((watch_dur * 1000).toFixed(3)),
        cur_play_pos: parseFloat((player.currentTime * 1000).toFixed(3)),
        lt: lt
      };
      window.__xigua_log_sdk__('d', obj);
    };

    var errorFunc = function errorFunc(err) {
      var played = player.video.played;
      var watch_dur = computeWatchDur(player.logParams.played);
      judgePtVt();
      var et = new Date().getTime();
      if (player.logParams.lastErrLog && et - player.logParams.lastErrLog <= 1000 * 3) {
        return;
      }
      player.logParams.lastErrLog = et;
      var obj = {
        url: player.logParams.pluginSrc ? player.logParams.pluginSrc : player.logParams.playSrc,
        vid: player.config.vid,
        bc: player.logParams.bc - 1 > 0 ? player.logParams.bc - 1 : 0,
        bb: player.logParams.bc - 1 > 0 ? 1 : 0,
        bu_acu_t: player.logParams.bu_acu_t,
        pt: player.logParams.pt,
        vt: player.logParams.vt,
        vd: player.logParams.vd * 1000,
        watch_dur: parseFloat((watch_dur * 1000).toFixed(3)),
        err_msg: err.errd.msg,
        line: err.errd.line,
        et: et,
        cur_play_pos: parseFloat((player.currentTime * 1000).toFixed(3))
      };
      if (player.logParams.nologFunc && player.logParams.nologFunc(player)) {
        return true;
      } else {
        window.__xigua_log_sdk__('e', obj);
      }
    };

    var destroyFunc = function destroyFunc() {
      if (_sniffer2.default.device === 'pc') {
        window.removeEventListener('beforeunload', userLeave);
      } else if (_sniffer2.default.device === 'mobile') {
        window.removeEventListener('pagehide', userLeave);
      }
      player.off('routechange', userLeave);
      player.off('ended', endedFunc);
      player.off('urlchange', urlchangeFunc);
      player.off('error', errorFunc);
      player.off('destroy', destroyFunc);
    };

    if (!window.__xigua_log_sdk__) {
      window.__xigua_log_sdk__ = new _collect2.default('tracker');
      window.__xigua_log_sdk__.init({
        app_id: 1300,
        channel: 'cn',
        log: false,
        disable_sdk_monitor: true
      });

      window.__xigua_log_sdk__('config', {
        evtParams: {
          log_type: 'logger',
          page_url: document.URL,
          domain: window.location.host,
          pver: player.version,
          ua: navigator.userAgent.toLowerCase()
        },
        disable_auto_pv: true
      });
      window.__xigua_log_sdk__.start();
    }

    if (player.config.uid) {
      window.__xigua_log_sdk__('config', {
        user_unique_id: player.config.uid
      });
    }

    var computeWatchDur = function computeWatchDur() {
      var played = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var minBegin = 0;
      var end = 0;
      var arr = [];
      for (var i = 0; i < played.length; i++) {
        if (!played[i].end || played[i].begin < 0 || played[i].end < 0 || played[i].end < played[i].begin) {
          continue;
        }
        if (arr.length < 1) {
          arr.push({ begin: played[i].begin, end: played[i].end });
        } else {
          for (var j = 0; j < arr.length; j++) {
            var begin = played[i].begin;
            var _end = played[i].end;
            if (_end < arr[j].begin) {
              arr.splice(j, 0, { begin: begin, end: _end });
              break;
            } else if (begin > arr[j].end) {
              if (j > arr.length - 2) {
                arr.push({ begin: begin, end: _end });
                break;
              }
            } else {
              var b = arr[j].begin;
              var e = arr[j].end;
              arr[j].begin = Math.min(begin, b);
              arr[j].end = Math.max(_end, e);
              break;
            }
          }
        }
      }
      var watch_dur = 0;
      for (var _i = 0; _i < arr.length; _i++) {
        watch_dur += arr[_i].end - arr[_i].begin;
      }
      return watch_dur;
    };

    var judgePtVt = function judgePtVt() {
      if (!player.logParams.pt || !player.logParams.vt) {
        player.logParams.pt = new Date().getTime();
        player.logParams.vt = player.logParams.pt;
      }
      if (player.logParams.pt > player.logParams.vt) {
        player.logParams.pt = player.logParams.vt;
      }
    };

    var userLeave = function userLeave(event) {
      if (util.hasClass(player.root, 'xgplayer-is-enter')) {
        var lt = new Date().getTime();
        var obj = {
          url: player.logParams.pluginSrc ? player.logParams.pluginSrc : player.logParams.playSrc,
          vid: player.config.vid,
          pt: player.logParams.pt,
          lt: lt
        };
        window.__xigua_log_sdk__('b', obj);
      } else if (util.hasClass(player.root, 'xgplayer-playing')) {
        var watch_dur = computeWatchDur(player.logParams.played);
        var _lt = new Date().getTime();
        judgePtVt();
        var _obj = {
          url: player.logParams.pluginSrc ? player.logParams.pluginSrc : player.logParams.playSrc,
          vid: player.config.vid,
          bc: player.logParams.bc - 1 > 0 ? player.logParams.bc - 1 : 0,
          bb: player.logParams.bc - 1 > 0 ? 1 : 0,
          bu_acu_t: player.logParams.bu_acu_t,
          pt: player.logParams.pt,
          vt: player.logParams.vt,
          vd: player.logParams.vd * 1000,
          watch_dur: parseFloat((watch_dur * 1000).toFixed(3)),
          cur_play_pos: parseFloat((player.currentTime * 1000).toFixed(3)),
          lt: _lt
        };
        window.__xigua_log_sdk__('d', _obj);
      }
    };
    if (_sniffer2.default.device === 'pc') {
      window.addEventListener('beforeunload', userLeave, false);
    } else if (_sniffer2.default.device === 'mobile') {
      window.addEventListener('pagehide', userLeave, false);
    }
    player.on('routechange', userLeave);

    player.on('ended', endedFunc);

    player.on('urlchange', urlchangeFunc);

    player.on('error', errorFunc);

    player.once('destroy', destroyFunc);
  }
}; /* eslint-disable */


_player2.default.install('logger', logger);

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localPreview = function localPreview() {
  var player = this;
  var root = player.root;
  function onUpload(upload) {
    player.uploadFile = upload.files[0];
    var url = URL.createObjectURL(player.uploadFile);
    if (_player2.default.util.hasClass(root, 'xgplayer-nostart')) {
      player.config.url = url;
      player.start();
    } else {
      player.src = url;
      var playPromise = player.play();
      if (playPromise !== undefined && playPromise) {
        playPromise.catch(function (err) {});
      }
    }
  }
  player.on('upload', onUpload);

  function onDestroy() {
    player.off('upload', onUpload);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('localPreview', localPreview);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var i18n = function i18n() {
  var player = this;var lang = {};var util = player.constructor.util;
  lang.en = {
    HAVE_NOTHING: 'There is no information on whether audio/video is ready',
    HAVE_METADATA: 'Audio/video metadata is ready ',
    HAVE_CURRENT_DATA: 'Data about the current play location is available, but there is not enough data to play the next frame/millisecond',
    HAVE_FUTURE_DATA: 'Current and at least one frame of data is available',
    HAVE_ENOUGH_DATA: 'The available data is sufficient to start playing',
    NETWORK_EMPTY: 'Audio/video has not been initialized',
    NETWORK_IDLE: 'Audio/video is active and has been selected for resources, but no network is used',
    NETWORK_LOADING: 'The browser is downloading the data',
    NETWORK_NO_SOURCE: 'No audio/video source was found',
    MEDIA_ERR_ABORTED: 'The fetch process is aborted by the user',
    MEDIA_ERR_NETWORK: 'An error occurred while downloading',
    MEDIA_ERR_DECODE: 'An error occurred while decoding',
    MEDIA_ERR_SRC_NOT_SUPPORTED: 'Audio/video is not supported',
    REPLAY: 'Replay',
    ERROR: 'Network is offline',
    PLAY_TIPS: 'Play',
    PAUSE_TIPS: 'Pause',
    PLAYNEXT_TIPS: 'Play next',
    DOWNLOAD_TIPS: 'Download',
    ROTATE_TIPS: 'Rotate',
    RELOAD_TIPS: 'Reload',
    FULLSCREEN_TIPS: "Fullscreen",
    EXITFULLSCREEN_TIPS: 'Exit fullscreen',
    CSSFULLSCREEN_TIPS: 'Cssfullscreen',
    EXITCSSFULLSCREEN_TIPS: 'Exit cssfullscreen',
    TEXTTRACK: 'Caption',
    PIP: 'Pip',
    SCREENSHOT: 'Screenshot',
    LIVE: 'LIVE'
  };
  lang['zh-cn'] = {
    HAVE_NOTHING: '没有关于音频/视频是否就绪的信息',
    HAVE_METADATA: '音频/视频的元数据已就绪',
    HAVE_CURRENT_DATA: '关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒',
    HAVE_FUTURE_DATA: '当前及至少下一帧的数据是可用的',
    HAVE_ENOUGH_DATA: '可用数据足以开始播放',
    NETWORK_EMPTY: '音频/视频尚未初始化',
    NETWORK_IDLE: '音频/视频是活动的且已选取资源，但并未使用网络',
    NETWORK_LOADING: '浏览器正在下载数据',
    NETWORK_NO_SOURCE: '未找到音频/视频来源',
    MEDIA_ERR_ABORTED: '取回过程被用户中止',
    MEDIA_ERR_NETWORK: '当下载时发生错误',
    MEDIA_ERR_DECODE: '当解码时发生错误',
    MEDIA_ERR_SRC_NOT_SUPPORTED: '不支持的音频/视频格式',
    REPLAY: '重播',
    ERROR: '网络连接似乎出现了问题',
    PLAY_TIPS: '播放',
    PAUSE_TIPS: '暂停',
    PLAYNEXT_TIPS: '下一集',
    DOWNLOAD_TIPS: '下载',
    ROTATE_TIPS: '旋转',
    RELOAD_TIPS: '重新载入',
    FULLSCREEN_TIPS: "进入全屏",
    EXITFULLSCREEN_TIPS: '退出全屏',
    CSSFULLSCREEN_TIPS: '进入样式全屏',
    EXITCSSFULLSCREEN_TIPS: '退出样式全屏',
    TEXTTRACK: '字幕',
    PIP: '画中画',
    SCREENSHOT: '截图',
    LIVE: '正在直播'
  };
  lang['jp'] = {
    HAVE_NOTHING: 'オーディオ/ビデオが準備できているか情報がありません',
    HAVE_METADATA: 'オーディオ/ビデオのメタデータは準備できています',
    HAVE_CURRENT_DATA: '現在の再生位置に関するデータは利用可能ですが、次のフレーム/ミリ秒を再生するのに十分なデータがありません',
    HAVE_FUTURE_DATA: '現在、少なくとも次のフレームのデータが利用可能です',
    HAVE_ENOUGH_DATA: '利用可能なデータは再生を開始するのに十分です',
    NETWORK_EMPTY: 'オーディオ/ビデオが初期化されていません',
    NETWORK_IDLE: 'オーディオ/ビデオはアクティブでリソースが選択されていますが、ネットワークが使用されていません',
    NETWORK_LOADING: 'ブラウザーはデータをダウンロードしています',
    NETWORK_NO_SOURCE: 'オーディオ/ビデオ のソースが見つかりません',
    MEDIA_ERR_ABORTED: 'ユーザーによってフェッチプロセスが中止されました',
    MEDIA_ERR_NETWORK: 'ダウンロード中にエラーが発生しました',
    MEDIA_ERR_DECODE: 'デコード中にエラーが発生しました',
    MEDIA_ERR_SRC_NOT_SUPPORTED: 'オーディオ/ビデオ の形式がサポートされていません',
    REPLAY: 'リプレイ',
    ERROR: 'ネットワークの接続に問題が発生しました',
    PLAY_TIPS: 'プレイ',
    PAUSE_TIPS: '一時停止',
    PLAYNEXT_TIPS: '次をプレイ',
    DOWNLOAD_TIPS: 'ダウンロード',
    ROTATE_TIPS: '回転',
    RELOAD_TIPS: '再読み込み',
    FULLSCREEN_TIPS: "フルスクリーン",
    EXITFULLSCREEN_TIPS: 'フルスクリーンを終了',
    CSSFULLSCREEN_TIPS: 'シアターモード',
    EXITCSSFULLSCREEN_TIPS: 'シアターモードを終了',
    TEXTTRACK: '字幕',
    PIP: 'ミニプレーヤー',
    SCREENSHOT: 'スクリーンショット',
    LIVE: '生放送'
  };

  Object.defineProperty(player, 'lang', {
    get: function get() {
      if (player.config) {
        return lang[player.config.lang] || lang['en'];
      } else {
        return lang['en'];
      }
    },
    set: function set(value) {
      if (util.typeOf(value) === 'Object') {
        Object.keys(value).forEach(function (key) {
          lang[key] = value[key];
        });
      }
    }
  });
};

_player2.default.install('i18n', i18n);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullscreen = function fullscreen() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;

  function onFullscreenBtnClick() {
    if (player.config.rotateFullscreen) {
      if (util.hasClass(root, 'xgplayer-rotate-fullscreen')) {
        player.exitRotateFullscreen();
      } else {
        player.getRotateFullscreen();
      }
    } else {
      if (util.hasClass(root, 'xgplayer-is-fullscreen')) {
        player.exitFullscreen(root);
      } else {
        player.getFullscreen(root);
      }
    }
  }
  player.on('fullscreenBtnClick', onFullscreenBtnClick);

  function onFullscreenChange() {
    var fullscreenEl = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    if (fullscreenEl && fullscreenEl === root) {
      util.addClass(root, 'xgplayer-is-fullscreen');
      player.emit('requestFullscreen');
    } else {
      util.removeClass(root, 'xgplayer-is-fullscreen');
      player.emit('exitFullscreen');
    }
  };
  ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(function (item) {
    document.addEventListener(item, onFullscreenChange);
  });

  function onDestroy() {
    player.off('fullscreenBtnClick', onFullscreenBtnClick);
    ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(function (item) {
      document.removeEventListener(item, onFullscreenChange);
    });
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('fullscreen', fullscreen);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Error retry plugin
 * get config from player.config.errorConfig
 * The Plugin is just deal with the situation that play with video.src,
 * and get the http status of current video.src
 */

var defaultConfig = {
  maxCount: 3, // max number of retries
  backupUrl: '', // the backup url for retry
  isFetch: true, //  is need to check the cdn url statud
  fetchTimeout: 100 // timeout time for get cdn status
};

function errorRetry() {
  var _this = this;

  var player = this;
  // 无设置参数或者是通过扩展播放的不做处理
  if (!player.config.errorConfig || player.src.indexOf('blob:') > -1) {
    return;
  }
  var errorConfig = {};
  var _inConfig = player.config.errorConfig;
  for (var key in defaultConfig) {
    if (_inConfig[key] === undefined) {
      errorConfig[key] = defaultConfig[key];
    } else {
      errorConfig[key] = _inConfig[key];
    }
  }
  player.retryData = {
    count: 0, // 重试次数
    errfTimer: null, // 超时设置定时器
    isFetchReturn: false, // fetch请求是否已经返回
    currentTime: 0 // 出错的时候时间
  };

  function errorfetch(player, url, timeout) {
    var resolveFun = function resolveFun(resolve, data) {
      if (!player.retryData.isFetchReturn) {
        player.retryData.isFetchReturn = true;
        resolve(data);
      }
    };
    return new Promise(function (resolve, reject) {
      try {
        var xhr = new window.XMLHttpRequest();
        xhr.open('get', url);
        xhr.onload = function () {
          resolveFun(resolve, { status: xhr.status, statusText: xhr.statusText, xhr: xhr });
        };
        xhr.onerror = function () {
          resolveFun(resolve, { status: xhr.status, statusText: xhr.statusText || 'The network environment is disconnected or the address is invalid', xhr: xhr });
        };
        xhr.onabort = function () {
          // console.log('task onerror', xhr)
        };
        player.retryData.errfTimer = window.setTimeout(function () {
          var errfTimer = player.retryData.errfTimer;
          window.clearTimeout(errfTimer);
          player.retryData.errfTimer = null;
          resolveFun(resolve, { status: -1, statusText: 'request timeout' });
        }, timeout);
        xhr.send();
      } catch (err) {
        player.retryData.isFetchReturn = true;
        resolveFun(resolve, { status: -2, statusText: 'request error' });
      }
    });
  }

  function retryCanPlay() {
    // console.log(`retryCanPlay this.retryData.currentTime:${this.retryData.currentTime}`)
    this.currentTime = this.retryData.currentTime;
    this.play();
    this.retryData.retryCode = 0;
    this.retryData.isFetchReturn = false;
    this.retryData.currentTime = 0;
  }

  var _originErrorEmit = player._onError;
  player._onError = function (data) {
    var errorCount = _this.retryData.count;
    // console.log(`originErrorEmit:errorCount:${errorCount}`, data)
    if (errorCount > errorConfig.maxCount) {
      if (errorConfig.isFetch) {
        errorfetch(_this, _this.currentSrc, errorConfig.fetchTimeout).then(function (data) {
          _this.emit('error', new _player2.default.Errors({
            type: 'network',
            currentTime: _this.currentTime,
            duration: _this.duration || 0,
            networkState: _this.networkState,
            readyState: _this.readyState,
            currentSrc: _this.currentSrc,
            src: _this.src,
            ended: _this.ended,
            httpCode: data.status,
            httpMsg: data.statusText,
            errd: {
              line: 101,
              msg: _this.error,
              handle: 'plugin errorRetry'
            },
            errorCode: _this.video && _this.video.error.code,
            mediaError: _this.video && _this.video.error
          }));
          _originErrorEmit.call(_this, data);
        });
      } else {
        _originErrorEmit.call(_this, data);
      }
      return;
    }
    if (errorCount === 0) {
      _this.retryData.currentTime = _this.currentTime;
      _this.once('canplay', retryCanPlay.bind(_this));
    }
    var src = '';
    if (errorConfig.count < 2) {
      src = errorConfig.backupUrl ? errorConfig.backupUrl : player.currentSrc;
    } else {
      src = errorConfig.backupUrl && errorCount > 1 ? errorConfig.backupUrl : player.currentSrc;
    }
    _this.retryData.count++;
    _this.src = src;
  };
}

_player2.default.install('errorretry', errorRetry);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var download = function download() {
  var player = this;

  function onDownloadBtnClick() {
    // must pass an absolute url for download
    player.download();
  }
  player.on('downloadBtnClick', onDownloadBtnClick);

  function onDestroy() {
    player.off('downloadBtnClick', onDownloadBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('download', download);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = function definition() {
  var player = this;
  var root = player.root;

  function onDestroy() {
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('definition', definition);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var danmu = function danmu() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;

  function onInitDanmu(danmujs) {
    var container = player.root.querySelector('xg-danmu');
    util.addClass(container, 'xgplayer-has-danmu');
    if (!player.config.danmu.closeDefaultBtn) {
      var onTimeupdate = function onTimeupdate() {
        danmujs.start();
      };

      var onPause = function onPause() {
        if (util.hasClass(player.danmuBtn, 'danmu-switch-active')) {
          danmujs.pause();
        }
      };

      var onPlay = function onPlay() {
        if (util.hasClass(player.danmuBtn, 'danmu-switch-active')) {
          danmujs.play();
        }
      };

      var onSeeked = function onSeeked() {
        if (util.hasClass(player.danmuBtn, 'danmu-switch-active')) {
          danmujs.stop();
          danmujs.start();
        }
      };

      var onDestroy = function onDestroy() {
        player.off('timeupdate', onTimeupdate);
        player.off('pause', onPause);
        player.off('play', onPlay);
        player.off('seeked', onSeeked);
        player.off('destroy', onDestroy);
      };

      player.danmuBtn = util.copyDom(danmujs.bulletBtn.createSwitch(true));
      player.controls.appendChild(player.danmuBtn);

      ['click', 'touchend'].forEach(function (item) {
        player.danmuBtn.addEventListener(item, function (e) {
          e.preventDefault();
          e.stopPropagation();
          util.toggleClass(player.danmuBtn, 'danmu-switch-active');
          if (util.hasClass(player.danmuBtn, 'danmu-switch-active')) {
            util.addClass(container, 'xgplayer-has-danmu');
            player.once('timeupdate', onTimeupdate);
          } else {
            util.removeClass(container, 'xgplayer-has-danmu');
            danmujs.stop();
          }
        });
      });

      player.onElementClick && container.addEventListener('click', function (e) {
        player.onElementClick(e, container);
      }, false);
      player.onElementDblclick && container.addEventListener('dblclick', function (e) {
        player.onElementDblclick(e, container);
      }, false);

      player.on('pause', onPause);

      player.on('play', onPlay);

      player.on('seeked', onSeeked);

      player.once('destroy', onDestroy);
    }
  }
  player.on('initDefaultDanmu', onInitDanmu);
};

_player2.default.install('danmu', danmu);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cssFullscreen = function cssFullscreen() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;

  function onCssFullscreenBtnClick() {
    if (util.hasClass(root, 'xgplayer-is-cssfullscreen')) {
      player.exitCssFullscreen();
    } else {
      player.getCssFullscreen();
    }
  }
  player.on('cssFullscreenBtnClick', onCssFullscreenBtnClick);
  player.on('exitFullscreen', function () {
    util.removeClass(root, 'xgplayer-is-cssfullscreen');
  });

  function onDestroy() {
    player.off('cssFullscreenBtnClick', onCssFullscreenBtnClick);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('cssFullscreen', cssFullscreen);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(60);

__webpack_require__(65);

__webpack_require__(66);

__webpack_require__(69);

__webpack_require__(72);

__webpack_require__(73);

__webpack_require__(74);

__webpack_require__(77);

__webpack_require__(80);

__webpack_require__(84);

__webpack_require__(85);

__webpack_require__(87);

__webpack_require__(88);

__webpack_require__(89);

__webpack_require__(91);

__webpack_require__(92);

__webpack_require__(93);

__webpack_require__(95);

__webpack_require__(99);

__webpack_require__(100);

__webpack_require__(102);

__webpack_require__(104);

__webpack_require__(106);

__webpack_require__(107);

__webpack_require__(108);

__webpack_require__(109);

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(61);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(63)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(62)(false);
// imports


// module
exports.push([module.i, ".xgplayer-skin-default{background:#000;width:100%;height:100%;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.xgplayer-skin-default *{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.xgplayer-skin-default.xgplayer-rotate-fullscreen{position:absolute;top:0;left:100%;bottom:0;right:0;height:100vw!important;width:100vh!important;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.xgplayer-skin-default.xgplayer-is-fullscreen{width:100%!important;height:100%!important;padding-top:0!important;z-index:9999}.xgplayer-skin-default.xgplayer-is-fullscreen.xgplayer-inactive{cursor:none}.xgplayer-skin-default video{width:100%;height:100%;outline:none}.xgplayer-skin-default .xgplayer-none{display:none}@-webkit-keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}@keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}.xgplayer-skin-default .xgplayer-play,.xgplayer-skin-default .xgplayer-play-img{width:45px;position:relative;-webkit-order:0;-moz-box-ordinal-group:1;order:0;display:block;cursor:pointer;margin-left:3px;margin-right:8px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-play .xgplayer-icon{margin-top:3px;width:32px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-play .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}.xgplayer-skin-default .xgplayer-play-img:hover,.xgplayer-skin-default .xgplayer-play:hover{opacity:.85}.xgplayer-skin-default .xgplayer-play-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-play:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}.xgplayer-skin-default .xgplayer-start{border-radius:50%;display:inline-block;width:70px;height:70px;background:rgba(0,0,0,.38);overflow:hidden;text-align:center;line-height:70px;vertical-align:middle;position:absolute;left:50%;top:50%;z-index:115;margin:-35px auto auto -35px;cursor:pointer}.xgplayer-skin-default .xgplayer-start div{position:absolute}.xgplayer-skin-default .xgplayer-start div svg{fill:hsla(0,0%,100%,.7);margin:14px}.xgplayer-skin-default .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-start:hover{opacity:.85}.xgplayer-skin-default.xgplayer-playing .xgplayer-start,.xgplayer-skin-default.xgplayer-playing .xgplayer-start .xgplayer-icon-play{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-start .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-start{display:inline-block}.xgplayer-skin-default.xgplayer-pause .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default.replay .xgplayer-start,.xgplayer-skin-default.xgplayer-pause .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default.replay .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default.replay .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-enter{display:none;position:absolute;left:0;top:0;width:100%;height:100%;background:#000;z-index:120}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner{display:block;position:absolute;left:50%;top:50%;height:100px;width:100px;position:relative;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div{width:12%;height:26%;background-color:hsla(0,0%,100%,.7);position:absolute;left:44%;top:37%;opacity:0;border-radius:30px;-webkit-animation:fade 1s linear infinite;animation:fade 1s linear infinite}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar1{-webkit-transform:rotate(0deg) translateY(-142%);-ms-transform:rotate(0deg) translateY(-142%);transform:rotate(0deg) translateY(-142%);-webkit-animation-delay:0s;animation-delay:0s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar2{-webkit-transform:rotate(30deg) translateY(-142%);-ms-transform:rotate(30deg) translateY(-142%);transform:rotate(30deg) translateY(-142%);-webkit-animation-delay:-.9163s;animation-delay:-.9163s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar3{-webkit-transform:rotate(60deg) translateY(-142%);-ms-transform:rotate(60deg) translateY(-142%);transform:rotate(60deg) translateY(-142%);-webkit-animation-delay:-.833s;animation-delay:-.833s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar4{-webkit-transform:rotate(90deg) translateY(-142%);-ms-transform:rotate(90deg) translateY(-142%);transform:rotate(90deg) translateY(-142%);-webkit-animation-delay:-.7497s;animation-delay:-.7497s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar5{-webkit-transform:rotate(120deg) translateY(-142%);-ms-transform:rotate(120deg) translateY(-142%);transform:rotate(120deg) translateY(-142%);-webkit-animation-delay:-.6664s;animation-delay:-.6664s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar6{-webkit-transform:rotate(150deg) translateY(-142%);-ms-transform:rotate(150deg) translateY(-142%);transform:rotate(150deg) translateY(-142%);-webkit-animation-delay:-.5831s;animation-delay:-.5831s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar7{-webkit-transform:rotate(180deg) translateY(-142%);-ms-transform:rotate(180deg) translateY(-142%);transform:rotate(180deg) translateY(-142%);-webkit-animation-delay:-.4998s;animation-delay:-.4998s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar8{-webkit-transform:rotate(210deg) translateY(-142%);-ms-transform:rotate(210deg) translateY(-142%);transform:rotate(210deg) translateY(-142%);-webkit-animation-delay:-.4165s;animation-delay:-.4165s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar9{-webkit-transform:rotate(240deg) translateY(-142%);-ms-transform:rotate(240deg) translateY(-142%);transform:rotate(240deg) translateY(-142%);-webkit-animation-delay:-.3332s;animation-delay:-.3332s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar10{-webkit-transform:rotate(270deg) translateY(-142%);-ms-transform:rotate(270deg) translateY(-142%);transform:rotate(270deg) translateY(-142%);-webkit-animation-delay:-.2499s;animation-delay:-.2499s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar11{-webkit-transform:rotate(300deg) translateY(-142%);-ms-transform:rotate(300deg) translateY(-142%);transform:rotate(300deg) translateY(-142%);-webkit-animation-delay:-.1666s;animation-delay:-.1666s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar12{-webkit-transform:rotate(330deg) translateY(-142%);-ms-transform:rotate(330deg) translateY(-142%);transform:rotate(330deg) translateY(-142%);-webkit-animation-delay:-.0833s;animation-delay:-.0833s}@-webkit-keyframes fade{0%{opacity:1}to{opacity:.25}}.xgplayer-skin-default.xgplayer-is-enter .xgplayer-enter{display:block}.xgplayer-skin-default .xgplayer-poster{display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:100;background-size:cover;background-position:50%}.xgplayer-skin-default.xgplayer-nostart .xgplayer-poster{display:block}.xgplayer-skin-default .xgplayer-placeholder{-webkit-flex:1;-moz-box-flex:1;flex:1;-webkit-order:3;-moz-box-ordinal-group:4;order:3;display:block}.xgplayer-skin-default .xgplayer-fullscreen,.xgplayer-skin-default .xgplayer-fullscreen-img{position:relative;-webkit-order:13;-moz-box-ordinal-group:14;order:13;display:block;cursor:pointer;margin-left:5px;margin-right:3px}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon{margin-top:3px}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:block}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:none}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips{position:absolute;right:0;left:auto}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:block}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:none}.xgplayer-skin-default .xgplayer-fullscreen-img:hover,.xgplayer-skin-default .xgplayer-fullscreen:hover{opacity:.85}.xgplayer-skin-default .xgplayer-fullscreen-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-fullscreen:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:block}.xgplayer-skin-default .xgplayer-cssfullscreen,.xgplayer-skin-default .xgplayer-cssfullscreen-img{position:relative;-webkit-order:12;-moz-box-ordinal-group:13;order:12;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon{width:32px;margin-top:5px}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:block}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:none}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-tips,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-40px}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:block}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:none}.xgplayer-skin-default .xgplayer-cssfullscreen-img:hover,.xgplayer-skin-default .xgplayer-cssfullscreen:hover{opacity:.85}.xgplayer-skin-default .xgplayer-cssfullscreen-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-cssfullscreen:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-47px}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-cssfullscreen,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-cssfullscreen-img{display:none}.xgplayer-skin-default.xgplayer-is-cssfullscreen{position:fixed!important;left:0!important;top:0!important;width:100%!important;height:100%!important;z-index:99999!important}.lang-is-en .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-en .xgplayer-cssfullscreen .xgplayer-tips,.lang-is-en.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-en.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-46px}.lang-is-jp .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-jp .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-120px}.lang-is-jp.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-jp.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-60px}.xgplayer-skin-default .xgplayer-volume{outline:none;-webkit-order:4;-moz-box-ordinal-group:5;order:4;width:40px;height:40px;display:block;position:relative;z-index:18}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon{margin-top:8px;cursor:pointer;position:absolute;bottom:-9px}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:block}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted,.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-small{display:none}.xgplayer-skin-default .xgplayer-slider{display:none;position:absolute;width:28px;height:92px;background:rgba(0,0,0,.54);border-radius:1px;bottom:42px;outline:none}.xgplayer-skin-default .xgplayer-slider:after{content:\" \";display:block;height:15px;width:28px;position:absolute;bottom:-15px;left:0;z-index:20}.xgplayer-skin-default .xgplayer-bar,.xgplayer-skin-default .xgplayer-drag{display:block;position:absolute;bottom:6px;left:12px;background:hsla(0,0%,100%,.3);border-radius:100px;width:4px;height:76px;outline:none;cursor:pointer}.xgplayer-skin-default .xgplayer-drag{bottom:0;left:0;background:#fa1f41;max-height:76px}.xgplayer-skin-default .xgplayer-drag:after{content:\" \";display:inline-block;width:8px;height:8px;background:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.26);position:absolute;border-radius:50%;left:-2px;top:-6px}.xgplayer-skin-default.xgplayer-volume-active .xgplayer-slider,.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:block}.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted,.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-small,.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:none}.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-small{display:block}.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-large,.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-small,.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted{display:none}.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted{display:block}.xgplayer-skin-default.xgplayer-mobile .xgplayer-volume .xgplayer-slider{display:none}.xgplayer-skin-default .xgplayer-definition{-webkit-order:5;-moz-box-ordinal-group:6;order:5;width:60px;height:42px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-left:10px;margin-top:-7px}.xgplayer-skin-default .xgplayer-definition ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:42px;left:0;text-align:center;white-space:nowrap;margin-left:-10px;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-definition ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:6px 13px}.xgplayer-skin-default .xgplayer-definition ul li.selected,.xgplayer-skin-default .xgplayer-definition ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-definition .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:5px;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default.xgplayer-definition-active .xgplayer-definition ul,.xgplayer-skin-default.xgplayer-is-definition .xgplayer-definition{display:block}.xgplayer-skin-default .xgplayer-time{-webkit-order:2;-moz-box-ordinal-group:3;order:2;font-family:ArialMT;font-size:13px;color:#fff;line-height:40px;height:40px;text-align:center;display:inline-block}.xgplayer-skin-default .xgplayer-time span{color:hsla(0,0%,100%,.5)}.xgplayer-skin-default .xgplayer-time .xgplayer-time-current{color:#fff}.xgplayer-skin-default .xgplayer-time .xgplayer-time-current:after{content:\"/\";display:inline-block;padding:0 3px}.xgplayer-skin-default .xgplayer-controls{display:-webkit-flex;display:-moz-box;display:flex;position:absolute;bottom:0;left:0;right:0;height:40px;background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.37),rgba(0,0,0,.75),rgba(0,0,0,.75));z-index:10}.xgplayer-skin-default.no-controls .xgplayer-controls,.xgplayer-skin-default.xgplayer-inactive .xgplayer-controls,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls>*,.xgplayer-skin-default.xgplayer-nostart .xgplayer-controls{display:none}.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-cssfullscreen,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-definition,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-fullscreen,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-live,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-placeholder,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-play,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-play-img,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-reload,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-volume{display:block}.xgplayer-skin-default .xgplayer-live{display:block;font-size:12px;color:#fff;line-height:40px;-webkit-order:1;-moz-box-ordinal-group:2;order:1}.xgplayer-skin-default .xgplayer-loading{display:none;width:100px;height:100px;overflow:hidden;-webkit-transform:scale(.7);-ms-transform:scale(.7);transform:scale(.7);position:absolute;left:50%;top:50%;margin:-50px auto auto -50px}.xgplayer-skin-default .xgplayer-loading svg{border-radius:50%;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:loadingRotate 1s linear infinite;animation:loadingRotate 1s linear infinite}.xgplayer-skin-default .xgplayer-loading svg path{stroke:#ddd;stroke-dasharray:236;-webkit-animation:loadingDashOffset 2s linear infinite;animation:loadingDashOffset 2s linear infinite;animation-direction:alternate-reverse;fill:none;stroke-width:12px}.xgplayer-skin-default.xgplayer-nostart .xgplayer-loading{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-loading{display:none!important}.xgplayer-skin-default.xgplayer-isloading .xgplayer-loading{display:block}.xgplayer-skin-default .xgplayer-progress{display:block;position:absolute;height:20px;line-height:20px;left:12px;right:12px;outline:none;top:-15px;z-index:35}.xgplayer-skin-default .xgplayer-progress-outer{background:hsla(0,0%,100%,.3);display:block;height:3px;line-height:3px;margin-top:8.5px;width:100%;position:relative;cursor:pointer}.xgplayer-skin-default .xgplayer-progress-cache,.xgplayer-skin-default .xgplayer-progress-played{display:block;height:100%;line-height:1;position:absolute;left:0;top:0}.xgplayer-skin-default .xgplayer-progress-cache{width:0;background:hsla(0,0%,100%,.5)}.xgplayer-skin-default .xgplayer-progress-played{display:block;width:0;background-image:linear-gradient(-90deg,#fa1f41,#e31106);border-radius:0 1.5px 1.5px 0}.xgplayer-skin-default .xgplayer-progress-btn{display:none;position:absolute;left:0;top:-5px;width:13px;height:13px;border-radius:30px;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.26);left:100%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%)}.xgplayer-skin-default .xgplayer-progress-point{position:absolute}.xgplayer-skin-default .xgplayer-progress-point.xgplayer-tips{margin-left:0;top:-25px;display:none;z-index:100}.xgplayer-skin-default .xgplayer-progress-dot{display:inline-block;position:absolute;height:3px;width:5px;top:0;background:#fff;border-radius:6px;z-index:16}.xgplayer-skin-default .xgplayer-progress-dot .xgplayer-progress-tip{position:absolute;left:0;top:-40px;height:auto;line-height:30px;width:auto;-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8);background:rgba(0,0,0,.3);border-radius:6px;border:1px solid rgba(0,0,0,.8);cursor:default;white-space:nowrap;display:none}.xgplayer-skin-default .xgplayer-progress-dot-show .xgplayer-progress-tip{display:block}.xgplayer-skin-default .xgplayer-progress-thumbnail{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box}.xgplayer-skin-default .xgplayer-progress-thumbnail.xgplayer-tips{margin-left:0;display:none;z-index:99}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-outer{height:6px;margin-top:7px}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-dot,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-dot{height:6px}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-btn{display:block;top:-3px}.xgplayer-skin-default.xgplayer-definition-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-texttrack-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-volume-active .xgplayer-progress{z-index:15}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress-btn{display:block!important}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-outer{height:3px!important;margin-top:8.5px!important}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-btn{display:block!important;top:-5px!important}.xgplayer-skin-default .xgplayer-replay{position:absolute;left:0;top:0;width:100%;height:100%;z-index:105;display:none;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;background:rgba(0,0,0,.54);-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column}.xgplayer-skin-default .xgplayer-replay svg{background:rgba(0,0,0,.58);border-radius:100%;cursor:pointer}.xgplayer-skin-default .xgplayer-replay svg path{-webkit-transform:translate(20px,21px);-ms-transform:translate(20px,21px);transform:translate(20px,21px);fill:#ddd}.xgplayer-skin-default .xgplayer-replay svg:hover{background:rgba(0,0,0,.38)}.xgplayer-skin-default .xgplayer-replay svg:hover path{fill:#fff}.xgplayer-skin-default .xgplayer-replay .xgplayer-replay-txt{display:inline-block;font-family:PingFangSC-Regular;font-size:14px;color:#fff;line-height:34px}.xgplayer-skin-default.xgplayer.xgplayer-ended .xgplayer-controls{display:none}.xgplayer-skin-default.xgplayer.xgplayer-ended .xgplayer-replay{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-skin-default .xgplayer-playbackrate{-webkit-order:8;-moz-box-ordinal-group:9;order:8;width:60px;height:20px;z-index:18;position:relative;display:inline-block;cursor:default}.xgplayer-skin-default .xgplayer-playbackrate ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:20px;left:0;text-align:left;white-space:nowrap;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-playbackrate ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);position:relative;padding:4px 0;text-align:center}.xgplayer-skin-default .xgplayer-playbackrate ul li.selected,.xgplayer-skin-default .xgplayer-playbackrate ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-playbackrate ul li:first-child{position:relative;margin-top:12px}.xgplayer-skin-default .xgplayer-playbackrate ul li:last-child{position:relative;margin-bottom:12px}.xgplayer-skin-default .xgplayer-playbackrate .name{height:20px;position:relative;top:11px;text-align:center;background:rgba(0,0,0,.38);color:hsla(0,0%,100%,.8);border-radius:10px;line-height:20px}.xgplayer-skin-default .xgplayer-playbackrate span{position:relative;top:19px;font-weight:700;text-shadow:0 0 4px rgba(0,0,0,.6)}.xgplayer-skin-default .xgplayer-playbackrate:hover{opacity:1}.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-playbackrate ul{display:block}.xgplayer-skin-default .xgplayer-download{position:relative;-webkit-order:9;-moz-box-ordinal-group:10;order:9;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-download .xgplayer-icon{margin-top:3px}.xgplayer-skin-default .xgplayer-download .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-download .xgplayer-icon svg{position:relative;top:5px;left:5px}.xgplayer-skin-default .xgplayer-download .xgplayer-tips{margin-left:-20px}.xgplayer-skin-default .xgplayer-download .xgplayer-tips .xgplayer-tip-download{display:block}.xgplayer-skin-default .xgplayer-download:hover{opacity:.85}.xgplayer-skin-default .xgplayer-download:hover .xgplayer-tips{display:block}.lang-is-en .xgplayer-download .xgplayer-tips{margin-left:-32px}.lang-is-jp .xgplayer-download .xgplayer-tips{margin-left:-40px}.xgplayer-skin-default .danmu-switch{-webkit-order:6;-moz-box-ordinal-group:7;order:6;z-index:26}.xgplayer-skin-default .xgplayer-danmu{display:none;position:absolute;top:0;left:0;right:0;height:100%;overflow:hidden;z-index:9;outline:none}.xgplayer-skin-default .xgplayer-danmu>*{position:absolute;white-space:nowrap;z-index:9}.xgplayer-skin-default .xgplayer-danmu.xgplayer-has-danmu{display:block}.xgplayer-skin-default .xgplayer-panel{outline:none;-webkit-order:7;-moz-box-ordinal-group:8;order:7;width:40px;height:40px;display:inline-block;position:relative;font-family:PingFangSC-Regular;font-size:13px;color:hsla(0,0%,100%,.8);z-index:36}.xgplayer-skin-default .xgplayer-panel .xgplayer-panel-icon{cursor:pointer;position:absolute;margin-left:5px;top:10px}.xgplayer-skin-default .xgplayer-panel-active{display:block!important;bottom:30px}.xgplayer-skin-default .xgplayer-panel-slider{z-index:36;display:none;position:absolute;width:230px;height:230px;background:rgba(0,0,0,.54);border-radius:1px;padding:10px 20px;outline:none;left:-115px;bottom:40px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode{padding-bottom:10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode-radio li{display:inline;list-style:none;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode ul{display:-webkit-flex;display:-moz-box;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode li{margin:0 12px;font-size:11px;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode-font{margin-bottom:10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency{display:block;margin-top:10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-moz-range-progress{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:4px;border-radius:4px;background:linear-gradient(90deg,#f85959,#f85959 100%,#aaa)}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea{display:block;margin-top:8px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-name{display:inline-block;position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control{display:inline-block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control-up{width:150px;margin-left:10px;display:-moz-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control-down{position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control-down-dots{display:-webkit-flex;display:-moz-box;display:flex;width:150px;margin-left:10px;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-threequarters,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-twoquarters{margin-left:-6px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-full{margin-right:3px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-full-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-onequarters-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-threequarters-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-twoquarters-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-zero-dot{width:3px;height:3px;border:3px solid #aaa;border-radius:50%;background-color:#aaa;position:relative;top:16px;z-index:-1}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed{display:block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-name{display:inline-block;position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control{display:inline-block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control-up{width:150px;margin-left:10px;display:-moz-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control-down{position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control-down-dots{display:-webkit-flex;display:-moz-box;display:flex;width:150px;margin-left:10px;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-large-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-middle-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-small-dot{width:3px;height:3px;border:3px solid #aaa;border-radius:50%;background-color:#aaa;position:relative;top:16px;z-index:-1}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont{display:block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-name{display:inline-block;position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control{display:inline-block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control-up{width:150px;margin-left:10px;display:-moz-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control-down{position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control-down-dots{display:-webkit-flex;display:-moz-box;display:flex;width:150px;margin-left:10px;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-large-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-middle-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-small-dot{width:3px;height:3px;border:3px solid #aaa;border-radius:50%;background-color:#aaa;position:relative;top:16px;z-index:-1}.xgplayer-skin-default .xgplayer-playnext{position:relative;-webkit-order:1;-moz-box-ordinal-group:2;order:1;display:block;cursor:pointer;top:-2px}.xgplayer-skin-default .xgplayer-playnext .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-playnext .xgplayer-tips .xgplayer-tip-playnext{display:block}.xgplayer-skin-default .xgplayer-playnext:hover{opacity:.85}.xgplayer-skin-default .xgplayer-playnext:hover .xgplayer-tips{display:block}.lang-is-en .xgplayer-playnext .xgplayer-tips{margin-left:-25px}.lang-is-jp .xgplayer-playnext .xgplayer-tips{margin-left:-38px}.xgplayer-skin-default .xgplayer-pip{-webkit-order:9;-moz-box-ordinal-group:10;order:9;position:relative;outline:none;display:block;cursor:pointer;height:20px;top:8px}.xgplayer-skin-default .xgplayer-pip .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-skin-default .xgplayer-pip .name span{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default .xgplayer-pip-lay{position:absolute;top:26px;left:0;width:100%;height:100%;z-index:130;cursor:pointer;background-color:transparent;display:none}.xgplayer-skin-default .xgplayer-pip-lay div{width:100%;height:100%}.xgplayer-skin-default .xgplayer-pip-drag{cursor:move;position:absolute;top:0;left:0;width:100%;height:26px;line-height:26px;background-image:linear-gradient(rgba(0,0,0,.3),transparent);z-index:130;display:none}.xgplayer-skin-default.xgplayer-pip-active{position:fixed;right:0;bottom:200px;width:320px!important;height:180px!important;z-index:110!important}.xgplayer-skin-default.xgplayer-pip-active .xgplayer-controls,.xgplayer-skin-default.xgplayer-pip-active .xgplayer-danmu{display:none}.xgplayer-skin-default.xgplayer-pip-active .xgplayer-pip-lay{display:block}.xgplayer-skin-default.xgplayer-pip-active .xgplayer-pip-drag{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-skin-default.xgplayer-inactive .xgplayer-pip-drag{display:none}.lang-is-jp .xgplayer-pip .name span{width:70px;height:20px}.xgplayer-skin-default .xgplayer-rotate{position:relative;-webkit-order:10;-moz-box-ordinal-group:11;order:10;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-rotate .xgplayer-icon{margin-top:7px;width:26px}.xgplayer-skin-default .xgplayer-rotate .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-rotate .xgplayer-tips{margin-left:-22px}.xgplayer-skin-default .xgplayer-rotate .xgplayer-tips .xgplayer-tip-rotate{display:block}.xgplayer-skin-default .xgplayer-rotate:hover{opacity:.85}.xgplayer-skin-default .xgplayer-rotate:hover .xgplayer-tips{display:block}.lang-is-en .xgplayer-rotate .xgplayer-tips{margin-left:-26px}.lang-is-jp .xgplayer-rotate .xgplayer-tips{margin-left:-38px}.xgplayer-skin-default .xgplayer-reload{position:relative;-webkit-order:1;-moz-box-ordinal-group:2;order:1;display:block;width:40px;height:40px;cursor:pointer}.xgplayer-skin-default .xgplayer-reload .xgplayer-icon{margin-top:7px;width:26px}.xgplayer-skin-default .xgplayer-reload .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-reload .xgplayer-tips{margin-left:-22px}.xgplayer-skin-default .xgplayer-reload .xgplayer-tips .xgplayer-tip-reload{display:block}.xgplayer-skin-default .xgplayer-reload:hover{opacity:.85}.xgplayer-skin-default .xgplayer-reload:hover .xgplayer-tips{display:block}.lang-is-en .xgplayer-reload .xgplayer-tips{margin-left:-26px}.lang-is-jp .xgplayer-reload .xgplayer-tips{margin-left:-38px}.xgplayer-skin-default .xgplayer-screenshot{-webkit-order:11;-moz-box-ordinal-group:12;order:11;position:relative;outline:none;display:block;cursor:pointer;height:20px;top:8px}.xgplayer-skin-default .xgplayer-screenshot .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-skin-default .xgplayer-screenshot .name span{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.lang-is-en .xgplayer-screenshot .name span,.lang-is-jp .xgplayer-screenshot .name span{width:75px;height:20px}.xgplayer-skin-default .xgplayer-texttrack{-webkit-order:7;-moz-box-ordinal-group:8;order:7;width:60px;height:150px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-top:-119px}.xgplayer-skin-default .xgplayer-texttrack ul{display:none;list-style:none;min-width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;text-align:center;white-space:nowrap;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-texttrack ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:auto;padding:6px 13px}.xgplayer-skin-default .xgplayer-texttrack ul li.selected,.xgplayer-skin-default .xgplayer-texttrack ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-texttrack .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:0;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default.xgplayer-is-texttrack .xgplayer-texttrack,.xgplayer-skin-default.xgplayer-texttrack-active .xgplayer-texttrack ul{display:block}.xgplayer-skin-default .xgplayer-icon{display:block;width:40px;height:40px;overflow:hidden;fill:#fff}.xgplayer-skin-default .xgplayer-tips{background:rgba(0,0,0,.54);border-radius:1px;display:none;position:absolute;font-family:PingFangSC-Regular;font-size:11px;color:#fff;padding:2px 4px;text-align:center;top:-30px;left:50%;margin-left:-16px;width:auto;white-space:nowrap}.xgplayer-skin-default.xgplayer-mobile .xgplayer-tips{display:none!important}.xgplayer-skin-default .xgplayer-error{background:#000;display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:125;font-family:PingFangSC-Regular;font-size:14px;color:#fff;text-align:center;line-height:100%;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center}.xgplayer-skin-default .xgplayer-error .xgplayer-error-refresh{color:#fa1f41;padding:0 3px;cursor:pointer}.xgplayer-skin-default .xgplayer-error .xgplayer-error-text{line-height:18px;margin:auto 6px}.xgplayer-skin-default.xgplayer-is-error .xgplayer-error{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-skin-default .xgplayer-memoryplay-spot{position:absolute;height:32px;left:10px;bottom:46px;background:rgba(0,0,0,.5);border-radius:32px;line-height:32px;color:#ddd;z-index:15;padding:0 32px 0 16px}.xgplayer-skin-default .xgplayer-memoryplay-spot .xgplayer-lasttime{color:red;font-weight:700}.xgplayer-skin-default .xgplayer-memoryplay-spot .btn-close{position:absolute;width:16px;height:16px;right:10px;top:2px;cursor:pointer;color:#fff;font-size:16px}", ""]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(64);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_enter = function s_enter() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;

  var barStr = '';
  for (var i = 1; i <= 12; i++) {
    barStr += '<div class="xgplayer-enter-bar' + i + '"></div>';
  }
  var enter = util.createDom('xg-enter', '<div class="xgplayer-enter-spinner">\n                                                  ' + barStr + '\n                                                </div>', {}, 'xgplayer-enter');
  root.appendChild(enter);
};

_player2.default.install('s_enter', s_enter);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _play = __webpack_require__(67);

var _play2 = _interopRequireDefault(_play);

var _pause = __webpack_require__(68);

var _pause2 = _interopRequireDefault(_pause);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_play = function s_play() {
  var player = this;
  var util = _player2.default.util;
  var playBtn = player.config.playBtn ? player.config.playBtn : {};
  var btn = void 0,
      iconPlay = void 0,
      iconPause = void 0;
  if (playBtn.type === 'img') {
    btn = util.createImgBtn('play', playBtn.url.play, playBtn.width, playBtn.height);
  } else {
    btn = util.createDom('xg-play', '<xg-icon class="xgplayer-icon">\n                                      <div class="xgplayer-icon-play">' + _play2.default + '</div>\n                                      <div class="xgplayer-icon-pause">' + _pause2.default + '</div>\n                                     </xg-icon>', {}, 'xgplayer-play');
  }

  var tipsText = {};
  tipsText.play = player.lang.PLAY_TIPS;
  tipsText.pause = player.lang.PAUSE_TIPS;
  var tips = util.createDom('xg-tips', '<span class="xgplayer-tip-play">' + tipsText.play + '</span>\n                                        <span class="xgplayer-tip-pause">' + tipsText.pause + '</span>', {}, 'xgplayer-tips');
  btn.appendChild(tips);
  player.once('ready', function () {
    player.controls.appendChild(btn);
  });

  ['click', 'touchend'].forEach(function (item) {
    btn.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('playBtnClick');
    });
  });
};

_player2.default.install('s_play', s_play);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\">\n  <path transform=\"scale(0.0320625 0.0320625)\" d=\"M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z\"></path>\n</svg>\n");

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\">\n  <path transform=\"scale(0.0320625 0.0320625)\" d=\"M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z\"></path>\n</svg>\n");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _startPlay = __webpack_require__(70);

var _startPlay2 = _interopRequireDefault(_startPlay);

var _startPause = __webpack_require__(71);

var _startPause2 = _interopRequireDefault(_startPause);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_start = function s_start() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  var btn = util.createDom('xg-start', '<div class="xgplayer-icon-play">' + _startPlay2.default + '</div>\n                                      <div class="xgplayer-icon-pause">' + _startPause2.default + '</div>', {}, 'xgplayer-start');
  function onPlayerReady(player) {
    util.addClass(player.root, 'xgplayer-skin-default');
    player.config.autoplay && util.addClass(player.root, 'xgplayer-is-enter');
    if (player.config) {
      if (player.config.lang && player.config.lang === 'en') {
        util.addClass(player.root, 'lang-is-en');
      } else if (player.config.lang === 'jp') {
        util.addClass(player.root, 'lang-is-jp');
      }
    }
  }

  if (player.isReady) {
    root.appendChild(btn);
    onPlayerReady(player);
  } else {
    player.once('ready', function () {
      root.appendChild(btn);
      onPlayerReady(player);
    });
  }

  player.once('autoplay was prevented', function () {
    util.removeClass(player.root, 'xgplayer-is-enter');
    util.addClass(player.root, 'xgplayer-nostart');
  });

  player.once('canplay', function () {
    util.removeClass(player.root, 'xgplayer-is-enter');
  });

  btn.onclick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    player.emit('startBtnClick');
  };
};

_player2.default.install('s_start', s_start);

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"70\" viewBox=\"0 0 70 70\">\n  <path transform=\"scale(0.04,0.04)\" d=\"M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z\"></path>\n</svg>\n");

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"70\" height=\"70\" viewBox=\"0 0 70 70\">\n  <path transform=\"scale(0.04 0.04)\" d=\"M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z\"></path>\n</svg>\n");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_poster = function s_poster() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  if (!player.config.poster) {
    return;
  }
  var poster = util.createDom('xg-poster', '', {}, 'xgplayer-poster');
  poster.style.backgroundImage = 'url(' + player.config.poster + ')';
  root.appendChild(poster);
};

_player2.default.install('s_poster', s_poster);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_flex = function s_flex() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  var playceholder = util.createDom('xg-placeholder', '', {}, 'xgplayer-placeholder');
  player.controls.appendChild(playceholder);
};

_player2.default.install('s_flex', s_flex);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _requestFull = __webpack_require__(75);

var _requestFull2 = _interopRequireDefault(_requestFull);

var _exitFull = __webpack_require__(76);

var _exitFull2 = _interopRequireDefault(_exitFull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_fullscreen = function s_fullscreen() {
  var player = this;
  var util = _player2.default.util;
  var fullscreenBtn = player.config.fullscreenBtn ? player.config.fullscreenBtn : {};
  var btn = void 0,
      iconRequestFull = void 0,
      iconExitFull = void 0;
  if (fullscreenBtn.type === 'img') {
    btn = util.createImgBtn('fullscreen', fullscreenBtn.url.request, fullscreenBtn.width, fullscreenBtn.height);
  } else {
    btn = util.createDom('xg-fullscreen', '<xg-icon class="xgplayer-icon">\n                                             <div class="xgplayer-icon-requestfull">' + _requestFull2.default + '</div>\n                                             <div class="xgplayer-icon-exitfull">' + _exitFull2.default + '</div>\n                                           </xg-icon>', {}, 'xgplayer-fullscreen');
  }

  var tipsText = {};
  tipsText.requestfull = player.lang.FULLSCREEN_TIPS;
  tipsText.exitfull = player.lang.EXITFULLSCREEN_TIPS;
  var tips = util.createDom('xg-tips', '<span class="xgplayer-tip-requestfull">' + tipsText.requestfull + '</span>\n                                        <span class="xgplayer-tip-exitfull">' + tipsText.exitfull + '</span>', {}, 'xgplayer-tips');
  btn.appendChild(tips);
  player.once('ready', function () {
    player.controls.appendChild(btn);
  });

  ['click', 'touchend'].forEach(function (item) {
    btn.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('fullscreenBtnClick');
    });
  });
};

_player2.default.install('s_fullscreen', s_fullscreen);

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\">\n  <path transform=\"scale(0.0320625 0.0320625)\" d=\"M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z\"></path>\n</svg>\n");

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\">\n  <path transform=\"scale(0.0320625 0.0320625)\" d=\"M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z\"></path>\n</svg>\n");

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _requestCssFull = __webpack_require__(78);

var _requestCssFull2 = _interopRequireDefault(_requestCssFull);

var _exitCssFull = __webpack_require__(79);

var _exitCssFull2 = _interopRequireDefault(_exitCssFull);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_cssFullscreen = function s_cssFullscreen() {
  var player = this;
  var util = _player2.default.util;
  if (!player.config.cssFullscreen) {
    return;
  }
  var btn = util.createDom('xg-cssfullscreen', '<xg-icon class="xgplayer-icon">\n                                             <div class="xgplayer-icon-requestfull">' + _requestCssFull2.default + '</div>\n                                             <div class="xgplayer-icon-exitfull">' + _exitCssFull2.default + '</div>\n                                           </xg-icon>', {}, 'xgplayer-cssfullscreen');

  var tipsText = {};
  tipsText.requestfull = player.lang.CSSFULLSCREEN_TIPS;
  tipsText.exitfull = player.lang.EXITCSSFULLSCREEN_TIPS;
  var tips = util.createDom('xg-tips', '<span class="xgplayer-tip-requestfull">' + tipsText.requestfull + '</span>\n                                        <span class="xgplayer-tip-exitfull">' + tipsText.exitfull + '</span>', {}, 'xgplayer-tips');
  btn.appendChild(tips);
  player.once('ready', function () {
    player.controls.appendChild(btn);
  });

  ['click', 'touchend'].forEach(function (item) {
    btn.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('cssFullscreenBtnClick');
    });
  });
};

_player2.default.install('s_cssFullscreen', s_cssFullscreen);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\">\n  <path transform=\"scale(0.028 0.028)\" d=\"M843.617212 67.898413 175.411567 67.898413c-61.502749 0-111.367437 49.856501-111.367437 111.367437l0 668.205645c0 61.510936 49.864688 111.367437 111.367437 111.367437L843.617212 958.838931c61.510936 0 111.367437-49.856501 111.367437-111.367437L954.984648 179.26585C954.984648 117.754914 905.12917 67.898413 843.617212 67.898413zM398.146441 736.104057c15.380292 0 27.842115 12.461823 27.842115 27.842115 0 15.379269-12.461823 27.841092-27.842115 27.841092L259.725858 791.787264c-7.785314 0-14.781658-3.217275-19.838837-8.365528-5.383614-4.577249-8.791224-11.228739-8.791224-19.475564L231.095797 624.736621c0-15.371082 12.471033-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115l-0.61603 71.426773 133.036969-133.037992 39.378869 39.378869L324.962651 736.113267 398.146441 736.104057zM419.199942 463.611943 286.162974 330.565764l0.61603 71.435982c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.371082 0-27.842115-12.461823-27.842115-27.842115L231.094774 262.791172c0-8.256034 3.40761-14.908548 8.791224-19.476587 5.057179-5.148253 12.053524-8.374738 19.838837-8.374738l138.420583 0.00921c15.380292 0 27.842115 12.461823 27.842115 27.842115s-12.461823 27.842115-27.842115 27.842115l-73.175603-0.00921 133.607974 133.607974L419.199942 463.611943zM787.932981 763.946172c0 8.247848-3.40761 14.899338-8.791224 19.475564-5.057179 5.148253-12.053524 8.365528-19.839861 8.365528L620.881314 791.787264c-15.379269 0-27.841092-12.461823-27.841092-27.841092 0-15.380292 12.461823-27.842115 27.841092-27.842115l73.185836 0.00921L560.449967 602.50427l39.378869-39.378869L732.875015 696.163393l-0.62524-71.426773c0-15.371082 12.462846-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115L787.934005 763.946172zM787.932981 402.000724c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.379269 0-27.842115-12.461823-27.842115-27.842115l0.62524-71.435982L599.828836 463.611943l-39.378869-39.378869 133.617184-133.607974-73.185836 0.00921c-15.379269 0-27.841092-12.461823-27.841092-27.842115s12.461823-27.842115 27.841092-27.842115l138.421606-0.00921c7.785314 0 14.781658 3.226484 19.839861 8.374738 5.383614 4.568039 8.791224 11.219529 8.791224 19.476587L787.934005 402.000724z\"></path>\n</svg>\n");

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\">\n  <path transform=\"scale(0.028 0.028)\" d=\"M834.56 81.92H189.44c-59.392 0-107.52 48.128-107.52 107.52v645.12c0 59.392 48.128 107.52 107.52 107.52h645.12c59.392 0 107.52-48.128 107.52-107.52V189.44c0-59.392-48.128-107.52-107.52-107.52zM458.24 727.04c0 14.848-12.288 26.624-26.624 26.624S404.48 741.888 404.48 727.04v-69.632L289.28 773.12c-10.752 10.24-27.648 10.24-37.888 0-10.24-10.752-10.24-27.648 0-37.888L366.592 619.52H296.96c-14.848 0-26.624-12.288-26.624-26.624s12.288-26.624 26.624-26.624h134.144c14.848 0 26.624 12.288 26.624 26.624V727.04z m0-295.936c0 14.848-12.288 26.624-26.624 26.624H296.96c-14.848 0-26.624-12.288-26.624-26.624S282.112 404.48 296.96 404.48h69.632L251.392 289.28c-10.24-10.752-10.24-27.648 0-37.888 5.12-5.12 12.288-7.68 18.944-7.68 6.656 0 13.824 2.56 18.944 7.68L404.48 366.592V296.96c0-14.848 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v134.144zM773.12 773.12c-10.752 10.24-27.648 10.24-37.888 0L619.52 657.408V727.04c0 14.848-12.288 26.624-26.624 26.624s-26.624-11.776-26.624-26.624v-134.144c0-14.848 12.288-26.624 26.624-26.624H727.04c14.848 0 26.624 12.288 26.624 26.624s-12.288 26.624-26.624 26.624h-69.632l115.2 115.2c10.752 10.752 10.752 27.648 0.512 38.4z m0-483.84L657.408 404.48H727.04c14.848 0 26.624 12.288 26.624 26.624 0 14.848-12.288 26.624-26.624 26.624h-134.144c-14.848 0-26.624-12.288-26.624-26.624V296.96c0-14.848 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v69.632L734.72 250.88c5.12-5.12 12.288-7.68 18.944-7.68s13.824 2.56 18.944 7.68c10.752 10.752 10.752 27.648 0.512 38.4z\"></path>\n</svg>\n");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _volumeMuted = __webpack_require__(81);

var _volumeMuted2 = _interopRequireDefault(_volumeMuted);

var _volumeSmall = __webpack_require__(82);

var _volumeSmall2 = _interopRequireDefault(_volumeSmall);

var _volumeLarge = __webpack_require__(83);

var _volumeLarge2 = _interopRequireDefault(_volumeLarge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_volume = function s_volume() {
  var player = this;
  var util = _player2.default.util;
  var container = util.createDom('xg-volume', '<xg-icon class="xgplayer-icon">\n                                         <div class="xgplayer-icon-large">' + _volumeLarge2.default + '</div>\n                                         <div class="xgplayer-icon-small">' + _volumeSmall2.default + '</div>\n                                         <div class="xgplayer-icon-muted">' + _volumeMuted2.default + '</div>\n                                       </xg-icon>\n                                       <xg-slider class="xgplayer-slider" tabindex="2">\n                                         <xg-bar class="xgplayer-bar">\n                                           <xg-drag class="xgplayer-drag"></xg-drag>\n                                         </xg-bar>\n                                       </xg-slider>', {}, 'xgplayer-volume');
  player.once('ready', function () {
    player.controls.appendChild(container);
  });
  var slider = container.querySelector('.xgplayer-slider');
  var bar = container.querySelector('.xgplayer-bar');
  var selected = container.querySelector('.xgplayer-drag');
  var icon = container.querySelector('.xgplayer-icon');
  selected.style.height = player.config.volume * 100 + '%';
  slider.volume = player.config.volume;

  bar.addEventListener('mousedown', function (e) {
    e.preventDefault();
    e.stopPropagation();
    player.emit('volumeBarClick', e);
  });

  ['click', 'touchend'].forEach(function (item) {
    icon.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('volumeIconClick');
    });
  });

  icon.addEventListener('mouseenter', function (e) {
    e.preventDefault();
    e.stopPropagation();
    player.emit('volumeIconEnter');
  });

  ['blur', 'mouseleave'].forEach(function (item) {
    container.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('volumeIconLeave');
    });
  });
};

_player2.default.install('s_volume', s_volume);

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 28 28\">\n  <path transform=\"scale(0.0220625 0.0220625)\" d=\"M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z\"></path>\n  <path transform=\"scale(0.0220625 0.0220625)\" d=\"M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z\"></path>\n</svg>\n");

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 28 28\">\n  <path transform=\"scale(0.0220625 0.0220625)\" d=\"M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z\"></path>\n  <path transform=\"scale(0.0220625 0.0220625)\" d=\"M795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z\"></path>\n</svg>\n");

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 28 28\">\n  <path transform=\"scale(0.0220625 0.0220625)\" d=\"M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z\"></path>\n  <path transform=\"scale(0.0220625 0.0220625)\" d=\"M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z\"></path>\n</svg>\n");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_definition = function s_definition() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  var sniffer = _player2.default.sniffer;
  var paused = void 0;
  var container = util.createDom('xg-definition', '', { tabindex: 3 }, 'xgplayer-definition');
  if (sniffer.device === 'mobile') {
    player.config.definitionActive = 'click';
  }

  function onCanplayResourceReady() {
    var list = player.definitionList;
    var tmp = ['<ul>'],
        src = player.config.url,
        a = document.createElement('a');
    if (player.switchURL) {
      ['mp4', 'hls', '__flv__', 'dash'].every(function (item) {
        if (player[item]) {
          if (player[item].url) {
            a.href = player[item].url;
          }
          if (item === '__flv__') {
            if (player[item]._options) {
              a.href = player[item]._options.url;
            } else {
              a.href = player[item]._mediaDataSource.url;
            }
          }
          src = a.href;
          return false;
        } else {
          return true;
        }
      });
    } else {
      src = player.currentSrc || player.src;
    }
    if (player['hls']) {
      a.href = player['hls'].url;
      src = a.href;
    }
    list.forEach(function (item) {
      a.href = item.url;
      if (player.dash) {
        tmp.push('<li url=\'' + item.url + '\' cname=\'' + item.name + '\' class=\'' + (item.selected ? 'selected' : '') + '\'>' + item.name + '</li>');
      } else {
        tmp.push('<li url=\'' + item.url + '\' cname=\'' + item.name + '\' class=\'' + (a.href === src ? 'selected' : '') + '\'>' + item.name + '</li>');
      }
    });
    var cursrc = list.filter(function (item) {
      a.href = item.url;
      if (player.dash) {
        return item.selected === true;
      } else {
        return a.href === src;
      }
    });
    tmp.push('</ul><p class=\'name\'>' + (cursrc[0] || { name: '' }).name + '</p>');
    var urlInRoot = root.querySelector('.xgplayer-definition');
    if (urlInRoot) {
      urlInRoot.innerHTML = tmp.join('');
      var cur = urlInRoot.querySelector('.name');
      if (!player.config.definitionActive || player.config.definitionActive === 'hover') {
        cur.addEventListener('mouseenter', function (e) {
          e.preventDefault();
          e.stopPropagation();
          util.addClass(player.root, 'xgplayer-definition-active');
          urlInRoot.focus();
        });
      }
    } else {
      container.innerHTML = tmp.join('');
      var _cur = container.querySelector('.name');
      if (!player.config.definitionActive || player.config.definitionActive === 'hover') {
        _cur.addEventListener('mouseenter', function (e) {
          e.preventDefault();
          e.stopPropagation();
          util.addClass(player.root, 'xgplayer-definition-active');
          container.focus();
        });
      }
      player.controls.appendChild(container);
    }
  }
  function onResourceReady(list) {
    player.definitionList = list;
    if (list && list instanceof Array && list.length > 1) {
      util.addClass(root, 'xgplayer-is-definition');
      player.on('canplay', onCanplayResourceReady);
    }
  }
  player.on('resourceReady', onResourceReady);

  function onCanplayChangeDefinition() {
    player.currentTime = player.curTime;
    if (!paused) {
      var playPromise = player.play();
      if (playPromise !== undefined && playPromise) {
        playPromise.catch(function (err) {});
      }
    }
  };
  ['touchend', 'click'].forEach(function (item) {
    container.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      var list = player.definitionList;
      var li = e.target || e.srcElement,
          a = document.createElement('a');
      if (li && li.tagName.toLocaleLowerCase() === 'li') {
        player.emit('beforeDefinitionChange', a.href);
        var from = void 0,
            to = void 0;
        Array.prototype.forEach.call(li.parentNode.childNodes, function (item) {
          if (util.hasClass(item, 'selected')) {
            from = item.getAttribute('cname');
            util.removeClass(item, 'selected');
          }
        });
        if (player.dash) {
          list.forEach(function (item) {
            item.selected = false;
            if (item.name === li.innerHTML) {
              item.selected = true;
            }
          });
        }

        util.addClass(li, 'selected');
        to = li.getAttribute('cname');
        li.parentNode.nextSibling.innerHTML = '' + li.getAttribute('cname');
        a.href = li.getAttribute('url');
        if (player.switchURL) {
          var curRUL = document.createElement('a');
          ['mp4', 'hls', '__flv__', 'dash'].every(function (item) {
            if (player[item]) {
              if (player[item].url) {
                curRUL.href = player[item].url;
              }
              if (item === '__flv__') {
                if (player[item]._options) {
                  curRUL.href = player[item]._options.url;
                } else {
                  curRUL.href = player[item]._mediaDataSource.url;
                }
              }
              return false;
            } else {
              return true;
            }
          });
          if (curRUL.href !== a.href && !player.ended) {
            player.switchURL(a.href);
          }
        } else {
          if (player['hls']) {
            var _curRUL = document.createElement('a');
            _curRUL = player['hls'].url;
          }
          if (a.href !== player.currentSrc) {
            player.curTime = player.currentTime, paused = player.paused;
            if (!player.ended) {
              player.src = a.href;
              player.once('canplay', onCanplayChangeDefinition);
            }
          }
        }
        player.emit('definitionChange', { from: from, to: to });
        if (sniffer.device === 'mobile') {
          util.removeClass(player.root, 'xgplayer-definition-active');
        }
      } else if (player.config.definitionActive === 'click' && li && (li.tagName.toLocaleLowerCase() === 'p' || li.tagName.toLocaleLowerCase() === 'em')) {
        if (sniffer.device === 'mobile') {
          util.toggleClass(player.root, 'xgplayer-definition-active');
        } else {
          util.addClass(player.root, 'xgplayer-definition-active');
        }
        container.focus();
      }
      player.emit('focus');
    }, false);
  });

  container.addEventListener('mouseleave', function (e) {
    e.preventDefault();
    e.stopPropagation();
    util.removeClass(root, 'xgplayer-definition-active');
  });

  function onBlur() {
    util.removeClass(root, 'xgplayer-definition-active');
  }
  player.on('blur', onBlur);

  function onDestroy() {
    player.off('resourceReady', onResourceReady);
    player.off('canplay', onCanplayResourceReady);
    player.off('canplay', onCanplayChangeDefinition);
    player.off('blur', onBlur);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('s_definition', s_definition);

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _loading = __webpack_require__(86);

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_loading = function s_loading() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  var container = util.createDom('xg-loading', '' + _loading2.default, {}, 'xgplayer-loading');
  player.once('ready', function () {
    root.appendChild(container);
  });
};

_player2.default.install('s_loading', s_loading);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewbox=\"0 0 100 100\">\n  <path d=\"M100,50A50,50,0,1,1,50,0\"></path>\n</svg>\n");

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isRotateFullscreen = function isRotateFullscreen(player) {
  return _player2.default.util.hasClass(player.root, 'xgplayer-rotate-fullscreen');
};

var s_progress = function s_progress() {
  var player = this;
  var util = _player2.default.util;
  var container = util.createDom('xg-progress', '<xg-outer class="xgplayer-progress-outer">\n                                                   <xg-cache class="xgplayer-progress-cache"></xg-cache>\n                                                   <xg-played class="xgplayer-progress-played">\n                                                     <xg-progress-btn class="xgplayer-progress-btn"></xg-progress-btn>\n                                                     <xg-point class="xgplayer-progress-point xgplayer-tips"></xg-point>\n                                                     <xg-thumbnail class="xgplayer-progress-thumbnail xgplayer-tips"></xg-thumbnail>\n                                                   </xgplayer-played>\n                                                 </xg-outer>', { tabindex: 1 }, 'xgplayer-progress');
  var containerWidth = void 0;
  player.controls.appendChild(container);
  var progress = container.querySelector('.xgplayer-progress-played');
  var btn = container.querySelector('.xgplayer-progress-btn');
  var outer = container.querySelector('.xgplayer-progress-outer');
  var cache = container.querySelector('.xgplayer-progress-cache');
  var point = container.querySelector('.xgplayer-progress-point');
  var thumbnail = container.querySelector('.xgplayer-progress-thumbnail');
  player.dotArr = {};
  function dotEvent(dotItem, text) {
    dotItem.addEventListener('mouseenter', function (e) {
      if (text) {
        util.addClass(dotItem, 'xgplayer-progress-dot-show');
        util.addClass(container, 'xgplayer-progress-dot-active');
      }
    });
    dotItem.addEventListener('mouseleave', function (e) {
      if (text) {
        util.removeClass(dotItem, 'xgplayer-progress-dot-show');
        util.removeClass(container, 'xgplayer-progress-dot-active');
      }
    });
    dotItem.addEventListener('touchend', function (e) {
      // e.preventDefault()
      e.stopPropagation();
      if (text) {
        if (!util.hasClass(dotItem, 'xgplayer-progress-dot-show')) {
          Object.keys(player.dotArr).forEach(function (key) {
            if (player.dotArr[key]) {
              util.removeClass(player.dotArr[key], 'xgplayer-progress-dot-show');
            }
          });
        }
        util.toggleClass(dotItem, 'xgplayer-progress-dot-show');
        util.toggleClass(container, 'xgplayer-progress-dot-active');
      }
    });
  }
  function onCanplay() {
    if (player.config.progressDot && util.typeOf(player.config.progressDot) === 'Array') {
      player.config.progressDot.forEach(function (item) {
        if (item.time >= 0 && item.time <= player.duration) {
          var dot = util.createDom('xg-progress-dot', item.text ? '<span class="xgplayer-progress-tip">' + item.text + '</span>' : '', {}, 'xgplayer-progress-dot');
          dot.style.left = item.time / player.duration * 100 + '%';
          if (item.duration >= 0) {
            dot.style.width = Math.min(item.duration, player.duration - item.time) / player.duration * 100 + '%';
          }
          outer.appendChild(dot);
          player.dotArr[item.time] = dot;
          dotEvent(dot, item.text);
        }
      });
    }
  }
  player.once('canplay', onCanplay);
  player.addProgressDot = function (time, text, duration) {
    if (player.dotArr[time]) {
      return;
    }
    if (time >= 0 && time <= player.duration) {
      var dot = util.createDom('xg-progress-dot', '', {}, 'xgplayer-progress-dot');
      dot.style.left = time / player.duration * 100 + '%';
      if (duration >= 0) {
        dot.style.width = Math.min(duration, player.duration - time) / player.duration * 100 + '%';
      }
      outer.appendChild(dot);
      player.dotArr[time] = dot;
      dotEvent(dot, text);
    }
  };
  player.removeProgressDot = function (time) {
    if (time >= 0 && time <= player.duration && player.dotArr[time]) {
      var dot = player.dotArr[time];
      dot.parentNode.removeChild(dot);
      dot = null;
      player.dotArr[time] = null;
    }
  };
  player.removeAllProgressDot = function () {
    Object.keys(player.dotArr).forEach(function (key) {
      if (player.dotArr[key]) {
        var dot = player.dotArr[key];
        dot.parentNode.removeChild(dot);
        dot = null;
        player.dotArr[key] = null;
      }
    });
  };
  var tnailPicNum = 0;
  var tnailWidth = 0;
  var tnailHeight = 0;
  var tnailCol = 0;
  var tnailRow = 0;
  var interval = 0;
  var tnailUrls = [];
  if (player.config.thumbnail) {
    tnailPicNum = player.config.thumbnail.pic_num;
    tnailWidth = player.config.thumbnail.width;
    tnailHeight = player.config.thumbnail.height;
    tnailCol = player.config.thumbnail.col;
    tnailRow = player.config.thumbnail.row;
    tnailUrls = player.config.thumbnail.urls;
    thumbnail.style.width = tnailWidth + 'px';
    thumbnail.style.height = tnailHeight + 'px';
  };
  ['touchstart', 'mousedown'].forEach(function (item) {
    container.addEventListener(item, function (e) {
      // e.preventDefault()
      e.stopPropagation();
      util.event(e);
      if (e._target === point || !player.config.allowSeekAfterEnded && player.ended) {
        return true;
      }
      container.focus();

      var _progress$getBounding = progress.getBoundingClientRect(),
          left = _progress$getBounding.left;

      var isRotate = isRotateFullscreen(player);
      if (isRotate) {
        left = progress.getBoundingClientRect().top;
        containerWidth = container.getBoundingClientRect().height;
      } else {
        containerWidth = container.getBoundingClientRect().width;
        left = progress.getBoundingClientRect().left;
      }

      var move = function move(e) {
        // e.preventDefault()
        e.stopPropagation();
        util.event(e);
        player.isProgressMoving = true;
        var w = (isRotate ? e.clientY : e.clientX) - left;
        if (w > containerWidth) {
          w = containerWidth;
        }
        var now = w / containerWidth * player.duration;
        progress.style.width = w * 100 / containerWidth + '%';

        if (player.videoConfig.mediaType === 'video' && !player.dash && !player.config.closeMoveSeek) {
          player.currentTime = Number(now).toFixed(1);
        } else {
          var time = util.findDom(player.controls, '.xgplayer-time');
          if (time) {
            time.innerHTML = '<span class="xgplayer-time-current">' + util.format(now || 0) + '</span><span>' + util.format(player.duration) + '</span>';
          }
        }
        player.emit('focus');
      };
      var up = function up(e) {
        // e.preventDefault()
        e.stopPropagation();
        util.event(e);
        window.removeEventListener('mousemove', move);
        window.removeEventListener('touchmove', move, { passive: false });
        window.removeEventListener('mouseup', up);
        window.removeEventListener('touchend', up);
        container.blur();
        if (!player.isProgressMoving || player.videoConfig.mediaType === 'audio' || player.dash || player.config.closeMoveSeek) {
          var w = (isRotate ? e.clientY : e.clientX) - left;
          if (w > containerWidth) {
            w = containerWidth;
          }
          var now = w / containerWidth * player.duration;
          progress.style.width = w * 100 / containerWidth + '%';
          player.currentTime = Number(now).toFixed(1);
        }
        player.emit('focus');
        player.isProgressMoving = false;
      };
      window.addEventListener('mousemove', move);
      window.addEventListener('touchmove', move, { passive: false });
      window.addEventListener('mouseup', up);
      window.addEventListener('touchend', up);
      return true;
    });
  });

  container.addEventListener('mouseenter', function (e) {
    if (!player.config.allowSeekAfterEnded && player.ended) {
      return true;
    }
    var isRotate = isRotateFullscreen(player);
    var containerLeft = isRotate ? container.getBoundingClientRect().top : container.getBoundingClientRect().left;
    var containerWidth = isRotate ? container.getBoundingClientRect().height : container.getBoundingClientRect().width;

    var compute = function compute(e) {
      var now = ((isRotate ? e.clientY : e.clientX) - containerLeft) / containerWidth * player.duration;
      now = now < 0 ? 0 : now;
      point.textContent = util.format(now);
      var pointWidth = point.getBoundingClientRect().width;
      if (player.config.thumbnail) {
        interval = player.duration / tnailPicNum;
        var index = Math.floor(now / interval);
        thumbnail.style.backgroundImage = 'url(' + tnailUrls[Math.ceil((index + 1) / (tnailCol * tnailRow)) - 1] + ')';
        var indexInPage = index + 1 - tnailCol * tnailRow * (Math.ceil((index + 1) / (tnailCol * tnailRow)) - 1);
        var tnaiRowIndex = Math.ceil(indexInPage / tnailRow) - 1;
        var tnaiColIndex = indexInPage - tnaiRowIndex * tnailRow - 1;
        thumbnail.style['background-position'] = '-' + tnaiColIndex * tnailWidth + 'px -' + tnaiRowIndex * tnailHeight + 'px';
        var left = (isRotate ? e.clientY : e.clientX) - containerLeft - tnailWidth / 2;
        left = left > 0 ? left : 0;
        left = left < containerWidth - tnailWidth ? left : containerWidth - tnailWidth;
        thumbnail.style.left = left + 'px';
        thumbnail.style.top = -10 - tnailHeight + 'px';
        thumbnail.style.display = 'block';
        point.style.left = left + tnailWidth / 2 - pointWidth / 2 + 'px';
      } else {
        var _left = e.clientX - containerLeft - pointWidth / 2;
        _left = _left > 0 ? _left : 0;
        _left = _left > containerWidth - pointWidth ? containerWidth - pointWidth : _left;
        point.style.left = _left + 'px';
      }
      if (util.hasClass(container, 'xgplayer-progress-dot-active')) {
        point.style.display = 'none';
      } else {
        point.style.display = 'block';
      }
    };
    var move = function move(e) {
      compute(e);
    };
    var leave = function leave(e) {
      container.removeEventListener('mousemove', move, false);
      container.removeEventListener('mouseleave', leave, false);
      compute(e);
      point.style.display = 'none';
      thumbnail.style.display = 'none';
    };
    container.addEventListener('mousemove', move, false);
    container.addEventListener('mouseleave', leave, false);
    compute(e);
  }, false);

  // let lastBtnLeft = false
  var onTimeupdate = function onTimeupdate() {
    if (!containerWidth && container) {
      containerWidth = container.getBoundingClientRect().width;
    }
    if (player.videoConfig.mediaType !== 'audio' || !player.isProgressMoving || !player.dash) {
      var precent = player.currentTime / player.duration;
      var prevPrecent = Number.parseFloat(progress.style.width || '0') / Number.parseFloat(container.style.width || '100');
      if (Math.abs(precent - prevPrecent) <= 1) {
        progress.style.width = player.currentTime * 100 / player.duration + '%';
      }
    }
  };
  player.on('timeupdate', onTimeupdate);

  var onCurrentTimeChange = function onCurrentTimeChange() {
    progress.style.width = player.currentTime * 100 / player.duration + '%';
  };
  player.on('currentTimeChange', onCurrentTimeChange);

  var onSrcChange = function onSrcChange() {
    progress.style.width = '0%';
  };
  player.on('srcChange', onSrcChange);

  var onCacheUpdate = function onCacheUpdate() {
    var buffered = player.buffered;
    if (buffered && buffered.length > 0) {
      var end = buffered.end(buffered.length - 1);
      for (var i = 0, len = buffered.length; i < len; i++) {
        if (player.currentTime >= buffered.start(i) && player.currentTime <= buffered.end(i)) {
          end = buffered.end(i);
          for (var j = i + 1; j < buffered.length; j++) {
            if (buffered.start(j) - buffered.end(j - 1) >= 2) {
              end = buffered.end(j - 1);
              break;
            }
          }
          break;
        }
      }
      cache.style.width = end / player.duration * 100 + '%';
    }
  };
  var cacheUpdateEvents = ['bufferedChange', 'cacheupdate', 'ended', 'timeupdate'];
  cacheUpdateEvents.forEach(function (item) {
    player.on(item, onCacheUpdate);
  });

  function destroyFunc() {
    player.removeAllProgressDot();
    player.off('canplay', onCanplay);
    player.off('timeupdate', onTimeupdate);
    player.off('currentTimeChange', onCurrentTimeChange);
    player.off('srcChange', onSrcChange);
    cacheUpdateEvents.forEach(function (item) {
      player.off(item, onCacheUpdate);
    });
    player.off('destroy', destroyFunc);
  }
  player.once('destroy', destroyFunc);
};

_player2.default.install('s_progress', s_progress);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_time = function s_time() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  var container = util.createDom('xg-time', '<span class="xgplayer-time-current">' + (player.currentTime || util.format(0)) + '</span>\n                                           <span>' + (player.duration || util.format(0)) + '</span>', {}, 'xgplayer-time');
  player.once('ready', function () {
    player.controls.appendChild(container);
  });
  var onTimeChange = function onTimeChange() {
    // let liveText = player.lang.LIVE
    // if(player.duration === Infinity) {
    //   util.addClass(player.root, 'xgplayer-is-live')
    //   if(!util.findDom(player.root, '.xgplayer-live')) {
    //     const live = util.createDom('xg-live', liveText, {}, 'xgplayer-live')
    //     player.controls.appendChild(live)
    //   }
    // }
    if (player.videoConfig.mediaType !== 'audio' || !player.isProgressMoving || !player.dash) {
      container.innerHTML = '<span class="xgplayer-time-current">' + util.format(player.currentTime || 0) + '</span>' + ('<span>' + util.format(player.duration) + '</span>');
    }
  };
  player.on('durationchange', onTimeChange);
  player.on('timeupdate', onTimeChange);

  function onDestroy() {
    player.off('durationchange', onTimeChange);
    player.off('timeupdate', onTimeChange);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('s_time', s_time);

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _replay = __webpack_require__(90);

var _replay2 = _interopRequireDefault(_replay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_replay = function s_replay() {
  var player = this;
  var util = _player2.default.util;
  var root = player.root;

  var replayText = player.lang.REPLAY;
  var btn = util.createDom('xg-replay', _replay2.default + '\n                                         <xg-replay-txt class="xgplayer-replay-txt">' + replayText + '</xg-replay-txt>\n                                        ', {}, 'xgplayer-replay');
  player.once('ready', function () {
    root.appendChild(btn);
  });

  function onEnded() {
    var path = btn.querySelector('path');
    if (path) {
      var transform = window.getComputedStyle(path).getPropertyValue('transform');
      if (typeof transform === 'string' && transform.indexOf('none') > -1) {
        return;
      } else {
        path.setAttribute('transform', transform);
      }
    }
  }
  player.on('ended', onEnded);

  var svg = btn.querySelector('svg');

  ['click', 'touchend'].forEach(function (item) {
    svg.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('replayBtnClick');
    });
  });

  function destroyFunc() {
    player.off('ended', onEnded);
    player.off('destroy', destroyFunc);
  }
  player.once('destroy', destroyFunc);
};

_player2.default.install('s_replay', s_replay);

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg class=\"xgplayer-replay-svg\" xmlns=\"http://www.w3.org/2000/svg\" width=\"78\" height=\"78\" viewbox=\"0 0 78 78\">\n  <path d=\"M8.22708362,13.8757234 L11.2677371,12.6472196 C11.7798067,12.4403301 12.3626381,12.6877273 12.5695276,13.1997969 L12.9441342,14.1269807 C13.1510237,14.6390502 12.9036264,15.2218816 12.3915569,15.4287712 L6.8284538,17.6764107 L5.90126995,18.0510173 C5.38920044,18.2579068 4.80636901,18.0105096 4.5994795,17.49844 L1.97723335,11.0081531 C1.77034384,10.4960836 2.0177411,9.91325213 2.52981061,9.70636262 L3.45699446,9.33175602 C3.96906396,9.12486652 4.5518954,9.37226378 4.75878491,9.88433329 L5.67885163,12.1615783 C7.99551726,6.6766934 13.3983951,3 19.5,3 C27.7842712,3 34.5,9.71572875 34.5,18 C34.5,26.2842712 27.7842712,33 19.5,33 C15.4573596,33 11.6658607,31.3912946 8.87004692,28.5831991 C8.28554571,27.9961303 8.28762719,27.0463851 8.87469603,26.4618839 C9.46176488,25.8773827 10.4115101,25.8794641 10.9960113,26.466533 C13.2344327,28.7147875 16.263503,30 19.5,30 C26.127417,30 31.5,24.627417 31.5,18 C31.5,11.372583 26.127417,6 19.5,6 C14.4183772,6 9.94214483,9.18783811 8.22708362,13.8757234 Z\"></path>\n</svg>\n");

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_playbackRate = function s_playbackRate() {
  var player = this;
  var sniffer = _player2.default.sniffer;
  var util = _player2.default.util;
  if (player.config.playbackRate) {
    player.config.playbackRate.sort(function (a, b) {
      return b - a;
    });
  } else {
    return false;
  }
  var ul = util.createDom('xg-playbackrate', " ", {}, 'xgplayer-playbackrate');
  var list = [];
  player.config.playbackRate.forEach(function (item) {
    list.push({ name: '' + item, rate: item + 'x', selected: false });
  });
  var selectedSpeed = 1;
  var tmp = ['<ul>'];
  list.forEach(function (item) {
    if (player.config.defaultPlaybackRate && player.config.defaultPlaybackRate.toString() === item.name) {
      item.selected = true;
      selectedSpeed = player.config.defaultPlaybackRate;
      player.once('playing', function () {
        player.video.playbackRate = player.config.defaultPlaybackRate;
      });
    } else if (item.name === '1.0' || item.name === '1') {
      if (!player.config.defaultPlaybackRate || player.config.defaultPlaybackRate === 1) {
        item.selected = true;
      }
    }
    tmp.push('<li cname=\'' + item.name + '\' class=\'' + (item.selected ? 'selected' : '') + '\'>' + item.rate + '</li>');
  });
  tmp.push('</ul><p class=\'name\'>' + selectedSpeed + 'x</p>');
  var playbackDom = player.root.querySelector('.xgplayer-playbackrate');
  if (playbackDom) {
    playbackDom.innerHTML = tmp.join('');
    var cur = void 0;
    if (playbackDom) {
      cur = playbackDom.querySelector('.name');
    } else return;
    cur.addEventListener('mouseenter', function (e) {
      e.preventDefault();
      e.stopPropagation();
      util.addClass(player.root, 'xgplayer-playbackrate-active');
      playbackDom.focus();
    });
  } else {
    ul.innerHTML = tmp.join('');
    var _cur = void 0;
    if (ul) {
      _cur = ul.querySelector('.name');
    } else return;
    _cur.addEventListener('mouseenter', function (e) {
      e.preventDefault();
      e.stopPropagation();
      util.addClass(player.root, 'xgplayer-playbackrate-active');
      ul.focus();
    });
    player.once('ready', function () {
      player.controls.appendChild(ul);
    });
  }

  var ev = ['touchend', 'click'];
  ev.forEach(function (item) {
    ul.addEventListener(item, function (e) {
      e.stopPropagation();
      e.preventDefault();
      var li = e.target;
      if (li && li.tagName.toLocaleLowerCase() === 'li') {
        var from = void 0,
            to = void 0;
        list.forEach(function (item) {
          item.selected = false;
          if (li.textContent.replace(/\s+/g, "") === item.rate) {
            Array.prototype.forEach.call(li.parentNode.childNodes, function (item) {
              if (util.hasClass(item, 'selected')) {
                from = parseFloat(item.getAttribute('cname'));
                util.removeClass(item, 'selected');
              }
            });
            item.selected = true;
            player.video.playbackRate = item.name * 1;
            selectedSpeed = item.name * 1;
          }
        });
        util.addClass(li, 'selected');
        to = parseFloat(li.getAttribute('cname'));
        li.parentNode.nextSibling.innerHTML = li.getAttribute('cname') + 'x';
        player.emit('playbackrateChange', { from: from, to: to });
        if (sniffer.device === 'mobile') {
          util.removeClass(player.root, 'xgplayer-playbackrate-active');
        }
      } else if (li && (li.tagName.toLocaleLowerCase() === 'p' || li.tagName.toLocaleLowerCase() === 'span')) {
        util.addClass(player.root, 'xgplayer-playbackrate-active');
        ul.focus();
      }
      player.emit('focus');
    }, false);
  });
  ul.addEventListener('mouseleave', function (e) {
    e.preventDefault();
    e.stopPropagation();
    util.removeClass(player.root, 'xgplayer-playbackrate-active');
  });
  player.on('play', function () {
    if (player.video.playbackRate.toFixed(1) !== selectedSpeed.toFixed(1)) {
      player.video.playbackRate = selectedSpeed;
    }
  });
};

_player2.default.install('s_playbackRate', s_playbackRate);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_localPreview = function s_localPreview() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  if (player.config.preview && player.config.preview.uploadEl) {
    var preview = util.createDom('xg-preview', '<input type="file">', {}, 'xgplayer-preview');
    var upload = preview.querySelector('input');
    player.config.preview.uploadEl.appendChild(preview);
    upload.onchange = function () {
      player.emit('upload', upload);
    };
  }
};

_player2.default.install('s_localPreview', s_localPreview);

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _download = __webpack_require__(94);

var _download2 = _interopRequireDefault(_download);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_download = function s_download() {
  var player = this;
  var util = _player2.default.util;
  if (!player.config.download) {
    return;
  }
  var btn = util.createDom('xg-download', '<xg-icon class="xgplayer-icon">' + _download2.default + '</xg-icon>', {}, 'xgplayer-download');

  var tipsText = player.lang.DOWNLOAD_TIPS;
  var tips = util.createDom('xg-tips', '<span class="xgplayer-tip-download">' + tipsText + '</span>', {}, 'xgplayer-tips');
  btn.appendChild(tips);
  player.once('ready', function () {
    player.controls.appendChild(btn);
  });

  ['click', 'touchend'].forEach(function (item) {
    btn.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('downloadBtnClick');
    });
  });
};

_player2.default.install('s_download', s_download);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\">\n  <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n    <g transform=\"translate(-488.000000, -340.000000)\" fill=\"#FFFFFF\">\n      <g id=\"Group-2\">\n        <g id=\"volme_big-copy\" transform=\"translate(488.000000, 340.000000)\">\n          <rect id=\"Rectangle-18\" x=\"11\" y=\"4\" width=\"2\" height=\"12\" rx=\"1\"></rect>\n          <rect id=\"Rectangle-2\" x=\"3\" y=\"18\" width=\"18\" height=\"2\" rx=\"1\"></rect>\n          <rect id=\"Rectangle-2\" transform=\"translate(4.000000, 17.500000) rotate(90.000000) translate(-4.000000, -17.500000) \" x=\"1.5\" y=\"16.5\" width=\"5\" height=\"2\" rx=\"1\"></rect><rect id=\"Rectangle-2-Copy-3\" transform=\"translate(20.000000, 17.500000) rotate(90.000000) translate(-20.000000, -17.500000) \" x=\"17.5\" y=\"16.5\" width=\"5\" height=\"2\" rx=\"1\"></rect>\n          <path d=\"M9.48791171,8.26502656 L9.48791171,14.2650266 C9.48791171,14.8173113 9.04019646,15.2650266 8.48791171,15.2650266 C7.93562696,15.2650266 7.48791171,14.8173113 7.48791171,14.2650266 L7.48791171,7.26502656 C7.48791171,6.71274181 7.93562696,6.26502656 8.48791171,6.26502656 L15.4879117,6.26502656 C16.0401965,6.26502656 16.4879117,6.71274181 16.4879117,7.26502656 C16.4879117,7.81731131 16.0401965,8.26502656 15.4879117,8.26502656 L9.48791171,8.26502656 Z\" id=\"Combined-Shape\" transform=\"translate(11.987912, 10.765027) scale(1, -1) rotate(45.000000) translate(-11.987912, -10.765027) \"></path>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n");

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _danmu = __webpack_require__(96);

var _danmu2 = _interopRequireDefault(_danmu);

var _panel = __webpack_require__(98);

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_danmu = function s_danmu() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  if (!player.config.danmu) {
    return;
  }
  var container = util.createDom('xg-danmu', '', {}, 'xgplayer-danmu');
  player.once('ready', function () {
    root.appendChild(container);
  });
  var config = util.deepCopy({
    container: container,
    player: player.video,
    comments: [],
    area: {
      start: 0,
      end: 1
    }
  }, player.config.danmu);
  var panelBtn = void 0;
  if (player.config.danmu.panel) {
    panelBtn = _player2.default.util.createDom('xg-panel', '<xg-panel-icon class="xgplayer-panel-icon">\n                                                ' + _panel2.default + '\n                                              </xg-panel-icon>\n                                              <xg-panel-slider class="xgplayer-panel-slider">\n                                                <xg-hidemode class="xgplayer-hidemode">\n                                                  <p class="xgplayer-hidemode-font">\u5C4F\u853D\u7C7B\u578B</p>\n                                                  <ul class="xgplayer-hidemode-radio">\n                                                    <li class="xgplayer-hidemode-scroll" id="false">\u6EDA\u52A8</li><li class="xgplayer-hidemode-top" id="false">\u9876\u90E8</li><li class="xgplayer-hidemode-bottom" id="false">\u5E95\u90E8</li><li class="xgplayer-hidemode-color" id="false">\u8272\u5F69</li>\n                                                  </ul>\n                                                </xg-hidemode>\n                                                <xg-transparency class="xgplayer-transparency">\n                                                  <span>\u4E0D\u900F\u660E\u5EA6</span>\n                                                  <input class="xgplayer-transparency-line xgplayer-transparency-color xgplayer-transparency-bar xgplayer-transparency-gradient" type="range" min="0" max="100" step="0.1" value="50"></input>\n                                                </xg-transparency>\n                                                <xg-showarea class="xgplayer-showarea">\n                                                  <div class="xgplayer-showarea-name">\u663E\u793A\u533A\u57DF</div>\n                                                  <div class="xgplayer-showarea-control">\n                                                    <div class="xgplayer-showarea-control-up">\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-onequarters">1/4</span>\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-twoquarters selected-color">1/2</span>\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-threequarters">3/4</span>\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-full">1</span>\n                                                    </div>\n                                                    <div class="xgplayer-showarea-control-down">\n                                                      <div class="xgplayer-showarea-control-down-dots">\n                                                        <span class="xgplayer-showarea-onequarters-dot"></span>\n                                                        <span class="xgplayer-showarea-twoquarters-dot"></span>\n                                                        <span class="xgplayer-showarea-threequarters-dot"></span>\n                                                        <span class="xgplayer-showarea-full-dot"></span>\n                                                      </div>\n                                                      <input class="xgplayer-showarea-line xgplayer-showarea-color xgplayer-showarea-bar xgplayer-gradient" type="range" min="1" max="4" step="1" value="1">\n                                                    </div>\n                                                  </div>\n                                                </xg-showarea>\n                                                <xg-danmuspeed class="xgplayer-danmuspeed">\n                                                  <div class="xgplayer-danmuspeed-name">\u5F39\u5E55\u901F\u5EA6</div>\n                                                  <div class="xgplayer-danmuspeed-control">\n                                                    <div class="xgplayer-danmuspeed-control-up">\n                                                      <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-small">\u6162</span>\n                                                      <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-middle selected-color">\u4E2D</span>\n                                                      <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-large">\u5FEB</span>\n                                                    </div>\n                                                    <div class="xgplayer-danmuspeed-control-down">\n                                                      <div class="xgplayer-danmuspeed-control-down-dots">\n                                                        <span class="xgplayer-danmuspeed-small-dot"></span>\n                                                        <span class="xgplayer-danmuspeed-middle-dot"></span>\n                                                        <span class="xgplayer-danmuspeed-large-dot"></span>\n                                                      </div>\n                                                      <input class="xgplayer-danmuspeed-line xgplayer-danmuspeed-color xgplayer-danmuspeed-bar xgplayer-gradient" type="range" min="50" max="150" step="50" value="100">\n                                                    </div>\n                                                  </div>\n                                                </xg-danmuspeed>\n                                                <xg-danmufont class="xgplayer-danmufont">\n                                                  <div class="xgplayer-danmufont-name">\u5B57\u4F53\u5927\u5C0F</div>\n                                                  <div class="xgplayer-danmufont-control">\n                                                    <div class="xgplayer-danmufont-control-up">\n                                                      <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-small">\u5C0F</span>\n                                                      <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-middle">\u4E2D</span>\n                                                      <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-large selected-color">\u5927</span>\n                                                    </div>\n                                                    <div class="xgplayer-danmufont-control-down">\n                                                      <div class="xgplayer-danmufont-control-down-dots">\n                                                        <span class="xgplayer-danmufont-small-dot"></span>\n                                                        <span class="xgplayer-danmufont-middle-dot"></span>\n                                                        <span class="xgplayer-danmufont-large-dot"></span>\n                                                      </div>\n                                                      <input class="xgplayer-danmufont-line xgplayer-danmufont-color xgplayer-danmufont-bar xgplayer-gradient" type="range" min="20" max="30" step="5" value="25">\n                                                    </div>\n                                                  </div>\n                                                </xg-danmufont>\n                                              </xg-panel-slider>', { tabindex: 7 }, 'xgplayer-panel');
    player.once('ready', function () {
      player.controls.appendChild(panelBtn);
    });
  }
  player.once('complete', function () {
    var danmujs = new _danmu2.default(config);
    player.emit('initDefaultDanmu', danmujs);
    player.danmu = danmujs;

    if (!player.config.danmu.panel) {
      return;
    }

    var slider = panelBtn.querySelector('.xgplayer-panel-slider');
    var focusStatus = void 0;
    var focusarray = ['mouseenter', 'touchend', 'click'];
    focusarray.forEach(function (item) {
      panelBtn.addEventListener(item, function (e) {
        e.preventDefault();
        e.stopPropagation();
        _player2.default.util.addClass(slider, 'xgplayer-panel-active');
        panelBtn.focus();
        focusStatus = true;
      });
    });
    panelBtn.addEventListener('mouseleave', function (e) {
      e.preventDefault();
      e.stopPropagation();
      _player2.default.util.removeClass(slider, 'xgplayer-panel-active');
      focusStatus = false;
    });
    slider.addEventListener('mouseleave', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (focusStatus === false) {
        _player2.default.util.removeClass(slider, 'xgplayer-panel-active');
      }
    });

    var danmuConfig = player.config.danmu;
    var hidemodeScroll = panelBtn.querySelector('.xgplayer-hidemode-scroll');
    var hidemodeTop = panelBtn.querySelector('.xgplayer-hidemode-top');
    var hidemodeBottom = panelBtn.querySelector('.xgplayer-hidemode-bottom');
    var hidemodeColor = panelBtn.querySelector('.xgplayer-hidemode-color');
    var hidemodeArray = {
      'scroll': hidemodeScroll,
      'top': hidemodeTop,
      'bottom': hidemodeBottom,
      'color': hidemodeColor
    };

    var _loop = function _loop(key) {
      var keys = key;
      var ev = ['touchend', 'click'];
      ev.forEach(function (item) {
        hidemodeArray[keys].addEventListener(item, function (e) {
          if (hidemodeArray[keys].getAttribute('id') !== 'true') {
            hidemodeArray[keys].style.color = '#f85959';
            hidemodeArray[keys].setAttribute('id', 'true');
            player.danmu.hide(keys);
          } else {
            hidemodeArray[keys].style.color = '#aaa';
            hidemodeArray[keys].setAttribute('id', 'false');
            player.danmu.show(keys);
          }
        });
      });
    };

    for (var key in hidemodeArray) {
      _loop(key);
    }
    var transparency = panelBtn.querySelector('.xgplayer-transparency-line');
    var transparencyGradient = panelBtn.querySelector('.xgplayer-transparency-gradient');
    var transparencyValue = 50;
    transparencyGradient.style.background = 'linear-gradient(to right, #f85959 0%, #f85959 ' + transparencyValue + '%, #aaa ' + transparencyValue + '%, #aaa)';
    transparency.addEventListener('input', function (e) {
      e.preventDefault();
      e.stopPropagation();
      transparencyValue = e.target.value;
      transparencyGradient.style.background = 'linear-gradient(to right, #f85959 0%, #f85959 ' + transparencyValue + '%, #aaa ' + transparencyValue + '%, #aaa)';
      danmuConfig.comments.forEach(function (item) {
        item.style.opacity = transparencyValue / 100;
      });
    });
    var showarea = panelBtn.querySelector('.xgplayer-showarea-line');
    showarea.addEventListener('input', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var showareaValue = e.target.value;
      player.danmu.config.area.end = showareaValue / 100;
      player.config.danmu.area.end = showareaValue / 100;
      player.danmu.bulletBtn.main.channel.resize();
    });
    var danmuspeed = panelBtn.querySelector('.xgplayer-danmuspeed-line');
    danmuspeed.addEventListener('input', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var danmuspeedValue = e.target.value;
      danmuConfig.comments.forEach(function (item) {
        item.duration = (200 - danmuspeedValue) * 100;
      });
    });
    var danmufont = panelBtn.querySelector('.xgplayer-danmufont-line');
    danmufont.addEventListener('input', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var danmufontValue = e.target.value;
      danmuConfig.comments.forEach(function (item) {
        item.style.fontSize = danmufontValue + 'px';
      });
    });
    if (navigator.userAgent.indexOf("Firefox") > -1) {
      for (var i = 0; i < slider.querySelectorAll('input').length; i++) {
        slider.querySelectorAll('input')[i].style.marginTop = '10px';
      }
    }
  });
};

_player2.default.install('s_danmu', s_danmu);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function () {
  return function (t) {
    var e = {};function n(i) {
      if (e[i]) return e[i].exports;var o = e[i] = { i: i, l: !1, exports: {} };return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }return n.m = t, n.c = e, n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;if (4 & e && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.__esModule) return t;var i = Object.create(null);if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var o in t) {
        n.d(i, o, function (e) {
          return t[e];
        }.bind(null, o));
      }return i;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 2);
  }([function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var i,
        o = n(22),
        r = (i = o) && i.__esModule ? i : { default: i };var a = {};a.domObj = new r.default(), a.createDom = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
          o = document.createElement(t);return o.className = i, o.innerHTML = e, Object.keys(n).forEach(function (e) {
        var i = e,
            r = n[e];"video" === t || "audio" === t ? r && o.setAttribute(i, r) : o.setAttribute(i, r);
      }), o;
    }, a.hasClass = function (t, e) {
      return t.classList ? Array.prototype.some.call(t.classList, function (t) {
        return t === e;
      }) : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
    }, a.addClass = function (t, e) {
      t.classList ? e.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach(function (e) {
        e && t.classList.add(e);
      }) : a.hasClass(t, e) || (t.className += " " + e);
    }, a.removeClass = function (t, e) {
      t.classList ? e.split(/\s+/g).forEach(function (e) {
        t.classList.remove(e);
      }) : a.hasClass(t, e) && e.split(/\s+/g).forEach(function (e) {
        var n = new RegExp("(\\s|^)" + e + "(\\s|$)");t.className = t.className.replace(n, " ");
      });
    }, a.toggleClass = function (t, e) {
      e.split(/\s+/g).forEach(function (e) {
        a.hasClass(t, e) ? a.removeClass(t, e) : a.addClass(t, e);
      });
    }, a.findDom = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
          e = arguments[1],
          n = void 0;try {
        n = t.querySelector(e);
      } catch (i) {
        e.startsWith("#") && (n = t.getElementById(e.slice(1)));
      }return n;
    }, a.deepCopy = function (t, e) {
      if ("Object" === a.typeOf(e) && "Object" === a.typeOf(t)) return Object.keys(e).forEach(function (n) {
        "Object" !== a.typeOf(e[n]) || e[n] instanceof Node ? "Array" === a.typeOf(e[n]) ? t[n] = "Array" === a.typeOf(t[n]) ? t[n].concat(e[n]) : e[n] : t[n] = e[n] : t[n] ? a.deepCopy(t[n], e[n]) : t[n] = e[n];
      }), t;
    }, a.typeOf = function (t) {
      return Object.prototype.toString.call(t).match(/([^\s.*]+)(?=]$)/g)[0];
    }, a.copyDom = function (t) {
      if (t && 1 === t.nodeType) {
        var e = document.createElement(t.tagName);return Array.prototype.forEach.call(t.attributes, function (t) {
          e.setAttribute(t.name, t.value);
        }), t.innerHTML && (e.innerHTML = t.innerHTML), e;
      }return "";
    }, a.formatTime = function (t) {
      var e = Math.floor(t);return 1e3 * e + (t - e);
    }, e.default = a, t.exports = e.default;
  }, function (t, e, n) {
    "use strict";
    var i = n(13)();t.exports = function (t) {
      return t !== i && null !== t;
    };
  }, function (t, e, n) {
    t.exports = n(3);
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var i,
        o = n(4),
        r = (i = o) && i.__esModule ? i : { default: i };n(26), e.default = r.default, t.exports = e.default;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
      }return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    }(),
        o = s(n(5)),
        r = s(n(21)),
        a = s(n(0));function s(t) {
      return t && t.__esModule ? t : { default: t };
    }var c = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.config = a.default.deepCopy({ overlap: !1, area: { start: 0, end: 1 }, live: !1, comments: [], direction: "r2l" }, e), this.hideArr = [], (0, o.default)(this);var n = this;if (this.config.comments.forEach(function (t) {
          t.duration = t.duration < 5e3 ? 5e3 : t.duration, t.mode || (t.mode = "scroll");
        }), !this.config.container || 1 !== this.config.container.nodeType) return this.emit("error", "container id can't be empty"), !1;if (this.container = this.config.container, this.config.containerStyle) {
          var i = this.config.containerStyle;Object.keys(i).forEach(function (t) {
            n.container.style[t] = i[t];
          });
        }this.live = this.config.live, this.player = this.config.player, this.direction = this.config.direction, a.default.addClass(this.container, "danmu"), this.bulletBtn = new r.default(this), this.emit("ready");
      }return i(t, [{ key: "start", value: function value() {
          this.bulletBtn.main.start();
        } }, { key: "pause", value: function value() {
          this.bulletBtn.main.pause();
        } }, { key: "play", value: function value() {
          this.bulletBtn.main.play();
        } }, { key: "stop", value: function value() {
          this.bulletBtn.main.stop();
        } }, { key: "sendComment", value: function value(t) {
          t && t.id && t.duration && (t.el || t.txt) && (t.duration = t.duration < 5e3 ? 5e3 : t.duration, this.bulletBtn.main.data.push(t));
        } }, { key: "setCommentID", value: function value(t, e) {
          var n = this.container.getBoundingClientRect();t && e && (this.bulletBtn.main.data.some(function (n) {
            return n.id === t && (n.id = e, !0);
          }), this.bulletBtn.main.queue.some(function (i) {
            return i.id === t && (i.id = e, i.pauseMove(n), i.startMove(n), !0);
          }));
        } }, { key: "setCommentDuration", value: function value(t, e) {
          var n = this.container.getBoundingClientRect();t && e && (e = e < 5e3 ? 5e3 : e, this.bulletBtn.main.data.some(function (n) {
            return n.id === t && (n.duration = e, !0);
          }), this.bulletBtn.main.queue.some(function (i) {
            return i.id === t && (i.duration = e, i.pauseMove(n), i.startMove(n), !0);
          }));
        } }, { key: "setAllDuration", value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll",
              e = arguments[1],
              n = this.container.getBoundingClientRect();e && (e = e < 5e3 ? 5e3 : e, this.bulletBtn.main.data.forEach(function (n) {
            t === n.mode && (n.duration = e);
          }), this.bulletBtn.main.queue.forEach(function (i) {
            t === i.mode && (i.duration = e, i.pauseMove(n), i.startMove(n));
          }));
        } }, { key: "hide", value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll";this.hideArr.indexOf(t) < 0 && this.hideArr.push(t), this.bulletBtn.main.queue.filter(function (e) {
            return t === e.mode || "color" === t && e.color;
          }).forEach(function (t) {
            return t.remove();
          });
        } }, { key: "show", value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll",
              e = this.hideArr.indexOf(t);e > -1 && this.hideArr.splice(e, 1);
        } }, { key: "setDirection", value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "r2l";this.emit("changeDirection", t);
        } }]), t;
    }();e.default = c, t.exports = e.default;
  }, function (t, e, n) {
    "use strict";
    var i,
        o,
        r,
        a,
        s,
        c,
        u,
        l = n(6),
        h = n(20),
        f = Function.prototype.apply,
        d = Function.prototype.call,
        p = Object.create,
        m = Object.defineProperty,
        g = Object.defineProperties,
        v = Object.prototype.hasOwnProperty,
        b = { configurable: !0, enumerable: !1, writable: !0 };o = function o(t, e) {
      var _n, o;return h(e), o = this, i.call(this, t, _n = function n() {
        r.call(o, t, _n), f.call(e, this, arguments);
      }), _n.__eeOnceListener__ = e, this;
    }, s = { on: i = function i(t, e) {
        var n;return h(e), v.call(this, "__ee__") ? n = this.__ee__ : (n = b.value = p(null), m(this, "__ee__", b), b.value = null), n[t] ? "object" == _typeof(n[t]) ? n[t].push(e) : n[t] = [n[t], e] : n[t] = e, this;
      }, once: o, off: r = function r(t, e) {
        var n, i, o, r;if (h(e), !v.call(this, "__ee__")) return this;if (!(n = this.__ee__)[t]) return this;if ("object" == _typeof(i = n[t])) for (r = 0; o = i[r]; ++r) {
          o !== e && o.__eeOnceListener__ !== e || (2 === i.length ? n[t] = i[r ? 0 : 1] : i.splice(r, 1));
        } else i !== e && i.__eeOnceListener__ !== e || delete n[t];return this;
      }, emit: a = function a(t) {
        var e, n, i, o, r;if (v.call(this, "__ee__") && (o = this.__ee__[t])) if ("object" == (typeof o === "undefined" ? "undefined" : _typeof(o))) {
          for (n = arguments.length, r = new Array(n - 1), e = 1; e < n; ++e) {
            r[e - 1] = arguments[e];
          }for (o = o.slice(), e = 0; i = o[e]; ++e) {
            f.call(i, this, r);
          }
        } else switch (arguments.length) {case 1:
            d.call(o, this);break;case 2:
            d.call(o, this, arguments[1]);break;case 3:
            d.call(o, this, arguments[1], arguments[2]);break;default:
            for (n = arguments.length, r = new Array(n - 1), e = 1; e < n; ++e) {
              r[e - 1] = arguments[e];
            }f.call(o, this, r);}
      } }, c = { on: l(i), once: l(o), off: l(r), emit: l(a) }, u = g({}, c), t.exports = e = function e(t) {
      return null == t ? p(u) : g(Object(t), c);
    }, e.methods = s;
  }, function (t, e, n) {
    "use strict";
    var i = n(7),
        o = n(15),
        r = n(16),
        a = n(17);(t.exports = function (t, e) {
      var n, r, s, c, u;return arguments.length < 2 || "string" != typeof t ? (c = e, e = t, t = null) : c = arguments[2], null == t ? (n = s = !0, r = !1) : (n = a.call(t, "c"), r = a.call(t, "e"), s = a.call(t, "w")), u = { value: e, configurable: n, enumerable: r, writable: s }, c ? i(o(c), u) : u;
    }).gs = function (t, e, n) {
      var s, c, u, l;return "string" != typeof t ? (u = n, n = e, e = t, t = null) : u = arguments[3], null == e ? e = void 0 : r(e) ? null == n ? n = void 0 : r(n) || (u = n, n = void 0) : (u = e, e = n = void 0), null == t ? (s = !0, c = !1) : (s = a.call(t, "c"), c = a.call(t, "e")), l = { get: e, set: n, configurable: s, enumerable: c }, u ? i(o(u), l) : l;
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = n(8)() ? Object.assign : n(9);
  }, function (t, e, n) {
    "use strict";
    t.exports = function () {
      var t,
          e = Object.assign;return "function" == typeof e && (e(t = { foo: "raz" }, { bar: "dwa" }, { trzy: "trzy" }), t.foo + t.bar + t.trzy === "razdwatrzy");
    };
  }, function (t, e, n) {
    "use strict";
    var i = n(10),
        o = n(14),
        r = Math.max;t.exports = function (t, e) {
      var n,
          a,
          s,
          c = r(arguments.length, 2);for (t = Object(o(t)), s = function s(i) {
        try {
          t[i] = e[i];
        } catch (t) {
          n || (n = t);
        }
      }, a = 1; a < c; ++a) {
        e = arguments[a], i(e).forEach(s);
      }if (void 0 !== n) throw n;return t;
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = n(11)() ? Object.keys : n(12);
  }, function (t, e, n) {
    "use strict";
    t.exports = function () {
      try {
        return Object.keys("primitive"), !0;
      } catch (t) {
        return !1;
      }
    };
  }, function (t, e, n) {
    "use strict";
    var i = n(1),
        o = Object.keys;t.exports = function (t) {
      return o(i(t) ? Object(t) : t);
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = function () {};
  }, function (t, e, n) {
    "use strict";
    var i = n(1);t.exports = function (t) {
      if (!i(t)) throw new TypeError("Cannot use null or undefined");return t;
    };
  }, function (t, e, n) {
    "use strict";
    var i = n(1),
        o = Array.prototype.forEach,
        r = Object.create;t.exports = function (t) {
      var e = r(null);return o.call(arguments, function (t) {
        i(t) && function (t, e) {
          var n;for (n in t) {
            e[n] = t[n];
          }
        }(Object(t), e);
      }), e;
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      return "function" == typeof t;
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = n(18)() ? String.prototype.contains : n(19);
  }, function (t, e, n) {
    "use strict";
    var i = "razdwatrzy";t.exports = function () {
      return "function" == typeof i.contains && !0 === i.contains("dwa") && !1 === i.contains("foo");
    };
  }, function (t, e, n) {
    "use strict";
    var i = String.prototype.indexOf;t.exports = function (t) {
      return i.call(this, t, arguments[1]) > -1;
    };
  }, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      if ("function" != typeof t) throw new TypeError(t + " is not a function");return t;
    };
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
      }return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    }(),
        o = a(n(0)),
        r = a(n(23));function a(t) {
      return t && t.__esModule ? t : { default: t };
    }var s = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.danmu = e, this.main = new r.default(e), e.config.defaultOff || this.main.start();
      }return i(t, [{ key: "createSwitch", value: function value() {
          var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];return this.switchBtn = o.default.createDom("dk-switch", '<span class="txt">弹</span>', {}, "danmu-switch " + (t ? "danmu-switch-active" : "")), this.switchBtn;
        } }]), t;
    }();e.default = s, t.exports = e.default;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
      }return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    }();var o = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e = { initDOM: function initDOM() {
            return document.createElement("div");
          }, initSize: 10 }, this.init(e);
      }return i(t, [{ key: "init", value: function value(t) {
          this.idleList = [], this.usingList = [], this._id = 0, this.options = t, this._expand(t.initSize);
        } }, { key: "use", value: function value() {
          this.idleList.length || this._expand(1);var t = this.idleList.shift();return this.usingList.push(t), t;
        } }, { key: "unuse", value: function value(t) {
          var e = this.usingList.indexOf(t);e < 0 || (this.usingList.splice(e, 1), t.innerHTML = "", t.textcontent = "", t.style = "", this.idleList.push(t));
        } }, { key: "_expand", value: function value(t) {
          for (var e = 0; e < t; e++) {
            this.idleList.push(this.options.initDOM(this._id++));
          }
        } }]), t;
    }();e.default = o, t.exports = e.default;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
      }return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    }(),
        o = s(n(24)),
        r = s(n(25)),
        a = s(n(0));function s(t) {
      return t && t.__esModule ? t : { default: t };
    }var c = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.danmu = e, this.container = e.container, this.channel = new o.default(e), this.data = [].concat(e.config.comments), this.queue = [], this.timer = null, this.retryTimer = null, this.interval = 2e3, this.status = "idle", e.on("bullet_remove", this.updateQueue.bind(this));var n = this;this.danmu.on("changeDirection", function (t) {
          n.danmu.direction = t;
        });
      }return i(t, [{ key: "updateQueue", value: function value(t) {
          var e = this;e.queue.some(function (n, i) {
            return n.id === t.bullet.id && (e.queue.splice(i, 1), !0);
          });
        } }, { key: "init", value: function value(t, e) {
          e || (e = this), e.data.sort(function (t, e) {
            return t.start - e.start;
          }), e.retryTimer || (e.retryTimer = setInterval(function () {
            e.readData(), e.dataHandle();
          }, e.interval - 1e3));
        } }, { key: "start", value: function value() {
          this.status = "playing", this.queue = [], this.container.innerHTML = "", this.channel.resetWithCb(this.init, this);
        } }, { key: "stop", value: function value() {
          this.status = "closed", clearInterval(this.retryTimer), this.retryTimer = null, this.channel.reset(), this.queue = [], this.container.innerHTML = "";
        } }, { key: "play", value: function value() {
          this.status = "playing";var t = this.channel.channels,
              e = this.danmu.container.getBoundingClientRect();t && t.length > 0 && ["scroll", "top", "bottom"].forEach(function (n) {
            for (var i = 0; i < t.length; i++) {
              t[i].queue[n].forEach(function (t) {
                t.resized || (t.startMove(e), t.resized = !0);
              });
            }for (var o = 0; o < t.length; o++) {
              t[o].queue[n].forEach(function (t) {
                t.resized = !1;
              });
            }
          });
        } }, { key: "pause", value: function value() {
          this.status = "paused";var t = this.channel.channels,
              e = this.danmu.container.getBoundingClientRect();t && t.length > 0 && ["scroll", "top", "bottom"].forEach(function (n) {
            for (var i = 0; i < t.length; i++) {
              t[i].queue[n].forEach(function (t) {
                t.pauseMove(e);
              });
            }
          });
        } }, { key: "dataHandle", value: function value() {
          var t = this;"paused" !== this.status && "closed" !== this.status && t.queue.length && t.queue.forEach(function (e) {
            "waiting" !== e.status && "paused" !== e.status || e.startMove(t.channel.containerPos);
          });
        } }, { key: "readData", value: function value() {
          var t = this,
              e = this.danmu,
              n = 0;e.player && e.player.currentTime && (n = a.default.formatTime(e.player.currentTime));var i = void 0,
              o = t.interval,
              s = t.channel,
              c = void 0;e.player ? (c = t.data.filter(function (e) {
            return !e.start && t.danmu.hideArr.indexOf(e.mode) < 0 && (!e.color || t.danmu.hideArr.indexOf("color") < 0) && (e.start = n), t.danmu.hideArr.indexOf(e.mode) < 0 && (!e.color || t.danmu.hideArr.indexOf("color") < 0) && e.start - o <= n && n <= e.start + o;
          }), e.live && (t.data = t.data.filter(function (t) {
            return t.start || (t.start = n), t.start > n - 3 * o;
          }))) : c = t.data.filter(function (e) {
            return t.danmu.hideArr.indexOf(e.mode) < 0 && (!e.color || t.danmu.hideArr.indexOf("color") < 0);
          }), c.length > 0 && c.forEach(function (n) {
            (i = new r.default(e, n)).attach(), s.addBullet(i).result ? (t.queue.push(i), i.topInit()) : i.detach();
          });
        } }]), t;
    }();e.default = c, t.exports = e.default;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
      }return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    }();var o = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.danmu = e, this.reset();var n = this;this.danmu.on("bullet_remove", function (t) {
          n.removeBullet(t.bullet);
        }), this.direction = e.direction, this.danmu.on("changeDirection", function (t) {
          n.direction = t;
        }), this.containerPos = this.danmu.container.getBoundingClientRect(), this.containerWidth = this.containerPos.width, this.containerHeight = this.containerPos.height, this.containerLeft = this.containerPos.left, this.containerRight = this.containerPos.right, this.danmu.bulletResizeTimer = setInterval(function () {
          n.containerPos = n.danmu.container.getBoundingClientRect(), (Math.abs(n.containerPos.width - n.containerWidth) >= 2 || Math.abs(n.containerPos.height - n.containerHeight) >= 2 || Math.abs(n.containerPos.left - n.containerLeft) >= 2 || Math.abs(n.containerPos.right - n.containerRight) >= 2) && (n.containerWidth = n.containerPos.width, n.containerHeight = n.containerPos.height, n.containerLeft = n.containerPos.left, n.containerRight = n.containerPos.right, n.resize(!0));
        }, 50);
      }return i(t, [{ key: "resize", value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              e = this.danmu.container,
              n = this;setTimeout(function () {
            n.danmu.bulletBtn.main.data && n.danmu.bulletBtn.main.data.forEach(function (t) {
              t.bookChannelId && delete t.bookChannelId;
            });var i = e.getBoundingClientRect();n.width = i.width, n.height = i.height, n.danmu.config.area && n.danmu.config.area.start >= 0 && n.danmu.config.area.end >= n.danmu.config.area.start && ("b2t" === n.direction ? n.width = n.width * (n.danmu.config.area.end - n.danmu.config.area.start) : n.height = n.height * (n.danmu.config.area.end - n.danmu.config.area.start)), n.container = e;var o = /mobile/gi.test(navigator.userAgent) ? 10 : 12,
                r = void 0;r = "b2t" === n.direction ? Math.floor(n.width / o) : Math.floor(n.height / o);for (var a = [], s = 0; s < r; s++) {
              a[s] = { id: s, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} };
            }if (n.channels && n.channels.length <= a.length) {
              for (var c = function c(e) {
                a[e] = { id: e, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} }, ["scroll", "top"].forEach(function (i) {
                  n.channels[e].queue[i].forEach(function (o) {
                    o.el && (a[e].queue[i].push(o), o.resized || (o.pauseMove(n.containerPos, t), o.startMove(n.containerPos), o.resized = !0));
                  });
                }), n.channels[e].queue.bottom.forEach(function (i) {
                  if (i.el) {
                    if (a[e + a.length - n.channels.length].queue.bottom.push(i), i.channel_id[0] + i.channel_id[1] - 1 === e) {
                      var r = [].concat(i.channel_id);i.channel_id = [r[0] - n.channels.length + a.length, r[1]], i.top = i.channel_id[0] * o, n.danmu.config.area && n.danmu.config.area.start && (i.top += n.containerHeight * n.danmu.config.area.start), i.topInit();
                    }i.resized || (i.pauseMove(n.containerPos, t), i.startMove(n.containerPos), i.resized = !0);
                  }
                });
              }, u = 0; u < n.channels.length; u++) {
                c(u);
              }for (var l = function l(t) {
                ["scroll", "top", "bottom"].forEach(function (e) {
                  a[t].queue[e].forEach(function (t) {
                    t.resized = !1;
                  });
                });
              }, h = 0; h < a.length; h++) {
                l(h);
              }n.channels = a, "b2t" === n.direction ? n.channelWidth = o : n.channelHeight = o;
            } else if (n.channels && n.channels.length > a.length) {
              for (var f = function f(e) {
                a[e] = { id: e, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} }, ["scroll", "top", "bottom"].forEach(function (i) {
                  if ("top" === i && e > Math.floor(a.length / 2)) ;else if ("bottom" === i && e <= Math.floor(a.length / 2)) ;else {
                    var r = "bottom" === i ? e - a.length + n.channels.length : e;n.channels[r].queue[i].forEach(function (s, c) {
                      if (s.el) {
                        if (a[e].queue[i].push(s), "bottom" === i && s.channel_id[0] + s.channel_id[1] - 1 === r) {
                          var u = [].concat(s.channel_id);s.channel_id = [u[0] - n.channels.length + a.length, u[1]], s.top = s.channel_id[0] * o, n.danmu.config.area && n.danmu.config.area.start && (s.top += n.containerHeight * n.danmu.config.area.start), s.topInit();
                        }s.resized || (s.pauseMove(n.containerPos, t), s.startMove(n.containerPos), s.resized = !0);
                      }n.channels[r].queue[i].splice(c, 1);
                    });
                  }
                });
              }, d = 0; d < a.length; d++) {
                f(d);
              }for (var p = function p(t) {
                ["scroll", "top", "bottom"].forEach(function (e) {
                  n.channels[t].queue[e].forEach(function (t) {
                    t.pauseMove(n.containerPos), t.remove();
                  });
                });
              }, m = a.length; m < n.channels.length; m++) {
                p(m);
              }for (var g = function g(t) {
                ["scroll", "top", "bottom"].forEach(function (e) {
                  a[t].queue[e].forEach(function (t) {
                    t.resized = !1;
                  });
                });
              }, v = 0; v < a.length; v++) {
                g(v);
              }n.channels = a, "b2t" === n.direction ? n.channelWidth = o : n.channelHeight = o;
            }
          }, 10);
        } }, { key: "addBullet", value: function value(t) {
          var e = this.danmu,
              n = this.channels,
              i = void 0,
              o = void 0,
              r = void 0;if ("b2t" === this.direction ? (o = this.channelWidth, r = Math.ceil(t.width / o)) : (i = this.channelHeight, r = Math.ceil(t.height / i)), r > n.length) return { result: !1, message: "exceed channels.length, occupy=" + r + ",channelsSize=" + n.length };for (var a = !0, s = void 0, c = -1, u = 0, l = n.length; u < l; u++) {
            if (n[u].queue[t.mode].some(function (e) {
              return e.id === t.id;
            })) return { result: !1, message: "exsited, channelOrder=" + u + ",danmu_id=" + t.id };
          }if ("scroll" === t.mode) for (var h = 0, f = n.length - r; h <= f; h++) {
            a = !0;for (var d = h; d < h + r; d++) {
              if ((s = n[d]).operating.scroll) {
                a = !1;break;
              }if ((s.bookId.scroll || t.prior) && s.bookId.scroll !== t.id) {
                a = !1;break;
              }s.operating.scroll = !0;var p = s.queue.scroll[0];if (p) {
                var m = p.el.getBoundingClientRect();if ("b2t" === this.direction) {
                  if (m.bottom > this.containerPos.bottom) {
                    a = !1, s.operating.scroll = !1;break;
                  }
                } else if (m.right > this.containerPos.right) {
                  a = !1, s.operating.scroll = !1;break;
                }var g,
                    v = void 0,
                    b = void 0,
                    y = void 0,
                    w = void 0;if ("b2t" === this.direction ? (b = (m.top - this.containerPos.top + m.height) / (v = (this.containerPos.height + m.height) / p.duration), y = this.containerPos.height, w = (this.containerPos.height + t.height) / t.duration) : (b = (m.left - this.containerPos.left + m.width) / (v = (this.containerPos.width + m.width) / p.duration), y = this.containerPos.width, w = (this.containerPos.width + t.width) / t.duration), g = y / w, e.config.bOffset || (e.config.bOffset = 0), v < w && b + e.config.bOffset > g) {
                  a = !1, s.operating.scroll = !1;break;
                }
              }s.operating.scroll = !1;
            }if (a) {
              c = h;break;
            }
          } else if ("top" === t.mode) for (var x = 0, k = n.length - r; x <= k; x++) {
            a = !0;for (var _ = x; _ < x + r; _++) {
              if (_ > Math.floor(n.length / 2)) {
                a = !1;break;
              }if ((s = n[_]).operating[t.mode]) {
                a = !1;break;
              }if ((s.bookId[t.mode] || t.prior) && s.bookId[t.mode] !== t.id) {
                a = !1;break;
              }if (s.operating[t.mode] = !0, s.queue[t.mode].length > 0) {
                a = !1, s.operating[t.mode] = !1;break;
              }s.operating[t.mode] = !1;
            }if (a) {
              c = x;break;
            }
          } else if ("bottom" === t.mode) for (var M = n.length - r; M >= 0; M--) {
            a = !0;for (var O = M; O < M + r; O++) {
              if (O <= Math.floor(n.length / 2)) {
                a = !1;break;
              }if ((s = n[O]).operating[t.mode]) {
                a = !1;break;
              }if ((s.bookId[t.mode] || t.prior) && s.bookId[t.mode] !== t.id) {
                a = !1;break;
              }if (s.operating[t.mode] = !0, s.queue[t.mode].length > 0) {
                a = !1, s.operating[t.mode] = !1;break;
              }s.operating[t.mode] = !1;
            }if (a) {
              c = M;break;
            }
          }if (-1 !== c) {
            for (var C = c, j = c + r; C < j; C++) {
              (s = n[C]).operating[t.mode] = !0, s.queue[t.mode].unshift(t), t.prior && delete s.bookId[t.mode], s.operating[t.mode] = !1;
            }if (t.prior) delete t.bookChannelId, e.bulletBtn.main.data.some(function (e) {
              return e.id === t.id && (delete e.bookChannelId, !0);
            });return t.channel_id = [c, r], "b2t" === this.direction ? (t.top = c * o, this.danmu.config.area && this.danmu.config.area.start && (t.top += this.containerWidth * this.danmu.config.area.start)) : (t.top = c * i, this.danmu.config.area && this.danmu.config.area.start && (t.top += this.containerHeight * this.danmu.config.area.start)), { result: t, message: "success" };
          }if (t.prior) if (t.bookChannelId) {
            e.bulletBtn.main.data.some(function (e) {
              return e.id === t.id && (e.start += 2e3, !0);
            });
          } else {
            c = -1;for (var E = 0, P = n.length - r; E <= P; E++) {
              a = !0;for (var T = E; T < E + r; T++) {
                if (n[T].bookId[t.mode]) {
                  a = !1;break;
                }
              }if (a) {
                c = E;break;
              }
            }if (-1 !== c) {
              for (var B = c; B < c + r; B++) {
                n[B].bookId[t.mode] = t.id;
              }e.bulletBtn.main.data.some(function (e) {
                return e.id === t.id && (e.start += 2e3, e.bookChannelId = [c, r], !0);
              });
            }
          }return { result: !1, message: "no surplus will right" };
        } }, { key: "removeBullet", value: function value(t) {
          for (var e = this.channels, n = t.channel_id, i = void 0, o = n[0], r = n[0] + n[1]; o < r; o++) {
            if (i = e[o]) {
              i.operating[t.mode] = !0;var a = -1;i.queue[t.mode].some(function (e, n) {
                return e.id === t.id && (a = n, !0);
              }), a > -1 && i.queue[t.mode].splice(a, 1), i.operating[t.mode] = !1;
            }
          }
        } }, { key: "resetArea", value: function value() {
          var t = this.danmu.container,
              e = this,
              n = t.getBoundingClientRect();e.width = n.width, e.height = n.height, e.danmu.config.area && e.danmu.config.area.start >= 0 && e.danmu.config.area.end >= e.danmu.config.area.start && ("b2t" === e.direction ? e.width = e.width * (e.danmu.config.area.end - e.danmu.config.area.start) : e.height = e.height * (e.danmu.config.area.end - e.danmu.config.area.start)), e.container = t;var i = /mobile/gi.test(navigator.userAgent) ? 10 : 12,
              o = void 0;o = "b2t" === e.direction ? Math.floor(e.width / i) : Math.floor(e.height / i);for (var r = [], a = 0; a < o; a++) {
            r[a] = { id: a, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} };
          }if (e.channels && e.channels.length <= r.length) {
            for (var s = function s(t) {
              r[t] = { id: t, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} }, ["scroll", "top"].forEach(function (n) {
                e.channels[t].queue[n].forEach(function (i) {
                  i.el && (r[t].queue[n].push(i), i.resized || (i.pauseMove(e.containerPos, !1), i.startMove(e.containerPos), i.resized = !0));
                });
              }), e.channels[t].queue.bottom.forEach(function (n) {
                if (n.el) {
                  if (r[t + r.length - e.channels.length].queue.bottom.push(n), n.channel_id[0] + n.channel_id[1] - 1 === t) {
                    var o = [].concat(n.channel_id);n.channel_id = [o[0] - e.channels.length + r.length, o[1]], n.top = n.channel_id[0] * i, e.danmu.config.area && e.danmu.config.area.start && (n.top += e.containerHeight * e.danmu.config.area.start), n.topInit();
                  }n.resized || (n.pauseMove(e.containerPos, !1), n.startMove(e.containerPos), n.resized = !0);
                }
              });
            }, c = 0; c < e.channels.length; c++) {
              s(c);
            }for (var u = function u(t) {
              ["scroll", "top", "bottom"].forEach(function (e) {
                r[t].queue[e].forEach(function (t) {
                  t.resized = !1;
                });
              });
            }, l = 0; l < r.length; l++) {
              u(l);
            }e.channels = r, "b2t" === e.direction ? e.channelWidth = i : e.channelHeight = i;
          } else if (e.channels && e.channels.length > r.length) {
            for (var h = function h(t) {
              r[t] = { id: t, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} }, ["scroll", "top", "bottom"].forEach(function (n) {
                if ("top" === n && t > Math.floor(r.length / 2)) ;else if ("bottom" === n && t <= Math.floor(r.length / 2)) ;else {
                  var o = "bottom" === n ? t - r.length + e.channels.length : t;e.channels[o].queue[n].forEach(function (a, s) {
                    if (a.el) {
                      if (r[t].queue[n].push(a), "bottom" === n && a.channel_id[0] + a.channel_id[1] - 1 === o) {
                        var c = [].concat(a.channel_id);a.channel_id = [c[0] - e.channels.length + r.length, c[1]], a.top = a.channel_id[0] * i, e.danmu.config.area && e.danmu.config.area.start && (a.top += e.containerHeight * e.danmu.config.area.start), a.topInit();
                      }a.resized || (a.pauseMove(e.containerPos, !1), a.startMove(e.containerPos), a.resized = !0);
                    }e.channels[o].queue[n].splice(s, 1);
                  });
                }
              });
            }, f = 0; f < r.length; f++) {
              h(f);
            }for (var d = function d(t) {
              ["scroll", "top", "bottom"].forEach(function (e) {
                r[t].queue[e].forEach(function (t) {
                  t.resized = !1;
                });
              });
            }, p = 0; p < r.length; p++) {
              d(p);
            }e.channels = r, "b2t" === e.direction ? e.channelWidth = i : e.channelHeight = i;
          }
        } }, { key: "reset", value: function value() {
          var t = this.danmu.container,
              e = this;e.channels && e.channels.length > 0 && ["scroll", "top", "bottom"].forEach(function (t) {
            for (var n = 0; n < e.channels.length; n++) {
              e.channels[n].queue[t].forEach(function (t) {
                t.pauseMove(e.containerPos), t.remove();
              });
            }
          }), setTimeout(function () {
            var n = t.getBoundingClientRect();e.width = n.width, e.height = n.height, e.danmu.config.area && e.danmu.config.area.start >= 0 && e.danmu.config.area.end >= e.danmu.config.area.start && ("b2t" === e.direction ? e.width = e.width * (e.danmu.config.area.end - e.danmu.config.area.start) : e.height = e.height * (e.danmu.config.area.end - e.danmu.config.area.start)), e.container = t;var i = /mobile/gi.test(navigator.userAgent) ? 10 : 12,
                o = void 0;o = "b2t" === e.direction ? Math.floor(e.width / i) : Math.floor(e.height / i);for (var r = [], a = 0; a < o; a++) {
              r[a] = { id: a, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} };
            }e.channels = r, "b2t" === e.direction ? e.channelWidth = i : e.channelHeight = i;
          }, 200);
        } }, { key: "resetWithCb", value: function value(t, e) {
          var n = this.danmu.container,
              i = this;i.channels && i.channels.length > 0 && ["scroll", "top", "bottom"].forEach(function (t) {
            for (var e = 0; e < i.channels.length; e++) {
              i.channels[e].queue[t].forEach(function (t) {
                t.pauseMove(i.containerPos), t.remove();
              });
            }
          });var o = n.getBoundingClientRect();i.width = o.width, i.height = o.height, i.danmu.config.area && i.danmu.config.area.start >= 0 && i.danmu.config.area.end >= i.danmu.config.area.start && ("b2t" === i.direction ? i.width = i.width * (i.danmu.config.area.end - i.danmu.config.area.start) : i.height = i.height * (i.danmu.config.area.end - i.danmu.config.area.start)), i.container = n;var r = /mobile/gi.test(navigator.userAgent) ? 10 : 12,
              a = void 0;a = "b2t" === i.direction ? Math.floor(i.width / r) : Math.floor(i.height / r);for (var s = [], c = 0; c < a; c++) {
            s[c] = { id: c, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} };
          }i.channels = s, i.channelHeight = r, t && t(!0, e);
        } }]), t;
    }();e.default = o, t.exports = e.default;
  }, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var i,
        o = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
        }
      }return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    }(),
        r = n(0),
        a = (i = r) && i.__esModule ? i : { default: i };var s = function () {
      function t(e, n) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.danmu = e, this.duration = n.duration, this.id = n.id, this.container = e.container, this.start = n.start, this.prior = n.prior, this.color = n.color, this.bookChannelId = n.bookChannelId, this.direction = e.direction;var i = this;this.danmu.on("changeDirection", function (t) {
          i.direction = t;
        });var o = void 0;if (this.domObj = a.default.domObj, n.el && 1 === n.el.nodeType) (o = this.domObj.use()).appendChild(a.default.copyDom(n.el));else if ((o = this.domObj.use()).textContent = n.txt, n.style) {
          var r = n.style;Object.keys(r).forEach(function (t) {
            o.style[t] = r[t];
          });
        }"top" === n.mode || "bottom" === n.mode ? this.mode = n.mode : this.mode = "scroll", this.el = o, this.status = "waiting";var s = this.container.getBoundingClientRect();this.el.style.left = s.width + "px";
      }return o(t, [{ key: "attach", value: function value() {
          this.container.appendChild(this.el), this.elPos = this.el.getBoundingClientRect(), "b2t" === this.direction ? (this.width = this.elPos.height, this.height = this.elPos.width) : (this.width = this.elPos.width, this.height = this.elPos.height);
        } }, { key: "detach", value: function value() {
          this.container && this.el && (this.domObj.unuse(this.el), this.container.removeChild(this.el));var t = this;this.danmu.off("changeDirection", function (e) {
            t.direction = e;
          }), this.el = null;
        } }, { key: "topInit", value: function value() {
          if ("b2t" === this.direction) {
            var t = this.container.getBoundingClientRect();this.el.style.transformOrigin = "left top", this.el.style.transform = "translateX(-" + this.top + "px) translateY(" + t.height + "px) translateZ(0px) rotate(90deg)", this.el.style.transition = "transform 0s linear 0s";
          } else this.el.style.top = this.top + "px";
        } }, { key: "pauseMove", value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];if ("paused" !== this.status && (this.status = "paused", clearTimeout(this.removeTimer), this.el)) if (this.el.style.willChange = "auto", "scroll" === this.mode) {
            if (e) {
              var n = (new Date().getTime() - this.moveTime) / 1e3 * this.moveV,
                  i = 0;i = this.moveMoreS - n >= 0 ? "b2t" === this.direction ? (this.moveMoreS - n) / this.moveContainerHeight * t.height : (this.moveMoreS - n) / this.moveContainerWidth * t.width : this.moveMoreS - n, "b2t" === this.direction ? this.el.style.transform = "translateX(-" + this.top + "px) translateY(" + i + "px) translateZ(0px) rotate(90deg)" : this.el.style.left = i + "px";
            } else "b2t" === this.direction ? this.el.style.transform = "translateX(-" + this.top + "px) translateY(" + (this.el.getBoundingClientRect().top - t.top) + "px) translateZ(0px) rotate(90deg)" : this.el.style.left = this.el.getBoundingClientRect().left - t.left + "px";"b2t" === this.direction ? this.el.style.transition = "transform 0s linear 0s" : (this.el.style.transform = "translateX(0px) translateY(0px) translateZ(0px)", this.el.style.transition = "transform 0s linear 0s");
          } else this.pastDuration && this.startTime ? this.pastDuration = this.pastDuration + new Date().getTime() - this.startTime : this.pastDuration = 1;
        } }, { key: "startMove", value: function value(t) {
          var e = this;if (this.el && "start" !== this.status) if (this.status = "start", this.el.style.willChange = "transform", "scroll" === this.mode) {
            if ("b2t" === this.direction) {
              this.moveV = (t.height + this.height) / this.duration * 1e3;var n = (e.el.getBoundingClientRect().bottom - t.top) / this.moveV;this.el.style.transition = "transform " + n + "s linear 0s", setTimeout(function () {
                e.el && (e.el.style.transform = "translateX(-" + e.top + "px) translateY(-" + e.height + "px) translateZ(0px) rotate(90deg)", e.moveTime = new Date().getTime(), e.moveMoreS = e.el.getBoundingClientRect().top - t.top, e.moveContainerHeight = t.height, e.removeTimer = setTimeout(r, 1e3 * n));
              }, 20);
            } else {
              this.moveV = (t.width + this.width) / this.duration * 1e3;var i = (e.el.getBoundingClientRect().right - t.left) / this.moveV;this.el.style.transition = "transform " + i + "s linear 0s", setTimeout(function () {
                e.el && (e.el.style.transform = "translateX(-" + (e.el.getBoundingClientRect().right - t.left) + "px) translateY(0px) translateZ(0px)", e.moveTime = new Date().getTime(), e.moveMoreS = e.el.getBoundingClientRect().left - t.left, e.moveContainerWidth = t.width, e.removeTimer = setTimeout(r, 1e3 * i));
              }, 20);
            }
          } else {
            this.el.style.left = "50%", this.el.style.margin = "0 0 0 -" + this.width / 2 + "px", this.pastDuration || (this.pastDuration = 1);var o = this.duration >= this.pastDuration ? this.duration - this.pastDuration : 0;this.removeTimer = setTimeout(r, o), this.startTime = new Date().getTime();
          }function r() {
            if (e.el) if ("scroll" === e.mode) {
              var t = e.danmu.container.getBoundingClientRect(),
                  n = e.el.getBoundingClientRect();"b2t" === e.direction ? n && n.bottom <= t.top + 100 ? (e.status = "end", e.remove()) : (e.pauseMove(t), e.startMove(t)) : n && n.right <= t.left + 100 ? (e.status = "end", e.remove()) : (e.pauseMove(t), e.startMove(t));
            } else e.status = "end", e.remove();
          }
        } }, { key: "remove", value: function value() {
          var t = this;(this.removeTimer && clearTimeout(this.removeTimer), t.el && t.el.parentNode) && (t.el.style.willChange = "auto", this.danmu.off("changeDirection", function (e) {
            t.direction = e;
          }), this.domObj.unuse(t.el), t.el.parentNode.removeChild(t.el), t.el = null, t.danmu.emit("bullet_remove", { bullet: t }));
        } }]), t;
    }();e.default = s, t.exports = e.default;
  }, function (t, e, n) {
    var i = n(27);"string" == typeof i && (i = [[t.i, i, ""]]);var o = { hmr: !0, transform: void 0, insertInto: void 0 };n(29)(i, o);i.locals && (t.exports = i.locals);
  }, function (t, e, n) {
    (t.exports = n(28)(!1)).push([t.i, ".danmu{overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.danmu>*{position:absolute;white-space:nowrap}.danmu-switch{width:32px;height:20px;border-radius:100px;background-color:#ccc;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;cursor:pointer;position:relative;text-align:center;margin:10px auto}.danmu-switch.danmu-switch-active{padding-left:12px;background-color:#f85959}.danmu-switch span.txt{width:20px;height:20px;line-height:20px;text-align:center;display:block;border-radius:100px;background-color:#ffffff;-webkit-box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);font-family:PingFangSC;font-size:10px;font-weight:500;color:#f44336}\n", ""]);
  }, function (t, e) {
    t.exports = function (t) {
      var e = [];return e.toString = function () {
        return this.map(function (e) {
          var n = function (t, e) {
            var n = t[1] || "",
                i = t[3];if (!i) return n;if (e && "function" == typeof btoa) {
              var o = (a = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                  r = i.sources.map(function (t) {
                return "/*# sourceURL=" + i.sourceRoot + t + " */";
              });return [n].concat(r).concat([o]).join("\n");
            }var a;return [n].join("\n");
          }(e, t);return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
        }).join("");
      }, e.i = function (t, n) {
        "string" == typeof t && (t = [[null, t, ""]]);for (var i = {}, o = 0; o < this.length; o++) {
          var r = this[o][0];"number" == typeof r && (i[r] = !0);
        }for (o = 0; o < t.length; o++) {
          var a = t[o];"number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a));
        }
      }, e;
    };
  }, function (t, e, n) {
    var i,
        o,
        r = {},
        a = (i = function i() {
      return window && document && document.all && !window.atob;
    }, function () {
      return void 0 === o && (o = i.apply(this, arguments)), o;
    }),
        s = function (t) {
      var e = {};return function (t) {
        if ("function" == typeof t) return t();if (void 0 === e[t]) {
          var n = function (t) {
            return document.querySelector(t);
          }.call(this, t);if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
            n = n.contentDocument.head;
          } catch (t) {
            n = null;
          }e[t] = n;
        }return e[t];
      };
    }(),
        c = null,
        u = 0,
        l = [],
        h = n(30);function f(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n],
            o = r[i.id];if (o) {
          o.refs++;for (var a = 0; a < o.parts.length; a++) {
            o.parts[a](i.parts[a]);
          }for (; a < i.parts.length; a++) {
            o.parts.push(b(i.parts[a], e));
          }
        } else {
          var s = [];for (a = 0; a < i.parts.length; a++) {
            s.push(b(i.parts[a], e));
          }r[i.id] = { id: i.id, refs: 1, parts: s };
        }
      }
    }function d(t, e) {
      for (var n = [], i = {}, o = 0; o < t.length; o++) {
        var r = t[o],
            a = e.base ? r[0] + e.base : r[0],
            s = { css: r[1], media: r[2], sourceMap: r[3] };i[a] ? i[a].parts.push(s) : n.push(i[a] = { id: a, parts: [s] });
      }return n;
    }function p(t, e) {
      var n = s(t.insertInto);if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i = l[l.length - 1];if ("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), l.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
        if ("object" != _typeof(t.insertAt) || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o = s(t.insertInto + " " + t.insertAt.before);n.insertBefore(e, o);
      }
    }function m(t) {
      if (null === t.parentNode) return !1;t.parentNode.removeChild(t);var e = l.indexOf(t);e >= 0 && l.splice(e, 1);
    }function g(t) {
      var e = document.createElement("style");return void 0 === t.attrs.type && (t.attrs.type = "text/css"), v(e, t.attrs), p(t, e), e;
    }function v(t, e) {
      Object.keys(e).forEach(function (n) {
        t.setAttribute(n, e[n]);
      });
    }function b(t, e) {
      var n, i, o, r;if (e.transform && t.css) {
        if (!(r = e.transform(t.css))) return function () {};t.css = r;
      }if (e.singleton) {
        var a = u++;n = c || (c = g(e)), i = x.bind(null, n, a, !1), o = x.bind(null, n, a, !0);
      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
        var e = document.createElement("link");return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", v(e, t.attrs), p(t, e), e;
      }(e), i = function (t, e, n) {
        var i = n.css,
            o = n.sourceMap,
            r = void 0 === e.convertToAbsoluteUrls && o;(e.convertToAbsoluteUrls || r) && (i = h(i));o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");var a = new Blob([i], { type: "text/css" }),
            s = t.href;t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s);
      }.bind(null, n, e), o = function o() {
        m(n), n.href && URL.revokeObjectURL(n.href);
      }) : (n = g(e), i = function (t, e) {
        var n = e.css,
            i = e.media;i && t.setAttribute("media", i);if (t.styleSheet) t.styleSheet.cssText = n;else {
          for (; t.firstChild;) {
            t.removeChild(t.firstChild);
          }t.appendChild(document.createTextNode(n));
        }
      }.bind(null, n), o = function o() {
        m(n);
      });return i(t), function (e) {
        if (e) {
          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;i(t = e);
        } else o();
      };
    }t.exports = function (t, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != (typeof document === "undefined" ? "undefined" : _typeof(document))) throw new Error("The style-loader cannot be used in a non-browser environment");(e = e || {}).attrs = "object" == _typeof(e.attrs) ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");var n = d(t, e);return f(n, e), function (t) {
        for (var i = [], o = 0; o < n.length; o++) {
          var a = n[o];(s = r[a.id]).refs--, i.push(s);
        }t && f(d(t, e), e);for (o = 0; o < i.length; o++) {
          var s;if (0 === (s = i[o]).refs) {
            for (var c = 0; c < s.parts.length; c++) {
              s.parts[c]();
            }delete r[s.id];
          }
        }
      };
    };var y,
        w = (y = [], function (t, e) {
      return y[t] = e, y.filter(Boolean).join("\n");
    });function x(t, e, n, i) {
      var o = n ? "" : i.css;if (t.styleSheet) t.styleSheet.cssText = w(e, o);else {
        var r = document.createTextNode(o),
            a = t.childNodes;a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(r, a[e]) : t.appendChild(r);
      }
    }
  }, function (t, e) {
    t.exports = function (t) {
      var e = "undefined" != typeof window && window.location;if (!e) throw new Error("fixUrls requires window.location");if (!t || "string" != typeof t) return t;var n = e.protocol + "//" + e.host,
          i = n + e.pathname.replace(/\/[^\/]*$/, "/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
        var o,
            r = e.trim().replace(/^"(.*)"$/, function (t, e) {
          return e;
        }).replace(/^'(.*)'$/, function (t, e) {
          return e;
        });return (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (o = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : i + r.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
        );
      });
    };
  }]);
});
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(97)(module)))

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 40\" width=\"40\" height=\"40\">\n  <path fill=\"#f85959\" transform=\"scale(0.8 0.8)\" d=\"M36.5,18.73a1.19,1.19,0,0,0,1-1.14V16.33a1.2,1.2,0,0,0-1-1.13l-.61-.08a1.75,1.75,0,0,1-1.3-.86l-.21-.36-.2-.36A1.72,1.72,0,0,1,34,12l.23-.58a1.18,1.18,0,0,0-.5-1.42l-1.1-.62a1.18,1.18,0,0,0-1.47.3l-.39.51a1.82,1.82,0,0,1-1.41.72c-.44,0-1.88-.27-2.22-.7l-.39-.49a1.18,1.18,0,0,0-1.48-.28l-1.09.64a1.19,1.19,0,0,0-.47,1.43l.25.59a1.87,1.87,0,0,1-.08,1.58c-.26.37-1.17,1.5-1.71,1.58l-.63.09a1.19,1.19,0,0,0-1,1.14l0,1.27a1.17,1.17,0,0,0,1,1.12l.61.08a1.74,1.74,0,0,1,1.3.87l.21.36.2.35A1.69,1.69,0,0,1,24,22.08l-.23.59a1.19,1.19,0,0,0,.5,1.42l1.1.62a1.19,1.19,0,0,0,1.48-.31l.38-.5a1.83,1.83,0,0,1,1.41-.72c.44,0,1.88.25,2.22.69l.39.49a1.18,1.18,0,0,0,1.48.28L33.86,24a1.19,1.19,0,0,0,.47-1.43L34.09,22a1.84,1.84,0,0,1,.07-1.58c.26-.37,1.17-1.5,1.72-1.58ZM31,18.94a2.76,2.76,0,0,1-4.65-1.2A2.71,2.71,0,0,1,27,15.13a2.76,2.76,0,0,1,4.64,1.2A2.7,2.7,0,0,1,31,18.94Z\"/>\n  <path fill=\"#f85959\" transform=\"scale(0.8 0.8)\" d=\"M32,0H3.59A3.59,3.59,0,0,0,0,3.59v17A3.59,3.59,0,0,0,3.59,24.2H19.72a12.59,12.59,0,0,1-.81-1.2A11.73,11.73,0,0,1,35.54,7.28V3.59A3.59,3.59,0,0,0,32,0ZM13,14.18H4.29a1.52,1.52,0,0,1,0-3H13a1.52,1.52,0,0,1,0,3ZM16.45,8H4.29a1.51,1.51,0,0,1,0-3H16.45a1.51,1.51,0,1,1,0,3Z\"/>\n</svg>\n");

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_pip = function s_pip() {
  var player = this;
  var util = _player2.default.util;
  if (!player.config.pip) {
    return;
  }
  var pip = player.lang.PIP;
  var btn = util.createDom('xg-pip', '<p class="name"><span>' + pip + '</span></p>', { tabindex: 9 }, 'xgplayer-pip');

  player.once('ready', function () {
    player.controls.appendChild(btn);
  });

  ['click', 'touchend'].forEach(function (item) {
    btn.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('pipBtnClick');
    });
  });
};

_player2.default.install('s_pip', s_pip);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _playNext = __webpack_require__(101);

var _playNext2 = _interopRequireDefault(_playNext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_playNext = function s_playNext() {
  var player = this;
  var util = _player2.default.util;
  var nextBtn = player.config.playNext;
  if (!nextBtn || !nextBtn.urlList) {
    return;
  }
  var btn = util.createDom('xg-playnext', '<xg-icon class="xgplayer-icon">' + _playNext2.default + '</xg-icon>', {}, 'xgplayer-playnext');
  var tipsText = player.lang.PLAYNEXT_TIPS;
  var tips = util.createDom('xg-tips', '<span class="xgplayer-tip-playnext">' + tipsText + '</span>', {}, 'xgplayer-tips');
  btn.appendChild(tips);
  player.once('ready', function () {
    player.controls.appendChild(btn);
  });

  ['click', 'touchend'].forEach(function (item) {
    btn.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('playNextBtnClick');
    });
  });
};

_player2.default.install('s_playNext', s_playNext);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\">\n  <path transform=\"scale(0.038 0.028)\" d=\"M800 380v768h-128v-352l-320 320v-704l320 320v-352z\"></path>\n</svg>\n");

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _rotate = __webpack_require__(103);

var _rotate2 = _interopRequireDefault(_rotate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_rotate = function s_rotate() {
  var player = this;
  var util = _player2.default.util;
  if (!player.config.rotate) {
    return;
  }
  var btn = util.createDom('xg-rotate', '<xg-icon class="xgplayer-icon">' + _rotate2.default + '</xg-icon>', {}, 'xgplayer-rotate');

  var tipsText = player.lang.ROTATE_TIPS;
  var tips = util.createDom('xg-tips', '<span class="xgplayer-tip-rotate">' + tipsText + '</span>', {}, 'xgplayer-tips');
  btn.appendChild(tips);
  player.once('ready', function () {
    player.controls.appendChild(btn);
  });

  ['click', 'touchend'].forEach(function (item) {
    btn.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('rotateBtnClick');
    });
  });
};

_player2.default.install('s_rotate', s_rotate);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 40 40\" fill=\"none\">\n  <g clip-path=\"url(#clip0)\">\n    <path transform=\"scale(1.5 1.5)\" d=\"M11.6665 9.16663H4.1665C2.78579 9.16663 1.6665 10.2859 1.6665 11.6666V15.8333C1.6665 17.214 2.78579 18.3333 4.1665 18.3333H11.6665C13.0472 18.3333 14.1665 17.214 14.1665 15.8333V11.6666C14.1665 10.2859 13.0472 9.16663 11.6665 9.16663Z\" fill=\"white\"/>\n    <path transform=\"scale(1.5 1.5)\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.88148 4.06298C3.75371 4.21005 3.67667 4.40231 3.67749 4.61242C3.67847 4.87253 3.79852 5.10435 3.98581 5.25646L6.99111 8.05895C7.32771 8.37283 7.85502 8.35443 8.16891 8.01782C8.48279 7.68122 8.46437 7.15391 8.12778 6.84003L6.62061 5.43457L9.8198 5.4224C9.82848 5.42239 9.8372 5.42221 9.84591 5.4219C10.9714 5.38233 12.0885 5.6285 13.0931 6.13744C14.0976 6.64635 14.957 7.40148 15.5908 8.33234C16.2246 9.2632 16.6122 10.3394 16.7177 11.4606C16.823 12.5819 16.6427 13.7115 16.1934 14.7442C16.0098 15.1661 16.203 15.6571 16.6251 15.8408C17.0471 16.0243 17.5381 15.8311 17.7216 15.4091C18.2833 14.1183 18.5087 12.7063 18.3771 11.3047C18.2453 9.90318 17.7607 8.55792 16.9684 7.39433C16.1761 6.23073 15.1021 5.28683 13.8463 4.65065C12.5946 4.01651 11.203 3.70872 9.80072 3.75583L6.43415 3.76862L7.96326 2.12885C8.27715 1.79225 8.25872 1.26494 7.92213 0.951061C7.58553 0.63718 7.05822 0.655585 6.74433 0.99219L3.90268 4.0395C3.89545 4.04724 3.88841 4.05509 3.88154 4.06303L3.88148 4.06298Z\" fill=\"white\"/>\n  </g>\n  <defs>\n    <clipPath id=\"clip0\">\n      <rect width=\"40\" height=\"40\" fill=\"white\"/>\n    </clipPath>\n  </defs>\n</svg>\n");

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _reload = __webpack_require__(105);

var _reload2 = _interopRequireDefault(_reload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_reload = function s_reload() {
  var player = this;
  var util = _player2.default.util;
  if (!player.config.reload) {
    return;
  }
  var btn = util.createDom('xg-reload', '<xg-icon class="xgplayer-icon">' + _reload2.default + '</xg-icon>', {}, 'xgplayer-reload');

  var tipsText = player.lang.RELOAD_TIPS;
  var tips = util.createDom('xg-tips', '<span class="xgplayer-tip-reload">' + tipsText + '</span>', {}, 'xgplayer-tips');
  btn.appendChild(tips);
  player.once('ready', function () {
    player.controls.appendChild(btn);
  });

  ['click', 'touchend'].forEach(function (item) {
    btn.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('reloadBtnClick');
    });
  });
};

_player2.default.install('s_reload', s_reload);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 28 28\">\n    <path fill=\"#FFF\" fill-opacity=\"1\" fill-rule=\"nonzero\" d=\"M18.17 19.988a7.182 7.182 0 0 1-4.256 1.318 7.806 7.806 0 0 1-.595-.03c-.08-.008-.16-.021-.242-.031a8.004 8.004 0 0 1-.458-.071c-.094-.018-.185-.042-.276-.063a7.743 7.743 0 0 1-.439-.113c-.068-.022-.136-.047-.205-.07a7.03 7.03 0 0 1-.492-.181c-.037-.015-.072-.032-.108-.049a7.295 7.295 0 0 1-.554-.269l-.025-.012a7.347 7.347 0 0 1-2.111-1.753c-.03-.036-.057-.074-.086-.11a7.305 7.305 0 0 1-1.594-4.557h1.686a.123.123 0 0 0 .108-.064.119.119 0 0 0-.006-.125L5.684 9.532a.123.123 0 0 0-.103-.056.123.123 0 0 0-.102.056l-2.834 4.276a.121.121 0 0 0-.005.125c.022.04.064.064.107.064h1.687c0 2.025.627 3.902 1.693 5.454.013.021.022.044.037.066.11.159.233.305.352.455.043.057.085.116.13.171.175.213.36.413.55.61.02.018.036.038.054.055a9.447 9.447 0 0 0 2.91 1.996c.058.026.115.054.175.079.202.084.41.158.619.228.098.034.196.069.296.1.183.054.37.1.558.145.125.029.249.06.376.085.052.01.102.027.155.035.177.032.355.05.533.071.064.007.128.018.19.026.32.03.639.052.956.052a9.46 9.46 0 0 0 5.47-1.746 1.16 1.16 0 0 0 .282-1.608 1.143 1.143 0 0 0-1.6-.283zm5.397-5.991a9.604 9.604 0 0 0-1.685-5.441c-.016-.027-.026-.054-.043-.078-.132-.19-.276-.366-.419-.543-.017-.022-.032-.044-.05-.065a9.467 9.467 0 0 0-3.571-2.7l-.114-.051a11.2 11.2 0 0 0-.673-.248c-.082-.027-.163-.057-.247-.082a9.188 9.188 0 0 0-.6-.156c-.113-.026-.224-.055-.337-.077-.057-.011-.109-.028-.164-.037-.151-.027-.304-.039-.455-.058-.104-.013-.208-.03-.313-.04a10.05 10.05 0 0 0-.759-.039c-.045 0-.09-.007-.136-.007l-.025.003a9.45 9.45 0 0 0-5.46 1.737 1.16 1.16 0 0 0-.284 1.608c.363.523 1.08.65 1.6.284a7.182 7.182 0 0 1 4.222-1.32c.217.002.429.013.639.033.065.007.129.017.193.025.173.021.344.046.513.08.075.014.149.033.221.05.166.037.331.077.494.127l.152.051c.185.061.366.127.545.201l.054.025a7.308 7.308 0 0 1 2.741 2.067l.013.018a7.302 7.302 0 0 1 1.652 4.633h-1.686a.123.123 0 0 0-.108.064.12.12 0 0 0 .006.124l2.834 4.277c.022.033.06.054.103.054.042 0 .08-.021.102-.054l2.833-4.277a.12.12 0 0 0 .005-.124.123.123 0 0 0-.108-.064h-1.685z\"/>\n</svg>\n");

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_screenShot = function s_screenShot() {
  var player = this;
  var util = _player2.default.util;
  if (!player.config.screenShot) {
    return;
  }
  var screenShotText = player.lang.SCREENSHOT;
  var btn = util.createDom('xg-screenshot', '<p class="name"><span>' + screenShotText + '</span></p>', { tabindex: 11 }, 'xgplayer-screenshot');
  player.once('ready', function () {
    player.controls.appendChild(btn);
  });

  ['click', 'touchend'].forEach(function (item) {
    btn.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      player.emit('screenShotBtnClick');
    });
  });
};

_player2.default.install('s_screenShot', s_screenShot);

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_textTrack = function s_textTrack() {
  if (navigator.userAgent.indexOf('Chrome') < 0) {
    return;
  }
  var player = this;
  var root = player.root;
  var util = _player2.default.util;
  var sniffer = _player2.default.sniffer;
  var controls = player.controls;
  var container = util.createDom('xg-texttrack', '', { tabindex: 7 }, 'xgplayer-texttrack');
  var list = player.config.textTrack;
  if (list && Array.isArray(list) && list.length > 0) {
    util.addClass(player.root, 'xgplayer-is-texttrack');
    player.on('canplay', function () {
      var _this = this;

      var tmp = ['<ul>'];
      tmp.push('<li class=\'' + (this.textTrackShowDefault ? '' : 'selected') + '\'}\'>\u5173\u95ED</li>');
      list.forEach(function (item) {
        tmp.push('<li class=\'' + (item.default && _this.textTrackShowDefault ? 'selected' : '') + '\'>' + item.label + '</li>');
      });
      var controlText = player.lang.TEXTTRACK;
      tmp.push('</ul><p class="name">' + controlText + '</p>');

      var urlInRoot = root.querySelector('.xgplayer-texttrack');
      if (urlInRoot) {
        urlInRoot.innerHTML = tmp.join('');
        var cur = urlInRoot.querySelector('.name');
        if (!player.config.textTrackActive || player.config.textTrackActive === 'hover') {
          cur.addEventListener('mouseenter', function (e) {
            e.preventDefault();
            e.stopPropagation();
            util.addClass(root, 'xgplayer-texttrack-active');
            urlInRoot.focus();
          });
        }
      } else {
        container.innerHTML = tmp.join('');
        var _cur = container.querySelector('.name');
        if (!player.config.textTrackActive || player.config.textTrackActive === 'hover') {
          _cur.addEventListener('mouseenter', function (e) {
            e.preventDefault();
            e.stopPropagation();
            util.addClass(player.root, 'xgplayer-texttrack-active');
            container.focus();
          });
        }
        player.controls.appendChild(container);
      }
    });
  };

  ['touchend', 'click'].forEach(function (item) {
    container.addEventListener(item, function (e) {
      e.preventDefault();
      e.stopPropagation();
      var li = e.target || e.srcElement;
      if (li && li.tagName.toLocaleLowerCase() === 'li') {
        Array.prototype.forEach.call(li.parentNode.childNodes, function (item) {
          util.removeClass(item, 'selected');
        });
        util.addClass(li, 'selected');
        var trackDoms = player.root.getElementsByTagName('Track');
        if (li.innerHTML === '关闭') {
          trackDoms[0].track.mode = 'hidden';
          util.removeClass(player.root, 'xgplayer-texttrack-active');
        } else {
          util.addClass(player.root, 'xgplayer-texttrack-active');
          trackDoms[0].track.mode = 'showing';

          list.some(function (item) {
            if (item.label === li.innerHTML) {
              trackDoms[0].src = item.src;
              if (item.kind) {
                trackDoms[0].kind = item.kind;
              }
              trackDoms[0].label = item.label;
              if (item.srclang) {
                trackDoms[0].srclang = item.srclang;
              }
              return true;
            }
          });
          player.emit('textTrackChange', li.innerHTML);
        }
      } else if (player.config.textTrackActive === 'click' && li && (li.tagName.toLocaleLowerCase() === 'p' || li.tagName.toLocaleLowerCase() === 'em')) {
        util.addClass(player.root, 'xgplayer-texttrack-active');
        container.focus();
      }
    }, false);
  });

  container.addEventListener('mouseleave', function (e) {
    e.preventDefault();
    e.stopPropagation();
    util.removeClass(player.root, 'xgplayer-texttrack-active');
  });
};

_player2.default.install('s_textTrack', s_textTrack);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s_error = function s_error() {
  var player = this;
  var root = player.root;
  var util = _player2.default.util;

  var error = util.createDom('xg-error', '<span class="xgplayer-error-text">请<span class="xgplayer-error-refresh">刷新</span>试试</span>', {}, 'xgplayer-error');
  player.once('ready', function () {
    root.appendChild(error);
  });

  var text = error.querySelector('.xgplayer-error-text');
  var refresh = null;

  function onError() {
    // player.controls.style.display = 'none'
    // if (player.error) {
    //   text.innerHTML = player.error
    // } else {
    // if (player.config.lang && player.config.lang === 'zh-cn') {
    //   text.innerHTML = `${player.lang.ERROR}，请<span class="xgplayer-error-refresh">刷新</span>试试`
    // } else {
    //   text.innerHTML = `${player.lang.ERROR}，please try to <span class="xgplayer-error-refresh">refresh</span>`
    // }
    // }
    util.addClass(player.root, 'xgplayer-is-error');
    refresh = error.querySelector('.xgplayer-error-refresh');
    if (refresh) {
      ['touchend', 'click'].forEach(function (item) {
        refresh.addEventListener(item, function (e) {
          e.preventDefault();
          e.stopPropagation();
          player.once('playing', function () {
            util.removeClass(player.root, 'xgplayer-is-error');
          });
          player.src = player.config.url;
        });
      });
    }
  }
  player.on('error', onError);
  function onDestroy() {
    player.off('error', onError);
    player.off('destroy', onDestroy);
  }
  player.once('destroy', onDestroy);
};

_player2.default.install('s_error', s_error);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var smemoryPlay = function smemoryPlay() {
  var player = this;
  var util = _player2.default.util;
  var lastPlayTime = player.config.lastPlayTime || 0;
  var lastPlayTimeHideDelay = player.config.lastPlayTimeHideDelay || 3;
  var dom = null;
  if (lastPlayTime <= 0) {
    return;
  }
  dom = util.createDom('xg-memoryplay', '<div class="xgplayer-memoryplay-spot"><div class="xgplayer-progress-tip">\u60A8\u4E0A\u6B21\u89C2\u770B\u5230 <span class="xgplayer-lasttime">' + util.format(lastPlayTime) + '</span> \uFF0C\u4E3A\u60A8\u81EA\u52A8\u7EED\u64AD <span class="btn-close"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span></div></div>', {}, 'xgplayer-memoryplay');
  dom.addEventListener('mouseover', function (e) {
    e.stopPropagation();
  });
  var removeFunc = function removeFunc() {
    dom && dom.parentNode.removeChild(dom);
    dom = null;
  };
  dom.querySelector('.xgplayer-progress-tip .btn-close').addEventListener('click', removeFunc);
  var handlePlay = function handlePlay() {
    player.root.appendChild(dom);
    player.emit('memoryPlayStart', lastPlayTime);
    if (lastPlayTimeHideDelay > 0) {
      setTimeout(function () {
        removeFunc();
      }, lastPlayTimeHideDelay * 1000);
    }
  };
  player.once('play', handlePlay);
  player.once('ended', removeFunc);
};

_player2.default.install('s_memoryPlay', smemoryPlay);

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue":
/*!***********************************************************************!*\
  !*** ./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_vue_vue_type_template_id_b5d5edc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom.vue?vue&type=template&id=b5d5edc0& */ "./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=template&id=b5d5edc0&");
/* harmony import */ var _custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom.vue?vue&type=script&lang=js& */ "./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _custom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _vue_loader_15_9_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_15_9_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _custom_vue_vue_type_template_id_b5d5edc0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _custom_vue_vue_type_template_id_b5d5edc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/_zx-player@0.9.0@zx-player/components/custom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_babel_loader_8_1_0_babel_loader_lib_index_js_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../_babel-loader@8.1.0@babel-loader/lib!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./custom.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_babel_loader_8_1_0_babel_loader_lib_index_js_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../_vue-style-loader@4.1.2@vue-style-loader??ref--8-oneOf-1-0!../../_css-loader@3.4.2@css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../_vue-loader@15.9.1@vue-loader/lib/loaders/stylePostLoader.js!../../_postcss-loader@3.0.0@postcss-loader/src??ref--8-oneOf-1-2!../../_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./custom.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js?!./node_modules/_css-loader@3.4.2@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_css_loader_3_4_2_css_loader_dist_cjs_js_ref_8_oneOf_1_1_vue_loader_15_9_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=template&id=b5d5edc0&":
/*!******************************************************************************************************!*\
  !*** ./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=template&id=b5d5edc0& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7ebb1f94_vue_loader_template_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_template_id_b5d5edc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7ebb1f94-vue-loader-template"}!../../_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./custom.vue?vue&type=template&id=b5d5edc0& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7ebb1f94-vue-loader-template\"}!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue?vue&type=template&id=b5d5edc0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7ebb1f94_vue_loader_template_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_template_id_b5d5edc0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7ebb1f94_vue_loader_template_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_template_id_b5d5edc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/_zx-player@0.9.0@zx-player/components/export.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_zx-player@0.9.0@zx-player/components/export.js ***!
  \**********************************************************************/
/*! exports provided: mp4, hls, flv, custom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mp4 */ "./node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mp4", function() { return _mp4__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _hls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hls */ "./node_modules/_zx-player@0.9.0@zx-player/components/hls.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hls", function() { return _hls__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _flv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flv */ "./node_modules/_zx-player@0.9.0@zx-player/components/flv.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flv", function() { return _flv__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom */ "./node_modules/_zx-player@0.9.0@zx-player/components/custom.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "custom", function() { return _custom__WEBPACK_IMPORTED_MODULE_3__["default"]; });






if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.component('zx-player-mp4', _mp4__WEBPACK_IMPORTED_MODULE_0__["default"])
	window.Vue.component('zx-player-hls', _hls__WEBPACK_IMPORTED_MODULE_1__["default"])
	window.Vue.component('zx-player-flv', _flv__WEBPACK_IMPORTED_MODULE_2__["default"])
	window.Vue.component('zx-player-custom', _custom__WEBPACK_IMPORTED_MODULE_3__["default"])
}


/***/ }),

/***/ "./node_modules/_zx-player@0.9.0@zx-player/components/flv.vue":
/*!********************************************************************!*\
  !*** ./node_modules/_zx-player@0.9.0@zx-player/components/flv.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flv_vue_vue_type_template_id_12be1ad1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flv.vue?vue&type=template&id=12be1ad1& */ "./node_modules/_zx-player@0.9.0@zx-player/components/flv.vue?vue&type=template&id=12be1ad1&");
/* harmony import */ var _flv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flv.vue?vue&type=script&lang=js& */ "./node_modules/_zx-player@0.9.0@zx-player/components/flv.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_15_9_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_15_9_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _flv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _flv_vue_vue_type_template_id_12be1ad1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _flv_vue_vue_type_template_id_12be1ad1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/_zx-player@0.9.0@zx-player/components/flv.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/_zx-player@0.9.0@zx-player/components/flv.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_zx-player@0.9.0@zx-player/components/flv.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_babel_loader_8_1_0_babel_loader_lib_index_js_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_flv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../_babel-loader@8.1.0@babel-loader/lib!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./flv.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/flv.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_babel_loader_8_1_0_babel_loader_lib_index_js_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_flv_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/_zx-player@0.9.0@zx-player/components/flv.vue?vue&type=template&id=12be1ad1&":
/*!***************************************************************************************************!*\
  !*** ./node_modules/_zx-player@0.9.0@zx-player/components/flv.vue?vue&type=template&id=12be1ad1& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7ebb1f94_vue_loader_template_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_flv_vue_vue_type_template_id_12be1ad1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7ebb1f94-vue-loader-template"}!../../_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./flv.vue?vue&type=template&id=12be1ad1& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7ebb1f94-vue-loader-template\"}!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/flv.vue?vue&type=template&id=12be1ad1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7ebb1f94_vue_loader_template_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_flv_vue_vue_type_template_id_12be1ad1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7ebb1f94_vue_loader_template_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_flv_vue_vue_type_template_id_12be1ad1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/_zx-player@0.9.0@zx-player/components/hls.vue":
/*!********************************************************************!*\
  !*** ./node_modules/_zx-player@0.9.0@zx-player/components/hls.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hls_vue_vue_type_template_id_7c604ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hls.vue?vue&type=template&id=7c604ad0& */ "./node_modules/_zx-player@0.9.0@zx-player/components/hls.vue?vue&type=template&id=7c604ad0&");
/* harmony import */ var _hls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hls.vue?vue&type=script&lang=js& */ "./node_modules/_zx-player@0.9.0@zx-player/components/hls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_15_9_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_15_9_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _hls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _hls_vue_vue_type_template_id_7c604ad0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _hls_vue_vue_type_template_id_7c604ad0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/_zx-player@0.9.0@zx-player/components/hls.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/_zx-player@0.9.0@zx-player/components/hls.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_zx-player@0.9.0@zx-player/components/hls.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_babel_loader_8_1_0_babel_loader_lib_index_js_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_hls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../_babel-loader@8.1.0@babel-loader/lib!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./hls.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/hls.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_babel_loader_8_1_0_babel_loader_lib_index_js_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_hls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/_zx-player@0.9.0@zx-player/components/hls.vue?vue&type=template&id=7c604ad0&":
/*!***************************************************************************************************!*\
  !*** ./node_modules/_zx-player@0.9.0@zx-player/components/hls.vue?vue&type=template&id=7c604ad0& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7ebb1f94_vue_loader_template_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_hls_vue_vue_type_template_id_7c604ad0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7ebb1f94-vue-loader-template"}!../../_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./hls.vue?vue&type=template&id=7c604ad0& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7ebb1f94-vue-loader-template\"}!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/hls.vue?vue&type=template&id=7c604ad0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7ebb1f94_vue_loader_template_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_hls_vue_vue_type_template_id_7c604ad0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7ebb1f94_vue_loader_template_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_hls_vue_vue_type_template_id_7c604ad0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue":
/*!********************************************************************!*\
  !*** ./node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mp4_vue_vue_type_template_id_ef89e65c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mp4.vue?vue&type=template&id=ef89e65c& */ "./node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue?vue&type=template&id=ef89e65c&");
/* harmony import */ var _mp4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mp4.vue?vue&type=script&lang=js& */ "./node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_15_9_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_15_9_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mp4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mp4_vue_vue_type_template_id_ef89e65c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mp4_vue_vue_type_template_id_ef89e65c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_babel_loader_8_1_0_babel_loader_lib_index_js_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_mp4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--12-0!../../_babel-loader@8.1.0@babel-loader/lib!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./mp4.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_12_0_babel_loader_8_1_0_babel_loader_lib_index_js_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_mp4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue?vue&type=template&id=ef89e65c&":
/*!***************************************************************************************************!*\
  !*** ./node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue?vue&type=template&id=ef89e65c& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7ebb1f94_vue_loader_template_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_mp4_vue_vue_type_template_id_ef89e65c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7ebb1f94-vue-loader-template"}!../../_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--0-0!../../_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./mp4.vue?vue&type=template&id=ef89e65c& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"7ebb1f94-vue-loader-template\"}!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./node_modules/_zx-player@0.9.0@zx-player/components/mp4.vue?vue&type=template&id=ef89e65c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7ebb1f94_vue_loader_template_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_mp4_vue_vue_type_template_id_ef89e65c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_7ebb1f94_vue_loader_template_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_0_0_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_mp4_vue_vue_type_template_id_ef89e65c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=21.js.map