<<<<<<<< HEAD:property_build/assets/EditExistingPropertyList-1fb8f0b4.js
import{Y as A,r as s,u as S,a as _,b as F,e as z,K as E,q as L,s as Z,w as q,j as l,B as D,Z as M,U as R,ag as W,g as O,Q as u,A as T}from"./index-b7a9b315.js";function K(){const{t}=A(),[m,V]=s.useState(""),{type:r,filterParam:x,searchValueParam:h}=S(),[b,c]=s.useState(null),[g,f]=s.useState(0),[d,y]=s.useState([]),[N,o]=s.useState(!1);_("Existing Edit Holding"),console.log("search params...",r," ",x," ",h);const{api_newWardByZoneId:j,api_editExistingPropertyList:v}=O(),w=F(),B=z();E(),console.log("last url.......");const P=e=>{(e==null?void 0:e.filterBy)==""?c({filteredBy:e==null?void 0:e.filterBy,zoneId:e==null?void 0:e.zoneId,wardId:e==null?void 0:e.wardId,isLegacy:!1}):c({filteredBy:e==null?void 0:e.filterBy,zoneId:e==null?void 0:e.zoneId,wardId:e==null?void 0:e.wardId,parameter:e==null?void 0:e.parameter,wardId:e==null?void 0:e.wardId}),f(n=>n+1)},k=e=>{o(!0),a.setFieldValue("wardId","");let n={zoneId:e};console.log("before fetch wardby old ward...",n),T.post(j,n,w).then(function(i){console.log("wardlist by zone id list ....",i.data.data),y(i.data.data),o(!1)}).catch(function(i){console.log("errorrr.... ",i),o(!1)})},H=L({filterBy:Z().required("This is a required field !")}),a=q({initialValues:{filterBy:"",wardId:"",zoneId:"",parameter:""},enableReinitialize:!0,onSubmit:e=>{if(e.filterBy!="khataNo"){if(e.parameter==""){u.info("Enter any keyword...");return}}else if(!(e.khataNo!=""||e.plotNo!=""||e.maujaName!="")){u.info("Enter any keyword...");return}P(e)},validationSchema:H}),I=[{Header:"S.No.",Cell:({row:e})=>l.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Holding No.",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property No.",accessor:"property_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Owner Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Guardian Name",accessor:"guardian_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No.",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Email",accessor:"email",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Application Date",accessor:"application_date",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Action",accessor:"id",Cell:({cell:e})=>l.jsx("button",{onClick:()=>B(`/approve-existing-property/bo-edit/${e.row.values.id}`),className:`bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 \r
========
import{Y as A,r as s,u as S,a as _,b as F,e as z,K as E,q as L,s as Z,w as q,j as l,B as D,Z as M,U as R,ag as W,g as O,Q as u,A as T}from"./index-e489eabe.js";function K(){const{t}=A(),[m,V]=s.useState(""),{type:r,filterParam:x,searchValueParam:h}=S(),[b,c]=s.useState(null),[g,f]=s.useState(0),[d,y]=s.useState([]),[N,o]=s.useState(!1);_("Existing Edit Holding"),console.log("search params...",r," ",x," ",h);const{api_newWardByZoneId:j,api_editExistingPropertyList:v}=O(),w=F(),B=z();E(),console.log("last url.......");const P=e=>{(e==null?void 0:e.filterBy)==""?c({filteredBy:e==null?void 0:e.filterBy,zoneId:e==null?void 0:e.zoneId,wardId:e==null?void 0:e.wardId,isLegacy:!1}):c({filteredBy:e==null?void 0:e.filterBy,zoneId:e==null?void 0:e.zoneId,wardId:e==null?void 0:e.wardId,parameter:e==null?void 0:e.parameter,wardId:e==null?void 0:e.wardId}),f(n=>n+1)},k=e=>{o(!0),a.setFieldValue("wardId","");let n={zoneId:e};console.log("before fetch wardby old ward...",n),T.post(j,n,w).then(function(i){console.log("wardlist by zone id list ....",i.data.data),y(i.data.data),o(!1)}).catch(function(i){console.log("errorrr.... ",i),o(!1)})},H=L({filterBy:Z().required("This is a required field !")}),a=q({initialValues:{filterBy:"",wardId:"",zoneId:"",parameter:""},enableReinitialize:!0,onSubmit:e=>{if(e.filterBy!="khataNo"){if(e.parameter==""){u.info("Enter any keyword...");return}}else if(!(e.khataNo!=""||e.plotNo!=""||e.maujaName!="")){u.info("Enter any keyword...");return}P(e)},validationSchema:H}),I=[{Header:"S.No.",Cell:({row:e})=>l.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Holding No.",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property No.",accessor:"property_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Owner Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Guardian Name",accessor:"guardian_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No.",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Email",accessor:"email",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Application Date",accessor:"application_date",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Action",accessor:"id",Cell:({cell:e})=>l.jsx("button",{onClick:()=>B(`/approve-existing-property/bo-edit/${e.row.values.id}`),className:`bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 \r
>>>>>>>> 84bbcc4b8fa1f57703215b58587961a8c430cc43:property_build_old/assets/EditExistingPropertyList-6c06daa4.js
                      hover:text-white text-black`,children:"View"})}],C=e=>{let n=e.target.name,i=e.target.value;n=="zoneId"&&k(i)};return l.jsxs(l.Fragment,{children:[N&&l.jsx(D,{}),(r=="re"||r=="mu")&&l.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[l.jsx(AiFillInfoCircle,{className:"inline mr-2 text-3xl"}),"For ",l.jsx("span",{className:"font-semibold",children:r=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",r=="re"?"Re-Assessment":"Mutation"]}),l.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[l.jsxs("div",{className:"hidden sm:flex  ml-5 mt-2 ",children:[l.jsx("img",{src:M,alt:"",className:"w-10 h-10"}),l.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:"Existing Property Search"})]}),l.jsx("form",{onSubmit:a.handleSubmit,onChange:C,children:l.jsxs("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("mainHoldingPage.holdingFilterBy.label"),l.jsx("span",{className:"text-red-500",children:"*"})]}),l.jsxs("select",{...a.getFieldProps("filterBy"),className:"cypress_filterBy cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[l.jsx("option",{value:"",children:t("mainHoldingPage.holdingSelectBtn.label")}),l.jsx("option",{value:"propertyNo",children:t("mainHoldingPage.oldPropertyNo.label")}),l.jsx("option",{value:"holdingNo",children:t("mainHoldingPage.holdingNumber.label")}),l.jsx("option",{value:"ownerName",children:t("mainHoldingPage.holdingOwnersName.label")}),l.jsx("option",{value:"mobileNo",children:t("mainHoldingPage.holdingMobileNumber.label")})]}),l.jsx("p",{className:"text-red-500 text-xs",children:a.touched.filterBy&&a.errors.filterBy?a.errors.filterBy:null})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Zone ",l.jsx("span",{className:"text-red-500",children:"*"})]}),l.jsxs("select",{name:"zoneId",onChange:a.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[l.jsx("option",{value:"",children:"All Zones"}),l.jsx("option",{value:"1",children:"Zone A-East"}),l.jsx("option",{value:"2",children:"Zone B-West"}),l.jsx("option",{value:"3",children:"Zone C-North"}),l.jsx("option",{value:"4",children:"Zone D-South"})]}),l.jsx("p",{className:"text-red-500 text-xs",children:a.touched.zoneId&&a.errors.zoneId?a.errors.zoneId:null})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No",l.jsx("span",{className:"text-red-500",children:"*"})]}),l.jsxs("select",{name:"wardId",onChange:a.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[l.jsx("option",{value:"",children:"All Ward"}),d==null?void 0:d.map((e,n)=>l.jsx("option",{value:e.id,children:e.ward_name},n))]}),l.jsx("p",{className:"text-red-500 text-xs",children:a.touched.wardNo&&a.errors.wardNo?a.errors.wardNo:null})]}),"   ",(a.values.filterBy==""||a.values.filterBy!="khataNo")&&l.jsxs("div",{className:"mt-3 sm:mt-0",children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("mainHoldingPage.holdingSearchBy.label")," ",m," ",l.jsx("span",{className:"text-red-500",children:"*"})]}),l.jsx("input",{type:"text",...a.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),l.jsx("p",{className:"text-red-500 text-xs",children:a.touched.parameter&&a.errors.parameter?a.errors.parameter:null})]}),a.values.filterBy=="khataNo"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"mt-3 sm:mt-0",children:[l.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:t("mainHoldingPage.propertyKhataNumber.label")}),l.jsx("input",{type:"text",...a.getFieldProps("khataNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),l.jsx("p",{className:"text-red-500 text-xs",children:a.touched.khataNo&&a.errors.khataNo?a.errors.khataNo:null})]}),l.jsxs("div",{className:"mt-3 sm:mt-0",children:[l.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:t("mainHoldingPage.propertyPlotNumber.label")}),l.jsx("input",{type:"text",...a.getFieldProps("plotNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),l.jsx("p",{className:"text-red-500 text-xs",children:a.touched.plotNo&&a.errors.plotNo?a.errors.plotNo:null})]}),l.jsxs("div",{className:"mt-3 sm:mt-0",children:[l.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:t("mainHoldingPage.propertyMaujaName.label")}),l.jsx("input",{type:"text",...a.getFieldProps("maujaName"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),l.jsx("p",{className:"text-red-500 text-xs",children:a.touched.maujaName&&a.errors.maujaName?a.errors.maujaName:null})]})]}),l.jsx("div",{className:"mt-6",children:l.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",l.jsxs("p",{className:"flex",children:[" ",l.jsxs("span",{className:"mt-1 mr-2",children:[" ",l.jsx(R,{})," "]})," ",t("mainHoldingPage.searchHoldingRecord.label")]})]})})]})})]}),l.jsxs("div",{className:"mt-10",children:[l.jsx(W,{api:v,columns:I,requestBody:b,changeData:g}),l.jsx("div",{className:"w-full h-40"})]})]})}export{K as default};
