import{Y as _a,u as ka,r as c,J as Fa,e as Ea,a as Aa,q as Ca,s as x,t as va,bk as Ha,w as qa,j as e,B as Ia,S as Ba,aa as Ma,L as Ua,n as d,z as $a,y as Qa,bZ as Oa,ba as Ra,A as j,b as y,d0 as za,ai as Va,Q as na,f as Wa}from"./index-13160f97.js";import"./RazorpayPaymentScreen-07c9f33a.js";import{T as Ya}from"./TopTabs-7df6a9ab.js";import{T as Za}from"./TextField-6dfcb29c.js";import"./useFormControl-a41bc161.js";import"./formControlState-a1fb9590.js";import"./useTheme-29bdbd42.js";import"./TransitionGroupContext-fe0fe9ef.js";function cs(Ga){var P,w,S,T,L,_,k,F,E,A,C,v,H,q,I,B,M,U,$,Q,O,R,z,V,W,Y,Z,G,J,K,X,D,ee,ae,se,te,re,le,oe,ce,de,ne,ie,me,xe,be,pe,he,fe,Ne,je,ye,ue,ge,Pe,we,Se,Te,Le,_e,ke,Fe,Ee,Ae,Ce,ve,He,qe,Ie,Be,Me,Ue,$e,Qe,Oe,Re,ze,Ve,We,Ye,Ze,Ge,Je,Ke,Xe,De,ea,aa,sa,ta,ra,la,oa,ca,da;const{t}=_a(),{id:m}=ka();console.log("param demand screen holding...",m);const{roles:N}=c.useContext(Fa),{propertyGenerateHoldingOrderId:Ja,api_getHoldingDemandById:ia,onlinePayment:Ka,zeroDemandPayment:ma}=Va(),p=Ea();c.useState(!1);const[a,xa]=c.useState(),[b,ba]=c.useState();c.useState("");const[u,n]=c.useState(!1);c.useState();const[pa,h]=c.useState(!1),[ha,Xa]=c.useState(1),[fa,g]=c.useState(!1),[i,f]=c.useState("CASH");c.useState(!1),Aa("Holding Demand Details");const Na=["BACK OFFICE"],ja=c.useMemo(()=>Array.isArray(N)&&N.some(s=>Na.includes(s)),[N]),ya=Ca({paymentMode:x().required("Please select the Payment mode "),bankName:x().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field is required")}),chequeNo:x().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field is required")}),chequeDate:va().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field is required")}).max(Ha(),"Please select valid date"),branchName:x().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field  is required")}),remarks:x().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field is required")}),neftImage:x().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field is required")}),paidAmount:x().when("paymentType",{is:s=>s=="isPartPayment",then:s=>s.required("This field is required")})}),r=qa({initialValues:{chequeDate:"",bankName:"",branchName:"",chequeNo:"",paymentMode:"",paymentType:"",remarks:"",neftImage:"",paidAmount:""},enableReinitialize:!0,onSubmit:s=>{console.log("values at submit payment",s),La(s)},validationSchema:ya}),ua=s=>{let o=s.target.name,l=s.target.value;o=="paymentMode"&&(l=="CASH"||l=="ONLINE"?g(!1):g(!0)),o=="paymentMode"&&(l=="CHEQUE"&&f("CHEQUE"),l=="NEFT"&&f("NEFT"),l=="DD"&&f("DD"),l=="CASH"&&f("DD")),o=="neftImage"&&Pa(s.target.files[0]),o=="chequeNo"&&r.setFieldValue("chequeNo",Oa(l,r.values.chequeNo,15))},ga=()=>{var o,l;if(((o=r.values)==null?void 0:o.paidAmount)<=((l=a==null?void 0:a.data)==null?void 0:l.totalInterestPenalty)){Ra("Please pay an amount bigger than the interest!");return}},Pa=s=>{console.log("files",s),r.setFieldValue("neftImage",s)},wa=()=>{n(!0),h(!1),j.post(`${ia}`,{propId:m},y()).then(function(s){console.log("view deamnd details at property in egov...",s==null?void 0:s.data),xa(s==null?void 0:s.data),ba(s==null?void 0:s.data),n(!1)}).catch(function(s){console.log("at error part.",s),h(!0),n(!1)})};c.useEffect(()=>{wa()},[]);const Sa=(s,o)=>{n(!0),j.post(`${ma}`,{id:s,...o},y()).then(function(l){console.log("offline payment...",l==null?void 0:l.data),l.data.status?(na.success("Payment done Successfully"),p(`/paymentReceipt/${l.data.data.transactionId}/holding`)):na.warn("Payment Failed"),n(!1)}).catch(function(l){console.log("at error part.",l),h(!0),n(!1)})},Ta=()=>{n(!0),j.post(`${Wa}/api/payment/v1/get-referal-url`,{propId:m},y()).then(function(s){console.log("response.",s.data),s.data.status&&window.open(s.data.data),n(!1)}).catch(function(s){console.log("at error part.",s),h(!0),n(!1)})},La=s=>{za("You are proceeding for payment...").then(o=>{o!=null&&o.isConfirmed&&((s==null?void 0:s.paymentMode)!="ONLINE"?Sa(m,s):Ta())})};return u?e.jsx(e.Fragment,{children:e.jsx(Ia,{})}):pa?e.jsx(Ba,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):(console.log("holding demand status",(w=(P=a==null?void 0:a.data)==null?void 0:P.basicDetails)==null?void 0:w.holding_no),e.jsxs(e.Fragment,{children:[e.jsx(Ma,{position:"top-right",autoClose:2e3}),u&&e.jsx(Ua,{}),e.jsxs("div",{className:"w-full mx-auto px-6",children:[e.jsx("div",{className:"pt-10",children:e.jsx(Ya,{title:`${t("mainHoldingPage.demandDetailsHeadingText.label")}`,type:"holding",id:m,safNo:"",active:"demand"})}),ja&&(a==null?void 0:a.paymentStatus)!==1&&(a==null?void 0:a.can_pay)===!0&&e.jsx("div",{className:"border-2 border-amber-5 00 text px-4 py-1 justify-center items-center font-semibold text-amber-500 shadow-xl w-max cursor-pointer hover:bg-amber-500 hover:text-white",onClick:()=>p(`/waiver-demand-screen/${m}/holding`),children:"Waive Off Demand"}),(a==null?void 0:a.paymentStatus)===1&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:t("mainHoldingPage.allDemandPaidButton.label")}),(a==null?void 0:a.tran_no)!=null&&e.jsx("span",{className:"bg-indigo-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl cursor-pointer hover:bg-indigo-500",onClick:()=>p(`/paymentReceipt/${encodeURIComponent(a==null?void 0:a.tran_no)}/saf`),children:t("mainHoldingPage.viewRecieptButton.label")})]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((T=(S=a==null?void 0:a.data)==null?void 0:S.basicDetails)==null?void 0:T.owner_name_marathi)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[t("mainSafPaymentDetailPage.ownerNameLabel.label"),"."]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((_=(L=a==null?void 0:a.data)==null?void 0:L.basicDetails)==null?void 0:_.prop_address)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[t("mainSafPaymentDetailPage.addressLabel.label"),"."]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((F=(k=a==null?void 0:a.data)==null?void 0:k.basicDetails)==null?void 0:F.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyHoldingNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((A=(E=a==null?void 0:a.data)==null?void 0:E.basicDetails)==null?void 0:A.zone_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyZone.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((v=(C=a==null?void 0:a.data)==null?void 0:C.basicDetails)==null?void 0:v.ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:d((q=(H=a==null?void 0:a.data)==null?void 0:H.basicDetails)==null?void 0:q.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyOwnershipType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((B=(I=a==null?void 0:a.data)==null?void 0:I.basicDetails)==null?void 0:B.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyType.label")})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((U=(M=a==null?void 0:a.data)==null?void 0:M.basicDetails)==null?void 0:U.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyHoldingType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((Q=($=a==null?void 0:a.data)==null?void 0:$.basicDetails)==null?void 0:Q.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyMobileTower.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[d((R=(O=a==null?void 0:a.data)==null?void 0:O.basicDetails)==null?void 0:R.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:d((V=(z=a==null?void 0:a.data)==null?void 0:z.basicDetails)==null?void 0:V.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((Y=(W=a==null?void 0:a.data)==null?void 0:W.basicDetails)==null?void 0:Y.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyRainwaterHarvest.label")})]})]})]})}),e.jsxs("div",{className:"flex flex-row flex-wrap justify-center w-full",children:[(a==null?void 0:a.status)&&e.jsx("div",{class:"rounded-lg pt-4 w-full",children:e.jsx("div",{className:"",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 flex  font-serif underline",children:[e.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),t("mainSafPaymentDetailPage.taxCalculationLabel.label")]}),e.jsx("div",{className:" block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto"}),e.jsxs("div",{className:"w-full h-auto bg-white  rounded shadow-lg text-sm p-4",children:[e.jsx("div",{className:"bg-blue-50 text-blue-700 font-semibold  my-1"}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[" ",t("mainSafPaymentDetailPage.demandListLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.generalTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.roadTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.educationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.waterTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.vSanitationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.treeTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[" ",t("mainSafPaymentDetailPage.professionalTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[" ",t("mainSafPaymentDetailPage.tax1Label.label"),e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.waterBenefitLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.waterBillLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.spWaterCessLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.drainCessLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.bigBuildingLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.openPlotTax.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.totalTaxLabel.label")," "]})]})}),e.jsx("tbody",{children:(G=(Z=a==null?void 0:a.data)==null?void 0:Z.demandList)==null?void 0:G.map((s,o)=>e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:17,children:e.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:[s!=null&&s.is_arrear?"Arrear Upto":""," ",t("mainSafPaymentDetailPage.financialYearLabel.label")," : ",s==null?void 0:s.fyear]})})}),e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[(s==null?void 0:s.general_tax)||0,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.road_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.firefighting_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.education_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.water_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.light_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.sewarage_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.tree_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.professional_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.tax1)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.state_education_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.water_benefit)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.water_bill)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.sp_water_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.drain_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.major_building)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.open_ploat_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.total_tax})]})]}))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:e.jsx("h1",{className:"p-2",children:t("mainSafPaymentDetailPage.grandTotalTaxBifurcationLabel.label")})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.generalTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.roadTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.firefightingTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.educationTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.waterTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.vSanitationTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.sewageTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.treeTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.professionalTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.tax1Label.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.stateEducationTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.waterBenefitLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.waterBillLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.spWaterCessLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.drainCessLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.bigBuildingLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.openPlotTax.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.totalInterest.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.totalTaxLabel.label")})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsx("td",{className:"border border-collapse p-2",children:(K=(J=a==null?void 0:a.data)==null?void 0:J.grandTaxes)==null?void 0:K.general_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(D=(X=a==null?void 0:a.data)==null?void 0:X.grandTaxes)==null?void 0:D.road_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ae=(ee=a==null?void 0:a.data)==null?void 0:ee.grandTaxes)==null?void 0:ae.firefighting_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(te=(se=a==null?void 0:a.data)==null?void 0:se.grandTaxes)==null?void 0:te.education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(le=(re=a==null?void 0:a.data)==null?void 0:re.grandTaxes)==null?void 0:le.water_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ce=(oe=a==null?void 0:a.data)==null?void 0:oe.grandTaxes)==null?void 0:ce.cleanliness_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ne=(de=a==null?void 0:a.data)==null?void 0:de.grandTaxes)==null?void 0:ne.sewarage_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(me=(ie=a==null?void 0:a.data)==null?void 0:ie.grandTaxes)==null?void 0:me.tree_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(be=(xe=a==null?void 0:a.data)==null?void 0:xe.grandTaxes)==null?void 0:be.professional_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(he=(pe=a==null?void 0:a.data)==null?void 0:pe.grandTaxes)==null?void 0:he.tax1}),e.jsx("td",{className:"border border-collapse p-2",children:(Ne=(fe=a==null?void 0:a.data)==null?void 0:fe.grandTaxes)==null?void 0:Ne.state_education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ye=(je=a==null?void 0:a.data)==null?void 0:je.grandTaxes)==null?void 0:ye.water_benefit}),e.jsx("td",{className:"border border-collapse p-2",children:(ge=(ue=a==null?void 0:a.data)==null?void 0:ue.grandTaxes)==null?void 0:ge.water_bill}),e.jsx("td",{className:"border border-collapse p-2",children:(we=(Pe=a==null?void 0:a.data)==null?void 0:Pe.grandTaxes)==null?void 0:we.sp_water_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(Te=(Se=a==null?void 0:a.data)==null?void 0:Se.grandTaxes)==null?void 0:Te.drain_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(_e=(Le=a==null?void 0:a.data)==null?void 0:Le.grandTaxes)==null?void 0:_e.major_building}),e.jsx("td",{className:"border border-collapse p-2",children:(Fe=(ke=a==null?void 0:a.data)==null?void 0:ke.grandTaxes)==null?void 0:Fe.open_ploat_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(Ae=(Ee=a==null?void 0:a.data)==null?void 0:Ee.grandTaxes)==null?void 0:Ae.monthlyPenalty}),e.jsx("td",{className:"border border-collapse p-2 font-bold text-lg text-teal-600",children:(ve=(Ce=a==null?void 0:a.data)==null?void 0:Ce.grandTaxes)==null?void 0:ve.total_tax})]})})]})}),e.jsxs("div",{className:"bg-white py-4",children:[e.jsxs("div",{className:" gap-4",children:[e.jsxs("h1",{className:"flex font-semibold p-1",children:[e.jsxs("div",{className:"w-48 ",children:[" *  ",t("mainSafPaymentDetailPage.totalArrearAmountLabel.label"),"  -"]}),e.jsxs("div",{className:" text-red-600 font-bold text-md",children:["₹",Math.round(parseFloat((He=a==null?void 0:a.data)==null?void 0:He.arrear))]})]}),e.jsxs("h1",{className:"flex font-semibold p-1",children:[e.jsxs("div",{className:"w-48",children:[" *  ",t("mainSafPaymentDetailPage.totalCurrentAmountLabel.label"),"  - "]}),e.jsxs("div",{className:"  text-teal-600 font-bold text-md",children:["₹",Math.round(parseFloat((qe=a==null?void 0:a.data)==null?void 0:qe.currentDemand))]})]}),e.jsxs("h1",{className:"flex font-semibold p-1",children:[e.jsxs("div",{className:"w-48",children:["*  ",t("mainSafPaymentDetailPage.totalInterestAmountLabel.label")," -"]}),e.jsxs("div",{className:"  text-red-600 font-bold text-md",children:["₹",Math.round(parseFloat((Ie=a==null?void 0:a.data)==null?void 0:Ie.totalInterestPenalty))]}),e.jsxs("small",{className:"whitespace-nowrap",children:["  ( ",t("mainSafPaymentDetailPage.interestOnArrearLabel.label"),"  ₹ ",(Be=a==null?void 0:a.data)==null?void 0:Be.arrearInterest," + ",t("mainSafPaymentDetailPage.interestOnCurrentDemandLabel.label")," ₹ ",(Me=a==null?void 0:a.data)==null?void 0:Me.previousInterest,")"]})]})]}),(($e=(Ue=a==null?void 0:a.data)==null?void 0:Ue.rebates[0])==null?void 0:$e.rebates_amt)!=0&&((Qe=a==null?void 0:a.data)==null?void 0:Qe.rebates.length)!=0&&e.jsxs("small",{className:"whitespace-nowrap capitalize text-orange-400 p-52 text-xs -ml-2",children:[" ( If you pay full amount before  ",e.jsx("b",{children:(Re=(Oe=a==null?void 0:a.data)==null?void 0:Oe.rebates[0])==null?void 0:Re.effective_upto}),", Then ",e.jsx("b",{children:(Ve=(ze=a==null?void 0:a.data)==null?void 0:ze.rebates[0])==null?void 0:Ve.rebates})," % of interest on the property will be waived. )"]}),e.jsxs("h1",{className:"flex font-semibold p-1",children:[e.jsxs("div",{className:"w-48",children:["* ",t("mainSafPaymentDetailPage.totalPayableAmountLabel.label"),"  -"]}),e.jsxs("div",{className:"  text-blue-600 font-bold text-lg",children:["₹ ",Math.round(parseFloat((We=a==null?void 0:a.data)==null?void 0:We.payableAmt))]}),e.jsxs("small",{className:"whitespace-nowrap p-1",children:[" ( ",t("mainSafPaymentDetailPage.arrearTotalTaxInterestLabel.label")," )"]}),((Ze=(Ye=a==null?void 0:a.data)==null?void 0:Ye.rebates[0])==null?void 0:Ze.rebates_amt)!=0&&((Ge=a==null?void 0:a.data)==null?void 0:Ge.rebates.length)!=0&&e.jsx("small",{className:"whitespace-nowrap p-1",children:e.jsxs("span",{className:"text-orange-500",children:[" (",(Je=a==null?void 0:a.data)==null?void 0:Je.payableAmt," - ",(Xe=(Ke=a==null?void 0:a.data)==null?void 0:Ke.rebates[0])==null?void 0:Xe.rebates_amt,")"]})})]}),e.jsxs("h1",{className:"flex font-semibold p-1",children:[e.jsx("div",{className:"w-48",children:"* Advance Amount  -"}),e.jsxs("div",{className:"  text-blue-600 font-bold text-lg",children:["₹ ",Math.round(parseFloat((De=a==null?void 0:a.data)==null?void 0:De.remainAdvance))]}),e.jsx("small",{className:"whitespace-nowrap capitalize text-green-500 p-1",children:" ( This is an adjustable amount from total payment value. )"})]}),e.jsxs("button",{type:"button",className:`${$a} max-h-8 uppercase mb-4`,onClick:()=>p("/demand-reciept/"+m),children:[t("mainSafPaymentDetailPage.viewDemandBillLabel.label")," "]}),ha==1&&((ea=a==null?void 0:a.data)==null?void 0:ea.can_take_payment)&&((aa=a==null?void 0:a.data)==null?void 0:aa.paymentStatus)==0&&e.jsxs("form",{onSubmit:r.handleSubmit,onChange:ua,children:[e.jsxs("select",{name:"paymentMode",onChange:r.handleChange,value:r.values.paymentMode,id:"paymentMode",className:"px-4 py-1.5 rounded border w-2/3",children:[e.jsxs("option",{value:"",children:[" ",t("mainSafPaymentDetailPage.selectLabel.label")]}),e.jsxs("option",{value:"CASH",children:[" ",t("mainSafPaymentDetailPage.cashLabel.label")]}),e.jsxs("option",{value:"CHEQUE",children:[" ",t("mainSafPaymentDetailPage.chequeLabel.label")]}),e.jsxs("option",{value:"DD",children:[" ",t("mainSafPaymentDetailPage.ddLabel.label")]}),e.jsx("option",{value:"NEFT",children:t("mainSafPaymentDetailPage.neftLabel.label")})]})," ",e.jsx("br",{}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.paymentMode&&r.errors.paymentMode?r.errors.paymentMode:null}),e.jsxs("div",{className:`${fa?"block":"hidden"} w-full grid grid-cols-1 md:grid-cols-4 mt-5`,children:[e.jsxs("div",{className:"form-group md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[i=="CHEQUE"&&"Cheque",i=="NEFT"&&"NEFT",i=="DD"&&"DD"," ",t("mainSafPaymentDetailPage.dateLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:" * "})]}),e.jsx("input",{name:"chequeDate",value:"chequeDate",...r.getFieldProps("chequeDate"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.chequeDate&&r.errors.chequeDate?r.errors.chequeDate:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("mainSafPaymentDetailPage.bankNameLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...r.getFieldProps("bankName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Bank Name."}),e.jsxs("span",{className:"text-red-600 absolute text-xs",children:[" ",r.touched.bankName&&r.errors.bankName?r.errors.bankName:null]})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("mainSafPaymentDetailPage.branchNameLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...r.getFieldProps("branchName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Branch Name."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.branchName&&r.errors.branchName?r.errors.branchName:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[i=="CHEQUE"&&"Cheque",i=="NEFT"&&"NEFT",i=="DD"&&"DD"," No.",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"  * "})]}),e.jsx("input",{...r.getFieldProps("chequeNo"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Cheque No."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.chequeNo&&r.errors.chequeNo?r.errors.chequeNo:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("mainSafPaymentDetailPage.paymentRemarkLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...r.getFieldProps("remarks"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Remarks.."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.remarks&&r.errors.remarks?r.errors.remarks:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[i=="CHEQUE"&&"Cheque",i=="NEFT"&&"NEFT",i=="DD"&&"DD",t("mainSafPaymentDetailPage.imageLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{name:"neftImage",onChange:r.handleChange,type:"file",className:"form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Remarks.."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.neftImage&&r.errors.neftImage?r.errors.neftImage:null})]})]}),e.jsxs("div",{className:"w-full flex  mt-5 mx-3 capitalize",children:[e.jsxs("div",{children:[e.jsx("input",{...r.getFieldProps("paymentType"),type:"radio",value:"isFullPayment",className:"px-2 ml-4",checked:r.values.paymentType=="isFullPayment"}),e.jsxs("label",{htmlFor:"",className:"mr-2",children:[t("mainSafPaymentDetailPage.payFullAmountLabel.label")," "]})]}),e.jsx("div",{children:((sa=a==null?void 0:a.data)==null?void 0:sa.arrear)==0?"":e.jsxs(e.Fragment,{children:[e.jsx("input",{...r.getFieldProps("paymentType"),type:"radio",value:"isArrearPayment",checked:r.values.paymentType=="isArrearPayment"}),e.jsxs("label",{htmlFor:"",children:[" ",t("mainSafPaymentDetailPage.payArrearOnlyLabel.label")," "]})," "]})}),e.jsxs("div",{children:[e.jsx("input",{...r.getFieldProps("paymentType"),type:"radio",className:"px-2 ml-4",value:"isPartPayment",checked:r.values.paymentType=="isPartPayment"}),e.jsx("label",{htmlFor:"",className:"mr-2",children:"Part Payment "})]}),e.jsxs("div",{className:`${r.values.paymentType=="isPartPayment"?"":"hidden"} max-h-8`,children:[e.jsx(Za,{...r.getFieldProps("paidAmount"),id:"outlined-basic",label:"Amount",variant:"outlined",size:"small",sx:{fontWeight:"bold"},onBlur:ga}),e.jsx("p",{className:"text-red-600 absolute text-xs",children:r.touched.paidAmount&&r.errors.paidAmount?r.errors.paidAmount:null})]}),e.jsxs("button",{type:"submit",className:`${Qa}  max-h-10 uppercase mx-2`,children:[t("mainSafPaymentDetailPage.payLabel.label")," ₹",r.values.paymentType=="isFullPayment"&&Math.round(parseFloat((ta=a==null?void 0:a.data)==null?void 0:ta.payableAmt)-parseFloat((ra=a==null?void 0:a.data)==null?void 0:ra.remainAdvance)-parseFloat((oa=(la=a==null?void 0:a.data)==null?void 0:la.rebates[0])==null?void 0:oa.rebates_amt)),r.values.paymentType=="isArrearPayment"&&Math.round(parseFloat((ca=a==null?void 0:a.data)==null?void 0:ca.arrearPayableAmt)),r.values.paymentType=="isPartPayment"&&Math.round(parseFloat(r.values.paidAmount))]})]})]})]})]})]})]})," ",e.jsx("div",{className:"text-center mt-10",children:((da=a==null?void 0:a.data)==null?void 0:da.paymentStatus)==1&&e.jsx(e.Fragment,{children:e.jsxs("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl ",children:[" ",t("mainSafPaymentDetailPage.paymentAlreadyDoneLabel.label")]})})})]})})}),(b==null?void 0:b.status)==!1&&e.jsx("div",{className:"text-2xl font-bold text-red-500 mt-20",children:e.jsxs("span",{className:"border border-red-500 px-4 py-2 shadow-xl",children:[b==null?void 0:b.message," "]})})]})]}),e.jsx("div",{className:"w-full mt-20 h-60"})]}))}export{cs as default};
