import{r as a,_ as k,u as $,bv as C,k as S,N as F,a as R,w as A,l as I,m as L,o as T,j as r,bs as d,b3 as D,bQ as U,bR as E,P as M,bS as V,Y as N,bT as q}from"./index-1c655db5.js";const O=a.lazy(()=>k(()=>import("./index-1c655db5.js").then(o=>o.d4),["assets/index-1c655db5.js","assets/index-ab37097b.css"]));function W(){const{t:o}=$(),[j,G]=a.useState(),{type:i,filterParam:m,searchValueParam:n}=C(),[g,h]=a.useState(null),[w,P]=a.useState(0);S("Search Holding"),console.log("search params...",i," ",m," ",n);const{api_getWardListByLogin:K,api_filterPropertyDetails:v}=M();F();const c=R();A(),console.log("last url.......");const p=e=>{(e==null?void 0:e.filterBy)=="khataNo"?h({filteredBy:e==null?void 0:e.filterBy,khataNo:e==null?void 0:e.khataNo,plotNo:e==null?void 0:e.plotNo,maujaName:e==null?void 0:e.maujaName,isLegacy:!1}):h({filteredBy:e==null?void 0:e.filterBy,parameter:e==null?void 0:e.parameter,isLegacy:!1}),P(s=>s+1),V(`/property/search/fresh/${encodeURIComponent((e==null?void 0:e.parameter)==null||(e==null?void 0:e.parameter)==""?"direct":e==null?void 0:e.filterBy)}/${encodeURIComponent((e==null?void 0:e.parameter)==null||(e==null?void 0:e.parameter)==""?"direct":e==null?void 0:e.parameter)}`)},H=I({filterBy:L().required("This is a required field !")}),l=T({initialValues:{filterBy:"",parameter:"",khataNo:"",plotNo:"",maujaName:""},onSubmit:e=>{if(e.filterBy!="khataNo"){if(e.parameter==""){N.info("Enter any keyword...");return}}else if(!(e.khataNo!=""||e.plotNo!=""||e.maujaName!="")){N.info("Enter any keyword...");return}p(e)},validationSchema:H}),_=(e,s)=>{let t=`/holdingPropertyDetails/${s}`;q(e,t,c)},B=[{Header:`${o("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_name"},{Header:`${o("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name"},{Header:`${o("mainHoldingPage.propertyPlotNumber.label")}`,accessor:"pt_no",Cell:({cell:e})=>r.jsx("span",{children:d(e.row.original.pt_no)})},{Header:`${o("mainHoldingPage.holdingNumber.label")}`,accessor:"new_holding_no",Cell:({cell:e})=>r.jsx("span",{children:d(e.row.original.new_holding_no)})},{Header:`${o("mainHoldingPage.holdingMobileNumber.label")}`,accessor:"mobile_no",Cell:({cell:e})=>r.jsx("span",{children:d(e.row.original.mobile_no)})},{Header:`${o("mainHoldingPage.holdingAddress.label")}`,accessor:"prop_address",Cell:({cell:e})=>r.jsx("span",{children:d(e.row.original.prop_address)})},{Header:`${o("mainHoldingPage.holdingStatus.label")}`,Cell:({cell:e})=>r.jsxs("div",{children:[e.row.original.active_status===1&&r.jsx("span",{className:"text-green-400 font-semibold",children:"Active"}),e.row.original.active_status===0&&r.jsx("span",{className:"text-red-400 font-semibold",children:"Disabled"})]})},{Header:`${o("mainHoldingPage.holdingAction.label")}`,accessor:"id",Cell:({cell:e})=>r.jsx("button",{onClick:s=>_(s,e.row.values.id),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:o("mainHoldingPage.holdingView.label")})},{Header:`${o("mainHoldingPage.holdingAllmodules.label")}`,Cell:({cell:e})=>r.jsx("button",{onClick:()=>c(`/allmodules-dues/${e.row.values.id}`),className:"px-2 py-1 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:o("mainHoldingPage.holdingViewDues.label")})},{Header:`${o("mainHoldingPage.holdingGeo.label")}`,Cell:({cell:e})=>r.jsx("button",{onClick:s=>{var t,u,b,x,f,y;return c(`/geo-map/${(t=e.row.original)==null?void 0:t.latitude}/${(u=e.row.original)==null?void 0:u.longitude}/${(b=e.row.original)==null?void 0:b.new_holding_no}/${(x=e.row.original)==null?void 0:x.prop_address}/${(y=(f=e==null?void 0:e.row)==null?void 0:f.original)==null?void 0:y.id}`)},className:"px-2 py-1 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:o("mainHoldingPage.holdingGeoMap.label")})}];return a.useEffect(()=>{n!="direct"&&(l.setFieldValue("filterBy",decodeURIComponent(m)),l.setFieldValue("parameter",decodeURIComponent(n)),p({filterBy:decodeURIComponent(m),parameter:decodeURIComponent(n)}))},[]),r.jsxs(r.Fragment,{children:[(i=="re"||i=="mu")&&r.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[r.jsx(D,{className:"inline mr-2 text-3xl"}),"For ",r.jsx("span",{className:"font-semibold",children:i=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",i=="re"?"Re-Assessment":"Mutation"]}),r.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[r.jsxs("div",{className:"hidden sm:flex  ml-5 mt-2 ",children:[r.jsx("img",{src:U,alt:"",className:"w-10 h-10"}),r.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:o("mainHoldingPage.holdingPageHeadingText.label")})]}),r.jsx("form",{onSubmit:l.handleSubmit,children:r.jsxs("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[r.jsxs("div",{children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[o("mainHoldingPage.holdingFilterBy.label"),r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsxs("select",{...l.getFieldProps("filterBy"),className:"cypress_filterBy cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[r.jsx("option",{value:"",children:o("mainHoldingPage.holdingSelectBtn.label")}),r.jsx("option",{value:"ptn",children:o("mainHoldingPage.holdingPropertyTaxNum.label")}),r.jsx("option",{value:"holdingNo",children:o("mainHoldingPage.holdingNumber.label")}),r.jsx("option",{value:"ownerName",children:o("mainHoldingPage.holdingOwnersName.label")}),r.jsx("option",{value:"mobileNo",children:o("mainHoldingPage.holdingMobileNumber.label")}),r.jsx("option",{value:"address",children:o("mainHoldingPage.holdingAddress.label")}),r.jsx("option",{value:"khataNo",children:o("mainHoldingPage.propertyKhataNumber.label")})]}),r.jsx("p",{className:"text-red-500 text-xs",children:l.touched.filterBy&&l.errors.filterBy?l.errors.filterBy:null})]}),(l.values.filterBy==""||l.values.filterBy!="khataNo")&&r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[o("mainHoldingPage.holdingSearchBy.label")," ",j," ",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsx("input",{type:"text",...l.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:l.touched.parameter&&l.errors.parameter?l.errors.parameter:null})]}),l.values.filterBy=="khataNo"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:o("mainHoldingPage.propertyKhataNumber.label")}),r.jsx("input",{type:"text",...l.getFieldProps("khataNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:l.touched.khataNo&&l.errors.khataNo?l.errors.khataNo:null})]}),r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:o("mainHoldingPage.propertyPlotNumber.label")}),r.jsx("input",{type:"text",...l.getFieldProps("plotNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:l.touched.plotNo&&l.errors.plotNo?l.errors.plotNo:null})]}),r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:o("mainHoldingPage.propertyMaujaName.label")}),r.jsx("input",{type:"text",...l.getFieldProps("maujaName"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:l.touched.maujaName&&l.errors.maujaName?l.errors.maujaName:null})]})]}),r.jsx("div",{className:"mt-6",children:r.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",r.jsxs("p",{className:"flex",children:[" ",r.jsxs("span",{className:"mt-1 mr-2",children:[" ",r.jsx(E,{})," "]})," ",o("mainHoldingPage.searchHoldingRecord.label")]})]})})]})})]}),r.jsxs("div",{className:"mt-10",children:[g!=null&&r.jsx(O,{api:v,columns:B,requestBody:g,changeData:w}),r.jsx("div",{className:"w-full h-40"})]})]})}export{W as default};