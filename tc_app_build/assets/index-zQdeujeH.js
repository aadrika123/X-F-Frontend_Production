import{j as i,b as M,t as A,o as Ne,d as fe,S as je,Q as T}from"./index-JPdk8MYx.js";import{e as ye,f as we,r as P}from"./router-vSHQYlWC.js";import{P as qe}from"./index-ZOEHJXjh.js";import{u as z,F as De}from"./formik.esm-feHG9Gj_.js";import{r as b}from"./tailwind-nPCoKmcy.js";import{c as L,a as t,d as ve,b as Se}from"./index.esm-YegZWto1.js";import{F as I}from"./FormProvider-hakOsLcM.js";import{T as y}from"./TextField-pTzzJrTl.js";import{S as O}from"./SelectField-HeY0cYhO.js";import{T as E}from"./TranslateField-ZxvkbHLJ.js";import{S as Re}from"./react-select.esm-hsvvIwP0.js";import{O as ge}from"./OverLayLoader-9mLsinDQ.js";import"./reactQuery-xwoMMF6K.js";import"./axios-lPgvryBG.js";import"./reactIcons-jqXmw8S_.js";import"./headlessui-kWR29u24.js";import"./customInputValidation-jhKsg103.js";import"./module-aZnFU-GR.js";function Be({data:e,setData:_,next:q,tradeApplyData:N}){var g,o,n,h,D,a;const u=z({enableReinitialize:!0,initialValues:e,validationSchema:L({licenseNo:t().required("Required"),firmType:t().required("Required"),ownershipType:t().required("Required")}),onSubmit:l=>{q(l)}});return i.jsx(I,{formik:u,children:i.jsxs(b.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),i.jsxs(b.CardBody,{children:[i.jsx("div",{children:i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsx(y,{label:"License No",name:"licenseNo",formik:u,disabled:!0}),i.jsxs(O,{label:"Firm Type",name:"firmType",formik:u,isRequiredLabel:!0,disabled:!0,children:[i.jsx("option",{value:"",children:"Firm Type"}),(n=(o=(g=N==null?void 0:N.data)==null?void 0:g.data)==null?void 0:o.firmTypeList)==null?void 0:n.map(l=>i.jsx("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.firm_type},l==null?void 0:l.id))]}),i.jsxs(O,{disabled:!0,label:"Ownership Type",name:"ownershipType",formik:u,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Ownership Type"}),(a=(D=(h=N==null?void 0:N.data)==null?void 0:h.data)==null?void 0:D.ownershipTypeList)==null?void 0:a.map(l=>i.jsx("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.ownership_type},l==null?void 0:l.id))]})]})}),i.jsx("div",{className:"flex justify-end mt-4",children:i.jsx(b.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})})]})]})})}function Ce({data:e,setData:_,next:q,prev:N,tradeApplyData:u,natureOfBusiness:g}){var a,l,x,v,S,R,B,C,s;const o=z({enableReinitialize:!0,initialValues:e,validationSchema:L({holdingNo:t().required("Required"),zoneId:t().required("Required"),wardNo:t().required("Required"),areaSqft:t().required("Required"),firmName:t().required("Required"),firmNameMarathi:t().required("Required"),firmEstdDate:t().required("Required"),businessAddress:t().required("Required"),landmark:t().required("Required"),pincode:t().required("Required"),premisesOwner:t().required("Required"),businessDescription:t().required("Required"),natureOfBusiness:ve().required("Required")}),onSubmit:r=>{q({...e,...r})}}),{values:n}=o,h=M({api:A.tradeGetPropByHolding,config:{holdingNo:n==null?void 0:n.holdingNo},value:[n==null?void 0:n.holdingNo],options:{enabled:!1}}),D=M({api:(a=Ne)==null?void 0:a.getWardByZone,config:{zoneId:n==null?void 0:n.zoneId},value:[n==null?void 0:n.zoneId],options:{enabled:!!(n!=null&&n.zoneId)}});return i.jsxs(I,{formik:o,children:[(h==null?void 0:h.isLoading)&&i.jsx(ge,{}),i.jsxs(b.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Firm Details"})}),i.jsxs(b.CardBody,{children:[i.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4",children:[i.jsx(y,{label:"Holding No",name:"holdingNo",formik:o,isRequiredLabel:!0,onBlur:()=>h.refetch()}),i.jsxs(O,{disabled:e==null?void 0:e.zoneId,label:"Zone",name:"zoneId",formik:o,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Zone"}),(v=(x=(l=u==null?void 0:u.data)==null?void 0:l.data)==null?void 0:x.zone)==null?void 0:v.map(r=>i.jsx("option",{value:r==null?void 0:r.id,children:r==null?void 0:r.zone_name},r==null?void 0:r.id))]}),i.jsxs(O,{disabled:(S=o.values)==null?void 0:S.wardNo,label:"Ward No",name:"wardNo",formik:o,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Ward No"}),(B=(R=D==null?void 0:D.data)==null?void 0:R.data)==null?void 0:B.map(r=>i.jsx("option",{value:r==null?void 0:r.id,children:r==null?void 0:r.ward_name},r==null?void 0:r.id))]}),i.jsx(y,{type:"number",disabled:e==null?void 0:e.areaSqft,label:"Area in Sqft",name:"areaSqft",formik:o,isRequiredLabel:!0}),i.jsx(y,{disabled:e==null?void 0:e.firmName,label:"Firm Name",name:"firmName",formik:o,isRequiredLabel:!0}),i.jsx(E,{disabled:e==null?void 0:e.firmNameMarathi,label:"Firm Name (Marathi)",name:"firmNameMarathi",formik:o,editData:e==null?void 0:e.firmNameMarathi}),i.jsx(y,{disabled:e==null?void 0:e.firmEstdDate,type:"date",label:"Firm Estd. Date",name:"firmEstdDate",formik:o,isRequiredLabel:!0}),i.jsx(y,{disabled:e==null?void 0:e.businessAddress,label:"Business Address",name:"businessAddress",formik:o,isRequiredLabel:!0}),i.jsx(y,{disabled:e==null?void 0:e.landmark,label:"Landmark",name:"landmark",formik:o,isRequiredLabel:!0}),i.jsx(y,{type:"number",onInput:r=>r.target.value=Math.max(0,parseInt(r.target.value)).toString().slice(0,6),label:"Pincode",name:"pincode",formik:o,disabled:e==null?void 0:e.pincode}),i.jsx(y,{label:"Premises Owner",name:"premisesOwner",formik:o,isRequiredLabel:!0}),i.jsx(y,{disabled:e==null?void 0:e.businessDescription,label:"Business Description",name:"businessDescription",formik:o,isRequiredLabel:!0}),i.jsxs("div",{className:"col-span-2",children:[i.jsx(Re,{value:(C=o==null?void 0:o.values)==null?void 0:C.natureOfBusiness,name:"natureOfBusiness",options:g,className:"basic-multi-select",classNamePrefix:"select",onChange:r=>{o.setFieldValue("natureOfBusiness",r)}}),i.jsx("p",{className:"text-sm text-red-500",children:(s=o==null?void 0:o.errors)==null?void 0:s.natureOfBusiness})]})]}),i.jsx("hr",{className:"my-4"}),i.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[i.jsx(b.Button,{color:"gray",size:"sm",onClick:()=>N(o.values),children:"Back"}),i.jsx(b.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})]})}function Fe({data:e,setData:_,next:q,prev:N}){const u=z({enableReinitialize:!0,initialValues:e,validationSchema:L({ownerDetails:Se().of(L().shape({businessOwnerName:t().required("Required"),guardianName:t().required("Required"),mobileNo:t().required("Required"),ownerNameMarathi:t().required("Required"),guardianNameMarathi:t().required("Required"),email:t().required("Required")}))}),onSubmit:g=>{q(g)}});return i.jsx(I,{formik:u,children:i.jsxs(b.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner"})}),i.jsxs(b.CardBody,{children:[i.jsx("div",{children:i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.jsx(De,{name:"ownerDetails",children:({push:g,remove:o})=>{var n,h;return i.jsxs(i.Fragment,{children:[(h=(n=u==null?void 0:u.values)==null?void 0:n.ownerDetails)==null?void 0:h.map((D,a)=>{var l,x,v,S,R,B,C,s,r,w,d,f,p,j;return i.jsxs("div",{children:[i.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-2",children:[i.jsx(y,{disabled:(x=(l=e==null?void 0:e.ownerDetails)==null?void 0:l[a])==null?void 0:x.businessOwnerName,isDynamic:!0,label:"Business Owner Name",name:"ownerDetails.".concat(a,".businessOwnerName"),formik:u,isRequiredLabel:!0}),i.jsx(y,{disabled:(S=(v=e==null?void 0:e.ownerDetails)==null?void 0:v[a])==null?void 0:S.guardianName,isDynamic:!0,label:"Guardian Name",name:"ownerDetails.".concat(a,".guardianName"),formik:u,isRequiredLabel:!0}),i.jsx(y,{type:"number",onInput:F=>{F.target.value=Math.max(0,parseInt(F.target.value)).toString().slice(0,10)},disabled:(B=(R=e==null?void 0:e.ownerDetails)==null?void 0:R[a])==null?void 0:B.mobileNo,isDynamic:!0,label:"Mobile No",name:"ownerDetails.".concat(a,".mobileNo"),formik:u,isRequiredLabel:!0}),i.jsx(E,{disabled:(s=(C=e==null?void 0:e.ownerDetails)==null?void 0:C[a])==null?void 0:s.ownerNameMarathi,isDynamic:!0,label:"Owner Name Marathi",name:"ownerDetails.".concat(a,".ownerNameMarathi"),formik:u,editData:(w=(r=e==null?void 0:e.ownerDetails)==null?void 0:r[a])==null?void 0:w.ownerNameMarathi}),i.jsx(E,{disabled:(f=(d=e==null?void 0:e.ownerDetails)==null?void 0:d[a])==null?void 0:f.guardianNameMarathi,isDynamic:!0,label:"Guardian Name Marathi",name:"ownerDetails.".concat(a,".guardianNameMarathi"),formik:u,editData:(j=(p=e==null?void 0:e.ownerDetails)==null?void 0:p[a])==null?void 0:j.guardianNameMarathi}),i.jsx(y,{isDynamic:!0,label:"Email",name:"ownerDetails.".concat(a,".email"),formik:u}),a>0&&i.jsx("div",{className:"flex justify-end items-end col-span-2",children:i.jsx(b.Button,{color:"red",size:"sm",onClick:()=>o(a),children:i.jsx("small",{children:"Remove"})})})]}),i.jsx("div",{className:"border-b border-gray-300 my-4"})]},a)}),(e==null?void 0:e.firmType)!=1&&i.jsx("div",{className:"flex justify-center items-end -mt-4",children:i.jsx(b.Button,{size:"sm",onClick:()=>g?g({businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}):null,children:"Add Owner"})})]})}})})}),i.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[i.jsx(b.Button,{color:"gray",size:"sm",onClick:()=>N(u.values),children:"Back"}),i.jsx(b.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})})}function _e({data:e,setData:_,next:q,prev:N,licenseId:u}){var D,a,l,x,v,S,R,B,C;const{mutateAsync:g,isLoading:o}=fe({}),n=z({enableReinitialize:!0,initialValues:{licenseFor:e.licenseFor||"1",licenseCharge:e.licenseCharge||"",penalty:e.penalty||"",denialAmount:e.denialAmount||"",totalCharge:e.totalCharge||""},validationSchema:L().shape({licenseFor:t().required("License For is required"),licenseCharge:t().required("License Charge is required"),penalty:t().required("Penalty is required"),denialAmount:t().required("Denial Amount is required"),totalCharge:t().required("Total Charge is required")}),onSubmit:async(s,{setSubmitting:r})=>{var d,f;const w={initialBusinessDetails:{applyWith:e==null?void 0:e.applyWith,noticeNo:(e==null?void 0:e.noticeNo)||"",noticeDate:(e==null?void 0:e.noticeDate)||"",firmType:(e==null?void 0:e.firmType)||"",ownershipType:(e==null?void 0:e.ownershipType)||"",licenseNo:(e==null?void 0:e.licenseNo)||"",otherFirmType:(e==null?void 0:e.otherFirmType)||""},firmDetails:{wardNo:(e==null?void 0:e.wardNo)||"",holdingNo:(e==null?void 0:e.holdingNo)||"",areaSqft:(e==null?void 0:e.areaSqft)||"",firmName:(e==null?void 0:e.firmName)||"",firmNameMarathi:(e==null?void 0:e.firmNameMarathi)||"",firmEstdDate:(e==null?void 0:e.firmEstdDate)||"",businessAddress:(e==null?void 0:e.businessAddress)||"",landmark:(e==null?void 0:e.landmark)||"",pincode:(e==null?void 0:e.pincode)||"",premisesOwner:(e==null?void 0:e.premisesOwner)||"",businessDescription:(e==null?void 0:e.businessDescription)||"",natureOfBusiness:[{name:(d=e==null?void 0:e.natureOfBusiness)==null?void 0:d.label,id:(f=e==null?void 0:e.natureOfBusiness)==null?void 0:f.value}],tocStatus:0,propDtlId:(e==null?void 0:e.propDtlId)||"",zoneId:(e==null?void 0:e.zoneId)||""},ownerDetails:e==null?void 0:e.ownerDetails,licenseDetails:{licenseFor:s==null?void 0:s.licenseFor,licenseCharge:s==null?void 0:s.licenseCharge,penalty:s==null?void 0:s.penalty,denialAmount:s==null?void 0:s.denialAmount,totalCharge:s==null?void 0:s.totalCharge,paymentMode:"NA",bankName:"",chequeNo:"",chequeDate:"",branchName:""},applicationType:"RENEWAL",licenseId:u||""};je.fire({title:"Are you sure?",text:"You want to proceed with the payment of ₹ ".concat(s==null?void 0:s.totalCharge),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(p=>{p.isConfirmed&&h(s,w)}).catch(p=>{var j,F;T.error((F=(j=p==null?void 0:p.response)==null?void 0:j.data)==null?void 0:F.message)})}}),h=async(s,r)=>{var w,d,f,p,j,F;try{const m=await g({api:A.tradeAddNew,data:r});(w=m==null?void 0:m.data)!=null&&w.status?(T.success(((d=m==null?void 0:m.data)==null?void 0:d.message)||"Success"),q({...e,...s,message:(f=m==null?void 0:m.data)==null?void 0:f.message,applyLicenseId:(j=(p=m==null?void 0:m.data)==null?void 0:p.data)==null?void 0:j.applyLicenseId})):T.error(((F=m==null?void 0:m.data)==null?void 0:F.message)||"Something went wrong")}catch(m){T.error((m==null?void 0:m.message)||"Something went wrong")}};return M({api:A.tradeGetDemand,config:{licenseFor:n.values.licenseFor,firmEstdDate:e==null?void 0:e.firmEstdDate,natureOfBusiness:[{id:(D=e.natureOfBusiness)==null?void 0:D.value,name:(a=e.natureOfBusiness)==null?void 0:a.label}],areaSqft:e==null?void 0:e.areaSqft,applicationType:"RENEWAL",tocStatus:0,noticeDate:""},value:[(l=n==null?void 0:n.values)==null?void 0:l.licenseFor],options:{enabled:!!((x=n==null?void 0:n.values)!=null&&x.licenseFor),onSuccess:s=>{var r,w,d,f,p,j;console.log("res",(r=s==null?void 0:s.data)==null?void 0:r.total_charge),n.setFieldValue("licenseCharge",(w=s==null?void 0:s.data)==null?void 0:w.rate),n.setFieldValue("penalty",(d=s==null?void 0:s.data)==null?void 0:d.penalty),n.setFieldValue("denialAmount",((f=s==null?void 0:s.data)==null?void 0:f.arear_amount)+((p=s==null?void 0:s.data)==null?void 0:p.notice_amount)||0),n.setFieldValue("totalCharge",((j=s==null?void 0:s.data)==null?void 0:j.total_charge)||0)}}}),i.jsxs(I,{formik:n,children:[o&&i.jsx(ge,{}),i.jsxs(b.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Payable Amount"})}),i.jsxs(b.CardBody,{children:[i.jsx("div",{children:i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.jsxs(O,{label:"License For",name:"licenseFor",formik:n,children:[i.jsx("option",{value:"",children:"Select License For"}),i.jsx("option",{value:"1",children:"1 Year"})]})})}),i.jsx("div",{className:"border-t border-gray-200 my-5"}),i.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4 ",children:[i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Charge Applied :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((v=n==null?void 0:n.values)==null?void 0:v.licenseCharge)||0]}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Penalty :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((S=n==null?void 0:n.values)==null?void 0:S.penalty)||0]}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Denial Amount :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((R=n==null?void 0:n.values)==null?void 0:R.denialAmount)||0]}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Total Charge :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((B=n==null?void 0:n.values)==null?void 0:B.totalCharge)||0]}),i.jsx("div",{className:"border-t border-gray-200 col-span-2 "}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Payable Amount :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((C=n==null?void 0:n.values)==null?void 0:C.totalCharge)||0]})]}),i.jsxs("div",{className:"flex justify-between mt-4",children:[i.jsx(b.Button,{color:"gray",size:"sm",onClick:()=>N(n.values),children:"Back"}),i.jsx(b.Button,{color:"blue",type:"submit",size:"sm",children:"Final Submit"})]})]})]})]})}function Le({data:e}){const _=ye();return i.jsx(i.Fragment,{children:i.jsxs("div",{className:"border border-gray-200 shadow-md shadow-gray-300 justify-center p-4 sm:w-1/2 lg:w-1/3 w-full bg-white mx-auto flex flex-col h-screen top-0 left-0 right-0 bottom-0 fixed",children:[i.jsxs("div",{className:"relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 hover:bg-white opacity-0 transition duration-700 hover:opacity-10"}),i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","data-slot":"icon",className:"text-white w-24 h-24 mb-4 mt-12 bg-green-600 max-w-full h-auto mx-auto animate-wiggle rounded-full",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"})})]}),i.jsx("div",{className:"",children:i.jsxs("div",{className:"mb-2",children:[i.jsx("h3",{className:"text-2xl  text-center mb-6 text-[#40AA15] font-openSans font-semibold",children:"This Application Is Submitted."}),i.jsxs("h3",{className:"text-xl  text-center mb-2 text-gray-400 font-openSans font-semibold ",children:["Generated Application No: ",e==null?void 0:e.message]}),i.jsx("h3",{className:"text-sm  text-center mb-3 text-gray-400 font-openSans font-semibold ",children:"( Keep This application No. for future reference. You can always find your applications in)"})]})}),i.jsx("div",{className:"",children:i.jsx("div",{className:" text-center mt-8 mb-16",children:i.jsxs("button",{onClick:()=>_("/amc-app/trade/application-details/".concat(e==null?void 0:e.applyLicenseId),{replace:!0}),className:"bg-[#1A4D8C] text-sm px-8 py-2 text-white  rounded leading-5 shadow-lg",children:[" ","View Application"]})})})]})})}function Qe(){var v,S,R,B,C;const e=we(),_=(v=new URLSearchParams(e==null?void 0:e.search))==null?void 0:v.get("app-type"),q=(S=new URLSearchParams(e==null?void 0:e.search))==null?void 0:S.get("license-id"),[N,u]=P.useState([]),[g,o]=P.useState(1),[n,h]=P.useState({applyWith:"",noticeNo:"",noticeDate:"",firmType:"",ownershipType:"",licenseNo:"",otherFirmType:"",holdingNo:"",zoneId:"",wardNo:"",areaSqft:"",firmName:"",firmNameMarathi:"",firmEstdDate:"",businessAddress:"",landmark:"",pincode:"",premisesOwner:"",businessDescription:"",natureOfBusiness:null,tocStatus:0,propDtlId:"",ownerDetails:[{businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}],licenseFor:"",licenseCharge:"",penalty:"",denialAmount:"",totalCharge:"",message:"",applyLicenseId:""}),D=s=>{console.log(s)},a=(s,r=!1)=>{if(h({...n,...s}),r){D(s);return}o(g+1)},l=s=>{h({...n,...s}),o(g-1)},x=M({api:(R=A)==null?void 0:R.tradeApplyData,config:{licenseId:q,applicationType:_},value:[_,q],options:{enabled:!!q&&!!_,onSuccess:s=>{var r,w;h(d=>{var f,p,j,F,m,$,V,k,W,G,Y,Z,U,H,K,Q,J,X,ee,ie,se,ne,re,le,oe,ae,ce,te,ue,de,me,he,xe,pe,be;return{...d,ownerDetails:(p=(f=s==null?void 0:s.data)==null?void 0:f.ownerDtl)==null?void 0:p.map(c=>({businessOwnerName:c==null?void 0:c.owner_name,guardianName:c==null?void 0:c.guardian_name,mobileNo:c==null?void 0:c.mobile_no,ownerNameMarathi:c==null?void 0:c.owner_name_marathi,guardianNameMarathi:c==null?void 0:c.guardian_name_marathi,email:c==null?void 0:c.email_id,natureOfBusiness:c==null?void 0:c.nature_of_business})),firmType:(F=(j=s==null?void 0:s.data)==null?void 0:j.licenceDtl)==null?void 0:F.firm_type_id,ownershipType:($=(m=s==null?void 0:s.data)==null?void 0:m.licenceDtl)==null?void 0:$.ownership_type_id,licenseNo:(k=(V=s==null?void 0:s.data)==null?void 0:V.licenceDtl)==null?void 0:k.license_no,zoneId:(G=(W=s==null?void 0:s.data)==null?void 0:W.licenceDtl)==null?void 0:G.zone_id,wardNo:(Z=(Y=s==null?void 0:s.data)==null?void 0:Y.licenceDtl)==null?void 0:Z.ward_id,areaSqft:(H=(U=s==null?void 0:s.data)==null?void 0:U.licenceDtl)==null?void 0:H.area_in_sqft,firmName:(Q=(K=s==null?void 0:s.data)==null?void 0:K.licenceDtl)==null?void 0:Q.firm_name,firmNameMarathi:(X=(J=s==null?void 0:s.data)==null?void 0:J.licenceDtl)==null?void 0:X.firm_name_marathi,firmEstdDate:(ie=(ee=s==null?void 0:s.data)==null?void 0:ee.licenceDtl)==null?void 0:ie.establishment_date,businessAddress:(ne=(se=s==null?void 0:s.data)==null?void 0:se.licenceDtl)==null?void 0:ne.address,landmark:(le=(re=s==null?void 0:s.data)==null?void 0:re.licenceDtl)==null?void 0:le.landmark,pincode:(ae=(oe=s==null?void 0:s.data)==null?void 0:oe.licenceDtl)==null?void 0:ae.pin_code,premisesOwner:(te=(ce=s==null?void 0:s.data)==null?void 0:ce.licenceDtl)==null?void 0:te.premises_owner_name,businessDescription:(de=(ue=s==null?void 0:s.data)==null?void 0:ue.licenceDtl)==null?void 0:de.firm_description,natureOfBusiness:(xe=(he=(me=s==null?void 0:s.data)==null?void 0:me.licenceDtl)==null?void 0:he.nature_of_bussiness)==null?void 0:xe.map(c=>({value:c==null?void 0:c.id,label:c==null?void 0:c.trade_item}))[0],tocStatus:(be=(pe=s==null?void 0:s.data)==null?void 0:pe.licenceDtl)==null?void 0:be.toc_status}}),u((w=(r=s==null?void 0:s.data)==null?void 0:r.natureOfBusiness)==null?void 0:w.map(d=>({value:d==null?void 0:d.id,label:"(".concat(d==null?void 0:d.trade_code,") - ").concat(d==null?void 0:d.trade_item)})))}}});return(B=x==null?void 0:x.data)!=null&&B.status?i.jsx(qe,{title:"Renewal Application",children:i.jsx("div",{className:"p-4",children:{1:i.jsx(Be,{data:n,setData:h,next:a,tradeApplyData:x}),2:i.jsx(Ce,{data:n,setData:h,next:a,prev:l,tradeApplyData:x,natureOfBusiness:N}),3:i.jsx(Fe,{data:n,setData:h,next:a,prev:l}),4:i.jsx(_e,{data:n,setData:h,next:a,prev:l,licenseId:q}),5:i.jsx(Le,{data:n})}[g]})}):i.jsx("div",{className:"flex justify-center items-center h-96 ",children:i.jsx("div",{className:"text-base font-semibold text-center text-red-900",children:(C=x==null?void 0:x.data)==null?void 0:C.message})})}export{Qe as default};
