module.exports=__NEXT_REGISTER_PAGE("/auth/signin",function(){return{page:webpackJsonp([12],{288:function(e,t,n){e.exports=n(289)},289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),u=n.n(o),a=n(6),c=n(41),i=n(15),l=n.n(i);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var y=Object(c.b)(function(e){return{auth:e.store.auth}})(r=Object(c.c)(r=Object(a.a)(r=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))).state={account:"",password:""},e}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),n=t,(r=[{key:"handleInputAccount",value:function(e){this.setState({account:e.target.value})}},{key:"handleInputPassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleSignIn",value:function(){this.props.auth.signIn(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}({},this.state)).then(function(e){200===e.code&&l.a.replace("/")})}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("h3",null,"SignIn"),"Account",u.a.createElement("input",{onChange:this.handleInputAccount}),u.a.createElement("br",null),"Password",u.a.createElement("input",{type:"password",onChange:this.handleInputPassword}),u.a.createElement("br",null),u.a.createElement("button",{onClick:this.handleSignIn},"登录"))}}])&&p(n.prototype,r),a&&p(n,a),t}())||r)||r)||r;t.default=y}},[288]).default}});