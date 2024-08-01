import{U as Y,b as W,j as s,B as c,c as _,p as L,f as H,i as E,F as G,M as O,k as d}from"./index-nTD-ItDx.js";import{u as S,d as $,L as n}from"./router-vn-0iGwJ.js";import{r as a}from"./tailwind-umh7vczy.js";import{h as I}from"./moment-UBOc2Xni.js";import{P as q}from"./index-fOi6iZgB.js";import{G as J}from"./reactIcons-lANGEfNm.js";import{u as K}from"./usePathWisePermission-Azg88mQv.js";import"./reactQuery-VYMV1vFj.js";import"./axios-lPgvryBG.js";import"./headlessui-pLs_kC1m.js";function Z(t){return J({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"}},{tag:"path",attr:{d:"M9 7l4 0"}},{tag:"path",attr:{d:"M9 11l4 0"}}]})(t)}function ds(){var g,u,f,b,N,v,y,w,C,M,T,z,B,D,A,P,k,R,F;const{currentRole:t,filterMenuProperty:x,filterMenuWater:h,filterMenuTrade:j,filterMenuDashboard:U}=Y(),o=K("/daily-license-app"),r=W(),m=S(),[i,p]=$.useState([{id:1,title:"Property Tax",amount:"0",icon:s.jsx(c,{size:"1.5rem",color:"#f97316"}),bgColor:"bg-orange-50",textColor:"text-orange-400",iconBgColor:"bg-orange-200"},{id:2,title:"Water Tax",amount:"0",icon:s.jsx(c,{size:"1.5rem",color:"#10b981"}),bgColor:"bg-green-50",textColor:"text-green-400",iconBgColor:"bg-green-200"},{id:3,title:"Trade Tax",amount:"0",icon:s.jsx(c,{size:"1.5rem",color:"#7c3aed"}),bgColor:"bg-indigo-50",textColor:"text-indigo-400",iconBgColor:"bg-indigo-200"},{id:4,title:"Advertisement",amount:"0",icon:s.jsx(c,{size:"1.5rem",color:"#7c3aed"}),bgColor:"bg-purple-50",textColor:"text-purple-400",iconBgColor:"bg-purple-200"}]);return _({api:L.collectionReport,config:{collectionType:["property"],fromDate:"",uptoDate:"",wardId:"",zoneId:"",user:(g=r==null?void 0:r.user)==null?void 0:g.user_type,paymentMode:"",perPage:10,page:1},options:{enabled:((u=r==null?void 0:r.user)==null?void 0:u.user_type)=="TC",onSuccess:({data:e})=>{const l=[...i];l[0].amount=e==null?void 0:e.totalAmt,p(l)}}}),_({api:H.waterTcCollection,config:{fromDate:I().format("YYYY-MM-DD"),uptoDate:I().format("YYYY-MM-DD"),wardId:"",userId:(f=r==null?void 0:r.user)==null?void 0:f.id,zoneId:"",paymentMode:"",page:1,perPage:10},options:{enabled:((b=r==null?void 0:r.user)==null?void 0:b.user_type)=="TC",onSuccess:({data:e})=>{const l=[...i];l[1].amount=e==null?void 0:e.totalAmount,p(l)}}}),s.jsx(q,{title:"Dashboard",children:s.jsxs("div",{className:"bg-gray-50 p-4 ",children:[s.jsx("div",{className:"grid grid-cols-1 gap-4 mb-4",children:s.jsx(a.Card,{className:" w-full",children:s.jsxs(a.CardBody,{children:[s.jsxs("div",{className:"flex items-center -mt-3",children:[s.jsxs("div",{className:"flex items-center justify-start",children:[s.jsx(E,{size:"1.8rem",color:"#2563eb"}),s.jsx("h1",{className:"ml-2 font-bold text-sm",children:"User Detail"})]}),s.jsx("div",{className:"ml-auto",children:s.jsx(a.Button,{variant:"filled",size:"sm",className:"px-4 py-1.5 capitalize text-xs bg-[#60a5fa] text-white",onClick:()=>m("/amc-app/property/profile"),children:"Profile"})})]}),s.jsx("div",{className:"my-3 border-b-2"}),s.jsxs("div",{className:"flex items-center justify-start",children:[s.jsx(a.Avatar,{alt:"profile",loading:"lazy",size:"xl",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj7E5IMjJug49eq1KM-ZjW3VEUEl4_dfZUxx2m2iBdbmxLysvvrvvwf1TKN1wuReGzJ8&usqp=CAU",variant:"rounded",placeholder:(v=(N=r==null?void 0:r.user)==null?void 0:N.name)==null?void 0:v.charAt(0).toUpperCase(),className:"w-24 h-24 rounded-2xl border-2 border-gray-200"}),s.jsxs("div",{className:"ml-4",children:[s.jsx("h1",{className:"font-semibold text-blue-400 text-sm",children:(y=r==null?void 0:r.user)==null?void 0:y.user_name}),s.jsx("h1",{className:"text-sm ",children:(w=r==null?void 0:r.user)==null?void 0:w.mobile}),s.jsx("h1",{className:"text-sm ",children:(C=r==null?void 0:r.user)==null?void 0:C.email}),s.jsx("h1",{className:"text-xs ",children:(M=r==null?void 0:r.user)==null?void 0:M.role})]})]})]})})}),((T=r==null?void 0:r.user)==null?void 0:T.user_type)=="TC"&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"flex items-center",children:s.jsx(a.Typography,{variant:"h6",color:"blue-gray",className:"ml-2 mt-3",children:"Daily Collection"})}),s.jsx("div",{className:"mb-2 border-b-2"}),s.jsx("div",{className:"grid grid-cols-2 gap-4",children:i.map((e,l)=>s.jsx(a.Card,{className:"w-full ".concat(e==null?void 0:e.bgColor),children:s.jsx(a.CardBody,{className:"-m-2",children:s.jsxs("div",{className:"flex items-center justify-start ",children:[s.jsx("div",{className:"rounded-full w-10 h-10 flex items-center justify-center ".concat(e==null?void 0:e.iconBgColor),children:e==null?void 0:e.icon}),s.jsxs("div",{children:[s.jsx("h1",{className:"ml-2 text-sm font-semibold ".concat(e==null?void 0:e.textColor),children:Math.round((e==null?void 0:e.amount)||0).toFixed(2)}),s.jsx("h1",{className:"ml-2 text-xs ".concat(e==null?void 0:e.textColor),children:e==null?void 0:e.title})]})]})})},l))})]}),s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"my-4 border-b-2"}),((z=x())==null?void 0:z.length)>0&&s.jsx(a.Card,{className:" w-full",children:s.jsxs(a.CardBody,{children:[s.jsxs("div",{className:"flex items-center ",children:[s.jsx(G,{size:"1.8rem",color:"#2563eb"}),s.jsx(a.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Property Tax"})]}),s.jsx("div",{className:"my-3 border-b-2"}),s.jsx("div",{className:"grid grid-cols-4 gap-x-10 gap-y-6 mt-4",children:(B=x())==null?void 0:B.map((e,l)=>(e==null?void 0:e.is_menu)&&s.jsx("div",{children:e.isHref?s.jsxs("a",{href:window.location.origin+(e==null?void 0:e.route),className:"flex flex-col items-center",children:[s.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:e==null?void 0:e.icon}),s.jsx("p",{className:"text-xs mt-2 text-center",children:e==null?void 0:e.name})]}):s.jsxs(n,{to:e==null?void 0:e.route,className:"flex flex-col items-center",children:[s.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:e==null?void 0:e.icon}),s.jsx("p",{className:"text-xs mt-2 text-center",children:e==null?void 0:e.name})]})},l))})]})})]}),((D=h())==null?void 0:D.length)>0&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"my-4 border-b-2"}),s.jsx(a.Card,{className:" w-full",children:s.jsxs(a.CardBody,{children:[s.jsxs("div",{className:"flex items-center ",children:[s.jsx(O,{size:"1.8rem",color:"#2563eb"}),s.jsx(a.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Water Tax"})]}),s.jsx("div",{className:"my-3 border-b-2"}),s.jsx("div",{className:"grid grid-cols-4 gap-12 mt-4",children:(A=h())==null?void 0:A.map((e,l)=>(e==null?void 0:e.is_menu)&&s.jsx(n,{to:e==null?void 0:e.route,className:"flex flex-col items-center ",children:s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:e==null?void 0:e.icon}),s.jsx("p",{className:"text-xs mt-2 text-center",children:e==null?void 0:e.name})]})},e==null?void 0:e.id))})]})})]}),s.jsx("div",{className:"my-4 border-b-2"}),((P=j())==null?void 0:P.length)>0&&s.jsx(a.Card,{className:" w-full",children:s.jsxs(a.CardBody,{children:[s.jsxs("div",{className:"flex items-center ",children:[s.jsx(Z,{size:"1.8rem",color:"#2563eb"}),s.jsx(a.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Trade"})]}),s.jsx("div",{className:"my-3 border-b-2"}),s.jsx("div",{className:"grid grid-cols-4 gap-12 mt-4",children:(k=j())==null?void 0:k.map((e,l)=>(e==null?void 0:e.is_menu)&&s.jsx("div",{onClick:()=>m(e==null?void 0:e.route),className:"flex flex-col items-center ",children:s.jsxs("div",{className:"flex flex-col items-center",children:[s.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:e==null?void 0:e.icon}),s.jsx("p",{className:"text-xs mt-2 text-center",children:e==null?void 0:e.name})]})},e==null?void 0:e.id))})]})}),(o==null?void 0:o.result)&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"my-4 border-b-2"}),s.jsx(a.Card,{className:" w-full",children:s.jsxs(a.CardBody,{children:[s.jsxs("div",{className:"flex items-center ",children:[s.jsx(d,{size:"1.8rem",color:"#2563eb"}),s.jsx(a.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Municipal Rental"})]}),s.jsx("div",{className:"my-3 border-b-2"}),s.jsx("div",{className:"mt-4",children:s.jsx("a",{href:window.location.origin+((R=o==null?void 0:o.result)==null?void 0:R.route),children:s.jsxs("div",{className:"bg-blue-50 rounded-xl shadow py-10 px-5 w-full h-16 flex items-center justify-between",children:[s.jsxs("div",{className:"flex justify-start item-center gap-2",children:[s.jsx(d,{size:"2.5rem",color:"#60a5fa"}),s.jsx("h1",{className:"text-base font-semibold text-center mt-2",children:"Municipal Rental"})]}),s.jsx("div",{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3"})})})]})})})]})})]}),((F=U())==null?void 0:F.length)>0&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"my-4 border-b-2"}),s.jsx(a.Card,{className:" w-full",children:s.jsxs(a.CardBody,{children:[s.jsxs("div",{className:"flex items-center ",children:[s.jsx(d,{size:"1.8rem",color:"#2563eb"}),s.jsx(a.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Admin Panel"})]}),s.jsx("div",{className:"my-3 border-b-2"}),s.jsx("div",{className:"mt-4",children:s.jsx(n,{to:"/amc-app/admin/create-menu",children:s.jsxs("div",{className:"bg-blue-50 rounded-xl shadow py-10 px-5 w-full h-16 flex items-center justify-between",children:[s.jsxs("div",{className:"flex justify-start item-center gap-2",children:[s.jsx(d,{size:"2.5rem",color:"#60a5fa"}),s.jsx("h1",{className:"text-base font-semibold text-center mt-2",children:"Dashboard"})]}),s.jsx("div",{children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3"})})})]})})})]})})]})]})})}export{ds as default};
