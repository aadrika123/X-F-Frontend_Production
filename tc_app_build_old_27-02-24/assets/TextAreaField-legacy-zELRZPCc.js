!function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}var r=["label","name","formik","isDynamic"];function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function n(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(r,t,n){var o;return o=function(r,t){if("object"!=e(r)||!r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,t||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(t,"string"),(t="symbol"==e(o)?o:String(o))in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}System.register(["./index-legacy-Wc5FCZ_j.js","./formik.esm-legacy-RG1cH4yA.js"],(function(e,t){"use strict";var o,l;return{setters:[function(e){o=e.j},function(e){l=e.g}],execute:function(){e("T",(function(e){var t=e.label,c=e.name,u=e.formik,a=e.isDynamic,s=i(e,r);return o.jsxs("div",{className:"mb-4",children:[o.jsx("label",{htmlFor:c,className:"block text-gray-600 text-sm mb-1",children:t}),o.jsx("textarea",n(n({type:"text",name:c,id:c},u&&(null==u?void 0:u.getFieldProps(c))),{},{className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600",placeholder:t},s)),o.jsx("span",{className:"text-red-600  text-xs",children:a?l(null==u?void 0:u.touched,c)&&l(null==u?void 0:u.errors,c):(null==u?void 0:u.touched[c])&&(null==u?void 0:u.errors[c])})]})}))}}}))}();
