import{u as y,j as l,n as t,F as L,P as g,A}from"./index-6b8e7181.js";import{B as C}from"./BackendUrlAdvt-96a22911.js";import{P}from"./PilotWorkflowIndex-699f2386.js";import"./index.esm-cf7b54e2.js";import"./PilotWorkflowDocumentRow-d6a0073f.js";function U(){const{api_postDepartmental:o,api_getDepartmentalData:i,api_fieldVerificationList:r}=g(),{t:e}=y(),{api_workflowInfo:s,api_DharamshalaInboxList:n,api_DharamshalaOutboxList:p,api_DharamshalaApplicationFullDetailById:m,api_DharamshalaEscalateApplication:d,api_DharamshalaIndependentComment:u,api_DharamshalaSpecialboxList:h,api_DharamshalaPostNextLevel:c,api_DharamshalaViewDocuments:_,api_DharamshalaUploadDocuments:w,api_advertDocumentVerification:N,api_DharamshalaApproveReject:D,api_DharamshalaVerifyDocument:f,api_DharamshalaBTC:v,api_DharamshalaBTCList:k,api_uploadDharamshalaDocumentShow:b}=A(),x={api:{api_inboxList:{method:"post",url:n},api_outboxList:{method:"post",url:p},api_specialList:{method:"post",url:h},apt_btcList:{method:"post",url:k},api_fieldVerificationList:{method:"post",url:r},api_details:{method:"post",url:m},api_workflowInfo:{method:"post",url:s},api_independentComment:{method:"post",url:u},api_sendLevel:{method:"post",url:c},api_escalate:{method:"post",url:d},api_btc:{method:"post",url:v},api_approveReject:{method:"post",url:D},api_postDepartmentalData:{method:"post",url:o},api_getDepartmentalData:{method:"post",url:i},api_uploadDocumentShow:{method:"post",url:b},api_uploadDocument:{method:"post",url:w},api_verifyDocuments:{method:"post",url:f},api_documentList:{method:"post",url:_},documentBaseUrl:C},workflow:{workflowName:"Banquet/Marriage Workflow",workflowId:26,moduleId:5,formUrl:"/advertisement/dharamshalaEdit",fullDetailsUrl:"/advertisement/dharamshalaApplicationDetail"},tableColumns:[{Header:"#",Cell:({row:a})=>l("div",{className:"pr-2",children:a.index+1})},{Header:`${e("workflowPage.applicationNo.label")}`,accessor:"application_no",Cell:a=>t(a==null?void 0:a.value)},{Header:`${e("workflowPage.applicantName.label")}`,accessor:"applicant",Cell:a=>t(a==null?void 0:a.value)},{Header:`${e("workflowPage.entityName.label")}`,accessor:"entity_name",Cell:a=>t(a==null?void 0:a.value)},{Header:`${e("workflowPage.applicationDate.label")}`,accessor:"application_date",Cell:a=>t(a==null?void 0:a.value)},{Header:`${e("workflowPage.applicationType.label")}`,accessor:"application_type",Cell:({cell:a})=>l("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1 -ml-1 "+(a.row.values.application_type=="New Apply"?"bg-sky-200 text-sky-900 ":"")+(a.row.values.application_type=="Renew"?"bg-indigo-200 text-indigo-900 ":""),children:Array.from(a.row.values.application_type)[0]}),Cell:a=>t(a==null?void 0:a.value)}]};return l(L,{children:l(P,{workflowData:x})})}export{U as default};
