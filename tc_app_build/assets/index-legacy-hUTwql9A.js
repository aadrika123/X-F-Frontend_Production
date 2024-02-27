!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,l){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,n,s,i,r=[],d=!0,c=!1;try{if(s=(t=t.call(e)).next,0===l){if(Object(t)!==t)return;d=!1}else for(;!(d=(a=s.call(t)).done)&&(r.push(a.value),r.length!==l);d=!0);}catch(e){c=!0,n=e}finally{try{if(!d&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw n}}return r}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,a=new Array(l);t<l;t++)a[t]=e[t];return a}System.register(["./index-legacy-wf7z0cRS.js","./react-legacy-B2uxfrw8.js","./index-legacy-dUenYBrB.js"],(function(l,t){"use strict";var a,n,s,i,r,d,c,o,m;return{setters:[function(e){a=e.a,n=e.w,s=e.j,i=e.f},function(e){r=e.R,d=e.h,c=e.e,o=e.L},function(e){m=e.P}],execute:function(){l("default",(function(){var l,t,u,v=e(r.useState([]),2),x=v[0],h=v[1];r.useState([]);var j=d().id,p=a({api:n.waterGetDetails,config:{applicationId:j},value:[j],options:{enabled:!!j}}),f=a({api:n.waterPaymentHistory,config:{consumerId:j},value:[j],options:{enabled:!!j}});if(r.useEffect((function(){var e,l,t,a,n,s,i;null!=p&&null!==(e=p.data)&&void 0!==e&&e.data&&h([{title:"Consumer No",value:null==p||null===(l=p.data)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.consumer_no},{title:"Owner Name",value:null==p||null===(t=p.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.applicant_name},{title:"Meter No",value:null==p||null===(a=p.data)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.meter_no},{title:"Property No",value:null==p||null===(n=p.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.property_no},{title:"Zone",value:null==p||null===(s=p.data)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.zone_name},{title:"Ward No",value:null==p||null===(i=p.data)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.ward_number}])}),[null==p||null===(l=p.data)||void 0===l?void 0:l.data]),null!=p&&p.isLoading)return s.jsx(i,{});return s.jsx(m,{title:"Payment History",children:s.jsxs("div",{className:"p-4",children:[s.jsx(c.Card,{className:"mb-4",children:s.jsxs(c.CardBody,{children:[s.jsx("div",{className:"flex justify-between items-center",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Consumer Details"})}),s.jsx("hr",{className:"my-2"}),x.map((function(e,l){return s.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsxs("h1",{className:"text-sm font-semibold",children:[e.title,":"]})}),s.jsx("div",{className:"col-span-1",children:s.jsx("p",{className:"text-sm",children:(null==e?void 0:e.value)||"--"})})]},l)}))]})}),s.jsx(c.Card,{children:s.jsxs(c.CardBody,{children:[s.jsx("div",{className:"flex justify-between items-center",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Payment History"})}),s.jsx("hr",{className:"my-2"}),(null==f||null===(t=f.data)||void 0===t||null===(t=t.data)||void 0===t||null===(t=t.Consumer)||void 0===t?void 0:t.length)>0?s.jsx(s.Fragment,{children:null==f||null===(u=f.data)||void 0===u||null===(u=u.data)||void 0===u||null===(u=u.Consumer)||void 0===u?void 0:u.map((function(e,l){return s.jsxs(r.Fragment,{children:[s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2 justify-center items-center ",children:[s.jsx("div",{className:"col-span-1",children:s.jsxs("h1",{className:"text-sm font-semibold",children:["Transaction No :"," "]})}),s.jsx("div",{className:"col-span-1",children:s.jsx("p",{className:"text-sm",children:null==e?void 0:e.tran_no})}),s.jsx("div",{className:"text-center ",children:s.jsx(o,{to:"/amc-app/water/water-payment-receipt/".concat(null==e?void 0:e.id),className:"text-xs text-blue-600 border border-blue-600 rounded-md px-2 py-1",children:"Receipt"})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Payment Mode :"})}),s.jsx("div",{className:"col-span-2",children:s.jsx("p",{className:"text-sm",children:null==e?void 0:e.payment_mode})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Date :"})}),s.jsx("div",{className:"col-span-2",children:s.jsx("p",{className:"text-sm",children:null==e?void 0:e.tran_date})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-sm font-semibold",children:"TYPE:"})}),s.jsx("div",{className:"col-span-2",children:s.jsx("p",{className:"text-sm",children:null==e?void 0:e.tran_type})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Amount:"})}),s.jsx("div",{className:"col-span-2",children:s.jsx("p",{className:"text-sm",children:null==e?void 0:e.amount})})]}),s.jsx("div",{className:"my-2 border-b-2"})]},l)}))}):s.jsx("div",{className:"flex justify-center items-center",children:s.jsx("h1",{className:"text-sm font-semibold text-red-900 text-center",children:"Water Application's Transaction Details Not Found!!"})})]})})]})})}))}}}))}();
