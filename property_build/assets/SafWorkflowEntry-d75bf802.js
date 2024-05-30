import{Y as k,a as H,f as v,j as o,n as r,C as P,g as A}from"./index-de11cf64.js";import{P as I}from"./PilotWorkflowIndex-670de6f0.js";import"./PilotWorkflowListBox-99028a4e.js";/* empty css             */import"./index.esm-79018f61.js";import"./PilotWorkflowDocumentRow-cbc7f0e0.js";import"./index.esm-3f330c98.js";import"./photo-f9d7c0b5.js";import"./index.esm-9a7d0227.js";import"./SwitchBase-6af69788.js";import"./useFormControl-518d1517.js";import"./Typography-d6b7fa80.js";import"./useTimeout-0f598273.js";import"./EmptyDetailsIllustration-4218213f.js";import"./notfound1-b58e95b5.js";import"./moment-a15c2f59.js";import"./Tabs-3be2de7e.js";import"./react-is.production.min-0bfeef86.js";function X(){var s;const i=window.localStorage.getItem("roles"),{t}=k();H("SAF Workflow");const{api_safInboxList:l,api_safOutboxList:p,api_getsafSpecialList:n,api_safBTCList:d,api_postEscalateStatus:m,api_postComment:u,api_postApplicationToLevel:c,api_approveRejectForm:f,api_backToCitizen:_,api_getSafDetailsById:g,api_workflowInfo:h,api_verifyDocumentsSaf:w,api_postDepartmental:x,api_uploadDocument:b,api_getDepartmentalData:y,getDocumentList:D,api_uploadDocumentShow:C,api_fieldVerificationList:j,api_getJahirNamaUploadList:L,api_uploadJahirNama:N}=A(),S={api:{api_inboxList:{method:"get",url:l},api_outboxList:{method:"get",url:p},api_specialList:{method:"get",url:n},apt_btcList:{method:"post",url:d},api_fieldVerificationList:{method:"post",url:j},api_details:{method:"post",url:g},api_workflowInfo:{method:"post",url:h},api_independentComment:{method:"post",url:u},api_sendLevel:{method:"post",url:c},api_escalate:{method:"post",url:m},api_btc:{method:"post",url:_},api_approveReject:{method:"post",url:f},api_postDepartmentalData:{method:"post",url:x},api_getDepartmentalData:{method:"post",url:y},api_uploadDocumentShow:{method:"post",url:C},api_uploadDocument:{method:"post",url:b},api_verifyDocuments:{method:"post",url:w},api_documentList:{method:"post",url:D},api_getJahirNamaUploadList:{method:"post",url:L},api_uploadJahirNama:{method:"post",url:N},documentBaseUrl:v},workflow:{workflowName:"Saf-Workflow",departmentalPostFor:"SAF",workflowId:1,moduleId:1,formUrl:"/property/safform/bo-edit",fullEdit:"/property/safform/full-edit",fullDetailsUrl:"/property/propApplicationDetails"},tableColumns:[{Header:"#",Cell:({row:e})=>o.jsx("div",{className:"pr-2",children:e.index+1})},{Header:`${t("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:e})=>{var a;return o.jsx("span",{children:r((a=e.row.original)==null?void 0:a.ward_no)})}},{Header:`${t("mainHoldingPage.applicationSafNum.label")}`,accessor:"saf_no",Cell:({cell:e})=>{var a;return o.jsx("span",{children:r((a=e.row.original)==null?void 0:a.saf_no)})}},{Header:`${t("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name",Cell:({cell:e})=>{var a;return o.jsx("span",{children:r((a=e.row.original)==null?void 0:a.owner_name)})}},{Header:`${t("mainHoldingPage.holdingPropertyType.label")}`,accessor:"property_type",Cell:({cell:e})=>{var a;return o.jsx("span",{children:r((a=e.row.original)==null?void 0:a.property_type)})}},{Header:`${t("mainHoldingPage.propertyApplyDate.label")}`,accessor:"apply_date",Cell:({cell:e})=>{var a;return o.jsx("span",{children:r((a=e.row.original)==null?void 0:a.apply_date)})}},{Header:"Document Status",accessor:"doc_upload_status",Cell:({cell:e})=>{var a;return o.jsx("div",{className:"",children:((a=e.row.original)==null?void 0:a.doc_upload_status)==1?o.jsx("span",{className:"bg-green-200 text-green-900 rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-2 ",children:"Uploaded"}):o.jsx("span",{className:"rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-2  bg-red-200 text-red-900",children:"Pending"})})}},{Header:`${t("mainHoldingPage.propertyAssessType.label")}`,accessor:"assessment",Cell:({cell:e})=>o.jsx("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1  "+(e.row.values.assessment=="New Assessment"?"bg-green-200 text-green-900 ":"")+(e.row.values.assessment=="Re Assessment"?"bg-indigo-200 text-indigo-900 ":"")+(e.row.values.assessment=="Mutation"?"bg-red-200 text-red-900":""),children:Array.from(e.row.values.assessment)[0]})}],customTabs:null,hasBTC:(s=JSON.parse(i))==null?void 0:s.includes("BACK OFFICE"),hasFieldVerification:!0};return o.jsx(P,{errorMsg:"Bug in PilotWorkflowIndex",children:o.jsx(I,{workflowData:S})})}export{X as default};
