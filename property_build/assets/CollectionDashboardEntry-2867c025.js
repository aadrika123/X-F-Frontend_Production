import{j as a,R as ne,i as t,r as L,ac as he,A as se,b as xe,a4 as oe}from"./index-0f9f451c.js";import{c as M}from"./createSvgIcon-06fe645b.js";import"./useThemeProps-e4544d43.js";const le=M(a.jsx("path",{d:"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"}),"Book"),de=M([a.jsx("path",{d:"M5 8h2v8H5zm7 0H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4zm7-6h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4z"},"0"),a.jsx("path",{d:"M2 4v16h20V4H2zm2 14V6h16v12H4z"},"1")],"Money"),b=M(a.jsx("path",{d:"M15.5 11.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5C8.5 9.57 10.07 8 12 8s3.5 1.57 3.5 3.5zm-2.5 6h-2V19h2v-1.5zm9-5.5c0-2.76-1.12-5.26-2.93-7.07l-1.06 1.06C19.55 7.53 20.5 9.66 20.5 12s-.95 4.47-2.49 6.01l1.06 1.06C20.88 17.26 22 14.76 22 12zM3.5 12c0-2.34.95-4.47 2.49-6.01L4.93 4.93C3.12 6.74 2 9.24 2 12c0 2.76 1.12 5.26 2.93 7.07l1.06-1.06C4.45 16.47 3.5 14.34 3.5 12zm14 0c0 1.52-.62 2.89-1.61 3.89l1.06 1.06C18.22 15.68 19 13.93 19 12c0-1.93-.78-3.68-2.05-4.95l-1.06 1.06c.99 1 1.61 2.37 1.61 3.89zM7.05 16.95l1.06-1.06c-1-1-1.61-2.37-1.61-3.89s.62-2.89 1.61-3.89L7.05 7.05C5.78 8.32 5 10.07 5 12c0 1.93.78 3.68 2.05 4.95z"}),"OnlinePrediction"),ce=M(a.jsx("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"}),"Payment"),me=()=>{const e="en",[d,n]=ne.useState(new Date);ne.useEffect(()=>{const o=setInterval(()=>{n(new Date)},1e3);return()=>{clearInterval(o)}},[]);const c=`${d.toLocaleDateString(e,{weekday:"long"})}, ${d.getDate()} ${d.toLocaleDateString(e,{month:"long"})}

`,i=d.getHours(),s=`Good ${i<12&&"Morning"||i<17&&"Afternoon"||"Evening"}, `,x=d.toLocaleTimeString(e,{hour:"numeric",hour12:!0,minute:"numeric",second:"2-digit"});return{date:c,time:x,wish:s}},ie=()=>(JSON.stringify(new Date).slice(1,11),new Date().toLocaleDateString());function re(e){var d,n,h,c,i,s,x,o,g,N,f,j,l,z,m,w,r,u,v,y,_,F,C,D,I,S,Z,k,R,T;return a.jsxs("div",{children:[a.jsx("div",{className:"overflow-x-scroll w-full",children:a.jsxs("table",{className:"table-auto w-full  overflow-x-scroll text-center border bg-white",children:[a.jsxs("thead",{className:"border h-12 bg-cyan-200",children:[a.jsx("th",{className:"min-w-[24px] whitespace-nowrap",children:"Zone"}),a.jsx("th",{className:"min-w-[24px] whitespace-nowrap",children:"Demand"}),a.jsx("th",{className:"min-w-[24px] whitespace-nowrap",children:"Collection"}),a.jsx("th",{className:"min-w-[24px] whitespace-nowrap",children:"Todays Coll"}),a.jsx("th",{className:"min-w-[24px] whitespace-nowrap",children:"Balance"})]}),a.jsxs("tbody",{children:[a.jsxs("tr",{className:"border-b h-10 hover:bg-cyan-50",children:[a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:"East Zone "}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((d=e==null?void 0:e.data)==null?void 0:d.zone1_demand)}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((n=e==null?void 0:e.data)==null?void 0:n.zone1_collection)}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((h=e==null?void 0:e.data)==null?void 0:h.zone1_today_collection)}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((c=e==null?void 0:e.data)==null?void 0:c.zone1_balance)})]}),a.jsxs("tr",{className:"border-b h-10 hover:bg-cyan-50",children:[a.jsx("td",{children:"West Zone	"}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((i=e==null?void 0:e.data)==null?void 0:i.zone2_demand)}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((s=e==null?void 0:e.data)==null?void 0:s.zone2_collection)}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((x=e==null?void 0:e.data)==null?void 0:x.zone2_today_collection)}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((o=e==null?void 0:e.data)==null?void 0:o.zone2_balance)})]}),a.jsxs("tr",{className:"border-b h-10 hover:bg-cyan-50",children:[a.jsx("td",{children:"North Zone"}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((g=e==null?void 0:e.data)==null?void 0:g.zone3_demand)}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((N=e==null?void 0:e.data)==null?void 0:N.zone3_collection)}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((f=e==null?void 0:e.data)==null?void 0:f.zone3_today_collection)}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((j=e==null?void 0:e.data)==null?void 0:j.zone3_balance)})]}),a.jsxs("tr",{className:"border-b h-10 hover:bg-cyan-50",children:[a.jsx("td",{children:"South Zone"}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((l=e==null?void 0:e.data)==null?void 0:l.zone4_demand)}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((z=e==null?void 0:e.data)==null?void 0:z.zone4_collection)}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((m=e==null?void 0:e.data)==null?void 0:m.zone4_today_collection)}),a.jsx("td",{className:"min-w-[12rem] whitespace-nowrap",children:t((w=e==null?void 0:e.data)==null?void 0:w.zone4_balance)})]})]})]})}),a.jsxs("div",{className:"mt-4 bg-white pb-4",children:[a.jsxs("p",{className:"p-2 bg-cyan-200  font-semibold  my-4",children:["Collection Info ",ie()]}),a.jsxs("div",{className:"flex flex-wrap gap-2 px-4",children:[a.jsxs("div",{className:"h-24 w-1/3 md:w-1/3 p-2 bg-amber-50 shadow-md shadow-gray-500 hover:shadow-lg border border-teal-500 hover:bg-amber-50 rounded",children:[a.jsxs("p",{className:"flex justify-between",children:[" Online ",a.jsx(b,{})]}),a.jsxs("p",{className:"font-bold text-teal-500 mx-auto text-center py-2 text-xl",children:[" ",t((u=(r=e==null?void 0:e.data)==null?void 0:r.totalReport)==null?void 0:u.online_collection)]})]}),a.jsxs("div",{className:"h-24 w-1/3 md:w-1/3 p-2 bg-amber-50 shadow-md shadow-gray-500 hover:shadow-lg border border-teal-500 hover:bg-amber-50 rounded",children:[a.jsxs("p",{className:"flex justify-between",children:[" Cash ",a.jsx(de,{})]}),a.jsxs("p",{className:"font-bold text-teal-500 mx-auto text-center py-2 text-xl",children:[" ",t((y=(v=e==null?void 0:e.data)==null?void 0:v.totalReport)==null?void 0:y.cash_collection)]})]}),a.jsxs("div",{className:"h-24 w-1/3 md:w-1/3 p-2 bg-amber-50 shadow-md shadow-gray-500 hover:shadow-lg border border-teal-500 hover:bg-amber-50 rounded",children:[a.jsxs("p",{className:"flex justify-between",children:[" NEFT ",a.jsx(le,{})]}),a.jsxs("p",{className:"font-bold text-teal-500 mx-auto text-center py-2 text-xl",children:[" ",t((F=(_=e==null?void 0:e.data)==null?void 0:_.totalReport)==null?void 0:F.neft_collection)]})]}),a.jsxs("div",{className:"h-24 w-1/3 md:w-1/3 p-2 bg-amber-50 shadow-md shadow-gray-500 hover:shadow-lg border border-teal-500 hover:bg-amber-50 rounded",children:[a.jsxs("p",{className:"flex justify-between",children:[" RTGS ",a.jsx(ce,{})]}),a.jsxs("p",{className:"font-bold text-teal-500 mx-auto text-center py-2 text-xl",children:[" ",t((D=(C=e==null?void 0:e.data)==null?void 0:C.totalReport)==null?void 0:D.rtgs_collection)]})]}),a.jsxs("div",{className:"h-24 w-1/3 md:w-1/3 p-2 bg-amber-50 shadow-md shadow-gray-500 hover:shadow-lg border border-teal-500 hover:bg-amber-50 rounded",children:[a.jsxs("p",{className:"flex justify-between",children:[" DD Collection ",a.jsx(b,{})]}),a.jsxs("p",{className:"font-bold text-teal-500 mx-auto text-center py-2 text-xl",children:[" ",t((S=(I=e==null?void 0:e.data)==null?void 0:I.totalReport)==null?void 0:S.dd_collection)]})]}),a.jsxs("div",{className:"h-24 w-1/3 md:w-1/3 p-2 bg-amber-50 shadow-md shadow-gray-500 hover:shadow-lg border border-teal-500 hover:bg-amber-50 rounded",children:[a.jsxs("p",{className:"flex justify-between",children:[" Cheq Col. ",a.jsx(b,{})]}),a.jsxs("p",{className:"font-bold text-teal-500 mx-auto text-center py-2 text-xl",children:[" ",t((k=(Z=e==null?void 0:e.data)==null?void 0:Z.totalReport)==null?void 0:k.chque_collection)]})]}),a.jsxs("div",{className:"h-24 w-1/2 p-2 bg-amber-50 shadow-md shadow-gray-500 hover:shadow-lg border border-teal-500 hover:bg-amber-50 rounded",children:[a.jsxs("p",{className:"flex justify-between",children:[" Total Collection ",a.jsx(b,{})]}),a.jsxs("p",{className:"font-bold text-teal-500 mx-auto text-center py-2 text-xl",children:[" ",t((T=(R=e==null?void 0:e.data)==null?void 0:R.totalReport)==null?void 0:T.today_collections)]})]})]})]})]})}function je(e){var n,h,c,i,s,x,o,g,N,f,j,l,z,m,w,r,u,v,y,_,F,C,D,I,S,Z,k,R,T,H,W,B,V,O,P,q,$,G,J,K,Q,U,X,Y,p,ee,ae,te;const d=E=>{let A="A-East Zone";return E==1&&(A="A-East Zone"),E==2&&(A="B-West Zone"),E==3&&(A="C-North Zone"),E==4&&(A="D-South Zone"),A};return a.jsxs("div",{className:"",children:[a.jsxs("table",{className:"table-auto w-full text-center border bg-white",children:[a.jsxs("thead",{className:"border h-12 bg-green-200",children:[a.jsx("th",{children:"Zone"}),a.jsx("th",{children:"Demand"}),a.jsx("th",{children:"Collection"}),a.jsx("th",{children:"Todays Coll"}),a.jsx("th",{children:"Recovery"}),a.jsx("th",{children:"Balance"})]}),a.jsx("tbody",{children:a.jsxs("tr",{className:"border-b h-16 border hover:bg-green-50",children:[a.jsxs("td",{children:[d((n=e==null?void 0:e.zoneWiseData)==null?void 0:n.zone_mstr_id),"	"]}),a.jsxs("td",{children:[((h=e==null?void 0:e.zone)==null?void 0:h.zoneId)==1&&a.jsxs(a.Fragment,{children:[(((c=e==null?void 0:e.data)==null?void 0:c.zone1_demand)/1e7).toFixed(2)," cr."]}),((i=e==null?void 0:e.zone)==null?void 0:i.zoneId)==2&&a.jsxs(a.Fragment,{children:[(((s=e==null?void 0:e.data)==null?void 0:s.zone2_demand)/1e7).toFixed(2)," cr."]}),((x=e==null?void 0:e.zone)==null?void 0:x.zoneId)==3&&a.jsxs(a.Fragment,{children:[(((o=e==null?void 0:e.data)==null?void 0:o.zone3_demand)/1e7).toFixed(2)," cr."]}),((g=e==null?void 0:e.zone)==null?void 0:g.zoneId)==4&&a.jsxs(a.Fragment,{children:[(((N=e==null?void 0:e.data)==null?void 0:N.zone4_demand)/1e7).toFixed(2)," cr."]})]}),a.jsxs("td",{children:[((f=e==null?void 0:e.zone)==null?void 0:f.zoneId)==1&&a.jsxs(a.Fragment,{children:[(((j=e==null?void 0:e.data)==null?void 0:j.zone1_collection)/1e5).toFixed(2)," lakh."]}),((l=e==null?void 0:e.zone)==null?void 0:l.zoneId)==2&&a.jsxs(a.Fragment,{children:[(((z=e==null?void 0:e.data)==null?void 0:z.zone2_collection)/1e5).toFixed(2)," lakh."]}),((m=e==null?void 0:e.zone)==null?void 0:m.zoneId)==3&&a.jsxs(a.Fragment,{children:[(((w=e==null?void 0:e.data)==null?void 0:w.zone3_collection)/1e5).toFixed(2)," lakh."]}),((r=e==null?void 0:e.zone)==null?void 0:r.zoneId)==4&&a.jsxs(a.Fragment,{children:[(((u=e==null?void 0:e.data)==null?void 0:u.zone4_collection)/1e5).toFixed(2)," lakh."]})]}),a.jsxs("td",{children:[((v=e==null?void 0:e.zone)==null?void 0:v.zoneId)==1&&a.jsxs(a.Fragment,{children:[(((y=e==null?void 0:e.data)==null?void 0:y.zone1_today_collection)/1e5).toFixed(2)," lakh."]}),((_=e==null?void 0:e.zone)==null?void 0:_.zoneId)==2&&a.jsxs(a.Fragment,{children:[(((F=e==null?void 0:e.data)==null?void 0:F.zone2_today_collection)/1e5).toFixed(2)," lakh."]}),((C=e==null?void 0:e.zone)==null?void 0:C.zoneId)==3&&a.jsxs(a.Fragment,{children:[(((D=e==null?void 0:e.data)==null?void 0:D.zone3_today_collection)/1e5).toFixed(2)," lakh."]}),((I=e==null?void 0:e.zone)==null?void 0:I.zoneId)==4&&a.jsxs(a.Fragment,{children:[(((S=e==null?void 0:e.data)==null?void 0:S.zone4_today_collection)/1e5).toFixed(2)," lakh."]})]}),a.jsxs("td",{children:[((Z=e==null?void 0:e.zone)==null?void 0:Z.zoneId)==1&&a.jsxs(a.Fragment,{children:[(((k=e==null?void 0:e.data)==null?void 0:k.zone1_recovery)/1e5).toFixed(2)," lakh."]}),((R=e==null?void 0:e.zone)==null?void 0:R.zoneId)==2&&a.jsxs(a.Fragment,{children:[(((T=e==null?void 0:e.data)==null?void 0:T.zone2_recovery)/1e5).toFixed(2)," lakh."]}),((H=e==null?void 0:e.zone)==null?void 0:H.zoneId)==3&&a.jsxs(a.Fragment,{children:[(((W=e==null?void 0:e.data)==null?void 0:W.zone3_recovery)/1e5).toFixed(2)," lakh."]}),((B=e==null?void 0:e.zone)==null?void 0:B.zoneId)==4&&a.jsxs(a.Fragment,{children:[(((V=e==null?void 0:e.data)==null?void 0:V.zone4_recovery)/1e5).toFixed(2)," lakh."]})]}),a.jsxs("td",{children:[((O=e==null?void 0:e.zone)==null?void 0:O.zoneId)==1&&a.jsxs(a.Fragment,{children:[(((P=e==null?void 0:e.data)==null?void 0:P.zone1_balance)/1e7).toFixed(2)," cr."]}),((q=e==null?void 0:e.zone)==null?void 0:q.zoneId)==2&&a.jsxs(a.Fragment,{children:[((($=e==null?void 0:e.data)==null?void 0:$.zone2_balance)/1e7).toFixed(2)," cr."]}),((G=e==null?void 0:e.zone)==null?void 0:G.zoneId)==3&&a.jsxs(a.Fragment,{children:[(((J=e==null?void 0:e.data)==null?void 0:J.zone3_balance)/1e7).toFixed(2)," cr."]}),((K=e==null?void 0:e.zone)==null?void 0:K.zoneId)==4&&a.jsxs(a.Fragment,{children:[(((Q=e==null?void 0:e.data)==null?void 0:Q.zone4_balance)/1e7).toFixed(2)," cr."]})]})]})})]}),a.jsxs("div",{className:"mt-4 bg-white pb-4",children:[a.jsxs("p",{className:"p-2 bg-green-200  font-semibold  my-4",children:["Collection Info :   ",ie()]}),a.jsxs("div",{className:"flex flex-wrap gap-2 px-4",children:[a.jsxs("div",{className:"h-24 w-1/3 md:w-1/3 p-2 bg-white shadow-md shadow-gray-500 hover:shadow-lg border border-green-500 hover:bg-amber-50 rounded",children:[a.jsxs("p",{className:"flex justify-between",children:[" Online ",a.jsx(b,{})]}),a.jsxs("p",{className:"font-bold text-green-500 mx-auto text-center py-2 text-xl",children:[" ",t((U=e==null?void 0:e.zoneWiseData)==null?void 0:U.online_collection)]})]}),a.jsxs("div",{className:"h-24 w-1/3 md:w-1/3 p-2 bg-white shadow-md shadow-gray-500 hover:shadow-lg border border-green-500 hover:bg-white rounded",children:[a.jsxs("p",{className:"flex justify-between",children:[" Cash ",a.jsx(de,{})]}),a.jsxs("p",{className:"font-bold text-green-500 mx-auto text-center py-2 text-xl",children:[" ",t((X=e==null?void 0:e.zoneWiseData)==null?void 0:X.cash_collection)]})]}),a.jsxs("div",{className:"h-24 w-1/3 md:w-1/3 p-2 bg-white shadow-md shadow-gray-500 hover:shadow-lg border border-green-500 hover:bg-white rounded",children:[a.jsxs("p",{className:"flex justify-between",children:[" NEFT ",a.jsx(le,{})]}),a.jsxs("p",{className:"font-bold text-green-500 mx-auto text-center py-2 text-xl",children:[" ",t((Y=e==null?void 0:e.zoneWiseData)==null?void 0:Y.neft_collection)]})]}),a.jsxs("div",{className:"h-24 w-1/3 md:w-1/3 p-2 bg-white shadow-md shadow-gray-500 hover:shadow-lg border border-green-500 hover:bg-white rounded",children:[a.jsxs("p",{className:"flex justify-between",children:[" RTGS ",a.jsx(ce,{})]}),a.jsxs("p",{className:"font-bold text-green-500 mx-auto text-center py-2 text-xl",children:[" ",t((p=e==null?void 0:e.zoneWiseData)==null?void 0:p.rtgs_collection)]})]}),a.jsxs("div",{className:"h-24 w-1/3 md:w-1/3 p-2 bg-white shadow-md shadow-gray-500 hover:shadow-lg border border-green-500 hover:bg-white rounded",children:[a.jsxs("p",{className:"flex justify-between",children:[" DD Collection ",a.jsx(b,{})]}),a.jsxs("p",{className:"font-bold text-green-500 mx-auto text-center py-2 text-xl",children:[" ",t((ee=e==null?void 0:e.zoneWiseData)==null?void 0:ee.dd_collection)]})]}),a.jsxs("div",{className:"h-24 w-1/3 md:w-1/3 p-2 bg-white shadow-md shadow-gray-500 hover:shadow-lg border border-green-500 hover:bg-white rounded",children:[a.jsxs("p",{className:"flex justify-between",children:[" Cheq Col. ",a.jsx(b,{})]}),a.jsxs("p",{className:"font-bold text-green-500 mx-auto text-center py-2 text-xl",children:[" ",t((ae=e==null?void 0:e.zoneWiseData)==null?void 0:ae.chque_collection)]})]}),a.jsxs("div",{className:"h-24 w-1/2 p-2 bg-white shadow-md shadow-gray-500 hover:shadow-lg border border-green-500 hover:bg-white rounded",children:[a.jsxs("p",{className:"flex justify-between",children:[" Total Collection ",a.jsx(b,{})]}),a.jsxs("p",{className:"font-bold text-green-500 mx-auto text-center py-2 text-xl",children:[" ",t((te=e==null?void 0:e.zoneWiseData)==null?void 0:te.today_collections)]})]})]})]})]})}function Ne(){var j;const[e,d]=L.useState(null),[n,h]=L.useState([]),[c,i]=L.useState({zoneName:"A-East Zone",zoneId:1}),{date:s,time:x,wish:o}=me(),{api_adminDashboard:g}=oe(),N=()=>{se.post(g,{},xe()).then(l=>{console.log("dashboard response",l.data),l.data.status&&(d(l.data.data),h(l.data.data.zoneWiseReport[0]))}).catch(l=>{console.log(l)})},f=l=>{let z=l.target.value,m=e==null?void 0:e.zoneWiseReport,w=m==null?void 0:m.filter(r=>(r==null?void 0:r.zone_mstr_id)==z);console.log("zone",w),h(w[0]),i({zoneName:l.target.selectedOptions[0].text,zoneId:l.target.value}),console.log("collection",n==null?void 0:n.today_collections)};return L.useEffect(()=>{N()},[]),a.jsxs("div",{children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 bg-white p-4 w-full  border",children:[a.jsxs("div",{className:"col-span-1 flex justify-between",children:[a.jsxs("div",{children:[a.jsx(he,{height:"50",width:"50",color:"#ff0000",ariaLabel:"audio-loading",wrapperStyle:{},wrapperClass:"wrapper-class",visible:!0}),a.jsxs("p",{className:"text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-purple-600",children:[" ",o," "]})]}),a.jsxs("div",{children:[a.jsxs("p",{className:" text-3xl font-bold font-mono pt-4",children:[" ",x," "]}),a.jsxs("p",{className:" text-lg font-medium font-sans",children:[s," "]})]})]}),a.jsx("div",{className:"col-span-2 flex justify-end  w-full",children:a.jsxs("select",{className:"px-3 py-2 h-12 mt-4 border border-gray-200 rounded w-1/3 focus:ring-0 focus:border-gray-500",onChange:f,children:[a.jsx("option",{value:"",children:"Select Zone "}),a.jsx("option",{value:"1",selected:!0,children:"A-East Zone "}),a.jsx("option",{value:"2",children:"B-West Zone "}),a.jsx("option",{value:"3",children:"C-North Zone "}),a.jsx("option",{value:"4",children:"D-South Zone "})]})})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 font-roboto ",children:[a.jsxs("div",{className:"bg-white flex justify-evenly rounded border border-gray-400 py-2 ",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-normal",children:"Total Properties"}),a.jsx("p",{className:"font-semibold text-lg",children:a.jsx("span",{className:"text-gray-600",children:e==null?void 0:e.total_properties})})]}),a.jsxs("div",{children:[a.jsx("p",{className:"font-normal",children:"Todays Collection"}),a.jsxs("p",{className:"font-semibold text-lg text-green-500",children:[(((j=e==null?void 0:e.totalReport)==null?void 0:j.today_collections)/1e5).toFixed(2)," lakh"]})]})]}),a.jsxs("div",{className:"bg-white flex justify-evenly rounded border border-gray-400 py-2",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-normal",children:"Total Properties"}),a.jsx("p",{className:"font-semibold text-lg",children:a.jsx("span",{className:"text-gray-600",children:JSON.stringify(n==null?void 0:n.total_properties)})})]}),a.jsxs("div",{children:[" ",a.jsx("p",{className:"text-lg text-amber-500 underline pt-4 font-bold",children:c==null?void 0:c.zoneName})," "]}),a.jsxs("div",{children:[" ",a.jsxs("p",{className:"font-semibold text-lg text-green-500 pt-4",children:["₹ ",((n==null?void 0:n.today_collections)/1e5).toFixed(2)," lakh"]})," "]})]})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 font-roboto w-full",children:[a.jsxs("div",{className:"",children:[a.jsx("p",{className:"p-2 bg-cyan-500  mt-4",children:"Total Demand  /Collection /  Balance Info "}),a.jsx(re,{data:e})]}),a.jsxs("div",{className:"",children:[a.jsx("p",{className:"p-2 bg-green-500 text-white  mt-4",children:"Total Demand  /  Balance Info"}),a.jsx(je,{data:e,zoneWiseData:n,zone:c})]})]})]})}export{Ne as default};
