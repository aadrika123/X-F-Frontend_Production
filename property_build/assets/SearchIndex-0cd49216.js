import{r as n,_ as z,Y as F,u as $,a as E,b as f,e as Z,K as L,q as R,s as D,w as U,j as e,W as d,aA as W,at as T,N as V,Z as q,U as M,g as O,$ as K,Q as y,X as Q,A as X,al as Y}from"./index-7885ada7.js";const G=n.lazy(()=>z(()=>import("./index-7885ada7.js").then(o=>o.ea),["assets/index-7885ada7.js","assets/index-eb7be758.css"]));function le(){const{t:o}=F(),[N,J]=n.useState(),{type:t,filterParam:h,searchValueParam:c}=$(),[p,x]=n.useState(null),[j,w]=n.useState(0),[m,v]=n.useState([]),[P,g]=n.useState(!1),[i,u]=n.useState(null);E("Search Holding");const{api_getWardListByLogin:ee,api_filterPropertyDetails:_}=O(),{api_newWardByZoneId:H}=Y();f();const B=Z();L();const b=r=>{(r==null?void 0:r.filterBy)=="khataNo"?x({filteredBy:r==null?void 0:r.filterBy,zoneId:r==null?void 0:r.zoneId,wardId:r==null?void 0:r.wardId,isLegacy:!1}):x({filteredBy:r==null?void 0:r.filterBy,zoneId:r==null?void 0:r.zoneId,wardId:r==null?void 0:r.wardId,parameter:r==null?void 0:r.parameter,wardId:r==null?void 0:r.wardId}),w(s=>s+1),K(`/property/search/fresh/${encodeURIComponent((r==null?void 0:r.parameter)==null||(r==null?void 0:r.parameter)==""?"direct":r==null?void 0:r.filterBy)}/${encodeURIComponent((r==null?void 0:r.parameter)==null||(r==null?void 0:r.parameter)==""?"direct":r==null?void 0:r.parameter)}`)},I=r=>{g(!0),l.setFieldValue("wardId","");let s={zoneId:r};X.post(H,s,f()).then(function(a){v(a.data.data),g(!1)}).catch(function(a){g(!1)})},k=R({filterBy:D().required("This is a required field !")}),l=U({initialValues:{filterBy:"",wardId:"",zoneId:""},onSubmit:r=>{if(r.filterBy!="khataNo"){if(r.parameter==""){y.info("Enter any keyword...");return}}else if(!(r.khataNo!=""||r.plotNo!=""||r.maujaName!="")){y.info("Enter any keyword...");return}b(r)},validationSchema:k}),C=(r,s)=>{let a=`/holdingPropertyDetails/${s}`;Q(r,a,B)};n.useEffect(()=>{u(window.localStorage.getItem("userEmail").replace(/['"]/g,""))},[window.localStorage.getItem("userEmail")]);const S=[{Header:`${o("mainHoldingPage.propertyZone.label")}`,accessor:"zone_name",Cell:({cell:r})=>e.jsxs("div",{children:[e.jsx("span",{children:r.row.original.zone_name=="A"&&"A-East Zone"}),e.jsx("span",{children:r.row.original.zone_name=="B"&&"B-West Zone"}),e.jsx("span",{children:r.row.original.zone_name=="C"&&"C-North Zone"}),e.jsx("span",{children:r.row.original.zone_name=="D"&&"D-South Zone"})]})},{Header:`${o("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_name"},{Header:`${o("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name"},{Header:`${o("mainHoldingPage.propertyNo.label")}`,accessor:"pt_no",Cell:({cell:r})=>e.jsx("span",{children:d(r.row.original.property_no)})},{Header:`${o("mainHoldingPage.holdingNumber.label")}`,accessor:"holding_no",Cell:({cell:r})=>e.jsx("span",{children:d(r.row.original.holding_no)})},{Header:`${o("mainHoldingPage.holdingMobileNumber.label")}`,accessor:"mobile_no",Cell:({cell:r})=>e.jsx("span",{children:d(r.row.original.mobile_no)})},{Header:`${o("mainHoldingPage.holdingAddress.label")}`,accessor:"prop_address",Cell:({cell:r})=>e.jsx("span",{children:d(r.row.original.prop_address)})},{Header:`${o("mainHoldingPage.holdingStatus.label")}`,Cell:({cell:r})=>e.jsxs("div",{children:[r.row.original.paid_status===1&&e.jsx("span",{className:"text-green-900 font-semibold",children:"Fully Paid"}),r.row.original.paid_status===2&&e.jsx("span",{className:"text-red-600 font-semibold",children:"Payment Pending"})]})},{Header:`${o("mainHoldingPage.holdingAction.label")}`,accessor:"id",Cell:({cell:r})=>e.jsxs("div",{children:[e.jsx("button",{onClick:s=>C(s,r.row.values.id),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:o("mainHoldingPage.holdingView.label")}),i=="vijay@gmail.com"||i=="swatiindustries553@gmail.com"||i=="stateadmin@gmail.com"||i=="onlyamit0727@gmail.com"?e.jsx("button",{className:"bg-orange-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-orange-700 text-white mx-2",onClick:()=>{i!=="swatiindustries553@gmail.com"&&(window.localStorage.setItem("userEmail","vijay@gmail.com"),u("vijay@gmail.com"))},children:e.jsx(W,{to:`/holding-nakkal/${r.row.values.id}`,children:o("mainHoldingPage.holdingNakkal.label")})}):null]})}];n.useEffect(()=>{c!="direct"&&(l.setFieldValue("filterBy",decodeURIComponent(h)),l.setFieldValue("parameter",decodeURIComponent(c)),b({filterBy:decodeURIComponent(h),parameter:decodeURIComponent(c)}))},[]);const A=r=>{let s=r.target.name,a=r.target.value;s=="zoneId"&&I(a)};return e.jsxs(e.Fragment,{children:[P&&e.jsx(T,{}),(t=="re"||t=="mu")&&e.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[e.jsx(V,{className:"inline mr-2 text-3xl"}),"For ",e.jsx("span",{className:"font-semibold",children:t=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",t=="re"?"Re-Assessment":"Mutation"]}),e.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[e.jsxs("div",{className:"hidden sm:flex  ml-5 mt-2 ",children:[e.jsx("img",{src:q,alt:"",className:"w-10 h-10"}),e.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:o("mainHoldingPage.holdingPageHeadingText.label")})]}),e.jsx("form",{onSubmit:l.handleSubmit,onChange:A,children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[o("mainHoldingPage.holdingFilterBy.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...l.getFieldProps("filterBy"),className:"cypress_filterBy cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"",children:o("mainHoldingPage.holdingSelectBtn.label")}),e.jsx("option",{value:"propertyNo",children:o("mainHoldingPage.oldPropertyNo.label")}),e.jsx("option",{value:"holdingNo",children:o("mainHoldingPage.holdingNumber.label")}),e.jsx("option",{value:"ownerName",children:o("mainHoldingPage.holdingOwnersName.label")}),e.jsx("option",{value:"mobileNo",children:o("mainHoldingPage.holdingMobileNumber.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.filterBy&&l.errors.filterBy?l.errors.filterBy:null})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Zone ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:l.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e.jsx("option",{value:"",children:"All Zones"}),e.jsx("option",{value:"1",children:"Zone A-East"}),e.jsx("option",{value:"2",children:"Zone B-West"}),e.jsx("option",{value:"3",children:"Zone C-North"}),e.jsx("option",{value:"4",children:"Zone D-South"})]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.zoneId&&l.errors.zoneId?l.errors.zoneId:null})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:l.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e.jsx("option",{value:"",children:"All Ward"}),m==null?void 0:m.map((r,s)=>e.jsx("option",{value:r.id,children:r.ward_name},s))]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.wardNo&&l.errors.wardNo?l.errors.wardNo:null})]}),"   ",(l.values.filterBy==""||l.values.filterBy!="khataNo")&&e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[o("mainHoldingPage.holdingSearchBy.label")," ",N," ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",...l.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.parameter&&l.errors.parameter?l.errors.parameter:null})]}),l.values.filterBy=="khataNo"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:o("mainHoldingPage.propertyKhataNumber.label")}),e.jsx("input",{type:"text",...l.getFieldProps("khataNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.khataNo&&l.errors.khataNo?l.errors.khataNo:null})]}),e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:o("mainHoldingPage.propertyPlotNumber.label")}),e.jsx("input",{type:"text",...l.getFieldProps("plotNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.plotNo&&l.errors.plotNo?l.errors.plotNo:null})]}),e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:o("mainHoldingPage.propertyMaujaName.label")}),e.jsx("input",{type:"text",...l.getFieldProps("maujaName"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.maujaName&&l.errors.maujaName?l.errors.maujaName:null})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",e.jsxs("p",{className:"flex",children:[" ",e.jsxs("span",{className:"mt-1 mr-2",children:[" ",e.jsx(M,{})," "]})," ",o("mainHoldingPage.searchHoldingRecord.label")]})]})})]})})]}),e.jsxs("div",{className:"mt-10",children:[p!=null&&e.jsx(G,{api:_,columns:S,requestBody:p,changeData:j}),e.jsx("div",{className:"w-full h-40"})]})]})}export{le as default};
