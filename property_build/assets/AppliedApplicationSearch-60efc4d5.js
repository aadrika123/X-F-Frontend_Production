import{u as F,r as t,bw as A,k as I,j as a,n,O as T,l as L,m as y,o as O,a as V,S as q,bR as E,bS as W,bW as M,P as G,bT as z}from"./index-7379c390.js";function Z(){const{t:o}=F();t.useState(),t.useState(!1);const[S,b]=t.useState();t.useState();const[j,u]=t.useState(),[J,x]=t.useState(!1);t.useState(),t.useState(!1);const[_,K]=t.useState(!1),[f,P]=t.useState(null),[N,C]=t.useState(0),{filterParam:m,searchByParam:w,searchValueParam:g}=A();I(`${o("mainSearchapplicationPage.useSetTitle.label")}`);const B=[{Header:`${o("mainSearchapplicationPage.wardNo.label")}`,accessor:"old_ward_no",Cell:({cell:e})=>{var i,r,l,c,p,h;return a.jsx("span",{children:((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.new_ward_no)==""?n((c=(l=e==null?void 0:e.row)==null?void 0:l.original)==null?void 0:c.old_ward_no):n((h=(p=e==null?void 0:e.row)==null?void 0:p.original)==null?void 0:h.new_ward_no)})}},{Header:`${o("mainSearchapplicationPage.applicationNo.label")}`,accessor:"saf_no",Cell:({cell:e})=>{var i,r;return a.jsx("span",{children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.saf_no)})}},{Header:`${o("mainSearchapplicationPage.assessmentType.label")}`,accessor:"assessment_type",Cell:({cell:e})=>{var i,r;return a.jsx("span",{children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.assessment_type)})}},{Header:`${o("mainSearchapplicationPage.firstOwner.label")}`,accessor:"owner_name",Cell:({cell:e})=>{var i,r;return a.jsx("span",{children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.owner_name)})}},{Header:`${o("mainSearchapplicationPage.mobileNo.label")}`,accessor:"mobile_no",Cell:({cell:e})=>{var i,r;return a.jsx("span",{children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.mobile_no)})}},{Header:`${o("mainSearchapplicationPage.appliedby.label")}`,accessor:"appliedby",Cell:({cell:e})=>{var i,r;return a.jsx("span",{children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.appliedby)})}},{Header:`${o("mainSearchapplicationPage.currentlevel.label")}`,accessor:"current_role",Cell:({cell:e})=>{var i,r;return a.jsx("div",{className:"bg-red-200 text-black px-2 py-0.5 shadow-xl rounded-xl text-center",children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.current_role)})}},{Header:`${o("mainSearchapplicationPage.action.label")}`,accessor:"id",Cell:({cell:e})=>{var i,r;return a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>d(`/propApplicationDetails/${e.row.values.id}`),className:"mr-4 text-white bg-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-600 hover:text-white",children:o("mainSearchapplicationPage.view.label")}),((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.payment_status)==0&&a.jsx("button",{onClick:()=>d(`/viewDemand/${e.row.values.id}`),className:"ml-4 mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white",children:o("mainSearchapplicationPage.pay.label")})]})}}],$=[{Header:`${o("mainSearchapplicationPage.wardNo.label")}`,accessor:"old_ward_no",Cell:({cell:e})=>{var i,r,l,c,p,h;return a.jsx("span",{children:((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.new_ward_no)==""?n((c=(l=e==null?void 0:e.row)==null?void 0:l.original)==null?void 0:c.old_ward_no):n((h=(p=e==null?void 0:e.row)==null?void 0:p.original)==null?void 0:h.new_ward_no)})}},{Header:`${o("mainSearchapplicationPage.applicationNo.label")}`,accessor:"saf_no",Cell:({cell:e})=>{var i,r;return a.jsx("span",{children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.saf_no)})}},{Header:`${o("mainSearchapplicationPage.officername.label")}`,accessor:"officer_name",Cell:({cell:e})=>{var i,r;return a.jsx("span",{children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.officer_name)})}},{Header:`${o("mainSearchapplicationPage.assessmentType.label")}`,accessor:"assessment_type",Cell:({cell:e})=>{var i,r;return a.jsx("span",{children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.assessment_type)})}},{Header:`${o("mainSearchapplicationPage.mobileNo.label")}`,accessor:"mobile_no",Cell:({cell:e})=>{var i,r;return a.jsx("span",{children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.mobile_no)})}},{Header:`${o("mainSearchapplicationPage.applydate.label")}`,accessor:"updated_at",Cell:({cell:e})=>{var i,r;return a.jsx("span",{children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.updated_at)})}},{Header:`${o("mainSearchapplicationPage.currentlevel.label")}`,accessor:"current_role",Cell:({cell:e})=>{var i,r;return a.jsx("span",{className:"bg-red-200 text-black px-2 py-0.5 shadow-xl rounded-xl",children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.currentRole)})}},{Header:`${o("mainSearchapplicationPage.action.label")}`,accessor:"id",Cell:({cell:e})=>{var i,r;return a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>d(`/gbsaf-details/${e.row.values.id}`),className:"mr-4 text-white bg-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-600 hover:text-white",children:o("mainSearchapplicationPage.view.label")}),((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.payment_status)==0&&a.jsx("button",{onClick:()=>{var l;return d(`/viewDemand/${(l=e==null?void 0:e.row)==null?void 0:l.values.id}`)},className:"ml-4 mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white",children:o("mainSearchapplicationPage.pay.label")})]})}}],H=[{Header:`${o("mainSearchapplicationPage.wardNo.label")}`,accessor:"old_ward_no",Cell:({cell:e})=>{var i,r,l,c,p,h;return a.jsx("span",{children:((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.new_ward_no)==""?n((c=(l=e==null?void 0:e.row)==null?void 0:l.original)==null?void 0:c.old_ward_no):n((h=(p=e==null?void 0:e.row)==null?void 0:p.original)==null?void 0:h.new_ward_no)})}},{Header:`${o("mainSearchapplicationPage.applicationNo.label")}`,accessor:"application_no",Cell:({cell:e})=>{var i,r;return a.jsx("span",{children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.application_no)})}},{Header:`${o("mainSearchapplicationPage.holdingNo.label")}`,accessor:"new_holding_no",Cell:({cell:e})=>{var i,r;return a.jsx("span",{children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.new_holding_no)})}},{Header:`${o("mainSearchapplicationPage.applicantname.label")}`,accessor:"owner_name",Cell:({cell:e})=>{var i,r;return a.jsx("span",{children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.owner_name)})}},{Header:`${o("mainSearchapplicationPage.mobileNo.label")}`,accessor:"mobile_no",Cell:({cell:e})=>{var i,r;return a.jsx("span",{children:n((r=(i=e==null?void 0:e.row)==null?void 0:i.original)==null?void 0:r.mobile_no)})}},{Header:`${o("mainSearchapplicationPage.action.label")}`,accessor:"id",Cell:({cell:e})=>a.jsx("button",{onClick:()=>{s.values.filterBy=="concession"&&d(`/concession-details/${e.row.values.id}`),s.values.filterBy=="objection"&&d(`/objection-details/${e.row.values.id}`),s.values.filterBy=="harvesting"&&d(`/harvesting-details/${e.row.values.id}`),s.values.filterBy=="holdingDeactivation"&&d(`/holding-deactivatioin-details/${e.row.values.id}`)},className:"bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black",children:o("mainSearchapplicationPage.view.label")})}],{api_getWardListByLogin:Q,api_filterPropertyDetails:X,api_filterPropertyAppliedApplications:k}=G();T();const D=L({filterBy:y().required("Select filter by !"),searchBy:y().required("Select search by !"),entry:y().required("select value !")}),s=O({initialValues:{filterBy:"",searchBy:"",entry:""},onSubmit:e=>{v(e)},validationSchema:D}),d=V(),v=e=>{(e==null?void 0:e.filterBy)=="saf"?b(B):e.filterBy=="gbsaf"?b($):b(H),P({filteredBy:e==null?void 0:e.filterBy,searchBy:e==null?void 0:e.searchBy,value:e==null?void 0:e.entry}),C(i=>i+1),z(`/property/searchAppliedProperty/${encodeURIComponent(e==null?void 0:e.filterBy)}/${encodeURIComponent(e==null?void 0:e.searchBy)}/${encodeURIComponent(e==null?void 0:e.entry)}`)},R=e=>{s.values.filterBy=e.target.value,e.target.value=="holdingNo"&&(u("15 Digit Holding No"),x(!0)),e.target.value=="ownerDetails"&&(u("Owner Details"),x(!1)),e.target.value=="address"&&(u("Address"),x(!1))};t.useEffect(()=>{console.log("getting url data => ",m,w,g),g!="direct"&&(console.log("filter param ",decodeURIComponent(m)),s.setFieldValue("filterBy",decodeURIComponent(m)),s.setFieldValue("searchBy",decodeURIComponent(w)),s.setFieldValue("entry",decodeURIComponent(g)),v({filterBy:decodeURIComponent(m),searchBy:decodeURIComponent(w),entry:decodeURIComponent(g)}))},[]);const U=e=>{let i=e.target.name;e.target.value,i=="filterBy"&&R(e)};return _?a.jsx(q,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):a.jsx(a.Fragment,{children:a.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[a.jsxs("div",{className:"hidden sm:flex ml-5 mt-2 ",children:[a.jsx("img",{src:E,alt:"",className:"w-10 h-10"}),a.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:o("mainSearchapplicationPage.searchappliedapplications.label")})]}),a.jsx("form",{onSubmit:s.handleSubmit,onChange:U,children:a.jsxs("div",{className:"flex-col sm:flex-row flex justify-center sm:space-x-8 my-5 m-10",children:[a.jsxs("div",{children:[a.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[o("mainSearchapplicationPage.applicationType.label"),a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsxs("select",{...s.getFieldProps("filterBy"),className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[a.jsx("option",{value:"",children:o("mainSearchapplicationPage.select.label")}),a.jsx("option",{value:"saf",children:o("mainSearchapplicationPage.saf.label")}),a.jsx("option",{value:"gbsaf",children:o("mainSearchapplicationPage.gbsaf.label")}),a.jsx("option",{value:"concession",children:o("mainSearchapplicationPage.concession.label")}),a.jsx("option",{value:"objection",children:o("mainSearchapplicationPage.objection.label")}),a.jsx("option",{value:"harvesting",children:o("mainSearchapplicationPage.rainwaterHarvesting.label")}),a.jsx("option",{value:"holdingDeactivation",children:o("mainSearchapplicationPage.holdingDeactivation.label")})]}),a.jsx("p",{className:"text-red-500 text-xs",children:s.touched.filterBy&&s.errors.filterBy?s.errors.filterBy:null})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[o("mainSearchapplicationPage.searchby.label"),a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsxs("select",{...s.getFieldProps("searchBy"),className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[a.jsx("option",{value:"",children:o("mainSearchapplicationPage.select.label")}),a.jsx("option",{value:"applicationNo",children:o("mainSearchapplicationPage.applicationNo.label")}),a.jsx("option",{value:"name",children:o("mainSearchapplicationPage.name.label")}),a.jsx("option",{value:"mobileNo",children:o("mainSearchapplicationPage.mobileNo.label")}),a.jsx("option",{value:"holding",children:o("mainSearchapplicationPage.holdingNo.label")}),a.jsx("option",{value:"ptn",children:o("mainSearchapplicationPage.ptn.label")})]}),a.jsx("p",{className:"text-red-500 text-xs",children:s.touched.searchBy&&s.errors.searchBy?s.errors.searchBy:null})]}),a.jsxs("div",{className:"mt-5 sm:mt-0",children:[a.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[" ",o("mainSearchapplicationPage.value.label")," ",j," ",a.jsx("span",{className:"text-red-500",children:"*"})]}),a.jsx("input",{type:"text",...s.getFieldProps("entry"),className:" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),a.jsx("p",{className:"text-red-500 text-xs",children:s.touched.entry&&s.errors.entry?s.errors.entry:null})]}),a.jsx("div",{className:"mt-6",children:a.jsx("button",{type:"submit",className:"w-full border rounded-md border-indigo-500 bg-indigo-500 hover:bg-indigo-700 text-white  shadow-lg  text-base font-semibold px-5 sm:m-3 py-1",children:a.jsxs("p",{className:"flex",children:[a.jsxs("span",{className:"mt-1 mr-2",children:[a.jsx(W,{})," "]})," ",o("mainSearchapplicationPage.searchRecord.label")]})})})]})}),a.jsx("div",{className:"sm:m-10",children:f!=null&&a.jsx(M,{api:k,columns:S,requestBody:f,changeData:N})})]})})}export{Z as default};
