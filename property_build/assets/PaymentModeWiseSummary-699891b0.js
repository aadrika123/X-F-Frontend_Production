import{R as E,_ as R,Y as k,K as W,u as q,ap as h,r,a as Z,q as V,s as y,aq as Y,w as O,A as D,b as I,j as e,o as H,U,P as $}from"./index-11eb40a4.js";const c=E.lazy(()=>R(()=>import("./PaymentModeWiseSummaryTable-01ba5866.js"),["assets/PaymentModeWiseSummaryTable-01ba5866.js","assets/index-11eb40a4.js","assets/index-960bb152.css"])),L=()=>{const{t:n}=k(),{get_MasterData:K,propPaymentModeWiseSummary:P,safPaymentModeWiseSummary:S,get_collectorList:Q,api_newWardByZoneId:A}=$(),p=W(),{type:f}=q();let F=new Date().toLocaleDateString("in-IN"),j=h(F).format("YYYY-DD-MM");const[m,C]=r.useState(),[u,G]=r.useState(),[l,M]=r.useState(),[x,d]=r.useState(!1),[T,v]=r.useState(!0),i="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md";Z("Payment mode wise collection summary");const z=V({fromDate:y().required("Field Required"),uptoDate:y().required("Field Required")}),g=r.useRef(),_=Y.useReactToPrint({content:()=>g.current}),a=O({initialValues:{fromDate:h(new Date).format("yy-MM-DD"),uptoDate:h(new Date).format("yy-MM-DD"),wardId:"",userId:"",zoneId:"",paymentMode:""},onSubmit:s=>{w()},validationSchema:z}),w=()=>{d(!0);let s;f=="saf"?s={fromDate:a.values.fromDate,uptoDate:a.values.uptoDate,wardId:a.values.wardId,userId:a.values.userId,zoneId:a.values.zoneId,paymentMode:a.values.paymentMode}:s={fromDate:a.values.fromDate,uptoDate:a.values.uptoDate,wardId:a.values.wardId,zoneId:a.values.zoneId},console.log("data before hitting api => ",s),D.post(T?P:S,s,I()).then(t=>{var o,b;((o=t==null?void 0:t.data)==null?void 0:o.status)==!0?(console.log("search success => ",t),M((b=t==null?void 0:t.data)==null?void 0:b.data)):console.log("error while search => ",t),d(!1)}).catch(t=>(console.log("error while search => ",t),d(!1)))};r.useEffect(()=>{p.pathname=="/property-report"&&v(!0),p.pathname=="/saf-report"&&v(!1),w()},[]);const B=s=>{d(!0),a.setFieldValue("wardId","");let t={zoneId:s};console.log("before fetch wardby old ward...",t),D.post(A,t,I()).then(function(o){console.log("wardlist by zone id list ....",o.data.data),C(o.data.data),d(!1)}).catch(function(o){console.log("errorrr.... ",o),d(!1)})},N=s=>{let t=s.target.name,o=s.target.value;t=="zoneId"&&B(o)};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onChange:a.handleChange,onSubmit:a.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Collection Summary"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:a.values.fromDate,id:"",className:i,defaultValue:j})}),e.jsx("div",{className:"col-span-12 text-end",children:a.touched.fromDate&&a.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:a.values.uptoDate,id:"",className:i,defaultValue:j})}),e.jsx("div",{className:"col-span-12 text-end",children:a.touched.uptoDate&&a.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.uptoDate})})})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[n("tranActualTaxBillPage.zoneLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:N,className:i,children:[e.jsx("option",{value:"",children:n("tranActualTaxBillPage.AllZones.label")}),e.jsx("option",{value:"1",children:n("tranActualTaxBillPage.ZoneAEast.label")}),e.jsx("option",{value:"2",children:n("tranActualTaxBillPage.ZoneBWest.label")}),e.jsx("option",{value:"3",children:n("tranActualTaxBillPage.ZoneCNorth.label")}),e.jsx("option",{value:"4",children:n("tranActualTaxBillPage.ZoneDSouth.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.zoneId&&a.errors.zoneId?a.errors.zoneId:null})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[n("tranActualTaxBillPage.wardNoLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:N,className:i,children:[e.jsx("option",{value:"",children:n("tranActualTaxBillPage.AllWard.label")}),m==null?void 0:m.map((s,t)=>e.jsx("option",{value:s.id,children:s.ward_name},t))]}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.wardNo&&a.errors.wardNo?a.errors.wardNo:null})]}),f=="saf"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector Name :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:i,children:[e.jsx("option",{value:"",children:"All"}),u==null?void 0:u.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.id,children:e.jsx("span",{className:"capitalize",children:s==null?void 0:s.user_name})})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:i,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:x?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-start items-end",children:e.jsx(H,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(U,{})}),"Search"]})})]})]}),!x&&l!=null&&(l==null?void 0:l.length)!=0?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("div",{className:"md:px-0 flex-1 ",children:e.jsx("button",{onClick:_,className:"float-right pl-4 pr-6 py-1 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-red-700 hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:"Export PDF"})})}),e.jsxs("div",{className:"",ref:g,children:[e.jsxs("div",{className:"grid grid-cols-2 px-2 py-2 gap-2",id:"printableArea",children:[e.jsx("div",{className:"bg-white w-full rounded-md shadow-md py-4 px-2",children:e.jsx("div",{className:"bg-white ",children:e.jsx(c,{data:l==null?void 0:l.collection,type:"collection"})})}),e.jsx("div",{className:"bg-white w-full rounded-md shadow-md py-4 px-2 ",children:e.jsx("div",{className:"bg-white ",children:e.jsx(c,{data:l==null?void 0:l.refund,type:"refund"})})}),e.jsx("div",{className:"bg-white w-full rounded-md shadow-md py-4 px-2 mt-1",children:e.jsx("div",{className:"bg-white ",children:e.jsx(c,{data:l==null?void 0:l.doorToDoor,type:"doorToDoor"})})}),e.jsx("div",{className:"bg-white w-full rounded-md shadow-md py-4 px-2 mt-1",children:e.jsx("div",{className:"bg-white ",children:e.jsx(c,{data:l==null?void 0:l.jsk,type:"jsk"})})})]}),e.jsx("div",{className:"bg-white w-full rounded-md shadow-md py-4 px-2 mt-1",children:e.jsx("div",{className:"bg-white ",children:e.jsx(c,{data:l==null?void 0:l.netCollection,type:"netCollection"})})})]})]}):e.jsx(e.Fragment,{children:!x&&e.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),e.jsx("div",{className:"h-[20vh]"})]})};export{L as default};
