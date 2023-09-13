import{u as qe,bv as Ee,r as l,c as Ae,a as Fe,k as Be,l as Me,m,o as Le,j as e,B as Oe,S as Ie,Q as Re,T as $e,n as c,cp as Qe,A as N,N as j,bb as Ue,Y as he}from"./index-378193f7.js";import"./RazorpayPaymentScreen-16166dae.js";import{T as ze}from"./TopTabs-1fa23257.js";function Xe(Ge){var y,g,w,T,k,_,P,S,v,H,C,q,E,A,F,B,M,L,O,I,R,$,Q,U,z,G,V,W,Y,K,Z,J,X,D,ee,se,ae,re,te,le,oe,ce,de,ne,ie,xe,me,be,pe;const{t}=qe(),{id:n}=Ee();console.log("param demand screen holding...",n);const{roles:p}=l.useContext(Ae),{propertyGenerateHoldingOrderId:Ve,api_getHoldingDemandById:Ne,onlinePayment:We,zeroDemandPayment:je}=Ue(),h=Fe();l.useState(!1);const[s,fe]=l.useState(),[i,ue]=l.useState();l.useState("");const[f,d]=l.useState(!1);l.useState();const[ye,b]=l.useState(!1),[ge,Ye]=l.useState(1),[we,u]=l.useState(!1);Be("Holding Demand Details");const Te=["BACK OFFICE"],ke=l.useMemo(()=>Array.isArray(p)&&p.some(a=>Te.includes(a)),[p]),_e=Me({paymentMode:m().required("Please select the Payment mode "),bankName:m().when("paymentMode",{is:a=>a=="CHEQUE"||a=="DD",then:a=>a.required("Bank Name is required")}),chequeNo:m().when("paymentMode",{is:a=>a=="CHEQUE"||a=="DD",then:a=>a.required("Cheque No is required")}),chequeDate:m().when("paymentMode",{is:a=>a=="CHEQUE"||a=="DD",then:a=>a.required("Cheque Date is required")}),branchName:m().when("paymentMode",{is:a=>a=="CHEQUE"||a=="DD",then:a=>a.required("branch Name is required")})}),r=Le({initialValues:{chequeDate:"",bankName:"",branchName:"",chequeNo:"",paymentMode:""},enableReinitialize:!0,onSubmit:a=>{console.log("values at submit payment",a),Ce(a)},validationSchema:_e}),Pe=a=>{let x=a.target.name,o=a.target.value;console.log("onchange",x," ",o),x=="paymentMode"&&(o=="CASH"||o=="ONLINE"?u(!1):u(!0))},Se=()=>{d(!0),b(!1),N.post(`${Ne}`,{propId:n},j()).then(function(a){console.log("view deamnd details at property in egov...",a==null?void 0:a.data),fe(a==null?void 0:a.data),ue(a==null?void 0:a.data),d(!1)}).catch(function(a){console.log("at error part.",a),b(!0),d(!1)})};l.useEffect(()=>{Se()},[]);const ve=(a,x)=>{d(!0),N.post(`${je}`,{id:a,...x},j()).then(function(o){console.log("offline payment...",o==null?void 0:o.data),o.data.status?(he.success("Payment done Successfully"),h(`/paymentReceipt/${o.data.data.TransactionNo}/holding`)):he.warn("Payment Failed"),d(!1)}).catch(function(o){console.log("at error part.",o),b(!0),d(!1)})},He=()=>{d(!0),N.post("http://203.129.217.244:8010/api/payment/v1/get-referal-url",{propId:n},j()).then(function(a){console.log("response.",a.data),a.data.status&&window.open(a.data.data),d(!1)}).catch(function(a){console.log("at error part.",a),b(!0),d(!1)})},Ce=a=>{(a==null?void 0:a.paymentMode)!="ONLINE"?ve(n,a):He()};return f?e.jsx(e.Fragment,{children:e.jsx(Oe,{})}):ye?e.jsx(Ie,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):(console.log("holding demand status",(g=(y=s==null?void 0:s.data)==null?void 0:y.basicDetails)==null?void 0:g.holding_no),e.jsxs(e.Fragment,{children:[e.jsx(Re,{position:"top-right",autoClose:2e3}),f&&e.jsx($e,{}),e.jsxs("div",{className:"w-full mx-auto px-6",children:[e.jsx("div",{className:"pt-10",children:e.jsx(ze,{title:`${t("mainHoldingPage.demandDetailsHeadingText.label")}`,type:"holding",id:n,safNo:"",active:"demand"})}),ke&&(s==null?void 0:s.paymentStatus)!==1&&(s==null?void 0:s.can_pay)===!0&&e.jsx("div",{className:"border-2 border-amber-5 00 text px-4 py-1 justify-center items-center font-semibold text-amber-500 shadow-xl w-max cursor-pointer hover:bg-amber-500 hover:text-white",onClick:()=>h(`/waiver-demand-screen/${n}/holding`),children:"Waive Off Demand"}),(s==null?void 0:s.paymentStatus)===1&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:t("mainHoldingPage.allDemandPaidButton.label")}),(s==null?void 0:s.tran_no)!=null&&e.jsx("span",{className:"bg-indigo-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl cursor-pointer hover:bg-indigo-500",onClick:()=>h(`/paymentReceipt/${encodeURIComponent(s==null?void 0:s.tran_no)}/saf`),children:t("mainHoldingPage.viewRecieptButton.label")})]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((T=(w=s==null?void 0:s.data)==null?void 0:w.basicDetails)==null?void 0:T.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyHoldingNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((_=(k=s==null?void 0:s.data)==null?void 0:k.basicDetails)==null?void 0:_.zone_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyZone.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((S=(P=s==null?void 0:s.data)==null?void 0:P.basicDetails)==null?void 0:S.ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:c((H=(v=s==null?void 0:s.data)==null?void 0:v.basicDetails)==null?void 0:H.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyOwnershipType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((q=(C=s==null?void 0:s.data)==null?void 0:C.basicDetails)==null?void 0:q.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyType.label")})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((A=(E=s==null?void 0:s.data)==null?void 0:E.basicDetails)==null?void 0:A.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyHoldingType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((B=(F=s==null?void 0:s.data)==null?void 0:F.basicDetails)==null?void 0:B.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyMobileTower.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[c((L=(M=s==null?void 0:s.data)==null?void 0:M.basicDetails)==null?void 0:L.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:c((I=(O=s==null?void 0:s.data)==null?void 0:O.basicDetails)==null?void 0:I.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(($=(R=s==null?void 0:s.data)==null?void 0:R.basicDetails)==null?void 0:$.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyRainwaterHarvest.label")})]})]})]})}),e.jsxs("div",{className:"flex flex-row flex-wrap justify-center w-full",children:[(s==null?void 0:s.status)&&e.jsxs("div",{class:"rounded-lg pt-4 w-full",children:[e.jsx("div",{className:"text-center mt-10",children:((Q=s==null?void 0:s.data)==null?void 0:Q.paymentStatus)==1?e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl ",children:" No Payments Found Yet"})}):e.jsx(e.Fragment,{})}),e.jsx("div",{className:"",children:((U=s==null?void 0:s.data)==null?void 0:U.paymentStatus)==0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 flex  font-serif underline",children:[e.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),"Tax Calculation Paradigm"]}),e.jsx("div",{className:" block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto"}),e.jsxs("div",{className:"w-full h-auto bg-white  rounded shadow-lg text-sm p-4",children:[e.jsx("div",{className:"bg-blue-50 text-blue-700 font-semibold  my-1"}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:e.jsx("h1",{className:"p-2",children:"Demand List "})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[e.jsx("th",{className:"border border-collapse  p-2",children:"ALV  "}),e.jsxs("th",{className:"border border-collapse  p-2",children:["General Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Road Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Firefighting Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Education Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Water Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Clealiness Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Sewage Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Tree Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Professional Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["State Education Tax ",e.jsx("small",{className:"block"})]}),e.jsx("th",{className:"border border-collapse  p-2",children:"Total Tax  "})]})}),e.jsx("tbody",{children:(G=(z=s==null?void 0:s.data)==null?void 0:z.demandList)==null?void 0:G.map((a,x)=>e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:17,children:e.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:["Financial Year : ",a==null?void 0:a.fyear]})})}),e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.alv,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[a==null?void 0:a.general_tax,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.road_tax}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.firefighting_tax}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.water_tax}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.cleanliness_tax}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.sewarage_tax}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.tree_tax}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.professional_tax}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.state_education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.total_tax})]})]}))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:e.jsx("h1",{className:"p-2",children:"Grand total Tax Bifurcation "})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:["General Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Road Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Firefighting Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Education Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Water Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Clealiness Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Sewage Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Tree Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Professional Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["State Education Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsx("th",{className:"border border-collapse  p-2",children:"Total Tax  "})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"font-semibold text-xs",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[(W=(V=s==null?void 0:s.data)==null?void 0:V.grandTaxes)==null?void 0:W.general_tax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(K=(Y=s==null?void 0:s.data)==null?void 0:Y.grandTaxes)==null?void 0:K.road_tax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(Z=s==null?void 0:s.data)==null?void 0:Z.grandTaxes.firefighting_tax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(X=(J=s==null?void 0:s.data)==null?void 0:J.grandTaxes)==null?void 0:X.education_tax,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(ee=(D=s==null?void 0:s.data)==null?void 0:D.grandTaxes)==null?void 0:ee.water_tax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(ae=(se=s==null?void 0:s.data)==null?void 0:se.grandTaxes)==null?void 0:ae.cleanliness_tax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(te=(re=s==null?void 0:s.data)==null?void 0:re.grandTaxes)==null?void 0:te.sewarage_tax,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(oe=(le=s==null?void 0:s.data)==null?void 0:le.grandTaxes)==null?void 0:oe.tree_tax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(de=(ce=s==null?void 0:s.data)==null?void 0:ce.grandTaxes)==null?void 0:de.professional_tax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(ie=(ne=s==null?void 0:s.data)==null?void 0:ne.grandTaxes)==null?void 0:ie.state_education_tax," "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(me=(xe=s==null?void 0:s.data)==null?void 0:xe.grandTaxes)==null?void 0:me.total_tax," "]})]})})]})}),e.jsxs("div",{className:"bg-white py-4",children:[e.jsxs("h1",{className:"font-semibold p-1",children:["* Total Arrear Amount - ",e.jsxs("span",{className:"  text-teal-600 font-bold text-lg",children:["₹ ",(be=s==null?void 0:s.data)==null?void 0:be.arrear," "]})]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* Total Payable Amount - ",e.jsxs("span",{className:"  text-teal-600 font-bold text-lg",children:["₹ ",(pe=s==null?void 0:s.data)==null?void 0:pe.payableAmt," "]})]}),ge==1?e.jsxs("form",{onSubmit:r.handleSubmit,onChange:Pe,children:[e.jsxs("select",{name:"paymentMode",onChange:r.handleChange,value:r.values.paymentMode,id:"paymentMode",className:"px-4 py-1.5 rounded border w-2/3",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})," ",e.jsx("br",{}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.paymentMode&&r.errors.paymentMode?r.errors.paymentMode:null}),e.jsxs("div",{className:`${we?"block":"hidden"} w-full grid grid-cols-1 md:grid-cols-4 mt-5`,children:[e.jsxs("div",{className:"form-group md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Check Date",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:" * "})," "]}),e.jsx("input",{name:"chequeDate",value:"chequeDate",...r.getFieldProps("chequeDate"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.chequeDate&&r.errors.chequeDate?r.errors.chequeDate:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Bank Name",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...r.getFieldProps("bankName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Bank Name."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.bankName&&r.errors.bankName?r.errors.bankName:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Branch Name",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...r.getFieldProps("branchName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Branch Name."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.branchName&&r.errors.branchName?r.errors.branchName:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Cheque No.",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...r.getFieldProps("chequeNo"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Cheque No."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.chequeNo&&r.errors.chequeNo?r.errors.chequeNo:null})]})]}),e.jsx("div",{className:"w-full md:w-1/3  mt-5",children:e.jsx("button",{type:"submit",className:Qe,children:"Pay Now"})})]}):""]})]})]})]})," "]}):""})]}),(i==null?void 0:i.status)==!1&&e.jsx("div",{className:"text-2xl font-bold text-red-500 mt-20",children:e.jsxs("span",{className:"border border-red-500 px-4 py-2 shadow-xl",children:[i==null?void 0:i.message," "]})})]})]}),e.jsx("div",{className:"w-full mt-20 h-60"})]}))}export{Xe as default};
