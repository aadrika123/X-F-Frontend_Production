import{M as L,a as j,f as k,j as t,n as r,g as H}from"./index-73cf8531.js";import{P as v}from"./PilotWorkflowIndex-b9c381ed.js";import{C as P}from"./CustomErrorBoundary-aa8896a7.js";/* empty css             */import"./index.esm-4b5a53fb.js";import"./index.esm-006a9662.js";import"./PilotWorkflowDocumentRow-450111ac.js";import"./index.esm-895212a9.js";import"./photo-f9d7c0b5.js";import"./index.esm-5a59dce8.js";import"./SwitchBase-5e33332d.js";import"./useFormControl-6c642c90.js";import"./Typography-724b73c6.js";import"./TransitionGroupContext-86882728.js";import"./index.esm-ed9dbcc9.js";import"./EmptyDetailsIllustration-757b8d41.js";import"./notfound1-b58e95b5.js";import"./index.esm-ca0a229b.js";import"./folders-c40af08a.js";import"./ApiHeader2-b363f7b8.js";import"./Styles-c08e88ac.js";import"./moment-5fb0226f.js";import"./index.esm-883297fc.js";import"./BottomErrorCard-a4f1f8b6.js";import"./Box-cccdae55.js";import"./useTheme-fdfc576c.js";function te(){const{t:a}=L();j("SAF Workflow");const{api_safInboxList:i,api_safOutboxList:s,api_getsafSpecialList:p,api_safBTCList:l,api_postEscalateStatus:n,api_postComment:m,api_postApplicationToLevel:d,api_approveRejectForm:u,api_backToCitizen:c,api_getSafDetailsById:f,api_workflowInfo:_,api_verifyDocumentsSaf:g,api_postDepartmental:w,api_uploadDocument:h,api_getDepartmentalData:x,getDocumentList:y,api_uploadDocumentShow:b,api_fieldVerificationList:D}=H(),C={api:{api_inboxList:{method:"get",url:i},api_outboxList:{method:"get",url:s},api_specialList:{method:"get",url:p},apt_btcList:{method:"post",url:l},api_fieldVerificationList:{method:"post",url:D},api_details:{method:"post",url:f},api_workflowInfo:{method:"post",url:_},api_independentComment:{method:"post",url:m},api_sendLevel:{method:"post",url:d},api_escalate:{method:"post",url:n},api_btc:{method:"post",url:c},api_approveReject:{method:"post",url:u},api_postDepartmentalData:{method:"post",url:w},api_getDepartmentalData:{method:"post",url:x},api_uploadDocumentShow:{method:"post",url:b},api_uploadDocument:{method:"post",url:h},api_verifyDocuments:{method:"post",url:g},api_documentList:{method:"post",url:y},documentBaseUrl:k},workflow:{workflowName:"Saf-Workflow",departmentalPostFor:"SAF",workflowId:1,moduleId:1,formUrl:"/property/safform/bo-edit",fullEdit:"/property/safform/full-edit",fullDetailsUrl:"/property/propApplicationDetails"},tableColumns:[{Header:"#",Cell:({row:e})=>t.jsx("div",{className:"pr-2",children:e.index+1})},{Header:`${a("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:e})=>{var o;return t.jsx("span",{children:r((o=e.row.original)==null?void 0:o.ward_no)})}},{Header:`${a("mainHoldingPage.applicationSafNum.label")}`,accessor:"saf_no",Cell:({cell:e})=>{var o;return t.jsx("span",{children:r((o=e.row.original)==null?void 0:o.saf_no)})}},{Header:`${a("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name",Cell:({cell:e})=>{var o;return t.jsx("span",{children:r((o=e.row.original)==null?void 0:o.owner_name)})}},{Header:`${a("mainHoldingPage.holdingPropertyType.label")}`,accessor:"property_type",Cell:({cell:e})=>{var o;return t.jsx("span",{children:r((o=e.row.original)==null?void 0:o.property_type)})}},{Header:`${a("mainHoldingPage.propertyApplyDate.label")}`,accessor:"apply_date",Cell:({cell:e})=>{var o;return t.jsx("span",{children:r((o=e.row.original)==null?void 0:o.apply_date)})}},{Header:`${a("mainHoldingPage.propertyAssessType.label")}`,accessor:"assessment",Cell:({cell:e})=>t.jsx("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1  "+(e.row.values.assessment=="New Assessment"?"bg-green-200 text-green-900 ":"")+(e.row.values.assessment=="Re Assessment"?"bg-indigo-200 text-indigo-900 ":"")+(e.row.values.assessment=="Mutation"?"bg-red-200 text-red-900":""),children:Array.from(e.row.values.assessment)[0]})}],customTabs:null,hasBTC:!0,hasFieldVerification:!0};return t.jsx(P,{errorMsg:"Bug in PilotWorkflowIndex",children:t.jsx(v,{workflowData:C})})}export{te as default};
