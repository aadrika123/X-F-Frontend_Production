import{r as l,_ as P,X as v,u as L,I as B,a as _,b as S,e as k,J as C,q as F,s as $,w as H,j as r,V as c,L as A,Y as R,O as I,g as D,Z as V,Q as x,W as U}from"./index-163ed82f.js";const E=l.lazy(()=>P(()=>import("./index-163ed82f.js").then(s=>s.cW),["assets/index-163ed82f.js","assets/index-80e83f1b.css"]));function O(){const{t:s}=v(),[h,M]=l.useState(),{type:o,filterParam:n,searchValueParam:i}=L();l.useState(!1),l.useState(),l.useState(!1),l.useContext(B),l.useState(!1);const[m,d]=l.useState(null),[p,y]=l.useState(0);_("Search Legacy Property"),console.log("search params...",o," ",n," ",i);const{api_getWardListByLogin:T,api_filterPropertyDetails:b}=D();S();const g=k();C();const u=e=>{(e==null?void 0:e.filterBy)=="khataNo"?d({filteredBy:e==null?void 0:e.filterBy,khataNo:e==null?void 0:e.khataNo,plotNo:e==null?void 0:e.plotNo,maujaName:e==null?void 0:e.maujaName,isLegacy:!0}):d({filteredBy:e==null?void 0:e.filterBy,parameter:e==null?void 0:e.parameter,isLegacy:!0}),y(t=>t+1),V(`/property/search/fresh/${encodeURIComponent((e==null?void 0:e.parameter)==null||(e==null?void 0:e.parameter)==""?"direct":e==null?void 0:e.filterBy)}/${encodeURIComponent((e==null?void 0:e.parameter)==null||(e==null?void 0:e.parameter)==""?"direct":e==null?void 0:e.parameter)}`)},f=F({filterBy:$().required("This is a required field !")}),a=H({initialValues:{filterBy:"",parameter:"",khataNo:"",plotNo:"",maujaName:""},onSubmit:e=>{if(e.filterBy!="khataNo"){if(e.parameter==""){x.info("Enter any keyword...");return}}else if(!(e.khataNo!=""||e.plotNo!=""||e.maujaName!="")){x.info("Enter any keyword...");return}u(e)},validationSchema:f}),N=(e,t)=>{let w=`/holdingPropertyDetails/${t}`;U(e,w,g)},j=[{Header:`${s("mainLegacyPage.legacyWardNo.label")}`,accessor:"ward_name"},{Header:`${s("mainLegacyPage.legacyOwnersNm.label")}`,accessor:"owner_name"},{Header:`${s("mainLegacyPage.legacyHoldNo.label")}`,accessor:"holding_no",Cell:({cell:e})=>r.jsx("span",{children:c(e.row.original.holding_no)})},{Header:`${s("mainLegacyPage.legacyMobNo.label")}`,accessor:"mobile_no",Cell:({cell:e})=>r.jsx("span",{children:c(e.row.original.mobile_no)})},{Header:`${s("mainLegacyPage.legacyAddress.label")}`,accessor:"prop_address",Cell:({cell:e})=>r.jsx("span",{children:c(e.row.original.prop_address)})},{Header:`${s("mainLegacyPage.legacyStatus.label")}`,Cell:({cell:e})=>r.jsxs("div",{children:[e.row.original.active_status===1&&r.jsx("span",{className:"text-green-400 font-semibold",children:"Active"}),e.row.original.active_status===0&&r.jsx("span",{className:"text-red-400 font-semibold",children:"Disabled"})]})},{Header:`${s("mainLegacyPage.legacyAction.label")}`,accessor:"id",Cell:({cell:e})=>r.jsx("button",{onClick:t=>N(t,e.row.values.id),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:s("mainLegacyPage.legacyViewDues.label")})},{Header:`${s("mainLegacyPage.legacyAllModules.label")}`,Cell:({cell:e})=>r.jsx("button",{onClick:()=>g(`/allmodules-dues/${e.row.values.id}`),className:"px-2 py-1 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:s("mainLegacyPage.legacyViewDues.label")})}];return l.useEffect(()=>{i!="direct"&&(a.setFieldValue("filterBy",decodeURIComponent(n)),a.setFieldValue("parameter",decodeURIComponent(i)),u({filterBy:decodeURIComponent(n),parameter:decodeURIComponent(i)}))},[]),r.jsxs(r.Fragment,{children:[(o=="re"||o=="mu")&&r.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[r.jsx(A,{className:"inline mr-2 text-3xl"}),"For ",r.jsx("span",{className:"font-semibold",children:o=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",o=="re"?"Re-Assessment":"Mutation"]}),r.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[r.jsxs("div",{className:"hidden sm:flex  ml-5 mt-2 ",children:[r.jsx("img",{src:R,alt:"",className:"w-10 h-10"}),r.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:s("mainLegacyPage.legacyHomeHeadingText.label")})]}),r.jsx("form",{onSubmit:a.handleSubmit,children:r.jsxs("div",{className:"flex flex-col sm:flex-row justify-center items-center sm:space-x-8 my-5 m-10",children:[r.jsxs("div",{children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s("mainLegacyPage.legacyFilterBy.label"),r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsxs("select",{...a.getFieldProps("filterBy"),className:"cypress_filterBy cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[r.jsx("option",{value:"",children:s("mainLegacyPage.legacySelectBtn.label")}),r.jsx("option",{value:"holdingNo",children:s("mainLegacyPage.legacySearchHoldingNumber.label")}),r.jsx("option",{value:"ownerName",children:s("mainLegacyPage.legacySearchOwnerName.label")}),r.jsx("option",{value:"mobileNo",children:s("mainLegacyPage.legacySearchMobileNumber.label")}),r.jsx("option",{value:"address",children:s("mainLegacyPage.legacySearchAddress.label")}),r.jsx("option",{value:"khataNo",children:s("mainLegacyPage.legacySearchKhataNumber.label")})]}),r.jsx("p",{className:"text-red-500 text-xs",children:a.touched.filterBy&&a.errors.filterBy?a.errors.filterBy:null})]}),(a.values.filterBy==""||a.values.filterBy!="khataNo")&&r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s("mainLegacyPage.legacySearchBy.label")," ",h," ",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsx("input",{type:"text",...a.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:a.touched.parameter&&a.errors.parameter?a.errors.parameter:null})]}),a.values.filterBy=="khataNo"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:s("mainLegacyPage.legacySearchKhataNumber.label")}),r.jsx("input",{type:"text",...a.getFieldProps("khataNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:a.touched.khataNo&&a.errors.khataNo?a.errors.khataNo:null})]}),r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:s("mainLegacyPage.legacyPlotNo.label")}),r.jsx("input",{type:"text",...a.getFieldProps("plotNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:a.touched.plotNo&&a.errors.plotNo?a.errors.plotNo:null})]}),r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:s("mainLegacyPage.legacyMaujaName.label")}),r.jsx("input",{type:"text",...a.getFieldProps("maujaName"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:a.touched.maujaName&&a.errors.maujaName?a.errors.maujaName:null})]})]}),r.jsx("div",{className:"mt-6",children:r.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",r.jsxs("p",{className:"flex",children:[" ",r.jsxs("span",{className:"mt-1 mr-2",children:[" ",r.jsx(I,{})," "]})," ",s("mainLegacyPage.legacySearchRecordBtn.label")]})]})})]})})]}),r.jsxs("div",{className:"mt-10",children:[m!=null&&r.jsx(E,{api:b,columns:j,requestBody:m,changeData:p}),r.jsx("div",{className:"w-full h-40"})]})]})}export{O as default};
