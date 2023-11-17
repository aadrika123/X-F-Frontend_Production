import{r as l,_ as P,M as v,u as L,F as B,a as _,b as S,e as k,G as C,q as F,s as $,w as H,j as r,K as c,I as A,J as R,g as I,Q as x}from"./index-73cf8531.js";import{s as D}from"./search-6298cbb5.js";import{c as M,s as U}from"./superNavigation-79150193.js";const V=l.lazy(()=>P(()=>import("./index-73cf8531.js").then(a=>a.cc),["assets/index-73cf8531.js","assets/index-721f256e.css"]));function W(){const{t:a}=v(),[p,E]=l.useState(),{type:o,filterParam:n,searchValueParam:i}=L();l.useState(!1),l.useState(),l.useState(!1),l.useContext(B),l.useState(!1);const[m,d]=l.useState(null),[h,y]=l.useState(0);_("Search Legacy Property"),console.log("search params...",o," ",n," ",i);const{api_getWardListByLogin:T,api_filterPropertyDetails:b}=I();S();const g=k();C();const u=e=>{(e==null?void 0:e.filterBy)=="khataNo"?d({filteredBy:e==null?void 0:e.filterBy,khataNo:e==null?void 0:e.khataNo,plotNo:e==null?void 0:e.plotNo,maujaName:e==null?void 0:e.maujaName,isLegacy:!0}):d({filteredBy:e==null?void 0:e.filterBy,parameter:e==null?void 0:e.parameter,isLegacy:!0}),y(t=>t+1),M(`/property/search/fresh/${encodeURIComponent((e==null?void 0:e.parameter)==null||(e==null?void 0:e.parameter)==""?"direct":e==null?void 0:e.filterBy)}/${encodeURIComponent((e==null?void 0:e.parameter)==null||(e==null?void 0:e.parameter)==""?"direct":e==null?void 0:e.parameter)}`)},f=F({filterBy:$().required("This is a required field !")}),s=H({initialValues:{filterBy:"",parameter:"",khataNo:"",plotNo:"",maujaName:""},onSubmit:e=>{if(e.filterBy!="khataNo"){if(e.parameter==""){x.info("Enter any keyword...");return}}else if(!(e.khataNo!=""||e.plotNo!=""||e.maujaName!="")){x.info("Enter any keyword...");return}u(e)},validationSchema:f}),N=(e,t)=>{let w=`/holdingPropertyDetails/${t}`;U(e,w,g)},j=[{Header:`${a("mainLegacyPage.legacyWardNo.label")}`,accessor:"ward_name"},{Header:`${a("mainLegacyPage.legacyOwnersNm.label")}`,accessor:"owner_name"},{Header:`${a("mainLegacyPage.legacyHoldNo.label")}`,accessor:"holding_no",Cell:({cell:e})=>r.jsx("span",{children:c(e.row.original.holding_no)})},{Header:`${a("mainLegacyPage.legacyMobNo.label")}`,accessor:"mobile_no",Cell:({cell:e})=>r.jsx("span",{children:c(e.row.original.mobile_no)})},{Header:`${a("mainLegacyPage.legacyAddress.label")}`,accessor:"prop_address",Cell:({cell:e})=>r.jsx("span",{children:c(e.row.original.prop_address)})},{Header:`${a("mainLegacyPage.legacyStatus.label")}`,Cell:({cell:e})=>r.jsxs("div",{children:[e.row.original.active_status===1&&r.jsx("span",{className:"text-green-400 font-semibold",children:"Active"}),e.row.original.active_status===0&&r.jsx("span",{className:"text-red-400 font-semibold",children:"Disabled"})]})},{Header:`${a("mainLegacyPage.legacyAction.label")}`,accessor:"id",Cell:({cell:e})=>r.jsx("button",{onClick:t=>N(t,e.row.values.id),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:a("mainLegacyPage.legacyViewDues.label")})},{Header:`${a("mainLegacyPage.legacyAllModules.label")}`,Cell:({cell:e})=>r.jsx("button",{onClick:()=>g(`/allmodules-dues/${e.row.values.id}`),className:"px-2 py-1 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:a("mainLegacyPage.legacyViewDues.label")})}];return l.useEffect(()=>{i!="direct"&&(s.setFieldValue("filterBy",decodeURIComponent(n)),s.setFieldValue("parameter",decodeURIComponent(i)),u({filterBy:decodeURIComponent(n),parameter:decodeURIComponent(i)}))},[]),r.jsxs(r.Fragment,{children:[(o=="re"||o=="mu")&&r.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[r.jsx(A,{className:"inline mr-2 text-3xl"}),"For ",r.jsx("span",{className:"font-semibold",children:o=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",o=="re"?"Re-Assessment":"Mutation"]}),r.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[r.jsxs("div",{className:"hidden sm:flex  ml-5 mt-2 ",children:[r.jsx("img",{src:D,alt:"",className:"w-10 h-10"}),r.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:a("mainLegacyPage.legacyHomeHeadingText.label")})]}),r.jsx("form",{onSubmit:s.handleSubmit,children:r.jsxs("div",{className:"flex flex-col sm:flex-row justify-center items-center sm:space-x-8 my-5 m-10",children:[r.jsxs("div",{children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[a("mainLegacyPage.legacyFilterBy.label"),r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsxs("select",{...s.getFieldProps("filterBy"),className:"cypress_filterBy cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[r.jsx("option",{value:"",children:a("mainLegacyPage.legacySelectBtn.label")}),r.jsx("option",{value:"holdingNo",children:a("mainLegacyPage.legacySearchHoldingNumber.label")}),r.jsx("option",{value:"ownerName",children:a("mainLegacyPage.legacySearchOwnerName.label")}),r.jsx("option",{value:"mobileNo",children:a("mainLegacyPage.legacySearchMobileNumber.label")}),r.jsx("option",{value:"address",children:a("mainLegacyPage.legacySearchAddress.label")}),r.jsx("option",{value:"khataNo",children:a("mainLegacyPage.legacySearchKhataNumber.label")})]}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.filterBy&&s.errors.filterBy?s.errors.filterBy:null})]}),(s.values.filterBy==""||s.values.filterBy!="khataNo")&&r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[a("mainLegacyPage.legacySearchBy.label")," ",p," ",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsx("input",{type:"text",...s.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.parameter&&s.errors.parameter?s.errors.parameter:null})]}),s.values.filterBy=="khataNo"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:a("mainLegacyPage.legacySearchKhataNumber.label")}),r.jsx("input",{type:"text",...s.getFieldProps("khataNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.khataNo&&s.errors.khataNo?s.errors.khataNo:null})]}),r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:a("mainLegacyPage.legacyPlotNo.label")}),r.jsx("input",{type:"text",...s.getFieldProps("plotNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.plotNo&&s.errors.plotNo?s.errors.plotNo:null})]}),r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:a("mainLegacyPage.legacyMaujaName.label")}),r.jsx("input",{type:"text",...s.getFieldProps("maujaName"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:s.touched.maujaName&&s.errors.maujaName?s.errors.maujaName:null})]})]}),r.jsx("div",{className:"mt-6",children:r.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",r.jsxs("p",{className:"flex",children:[" ",r.jsxs("span",{className:"mt-1 mr-2",children:[" ",r.jsx(R,{})," "]})," ",a("mainLegacyPage.legacySearchRecordBtn.label")]})]})})]})})]}),r.jsxs("div",{className:"mt-10",children:[m!=null&&r.jsx(V,{api:b,columns:j,requestBody:m,changeData:h}),r.jsx("div",{className:"w-full h-40"})]})]})}export{W as default};
