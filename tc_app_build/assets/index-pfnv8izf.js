import{u as w,a as u,b as S,p as C,j as s,r as i,n as P}from"./index-97iCPWLP.js";import{T as k}from"./TextField-gZBGFbQd.js";import{S as B}from"./SelectField-zEYhsvL7.js";import"./index-p4M61wA7.js";import{P as A}from"./index-fOrkBWLW.js";import{S as L}from"./index-E7BxovEf.js";import"./formik.esm-R8Mvjfpr.js";import"./ArrowRightIcon-gFB2HtTz.js";const F=[{id:1,value:"applicationNo",label:"Application No"},{id:2,value:"mobileNo",label:"Mobile No"},{id:3,value:"name",label:"Name"}];function $(){var c,t,o,l,d,h,f,m,p,j,x;const e=w(),n=u(),{data:r,refetch:g,isFetching:_,isLoading:N,isPending:M}=S({api:C.safInbox,config:{[(c=e==null?void 0:e.searchVerification)==null?void 0:c.searchBy]:e==null?void 0:e.searchVerification.search,page:e==null?void 0:e.searchVerification.page,perPage:e==null?void 0:e.searchVerification.perPage},value:[(t=e==null?void 0:e.searchVerification)==null?void 0:t.page,(o=e==null?void 0:e.searchVerification)==null?void 0:o.perPage],options:{enabled:!!((l=e==null?void 0:e.searchVerification)!=null&&l.page)}}),v=()=>{e==null||e.setSearchVerification({...e==null?void 0:e.searchVerification,page:1}),g()},b=a=>{n("/amc-app/property/saf-site-verification/".concat(a))};return s.jsx(A,{title:"SAF Verification List",children:s.jsxs("div",{className:"p-4 ",children:[s.jsx(i.Card,{className:"w-full",children:s.jsxs(i.CardBody,{children:[s.jsx("div",{className:"flex justify-between items-center",children:s.jsx("h1",{className:"font-semibold",children:"SAF Verification"})}),s.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-2",children:[s.jsx("div",{children:s.jsxs(B,{label:"Search By",value:(d=e==null?void 0:e.searchVerification)==null?void 0:d.searchBy,onChange:a=>{e==null||e.setSearchVerification({...e==null?void 0:e.searchVerification,searchBy:a.target.value})},name:"searchBy",children:[s.jsx("option",{value:"",children:"Select"}),F.map(a=>s.jsx("option",{value:a.value,children:a.label},a.id))]})}),s.jsx("div",{children:s.jsx(k,{label:"Search",name:"search",value:(h=e==null?void 0:e.searchVerification)==null?void 0:h.search,onChange:a=>{e==null||e.setSearchVerification({...e==null?void 0:e.searchVerification,search:a.target.value})}})})]}),s.jsx(i.Button,{color:"blue",onClick:v,fullWidth:!0,children:"Search"})]})}),N?s.jsx("div",{className:"flex justify-center items-center py-52",children:s.jsx("h1",{children:"Loading..."})}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-2"}),((m=(f=r==null?void 0:r.data)==null?void 0:f.data)==null?void 0:m.length)>0?(j=(p=r==null?void 0:r.data)==null?void 0:p.data)==null?void 0:j.map((a,y)=>s.jsxs(i.Card,{className:"mt-4 full",children:[s.jsx(i.CardBody,{children:s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"SAF No:"}),s.jsx("h1",{className:"text-sm",children:a==null?void 0:a.saf_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Name : "}),s.jsx("h1",{className:"text-sm truncate w-40",children:a==null?void 0:a.owner_name})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Ward : "}),s.jsx("h1",{className:"text-sm",children:a==null?void 0:a.ward_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Assessment Type :"," "]}),s.jsx("h1",{className:"text-sm",children:a==null?void 0:a.assessment})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Mobile No :"," "]}),s.jsx("h1",{className:"text-sm truncate w-40",children:a==null?void 0:a.mobile_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Property Type :"," "]}),s.jsx("h1",{className:"text-sm",children:a==null?void 0:a.property_type})]})]}),s.jsx("img",{src:"/assets/house.svg",className:"w-16 h-16 -mb-8",alt:"refresh"})]})}),s.jsx(i.CardFooter,{className:"-mt-8",children:s.jsxs("div",{className:"flex justify-between items-center gap-2 mb-1",children:[s.jsxs(i.Button,{onClick:()=>b(a==null?void 0:a.id),size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-blue-500",children:["Verification",s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]}),s.jsx(P,{hasContent:!0,roles:["SENIOUR LIPIK"],children:s.jsxs(i.Button,{onClick:()=>n("/amc-app/property/naksha-verification/".concat(a==null?void 0:a.id)),size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-red-500",children:["Sanction Plan",s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})]})})]},y)):s.jsx("div",{className:"flex justify-center items-center py-52",children:s.jsx("h1",{children:"No Record Found"})}),s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),s.jsx(L,{active:e==null?void 0:e.searchVerification,noOfPage:(x=r==null?void 0:r.data)==null?void 0:x.last_page,setActive:e==null?void 0:e.setSearchVerification})]})]})})}export{$ as default};
