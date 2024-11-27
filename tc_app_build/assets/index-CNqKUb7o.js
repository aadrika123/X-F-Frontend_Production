import{c as f,m as b,j as s,I as v}from"./index-f3FnD_pr.js";import{f as g,d as u,L as y}from"./router-5yjtezO8.js";import{r as l}from"./tailwind-6U-kYQAu.js";import{P}from"./index-VLUfqzc-.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";function k(){var i,x,o,t,h,m,p,j,N;const c=g(),d=new URLSearchParams(c==null?void 0:c.search).get("shop-id"),r=f({api:(i=b)==null?void 0:i.shopDetailById,config:{id:d},value:[d],options:{enabled:!!d}}),e=f({api:b.receiptList,config:{page:1,perPage:100},options:{enabled:!0}});return e!=null&&e.isLoading?s.jsx(v,{}):s.jsx(P,{title:"Payment History",children:s.jsxs("div",{className:"p-4",children:[s.jsx(l.Card,{children:s.jsxs(l.CardBody,{children:[s.jsx("div",{className:"flex flex-row justify-between mb-3",children:s.jsx("h1",{className:"text-sm font-semibold",children:"# Basic Details"})}),s.jsx("div",{className:"my-3 border-b-2"}),s.jsx("div",{className:"flex flex-col",children:(m=(h=(t=(o=(x=r==null?void 0:r.data)==null?void 0:x.data)==null?void 0:o.shopDetails)==null?void 0:t.slice(0,3))==null?void 0:h.reverse())==null?void 0:m.map((a,n)=>s.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[s.jsx("h1",{className:"text-xs font-semibold",children:a==null?void 0:a.displayString}),s.jsx("h1",{className:"text-xs",children:a==null?void 0:a.value})]},n+1))})]})}),s.jsx("div",{className:"my-3 border-b-2"}),s.jsx(l.Card,{children:s.jsxs(l.CardBody,{children:[s.jsx("div",{className:"flex justify-between items-center",children:s.jsx("h1",{className:"text-xs font-semibold",children:"Payment History"})}),s.jsx("hr",{className:"my-2"}),(N=(j=(p=e==null?void 0:e.data)==null?void 0:p.data)==null?void 0:j.data)==null?void 0:N.map((a,n)=>s.jsxs(u.Fragment,{children:[s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2 justify-center items-center",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-xs font-semibold",children:"Transaction No:"})}),s.jsx("div",{className:"col-span-1",children:s.jsx("p",{className:"text-xs",children:a==null?void 0:a.transaction_no})}),s.jsx("div",{className:"text-center ",children:s.jsx(y,{to:"/amc-app/adv-municipal-rental/payment-receipt?tran-id=".concat(a==null?void 0:a.id),className:"text-xs text-blue-600 border border-blue-600 rounded-md px-2 py-1",children:"Receipt"})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-xs font-semibold",children:"Payment Mode :"})}),s.jsx("div",{className:"col-span-2",children:s.jsx("p",{className:"text-xs",children:a==null?void 0:a.payment_mode})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-xs font-semibold",children:"Date :"})}),s.jsx("div",{className:"col-span-2",children:s.jsx("p",{className:"text-xs",children:a==null?void 0:a.payment_date})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-xs font-semibold",children:"Amount:"})}),s.jsx("div",{className:"col-span-2",children:s.jsxs("p",{className:"text-xs font-bold",children:[s.jsx("span",{children:"₹"}),a==null?void 0:a.last_payment_amount]})})]}),s.jsx("div",{className:"my-2 border-b-2"})]},n+1))]})})]})})}export{k as default};
