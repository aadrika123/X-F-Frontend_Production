import{r as o,a as L,k as R,o as W,A as B,O as E,j as a,bS as O,bW as T,bQ as Y,n as i,f as v}from"./index-c815f2b8.js";const U=()=>{const{get_MasterData:y,searchPreviousYearPaidButNotPaidCurrentYear:C,searchNotPaidFrom20162017:S}=Y(),[w,H]=o.useState();o.useState();const[N,A]=o.useState("");o.useState(!1);const[_,P]=o.useState(null),[D,k]=o.useState(0),b=L();R("Payment Not Done Report");const j="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",f=W({initialValues:{year:"current",wardId:""},onSubmit:e=>{A(e==null?void 0:e.year),P({wardMstrId:f.values.wardId}),k(n=>n+1)}});o.useEffect(()=>{F()},[]);const F=()=>{B.get(y,E()).then(e=>{var n,t,r;((n=e==null?void 0:e.data)==null?void 0:n.status)==!0&&H((r=(t=e==null?void 0:e.data)==null?void 0:t.data)==null?void 0:r.ward_master)}).catch(e=>console.log("error getting master list",e))},M=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_name",Cell:e=>i(e==null?void 0:e.value)},{Header:"Holding No",accessor:"new_holding_no",Cell:({cell:e})=>{var n,t,r,s,d,u,l,m,c,h;if(((t=(n=e==null?void 0:e.row)==null?void 0:n.original)==null?void 0:t.new_holding_no)==null||((s=(r=e==null?void 0:e.row)==null?void 0:r.original)==null?void 0:s.new_holding_no)==""||((u=(d=e==null?void 0:e.row)==null?void 0:d.original)==null?void 0:u.new_holding_no)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if(((m=(l=e==null?void 0:e.row)==null?void 0:l.original)==null?void 0:m.new_holding_no)!=null)return a.jsx("div",{className:"cursor-pointer underline",onClick:()=>{var x,g;return b("/holdingPropertyDetails/"+((g=(x=e==null?void 0:e.row)==null?void 0:x.original)==null?void 0:g.property_id))},children:(h=(c=e==null?void 0:e.row)==null?void 0:c.original)==null?void 0:h.new_holding_no})}},{Header:"Applicant Name",accessor:"owner_name",Cell:e=>i(e==null?void 0:e.value)},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>i(e==null?void 0:e.value)},{Header:"Address",accessor:"prop_address",Cell:e=>i(e==null?void 0:e.value)},{Header:"Demand",accessor:"total_demand",Cell:e=>v(e==null?void 0:e.value)}],I=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_name",Cell:e=>i(e==null?void 0:e.value)},{Header:"Holding No",accessor:"new_holding_no",Cell:({cell:e})=>{var n,t,r,s,d,u,l,m,c,h;if(((t=(n=e==null?void 0:e.row)==null?void 0:n.original)==null?void 0:t.new_holding_no)==null||((s=(r=e==null?void 0:e.row)==null?void 0:r.original)==null?void 0:s.new_holding_no)==""||((u=(d=e==null?void 0:e.row)==null?void 0:d.original)==null?void 0:u.new_holding_no)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if(((m=(l=e==null?void 0:e.row)==null?void 0:l.original)==null?void 0:m.new_holding_no)!=null)return a.jsx("div",{className:"cursor-pointer underline",onClick:()=>{var x,g;return b("/holdingPropertyDetails/"+((g=(x=e==null?void 0:e.row)==null?void 0:x.original)==null?void 0:g.property_id))},children:(h=(c=e==null?void 0:e.row)==null?void 0:c.original)==null?void 0:h.new_holding_no})}},{Header:"Applicant Name",accessor:"owner_name",Cell:e=>i(e==null?void 0:e.value)},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>i(e==null?void 0:e.value)},{Header:"Address",accessor:"prop_address",Cell:e=>i(e==null?void 0:e.value)},{Header:"Demand",accessor:"total_demand",Cell:e=>v(e==null?void 0:e.value)}];return a.jsxs(a.Fragment,{children:[a.jsxs("form",{onChange:f.handleChange,onSubmit:f.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardId",id:"",className:j,children:[a.jsx("option",{value:"",children:"All"}),w==null?void 0:w.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Not Paid From :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"year",id:"",className:j,children:[a.jsx("option",{value:"current",children:"Current Year"}),a.jsx("option",{value:"2016",children:"2016-2017"})]})})]}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(O,{})}),"Search"]})})]})]}),_!=null&&a.jsx(T,{type:"old",api:N=="current"?C:S,columns:N=="current"?I:M,requestBody:_,changeData:D}),a.jsx("div",{className:"h-[20vh]"})]})};export{U as default};
