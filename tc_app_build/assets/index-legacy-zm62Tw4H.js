!function(){function e(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var n,l,a,i,r=[],c=!0,d=!1;try{if(a=(s=s.call(e)).next,0===t){if(Object(s)!==s)return;c=!1}else for(;!(c=(n=a.call(s)).done)&&(r.push(n.value),r.length!==t);c=!0);}catch(e){d=!0,l=e}finally{try{if(!c&&null!=s.return&&(i=s.return(),Object(i)!==i))return}finally{if(d)throw l}}return r}}(e,s)||function(e,s){if(!e)return;if("string"==typeof e)return t(e,s);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,n=new Array(t);s<t;s++)n[s]=e[s];return n}System.register(["./index-legacy-cI_nx4AF.js","./react-legacy-47VUrxM6.js","./index-legacy-RQcNTJqJ.js","./TextField-legacy-gYikKKIk.js","./index-legacy-rBwa93P6.js","./PaginationState-legacy-aGzL_8-N.js","./formik.esm-legacy-ztsLfv9B.js","./ArrowRightIcon-legacy-5eASLPHv.js"],(function(t,s){"use strict";var n,l,a,i,r,c,d,o,m;return{setters:[function(e){n=e.a,l=e.t,a=e.j},function(e){i=e.u,r=e.R,c=e.e},function(e){d=e.P},function(e){o=e.T},null,function(e){m=e.S},null,null],execute:function(){t("default",(function(){var t,s,u,x=i(),f=e(r.useState(""),2),h=f[0],j=f[1],v=e(r.useState(1),2),g=v[0],y=v[1],p=e(r.useState(10),2),N=p[0],b=p[1],w=n({api:l.tradeInbox,config:{key:h,page:g,perPage:N},value:[g,N],options:{enabled:!!g}});return a.jsx(d,{title:"Trade Inbox",children:a.jsxs("div",{className:"p-4",children:[a.jsx(c.Card,{children:a.jsx(c.CardBody,{children:a.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[a.jsx("div",{children:a.jsx(o,{id:"key",label:"Search License",value:h,onChange:function(e){return j(e.target.value)}})}),a.jsx("div",{className:"flex justify-center",children:a.jsx(c.Button,{size:"sm",color:"blue-gray",onClick:function(){w.refetch()},children:"Search"})})]})})}),null!=w&&w.isLoading?a.jsx("div",{className:"flex justify-center mt-52",children:a.jsx("h1",{className:"text-base font-semibold text-gray-700 ",children:"Please wait..."})}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"border-t border-gray-200 my-5"}),(null==w||null===(t=w.data)||void 0===t||null===(t=t.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.length)>0?a.jsxs(a.Fragment,{children:[null==w||null===(s=w.data)||void 0===s||null===(s=s.data)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.map((function(e,t){return a.jsxs(c.Card,{className:"mt-4 full",children:[a.jsx(c.CardBody,{children:a.jsx("div",{className:"flex justify-between items-center",children:a.jsxs("div",{children:[a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsx("h1",{className:"text-sm font-semibold",children:"Application No:"}),a.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.application_no)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["License No :"," "]}),a.jsx("h1",{className:"text-sm truncate w-40",children:(null==e?void 0:e.license_no)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Firm Name :"," "]}),a.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.firm_name)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Owner Name :"," "]}),a.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.owner_name)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Mobile No :"," "]}),a.jsx("h1",{className:"text-sm truncate w-40",children:(null==e?void 0:e.mobile_no)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Apply Date :"," "]}),a.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.application_date)||"--"})]}),a.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[a.jsxs("h1",{className:"text-sm font-semibold",children:["Validity :"," "]}),a.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.valid_upto)||"--"})]})]})})}),a.jsx(c.CardFooter,{className:"-mt-8",children:a.jsx("div",{className:"flex justify-between items-center gap-2 mb-1",children:a.jsxs(c.Button,{onClick:function(){return t=null==e?void 0:e.id,void x("/amc-app/trade/application-details/".concat(t));var t},size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-blue-500",children:["View",a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})})]},t)})),a.jsx("div",{className:"flex justify-end mt-4",children:a.jsx(m,{page:g,setPage:y,noOfPage:null==w||null===(u=w.data)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.last_page,setPerPage:b,perPage:N})})]}):a.jsx("div",{className:"flex justify-center",children:a.jsx("h1",{className:"text-lg font-semibold text-gray-700",children:"No Data Found"})})]})]})})}))}}}))}();
