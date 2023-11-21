import{a as L,j as t,f as b,n as a,g as j}from"./index-362d414a.js";import{P as k}from"./PilotWorkflowIndex-02096cb3.js";import{C as A}from"./CustomErrorBoundary-fec8b628.js";/* empty css             */import"./index.esm-a4b02c48.js";import"./index.esm-ae6c44c4.js";import"./PilotWorkflowDocumentRow-3d51444f.js";import"./index.esm-ba75f336.js";import"./photo-f9d7c0b5.js";import"./index.esm-205637d7.js";import"./SwitchBase-ecf358fe.js";import"./useFormControl-ae40a4eb.js";import"./Typography-cb344ccd.js";import"./TransitionGroupContext-48d28f0a.js";import"./EmptyDetailsIllustration-f6a587bd.js";import"./notfound1-b58e95b5.js";import"./folders-c40af08a.js";import"./ApiHeader2-b363f7b8.js";import"./moment-1506feaa.js";import"./BottomErrorCard-70854705.js";import"./Box-ccb62fa0.js";import"./useTheme-03a6bc19.js";function X(){L("Re-Assessment Workflow");const{api_safInboxList:s,api_safOutboxList:r,api_getsafSpecialList:i,api_safBTCList:p,api_postEscalateStatus:l,api_postComment:n,api_postApplicationToLevel:m,api_approveRejectForm:d,api_backToCitizen:u,api_getSafDetailsById:c,api_workflowInfo:_,api_verifyDocumentsSaf:f,api_postDepartmental:w,api_uploadDocument:h,api_getDepartmentalData:x,getDocumentList:g,api_uploadDocumentShow:y,api_fieldVerificationList:D}=j(),C={api:{api_inboxList:{method:"get",url:s},api_outboxList:{method:"get",url:r},api_specialList:{method:"get",url:i},apt_btcList:{method:"post",url:p},api_fieldVerificationList:{method:"post",url:D},api_details:{method:"post",url:c},api_workflowInfo:{method:"post",url:_},api_independentComment:{method:"post",url:n},api_sendLevel:{method:"post",url:m},api_escalate:{method:"post",url:l},api_btc:{method:"post",url:u},api_approveReject:{method:"post",url:d},api_postDepartmentalData:{method:"post",url:w},api_getDepartmentalData:{method:"post",url:x},api_uploadDocumentShow:{method:"post",url:y},api_uploadDocument:{method:"post",url:h},api_verifyDocuments:{method:"post",url:f},api_documentList:{method:"post",url:g},documentBaseUrl:b},workflow:{workflowName:"Re-Assessment-Workflow",departmentalPostFor:"SAF",workflowId:2,moduleId:1,formUrl:"/property/safform/bo-edit",fullDetailsUrl:"/property/propApplicationDetails"},tableColumns:[{Header:"#",Cell:({row:e})=>t.jsx("div",{className:"pr-2",children:e.index+1})},{Header:"Ward No",accessor:"ward_no",Cell:({cell:e})=>{var o;return t.jsx("span",{children:a((o=e.row.original)==null?void 0:o.ward_no)})}},{Header:"Saf No.",accessor:"saf_no",Cell:({cell:e})=>{var o;return t.jsx("span",{children:a((o=e.row.original)==null?void 0:o.saf_no)})}},{Header:"Owner Name",accessor:"owner_name",Cell:({cell:e})=>{var o;return t.jsx("span",{children:a((o=e.row.original)==null?void 0:o.owner_name)})}},{Header:"Property Type",accessor:"property_type",Cell:({cell:e})=>{var o;return t.jsx("span",{children:a((o=e.row.original)==null?void 0:o.property_type)})}},{Header:"Apply Date",accessor:"apply_date",Cell:({cell:e})=>{var o;return t.jsx("span",{children:a((o=e.row.original)==null?void 0:o.apply_date)})}},{Header:"Assessment Type",accessor:"assessment",Cell:({cell:e})=>t.jsx("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1  "+(e.row.values.assessment=="New Assessment"?"bg-green-200 text-green-900 ":"")+(e.row.values.assessment=="Re Assessment"?"bg-indigo-200 text-indigo-900 ":"")+(e.row.values.assessment=="Mutation"?"bg-red-200 text-red-900":""),children:Array.from(e.row.values.assessment)[0]})}],customTabs:null,hasBTC:!0,hasFieldVerification:!0};return t.jsx(A,{errorMsg:"Bug in PilotWorkflowIndex",children:t.jsx(k,{workflowData:C})})}export{X as default};
