import{r as n,_ as A,Y as E,u as F,a as $,b as f,e as Z,K as L,q as R,s as D,w as U,j as o,W as c,au as W,ao as M,N as T,Z as V,U as q,g as O,$ as K,Q as y,X as Q,A as X,ai as Y}from"./index-b7a9b315.js";const G=n.lazy(()=>A(()=>import("./index-b7a9b315.js").then(l=>l.dM),["assets/index-b7a9b315.js","assets/index-78e52e66.css"]));function re(){const{t:l}=E(),[N,J]=n.useState(),{type:t,filterParam:m,searchValueParam:d}=F(),[u,p]=n.useState(null),[j,w]=n.useState(0),[g,v]=n.useState([]),[P,h]=n.useState(!1),[a,x]=n.useState(null);console.log("User Email:",a),a=="vijay@gmail.com"||a=="swatiindustries553@gmail.com"?console.log("Condition is true"):console.log("Condition is false"),$("Search Holding"),console.log("search params...",t," ",m," ",d);const{api_getWardListByLogin:ee,api_filterPropertyDetails:_}=O(),{api_newWardByZoneId:H}=Y();f();const B=Z();L(),console.log("last url.......");const b=e=>{(e==null?void 0:e.filterBy)=="khataNo"?p({filteredBy:e==null?void 0:e.filterBy,zoneId:e==null?void 0:e.zoneId,wardId:e==null?void 0:e.wardId,isLegacy:!1}):p({filteredBy:e==null?void 0:e.filterBy,zoneId:e==null?void 0:e.zoneId,wardId:e==null?void 0:e.wardId,parameter:e==null?void 0:e.parameter,wardId:e==null?void 0:e.wardId}),w(s=>s+1),K(`/property/search/fresh/${encodeURIComponent((e==null?void 0:e.parameter)==null||(e==null?void 0:e.parameter)==""?"direct":e==null?void 0:e.filterBy)}/${encodeURIComponent((e==null?void 0:e.parameter)==null||(e==null?void 0:e.parameter)==""?"direct":e==null?void 0:e.parameter)}`)},I=e=>{h(!0),r.setFieldValue("wardId","");let s={zoneId:e};console.log("before fetch wardby old ward...",s),X.post(H,s,f()).then(function(i){console.log("wardlist by zone id list ....",i.data.data),v(i.data.data),h(!1)}).catch(function(i){console.log("errorrr.... ",i),h(!1)})},C=R({filterBy:D().required("This is a required field !")}),r=U({initialValues:{filterBy:"",wardId:"",zoneId:""},onSubmit:e=>{if(e.filterBy!="khataNo"){if(e.parameter==""){y.info("Enter any keyword...");return}}else if(!(e.khataNo!=""||e.plotNo!=""||e.maujaName!="")){y.info("Enter any keyword...");return}b(e)},validationSchema:C}),k=(e,s)=>{let i=`/holdingPropertyDetails/${s}`;Q(e,i,B)};n.useEffect(()=>{x(window.localStorage.getItem("userEmail").replace(/['"]/g,""))},[window.localStorage.getItem("userEmail")]);const S=[{Header:`${l("mainHoldingPage.propertyZone.label")}`,accessor:"zone_name",Cell:({cell:e})=>o.jsxs("div",{children:[o.jsx("span",{children:e.row.original.zone_name=="A"&&"A-East Zone"}),o.jsx("span",{children:e.row.original.zone_name=="B"&&"B-West Zone"}),o.jsx("span",{children:e.row.original.zone_name=="C"&&"C-North Zone"}),o.jsx("span",{children:e.row.original.zone_name=="D"&&"D-South Zone"})]})},{Header:`${l("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_name"},{Header:`${l("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name"},{Header:`${l("mainHoldingPage.propertyNo.label")}`,accessor:"pt_no",Cell:({cell:e})=>o.jsx("span",{children:c(e.row.original.property_no)})},{Header:`${l("mainHoldingPage.holdingNumber.label")}`,accessor:"holding_no",Cell:({cell:e})=>o.jsx("span",{children:c(e.row.original.holding_no)})},{Header:`${l("mainHoldingPage.holdingMobileNumber.label")}`,accessor:"mobile_no",Cell:({cell:e})=>o.jsx("span",{children:c(e.row.original.mobile_no)})},{Header:`${l("mainHoldingPage.holdingAddress.label")}`,accessor:"prop_address",Cell:({cell:e})=>o.jsx("span",{children:c(e.row.original.prop_address)})},{Header:`${l("mainHoldingPage.holdingStatus.label")}`,Cell:({cell:e})=>o.jsxs("div",{children:[e.row.original.paid_status===1&&o.jsx("span",{className:"text-green-900 font-semibold",children:"Fully Paid"}),e.row.original.paid_status===2&&o.jsx("span",{className:"text-red-600 font-semibold",children:"Payment Pending"})]})},{Header:`${l("mainHoldingPage.holdingAction.label")}`,accessor:"id",Cell:({cell:e})=>o.jsxs("div",{children:[o.jsx("button",{onClick:s=>k(s,e.row.values.id),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:l("mainHoldingPage.holdingView.label")}),(a=="vijay@gmail.com"||a=="swatiindustries553@gmail.com"||a=="stateadmin@gmail.com"||a=="onlyamit0727@gmail.com")&&e.row.original.paid_status==1?o.jsx("button",{className:"bg-orange-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-orange-700 text-white mx-2",onClick:()=>{a!=="swatiindustries553@gmail.com"&&(window.localStorage.setItem("userEmail","vijay@gmail.com"),x("vijay@gmail.com"))},children:o.jsx(W,{to:`/holding-nakkal/${e.row.values.id}`,children:l("mainHoldingPage.holdingNakkal.label")})}):null]})}];n.useEffect(()=>{d!="direct"&&(r.setFieldValue("filterBy",decodeURIComponent(m)),r.setFieldValue("parameter",decodeURIComponent(d)),b({filterBy:decodeURIComponent(m),parameter:decodeURIComponent(d)}))},[]);const z=e=>{let s=e.target.name,i=e.target.value;s=="zoneId"&&I(i)};return o.jsxs(o.Fragment,{children:[P&&o.jsx(M,{}),(t=="re"||t=="mu")&&o.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[o.jsx(T,{className:"inline mr-2 text-3xl"}),"For ",o.jsx("span",{className:"font-semibold",children:t=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",t=="re"?"Re-Assessment":"Mutation"]}),o.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[o.jsxs("div",{className:"hidden sm:flex  ml-5 mt-2 ",children:[o.jsx("img",{src:V,alt:"",className:"w-10 h-10"}),o.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:l("mainHoldingPage.holdingPageHeadingText.label")})]}),o.jsx("form",{onSubmit:r.handleSubmit,onChange:z,children:o.jsxs("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[o.jsxs("div",{children:[o.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[l("mainHoldingPage.holdingFilterBy.label"),o.jsx("span",{className:"text-red-500",children:"*"})]}),o.jsxs("select",{...r.getFieldProps("filterBy"),className:"cypress_filterBy cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[o.jsx("option",{value:"",children:l("mainHoldingPage.holdingSelectBtn.label")}),o.jsx("option",{value:"propertyNo",children:l("mainHoldingPage.oldPropertyNo.label")}),o.jsx("option",{value:"holdingNo",children:l("mainHoldingPage.holdingNumber.label")}),o.jsx("option",{value:"ownerName",children:l("mainHoldingPage.holdingOwnersName.label")}),o.jsx("option",{value:"mobileNo",children:l("mainHoldingPage.holdingMobileNumber.label")})]}),o.jsx("p",{className:"text-red-500 text-xs",children:r.touched.filterBy&&r.errors.filterBy?r.errors.filterBy:null})]}),o.jsxs("div",{children:[o.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Zone ",o.jsx("span",{className:"text-red-500",children:"*"})]}),o.jsxs("select",{name:"zoneId",onChange:r.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[o.jsx("option",{value:"",children:"All Zones"}),o.jsx("option",{value:"1",children:"Zone A-East"}),o.jsx("option",{value:"2",children:"Zone B-West"}),o.jsx("option",{value:"3",children:"Zone C-North"}),o.jsx("option",{value:"4",children:"Zone D-South"})]}),o.jsx("p",{className:"text-red-500 text-xs",children:r.touched.zoneId&&r.errors.zoneId?r.errors.zoneId:null})]}),o.jsxs("div",{children:[o.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No",o.jsx("span",{className:"text-red-500",children:"*"})]}),o.jsxs("select",{name:"wardId",onChange:r.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[o.jsx("option",{value:"",children:"All Ward"}),g==null?void 0:g.map((e,s)=>o.jsx("option",{value:e.id,children:e.ward_name},s))]}),o.jsx("p",{className:"text-red-500 text-xs",children:r.touched.wardNo&&r.errors.wardNo?r.errors.wardNo:null})]}),"   ",(r.values.filterBy==""||r.values.filterBy!="khataNo")&&o.jsxs("div",{className:"mt-3 sm:mt-0",children:[o.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[l("mainHoldingPage.holdingSearchBy.label")," ",N," ",o.jsx("span",{className:"text-red-500",children:"*"})]}),o.jsx("input",{type:"text",...r.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),o.jsx("p",{className:"text-red-500 text-xs",children:r.touched.parameter&&r.errors.parameter?r.errors.parameter:null})]}),r.values.filterBy=="khataNo"&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mt-3 sm:mt-0",children:[o.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyKhataNumber.label")}),o.jsx("input",{type:"text",...r.getFieldProps("khataNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),o.jsx("p",{className:"text-red-500 text-xs",children:r.touched.khataNo&&r.errors.khataNo?r.errors.khataNo:null})]}),o.jsxs("div",{className:"mt-3 sm:mt-0",children:[o.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyPlotNumber.label")}),o.jsx("input",{type:"text",...r.getFieldProps("plotNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),o.jsx("p",{className:"text-red-500 text-xs",children:r.touched.plotNo&&r.errors.plotNo?r.errors.plotNo:null})]}),o.jsxs("div",{className:"mt-3 sm:mt-0",children:[o.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyMaujaName.label")}),o.jsx("input",{type:"text",...r.getFieldProps("maujaName"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),o.jsx("p",{className:"text-red-500 text-xs",children:r.touched.maujaName&&r.errors.maujaName?r.errors.maujaName:null})]})]}),o.jsx("div",{className:"mt-6",children:o.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",o.jsxs("p",{className:"flex",children:[" ",o.jsxs("span",{className:"mt-1 mr-2",children:[" ",o.jsx(q,{})," "]})," ",l("mainHoldingPage.searchHoldingRecord.label")]})]})})]})})]}),o.jsxs("div",{className:"mt-10",children:[u!=null&&o.jsx(G,{api:_,columns:S,requestBody:u,changeData:j}),o.jsx("div",{className:"w-full h-40"})]})]})}export{re as default};
