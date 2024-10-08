import{l as m,y as ce,v as de,m as ie,z as me,W as be,q as g,B as ue,D as O,E as he,h as v,k as a,o as k,j as e,G as pe,M as R,a6 as U,a7 as xe}from"./index-8199b4b8.js";const ge=(r,n)=>{if(n.includes("mobile")){const l=r.target.value;l.length>10&&(r.target.value=l.slice(0,10))}if(n.includes("zip")){const l=r.target.value;l.length>6&&(r.target.value=l.slice(0,6))}if(n.includes("partPayment")){const l=r.target.value;l.length>7&&(r.target.value=l.slice(0,7))}if(n.includes("floatNumber")){const l=r.target.value;r.target.value=l.replace(/[^0-9.]/g,"")}if(n.includes("mReading")){const l=r.target.value;l.length>4&&(r.target.value=l.slice(0,4))}if(n.includes("aadhar")){const l=r.target.value;l.length>12&&(r.target.value=l.slice(0,12))}if(n.includes("removeDoubleSpace")){const l=r.target.value;r.target.value=l.replace(/\s+/g," ")}if(n.includes("removeSpecialCharacter")){const l=r.target.value;r.target.value=l.replace(/[^a-zA-Z0-9]/g,"")}if(n.includes("removeSpecialCharacterExceptSpace")){const l=r.target.value;r.target.value=l.replace(/[^a-zA-Z0-9 ]/g,"")}if(n.includes("removeSpecialCharacterExceptSpaceAndDot")){const l=r.target.value;r.target.value=l.replace(/[^a-zA-Z0-9 .]/g,"")}if(n.includes("sqlInjectionGuard")){const l=r.target.value;(l.includes("drop")||l.includes("select"))&&(r.target.value="")}if(n.includes("address")){const l=r.target.value;r.target.value=l.replace(/[^a-zA-Z0-9 ,]/g,"")}if(n.includes("phone")){const l=r.target.value;r.target.value=l.replace(/[^0-9]/g,"")}if(n.includes("email")){const l=r.target.value;r.target.value=l.replace(/[^a-zA-Z0-9@.]/g,"")}if(n.includes("string")){const l=r.target.value;r.target.value=l.replace(/[^a-zA-Z ]/g,"")}if(n.includes("number")){const l=r.target.value;r.target.value=l.replace(/[^0-9]/g,"")}if(n.includes("removeDoubleQuote")){const l=r.target.value;r.target.value=l.replace(/"/g,"")}if(n.includes("removeSingleQuote")){const l=r.target.value;r.target.value=l.replace(/'/g,"")}if(n.includes("removeSpecialCharacterWithDoubleSpace")){const l=r.target.value;r.target.value=l.replace(/[^a-zA-Z0-9 ]/g,"");const u=r.target.value;r.target.value=u.replace(/\s+/g," ")}if(n.includes("CapitalFirstLetter")){const l=r.target.value;r.target.value=l.charAt(0).toUpperCase()+l.slice(1)}if(n.includes("UppercaseAfterSpace")){const l=r.target.value;r.target.value=l.split(" ").map(u=>u.charAt(0).toUpperCase()+u.slice(1)).join(" ")}if(n.includes("Uppercase")){const l=r.target.value;r.target.value=l.toUpperCase()}if(n.includes("removeSpace")){const l=r.target.value;r.target.value=l.replace(/\s+/g,"")}if(n.includes("password")){const l=r.target.value;r.target.value=l.replace(/[^a-zA-Z0-9@#$%^&*]/g,"")}if(n.includes("Lowercase")){const l=r.target.value;r.target.value=l.toLowerCase()}if(n.includes("none")){const l=r.target.value;r.target.value=l}},ke=()=>{var T,F,z,I;const[r,n]=m.useState(),[l,u]=m.useState(!1),[c,G]=m.useState(),[w,L]=m.useState();m.useState();const[W,i]=m.useState(!1),{notify:_}=m.useContext(ce),[S,$]=m.useState(!1),[P,A]=m.useState(),[y,ye]=m.useState(),[f,Z]=m.useState(),[h,D]=m.useState(!0),{id:b}=de(),C=ie(),{handlePayment:j}=xe();me("Water Demand Payment");const{api_waterinitatePaymentDemand:B,api_newwaterconnectionupdateDemand:H,api_waterApprovedApplicationDetails:Q,api_waterDemandPaymentonline:fe,api_waterListDemand:J,api_waterDemandCalculation:K,api_waterDemandPayment:X,header:x}=be(),V=(F=(T=c==null?void 0:c.consumerDemands)==null?void 0:T[0])==null?void 0:F.connection_type;m.useEffect(()=>{re(),q()},[b]),m.useEffect(()=>{ee()},[f,y]);const M=()=>{$(!S)},ee=()=>{if(f=="")return A();i(!0);const t={consumerId:b,demandFrom:y,demandUpto:f};g.post(K,t,x).then(function(s){console.log("water demand calculation Details",s.data.data),A(s.data.data),i(!1)}).catch(function(s){console.log("Error : water calculating demand",s),i(!1)})},re=()=>{u(!0),g.post(Q,{applicationId:b},x).then(function(t){console.log("water Approved Application Details",t.data.data),n(t.data.data),u(!1)}).catch(function(t){console.log("Error : water Approved Application Details",t),u(!1)})},q=()=>{i(!0),g.post(J,{ConsumerId:b},x).then(t=>{console.log("Fetched Water Demand List",t.data.data),G(t.data.data),i(!1)}).catch(t=>{console.log("Exception while fetching Water Demand",t),i(!1)})},E=`${h==!0?"isFullPayment":"isPartPayment"}`,te=t=>{var p;const s={consumerId:b,demandFrom:y,demandUpto:f,amount:`${h?"":(p=o==null?void 0:o.values)==null?void 0:p.amount}`,paymentMode:t.paymentMode,remarks:t.remarks,paymentType:E,chequeDate:t.cheque_dd_date,bankName:t.bankName,branchName:t.branchName,chequeNo:t.cheque_dd_no};console.log("final submit",s),i(!0),g.post(X,s,x).then(d=>{var N;d.data.status?(q(),i(!1),console.log("Demand Paid Successfully",d),_("Demand Paid Successfully","success"),C(`/waterViewPaymentHistory/${b}`)):(i(!1),console.log("Failed to paid Demand.",d),_((N=d==null?void 0:d.data)==null?void 0:N.message,"error"))}).catch(d=>{i(!1),console.log("Exception while Demand payment",d),_("Error while Demand payment","error")})},ae=t=>{console.log(t),console.log("afterSuccessssssssssssssssssssss"),g.post(H,{txnid:t==null?void 0:t.merchantTransactionIdentifier,applycationType:"Demand Collection"},x).then(s=>{s.data.status===!0?(C(`/waterViewPaymentHistory/${b}`),console.log("Data Really Saved",s)):console.log("Error While paying Online Payment ",s)}).catch(s=>{console.log("Online payment not done successfully",s)})},le=()=>{console.log("Error:fasdasdas "),C(`/water-demand-payment/${b}`)},oe=t=>{var p;i(!0),console.log("payOnline data:",t);const s={consumerId:b,applycationType:"Demand Collection",demandFrom:y,demandUpto:f,amount:`${h?"":(p=o==null?void 0:o.values)==null?void 0:p.amount}`,paymentMode:t.paymentMode,remarks:t.remarks,paymentType:E,chequeDate:t.cheque_dd_date,bankName:t.bankName,branchName:t.branchName,chequeNo:t.cheque_dd_no};console.log("Payment online Button Clicked..",s),g.post(B,s,x).then(d=>{var N,Y;i(!1),console.log("Order ID Generated",d),console.log((Y=(N=d==null?void 0:d.data)==null?void 0:N.data)==null?void 0:Y.hash,"Order ID Generated.............."),d.data.status===!0?(i(!1),j(d,ae,le)):i(!1)}).catch(d=>{i(!1),setIsGeneratingOrderId(!1),console.error("Error generating Order ID",d)})},ne=ue({remarks:O().required("Require Field"),paymentMode:O().required("Require Field")}),o=he({enableReinitialize:!0,initialValues:{monthUpto:"",penalty:"",advanced:"",amount:"",paymentMode:"",remarks:"",bankName:"",branchName:"",cheque_dd_no:"",cheque_dd_date:""},onSubmit:t=>{if(t.paymentMode==="Online"){oe(t);return}te(t),i(!0)},validationSchema:ne}),se=t=>{let s=t.target.name,p=t.target.value;s=="paymentMode"&&L(p),s=="monthUpto"&&Z(p),s=="paymentMode"&&(o.setFieldValue("bankName",""),o.setFieldValue("branchName",""),o.setFieldValue("cheque_dd_no",""),o.setFieldValue("cheque_dd_date",""))};return(z=c==null?void 0:c.consumerDemands)==null||z.filter(t=>v(t.demand_upto,"YYYY-MM-DD").format("yy-MM").toString()>=v(y,"YYYY-MM-DD").format("yy-MM")),a(k,{children:[W&&e(pe,{}),e("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:a("div",{className:"col-span-12 rounded-lg p-4",children:[e("div",{className:"p-4",children:a("div",{className:"",children:[a("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e(R,{className:"inline"})," Basic Details"]}),e("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:a("div",{className:"flex space-x-5 pl-4 ",children:[a("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:r!=null&&r.ward_name?r==null?void 0:r.ward_name:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),a("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:r!=null&&r.consumer_no?r==null?void 0:r.consumer_no:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Consumer No"})]}),a("div",{className:"flex-1",children:[e("div",{className:"font-bold text-sm",children:r!=null&&r.connection_through?r==null?void 0:r.connection_through:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Connection Through"})]}),(r==null?void 0:r.connection_through)=="SAF"?a("div",{className:"flex-1",children:[e("div",{className:"font-semibold text-md",children:r!=null&&r.saf_no?r==null?void 0:r.saf_no:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"SAF No"})]}):a("div",{className:"flex-1",children:[e("div",{className:"font-semibold text-md",children:r!=null&&r.property_no?r==null?void 0:r.property_no:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Property No"})]}),a("div",{className:"flex-1",children:[e("div",{className:"font-semibold text-md",children:r!=null&&r.owner_char_type?r==null?void 0:r.owner_char_type:"N/A"}),e("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]})]})})]})}),e(k,{children:a("div",{className:"mt-5 p-4",children:[a("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e(R,{className:"inline"}),"Due Demand Details"]}),a("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[e("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:a("tr",{children:[e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand From"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Upto"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Amount"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Penalty"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Connection Type"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Payable Amount "})]})}),e("tbody",{className:"text-sm",children:e(k,{children:(I=c==null?void 0:c.consumerDemands)==null?void 0:I.map((t,s)=>a("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:s+1}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.demand_from?v(t==null?void 0:t.demand_from,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.demand_upto?v(t==null?void 0:t.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.balance_amount?t==null?void 0:t.balance_amount:"N/A"}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.penalty?t==null?void 0:t.penalty:"N/A"}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.connection_type?t==null?void 0:t.connection_type:"N/A"}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.due_balance_amount?"₹ "+(t==null?void 0:t.due_balance_amount):"N/A"})]}))})})]})]})}),e("div",{className:"col-span-12 rounded-lg p-4",children:e("div",{className:"py-1 mt-2 bg-white rounded-lg shadow-xl border border-y-gray-200 p-4",children:a("form",{onSubmit:o.handleSubmit,onChange:se,className:"p-4 relative",children:[a("div",{className:"flex ",children:[e("div",{className:" w-full",children:a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold"}),a("div",{className:"flex gap-10",children:[a("div",{children:[e("input",{type:"checkbox",id:"fullPayment",checked:h,onChange:()=>D(!h)}),e("label",{htmlFor:"fullPayment",children:"Full Payment"})]}),a("div",{children:[e("input",{type:"checkbox",id:"partPayment",checked:!h,onChange:()=>D(!h)}),e("label",{htmlFor:"partPayment",children:"Part Payment"})]})]})]})}),e("div",{className:" w-full",children:!h&&a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})," Amount"]}),e("input",{...o.getFieldProps("amount"),type:"text",required:!0,onInput:t=>{ge(t,["zip","number"])},className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Amount."}),e("span",{className:"text-red-600 absolute text-xs",children:o.touched.amount&&o.errors.amount?o.errors.amount:null})]})})]}),a("div",{className:"grid grid-cols-12",children:[a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:"Total Demand"}),e("input",{...o.getFieldProps("amount"),value:(c==null?void 0:c.totalSumDemand)||0,disabled:!0,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md bg-slate-200"}),e("span",{className:"text-red-600 absolute text-xs",children:o.touched.amount&&o.errors.amount?o.errors.amount:null})]}),a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:"Penalty"}),e("input",{...o.getFieldProps("penalty"),value:(P==null?void 0:P.totalPenalty)||0,disabled:!0,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md bg-slate-200"}),e("span",{className:"text-red-600 absolute text-xs",children:o.touched.penalty&&o.errors.penalty?o.errors.penalty:null})]}),a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Payment Mode"]}),a("select",{...o.getFieldProps("paymentMode"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",onChange:t=>{o.setFieldValue("paymentMode",t.target.value)},children:[e("option",{value:"",children:"Select"}),e("option",{value:"Cash",children:"Cash"}),e("option",{value:"Cheque",children:"Cheque"}),e("option",{value:"DD",children:"DD"}),e("option",{value:"NEFT",children:"NEFT"}),e("option",{value:"Online",children:"Online"})]}),e("span",{className:"text-red-600 absolute text-xs",children:o.touched.paymentMode&&o.errors.paymentMode?o.errors.paymentMode:null})]}),a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Remarks"]}),e("input",{...o.getFieldProps("remarks"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Remarks"}),e("span",{className:"text-red-600 absolute text-xs",children:o.touched.remarks&&o.errors.remarks?o.errors.remarks:null})]}),(w=="Cheque"||w=="DD"||w=="NEFT")&&a(k,{children:[a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Bank Name"]}),e("input",{...o.getFieldProps("bankName"),type:"text",required:!0,className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter new ward no."}),e("span",{className:"text-red-600 absolute text-xs",children:o.touched.bankName&&o.errors.bankName?o.errors.bankName:null})]}),a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Branch Name"]}),e("input",{...o.getFieldProps("branchName"),type:"text",required:!0,className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter new ward no."}),e("span",{className:"text-red-600 absolute text-xs",children:o.touched.branchName&&o.errors.branchName?o.errors.branchName:null})]}),a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Cheque/DD/NEFT No"]}),e("input",{...o.getFieldProps("cheque_dd_no"),type:"text",required:!0,className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e("span",{className:"text-red-600 absolute text-xs",children:o.touched.cheque_dd_no&&o.errors.cheque_dd_no?o.errors.cheque_dd_no:null})]}),a("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[a("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Cheque/Neft/DD Date"]}),e("input",{...o.getFieldProps("cheque_dd_date"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Date"}),e("span",{className:"text-red-600 absolute text-xs",children:o.touched.cheque_dd_date&&o.errors.cheque_dd_date?o.errors.cheque_dd_date:null})]})]}),e("div",{className:"col-span-12"}),e("div",{className:"form-group mb-4 col-span-12 md:col-span-6 md:px-4",children:a("p",{children:["Remain Advance : ",e("span",{className:"text-orange-700 font-semibold",children:(c==null?void 0:c.remainAdvance)||0})]})}),e("div",{className:"form-group mb-4 col-span-12 md:col-span-6 md:px-4",children:a("p",{children:["Payable Amount :"," ",e("span",{className:"text-green-700 font-semibold",children:Math.round((((c==null?void 0:c.totalSumDemand)||0)-((c==null?void 0:c.remainAdvance)||0))*100)/100})]})}),a("div",{className:"col-span-12 grid grid-cols-2 mt-10",children:[e("div",{className:"",children:e("h1",{className:"underline text-1xl text-blue-600 cursor-pointer font-semibold",onClick:M,children:"View Rate Chart"})}),e("div",{className:"md:pl-10 text-right",children:e("button",{type:"submit",className:"px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"Pay Tax"})}),S&&a("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[e("div",{className:"absolute inset-0 bg-black opacity-50"}),V==="Meter"?e("div",{className:"bg-white p-7 rounded-lg shadow-md relative z-10",children:a("div",{children:[e("button",{onClick:M,className:" text-black underline ml-[98%] text-2xl bg-gray-300 hover:bg-red-500",children:e(U,{})}),e("div",{className:"text-center ",children:e("h1",{className:"text-2xl font-semibold underline",children:"For Metered Connection"})}),a("p",{className:"text-1xl text-center",children:[e("span",{className:"font-bold ",children:" Note:"}),"   The generation of demand statements occurs on a quarterly basis."]}),e("div",{className:"text-center ",children:e("h1",{className:"text-1xl font-bold",children:"Monthly Water Rental Charges given below in Rupees"})}),a("table",{className:"table-auto w-full text-sm font-semibold border-collapse",children:[e("thead",{children:a("tr",{className:"bg-gray-200",children:[e("th",{className:"px-4 py-2 border border-black",children:"Sl.No."}),e("th",{className:"px-4 py-2 border border-black",children:"Size of Connection"}),e("th",{className:"px-4 py-2 border border-black",children:"Residential Connection"}),e("th",{className:"px-4 py-2 border border-black",children:"Commercial Consumer"})]})}),a("tbody",{children:[a("tr",{children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center ",children:"1"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"15 mm (slum)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"75"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"-"})]}),a("tr",{className:"",children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"2"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"15 mm (General)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"120"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"500"})]}),a("tr",{children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"3"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"20 mm (General)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"200"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"800"})]}),a("tr",{className:"",children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"4"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"20 mm (General)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"400"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"1600"})]})]})]}),e("h1",{className:"text-center font-semibold",children:" Note: Consuption up to 10 unit per month is free for all category of users"}),a("table",{className:"table-auto w-full text-sm font-semibold border-collapse",children:[e("thead",{children:a("tr",{className:"bg-gray-200",children:[e("th",{className:"px-4 py-2 border border-black",children:"Sl.No."}),e("th",{className:"px-4 py-2 border border-black",children:"Category"}),e("th",{className:"px-4 py-2 border border-black",children:"Rate Per Unit"})]})}),a("tbody",{children:[a("tr",{children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center ",children:"1"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"Residential (Slum)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"Rs.10 Per unit (Per 1000 ltr)"})]}),a("tr",{className:"",children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"2"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"Residential (General)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"Rs.12 Per unit (Per 1000 ltr)"})]}),a("tr",{children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"3"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"Commercial"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"Rs.50 Per unit (Per 1000 ltr)"})]})]})]})]})}):e("div",{className:"bg-white p-7 rounded-lg shadow-lg relative z-10",children:a("div",{children:[e("button",{onClick:M,className:" text-black underline ml-[98%] text-2xl bg-gray-300 hover:bg-red-500",children:e(U,{})}),e("div",{className:"text-center",children:e("h1",{className:"text-2xl font-semibold underline  ",children:"For Non-Metered Connection"})}),a("p",{className:"text-1xl text-center",children:[e("span",{className:"font-bold ",children:" Note:"}),"   The generation of demand statements occurs on a quarterly basis."]}),a("table",{className:"table-auto w-full text-sm font-semibold border-collapse",children:[e("thead",{children:a("tr",{className:"bg-gray-200",children:[e("th",{className:"px-4 py-2 border border-black",children:"Sl.No."}),e("th",{className:"px-4 py-2 border border-black",children:"Size of Connection"}),e("th",{className:"px-4 py-2 border border-black",children:"Residential Connection"}),e("th",{className:"px-4 py-2 border border-black",children:"Commercial Consumer"})]})}),a("tbody",{children:[a("tr",{children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center ",children:"1"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"15 mm (slum)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"200"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"-"})]}),a("tr",{className:"",children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"2"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"15 mm (General)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"300"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"1000"})]}),a("tr",{children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"3"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"20 mm (General)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"500"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"1600"})]}),a("tr",{className:"",children:[e("td",{className:"px-4 py-2 border border-black font-semibold text-center",children:"4"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"20 mm (General)"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"1000"}),e("td",{className:"px-4 py-2 border border-black text-center",children:"3200"})]})]})]})]})})]})]})]})]})})})]})})]})};export{ke as default};
