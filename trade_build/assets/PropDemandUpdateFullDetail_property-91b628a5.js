import{X as We,u as Ve,r as l,I as Ke,e as Ye,a as Ge,q as Xe,s as x,t as Ze,bf as Je,w as Me,j as e,B as ve,S as De,a7 as ea,K as aa,n as t,A as h,b as j,cF as sa,af as ra,Q as Ee,f as la}from"./index-07053450.js";import"./RazorpayPaymentScreen-d4fecb19.js";const na=()=>{var y,g,P,w,S,T,_,L,u,k,H,E,C,q,A,B,F,$,I,U,O,Q,R,z,W,V,K,Y,G,X,Z,J,M,v,D,ee,ae,se,re,le,te,ce,de,oe,ie,ne,xe,be,me,pe,he,je,fe,Ne,ye,ge,Pe,we,Se,Te,_e,Le,ue,ke,He;const{t:r}=We(),{id:i}=Ve();console.log("param demand screen holding...",i);const{roles:p}=l.useContext(Ke),{propertyGenerateHoldingOrderId:ta,api_getHoldingDemandById:Ce,onlinePayment:ca,zeroDemandPayment:qe}=ra(),b=Ye();l.useState(!1);const[s,Ae]=l.useState(),[n,Be]=l.useState();l.useState("");const[f,c]=l.useState(!1);l.useState();const[Fe,m]=l.useState(!1);l.useState(1),l.useState(!1);const[N,da]=l.useState(!1);l.useState("CASH"),Ge("Update Holding Demand Details");const $e=["BACK OFFICE"],Ie=l.useMemo(()=>Array.isArray(p)&&p.some(a=>$e.includes(a)),[p]),Ue=Xe({paymentMode:x().required("Please select the Payment mode "),bankName:x().when("paymentMode",{is:a=>a=="CHEQUE"||a=="NEFT"||a=="DD",then:a=>a.required("This field is required")}),chequeNo:x().when("paymentMode",{is:a=>a=="CHEQUE"||a=="NEFT"||a=="DD",then:a=>a.required("This field is required")}),chequeDate:Ze().when("paymentMode",{is:a=>a=="CHEQUE"||a=="NEFT"||a=="DD",then:a=>a.required("This field is required")}).max(Je(),"Please select valid date"),branchName:x().when("paymentMode",{is:a=>a=="CHEQUE"||a=="NEFT"||a=="DD",then:a=>a.required("This field  is required")}),remarks:x().when("paymentMode",{is:a=>a=="CHEQUE"||a=="NEFT"||a=="DD",then:a=>a.required("This field is required")}),neftImage:x().when("paymentMode",{is:a=>a=="CHEQUE"||a=="NEFT"||a=="DD",then:a=>a.required("This field is required")})});Me({initialValues:{chequeDate:"",bankName:"",branchName:"",chequeNo:"",paymentMode:"",remarks:"",neftImage:"",isArrear:N},enableReinitialize:!0,onSubmit:a=>{console.log("values at submit payment",a),ze(a)},validationSchema:Ue});const Oe=()=>{c(!0),m(!1),h.post(`${Ce}`,{propId:i},j()).then(function(a){console.log("view deamnd details at property in egov...",a==null?void 0:a.data),Ae(a==null?void 0:a.data),Be(a==null?void 0:a.data),c(!1)}).catch(function(a){console.log("at error part.",a),m(!0),c(!1)})};l.useEffect(()=>{Oe()},[]);const Qe=(a,d)=>{c(!0),h.post(`${qe}`,{id:a,...d},j()).then(function(o){console.log("offline payment...",o==null?void 0:o.data),o.data.status?(Ee.success("Payment done Successfully"),b(`/paymentReceipt/${o.data.data.TransactionNo}/holding`)):Ee.warn("Payment Failed"),c(!1)}).catch(function(o){console.log("at error part.",o),m(!0),c(!1)})},Re=()=>{c(!0),h.post(`${la}/api/payment/v1/get-referal-url`,{propId:i},j()).then(function(a){console.log("response.",a.data),a.data.status&&window.open(a.data.data),c(!1)}).catch(function(a){console.log("at error part.",a),m(!0),c(!1)})};console.log("isArrear",N);const ze=a=>{sa("You are proceeding for payment...").then(d=>{d!=null&&d.isConfirmed&&((a==null?void 0:a.paymentMode)!="ONLINE"?Qe(i,a):Re())})};return f?e.jsx(e.Fragment,{children:e.jsx(ve,{})}):Fe?e.jsx(De,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):(console.log("holding demand status",(y=s==null?void 0:s.data)==null?void 0:y.demandList),e.jsxs(e.Fragment,{children:[e.jsx(ea,{position:"top-right",autoClose:2e3}),f&&e.jsx(aa,{}),e.jsxs("div",{className:"w-full mx-auto px-6",children:[e.jsx("div",{className:"text-right px-4 mt-4"}),Ie&&(s==null?void 0:s.paymentStatus)!==1&&(s==null?void 0:s.can_pay)===!0&&e.jsx("div",{className:"border-2 border-amber-5 00 text px-4 py-1 justify-center items-center font-semibold text-amber-500 shadow-xl w-max cursor-pointer hover:bg-amber-500 hover:text-white",onClick:()=>b(`/waiver-demand-screen/${i}/holding`),children:"Waive Off Demand"}),(s==null?void 0:s.paymentStatus)===1&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:r("mainHoldingPage.allDemandPaidButton.label")}),(s==null?void 0:s.tran_no)!=null&&e.jsx("span",{className:"bg-indigo-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl cursor-pointer hover:bg-indigo-500",onClick:()=>b(`/paymentReceipt/${encodeURIComponent(s==null?void 0:s.tran_no)}/saf`),children:r("mainHoldingPage.viewRecieptButton.label")})]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:t((P=(g=s==null?void 0:s.data)==null?void 0:g.basicDetails)==null?void 0:P.applicant_name)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[r("mainSafPaymentDetailPage.ownerNameLabel.label"),"."]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:t((S=(w=s==null?void 0:s.data)==null?void 0:w.basicDetails)==null?void 0:S.prop_address)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[r("mainSafPaymentDetailPage.addressLabel.label"),"."]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:t((_=(T=s==null?void 0:s.data)==null?void 0:T.basicDetails)==null?void 0:_.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyHoldingNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:t((u=(L=s==null?void 0:s.data)==null?void 0:L.basicDetails)==null?void 0:u.zone_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyZone.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:t((H=(k=s==null?void 0:s.data)==null?void 0:k.basicDetails)==null?void 0:H.ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:t((C=(E=s==null?void 0:s.data)==null?void 0:E.basicDetails)==null?void 0:C.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyOwnershipType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:t((A=(q=s==null?void 0:s.data)==null?void 0:q.basicDetails)==null?void 0:A.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyType.label")})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:t((F=(B=s==null?void 0:s.data)==null?void 0:B.basicDetails)==null?void 0:F.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyHoldingType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:t((I=($=s==null?void 0:s.data)==null?void 0:$.basicDetails)==null?void 0:I.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyMobileTower.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[t((O=(U=s==null?void 0:s.data)==null?void 0:U.basicDetails)==null?void 0:O.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:t((R=(Q=s==null?void 0:s.data)==null?void 0:Q.basicDetails)==null?void 0:R.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("mainHoldingPage.propertyPetrolPump.label")})]})]})]})}),e.jsxs("div",{className:"flex flex-row flex-wrap justify-center w-full",children:[(s==null?void 0:s.status)&&e.jsxs("div",{class:"rounded-lg pt-4 w-full",children:[e.jsx("div",{className:"text-center mt-10",children:((z=s==null?void 0:s.data)==null?void 0:z.paymentStatus)==1?e.jsx(e.Fragment,{children:e.jsxs("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl ",children:[" ",r("mainSafPaymentDetailPage.paymentAlreadyDoneLabel.label")]})}):e.jsx(e.Fragment,{})}),e.jsx("div",{className:"",children:((W=s==null?void 0:s.data)==null?void 0:W.paymentStatus)==0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 flex  font-serif underline",children:[e.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),r("mainSafPaymentDetailPage.taxCalculationLabel.label")]}),e.jsx("div",{className:" block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto"}),e.jsxs("div",{className:"w-full h-auto bg-white  rounded shadow-lg text-sm p-4",children:[e.jsx("div",{className:"bg-blue-50 text-blue-700 font-semibold  my-1"}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[" ",r("mainSafPaymentDetailPage.demandListLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.generalTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.roadTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.educationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.waterTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.vSanitationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.treeTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[" ",r("mainSafPaymentDetailPage.professionalTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[" ",r("mainSafPaymentDetailPage.tax1Label.label"),e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.waterBenefitLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.waterBillLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.spWaterCessLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.drainCessLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.bigBuildingLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.openPlotTax.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainSafPaymentDetailPage.totalTaxLabel.label")," "]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[r("mainNewAssessmentPage.action.label")," "]})]})}),e.jsx("tbody",{children:(K=(V=s==null?void 0:s.data)==null?void 0:V.demandList)==null?void 0:K.map((a,d)=>e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:17,children:e.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:[a!=null&&a.is_arrear?"Arrear Upto":""," ",r("mainSafPaymentDetailPage.financialYearLabel.label")," : ",a==null?void 0:a.fyear]})})}),e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[(a==null?void 0:a.general_tax)||0,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.road_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.firefighting_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.state_education_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.water_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.light_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.sewarage_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.tree_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.professional_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.tax1)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.education_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.water_benefit)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.water_bill)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.sp_water_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.drain_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.major_building)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(a==null?void 0:a.open_ploat_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:a==null?void 0:a.total_tax}),e.jsx("td",{className:"border border-collapse p-2",children:e.jsx("button",{className:`cypress_editButton_${d} bg-blue-700 text-white px-3 py-2 font-semibold rounded-sm`,onClick:()=>b(`/demand-update-fullDetails/${i}/${d}/${a==null?void 0:a.id}`),children:r("mainNewAssessmentPage.edit.label")})})]},`demandList${d}`)]}))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:e.jsx("h1",{className:"p-2",children:r("mainSafPaymentDetailPage.grandTotalTaxBifurcationLabel.label")})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.generalTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.roadTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.firefightingTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.educationTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.waterTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.vSanitationTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.sewageTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.treeTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.professionalTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.tax1Label.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.stateEducationTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.waterBenefitLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.waterBillLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.spWaterCessLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.drainCessLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.bigBuildingLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.openPlotTax.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.totalInterest.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:r("mainSafPaymentDetailPage.totalTaxLabel.label")})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsx("td",{className:"border border-collapse p-2",children:(G=(Y=s==null?void 0:s.data)==null?void 0:Y.grandTaxes)==null?void 0:G.general_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(Z=(X=s==null?void 0:s.data)==null?void 0:X.grandTaxes)==null?void 0:Z.road_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(M=(J=s==null?void 0:s.data)==null?void 0:J.grandTaxes)==null?void 0:M.firefighting_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(D=(v=s==null?void 0:s.data)==null?void 0:v.grandTaxes)==null?void 0:D.state_education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ae=(ee=s==null?void 0:s.data)==null?void 0:ee.grandTaxes)==null?void 0:ae.water_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(re=(se=s==null?void 0:s.data)==null?void 0:se.grandTaxes)==null?void 0:re.cleanliness_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(te=(le=s==null?void 0:s.data)==null?void 0:le.grandTaxes)==null?void 0:te.sewarage_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(de=(ce=s==null?void 0:s.data)==null?void 0:ce.grandTaxes)==null?void 0:de.tree_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ie=(oe=s==null?void 0:s.data)==null?void 0:oe.grandTaxes)==null?void 0:ie.professional_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(xe=(ne=s==null?void 0:s.data)==null?void 0:ne.grandTaxes)==null?void 0:xe.tax1}),e.jsx("td",{className:"border border-collapse p-2",children:(me=(be=s==null?void 0:s.data)==null?void 0:be.grandTaxes)==null?void 0:me.state_education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(he=(pe=s==null?void 0:s.data)==null?void 0:pe.grandTaxes)==null?void 0:he.water_benefit}),e.jsx("td",{className:"border border-collapse p-2",children:(fe=(je=s==null?void 0:s.data)==null?void 0:je.grandTaxes)==null?void 0:fe.water_bill}),e.jsx("td",{className:"border border-collapse p-2",children:(ye=(Ne=s==null?void 0:s.data)==null?void 0:Ne.grandTaxes)==null?void 0:ye.sp_water_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(Pe=(ge=s==null?void 0:s.data)==null?void 0:ge.grandTaxes)==null?void 0:Pe.drain_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(Se=(we=s==null?void 0:s.data)==null?void 0:we.grandTaxes)==null?void 0:Se.major_building}),e.jsx("td",{className:"border border-collapse p-2",children:(_e=(Te=s==null?void 0:s.data)==null?void 0:Te.grandTaxes)==null?void 0:_e.open_ploat_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ue=(Le=s==null?void 0:s.data)==null?void 0:Le.grandTaxes)==null?void 0:ue.monthlyPenalty}),e.jsx("td",{className:"border border-collapse p-2 font-bold text-lg text-teal-600",children:(He=(ke=s==null?void 0:s.data)==null?void 0:ke.grandTaxes)==null?void 0:He.total_tax})]})})]})})]})]})]})," "]}):""})]}),(n==null?void 0:n.status)==!1&&e.jsx("div",{className:"text-2xl font-bold text-red-500 mt-20",children:e.jsxs("span",{className:"border border-red-500 px-4 py-2 shadow-xl",children:[n==null?void 0:n.message," "]})})]})]}),e.jsx("div",{className:"w-full mt-20 h-60"})]}))};export{na as default};
