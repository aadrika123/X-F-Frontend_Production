import{K as D,a as x,f as v,j as i,n as t,g as L}from"./index-6178a477.js";import{P as b}from"./PilotWorkflowIndex-bd74d773.js";import{C}from"./CustomErrorBoundary-9fc79038.js";import"./index.esm-a16a9541.js";/* empty css             */import"./index.esm-1fac2968.js";import"./index.esm-f2519bcc.js";import"./PilotWorkflowDocumentRow-f41cc70e.js";import"./index.esm-7d890097.js";import"./photo-f9d7c0b5.js";import"./index.esm-557a135f.js";import"./SwitchBase-69116343.js";import"./useFormControl-ced7eb08.js";import"./Typography-0d427097.js";import"./TransitionGroupContext-c8c7bda7.js";import"./index.esm-af7fd9d2.js";import"./EmptyDetailsIllustration-b60052b7.js";import"./notfound1-b58e95b5.js";import"./index.esm-b85c1b0d.js";import"./folders-c40af08a.js";import"./ApiHeader2-b363f7b8.js";import"./Styles-c08e88ac.js";import"./moment-ebd0adff.js";import"./index.esm-627aaba5.js";import"./BottomErrorCard-92353a28.js";import"./Box-189d9c36.js";import"./useTheme-38d4d1e8.js";function co(){const{t:e}=D();x("Waiver Workflow");const{api_safInboxList:j,api_safOutboxList:y,api_getsafSpecialList:H,api_safBTCList:k,api_postEscalateStatus:A,api_postComment:n,api_postApplicationToLevel:P,api_approveRejectForm:T,api_backToCitizen:B,api_getSafDetailsById:I,api_workflowInfo:m,api_verifyDocumentsSaf:S,api_postDepartmental:d,api_uploadDocument:c,api_getDepartmentalData:_,getDocumentList:W,api_uploadDocumentShow:N,api_fieldVerificationList:$,post_waiverDocList:r,post_waiverDocVerify:u,post_waiverFinalApproval:w,post_waiverInbox:f,post_waiverApprovedList:p,post_waiverApplicationDetails:g}=L(),h={api:{api_inboxList:{method:"get",url:f},api_outboxList:{method:"get",url:p},api_specialList:{method:"get",url:p},apt_btcList:{method:"post",url:p},api_fieldVerificationList:{method:"post",url:p},api_details:{method:"post",url:g},api_workflowInfo:{method:"post",url:m},api_independentComment:{method:"post",url:n},api_approveReject:{method:"post",url:w},api_postDepartmentalData:{method:"post",url:d},api_getDepartmentalData:{method:"post",url:_},api_uploadDocumentShow:{method:"post",url:r},api_uploadDocument:{method:"post",url:c},api_verifyDocuments:{method:"post",url:u},api_documentList:{method:"post",url:r},documentBaseUrl:v},tableColumns:[{Header:"#",Cell:({row:a})=>i.jsx("div",{className:"pr-2",children:a.index+1})},{Header:`${e("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:a})=>{var o,l,s;return i.jsx("span",{children:t((o=a.row.original)==null?void 0:o.old_ward_no)=="NA"?t((l=a.row.original)==null?void 0:l.new_ward_no):t((s=a.row.original)==null?void 0:s.old_ward_no)})}},{Header:`${e("mainHoldingPage.applicationNum.label")}`,accessor:"application_no",Cell:({cell:a})=>{var o;return i.jsx("span",{children:t((o=a.row.original)==null?void 0:o.application_no)})}},{Header:`${e("mainHoldingPage.propertyApplicantNm.label")}`,accessor:"applicant_name",Cell:({cell:a})=>{var o;return i.jsx("span",{children:t((o=a.row.original)==null?void 0:o.applicant_name)})}},{Header:`${e("mainHoldingPage.propertyAppliType.label")}`,accessor:"application_type",Cell:({cell:a})=>{var o;return i.jsx("span",{children:t((o=a.row.original)==null?void 0:o.application_type)})}},{Header:`${e("mainHoldingPage.propertyApplyDate.label")}`,accessor:"application_date",Cell:({cell:a})=>{var o;return i.jsx("span",{children:t((o=a.row.original)==null?void 0:o.application_date)})}}],customTabs:null,hasBTC:!0,hasFieldVerification:!0};return i.jsx(C,{errorMsg:"Bug in PilotWorkflowIndex",children:i.jsx(b,{workflowData:h})})}export{co as default};
