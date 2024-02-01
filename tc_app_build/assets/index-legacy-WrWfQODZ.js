!function(){function e(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,l){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var t,s,n,i,d=[],r=!0,o=!1;try{if(n=(a=a.call(e)).next,0===l){if(Object(a)!==a)return;r=!1}else for(;!(r=(t=n.call(a)).done)&&(d.push(t.value),d.length!==l);r=!0);}catch(e){o=!0,s=e}finally{try{if(!r&&null!=a.return&&(i=a.return(),Object(i)!==i))return}finally{if(o)throw s}}return d}}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return l(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,l){(null==l||l>e.length)&&(l=e.length);for(var a=0,t=new Array(l);a<l;a++)t[a]=e[a];return t}System.register(["./index-legacy-cI_nx4AF.js","./react-legacy-47VUrxM6.js","./index-legacy-RQcNTJqJ.js"],(function(l,a){"use strict";var t,s,n,i,d,r,o,c,u;return{setters:[function(e){t=e.a,s=e.p,n=e.j,i=e.f},function(e){d=e.R,r=e.h,o=e.e,c=e.L},function(e){u=e.P}],execute:function(){l("default",(function(){var l,a,m=e(d.useState([]),2),v=m[0],p=m[1];d.useState([]);var h=r().id,x=t({api:s.propPaymentHistory,config:{propId:h},value:[h],options:{enabled:!!h}}),j=t({api:s.getPropByHolding,config:{propertyId:h},value:[h],options:{enabled:!!h}});if(d.useEffect((function(){var e,l,a,t,s,n,i,d,r,o,c,u,m;null!=j&&null!==(e=j.data)&&void 0!==e&&e.data&&p([{title:"Holding No",value:null==j||null===(l=j.data)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.holding_no},{title:"Owner Name",value:null==j||null===(a=j.data)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.applicant_name},{title:"Address",value:null==j||null===(t=j.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.prop_address},{title:"Zone",value:null==j||null===(s=j.data)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.zone_name},{title:"Ward No",value:null==j||null===(n=j.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.ward_no},{title:"Ownership Type",value:null==j||null===(i=j.data)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.ownership_type},{title:"Property Type",value:null==j||null===(d=j.data)||void 0===d||null===(d=d.data)||void 0===d?void 0:d.property_type},{title:"Holding Type",value:null==j||null===(r=j.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.holding_type},{title:"Property has Mobile Tower's ?",value:null!=j&&null!==(o=j.data)&&void 0!==o&&null!==(o=o.data)&&void 0!==o&&o.is_mobile_tower?"Yes":"No"},{title:"Property has Hoarding Board's ?",value:(null==j||null===(c=j.data)||void 0===c||null===(c=c.data)||void 0===c?void 0:c.is_hoarding_board)||"NA"},{title:"Is property has a Petrol Pump?",value:null!=j&&null!==(u=j.data)&&void 0!==u&&null!==(u=u.data)&&void 0!==u&&u.is_petrol_pump?"Yes":"No"},{title:"Rainwater harvesting provision",value:null!=j&&null!==(m=j.data)&&void 0!==m&&null!==(m=m.data)&&void 0!==m&&m.is_water_harvesting?"Yes":"No"}])}),[null==j||null===(l=j.data)||void 0===l?void 0:l.data]),null!=x&&x.isLoading)return n.jsx(i,{});return n.jsx(u,{title:"Payment History",children:n.jsxs("div",{className:"p-4",children:[n.jsx(o.Card,{className:"mb-4",children:n.jsxs(o.CardBody,{children:[n.jsx("div",{className:"flex justify-between items-center",children:n.jsx("h1",{className:"text-sm font-semibold",children:"Holding Details"})}),n.jsx("hr",{className:"my-2"}),v.map((function(e,l){return n.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-2",children:[n.jsx("div",{className:"col-span-1",children:n.jsxs("h1",{className:"text-sm font-semibold",children:[e.title,":"]})}),n.jsx("div",{className:"col-span-1",children:n.jsx("p",{className:"text-sm",children:e.value})})]},l)}))]})}),n.jsx(o.Card,{children:n.jsxs(o.CardBody,{children:[n.jsx("div",{className:"flex justify-between items-center",children:n.jsx("h1",{className:"text-sm font-semibold",children:"Payment History"})}),n.jsx("hr",{className:"my-2"}),null==x||null===(a=x.data)||void 0===a||null===(a=a.data)||void 0===a||null===(a=a.Holding)||void 0===a?void 0:a.map((function(e,l){return n.jsxs(d.Fragment,{children:[n.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2 justify-center items-center ",children:[n.jsx("div",{className:"col-span-1",children:n.jsx("h1",{className:"text-sm font-semibold",children:"Transaction No : "})}),n.jsx("div",{className:"col-span-1",children:n.jsx("p",{className:"text-sm",children:null==e?void 0:e.tran_no})}),n.jsx("div",{className:"text-center ",children:n.jsx(c,{to:"/amc-app/property/payment-receipt/".concat(null==e?void 0:e.id),className:"text-xs text-blue-600 border border-blue-600 rounded-md px-2 py-1",children:"Receipt"})})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[n.jsx("div",{className:"col-span-1",children:n.jsx("h1",{className:"text-sm font-semibold",children:"Payment Mode :"})}),n.jsx("div",{className:"col-span-2",children:n.jsx("p",{className:"text-sm",children:null==e?void 0:e.payment_mode})})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[n.jsx("div",{className:"col-span-1",children:n.jsx("h1",{className:"text-sm font-semibold",children:"Date :"})}),n.jsx("div",{className:"col-span-2",children:n.jsx("p",{className:"text-sm",children:null==e?void 0:e.tran_date})})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[n.jsx("div",{className:"col-span-1",children:n.jsx("h1",{className:"text-sm font-semibold",children:"From Final/Year:"})}),n.jsx("div",{className:"col-span-2",children:n.jsx("p",{className:"text-sm",children:null==e?void 0:e.from_fyear})})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[n.jsx("div",{className:"col-span-1",children:n.jsx("h1",{className:"text-sm font-semibold",children:"Upto Final/Year:"})}),n.jsx("div",{className:"col-span-2",children:n.jsx("p",{className:"text-sm",children:null==e?void 0:e.to_fyear})})]}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[n.jsx("div",{className:"col-span-1",children:n.jsx("h1",{className:"text-sm font-semibold",children:"Amount:"})}),n.jsx("div",{className:"col-span-2",children:n.jsx("p",{className:"text-sm",children:null==e?void 0:e.amount})})]}),n.jsx("div",{className:"my-2 border-b-2"})]},l)}))]})})]})})}))}}}))}();
