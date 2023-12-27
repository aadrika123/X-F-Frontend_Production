import{X as ba,u as pa,r as c,I as ha,e as fa,a as Na,q as ja,s as x,t as ya,bf as ua,w as ga,j as e,B as Pa,S as wa,a7 as Sa,K as Ta,n as d,y as La,z as _a,bE as ka,b5 as Ea,A as j,b as y,cF as Aa,af as Ca,Q as Ge,f as Fa}from"./index-4d0d68ea.js";import"./RazorpayPaymentScreen-a88ab367.js";import{T as va}from"./TopTabs-9d4cd4f5.js";import{T as Ha}from"./TextField-8a654d47.js";import"./useFormControl-113c4ce7.js";import"./formControlState-a1fb9590.js";import"./useTheme-288e2ea6.js";import"./TransitionGroupContext-d8a0b984.js";function Ka(qa){var P,w,S,T,L,_,k,E,A,C,F,v,H,q,I,B,U,$,Q,M,O,R,z,V,W,K,Y,G,X,Z,J,D,ee,ae,se,te,le,re,oe,ce,de,ne,ie,me,xe,be,pe,he,fe,Ne,je,ye,ue,ge,Pe,we,Se,Te,Le,_e,ke,Ee,Ae,Ce,Fe,ve,He,qe,Ie,Be,Ue,$e,Qe,Me,Oe,Re,ze,Ve,We,Ke,Ye;const{t}=ba(),{id:m}=pa();console.log("param demand screen holding...",m);const{roles:N}=c.useContext(ha),{propertyGenerateHoldingOrderId:Ia,api_getHoldingDemandById:Xe,onlinePayment:Ba,zeroDemandPayment:Ze}=Ca(),p=fa();c.useState(!1);const[a,Je]=c.useState(),[b,De]=c.useState();c.useState("");const[u,n]=c.useState(!1);c.useState();const[ea,h]=c.useState(!1),[aa,Ua]=c.useState(1),[sa,g]=c.useState(!1),[i,f]=c.useState("CASH");c.useState(!1),Na("Holding Demand Details");const ta=["BACK OFFICE"],la=c.useMemo(()=>Array.isArray(N)&&N.some(s=>ta.includes(s)),[N]),ra=ja({paymentMode:x().required("Please select the Payment mode "),bankName:x().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field is required")}),chequeNo:x().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field is required")}),chequeDate:ya().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field is required")}).max(ua(),"Please select valid date"),branchName:x().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field  is required")}),remarks:x().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field is required")}),neftImage:x().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("This field is required")}),paidAmount:x().when("paymentType",{is:s=>s=="isPartPayment",then:s=>s.required("This field is required")})}),l=ga({initialValues:{chequeDate:"",bankName:"",branchName:"",chequeNo:"",paymentMode:"",paymentType:"",remarks:"",neftImage:"",paidAmount:""},enableReinitialize:!0,onSubmit:s=>{console.log("values at submit payment",s),xa(s)},validationSchema:ra}),oa=s=>{let o=s.target.name,r=s.target.value;o=="paymentMode"&&(r=="CASH"||r=="ONLINE"?g(!1):g(!0)),o=="paymentMode"&&(r=="CHEQUE"&&f("CHEQUE"),r=="NEFT"&&f("NEFT"),r=="DD"&&f("DD"),r=="CASH"&&f("DD")),o=="neftImage"&&da(s.target.files[0]),o=="chequeNo"&&l.setFieldValue("chequeNo",ka(r,l.values.chequeNo,15))},ca=()=>{var o,r;if(((o=l.values)==null?void 0:o.paidAmount)<=((r=a==null?void 0:a.data)==null?void 0:r.totalInterestPenalty)){Ea("Please pay an amount bigger than the interest!");return}},da=s=>{console.log("files",s),l.setFieldValue("neftImage",s)},na=()=>{n(!0),h(!1),j.post(`${Xe}`,{propId:m},y()).then(function(s){console.log("view deamnd details at property in egov...",s==null?void 0:s.data),Je(s==null?void 0:s.data),De(s==null?void 0:s.data),n(!1)}).catch(function(s){console.log("at error part.",s),h(!0),n(!1)})};c.useEffect(()=>{na()},[]);const ia=(s,o)=>{n(!0),j.post(`${Ze}`,{id:s,...o},y()).then(function(r){console.log("offline payment...",r==null?void 0:r.data),r.data.status?(Ge.success("Payment done Successfully"),p(`/paymentReceipt/${r.data.data.transactionId}/holding`)):Ge.warn("Payment Failed"),n(!1)}).catch(function(r){console.log("at error part.",r),h(!0),n(!1)})},ma=()=>{n(!0),j.post(`${Fa}/api/payment/v1/get-referal-url`,{propId:m},y()).then(function(s){console.log("response.",s.data),s.data.status&&window.open(s.data.data),n(!1)}).catch(function(s){console.log("at error part.",s),h(!0),n(!1)})},xa=s=>{Aa("You are proceeding for payment...").then(o=>{o!=null&&o.isConfirmed&&((s==null?void 0:s.paymentMode)!="ONLINE"?ia(m,s):ma())})};return u?e.jsx(e.Fragment,{children:e.jsx(Pa,{})}):ea?e.jsx(wa,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):(console.log("holding demand status",(w=(P=a==null?void 0:a.data)==null?void 0:P.basicDetails)==null?void 0:w.holding_no),e.jsxs(e.Fragment,{children:[e.jsx(Sa,{position:"top-right",autoClose:2e3}),u&&e.jsx(Ta,{}),e.jsxs("div",{className:"w-full mx-auto px-6",children:[e.jsx("div",{className:"pt-10",children:e.jsx(va,{title:`${t("mainHoldingPage.demandDetailsHeadingText.label")}`,type:"holding",id:m,safNo:"",active:"demand"})}),la&&(a==null?void 0:a.paymentStatus)!==1&&(a==null?void 0:a.can_pay)===!0&&e.jsx("div",{className:"border-2 border-amber-5 00 text px-4 py-1 justify-center items-center font-semibold text-amber-500 shadow-xl w-max cursor-pointer hover:bg-amber-500 hover:text-white",onClick:()=>p(`/waiver-demand-screen/${m}/holding`),children:"Waive Off Demand"}),(a==null?void 0:a.paymentStatus)===1&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:t("mainHoldingPage.allDemandPaidButton.label")}),(a==null?void 0:a.tran_no)!=null&&e.jsx("span",{className:"bg-indigo-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl cursor-pointer hover:bg-indigo-500",onClick:()=>p(`/paymentReceipt/${encodeURIComponent(a==null?void 0:a.tran_no)}/saf`),children:t("mainHoldingPage.viewRecieptButton.label")})]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((T=(S=a==null?void 0:a.data)==null?void 0:S.basicDetails)==null?void 0:T.owner_name_marathi)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[t("mainSafPaymentDetailPage.ownerNameLabel.label"),"."]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((_=(L=a==null?void 0:a.data)==null?void 0:L.basicDetails)==null?void 0:_.prop_address)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[t("mainSafPaymentDetailPage.addressLabel.label"),"."]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((E=(k=a==null?void 0:a.data)==null?void 0:k.basicDetails)==null?void 0:E.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyHoldingNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((C=(A=a==null?void 0:a.data)==null?void 0:A.basicDetails)==null?void 0:C.zone_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyZone.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((v=(F=a==null?void 0:a.data)==null?void 0:F.basicDetails)==null?void 0:v.ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:d((q=(H=a==null?void 0:a.data)==null?void 0:H.basicDetails)==null?void 0:q.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyOwnershipType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((B=(I=a==null?void 0:a.data)==null?void 0:I.basicDetails)==null?void 0:B.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyType.label")})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d(($=(U=a==null?void 0:a.data)==null?void 0:U.basicDetails)==null?void 0:$.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyHoldingType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((M=(Q=a==null?void 0:a.data)==null?void 0:Q.basicDetails)==null?void 0:M.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyMobileTower.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[d((R=(O=a==null?void 0:a.data)==null?void 0:O.basicDetails)==null?void 0:R.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:d((V=(z=a==null?void 0:a.data)==null?void 0:z.basicDetails)==null?void 0:V.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((K=(W=a==null?void 0:a.data)==null?void 0:W.basicDetails)==null?void 0:K.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyRainwaterHarvest.label")})]})]})]})}),e.jsxs("div",{className:"flex flex-row flex-wrap justify-center w-full",children:[(a==null?void 0:a.status)&&e.jsxs("div",{class:"rounded-lg pt-4 w-full",children:[e.jsx("div",{className:"text-center mt-10",children:((Y=a==null?void 0:a.data)==null?void 0:Y.paymentStatus)==1?e.jsx(e.Fragment,{children:e.jsxs("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl ",children:[" ",t("mainSafPaymentDetailPage.paymentAlreadyDoneLabel.label")]})}):e.jsx(e.Fragment,{})}),e.jsx("div",{className:"",children:((G=a==null?void 0:a.data)==null?void 0:G.paymentStatus)==0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 flex  font-serif underline",children:[e.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),t("mainSafPaymentDetailPage.taxCalculationLabel.label")]}),e.jsx("div",{className:" block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto"}),e.jsxs("div",{className:"w-full h-auto bg-white  rounded shadow-lg text-sm p-4",children:[e.jsx("div",{className:"bg-blue-50 text-blue-700 font-semibold  my-1"}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:e.jsxs("h1",{className:"p-2",children:[" ",t("mainSafPaymentDetailPage.demandListLabel.label")," "]})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.generalTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.roadTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.educationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.waterTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.vSanitationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.treeTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[" ",t("mainSafPaymentDetailPage.professionalTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[" ",t("mainSafPaymentDetailPage.tax1Label.label"),e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.waterBenefitLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.waterBillLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.spWaterCessLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.drainCessLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.bigBuildingLabel.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.openPlotTax.label")," ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[t("mainSafPaymentDetailPage.totalTaxLabel.label")," "]})]})}),e.jsx("tbody",{children:(Z=(X=a==null?void 0:a.data)==null?void 0:X.demandList)==null?void 0:Z.map((s,o)=>e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:17,children:e.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:[s!=null&&s.is_arrear?"Arrear Upto":""," ",t("mainSafPaymentDetailPage.financialYearLabel.label")," : ",s==null?void 0:s.fyear]})})}),e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[(s==null?void 0:s.general_tax)||0,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.road_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.firefighting_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.education_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.water_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.light_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.sewarage_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.tree_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.professional_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.tax1)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.state_education_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.water_benefit)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.water_bill)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.sp_water_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.drain_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.major_building)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.open_ploat_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.total_tax})]})]}))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:e.jsx("h1",{className:"p-2",children:t("mainSafPaymentDetailPage.grandTotalTaxBifurcationLabel.label")})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.generalTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.roadTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.firefightingTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.educationTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.waterTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.vSanitationTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.sewageTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.treeTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.professionalTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.tax1Label.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.stateEducationTaxLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.waterBenefitLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.waterBillLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.spWaterCessLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.drainCessLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.bigBuildingLabel.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.openPlotTax.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.totalInterest.label")}),e.jsx("th",{className:"border border-collapse  p-2",children:t("mainSafPaymentDetailPage.totalTaxLabel.label")})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsx("td",{className:"border border-collapse p-2",children:(D=(J=a==null?void 0:a.data)==null?void 0:J.grandTaxes)==null?void 0:D.general_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ae=(ee=a==null?void 0:a.data)==null?void 0:ee.grandTaxes)==null?void 0:ae.road_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(te=(se=a==null?void 0:a.data)==null?void 0:se.grandTaxes)==null?void 0:te.firefighting_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(re=(le=a==null?void 0:a.data)==null?void 0:le.grandTaxes)==null?void 0:re.education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ce=(oe=a==null?void 0:a.data)==null?void 0:oe.grandTaxes)==null?void 0:ce.water_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ne=(de=a==null?void 0:a.data)==null?void 0:de.grandTaxes)==null?void 0:ne.cleanliness_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(me=(ie=a==null?void 0:a.data)==null?void 0:ie.grandTaxes)==null?void 0:me.sewarage_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(be=(xe=a==null?void 0:a.data)==null?void 0:xe.grandTaxes)==null?void 0:be.tree_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(he=(pe=a==null?void 0:a.data)==null?void 0:pe.grandTaxes)==null?void 0:he.professional_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(Ne=(fe=a==null?void 0:a.data)==null?void 0:fe.grandTaxes)==null?void 0:Ne.tax1}),e.jsx("td",{className:"border border-collapse p-2",children:(ye=(je=a==null?void 0:a.data)==null?void 0:je.grandTaxes)==null?void 0:ye.state_education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ge=(ue=a==null?void 0:a.data)==null?void 0:ue.grandTaxes)==null?void 0:ge.water_benefit}),e.jsx("td",{className:"border border-collapse p-2",children:(we=(Pe=a==null?void 0:a.data)==null?void 0:Pe.grandTaxes)==null?void 0:we.water_bill}),e.jsx("td",{className:"border border-collapse p-2",children:(Te=(Se=a==null?void 0:a.data)==null?void 0:Se.grandTaxes)==null?void 0:Te.sp_water_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(_e=(Le=a==null?void 0:a.data)==null?void 0:Le.grandTaxes)==null?void 0:_e.drain_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(Ee=(ke=a==null?void 0:a.data)==null?void 0:ke.grandTaxes)==null?void 0:Ee.major_building}),e.jsx("td",{className:"border border-collapse p-2",children:(Ce=(Ae=a==null?void 0:a.data)==null?void 0:Ae.grandTaxes)==null?void 0:Ce.open_ploat_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ve=(Fe=a==null?void 0:a.data)==null?void 0:Fe.grandTaxes)==null?void 0:ve.monthlyPenalty}),e.jsx("td",{className:"border border-collapse p-2 font-bold text-lg text-teal-600",children:(qe=(He=a==null?void 0:a.data)==null?void 0:He.grandTaxes)==null?void 0:qe.total_tax})]})})]})}),e.jsxs("div",{className:"bg-white py-4",children:[e.jsxs("div",{className:" gap-4",children:[e.jsxs("h1",{className:"flex font-semibold p-1",children:[e.jsxs("div",{className:"w-48 ",children:[" *  ",t("mainSafPaymentDetailPage.totalArrearAmountLabel.label"),"  -"]}),e.jsxs("div",{className:" text-red-600 font-bold text-md",children:["₹ ",(Ie=a==null?void 0:a.data)==null?void 0:Ie.arrear]})]}),e.jsxs("h1",{className:"flex font-semibold p-1",children:[e.jsxs("div",{className:"w-48",children:[" *  ",t("mainSafPaymentDetailPage.totalCurrentAmountLabel.label"),"  - "]}),e.jsxs("div",{className:"  text-teal-600 font-bold text-md",children:["₹",(Be=a==null?void 0:a.data)==null?void 0:Be.currentDemand]})]}),e.jsxs("h1",{className:"flex font-semibold p-1",children:[e.jsxs("div",{className:"w-48",children:["*  ",t("mainSafPaymentDetailPage.totalInterestAmountLabel.label")," -"]}),e.jsxs("div",{className:"  text-red-600 font-bold text-md",children:["₹",(Ue=a==null?void 0:a.data)==null?void 0:Ue.totalInterestPenalty]}),e.jsxs("small",{className:"whitespace-nowrap",children:["  ( ",t("mainSafPaymentDetailPage.interestOnArrearLabel.label"),"  ₹ ",($e=a==null?void 0:a.data)==null?void 0:$e.arrearInterest," + ",t("mainSafPaymentDetailPage.interestOnCurrentDemandLabel.label")," ₹ ",(Qe=a==null?void 0:a.data)==null?void 0:Qe.previousInterest,")"]})]})]}),e.jsxs("h1",{className:"flex font-semibold p-1",children:[e.jsxs("div",{className:"w-48",children:["* ",t("mainSafPaymentDetailPage.totalPayableAmountLabel.label"),"  -"]}),e.jsxs("div",{className:"  text-blue-600 font-bold text-lg",children:["₹ ",(Me=a==null?void 0:a.data)==null?void 0:Me.payableAmt]}),e.jsxs("span",{children:[" ",e.jsxs("small",{className:"whitespace-nowrap",children:[" ( ",t("mainSafPaymentDetailPage.arrearTotalTaxInterestLabel.label")," )"]})," "]})]}),e.jsxs("h1",{className:"flex font-semibold p-1",children:[e.jsx("div",{className:"w-48",children:"* Advance Amount  -"}),e.jsxs("div",{className:"  text-blue-600 font-bold text-lg",children:["₹ ",(Oe=a==null?void 0:a.data)==null?void 0:Oe.remainAdvance]}),e.jsx("small",{className:"whitespace-nowrap capitalize text-green-500 p-1",children:" ( This is an adjustable amount from total payment value. )"})]}),aa==1&&((Re=a==null?void 0:a.data)==null?void 0:Re.can_take_payment)===!0?e.jsxs("form",{onSubmit:l.handleSubmit,onChange:oa,children:[e.jsxs("select",{name:"paymentMode",onChange:l.handleChange,value:l.values.paymentMode,id:"paymentMode",className:"px-4 py-1.5 rounded border w-2/3",children:[e.jsxs("option",{value:"",children:[" ",t("mainSafPaymentDetailPage.selectLabel.label")]}),e.jsxs("option",{value:"CASH",children:[" ",t("mainSafPaymentDetailPage.cashLabel.label")]}),e.jsxs("option",{value:"CHEQUE",children:[" ",t("mainSafPaymentDetailPage.chequeLabel.label")]}),e.jsxs("option",{value:"DD",children:[" ",t("mainSafPaymentDetailPage.ddLabel.label")]}),e.jsx("option",{value:"NEFT",children:t("mainSafPaymentDetailPage.neftLabel.label")})]})," ",e.jsx("br",{}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.paymentMode&&l.errors.paymentMode?l.errors.paymentMode:null}),e.jsxs("div",{className:`${sa?"block":"hidden"} w-full grid grid-cols-1 md:grid-cols-4 mt-5`,children:[e.jsxs("div",{className:"form-group md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[i=="CHEQUE"&&"Cheque",i=="NEFT"&&"NEFT",i=="DD"&&"DD"," ",t("mainSafPaymentDetailPage.dateLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:" * "})]}),e.jsx("input",{name:"chequeDate",value:"chequeDate",...l.getFieldProps("chequeDate"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.chequeDate&&l.errors.chequeDate?l.errors.chequeDate:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("mainSafPaymentDetailPage.bankNameLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...l.getFieldProps("bankName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Bank Name."}),e.jsxs("span",{className:"text-red-600 absolute text-xs",children:[" ",l.touched.bankName&&l.errors.bankName?l.errors.bankName:null]})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("mainSafPaymentDetailPage.branchNameLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...l.getFieldProps("branchName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Branch Name."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.branchName&&l.errors.branchName?l.errors.branchName:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[i=="CHEQUE"&&"Cheque",i=="NEFT"&&"NEFT",i=="DD"&&"DD"," No.",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"  * "})]}),e.jsx("input",{...l.getFieldProps("chequeNo"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Cheque No."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.chequeNo&&l.errors.chequeNo?l.errors.chequeNo:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[t("mainSafPaymentDetailPage.paymentRemarkLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...l.getFieldProps("remarks"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Remarks.."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.remarks&&l.errors.remarks?l.errors.remarks:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[i=="CHEQUE"&&"Cheque",i=="NEFT"&&"NEFT",i=="DD"&&"DD",t("mainSafPaymentDetailPage.imageLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{name:"neftImage",onChange:l.handleChange,type:"file",className:"form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Remarks.."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.neftImage&&l.errors.neftImage?l.errors.neftImage:null})]})]}),e.jsxs("div",{className:"w-full flex  mt-5 mx-3 capitalize",children:[e.jsxs("div",{children:[e.jsx("input",{...l.getFieldProps("paymentType"),type:"radio",value:"isFullPayment",className:"px-2 ml-4",checked:l.values.paymentType=="isFullPayment"}),e.jsxs("label",{htmlFor:"",className:"mr-2",children:[t("mainSafPaymentDetailPage.payFullAmountLabel.label")," "]})]}),e.jsx("div",{children:((ze=a==null?void 0:a.data)==null?void 0:ze.arrear)==0?"":e.jsxs(e.Fragment,{children:[e.jsx("input",{...l.getFieldProps("paymentType"),type:"radio",value:"isArrearPayment",checked:l.values.paymentType=="isArrearPayment"}),e.jsxs("label",{htmlFor:"",children:[" ",t("mainSafPaymentDetailPage.payArrearOnlyLabel.label")," "]})," "]})}),e.jsxs("div",{children:[e.jsx("input",{...l.getFieldProps("paymentType"),type:"radio",className:"px-2 ml-4",value:"isPartPayment",checked:l.values.paymentType=="isPartPayment"}),e.jsx("label",{htmlFor:"",className:"mr-2",children:"Part Payment "})]}),e.jsxs("div",{className:`${l.values.paymentType=="isPartPayment"?"":"hidden"} max-h-8`,children:[e.jsx(Ha,{...l.getFieldProps("paidAmount"),id:"outlined-basic",label:"Amount",variant:"outlined",size:"small",sx:{fontWeight:"bold"},onBlur:ca}),e.jsx("p",{className:"text-red-600 absolute text-xs",children:l.touched.paidAmount&&l.errors.paidAmount?l.errors.paidAmount:null})]}),e.jsxs("button",{type:"submit",className:`${La}  max-h-10 uppercase mx-2`,children:[t("mainSafPaymentDetailPage.payLabel.label")," ₹",l.values.paymentType=="isFullPayment"&&parseInt((Ve=a==null?void 0:a.data)==null?void 0:Ve.payableAmt)-parseInt((We=a==null?void 0:a.data)==null?void 0:We.remainAdvance),l.values.paymentType=="isArrearPayment"&&parseInt((Ke=a==null?void 0:a.data)==null?void 0:Ke.arrearPayableAmt)-parseInt((Ye=a==null?void 0:a.data)==null?void 0:Ye.remainAdvance),l.values.paymentType=="isPartPayment"&&parseInt(l.values.paidAmount)]}),e.jsxs("button",{type:"button",className:`${_a} max-h-8 uppercase`,onClick:()=>p("/demand-reciept/"+m),children:[t("mainSafPaymentDetailPage.viewDemandBillLabel.label")," "]})]})]}):" "]})]})]})]})," "]}):""})]}),(b==null?void 0:b.status)==!1&&e.jsx("div",{className:"text-2xl font-bold text-red-500 mt-20",children:e.jsxs("span",{className:"border border-red-500 px-4 py-2 shadow-xl",children:[b==null?void 0:b.message," "]})})]})]}),e.jsx("div",{className:"w-full mt-20 h-60"})]}))}export{Ka as default};
