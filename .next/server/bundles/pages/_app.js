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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
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

module.exports = require("next/router");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(22);
var app__default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(13);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "mobx"
var external__mobx_ = __webpack_require__(14);
var external__mobx__default = /*#__PURE__*/__webpack_require__.n(external__mobx_);

// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(23);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(2);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

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
  var status = error.response.status;

  if (status === 401) {
    return router__default.a.replace('/auth/signin');
  }

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
// CONCATENATED MODULE: ./api/album.js


var album_getAlbums = function getAlbums() {
  return http.request({
    url: '/auth/album/brief',
    method: 'get'
  });
};

/* harmony default export */ var album = ({
  getAlbums: album_getAlbums
});
// CONCATENATED MODULE: ./store/album.js


var album__desc, album__value, album__class, album__descriptor, album__descriptor2;

function album__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function album__initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function album__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function album__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function album__createClass(Constructor, protoProps, staticProps) { if (protoProps) album__defineProperties(Constructor.prototype, protoProps); if (staticProps) album__defineProperties(Constructor, staticProps); return Constructor; }

function album__applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
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

function album__initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}



var album_Album = (album__class =
/*#__PURE__*/
function () {
  function Album() {
    album__classCallCheck(this, Album);

    album__initDefineProp(this, "albums", album__descriptor, this);

    album__initDefineProp(this, "count", album__descriptor2, this);
  }

  album__createClass(Album, [{
    key: "getAlbums",
    value: function () {
      var _getAlbums = album__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee() {
        var _this = this;

        var _ref, res;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return album.getAlbums();

              case 2:
                _ref = _context.sent;
                res = _ref.data;
                Object(external__mobx_["runInAction"])(function () {
                  _this.albums = res.data;
                  _this.count = res.count;
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getAlbums() {
        return _getAlbums.apply(this, arguments);
      };
    }()
  }]);

  return Album;
}(), (album__descriptor = album__applyDecoratedDescriptor(album__class.prototype, "albums", [external__mobx_["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), album__descriptor2 = album__applyDecoratedDescriptor(album__class.prototype, "count", [external__mobx_["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), album__applyDecoratedDescriptor(album__class.prototype, "getAlbums", [external__mobx_["action"]], Object.getOwnPropertyDescriptor(album__class.prototype, "getAlbums"), album__class.prototype)), album__class);
/* harmony default export */ var store_album = (album_Album);
// CONCATENATED MODULE: ./api/base-config.js


var base_config_putBaseConfig = function putBaseConfig(_ref) {
  var data = _ref.data,
      params = _ref.params;
  return http.request({
    url: "/auth/album/cfg/base/".concat(params.albumId),
    method: 'put',
    data: data
  });
};

var base_config_getBaseConfig = function getBaseConfig(_ref2) {
  var params = _ref2.params;
  return http.request({
    url: "/auth/album/cfg/base/".concat(params.albumId),
    method: 'get'
  });
};

/* harmony default export */ var base_config = ({
  getBaseConfig: base_config_getBaseConfig,
  putBaseConfig: base_config_putBaseConfig
});
// CONCATENATED MODULE: ./lib/enums.js
var styleMap = ['一行三图', '瀑布流', '一行两图'];
// CONCATENATED MODULE: ./store/base-config.js


var base_config__desc, base_config__value, base_config__class, base_config__descriptor;

function base_config__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function base_config__initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function base_config__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function base_config__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function base_config__createClass(Constructor, protoProps, staticProps) { if (protoProps) base_config__defineProperties(Constructor.prototype, protoProps); if (staticProps) base_config__defineProperties(Constructor, staticProps); return Constructor; }

function base_config__applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
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

function base_config__initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}




var base_config_BaseConfig = (base_config__class =
/*#__PURE__*/
function () {
  function BaseConfig() {
    base_config__classCallCheck(this, BaseConfig);

    base_config__initDefineProp(this, "base", base_config__descriptor, this);
  }

  base_config__createClass(BaseConfig, [{
    key: "putBaseConfig",
    value: function () {
      var _putBaseConfig = base_config__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(data) {
        var _ref, res;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return base_config.putBaseConfig(data);

              case 2:
                _ref = _context.sent;
                res = _ref.data;
                return _context.abrupt("return", res);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function putBaseConfig(_x) {
        return _putBaseConfig.apply(this, arguments);
      };
    }()
  }, {
    key: "getBaseConfig",
    value: function () {
      var _getBaseConfig = base_config__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee2(data) {
        var _this = this;

        var _ref2, res;

        return regenerator__default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return base_config.getBaseConfig(data);

              case 2:
                _ref2 = _context2.sent;
                res = _ref2.data;
                Object(external__mobx_["runInAction"])(function () {
                  _this.base = res.data;
                });
                return _context2.abrupt("return", res);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getBaseConfig(_x2) {
        return _getBaseConfig.apply(this, arguments);
      };
    }()
  }, {
    key: "defaultLabel",
    get: function get() {
      return styleMap[this.base.themeId - 1];
    }
  }]);

  return BaseConfig;
}(), (base_config__descriptor = base_config__applyDecoratedDescriptor(base_config__class.prototype, "base", [external__mobx_["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return {
      id: 0,
      themeId: 1,
      name: '',
      activityTime: Date.now(),
      location: ''
    };
  }
}), base_config__applyDecoratedDescriptor(base_config__class.prototype, "defaultLabel", [external__mobx_["computed"]], Object.getOwnPropertyDescriptor(base_config__class.prototype, "defaultLabel"), base_config__class.prototype), base_config__applyDecoratedDescriptor(base_config__class.prototype, "putBaseConfig", [external__mobx_["action"]], Object.getOwnPropertyDescriptor(base_config__class.prototype, "putBaseConfig"), base_config__class.prototype), base_config__applyDecoratedDescriptor(base_config__class.prototype, "getBaseConfig", [external__mobx_["action"]], Object.getOwnPropertyDescriptor(base_config__class.prototype, "getBaseConfig"), base_config__class.prototype)), base_config__class);
/* harmony default export */ var store_base_config = (base_config_BaseConfig);
// CONCATENATED MODULE: ./api/tag-config.js


var tag_config_getTagConfig = function getTagConfig(_ref) {
  var params = _ref.params;
  return http.request({
    url: "/auth/album/cfg/tag/".concat(params.albumId),
    method: 'get'
  });
};

var tag_config_postTagConfig = function postTagConfig(_ref2) {
  var params = _ref2.params,
      data = _ref2.data;
  return http.request({
    url: "/auth/album/cfg/tag/add/".concat(params.albumId),
    method: 'put',
    data: data
  });
};

var tag_config_deleteTagConfig = function deleteTagConfig(_ref3) {
  var params = _ref3.params;
  return http.request({
    url: "/auth/album/cfg/tag/".concat(params.tagId),
    method: 'delete'
  });
};

/* harmony default export */ var tag_config = ({
  getTagConfig: tag_config_getTagConfig,
  postTagConfig: tag_config_postTagConfig,
  deleteTagConfig: tag_config_deleteTagConfig
});
// CONCATENATED MODULE: ./store/tag-config.js


var tag_config__desc, tag_config__value, tag_config__class, tag_config__descriptor;

function tag_config__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function tag_config__initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function tag_config__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tag_config__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tag_config__createClass(Constructor, protoProps, staticProps) { if (protoProps) tag_config__defineProperties(Constructor.prototype, protoProps); if (staticProps) tag_config__defineProperties(Constructor, staticProps); return Constructor; }

function tag_config__applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
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

function tag_config__initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}



var tag_config_TagConfig = (tag_config__class =
/*#__PURE__*/
function () {
  function TagConfig() {
    tag_config__classCallCheck(this, TagConfig);

    tag_config__initDefineProp(this, "tags", tag_config__descriptor, this);
  }

  tag_config__createClass(TagConfig, [{
    key: "getTagConfig",
    value: function () {
      var _getTagConfig = tag_config__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(data) {
        var _this = this;

        var _ref, res;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return tag_config.getTagConfig(data);

              case 2:
                _ref = _context.sent;
                res = _ref.data;
                Object(external__mobx_["runInAction"])(function () {
                  _this.tags = res.data.tags;
                });
                return _context.abrupt("return", res);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getTagConfig(_x) {
        return _getTagConfig.apply(this, arguments);
      };
    }()
  }, {
    key: "postTagConfig",
    value: function postTagConfig(data) {
      return tag_config.postTagConfig(data);
    }
  }, {
    key: "deleteTagConfig",
    value: function deleteTagConfig(data) {
      return tag_config.deleteTagConfig(data);
    }
  }]);

  return TagConfig;
}(), (tag_config__descriptor = tag_config__applyDecoratedDescriptor(tag_config__class.prototype, "tags", [external__mobx_["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), tag_config__applyDecoratedDescriptor(tag_config__class.prototype, "getTagConfig", [external__mobx_["action"]], Object.getOwnPropertyDescriptor(tag_config__class.prototype, "getTagConfig"), tag_config__class.prototype), tag_config__applyDecoratedDescriptor(tag_config__class.prototype, "postTagConfig", [external__mobx_["action"]], Object.getOwnPropertyDescriptor(tag_config__class.prototype, "postTagConfig"), tag_config__class.prototype), tag_config__applyDecoratedDescriptor(tag_config__class.prototype, "deleteTagConfig", [external__mobx_["action"]], Object.getOwnPropertyDescriptor(tag_config__class.prototype, "deleteTagConfig"), tag_config__class.prototype)), tag_config__class);
/* harmony default export */ var store_tag_config = (tag_config_TagConfig);
// CONCATENATED MODULE: ./api/banner-config.js


var banner_config_getBannerConfig = function getBannerConfig(_ref) {
  var params = _ref.params;
  return http.request({
    url: "/auth/album/cfg/banner/".concat(params.albumId),
    method: 'get'
  });
};

/* harmony default export */ var banner_config = ({
  getBannerConfig: banner_config_getBannerConfig
});
// CONCATENATED MODULE: ./store/banner-config.js


var banner_config__desc, banner_config__value, banner_config__class, banner_config__descriptor;

function banner_config__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function banner_config__initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function banner_config__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function banner_config__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function banner_config__createClass(Constructor, protoProps, staticProps) { if (protoProps) banner_config__defineProperties(Constructor.prototype, protoProps); if (staticProps) banner_config__defineProperties(Constructor, staticProps); return Constructor; }

function banner_config__applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
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

function banner_config__initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}



var banner_config_BannerConfig = (banner_config__class =
/*#__PURE__*/
function () {
  function BannerConfig() {
    banner_config__classCallCheck(this, BannerConfig);

    banner_config__initDefineProp(this, "banners", banner_config__descriptor, this);
  }

  banner_config__createClass(BannerConfig, [{
    key: "getBannerConfig",
    value: function () {
      var _getBannerConfig = banner_config__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(data) {
        var _this = this;

        var _ref, res;

        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return banner_config.getBannerConfig(data);

              case 2:
                _ref = _context.sent;
                res = _ref.data;
                Object(external__mobx_["runInAction"])(function () {
                  _this.banners = res.data.banners;
                });
                return _context.abrupt("return", res);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getBannerConfig(_x) {
        return _getBannerConfig.apply(this, arguments);
      };
    }()
  }]);

  return BannerConfig;
}(), (banner_config__descriptor = banner_config__applyDecoratedDescriptor(banner_config__class.prototype, "banners", [external__mobx_["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), banner_config__applyDecoratedDescriptor(banner_config__class.prototype, "getBannerConfig", [external__mobx_["action"]], Object.getOwnPropertyDescriptor(banner_config__class.prototype, "getBannerConfig"), banner_config__class.prototype)), banner_config__class);
/* harmony default export */ var store_banner_config = (banner_config_BannerConfig);
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
  this.album = new store_album();
  this.baseConfig = new store_base_config();
  this.tagConfig = new store_tag_config();
  this.bannerConfig = new store_banner_config();
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
var external__mobx_react_ = __webpack_require__(3);
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
/* 22 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);