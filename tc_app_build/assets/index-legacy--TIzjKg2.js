System.register(["./index-legacy-xvgy-vX8.js","./router-legacy-rigPOyFI.js","./formik.esm-legacy-LafwCeEO.js","./moment-legacy-tjrIIMAh.js","./index.esm-legacy-5u-Ffckd.js","./tailwind-legacy-e6PAgAmt.js","./FormProvider-legacy-Z3Dv_YJ0.js","./index-legacy-vtVAGFCF.js","./index-legacy-YDqgE_XT.js","./module-legacy-Cofskh7j.js","./reactQuery-legacy-jKPiMKrc.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-ELZmKVKq.js","./headlessui-legacy-Yu0VJXN1.js"],(function(e,l){"use strict";var t,n,a,s,d,o,i,r,c;return{setters:[function(e){t=e.u,n=e.a,a=e.p,s=e.j},null,function(e){d=e.u},function(e){o=e.h},null,function(e){i=e.r},function(e){r=e.F},null,function(e){c=e.P},null,null,null,null,null,null],execute:function(){e("default",(function(){var e,l,u,m,x,v,h,j,f,b,N,p,y,g,D,C,F,w,_,M,R,Y,P,T,E,I,S,A=t(),z=n({api:null===(e=a)||void 0===e?void 0:e.collectionReport,config:{collectionType:["property","saf"],user:null==A||null===(l=A.user)||void 0===l?void 0:l.user_type,fromDate:null==A||null===(u=A.collectionReportProperty)||void 0===u?void 0:u.fromDate,uptoDate:null==A||null===(m=A.collectionReportProperty)||void 0===m?void 0:m.uptoDate,page:1,perPage:500},value:[null==A||null===(x=A.collectionReportProperty)||void 0===x?void 0:x.fromDate,null==A||null===(v=A.collectionReportProperty)||void 0===v?void 0:v.uptoDate],options:{enabled:!0}}),L=d({enableReinitialize:!0,initialValues:null==A?void 0:A.collectionReportProperty,onSubmit:function(e){null==A||A.setCollectionReportProperty(e)}}),O=L.values;n({api:null===(h=a)||void 0===h?void 0:h.getWardByZone,config:{zoneId:null==O?void 0:O.zoneId},value:[null==O?void 0:O.zoneId],options:{enabled:!(null==O||!O.zoneId)}});var k="[C]Akola Municipal Corporation\n[C]Collection Summary\n[C]Property\n \n<b>Name: <b> "+(null==A||null===(j=A.user)||void 0===j?void 0:j.name)+"\n<b>Mobile: </b><b>"+(null==A||null===(f=A.user)||void 0===f?void 0:f.mobile)+"</b>\nForm: "+o().format("YYYY-MM-DD")+"\nUp to: "+o().format("YYYY-MM-DD")+"\n********************************\n[L]Tran No[C]  Date[C]  Mode[R]Amount\n"+(null==z||null===(b=z.data)||void 0===b||null===(b=b.data)||void 0===b||null===(b=b.data)||void 0===b?void 0:b.map((function(e){var l;return"XX"+(null==e||null===(l=e.tran_no)||void 0===l?void 0:l.slice(-4))+"[C]"+o(null==e?void 0:e.tran_date).format("DD-MM-yy")+"[C]"+(null==e?void 0:e.transaction_mode)+"[R]"+Math.round(null==e?void 0:e.amount)+"\n"})))+"\n********************************\nCash: "+(null==z||null===(N=z.data)||void 0===N||null===(N=N.data)||void 0===N||null===(N=N.data)||void 0===N||null===(N=N.filter((function(e){return"CASH"===(null==e?void 0:e.transaction_mode)})))||void 0===N?void 0:N.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))+"\nCheque: "+(null==z||null===(p=z.data)||void 0===p||null===(p=p.data)||void 0===p||null===(p=p.data)||void 0===p||null===(p=p.filter((function(e){return"CHEQUE"===(null==e?void 0:e.transaction_mode)})))||void 0===p?void 0:p.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))+"\nDD: "+(null==z||null===(y=z.data)||void 0===y||null===(y=y.data)||void 0===y||null===(y=y.data)||void 0===y||null===(y=y.filter((function(e){return"DD"===(null==e?void 0:e.transaction_mode)})))||void 0===y?void 0:y.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))+"\nOnline: "+(null==z||null===(g=z.data)||void 0===g||null===(g=g.data)||void 0===g||null===(g=g.data)||void 0===g||null===(g=g.filter((function(e){return"ONLINE"===(null==e?void 0:e.transaction_mode)})))||void 0===g?void 0:g.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))+"\nNeft: "+(null==z||null===(D=z.data)||void 0===D||null===(D=D.data)||void 0===D||null===(D=D.data)||void 0===D||null===(D=D.filter((function(e){return"NEFT"===(null==e?void 0:e.transaction_mode)})))||void 0===D?void 0:D.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))+"\nTotal: "+Math.round(null==z||null===(C=z.data)||void 0===C||null===(C=C.data)||void 0===C?void 0:C.totalAmt).toFixed(2)+"\n********************************\n\n";return s.jsx(c,{title:"Collection Summary",children:s.jsxs("div",{className:"p-4 ",children:[s.jsx(r,{formik:L,children:s.jsx(i.Card,{className:"w-full",children:s.jsxs(i.CardBody,{children:[s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("h1",{className:"font-semibold text-sm",children:["Collection Summary ",s.jsx("small",{children:"(Property)"})]})}),s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),s.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2",children:[s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Name:"})}),s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm",children:null==A||null===(F=A.user)||void 0===F?void 0:F.name})}),s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Mobile:"})}),s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm",children:null==A||null===(w=A.user)||void 0===w?void 0:w.mobile})}),s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm font-semibold",children:"From Date:"})}),s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm",children:o().format("YYYY-MM-DD")})}),s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Upto Date:"})}),s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm",children:o().format("YYYY-MM-DD")})})]})]})})}),s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-2"}),null!=z&&z.isLoading?s.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"Loading..."}):s.jsx(s.Fragment,{children:s.jsxs("div",{className:"py-2 ",children:[s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("h1",{className:"font-semibold text-sm",children:["No of collection-:"," ",(null==z||null===(_=z.data)||void 0===_||null===(_=_.data)||void 0===_||null===(_=_.data)||void 0===_?void 0:_.length)||0]})}),s.jsx("div",{className:"py-2",children:(null==z||null===(M=z.data)||void 0===M||null===(M=M.data)||void 0===M||null===(M=M.data)||void 0===M?void 0:M.length)>0?s.jsxs(s.Fragment,{children:[s.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",border:1,children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("td",{className:"text-left text-sm p-2 border border-slate-300",children:s.jsx("small",{children:s.jsx("b",{children:"S.No"})})}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("small",{children:s.jsx("b",{children:"Trans No"})})}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("small",{children:s.jsx("b",{children:"Date"})})}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("small",{children:s.jsx("b",{children:"Mode"})})}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("small",{children:s.jsx("b",{children:"Amount"})})})]})}),s.jsx("tbody",{children:null==z||null===(R=z.data)||void 0===R||null===(R=R.data)||void 0===R||null===(R=R.data)||void 0===R?void 0:R.map((function(e,l){var t;return s.jsxs("tr",{children:[s.jsx("td",{className:"text-left text-sm p-2 border border-slate-300",children:l+1}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("h1",{className:"text-sm",children:"xxx"+(null==e||null===(t=e.tran_no)||void 0===t?void 0:t.slice(-5))})}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("h1",{className:"text-sm",children:null==e?void 0:e.tran_date})}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("h1",{className:"text-sm lowercase",children:null==e?void 0:e.transaction_mode})}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("h1",{className:"text-sm",children:null==e?void 0:e.amount})})]},l)}))})]}),s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),s.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[s.jsx("small",{className:"font-bold",children:"Cash"}),s.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",(null==z||null===(Y=z.data)||void 0===Y||null===(Y=Y.data)||void 0===Y||null===(Y=Y.data)||void 0===Y||null===(Y=Y.filter((function(e){return"CASH"===(null==e?void 0:e.transaction_mode)})))||void 0===Y?void 0:Y.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))||0]})]}),s.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[s.jsx("small",{className:"font-bold",children:"Cheque"}),s.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",(null==z||null===(P=z.data)||void 0===P||null===(P=P.data)||void 0===P||null===(P=P.data)||void 0===P||null===(P=P.filter((function(e){return"CHEQUE"===(null==e?void 0:e.transaction_mode)})))||void 0===P?void 0:P.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))||0]})]}),s.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[s.jsx("small",{className:"font-bold",children:"DD"}),s.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",(null==z||null===(T=z.data)||void 0===T||null===(T=T.data)||void 0===T||null===(T=T.data)||void 0===T||null===(T=T.filter((function(e){return"DD"===(null==e?void 0:e.transaction_mode)})))||void 0===T?void 0:T.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))||0]})]}),s.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[s.jsx("small",{className:"font-bold",children:"Online"}),s.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",(null==z||null===(E=z.data)||void 0===E||null===(E=E.data)||void 0===E||null===(E=E.data)||void 0===E||null===(E=E.filter((function(e){return"ONLINE"===(null==e?void 0:e.transaction_mode)})))||void 0===E?void 0:E.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))||0]})]}),s.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[s.jsx("small",{className:"font-bold",children:"Neft"}),s.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",(null==z||null===(I=z.data)||void 0===I||null===(I=I.data)||void 0===I||null===(I=I.data)||void 0===I||null===(I=I.filter((function(e){return"NEFT"===(null==e?void 0:e.transaction_mode)})))||void 0===I?void 0:I.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))||0]})]}),s.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[s.jsx("small",{className:"font-bold",children:"Total"}),s.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",Math.round(null==z||null===(S=z.data)||void 0===S||null===(S=S.data)||void 0===S?void 0:S.totalAmt).toFixed(2)||0]})]}),s.jsx("div",{className:"flex justify-center mt-4",children:s.jsx(i.Button,{color:"blue",size:"sm",onClick:function(){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:k}}))},children:"Print"})})]}):s.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"No Data Found"})})]})})]})})}))}}}));
