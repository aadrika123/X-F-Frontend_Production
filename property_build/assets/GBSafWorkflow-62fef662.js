import{X as G,a as j,f as k,j as t,V as r,g as C,P as H}from"./index-da0b8a3a.js";import{P}from"./PilotWorkflowIndex-3fe44545.js";import{C as v}from"./CustomErrorBoundary-0b876425.js";/* empty css             */import"./index.esm-58a3bab5.js";import"./index.esm-3788b0dc.js";import"./PilotWorkflowDocumentRow-1edc632e.js";import"./index.esm-bbce5205.js";import"./photo-f9d7c0b5.js";import"./index.esm-7fb7f639.js";import"./SwitchBase-d94ac55c.js";import"./useFormControl-5d7d57b8.js";import"./Typography-d5ce1b8f.js";import"./TransitionGroupContext-baf388a8.js";import"./EmptyDetailsIllustration-418877b1.js";import"./notfound1-b58e95b5.js";import"./folders-c40af08a.js";import"./ApiHeader2-b363f7b8.js";import"./moment-7b387183.js";import"./BottomErrorCard-b2bbb82c.js";import"./Tabs-91170d2b.js";import"./useTheme-34e95f9c.js";function Z(){const{t:a}=G();j("GB-SAF Workflow");const{api_workflowInfo:s,api_postDepartmental:i,api_getDepartmentalData:l}=C(),{get_GbSafInbox:p,get_GbSafOutbox:n,get_GbSafSpecial:m,get_GbSafFieldVerificationList:d,get_GbSafDetailsById:u,post_GbSafEscalate:f,post_GbSafNextLevel:c,post_GbSafApprovalRejection:_,post_GbSafBackToCitizen:g,post_GbSafBtcList:b,post_GbSafComment:w,get_GbSafDocumentsToUpload:h,get_GbSafUploadedDocuments:x,post_GbSafDocumentUpload:S,post_GbSafDocVerify:y}=H(),D={api:{api_inboxList:{method:"post",url:p},api_outboxList:{method:"post",url:n},api_specialList:{method:"post",url:m},apt_btcList:{method:"post",url:b},api_fieldVerificationList:{method:"post",url:d},api_details:{method:"post",url:u},api_workflowInfo:{method:"post",url:s},api_independentComment:{method:"post",url:w},api_sendLevel:{method:"post",url:c},api_escalate:{method:"post",url:f},api_btc:{method:"post",url:g},api_approveReject:{method:"post",url:_},api_postDepartmentalData:{method:"post",url:i},api_getDepartmentalData:{method:"post",url:l},api_uploadDocumentShow:{method:"post",url:h},api_uploadDocument:{method:"post",url:S},api_verifyDocuments:{method:"post",url:y},api_documentList:{method:"post",url:x},documentBaseUrl:k},workflow:{workflowName:"Saf-Workflow",departmentalPostFor:"SAF",workflowId:4,moduleId:1,formUrl:"/property/gov-form",fullDetailsUrl:"/property/gbsaf-details"},tableColumns:[{Header:"#",Cell:({row:e})=>t.jsx("div",{className:"pr-2",children:e.index+1})},{Header:`${a("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:e})=>{var o;return t.jsx("span",{children:r((o=e.row.original)==null?void 0:o.ward_no)})}},{Header:`${a("mainHoldingPage.applicationSafNum.label")}`,accessor:"saf_no",Cell:({cell:e})=>{var o;return t.jsx("span",{children:r((o=e.row.original)==null?void 0:o.saf_no)})}},{Header:`${a("mainHoldingPage.officerNameText.label")}`,accessor:"officer_name",Cell:({cell:e})=>{var o;return t.jsx("span",{children:r((o=e.row.original)==null?void 0:o.officer_name)})}},{Header:`${a("mainHoldingPage.buildingTypeText.label")}`,accessor:"building_type",Cell:({cell:e})=>{var o;return t.jsx("span",{children:r((o=e.row.original)==null?void 0:o.building_type)})}},{Header:`${a("mainHoldingPage.propertyApplyDate.label")}`,accessor:"apply_date",Cell:({cell:e})=>{var o;return t.jsx("span",{children:r((o=e.row.original)==null?void 0:o.apply_date)})}},{Header:`${a("mainHoldingPage.propertyAssessType.label")}`,accessor:"assessment",Cell:({cell:e})=>t.jsx("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1  "+(e.row.values.assessment=="New Assessment"?"bg-green-200 text-green-900 ":"")+(e.row.values.assessment=="Re Assessment"?"bg-indigo-200 text-indigo-900 ":"")+(e.row.values.assessment=="Mutation"?"bg-red-200 text-red-900":""),children:Array.from(e.row.values.assessment)[0]})}],customTabs:null,hasBTC:!0,hasFieldVerification:!0};return t.jsx(v,{errorMsg:"Bug in PilotWorkflowIndex",children:t.jsx(P,{workflowData:D})})}export{Z as default};
