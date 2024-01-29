import{u as P,r as c,c as D,a as N,b as z,d as S,Q as n,j as o,f as k,A as C,n as u,P as I}from"./index-ab25c65c.js";import{P as T}from"./PilotWorkflowIndex-ec95a88a.js";import{A as B}from"./ApiHeader2-9c66ad2e.js";import{B as H}from"./BackendUrlAdvt-96a22911.js";import"./index.esm-cbd70cb7.js";import"./PilotWorkflowDocumentRow-2fca94f8.js";function V(l){const{t:s}=P(),{api_PrivateLandZoneSubmit:f}=C(),[x,h]=c.useState(!1),[w,p]=c.useState(),[v,_]=c.useState(),[r,b]=c.useState(0);console.log("applicationid",l.applicationId);const L=D({zone:N().required("This is required field")}),g={applicationId:l==null?void 0:l.applicationId,zone:""},i=z({initialValues:g,onSubmit:t=>{b(r+1),console.log("form values",t),_(t),y(t)},validationSchema:L});c.useEffect(()=>{console.log("dummyState's state has updated to: "+r)},[r]);const y=t=>{d(!0),S.post(`${f}`,t,B()).then(function(a){console.log("==2 details by id response...1==",a.data.data.zone),p(a.data.data.zone),a.data.status?(p(a.data.data.zone),m("Zone Updated Successfully","success")):(console.log("response.data.status",a.data.message),m("Update Failed","notice")),d(!1)}).catch(function(a){d(!1),console.log("==2 details by id error...",a)})};console.log("selected zone status",w),console.log("selected zone value",v);const d=t=>{h(t)},m=(t,a)=>{n.dismiss(),a=="escalated"&&n.success(t),a=="success"&&n.success(t),a=="de-escalated"&&n.warn(t),a=="notice"&&n.warn(t),a=="error"&&n.error(t)};return o("div",{className:"w-full  h-screen",children:o("form",{onSubmit:i.handleSubmit,children:o("div",{className:"grid grid-cols-1 w-full text-center",children:k("div",{className:"w-full",children:[o("h1",{className:"py-2 px-2 border-b",children:s("workflowPage.updateZone.label")}),k("select",{className:"px-2 py-1.5 border rounded w-1/3 mx-auto my-4",name:"zone",value:i.values.zone,onChange:i.handleChange,children:[o("option",{value:"",children:s("workflowPage.selectZone.label")}),o("option",{value:1,children:"A"}),o("option",{value:2,children:"B"}),o("option",{value:3,children:"C"})]}),o("p",{children:i.touched.zone&&i.errors.zone?i.errors.zone:null}),o("button",{type:"submit",className:"px-2 py-1 rounded w-1/3 mx-auto  bg-violet-500 hover:bg-violet-600",children:s("workflowPage.submit.label")})]})})})})}function W(){const{t:l}=P(),{api_postDepartmental:s,api_getDepartmentalData:f,api_fieldVerificationList:x}=I(),{api_workflowInfo:h,api_privateLandInboxList:w,api_privateLandOutboxList:p,api_privateLandApplicationFullDetailById:v,api_privateLandEscalateApplication:_,api_advertIndependentComment:r,api_privateLandSpecialboxList:b,api_privateLandPostNextLevel:L,api_privateLandViewDocuments:g,api_advertUploadDocuments:i,api_PrivateLandApproveReject:y,api_PrivateLandVerifyDocument:d,api_PrivateLandBTC:m,api_PrivateLandBTCList:t,api_uploadLandDocumentShow:a}=C(),A={api:{api_inboxList:{method:"post",url:w},api_outboxList:{method:"post",url:p},api_specialList:{method:"post",url:b},apt_btcList:{method:"post",url:t},api_fieldVerificationList:{method:"post",url:x},api_details:{method:"post",url:v},api_workflowInfo:{method:"post",url:h},api_independentComment:{method:"post",url:r},api_sendLevel:{method:"post",url:L},api_escalate:{method:"post",url:_},api_btc:{method:"post",url:m},api_approveReject:{method:"post",url:y},api_postDepartmentalData:{method:"post",url:s},api_getDepartmentalData:{method:"post",url:f},api_uploadDocumentShow:{method:"post",url:a},api_uploadDocument:{method:"post",url:i},api_verifyDocuments:{method:"post",url:d},api_documentList:{method:"post",url:g},documentBaseUrl:H},workflow:{workflowName:"Advertisement Workflow",workflowId:21,moduleId:5,fullDetailsUrl:"/advertisement/privateLandApplicationDetail"},tableColumns:[{Header:"#",Cell:({row:e})=>o("div",{className:"pr-2",children:e.index+1})},{Header:`${l("workflowPage.applicationNo.label")}`,accessor:"application_no",Cell:e=>u(e==null?void 0:e.value)},{Header:`${l("workflowPage.applicantName.label")}`,accessor:"applicant",Cell:e=>u(e==null?void 0:e.value)},{Header:`${l("workflowPage.entityName.label")}`,accessor:"entity_name",Cell:e=>u(e==null?void 0:e.value)},{Header:`${l("workflowPage.applicationDate.label")}`,accessor:"application_date",Cell:e=>u(e==null?void 0:e.value)},{Header:`${l("workflowPage.applicationType.label")}`,accessor:"application_type",Cell:({cell:e})=>o("div",{className:" rounded-full shadow-lg h-7 mx-auto w-7 font-semibold text-center py-1 text-sm px-1 -ml-1 "+(e.row.values.application_type=="New Apply"?"bg-sky-200 text-sky-900 ":"")+(e.row.values.application_type=="Renew"?"bg-indigo-200 text-indigo-900 ":""),children:Array.from(e.row.values.application_type)[0]}),Cell:e=>u(e==null?void 0:e.value)}],customTabs:{label:"Custom Tab",tabComponent:e=>o(V,{applicationId:e})}};return o(T,{workflowData:A})}export{W as default};