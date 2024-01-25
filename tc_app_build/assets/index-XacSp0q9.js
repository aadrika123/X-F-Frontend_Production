import{G as j,U as g,u as f,a as b,j as e,r as l,I as N,F as C,L as t,M as u,A as d,b as m,c as h,d as x,B as c,e as v}from"./index-LoJAK0NZ.js";import{P as y}from"./index-tzwV5Q20.js";function T(i){return j({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"}},{tag:"path",attr:{d:"M9 7l4 0"}},{tag:"path",attr:{d:"M9 11l4 0"}}]})(i)}const o=[{id:1,title:"Saf Verification",icon:e.jsx(m,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/property/saf-verification-list",assignRole:["SENIOUR LIPIK","TAX COLLECTOR"]},{id:2,title:"Apply Assessment",icon:e.jsx(h,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/property/apply-assessment",assignRole:["TAX COLLECTOR"]},{id:3,title:"Search Holding",icon:e.jsx(x,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/property/search-holding",assignRole:["TAX COLLECTOR"]},{id:4,title:"Collection Report",icon:e.jsx(c,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/property/collection-report",assignRole:["TAX COLLECTOR"]},{id:4,title:"Search Application",icon:e.jsx(d,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/property/search-saf-application",assignRole:["SENIOUR LIPIK","TAX COLLECTOR"]}],L=[{id:1,title:"Consumer Search",icon:e.jsx(x,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/water/search-consumer"},{id:2,title:"Collection Report",icon:e.jsx(c,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/water/collection-report"}],n=[{id:1,title:"New Application",icon:e.jsx(m,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/trade/new-application",assignRole:["TAX COLLECTOR"]},{id:2,title:"Search Application",icon:e.jsx(x,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/trade/search-application",assignRole:["TAX COLLECTOR"]},{id:3,title:"Track Application",icon:e.jsx(h,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/trade/track-license",assignRole:["TAX COLLECTOR"]},{id:4,title:"Trade Inbox",icon:e.jsx(v,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/trade/utc-inbox",assignRole:["TAX DAROGA"]}],R=[{id:1,title:"Property Tax",amount:"0",icon:e.jsx(c,{size:"1.5rem",color:"#f97316"}),bgColor:"bg-orange-50",textColor:"text-orange-400",iconBgColor:"bg-orange-200"},{id:2,title:"Water Tax",amount:"0",icon:e.jsx(c,{size:"1.5rem",color:"#10b981"}),bgColor:"bg-green-50",textColor:"text-green-400",iconBgColor:"bg-green-200"},{id:3,title:"Trade Tax",amount:"0",icon:e.jsx(c,{size:"1.5rem",color:"#7c3aed"}),bgColor:"bg-indigo-50",textColor:"text-indigo-400",iconBgColor:"bg-indigo-200"},{id:4,title:"Advertisement",amount:"0",icon:e.jsx(c,{size:"1.5rem",color:"#7c3aed"}),bgColor:"bg-purple-50",textColor:"text-purple-400",iconBgColor:"bg-purple-200"}];function z(){const{currentRole:i}=g(),{user:a,logout:O}=f(),p=b();return e.jsx(y,{title:"Dashboard",children:e.jsxs("div",{className:"bg-gray-50 p-4 ",children:[e.jsx("div",{className:"grid grid-cols-1 gap-4 mb-4",children:e.jsx(l.Card,{className:" w-full",children:e.jsxs(l.CardBody,{children:[e.jsxs("div",{className:"flex items-center -mt-3",children:[e.jsxs("div",{className:"flex items-center justify-start",children:[e.jsx(N,{size:"1.8rem",color:"#2563eb"}),e.jsx(l.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Profile"})]}),e.jsx("div",{className:"ml-auto",children:e.jsx(l.Button,{size:"sm",onClick:()=>p("/amc-app/property/profile"),children:"Edit"})})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"flex items-center justify-start",children:[e.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj7E5IMjJug49eq1KM-ZjW3VEUEl4_dfZUxx2m2iBdbmxLysvvrvvwf1TKN1wuReGzJ8&usqp=CAU",alt:"profile",className:"w-24 h-24 rounded-2xl border-2 border-gray-200"}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h1",{className:"font-semibold text-blue-400",children:a==null?void 0:a.user_name}),e.jsx("h1",{className:"text-sm ",children:a==null?void 0:a.mobile}),e.jsx("h1",{className:"text-sm ",children:a==null?void 0:a.email}),e.jsx("h1",{className:"text-sm ",children:a==null?void 0:a.role})]})]})]})})}),i(["TAX COLLECTOR"])&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center",children:e.jsx(l.Typography,{variant:"h6",color:"blue-gray",className:"ml-2 mt-3",children:"Daily Collection"})}),e.jsx("div",{className:"mb-2 border-b-2"}),e.jsx("div",{className:"grid grid-cols-2 gap-4",children:R.map((s,r)=>e.jsx(l.Card,{className:"w-full ".concat(s.bgColor),children:e.jsx(l.CardBody,{className:"-m-2",children:e.jsxs("div",{className:"flex items-center justify-start ",children:[e.jsx("div",{className:"rounded-full w-10 h-10 flex items-center justify-center ".concat(s.iconBgColor),children:s.icon}),e.jsxs("div",{children:[e.jsx("h1",{className:"ml-2 text-sm font-semibold ".concat(s.textColor),children:s.amount}),e.jsx("h1",{className:"ml-2 text-xs ".concat(s.textColor),children:s.title})]})]})})},r))})]}),i(["TAX COLLECTOR","SENIOUR LIPIK"])&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-4 border-b-2"}),e.jsx(l.Card,{className:"w-full",children:e.jsxs(l.CardBody,{children:[e.jsxs("div",{className:"flex items-center ",children:[e.jsx(C,{size:"1.8rem",color:"#2563eb"}),e.jsx(l.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Property Tax"})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"grid grid-cols-4 gap-x-10 gap-y-6 mt-4",children:o==null?void 0:o.filter(s=>s.assignRole.includes(a==null?void 0:a.role[0])).map((s,r)=>e.jsx("div",{children:e.jsxs(t,{to:s.href,className:"flex flex-col items-center",children:[e.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:s.icon}),e.jsx("p",{className:"text-xs mt-2 text-center",children:s.title})]})},r))})]})})]}),i(["TAX COLLECTOR"])&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-4 border-b-2"}),e.jsx(l.Card,{className:" w-full",children:e.jsxs(l.CardBody,{children:[e.jsxs("div",{className:"flex items-center ",children:[e.jsx(u,{size:"1.8rem",color:"#2563eb"}),e.jsx(l.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Water Tax"})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"grid grid-cols-4 gap-12 mt-4",children:L.map((s,r)=>e.jsx(t,{to:s.href,className:"flex flex-col items-center ",children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:s.icon}),e.jsx("p",{className:"text-xs mt-2 text-center",children:s.title})]})},s.id))})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),i(["TAX COLLECTOR","TAX DAROGA"])&&e.jsx(l.Card,{className:" w-full",children:e.jsxs(l.CardBody,{children:[e.jsxs("div",{className:"flex items-center ",children:[e.jsx(T,{size:"1.8rem",color:"#2563eb"}),e.jsx(l.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Trade"})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"grid grid-cols-4 gap-12 mt-4",children:n==null?void 0:n.filter(s=>{var r;return(r=s==null?void 0:s.assignRole)==null?void 0:r.includes(a==null?void 0:a.role[0])}).map((s,r)=>e.jsx(t,{to:s.href,className:"flex flex-col items-center ",children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:s.icon}),e.jsx("p",{className:"text-xs mt-2 text-center",children:s.title})]})},s.id))})]})}),(a==null?void 0:a.role[0])==="TAX COLLECTOR"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-4 border-b-2"}),e.jsx(l.Card,{className:" w-full",children:e.jsxs(l.CardBody,{children:[e.jsxs("div",{className:"flex items-center ",children:[e.jsx(d,{size:"1.8rem",color:"#2563eb"}),e.jsx(l.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Municipal Rental"})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"mt-4",children:e.jsx("a",{href:"https://modernulb.com/daily-license-app",children:e.jsxs("div",{className:"bg-blue-50 rounded-xl shadow py-10 px-5 w-full h-16 flex items-center justify-between",children:[e.jsxs("div",{className:"flex justify-start item-center gap-2",children:[e.jsx(d,{size:"2.5rem",color:"#60a5fa"}),e.jsx("h1",{className:"text-base font-semibold text-center mt-2",children:"Municipal Rental"})]}),e.jsx("div",{children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3"})})})]})})})]})})]})]})})}export{z as default};
