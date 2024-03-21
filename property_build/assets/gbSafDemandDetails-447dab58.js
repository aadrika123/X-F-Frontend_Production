import{u as q,e as M,a as Y,r,j as e,B as J,S as K,aa as X,L as D,c$ as ee,n as a,a6 as se,an as l,ab as te,i as O,bO as ae,A as le,b as re,ai as xe}from"./index-c6aa66f9.js";import{b as ce}from"./brief-77d733cf.js";import"./RazorpayPaymentScreen-fa5a0287.js";import{T as ie}from"./TopTabs-417729fc.js";function me(ne){var p,h,b,f,m,y,j,N,g,u,v,w,A,_,P,S,T,z,R,B,L,k,C,F,E,H;const{id:c}=q();console.log("param demand screen...",c);const{propertyGenerateOrderId:de,api_getsafDemandById:V}=xe(),n=M();Y("SAF Demand Details");const[U,oe]=r.useState(!1),[s,W]=r.useState();r.useState("");const[$,G]=r.useState(""),[d,i]=r.useState(!1),[Q,o]=r.useState(!1),Z=()=>{i(!0),o(!1),le.post(V,{id:c},re()).then(function(t){var x,I;console.log("view demand for my saf..",(x=t==null?void 0:t.data)==null?void 0:x.data),G((I=t==null?void 0:t.data)==null?void 0:I.safNo),W(t.data.data),i(!1)}).catch(function(t){console.log("==2 details by id error...",t),o(!0),i(!1)})};return r.useEffect(()=>{Z()},[]),d?e.jsx(e.Fragment,{children:e.jsx(J,{})}):Q?e.jsx(K,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx(X,{position:"top-right",autoClose:2e3}),d&&e.jsx(D,{}),e.jsxs("div",{className:"w-full mx-auto md:px-6",children:[location=="workflow"&&e.jsx("div",{className:"px-4",children:e.jsxs("button",{onClick:()=>n(`/saf-workflow/${tabIndex}/${c}`),type:"button",className:"cypress_owner_add_update px-4 py-2 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:[e.jsx(ee,{className:"inline text-lg"})," Back to Workflow"]})}),e.jsx("div",{className:"pt-10",children:e.jsx(ie,{payButton:(s==null?void 0:s.paymentStatus)!==1,payableAmount:(p=s==null?void 0:s.amounts)==null?void 0:p.payableAmount,title:"Demand Details",type:"gbSaf",id:c,safNo:$,active:"demand"})}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((h=s==null?void 0:s.basicDetails)==null?void 0:h.saf_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Application No.(Saf No)"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((b=s==null?void 0:s.basicDetails)==null?void 0:b.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:a((f=s==null?void 0:s.basicDetails)==null?void 0:f.new_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"New Ward No"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:a((m=s==null?void 0:s.basicDetails)==null?void 0:m.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Govt. Building Usage Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((y=s==null?void 0:s.basicDetails)==null?void 0:y.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property Usage Type"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((j=s==null?void 0:s.basicDetails)==null?void 0:j.zone_mstr_id)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Zone"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((N=s==null?void 0:s.basicDetails)==null?void 0:N.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[a((g=s==null?void 0:s.basicDetails)==null?void 0:g.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:a((u=s==null?void 0:s.basicDetails)==null?void 0:u.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a((v=s==null?void 0:s.basicDetails)==null?void 0:v.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]})]})]})}),e.jsxs("div",{className:"",children:[(s==null?void 0:s.paymentStatus)==1&&e.jsx("div",{className:"w-full mt-20 text-center",children:e.jsx("span",{className:"text-3xl text-red-500 border border-red-500 font-semibold px-4 py-2",children:"No Dues Found !"})}),(s==null?void 0:s.paymentStatus)!=1&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-10",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs",children:[e.jsx("img",{src:se,alt:"pin",className:"w-5 inline"})," Tax Details"]}),e.jsxs("div",{className:"flex font-mono text-xs py-2 px-1 text-gray-900",children:[e.jsx("div",{className:"flex-initial px-2 font-bold",children:"Total Payable Amount"}),e.jsx("div",{className:"flex-initial px-2",children:"= "}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:" ( Tax Amount"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Late Assessment Penalty"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"1% Penalty )"}),e.jsx("div",{className:"flex-initial px-2",children:"-"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:" ( Rebate"}),e.jsx("div",{className:"flex-initial px-2",children:"+"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Special Rebate )"})]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Tax Amount (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Late Assessment Penalty (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"1% Penalty (₹)"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Rebate( ",a((w=s==null?void 0:s.amounts)==null?void 0:w.rebatePerc),"% in ₹)"]}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:["Special Rebate( ",a((A=s==null?void 0:s.amounts)==null?void 0:A.specialRebatePerc),"% in ₹)"]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Payable Amount (₹)"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((_=s==null?void 0:s.amounts)==null?void 0:_.totalTax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((P=s==null?void 0:s.amounts)==null?void 0:P.lateAssessmentPenalty)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((S=s==null?void 0:s.amounts)==null?void 0:S.totalOnePercPenalty)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((T=s==null?void 0:s.amounts)==null?void 0:T.rebateAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((z=s==null?void 0:s.amounts)==null?void 0:z.specialRebateAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l((R=s==null?void 0:s.amounts)==null?void 0:R.payableAmount)})]})})]})]}),((L=(B=s==null?void 0:s.amounts)==null?void 0:B.rebates)==null?void 0:L.length)!==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-10 text-md font-semibold",children:"Rebate Description"}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Rebate Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"percent(%)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount"})]})}),e.jsx("tbody",{className:"text-sm",children:(C=(k=s==null?void 0:s.amounts)==null?void 0:k.rebates)==null?void 0:C.map((t,x)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.keyString)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[l(t==null?void 0:t.rebatePerc),"%"]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.rebateAmount)})]}))})]})]}),e.jsxs("div",{className:"mt-10",children:[(s==null?void 0:s.details)&&e.jsxs("div",{children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-md mt-10",children:[e.jsx("img",{src:ce,alt:"pin",className:"w-5 inline"})," Tax Description of Annual Rental Value - As Per Old Rule (Effect Upto 31-03-2016)"]}),e.jsxs("div",{className:"flex font-mono text-xs py-2 px-1 text-gray-900",children:[e.jsx("div",{className:"flex-initial px-2 font-bold",children:"Annual Rental Value (ARV)"}),e.jsx("div",{className:"flex-initial px-2",children:"="}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Builtup Area"}),e.jsx("div",{className:"flex-initial px-2",children:"x"}),e.jsx("div",{className:"flex-initial px-2 bg-gray-100 rounded-lg",children:"Rental Rate"})]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"ARV"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarter / Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Holding Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"1% penalty (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Water Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Latrine/Conservancy Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Education Cess (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Health Cess (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Quarterly Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Adjuted Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Balance"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Due Date"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(F=s.details)==null?void 0:F.map((t,x)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.qtr)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.holding_tax)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[a(t==null?void 0:t.onePercPenaltyTax),"(",a(t==null?void 0:t.onePercPenalty),"%)"]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.water_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.latrine_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.education_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.health_cess)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.adjust_amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(t==null?void 0:t.balance)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:te(t==null?void 0:t.due_date)})]}))})})]})]}),e.jsx("div",{className:"mt-10 flex",children:!U&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-left flex-1",children:e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-gray-600 text-xl",children:"Total Payable Amount  "}),e.jsx("span",{className:"text-3xl font-bold ml-20",children:O((E=s==null?void 0:s.amounts)==null?void 0:E.payableAmount)})]})}),e.jsx("div",{className:"text-right flex-1",children:e.jsxs("button",{onClick:()=>n(`/property-payment/${c}/gbsaf`),type:"button",className:"ml-4 font-bold px-6 py-1 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out shadow-xl border border-white",children:["Pay ",O((H=s==null?void 0:s.amounts)==null?void 0:H.payableAmount)," ",e.jsx("span",{children:e.jsx(ae,{className:"inline font-bold text-xl"})})," "]})})]})}),e.jsx("div",{className:"h-20 w-full"})]})]})]})]}),e.jsx("div",{className:"w-full h-40"})]})}export{me as default};
