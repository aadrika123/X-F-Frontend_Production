import{K as D,a as b,f as y,j as e,J as i,g as j,P as k}from"./index-2e37e53a.js";import{P}from"./PilotWorkflowIndex-cfc4eed4.js";import"./index.esm-a2de8798.js";/* empty css             */import"./index.esm-39593690.js";import"./index.esm-bbf93b69.js";import"./PilotWorkflowDocumentRow-6e5c45fe.js";import"./index.esm-d3823449.js";import"./photo-f9d7c0b5.js";import"./index.esm-fa00023e.js";import"./SwitchBase-7d7e0a89.js";import"./useFormControl-f5340bcd.js";import"./Typography-6c9fe84d.js";import"./TransitionGroupContext-d0ce1ab8.js";import"./index.esm-39d01051.js";import"./EmptyDetailsIllustration-c0ee6423.js";import"./notfound1-b58e95b5.js";import"./index.esm-34d2b262.js";import"./folders-c40af08a.js";import"./ApiHeader2-b363f7b8.js";import"./Styles-c08e88ac.js";import"./moment-2fd19a85.js";import"./index.esm-dad627c7.js";import"./CustomErrorBoundary-977b0fb6.js";import"./BottomErrorCard-9ffd1178.js";import"./Box-e241495e.js";import"./useTheme-947899a2.js";function to(){const{t:a}=D();b("Rainwater Harvesting Workflow");const{api_workflowInfo:r,api_postDepartmental:p,api_getDepartmentalData:l}=j(),{get_HarvestingInbox:s,get_HarvestingOutbox:n,post_HarvestingNextLevel:m,get_HarvestingSpecial:d,post_HarvestingApprovalRejection:c,post_HarvestingEscalate:g,get_HarvestingUploadedDocuments:u,post_HarvestingDocumentUpload:_,get_HarvestingBtcList:h,get_HarvestingBtcAction:H,get_HarvestingDetailsById:w,get_HarvestingDocumentsToUpload:f,post_HarvestingDocVerify:v}=k(),x={api:{api_inboxList:{method:"post",url:s},api_outboxList:{method:"post",url:n},api_specialList:{method:"post",url:d},apt_btcList:{method:"post",url:h},api_fieldVerificationList:{method:"post",url:""},api_details:{method:"post",url:w},api_workflowInfo:{method:"post",url:r},api_independentComment:{method:"post",url:""},api_sendLevel:{method:"post",url:m},api_escalate:{method:"post",url:g},api_btc:{method:"post",url:H},api_approveReject:{method:"post",url:c},api_postDepartmentalData:{method:"post",url:p},api_getDepartmentalData:{method:"post",url:l},api_uploadDocumentShow:{method:"post",url:f},api_uploadDocument:{method:"post",url:_},api_verifyDocuments:{method:"post",url:v},api_documentList:{method:"post",url:u},documentBaseUrl:y},workflow:{workflowName:"Harvesting-Workflow AT",workflowId:13,moduleId:1},tableColumns:[{Header:"#",Cell:({row:t})=>e.jsx("div",{className:"pr-2",children:t.index+1})},{Header:`${a("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.ward_no)})}},{Header:`${a("mainHoldingPage.applicationNum.label")}`,accessor:"application_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.application_no)})}},{Header:`${a("mainHoldingPage.holdingNumber.label")}`,accessor:"holding_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.holding_no)})}},{Header:`${a("mainHoldingPage.propertyApplicantNm.label")}`,accessor:"applicant_name",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.applicant_name)})}},{Header:`${a("mainHoldingPage.holdingPropertyType.label")}`,accessor:"property_type",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.property_type)})}},{Header:`${a("mainHoldingPage.propertyApplyDate.label")}`,accessor:"date",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.date)})}}],customTabs:null,hasBTC:!0,hasFieldVerification:!1};return e.jsx(P,{workflowData:x})}export{to as default};
