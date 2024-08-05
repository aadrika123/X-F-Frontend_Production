import{d as Pe,c as Ne,f as w,S as Te,Q as y,j as e}from"./index-CUXWRp7E.js";import{u as qe,e as Fe,r as be}from"./router-vn-0iGwJ.js";import{r as b}from"./tailwind-umh7vczy.js";import{u as De}from"./formik.esm-ilDmhU_v.js";import"./moment-UBOc2Xni.js";import{F as Ce}from"./FormProvider-AqaH0m2Q.js";import{T as m}from"./TextField-lIRIs8bD.js";import{S as ue}from"./SelectField-rfwRcLQn.js";import{T as Me}from"./TextAreaField-R1kdcuSZ.js";import"./index-9INnh4Fj.js";import{c as Ie,a as j,d as fe,e as ge}from"./index.esm-19LW8OGO.js";import{P as Ae}from"./index-Nw9NoOgx.js";import{O as Ee}from"./OverLayLoader-BoUFcge-.js";import{r as Be}from"./resizeImage-rvTc-uUR.js";import{u as Re}from"./usePathWisePermission-mFuvvguM.js";import{U as Ue}from"./useSaveLocation-3bTy4-m-.js";import"./reactQuery-VYMV1vFj.js";import"./axios-lPgvryBG.js";import"./reactIcons-lANGEfNm.js";import"./headlessui-pLs_kC1m.js";import"./customInputValidation-8tSUGdUh.js";import"./module-Bxm9W1j2.js";function ca(){var q,F,D,C,M,I,A,E,B,R,U,S,O,L,_,$,W,V,Y,z,G,Q,H,J,K;const s=qe(),{saveLocation:h}=Ue(),i=Pe({}),{id:c}=Fe(),{result:P}=Re("/amc-app/water/water-payment"),o=Ne({api:w.waterGetDetails,config:{applicationId:c},value:[c],options:{enabled:!!c}}),r=Ne({api:w.waterListDemand,config:{ConsumerId:c},value:[c],options:{enabled:!!c}}),d=De({enableReinitialize:!0,initialValues:{consumerId:c,demandFrom:"",demandUpto:"",amount:"",paymentMode:"",remarks:"",paymentType:"isFullPayment",chequeDate:"",bankName:"",branchName:"",chequeNo:"",document:""},validationSchema:Ie().shape({paymentMode:j().required("Required"),chequeDate:j().when("paymentMode",{is:a=>a=="Cheque"||a=="DD"||a=="NEFT",then:()=>j().required("Required")}),bankName:j().when("paymentMode",{is:a=>a=="Cheque"||a=="DD"||a=="NEFT",then:()=>j().required("Required")}),branchName:j().when("paymentMode",{is:a=>a=="Cheque"||a=="DD"||a=="NEFT",then:()=>j().required("Required")}),chequeNo:j().when("paymentMode",{is:a=>a=="Cheque"||a=="DD"||a=="NEFT",then:()=>j().required("Required")}),document:fe().when("paymentMode",{is:a=>a=="Cheque"||a=="DD"||a=="NEFT",then:()=>fe().required("Required")}),paymentType:j().required("Required"),amount:ge().when("paymentType",{is:a=>a=="isPartPayment",then:()=>ge().required("Required")}),remarks:j().required("Required")}),onSubmit:async a=>{Te.fire({title:"Are you sure?",text:"You want to proceed with payment of Rs."+N(),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(n=>{n.isConfirmed&&we(a)}).catch(n=>{var x,l;y.error((l=(x=n==null?void 0:n.response)==null?void 0:x.data)==null?void 0:l.message)})}}),we=async a=>{var x,l,p,u,f,g,X,Z,k,v,ee,ae,te,de,se,ne,re,ce,me,oe,ie,le,xe,he,pe,ye,je;if(N()<=0){y.error("Please enter valid amount");return}const n={consumerId:a==null?void 0:a.consumerId,demandFrom:a==null?void 0:a.demandFrom,demandUpto:a==null?void 0:a.demandUpto,amount:(a==null?void 0:a.paymentType)=="isPartPayment"?N():"",paymentMode:a==null?void 0:a.paymentMode,remarks:a==null?void 0:a.remarks,paymentType:a==null?void 0:a.paymentType,deviceType:"android",chequeDate:a==null?void 0:a.chequeDate,bankName:a==null?void 0:a.bankName,branchName:a==null?void 0:a.branchName,chequeNo:a==null?void 0:a.chequeNo,document:a==null?void 0:a.document};if((a==null?void 0:a.paymentMode)=="Cheque"||(a==null?void 0:a.paymentMode)=="DD"||(a==null?void 0:a.paymentMode)=="NEFT"){try{const t=await i.mutateAsync({api:(x=w)==null?void 0:x.waterDemandPayment,data:n});(l=t==null?void 0:t.data)!=null&&l.status?(h({actionType:"successWaterPayment",refId:(u=(p=t==null?void 0:t.data)==null?void 0:p.data)==null?void 0:u.transactionId,moduleId:2}),s("/amc-app/water/water-payment-response?response=".concat((g=(f=t==null?void 0:t.data)==null?void 0:f.data)==null?void 0:g.TransactionNo,"&id=").concat((Z=(X=t==null?void 0:t.data)==null?void 0:X.data)==null?void 0:Z.transactionId),{replace:!0}),y.success((k=t==null?void 0:t.data)==null?void 0:k.message)):(h({actionType:"failedWaterPayment",refId:c,moduleId:2}),y.error((v=t==null?void 0:t.data)==null?void 0:v.message))}catch(t){y.error(t==null?void 0:t.message)}return}if((a==null?void 0:a.paymentMode)=="Cash"){try{const t=await i.mutateAsync({api:(ee=w)==null?void 0:ee.waterDemandPayment,data:n});(ae=t==null?void 0:t.data)!=null&&ae.status?(h({actionType:"successWaterPayment",refId:(de=(te=t==null?void 0:t.data)==null?void 0:te.data)==null?void 0:de.transactionId,moduleId:2}),s("/amc-app/water/water-payment-response?response=".concat((ne=(se=t==null?void 0:t.data)==null?void 0:se.data)==null?void 0:ne.TransactionNo,"&id=").concat((ce=(re=t==null?void 0:t.data)==null?void 0:re.data)==null?void 0:ce.transactionId),{replace:!0}),y.success((me=t==null?void 0:t.data)==null?void 0:me.message)):(h({actionType:"failedWaterPayment",refId:c,moduleId:2}),y.error((oe=t==null?void 0:t.data)==null?void 0:oe.message))}catch(t){y.error(t==null?void 0:t.message)}return}if((a==null?void 0:a.paymentMode)=="Online"){try{const t=await i.mutateAsync({api:w.waterOnlinePayment,data:{consumerId:a==null?void 0:a.consumerId,amount:a==null?void 0:a.amount,paymentMode:a==null?void 0:a.paymentMode,remarks:a==null?void 0:a.remarks,paymentType:a==null?void 0:a.paymentType,demandUpto:a==null?void 0:a.demandUpto,demandFrom:a==null?void 0:a.demandFrom,deviceType:"android",callbackUrl:"https://modernulb.com/amc-app/water/water-payment-history"}});(ie=t==null?void 0:t.data)!=null&&ie.status?(h({actionType:"WaterPaymentOnline",refId:(xe=(le=t==null?void 0:t.data)==null?void 0:le.data)==null?void 0:xe.requestId,moduleId:2}),y.success((he=t==null?void 0:t.data)==null?void 0:he.message),window.location.href=(ye=(pe=t==null?void 0:t.data)==null?void 0:pe.data)==null?void 0:ye.refUrl):(h({actionType:"successWaterPayment",refId:c,moduleId:2}),y.error((je=t==null?void 0:t.data)==null?void 0:je.message))}catch(t){y.error(t==null?void 0:t.message)}return}};be.useEffect(()=>{var a,n,x,l,p;(((a=d==null?void 0:d.values)==null?void 0:a.paymentMode)=="Cash"||((n=d==null?void 0:d.values)==null?void 0:n.paymentMode)=="Online"||((x=d==null?void 0:d.values)==null?void 0:x.paymentMode)=="NEFT"||((l=d==null?void 0:d.values)==null?void 0:l.paymentMode)=="DD"||((p=d==null?void 0:d.values)==null?void 0:p.paymentMode)=="Cheque")&&(d.setFieldValue("chequeDate",""),d.setFieldValue("bankName",""),d.setFieldValue("branchName",""),d.setFieldValue("chequeNo",""),d.setFieldValue("document",""))},[(q=d==null?void 0:d.values)==null?void 0:q.paymentMode]);const T=async a=>{var l,p;const n=await Be(a.target.files[0]),x=new File([n],(p=(l=a==null?void 0:a.target)==null?void 0:l.files[0])==null?void 0:p.name,{type:"image/*"});d.setFieldValue("document",x)},N=()=>{var n,x,l,p,u,f,g;let a=0;return((n=d.values)==null?void 0:n.paymentType)=="isFullPayment"&&(a=parseFloat((l=(x=r==null?void 0:r.data)==null?void 0:x.data)==null?void 0:l.totalSumDemand)-parseFloat((u=(p=r==null?void 0:r.data)==null?void 0:p.data)==null?void 0:u.remainAdvance)),((f=d.values)==null?void 0:f.paymentType)=="isPartPayment"&&(a=parseFloat((g=d.values)==null?void 0:g.amount)),a};return be.useEffect(()=>{N()},[(F=d.values)==null?void 0:F.amount]),e.jsxs(Ae,{title:"Pay Now",children:[i.isLoading&&e.jsx(Ee,{}),e.jsxs("div",{className:"p-4",children:[e.jsx(b.Card,{children:e.jsxs(b.CardBody,{children:[e.jsx("div",{className:"flex flex-row justify-between mb-3",children:e.jsx("h1",{className:"text-base font-semibold",children:"# Basic Details"})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Applicant name:"}),e.jsx("h1",{className:"text-sm",children:(C=(D=o==null?void 0:o.data)==null?void 0:D.data)==null?void 0:C.applicant_name})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Property No:"}),e.jsx("h1",{className:"text-sm",children:(I=(M=o==null?void 0:o.data)==null?void 0:M.data)==null?void 0:I.folio_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Consumer No:"}),e.jsx("h1",{className:"text-sm",children:(E=(A=o==null?void 0:o.data)==null?void 0:A.data)==null?void 0:E.consumer_no})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Reading Date:"}),e.jsx("h1",{className:"text-sm",children:((R=(B=o==null?void 0:o.data)==null?void 0:B.data)==null?void 0:R.reading_date)||"--"})]}),e.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[e.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),e.jsx("h1",{className:"text-sm w-36 truncate",children:((S=(U=o==null?void 0:o.data)==null?void 0:U.data)==null?void 0:S.address)||"--"})]})]})]})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs(b.Card,{className:"mt-4 w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Demand List"})}),e.jsx(b.CardBody,{children:e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"# Sno."}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND FROM"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND UPTO"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND AMOUNT"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"PENALTY"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"CONNECTION TYPE"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"PAYABLE AMOUNT"})]})}),e.jsx("tbody",{children:(_=(L=(O=r==null?void 0:r.data)==null?void 0:O.data)==null?void 0:L.consumerDemands)==null?void 0:_.map((a,n)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:n+1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a==null?void 0:a.demand_from}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a==null?void 0:a.demand_upto}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a==null?void 0:a.balance_amount}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a==null?void 0:a.penalty}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a==null?void 0:a.connection_type}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:a==null?void 0:a.due_balance_amount})]},n))})]})})})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx(Ce,{formik:d,children:e.jsxs(b.Card,{className:"mt-4 w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Payment Details"})}),e.jsxs(b.CardBody,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx("div",{children:e.jsxs(ue,{label:"Payment Mode",name:"paymentMode",formik:d,children:[e.jsx("option",{value:"",children:"Select Payment Mode"}),e.jsx("option",{value:"Cash",children:"Cash"}),e.jsx("option",{value:"Cheque",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"})]})}),e.jsx("div",{children:e.jsxs(ue,{label:"Payment Type",name:"paymentType",formik:d,children:[e.jsx("option",{value:"",children:"Select Payment Type"}),e.jsx("option",{value:"isFullPayment",children:"Full Payment"}),(P==null?void 0:P.read)&&e.jsx("option",{value:"isPartPayment",children:"Part Payment"})]})})]}),(($=d.values)==null?void 0:$.paymentType)=="isPartPayment"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"col-span-2",children:e.jsx(m,{label:"Amount",name:"amount",type:"number",formik:d})})]}),((W=d.values)==null?void 0:W.paymentMode)=="Cheque"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-3 border-b-2"}),e.jsx(Se,{formik:d,handleSelectImg:T})]}),((V=d.values)==null?void 0:V.paymentMode)=="DD"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-3 border-b-2"}),e.jsx(Oe,{formik:d,handleSelectImg:T})]}),((Y=d.values)==null?void 0:Y.paymentMode)=="NEFT"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-3 border-b-2"}),e.jsx(Le,{formik:d,handleSelectImg:T})]}),e.jsx("div",{className:"col-span-2 mt-3",children:e.jsx(Me,{label:"Remarks",name:"remarks",type:"text",formik:d})}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2 ",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Total Demand:"})}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm",children:["₹"," ",((G=(z=r==null?void 0:r.data)==null?void 0:z.data)==null?void 0:G.totalSumDemand)||0]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-red-600",children:"Penalty:"})}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm text-red-600",children:["₹"," ",(H=(Q=r==null?void 0:r.data)==null?void 0:Q.data)==null?void 0:H.totalPenalty]})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Advance:",e.jsx("small",{className:"text-[10px] text-blue-800",children:"( If your have any advance amount, it will be deducted from total demand amount. )"})]})}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm",children:["₹"," ",(K=(J=r==null?void 0:r.data)==null?void 0:J.data)==null?void 0:K.remainAdvance]})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-sm font-semibold text-green-600",children:"Total Pay Amount:"}),e.jsx("small",{className:"text-[10px] text-blue-800",children:"( Total Demand - Advance Amount)"})]}),e.jsx("div",{className:"text-end",children:e.jsxs("h1",{className:"text-sm text-green-600 font-semibold",children:["₹"," ",N()>0?N():0]})})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs(b.Button,{type:"submit",color:"blue",size:"sm",loading:i.isLoading,children:["Pay Now ",N()>0&&"₹ ".concat(N())]})})]})]})})]})]})}const Se=({formik:s,handleSelectImg:h})=>{var i;return e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(m,{label:"Cheque No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Cheque Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsxs("div",{className:"col-span-2",children:[e.jsx(m,{label:"Upload Cheque Image",name:"document",type:"file",onChange:c=>h(c)}),e.jsx("small",{className:"text-red-500",children:(i=s==null?void 0:s.errors)==null?void 0:i.document})]})]})},Oe=({formik:s,handleSelectImg:h})=>{var i;return e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(m,{label:"DD No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"DD Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsxs("div",{className:"col-span-2",children:[e.jsx(m,{label:"Upload DD Image",name:"document",type:"file",onChange:c=>h(c)}),e.jsx("small",{className:"text-red-500 -mt-6",children:(i=s==null?void 0:s.errors)==null?void 0:i.document})]})]})},Le=({formik:s,handleSelectImg:h})=>{var i;return e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx(m,{label:"NEFT No",name:"chequeNo",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"NEFT Date",name:"chequeDate",type:"date",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Bank Name",name:"bankName",type:"text",formik:s})}),e.jsx("div",{children:e.jsx(m,{label:"Branch Name",name:"branchName",type:"text",formik:s})}),e.jsxs("div",{className:"col-span-2",children:[e.jsx(m,{label:"Upload NEFT Image",name:"document",type:"file",onChange:c=>h(c)}),e.jsx("small",{className:"text-red-500 -mt-6",children:(i=s==null?void 0:s.errors)==null?void 0:i.document})]})]})};export{ca as default};
