import{K as D,a as x,f as v,j as i,n as t,g as L}from"./index-2e37e53a.js";import{P as b}from"./PilotWorkflowIndex-cfc4eed4.js";import{C}from"./CustomErrorBoundary-977b0fb6.js";import"./index.esm-a2de8798.js";/* empty css             */import"./index.esm-39593690.js";import"./index.esm-bbf93b69.js";import"./PilotWorkflowDocumentRow-6e5c45fe.js";import"./index.esm-d3823449.js";import"./photo-f9d7c0b5.js";import"./index.esm-fa00023e.js";import"./SwitchBase-7d7e0a89.js";import"./useFormControl-f5340bcd.js";import"./Typography-6c9fe84d.js";import"./TransitionGroupContext-d0ce1ab8.js";import"./index.esm-39d01051.js";import"./EmptyDetailsIllustration-c0ee6423.js";import"./notfound1-b58e95b5.js";import"./index.esm-34d2b262.js";import"./folders-c40af08a.js";import"./ApiHeader2-b363f7b8.js";import"./Styles-c08e88ac.js";import"./moment-2fd19a85.js";import"./index.esm-dad627c7.js";import"./BottomErrorCard-9ffd1178.js";import"./Box-e241495e.js";import"./useTheme-947899a2.js";function co(){const{t:e}=D();x("Waiver Workflow");const{api_safInboxList:j,api_safOutboxList:y,api_getsafSpecialList:H,api_safBTCList:k,api_postEscalateStatus:A,api_postComment:n,api_postApplicationToLevel:P,api_approveRejectForm:T,api_backToCitizen:B,api_getSafDetailsById:I,api_workflowInfo:m,api_verifyDocumentsSaf:S,api_postDepartmental:d,api_uploadDocument:c,api_getDepartmentalData:_,getDocumentList:W,api_uploadDocumentShow:N,api_fieldVerificationList:$,post_waiverDocList:r,post_waiverDocVerify:u,post_waiverFinalApproval:w,post_waiverInbox:f,post_waiverApprovedList:p,post_waiverApplicationDetails:g}=L(),h={api:{api_inboxList:{method:"get",url:f},api_outboxList:{method:"get",url:p},api_specialList:{method:"get",url:p},apt_btcList:{method:"post",url:p},api_fieldVerificationList:{method:"post",url:p},api_details:{method:"post",url:g},api_workflowInfo:{method:"post",url:m},api_independentComment:{method:"post",url:n},api_approveReject:{method:"post",url:w},api_postDepartmentalData:{method:"post",url:d},api_getDepartmentalData:{method:"post",url:_},api_uploadDocumentShow:{method:"post",url:r},api_uploadDocument:{method:"post",url:c},api_verifyDocuments:{method:"post",url:u},api_documentList:{method:"post",url:r},documentBaseUrl:v},tableColumns:[{Header:"#",Cell:({row:a})=>i.jsx("div",{className:"pr-2",children:a.index+1})},{Header:`${e("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:a})=>{var o,l,s;return i.jsx("span",{children:t((o=a.row.original)==null?void 0:o.old_ward_no)=="NA"?t((l=a.row.original)==null?void 0:l.new_ward_no):t((s=a.row.original)==null?void 0:s.old_ward_no)})}},{Header:`${e("mainHoldingPage.applicationNum.label")}`,accessor:"application_no",Cell:({cell:a})=>{var o;return i.jsx("span",{children:t((o=a.row.original)==null?void 0:o.application_no)})}},{Header:`${e("mainHoldingPage.propertyApplicantNm.label")}`,accessor:"applicant_name",Cell:({cell:a})=>{var o;return i.jsx("span",{children:t((o=a.row.original)==null?void 0:o.applicant_name)})}},{Header:`${e("mainHoldingPage.propertyAppliType.label")}`,accessor:"application_type",Cell:({cell:a})=>{var o;return i.jsx("span",{children:t((o=a.row.original)==null?void 0:o.application_type)})}},{Header:`${e("mainHoldingPage.propertyApplyDate.label")}`,accessor:"application_date",Cell:({cell:a})=>{var o;return i.jsx("span",{children:t((o=a.row.original)==null?void 0:o.application_date)})}}],customTabs:null,hasBTC:!0,hasFieldVerification:!0};return i.jsx(C,{errorMsg:"Bug in PilotWorkflowIndex",children:i.jsx(b,{workflowData:h})})}export{co as default};