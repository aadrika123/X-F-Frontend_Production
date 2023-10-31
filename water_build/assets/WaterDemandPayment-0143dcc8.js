import{l as c,y as X,v as Z,m as ee,I as re,W as te,q as y,z as ae,B as v,D as le,h as g,k as t,o as N,j as e,E as oe,M as D,a7 as C}from"./index-f00892d3.js";const ie=()=>{var A,q,S;const[l,Y]=c.useState(),[de,f]=c.useState(!1),[i,R]=c.useState(),[w,U]=c.useState(),[ne,E]=c.useState(),[I,s]=c.useState(!1),{notify:b}=c.useContext(X),[_,F]=c.useState(!1),[o,M]=c.useState(),[h,se]=c.useState(),[p,T]=c.useState(),{id:m}=Z(),L=ee();re("Water Demand Payment");const{api_waterApprovedApplicationDetails:O,api_waterDemandPaymentonline:V,api_waterListDemand:W,api_waterDemandCalculation:z,api_waterDemandPayment:G,header:x}=te(),B=i==null?void 0:i.consumerDemands[0].connection_type;c.useEffect(()=>{$(),P()},[m]),c.useEffect(()=>{j()},[p,h]);const k=()=>{F(!_)},j=()=>{if(p=="")return M();s(!0);const r={consumerId:m,demandFrom:h,demandUpto:p};y.post(z,r,x).then(function(n){console.log("water demand calculation Details",n.data.data),M(n.data.data),s(!1)}).catch(function(n){console.log("Error : water calculating demand",n),s(!1)})},$=()=>{f(!0),y.post(O,{applicationId:m},x).then(function(r){console.log("water Approved Application Details",r.data.data),Y(r.data.data),f(!1)}).catch(function(r){console.log("Error : water Approved Application Details",r),f(!1)})},P=()=>{s(!0),y.post(W,{ConsumerId:m},x).then(r=>{console.log("Fetched Water Demand List",r.data.data),R(r.data.data),s(!1)}).catch(r=>{console.log("Exception while fetching Water Demand",r),s(!1)})},H=r=>{const n={consumerId:m,demandFrom:h,demandUpto:p,amount:o==null?void 0:o.totalPayAmount,paymentMode:r.paymentMode,remarks:r.remarks,chequeDate:r.cheque_dd_date,bankName:r.bankName,branchName:r.branchName,chequeNo:r.cheque_dd_no};console.log("final submit",n),s(!0),y.post(G,n,x).then(d=>{var u;d.data.status?(P(),s(!1),console.log("Demand Paid Successfully",d),b("Demand Paid Successfully","success"),L(`/waterViewPaymentHistory/${m}`)):(s(!1),console.log("Failed to paid Demand.",d),b((u=d==null?void 0:d.data)==null?void 0:u.message,"error"))}).catch(d=>{s(!1),console.log("Exception while Demand payment",d),b("Error while Demand payment","error")})},J=r=>{s(!0),console.log("payOnline data:",r);const n={consumerId:m,demandFrom:h,demandUpto:p,amount:o==null?void 0:o.totalPayAmount,paymentMode:r.paymentMode,remarks:r.remarks,chequeDate:r.cheque_dd_date,bankName:r.bankName,branchName:r.branchName,chequeNo:r.cheque_dd_no};y.post(V,n,x).then(d=>{var u;d.data.status?(E(d.data.data),console.log("chandan4",d.data.data.refUrl),window.open(decodeURIComponent(d.data.data.refUrl)),s(!1),console.log("Demand Paid online Successfully",d)):(s(!1),console.log("Failed to paid online Demand.",d),b((u=d==null?void 0:d.data)==null?void 0:u.message,"error"))}).catch(d=>{s(!1),console.log("Exception while making the API request",d),b("Error while making the API request","error")})},K=ae({monthUpto:v().required("Require Field"),remarks:v().required("Require Field"),paymentMode:v().required("Require Field")}),a=le({enableReinitialize:!0,initialValues:{monthUpto:"",penalty:"",advanced:"",paymentMode:"",remarks:"",bankName:"",branchName:"",cheque_dd_no:"",cheque_dd_date:""},onSubmit:r=>{if(r.paymentMode==="Online"){J(r);return}H(r),s(!0)},validationSchema:K}),Q=r=>{let n=r.target.name,d=r.target.value;n=="paymentMode"&&U(d),n=="monthUpto"&&T(d),n=="paymentMode"&&(a.setFieldValue("bankName",""),a.setFieldValue("branchName",""),a.setFieldValue("cheque_dd_no",""),a.setFieldValue("cheque_dd_date",""))};return(A=i==null?void 0:i.consumerDemands)==null||A.filter(r=>g(r.demand_upto,"YYYY-MM-DD").format("yy-MM").toString()>=g(h,"YYYY-MM-DD").format("yy-MM")),t(N,{children:[I&&e(oe,{}),e("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:t("div",{className:"col-span-12 rounded-lg p-4",children:[e("div",{className:"p-4",children:t("div",{className:"",children:[t("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e(D,{className:"inline"})," Basic Details"]}),e("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:t("div",{className:"flex space-x-5 pl-4 ",children:[t("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:l!=null&&l.ward_name?l==null?void 0:l.ward_name:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),t("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:l!=null&&l.consumer_no?l==null?void 0:l.consumer_no:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Consumer No"})]}),t("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:l!=null&&l.connection_through?l==null?void 0:l.connection_through:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Connection Through"})]}),(l==null?void 0:l.connection_through)=="SAF"?t("div",{className:"flex-1",children:[e("div",{className:"font-semibold text-md",children:l!=null&&l.saf_no?l==null?void 0:l.saf_no:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"SAF No"})]}):t("div",{className:"flex-1",children:[e("div",{className:"font-semibold text-md",children:l!=null&&l.property_no?l==null?void 0:l.property_no:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Property No"})]}),t("div",{className:"flex-1",children:[e("div",{className:"font-semibold text-md",children:l!=null&&l.owner_char_type?l==null?void 0:l.owner_char_type:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]})]})})]})}),e(N,{children:t("div",{className:"mt-5 p-4",children:[t("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e(D,{className:"inline"}),"Due Demand Details"]}),t("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[e("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:t("tr",{children:[e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand From"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Upto"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Amount"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Penalty"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Connection Type"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Payable Amount "})]})}),e("tbody",{className:"text-sm",children:e(N,{children:(q=i==null?void 0:i.consumerDemands)==null?void 0:q.map((r,n)=>t("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:n+1}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.demand_from?g(r==null?void 0:r.demand_from,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.demand_upto?g(r==null?void 0:r.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.balance_amount?r==null?void 0:r.balance_amount:"N/A"}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.penalty?r==null?void 0:r.penalty:"N/A"}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.connection_type?r==null?void 0:r.connection_type:"N/A"}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.due_balance_amount?"₹ "+(r==null?void 0:r.due_balance_amount):"N/A"})]}))})})]})]})}),e("div",{className:"col-span-12 rounded-lg p-4",children:e("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl border border-y-gray-200 p-4",children:e("form",{onSubmit:a.handleSubmit,onChange:Q,className:"p-4 relative",children:t("div",{className:"grid grid-cols-12",children:[t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Select Month Upto"]}),t("select",{...a.getFieldProps("monthUpto"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e("option",{value:"",children:"Select"}),(S=i==null?void 0:i.consumerDemands)==null?void 0:S.map((r,n)=>e("option",{value:r.demand_upto,children:g(r.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy")},n))]}),e("span",{className:"text-red-600 absolute text-xs",children:a.touched.monthUpto&&a.errors.monthUpto?a.errors.monthUpto:null})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:"Total Demand"}),e("input",{...a.getFieldProps("amount"),value:(o==null?void 0:o.totalDemand)||0,disabled:!0,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md bg-slate-200"}),e("span",{className:"text-red-600 absolute text-xs",children:a.touched.amount&&a.errors.amount?a.errors.amount:null})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:"Penalty"}),e("input",{...a.getFieldProps("penalty"),value:(o==null?void 0:o.totalPenalty)||0,disabled:!0,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md bg-slate-200"}),e("span",{className:"text-red-600 absolute text-xs",children:a.touched.penalty&&a.errors.penalty?a.errors.penalty:null})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:"Advanced"}),e("input",{...a.getFieldProps("advanced"),value:(o==null?void 0:o.totalAdvance)||0,disabled:!0,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md bg-slate-200"}),e("span",{className:"text-red-600 absolute text-xs",children:a.touched.advanced&&a.errors.advanced?a.errors.advanced:null})]}),e("div",{className:"form-group mb-4 col-span-12 md:col-span-6 md:px-4",children:t("p",{children:["Remain Advance : ",e("span",{className:"text-orange-700 font-semibold",children:(o==null?void 0:o.remaningAdvanceAmount)||0})]})}),e("div",{className:"form-group mb-4 col-span-12 md:col-span-6 md:px-4",children:t("p",{children:[" Payable Amount : ",e("span",{className:"text-green-700 font-semibold",children:o!=null&&o.totalPayAmount?"₹"+(o==null?void 0:o.totalPayAmount):0})]})}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Payment Mode"]}),t("select",{...a.getFieldProps("paymentMode"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",onChange:r=>{a.setFieldValue("paymentMode",r.target.value)},children:[e("option",{value:"",children:"Select"}),e("option",{value:"Cash",children:"Cash"}),e("option",{value:"Cheque",children:"Cheque"}),e("option",{value:"DD",children:"DD"}),e("option",{value:"Online",children:"Online"})]}),e("span",{className:"text-red-600 absolute text-xs",children:a.touched.paymentMode&&a.errors.paymentMode?a.errors.paymentMode:null})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Remarks"]}),e("input",{...a.getFieldProps("remarks"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Remarks"}),e("span",{className:"text-red-600 absolute text-xs",children:a.touched.remarks&&a.errors.remarks?a.errors.remarks:null})]}),(w=="Cheque"||w=="DD")&&t(N,{children:[t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Bank Name"]}),e("input",{...a.getFieldProps("bankName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter new ward no."}),e("span",{className:"text-red-600 absolute text-xs",children:a.touched.bankName&&a.errors.bankName?a.errors.bankName:null})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Branch Name"]}),e("input",{...a.getFieldProps("branchName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter new ward no."}),e("span",{className:"text-red-600 absolute text-xs",children:a.touched.branchName&&a.errors.branchName?a.errors.branchName:null})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Cheque/DD No"]}),e("input",{...a.getFieldProps("cheque_dd_no"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e("span",{className:"text-red-600 absolute text-xs",children:a.touched.cheque_dd_no&&a.errors.cheque_dd_no?a.errors.cheque_dd_no:null})]}),t("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Cheque/DD Date"]}),e("input",{...a.getFieldProps("cheque_dd_date"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter new ward no."}),e("span",{className:"text-red-600 absolute text-xs",children:a.touched.cheque_dd_date&&a.errors.cheque_dd_date?a.errors.cheque_dd_date:null})]})]}),e("div",{className:"col-span-12"}),t("div",{className:"col-span-12 grid grid-cols-2 mt-10",children:[e("div",{className:"",children:e("h1",{className:"underline text-1xl text-blue-600 cursor-pointer font-semibold",onClick:k,children:"View Rate Chart"})}),e("div",{className:"md:pl-10 text-right",children:e("button",{type:"submit",className:"px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"Pay Tax"})}),_&&t("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[e("div",{className:"absolute inset-0 bg-black opacity-50"}),B==="Meter"?e("div",{className:"bg-white p-7 rounded-lg shadow-md relative z-10",children:t("div",{children:[e("button",{onClick:k,className:" text-black underline ml-[98%] text-2xl bg-gray-300 hover:bg-red-500",children:e(C,{})}),e("div",{className:"text-center ",children:e("h1",{className:"text-2xl font-semibold underline",children:"For Metered Connection"})}),t("p",{className:"text-1xl text-center",children:[e("span",{className:"font-bold ",children:" Note:"}),"   The generation of demand statements occurs on a quarterly basis."]}),e("div",{className:"text-center ",children:e("h1",{className:"text-1xl font-bold",children:"Monthly Water Rental Charges given below in Rupees"})}),t("table",{className:"table-auto w-full text-sm font-semibold border-collapse",children:[e("thead",{children:t("tr",{className:"bg-gray-200",children:[e("th",{className:"px-4 py-2 border border-black",children:"Sl.No."}),e("th",{className:"px-4 py-2 border border-black",children:"Size of Connection"}),e("th",{className:"px-4 py-2 border border-black",children:"Residential Connection"}),e("th",{className:"px-4 py-2 border border-black",children:"Commercial Consumer"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center ",children:"1"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"15 mm (slum)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"75"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"-"})]}),t("tr",{className:"",children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"2"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"15 mm (General)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"120"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"500"})]}),t("tr",{children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"3"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"20 mm (General)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"200"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"800"})]}),t("tr",{className:"",children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"4"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"20 mm (General)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"400"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"1600"})]})]})]}),e("h1",{className:"text-center font-semibold",children:" Note: Consuption up to 10 unit per month is free for all category of users"}),t("table",{className:"table-auto w-full text-sm font-semibold border-collapse",children:[e("thead",{children:t("tr",{className:"bg-gray-200",children:[e("th",{className:"px-4 py-2 border border-black",children:"Sl.No."}),e("th",{className:"px-4 py-2 border border-black",children:"Category"}),e("th",{className:"px-4 py-2 border border-black",children:"Rate Per Unit"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center ",children:"1"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"Residential (Slum)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"Rs.10 Per unit (Per 1000 ltr)"})]}),t("tr",{className:"",children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"2"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"Residential (General)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"Rs.12 Per unit (Per 1000 ltr)"})]}),t("tr",{children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"3"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"Commercial"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"Rs.50 Per unit (Per 1000 ltr)"})]})]})]})]})}):e("div",{className:"bg-white p-7 rounded-lg shadow-lg relative z-10",children:t("div",{children:[e("button",{onClick:k,className:" text-black underline ml-[98%] text-2xl bg-gray-300 hover:bg-red-500",children:e(C,{})}),e("div",{className:"text-center",children:e("h1",{className:"text-2xl font-semibold underline  ",children:"For Non-Metered Connection"})}),t("p",{className:"text-1xl text-center",children:[e("span",{className:"font-bold ",children:" Note:"}),"   The generation of demand statements occurs on a quarterly basis."]}),t("table",{className:"table-auto w-full text-sm font-semibold border-collapse",children:[e("thead",{children:t("tr",{className:"bg-gray-200",children:[e("th",{className:"px-4 py-2 border border-black",children:"Sl.No."}),e("th",{className:"px-4 py-2 border border-black",children:"Size of Connection"}),e("th",{className:"px-4 py-2 border border-black",children:"Residential Connection"}),e("th",{className:"px-4 py-2 border border-black",children:"Commercial Consumer"})]})}),t("tbody",{children:[t("tr",{children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center ",children:"1"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"15 mm (slum)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"200"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"-"})]}),t("tr",{className:"",children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"2"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"15 mm (General)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"300"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"1000"})]}),t("tr",{children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"3"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"20 mm (General)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"500"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"1600"})]}),t("tr",{className:"",children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"4"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"20 mm (General)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"1000"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"3200"})]})]})]})]})})]})]})]})})})})]})})]})};export{ie as default};
