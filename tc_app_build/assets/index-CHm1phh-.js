import{b as _s,c as Cs,p as vs,j as a}from"./index-CUXWRp7E.js";import"./router-vn-0iGwJ.js";import{u as Ms}from"./formik.esm-ilDmhU_v.js";import{h as n}from"./moment-UBOc2Xni.js";import"./index.esm-19LW8OGO.js";import{r as l}from"./tailwind-umh7vczy.js";import{F as Ps}from"./FormProvider-AqaH0m2Q.js";import"./index-9INnh4Fj.js";import{P as Ys}from"./index-Nw9NoOgx.js";import"./module-Bxm9W1j2.js";import"./reactQuery-VYMV1vFj.js";import"./axios-lPgvryBG.js";import"./reactIcons-lANGEfNm.js";import"./headlessui-pLs_kC1m.js";function Qs(){var x,c,h,m,j,b,i,N,f,p,u,y,D,g,C,v,F,w,_,M,P,Y,T,A,E,I,S,k,z,L,O,B,H,U,W,q,Q,X,J,K,Z,G,$,R,V,ss,as,es,rs,ts,ds,ns,ls,os,xs,cs,hs,ms,js,bs,is,Ns,fs,ps,us,ys,Ds;const t=_s(),e=Cs({api:(x=vs)==null?void 0:x.collectionReport,config:{collectionType:["property","saf"],user:(c=t==null?void 0:t.user)==null?void 0:c.user_type,fromDate:(h=t==null?void 0:t.collectionReportProperty)==null?void 0:h.fromDate,uptoDate:(m=t==null?void 0:t.collectionReportProperty)==null?void 0:m.uptoDate,page:1,perPage:500},value:[(j=t==null?void 0:t.collectionReportProperty)==null?void 0:j.fromDate,(b=t==null?void 0:t.collectionReportProperty)==null?void 0:b.uptoDate],options:{enabled:!0}}),o=Ms({enableReinitialize:!0,initialValues:t==null?void 0:t.collectionReportProperty,onSubmit:s=>{t==null||t.setCollectionReportProperty(s)}}),{values:d}=o;Cs({api:(i=vs)==null?void 0:i.getWardByZone,config:{zoneId:d==null?void 0:d.zoneId},value:[d==null?void 0:d.zoneId],options:{enabled:!!(d!=null&&d.zoneId)}});const Fs="[C]Akola Municipal Corporation\n[C]Collection Summary\n[C]Property\n \n<b>Name: <b> "+((N=t==null?void 0:t.user)==null?void 0:N.name)+"\n<b>Mobile: </b><b>"+((f=t==null?void 0:t.user)==null?void 0:f.mobile)+"</b>\nForm: "+n().format("YYYY-MM-DD")+"\nUp to: "+n().format("YYYY-MM-DD")+"\n********************************\n[L]Tran No[C]  Date[C]  Mode[R]Amount\n"+((y=(u=(p=e==null?void 0:e.data)==null?void 0:p.data)==null?void 0:u.data)==null?void 0:y.map(s=>{var r;return"XX"+((r=s==null?void 0:s.tran_no)==null?void 0:r.slice(-4))+"[C]"+n(s==null?void 0:s.tran_date).format("DD-MM-yy")+"[C]"+(s==null?void 0:s.transaction_mode)+"[R]"+Math.round(s==null?void 0:s.amount)+"\n"}))+"\n********************************\nCash: "+((v=(C=(g=(D=e==null?void 0:e.data)==null?void 0:D.data)==null?void 0:g.data)==null?void 0:C.filter(s=>(s==null?void 0:s.transaction_mode)==="CASH"))==null?void 0:v.reduce((s,r)=>s+parseFloat(r==null?void 0:r.amount),0))+"\nCheque: "+((M=(_=(w=(F=e==null?void 0:e.data)==null?void 0:F.data)==null?void 0:w.data)==null?void 0:_.filter(s=>(s==null?void 0:s.transaction_mode)==="CHEQUE"))==null?void 0:M.reduce((s,r)=>s+parseFloat(r==null?void 0:r.amount),0))+"\nDD: "+((A=(T=(Y=(P=e==null?void 0:e.data)==null?void 0:P.data)==null?void 0:Y.data)==null?void 0:T.filter(s=>(s==null?void 0:s.transaction_mode)==="DD"))==null?void 0:A.reduce((s,r)=>s+parseFloat(r==null?void 0:r.amount),0))+"\nOnline: "+((k=(S=(I=(E=e==null?void 0:e.data)==null?void 0:E.data)==null?void 0:I.data)==null?void 0:S.filter(s=>(s==null?void 0:s.transaction_mode)==="ONLINE"))==null?void 0:k.reduce((s,r)=>s+parseFloat(r==null?void 0:r.amount),0))+"\nNeft: "+((B=(O=(L=(z=e==null?void 0:e.data)==null?void 0:z.data)==null?void 0:L.data)==null?void 0:O.filter(s=>(s==null?void 0:s.transaction_mode)==="NEFT"))==null?void 0:B.reduce((s,r)=>s+parseFloat(r==null?void 0:r.amount),0))+"\nTotal: "+Math.round((U=(H=e==null?void 0:e.data)==null?void 0:H.data)==null?void 0:U.totalAmt).toFixed(2)+"\n********************************\n\n",ws=()=>{window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({Key:"PRINT_FOR_BT_PRINTER",keyData:{charPerLine:32,printTxt:Fs}}))};return a.jsx(Ys,{title:"Collection Summary",children:a.jsxs("div",{className:"p-4 ",children:[a.jsx(Ps,{formik:o,children:a.jsx(l.Card,{className:"w-full",children:a.jsxs(l.CardBody,{children:[a.jsx("div",{className:"flex justify-between items-center",children:a.jsxs("h1",{className:"font-semibold text-sm",children:["Collection Summary ",a.jsx("small",{children:"(Property)"})]})}),a.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-2",children:[a.jsx("div",{className:"text-left",children:a.jsx("h1",{className:"text-sm font-semibold",children:"Name:"})}),a.jsx("div",{className:"text-left",children:a.jsx("h1",{className:"text-sm",children:(W=t==null?void 0:t.user)==null?void 0:W.name})}),a.jsx("div",{className:"text-left",children:a.jsx("h1",{className:"text-sm font-semibold",children:"Mobile:"})}),a.jsx("div",{className:"text-left",children:a.jsx("h1",{className:"text-sm",children:(q=t==null?void 0:t.user)==null?void 0:q.mobile})}),a.jsx("div",{className:"text-left",children:a.jsx("h1",{className:"text-sm font-semibold",children:"From Date:"})}),a.jsx("div",{className:"text-left",children:a.jsx("h1",{className:"text-sm",children:n().format("YYYY-MM-DD")})}),a.jsx("div",{className:"text-left",children:a.jsx("h1",{className:"text-sm font-semibold",children:"Upto Date:"})}),a.jsx("div",{className:"text-left",children:a.jsx("h1",{className:"text-sm",children:n().format("YYYY-MM-DD")})})]})]})})}),a.jsx("div",{className:"border-b-2 border-gray-300 w-full py-2"}),e!=null&&e.isLoading?a.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"Loading..."}):a.jsx(a.Fragment,{children:a.jsxs("div",{className:"py-2 ",children:[a.jsx("div",{className:"flex justify-between items-center",children:a.jsxs("h1",{className:"font-semibold text-sm",children:["No of collection-:"," ",((J=(X=(Q=e==null?void 0:e.data)==null?void 0:Q.data)==null?void 0:X.data)==null?void 0:J.length)||0]})}),a.jsx("div",{className:"py-2",children:((G=(Z=(K=e==null?void 0:e.data)==null?void 0:K.data)==null?void 0:Z.data)==null?void 0:G.length)>0?a.jsxs(a.Fragment,{children:[a.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",border:1,children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("td",{className:"text-left text-sm p-2 border border-slate-300",children:a.jsx("small",{children:a.jsx("b",{children:"S.No"})})}),a.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:a.jsx("small",{children:a.jsx("b",{children:"Trans No"})})}),a.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:a.jsx("small",{children:a.jsx("b",{children:"Date"})})}),a.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:a.jsx("small",{children:a.jsx("b",{children:"Mode"})})}),a.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:a.jsx("small",{children:a.jsx("b",{children:"Amount"})})})]})}),a.jsx("tbody",{children:(V=(R=($=e==null?void 0:e.data)==null?void 0:$.data)==null?void 0:R.data)==null?void 0:V.map((s,r)=>{var gs;return a.jsxs("tr",{children:[a.jsx("td",{className:"text-left text-sm p-2 border border-slate-300",children:r+1}),a.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:a.jsx("h1",{className:"text-sm",children:"xxx"+((gs=s==null?void 0:s.tran_no)==null?void 0:gs.slice(-5))})}),a.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:a.jsx("h1",{className:"text-sm",children:s==null?void 0:s.tran_date})}),a.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:a.jsx("h1",{className:"text-sm lowercase",children:s==null?void 0:s.transaction_mode})}),a.jsx("td",{className:"text-center text-sm p-2 border border-slate-300",children:a.jsx("h1",{className:"text-sm",children:s==null?void 0:s.amount})})]},r)})})]}),a.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),a.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[a.jsx("small",{className:"font-bold",children:"Cash"}),a.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",((rs=(es=(as=(ss=e==null?void 0:e.data)==null?void 0:ss.data)==null?void 0:as.data)==null?void 0:es.filter(s=>(s==null?void 0:s.transaction_mode)==="CASH"))==null?void 0:rs.reduce((s,r)=>s+parseFloat(r==null?void 0:r.amount),0))||0]})]}),a.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[a.jsx("small",{className:"font-bold",children:"Cheque"}),a.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",((ls=(ns=(ds=(ts=e==null?void 0:e.data)==null?void 0:ts.data)==null?void 0:ds.data)==null?void 0:ns.filter(s=>(s==null?void 0:s.transaction_mode)==="CHEQUE"))==null?void 0:ls.reduce((s,r)=>s+parseFloat(r==null?void 0:r.amount),0))||0]})]}),a.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[a.jsx("small",{className:"font-bold",children:"DD"}),a.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",((hs=(cs=(xs=(os=e==null?void 0:e.data)==null?void 0:os.data)==null?void 0:xs.data)==null?void 0:cs.filter(s=>(s==null?void 0:s.transaction_mode)==="DD"))==null?void 0:hs.reduce((s,r)=>s+parseFloat(r==null?void 0:r.amount),0))||0]})]}),a.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[a.jsx("small",{className:"font-bold",children:"Online"}),a.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",((is=(bs=(js=(ms=e==null?void 0:e.data)==null?void 0:ms.data)==null?void 0:js.data)==null?void 0:bs.filter(s=>(s==null?void 0:s.transaction_mode)==="ONLINE"))==null?void 0:is.reduce((s,r)=>s+parseFloat(r==null?void 0:r.amount),0))||0]})]}),a.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[a.jsx("small",{className:"font-bold",children:"Neft"}),a.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",((us=(ps=(fs=(Ns=e==null?void 0:e.data)==null?void 0:Ns.data)==null?void 0:fs.data)==null?void 0:ps.filter(s=>(s==null?void 0:s.transaction_mode)==="NEFT"))==null?void 0:us.reduce((s,r)=>s+parseFloat(r==null?void 0:r.amount),0))||0]})]}),a.jsxs("div",{className:"flex justify-between items-center mt-2 text-sm p-2 border border-slate-300",children:[a.jsx("small",{className:"font-bold",children:"Total"}),a.jsxs("h1",{className:"text-sm text-green-700 mr-2",children:["₹",Math.round((Ds=(ys=e==null?void 0:e.data)==null?void 0:ys.data)==null?void 0:Ds.totalAmt).toFixed(2)||0]})]}),a.jsx("div",{className:"flex justify-center mt-4",children:a.jsx(l.Button,{color:"blue",size:"sm",onClick:ws,children:"Print"})})]}):a.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"No Data Found"})})]})})]})})}export{Qs as default};
