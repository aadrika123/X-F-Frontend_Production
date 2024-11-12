import{c as v,t as g,j as e}from"./index-kFrNXNj3.js";import{u as b,d as h}from"./router-5yjtezO8.js";import{P as y}from"./index-RhIUOsuG.js";import{T as w}from"./TextField-VY9Pfcn0.js";import{S as C}from"./SelectField-TDHKwV6Z.js";import"./index-iFVn5AxS.js";import{r as l}from"./tailwind-6U-kYQAu.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./formik.esm-BnzrXcQN.js";import"./customInputValidation-jhKsg103.js";function V(){var n,i,c,d,o,x;const m=b(),[t,j]=h.useState(""),[r,p]=h.useState(""),a=v({api:g.tradeAppList,config:{entityName:t,entityValue:r},options:{enabled:!1}}),N=()=>{a.refetch()},f=s=>{m("/amc-app/trade/application-details/".concat(s))};return e.jsx(y,{title:"Track License",children:e.jsxs("div",{className:"p-4",children:[e.jsx(l.Card,{children:e.jsx(l.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[e.jsx("div",{children:e.jsxs(C,{label:"Search Type",value:t,onChange:s=>j(s.target.value),children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"APPLICATION",children:"Application No"}),e.jsx("option",{value:"LICENSE",children:"License No"}),e.jsx("option",{value:"MOBILE",children:"Mobile No"}),e.jsx("option",{value:"FIRM",children:"Firm"}),e.jsx("option",{value:"OWNER",children:"Owner Name"})]})}),e.jsx("div",{children:e.jsx(w,{id:"search",label:"Search",value:r,onChange:s=>p(s.target.value)})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(l.Button,{size:"sm",color:"blue-gray",onClick:N,children:"Search"})})]})})}),e.jsx("div",{className:"border-t border-gray-200 my-5"}),a!=null&&a.isLoading?e.jsx("div",{className:"flex justify-center items-center h-96",children:"Loading..."}):((c=(i=(n=a==null?void 0:a.data)==null?void 0:n.data)==null?void 0:i.licence)==null?void 0:c.length)>0?e.jsx(e.Fragment,{children:(x=(o=(d=a==null?void 0:a.data)==null?void 0:d.data)==null?void 0:o.licence)==null?void 0:x.map((s,u)=>e.jsxs(l.Card,{className:"mt-4 full",children:[e.jsx(l.CardBody,{children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Application No:"}),e.jsx("h1",{className:"text-sm",children:(s==null?void 0:s.application_no)||"--"})]}),e.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"License No : "}),e.jsx("h1",{className:"text-sm truncate w-40",children:(s==null?void 0:s.license_no)||"--"})]}),e.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Firm Name : "}),e.jsx("h1",{className:"text-sm",children:(s==null?void 0:s.firm_name)||"--"})]}),e.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name : "}),e.jsx("h1",{className:"text-sm",children:(s==null?void 0:s.owner_name)||"--"})]}),e.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Mobile No : "}),e.jsx("h1",{className:"text-sm truncate w-40",children:(s==null?void 0:s.mobile_no)||"--"})]}),e.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Apply Date : "}),e.jsx("h1",{className:"text-sm",children:(s==null?void 0:s.application_date)||"--"})]}),e.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Validity : "}),e.jsx("h1",{className:"text-sm",children:(s==null?void 0:s.valid_upto)||"--"})]})]})})}),e.jsx(l.CardFooter,{className:"-mt-8",children:e.jsx("div",{className:"flex justify-between items-center gap-2 mb-1",children:e.jsxs(l.Button,{onClick:()=>f(s==null?void 0:s.id),size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-blue-500",children:["View",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})})]},u))}):e.jsx("div",{className:"flex justify-center",children:e.jsx("h1",{className:"text-lg font-semibold text-gray-700",children:"No Data Found"})})]})})}export{V as default};
