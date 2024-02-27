!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var s,l,i,r,a=[],c=!0,o=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(s=i.call(n)).done)&&(a.push(s.value),a.length!==t);c=!0);}catch(e){o=!0,l=e}finally{try{if(!c&&null!=n.return&&(r=n.return(),Object(r)!==r))return}finally{if(o)throw l}}return a}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}System.register(["./index-legacy-wf7z0cRS.js","./react-legacy-B2uxfrw8.js","./index-legacy-dUenYBrB.js","./SelectField-legacy-_JYmpCEx.js","./index-legacy-NuuOs5Ko.js","./formik.esm-legacy-4K34LA0X.js"],(function(t,n){"use strict";var s,l,i,r,a,c,o,d;return{setters:[function(e){s=e.a,l=e.t,i=e.j},function(e){r=e.u,a=e.R,c=e.e},function(e){o=e.P},function(e){d=e.S},null,null],execute:function(){t("default",(function(){var t,n,m=r(),u=e(a.useState(""),2),x=u[0],h=u[1],f=s({api:l.renewalAmendmentSurrender,config:{applicationType:x},value:[x],options:{enabled:!!x}});return i.jsx(o,{title:"Search License Type",children:i.jsxs("div",{className:"p-4",children:[i.jsx(c.Card,{children:i.jsx(c.CardBody,{children:i.jsx("div",{className:"grid grid-cols-1 gap-2",children:i.jsx("div",{children:i.jsxs(d,{label:"Search Type",value:x,onChange:function(e){return h(e.target.value)},children:[i.jsx("option",{value:"",children:"Select"}),i.jsx("option",{value:"RENEWAL",children:"Renewal"}),i.jsx("option",{value:"AMENDMENT",children:"Amendment"}),i.jsx("option",{value:"SURRENDER",children:"Surrender"})]})})})})}),i.jsx("div",{className:"border-t border-gray-200 my-5"}),(null==f||null===(t=f.data)||void 0===t||null===(t=t.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.length)>0?i.jsx(i.Fragment,{children:null==f||null===(n=f.data)||void 0===n||null===(n=n.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.map((function(e,t){return i.jsxs(c.Card,{className:"mt-4 full",children:[i.jsx(c.CardBody,{children:i.jsx("div",{className:"flex justify-between items-center",children:i.jsxs("div",{children:[i.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[i.jsx("h1",{className:"text-sm font-semibold",children:"Application No:"}),i.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.application_no)||"--"})]}),i.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[i.jsx("h1",{className:"text-sm font-semibold",children:"License No : "}),i.jsx("h1",{className:"text-sm truncate w-40",children:(null==e?void 0:e.license_no)||"--"})]}),i.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[i.jsx("h1",{className:"text-sm font-semibold",children:"Firm Name : "}),i.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.firm_name)||"--"})]}),i.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[i.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name : "}),i.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.owner_name)||"--"})]}),i.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[i.jsx("h1",{className:"text-sm font-semibold",children:"Mobile No : "}),i.jsx("h1",{className:"text-sm truncate w-40",children:(null==e?void 0:e.mobile_no)||"--"})]}),i.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[i.jsx("h1",{className:"text-sm font-semibold",children:"Apply Date : "}),i.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.application_date)||"--"})]}),i.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[i.jsx("h1",{className:"text-sm font-semibold",children:"Validity : "}),i.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.valid_upto)||"--"})]})]})})}),i.jsx(c.CardFooter,{className:"-mt-8",children:i.jsx("div",{className:"flex justify-between items-center gap-2 mb-1",children:i.jsxs(c.Button,{onClick:function(){return t=null==e?void 0:e.id,void m("/amc-app/trade/application-details/".concat(t));var t},size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-blue-500",children:["View",i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})})]},t)}))}):i.jsx("div",{className:"flex justify-center",children:i.jsx("h1",{className:"text-lg font-semibold text-gray-700",children:"No Data Found"})})]})})}))}}}))}();
