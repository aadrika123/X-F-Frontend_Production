System.register(["./index-legacy-wf7z0cRS.js","./react-legacy-B2uxfrw8.js","./index-legacy-dUenYBrB.js","./OverLayLoader-legacy-pvkGtaRq.js","./module-legacy-HWLg1cBK.js"],(function(n,a){"use strict";var l,d,e,i,o,t,s,u;return{setters:[function(n){l=n.a,d=n.w,e=n.j},function(n){i=n.h,o=n.u,t=n.R},function(n){s=n.P},function(n){u=n.O},null],execute:function(){n("default",(function(){var n,a,v,c,r,m,N,h,x,j,A,p,M,b,y,D,C,T,w,P,f,g,R,F,k,q,W,E,L,S,B,I,K,V,_,O,Y,z,Z,G,H,J,U,X,Q,$,nn,an,ln,dn,en,on,tn,sn,un,vn,cn,rn,mn,Nn,hn,xn=i().id,jn=o(),An=l({api:d.waterPaymentReceipt,config:{tranId:xn},value:[xn],options:{enabled:!!xn}}),pn=An.data,Mn=An.isLoading,bn=t.useCallback((function(){var n,a,l,d,e,i,o,t,s,u,v,c,r;return"Cheque"==(null==pn||null===(n=pn.data)||void 0===n?void 0:n.paymentMode)?"Payment Mode: "+(null==pn||null===(a=pn.data)||void 0===a?void 0:a.paymentMode)+"\nBank Name: "+(null==pn||null===(l=pn.data)||void 0===l?void 0:l.bankName)+"\nBranch Name: "+(null==pn||null===(d=pn.data)||void 0===d?void 0:d.branchName)+"\nCheque no: "+(null==pn||null===(e=pn.data)||void 0===e?void 0:e.chequeNo)+"\nCheque Date: "+(null==pn||null===(i=pn.data)||void 0===i?void 0:i.chequeDate):"DD"==(null==pn||null===(o=pn.data)||void 0===o?void 0:o.paymentMode)?"Payment Mode: "+(null==pn||null===(t=pn.data)||void 0===t?void 0:t.paymentMode)+"\nBank Name: "+(null==pn||null===(s=pn.data)||void 0===s?void 0:s.bankName)+"\nBranch Name: "+(null==pn||null===(u=pn.data)||void 0===u?void 0:u.branchName)+"\nDD No: "+(null==pn||null===(v=pn.data)||void 0===v?void 0:v.chequeNo)+"\nDD Date: "+(null==pn||null===(c=pn.data)||void 0===c?void 0:c.chequeDate):"Payment Mode: "+(null==pn||null===(r=pn.data)||void 0===r?void 0:r.paymentMode)}),[null==pn?void 0:pn.data]),yn="  "+(null==pn||null===(n=pn.data)||void 0===n?void 0:n.ulbName)+"\n[C]WATER USER CHARGE\n[C]PAYMENT RECEIPT\n********************************\nTransaction No : "+(null==pn||null===(a=pn.data)||void 0===a?void 0:a.transactionNo)+"\nReceived From Mr/Mrs/Miss : "+(null==pn||null===(v=pn.data)||void 0===v?void 0:v.customerName)+"\nDepartment/Section : "+(null==pn||null===(c=pn.data)||void 0===c?void 0:c.accountDescription)+"\nAccount Description : "+(null==pn||null===(r=pn.data)||void 0===r?void 0:r.description)+"\nZone : "+(null==pn||null===(m=pn.data)||void 0===m?void 0:m.zoneName)+"\nWard No : "+(null==pn||null===(N=pn.data)||void 0===N?void 0:N.WardNo)+"\nConsumer No: "+(null==pn||null===(h=pn.data)||void 0===h?void 0:h.consumerNo)+"\nDate : "+(null==pn||null===(x=pn.data)||void 0===x?void 0:x.transactionDate)+"\nTransaction Time : "+(null==pn||null===(j=pn.data)||void 0===j?void 0:j.transactionTime)+"\nMobile No : "+(null==pn||null===(A=pn.data)||void 0===A?void 0:A.customerMobile)+"\nAddress : "+(null==pn||null===(p=pn.data)||void 0===p?void 0:p.address)+"\nSession : "+(null==pn||null===(M=pn.data)||void 0===M?void 0:M.session)+"\nPenalty : "+Math.round(null==pn||null===(b=pn.data)||void 0===b?void 0:b.penaltyAmount).toFixed(2)+"\nAdvance Amount : "+Math.round(null==pn||null===(y=pn.data)||void 0===y?void 0:y.advancePaidAmount).toFixed(2)+"\nAdjust Amount : "+Math.round(null==pn||null===(D=pn.data)||void 0===D?void 0:D.adjustAmount).toFixed(2)+"\nDue Amount : "+Math.round(null==pn||null===(C=pn.data)||void 0===C?void 0:C.dueAmount).toFixed(2)+"\nPaid Amount : "+Math.round(null==pn||null===(T=pn.data)||void 0===T?void 0:T.totalPaidAmount).toFixed(2)+"\n(in words) :"+(null==pn||null===(w=pn.data)||void 0===w?void 0:w.paidAmtInWords)+"\nTowards : "+(null==pn||null===(P=pn.data)||void 0===P?void 0:P.towards)+"\n"+bn()+"\nWater Consumed (in K.L.) : "+(null==pn||null===(f=pn.data)||void 0===f?void 0:f.waterConsumed)+"\nLast Meter Reading (in K.L.) : "+(null==pn||null===(g=pn.data)||void 0===g?void 0:g.unitConsumed)+"\n********************************\nTc Name : "+(null==pn||null===(R=pn.data)||void 0===R?void 0:R.empName)+"\nTc Mobile No. : "+(null==pn||null===(F=pn.data)||void 0===F?void 0:F.empMobile)+"\n[C]Thank You!\n[C]For More Details Please\n[C]Visit: "+(null==pn||null===(k=pn.data)||void 0===k?void 0:k.currentWebSite)+"\n********************************\n";return e.jsxs(s,{title:"Payment Receipt",children:[Mn&&e.jsx(u,{}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:" border-dashed text-[14px]  bg-white text-gray-700  border-2 font-Lato  w-full p-3  mt-4 border-gray-700 ",children:e.jsx("div",{className:" text-justify font-poppins ",children:e.jsxs("div",{className:" text-gray-700  text-xs",children:[e.jsx("div",{className:"text-center",children:e.jsx("img",{src:"/amc_icon.png",className:"w-12 mx-auto"})}),e.jsx("div",{className:"text-center  font-semibold uppercase",children:(null==pn||null===(q=pn.data)||void 0===q?void 0:q.ulbName)||"NA"}),e.jsx("div",{className:"text-center text-xs",children:"WATER USER CHARGE"}),e.jsx("div",{className:"text-center text-xs",children:"PAYMENT RECEIPT"}),e.jsxs("div",{className:"mt-4",children:["Transaction No : ",(null==pn||null===(W=pn.data)||void 0===W?void 0:W.transactionNo)||"NA"]}),e.jsxs("div",{className:"",children:["Received From Mr/Mrs/Miss : ",(null==pn||null===(E=pn.data)||void 0===E?void 0:E.customerName)||"NA"]}),e.jsxs("div",{className:"",children:["Department/Section : ",(null==pn||null===(L=pn.data)||void 0===L?void 0:L.accountDescription)||"NA"]}),e.jsxs("div",{className:"",children:["Account Description : ",(null==pn||null===(S=pn.data)||void 0===S?void 0:S.description)||"NA"]}),e.jsxs("div",{className:"",children:["Zone : ",(null==pn||null===(B=pn.data)||void 0===B?void 0:B.zoneName)||"NA"]}),e.jsxs("div",{className:"",children:["Ward No : ",(null==pn||null===(I=pn.data)||void 0===I?void 0:I.WardNo)||"NA"]}),e.jsxs("div",{className:"",children:["Consumer No: ",null==pn||null===(K=pn.data)||void 0===K?void 0:K.consumerNo]}),e.jsxs("div",{className:"",children:["Date : ",null==pn||null===(V=pn.data)||void 0===V?void 0:V.transactionDate]}),e.jsxs("div",{className:"",children:["Transaction Time : ",null==pn||null===(_=pn.data)||void 0===_?void 0:_.transactionTime]}),e.jsxs("div",{className:"",children:["Mobile No : ",(null==pn||null===(O=pn.data)||void 0===O?void 0:O.customerMobile)||"NA"]}),e.jsxs("div",{className:"",children:["Address : ",null==pn||null===(Y=pn.data)||void 0===Y?void 0:Y.address]}),e.jsxs("div",{className:"w-80",children:["Session : ",(null==pn||null===(z=pn.data)||void 0===z?void 0:z.session)||"NA"]}),e.jsxs("div",{className:"",children:["Penalty :"," ",Math.round(null==pn||null===(Z=pn.data)||void 0===Z?void 0:Z.penaltyAmount).toFixed(2)||"NA"]}),e.jsxs("div",{className:"",children:["Advance Amount :"," ",Math.round(null==pn||null===(G=pn.data)||void 0===G?void 0:G.advancePaidAmount).toFixed(2)||"NA"]}),e.jsxs("div",{className:"",children:["Adjust Amount :"," ",Math.round(null==pn||null===(H=pn.data)||void 0===H?void 0:H.adjustAmount).toFixed(2)||"NA"]}),e.jsxs("div",{className:"",children:["Paid Amount :"," ",Math.round(null==pn||null===(J=pn.data)||void 0===J?void 0:J.totalPaidAmount).toFixed(2)||"NA"]}),e.jsxs("div",{className:"",children:["(in words) :",(null==pn||null===(U=pn.data)||void 0===U?void 0:U.paidAmtInWords)||"NA"]}),e.jsxs("div",{className:"",children:["Due Amount :"," ",Math.round(null==pn||null===(X=pn.data)||void 0===X?void 0:X.dueAmount).toFixed(2)||"NA"]}),e.jsxs("div",{className:"",children:["Towards :"," ",null==pn||null===(Q=pn.data)||void 0===Q?void 0:Q.towards]}),e.jsxs("div",{className:"",children:["Vide : ",null==pn||null===($=pn.data)||void 0===$?void 0:$.paymentMode]}),e.jsxs("div",{className:"w-80",children:["Water Consumed (in K.L.) : ",(null==pn||null===(nn=pn.data)||void 0===nn?void 0:nn.waterConsumed)||"NA"]}),e.jsxs("div",{className:"w-80",children:["Last Meter Reading (in K.L.) :"," ",(null==pn||null===(an=pn.data)||void 0===an?void 0:an.unitConsumed)||"NA"]}),"Cheque"==(null==pn||null===(ln=pn.data)||void 0===ln?void 0:ln.paymentMode)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"",children:["Bank name : ",(null==pn||null===(dn=pn.data)||void 0===dn?void 0:dn.bankName)||"NA"]}),e.jsxs("div",{className:"",children:["Branch name : ",(null==pn||null===(en=pn.data)||void 0===en?void 0:en.branchName)||"NA"]}),e.jsxs("div",{className:"",children:["Cheque no. : ",(null==pn||null===(on=pn.data)||void 0===on?void 0:on.chequeNo)||"NA"]}),e.jsxs("div",{className:"",children:["Cheque date : ",(null==pn||null===(tn=pn.data)||void 0===tn?void 0:tn.chequeDate)||"NA"]})]}),"DD"==(null==pn||null===(sn=pn.data)||void 0===sn?void 0:sn.paymentMode)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"",children:["Bank name : ",(null==pn||null===(un=pn.data)||void 0===un?void 0:un.bank_name)||"NA"]}),e.jsxs("div",{className:"",children:["Branch name : ",(null==pn||null===(vn=pn.data)||void 0===vn?void 0:vn.branchName)||"NA"]}),e.jsxs("div",{className:"",children:["DD No. : ",(null==pn||null===(cn=pn.data)||void 0===cn?void 0:cn.chequeNo)||"NA"]}),e.jsxs("div",{className:"",children:["DD Date : ",(null==pn||null===(rn=pn.data)||void 0===rn?void 0:rn.chequeDate)||"NA"]})]}),e.jsx("div",{className:"text-center mt-2",children:"****************************************************"}),e.jsxs("div",{className:"",children:["Tc Name : ",null==pn||null===(mn=pn.data)||void 0===mn?void 0:mn.empName]}),e.jsxs("div",{className:"",children:["Tc Mobile No. : ",null==pn||null===(Nn=pn.data)||void 0===Nn?void 0:Nn.empMobile]}),e.jsx("div",{className:"text-center font-semibold capitalize mt-6",children:"Thank You!"}),e.jsx("div",{className:"text-center font-semibold  ",children:"For More Details Please"}),e.jsxs("div",{className:"text-center font-semibold  ",children:["Visit: ",(null==pn||null===(hn=pn.data)||void 0===hn?void 0:hn.currentWebSite)||"NA"]})]})})}),e.jsxs("div",{className:"text-center mt-4 flex justify-center items-center gap-4",children:[e.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:function(){return jn("/amc-app/water/search-consumer")},children:"Search Consumer"}),e.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:function(){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:yn}}))},children:"Print"})]})]})]})}))}}}));
