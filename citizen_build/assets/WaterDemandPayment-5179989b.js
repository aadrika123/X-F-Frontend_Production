import{b0 as Z,a as M,r as d,j as e,M as J,cE as K,cF as Q,v as X,u as ee,h as ae,b1 as se,A as g,c as te,b as le,bm as f,p as ne,aH as L,cG as re,bZ as oe}from"./index-d8dc37f9.js";const de={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"transparent",border:"none"}};function ce(p){const[l,s]=Z.useState(!1),n=p==null?void 0:p.transData,j=M(),c=p.paymentData;console.log("paymentData======",c),d.useEffect(()=>{s(!0)},[]);function r(){}function u(){s(!1)}return e.jsx("div",{className:"",children:e.jsx(J,{isOpen:l,onAfterOpen:r,onRequestClose:u,style:de,contentLabel:"Example Modal",children:e.jsx("div",{children:e.jsxs("div",{className:"bg-green-200 shadow-2xl border border-sky-200 p-5 m-5 rounded-md",children:[e.jsxs("div",{onClick:u,className:"absolute cursor-pointer bg-green-100 hover:bg-gray-300 p-1 rounded-md",children:[e.jsx(K,{})," "]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:Q,className:"h-20",alt:"",srcset:""})}),e.jsx("div",{className:"py-1 pl-3 font-semibold text-center text-2xl text-gray-800",children:" Payment Completed Successfully "}),e.jsxs("p",{className:"text-center",children:[e.jsx("span",{className:"text-base",children:" Payment Transaction No"})," ",e.jsx("span",{className:"font-bold text-blue-700 text-xl",children:n==null?void 0:n.transectionNo})]}),e.jsx("p",{className:"border-b border-gray-300 mx-10 py-1"}),e.jsxs("div",{className:"grid grid-cols-12 px-8 py-3 leading-8 space-x-8 text-sm",children:[e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[e.jsx("p",{children:"Application No"}),e.jsx("p",{children:"Connection Type"})]}),e.jsxs("div",{className:"col-span-6 ml-3",children:[e.jsx("p",{children:n==null?void 0:n.applicationNo}),e.jsx("p",{children:n==null?void 0:n.tranType})]})]})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[e.jsx("p",{children:"Amount"}),e.jsx("p",{children:"Payment Date"})]}),e.jsxs("div",{className:"col-span-6",children:[e.jsx("p",{children:n==null?void 0:n.amount}),e.jsx("p",{children:n==null?void 0:n.transectionDate})]})]})}),e.jsx("div",{className:"col-span-12 md:mt-4 mt-10",children:e.jsxs("div",{className:"flex justify-center",children:[e.jsx("button",{onClick:u,className:"mx-2 bg-sky-600 hover:bg-sky-700 transition duration-200 hover:scale-105 font-normal text-white px-6 py-1 text-sm rounded-sm shadow-xl",children:"Close"}),n&&e.jsx("button",{onClick:()=>j(`/waterUserReceipt/${n==null?void 0:n.transectionNo}`),className:"mx-2 bg-indigo-600 hover:bg-indigo-700 transition duration-200 hover:scale-105 font-normal text-white px-4 py-2 text-sm  rounded-sm shadow-xl",children:"View Receipt"})]})})]})]})})})})}const ue=()=>{var I,A;const{handlePayment:p}=oe(),{t:l}=X(),[s,n]=d.useState(),[j,c]=d.useState(!1),[r,u]=d.useState(),[x,N]=d.useState(),[y,W]=d.useState(),[v,S]=d.useState(),[_,ie]=d.useState(!1),[C,xe]=d.useState(),{id:m}=ee(),w=M();d.useContext(ae);const[b,D]=d.useState(!0),Y=`${b==!0?"isFullPayment":"isPartPayment"}`,{api_waterinitatePaymentDemand:E,api_newwaterconnectionupdateDemand:T,api_getTranNo:me,api_waterApprovedApplicationDetails:F,api_waterListDemand:O,api_waterDemandCalculation:U,api_waterDemandPayment:be,header:h}=se();d.useEffect(()=>{$(),G()},[m]),d.useEffect(()=>{V()},[v,y]);const V=()=>{if(v==""||y=="")return N();c(!0);const a={consumerId:m,demandFrom:y,demandUpto:v};g.post(U,a,h).then(function(o){console.log("water demand calculation Details",o.data.data),N(o.data.data),c(!1)}).catch(function(o){console.log("Error : water calculating demand",o),c(!1)})},$=()=>{c(!0),g.post(F,{id:m},h).then(function(a){console.log("water Approved Application Details",a.data.data),n(a.data.data),c(!1)}).catch(function(a){console.log("Error : water Approved Application Details",a),c(!1)})},G=()=>{g.post(O,{ConsumerId:m},h).then(a=>{console.log("Fetched Water Demand List",a.data.data),u(a.data.data)}).catch(a=>{console.log("Exception while fetching Water Demand",a)})},R=a=>{console.log(a),console.log("afterSuccessssssssssssssssssssss"),g.post(T,{txnid:a==null?void 0:a.merchantTransactionIdentifier,applycationType:"NewConnectionCharge"},h).then(o=>{o.data.status===!0?(w(`/waterViewPaymentHistory/${m}`),console.log("Data Really Saved",o)):console.log("Error While paying Online Payment ",o)}).catch(o=>{console.log("Online payment not done successfully",o)})},q=()=>{console.log("Error:fasdasdas "),w(`/waterDemandPayment/${m}`)},z=()=>{var o;c(!0);const a={consumerId:m,applycationType:"Demand Collection",amount:`${b?"":(o=t==null?void 0:t.values)==null?void 0:o.amount}`,paymentType:Y,paymentMode:"online",remarks:"citizen payment"};console.log("final submit",a),g.post(E,a,h).then(i=>{var P,k;c(!1),console.log("Order ID Generated",i),console.log((k=(P=i==null?void 0:i.data)==null?void 0:P.data)==null?void 0:k.hash,"Order ID Generated.............."),i.data.status===!0&&p(i,R,q)}).catch(i=>{c(!1),console.error("Error generating Order ID",i)})},H=te({}),t=le({enableReinitialize:!0,initialValues:{monthFrom:"",monthUpto:"",penalty:"",rebate:"",advanced:""},onSubmit:(a,o)=>{z()},validationSchema:H}),B=a=>{let o=a.target.name,i=a.target.value;o=="monthFrom"&&W(i),o=="monthUpto"&&S(i)};return(I=r==null?void 0:r.consumerDemands)==null||I.filter(a=>f(a.demand_upto,"YYYY-MM-DD").format("yy-MM").toString()>=f(y,"YYYY-MM-DD").format("yy-MM")),e.jsxs(e.Fragment,{children:[j&&e.jsx(ne,{}),_&&e.jsx(ce,{transData:C}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:e.jsxs("div",{className:"col-span-12 rounded-lg p-4",children:[e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e.jsx(L,{className:"inline"})," ",l("tranWaterDashboardIndex.basicDetailsLabel.label")]}),e.jsx("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:e.jsxs("div",{className:"flex space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:s!=null&&s.ulb_name?s==null?void 0:s.ulb_name:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("tranWaterDashboardIndex.ulbNameLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.ward_name?s==null?void 0:s.ward_name:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("tranWaterDashboardIndex.wardNoLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.consumer_no?s==null?void 0:s.consumer_no:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("tranWaterDashboardIndex.consumerNoLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:s!=null&&s.property_no?s==null?void 0:s.property_no:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("tranWaterDashboardIndex.holdingNoLabel.label")})]})]})})]})}),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-5 p-4",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e.jsx(L,{className:"inline"}),l("tranWaterDashboardIndex.dueDemandDetailsLabel.label")]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterDashboardIndex.demandFromLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterDashboardIndex.demandUptoLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterDashboardIndex.demandAmountLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterDashboardIndex.penaltyLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:l("tranWaterDashboardIndex.connectionTypeLabel.label")}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:[l("tranWaterDashboardIndex.payableAmountLabel.label")," "]})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(A=r==null?void 0:r.consumerDemands)==null?void 0:A.map((a,o)=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:o+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.demand_from?f(a==null?void 0:a.demand_from,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.demand_upto?f(a==null?void 0:a.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.balance_amount?a==null?void 0:a.balance_amount:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.penalty?a==null?void 0:a.penalty:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.connection_type?a==null?void 0:a.connection_type:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.amount?"₹ "+(a==null?void 0:a.amount):"N/A"})]}))})})]})]})}),e.jsx("div",{className:"col-span-12 rounded-lg p-4",children:e.jsx("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl border border-y-gray-200 p-4",children:e.jsxs("form",{onSubmit:t.handleSubmit,onChange:B,className:"p-4 relative",children:[e.jsxs("div",{className:"flex ",children:[e.jsx("div",{className:" w-full",children:e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold"}),e.jsxs("div",{className:"flex gap-10",children:[e.jsxs("div",{children:[e.jsx("input",{type:"checkbox",id:"fullPayment",checked:b,onChange:()=>D(!b)}),e.jsx("label",{htmlFor:"fullPayment",children:"Full Payment"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"checkbox",id:"partPayment",checked:!b,onChange:()=>D(!b)}),e.jsx("label",{htmlFor:"partPayment",children:"Part Payment"})]})]})]})}),e.jsx("div",{className:" w-full",children:!b&&e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})," Amount"]}),e.jsx("input",{...t.getFieldProps("amount"),type:"text",required:!0,onInput:a=>{re(a,["mobile","number"])},className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Amount."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.amount&&t.errors.amount?t.errors.amount:null})]})})]}),e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("tranWaterDashboardIndex.totalDemandLabel.label")}),e.jsx("input",{...t.getFieldProps("amount"),value:(r==null?void 0:r.totalSumDemand)||0,disabled:!0,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md bg-slate-200"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.amount&&t.errors.amount?t.errors.amount:null})]}),e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("tranWaterDashboardIndex.penaltyLabel.label")}),e.jsx("input",{...t.getFieldProps("penalty"),value:(x==null?void 0:x.totalPenalty)||0,disabled:!0,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md bg-slate-200"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.penalty&&t.errors.penalty?t.errors.penalty:null})]}),e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("tranWaterDashboardIndex.rebateLabel.label")}),e.jsx("input",{...t.getFieldProps("rebate"),value:(x==null?void 0:x.totalRebate)||0,disabled:!0,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md bg-slate-200"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.rebate&&t.errors.rebate?t.errors.rebate:null})]}),e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:l("tranWaterDashboardIndex.advancedLabel.label")}),e.jsx("input",{...t.getFieldProps("advanced"),value:(x==null?void 0:x.totalAdvance)||0,disabled:!0,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md bg-slate-200"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:t.touched.advanced&&t.errors.advanced?t.errors.advanced:null})]}),e.jsx("div",{className:"form-group mb-4 col-span-12 md:col-span-6 md:px-4",children:e.jsxs("p",{children:[l("tranWaterDashboardIndex.remainAdvanceLabel.label")," : ",e.jsx("span",{className:"text-orange-700 font-semibold",children:(r==null?void 0:r.remainAdvance)||0})]})}),e.jsx("div",{className:"form-group mb-4 col-span-12 md:col-span-6 md:px-4",children:e.jsxs("p",{children:[" ",l("tranWaterDashboardIndex.payableAmountLabel.label")," : ",e.jsx("span",{className:"text-green-700 font-semibold",children:((r==null?void 0:r.totalSumDemand)||0)-((r==null?void 0:r.remainAdvance)||0)})]})}),e.jsxs("div",{className:"col-span-12 grid grid-cols-2 mt-10",children:[e.jsx("div",{className:""}),e.jsxs("div",{className:"md:pl-10 text-right space-x-5",children:[e.jsx("button",{type:"button",onClick:()=>w(-1),className:" px-6 py-2.5 bg-sky-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:l("tranWaterDashboardIndex.backLabel.label")}),e.jsx("button",{type:"submit",className:" px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-indigo-600 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:l("tranWaterDashboardIndex.payTaxLabel.label")})]})]})]})]})})})]})})]})};export{ue as default};
