import{Y as M,K as z,u as L,ap as x,r as n,a as T,q as R,s as y,w as k,A as N,b as w,j as e,L as q,o as E,U as W,P as Y}from"./index-025cc29f.js";const U=()=>{const{t}=M(),{get_MasterData:Z,propPaymentModeWiseSummary:v,safPaymentModeWiseSummary:D,get_collectorList:V,api_newWardByZoneId:I}=Y(),m=z(),{type:p}=L();let S=new Date().toLocaleDateString("in-IN"),u=x(S).format("YYYY-DD-MM");const[c,A]=n.useState(),[i,_]=n.useState(),[O,C]=n.useState(),[h,o]=n.useState(!1),[P,b]=n.useState(!0),d="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md";T("Payment mode wise collection summary");const F=R({fromDate:y().required("Field Required"),uptoDate:y().required("Field Required")}),a=k({initialValues:{fromDate:x(new Date).format("yy-MM-DD"),uptoDate:x(new Date).format("yy-MM-DD"),wardId:"",userId:"",zoneId:"",paymentMode:""},onSubmit:s=>{f()},validationSchema:F}),f=()=>{o(!0);let s;p=="saf"?s={fromDate:a.values.fromDate,uptoDate:a.values.uptoDate,wardId:a.values.wardId,userId:a.values.userId,zoneId:a.values.zoneId,paymentMode:a.values.paymentMode}:s={fromDate:a.values.fromDate,uptoDate:a.values.uptoDate,wardId:a.values.wardId,zoneId:a.values.zoneId},console.log("data before hitting api => ",s),N.post(P?v:D,s,w()).then(l=>{var r,j;((r=l==null?void 0:l.data)==null?void 0:r.status)==!0?(console.log("search success => ",l),C((j=l==null?void 0:l.data)==null?void 0:j.data)):console.log("error while search => ",l),o(!1)}).catch(l=>(console.log("error while search => ",l),o(!1)))};n.useEffect(()=>{m.pathname=="/property-report"&&b(!0),m.pathname=="/saf-report"&&b(!1),f()},[]);const B=s=>{o(!0),a.setFieldValue("wardId","");let l={zoneId:s};console.log("before fetch wardby old ward...",l),N.post(I,l,w()).then(function(r){console.log("wardlist by zone id list ....",r.data.data),A(r.data.data),o(!1)}).catch(function(r){console.log("errorrr.... ",r),o(!1)})},g=s=>{let l=s.target.name,r=s.target.value;l=="zoneId"&&B(r)};return e.jsxs(e.Fragment,{children:[h&&e.jsx(q,{}),e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Collection Report"}),e.jsx("form",{onChange:a.handleChange,onSubmit:a.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:a.values.fromDate,id:"",className:d,defaultValue:u})}),e.jsx("div",{className:"col-span-12 text-end",children:a.touched.fromDate&&a.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:a.values.uptoDate,id:"",className:d,defaultValue:u})}),e.jsx("div",{className:"col-span-12 text-end",children:a.touched.uptoDate&&a.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.uptoDate})})})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[t("tranActualTaxBillPage.zoneLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:g,className:d,children:[e.jsx("option",{value:"",children:t("tranActualTaxBillPage.AllZones.label")}),e.jsx("option",{value:"1",children:t("tranActualTaxBillPage.ZoneAEast.label")}),e.jsx("option",{value:"2",children:t("tranActualTaxBillPage.ZoneBWest.label")}),e.jsx("option",{value:"3",children:t("tranActualTaxBillPage.ZoneCNorth.label")}),e.jsx("option",{value:"4",children:t("tranActualTaxBillPage.ZoneDSouth.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.zoneId&&a.errors.zoneId?a.errors.zoneId:null})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[t("tranActualTaxBillPage.wardNoLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:g,className:d,children:[e.jsx("option",{value:"",children:t("tranActualTaxBillPage.AllWard.label")}),c==null?void 0:c.map((s,l)=>e.jsx("option",{value:s.id,children:s.ward_name},l))]}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.wardNo&&a.errors.wardNo?a.errors.wardNo:null})]}),p=="saf"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector Name :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:d,children:[e.jsx("option",{value:"",children:"All"}),i==null?void 0:i.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.id,children:e.jsx("span",{className:"capitalize",children:s==null?void 0:s.user_name})})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:d,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:h?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-start items-end",children:e.jsx(E,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(W,{})}),"Search"]})})]})}),e.jsx("h1",{className:"text-base w-full font-bold px-4 pt-4 text-gray-700",children:"SAF Collection Report"}),e.jsx("div",{className:"bg-white w-full px-2 py-2 rounded-md shadow-md",children:e.jsxs("table",{className:"w-full mt-2",children:[e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{className:"bg-gray-200 border-[1px]  border-gray-700 pl-1 font-semibold",children:"S.No."}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"SAF Type"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Bill Cut"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Rebate"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Penalty"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Collection Amount"})]}),e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:"1"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:"2"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:"3"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:"4"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:"5"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:"6"})]})]})}),e.jsx("h1",{className:"text-base w-full font-bold px-4 pt-4 text-gray-700",children:"GOVT SAF Report"}),e.jsx("div",{className:"bg-white w-full px-2 py-2 rounded-md shadow-md",children:e.jsxs("table",{className:"w-full mt-2",children:[e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{className:"bg-gray-200 border-[1px]  border-gray-700 pl-1 font-semibold",children:"S.No."}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"SAF Type"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Bill Cut"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Rebate"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Penalty"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Collection Amount"})]}),e.jsxs("tr",{className:"text-center",children:[e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:"1"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:"2"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:"3"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:"4"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:"5"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:"6"})]})]})}),e.jsx("div",{className:"h-[20vh]"})]})};export{U as default};
