import{r as d,u as f,aN as g,c0 as b,A as u,j as e,bJ as v,I as c,b_ as r,bC as p}from"./index-f9255818.js";function w(){var a,o,t;const[s,n]=d.useState(),{transactionId:i}=f();console.log("param payment id ..",i);const{api_waterConsumerPaymentReceipt:h,header:m}=g();d.useEffect(()=>{j()},[]),d.useState();const x=d.useRef(),N=b.useReactToPrint({content:()=>x.current}),j=()=>{u.post(h,{transactionNo:i},m).then(l=>{l.data.status?(console.log("Consumer Payment Data for receipt",l.data.data),n(l.data.data)):console.log("Error while getting consumer data for receipt")}).catch(l=>{console.log("Exception while getting consumer receipt",l)})};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"font-poppins",ref:x,children:[e.jsx("div",{children:e.jsx("div",{className:"md:px-0 flex-1 ",children:e.jsxs("button",{onClick:N,className:"float-right pl-4 pr-6 py-1 bg-sky-400 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-amber-100 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[e.jsx(v,{className:"inline text-lg"}),"print"]})})}),e.jsx("div",{id:"printableArea",className:"font-poppins",children:e.jsx("div",{children:e.jsxs("div",{className:"border-2 border-dashed border-gray-600  bg-white p-6 w-[250mm] h-auto ml-12 md:mx-auto lg:mx-auto container ",children:[e.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 relative",children:[e.jsx("div",{className:"",children:e.jsx("img",{src:(a=c())==null?void 0:a.ulb_logo,className:"h-20 mx-auto"})}),e.jsx("div",{className:"",children:e.jsx("img",{src:(o=c())==null?void 0:o.state_logo,alt:"",className:" w-[22rem] h-[22rem]  absolute z-10 bg-transparent opacity-20 mt-[16rem] ml-[17rem]  rounded-full border"})})]}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-3 ",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-4xl text-center ",children:(t=c())==null?void 0:t.ulb_name})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e.jsx("div",{className:"mx-auto",children:e.jsxs("h1",{className:"font-semibold text-2xl text-center text-gray-800 border border-gray-700 w-[24rem] uppercase",children:["water user charge ",e.jsx("br",{})," payment receipt"]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 mt-2",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Receipt No. :"}),e.jsx("h1",{className:"flex   pl-2",children:(s==null?void 0:s.transactionNo)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Department/Section :"}),e.jsx("h1",{className:"flex  pl-2 ",children:(s==null?void 0:s.accountDescription)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Account Description :"}),e.jsx("h1",{className:"flex  pl-2 ",children:"Water User Charge"})]}),(s==null?void 0:s.holdingNo)&&e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Holding No. :"}),e.jsx("h1",{className:"flex  pl-2 ",children:(s==null?void 0:s.holdingNo)||"N/A"})]}),(s==null?void 0:s.safNo)&&e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Holding No. :"}),e.jsx("h1",{className:"flex  pl-2 ",children:(s==null?void 0:s.safNo)||"N/A"})]})]}),e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Date :"}),e.jsx("h1",{className:"flex  pl-2 ",children:s!=null&&s.transactionDate?r(s==null?void 0:s.transactionDate).format("DD/MM/yy"):"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Ward No. :"}),e.jsx("h1",{className:"flex  pl-2 ",children:(s==null?void 0:s.WardNo)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Consumer No. :"}),e.jsx("h1",{className:"flex  pl-2 ",children:(s==null?void 0:s.consumerNo)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Meter No. :"}),e.jsx("h1",{className:"flex  pl-2 ",children:(s==null?void 0:s.meterNo)||"N/A"})]}),e.jsx("div",{className:"flex p-1 text-xl"}),e.jsx("div",{className:"flex p-1 text-xl"}),e.jsx("div",{className:"flex p-1 text-xl"}),e.jsx("div",{className:"flex p-1 text-xl"}),e.jsx("div",{className:"flex p-1 text-xl",children:" "})]})]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 mt-4",children:e.jsx("tr",{className:"",children:e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Received From Mr/Mrs/Miss :"}),e.jsx("h1",{className:"flex   pl-2",children:(s==null?void 0:s.customerName)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Mobile No. :"}),e.jsx("h1",{className:"flex   pl-2",children:(s==null?void 0:s.customerMobile)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Address :"}),e.jsx("h1",{className:"flex  pl-2 ",children:s==null?void 0:s.address})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"A Sum of Rs.  (in words) : "}),e.jsx("h1",{className:"flex  pl-2 ",children:s!=null&&s.paidAmtInWords?(s==null?void 0:s.paidAmtInWords)+" Only":"N/A"})]}),e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-6",children:[e.jsx("div",{className:"flex p-1 text-xl",children:e.jsxs("h1",{className:"flex text-gray-900  font-semibold",children:["Towards : ",e.jsx("span",{className:"  font-normal ml-1",children:(s==null?void 0:s.towards)||"N/A"})]})}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Water Consumed (in K.L.)  :"}),e.jsx("h1",{className:"flex  pl-2 ",children:(s==null?void 0:s.waterConsumed)||"N/A"})]}),e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold  ",children:"Fixed :"}),e.jsxs("h1",{className:"flex  pl-2 ",children:["Period from : ",s!=null&&s.fixedPaidFrom?r(s==null?void 0:s.fixedPaidFrom).format("DD-MMM-yy"):"N/A","   to : ",s!=null&&s.fixedPaidUpto?r(s==null?void 0:s.fixedPaidUpto).format("DD-MMM-yy"):"N/A","  "]})]})]}),e.jsxs("div",{className:"col-span-6",children:[e.jsx("div",{className:"flex p-1 text-xl",children:e.jsxs("h1",{className:"flex text-gray-900  font-semibold  ml-8 ",children:["Vide : ",e.jsx("span",{className:"  font-normal ml-1",children:(s==null?void 0:s.paymentMode)||"N/A"})]})}),e.jsx("div",{className:"flex p-1 text-xl",children:e.jsxs("h1",{className:"flex text-gray-900  font-semibold  ml-8 ",children:["Last Meter Reading :",e.jsxs("span",{className:"  font-normal ml-1",children:[e.jsx("span",{children:(s==null?void 0:s.lastMeterReading)||"N/A"}),e.jsxs("span",{className:"text-base",children:["(",(s==null?void 0:s.lastMeterReadingDate)||"N/A",")"]})]})]})}),e.jsx("div",{className:"flex p-1 text-xl",children:e.jsxs("h1",{className:"flex text-gray-900  font-semibold  ml-8 ",children:["Current Meter Reading :",e.jsxs("span",{className:"  font-normal ml-1",children:[e.jsx("span",{children:(s==null?void 0:s.currentMeterReading)||"N/A"}),e.jsxs("span",{className:"text-base",children:["(",(s==null?void 0:s.currentMeterReadingDate)||"N/A",")"]})]})]})})]})]}),(s==null?void 0:s.chequeNo)&&e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsxs("h1",{className:"flex text-gray-900  font-semibold",children:["Cheque No : ",e.jsx("span",{className:" w-24  font-normal ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.chequeNo)||"N/A"})]}),e.jsxs("h1",{className:"flex text-gray-900  font-semibold",children:["Dated : ",e.jsx("span",{className:"w-24  font-normal ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.chequeDate)||"N/A"})]})]}),(s==null?void 0:s.bankName)&&e.jsxs("div",{className:"flex p-1 text-xl",children:[e.jsx("h1",{className:"flex text-gray-900 font-semibold ",children:"Drawn on : "}),e.jsx("h1",{className:"flex w-72  ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.bankName)||"N/A"}),e.jsx("h1",{className:"flex text-gray-900 font-semibold ",children:"Branch Name :"}),e.jsx("h1",{className:"flex w-40  ml-1 border-b border-dashed border-gray-600",children:(s==null?void 0:s.branchName)||"N/A"})]})]})})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-3",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-md text-left ",children:"N.B. Online Payment/Cheque/Draft/Bankers Cheque are Subject to Realisation"})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 -mt-1",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-xl text-left ",children:"WATER CONNECTION FEE DETAILS"})})}),e.jsx("div",{children:e.jsxs("table",{className:"w-full border border-gray-500 ",children:[e.jsx("thead",{className:" w-full",children:e.jsxs("tr",{className:"border border-gray-500 text-xl  font-bold text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:" ",children:"Description "})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsx("h1",{className:"",children:"Amount "})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border border-gray-500 text-sm   ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsxs("h1",{className:"text-left ml-2 ",children:[" Period:  From ",e.jsxs("span",{className:"font-semibold",children:[" ",s!=null&&s.paidFrom?r(s==null?void 0:s.paidFrom).format("MMM/yy"):"N/A"]})," To ",e.jsxs("span",{className:"font-semibold",children:[" ",s!=null&&s.paidUpto?r(s==null?void 0:s.paidUpto).format("MMM/yy"):"N/A"]})]})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:" text-right mr-2",children:[" ₹ ",s==null?void 0:s.totalPaidAmount," "]})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:"text-left ml-2 ",children:"Penalty"})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:" text-right mr-2",children:[" ₹ ",s==null?void 0:s.penaltyAmount]})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:" text-left ml-2",children:"Rebate"})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:" text-right mr-2",children:[" ₹ ",s==null?void 0:s.rebate]})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:"text-left ml-2 ",children:"Paid Amount"})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:"text-right mr-2",children:[" ₹ ",s==null?void 0:s.totalPaidAmount]})})]}),e.jsxs("tr",{className:"border border-gray-500 text-sm  text-center ",children:[e.jsx("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e.jsx("h1",{className:"text-left ml-2 ",children:"Due Amount"})}),e.jsx("td",{colSpan:1,className:" border-gray-500 w-72",children:e.jsxs("h1",{className:" text-right mr-2",children:[" ₹ ",s==null?void 0:s.dueAmount]})})]})]})]})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-2 ",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsx("div",{className:"",children:e.jsx(p,{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Jharkhand_Rajakiya_Chihna.svg/1200px-Jharkhand_Rajakiya_Chihna.svg.png",size:"64"})}),e.jsx("div",{className:"flex",children:e.jsx("h1",{className:"flex text-gray-900  text-sm",children:"For Details Please Visit : udhd.jharkhand.gov.in"})}),e.jsx("div",{className:"flex ",children:e.jsx("h1",{className:"flex text-gray-900  text-sm",children:"Or Call us at 1800 8904115 or 0651-3500700"})})]}),e.jsxs("td",{className:"float-right mt-16",children:[e.jsx("div",{className:"flex ",children:e.jsx("h1",{className:"flex text-gray-900  text-sm",children:"In Collaboration with"})}),e.jsx("div",{className:"flex",children:e.jsx("h1",{className:"flex text-gray-900  text-sm",children:"Sri Publication & Stationers Pvt Ltd"})})]})]})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-semibold text-xl text-center ",children:"**This is a computer-generated receipt and it does not require a physical signature.**"})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12",children:e.jsx("div",{className:"",children:e.jsx("img",{src:"https://zeevector.com/wp-content/uploads/LOGO/Swachh-Bharat-Logo-PNG.png",className:"w-36 mx-auto"})})})]})})})]})})}export{w as default};