import{R as _,_ as B,X as k,J as R,u as W,ap as p,r as c,a as q,q as Y,s as N,w as Z,A as y,b as D,j as e,o as O,O as V,P as H,an as U,ao as $}from"./index-4227545d.js";const i=_.lazy(()=>B(()=>import("./PaymentModeWiseSummaryTable-617bc372.js"),["assets/PaymentModeWiseSummaryTable-617bc372.js","assets/index-4227545d.js","assets/index-bde189ce.css"])),X=()=>{const{t:r}=k(),{get_MasterData:G,propPaymentModeWiseSummary:I,safPaymentModeWiseSummary:P,get_collectorList:J,api_newWardByZoneId:A}=H(),f=R(),{type:j}=W();let S=new Date().toLocaleDateString("in-IN"),w=p(S).format("YYYY-DD-MM");const[x,F]=c.useState(),[u,L]=c.useState(),[t,C]=c.useState(),[h,n]=c.useState(!1),[T,v]=c.useState(!0),d="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md";q("Payment mode wise collection summary");const M=Y({fromDate:N().required("Field Required"),uptoDate:N().required("Field Required")}),z=async()=>{try{const s=new U,l=document.getElementById("printableArea");if(!l){console.error("Table element not found");return}const o=await $(l,{scrollY:-window.scrollY});if(!o){console.error("Canvas not generated");return}const m=o.toDataURL("image/png");s.addImage(m,"PNG",10,30,180,180),s.save("Data.pdf")}catch(s){console.error("Error exporting to PDF:",s)}},a=Z({initialValues:{fromDate:p(new Date).format("yy-MM-DD"),uptoDate:p(new Date).format("yy-MM-DD"),wardId:"",userId:"",zoneId:"",paymentMode:""},onSubmit:s=>{g()},validationSchema:M}),g=()=>{n(!0);let s;j=="saf"?s={fromDate:a.values.fromDate,uptoDate:a.values.uptoDate,wardId:a.values.wardId,userId:a.values.userId,zoneId:a.values.zoneId,paymentMode:a.values.paymentMode}:s={fromDate:a.values.fromDate,uptoDate:a.values.uptoDate,wardId:a.values.wardId,zoneId:a.values.zoneId},console.log("data before hitting api => ",s),y.post(T?I:P,s,D()).then(l=>{var o,m;((o=l==null?void 0:l.data)==null?void 0:o.status)==!0?(console.log("search success => ",l),C((m=l==null?void 0:l.data)==null?void 0:m.data)):console.log("error while search => ",l),n(!1)}).catch(l=>(console.log("error while search => ",l),n(!1)))};c.useEffect(()=>{f.pathname=="/property-report"&&v(!0),f.pathname=="/saf-report"&&v(!1),g()},[]);const E=s=>{n(!0),a.setFieldValue("wardId","");let l={zoneId:s};console.log("before fetch wardby old ward...",l),y.post(A,l,D()).then(function(o){console.log("wardlist by zone id list ....",o.data.data),F(o.data.data),n(!1)}).catch(function(o){console.log("errorrr.... ",o),n(!1)})},b=s=>{let l=s.target.name,o=s.target.value;l=="zoneId"&&E(o)};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onChange:a.handleChange,onSubmit:a.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Collection Summary"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:a.values.fromDate,id:"",className:d,defaultValue:w})}),e.jsx("div",{className:"col-span-12 text-end",children:a.touched.fromDate&&a.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:a.values.uptoDate,id:"",className:d,defaultValue:w})}),e.jsx("div",{className:"col-span-12 text-end",children:a.touched.uptoDate&&a.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.uptoDate})})})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[r("tranActualTaxBillPage.zoneLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:b,className:d,children:[e.jsx("option",{value:"",children:r("tranActualTaxBillPage.AllZones.label")}),e.jsx("option",{value:"1",children:r("tranActualTaxBillPage.ZoneAEast.label")}),e.jsx("option",{value:"2",children:r("tranActualTaxBillPage.ZoneBWest.label")}),e.jsx("option",{value:"3",children:r("tranActualTaxBillPage.ZoneCNorth.label")}),e.jsx("option",{value:"4",children:r("tranActualTaxBillPage.ZoneDSouth.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.zoneId&&a.errors.zoneId?a.errors.zoneId:null})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[r("tranActualTaxBillPage.wardNoLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:b,className:d,children:[e.jsx("option",{value:"",children:r("tranActualTaxBillPage.AllWard.label")}),x==null?void 0:x.map((s,l)=>e.jsx("option",{value:s.id,children:s.ward_name},l))]}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.wardNo&&a.errors.wardNo?a.errors.wardNo:null})]}),j=="saf"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector Name :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:d,children:[e.jsx("option",{value:"",children:"All"}),u==null?void 0:u.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.id,children:e.jsx("span",{className:"capitalize",children:s==null?void 0:s.user_name})})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:d,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]})]}),e.jsxs("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:[h?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-start items-end",children:e.jsx(O,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(V,{})}),"Search"]}),e.jsx("button",{className:"download-table-pdf-button whitespace-nowrap ml-8 bg-red-400 px-3 shadow-lg rounded py-1 text-white hover:shadow-2xl hover:bg-red-600 text-center relative ",onClick:z,children:"Export PDF"})]})]})]}),!h&&t!=null&&(t==null?void 0:t.length)!=0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-2 px-2 py-2 gap-2",id:"printableArea",children:[e.jsx("div",{className:"bg-white w-full rounded-md shadow-md py-4 px-2",children:e.jsx("div",{className:"bg-white ",children:e.jsx(i,{data:t==null?void 0:t.collection,type:"collection"})})}),e.jsx("div",{className:"bg-white w-full rounded-md shadow-md py-4 px-2 ",children:e.jsx("div",{className:"bg-white ",children:e.jsx(i,{data:t==null?void 0:t.refund,type:"refund"})})}),e.jsx("div",{className:"bg-white w-full rounded-md shadow-md py-4 px-2 mt-1",children:e.jsx("div",{className:"bg-white ",children:e.jsx(i,{data:t==null?void 0:t.doorToDoor,type:"doorToDoor"})})}),e.jsx("div",{className:"bg-white w-full rounded-md shadow-md py-4 px-2 mt-1",children:e.jsx("div",{className:"bg-white ",children:e.jsx(i,{data:t==null?void 0:t.jsk,type:"jsk"})})})]}),e.jsx("div",{className:"bg-white w-full rounded-md shadow-md py-4 px-2 mt-1",children:e.jsx("div",{className:"bg-white ",children:e.jsx(i,{data:t==null?void 0:t.netCollection,type:"netCollection"})})})]}):e.jsx(e.Fragment,{children:!h&&e.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),e.jsx("div",{className:"h-[20vh]"})]})};export{X as default};
