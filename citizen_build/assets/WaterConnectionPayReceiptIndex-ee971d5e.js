import{r,v as j,u as b,b1 as g,h as y,cD as u,A,j as e,c7 as S,F as x,bm as v,c5 as w}from"./index-d8dc37f9.js";const R=()=>{var i,o,d;const[P,t]=r.useState(!1),{t:a}=j(),{paymentId:n}=b(),{api_waterApplicationPaymentReceipt:m,header:h}=g(),{setBreadCrumbData:p}=r.useContext(y);r.useEffect(()=>{p(["Water Dashboard","Payment History","Payment Receipt"])},[]),r.useState(!1);const[s,f]=r.useState(),c=r.useRef(),N=u.useReactToPrint({content:()=>c.current});return r.useEffect(()=>{t(!0),A.post(m,{transactionNo:n},h).then(l=>{t(!1),console.log("Receipt Response",l.data.data),f(l.data.data)}).catch(l=>{console.log("Error while fetching receipt DATA",l),t(!1)})},[n]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"font-poppins",ref:c,children:[e.jsx("div",{children:e.jsx("div",{className:"md:px-0 flex-1 ",children:e.jsxs("button",{onClick:N,className:"float-right pl-4 pr-6 py-1 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-amber-100 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[e.jsx(S,{className:"inline text-lg"}),"print"]})})}),e.jsx("div",{id:"printableArea",className:"",children:e.jsxs("div",{className:"border-2 border-dashed border-gray-600  bg-white p-6 w-[250mm] h-auto ml-12 md:mx-auto lg:mx-auto  container pb-12",children:[e.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 relative",children:[e.jsx("div",{className:"flex justify-start absolute",children:e.jsx("img",{src:(i=x())==null?void 0:i.ulb_logo,className:"h-20 mx-auto"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"flex justify-center",children:"नमुना क्रमांक - २"}),e.jsx("h1",{className:"flex justify-center",children:"(नियम१२,११० (२), ११४,११६ (२) आणि ११७ (१)(२) व (३) पहा)"}),e.jsx("h1",{className:"flex justify-center font-semibold text-2xl mt-2",children:a("tranWaterApplicationSearchPage.newconnection.label")})]}),window.location.origin!=="https://modernulb.com"?e.jsx("span",{className:"w-72 h-72 absolute bg-transparent opacity-40 mt-[30rem] text-7xl font-bold text-gray-500 ml-72 rounded-full whitespace-nowrap",style:{transform:"rotate(-45deg)"},children:"DUMMY RECEIPT"}):"",e.jsx("div",{className:"flex justify-center items-center w-full h-full relative",children:e.jsx("img",{src:(o=x())==null?void 0:o.state_logo,alt:"",className:" w-80 h-80  top-60 absolute bg-transparent opacity-20  rounded-full border"})})]}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-3 ",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-3xl text-center uppercase ",children:a("tranWaterApplicationSearchPage.akola.label")})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 mt-2",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans font-semibold",children:a("tranWaterApplicationSearchPage.recieptno.label")}),e.jsx("h1",{className:"flex font-sans  pl-2",children:s==null?void 0:s.transactionNo})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans font-semibold",children:[a("tranWaterApplicationSearchPage.applicationNoLabel.label"),":"]}),e.jsx("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.applicationNo})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsxs("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:[a("tranWaterApplicationSearchPage.consumerName.label")," :"]}),e.jsx("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.customerName})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsxs("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:[" ",a("tranWaterApplicationSearchPage.tapsize.label"),":"]}),e.jsxs("h1",{className:"flex font-sans pl-2 ",children:[(s==null?void 0:s.tabize)||"N/A","mm"]})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsxs("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:[a("tranWaterApplicationSearchPage.propertytype.label")," :"]}),e.jsx("h1",{className:"flex font-sans pl-2 ",children:(s==null?void 0:s.propertyType)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsxs("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:[" ",a("tranWaterApplicationSearchPage.meterNoLabel.label"),":"]}),e.jsx("h1",{className:"flex font-sans pl-2 ",children:(s==null?void 0:s.meterNo)||"N/A"})]})]}),e.jsxs("td",{className:"mt-1 ",children:[e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.date.label")}),e.jsx("h1",{className:"flex font-sans pl-2 ",children:v(s==null?void 0:s.transactionDate).format("DD/MM/yy")||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.mobileno.label")}),e.jsx("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.mobileNo})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsxs("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:[a("tranWaterApplicationSearchPage.propertyNo.label"),"  :"]}),e.jsx("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.propertyNo})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.consumerno.label")}),e.jsx("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.consumerNo})]}),e.jsx("div",{className:"flex p-1 text-sm"}),e.jsx("div",{className:"flex p-1 text-sm"}),e.jsx("div",{className:"flex p-1 text-sm"}),e.jsx("div",{className:"flex p-1 text-sm"})]})]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 ",children:e.jsx("tr",{className:"",children:e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans font-semibold",children:[a("tranWaterApplicationSearchPage.address.label")," :"]}),e.jsx("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.address})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans font-semibold",children:a("tranWaterApplicationSearchPage.sumof.label")}),e.jsx("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.totalPaidAmount})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans font-semibold",children:["(",a("tranWaterApplicationSearchPage.inwords.label"),")  "]}),e.jsx("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.totalPaidAmount})]}),(s==null?void 0:s.chequeNo)&&e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans ",children:[a("tranWaterApplicationSearchPage.chequeNo.label")," ",e.jsx("span",{className:" w-24 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.chequeNo)||"N/A"})]}),e.jsxs("h1",{className:"flex text-gray-900 font-sans ",children:[a("tranWaterApplicationSearchPage.dated.label")," ",e.jsx("span",{className:"font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.chequeDate)||"N/A"})," "]})]}),(s==null?void 0:s.bankName)&&e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans",children:[a("tranWaterApplicationSearchPage.drawnonbank.label")," "]}),e.jsx("h1",{className:"flex w-72 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.bankName)||"N/A"}),e.jsxs("h1",{className:"flex text-gray-900 font-sans",children:[a("tranWaterApplicationSearchPage.branchname.label")," "]}),e.jsx("h1",{className:"flex w-40 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.branchName)||"N/A"})]}),e.jsx("div",{className:"flex p-1 text-sm",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans   font-semibold",children:[a("tranWaterApplicationSearchPage.vide.label"),"  ",e.jsx("span",{className:" font-sans ml-1 font-normal",children:s==null?void 0:s.paymentMode})]})})]})})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 mt-3",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-sm text-left ",children:a("tranWaterApplicationSearchPage.onlinepaymentnote.label")})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 -mt-1",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-sm text-left ",children:a("tranWaterApplicationSearchPage.connectiondetails.label")})})}),e.jsx("div",{children:e.jsxs("table",{className:"w-full border border-gray-500 ",children:[e.jsx("thead",{className:" w-full",children:e.jsxs("tr",{className:"border border-gray-500 text-sm font-sans font-bold text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsxs("h1",{className:" ",children:[a("tranWaterApplicationSearchPage.description.label")," "]})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:"",children:[a("tranWaterApplicationSearchPage.totalamount.label")," "]})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsxs("h1",{className:"text-left ml-2 ",children:[" 1.",a("tranWaterApplicationSearchPage.specialwatercharges.label")]})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:" text-right mr-2",children:["₹ ",(s==null?void 0:s.securitydeposit)||"0"]})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsxs("h1",{className:"text-left ml-2 ",children:["2.",a("tranWaterApplicationSearchPage.securitydeposit.label")]})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsx("h1",{className:" text-right mr-2",children:(s==null?void 0:s.tabize)===15?"₹1500":(s==null?void 0:s.tabize)==20?"₹3000":(s==null?void 0:s.tabize)==25?"₹9000":(s==null?void 0:s.tabize)==50?"₹20000":"0"})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsxs("h1",{className:"text-left ml-2 ",children:["3.",a("tranWaterApplicationSearchPage.boringcharge.label")]})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsx("h1",{className:" text-right mr-2",children:"₹ 500"})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsxs("h1",{className:"text-left ml-2 ",children:["4.",a("tranWaterApplicationSearchPage.inspectionfee.label")]})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsx("h1",{className:" text-right mr-2",children:"₹ 500"})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsxs("h1",{className:"text-left ml-2 ",children:["5.",a("tranWaterApplicationSearchPage.tapconnectionjoiningfee.label")]})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsx("h1",{className:" text-right mr-2",children:"₹ 750"})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsxs("h1",{className:"text-left ml-2 ",children:["6.",a("tranWaterApplicationSearchPage.tapdisconnectionconnectionfee.label")]})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:" text-right mr-2",children:["₹ ",(s==null?void 0:s.connectionfee)||"0"]})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsxs("h1",{className:"text-left ml-2 ",children:["7.",a("tranWaterApplicationSearchPage.cementroad.label")," "]})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:(s==null?void 0:s.roadType)=="Concrete Road"?e.jsxs("h1",{className:"text-right mr-2",children:["₹ ",(s==null?void 0:s.roadTypeAmount)||"0"," X ",e.jsxs("span",{children:[s==null?void 0:s.roadWidth," Meter"]})," = ₹",(s==null?void 0:s.roadCutterAmount)||"0"]}):e.jsx("div",{className:" text-right mr-5",children:"-"})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsxs("h1",{className:"text-left ml-2 ",children:["8.",a("tranWaterApplicationSearchPage.damberroad.label")," "]})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:(s==null?void 0:s.roadType)=="Damber Road"?e.jsxs("h1",{className:"text-right mr-2",children:["₹ ",(s==null?void 0:s.roadTypeAmount)||"0"," X ",e.jsxs("span",{children:[s==null?void 0:s.roadWidth," Meter"]})," = ₹",(s==null?void 0:s.roadCutterAmount)||"0"]}):e.jsx("div",{className:" text-right mr-5",children:"-"})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsxs("h1",{className:"text-left ml-2 ",children:["9.",a("tranWaterApplicationSearchPage.khadikarnaroad.label")," "]})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72 ",children:(s==null?void 0:s.roadType)=="khadikaran Road"?e.jsxs("h1",{className:"text-right mr-2",children:["₹ ",(s==null?void 0:s.roadTypeAmount)||"0"," X ",e.jsxs("span",{children:[s==null?void 0:s.roadWidth," Meter"]})," = ₹",(s==null?void 0:s.roadCutterAmount)||"0"]}):e.jsx("div",{className:" text-right mr-5",children:"-"})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsxs("h1",{className:"text-left ml-2 ",children:["10.",a("tranWaterApplicationSearchPage.muddyroad.label")]})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:(s==null?void 0:s.roadType)=="Muddy Raod"?e.jsxs("h1",{className:"text-right mr-2",children:["₹ ",(s==null?void 0:s.roadTypeAmount)||"0"," X ",e.jsxs("span",{children:[s==null?void 0:s.roadWidth," Meter"]})," = ₹",(s==null?void 0:s.roadCutterAmount)||"0"]}):e.jsx("div",{className:" text-right mr-5",children:"-"})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:"text-left ml-2 ",children:a("tranWaterApplicationSearchPage.paidamount.label")})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:" text-right mr-2",children:["₹ ",(s==null?void 0:s.totalPaidAmount)||"N/A"]})})]})]})]})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-2 ",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsx("div",{className:"",children:e.jsx(w,{size:"64",url:((d=window.location)==null?void 0:d.host)+`/citizen/waterConnReceiptdirect/${n}`})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-sm",children:[a("tranWaterApplicationSearchPage.detailsvisit1.label"),": https://amcakola.in"]})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-sm",children:[a("tranWaterApplicationSearchPage.detailsvisit2.label"),": ","08069493299"]})})]}),e.jsxs("td",{className:"float-right mt-14",children:[e.jsx("div",{className:"flex ",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-sm",children:"In agreement  with"})}),e.jsx("div",{className:"flex",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-sm",children:s==null?void 0:s.association})})]})]})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-semibold text-sm text-center ",children:a("tranWaterApplicationSearchPage.signaturenote.label")})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12",children:e.jsx("div",{className:"",children:e.jsx("img",{src:"https://zeevector.com/wp-content/uploads/LOGO/Swachh-Bharat-Logo-PNG.png",className:"w-36 mx-auto"})})})]})})]})})};export{R as default};
