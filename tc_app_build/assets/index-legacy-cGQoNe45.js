!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,s,o=[],c=!0,i=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){i=!0,l=e}finally{try{if(!c&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(i)throw l}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-7hMgGkof.js","./router-legacy-_t8Mc_yw.js","./tailwind-legacy-Afc9ICbc.js","./MarkerWithInfo-legacy-4bG_2uyE.js","./index-legacy-V_8jw760.js","./reactQuery-legacy-820C8VGY.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-v-aafSOk.js","./headlessui-legacy-MZogm2kK.js"],(function(t,n){"use strict";var r,l,a,s,o,c,i,u,d;return{setters:[function(e){r=e.e,l=e.b,a=e.j},function(e){s=e.h},function(e){o=e.r},function(e){c=e.A,i=e.M,u=e.a},function(e){d=e.P},null,null,null,null],execute:function(){t("default",(function(){var t=e(s(),1)[0],n=t.get("name"),f=t.get("lat"),y=t.get("lng"),g=t.get("address"),j=t.get("holding-no"),h=t.get("property-no"),x=r(),m=(x.coords,x.isGeolocationEnabled);return l(),a.jsx(d,{title:"View Map",children:a.jsxs("div",{className:"p-2",children:[a.jsx(o.Card,{className:"w-full",children:a.jsx(o.CardBody,{children:a.jsx("div",{className:"grid grid-cols-2 gap-2",children:a.jsxs("div",{className:"col-span-2 justify-between flex",children:[a.jsx("h1",{className:"text-sm font-bold text-gray-600",children:"Geo Enabled Status:"}),a.jsx("h1",{className:"text-sm font-bold \n                ".concat(m?"text-green-500":"text-red-500","\n                "),children:m?"Yes":"No"})]})})})}),a.jsx("div",{className:"border-t border-gray-300 my-4"}),m?a.jsx(c,{apiKey:"AIzaSyC0AArVHmqXGAxgWcljuOD_fvY5eDXfwS0",children:a.jsx(i,{className:"w-full h-screen",defaultCenter:{lat:20.7122002,lng:77.0102968},defaultZoom:10,gestureHandling:"greedy",disableDefaultUI:!1,children:a.jsx(u,{name:null!=n?n:"NA",lat:parseFloat(f),lng:parseFloat(y),popOver:"This is ".concat(null!=n?n:"NA"," location"),title:"Holding no-:".concat(null!=j?j:"NA"," \n Property no-:").concat(null!=h?h:"NA"),subTitle:"Address-:".concat(null!=g?g:"NA")})})}):a.jsx("div",{className:"text-red-500 text-center",children:a.jsx("h1",{children:"Geo Location is disabled"})})]})})}))}}}))}();