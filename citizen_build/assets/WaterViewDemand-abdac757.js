import{v as $,r as n,u as q,a as H,aQ as Q,c2 as x,A as D,c as U,Y as z,d as J,b as K,j as e,p as X,aF as i,a1 as Z,m as F}from"./index-a34e0778.js";import{W as ee}from"./WaterTopButtons-6c2e8611.js";function de(se){var y,u,v,w,I,W;const{t:r}=$(),[L,m]=n.useState(!1),[s,M]=n.useState(),[t,_]=n.useState(),[f,b]=n.useState(!1),[N,A]=n.useState(!1),[j,ae]=n.useState(!1),[p,R]=n.useState(),[Y,E]=n.useState(!1),{id:o}=q(),S=H(),{api_waterApprovedApplicationDetails:k,api_waterListDemand:P,api_waterselfDemandGenration:T,header:h}=Q(),C=a=>{Z.success("Demand Genearted successfully!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),F.post(T,c,h).then(d=>{d.data.status?console.log("Demand Generate Date Saved",d):(console.log("Error Demand Generate",d),b(d.data.message))}).catch(d=>{console.log("Exception While going to generate Demand",d.response.data),b(d.response.data)})},G=x(Date()).format("DD-MMM-yy"),V=()=>{m(!0),D.post(k,{id:o},h).then(function(a){console.log("water Approved Application Details",a.data.data),M(a.data.data),m(!1)}).catch(function(a){console.log("Error : water Approved Application Details",a),m(!1)})};n.useEffect(()=>{D.post(P,{ConsumerId:o},h).then(a=>{a.data.status?(console.log("Fetched Water Demand List",a.data.data),_(a.data.data)):console.log("Demand not found")}).catch(a=>{console.log("Exception while fetching Water Demand",a)})},[o]),n.useEffect(()=>{V()},[o]);const B=U().shape({meterReading:z().required("Enter Meter Reading"),meterImage:J().required("Select a meter Image")}),l=K({enableReinitialize:!0,initialValues:{meterReading:"",meterImage:""},onSubmit:(a,{resetForm:d})=>{C(),d()},validationSchema:B}),O=a=>{let d=a.target.name,g=a.target.value;console.log("formik.values.meterReading",g),b(!1),A(""),d==="meterReading"&&(E(g),l.setFieldValue("meterReading",g)),d==="meterImage"&&R(a.target.files[0]),console.log("docPath",p)};let c=new FormData;return c.append("id",o),c.append("finalReading",Y),c.append("document",p),e.jsxs(e.Fragment,{children:[L&&e.jsx(X,{}),e.jsx(ee,{active:"demand",consumerNo:s==null?void 0:s.consumer_no}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:e.jsx("div",{className:"col-span-12 rounded-lg",children:e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e.jsx(i,{className:"inline"})," ",r("tranWaterDashboardIndex.basicDetailsLabel.label")]}),e.jsx("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl",children:e.jsxs("div",{className:"flex flex-wrap gap-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:s!=null&&s.ulb_name?s==null?void 0:s.ulb_name:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("tranWaterDashboardIndex.ulbNameLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.ward_name?s==null?void 0:s.ward_name:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("tranWaterDashboardIndex.wardNoLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.consumer_no?s==null?void 0:s.consumer_no:"N/A"}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[" ",r("tranWaterDashboardIndex.consumerNoLabel.label")]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.connection_through?s==null?void 0:s.connection_through:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("tranWaterDashboardIndex.connectionThroughLabel.label")})]}),(s==null?void 0:s.connection_through)=="SAF"?e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:s!=null&&s.saf_no?s==null?void 0:s.saf_no:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("tranWaterDashboardIndex.safNoLabel.label")})]}):e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:s!=null&&s.holding_no?s==null?void 0:s.holding_no:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("tranWaterDashboardIndex.holdingNoLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:s!=null&&s.owner_char_type?s==null?void 0:s.owner_char_type:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("tranWaterDashboardIndex.ownershipTypeLabel.label")})]})]})})]}),e.jsx("div",{children:e.jsxs("div",{className:"p-4",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500 mt-3 mr-[60%]",children:[e.jsx(i,{className:"inline"}),r("tranWaterDashboardIndex.basicDetailsOfMeterLabel.label")," "]}),e.jsx("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl",children:e.jsxs("div",{className:"flex flex-wrap gap-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:(s==null?void 0:s.connectionName)||"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("tranWaterDashboardIndex.connectionTypeLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:((y=s==null?void 0:s.meterDetails)==null?void 0:y.meter_no)||"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("tranWaterDashboardIndex.meterNoLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.lastMeterReading?s==null?void 0:s.lastMeterReading:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("tranWaterDashboardIndex.lastMeterReadingLabel.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:((u=s==null?void 0:s.meterDetails)==null?void 0:u.connection_date)||"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:r("tranWaterDashboardIndex.connectionDateLabel.label")})]})]})})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e.jsx(i,{className:"inline"}),r("tranWaterDashboardIndex.selfDemandGeneratedLabel.label")]}),e.jsx("div",{className:"mt-6 py-6  bg-white rounded-lg shadow-xl p-3",children:e.jsxs("form",{onSubmit:l.handleSubmit,onChange:O,className:"p-4 relative",children:[e.jsxs("div",{className:"flex space-x-5 pl-4 ",children:[e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[r("tranWaterDashboardIndex.uploadMeterImageLabel.label"),e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{type:"file",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",...l.getFieldProps("meterImage")}),l.errors.meterImage&&l.touched.meterImage&&e.jsx(e.Fragment,{children:e.jsx("p",{className:"text-[red]",children:l.errors.meterImage})})]})}),e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[r("tranWaterDashboardIndex.finalMeterReadingLabel.label")," ",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 disabled:bg-gray-100 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-auto",placeholder:"Enter Meter Reading",...l.getFieldProps("meterReading")}),l.errors.meterReading&&l.touched.meterReading&&e.jsx(e.Fragment,{children:e.jsx("p",{className:"text-[red]",children:l.errors.meterReading})})]})}),e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold",children:[" ",r("tranWaterDashboardIndex.dateLabel.label")]}),e.jsx("p",{className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 disabled:bg-gray-100 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md  text-center cursor-default",children:G})]})})]}),e.jsx("p",{className:"text-red-500 text-center font-semibold  ",children:f&&"Error : "+f}),e.jsxs("p",{className:"text-red-500 text-center font-semibold  ",children:[N&&N,j&&j]}),e.jsx("div",{className:"flex justify-end mr-5",children:e.jsx("button",{type:"submit",className:"bg-indigo-700 px-3 py-2 text-white rounded",children:r("tranWaterDashboardIndex.generateDemandLabel.label")})})]})}),t?e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap w-full space-x-0 my-5",children:[e.jsxs("div",{className:"grow",children:[e.jsxs("span",{className:"text-sm",children:[" ",r("tranWaterDashboardIndex.totalDuesLabel.label"),":"]})," ",e.jsxs("span",{className:"font-semibold text-gray-700 text-lg",children:["₹ ",t==null?void 0:t.totalSumDemand]})]}),e.jsxs("div",{className:"grow",children:[e.jsxs("span",{className:"text-sm",children:[" ",r("tranWaterDashboardIndex.dueFromLabel.label"),":"]})," ",e.jsxs("span",{className:"font-semibold text-gray-700 text-lg",children:[x((v=t==null?void 0:t.consumerDemands[0])==null?void 0:v.demand_from,"YYYY-MM-DD").format("DD-MMM-yy")," "]})]}),e.jsxs("div",{className:"grow",children:[e.jsxs("span",{className:"text-sm",children:[" ",r("tranWaterDashboardIndex.dueUptoLabel.label"),":"]})," ",e.jsxs("span",{className:"font-semibold text-gray-700 text-lg",children:[x((w=t==null?void 0:t.consumerDemands.at(-1))==null?void 0:w.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy")," "]})]}),e.jsxs("div",{className:"grow",children:[e.jsxs("span",{className:"text-sm",children:[" ",r("tranWaterDashboardIndex.totalDueMonthsLabel.label"),":"]})," ",e.jsx("span",{className:"font-semibold text-gray-700 text-lg",children:(I=t==null?void 0:t.consumerDemands)==null?void 0:I.length})]})]}),e.jsxs("div",{className:"mt-5",style:{maxHeight:"300px",overflowY:"auto"},children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e.jsx(i,{className:"inline"})," ",r("tranWaterDashboardIndex.demandDetailsLabel.label")]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:r("tranWaterDashboardIndex.demandFromLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:r("tranWaterDashboardIndex.demandUptoLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:r("tranWaterDashboardIndex.demandAmountLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:r("tranWaterDashboardIndex.penaltyLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:r("tranWaterDashboardIndex.connectionTypeLabel.label")}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:[r("tranWaterDashboardIndex.payableAmountLabel.label")," "]})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(W=t==null?void 0:t.consumerDemands)==null?void 0:W.map((a,d)=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:d+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.demand_from?x(a==null?void 0:a.demand_from,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.demand_upto?x(a==null?void 0:a.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.balance_amount?a==null?void 0:a.balance_amount:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.penalty?a==null?void 0:a.penalty:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.connection_type?a==null?void 0:a.connection_type:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.amount?"₹ "+(a==null?void 0:a.amount):"N/A"})]}))})})]})]}),e.jsxs("div",{className:"mt-6 mx-3",children:[e.jsxs("div",{className:"float-left flex space-x-8",children:[e.jsx("p",{className:"text-gray-600 text-xl font-semibold",children:r("tranWaterDashboardIndex.totalPayableAmountLabel.label")}),e.jsxs("p",{className:"text-black text-3xl font-semibold",children:["₹ ",t==null?void 0:t.totalSumDemand]})]}),e.jsx("div",{className:"float-right",children:e.jsx("button",{onClick:()=>S(`/waterDemandPayment/${o}`),className:"bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded shadow-2xl text-white text-sm",children:r("tranWaterDashboardIndex.payNowLabel.label")})})]})]}):e.jsx("div",{className:"text-center mt-5 border border-indigo-300 shadow-md rounded py-2 font-semibold text-red-600",children:r("tranWaterDashboardIndex.demandNotFoundLabel.label")})]})})}),e.jsx("div",{className:"w-full h-60"})]})}export{de as default};
