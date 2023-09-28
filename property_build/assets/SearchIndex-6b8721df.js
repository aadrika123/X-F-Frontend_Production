import{r as i,_ as P,u as H,bv as v,k as _,N as B,a as k,w as C,l as S,m as F,o as A,j as r,bs as t,b3 as R,bQ as $,bR as I,P as L,bS as T,Y as p,bT as D}from"./index-30cd7655.js";const U=i.lazy(()=>P(()=>import("./index-30cd7655.js").then(l=>l.dc),["assets/index-30cd7655.js","assets/index-90389bea.css"]));function O(){const{t:l}=H(),[h,E]=i.useState(),{type:o,filterParam:d,searchValueParam:n}=v(),[m,c]=i.useState(null),[u,b]=i.useState(0);_("Search Holding"),console.log("search params...",o," ",d," ",n);const{api_getWardListByLogin:M,api_filterPropertyDetails:x}=L();B();const y=k();C(),console.log("last url.......");const g=e=>{(e==null?void 0:e.filterBy)=="khataNo"?c({filteredBy:e==null?void 0:e.filterBy,khataNo:e==null?void 0:e.khataNo,plotNo:e==null?void 0:e.plotNo,maujaName:e==null?void 0:e.maujaName,isLegacy:!1}):c({filteredBy:e==null?void 0:e.filterBy,parameter:e==null?void 0:e.parameter,isLegacy:!1}),b(a=>a+1),T(`/property/search/fresh/${encodeURIComponent((e==null?void 0:e.parameter)==null||(e==null?void 0:e.parameter)==""?"direct":e==null?void 0:e.filterBy)}/${encodeURIComponent((e==null?void 0:e.parameter)==null||(e==null?void 0:e.parameter)==""?"direct":e==null?void 0:e.parameter)}`)},f=S({filterBy:F().required("This is a required field !")}),s=A({initialValues:{filterBy:"",parameter:"",khataNo:"",plotNo:"",maujaName:""},onSubmit:e=>{if(e.filterBy!="khataNo"){if(e.parameter==""){p.info("Enter any keyword...");return}}else if(!(e.khataNo!=""||e.plotNo!=""||e.maujaName!="")){p.info("Enter any keyword...");return}g(e)},validationSchema:f}),N=(e,a)=>{let w=`/holdingPropertyDetails/${a}`;D(e,w,y)},j=[{Header:`${l("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_name"},{Header:`${l("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name"},{Header:`${l("mainHoldingPage.propertyNo.label")}`,accessor:"pt_no",Cell:({cell:e})=>r.jsx("span",{children:t(e.row.original.property_no)})},{Header:`${l("mainHoldingPage.holdingNumber.label")}`,accessor:"holding_no",Cell:({cell:e})=>r.jsx("span",{children:t(e.row.original.holding_no)})},{Header:`${l("mainHoldingPage.holdingMobileNumber.label")}`,accessor:"mobile_no",Cell:({cell:e})=>r.jsx("span",{children:t(e.row.original.mobile_no)})},{Header:`${l("mainHoldingPage.holdingAddress.label")}`,accessor:"prop_address",Cell:({cell:e})=>r.jsx("span",{children:t(e.row.original.prop_address)})},{Header:`${l("mainHoldingPage.holdingStatus.label")}`,Cell:({cell:e})=>r.jsxs("div",{children:[e.row.original.paid_status===1&&r.jsx("span",{className:"text-green-900 font-semibold",children:"Fully Paid"}),e.row.original.paid_status===2&&r.jsx("span",{className:"text-yellow-500 font-semibold",children:"Arrear Paid But Current Due"}),e.row.original.paid_status===3&&r.jsx("span",{className:"text-red-600 font-semibold",children:"Arrear & Current Due"}),e.row.original.paid_status===4&&r.jsx("span",{className:"text-red-800 font-semibold",children:"Arrear Overdue"})]})},{Header:`${l("mainHoldingPage.holdingAction.label")}`,accessor:"id",Cell:({cell:e})=>r.jsx("button",{onClick:a=>N(a,e.row.values.id),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:l("mainHoldingPage.holdingView.label")})}];return i.useEffect(()=>{n!="direct"&&(s.setFieldValue("filterBy",decodeURIComponent(d)),s.setFieldValue("parameter",decodeURIComponent(n)),g({filterBy:decodeURIComponent(d),parameter:decodeURIComponent(n)}))},[]),r.jsxs(r.Fragment,{children:[(o=="re"||o=="mu")&&r.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[r.jsx(R,{className:"inline mr-2 text-3xl"}),"For ",r.jsx("span",{className:"font-semibold",children:o=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",o=="re"?"Re-Assessment":"Mutation"]}),r.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[r.jsxs("div",{className:"hidden sm:flex  ml-5 mt-2 ",children:[r.jsx("img",{src:$,alt:"",className:"w-10 h-10"}),r.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:l("mainHoldingPage.holdingPageHeadingText.label")})]}),r.jsx("form",{onSubmit:s.handleSubmit,children:r.jsxs("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[r.jsxs("div",{children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[l("mainHoldingPage.holdingFilterBy.label"),r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsxs("select",{...s.getFieldProps("filterBy"),className:"cypress_filterBy cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[r.jsx("option",{value:"",children:l("mainHoldingPage.holdingSelectBtn.label")}),r.jsx("option",{value:"propertyNo",children:l("mainHoldingPage.oldPropertyNo.label")}),r.jsx("option",{value:"ptn",children:l("mainHoldingPage.holdingPropertyTaxNum.label")}),r.jsx("option",{value:"holdingNo",children:l("mainHoldingPage.holdingNumber.label")}),r.jsx("option",{value:"ownerName",children:l("mainHoldingPage.holdingOwnersName.label")}),r.jsx("option",{value:"mobileNo",children:l("mainHoldingPage.holdingMobileNumber.label")}),r.jsx("option",{value:"address",children:l("mainHoldingPage.holdingAddress.label")}),r.jsx("option",{value:"khataNo",children:l("mainHoldingPage.propertyKhataNumber.label")})]}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.filterBy&&s.errors.filterBy?s.errors.filterBy:null})]}),(s.values.filterBy==""||s.values.filterBy!="khataNo")&&r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[l("mainHoldingPage.holdingSearchBy.label")," ",h," ",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsx("input",{type:"text",...s.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.parameter&&s.errors.parameter?s.errors.parameter:null})]}),s.values.filterBy=="khataNo"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyKhataNumber.label")}),r.jsx("input",{type:"text",...s.getFieldProps("khataNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.khataNo&&s.errors.khataNo?s.errors.khataNo:null})]}),r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyPlotNumber.label")}),r.jsx("input",{type:"text",...s.getFieldProps("plotNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.plotNo&&s.errors.plotNo?s.errors.plotNo:null})]}),r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyMaujaName.label")}),r.jsx("input",{type:"text",...s.getFieldProps("maujaName"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.maujaName&&s.errors.maujaName?s.errors.maujaName:null})]})]}),r.jsx("div",{className:"mt-6",children:r.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",r.jsxs("p",{className:"flex",children:[" ",r.jsxs("span",{className:"mt-1 mr-2",children:[" ",r.jsx(I,{})," "]})," ",l("mainHoldingPage.searchHoldingRecord.label")]})]})})]})})]}),r.jsxs("div",{className:"mt-10",children:[m!=null&&r.jsx(U,{api:x,columns:j,requestBody:m,changeData:u}),r.jsx("div",{className:"w-full h-40"})]})]})}export{O as default};