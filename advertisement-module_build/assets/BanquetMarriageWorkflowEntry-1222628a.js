import{u as k,j as i,n as t,F as q,P as M,A as x}from"./index-08c580bd.js";import{B as y}from"./BackendUrlAdvt-3974ad2a.js";import{P as L}from"./PilotWorkflowIndex-b65a5a24.js";import"./index.esm-e28b73eb.js";import"./PilotWorkflowDocumentRow-0e6706aa.js";function j(){const{t:e}=k(),{api_postDepartmental:o,api_getDepartmentalData:l,api_uploadDocumentShow:A,api_fieldVerificationList:r}=M(),{api_workflowInfo:n,api_BanquetMarriageInboxList:p,api_BanquetMarriageOutboxList:u,api_BanquetMarriageApplicationFullDetailById:s,api_BanquetMarriageEscalateApplication:d,api_BanquetMarriageIndependentComment:m,api_BanquetMarriageSpecialboxList:c,api_BanquetMarriagePostNextLevel:_,api_BanquetMarriageViewDocuments:w,api_BanquetMarriageUploadDocuments:f,api_BanquetMarriageVerifyDocument:g,api_BanquetMarriageApproveReject:h,api_BanquetMarriageBTC:B,api_BanquetMarriageBTCList:D,api_uploadBanquetMarriageDocumentShow:v}=x(),b={api:{api_inboxList:{method:"post",url:p},api_outboxList:{method:"post",url:u},api_specialList:{method:"post",url:c},apt_btcList:{method:"post",url:D},api_fieldVerificationList:{method:"post",url:r},api_details:{method:"post",url:s},api_workflowInfo:{method:"post",url:n},api_independentComment:{method:"post",url:m},api_sendLevel:{method:"post",url:_},api_escalate:{method:"post",url:d},api_btc:{method:"post",url:B},api_approveReject:{method:"post",url:h},api_postDepartmentalData:{method:"post",url:o},api_getDepartmentalData:{method:"post",url:l},api_uploadDocumentShow:{method:"post",url:v},api_uploadDocument:{method:"post",url:f},api_verifyDocuments:{method:"post",url:g},api_documentList:{method:"post",url:w},documentBaseUrl:y},workflow:{workflowName:"Banquet/Marriage Workflow",workflowId:23,moduleId:5,formUrl:"/advertisement/banquetMarriage",fullDetailsUrl:"/advertisement/banquetApplicationDetail"},tableColumns:[{Header:"#",Cell:({row:a})=>i("div",{className:"pr-2",children:a.index+1})},{Header:`${e("workflowPage.applicationNo.label")}`,accessor:"application_no",Cell:a=>t(a==null?void 0:a.value)},{Header:`${e("workflowPage.applicantName.label")}`,accessor:"applicant",Cell:a=>t(a==null?void 0:a.value)},{Header:`${e("workflowPage.entityName.label")}`,accessor:"entity_name",Cell:a=>t(a==null?void 0:a.value)},{Header:`${e("workflowPage.applicationDate.label")}`,accessor:"application_date",Cell:a=>t(a==null?void 0:a.value)},{Header:`${e("workflowPage.applicationType.label")}`,accessor:"application_type",Cell:({cell:a})=>i("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1 -ml-1 "+(a.row.values.application_type=="New Apply"?"bg-sky-200 text-sky-900 ":"")+(a.row.values.application_type=="Renew"?"bg-indigo-200 text-indigo-900 ":""),children:Array.from(a.row.values.application_type)[0]}),Cell:a=>t(a==null?void 0:a.value)}]};return i(q,{children:i(L,{workflowData:b})})}export{j as default};
