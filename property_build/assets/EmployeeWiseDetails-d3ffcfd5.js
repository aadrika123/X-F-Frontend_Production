import{R as f,_ as h,e as N,r as t,a as j,u as y,j as a,P as r}from"./index-d31408c8.js";const _=f.lazy(()=>h(()=>import("./ListTableConnectForEmployee-4fad1014.js"),["assets/ListTableConnectForEmployee-4fad1014.js","assets/index-d31408c8.js","assets/index-be9dc810.css"])),C=()=>{const{employeeWiseCollection:u}=r(),s=N(),[E,d]=t.useState(!1);t.useState();const[l,c]=t.useState(null),[m,v]=t.useState(0);t.useState([]),j("Employee Wise Details");const{id:o}=y();t.useEffect(()=>{x()},[]);const x=()=>{d(!0),c({roleId:o}),v(e=>e+1)},g=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Employee Name",accessor:"user_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total No of Form(s)",accessor:"count",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:a.jsx("div",{className:"w-full",children:"Actions"}),accessor:"user_id",Cell:({cell:e})=>a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full",children:a.jsx("button",{className:"w-max px-4 py-1 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",onClick:()=>{var i,n;return s(`/ward-wise-details/${(n=(i=e==null?void 0:e.row)==null?void 0:i.values)==null?void 0:n.user_id}`)},children:"View Ward Wise Details"})})})}];return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mt-4"}),l!=null&&a.jsx(_,{type:"old",api:u,columns:g,requestBody:l,changeData:m}),a.jsx("div",{className:"h-[20vh]"})]})};export{C as default};
