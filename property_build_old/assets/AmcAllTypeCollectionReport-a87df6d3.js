import{w as O,bv as L,be as h,r as n,k as T,l as F,m as g,o as B,A as x,N as j,j as e,C as E,bR as J,B as q,bP as _}from"./index-d1c91139.js";const H=()=>{const{get_MasterData:y,propPaymentModeWiseSummary:N,safPaymentModeWiseSummary:v,get_collectorList:w}=_(),m=O(),{type:D}=L();let C=new Date().toLocaleDateString("in-IN"),b=h(C).format("YYYY-DD-MM");const[o,A]=n.useState(),[i,k]=n.useState(),[W,S]=n.useState(),[u,a]=n.useState(!1),[M,p]=n.useState(!0),c="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md";T("All Type Collection Report ");const P=F({fromDate:g().required("Field Required"),uptoDate:g().required("Field Required")}),l=B({initialValues:{fromDate:h(new Date).format("yy-MM-DD"),uptoDate:h(new Date).format("yy-MM-DD"),wardId:"",userId:"",paymentMode:""},onSubmit:t=>{f()},validationSchema:P}),f=()=>{a(!0);let t;D=="saf"?t={fromDate:l.values.fromDate,uptoDate:l.values.uptoDate,wardId:l.values.wardId,userId:l.values.userId,paymentMode:l.values.paymentMode}:t={fromDate:l.values.fromDate,uptoDate:l.values.uptoDate,wardId:l.values.wardId},console.log("data before hitting api => ",t),x.post(M?N:v,t,j()).then(s=>{var d,r;((d=s==null?void 0:s.data)==null?void 0:d.status)==!0?(console.log("search success => ",s),S((r=s==null?void 0:s.data)==null?void 0:r.data)):console.log("error while search => ",s),a(!1)}).catch(s=>(console.log("error while search => ",s),a(!1)))};n.useEffect(()=>{R(),m.pathname=="/property-report"&&p(!0),m.pathname=="/saf-report"&&p(!1),f()},[]);const R=()=>{x.get(y,j()).then(t=>{var s,d,r;((s=t==null?void 0:t.data)==null?void 0:s.status)==!0&&A((r=(d=t==null?void 0:t.data)==null?void 0:d.data)==null?void 0:r.ward_master)}).catch(t=>{})},I=t=>{a(!0),x.post(w,{wardId:t.target.value},j()).then(s=>{var d,r;((d=s==null?void 0:s.data)==null?void 0:d.status)==!0&&k((r=s==null?void 0:s.data)==null?void 0:r.data),a(!1)}).catch(s=>a(!1))};return e.jsx("div",{children:e.jsxs("form",{onChange:l.handleChange,onSubmit:l.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search collection Summary"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:l.values.fromDate,id:"",className:c,defaultValue:b})}),e.jsx("div",{className:"col-span-12 text-end",children:l.touched.fromDate&&l.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:l.values.uptoDate,id:"",className:c,defaultValue:b})}),e.jsx("div",{className:"col-span-12 text-end",children:l.touched.uptoDate&&l.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.uptoDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"wardId",id:"",className:c,onChange:I,children:[e.jsx("option",{value:"",children:"All"}),o==null?void 0:o.map(t=>e.jsx(e.Fragment,{children:e.jsx("option",{value:t==null?void 0:t.id,children:t==null?void 0:t.ward_name})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector Name :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:c,children:[e.jsx("option",{value:"",children:"All"}),i==null?void 0:i.map(t=>e.jsx(e.Fragment,{children:e.jsx("option",{value:t==null?void 0:t.id,children:e.jsx("span",{className:"capitalize",children:t==null?void 0:t.user_name})})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:c,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:u?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-start items-end",children:e.jsx(E,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(J,{})}),"Search"]})})]}),e.jsxs("div",{className:"w-full h-auto pb-1",children:[u&&e.jsx(q,{}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2 mx-2",children:[e.jsxs("div",{className:" h-auto text-center border border-sky-100 rounded-md shadow-lg shadow-sky-100  py-4 px-3 bg-white  ",children:[e.jsx("h1",{className:" text-sm md:text-lg font-semibold text-cyan-800 h-auto  font-sans uppercase",children:"Property collection & collection description"}),e.jsxs("table",{className:"w-full text-left text-gray-600 text-xs md:text-sm font-medium table-auto overflow-x-scroll",children:[e.jsx("thead",{className:"border-t border-b h-10 bg-slate-100",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Of Collection"}),e.jsx("th",{children:"Bill Cut"}),e.jsx("th",{children:"Rebate"}),e.jsx("th",{children:"Penalty"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Collection(%)"})]})}),e.jsxs("tbody",{className:"",children:[e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Door to Door"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"2600.00"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Jsk Collection"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"1600.00"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Online Payment"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"3900.00"})]}),e.jsxs("tr",{className:"h-12 font-bold text-base border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Total Collection"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"12600.00"})]})]})]})]}),e.jsxs("div",{className:" h-auto text-center border border-sky-100 rounded-md shadow-lg shadow-sky-100  py-4 px-3 bg-white  ",children:[e.jsx("h1",{className:" text-sm md:text-lg font-semibold text-cyan-800 h-auto  font-sans uppercase",children:"Saf Online collection & collection description"}),e.jsxs("table",{className:"w-full text-left text-gray-600 text-xs md:text-sm font-medium table-auto overflow-x-scroll",children:[e.jsx("thead",{className:"border-t border-b h-10 bg-slate-100",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Of Collection"}),e.jsx("th",{children:"Bill Cut"}),e.jsx("th",{children:"Rebate"}),e.jsx("th",{children:"Penalty"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Collection(%)"})]})}),e.jsxs("tbody",{className:"",children:[e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Online New Saf Apply"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"1300.00"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Online Re-Assessment Apply"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"1500.00"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Online Mutation Apply"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"1000.00"})]}),e.jsxs("tr",{className:"h-12 font-bold text-base border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Total Collection"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"3800.00"})]})]})]})]}),e.jsxs("div",{className:" h-auto text-center border border-sky-100 rounded-md shadow-lg shadow-sky-100  py-4 px-3 bg-white  ",children:[e.jsx("h1",{className:" text-sm md:text-lg font-semibold text-cyan-800 h-auto  font-sans uppercase",children:"Saf Jsk collection & collection description"}),e.jsxs("table",{className:"w-full text-left text-gray-600 text-xs md:text-sm font-medium table-auto overflow-x-scroll",children:[e.jsx("thead",{className:"border-t border-b h-10 bg-slate-100",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Of Collection"}),e.jsx("th",{children:"Bill Cut"}),e.jsx("th",{children:"Rebate"}),e.jsx("th",{children:"Penalty"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Collection(%)"})]})}),e.jsxs("tbody",{className:"",children:[e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Jsk New Saf Apply "}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"3800.00"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Jsk Re-Assessment Apply"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"3800.00"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Jsk Mutation Apply"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"3800.00"})]}),e.jsxs("tr",{className:"h-12 font-bold text-base border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Total Collection"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"3800.00"})]})]})]})]}),e.jsxs("div",{className:" h-auto text-center border border-sky-100 rounded-md shadow-lg shadow-sky-100  py-4 px-3 bg-white  ",children:[e.jsx("h1",{className:" text-sm md:text-lg font-semibold text-cyan-800 h-auto  font-sans uppercase",children:"Saf D2D collection & collection description"}),e.jsxs("table",{className:"w-full text-left text-gray-600 text-xs md:text-sm font-medium table-auto overflow-x-scroll",children:[e.jsx("thead",{className:"border-t border-b h-10 bg-slate-100",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Of Collection"}),e.jsx("th",{children:"Bill Cut"}),e.jsx("th",{children:"Rebate"}),e.jsx("th",{children:"Penalty"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Collection(%)"})]})}),e.jsxs("tbody",{className:"",children:[e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"D2D New Saf Apply"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"3800.00"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"D2D Re-Assessment Apply"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"3800.00"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"D2D Mutation Apply"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"3800.00"})]}),e.jsxs("tr",{className:"h-12 font-bold text-base border-b border-slate-100  hover:bg-slate-50",children:[e.jsx("td",{children:"Total Collection"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"3800.00"})]})]})]})]})]}),e.jsxs("div",{className:" h-auto text-center border border-sky-100 rounded-md shadow-lg shadow-sky-100  py-4 px-3 bg-white mx-2 my-4 ",children:[e.jsx("h1",{className:" text-sm md:text-lg font-semibold text-cyan-800 h-auto  font-sans uppercase",children:"Actual collection  description"}),e.jsxs("table",{className:"w-full text-left text-gray-600 text-xs md:text-sm font-medium table-auto overflow-x-scroll",children:[e.jsx("thead",{className:"border-t border-b h-10 bg-slate-100",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Of Collection"}),e.jsx("th",{children:"Bill Cut"}),e.jsx("th",{children:"Rebate"}),e.jsx("th",{children:"Penalty"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Collection(%)"})]})}),e.jsxs("tbody",{className:"",children:[e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Door to Door"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"2600.00"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Jsk Collection"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"1600.00"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Online Payment"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"3900.00"})]}),e.jsxs("tr",{className:"h-12 font-bold text-base border-b bg-yellow-200 border-slate-100 hover:bg-yellow-300",children:[e.jsx("td",{children:"Net Collection"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"}),e.jsx("td",{children:"12600.00"})]})]})]})]})]})]})})};export{H as default};
