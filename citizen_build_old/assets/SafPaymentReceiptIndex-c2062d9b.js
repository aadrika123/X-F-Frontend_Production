import{aN as W,j as e,bB as Y,a1 as a,aH as y,bC as G,u as X,ad as J,r as x,A as K,v as Z,ae as $,S as ee,bD as se,f as ae}from"./index-a9962f11.js";class te extends W.Component{render(){var n,m,r,f,j,c,N,d,p,g,b,o,l,t,u,v,D,w,S,A,R,P,T,C,F,H,I,_,L,B,E,Q,q,M,O,U,k,z,V;console.log("paymentData...1",this.props.module);const s=(n=this==null?void 0:this.props)==null?void 0:n.ulbData;return e.jsxs(e.Fragment,{children:[e.jsx(Y,{}),e.jsx("div",{id:"printableArea",className:" mt-10 print:mt-0",children:e.jsx("div",{children:e.jsxs("div",{className:"border-2 border-dashed border-gray-600 print:scale-95  bg-white p-2 w-[250mm] h-auto md:mx-auto lg:mx-auto  container2 ",children:[e.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 ",children:[e.jsx("div",{className:"",children:e.jsx("img",{src:s==null?void 0:s.ulb_logo,className:"h-20 mx-auto"})}),e.jsx("div",{className:"",children:e.jsx("img",{src:s==null?void 0:s.state_logo,alt:"",className:"w-[22rem] h-[22rem]  absolute z-10 bg-transparent opacity-20 mt-[16rem] ml-[10rem]  rounded-full border"})})]}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 pt-2",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-4xl text-center ",children:s==null?void 0:s.ulb_name})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 pt-4 ",children:e.jsx("div",{className:"mx-auto",children:e.jsxs("h1",{className:"font-bold text-xl text-center text-gray-800 border-2 border-gray-700 px-10 py-2 ",children:["Payment Reciept ",e.jsx("br",{}),"Holding Tax"]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-1 text-md",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:"font-semibold ",children:[e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Receipt No. :"}),e.jsxs("h1",{className:"flex font-sans font-normal  pl-2",children:[" ",a((r=(m=this.props)==null?void 0:m.paymentData)==null?void 0:r.transactionNo)]})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Department/Section :"}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:a((j=(f=this.props)==null?void 0:f.paymentData)==null?void 0:j.departmentSection)})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Account Description :"}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:a((N=(c=this.props)==null?void 0:c.paymentData)==null?void 0:N.accountDescription)})]}),e.jsx("div",{className:"flex p-1 "})]}),e.jsxs("td",{className:" font-semibold",children:[e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Date :"}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:a((p=(d=this.props)==null?void 0:d.paymentData)==null?void 0:p.transactionDate)})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Ward No. :"}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:a((b=(g=this.props)==null?void 0:g.paymentData)==null?void 0:b.oldWardNo)})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans ",children:[((o=this==null?void 0:this.props)==null?void 0:o.module)=="holding"?"Holding No.":"Application No. "," "]}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:a((t=(l=this.props)==null?void 0:l.paymentData)==null?void 0:t.applicationNo)})]})]})]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 mt-2 text-md",children:e.jsx("tr",{className:"",children:e.jsxs("td",{className:" font-semibold",children:[e.jsxs("div",{className:"flex p-1",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Received From Mr/Mrs/Miss :"}),e.jsx("h1",{className:"flex font-sans font-normal  pl-2",children:a((v=(u=this.props)==null?void 0:u.paymentData)==null?void 0:v.customerName)})]}),e.jsxs("div",{className:"flex p-1",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Address :"}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:a((w=(D=this.props)==null?void 0:D.paymentData)==null?void 0:w.address)})]}),e.jsxs("div",{className:"flex p-1",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"A Sum of :"}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:y((A=(S=this.props)==null?void 0:S.paymentData)==null?void 0:A.totalPaidAmount)})]}),e.jsxs("div",{className:"flex p-1",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"(in words ):"}),e.jsxs("h1",{className:"flex font-sans font-normal pl-2 border-b border-dashed border-gray-600 ",children:[" ",a((P=(R=this.props)==null?void 0:R.paymentData)==null?void 0:P.paidAmtInWords)," Rupees Only"]})]}),e.jsxs("div",{className:"flex p-1",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans ",children:["towards : ",e.jsx("span",{className:" font-sans font-normal ml-1",children:a((C=(T=this.props)==null?void 0:T.paymentData)==null?void 0:C.towards)})]}),e.jsxs("h1",{className:"flex text-gray-900 font-sans  ml-8 ",children:["Vide : ",e.jsx("span",{className:" font-sans font-normal ml-1",children:a((H=(F=this.props)==null?void 0:F.paymentData)==null?void 0:H.paymentMode)})," ",e.jsx("span",{className:" font-sans font-normal ml-1"})]})]})]})})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-3",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-md text-left ",children:"N.B. Online Payment/Cheque/Draft/Bankers Cheque are Subject to Realisation"})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 -mt-1",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-base text-left ",children:"HOLDING TAX DETAILS"})})}),e.jsx("div",{children:e.jsxs("table",{className:"w-full border border-gray-500 ",children:[e.jsxs("thead",{className:" w-full",children:[e.jsxs("tr",{className:"flex  text-md   ",children:[e.jsx("td",{className:" text-center border-r  w-48",children:e.jsx("h1",{className:" text-gray-900 font-sans ",children:"Description"})}),e.jsx("td",{className:"flex-1 text-center border border-gray-500",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"Period"})}),e.jsx("td",{className:" text-center  border-l w-48",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"Total Amount"})})]}),e.jsxs("tr",{className:"flex text-md ",children:[e.jsx("td",{className:"text-center w-48"}),e.jsx("td",{className:"flex-1 first-line:text-center border-b border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center border-r border-gray-500",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"From"})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"To"})})]})}),e.jsx("td",{className:"text-center border-l w-48"})]}),e.jsxs("tr",{className:"flex  text-md   border-b border-gray-500",children:[e.jsx("td",{className:"text-center w-48 ",children:" "}),e.jsx("td",{className:"flex-1 text-center  border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:"QTR"})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:"FY"})})]})}),e.jsx("td",{className:"flex-1   text-center",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:"QTR"})}),e.jsx("td",{className:"flex-1 text-center",children:e.jsx("h1",{className:" text-gray-900 font-sans ",children:"FY"})})]})})]})}),e.jsx("td",{className:"text-center border-l w-48",children:" "})]})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"flex  border-b border-gray-500  text-md ",children:[e.jsx("td",{className:" text-center w-48",children:e.jsx("h1",{className:" font-sans font-normal ",children:"Holding Tax"})}),e.jsx("td",{className:"flex-1 text-center border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-normal  border-r border-gray-500 text-[0.7rem]",children:a((_=(I=this.props)==null?void 0:I.paymentData)==null?void 0:_.paidFromQtr)})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-normal  border-r border-gray-500 text-[0.7rem]",children:a((B=(L=this.props)==null?void 0:L.paymentData)==null?void 0:B.paidFrom)})})]})}),e.jsx("td",{className:"flex-1   text-center",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" font-sans font-normal border-r border-gray-500 text-[0.7rem]",children:a((Q=(E=this.props)==null?void 0:E.paymentData)==null?void 0:Q.paidUptoQtr)})}),e.jsx("td",{className:"flex-1 text-center",children:e.jsx("h1",{className:" font-sans font-normal text-[0.7rem]",children:a((M=(q=this.props)==null?void 0:q.paymentData)==null?void 0:M.paidUpto)})})]})})]})}),e.jsx("td",{className:"text-center border-l w-48",children:e.jsx("h1",{className:" font-sans font-normal ",children:y((U=(O=this.props)==null?void 0:O.paymentData)==null?void 0:U.demandAmount)})})]}),(V=(z=(k=this.props)==null?void 0:k.paymentData)==null?void 0:z.taxDetails)==null?void 0:V.map(i=>e.jsxs("tr",{className:"flex border-b border-gray-500  text-md ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" font-sans font-normal ",children:" "})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("tr",{className:"flex",children:e.jsx("td",{className:"flex-1 text-right",colSpan:2,children:e.jsx("tr",{className:"w-full ",children:e.jsx("td",{className:"w-full text-right",children:e.jsx("h1",{className:"font-sans font-normal text-sm",children:a(i==null?void 0:i.keyString)})})})})})}),e.jsx("td",{className:" text-center border-l border-gray-500 w-48",children:e.jsx("h1",{className:" font-sans font-normal ",children:y(i==null?void 0:i.value)})})]}))]})]})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-6 ",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsx("div",{className:"",children:e.jsx(G,{url:window.location.href,size:"64"})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-md",children:["For Details Please Visit : ",s==null?void 0:s.website]})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-md",children:["Or Call us at ",s==null?void 0:s.mobile_no," or ",s==null?void 0:s.mobile_no_2]})})]}),e.jsxs("td",{className:"float-right mt-16",children:[e.jsx("div",{className:"flex ",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-md",children:"In Collaboration with"})}),e.jsx("div",{className:"flex",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-md",children:"Sri Publication & Stationers Pvt Ltd"})})]})]})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-normal text-md text-center ",children:"**This is a computer-generated receipt and it does not require a signature.**"})})})]})})})]})}}function le(){const{paymentId:h,module:s}=X();console.log("param payment id ..",h);let n;s=="saf"?n="SAF Receipt":n="Holding Receipt",J(n);const m=x.useRef(),[r,f]=x.useState();x.useState(!1);const[j,c]=x.useState(!1),[N,d]=x.useState(!1),{api_getPaymentData:p,api_getHoldingReceiptUrl:g}=ae();x.useEffect(()=>{b()},[]);const b=()=>{c(!1),d(!0),window.localStorage.getItem("token");let o,l;s=="holding"?(o=g,l={tranNo:h}):(o=p,l={tranNo:h}),console.log("before fetch payment receipt....",l),K.post(o,l,Z()).then(t=>{console.log("payment data at receipt.....",t),t.data.status?f(t.data.data):c(!0),d(!1)}).catch(t=>{c(!0),d(!1),console.log(t)})};return N?e.jsxs(e.Fragment,{children:[e.jsx($,{}),e.jsx("div",{className:"min-h-screen"})]}):j?e.jsx(ee,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs("div",{children:[e.jsx(se,{trigger:()=>e.jsx("button",{}),content:()=>m.current}),e.jsx(te,{module:s,ref:m,paymentData:r,ulbData:r==null?void 0:r.ulbDetails})]})}export{le as default};
