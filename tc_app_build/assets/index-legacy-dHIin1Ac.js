System.register(["./index-legacy-wf7z0cRS.js","./react-legacy-B2uxfrw8.js","./index-legacy-dUenYBrB.js","./OverLayLoader-legacy-pvkGtaRq.js","./module-legacy-HWLg1cBK.js"],(function(l,e){"use strict";var i,n,d,t,a,o,s,u;return{setters:[function(l){i=l.a,n=l.p,d=l.j},function(l){t=l.h,a=l.u,o=l.R},function(l){s=l.P},function(l){u=l.O},null],execute:function(){l("default",(function(){var l,e,c,v,r,p,m,N,D,h,x,j,b,y,f,g,w,A,T,M,P,C,q,k,R,B,_,O,I,W,E,F,L,z,H,U,V,S,Z,J,Q,Y,K,X,G,$,ll,el,il,nl,dl,tl,al,ol=t().id,sl=a(),ul=i({api:n.propPaymentReceipt,config:{tranId:ol},value:[ol],options:{enabled:!!ol}}),cl=ul.data,vl=ul.isLoading,rl=o.useCallback((function(){var l,e,i,n,d,t,a,o,s,u,c,v,r;return"CHEQUE"===(null==cl||null===(l=cl.data)||void 0===l||null===(l=l.receiptDtls)||void 0===l?void 0:l.paymentMode)?"Payment Mode: "+(null==cl||null===(e=cl.data)||void 0===e||null===(e=e.receiptDtls)||void 0===e?void 0:e.paymentMode)+"\nBank Name: "+(null==cl||null===(i=cl.data)||void 0===i||null===(i=i.receiptDtls)||void 0===i?void 0:i.bankName)+"\nBranch Name: "+(null==cl||null===(n=cl.data)||void 0===n||null===(n=n.receiptDtls)||void 0===n?void 0:n.branchName)+"\nCheque no: "+(null==cl||null===(d=cl.data)||void 0===d||null===(d=d.receiptDtls)||void 0===d?void 0:d.chequeNo)+"\nCheque Date: "+(null==cl||null===(t=cl.data)||void 0===t||null===(t=t.receiptDtls)||void 0===t?void 0:t.chequeDate):"DD"===(null==cl||null===(a=cl.data)||void 0===a||null===(a=a.receiptDtls)||void 0===a?void 0:a.paymentMode)?"Payment Mode: "+(null==cl||null===(o=cl.data)||void 0===o||null===(o=o.receiptDtls)||void 0===o?void 0:o.paymentMode)+"\nBank Name: "+(null==cl||null===(s=cl.data)||void 0===s||null===(s=s.receiptDtls)||void 0===s?void 0:s.bankName)+"\nBranch Name: "+(null==cl||null===(u=cl.data)||void 0===u||null===(u=u.receiptDtls)||void 0===u?void 0:u.branchName)+"\nCheque no: "+(null==cl||null===(c=cl.data)||void 0===c||null===(c=c.receiptDtls)||void 0===c?void 0:c.chequeNo)+"\nCheque Date: "+(null==cl||null===(v=cl.data)||void 0===v||null===(v=v.receiptDtls)||void 0===v?void 0:v.chequeDate):"Payment Mode: "+(null==cl||null===(r=cl.data)||void 0===r||null===(r=r.receiptDtls)||void 0===r?void 0:r.paymentMode)}),[null==cl||null===(l=cl.data)||void 0===l?void 0:l.receiptDtls]),pl="  "+(null==cl||null===(e=cl.data)||void 0===e||null===(e=e.receiptDtls)||void 0===e||null===(e=e.ulbDetails)||void 0===e?void 0:e.ulb_name)+"\n[C]"+(null==cl||null===(c=cl.data)||void 0===c||null===(c=c.receiptDtls)||void 0===c||null===(c=c.ulbDetails)||void 0===c?void 0:c.state)+"\n \n \nReceipt No: "+(null==cl||null===(v=cl.data)||void 0===v||null===(v=v.receiptDtls)||void 0===v?void 0:v.receiptNo)+'\n<b>Owner Name: </b><b><font size="big">'+(null==cl||null===(r=cl.data)||void 0===r||null===(r=r.receiptDtls)||void 0===r?void 0:r.ownerName)+"</font></b>\nOccupant Name: "+(null==cl||null===(p=cl.data)||void 0===p||null===(p=p.receiptDtls)||void 0===p?void 0:p.customerName)+"\nHolding No: "+(null==cl||null===(m=cl.data)||void 0===m||null===(m=m.receiptDtls)||void 0===m?void 0:m.applicationNo)+"\nZone: "+(null==cl||null===(N=cl.data)||void 0===N||null===(N=N.receiptDtls)||void 0===N?void 0:N.zone_name)+"\nWard No: "+(null==cl||null===(D=cl.data)||void 0===D||null===(D=D.receiptDtls)||void 0===D?void 0:D.wardNo)+"\nAddress: "+(null==cl||null===(h=cl.data)||void 0===h||null===(h=h.receiptDtls)||void 0===h?void 0:h.address)+"\nTransaction Date: "+(null==cl||null===(x=cl.data)||void 0===x||null===(x=x.receiptDtls)||void 0===x?void 0:x.transactionDate)+"\nTransaction Time: "+(null==cl||null===(j=cl.data)||void 0===j||null===(j=j.receiptDtls)||void 0===j?void 0:j.transactionTime)+"\nDescription: "+(null==cl||null===(b=cl.data)||void 0===b||null===(b=b.receiptDtls)||void 0===b?void 0:b.accountDescription)+"\nProperty No: "+(null==cl||null===(y=cl.data)||void 0===y||null===(y=y.receiptDtls)||void 0===y?void 0:y.propertyNo)+"\nTransaction No: "+(null==cl||null===(f=cl.data)||void 0===f||null===(f=f.receiptDtls)||void 0===f?void 0:f.transactionNo)+"\nPaid Upto: "+(null==cl||null===(g=cl.data)||void 0===g||null===(g=g.receiptDtls)||void 0===g?void 0:g.mobileDuration)+"\nMode: "+(null==cl||null===(w=cl.data)||void 0===w||null===(w=w.receiptDtls)||void 0===w?void 0:w.paymentMode)+"\nTotal Amount: "+(null==cl||null===(A=cl.data)||void 0===A||null===(A=A.receiptDtls)||void 0===A?void 0:A.totalPaidAmount)+"\n(In word): "+(null==cl||null===(T=cl.data)||void 0===T||null===(T=T.receiptDtls)||void 0===T?void 0:T.paidAmtInWords)+"\n"+rl()+"\n********************************\nTc Name: "+(null==cl||null===(M=cl.data)||void 0===M||null===(M=M.receiptDtls)||void 0===M?void 0:M.tcName)+"\nTc Mobile No: "+(null==cl||null===(P=cl.data)||void 0===P||null===(P=P.receiptDtls)||void 0===P?void 0:P.tcMobile)+"\n\n[C]Thank You!\n[C]For More Details Please\n[C]Visit:  "+(null==cl||null===(C=cl.data)||void 0===C||null===(C=C.receiptDtls)||void 0===C||null===(C=C.ulbDetails)||void 0===C?void 0:C.website)+"\n";return d.jsxs(s,{title:"Payment Receipt",children:[vl&&d.jsx(u,{}),d.jsxs("div",{className:"p-4",children:[d.jsx("div",{className:" border-dashed text-[14px]  bg-white text-gray-700  border-2 font-Lato  w-full p-3  mt-4 border-gray-700 ",children:d.jsx("div",{className:" text-justify font-poppins ",children:d.jsxs("div",{className:" text-gray-700  text-xs",children:[d.jsx("div",{className:"text-center",children:d.jsx("img",{src:"/amc_icon.png",className:"w-12 mx-auto"})}),d.jsx("div",{className:"text-center  font-semibold",children:(null==cl||null===(q=cl.data)||void 0===q||null===(q=q.receiptDtls)||void 0===q||null===(q=q.ulbDetails)||void 0===q?void 0:q.ulb_name)||"NA"}),d.jsx("div",{className:"text-center ",children:null==cl||null===(k=cl.data)||void 0===k||null===(k=k.receiptDtls)||void 0===k||null===(k=k.ulbDetails)||void 0===k?void 0:k.state}),d.jsxs("div",{className:"mt-4",children:["Receipt No : ",(null==cl||null===(R=cl.data)||void 0===R||null===(R=R.receiptDtls)||void 0===R?void 0:R.receiptNo)||"NA"]}),d.jsxs("div",{className:"",children:["Owner Name : ",(null==cl||null===(B=cl.data)||void 0===B||null===(B=B.receiptDtls)||void 0===B?void 0:B.ownerName)||"NA"]}),d.jsxs("div",{className:"",children:["Occupant Name: : ",(null==cl||null===(_=cl.data)||void 0===_||null===(_=_.receiptDtls)||void 0===_?void 0:_.customerName)||"NA"]}),d.jsxs("div",{className:"",children:["Holding No : ",null==cl||null===(O=cl.data)||void 0===O||null===(O=O.receiptDtls)||void 0===O?void 0:O.applicationNo]}),d.jsxs("div",{className:"",children:["Zone : ",null==cl||null===(I=cl.data)||void 0===I||null===(I=I.receiptDtls)||void 0===I?void 0:I.zone_name]}),d.jsxs("div",{className:"",children:["Ward No : ",null==cl||null===(W=cl.data)||void 0===W||null===(W=W.receiptDtls)||void 0===W?void 0:W.wardNo]}),d.jsxs("div",{className:"",children:["Address : ",null==cl||null===(E=cl.data)||void 0===E||null===(E=E.receiptDtls)||void 0===E?void 0:E.address]}),d.jsxs("div",{className:"",children:["Transaction Date : ",null==cl||null===(F=cl.data)||void 0===F||null===(F=F.receiptDtls)||void 0===F?void 0:F.transactionDate]}),d.jsxs("div",{className:"",children:["Transaction Time : ",null==cl||null===(L=cl.data)||void 0===L||null===(L=L.receiptDtls)||void 0===L?void 0:L.transactionTime]}),d.jsxs("div",{className:"",children:["Description : ",null==cl||null===(z=cl.data)||void 0===z||null===(z=z.receiptDtls)||void 0===z?void 0:z.accountDescription]}),d.jsxs("div",{className:"",children:["Property No : ",null==cl||null===(H=cl.data)||void 0===H||null===(H=H.receiptDtls)||void 0===H?void 0:H.propertyNo]}),d.jsxs("div",{className:"",children:["Transaction No :"," ",(null==cl||null===(U=cl.data)||void 0===U||null===(U=U.receiptDtls)||void 0===U?void 0:U.transactionNo)||"NA"]}),d.jsxs("div",{className:"",children:["Paid Upto :"," ",null==cl||null===(V=cl.data)||void 0===V||null===(V=V.receiptDtls)||void 0===V?void 0:V.mobileDuration]}),d.jsxs("div",{className:"",children:["Mode : ",null==cl||null===(S=cl.data)||void 0===S||null===(S=S.receiptDtls)||void 0===S?void 0:S.paymentMode]}),d.jsxs("div",{className:"",children:["Total Amount : ",null==cl||null===(Z=cl.data)||void 0===Z||null===(Z=Z.receiptDtls)||void 0===Z?void 0:Z.totalPaidAmount]}),d.jsxs("div",{className:"w-80",children:["(In words) : ",null==cl||null===(J=cl.data)||void 0===J||null===(J=J.receiptDtls)||void 0===J?void 0:J.paidAmtInWords]}),"CHEQUE"==(null==cl||null===(Q=cl.data)||void 0===Q||null===(Q=Q.receiptDtls)||void 0===Q?void 0:Q.paymentMode)&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"",children:["Bank name : ",(null==cl||null===(Y=cl.data)||void 0===Y||null===(Y=Y.receiptDtls)||void 0===Y?void 0:Y.bankName)||"NA"]}),d.jsxs("div",{className:"",children:["Branch name : ",(null==cl||null===(K=cl.data)||void 0===K||null===(K=K.receiptDtls)||void 0===K?void 0:K.branchName)||"NA"]}),d.jsxs("div",{className:"",children:["Cheque no. : ",(null==cl||null===(X=cl.data)||void 0===X||null===(X=X.receiptDtls)||void 0===X?void 0:X.chequeNo)||"NA"]}),d.jsxs("div",{className:"",children:["Cheque date : ",(null==cl||null===(G=cl.data)||void 0===G||null===(G=G.receiptDtls)||void 0===G?void 0:G.chequeDate)||"NA"]})]}),"DD"==(null==cl||null===($=cl.data)||void 0===$||null===($=$.receiptDtls)||void 0===$?void 0:$.paymentMode)&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"",children:["Bank name : ",(null==cl||null===(ll=cl.data)||void 0===ll||null===(ll=ll.receiptDtls)||void 0===ll?void 0:ll.bank_name)||"NA"]}),d.jsxs("div",{className:"",children:["Branch name : ",(null==cl||null===(el=cl.data)||void 0===el||null===(el=el.receiptDtls)||void 0===el?void 0:el.branchName)||"NA"]}),d.jsxs("div",{className:"",children:["Cheque no. : ",(null==cl||null===(il=cl.data)||void 0===il||null===(il=il.receiptDtls)||void 0===il?void 0:il.chequeNo)||"NA"]}),d.jsxs("div",{className:"",children:["Cheque date : ",(null==cl||null===(nl=cl.data)||void 0===nl||null===(nl=nl.receiptDtls)||void 0===nl?void 0:nl.chequeDate)||"NA"]})]}),d.jsx("div",{className:"text-center mt-2",children:"****************************************************"}),d.jsxs("div",{className:"",children:["Tc Name : ",null==cl||null===(dl=cl.data)||void 0===dl||null===(dl=dl.receiptDtls)||void 0===dl?void 0:dl.tcName]}),d.jsxs("div",{className:"",children:["Tc Mobile No. : ",null==cl||null===(tl=cl.data)||void 0===tl||null===(tl=tl.receiptDtls)||void 0===tl?void 0:tl.tcMobile]}),d.jsx("div",{className:"text-center font-semibold capitalize mt-6",children:"Thank You!"}),d.jsx("div",{className:"text-center font-semibold  ",children:"For More Details Please"}),d.jsxs("div",{className:"text-center font-semibold  ",children:["Visit: ",(null==cl||null===(al=cl.data)||void 0===al||null===(al=al.receiptDtls)||void 0===al||null===(al=al.ulbDetails)||void 0===al?void 0:al.website)||"NA"]})]})})}),d.jsxs("div",{className:"text-center mt-4 flex justify-center items-center gap-4",children:[d.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:function(){return sl("/amc-app/property/search-holding")},children:"Search Property"}),d.jsx("button",{className:"bg-blue-500 text-white px-4 py-1 rounded-md",onClick:function(){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:pl}}))},children:"Print"})]})]})]})}))}}}));
