!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}var e=["children","title","meta"];function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(e,r,n){var o;return o=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(r,"string"),(r="symbol"==t(o)?o:String(o))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}System.register(["./index-legacy-eswIL5Je.js","./router-legacy-rigPOyFI.js"],(function(t,r){"use strict";var o,c,u,l;return{setters:[function(t){o=t.u,c=t.j,u=t.H},function(t){l=t.r}],execute:function(){function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=o();return l.useEffect((function(){null==e||e.setTitle(t)}),[t]),null}t("U",r);var f=l.forwardRef((function(t,o){var f=t.children,a=t.title,s=void 0===a?"":a,b=t.meta,y=i(t,e);return r(s),l.useEffect((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[s]),c.jsxs(c.Fragment,{children:[c.jsxs(u,{children:[c.jsx("title",{children:"".concat(s," | Akola Municipal Corporation")}),b]}),c.jsx("div",n(n({ref:o},y),{},{children:f}))]})}));t("P",f)}}}))}();
