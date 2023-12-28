import{u as O,e as U,r,a as V,j as e,B as Y,S as Z,a7 as J,n as l,ak as d,A as K,b as W,af as X}from"./index-07053450.js";import{r as D}from"./rupee-ba1d5977.js";import{b as ee}from"./brief-77d733cf.js";import"./RazorpayPaymentScreen-d4fecb19.js";import{T as se}from"./TopTabsCluster-2504739d.js";function ie(te){var b,p,f,j,u,N,y,g,v,w,A,L,T,S,z,P,C,R,F,_,Q;const{id:x}=O(),{api_getClusterPropertyDemand:B}=X(),H=U(),[s,o]=r.useState(),[c,n]=r.useState(),[$,i]=r.useState(!1),[q,h]=r.useState(!1),[m,G]=r.useState(!1);V("Cluster Holding Demand Details");const M=()=>{h(!1),i(!0),K.post(`${B}`,{clusterId:x},W()).then(function(t){var a,k,E,I;console.log("view cluster demand details at property in egov...",t==null?void 0:t.data),G((a=t==null?void 0:t.data)==null?void 0:a.status),(k=t==null?void 0:t.data)!=null&&k.status?(o((E=t==null?void 0:t.data)==null?void 0:E.data),n(t==null?void 0:t.data)):(o((I=t==null?void 0:t.data)==null?void 0:I.data),n(t==null?void 0:t.data)),i(!1)}).catch(function(t){console.log("==2 cluster details by id error...",t),h(!0),i(!1)})};return r.useEffect(()=>{M()},[]),$?e.jsx(e.Fragment,{children:e.jsx(Y,{})}):q?e.jsx(Z,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx(J,{position:"top-right",autoClose:2e3}),e.jsxs("div",{className:"w-full mx-auto px-6",children:[e.jsx("div",{className:"pt-10",children:e.jsx(se,{title:"Cluster Demand-Details",type:"holding",id:x,safNo:"",active:"demand"})}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l((b=s==null?void 0:s.basicDetails)==null?void 0:b.cluster_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Cluster Name"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l((p=s==null?void 0:s.basicDetails)==null?void 0:p.cluster_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Cluster Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:l((f=s==null?void 0:s.basicDetails)==null?void 0:f.authorized_person_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Authorized Person Name"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:l((j=s==null?void 0:s.basicDetails)==null?void 0:j.mobile_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Mobile No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l((u=s==null?void 0:s.basicDetails)==null?void 0:u.address)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Address"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:l(new Date((N=s==null?void 0:s.basicDetails)==null?void 0:N.created_at).toLocaleDateString("en-GB"))}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Created At"})]})]})})}),e.jsxs("div",{className:"flex flex-row flex-wrap justify-center w-full",children:[m&&e.jsx("div",{class:"rounded-lg pt-4 w-full",children:e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex flex-row flex-wrap",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl text-left",children:[e.jsx("img",{src:D,alt:"pin",className:"w-5 inline"})," Tax Details"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Total Tax (Rs)"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Rebate (",(y=s==null?void 0:s.duesList)==null?void 0:y.rebatePerc,"%)"]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"1% Penalty (Rs) "}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Payable Amount (Rs)"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:e.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"1"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((g=s==null?void 0:s.duesList)==null?void 0:g.totalDues)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((v=s==null?void 0:s.duesList)==null?void 0:v.rebateAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((w=s==null?void 0:s.duesList)==null?void 0:w.onePercPenalty)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((A=s==null?void 0:s.duesList)==null?void 0:A.payableAmount)})]})})})]})]}),((T=(L=s==null?void 0:s.duesList)==null?void 0:L.rebates)==null?void 0:T.length)!==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-10 text-md font-semibold",children:"Rebate Description"}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Rebate Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"percent(%)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount"})]})}),e.jsx("tbody",{className:"text-sm",children:(z=(S=s==null?void 0:s.duesList)==null?void 0:S.rebates)==null?void 0:z.map((t,a)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.keyString)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[d(t==null?void 0:t.rebatePerc),"%"]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.rebateAmount)})]}))})]})]}),e.jsxs("div",{className:"mt-10",children:[e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-4",children:["Total Dues (Rs) : ",e.jsx("span",{className:"font-semibold text-lg",children:l((P=s==null?void 0:s.duesList)==null?void 0:P.totalDues)})," "]}),e.jsxs("div",{className:"col-span-4",children:["Dues From : ",e.jsx("span",{className:"font-semibold text-lg",children:l((C=s==null?void 0:s.duesList)==null?void 0:C.duesFrom)})," "]}),e.jsxs("div",{className:"col-span-4",children:["Dues To : ",e.jsx("span",{className:"font-semibold text-lg",children:l((R=s==null?void 0:s.duesList)==null?void 0:R.duesTo)})," "]}),e.jsxs("div",{className:"col-span-4 mt-5",children:["Total Quarters : ",e.jsx("span",{className:"font-semibold text-lg",children:l((F=s==null?void 0:s.duesList)==null?void 0:F.totalQuarters)})," "]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl mt-10",children:[e.jsx("img",{src:ee,alt:"pin",className:"w-5 inline"})," Demand Overview"]}),e.jsxs("table",{className:"min-w-full leading-normal bg-white rounded-lg shadow-lg mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Arv"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Quarter / Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Additional Tax (Rs)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Quarterly Tax (Rs)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Payable Amount (Rs)"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(_=s==null?void 0:s.demandList)==null?void 0:_.map((t,a)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.qtr)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.additional_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.balance)})]}))})})]}),e.jsx("div",{className:"mt-10 flex",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-left flex-1",children:e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-gray-600 text-xl",children:"Total Payable Amount  "}),e.jsxs("span",{className:"text-3xl font-bold ml-20",children:[" ",l((Q=s==null?void 0:s.duesList)==null?void 0:Q.payableAmount).toLocaleString("en-IN",{style:"currency",currency:"INR"})]})]})}),e.jsx("div",{className:"text-right flex-1",children:e.jsx("button",{onClick:()=>H(`/property-payment/${x}/cluster-holding`),type:"submit",className:"ml-4 font-bold px-6 py-1 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out shadow-xl border border-white",children:"Pay Now"})})]})})]})]})}),!m&&e.jsx("div",{className:"text-2xl font-bold text-red-500 mt-20",children:e.jsxs("span",{className:"border border-red-500 px-4 py-2 shadow-xl",children:[c==null?void 0:c.message," "]})})]})]}),e.jsx("div",{className:"w-full mt-20 h-60"})]})}export{ie as default};
