import{u as x,k as D,Z as y,j as t,bs as l,c5 as j,P as k,bP as P}from"./index-4b7c3b74.js";function C(){const{t:o}=x();D("Rainwater Harvesting Workflow");const{api_workflowInfo:i,api_postDepartmental:r,api_getDepartmentalData:s}=k(),{get_HarvestingInbox:n,get_HarvestingOutbox:p,post_HarvestingNextLevel:d,get_HarvestingSpecial:c,post_HarvestingApprovalRejection:m,post_HarvestingEscalate:g,get_HarvestingUploadedDocuments:u,post_HarvestingDocumentUpload:_,get_HarvestingBtcList:h,get_HarvestingBtcAction:H,get_HarvestingDetailsById:w,get_HarvestingDocumentsToUpload:f,post_HarvestingDocVerify:v}=P(),b={api:{api_inboxList:{method:"post",url:n},api_outboxList:{method:"post",url:p},api_specialList:{method:"post",url:c},apt_btcList:{method:"post",url:h},api_fieldVerificationList:{method:"post",url:""},api_details:{method:"post",url:w},api_workflowInfo:{method:"post",url:i},api_independentComment:{method:"post",url:""},api_sendLevel:{method:"post",url:d},api_escalate:{method:"post",url:g},api_btc:{method:"post",url:H},api_approveReject:{method:"post",url:m},api_postDepartmentalData:{method:"post",url:r},api_getDepartmentalData:{method:"post",url:s},api_uploadDocumentShow:{method:"post",url:f},api_uploadDocument:{method:"post",url:_},api_verifyDocuments:{method:"post",url:v},api_documentList:{method:"post",url:u},documentBaseUrl:y},workflow:{workflowName:"Harvesting-Workflow AT",workflowId:13,moduleId:1},tableColumns:[{Header:"#",Cell:({row:a})=>t.jsx("div",{className:"pr-2",children:a.index+1})},{Header:`${o("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:a})=>{var e;return t.jsx("span",{children:l((e=a.row.original)==null?void 0:e.ward_no)})}},{Header:`${o("mainHoldingPage.applicationNum.label")}`,accessor:"application_no",Cell:({cell:a})=>{var e;return t.jsx("span",{children:l((e=a.row.original)==null?void 0:e.application_no)})}},{Header:`${o("mainHoldingPage.holdingNumber.label")}`,accessor:"holding_no",Cell:({cell:a})=>{var e;return t.jsx("span",{children:l((e=a.row.original)==null?void 0:e.holding_no)})}},{Header:`${o("mainHoldingPage.propertyApplicantNm.label")}`,accessor:"applicant_name",Cell:({cell:a})=>{var e;return t.jsx("span",{children:l((e=a.row.original)==null?void 0:e.applicant_name)})}},{Header:`${o("mainHoldingPage.holdingPropertyType.label")}`,accessor:"property_type",Cell:({cell:a})=>{var e;return t.jsx("span",{children:l((e=a.row.original)==null?void 0:e.property_type)})}},{Header:`${o("mainHoldingPage.propertyApplyDate.label")}`,accessor:"date",Cell:({cell:a})=>{var e;return t.jsx("span",{children:l((e=a.row.original)==null?void 0:e.date)})}}],customTabs:null,hasBTC:!0,hasFieldVerification:!1};return t.jsx(j,{workflowData:b})}export{C as default};
