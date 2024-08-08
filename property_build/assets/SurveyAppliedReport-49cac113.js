import{Y as _,r as i,u as F,au as d,b as L,q as T,s as x,w as A,e as H,a as $,j as s,n,S as R,L as k,e8 as M,U as q,aj as V,g as E}from"./index-fcf3fc3d.js";function Q(){const{t:o}=_();i.useState(),i.useState(!1);const[b,p]=i.useState();i.useState();const[O,l]=i.useState(),[Y,c]=i.useState(!1);i.useState();const[y,U]=i.useState(!1),[f,W]=i.useState(!1),[m,j]=i.useState(null),[N,w]=i.useState(0);F();let S=new Date().toLocaleDateString("in-IN"),u=d(S).format("DD-MM-YYYY");const{api_getWardListByLogin:I,api_filterPropertyDetails:z,api_filterPropertyAppliedApplications:G,api_tranferFeePaymentPendingList:J,api_getSurveyReportData:v}=E();L();const D=T({fromDate:x().required("Field Required"),uptoDate:x().required("Field Required")}),t=A({initialValues:{fromDate:d(new Date).format("yy-MM-DD"),uptoDate:d(new Date).format("yy-MM-DD"),filterBy:"",assessmentType:"",searchBy:"",entry:""},onSubmit:e=>{g(e)},validationSchema:D}),P=H();$("Survey Report");const h=[{Header:"S.No.",Cell:({row:e})=>s.jsx("div",{children:(e==null?void 0:e.index)+1}),className:"w-[5%]"},{Header:`${o("mainSearchapplicationPage.wardNo.label")}`,accessor:"old_ward_no",Cell:({cell:e})=>{var a,r;return s.jsx("span",{children:n((r=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:r.old_ward_no)})}},{Header:`${o("mainSearchapplicationPage.holdingNo.label")}`,accessor:"holding_no",Cell:({cell:e})=>{var a,r;return s.jsx("span",{children:n((r=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:r.holding_no)})}},{Header:`${o("mainSearchapplicationPage.applicationNo.label")}`,accessor:"saf_no",Cell:({cell:e})=>{var a,r;return s.jsx("span",{children:n((r=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:r.saf_no)})}},{Header:`${o("mainSearchapplicationPage.assessmentType.label")}`,accessor:"assessment_type",Cell:({cell:e})=>{var a,r;return s.jsx("span",{children:n((r=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:r.assessment_type)})}},{Header:`${o("mainSearchapplicationPage.firstOwner.label")}`,accessor:"ownername",Cell:({cell:e})=>{var a,r;return s.jsx("span",{children:n((r=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:r.ownername)})}},{Header:`${o("mainHoldingPage.holdingAddress.label")}`,accessor:"prop_address",Cell:({cell:e})=>{var a,r;return s.jsx("span",{children:n((r=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:r.prop_address)})}},{Header:`${o("mainSearchapplicationPage.mobileNo.label")}`,accessor:"mobileno",Cell:({cell:e})=>{var a,r;return s.jsx("span",{children:n((r=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:r.mobileno)})}},{Header:`${o("mainSearchapplicationPage.applydate.label")}`,accessor:"application_date",Cell:({cell:e})=>{var a,r;return s.jsx("span",{children:n((r=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:r.application_date)})}},{Header:`${o("mainSearchapplicationPage.action.label")}`,accessor:"id",Cell:({cell:e})=>s.jsx(s.Fragment,{children:s.jsx("button",{onClick:()=>P(`/propApplicationDetails/${e.row.values.id}`),className:"mr-4 text-white bg-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-600 hover:text-white",children:o("mainSearchapplicationPage.view.label")})})}],g=e=>{(e==null?void 0:e.filterBy)=="saf",p(h),j({fromDate:e==null?void 0:e.fromDate,uptoDate:e==null?void 0:e.uptoDate,applicationType:e==null?void 0:e.assessmentType,...(e==null?void 0:e.searchBy)==="applicationNo"?{applicationNo:e==null?void 0:e.entry}:"",...(e==null?void 0:e.searchBy)==="name"?{name:e==null?void 0:e.entry}:"",...(e==null?void 0:e.searchBy)==="mobileNo"?{mobileNo:e==null?void 0:e.entry}:"",...(e==null?void 0:e.searchBy)==="holding"?{holdingNo:e==null?void 0:e.entry}:""}),w(a=>a+1)},B=e=>{t.values.filterBy=e.target.value,e.target.value=="holdingNo"&&(l("15 Digit Holding No"),c(!0)),e.target.value=="ownerDetails"&&(l("Owner Details"),c(!1)),e.target.value=="address"&&(l("Address"),c(!1))};i.useEffect(()=>{},[]),i.useEffect(()=>{(async()=>{await g({filterBy:"saf",assessmentType:"",searchBy:"name",entry:""})})()},[]);const C=e=>{let a=e.target.name;e.target.value,a=="filterBy"&&B(e)};return f?s.jsx(R,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):s.jsxs(s.Fragment,{children:[y&&s.jsx(k,{}),s.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[s.jsxs("div",{className:"hidden sm:flex ml-5 mt-2 ",children:[s.jsx("img",{src:M,alt:"",className:"w-10 h-10"}),s.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:"Search Survey Applications"})]}),s.jsx("form",{onSubmit:t.handleSubmit,onChange:C,children:s.jsxs("div",{className:"grid grid-cols-3 gap-4  my-5 m-10",children:[s.jsxs("div",{className:"",children:[s.jsx("div",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:"From Date :"}),s.jsx("div",{className:"col-span-6",children:s.jsx("input",{type:"date",name:"fromDate",...t.getFieldProps("fromDate"),id:"",className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",defaultValue:u})}),s.jsx("div",{className:"col-span-12 text-end",children:t.touched.fromDate&&t.errors.fromDate&&s.jsx(s.Fragment,{children:s.jsx("span",{className:"text-red-600 text-xs",children:t.errors.fromDate})})})]}),s.jsxs("div",{className:"",children:[s.jsx("div",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:"Upto Date :"}),s.jsx("div",{className:"col-span-6",children:s.jsx("input",{type:"date",name:"uptoDate",...t.getFieldProps("uptoDate"),id:"",className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",defaultValue:u})}),s.jsx("div",{className:"col-span-12 text-end",children:t.touched.uptoDate&&t.errors.uptoDate&&s.jsx(s.Fragment,{children:s.jsx("span",{className:"text-red-600 text-xs",children:t.errors.uptoDate})})})]}),s.jsxs("div",{children:[s.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:"Assessment Type"}),s.jsxs("select",{...t.getFieldProps("assessmentType"),className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[s.jsx("option",{value:"",children:"All"}),s.jsx("option",{value:"TC",children:"Survey New "}),s.jsx("option",{value:"TC Reassesment",children:"Survey Re"})]}),s.jsx("p",{className:"text-red-500 text-xs",children:t.touched.filterBy&&t.errors.filterBy?t.errors.filterBy:null})]}),s.jsxs("div",{children:[s.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:o("mainSearchapplicationPage.searchby.label")}),s.jsxs("select",{...t.getFieldProps("searchBy"),className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[s.jsx("option",{value:"",children:o("mainSearchapplicationPage.select.label")}),s.jsx("option",{value:"applicationNo",children:o("mainSearchapplicationPage.applicationNo.label")}),s.jsx("option",{value:"name",children:o("mainSearchapplicationPage.name.label")}),s.jsx("option",{value:"mobileNo",children:o("mainSearchapplicationPage.mobileNo.label")}),s.jsx("option",{value:"holding",children:o("mainSearchapplicationPage.holdingNo.label")})]}),s.jsx("p",{className:"text-red-500 text-xs",children:t.touched.searchBy&&t.errors.searchBy?t.errors.searchBy:null})]}),s.jsxs("div",{className:"",children:[s.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:o("mainSearchapplicationPage.value.label")}),s.jsx("input",{type:"text",...t.getFieldProps("entry"),c:!0,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),s.jsx("p",{className:"text-red-500 text-xs",children:t.touched.entry&&t.errors.entry?t.errors.entry:null})]}),s.jsx("div",{className:"mt-5",children:s.jsx("button",{type:"submit",className:"w-1/2 border rounded-md border-indigo-500 bg-indigo-500 hover:bg-indigo-700 text-white  shadow-lg  text-base font-semibold px-5 sm:m-3 py-1",children:s.jsxs("p",{className:"flex",children:[s.jsxs("span",{className:"mt-1 mr-2",children:[s.jsx(q,{})," "]})," ",o("mainSearchapplicationPage.searchRecord.label")]})})})]})}),s.jsx("div",{className:"sm:m-10",children:m!=null&&s.jsx(V,{api:v,columns:b,requestBody:m,changeData:N})})]})]})}export{Q as default};
