(function(t){function e(e){for(var r,o,c=e[0],u=e[1],l=e[2],s=0,p=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},a=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"97bc1827"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=i[t]=[e,r]}));e.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var l=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(s);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}i[t]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/Peakify/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02eb":function(t,e,n){},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},1514:function(t,e,n){"use strict";var r=n("a58b"),i=n.n(r);i.a},"4c1c":function(t,e,n){"use strict";var r=n("02eb"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},a=[],o=(n("034f"),n("2877")),c={},u=Object(o["a"])(c,i,a,!1,null,null,null),l=u.exports,s=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Gallery")],1)},p=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gallery"},[n("div",{staticClass:"gallery__content"},[n("p",[t._v("What are you searching for?")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.getContent()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.topic,expression:"topic"}],attrs:{type:"text",placeholder:"Type here the topic"},domProps:{value:t.topic},on:{input:function(e){e.target.composing||(t.topic=e.target.value)}}})]),n("div",{staticClass:"gallery__items"},t._l(t.images,(function(e){return n("GalleryItem",{key:e.data[0].nasa_id,attrs:{imageLink:e.href,itemActive:t.itemActive},on:{activeGalleryItem:t.activeGalleryItem}})})),1)])])},v=[],d=n("bc3a"),h=n.n(d),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gallery__item"},[n("img",{attrs:{src:t.imgSrc},on:{click:function(e){return t.showFullImage()}}}),n("div",{staticClass:"gallery__item--fullScreen",class:{active:t.isActive}},[n("img",{attrs:{src:t.imgSrc},on:{click:function(e){return t.showFullImage()}}})])])},y=[],b={name:"GalleryItem",props:["imageLink","itemActive"],methods:{showFullImage:function(){(!1===this.itemActive||!0===this.isActive)&&(this.isActive=!this.isActive,this.$emit("activeGalleryItem"))}},data:function(){return{isActive:!1,imgSrc:null}},created:function(){var t=this;h.a.get(this.imageLink).then((function(e){t.imgSrc=e.data[1]}))}},_=b,w=(n("4c1c"),Object(o["a"])(_,g,y,!1,null,"0c601586",null)),j=w.exports,A={name:"Gallery",data:function(){return{topic:"",images:[],itemActive:!1}},components:{GalleryItem:j},methods:{activeGalleryItem:function(){this.itemActive=!this.itemActive},getContent:function(){var t=this;h.a.get("https://images-api.nasa.gov/search?title=".concat(this.topic,"&media_type=image")).then((function(e){t.images=e.data.collection.items,console.log(e.data.collection.items)}))}}},O=A,k=(n("1514"),Object(o["a"])(O,m,v,!1,null,null,null)),x=k.exports,P={name:"Home",components:{Gallery:x}},C=P,G=Object(o["a"])(C,f,p,!1,null,null,null),I=G.exports;r["a"].use(s["a"]);var S=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],E=new s["a"]({routes:S}),T=E;r["a"].config.productionTip=!1,new r["a"]({router:T,render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,e,n){},a58b:function(t,e,n){}});
//# sourceMappingURL=app.1771a53d.js.map