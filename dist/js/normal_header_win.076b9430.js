(function(e){function t(t){for(var i,o,s=t[0],l=t[1],c=t[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={normal_header_win:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([9,"chunk-vendors","chunk-common"]),n()})({"03ad":function(e,t,n){"use strict";var i=n("d503"),r=n.n(i);r.a},"4f7e":function(e,t,n){"use strict";n.r(t);n("c975"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("swiper",{ref:"mySwiper",staticClass:"slide-ctn",attrs:{options:e.swiperOption}},[n("swiper-slide",{staticClass:"slide-itm"},[n("div",{staticClass:"img-view",staticStyle:{"background-image":"url(./image/slide1.png)"}})]),n("swiper-slide",{staticClass:"slide-itm"},[n("div",{staticClass:"img-view",staticStyle:{"background-image":"url(./image/slide2.png)"}})]),n("swiper-slide",{staticClass:"slide-itm"},[n("div",{staticClass:"img-view",staticStyle:{"background-image":"url(./image/slide3.png)"}})]),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1),n("p",{staticClass:"txt"},[e._v("这是一个使用普通header 的 window")]),n("p",[e._v("使用的是公共header页")]),n("input",{staticClass:"input-row",attrs:{type:"text",placeholder:"请输入内容"}})],1)},a=[],o=(n("dfa4"),n("7212")),s={name:"normal_header_win",components:{swiper:o["swiper"],swiperSlide:o["swiperSlide"]},data:function(){return{swiperOption:{observer:!0,autoplay:!0,pagination:{el:".swiper-pagination"}}}}},l=s,c=(n("03ad"),n("2877")),u=Object(c["a"])(l,r,a,!1,null,null,null),p=u.exports,d=n("e688");if(Object(d["a"])(),i["a"].config.productionTip=!1,window.navigator.userAgent.toLowerCase().indexOf("APICloud"))window.apiready=function(){var e=new i["a"]({render:function(e){return e(p)}}).$mount("#app");e.$nextTick((function(){e.$appPageReady()})),window.$vm=e.$children[0]};else new i["a"]({render:function(e){return e(p)}}).$mount("#app")},9:function(e,t,n){e.exports=n("4f7e")},d503:function(e,t,n){}});