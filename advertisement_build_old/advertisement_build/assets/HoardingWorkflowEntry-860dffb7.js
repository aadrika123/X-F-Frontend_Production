import{u as b,j as a,n as e,P as A,A as x}from"./index-dec8e078.js";import{P as C}from"./PilotWorkflowIndex-a3b6d10b.js";import{B as I}from"./BackendUrlAdvt-96a22911.js";import"./index.esm-623d5289.js";import"./PilotWorkflowDocumentRow-96d25bd6.js";function T(){const{t:o}=b(),{api_postDepartmental:i,api_getDepartmentalData:l,api_fieldVerificationList:p}=A(),{api_workflowInfo:r,api_hoardingInboxList:n,api_hoardingOutboxList:d,api_hoardingApplicationFullDetailById:s,api_hoardingEscalateApplication:m,api_hoardingIndependentComment:u,api_hoardingSpecialboxList:c,api_hoardingPostNextLevel:_,api_hoardingViewDocuments:h,api_hoardingUploadDocuments:f,api_hoardingApproveReject:w,api_hoardingVerifyDocument:g,api_hoardingBTC:D,api_hoardingBTCList:L,api_uploadHoardingDocumentShow:k}=x(),v={api:{api_inboxList:{method:"post",url:n},api_outboxList:{method:"post",url:d},api_specialList:{method:"get",url:c},apt_btcList:{method:"post",url:L},api_fieldVerificationList:{method:"post",url:p},api_details:{method:"post",url:s},api_workflowInfo:{method:"post",url:r},api_independentComment:{method:"post",url:u},api_sendLevel:{method:"post",url:_},api_escalate:{method:"post",url:m},api_btc:{method:"post",url:D},api_approveReject:{method:"post",url:w},api_postDepartmentalData:{method:"post",url:i},api_getDepartmentalData:{method:"post",url:l},api_uploadDocumentShow:{method:"post",url:k},api_uploadDocument:{method:"post",url:f},api_verifyDocuments:{method:"post",url:g},api_documentList:{method:"post",url:h},documentBaseUrl:I},workflow:{workflowName:"Advertisement Workflow",workflowId:22,moduleId:5,fullDetailsUrl:"/advertisement/hoardingApplicationDetail"},tableColumns:[{Header:"#",Cell:({row:t})=>a("div",{className:"pr-2",children:t.index+1})},{Header:`${o("workflowPage.applicationNo.label")}`,accessor:"application_no",Cell:t=>e(t==null?void 0:t.value)},{Header:`${o("workflowPage.applicationDate.label")}`,accessor:"application_date",Cell:t=>e(t==null?void 0:t.value)}],customTabs:null};return a(C,{workflowData:v})}export{T as default};
