import{X as D,a as x,f as v,j as i,n as t,g as L}from"./index-83771a57.js";import{P as b}from"./PilotWorkflowIndex-9a292703.js";import{C}from"./CustomErrorBoundary-9c94e460.js";/* empty css             */import"./index.esm-e13a2553.js";import"./index.esm-1fae25e6.js";import"./PilotWorkflowDocumentRow-7d5d79f5.js";import"./index.esm-17afd82e.js";import"./photo-f9d7c0b5.js";import"./index.esm-afb96e6f.js";import"./SwitchBase-6c142c56.js";import"./useFormControl-f6abdb9a.js";import"./Typography-e3ed8166.js";import"./TransitionGroupContext-12f17ff5.js";import"./EmptyDetailsIllustration-272de471.js";import"./notfound1-b58e95b5.js";import"./folders-c40af08a.js";import"./ApiHeader2-b363f7b8.js";import"./moment-f9488161.js";import"./BottomErrorCard-bdb8dc87.js";import"./Box-af1d1463.js";import"./useTheme-b58fe000.js";function ro(){const{t:e}=D();x("Waiver Workflow");const{api_safInboxList:j,api_safOutboxList:y,api_getsafSpecialList:H,api_safBTCList:k,api_postEscalateStatus:A,api_postComment:n,api_postApplicationToLevel:P,api_approveRejectForm:T,api_backToCitizen:B,api_getSafDetailsById:I,api_workflowInfo:m,api_verifyDocumentsSaf:S,api_postDepartmental:d,api_uploadDocument:c,api_getDepartmentalData:_,getDocumentList:W,api_uploadDocumentShow:N,api_fieldVerificationList:$,post_waiverDocList:r,post_waiverDocVerify:u,post_waiverFinalApproval:w,post_waiverInbox:f,post_waiverApprovedList:p,post_waiverApplicationDetails:g}=L(),h={api:{api_inboxList:{method:"get",url:f},api_outboxList:{method:"get",url:p},api_specialList:{method:"get",url:p},apt_btcList:{method:"post",url:p},api_fieldVerificationList:{method:"post",url:p},api_details:{method:"post",url:g},api_workflowInfo:{method:"post",url:m},api_independentComment:{method:"post",url:n},api_approveReject:{method:"post",url:w},api_postDepartmentalData:{method:"post",url:d},api_getDepartmentalData:{method:"post",url:_},api_uploadDocumentShow:{method:"post",url:r},api_uploadDocument:{method:"post",url:c},api_verifyDocuments:{method:"post",url:u},api_documentList:{method:"post",url:r},documentBaseUrl:v},tableColumns:[{Header:"#",Cell:({row:a})=>i.jsx("div",{className:"pr-2",children:a.index+1})},{Header:`${e("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:a})=>{var o,l,s;return i.jsx("span",{children:t((o=a.row.original)==null?void 0:o.old_ward_no)=="NA"?t((l=a.row.original)==null?void 0:l.new_ward_no):t((s=a.row.original)==null?void 0:s.old_ward_no)})}},{Header:`${e("mainHoldingPage.applicationNum.label")}`,accessor:"application_no",Cell:({cell:a})=>{var o;return i.jsx("span",{children:t((o=a.row.original)==null?void 0:o.application_no)})}},{Header:`${e("mainHoldingPage.propertyApplicantNm.label")}`,accessor:"applicant_name",Cell:({cell:a})=>{var o;return i.jsx("span",{children:t((o=a.row.original)==null?void 0:o.applicant_name)})}},{Header:`${e("mainHoldingPage.propertyAppliType.label")}`,accessor:"application_type",Cell:({cell:a})=>{var o;return i.jsx("span",{children:t((o=a.row.original)==null?void 0:o.application_type)})}},{Header:`${e("mainHoldingPage.propertyApplyDate.label")}`,accessor:"application_date",Cell:({cell:a})=>{var o;return i.jsx("span",{children:t((o=a.row.original)==null?void 0:o.application_date)})}}],customTabs:null,hasBTC:!0,hasFieldVerification:!0};return i.jsx(C,{errorMsg:"Bug in PilotWorkflowIndex",children:i.jsx(b,{workflowData:h})})}export{ro as default};
