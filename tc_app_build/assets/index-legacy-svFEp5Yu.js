System.register(["./index-legacy-zVv7LN3D.js","./router-legacy-d7mQ5O4E.js","./moment-legacy-tjrIIMAh.js","./index-legacy-CDybzcQc.js","./OverLayLoader-legacy-fuZ6nhd4.js","./reactQuery-legacy-CGVy-x5i.js","./axios-legacy-rH2Rcf5_.js","./tailwind-legacy-wJ_Ag7Dp.js","./reactIcons-legacy-5CyayZ_y.js","./headlessui-legacy-yLFhCrEc.js","./module-legacy-Anf9W0e5.js"],(function(l,n){"use strict";var a,d,e,i,o,t,s,u;return{setters:[function(l){a=l.c,d=l.f,e=l.j},function(l){i=l.e,o=l.u,t=l.d},null,function(l){s=l.P},function(l){u=l.O},null,null,null,null,null,null],execute:function(){l("default",(function(){var l,n,c,v,r,m,N,x,h,j,A,p,M,y,b,D,g,C,T,w,f,P,R,F,k,q,W,E,L,S,B,I,z,K,V,_,O,Y,G,H,U,Z,J,Q,X,$,ll,nl,al,dl,el,il,ol,tl,sl,ul,cl,vl,rl,ml,Nl,xl=i().id,hl=o(),jl=a({api:d.waterPaymentReceipt,config:{tranId:xl},value:[xl],options:{enabled:!!xl}}),Al=jl.data,pl=jl.isLoading,Ml=t.useCallback((function(){var l,n,a,d,e,i,o,t,s,u,c,v,r;return"Cheque"==(null==Al||null===(l=Al.data)||void 0===l?void 0:l.paymentMode)?"Payment Mode: "+(null==Al||null===(n=Al.data)||void 0===n?void 0:n.paymentMode)+"\nBank Name: "+(null==Al||null===(a=Al.data)||void 0===a?void 0:a.bankName)+"\nBranch Name: "+(null==Al||null===(d=Al.data)||void 0===d?void 0:d.branchName)+"\nCheque no: "+(null==Al||null===(e=Al.data)||void 0===e?void 0:e.chequeNo)+"\nCheque Date: "+(null==Al||null===(i=Al.data)||void 0===i?void 0:i.chequeDate):"DD"==(null==Al||null===(o=Al.data)||void 0===o?void 0:o.paymentMode)?"Payment Mode: "+(null==Al||null===(t=Al.data)||void 0===t?void 0:t.paymentMode)+"\nBank Name: "+(null==Al||null===(s=Al.data)||void 0===s?void 0:s.bankName)+"\nBranch Name: "+(null==Al||null===(u=Al.data)||void 0===u?void 0:u.branchName)+"\nDD No: "+(null==Al||null===(c=Al.data)||void 0===c?void 0:c.chequeNo)+"\nDD Date: "+(null==Al||null===(v=Al.data)||void 0===v?void 0:v.chequeDate):"Payment Mode: "+(null==Al||null===(r=Al.data)||void 0===r?void 0:r.paymentMode)}),[null==Al?void 0:Al.data]),yl="  "+(null==Al||null===(l=Al.data)||void 0===l?void 0:l.ulbName)+"\n[C]WATER USER CHARGE\n[C]PAYMENT RECEIPT\n********************************\nTransaction No : "+(null==Al||null===(n=Al.data)||void 0===n?void 0:n.transactionNo)+"\nReceived From Mr/Mrs/Miss : "+(null==Al||null===(c=Al.data)||void 0===c?void 0:c.customerName)+"\nDepartment/Section : "+(null==Al||null===(v=Al.data)||void 0===v?void 0:v.accountDescription)+"\nAccount Description : "+(null==Al||null===(r=Al.data)||void 0===r?void 0:r.description)+"\nZone : "+(null==Al||null===(m=Al.data)||void 0===m?void 0:m.zoneName)+"\nWard No : "+(null==Al||null===(N=Al.data)||void 0===N?void 0:N.WardNo)+"\nConsumer No: "+(null==Al||null===(x=Al.data)||void 0===x?void 0:x.consumerNo)+"\nDate : "+(null==Al||null===(h=Al.data)||void 0===h?void 0:h.transactionDate)+"\nTransaction Time : "+(null==Al||null===(j=Al.data)||void 0===j?void 0:j.transactionTime)+"\nMobile No : "+(null==Al||null===(A=Al.data)||void 0===A?void 0:A.customerMobile)+"\nAddress : "+(null==Al||null===(p=Al.data)||void 0===p?void 0:p.address)+"\nSession : "+(null==Al||null===(M=Al.data)||void 0===M?void 0:M.session)+"\nPenalty : "+Math.round(null==Al||null===(y=Al.data)||void 0===y?void 0:y.penaltyAmount).toFixed(2)+"\nAdvance Amount : "+Math.round(null==Al||null===(b=Al.data)||void 0===b?void 0:b.advancePaidAmount).toFixed(2)+"\nAdjust Amount : "+Math.round(null==Al||null===(D=Al.data)||void 0===D?void 0:D.adjustAmount).toFixed(2)+"\nDue Amount : "+Math.round(null==Al||null===(g=Al.data)||void 0===g?void 0:g.dueAmount).toFixed(2)+"\nPaid Amount : "+Math.round(null==Al||null===(C=Al.data)||void 0===C?void 0:C.totalPaidAmount).toFixed(2)+"\n(in words) :"+(null==Al||null===(T=Al.data)||void 0===T?void 0:T.paidAmtInWords)+"\nTowards : "+(null==Al||null===(w=Al.data)||void 0===w?void 0:w.towards)+"\n"+Ml()+"\nWater Consumed (in K.L.) : "+(null==Al||null===(f=Al.data)||void 0===f?void 0:f.waterConsumed)+"\nLast Meter Reading (in K.L.) : "+(null==Al||null===(P=Al.data)||void 0===P?void 0:P.unitConsumed)+"\n********************************\nTc Name : "+(null==Al||null===(R=Al.data)||void 0===R?void 0:R.empName)+"\nTc Mobile No. : "+(null==Al||null===(F=Al.data)||void 0===F?void 0:F.empMobile)+"\n[C]Thank You!\n[C]For More Details Please\n[C]Visit: "+(null==Al||null===(k=Al.data)||void 0===k?void 0:k.currentWebSite)+"\n********************************\n";return e.jsxs(s,{title:"Payment Receipt",children:[pl&&e.jsx(u,{}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:" border-dashed text-[14px]  bg-white text-gray-700  border-2 font-Lato  w-full p-3  mt-4 border-gray-700 ",children:e.jsx("div",{className:" text-justify font-poppins ",children:e.jsxs("div",{className:" text-gray-700  text-xs",children:[e.jsx("div",{className:"text-center",children:e.jsx("img",{src:"/amc_icon.png",className:"w-12 mx-auto",alt:"Akola Municipal Corporation",loading:"lazy"})}),e.jsx("div",{className:"text-center  font-semibold uppercase",children:(null==Al||null===(q=Al.data)||void 0===q?void 0:q.ulbName)||"NA"}),e.jsx("div",{className:"text-center text-xs",children:"WATER USER CHARGE"}),e.jsx("div",{className:"text-center text-xs",children:"PAYMENT RECEIPT"}),e.jsxs("div",{className:"mt-4",children:["Transaction No : ",(null==Al||null===(W=Al.data)||void 0===W?void 0:W.transactionNo)||"NA"]}),e.jsxs("div",{className:"",children:["Received From Mr/Mrs/Miss : ",(null==Al||null===(E=Al.data)||void 0===E?void 0:E.customerName)||"NA"]}),e.jsxs("div",{className:"",children:["Department/Section : ",(null==Al||null===(L=Al.data)||void 0===L?void 0:L.accountDescription)||"NA"]}),e.jsxs("div",{className:"",children:["Account Description : ",(null==Al||null===(S=Al.data)||void 0===S?void 0:S.description)||"NA"]}),e.jsxs("div",{className:"",children:["Zone : ",(null==Al||null===(B=Al.data)||void 0===B?void 0:B.zoneName)||"NA"]}),e.jsxs("div",{className:"",children:["Ward No : ",(null==Al||null===(I=Al.data)||void 0===I?void 0:I.WardNo)||"NA"]}),e.jsxs("div",{className:"",children:["Consumer No: ",null==Al||null===(z=Al.data)||void 0===z?void 0:z.consumerNo]}),e.jsxs("div",{className:"",children:["Date : ",null==Al||null===(K=Al.data)||void 0===K?void 0:K.transactionDate]}),e.jsxs("div",{className:"",children:["Transaction Time : ",null==Al||null===(V=Al.data)||void 0===V?void 0:V.transactionTime]}),e.jsxs("div",{className:"",children:["Mobile No : ",(null==Al||null===(_=Al.data)||void 0===_?void 0:_.customerMobile)||"NA"]}),e.jsxs("div",{className:"",children:["Address : ",null==Al||null===(O=Al.data)||void 0===O?void 0:O.address]}),e.jsxs("div",{className:"w-80",children:["Session : ",(null==Al||null===(Y=Al.data)||void 0===Y?void 0:Y.session)||"NA"]}),e.jsxs("div",{className:"",children:["Penalty :"," ",Math.round(null==Al||null===(G=Al.data)||void 0===G?void 0:G.penaltyAmount).toFixed(2)||"NA"]}),e.jsxs("div",{className:"",children:["Advance Amount :"," ",Math.round(null==Al||null===(H=Al.data)||void 0===H?void 0:H.advancePaidAmount).toFixed(2)||"NA"]}),e.jsxs("div",{className:"",children:["Adjust Amount :"," ",Math.round(null==Al||null===(U=Al.data)||void 0===U?void 0:U.adjustAmount).toFixed(2)||"NA"]}),e.jsxs("div",{className:"",children:["Paid Amount :"," ",Math.round(null==Al||null===(Z=Al.data)||void 0===Z?void 0:Z.totalPaidAmount).toFixed(2)||"NA"]}),e.jsxs("div",{className:"",children:["(in words) :",(null==Al||null===(J=Al.data)||void 0===J?void 0:J.paidAmtInWords)||"NA"]}),e.jsxs("div",{className:"",children:["Due Amount :"," ",Math.round(null==Al||null===(Q=Al.data)||void 0===Q?void 0:Q.dueAmount).toFixed(2)||"NA"]}),e.jsxs("div",{className:"",children:["Towards :"," ",null==Al||null===(X=Al.data)||void 0===X?void 0:X.towards]}),e.jsxs("div",{className:"",children:["Vide : ",null==Al||null===($=Al.data)||void 0===$?void 0:$.paymentMode]}),e.jsxs("div",{className:"w-80",children:["Water Consumed (in K.L.) : ",(null==Al||null===(ll=Al.data)||void 0===ll?void 0:ll.waterConsumed)||"NA"]}),e.jsxs("div",{className:"w-80",children:["Last Meter Reading (in K.L.) :"," ",(null==Al||null===(nl=Al.data)||void 0===nl?void 0:nl.unitConsumed)||"NA"]}),"Cheque"==(null==Al||null===(al=Al.data)||void 0===al?void 0:al.paymentMode)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"",children:["Bank name : ",(null==Al||null===(dl=Al.data)||void 0===dl?void 0:dl.bankName)||"NA"]}),e.jsxs("div",{className:"",children:["Branch name : ",(null==Al||null===(el=Al.data)||void 0===el?void 0:el.branchName)||"NA"]}),e.jsxs("div",{className:"",children:["Cheque no. : ",(null==Al||null===(il=Al.data)||void 0===il?void 0:il.chequeNo)||"NA"]}),e.jsxs("div",{className:"",children:["Cheque date : ",(null==Al||null===(ol=Al.data)||void 0===ol?void 0:ol.chequeDate)||"NA"]})]}),"DD"==(null==Al||null===(tl=Al.data)||void 0===tl?void 0:tl.paymentMode)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"",children:["Bank name : ",(null==Al||null===(sl=Al.data)||void 0===sl?void 0:sl.bank_name)||"NA"]}),e.jsxs("div",{className:"",children:["Branch name : ",(null==Al||null===(ul=Al.data)||void 0===ul?void 0:ul.branchName)||"NA"]}),e.jsxs("div",{className:"",children:["DD No. : ",(null==Al||null===(cl=Al.data)||void 0===cl?void 0:cl.chequeNo)||"NA"]}),e.jsxs("div",{className:"",children:["DD Date : ",(null==Al||null===(vl=Al.data)||void 0===vl?void 0:vl.chequeDate)||"NA"]})]}),e.jsx("div",{className:"text-center mt-2",children:"****************************************************"}),e.jsxs("div",{className:"",children:["Tc Name : ",null==Al||null===(rl=Al.data)||void 0===rl?void 0:rl.empName]}),e.jsxs("div",{className:"",children:["Tc Mobile No. : ",null==Al||null===(ml=Al.data)||void 0===ml?void 0:ml.empMobile]}),e.jsx("div",{className:"text-center font-semibold capitalize mt-6",children:"Thank You!"}),e.jsx("div",{className:"text-center font-semibold  ",children:"For More Details Please"}),e.jsxs("div",{className:"text-center font-semibold  ",children:["Visit: ",(null==Al||null===(Nl=Al.data)||void 0===Nl?void 0:Nl.currentWebSite)||"NA"]})]})})}),e.jsxs("div",{className:"text-center mt-4 flex justify-center items-center gap-4",children:[e.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:function(){return hl("/amc-app/water/search-consumer")},children:"Search Consumer"}),e.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:function(){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:yl}}))},children:"Print"})]})]})]})}))}}}));
