!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t=["children","title","meta"];function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(t,r,n){var o;return o=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(r,"string"),(r="symbol"==e(o)?o:String(o))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}System.register(["./index-legacy-4rkmnzOK.js","./router-legacy-rigPOyFI.js"],(function(e,r){"use strict";var o,l,c,s,a;return{setters:[function(e){o=e.u,l=e.h,c=e.j,s=e.H},function(e){a=e.r}],execute:function(){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=o();return a.useEffect((function(){null==t||t.setTitle(e)}),[e]),null}e("U",r);var u=a.forwardRef((function(e,o){var u=e.children,f=e.title,d=void 0===f?"":f,b=e.meta,m=i(e,t);r(d);var p=l().isGeolocationEnabled,y=localStorage.getItem("isGeoEnable");return a.useEffect((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[d]),p||"false"!=y?c.jsxs(c.Fragment,{children:[c.jsxs(s,{children:[c.jsx("title",{children:"".concat(d," | Akola Municipal Corporation")}),b]}),c.jsx("div",n(n({ref:o},m),{},{children:u}))]}):c.jsx(c.Fragment,{children:c.jsx("div",{className:"px-16 flex text-center font-semibold mt-36 justify-center items-center",children:c.jsxs("div",{className:"flex flex-col items-center",children:[c.jsx("div",{className:"text-4xl font-semibold text-red-900",children:c.jsx("img",{src:"/location-off.png",alt:"location",width:"100",loading:"lazy"})}),c.jsxs("h1",{className:"text-base font-semibold text-red-900",children:["Geolocation is not enabled! Please enable to use this app"," "]}),c.jsx("small",{className:"text-xs text-center font-semibold mt-10",children:"If location permission is not allowed then press the button below and go to settings and allow the permission"}),c.jsx("div",{className:"mt-10",children:c.jsx("button",{onClick:function(){window.location.reload()},className:"bg-red-500 text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50",children:"Reload"})})]})})})}));e("P",u)}}}))}();
