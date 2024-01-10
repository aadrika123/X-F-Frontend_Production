!function(){function e(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,l){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var s,t,n,i,d=[],r=!0,o=!1;try{if(n=(a=a.call(e)).next,0===l){if(Object(a)!==a)return;r=!1}else for(;!(r=(s=n.call(a)).done)&&(d.push(s.value),d.length!==l);r=!0);}catch(e){o=!0,t=e}finally{try{if(!r&&null!=a.return&&(i=a.return(),Object(i)!==i))return}finally{if(o)throw t}}return d}}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return l(e,a);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return l(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,l){(null==l||l>e.length)&&(l=e.length);for(var a=0,s=new Array(l);a<l;a++)s[a]=e[a];return s}System.register(["./index-legacy-0Ibv_WCR.js","./index-legacy-dG0hqyeb.js"],(function(l,a){"use strict";var s,t,n,i,d,r,o,c,u;return{setters:[function(e){s=e.R,t=e.m,n=e.l,i=e.j,d=e.n,r=e.r,o=e.L,c=e.p},function(e){u=e.P}],execute:function(){l("default",(function(){var l,a,m=e(s.useState([]),2),v=m[0],p=m[1];s.useState([]);var x=t().id,h=n({api:c.propPaymentHistory,config:{propId:x},value:[x],options:{enabled:!!x}}),j=n({api:c.getPropByHolding,config:{propertyId:x},value:[x],options:{enabled:!!x}});if(s.useEffect((function(){var e,l,a,s,t,n,i,d,r,o,c,u,m;null!=j&&null!==(e=j.data)&&void 0!==e&&e.data&&p([{title:"Holding No",value:null==j||null===(l=j.data)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.holding_no},{title:"Owner Name",value:null==j||null===(a=j.data)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.applicant_name},{title:"Address",value:null==j||null===(s=j.data)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.prop_address},{title:"Zone",value:null==j||null===(t=j.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.zone_name},{title:"Ward No",value:null==j||null===(n=j.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.ward_no},{title:"Ownership Type",value:null==j||null===(i=j.data)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.ownership_type},{title:"Property Type",value:null==j||null===(d=j.data)||void 0===d||null===(d=d.data)||void 0===d?void 0:d.property_type},{title:"Holding Type",value:null==j||null===(r=j.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.holding_type},{title:"Property has Mobile Tower's ?",value:null!=j&&null!==(o=j.data)&&void 0!==o&&null!==(o=o.data)&&void 0!==o&&o.is_mobile_tower?"Yes":"No"},{title:"Property has Hoarding Board's ?",value:(null==j||null===(c=j.data)||void 0===c||null===(c=c.data)||void 0===c?void 0:c.is_hoarding_board)||"NA"},{title:"Is property has a Petrol Pump?",value:null!=j&&null!==(u=j.data)&&void 0!==u&&null!==(u=u.data)&&void 0!==u&&u.is_petrol_pump?"Yes":"No"},{title:"Rainwater harvesting provision",value:null!=j&&null!==(m=j.data)&&void 0!==m&&null!==(m=m.data)&&void 0!==m&&m.is_water_harvesting?"Yes":"No"}])}),[null==j||null===(l=j.data)||void 0===l?void 0:l.data]),null!=h&&h.isLoading)return i.jsx(d,{});return i.jsx(u,{title:"Payment History",children:i.jsxs("div",{className:"p-4",children:[i.jsx(r.Card,{className:"mb-4",children:i.jsxs(r.CardBody,{children:[i.jsx("div",{className:"flex justify-between items-center",children:i.jsx("h1",{className:"text-sm font-semibold",children:"Holding Details"})}),i.jsx("hr",{className:"my-2"}),v.map((function(e,l){return i.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-2",children:[i.jsx("div",{className:"col-span-1",children:i.jsxs("h1",{className:"text-sm font-semibold",children:[e.title,":"]})}),i.jsx("div",{className:"col-span-1",children:i.jsx("p",{className:"text-sm",children:e.value})})]},l)}))]})}),i.jsx(r.Card,{children:i.jsxs(r.CardBody,{children:[i.jsx("div",{className:"flex justify-between items-center",children:i.jsx("h1",{className:"text-sm font-semibold",children:"Payment History"})}),i.jsx("hr",{className:"my-2"}),null==h||null===(a=h.data)||void 0===a||null===(a=a.data)||void 0===a||null===(a=a.Holding)||void 0===a?void 0:a.map((function(e,l){return i.jsxs(s.Fragment,{children:[i.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2 justify-center items-center ",children:[i.jsx("div",{className:"col-span-1",children:i.jsx("h1",{className:"text-sm font-semibold",children:"Transaction No : "})}),i.jsx("div",{className:"col-span-1",children:i.jsx("p",{className:"text-sm",children:null==e?void 0:e.tran_no})}),i.jsx("div",{className:"text-center ",children:i.jsx(o,{to:"/amc-app/property/payment-receipt/".concat(null==e?void 0:e.id),className:"text-xs text-blue-600 border border-blue-600 rounded-md px-2 py-1",children:"Receipt"})})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[i.jsx("div",{className:"col-span-1",children:i.jsx("h1",{className:"text-sm font-semibold",children:"Payment Mode :"})}),i.jsx("div",{className:"col-span-2",children:i.jsx("p",{className:"text-sm",children:null==e?void 0:e.payment_mode})})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[i.jsx("div",{className:"col-span-1",children:i.jsx("h1",{className:"text-sm font-semibold",children:"Date :"})}),i.jsx("div",{className:"col-span-2",children:i.jsx("p",{className:"text-sm",children:null==e?void 0:e.tran_date})})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[i.jsx("div",{className:"col-span-1",children:i.jsx("h1",{className:"text-sm font-semibold",children:"From Final/Year:"})}),i.jsx("div",{className:"col-span-2",children:i.jsx("p",{className:"text-sm",children:null==e?void 0:e.from_fyear})})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[i.jsx("div",{className:"col-span-1",children:i.jsx("h1",{className:"text-sm font-semibold",children:"Upto Final/Year:"})}),i.jsx("div",{className:"col-span-2",children:i.jsx("p",{className:"text-sm",children:null==e?void 0:e.to_fyear})})]}),i.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[i.jsx("div",{className:"col-span-1",children:i.jsx("h1",{className:"text-sm font-semibold",children:"Amount:"})}),i.jsx("div",{className:"col-span-2",children:i.jsx("p",{className:"text-sm",children:null==e?void 0:e.amount})})]}),i.jsx("div",{className:"my-2 border-b-2"})]},l)}))]})})]})})}))}}}))}();
