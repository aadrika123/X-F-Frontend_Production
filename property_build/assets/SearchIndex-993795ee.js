import{r as a,_ as S,X as z,u as A,a as F,b as u,e as $,J as L,q as R,s as Z,w as D,j as e,V as d,al as E,aX as W,L as U,O as V,g as T,Y as q,Q as b,W as M,A as O,ad as X}from"./index-362d414a.js";import{s as J}from"./search-6298cbb5.js";const K=a.lazy(()=>S(()=>import("./index-362d414a.js").then(l=>l.cN),["assets/index-362d414a.js","assets/index-5bbfc335.css"]));function re(){const{t:l}=z(),[f,Q]=a.useState(),{type:i,filterParam:c,searchValueParam:t}=A(),[h,p]=a.useState(null),[y,N]=a.useState(0),[m,j]=a.useState([]),[w,g]=a.useState(!1);F("Search Holding"),console.log("search params...",i," ",c," ",t);const{api_getWardListByLogin:Y,api_filterPropertyDetails:v}=T(),{api_newWardByZoneId:P}=X();u();const _=$();L(),console.log("last url.......");const x=r=>{(r==null?void 0:r.filterBy)=="khataNo"?p({filteredBy:r==null?void 0:r.filterBy,zoneId:r==null?void 0:r.zoneId,wardId:r==null?void 0:r.wardId,isLegacy:!1}):p({filteredBy:r==null?void 0:r.filterBy,zoneId:r==null?void 0:r.zoneId,wardId:r==null?void 0:r.wardId,parameter:r==null?void 0:r.parameter,wardId:r==null?void 0:r.wardId}),N(s=>s+1),q(`/property/search/fresh/${encodeURIComponent((r==null?void 0:r.parameter)==null||(r==null?void 0:r.parameter)==""?"direct":r==null?void 0:r.filterBy)}/${encodeURIComponent((r==null?void 0:r.parameter)==null||(r==null?void 0:r.parameter)==""?"direct":r==null?void 0:r.parameter)}`)},H=r=>{g(!0),o.setFieldValue("wardId","");let s={zoneId:r};console.log("before fetch wardby old ward...",s),O.post(P,s,u()).then(function(n){console.log("wardlist by zone id list ....",n.data.data),j(n.data.data),g(!1)}).catch(function(n){console.log("errorrr.... ",n),g(!1)})},B=R({filterBy:Z().required("This is a required field !")}),o=D({initialValues:{filterBy:"",wardId:"",zoneId:""},onSubmit:r=>{if(r.filterBy!="khataNo"){if(r.parameter==""){b.info("Enter any keyword...");return}}else if(!(r.khataNo!=""||r.plotNo!=""||r.maujaName!="")){b.info("Enter any keyword...");return}x(r)},validationSchema:B}),I=(r,s)=>{let n=`/holdingPropertyDetails/${s}`;M(r,n,_)},k=[{Header:`${l("mainHoldingPage.propertyZone.label")}`,accessor:"zone_name",Cell:({cell:r})=>e.jsxs("div",{children:[e.jsx("span",{children:r.row.original.zone_name=="A"&&"A-East Zone"}),e.jsx("span",{children:r.row.original.zone_name=="B"&&"B-West Zone"}),e.jsx("span",{children:r.row.original.zone_name=="C"&&"C-North Zone"}),e.jsx("span",{children:r.row.original.zone_name=="D"&&"D-South Zone"})]})},{Header:`${l("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_name"},{Header:`${l("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name"},{Header:`${l("mainHoldingPage.propertyNo.label")}`,accessor:"pt_no",Cell:({cell:r})=>e.jsx("span",{children:d(r.row.original.property_no)})},{Header:`${l("mainHoldingPage.holdingNumber.label")}`,accessor:"holding_no",Cell:({cell:r})=>e.jsx("span",{children:d(r.row.original.holding_no)})},{Header:`${l("mainHoldingPage.holdingMobileNumber.label")}`,accessor:"mobile_no",Cell:({cell:r})=>e.jsx("span",{children:d(r.row.original.mobile_no)})},{Header:`${l("mainHoldingPage.holdingAddress.label")}`,accessor:"prop_address",Cell:({cell:r})=>e.jsx("span",{children:d(r.row.original.prop_address)})},{Header:`${l("mainHoldingPage.holdingStatus.label")}`,Cell:({cell:r})=>e.jsxs("div",{children:[r.row.original.paid_status===1&&e.jsx("span",{className:"text-green-900 font-semibold",children:"Fully Paid"}),r.row.original.paid_status===2&&e.jsx("span",{className:"text-red-600 font-semibold",children:"Payment Pending"})]})},{Header:`${l("mainHoldingPage.holdingAction.label")}`,accessor:"id",Cell:({cell:r})=>e.jsxs("div",{children:[e.jsx("button",{onClick:s=>I(s,r.row.values.id),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:l("mainHoldingPage.holdingView.label")}),e.jsx("button",{type:"button",className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white mx-2",children:e.jsx(E,{to:`/holding-nakkal/${r.row.values.id}`,children:l("mainHoldingPage.holdingNakkal.label")})})]})}];a.useEffect(()=>{t!="direct"&&(o.setFieldValue("filterBy",decodeURIComponent(c)),o.setFieldValue("parameter",decodeURIComponent(t)),x({filterBy:decodeURIComponent(c),parameter:decodeURIComponent(t)}))},[]);const C=r=>{let s=r.target.name,n=r.target.value;s=="zoneId"&&H(n)};return e.jsxs(e.Fragment,{children:[w&&e.jsx(W,{}),(i=="re"||i=="mu")&&e.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[e.jsx(U,{className:"inline mr-2 text-3xl"}),"For ",e.jsx("span",{className:"font-semibold",children:i=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",i=="re"?"Re-Assessment":"Mutation"]}),e.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[e.jsxs("div",{className:"hidden sm:flex  ml-5 mt-2 ",children:[e.jsx("img",{src:J,alt:"",className:"w-10 h-10"}),e.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:l("mainHoldingPage.holdingPageHeadingText.label")})]}),e.jsx("form",{onSubmit:o.handleSubmit,onChange:C,children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[l("mainHoldingPage.holdingFilterBy.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...o.getFieldProps("filterBy"),className:"cypress_filterBy cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"",children:l("mainHoldingPage.holdingSelectBtn.label")}),e.jsx("option",{value:"propertyNo",children:l("mainHoldingPage.oldPropertyNo.label")}),e.jsx("option",{value:"holdingNo",children:l("mainHoldingPage.holdingNumber.label")}),e.jsx("option",{value:"ownerName",children:l("mainHoldingPage.holdingOwnersName.label")}),e.jsx("option",{value:"mobileNo",children:l("mainHoldingPage.holdingMobileNumber.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:o.touched.filterBy&&o.errors.filterBy?o.errors.filterBy:null})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Zone ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:o.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e.jsx("option",{value:"",children:"All Zones"}),e.jsx("option",{value:"1",children:"Zone A-East"}),e.jsx("option",{value:"2",children:"Zone B-West"}),e.jsx("option",{value:"3",children:"Zone C-North"}),e.jsx("option",{value:"4",children:"Zone D-South"})]}),e.jsx("p",{className:"text-red-500 text-xs",children:o.touched.zoneId&&o.errors.zoneId?o.errors.zoneId:null})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:o.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e.jsx("option",{value:"",children:"All Ward"}),m==null?void 0:m.map((r,s)=>e.jsx("option",{value:r.id,children:r.ward_name},s))]}),e.jsx("p",{className:"text-red-500 text-xs",children:o.touched.wardNo&&o.errors.wardNo?o.errors.wardNo:null})]}),"   ",(o.values.filterBy==""||o.values.filterBy!="khataNo")&&e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[l("mainHoldingPage.holdingSearchBy.label")," ",f," ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",...o.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:o.touched.parameter&&o.errors.parameter?o.errors.parameter:null})]}),o.values.filterBy=="khataNo"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyKhataNumber.label")}),e.jsx("input",{type:"text",...o.getFieldProps("khataNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:o.touched.khataNo&&o.errors.khataNo?o.errors.khataNo:null})]}),e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyPlotNumber.label")}),e.jsx("input",{type:"text",...o.getFieldProps("plotNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:o.touched.plotNo&&o.errors.plotNo?o.errors.plotNo:null})]}),e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyMaujaName.label")}),e.jsx("input",{type:"text",...o.getFieldProps("maujaName"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:o.touched.maujaName&&o.errors.maujaName?o.errors.maujaName:null})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",e.jsxs("p",{className:"flex",children:[" ",e.jsxs("span",{className:"mt-1 mr-2",children:[" ",e.jsx(V,{})," "]})," ",l("mainHoldingPage.searchHoldingRecord.label")]})]})})]})})]}),e.jsxs("div",{className:"mt-10",children:[h!=null&&e.jsx(K,{api:v,columns:k,requestBody:h,changeData:y}),e.jsx("div",{className:"w-full h-40"})]})]})}export{re as default};
