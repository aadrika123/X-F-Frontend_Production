System.register(["./index-legacy-A0cwD52i.js","./router-legacy-_t8Mc_yw.js","./index-legacy-FuK9TT_G.js","./reactQuery-legacy-820C8VGY.js","./axios-legacy-rH2Rcf5_.js","./tailwind-legacy-Afc9ICbc.js","./reactIcons-legacy-v-aafSOk.js","./headlessui-legacy-MZogm2kK.js"],(function(l,a){"use strict";var d,n,e,i,t,o,u;return{setters:[function(l){d=l.c,n=l.m,e=l.j,i=l.i},function(l){t=l.f,o=l.r},function(l){u=l.P},null,null,null,null,null],execute:function(){l("default",(function(){var l,a,s,v,c,r,m,h,x,N,j,y,p,b,D,f,g,q,M,_,P,w,k,C,T,R,F,S,B,I,L,E,A,W,Q,U,V,H,O,Y,z,J,K,G,X=t(),Z=new URLSearchParams(null==X?void 0:X.search).get("tran-id"),$=d({api:null===(l=n)||void 0===l?void 0:l.shopPaymentReceipt,config:{tranId:Z},options:{enabled:!!Z}}),ll=o.useCallback((function(){var l,a,d,n,e,i,t,o,u,s,v,c,r;return"CHEQUE"===(null==$||null===(l=$.data)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.paymentMode)?"Payment Mode: "+(null==$||null===(a=$.data)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.paymentMode)+"\nBank Name: "+(null==$||null===(d=$.data)||void 0===d||null===(d=d.data)||void 0===d||null===(d=d.chequeDetails)||void 0===d?void 0:d.bank_name)+"\nBranch Name: "+(null==$||null===(n=$.data)||void 0===n||null===(n=n.data)||void 0===n||null===(n=n.chequeDetails)||void 0===n?void 0:n.branch_name)+"\nCheque no: "+(null==$||null===(e=$.data)||void 0===e||null===(e=e.data)||void 0===e||null===(e=e.chequeDetails)||void 0===e?void 0:e.cheque_no)+"\nCheque Date: "+(null==$||null===(i=$.data)||void 0===i||null===(i=i.data)||void 0===i||null===(i=i.chequeDetails)||void 0===i?void 0:i.cheque_date):"DD"===(null==$||null===(t=$.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.paymentMode)?"Payment Mode: "+(null==$||null===(o=$.data)||void 0===o||null===(o=o.data)||void 0===o?void 0:o.paymentMode)+"\nBank Name: "+(null==$||null===(u=$.data)||void 0===u||null===(u=u.data)||void 0===u||null===(u=u.ddDetails)||void 0===u?void 0:u.bank_name)+"\nBranch Name: "+(null==$||null===(s=$.data)||void 0===s||null===(s=s.data)||void 0===s||null===(s=s.ddDetails)||void 0===s?void 0:s.branch_name)+"\nDD No: "+(null==$||null===(v=$.data)||void 0===v||null===(v=v.data)||void 0===v||null===(v=v.ddDetails)||void 0===v?void 0:v.dd_no)+"\nDD Date: "+(null==$||null===(c=$.data)||void 0===c||null===(c=c.data)||void 0===c||null===(c=c.ddDetails)||void 0===c?void 0:c.cheque_date):"Payment Mode: "+(null==$||null===(r=$.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.paymentMode)}),[$]),al="  "+(null==$||null===(a=$.data)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.ulbName)+"\n[C]Municipal Rental Receipt\n \n******************************* \nTransaction Date: "+(null==$||null===(s=$.data)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.paymentDate)+"\nAllottee Name: "+(null==$||null===(v=$.data)||void 0===v||null===(v=v.data)||void 0===v?void 0:v.allottee)+"\nMarket: "+(null==$||null===(c=$.data)||void 0===c||null===(c=c.data)||void 0===c?void 0:c.market)+"\nShop No: "+(null==$||null===(r=$.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.shopNo)+"\nShop Category: "+(null==$||null===(m=$.data)||void 0===m||null===(m=m.data)||void 0===m?void 0:m.shopType)+"\nFinancial Year from: "+(null==$||null===(h=$.data)||void 0===h||null===(h=h.data)||void 0===h?void 0:h.paidFrom)+"\nFinancial Year to: "+(null==$||null===(x=$.data)||void 0===x||null===(x=x.data)||void 0===x?void 0:x.paidTo)+"\nAmount: "+(null==$||null===(N=$.data)||void 0===N||null===(N=N.data)||void 0===N?void 0:N.amount)+"\n(In words): "+(null==$||null===(j=$.data)||void 0===j||null===(j=j.data)||void 0===j?void 0:j.amountInWords)+"\n"+ll()+"\nPayment Status: "+(null==$||null===(y=$.data)||void 0===y||null===(y=y.data)||void 0===y?void 0:y.paymentStatus)+"\n*******************************\nTc Name: "+(null==$||null===(p=$.data)||void 0===p||null===(p=p.data)||void 0===p?void 0:p.receiverName)+"\nTc Mobile: "+(null==$||null===(b=$.data)||void 0===b||null===(b=b.data)||void 0===b?void 0:b.receiverMobile)+"\n \n******************************* \n[C]For Details Please Visit: \n[C]"+(null==$||null===(D=$.data)||void 0===D||null===(D=D.data)||void 0===D?void 0:D.website)+" \n[C]"+(null==$||null===(f=$.data)||void 0===f||null===(f=f.data)||void 0===f?void 0:f.tollFreeNo)+"\n\n\n\n\n";return $.isLoading?e.jsx("div",{className:"flex justify-center items-center h-screen",children:e.jsx("div",{className:"loader",children:"Loading..."})}):e.jsxs(u,{title:"Payment Receipt",children:[e.jsxs("div",{className:"flex justify-center mt-4",children:[e.jsx("h1",{className:"text-center font-semibold",children:"Payment Receipt"}),e.jsx("div",{className:"text-center font-semibold"})]}),e.jsx("div",{className:" border-dashed text-[14px]  bg-white text-gray-700  border-2 font-Lato  w-[22rem] p-3 ml-5 mt-4 border-gray-700 ",children:e.jsx("div",{className:" text-justify font-poppins ",children:e.jsxs("div",{className:" text-gray-700  text-xs",children:[e.jsx("div",{className:"text-center",children:e.jsx(i,{src:null==$||null===(g=$.data)||void 0===g||null===(g=g.data)||void 0===g?void 0:g.ulbLogo,className:"w-12 mx-auto"})}),e.jsx("div",{className:"text-center  font-semibold",children:null==$||null===(q=$.data)||void 0===q||null===(q=q.data)||void 0===q?void 0:q.ulbName}),e.jsx("div",{className:"text-center ",children:"Municipal Rental Receipt"}),e.jsxs("div",{className:"mt-4",children:["Transcation date : ",null==$||null===(M=$.data)||void 0===M||null===(M=M.data)||void 0===M?void 0:M.paymentDate]}),e.jsxs("div",{className:"",children:["Transcation no. : ",null==$||null===(_=$.data)||void 0===_||null===(_=_.data)||void 0===_?void 0:_.transactionNo]}),e.jsxs("div",{className:"",children:["Allottee name : ",null==$||null===(P=$.data)||void 0===P||null===(P=P.data)||void 0===P?void 0:P.allottee]}),e.jsxs("div",{className:"",children:["Market : ",null==$||null===(w=$.data)||void 0===w||null===(w=w.data)||void 0===w?void 0:w.market]}),e.jsxs("div",{className:"",children:["Shop no : ",null==$||null===(k=$.data)||void 0===k||null===(k=k.data)||void 0===k?void 0:k.shopNo]}),e.jsxs("div",{className:"",children:["Shop category : ",null==$||null===(C=$.data)||void 0===C||null===(C=C.data)||void 0===C?void 0:C.shopType]}),e.jsxs("div",{className:"",children:["Payment date from : ",null==$||null===(T=$.data)||void 0===T||null===(T=T.data)||void 0===T?void 0:T.paidFrom]}),e.jsxs("div",{className:"",children:["Payment date to : ",null==$||null===(R=$.data)||void 0===R||null===(R=R.data)||void 0===R?void 0:R.paidTo]}),e.jsxs("div",{className:"",children:["Amount : ",null==$||null===(F=$.data)||void 0===F||null===(F=F.data)||void 0===F?void 0:F.amount]}),e.jsxs("div",{className:"",children:["(in words) : ",null==$||null===(S=$.data)||void 0===S||null===(S=S.data)||void 0===S?void 0:S.amountInWords]}),e.jsxs("div",{className:"",children:["Payment mode : ",null==$||null===(B=$.data)||void 0===B||null===(B=B.data)||void 0===B?void 0:B.paymentMode]}),"CHEQUE"==(null==$||null===(I=$.data)||void 0===I||null===(I=I.data)||void 0===I?void 0:I.paymentMode)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"",children:["Bank name :"," ",null==$||null===(L=$.data)||void 0===L||null===(L=L.data)||void 0===L||null===(L=L.chequeDetails)||void 0===L?void 0:L.bank_name]}),e.jsxs("div",{className:"",children:["Branch name :"," ",null==$||null===(E=$.data)||void 0===E||null===(E=E.data)||void 0===E||null===(E=E.chequeDetails)||void 0===E?void 0:E.branch_name]}),e.jsxs("div",{className:"",children:["Cheque no. :"," ",null==$||null===(A=$.data)||void 0===A||null===(A=A.data)||void 0===A||null===(A=A.chequeDetails)||void 0===A?void 0:A.cheque_no]}),e.jsxs("div",{className:"",children:["Cheque date :"," ",null==$||null===(W=$.data)||void 0===W||null===(W=W.data)||void 0===W||null===(W=W.chequeDetails)||void 0===W?void 0:W.cheque_date]})]}),"DD"==(null==$||null===(Q=$.data)||void 0===Q||null===(Q=Q.data)||void 0===Q?void 0:Q.paymentMode)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"",children:["Bank name :"," ",null==$||null===(U=$.data)||void 0===U||null===(U=U.data)||void 0===U||null===(U=U.chequeDetails)||void 0===U?void 0:U.bank_name]}),e.jsxs("div",{className:"",children:["Branch name :"," ",null==$||null===(V=$.data)||void 0===V||null===(V=V.data)||void 0===V||null===(V=V.chequeDetails)||void 0===V?void 0:V.branch_name]}),e.jsxs("div",{className:"",children:["Cheque no. : ",null==$||null===(H=$.data)||void 0===H||null===(H=H.data)||void 0===H||null===(H=H.chequeDetails)||void 0===H?void 0:H.dd_no]}),e.jsxs("div",{className:"",children:["Cheque date :"," ",null==$||null===(O=$.data)||void 0===O||null===(O=O.data)||void 0===O||null===(O=O.chequeDetails)||void 0===O?void 0:O.cheque_date]})]}),e.jsxs("div",{className:"",children:["Payment status : ",null==$||null===(Y=$.data)||void 0===Y||null===(Y=Y.data)||void 0===Y?void 0:Y.paymentStatus]}),e.jsx("div",{className:"text-center mt-2",children:"****************************************************"}),e.jsxs("div",{className:"",children:["Tc name : ",null==$||null===(z=$.data)||void 0===z||null===(z=z.data)||void 0===z?void 0:z.receiverName]}),e.jsxs("div",{className:"",children:["Tc mobile no. : ",null==$||null===(J=$.data)||void 0===J||null===(J=J.data)||void 0===J?void 0:J.receiverMobile]}),e.jsx("div",{className:"text-center font-semibold capitalize mt-6",children:"For details please visit"}),e.jsx("div",{className:"text-center font-semibold  ",children:null==$||null===(K=$.data)||void 0===K||null===(K=K.data)||void 0===K?void 0:K.website}),e.jsx("div",{className:"text-center font-semibold  ",children:null==$||null===(G=$.data)||void 0===G||null===(G=G.data)||void 0===G?void 0:G.tollFreeNo})]})})}),e.jsx("div",{className:"flex justify-center mt-4",children:e.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:function(){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:al}}))},children:"Print"})})]})}))}}}));
