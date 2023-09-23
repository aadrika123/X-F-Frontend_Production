import{u as L,k as j,Z as C,j as o,n as s,c6 as H,c5 as v,P}from"./index-1e01e27b.js";function A(){const{t}=L();j("SAF Workflow");const{api_safInboxList:r,api_safOutboxList:l,api_getsafSpecialList:i,api_safBTCList:p,api_postEscalateStatus:n,api_postComment:d,api_postApplicationToLevel:m,api_approveRejectForm:u,api_backToCitizen:c,api_getSafDetailsById:f,api_workflowInfo:_,api_verifyDocumentsSaf:w,api_postDepartmental:g,api_uploadDocument:h,api_getDepartmentalData:x,getDocumentList:y,api_uploadDocumentShow:b,api_fieldVerificationList:D}=P(),k={api:{api_inboxList:{method:"get",url:r},api_outboxList:{method:"get",url:l},api_specialList:{method:"get",url:i},apt_btcList:{method:"post",url:p},api_fieldVerificationList:{method:"post",url:D},api_details:{method:"post",url:f},api_workflowInfo:{method:"post",url:_},api_independentComment:{method:"post",url:d},api_sendLevel:{method:"post",url:m},api_escalate:{method:"post",url:n},api_btc:{method:"post",url:c},api_approveReject:{method:"post",url:u},api_postDepartmentalData:{method:"post",url:g},api_getDepartmentalData:{method:"post",url:x},api_uploadDocumentShow:{method:"post",url:b},api_uploadDocument:{method:"post",url:h},api_verifyDocuments:{method:"post",url:w},api_documentList:{method:"post",url:y},documentBaseUrl:C},workflow:{workflowName:"Saf-Workflow",departmentalPostFor:"SAF",workflowId:1,moduleId:1,formUrl:"/property/safform/bo-edit",fullEdit:"/property/safform/full-edit",fullDetailsUrl:"/property/propApplicationDetails"},tableColumns:[{Header:"#",Cell:({row:e})=>o.jsx("div",{className:"pr-2",children:e.index+1})},{Header:`${t("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_no",Cell:({cell:e})=>{var a;return o.jsx("span",{children:s((a=e.row.original)==null?void 0:a.ward_no)})}},{Header:`${t("mainHoldingPage.applicationSafNum.label")}`,accessor:"saf_no",Cell:({cell:e})=>{var a;return o.jsx("span",{children:s((a=e.row.original)==null?void 0:a.saf_no)})}},{Header:`${t("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name",Cell:({cell:e})=>{var a;return o.jsx("span",{children:s((a=e.row.original)==null?void 0:a.owner_name)})}},{Header:`${t("mainHoldingPage.holdingPropertyType.label")}`,accessor:"property_type",Cell:({cell:e})=>{var a;return o.jsx("span",{children:s((a=e.row.original)==null?void 0:a.property_type)})}},{Header:`${t("mainHoldingPage.propertyApplyDate.label")}`,accessor:"apply_date",Cell:({cell:e})=>{var a;return o.jsx("span",{children:s((a=e.row.original)==null?void 0:a.apply_date)})}},{Header:`${t("mainHoldingPage.propertyAssessType.label")}`,accessor:"assessment",Cell:({cell:e})=>o.jsx("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1  "+(e.row.values.assessment=="New Assessment"?"bg-green-200 text-green-900 ":"")+(e.row.values.assessment=="Re Assessment"?"bg-indigo-200 text-indigo-900 ":"")+(e.row.values.assessment=="Mutation"?"bg-red-200 text-red-900":""),children:Array.from(e.row.values.assessment)[0]})}],customTabs:null,hasBTC:!0,hasFieldVerification:!0};return o.jsx(H,{errorMsg:"Bug in PilotWorkflowIndex",children:o.jsx(v,{workflowData:k})})}export{A as default};
