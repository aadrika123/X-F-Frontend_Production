import{b as ue,a as be,w as f,Q as b,j as e,f as ye}from"./index--OGVRpB5.js";import{u as ge,h as we}from"./router-g9NwwHut.js";import{r as d}from"./tailwind-xMhOhnt0.js";import{u as Ce}from"./formik.esm-MEJnthxH.js";import{c as ve,a as h,f as Ne}from"./index.esm-lGQm42K_.js";import{F as Te}from"./FormProvider-c2SyZ-sg.js";import{T as N}from"./TextField-54OclycZ.js";import"./index-KJUlVKah.js";import{P as Fe}from"./index-WG2BbsAP.js";import{r as _e}from"./resizeImage-OgquN-MN.js";import"./reactQuery-Q7rJjNxq.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-hq-Xw8mW.js";import"./reactIcons-TqjzQo_g.js";import"./headlessui-QgKi6LbN.js";import"./customInputValidation-8tSUGdUh.js";function Ye(){var u,y,g,w,C,v,T,F,_,P,A,R,M,B,I,L,S,U,E,O,q,z,$,D,G,Y,k,V,Q,W,H,J,K,X,Z,ee,se,ae,te,de,le,re,ne,ie,ce,oe,me,xe;const p=ge(),j=ue({}),{id:l}=we(),a=be({api:f.waterGetDetails,config:{applicationId:l},value:[l],options:{enabled:!!l}}),t=be({api:f.waterListDemand,config:{ConsumerId:l},value:[l],options:{enabled:!!l}}),i=Ce({enableReinitialize:!0,initialValues:{consumerId:l,demandUpto:new Date().toISOString().split("T")[0]||"",finalRading:"",document:"",connectionType:(g=(y=(u=t==null?void 0:t.data)==null?void 0:u.data)==null?void 0:y.meterDetails)==null?void 0:g.connection_type},validationSchema:ve().shape({demandUpto:h().required("Demand Upto is required"),connectionType:h().optional(),finalRading:h().when("connectionType",{is:s=>s==1,then:()=>h().required("Final Meter Reading is required")}),document:Ne().when("connectionType",{is:s=>s==1,then:()=>Ne().required("Document is required")})}),onSubmit:async(s,{resetForm:c})=>{var x,o,m,he,je,fe;try{const r=new FormData;r.append("consumerId",s==null?void 0:s.consumerId),r.append("demandUpto",s==null?void 0:s.demandUpto),r.append("finalRading",s==null?void 0:s.finalRading),r.append("document",s==null?void 0:s.document);const n=await j.mutateAsync({api:(x=f)==null?void 0:x.generateDemandWater,data:r});(o=n==null?void 0:n.data)!=null&&o.status?(b.success((m=n==null?void 0:n.data)==null?void 0:m.message),t.refetch()):b.error((he=n==null?void 0:n.data)==null?void 0:he.message)}catch(r){b.error((fe=(je=r==null?void 0:r.response)==null?void 0:je.data)==null?void 0:fe.message)}c()}}),pe=async s=>{var o,m;const c=await _e(s.target.files[0]),x=new File([c],(m=(o=s==null?void 0:s.target)==null?void 0:o.files[0])==null?void 0:m.name,{type:"image/*"});i.setFieldValue("document",x)};return a!=null&&a.isLoading||t!=null&&t.isLoading?e.jsx(ye,{}):e.jsx(Fe,{title:"Consumer Details",children:e.jsxs("div",{className:"p-4",children:[e.jsx(d.Card,{children:e.jsxs(d.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-base font-semibold",children:"# Basic Details"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Applicant name:"}),e.jsx("h1",{className:"text-sm",children:(C=(w=a==null?void 0:a.data)==null?void 0:w.data)==null?void 0:C.applicant_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Property No:"}),e.jsx("h1",{className:"text-sm",children:(T=(v=a==null?void 0:a.data)==null?void 0:v.data)==null?void 0:T.folio_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Consumer No:"}),e.jsx("h1",{className:"text-sm",children:(_=(F=a==null?void 0:a.data)==null?void 0:F.data)==null?void 0:_.consumer_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Reading Date:"}),e.jsx("h1",{className:"text-sm",children:((A=(P=a==null?void 0:a.data)==null?void 0:P.data)==null?void 0:A.reading_date)||"--"})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),e.jsx("h1",{className:"text-sm w-36 truncate",children:((M=(R=a==null?void 0:a.data)==null?void 0:R.data)==null?void 0:M.address)||"--"})]})]})]})}),e.jsxs(d.Card,{className:"w-full mt-5",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"# Meter/Fixed Connection Details"})}),e.jsx(d.CardBody,{children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Connection Type:"}),e.jsx("h1",{className:"text-sm",children:((L=(I=(B=t==null?void 0:t.data)==null?void 0:B.data)==null?void 0:I.meterDetails)==null?void 0:L.ConnectionTypeName)||"--"})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Meter No:"}),e.jsx("h1",{className:"text-sm",children:(E=(U=(S=a==null?void 0:a.data)==null?void 0:S.data)==null?void 0:U.meterDetails)==null?void 0:E.meter_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Last Meter Reading:"}),e.jsx("h1",{className:"text-sm",children:(q=(O=a==null?void 0:a.data)==null?void 0:O.data)==null?void 0:q.finalReading})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Reading Date:"}),e.jsx("h1",{className:"text-sm",children:(($=(z=a==null?void 0:a.data)==null?void 0:z.data)==null?void 0:$.readingdate)||"--"})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Connection Date:"}),e.jsx("h1",{className:"text-sm",children:((Y=(G=(D=a==null?void 0:a.data)==null?void 0:D.data)==null?void 0:G.meterDetails)==null?void 0:Y.connection_date)||"--"})]})]})})]}),e.jsxs(d.Card,{className:"mt-4 w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Demand List"})}),e.jsx(d.CardBody,{children:e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"# Sno."}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND FROM"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND UPTO"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND AMOUNT"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"PENALTY"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"CONNECTION TYPE"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"PAYABLE AMOUNT"})]})}),e.jsx("tbody",{children:(Q=(V=(k=t==null?void 0:t.data)==null?void 0:k.data)==null?void 0:V.consumerDemands)==null?void 0:Q.map((s,c)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:c+1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.demand_from}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.demand_upto}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.balance_amount}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.penalty}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:s==null?void 0:s.connection_type}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(s==null?void 0:s.due_balance_amount)||0})]},c))})]})})})]}),e.jsx(Te,{formik:i,children:e.jsxs(d.Card,{className:"mt-4 w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Generate Demand"})}),e.jsx(d.CardBody,{children:e.jsxs("div",{className:"my-3",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[((J=(H=(W=t==null?void 0:t.data)==null?void 0:W.data)==null?void 0:H.meterDetails)==null?void 0:J.connection_type)==1&&e.jsxs(e.Fragment,{children:[e.jsx(N,{formik:i,name:"finalRading",type:"number",placeholder:"Final Meter Reading"}),e.jsxs("div",{children:[e.jsx(N,{accept:"image/*",name:"document",type:"file",onChange:s=>pe(s)}),e.jsx("small",{className:"text-red-500 -mt-6",children:(K=i==null?void 0:i.errors)==null?void 0:K.document})]})]}),e.jsx(N,{disabled:!0,name:"demandUpto",type:"text",formik:i})]}),e.jsx("div",{className:"flex flex-row justify-center mt-2 gap-5",children:e.jsx(d.Button,{type:"submit",color:"blue",size:"sm",loading:j.isLoading,disabled:j.isLoading,children:e.jsx("small",{children:"Generate Demand"})})})]})})]})}),e.jsxs(d.Card,{className:"w-full mt-4",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Payment Details"})}),e.jsx(d.CardBody,{children:e.jsxs("div",{className:"flex flex-col",children:[((Z=(X=t==null?void 0:t.data)==null?void 0:X.data)==null?void 0:Z.totalSumDemand)>0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Total Dues:"}),e.jsxs("h1",{className:"text-sm",children:["₹"," ",((se=(ee=t==null?void 0:t.data)==null?void 0:ee.data)==null?void 0:se.totalSumDemand)||"0"]})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Due From:"}),e.jsx("h1",{className:"text-sm",children:(te=(ae=a==null?void 0:a.data)==null?void 0:ae.data)==null?void 0:te.demand_from})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Due Upto:"}),e.jsx("h1",{className:"text-sm",children:(le=(de=a==null?void 0:a.data)==null?void 0:de.data)==null?void 0:le.demand_upto})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsxs("h1",{className:"text-sm font-semibold",children:["Total Due Demand ",e.jsx("small",{children:"(Month)"}),":"," "]}),e.jsx("h1",{className:"text-sm",children:((ie=(ne=(re=t==null?void 0:t.data)==null?void 0:re.data)==null?void 0:ne.consumerDemands)==null?void 0:ie.length)||"--"})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Total Payable Amount:"}),e.jsxs("h1",{className:"text-sm ",children:["₹ ",((oe=(ce=t==null?void 0:t.data)==null?void 0:ce.data)==null?void 0:oe.totalSumDemand)||"0"]})]})]}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-row justify-center items-center mb-2",children:e.jsx("h1",{className:"font-bold text-red-900",children:"No Dues "})})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"flex flex-row justify-center gap-5",children:[((xe=(me=t==null?void 0:t.data)==null?void 0:me.data)==null?void 0:xe.totalSumDemand)>0&&e.jsx(d.Button,{color:"blue",size:"sm",onClick:()=>p("/amc-app/water/water-payment/".concat(l)),children:e.jsx("small",{children:"Pay Demand"})}),e.jsx(d.Button,{color:"red",size:"sm",onClick:()=>p("/amc-app/water/demand-receipt/".concat(l)),children:e.jsx("small",{children:"Print Demand"})})]})]})})]})]})})}export{Ye as default};
