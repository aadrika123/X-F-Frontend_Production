import{r as c,u as rs,bw as os,k as ns,j as s,U as ms,bt as l,A as W,O as Q,bc as hs}from"./index-33b137df.js";import{P as fs}from"./PaymentCard-4aaa086e.js";import"./RazorpayPaymentScreen-a5ce46ad.js";function bs(us){var y,j,g,p,b,w,_,P,S,A,C,I,T,z,B,H,L,R,U;const[Z,o]=c.useState(!1);c.useState();const[e,J]=c.useState(),[Ns,K]=c.useState();c.useState(!1),c.useState(null);const[vs,X]=c.useState(null),[D,ys]=c.useState(null),[f,ss]=c.useState(null),[es,ts]=c.useState(null),[u,as]=c.useState(0),m=rs(),{id:d,moduleType:a}=os(),{zeroDemandPayment:ls,api_getHoldingDemandById:is,api_getsafDemandById:N,api_getClusterSafDemandById:cs,api_getClusterHoldingDemandById:ds}=hs();ns("Payment Screen");const v=(h=null,i=null)=>{o(!0);let x,r;a=="holding"&&(x=is,r={propId:d,fYear:h,qtr:i}),a=="saf"&&(x=N,r={id:d}),a=="gbsaf"&&(x=N,r={id:d,fYear:h,qtr:i}),a=="cluster-saf"&&(x=cs,r={clusterId:d}),a=="cluster-holding"&&(x=ds,r={clusterId:d}),W.post(x,r,Q()).then(function(t){var n,$,k,q,E,F,M,O,Y,G,V;console.log("payment details data...",t==null?void 0:t.data),J((n=t==null?void 0:t.data)==null?void 0:n.data),K(t==null?void 0:t.data),o(!1),((k=($=t==null?void 0:t.data)==null?void 0:$.data)==null?void 0:k.paymentStatus)===1&&a=="saf"&&m(`/viewDemand/${d}`),ts((F=(E=(q=t==null?void 0:t.data)==null?void 0:q.data)==null?void 0:E.amounts)==null?void 0:F.isPayable),((Y=(O=(M=t==null?void 0:t.data)==null?void 0:M.data)==null?void 0:O.amounts)==null?void 0:Y.isPayable)==!1&&xs(),((V=(G=t==null?void 0:t.data)==null?void 0:G.data)==null?void 0:V.paymentStatus)===1&&a=="holding"&&m(`/viewDemandHoldingProperty/${d}`),as(u+1)}).catch(function(t){console.log("payment details error...",t),o(!1)})},xs=()=>{o(!0),seterroState(!1);let h={id:d,paymentMode:"Online"};W.post(ls,h,Q()).then(i=>{var x,r,t,n;console.log("response zero payment => ",i),(x=i==null?void 0:i.data)!=null&&x.status?(console.log("response zero payment => ",(r=i==null?void 0:i.data)==null?void 0:r.data),ss((n=(t=i==null?void 0:i.data)==null?void 0:t.data)==null?void 0:n.TransactionNo)):(console.log("false status response zero payment => ",i),seterroState(!0))}).catch(i=>{console.log("error zero payment => ",i),seterroState(!0)}).finally(()=>o(!1))};return c.useEffect(()=>{v()},[]),s.jsxs(s.Fragment,{children:[Z&&s.jsx(ms,{}),s.jsxs("div",{className:"sm:p-10 p-2",children:[s.jsxs("div",{className:"w-full bg-white shadow-xl mb-6",children:[a!="cluster-saf"&&a!="cluster-holding"&&s.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[s.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[a!="saf"&&s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:l((y=e==null?void 0:e.basicDetails)==null?void 0:y.holding_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No."})]}),(a=="saf"||a=="gbsaf")&&s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:l((j=e==null?void 0:e.basicDetails)==null?void 0:j.saf_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Application No.(Saf No)"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:l((g=e==null?void 0:e.basicDetails)==null?void 0:g.old_ward_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-lg",children:l((p=e==null?void 0:e.basicDetails)==null?void 0:p.old_ward_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"New Ward No"})]}),a!="gbsaf"?s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:l((b=e==null?void 0:e.basicDetails)==null?void 0:b.ownership_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:l((w=e==null?void 0:e.basicDetails)==null?void 0:w.property_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:l((_=e==null?void 0:e.basicDetails)==null?void 0:_.ownership_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Govt. Building Usage Type"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:l((P=e==null?void 0:e.basicDetails)==null?void 0:P.property_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Property Usage Type"})]})]})]}),s.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:l((S=e==null?void 0:e.basicDetails)==null?void 0:S.zone_mstr_id)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Zone"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:l((A=e==null?void 0:e.basicDetails)==null?void 0:A.is_mobile_tower)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:l((C=e==null?void 0:e.basicDetails)==null?void 0:C.is_hoarding_board)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:l((I=e==null?void 0:e.basicDetails)==null?void 0:I.is_petrol_pump)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:l((T=e==null?void 0:e.basicDetails)==null?void 0:T.is_water_harvesting)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]})]})]}),(a=="cluster-saf"||a=="cluster-holding")&&s.jsx("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:s.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:l((z=e==null?void 0:e.basicDetails)==null?void 0:z.cluster_name)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Cluster Name"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:l((B=e==null?void 0:e.basicDetails)==null?void 0:B.cluster_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Cluster Type"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-sm",children:l((H=e==null?void 0:e.basicDetails)==null?void 0:H.authorized_person_name)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Authorized Person Name"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-sm",children:l((L=e==null?void 0:e.basicDetails)==null?void 0:L.mobile_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Mobile No."})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:l((R=e==null?void 0:e.basicDetails)==null?void 0:R.address)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Address"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:l(new Date((U=e==null?void 0:e.basicDetails)==null?void 0:U.created_at).toLocaleDateString("en-GB"))}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Created At"})]})]})})]}),s.jsx("div",{children:es==!1?s.jsx("div",{className:"w-full h-full bg-white p-20",children:s.jsxs("div",{children:[s.jsx("div",{className:"text-center font-semibold text-3xl",children:"Your application is successfully submitted !"}),s.jsxs("div",{className:"text-center mt-6",children:[s.jsx("button",{className:"mr-4 bg-indigo-500  text-white px-6 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>m(`/paymentReceipt/${a=="cluster-saf"||a=="cluster-holding",encodeURIComponent(f)}/${a=="cluster-saf"||a=="cluster-holding"?a=="cluster-saf"?"cluster-saf":"cluster-holding":a=="saf"||a=="gbsaf"?"saf":"holding"}`),children:"View Receipt"}),a!="direct"&&s.jsx("button",{className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>m(`/propApplicationDetails/${d}`),children:"View Application"})]})]})}):s.jsx(fs,{reset:u,selectedPaymentQtr:D,selectedPaymentYear:X,fetchDemandDetail:v,basicDetails:e==null?void 0:e.basicDetails,safPaymentDetailsData:e==null?void 0:e.amounts,paymentDetails:a=="cluster-saf"?e==null?void 0:e.demand:e==null?void 0:e.duesList})})]}),s.jsx("div",{className:"w-full h-40 md:none"})]})}export{bs as default};
