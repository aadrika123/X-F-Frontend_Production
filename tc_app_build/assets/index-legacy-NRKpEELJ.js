!function(){function e(l){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(l)}function l(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);l&&(s=s.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,s)}return t}function t(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(l){s(e,l,i[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(i,l))}))}return e}function s(l,t,s){var i;return i=function(l,t){if("object"!=e(l)||!l)return l;var s=l[Symbol.toPrimitive];if(void 0!==s){var i=s.call(l,t||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(l)}(t,"string"),(t="symbol"==e(i)?i:String(i))in l?Object.defineProperty(l,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[t]=s,l}System.register(["./index-legacy-JuVu96Kw.js","./formik.esm-legacy-QcpNyZjf.js","./index.esm-legacy-tfyQPZ05.js","./FormProvider-legacy-dunEhK45.js","./TextField-legacy-Wwd2hAxt.js","./SelectField-legacy--xrYJncQ.js","./index-legacy-jS5InKnP.js","./module-legacy-s7Qs4iRq.js","./index-legacy-y6ObR-je.js"],(function(e,l){"use strict";var s,i,n,a,r,o,d,c,m,u,x;return{setters:[function(e){s=e.u,i=e.l,n=e.p,a=e.j,r=e.r},function(e){o=e.u},null,function(e){d=e.F},function(e){c=e.T},function(e){m=e.S},function(e){u=e.P},null,function(e){x=e.S}],execute:function(){e("default",(function(){var e,h,j,b,p,y,N=s(),g=N.collectionReportProperty,w=N.setCollectionReportProperty,S=N.user,O=i({api:null===(e=n)||void 0===e?void 0:e.collectionReport,config:t(t({},g),{},{user:null==S?void 0:S.user_type}),value:[null==g?void 0:g.collectionType,null==g?void 0:g.fromDate,null==g?void 0:g.uptoDate,null==g?void 0:g.wardId,null==g?void 0:g.zoneId,null==g?void 0:g.user,null==g?void 0:g.paymentMode,null==g?void 0:g.page,null==g?void 0:g.perPage],options:{enabled:!(null==g||!g.collectionType)}}),P=o({enableReinitialize:!0,initialValues:g,onSubmit:function(e){w(e)}}),k=P.values,D=i({api:n.getWardByZone,config:{zoneId:k.zoneId},value:[k.zoneId],options:{enabled:!!k.zoneId}});return a.jsx(u,{title:"SAF Verification List",children:a.jsxs("div",{className:"p-4 ",children:[a.jsx(d,{formik:P,children:a.jsx(r.Card,{className:"w-full",children:a.jsxs(r.CardBody,{children:[a.jsx("div",{className:"flex justify-between items-center",children:a.jsx("h1",{className:"font-semibold",children:"SAF Verification"})}),a.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),a.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-2",children:[a.jsxs("div",{className:"col-span-2",children:[a.jsx("div",{className:"flex justify-between items-center px-10 py-2 border rounded-lg bg-gray-200",children:f.map((function(e){var l;return a.jsxs("div",{className:"flex items-center",children:[a.jsx("input",t(t({},P.getFieldProps("collectionType",{value:e.value})),{},{value:e.value,checked:null===(l=k.collectionType)||void 0===l?void 0:l.includes(e.value),id:"checked-checkbox",type:"checkbox",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"})),a.jsx("label",{htmlFor:"checked-checkbox",className:"ms-2 text-sm font-medium text-gray-900 ",children:e.label})]},null==e?void 0:e.id)}))}),a.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"})]}),a.jsx("div",{children:a.jsx(c,{type:"date",label:"From Date",name:"fromDate",formik:P})}),a.jsx("div",{children:a.jsx(c,{type:"date",label:"Upto Date",name:"uptoDate",formik:P})}),a.jsx("div",{className:"-mt-3",children:a.jsxs(m,{name:"zoneId",formik:P,children:[a.jsx("option",{value:"",children:"select"}),l.map((function(e){return a.jsx("option",{value:e.value,children:e.label},e.id)}))]})}),a.jsx("div",{className:"-mt-3",children:a.jsxs(m,{formik:P,name:"wardId",children:[a.jsx("option",{value:"1",children:"select"}),null==D||null===(h=D.data)||void 0===h||null===(h=h.data)||void 0===h?void 0:h.map((function(e){return a.jsx("option",{value:e.id,children:e.ward_name},e.id)}))]})}),a.jsx("div",{className:" col-span-2",children:a.jsxs(m,{formik:P,name:"paymentMode",children:[a.jsx("option",{value:"",children:"select"}),null==v?void 0:v.map((function(e){return a.jsx("option",{value:e.value,children:e.label},e.id)}))]})})]}),a.jsx("div",{className:"flex justify-end mt-4",children:a.jsx(r.Button,{type:"submit",color:"blue",fullWidth:!0,children:"Search"})})]})})}),a.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),a.jsx(x,{active:g,noOfPage:null==O||null===(j=O.data)||void 0===j||null===(j=j.data)||void 0===j?void 0:j.total,setActive:w}),a.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),null!=O&&O.isLoading?a.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"Loading..."}):a.jsx(a.Fragment,{children:a.jsxs("div",{className:"py-2 mt-4",children:[a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h1",{className:"font-semibold text-sm",children:"Collection Report"}),a.jsxs("h1",{className:"font-semibold text-sm text-green-700",children:["Total Amount: ",null==O||null===(b=O.data)||void 0===b||null===(b=b.data)||void 0===b?void 0:b.totalAmt]})]}),a.jsx("div",{children:(null==O||null===(p=O.data)||void 0===p||null===(p=p.data)||void 0===p||null===(p=p.data)||void 0===p?void 0:p.length)>0?null==O||null===(y=O.data)||void 0===y||null===(y=y.data)||void 0===y||null===(y=y.data)||void 0===y?void 0:y.map((function(e,l){return a.jsx(r.Card,{className:"mt-2 full",children:a.jsx(r.CardBody,{children:a.jsx("div",{className:"flex justify-between items-center",children:a.jsxs("div",{children:[a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsx("h1",{className:"text-sm font-semibold",children:"Holding No:"}),a.jsx("h1",{className:"text-sm",children:null==e?void 0:e.holding_no})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["SAF No :"," "]}),a.jsx("h1",{className:"text-sm truncate w-40",children:(null==e?void 0:e.saf_no)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Property No :"," "]}),a.jsx("h1",{className:"text-sm",children:null==e?void 0:e.property_no})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Ward No :"," "]}),a.jsx("h1",{className:"text-sm",children:null==e?void 0:e.ward_no})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Mobile No :"," "]}),a.jsx("h1",{className:"text-sm truncate w-40",children:null==e?void 0:e.mobile_no})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Tran No :"," "]}),a.jsx("h1",{className:"text-sm",children:null==e?void 0:e.tran_no})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Duration:"," "]}),a.jsx("h1",{className:"text-sm",children:null==e?void 0:e.from_upto_fy_qtr})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Tran Date:"," "]}),a.jsx("h1",{className:"text-sm",children:null==e?void 0:e.tran_date})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsx("h1",{className:"text-sm font-semibold",children:"Mode: "}),a.jsx("h1",{className:"text-sm",children:null==e?void 0:e.transaction_mode})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsx("h1",{className:"text-sm font-semibold",children:"Mode: "}),a.jsx("h1",{className:"text-sm",children:null==e?void 0:e.amount})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Collector Name:"," "]}),a.jsx("h1",{className:"text-sm",children:null==e?void 0:e.emp_name})]})]})})})},l)})):a.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"No Data Found"})})]})})]})})}));var l=[{id:1,label:"Zone A-East",value:"1"},{id:2,label:"Zone B-West",value:"2"},{id:3,label:"Zone C-North",value:"3"},{id:4,label:"Zone D-South",value:"4"}],f=[{id:1,label:"Property",value:"property"},{id:2,label:"Saf",value:"saf"}],v=[{id:1,label:"Cash",value:"CASH"},{id:2,label:"Cheque",value:"CHEQUE"},{id:3,label:"DD",value:"DD"},{id:4,label:"Online",value:"ONLINE"}]}}}))}();
