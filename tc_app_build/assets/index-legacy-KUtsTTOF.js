System.register(["./index-legacy-A4VBbd_s.js","./index-legacy-1y_oEYSa.js"],(function(e,s){"use strict";var r,l,a,i,t,c,o,n,d,m,x,h,j,p,f,u,g;return{setters:[function(e){r=e.G,l=e.U,a=e.u,i=e.a,t=e.j,c=e.r,o=e.I,n=e.F,d=e.L,m=e.M,x=e.A,h=e.b,j=e.c,p=e.d,f=e.B,u=e.e},function(e){g=e.P}],execute:function(){function s(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"}},{tag:"path",attr:{d:"M9 7l4 0"}},{tag:"path",attr:{d:"M9 11l4 0"}}]})(e)}e("default",(function(){var e=l().currentRole,r=a(),h=r.user,j=(r.logout,i());return t.jsx(g,{title:"Dashboard",children:t.jsxs("div",{className:"bg-gray-50 p-4 ",children:[t.jsx("div",{className:"grid grid-cols-1 gap-4 mb-4",children:t.jsx(c.Card,{className:" w-full",children:t.jsxs(c.CardBody,{children:[t.jsxs("div",{className:"flex items-center -mt-3",children:[t.jsxs("div",{className:"flex items-center justify-start",children:[t.jsx(o,{size:"1.8rem",color:"#2563eb"}),t.jsx(c.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Profile"})]}),t.jsx("div",{className:"ml-auto",children:t.jsx(c.Button,{size:"sm",onClick:function(){return j("/amc-app/property/profile")},children:"Edit"})})]}),t.jsx("div",{className:"my-3 border-b-2"}),t.jsxs("div",{className:"flex items-center justify-start",children:[t.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj7E5IMjJug49eq1KM-ZjW3VEUEl4_dfZUxx2m2iBdbmxLysvvrvvwf1TKN1wuReGzJ8&usqp=CAU",alt:"profile",className:"w-24 h-24 rounded-2xl border-2 border-gray-200"}),t.jsxs("div",{className:"ml-4",children:[t.jsx("h1",{className:"font-semibold text-blue-400",children:null==h?void 0:h.user_name}),t.jsx("h1",{className:"text-sm ",children:null==h?void 0:h.mobile}),t.jsx("h1",{className:"text-sm ",children:null==h?void 0:h.email}),t.jsx("h1",{className:"text-sm ",children:null==h?void 0:h.role})]})]})]})})}),e(["TAX COLLECTOR"])&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"flex items-center",children:t.jsx(c.Typography,{variant:"h6",color:"blue-gray",className:"ml-2 mt-3",children:"Daily Collection"})}),t.jsx("div",{className:"mb-2 border-b-2"}),t.jsx("div",{className:"grid grid-cols-2 gap-4",children:y.map((function(e,s){return t.jsx(c.Card,{className:"w-full ".concat(e.bgColor),children:t.jsx(c.CardBody,{className:"-m-2",children:t.jsxs("div",{className:"flex items-center justify-start ",children:[t.jsx("div",{className:"rounded-full w-10 h-10 flex items-center justify-center ".concat(e.iconBgColor),children:e.icon}),t.jsxs("div",{children:[t.jsx("h1",{className:"ml-2 text-sm font-semibold ".concat(e.textColor),children:e.amount}),t.jsx("h1",{className:"ml-2 text-xs ".concat(e.textColor),children:e.title})]})]})})},s)}))})]}),e(["TAX COLLECTOR","SENIOUR LIPIK"])&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"my-4 border-b-2"}),t.jsx(c.Card,{className:"w-full",children:t.jsxs(c.CardBody,{children:[t.jsxs("div",{className:"flex items-center ",children:[t.jsx(n,{size:"1.8rem",color:"#2563eb"}),t.jsx(c.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Property Tax"})]}),t.jsx("div",{className:"my-3 border-b-2"}),t.jsx("div",{className:"grid grid-cols-4 gap-x-10 gap-y-6 mt-4",children:null==v?void 0:v.filter((function(e){return e.assignRole.includes(null==h?void 0:h.role[0])})).map((function(e,s){return t.jsx("div",{children:t.jsxs(d,{to:e.href,className:"flex flex-col items-center",children:[t.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:e.icon}),t.jsx("p",{className:"text-xs mt-2 text-center",children:e.title})]})},s)}))})]})})]}),e(["TAX COLLECTOR"])&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"my-4 border-b-2"}),t.jsx(c.Card,{className:" w-full",children:t.jsxs(c.CardBody,{children:[t.jsxs("div",{className:"flex items-center ",children:[t.jsx(m,{size:"1.8rem",color:"#2563eb"}),t.jsx(c.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Water Tax"})]}),t.jsx("div",{className:"my-3 border-b-2"}),t.jsx("div",{className:"grid grid-cols-4 gap-12 mt-4",children:b.map((function(e,s){return t.jsx(d,{to:e.href,className:"flex flex-col items-center ",children:t.jsxs("div",{className:"flex flex-col items-center",children:[t.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:e.icon}),t.jsx("p",{className:"text-xs mt-2 text-center",children:e.title})]})},e.id)}))})]})})]}),t.jsx("div",{className:"my-4 border-b-2"}),e(["TAX COLLECTOR","TAX DAROGA"])&&t.jsx(c.Card,{className:" w-full",children:t.jsxs(c.CardBody,{children:[t.jsxs("div",{className:"flex items-center ",children:[t.jsx(s,{size:"1.8rem",color:"#2563eb"}),t.jsx(c.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Trade"})]}),t.jsx("div",{className:"my-3 border-b-2"}),t.jsx("div",{className:"grid grid-cols-4 gap-12 mt-4",children:null==N?void 0:N.filter((function(e){var s;return null==e||null===(s=e.assignRole)||void 0===s?void 0:s.includes(null==h?void 0:h.role[0])})).map((function(e,s){return t.jsx(d,{to:e.href,className:"flex flex-col items-center ",children:t.jsxs("div",{className:"flex flex-col items-center",children:[t.jsx("div",{className:"bg-blue-50 rounded-xl shadow w-14 h-14 flex items-center justify-center",children:e.icon}),t.jsx("p",{className:"text-xs mt-2 text-center",children:e.title})]})},e.id)}))})]})}),"TAX COLLECTOR"===(null==h?void 0:h.role[0])&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"my-4 border-b-2"}),t.jsx(c.Card,{className:" w-full",children:t.jsxs(c.CardBody,{children:[t.jsxs("div",{className:"flex items-center ",children:[t.jsx(x,{size:"1.8rem",color:"#2563eb"}),t.jsx(c.Typography,{variant:"h6",color:"blue-gray",className:"ml-2",children:"Municipal Rental"})]}),t.jsx("div",{className:"my-3 border-b-2"}),t.jsx("div",{className:"mt-4",children:t.jsx("a",{href:"https://modernulb.com/daily-license-app",children:t.jsxs("div",{className:"bg-blue-50 rounded-xl shadow py-10 px-5 w-full h-16 flex items-center justify-between",children:[t.jsxs("div",{className:"flex justify-start item-center gap-2",children:[t.jsx(x,{size:"2.5rem",color:"#60a5fa"}),t.jsx("h1",{className:"text-base font-semibold text-center mt-2",children:"Municipal Rental"})]}),t.jsx("div",{children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:t.jsx("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3"})})})]})})})]})})]})]})})}));var v=[{id:1,title:"Saf Verification",icon:t.jsx(h,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/property/saf-verification-list",assignRole:["SENIOUR LIPIK","TAX COLLECTOR"]},{id:2,title:"Apply Assessment",icon:t.jsx(j,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/property/apply-assessment",assignRole:["TAX COLLECTOR"]},{id:3,title:"Search Holding",icon:t.jsx(p,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/property/search-holding",assignRole:["TAX COLLECTOR"]},{id:4,title:"Collection Report",icon:t.jsx(f,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/property/collection-report",assignRole:["TAX COLLECTOR"]},{id:4,title:"Search Application",icon:t.jsx(x,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/property/search-saf-application",assignRole:["SENIOUR LIPIK","TAX COLLECTOR"]}],b=[{id:1,title:"Consumer Search",icon:t.jsx(p,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/water/search-consumer"},{id:2,title:"Collection Report",icon:t.jsx(f,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/water/collection-report"}],N=[{id:1,title:"New Application",icon:t.jsx(h,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/trade/new-application",assignRole:["TAX COLLECTOR"]},{id:2,title:"Search Application",icon:t.jsx(p,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/trade/search-application",assignRole:["TAX COLLECTOR"]},{id:3,title:"Track Application",icon:t.jsx(j,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/trade/track-license",assignRole:["TAX COLLECTOR"]},{id:4,title:"Trade Inbox",icon:t.jsx(u,{size:"1.7rem",color:"#60a5fa"}),href:"/amc-app/trade/utc-inbox",assignRole:["TAX DAROGA"]}],y=[{id:1,title:"Property Tax",amount:"0",icon:t.jsx(f,{size:"1.5rem",color:"#f97316"}),bgColor:"bg-orange-50",textColor:"text-orange-400",iconBgColor:"bg-orange-200"},{id:2,title:"Water Tax",amount:"0",icon:t.jsx(f,{size:"1.5rem",color:"#10b981"}),bgColor:"bg-green-50",textColor:"text-green-400",iconBgColor:"bg-green-200"},{id:3,title:"Trade Tax",amount:"0",icon:t.jsx(f,{size:"1.5rem",color:"#7c3aed"}),bgColor:"bg-indigo-50",textColor:"text-indigo-400",iconBgColor:"bg-indigo-200"},{id:4,title:"Advertisement",amount:"0",icon:t.jsx(f,{size:"1.5rem",color:"#7c3aed"}),bgColor:"bg-purple-50",textColor:"text-purple-400",iconBgColor:"bg-purple-200"}]}}}));
