import{r as n,u as V,a as H,aJ as O,bR as l,A,c as $,U as q,d as z,b as J,j as e,o as Q,az as x,Z,l as K}from"./index-ecfe615e.js";import{W as X}from"./WaterTopButtons-273a528f.js";function re(F){var y,p,u,v,w,M;const[_,i]=n.useState(!1),[s,R]=n.useState(),[r,S]=n.useState(),[f,m]=n.useState(!1),[N,E]=n.useState(!1),[b,ee]=n.useState(!1),[j,Y]=n.useState(),[k,D]=n.useState(!1),{id:o}=V(),I=H(),{api_waterApprovedApplicationDetails:P,api_waterListDemand:C,api_waterselfDemandGenration:T,header:h}=O(),L=t=>{Z.success("Demand Genearted successfully!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),K.post(T,c,h).then(a=>{a.data.status?console.log("Demand Generate Date Saved",a):(console.log("Error Demand Generate",a),m(a.data.message))}).catch(a=>{console.log("Exception While going to generate Demand",a.response.data),m(a.response.data)})},W=l(Date()).format("DD-MMM-yy"),B=()=>{i(!0),A.post(P,{id:o},h).then(function(t){console.log("water Approved Application Details",t.data.data),R(t.data.data),i(!1)}).catch(function(t){console.log("Error : water Approved Application Details",t),i(!1)})};n.useEffect(()=>{A.post(C,{ConsumerId:o},h).then(t=>{t.data.status?(console.log("Fetched Water Demand List",t.data.data),S(t.data.data)):console.log("Demand not found")}).catch(t=>{console.log("Exception while fetching Water Demand",t)})},[o]),n.useEffect(()=>{B()},[o]);const G=$().shape({meterReading:q().required("Enter Meter Reading"),meterImage:z().required("Select a meter Image")}),d=J({enableReinitialize:!0,initialValues:{meterReading:"",meterImage:""},onSubmit:(t,{resetForm:a})=>{L(),a()},validationSchema:G}),U=t=>{let a=t.target.name,g=t.target.value;console.log("formik.values.meterReading",g),m(!1),E(""),a==="meterReading"&&(D(g),d.setFieldValue("meterReading",g)),a==="meterImage"&&Y(t.target.files[0]),console.log("docPath",j)};let c=new FormData;return c.append("id",o),c.append("finalReading",k),c.append("document",j),e.jsxs(e.Fragment,{children:[_&&e.jsx(Q,{}),e.jsx(X,{active:"demand",consumerNo:s==null?void 0:s.consumer_no}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:e.jsx("div",{className:"col-span-12 rounded-lg",children:e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e.jsx(x,{className:"inline"})," Basic Details"]}),e.jsx("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl",children:e.jsxs("div",{className:"flex flex-wrap gap-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:s!=null&&s.ulb_name?s==null?void 0:s.ulb_name:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"ULB Name"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.ward_name?s==null?void 0:s.ward_name:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.consumer_no?s==null?void 0:s.consumer_no:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Consumer No"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.connection_through?s==null?void 0:s.connection_through:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Connection Through"})]}),(s==null?void 0:s.connection_through)=="SAF"?e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:s!=null&&s.saf_no?s==null?void 0:s.saf_no:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"SAF No"})]}):e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:s!=null&&s.holding_no?s==null?void 0:s.holding_no:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:s!=null&&s.owner_char_type?s==null?void 0:s.owner_char_type:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]})]})})]}),e.jsx("div",{children:e.jsxs("div",{className:"p-4",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500 mt-3 mr-[60%]",children:[e.jsx(x,{className:"inline"}),"Basic details of Meter "]}),e.jsx("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl",children:e.jsxs("div",{className:"flex flex-wrap gap-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:(s==null?void 0:s.connectionName)||"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Connection Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:((y=s==null?void 0:s.meterDetails)==null?void 0:y.meter_no)||"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Meter No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s!=null&&s.lastMeterReading?s==null?void 0:s.lastMeterReading:"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Last Meter Reading"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:((p=s==null?void 0:s.meterDetails)==null?void 0:p.connection_date)||"N/A"}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Connection Date"})]})]})})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e.jsx(x,{className:"inline"}),"Self Demand Generated"]}),e.jsx("div",{className:"mt-6 py-6  bg-white rounded-lg shadow-xl p-3",children:e.jsxs("form",{onSubmit:d.handleSubmit,onChange:U,className:"p-4 relative",children:[e.jsxs("div",{className:"flex space-x-5 pl-4 ",children:[e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Upload Meter Image ",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{type:"file",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",...d.getFieldProps("meterImage")}),d.errors.meterImage&&d.touched.meterImage&&e.jsx(e.Fragment,{children:e.jsx("p",{className:"text-[red]",children:d.errors.meterImage})})]})}),e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Final Meter Reading ",e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 disabled:bg-gray-100 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-auto",placeholder:"Enter Meter Reading",...d.getFieldProps("meterReading")}),d.errors.meterReading&&d.touched.meterReading&&e.jsx(e.Fragment,{children:e.jsx("p",{className:"text-[red]",children:d.errors.meterReading})})]})}),e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold",children:" Date"}),e.jsx("p",{className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 disabled:bg-gray-100 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md  text-center cursor-default",children:W})]})})]}),e.jsx("p",{className:"text-red-500 text-center font-semibold  ",children:f&&"Error : "+f}),e.jsxs("p",{className:"text-red-500 text-center font-semibold  ",children:[N&&N,b&&b]}),e.jsx("div",{className:"flex justify-end mr-5",children:e.jsx("button",{type:"submit",className:"bg-indigo-700 px-3 py-2 text-white rounded",children:"Generate Demand"})})]})}),r?e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap w-full space-x-0 my-5",children:[e.jsxs("div",{className:"grow",children:[e.jsx("span",{className:"text-sm",children:"Total Dues :"})," ",e.jsxs("span",{className:"font-semibold text-gray-700 text-lg",children:["₹ ",r==null?void 0:r.totalSumDemand]})]}),e.jsxs("div",{className:"grow",children:[e.jsx("span",{className:"text-sm",children:"Due From :"})," ",e.jsxs("span",{className:"font-semibold text-gray-700 text-lg",children:[l((u=r==null?void 0:r.consumerDemands[0])==null?void 0:u.demand_from,"YYYY-MM-DD").format("DD-MMM-yy")," "]})]}),e.jsxs("div",{className:"grow",children:[e.jsx("span",{className:"text-sm",children:"Due Upto :"})," ",e.jsxs("span",{className:"font-semibold text-gray-700 text-lg",children:[l((v=r==null?void 0:r.consumerDemands.at(-1))==null?void 0:v.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy")," "]})]}),e.jsxs("div",{className:"grow",children:[e.jsx("span",{className:"text-sm",children:"Total Due Months :"})," ",e.jsx("span",{className:"font-semibold text-gray-700 text-lg",children:(w=r==null?void 0:r.consumerDemands)==null?void 0:w.length})]})]}),e.jsxs("div",{className:"mt-5",style:{maxHeight:"300px",overflowY:"auto"},children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e.jsx(x,{className:"inline"})," Demand Details"]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand From"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Upto"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Penalty"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Connection Type"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Payable Amount "})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(M=r==null?void 0:r.consumerDemands)==null?void 0:M.map((t,a)=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.demand_from?l(t==null?void 0:t.demand_from,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.demand_upto?l(t==null?void 0:t.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.balance_amount?t==null?void 0:t.balance_amount:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.penalty?t==null?void 0:t.penalty:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.connection_type?t==null?void 0:t.connection_type:"N/A"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.amount?"₹ "+(t==null?void 0:t.amount):"N/A"})]}))})})]})]}),e.jsxs("div",{className:"mt-6 mx-3",children:[e.jsxs("div",{className:"float-left flex space-x-8",children:[e.jsx("p",{className:"text-gray-600 text-xl font-semibold",children:"Total Payable Amount"}),e.jsxs("p",{className:"text-black text-3xl font-semibold",children:["₹ ",r==null?void 0:r.totalSumDemand]})]}),e.jsx("div",{className:"float-right",children:e.jsx("button",{onClick:()=>I(`/waterDemandPayment/${o}`),className:"bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded shadow-2xl text-white text-sm",children:"Pay Now"})})]})]}):e.jsx("div",{className:"text-center mt-5 border border-indigo-300 shadow-md rounded py-2 font-semibold text-red-600",children:"Demand Not Found !"})]})})}),e.jsx("div",{className:"w-full h-60"})]})}export{re as default};
