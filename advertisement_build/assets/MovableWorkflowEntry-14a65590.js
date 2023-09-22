import{u as y,r as g,c as P,a as S,b as I,d as z,e as V,Q as n,j as t,f as x,A as C,B as Z,n as c,P as B}from"./index-41a51787.js";import{P as H}from"./PilotWorkflowIndex-3ed10bb5.js";import"./index.esm-849b4564.js";import"./PilotWorkflowDocumentRow-2bb70c4d.js";import"./ApiHeader2-9c66ad2e.js";function T(l){const{t:s}=y(),{api_movableZoneSubmit:u}=C(),[k,m]=g.useState(!1),[p,w]=g.useState(),[b,f]=g.useState();console.log("applicationid",l.applicationId),console.log("workflowData",l.workflowData);const h=P({zone:S().required("This is required field")}),v={applicationId:l==null?void 0:l.applicationId,zone:""},i=I({initialValues:v,onSubmit:a=>{console.log("form values",a),f(a),_(a)},validationSchema:h}),_=a=>{r(!0),z.post(`${u}`,a,V()).then(function(o){console.log("==2 details by id response...",o.data.status),o.data.status?(w(o.data.status),d("Zone Updated Successfully","success")):(console.log("response.data.status",o.data.message),d("Update Failed","notice")),r(!1)}).catch(function(o){r(!1),console.log("==2 details by id error...",o)})};console.log("selected zone status",p),console.log("selected zone value",b);const r=a=>{m(a)},d=(a,o)=>{n.dismiss(),o=="escalated"&&n.success(a),o=="success"&&n.success(a),o=="de-escalated"&&n.warn(a),o=="notice"&&n.warn(a),o=="error"&&n.error(a)};return t("div",{className:"w-full  h-screen",children:t("form",{onSubmit:i.handleSubmit,children:t("div",{className:"grid grid-cols-1 w-full text-center",children:x("div",{className:"w-full",children:[x("h1",{className:"bg-red-100 px-4 py-1.5 rounded-sm shadow-sm text-sm",children:["👉",s("workflowPage.updateZone.label"),",👈"]}),x("select",{className:"px-2 py-1.5 border rounded w-1/3 mx-auto my-4",name:"zone",value:i.values.zone,onChange:i.handleChange,children:[t("option",{value:"",children:s("workflowPage.selectZone.label")}),t("option",{value:1,children:"A"}),t("option",{value:2,children:"B"}),t("option",{value:3,children:"C"})]}),t("p",{children:i.touched.zone&&i.errors.zone?i.errors.zone:null}),t("button",{type:"submit",className:"px-2 py-1 rounded w-1/3 mx-auto  bg-indigo-500 hover:bg-indigo-600",children:s("workflowPage.submit.label")})]})})})})}function M(){const{t:l}=y(),{api_postDepartmental:s,api_getDepartmentalData:u,api_fieldVerificationList:k}=B(),{api_workflowInfo:m,api_movableInboxList:p,api_movableOutboxList:w,api_movableApplicationFullDetailById:b,api_movableEscalateApplication:f,api_movableIndependentComment:h,api_movableSpecialboxList:v,api_movablePostNextLevel:i,api_movableViewDocuments:_,api_movableUploadDocuments:r,api_movableVerifyDocument:d,api_movableApprovedReject:a,api_movableBTC:o,api_movableBTCList:D,api_uploadVehicleDocumentShow:A}=C(),L={api:{api_inboxList:{method:"post",url:p},api_outboxList:{method:"post",url:w},api_specialList:{method:"post",url:v},apt_btcList:{method:"post",url:D},api_fieldVerificationList:{method:"post",url:k},api_details:{method:"post",url:b},api_workflowInfo:{method:"post",url:m},api_independentComment:{method:"post",url:h},api_sendLevel:{method:"post",url:i},api_escalate:{method:"post",url:f},api_btc:{method:"post",url:o},api_approveReject:{method:"post",url:a},api_postDepartmentalData:{method:"post",url:s},api_getDepartmentalData:{method:"post",url:u},api_uploadDocumentShow:{method:"post",url:A},api_uploadDocument:{method:"post",url:r},api_verifyDocuments:{method:"post",url:d},api_documentList:{method:"post",url:_},documentBaseUrl:Z},workflow:{workflowName:"Movable Workflow",workflowId:19,moduleId:5,fullDetailsUrl:"/advertisement/movableApplicationDetail"},tableColumns:[{Header:"#",Cell:({row:e})=>t("div",{className:"pr-2",children:e.index+1})},{Header:`${l("workflowPage.applicationNo.label")}`,accessor:"application_no",Cell:e=>c(e==null?void 0:e.value)},{Header:`${l("workflowPage.applicantName.label")}`,accessor:"applicant",Cell:e=>c(e==null?void 0:e.value)},{Header:`${l("workflowPage.entityName.label")}`,accessor:"entity_name",Cell:e=>c(e==null?void 0:e.value)},{Header:`${l("workflowPage.applicationDate.label")}`,accessor:"application_date",Cell:e=>c(e==null?void 0:e.value)},{Header:`${l("workflowPage.applicationType.label")}`,accessor:"application_type",Cell:({cell:e})=>t("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1 -ml-1 "+(e.row.values.application_type=="New Apply"?"bg-sky-200 text-sky-900 ":"")+(e.row.values.application_type=="Renew"?"bg-indigo-200 text-indigo-900 ":""),children:Array.from(e.row.values.application_type)[0]}),Cell:e=>c(e==null?void 0:e.value)}],customTabs:{label:"Select Zone",tabComponent:(e,N)=>t(T,{applicationId:e,workflowData:N})}};return t(H,{workflowData:L})}export{M as default};
