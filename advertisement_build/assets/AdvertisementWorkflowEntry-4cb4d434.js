import{u as x,j as o,n as a,P as A,A as L}from"./index-6b8e7181.js";import{P as g}from"./PilotWorkflowIndex-699f2386.js";import{B as C}from"./BackendUrlAdvt-96a22911.js";import"./index.esm-cf7b54e2.js";import"./PilotWorkflowDocumentRow-d6a0073f.js";function j(){const{t}=x(),{api_postDepartmental:l,api_getDepartmentalData:i,api_fieldVerificationList:r}=A(),{api_workflowInfo:n,api_uploadSelfDocumentShow:d,api_advertInboxList:p,api_advertOutboxList:s,api_advertApplicationFullDetailById:m,api_advertEscalateApplication:u,api_advertIndependentComment:c,api_advertSpecialboxList:_,api_advertPostNextLevel:w,api_advertViewDocuments:f,api_advertUploadDocuments:v,api_advertApproveReject:h,api_advertVerifyDocument:k,api_advertBTC:D,api_advertBTCList:b}=L(),y={api:{api_inboxList:{method:"post",url:p},api_outboxList:{method:"post",url:s},api_specialList:{method:"post",url:_},apt_btcList:{method:"post",url:b},api_fieldVerificationList:{method:"post",url:r},api_details:{method:"post",url:m},api_workflowInfo:{method:"post",url:n},api_independentComment:{method:"post",url:c},api_sendLevel:{method:"post",url:w},api_escalate:{method:"post",url:u},api_btc:{method:"post",url:D},api_approveReject:{method:"post",url:h},api_postDepartmentalData:{method:"post",url:l},api_getDepartmentalData:{method:"post",url:i},api_uploadDocumentShow:{method:"post",url:d},api_uploadDocument:{method:"post",url:v},api_verifyDocuments:{method:"post",url:k},api_documentList:{method:"post",url:f},documentBaseUrl:C},workflow:{workflowName:"Advertisement Workflow",workflowId:18,moduleId:5,fullDetailsUrl:"/advertisement/selfAdvrtApplicationDetail"},tableColumns:[{Header:"#",Cell:({row:e})=>o("div",{className:"pr-2",children:e.index+1})},{Header:`${t("workflowPage.applicationNo.label")}`,accessor:"application_no",Cell:e=>a(e==null?void 0:e.value)},{Header:`${t("workflowPage.applicantName.label")}`,accessor:"applicant",Cell:e=>a(e==null?void 0:e.value)},{Header:`${t("workflowPage.entityName.label")}`,accessor:"entity_name",Cell:e=>a(e==null?void 0:e.value)},{Header:`${t("workflowPage.entityName.label")}`,accessor:"application_date",Cell:e=>a(e==null?void 0:e.value)},{Header:`${t("workflowPage.entityName.label")}`,accessor:"application_type",Cell:({cell:e})=>o("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1 -ml-1 "+(e.row.values.application_type=="New Apply"?"bg-sky-200 text-sky-900 ":"")+(e.row.values.application_type=="Renew"?"bg-indigo-200 text-indigo-900 ":""),children:Array.from(e.row.values.application_type)[0]}),Cell:e=>a(e==null?void 0:e.value)}],customTabs:null};return o(g,{workflowData:y})}export{j as default};
