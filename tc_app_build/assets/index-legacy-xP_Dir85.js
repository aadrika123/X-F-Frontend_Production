!function(){function e(e,l){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,s,a,i,r=[],c=!0,o=!1;try{if(a=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;c=!1}else for(;!(c=(n=a.call(l)).done)&&(r.push(n.value),r.length!==t);c=!0);}catch(e){o=!0,s=e}finally{try{if(!c&&null!=l.return&&(i=l.return(),Object(i)!==i))return}finally{if(o)throw s}}return r}}(e,l)||function(e,l){if(!e)return;if("string"==typeof e)return t(e,l);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,l)}(e,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}System.register(["./index-legacy-e5jDIJ7v.js","./router-legacy-kOAqN8oI.js","./index-legacy-JBeNDdiK.js","./SelectField-legacy-ArjD7CHD.js","./TranslateField-legacy--lpTz8hS.js","./tailwind-legacy-Cj8YFuLD.js","./reactQuery-legacy-GzPKeAE1.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-xgqmug7p.js","./headlessui-legacy-7mFRxZdX.js","./formik.esm-legacy-XdfQijo5.js"],(function(t,l){"use strict";var n,s,a,i,r,c,o,d;return{setters:[function(e){n=e.b,s=e.t,a=e.j},function(e){i=e.e,r=e.d},function(e){c=e.P},function(e){o=e.S},null,function(e){d=e.r},null,null,null,null,null],execute:function(){t("default",(function(){var t,l,u=i(),m=e(r.useState(""),2),x=m[0],h=m[1],j=n({api:s.renewalAmendmentSurrender,config:{applicationType:x},value:[x],options:{enabled:!!x}});return a.jsx(c,{title:"Search License Type",children:a.jsxs("div",{className:"p-4",children:[a.jsx(d.Card,{children:a.jsx(d.CardBody,{children:a.jsx("div",{className:"grid grid-cols-1 gap-2",children:a.jsx("div",{children:a.jsxs(o,{label:"Search Type",value:x,onChange:function(e){return h(e.target.value)},children:[a.jsx("option",{value:"",children:"Select"}),a.jsx("option",{value:"RENEWAL",children:"Renewal"}),a.jsx("option",{value:"AMENDMENT",children:"Amendment"}),a.jsx("option",{value:"SURRENDER",children:"Surrender"})]})})})})}),a.jsx("div",{className:"border-t border-gray-200 my-5"}),(null==j||null===(t=j.data)||void 0===t||null===(t=t.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.length)>0?a.jsx(a.Fragment,{children:null==j||null===(l=j.data)||void 0===l||null===(l=l.data)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.map((function(e,t){return a.jsxs(d.Card,{className:"mt-4 full",children:[a.jsx(d.CardBody,{children:a.jsx("div",{className:"flex justify-between items-center",children:a.jsxs("div",{children:[a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsx("h1",{className:"text-sm font-semibold",children:"Application No:"}),a.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.application_no)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsx("h1",{className:"text-sm font-semibold",children:"License No : "}),a.jsx("h1",{className:"text-sm truncate w-40",children:(null==e?void 0:e.license_no)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsx("h1",{className:"text-sm font-semibold",children:"Firm Name : "}),a.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.firm_name)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name : "}),a.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.owner_name)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsx("h1",{className:"text-sm font-semibold",children:"Mobile No : "}),a.jsx("h1",{className:"text-sm truncate w-40",children:(null==e?void 0:e.mobile_no)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsx("h1",{className:"text-sm font-semibold",children:"Apply Date : "}),a.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.application_date)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsx("h1",{className:"text-sm font-semibold",children:"Validity : "}),a.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.valid_upto)||"--"})]})]})})}),a.jsx(d.CardFooter,{className:"-mt-8",children:a.jsx("div",{className:"flex justify-between items-center gap-2 mb-1",children:a.jsxs(d.Button,{onClick:function(){return t=null==e?void 0:e.id,void u("/amc-app/trade/application-details/".concat(t));var t},size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-blue-500",children:["View",a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})})]},t)}))}):a.jsx("div",{className:"flex justify-center",children:a.jsx("h1",{className:"text-lg font-semibold text-gray-700",children:"No Data Found"})})]})})}))}}}))}();
