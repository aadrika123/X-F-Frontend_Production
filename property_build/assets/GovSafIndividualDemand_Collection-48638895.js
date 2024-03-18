import{a as j,r as a,w,A as C,b as y,j as l,U as S,ag as A,P as _}from"./index-11eb40a4.js";const I=()=>{const{get_MasterData:m,searchGovSafIndividualDemandCollection:v}=_();j("Govt. SAF Individual Demand And Collection");const[n,f]=a.useState();a.useState(),a.useState(!1);const[d,x]=a.useState(null),[h,g]=a.useState(0),b="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",i=w({initialValues:{wardId:""},onSubmit:e=>{console.log("submitting report search values => ",e),x({wardMstrId:i.values.wardId}),g(t=>t+1)}});a.useEffect(()=>{C.get(m,y()).then(e=>{var t,u,c;((t=e==null?void 0:e.data)==null?void 0:t.status)==!0?(console.log("getting master list data => ",e),f((c=(u=e==null?void 0:e.data)==null?void 0:u.data)==null?void 0:c.ward_master)):console.log("error getting master list",e)}).catch(e=>console.log("error getting master list",e))},[]);const N=[{Header:"S.No.",Cell:({row:e})=>l.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Application No",accessor:"saf_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Building Colony Name",accessor:"gb_office_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Building Colony Address",accessor:"prop_address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total Demand (in ₹)",accessor:"total_demand",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total Collection (in ₹)",accessor:"collection_amount",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total Remaining (in ₹)",accessor:"balance_amount",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}];return l.jsxs(l.Fragment,{children:[l.jsxs("form",{onChange:i.handleChange,onSubmit:i.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md",children:[l.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),l.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[l.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[l.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),l.jsx("div",{className:"col-span-6",children:l.jsxs("select",{name:"wardId",id:"",className:b,children:[l.jsx("option",{value:"",children:"All"}),n==null?void 0:n.map(e=>l.jsx(l.Fragment,{children:l.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),l.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:l.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",l.jsx("span",{className:"mr-2",children:l.jsx(S,{})}),"Search"]})})]})]}),d!=null&&l.jsx(A,{type:"old",api:v,columns:N,requestBody:d,changeData:h}),l.jsx("div",{className:"h-[20vh]"})]})};export{I as default};
