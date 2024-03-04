import{j as e,a as T,t as M,m as X,b as k,S as ee,Q as A}from"./index-lMcsV8Au.js";import{e as h,u as ie,r as z}from"./react-HXRlOr-l.js";import{P as se}from"./index-6eOMPSAj.js";import{u as E,F as ne}from"./formik.esm-BYe_KACy.js";import{c as O,a as o,f as re,e as le}from"./index.esm-yBrOrWJe.js";import{F as I}from"./FormProvider-PhcMxUfb.js";import{S as L}from"./SelectField-z2HHeNAd.js";import"./index-mWJwE1Yp.js";import{T as N}from"./TextField-EJU0904U.js";import{T as _,S as ae}from"./react-select.esm-y5RgMnbH.js";import{O as U}from"./OverLayLoader-edqopWjZ.js";import"./module-R57d9XXC.js";function te({data:i,setData:B,next:v,tradeApplyData:p}){var d,s,c,x,g,t;const a=E({enableReinitialize:!0,initialValues:i,validationSchema:O({applyWith:o().required("Required"),firmType:o().required("Required"),ownershipType:o().required("Required")}),onSubmit:l=>{v(l)}});return e.jsx(I,{formik:a,children:e.jsxs(h.Card,{children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),e.jsxs(h.CardBody,{children:[e.jsx("div",{children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs(L,{label:"Apply With",name:"applyWith",formik:a,isRequiredLabel:!0,children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"2",children:"New Application"})]}),e.jsxs(L,{label:"Firm Type",name:"firmType",formik:a,isRequiredLabel:!0,children:[e.jsx("option",{value:"",children:"Select"}),(c=(s=(d=p==null?void 0:p.data)==null?void 0:d.data)==null?void 0:s.firmTypeList)==null?void 0:c.map(l=>e.jsx("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.firm_type},l==null?void 0:l.id))]}),e.jsxs(L,{label:"Ownership Type",name:"ownershipType",formik:a,isRequiredLabel:!0,children:[e.jsx("option",{value:"",children:"Select"}),(t=(g=(x=p==null?void 0:p.data)==null?void 0:x.data)==null?void 0:g.ownershipTypeList)==null?void 0:t.map(l=>e.jsx("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.ownership_type},l==null?void 0:l.id))]})]})}),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx(h.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})})]})]})})}function oe({data:i,setData:B,next:v,prev:p,tradeApplyData:a,natureOfBusiness:d}){var t,l,y,m,S,C,F,j,r,D;const s=E({enableReinitialize:!0,initialValues:i,validationSchema:O({holdingNo:o().min(10).max(16).label(),zoneId:o().required("Required"),wardNo:o().required("Required"),areaSqft:o().required("Required").min(1).max(10),firmName:o().required("Required").min(2).max(500),firmNameMarathi:o().required("Required"),firmEstdDate:o().required("Required"),businessAddress:o().required("Required").min(2).max(500),landmark:o().required("Required").min(2).max(200),pincode:o().required("Required").min(6).max(6),premisesOwner:o().required("Required").min(2).max(500),businessDescription:o().required("Required").min(2).max(500),natureOfBusiness:re().required("Required")}),onSubmit:n=>{v({...i,...n})}}),{values:c}=s,x=T({api:M.tradeGetPropByHolding,config:{holdingNo:c==null?void 0:c.holdingNo},value:[c==null?void 0:c.holdingNo],options:{enabled:!1,onSuccess:n=>{var f,w,q,b,R,u,P,V,$,W,G,K,Y,H,Z,Q,J;console.log("res",(f=n==null?void 0:n.data)==null?void 0:f.property),s.setFieldValue("zoneId",(q=(w=n==null?void 0:n.data)==null?void 0:w.property)==null?void 0:q.zone_mstr_id),s.setFieldValue("wardNo",(R=(b=n==null?void 0:n.data)==null?void 0:b.property)==null?void 0:R.ward_mstr_id),s.setFieldValue("areaSqft",(P=(u=n==null?void 0:n.data)==null?void 0:u.property)==null?void 0:P.area_of_plot),s.setFieldValue("businessAddress",($=(V=n==null?void 0:n.data)==null?void 0:V.property)==null?void 0:$.prop_address),s.setFieldValue("landmark",(G=(W=n==null?void 0:n.data)==null?void 0:W.property)==null?void 0:G.landmark),s.setFieldValue("pincode",(Y=(K=n==null?void 0:n.data)==null?void 0:K.property)==null?void 0:Y.prop_pin_code),s.setFieldValue("premisesOwner",(Z=(H=n==null?void 0:n.data)==null?void 0:H.property)==null?void 0:Z.owner_name),s==null||s.setFieldValue("propDtlId",(J=(Q=n==null?void 0:n.data)==null?void 0:Q.property)==null?void 0:J.id)}}}),g=T({api:(t=X)==null?void 0:t.getWardByZone,config:{zoneId:c==null?void 0:c.zoneId},value:[c==null?void 0:c.zoneId],options:{enabled:!!(c!=null&&c.zoneId)}});return e.jsxs(I,{formik:s,children:[x.isLoading&&e.jsx(U,{}),e.jsxs(h.Card,{children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Firm Details"})}),e.jsxs(h.CardBody,{children:[e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4",children:[e.jsx(N,{label:"Holding No",name:"holdingNo",formik:s,isRequiredLabel:!0,onBlur:()=>x.refetch()}),e.jsxs(L,{label:"Zone",name:"zoneId",formik:s,isRequiredLabel:!0,children:[e.jsx("option",{value:"",children:"Zone"}),(m=(y=(l=a==null?void 0:a.data)==null?void 0:l.data)==null?void 0:y.zone)==null?void 0:m.map(n=>e.jsx("option",{value:n==null?void 0:n.id,children:n==null?void 0:n.zone_name},n==null?void 0:n.id))]}),e.jsxs(L,{label:"Ward No",name:"wardNo",formik:s,isRequiredLabel:!0,children:[e.jsx("option",{value:"",children:"Ward No"}),(C=(S=g==null?void 0:g.data)==null?void 0:S.data)==null?void 0:C.map(n=>e.jsx("option",{value:n==null?void 0:n.id,children:n==null?void 0:n.ward_name},n==null?void 0:n.id))]}),e.jsx(N,{type:"number",label:"Area in Sqft",name:"areaSqft",formik:s,isRequiredLabel:!0}),e.jsx(N,{label:"Firm Name",name:"firmName",formik:s,isRequiredLabel:!0}),e.jsx(_,{onChangeText:n=>{s.setFieldValue("firmNameMarathi",n)},value:(F=s==null?void 0:s.values)==null?void 0:F.firmNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],label:"Firm Name (Marathi)",name:"firmNameMarathi",formik:s,isRequiredLabel:!0}),e.jsx(N,{type:"date",label:"Firm Estd. Date",name:"firmEstdDate",formik:s,isRequiredLabel:!0}),e.jsx(N,{label:"Business Address",name:"businessAddress",formik:s,isRequiredLabel:!0}),e.jsx(N,{label:"Landmark",name:"landmark",formik:s,isRequiredLabel:!0}),e.jsx(N,{label:"Pincode",name:"pincode",formik:s,type:"number",onInput:n=>{n.target.value=Math.max(0,parseInt(n.target.value)).toString().slice(0,6)}}),e.jsx(N,{disabled:(j=s.values)==null?void 0:j.holdingNo,label:"Premises Owner",name:"premisesOwner",formik:s,isRequiredLabel:!0}),e.jsx(N,{label:"Business Description",name:"businessDescription",formik:s,isRequiredLabel:!0}),e.jsxs("div",{className:"col-span-2",children:[e.jsx(ae,{value:(r=s==null?void 0:s.values)==null?void 0:r.natureOfBusiness,name:"natureOfBusiness",options:d,className:"basic-multi-select",classNamePrefix:"select",onChange:n=>{s.setFieldValue("natureOfBusiness",n)}}),e.jsx("p",{className:"text-sm text-red-500",children:(D=s==null?void 0:s.errors)==null?void 0:D.natureOfBusiness})]})]}),e.jsx("hr",{className:"my-4"}),e.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[e.jsx(h.Button,{color:"gray",size:"sm",onClick:()=>p(s==null?void 0:s.values),children:"Back"}),e.jsx(h.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})]})}function ce({data:i,setData:B,next:v,prev:p}){const a=E({enableReinitialize:!0,initialValues:i,validationSchema:O({ownerDetails:le().of(O().shape({businessOwnerName:o().required("Required").min(2).max(500).label("Owner Name"),guardianName:o().required("Required").min(2).max(500).label("Guardian Name"),mobileNo:o().required("Required").min(10).max(10).label("Mobile No"),ownerNameMarathi:o().required("Required").min(2).max(500).label("Owner Name Marathi"),guardianNameMarathi:o().required("Required").min(2).max(500).label("Guardian Name Marathi"),email:o().required("Required").min(2).max(500).label("Email")}))}),onSubmit:d=>{v(d)}});return e.jsx(I,{formik:a,children:e.jsxs(h.Card,{children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner"})}),e.jsxs(h.CardBody,{children:[e.jsx("div",{children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.jsx(ne,{name:"ownerDetails",children:({push:d,remove:s})=>{var c,x;return e.jsxs(e.Fragment,{children:[(x=(c=a==null?void 0:a.values)==null?void 0:c.ownerDetails)==null?void 0:x.map((g,t)=>{var l,y,m,S,C,F;return e.jsxs("div",{children:[e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-2",children:[e.jsx(N,{isDynamic:!0,label:"Owner Name",name:"ownerDetails.".concat(t,".businessOwnerName"),formik:a,isRequiredLabel:!0}),e.jsx(N,{isDynamic:!0,label:"Guardian Name",name:"ownerDetails.".concat(t,".guardianName"),formik:a,isRequiredLabel:!0}),e.jsx(N,{type:"number",onInput:j=>j.target.value=Math.max(0,parseInt(j.target.value)).toString().slice(0,10),isDynamic:!0,label:"Mobile No",name:"ownerDetails.".concat(t,".mobileNo"),formik:a,isRequiredLabel:!0}),e.jsx(_,{onChangeText:j=>{a.setFieldValue("ownerDetails.".concat(t,".ownerNameMarathi"),j)},value:(m=(y=(l=a==null?void 0:a.values)==null?void 0:l.ownerDetails)==null?void 0:y[t])==null?void 0:m.ownerNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],isDynamic:!0,label:"Owner Name Marathi",name:"ownerDetails.".concat(t,".ownerNameMarathi"),formik:a,isRequiredLabel:!0}),e.jsx(_,{insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],isDynamic:!0,value:(F=(C=(S=a==null?void 0:a.values)==null?void 0:S.ownerDetails)==null?void 0:C[t])==null?void 0:F.guardianNameMarathi,onChangeText:j=>{a.setFieldValue("ownerDetails.".concat(t,".guardianNameMarathi"),j)},label:"Guardian Name Marathi",name:"ownerDetails.".concat(t,".guardianNameMarathi"),formik:a,isRequiredLabel:!0}),e.jsx(N,{isDynamic:!0,type:"email",label:"Email",name:"ownerDetails.".concat(t,".email"),formik:a,isRequiredLabel:!0}),t>0&&e.jsx("div",{className:"flex justify-end items-end col-span-2",children:e.jsx(h.Button,{color:"red",size:"sm",onClick:()=>s(t),children:e.jsx("small",{children:"Remove"})})})]}),e.jsx("div",{className:"border-b border-gray-300 my-4"})]},t)}),(i==null?void 0:i.firmType)!=1&&e.jsx("div",{className:"flex justify-center items-end -mt-4",children:e.jsx(h.Button,{size:"sm",onClick:()=>d?d({businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}):null,children:"Add Owner"})})]})}})})}),e.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[e.jsx(h.Button,{color:"gray",size:"sm",onClick:()=>p(a.values),children:"Back"}),e.jsx(h.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})})}function ue({data:i,setData:B,next:v,prev:p}){var x,g,t,l,y,m,S,C,F,j;const{mutateAsync:a,isLoading:d}=k({}),s=E({enableReinitialize:!0,initialValues:{licenseFor:i.licenseFor||"",licenseCharge:i.licenseCharge||"",penalty:i.penalty||"",denialAmount:i.denialAmount||"",totalCharge:i.totalCharge||""},validationSchema:O().shape({licenseFor:o().required("License For is required"),licenseCharge:o().required("License Charge is required"),penalty:o().required("Penalty is required"),denialAmount:o().required("Denial Amount is required"),totalCharge:o().required("Total Charge is required")}),onSubmit:async(r,{setSubmitting:D})=>{var f,w,q;const n={initialBusinessDetails:{applyWith:i==null?void 0:i.applyWith,noticeNo:(i==null?void 0:i.noticeNo)||"",noticeDate:(i==null?void 0:i.noticeDate)||"",firmType:(i==null?void 0:i.firmType)||"",ownershipType:(i==null?void 0:i.ownershipType)||"",licenseNo:(i==null?void 0:i.licenseNo)||"",otherFirmType:(i==null?void 0:i.otherFirmType)||""},firmDetails:{wardNo:(i==null?void 0:i.wardNo)||"",holdingNo:(i==null?void 0:i.holdingNo)||"",areaSqft:(i==null?void 0:i.areaSqft)||"",firmName:(i==null?void 0:i.firmName)||"",firmNameMarathi:(i==null?void 0:i.firmNameMarathi)||"",firmEstdDate:(i==null?void 0:i.firmEstdDate)||"",businessAddress:(i==null?void 0:i.businessAddress)||"",landmark:(i==null?void 0:i.landmark)||"",pincode:(i==null?void 0:i.pincode)||"",premisesOwner:(i==null?void 0:i.premisesOwner)||"",businessDescription:(i==null?void 0:i.businessDescription)||"",natureOfBusiness:[{name:(f=i==null?void 0:i.natureOfBusiness)==null?void 0:f.label,id:(w=i==null?void 0:i.natureOfBusiness)==null?void 0:w.value}],tocStatus:0,propDtlId:(i==null?void 0:i.propDtlId)||"",zoneId:(i==null?void 0:i.zoneId)||""},ownerDetails:i==null?void 0:i.ownerDetails,licenseDetails:{licenseFor:r==null?void 0:r.licenseFor,licenseCharge:r==null?void 0:r.licenseCharge,penalty:r==null?void 0:r.penalty,denialAmount:r==null?void 0:r.denialAmount,totalCharge:r==null?void 0:r.totalCharge,paymentMode:"NA",bankName:"",chequeNo:"",chequeDate:"",branchName:""},applicationType:"NEWLICENSE"};ee.fire({title:"Are you sure?",text:"You want to proceed with the payment of ₹ ".concat((q=s==null?void 0:s.values)==null?void 0:q.totalCharge),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(b=>{b.isConfirmed&&c(r,n)}).catch(b=>{var R,u;A.error((u=(R=b==null?void 0:b.response)==null?void 0:R.data)==null?void 0:u.message)})}}),c=async(r,D)=>{var n,f,w,q,b,R;try{const u=await a({api:M.tradeAddNew,data:D});(n=u==null?void 0:u.data)!=null&&n.status?(A.success(((f=u==null?void 0:u.data)==null?void 0:f.message)||"Application Submitted"),v({...i,...r,message:(w=u==null?void 0:u.data)==null?void 0:w.message,applyLicenseId:(b=(q=u==null?void 0:u.data)==null?void 0:q.data)==null?void 0:b.applyLicenseId})):A.error(((R=u==null?void 0:u.data)==null?void 0:R.message)||"Something went wrong")}catch(u){A.error((u==null?void 0:u.message)||"Something went wrong")}};return T({api:M.tradeGetDemand,config:{licenseFor:(x=s==null?void 0:s.values)==null?void 0:x.licenseFor,firmEstdDate:i==null?void 0:i.firmEstdDate,natureOfBusiness:[{id:(g=i==null?void 0:i.natureOfBusiness)==null?void 0:g.value,name:(t=i==null?void 0:i.natureOfBusiness)==null?void 0:t.label}],areaSqft:i==null?void 0:i.areaSqft,applicationType:"NEWLICENSE",tocStatus:0,noticeDate:""},value:[(l=s==null?void 0:s.values)==null?void 0:l.licenseFor],options:{enabled:!!((y=s==null?void 0:s.values)!=null&&y.licenseFor),onSuccess:r=>{var D,n,f,w,q,b;console.log("res",(D=r==null?void 0:r.data)==null?void 0:D.total_charge),s.setFieldValue("licenseCharge",(n=r==null?void 0:r.data)==null?void 0:n.rate),s.setFieldValue("penalty",(f=r==null?void 0:r.data)==null?void 0:f.penalty),s.setFieldValue("denialAmount",((w=r==null?void 0:r.data)==null?void 0:w.arear_amount)+((q=r==null?void 0:r.data)==null?void 0:q.notice_amount)||0),s.setFieldValue("totalCharge",((b=r==null?void 0:r.data)==null?void 0:b.total_charge)||0)}}}),e.jsxs(I,{formik:s,children:[d&&e.jsx(U,{}),e.jsxs(h.Card,{children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Payable Amount"})}),e.jsxs(h.CardBody,{children:[e.jsx("div",{children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:e.jsxs(L,{label:"License For",name:"licenseFor",formik:s,children:[e.jsx("option",{value:"",children:"Select License For"}),e.jsx("option",{value:"1",children:"1 Year"})]})})}),e.jsx("div",{className:"border-t border-gray-200 my-5"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4 ",children:[e.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Charge Applied :"}),e.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((m=s==null?void 0:s.values)==null?void 0:m.licenseCharge)||0]}),e.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Penalty :"}),e.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((S=s==null?void 0:s.values)==null?void 0:S.penalty)||0]}),e.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Denial Amount :"}),e.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((C=s==null?void 0:s.values)==null?void 0:C.denialAmount)||0]}),e.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Total Charge :"}),e.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((F=s==null?void 0:s.values)==null?void 0:F.totalCharge)||0]}),e.jsx("div",{className:"border-t border-gray-200 col-span-2 "}),e.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Payable Amount :"}),e.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",((j=s==null?void 0:s.values)==null?void 0:j.totalCharge)||0]})]}),e.jsxs("div",{className:"flex justify-between mt-4",children:[e.jsx(h.Button,{color:"gray",size:"sm",onClick:()=>p(s.values),children:"Back"}),e.jsx(h.Button,{color:"blue",type:"submit",size:"sm",children:"Final Submit"})]})]})]})]})}function de({data:i}){const B=ie();return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"border border-gray-200 shadow-md shadow-gray-300 justify-center p-4 sm:w-1/2 lg:w-1/3 w-full bg-white mx-auto flex flex-col h-screen top-0 left-0 right-0 bottom-0 fixed",children:[e.jsxs("div",{className:"relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 hover:bg-white opacity-0 transition duration-700 hover:opacity-10"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","data-slot":"icon",className:"text-white w-24 h-24 mb-4 mt-12 bg-green-600 max-w-full h-auto mx-auto animate-wiggle rounded-full",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"})})]}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"mb-2",children:[e.jsx("h3",{className:"text-2xl  text-center mb-6 text-[#40AA15] font-openSans font-semibold",children:"This Application Is Submitted."}),e.jsxs("h3",{className:"text-xl  text-center mb-2 text-gray-400 font-openSans font-semibold ",children:["Generated Application No: ",i==null?void 0:i.message]}),e.jsx("h3",{className:"text-sm  text-center mb-3 text-gray-400 font-openSans font-semibold ",children:"( Keep This application No. for future reference. You can always find your applications in)"})]})}),e.jsx("div",{className:"",children:e.jsx("div",{className:" text-center mt-8 mb-16",children:e.jsxs("button",{onClick:()=>B("/amc-app/trade/application-details/".concat(i==null?void 0:i.applyLicenseId),{replace:!0}),className:"bg-[#1A4D8C] text-sm px-8 py-2 text-white  rounded leading-5 shadow-lg",children:[" ","View Application"]})})})]})})}function ve(){const[i,B]=z.useState([]),v=T({api:M.tradeApplyData,config:{applicationType:"NEWLICENSE"},options:{enabled:!0,onSuccess:t=>{var l,y;B((y=(l=t==null?void 0:t.data)==null?void 0:l.natureOfBusiness)==null?void 0:y.map(m=>({value:m==null?void 0:m.id,label:"(".concat(m==null?void 0:m.trade_code,") - ").concat(m==null?void 0:m.trade_item)})))}}}),[p,a]=z.useState(1),[d,s]=z.useState({applyWith:"",noticeNo:"",noticeDate:"",firmType:"",ownershipType:"",licenseNo:"",otherFirmType:"",holdingNo:"",zoneId:"",wardNo:"",areaSqft:"",firmName:"",firmNameMarathi:"",firmEstdDate:"",businessAddress:"",landmark:"",pincode:"",premisesOwner:"",businessDescription:"",natureOfBusiness:null,tocStatus:0,propDtlId:"",ownerDetails:[{businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}],licenseFor:"",licenseCharge:"",penalty:"",denialAmount:"",totalCharge:"",message:"",applyLicenseId:""}),c=t=>{console.log(t)},x=(t,l=!1)=>{if(s({...d,...t}),l){c(t);return}a(p+1)},g=t=>{s({...d,...t}),a(p-1)};return e.jsx(se,{title:"New Application Trade",children:e.jsx("div",{className:"p-4",children:{1:e.jsx(te,{data:d,setData:s,next:x,tradeApplyData:v}),2:e.jsx(oe,{data:d,setData:s,next:x,prev:g,tradeApplyData:v,natureOfBusiness:i}),3:e.jsx(ce,{data:d,setData:s,next:x,prev:g}),4:e.jsx(ue,{data:d,setData:s,next:x,prev:g}),5:e.jsx(de,{data:d})}[p]})})}export{ve as default};
