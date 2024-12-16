import{R as y,_ as w,a as A,r as a,w as _,A as C,b as S,j as l,o as H,U as I,P as k}from"./index-4f037684.js";const D=y.lazy(()=>w(()=>import("./index-4f037684.js").then(i=>i.el),["assets/index-4f037684.js","assets/index-473715f5.css"])),L=()=>{const{get_MasterData:i,searchPropSafIndDemCollection:f}=k();A("Property/SAF Individual Demand And Collection");const[d,x]=a.useState();a.useState();const[h,P]=a.useState(!1),[u,N]=a.useState(null),[b,j]=a.useState(0),c="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",n=_({initialValues:{wardId:"",key:""},onSubmit:e=>{N({wardId:n.values.wardId,key:n.values.key}),j(t=>t+1)}});a.useEffect(()=>{C.get(i,S()).then(e=>{var t,v,m;((t=e==null?void 0:e.data)==null?void 0:t.status)==!0&&x((m=(v=e==null?void 0:e.data)==null?void 0:v.data)==null?void 0:m.ward_master)}).catch(e=>{})},[]);const g=[{Header:"S.No.",Cell:({row:e})=>l.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property Tax No",accessor:"pt_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Holding No",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Unique House No",accessor:"new_holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"SAF No",accessor:"saf_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Applicant Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Address",accessor:"prop_address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Assessment Type",accessor:"assessment_type",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Usage Type",accessor:"usage_type",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}];return l.jsxs(l.Fragment,{children:[l.jsxs("form",{onChange:n.handleChange,onSubmit:n.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md",children:[l.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Individual Demand And Collection"}),l.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[l.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[l.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),l.jsx("div",{className:"col-span-6",children:l.jsxs("select",{name:"wardId",id:"",className:c,children:[l.jsx("option",{value:"",children:"All"}),d==null?void 0:d.map(e=>l.jsx(l.Fragment,{children:l.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),l.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[l.jsx("div",{className:"col-span-6 font-semibold",children:"Keyword :"}),l.jsx("div",{className:"col-span-6",children:l.jsx("input",{type:"text",name:"key",id:"",className:c})})]}),l.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:h?l.jsx(l.Fragment,{children:l.jsx("div",{className:"flex justify-end",children:l.jsx(H,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):l.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",l.jsx("span",{className:"mr-2",children:l.jsx(I,{})}),"Search"]})})]})]}),u!=null&&l.jsx(D,{type:"old",api:f,columns:g,requestBody:u,changeData:b}),l.jsx("div",{className:"h-[20vh]"})]})};export{L as default};
