import{K as R,au as h,r as n,a as O,q as F,s as f,w as L,A as x,b as j,j as e,o as T,U as B,B as z,P as q,al as W}from"./index-048babd9.js";const V=()=>{const{propPaymentModeWiseSummary:N,safPaymentModeWiseSummary:g,get_collectorList:y}=q(),{api_newWardByZoneId:v}=W();R();let w=new Date().toLocaleDateString("in-IN"),m=h(w).format("YYYY-DD-MM");const[c,D]=n.useState([]),[i,C]=n.useState([]),[E,S]=n.useState(),[b,r]=n.useState(!1),[A,Z]=n.useState(!0),a="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md";O("All Type Collection Report ");const k=F({fromDate:f().required("Field Required"),uptoDate:f().required("Field Required")}),s=L({initialValues:{fromDate:h(new Date).format("yy-MM-DD"),uptoDate:h(new Date).format("yy-MM-DD"),zoneId:"",wardId:"",userId:"",paymentMode:""},onSubmit:t=>{u()},validationSchema:k}),u=()=>{r(!0);let t;t={fromDate:s.values.fromDate,uptoDate:s.values.uptoDate,zoneId:s.values.zoneId,wardId:s.values.wardId,userId:s.values.userId,paymentMode:s.values.paymentMode},x.post(A?N:g,t,j()).then(l=>{var d,o;((d=l==null?void 0:l.data)==null?void 0:d.status)==!0&&S((o=l==null?void 0:l.data)==null?void 0:o.data),r(!1)}).catch(l=>r(!1))};n.useEffect(()=>{u(),P()},[]);const I=t=>{r(!0),s.setFieldValue("wardId","");let l={zoneId:t};x.post(v,l,j()).then(function(d){C(d.data.data),r(!1)}).catch(function(d){r(!1)})},P=t=>{r(!0);let l={};x.post(y,l,j()).then(d=>{var o,p;((o=d==null?void 0:d.data)==null?void 0:o.status)==!0&&D((p=d==null?void 0:d.data)==null?void 0:p.data),r(!1)}).catch(d=>r(!1))},M=t=>{let l=t.target.name,d=t.target.value;l=="zoneId"&&I(d)};return e.jsx("div",{children:e.jsxs("form",{onChange:M,onSubmit:s.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search collection Summary"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",id:"",className:a,defaultValue:m,...s.getFieldProps("fromDate")})}),e.jsx("div",{className:"col-span-12 text-end",children:s.touched.fromDate&&s.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:s.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",...s.getFieldProps("uptoDate"),id:"",className:a,defaultValue:m})}),e.jsx("div",{className:"col-span-12 text-end",children:s.touched.uptoDate&&s.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:s.errors.uptoDate})})})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:["Zone",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:s.handleChange,className:a,children:[e.jsx("option",{value:"",children:"All Zones"}),e.jsx("option",{value:"1",children:"Zone A-East"}),e.jsx("option",{value:"2",children:"Zone B-West"}),e.jsx("option",{value:"3",children:"Zone C-North"}),e.jsx("option",{value:"4",children:"Zone D-South"})]}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.zoneId&&s.errors.zoneId?s.errors.zoneId:null})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:["Ward No",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:s.handleChange,className:a,children:[e.jsx("option",{value:"",children:"All Ward"}),i==null?void 0:i.map((t,l)=>e.jsx("option",{value:t.id,children:t.ward_name},l))]}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.wardNo&&s.errors.wardNo?s.errors.wardNo:null})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector Name :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:a,onChange:s.handleChange,children:[e.jsx("option",{value:"",children:"All"}),c==null?void 0:c.map(t=>e.jsx(e.Fragment,{children:e.jsx("option",{value:t==null?void 0:t.id,children:e.jsx("span",{className:"capitalize",children:t==null?void 0:t.user_name})})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:a,onChange:s.handleChange,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:b?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-start items-end",children:e.jsx(T,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(B,{})}),"Search"]})})]}),e.jsxs("div",{className:"w-full h-auto pb-1",children:[b&&e.jsx(z,{}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2 mx-2",children:[e.jsxs("div",{className:" h-auto text-center border border-sky-100 rounded-md shadow-lg shadow-sky-100  py-4 px-3 bg-white  ",children:[e.jsx("h1",{className:" text-sm md:text-lg font-semibold text-cyan-800 h-auto  font-sans uppercase",children:"Property collection & collection description"}),e.jsxs("table",{className:"w-full text-left text-gray-600 text-xs md:text-sm font-medium table-auto overflow-x-scroll",children:[e.jsx("thead",{className:"border-t border-b h-10 bg-slate-100",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Of Collection"}),e.jsx("th",{children:"Bill Cut"}),e.jsx("th",{children:"Rebate"}),e.jsx("th",{children:"Penalty"}),e.jsx("th",{children:"Amount"})]})}),e.jsxs("tbody",{className:"",children:[e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Door to Door"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Jsk Collection"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Online Payment"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]}),e.jsxs("tr",{className:"h-12 font-bold text-base border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Total Collection"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]})]})]})]}),e.jsxs("div",{className:" h-auto text-center border border-sky-100 rounded-md shadow-lg shadow-sky-100  py-4 px-3 bg-white  ",children:[e.jsx("h1",{className:" text-sm md:text-lg font-semibold text-cyan-800 h-auto  font-sans uppercase",children:"Saf Online collection & collection description"}),e.jsxs("table",{className:"w-full text-left text-gray-600 text-xs md:text-sm font-medium table-auto overflow-x-scroll",children:[e.jsx("thead",{className:"border-t border-b h-10 bg-slate-100",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Of Collection"}),e.jsx("th",{children:"Bill Cut"}),e.jsx("th",{children:"Rebate"}),e.jsx("th",{children:"Penalty"}),e.jsx("th",{children:"Amount"})]})}),e.jsxs("tbody",{className:"",children:[e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Online New Saf "}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Online Re-Assessment "}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Online Mutation "}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]}),e.jsxs("tr",{className:"h-12 font-bold text-base border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Total Collection"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]})]})]})]}),e.jsxs("div",{className:" h-auto text-center border border-sky-100 rounded-md shadow-lg shadow-sky-100  py-4 px-3 bg-white  ",children:[e.jsx("h1",{className:" text-sm md:text-lg font-semibold text-cyan-800 h-auto  font-sans uppercase",children:"Saf Jsk collection & collection description"}),e.jsxs("table",{className:"w-full text-left text-gray-600 text-xs md:text-sm font-medium table-auto overflow-x-scroll",children:[e.jsx("thead",{className:"border-t border-b h-10 bg-slate-100",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Of Collection"}),e.jsx("th",{children:"Bill Cut"}),e.jsx("th",{children:"Rebate"}),e.jsx("th",{children:"Penalty"}),e.jsx("th",{children:"Amount"})]})}),e.jsxs("tbody",{className:"",children:[e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Jsk New Saf  "}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Jsk Re-Assessment "}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Jsk Mutation "}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]}),e.jsxs("tr",{className:"h-12 font-bold text-base border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Total Collection"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]})]})]})]}),e.jsxs("div",{className:" h-auto text-center border border-sky-100 rounded-md shadow-lg shadow-sky-100  py-4 px-3 bg-white  ",children:[e.jsx("h1",{className:" text-sm md:text-lg font-semibold text-cyan-800 h-auto  font-sans uppercase",children:"Saf D2D collection & collection description"}),e.jsxs("table",{className:"w-full text-left text-gray-600 text-xs md:text-sm font-medium table-auto overflow-x-scroll",children:[e.jsx("thead",{className:"border-t border-b h-10 bg-slate-100",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Of Collection"}),e.jsx("th",{children:"Bill Cut"}),e.jsx("th",{children:"Rebate"}),e.jsx("th",{children:"Penalty"}),e.jsx("th",{children:"Amount"})]})}),e.jsxs("tbody",{className:"",children:[e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"D2D New Saf "}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"D2D Re-Assessment "}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"D2D Mutation "}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]}),e.jsxs("tr",{className:"h-12 font-bold text-base border-b border-slate-100  hover:bg-slate-50",children:[e.jsx("td",{children:"Total Collection"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]})]})]})]})]}),e.jsxs("div",{className:" h-auto text-center border border-sky-100 rounded-md shadow-lg shadow-sky-100  py-4 px-3 bg-white mx-2 my-4 ",children:[e.jsx("h1",{className:" text-sm md:text-lg font-semibold text-cyan-800 h-auto  font-sans uppercase",children:"Actual collection  description"}),e.jsxs("table",{className:"w-full text-left text-gray-600 text-xs md:text-sm font-medium table-auto overflow-x-scroll",children:[e.jsx("thead",{className:"border-t border-b h-10 bg-slate-100",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Type Of Collection"}),e.jsx("th",{children:"Bill Cut"}),e.jsx("th",{children:"Rebate"}),e.jsx("th",{children:"Penalty"}),e.jsx("th",{children:"Amount"})]})}),e.jsxs("tbody",{className:"",children:[e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Door to Door"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Jsk Collection"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]}),e.jsxs("tr",{className:"h-10 border-b border-slate-100 hover:bg-slate-50",children:[e.jsx("td",{children:"Online Payment"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]}),e.jsxs("tr",{className:"h-12 font-bold text-base border-b bg-yellow-200 border-slate-100 hover:bg-yellow-300",children:[e.jsx("td",{children:"Net Collection"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"12"}),e.jsx("td",{children:"11"})]})]})]})]})]})]})})};export{V as default};
