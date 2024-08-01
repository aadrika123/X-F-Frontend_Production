import{c as w,t as P,j as s}from"./index-nTD-ItDx.js";import{u as C,d as n}from"./router-vn-0iGwJ.js";import{P as S}from"./index-fOi6iZgB.js";import{T as _}from"./TextField-GkGfgt8t.js";import"./index-9INnh4Fj.js";import{r as t}from"./tailwind-umh7vczy.js";import{S as F}from"./PaginationState-aCeSvSpd.js";import"./reactQuery-VYMV1vFj.js";import"./axios-lPgvryBG.js";import"./reactIcons-lANGEfNm.js";import"./headlessui-pLs_kC1m.js";import"./formik.esm-ilDmhU_v.js";import"./customInputValidation-8tSUGdUh.js";import"./ArrowRightIcon-L63fzh56.js";function W(){var c,d,o,x,m,h,j,p;const f=C(),[i,N]=n.useState(""),[l,g]=n.useState(1),[r,u]=n.useState(10),a=w({api:P.tradeInbox,config:{key:i,page:l,perPage:r},value:[l,r],options:{enabled:!!l}}),b=()=>{a.refetch()},v=e=>{f("/amc-app/trade/application-details/".concat(e))};return s.jsx(S,{title:"Trade Inbox",children:s.jsxs("div",{className:"p-4",children:[s.jsx(t.Card,{children:s.jsx(t.CardBody,{children:s.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[s.jsx("div",{children:s.jsx(_,{id:"key",label:"Search License",value:i,onChange:e=>N(e.target.value)})}),s.jsx("div",{className:"flex justify-center",children:s.jsx(t.Button,{size:"sm",color:"blue-gray",onClick:b,children:"Search"})})]})})}),a!=null&&a.isLoading?s.jsx("div",{className:"flex justify-center mt-52",children:s.jsx("h1",{className:"text-base font-semibold text-gray-700 ",children:"Please wait..."})}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"border-t border-gray-200 my-5"}),((o=(d=(c=a==null?void 0:a.data)==null?void 0:c.data)==null?void 0:d.data)==null?void 0:o.length)>0?s.jsxs(s.Fragment,{children:[(h=(m=(x=a==null?void 0:a.data)==null?void 0:x.data)==null?void 0:m.data)==null?void 0:h.map((e,y)=>s.jsxs(t.Card,{className:"mt-4 full",children:[s.jsx(t.CardBody,{children:s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Application No:"}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.application_no)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["License No :"," "]}),s.jsx("h1",{className:"text-sm truncate w-40",children:(e==null?void 0:e.license_no)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Firm Name :"," "]}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.firm_name)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Owner Name :"," "]}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.owner_name)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Mobile No :"," "]}),s.jsx("h1",{className:"text-sm truncate w-40",children:(e==null?void 0:e.mobile_no)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Apply Date :"," "]}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.application_date)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Validity :"," "]}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.valid_upto)||"--"})]})]})})}),s.jsx(t.CardFooter,{className:"-mt-8",children:s.jsx("div",{className:"flex justify-between items-center gap-2 mb-1",children:s.jsxs(t.Button,{onClick:()=>v(e==null?void 0:e.id),size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-blue-500",children:["View",s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})})]},y)),s.jsx("div",{className:"flex justify-end mt-4",children:s.jsx(F,{page:l,setPage:g,noOfPage:(p=(j=a==null?void 0:a.data)==null?void 0:j.data)==null?void 0:p.last_page,setPerPage:u,perPage:r})})]}):s.jsx("div",{className:"flex justify-center",children:s.jsx("h1",{className:"text-lg font-semibold text-gray-700",children:"No Data Found"})})]})]})})}export{W as default};
