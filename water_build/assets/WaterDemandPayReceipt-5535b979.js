import{x as p,l as n,v as u,W as A,q as S,j as l,a8 as v,k as r,G as w,h as t,af as P}from"./index-691d7041.js";import{u as W}from"./useTranslateData-64ccb9c1.js";function k(){var i;const{t:a}=p(),{translatedData:h,setTextData:m}=W(),[e,N]=n.useState(),{transactionId:d}=u(),{api_waterConsumerPaymentReceipt:f,header:x}=A(),[b,c]=n.useState(!1);n.useEffect(()=>{g()},[]);const g=()=>{c(!0),S.post(f,{tranId:d},x).then(s=>{var o;s.data.status?(c(!1),console.log("Consumer Payment Data for receipt",s.data.data),m((o=s.data.data)==null?void 0:o.paidAmtInWords),N(s.data.data)):(console.log("Error while getting consumer data for receipt"),c(!1))}).catch(s=>{console.log("Exception while getting consumer receipt",s),c(!1)})};return l(v,{content:r("div",{children:[b&&l(w,{}),r("div",{className:"hidden sm:block border-2 border-dashed border-gray-600 bg-white p-6 w-[250mm] h-auto ml-12 md:mx-auto lg:mx-auto container ",children:[r("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 relative",children:[l("div",{className:"",children:l("img",{src:"https://mahabharti.co.in/wp-content/uploads/2020/09/Akola-Municipal-Corporation.png",className:"h-20 mx-auto"})}),window.location.origin!=="https://modernulb.com"?l("span",{className:"w-72 h-72 absolute bg-transparent opacity-40 mt-[30rem] text-7xl font-bold text-gray-500 ml-72 rounded-full whitespace-nowrap",style:{transform:"rotate(-45deg)"},children:"DUMMY RECEIPT"}):"",l("div",{className:"",children:l("img",{src:"https://mahabharti.co.in/wp-content/uploads/2020/09/Akola-Municipal-Corporation.png",alt:"",className:" w-[22rem] h-[22rem]  absolute z-10 bg-transparent opacity-20 mt-[16rem] ml-[13rem]  rounded-full border"})})]}),l("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-1 ",children:l("div",{className:"",children:l("h1",{className:"font-bold text-3xl text-center uppercase",children:a("tranWaterApplicationSearchPage.akola.label")})})}),l("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:l("div",{className:"mx-auto",children:r("h1",{className:"font-semibold text-1xl text-center text-gray-800 border border-gray-700 w-[24rem] uppercase",children:[a("tranWaterApplicationSearchPage.waterusercharge.label")," ",l("br",{}),a("tranWaterApplicationSearchPage.payment.label")]})})}),l("div",{children:l("table",{className:"w-full  p-2 ",children:r("tr",{className:"",children:[r("td",{className:" ",children:[r("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.recieptno.label")}),l("h1",{className:"flex font-sans  pl-2",children:(e==null?void 0:e.transactionNo)||"N/A"})]}),r("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.department.label")}),l("h1",{className:"flex font-sans pl-2 ",children:a("tranWaterApplicationSearchPage.accountDescription.label")})]}),r("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.accountdiscription.label")}),l("h1",{className:"flex font-sans pl-2 ",children:a("tranWaterApplicationSearchPage.wateruserchargelabel.label")})]}),r("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.bookno.label")}),l("h1",{className:"flex font-sans pl-2 ",children:(e==null?void 0:e.bookNo)||"N/A"})]}),(e==null?void 0:e.holdingNo)&&r("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Holding No. :"}),l("h1",{className:"flex font-sans pl-2 ",children:(e==null?void 0:e.holdingNo)||"N/A"})]}),(e==null?void 0:e.safNo)&&r("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Holding No. :"}),l("h1",{className:"flex font-sans pl-2 ",children:(e==null?void 0:e.safNo)||"N/A"})]})]}),r("td",{className:" ",children:[r("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.date.label")}),l("h1",{className:"flex font-sans pl-2 ",children:(e==null?void 0:e.transactionDate)||"N/A"})]}),r("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.wardno.label")}),l("h1",{className:"flex font-sans pl-2 ",children:(e==null?void 0:e.WardNo)||"N/A"})]}),r("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.consumerno.label")}),l("h1",{className:"flex font-sans pl-2 ",children:(e==null?void 0:e.consumerNo)||"N/A"})]}),r("div",{className:"flex p-1 text-sm",children:[r("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:[a("tranWaterApplicationSearchPage.zonelabel.label"),":"]}),l("h1",{className:"flex font-sans pl-2 ",children:(e==null?void 0:e.zoneName)||"N/A"})]}),l("div",{className:"flex p-1 text-sm"}),l("div",{className:"flex p-1 text-sm"}),l("div",{className:"flex p-1 text-sm"}),l("div",{className:"flex p-1 text-sm"})]})]})})}),l("div",{children:l("table",{className:"w-full mb-10 ",children:l("tr",{className:"",children:r("td",{className:" ",children:[r("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.receivedfrom.label")}),l("h1",{className:"flex font-sans  pl-2",children:(e==null?void 0:e.customerName)||"N/A"})]}),r("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.mobileno.label")}),l("h1",{className:"flex font-sans  pl-2",children:(e==null?void 0:e.customerMobile)||"N/A"})]}),r("div",{className:"flex p-1 text-sm",children:[r("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:[a("tranWaterApplicationSearchPage.address.label")," :"]}),l("h1",{className:"flex font-sans pl-2 ",children:e==null?void 0:e.address})]}),r("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.sumof.label")}),l("h1",{className:"flex font-sans pl-2 ",children:h||"N/A"}),r("h1",{className:"flex text-gray-900 font-sans font-semibold  ml-8 ",children:[a("tranWaterApplicationSearchPage.vide.label")," ",l("span",{className:" font-sans font-normal ml-1",children:(e==null?void 0:e.paymentMode)||"N/A"})]})]}),(e==null?void 0:e.chequeNo)&&r("div",{className:"flex p-1 text-sm",children:[r("h1",{className:"flex text-gray-900 font-sans ",children:[a("tranWaterApplicationSearchPage.chequeNo.label")," ",l("span",{className:" w-24 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(e==null?void 0:e.chequeNo)||"N/A"})]}),r("h1",{className:"flex text-gray-900 font-sans ",children:[a("tranWaterApplicationSearchPage.dated.label")," ",l("span",{className:"font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(e==null?void 0:e.chequeDate)||"N/A"})," "]})]}),(e==null?void 0:e.bankName)&&r("div",{className:"flex p-1 text-sm",children:[r("h1",{className:"flex text-gray-900 font-sans",children:[a("tranWaterApplicationSearchPage.drawnonbank.label")," "]}),l("h1",{className:"flex w-72 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(e==null?void 0:e.bankName)||"N/A"}),r("h1",{className:"flex text-gray-900 font-sans",children:[a("tranWaterApplicationSearchPage.branchname.label")," "]}),l("h1",{className:"flex w-40 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(e==null?void 0:e.branchName)||"N/A"})]}),r("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.waterconsumed.label")}),l("h1",{className:"flex font-sans pl-2 ",children:e==null?void 0:e.initialReading})]}),r("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.lastmeterreading.label")}),l("h1",{className:"flex font-sans pl-2 ",children:(e==null?void 0:e.finalReading)||"0"})]}),r("div",{className:"flex p-1 text-sm",children:[l("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:a("tranWaterApplicationSearchPage.usedconsumption.label")}),l("h1",{className:"flex font-sans pl-2 ",children:(e==null?void 0:e.unitConsumed)||"0"})]}),r("div",{className:"flex p-1 text-sm",children:[r("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:[a("tranWaterApplicationSearchPage.tcName.label"),":"]}),l("h1",{className:"flex font-sans pl-2 ",children:e==null?void 0:e.empName})]}),r("div",{className:"flex p-1 text-sm",children:[r("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:[a("tranWaterApplicationSearchPage.tcmobile.label"),": "]}),l("h1",{className:"flex font-sans pl-2 ",children:e==null?void 0:e.empMobile})]}),l("h1",{className:"flex text-gray-900 font-semibold font-sans  text-red-400 text-center",children:e==null?void 0:e.chequeStatus})]})})})}),l("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:l("div",{className:"",children:l("h1",{className:"font-bold text-md text-left ",children:a("tranWaterApplicationSearchPage.onlinepaymentnote.label")})})}),l("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 -mt-1",children:l("div",{className:"",children:l("h1",{className:"font-bold text-sm text-left ",children:a("tranWaterApplicationSearchPage.waterdemandfeedetails.label")})})}),l("div",{children:r("table",{className:"w-full border border-gray-500 ",children:[l("thead",{className:" w-full",children:r("tr",{className:"border border-gray-500 text-sm font-sans font-bold text-center ",children:[l("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:r("h1",{className:" ",children:[a("tranWaterApplicationSearchPage.description.label")," "]})}),l("td",{colSpan:1,className:" border-gray-500 w-72",children:r("h1",{className:"",children:[a("tranWaterApplicationSearchPage.totalamount.label"),"  "]})})]})}),r("tbody",{children:[r("tr",{className:"border border-gray-500 text-sm font-sans  ",children:[l("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:r("h1",{className:"text-left ml-2 ",children:[" ",a("tranWaterApplicationSearchPage.period.label"),"  From ",r("span",{className:"font-semibold",children:[" ",t(e==null?void 0:e.paidFrom).format("MMM/yy")]})," To ",r("span",{className:"font-semibold",children:[" ",t(e==null?void 0:e.paidUpto).format("MMM/yy")]})]})}),l("td",{colSpan:1,className:" border-gray-500 w-72",children:r("h1",{className:" text-right mr-2",children:[e==null?void 0:e.totalDemandAmt," "]})})]}),r("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[l("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:l("h1",{className:" text-left ml-2",children:"Against Current Demand"})}),l("td",{colSpan:1,className:" border-gray-500 w-72",children:l("h1",{className:" text-right mr-2",children:(e==null?void 0:e.currentCollection)||"0"})})]}),r("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[l("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:l("h1",{className:" text-left ml-2",children:"Against Arrear Demand"})}),l("td",{colSpan:1,className:" border-gray-500 w-72",children:l("h1",{className:" text-right mr-2",children:(e==null?void 0:e.arrearCollection)||"0"})})]}),r("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[l("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:l("h1",{className:"text-left ml-2 ",children:a("tranWaterApplicationSearchPage.paidamount.label")})}),l("td",{colSpan:1,className:" border-gray-500 w-72",children:l("h1",{className:"text-right mr-2",children:e==null?void 0:e.totalPaidAmount})})]}),r("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[l("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:l("h1",{className:"text-left ml-2 ",children:a("tranWaterApplicationSearchPage.dueamount.label")})}),l("td",{colSpan:1,className:" border-gray-500 w-72",children:l("h1",{className:" text-right mr-2",children:e==null?void 0:e.dueAmount})})]})]})]})}),l("div",{children:l("table",{className:"w-full mt-2 ",children:r("tr",{className:"",children:[r("td",{className:" ",children:[l("div",{className:"",children:l("div",{className:"w-full ",children:r("div",{className:"text-sm",children:["  ",l(P,{url:((i=window.location)==null?void 0:i.host)+`/water/water-demand-payment-receiptDirect/${d}`,size:90})]})})}),l("div",{className:"flex",children:r("h1",{className:"flex text-gray-900 font-sans text-sm",children:[a("tranWaterApplicationSearchPage.detailsvisit1.label"),"https://amcakola.in"]})}),l("div",{className:"flex ",children:r("h1",{className:"flex text-gray-900 font-sans text-sm",children:[a("tranWaterApplicationSearchPage.detailsvisit2.label"),"08069493299"]})})]}),r("td",{className:"float-right mt-16",children:[l("div",{className:"flex ",children:l("h1",{className:"flex text-gray-900 font-sans text-sm",children:"In agreement  with"})}),l("div",{className:"flex",children:r("h1",{className:"flex text-gray-900 font-sans text-sm",children:[e==null?void 0:e.association," "]})})]})]})})}),l("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:l("div",{className:"",children:l("h1",{className:"font-semibold text-sm text-center ",children:a("tranWaterApplicationSearchPage.signaturenote.label")})})}),l("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12",children:l("div",{className:"",children:l("img",{src:"https://zeevector.com/wp-content/uploads/LOGO/Swachh-Bharat-Logo-PNG.png",className:"w-36 mx-auto"})})})]}),r("div",{className:"max-w-2xl mx-auto p-4 border sm:hidden",children:[r("div",{className:"mb-4",children:[l("h2",{className:"text-xl font-bold text-center",children:"AKOLA MUNICIPAL CORPORATION"}),l("h3",{className:"text-lg font-bold text-center",children:"WATER USER CHARGE RECEIPT"})]}),r("div",{className:"mb-4 gap-2",children:[r("p",{children:["Receipt No:",(e==null?void 0:e.transactionNo)||"N/A"]}),l("p",{children:"Department/Section: Water"}),l("p",{children:"Account Description: Water User Charges"}),r("p",{children:["Book No: ",(e==null?void 0:e.bindBookNo)||"N/A"]}),l("p",{children:"Date:"}),r("p",{children:["Transaction No:",(e==null?void 0:e.transactionNo)||"N/A"]})]}),r("div",{className:"mb-4 gap-2",children:[r("p",{children:["Consumer No:",(e==null?void 0:e.consumerNo)||"N/A"]}),r("p",{children:["Received From Mr/Mrs/Miss: ",(e==null?void 0:e.customerName)||"N/A"]}),r("p",{children:["Mobile No: ",(e==null?void 0:e.empMobile)||"N/A"]}),r("p",{children:["Address: ",(e==null?void 0:e.address)||"N/A"]})]}),r("table",{className:"w-full border border-gray-500 ",children:[l("thead",{className:" w-full",children:r("tr",{className:"border border-gray-500 text-sm font-sans font-bold text-center ",children:[l("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:r("h1",{className:" ",children:[a("tranWaterApplicationSearchPage.description.label")," "]})}),l("td",{colSpan:1,className:" border-gray-500 w-72",children:r("h1",{className:"",children:[a("tranWaterApplicationSearchPage.totalamount.label"),"  "]})})]})}),r("tbody",{children:[r("tr",{className:"border border-gray-500 text-sm font-sans  ",children:[l("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:r("h1",{className:"text-left ml-2 ",children:[" ",a("tranWaterApplicationSearchPage.period.label"),"  From ",r("span",{className:"font-semibold",children:[" ",t(e==null?void 0:e.paidFrom).format("MMM/yy")]})," To ",r("span",{className:"font-semibold",children:[" ",t(e==null?void 0:e.paidUpto).format("MMM/yy")]})]})}),l("td",{colSpan:1,className:" border-gray-500 w-72",children:r("h1",{className:" text-right mr-2",children:[e==null?void 0:e.totalPaidAmount," "]})})]}),r("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[l("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:l("h1",{className:" text-left ml-2",children:"Advanced Amount"})}),l("td",{colSpan:1,className:" border-gray-500 w-72",children:l("h1",{className:" text-right mr-2",children:e==null?void 0:e.advancePaidAmount})})]}),r("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[l("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:l("h1",{className:" text-left ml-2",children:"Adjust Amount"})}),l("td",{colSpan:1,className:" border-gray-500 w-72",children:l("h1",{className:" text-right mr-2",children:e==null?void 0:e.adjustAmount})})]}),r("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[l("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:l("h1",{className:"text-left ml-2 ",children:a("tranWaterApplicationSearchPage.paidamount.label")})}),l("td",{colSpan:1,className:" border-gray-500 w-72",children:l("h1",{className:"text-right mr-2",children:e==null?void 0:e.totalPaidAmount})})]}),r("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[l("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:l("h1",{className:"text-left ml-2 ",children:a("tranWaterApplicationSearchPage.dueamount.label")})}),l("td",{colSpan:1,className:" border-gray-500 w-72",children:l("h1",{className:" text-right mr-2",children:e==null?void 0:e.dueAmount})})]})]})]}),l("div",{className:"mb-4 gap-1",children:l("p",{children:"This is a computer-generated receipt and it does not require a physical signature."})})]})]})})}export{k as default};
