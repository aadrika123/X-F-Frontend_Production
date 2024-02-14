!function(){function e(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,l){return function(e){if(Array.isArray(e))return e}(e)||function(e,l){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var s,t,n,i,a=[],o=!0,d=!1;try{if(n=(r=r.call(e)).next,0===l){if(Object(r)!==r)return;o=!1}else for(;!(o=(s=n.call(r)).done)&&(a.push(s.value),a.length!==l);o=!0);}catch(e){d=!0,t=e}finally{try{if(!o&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(d)throw t}}return a}}(e,l)||r(e,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,l){if(e){if("string"==typeof e)return s(e,l);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,l):void 0}}function s(e,l){(null==l||l>e.length)&&(l=e.length);for(var r=0,s=new Array(l);r<l;r++)s[r]=e[r];return s}System.register(["./index-legacy-Wc5FCZ_j.js","./react-legacy-cmOuVUdh.js","./index-legacy-NLJguti2.js","./usePathWisePermission-legacy-UX4NF4-N.js"],(function(r,s){"use strict";var t,n,i,a,o,d,c,u,m,x,h,v,j,f,g,y,p,b,N;return{setters:[function(e){t=e.G,n=e.U,i=e.u,a=e.j,o=e.B,d=e.a,c=e.p,u=e.w,m=e.I,x=e.F,h=e.M,v=e.A},function(e){j=e.u,f=e.R,g=e.l,y=e.e,p=e.L},function(e){b=e.P},function(e){N=e.u}],execute:function(){function s(e){return t({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"}},{tag:"path",attr:{d:"M9 7l4 0"}},{tag:"path",attr:{d:"M9 11l4 0"}}]})(e)}r("default",(function(){var r,t,w,C,M,T,z,A,B,D,I,S,P,k,_,F,Y,R,E=n(),U=(E.currentRole,E.filterMenuProperty),W=E.filterMenuWater,O=E.filterMenuTrade,G=E.filterMenuDashboard,L=N("/daily-license-app"),q=i(),H=j(),J=l(f.useState([{id:1,title:"Property Tax",amount:"0",icon:a.jsx(o,{size:"1.5rem",color:"#f97316"}),bgColor:"bg-orange-50",textColor:"text-orange-400",iconBgColor:"bg-orange-200"},{id:2,title:"Water Tax",amount:"0",icon:a.jsx(o,{size:"1.5rem",color:"#10b981"}),bgColor:"bg-green-50",textColor:"text-green-400",iconBgColor:"bg-green-200"},{id:3,title:"Trade Tax",amount:"0",icon:a.jsx(o,{size:"1.5rem",color:"#7c3aed"}),bgColor:"bg-indigo-50",textColor:"text-indigo-400",iconBgColor:"bg-indigo-200"},{id:4,title:"Advertisement",amount:"0",icon:a.jsx(o,{size:"1.5rem",color:"#7c3aed"}),bgColor:"bg-purple-50",textColor:"text-purple-400",iconBgColor:"bg-purple-200"}]),2),K=J[0],Z=J[1];return d({api:c.collectionReport,config:{collectionType:["property"],fromDate:"",uptoDate:"",wardId:"",zoneId:"",user:null==q||null===(r=q.user)||void 0===r?void 0:r.user_type,paymentMode:"",perPage:10,page:1},options:{enabled:"TC"==(null==q||null===(t=q.user)||void 0===t?void 0:t.user_type),onSuccess:function(l){var r=l.data,s=e(K);s[0].amount=null==r?void 0:r.totalAmt,Z(s)}}}),d({api:u.waterTcCollection,config:{fromDate:g().format("YYYY-MM-DD"),uptoDate:g().format("YYYY-MM-DD"),wardId:"",userId:null==q||null===(w=q.user)||void 0===w?void 0:w.id,zoneId:"",paymentMode:"",page:1,perPage:10},options:{enabled:"TC"==(null==q||null===(C=q.user)||void 0===C?void 0:C.user_type),onSuccess:function(l){var r=l.data,s=e(K);s[1].amount=null==r?void 0:r.totalAmount,Z(s)}}}),a.jsx(b,{title:"Dashboard",children:a.jsxs("div",{className:"bg-gray-50 p-4 ",children:[a.jsx("div",{className:"grid grid-cols-1 gap-4 mb-4",children:a.jsx(y.Card,{className:" w-full",children:a.jsxs(y.CardBody,{children:[a.jsxs("div",{className:"flex items-center -mt-3",children:[a.jsxs("div",{className:"flex items-center justify-start",children:[a.jsx(m,{size:"1.8rem",color:"#2563eb"}),a.jsx(y.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Profile"})]}),a.jsx("div",{className:"ml-auto",children:a.jsx(y.Button,{size:"sm",onClick:function(){return H("/amc-app/property/profile")},children:"Edit"})})]}),a.jsx("div",{className:"my-3 border-b-2"}),a.jsxs("div",{className:"flex items-center justify-start",children:[a.jsx(y.Avatar,{loading:"lazy",size:"xl",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj7E5IMjJug49eq1KM-ZjW3VEUEl4_dfZUxx2m2iBdbmxLysvvrvvwf1TKN1wuReGzJ8&usqp=CAU",variant:"rounded",placeholder:null==q||null===(M=q.user)||void 0===M||null===(M=M.name)||void 0===M?void 0:M.charAt(0).toUpperCase(),className:"w-24 h-24 rounded-2xl border-2 border-gray-200"}),a.jsxs("div",{className:"ml-4",children:[a.jsx("h1",{className:"font-semibold text-blue-400",children:null==q||null===(T=q.user)||void 0===T?void 0:T.user_name}),a.jsx("h1",{className:"text-sm ",children:null==q||null===(z=q.user)||void 0===z?void 0:z.mobile}),a.jsx("h1",{className:"text-sm ",children:null==q||null===(A=q.user)||void 0===A?void 0:A.email}),a.jsx("h1",{className:"text-xs ",children:null==q||null===(B=q.user)||void 0===B?void 0:B.role})]})]})]})})}),"TC"==(null==q||null===(D=q.user)||void 0===D?void 0:D.user_type)&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"flex items-center",children:a.jsx(y.Typography,{variant:"h6",color:"blue-gray",className:"ml-2 mt-3",children:"Daily Collection"})}),a.jsx("div",{className:"mb-2 border-b-2"}),a.jsx("div",{className:"grid grid-cols-2 gap-4",children:K.map((function(e,l){return a.jsx(y.Card,{className:"w-full ".concat(null==e?void 0:e.bgColor),children:a.jsx(y.CardBody,{className:"-m-2",children:a.jsxs("div",{className:"flex items-center justify-start ",children:[a.jsx("div",{className:"rounded-full w-10 h-10 flex items-center justify-center ".concat(null==e?void 0:e.iconBgColor),children:null==e?void 0:e.icon}),a.jsxs("div",{children:[a.jsx("h1",{className:"ml-2 text-sm font-semibold ".concat(null==e?void 0:e.textColor),children:Math.round((null==e?void 0:e.amount)||0).toFixed(2)}),a.jsx("h1",{className:"ml-2 text-xs ".concat(null==e?void 0:e.textColor),children:null==e?void 0:e.title})]})]})})},l)}))})]}),a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"my-4 border-b-2"}),(null===(I=U())||void 0===I?void 0:I.length)>0&&a.jsx(y.Card,{className:" w-full",children:a.jsxs(y.CardBody,{children:[a.jsxs("div",{className:"flex items-center ",children:[a.jsx(x,{size:"1.8rem",color:"#2563eb"}),a.jsx(y.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Property Tax"})]}),a.jsx("div",{className:"my-3 border-b-2"}),a.jsx("div",{className:"grid grid-cols-4 gap-x-10 gap-y-6 mt-4",children:null===(S=U())||void 0===S?void 0:S.map((function(e,l){return(null==e?void 0:e.is_menu)&&a.jsx("div",{children:a.jsxs(p,{to:null==e?void 0:e.route,className:"flex flex-col items-center",children:[a.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:null==e?void 0:e.icon}),a.jsx("p",{className:"text-xs mt-2 text-center",children:null==e?void 0:e.name})]})},l)}))})]})})]}),(null===(P=W())||void 0===P?void 0:P.length)>0&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"my-4 border-b-2"}),a.jsx(y.Card,{className:" w-full",children:a.jsxs(y.CardBody,{children:[a.jsxs("div",{className:"flex items-center ",children:[a.jsx(h,{size:"1.8rem",color:"#2563eb"}),a.jsx(y.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Water Tax"})]}),a.jsx("div",{className:"my-3 border-b-2"}),a.jsx("div",{className:"grid grid-cols-4 gap-12 mt-4",children:null===(k=W())||void 0===k?void 0:k.map((function(e,l){return(null==e?void 0:e.is_menu)&&a.jsx(p,{to:null==e?void 0:e.route,className:"flex flex-col items-center ",children:a.jsxs("div",{className:"flex flex-col items-center",children:[a.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:null==e?void 0:e.icon}),a.jsx("p",{className:"text-xs mt-2 text-center",children:null==e?void 0:e.name})]})},null==e?void 0:e.id)}))})]})})]}),a.jsx("div",{className:"my-4 border-b-2"}),(null===(_=O())||void 0===_?void 0:_.length)>0&&a.jsx(y.Card,{className:" w-full",children:a.jsxs(y.CardBody,{children:[a.jsxs("div",{className:"flex items-center ",children:[a.jsx(s,{size:"1.8rem",color:"#2563eb"}),a.jsx(y.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Trade"})]}),a.jsx("div",{className:"my-3 border-b-2"}),a.jsx("div",{className:"grid grid-cols-4 gap-12 mt-4",children:null===(F=O())||void 0===F?void 0:F.map((function(e,l){return(null==e?void 0:e.is_menu)&&a.jsx("div",{onClick:function(){return H(null==e?void 0:e.route)},className:"flex flex-col items-center ",children:a.jsxs("div",{className:"flex flex-col items-center",children:[a.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:null==e?void 0:e.icon}),a.jsx("p",{className:"text-xs mt-2 text-center",children:null==e?void 0:e.name})]})},null==e?void 0:e.id)}))})]})}),(null==L?void 0:L.result)&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"my-4 border-b-2"}),a.jsx(y.Card,{className:" w-full",children:a.jsxs(y.CardBody,{children:[a.jsxs("div",{className:"flex items-center ",children:[a.jsx(v,{size:"1.8rem",color:"#2563eb"}),a.jsx(y.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Municipal Rental"})]}),a.jsx("div",{className:"my-3 border-b-2"}),a.jsx("div",{className:"mt-4",children:a.jsx("a",{href:window.location.origin+(null==L||null===(Y=L.result)||void 0===Y?void 0:Y.route),children:a.jsxs("div",{className:"bg-blue-50 rounded-xl shadow py-10 px-5 w-full h-16 flex items-center justify-between",children:[a.jsxs("div",{className:"flex justify-start item-center gap-2",children:[a.jsx(v,{size:"2.5rem",color:"#60a5fa"}),a.jsx("h1",{className:"text-base font-semibold text-center mt-2",children:"Municipal Rental"})]}),a.jsx("div",{children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3"})})})]})})})]})})]}),(null===(R=G())||void 0===R?void 0:R.length)>0&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"my-4 border-b-2"}),a.jsx(y.Card,{className:" w-full",children:a.jsxs(y.CardBody,{children:[a.jsxs("div",{className:"flex items-center ",children:[a.jsx(v,{size:"1.8rem",color:"#2563eb"}),a.jsx(y.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Admin Panel"})]}),a.jsx("div",{className:"my-3 border-b-2"}),a.jsx("div",{className:"mt-4",children:a.jsx(p,{to:"/amc-app/admin/create-menu",children:a.jsxs("div",{className:"bg-blue-50 rounded-xl shadow py-10 px-5 w-full h-16 flex items-center justify-between",children:[a.jsxs("div",{className:"flex justify-start item-center gap-2",children:[a.jsx(v,{size:"2.5rem",color:"#60a5fa"}),a.jsx("h1",{className:"text-base font-semibold text-center mt-2",children:"Dashboard"})]}),a.jsx("div",{children:a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3"})})})]})})})]})})]})]})})}))}}}))}();
