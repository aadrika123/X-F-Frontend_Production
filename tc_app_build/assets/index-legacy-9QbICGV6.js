!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,l){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,r,s,d=[],i=!0,o=!1;try{if(r=(t=t.call(e)).next,0===l){if(Object(t)!==t)return;i=!1}else for(;!(i=(n=r.call(t)).done)&&(d.push(n.value),d.length!==l);i=!0);}catch(e){o=!0,a=e}finally{try{if(!i&&null!=t.return&&(s=t.return(),Object(s)!==s))return}finally{if(o)throw a}}return d}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,n=new Array(l);t<l;t++)n[t]=e[t];return n}System.register(["./index-legacy-v2qFtUJU.js","./router-legacy-rigPOyFI.js","./formik.esm-legacy-LafwCeEO.js","./moment-legacy-tjrIIMAh.js","./index.esm-legacy-5u-Ffckd.js","./tailwind-legacy-e6PAgAmt.js","./FormProvider-legacy-XEc5ijVo.js","./index-legacy-vtVAGFCF.js","./index-legacy-3NWst4mJ.js","./module-legacy-tRD-sRax.js","./reactQuery-legacy-jKPiMKrc.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-ELZmKVKq.js","./headlessui-legacy-Yu0VJXN1.js"],(function(l,t){"use strict";var n,a,r,s,d,i,o,c,u,m;return{setters:[function(e){n=e.u,a=e.a,r=e.w,s=e.j},function(e){d=e.d},function(e){i=e.u},function(e){o=e.h},null,function(e){c=e.r},function(e){u=e.F},null,function(e){m=e.P},null,null,null,null,null,null],execute:function(){l("default",(function(){var l,t,x,v,h,f,j,b,N,y,p,g,D,w,C,M,F,_,Y,S=n(),I=e(d.useState({fromDate:"",uptoDate:"",wardId:"",userId:null==S||null===(l=S.user)||void 0===l?void 0:l.id,zoneId:"",paymentMode:"",page:1,perPage:1e3}),2),A=I[0],R=(I[1],a({api:r.waterTcCollection,config:A,value:[null==A?void 0:A.fromDate,null==A?void 0:A.uptoDate,null==A?void 0:A.wardId,null==A?void 0:A.userId,null==A?void 0:A.zoneId,null==A?void 0:A.paymentMode,null==A?void 0:A.page,null==A?void 0:A.perPage],options:{enabled:!0}})),O=i({enableReinitialize:!0,initialValues:null==S?void 0:S.collectionReportProperty,onSubmit:function(e){null==S||S.setCollectionReportProperty(e)}}),P="[C]Akola Municipal Corporation\n[C]Collection Summary\n[C]Water\n \n<b>Name: <b> "+(null==S||null===(t=S.user)||void 0===t?void 0:t.name)+"\n<b>Mobile: </b><b>"+(null==S||null===(x=S.user)||void 0===x?void 0:x.mobile)+"</b>\nForm: "+o().format("YYYY-MM-DD")+"\nUp to: "+o().format("YYYY-MM-DD")+"\n********************************\n[L]Tran No[C]  Date[C]  Mode[R]Amount\n"+(null==R||null===(v=R.data)||void 0===v||null===(v=v.data)||void 0===v||null===(v=v.data)||void 0===v?void 0:v.map((function(e){var l;return"XX"+(null==e||null===(l=e.tran_no)||void 0===l?void 0:l.slice(-4))+"[C]"+o(null==e?void 0:e.tran_date).format("DD-MM-yy")+"[C]"+(null==e?void 0:e.transaction_mode)+"[R]"+Math.round(null==e?void 0:e.amount)+"\n"})))+"\n********************************\nCash: "+(null==R||null===(h=R.data)||void 0===h||null===(h=h.data)||void 0===h||null===(h=h.data)||void 0===h||null===(h=h.filter((function(e){return"Cash"===(null==e?void 0:e.transaction_mode)})))||void 0===h?void 0:h.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))+"\nCheque: "+(null==R||null===(f=R.data)||void 0===f||null===(f=f.data)||void 0===f||null===(f=f.data)||void 0===f||null===(f=f.filter((function(e){return"Cheque"===(null==e?void 0:e.transaction_mode)})))||void 0===f?void 0:f.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))+"\nDD: "+(null==R||null===(j=R.data)||void 0===j||null===(j=j.data)||void 0===j||null===(j=j.data)||void 0===j||null===(j=j.filter((function(e){return"DD"===(null==e?void 0:e.transaction_mode)})))||void 0===j?void 0:j.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))+"\nOnline: "+(null==R||null===(b=R.data)||void 0===b||null===(b=b.data)||void 0===b||null===(b=b.data)||void 0===b||null===(b=b.filter((function(e){return"Online"===(null==e?void 0:e.transaction_mode)})))||void 0===b?void 0:b.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))+"\nTotal: "+Math.round(null==R||null===(N=R.data)||void 0===N||null===(N=N.data)||void 0===N?void 0:N.totalAmount).toFixed(2)+"\n********************************\n\n";return s.jsx(m,{title:"Collection Summary",children:s.jsxs("div",{className:"p-4 ",children:[s.jsx(u,{formik:O,children:s.jsx(c.Card,{className:"w-full",children:s.jsxs(c.CardBody,{children:[s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("h1",{className:"font-semibold text-sm",children:["Collection Summary ",s.jsx("small",{children:"(Water)"})]})}),s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),s.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2",children:[s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Name:"})}),s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm",children:null==S||null===(y=S.user)||void 0===y?void 0:y.name})}),s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Mobile:"})}),s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm",children:null==S||null===(p=S.user)||void 0===p?void 0:p.mobile})}),s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm font-semibold",children:"From Date:"})}),s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm",children:o().format("YYYY-MM-DD")})}),s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm font-semibold",children:"Upto Date:"})}),s.jsx("div",{className:"text-left",children:s.jsx("h1",{className:"text-sm",children:o().format("YYYY-MM-DD")})})]})]})})}),s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-2"}),null!=R&&R.isLoading?s.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"Loading..."}):s.jsx(s.Fragment,{children:s.jsxs("div",{className:"py-2 ",children:[s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("h1",{className:"font-semibold text-sm",children:["No of collection-:"," ",(null==R||null===(g=R.data)||void 0===g||null===(g=g.data)||void 0===g||null===(g=g.data)||void 0===g?void 0:g.length)||0]})}),s.jsx("div",{className:"py-2",children:(null==R||null===(D=R.data)||void 0===D||null===(D=D.data)||void 0===D||null===(D=D.data)||void 0===D?void 0:D.length)>0?s.jsxs(s.Fragment,{children:[s.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",border:1,children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("td",{className:"text-left text-sm p-2 border border-slate-300",children:s.jsx("small",{children:s.jsx("b",{children:"S.No"})})}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("small",{children:s.jsx("b",{children:"Trans No"})})}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("small",{children:s.jsx("b",{children:"Date"})})}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("small",{children:s.jsx("b",{children:"Mode"})})}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("small",{children:s.jsx("b",{children:"Amount"})})})]})}),s.jsx("tbody",{children:null==R||null===(w=R.data)||void 0===w||null===(w=w.data)||void 0===w||null===(w=w.data)||void 0===w?void 0:w.map((function(e,l){var t;return s.jsxs("tr",{children:[s.jsx("td",{className:"text-left text-sm p-2 border border-slate-300",children:l+1}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("h1",{className:"text-sm",children:"xxx"+(null==e||null===(t=e.tran_no)||void 0===t?void 0:t.slice(-5))})}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("h1",{className:"text-sm",children:null==e?void 0:e.tran_date})}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("h1",{className:"text-sm lowercase",children:null==e?void 0:e.transaction_mode})}),s.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:s.jsx("h1",{className:"text-sm",children:null==e?void 0:e.amount})})]},l)}))})]}),s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),s.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[s.jsx("small",{className:"font-bold",children:"Cash"}),s.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",(null==R||null===(C=R.data)||void 0===C||null===(C=C.data)||void 0===C||null===(C=C.data)||void 0===C||null===(C=C.filter((function(e){return"Cash"===(null==e?void 0:e.transaction_mode)})))||void 0===C?void 0:C.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))||0]})]}),s.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[s.jsx("small",{className:"font-bold",children:"Cheque"}),s.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",(null==R||null===(M=R.data)||void 0===M||null===(M=M.data)||void 0===M||null===(M=M.data)||void 0===M||null===(M=M.filter((function(e){return"Cheque"===(null==e?void 0:e.transaction_mode)})))||void 0===M?void 0:M.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))||0]})]}),s.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[s.jsx("small",{className:"font-bold",children:"DD"}),s.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",(null==R||null===(F=R.data)||void 0===F||null===(F=F.data)||void 0===F||null===(F=F.data)||void 0===F||null===(F=F.filter((function(e){return"DD"===(null==e?void 0:e.transaction_mode)})))||void 0===F?void 0:F.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))||0]})]}),s.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[s.jsx("small",{className:"font-bold",children:"Online"}),s.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",(null==R||null===(_=R.data)||void 0===_||null===(_=_.data)||void 0===_||null===(_=_.data)||void 0===_||null===(_=_.filter((function(e){return"Online"===(null==e?void 0:e.transaction_mode)})))||void 0===_?void 0:_.reduce((function(e,l){return e+parseFloat(null==l?void 0:l.amount)}),0))||0]})]}),s.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[s.jsx("small",{className:"font-bold",children:"Total"}),s.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",Math.round(null==R||null===(Y=R.data)||void 0===Y||null===(Y=Y.data)||void 0===Y?void 0:Y.totalAmount).toFixed(2)||0]})]}),s.jsx("div",{className:"flex justify-center mt-4",children:s.jsx(c.Button,{color:"blue",size:"sm",onClick:function(){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:P}}))},children:"Print"})})]}):s.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"No Data Found"})})]})})]})})}))}}}))}();
