!function(){function t(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return n(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}System.register(["./router-legacy-rigPOyFI.js"],(function(n,e){"use strict";var o;return{setters:[function(t){o=t.g}],execute:function(){var e=o((function(t){var n=r(t);return null!=t&&("object"==n||"function"==n)}));n("u",(function(){var n=function n(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],u=null==Object?void 0:Object.keys(r)[0];return e(r[u])?n(r[u],[].concat(t(o),[u])):[].concat(t(o),[u]).join(".")};return{AutoFocusErrorField:function(t){var r=t.isValid,e=t.submitCount,o=t.isSubmitting,u=t.errors;if(!r&&0!==e&&o){var i,c,f=n(u);if(null!==(i=window.document.getElementsByName(f))&&void 0!==i&&i.length)null===(c=window.document.getElementsByName(f)[0])||void 0===c||c.focus()}}}}))}}}))}();
