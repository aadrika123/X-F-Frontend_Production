import{u as Ie,e as Ue,r as i,J as _e,Y as Me,j as e,n,ah as v,i as D,a as Be,A as Ee,b as Qe,B as We,S as qe,c as ze,ai as Le}from"./index-c6aa66f9.js";import{Q as $e}from"./QrCode-f15dfe54.js";import{P as Oe}from"./PrintButton-2f8c1fd0.js";function Ve(a){var N,b,j,r,m,x,P,H,A,k,R,C,S,T,F,X,I,U,_,M,B,E,Q,W,q,z,L,$,O,V,J,Y,Z,G,K,p,ee,ae,te,le,ne,se,de,ce,ie;const{paymentId:d,module:c}=Ie(),o=Ue(),[h,y]=i.useState(0),{setprintButtonStatus:g}=i.useContext(_e);let f=window.localStorage.getItem("device"),t=(N=a==null?void 0:a.paymentData)==null?void 0:N.ulbDetails;const{t:l}=Me();i.useEffect(()=>{u()},[]),i.useEffect(()=>{h<2&&(document.getElementById("printClick").click(),g(!0),o(`/paymentReceipt/${d}/${c}`),y(s=>s+1))},[h]);const u=()=>{var xe,re,fe,oe,he,Ne,be,je,ye,ge,ue,we,ve,De,Pe,He,Ae,ke,Re,Ce,Se,Te,Fe,Xe;let s,w;c==="holding"?s="<n>Holding No.:   "+((xe=a==null?void 0:a.paymentData)==null?void 0:xe.applicationNo)+"</n><br />":s="<n>Application No.    :  "+((re=a==null?void 0:a.paymentData)==null?void 0:re.applicationNo)+"</n><br />",((fe=a==null?void 0:a.paymentData)==null?void 0:fe.paymentMode)==="CHEQUE"||((oe=a==null?void 0:a.paymentData)==null?void 0:oe.paymentMode)=="DD"?w="<n>Cheque No.     :  "+((he=a==null?void 0:a.paymentData)==null?void 0:he.chequeNo)+"</n><br /><n>Bank Name		      :  "+((Ne=a==null?void 0:a.paymentData)==null?void 0:Ne.bankName)+"</n><br /><n>Branch Name    :  "+((be=a==null?void 0:a.paymentData)==null?void 0:be.branchName)+"</n><br /><n>Cheque Date  	  :  "+((je=a==null?void 0:a.paymentData)==null?void 0:je.chequeDate)+"</n><br />":w="";let me="<nc>Payment Receipt</nc><br /><nc>.........................................</nc><br /><br /><n>Date           :  "+((ye=a==null?void 0:a.paymentData)==null?void 0:ye.transactionDate)+"</n><br /><n>POS ID         :  XXXXXXXXXXX</n><br /><n>Transaction No.:  "+((ge=a==null?void 0:a.paymentData)==null?void 0:ge.transactionNo)+"</n><br />"+s+"<n>Ward No.       :   "+((ue=a==null?void 0:a.paymentData)==null?void 0:ue.oldWardNo)+"</n><br /><n>Citizen Name   :  "+((we=a==null?void 0:a.paymentData)==null?void 0:we.customerName)+"</n><br /><n>Address        :  "+((ve=a==null?void 0:a.paymentData)==null?void 0:ve.address)+"</n><br /><nc>.........................................</nc><br /><br /><n>Paid  From     :  "+((De=a==null?void 0:a.paymentData)==null?void 0:De.paidFromQtr)+"/"+((Pe=a==null?void 0:a.paymentData)==null?void 0:Pe.paidFrom)+"</n><br /><n>Paid  Upto     :  "+((He=a==null?void 0:a.paymentData)==null?void 0:He.paidUptoQtr)+"/"+((Ae=a==null?void 0:a.paymentData)==null?void 0:Ae.paidUptoQtr)+"</n><br /><n>Demand Amount  :  "+((ke=a==null?void 0:a.paymentData)==null?void 0:ke.demandAmount)+"</n><br /><n>Penalty Amount :  "+((Re=a==null?void 0:a.paymentData)==null?void 0:Re.totalPenalty)+"</n><br /><n>Rebate Amount  :  "+((Ce=a==null?void 0:a.paymentData)==null?void 0:Ce.totalRebate)+"</n><br /><n>Amount Paid    :  "+((Se=a==null?void 0:a.paymentData)==null?void 0:Se.totalPaidAmount)+"</n><br /><n>Payment Mode   :  "+((Te=a==null?void 0:a.paymentData)==null?void 0:Te.paymentMode)+"</n><br />"+w+"<nc>.........................................</nc><br /><br /><n>TC Name        :   "+((Fe=a==null?void 0:a.paymentData)==null?void 0:Fe.tcName)+"</n><br /><n>Mobile No.     :   "+((Xe=a==null?void 0:a.paymentData)==null?void 0:Xe.tcMobile)+`</n><br /><n>For Details Please visit : ${t==null?void 0:t.website} OR Call us at ${t==null?void 0:t.mobile_no} or ${t==null?void 0:t.mobile_no_2}</n><br /><n>Please keep this Bill For Future Reference</n><br /><n></n><br /><n></n><br /><n></n><br /><n></n><br /><n></n><br />`;""+console.table("=======PPPPPPPP START======="),console.table("The print",me),console.table("=======PPPPPPPP END======="),document.getElementById("printClick").value=me,document.getElementById("printClick").click()};return f==="mobile"?e.jsx(e.Fragment,{children:e.jsx("div",{className:"px-2",children:e.jsx("div",{className:"py-2 bg-white rounded-lg shadow-xl p-4 pb-6",children:e.jsxs("div",{className:"flex  flex-col gap-y-2 md:space-x-5 pl-4  ",children:[e.jsx("div",{className:"text-center w-full mt-0 mb-4 font-semibold",children:"Payment Receipt"}),e.jsxs("div",{className:"md:flex-1 flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:n((b=a==null?void 0:a.paymentData)==null?void 0:b.transactionDate)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Date"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-sm",children:"XXXXXXXXXXX"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"POS ID"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:n((j=a==null?void 0:a.paymentData)==null?void 0:j.transactionNo)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Transaction No."})]}),c==="holding"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:n((r=a==null?void 0:a.paymentData)==null?void 0:r.applicationNo)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Holding No"})]})}),c==="saf"&&e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:n((m=a==null?void 0:a.paymentData)==null?void 0:m.applicationNo)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Application No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:n((x=a==null?void 0:a.paymentData)==null?void 0:x.oldWardNo)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:n((P=a==null?void 0:a.paymentData)==null?void 0:P.customerName)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Citizen Name"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:n((H=a==null?void 0:a.paymentData)==null?void 0:H.address)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Address"})]}),e.jsx("div",{className:"text-center w-full my-2",children:"------------------------------------------"}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[n((A=a==null?void 0:a.paymentData)==null?void 0:A.paidFromQtr),"/",n((k=a==null?void 0:a.paymentData)==null?void 0:k.paidFrom)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Paid  From"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[n((R=a==null?void 0:a.paymentData)==null?void 0:R.paidUptoQtr),"/",n((C=a==null?void 0:a.paymentData)==null?void 0:C.paidUpto)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Paid  Upto"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:v((S=a==null?void 0:a.paymentData)==null?void 0:S.demandAmount)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Demand Amount"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:v((T=a==null?void 0:a.paymentData)==null?void 0:T.totalPenalty)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Penalty Amount"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:v((F=a==null?void 0:a.paymentData)==null?void 0:F.totalRebate)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Rebate Amount"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:n((X=a==null?void 0:a.paymentData)==null?void 0:X.totalPaidAmount)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Amount Paid"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:n((I=a==null?void 0:a.paymentData)==null?void 0:I.paymentMode)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Payment Mode"})]}),((U=a==null?void 0:a.paymentData)==null?void 0:U.paymentMode)==="CHEQUE"||((_=a==null?void 0:a.paymentData)==null?void 0:_.paymentMode)==="DD"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:n((M=a==null?void 0:a.paymentData)==null?void 0:M.chequeNo)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Cheque No."})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:n((B=a==null?void 0:a.paymentData)==null?void 0:B.bankName)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Bank Name"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:n((E=a==null?void 0:a.paymentData)==null?void 0:E.branchName)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Branch Name"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:n((Q=a==null?void 0:a.paymentData)==null?void 0:Q.chequeDate)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Cheque Date"})]})]}),e.jsx("div",{className:"text-center w-full my-2",children:"------------------------------------------"}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:n((W=a==null?void 0:a.paymentData)==null?void 0:W.tcName)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"TC Name"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:n((q=a==null?void 0:a.paymentData)==null?void 0:q.tcMobile)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Mobile No."})]}),e.jsxs("div",{className:"text-center w-full mt-6 mb-2 text-gray-800 font-semibold",children:["For Details Please visit : ",t==null?void 0:t.website," Or call us at ",t==null?void 0:t.mobile_no," or ",t==null?void 0:t.mobile_no_2]}),e.jsx("div",{className:"text-center w-full mt-2 mb-2 italic text-gray-600",children:"Please keep this Bill For Future Reference"})]})})})}):e.jsxs(e.Fragment,{children:[e.jsx(Oe,{}),e.jsx("div",{className:"flex items-center justify-center text-black print:border-2 print:border-dashed print:border-black print:w-[98vw] z-50",id:"printableArea",children:e.jsxs("div",{className:"container w-[70%] print:border-none border-2 border-dashed border-black overflow-x-hidden  py-4 px-3",children:[e.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 ",children:[e.jsx("div",{className:"",children:e.jsx("img",{src:t==null?void 0:t.ulb_logo,className:"h-20 mx-auto"})}),e.jsx("div",{className:"",children:e.jsx("img",{src:t==null?void 0:t.state_logo,alt:"",className:"w-[22rem] h-[22rem]  absolute bg-transparent opacity-20 mt-[16rem] ml-[10rem]  rounded-full border"})})]}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 pt-2",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-2xl sm:text-4xl print:text-3xl text-center uppercase ",children:t==null?void 0:t.ulb_name})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 pt-4 ",children:e.jsx("div",{className:"w-full flex justify-center",children:e.jsx("div",{className:"w-full flex justify-center",children:e.jsx("div",{className:"",children:e.jsxs("div",{className:"flex flex-col items-center uppercase border-2 font-bold border-black px-10 py-2 text-lg",children:[e.jsx("span",{className:"",children:l("mainHoldingPage.holdingTaxReceiptSubHeadingText.label")}),e.jsx("span",{className:"text-base",children:l("mainHoldingPage.paymentHoldingtax.label")})]})})})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-1 text-sm",children:e.jsxs("tr",{className:"font-semibold",children:[e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:l("mainHoldingPage.paymentReceiptNumber.label")}),e.jsxs("h1",{className:"flex font-sans font-normal  pl-2",children:[" ",n((z=a==null?void 0:a.paymentData)==null?void 0:z.transactionNo)]})]}),e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:l("mainHoldingPage.paymentDepartment.label")}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:n((L=a==null?void 0:a.paymentData)==null?void 0:L.departmentSection)})]}),e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:l("mainHoldingPage.paymentAccountDescription.label")}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:n(($=a==null?void 0:a.paymentData)==null?void 0:$.accountDescription)})]}),e.jsx("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row "})]}),e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:l("mainHoldingPage.paymentDate.label")}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:n((O=a==null?void 0:a.paymentData)==null?void 0:O.transactionDate)})]}),e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row ",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans mr-1",children:[l("mainHoldingPage.paymentOldWardNumber.label")," ",e.jsxs("span",{className:"font-sans font-normal pl-2",children:[n((V=a==null?void 0:a.paymentData)==null?void 0:V.oldWardNo)," /"]})," "]}),e.jsxs("h1",{className:"flex text-gray-900 font-sans ml-1",children:[l("mainHoldingPage.paymentNewWardNumber.label")," ",e.jsx("span",{className:"font-sans font-normal pl-2",children:n((J=a==null?void 0:a.paymentData)==null?void 0:J.newWardNo)})," "]})]}),e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row ",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans ",children:[c=="holding"?`${l("mainHoldingPage.propertyHoldingNumber.label")}`:"Application No. "," : "]}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:n((Y=a==null?void 0:a.paymentData)==null?void 0:Y.applicationNo)})]})]})]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full px-2 text-sm font-semibold",children:e.jsx("tr",{className:"",children:e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:l("mainHoldingPage.paymentRecievedCitizen.label")}),e.jsx("h1",{className:"flex font-sans font-normal  pl-2",children:n((Z=a==null?void 0:a.paymentData)==null?void 0:Z.customerName)})]}),e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans w-[10.5%]",children:l("mainHoldingPage.paymentCitizenAddress.label")}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:n((G=a==null?void 0:a.paymentData)==null?void 0:G.address)})]}),e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:l("mainHoldingPage.paymentSumAmountInNum.label")}),e.jsx("h1",{className:"flex font-sans font-normal pl-2 ",children:D((K=a==null?void 0:a.paymentData)==null?void 0:K.totalPaidAmount)})]}),e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:l("mainHoldingPage.paymenetSumAmountInWords.label")}),e.jsxs("h1",{className:"flex font-sans font-normal pl-2 border-b border-dashed border-gray-600 ",children:[" ",n((p=a==null?void 0:a.paymentData)==null?void 0:p.paidAmtInWords)," ",l("mainHoldingPage.paymentRupee.label")]})]}),e.jsxs("div",{className:"flex p-1 flex-col sm:flex-row print:flex-row",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans ",children:[l("mainHoldingPage.paymentTowards.label")," ",e.jsx("span",{className:" font-sans font-normal ml-1",children:n((ee=a==null?void 0:a.paymentData)==null?void 0:ee.towards)})]}),e.jsxs("h1",{className:"flex text-gray-900 font-sans  ml-8 ",children:[l("mainHoldingPage.paymentMode.label"),"  ",e.jsx("span",{className:" font-sans font-normal ml-1",children:n((ae=a==null?void 0:a.paymentData)==null?void 0:ae.paymentMode)})]})]})]})})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-3",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-md text-left ",children:l("mainHoldingPage.paymentAlertSubHeadingText.label")})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 -mt-1",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-base text-left ",children:l("mainHoldingPage.paymentDetailsSubHeadingText.label")})})}),e.jsx("div",{children:e.jsxs("table",{className:"w-full border border-gray-500 ",children:[e.jsxs("thead",{className:" w-full",children:[e.jsxs("tr",{className:"flex  text-sm   ",children:[e.jsx("td",{className:" text-center border-r  w-48",children:e.jsx("h1",{className:" text-gray-900 font-sans ",children:l("mainHoldingPage.paymentDetailDescription.label")})}),e.jsx("td",{className:"flex-1 text-center border border-gray-500",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:l("mainHoldingPage.paymentDetailPeriod.label")})}),e.jsx("td",{className:" text-center  border-l w-48",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:l("mainHoldingPage.paymentAmount.label")})})]}),e.jsxs("tr",{className:"flex text-sm ",children:[e.jsx("td",{className:"text-center w-48"}),e.jsx("td",{className:"flex-1 first-line:text-center border-b border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center border-r border-gray-500",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:l("mainHoldingPage.paymentFromDate.label")})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:l("mainHoldingPage.paymentToDate.label")})})]})}),e.jsx("td",{className:"text-center border-l w-48"})]}),e.jsxs("tr",{className:"flex  text-sm   border-b border-gray-500",children:[e.jsx("td",{className:"text-center w-48 ",children:" "}),e.jsx("td",{className:"flex-1 text-center  border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:l("mainHoldingPage.paymentQToDate.label")})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:l("mainHoldingPage.paymentFToDate.label")})})]})}),e.jsx("td",{className:"flex-1   text-center",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:l("mainHoldingPage.paymentQToDate.label")})}),e.jsx("td",{className:"flex-1 text-center",children:e.jsx("h1",{className:" text-gray-900 font-sans ",children:l("mainHoldingPage.paymentFToDate.label")})})]})})]})}),e.jsx("td",{className:"text-center border-l w-48",children:" "})]})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"flex  border-b border-gray-500  text-sm ",children:[e.jsx("td",{className:" text-center w-48",children:e.jsx("h1",{className:" font-sans font-semibold ",children:l("mainHoldingPage.paymentHoldingtax.label")})}),e.jsx("td",{className:"flex-1 text-center border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold  border-r border-gray-500 text-[0.7rem]",children:n((te=a==null?void 0:a.paymentData)==null?void 0:te.paidFromQtr)})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold  border-r border-gray-500 text-[0.7rem]",children:n((le=a==null?void 0:a.paymentData)==null?void 0:le.paidFrom)})})]})}),e.jsx("td",{className:"flex-1   text-center",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" font-sans font-semibold border-r border-gray-500 text-[0.7rem]",children:n((ne=a==null?void 0:a.paymentData)==null?void 0:ne.paidUptoQtr)})}),e.jsx("td",{className:"flex-1 text-center",children:e.jsx("h1",{className:" font-sans font-semibold text-[0.7rem]",children:n((se=a==null?void 0:a.paymentData)==null?void 0:se.paidUpto)})})]})})]})}),e.jsx("td",{className:"text-center border-l w-48",children:e.jsx("h1",{className:" font-sans font-semibold ",children:D((de=a==null?void 0:a.paymentData)==null?void 0:de.demandAmount)})})]}),(ie=(ce=a==null?void 0:a.paymentData)==null?void 0:ce.taxDetails)==null?void 0:ie.map(s=>e.jsxs("tr",{className:"flex border-b border-gray-500  text-sm ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" font-sans font-semibold ",children:" "})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold"})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold"})})]})}),e.jsx("td",{className:"flex-1 text-right",children:e.jsx("tr",{className:" ",children:e.jsx("td",{className:" ",children:e.jsx("h1",{className:"-ml-16 font-sans font-semibold text-sm pr-2",children:n(s==null?void 0:s.keyString)})})})})]})}),e.jsx("td",{className:" text-center border-l border-gray-500 w-48",children:e.jsx("h1",{className:" font-sans font-semibold ",children:D(s==null?void 0:s.value)})})]}))]})]})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-10 ",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsx("div",{className:"",children:e.jsx($e,{url:window.location.href,size:"64"})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-sm",children:[l("mainHoldingPage.paymentFMD.label")," ",t==null?void 0:t.website]})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-sm",children:[l("mainHoldingPage.paymentCallUs.label")," ",t==null?void 0:t.mobile_no," or ",t==null?void 0:t.mobile_no_2]})})]}),e.jsxs("td",{className:"float-right mt-16",children:[e.jsx("div",{className:"flex ",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-sm",children:l("mainHoldingPage.paymentColTxt.label")})}),e.jsx("div",{className:"flex",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-sm",children:l("mainHoldingPage.paymentAbtTxt.label")})})]})]})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-semibold text-sm text-center ",children:l("mainHoldingPage.paymentAlrtTxt.label")})})})]})})]})}function Ge(){const{paymentId:a,module:d}=Ie();console.log("param payment id ..",a);let c;d=="saf"&&(c="SAF Payment Receipt"),d=="holding"&&(c="Holding Payment Receipt"),d=="cluster-saf"&&(c="Cluster SAF Payment Reciept"),d=="cluster-holding"&&(c="Cluster Holding Payment Reciept"),Be(c);const o=i.useRef(),[h,y]=i.useState();i.useState(!1);const[g,f]=i.useState(!1),[t,l]=i.useState(!1),{api_getPaymentData:u,api_getHoldingReceiptUrl:N,api_getClusterReciept:b}=Le();i.useEffect(()=>{j()},[]);const j=()=>{f(!1),l(!0),window.localStorage.getItem("token");let r,m;d=="holding"&&(r=N,m={tranNo:decodeURIComponent(a)}),d=="saf"&&(r=u,m={tranNo:decodeURIComponent(a)}),(d=="cluster-saf"||d=="cluster-holding")&&(r=b,m={tranNo:decodeURIComponent(a)}),console.log("before fetch payment receipt....",m),Ee.post(r,m,Qe()).then(x=>{console.log("payment data at receipt.....",x),x.data.status?y(x.data.data):f(!0),l(!1)}).catch(x=>{f(!0),l(!1),console.log(x)})};return t?e.jsx(e.Fragment,{children:e.jsx(We,{})}):g?e.jsx(qe,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs("div",{children:[e.jsx(ze,{trigger:()=>e.jsx("button",{}),content:()=>o.current}),e.jsx(Ve,{module:d,ref:o,paymentData:h})]})}export{Ge as default};
