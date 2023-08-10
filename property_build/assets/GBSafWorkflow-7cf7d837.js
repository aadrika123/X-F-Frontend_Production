import{u as G,k,$ as j,j as a,bt as s,c5 as C,c4 as H,P as v,bQ as L}from"./index-c815f2b8.js";function A(){const{t}=G();k("GB-SAF Workflow");const{api_workflowInfo:l,api_postDepartmental:r,api_getDepartmentalData:i}=v(),{get_GbSafInbox:n,get_GbSafOutbox:p,get_GbSafSpecial:d,get_GbSafFieldVerificationList:m,get_GbSafDetailsById:u,post_GbSafEscalate:c,post_GbSafNextLevel:f,post_GbSafApprovalRejection:_,post_GbSafBackToCitizen:g,post_GbSafBtcList:b,post_GbSafComment:w,get_GbSafDocumentsToUpload:h,get_GbSafUploadedDocuments:x,post_GbSafDocumentUpload:S,post_GbSafDocVerify:y}=L(),D={api:{api_inboxList:{method:"post",url:n},api_outboxList:{method:"post",url:p},api_specialList:{method:"post",url:d},apt_btcList:{method:"post",url:b},api_fieldVerificationList:{method:"post",url:m},api_details:{method:"post",url:u},api_workflowInfo:{method:"post",url:l},api_independentComment:{method:"post",url:w},api_sendLevel:{method:"post",url:f},api_escalate:{method:"post",url:c},api_btc:{method:"post",url:g},api_approveReject:{method:"post",url:_},api_postDepartmentalData:{method:"post",url:r},api_getDepartmentalData:{method:"post",url:i},api_uploadDocumentShow:{method:"post",url:h},api_uploadDocument:{method:"post",url:S},api_verifyDocuments:{method:"post",url:y},api_documentList:{method:"post",url:x},documentBaseUrl:j},workflow:{workflowName:"Saf-Workflow",departmentalPostFor:"SAF",workflowId:4,moduleId:1,formUrl:"/property/gov-form",fullDetailsUrl:"/property/gbsaf-details"},tableColumns:[{Header:"#",Cell:({row:e})=>a.jsx("div",{className:"pr-2",children:e.index+1})},{Header:`${t("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:e})=>{var o;return a.jsx("span",{children:s((o=e.row.original)==null?void 0:o.ward_no)})}},{Header:`${t("mainHoldingPage.applicationSafNum.label")}`,accessor:"saf_no",Cell:({cell:e})=>{var o;return a.jsx("span",{children:s((o=e.row.original)==null?void 0:o.saf_no)})}},{Header:`${t("mainHoldingPage.officerNameText.label")}`,accessor:"officer_name",Cell:({cell:e})=>{var o;return a.jsx("span",{children:s((o=e.row.original)==null?void 0:o.officer_name)})}},{Header:`${t("mainHoldingPage.buildingTypeText.label")}`,accessor:"building_type",Cell:({cell:e})=>{var o;return a.jsx("span",{children:s((o=e.row.original)==null?void 0:o.building_type)})}},{Header:`${t("mainHoldingPage.propertyApplyDate.label")}`,accessor:"apply_date",Cell:({cell:e})=>{var o;return a.jsx("span",{children:s((o=e.row.original)==null?void 0:o.apply_date)})}},{Header:`${t("mainHoldingPage.propertyAssessType.label")}`,accessor:"assessment",Cell:({cell:e})=>a.jsx("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1  "+(e.row.values.assessment=="New Assessment"?"bg-green-200 text-green-900 ":"")+(e.row.values.assessment=="Re Assessment"?"bg-indigo-200 text-indigo-900 ":"")+(e.row.values.assessment=="Mutation"?"bg-red-200 text-red-900":""),children:Array.from(e.row.values.assessment)[0]})}],customTabs:null,hasBTC:!0,hasFieldVerification:!0};return a.jsx(C,{errorMsg:"Bug in PilotWorkflowIndex",children:a.jsx(H,{workflowData:D})})}export{A as default};
