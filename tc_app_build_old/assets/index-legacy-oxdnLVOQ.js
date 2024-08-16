!function(){function e(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=s){var n,l,i,r,a=[],c=!0,d=!1;try{if(i=(s=s.call(e)).next,0===t){if(Object(s)!==s)return;c=!1}else for(;!(c=(n=i.call(s)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){d=!0,l=e}finally{try{if(!c&&null!=s.return&&(r=s.return(),Object(r)!==r))return}finally{if(d)throw l}}return a}}(e,s)||function(e,s){if(!e)return;if("string"==typeof e)return t(e,s);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,n=new Array(t);s<t;s++)n[s]=e[s];return n}System.register(["./index-legacy-64fPYPVi.js","./router-legacy-d7mQ5O4E.js","./index-legacy-jUxwLm5_.js","./tailwind-legacy-wJ_Ag7Dp.js","./FormProvider-legacy-0GRSyHq_.js","./formik.esm-legacy--WzrQHeF.js","./index-legacy-eoh2ESgH.js","./index.esm-legacy-HMaAycA0.js","./index-legacy-FURCsxpp.js","./usePathWisePermission-legacy-jmmWu79M.js","./reactQuery-legacy-CGVy-x5i.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-5CyayZ_y.js","./headlessui-legacy-yLFhCrEc.js","./ArrowRightIcon-legacy-lOGvRqu-.js"],(function(t,s){"use strict";var n,l,i,r,a,c,d,o,u,x,m,f,j,h;return{setters:[function(e){n=e.c,l=e.p,i=e.j},function(e){r=e.f,a=e.d,c=e.u},function(e){d=e.P},function(e){o=e.r},function(e){u=e.F},function(e){x=e.u},null,function(e){m=e.c,f=e.a},function(e){j=e.S},function(e){h=e.u},null,null,null,null,null],execute:function(){t("default",(function(){var t,s,y,v=r().pathname;h(v);var b=e(a.useState(1),2),g=b[0],N=b[1],p=e(a.useState(10),2),w=p[0],S=(p[1],c()),P=x({initialValues:{holdingNo:""},validationSchema:m().shape({holdingNo:f().required("Survey is required")}),onSubmit:function(e){A.refetch()}}),A=n({api:l.getFilterPropDetails,config:{filteredBy:"holdingNo",parameter:P.values.holdingNo,zoneId:"",wardId:"",page:g,perPage:w},key:"holdingListData",options:{enabled:!1}});return i.jsx(d,{title:"Search Survey",children:i.jsxs("div",{className:"px-4 py-4 flex-1",children:[i.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[i.jsx("h1",{className:"text-sm font-semibold",children:"Survey"}),i.jsx("div",{children:i.jsx(o.Button,{size:"sm",color:"blue-gray",onClick:function(){return S("/amc-app/property/new-survey-basic")},fullWidth:!0,children:i.jsx("small",{children:"New Survey"})})})]}),i.jsx(u,{formik:P,children:i.jsx(o.Card,{children:i.jsx(o.CardBody,{children:i.jsx("div",{className:"grid grid-cols-2 gap-2",children:i.jsx("div",{className:"border-t border-gray-200"})})})})}),i.jsx("div",{className:"mt-4",children:null!=A&&A.isFetching?i.jsx("div",{className:"text-center py-40 text-blue-600",children:"Please Wait...."}):i.jsx(i.Fragment,{children:(null==A||null===(t=A.data)||void 0===t||null===(t=t.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.length)>0?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"my-4 border-b-2"}),null==A||null===(s=A.data)||void 0===s||null===(s=s.data)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.map((function(e){return i.jsx(o.Card,{className:"w-full mb-5",children:i.jsxs(o.CardBody,{children:[i.jsx("div",{className:"flex items-center justify-between -mt-1",children:i.jsx("div",{className:"flex items-center",children:i.jsx("h1",{className:"font-bold text-xs",children:"Details"})})}),i.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("h1",{className:"text-xs font-semibold",children:"Holding No:"}),i.jsx("p",{className:"text-xs text-end",children:null==e?void 0:e.holding_no})]}),i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("h1",{className:"text-xs font-semibold",children:"Property No:"}),i.jsx("p",{className:"text-xs text-end",children:null==e?void 0:e.property_no})]}),i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("h1",{className:"text-xs font-semibold",children:"Zone:"}),i.jsx("p",{className:"text-xs text-end",children:null==e?void 0:e.zone_name})]}),i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("h1",{className:"text-xs font-semibold",children:"Address:"}),i.jsx("p",{className:"text-xs text-end truncate w-60",children:null==e?void 0:e.prop_address})]}),i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("h1",{className:"text-xs font-semibold",children:"Mobile No:"}),i.jsx("p",{className:"text-xs text-end",children:null==e?void 0:e.mobile_no})]}),i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("h1",{className:"text-xs font-semibold",children:"Owner Name:"}),i.jsx("p",{className:"text-xs text-end truncate w-60",children:null==e?void 0:e.owner_name})]}),i.jsxs("div",{className:"flex items-center justify-between mb-1",children:[i.jsx("h1",{className:"text-xs font-semibold",children:"Payment Status:"}),i.jsx("p",{className:"text-xs font-semibold ".concat(1===(null==e?void 0:e.paid_status)?"text-green-500":"text-red-500"),children:1===(null==e?void 0:e.paid_status)?"Paid":"Pending"})]}),i.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),i.jsx("div",{className:"flex items-center justify-around mt-4 -mb-1 gap-6",children:i.jsx("div",{onClick:function(){return S("/amc-app/property/survey-for-reassessment/".concat(null==e?void 0:e.id))},className:"text-xs font-bold text-blue-600",children:"Survey for Reassessment"})})]})},null==e?void 0:e.id)})),i.jsx("div",{className:"my-4 border-b-2"}),i.jsx(j,{active:g,setActive:N,noOfPage:null==A||null===(y=A.data)||void 0===y||null===(y=y.data)||void 0===y?void 0:y.last_page})]}):i.jsx("div",{className:"flex items-center justify-center py-52",children:i.jsx("h1",{color:"gray",className:"text-center text-xs",children:"No Record Found!"})})})})]})})}))}}}))}();