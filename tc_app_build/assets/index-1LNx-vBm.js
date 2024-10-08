import{j as i,c as A,t as z,o as Ne,d as fe,S as je,Q as M}from"./index-dL_EjbSt.js";import{u as ye,f as we,r as P}from"./router-5yjtezO8.js";import{P as qe}from"./index-vQju75AN.js";import{u as I,F as De}from"./formik.esm-BnzrXcQN.js";import{r as p}from"./tailwind-6U-kYQAu.js";import{c as O,a as u,d as ve,b as Se}from"./index.esm-uHa2PMRf.js";import{F as E}from"./FormProvider-YtxP4ZK3.js";import{T as w}from"./TextField-dPnkdtDO.js";import{S as T}from"./SelectField-n1Rwev9N.js";import"./index-iFVn5AxS.js";import{T as $,S as Re}from"./react-select.esm-IHvF2BTI.js";import{O as ge}from"./OverLayLoader-KS6KwRK7.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./customInputValidation-jhKsg103.js";import"./module-fKnwz8NQ.js";function Ce({data:e,setData:_,next:q,tradeApplyData:f}){var N,l,n,m,D,t;const a=I({enableReinitialize:!0,initialValues:e,validationSchema:O({licenseNo:u().required("Required"),firmType:u().required("Required"),ownershipType:u().required("Required")}),onSubmit:o=>{q(o)}});return i.jsx(E,{formik:a,children:i.jsxs(p.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),i.jsxs(p.CardBody,{children:[i.jsx("div",{children:i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsx(w,{label:"License No",name:"licenseNo",formik:a,disabled:!0}),i.jsxs(T,{label:"Firm Type",name:"firmType",formik:a,isRequiredLabel:!0,disabled:!0,children:[i.jsx("option",{value:"",children:"Firm Type"}),(n=(l=(N=f==null?void 0:f.data)==null?void 0:N.data)==null?void 0:l.firmTypeList)==null?void 0:n.map(o=>i.jsx("option",{value:o==null?void 0:o.id,children:o==null?void 0:o.firm_type},o==null?void 0:o.id))]}),i.jsxs(T,{disabled:!0,label:"Ownership Type",name:"ownershipType",formik:a,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Ownership Type"}),(t=(D=(m=f==null?void 0:f.data)==null?void 0:m.data)==null?void 0:D.ownershipTypeList)==null?void 0:t.map(o=>i.jsx("option",{value:o==null?void 0:o.id,children:o==null?void 0:o.ownership_type},o==null?void 0:o.id))]})]})}),i.jsx("div",{className:"flex justify-end mt-4",children:i.jsx(p.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})})]})]})})}function Be({data:e,setData:_,next:q,prev:f,tradeApplyData:a,natureOfBusiness:N}){var t,o,h,v,S,R,C,B,s,b,g;const l=I({enableReinitialize:!0,initialValues:e,validationSchema:O({holdingNo:u().required("Required"),zoneId:u().required("Required"),wardNo:u().required("Required"),areaSqft:u().required("Required"),firmName:u().required("Required"),firmNameMarathi:u().required("Required"),firmEstdDate:u().required("Required"),businessAddress:u().required("Required"),landmark:u().required("Required"),pincode:u().required("Required"),premisesOwner:u().required("Required"),businessDescription:u().required("Required"),natureOfBusiness:ve().required("Required")}),onSubmit:r=>{q({...e,...r})}}),{values:n}=l,m=A({api:z.tradeGetPropByHolding,config:{holdingNo:n==null?void 0:n.holdingNo},value:[n==null?void 0:n.holdingNo],options:{enabled:!1}}),D=A({api:(t=Ne)==null?void 0:t.getWardByZone,config:{zoneId:n==null?void 0:n.zoneId},value:[n==null?void 0:n.zoneId],options:{enabled:!!(n!=null&&n.zoneId)}});return i.jsxs(E,{formik:l,children:[(m==null?void 0:m.isLoading)&&i.jsx(ge,{}),i.jsxs(p.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Firm Details"})}),i.jsxs(p.CardBody,{children:[i.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4",children:[i.jsx(w,{label:"Holding No",name:"holdingNo",formik:l,isRequiredLabel:!0,onBlur:()=>m.refetch()}),i.jsxs(T,{disabled:e==null?void 0:e.zoneId,label:"Zone",name:"zoneId",formik:l,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Zone"}),(v=(h=(o=a==null?void 0:a.data)==null?void 0:o.data)==null?void 0:h.zone)==null?void 0:v.map(r=>i.jsx("option",{value:r==null?void 0:r.id,children:r==null?void 0:r.zone_name},r==null?void 0:r.id))]}),i.jsxs(T,{disabled:(S=l.values)==null?void 0:S.wardNo,label:"Ward No",name:"wardNo",formik:l,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Ward No"}),(C=(R=D==null?void 0:D.data)==null?void 0:R.data)==null?void 0:C.map(r=>i.jsx("option",{value:r==null?void 0:r.id,children:r==null?void 0:r.ward_name},r==null?void 0:r.id))]}),i.jsx(w,{type:"number",disabled:e==null?void 0:e.areaSqft,label:"Area in Sqft",name:"areaSqft",formik:l,isRequiredLabel:!0}),i.jsx(w,{disabled:e==null?void 0:e.firmName,label:"Firm Name",name:"firmName",formik:l,isRequiredLabel:!0}),i.jsx($,{disabled:e==null?void 0:e.firmNameMarathi,onChangeText:r=>{l.setFieldValue("firmNameMarathi",r)},value:(B=l==null?void 0:l.values)==null?void 0:B.firmNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],label:"Firm Name (Marathi)",name:"firmNameMarathi",formik:l,isRequiredLabel:!0}),i.jsx(w,{disabled:e==null?void 0:e.firmEstdDate,type:"date",label:"Firm Estd. Date",name:"firmEstdDate",formik:l,isRequiredLabel:!0}),i.jsx(w,{disabled:e==null?void 0:e.businessAddress,label:"Business Address",name:"businessAddress",formik:l,isRequiredLabel:!0}),i.jsx(w,{disabled:e==null?void 0:e.landmark,label:"Landmark",name:"landmark",formik:l,isRequiredLabel:!0}),i.jsx(w,{type:"number",onInput:r=>r.target.value=Math.max(0,parseInt(r.target.value)).toString().slice(0,6),label:"Pincode",name:"pincode",formik:l,disabled:e==null?void 0:e.pincode}),i.jsx(w,{disabled:(s=l.values)==null?void 0:s.holdingNo,label:"Premises Owner",name:"premisesOwner",formik:l,isRequiredLabel:!0}),i.jsx(w,{disabled:e==null?void 0:e.businessDescription,label:"Business Description",name:"businessDescription",formik:l,isRequiredLabel:!0}),i.jsxs("div",{className:"col-span-2",children:[i.jsx(Re,{value:(b=l==null?void 0:l.values)==null?void 0:b.natureOfBusiness,name:"natureOfBusiness",options:N,className:"basic-multi-select",classNamePrefix:"select",onChange:r=>{l.setFieldValue("natureOfBusiness",r)}}),i.jsx("p",{className:"text-sm text-red-500",children:(g=l==null?void 0:l.errors)==null?void 0:g.natureOfBusiness})]})]}),i.jsx("hr",{className:"my-4"}),i.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[i.jsx(p.Button,{color:"gray",size:"sm",onClick:()=>f(l.values),children:"Back"}),i.jsx(p.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})]})}function Fe({data:e,setData:_,next:q,prev:f}){const a=I({enableReinitialize:!0,initialValues:e,validationSchema:O({ownerDetails:Se().of(O().shape({businessOwnerName:u().required("Required"),guardianName:u().required("Required"),mobileNo:u().required("Required"),ownerNameMarathi:u().required("Required"),guardianNameMarathi:u().required("Required"),email:u().required("Required")}))}),onSubmit:N=>{q(N)}});return i.jsx(E,{formik:a,children:i.jsxs(p.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner"})}),i.jsxs(p.CardBody,{children:[i.jsx("div",{children:i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.jsx(De,{name:"ownerDetails",children:({push:N,remove:l})=>{var n,m;return i.jsxs(i.Fragment,{children:[(m=(n=a==null?void 0:a.values)==null?void 0:n.ownerDetails)==null?void 0:m.map((D,t)=>{var o,h,v,S,R,C,B,s,b,g,r,j,x,y,F,d;return i.jsxs("div",{children:[i.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-2",children:[i.jsx(w,{disabled:(h=(o=e==null?void 0:e.ownerDetails)==null?void 0:o[t])==null?void 0:h.businessOwnerName,isDynamic:!0,label:"Business Owner Name",name:"ownerDetails.".concat(t,".businessOwnerName"),formik:a,isRequiredLabel:!0}),i.jsx(w,{disabled:(S=(v=e==null?void 0:e.ownerDetails)==null?void 0:v[t])==null?void 0:S.guardianName,isDynamic:!0,label:"Guardian Name",name:"ownerDetails.".concat(t,".guardianName"),formik:a,isRequiredLabel:!0}),i.jsx(w,{type:"number",onInput:L=>{L.target.value=Math.max(0,parseInt(L.target.value)).toString().slice(0,10)},disabled:(C=(R=e==null?void 0:e.ownerDetails)==null?void 0:R[t])==null?void 0:C.mobileNo,isDynamic:!0,label:"Mobile No",name:"ownerDetails.".concat(t,".mobileNo"),formik:a,isRequiredLabel:!0}),i.jsx($,{disabled:(s=(B=e==null?void 0:e.ownerDetails)==null?void 0:B[t])==null?void 0:s.ownerNameMarathi,onChangeText:L=>{a.setFieldValue("ownerDetails.".concat(t,".ownerNameMarathi"),L)},value:(r=(g=(b=a==null?void 0:a.values)==null?void 0:b.ownerDetails)==null?void 0:g[t])==null?void 0:r.ownerNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],isDynamic:!0,label:"Owner Name Marathi",name:"ownerDetails.".concat(t,".ownerNameMarathi"),formik:a,isRequiredLabel:!0}),i.jsx($,{disabled:(x=(j=e==null?void 0:e.ownerDetails)==null?void 0:j[t])==null?void 0:x.guardianNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],isDynamic:!0,value:(d=(F=(y=a==null?void 0:a.values)==null?void 0:y.ownerDetails)==null?void 0:F[t])==null?void 0:d.guardianNameMarathi,onChangeText:L=>{a.setFieldValue("ownerDetails.".concat(t,".guardianNameMarathi"),L)},label:"Guardian Name Marathi",name:"ownerDetails.".concat(t,".guardianNameMarathi"),formik:a,isRequiredLabel:!0}),i.jsx(w,{isDynamic:!0,label:"Email",name:"ownerDetails.".concat(t,".email"),formik:a,isRequiredLabel:!0}),t>0&&i.jsx("div",{className:"flex justify-end items-end col-span-2",children:i.jsx(p.Button,{color:"red",size:"sm",onClick:()=>l(t),children:i.jsx("small",{children:"Remove"})})})]}),i.jsx("div",{className:"border-b border-gray-300 my-4"})]},t)}),(e==null?void 0:e.firmType)!=1&&i.jsx("div",{className:"flex justify-center items-end -mt-4",children:i.jsx(p.Button,{size:"sm",onClick:()=>N?N({businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}):null,children:"Add Owner"})})]})}})})}),i.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[i.jsx(p.Button,{color:"gray",size:"sm",onClick:()=>f(a.values),children:"Back"}),i.jsx(p.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})})}function _e({data:e,setData:_,next:q,prev:f,licenseId:a}){var D,t,o,h,v,S,R,C,B;const{mutateAsync:N,isLoading:l}=fe({}),n=I({enableReinitialize:!0,initialValues:{licenseFor:e.licenseFor||"1",licenseCharge:e.licenseCharge||"",penalty:e.penalty||"",denialAmount:e.denialAmount||"",totalCharge:e.totalCharge||""},validationSchema:O().shape({licenseFor:u().required("License For is required"),licenseCharge:u().required("License Charge is required"),penalty:u().required("Penalty is required"),denialAmount:u().required("Denial Amount is required"),totalCharge:u().required("Total Charge is required")}),onSubmit:async(s,{setSubmitting:b})=>{var r,j;const g={initialBusinessDetails:{applyWith:e==null?void 0:e.applyWith,noticeNo:(e==null?void 0:e.noticeNo)||"",noticeDate:(e==null?void 0:e.noticeDate)||"",firmType:(e==null?void 0:e.firmType)||"",ownershipType:(e==null?void 0:e.ownershipType)||"",licenseNo:(e==null?void 0:e.licenseNo)||"",otherFirmType:(e==null?void 0:e.otherFirmType)||""},firmDetails:{wardNo:(e==null?void 0:e.wardNo)||"",holdingNo:(e==null?void 0:e.holdingNo)||"",areaSqft:(e==null?void 0:e.areaSqft)||"",firmName:(e==null?void 0:e.firmName)||"",firmNameMarathi:(e==null?void 0:e.firmNameMarathi)||"",firmEstdDate:(e==null?void 0:e.firmEstdDate)||"",businessAddress:(e==null?void 0:e.businessAddress)||"",landmark:(e==null?void 0:e.landmark)||"",pincode:(e==null?void 0:e.pincode)||"",premisesOwner:(e==null?void 0:e.premisesOwner)||"",businessDescription:(e==null?void 0:e.businessDescription)||"",natureOfBusiness:[{name:(r=e==null?void 0:e.natureOfBusiness)==null?void 0:r.label,id:(j=e==null?void 0:e.natureOfBusiness)==null?void 0:j.value}],tocStatus:0,propDtlId:(e==null?void 0:e.propDtlId)||"",zoneId:(e==null?void 0:e.zoneId)||""},ownerDetails:e==null?void 0:e.ownerDetails,licenseDetails:{licenseFor:s==null?void 0:s.licenseFor,licenseCharge:s==null?void 0:s.licenseCharge,penalty:s==null?void 0:s.penalty,denialAmount:s==null?void 0:s.denialAmount,totalCharge:s==null?void 0:s.totalCharge,paymentMode:"NA",bankName:"",chequeNo:"",chequeDate:"",branchName:""},applicationType:"RENEWAL",licenseId:a||""};je.fire({title:"Are you sure?",text:"You want to proceed with the payment of ₹ ".concat(s==null?void 0:s.totalCharge),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(x=>{x.isConfirmed&&m(s,g)}).catch(x=>{var y,F;M.error((F=(y=x==null?void 0:x.response)==null?void 0:y.data)==null?void 0:F.message)})}}),m=async(s,b)=>{var g,r,j,x,y,F;try{const d=await N({api:z.tradeAddNew,data:b});(g=d==null?void 0:d.data)!=null&&g.status?(M.success(((r=d==null?void 0:d.data)==null?void 0:r.message)||"Success"),q({...e,...s,message:(j=d==null?void 0:d.data)==null?void 0:j.message,applyLicenseId:(y=(x=d==null?void 0:d.data)==null?void 0:x.data)==null?void 0:y.applyLicenseId})):M.error(((F=d==null?void 0:d.data)==null?void 0:F.message)||"Something went wrong")}catch(d){M.error((d==null?void 0:d.message)||"Something went wrong")}};return A({api:z.tradeGetDemand,config:{licenseFor:n.values.licenseFor,firmEstdDate:e==null?void 0:e.firmEstdDate,natureOfBusiness:[{id:(D=e.natureOfBusiness)==null?void 0:D.value,name:(t=e.natureOfBusiness)==null?void 0:t.label}],areaSqft:e==null?void 0:e.areaSqft,applicationType:"RENEWAL",tocStatus:0,noticeDate:""},value:[(o=n==null?void 0:n.values)==null?void 0:o.licenseFor],options:{enabled:!!((h=n==null?void 0:n.values)!=null&&h.licenseFor),onSuccess:s=>{var b,g,r,j,x,y;console.log("res",(b=s==null?void 0:s.data)==null?void 0:b.total_charge),n.setFieldValue("licenseCharge",(g=s==null?void 0:s.data)==null?void 0:g.rate),n.setFieldValue("penalty",(r=s==null?void 0:s.data)==null?void 0:r.penalty),n.setFieldValue("denialAmount",((j=s==null?void 0:s.data)==null?void 0:j.arear_amount)+((x=s==null?void 0:s.data)==null?void 0:x.notice_amount)||0),n.setFieldValue("totalCharge",((y=s==null?void 0:s.data)==null?void 0:y.total_charge)||0)}}}),i.jsxs(E,{formik:n,children:[l&&i.jsx(ge,{}),i.jsxs(p.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Payable Amount"})}),i.jsxs(p.CardBody,{children:[i.jsx("div",{children:i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.jsxs(T,{label:"License For",name:"licenseFor",formik:n,children:[i.jsx("option",{value:"",children:"Select License For"}),i.jsx("option",{value:"1",children:"1 Year"})]})})}),i.jsx("div",{className:"border-t border-gray-200 my-5"}),i.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4 ",children:[i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Charge Applied :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((v=n==null?void 0:n.values)==null?void 0:v.licenseCharge)||0]}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Penalty :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((S=n==null?void 0:n.values)==null?void 0:S.penalty)||0]}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Denial Amount :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((R=n==null?void 0:n.values)==null?void 0:R.denialAmount)||0]}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Total Charge :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((C=n==null?void 0:n.values)==null?void 0:C.totalCharge)||0]}),i.jsx("div",{className:"border-t border-gray-200 col-span-2 "}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Payable Amount :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((B=n==null?void 0:n.values)==null?void 0:B.totalCharge)||0]})]}),i.jsxs("div",{className:"flex justify-between mt-4",children:[i.jsx(p.Button,{color:"gray",size:"sm",onClick:()=>f(n.values),children:"Back"}),i.jsx(p.Button,{color:"blue",type:"submit",size:"sm",children:"Final Submit"})]})]})]})]})}function Le({data:e}){const _=ye();return i.jsx(i.Fragment,{children:i.jsxs("div",{className:"border border-gray-200 shadow-md shadow-gray-300 justify-center p-4 sm:w-1/2 lg:w-1/3 w-full bg-white mx-auto flex flex-col h-screen top-0 left-0 right-0 bottom-0 fixed",children:[i.jsxs("div",{className:"relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 hover:bg-white opacity-0 transition duration-700 hover:opacity-10"}),i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","data-slot":"icon",className:"text-white w-24 h-24 mb-4 mt-12 bg-green-600 max-w-full h-auto mx-auto animate-wiggle rounded-full",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"})})]}),i.jsx("div",{className:"",children:i.jsxs("div",{className:"mb-2",children:[i.jsx("h3",{className:"text-2xl  text-center mb-6 text-[#40AA15] font-openSans font-semibold",children:"This Application Is Submitted."}),i.jsxs("h3",{className:"text-xl  text-center mb-2 text-gray-400 font-openSans font-semibold ",children:["Generated Application No: ",e==null?void 0:e.message]}),i.jsx("h3",{className:"text-sm  text-center mb-3 text-gray-400 font-openSans font-semibold ",children:"( Keep This application No. for future reference. You can always find your applications in)"})]})}),i.jsx("div",{className:"",children:i.jsx("div",{className:" text-center mt-8 mb-16",children:i.jsxs("button",{onClick:()=>_("/amc-app/trade/application-details/".concat(e==null?void 0:e.applyLicenseId),{replace:!0}),className:"bg-[#1A4D8C] text-sm px-8 py-2 text-white  rounded leading-5 shadow-lg",children:[" ","View Application"]})})})]})})}function Qe(){var v,S,R,C,B;const e=we(),_=(v=new URLSearchParams(e==null?void 0:e.search))==null?void 0:v.get("app-type"),q=(S=new URLSearchParams(e==null?void 0:e.search))==null?void 0:S.get("license-id"),[f,a]=P.useState([]),[N,l]=P.useState(1),[n,m]=P.useState({applyWith:"",noticeNo:"",noticeDate:"",firmType:"",ownershipType:"",licenseNo:"",otherFirmType:"",holdingNo:"",zoneId:"",wardNo:"",areaSqft:"",firmName:"",firmNameMarathi:"",firmEstdDate:"",businessAddress:"",landmark:"",pincode:"",premisesOwner:"",businessDescription:"",natureOfBusiness:null,tocStatus:0,propDtlId:"",ownerDetails:[{businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}],licenseFor:"",licenseCharge:"",penalty:"",denialAmount:"",totalCharge:"",message:"",applyLicenseId:""}),D=s=>{console.log(s)},t=(s,b=!1)=>{if(m({...n,...s}),b){D(s);return}l(N+1)},o=s=>{m({...n,...s}),l(N-1)},h=A({api:(R=z)==null?void 0:R.tradeApplyData,config:{licenseId:q,applicationType:_},value:[_,q],options:{enabled:!!q&&!!_,onSuccess:s=>{var b,g;m(r=>{var j,x,y,F,d,L,V,W,K,Y,G,k,Z,U,H,Q,J,X,ee,ie,se,ne,re,le,oe,ae,te,ce,ue,de,me,he,xe,pe,be;return{...r,ownerDetails:(x=(j=s==null?void 0:s.data)==null?void 0:j.ownerDtl)==null?void 0:x.map(c=>({businessOwnerName:c==null?void 0:c.owner_name,guardianName:c==null?void 0:c.guardian_name,mobileNo:c==null?void 0:c.mobile_no,ownerNameMarathi:c==null?void 0:c.owner_name_marathi,guardianNameMarathi:c==null?void 0:c.guardian_name_marathi,email:c==null?void 0:c.email_id,natureOfBusiness:c==null?void 0:c.nature_of_business})),firmType:(F=(y=s==null?void 0:s.data)==null?void 0:y.licenceDtl)==null?void 0:F.firm_type_id,ownershipType:(L=(d=s==null?void 0:s.data)==null?void 0:d.licenceDtl)==null?void 0:L.ownership_type_id,licenseNo:(W=(V=s==null?void 0:s.data)==null?void 0:V.licenceDtl)==null?void 0:W.license_no,zoneId:(Y=(K=s==null?void 0:s.data)==null?void 0:K.licenceDtl)==null?void 0:Y.zone_id,wardNo:(k=(G=s==null?void 0:s.data)==null?void 0:G.licenceDtl)==null?void 0:k.ward_id,areaSqft:(U=(Z=s==null?void 0:s.data)==null?void 0:Z.licenceDtl)==null?void 0:U.area_in_sqft,firmName:(Q=(H=s==null?void 0:s.data)==null?void 0:H.licenceDtl)==null?void 0:Q.firm_name,firmNameMarathi:(X=(J=s==null?void 0:s.data)==null?void 0:J.licenceDtl)==null?void 0:X.firm_name_marathi,firmEstdDate:(ie=(ee=s==null?void 0:s.data)==null?void 0:ee.licenceDtl)==null?void 0:ie.establishment_date,businessAddress:(ne=(se=s==null?void 0:s.data)==null?void 0:se.licenceDtl)==null?void 0:ne.address,landmark:(le=(re=s==null?void 0:s.data)==null?void 0:re.licenceDtl)==null?void 0:le.landmark,pincode:(ae=(oe=s==null?void 0:s.data)==null?void 0:oe.licenceDtl)==null?void 0:ae.pin_code,premisesOwner:(ce=(te=s==null?void 0:s.data)==null?void 0:te.licenceDtl)==null?void 0:ce.premises_owner_name,businessDescription:(de=(ue=s==null?void 0:s.data)==null?void 0:ue.licenceDtl)==null?void 0:de.firm_description,natureOfBusiness:(xe=(he=(me=s==null?void 0:s.data)==null?void 0:me.licenceDtl)==null?void 0:he.nature_of_bussiness)==null?void 0:xe.map(c=>({value:c==null?void 0:c.id,label:c==null?void 0:c.trade_item}))[0],tocStatus:(be=(pe=s==null?void 0:s.data)==null?void 0:pe.licenceDtl)==null?void 0:be.toc_status}}),a((g=(b=s==null?void 0:s.data)==null?void 0:b.natureOfBusiness)==null?void 0:g.map(r=>({value:r==null?void 0:r.id,label:"(".concat(r==null?void 0:r.trade_code,") - ").concat(r==null?void 0:r.trade_item)})))}}});return(C=h==null?void 0:h.data)!=null&&C.status?i.jsx(qe,{title:"Renewal Application",children:i.jsx("div",{className:"p-4",children:{1:i.jsx(Ce,{data:n,setData:m,next:t,tradeApplyData:h}),2:i.jsx(Be,{data:n,setData:m,next:t,prev:o,tradeApplyData:h,natureOfBusiness:f}),3:i.jsx(Fe,{data:n,setData:m,next:t,prev:o}),4:i.jsx(_e,{data:n,setData:m,next:t,prev:o,licenseId:q}),5:i.jsx(Le,{data:n})}[N]})}):i.jsx("div",{className:"flex justify-center items-center h-96 ",children:i.jsx("div",{className:"text-base font-semibold text-center text-red-900",children:(B=h==null?void 0:h.data)==null?void 0:B.message})})}export{Qe as default};
