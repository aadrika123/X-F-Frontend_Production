import{r as n,_ as A,Y as $,u as E,a as F,b as f,e as Z,K as L,q as R,s as D,w as U,j as e,W as c,ay as W,ar as T,N as V,Z as q,U as M,g as O,$ as K,Q as y,X as Q,A as X,aj as Y}from"./index-79cb323a.js";const G=n.lazy(()=>A(()=>import("./index-79cb323a.js").then(l=>l.d$),["assets/index-79cb323a.js","assets/index-a92e433a.css"]));function re(){const{t:l}=$(),[j,J]=n.useState(),{type:t,filterParam:m,searchValueParam:d}=E(),[u,p]=n.useState(null),[N,w]=n.useState(0),[g,v]=n.useState([]),[P,h]=n.useState(!1),[a,x]=n.useState(null);console.log("User Email:",a),a=="vijay@gmail.com"||a=="swatiindustries553@gmail.com"?console.log("Condition is true"):console.log("Condition is false"),F("Search Holding"),console.log("search params...",t," ",m," ",d);const{api_getWardListByLogin:ee,api_filterPropertyDetails:_}=O(),{api_newWardByZoneId:H}=Y();f();const B=Z();L(),console.log("last url.......");const b=o=>{(o==null?void 0:o.filterBy)=="khataNo"?p({filteredBy:o==null?void 0:o.filterBy,zoneId:o==null?void 0:o.zoneId,wardId:o==null?void 0:o.wardId,isLegacy:!1}):p({filteredBy:o==null?void 0:o.filterBy,zoneId:o==null?void 0:o.zoneId,wardId:o==null?void 0:o.wardId,parameter:o==null?void 0:o.parameter,wardId:o==null?void 0:o.wardId}),w(s=>s+1),K(`/property/search/fresh/${encodeURIComponent((o==null?void 0:o.parameter)==null||(o==null?void 0:o.parameter)==""?"direct":o==null?void 0:o.filterBy)}/${encodeURIComponent((o==null?void 0:o.parameter)==null||(o==null?void 0:o.parameter)==""?"direct":o==null?void 0:o.parameter)}`)},I=o=>{h(!0),r.setFieldValue("wardId","");let s={zoneId:o};console.log("before fetch wardby old ward...",s),X.post(H,s,f()).then(function(i){console.log("wardlist by zone id list ....",i.data.data),v(i.data.data),h(!1)}).catch(function(i){console.log("errorrr.... ",i),h(!1)})},C=R({filterBy:D().required("This is a required field !")}),r=U({initialValues:{filterBy:"",wardId:"",zoneId:""},onSubmit:o=>{if(o.filterBy!="khataNo"){if(o.parameter==""){y.info("Enter any keyword...");return}}else if(!(o.khataNo!=""||o.plotNo!=""||o.maujaName!="")){y.info("Enter any keyword...");return}b(o)},validationSchema:C}),k=(o,s)=>{let i=`/holdingPropertyDetails/${s}`;Q(o,i,B)};n.useEffect(()=>{x(window.localStorage.getItem("userEmail").replace(/['"]/g,""))},[window.localStorage.getItem("userEmail")]);const S=[{Header:`${l("mainHoldingPage.propertyZone.label")}`,accessor:"zone_name",Cell:({cell:o})=>e.jsxs("div",{children:[e.jsx("span",{children:o.row.original.zone_name=="A"&&"A-East Zone"}),e.jsx("span",{children:o.row.original.zone_name=="B"&&"B-West Zone"}),e.jsx("span",{children:o.row.original.zone_name=="C"&&"C-North Zone"}),e.jsx("span",{children:o.row.original.zone_name=="D"&&"D-South Zone"})]})},{Header:`${l("mainHoldingPage.holdingWardNumber.label")}`,accessor:"ward_name"},{Header:`${l("mainHoldingPage.filterByOwnerName.label")}`,accessor:"owner_name"},{Header:`${l("mainHoldingPage.propertyNo.label")}`,accessor:"pt_no",Cell:({cell:o})=>e.jsx("span",{children:c(o.row.original.property_no)})},{Header:`${l("mainHoldingPage.holdingNumber.label")}`,accessor:"holding_no",Cell:({cell:o})=>e.jsx("span",{children:c(o.row.original.holding_no)})},{Header:`${l("mainHoldingPage.holdingMobileNumber.label")}`,accessor:"mobile_no",Cell:({cell:o})=>e.jsx("span",{children:c(o.row.original.mobile_no)})},{Header:`${l("mainHoldingPage.holdingAddress.label")}`,accessor:"prop_address",Cell:({cell:o})=>e.jsx("span",{children:c(o.row.original.prop_address)})},{Header:`${l("mainHoldingPage.holdingStatus.label")}`,Cell:({cell:o})=>e.jsxs("div",{children:[o.row.original.paid_status===1&&e.jsx("span",{className:"text-green-900 font-semibold",children:"Fully Paid"}),o.row.original.paid_status===2&&e.jsx("span",{className:"text-red-600 font-semibold",children:"Payment Pending"})]})},{Header:`${l("mainHoldingPage.holdingAction.label")}`,accessor:"id",Cell:({cell:o})=>e.jsxs("div",{children:[e.jsx("button",{onClick:s=>k(s,o.row.values.id),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:l("mainHoldingPage.holdingView.label")}),a=="vijay@gmail.com"||a=="swatiindustries553@gmail.com"||a=="stateadmin@gmail.com"||a=="onlyamit0727@gmail.com"?e.jsx("button",{className:"bg-orange-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-orange-700 text-white mx-2",onClick:()=>{a!=="swatiindustries553@gmail.com"&&(window.localStorage.setItem("userEmail","vijay@gmail.com"),x("vijay@gmail.com"))},children:e.jsx(W,{to:`/holding-nakkal/${o.row.values.id}`,children:l("mainHoldingPage.holdingNakkal.label")})}):null]})}];n.useEffect(()=>{d!="direct"&&(r.setFieldValue("filterBy",decodeURIComponent(m)),r.setFieldValue("parameter",decodeURIComponent(d)),b({filterBy:decodeURIComponent(m),parameter:decodeURIComponent(d)}))},[]);const z=o=>{let s=o.target.name,i=o.target.value;s=="zoneId"&&I(i)};return e.jsxs(e.Fragment,{children:[P&&e.jsx(T,{}),(t=="re"||t=="mu")&&e.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[e.jsx(V,{className:"inline mr-2 text-3xl"}),"For ",e.jsx("span",{className:"font-semibold",children:t=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",t=="re"?"Re-Assessment":"Mutation"]}),e.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[e.jsxs("div",{className:"hidden sm:flex  ml-5 mt-2 ",children:[e.jsx("img",{src:q,alt:"",className:"w-10 h-10"}),e.jsx("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:l("mainHoldingPage.holdingPageHeadingText.label")})]}),e.jsx("form",{onSubmit:r.handleSubmit,onChange:z,children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[l("mainHoldingPage.holdingFilterBy.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...r.getFieldProps("filterBy"),className:"cypress_filterBy cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"",children:l("mainHoldingPage.holdingSelectBtn.label")}),e.jsx("option",{value:"propertyNo",children:l("mainHoldingPage.oldPropertyNo.label")}),e.jsx("option",{value:"holdingNo",children:l("mainHoldingPage.holdingNumber.label")}),e.jsx("option",{value:"ownerName",children:l("mainHoldingPage.holdingOwnersName.label")}),e.jsx("option",{value:"mobileNo",children:l("mainHoldingPage.holdingMobileNumber.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:r.touched.filterBy&&r.errors.filterBy?r.errors.filterBy:null})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Zone ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:r.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e.jsx("option",{value:"",children:"All Zones"}),e.jsx("option",{value:"1",children:"Zone A-East"}),e.jsx("option",{value:"2",children:"Zone B-West"}),e.jsx("option",{value:"3",children:"Zone C-North"}),e.jsx("option",{value:"4",children:"Zone D-South"})]}),e.jsx("p",{className:"text-red-500 text-xs",children:r.touched.zoneId&&r.errors.zoneId?r.errors.zoneId:null})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Ward No",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:r.handleChange,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",disabled:!1,children:[e.jsx("option",{value:"",children:"All Ward"}),g==null?void 0:g.map((o,s)=>e.jsx("option",{value:o.id,children:o.ward_name},s))]}),e.jsx("p",{className:"text-red-500 text-xs",children:r.touched.wardNo&&r.errors.wardNo?r.errors.wardNo:null})]}),"   ",(r.values.filterBy==""||r.values.filterBy!="khataNo")&&e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[l("mainHoldingPage.holdingSearchBy.label")," ",j," ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",...r.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:r.touched.parameter&&r.errors.parameter?r.errors.parameter:null})]}),r.values.filterBy=="khataNo"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyKhataNumber.label")}),e.jsx("input",{type:"text",...r.getFieldProps("khataNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:r.touched.khataNo&&r.errors.khataNo?r.errors.khataNo:null})]}),e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyPlotNumber.label")}),e.jsx("input",{type:"text",...r.getFieldProps("plotNo"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:r.touched.plotNo&&r.errors.plotNo?r.errors.plotNo:null})]}),e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("mainHoldingPage.propertyMaujaName.label")}),e.jsx("input",{type:"text",...r.getFieldProps("maujaName"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:r.touched.maujaName&&r.errors.maujaName?r.errors.maujaName:null})]})]}),e.jsx("div",{className:"mt-6",children:e.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",e.jsxs("p",{className:"flex",children:[" ",e.jsxs("span",{className:"mt-1 mr-2",children:[" ",e.jsx(M,{})," "]})," ",l("mainHoldingPage.searchHoldingRecord.label")]})]})})]})})]}),e.jsxs("div",{className:"mt-10",children:[u!=null&&e.jsx(G,{api:_,columns:S,requestBody:u,changeData:N}),e.jsx("div",{className:"w-full h-40"})]})]})}export{re as default};