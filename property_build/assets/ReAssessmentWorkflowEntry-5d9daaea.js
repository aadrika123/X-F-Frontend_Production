import{a as L,j as o,C as b,f as j,n as a,g as k}from"./index-c7c26940.js";import{P as A}from"./PilotWorkflowIndex-6ca52ea0.js";import"./PilotWorkflowListBox-bded77bb.js";/* empty css             */import"./index.esm-cf696bfd.js";import"./PilotWorkflowDocumentRow-99c94e2b.js";import"./index.esm-77d45ea9.js";import"./photo-f9d7c0b5.js";import"./index.esm-9d067b9c.js";import"./SwitchBase-3e77e47f.js";import"./useFormControl-ab572740.js";import"./Typography-bca86928.js";import"./useTimeout-b3e9f0f1.js";import"./EmptyDetailsIllustration-4c52a149.js";import"./notfound1-b58e95b5.js";import"./moment-8f4c1c3b.js";import"./Tabs-bd65b419.js";import"./react-is.production.min-1d0dab1e.js";function G(){L("Re-Assessment Workflow");const{api_safInboxList:s,api_safOutboxList:r,api_getsafSpecialList:i,api_safBTCList:p,api_postEscalateStatus:l,api_postComment:n,api_postApplicationToLevel:m,api_approveRejectForm:d,api_backToCitizen:u,api_getSafDetailsById:c,api_workflowInfo:_,api_verifyDocumentsSaf:f,api_postDepartmental:w,api_uploadDocument:h,api_getDepartmentalData:x,getDocumentList:g,api_uploadDocumentShow:y,api_fieldVerificationList:D}=k(),C={api:{api_inboxList:{method:"get",url:s},api_outboxList:{method:"get",url:r},api_specialList:{method:"get",url:i},apt_btcList:{method:"post",url:p},api_fieldVerificationList:{method:"post",url:D},api_details:{method:"post",url:c},api_workflowInfo:{method:"post",url:_},api_independentComment:{method:"post",url:n},api_sendLevel:{method:"post",url:m},api_escalate:{method:"post",url:l},api_btc:{method:"post",url:u},api_approveReject:{method:"post",url:d},api_postDepartmentalData:{method:"post",url:w},api_getDepartmentalData:{method:"post",url:x},api_uploadDocumentShow:{method:"post",url:y},api_uploadDocument:{method:"post",url:h},api_verifyDocuments:{method:"post",url:f},api_documentList:{method:"post",url:g},documentBaseUrl:j},workflow:{workflowName:"Re-Assessment-Workflow",departmentalPostFor:"SAF",workflowId:2,moduleId:1,formUrl:"/property/safform/bo-edit",fullDetailsUrl:"/property/propApplicationDetails"},tableColumns:[{Header:"#",Cell:({row:e})=>o.jsx("div",{className:"pr-2",children:e.index+1})},{Header:"Ward No",accessor:"ward_no",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.ward_no)})}},{Header:"Saf No.",accessor:"saf_no",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.saf_no)})}},{Header:"Owner Name",accessor:"owner_name",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.owner_name)})}},{Header:"Property Type",accessor:"property_type",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.property_type)})}},{Header:"Apply Date",accessor:"apply_date",Cell:({cell:e})=>{var t;return o.jsx("span",{children:a((t=e.row.original)==null?void 0:t.apply_date)})}},{Header:"Assessment Type",accessor:"assessment",Cell:({cell:e})=>o.jsx("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1  "+(e.row.values.assessment=="New Assessment"?"bg-green-200 text-green-900 ":"")+(e.row.values.assessment=="Re Assessment"?"bg-indigo-200 text-indigo-900 ":"")+(e.row.values.assessment=="Mutation"?"bg-red-200 text-red-900":""),children:Array.from(e.row.values.assessment)[0]})}],customTabs:null,hasBTC:!0,hasFieldVerification:!0};return o.jsx(b,{errorMsg:"Bug in PilotWorkflowIndex",children:o.jsx(A,{workflowData:C})})}export{G as default};