import{j as a,P as x,B as y,n as t,a as L,A as k}from"./index-8dee1bf7.js";function N(){const{api_postDepartmental:i,api_getDepartmentalData:o,api_fieldVerificationList:l}=L(),{api_workflowInfo:r,api_uploadSelfDocumentShow:d,api_advertInboxList:n,api_advertOutboxList:p,api_advertApplicationFullDetailById:s,api_advertEscalateApplication:u,api_advertIndependentComment:m,api_advertSpecialboxList:c,api_advertPostNextLevel:_,api_advertViewDocuments:v,api_advertUploadDocuments:w,api_advertApproveReject:f,api_advertVerifyDocument:h,api_advertBTC:A,api_advertBTCList:D}=k();return a(x,{workflowData:{api:{api_inboxList:{method:"post",url:n},api_outboxList:{method:"post",url:p},api_specialList:{method:"post",url:c},apt_btcList:{method:"post",url:D},api_fieldVerificationList:{method:"post",url:l},api_details:{method:"post",url:s},api_workflowInfo:{method:"post",url:r},api_independentComment:{method:"post",url:m},api_sendLevel:{method:"post",url:_},api_escalate:{method:"post",url:u},api_btc:{method:"post",url:A},api_approveReject:{method:"post",url:f},api_postDepartmentalData:{method:"post",url:i},api_getDepartmentalData:{method:"post",url:o},api_uploadDocumentShow:{method:"post",url:d},api_uploadDocument:{method:"post",url:w},api_verifyDocuments:{method:"post",url:h},api_documentList:{method:"post",url:v},documentBaseUrl:y},workflow:{workflowName:"Advertisement Workflow",workflowId:18,moduleId:5,fullDetailsUrl:"/advertisement/selfAdvrtApplicationDetail"},tableColumns:[{Header:"#",Cell:({row:e})=>a("div",{className:"pr-2",children:e.index+1})},{Header:"Application No.",accessor:"application_no",Cell:e=>t(e==null?void 0:e.value)},{Header:"Applicant Name",accessor:"applicant",Cell:e=>t(e==null?void 0:e.value)},{Header:"Entity Name",accessor:"entity_name",Cell:e=>t(e==null?void 0:e.value)},{Header:"Applied Date",accessor:"application_date",Cell:e=>t(e==null?void 0:e.value)},{Header:"Application Type",accessor:"application_type",Cell:({cell:e})=>a("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1 -ml-1 "+(e.row.values.application_type=="New Apply"?"bg-sky-200 text-sky-900 ":"")+(e.row.values.application_type=="Renew"?"bg-indigo-200 text-indigo-900 ":""),children:Array.from(e.row.values.application_type)[0]}),Cell:e=>t(e==null?void 0:e.value)}],customTabs:null}})}export{N as default};
