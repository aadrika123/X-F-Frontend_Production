import{Y as I,r as i,u as A,a as C,b as _,e as S,K as F,q as E,s as z,w as L,j as l,B as q,Z,U as R,aj as D,g as M,Q as u,A as W}from"./index-48b3dac3.js";function K(){const{t}=I(),[m,O]=i.useState(""),{type:r,filterParam:T,searchValueParam:V}=A(),[x,c]=i.useState(null),[h,b]=i.useState(0),[d,g]=i.useState([]),[f,o]=i.useState(!1);C("Existing Edit Holding");const{api_newWardByZoneId:y,api_editExistingPropertyList:N}=M(),j=_(),v=S();F();const w=e=>{(e==null?void 0:e.filterBy)==""?c({filteredBy:e==null?void 0:e.filterBy,zoneId:e==null?void 0:e.zoneId,wardId:e==null?void 0:e.wardId,isLegacy:!1}):c({filteredBy:e==null?void 0:e.filterBy,zoneId:e==null?void 0:e.zoneId,wardId:e==null?void 0:e.wardId,parameter:e==null?void 0:e.parameter,wardId:e==null?void 0:e.wardId}),b(n=>n+1)},B=e=>{o(!0),a.setFieldValue("wardId","");let n={zoneId:e};W.post(y,n,j).then(function(s){g(s.data.data),o(!1)}).catch(function(s){o(!1)})},H=E({filterBy:z().required("This is a required field !")}),a=L({initialValues:{filterBy:"",wardId:"",zoneId:"",parameter:""},enableReinitialize:!0,onSubmit:e=>{if(e.filterBy!="khataNo"){if(e.parameter==""){u.info("Enter any keyword...");return}}else if(!(e.khataNo!=""||e.plotNo!=""||e.maujaName!="")){u.info("Enter any keyword...");return}w(e)},validationSchema:H}),P=[{Header:"S.No.",Cell:({row:e})=>l.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No.",accessor:"ward_name"},{Header:"Request No.",accessor:"request_no"},{Header:"Holding No.",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property No.",accessor:"property_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Owner Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Applicant Name",accessor:"guardian_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No.",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Email",accessor:"email",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Application Date",accessor:"application_date",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return l.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Action",accessor:"id",Cell:({cell:e})=>l.jsx("button",{onClick:()=>v(`/approve-existing-property/bo-edit/${e.row.values.id}`),className:`bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 \r
                      hover:text-white text-black`,children:"View"})}],k=e=>{let n=e.target.name,s=e.target.value;n=="zoneId"&&B(s)};return l.jsxs(l.Fragment,{children:[f&&l.jsx(q,{}),(r=="re"||r=="mu")&&l.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[l.jsx(AiFillInfoCircle,{className:"inline mr-2 text-3xl"}),"For ",l.jsx("span",{className:"font-semibold",children:r=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",r=="re"?"Re-Assessment":"Mutation"]}),l.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[l.jsxs("div",{className:"hidden sm:flex  ml-5 mt-2 ",children:[l.jsx("img",{src:Z,alt:"",className:"w-10 h-10"}),l.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:"Existing Property Search"})]}),l.jsx("form",{onSubmit:a.handleSubmit,onChange:k,children:l.jsxs("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("mainHoldingPage.holdingFilterBy.label"),l.jsx("span",{className:"text-red-500",children:"*"})]}),l.jsxs("select",{...a.getFieldProps("filterBy"),className:"cypress_filterBy cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[l.jsx("option",{value:"",children:t("mainHoldingPage.holdingSelectBtn.label")}),l.jsx("option",{value:"propertyNo",children:t("mainHoldingPage.oldPropertyNo.label")}),l.jsx("option",{value:"holdingNo",children:t("mainHoldingPage.holdingNumber.label")}),l.jsx("option",{value:"ownerName",children:t("mainHoldingPage.holdingOwnersName.label")}),l.jsx("option",{value:"mobileNo",children:t("mainHoldingPage.holdingMobileNumber.label")})]}),l.jsx("p",{className:"text-red-500 text-xs",children:a.touched.filterBy&&a.errors.filterBy?a.errors.filterBy:null})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Zone ",l.jsx("span",{className:"text-red-500",children:"*"})]}),l.jsxs("select",{name:"zoneId",onChange:a.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[l.jsx("option",{value:"",children:"All Zones"}),l.jsx("option",{value:"1",children:"Zone A-East"}),l.jsx("option",{value:"2",children:"Zone B-West"}),l.jsx("option",{value:"3",children:"Zone C-North"}),l.jsx("option",{value:"4",children:"Zone D-South"})]}),l.jsx("p",{className:"text-red-500 text-xs",children:a.touched.zoneId&&a.errors.zoneId?a.errors.zoneId:null})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No",l.jsx("span",{className:"text-red-500",children:"*"})]}),l.jsxs("select",{name:"wardId",onChange:a.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[l.jsx("option",{value:"",children:"All Ward"}),d==null?void 0:d.map((e,n)=>l.jsx("option",{value:e.id,children:e.ward_name},n))]}),l.jsx("p",{className:"text-red-500 text-xs",children:a.touched.wardNo&&a.errors.wardNo?a.errors.wardNo:null})]}),"   ",(a.values.filterBy==""||a.values.filterBy!="khataNo")&&l.jsxs("div",{className:"mt-3 sm:mt-0",children:[l.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("mainHoldingPage.holdingSearchBy.label")," ",m," ",l.jsx("span",{className:"text-red-500",children:"*"})]}),l.jsx("input",{type:"text",...a.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),l.jsx("p",{className:"text-red-500 text-xs",children:a.touched.parameter&&a.errors.parameter?a.errors.parameter:null})]}),a.values.filterBy=="khataNo"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"mt-3 sm:mt-0",children:[l.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:t("mainHoldingPage.propertyKhataNumber.label")}),l.jsx("input",{type:"text",...a.getFieldProps("khataNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),l.jsx("p",{className:"text-red-500 text-xs",children:a.touched.khataNo&&a.errors.khataNo?a.errors.khataNo:null})]}),l.jsxs("div",{className:"mt-3 sm:mt-0",children:[l.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:t("mainHoldingPage.propertyPlotNumber.label")}),l.jsx("input",{type:"text",...a.getFieldProps("plotNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),l.jsx("p",{className:"text-red-500 text-xs",children:a.touched.plotNo&&a.errors.plotNo?a.errors.plotNo:null})]}),l.jsxs("div",{className:"mt-3 sm:mt-0",children:[l.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:t("mainHoldingPage.propertyMaujaName.label")}),l.jsx("input",{type:"text",...a.getFieldProps("maujaName"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),l.jsx("p",{className:"text-red-500 text-xs",children:a.touched.maujaName&&a.errors.maujaName?a.errors.maujaName:null})]})]}),l.jsx("div",{className:"mt-6",children:l.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",l.jsxs("p",{className:"flex",children:[" ",l.jsxs("span",{className:"mt-1 mr-2",children:[" ",l.jsx(R,{})," "]})," ",t("mainHoldingPage.searchHoldingRecord.label")]})]})})]})})]}),l.jsxs("div",{className:"mt-10",children:[l.jsx(D,{api:N,columns:P,requestBody:x,changeData:h}),l.jsx("div",{className:"w-full h-40"})]})]})}export{K as default};
