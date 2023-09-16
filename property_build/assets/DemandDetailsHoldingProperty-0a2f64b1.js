import{u as De,bv as es,r as l,c as ss,a as rs,k as as,l as ts,m as n,o as ls,j as e,B as os,S as cs,Q as ds,T as ns,n as c,cp as xs,A as N,N as j,bb as is,Y as Le}from"./index-0be6b286.js";import"./RazorpayPaymentScreen-c8f612b3.js";import{T as ms}from"./TopTabs-c1ca144b.js";function us(bs){var u,y,w,T,_,k,S,C,P,q,H,E,A,F,I,B,L,O,M,R,W,$,z,G,V,Q,U,Y,K,Z,J,X,v,D,ee,se,re,ae,te,le,oe,ce,de,ne,xe,ie,me,be,pe,he,Ne,je,fe,ge,ue,ye,we,Te,_e,ke,Se,Ce,Pe,qe,He,Ee,Ae,Fe,Ie,Be;const{t}=De(),{id:x}=es();console.log("param demand screen holding...",x);const{roles:p}=l.useContext(ss),{propertyGenerateHoldingOrderId:ps,api_getHoldingDemandById:Oe,onlinePayment:hs,zeroDemandPayment:Me}=is(),h=rs();l.useState(!1);const[r,Re]=l.useState(),[i,We]=l.useState();l.useState("");const[f,d]=l.useState(!1);l.useState();const[$e,b]=l.useState(!1),[ze,Ns]=l.useState(1),[Ge,g]=l.useState(!1);as("Holding Demand Details");const Ve=["BACK OFFICE"],Qe=l.useMemo(()=>Array.isArray(p)&&p.some(s=>Ve.includes(s)),[p]),Ue=ts({paymentMode:n().required("Please select the Payment mode "),bankName:n().when("paymentMode",{is:s=>s!=="CASH"||s!=="ONLINE",then:s=>s.required("Bank Name is required")}),chequeNo:n().when("paymentMode",{is:s=>s!=="CASH"||s!=="ONLINE",then:s=>s.required("Cheque No is required")}),chequeDate:n().when("paymentMode",{is:s=>s!=="CASH"||s!=="ONLINE",then:s=>s.required("Cheque Date is required")}),branchName:n().when("paymentMode",{is:s=>s!=="CASH"||s!=="ONLINE",then:s=>s.required("Branch Name is required")}),remarks:n().when("paymentMode",{is:s=>s!=="CASH"||s!=="ONLINE",then:s=>s.required("Remarks  is required")}),neftImage:n().when("paymentMode",{is:s=>s!=="CASH"||s!=="ONLINE",then:s=>s.required("image is required")})}),a=ls({initialValues:{chequeDate:"",bankName:"",branchName:"",chequeNo:"",paymentMode:"",remarks:"",neftImage:""},enableReinitialize:!0,onSubmit:s=>{console.log("values at submit payment",s),ve(s)},validationSchema:Ue}),Ye=s=>{let m=s.target.name,o=s.target.value;console.log("onchange",m," ",o),m=="paymentMode"&&(o=="CASH"||o=="ONLINE"?g(!1):g(!0)),m=="neftImage"&&Ke(s.target.files[0])},Ke=s=>{},Ze=()=>{d(!0),b(!1),N.post(`${Oe}`,{propId:x},j()).then(function(s){console.log("view deamnd details at property in egov...",s==null?void 0:s.data),Re(s==null?void 0:s.data),We(s==null?void 0:s.data),d(!1)}).catch(function(s){console.log("at error part.",s),b(!0),d(!1)})};l.useEffect(()=>{Ze()},[]);const Je=(s,m)=>{d(!0),N.post(`${Me}`,{id:s,...m},j()).then(function(o){console.log("offline payment...",o==null?void 0:o.data),o.data.status?(Le.success("Payment done Successfully"),h(`/paymentReceipt/${o.data.data.TransactionNo}/holding`)):Le.warn("Payment Failed"),d(!1)}).catch(function(o){console.log("at error part.",o),b(!0),d(!1)})},Xe=()=>{d(!0),N.post("http://203.129.217.244:8010/api/payment/v1/get-referal-url",{propId:x},j()).then(function(s){console.log("response.",s.data),s.data.status&&window.open(s.data.data),d(!1)}).catch(function(s){console.log("at error part.",s),b(!0),d(!1)})},ve=s=>{(s==null?void 0:s.paymentMode)!="ONLINE"?Je(x,s):Xe()};return f?e.jsx(e.Fragment,{children:e.jsx(os,{})}):$e?e.jsx(cs,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):(console.log("holding demand status",(y=(u=r==null?void 0:r.data)==null?void 0:u.basicDetails)==null?void 0:y.holding_no),e.jsxs(e.Fragment,{children:[e.jsx(ds,{position:"top-right",autoClose:2e3}),f&&e.jsx(ns,{}),e.jsxs("div",{className:"w-full mx-auto px-6",children:[e.jsx("div",{className:"pt-10",children:e.jsx(ms,{title:`${t("mainHoldingPage.demandDetailsHeadingText.label")}`,type:"holding",id:x,safNo:"",active:"demand"})}),Qe&&(r==null?void 0:r.paymentStatus)!==1&&(r==null?void 0:r.can_pay)===!0&&e.jsx("div",{className:"border-2 border-amber-5 00 text px-4 py-1 justify-center items-center font-semibold text-amber-500 shadow-xl w-max cursor-pointer hover:bg-amber-500 hover:text-white",onClick:()=>h(`/waiver-demand-screen/${x}/holding`),children:"Waive Off Demand"}),(r==null?void 0:r.paymentStatus)===1&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:t("mainHoldingPage.allDemandPaidButton.label")}),(r==null?void 0:r.tran_no)!=null&&e.jsx("span",{className:"bg-indigo-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl cursor-pointer hover:bg-indigo-500",onClick:()=>h(`/paymentReceipt/${encodeURIComponent(r==null?void 0:r.tran_no)}/saf`),children:t("mainHoldingPage.viewRecieptButton.label")})]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((T=(w=r==null?void 0:r.data)==null?void 0:w.basicDetails)==null?void 0:T.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyHoldingNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((k=(_=r==null?void 0:r.data)==null?void 0:_.basicDetails)==null?void 0:k.zone_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyZone.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((C=(S=r==null?void 0:r.data)==null?void 0:S.basicDetails)==null?void 0:C.ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:c((q=(P=r==null?void 0:r.data)==null?void 0:P.basicDetails)==null?void 0:q.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyOwnershipType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((E=(H=r==null?void 0:r.data)==null?void 0:H.basicDetails)==null?void 0:E.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyType.label")})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((F=(A=r==null?void 0:r.data)==null?void 0:A.basicDetails)==null?void 0:F.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyHoldingType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((B=(I=r==null?void 0:r.data)==null?void 0:I.basicDetails)==null?void 0:B.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyMobileTower.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[c((O=(L=r==null?void 0:r.data)==null?void 0:L.basicDetails)==null?void 0:O.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:c((R=(M=r==null?void 0:r.data)==null?void 0:M.basicDetails)==null?void 0:R.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(($=(W=r==null?void 0:r.data)==null?void 0:W.basicDetails)==null?void 0:$.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyRainwaterHarvest.label")})]})]})]})}),e.jsxs("div",{className:"flex flex-row flex-wrap justify-center w-full",children:[(r==null?void 0:r.status)&&e.jsxs("div",{class:"rounded-lg pt-4 w-full",children:[e.jsx("div",{className:"text-center mt-10",children:((z=r==null?void 0:r.data)==null?void 0:z.paymentStatus)==1?e.jsx(e.Fragment,{children:e.jsxs("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl ",children:[" ","No Payments Found Yet"]})}):e.jsx(e.Fragment,{})}),e.jsx("div",{className:"",children:((G=r==null?void 0:r.data)==null?void 0:G.paymentStatus)==0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 flex  font-serif underline",children:[e.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),"Tax Calculation Paradigm"]}),e.jsx("div",{className:" block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto"}),e.jsxs("div",{className:"w-full h-auto bg-white  rounded shadow-lg text-sm p-4",children:[e.jsx("div",{className:"bg-blue-50 text-blue-700 font-semibold  my-1"}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:e.jsx("h1",{className:"p-2",children:"Demand List "})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[e.jsx("th",{className:"border border-collapse  p-2",children:"ALV  "}),e.jsx("th",{className:"border border-collapse  p-2",children:"Maintanance  Amt"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Aging Amt"}),e.jsxs("th",{className:"border border-collapse  p-2",children:["General Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Road Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Firefighting Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Education Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Water Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Clealiness Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Sewage Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Tree Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Professional Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[" Tax 1",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[" Tax 2",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[" Tax 3",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["State Education Tax",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Water Benefit ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Water Bill",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Sp Water Cess",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Drain Cess",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Light Cess",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Big Building",e.jsx("small",{className:"block"})]}),e.jsx("th",{className:"border border-collapse  p-2",children:"Total Tax  "})]})}),e.jsx("tbody",{children:(Q=(V=r==null?void 0:r.data)==null?void 0:V.demandList)==null?void 0:Q.map((s,m)=>e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:17,children:e.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:["Financial Year : ",s==null?void 0:s.fyear]})})}),e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[(s==null?void 0:s.alv)||0,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(s==null?void 0:s.maintanance_amt)||0,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(s==null?void 0:s.aging_amt)||0,"  "]}),e.jsxs("td",{className:"border border-collapse p-2",children:[(s==null?void 0:s.general_tax)||0,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.road_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.firefighting_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.education_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.water_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.cleanliness_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.sewarage_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.tree_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.professional_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.tax1)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.tax2)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.tax3)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.state_education_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.water_benefit)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.water_bill)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.sp_water_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.drain_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.light_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.major_building)||0}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.total_tax})]})]}))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:e.jsx("h1",{className:"p-2",children:"Grand total Tax Bifurcation"})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsx("th",{className:"border border-collapse  p-2",children:"General Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Road Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Firefighting Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Education Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Water Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Clealiness Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Sewage Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Tree Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Professional Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Tax 1"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Tax 2"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Tax 3"}),e.jsx("th",{className:"border border-collapse  p-2",children:"State Education Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Water Benefit"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Water Bill"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Sp Water Cess"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Drain Cess"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Light Cess"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Major Building"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Total Tax"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsx("td",{className:"border border-collapse p-2",children:(Y=(U=r==null?void 0:r.data)==null?void 0:U.grandTaxes)==null?void 0:Y.general_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(Z=(K=r==null?void 0:r.data)==null?void 0:K.grandTaxes)==null?void 0:Z.road_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(X=(J=r==null?void 0:r.data)==null?void 0:J.grandTaxes)==null?void 0:X.firefighting_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(D=(v=r==null?void 0:r.data)==null?void 0:v.grandTaxes)==null?void 0:D.education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(se=(ee=r==null?void 0:r.data)==null?void 0:ee.grandTaxes)==null?void 0:se.water_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ae=(re=r==null?void 0:r.data)==null?void 0:re.grandTaxes)==null?void 0:ae.cleanliness_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(le=(te=r==null?void 0:r.data)==null?void 0:te.grandTaxes)==null?void 0:le.sewarage_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ce=(oe=r==null?void 0:r.data)==null?void 0:oe.grandTaxes)==null?void 0:ce.tree_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ne=(de=r==null?void 0:r.data)==null?void 0:de.grandTaxes)==null?void 0:ne.professional_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ie=(xe=r==null?void 0:r.data)==null?void 0:xe.grandTaxes)==null?void 0:ie.tax1}),e.jsx("td",{className:"border border-collapse p-2",children:(be=(me=r==null?void 0:r.data)==null?void 0:me.grandTaxes)==null?void 0:be.tax2}),e.jsx("td",{className:"border border-collapse p-2",children:(he=(pe=r==null?void 0:r.data)==null?void 0:pe.grandTaxes)==null?void 0:he.tax3}),e.jsx("td",{className:"border border-collapse p-2",children:(je=(Ne=r==null?void 0:r.data)==null?void 0:Ne.grandTaxes)==null?void 0:je.state_education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ge=(fe=r==null?void 0:r.data)==null?void 0:fe.grandTaxes)==null?void 0:ge.water_benefit}),e.jsx("td",{className:"border border-collapse p-2",children:(ye=(ue=r==null?void 0:r.data)==null?void 0:ue.grandTaxes)==null?void 0:ye.water_bill}),e.jsx("td",{className:"border border-collapse p-2",children:(Te=(we=r==null?void 0:r.data)==null?void 0:we.grandTaxes)==null?void 0:Te.sp_water_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(ke=(_e=r==null?void 0:r.data)==null?void 0:_e.grandTaxes)==null?void 0:ke.drain_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(Ce=(Se=r==null?void 0:r.data)==null?void 0:Se.grandTaxes)==null?void 0:Ce.light_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(qe=(Pe=r==null?void 0:r.data)==null?void 0:Pe.grandTaxes)==null?void 0:qe.major_building}),e.jsx("td",{className:"border border-collapse p-2 font-bold text-lg text-teal-600",children:(Ee=(He=r==null?void 0:r.data)==null?void 0:He.grandTaxes)==null?void 0:Ee.total_tax})]})})]})}),e.jsxs("div",{className:"bg-white py-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("h1",{className:"font-semibold p-1",children:["* Total Arrear Amount -"," ",e.jsxs("span",{className:" text-red-600 font-bold text-lg",children:["₹ ",(Ae=r==null?void 0:r.data)==null?void 0:Ae.arrear," "]})]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* Total Current Amount -"," ",e.jsxs("span",{className:"  text-teal-600 font-bold text-lg",children:["₹"," ",(Ie=(Fe=r==null?void 0:r.data)==null?void 0:Fe.grandTaxes)==null?void 0:Ie.total_tax," "]})]})]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* Total Payable Amount -"," ",e.jsxs("span",{className:"  text-blue-600 font-bold text-lg",children:["₹ ",(Be=r==null?void 0:r.data)==null?void 0:Be.payableAmt," "]})]}),ze==1?e.jsxs("form",{onSubmit:a.handleSubmit,onChange:Ye,children:[e.jsxs("select",{name:"paymentMode",onChange:a.handleChange,value:a.values.paymentMode,id:"paymentMode",className:"px-4 py-1.5 rounded border w-2/3",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"ONLINE",children:"Online"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"NEFT",children:"NEFT"})]})," ",e.jsx("br",{}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.paymentMode&&a.errors.paymentMode?a.errors.paymentMode:null}),e.jsxs("div",{className:`${Ge?"block":"hidden"} w-full grid grid-cols-1 md:grid-cols-4 mt-5`,children:[e.jsxs("div",{className:"form-group md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Cheque/ DD/ NEFT Date",e.jsxs("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:[" ","*"," "]})," "]}),e.jsx("input",{name:"chequeDate",value:"chequeDate",...a.getFieldProps("chequeDate"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.chequeDate&&a.errors.chequeDate?a.errors.chequeDate:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Bank Name",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...a.getFieldProps("bankName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Bank Name."}),e.jsxs("span",{className:"text-red-600 absolute text-xs",children:[" ",a.touched.bankName&&a.errors.bankName?a.errors.bankName:null]})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Branch Name",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...a.getFieldProps("branchName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Branch Name."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.branchName&&a.errors.branchName?a.errors.branchName:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Cheque/ DD / NEFT No.",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...a.getFieldProps("chequeNo"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Cheque No."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.chequeNo&&a.errors.chequeNo?a.errors.chequeNo:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Payment Remark",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...a.getFieldProps("remarks"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Remarks.."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.remarks&&a.errors.remarks?a.errors.remarks:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Cheque/ DD/ NEFT Image",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...a.getFieldProps("neftImage"),type:"file",className:"form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Remarks.."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.neftImage&&a.errors.neftImage?a.errors.neftImage:null})]})]}),e.jsx("div",{className:"w-full md:w-1/3  mt-5 mx-3",children:e.jsx("button",{type:"submit",className:xs,children:"Pay Now"})})]}):""]})]})]})]})," "]}):""})]}),(i==null?void 0:i.status)==!1&&e.jsx("div",{className:"text-2xl font-bold text-red-500 mt-20",children:e.jsxs("span",{className:"border border-red-500 px-4 py-2 shadow-xl",children:[i==null?void 0:i.message," "]})})]})]}),e.jsx("div",{className:"w-full mt-20 h-60"})]}))}export{us as default};