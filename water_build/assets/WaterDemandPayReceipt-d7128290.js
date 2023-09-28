import{l as d,v,W as p,q as w,j as e,$ as A,k as s,E as S,w as a,h as o,a6 as M}from"./index-4a1e28f7.js";function C(){var t,n,i,h,m;const[l,x]=d.useState(),{transactionId:N}=v(),{api_waterConsumerPaymentReceipt:f,header:g}=p(),[b,c]=d.useState(!1);d.useEffect(()=>{u()},[]);const u=()=>{c(!0),w.post(f,{transactionNo:N},g).then(r=>{r.data.status?(c(!1),console.log("Consumer Payment Data for receipt",r.data.data),x(r.data.data)):(console.log("Error while getting consumer data for receipt"),c(!1))}).catch(r=>{console.log("Exception while getting consumer receipt",r),c(!1)})};return e(A,{content:s("div",{children:[b&&e(S,{}),s("div",{className:"border-2 border-dashed border-gray-600  bg-white p-6 w-[250mm] h-auto ml-12 md:mx-auto lg:mx-auto container ",children:[s("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 relative",children:[e("div",{className:"",children:e("img",{src:(t=a())==null?void 0:t.ulb_logo,className:"h-20 mx-auto"})}),e("div",{className:"",children:e("img",{src:(n=a())==null?void 0:n.state_logo,alt:"",className:" w-[22rem] h-[22rem]  absolute z-10 bg-transparent opacity-20 mt-[16rem] ml-[17rem]  rounded-full border"})})]}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-3 ",children:e("div",{className:"",children:e("h1",{className:"font-bold text-4xl text-center uppercase",children:(i=a())==null?void 0:i.ulb_name})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 ",children:e("div",{className:"mx-auto",children:s("h1",{className:"font-semibold text-2xl text-center text-gray-800 border border-gray-700 w-[24rem] uppercase",children:["water user charge ",e("br",{})," payment receipt"]})})}),e("div",{children:e("table",{className:"w-full  p-2 mt-2",children:s("tr",{className:"",children:[s("td",{className:" ",children:[s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Receipt No. :"}),e("h1",{className:"flex font-sans  pl-2",children:(l==null?void 0:l.transactionNo)||"N/A"})]}),s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Department/Section :"}),e("h1",{className:"flex font-sans pl-2 ",children:(l==null?void 0:l.accountDescription)||"N/A"})]}),s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Account Description :"}),e("h1",{className:"flex font-sans pl-2 ",children:"Water User Charge"})]}),(l==null?void 0:l.holdingNo)&&s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Holding No. :"}),e("h1",{className:"flex font-sans pl-2 ",children:(l==null?void 0:l.holdingNo)||"N/A"})]}),(l==null?void 0:l.safNo)&&s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Holding No. :"}),e("h1",{className:"flex font-sans pl-2 ",children:(l==null?void 0:l.safNo)||"N/A"})]})]}),s("td",{className:" ",children:[s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Date :"}),e("h1",{className:"flex font-sans pl-2 ",children:o(l==null?void 0:l.transactionDate).format("DD/MM/yy")||"N/A"})]}),s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Ward No. :"}),e("h1",{className:"flex font-sans pl-2 ",children:(l==null?void 0:l.WardNo)||"N/A"})]}),s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Consumer No. :"}),e("h1",{className:"flex font-sans pl-2 ",children:(l==null?void 0:l.consumerNo)||"N/A"})]}),e("div",{className:"flex p-1 text-xl"}),e("div",{className:"flex p-1 text-xl"}),e("div",{className:"flex p-1 text-xl"}),e("div",{className:"flex p-1 text-xl"}),e("div",{className:"flex p-1 text-xl",children:" "})]})]})})}),e("div",{children:e("table",{className:"w-full  p-2 mt-4",children:e("tr",{className:"",children:s("td",{className:" ",children:[s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Received From Mr/Mrs/Miss :"}),e("h1",{className:"flex font-sans  pl-2",children:(l==null?void 0:l.customerName)||"N/A"})]}),s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Mobile No. :"}),e("h1",{className:"flex font-sans  pl-2",children:(l==null?void 0:l.customerMobile)||"N/A"})]}),s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Address :"}),e("h1",{className:"flex font-sans pl-2 ",children:l==null?void 0:l.address})]}),s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"A Sum of Rs.  (in words) : "}),e("h1",{className:"flex font-sans pl-2 ",children:(l==null?void 0:l.paidAmtInWords)||"N/A"})]}),s("div",{className:"flex p-1 text-xl",children:[s("h1",{className:"flex text-gray-900 font-sans font-semibold",children:["Towards : ",e("span",{className:" font-sans font-normal ml-1",children:(l==null?void 0:l.towards)||"N/A"})]}),s("h1",{className:"flex text-gray-900 font-sans font-semibold  ml-8 ",children:["Vide : ",e("span",{className:" font-sans font-normal ml-1",children:(l==null?void 0:l.paymentMode)||"N/A"})]})]}),(l==null?void 0:l.chequeNo)&&s("div",{className:"flex p-1 text-xl",children:[s("h1",{className:"flex text-gray-900 font-sans ",children:["Cheque No : ",e("span",{className:" w-24 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(l==null?void 0:l.chequeNo)||"N/A"})]}),s("h1",{className:"flex text-gray-900 font-sans ",children:["Dated : ",e("span",{className:"font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(l==null?void 0:l.chequeDate)||"N/A"})," "]})]}),(l==null?void 0:l.bankName)&&s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-sans",children:"Drawn on Bank:"}),e("h1",{className:"flex w-72 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(l==null?void 0:l.bankName)||"N/A"}),e("h1",{className:"flex text-gray-900 font-sans",children:"Branch Name"}),e("h1",{className:"flex w-40 font-sans font-semibold ml-1 border-b border-dashed border-gray-600",children:(l==null?void 0:l.branchName)||"N/A"})]}),s("div",{className:"flex p-1 text-xl",children:[e("h1",{className:"flex text-gray-900 font-semibold font-sans ",children:"Water Consumed (in K.L.)  :"}),e("h1",{className:"flex font-sans pl-2 ",children:l==null?void 0:l.waterConsumed})]})]})})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-3",children:e("div",{className:"",children:e("h1",{className:"font-bold text-md text-left ",children:"N.B. Online Payment/Cheque/Draft/Bankers Cheque are Subject to Realisation"})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 xl:grid-col-12 p-2 -mt-1",children:e("div",{className:"",children:e("h1",{className:"font-bold text-xl text-left ",children:"WATER DEMAND FEE DETAILS"})})}),e("div",{children:s("table",{className:"w-full border border-gray-500 ",children:[e("thead",{className:" w-full",children:s("tr",{className:"border border-gray-500 text-xl font-sans font-bold text-center ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:" ",children:"Description "})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:"",children:"Total Amount "})})]})}),s("tbody",{children:[s("tr",{className:"border border-gray-500 text-sm font-sans  ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:s("h1",{className:"text-left ml-2 ",children:[" Period:  From ",s("span",{className:"font-semibold",children:[" ",o(l==null?void 0:l.paidFrom).format("MMM/yy")]})," To ",s("span",{className:"font-semibold",children:[" ",o(l==null?void 0:l.paidUpto).format("MMM/yy")]})]})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:s("h1",{className:" text-right mr-2",children:[l==null?void 0:l.totalPaidAmount," "]})})]}),s("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:"text-left ml-2 ",children:"Penalty"})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:" text-right mr-2",children:l==null?void 0:l.penaltyAmount})})]}),s("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:"text-left ml-2 ",children:"Paid Amount"})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:"text-right mr-2",children:l==null?void 0:l.totalPaidAmount})})]}),s("tr",{className:"border border-gray-500 text-sm font-sans text-center ",children:[e("td",{colSpan:2,className:"border-r border-gray-500 w-72",children:e("h1",{className:"text-left ml-2 ",children:"Due Amount"})}),e("td",{colSpan:1,className:" border-gray-500 w-72",children:e("h1",{className:" text-right mr-2",children:l==null?void 0:l.dueAmount})})]})]})]})}),e("div",{children:e("table",{className:"w-full mt-2 ",children:s("tr",{className:"",children:[s("td",{className:" ",children:[e("div",{className:"",children:e(M,{url:(h=a())==null?void 0:h.state_logo,size:"64"})}),e("div",{className:"flex",children:s("h1",{className:"flex text-gray-900 font-sans text-lg",children:["For Details Please Visit : ",(m=a())==null?void 0:m.website]})}),e("div",{className:"flex ",children:e("h1",{className:"flex text-gray-900 font-sans text-lg",children:"Or Call us at 9118008907909 "})})]}),s("td",{className:"float-right mt-16",children:[e("div",{className:"flex ",children:e("h1",{className:"flex text-gray-900 font-sans text-lg",children:"In Collaboration with"})}),e("div",{className:"flex",children:s("h1",{className:"flex text-gray-900 font-sans text-lg",children:[l==null?void 0:l.association," "]})})]})]})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:e("div",{className:"",children:e("h1",{className:"font-semibold text-xl text-center ",children:"**This is a computer-generated receipt and it does not require a physical signature.**"})})}),e("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12",children:e("div",{className:"",children:e("img",{src:"https://zeevector.com/wp-content/uploads/LOGO/Swachh-Bharat-Logo-PNG.png",className:"w-36 mx-auto"})})})]})]})})}export{C as default};