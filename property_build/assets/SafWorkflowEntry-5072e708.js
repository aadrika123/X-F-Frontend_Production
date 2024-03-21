import{Y as N,a as H,f as v,j as a,n as r,C as A,g as P}from"./index-c6aa66f9.js";import{P as I}from"./PilotWorkflowIndex-01d58369.js";import"./PilotWorkflowListBox-e188e876.js";/* empty css             */import"./index.esm-7f12362d.js";import"./PilotWorkflowDocumentRow-d9838944.js";import"./index.esm-800b63e1.js";import"./photo-f9d7c0b5.js";import"./index.esm-658fd36b.js";import"./SwitchBase-70de3519.js";import"./useFormControl-6a6b17dc.js";import"./Typography-20347eb8.js";import"./TransitionGroupContext-e60f7439.js";import"./EmptyDetailsIllustration-6040baa8.js";import"./notfound1-b58e95b5.js";import"./moment-cf65fc1d.js";import"./Tabs-47fdfd11.js";import"./useTheme-949e1a35.js";function X(){var s;const i=window.localStorage.getItem("roles"),{t}=N();console.log(JSON.parse(i)[0]),H("SAF Workflow");const{api_safInboxList:l,api_safOutboxList:p,api_getsafSpecialList:n,api_safBTCList:m,api_postEscalateStatus:d,api_postComment:u,api_postApplicationToLevel:c,api_approveRejectForm:f,api_backToCitizen:_,api_getSafDetailsById:g,api_workflowInfo:h,api_verifyDocumentsSaf:w,api_postDepartmental:x,api_uploadDocument:y,api_getDepartmentalData:b,getDocumentList:D,api_uploadDocumentShow:C,api_fieldVerificationList:L,api_getJahirNamaUploadList:S,api_uploadJahirNama:j}=P(),k={api:{api_inboxList:{method:"get",url:l},api_outboxList:{method:"get",url:p},api_specialList:{method:"get",url:n},apt_btcList:{method:"post",url:m},api_fieldVerificationList:{method:"post",url:L},api_details:{method:"post",url:g},api_workflowInfo:{method:"post",url:h},api_independentComment:{method:"post",url:u},api_sendLevel:{method:"post",url:c},api_escalate:{method:"post",url:d},api_btc:{method:"post",url:_},api_approveReject:{method:"post",url:f},api_postDepartmentalData:{method:"post",url:x},api_getDepartmentalData:{method:"post",url:b},api_uploadDocumentShow:{method:"post",url:C},api_uploadDocument:{method:"post",url:y},api_verifyDocuments:{method:"post",url:w},api_documentList:{method:"post",url:D},api_getJahirNamaUploadList:{method:"post",url:S},api_uploadJahirNama:{method:"post",url:j},documentBaseUrl:v},workflow:{workflowName:"Saf-Workflow",departmentalPostFor:"SAF",workflowId:1,moduleId:1,formUrl:"/property/safform/bo-edit",fullEdit:"/property/safform/full-edit",fullDetailsUrl:"/property/propApplicationDetails"},tableColumns:[{Header:"#",Cell:({row:e})=>a.jsx("div",{className:"pr-2",children:e.index+1})},{Header:`${t("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:e})=>{var o;return a.jsx("span",{children:r((o=e.row.original)==null?void 0:o.ward_no)})}},{Header:`${t("mainHoldingPage.applicationSafNum.label")}`,accessor:"saf_no",Cell:({cell:e})=>{var o;return a.jsx("span",{children:r((o=e.row.original)==null?void 0:o.saf_no)})}},{Header:`${t("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name",Cell:({cell:e})=>{var o;return a.jsx("span",{children:r((o=e.row.original)==null?void 0:o.owner_name)})}},{Header:`${t("mainHoldingPage.holdingPropertyType.label")}`,accessor:"property_type",Cell:({cell:e})=>{var o;return a.jsx("span",{children:r((o=e.row.original)==null?void 0:o.property_type)})}},{Header:`${t("mainHoldingPage.propertyApplyDate.label")}`,accessor:"apply_date",Cell:({cell:e})=>{var o;return a.jsx("span",{children:r((o=e.row.original)==null?void 0:o.apply_date)})}},{Header:`${t("mainHoldingPage.propertyAssessType.label")}`,accessor:"assessment",Cell:({cell:e})=>a.jsx("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1  "+(e.row.values.assessment=="New Assessment"?"bg-green-200 text-green-900 ":"")+(e.row.values.assessment=="Re Assessment"?"bg-indigo-200 text-indigo-900 ":"")+(e.row.values.assessment=="Mutation"?"bg-red-200 text-red-900":""),children:Array.from(e.row.values.assessment)[0]})}],customTabs:null,hasBTC:(s=JSON.parse(i))==null?void 0:s.includes("BACK OFFICE"),hasFieldVerification:!0};return a.jsx(A,{errorMsg:"Bug in PilotWorkflowIndex",children:a.jsx(I,{workflowData:k})})}export{X as default};
