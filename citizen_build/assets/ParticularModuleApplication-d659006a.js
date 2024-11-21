import{a as j,r as n,j as e,L as f,C as b,u as w,A as y,f as N}from"./index-d8dc37f9.js";import{B as A}from"./BackComponent-6cef75f1.js";function v(a){var m,i,d,h,g,l,s,u;const o=j(),[x,p]=n.useState(!1);console.log("-----PROPS applicationListByModule PROPERTY----",(i=(m=a.applicationList)==null?void 0:m.Property)==null?void 0:i.SAF),console.log("---by holding property list--------",(h=(d=a==null?void 0:a.propertyApplicationList)==null?void 0:d.Holding)==null?void 0:h.applications);let c=(l=(g=a.applicationList)==null?void 0:g.Property)==null?void 0:l.SAF,r=(u=(s=a.propertyApplicationList)==null?void 0:s.Holding)==null?void 0:u.applications;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"-mt-8 p-2 ",children:e.jsx(f,{to:"/dashboardEntry",children:e.jsx(A,{})})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2  w-full ",children:e.jsxs("div",{className:"col-span-10 w-full bg-gray-50 rounded-lg ",children:[e.jsx("h1",{className:"font-mono h-10 text-3xl text-center  text-sky-500 hover:bg-sky-50 py-1 px-4  m-4",children:"YOUR APPLICATION  !"}),e.jsxs("div",{className:"flex flex-row",children:[e.jsx("div",{className:"text-xs bg-slate-200 px-3 py-2 ml-8 shadow-md text-gray-700 font-bold",children:e.jsx("button",{children:"All"})}),e.jsx("div",{className:"text-xs bg-amber-300 px-3 py-2 ml-8 shadow-md text-gray-700  font-bold",children:e.jsx("button",{type:"button",onClick:()=>p(!x),children:"Your Property"})})]}),x!=!0&&e.jsx("div",{className:"",children:c==null?void 0:c.map(t=>e.jsx("div",{class:"flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-6 max-w-2xl md:max-w-4xl ",children:e.jsxs("div",{class:"flex items-start px-4 py-6",children:[e.jsx("img",{class:"w-8 h-8  object-cover ml-4 shadow",src:"https://cdn-icons-png.flaticon.com/512/609/609803.png",alt:"avatar"}),e.jsx("div",{className:"",children:e.jsx("button",{className:"bg-amber-500 text-gray-50 text-sm py-0 px-3 mt-9  -ml-10 rounded-sm shadow-md",onClick:()=>o("/propApplicationDetails/"+t.application_id),children:"view"})}),e.jsxs("div",{class:"pl-9",children:[e.jsx(e.Fragment,{children:e.jsxs("div",{class:"flex items-center justify-between",children:[e.jsxs("h2",{class:"text-md font-semibold text-gray-900 -mt-1",children:["SAF NO : ",t.saf_no," "]}),e.jsx("small",{class:"text-sm text-gray-700 ml-8 font-semibold",children:"STATUS : PENDING"})]})}),e.jsxs("div",{className:"flex flex-row mt-2 space-x-8",children:[e.jsx("h1",{className:"text-sm text-gray-800 ",children:"WARD NO : 52/1"}),e.jsxs("h1",{className:"text-sm text-gray-800 ",children:["ASSESSMENT TYPE : ",t.assessment_type]}),e.jsxs("p",{class:"text-gray-700 text-sm",children:["APPLY DATE : ",t.created_at," "]})]})]})]})}))}),e.jsx("div",{className:"",children:r==null?void 0:r.map(t=>e.jsx("div",{class:"flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-6 max-w-2xl md:max-w-4xl ",children:e.jsxs("div",{class:"flex items-start px-4 py-6",children:[e.jsx("img",{class:"w-8 h-8  object-cover ml-4 shadow",src:"https://cdn-icons-png.flaticon.com/512/609/609803.png",alt:"avatar"}),e.jsx("div",{className:"",children:e.jsx("button",{className:"bg-amber-500 text-gray-50 text-sm py-0 px-3 mt-9  -ml-10 rounded-sm shadow-md",onClick:()=>o(`/holdingPropertyDetails/${t.prop_id}`),children:"view"})}),e.jsxs("div",{class:"pl-9",children:[e.jsx(e.Fragment,{children:e.jsxs("div",{class:"flex items-center justify-between",children:[e.jsxs("h2",{class:"text-md font-semibold text-gray-900 -mt-1",children:["HOLDING NO : ",t.new_holding_no]}),e.jsx("small",{class:"text-sm text-gray-700 font-semibold",children:"STATUS: APPROVED"})]})}),e.jsxs("div",{className:"flex flex-row mt-2 space-x-8",children:[e.jsx("h1",{className:"text-sm text-gray-800 ",children:"WARD NO : 52/1"}),e.jsxs("h1",{className:"text-sm text-gray-800 ",children:["ASSESSMENT TYPE : ",t.assessment_type]}),e.jsxs("p",{class:"text-gray-700 text-sm",children:["APPLY DATE : ",t.created_at," "]})]}),t.holding_no==""?"":e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-row mt-2 space-x-4 ",children:[e.jsx("button",{className:"text-xs bg-teal-500 text-gray-50 py-1 rounded-md px-3 shadow-lg ",onClick:()=>o(`/safform/re/${t.prop_id}`),children:"RE-ASSESSMENT"}),e.jsx("button",{className:"text-xs bg-teal-500 text-gray-50 py-1 rounded-md px-3 shadow-lg ",onClick:()=>o(`/safform/waterHarvesting/${t.prop_id}`),children:" WATER HARVESTING"}),e.jsx("button",{className:"text-xs bg-teal-500 text-gray-50 py-1 rounded-md px-3 shadow-lg ",onClick:()=>o(`/con-form/${t.prop_id}`),children:"CONCESSION"}),e.jsx("button",{className:"text-xs bg-teal-500 text-gray-50 py-1 rounded-md px-3 shadow-lg ",onClick:()=>o(`/objection/${t.prop_id}`),children:"OBJECTION"})]})})]})]})}))})]})})]})}function S(a){return e.jsx("div",{className:`${a.show?"grid":"hidden"} bg-transparent bg z-20 absolute w-full h-screen`,children:e.jsx("div",{className:"h-24 w-24 mx-auto my-[15%]",children:e.jsx(b,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})})}function L(){const{api_applicationListByModule:a}=N(),[o,x]=n.useState(),[p,c]=n.useState(),[r,m]=n.useState(!1);let i=w();console.log("module...",i.module);let d=window.localStorage.getItem("token");const h=()=>{l(!0),y.post(a,{module:i.module},{headers:{Authorization:`Bearer ${d}`,Accept:"application/json"}}).then(function(s){console.log("apllication list holding of property----- ",s.data.data),x(s.data.data),setTimeout(()=>{l(!1)},2e3)}).catch(function(s){console.log(s),l(!1)})};n.useEffect(()=>{h()},[]);const g=()=>{l(!0),y.post(a,{module:"Holding"},{headers:{Authorization:`Bearer ${d}`,Accept:"application/json"}}).then(function(s){console.log("apllication list by holding 1----- ",s.data.data),c(s.data.data),setTimeout(()=>{l(!1)},2e3)}).catch(function(s){console.log(s),l(!1)})};n.useEffect(()=>{g()},[]);const l=s=>{m(s)};return console.log("-----applicationListByModule PROPERTY----",o),console.log("-----property application list holding----",p),e.jsxs(e.Fragment,{children:[e.jsx(S,{show:r}),e.jsx("div",{className:"w-full  rounded-lg  max-auto py-4 px-4",children:i.module=="Property"&&e.jsx(v,{applicationList:o,propertyApplicationList:p,showLoader:l})})]})}export{L as default};
