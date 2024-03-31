import{a as R,p as M,j as s,f as S}from"./index-kgqcLUgD.js";import{d as c,h as k,L as z}from"./router-g9NwwHut.js";import{r as t}from"./tailwind-xMhOhnt0.js";import{P as U}from"./index-o0AMy7sT.js";import"./reactQuery-Q7rJjNxq.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-hq-Xw8mW.js";import"./reactIcons-TqjzQo_g.js";import"./headlessui-QgKi6LbN.js";function X(){var i,n,o,p;const[E,O]=c.useState([]);c.useState([]);const{id:r}=k(),l=R({api:M.propPaymentHistory,config:{propId:r},value:[r],options:{enabled:!!r}}),e=R({api:M.getPropByHolding,config:{propertyId:r},value:[r],options:{enabled:!!r}});return c.useEffect(()=>{var a,d,m,x,j,N,v,h,u,y,f,b,_,P,g,w,H,A,T,Y,B,C,F,I,L;(a=e==null?void 0:e.data)!=null&&a.data&&O([{title:"Holding No",value:(m=(d=e==null?void 0:e.data)==null?void 0:d.data)==null?void 0:m.holding_no},{title:"Owner Name",value:(j=(x=e==null?void 0:e.data)==null?void 0:x.data)==null?void 0:j.applicant_name},{title:"Address",value:(v=(N=e==null?void 0:e.data)==null?void 0:N.data)==null?void 0:v.prop_address},{title:"Zone",value:(u=(h=e==null?void 0:e.data)==null?void 0:h.data)==null?void 0:u.zone_name},{title:"Ward No",value:(f=(y=e==null?void 0:e.data)==null?void 0:y.data)==null?void 0:f.ward_no},{title:"Ownership Type",value:(_=(b=e==null?void 0:e.data)==null?void 0:b.data)==null?void 0:_.ownership_type},{title:"Property Type",value:(g=(P=e==null?void 0:e.data)==null?void 0:P.data)==null?void 0:g.property_type},{title:"Holding Type",value:(H=(w=e==null?void 0:e.data)==null?void 0:w.data)==null?void 0:H.holding_type},{title:"Property has Mobile Tower's ?",value:(T=(A=e==null?void 0:e.data)==null?void 0:A.data)!=null&&T.is_mobile_tower?"Yes":"No"},{title:"Property has Hoarding Board's ?",value:((B=(Y=e==null?void 0:e.data)==null?void 0:Y.data)==null?void 0:B.is_hoarding_board)||"NA"},{title:"Is property has a Petrol Pump?",value:(F=(C=e==null?void 0:e.data)==null?void 0:C.data)!=null&&F.is_petrol_pump?"Yes":"No"},{title:"Rainwater harvesting provision",value:(L=(I=e==null?void 0:e.data)==null?void 0:I.data)!=null&&L.is_water_harvesting?"Yes":"No"}])},[(i=e==null?void 0:e.data)==null?void 0:i.data]),l!=null&&l.isLoading?s.jsx(S,{}):s.jsx(U,{title:"Payment History",children:s.jsxs("div",{className:"p-4",children:[s.jsx(t.Card,{className:"mb-4",children:s.jsxs(t.CardBody,{children:[s.jsx("div",{className:"flex justify-between items-center",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Holding Details"})}),s.jsx("hr",{className:"my-2"}),E.map((a,d)=>s.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsxs("h1",{className:"text-sm font-semibold",children:[a.title,":"]})}),s.jsx("div",{className:"col-span-1",children:s.jsx("p",{className:"text-sm",children:a.value})})]},d))]})}),s.jsx(t.Card,{children:s.jsxs(t.CardBody,{children:[s.jsx("div",{className:"flex justify-between items-center",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Payment History"})}),s.jsx("hr",{className:"my-2"}),(p=(o=(n=l==null?void 0:l.data)==null?void 0:n.data)==null?void 0:o.Holding)==null?void 0:p.map((a,d)=>s.jsxs(c.Fragment,{children:[s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2 justify-center items-center ",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Transaction No : "})}),s.jsx("div",{className:"col-span-1",children:s.jsx("p",{className:"text-sm",children:a==null?void 0:a.tran_no})}),s.jsx("div",{className:"text-center ",children:s.jsx(z,{to:"/amc-app/property/payment-receipt/".concat(a==null?void 0:a.id),className:"text-xs text-blue-600 border border-blue-600 rounded-md px-2 py-1",children:"Receipt"})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Payment Mode :"})}),s.jsx("div",{className:"col-span-2",children:s.jsx("p",{className:"text-sm",children:a==null?void 0:a.payment_mode})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Date :"})}),s.jsx("div",{className:"col-span-2",children:s.jsx("p",{className:"text-sm",children:a==null?void 0:a.tran_date})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-sm font-semibold",children:"From Final/Year:"})}),s.jsx("div",{className:"col-span-2",children:s.jsx("p",{className:"text-sm",children:a==null?void 0:a.from_fyear})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Upto Final/Year:"})}),s.jsx("div",{className:"col-span-2",children:s.jsx("p",{className:"text-sm",children:a==null?void 0:a.to_fyear})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Amount:"})}),s.jsx("div",{className:"col-span-2",children:s.jsx("p",{className:"text-sm",children:a==null?void 0:a.amount})})]}),s.jsx("div",{className:"my-2 border-b-2"})]},d))]})})]})})}export{X as default};
