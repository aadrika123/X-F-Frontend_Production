!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l,a,s=[],i=!0,c=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=l.call(r)).done)&&(s.push(n.value),s.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{if(!i&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return s}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-Ymw97w2U.js","./index-legacy-FyQKmLbO.js"],(function(t,r){"use strict";var n,o,l,a,s;return{setters:[function(e){n=e.b,o=e.r,l=e.u,a=e.j},function(e){s=e.M}],execute:function(){t("default",(function(t){var i=n();o.useState(!1),o.useState(null),o.useState(!1);var c=e(o.useState(!1),2),u=c[0],d=c[1];l();function m(){d(!1)}return o.useState("property"),a.jsxs(a.Fragment,{children:["/"!=i.pathname&&"/"!=i.pathname&&"/login"!=i.pathname&&"/mobile-login"!=i.pathname&&"/error"!=i.pathname&&a.jsx("div",{className:"flex flex-col transition-all duration-500 ease-in-out ",children:a.jsxs("nav",{className:"w-full bg-white z-50  flex flex-row flex-nowrap items-center justify-between mt-0  px-4 darks:bg-gray-800 shadow-sm transition-all duration-500 ease-in-out",id:"desktop-menu",children:[a.jsx("div",{className:"flex items-center",children:a.jsx("div",{class:" text-center py-2",children:a.jsx("a",{href:"https://smartulb.co.in/amc-app",class:"text-xl font-semibold text-gray-200  max-h-9 overflow-hidden hidden-compact cursor-pointer",children:a.jsx("span",{class:"text-gray-700 darks:text-gray-200",children:"AMC"})})})}),a.jsx("ul",{className:"flex ltr:ml-auto rtl:mr-auto  ",children:a.jsx("button",{className:"inline text-2xl font-semibold",id:"logout_button","data-tooltip-content":"Click to Logout User.",onClick:function(){d(!0)},children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:a.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"})})})})]})}),a.jsx(s,{isOpen:u,onRequestClose:m,style:r,contentLabel:"Example Modal",children:a.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50",children:[a.jsx("button",{onClick:m,type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white",children:a.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:a.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),a.jsxs("div",{class:"p-6 text-center",children:[a.jsxs("div",{className:"w-full flex h-10",children:[" ",a.jsx("span",{className:"mx-auto",children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:a.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"})})})]}),a.jsx("h3",{class:"mb-5 text-lg font-normal text-gray-500 darks:text-gray-400",children:"Are you sure you want to logout ?"}),a.jsx("button",{type:"button",class:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 darks:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",onClick:function(){m(),window.localStorage.removeItem("menuList"),window.localStorage.removeItem("userName"),window.localStorage.removeItem("roles"),window.localStorage.removeItem("token"),window.localStorage.removeItem("device"),window.location.replace("/daily-license-app")},children:"Yes, I'm sure"})]})]})})]})}));var r={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};s.setAppElement("#root")}}}))}();
