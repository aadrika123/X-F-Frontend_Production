import{a as D,j as e,f,V as i,g as H,P as v}from"./index-362d414a.js";import{P as x}from"./PilotWorkflowIndex-02096cb3.js";/* empty css             */import"./index.esm-a4b02c48.js";import"./index.esm-ae6c44c4.js";import"./PilotWorkflowDocumentRow-3d51444f.js";import"./index.esm-ba75f336.js";import"./photo-f9d7c0b5.js";import"./index.esm-205637d7.js";import"./SwitchBase-ecf358fe.js";import"./useFormControl-ae40a4eb.js";import"./Typography-cb344ccd.js";import"./TransitionGroupContext-48d28f0a.js";import"./EmptyDetailsIllustration-f6a587bd.js";import"./notfound1-b58e95b5.js";import"./folders-c40af08a.js";import"./ApiHeader2-b363f7b8.js";import"./moment-1506feaa.js";import"./CustomErrorBoundary-fec8b628.js";import"./BottomErrorCard-70854705.js";import"./Box-ccb62fa0.js";import"./useTheme-03a6bc19.js";function q(){D("Holding Deactivation Workflow");const{post_HoldingDeactivationIndependentComment:a,api_workflowInfo:l,api_verifyDocuments:r,api_postDepartmental:n,api_getDepartmentalData:p}=H(),{get_HoldingDeactivationInbox:s,get_HoldingDeactivationOutbox:d,post_HoldingDeactivationApprovalRejection:m,get_HoldingDeactivationDetailsById:c,post_HoldingDeactivationNextLevel:_,post_HoldingDeactivationEscalate:u,get_HoldingDeactivationUploadedDocuments:g,get_HoldingDeactivationSpecial:h}=v(),w={api:{api_inboxList:{method:"post",url:s},api_outboxList:{method:"post",url:d},api_specialList:{method:"post",url:h},apt_btcList:{method:"post",url:""},api_fieldVerificationList:{method:"post",url:""},api_details:{method:"post",url:c},api_workflowInfo:{method:"post",url:l},api_independentComment:{method:"post",url:a},api_sendLevel:{method:"post",url:_},api_escalate:{method:"post",url:u},api_btc:{method:"post",url:""},api_approveReject:{method:"post",url:m},api_postDepartmentalData:{method:"post",url:n},api_getDepartmentalData:{method:"post",url:p},api_uploadDocumentShow:{method:"post",url:""},api_uploadDocument:{method:"post",url:""},api_verifyDocuments:{method:"post",url:r},api_documentList:{method:"post",url:g},documentBaseUrl:f},workflow:{workflowName:"Holding-Deactivation-Workflow",workflowId:8,moduleId:1},tableColumns:[{Header:"#",Cell:({row:t})=>e.jsx("div",{className:"pr-2",children:t.index+1})},{Header:"Owner's Name",accessor:"owner_name",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.owner_name)})}},{Header:"Application No.",accessor:"application_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.application_no)})}},{Header:"Guardian Name",accessor:"guardian_name",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.guardian_name)})}},{Header:"Holding No.",accessor:"new_holding_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.new_holding_no)})}},{Header:"Mobile No.",accessor:"mobile_no",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.mobile_no)})}},{Header:"Apply Date",accessor:"apply_date",Cell:({cell:t})=>{var o;return e.jsx("span",{children:i((o=t.row.original)==null?void 0:o.apply_date)})}}],customTabs:null,hasBTC:!1,hasFieldVerification:!1};return e.jsx(x,{workflowData:w})}export{q as default};
