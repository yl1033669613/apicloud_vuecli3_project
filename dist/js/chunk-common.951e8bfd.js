(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"4c79":function(e,t,n){},"585c":function(e,t,n){},"6cd9":function(e,t,n){"use strict";var r=n("4c79"),i=n.n(r);i.a},"90f6":function(e,t,n){"use strict";var r=n("585c"),i=n.n(r);i.a},"9d8d":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"c-linear-gradient"},[n("div",{staticClass:"inner"},[n("a",{staticClass:"back",attrs:{back:e.back},on:{click:e.closeWin}}),n("span",{staticClass:"title"},[e._v(e._s(e.title))])]),e._t("default")],2)},i=[],o={name:"page_header",props:{title:{type:String},back:{type:Boolean,default:!0}},methods:{closeWin:function(){api.closeWin()}}},a=o,s=(n("6cd9"),n("2877")),c=Object(s["a"])(a,r,i,!1,null,"4d0335a2",null);t["a"]=c.exports},bb3f:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"listloading"},[e.nodata&&e.loadend?n("div",{staticClass:"nodata"},[e._v(e._s(e.nodataText))]):n("div",{staticClass:"loading"},[e.loadend?e._e():n("div",{staticClass:"loading-ani"},[e._m(0)]),e._v(" "+e._s(e.loadend?e.loadendText:e.loadingText)+" ")])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sk-wave"},[n("div",{staticClass:"sk-wave-rect"}),n("div",{staticClass:"sk-wave-rect"}),n("div",{staticClass:"sk-wave-rect"}),n("div",{staticClass:"sk-wave-rect"}),n("div",{staticClass:"sk-wave-rect"})])}],o={name:"listloading",props:{loadingText:{type:String,default:"加载中..."},nodata:{type:Boolean,default:!1},nodataText:{type:String,default:"暂无数据"},loadendText:{type:String,default:"没有更多了"},loadend:{type:Boolean,default:!1}}},a=o,s=(n("90f6"),n("2877")),c=Object(s["a"])(a,r,i,!1,null,"0a1bcb09",null);t["a"]=c.exports},d91f:function(e,t,n){var r;n("c975"),n("ac1f"),n("466d");var i=n("7037");(function(){"use strict";
/**
   * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
   *
   * @codingstandard ftlabs-jsv2
   * @copyright The Financial Times Limited [All Rights Reserved]
   * @license MIT License (see LICENSE.txt)
   */function o(e,t){var n;if(t=t||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=t.touchBoundary||10,this.layer=e,this.tapDelay=t.tapDelay||200,this.tapTimeout=t.tapTimeout||700,!o.notNeeded(e)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],i=this,a=0,c=r.length;a<c;a++)i[r[a]]=l(i[r[a]],i);s&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,r){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,r):i.call(e,t,n,r)},e.addEventListener=function(t,n,r){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),r):i.call(e,t,n,r)}),"function"===typeof e.onclick&&(n=e.onclick,e.addEventListener("click",(function(e){n(e)}),!1),e.onclick=null)}function l(e,t){return function(){return e.apply(t,arguments)}}}var a=navigator.userAgent.indexOf("Windows Phone")>=0,s=navigator.userAgent.indexOf("Android")>0&&!a,c=/iP(ad|hone|od)/.test(navigator.userAgent)&&!a,l=c&&/OS 4_\d(_\d)?/.test(navigator.userAgent),u=c&&/OS [6-7]_\d/.test(navigator.userAgent),d=navigator.userAgent.indexOf("BB10")>0;o.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(c&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},o.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!s;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},o.prototype.sendClick=function(e,t){var n,r;s&&document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),r=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},o.prototype.determineEventType=function(e){return s&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},o.prototype.focus=function(e){var t;c&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t),e.focus()):e.focus()},o.prototype.updateScrollParent=function(e){var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},o.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},o.prototype.onTouchStart=function(e){var t,n,r;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],c){var i=t.nodeName.toLowerCase();if("select"===i)return!1;if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!l){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},o.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n},o.prototype.onTouchMove=function(e){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},o.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},o.prototype.onTouchEnd=function(e){var t,n,r,i,o,a=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,u&&(o=e.changedTouches[0],a=document.elementFromPoint(o.pageX-window.pageXOffset,o.pageY-window.pageYOffset)||a,a.fastClickScrollParent=this.targetElement.fastClickScrollParent),r=a.tagName.toLowerCase(),"label"===r){if(t=this.findControl(a),t){if(this.focus(a),s)return!1;a=t}}else if(this.needsFocus(a))return e.timeStamp-n>100||c&&window.top!==window&&"input"===r?(this.targetElement=null,!1):(this.focus(a),this.sendClick(a,e),c&&"select"===r||(this.targetElement=null,e.preventDefault()),c&&"input"===r||(this.targetElement=null,e.preventDefault()),c&&"textarea"===r||(this.targetElement=null,e.preventDefault()),!1);return!(!c||l||(i=a.fastClickScrollParent,!i||i.fastClickLastScrollTop===i.scrollTop))||(this.needsClick(a)||("input"!==r&&"textarea"!==r&&"label"!==r&&"select"!==r||("label"!==r&&"select"!==r||document.activeElement.blur(),e.preventDefault()),this.sendClick(a,e)),!1)},o.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},o.prototype.onMouse=function(e){return!this.targetElement||(!!e.forwardedTouchEvent||(!e.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1))))},o.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||(t=this.onMouse(e),t||(this.targetElement=null),t)},o.prototype.destroy=function(){var e=this.layer;s&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},o.notNeeded=function(e){var t,n,r,i;if("undefined"===typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],n){if(!s)return!0;if(t=document.querySelector("meta[name=viewport]"),t){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(d&&(r=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),r[1]>=10&&r[2]>=3&&(t=document.querySelector("meta[name=viewport]"),t))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction||(i=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(i>=27&&(t=document.querySelector("meta[name=viewport]"),t&&(-1!==t.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===e.style.touchAction||"manipulation"===e.style.touchAction))},o.attach=function(e,t){return new o(e,t)},"object"===i(n("3c35"))&&n("3c35")?(r=function(){return o}.call(t,n,t,e),void 0===r||(e.exports=r)):e.exports?(e.exports=o.attach,e.exports.FastClick=o):window.FastClick=o})()},e688:function(e,t,n){"use strict";n("4de4"),n("c975"),n("a15b"),n("baa5"),n("b0c0"),n("a9e3"),n("b680"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("1276");var r=n("53ca"),i=n("2b0e"),o=n("d91f"),a=n.n(o),s={set:function(e,t){api.setPrefs({key:e,value:t})},get:function(e){return api.getPrefs({sync:!0,key:e})},del:function(e){api.removePrefs({key:e})}},c="http://localhost:8080",l="http://localhost:8080/resource";t["a"]=function(){!function(){function e(){window.document.documentElement.style.fontSize=window.document.documentElement.clientWidth/7.5+"px"}var t=null;window.addEventListener("resize",(function(){clearTimeout(t),t=setTimeout(e,10)}),!1),e()}(window),Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e};var e={baseApiUrl:c,resourceUrl:l,extend:function(e,t){var n=t;for(var r in e)!t.hasOwnProperty(r)&&e.hasOwnProperty(r)&&(n[r]=e[r]);return n},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},testAndReqPermission:function(e,t){var n=["camera","contacts","contacts-r","contacts-w","microphone","photos","location","locationAlways","notification","calendar","calendar-r","calendar-w","phone","phone-call","phone-r","phone-r-log","phone-w-log","sensor","sms","sms-s","sms-r","storage","storage-r","storage-w"],r=[],i=!0;if("string"===typeof e)i=-1!==n.indexOf(e),r.push(e);else{if(!Array.isArray(e)||!e.length)return;for(var o=0;o<e.length;o++)r.push(e[o]),-1===n.indexOf(e[o])&&(i=!1)}if(i){for(var a=api.hasPermission({list:r}),s=[],c=[],l=0;l<a.length;l++)a[l].granted?c.push(a[l]):s.push(a[l].name);s.length?api.requestPermission({list:s,code:100001},(function(e,n){if(e){for(var r=0;r<e.list.length;r++)if(!e.list[r].granted)return;t&&t(e)}else console.log(JSON.stringify(n))})):t&&t({list:c})}else console.log("存在无效授权项")},resizeFrame:function(e,t){var n={x:0,y:0,w:api.winWidth,h:0};window.addEventListener("resize",(function(){switch(t){case 0:n.y=window.document.querySelector("header").offsetHeight,n.h=api.winHeight-window.document.querySelector("header").offsetHeight-(window.document.querySelector("#footer")?window.document.querySelector("#footer").offsetHeight:0);break;case 1:n.h=api.winHeight;break;case 2:n.y=window.document.querySelector("header").offsetHeight,n.h=api.winHeight-window.document.querySelector("header").offsetHeight;break}0==t?api.setFrameGroupAttr({name:e,rect:n}):api.setFrameAttr({name:e,rect:n})}))},fixIosBottomViewWhenKeyBoardShow:function(e,t){var n=window.document.querySelector(e);"ios"===api.systemType&&n&&(api.addEventListener({name:"keyboardshow"},(function(e,r){window.document.querySelector("body").offsetHeight>api.frameHeight&&(n.style.position="static",n.style.marginTop=t)})),api.addEventListener({name:"keyboardhide"},(function(e,t){n.style.position="fixed",n.style.marginTop="0"})))},openWin:function(e,t){var n=t||{},r=e.pageParam||{pageName:e.name},i=e.headerName?e.headerName:"page_header";r.pageName=e.name;for(var o=api.windows(),a=0;a<o.length;a++)o[a].name==e.name&&api.closeWin({name:e.name});api.openWin({name:e.name,url:"widget://"+i+".html",reload:!0,slidBackEnabled:n.slidBackEnabled||!0,slidBackType:n.slidBackType||"edge",vScrollBarEnabled:n.vScrollBarEnabled||!1,hScrollBarEnabled:n.hScrollBarEnabled||!1,pageParam:r,bounces:n.bounces||!1,singleInstance:n.singleInstance||!1,bgColor:n.bgColor||"",delay:n.delay||0,animation:n.animation||{type:"movein",subType:"from_right",duration:300},scrollEnabled:!1})},closeWin:function(e){api.closeWin({name:e,animation:"push",subType:"from_left",duration:300})},openFrame:function(e,t,n){var r=n||{},i=0,o=window.document.querySelector("header");o&&(i=o.offsetHeight),api.openFrame({name:e+"_frame",url:"widget://"+e+".html",pageParam:t,rect:r.rect||{x:0,y:i,w:api.winWidth,h:"auto"},animation:r.animation||{type:"none",subType:"from_right",duration:300},bounces:r.bounces||!1,vScrollBarEnabled:r.vScrollBarEnabled||!1,hScrollBarEnabled:r.hScrollBarEnabled||!1,allowEdit:r.allowEdit||!1,reload:r.reload||!0,overScrollMode:r.overScrollMode||"scrolls"})},openPopFrame:function(e,t){var n={x:0,y:0,w:api.winWidth,h:api.winHeight};api.openFrame({name:e,url:"widget://"+e+".html",pageParam:t,rect:n,animation:{type:"fade",duration:200},reload:!0}),this.resizeFrame(e,1)},ajax:function(e){var n=this,r={url:"",method:"post",dataType:"",timeout:30,headers:{Accept:"application/json"}},i={};i=n.extend(r,e),i.data||(i.data={}),i.data.files||i.data.body||(i.headers=n.extend(i.headers,{"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"})),i.url.lastIndexOf(".json")>-1&&(i.type="get"),i.url||api.alert({msg:"数据地址不正确"}),i.url.match(/^(?:http|ftp|https):\/\//)||(i.url=n.baseApiUrl+i.url);var a=s.set("token");a&&!i.disableToken&&(i.headers=n.extend(i.headers,{token:a})),api.ajax({url:i.url,data:i.data,method:i.method,dataType:i.dataType,headers:i.headers,timeout:i.timeout},(function(e,n){if(e)if(200==e.code)i.success(e);else{if(o(),api.refreshHeaderLoadDone(),401==e.code)return t("登录已过期，请重新登录"),void setTimeout((function(){api.closeToWin({name:"root",animation:{type:"none",duration:0}}),api.execScript({name:"root",script:"$vm.openLoginWhenTokenInvalid()"})}),700);i.error&&"function"===typeof i.error&&i.error(e)}else o(),api.refreshHeaderLoadDone(),console.log(JSON.stringify(n)),t("请求失败")}))},pullUp:function(e){api.addEventListener({name:"scrolltobottom"},(function(t,n){e()}))},pullDown:function(e,t){api.setCustomRefreshHeaderInfo({bgColor:t||"#2b2c30",loadAnimInterval:45,image:{pull:["widget://res/refresh/1.png"],load:["widget://res/refresh/1.png","widget://res/refresh/2.png","widget://res/refresh/3.png","widget://res/refresh/4.png","widget://res/refresh/5.png","widget://res/refresh/6.png","widget://res/refresh/7.png","widget://res/refresh/8.png","widget://res/refresh/9.png","widget://res/refresh/10.png","widget://res/refresh/11.png","widget://res/refresh/12.png","widget://res/refresh/13.png","widget://res/refresh/14.png","widget://res/refresh/15.png","widget://res/refresh/16.png","widget://res/refresh/17.png","widget://res/refresh/18.png","widget://res/refresh/19.png","widget://res/refresh/20.png","widget://res/refresh/21.png","widget://res/refresh/22.png","widget://res/refresh/23.png","widget://res/refresh/24.png","widget://res/refresh/25.png","widget://res/refresh/26.png","widget://res/refresh/27.png","widget://res/refresh/28.png","widget://res/refresh/29.png","widget://res/refresh/30.png","widget://res/refresh/31.png","widget://res/refresh/32.png","widget://res/refresh/33.png","widget://res/refresh/34.png","widget://res/refresh/35.png","widget://res/refresh/36.png","widget://res/refresh/37.png","widget://res/refresh/38.png","widget://res/refresh/39.png","widget://res/refresh/40.png","widget://res/refresh/41.png","widget://res/refresh/42.png","widget://res/refresh/43.png","widget://res/refresh/44.png"]},isScale:!1},(function(){e()}))},openActionSelect:function(e,t){var n=api.require("UIActionSelector");n.open({datas:e.datas,actives:e.actives,layout:{row:e.row||5,col:e.col||3,height:50,size:14,sizeActive:18,rowSpacing:0,colSpacing:0,maskBg:"rgba(0,0,0,0.65)",bg:"#f5f5f5",color:"#333",colorActive:"#97a38d",colorSelected:"#97a38d",leftMargin:20,rightMargin:20},animation:!0,cancel:{text:"取消",size:15,w:80,h:36,bg:"#e5e4e6",bgActive:"#e5e4e6",color:"#aaa6a7",colorActive:"#aaa6a7"},ok:{text:"确定",size:15,w:80,h:36,bg:"#97a38d",bgActive:"#7c8870",color:"#fff",colorActive:"#fff"},title:{text:"",size:12,h:50,bg:"#eee",color:"#222"},lineColor:"#ccc"},(function(e,n){e&&t&&t(e)}))},openPhotoBrowser:function(e,t){var n=api.require("photoBrowser");return n.open({images:e.images||[],placeholderImg:"widget://res/placeH_pic.png",bgColor:e.bgColor||"#000",activeIndex:e.activeIndex||0,atime:.3},(function(e,r){t&&t(n,e)})),n},superZero:function(e){return e<10?"0"+e:e},dateRemoveTime:function(e){return e&&e.length>10?e.substring(0,10):e},setBaseUrl:function(e){return e?e.match(/^(?:http|ftp|https):\/\//)||e.indexOf("../")>-1?e:this.resourceUrl+e:""},fnImageCache:function(e,t){var n=this,i=e.datas,o=e.imgKey,a=0,s=e.timeout||6e4,c=function(){a===i.length&&t&&t(i)};if(i&&i.length)for(var l=0;l<i.length;l++)(function(e){var t="",l=Object(r["a"])(i[e]);if("string"===l?t=n.setBaseUrl(i[e]):o&&(t=n.setBaseUrl(i[e][o])),t){var u=setTimeout((function(){clearTimeout(u),u=null,a++,c()}),s);api.imageCache({url:t,thumbnail:"ios"!==api.systemType},(function(t,n){u&&(clearTimeout(u),u=null,t.url&&("string"===l?i[e]=t.url:i[e][o]=t.url),a++,c())}))}else a++,c()})(l);else t&&t(e)},priceFormate:function(e,t){var n,r="",i="";if(0===e)return 0;if(!e)return"";if(e<1)return e;if(t)n=(parseInt(this.accMul(e,1e4))+"").split("").reverse();else{var o=(parseFloat(e)+"").split(".");n=o[0].split("").reverse(),i=o[1]||""}for(var a=0;a<n.length;a++)r+=n[a]+((a+1)%3==0&&a+1!=n.length?",":"");return r.split("").reverse().join("")+(i?"."+i:"")},accAdd:function(e,t){var n,r,i,o;try{n=e.toString().split(".")[1].length}catch(s){n=0}try{r=t.toString().split(".")[1].length}catch(s){r=0}if(o=Math.abs(n-r),i=Math.pow(10,Math.max(n,r)),o>0){var a=Math.pow(10,o);n>r?(e=Number(e.toString().replace(".","")),t=Number(t.toString().replace(".",""))*a):(e=Number(e.toString().replace(".",""))*a,t=Number(t.toString().replace(".","")))}else e=Number(e.toString().replace(".","")),t=Number(t.toString().replace(".",""));return(e+t)/i},accSub:function(e,t){var n,r,i,o;try{n=e.toString().split(".")[1].length}catch(a){n=0}try{r=t.toString().split(".")[1].length}catch(a){r=0}return i=Math.pow(10,Math.max(n,r)),o=n>=r?n:r,((e*i-t*i)/i).toFixed(o)},accMul:function(e,t){var n=0,r=e.toString(),i=t.toString();try{n+=r.split(".")[1].length}catch(o){}try{n+=i.split(".")[1].length}catch(o){}return Number(r.replace(".",""))*Number(i.replace(".",""))/Math.pow(10,n)},accDiv:function(e,t){var n,r,i=0,o=0;try{i=e.toString().split(".")[1].length}catch(a){}try{o=t.toString().split(".")[1].length}catch(a){}return n=Number(e.toString().replace(".","")),r=Number(t.toString().replace(".","")),n/r*Math.pow(10,o-i)},validForm:function(e,n){if(e&&n){for(var r in n){if(n[r].required&&!e[r])return t(n[r].message),!1;if(n[r].validFunc){var i=n[r].validFunc(e[r],(function(e){t(e)}));if(!i)return!1}}return!0}return!1},validPhone:function(e){var t=/^1[3456789]\d{9}$/;return!!t.test(e)},validTele:function(e){var t=/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;return!!t.test(e)},validEmail:function(e){var t=/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;return!!t.test(e)},validNumber:function(e){var t=/^\d+$/;return!!t.test(e)},isNumber:function(e){var t=/^\d+(\.\d+)?$/,n=/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;return!(!t.test(e)&&!n.test(e))},isIdNum:function(e){var t=/^[1-9]\d{5}(18|19|20|21)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;return!!t.test(e)},onlyNumOrLetters:function(e){var t=/^[0-9a-zA-Z]+$/;return!!t.test(e)}};function t(e){"string"===typeof e?api.toast({msg:e,duration:3e3,location:"bottom"}):"object"===Object(r["a"])(e)&&api.toast({msg:e.msg||"",duration:e.duration||3e3,location:e.location||"bottom"})}function n(e,t,n){api.showProgress({title:e,text:t||"",modal:!!n})}function o(){api.hideProgress()}function u(){"ios"===api.systemType&&"undefined"!==typeof a.a&&a.a.attach(window.document.body)}function d(){api.parseTapmode();var e=window.document.querySelector("header");e&&(e.style.paddingTop=api.safeArea.top+"px")}i["a"].prototype.$appPageReady=function(e){api&&(d(),u(),e&&e())},i["a"].prototype.toast=t,i["a"].prototype.showProgress=n,i["a"].prototype.hideProgress=o,i["a"].prototype.$comm=e,i["a"].prototype.setStorage=s.set,i["a"].prototype.getStorage=s.get,i["a"].prototype.rmStorage=s.del,i["a"].filter("setBaseUrl",e.setBaseUrl.bind(e)),i["a"].filter("superZero",e.superZero),i["a"].filter("dateRemoveTime",e.dateRemoveTime),i["a"].filter("priceFormate",e.priceFormate.bind(e))}}}]);