import{j as e,ay as ne,R as ce,be as de,n as s,i as ie,u as oe,a as xe,r as x,A as me,b as he,B as fe,S as Ne,L as je,c as pe,ai as be}from"./index-f8fb2358.js";import{P as ge}from"./PrintButton-87a6002c.js";function ye(l){return e.jsx(ne,{value:l.url,size:l.size})}class ue extends ce.Component{render(){var c,m,f,N,j,D,p,d,b,r,g,y,u,i,n,t,h,v,w,S,A,R,P,T,C,I,L,O,B,F,_,H,E,q,Q,U,z,W,G,V,k,X,Y,M,J,K,Z,$,ee,se,ae,te,le,re;console.log("paymentData...1",this.props.module);let a=de();return e.jsxs(e.Fragment,{children:[e.jsx(ge,{}),e.jsx("div",{id:"",className:"h-screen flex items-center justify-center mt-10 print:mt-0",children:e.jsx("div",{children:e.jsxs("div",{className:"border-2 border-dashed border-gray-600  bg-white p-2 w-[250mm] h-auto md:mx-auto lg:mx-auto  container2 ",children:[e.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 ",children:[e.jsx("div",{className:"",children:e.jsx("img",{src:a==null?void 0:a.ulb_logo,className:"h-20 mx-auto"})}),e.jsx("div",{className:"",children:e.jsx("img",{src:a==null?void 0:a.state_logo,alt:"",className:"w-[22rem] h-[22rem] absolute z-10 bg-transparent opacity-20 mt-[16rem] ml-[10rem]  rounded-full border"})})]}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 pt-2",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-4xl text-center ",children:a==null?void 0:a.ulb_name})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 pt-4 ",children:e.jsx("div",{className:"mx-auto",children:e.jsx("h1",{className:"font-bold text-xl text-center text-gray-800 border-2 border-gray-700 px-10 py-2 ",children:"HOLDING TAX RECEIPT"})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-1 text-md",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Receipt No. :"}),e.jsxs("h1",{className:"flex font-sans font-semibold  pl-2",children:[" ",s((m=(c=this.props)==null?void 0:c.paymentData)==null?void 0:m.transactionNo)]})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Department/Section :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:s((N=(f=this.props)==null?void 0:f.paymentData)==null?void 0:N.departmentSection)})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Account Description :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:s((D=(j=this.props)==null?void 0:j.paymentData)==null?void 0:D.accountDescription)})]})]}),e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Date :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:s((d=(p=this.props)==null?void 0:p.paymentData)==null?void 0:d.transactionDate)})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans mr-1",children:["Old Ward No. : ",e.jsx("span",{className:"font-sans font-semibold pl-2",children:s((r=(b=this.props)==null?void 0:b.paymentData)==null?void 0:r.oldWardNo)})," "]}),"/",e.jsxs("h1",{className:"flex text-gray-900 font-sans ml-1",children:["New Ward No. : ",e.jsx("span",{className:"font-sans font-semibold pl-2",children:s((y=(g=this.props)==null?void 0:g.paymentData)==null?void 0:y.newWardNo)})," "]})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans ",children:[((u=this==null?void 0:this.props)==null?void 0:u.module)=="holding"?"Holding No.":"Application No. "," "]}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:s((n=(i=this.props)==null?void 0:i.paymentData)==null?void 0:n.applicationNo)})]}),((h=(t=this.props)==null?void 0:t.paymentData)==null?void 0:h.ptNo)==""||((w=(v=this.props)==null?void 0:v.paymentData)==null?void 0:w.ptNo)==null?e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Holding No. :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:s((A=(S=this.props)==null?void 0:S.paymentData)==null?void 0:A.holdingNo)})]}):e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Property Tax No. :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:s((P=(R=this.props)==null?void 0:R.paymentData)==null?void 0:P.ptNo)})]})]})]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 mt-2 text-md",children:e.jsx("tr",{className:"",children:e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Officer Name / Designation :"}),e.jsx("h1",{className:"flex font-sans font-semibold  pl-2",children:s((C=(T=this.props)==null?void 0:T.paymentData)==null?void 0:C.officerNameDesignation)})]}),e.jsxs("div",{className:"flex p-1",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Building Address :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:s((L=(I=this.props)==null?void 0:I.paymentData)==null?void 0:L.buildingAddress)})]}),e.jsxs("div",{className:"flex p-1",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"A Sum of :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:ie((B=(O=this.props)==null?void 0:O.paymentData)==null?void 0:B.totalPaidAmount)})]}),e.jsxs("div",{className:"flex p-1",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"(in words) :"}),e.jsxs("h1",{className:"flex font-sans font-semibold pl-2 border-b border-dashed border-gray-600 ",children:[" ",s((_=(F=this.props)==null?void 0:F.paymentData)==null?void 0:_.paidAmtInWords)," Rupees Only"]})]}),e.jsxs("div",{className:"flex p-1",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans ",children:["towards : ",e.jsx("span",{className:" font-sans font-semibold ml-1",children:s((E=(H=this.props)==null?void 0:H.paymentData)==null?void 0:E.towards)})]}),e.jsxs("h1",{className:"flex text-gray-900 font-sans  ml-8 ",children:["Vide :  ",e.jsx("span",{className:" font-sans font-semibold ml-1",children:s((Q=(q=this.props)==null?void 0:q.paymentData)==null?void 0:Q.paymentMode)})]}),e.jsxs("h1",{className:"flex text-gray-900 font-sans  ml-8 ",children:["Cheque No :  ",e.jsx("span",{className:" font-sans font-semibold ml-1",children:s((z=(U=this.props)==null?void 0:U.paymentData)==null?void 0:z.chequeNo)})]})]}),e.jsxs("div",{className:"flex p-1",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans ",children:["Dated : ",e.jsx("span",{className:" font-sans font-semibold ml-1",children:s((G=(W=this.props)==null?void 0:W.paymentData)==null?void 0:G.dated)})]}),e.jsxs("h1",{className:"flex text-gray-900 font-sans  ml-8 ",children:["Drawn On :  ",e.jsx("span",{className:" font-sans font-semibold ml-1",children:s((k=(V=this.props)==null?void 0:V.paymentData)==null?void 0:k.drawnOn)})]}),e.jsxs("h1",{className:"flex text-gray-900 font-sans  ml-8 ",children:["Place Of The Bank",e.jsx("span",{className:" font-sans font-semibold ml-1"})]})]})]})})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-3",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-md text-left ",children:"N.B. Online Payment/Cheque/Draft/Bankers Cheque are Subject to Realisation"})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 -mt-1",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-base text-left ",children:"HOLDING TAX DETAILS"})})}),e.jsx("div",{children:e.jsxs("table",{className:"w-full border border-gray-500 ",children:[e.jsxs("thead",{className:" w-full",children:[e.jsxs("tr",{className:"flex  text-md   ",children:[e.jsx("td",{className:" text-center border-r  w-48",children:e.jsx("h1",{className:" text-gray-900 font-sans ",children:"Description"})}),e.jsx("td",{className:"flex-1 text-center border border-gray-500",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"Period"})}),e.jsx("td",{className:" text-center  border-l w-48",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"Total Amount"})})]}),e.jsxs("tr",{className:"flex text-md ",children:[e.jsx("td",{className:"text-center w-48"}),e.jsx("td",{className:"flex-1 first-line:text-center border-b border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center border-r border-gray-500",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"From"})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"To"})})]})}),e.jsx("td",{className:"text-center border-l w-48"})]}),e.jsxs("tr",{className:"flex  text-md   border-b border-gray-500",children:[e.jsx("td",{className:"text-center w-48 ",children:" "}),e.jsx("td",{className:"flex-1 text-center  border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:"QTR"})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:"FY"})})]})}),e.jsx("td",{className:"flex-1   text-center",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:"QTR"})}),e.jsx("td",{className:"flex-1 text-center",children:e.jsx("h1",{className:" text-gray-900 font-sans ",children:"FY"})})]})})]})}),e.jsx("td",{className:"text-center border-l w-48",children:" "})]})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"flex  border-b border-gray-500  text-md ",children:[e.jsx("td",{className:" text-center w-48",children:e.jsx("h1",{className:" font-sans font-semibold ",children:"Holding Tax"})}),e.jsx("td",{className:"flex-1 text-center border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold  border-r border-gray-500 text-[0.7rem]",children:s((Y=(X=this.props)==null?void 0:X.paymentData)==null?void 0:Y.paidFromQtr)})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold  border-r border-gray-500 text-[0.7rem]",children:s((J=(M=this.props)==null?void 0:M.paymentData)==null?void 0:J.paidFrom)})})]})}),e.jsx("td",{className:"flex-1   text-center",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" font-sans font-semibold border-r border-gray-500 text-[0.7rem]",children:s((Z=(K=this.props)==null?void 0:K.paymentData)==null?void 0:Z.paidUptoQtr)})}),e.jsx("td",{className:"flex-1 text-center",children:e.jsx("h1",{className:" font-sans font-semibold text-[0.7rem]",children:s((ee=($=this.props)==null?void 0:$.paymentData)==null?void 0:ee.paidUpto)})})]})})]})}),e.jsx("td",{className:"text-center border-l w-48",children:e.jsx("h1",{className:" font-sans font-semibold ",children:s((ae=(se=this.props)==null?void 0:se.paymentData)==null?void 0:ae.demandAmount)})})]}),(re=(le=(te=this.props)==null?void 0:te.paymentData)==null?void 0:le.taxDetails)==null?void 0:re.map(o=>e.jsxs("tr",{className:"flex border-b border-gray-500  text-md ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" font-sans font-semibold ",children:" "})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold"})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold"})})]})}),e.jsx("td",{className:"flex-1 text-right",children:e.jsx("tr",{className:" ",children:e.jsx("td",{className:" ",children:e.jsx("h1",{className:"-ml-16 font-sans font-semibold text-sm",children:s(o==null?void 0:o.keyString)})})})})]})}),e.jsx("td",{className:" text-center border-l border-gray-500 w-48",children:e.jsx("h1",{className:" font-sans font-semibold ",children:s(o==null?void 0:o.value)})})]}))]})]})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-6 ",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsx("div",{className:"",children:e.jsx(ye,{url:window.location.href,size:"64"})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-md",children:["For Details Please Visit : ",a==null?void 0:a.website]})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-md",children:["Or Call us at ",a==null?void 0:a.mobile_no," or ",a==null?void 0:a.mobile_no_2]})})]}),e.jsxs("td",{className:"float-right mt-16",children:[e.jsx("div",{className:"flex ",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-md",children:"In Collaboration with"})}),e.jsx("div",{className:"flex",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-md",children:"Sri Publication & Stationers Pvt Ltd"})})]})]})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-semibold text-md text-center ",children:"**This is a computer-generated receipt and it does not require a signature.**"})})})]})})})]})}}function we(){const{paymentId:l,module:a}=oe();console.log("param payment id ..",l);let c;a=="saf"?c="SAF Receipt":c="Holding Receipt",xe(c);const m=x.useRef(),[f,N]=x.useState(),[j,D]=x.useState(!1),[p,d]=x.useState(!1),[b,r]=x.useState(!1),{api_getPaymentData:g,api_getHoldingReceiptUrl:y}=be();x.useEffect(()=>{u()},[]);const u=()=>{r(!0),d(!1);let i,n;a=="holding"?(i=y,n={tranNo:decodeURIComponent(l)}):(i=g,n={tranNo:decodeURIComponent(l)}),console.log("before fetch payment receipt....",n),me.post(i,n,he()).then(t=>{var h;console.log("payment data at receipt.....",t),t.data.status?N((h=t==null?void 0:t.data)==null?void 0:h.data):(r(!1),d(!0)),r(!1)}).catch(t=>{r(!1),d(!0),console.log(t)})};return b?e.jsx(e.Fragment,{children:e.jsx(fe,{})}):p?e.jsx(Ne,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs("div",{children:[j&&e.jsx(je,{}),e.jsx(pe,{trigger:()=>e.jsx("button",{}),content:()=>m.current}),e.jsx(ue,{module:a,ref:m,paymentData:f})]})}export{we as default};
