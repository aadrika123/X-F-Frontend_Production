import{R as F,_ as M,J as C,F as T,u as z,a8 as h,r,a as _,p as k,q as b,v as B,A as E,b as R,j as e,m as W,P as q}from"./index-0f9f451c.js";import{R as Z}from"./index.esm-93a8aaab.js";const d=F.lazy(()=>M(()=>import("./PaymentModeWiseSummaryTable-a24d3b6f.js"),["assets/PaymentModeWiseSummaryTable-a24d3b6f.js","assets/index-0f9f451c.js","assets/index-ac5ef3c9.css"])),J=()=>{const{t:o}=C(),{get_MasterData:O,propPaymentModeWiseSummary:y,safPaymentModeWiseSummary:D,get_collectorList:V}=q(),p=T(),{type:f}=z();let I=new Date().toLocaleDateString("in-IN"),j=h(I).format("YYYY-DD-MM");const[c,Y]=r.useState(),[m,H]=r.useState(),[s,P]=r.useState(),[x,u]=r.useState(!1),[S,v]=r.useState(!0),n="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md";_("Payment mode wise collection summary");const A=k({fromDate:b().required("Field Required"),uptoDate:b().required("Field Required")}),a=B({initialValues:{fromDate:h(new Date).format("yy-MM-DD"),uptoDate:h(new Date).format("yy-MM-DD"),wardId:"",userId:"",zoneId:"",paymentMode:""},onSubmit:l=>{w()},validationSchema:A}),w=()=>{u(!0);let l;f=="saf"?l={fromDate:a.values.fromDate,uptoDate:a.values.uptoDate,wardId:a.values.wardId,userId:a.values.userId,zoneId:a.values.zoneId,paymentMode:a.values.paymentMode}:l={fromDate:a.values.fromDate,uptoDate:a.values.uptoDate,wardId:a.values.wardId,zoneId:a.values.zoneId},console.log("data before hitting api => ",l),E.post(S?y:D,l,R()).then(t=>{var i,N;((i=t==null?void 0:t.data)==null?void 0:i.status)==!0?(console.log("search success => ",t),P((N=t==null?void 0:t.data)==null?void 0:N.data)):console.log("error while search => ",t),u(!1)}).catch(t=>(console.log("error while search => ",t),u(!1)))};r.useEffect(()=>{p.pathname=="/property-report"&&v(!0),p.pathname=="/saf-report"&&v(!1),w()},[]);const g=l=>{let t=l.target.name,i=l.target.value;t=="zoneId"&&fetchDependentWard(i)};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onChange:a.handleChange,onSubmit:a.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Summary"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:a.values.fromDate,id:"",className:n,defaultValue:j})}),e.jsx("div",{className:"col-span-12 text-end",children:a.touched.fromDate&&a.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:a.values.uptoDate,id:"",className:n,defaultValue:j})}),e.jsx("div",{className:"col-span-12 text-end",children:a.touched.uptoDate&&a.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.uptoDate})})})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[o("tranActualTaxBillPage.zoneLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:g,className:n,children:[e.jsx("option",{value:"",children:o("tranActualTaxBillPage.AllZones.label")}),e.jsx("option",{value:"1",children:o("tranActualTaxBillPage.ZoneAEast.label")}),e.jsx("option",{value:"2",children:o("tranActualTaxBillPage.ZoneBWest.label")}),e.jsx("option",{value:"3",children:o("tranActualTaxBillPage.ZoneCNorth.label")}),e.jsx("option",{value:"4",children:o("tranActualTaxBillPage.ZoneDSouth.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.zoneId&&a.errors.zoneId?a.errors.zoneId:null})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[o("tranActualTaxBillPage.wardNoLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:g,className:n,children:[e.jsx("option",{value:"",children:o("tranActualTaxBillPage.AllWard.label")}),c==null?void 0:c.map((l,t)=>e.jsx("option",{value:l.id,children:l.ward_name},t))]}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.wardNo&&a.errors.wardNo?a.errors.wardNo:null})]}),f=="saf"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector Name :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:n,children:[e.jsx("option",{value:"",children:"All"}),m==null?void 0:m.map(l=>e.jsx(e.Fragment,{children:e.jsx("option",{value:l==null?void 0:l.id,children:e.jsx("span",{className:"capitalize",children:l==null?void 0:l.user_name})})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:n,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:x?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-start items-end",children:e.jsx(W,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(Z,{})}),"Search"]})})]})]}),!x&&s!=null&&(s==null?void 0:s.length)!=0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-white w-full rounded-md shadow-md py-4 px-2",children:e.jsx("div",{className:"bg-white ",children:e.jsx(d,{data:s==null?void 0:s.collection,type:"collection"})})}),e.jsx("div",{className:"bg-white w-full rounded-md shadow-md py-4 px-2 mt-2",children:e.jsx("div",{className:"bg-white ",children:e.jsx(d,{data:s==null?void 0:s.doorToDoor,type:"doorToDoor"})})}),e.jsx("div",{className:"bg-white w-full rounded-md shadow-md py-4 px-2 mt-2",children:e.jsx("div",{className:"bg-white ",children:e.jsx(d,{data:s==null?void 0:s.jsk,type:"jsk"})})}),e.jsx("div",{className:"bg-white w-full rounded-md shadow-md py-4 px-2 mt-2",children:e.jsx("div",{className:"bg-white ",children:e.jsx(d,{data:s==null?void 0:s.netCollection,type:"netCollection"})})}),e.jsx("div",{className:"bg-white w-full rounded-md shadow-md py-4 px-2 mt-2",children:e.jsx("div",{className:"bg-white ",children:e.jsx(d,{data:s==null?void 0:s.refund,type:"refund"})})})]}):e.jsx(e.Fragment,{children:!x&&e.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),e.jsx("div",{className:"h-[20vh]"})]})};export{J as default};
