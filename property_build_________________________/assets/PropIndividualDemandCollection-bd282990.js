import{a as D,e as I,r as l,w as P,A as k,b as s,j as a,U as T,ag as F,P as L}from"./index-13160f97.js";const R=()=>{const{get_MasterData:_,searchPropIndividualDemandCollection:C}=L();D("Property Individual Demand And Collection");const w=I(),[N,y]=l.useState();l.useState(),l.useState(!1);const[j,o]=l.useState(null),[A,H]=l.useState(0),S="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",b=P({initialValues:{wardId:""},onSubmit:e=>{console.log("submitting report search values => ",e),o({wardMstrId:b.values.wardId}),H(n=>n+1)}});l.useEffect(()=>{k.get(_,s()).then(e=>{var n,i,t;((n=e==null?void 0:e.data)==null?void 0:n.status)==!0?(console.log("getting master list data => ",e),y((t=(i=e==null?void 0:e.data)==null?void 0:i.data)==null?void 0:t.ward_master)):console.log("error getting master list",e)}).catch(e=>console.log("error getting master list",e))},[]);const r=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property Tax No",Cell:({cell:e})=>{var n,i,t,d,u,m,v,f,g,x;if(((i=(n=e==null?void 0:e.row)==null?void 0:n.original)==null?void 0:i.pt_no)==null||((d=(t=e==null?void 0:e.row)==null?void 0:t.original)==null?void 0:d.pt_no)==""||((m=(u=e==null?void 0:e.row)==null?void 0:u.original)==null?void 0:m.pt_no)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if(((f=(v=e==null?void 0:e.row)==null?void 0:v.original)==null?void 0:f.pt_no)!=null)return a.jsx("div",{className:"cursor-pointer underline",onClick:()=>{var c,h;return w("/holdingPropertyDetails/"+((h=(c=e==null?void 0:e.row)==null?void 0:c.original)==null?void 0:h.id))},children:(x=(g=e==null?void 0:e.row)==null?void 0:g.original)==null?void 0:x.pt_no})}},{Header:"Holding No",Cell:({cell:e})=>{var n,i,t,d,u,m,v,f,g,x;if(((i=(n=e==null?void 0:e.row)==null?void 0:n.original)==null?void 0:i.holding_no)==null||((d=(t=e==null?void 0:e.row)==null?void 0:t.original)==null?void 0:d.holding_no)==""||((m=(u=e==null?void 0:e.row)==null?void 0:u.original)==null?void 0:m.holding_no)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if(((f=(v=e==null?void 0:e.row)==null?void 0:v.original)==null?void 0:f.holding_no)!=null)return a.jsx("div",{className:"cursor-pointer underline",onClick:()=>{var c,h;return w("/holdingPropertyDetails/"+((h=(c=e==null?void 0:e.row)==null?void 0:c.original)==null?void 0:h.id))},children:(x=(g=e==null?void 0:e.row)==null?void 0:g.original)==null?void 0:x.holding_no})}},{Header:"Unique House No",accessor:"new_holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Applicant Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Address",accessor:"prop_address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total Demand (in ₹)",accessor:"total_demand",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total Collection (in ₹)",accessor:"collection_amount",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total Remaining (in ₹)",accessor:"balance_amount",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}];return a.jsxs(a.Fragment,{children:[a.jsxs("form",{onChange:b.handleChange,onSubmit:b.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardId",id:"",className:S,children:[a.jsx("option",{value:"",children:"All"}),N==null?void 0:N.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(T,{})}),"Search"]})})]})]}),j!=null&&a.jsx(F,{type:"old",api:C,columns:r,requestBody:j,changeData:A}),a.jsx("div",{className:"h-[20vh]"})]})};export{R as default};