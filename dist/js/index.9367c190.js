(function(e){function t(t){for(var n,r,c=t[0],s=t[1],A=t[2],p=0,g=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&g.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(g.length)g.shift()();return o.push.apply(o,A||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var s=a[c];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={index:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var A=0;A<c.length;A++)t(c[A]);var l=s;o.push([6,"chunk-vendors","chunk-common"]),a()})({"44eb":function(e,t,a){"use strict";a.r(t);a("c975"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-wrap flex-vertical",attrs:{id:"wrap"},on:{touchmove:function(t){return e.handleRootPageScoll(t)}}},[a("header",{ref:"header",staticClass:"c-linear-gradient",class:[0==e.active?"home-header":""]},[a("span",{directives:[{name:"show",rawName:"v-show",value:0!=e.active,expression:"active != 0"}],staticClass:"title"},[e._v(e._s(e.title))]),a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.active,expression:"active == 0"}],staticClass:"home-header-inside"},[a("p",{staticClass:"home-header-inside__title"},[e._v("特殊 首页 header")]),e._m(0)])]),a("div",{staticClass:"flex-con",attrs:{id:"main"}}),a("div",{ref:"footer",style:{paddingBottom:e.safeAreaBott+"px"},attrs:{id:"footer"}},[a("ul",{staticClass:"flex-wrap"},e._l(e.tabs,(function(t,n){return a("li",{key:n,staticClass:"flex-con",class:{active:n===e.active},on:{click:function(t){return e.switchTab(n)}}},[a("span",{style:{visibility:n!==e.active?"visible":"hidden",backgroundImage:"url("+t.normal+")"}}),a("span",{style:{visibility:n===e.active?"visible":"hidden",backgroundImage:"url("+t.active+")"}}),e._v(" "+e._s(t.name)+" ")])})),0)])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row-search"},[n("div",{staticClass:"search-inner__input"},[n("input",{attrs:{type:"text",placeholder:"首页搜索输入框"}}),n("span",{staticClass:"search-ico"},[n("img",{attrs:{src:a("d2d8"),alt:""}})])])])}],r=(a("b0c0"),{name:"root",data:function(){return{active:0,title:"首页",tabs:[{page:"home",name:"首页",normal:"./image/tabbar/1.png",active:"./image/tabbar/1_ac.png"},{page:"find",name:"发现",normal:"./image/tabbar/2.png",active:"./image/tabbar/2_ac.png"},{page:"message",name:"消息",normal:"./image/tabbar/3.png",active:"./image/tabbar/3_ac.png"},{page:"watching_focus",name:"看点",normal:"./image/tabbar/4.png",active:"./image/tabbar/4_ac.png"},{page:"profile",name:"我的",normal:"./image/tabbar/5.png",active:"./image/tabbar/5_ac.png"}],tokenInvalid:!1}},computed:{safeAreaBott:function(){return api.safeArea.bottom||0}},mounted:function(){var e=this;e.ExitApp(),e.$nextTick((function(){e.checkLoginState((function(t){t?(e.tokenInvalid=!1,api.setStatusBarStyle({style:"light"}),setTimeout((function(){e.initGroup()}),0)):e.openLoginRegFrame("login")}))}))},methods:{handleRootPageScoll:function(e){e.preventDefault()},ExitApp:function(){var e,t,a=this,n=0,i=null;api.addEventListener({name:"keyback"},(function(o,r){0==n?(e=(new Date).getTime(),n=1,i=setTimeout((function(){n=0,clearTimeout(i)}),2e3),a.toast("再次操作退出")):1==n&&(t=(new Date).getTime(),t-e<2e3&&(clearTimeout(i),api.closeWidget({id:api.appId,retData:{name:"closeWidget"},silent:!0})))}))},loginDone:function(){var e=this;e.tokenInvalid=!1,api.closeFrame({name:"login"}),api.setStatusBarStyle({style:"light"}),e.initGroup()},initGroup:function(){api.closeFrameGroup({name:"group"});for(var e=[],t=this.tabs,a=0,n=t.length;a<n;a++)e.push({name:t[a].page,url:"./"+t[a].page+".html",bgColor:"#ffffff",bounces:!0,vScrollBarEnabled:!1,hScrollBarEnabled:!1,scaleEnabled:!1,overScrollMode:"scrolls"});var i={x:0,y:this.$refs.header.offsetHeight,w:api.winWidth,h:api.winHeight-this.$refs.header.offsetHeight-this.$refs.footer.offsetHeight};this.$comm.resizeFrame("group",0),api.openFrameGroup({name:"group",scrollEnabled:!1,preload:0,rect:i,index:this.active,frames:e},(function(e,t){}))},switchTab:function(e){this.active!=e&&(this.active=e,this.title=this.tabs[e].name,api.setFrameGroupIndex({name:"group",index:e}),this.resetFrameRect())},setTabIndex:function(e){var t=parseInt(e);api.setFrameGroupIndex({name:"group",index:t}),this.active=t,this.title=this.tabs[t].name,this.resetFrameRect()},resetFrameRect:function(){var e=this;e.$nextTick((function(){api.setFrameGroupAttr({name:"group",rect:{x:0,y:e.$refs.header.offsetHeight,w:api.winWidth,h:api.winHeight-e.$refs.header.offsetHeight-e.$refs.footer.offsetHeight}})}))},checkLoginState:function(e){var t=this.getStorage("token");t?e&&e(!0):e&&e(!1)},openLoginRegFrame:function(e){api.setStatusBarStyle({style:"dark"}),api.openFrame({name:e+"_frame",url:"./"+e+".html",ract:{x:0,y:0,w:api.winWidth,h:api.winHeight},bgColor:"#ffffff",animation:{type:"movein",subType:"from_right",duration:300},reload:!0})},openLoginWhenTokenInvalid:function(){var e=this;e.tokenInvalid||(e.tokenInvalid=!0,setTimeout((function(){e.active=0,e.title=e.tabs[e.active].name,api.closeFrameGroup({name:"group"}),e.openLoginRegFrame("login")}),0))},getProfile:function(){}}}),c=r,s=(a("b297"),a("2877")),A=Object(s["a"])(c,i,o,!1,null,null,null),l=A.exports,p=a("e688");if(Object(p["a"])(),n["a"].config.productionTip=!1,-1!==window.navigator.userAgent.toLowerCase().indexOf("apicloud"))window.apiready=function(){var e=new n["a"]({render:function(e){return e(l)}}).$mount("#app");e.$nextTick((function(){e.$appPageReady()})),window.$vm=e.$children[0]};else new n["a"]({render:function(e){return e(l)}}).$mount("#app")},6:function(e,t,a){e.exports=a("44eb")},"8e98":function(e,t,a){},b297:function(e,t,a){"use strict";var n=a("8e98"),i=a.n(n);i.a},d2d8:function(e,t){e.exports="data:image/png;base64,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"}});