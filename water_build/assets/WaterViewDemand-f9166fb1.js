import{x as Q,l as d,y as X,v as Z,m as F,z as ee,W as ae,B as te,a0 as re,a1 as se,E as ne,q as b,k as r,o as v,j as a,G as le,K as de,M as w,h as x,a2 as oe,a3 as ce}from"./index-0297dcc6.js";function ge(ie){var W,_,R,I,U,Y,E;const{t:s}=Q(),[k,c]=d.useState(!1),[e,C]=d.useState(),[n,A]=d.useState(),[S,j]=d.useState(),[D,T]=d.useState(0),[f,p]=d.useState(),[M,h]=d.useState(!1);d.useState(!1);const[me,N]=d.useState(!1);d.useState(!1),d.useState(!1);const{notify:y}=d.useContext(X),[xe,V]=d.useState(!1),{id:m}=Z(),P=F();ee(`${s("tranWaterApplicationSearchPage.waterConsumerDemandDetailsLabel.label")}`);const{api_waterApprovedApplicationDetails:$,api_calculateMeterFixedReading:G,api_waterListDemand:q,api_waterGenerateDemand:B,header:g}=ae(),z=t=>{if(console.log("Function called",t),(e==null?void 0:e.connectionId)==3&&t.demandUpto=="")return N("Please select demand up date");if((e==null?void 0:e.connectionId)==1&&(t.demandUpto==""||t.meterReading==""||t.meterImage==""))return N("Field(s) Require");let o=new FormData;o.append("consumerId",m),o.append("demandUpto",t.demandUpto),o.append("finalRading",t.meterReading),o.append("document",S),console.log("Final Payload of Meter Reading",o),c(!0),b.post(B,o,g).then(i=>{i.data.status?(T(O=>O+1),c(!1),console.log("Demand Generate Date Saved",i),y("Demand Generated","success")):(c(!1),y("Error in Demand Generated","error"),console.log("Error Demand Generate",i),h(i.data.message))}).catch(i=>{c(!1),y("Something went wrong!","error"),console.log("Exception While going to generate Demand",i.response.data),h(i.response.data)})};let u=te().shape({});(e==null?void 0:e.connection_type)!==3&&(u=u.shape({meterReading:re().required("Enter Meter Reading").min(((W=n==null?void 0:n.meterDetails)==null?void 0:W.final_meter_reading)+1||1e-6,`Reading must be greater than or equal to ${((_=n==null?void 0:n.meterDetails)==null?void 0:_.final_meter_reading)||1e-6}`),meterImage:se().required("Upload Meter Image")}));const l=ne({enableReinitialize:!0,initialValues:{demandUpto:"",meterReading:"",meterImage:""},onSubmit:(t,{resetForm:o})=>{z(t),V(!0),o()},validationSchema:u}),K=t=>{let o=t.target.name,i=t.target.value;console.log("formik.values.meterReading",i),h(!1),N(""),o=="meterReading"&&l.setFieldValue("meterReading",oe(i,l.values.meterReading,20)),o=="demandUpto"&&l.setFieldValue("demandUpto",ce(i,l.values.demandUpto)),o=="meterImage"&&j(t.target.files[0]),console.log("docPath",S)};console.log("formik.values.demandUpto",l.values.demandUpto);const L=d.useMemo(()=>()=>{if((e==null?void 0:e.connectionId)!=4)return null;b.post(G,{consumerId:m,uptoData:l.values.demandUpto},g).then(t=>{t.data.status?(c(!1),p(t.data.data),console.log("this",t)):(h(t.data.message),p(!1))}).catch(t=>{p(!1),c(!1),console.log("Error while while calculate",t)})},[l.values.demandUpto]);d.useEffect(()=>{L()},[L]);const H=()=>{c(!0),b.post($,{applicationId:m},g).then(function(t){console.log("water Approved Application Details",t.data.data),C(t.data.data),c(!1)}).catch(function(t){console.log("Error : water Approved Application Details",t),c(!1)})},J=()=>{b.post(q,{ConsumerId:m},g).then(t=>{t.data.status?(console.log("Fetched Water Demand List",t.data.data),c(!1),A(t.data.data)):(A(!1),c(!1))}).catch(t=>{console.log("Exception while fetching Water Demand",t)})};return d.useEffect(()=>{J(),H()},[m,D]),console.log("applicationFullData?.connectionId",e,e==null?void 0:e.connectionId,typeof(e==null?void 0:e.connectionId)),r(v,{children:[k&&a(le,{}),a(de,{active:"demand",consumerNo:e==null?void 0:e.consumer_no}),a("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:a("div",{className:"col-span-12 rounded-lg p-4",children:r("div",{className:"p-4",children:[r("div",{className:"",children:[r("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[a(w,{className:"inline"}),s("tranWaterApplicationSearchPage.basicDetailsLabel.label")]}),a("div",{className:"py-6 mt-2 bg-white border rounded-lg shadow-xl p-4",children:r("div",{className:"flex space-x-5 pl-4 ",children:[r("div",{className:"flex-1",children:[a("div",{className:"font-bold text-sm",children:e!=null&&e.folio_no?e==null?void 0:e.folio_no:"N/A"}),a("div",{className:"text-gray-500 text-xs",children:"Property No"})]}),r("div",{className:"flex-1",children:[a("div",{className:"font-bold text-sm",children:e!=null&&e.consumer_no?e==null?void 0:e.consumer_no:"N/A"}),a("div",{className:"text-gray-500 text-xs",children:s("tranWaterApplicationSearchPage.consumerNoLabel.label")})]}),r("div",{className:"flex-1",children:[a("div",{className:"font-semibold text-md",children:e!=null&&e.reading_date?e==null?void 0:e.reading_date:"N/A"}),a("div",{className:"text-gray-500 text-xs",children:"Reading Date"})]})]})})]}),(n==null?void 0:n.totalSumDemand)>0?r("div",{children:[r("div",{className:"flex flex-wrap w-full space-x-0 my-5 font-bold text-gray-700 px-4",children:[r("div",{className:"grow",children:[r("span",{className:"text-sm",children:[" ",s("tranWaterApplicationSearchPage.totalDuesLabel.label"),":"]})," ",r("span",{className:"font-semibold text-gray-700 text-lg",children:["₹ ",n==null?void 0:n.totalSumDemand]})]}),r("div",{className:"grow",children:[r("span",{className:"text-sm",children:[" ",s("tranWaterApplicationSearchPage.dueFromLabel.label"),":"]})," ",r("span",{className:"font-semibold text-gray-700 text-lg",children:[n==null?void 0:n.fromDate," "]})]}),r("div",{className:"grow",children:[r("span",{className:"text-sm",children:[" ",s("tranWaterApplicationSearchPage.dueUptoLabel.label"),":"]})," ",r("span",{className:"font-semibold text-gray-700 text-lg",children:[n==null?void 0:n.uptoDate," "]})]}),r("div",{className:"grow",children:[a("span",{className:"text-sm",children:" Total Due Demand:"})," ",a("span",{className:"font-semibold text-gray-700 text-lg",children:(R=n==null?void 0:n.consumerDemands)==null?void 0:R.length})]})]}),r("div",{className:"mt-6 mx-3 space-y-4 sm:space-y-0 sm:flex sm:justify-between sm:items-center",children:[r("div",{className:"text-center sm:text-left",children:[a("p",{className:"text-gray-600 text-xl font-semibold",children:s("tranWaterApplicationSearchPage.totalPayableAmountLabel.label")}),r("p",{className:"text-black text-2xl font-semibold",children:["₹ ",n==null?void 0:n.totalSumDemand]})]}),r("div",{className:"space-y-2 sm:space-y-0 sm:space-x-3",children:[a("button",{onClick:()=>P(`/water-demand-payment/${m}`),className:"bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded shadow-2xl text-white text-sm",children:s("tranWaterApplicationSearchPage.payDemandLabel.label")}),a("button",{onClick:()=>P(`/waterdemndbill/${m}`),className:"bg-indigo-700 hover:bg-indigo-600 px-4 py-2 rounded shadow-2xl text-white text-sm",children:"View Bill"})]})]}),a("br",{}),r("div",{className:"mt-5",children:[r("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[a(w,{className:"inline"})," ",s("tranWaterApplicationSearchPage.demandDetailsLabel.label")]}),a("div",{className:" bg-white rounded-md shadow-xl px-1 py-1 mt-2",children:r("table",{className:"min-w-full leading-normal   ",children:[a("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:r("tr",{children:[a("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),a("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("tranWaterApplicationSearchPage.demandFromLabel.label")}),a("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("tranWaterApplicationSearchPage.demandUptoLabel.label")}),a("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("tranWaterApplicationSearchPage.demandAmountLabel.label")}),a("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("tranWaterApplicationSearchPage.penaltyLabel.label")}),a("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("tranWaterApplicationSearchPage.connectionTypeLabel.label")}),a("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:s("tranWaterApplicationSearchPage.payableAmountLabel.label")})]})}),a("tbody",{className:"text-sm",children:a(v,{children:(I=n==null?void 0:n.consumerDemands)==null?void 0:I.map((t,o)=>r("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[a("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:o+1}),a("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.demand_from?x(t==null?void 0:t.demand_from,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),a("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.demand_upto?x(t==null?void 0:t.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),a("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.balance_amount?t==null?void 0:t.balance_amount:"N/A"}),a("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.penalty?t==null?void 0:t.penalty:"N/A"}),a("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.connection_type?t==null?void 0:t.connection_type:"N/A"}),a("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.due_balance_amount?"₹ "+(t==null?void 0:t.due_balance_amount):"N/A"})]}))})})]})})]})]}):a("div",{className:"w-full mt-20 text-center",children:a("span",{className:"text-xl text-red-500 border border-red-500 font-semibold px-4 py-2",children:s("tranWaterApplicationSearchPage.demandNotFoundLabel.label")})}),r("div",{className:"mt-5",children:[r("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[a(w,{className:"inline"})," ",s("tranWaterApplicationSearchPage.meterFixedConnectionDetailsLabel.label")]}),r("div",{className:"py-6 mt-2 border bg-white rounded-lg shadow-xl p-4",children:[r("div",{className:"flex space-x-5 pl-4 ",children:[r("div",{className:"flex-1",children:[a("div",{className:"font-bold text-sm",children:((U=e==null?void 0:e.meterDetails)==null?void 0:U.connectionName)||"N/A"}),a("div",{className:"text-gray-500 text-xs",children:"Connection Type"})]}),(e==null?void 0:e.connectionId)!=3&&r(v,{children:[r("div",{className:"flex-1",children:[a("div",{className:"font-bold text-sm",children:((Y=e==null?void 0:e.meterDetails)==null?void 0:Y.meter_no)||"N/A"}),a("div",{className:"text-gray-500 text-xs",children:s("tranWaterApplicationSearchPage.meterNoLabel.label")})]}),r("div",{className:"flex-1",children:[a("div",{className:"font-bold text-sm",children:e!=null&&e.finalReading?e==null?void 0:e.finalReading:"N/A"}),a("div",{className:"text-gray-500 text-xs",children:s("tranWaterApplicationSearchPage.lastMeterReadingLabel.label")})]}),r("div",{className:"flex-1",children:[a("div",{className:"font-bold text-sm",children:e!=null&&e.readingdate?e==null?void 0:e.readingdate:"N/A"}),a("div",{className:"text-gray-500 text-xs",children:"Reading Date"})]})]}),r("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-md",children:[((E=e==null?void 0:e.meterDetails)==null?void 0:E.connection_date)||"N/A"," "]}),r("div",{className:"text-gray-500 text-xs",children:[" ",s("tranWaterApplicationSearchPage.connectionDateLabel.label")]})]})]}),(e==null?void 0:e.connectionId)==4&&a("div",{className:"py-6 mt-2",children:r("div",{className:"flex space-x-5 pl-4 ",children:[r("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-md",children:[x(e==null?void 0:e.demandFrom,"YYYY-MM-DD").format("DD-MMM-yy")+":"+x(e==null?void 0:e.demandUpto,"YYYY-MM-DD").format("DD-MMM-yy")," "]}),a("div",{className:"text-gray-500 text-xs",children:s("tranWaterApplicationSearchPage.periodLabel.label")})]}),r("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-md",children:[e==null?void 0:e.lastConsumedUnit," "]}),a("div",{className:"text-gray-500 text-xs",children:s("tranWaterApplicationSearchPage.lastConsumedUnitLabel.label")})]}),r("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-md",children:[e==null?void 0:e.avgReading," "]}),a("div",{className:"text-gray-500 text-xs",children:s("tranWaterApplicationSearchPage.avgReadingPerDateLabel.label")})]}),r("div",{className:"flex-1",children:[r("div",{className:"font-semibold text-md",children:[(f==null?void 0:f.diffInDays)||"N/A"," ",r("span",{className:"text-xs",children:["(",x(e==null?void 0:e.demandUpto,"YYYY-MM-DD").format("DD-MMM-yy")," : ",x(l.values.demandUpto,"YYYY-MM-DD").format("DD-MMM-yy"),")"]})," "]}),a("div",{className:"text-gray-500 text-xs",children:s("tranWaterApplicationSearchPage.dayDifferenceLabel.label")})]})]})})]}),a("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:r("form",{onSubmit:l.handleSubmit,onChange:K,className:"p-4 relative",children:[r("div",{className:"flex flex-col sm:flex-row space-y-4 sm:space-y-0",children:[(e==null?void 0:e.connection_type)===3?null:a("div",{className:"flex-1",children:r("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[r("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s("tranWaterApplicationSearchPage.uploadMeterImageLabel.label"),a("small",{className:"mt-1 text-sm font-semibold text-red-600 inline",children:"*"})]}),a("input",{...l.getFieldProps("meterImage"),type:"file",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Meter Reading"}),a("span",{className:"text-red-600 absolute text-xs",children:l.touched.meterImage&&l.errors.meterImage?l.errors.meterImage:null})]})}),(e==null?void 0:e.connection_type)!==3&&a("div",{className:"flex-1",children:r("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[r("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s("tranWaterApplicationSearchPage.finalMeterReadingLabel.label"),a("small",{className:"mt-1 text-sm font-semibold text-red-600 inline",children:"*"})]}),a("input",{...l.getFieldProps("meterReading"),value:l.values.meterReading,onChange:l.handleChange,type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 disabled:bg-gray-100 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",placeholder:"Enter Meter Reading"}),a("span",{className:"text-red-600 absolute text-xs",children:l.touched.meterReading&&l.errors.meterReading?l.errors.meterReading:null})]})}),a("div",{className:"flex-1",children:r("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[r("label",{className:"form-label inline-block mb-1 text-gray-900 text-sm font-semibold",children:[s("tranWaterApplicationSearchPage.demandUptoDateLabel.label"),a("small",{className:"mt-1 text-sm font-semibold text-red-600 inline",children:"*"})]}),a("input",{...l.getFieldProps("demandUpto"),type:"date",className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer bg-gray-200"}),a("span",{className:"text-red-600 absolute text-xs",children:l.touched.demandUpto&&l.errors.demandUpto?l.errors.demandUpto:null})]})})]}),a("p",{className:"text-red-500 text-center font-semibold",children:M&&""+M}),(e==null?void 0:e.connection_type)===1?a("div",{className:"flex justify-center md:justify-end mr-5",children:a("button",{type:"submit",className:"bg-indigo-700 px-3 py-2 text-white rounded",children:s("tranWaterApplicationSearchPage.generateDemandLabel.label")})}):a("div",{className:"flex justify-center md:justify-end mr-5",children:a("button",{type:"submit",className:"bg-indigo-700 px-3 py-2 text-white rounded",children:s("tranWaterApplicationSearchPage.generateDemandLabel.label")})})]})})]}),a("div",{className:"mt-6",children:" "})]})})}),a("div",{className:"w-full h-60"})]})}export{ge as default};
