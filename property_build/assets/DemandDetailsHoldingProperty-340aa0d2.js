import{u as Xe,bv as De,r as l,c as es,a as ss,k as rs,l as as,m,a_ as ts,cr as ls,o as os,j as e,B as cs,S as ds,Q as ns,T as is,n as c,cs as xs,ct as ms,s as bs,A as j,N as f,bb as ps,Y as Ie}from"./index-be58982e.js";import"./RazorpayPaymentScreen-71ca686f.js";import{T as hs}from"./TopTabs-b0b91698.js";function Ts(Ns){var w,T,k,_,C,P,E,S,q,F,H,A,B,I,R,L,O,$,U,W,Q,M,V,v,z,G,Y,K,Z,J,X,D,ee,se,re,ae,te,le,oe,ce,de,ne,ie,xe,me,be,pe,he,Ne,je,fe,ue,ge,ye,we,Te,ke,_e,Ce,Pe,Ee,Se,qe,Fe,He,Ae,Be;const{t}=Xe(),{id:n}=De();console.log("param demand screen holding...",n);const{roles:N}=l.useContext(es),{propertyGenerateHoldingOrderId:js,api_getHoldingDemandById:Re,onlinePayment:fs,zeroDemandPayment:Le}=ps(),p=ss();l.useState(!1);const[r,Oe]=l.useState(),[x,$e]=l.useState();l.useState("");const[u,d]=l.useState(!1);l.useState();const[Ue,h]=l.useState(!1),[We,us]=l.useState(1),[Qe,g]=l.useState(!1),[b,y]=l.useState(!1);rs("Holding Demand Details");const Me=["BACK OFFICE"],Ve=l.useMemo(()=>Array.isArray(N)&&N.some(s=>Me.includes(s)),[N]),ve=as({paymentMode:m().required("Please select the Payment mode "),bankName:m().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("Bank Name is required")}),chequeNo:m().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("Cheque No is required")}).min(6,"Enter minimum 6 digit"),chequeDate:ts().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("Cheque Date is required")}).max(ls(),"Please select valid date"),branchName:m().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("Branch Name is required")}),remarks:m().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("Remarks  is required")}),neftImage:m().when("paymentMode",{is:s=>s=="CHEQUE"||s=="NEFT"||s=="DD",then:s=>s.required("image is required")})}),a=os({initialValues:{chequeDate:"",bankName:"",branchName:"",chequeNo:"",paymentMode:"",remarks:"",neftImage:"",isArrear:b},enableReinitialize:!0,onSubmit:s=>{console.log("values at submit payment",s),Je(s)},validationSchema:ve}),ze=s=>{let i=s.target.name,o=s.target.value;i=="paymentMode"&&(o=="CASH"||o=="ONLINE"?g(!1):g(!0)),i=="neftImage"&&Ge(s.target.files[0]),i=="isArrear"&&(o=="true"?y(!0):y(!1)),i=="chequeNo"&&a.setFieldValue("chequeNo",bs(o,a.values.chequeNo,6))},Ge=s=>{console.log("files",s),a.setFieldValue("neftImage",s)},Ye=()=>{d(!0),h(!1),j.post(`${Re}`,{propId:n},f()).then(function(s){console.log("view deamnd details at property in egov...",s==null?void 0:s.data),Oe(s==null?void 0:s.data),$e(s==null?void 0:s.data),d(!1)}).catch(function(s){console.log("at error part.",s),h(!0),d(!1)})};l.useEffect(()=>{Ye()},[]);const Ke=(s,i)=>{d(!0),j.post(`${Le}`,{id:s,...i},f()).then(function(o){console.log("offline payment...",o==null?void 0:o.data),o.data.status?(Ie.success("Payment done Successfully"),p(`/paymentReceipt/${o.data.data.TransactionNo}/holding`)):Ie.warn("Payment Failed"),d(!1)}).catch(function(o){console.log("at error part.",o),h(!0),d(!1)})},Ze=()=>{d(!0),j.post("http://203.129.217.244:8010/api/payment/v1/get-referal-url",{propId:n},f()).then(function(s){console.log("response.",s.data),s.data.status&&window.open(s.data.data),d(!1)}).catch(function(s){console.log("at error part.",s),h(!0),d(!1)})};console.log("isArrear",b);const Je=s=>{(s==null?void 0:s.paymentMode)!="ONLINE"?Ke(n,s):Ze()};return u?e.jsx(e.Fragment,{children:e.jsx(cs,{})}):Ue?e.jsx(ds,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):(console.log("holding demand status",(T=(w=r==null?void 0:r.data)==null?void 0:w.basicDetails)==null?void 0:T.holding_no),e.jsxs(e.Fragment,{children:[e.jsx(ns,{position:"top-right",autoClose:2e3}),u&&e.jsx(is,{}),e.jsxs("div",{className:"w-full mx-auto px-6",children:[e.jsx("div",{className:"pt-10",children:e.jsx(hs,{title:`${t("mainHoldingPage.demandDetailsHeadingText.label")}`,type:"holding",id:n,safNo:"",active:"demand"})}),Ve&&(r==null?void 0:r.paymentStatus)!==1&&(r==null?void 0:r.can_pay)===!0&&e.jsx("div",{className:"border-2 border-amber-5 00 text px-4 py-1 justify-center items-center font-semibold text-amber-500 shadow-xl w-max cursor-pointer hover:bg-amber-500 hover:text-white",onClick:()=>p(`/waiver-demand-screen/${n}/holding`),children:"Waive Off Demand"}),(r==null?void 0:r.paymentStatus)===1&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:t("mainHoldingPage.allDemandPaidButton.label")}),(r==null?void 0:r.tran_no)!=null&&e.jsx("span",{className:"bg-indigo-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl cursor-pointer hover:bg-indigo-500",onClick:()=>p(`/paymentReceipt/${encodeURIComponent(r==null?void 0:r.tran_no)}/saf`),children:t("mainHoldingPage.viewRecieptButton.label")})]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((_=(k=r==null?void 0:r.data)==null?void 0:k.basicDetails)==null?void 0:_.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyHoldingNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((P=(C=r==null?void 0:r.data)==null?void 0:C.basicDetails)==null?void 0:P.zone_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyZone.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((S=(E=r==null?void 0:r.data)==null?void 0:E.basicDetails)==null?void 0:S.ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:c((F=(q=r==null?void 0:r.data)==null?void 0:q.basicDetails)==null?void 0:F.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyOwnershipType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((A=(H=r==null?void 0:r.data)==null?void 0:H.basicDetails)==null?void 0:A.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyType.label")})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((I=(B=r==null?void 0:r.data)==null?void 0:B.basicDetails)==null?void 0:I.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyHoldingType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((L=(R=r==null?void 0:r.data)==null?void 0:R.basicDetails)==null?void 0:L.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyMobileTower.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[c(($=(O=r==null?void 0:r.data)==null?void 0:O.basicDetails)==null?void 0:$.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:c((W=(U=r==null?void 0:r.data)==null?void 0:U.basicDetails)==null?void 0:W.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:c((M=(Q=r==null?void 0:r.data)==null?void 0:Q.basicDetails)==null?void 0:M.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:t("mainHoldingPage.propertyRainwaterHarvest.label")})]})]})]})}),e.jsxs("div",{className:"flex flex-row flex-wrap justify-center w-full",children:[(r==null?void 0:r.status)&&e.jsxs("div",{class:"rounded-lg pt-4 w-full",children:[e.jsx("div",{className:"text-center mt-10",children:((V=r==null?void 0:r.data)==null?void 0:V.paymentStatus)==1?e.jsx(e.Fragment,{children:e.jsxs("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl ",children:[" ","No Payments Found Yet"]})}):e.jsx(e.Fragment,{})}),e.jsx("div",{className:"",children:((v=r==null?void 0:r.data)==null?void 0:v.paymentStatus)==0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 flex  font-serif underline",children:[e.jsx("div",{className:"bg-gray-800 w-7 h-7 rounded-full flex justify-center items-center inline mr-2 ml-3 shadow-lg border border-white text-white",children:"A"}),"Tax Calculation Paradigm"]}),e.jsx("div",{className:" block p-4 mt-2 w-full md:py-4 md:px-4 md:pb-0 md:pt-0 rounded-lg bg-gray-50 md:w-full mx-auto overflow-x-auto"}),e.jsxs("div",{className:"w-full h-auto bg-white  rounded shadow-lg text-sm p-4",children:[e.jsx("div",{className:"bg-blue-50 text-blue-700 font-semibold  my-1"}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-lime-100  text-gray-700 font-semibold ",children:e.jsx("h1",{className:"p-2",children:"Demand List "})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold  text-gray-600",children:[e.jsxs("th",{className:"border border-collapse  p-2",children:["General Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Road Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Firefighting Tax ",e.jsx("small",{className:"block",children:" "})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Education Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Water Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Clealiness Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Sewage Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Tree Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Professional Tax ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:[" Tax 1",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["State Education Tax",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Water Benefit ",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Water Bill",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Sp Water Cess",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Drain Cess",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Light Cess",e.jsx("small",{className:"block"})]}),e.jsxs("th",{className:"border border-collapse  p-2",children:["Big Building",e.jsx("small",{className:"block"})]}),e.jsx("th",{className:"border border-collapse  p-2",children:"Total Tax  "})]})}),e.jsx("tbody",{children:(G=(z=r==null?void 0:r.data)==null?void 0:z.demandList)==null?void 0:G.map((s,i)=>e.jsxs(e.Fragment,{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:17,children:e.jsxs("p",{className:"text-sm font-semibold text-indigo-800 mt-2",children:[s!=null&&s.is_arrear?"Arrear Upto":""," Financial Year : ",s==null?void 0:s.fyear]})})}),e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsxs("td",{className:"border border-collapse p-2",children:[(s==null?void 0:s.general_tax)||0,"  "]}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.road_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.firefighting_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.education_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.water_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.cleanliness_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.sewarage_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.tree_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.professional_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.tax1)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.state_education_tax)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.water_benefit)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.water_bill)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.sp_water_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.drain_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.light_cess)||0}),e.jsx("td",{className:"border border-collapse p-2",children:(s==null?void 0:s.major_building)||0}),e.jsx("td",{className:"border border-collapse p-2",children:s==null?void 0:s.total_tax})]})]}))})]})})]}),e.jsxs("div",{className:" border-gray-200 p-2 mt-4",children:[e.jsx("div",{className:"bg-teal-100  text-gray-700 font-semibold ",children:e.jsx("h1",{className:"p-2",children:"Grand total Tax Bifurcation"})}),e.jsx("div",{className:"w-full overflow-auto",children:e.jsxs("table",{className:"table-auto w-full ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-xs font-semibold text-gray-600",children:[e.jsx("th",{className:"border border-collapse  p-2",children:"General Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Road Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Firefighting Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Education Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Water Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Clealiness Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Sewage Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Tree Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Professional Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Tax 1"}),e.jsx("th",{className:"border border-collapse  p-2",children:"State Education Tax"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Water Benefit"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Water Bill"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Sp Water Cess"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Drain Cess"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Light Cess"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Big Building"}),e.jsx("th",{className:"border border-collapse  p-2",children:"Total Tax"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"font-semibold text-xs text-center",children:[e.jsx("td",{className:"border border-collapse p-2",children:(K=(Y=r==null?void 0:r.data)==null?void 0:Y.grandTaxes)==null?void 0:K.general_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(J=(Z=r==null?void 0:r.data)==null?void 0:Z.grandTaxes)==null?void 0:J.road_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(D=(X=r==null?void 0:r.data)==null?void 0:X.grandTaxes)==null?void 0:D.firefighting_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(se=(ee=r==null?void 0:r.data)==null?void 0:ee.grandTaxes)==null?void 0:se.education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ae=(re=r==null?void 0:r.data)==null?void 0:re.grandTaxes)==null?void 0:ae.water_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(le=(te=r==null?void 0:r.data)==null?void 0:te.grandTaxes)==null?void 0:le.cleanliness_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ce=(oe=r==null?void 0:r.data)==null?void 0:oe.grandTaxes)==null?void 0:ce.sewarage_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(ne=(de=r==null?void 0:r.data)==null?void 0:de.grandTaxes)==null?void 0:ne.tree_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(xe=(ie=r==null?void 0:r.data)==null?void 0:ie.grandTaxes)==null?void 0:xe.professional_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(be=(me=r==null?void 0:r.data)==null?void 0:me.grandTaxes)==null?void 0:be.tax1}),e.jsx("td",{className:"border border-collapse p-2",children:(he=(pe=r==null?void 0:r.data)==null?void 0:pe.grandTaxes)==null?void 0:he.state_education_tax}),e.jsx("td",{className:"border border-collapse p-2",children:(je=(Ne=r==null?void 0:r.data)==null?void 0:Ne.grandTaxes)==null?void 0:je.water_benefit}),e.jsx("td",{className:"border border-collapse p-2",children:(ue=(fe=r==null?void 0:r.data)==null?void 0:fe.grandTaxes)==null?void 0:ue.water_bill}),e.jsx("td",{className:"border border-collapse p-2",children:(ye=(ge=r==null?void 0:r.data)==null?void 0:ge.grandTaxes)==null?void 0:ye.sp_water_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(Te=(we=r==null?void 0:r.data)==null?void 0:we.grandTaxes)==null?void 0:Te.drain_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(_e=(ke=r==null?void 0:r.data)==null?void 0:ke.grandTaxes)==null?void 0:_e.light_cess}),e.jsx("td",{className:"border border-collapse p-2",children:(Pe=(Ce=r==null?void 0:r.data)==null?void 0:Ce.grandTaxes)==null?void 0:Pe.major_building}),e.jsx("td",{className:"border border-collapse p-2 font-bold text-lg text-teal-600",children:(Se=(Ee=r==null?void 0:r.data)==null?void 0:Ee.grandTaxes)==null?void 0:Se.total_tax})]})})]})}),e.jsxs("div",{className:"bg-white py-4",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("h1",{className:"font-semibold p-1",children:["* Total Arrear Amount -"," ",e.jsxs("span",{className:" text-red-600 font-bold text-lg",children:["₹ ",(qe=r==null?void 0:r.data)==null?void 0:qe.arrear," "]})]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* Total Current Amount -"," ",e.jsxs("span",{className:"  text-teal-600 font-bold text-lg",children:["₹"," ",(Fe=r==null?void 0:r.data)==null?void 0:Fe.currentDemand," "]})]})]}),e.jsxs("h1",{className:"font-semibold p-1",children:["* Total Payable Amount -"," ",e.jsxs("span",{className:"  text-blue-600 font-bold text-lg",children:["₹ ",(He=r==null?void 0:r.data)==null?void 0:He.payableAmt," "]})]}),We==1?e.jsxs("form",{onSubmit:a.handleSubmit,onChange:ze,children:[e.jsxs("select",{name:"paymentMode",onChange:a.handleChange,value:a.values.paymentMode,id:"paymentMode",className:"px-4 py-1.5 rounded border w-2/3",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"ONLINE",children:"Online"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"NEFT",children:"NEFT"})]})," ",e.jsx("br",{}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.paymentMode&&a.errors.paymentMode?a.errors.paymentMode:null}),e.jsxs("div",{className:`${Qe?"block":"hidden"} w-full grid grid-cols-1 md:grid-cols-4 mt-5`,children:[e.jsxs("div",{className:"form-group md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Cheque/ DD/ NEFT Date",e.jsxs("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:[" ","*"," "]})," "]}),e.jsx("input",{name:"chequeDate",value:"chequeDate",...a.getFieldProps("chequeDate"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.chequeDate&&a.errors.chequeDate?a.errors.chequeDate:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Bank Name",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...a.getFieldProps("bankName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Bank Name."}),e.jsxs("span",{className:"text-red-600 absolute text-xs",children:[" ",a.touched.bankName&&a.errors.bankName?a.errors.bankName:null]})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Branch Name",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...a.getFieldProps("branchName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Branch Name."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.branchName&&a.errors.branchName?a.errors.branchName:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Cheque/ DD / NEFT No.",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...a.getFieldProps("chequeNo"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Cheque No."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.chequeNo&&a.errors.chequeNo?a.errors.chequeNo:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Payment Remark",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...a.getFieldProps("remarks"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Remarks.."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.remarks&&a.errors.remarks?a.errors.remarks:null})]}),e.jsxs("div",{className:"form-group mb-6  md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Cheque/ DD/ NEFT Image",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{name:"neftImage",onChange:a.handleChange,type:"file",className:"form-control block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter Remarks.."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.neftImage&&a.errors.neftImage?a.errors.neftImage:null})]})]}),e.jsxs("div",{className:"w-full   mt-5 mx-3 capitalize",children:[e.jsx("input",{...a.getFieldProps("isArrear"),type:"radio",value:!0,checked:b}),e.jsx("label",{htmlFor:"",children:" Pay Arrear Only"}),e.jsx("input",{...a.getFieldProps("isArrear"),type:"radio",value:!1,className:"px-2 ml-4",checked:!b}),e.jsx("label",{htmlFor:"",children:" Pay Full Amount"}),e.jsxs("button",{type:"submit",className:`${xs} uppercase mx-2`,children:["Pay ₹",b==!0?parseInt((Ae=r==null?void 0:r.data)==null?void 0:Ae.arrear):parseInt((Be=r==null?void 0:r.data)==null?void 0:Be.payableAmt)]}),e.jsx("button",{type:"button",className:`${ms} uppercase`,onClick:()=>p("/demand-reciept/"+n),children:"View Demand Bill"})]})]}):""]})]})]})]})," "]}):""})]}),(x==null?void 0:x.status)==!1&&e.jsx("div",{className:"text-2xl font-bold text-red-500 mt-20",children:e.jsxs("span",{className:"border border-red-500 px-4 py-2 shadow-xl",children:[x==null?void 0:x.message," "]})})]})]}),e.jsx("div",{className:"w-full mt-20 h-60"})]}))}export{Ts as default};
