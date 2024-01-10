import{G as m,u as x,a as h,j as e,r as l,I as p,L as t,M as j,b as c,c as n,d as g,B as r,A as f}from"./index-CLQTue-1.js";import{P as b}from"./index-48193XFW.js";function N(a){return m({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M570.69,236.27,512,184.44V48a16,16,0,0,0-16-16H432a16,16,0,0,0-16,16V99.67L314.78,10.3C308.5,4.61,296.53,0,288,0s-20.46,4.61-26.74,10.3l-256,226A18.27,18.27,0,0,0,0,248.2a18.64,18.64,0,0,0,4.09,10.71L25.5,282.7a21.14,21.14,0,0,0,12,5.3,21.67,21.67,0,0,0,10.69-4.11l15.9-14V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V269.88l15.91,14A21.94,21.94,0,0,0,538.63,288a20.89,20.89,0,0,0,11.87-5.31l21.41-23.81A21.64,21.64,0,0,0,576,248.19,21,21,0,0,0,570.69,236.27ZM288,176a64,64,0,1,1-64,64A64,64,0,0,1,288,176ZM400,448H176a16,16,0,0,1-16-16,96,96,0,0,1,96-96h64a96,96,0,0,1,96,96A16,16,0,0,1,400,448Z"}}]})(a)}const o=[{id:1,title:"Saf Verification",icon:e.jsx(c,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/property/saf-verification-list",assignRole:["SENIOUR LIPIK","TAX COLLECTOR"]},{id:2,title:"Apply Assessment",icon:e.jsx(n,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/property/apply-assessment",assignRole:["TAX COLLECTOR"]},{id:3,title:"Search Holding",icon:e.jsx(g,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/property/search-holding",assignRole:["TAX COLLECTOR"]},{id:4,title:"Collection Report",icon:e.jsx(r,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/property/collection-report",assignRole:["TAX COLLECTOR"]},{id:4,title:"Search Application",icon:e.jsx(f,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/property/search-saf-application",assignRole:["SENIOUR LIPIK","TAX COLLECTOR"]}],u=[{id:1,title:"Consumer Search",icon:e.jsx(c,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/water/search-consumer"},{id:2,title:"Collection Report",icon:e.jsx(n,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/water/collection-report"}],C=[{id:1,title:"Property Tax",amount:"0",icon:e.jsx(r,{size:"1.5rem",color:"#f97316"}),bgColor:"bg-orange-50",textColor:"text-orange-400",iconBgColor:"bg-orange-200"},{id:2,title:"Water Tax",amount:"0",icon:e.jsx(r,{size:"1.5rem",color:"#10b981"}),bgColor:"bg-green-50",textColor:"text-green-400",iconBgColor:"bg-green-200"},{id:3,title:"Trade Tax",amount:"0",icon:e.jsx(r,{size:"1.5rem",color:"#7c3aed"}),bgColor:"bg-indigo-50",textColor:"text-indigo-400",iconBgColor:"bg-indigo-200"},{id:4,title:"Advertisement",amount:"0",icon:e.jsx(r,{size:"1.5rem",color:"#7c3aed"}),bgColor:"bg-purple-50",textColor:"text-purple-400",iconBgColor:"bg-purple-200"}];function A(){const{user:a,logout:y}=x(),d=h();return e.jsx(b,{title:"Dashboard",children:e.jsxs("div",{className:"bg-gray-50 p-4 ",children:[e.jsx("div",{className:"grid grid-cols-1 gap-4 mb-4",children:e.jsx(l.Card,{className:" w-full",children:e.jsxs(l.CardBody,{children:[e.jsxs("div",{className:"flex items-center -mt-3",children:[e.jsxs("div",{className:"flex items-center justify-start",children:[e.jsx(p,{size:"1.8rem",color:"#2563eb"}),e.jsx(l.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Profile"})]}),e.jsx("div",{className:"ml-auto",children:e.jsx(l.Button,{size:"sm",onClick:()=>d("/amc-app/property/profile"),children:"Edit"})})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"flex items-center justify-start",children:[e.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj7E5IMjJug49eq1KM-ZjW3VEUEl4_dfZUxx2m2iBdbmxLysvvrvvwf1TKN1wuReGzJ8&usqp=CAU",alt:"profile",className:"w-24 h-24 rounded-2xl border-2 border-gray-200"}),e.jsxs("div",{className:"ml-4",children:[e.jsx("h1",{className:"font-semibold text-blue-400",children:a==null?void 0:a.user_name}),e.jsx("h1",{className:"text-sm ",children:a==null?void 0:a.mobile}),e.jsx("h1",{className:"text-sm ",children:a==null?void 0:a.email}),e.jsx("h1",{className:"text-sm ",children:a==null?void 0:a.role})]})]})]})})}),e.jsx("div",{className:"flex items-center",children:e.jsx(l.Typography,{variant:"h6",color:"blue-gray",className:"ml-2 mt-3",children:"Daily Collection"})}),e.jsx("div",{className:"mb-2 border-b-2"}),e.jsx("div",{className:"grid grid-cols-2 gap-4",children:C.map((s,i)=>e.jsx(l.Card,{className:"w-full ".concat(s.bgColor),children:e.jsx(l.CardBody,{className:"-m-2",children:e.jsxs("div",{className:"flex items-center justify-start ",children:[e.jsx("div",{className:"rounded-full w-10 h-10 flex items-center justify-center ".concat(s.iconBgColor),children:s.icon}),e.jsxs("div",{children:[e.jsx("h1",{className:"ml-2 text-sm font-semibold ".concat(s.textColor),children:s.amount}),e.jsx("h1",{className:"ml-2 text-xs ".concat(s.textColor),children:s.title})]})]})})},i))}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsx(l.Card,{className:"w-full",children:e.jsxs(l.CardBody,{children:[e.jsxs("div",{className:"flex items-center ",children:[e.jsx(N,{size:"1.8rem",color:"#2563eb"}),e.jsx(l.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Property Tax"})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"grid grid-cols-4 gap-x-10 gap-y-6 mt-4",children:o==null?void 0:o.filter(s=>s.assignRole.includes(a==null?void 0:a.role[0])).map((s,i)=>e.jsx("div",{children:e.jsxs(t,{to:s.href,className:"flex flex-col items-center",children:[e.jsx("div",{className:"bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center",children:s.icon}),e.jsx("p",{className:"text-xs mt-2 text-center",children:s.title})]})},i))})]})}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsx(l.Card,{className:" w-full",children:e.jsxs(l.CardBody,{children:[e.jsxs("div",{className:"flex items-center ",children:[e.jsx(j,{size:"1.8rem",color:"#2563eb"}),e.jsx(l.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Water Tax"})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"grid grid-cols-4 gap-12 mt-4",children:u.map((s,i)=>e.jsx(t,{to:s.href,className:"flex flex-col items-center ",children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center",children:s.icon}),e.jsx("p",{className:"text-xs mt-2 text-center",children:s.title})]})},s.id))})]})})]})})}export{A as default};
