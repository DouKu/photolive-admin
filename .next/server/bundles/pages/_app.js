module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(18);
var app__default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(14);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "mobx"
var external__mobx_ = __webpack_require__(15);
var external__mobx__default = /*#__PURE__*/__webpack_require__.n(external__mobx_);

// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(19);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// CONCATENATED MODULE: ./lib/http.js

external__axios__default.a.interceptors.request.use(function (config) {
  config.baseURL = '/api';
  config.headers = {
    authorization: "Bearer ".concat(localStorage.getItem('token'))
  };
  return config;
}, function (error) {
  return Promise.reject(error);
});
external__axios__default.a.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.error(error);
  return Promise.reject(error);
});
/* harmony default export */ var http = (external__axios__default.a);
// CONCATENATED MODULE: ./api/auth.js


var auth_signUp = function signUp(_ref) {
  var data = _ref.data;
  return http.request({
    url: '/v1/register',
    method: 'post',
    data: data
  });
};

var auth_signIn = function signIn(_ref2) {
  var data = _ref2.data;
  return http.request({
    url: '/v1/login/account',
    method: 'post',
    data: data
  });
};

/* harmony default export */ var auth = ({
  signUp: auth_signUp,
  signIn: auth_signIn
});
// CONCATENATED MODULE: ./store/auth.js


var _desc, _value, _class, _descriptor, _descriptor2;

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}



var auth_Auth = (_class =
/*#__PURE__*/
function () {
  function Auth() {
    _classCallCheck(this, Auth);

    _initDefineProp(this, "token", _descriptor, this);

    _initDefineProp(this, "user", _descriptor2, this);
  }

  _createClass(Auth, [{
    key: "signIn",
    // 登录
    value: function () {
      var _signIn = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(data) {
        var _this = this;

        var _ref, res;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return auth.signIn({
                  data: data
                });

              case 2:
                _ref = _context.sent;
                res = _ref.data;
                Object(external__mobx_["runInAction"])(function () {
                  _this.setAuth(res.token, res.user);

                  _this.saveAuth();
                });
                return _context.abrupt("return", res);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function signIn(_x) {
        return _signIn.apply(this, arguments);
      };
    }() // 注册

  }, {
    key: "signUp",
    value: function signUp(data) {
      return auth.signUp({
        data: data
      });
    } // 退出

  }, {
    key: "signOut",
    value: function signOut() {}
  }, {
    key: "saveAuth",
    value: function saveAuth() {
      localStorage.setItem('token', this.token);
      localStorage.setItem('user', JSON.stringify(this.user));
    }
  }, {
    key: "setAuth",
    value: function setAuth(token, user) {
      this.token = token;
      this.user = user;
    }
  }]);

  return Auth;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "token", [external__mobx_["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "user", [external__mobx_["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _applyDecoratedDescriptor(_class.prototype, "signIn", [external__mobx_["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "signIn"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "signUp", [external__mobx_["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "signUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "signOut", [external__mobx_["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "signOut"), _class.prototype)), _class);
/* harmony default export */ var store_auth = (auth_Auth);
// CONCATENATED MODULE: ./store/index.js
var store__desc, store__value, store__class, store__descriptor, store__descriptor2, _descriptor3;

function store__initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function store__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function store__applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function store__initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}



var store = null;
var store_Store = (store__class = function Store(isServer, lastUpdate) {
  var _this = this;

  store__classCallCheck(this, Store);

  store__initDefineProp(this, "lastUpdate", store__descriptor, this);

  store__initDefineProp(this, "light", store__descriptor2, this);

  store__initDefineProp(this, "start", _descriptor3, this);

  this.stop = function () {
    return clearInterval(_this.timer);
  };

  this.auth = new store_auth();
  this.lastUpdate = lastUpdate;
}, (store__descriptor = store__applyDecoratedDescriptor(store__class.prototype, "lastUpdate", [external__mobx_["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), store__descriptor2 = store__applyDecoratedDescriptor(store__class.prototype, "light", [external__mobx_["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = store__applyDecoratedDescriptor(store__class.prototype, "start", [external__mobx_["action"]], {
  enumerable: true,
  initializer: function initializer() {
    var _this2 = this;

    return function () {
      _this2.timer = setInterval(function () {
        _this2.lastUpdate = Date.now();
        _this2.light = true;
      }, 1000);
    };
  }
})), store__class);
function initializeStore(isServer) {
  var lastUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();

  if (isServer) {
    return new store_Store(isServer, lastUpdate);
  } else {
    if (store === null) {
      store = new store_Store(isServer, lastUpdate);
    }

    return store;
  }
}
// CONCATENATED MODULE: ./lib/with-mobx-store.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function with_mobx_store__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function with_mobx_store__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function with_mobx_store__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function with_mobx_store__createClass(Constructor, protoProps, staticProps) { if (protoProps) with_mobx_store__defineProperties(Constructor.prototype, protoProps); if (staticProps) with_mobx_store__defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var with_mobx_store_isServer = typeof window === 'undefined';
var __NEXT_MOBX_STORE__ = '__NEXT_MOBX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (with_mobx_store_isServer) {
    return initializeStore(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_MOBX_STORE__]) {
    window[__NEXT_MOBX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_MOBX_STORE__];
}

/* harmony default export */ var with_mobx_store = (function (App) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(AppWithMobx, _React$Component);

      with_mobx_store__createClass(AppWithMobx, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = with_mobx_store__asyncToGenerator(
          /*#__PURE__*/
          regenerator__default.a.mark(function _callee(appContext) {
            var mobxStore, appProps;
            return regenerator__default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Get or Create the store with `undefined` as initialState
                    // This allows you to set a custom default initialState
                    mobxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

                    appContext.ctx.mobxStore = mobxStore;
                    appProps = {};

                    if (!(typeof App.getInitialProps === 'function')) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 6;
                    return App.getInitialProps.call(App, appContext);

                  case 6:
                    appProps = _context.sent;

                  case 7:
                    return _context.abrupt("return", _objectSpread({}, appProps, {
                      initialMobxState: mobxStore
                    }));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          };
        }()
      }]);

      function AppWithMobx(props) {
        var _this;

        with_mobx_store__classCallCheck(this, AppWithMobx);

        _this = _possibleConstructorReturn(this, (AppWithMobx.__proto__ || Object.getPrototypeOf(AppWithMobx)).call(this, props));
        _this.mobxStore = getOrCreateStore(props.initialMobxState);
        return _this;
      }

      with_mobx_store__createClass(AppWithMobx, [{
        key: "render",
        value: function render() {
          return external__react__default.a.createElement(App, _extends({}, this.props, {
            mobxStore: this.mobxStore
          }));
        }
      }]);

      return AppWithMobx;
    }(external__react__default.a.Component)
  );
});
// EXTERNAL MODULE: external "mobx-react"
var external__mobx_react_ = __webpack_require__(2);
var external__mobx_react__default = /*#__PURE__*/__webpack_require__.n(external__mobx_react_);

// CONCATENATED MODULE: ./pages/_app.js
function _app__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app__typeof = function _typeof(obj) { return typeof obj; }; } else { _app__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app__typeof(obj); }

function _app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app__createClass(Constructor, protoProps, staticProps) { if (protoProps) _app__defineProperties(Constructor.prototype, protoProps); if (staticProps) _app__defineProperties(Constructor, staticProps); return Constructor; }

function _app__possibleConstructorReturn(self, call) { if (call && (_app__typeof(call) === "object" || typeof call === "function")) { return call; } return _app__assertThisInitialized(self); }

function _app__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _app_PhotoLive =
/*#__PURE__*/
function (_App) {
  _app__inherits(PhotoLive, _App);

  function PhotoLive() {
    _app__classCallCheck(this, PhotoLive);

    return _app__possibleConstructorReturn(this, (PhotoLive.__proto__ || Object.getPrototypeOf(PhotoLive)).apply(this, arguments));
  }

  _app__createClass(PhotoLive, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          mobxStore = _props.mobxStore;
      return external__react__default.a.createElement(app_["Container"], null, external__react__default.a.createElement(external__mobx_react_["Provider"], {
        store: mobxStore
      }, external__react__default.a.createElement(Component, pageProps)));
    }
  }]);

  return PhotoLive;
}(app__default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (with_mobx_store(_app_PhotoLive));

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);