import{r as x,a as B,Y as k,u as $,e as q,q as E,s as v,w as M,ap as H,A as w,b as R,j as e,B as U,S as V,n as l,ai as L,P as O}from"./index-025cc29f.js";import{T as Y}from"./TopTabs-6a50b797.js";function Q(W){var N,j;const[o,_]=x.useState([]),[P,d]=x.useState(!1),[s,S]=x.useState(),[Z,T]=x.useState(!0),[G,m]=x.useState(!1),[A,g]=x.useState(!1);B("Holding Payment History");const{t:r}=k(),{id:h}=$(),p=q(),{api_getSpecificHoldingTranscationHistory:y}=L(),{api_getPropHoldingDetailsById:z}=O(),a={api:{api_getTranscationHistory:{method:"get",url:y}},transactionInfo:{title:""},tableColumns:[{Header:"#",Cell:({row:t})=>e.jsx("div",{className:"pr-2",children:t.index+1})},{Header:"Application No.",accessor:"saf_no"},{Header:"Transaction No.",accessor:"tran_no"},{Header:"Payment Mode",accessor:"payment_mode"},{Header:"Transaction Date",accessor:"created_at"},{Header:"Amount",accessor:"amount"}],filters:{applicationNo:!0}};console.log("passed api at inbox list hello bellow...",a),console.log("passed api at inbox col...",a==null?void 0:a.tableColumns),[...a==null?void 0:a.tableColumns];const C=E({fromDate:v().required("Select from date"),toDate:v().required("Select to date")}),f=M({initialValues:{fromDate:H(new Date).format("yy-MM-DD"),toDate:H(new Date).format("yy-MM-DD"),consumerCategory:"",consumerType:"",buildingType:"",paymentMode:"",wardNo:"",tcId:""},onSubmit:t=>{T(!1),b(f.values.fromDate,f.values.toDate)},validationSchema:C});x.useEffect(()=>{console.log("fethcing in useEffect"),b()},[]);const b=()=>{m(!1),g(!1),d(!0);let t={propId:h};console.log("before fetch factory data"),w.post(y,t,R()).then(function(i){var n,c;console.log("all transcation list at holding specific----- ",i==null?void 0:i.data),(n=i==null?void 0:i.data)!=null&&n.status&&(_((c=i==null?void 0:i.data)==null?void 0:c.data),m(!0)),d(!1)}).catch(function(i){console.log("error at transactions fetch ",i),m(!0),g(!0),d(!1)})},I=()=>{d(!0);const i={headers:{Authorization:`Bearer ${window.localStorage.getItem("token")}`,Accept:"application/json"}};w.post(`${z}`,{propertyId:h},i).then(function(n){var c,u;console.log("view prop prop full details...",(c=n==null?void 0:n.data)==null?void 0:c.data),S((u=n==null?void 0:n.data)==null?void 0:u.data),d(!1)}).catch(function(n){console.log("==2 details by id error...",n),d(!1)})};return x.useEffect(()=>{I()},[]),P?e.jsx(e.Fragment,{children:e.jsx(U,{})}):A?e.jsx(V,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-ful md:px-10 md:pt-5 mx-auto",children:[(a==null?void 0:a.transactionInfo.title)!="",e.jsx(Y,{title:`${r("mainHoldingPage.paymentHomeHeadingText.label")}`,type:"holding",id:h,safNo:"",active:"payment"}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l(s==null?void 0:s.applicant_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.filterByOwnerName.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l(s==null?void 0:s.corr_address)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.paymentCitizenAddress.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l(s==null?void 0:s.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyHoldingNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l(s==null?void 0:s.zone_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyZone.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l(s==null?void 0:s.ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:l(s==null?void 0:s.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyOwnershipType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l(s==null?void 0:s.property_type)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[r("mainHoldingPage.propertyType.label"),r("mainHoldingPage.propertyType.label")]})]})]}),e.jsxs("div",{className:"flex space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l(s==null?void 0:s.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyHoldingType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l(s==null?void 0:s.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyMobileTower.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[l(s==null?void 0:s.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:l(s==null?void 0:s.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l(s==null?void 0:s.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyRainwaterHarvest.label")})]})]})]})}),(o==null?void 0:o.length)==0&&e.jsx("div",{className:"text-center mt-10",children:e.jsx("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl ",children:r("mainHoldingPage.noPaymentsFoundYet.label")})}),(o==null?void 0:o.length)!=0&&e.jsx("div",{className:"mt-10 bg-white shadow-xl  rounded-lg",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-900",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.paymentTransactionNum.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.paymentMode.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.paymentDate.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.paymentDateFrom.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.paymentUptoDate.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.paymentAmount.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.paymentReceipt1.label")})]})}),e.jsxs("tbody",{className:"text-sm",children:[(N=o==null?void 0:o.Holding)==null?void 0:N.map((t,i)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.tran_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.payment_mode)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.tran_date)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.from_fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.to_fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("button",{onClick:()=>p(`/paymentReceipt/${encodeURIComponent(t==null?void 0:t.id)}/holding`),type:"button",className:"cypress_owner_add_update px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]})),(j=o==null?void 0:o.Saf)==null?void 0:j.map((t,i)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i+1}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l(t==null?void 0:t.tran_no),e.jsx("span",{className:"bg-indigo-500 text-white text-xs px-2 rounded-sm ml-2",children:"SAF"})]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.payment_mode)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.tran_date)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l(t==null?void 0:t.from_qtr),"/",l(t==null?void 0:t.from_fyear)]}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l(t==null?void 0:t.to_qtr),"/",l(t==null?void 0:t.to_fyear)]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",colSpan:2,children:e.jsx("button",{onClick:()=>p(`/paymentReceipt/${encodeURIComponent(t==null?void 0:t.tran_no)}/saf`),type:"button",className:"cypress_owner_add_update px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]}))]})]})}),e.jsx("div",{className:"w-full mt-52"})]})})}export{Q as default};
