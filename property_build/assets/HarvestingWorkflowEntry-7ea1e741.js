import{X as D,a as b,f as y,j as e,V as i,g as j,P as k}from"./index-80397fec.js";import{P}from"./PilotWorkflowIndex-10ce1454.js";/* empty css             */import"./index.esm-a8c721eb.js";import"./index.esm-3a095d13.js";import"./PilotWorkflowDocumentRow-be47c33a.js";import"./index.esm-56a38279.js";import"./photo-f9d7c0b5.js";import"./index.esm-b45c65f6.js";import"./SwitchBase-9e602351.js";import"./useFormControl-c8e03256.js";import"./Typography-5a8555a1.js";import"./TransitionGroupContext-32f91b34.js";import"./EmptyDetailsIllustration-3a08adf4.js";import"./notfound1-b58e95b5.js";import"./folders-c40af08a.js";import"./ApiHeader2-b363f7b8.js";import"./moment-ac9fe6cc.js";import"./CustomErrorBoundary-e8022b59.js";import"./BottomErrorCard-5843d59e.js";import"./Tabs-4f713847.js";import"./useTheme-7d012a5d.js";function M(){const{t:a}=D();b("Rainwater Harvesting Workflow");const{api_workflowInfo:r,api_postDepartmental:p,api_getDepartmentalData:l}=j(),{get_HarvestingInbox:s,get_HarvestingOutbox:n,post_HarvestingNextLevel:m,get_HarvestingSpecial:d,post_HarvestingApprovalRejection:c,post_HarvestingEscalate:g,get_HarvestingUploadedDocuments:u,post_HarvestingDocumentUpload:_,get_HarvestingBtcList:h,get_HarvestingBtcAction:H,get_HarvestingDetailsById:w,get_HarvestingDocumentsToUpload:f,post_HarvestingDocVerify:v}=k(),x={api:{api_inboxList:{method:"post",url:s},api_outboxList:{method:"post",url:n},api_specialList:{method:"post",url:d},apt_btcList:{method:"post",url:h},api_fieldVerificationList:{method:"post",url:""},api_details:{method:"post",url:w},api_workflowInfo:{method:"post",url:r},api_independentComment:{method:"post",url:""},api_sendLevel:{method:"post",url:m},api_escalate:{method:"post",url:g},api_btc:{method:"post",url:H},api_approveReject:{method:"post",url:c},api_postDepartmentalData:{method:"post",url:p},api_getDepartmentalData:{method:"post",url:l},api_uploadDocumentShow:{method:"post",url:f},api_uploadDocument:{method:"post",url:_},api_verifyDocuments:{method:"post",url:v},api_documentList:{method:"post",url:u},documentBaseUrl:y},workflow:{workflowName:"Harvesting-Workflow AT",workflowId:13,moduleId:1},tableColumns:[{Header:"#",Cell:({row:t})=>e.jsx("div",{className:"pr-2",children:t.index+1})},{Header:`${a("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.ward_no)})}},{Header:`${a("mainHoldingPage.applicationNum.label")}`,accessor:"application_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.application_no)})}},{Header:`${a("mainHoldingPage.holdingNumber.label")}`,accessor:"holding_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.holding_no)})}},{Header:`${a("mainHoldingPage.propertyApplicantNm.label")}`,accessor:"applicant_name",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.applicant_name)})}},{Header:`${a("mainHoldingPage.holdingPropertyType.label")}`,accessor:"property_type",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.property_type)})}},{Header:`${a("mainHoldingPage.propertyApplyDate.label")}`,accessor:"date",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.date)})}}],customTabs:null,hasBTC:!0,hasFieldVerification:!1};return e.jsx(P,{workflowData:x})}export{M as default};
