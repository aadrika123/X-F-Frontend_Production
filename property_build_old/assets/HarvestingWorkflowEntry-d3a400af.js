import{X as D,a as b,f as y,j as e,V as i,g as j,P as k}from"./index-bfa78101.js";import{P}from"./PilotWorkflowIndex-5786d02c.js";/* empty css             */import"./index.esm-15c6d6d8.js";import"./index.esm-9c3dd3cf.js";import"./PilotWorkflowDocumentRow-14e8d501.js";import"./index.esm-9a381033.js";import"./photo-f9d7c0b5.js";import"./index.esm-e478a7da.js";import"./SwitchBase-2114f42d.js";import"./useFormControl-b71624e1.js";import"./Typography-c298d1c8.js";import"./TransitionGroupContext-5afae453.js";import"./EmptyDetailsIllustration-82d402d0.js";import"./notfound1-b58e95b5.js";import"./folders-c40af08a.js";import"./ApiHeader2-b363f7b8.js";import"./moment-6de327c6.js";import"./CustomErrorBoundary-bee45a6d.js";import"./BottomErrorCard-ccfe7e8d.js";import"./Box-09c593f5.js";import"./useTheme-5a95b6e6.js";function M(){const{t:a}=D();b("Rainwater Harvesting Workflow");const{api_workflowInfo:r,api_postDepartmental:p,api_getDepartmentalData:l}=j(),{get_HarvestingInbox:s,get_HarvestingOutbox:n,post_HarvestingNextLevel:m,get_HarvestingSpecial:d,post_HarvestingApprovalRejection:c,post_HarvestingEscalate:g,get_HarvestingUploadedDocuments:u,post_HarvestingDocumentUpload:_,get_HarvestingBtcList:h,get_HarvestingBtcAction:H,get_HarvestingDetailsById:w,get_HarvestingDocumentsToUpload:f,post_HarvestingDocVerify:v}=k(),x={api:{api_inboxList:{method:"post",url:s},api_outboxList:{method:"post",url:n},api_specialList:{method:"post",url:d},apt_btcList:{method:"post",url:h},api_fieldVerificationList:{method:"post",url:""},api_details:{method:"post",url:w},api_workflowInfo:{method:"post",url:r},api_independentComment:{method:"post",url:""},api_sendLevel:{method:"post",url:m},api_escalate:{method:"post",url:g},api_btc:{method:"post",url:H},api_approveReject:{method:"post",url:c},api_postDepartmentalData:{method:"post",url:p},api_getDepartmentalData:{method:"post",url:l},api_uploadDocumentShow:{method:"post",url:f},api_uploadDocument:{method:"post",url:_},api_verifyDocuments:{method:"post",url:v},api_documentList:{method:"post",url:u},documentBaseUrl:y},workflow:{workflowName:"Harvesting-Workflow AT",workflowId:13,moduleId:1},tableColumns:[{Header:"#",Cell:({row:t})=>e.jsx("div",{className:"pr-2",children:t.index+1})},{Header:`${a("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.ward_no)})}},{Header:`${a("mainHoldingPage.applicationNum.label")}`,accessor:"application_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.application_no)})}},{Header:`${a("mainHoldingPage.holdingNumber.label")}`,accessor:"holding_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.holding_no)})}},{Header:`${a("mainHoldingPage.propertyApplicantNm.label")}`,accessor:"applicant_name",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.applicant_name)})}},{Header:`${a("mainHoldingPage.holdingPropertyType.label")}`,accessor:"property_type",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.property_type)})}},{Header:`${a("mainHoldingPage.propertyApplyDate.label")}`,accessor:"date",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.date)})}}],customTabs:null,hasBTC:!0,hasFieldVerification:!1};return e.jsx(P,{workflowData:x})}export{M as default};