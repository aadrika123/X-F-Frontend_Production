import{bw as M,u as Y,k as $,r as x,j as e,B as J,S as K,T as X,U as D,n as a,bg as ee,bh as l,bi as se,i as te,f as k,bj as ae,A as le,O as xe,bc as re}from"./index-33b137df.js";import"./RazorpayPaymentScreen-a5ce46ad.js";import{T as ce}from"./TopTabs-310c0ba5.js";function be(ie){var o,p,h,b,f,m,y,j,N,g,u,v,w,A,P,_,T,S,z,R,B,L,F,C,E,U;const{id:c}=M();console.log("param demand screen...",c);const{propertyGenerateOrderId:ne,api_getsafDemandById:H}=re(),I=Y();$("SAF Demand Details");const[O,de]=x.useState(!1),[s,G]=x.useState();x.useState("");const[Q,W]=x.useState(""),[n,i]=x.useState(!1),[Z,d]=x.useState(!1),q=()=>{i(!0),d(!1),le.post(H,{id:c},xe()).then(function(t){var r,V;console.log("view demand for my saf..",(r=t==null?void 0:t.data)==null?void 0:r.data),W((V=t==null?void 0:t.data)==null?void 0:V.safNo),G(t.data.data),i(!1)}).catch(function(t){console.log("==2 details by id error...",t),d(!0),i(!1)})};return x.useEffect(()=>{q()},[]),n?e.jsx(e.Fragment,{children:e.jsx(J,{})}):Z?e.jsx(K,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx(X,{position:"top-right",autoClose:2e3}),n&&e.jsx(D,{}),e.jsxs("div",{className:"w-full mx-auto md:px-6",children:[e.jsx("div",{className:"pt-10",children:e.jsx(ce,{payButton:(s==null?void 0:s.paymentStatus)!==1,payableAmount:(o=s==null?void 0:s.amounts)==null?void 0:o.payableAmount,title:"Demand Details",type:"gbSaf",id:c,safNo:Q,active:"demand"})}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((p=s==null?void 0:s.basicDetails)==null?void 0:p.saf_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Application No.(Saf No)"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((h=s==null?void 0:s.basicDetails)==null?void 0:h.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:a((b=s==null?void 0:s.basicDetails)==null?void 0:b.new_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"New Ward No"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:a((f=s==null?void 0:s.basicDetails)==null?void 0:f.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Govt. Building Usage Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((m=s==null?void 0:s.basicDetails)==null?void 0:m.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property Usage Type"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((y=s==null?void 0:s.basicDetails)==null?void 0:y.zone_mstr_id)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Zone"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((j=s==null?void 0:s.basicDetails)==null?void 0:j.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[a((N=s==null?void 0:s.basicDetails)==null?void 0:N.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:a((g=s==null?void 0:s.basicDetails)==null?void 0:g.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((u=s==null?void 0:s.basicDetails)==null?void 0:u.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]})]})]})}),e.jsxs("div",{className:"",children:[(s==null?void 0:s.paymentStatus)==1&&e.jsx("div",{className:"w-full mt-20 text-center",children:e.jsx("span",{className:"text-3xl text-red-500 border border-red-500 font-semibold px-4 py-2",children:"No Dues Found !"})}),(s==null?void 0:s.paymentStatus)!=1&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-10",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs",children:[e.jsx("img",{src:ee,alt:"pin",className:"w-5 inline"})," Tax Details"]}),e.jsxs("div",{className:"flex font-mono text-xs py-2 px-1 text-gray-900",children:[e.jsx("div",{className:"flex-initial px-2 font-bold",children:"Total Payable Amount"}),e.jsx("div",{className:"flex-initial px-2",children:"= "}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:" ( Tax Amount"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Late Assessment Penalty"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"1% Penalty )"}),e.jsx("div",{className:"flex-initial px-2",children:"-"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:" ( Rebate"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Special Rebate )"})]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Tax Amount (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Late Assessment Penalty (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"1% Penalty (₹)"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Rebate( ",a((v=s==null?void 0:s.amounts)==null?void 0:v.rebatePerc),"% in ₹)"]}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Special Rebate( ",a((w=s==null?void 0:s.amounts)==null?void 0:w.specialRebatePerc),"% in ₹)"]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Payable Amount (₹)"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((A=s==null?void 0:s.amounts)==null?void 0:A.totalTax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((P=s==null?void 0:s.amounts)==null?void 0:P.lateAssessmentPenalty)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((_=s==null?void 0:s.amounts)==null?void 0:_.totalOnePercPenalty)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((T=s==null?void 0:s.amounts)==null?void 0:T.rebateAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((S=s==null?void 0:s.amounts)==null?void 0:S.specialRebateAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((z=s==null?void 0:s.amounts)==null?void 0:z.payableAmount)})]})})]})]}),((B=(R=s==null?void 0:s.amounts)==null?void 0:R.rebates)==null?void 0:B.length)!==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-10 text-md font-semibold",children:"Rebate Description"}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Rebate Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"percent(%)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount"})]})}),e.jsx("tbody",{className:"text-sm",children:(F=(L=s==null?void 0:s.amounts)==null?void 0:L.rebates)==null?void 0:F.map((t,r)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.keyString)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l(t==null?void 0:t.rebatePerc),"%"]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.rebateAmount)})]}))})]})]}),e.jsxs("div",{className:"mt-10",children:[(s==null?void 0:s.details)&&e.jsxs("div",{children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-md mt-10",children:[e.jsx("img",{src:se,alt:"pin",className:"w-5 inline"})," Tax Description of Annual Rental Value - As Per Old Rule (Effect Upto 31-03-2016)"]}),e.jsxs("div",{className:"flex font-mono text-xs py-2 px-1 text-gray-900",children:[e.jsx("div",{className:"flex-initial px-2 font-bold",children:"Annual Rental Value (ARV)"}),e.jsx("div",{className:"flex-initial px-2",children:"="}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Builtup Area"}),e.jsx("div",{className:"flex-initial px-2",children:"x"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Rental Rate"})]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"ARV"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarter / Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Holding Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"1% penalty (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Water Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Latrine/Conservancy Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Education Cess (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Health Cess (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarterly Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Adjuted Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Balance"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Due Date"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(C=s.details)==null?void 0:C.map((t,r)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:r+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.qtr)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.holding_tax)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[a(t==null?void 0:t.onePercPenaltyTax),"(",a(t==null?void 0:t.onePercPenalty),"%)"]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.water_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.latrine_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.education_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.health_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.adjust_amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.balance)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:te(t==null?void 0:t.due_date)})]}))})})]})]}),e.jsx("div",{className:"mt-10 flex",children:!O&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-left flex-1",children:e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-gray-600 text-xl",children:"Total Payable Amount  "}),e.jsx("span",{className:"text-3xl font-bold ml-20",children:k((E=s==null?void 0:s.amounts)==null?void 0:E.payableAmount)})]})}),e.jsx("div",{className:"text-right flex-1",children:e.jsxs("button",{onClick:()=>I(`/property-payment/${c}/gbsaf`),type:"button",className:"ml-4 font-bold px-6 py-1 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out shadow-xl border border-white",children:["Pay ",k((U=s==null?void 0:s.amounts)==null?void 0:U.payableAmount)," ",e.jsx("span",{children:e.jsx(ae,{className:"inline font-bold text-xl"})})," "]})})]})}),e.jsx("div",{className:"h-20 w-full"})]})]})]})]}),e.jsx("div",{className:"w-full h-40"})]})}export{be as default};
