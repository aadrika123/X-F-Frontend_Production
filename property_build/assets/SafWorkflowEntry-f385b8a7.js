import{Y as P,a as B,f as I,j as a,n as r,C as T,g as F}from"./index-83222f41.js";import{P as E}from"./PilotWorkflowIndex-3925a813.js";import"./PilotWorkflowListBox-9e31f342.js";/* empty css             */import"./index.esm-b7fd4475.js";import"./PilotWorkflowDocumentRow-81a21014.js";import"./index.esm-f747ece5.js";import"./photo-f9d7c0b5.js";import"./index.esm-ad081511.js";import"./SwitchBase-7790a839.js";import"./useFormControl-aa8a2117.js";import"./Typography-beee4555.js";import"./useTimeout-4a9971fc.js";import"./EmptyDetailsIllustration-58b7560b.js";import"./notfound1-b58e95b5.js";import"./moment-33deb580.js";import"./Tabs-553c8937.js";import"./react-is.production.min-4774320f.js";function ae(){var s;const p=window.localStorage.getItem("roles"),{t:o}=P();B("SAF Workflow");const{api_safInboxList:n,api_safOutboxList:d,api_getsafSpecialList:m,api_safBTCList:u,api_postEscalateStatus:c,api_postComment:f,api_postApplicationToLevel:_,api_approveRejectForm:g,api_backToCitizen:h,api_getSafDetailsById:w,api_workflowInfo:x,api_verifyDocumentsSaf:b,api_postDepartmental:y,api_uploadDocument:C,api_getDepartmentalData:D,getDocumentList:j,api_uploadDocumentShow:L,api_fieldVerificationList:N,api_getJahirNamaUploadList:k,api_uploadJahirNama:S}=F(),A={api:{api_inboxList:{method:"get",url:n},api_outboxList:{method:"get",url:d},api_specialList:{method:"get",url:m},apt_btcList:{method:"post",url:u},api_fieldVerificationList:{method:"post",url:N},api_details:{method:"post",url:w},api_workflowInfo:{method:"post",url:x},api_independentComment:{method:"post",url:f},api_sendLevel:{method:"post",url:_},api_escalate:{method:"post",url:c},api_btc:{method:"post",url:h},api_approveReject:{method:"post",url:g},api_postDepartmentalData:{method:"post",url:y},api_getDepartmentalData:{method:"post",url:D},api_uploadDocumentShow:{method:"post",url:L},api_uploadDocument:{method:"post",url:C},api_verifyDocuments:{method:"post",url:b},api_documentList:{method:"post",url:j},api_getJahirNamaUploadList:{method:"post",url:k},api_uploadJahirNama:{method:"post",url:S},documentBaseUrl:I},workflow:{workflowName:"Saf-Workflow",departmentalPostFor:"SAF",workflowId:1,moduleId:1,formUrl:"/property/safform/bo-edit",fullEdit:"/property/safform/full-edit",fullDetailsUrl:"/property/propApplicationDetails"},tableColumns:[{Header:"#",Cell:({row:e})=>a.jsx("div",{className:"pr-2",children:e.index+1})},{Header:`${o("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:e})=>{var t;return a.jsx("span",{children:r((t=e.row.original)==null?void 0:t.ward_no)})}},{Header:`${o("mainHoldingPage.applicationSafNum.label")}`,accessor:"saf_no",Cell:({cell:e})=>{var i,l;const H=(v=>{switch(v){case 0:return"black";case 2:return"#F59E0B";case 3:return"#16A34A";case 4:return"#DC2626";default:return"inherit"}})((i=e.row.original)==null?void 0:i.jhirnama_status);return a.jsx("span",{style:{color:H},className:"font-semibold",children:r((l=e.row.original)==null?void 0:l.saf_no)})}},{Header:`${o("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name",Cell:({cell:e})=>{var t;return a.jsx("span",{children:r((t=e.row.original)==null?void 0:t.owner_name)})}},{Header:`${o("mainHoldingPage.holdingPropertyType.label")}`,accessor:"property_type",Cell:({cell:e})=>{var t;return a.jsx("span",{children:r((t=e.row.original)==null?void 0:t.property_type)})}},{Header:`${o("mainHoldingPage.propertyApplyDate.label")}`,accessor:"apply_date",Cell:({cell:e})=>{var t;return a.jsx("span",{children:r((t=e.row.original)==null?void 0:t.apply_date)})}},{Header:"Document Status",accessor:"doc_upload_status",Cell:({cell:e})=>{var t;return a.jsx("div",{className:"",children:((t=e.row.original)==null?void 0:t.doc_upload_status)==1?a.jsx("span",{className:"bg-green-200 text-green-900 rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-2 ",children:"Uploaded"}):a.jsx("span",{className:"rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-2  bg-red-200 text-red-900",children:"Pending"})})}},{Header:`${o("mainHoldingPage.propertyAssessType.label")}`,accessor:"assessment",Cell:({cell:e})=>a.jsx("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1  "+(e.row.values.assessment=="New Assessment"?"bg-green-200 text-green-900 ":"")+(e.row.values.assessment=="Re Assessment"?"bg-indigo-200 text-indigo-900 ":"")+(e.row.values.assessment=="Mutation"?"bg-red-200 text-red-900":""),children:Array.from(e.row.values.assessment)[0]})}],customTabs:null,hasBTC:(s=JSON.parse(p))==null?void 0:s.includes("BACK OFFICE"),hasFieldVerification:!0};return a.jsx(T,{errorMsg:"Bug in PilotWorkflowIndex",children:a.jsx(E,{workflowData:A})})}export{ae as default};
