import{a as D,j as e,f,V as a,g as H,P as v}from"./index-95732b2b.js";import{P as x}from"./PilotWorkflowIndex-25cea9c8.js";import"./MailboxSidebar-db0d367b.js";import"./PilotWorkflowListBox-e5202ead.js";/* empty css             */import"./index.esm-b9c9bb07.js";import"./index.esm-7c8879fa.js";import"./PilotWorkflowDocumentRow-96b443f5.js";import"./photo-f9d7c0b5.js";import"./SwitchBase-dc5e6779.js";import"./useFormControl-1eb274d0.js";import"./Typography-9c7763ca.js";import"./EmptyDetailsIllustration-7eabc454.js";import"./notfound1-b58e95b5.js";import"./moment-253c4293.js";import"./Tabs-12f56870.js";function U(){D("Holding Deactivation Workflow");const{post_HoldingDeactivationIndependentComment:i,api_workflowInfo:l,api_verifyDocuments:n,api_postDepartmental:r,api_getDepartmentalData:p}=H(),{get_HoldingDeactivationInbox:s,get_HoldingDeactivationOutbox:d,post_HoldingDeactivationApprovalRejection:m,get_HoldingDeactivationDetailsById:c,post_HoldingDeactivationNextLevel:_,post_HoldingDeactivationEscalate:u,get_HoldingDeactivationUploadedDocuments:g,get_HoldingDeactivationSpecial:h}=v(),w={api:{api_inboxList:{method:"post",url:s},api_outboxList:{method:"post",url:d},api_specialList:{method:"post",url:h},apt_btcList:{method:"post",url:""},api_fieldVerificationList:{method:"post",url:""},api_details:{method:"post",url:c},api_workflowInfo:{method:"post",url:l},api_independentComment:{method:"post",url:i},api_sendLevel:{method:"post",url:_},api_escalate:{method:"post",url:u},api_btc:{method:"post",url:""},api_approveReject:{method:"post",url:m},api_postDepartmentalData:{method:"post",url:r},api_getDepartmentalData:{method:"post",url:p},api_uploadDocumentShow:{method:"post",url:""},api_uploadDocument:{method:"post",url:""},api_verifyDocuments:{method:"post",url:n},api_documentList:{method:"post",url:g},documentBaseUrl:f},workflow:{workflowName:"Holding-Deactivation-Workflow",workflowId:8,moduleId:1},tableColumns:[{Header:"#",Cell:({row:t})=>e.jsx("div",{className:"pr-2",children:t.index+1})},{Header:"Owner's Name",accessor:"owner_name",Cell:({cell:t})=>{var o;return e.jsx("span",{children:a((o=t.row.original)==null?void 0:o.owner_name)})}},{Header:"Application No.",accessor:"application_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:a((o=t.row.original)==null?void 0:o.application_no)})}},{Header:"Guardian Name",accessor:"guardian_name",Cell:({cell:t})=>{var o;return e.jsx("span",{children:a((o=t.row.original)==null?void 0:o.guardian_name)})}},{Header:"Holding No.",accessor:"new_holding_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:a((o=t.row.original)==null?void 0:o.new_holding_no)})}},{Header:"Mobile No.",accessor:"mobile_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:a((o=t.row.original)==null?void 0:o.mobile_no)})}},{Header:"Apply Date",accessor:"apply_date",Cell:({cell:t})=>{var o;return e.jsx("span",{children:a((o=t.row.original)==null?void 0:o.apply_date)})}}],customTabs:null,hasBTC:!1,hasFieldVerification:!1};return e.jsx(x,{workflowData:w})}export{U as default};
