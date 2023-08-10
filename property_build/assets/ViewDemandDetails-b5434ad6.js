import{u as Z,bw as J,r as x,c as X,a as D,k as ee,j as e,B as le,S as te,T as se,U as ae,n as a,bg as re,bh as r,bi as xe,i as ie,f as O,bj as ne,A as ce,O as oe,bc as de}from"./index-c815f2b8.js";import"./RazorpayPaymentScreen-d213c373.js";import{T as W}from"./TopTabs-b3774da2.js";function je(o){var m,y,f,j,N,u,v,P,H,w,_,T,A,S,z,R,C,B,F,k,E,$;const{t:s}=Z(),{id:n,location:pe,tabIndex:be}=J();console.log("param demand screen...",n);const{roles:c}=x.useContext(X),{propertyGenerateOrderId:ge,api_getsafDemandById:Q}=de(),d=D();ee("SAF Demand Details");const[U,he]=x.useState(!1),[t,V]=x.useState();x.useState("");const[b,q]=x.useState(""),[g,p]=x.useState(!1),[M,h]=x.useState(!1),G=["BACK OFFICE"],K=x.useMemo(()=>Array.isArray(c)&&c.some(l=>G.includes(l)),[c]),Y=()=>{p(!0),h(!1),ce.post(Q,{id:n},oe()).then(function(l){var i,I,L;console.log("view demand for my saf..",(i=l==null?void 0:l.data)==null?void 0:i.data),q((I=l==null?void 0:l.data)==null?void 0:I.safNo),V((L=l==null?void 0:l.data)==null?void 0:L.data),p(!1)}).catch(function(l){console.log("==2 details by id error...",l),h(!0),p(!1)})};return x.useEffect(()=>{Y()},[]),g?e.jsx(e.Fragment,{children:e.jsx(le,{})}):M?e.jsx(te,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):(console.log("roles in pd => ",c),e.jsxs(e.Fragment,{children:[e.jsx(se,{position:"top-right",autoClose:2e3}),g&&e.jsx(ae,{}),e.jsxs("div",{className:"w-full mx-auto md:px-6",children:[e.jsx("div",{className:"pt-10 hidden sm:block",children:e.jsx(W,{payButton:(t==null?void 0:t.paymentStatus)!==1&&(t==null?void 0:t.can_pay)===!0,payableAmount:(m=t==null?void 0:t.amounts)==null?void 0:m.payableAmount,isPayable:(y=t==null?void 0:t.amounts)==null?void 0:y.isPayable,title:s("mainHoldingPage.demandDetailsButton.label"),type:"application",id:n,safNo:b,active:"demand"})}),e.jsx("div",{className:"pt-10 block sm:hidden",children:e.jsx(W,{payButton:(t==null?void 0:t.paymentStatus)!==1&&(t==null?void 0:t.can_pay)===!0,payableAmount:(f=t==null?void 0:t.amounts)==null?void 0:f.payableAmount,title:"",type:"application",id:n,safNo:b,active:"demand"})}),K&&(t==null?void 0:t.paymentStatus)!==1&&(t==null?void 0:t.can_pay)===!0&&e.jsx("div",{className:"border-2 border-amber-500 text px-4 py-1 justify-center items-center font-semibold text-amber-500 shadow-xl w-max cursor-pointer hover:bg-amber-500 hover:text-white",onClick:()=>d(`/waiver-demand-screen/${n}/saf`),children:"Waive Off Demand"}),(t==null?void 0:t.paymentStatus)===1&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:s("mainHoldingPage.allDemandPaidButton.label")}),(t==null?void 0:t.tran_no)!=null&&e.jsx("span",{className:"bg-indigo-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl cursor-pointer hover:bg-indigo-500",onClick:()=>d(`/paymentReceipt/${encodeURIComponent(t==null?void 0:t.tran_no)}/saf`),children:s("mainHoldingPage.viewRecieptButton.label")})]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((j=t==null?void 0:t.basicDetails)==null?void 0:j.saf_no)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[s("mainHoldingPage.applicationNum.label"),s("mainHoldingPage.applicationSafNum.label")]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((N=t==null?void 0:t.basicDetails)==null?void 0:N.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:s("mainHoldingPage.holdingWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:a((u=t==null?void 0:t.basicDetails)==null?void 0:u.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:s("mainHoldingPage.holdingNewWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:a((v=t==null?void 0:t.basicDetails)==null?void 0:v.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:s("mainHoldingPage.holdingOwnershipType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((P=t==null?void 0:t.basicDetails)==null?void 0:P.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:s("mainHoldingPage.holdingPropertyType.label")})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((H=t==null?void 0:t.basicDetails)==null?void 0:H.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:s("mainHoldingPage.holdingResidentialType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((w=t==null?void 0:t.basicDetails)==null?void 0:w.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:s("mainHoldingPage.propertyMobileTower.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[a((_=t==null?void 0:t.basicDetails)==null?void 0:_.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:s("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:a((T=t==null?void 0:t.basicDetails)==null?void 0:T.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:s("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((A=t==null?void 0:t.basicDetails)==null?void 0:A.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:s("mainHoldingPage.propertyRainwaterHarvest.label")})]})]})]})}),e.jsx("div",{className:"",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-10",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs",children:[e.jsx("img",{src:re,alt:"pin",className:"w-5 inline"})," ",s("mainHoldingPage.demandTaxDetailHeadingText.label")]}),e.jsxs("div",{className:"flex font-mono text-xs py-2 px-1 text-gray-900",children:[e.jsx("div",{className:"flex-initial px-2 font-bold",children:s("mainHoldingPage.totalPayableAmount.label")}),e.jsx("div",{className:"flex-initial px-2",children:"= "}),e.jsxs("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:[" ","( ",s("mainHoldingPage.taxAmount.label")]}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:s("mainHoldingPage.lateAssessmentPenalty.label")}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:s("mainHoldingPage.penalty.label")}),e.jsx("div",{className:"flex-initial px-2"}),e.jsxs("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:[" ",") - ( ",s("mainHoldingPage.propertyRebate.label")]}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsxs("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:[s("mainHoldingPage.fspecialRebate.label"),")"]})]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.taxArv.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertyTaxEffectFrom.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.proprtyHoldingTax.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertyWaterTax.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertyConservancyTax.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertyEducationCess.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertyHealthCess.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertyRwhPenalty.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertyQuartelyTax.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertyRuleset.label")})]})}),e.jsx("tbody",{className:"text-sm",children:(S=t==null?void 0:t.taxDetails)==null?void 0:S.map((l,i)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(l==null?void 0:l.arv)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[a(l==null?void 0:l.qtr),"/",a(l==null?void 0:l.fyear)]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(l==null?void 0:l.holding_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(l==null?void 0:l.water_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(l==null?void 0:l.latrine_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(l==null?void 0:l.education_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(l==null?void 0:l.health_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(l==null?void 0:l.additional_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(l==null?void 0:l.amount)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left  ",children:[" ",e.jsx("span",{className:`${(l==null?void 0:l.ruleSet)==="RuleSet3"?"bg-green-100":"bg-red-100"} px-2 py-1 rounded-lg`,children:(l==null?void 0:l.ruleSet)==="RuleSet3"?"Current":"Old"})," "]})]}))})]})]}),((R=(z=t==null?void 0:t.amounts)==null?void 0:z.rebates)==null?void 0:R.length)>1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-10 text-md font-semibold",children:s("mainHoldingPage.demandTaxRebateHeadingText.label")}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("mainHoldingPage.propertyRebateType.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("mainHoldingPage.propertyRebatePercent.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("mainHoldingPage.propertyRebateAmount.label")})]})}),e.jsx("tbody",{className:"text-sm",children:(B=(C=t==null?void 0:t.amounts)==null?void 0:C.rebates)==null?void 0:B.map((l,i)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(l==null?void 0:l.keyString)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[r(l==null?void 0:l.rebatePerc),"%"]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r(l==null?void 0:l.rebateAmount)})]}))})]})]}),e.jsxs("div",{className:"mt-10",children:[(t==null?void 0:t.details)&&e.jsxs("div",{className:"w-[100vw] ",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-md mt-10",children:[e.jsx("img",{src:xe,alt:"pin",className:"w-5 inline"}),s("mainHoldingPage.demandTaxDescripHeadingText.label")]}),e.jsxs("div",{className:"flex font-mono text-xs py-2 px-1 text-gray-900",children:[e.jsx("div",{className:"flex-initial px-2 font-bold",children:s("mainHoldingPage.annualRentalValueArv.label")}),e.jsx("div",{className:"flex-initial px-2",children:"="}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:s("mainHoldingPage.builtUpArea.label")}),e.jsx("div",{className:"flex-initial px-2",children:"x"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:s("mainHoldingPage.rentalRate.label")})]}),e.jsxs("table",{className:" leading-normal mt-2",children:[e.jsx("thead",{className:`font-bold text-left text-sm ${(t==null?void 0:t.paymentStatus)===1?"bg-red-100":"bg-white"} text-gray-600`,children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.taxArv.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.taxQuarter.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.taxQuarterYear.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.proprtyHoldingTax.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertyWaterTax.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertyConservancyTax.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertyEducationCess.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertyHealthCess.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertyAdditionalTax.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertyQuartelyTax.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("mainHoldingPage.propertyAdjutedAmount.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("mainHoldingPage.propertyTaxBalance.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertTaxDueDate.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:s("mainHoldingPage.propertyTaxPenalty.label")})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(F=t.details)==null?void 0:F.map((l,i)=>e.jsxs("tr",{className:`${(t==null?void 0:t.paymentStatus)===1?"bg-red-100":"bg-white"} shadow-lg border-b border-gray-200`,children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(l==null?void 0:l.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(l==null?void 0:l.qtr)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(l==null?void 0:l.fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(l==null?void 0:l.holding_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(l==null?void 0:l.water_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(l==null?void 0:l.latrine_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(l==null?void 0:l.education_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(l==null?void 0:l.health_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(l==null?void 0:l.additional_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(l==null?void 0:l.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(l==null?void 0:l.adjust_amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(l==null?void 0:l.balance)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:ie(l==null?void 0:l.due_date)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[a(l==null?void 0:l.onePercPenaltyTax),"(",a(l==null?void 0:l.onePercPenalty),"%)"]})]}))})})]})]}),(t==null?void 0:t.paymentStatus)!==1&&(t==null?void 0:t.can_pay)===!0&&e.jsx("div",{className:"mt-10 flex",children:!U&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-left flex-1",children:e.jsxs("div",{children:[e.jsxs("span",{className:"font-semibold text-gray-600 text-xl",children:[s("mainHoldingPage.totalPayableAmount.label")," "]}),e.jsx("span",{className:"text-3xl font-bold ml-20",children:O((k=t==null?void 0:t.amounts)==null?void 0:k.payableAmount)})]})}),e.jsx("div",{className:"text-right flex-1",children:e.jsxs("button",{onClick:()=>d(`/property-payment/${n}/${(o==null?void 0:o.type)=="holding"?"holding":"saf"}`),type:"button",className:"ml-4 font-bold px-6 py-1 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out shadow-xl border border-white",children:[(E=t==null?void 0:t.amounts)!=null&&E.isPayable?"Pay":"Submit"," ",O(($=t==null?void 0:t.amounts)==null?void 0:$.payableAmount)," ",e.jsx("span",{children:e.jsx(ne,{className:"inline font-bold text-xl"})})," "]})})]})}),e.jsx("div",{className:"h-20 w-full"})]})]})})]}),e.jsx("div",{className:"w-full h-40"})]}))}export{je as default};
