System.register(["./index-legacy-tIUc5i9T.js","./router-legacy-_t8Mc_yw.js","./moment-legacy-tjrIIMAh.js","./index-legacy-v-BGijUD.js","./OverLayLoader-legacy-SgFA0Nuj.js","./reactQuery-legacy-820C8VGY.js","./axios-legacy-rH2Rcf5_.js","./tailwind-legacy-Afc9ICbc.js","./reactIcons-legacy-v-aafSOk.js","./headlessui-legacy-MZogm2kK.js","./module-legacy-wx7CnfXp.js"],(function(l,a){"use strict";var n,d,i,o,t,e,u,s,v,c;return{setters:[function(l){n=l.c,d=l.t,i=l.h,o=l.j},function(l){t=l.e,e=l.u,u=l.f,s=l.d},null,function(l){v=l.P},function(l){c=l.O},null,null,null,null,null,null],execute:function(){l("default",(function(){var l,a,r,m,p,N,h,x,j,_,y,b,g,f,A,D,P,M,w,C,k,R,L,E,F,q,I,T,S,B,z,U,H,O,V,W,Y,Q,J,K,G,X,Z,$,ll,al,nl=t().id,dl=e(),il=n({api:d.waterPaymentReceipt,config:{tranId:nl},value:[nl],options:{enabled:!!nl}}),ol=il.data,tl=il.isLoading,el=u(),ul=new URLSearchParams(null==el?void 0:el.search),sl=ul.get("license-id"),vl=ul.get("tran-id"),cl=i({api:"".concat(d.paymentReceipt,"/").concat(sl,"/").concat(vl),key:"LicensePaymentReceipt",value:[sl,vl],options:{enabled:!!sl&&!!vl}}),rl=s.useCallback((function(){var l,a,n,d,i,o,t,e,u,s,v,c,r;return"CHEQUE"==(null==cl||null===(l=cl.data)||void 0===l||null===(l=l.data)||void 0===l||null===(l=l.transaction)||void 0===l?void 0:l.payment_mode)?"Payment Mode: "+(null==cl||null===(a=cl.data)||void 0===a||null===(a=a.data)||void 0===a||null===(a=a.transaction)||void 0===a?void 0:a.payment_mode)+"\nBank Name: "+(null==cl||null===(n=cl.data)||void 0===n||null===(n=n.data)||void 0===n||null===(n=n.transaction)||void 0===n?void 0:n.bank_name)+"\nBranch Name: "+(null==cl||null===(d=cl.data)||void 0===d||null===(d=d.data)||void 0===d||null===(d=d.transaction)||void 0===d?void 0:d.branch_name)+"\nCheque no: "+(null==cl||null===(i=cl.data)||void 0===i||null===(i=i.data)||void 0===i||null===(i=i.transaction)||void 0===i?void 0:i.cheque_no)+"\nCheque Date: "+(null==cl||null===(o=cl.data)||void 0===o||null===(o=o.data)||void 0===o||null===(o=o.transaction)||void 0===o?void 0:o.cheque_date):"DD"==(null==cl||null===(t=cl.data)||void 0===t||null===(t=t.data)||void 0===t||null===(t=t.transaction)||void 0===t?void 0:t.payment_mode)?"Payment Mode: "+(null==cl||null===(e=cl.data)||void 0===e||null===(e=e.data)||void 0===e||null===(e=e.transaction)||void 0===e?void 0:e.payment_mode)+"\nBank Name: "+(null==cl||null===(u=cl.data)||void 0===u||null===(u=u.data)||void 0===u||null===(u=u.transaction)||void 0===u?void 0:u.bank_name)+"\nBranch Name: "+(null==cl||null===(s=cl.data)||void 0===s||null===(s=s.data)||void 0===s||null===(s=s.transaction)||void 0===s?void 0:s.branch_name)+"\nDD No: "+(null==cl||null===(v=cl.data)||void 0===v||null===(v=v.data)||void 0===v||null===(v=v.transaction)||void 0===v?void 0:v.cheque_no)+"\nDD Date: "+(null==cl||null===(c=cl.data)||void 0===c||null===(c=c.data)||void 0===c||null===(c=c.transaction)||void 0===c?void 0:c.cheque_date):"Payment Mode: "+(null==cl||null===(r=cl.data)||void 0===r||null===(r=r.data)||void 0===r||null===(r=r.transaction)||void 0===r?void 0:r.payment_mode)}),[null==ol?void 0:ol.data]),ml="  "+(null==cl||null===(l=cl.data)||void 0===l||null===(l=l.data)||void 0===l||null===(l=l.application)||void 0===l?void 0:l.ulb_name)+"\n[C]MUNICIPAL LICENSE\n[C]PAYMENT RECEIPT\n********************************\nReceipt No : "+(null==cl||null===(a=cl.data)||void 0===a||null===(a=a.data)||void 0===a||null===(a=a.transaction)||void 0===a?void 0:a.tran_no)+"\nDated : "+(null==cl||null===(r=cl.data)||void 0===r||null===(r=r.data)||void 0===r||null===(r=r.transaction)||void 0===r?void 0:r.tran_date)+"\nDepartment/Section : Market Section\nWard No : "+(null==cl||null===(m=cl.data)||void 0===m||null===(m=m.data)||void 0===m||null===(m=m.application)||void 0===m?void 0:m.ward_no)+"\nApplication No : "+(null==cl||null===(p=cl.data)||void 0===p||null===(p=p.data)||void 0===p||null===(p=p.application)||void 0===p?void 0:p.application_no)+"\nHolding No : "+(null==cl||null===(N=cl.data)||void 0===N||null===(N=N.data)||void 0===N||null===(N=N.application)||void 0===N?void 0:N.holding_no)+"\n********************************\nFirm Name: "+(null==cl||null===(h=cl.data)||void 0===h||null===(h=h.data)||void 0===h||null===(h=h.application)||void 0===h?void 0:h.firm_name)+"\nReceived From (Mr/Mrs) : "+(null==cl||null===(x=cl.data)||void 0===x||null===(x=x.data)||void 0===x||null===(x=x.application)||void 0===x?void 0:x.owner_name)+"\nMobile No : "+(null==cl||null===(j=cl.data)||void 0===j||null===(j=j.data)||void 0===j||null===(j=j.application)||void 0===j?void 0:j.mobile)+"\nAddress : "+(null==cl||null===(_=cl.data)||void 0===_||null===(_=_.data)||void 0===_||null===(_=_.application)||void 0===_?void 0:_.address)+"\nA Sum of Rs : "+(null==cl||null===(y=cl.data)||void 0===y||null===(y=y.data)||void 0===y||null===(y=y.transaction)||void 0===y?void 0:y.paid_amount)+"\n(in words) : "+(null==cl||null===(b=cl.data)||void 0===b||null===(b=b.data)||void 0===b||null===(b=b.transaction)||void 0===b?void 0:b.paid_amount_in_words)+"\n********************************\nMunicipal License Fee : "+(null==cl||null===(g=cl.data)||void 0===g||null===(g=g.data)||void 0===g||null===(g=g.transaction)||void 0===g?void 0:g.rate)+"\nLate Fee : "+(null==cl||null===(f=cl.data)||void 0===f||null===(f=f.data)||void 0===f||null===(f=f.transaction)||void 0===f?void 0:f.penalty)+"\nArrear/Denial Fee : "+(null==cl||null===(A=cl.data)||void 0===A||null===(A=A.data)||void 0===A||null===(A=A.transaction)||void 0===A?void 0:A.denial_fee)+"\nPaid Amount : "+(null==cl||null===(D=cl.data)||void 0===D||null===(D=D.data)||void 0===D||null===(D=D.transaction)||void 0===D?void 0:D.paid_amount)+"\n"+rl()+"\n********************************\n[C]Thank You!\n[C]For More Details Please\n[C]Visit: [C]https://amcakola.in\n********************************\n";return o.jsxs(v,{title:"Payment Receipt",children:[tl&&o.jsx(c,{}),o.jsxs("div",{className:"p-4",children:[o.jsx("div",{className:" border-dashed text-[14px]  bg-white text-gray-700  border-2 font-Lato  w-full p-3  mt-4 border-gray-700 ",children:o.jsx("div",{className:" text-justify font-poppins ",children:o.jsxs("div",{className:"text-gray-700  text-xs",children:[o.jsx("div",{className:"text-center",children:o.jsx("img",{src:"/amc_icon.png",className:"w-12 mx-auto",alt:"Akola Municipal Corporation",loading:"lazy"})}),o.jsx("div",{className:"text-center  font-semibold uppercase",children:(null==cl||null===(P=cl.data)||void 0===P||null===(P=P.data)||void 0===P||null===(P=P.application)||void 0===P?void 0:P.ulb_name)||"NA"}),o.jsx("div",{className:"text-center text-xs",children:"MUNICIPAL LICENSE"}),o.jsx("div",{className:"text-center text-xs",children:"PAYMENT RECEIPT"}),o.jsxs("div",{className:"mt-4",children:["Receipt No :"," ",(null==cl||null===(M=cl.data)||void 0===M||null===(M=M.data)||void 0===M||null===(M=M.transaction)||void 0===M?void 0:M.tran_no)||"NA"]}),o.jsxs("div",{className:"",children:["Dated :"," ",(null==cl||null===(w=cl.data)||void 0===w||null===(w=w.data)||void 0===w||null===(w=w.transaction)||void 0===w?void 0:w.tran_date)||"NA"]}),o.jsxs("div",{className:"",children:["Department/Section :"," ",(null==cl||null===(C=cl.data)||void 0===C||null===(C=C.data)||void 0===C||null===(C=C.application)||void 0===C?void 0:C.section)||"NA"]}),o.jsxs("div",{className:"",children:["Ward No :"," ",(null==cl||null===(k=cl.data)||void 0===k||null===(k=k.data)||void 0===k||null===(k=k.application)||void 0===k?void 0:k.ward_no)||"NA"]}),o.jsxs("div",{className:"",children:["Application No :"," ",(null==cl||null===(R=cl.data)||void 0===R||null===(R=R.data)||void 0===R||null===(R=R.application)||void 0===R?void 0:R.application_no)||"NA"]}),o.jsxs("div",{className:"",children:["Holding No :"," ",(null==cl||null===(L=cl.data)||void 0===L||null===(L=L.data)||void 0===L||null===(L=L.application)||void 0===L?void 0:L.holding_no)||"NA"]}),o.jsx("div",{className:"text-center font-semibold capitalize",children:"********************************"}),o.jsxs("div",{className:"",children:["Firm Name:"," ",(null==cl||null===(E=cl.data)||void 0===E||null===(E=E.data)||void 0===E||null===(E=E.application)||void 0===E?void 0:E.firm_name)||"NA"]}),o.jsxs("div",{className:"",children:["Received From (Mr/Mrs) :"," ",(null==cl||null===(F=cl.data)||void 0===F||null===(F=F.data)||void 0===F||null===(F=F.application)||void 0===F?void 0:F.owner_name)||"NA"]}),o.jsxs("div",{className:"",children:["Mobile No :"," ",(null==cl||null===(q=cl.data)||void 0===q||null===(q=q.data)||void 0===q||null===(q=q.application)||void 0===q?void 0:q.mobile)||"NA"]}),o.jsxs("div",{className:"",children:["Address :"," ",(null==cl||null===(I=cl.data)||void 0===I||null===(I=I.data)||void 0===I||null===(I=I.application)||void 0===I?void 0:I.address)||"NA"]}),o.jsxs("div",{className:"",children:["A Sum of Rs :"," ",(null==cl||null===(T=cl.data)||void 0===T||null===(T=T.data)||void 0===T||null===(T=T.transaction)||void 0===T?void 0:T.paid_amount)||"NA"]}),o.jsxs("div",{className:"",children:["(in words) :"," ",(null==cl||null===(S=cl.data)||void 0===S||null===(S=S.data)||void 0===S||null===(S=S.transaction)||void 0===S?void 0:S.paid_amount_in_words)||"NA"]}),o.jsx("div",{className:"text-center font-semibold capitalize",children:"********************************"}),o.jsxs("div",{className:"",children:["Municipal License Fee :"," ",(null==cl||null===(B=cl.data)||void 0===B||null===(B=B.data)||void 0===B||null===(B=B.transaction)||void 0===B?void 0:B.rate)||"NA"]}),o.jsxs("div",{className:"",children:["Late Fee :"," ",(null==cl||null===(z=cl.data)||void 0===z||null===(z=z.data)||void 0===z||null===(z=z.transaction)||void 0===z?void 0:z.penalty)||"NA"]}),o.jsxs("div",{className:"",children:["Arrear/Denial Fee :"," ",(null==cl||null===(U=cl.data)||void 0===U||null===(U=U.data)||void 0===U||null===(U=U.transaction)||void 0===U?void 0:U.denial_fee)||"NA"]}),o.jsxs("div",{className:"",children:["Paid Amount :"," ",(null==cl||null===(H=cl.data)||void 0===H||null===(H=H.data)||void 0===H||null===(H=H.transaction)||void 0===H?void 0:H.paid_amount)||"NA"]}),"CHEQUE"==(null==cl||null===(O=cl.data)||void 0===O||null===(O=O.data)||void 0===O||null===(O=O.transaction)||void 0===O?void 0:O.payment_mode)?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"",children:["Payment Mode:"," ",null==cl||null===(V=cl.data)||void 0===V||null===(V=V.data)||void 0===V||null===(V=V.transaction)||void 0===V?void 0:V.payment_mode]}),o.jsxs("div",{className:"",children:["Bank Name:"," ",null==cl||null===(W=cl.data)||void 0===W||null===(W=W.data)||void 0===W||null===(W=W.transaction)||void 0===W?void 0:W.bank_name]}),o.jsxs("div",{className:"",children:["Branch Name:"," ",null==cl||null===(Y=cl.data)||void 0===Y||null===(Y=Y.data)||void 0===Y||null===(Y=Y.transaction)||void 0===Y?void 0:Y.branch_name]}),o.jsxs("div",{className:"",children:["Cheque no:"," ",null==cl||null===(Q=cl.data)||void 0===Q||null===(Q=Q.data)||void 0===Q||null===(Q=Q.transaction)||void 0===Q?void 0:Q.cheque_no]}),o.jsxs("div",{className:"",children:["Cheque Date:"," ",null==cl||null===(J=cl.data)||void 0===J||null===(J=J.data)||void 0===J||null===(J=J.transaction)||void 0===J?void 0:J.cheque_date]})]}):"DD"==(null==cl||null===(K=cl.data)||void 0===K||null===(K=K.data)||void 0===K||null===(K=K.transaction)||void 0===K?void 0:K.payment_mode)?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"",children:["Payment Mode:"," ",null==cl||null===(G=cl.data)||void 0===G||null===(G=G.data)||void 0===G||null===(G=G.transaction)||void 0===G?void 0:G.payment_mode]}),o.jsxs("div",{className:"",children:["Bank Name:"," ",null==cl||null===(X=cl.data)||void 0===X||null===(X=X.data)||void 0===X||null===(X=X.transaction)||void 0===X?void 0:X.bank_name]}),o.jsxs("div",{className:"",children:["Branch Name:"," ",null==cl||null===(Z=cl.data)||void 0===Z||null===(Z=Z.data)||void 0===Z||null===(Z=Z.transaction)||void 0===Z?void 0:Z.branch_name]}),o.jsxs("div",{className:"",children:["DD No:"," ",null==cl||null===($=cl.data)||void 0===$||null===($=$.data)||void 0===$||null===($=$.transaction)||void 0===$?void 0:$.cheque_no]}),o.jsxs("div",{className:"",children:["DD Date:"," ",null==cl||null===(ll=cl.data)||void 0===ll||null===(ll=ll.data)||void 0===ll||null===(ll=ll.transaction)||void 0===ll?void 0:ll.cheque_date]})]}):o.jsxs("div",{className:"",children:["Payment Mode:"," ",null==cl||null===(al=cl.data)||void 0===al||null===(al=al.data)||void 0===al||null===(al=al.transaction)||void 0===al?void 0:al.payment_mode]}),o.jsx("div",{className:"text-center font-semibold capitalize",children:"********************************"}),o.jsx("div",{className:"text-center font-semibold capitalize",children:"Thank You!"}),o.jsx("div",{className:"text-center font-semibold  ",children:"For More Details Please"}),o.jsx("div",{className:"text-center font-semibold  ",children:"Visit: https://amcakola.in"})]})})}),o.jsxs("div",{className:"text-center mt-4 flex justify-center items-center gap-4",children:[o.jsx("button",{className:"bg-blue-500 text-white px-4 py-0.5 rounded-md",onClick:function(){return dl("/amc-app/trade/track-license")},children:o.jsx("small",{children:"Track License"})}),o.jsx("button",{className:"bg-blue-500 text-white px-4 py-0.5 rounded-md",onClick:function(){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:ml}}))},children:o.jsx("small",{children:"Print"})})]})]})]})}))}}}));