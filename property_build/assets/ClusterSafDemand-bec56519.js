import{u as G,a as M,e as W,r as x,j as e,B as Y,S as Z,n as a,be as J,ai as d,bk as K,A as X,b as D,ad as ee}from"./index-f3761e5c.js";import{r as te}from"./rupee-ba1d5977.js";import{b as se}from"./brief-77d733cf.js";function de(ae){var p,b,m,f,y,j,N,u,g,v,w,A,R,z,P,S,T,_,C,F,L;const{id:r}=G();M("Cluster SAF Demand Details");const H=W(),{api_getClusterSafDemand:O}=ee(),[s,i]=x.useState(),[le,n]=x.useState(""),[Q,c]=x.useState(!1),[U,o]=x.useState(!1),[h,$]=x.useState(!1),q=()=>{o(!1),c(!0),X.post(O,{clusterId:r},D()).then(function(t){var l,B,E,I,k,V;console.log("view cluster demand for my saf..",t==null?void 0:t.data),$((l=t==null?void 0:t.data)==null?void 0:l.status),(B=t==null?void 0:t.data)!=null&&B.status?(n((E=t==null?void 0:t.data)==null?void 0:E.safNo),i((I=t==null?void 0:t.data)==null?void 0:I.data)):(n((k=t==null?void 0:t.data)==null?void 0:k.safNo),i((V=t==null?void 0:t.data)==null?void 0:V.data)),c(!1)}).catch(function(t){console.log("cluster demand by id error...",t),o(!0),c(!1)})};return x.useEffect(()=>{q()},[]),Q?e.jsx(e.Fragment,{children:e.jsx(Y,{})}):U?e.jsx(Z,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"Back to Cluster",buttonUrl:`/viewCluster/${r}`}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full mx-auto md:px-6",children:[e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 md:items-cetner ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((p=s==null?void 0:s.basicDetails)==null?void 0:p.cluster_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Cluster Name"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((b=s==null?void 0:s.basicDetails)==null?void 0:b.cluster_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Cluster Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:a((m=s==null?void 0:s.basicDetails)==null?void 0:m.authorized_person_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Authorized Person Name"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:a((f=s==null?void 0:s.basicDetails)==null?void 0:f.mobile_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Mobile No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((y=s==null?void 0:s.basicDetails)==null?void 0:y.address)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Address"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a(new Date((j=s==null?void 0:s.basicDetails)==null?void 0:j.created_at).toLocaleDateString("en-GB"))}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Created At"})]})]})})}),e.jsxs("div",{className:"",children:[((N=s==null?void 0:s.basicDetails)==null?void 0:N.doc_upload_status)==0&&e.jsx("div",{className:"",children:e.jsxs("div",{className:"items-center text-yellow-600",children:[e.jsx(J,{className:"inline mr-2"}),"Upload all your property related documents first then pay your property tax to send your application for verification"]})}),!h&&e.jsx("div",{className:"w-full mt-20 text-center",children:e.jsx("span",{className:"text-3xl text-red-500 border border-red-500 font-semibold px-4 py-2",children:"No Dues Found !"})}),h&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-10",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs",children:[e.jsx("img",{src:te,alt:"pin",className:"w-5 inline"})," Tax Details"]}),e.jsxs("div",{className:"flex font-mono text-xs py-2 px-1 text-gray-900",children:[e.jsx("div",{className:"flex-initial px-2 font-bold",children:"Total Payable Amount"}),e.jsx("div",{className:"flex-initial px-2",children:"= "}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:" ( Tax Amount"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Late Assessment Penalty"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"1% Penalty )"}),e.jsx("div",{className:"flex-initial px-2",children:"-"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:" ( Rebate"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Special Rebate )"})]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Tax Amount (Rs)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Late Assessment Penalty (Rs)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"1% Penalty (Rs)"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Rebate( ",(u=s==null?void 0:s.demand)==null?void 0:u.rebatePerc,"% in Rs)"]}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Special Rebate( ",(g=s==null?void 0:s.demand)==null?void 0:g.specialRebatePerc,"% in Rs)"]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Payable Amount (Rs)"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((v=s==null?void 0:s.demand)==null?void 0:v.totalDues)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((w=s==null?void 0:s.demand)==null?void 0:w.lateAssessmentPenalty)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((A=s==null?void 0:s.demand)==null?void 0:A.totalOnePercPenalty)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((R=s==null?void 0:s.demand)==null?void 0:R.rebateAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((z=s==null?void 0:s.demand)==null?void 0:z.specialRebateAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((P=s==null?void 0:s.demand)==null?void 0:P.payableAmount)})]})})})]})]}),((T=(S=s==null?void 0:s.demand)==null?void 0:S.rebates)==null?void 0:T.length)!==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-10 text-md font-semibold",children:"Rebate Description"}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Rebate Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"percent(%)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount"})]})}),e.jsx("tbody",{className:"text-sm",children:(C=(_=s==null?void 0:s.demand)==null?void 0:_.rebates)==null?void 0:C.map((t,l)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.keyString)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[d(t==null?void 0:t.rebatePerc),"%"]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.rebateAmount)})]}))})]})]}),e.jsxs("div",{className:"mt-10",children:[(s==null?void 0:s.details)&&e.jsxs("div",{children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-md mt-10",children:[e.jsx("img",{src:se,alt:"pin",className:"w-5 inline"})," Tax Description of Annual Rental Value - As Per Old Rule (Effect Upto 31-03-2016)"]}),e.jsxs("div",{className:"flex font-mono text-xs py-2 px-1 text-gray-900",children:[e.jsx("div",{className:"flex-initial px-2 font-bold",children:"Annual Rental Value (ARV)"}),e.jsx("div",{className:"flex-initial px-2",children:"="}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Builtup Area"}),e.jsx("div",{className:"flex-initial px-2",children:"x"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Rental Rate"})]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"ARV"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarter / Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Holding Tax (Rs)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"1% penalty (Rs)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Water Tax (Rs)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Latrine/Conservancy Tax (Rs)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Education Cess (Rs)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Health Cess (Rs)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarterly Tax (Rs)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Adjuted Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Balance"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Due Date"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(F=s.details)==null?void 0:F.map((t,l)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.qtr)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.holding_tax)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[a(t==null?void 0:t.onePercPenaltyTax)," (",a(t==null?void 0:t.onePercPenalty),"%)"]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.water_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.latrine_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.education_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.health_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.adjust_amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.balance)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.due_date)})]}))})})]})]}),e.jsx("div",{className:"mt-10 flex",children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-left flex-1",children:e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-gray-600 text-xl",children:"Total Payable Amount  "}),e.jsx("span",{className:"text-3xl font-bold ml-20",children:(L=s==null?void 0:s.demand)==null?void 0:L.payableAmount.toLocaleString("en-IN",{style:"currency",currency:"INR"})})]})}),e.jsx("div",{className:"text-right flex-1",children:e.jsxs("button",{onClick:()=>H(`/property-payment/${r}/cluster-saf`),type:"submit",className:" px-8 py-2 border border-white bg-indigo-500 text-white font-medium text-xs leading-tight capitalize rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:["Pay Now ",e.jsx("span",{children:e.jsx(K,{className:"inline font-bold text-xl"})})]})})]})}),e.jsx("div",{className:"h-20 w-full"})]})]})]})]}),e.jsx("div",{className:"w-full mt-20"})]})}export{de as default};
