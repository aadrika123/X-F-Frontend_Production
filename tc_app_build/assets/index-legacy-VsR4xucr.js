!function(){function e(e,l){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var n,a,r,i,s=[],c=!0,d=!1;try{if(r=(l=l.call(e)).next,0===t){if(Object(l)!==l)return;c=!1}else for(;!(c=(n=r.call(l)).done)&&(s.push(n.value),s.length!==t);c=!0);}catch(e){d=!0,a=e}finally{try{if(!c&&null!=l.return&&(i=l.return(),Object(i)!==i))return}finally{if(d)throw a}}return s}}(e,l)||function(e,l){if(!e)return;if("string"==typeof e)return t(e,l);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,l)}(e,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}System.register(["./index-legacy-R4QqfF9d.js","./router-legacy-rigPOyFI.js","./tailwind-legacy-e6PAgAmt.js","./index-legacy-UtAP110M.js","./TextField-legacy-IhaPUqZ4.js","./SelectField-legacy-nnihkz9J.js","./index-legacy-vtVAGFCF.js","./reactQuery-legacy-jKPiMKrc.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-ELZmKVKq.js","./headlessui-legacy-Yu0VJXN1.js","./formik.esm-legacy-LafwCeEO.js","./customInputValidation-legacy-1dLT3o3X.js"],(function(t,l){"use strict";var n,a,r,i,s,c,d,o,u,m;return{setters:[function(e){n=e.a,a=e.t,r=e.j,i=e.Q},function(e){s=e.u,c=e.d},function(e){d=e.r},function(e){o=e.P},function(e){u=e.T},function(e){m=e.S},null,null,null,null,null,null,null,null],execute:function(){t("default",(function(){var t,l,x,v,y,j,f,p=s(),g=e(c.useState(""),2),h=g[0],N=g[1],b=e(c.useState("2"),2),S=b[0],A=b[1],w=n({api:null===(t=a)||void 0===t?void 0:t.tradeSearchApp,config:{licenceNo:h,applicationType:S},options:{enabled:!1}}),C=w.data,E=(w.isLoading,w.error,w.refetch);return r.jsx(o,{title:"Search Application",children:r.jsxs("div",{className:"p-4",children:[r.jsx(d.Card,{children:r.jsx(d.CardBody,{children:r.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[r.jsx("div",{children:r.jsxs(m,{label:"Search Type",value:S,onChange:function(e){return A(e.target.value)},children:[r.jsx("option",{value:"2",children:"Renewal"}),r.jsx("option",{value:"3",children:"Surrender"}),r.jsx("option",{value:"4",children:"Amendment"})]})}),r.jsx("div",{children:r.jsx(u,{label:"License No",value:h,onChange:function(e){return N(e.target.value)}})}),r.jsx("div",{className:"flex justify-center",children:r.jsx(d.Button,{size:"sm",color:"blue-gray",onClick:function(){h?E():i.error("Please enter license no.")},children:"Search"})})]})})}),r.jsx("div",{className:"border-t-2 border-gray-200 my-4"}),null!=C&&C.status?r.jsx(d.Card,{className:"overflow-x-auto",children:r.jsxs(d.CardBody,{children:[r.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[r.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Firm Name :"}),r.jsx("div",{className:"text-sm text-gray-500",children:null==C||null===(l=C.data)||void 0===l?void 0:l.firm_name}),r.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Application No :"}),r.jsx("div",{className:"text-sm text-gray-500",children:null==C||null===(x=C.data)||void 0===x?void 0:x.application_no}),r.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"License No."}),r.jsx("div",{className:"text-sm text-gray-500",children:null==C||null===(v=C.data)||void 0===v?void 0:v.license_no}),r.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Ward No."}),r.jsx("div",{className:"text-sm text-gray-500",children:null==C||null===(y=C.data)||void 0===y?void 0:y.ward_no}),r.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Address."}),r.jsx("div",{className:"text-sm text-gray-500 w-42 truncate",children:null==C||null===(j=C.data)||void 0===j?void 0:j.address}),r.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Validity."}),r.jsx("div",{className:"text-sm text-gray-500 w-42 truncate",children:null==C||null===(f=C.data)||void 0===f?void 0:f.valid_upto})]}),r.jsx("div",{className:"border-t-2 border-gray-200 my-4"}),r.jsx("div",{className:"col-span-2 flex justify-center",children:r.jsx(d.Button,{size:"sm",color:"blue",onClick:function(){var e,t,l;"2"===S&&p("/amc-app/trade/renewal-application?app-type=RENEWAL&license-id=".concat(null==C||null===(e=C.data)||void 0===e?void 0:e.id)),"3"===S&&p("/amc-app/trade/surrender-application?app-type=SURRENDER&license-id=".concat(null==C||null===(t=C.data)||void 0===t?void 0:t.id)),"4"===S&&p("/amc-app/trade/amendment-application?app-type=AMENDMENT&license-id=".concat(null==C||null===(l=C.data)||void 0===l?void 0:l.id))},children:"View"})})]})}):r.jsx("div",{className:"text-center text-red-900 mt-32",children:null==C?void 0:C.message})]})})}))}}}))}();
