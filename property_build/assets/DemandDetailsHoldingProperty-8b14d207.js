import{u as ts,bv as ls,r as l,c as os,a as cs,k as ds,l as ns,m as b,a_ as is,cs as xs,o as ms,j as e,B as bs,S as ps,Q as hs,T as Ns,n as c,ct as js,cu as fs,s as us,A as u,N as g,bb as gs,Y as $e}from"./index-bdacdace.js";import"./RazorpayPaymentScreen-0019de99.js";import{T as ys}from"./TopTabs-2d40e6c9.js";function Ss(ws){var _,k,E,C,P,S,F,H,q,A,B,I,U,Q,O,R,L,$,v,M,W,V,z,G,Y,K,Z,J,X,D,ee,se,re,ae,te,le,oe,ce,de,ne,ie,xe,me,be,pe,he,Ne,je,fe,ue,ge,ye,we,Te,_e,ke,Ee,Ce,Pe,Se,Fe,He,qe,Ae,Be,Ie,Ue,Qe,Oe,Re,Le;const{t:o}=ts(),{id:x}=ls();console.log("param demand screen holding...",x);const{roles:f}=l.useContext(os),{propertyGenerateHoldingOrderId:Ts,api_getHoldingDemandById:ve,onlinePayment:_s,zeroDemandPayment:Me}=gs(),h=cs();l.useState(!1);const[s,We]=l.useState(),[m,Ve]=l.useState();l.useState("");const[y,d]=l.useState(!1);l.useState();const[ze,N]=l.useState(!1),[Ge,ks]=l.useState(1),[Ye,w]=l.useState(!1),[p,T]=l.useState(!1),[n,j]=l.useState("CASH");ds("Holding Demand Details");const Ke=["BACK OFFICE"],Ze=l.useMemo(()=>Array.isArray(f)&&f.some(r=>Ke.includes(r)),[f]),Je=ns({paymentMode:b().required("Please select the Payment mode "),bankName:b().when("paymentMode",{is:r=>r=="CHEQUE"||r=="NEFT"||r=="DD",then:r=>r.required("This field is required")}),chequeNo:b().when("paymentMode",{is:r=>r=="CHEQUE"||r=="NEFT"||r=="DD",then:r=>r.required("This field is required")}),chequeDate:is().when("paymentMode",{is:r=>r=="CHEQUE"||r=="NEFT"||r=="DD",then:r=>r.required("This field is required")}).max(xs(),"Please select valid date"),branchName:b().when("paymentMode",{is:r=>r=="CHEQUE"||r=="NEFT"||r=="DD",then:r=>r.required("This field  is required")}),remarks:b().when("paymentMode",{is:r=>r=="CHEQUE"||r=="NEFT"||r=="DD",then:r=>r.required("This field is required")}),neftImage:b().when("paymentMode",{is:r=>r=="CHEQUE"||r=="NEFT"||r=="DD",then:r=>r.required("This field is required")})}),a=ms({initialValues:{chequeDate:"",bankName:"",branchName:"",chequeNo:"",paymentMode:"",remarks:"",neftImage:"",isArrear:p},enableReinitialize:!0,onSubmit:r=>{console.log("values at submit payment",r),as(r)},validationSchema:Je}),Xe=r=>{let i=r.target.name,t=r.target.value;i=="paymentMode"&&(t=="CASH"||t=="ONLINE"?w(!1):w(!0)),i=="paymentMode"&&(t=="CHEQUE"&&j("CHEQUE"),t=="NEFT"&&j("NEFT"),t=="DD"&&j("DD"),t=="CASH"&&j("DD")),i=="neftImage"&&De(r.target.files[0]),i=="isArrear"&&(t=="true"?T(!0):T(!1)),i=="chequeNo"&&a.setFieldValue("chequeNo",us(t,a.values.chequeNo,15))},De=r=>{console.log("files",r),a.setFieldValue("neftImage",r)},es=()=>{d(!0),N(!1),u.post(`${ve}`,{propId:x},g()).then(function(r){console.log("view deamnd details at property in egov...",r==null?void 0:r.data),We(r==null?void 0:r.data),Ve(r==null?void 0:r.data),d(!1)}).catch(function(r){console.log("at error part.",r),N(!0),d(!1)})};l.useEffect(()=>{es()},[]);const ss=(r,i)=>{d(!0),u.post(`${Me}`,{id:r,...i},g()).then(function(t){console.log("offline payment...",t==null?void 0:t.data),t.data.status?($e.success("Payment done Successfully"),h(`/paymentReceipt/${t.data.data.TransactionNo}/holding`)):$e.warn("Payment Failed"),d(!1)}).catch(function(t){console.log("at error part.",t),N(!0),d(!1)})},rs=()=>{d(!0),u.post("http://203.129.217.244:8010/api/payment/v1/get-referal-url",{propId:x},g()).then(function(r){console.log("response.",r.data),r.data.status&&window.open(r.data.data),d(!1)}).catch(function(r){console.log("at error part.",r),N(!0),d(!1)})};console.log("isArrear",p);const as=r=>{(r==null?void 0:r.paymentMode)!="ONLINE"?ss(x,r):rs()};return y?e.jsx(e.Fragment,{children:e.jsx(bs,{})}):ze?e.jsx(ps,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):(console.log("holding demand status",(k=(_=s==null?void 0:s.data)==null?void 0:_.basicDetails)==null?void 0:k.holding_no),e.jsxs(e.Fragment,{children:[e.jsx(hs,{position:"top-right",autoClose:2e3}),y&&e.jsx(Ns,{}),e.jsxs("div",{className:"w-full mx-auto px-6",children:[e.jsx("div",{className:"pt-10",children:e.jsx(ys,{title:`${o("mainHoldingPage.demandDetailsHeadingText.label")}`,type:"holding",id:x,safNo:"",active:"demand"})}),Ze&&(s==null?void 0:s.paymentStatus)!==1&&(s==null?void 0:s.can_pay)===!0&&e.jsx("div",{className:"border-2 border-amber-5 00 text px-4 py-1 justify-center items-center font-semibold text-amber-500 shadow-xl w-max cursor-pointer hover:bg-amber-500 hover:text-white",onClick:()=>h(`/waiver-demand-screen/${x}/holding`),children:"Waive Off Demand"}),(s==null?void 0:s.paymentStatus)===1&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:o("mainHoldingPage.allDemandPaidButton.label")}),(s==null?void 0:s.tran_no)!=null&&e.jsx("span",{className:"bg-indigo-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl cursor-pointer hover:bg-indigo-500",onClick:()=>h(`/paymentReceipt/${encodeURIComponent(s==null?void 0:s.tran_no)}/saf`),children:o("mainHoldingPage.viewRecieptButton.label")})]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((C=(E=s==null?void 0:s.data)==null?void 0:E.basicDetails)==null?void 0:C.applicant_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Owner Name."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((S=(P=s==null?void 0:s.data)==null?void 0:P.basicDetails)==null?void 0:S.prop_address)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Address."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((H=(F=s==null?void 0:s.data)==null?void 0:F.basicDetails)==null?void 0:H.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:o("mainHoldingPage.propertyHoldingNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((A=(q=s==null?void 0:s.data)==null?void 0:q.basicDetails)==null?void 0:A.zone_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:o("mainHoldingPage.propertyZone.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((I=(B=s==null?void 0:s.data)==null?void 0:B.basicDetails)==null?void 0:I.ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:o("mainHoldingPage.propertyWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:c((Q=(U=s==null?void 0:s.data)==null?void 0:U.basicDetails)==null?void 0:Q.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:o("mainHoldingPage.propertyOwnershipType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((R=(O=s==null?void 0:s.data)==null?void 0:O.basicDetails)==null?void 0:R.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:o("mainHoldingPage.propertyType.label")})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c(($=(L=s==null?void 0:s.data)==null?void 0:L.basicDetails)==null?void 0:$.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:o("mainHoldingPage.propertyHoldingType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((M=(v=s==null?void 0:s.data)==null?void 0:v.basicDetails)==null?void 0:M.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:o("mainHoldingPage.propertyMobileTower.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[c((V=(W=s==null?void 0:s.data)==null?void 0:W.basicDetails)==null?void 0:V.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:o("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:c((G=(z=s==null?void 0:s.data)==null?void 0:z.basicDetails)==null?void 0:G.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:o("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((K=(Y=s==null?void 0:s.data)==null?void 0:Y.basicDetails)==null?void 0:K.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:o("mainHoldingPage.propertyRainwaterHarvest.label")})]})]})]})}),e.jsxs("div",{className:"flex flex-row flex-wrap justify-center w-full",children:[(s==null?void 0:s.status)&&e.jsxs("div",{class:"rounded-lg pt-4 w-full",children:[e.jsx("div",{className:"text-center mt-10",children:((Z=s==null?void 0:s.data)==null?void 0:Z.paymentStatus)==1?e.jsx(e.Fragment,{children:e.jsxs("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl ",children:[" ","Payment Already Done"]})}):e.jsx(e.Fragment,{})}),e.jsx("div",{className:"",children:((J=s==null?void 0:s.data)==null?void 0:J.paymentStatus)==0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 flex  font-serif underline",children:[e.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),"Tax Calculation Paradigm"]}),e.jsx("div",{className:" block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto"}),e.jsxs("div",{className:"w-full h-auto bg-white  rounded shadow-lg text-sm p-4",children:[e.jsx("div",{className:"bg-blue-50 text-blue-700 font-semibold  my-1"}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:e.jsx("h1",{className:"p-2",children:"Demand List "})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:["General Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Road Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Firefighting Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Education Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Water Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Clealiness Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Sewage Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Tree Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Professional Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[" Tax 1",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["State Education Tax",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Water Benefit ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Water Bill",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Sp Water Cess",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Drain Cess",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Light Cess",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Big Building",e.jsx("small",{className:"block"})]}),e.jsx("th",{className:"border border-collapse  p-2",children:"Total Tax  "})]})}),e.jsx("tbody",{children:(D=(X=s==null?void 0:s.data)==null?void 0:X.demandList)==null?void 0:D.map((r,i)=>e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:17,children:e.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:[r!=null&&r.is_arrear?"Arrear Upto":""," Financial Year : ",r==null?void 0:r.fyear]})})}),e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[(r==null?void 0:r.general_tax)||0,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.road_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.firefighting_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.education_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.water_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.cleanliness_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.sewarage_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.tree_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.professional_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.tax1)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.state_education_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.water_benefit)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.water_bill)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.sp_water_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.drain_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.light_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(r==null?void 0:r.major_building)||0}),e.jsx("td",{className:"border border-collapse p-2",children:r==null?void 0:r.total_tax})]})]}))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:e.jsx("h1",{className:"p-2",children:"Grand total Tax Bifurcation"})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsx("th",{className:"border border-collapse  p-2",children:"General Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Road Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Firefighting Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Education Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Water Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Clealiness Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Sewage Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Tree Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Professional Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Tax 1"}),e.jsx("th",{className:"border border-collapse  p-2",children:"State Education Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Water Benefit"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Water Bill"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Sp Water Cess"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Drain Cess"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Light Cess"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Big Building"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Total Tax"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsx("td",{className:"border border-collapse p-2",children:(se=(ee=s==null?void 0:s.data)==null?void 0:ee.grandTaxes)==null?void 0:se.general_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ae=(re=s==null?void 0:s.data)==null?void 0:re.grandTaxes)==null?void 0:ae.road_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(le=(te=s==null?void 0:s.data)==null?void 0:te.grandTaxes)==null?void 0:le.firefighting_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ce=(oe=s==null?void 0:s.data)==null?void 0:oe.grandTaxes)==null?void 0:ce.education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ne=(de=s==null?void 0:s.data)==null?void 0:de.grandTaxes)==null?void 0:ne.water_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(xe=(ie=s==null?void 0:s.data)==null?void 0:ie.grandTaxes)==null?void 0:xe.cleanliness_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(be=(me=s==null?void 0:s.data)==null?void 0:me.grandTaxes)==null?void 0:be.sewarage_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(he=(pe=s==null?void 0:s.data)==null?void 0:pe.grandTaxes)==null?void 0:he.tree_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(je=(Ne=s==null?void 0:s.data)==null?void 0:Ne.grandTaxes)==null?void 0:je.professional_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ue=(fe=s==null?void 0:s.data)==null?void 0:fe.grandTaxes)==null?void 0:ue.tax1}),e.jsx("td",{className:"border border-collapse p-2",children:(ye=(ge=s==null?void 0:s.data)==null?void 0:ge.grandTaxes)==null?void 0:ye.state_education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(Te=(we=s==null?void 0:s.data)==null?void 0:we.grandTaxes)==null?void 0:Te.water_benefit}),e.jsx("td",{className:"border border-collapse p-2",children:(ke=(_e=s==null?void 0:s.data)==null?void 0:_e.grandTaxes)==null?void 0:ke.water_bill}),e.jsx("td",{className:"border border-collapse p-2",children:(Ce=(Ee=s==null?void 0:s.data)==null?void 0:Ee.grandTaxes)==null?void 0:Ce.sp_water_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(Se=(Pe=s==null?void 0:s.data)==null?void 0:Pe.grandTaxes)==null?void 0:Se.drain_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(He=(Fe=s==null?void 0:s.data)==null?void 0:Fe.grandTaxes)==null?void 0:He.light_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(Ae=(qe=s==null?void 0:s.data)==null?void 0:qe.grandTaxes)==null?void 0:Ae.major_building}),e.jsx("td",{className:"border border-collapse p-2 font-bold text-lg text-teal-600",children:(Ie=(Be=s==null?void 0:s.data)==null?void 0:Be.grandTaxes)==null?void 0:Ie.total_tax})]})})]})}),e.jsxs("div",{className:"bg-white py-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("h1",{className:"font-semibold p-1",children:["* Total Arrear Amount -"," ",e.jsxs("span",{className:" text-red-600 font-bold text-lg",children:["₹ ",(Ue=s==null?void 0:s.data)==null?void 0:Ue.arrear," "]})]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* Total Current Amount -"," ",e.jsxs("span",{className:"  text-teal-600 font-bold text-lg",children:["₹"," ",(Qe=s==null?void 0:s.data)==null?void 0:Qe.currentDemand," "]})]})]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* Total Payable Amount -"," ",e.jsxs("span",{className:"  text-blue-600 font-bold text-lg",children:["₹ ",(Oe=s==null?void 0:s.data)==null?void 0:Oe.payableAmt," "]})]}),Ge==1?e.jsxs("form",{onSubmit:a.handleSubmit,onChange:Xe,children:[e.jsxs("select",{name:"paymentMode",onChange:a.handleChange,value:a.values.paymentMode,id:"paymentMode",className:"px-4 py-1.5 rounded border w-2/3",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"ONLINE",children:"Online"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"NEFT",children:"NEFT"})]})," ",e.jsx("br",{}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.paymentMode&&a.errors.paymentMode?a.errors.paymentMode:null}),e.jsxs("div",{className:`${Ye?"block":"hidden"} w-full grid grid-cols-1 md:grid-cols-4 mt-5`,children:[e.jsxs("div",{className:"form-group md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[n=="CHEQUE"&&"Cheque",n=="NEFT"&&"NEFT",n=="DD"&&"DD","  Date",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:" * "})]}),e.jsx("input",{name:"chequeDate",value:"chequeDate",...a.getFieldProps("chequeDate"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.chequeDate&&a.errors.chequeDate?a.errors.chequeDate:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Bank Name",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...a.getFieldProps("bankName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Bank Name."}),e.jsxs("span",{className:"text-red-600 absolute text-xs",children:[" ",a.touched.bankName&&a.errors.bankName?a.errors.bankName:null]})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Branch Name",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...a.getFieldProps("branchName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Branch Name."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.branchName&&a.errors.branchName?a.errors.branchName:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[n=="CHEQUE"&&"Cheque",n=="NEFT"&&"NEFT",n=="DD"&&"DD"," No.",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"  * "})]}),e.jsx("input",{...a.getFieldProps("chequeNo"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Cheque No."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.chequeNo&&a.errors.chequeNo?a.errors.chequeNo:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Payment Remark",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...a.getFieldProps("remarks"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Remarks.."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.remarks&&a.errors.remarks?a.errors.remarks:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[n=="CHEQUE"&&"Cheque",n=="NEFT"&&"NEFT",n=="DD"&&"DD"," Image",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{name:"neftImage",onChange:a.handleChange,type:"file",className:"form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Remarks.."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.neftImage&&a.errors.neftImage?a.errors.neftImage:null})]})]}),e.jsxs("div",{className:"w-full   mt-5 mx-3 capitalize",children:[e.jsx("input",{...a.getFieldProps("isArrear"),type:"radio",value:!0,checked:p}),e.jsx("label",{htmlFor:"",children:" Pay Arrear Only"}),e.jsx("input",{...a.getFieldProps("isArrear"),type:"radio",value:!1,className:"px-2 ml-4",checked:!p}),e.jsx("label",{htmlFor:"",children:" Pay Full Amount"}),e.jsxs("button",{type:"submit",className:`${js} uppercase mx-2`,children:["Pay ₹",p==!0?parseInt((Re=s==null?void 0:s.data)==null?void 0:Re.arrear):parseInt((Le=s==null?void 0:s.data)==null?void 0:Le.payableAmt)]}),e.jsx("button",{type:"button",className:`${fs} uppercase`,onClick:()=>h("/demand-reciept/"+x),children:"View Demand Bill"})]})]}):""]})]})]})]})," "]}):""})]}),(m==null?void 0:m.status)==!1&&e.jsx("div",{className:"text-2xl font-bold text-red-500 mt-20",children:e.jsxs("span",{className:"border border-red-500 px-4 py-2 shadow-xl",children:[m==null?void 0:m.message," "]})})]})]}),e.jsx("div",{className:"w-full mt-20 h-60"})]}))}export{Ss as default};
