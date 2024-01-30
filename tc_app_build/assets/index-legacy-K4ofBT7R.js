!function(){function e(i){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(i)}function i(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function t(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(i){n(e,i,s[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(s,i))}))}return e}function n(i,t,n){var s;return s=function(i,t){if("object"!=e(i)||!i)return i;var n=i[Symbol.toPrimitive];if(void 0!==n){var s=n.call(i,t||"default");if("object"!=e(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(i)}(t,"string"),(t="symbol"==e(s)?s:String(s))in i?Object.defineProperty(i,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[t]=n,i}System.register(["./index-legacy-cgsBBt8w.js","./TextField-legacy-Gp6ZFtCq.js","./SelectField-legacy-PHXKZ0b9.js","./index-legacy--a-iGgDZ.js","./index-legacy-1z1-IaAs.js","./index-legacy-5fszfU5j.js","./formik.esm-legacy-2IVukZ3L.js","./ArrowRightIcon-legacy-wie964G3.js"],(function(e,i){"use strict";var s,r,l,a,c,o,d,u,m,f,h;return{setters:[function(e){s=e.u,r=e.a,l=e.b,a=e.p,c=e.j,o=e.r,d=e.n},function(e){u=e.T},function(e){m=e.S},null,function(e){f=e.P},function(e){h=e.S},null,null],execute:function(){e("default",(function(){var e,v,x,j,p,b,y,g,N,w=s(),S=r(),P=l({api:a.safInbox,config:n(n(n({},null==w||null===(e=w.searchVerification)||void 0===e?void 0:e.searchBy,null==w?void 0:w.searchVerification.search),"page",null==w?void 0:w.searchVerification.page),"perPage",null==w?void 0:w.searchVerification.perPage),value:[null==w||null===(v=w.searchVerification)||void 0===v?void 0:v.page,null==w||null===(x=w.searchVerification)||void 0===x?void 0:x.perPage],options:{enabled:!(null==w||null===(j=w.searchVerification)||void 0===j||!j.page)}}),O=P.data,V=P.refetch,k=(P.isFetching,P.isLoading);P.isPending;return c.jsx(f,{title:"SAF Verification List",children:c.jsxs("div",{className:"p-4 ",children:[c.jsx(o.Card,{className:"w-full",children:c.jsxs(o.CardBody,{children:[c.jsx("div",{className:"flex justify-between items-center",children:c.jsx("h1",{className:"font-semibold",children:"SAF Verification"})}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-2",children:[c.jsx("div",{children:c.jsxs(m,{label:"Search By",value:null==w||null===(p=w.searchVerification)||void 0===p?void 0:p.searchBy,onChange:function(e){null==w||w.setSearchVerification(t(t({},null==w?void 0:w.searchVerification),{},{searchBy:e.target.value}))},name:"searchBy",children:[c.jsx("option",{value:"",children:"Select"}),i.map((function(e){return c.jsx("option",{value:e.value,children:e.label},e.id)}))]})}),c.jsx("div",{children:c.jsx(u,{label:"Search",name:"search",value:null==w||null===(b=w.searchVerification)||void 0===b?void 0:b.search,onChange:function(e){null==w||w.setSearchVerification(t(t({},null==w?void 0:w.searchVerification),{},{search:e.target.value}))}})})]}),c.jsx(o.Button,{color:"blue",onClick:function(){null==w||w.setSearchVerification(t(t({},null==w?void 0:w.searchVerification),{},{page:1})),V()},fullWidth:!0,children:"Search"})]})}),k?c.jsx("div",{className:"flex justify-center items-center py-52",children:c.jsx("h1",{children:"Loading..."})}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"border-b-2 border-gray-300 w-full py-2"}),(null==O||null===(y=O.data)||void 0===y||null===(y=y.data)||void 0===y?void 0:y.length)>0?null==O||null===(g=O.data)||void 0===g||null===(g=g.data)||void 0===g?void 0:g.map((function(e,i){return c.jsxs(o.Card,{className:"mt-4 full",children:[c.jsx(o.CardBody,{children:c.jsxs("div",{className:"flex justify-between items-center",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"SAF No:"}),c.jsx("h1",{className:"text-sm",children:null==e?void 0:e.saf_no})]}),c.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Name : "}),c.jsx("h1",{className:"text-sm truncate w-40",children:null==e?void 0:e.owner_name})]}),c.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Ward : "}),c.jsx("h1",{className:"text-sm",children:null==e?void 0:e.ward_no})]}),c.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[c.jsxs("h1",{className:"text-sm font-semibold",children:["Assessment Type :"," "]}),c.jsx("h1",{className:"text-sm",children:null==e?void 0:e.assessment})]}),c.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[c.jsxs("h1",{className:"text-sm font-semibold",children:["Mobile No :"," "]}),c.jsx("h1",{className:"text-sm truncate w-40",children:null==e?void 0:e.mobile_no})]}),c.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[c.jsxs("h1",{className:"text-sm font-semibold",children:["Property Type :"," "]}),c.jsx("h1",{className:"text-sm",children:null==e?void 0:e.property_type})]})]}),c.jsx("img",{src:"/assets/house.svg",className:"w-16 h-16 -mb-8",alt:"refresh"})]})}),c.jsx(o.CardFooter,{className:"-mt-8",children:c.jsxs("div",{className:"flex justify-between items-center gap-2 mb-1",children:[c.jsxs(o.Button,{onClick:function(){return i=null==e?void 0:e.id,void S("/amc-app/property/saf-site-verification/".concat(i));var i},size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-blue-500",children:["Verification",c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]}),c.jsx(d,{hasContent:!0,roles:["SENIOUR LIPIK"],children:c.jsxs(o.Button,{onClick:function(){return S("/amc-app/property/naksha-verification/".concat(null==e?void 0:e.id))},size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-red-500",children:["Sanction Plan",c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:c.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})]})})]},i)})):c.jsx("div",{className:"flex justify-center items-center py-52",children:c.jsx("h1",{children:"No Record Found"})}),c.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),c.jsx(h,{active:null==w?void 0:w.searchVerification,noOfPage:null==O||null===(N=O.data)||void 0===N?void 0:N.last_page,setActive:null==w?void 0:w.setSearchVerification})]})]})})}));var i=[{id:1,value:"applicationNo",label:"Application No"},{id:2,value:"mobileNo",label:"Mobile No"},{id:3,value:"name",label:"Name"}]}}}))}();
