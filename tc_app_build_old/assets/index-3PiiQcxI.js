import{d as ae,c as de,t as F,S as te,Q as d,j as a}from"./index-kRHxnb6v.js";import{u as le,e as me}from"./router-5yjtezO8.js";import{r as M}from"./tailwind-6U-kYQAu.js";import{u as he}from"./formik.esm-BnzrXcQN.js";import{c as pe,a as c}from"./index.esm-uHa2PMRf.js";import{F as ue}from"./FormProvider-QX9HJ0z7.js";import{T as S}from"./TextField-sGOP2hNw.js";import{S as ne}from"./SelectField-EMle6Acd.js";import"./index-iFVn5AxS.js";import{O as xe}from"./OverLayLoader-APMEY282.js";import{P as ie}from"./index-uCrqiaDK.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./customInputValidation-jhKsg103.js";import"./module-6tXDmn27.js";function Te(){var B,P,L,_,T,U,H,I,O,Q,R,V,k,$,Y,v,z,W,G,J,K;const re=le(),{id:l}=me(),h=ae({}),t=ae({}),{data:n,isLoading:ye,refetch:Ne}=de({api:(B=F)==null?void 0:B.tradeAppDetail,config:{id:l},options:{enabled:!!l}}),i=he({enableReinitialize:!0,initialValues:{licenseFor:"",paymentMode:"",chequeNo:"",chequeDate:"",bankName:"",branchName:""},validationSchema:pe().shape({licenseFor:c().required("License For is required"),chequeNo:c().when(["paymentMode"],{is:e=>["CHEQUE","DD"].includes(e),then:()=>c().required("Cheque/DD No is required")}),chequeDate:c().when(["paymentMode"],{is:e=>["CHEQUE","DD"].includes(e),then:()=>c().required("Cheque/DD Date is required")}),bankName:c().when(["paymentMode"],{is:e=>["CHEQUE","DD"].includes(e),then:()=>c().required("Bank Name is required")}),branchName:c().when(["paymentMode"],{is:e=>["CHEQUE","DD"].includes(e),then:()=>c().required("Branch Name is required")})}),onSubmit:async(e,{setSubmitting:m})=>{var p,u,x,y,N,f,b,g,r,X,Z,ee;const E={licenceId:l,licenseFor:e==null?void 0:e.licenseFor,paymentMode:e==null?void 0:e.paymentMode,chequeNo:e==null?void 0:e.chequeNo,chequeDate:e==null?void 0:e.chequeDate,bankName:e==null?void 0:e.bankName,branchName:e==null?void 0:e.branchName,penalty:(x=(u=(p=t==null?void 0:t.data)==null?void 0:p.data)==null?void 0:u.data)==null?void 0:x.penalty,rate:(f=(N=(y=t==null?void 0:t.data)==null?void 0:y.data)==null?void 0:N.data)==null?void 0:f.rate,totalCharge:(r=(g=(b=t==null?void 0:t.data)==null?void 0:b.data)==null?void 0:g.data)==null?void 0:r.total_charge,denialAmount:(ee=(Z=(X=t==null?void 0:t.data)==null?void 0:X.data)==null?void 0:Z.data)==null?void 0:ee.arear_amount};(e==null?void 0:e.paymentMode)=="ONLINE"?te.fire({title:"Are you sure?",text:"You want to proceed with online payment!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, submit it!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async A=>{var j,q,D,C,w,s;if(A.isConfirmed)try{const o=await h.mutateAsync({api:F.initPayment,data:{applicationId:l,frontFailUrl:window.location.origin+"/amc-app/trade/trade-payment/".concat(l),frontSuccessUrl:window.location.origin+"/amc-app/trade/trade-payment-history/".concat(l)}});console.log((q=(j=o==null?void 0:o.data)==null?void 0:j.data)==null?void 0:q.url),(D=o==null?void 0:o.data)!=null&&D.status?window.location.href=(w=(C=o==null?void 0:o.data)==null?void 0:C.data)==null?void 0:w.url:d.error((s=o==null?void 0:o.data)==null?void 0:s.message)}catch(o){d.error(err==null?void 0:err.message)}}):te.fire({title:"Are you sure?",text:"You want to proceed with offline payment!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, submit it!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async A=>{var j,q,D,C,w;if(A.isConfirmed)try{const s=await h.mutateAsync({api:F.payCharge,data:E});(j=s==null?void 0:s.data)!=null&&j.status?(d.success((q=s==null?void 0:s.data)==null?void 0:q.message),re("/amc-app/trade/trade-payment-receipt?license-id=".concat(l,"&tran-id=").concat((C=(D=s==null?void 0:s.data)==null?void 0:D.data)==null?void 0:C.transactionId))):d.error((w=s==null?void 0:s.data)==null?void 0:w.message)}catch(s){d.error(err==null?void 0:err.message)}})}}),se=()=>{var e,m;switch((m=(e=n==null?void 0:n.data)==null?void 0:e.licenceDtl)==null?void 0:m.application_type_id){case 1:return"NEWLICENSE";case 2:return"RENEWAL";case 3:return"AMENDMENT";case 4:return"SURRENDER";default:return""}},oe=async e=>{var m,E,p,u,x,y,N,f,b,g;if(e.target.value!="")try{const r=await t.mutateAsync({api:F.tradeGetDemand,data:{licenseFor:e.target.value,firmEstdDate:(E=(m=n==null?void 0:n.data)==null?void 0:m.licenceDtl)==null?void 0:E.establishment_date,natureOfBusiness:[{id:(x=(u=(p=n==null?void 0:n.data)==null?void 0:p.licenceDtl)==null?void 0:u.nature_of_bussiness)==null?void 0:x.split(",")[0]}],areaSqft:(N=(y=n==null?void 0:n.data)==null?void 0:y.licenceDtl)==null?void 0:N.area_in_sqft,applicationType:se(),tocStatus:0}});(f=r==null?void 0:r.data)!=null&&f.status?d.success(((b=r==null?void 0:r.data)==null?void 0:b.message)||"Success"):d.error((g=r==null?void 0:r.data)==null?void 0:g.message)}catch(r){d.error(r==null?void 0:r.message)}else t.reset()},ce=e=>{e.target.value=="CASH"&&(i.setFieldValue("chequeNo",""),i.setFieldValue("chequeDate",""),i.setFieldValue("bankName",""),i.setFieldValue("branchName",""))};return((L=(P=n==null?void 0:n.data)==null?void 0:P.licenceDtl)==null?void 0:L.payment_status)=="0"&&((T=(_=n==null?void 0:n.data)==null?void 0:_.licenceDtl)==null?void 0:T.pending_status)=="5"?a.jsx(ie,{title:"Payment",children:a.jsx("div",{className:"p-4",children:a.jsxs(ue,{formik:i,children:[(h==null?void 0:h.isLoading)&&a.jsx(xe,{}),a.jsxs(M.Card,{children:[a.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:a.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Payable Amount"})}),a.jsxs(M.CardBody,{children:[a.jsx("div",{children:a.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-x-3",children:[a.jsxs(ne,{label:"License For",onChange:e=>{oe(e),i.setFieldValue("licenseFor",e.target.value)},name:"licenseFor",value:(U=i==null?void 0:i.values)==null?void 0:U.licenseFor,children:[a.jsx("option",{value:"",children:"Select License For"}),a.jsx("option",{value:"1",children:"1 Year"})]}),a.jsxs(ne,{label:"Payment Mode",name:"paymentMode",value:(H=i==null?void 0:i.values)==null?void 0:H.paymentMode,onChange:e=>{ce(e),i.setFieldValue("paymentMode",e.target.value)},children:[a.jsx("option",{value:"",children:"Select License For"}),[{value:"CASH",name:"Cash"},{value:"CHEQUE",name:"Cheque"},{value:"DD",name:"Demand Draft"},{value:"ONLINE",name:"Online"}].map(e=>a.jsx("option",{value:e.value,children:e.name},e.value))]}),["CHEQUE","DD"].includes((I=i.values)==null?void 0:I.paymentMode)&&a.jsxs(a.Fragment,{children:[a.jsx(S,{label:"Cheque/DD No",name:"chequeNo",formik:i}),a.jsx(S,{type:"date",label:"Cheque/DD Date",name:"chequeDate",formik:i,min:new Date().toISOString().split("T")[0]}),a.jsx(S,{label:"Bank Name",name:"bankName",formik:i}),a.jsx(S,{label:"Branch Name",name:"branchName",formik:i})]})]})}),a.jsx("div",{className:"border-t border-gray-200 my-5"}),a.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4 ",children:[a.jsx("h1",{className:"text-xs font-semibold text-gray-700",children:"Charge Applied :"}),a.jsxs("h1",{className:"text-xs font-semibold text-gray-700",children:["₹ ",((R=(Q=(O=t==null?void 0:t.data)==null?void 0:O.data)==null?void 0:Q.data)==null?void 0:R.rate)||0]}),a.jsx("h1",{className:"text-xs font-semibold text-gray-700",children:"Penalty :"}),a.jsxs("h1",{className:"text-xs font-semibold text-gray-700",children:["₹ ",(($=(k=(V=t==null?void 0:t.data)==null?void 0:V.data)==null?void 0:k.data)==null?void 0:$.penalty)||0]}),a.jsx("h1",{className:"text-xs font-semibold text-gray-700",children:"Denial Amount/Arrear Amount :"}),a.jsxs("h1",{className:"text-xs font-semibold text-gray-700",children:["₹ ",((z=(v=(Y=t==null?void 0:t.data)==null?void 0:Y.data)==null?void 0:v.data)==null?void 0:z.arear_amount)||0]}),a.jsx("h1",{className:"text-xs font-semibold text-gray-700",children:"Total Charge :"}),a.jsxs("h1",{className:"text-xs font-semibold text-gray-700",children:["₹ ",((J=(G=(W=t==null?void 0:t.data)==null?void 0:W.data)==null?void 0:G.data)==null?void 0:J.total_charge)||0]})]}),a.jsx("div",{className:"border-t border-gray-200 my-5"}),a.jsx("div",{className:"flex justify-center mt-4",children:a.jsx(M.Button,{color:"blue",type:"submit",size:"sm",children:a.jsx("small",{children:"Proceed to Payment"})})})]})]})]})})}):a.jsx(ie,{title:"Payment",children:a.jsx("div",{className:"flex p-8 justify-center items-center h-96",children:a.jsx("div",{className:"text-base font-semibold text-center text-red-900",children:a.jsx("h1",{className:"text-center",children:(K=n==null?void 0:n.data)==null?void 0:K.pendingStatus})})})})}export{Te as default};