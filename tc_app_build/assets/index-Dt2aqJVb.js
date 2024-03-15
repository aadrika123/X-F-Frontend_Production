import{a as A,w as L,j as s,f as I}from"./index-KGM8Jklw.js";import{d as l,h as M,L as R}from"./router-g9NwwHut.js";import{r}from"./tailwind-xMhOhnt0.js";import{P as T}from"./index-EmwJpn9b.js";import"./reactQuery-Q7rJjNxq.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-hq-Xw8mW.js";import"./reactIcons-TqjzQo_g.js";import"./headlessui-QgKi6LbN.js";function Z(){var o,i,t,m,x,p,h;const[E,F]=l.useState([]);l.useState([]);const{id:d}=M(),e=A({api:L.waterGetDetails,config:{applicationId:d},value:[d],options:{enabled:!!d}}),c=A({api:L.waterPaymentHistory,config:{consumerId:d},value:[d],options:{enabled:!!d}});return l.useEffect(()=>{var a,n,j,N,u,v,f,g,b,y,C,_,P;(a=e==null?void 0:e.data)!=null&&a.data&&F([{title:"Consumer No",value:(j=(n=e==null?void 0:e.data)==null?void 0:n.data)==null?void 0:j.consumer_no},{title:"Owner Name",value:(u=(N=e==null?void 0:e.data)==null?void 0:N.data)==null?void 0:u.applicant_name},{title:"Meter No",value:(f=(v=e==null?void 0:e.data)==null?void 0:v.data)==null?void 0:f.meter_no},{title:"Property No",value:(b=(g=e==null?void 0:e.data)==null?void 0:g.data)==null?void 0:b.property_no},{title:"Zone",value:(C=(y=e==null?void 0:e.data)==null?void 0:y.data)==null?void 0:C.zone_name},{title:"Ward No",value:(P=(_=e==null?void 0:e.data)==null?void 0:_.data)==null?void 0:P.ward_number}])},[(o=e==null?void 0:e.data)==null?void 0:o.data]),e!=null&&e.isLoading?s.jsx(I,{}):s.jsx(T,{title:"Payment History",children:s.jsxs("div",{className:"p-4",children:[s.jsx(r.Card,{className:"mb-4",children:s.jsxs(r.CardBody,{children:[s.jsx("div",{className:"flex justify-between items-center",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Consumer Details"})}),s.jsx("hr",{className:"my-2"}),E.map((a,n)=>s.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsxs("h1",{className:"text-sm font-semibold",children:[a.title,":"]})}),s.jsx("div",{className:"col-span-1",children:s.jsx("p",{className:"text-sm",children:(a==null?void 0:a.value)||"--"})})]},n))]})}),s.jsx(r.Card,{children:s.jsxs(r.CardBody,{children:[s.jsx("div",{className:"flex justify-between items-center",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Payment History"})}),s.jsx("hr",{className:"my-2"}),((m=(t=(i=c==null?void 0:c.data)==null?void 0:i.data)==null?void 0:t.Consumer)==null?void 0:m.length)>0?s.jsx(s.Fragment,{children:(h=(p=(x=c==null?void 0:c.data)==null?void 0:x.data)==null?void 0:p.Consumer)==null?void 0:h.map((a,n)=>s.jsxs(l.Fragment,{children:[s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2 justify-center items-center ",children:[s.jsx("div",{className:"col-span-1",children:s.jsxs("h1",{className:"text-sm font-semibold",children:["Transaction No :"," "]})}),s.jsx("div",{className:"col-span-1",children:s.jsx("p",{className:"text-sm",children:a==null?void 0:a.tran_no})}),s.jsx("div",{className:"text-center ",children:s.jsx(R,{to:"/amc-app/water/water-payment-receipt/".concat(a==null?void 0:a.id),className:"text-xs text-blue-600 border border-blue-600 rounded-md px-2 py-1",children:"Receipt"})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Payment Mode :"})}),s.jsx("div",{className:"col-span-2",children:s.jsx("p",{className:"text-sm",children:a==null?void 0:a.payment_mode})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Date :"})}),s.jsx("div",{className:"col-span-2",children:s.jsx("p",{className:"text-sm",children:a==null?void 0:a.tran_date})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-sm font-semibold",children:"TYPE:"})}),s.jsx("div",{className:"col-span-2",children:s.jsx("p",{className:"text-sm",children:a==null?void 0:a.tran_type})})]}),s.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[s.jsx("div",{className:"col-span-1",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Amount:"})}),s.jsx("div",{className:"col-span-2",children:s.jsx("p",{className:"text-sm",children:a==null?void 0:a.amount})})]}),s.jsx("div",{className:"my-2 border-b-2"})]},n))}):s.jsx("div",{className:"flex justify-center items-center",children:s.jsx("h1",{className:"text-sm font-semibold text-red-900 text-center",children:"Water Application's Transaction Details Not Found!!"})})]})})]})})}export{Z as default};
