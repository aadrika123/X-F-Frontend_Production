import{b as ie,S as xe,Q as P,m as D,c as re,j as e,d as me,I as he}from"./index-kFrNXNj3.js";import{e as le,u as oe}from"./router-5yjtezO8.js";import{r as p,P as se}from"./tailwind-6U-kYQAu.js";import{O as pe}from"./OverLayLoader-A0nyVvRw.js";import{F as ue}from"./FormProvider-m5UeA_k0.js";import{T as x}from"./TextField-VY9Pfcn0.js";import{S as de}from"./SelectField-TDHKwV6Z.js";import{u as je}from"./formik.esm-BnzrXcQN.js";import"./index-iFVn5AxS.js";import{c as be,a as l}from"./index.esm-uHa2PMRf.js";import{P as Ne}from"./index-RhIUOsuG.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./module-NSAAS-cO.js";import"./customInputValidation-jhKsg103.js";ce.propTypes={shopDetails:se.any,paymentMutation:se.any};function ce({shopDetails:d,paymentMutation:F}){var N,y,f,t,j,g,w,v,E,S,Y,B,I,A,H,$,U,Q,T,O,L,R,_,k;const{id:i}=le(),{user:o}=ie(),b=oe(),n=je({initialValues:{toFYear:"",paymentMode:"",bankName:"",chequeNo:"",ddNo:"",branchName:"",photo:"",chequeDdDate:""},validationSchema:be({toFYear:l().required("Required"),paymentMode:l().required("Required"),bankName:l().when(["paymentMode"],{is:a=>["CHEQUE","DD"].includes(a),then:()=>l().required("Cheque/DD No is required")}),chequeNo:l().when(["paymentMode"],{is:a=>a==="CHEQUE",then:()=>l().required("Cheque No is required")}),ddNo:l().when(["paymentMode"],{is:a=>a==="DD",then:()=>l().required("DD No is required")}),branchName:l().when(["paymentMode"],{is:a=>["CHEQUE","DD"].includes(a),then:()=>l().required("Branch Name is required")}),chequeDdDate:l().when(["paymentMode"],{is:a=>["CHEQUE","DD"].includes(a),then:()=>l().required("Cheque/DD Date is required")}),photo:l().when(["paymentMode"],{is:a=>["CHEQUE","DD"].includes(a),then:()=>l().required("Photo is required")})}),onSubmit:async a=>{var m,u;xe.fire({title:"Are you sure?",text:"You want to proceed with payment of Rs."+((u=(m=r==null?void 0:r.data)==null?void 0:m.data)==null?void 0:u.amount),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async h=>{h.isConfirmed&&await M(a)}).catch(h=>{var q,C;P.error((C=(q=h==null?void 0:h.response)==null?void 0:q.data)==null?void 0:C.message)})}}),M=async a=>{var h,q,C,z,V,G,J,K,W,X,Z,ee,ae,te,ne;let m="",u=null;try{if(a.paymentMode==="CASH"&&(m=(h=D)==null?void 0:h.shopPaymentCash,u={shopId:i,toFYear:a.toFYear,paymentMode:a.paymentMode}),a.paymentMode==="CHEQUE"||a.paymentMode==="DD"){m=(q=D)==null?void 0:q.payNowCheckOrDD;const c=new FormData;c.append("shopId",i),c.append("toFYear",a.toFYear),c.append("paymentMode",a.paymentMode),c.append("bankName",a.bankName),c.append("branchName",a.branchName),c.append("chequeDdDate",a.chequeDdDate),c.append("photo",a.photo),a.paymentMode==="CHEQUE"&&c.append("chequeNo",a.chequeNo),a.paymentMode==="DD"&&c.append("ddNo",a.ddNo),u=c}a.paymentMode==="ONLINE"&&(m=(C=D)==null?void 0:C.shopPaymentOnline,u={userId:o==null?void 0:o.id,shopId:i,uptoFYear:a.toFYear,frontFailUrl:"".concat(window.location.origin,"/amc-app/adv-municipal-rental/receipt-list-by-shop?shop-id=").concat(i),frontSuccessUrl:"".concat(window.location.origin,"/amc-app/adv-municipal-rental/receipt-list-by-shop?shop-id=").concat(i)});const s=await F.mutateAsync({api:m,data:u});if(console.log(s==null?void 0:s.data),((z=s==null?void 0:s.data)==null?void 0:z.status)===!0){if(((G=(V=s==null?void 0:s.data)==null?void 0:V.data)==null?void 0:G.url)!=null){window.location.href=(K=(J=s==null?void 0:s.data)==null?void 0:J.data)==null?void 0:K.url;return}P.success((W=s==null?void 0:s.data)==null?void 0:W.message);const c=a.paymentMode=="CASH"?(Z=(X=s==null?void 0:s.data)==null?void 0:X.data)==null?void 0:Z.tranId:(te=(ae=(ee=s==null?void 0:s.data)==null?void 0:ee.data)==null?void 0:ae.details)==null?void 0:te.id;b("/amc-app/adv-municipal-rental/payment-receipt?tran-id=".concat(c),{replace:!0})}else P.error((ne=s==null?void 0:s.data)==null?void 0:ne.message)}catch(s){console.log(s)}},r=re({api:(N=D)==null?void 0:N.calculateShopRate,config:{shopId:i,toFYear:(y=n==null?void 0:n.values)==null?void 0:y.toFYear},key:"calculateDemand",value:[n.values.toFYear],options:{enabled:!!((f=n==null?void 0:n.values)!=null&&f.toFYear)}});return e.jsx(p.Card,{children:e.jsxs(p.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-1",children:e.jsx("h1",{className:"text-sm font-semibold",children:"# Payment"})}),e.jsx("div",{className:"my-2 border-b-2"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Total Demand"}),e.jsxs("h1",{className:"text-xs text-blue-500",children:[" ₹ ",(j=(t=d==null?void 0:d.data)==null?void 0:t.data)==null?void 0:j.total]})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Paid Amount"}),e.jsxs("h1",{className:"text-xs text-green-500",children:["₹ ",(w=(g=d==null?void 0:d.data)==null?void 0:g.data)==null?void 0:w.totalPaid]})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Pending Amount"}),e.jsxs("h1",{className:"text-xs text-red-500",children:["₹ ",(E=(v=d==null?void 0:d.data)==null?void 0:v.data)==null?void 0:E.pendingAmount]})]})]}),((Y=(S=d==null?void 0:d.data)==null?void 0:S.data)==null?void 0:Y.pendingAmount)>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(ue,{formik:n,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs(de,{label:"To Financial Year",name:"toFYear",formik:n,children:[e.jsx("option",{value:"",children:"Select Financial Year"}),(A=(I=(B=d==null?void 0:d.data)==null?void 0:B.data)==null?void 0:I.fYear)==null?void 0:A.map((a,m)=>e.jsx("option",{value:a==null?void 0:a.id,children:a==null?void 0:a.financialYear},m+1))]}),e.jsxs(de,{label:"Payment Mode",name:"paymentMode",formik:n,children:[e.jsx("option",{value:"",children:"Select Payment Mode"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})]}),((H=n==null?void 0:n.values)==null?void 0:H.paymentMode)==="CHEQUE"&&e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(x,{label:"Bank Name",name:"bankName",formik:n}),e.jsx(x,{label:"Cheque No",name:"chequeNo",formik:n}),e.jsx(x,{label:"Branch Name",name:"branchName",formik:n}),e.jsx(x,{label:"Cheque Date",name:"chequeDdDate",min:new Date().toISOString().split("T")[0],type:"date",formik:n}),e.jsx("div",{className:"col-span-2",children:e.jsx(x,{name:"photo",type:"file",onChange:a=>n.setFieldValue("photo",a.target.files[0])})})]}),(($=n==null?void 0:n.values)==null?void 0:$.paymentMode)==="DD"&&e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(x,{label:"Bank Name",name:"bankName",formik:n}),e.jsx(x,{label:"DD No",name:"ddNo",formik:n}),e.jsx(x,{label:"Branch Name",name:"branchName",formik:n}),e.jsx(x,{label:"DD Date",name:"chequeDdDate",type:"date",formik:n,min:new Date().toISOString().split("T")[0]}),e.jsx("div",{className:"col-span-2",children:e.jsx(x,{label:"Photo",name:"photo",onChange:a=>n.setFieldValue("photo",a.target.files[0]),type:"file"})})]}),e.jsx("div",{className:"my-4 border-b-2"}),((Q=(U=r==null?void 0:r.data)==null?void 0:U.data)==null?void 0:Q.amount)>0&&e.jsx("div",{className:"flex justify-center items-center mb-1",children:e.jsxs("h1",{className:"text-base font-semibold text-gray-900",children:["Payable Amount :"," ",e.jsxs("span",{className:"text-red-500",children:["₹ ",(O=(T=r==null?void 0:r.data)==null?void 0:T.data)==null?void 0:O.amount]})]})}),e.jsxs("div",{className:"flex justify-center items-center gap-3",children:[e.jsx(p.Button,{color:"blue",size:"sm",className:"text-xs w-full",onClick:()=>{var a;return b("/amc-app/adv-municipal-rental/demand-receipt?id=".concat(i,"&year=").concat((a=n==null?void 0:n.values)==null?void 0:a.toFYear,"&get-demand=all"))},children:e.jsx("small",{children:"Demand Receipt"})}),e.jsxs(p.Button,{color:"green",size:"sm",className:"text-xs w-full",type:"submit",children:[e.jsx("small",{children:"Pay Now "})," ",((R=(L=r==null?void 0:r.data)==null?void 0:L.data)==null?void 0:R.amount)>0&&e.jsxs(e.Fragment,{children:["₹",(k=(_=r==null?void 0:r.data)==null?void 0:_.data)==null?void 0:k.amount]})]})]})]})]})]})})}function He(){var b,n,M,r,N,y,f;const{id:d}=le(),F=me({}),i=oe(),o=re({api:(b=D)==null?void 0:b.shopDetailById,config:{id:d},options:{enabled:!!d}});return o.isLoading?e.jsx(he,{}):e.jsxs(Ne,{title:"Shop Details",children:[F.isLoading&&e.jsx(pe,{}),e.jsxs("div",{className:"p-4",children:[e.jsx(p.Card,{children:e.jsxs(p.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"# Basic Details"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"flex flex-col",children:(r=(M=(n=o==null?void 0:o.data)==null?void 0:n.data)==null?void 0:M.shopDetails)==null?void 0:r.map((t,j)=>e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-xs font-semibold",children:t==null?void 0:t.displayString}),e.jsx("h1",{className:"text-xs",children:t==null?void 0:t.value})]},j+1))})]})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx(ce,{shopDetails:o,paymentMutation:F}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-sm font-semibold",children:"# Demand Details"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg rounded-xl",children:e.jsxs("table",{className:"w-full text-xs text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-xs font-semibold p-2 text-center border border-slate-300",children:"Financial Year"}),e.jsx("th",{className:"text-xs font-semibold p-2 text-center border border-slate-300",children:"Generated Demand"}),e.jsx("th",{className:"text-xs font-semibold p-2 text-center border border-slate-300",children:"Payment Date"}),e.jsx("th",{className:"text-xs font-semibold p-2 text-center border border-slate-300",children:"payment Status"})]})}),e.jsx("tbody",{children:(f=(y=(N=o==null?void 0:o.data)==null?void 0:N.data)==null?void 0:y.demands)==null?void 0:f.map((t,j)=>{var g,w,v;return e.jsxs("tr",{children:[e.jsx("td",{className:"text-xs p-2 text-center border border-slate-300",children:(g=t==null?void 0:t.financial_year)!=null?g:"---"}),e.jsxs("td",{className:"text-xs p-2 text-center border border-slate-300",children:[e.jsx("span",{children:"₹"}),(w=t==null?void 0:t.amount)!=null?w:0]}),e.jsx("td",{className:"text-xs p-2 text-center border border-slate-300",children:(v=t==null?void 0:t.payment_date)!=null?v:"---"}),e.jsx("td",{className:"text-xs p-2 text-center border border-slate-300",children:(t==null?void 0:t.payment_status)==0&&(t==null?void 0:t.amount)!=null&&e.jsx(p.Button,{color:"blue",variant:"outlined",size:"sm",className:"py-1.5 px-4",onClick:()=>{i("/amc-app/adv-municipal-rental/demand-receipt?id=".concat(d,"&year=").concat(t==null?void 0:t.financial_year))},children:e.jsx("small",{children:"Demand"})})||(t==null?void 0:t.payment_status)==1&&(t==null?void 0:t.amount)!=null&&e.jsx(p.Button,{variant:"outlined",color:"green",size:"sm",className:"py-1.5 px-4",onClick:()=>{i("/amc-app/adv-municipal-rental/payment-receipt?tran-id=".concat(t==null?void 0:t.tran_id))},children:e.jsx("small",{children:"Receipt"})})||(t==null?void 0:t.payment_status)==0&&(t==null?void 0:t.amount)==null&&e.jsx("h1",{className:"text-xs text-red-500",children:"Not Generated"})})]},j+1)})})]})})]})]})}export{He as default};
