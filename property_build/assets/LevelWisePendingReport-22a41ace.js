import{k as v,a as m,r as s,A as f,N as h,j as t,T as r,U as j,bP as N}from"./index-bdacdace.js";const w=()=>{const{levelWisePendingCollection:c}=N();v("Level Wise Pending Report");const d=m(),[i,o]=s.useState(),[u,l]=s.useState(!1);s.useEffect(()=>{g()},[]);const g=()=>{l(!0),f.post(c,{},h()).then(e=>{var a;l(!1),console.log("success => ",e),o((a=e==null?void 0:e.data)==null?void 0:a.data)}).catch(e=>(console.log("getting eroor => ",e),l(!1)))},x=[{Header:"S.No.",Cell:({row:e})=>t.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Employee Name",accessor:"role_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return t.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total No of Form(s)",accessor:"total",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return t.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:t.jsx("div",{className:"w-full text-center",children:"Actions"}),accessor:"id",Cell:({cell:e})=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:"w-full flex justify-evenly",children:[t.jsx("button",{className:"w-max px-4 py-1 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",onClick:()=>{var a,n;return d(`/saf-wise-details/${(n=(a=e==null?void 0:e.row)==null?void 0:a.values)==null?void 0:n.id}`)},children:"View SAF Wise Details"}),t.jsx("button",{className:"w-max px-4 py-1 bg-indigo-500 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",onClick:()=>{var a,n;return d(`/employee-wise-details/${(n=(a=e==null?void 0:e.row)==null?void 0:a.values)==null?void 0:n.id}`)},children:"View Employee Wise Details"})]})})}];return t.jsxs(t.Fragment,{children:[u&&t.jsx(r,{}),t.jsx("div",{className:"mt-4"}),i!=null&&(i==null?void 0:i.length)!=0&&!u?t.jsxs(t.Fragment,{children:[t.jsx(j,{dataList:i,columns:x})," "]}):t.jsx(t.Fragment,{children:t.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),t.jsx("div",{className:"h-[20vh]"})]})};export{w as default};
