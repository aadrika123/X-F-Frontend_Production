import{r as d,e as I,a as Z,w as Y,j as a,B as D,U as B,aj as P,P as F,n,i as o,A as W,b as k}from"./index-4f037684.js";const M=()=>{const{get_MasterData:L,searchPreviousYearPaidButNotPaidCurrentYear:f,searchNotPaidFrom20162017:b,api_newWardByZoneId:j}=F(),[m,w]=d.useState();d.useState();const[h,N]=d.useState(""),[v,x]=d.useState(!1),[g,y]=d.useState(null),[C,_]=d.useState(0);I(),Z("Payment Not Done Report");const r=Y({initialValues:{fiYear:"",wardId:"",zoneId:""},onSubmit:e=>{N(e==null?void 0:e.fiYear),y({zoneId:r.values.zoneId,wardId:r.values.wardId,fiYear:r.values.fiYear}),_(t=>t+1)}}),H=e=>{x(!0),r.setFieldValue("wardId","");let t={zoneId:e};W.post(j,t,k()).then(function(l){w(l.data.data),x(!1)}).catch(function(l){x(!1)})},S=e=>{let t=e.target.name,l=e.target.value;t=="zoneId"&&H(l)},z=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Zone",accessor:"zone_name",Cell:({cell:e})=>a.jsxs("div",{children:[a.jsx("span",{children:e.row.original.zone_name=="A"&&"A-East Zone"}),a.jsx("span",{children:e.row.original.zone_name=="B"&&"B-West Zone"}),a.jsx("span",{children:e.row.original.zone_name=="C"&&"C-North Zone"}),a.jsx("span",{children:e.row.original.zone_name=="D"&&"D-South Zone"})]})},{Header:"Ward No",accessor:"ward_name",Cell:e=>n(e==null?void 0:e.value)},{Header:"Holding No",accessor:"holding_no",Cell:e=>n(e==null?void 0:e.value)},{Header:"Property No",accessor:"property_no",Cell:e=>n(e==null?void 0:e.value)},{Header:"Address",accessor:"prop_address",Cell:e=>n(e==null?void 0:e.value)},{Header:"Owner Name",accessor:"owner_name",Cell:e=>n(e==null?void 0:e.value)},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>n(e==null?void 0:e.value)},{Header:"From Upto Year",accessor:"from_year",Cell:e=>{var s,i,c,u;const t=n((i=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:i.from_year),l=n((u=(c=e==null?void 0:e.row)==null?void 0:c.original)==null?void 0:u.upto_year);return`${t} / ${l}`},className:" w-[8%]"},{Header:"Demand",accessor:"total_tax",Cell:e=>o(e==null?void 0:e.value)},{Header:"Arrear Interest",accessor:"arrear_interest",Cell:e=>o(e==null?void 0:e.value)},{Header:"Total Demand",accessor:"total_demand",Cell:e=>o(e==null?void 0:e.value)}],A=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Zone",accessor:"zone_name",Cell:({cell:e})=>a.jsxs("div",{children:[a.jsx("span",{children:e.row.original.zone_name=="A"&&"A-East Zone"}),a.jsx("span",{children:e.row.original.zone_name=="B"&&"B-West Zone"}),a.jsx("span",{children:e.row.original.zone_name=="C"&&"C-North Zone"}),a.jsx("span",{children:e.row.original.zone_name=="D"&&"D-South Zone"})]})},{Header:"Ward No",accessor:"ward_name",Cell:e=>n(e==null?void 0:e.value)},{Header:"Holding No",accessor:"holding_no",Cell:e=>n(e==null?void 0:e.value)},{Header:"Property No",accessor:"property_no",Cell:e=>n(e==null?void 0:e.value)},{Header:"Address",accessor:"prop_address",Cell:e=>n(e==null?void 0:e.value)},{Header:"Owner Name",accessor:"owner_name",Cell:e=>n(e==null?void 0:e.value)},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>n(e==null?void 0:e.value)},{Header:"From Upto Year",accessor:"from_year",Cell:e=>{var s,i,c,u;const t=n((i=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:i.from_year),l=n((u=(c=e==null?void 0:e.row)==null?void 0:c.original)==null?void 0:u.upto_year);return`${t} / ${l}`},className:" w-[8%]"},{Header:"Demand",accessor:"total_tax",Cell:e=>o(e==null?void 0:e.value)},{Header:"Arrear Interest",accessor:"arrear_interest",Cell:e=>o(e==null?void 0:e.value)},{Header:"Total Demand",accessor:"total_demand",Cell:e=>o(e==null?void 0:e.value)}];return a.jsxs(a.Fragment,{children:[v&&a.jsx(D,{}),a.jsxs("form",{onChange:S,onSubmit:r.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{children:[a.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Zone ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsxs("select",{name:"zoneId",onChange:r.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[a.jsx("option",{value:"",children:"All Zones"}),a.jsx("option",{value:"1",children:"Zone A-East"}),a.jsx("option",{value:"2",children:"Zone B-West"}),a.jsx("option",{value:"3",children:"Zone C-North"}),a.jsx("option",{value:"4",children:"Zone D-South"})]}),a.jsx("p",{className:"text-red-500 text-xs",children:r.touched.zoneId&&r.errors.zoneId?r.errors.zoneId:null})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsxs("select",{name:"wardId",onChange:r.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[a.jsx("option",{value:"",children:"All Ward"}),m==null?void 0:m.map((e,t)=>a.jsx("option",{value:e.id,children:e.ward_name},t))]}),a.jsx("p",{className:"text-red-500 text-xs",children:r.touched.wardNo&&r.errors.wardNo?r.errors.wardNo:null})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:"Not Paid From"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"fiYear",onChange:r.handleChange,id:"fiYear",className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[a.jsx("option",{value:"",children:"Select"}),a.jsx("option",{value:"2024-2025",children:"2024-2025"}),a.jsx("option",{value:"2023-2024",children:"2023-2024"}),a.jsx("option",{value:"2016-2017",children:"2016-2017"})]})})]}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end ",children:a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(B,{})}),"Search"]})})]})]}),g!=null&&a.jsx(P,{type:"old",api:h=="current"?f:b,columns:h=="current"?A:z,requestBody:g,changeData:C}),a.jsx("div",{className:"h-[20vh]"})]})};export{M as default};
