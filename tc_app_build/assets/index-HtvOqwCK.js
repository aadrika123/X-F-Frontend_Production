import{c as R,m as D,j as e}from"./index-r6pkVfbe.js";import{d as T}from"./router-5yjtezO8.js";import{u as A}from"./formik.esm-BnzrXcQN.js";import{F as B}from"./FormProvider-kGPBuDhT.js";import{T as w}from"./TextField-WLFSaEKU.js";import"./TranslateField-BH3bQnqu.js";import{r as l}from"./tailwind-6U-kYQAu.js";import{P as O}from"./index-XdDZ0AxP.js";import{S as _}from"./index-S2-H2StU.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./customInputValidation-jhKsg103.js";import"./ArrowRightIcon-g-6SOtWO.js";function X(){var d,n,i,c,m,o,x,h,p,j,u,f,b,g,v,N,y,S;const[a,F]=T.useState({page:1,perPage:10}),s=A({enableReinitialize:!0,initialValues:{fromDate:"",toDate:"",key:""},onSubmit:async(r,{setSubmitting:P})=>{t==null||t.refetch()}}),t=R({api:(d=D)==null?void 0:d.shopCollectionByTc,config:{fromDate:(n=s==null?void 0:s.values)==null?void 0:n.fromDate,toDate:(i=s==null?void 0:s.values)==null?void 0:i.toDate,page:a==null?void 0:a.page,perPage:a==null?void 0:a.perPage,key:(c=s==null?void 0:s.values)==null?void 0:c.key},value:[a==null?void 0:a.page,a==null?void 0:a.perPage],options:{enabled:!1}});return e.jsx(O,{title:"Collection Report",children:e.jsx("div",{className:"p-4",children:e.jsxs(B,{formik:s,children:[e.jsxs(l.Card,{children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Collection Report"})}),e.jsxs(l.CardBody,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[e.jsx("div",{children:e.jsx(w,{formik:s,type:"date",name:"fromDate",placeholder:"From Date",max:(m=s==null?void 0:s.values)!=null&&m.toDate?(o=s==null?void 0:s.values)==null?void 0:o.toDate:new Date().toISOString().split("T")[0]})}),e.jsx("div",{children:e.jsx(w,{formik:s,type:"date",name:"toDate",placeholder:"Upto Date",min:(x=s==null?void 0:s.values)!=null&&x.fromDate?(h=s==null?void 0:s.values)==null?void 0:h.fromDate:new Date().toISOString().split("T")[0]})})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(l.Button,{color:"blue",size:"sm",ripple:!0,type:"submit",disabled:s.isSubmitting,onClick:s.handleSubmit,children:"Search"})})]})]}),t!=null&&t.isLoading?e.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"Loading..."}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"py-2 mt-6",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h1",{className:"font-semibold text-sm",children:"Collection Report"}),e.jsxs("h1",{className:"font-semibold text-sm text-green-700",children:["Total Amount: ",e.jsx("span",{children:"₹"}),(j=(p=t==null?void 0:t.data)==null?void 0:p.data)==null?void 0:j.totalCollection]})]}),e.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),e.jsx("div",{children:((b=(f=(u=t==null?void 0:t.data)==null?void 0:u.data)==null?void 0:f.data)==null?void 0:b.length)>0?e.jsxs(e.Fragment,{children:[(N=(v=(g=t==null?void 0:t.data)==null?void 0:g.data)==null?void 0:v.data)==null?void 0:N.map((r,P)=>e.jsx(l.Card,{className:"mt-2 full",children:e.jsx(l.CardBody,{children:e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name :"}),e.jsx("h1",{className:"text-sm w-48 truncate",children:e.jsxs("strong",{children:[" ",r==null?void 0:r.vendor_name]})})]}),e.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Market name:"}),e.jsx("h1",{className:"text-sm truncate w-40",children:(r==null?void 0:r.market_name)||"--"})]}),e.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Amount:"}),e.jsxs("h1",{className:"text-sm",children:[e.jsx("span",{children:"₹"}),r==null?void 0:r.amount]})]})]})})})},P+1)),e.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),e.jsx(_,{active:a,noOfPage:(S=(y=t==null?void 0:t.data)==null?void 0:y.data)==null?void 0:S.last_page,setActive:F})]}):e.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"No Data Found"})})]})})]})})})}export{X as default};
