import{Y as A,r as l,u as D,a as I,j as r,n as s,b as L,q as T,s as y,w as V,e as q,S as O,Z as E,U as M,ag as W,g as z,$ as G}from"./index-eaca4adb.js";function X(){const{t:o}=A();l.useState(),l.useState(!1);const[S,b]=l.useState();l.useState();const[j,u]=l.useState(),[Y,x]=l.useState(!1);l.useState(),l.useState(!1);const[_,Z]=l.useState(!1),[f,N]=l.useState(null),[P,C]=l.useState(0),{filterParam:m,searchByParam:w,searchValueParam:g}=D();I(`${o("mainSearchapplicationPage.useSetTitle.label")}`);const B=[{Header:`${o("mainSearchapplicationPage.wardNo.label")}`,accessor:"old_ward_no",Cell:({cell:e})=>{var a,i,t,d,p,c;return r.jsx("span",{children:((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.new_ward_no)==""?s((d=(t=e==null?void 0:e.row)==null?void 0:t.original)==null?void 0:d.old_ward_no):s((c=(p=e==null?void 0:e.row)==null?void 0:p.original)==null?void 0:c.new_ward_no)})}},{Header:`${o("mainSearchapplicationPage.applicationNo.label")}`,accessor:"saf_no",Cell:({cell:e})=>{var a,i;return r.jsx("span",{children:s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.saf_no)})}},{Header:`${o("mainSearchapplicationPage.assessmentType.label")}`,accessor:"assessment_type",Cell:({cell:e})=>{var a,i;return r.jsx("span",{children:s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.assessment_type)})}},{Header:`${o("mainSearchapplicationPage.firstOwner.label")}`,accessor:"owner_name",Cell:({cell:e})=>{var a,i;return r.jsx("span",{children:s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.owner_name)})}},{Header:`${o("mainSearchapplicationPage.mobileNo.label")}`,accessor:"mobile_no",Cell:({cell:e})=>{var a,i;return r.jsx("span",{children:s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.mobile_no)})}},{Header:`${o("mainSearchapplicationPage.appliedby.label")}`,accessor:"appliedby",Cell:({cell:e})=>{var a,i;return r.jsx("span",{children:s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.appliedby)})}},{Header:`${o("mainSearchapplicationPage.currentlevel.label")}`,accessor:"currentRole",Cell:({cell:e})=>{var a,i;return r.jsxs("div",{className:"bg-red-200 text-black px-2 py-0.5 shadow-xl rounded-xl text-center",children:[r.jsx("span",{children:"At "}),s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.currentRole)]})}},{Header:"Status",accessor:"status",Cell:({cell:e})=>{var a,i,t,d,p,c;return r.jsx("div",{className:`capitalize ${((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.status)==="approved"?"bg-green-600 text-white rounded-md px-2 py-1 text-center":((d=(t=e==null?void 0:e.row)==null?void 0:t.original)==null?void 0:d.status)==="active"?"bg-orange-900 text-white rounded-md px-2 py-1 text-center":""}`,children:s((c=(p=e==null?void 0:e.row)==null?void 0:p.original)==null?void 0:c.status)})}},{Header:`${o("mainSearchapplicationPage.action.label")}`,accessor:"id",Cell:({cell:e})=>{var a,i;return r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>h(`/propApplicationDetails/${e.row.values.id}`),className:"mr-4 text-white bg-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-600 hover:text-white",children:o("mainSearchapplicationPage.view.label")}),((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.status)=="approved"&&r.jsx("button",{onClick:()=>h(`/amc-fam-receipt/${e.row.values.id}`),className:"ml-4 mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white",children:"Valuation Sheet"})]})}}],$=[{Header:`${o("mainSearchapplicationPage.wardNo.label")}`,accessor:"old_ward_no",Cell:({cell:e})=>{var a,i,t,d,p,c;return r.jsx("span",{children:((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.new_ward_no)==""?s((d=(t=e==null?void 0:e.row)==null?void 0:t.original)==null?void 0:d.old_ward_no):s((c=(p=e==null?void 0:e.row)==null?void 0:p.original)==null?void 0:c.new_ward_no)})}},{Header:`${o("mainSearchapplicationPage.applicationNo.label")}`,accessor:"saf_no",Cell:({cell:e})=>{var a,i;return r.jsx("span",{children:s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.saf_no)})}},{Header:`${o("mainSearchapplicationPage.officername.label")}`,accessor:"officer_name",Cell:({cell:e})=>{var a,i;return r.jsx("span",{children:s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.officer_name)})}},{Header:`${o("mainSearchapplicationPage.assessmentType.label")}`,accessor:"assessment_type",Cell:({cell:e})=>{var a,i;return r.jsx("span",{children:s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.assessment_type)})}},{Header:`${o("mainSearchapplicationPage.mobileNo.label")}`,accessor:"mobile_no",Cell:({cell:e})=>{var a,i;return r.jsx("span",{children:s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.mobile_no)})}},{Header:`${o("mainSearchapplicationPage.applydate.label")}`,accessor:"updated_at",Cell:({cell:e})=>{var a,i;return r.jsx("span",{children:s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.updated_at)})}},{Header:`${o("mainSearchapplicationPage.currentlevel.label")}`,accessor:"current_role",Cell:({cell:e})=>{var a,i;return r.jsx("span",{className:"bg-red-200 text-black px-2 py-0.5 shadow-xl rounded-xl",children:s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.currentRole)})}},{Header:`${o("mainSearchapplicationPage.action.label")}`,accessor:"id",Cell:({cell:e})=>{var a,i;return r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:()=>h(`/gbsaf-details/${e.row.values.id}`),className:"mr-4 text-white bg-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-600 hover:text-white",children:o("mainSearchapplicationPage.view.label")}),((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.payment_status)==0&&r.jsx("button",{onClick:()=>{var t;return h(`/viewDemand/${(t=e==null?void 0:e.row)==null?void 0:t.values.id}`)},className:"ml-4 mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white",children:o("mainSearchapplicationPage.pay.label")})]})}}],H=[{Header:`${o("mainSearchapplicationPage.wardNo.label")}`,accessor:"old_ward_no",Cell:({cell:e})=>{var a,i,t,d,p,c;return r.jsx("span",{children:((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.new_ward_no)==""?s((d=(t=e==null?void 0:e.row)==null?void 0:t.original)==null?void 0:d.old_ward_no):s((c=(p=e==null?void 0:e.row)==null?void 0:p.original)==null?void 0:c.new_ward_no)})}},{Header:`${o("mainSearchapplicationPage.applicationNo.label")}`,accessor:"application_no",Cell:({cell:e})=>{var a,i;return r.jsx("span",{children:s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.application_no)})}},{Header:`${o("mainSearchapplicationPage.holdingNo.label")}`,accessor:"new_holding_no",Cell:({cell:e})=>{var a,i;return r.jsx("span",{children:s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.new_holding_no)})}},{Header:`${o("mainSearchapplicationPage.applicantname.label")}`,accessor:"owner_name",Cell:({cell:e})=>{var a,i;return r.jsx("span",{children:s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.owner_name)})}},{Header:`${o("mainSearchapplicationPage.mobileNo.label")}`,accessor:"mobile_no",Cell:({cell:e})=>{var a,i;return r.jsx("span",{children:s((i=(a=e==null?void 0:e.row)==null?void 0:a.original)==null?void 0:i.mobile_no)})}},{Header:`${o("mainSearchapplicationPage.action.label")}`,accessor:"id",Cell:({cell:e})=>r.jsx("button",{onClick:()=>{n.values.filterBy=="concession"&&h(`/concession-details/${e.row.values.id}`),n.values.filterBy=="objection"&&h(`/objection-details/${e.row.values.id}`),n.values.filterBy=="harvesting"&&h(`/harvesting-details/${e.row.values.id}`),n.values.filterBy=="holdingDeactivation"&&h(`/holding-deactivatioin-details/${e.row.values.id}`)},className:"bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black",children:o("mainSearchapplicationPage.view.label")})}],{api_getWardListByLogin:J,api_filterPropertyDetails:K,api_filterPropertyAppliedApplications:R}=z();L();const U=T({filterBy:y().required("Select filter by !"),searchBy:y().required("Select search by !"),entry:y().required("select value !")}),n=V({initialValues:{filterBy:"",searchBy:"",entry:""},onSubmit:e=>{v(e)},validationSchema:U}),h=q(),v=e=>{(e==null?void 0:e.filterBy)=="saf"?b(B):e.filterBy=="gbsaf"?b($):b(H),N({filteredBy:e==null?void 0:e.filterBy,searchBy:e==null?void 0:e.searchBy,value:e==null?void 0:e.entry}),C(a=>a+1),G(`/property/searchAppliedProperty/${encodeURIComponent(e==null?void 0:e.filterBy)}/${encodeURIComponent(e==null?void 0:e.searchBy)}/${encodeURIComponent(e==null?void 0:e.entry)}`)},k=e=>{n.values.filterBy=e.target.value,e.target.value=="holdingNo"&&(u("15 Digit Holding No"),x(!0)),e.target.value=="ownerDetails"&&(u("Owner Details"),x(!1)),e.target.value=="address"&&(u("Address"),x(!1))};l.useEffect(()=>{console.log("getting url data => ",m,w,g),g!="direct"&&(console.log("filter param ",decodeURIComponent(m)),n.setFieldValue("filterBy",decodeURIComponent(m)),n.setFieldValue("searchBy",decodeURIComponent(w)),n.setFieldValue("entry",decodeURIComponent(g)),v({filterBy:decodeURIComponent(m),searchBy:decodeURIComponent(w),entry:decodeURIComponent(g)}))},[]);const F=e=>{let a=e.target.name;e.target.value,a=="filterBy"&&k(e)};return _?r.jsx(O,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):r.jsx(r.Fragment,{children:r.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[r.jsxs("div",{className:"hidden sm:flex ml-5 mt-2 ",children:[r.jsx("img",{src:E,alt:"",className:"w-10 h-10"}),r.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:o("mainSearchapplicationPage.searchappliedapplications.label")})]}),r.jsx("form",{onSubmit:n.handleSubmit,onChange:F,children:r.jsxs("div",{className:"flex-col sm:flex-row flex justify-center sm:space-x-8 my-5 m-10",children:[r.jsxs("div",{children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[o("mainSearchapplicationPage.applicationType.label"),r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsxs("select",{...n.getFieldProps("filterBy"),className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[r.jsx("option",{value:"",children:o("mainSearchapplicationPage.select.label")}),r.jsx("option",{value:"saf",children:o("mainSearchapplicationPage.saf.label")})]}),r.jsx("p",{className:"text-red-500 text-xs",children:n.touched.filterBy&&n.errors.filterBy?n.errors.filterBy:null})]}),r.jsxs("div",{children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[o("mainSearchapplicationPage.searchby.label"),r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsxs("select",{...n.getFieldProps("searchBy"),className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[r.jsx("option",{value:"",children:o("mainSearchapplicationPage.select.label")}),r.jsx("option",{value:"applicationNo",children:o("mainSearchapplicationPage.applicationNo.label")}),r.jsx("option",{value:"name",children:o("mainSearchapplicationPage.name.label")}),r.jsx("option",{value:"mobileNo",children:o("mainSearchapplicationPage.mobileNo.label")}),r.jsx("option",{value:"holding",children:o("mainSearchapplicationPage.holdingNo.label")}),r.jsx("option",{value:"ptn",children:o("mainSearchapplicationPage.ptn.label")})]}),r.jsx("p",{className:"text-red-500 text-xs",children:n.touched.searchBy&&n.errors.searchBy?n.errors.searchBy:null})]}),r.jsxs("div",{className:"mt-5 sm:mt-0",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[" ",o("mainSearchapplicationPage.value.label")," ",j," ",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsx("input",{type:"text",...n.getFieldProps("entry"),className:" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:n.touched.entry&&n.errors.entry?n.errors.entry:null})]}),r.jsx("div",{className:"mt-6",children:r.jsx("button",{type:"submit",className:"w-full border rounded-md border-indigo-500 bg-indigo-500 hover:bg-indigo-700 text-white  shadow-lg  text-base font-semibold px-5 sm:m-3 py-1",children:r.jsxs("p",{className:"flex",children:[r.jsxs("span",{className:"mt-1 mr-2",children:[r.jsx(M,{})," "]})," ",o("mainSearchapplicationPage.searchRecord.label")]})})})]})}),r.jsx("div",{className:"sm:m-10",children:f!=null&&r.jsx(W,{api:R,columns:S,requestBody:f,changeData:P})})]})})}export{X as default};