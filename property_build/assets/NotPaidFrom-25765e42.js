import{r as o,a as R,k as B,o as E,A as T,N as W,j as a,bR as q,bV as O,bP as U,n as i,f as y}from"./index-9ed6f04c.js";const Y=()=>{var v;const{get_MasterData:C,searchPreviousYearPaidButNotPaidCurrentYear:H,searchNotPaidFrom20162017:S}=U(),[w,A]=o.useState();o.useState();const[N,P]=o.useState("");o.useState(!1);const[_,D]=o.useState(null),[k,F]=o.useState(0),b=R();B("Payment Not Done Report");const j="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",f=E({initialValues:{year:"current",wardId:""},onSubmit:e=>{P(e==null?void 0:e.year),D({wardMstrId:f.values.wardId}),F(n=>n+1)}});o.useEffect(()=>{M()},[]);const M=()=>{T.get(C,W()).then(e=>{var n,t,r;((n=e==null?void 0:e.data)==null?void 0:n.status)==!0&&A((r=(t=e==null?void 0:e.data)==null?void 0:t.data)==null?void 0:r.ward_master)}).catch(e=>console.log("error getting master list",e))},I=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_name",Cell:e=>i(e==null?void 0:e.value)},{Header:"Holding No",accessor:"new_holding_no",Cell:({cell:e})=>{var n,t,r,d,s,u,l,m,c,h;if(((t=(n=e==null?void 0:e.row)==null?void 0:n.original)==null?void 0:t.new_holding_no)==null||((d=(r=e==null?void 0:e.row)==null?void 0:r.original)==null?void 0:d.new_holding_no)==""||((u=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:u.new_holding_no)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if(((m=(l=e==null?void 0:e.row)==null?void 0:l.original)==null?void 0:m.new_holding_no)!=null)return a.jsx("div",{className:"cursor-pointer underline",onClick:()=>{var x,g;return b("/holdingPropertyDetails/"+((g=(x=e==null?void 0:e.row)==null?void 0:x.original)==null?void 0:g.property_id))},children:(h=(c=e==null?void 0:e.row)==null?void 0:c.original)==null?void 0:h.new_holding_no})}},{Header:"Applicant Name",accessor:"owner_name",Cell:e=>i(e==null?void 0:e.value)},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>i(e==null?void 0:e.value)},{Header:"Address",accessor:"prop_address",Cell:e=>i(e==null?void 0:e.value)},{Header:"Demand",accessor:"total_demand",Cell:e=>y(e==null?void 0:e.value)}],L=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_name",Cell:e=>i(e==null?void 0:e.value)},{Header:"Holding No",accessor:"new_holding_no",Cell:({cell:e})=>{var n,t,r,d,s,u,l,m,c,h;if(((t=(n=e==null?void 0:e.row)==null?void 0:n.original)==null?void 0:t.new_holding_no)==null||((d=(r=e==null?void 0:e.row)==null?void 0:r.original)==null?void 0:d.new_holding_no)==""||((u=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:u.new_holding_no)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if(((m=(l=e==null?void 0:e.row)==null?void 0:l.original)==null?void 0:m.new_holding_no)!=null)return a.jsx("div",{className:"cursor-pointer underline",onClick:()=>{var x,g;return b("/holdingPropertyDetails/"+((g=(x=e==null?void 0:e.row)==null?void 0:x.original)==null?void 0:g.property_id))},children:(h=(c=e==null?void 0:e.row)==null?void 0:c.original)==null?void 0:h.new_holding_no})}},{Header:"Applicant Name",accessor:"owner_name",Cell:e=>i(e==null?void 0:e.value)},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>i(e==null?void 0:e.value)},{Header:"Address",accessor:"prop_address",Cell:e=>i(e==null?void 0:e.value)},{Header:"Demand",accessor:"total_demand",Cell:e=>y(e==null?void 0:e.value)}];return a.jsxs(a.Fragment,{children:[a.jsxs("form",{onChange:f.handleChange,onSubmit:f.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardId",id:"",className:j,children:[a.jsx("option",{value:"",children:"All"}),(v=w==null?void 0:w.sort((e,n)=>e.id-n.id))==null?void 0:v.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Not Paid From :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"year",id:"",className:j,children:[a.jsx("option",{value:"current",children:"2023-2024"}),a.jsx("option",{value:"2016",children:"2016-2017"})]})})]}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(q,{})}),"Search"]})})]})]}),_!=null&&a.jsx(O,{type:"old",api:N=="current"?H:S,columns:N=="current"?L:I,requestBody:_,changeData:k}),a.jsx("div",{className:"h-[20vh]"})]})};export{Y as default};
