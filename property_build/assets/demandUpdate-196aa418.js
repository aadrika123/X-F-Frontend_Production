import{r as n,_ as z,X as S,u as A,a as F,b as x,e as D,J as Z,q as $,s as L,w as E,j as e,V as i,b0 as W,L as q,Y as M,O,af as R,Q as p,W as T,A as V}from"./index-eb8737a9.js";const U=n.lazy(()=>z(()=>import("./index-eb8737a9.js").then(l=>l.c_),["assets/index-eb8737a9.js","assets/index-703be7ea.css"])),Q=()=>{const{t:l}=S(),[u,J]=n.useState(),{type:t,filterParam:b,searchValueParam:f}=A(),[m,g]=n.useState(null),[y,N]=n.useState(0),[d,j]=n.useState([]),[w,c]=n.useState(!1);F("Search Holding"),console.log("search params...",t," ",b," ",f);const{api_newWardByZoneId:P,api_filterPropertyDetails:h}=R();x();const v=D();Z(),console.log("last url.......",h);const _=r=>{(r==null?void 0:r.filterBy)=="khataNo"?g({filteredBy:r==null?void 0:r.filterBy,zoneId:r==null?void 0:r.zoneId,wardId:r==null?void 0:r.wardId,isLegacy:!1}):g({filteredBy:r==null?void 0:r.filterBy,zoneId:r==null?void 0:r.zoneId,wardId:r==null?void 0:r.wardId,parameter:r==null?void 0:r.parameter,wardId:r==null?void 0:r.wardId}),N(o=>o+1)},H=r=>{c(!0),s.setFieldValue("wardId","");let o={zoneId:r};console.log("before fetch wardby old ward...",o),V.post(P,o,x()).then(function(a){console.log("wardlist by zone id list ....",a.data.data),j(a.data.data),c(!1)}).catch(function(a){console.log("errorrr.... ",a),c(!1)})},B=$({filterBy:L().required("This is a required field !")}),s=E({initialValues:{filterBy:"",wardId:"",zoneId:""},onSubmit:r=>{if(r.filterBy!="khataNo"){if(r.parameter==""){p.info("Enter any keyword...");return}}else if(!(r.khataNo!=""||r.plotNo!=""||r.maujaName!="")){p.info("Enter any keyword...");return}_(r)},validationSchema:B}),I=(r,o)=>{let a=`/DemandUpdateHoldingPropertyDetails/${o}`;T(r,a,v)},k=[{Header:`${l("mainHoldingPage.propertyZone.label")}`,accessor:"zone_name",Cell:({cell:r})=>e.jsxs("div",{children:[e.jsx("span",{children:r.row.original.zone_name=="A"&&"A-East Zone"}),e.jsx("span",{children:r.row.original.zone_name=="B"&&"B-West Zone"}),e.jsx("span",{children:r.row.original.zone_name=="C"&&"C-North Zone"}),e.jsx("span",{children:r.row.original.zone_name=="D"&&"D-South Zone"})]})},{Header:`${l("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_name"},{Header:`${l("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name"},{Header:`${l("mainHoldingPage.propertyNo.label")}`,accessor:"pt_no",Cell:({cell:r})=>e.jsx("span",{children:i(r.row.original.property_no)})},{Header:`${l("mainHoldingPage.holdingNumber.label")}`,accessor:"holding_no",Cell:({cell:r})=>e.jsx("span",{children:i(r.row.original.holding_no)})},{Header:`${l("mainHoldingPage.holdingMobileNumber.label")}`,accessor:"mobile_no",Cell:({cell:r})=>e.jsx("span",{children:i(r.row.original.mobile_no)})},{Header:`${l("mainHoldingPage.holdingAddress.label")}`,accessor:"prop_address",Cell:({cell:r})=>e.jsx("span",{children:i(r.row.original.prop_address)})},{Header:`${l("mainHoldingPage.holdingStatus.label")}`,Cell:({cell:r})=>e.jsxs("div",{children:[r.row.original.paid_status===1&&e.jsx("span",{className:"text-green-900 font-semibold",children:"Fully Paid"}),r.row.original.paid_status===2&&e.jsx("span",{className:"text-red-600 font-semibold",children:"Payment Pending"})]})},{Header:`${l("mainHoldingPage.holdingAction.label")}`,accessor:"id",Cell:({cell:r})=>e.jsx("button",{onClick:o=>I(o,r.row.values.id),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:l("mainHoldingPage.holdingView.label")})}],C=r=>{let o=r.target.name,a=r.target.value;o=="zoneId"&&H(a)};return e.jsxs(e.Fragment,{children:[w&&e.jsx(W,{}),(t=="re"||t=="mu")&&e.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[e.jsx(q,{className:"inline mr-2 text-3xl"}),"For ",e.jsx("span",{className:"font-semibold",children:t=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",t=="re"?"Re-Assessment":"Mutation"]}),e.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[e.jsxs("div",{className:"hidden sm:flex  ml-5 mt-2 ",children:[e.jsx("img",{src:M,alt:"",className:"w-10 h-10"}),e.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:"Demand Update"})]}),e.jsx("form",{onSubmit:s.handleSubmit,onChange:C,children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[l("mainHoldingPage.holdingFilterBy.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...s.getFieldProps("filterBy"),className:"cypress_filterBy cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"",children:l("mainHoldingPage.holdingSelectBtn.label")}),e.jsx("option",{value:"propertyNo",children:l("mainHoldingPage.oldPropertyNo.label")}),e.jsx("option",{value:"holdingNo",children:l("mainHoldingPage.holdingNumber.label")}),e.jsx("option",{value:"ownerName",children:l("mainHoldingPage.holdingOwnersName.label")}),e.jsx("option",{value:"mobileNo",children:l("mainHoldingPage.holdingMobileNumber.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.filterBy&&s.errors.filterBy?s.errors.filterBy:null})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Zone ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:s.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e.jsx("option",{value:"",children:"All Zones"}),e.jsx("option",{value:"1",children:"Zone A-East"}),e.jsx("option",{value:"2",children:"Zone B-West"}),e.jsx("option",{value:"3",children:"Zone C-North"}),e.jsx("option",{value:"4",children:"Zone D-South"})]}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.zoneId&&s.errors.zoneId?s.errors.zoneId:null})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:s.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e.jsx("option",{value:"",children:"All Ward"}),d==null?void 0:d.map((r,o)=>e.jsx("option",{value:r.id,children:r.ward_name},o))]}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.wardNo&&s.errors.wardNo?s.errors.wardNo:null})]}),"   ",(s.values.filterBy==""||s.values.filterBy!="khataNo")&&e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[l("mainHoldingPage.holdingSearchBy.label")," ",u," ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",...s.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.parameter&&s.errors.parameter?s.errors.parameter:null})]}),s.values.filterBy=="khataNo"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyKhataNumber.label")}),e.jsx("input",{type:"text",...s.getFieldProps("khataNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.khataNo&&s.errors.khataNo?s.errors.khataNo:null})]}),e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyPlotNumber.label")}),e.jsx("input",{type:"text",...s.getFieldProps("plotNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.plotNo&&s.errors.plotNo?s.errors.plotNo:null})]}),e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyMaujaName.label")}),e.jsx("input",{type:"text",...s.getFieldProps("maujaName"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.maujaName&&s.errors.maujaName?s.errors.maujaName:null})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",e.jsxs("p",{className:"flex",children:[" ",e.jsxs("span",{className:"mt-1 mr-2",children:[" ",e.jsx(O,{})," "]})," ",l("mainHoldingPage.searchHoldingRecord.label")]})]})})]})})]}),e.jsxs("div",{className:"mt-10",children:[m!=null&&e.jsx(U,{api:h,columns:k,requestBody:m,changeData:y}),e.jsx("div",{className:"w-full h-40"})]})]})};export{Q as default};
