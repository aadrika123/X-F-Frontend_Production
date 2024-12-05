import{j as i,c as F,t as L,o as je,d as we,S as ye,Q as T}from"./index-r6pkVfbe.js";import{u as qe,f as De,r as I}from"./router-5yjtezO8.js";import{P as Se}from"./index-XdDZ0AxP.js";import{u as z,F as Re}from"./formik.esm-BnzrXcQN.js";import{r as g}from"./tailwind-6U-kYQAu.js";import{c as M,a as d,d as Be,b as ve}from"./index.esm-uHa2PMRf.js";import{F as A}from"./FormProvider-kGPBuDhT.js";import{T as w}from"./TextField-WLFSaEKU.js";import{S as C}from"./SelectField-D-hcXiLT.js";import{T as ge}from"./TranslateField-BH3bQnqu.js";import{S as _e}from"./react-select.esm-K_e8blz3.js";import{O as Ne}from"./OverLayLoader-ZQFsfgoF.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./customInputValidation-jhKsg103.js";import"./module-BKxwfC_F.js";function Oe({data:e,setData:R,next:D,tradeApplyData:y}){var j,o,r,h,S,u;const m=z({enableReinitialize:!0,initialValues:e,validationSchema:M({licenseNo:d().required("Required"),firmType:d().required("Required"),ownershipType:d().required("Required")}),onSubmit:c=>{D(c)}});return i.jsx(A,{formik:m,children:i.jsxs(g.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),i.jsxs(g.CardBody,{children:[i.jsx("div",{children:i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsx(w,{label:"Application Type",name:"applicationType",formik:m}),i.jsx(w,{label:"License No",name:"licenseNo",formik:m,disabled:!0}),i.jsxs(C,{label:"Firm Type",name:"firmType",formik:m,isRequiredLabel:!0,disabled:!0,children:[i.jsx("option",{value:"",children:"Firm Type"}),(r=(o=(j=y==null?void 0:y.data)==null?void 0:j.data)==null?void 0:o.firmTypeList)==null?void 0:r.map(c=>i.jsx("option",{value:c==null?void 0:c.id,children:c==null?void 0:c.firm_type},c==null?void 0:c.id))]}),i.jsxs(C,{disabled:!0,label:"Ownership Type",name:"ownershipType",formik:m,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Ownership Type"}),(u=(S=(h=y==null?void 0:y.data)==null?void 0:h.data)==null?void 0:S.ownershipTypeList)==null?void 0:u.map(c=>i.jsx("option",{value:c==null?void 0:c.id,children:c==null?void 0:c.ownership_type},c==null?void 0:c.id))]})]})}),i.jsx("div",{className:"flex justify-end mt-4",children:i.jsx(g.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})})]})]})})}function Te({data:e,setData:R,next:D,prev:y,tradeApplyData:m,natureOfBusiness:j}){var u,c,b,s,q,N,x,f,n,p;const o=z({enableReinitialize:!0,initialValues:e,validationSchema:M({holdingNo:d().required("Required"),zoneId:d().required("Required"),wardNo:d().required("Required"),areaSqft:d().required("Required"),firmName:d().required("Required"),firmNameMarathi:d().required("Required"),firmEstdDate:d().required("Required"),businessAddress:d().required("Required"),landmark:d().required("Required"),pincode:d().required("Required"),premisesOwner:d().required("Required"),businessDescription:d().required("Required"),natureOfBusiness:Be().required("Required")}),onSubmit:l=>{D({...e,...l})}}),{values:r}=o,h=F({api:L.tradeGetPropByHolding,config:{holdingNo:r==null?void 0:r.holdingNo},value:[r==null?void 0:r.holdingNo],options:{enabled:!1}}),S=F({api:(u=je)==null?void 0:u.getWardByZone,config:{zoneId:r==null?void 0:r.zoneId},value:[r==null?void 0:r.zoneId],options:{enabled:!!(r!=null&&r.zoneId)}});return i.jsxs(A,{formik:o,children:[h.isLoading&&i.jsx(Ne,{}),i.jsxs(g.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Firm Details"})}),i.jsxs(g.CardBody,{children:[i.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4",children:[i.jsx(w,{label:"Holding No",name:"holdingNo",formik:o,isRequiredLabel:!0,onBlur:()=>h.refetch()}),i.jsxs(C,{disabled:e==null?void 0:e.zoneId,label:"Zone",name:"zoneId",formik:o,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Zone"}),(s=(b=(c=m==null?void 0:m.data)==null?void 0:c.data)==null?void 0:b.zone)==null?void 0:s.map(l=>i.jsx("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.zone_name},l==null?void 0:l.id))]}),i.jsxs(C,{disabled:(q=o.values)==null?void 0:q.wardNo,label:"Ward No",name:"wardNo",formik:o,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Ward No"}),(x=(N=S==null?void 0:S.data)==null?void 0:N.data)==null?void 0:x.map(l=>i.jsx("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.ward_name},l==null?void 0:l.id))]}),i.jsx(w,{type:"number",disabled:e==null?void 0:e.areaSqft,label:"Area in Sqft",name:"areaSqft",formik:o,isRequiredLabel:!0}),i.jsx(w,{disabled:e==null?void 0:e.firmName,label:"Firm Name",name:"firmName",formik:o,isRequiredLabel:!0}),i.jsx(TranslateField,{disabled:e==null?void 0:e.firmNameMarathi,label:"Firm Name (Marathi)",name:"firmNameMarathi",formik:o,editData:e==null?void 0:e.firmNameMarathi}),i.jsx(w,{disabled:e==null?void 0:e.firmEstdDate,type:"date",label:"Firm Estd. Date",name:"firmEstdDate",formik:o,isRequiredLabel:!0}),i.jsx(w,{disabled:e==null?void 0:e.businessAddress,label:"Business Address",name:"businessAddress",formik:o,isRequiredLabel:!0}),i.jsx(w,{disabled:e==null?void 0:e.landmark,label:"Landmark",name:"landmark",formik:o,isRequiredLabel:!0}),i.jsx(w,{type:"number",onInput:l=>l.target.value=Math.max(0,parseInt(l.target.value)).toString().slice(0,6),label:"Pincode",name:"pincode",formik:o,disabled:e==null?void 0:e.pincode}),i.jsx(w,{disabled:(f=o.values)==null?void 0:f.holdingNo,label:"Premises Owner",name:"premisesOwner",formik:o,isRequiredLabel:!0}),i.jsx(w,{disabled:e==null?void 0:e.businessDescription,label:"Business Description",name:"businessDescription",formik:o,isRequiredLabel:!0}),i.jsxs("div",{className:"col-span-2",children:[i.jsx(_e,{isDisabled:e==null?void 0:e.natureOfBusiness,value:(n=o==null?void 0:o.values)==null?void 0:n.natureOfBusiness,name:"natureOfBusiness",options:j,className:"basic-multi-select",classNamePrefix:"select",onChange:l=>{o.setFieldValue("natureOfBusiness",l)}}),i.jsx("p",{className:"text-sm text-red-500",children:(p=o==null?void 0:o.errors)==null?void 0:p.natureOfBusiness})]})]}),i.jsx("hr",{className:"my-4"}),i.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[i.jsx(g.Button,{color:"gray",size:"sm",onClick:()=>y(o.values),children:"Back"}),i.jsx(g.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})]})}function Fe({data:e,setData:R,next:D,prev:y}){const m=z({enableReinitialize:!0,initialValues:e,validationSchema:M({ownerDetails:ve().of(M().shape({businessOwnerName:d().required("Required"),guardianName:d().required("Required"),mobileNo:d().required("Required"),ownerNameMarathi:d().required("Required"),guardianNameMarathi:d().required("Required"),email:d().required("Required")}))}),onSubmit:j=>{D(j)}});return i.jsx(A,{formik:m,children:i.jsxs(g.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner"})}),i.jsxs(g.CardBody,{children:[i.jsx("div",{children:i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.jsx(Re,{name:"ownerDetails",children:({push:j,remove:o})=>{var r,h;return i.jsxs(i.Fragment,{children:[(h=(r=m==null?void 0:m.values)==null?void 0:r.ownerDetails)==null?void 0:h.map((S,u)=>{var c,b,s,q,N,x,f,n,p,l,t,B,v,_;return i.jsxs("div",{children:[i.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-2",children:[i.jsx(w,{disabled:(b=(c=e==null?void 0:e.ownerDetails)==null?void 0:c[u])==null?void 0:b.businessOwnerName,isDynamic:!0,label:"Business Owner Name",name:"ownerDetails.".concat(u,".businessOwnerName"),formik:m,isRequiredLabel:!0}),i.jsx(w,{disabled:(q=(s=e==null?void 0:e.ownerDetails)==null?void 0:s[u])==null?void 0:q.guardianName,isDynamic:!0,label:"Guardian Name",name:"ownerDetails.".concat(u,".guardianName"),formik:m,isRequiredLabel:!0}),i.jsx(w,{type:"number",onInput:O=>{O.target.value=Math.max(0,parseInt(O.target.value)).toString().slice(0,10)},disabled:(x=(N=e==null?void 0:e.ownerDetails)==null?void 0:N[u])==null?void 0:x.mobileNo,isDynamic:!0,label:"Mobile No",name:"ownerDetails.".concat(u,".mobileNo"),formik:m,isRequiredLabel:!0}),i.jsx(ge,{disabled:(n=(f=e==null?void 0:e.ownerDetails)==null?void 0:f[u])==null?void 0:n.ownerNameMarathi,isDynamic:!0,label:"Owner Name Marathi",name:"ownerDetails.".concat(u,".ownerNameMarathi"),formik:m,editData:(l=(p=e==null?void 0:e.ownerDetails)==null?void 0:p[u])==null?void 0:l.ownerNameMarathi}),i.jsx(ge,{disabled:(B=(t=e==null?void 0:e.ownerDetails)==null?void 0:t[u])==null?void 0:B.guardianNameMarathi,isDynamic:!0,label:"Guardian Name Marathi",name:"ownerDetails.".concat(u,".guardianNameMarathi"),formik:m,editData:(_=(v=e==null?void 0:e.ownerDetails)==null?void 0:v[u])==null?void 0:_.guardianNameMarathi}),i.jsx(w,{isDynamic:!0,label:"Email",name:"ownerDetails.".concat(u,".email"),formik:m,isRequiredLabel:!0}),u>0&&i.jsx("div",{className:"flex justify-end items-end col-span-2",children:i.jsx(g.Button,{color:"red",size:"sm",onClick:()=>o(u),children:i.jsx("small",{children:"Remove"})})})]}),i.jsx("div",{className:"border-b border-gray-300 my-4"})]},u)}),(e==null?void 0:e.firmType)!=1&&i.jsx("div",{className:"flex justify-center items-end -mt-4",children:i.jsx(g.Button,{size:"sm",onClick:()=>j?j({businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}):null,children:"Add Owner"})})]})}})})}),i.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[i.jsx(g.Button,{color:"gray",size:"sm",onClick:()=>y(m.values),children:"Back"}),i.jsx(g.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})})}function Le({data:e,setData:R,next:D,prev:y,licenseId:m}){var S,u,c,b;const{mutateAsync:j,isLoading:o}=we({}),r=z({enableReinitialize:!0,initialValues:{licenseFor:(e==null?void 0:e.licenseFor)||"1",licenseCharge:(e==null?void 0:e.licenseCharge)||"",penalty:(e==null?void 0:e.penalty)||"",denialAmount:(e==null?void 0:e.denialAmount)||"",totalCharge:(e==null?void 0:e.totalCharge)||""},onSubmit:async(s,{setSubmitting:q})=>{var x,f;const N={initialBusinessDetails:{applyWith:e==null?void 0:e.applyWith,noticeNo:(e==null?void 0:e.noticeNo)||"",noticeDate:(e==null?void 0:e.noticeDate)||"",firmType:(e==null?void 0:e.firmType)||"",ownershipType:(e==null?void 0:e.ownershipType)||"",licenseNo:(e==null?void 0:e.licenseNo)||"",otherFirmType:(e==null?void 0:e.otherFirmType)||""},firmDetails:{wardNo:(e==null?void 0:e.wardNo)||"",holdingNo:(e==null?void 0:e.holdingNo)||"",areaSqft:(e==null?void 0:e.areaSqft)||"",firmName:(e==null?void 0:e.firmName)||"",firmNameMarathi:(e==null?void 0:e.firmNameMarathi)||"",firmEstdDate:(e==null?void 0:e.firmEstdDate)||"",businessAddress:(e==null?void 0:e.businessAddress)||"",landmark:(e==null?void 0:e.landmark)||"",pincode:(e==null?void 0:e.pincode)||"",premisesOwner:(e==null?void 0:e.premisesOwner)||"",businessDescription:(e==null?void 0:e.businessDescription)||"",natureOfBusiness:[{name:(x=e==null?void 0:e.natureOfBusiness)==null?void 0:x.label,id:(f=e==null?void 0:e.natureOfBusiness)==null?void 0:f.value}],tocStatus:0,propDtlId:(e==null?void 0:e.propDtlId)||"",zoneId:(e==null?void 0:e.zoneId)||""},ownerDetails:e==null?void 0:e.ownerDetails,licenseDetails:{licenseFor:s==null?void 0:s.licenseFor,licenseCharge:s==null?void 0:s.licenseCharge,penalty:s==null?void 0:s.penalty,denialAmount:s==null?void 0:s.denialAmount,totalCharge:s==null?void 0:s.totalCharge,paymentMode:"NA",bankName:"",chequeNo:"",chequeDate:"",branchName:""},applicationType:"SURRENDER",licenseId:m||""};ye.fire({title:"Are you sure?",text:"You want to proceed with the payment of ₹ ".concat(s==null?void 0:s.totalCharge),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(n=>{n.isConfirmed&&h(s,N)}).catch(n=>{var p,l;T.error((l=(p=n==null?void 0:n.response)==null?void 0:p.data)==null?void 0:l.message)})}}),h=async(s,q)=>{var N,x,f,n,p,l;try{const t=await j({api:L.tradeAddNew,data:q});(N=t==null?void 0:t.data)!=null&&N.status?(T.success(((x=t==null?void 0:t.data)==null?void 0:x.message)||"Success"),D({...e,...s,message:(f=t==null?void 0:t.data)==null?void 0:f.message,applyLicenseId:(p=(n=t==null?void 0:t.data)==null?void 0:n.data)==null?void 0:p.applyLicenseId})):T.error(((l=t==null?void 0:t.data)==null?void 0:l.message)||"Something went wrong")}catch(t){T.error((t==null?void 0:t.message)||"Something went wrong")}};return F({api:L.tradeGetDemand,config:{licenseFor:r.values.licenseFor,firmEstdDate:e==null?void 0:e.firmEstdDate,natureOfBusiness:[{id:(S=e==null?void 0:e.natureOfBusiness)==null?void 0:S.value,name:(u=e==null?void 0:e.natureOfBusiness)==null?void 0:u.label}],areaSqft:e==null?void 0:e.areaSqft,applicationType:"RENEWAL",tocStatus:0,noticeDate:""},value:[(c=r==null?void 0:r.values)==null?void 0:c.licenseFor],options:{enabled:!!((b=r==null?void 0:r.values)!=null&&b.licenseFor),onSuccess:s=>{var q,N,x,f,n,p;console.log("res",(q=s==null?void 0:s.data)==null?void 0:q.total_charge),r.setFieldValue("licenseCharge",(N=s==null?void 0:s.data)==null?void 0:N.rate),r.setFieldValue("penalty",(x=s==null?void 0:s.data)==null?void 0:x.penalty),r.setFieldValue("denialAmount",((f=s==null?void 0:s.data)==null?void 0:f.arear_amount)+((n=s==null?void 0:s.data)==null?void 0:n.notice_amount)||0),r.setFieldValue("totalCharge",((p=s==null?void 0:s.data)==null?void 0:p.total_charge)||0)}}}),i.jsxs(A,{formik:r,children:[o&&i.jsx(Ne,{}),i.jsxs(g.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Surrender Application"})}),i.jsxs(g.CardBody,{children:[i.jsx("div",{className:"flex justify-center",children:i.jsx("h1",{className:"text-sm font-semibold text-red-700",children:"Final Submit For Surrender Application"})}),i.jsx("div",{className:"border-t border-gray-200 my-5"}),i.jsxs("div",{className:"flex justify-between mt-4",children:[i.jsx(g.Button,{color:"gray",size:"sm",onClick:()=>y(r.values),children:"Back"}),i.jsx(g.Button,{color:"blue",type:"submit",size:"sm",children:"Final Submit"})]})]})]})]})}function Me({data:e}){const R=qe();return i.jsx(i.Fragment,{children:i.jsxs("div",{className:"border border-gray-200 shadow-md shadow-gray-300 justify-center p-4 sm:w-1/2 lg:w-1/3 w-full bg-white mx-auto flex flex-col h-screen top-0 left-0 right-0 bottom-0 fixed",children:[i.jsxs("div",{className:"relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 hover:bg-white opacity-0 transition duration-700 hover:opacity-10"}),i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","data-slot":"icon",className:"text-white w-24 h-24 mb-4 mt-12 bg-green-600 max-w-full h-auto mx-auto animate-wiggle rounded-full",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"})})]}),i.jsx("div",{className:"",children:i.jsxs("div",{className:"mb-2",children:[i.jsx("h3",{className:"text-2xl  text-center mb-6 text-[#40AA15] font-openSans font-semibold",children:"This Application Is Submitted."}),i.jsxs("h3",{className:"text-xl  text-center mb-2 text-gray-400 font-openSans font-semibold ",children:["Generated Application No: ",e==null?void 0:e.message]}),i.jsx("h3",{className:"text-sm  text-center mb-3 text-gray-400 font-openSans font-semibold ",children:"( Keep This application No. for future reference. You can always find your applications in)"})]})}),i.jsx("div",{className:"",children:i.jsx("div",{className:" text-center mt-8 mb-16",children:i.jsxs("button",{onClick:()=>R("/amc-app/trade/application-details/".concat(e==null?void 0:e.applyLicenseId),{replace:!0}),className:"bg-[#1A4D8C] text-sm px-8 py-2 text-white  rounded leading-5 shadow-lg",children:[" ","View Application"]})})})]})})}function Xe(){var s,q,N,x,f;const e=De(),R=(s=new URLSearchParams(e==null?void 0:e.search))==null?void 0:s.get("app-type"),D=(q=new URLSearchParams(e==null?void 0:e.search))==null?void 0:q.get("license-id"),[y,m]=I.useState([]),[j,o]=I.useState(1),[r,h]=I.useState({applicationType:"",applyWith:"",noticeNo:"",noticeDate:"",firmType:"",ownershipType:"",licenseNo:"",otherFirmType:"",holdingNo:"",zoneId:"",wardNo:"",areaSqft:"",firmName:"",firmNameMarathi:"",firmEstdDate:"",businessAddress:"",landmark:"",pincode:"",premisesOwner:"",businessDescription:"",natureOfBusiness:null,tocStatus:0,propDtlId:"",ownerDetails:[{businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}],licenseFor:"",licenseCharge:"",penalty:"",denialAmount:"",totalCharge:"",message:"",applyLicenseId:""}),S=n=>{console.log(n)},u=(n,p=!1)=>{if(h({...r,...n}),p){S(n);return}o(j+1)},c=n=>{h({...r,...n}),o(j-1)},b=F({api:(N=L)==null?void 0:N.tradeApplyData,config:{licenseId:D,applicationType:R},value:[R,D],options:{enabled:!!D&&!!R,onSuccess:n=>{var p,l;h(t=>{var B,v,_,O,k,E,P,$,V,W,G,H,U,Y,Z,K,Q,J,X,ee,ie,ne,se,re,le,oe,ce,te,ue,ae,me,de,pe,he,be,xe,fe;return{...t,ownerDetails:(v=(B=n==null?void 0:n.data)==null?void 0:B.ownerDtl)==null?void 0:v.map(a=>({businessOwnerName:a==null?void 0:a.owner_name,guardianName:a==null?void 0:a.guardian_name,mobileNo:a==null?void 0:a.mobile_no,ownerNameMarathi:a==null?void 0:a.owner_name_marathi,guardianNameMarathi:a==null?void 0:a.guardian_name_marathi,email:a==null?void 0:a.email_id,natureOfBusiness:a==null?void 0:a.nature_of_business})),applicationType:(O=(_=n==null?void 0:n.data)==null?void 0:_.licenceDtl)==null?void 0:O.application_type,firmType:(E=(k=n==null?void 0:n.data)==null?void 0:k.licenceDtl)==null?void 0:E.firm_type_id,ownershipType:($=(P=n==null?void 0:n.data)==null?void 0:P.licenceDtl)==null?void 0:$.ownership_type_id,licenseNo:(W=(V=n==null?void 0:n.data)==null?void 0:V.licenceDtl)==null?void 0:W.license_no,zoneId:(H=(G=n==null?void 0:n.data)==null?void 0:G.licenceDtl)==null?void 0:H.zone_id,wardNo:(Y=(U=n==null?void 0:n.data)==null?void 0:U.licenceDtl)==null?void 0:Y.ward_id,areaSqft:(K=(Z=n==null?void 0:n.data)==null?void 0:Z.licenceDtl)==null?void 0:K.area_in_sqft,firmName:(J=(Q=n==null?void 0:n.data)==null?void 0:Q.licenceDtl)==null?void 0:J.firm_name,firmNameMarathi:(ee=(X=n==null?void 0:n.data)==null?void 0:X.licenceDtl)==null?void 0:ee.firm_name_marathi,firmEstdDate:(ne=(ie=n==null?void 0:n.data)==null?void 0:ie.licenceDtl)==null?void 0:ne.establishment_date,businessAddress:(re=(se=n==null?void 0:n.data)==null?void 0:se.licenceDtl)==null?void 0:re.address,landmark:(oe=(le=n==null?void 0:n.data)==null?void 0:le.licenceDtl)==null?void 0:oe.landmark,pincode:(te=(ce=n==null?void 0:n.data)==null?void 0:ce.licenceDtl)==null?void 0:te.pin_code,premisesOwner:(ae=(ue=n==null?void 0:n.data)==null?void 0:ue.licenceDtl)==null?void 0:ae.premises_owner_name,businessDescription:(de=(me=n==null?void 0:n.data)==null?void 0:me.licenceDtl)==null?void 0:de.firm_description,natureOfBusiness:(be=(he=(pe=n==null?void 0:n.data)==null?void 0:pe.licenceDtl)==null?void 0:he.nature_of_bussiness)==null?void 0:be.map(a=>({value:a==null?void 0:a.id,label:a==null?void 0:a.trade_item}))[0],tocStatus:(fe=(xe=n==null?void 0:n.data)==null?void 0:xe.licenceDtl)==null?void 0:fe.toc_status}}),m((l=(p=n==null?void 0:n.data)==null?void 0:p.natureOfBusiness)==null?void 0:l.map(t=>({value:t==null?void 0:t.id,label:"(".concat(t==null?void 0:t.trade_code,") - ").concat(t==null?void 0:t.trade_item)})))}}});return(x=b==null?void 0:b.data)!=null&&x.status?i.jsx(Se,{title:"Surrender Application",children:i.jsx("div",{className:"p-4",children:{1:i.jsx(Oe,{data:r,setData:h,next:u,tradeApplyData:b}),2:i.jsx(Te,{data:r,setData:h,next:u,prev:c,tradeApplyData:b,natureOfBusiness:y}),3:i.jsx(Fe,{data:r,setData:h,next:u,prev:c}),4:i.jsx(Le,{data:r,setData:h,next:u,prev:c,licenseId:D}),5:i.jsx(Me,{data:r})}[j]})}):i.jsx("div",{className:"flex justify-center items-center h-96 ",children:i.jsx("div",{className:"text-base font-semibold text-center text-red-900",children:(f=b==null?void 0:b.data)==null?void 0:f.message})})}export{Xe as default};
