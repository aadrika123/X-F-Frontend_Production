import{r,u as b,b1 as g,cE as u,A as p,j as e,c8 as v,F as x,bn as n,c6 as w}from"./index-dd1b61ca.js";function S(){var i,a,o;const[s,h]=r.useState(),{transactionId:c}=b();console.log("param payment id ..",c);const{api_waterConsumerPaymentReceipt:m,header:N}=g();r.useEffect(()=>{j()},[]),r.useState();const d=r.useRef(),f=u.useReactToPrint({content:()=>d.current}),j=()=>{p.post(m,{transactionNo:c},N).then(l=>{l.data.status?(console.log("Consumer Payment Data for receipt",l.data.data),h(l.data.data)):console.log("Error while getting consumer data for receipt")}).catch(l=>{console.log("Exception while getting consumer receipt",l)})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"font-poppins",ref:d,children:[e.jsx("div",{children:e.jsx("div",{className:"md:px-0 flex-1 ",children:e.jsxs("button",{onClick:f,className:"float-right pl-4 pr-6 py-1 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-amber-100 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[e.jsx(v,{className:"inline text-lg"}),"print"]})})}),e.jsx("div",{id:"printableArea",className:"font-poppins",children:e.jsx("div",{children:e.jsxs("div",{className:"border-2 border-dashed border-gray-600  bg-white p-6 w-[250mm] h-auto ml-12 md:mx-auto lg:mx-auto container ",children:[e.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 relative",children:[e.jsx("div",{className:"",children:e.jsx("img",{src:(i=x())==null?void 0:i.ulb_logo,className:"h-20 mx-auto"})}),e.jsx("div",{className:"flex justify-center items-center h-auto w-full mt-14 absolute ",children:e.jsx("div",{children:e.jsx("img",{src:(a=x())==null?void 0:a.ulb_logo,alt:"",className:" w-[22rem] h-[22rem]   opacity-20   rounded-full "})})}),window.location.origin!=="https://modernulb.com"?e.jsx("span",{className:"w-72 h-72 absolute bg-transparent opacity-40 mt-[30rem] text-7xl font-bold text-gray-500 ml-72 rounded-full whitespace-nowrap",style:{transform:"rotate(-45deg)"},children:"DUMMY RECEIPT"}):""]}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-3 ",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-3xl text-center ",children:"Akola Municipal Corporation"})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e.jsx("div",{className:"mx-auto",children:e.jsxs("h1",{className:"font-semibold text-1xl text-center text-gray-800 border border-gray-700 w-[24rem] uppercase",children:["water user charge ",e.jsx("br",{})," payment receipt"]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 ",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Receipt No. :"}),e.jsx("h1",{className:"flex   pl-2",children:(s==null?void 0:s.transactionNo)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Department/Section :"}),e.jsx("h1",{className:"flex  pl-2 ",children:(s==null?void 0:s.accountDescription)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Account Description :"}),e.jsx("h1",{className:"flex  pl-2 ",children:"Water User Charge"})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:" Zone No. :"}),e.jsx("h1",{className:"flex  pl-2 ",children:(s==null?void 0:s.zoneName)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:" "}),e.jsx("h1",{className:"flex  pl-2 "})]})]}),e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Date :"}),e.jsx("h1",{className:"flex  pl-2 ",children:(s==null?void 0:s.transactionDate)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Ward No. :"}),e.jsx("h1",{className:"flex  pl-2 ",children:(s==null?void 0:s.WardNo)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Consumer No. :"}),e.jsx("h1",{className:"flex  pl-2 ",children:(s==null?void 0:s.consumerNo)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Meter No. :"}),e.jsx("h1",{className:"flex  pl-2 ",children:(s==null?void 0:s.meterNo)||"N/A"})]}),e.jsx("div",{className:"flex p-1 text-sm"}),e.jsx("div",{className:"flex p-1 text-sm"}),e.jsx("div",{className:"flex p-1 text-sm"}),e.jsx("div",{className:"flex p-1 text-sm"}),e.jsx("div",{className:"flex p-1 text-sm",children:" "})]})]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mb-10 ",children:e.jsx("tr",{className:"",children:e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Received From Mr/Mrs/Miss :"}),e.jsx("h1",{className:"flex   pl-2",children:(s==null?void 0:s.customerName)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Mobile No. :"}),e.jsx("h1",{className:"flex   pl-2",children:(s==null?void 0:s.customerMobile)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Address :"}),e.jsx("h1",{className:"flex  pl-2 ",children:s==null?void 0:s.address})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"A Sum of Rs.  (in words) : "}),e.jsx("h1",{className:"flex  pl-2 ",children:s!=null&&s.paidAmtInWords?(s==null?void 0:s.paidAmtInWords)+" Only":"N/A"})]}),(s==null?void 0:s.chequeNo)&&e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans ",children:[t("tranWaterApplicationSearchPage.chequeNo.label")," ",e.jsx("span",{className:" w-24 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.chequeNo)||"N/A"})]}),e.jsxs("h1",{className:"flex text-gray-900 font-sans ",children:[t("tranWaterApplicationSearchPage.dated.label")," ",e.jsx("span",{className:"font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.chequeDate)||"N/A"})," "]})]}),(s==null?void 0:s.bankName)&&e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans",children:[t("tranWaterApplicationSearchPage.drawnonbank.label")," "]}),e.jsx("h1",{className:"flex w-72 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.bankName)||"N/A"}),e.jsxs("h1",{className:"flex text-gray-900 font-sans",children:[t("tranWaterApplicationSearchPage.branchname.label")," "]}),e.jsx("h1",{className:"flex w-40 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.branchName)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Previous Meter Reading (in Kl):"}),e.jsx("h1",{className:"flex font-sans pl-2 ",children:s==null?void 0:s.initialReading})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Last Meter Reading (in K.L.) :"}),e.jsx("h1",{className:"flex font-sans pl-2 ",children:(s==null?void 0:s.finalReading)||"0"})]}),e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Water Consumption (in Kl) :"}),e.jsx("h1",{className:"flex font-sans pl-2 ",children:(s==null?void 0:s.unitConsumed)||"0"})]}),(s==null?void 0:s.chequeNo)&&e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsxs("h1",{className:"flex text-gray-900  font-semibold",children:["Cheque No : ",e.jsx("span",{className:" w-24  font-normal ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.chequeNo)||"N/A"})]}),e.jsxs("h1",{className:"flex text-gray-900  font-semibold",children:["Dated : ",e.jsx("span",{className:"w-24  font-normal ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.chequeDate)||"N/A"})]})]}),(s==null?void 0:s.bankName)&&e.jsxs("div",{className:"flex p-1 text-sm",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold ",children:"Drawn on : "}),e.jsx("h1",{className:"flex w-72  ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.bankName)||"N/A"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold ",children:"Branch Name :"}),e.jsx("h1",{className:"flex w-40  ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.branchName)||"N/A"})]}),e.jsx("h1",{className:"flex text-gray-900 font-semibold font-sans  text-red-400 text-center",children:s==null?void 0:s.chequeStatus})]})})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-3",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-md text-left ",children:"N.B. Online Payment/Cheque/Draft/Bankers Cheque are Subject to Realisation"})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 -mt-1",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-sm text-left ",children:"WATER  FEE DETAILS"})})}),e.jsx("div",{children:e.jsxs("table",{className:"w-full border border-gray-500 ",children:[e.jsx("thead",{className:" w-full",children:e.jsxs("tr",{className:"border border-gray-500 text-sm  font-bold text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:" ",children:"Description "})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsx("h1",{className:"",children:"Amount "})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border border-gray-500 text-sm   ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsxs("h1",{className:"text-left ml-2 ",children:[" Period:  From ",e.jsxs("span",{className:"font-semibold",children:[" ",s!=null&&s.paidFrom?n(s==null?void 0:s.paidFrom).format("MMM/yy"):"N/A"]})," To ",e.jsxs("span",{className:"font-semibold",children:[" ",s!=null&&s.paidUpto?n(s==null?void 0:s.paidUpto).format("MMM/yy"):"N/A"]})]})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:" text-right mr-2",children:[" ₹ ",s==null?void 0:s.totalPaidAmount," "]})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:"text-left ml-2 ",children:"Penalty"})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:" text-right mr-2",children:[" ₹ ",s==null?void 0:s.penaltyAmount]})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:" text-left ml-2",children:"Rebate"})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:" text-right mr-2",children:[" ₹ ",s==null?void 0:s.rebate]})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:"text-left ml-2 ",children:"Paid Amount"})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:"text-right mr-2",children:[" ₹ ",s==null?void 0:s.totalPaidAmount]})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:"text-left ml-2 ",children:"Due Amount"})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:" text-right mr-2",children:[" ₹ ",s==null?void 0:s.dueAmount]})})]})]})]})}),e.jsx(w,{size:"64",url:((o=window.location)==null?void 0:o.host)+`/citizen/waterUserReceiptDirect/${c}`}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-2 ",children:e.jsx("tr",{className:"",children:e.jsxs("td",{className:" ",children:[e.jsx("div",{className:""}),e.jsx("div",{className:"flex",children:e.jsx("h1",{className:"flex text-gray-900  text-sm",children:"For Details Please Visit : https://amcakola.in/"})}),e.jsx("div",{className:"flex ",children:e.jsx("h1",{className:"flex text-gray-900  text-sm",children:"Or Call us at 1800-890-7909"})})]})})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-semibold text-sm text-center ",children:"**This is a computer-generated receipt and it does not require a physical signature.**"})})})]})})})]})})}export{S as default};