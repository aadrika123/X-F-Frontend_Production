import{d as B,r as d,A,a as E,j as s}from"./index-rmoyC0bM.js";import{n as i}from"./PowerupFunctions-B3zerblM.js";import{R as L}from"./RentalApiList-Bp8kyXwe.js";import{L as I}from"./Loader-47fEru2t.js";function O(){var r,n,h,x,N,u,j,v;const{id:o}=B();console.log("id...",o);const{api_getShopReceiptData:k}=L(),[e,P]=d.useState(),[C,l]=d.useState(!1);d.useEffect(()=>{w()},[o]);const w=()=>{const b={tranId:o};A.post("".concat(k),b,E()).then(c=>{console.log("payment data 2",c.data.data),c.data.status&&P(c.data.data),l(!1)}).catch(c=>{console.log(c),l(!1)})},F=d.useCallback(()=>{var c,q,f,g,M,_,T,R;return(e==null?void 0:e.paymentMode)==="CHEQUE"?"Payment Mode: "+(e==null?void 0:e.paymentMode)+"\nBank Name: "+((c=e==null?void 0:e.chequeDetails)==null?void 0:c.bank_name)+"\nBranch Name: "+((q=e==null?void 0:e.chequeDetails)==null?void 0:q.branch_name)+"\nCheque no: "+((f=e==null?void 0:e.chequeDetails)==null?void 0:f.cheque_no)+"\nCheque Date: "+((g=e==null?void 0:e.chequeDetails)==null?void 0:g.cheque_date):(e==null?void 0:e.paymentMode)==="DD"?"Payment Mode: "+(e==null?void 0:e.paymentMode)+"\nBank Name: "+((M=e==null?void 0:e.ddDetails)==null?void 0:M.bank_name)+"\nBranch Name: "+((_=e==null?void 0:e.ddDetails)==null?void 0:_.branch_name)+"\nDD No: "+((T=e==null?void 0:e.ddDetails)==null?void 0:T.dd_no)+"\nDD Date: "+((R=e==null?void 0:e.ddDetails)==null?void 0:R.cheque_date):"Payment Mode: "+(e==null?void 0:e.paymentMode)},[e]),S="  "+(e==null?void 0:e.ulbName)+"\n[C]Municipal Rental Receipt\n \n******************************* \nTransaction Date: "+(e==null?void 0:e.paymentDate)+"\nAllottee Name: "+(e==null?void 0:e.allottee)+"\nMarket: "+(e==null?void 0:e.market)+"\nShop No: "+(e==null?void 0:e.shopNo)+"\nShop Category: "+(e==null?void 0:e.shopType)+"\nFinancial Year from: "+(e==null?void 0:e.paidFrom)+"\nFinancial Year to: "+(e==null?void 0:e.paidTo)+"\nAmount: "+(e==null?void 0:e.amount)+"\n(In words): "+(e==null?void 0:e.amountInWords)+"\n"+F()+"\nPayment Status: "+(e==null?void 0:e.paymentStatus)+"\n*******************************\nTc Name: "+(e==null?void 0:e.receiverName)+"\nTc Mobile: "+(e==null?void 0:e.receiverMobile)+"\n \n******************************* \n[C]For Details Please Visit: \n[C]"+(e==null?void 0:e.website)+" \n[C]"+(e==null?void 0:e.tollFreeNo)+"\n\n\n\n\n",m=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:S}}))};return s.jsxs(s.Fragment,{children:[C&&s.jsx(I,{}),s.jsx("button",{className:"bg-sky-500 px-3 py-1 text-xs  text-white ",onClick:()=>m(),children:"Print Receipt"}),s.jsx("div",{className:" border-dashed text-[14px]  bg-white text-gray-700  border-2 font-Lato  w-[22rem] p-3 ml-5 mt-4 border-gray-700 ",children:s.jsx("div",{className:" text-justify font-poppins ",children:s.jsxs("div",{className:" text-gray-700  text-xs",children:[s.jsx("div",{className:"text-center",children:s.jsx("img",{src:e==null?void 0:e.ulbLogo,className:"w-12 mx-auto"})}),s.jsx("div",{className:"text-center  font-semibold",children:i(e==null?void 0:e.ulbName)}),s.jsx("div",{className:"text-center ",children:"Municipal Rental Receipt"}),s.jsxs("div",{className:"mt-4",children:["Transcation date : ",i(e==null?void 0:e.paymentDate)]}),s.jsxs("div",{className:"",children:["Transcation no. : ",i(e==null?void 0:e.transactionNo)]}),s.jsxs("div",{className:"",children:["Allottee name : ",i(e==null?void 0:e.allottee)]}),s.jsxs("div",{className:"",children:["Market : ",i(e==null?void 0:e.market)]}),s.jsxs("div",{className:"",children:["Shop no : ",i(e==null?void 0:e.shopNo)]}),s.jsxs("div",{className:"",children:["Shop category : ",i(e==null?void 0:e.shopType)]}),s.jsxs("div",{className:"",children:["Payment date from : ",i(e==null?void 0:e.paidFrom)]}),s.jsxs("div",{className:"",children:["Payment date to : ",i(e==null?void 0:e.paidTo)]}),s.jsxs("div",{className:"",children:["Amount : ",i(e==null?void 0:e.amount)]}),s.jsxs("div",{className:"",children:["(in words) : ",i(e==null?void 0:e.amountInWords)]}),s.jsxs("div",{className:"",children:["Payment mode : ",i(e==null?void 0:e.paymentMode)]}),(e==null?void 0:e.paymentMode)=="CHEQUE"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"",children:["Bank name : ",i((r=e==null?void 0:e.chequeDetails)==null?void 0:r.bank_name)]}),s.jsxs("div",{className:"",children:["Branch name :"," ",i((n=e==null?void 0:e.chequeDetails)==null?void 0:n.branch_name)]}),s.jsxs("div",{className:"",children:["Cheque no. : ",i((h=e==null?void 0:e.chequeDetails)==null?void 0:h.cheque_no)]}),s.jsxs("div",{className:"",children:["Cheque date :"," ",i((x=e==null?void 0:e.chequeDetails)==null?void 0:x.cheque_date)]})]}),(e==null?void 0:e.paymentMode)=="DD"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"",children:["Bank name : ",i((N=e==null?void 0:e.chequeDetails)==null?void 0:N.bank_name)]}),s.jsxs("div",{className:"",children:["Branch name :"," ",i((u=e==null?void 0:e.chequeDetails)==null?void 0:u.branch_name)]}),s.jsxs("div",{className:"",children:["Cheque no. : ",i((j=e==null?void 0:e.chequeDetails)==null?void 0:j.dd_no)]}),s.jsxs("div",{className:"",children:["Cheque date :"," ",i((v=e==null?void 0:e.chequeDetails)==null?void 0:v.cheque_date)]})]}),s.jsxs("div",{className:"",children:["Payment status : ",i(e==null?void 0:e.paymentStatus)]}),s.jsx("div",{className:"text-center mt-2",children:"****************************************************"}),s.jsxs("div",{className:"",children:["Tc name : ",i(e==null?void 0:e.receiverName)]}),s.jsxs("div",{className:"",children:["Tc mobile no. : ",i(e==null?void 0:e.receiverMobile)]}),s.jsx("div",{className:"text-center font-semibold capitalize mt-6",children:"For details please visit"}),s.jsx("div",{className:"text-center font-semibold  ",children:i(e==null?void 0:e.website)}),s.jsx("div",{className:"text-center font-semibold  ",children:i(e==null?void 0:e.tollFreeNo)})]})})})]})}export{O as default};
