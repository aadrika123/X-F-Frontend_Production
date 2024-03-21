import{r as n,_ as z,Y as F,u as $,a as E,b as f,e as Z,K as L,q as R,s as D,w as U,j as r,W as d,au as W,ao as q,N as T,Z as V,U as M,g as O,$ as K,Q as y,X as Q,A as X,ai as Y}from"./index-19ed171f.js";const G=n.lazy(()=>z(()=>import("./index-19ed171f.js").then(s=>s.dq),["assets/index-19ed171f.js","assets/index-960bb152.css"]));function oe(){const{t:s}=F(),[N,J]=n.useState(),{type:i,filterParam:h,searchValueParam:c}=$(),[p,u]=n.useState(null),[j,w]=n.useState(0),[m,v]=n.useState([]),[P,g]=n.useState(!1),[t,x]=n.useState(null);E("Search Holding");const{api_getWardListByLogin:ee,api_filterPropertyDetails:_}=O(),{api_newWardByZoneId:H}=Y();f();const B=Z();L();const b=e=>{(e==null?void 0:e.filterBy)=="khataNo"?u({filteredBy:e==null?void 0:e.filterBy,zoneId:e==null?void 0:e.zoneId,wardId:e==null?void 0:e.wardId,isLegacy:!1}):u({filteredBy:e==null?void 0:e.filterBy,zoneId:e==null?void 0:e.zoneId,wardId:e==null?void 0:e.wardId,parameter:e==null?void 0:e.parameter,wardId:e==null?void 0:e.wardId}),w(l=>l+1),K(`/property/search/fresh/${encodeURIComponent((e==null?void 0:e.parameter)==null||(e==null?void 0:e.parameter)==""?"direct":e==null?void 0:e.filterBy)}/${encodeURIComponent((e==null?void 0:e.parameter)==null||(e==null?void 0:e.parameter)==""?"direct":e==null?void 0:e.parameter)}`)},I=e=>{g(!0),o.setFieldValue("wardId","");let l={zoneId:e};X.post(H,l,f()).then(function(a){v(a.data.data),g(!1)}).catch(function(a){g(!1)})},k=R({filterBy:D().required("This is a required field !")}),o=U({initialValues:{filterBy:"",wardId:"",zoneId:""},onSubmit:e=>{if(e.filterBy!="khataNo"){if(e.parameter==""){y.info("Enter any keyword...");return}}else if(!(e.khataNo!=""||e.plotNo!=""||e.maujaName!="")){y.info("Enter any keyword...");return}b(e)},validationSchema:k}),C=(e,l)=>{let a=`/holdingPropertyDetails/${l}`;Q(e,a,B)};n.useEffect(()=>{x(window.localStorage.getItem("userEmail").replace(/['"]/g,""))},[window.localStorage.getItem("userEmail")]);const S=[{Header:`${s("mainHoldingPage.propertyZone.label")}`,accessor:"zone_name",Cell:({cell:e})=>r.jsxs("div",{children:[r.jsx("span",{children:e.row.original.zone_name=="A"&&"A-East Zone"}),r.jsx("span",{children:e.row.original.zone_name=="B"&&"B-West Zone"}),r.jsx("span",{children:e.row.original.zone_name=="C"&&"C-North Zone"}),r.jsx("span",{children:e.row.original.zone_name=="D"&&"D-South Zone"})]})},{Header:`${s("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_name"},{Header:`${s("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name"},{Header:`${s("mainHoldingPage.propertyNo.label")}`,accessor:"pt_no",Cell:({cell:e})=>r.jsx("span",{children:d(e.row.original.property_no)})},{Header:`${s("mainHoldingPage.holdingNumber.label")}`,accessor:"holding_no",Cell:({cell:e})=>r.jsx("span",{children:d(e.row.original.holding_no)})},{Header:`${s("mainHoldingPage.holdingMobileNumber.label")}`,accessor:"mobile_no",Cell:({cell:e})=>r.jsx("span",{children:d(e.row.original.mobile_no)})},{Header:`${s("mainHoldingPage.holdingAddress.label")}`,accessor:"prop_address",Cell:({cell:e})=>r.jsx("span",{children:d(e.row.original.prop_address)})},{Header:`${s("mainHoldingPage.holdingStatus.label")}`,Cell:({cell:e})=>r.jsxs("div",{children:[e.row.original.paid_status===1&&r.jsx("span",{className:"text-green-900 font-semibold",children:"Fully Paid"}),e.row.original.paid_status===2&&r.jsx("span",{className:"text-red-600 font-semibold",children:"Payment Pending"})]})},{Header:`${s("mainHoldingPage.holdingAction.label")}`,accessor:"id",Cell:({cell:e})=>r.jsxs("div",{children:[r.jsx("button",{onClick:l=>C(l,e.row.values.id),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:s("mainHoldingPage.holdingView.label")}),(t=="vijay@gmail.com"||t=="swatiindustries553@gmail.com"||t=="stateadmin@gmail.com")&&e.row.original.paid_status==1?r.jsx("button",{className:"bg-orange-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-orange-700 text-white mx-2",onClick:()=>{t!=="swatiindustries553@gmail.com"&&(window.localStorage.setItem("userEmail","vijay@gmail.com"),x("vijay@gmail.com"))},children:r.jsx(W,{to:`/holding-nakkal/${e.row.values.id}`,children:s("mainHoldingPage.holdingNakkal.label")})}):null]})}];n.useEffect(()=>{c!="direct"&&(o.setFieldValue("filterBy",decodeURIComponent(h)),o.setFieldValue("parameter",decodeURIComponent(c)),b({filterBy:decodeURIComponent(h),parameter:decodeURIComponent(c)}))},[]);const A=e=>{let l=e.target.name,a=e.target.value;l=="zoneId"&&I(a)};return r.jsxs(r.Fragment,{children:[P&&r.jsx(q,{}),(i=="re"||i=="mu")&&r.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[r.jsx(T,{className:"inline mr-2 text-3xl"}),"For ",r.jsx("span",{className:"font-semibold",children:i=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",i=="re"?"Re-Assessment":"Mutation"]}),r.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[r.jsxs("div",{className:"hidden sm:flex  ml-5 mt-2 ",children:[r.jsx("img",{src:V,alt:"",className:"w-10 h-10"}),r.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:s("mainHoldingPage.holdingPageHeadingText.label")})]}),r.jsx("form",{onSubmit:o.handleSubmit,onChange:A,children:r.jsxs("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[r.jsxs("div",{children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s("mainHoldingPage.holdingFilterBy.label"),r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsxs("select",{...o.getFieldProps("filterBy"),className:"cypress_filterBy cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[r.jsx("option",{value:"",children:s("mainHoldingPage.holdingSelectBtn.label")}),r.jsx("option",{value:"propertyNo",children:s("mainHoldingPage.oldPropertyNo.label")}),r.jsx("option",{value:"holdingNo",children:s("mainHoldingPage.holdingNumber.label")}),r.jsx("option",{value:"ownerName",children:s("mainHoldingPage.holdingOwnersName.label")}),r.jsx("option",{value:"mobileNo",children:s("mainHoldingPage.holdingMobileNumber.label")})]}),r.jsx("p",{className:"text-red-500 text-xs",children:o.touched.filterBy&&o.errors.filterBy?o.errors.filterBy:null})]}),r.jsxs("div",{children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Zone ",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsxs("select",{name:"zoneId",onChange:o.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[r.jsx("option",{value:"",children:"All Zones"}),r.jsx("option",{value:"1",children:"Zone A-East"}),r.jsx("option",{value:"2",children:"Zone B-West"}),r.jsx("option",{value:"3",children:"Zone C-North"}),r.jsx("option",{value:"4",children:"Zone D-South"})]}),r.jsx("p",{className:"text-red-500 text-xs",children:o.touched.zoneId&&o.errors.zoneId?o.errors.zoneId:null})]}),r.jsxs("div",{children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsxs("select",{name:"wardId",onChange:o.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[r.jsx("option",{value:"",children:"All Ward"}),m==null?void 0:m.map((e,l)=>r.jsx("option",{value:e.id,children:e.ward_name},l))]}),r.jsx("p",{className:"text-red-500 text-xs",children:o.touched.wardNo&&o.errors.wardNo?o.errors.wardNo:null})]}),"   ",(o.values.filterBy==""||o.values.filterBy!="khataNo")&&r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s("mainHoldingPage.holdingSearchBy.label")," ",N," ",r.jsx("span",{className:"text-red-500",children:"*"})]}),r.jsx("input",{type:"text",...o.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:o.touched.parameter&&o.errors.parameter?o.errors.parameter:null})]}),o.values.filterBy=="khataNo"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:s("mainHoldingPage.propertyKhataNumber.label")}),r.jsx("input",{type:"text",...o.getFieldProps("khataNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:o.touched.khataNo&&o.errors.khataNo?o.errors.khataNo:null})]}),r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:s("mainHoldingPage.propertyPlotNumber.label")}),r.jsx("input",{type:"text",...o.getFieldProps("plotNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:o.touched.plotNo&&o.errors.plotNo?o.errors.plotNo:null})]}),r.jsxs("div",{className:"mt-3 sm:mt-0",children:[r.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:s("mainHoldingPage.propertyMaujaName.label")}),r.jsx("input",{type:"text",...o.getFieldProps("maujaName"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),r.jsx("p",{className:"text-red-500 text-xs",children:o.touched.maujaName&&o.errors.maujaName?o.errors.maujaName:null})]})]}),r.jsx("div",{className:"mt-6",children:r.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",r.jsxs("p",{className:"flex",children:[" ",r.jsxs("span",{className:"mt-1 mr-2",children:[" ",r.jsx(M,{})," "]})," ",s("mainHoldingPage.searchHoldingRecord.label")]})]})})]})})]}),r.jsxs("div",{className:"mt-10",children:[p!=null&&r.jsx(G,{api:_,columns:S,requestBody:p,changeData:j}),r.jsx("div",{className:"w-full h-40"})]})]})}export{oe as default};