import{aa as q,a as J,r as i,b as D,A as j,w as S,am as k,q as _,s as N,cu as X,j as e,a7 as Y,K as ee,U as ae,n as t,P as se,Q as oe,ak as le}from"./index-07053450.js";import{B as ne}from"./BottomErrorCard-c6000eb6.js";const te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};q.setAppElement("#root");function me(){J("Bank Reconciliation");const[I,v]=i.useState(!1);i.useState("");const[re,F]=i.useState(),[T,h]=i.useState(!1),[g,M]=i.useState(!1),[c,B]=i.useState(),[H,P]=i.useState(0),[ce,E]=i.useState(""),[A,R]=i.useState(!1),[L,U]=i.useState(null),[ie,O]=i.useState(!1),{getReconcillationDetails:V,apiUpdateReconcillationDetails:z,getReconcileById:$}=se(),y=D();function Q(a){v(!0),F(a),console.log("====transactionNo in funcion",a)}function f(){v(!1)}const K=()=>{f()};i.useEffect(()=>{p()},[]);const p=a=>{var r,l,d,u,m,w;h(!0),console.log("parameters for filter data is ",a);const n={fromDate:(r=s==null?void 0:s.values)==null?void 0:r.fromDate,toDate:(l=s==null?void 0:s.values)==null?void 0:l.toDate,moduleId:(d=s==null?void 0:s.values)==null?void 0:d.moduleId,paymentMode:(u=s==null?void 0:s.values)==null?void 0:u.paymentMode,verificationType:(m=s==null?void 0:s.values)==null?void 0:m.verificationType,chequeNo:(w=s==null?void 0:s.values)==null?void 0:w.cheque_dd_no};j.post(V,n,y).then(b=>{var C;return console.log("Fetched Filter Data",b),M((C=b==null?void 0:b.data)==null?void 0:C.data),h(!1)}).catch(b=>{console.log("Error while fetching filter Data",b),x(!0,"Error occured while fetching bank reconciliation list. Please try again later."),h(!1)})},s=S({initialValues:{fromDate:k(new Date).format("yy-MM-DD"),toDate:k(new Date).format("yy-MM-DD"),moduleId:"1",paymentMode:"",verificationType:"",cheque_dd_no:""},enableReinitialize:!0,onSubmit:a=>{p(a),E(a==null?void 0:a.moduleId)},validationSchema:_({fromDate:N().required("Select from date"),toDate:N().required("Select to date")})}),W=a=>{O(!0),j.post(z,{chequeId:H,moduleId:"1",status:a==null?void 0:a.clearStatus,clearanceDate:a==null?void 0:a.clearanceDate,remarks:o.values.clearStatus=="bounce"?a==null?void 0:a.reason:"",cancellationCharge:o.values.clearStatus=="bounce"?a==null?void 0:a.charge:""},y).then(n=>(console.log("Data Update Successfully",n),K(),h(!1),p(),oe.success("Action Taken Successfully !!!"))).catch(n=>(console.log("Error : Data Not Updated",n),h(!1),x(!0,"Error occured while bank reconile. Please try again later.")))},o=S({initialValues:{clearanceDate:"",clearStatus:"",reason:"",charge:""},onSubmit:a=>{console.log("--2 Clear VAluee...",a),W(a)},validationSchema:_({clearanceDate:X().required("Select from Date"),clearStatus:N().required("Select Status")})}),Z=(a,n)=>{h(!0),P(a);let r={chequeId:a,moduleId:n};j.post($,r,D()).then(l=>{var d,u,m;((d=l==null?void 0:l.data)==null?void 0:d.status)==!0&&(console.log("getting data by id with payload is => ",r,`
 and  response is => `,l),h(!1),B((u=l==null?void 0:l.data)==null?void 0:u.data),Q()),((m=l==null?void 0:l.data)==null?void 0:m.status)==!1&&(console.log("error getting data by id with payload is => ",r,`
 and  response is => `,l),x(!0,"Error occured while fetching bank reconcile details. Please try again later."),h(!1))}).catch(l=>{console.log("error getting data by id with payload is => ",r,`
 and  response is => `,l),x(!0,"Error occured while fetching bank reconcile details. Please try again later."),h(!1)})},G=[{Header:"S.No.",Cell:({row:a})=>e.jsx("div",{children:(a==null?void 0:a.index)+1})},{Header:"Tran. No.",accessor:"tran_no",Cell:a=>t(a==null?void 0:a.value)},{Header:"Tran. Date",accessor:"tran_date",Cell:a=>t(a==null?void 0:a.value)},{Header:"Payment Mode",accessor:"payment_mode",Cell:a=>t(a==null?void 0:a.value)},{Header:"Tran. Type",accessor:"tran_type",Cell:a=>t(a==null?void 0:a.value)},{Header:"Cheque Date",accessor:"cheque_date",Cell:a=>t(a==null?void 0:a.value)},{Header:"Cheque No.",accessor:"cheque_no",Cell:a=>t(a==null?void 0:a.value)},{Header:"Bank Name",accessor:"bank_name",Cell:a=>t(a==null?void 0:a.value)},{Header:"Branch Name",accessor:"branch_name",Cell:a=>t(a==null?void 0:a.value)},{Header:"Tran. Amount",accessor:"amount",Cell:a=>e.jsx(e.Fragment,{children:le(parseFloat(a==null?void 0:a.value)).toLocaleString("en-IN",{style:"currency",currency:"INR"})})},{Header:"Clearance Date",accessor:"clear_bounce_date",Cell:a=>t(a==null?void 0:a.value)},{Header:"Remarks",accessor:"remarks",Cell:a=>t(a==null?void 0:a.value)},{Header:"TC Name",accessor:"user_name",Cell:a=>t(a==null?void 0:a.value)},{Header:"Status",Cell:({cell:a})=>{var n,r,l,d,u,m;return e.jsxs(e.Fragment,{children:[((r=(n=a==null?void 0:a.row)==null?void 0:n.original)==null?void 0:r.status)=="1"&&e.jsx("span",{className:"text-green-500 font-semibold",children:"Clear"}),((d=(l=a==null?void 0:a.row)==null?void 0:l.original)==null?void 0:d.status)=="2"&&e.jsx("span",{className:"text-blue-500 font-semibold",children:"Pending"}),((m=(u=a==null?void 0:a.row)==null?void 0:u.original)==null?void 0:m.status)=="3"&&e.jsx("span",{className:"text-red-500 font-semibold",children:"Bounce"})]})}},{Header:"_",Cell:({cell:a})=>{var n,r;return((r=(n=a.row)==null?void 0:n.original)==null?void 0:r.status)=="2"&&e.jsxs("span",{onClick:()=>{var l,d,u,m;Z((d=(l=a.row)==null?void 0:l.original)==null?void 0:d.id,(m=(u=a==null?void 0:a.row)==null?void 0:u.original)==null?void 0:m.module_id)},className:" px-2 py-1 rounded-lg shadow-lg border border-gray-300 bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer",children:[e.jsx("span",{className:"font-semibold",children:"Action"})," "]})}}],x=(a,n)=>{U(n),R(a)};return e.jsxs(e.Fragment,{children:[e.jsx(Y,{autoClose:2e3}),T&&e.jsx(ee,{}),A&&e.jsx(ne,{activateBottomErrorCard:x,errorTitle:L}),e.jsx("form",{onSubmit:s.handleSubmit,children:e.jsxs("div",{className:"grid grid-cols-12 space-x-2 bg-indigo-100 p-2 rounded-md",children:[e.jsx("div",{className:"col-span-12",children:e.jsxs("h1",{className:" text-xl font-semibold",children:[e.jsx("img",{src:"",className:"inline w-10"})," Bank Reconciliation"]})}),e.jsxs("div",{className:"form-group mb-1 md:mb-2 col-span-4 md:col-span-3 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1  text-sm font-semibold",children:["From Date",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{...s.getFieldProps("fromDate"),type:"date",className:"form-control block w-full px-1 py-1.5 text-sm md:text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.fromDate&&s.errors.fromDate?s.errors.fromDate:null})]}),e.jsxs("div",{className:"form-group mb-1 md:mb-2 col-span-4 md:col-span-3 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1  text-sm font-semibold",children:["To Date",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{...s.getFieldProps("toDate"),type:"date",className:"form-control block w-full px-1 py-1.5 text-sm md:text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.toDate&&s.errors.toDate?s.errors.toDate:null})]}),e.jsxs("div",{className:"form-group mb-1 md:mb-2 col-span-4 md:col-span-3 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1  text-sm font-semibold",children:["Module",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...s.getFieldProps("moduleId"),value:s.values.moduleId,onChange:s.handleChange,className:"form-control block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[e.jsx("option",{value:"1",children:"Property"}),e.jsx("option",{value:"2",children:"Water"}),e.jsx("option",{value:"3",children:"Trade"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.moduleId&&s.errors.moduleId?s.errors.moduleId:null})]}),e.jsxs("div",{className:"form-group mb-1 md:mb-2 col-span-4 md:col-span-3 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1  text-sm font-semibold",children:["Payment Mode",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...s.getFieldProps("paymentMode"),className:"form-control block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"})]})]}),e.jsxs("div",{className:"form-group mb-1 md:mb-2 col-span-4 md:col-span-3 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1  text-sm font-semibold",children:"Verfication Type"}),e.jsxs("select",{...s.getFieldProps("verificationType"),className:"form-control block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[e.jsx("option",{children:"All"}),e.jsx("option",{value:"clear",children:"Clear"}),e.jsx("option",{value:"bounce",children:"Bounce"}),e.jsx("option",{value:"pending",children:"Pending"})]})]}),e.jsxs("div",{className:"form-group mb-1 md:mb-2 col-span-4 md:col-span-3 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1  text-sm font-semibold",children:"Cheque/DD no."}),e.jsx("input",{...s.getFieldProps("cheque_dd_no"),type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.cheque_dd_no&&s.errors.cheque_dd_no?s.errors.cheque_dd_no:null})]}),e.jsx("div",{className:"form-group mb-1 md:mb-2 col-span-4 md:col-span-3 md:px-4",children:e.jsx("button",{type:"submit",className:"px-10 text-base py-1.5 mt-7 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 rounded-md hover:shadow-lg",children:"Search"})})]})}),e.jsx("div",{className:"border-b mx-10 my-5"}),e.jsx("div",{className:"p-5",children:(g==null?void 0:g.length)>0?e.jsx("div",{className:"bg-white p-4",children:e.jsx(ae,{columns:G,dataList:g})}):e.jsx("p",{className:"text-center font-semibold",children:" No Filter data Found!"})}),e.jsx(q,{isOpen:I,onRequestClose:f,style:te,contentLabel:"Example Modal",children:e.jsxs("div",{className:"bg-sky-200 rounded-lg shadow-xl border-2 border-gray-50 sm:w-[50vw] w-[100vw] p-4 text-sm",children:[e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center mb-1",children:[e.jsx("div",{className:"col-span-6",children:"Cheque No."}),e.jsx("div",{className:"col-span-6 font-semibold",children:t(c==null?void 0:c.cheque_no)})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center mb-1",children:[e.jsx("div",{className:"col-span-6",children:"Cheque Date"}),e.jsx("div",{className:"col-span-6 font-semibold",children:t(c==null?void 0:c.cheque_date)})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center mb-1",children:[e.jsx("div",{className:"col-span-6",children:"Bank Name"}),e.jsx("div",{className:"col-span-6 font-semibold",children:t(c==null?void 0:c.bank_name)})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center mb-1",children:[e.jsx("div",{className:"col-span-6",children:"Branch Name"}),e.jsx("div",{className:"col-span-6 font-semibold",children:t(c==null?void 0:c.branch_name)})]})]}),e.jsxs("form",{onSubmit:o.handleSubmit,onChange:o.handleChange,className:"grid-cols-12 grid gap-y-2 sm:gap-x-10 mt-4",children:[e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center",children:[e.jsx("label",{className:"col-span-6 inline-block mb-1  text-sm font-semibold",children:"Status"}),e.jsxs("span",{className:"col-span-6",children:[e.jsxs("select",{name:"clearStatus",onChange:o.handleChange,value:o.values.clearStatus,className:"form-control block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[e.jsx("option",{value:"",children:"--select--"}),e.jsx("option",{value:"bounce",children:"Bounce"}),e.jsx("option",{value:"clear",children:"Clear"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.clearStatus&&o.errors.clearStatus?o.errors.clearStatus:null})]})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center",children:[e.jsx("label",{className:"col-span-6 inline-block mb-1  text-sm font-semibold",children:"Clearance Date"}),e.jsxs("span",{className:"col-span-6",children:[e.jsx("input",{onChange:o.handleChange,value:o.values.clearanceDate,name:"clearanceDate",type:"date",className:"w-full form-control block w-fullpx-1 py-1.5 px-2 text-sm md:text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.clearanceDate&&o.errors.clearanceDate?o.errors.clearanceDate:null})]})]}),o.values.clearStatus=="bounce"&&e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center",children:[e.jsx("label",{className:"col-span-6 inline-block mb-1  text-sm font-semibold",children:"Reason"}),e.jsxs("span",{className:"col-span-6",children:[e.jsxs("select",{onChange:o.handleChange,value:o.values.reason,name:"reason",className:"form-control block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[e.jsx("option",{value:"",children:"--select--"}),e.jsx("option",{value:"Insufficient funds",children:"Insufficient funds"}),e.jsx("option",{value:"Irregular signature",children:"Irregular signature"}),e.jsx("option",{value:"Stale and post dated cheque",children:"Stale and post dated cheque"}),e.jsx("option",{value:"Alterations",children:"Alterations"}),e.jsx("option",{value:"Frozen account",children:"Frozen account"}),e.jsx("option",{value:"other",children:"Other"})]}),e.jsx("span",{className:"text-red-600  text-xs",children:o.touched.reason&&o.errors.reason?o.errors.reason:null})]})]}),o.values.clearStatus=="bounce"&&e.jsxs("div",{className:"col-span-12 sm:col-span-6 grid grid-cols-12 items-center",children:[e.jsx("label",{className:"col-span-6 inline-block mb-1  text-sm font-semibold",children:"Cancelation Charge"}),e.jsxs("span",{className:"col-span-6",children:[e.jsx("input",{onChange:o.handleChange,value:o.values.charge,name:"charge",type:"text",className:"form-control block w-full px-3 py-1.5 text-base font-normal  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus: focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer"}),e.jsx("span",{className:"text-red-600  text-xs",children:o.touched.charge&&o.errors.charge?o.errors.charge:null})]})]}),e.jsxs("div",{className:"col-span-12 w-full flex justify-between mt-4",children:[e.jsx("div",{onClick:f,className:"w-max cursor-pointer text-center bg-red-500 text-white px-4 py-1 rounded-md shadow-lg transition ease-in-out hover:bg-red-700",children:"Close"}),e.jsx("button",{type:"submit",className:"text-center bg-blue-500 text-white px-4 py-1 rounded-md shadow-lg transition ease-in-out hover:bg-blue-700",children:"Submit"})]})]})]})}),e.jsx("div",{className:"h-[20vh]"})]})}export{me as default};
