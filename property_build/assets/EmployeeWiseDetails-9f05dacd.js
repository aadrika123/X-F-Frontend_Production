import{a as h,_ as f,u as N,r as t,k as j,bw as y,j as a,bQ as _}from"./index-33b137df.js";const b=h.lazy(()=>f(()=>import("./index-33b137df.js").then(l=>l.d7),["assets/index-33b137df.js","assets/index-8b2b29cf.css"])),C=()=>{const{employeeWiseCollection:l}=_(),s=N(),[r,d]=t.useState(!1);t.useState();const[i,c]=t.useState(null),[m,v]=t.useState(0);j("Employee Wise Details");const{id:o}=y();t.useEffect(()=>{x()},[]);const x=()=>{d(!0),c({roleId:o}),v(e=>e+1)},g=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Employee Name",accessor:"user_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total No of Form(s)",accessor:"count",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:a.jsx("div",{className:"w-full",children:"Actions"}),accessor:"user_id",Cell:({cell:e})=>a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full",children:a.jsx("button",{className:"w-max px-4 py-1 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",onClick:()=>{var n,u;return s(`/ward-wise-details/${(u=(n=e==null?void 0:e.row)==null?void 0:n.values)==null?void 0:u.user_id}`)},children:"View Ward Wise Details"})})})}];return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mt-4"}),i!=null&&a.jsx(b,{type:"old",api:l,columns:g,requestBody:i,changeData:m}),a.jsx("div",{className:"h-[20vh]"})]})};export{C as default};
