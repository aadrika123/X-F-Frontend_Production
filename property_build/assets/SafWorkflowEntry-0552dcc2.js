import{Y as H,a as N,f as v,j as a,n as r,C as A,g as P}from"./index-45e0c9da.js";import{P as I}from"./PilotWorkflowIndex-45520f4f.js";import"./PilotWorkflowListBox-a30cbd66.js";/* empty css             */import"./index.esm-6e9d14a4.js";import"./PilotWorkflowDocumentRow-c3b5edc2.js";import"./index.esm-79a4b043.js";import"./photo-f9d7c0b5.js";import"./index.esm-1dac4f41.js";import"./SwitchBase-52732381.js";import"./useFormControl-434814fc.js";import"./Typography-f385e469.js";import"./useTimeout-5e4f4d54.js";import"./EmptyDetailsIllustration-a0025dab.js";import"./notfound1-b58e95b5.js";import"./moment-8614fa85.js";import"./Tabs-67431de7.js";import"./react-is.production.min-98e63e2e.js";function X(){var i;const s=window.localStorage.getItem("roles"),{t}=H();N("SAF Workflow");const{api_safInboxList:p,api_safOutboxList:l,api_getsafSpecialList:n,api_safBTCList:m,api_postEscalateStatus:d,api_postComment:u,api_postApplicationToLevel:c,api_approveRejectForm:f,api_backToCitizen:_,api_getSafDetailsById:g,api_workflowInfo:h,api_verifyDocumentsSaf:w,api_postDepartmental:x,api_uploadDocument:y,api_getDepartmentalData:b,getDocumentList:D,api_uploadDocumentShow:C,api_fieldVerificationList:L,api_getJahirNamaUploadList:j,api_uploadJahirNama:k}=P(),S={api:{api_inboxList:{method:"get",url:p},api_outboxList:{method:"get",url:l},api_specialList:{method:"get",url:n},apt_btcList:{method:"post",url:m},api_fieldVerificationList:{method:"post",url:L},api_details:{method:"post",url:g},api_workflowInfo:{method:"post",url:h},api_independentComment:{method:"post",url:u},api_sendLevel:{method:"post",url:c},api_escalate:{method:"post",url:d},api_btc:{method:"post",url:_},api_approveReject:{method:"post",url:f},api_postDepartmentalData:{method:"post",url:x},api_getDepartmentalData:{method:"post",url:b},api_uploadDocumentShow:{method:"post",url:C},api_uploadDocument:{method:"post",url:y},api_verifyDocuments:{method:"post",url:w},api_documentList:{method:"post",url:D},api_getJahirNamaUploadList:{method:"post",url:j},api_uploadJahirNama:{method:"post",url:k},documentBaseUrl:v},workflow:{workflowName:"Saf-Workflow",departmentalPostFor:"SAF",workflowId:1,moduleId:1,formUrl:"/property/safform/bo-edit",fullEdit:"/property/safform/full-edit",fullDetailsUrl:"/property/propApplicationDetails"},tableColumns:[{Header:"#",Cell:({row:e})=>a.jsx("div",{className:"pr-2",children:e.index+1})},{Header:`${t("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:e})=>{var o;return a.jsx("span",{children:r((o=e.row.original)==null?void 0:o.ward_no)})}},{Header:`${t("mainHoldingPage.applicationSafNum.label")}`,accessor:"saf_no",Cell:({cell:e})=>{var o;return a.jsx("span",{children:r((o=e.row.original)==null?void 0:o.saf_no)})}},{Header:`${t("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name",Cell:({cell:e})=>{var o;return a.jsx("span",{children:r((o=e.row.original)==null?void 0:o.owner_name)})}},{Header:`${t("mainHoldingPage.holdingPropertyType.label")}`,accessor:"property_type",Cell:({cell:e})=>{var o;return a.jsx("span",{children:r((o=e.row.original)==null?void 0:o.property_type)})}},{Header:`${t("mainHoldingPage.propertyApplyDate.label")}`,accessor:"apply_date",Cell:({cell:e})=>{var o;return a.jsx("span",{children:r((o=e.row.original)==null?void 0:o.apply_date)})}},{Header:`${t("mainHoldingPage.propertyAssessType.label")}`,accessor:"assessment",Cell:({cell:e})=>a.jsx("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1  "+(e.row.values.assessment=="New Assessment"?"bg-green-200 text-green-900 ":"")+(e.row.values.assessment=="Re Assessment"?"bg-indigo-200 text-indigo-900 ":"")+(e.row.values.assessment=="Mutation"?"bg-red-200 text-red-900":""),children:Array.from(e.row.values.assessment)[0]})}],customTabs:null,hasBTC:(i=JSON.parse(s))==null?void 0:i.includes("BACK OFFICE"),hasFieldVerification:!0};return a.jsx(A,{errorMsg:"Bug in PilotWorkflowIndex",children:a.jsx(I,{workflowData:S})})}export{X as default};
