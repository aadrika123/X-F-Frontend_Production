import{J as La,u as ka,r as c,E as va,d as Aa,a as _a,j as a,B as Ha,S as Ba,X as Ea,G as Ca,bk as Ia,n as t,a7 as Fa,A as Ra,b as Oa,a4 as Wa}from"./index-0f9f451c.js";import{r as Va}from"./rupee-ba1d5977.js";import"./RazorpayPaymentScreen-6f86407f.js";import{T as ja}from"./TopTabs-f59f9194.js";import"./index.esm-25c2ba27.js";function Ja(za){var p,h,j,g,N,y,P,T,f,w,S,u,L,k,v,A,_,H,B,E,C,I,F,R,O,W,V,z,M,$,U,q,G,Y,J,K,X,Z,Q,D,aa,ea,sa,la,ra,ta,ca,ia,da,na,xa,oa,ba,ma,pa,ha;const{t:l}=La(),{id:i,location:ga,tabIndex:Na}=ka();console.log("param demand screen...",i);const{roles:d}=c.useContext(va),{propertyGenerateOrderId:Ma,api_getsafDemandById:ya}=Wa(),n=Aa();_a("SAF Demand Details"),c.useState(!1);const[e,Pa]=c.useState();c.useState("");const[o,Ta]=c.useState(""),[b,x]=c.useState(!1),[fa,m]=c.useState(!1),wa=["BACK OFFICE"],Sa=c.useMemo(()=>Array.isArray(d)&&d.some(s=>wa.includes(s)),[d]),ua=()=>{x(!0),m(!1),Ra.post(ya,{id:i},Oa()).then(function(s){console.log("view demand for my saf..",s==null?void 0:s.data),Ta(s==null?void 0:s.data),Pa(s==null?void 0:s.data),x(!1)}).catch(function(s){console.log("==2 details by id error...",s),m(!0),x(!1)})};return c.useEffect(()=>{ua()},[]),b?a.jsx(a.Fragment,{children:a.jsx(Ha,{})}):fa?a.jsx(Ba,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):(console.log("roles in pd => ",d),a.jsxs(a.Fragment,{children:[a.jsx(Ea,{position:"top-right",autoClose:2e3}),b&&a.jsx(Ca,{}),a.jsxs("div",{className:"w-full mx-auto md:px-6",children:[ga=="workflow"&&a.jsx("div",{className:"px-4",children:a.jsxs("button",{onClick:()=>n(`/saf-workflow/${Na}/${i}`),type:"button",className:"cypress_owner_add_update px-4 py-2 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:[a.jsx(Ia,{className:"inline text-lg"})," Back to Workflow"]})}),a.jsx("div",{className:"pt-10 hidden sm:block",children:a.jsx(ja,{payButton:(e==null?void 0:e.paymentStatus)!==1&&(e==null?void 0:e.can_pay)===!0,payableAmount:(p=e==null?void 0:e.amounts)==null?void 0:p.payableAmount,isPayable:(h=e==null?void 0:e.amounts)==null?void 0:h.isPayable,title:l("mainHoldingPage.demandDetailsButton.label"),type:"application",id:i,safNo:o,active:"demand"})}),a.jsx("div",{className:"pt-10 block sm:hidden",children:a.jsx(ja,{payButton:(e==null?void 0:e.paymentStatus)!==1&&(e==null?void 0:e.can_pay)===!0,payableAmount:(j=e==null?void 0:e.amounts)==null?void 0:j.payableAmount,title:"",type:"application",id:i,safNo:o,active:"demand"})}),Sa&&(e==null?void 0:e.paymentStatus)!==1&&(e==null?void 0:e.can_pay)===!0&&a.jsx("div",{className:"border-2 border-amber-500 text px-4 py-1 justify-center items-center font-semibold text-amber-500 shadow-xl w-max cursor-pointer hover:bg-amber-500 hover:text-white",onClick:()=>n(`/waiver-demand-screen/${i}/saf`),children:"Waive Off Demand"}),(e==null?void 0:e.paymentStatus)===1&&a.jsxs("div",{className:"flex gap-2",children:[a.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:l("mainHoldingPage.allDemandPaidButton.label")}),(e==null?void 0:e.tran_no)!=null&&a.jsx("span",{className:"bg-indigo-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl cursor-pointer hover:bg-indigo-500",onClick:()=>n(`/paymentReceipt/${encodeURIComponent(e==null?void 0:e.tran_no)}/saf`),children:l("mainHoldingPage.viewRecieptButton.label")})]}),a.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:a.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[a.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:t((N=(g=e==null?void 0:e.data)==null?void 0:g.basicDetails)==null?void 0:N.saf_no)}),a.jsxs("div",{className:"text-gray-500 text-xs",children:[l("mainHoldingPage.applicationNum.label"),l("mainHoldingPage.applicationSafNum.label")]})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:t((P=(y=e==null?void 0:e.data)==null?void 0:y.basicDetails)==null?void 0:P.zone)}),a.jsx("div",{className:"text-gray-500 text-xs",children:l("mainSafPaymentDetailPage.zone.label")})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:t((f=(T=e==null?void 0:e.data)==null?void 0:T.basicDetails)==null?void 0:f.ward_no)}),a.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.holdingWardNumber.label")})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-semibold text-md",children:t((S=(w=e==null?void 0:e.data)==null?void 0:w.basicDetails)==null?void 0:S.ownership_type)}),a.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.holdingOwnershipType.label")})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:t((L=(u=e==null?void 0:e.data)==null?void 0:u.basicDetails)==null?void 0:L.property_type)}),a.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.holdingPropertyType.label")})]})]}),a.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:t((v=(k=e==null?void 0:e.data)==null?void 0:k.basicDetails)==null?void 0:v.holding_type)}),a.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.holdingResidentialType.label")})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:t((_=(A=e==null?void 0:e.data)==null?void 0:A.basicDetails)==null?void 0:_.is_mobile_tower)}),a.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyMobileTower.label")})]}),a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"font-semibold text-md",children:[t((B=(H=e==null?void 0:e.data)==null?void 0:H.basicDetails)==null?void 0:B.is_hoarding_board)," "]}),a.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyHoardingBoard.label")})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-semibold text-md",children:t((C=(E=e==null?void 0:e.data)==null?void 0:E.basicDetails)==null?void 0:C.is_petrol_pump)}),a.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyPetrolPump.label")})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:t((F=(I=e==null?void 0:e.data)==null?void 0:I.basicDetails)==null?void 0:F.is_water_harvesting)}),a.jsx("div",{className:"text-gray-500 text-xs",children:l("mainHoldingPage.propertyRainwaterHarvest.label")})]})]})]})}),a.jsx("div",{className:"",children:a.jsx(a.Fragment,{children:a.jsxs("div",{className:"mt-10",children:[a.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs",children:[a.jsx("img",{src:Va,alt:"pin",className:"w-5 inline"})," ",l("mainHoldingPage.demandTaxDetailHeadingText.label")]}),(e==null?void 0:e.status)&&a.jsxs("div",{className:"",children:[a.jsxs("h1",{className:"px-1 flex  font-serif underline",children:[a.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),l("mainSafPaymentDetailPage.taxCalculationLabel.label")," "]}),a.jsx("div",{className:" block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto"}),a.jsxs("div",{className:"w-full h-auto bg-white  rounded shadow-lg text-sm p-4",children:[parseInt((O=(R=e==null?void 0:e.data)==null?void 0:R.grandTaxes)==null?void 0:O.openPloatTax)==0&&a.jsxs("div",{className:" border-gray-200 p-2",children:[a.jsx("div",{className:"bg-amber-100  text-gray-700 font-semibold ",children:a.jsxs("h1",{className:"p-2",children:[l("mainSafPaymentDetailPage.floorWiseTaxBifurcationLabel.label")," "]})}),a.jsx("div",{className:"w-full overflow-auto",children:a.jsxs("table",{className:"table-auto w-full ",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.builtUpAreaLabel.label")," (in Sqmt.) "]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.alvLabel.label"),"  "]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.maintenanceLabel.label"),"  "]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.valueAfterMaintenanceLabel.label")," "]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.agingAmountLabel.label")," "]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.taxValueLabel.label")," "]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.generalTaxLabel.label")," ",a.jsx("small",{className:"block",children:" (30%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.roadTaxLabel.label"),"  ",a.jsx("small",{className:"block",children:" (3%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",a.jsx("small",{className:"block",children:" (2%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.educationTaxLabel.label"),a.jsx("small",{className:"block",children:" (2%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.waterTaxLabel.label"),a.jsx("small",{className:"block",children:" (2%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.cleanlinessTaxLabel.label"),a.jsx("small",{className:"block",children:" (2%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.sewageTaxLabel.label"),a.jsx("small",{className:"block",children:" (2%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.treeTaxLabel.label"),a.jsx("small",{className:"block",children:" (1%)"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.professionalTaxLabel.label"),a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",a.jsx("small",{className:"block"})]})]})}),a.jsx("tbody",{children:(V=(W=e==null?void 0:e.data)==null?void 0:W.floorsTaxes)==null?void 0:V.map(s=>a.jsxs("tr",{className:"text-xs font-semibold text-center",children:[a.jsx("td",{className:"border border-collapse p-2",children:Fa(s==null?void 0:s.buildupAreaInSqmt)}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.alv}),a.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.maintantance10Perc,"(",s==null?void 0:s.maintancePerc,"%)"]}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.valueAfterMaintance}),a.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.agingAmt,"(",s==null?void 0:s.agingPerc,"%) "]}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.taxValue}),a.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.generalTax,"  "]}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.roadTax}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.firefightingTax}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.educationTax}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.waterTax}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.cleanlinessTax}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.sewerageTax}),a.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.treeTax}),a.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.professionalTax,"(",s==null?void 0:s.professionalTaxPerc,"%)"]}),a.jsxs("td",{className:"border border-collapse p-2",children:[s==null?void 0:s.stateEducationTax,"(",s==null?void 0:s.stateEducationTaxPerc,"%)"]})]}))})]})})]}),a.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[a.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:a.jsxs("h1",{className:"p-2",children:[l("mainSafPaymentDetailPage.financialYearWiseTaxBifurcationLabel.label")," "]})}),a.jsx("div",{className:"w-full overflow-auto",children:a.jsxs("table",{className:"table-auto w-full ",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.generalTaxLabel.label")," ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.roadTaxLabel.label")," ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.educationTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.waterTaxLabel.label"),"  ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.cleanlinessTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.treeTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.professionalTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.openPlotTax.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.totalTaxLabel.label")," "]})]})}),a.jsx("tbody",{children:(M=Object.entries((z=e==null?void 0:e.data)==null?void 0:z.fyearWiseTaxes))==null?void 0:M.map(([s,r])=>a.jsxs(a.Fragment,{children:[a.jsx("tr",{children:a.jsx("td",{colSpan:17,children:a.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:[l("mainSafPaymentDetailPage.financialYearLabel.label")," : ",s]})})}),a.jsxs("tr",{className:"font-semibold text-xs text-center",children:[a.jsxs("td",{className:"border border-collapse p-2",children:[r==null?void 0:r.generalTax,"  "]}),a.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.roadTax}),a.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.firefightingTax}),a.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.educationTax}),a.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.waterTax}),a.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.cleanlinessTax}),a.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.sewerageTax}),a.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.treeTax}),a.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.professionalTax}),a.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.stateEducationTax}),a.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.openPloatTax}),a.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.totalTax})]})]}))})]})})]}),a.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[a.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:a.jsxs("h1",{className:"p-2",children:[l("mainSafPaymentDetailPage.grandTotalTaxBifurcationLabel.label")," "]})}),a.jsx("div",{className:"w-full overflow-auto",children:a.jsxs("table",{className:"table-auto w-full ",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.generalTaxLabel.label"),"  ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.roadTaxLabel.label")," ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.firefightingTaxLabel.label")," ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.educationTaxLabel.label"),"  ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.waterTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.cleanlinessTaxLabel.label"),"  ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.sewageTaxLabel.label")," ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.treeTaxLabel.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.professionalTaxLabel.label"),"  ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.stateEducationTaxLabel.label")," ",a.jsx("small",{className:"block",children:" "})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.openPlotTax.label")," ",a.jsx("small",{className:"block"})]}),a.jsxs("th",{className:"border border-collapse  p-2",children:[l("mainSafPaymentDetailPage.totalTaxLabel.label")," "]})]})}),a.jsx("tbody",{children:a.jsxs("tr",{className:"font-semibold text-xs text-center",children:[a.jsxs("td",{className:"border border-collapse p-2",children:[(U=($=e==null?void 0:e.data)==null?void 0:$.grandTaxes)==null?void 0:U.generalTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(G=(q=e==null?void 0:e.data)==null?void 0:q.grandTaxes)==null?void 0:G.roadTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(Y=e==null?void 0:e.data)==null?void 0:Y.grandTaxes.firefightingTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(K=(J=e==null?void 0:e.data)==null?void 0:J.grandTaxes)==null?void 0:K.educationTax,"  "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(Z=(X=e==null?void 0:e.data)==null?void 0:X.grandTaxes)==null?void 0:Z.waterTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(D=(Q=e==null?void 0:e.data)==null?void 0:Q.grandTaxes)==null?void 0:D.cleanlinessTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(ea=(aa=e==null?void 0:e.data)==null?void 0:aa.grandTaxes)==null?void 0:ea.sewerageTax,"  "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(la=(sa=e==null?void 0:e.data)==null?void 0:sa.grandTaxes)==null?void 0:la.treeTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(ta=(ra=e==null?void 0:e.data)==null?void 0:ra.grandTaxes)==null?void 0:ta.professionalTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(ia=(ca=e==null?void 0:e.data)==null?void 0:ca.grandTaxes)==null?void 0:ia.stateEducationTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(na=(da=e==null?void 0:e.data)==null?void 0:da.grandTaxes)==null?void 0:na.openPloatTax," "]}),a.jsxs("td",{className:"border border-collapse p-2",children:[(oa=(xa=e==null?void 0:e.data)==null?void 0:xa.grandTaxes)==null?void 0:oa.totalTax," "]})]})})]})}),a.jsxs("div",{className:"bg-white py-4",children:[a.jsxs("h1",{className:"font-semibold p-1",children:["* ",l("mainSafPaymentDetailPage.grandTotalLabel.label")," - ",(ma=(ba=e==null?void 0:e.data)==null?void 0:ba.grandTaxes)==null?void 0:ma.totalTax," "]}),a.jsxs("h1",{className:"font-semibold p-1",children:["* ",l("mainSafPaymentDetailPage.rebateAmountLabel.label")," - ",(pa=e==null?void 0:e.data)==null?void 0:pa.rebateAmt," "]}),a.jsxs("h1",{className:"font-semibold p-1",children:["* ",l("mainSafPaymentDetailPage.totalPayableAmountLabel.label"),"  - ",(ha=e==null?void 0:e.data)==null?void 0:ha.payableAmt," "]})]})]})]})]})]})})})]}),a.jsx("div",{className:"w-full h-40"})]}))}export{Ja as default};
