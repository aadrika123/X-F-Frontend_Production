import{X as y,a as j,f as k,j as t,V as i,g as H,P}from"./index-8203ecd2.js";import{P as L}from"./PilotWorkflowIndex-10b61267.js";/* empty css             */import"./index.esm-6b045b7f.js";import"./index.esm-318ea875.js";import"./PilotWorkflowDocumentRow-bf83204f.js";import"./index.esm-45403ead.js";import"./photo-f9d7c0b5.js";import"./index.esm-ebe29c85.js";import"./SwitchBase-1f40786c.js";import"./useFormControl-0ff5b9f4.js";import"./Typography-a06cf2d2.js";import"./TransitionGroupContext-bbe4ab5b.js";import"./EmptyDetailsIllustration-002726d3.js";import"./notfound1-b58e95b5.js";import"./folders-c40af08a.js";import"./ApiHeader2-b363f7b8.js";import"./moment-00da91bb.js";import"./CustomErrorBoundary-75d53e61.js";import"./BottomErrorCard-6539e038.js";import"./Box-323a7278.js";import"./useTheme-075ed154.js";function Q(){const{t:a}=y();j("Concession Workflow");const{api_workflowInfo:s,api_postDepartmental:n,api_getDepartmentalData:r}=H(),{get_ConcessionInbox:l,get_ConcessionOutbox:p,get_ConcessionSpecial:m,get_ConcessionDetailsById:d,post_ConcessionEscalate:c,post_ConcessionNextLevel:_,post_ConcessionApprovalRejection:u,post_ConcessionBackToCitizen:g,post_ConcessionComment:h,get_ConcessionDocumentsToUpload:C,get_ConcessionUploadedDocuments:w,post_ConcessionDocumentUpload:f,get_ConcessionBtcList:x,post_ConcessionDocVerify:D}=P(),b={api:{api_inboxList:{method:"post",url:l},api_outboxList:{method:"post",url:p},api_specialList:{method:"post",url:m},apt_btcList:{method:"post",url:x},api_fieldVerificationList:{method:"post",url:""},api_details:{method:"post",url:d},api_workflowInfo:{method:"post",url:s},api_independentComment:{method:"post",url:h},api_sendLevel:{method:"post",url:_},api_escalate:{method:"post",url:c},api_btc:{method:"post",url:g},api_approveReject:{method:"post",url:u},api_postDepartmentalData:{method:"post",url:n},api_getDepartmentalData:{method:"post",url:r},api_uploadDocumentShow:{method:"post",url:C},api_uploadDocument:{method:"post",url:f},api_verifyDocuments:{method:"post",url:D},api_documentList:{method:"post",url:w},documentBaseUrl:k},workflow:{workflowName:"Concession-Workflow AT",departmentalPostFor:"CONCESSION",workflowId:9,moduleId:1},tableColumns:[{Header:"#",Cell:({row:e})=>t.jsx("div",{className:"pr-2",children:e.index+1})},{Header:`${a("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:e})=>{var o;return t.jsx("span",{children:i((o=e.row.original)==null?void 0:o.ward_no)})}},{Header:`${a("mainHoldingPage.applicationNum.label")}`,accessor:"application_no",Cell:({cell:e})=>{var o;return t.jsx("span",{children:i((o=e.row.original)==null?void 0:o.application_no)})}},{Header:`${a("mainHoldingPage.holdingNumber.label")}`,accessor:"holding_no",Cell:({cell:e})=>{var o;return t.jsx("span",{children:i((o=e.row.original)==null?void 0:o.holding_no)})}},{Header:`${a("mainHoldingPage.holdingOwnerName.label")}`,accessor:"owner_name",Cell:({cell:e})=>{var o;return t.jsx("span",{children:i((o=e.row.original)==null?void 0:o.owner_name)})}},{Header:`${a("mainHoldingPage.propertyApplyDate.label")}`,accessor:"apply_date",Cell:({cell:e})=>{var o;return t.jsx("span",{children:i((o=e.row.original)==null?void 0:o.apply_date)})}},{Header:`${a("mainHoldingPage.holdingPropertyType.label")}`,accessor:"property_type",Cell:({cell:e})=>{var o;return t.jsx("span",{children:i((o=e.row.original)==null?void 0:o.property_type)})}}],customTabs:null,hasBTC:!0,hasFieldVerification:!1};return t.jsx(L,{workflowData:b})}export{Q as default};
