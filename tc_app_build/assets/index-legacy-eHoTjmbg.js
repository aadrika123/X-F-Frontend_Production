!function(){function e(i){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(i)}function i(e,i){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),l.push.apply(l,t)}return l}function l(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?i(Object(n),!0).forEach((function(i){t(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function t(i,l,t){var n;return n=function(i,l){if("object"!=e(i)||!i)return i;var t=i[Symbol.toPrimitive];if(void 0!==t){var n=t.call(i,l||"default");if("object"!=e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===l?String:Number)(i)}(l,"string"),(l="symbol"==e(n)?n:String(n))in i?Object.defineProperty(i,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[l]=t,i}System.register(["./index-legacy-v2qFtUJU.js","./router-legacy-rigPOyFI.js","./tailwind-legacy-e6PAgAmt.js","./index.esm-legacy-Pf4e6Mnq.js","./TextField-legacy-JkeAT8vG.js","./SelectField-legacy-YdIIj6Gh.js","./index-legacy-vtVAGFCF.js","./index-legacy-3NWst4mJ.js","./index-legacy-tWw1fTbn.js","./usePathWisePermission-legacy-JZfiRTAA.js","./reactQuery-legacy-jKPiMKrc.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-ELZmKVKq.js","./headlessui-legacy-Yu0VJXN1.js","./formik.esm-legacy-LafwCeEO.js","./ArrowRightIcon-legacy-O7aY2XEJ.js"],(function(e,i){"use strict";var n,r,s,a,c,o,d,u,h,x,m,v,f;return{setters:[function(e){n=e.u,r=e.a,s=e.p,a=e.j},function(e){c=e.f,o=e.u},function(e){d=e.r},function(e){u=e.I},function(e){h=e.T},function(e){x=e.S},null,function(e){m=e.P},function(e){v=e.S},function(e){f=e.u},null,null,null,null,null,null,null],execute:function(){e("default",(function(){var e,g,j,y,p,b,N,w,_,S=c().pathname,V=f(S).result,P=n(),O=o(),k=r({api:s.safInbox,config:t(t(t({},null==P||null===(e=P.searchVerification)||void 0===e?void 0:e.searchBy,null==P?void 0:P.searchVerification.search),"page",null==P?void 0:P.searchVerification.page),"perPage",null==P?void 0:P.searchVerification.perPage),value:[null==P||null===(g=P.searchVerification)||void 0===g?void 0:g.page,null==P||null===(j=P.searchVerification)||void 0===j?void 0:j.perPage],options:{enabled:!(null==P||null===(y=P.searchVerification)||void 0===y||!y.page)}}),B=k.data,C=k.refetch,F=k.isFetching;k.isLoading,k.isPending;return a.jsx(m,{title:"SAF Verification List",children:a.jsxs("div",{className:"p-4 ",children:[a.jsx(d.Card,{className:"w-full",children:a.jsxs(d.CardBody,{children:[a.jsxs("div",{className:"flex justify-between items-center",children:[a.jsx("h1",{className:"font-semibold",children:"SAF Verification"}),a.jsxs("div",{className:"items-center flex justify-start px-2 py-1 border rounded-lg gap-1 cursor-pointer",onClick:function(){null==P||P.setSearchVerification({searchBy:"",setSearchBy:"",search:"",setSearch:"",page:1,perPage:10}),C()},children:[a.jsx(u,{size:"1.2rem",className:"cursor-pointer text-blue-600"}),a.jsx("small",{className:" text-blue-600 ",children:"Reset"})]})]}),a.jsx("div",{className:"my-2 border-b-2"}),a.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-3",children:[a.jsx("div",{children:a.jsxs(x,{label:"Search By",value:null==P||null===(p=P.searchVerification)||void 0===p?void 0:p.searchBy,onChange:function(e){null==P||P.setSearchVerification(l(l({},null==P?void 0:P.searchVerification),{},{searchBy:e.target.value}))},name:"searchBy",children:[a.jsx("option",{value:"",children:"Select"}),i.map((function(e){return a.jsx("option",{value:null==e?void 0:e.value,children:null==e?void 0:e.label},null==e?void 0:e.id)}))]})}),a.jsx("div",{children:a.jsx(h,{label:"Search",name:"search",value:null==P||null===(b=P.searchVerification)||void 0===b?void 0:b.search,onChange:function(e){null==P||P.setSearchVerification(l(l({},null==P?void 0:P.searchVerification),{},{search:e.target.value}))}})})]}),a.jsx(d.Button,{color:"blue",onClick:function(){null==P||P.setSearchVerification(l(l({},null==P?void 0:P.searchVerification),{},{page:1})),C()},fullWidth:!0,children:"Search"})]})}),F?a.jsx("div",{className:"flex justify-center items-center py-52",children:a.jsx("h1",{children:"Loading..."})}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"border-b-2 border-gray-300 w-full py-2"}),(null==B||null===(N=B.data)||void 0===N||null===(N=N.data)||void 0===N?void 0:N.length)>0?null==B||null===(w=B.data)||void 0===w||null===(w=w.data)||void 0===w?void 0:w.map((function(e,i){var l,t,n;return a.jsxs(d.Card,{className:"mt-4 full",children:[a.jsx(d.CardBody,{children:a.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[a.jsxs("div",{className:"grid grid-cols-2 items-start",children:[a.jsx("div",{children:a.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"SAF No :"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-sm  text-gray-600",children:null==e?void 0:e.saf_no})})]}),a.jsxs("div",{className:"grid grid-cols-2 items-start",children:[a.jsx("div",{children:a.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Name :"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-sm  text-gray-600 truncate w-40",children:null==e?void 0:e.owner_name})})]}),a.jsxs("div",{className:"grid grid-cols-2 items-start",children:[a.jsx("div",{children:a.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Ward :"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-sm  text-gray-600",children:null==e?void 0:e.ward_no})})]}),a.jsxs("div",{className:"grid grid-cols-2 items-start",children:[a.jsx("div",{children:a.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Assessment Type :"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-sm  text-gray-600",children:null==e?void 0:e.assessment})})]}),a.jsxs("div",{className:"grid grid-cols-2 items-start",children:[a.jsx("div",{children:a.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Mobile No :"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-sm  text-gray-600 truncate w-40",children:null==e?void 0:e.mobile_no})})]}),a.jsxs("div",{className:"grid grid-cols-2 items-start",children:[a.jsx("div",{children:a.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Property Type :"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-sm  text-gray-600 lowercase ",children:null==e?void 0:e.property_type})})]}),a.jsxs("div",{className:"grid grid-cols-2 items-start",children:[a.jsx("div",{children:a.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Verification Status :"})}),a.jsxs("div",{children:[7==(null==P||null===(l=P.user)||void 0===l||null===(l=l.roleWithId[0])||void 0===l?void 0:l.role_id)&&(null==e||!e.is_agency_verified||null!=e&&e.is_field_verified?null!=e&&e.is_field_verified?a.jsx(a.Fragment,{children:a.jsx("h1",{className:"text-xs text-indigo-500 font-semibold ",children:"Pending Sanction Plan Verification"})}):a.jsx("h1",{className:"text-xs text-red-500 font-semibold",children:"Not Verified"}):a.jsx("h1",{className:"text-xs text-green-500 font-semibold  w-40",children:"Verified by TC"})),5==(null==P||null===(t=P.user)||void 0===t||null===(t=t.roleWithId[0])||void 0===t?void 0:t.role_id)&&(null==e||!e.is_agency_verified||null!=e&&e.is_geo_tagged?null!=e&&e.is_geo_tagged?a.jsx(a.Fragment,{children:a.jsx("h1",{className:"text-xs text-blue-500 font-semibold  w-40",children:"Pending Measurement Sheet"})}):a.jsx("h1",{className:"text-xs text-red-500 font-semibold",children:"Not Verified"}):a.jsx("h1",{className:"text-xs text-green-500 font-semibold  w-40",children:"Pending Geo Tagging"}))]})]})]})}),a.jsx(d.CardFooter,{className:"-mt-8",children:a.jsxs("div",{className:"flex justify-between items-center gap-2 mb-1",children:[(null==V?void 0:V.create)&&a.jsxs(d.Button,{disabled:(null==e?void 0:e.is_field_verified)&&7==(null==P||null===(n=P.user)||void 0===n||null===(n=n.roleWithId[0])||void 0===n?void 0:n.role_id),onClick:function(){return function(e){var i;if(7==(null==P||null===(i=P.user)||void 0===i||null===(i=i.roleWithId[0])||void 0===i?void 0:i.role_id))return null!=e&&e.is_field_verified?void alert("Already Verified"):void O("/amc-app/property/saf-site-verification/".concat(null==e?void 0:e.id));null!=e&&e.is_agency_verified?null==e||!e.is_agency_verified||null!=e&&e.is_geo_tagged?null!=e&&e.is_geo_tagged&&null!=e&&e.is_agency_verified&&O("/amc-app/property/measurement-sheet/".concat(null==e?void 0:e.id)):O("/amc-app/property/geo-tagging/".concat(null==e?void 0:e.id)):O("/amc-app/property/saf-site-verification/".concat(null==e?void 0:e.id))}(e)},size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-blue-500 capitalize",children:["Verification",a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]}),(null==V?void 0:V.update)&&a.jsxs(d.Button,{onClick:function(){return O("/amc-app/property/naksha-verification/".concat(null==e?void 0:e.id))},size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-red-500 capitalize",children:["Sanction Plan",a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]})})]},i)})):a.jsx("div",{className:"flex justify-center items-center py-52",children:a.jsx("h1",{children:"No Record Found"})}),a.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),a.jsx(v,{active:null==P?void 0:P.searchVerification,noOfPage:null==B||null===(_=B.data)||void 0===_?void 0:_.last_page,setActive:null==P?void 0:P.setSearchVerification})]})]})})}));var i=[{id:1,value:"applicationNo",label:"Application No"},{id:2,value:"mobileNo",label:"Mobile No"},{id:3,value:"name",label:"Name"}]}}}))}();
