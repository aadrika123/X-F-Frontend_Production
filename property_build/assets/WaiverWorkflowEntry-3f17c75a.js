import{Y as D,a as x,f as v,j as i,n as t,C as L,g as b}from"./index-7885ada7.js";import{P as C}from"./PilotWorkflowIndex-af18a681.js";import"./PilotWorkflowListBox-d69da617.js";/* empty css             */import"./index.esm-94d36750.js";import"./PilotWorkflowDocumentRow-1275fcd5.js";import"./index.esm-9074603f.js";import"./photo-f9d7c0b5.js";import"./index.esm-e158c33e.js";import"./SwitchBase-fbf2a2d5.js";import"./useFormControl-29cacc7e.js";import"./Typography-fc1873bf.js";import"./useTimeout-765a8741.js";import"./EmptyDetailsIllustration-1a3e0066.js";import"./notfound1-b58e95b5.js";import"./moment-e2378935.js";import"./Tabs-4337a14a.js";import"./react-is.production.min-8f842003.js";function ia(){const{t:e}=D();x("Waiver Workflow");const{api_safInboxList:j,api_safOutboxList:y,api_getsafSpecialList:H,api_safBTCList:k,api_postEscalateStatus:A,api_postComment:n,api_postApplicationToLevel:P,api_approveRejectForm:T,api_backToCitizen:B,api_getSafDetailsById:I,api_workflowInfo:m,api_verifyDocumentsSaf:S,api_postDepartmental:d,api_uploadDocument:c,api_getDepartmentalData:_,getDocumentList:W,api_uploadDocumentShow:N,api_fieldVerificationList:$,post_waiverDocList:r,post_waiverDocVerify:u,post_waiverFinalApproval:w,post_waiverInbox:f,post_waiverApprovedList:p,post_waiverApplicationDetails:g}=b(),h={api:{api_inboxList:{method:"get",url:f},api_outboxList:{method:"get",url:p},api_specialList:{method:"get",url:p},apt_btcList:{method:"post",url:p},api_fieldVerificationList:{method:"post",url:p},api_details:{method:"post",url:g},api_workflowInfo:{method:"post",url:m},api_independentComment:{method:"post",url:n},api_approveReject:{method:"post",url:w},api_postDepartmentalData:{method:"post",url:d},api_getDepartmentalData:{method:"post",url:_},api_uploadDocumentShow:{method:"post",url:r},api_uploadDocument:{method:"post",url:c},api_verifyDocuments:{method:"post",url:u},api_documentList:{method:"post",url:r},documentBaseUrl:v},tableColumns:[{Header:"#",Cell:({row:o})=>i.jsx("div",{className:"pr-2",children:o.index+1})},{Header:`${e("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:o})=>{var a,l,s;return i.jsx("span",{children:t((a=o.row.original)==null?void 0:a.old_ward_no)=="NA"?t((l=o.row.original)==null?void 0:l.new_ward_no):t((s=o.row.original)==null?void 0:s.old_ward_no)})}},{Header:`${e("mainHoldingPage.applicationNum.label")}`,accessor:"application_no",Cell:({cell:o})=>{var a;return i.jsx("span",{children:t((a=o.row.original)==null?void 0:a.application_no)})}},{Header:`${e("mainHoldingPage.propertyApplicantNm.label")}`,accessor:"applicant_name",Cell:({cell:o})=>{var a;return i.jsx("span",{children:t((a=o.row.original)==null?void 0:a.applicant_name)})}},{Header:`${e("mainHoldingPage.propertyAppliType.label")}`,accessor:"application_type",Cell:({cell:o})=>{var a;return i.jsx("span",{children:t((a=o.row.original)==null?void 0:a.application_type)})}},{Header:`${e("mainHoldingPage.propertyApplyDate.label")}`,accessor:"application_date",Cell:({cell:o})=>{var a;return i.jsx("span",{children:t((a=o.row.original)==null?void 0:a.application_date)})}}],customTabs:null,hasBTC:!0,hasFieldVerification:!0};return i.jsx(L,{errorMsg:"Bug in PilotWorkflowIndex",children:i.jsx(C,{workflowData:h})})}export{ia as default};
