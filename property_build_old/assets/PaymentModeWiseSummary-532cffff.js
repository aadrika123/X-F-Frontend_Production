import{R,_ as W,w as q,bm as T,b1 as h,r as d,k as H,l as V,m as w,o as Y,A as p,L as f,j as e,C as O,bM as z,bH as U}from"./index-1bffd607.js";const c=R.lazy(()=>W(()=>import("./PaymentModeWiseSummaryTable-9104542e.js"),["assets/PaymentModeWiseSummaryTable-9104542e.js","assets/index-1bffd607.js","assets/index-6a472511.css"])),L=()=>{const{get_MasterData:N,propPaymentModeWiseSummary:b,safPaymentModeWiseSummary:S,get_collectorList:M}=U(),j=q(),{type:v}=T();let F=new Date().toLocaleDateString("in-IN"),y=h(F).format("YYYY-DD-MM");const[m,I]=d.useState(),[u,C]=d.useState(),[s,_]=d.useState(),[x,r]=d.useState(!1),[P,g]=d.useState(!0),i="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md";H("Payment mode wise collection summary");const k=V({fromDate:w().required("Field Required"),uptoDate:w().required("Field Required")}),l=Y({initialValues:{fromDate:h(new Date).format("yy-MM-DD"),uptoDate:h(new Date).format("yy-MM-DD"),wardId:"",userId:"",paymentMode:""},onSubmit:a=>{D()},validationSchema:k}),D=()=>{r(!0);let a;v=="saf"?a={fromDate:l.values.fromDate,uptoDate:l.values.uptoDate,wardId:l.values.wardId,userId:l.values.userId,paymentMode:l.values.paymentMode}:a={fromDate:l.values.fromDate,uptoDate:l.values.uptoDate,wardId:l.values.wardId},console.log("data before hitting api => ",a),p.post(P?b:S,a,f()).then(t=>{var o,n;((o=t==null?void 0:t.data)==null?void 0:o.status)==!0?(console.log("search success => ",t),_((n=t==null?void 0:t.data)==null?void 0:n.data)):console.log("error while search => ",t),r(!1)}).catch(t=>(console.log("error while search => ",t),r(!1)))};d.useEffect(()=>{A(),j.pathname=="/property-report"&&g(!0),j.pathname=="/saf-report"&&g(!1),D()},[]);const A=()=>{p.get(N,f()).then(a=>{var t,o,n;((t=a==null?void 0:a.data)==null?void 0:t.status)==!0&&I((n=(o=a==null?void 0:a.data)==null?void 0:o.data)==null?void 0:n.ward_master)}).catch(a=>{})},E=a=>{r(!0),p.post(M,{wardId:a.target.value},f()).then(t=>{var o,n;((o=t==null?void 0:t.data)==null?void 0:o.status)==!0&&C((n=t==null?void 0:t.data)==null?void 0:n.data),r(!1)}).catch(t=>r(!1))};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onChange:l.handleChange,onSubmit:l.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Summary"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:l.values.fromDate,id:"",className:i,defaultValue:y})}),e.jsx("div",{className:"col-span-12 text-end",children:l.touched.fromDate&&l.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:l.values.uptoDate,id:"",className:i,defaultValue:y})}),e.jsx("div",{className:"col-span-12 text-end",children:l.touched.uptoDate&&l.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.uptoDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"wardId",id:"",className:i,onChange:E,children:[e.jsx("option",{value:"",children:"All"}),m==null?void 0:m.map(a=>e.jsx(e.Fragment,{children:e.jsx("option",{value:a==null?void 0:a.id,children:a==null?void 0:a.ward_name})}))]})})]}),v=="saf"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector Name :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:i,children:[e.jsx("option",{value:"",children:"All"}),u==null?void 0:u.map(a=>e.jsx(e.Fragment,{children:e.jsx("option",{value:a==null?void 0:a.id,children:e.jsx("span",{className:"capitalize",children:a==null?void 0:a.user_name})})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:i,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:x?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-start items-end",children:e.jsx(O,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(z,{})}),"Search"]})})]})]}),!x&&s!=null&&(s==null?void 0:s.length)!=0?e.jsxs(e.Fragment,{children:[e.jsx(c,{data:s==null?void 0:s.collection,type:"collection"}),e.jsx(c,{data:s==null?void 0:s.doorToDoor,type:"doorToDoor"}),e.jsx(c,{data:s==null?void 0:s.jsk,type:"jsk"}),e.jsx(c,{data:s==null?void 0:s.netCollection,type:"netCollection"}),e.jsx(c,{data:s==null?void 0:s.refund,type:"refund"})]}):e.jsx(e.Fragment,{children:!x&&e.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),e.jsx("div",{className:"h-[20vh]"})]})};export{L as default};