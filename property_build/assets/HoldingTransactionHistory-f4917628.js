import{r as c,k,u as B,bv as R,a as $,l as q,m as v,o as E,be as _,A as w,N as M,j as e,B as U,S as V,n as r,bb as L,bP as O}from"./index-5690baf9.js";import{T as W}from"./TopTabs-b7b224b9.js";function X(Y){var u,N;const[i,H]=c.useState([]),[P,a]=c.useState(!1),[s,S]=c.useState(),[G,T]=c.useState(!0),[J,m]=c.useState(!1),[z,g]=c.useState(!1);k("Holding Payment History");const{t:l}=B(),{id:p}=R(),h=$(),{api_getSpecificHoldingTranscationHistory:y}=L(),{api_getPropHoldingDetailsById:A}=O(),x={api:{api_getTranscationHistory:{method:"get",url:y}},transactionInfo:{title:""},tableColumns:[{Header:"#",Cell:({row:t})=>e.jsx("div",{className:"pr-2",children:t.index+1})},{Header:"Application No.",accessor:"saf_no"},{Header:"Transaction No.",accessor:"tran_no"},{Header:"Payment Mode",accessor:"payment_mode"},{Header:"Transaction Date",accessor:"created_at"},{Header:"Amount",accessor:"amount"}],filters:{applicationNo:!0}};console.log("passed api at inbox list hello bellow...",x),console.log("passed api at inbox col...",x==null?void 0:x.tableColumns),[...x==null?void 0:x.tableColumns];const C=q({fromDate:v().required("Select from date"),toDate:v().required("Select to date")}),b=E({initialValues:{fromDate:_(new Date).format("yy-MM-DD"),toDate:_(new Date).format("yy-MM-DD"),consumerCategory:"",consumerType:"",buildingType:"",paymentMode:"",wardNo:"",tcId:""},onSubmit:t=>{T(!1),f(b.values.fromDate,b.values.toDate)},validationSchema:C});c.useEffect(()=>{console.log("fethcing in useEffect"),f()},[]);const f=()=>{m(!1),g(!1),a(!0);let t={propId:p};console.log("before fetch factory data"),w.post(y,t,M()).then(function(o){var n,d;console.log("all transcation list at holding specific----- ",o==null?void 0:o.data),(n=o==null?void 0:o.data)!=null&&n.status&&(H((d=o==null?void 0:o.data)==null?void 0:d.data),m(!0)),a(!1)}).catch(function(o){console.log("error at transactions fetch ",o),m(!0),g(!0),a(!1)})},I=()=>{a(!0);const o={headers:{Authorization:`Bearer ${window.localStorage.getItem("token")}`,Accept:"application/json"}};w.post(`${A}`,{propertyId:p},o).then(function(n){var d,j;console.log("view prop prop full details...",(d=n==null?void 0:n.data)==null?void 0:d.data),S((j=n==null?void 0:n.data)==null?void 0:j.data),a(!1)}).catch(function(n){console.log("==2 details by id error...",n),a(!1)})};return c.useEffect(()=>{I()},[]),P?e.jsx(e.Fragment,{children:e.jsx(U,{})}):z?e.jsx(V,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-ful md:px-10 md:pt-5 mx-auto",children:[(x==null?void 0:x.transactionInfo.title)!="",e.jsx(W,{title:`${l("mainHoldingPage.paymentHomeHeadingText.label")}`,type:"holding",id:p,safNo:"",active:"payment"}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(s==null?void 0:s.new_holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyHoldingNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(s==null?void 0:s.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:r(s==null?void 0:s.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyOwnershipType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(s==null?void 0:s.property_type)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[l("mainHoldingPage.propertyType.label"),l("mainHoldingPage.propertyType.label")]})]})]}),e.jsxs("div",{className:"flex space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(s==null?void 0:s.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyHoldingType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(s==null?void 0:s.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyMobileTower.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[r(s==null?void 0:s.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:r(s==null?void 0:s.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(s==null?void 0:s.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyRainwaterHarvest.label")})]})]})]})}),(i==null?void 0:i.length)==0&&e.jsx("div",{className:"text-center mt-10",children:e.jsx("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl ",children:" No Payments Found Yet"})}),(i==null?void 0:i.length)!=0&&e.jsx("div",{className:"mt-10 bg-white shadow-xl  rounded-lg",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-900",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("mainHoldingPage.paymentTransactionNum.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("mainHoldingPage.paymentMode.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("mainHoldingPage.paymentDate.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("mainHoldingPage.paymentDateFrom.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("mainHoldingPage.paymentUptoDate.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("mainHoldingPage.paymentAmount.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("mainHoldingPage.paymentReceipt1.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("mainHoldingPage.paymentReceipt2.label")})]})}),e.jsxs("tbody",{className:"text-sm",children:[(u=i==null?void 0:i.Holding)==null?void 0:u.map((t,o)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:o+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.tran_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.payment_mode)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.tran_date)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[r(t==null?void 0:t.from_qtr),"/",r(t==null?void 0:t.from_fyear)]}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[r(t==null?void 0:t.to_qtr),"/",r(t==null?void 0:t.to_fyear)]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("button",{onClick:()=>h(`/paymentReceipt/${encodeURIComponent(t==null?void 0:t.tran_no)}/holding`),type:"button",className:"cypress_owner_add_update px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("button",{onClick:()=>h(`/rmc-reciept/${encodeURIComponent(t==null?void 0:t.tran_no)}`),type:"button",className:"cypress_owner_add_update px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"RMC Receipt"})})]})),(N=i==null?void 0:i.Saf)==null?void 0:N.map((t,o)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:o+1}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[r(t==null?void 0:t.tran_no),e.jsx("span",{className:"bg-indigo-500 text-white text-xs px-2 rounded-sm ml-2",children:"SAF"})]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.payment_mode)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.tran_date)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[r(t==null?void 0:t.from_qtr),"/",r(t==null?void 0:t.from_fyear)]}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[r(t==null?void 0:t.to_qtr),"/",r(t==null?void 0:t.to_fyear)]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",colSpan:2,children:e.jsx("button",{onClick:()=>h(`/paymentReceipt/${encodeURIComponent(t==null?void 0:t.tran_no)}/saf`),type:"button",className:"cypress_owner_add_update px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]}))]})]})}),e.jsx("div",{className:"w-full mt-52"})]})})}export{X as default};
