import{a as w,R as n,b as P,j as s,r as t,v as C}from"./index-tSYJy2m1.js";import{P as S}from"./index-WwCza5ZD.js";import{T as _}from"./TextField-XbeSlXOC.js";import"./index-ZS4GLSQF.js";import{S as F}from"./PaginationState-GN0KPQzU.js";import"./formik.esm-Cj1kbZGC.js";import"./ArrowRightIcon-8ekocEPm.js";function D(){var d,i,o,x,h,m,j,f;const p=w(),[c,N]=n.useState(""),[l,g]=n.useState(1),[r,u]=n.useState(10),a=P({api:C.tradeInbox,config:{key:c,page:l,perPage:r},value:[l,r],options:{enabled:!!l}}),b=()=>{a.refetch()},v=e=>{p("/amc-app/trade/application-details/".concat(e))};return s.jsx(S,{title:"Trade Inbox",children:s.jsxs("div",{className:"p-4",children:[s.jsx(t.Card,{children:s.jsx(t.CardBody,{children:s.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[s.jsx("div",{children:s.jsx(_,{id:"key",label:"Search License",value:c,onChange:e=>N(e.target.value)})}),s.jsx("div",{className:"flex justify-center",children:s.jsx(t.Button,{size:"sm",color:"blue-gray",onClick:b,children:"Search"})})]})})}),a!=null&&a.isLoading?s.jsx("div",{className:"flex justify-center mt-52",children:s.jsx("h1",{className:"text-base font-semibold text-gray-700 ",children:"Please wait..."})}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"border-t border-gray-200 my-5"}),((o=(i=(d=a==null?void 0:a.data)==null?void 0:d.data)==null?void 0:i.data)==null?void 0:o.length)>0?s.jsxs(s.Fragment,{children:[(m=(h=(x=a==null?void 0:a.data)==null?void 0:x.data)==null?void 0:h.data)==null?void 0:m.map((e,y)=>s.jsxs(t.Card,{className:"mt-4 full",children:[s.jsx(t.CardBody,{children:s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Application No:"}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.application_no)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["License No :"," "]}),s.jsx("h1",{className:"text-sm truncate w-40",children:(e==null?void 0:e.license_no)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Firm Name :"," "]}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.firm_name)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Owner Name :"," "]}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.owner_name)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Mobile No :"," "]}),s.jsx("h1",{className:"text-sm truncate w-40",children:(e==null?void 0:e.mobile_no)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Apply Date :"," "]}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.application_date)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Validity :"," "]}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.valid_upto)||"--"})]})]})})}),s.jsx(t.CardFooter,{className:"-mt-8",children:s.jsx("div",{className:"flex justify-between items-center gap-2 mb-1",children:s.jsxs(t.Button,{onClick:()=>v(e==null?void 0:e.id),size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-blue-500",children:["View",s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})})]},y)),s.jsx("div",{className:"flex justify-end mt-4",children:s.jsx(F,{page:l,setPage:g,noOfPage:(f=(j=a==null?void 0:a.data)==null?void 0:j.data)==null?void 0:f.last_page,setPerPage:u,perPage:r})})]}):s.jsx("div",{className:"flex justify-center",children:s.jsx("h1",{className:"text-lg font-semibold text-gray-700",children:"No Data Found"})})]})]})})}export{D as default};
