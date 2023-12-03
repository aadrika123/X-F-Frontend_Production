import{R as Q,_ as V,e as W,a as $,r,w as B,ak as v,q as J,a1 as K,s as z,A as w,b as _,j as e,o as G,O as Z,ad as d,i as n,P as X,n as g}from"./index-83771a57.js";const Y=Q.lazy(()=>V(()=>import("./index-83771a57.js").then(f=>f.cU),["assets/index-83771a57.js","assets/index-1176222e.css"])),ae=f=>{var b;const{get_MasterData:T,searchRebatePenalty:S,yearList:C}=X(),u=W();$("Rebate and Interest Report");const[p,A]=r.useState(),[D,F]=r.useState(),[a,R]=r.useState(null),[H,ee]=r.useState(!1),[h,k]=r.useState(null),[j,I]=r.useState(null),[M,P]=r.useState(0),c="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",l=B({initialValues:{fromDate:v(new Date).format("yy-MM-DD"),uptoDate:v(new Date).format("yy-MM-DD"),reportType:["property"],wardId:"",userId:"",paymentMode:"",propertyType:""},onSubmit:s=>{console.log("submitting report search values => ",s),I({reportType:l.values.reportType,fromDate:l.values.fromDate,uptoDate:l.values.uptoDate,wardId:l.values.wardId,userId:l.values.userId,paymentMode:l.values.paymentMode,propertyType:l.values.propertyType}),P(t=>t+1)},validationSchema:J({reportType:K().min(1,"Check atleast one").of(z().required("Array items must be non-empty strings"))})}),q=["saf","gbsaf"],E=["property"],y=r.useMemo(()=>{var s;return a!=null&&((s=a==null?void 0:a.data)==null?void 0:s.length)>0&&Array.isArray(a==null?void 0:a.reportTypes)&&(a==null?void 0:a.reportTypes).some(t=>q.includes(t))},[a]),L=r.useMemo(()=>{var s;return a!=null&&((s=a==null?void 0:a.data)==null?void 0:s.length)>0&&Array.isArray(a==null?void 0:a.reportTypes)&&(a==null?void 0:a.reportTypes).some(t=>E.includes(t))},[a]);r.useEffect(()=>{w.get(T,_()).then(s=>{var t,i,o,m,x;((t=s==null?void 0:s.data)==null?void 0:t.status)==!0?(console.log("getting master list => ",s),k((o=(i=s==null?void 0:s.data)==null?void 0:i.data)==null?void 0:o.property_type),A((x=(m=s==null?void 0:s.data)==null?void 0:m.data)==null?void 0:x.ward_master)):console.log("error getting master list",s)}).catch(s=>console.log("error getting master list",s)),w.post(C,{},_()).then(s=>{var t,i;((t=s==null?void 0:s.data)==null?void 0:t.status)==!0?(console.log("year list data => ",s),F((i=s==null?void 0:s.data)==null?void 0:i.data)):console.log("error year list",s)}).catch(s=>console.log("error year list",s))},[]);const O=s=>{var t,i,o,m,x,N;console.log("navigate fun"),((t=a==null?void 0:a.data[s])==null?void 0:t.type)=="property"&&u("/holdingPropertyDetails/"+((i=a==null?void 0:a.data[s])==null?void 0:i.property_id)),((o=a==null?void 0:a.data[s])==null?void 0:o.type)=="saf"&&u("/propApplicationDetails/"+((m=a==null?void 0:a.data[s])==null?void 0:m.saf_id)),((x=a==null?void 0:a.data[s])==null?void 0:x.type)=="gbsaf"&&u("/gbsaf-details/"+((N=a==null?void 0:a.data[s])==null?void 0:N.saf_id))},U=[{Header:"S.No.",Cell:({row:s})=>e.jsx("div",{children:(s==null?void 0:s.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:s=>g(s==null?void 0:s.value)},{Header:"Holding No",accessor:"holding_no",Cell:s=>g(s==null?void 0:s.value)},{Header:"SAF No",accessor:"saf_no",Cell:s=>g(s==null?void 0:s.value)},{Header:"Demand",accessor:"demand_amt",Cell:s=>n(s==null?void 0:s.value)},{Header:"First Quarter Rebate (5%)",accessor:"first_qtr_rebate",Cell:s=>n(s==null?void 0:s.value)},{Header:"JSK Rebate (2.5%)",accessor:"jsk_rebate_amt",Cell:s=>n(s==null?void 0:s.value)},{Header:"Special Rebate (5%)",accessor:"special_rebate_amt",Cell:s=>n(s==null?void 0:s.value)},{Header:"Online Rebate (5%)",accessor:"online_rebate_amt",Cell:s=>n(s==null?void 0:s.value)},{Header:"Total Rebate",Cell:({cell:s})=>e.jsxs(e.Fragment,{children:[" ",n(d(s.row.original.first_qtr_rebate)+d(s.row.original.jsk_rebate_amt)+d(s.row.original.special_rebate_amt)+d(s.row.original.online_rebate_amt))," "]})},{Header:"1% Monthly Intrest",accessor:"penalty_amt",Cell:s=>n(s==null?void 0:s.value)},{Header:"Amount Paid",accessor:"paid_amount",Cell:s=>n(s==null?void 0:s.value)},{Header:"Action",Cell:({cell:s})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex items-center justify-center gap-2 w-full",children:e.jsx("button",{onClick:()=>{var t;return O((t=s==null?void 0:s.row)==null?void 0:t.index)},className:"px-2 py-1 rounded-md bg-indigo-500 text-white text-sm hover:bg-indigo-600",children:"View"})})})}];return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onChange:l.handleChange,onSubmit:l.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Report Type :"}),e.jsxs("div",{className:"col-span-6 flex items-center justify-between bg-green-100 shadow-md px-2 py-1.5 rounded-md border border-green-300 shadow-green-100",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"1",children:"Property"}),e.jsx("input",{className:"mt-1",type:"checkbox",name:"reportType",id:"1",value:"property",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"2",children:"SAF"}),e.jsx("input",{className:"mt-1",type:"checkbox",name:"reportType",id:"2",value:"saf"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"3",children:"Gov. SAF"}),e.jsx("input",{className:"mt-1",type:"checkbox",name:"reportType",id:"3",value:"gbsaf"})]})]}),e.jsx("div",{className:"col-span-12 text-start",children:l.touched.reportType&&l.errors.reportType&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.reportType})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",id:"",className:c,value:l.values.fromDate})}),e.jsx("div",{className:"col-span-12 text-end",children:l.touched.fromDate&&l.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",id:"",className:c,value:l.values.uptoDate})}),e.jsx("div",{className:"col-span-12 text-end",children:l.touched.uptoDate&&l.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.uptoDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"wardId",id:"",className:c,children:[e.jsx("option",{value:"",children:"All"}),p==null?void 0:p.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.ward_name})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:c,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Property Type :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"propertyType",id:"",className:c,children:[e.jsx("option",{value:"",children:"All"}),h==null?void 0:h.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.property_type})}))]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:H?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-start items-end",children:e.jsx(G,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(Z,{})}),"Search"]})})]})]}),a!=null&&((b=a==null?void 0:a.data)==null?void 0:b.length)>0&&e.jsxs("div",{className:"bg-white p-2 rounded-md shadow-md mb-4 flex flex-wrap justify-evenly gap-y-2 gap-x-4",children:[L&&e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total Holding :"}),e.jsx("span",{className:"font-semibold col-span-5",children:d(a==null?void 0:a.total_holding_no)})]}),y&&e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total Application :"}),e.jsx("span",{className:"font-semibold col-span-5",children:d(a==null?void 0:a.total_saf_no)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total Demand :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_demand_amt)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total Amount Paid :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_paid_amount)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total First Quarter Rebate :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_first_qtr_rebate)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total JSK Rebate :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_jsk_rebate_amt)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total Special Rebate :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_special_rebate_amt)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total Online Rebate :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_online_rebate_amt)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total Rebate :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_total_rebate)})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 ",children:[e.jsx("span",{className:"text-sm col-span-7",children:"Total 1% Monthly Interest :"}),e.jsx("span",{className:"font-semibold col-span-5",children:n(a==null?void 0:a.total_penalty_amt)})]}),y&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"sm:grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 hidden",children:[e.jsx("span",{className:"text-sm col-span-7"}),e.jsx("span",{className:"font-semibold col-span-5"})]}),e.jsxs("div",{className:"sm:grid grid-cols-12 items-center gap-2 w-full sm:w-1/3 md:w-1/4 hidden",children:[e.jsx("span",{className:"text-sm col-span-7"}),e.jsx("span",{className:"font-semibold col-span-5"})]})]})]}),j!=null&&e.jsx(Y,{getData:!0,allData:s=>R(s),api:S,columns:U,requestBody:j,changeData:M}),e.jsx("div",{className:"h-[20vh]"})]})};export{ae as default};
