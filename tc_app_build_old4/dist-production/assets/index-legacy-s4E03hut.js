!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,l){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,s,i,r=[],d=!0,c=!1;try{if(s=(t=t.call(e)).next,0===l){if(Object(t)!==t)return;d=!1}else for(;!(d=(n=s.call(t)).done)&&(r.push(n.value),r.length!==l);d=!0);}catch(e){c=!0,a=e}finally{try{if(!d&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw a}}return r}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,n=new Array(l);t<l;t++)n[t]=e[t];return n}System.register(["./index-legacy-pbe08veb.js","./index-legacy-76AzclQp.js"],(function(l,t){"use strict";var n,a,s,i,r,d,c,o,m;return{setters:[function(e){n=e.R,a=e.m,s=e.l,i=e.j,r=e.n,d=e.r,c=e.L,o=e.w},function(e){m=e.P}],execute:function(){l("default",(function(){var l,t,u,v=e(n.useState([]),2),x=v[0],h=v[1];n.useState([]);var j=a().id,p=s({api:o.waterGetDetails,config:{applicationId:j},value:[j],options:{enabled:!!j}}),f=s({api:o.waterPaymentHistory,config:{consumerId:j},value:[j],options:{enabled:!!j}});if(n.useEffect((function(){var e,l,t,n,a,s,i;null!=p&&null!==(e=p.data)&&void 0!==e&&e.data&&h([{title:"Consumer No",value:null==p||null===(l=p.data)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.consumer_no},{title:"Owner Name",value:null==p||null===(t=p.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.applicant_name},{title:"Meter No",value:null==p||null===(n=p.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.meter_no},{title:"Property No",value:null==p||null===(a=p.data)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.property_no},{title:"Zone",value:null==p||null===(s=p.data)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.zone_name},{title:"Ward No",value:null==p||null===(i=p.data)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.ward_number}])}),[null==p||null===(l=p.data)||void 0===l?void 0:l.data]),null!=p&&p.isLoading)return i.jsx(r,{});return i.jsx(m,{title:"Payment History",children:i.jsxs("div",{className:"p-4",children:[i.jsx(d.Card,{className:"mb-4",children:i.jsxs(d.CardBody,{children:[i.jsx("div",{className:"flex justify-between items-center",children:i.jsx("h1",{className:"text-sm font-semibold",children:"Consumer Details"})}),i.jsx("hr",{className:"my-2"}),x.map((function(e,l){return i.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-2",children:[i.jsx("div",{className:"col-span-1",children:i.jsxs("h1",{className:"text-sm font-semibold",children:[e.title,":"]})}),i.jsx("div",{className:"col-span-1",children:i.jsx("p",{className:"text-sm",children:(null==e?void 0:e.value)||"--"})})]},l)}))]})}),i.jsx(d.Card,{children:i.jsxs(d.CardBody,{children:[i.jsx("div",{className:"flex justify-between items-center",children:i.jsx("h1",{className:"text-sm font-semibold",children:"Payment History"})}),i.jsx("hr",{className:"my-2"}),(null==f||null===(t=f.data)||void 0===t||null===(t=t.data)||void 0===t||null===(t=t.Consumer)||void 0===t?void 0:t.length)>0?i.jsx(i.Fragment,{children:null==f||null===(u=f.data)||void 0===u||null===(u=u.data)||void 0===u||null===(u=u.Consumer)||void 0===u?void 0:u.map((function(e,l){return i.jsxs(n.Fragment,{children:[i.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2 justify-center items-center ",children:[i.jsx("div",{className:"col-span-1",children:i.jsxs("h1",{className:"text-sm font-semibold",children:["Transaction No :"," "]})}),i.jsx("div",{className:"col-span-1",children:i.jsx("p",{className:"text-sm",children:null==e?void 0:e.tran_no})}),i.jsx("div",{className:"text-center ",children:i.jsx(c,{to:"/amc-app/property/payment-receipt/".concat(null==e?void 0:e.id),className:"text-xs text-blue-600 border border-blue-600 rounded-md px-2 py-1",children:"Receipt"})})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[i.jsx("div",{className:"col-span-1",children:i.jsx("h1",{className:"text-sm font-semibold",children:"Payment Mode :"})}),i.jsx("div",{className:"col-span-2",children:i.jsx("p",{className:"text-sm",children:null==e?void 0:e.payment_mode})})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[i.jsx("div",{className:"col-span-1",children:i.jsx("h1",{className:"text-sm font-semibold",children:"Date :"})}),i.jsx("div",{className:"col-span-2",children:i.jsx("p",{className:"text-sm",children:null==e?void 0:e.tran_date})})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[i.jsx("div",{className:"col-span-1",children:i.jsx("h1",{className:"text-sm font-semibold",children:"TYPE:"})}),i.jsx("div",{className:"col-span-2",children:i.jsx("p",{className:"text-sm",children:null==e?void 0:e.tran_type})})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[i.jsx("div",{className:"col-span-1",children:i.jsx("h1",{className:"text-sm font-semibold",children:"Amount:"})}),i.jsx("div",{className:"col-span-2",children:i.jsx("p",{className:"text-sm",children:null==e?void 0:e.amount})})]}),i.jsx("div",{className:"my-2 border-b-2"})]},l)}))}):i.jsx("div",{className:"flex justify-center items-center",children:i.jsx("h1",{className:"text-sm font-semibold text-red-900 text-center",children:"Water Application's Transaction Details Not Found!!"})})]})})]})})}))}}}))}();
