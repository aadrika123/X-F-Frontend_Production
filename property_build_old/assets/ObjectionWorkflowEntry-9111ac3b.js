import{J as y,a as D,e as C,j as o,I as a,f as H,P as k}from"./index-3617a985.js";import{P}from"./PilotWorkflowIndex-44f7170d.js";import"./index.esm-8ddceadf.js";/* empty css             */import"./index.esm-acef4748.js";import"./index.esm-f283d267.js";import"./PilotWorkflowDocumentRow-6d051503.js";import"./index.esm-6adbaf3f.js";import"./photo-f9d7c0b5.js";import"./index.esm-6d948c39.js";import"./SwitchBase-f15ffbfd.js";import"./useThemeProps-da26de0e.js";import"./useFormControl-3e833624.js";import"./Typography-070d7903.js";import"./TransitionGroupContext-521a4f3d.js";import"./createSvgIcon-57d19384.js";import"./index.esm-e5976edd.js";import"./EmptyDetailsIllustration-8dfb7f41.js";import"./notfound1-b58e95b5.js";import"./index.esm-a102f14d.js";import"./folders-c40af08a.js";import"./ApiHeader2-b363f7b8.js";import"./Styles-c08e88ac.js";import"./moment-177e57e9.js";import"./index.esm-e91c55ec.js";import"./CustomErrorBoundary-5e267c8c.js";import"./BottomErrorCard-0307425b.js";import"./Box-7546ff02.js";import"./useTheme-c1b1536e.js";function ae(){const{t:i}=y();D("Objection Workflow");const{api_workflowInfo:l,api_postDepartmental:n,api_getDepartmentalData:r}=H(),{get_ObjectionInbox:m,get_ObjectionOutbox:s,get_ObjectionDetailsById:c,post_ObjectionNextLevel:p,post_ObjectionApprovalRejection:d,post_ObjectionEscalate:u,get_ObjectionSpecial:_,post_ObjectionBackToCitizen:b,post_ObjectionBtcList:j,post_ObjectionComment:g,get_ObjectionUploadedDocuments:h,post_ObjectionDocumentUpload:f,get_ObjectionDocumentsToUpload:w,post_ObjectionDocVerify:x}=k(),O={api:{api_inboxList:{method:"post",url:m},api_outboxList:{method:"post",url:s},api_specialList:{method:"post",url:_},apt_btcList:{method:"post",url:j},api_fieldVerificationList:{method:"post",url:""},api_details:{method:"post",url:c},api_workflowInfo:{method:"post",url:l},api_independentComment:{method:"post",url:g},api_sendLevel:{method:"post",url:p},api_escalate:{method:"post",url:u},api_btc:{method:"post",url:b},api_approveReject:{method:"post",url:d},api_postDepartmentalData:{method:"post",url:n},api_getDepartmentalData:{method:"post",url:r},api_uploadDocumentShow:{method:"post",url:w},api_uploadDocument:{method:"post",url:f},api_verifyDocuments:{method:"post",url:x},api_documentList:{method:"post",url:h},documentBaseUrl:C},workflow:{workflowName:"Objection-Workflow AT",departmentalPostFor:"OBJECTION",workflowId:10,moduleId:1},tableColumns:[{Header:"#",Cell:({row:e})=>o.jsx("div",{className:"pr-2",children:e.index+1})},{Header:`${i("mainHoldingPage.propertyWardNumber.label")}`,accessor:"old_ward_no",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.old_ward_no)})}},{Header:`${i("mainHoldingPage.propertyHoldingNumber.label")}`,accessor:"new_holding_no",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.new_holding_no)})}},{Header:`${i("mainHoldingPage.applicationNum.label")}`,accessor:"application_no",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.application_no)})}},{Header:`${i("mainHoldingPage.propertyApplicantNm.label")}`,accessor:"applicant_name",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.applicant_name)})}},{Header:`${i("mainHoldingPage.holdingPropertyType.label")}`,accessor:"property_type",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.property_type)})}},{Header:`${i("mainHoldingPage.propertyApplyDate.label")}`,accessor:"application_date",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.application_date)})}},{Header:`${i("mainHoldingPage.propertyObjectionType.label")}`,accessor:"objection_for",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)=="")return o.jsx("div",{className:"w-full flex flex-row items-center",children:o.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null){if((e==null?void 0:e.value)=="Clerical Mistake")return o.jsx(o.Fragment,{children:"Clerical Objection"});if((e==null?void 0:e.value)=="Assessment Error")return o.jsx(o.Fragment,{children:"Assessment Objection"});if((e==null?void 0:e.value)=="Forgery")return o.jsx(o.Fragment,{children:"Forgery Objection"})}}}],customTabs:null,hasBTC:!0,hasFieldVerification:!1};return o.jsx(P,{workflowData:O})}export{ae as default};
