!function(){function e(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,l){return function(e){if(Array.isArray(e))return e}(e)||function(e,l){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var s,n,t,i,a=[],o=!0,c=!1;try{if(t=(r=r.call(e)).next,0===l){if(Object(r)!==r)return;o=!1}else for(;!(o=(s=t.call(r)).done)&&(a.push(s.value),a.length!==l);o=!0);}catch(e){c=!0,n=e}finally{try{if(!o&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw n}}return a}}(e,l)||r(e,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,l){if(e){if("string"==typeof e)return s(e,l);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,l):void 0}}function s(e,l){(null==l||l>e.length)&&(l=e.length);for(var r=0,s=new Array(l);r<l;r++)s[r]=e[r];return s}System.register(["./index-legacy-GryWQzJM.js","./router-legacy-rigPOyFI.js","./tailwind-legacy-e6PAgAmt.js","./moment-legacy-tjrIIMAh.js","./index-legacy-D3gzBq1l.js","./reactIcons-legacy-ELZmKVKq.js","./usePathWisePermission-legacy-wsKubpXY.js","./reactQuery-legacy-jKPiMKrc.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-rH2Rcf5_.js","./headlessui-legacy-Yu0VJXN1.js"],(function(r,s){"use strict";var n,t,i,a,o,c,d,u,m,x,h,v,j,f,g,y,p,b,N;return{setters:[function(e){n=e.U,t=e.u,i=e.j,a=e.B,o=e.a,c=e.p,d=e.w,u=e.I,m=e.F,x=e.M,h=e.A},function(e){v=e.u,j=e.d,f=e.L},function(e){g=e.r},function(e){y=e.h},function(e){p=e.P},function(e){b=e.G},function(e){N=e.u},null,null,null,null],execute:function(){function s(e){return b({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"}},{tag:"path",attr:{d:"M9 7l4 0"}},{tag:"path",attr:{d:"M9 11l4 0"}}]})(e)}r("default",(function(){var r,b,w,C,M,T,z,A,B,D,I,S,P,k,Y,_,F,E,R=n(),U=(R.currentRole,R.filterMenuProperty),W=R.filterMenuWater,O=R.filterMenuTrade,H=R.filterMenuDashboard,L=N("/daily-license-app"),q=t(),G=v(),Z=l(j.useState([{id:1,title:"Property Tax",amount:"0",icon:i.jsx(a,{size:"1.5rem",color:"#f97316"}),bgColor:"bg-orange-50",textColor:"text-orange-400",iconBgColor:"bg-orange-200"},{id:2,title:"Water Tax",amount:"0",icon:i.jsx(a,{size:"1.5rem",color:"#10b981"}),bgColor:"bg-green-50",textColor:"text-green-400",iconBgColor:"bg-green-200"},{id:3,title:"Trade Tax",amount:"0",icon:i.jsx(a,{size:"1.5rem",color:"#7c3aed"}),bgColor:"bg-indigo-50",textColor:"text-indigo-400",iconBgColor:"bg-indigo-200"},{id:4,title:"Advertisement",amount:"0",icon:i.jsx(a,{size:"1.5rem",color:"#7c3aed"}),bgColor:"bg-purple-50",textColor:"text-purple-400",iconBgColor:"bg-purple-200"}]),2),J=Z[0],K=Z[1];return o({api:c.collectionReport,config:{collectionType:["property"],fromDate:"",uptoDate:"",wardId:"",zoneId:"",user:null==q||null===(r=q.user)||void 0===r?void 0:r.user_type,paymentMode:"",perPage:10,page:1},options:{enabled:"TC"==(null==q||null===(b=q.user)||void 0===b?void 0:b.user_type),onSuccess:function(l){var r=l.data,s=e(J);s[0].amount=null==r?void 0:r.totalAmt,K(s)}}}),o({api:d.waterTcCollection,config:{fromDate:y().format("YYYY-MM-DD"),uptoDate:y().format("YYYY-MM-DD"),wardId:"",userId:null==q||null===(w=q.user)||void 0===w?void 0:w.id,zoneId:"",paymentMode:"",page:1,perPage:10},options:{enabled:"TC"==(null==q||null===(C=q.user)||void 0===C?void 0:C.user_type),onSuccess:function(l){var r=l.data,s=e(J);s[1].amount=null==r?void 0:r.totalAmount,K(s)}}}),i.jsx(p,{title:"Dashboard",children:i.jsxs("div",{className:"bg-gray-50 p-4 ",children:[i.jsx("div",{className:"grid grid-cols-1 gap-4 mb-4",children:i.jsx(g.Card,{className:" w-full",children:i.jsxs(g.CardBody,{children:[i.jsxs("div",{className:"flex items-center -mt-3",children:[i.jsxs("div",{className:"flex items-center justify-start",children:[i.jsx(u,{size:"1.8rem",color:"#2563eb"}),i.jsx(g.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Profile"})]}),i.jsx("div",{className:"ml-auto",children:i.jsx(g.Button,{size:"sm",onClick:function(){return G("/amc-app/property/profile")},children:"Edit"})})]}),i.jsx("div",{className:"my-3 border-b-2"}),i.jsxs("div",{className:"flex items-center justify-start",children:[i.jsx(g.Avatar,{alt:"profile",loading:"lazy",size:"xl",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj7E5IMjJug49eq1KM-ZjW3VEUEl4_dfZUxx2m2iBdbmxLysvvrvvwf1TKN1wuReGzJ8&usqp=CAU",variant:"rounded",placeholder:null==q||null===(M=q.user)||void 0===M||null===(M=M.name)||void 0===M?void 0:M.charAt(0).toUpperCase(),className:"w-24 h-24 rounded-2xl border-2 border-gray-200"}),i.jsxs("div",{className:"ml-4",children:[i.jsx("h1",{className:"font-semibold text-blue-400",children:null==q||null===(T=q.user)||void 0===T?void 0:T.user_name}),i.jsx("h1",{className:"text-sm ",children:null==q||null===(z=q.user)||void 0===z?void 0:z.mobile}),i.jsx("h1",{className:"text-sm ",children:null==q||null===(A=q.user)||void 0===A?void 0:A.email}),i.jsx("h1",{className:"text-xs ",children:null==q||null===(B=q.user)||void 0===B?void 0:B.role})]})]})]})})}),"TC"==(null==q||null===(D=q.user)||void 0===D?void 0:D.user_type)&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"flex items-center",children:i.jsx(g.Typography,{variant:"h6",color:"blue-gray",className:"ml-2 mt-3",children:"Daily Collection"})}),i.jsx("div",{className:"mb-2 border-b-2"}),i.jsx("div",{className:"grid grid-cols-2 gap-4",children:J.map((function(e,l){return i.jsx(g.Card,{className:"w-full ".concat(null==e?void 0:e.bgColor),children:i.jsx(g.CardBody,{className:"-m-2",children:i.jsxs("div",{className:"flex items-center justify-start ",children:[i.jsx("div",{className:"rounded-full w-10 h-10 flex items-center justify-center ".concat(null==e?void 0:e.iconBgColor),children:null==e?void 0:e.icon}),i.jsxs("div",{children:[i.jsx("h1",{className:"ml-2 text-sm font-semibold ".concat(null==e?void 0:e.textColor),children:Math.round((null==e?void 0:e.amount)||0).toFixed(2)}),i.jsx("h1",{className:"ml-2 text-xs ".concat(null==e?void 0:e.textColor),children:null==e?void 0:e.title})]})]})})},l)}))})]}),i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"my-4 border-b-2"}),(null===(I=U())||void 0===I?void 0:I.length)>0&&i.jsx(g.Card,{className:" w-full",children:i.jsxs(g.CardBody,{children:[i.jsxs("div",{className:"flex items-center ",children:[i.jsx(m,{size:"1.8rem",color:"#2563eb"}),i.jsx(g.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Property Tax"})]}),i.jsx("div",{className:"my-3 border-b-2"}),i.jsx("div",{className:"grid grid-cols-4 gap-x-10 gap-y-6 mt-4",children:null===(S=U())||void 0===S?void 0:S.map((function(e,l){return(null==e?void 0:e.is_menu)&&i.jsx("div",{children:e.isHref?i.jsxs("a",{href:window.location.origin+(null==e?void 0:e.route),className:"flex flex-col items-center",children:[i.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:null==e?void 0:e.icon}),i.jsx("p",{className:"text-xs mt-2 text-center",children:null==e?void 0:e.name})]}):i.jsxs(f,{to:null==e?void 0:e.route,className:"flex flex-col items-center",children:[i.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:null==e?void 0:e.icon}),i.jsx("p",{className:"text-xs mt-2 text-center",children:null==e?void 0:e.name})]})},l)}))})]})})]}),(null===(P=W())||void 0===P?void 0:P.length)>0&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"my-4 border-b-2"}),i.jsx(g.Card,{className:" w-full",children:i.jsxs(g.CardBody,{children:[i.jsxs("div",{className:"flex items-center ",children:[i.jsx(x,{size:"1.8rem",color:"#2563eb"}),i.jsx(g.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Water Tax"})]}),i.jsx("div",{className:"my-3 border-b-2"}),i.jsx("div",{className:"grid grid-cols-4 gap-12 mt-4",children:null===(k=W())||void 0===k?void 0:k.map((function(e,l){return(null==e?void 0:e.is_menu)&&i.jsx(f,{to:null==e?void 0:e.route,className:"flex flex-col items-center ",children:i.jsxs("div",{className:"flex flex-col items-center",children:[i.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:null==e?void 0:e.icon}),i.jsx("p",{className:"text-xs mt-2 text-center",children:null==e?void 0:e.name})]})},null==e?void 0:e.id)}))})]})})]}),i.jsx("div",{className:"my-4 border-b-2"}),(null===(Y=O())||void 0===Y?void 0:Y.length)>0&&i.jsx(g.Card,{className:" w-full",children:i.jsxs(g.CardBody,{children:[i.jsxs("div",{className:"flex items-center ",children:[i.jsx(s,{size:"1.8rem",color:"#2563eb"}),i.jsx(g.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Trade"})]}),i.jsx("div",{className:"my-3 border-b-2"}),i.jsx("div",{className:"grid grid-cols-4 gap-12 mt-4",children:null===(_=O())||void 0===_?void 0:_.map((function(e,l){return(null==e?void 0:e.is_menu)&&i.jsx("div",{onClick:function(){return G(null==e?void 0:e.route)},className:"flex flex-col items-center ",children:i.jsxs("div",{className:"flex flex-col items-center",children:[i.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:null==e?void 0:e.icon}),i.jsx("p",{className:"text-xs mt-2 text-center",children:null==e?void 0:e.name})]})},null==e?void 0:e.id)}))})]})}),(null==L?void 0:L.result)&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"my-4 border-b-2"}),i.jsx(g.Card,{className:" w-full",children:i.jsxs(g.CardBody,{children:[i.jsxs("div",{className:"flex items-center ",children:[i.jsx(h,{size:"1.8rem",color:"#2563eb"}),i.jsx(g.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Municipal Rental"})]}),i.jsx("div",{className:"my-3 border-b-2"}),i.jsx("div",{className:"mt-4",children:i.jsx("a",{href:window.location.origin+(null==L||null===(F=L.result)||void 0===F?void 0:F.route),children:i.jsxs("div",{className:"bg-blue-50 rounded-xl shadow py-10 px-5 w-full h-16 flex items-center justify-between",children:[i.jsxs("div",{className:"flex justify-start item-center gap-2",children:[i.jsx(h,{size:"2.5rem",color:"#60a5fa"}),i.jsx("h1",{className:"text-base font-semibold text-center mt-2",children:"Municipal Rental"})]}),i.jsx("div",{children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:i.jsx("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3"})})})]})})})]})})]}),(null===(E=H())||void 0===E?void 0:E.length)>0&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"my-4 border-b-2"}),i.jsx(g.Card,{className:" w-full",children:i.jsxs(g.CardBody,{children:[i.jsxs("div",{className:"flex items-center ",children:[i.jsx(h,{size:"1.8rem",color:"#2563eb"}),i.jsx(g.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Admin Panel"})]}),i.jsx("div",{className:"my-3 border-b-2"}),i.jsx("div",{className:"mt-4",children:i.jsx(f,{to:"/amc-app/admin/create-menu",children:i.jsxs("div",{className:"bg-blue-50 rounded-xl shadow py-10 px-5 w-full h-16 flex items-center justify-between",children:[i.jsxs("div",{className:"flex justify-start item-center gap-2",children:[i.jsx(h,{size:"2.5rem",color:"#60a5fa"}),i.jsx("h1",{className:"text-base font-semibold text-center mt-2",children:"Dashboard"})]}),i.jsx("div",{children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:i.jsx("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3"})})})]})})})]})})]})]})})}))}}}))}();
