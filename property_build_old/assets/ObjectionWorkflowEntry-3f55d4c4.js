import{X as y,a as D,f as C,j as o,V as a,g as H,P as k}from"./index-bfa78101.js";import{P}from"./PilotWorkflowIndex-5786d02c.js";/* empty css             */import"./index.esm-15c6d6d8.js";import"./index.esm-9c3dd3cf.js";import"./PilotWorkflowDocumentRow-14e8d501.js";import"./index.esm-9a381033.js";import"./photo-f9d7c0b5.js";import"./index.esm-e478a7da.js";import"./SwitchBase-2114f42d.js";import"./useFormControl-b71624e1.js";import"./Typography-c298d1c8.js";import"./TransitionGroupContext-5afae453.js";import"./EmptyDetailsIllustration-82d402d0.js";import"./notfound1-b58e95b5.js";import"./folders-c40af08a.js";import"./ApiHeader2-b363f7b8.js";import"./moment-6de327c6.js";import"./CustomErrorBoundary-bee45a6d.js";import"./BottomErrorCard-ccfe7e8d.js";import"./Box-09c593f5.js";import"./useTheme-5a95b6e6.js";function Q(){const{t:i}=y();D("Objection Workflow");const{api_workflowInfo:l,api_postDepartmental:n,api_getDepartmentalData:r}=H(),{get_ObjectionInbox:s,get_ObjectionOutbox:c,get_ObjectionDetailsById:m,post_ObjectionNextLevel:d,post_ObjectionApprovalRejection:p,post_ObjectionEscalate:u,get_ObjectionSpecial:_,post_ObjectionBackToCitizen:b,post_ObjectionBtcList:j,post_ObjectionComment:g,get_ObjectionUploadedDocuments:h,post_ObjectionDocumentUpload:f,get_ObjectionDocumentsToUpload:w,post_ObjectionDocVerify:x}=k(),O={api:{api_inboxList:{method:"post",url:s},api_outboxList:{method:"post",url:c},api_specialList:{method:"post",url:_},apt_btcList:{method:"post",url:j},api_fieldVerificationList:{method:"post",url:""},api_details:{method:"post",url:m},api_workflowInfo:{method:"post",url:l},api_independentComment:{method:"post",url:g},api_sendLevel:{method:"post",url:d},api_escalate:{method:"post",url:u},api_btc:{method:"post",url:b},api_approveReject:{method:"post",url:p},api_postDepartmentalData:{method:"post",url:n},api_getDepartmentalData:{method:"post",url:r},api_uploadDocumentShow:{method:"post",url:w},api_uploadDocument:{method:"post",url:f},api_verifyDocuments:{method:"post",url:x},api_documentList:{method:"post",url:h},documentBaseUrl:C},workflow:{workflowName:"Objection-Workflow AT",departmentalPostFor:"OBJECTION",workflowId:10,moduleId:1},tableColumns:[{Header:"#",Cell:({row:e})=>o.jsx("div",{className:"pr-2",children:e.index+1})},{Header:`${i("mainHoldingPage.propertyWardNumber.label")}`,accessor:"old_ward_no",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.old_ward_no)})}},{Header:`${i("mainHoldingPage.propertyHoldingNumber.label")}`,accessor:"new_holding_no",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.new_holding_no)})}},{Header:`${i("mainHoldingPage.applicationNum.label")}`,accessor:"application_no",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.application_no)})}},{Header:`${i("mainHoldingPage.propertyApplicantNm.label")}`,accessor:"applicant_name",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.applicant_name)})}},{Header:`${i("mainHoldingPage.holdingPropertyType.label")}`,accessor:"property_type",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.property_type)})}},{Header:`${i("mainHoldingPage.propertyApplyDate.label")}`,accessor:"application_date",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.application_date)})}},{Header:`${i("mainHoldingPage.propertyObjectionType.label")}`,accessor:"objection_for",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)=="")return o.jsx("div",{className:"w-full flex flex-row items-center",children:o.jsx("i",{className:"font-semibold ",children:"N/A"})});if((e==null?void 0:e.value)!=null){if((e==null?void 0:e.value)=="Clerical Mistake")return o.jsx(o.Fragment,{children:"Clerical Objection"});if((e==null?void 0:e.value)=="Assessment Error")return o.jsx(o.Fragment,{children:"Assessment Objection"});if((e==null?void 0:e.value)=="Forgery")return o.jsx(o.Fragment,{children:"Forgery Objection"})}}}],customTabs:null,hasBTC:!0,hasFieldVerification:!1};return o.jsx(P,{workflowData:O})}export{Q as default};