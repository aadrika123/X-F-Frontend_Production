!function(){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},r(e)}var e=["formik","label","name","disabled","className","isRequiredLabel","onInput","isDynamic"];function t(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function n(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?t(Object(n),!0).forEach((function(e){o(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function o(e,t,n){var o;return o=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==r(o)?o:String(o))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var n,o,i,a,u=[],l=!0,c=!1;try{if(i=(t=t.call(r)).next,0===e){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=i.call(t)).done)&&(u.push(n.value),u.length!==e);l=!0);}catch(r){c=!0,o=r}finally{try{if(!l&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return a(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function u(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}System.register(["./index-legacy-k-i-OY1X.js","./react-legacy-B2uxfrw8.js","./formik.esm-legacy-4K34LA0X.js"],(function(r,t){"use strict";var o,a,l,c,s;return{setters:[function(r){o=r.j,a=r.i,l=r.k},function(r){c=r.R},function(r){s=r.g}],execute:function(){r("P",(function(r){var t=r.formik,f=r.label,y=r.name,b=(r.disabled,r.className,r.isRequiredLabel,r.onInput,r.isDynamic),m=void 0!==b&&b,d=u(r,e),p=i(c.useState(!1),2),g=p[0],v=p[1];return o.jsxs("div",{className:"mb-4",children:[o.jsxs("div",{className:"relative",children:[o.jsx("label",{htmlFor:y,className:"block text-gray-600 text-sm mb-1",children:f}),o.jsx("input",n(n({type:g?"text":"password",name:y,id:y},t&&(null==t?void 0:t.getFieldProps(y))),{},{className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600",placeholder:f},d)),o.jsx("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-6",children:g?o.jsx(a,{className:"cursor-pointer text-gray-500 hover:text-gray-700 w-5 h-5",onClick:function(){return v(!g)}}):o.jsx(l,{className:"cursor-pointer text-gray-500 hover:text-gray-700 w-5 h-5",onClick:function(){return v(!g)}})})]}),o.jsx("span",{className:"text-red-600  text-xs",children:m?s(null==t?void 0:t.touched,y)&&s(null==t?void 0:t.errors,y):(null==t?void 0:t.touched[y])&&(null==t?void 0:t.errors[y])})]})}));r("u",(function(r){var e=i(c.useState(0),2),t=e[0],n=e[1],o=i(c.useState(!1),2),a=o[0],u=o[1];c.useEffect((function(){var e;return a?(n(60*r),e=setInterval((function(){n((function(r){return r-1}))}),1e3)):clearInterval(e),function(){return clearInterval(e)}}),[a]),c.useEffect((function(){t<0&&a&&(u(!1),n(0))}),[t,a]);var l=String(t%60).padStart(2,0);return{minutes:String(Math.floor(t/60)).padStart(2,0),seconds:l,togglerTimer:function(){return u((function(r){return!r}))},runTimer:a}}))}}}))}();
