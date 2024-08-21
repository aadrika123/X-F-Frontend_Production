import{Y as P,r as n,u as B,a as I,e as C,K as z,q as S,s as k,w as A,j as e,n as o,B as F,Z,U as D,aj as W,g as $,Q as m,A as L,b as q}from"./index-48b3dac3.js";function O(){const{t:s}=P(),[x,E]=n.useState(""),{type:t,filterParam:M,searchValueParam:R}=B(),[h,g]=n.useState(null),[p,u]=n.useState(0),[d,b]=n.useState([]),[f,c]=n.useState(!1);I("Ward wise holding");const{api_newWardByZoneId:y,api_filterPropertyDetails:j}=$();C(),z();const N=a=>{g({filteredBy:a==null?void 0:a.filterBy,zoneId:a==null?void 0:a.zoneId,wardId:a==null?void 0:a.wardId,isLegacy:!1}),u(l=>l+1)},w=a=>{c(!0),r.setFieldValue("wardId","");let l={zoneId:a};L.post(y,l,q()).then(function(i){b(i.data.data),c(!1)}).catch(function(i){c(!1)})},H=S({filterBy:k().required("This is a required field !")}),r=A({initialValues:{filterBy:"",wardId:"",zoneId:"",parameter:""},enableReinitialize:!0,onSubmit:a=>{if(a.filterBy!="khataNo"){if(a.parameter==""){m.info("Enter any keyword...");return}}else if(!(a.khataNo!=""||a.plotNo!=""||a.maujaName!="")){m.info("Enter any keyword...");return}N(a)},validationSchema:H}),_=[{Header:"S.No.",Cell:({row:a})=>e.jsx("div",{className:"pr-2",children:(a==null?void 0:a.index)+1})},{Header:`${s("mainHoldingPage.propertyZone.label")}`,accessor:"zone_name",Cell:({cell:a})=>e.jsxs("div",{children:[e.jsx("span",{children:a.row.original.zone_name=="A"&&"A-East Zone"}),e.jsx("span",{children:a.row.original.zone_name=="B"&&"B-West Zone"}),e.jsx("span",{children:a.row.original.zone_name=="C"&&"C-North Zone"}),e.jsx("span",{children:a.row.original.zone_name=="D"&&"D-South Zone"})]})},{Header:`${s("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_name"},{Header:`${s("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name"},{Header:`${s("mainHoldingPage.propertyNo.label")}`,accessor:"pt_no",Cell:({cell:a})=>e.jsx("span",{children:o(a.row.original.property_no)})},{Header:`${s("mainHoldingPage.holdingNumber.label")}`,accessor:"holding_no",Cell:({cell:a})=>e.jsx("span",{children:o(a.row.original.holding_no)})},{Header:`${s("mainHoldingPage.holdingMobileNumber.label")}`,accessor:"mobile_no",Cell:({cell:a})=>e.jsx("span",{children:o(a.row.original.mobile_no)})},{Header:`${s("mainHoldingPage.holdingAddress.label")}`,accessor:"prop_address",Cell:({cell:a})=>e.jsx("span",{children:o(a.row.original.prop_address)})},{Header:"Demand From",accessor:"demand_from",Cell:({cell:a})=>e.jsx("span",{children:o(a.row.original.demand_from)})},{Header:"Demand Upto",accessor:"demand_upto",Cell:({cell:a})=>e.jsx("span",{children:o(a.row.original.demand_upto)})},{Header:"Total Demand",accessor:"total_demand",Cell:({cell:a})=>e.jsx("span",{children:o(a.row.original.total_demand)})}],v=a=>{let l=a.target.name,i=a.target.value;l=="zoneId"&&w(i)};return e.jsxs(e.Fragment,{children:[f&&e.jsx(F,{}),(t=="re"||t=="mu")&&e.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[e.jsx(AiFillInfoCircle,{className:"inline mr-2 text-3xl"}),"For ",e.jsx("span",{className:"font-semibold",children:t=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",t=="re"?"Re-Assessment":"Mutation"]}),e.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[e.jsxs("div",{className:"hidden sm:flex  ml-5 mt-2 ",children:[e.jsx("img",{src:Z,alt:"",className:"w-10 h-10"}),e.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:"Search ward wise demand"})]}),e.jsx("form",{onSubmit:r.handleSubmit,onChange:v,children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s("mainHoldingPage.holdingFilterBy.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...r.getFieldProps("filterBy"),className:"cypress_filterBy cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"",children:s("mainHoldingPage.holdingSelectBtn.label")}),e.jsx("option",{value:"propertyNo",children:s("mainHoldingPage.oldPropertyNo.label")}),e.jsx("option",{value:"holdingNo",children:s("mainHoldingPage.holdingNumber.label")}),e.jsx("option",{value:"ownerName",children:s("mainHoldingPage.holdingOwnersName.label")}),e.jsx("option",{value:"mobileNo",children:s("mainHoldingPage.holdingMobileNumber.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:r.touched.filterBy&&r.errors.filterBy?r.errors.filterBy:null})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Zone ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:r.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e.jsx("option",{value:"",children:"All Zones"}),e.jsx("option",{value:"1",children:"Zone A-East"}),e.jsx("option",{value:"2",children:"Zone B-West"}),e.jsx("option",{value:"3",children:"Zone C-North"}),e.jsx("option",{value:"4",children:"Zone D-South"})]}),e.jsx("p",{className:"text-red-500 text-xs",children:r.touched.zoneId&&r.errors.zoneId?r.errors.zoneId:null})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:r.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e.jsx("option",{value:"",children:"All Ward"}),d==null?void 0:d.map((a,l)=>e.jsx("option",{value:a.id,children:a.ward_name},l))]}),e.jsx("p",{className:"text-red-500 text-xs",children:r.touched.wardNo&&r.errors.wardNo?r.errors.wardNo:null})]}),"   ",(r.values.filterBy==""||r.values.filterBy!="khataNo")&&e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s("mainHoldingPage.holdingSearchBy.label")," ",x," ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",...r.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:r.touched.parameter&&r.errors.parameter?r.errors.parameter:null})]}),r.values.zoneId=="zoneId"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:s("mainHoldingPage.propertyKhataNumber.label")}),e.jsx("input",{type:"text",...r.getFieldProps("zoneId"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:r.touched.zoneId&&r.errors.zoneId?r.errors.zoneId:null})]}),e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:s("mainHoldingPage.propertyPlotNumber.label")}),e.jsx("input",{type:"text",...r.getFieldProps("plotNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:r.touched.plotNo&&r.errors.plotNo?r.errors.plotNo:null})]}),e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:s("mainHoldingPage.propertyMaujaName.label")}),e.jsx("input",{type:"text",...r.getFieldProps("maujaName"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:r.touched.maujaName&&r.errors.maujaName?r.errors.maujaName:null})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",e.jsxs("p",{className:"flex",children:[" ",e.jsxs("span",{className:"mt-1 mr-2",children:[" ",e.jsx(D,{})," "]})," ",s("mainHoldingPage.searchHoldingRecord.label")]})]})})]})})]}),e.jsxs("div",{className:"mt-10",children:[e.jsx(W,{api:j,columns:_,requestBody:h,changeData:p}),e.jsx("div",{className:"w-full h-40"})]})]})}export{O as default};
