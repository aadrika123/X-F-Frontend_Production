import{r as o,a as I,Y as B,u as k,e as $,q,s as u,w as R,au as v,A as H,b as E,j as e,B as M,S as U,n as r,al as V,P as L}from"./index-3a3e7484.js";import{T as O}from"./TopTabs-dfc98a76.js";function K(Y){var N,j;const[n,_]=o.useState([]),[w,a]=o.useState(!1),[s,P]=o.useState(),[W,S]=o.useState(!0),[Z,m]=o.useState(!1),[T,p]=o.useState(!1);I("Holding Payment History");const{t:l}=B(),{id:h}=k(),g=$(),{api_getSpecificHoldingTranscationHistory:y}=V(),{api_getPropHoldingDetailsById:A}=L(),d={api:{api_getTranscationHistory:{method:"get",url:y}},transactionInfo:{title:""},tableColumns:[{Header:"#",Cell:({row:t})=>e.jsx("div",{className:"pr-2",children:t.index+1})},{Header:"Application No.",accessor:"saf_no"},{Header:"Transaction No.",accessor:"tran_no"},{Header:"Payment Mode",accessor:"payment_mode"},{Header:"Transaction Date",accessor:"created_at"},{Header:"Amount",accessor:"amount"}],filters:{applicationNo:!0}};[...d==null?void 0:d.tableColumns];const z=q({fromDate:u().required("Select from date"),toDate:u().required("Select to date")}),f=R({initialValues:{fromDate:v(new Date).format("yy-MM-DD"),toDate:v(new Date).format("yy-MM-DD"),consumerCategory:"",consumerType:"",buildingType:"",paymentMode:"",wardNo:"",tcId:""},onSubmit:t=>{S(!1),b(f.values.fromDate,f.values.toDate)},validationSchema:z});o.useEffect(()=>{b()},[]);const b=()=>{m(!1),p(!1),a(!0);let t={propId:h};H.post(y,t,E()).then(function(i){var x,c;(x=i==null?void 0:i.data)!=null&&x.status&&(_((c=i==null?void 0:i.data)==null?void 0:c.data),m(!0)),a(!1)}).catch(function(i){m(!0),p(!0),a(!1)})},C=()=>{a(!0);const i={headers:{Authorization:`Bearer ${window.localStorage.getItem("token")}`,Accept:"application/json"}};H.post(`${A}`,{propertyId:h},i).then(function(x){var c;P((c=x==null?void 0:x.data)==null?void 0:c.data),a(!1)}).catch(function(x){a(!1)})};return o.useEffect(()=>{C()},[]),w?e.jsx(e.Fragment,{children:e.jsx(M,{})}):T?e.jsx(U,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-ful md:px-10 md:pt-5 mx-auto",children:[(d==null?void 0:d.transactionInfo.title)!="",e.jsx(O,{title:`${l("mainHoldingPage.paymentHomeHeadingText.label")}`,type:"holding",id:h,safNo:"",active:"payment"}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(s==null?void 0:s.applicant_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.filterByOwnerName.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(s==null?void 0:s.corr_address)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.paymentCitizenAddress.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(s==null?void 0:s.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyHoldingNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(s==null?void 0:s.zone_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyZone.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(s==null?void 0:s.ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:r(s==null?void 0:s.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyOwnershipType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(s==null?void 0:s.property_type)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[l("mainHoldingPage.propertyType.label"),l("mainHoldingPage.propertyType.label")]})]})]}),e.jsxs("div",{className:"flex space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(s==null?void 0:s.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyHoldingType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(s==null?void 0:s.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyMobileTower.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[r(s==null?void 0:s.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:r(s==null?void 0:s.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:r(s==null?void 0:s.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyRainwaterHarvest.label")})]})]})]})}),(n==null?void 0:n.length)==0&&e.jsx("div",{className:"text-center mt-10",children:e.jsx("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl ",children:l("mainHoldingPage.noPaymentsFoundYet.label")})}),(n==null?void 0:n.length)!=0&&e.jsx("div",{className:"mt-10 bg-white shadow-xl  rounded-lg",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-900",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("mainHoldingPage.paymentTransactionNum.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("mainHoldingPage.paymentMode.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("mainHoldingPage.paymentDate.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("mainHoldingPage.paymentDateFrom.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("mainHoldingPage.paymentUptoDate.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("mainHoldingPage.paymentAmount.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:l("mainHoldingPage.paymentReceipt1.label")})]})}),e.jsxs("tbody",{className:"text-sm",children:[(N=n==null?void 0:n.Holding)==null?void 0:N.map((t,i)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.tran_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.payment_mode)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.tran_date)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.from_fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.to_fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("button",{onClick:()=>g(`/paymentReceipt/${encodeURIComponent(t==null?void 0:t.id)}/holding`),type:"button",className:"cypress_owner_add_update px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]})),(j=n==null?void 0:n.Saf)==null?void 0:j.map((t,i)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i+1}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[r(t==null?void 0:t.tran_no),e.jsx("span",{className:"bg-indigo-500 text-white text-xs px-2 rounded-sm ml-2",children:"SAF"})]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.payment_mode)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.tran_date)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[r(t==null?void 0:t.from_qtr),"/",r(t==null?void 0:t.from_fyear)]}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[r(t==null?void 0:t.to_qtr),"/",r(t==null?void 0:t.to_fyear)]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(t==null?void 0:t.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",colSpan:2,children:e.jsx("button",{onClick:()=>g(`/paymentReceipt/${encodeURIComponent(t==null?void 0:t.tran_no)}/saf`),type:"button",className:"cypress_owner_add_update px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]}))]})]})}),e.jsx("div",{className:"w-full mt-52"})]})})}export{K as default};
