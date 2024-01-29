import{j as i,r as N,m as Y,C as G,D as Ne,h as fe,S as je,Q as K,a as ye,q as we,f as Z}from"./index-6omHlbjT.js";import{P as qe}from"./index-El2RpPsZ.js";import{u as k,F as De}from"./formik.esm-skjjBd88.js";import{c as $,a as m,f as ve,e as Se}from"./index.esm-yXDdo4lZ.js";import{F as H}from"./FormProvider--m3L4Toi.js";import{T as q}from"./TextField-hcA4k9T5.js";import{S as W}from"./SelectField-xEGgdTbg.js";import"./index-c-iqoogl.js";import{T as U,S as Re}from"./react-select.esm-oOJsC918.js";import{O as ge}from"./OverLayLoader-AoDlHvyV.js";import"./module-FXe2d9PZ.js";function _e({data:e,setData:O,next:D,tradeApplyData:y}){var j,r,l,p,v,t;const o=k({enableReinitialize:!0,initialValues:e,validationSchema:$({licenseNo:m().required("Required"),firmType:m().required("Required"),ownershipType:m().required("Required")}),onSubmit:a=>{D(a)}});return i.jsx(H,{formik:o,children:i.jsxs(N.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),i.jsxs(N.CardBody,{children:[i.jsx("div",{children:i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsx(q,{label:"License No",name:"licenseNo",formik:o,disabled:!0}),i.jsxs(W,{label:"Firm Type",name:"firmType",formik:o,isRequiredLabel:!0,disabled:!0,children:[i.jsx("option",{value:"",children:"Firm Type"}),(l=(r=(j=y==null?void 0:y.data)==null?void 0:j.data)==null?void 0:r.firmTypeList)==null?void 0:l.map(a=>i.jsx("option",{value:a==null?void 0:a.id,children:a==null?void 0:a.firm_type},a==null?void 0:a.id))]}),i.jsxs(W,{disabled:!0,label:"Ownership Type",name:"ownershipType",formik:o,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Ownership Type"}),(t=(v=(p=y==null?void 0:y.data)==null?void 0:p.data)==null?void 0:v.ownershipTypeList)==null?void 0:t.map(a=>i.jsx("option",{value:a==null?void 0:a.id,children:a==null?void 0:a.ownership_type},a==null?void 0:a.id))]})]})}),i.jsx("div",{className:"flex justify-end mt-4",children:i.jsx(N.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})})]})]})})}function Fe({data:e,setData:O,next:D,prev:y,tradeApplyData:o,natureOfBusiness:j}){var t,a,x,R,_,F,B,C,n;const r=k({enableReinitialize:!0,initialValues:e,validationSchema:$({holdingNo:m().required("Required"),zoneId:m().required("Required"),wardNo:m().required("Required"),areaSqft:m().required("Required"),firmName:m().required("Required"),firmNameMarathi:m().required("Required"),firmEstdDate:m().required("Required"),businessAddress:m().required("Required"),landmark:m().required("Required"),pincode:m().required("Required"),premisesOwner:m().required("Required"),businessDescription:m().required("Required"),natureOfBusiness:ve().required("Required")}),onSubmit:s=>{D({...e,...s})}}),{values:l}=r,p=Y({api:G.tradeGetPropByHolding,config:{holdingNo:l.holdingNo},value:[l.holdingNo],options:{enabled:!1,onSuccess:s=>{var f,d,b,h,g,w,c,S,L,T,M,A,z,I,E,P,V;console.log("res",(f=s==null?void 0:s.data)==null?void 0:f.property),r.setFieldValue("zoneId",(b=(d=s==null?void 0:s.data)==null?void 0:d.property)==null?void 0:b.zone_mstr_id),r.setFieldValue("wardNo",(g=(h=s==null?void 0:s.data)==null?void 0:h.property)==null?void 0:g.ward_mstr_id),r.setFieldValue("areaSqft",(c=(w=s==null?void 0:s.data)==null?void 0:w.property)==null?void 0:c.area_of_plot),r.setFieldValue("businessAddress",(L=(S=s==null?void 0:s.data)==null?void 0:S.property)==null?void 0:L.prop_address),r.setFieldValue("landmark",(M=(T=s==null?void 0:s.data)==null?void 0:T.property)==null?void 0:M.landmark),r.setFieldValue("pincode",(z=(A=s==null?void 0:s.data)==null?void 0:A.property)==null?void 0:z.prop_pin_code),r.setFieldValue("premisesOwner",(E=(I=s==null?void 0:s.data)==null?void 0:I.property)==null?void 0:E.owner_name),r==null||r.setFieldValue("propDtlId",(V=(P=s==null?void 0:s.data)==null?void 0:P.property)==null?void 0:V.id)}}}),v=Y({api:(t=Ne)==null?void 0:t.getWardByZone,config:{zoneId:l.zoneId},value:[l.zoneId],options:{enabled:!!l.zoneId}});return i.jsxs(H,{formik:r,children:[p.isLoading&&i.jsx(ge,{}),i.jsxs(N.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Firm Details"})}),i.jsxs(N.CardBody,{children:[i.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4",children:[i.jsx(q,{label:"Holding No",name:"holdingNo",formik:r,isRequiredLabel:!0,onBlur:()=>p.refetch()}),i.jsxs(W,{disabled:e==null?void 0:e.zoneId,label:"Zone",name:"zoneId",formik:r,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Zone"}),(R=(x=(a=o==null?void 0:o.data)==null?void 0:a.data)==null?void 0:x.zone)==null?void 0:R.map(s=>i.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.zone_name},s==null?void 0:s.id))]}),i.jsxs(W,{disabled:r.values.wardNo,label:"Ward No",name:"wardNo",formik:r,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Ward No"}),(F=(_=v==null?void 0:v.data)==null?void 0:_.data)==null?void 0:F.map(s=>i.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.ward_name},s==null?void 0:s.id))]}),i.jsx(q,{type:"number",disabled:e==null?void 0:e.areaSqft,label:"Area in Sqft",name:"areaSqft",formik:r,isRequiredLabel:!0}),i.jsx(q,{disabled:e==null?void 0:e.firmName,label:"Firm Name",name:"firmName",formik:r,isRequiredLabel:!0}),i.jsx(U,{disabled:e==null?void 0:e.firmNameMarathi,onChangeText:s=>{r.setFieldValue("firmNameMarathi",s)},value:(B=r==null?void 0:r.values)==null?void 0:B.firmNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],label:"Firm Name (Marathi)",name:"firmNameMarathi",formik:r,isRequiredLabel:!0}),i.jsx(q,{disabled:e==null?void 0:e.firmEstdDate,type:"date",label:"Firm Estd. Date",name:"firmEstdDate",formik:r,isRequiredLabel:!0}),i.jsx(q,{disabled:e==null?void 0:e.businessAddress,label:"Business Address",name:"businessAddress",formik:r,isRequiredLabel:!0}),i.jsx(q,{disabled:e==null?void 0:e.landmark,label:"Landmark",name:"landmark",formik:r,isRequiredLabel:!0}),i.jsx(q,{type:"number",onInput:s=>s.target.value=Math.max(0,parseInt(s.target.value)).toString().slice(0,6),label:"Pincode",name:"pincode",formik:r,disabled:e==null?void 0:e.pincode}),i.jsx(q,{disabled:r.values.holdingNo,label:"Premises Owner",name:"premisesOwner",formik:r,isRequiredLabel:!0}),i.jsx(q,{disabled:e==null?void 0:e.businessDescription,label:"Business Description",name:"businessDescription",formik:r,isRequiredLabel:!0}),i.jsxs("div",{className:"col-span-2",children:[i.jsx(Re,{isDisabled:e==null?void 0:e.natureOfBusiness,value:(C=r==null?void 0:r.values)==null?void 0:C.natureOfBusiness,name:"natureOfBusiness",options:j,className:"basic-multi-select",classNamePrefix:"select",onChange:s=>{r.setFieldValue("natureOfBusiness",s)}}),i.jsx("p",{className:"text-sm text-red-500",children:(n=r==null?void 0:r.errors)==null?void 0:n.natureOfBusiness})]})]}),i.jsx("hr",{className:"my-4"}),i.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[i.jsx(N.Button,{color:"gray",size:"sm",onClick:()=>y(r.values),children:"Back"}),i.jsx(N.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})]})}function Be({data:e,setData:O,next:D,prev:y}){const o=k({enableReinitialize:!0,initialValues:e,validationSchema:$({ownerDetails:Se().of($().shape({businessOwnerName:m().required("Required"),guardianName:m().required("Required"),mobileNo:m().required("Required"),ownerNameMarathi:m().required("Required"),guardianNameMarathi:m().required("Required"),email:m().required("Required")}))}),onSubmit:j=>{D(j)}});return i.jsx(H,{formik:o,children:i.jsxs(N.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner"})}),i.jsxs(N.CardBody,{children:[i.jsx("div",{children:i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.jsx(De,{name:"ownerDetails",children:({push:j,remove:r})=>{var l,p;return i.jsxs(i.Fragment,{children:[(p=(l=o==null?void 0:o.values)==null?void 0:l.ownerDetails)==null?void 0:p.map((v,t)=>{var a,x,R,_,F,B,C,n,s,f,d,b,h,g,w,c;return i.jsxs("div",{children:[i.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-2",children:[i.jsx(q,{disabled:(x=(a=e==null?void 0:e.ownerDetails)==null?void 0:a[t])==null?void 0:x.businessOwnerName,isDynamic:!0,label:"Business Owner Name",name:"ownerDetails.".concat(t,".businessOwnerName"),formik:o,isRequiredLabel:!0}),i.jsx(q,{disabled:(_=(R=e==null?void 0:e.ownerDetails)==null?void 0:R[t])==null?void 0:_.guardianName,isDynamic:!0,label:"Guardian Name",name:"ownerDetails.".concat(t,".guardianName"),formik:o,isRequiredLabel:!0}),i.jsx(q,{type:"number",onInput:S=>{S.target.value=Math.max(0,parseInt(S.target.value)).toString().slice(0,10)},disabled:(B=(F=e==null?void 0:e.ownerDetails)==null?void 0:F[t])==null?void 0:B.mobileNo,isDynamic:!0,label:"Mobile No",name:"ownerDetails.".concat(t,".mobileNo"),formik:o,isRequiredLabel:!0}),i.jsx(U,{disabled:(n=(C=e==null?void 0:e.ownerDetails)==null?void 0:C[t])==null?void 0:n.ownerNameMarathi,onChangeText:S=>{o.setFieldValue("ownerDetails.".concat(t,".ownerNameMarathi"),S)},value:(d=(f=(s=o==null?void 0:o.values)==null?void 0:s.ownerDetails)==null?void 0:f[t])==null?void 0:d.ownerNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],isDynamic:!0,label:"Owner Name Marathi",name:"ownerDetails.".concat(t,".ownerNameMarathi"),formik:o,isRequiredLabel:!0}),i.jsx(U,{disabled:(h=(b=e==null?void 0:e.ownerDetails)==null?void 0:b[t])==null?void 0:h.guardianNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],isDynamic:!0,value:(c=(w=(g=o==null?void 0:o.values)==null?void 0:g.ownerDetails)==null?void 0:w[t])==null?void 0:c.guardianNameMarathi,onChangeText:S=>{o.setFieldValue("ownerDetails.".concat(t,".guardianNameMarathi"),S)},label:"Guardian Name Marathi",name:"ownerDetails.".concat(t,".guardianNameMarathi"),formik:o,isRequiredLabel:!0}),i.jsx(q,{isDynamic:!0,label:"Email",name:"ownerDetails.".concat(t,".email"),formik:o,isRequiredLabel:!0}),t>0&&i.jsx("div",{className:"flex justify-end items-end col-span-2",children:i.jsx(N.Button,{color:"red",size:"sm",onClick:()=>r(t),children:i.jsx("small",{children:"Remove"})})})]}),i.jsx("div",{className:"border-b border-gray-300 my-4"})]},t)}),(e==null?void 0:e.firmType)!=1&&i.jsx("div",{className:"flex justify-center items-end -mt-4",children:i.jsx(N.Button,{size:"sm",onClick:()=>j?j({businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}):null,children:"Add Owner"})})]})}})})}),i.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[i.jsx(N.Button,{color:"gray",size:"sm",onClick:()=>y(o.values),children:"Back"}),i.jsx(N.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})})}function Ce({data:e,setData:O,next:D,prev:y,licenseId:o}){var v,t,a,x,R,_,F,B,C;const{mutateAsync:j,isLoading:r}=fe({}),l=k({enableReinitialize:!0,initialValues:{licenseFor:e.licenseFor||"1",licenseCharge:e.licenseCharge||"",penalty:e.penalty||"",denialAmount:e.denialAmount||"",totalCharge:e.totalCharge||""},validationSchema:$().shape({licenseFor:m().required("License For is required"),licenseCharge:m().required("License Charge is required"),penalty:m().required("Penalty is required"),denialAmount:m().required("Denial Amount is required"),totalCharge:m().required("Total Charge is required")}),onSubmit:async(n,{setSubmitting:s})=>{var d,b;const f={initialBusinessDetails:{applyWith:e==null?void 0:e.applyWith,noticeNo:(e==null?void 0:e.noticeNo)||"",noticeDate:(e==null?void 0:e.noticeDate)||"",firmType:(e==null?void 0:e.firmType)||"",ownershipType:(e==null?void 0:e.ownershipType)||"",licenseNo:(e==null?void 0:e.licenseNo)||"",otherFirmType:(e==null?void 0:e.otherFirmType)||""},firmDetails:{wardNo:(e==null?void 0:e.wardNo)||"",holdingNo:(e==null?void 0:e.holdingNo)||"",areaSqft:(e==null?void 0:e.areaSqft)||"",firmName:(e==null?void 0:e.firmName)||"",firmNameMarathi:(e==null?void 0:e.firmNameMarathi)||"",firmEstdDate:(e==null?void 0:e.firmEstdDate)||"",businessAddress:(e==null?void 0:e.businessAddress)||"",landmark:(e==null?void 0:e.landmark)||"",pincode:(e==null?void 0:e.pincode)||"",premisesOwner:(e==null?void 0:e.premisesOwner)||"",businessDescription:(e==null?void 0:e.businessDescription)||"",natureOfBusiness:[{name:(d=e==null?void 0:e.natureOfBusiness)==null?void 0:d.label,id:(b=e==null?void 0:e.natureOfBusiness)==null?void 0:b.value}],tocStatus:0,propDtlId:(e==null?void 0:e.propDtlId)||"",zoneId:(e==null?void 0:e.zoneId)||""},ownerDetails:e==null?void 0:e.ownerDetails,licenseDetails:{licenseFor:n==null?void 0:n.licenseFor,licenseCharge:n==null?void 0:n.licenseCharge,penalty:n==null?void 0:n.penalty,denialAmount:n==null?void 0:n.denialAmount,totalCharge:n==null?void 0:n.totalCharge,paymentMode:"NA",bankName:"",chequeNo:"",chequeDate:"",branchName:""},applicationType:"RENEWAL",licenseId:o||""};je.fire({title:"Are you sure?",text:"You want to proceed with the payment of ₹ ".concat(n==null?void 0:n.totalCharge),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(h=>{h.isConfirmed&&p(n,f)}).catch(h=>{var g,w;K.error((w=(g=h==null?void 0:h.response)==null?void 0:g.data)==null?void 0:w.message)})}}),p=async(n,s)=>{var f,d,b,h,g,w;try{const c=await j({api:G.tradeAddNew,data:s});(f=c==null?void 0:c.data)!=null&&f.status?(K.success(((d=c==null?void 0:c.data)==null?void 0:d.message)||"Success"),D({...e,...n,message:(b=c==null?void 0:c.data)==null?void 0:b.message,applyLicenseId:(g=(h=c==null?void 0:c.data)==null?void 0:h.data)==null?void 0:g.applyLicenseId})):K.error(((w=c==null?void 0:c.data)==null?void 0:w.message)||"Something went wrong")}catch(c){K.error((c==null?void 0:c.message)||"Something went wrong")}};return Y({api:G.tradeGetDemand,config:{licenseFor:l.values.licenseFor,firmEstdDate:e==null?void 0:e.firmEstdDate,natureOfBusiness:[{id:(v=e.natureOfBusiness)==null?void 0:v.value,name:(t=e.natureOfBusiness)==null?void 0:t.label}],areaSqft:e==null?void 0:e.areaSqft,applicationType:"RENEWAL",tocStatus:0,noticeDate:""},value:[(a=l==null?void 0:l.values)==null?void 0:a.licenseFor],options:{enabled:!!((x=l==null?void 0:l.values)!=null&&x.licenseFor),onSuccess:n=>{var s,f,d,b,h,g;console.log("res",(s=n==null?void 0:n.data)==null?void 0:s.total_charge),l.setFieldValue("licenseCharge",(f=n==null?void 0:n.data)==null?void 0:f.rate),l.setFieldValue("penalty",(d=n==null?void 0:n.data)==null?void 0:d.penalty),l.setFieldValue("denialAmount",((b=n==null?void 0:n.data)==null?void 0:b.arear_amount)+((h=n==null?void 0:n.data)==null?void 0:h.notice_amount)||0),l.setFieldValue("totalCharge",((g=n==null?void 0:n.data)==null?void 0:g.total_charge)||0)}}}),i.jsxs(H,{formik:l,children:[r&&i.jsx(ge,{}),i.jsxs(N.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Payable Amount"})}),i.jsxs(N.CardBody,{children:[i.jsx("div",{children:i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.jsxs(W,{label:"License For",name:"licenseFor",formik:l,children:[i.jsx("option",{value:"",children:"Select License For"}),i.jsx("option",{value:"1",children:"1 Year"})]})})}),i.jsx("div",{className:"border-t border-gray-200 my-5"}),i.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4 ",children:[i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Charge Applied :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((R=l==null?void 0:l.values)==null?void 0:R.licenseCharge)||0]}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Penalty :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((_=l==null?void 0:l.values)==null?void 0:_.penalty)||0]}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Denial Amount :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((F=l==null?void 0:l.values)==null?void 0:F.denialAmount)||0]}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Total Charge :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((B=l==null?void 0:l.values)==null?void 0:B.totalCharge)||0]}),i.jsx("div",{className:"border-t border-gray-200 col-span-2 "}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Payable Amount :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((C=l==null?void 0:l.values)==null?void 0:C.totalCharge)||0]})]}),i.jsxs("div",{className:"flex justify-between mt-4",children:[i.jsx(N.Button,{color:"gray",size:"sm",onClick:()=>y(l.values),children:"Back"}),i.jsx(N.Button,{color:"blue",type:"submit",size:"sm",children:"Final Submit"})]})]})]})]})}function Oe({data:e}){const O=ye();return i.jsx(i.Fragment,{children:i.jsxs("div",{className:"border border-gray-200 shadow-md shadow-gray-300 justify-center p-4 sm:w-1/2 lg:w-1/3 w-full bg-white mx-auto flex flex-col h-screen top-0 left-0 right-0 bottom-0 fixed",children:[i.jsxs("div",{className:"relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 hover:bg-white opacity-0 transition duration-700 hover:opacity-10"}),i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","data-slot":"icon",className:"text-white w-24 h-24 mb-4 mt-12 bg-green-600 max-w-full h-auto mx-auto animate-wiggle rounded-full",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"})})]}),i.jsx("div",{className:"",children:i.jsxs("div",{className:"mb-2",children:[i.jsx("h3",{className:"text-2xl  text-center mb-6 text-[#40AA15] font-openSans font-semibold",children:"This Application Is Submitted."}),i.jsxs("h3",{className:"text-xl  text-center mb-2 text-gray-400 font-openSans font-semibold ",children:["Generated Application No: ",e==null?void 0:e.message]}),i.jsx("h3",{className:"text-sm  text-center mb-3 text-gray-400 font-openSans font-semibold ",children:"( Keep This application No. for future reference. You can always find your applications in)"})]})}),i.jsx("div",{className:"",children:i.jsx("div",{className:" text-center mt-8 mb-16",children:i.jsxs("button",{onClick:()=>O("/amc-app/trade/application-details/".concat(e==null?void 0:e.applyLicenseId),{replace:!0}),className:"bg-[#1A4D8C] text-sm px-8 py-2 text-white  rounded leading-5 shadow-lg",children:[" ","View Application"]})})})]})})}function Ke(){var R,_,F,B,C;const e=we(),O=(R=new URLSearchParams(e==null?void 0:e.search))==null?void 0:R.get("app-type"),D=(_=new URLSearchParams(e==null?void 0:e.search))==null?void 0:_.get("license-id"),[y,o]=Z.useState([]),[j,r]=Z.useState(1),[l,p]=Z.useState({applyWith:"",noticeNo:"",noticeDate:"",firmType:"",ownershipType:"",licenseNo:"",otherFirmType:"",holdingNo:"",zoneId:"",wardNo:"",areaSqft:"",firmName:"",firmNameMarathi:"",firmEstdDate:"",businessAddress:"",landmark:"",pincode:"",premisesOwner:"",businessDescription:"",natureOfBusiness:null,tocStatus:0,propDtlId:"",ownerDetails:[{businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}],licenseFor:"",licenseCharge:"",penalty:"",denialAmount:"",totalCharge:"",message:"",applyLicenseId:""}),v=n=>{console.log(n)},t=(n,s=!1)=>{if(p({...l,...n}),s){v(n);return}r(j+1)},a=n=>{p({...l,...n}),r(j-1)},x=Y({api:(F=G)==null?void 0:F.tradeApplyData,config:{licenseId:D,applicationType:O},value:[O,D],options:{enabled:!!D&&!!O,onSuccess:n=>{var s,f;p(d=>{var b,h,g,w,c,S,L,T,M,A,z,I,E,P,V,Q,J,X,ee,ie,ne,se,le,re,ae,oe,te,ce,ue,de,me,he,pe,xe,be;return{...d,ownerDetails:(h=(b=n==null?void 0:n.data)==null?void 0:b.ownerDtl)==null?void 0:h.map(u=>({businessOwnerName:u==null?void 0:u.owner_name,guardianName:u==null?void 0:u.guardian_name,mobileNo:u==null?void 0:u.mobile_no,ownerNameMarathi:u==null?void 0:u.owner_name_marathi,guardianNameMarathi:u==null?void 0:u.guardian_name_marathi,email:u==null?void 0:u.email_id,natureOfBusiness:u==null?void 0:u.nature_of_business})),firmType:(w=(g=n==null?void 0:n.data)==null?void 0:g.licenceDtl)==null?void 0:w.firm_type_id,ownershipType:(S=(c=n==null?void 0:n.data)==null?void 0:c.licenceDtl)==null?void 0:S.ownership_type_id,licenseNo:(T=(L=n==null?void 0:n.data)==null?void 0:L.licenceDtl)==null?void 0:T.license_no,zoneId:(A=(M=n==null?void 0:n.data)==null?void 0:M.licenceDtl)==null?void 0:A.zone_id,wardNo:(I=(z=n==null?void 0:n.data)==null?void 0:z.licenceDtl)==null?void 0:I.ward_id,areaSqft:(P=(E=n==null?void 0:n.data)==null?void 0:E.licenceDtl)==null?void 0:P.area_in_sqft,firmName:(Q=(V=n==null?void 0:n.data)==null?void 0:V.licenceDtl)==null?void 0:Q.firm_name,firmNameMarathi:(X=(J=n==null?void 0:n.data)==null?void 0:J.licenceDtl)==null?void 0:X.firm_name_marathi,firmEstdDate:(ie=(ee=n==null?void 0:n.data)==null?void 0:ee.licenceDtl)==null?void 0:ie.establishment_date,businessAddress:(se=(ne=n==null?void 0:n.data)==null?void 0:ne.licenceDtl)==null?void 0:se.address,landmark:(re=(le=n==null?void 0:n.data)==null?void 0:le.licenceDtl)==null?void 0:re.landmark,pincode:(oe=(ae=n==null?void 0:n.data)==null?void 0:ae.licenceDtl)==null?void 0:oe.pin_code,premisesOwner:(ce=(te=n==null?void 0:n.data)==null?void 0:te.licenceDtl)==null?void 0:ce.premises_owner_name,businessDescription:(de=(ue=n==null?void 0:n.data)==null?void 0:ue.licenceDtl)==null?void 0:de.firm_description,natureOfBusiness:(pe=(he=(me=n==null?void 0:n.data)==null?void 0:me.licenceDtl)==null?void 0:he.nature_of_bussiness)==null?void 0:pe.map(u=>({value:u==null?void 0:u.id,label:u==null?void 0:u.trade_item}))[0],tocStatus:(be=(xe=n==null?void 0:n.data)==null?void 0:xe.licenceDtl)==null?void 0:be.toc_status}}),o((f=(s=n==null?void 0:n.data)==null?void 0:s.natureOfBusiness)==null?void 0:f.map(d=>({value:d==null?void 0:d.id,label:"(".concat(d==null?void 0:d.trade_code,") - ").concat(d==null?void 0:d.trade_item)})))}}});return(B=x==null?void 0:x.data)!=null&&B.status?i.jsx(qe,{title:"Renewal Application",children:i.jsx("div",{className:"p-4",children:{1:i.jsx(_e,{data:l,setData:p,next:t,tradeApplyData:x}),2:i.jsx(Fe,{data:l,setData:p,next:t,prev:a,tradeApplyData:x,natureOfBusiness:y}),3:i.jsx(Be,{data:l,setData:p,next:t,prev:a}),4:i.jsx(Ce,{data:l,setData:p,next:t,prev:a,licenseId:D}),5:i.jsx(Oe,{data:l})}[j]})}):i.jsx("div",{className:"flex justify-center items-center h-96 ",children:i.jsx("div",{className:"text-base font-semibold text-center text-red-900",children:(C=x==null?void 0:x.data)==null?void 0:C.message})})}export{Ke as default};
