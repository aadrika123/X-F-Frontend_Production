import{R as g,_ as j,e as b,r as l,a as A,u as _,j as a,P as C}from"./index-19ed171f.js";const y=g.lazy(()=>j(()=>import("./index-19ed171f.js").then(t=>t.dq),["assets/index-19ed171f.js","assets/index-960bb152.css"])),w=()=>{const{safWiseCollection:t}=C(),d=b(),[S,c]=l.useState(!1);l.useState();const[i,v]=l.useState(null),[f,m]=l.useState(0);A("SAF Wise Details");const{id:x}=_();l.useEffect(()=>{h()},[]);const h=()=>{c(!0),v({roleId:x}),m(e=>e+1)},N=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"SAF No",accessor:"saf_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property Type",accessor:"property_type",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Owner Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"MObile No",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Address",accessor:"prop_address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Action",accessor:"id",Cell:({cell:e})=>a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full",children:a.jsx("button",{className:"w-max px-4 py-1 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",onClick:()=>{var n,u;return d(`/propApplicationDetails/${(u=(n=e==null?void 0:e.row)==null?void 0:n.values)==null?void 0:u.id}`)},children:"View"})})})}];return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mt-4"}),i!=null&&a.jsx(y,{type:"old",api:t,columns:N,requestBody:i,changeData:f}),a.jsx("div",{className:"h-[20vh]"})]})};export{w as default};
