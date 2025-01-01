import{X as k,r as o,u as C,a as S,b as z,e as A,J as F,p as D,q as Z,v as $,j as e,n as i,B as E,Y as M,O as L,ah as O,g as W,Q as x,A as q}from"./index-161aea56.js";function K(){const{t:l}=k(),[u,R]=o.useState(""),{type:n,filterParam:T,searchValueParam:V}=C(),[m,g]=o.useState(null),[p,b]=o.useState(0),[d,f]=o.useState([]),[y,c]=o.useState(!1);S("Edit Holding");const{api_newWardByZoneId:N,api_filterPropertyDetails:j}=W(),w=z(),P=A();F();const h=r=>{(r==null?void 0:r.filterBy)==""?g({filteredBy:r==null?void 0:r.filterBy,zoneId:r==null?void 0:r.zoneId,wardId:r==null?void 0:r.wardId,isLegacy:!1}):g({filteredBy:r==null?void 0:r.filterBy,zoneId:r==null?void 0:r.zoneId,wardId:r==null?void 0:r.wardId,parameter:r==null?void 0:r.parameter,wardId:r==null?void 0:r.wardId}),b(a=>a+1)},v=r=>{c(!0),s.setFieldValue("wardId","");let a={zoneId:r};q.post(N,a,w).then(function(t){f(t.data.data),c(!1)}).catch(function(t){c(!1)})},H=D({filterBy:Z().required("This is a required field !")}),s=$({initialValues:{filterBy:"",wardId:"",zoneId:"",parameter:""},enableReinitialize:!0,onSubmit:r=>{if(r.filterBy!="khataNo"){if(r.parameter==""){x.info("Enter any keyword...");return}}else if(!(r.khataNo!=""||r.plotNo!=""||r.maujaName!="")){x.info("Enter any keyword...");return}h(r)},validationSchema:H}),B=(r,a)=>{P(`/edit-HoldingDetailsForm/${a}`)},_=[{Header:"S.No.",Cell:({row:r})=>e.jsx("div",{className:"pr-2",children:(r==null?void 0:r.index)+1})},{Header:`${l("mainHoldingPage.propertyZone.label")}`,accessor:"zone_name",Cell:({cell:r})=>e.jsxs("div",{children:[e.jsx("span",{children:r.row.original.zone_name=="A"&&"A-East Zone"}),e.jsx("span",{children:r.row.original.zone_name=="B"&&"B-West Zone"}),e.jsx("span",{children:r.row.original.zone_name=="C"&&"C-North Zone"}),e.jsx("span",{children:r.row.original.zone_name=="D"&&"D-South Zone"})]})},{Header:`${l("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_name"},{Header:`${l("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name"},{Header:`${l("mainHoldingPage.propertyNo.label")}`,accessor:"pt_no",Cell:({cell:r})=>e.jsx("span",{children:i(r.row.original.property_no)})},{Header:`${l("mainHoldingPage.holdingNumber.label")}`,accessor:"holding_no",Cell:({cell:r})=>e.jsx("span",{children:i(r.row.original.holding_no)})},{Header:`${l("mainHoldingPage.holdingMobileNumber.label")}`,accessor:"mobile_no",Cell:({cell:r})=>e.jsx("span",{children:i(r.row.original.mobile_no)})},{Header:`${l("mainHoldingPage.holdingAddress.label")}`,accessor:"prop_address",Cell:({cell:r})=>e.jsx("span",{children:i(r.row.original.prop_address)})},{Header:`${l("mainHoldingPage.holdingStatus.label")}`,Cell:({cell:r})=>e.jsxs("div",{children:[r.row.original.paid_status===1&&e.jsx("span",{className:"text-green-900 font-semibold",children:"Fully Paid"}),r.row.original.paid_status===2&&e.jsx("span",{className:"text-red-600 font-semibold",children:"Payment Pending"})]})},{Header:`${l("mainHoldingPage.holdingAction.label")}`,accessor:"id",Cell:({cell:r})=>e.jsx("div",{children:e.jsx("button",{onClick:a=>B(a,r.row.values.id),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:l("mainHoldingPage.holdingView.label")})})}],I=r=>{let a=r.target.name,t=r.target.value;a=="zoneId"&&v(t)};return o.useEffect(()=>{(async()=>{try{h({filterBy:"ownerName",zoneId:"",wardId:"",parameter:"a"})}catch{}})()},[]),e.jsxs(e.Fragment,{children:[y&&e.jsx(E,{}),(n=="re"||n=="mu")&&e.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[e.jsx(AiFillInfoCircle,{className:"inline mr-2 text-3xl"}),"For ",e.jsx("span",{className:"font-semibold",children:n=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",n=="re"?"Re-Assessment":"Mutation"]}),e.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[e.jsxs("div",{className:"hidden sm:flex  ml-5 mt-2 ",children:[e.jsx("img",{src:M,alt:"",className:"w-10 h-10"}),e.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:l("mainHoldingPage.holdingPageHeadingText.label")})]}),e.jsx("form",{onSubmit:s.handleSubmit,onChange:I,children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[l("mainHoldingPage.holdingFilterBy.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...s.getFieldProps("filterBy"),className:"cypress_filterBy cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"",children:l("mainHoldingPage.holdingSelectBtn.label")}),e.jsx("option",{value:"propertyNo",children:l("mainHoldingPage.oldPropertyNo.label")}),e.jsx("option",{value:"holdingNo",children:l("mainHoldingPage.holdingNumber.label")}),e.jsx("option",{value:"ownerName",children:l("mainHoldingPage.holdingOwnersName.label")}),e.jsx("option",{value:"mobileNo",children:l("mainHoldingPage.holdingMobileNumber.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.filterBy&&s.errors.filterBy?s.errors.filterBy:null})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Zone ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:s.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e.jsx("option",{value:"",children:"All Zones"}),e.jsx("option",{value:"1",children:"Zone A-East"}),e.jsx("option",{value:"2",children:"Zone B-West"}),e.jsx("option",{value:"3",children:"Zone C-North"}),e.jsx("option",{value:"4",children:"Zone D-South"})]}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.zoneId&&s.errors.zoneId?s.errors.zoneId:null})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:s.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e.jsx("option",{value:"",children:"All Ward"}),d==null?void 0:d.map((r,a)=>e.jsx("option",{value:r.id,children:r.ward_name},a))]}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.wardNo&&s.errors.wardNo?s.errors.wardNo:null})]}),(s.values.filterBy==""||s.values.filterBy!="khataNo")&&e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[l("mainHoldingPage.holdingSearchBy.label")," ",u," ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",...s.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.parameter&&s.errors.parameter?s.errors.parameter:null})]}),s.values.filterBy=="khataNo"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyKhataNumber.label")}),e.jsx("input",{type:"text",...s.getFieldProps("khataNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.khataNo&&s.errors.khataNo?s.errors.khataNo:null})]}),e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyPlotNumber.label")}),e.jsx("input",{type:"text",...s.getFieldProps("plotNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.plotNo&&s.errors.plotNo?s.errors.plotNo:null})]}),e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyMaujaName.label")}),e.jsx("input",{type:"text",...s.getFieldProps("maujaName"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.maujaName&&s.errors.maujaName?s.errors.maujaName:null})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",e.jsxs("p",{className:"flex",children:[" ",e.jsxs("span",{className:"mt-1 mr-2",children:[" ",e.jsx(L,{})," "]})," ",l("mainHoldingPage.searchHoldingRecord.label")]})]})})]})})]}),e.jsxs("div",{className:"mt-10",children:[m!=null&&e.jsx(O,{api:j,columns:_,requestBody:m,changeData:p}),e.jsx("div",{className:"w-full h-40"})]})]})}export{K as default};
