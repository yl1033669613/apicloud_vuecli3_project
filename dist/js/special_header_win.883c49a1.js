(function(e){function n(n){for(var r,i,u=n[0],c=n[1],l=n[2],f=0,s=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(n);while(s.length)s.shift()();return a.push.apply(a,l||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,u=1;u<t.length;u++){var c=t[u];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={special_header_win:0},a=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var p=c;a.push([8,"chunk-vendors","chunk-common"]),t()})({8:function(e,n,t){e.exports=t("8a71")},"8a71":function(e,n,t){"use strict";t.r(n);t("c975"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("p",{staticClass:"txt"},[e._v("这是一个使用特殊header 的 window")]),t("p",[e._v("可以看到header 上扩展了一个文字按钮")]),t("p",[e._v("以及一个tabbar实例")])])},a=[],i={name:"special_header_win"},u=i,c=(t("9996"),t("2877")),l=Object(c["a"])(u,o,a,!1,null,null,null),p=l.exports,f=t("e688");if(Object(f["a"])(),r["a"].config.productionTip=!1,window.navigator.userAgent.toLowerCase().indexOf("APICloud"))window.apiready=function(){var e=new r["a"]({render:function(e){return e(p)}}).$mount("#app");e.$nextTick((function(){e.$appPageReady()})),window.$vm=e.$children[0]};else new r["a"]({render:function(e){return e(p)}}).$mount("#app")},9996:function(e,n,t){"use strict";var r=t("b057"),o=t.n(r);o.a},b057:function(e,n,t){}});