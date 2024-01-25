!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,l){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var s,a,n,i,r=[],c=!0,o=!1;try{if(n=(t=t.call(e)).next,0===l){if(Object(t)!==t)return;c=!1}else for(;!(c=(s=n.call(t)).done)&&(r.push(s.value),r.length!==l);c=!0);}catch(e){o=!0,a=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(o)throw a}}return r}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,s=new Array(l);t<l;t++)s[t]=e[t];return s}System.register(["./index-legacy-A4VBbd_s.js","./index-legacy-1y_oEYSa.js","./TextField-legacy-cMFeqC_H.js","./index-legacy-mFUBlFuj.js","./ArrowRightIcon-legacy-TK0pnBFf.js","./formik.esm-legacy-pQ0ldnan.js"],(function(l,t){"use strict";var s,a,n,i,r,c,o,d,u,m;return{setters:[function(e){s=e.R,a=e.j,n=e.r,i=e.a,r=e.m,c=e.C},function(e){o=e.P},function(e){d=e.T},null,function(e){u=e.A,m=e.a},null],execute:function(){l("default",(function(){var l,t,u,m=i(),h=e(s.useState(""),2),f=h[0],v=h[1],j=e(s.useState(1),2),g=j[0],p=j[1],y=e(s.useState(10),2),b=y[0],N=y[1],w=r({api:c.tradeInbox,config:{key:f,page:g,perPage:b},value:[g,b],options:{enabled:!!g}});return a.jsx(o,{title:"Trade Inbox",children:a.jsxs("div",{className:"p-4",children:[a.jsx(n.Card,{children:a.jsx(n.CardBody,{children:a.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[a.jsx("div",{children:a.jsx(d,{id:"key",label:"Search License",value:f,onChange:function(e){return v(e.target.value)}})}),a.jsx("div",{className:"flex justify-center",children:a.jsx(n.Button,{size:"sm",color:"blue-gray",onClick:function(){w.refetch()},children:"Search"})})]})})}),null!=w&&w.isLoading?a.jsx("div",{className:"flex justify-center mt-52",children:a.jsx("h1",{className:"text-base font-semibold text-gray-700 ",children:"Please wait..."})}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"border-t border-gray-200 my-5"}),(null==w||null===(l=w.data)||void 0===l||null===(l=l.data)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.length)>0?a.jsxs(a.Fragment,{children:[null==w||null===(t=w.data)||void 0===t||null===(t=t.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.map((function(e,l){return a.jsxs(n.Card,{className:"mt-4 full",children:[a.jsx(n.CardBody,{children:a.jsx("div",{className:"flex justify-between items-center",children:a.jsxs("div",{children:[a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsx("h1",{className:"text-sm font-semibold",children:"Application No:"}),a.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.application_no)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["License No :"," "]}),a.jsx("h1",{className:"text-sm truncate w-40",children:(null==e?void 0:e.license_no)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Firm Name :"," "]}),a.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.firm_name)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Owner Name :"," "]}),a.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.owner_name)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Mobile No :"," "]}),a.jsx("h1",{className:"text-sm truncate w-40",children:(null==e?void 0:e.mobile_no)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Apply Date :"," "]}),a.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.application_date)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Validity :"," "]}),a.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.valid_upto)||"--"})]})]})})}),a.jsx(n.CardFooter,{className:"-mt-8",children:a.jsx("div",{className:"flex justify-between items-center gap-2 mb-1",children:a.jsxs(n.Button,{onClick:function(){return l=null==e?void 0:e.id,void m("/amc-app/trade/application-details/".concat(l));var l},size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-blue-500",children:["View",a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})})]},l)})),a.jsx("div",{className:"flex justify-end mt-4",children:a.jsx(x,{page:g,setPage:p,noOfPage:null==w||null===(u=w.data)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.last_page,setPerPage:N,perPage:b})})]}):a.jsx("div",{className:"flex justify-center",children:a.jsx("h1",{className:"text-lg font-semibold text-gray-700",children:"No Data Found"})})]})]})})}));var t=[{id:0,label:"5",value:5},{id:1,label:"10",value:10},{id:2,label:"20",value:20},{id:3,label:"50",value:50},{id:4,label:"100",value:100}];function x(e){return s.useEffect((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[null==e?void 0:e.page]),a.jsxs("div",{className:"flex items-center gap-4 mt-2 mb-2",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(n.IconButton,{className:"w-7 h-7",size:"sm",variant:"outlined",onClick:function(){1!==(null==e?void 0:e.page)&&(null==e||e.setPage((null==e?void 0:e.page)-1))},disabled:1===(null==e?void 0:e.page)||0===(null==e?void 0:e.page),children:a.jsx(u,{strokeWidth:2,className:"h-3 w-3"})}),a.jsxs(n.Typography,{color:"gray",className:"font-normal text-sm",children:[a.jsx("strong",{className:"text-gray-900 text-sm",children:null==e?void 0:e.page})," of"," ",a.jsx("strong",{className:"text-gray-900",children:null==e?void 0:e.noOfPage})]}),a.jsx(n.IconButton,{className:"w-7 h-7",size:"sm",variant:"outlined",onClick:function(){(null==e?void 0:e.page)!==(null==e?void 0:e.noOfPage)&&(null==e||e.setPage((null==e?void 0:e.page)+1))},disabled:(null==e?void 0:e.page)===(null==e?void 0:e.noOfPage)||0===(null==e?void 0:e.page),children:a.jsx(m,{strokeWidth:2,className:"h-3 w-3"})})]}),a.jsx("div",{className:"flex items-center gap-5",children:a.jsx("select",{className:"border border-gray-300 rounded-md text-gray-900 text-sm p-1.5",value:null==e?void 0:e.perPage,onChange:function(l){return null==e?void 0:e.setPerPage(parseInt(l.target.value))},children:null==t?void 0:t.map((function(e){return a.jsx("option",{value:e.value,children:e.label},e.id)}))})})]})}}}}))}();
