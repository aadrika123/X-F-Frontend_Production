import{u as b,j as o,n as a,F as x,P as y,A}from"./index-163e8510.js";import{B as C}from"./BackendUrlAdvt-96a22911.js";import{P}from"./PilotWorkflowIndex-6168029d.js";import"./index.esm-9232579b.js";import"./PilotWorkflowDocumentRow-92966149.js";function T(){const{t}=b(),{api_postDepartmental:i,api_getDepartmentalData:l,api_fieldVerificationList:d}=y(),{api_workflowInfo:n,api_LodgeInboxList:r,api_LodgeOutboxList:p,api_LodgeApplicationFullDetailById:s,api_LodgeEscalateApplication:m,api_LodgeIndependentComment:u,api_LodgeSpecialboxList:c,api_LodgePostNextLevel:_,api_LodgeViewDocuments:w,api_LodgeUploadDocuments:f,api_advertDocumentVerification:N,api_LodgeApproveReject:g,api_LodgeVerifyDocument:L,api_LodgeBTC:h,api_LodgeBTCList:v,api_uploadLodgeDocumentShow:D}=A(),k={api:{api_inboxList:{method:"post",url:r},api_outboxList:{method:"post",url:p},api_specialList:{method:"post",url:c},apt_btcList:{method:"post",url:v},api_fieldVerificationList:{method:"post",url:d},api_details:{method:"post",url:s},api_workflowInfo:{method:"post",url:n},api_independentComment:{method:"post",url:u},api_sendLevel:{method:"post",url:_},api_escalate:{method:"post",url:m},api_btc:{method:"post",url:h},api_approveReject:{method:"post",url:g},api_postDepartmentalData:{method:"post",url:i},api_getDepartmentalData:{method:"post",url:l},api_uploadDocumentShow:{method:"post",url:D},api_uploadDocument:{method:"post",url:f},api_verifyDocuments:{method:"post",url:L},api_documentList:{method:"post",url:w},documentBaseUrl:C},workflow:{workflowName:"Lodge Workflow",workflowId:25,moduleId:5,formUrl:"/advertisement/lodgeEdit",fullDetailsUrl:"/advertisement/lodgeApplicationDetail"},tableColumns:[{Header:"#",Cell:({row:e})=>o("div",{className:"pr-2",children:e.index+1})},{Header:`${t("marketFlowPage.applicationNo.label")}`,accessor:"application_no",Cell:e=>a(e==null?void 0:e.value)},{Header:`${t("marketFlowPage.applicantName.label")}`,accessor:"applicant",Cell:e=>a(e==null?void 0:e.value)},{Header:`${t("marketFlowPage.entityName.label")}`,accessor:"entity_name",Cell:e=>a(e==null?void 0:e.value)},{Header:`${t("workflowPage.applicationDate.label")}`,accessor:"application_date",Cell:e=>a(e==null?void 0:e.value)},{Header:`${t("workflowPage.applicationType.label")}`,accessor:"application_type",Cell:({cell:e})=>o("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1 -ml-1 "+(e.row.values.application_type=="New Apply"?"bg-sky-200 text-sky-900 ":"")+(e.row.values.application_type=="Renew"?"bg-indigo-200 text-indigo-900 ":""),children:Array.from(e.row.values.application_type)[0]}),Cell:e=>a(e==null?void 0:e.value)}]};return o(x,{children:o(P,{workflowData:k})})}export{T as default};
