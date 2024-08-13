import{Y as Xa,u as Da,r as d,J as es,e as as,a as ss,q as rs,s as m,t as ts,bt as ls,w as cs,j as e,B as os,S as ds,ad as ns,L as is,n,z as ms,y as xs,c5 as bs,bj as ps,A as j,b as y,dw as fs,al as hs,Q as Ha,f as Ns}from"./index-4a6d5e20.js";import"./RazorpayPaymentScreen-a57007ad.js";import{T as js}from"./TopTabs-f95a2df0.js";import{T as ys}from"./TextField-111fe931.js";import"./useFormControl-ff523cfc.js";import"./formControlState-a1fb9590.js";import"./react-is.production.min-184881b2.js";import"./useTimeout-cdbbb145.js";function Cs(us){var g,w,_,T,S,L,F,k,E,A,C,q,H,I,v,M,R,B,O,Q,U,$,z,V,W,G,Y,J,K,Z,X,D,ee,ae,se,re,te,le,ce,oe,de,ne,ie,me,xe,be,pe,fe,he,Ne,je,ye,ue,Pe,ge,we,_e,Te,Se,Le,Fe,ke,Ee,Ae,Ce,qe,He,Ie,ve,Me,Re,Be,Oe,Qe,Ue,$e,ze,Ve,We,Ge,Ye,Je,Ke,Ze,Xe,De,ea,aa,sa,ra,ta,la,ca,oa,da,na,ia,ma,xa,ba,pa,fa,ha,Na,ja,ya,ua,Pa,ga,wa,_a,Ta,Sa,La,Fa,ka,Ea,Aa,Ca;const{t:r}=Xa(),{id:x}=Da(),{roles:N}=d.useContext(es),{propertyGenerateHoldingOrderId:Ps,api_getHoldingDemandById:Ia,onlinePayment:gs,zeroDemandPayment:va}=hs(),f=as();d.useState(!1);const[a,Ma]=d.useState(),[b,Ra]=d.useState();d.useState("");const[u,i]=d.useState(!1);d.useState();const[Ba,h]=d.useState(!1),[Oa,ws]=d.useState(1),[Qa,P]=d.useState(!1),[c,p]=d.useState("CASH");d.useState(!1),ss("Holding Demand Details");const Ua=["BACK OFFICE"],$a=d.useMemo(()=>Array.isArray(N)&&N.some(s=>Ua.includes(s)),[N]),za=rs({paymentMode:m().required("Please select the Payment mode "),bankName:m().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field is required")}),chequeNo:m().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field is required")}),chequeDate:ts().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field is required")}).max(ls(),"Please select valid date"),branchName:m().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field  is required")}),remarks:m().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field is required")}),neftImage:m().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field is required")}),paidAmount:m().when("paymentType",{is:s=>s=="isPartPayment",then:s=>s.required("This field is required")})}),t=cs({initialValues:{chequeDate:"",bankName:"",branchName:"",chequeNo:"",paymentMode:"",paymentType:"",remarks:"",neftImage:"",paidAmount:"",TrnDate:""},enableReinitialize:!0,onSubmit:s=>{Za(s)},validationSchema:za}),Va=s=>{let o=s.target.name,l=s.target.value;o=="paymentMode"&&(l=="CASH"||l=="ONLINE"?P(!1):P(!0)),o=="paymentMode"&&(l=="CHEQUE"&&p("CHEQUE"),l=="NEFT"&&p("NEFT"),l=="DD"&&p("DD"),l=="CASH"&&p("DD"),l=="ONLINE_R"&&p("ONLINE_R")),o=="neftImage"&&Ga(s.target.files[0]),o=="chequeNo"&&(c=="ONLINE_R"?t.setFieldValue("chequeNo",l):t.setFieldValue("chequeNo",bs(l,t.values.chequeNo,15)))},Wa=()=>{var o,l;if(((o=t.values)==null?void 0:o.paidAmount)<=((l=a==null?void 0:a.data)==null?void 0:l.totalInterestPenalty)){ps("Please pay an amount bigger than the interest!");return}},Ga=s=>{t.setFieldValue("neftImage",s)},Ya=()=>{i(!0),h(!1),j.post(`${Ia}`,{propId:x},y()).then(function(s){Ma(s==null?void 0:s.data),Ra(s==null?void 0:s.data),i(!1)}).catch(function(s){h(!0),i(!1)})};d.useEffect(()=>{Ya()},[]);const Ja=(s,o)=>{i(!0),j.post(`${va}`,{id:s,...o},y()).then(function(l){var qa;l.data.status?(Ha.success("Payment done Successfully"),f(`/paymentReceipt/${l.data.data.transactionId}/holding`,{state:{prop_id:s}})):Ha.warn((qa=l==null?void 0:l.data)==null?void 0:qa.message),i(!1)}).catch(function(l){h(!0),i(!1)})},Ka=()=>{i(!0),j.post(`${Ns}/api/payment/v1/get-referal-url`,{propId:x},y()).then(function(s){s.data.status&&window.open(s.data.data),i(!1)}).catch(function(s){h(!0),i(!1)})},Za=s=>{fs("You are proceeding for payment...").then(o=>{o!=null&&o.isConfirmed&&((s==null?void 0:s.paymentMode)!="ONLINE"?Ja(x,s):Ka())})};return u?e.jsx(e.Fragment,{children:e.jsx(os,{})}):Ba?e.jsx(ds,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx(ns,{position:"top-right",autoClose:2e3}),u&&e.jsx(is,{}),e.jsxs("div",{className:"w-full mx-auto px-6",children:[e.jsx("div",{className:"pt-10",children:e.jsx(js,{title:`${r("mainHoldingPage.demandDetailsHeadingText.label")}`,type:"holding",id:x,safNo:"",active:"demand"})}),$a&&(a==null?void 0:a.paymentStatus)!==1&&(a==null?void 0:a.can_pay)===!0&&e.jsx("div",{className:"border-2 border-amber-5 00 text px-4 py-1 justify-center items-center font-semibold text-amber-500 shadow-xl w-max cursor-pointer hover:bg-amber-500 hover:text-white",onClick:()=>f(`/waiver-demand-screen/${x}/holding`),children:"Waive Off Demand"}),(a==null?void 0:a.paymentStatus)===1&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:r("mainHoldingPage.allDemandPaidButton.label")}),(a==null?void 0:a.tran_no)!=null&&e.jsx("span",{className:"bg-indigo-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl cursor-pointer hover:bg-indigo-500",onClick:()=>f(`/paymentReceipt/${encodeURIComponent(a==null?void 0:a.tran_no)}/saf`),children:r("mainHoldingPage.viewRecieptButton.label")})]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:n((w=(g=a==null?void 0:a.data)==null?void 0:g.basicDetails)==null?void 0:w.owner_name_marathi)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[r("mainSafPaymentDetailPage.ownerNameLabel.label"),"."]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:n((T=(_=a==null?void 0:a.data)==null?void 0:_.basicDetails)==null?void 0:T.prop_address)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[r("mainSafPaymentDetailPage.addressLabel.label"),"."]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:n((L=(S=a==null?void 0:a.data)==null?void 0:S.basicDetails)==null?void 0:L.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyHoldingNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:n((k=(F=a==null?void 0:a.data)==null?void 0:F.basicDetails)==null?void 0:k.zone_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyZone.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:n((A=(E=a==null?void 0:a.data)==null?void 0:E.basicDetails)==null?void 0:A.ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:n((q=(C=a==null?void 0:a.data)==null?void 0:C.basicDetails)==null?void 0:q.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyOwnershipType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:n((I=(H=a==null?void 0:a.data)==null?void 0:H.basicDetails)==null?void 0:I.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyType.label")})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:n((M=(v=a==null?void 0:a.data)==null?void 0:v.basicDetails)==null?void 0:M.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyHoldingType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:n((B=(R=a==null?void 0:a.data)==null?void 0:R.basicDetails)==null?void 0:B.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyMobileTower.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[n((Q=(O=a==null?void 0:a.data)==null?void 0:O.basicDetails)==null?void 0:Q.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:n(($=(U=a==null?void 0:a.data)==null?void 0:U.basicDetails)==null?void 0:$.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:n((V=(z=a==null?void 0:a.data)==null?void 0:z.basicDetails)==null?void 0:V.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyRainwaterHarvest.label")})]})]})]})}),e.jsxs("div",{className:"flex flex-row flex-wrap justify-center w-full",children:[(a==null?void 0:a.status)&&e.jsx("div",{class:"rounded-lg pt-4 w-full",children:e.jsx("div",{className:"",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 flex  font-serif underline",children:[e.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),r("mainSafPaymentDetailPage.taxCalculationLabel.label")]}),e.jsx("div",{className:" block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto"}),e.jsxs("div",{className:"w-full h-auto bg-white  rounded shadow-lg text-sm p-4",children:[e.jsx("div",{className:"bg-blue-50 text-blue-700 font-semibold  my-1"}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[" ",r("mainSafPaymentDetailPage.demandListLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.generalTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.roadTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.educationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.waterTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.vSanitationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.treeTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[" ",r("mainSafPaymentDetailPage.professionalTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[" ",r("mainSafPaymentDetailPage.tax1Label.label"),e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.waterBenefitLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.waterBillLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.spWaterCessLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.drainCessLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.bigBuildingLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.openPlotTax.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Adjust Amount ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Due Amount ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.totalTaxLabel.label")," "]})]})}),e.jsx("tbody",{children:(G=(W=a==null?void 0:a.data)==null?void 0:W.demandList)==null?void 0:G.map((s,o)=>e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:17,children:e.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:[s!=null&&s.is_arrear?"Arrear Upto":""," ",r("mainSafPaymentDetailPage.financialYearLabel.label")," : ",s==null?void 0:s.fyear]})})}),e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[(s==null?void 0:s.general_tax)||0,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.road_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.firefighting_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.education_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.water_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.light_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.sewarage_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.tree_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.professional_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.tax1)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.state_education_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.water_benefit)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.water_bill)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.sp_water_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.drain_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.major_building)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.open_ploat_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.adjust_amt)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.due_balance)||0}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.total_tax})]})]}))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:e.jsx("h1",{className:"p-2",children:r("mainSafPaymentDetailPage.grandTotalTaxBifurcationLabel.label")})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.generalTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.roadTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.firefightingTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.educationTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.waterTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.vSanitationTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.sewageTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.treeTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.professionalTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.tax1Label.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.stateEducationTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.waterBenefitLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.waterBillLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.spWaterCessLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.drainCessLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.bigBuildingLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.openPlotTax.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.totalInterest.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.totalTaxLabel.label")})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsx("td",{className:"border border-collapse p-2",children:(J=(Y=a==null?void 0:a.data)==null?void 0:Y.grandTaxes)==null?void 0:J.general_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(Z=(K=a==null?void 0:a.data)==null?void 0:K.grandTaxes)==null?void 0:Z.road_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(D=(X=a==null?void 0:a.data)==null?void 0:X.grandTaxes)==null?void 0:D.firefighting_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ae=(ee=a==null?void 0:a.data)==null?void 0:ee.grandTaxes)==null?void 0:ae.education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(re=(se=a==null?void 0:a.data)==null?void 0:se.grandTaxes)==null?void 0:re.water_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(le=(te=a==null?void 0:a.data)==null?void 0:te.grandTaxes)==null?void 0:le.cleanliness_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(oe=(ce=a==null?void 0:a.data)==null?void 0:ce.grandTaxes)==null?void 0:oe.sewarage_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ne=(de=a==null?void 0:a.data)==null?void 0:de.grandTaxes)==null?void 0:ne.tree_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(me=(ie=a==null?void 0:a.data)==null?void 0:ie.grandTaxes)==null?void 0:me.professional_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(be=(xe=a==null?void 0:a.data)==null?void 0:xe.grandTaxes)==null?void 0:be.tax1}),e.jsx("td",{className:"border border-collapse p-2",children:(fe=(pe=a==null?void 0:a.data)==null?void 0:pe.grandTaxes)==null?void 0:fe.state_education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(Ne=(he=a==null?void 0:a.data)==null?void 0:he.grandTaxes)==null?void 0:Ne.water_benefit}),e.jsx("td",{className:"border border-collapse p-2",children:(ye=(je=a==null?void 0:a.data)==null?void 0:je.grandTaxes)==null?void 0:ye.water_bill}),e.jsx("td",{className:"border border-collapse p-2",children:(Pe=(ue=a==null?void 0:a.data)==null?void 0:ue.grandTaxes)==null?void 0:Pe.sp_water_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(we=(ge=a==null?void 0:a.data)==null?void 0:ge.grandTaxes)==null?void 0:we.drain_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(Te=(_e=a==null?void 0:a.data)==null?void 0:_e.grandTaxes)==null?void 0:Te.major_building}),e.jsx("td",{className:"border border-collapse p-2",children:(Le=(Se=a==null?void 0:a.data)==null?void 0:Se.grandTaxes)==null?void 0:Le.open_ploat_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ke=(Fe=a==null?void 0:a.data)==null?void 0:Fe.grandTaxes)==null?void 0:ke.monthlyPenalty}),e.jsx("td",{className:"border border-collapse p-2 font-bold text-lg text-teal-600",children:(Ae=(Ee=a==null?void 0:a.data)==null?void 0:Ee.grandTaxes)==null?void 0:Ae.total_tax})]})})]})}),e.jsxs("div",{className:"bg-white py-4",children:[e.jsxs("div",{className:" gap-4",children:[e.jsxs("h1",{className:"flex font-semibold p-1",children:[e.jsxs("div",{className:"w-48 ",children:[" *  ",r("mainSafPaymentDetailPage.totalArrearAmountLabel.label"),"  -"]}),e.jsxs("div",{className:" text-red-600 font-bold text-md",children:["₹",Math.round(parseFloat((Ce=a==null?void 0:a.data)==null?void 0:Ce.arrear)),((qe=a==null?void 0:a.data)==null?void 0:qe.isSingleManArmedForce)&&e.jsxs(e.Fragment,{children:["  - ",Math.round(parseFloat((He=a==null?void 0:a.data)==null?void 0:He.arrear_exempted_general_tax))," = ",Math.round(parseFloat((Ie=a==null?void 0:a.data)==null?void 0:Ie.arrear))-Math.round(parseFloat((ve=a==null?void 0:a.data)==null?void 0:ve.arrear_exempted_general_tax))," ",e.jsx("small",{className:"text-green-600",children:" (General Tax Exemption)"})]})]})]}),e.jsxs("h1",{className:"flex font-semibold p-1",children:[e.jsxs("div",{className:"w-48",children:[" *  ",r("mainSafPaymentDetailPage.totalCurrentAmountLabel.label"),"  - "]}),e.jsxs("div",{className:"  text-teal-600 font-bold text-md",children:["₹",Math.round(parseFloat((Me=a==null?void 0:a.data)==null?void 0:Me.currentDemand)),((Re=a==null?void 0:a.data)==null?void 0:Re.isSingleManArmedForce)&&e.jsxs(e.Fragment,{children:["  - ",Math.round(parseFloat((Be=a==null?void 0:a.data)==null?void 0:Be.current_exempted_general_tax))," = ",Math.round(parseFloat((Oe=a==null?void 0:a.data)==null?void 0:Oe.currentDemand))-Math.round(parseFloat((Qe=a==null?void 0:a.data)==null?void 0:Qe.current_exempted_general_tax))," ",e.jsx("small",{className:"text-green-600",children:" (General Tax Exemption)"})]})]})]}),e.jsxs("h1",{className:"flex font-semibold p-1",children:[e.jsxs("div",{className:"w-48",children:["*  ",r("mainSafPaymentDetailPage.totalInterestAmountLabel.label")," -"]}),e.jsxs("div",{className:"  text-red-600 font-bold text-md",children:["₹",Math.round(parseFloat((Ue=a==null?void 0:a.data)==null?void 0:Ue.totalInterestPenalty))]}),e.jsxs("small",{className:"whitespace-nowrap",children:["  ( ",r("mainSafPaymentDetailPage.interestOnArrearLabel.label"),"  ₹ ",($e=a==null?void 0:a.data)==null?void 0:$e.arrearInterest," + ",r("mainSafPaymentDetailPage.interestOnCurrentDemandLabel.label")," ₹ ",(ze=a==null?void 0:a.data)==null?void 0:ze.previousInterest,")"]})]})]}),((We=(Ve=a==null?void 0:a.data)==null?void 0:Ve.rebates[0])==null?void 0:We.rebates_amt)!=0&&((Ge=a==null?void 0:a.data)==null?void 0:Ge.rebates.length)!=0&&e.jsxs("small",{className:"whitespace-nowrap capitalize text-orange-400 p-52 text-xs -ml-2",children:[" ( If you pay full amount before  ",e.jsx("b",{children:(Je=(Ye=a==null?void 0:a.data)==null?void 0:Ye.rebates[0])==null?void 0:Je.effective_upto}),", Then ",e.jsx("b",{children:(Ze=(Ke=a==null?void 0:a.data)==null?void 0:Ke.rebates[0])==null?void 0:Ze.rebates})," % of interest on the property will be waived. )"]}),e.jsxs("h1",{className:"flex font-semibold p-1",children:[e.jsxs("div",{className:"w-48",children:["* ",r("mainSafPaymentDetailPage.totalPayableAmountLabel.label"),"  -"]}),e.jsxs("div",{className:"  text-blue-600 font-bold text-lg",children:["₹ ",Math.round(parseFloat((Xe=a==null?void 0:a.data)==null?void 0:Xe.payableAmt)),((De=a==null?void 0:a.data)==null?void 0:De.isSingleManArmedForce)&&e.jsxs(e.Fragment,{children:["  - ",Math.round(parseFloat((ea=a==null?void 0:a.data)==null?void 0:ea.total_exempted_general_tax))," = ",Math.round(parseFloat((aa=a==null?void 0:a.data)==null?void 0:aa.payableAmt))-Math.round(parseFloat((sa=a==null?void 0:a.data)==null?void 0:sa.total_exempted_general_tax))]})]}),e.jsxs("small",{className:"whitespace-nowrap p-1",children:[" ( ",r("mainSafPaymentDetailPage.arrearTotalTaxInterestLabel.label")," )"]}),((ta=(ra=a==null?void 0:a.data)==null?void 0:ra.rebates[0])==null?void 0:ta.rebates_amt)!=0&&((la=a==null?void 0:a.data)==null?void 0:la.rebates.length)!=0&&e.jsx("small",{className:"whitespace-nowrap p-1",children:e.jsxs("span",{className:"text-orange-500",children:[" (",(ca=a==null?void 0:a.data)==null?void 0:ca.payableAmt," - ",(da=(oa=a==null?void 0:a.data)==null?void 0:oa.rebates[0])==null?void 0:da.rebates_amt,")"]})}),((na=a==null?void 0:a.data)==null?void 0:na.isSingleManArmedForce)&&e.jsx(e.Fragment,{children:e.jsxs("small",{className:"text-green-600 mt-1",children:[" - (  ",Math.round(parseFloat((ia=a==null?void 0:a.data)==null?void 0:ia.total_exempted_general_tax)),"    General Tax Exemption)"]})})]}),e.jsx("small",{className:"mt-1 px-52",children:((xa=(ma=a==null?void 0:a.data)==null?void 0:ma.QuarterlyRebates[0])==null?void 0:xa.rebates_amt)!=0&&((ba=a==null?void 0:a.data)==null?void 0:ba.QuarterlyRebates.length)!=0&&e.jsxs("small",{className:"whitespace-nowrap capitalize text-orange-400  text-xs ",children:[" ( If you pay full amount before  ",e.jsx("b",{children:(fa=(pa=a==null?void 0:a.data)==null?void 0:pa.QuarterlyRebates[0])==null?void 0:fa.upto_date}),", Then ",e.jsx("b",{children:(Na=(ha=a==null?void 0:a.data)==null?void 0:ha.QuarterlyRebates[0])==null?void 0:Na.rebates})," % of general tax for current year will be waived.  )"]})}),e.jsxs("h1",{className:"flex font-semibold p-1",children:[e.jsx("div",{className:"w-48",children:"* Advance Amount  -"}),e.jsxs("div",{className:"  text-blue-600 font-bold text-lg",children:["₹ ",Math.round(parseFloat((ja=a==null?void 0:a.data)==null?void 0:ja.remainAdvance))]}),e.jsx("small",{className:"whitespace-nowrap capitalize text-green-500 p-1",children:" ( This is an adjustable amount from total payment value. )"})]}),e.jsxs("button",{type:"button",className:`${ms} max-h-8 uppercase mb-4`,onClick:()=>f("/demand-reciept/"+x),children:[r("mainSafPaymentDetailPage.viewDemandBillLabel.label")," "]}),Oa==1&&((ya=a==null?void 0:a.data)==null?void 0:ya.can_take_payment)&&((ua=a==null?void 0:a.data)==null?void 0:ua.paymentStatus)==0&&e.jsxs("form",{onSubmit:t.handleSubmit,onChange:Va,children:[e.jsxs("select",{name:"paymentMode",onChange:t.handleChange,value:t.values.paymentMode,id:"paymentMode",className:"px-4 py-1.5 rounded border w-2/3",children:[e.jsxs("option",{value:"",children:[" ",r("mainSafPaymentDetailPage.selectLabel.label")]}),e.jsxs("option",{value:"CASH",children:[" ",r("mainSafPaymentDetailPage.cashLabel.label")]}),e.jsxs("option",{value:"CHEQUE",children:[" ",r("mainSafPaymentDetailPage.chequeLabel.label")]}),e.jsxs("option",{value:"DD",children:[" ",r("mainSafPaymentDetailPage.ddLabel.label")]}),e.jsx("option",{value:"NEFT",children:r("mainSafPaymentDetailPage.neftLabel.label")}),((Pa=a==null?void 0:a.data)==null?void 0:Pa.can_take_online_r_payment)&&e.jsx("option",{value:"ONLINE_R",children:r("mainSafPaymentDetailPage.onlineRLabel.label")})]})," ",e.jsx("br",{}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.paymentMode&&t.errors.paymentMode?t.errors.paymentMode:null}),e.jsxs("div",{className:`${Qa?"block":"hidden"} w-full grid grid-cols-1 md:grid-cols-4 mt-5`,children:[e.jsxs("div",{className:"form-group md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[c=="CHEQUE"&&"Cheque",c=="NEFT"&&"NEFT",c=="ONLINE_R"&&"Online Reference",c=="DD"&&"DD"," ",r("mainSafPaymentDetailPage.dateLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:" * "})]}),e.jsx("input",{name:"chequeDate",value:"chequeDate",...t.getFieldProps("chequeDate"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.chequeDate&&t.errors.chequeDate?t.errors.chequeDate:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[r("mainSafPaymentDetailPage.bankNameLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...t.getFieldProps("bankName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Bank Name."}),e.jsxs("span",{className:"text-red-600 absolute text-xs",children:[" ",t.touched.bankName&&t.errors.bankName?t.errors.bankName:null]})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[r("mainSafPaymentDetailPage.branchNameLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...t.getFieldProps("branchName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Branch Name."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.branchName&&t.errors.branchName?t.errors.branchName:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[c=="CHEQUE"&&"Cheque",c=="NEFT"&&"NEFT",c=="ONLINE_R"&&"Transaction",c=="DD"&&"DD"," No.",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"  * "})]}),e.jsx("input",{...t.getFieldProps("chequeNo"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:c=="ONLINE_R"?"Transaction Number":"Enter Cheque No."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.chequeNo&&t.errors.chequeNo?t.errors.chequeNo:null})]}),c=="ONLINE_R"&&e.jsx("div",{className:"form-group mb-6  md:px-4",children:e.jsxs("div",{className:"form-group ",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[c=="ONLINE_R"&&"Transaction Date",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:" * "})]}),e.jsx("input",{name:"TrnDate",value:"TrnDate",...t.getFieldProps("TrnDate"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.TrnDate&&t.errors.TrnDate?t.errors.TrnDate:null})]})}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[r("mainSafPaymentDetailPage.paymentRemarkLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...t.getFieldProps("remarks"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Remarks.."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.remarks&&t.errors.remarks?t.errors.remarks:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[c=="CHEQUE"&&"Cheque",c=="NEFT"&&"NEFT",c=="DD"&&"DD",r("mainSafPaymentDetailPage.imageLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{name:"neftImage",onChange:t.handleChange,type:"file",className:"form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Remarks.."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.neftImage&&t.errors.neftImage?t.errors.neftImage:null})]})]}),e.jsxs("div",{className:"w-full flex  mt-5 mx-3 capitalize",children:[e.jsxs("div",{children:[e.jsx("input",{...t.getFieldProps("paymentType"),type:"radio",value:"isFullPayment",className:"px-2 ml-4",checked:t.values.paymentType=="isFullPayment"}),e.jsxs("label",{htmlFor:"",className:"mr-2",children:[r("mainSafPaymentDetailPage.payFullAmountLabel.label")," "]})]}),e.jsx("div",{children:((ga=a==null?void 0:a.data)==null?void 0:ga.arrear)==0?"":e.jsxs(e.Fragment,{children:[e.jsx("input",{...t.getFieldProps("paymentType"),type:"radio",value:"isArrearPayment",checked:t.values.paymentType=="isArrearPayment"}),e.jsxs("label",{htmlFor:"",children:[" ",r("mainSafPaymentDetailPage.payArrearOnlyLabel.label")," "]})," "]})}),e.jsxs("div",{children:[e.jsx("input",{...t.getFieldProps("paymentType"),type:"radio",className:"px-2 ml-4",value:"isPartPayment",checked:t.values.paymentType=="isPartPayment"}),e.jsx("label",{htmlFor:"",className:"mr-2",children:"Part Payment "})]}),e.jsxs("div",{className:`${t.values.paymentType=="isPartPayment"?"":"hidden"} max-h-8`,children:[e.jsx(ys,{...t.getFieldProps("paidAmount"),id:"outlined-basic",label:"Amount",variant:"outlined",size:"small",sx:{fontWeight:"bold"},onBlur:Wa}),e.jsx("p",{className:"text-red-600 absolute text-xs",children:t.touched.paidAmount&&t.errors.paidAmount?t.errors.paidAmount:null})]}),e.jsxs("button",{type:"submit",className:`${xs}  max-h-10 uppercase mx-2`,children:[r("mainSafPaymentDetailPage.payLabel.label")," ₹",t.values.paymentType=="isFullPayment"&&Math.round(parseFloat((wa=a==null?void 0:a.data)==null?void 0:wa.payableAmt)-parseFloat((_a=a==null?void 0:a.data)==null?void 0:_a.remainAdvance)-parseFloat(((Sa=(Ta=a==null?void 0:a.data)==null?void 0:Ta.rebates[0])==null?void 0:Sa.rebates_amt)||0)-parseFloat((La=a==null?void 0:a.data)==null?void 0:La.total_exempted_general_tax)-parseFloat(((ka=(Fa=a==null?void 0:a.data)==null?void 0:Fa.QuarterlyRebates[0])==null?void 0:ka.rebates_amt)||0)),t.values.paymentType=="isArrearPayment"&&Math.round(parseFloat((Ea=a==null?void 0:a.data)==null?void 0:Ea.arrearPayableAmt))-Math.round(parseFloat((Aa=a==null?void 0:a.data)==null?void 0:Aa.arrear_exempted_general_tax)),t.values.paymentType=="isPartPayment"&&Math.round(parseFloat(t.values.paidAmount||0))]})]})]})]})]})]})]})," ",e.jsx("div",{className:"text-center mt-10",children:((Ca=a==null?void 0:a.data)==null?void 0:Ca.paymentStatus)==1&&e.jsx(e.Fragment,{children:e.jsxs("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl ",children:[" ",r("mainSafPaymentDetailPage.paymentAlreadyDoneLabel.label")]})})})]})})}),(b==null?void 0:b.status)==!1&&e.jsx("div",{className:"text-2xl font-bold text-red-500 mt-20",children:e.jsxs("span",{className:"border border-red-500 px-4 py-2 shadow-xl",children:[b==null?void 0:b.message," "]})})]})]}),e.jsx("div",{className:"w-full mt-20 h-60"})]})}export{Cs as default};
