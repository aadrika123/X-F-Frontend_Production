import{a as p,t as N,j as s}from"./index-kY_1vXrj.js";import{u as f,d as u}from"./router-g9NwwHut.js";import{P as v}from"./index-CK_pnLs4.js";import{S as g}from"./SelectField-ZfIKjb1a.js";import"./index-KJUlVKah.js";import{r as t}from"./tailwind-xMhOhnt0.js";import"./reactQuery-Q7rJjNxq.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-hq-Xw8mW.js";import"./reactIcons-TqjzQo_g.js";import"./headlessui-QgKi6LbN.js";import"./formik.esm-MEJnthxH.js";function M(){var r,n,c,i,d,o;const x=f(),[l,m]=u.useState(""),a=p({api:N.renewalAmendmentSurrender,config:{applicationType:l},value:[l],options:{enabled:!!l}}),h=e=>{x("/amc-app/trade/application-details/".concat(e))};return s.jsx(v,{title:"Search License Type",children:s.jsxs("div",{className:"p-4",children:[s.jsx(t.Card,{children:s.jsx(t.CardBody,{children:s.jsx("div",{className:"grid grid-cols-1 gap-2",children:s.jsx("div",{children:s.jsxs(g,{label:"Search Type",value:l,onChange:e=>m(e.target.value),children:[s.jsx("option",{value:"",children:"Select"}),s.jsx("option",{value:"RENEWAL",children:"Renewal"}),s.jsx("option",{value:"AMENDMENT",children:"Amendment"}),s.jsx("option",{value:"SURRENDER",children:"Surrender"})]})})})})}),s.jsx("div",{className:"border-t border-gray-200 my-5"}),((c=(n=(r=a==null?void 0:a.data)==null?void 0:r.data)==null?void 0:n.data)==null?void 0:c.length)>0?s.jsx(s.Fragment,{children:(o=(d=(i=a==null?void 0:a.data)==null?void 0:i.data)==null?void 0:d.data)==null?void 0:o.map((e,j)=>s.jsxs(t.Card,{className:"mt-4 full",children:[s.jsx(t.CardBody,{children:s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Application No:"}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.application_no)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"License No : "}),s.jsx("h1",{className:"text-sm truncate w-40",children:(e==null?void 0:e.license_no)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Firm Name : "}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.firm_name)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name : "}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.owner_name)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Mobile No : "}),s.jsx("h1",{className:"text-sm truncate w-40",children:(e==null?void 0:e.mobile_no)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Apply Date : "}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.application_date)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Validity : "}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.valid_upto)||"--"})]})]})})}),s.jsx(t.CardFooter,{className:"-mt-8",children:s.jsx("div",{className:"flex justify-between items-center gap-2 mb-1",children:s.jsxs(t.Button,{onClick:()=>h(e==null?void 0:e.id),size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-blue-500",children:["View",s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})})]},j))}):s.jsx("div",{className:"flex justify-center",children:s.jsx("h1",{className:"text-lg font-semibold text-gray-700",children:"No Data Found"})})]})})}export{M as default};
