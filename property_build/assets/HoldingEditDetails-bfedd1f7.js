import{Y as z,r as n,u as S,a as A,b as F,e as D,K as Z,q as $,s as E,w as M,j as e,n as i,B as L,Z as W,U as q,ag as O,g as R,Q as x,A as T}from"./index-11eb40a4.js";function U(){const{t:s}=z(),[u,V]=n.useState(""),{type:t,filterParam:b,searchValueParam:p}=S(),[m,g]=n.useState(null),[f,y]=n.useState(0),[d,N]=n.useState([]),[j,c]=n.useState(!1);A("Edit Holding"),console.log("search params...",t," ",b," ",p);const{api_newWardByZoneId:w,api_filterPropertyDetails:P}=R(),H=F(),v=D();Z(),console.log("last url.......");const h=r=>{(r==null?void 0:r.filterBy)==""?g({filteredBy:r==null?void 0:r.filterBy,zoneId:r==null?void 0:r.zoneId,wardId:r==null?void 0:r.wardId,isLegacy:!1}):g({filteredBy:r==null?void 0:r.filterBy,zoneId:r==null?void 0:r.zoneId,wardId:r==null?void 0:r.wardId,parameter:r==null?void 0:r.parameter,wardId:r==null?void 0:r.wardId}),y(o=>o+1)},B=r=>{c(!0),l.setFieldValue("wardId","");let o={zoneId:r};console.log("before fetch wardby old ward...",o),T.post(w,o,H).then(function(a){console.log("wardlist by zone id list ....",a.data.data),N(a.data.data),c(!1)}).catch(function(a){console.log("errorrr.... ",a),c(!1)})},_=$({filterBy:E().required("This is a required field !")}),l=M({initialValues:{filterBy:"",wardId:"",zoneId:"",parameter:""},enableReinitialize:!0,onSubmit:r=>{if(r.filterBy!="khataNo"){if(r.parameter==""){x.info("Enter any keyword...");return}}else if(!(r.khataNo!=""||r.plotNo!=""||r.maujaName!="")){x.info("Enter any keyword...");return}h(r)},validationSchema:_}),I=(r,o)=>{v(`/edit-HoldingDetailsForm/${o}`)},k=[{Header:"S.No.",Cell:({row:r})=>e.jsx("div",{className:"pr-2",children:(r==null?void 0:r.index)+1})},{Header:`${s("mainHoldingPage.propertyZone.label")}`,accessor:"zone_name",Cell:({cell:r})=>e.jsxs("div",{children:[e.jsx("span",{children:r.row.original.zone_name=="A"&&"A-East Zone"}),e.jsx("span",{children:r.row.original.zone_name=="B"&&"B-West Zone"}),e.jsx("span",{children:r.row.original.zone_name=="C"&&"C-North Zone"}),e.jsx("span",{children:r.row.original.zone_name=="D"&&"D-South Zone"})]})},{Header:`${s("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_name"},{Header:`${s("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name"},{Header:`${s("mainHoldingPage.propertyNo.label")}`,accessor:"pt_no",Cell:({cell:r})=>e.jsx("span",{children:i(r.row.original.property_no)})},{Header:`${s("mainHoldingPage.holdingNumber.label")}`,accessor:"holding_no",Cell:({cell:r})=>e.jsx("span",{children:i(r.row.original.holding_no)})},{Header:`${s("mainHoldingPage.holdingMobileNumber.label")}`,accessor:"mobile_no",Cell:({cell:r})=>e.jsx("span",{children:i(r.row.original.mobile_no)})},{Header:`${s("mainHoldingPage.holdingAddress.label")}`,accessor:"prop_address",Cell:({cell:r})=>e.jsx("span",{children:i(r.row.original.prop_address)})},{Header:`${s("mainHoldingPage.holdingStatus.label")}`,Cell:({cell:r})=>e.jsxs("div",{children:[r.row.original.paid_status===1&&e.jsx("span",{className:"text-green-900 font-semibold",children:"Fully Paid"}),r.row.original.paid_status===2&&e.jsx("span",{className:"text-red-600 font-semibold",children:"Payment Pending"})]})},{Header:`${s("mainHoldingPage.holdingAction.label")}`,accessor:"id",Cell:({cell:r})=>e.jsx("div",{children:e.jsx("button",{onClick:o=>I(o,r.row.values.id),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:s("mainHoldingPage.holdingView.label")})})}],C=r=>{let o=r.target.name,a=r.target.value;o=="zoneId"&&B(a)};return n.useEffect(()=>{(async()=>{try{h({filterBy:"ownerName",zoneId:"",wardId:"",parameter:"a"})}catch(o){console.error("Error fetching data on mount:",o)}})()},[]),e.jsxs(e.Fragment,{children:[j&&e.jsx(L,{}),(t=="re"||t=="mu")&&e.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[e.jsx(AiFillInfoCircle,{className:"inline mr-2 text-3xl"}),"For ",e.jsx("span",{className:"font-semibold",children:t=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",t=="re"?"Re-Assessment":"Mutation"]}),e.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[e.jsxs("div",{className:"hidden sm:flex  ml-5 mt-2 ",children:[e.jsx("img",{src:W,alt:"",className:"w-10 h-10"}),e.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:s("mainHoldingPage.holdingPageHeadingText.label")})]}),e.jsx("form",{onSubmit:l.handleSubmit,onChange:C,children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s("mainHoldingPage.holdingFilterBy.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...l.getFieldProps("filterBy"),className:"cypress_filterBy cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"",children:s("mainHoldingPage.holdingSelectBtn.label")}),e.jsx("option",{value:"propertyNo",children:s("mainHoldingPage.oldPropertyNo.label")}),e.jsx("option",{value:"holdingNo",children:s("mainHoldingPage.holdingNumber.label")}),e.jsx("option",{value:"ownerName",children:s("mainHoldingPage.holdingOwnersName.label")}),e.jsx("option",{value:"mobileNo",children:s("mainHoldingPage.holdingMobileNumber.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.filterBy&&l.errors.filterBy?l.errors.filterBy:null})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Zone ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:l.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e.jsx("option",{value:"",children:"All Zones"}),e.jsx("option",{value:"1",children:"Zone A-East"}),e.jsx("option",{value:"2",children:"Zone B-West"}),e.jsx("option",{value:"3",children:"Zone C-North"}),e.jsx("option",{value:"4",children:"Zone D-South"})]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.zoneId&&l.errors.zoneId?l.errors.zoneId:null})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:l.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e.jsx("option",{value:"",children:"All Ward"}),d==null?void 0:d.map((r,o)=>e.jsx("option",{value:r.id,children:r.ward_name},o))]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.wardNo&&l.errors.wardNo?l.errors.wardNo:null})]}),(l.values.filterBy==""||l.values.filterBy!="khataNo")&&e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s("mainHoldingPage.holdingSearchBy.label")," ",u," ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",...l.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.parameter&&l.errors.parameter?l.errors.parameter:null})]}),l.values.filterBy=="khataNo"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:s("mainHoldingPage.propertyKhataNumber.label")}),e.jsx("input",{type:"text",...l.getFieldProps("khataNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.khataNo&&l.errors.khataNo?l.errors.khataNo:null})]}),e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:s("mainHoldingPage.propertyPlotNumber.label")}),e.jsx("input",{type:"text",...l.getFieldProps("plotNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.plotNo&&l.errors.plotNo?l.errors.plotNo:null})]}),e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:s("mainHoldingPage.propertyMaujaName.label")}),e.jsx("input",{type:"text",...l.getFieldProps("maujaName"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.maujaName&&l.errors.maujaName?l.errors.maujaName:null})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",e.jsxs("p",{className:"flex",children:[" ",e.jsxs("span",{className:"mt-1 mr-2",children:[" ",e.jsx(q,{})," "]})," ",s("mainHoldingPage.searchHoldingRecord.label")]})]})})]})})]}),e.jsxs("div",{className:"mt-10",children:[m!=null&&e.jsx(O,{api:P,columns:k,requestBody:m,changeData:f}),e.jsx("div",{className:"w-full h-40"})]})]})}export{U as default};
