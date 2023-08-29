import{r as d,u as q,a as M,j as e,ad as U,S as V,W as Y,a0 as a,a9 as H,aF as Z,z as G,A as I,v as Q,f as J,b3 as K}from"./index-e238b906.js";import{r as X}from"./rupee-ba1d5977.js";import{b as F}from"./brief-77d733cf.js";import{T as D}from"./TopTabs-bb930a7f.js";function re(ee){var j,N,y,p,g,v,u,w,T,A,P,_,L;const[R]=d.useState(!1),[t,m]=d.useState(),[r,b]=d.useState(),[B,c]=d.useState(!1),[C,n]=d.useState(!1),{id:h}=q(),{api_getHoldingDemandById:E}=J(),{api_getPropHoldingDetailsById:k}=K(),[l,f]=d.useState(),W=M(),$=()=>{n(!1),c(!0),I.post(`${E}`,{propId:h},Q()).then(function(s){var x,i,o;console.log("view deamnd details at property in egov...",s==null?void 0:s.data),(x=s==null?void 0:s.data)!=null&&x.status?(m((i=s==null?void 0:s.data)==null?void 0:i.data),b(s==null?void 0:s.data)):(m((o=s==null?void 0:s.data)==null?void 0:o.data),b(s==null?void 0:s.data)),c(!1)}).catch(function(s){console.log("==2 details by id error...",s),n(!0),c(!1)})},O=()=>{n(!1),c(!0),I.post(`${k}`,{propertyId:h},Q()).then(function(s){var x,i,o,z,S;console.log("view prop prop full details...",(x=s==null?void 0:s.data)==null?void 0:x.data),(o=(i=s==null?void 0:s.data)==null?void 0:i.data)!=null&&o.status?f((z=s==null?void 0:s.data)==null?void 0:z.data):f((S=s==null?void 0:s.data)==null?void 0:S.data),c(!1)}).catch(function(s){console.log("==2 details by id error...",s),n(!0),c(!1)})};return d.useEffect(()=>{O(),$()},[]),B?e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsx("div",{className:"min-h-screen"})]}):C?e.jsx(V,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx(Y,{position:"top-right",autoClose:2e3}),e.jsxs("div",{className:"w-full  mx-auto",children:[e.jsx("div",{className:"",children:e.jsx(D,{title:"Demand-Details",type:"holding",id:h,safNo:"",active:"demand"})}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a(l==null?void 0:l.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a(l==null?void 0:l.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:a(l==null?void 0:l.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"New Ward No"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:a(l==null?void 0:l.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a(l==null?void 0:l.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a(l==null?void 0:l.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a(l==null?void 0:l.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[a(l==null?void 0:l.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:a(l==null?void 0:l.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:a(l==null?void 0:l.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]})]})]})}),e.jsxs("div",{className:"flex flex-row flex-wrap justify-center w-full",children:[(r==null?void 0:r.status)&&e.jsx("div",{class:"rounded-lg pt-4 z-50 w-full",children:e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex flex-row flex-wrap",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl text-left",children:[e.jsx("img",{src:X,alt:"pin",className:"w-5 inline"})," Tax Details"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Total Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Rebate (%)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"1% Penalty (₹) "}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Payable Amount (₹)"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:e.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"1"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((j=t==null?void 0:t.duesList)==null?void 0:j.totalDues)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((N=t==null?void 0:t.duesList)==null?void 0:N.rebateAmt)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((y=t==null?void 0:t.duesList)==null?void 0:y.onePercPenalty)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a((p=t==null?void 0:t.duesList)==null?void 0:p.payableAmount)})]})})})]})]}),((g=t==null?void 0:t.duesList)==null?void 0:g.rebates)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-10 text-md font-semibold",children:"Rebate Description"}),e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Rebate Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"percent(%)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount (₹)"})]})}),e.jsx("tbody",{className:"text-sm",children:(u=(v=t==null?void 0:t.duesList)==null?void 0:v.rebates)==null?void 0:u.map((s,x)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.keyString)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[H(s==null?void 0:s.rebatePerc),"%"]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:H(s==null?void 0:s.rebateAmount)})]}))})]})]}),e.jsxs("div",{className:"mt-10",children:[e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-4",children:["Total Dues (₹) : ",e.jsx("span",{className:"font-semibold text-lg",children:a((w=t==null?void 0:t.duesList)==null?void 0:w.totalDues)})," "]}),e.jsxs("div",{className:"col-span-4",children:["Dues From : ",e.jsx("span",{className:"font-semibold text-lg",children:a((T=t==null?void 0:t.duesList)==null?void 0:T.duesFrom)})," "]}),e.jsxs("div",{className:"col-span-4",children:["Dues To : ",e.jsx("span",{className:"font-semibold text-lg",children:a((A=t==null?void 0:t.duesList)==null?void 0:A.duesTo)})," "]}),e.jsxs("div",{className:"col-span-4 mt-5",children:["Total Quarters : ",e.jsx("span",{className:"font-semibold text-lg",children:a((P=t==null?void 0:t.duesList)==null?void 0:P.totalQuarters)})," "]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xl mt-10",children:[e.jsx("img",{src:F,alt:"pin",className:"w-5 inline"})," Demand Overview"]}),e.jsxs("table",{className:"min-w-full leading-normal bg-white rounded-lg shadow-lg mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Arv"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Quarter / Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Additional Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Quarterly Tax (₹)"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  capitalize text-left",children:"Payable Amount (₹)"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(_=t==null?void 0:t.demandList)==null?void 0:_.map((s,x)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.arv)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.qtr)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.fyear)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.additional_tax)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:a(s==null?void 0:s.balance)})]}))})})]}),e.jsx("div",{className:"mt-10 flex",children:!R&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-left flex-1",children:e.jsxs("div",{children:[e.jsx("span",{className:"font-semibold text-gray-600 text-xl",children:"Total Payable Amount  "}),e.jsx("span",{className:"text-3xl font-bold ml-20",children:Z((L=t==null?void 0:t.duesList)==null?void 0:L.payableAmount)})]})}),e.jsx("div",{className:"text-right flex-1",children:e.jsx("button",{onClick:()=>W(`/property-payment/${h}/holding`),type:"submit",className:G,children:"Pay Now "})})]})})]})]})}),(r==null?void 0:r.status)==!1&&e.jsx("div",{className:"text-2xl font-bold text-red-500 mt-20",children:e.jsxs("span",{className:"border border-red-500 px-4 py-2 shadow-xl",children:[r==null?void 0:r.message," "]})})]})]}),e.jsx("div",{className:"w-full mt-20 h-60"})]})}export{re as default};
