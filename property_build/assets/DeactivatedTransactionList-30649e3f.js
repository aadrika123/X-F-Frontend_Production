import{r as s,_ as G,u as _,Y as J,e as K,ap as f,q as X,s as P,a as ee,w as ae,A as j,b as N,Q as I,j as e,o as te,U as le,P as se,W as r,i as ne}from"./index-025cc29f.js";import"./index-5ed69125.js";const oe=s.lazy(()=>G(()=>import("./index-025cc29f.js").then(m=>m.dq),["assets/index-025cc29f.js","assets/index-960bb152.css"])),je=()=>{s.useRef();const[m,g]=s.useState(null),[re,M]=s.useState(""),[de,L]=s.useState("");s.useState(null),s.useState(null),s.useState("");const[H,c]=s.useState(!1),[ce,b]=s.useState(!1),[ie,z]=s.useState(!1),[ue,E]=s.useState(""),[D,O]=s.useState(null);_(),s.useState(""),s.useState(null),s.useRef(),_();const{t:o}=J();K(),s.useState("null");const[h,q]=s.useState([]);let F=new Date().toLocaleDateString("in-IN"),w=f(F).format("DD-MM-YYYY");const[v,R]=s.useState([]);s.useState(!0),s.useState();const[Z,k]=s.useState(0),d="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",{collectionReportDaily:xe,searchTransaction:me,get_collectorList:W,api_newWardByZoneId:V,api_filterPropertyDetails:he,tranDeactivedList:y}=se(),S=(a,l)=>{console.log(a,l),z(a),E(l)},Y=X({fromDate:P().required("Field Required"),uptoDate:P().required("Field Required")});ee("Deactivated Transaction");const t=ae({initialValues:{fromDate:f(new Date).format("yy-MM-DD"),uptoDate:f(new Date).format("yy-MM-DD"),paymentMode:"",zoneId:"",wardId:"",userId:"",transactionNo:"",tranType:""},onSubmit:a=>{p(),O(a),k(l=>l+1)},validationSchema:Y}),p=()=>{c(!0);let a={fromDate:t.values.fromDate,uptoDate:t.values.uptoDate,paymentMode:t.values.paymentMode,zoneId:t.values.zoneId,wardId:t.values.wardId,userId:t.values.userId,transactionNo:t.values.tranNo,tranType:t.values.selectedModuleOption};j.post(y,a,N()).then(l=>{var n,i,u,x,C,T,B;(n=l==null?void 0:l.data)!=null&&n.status?(g((u=(i=l==null?void 0:l.data)==null?void 0:i.data)==null?void 0:u.data),console.log("::::::Response Search::::::",(C=(x=l==null?void 0:l.data)==null?void 0:x.data)==null?void 0:C.data)):(S(!0,(T=l==null?void 0:l.data)==null?void 0:T.message),I.error((B=l==null?void 0:l.data)==null?void 0:B.message)),c(!1)}).catch(l=>{S(!0,"Oops! Something went wrong."),I.error("Oops! Something went wrong."),console.log("::::::Error Search::::::",l),c(!1)})};console.log("datalisttttt",m),s.useEffect(()=>{p()},[]);const U=a=>{c(!0),t.setFieldValue("wardId","");let l={zoneId:a};console.log("before fetch wardby old ward...",l),j.post(V,l,N()).then(function(n){console.log("wardlist by zone id list ....",n.data.data),q(n.data.data),c(!1)}).catch(function(n){console.log("errorrr.... ",n),c(!1)})},Q=a=>{c(!0),t.setFieldValue("wardId","");let l={userId:t.values.userId};j.post(W,l,N()).then(n=>{var i,u,x;((i=n==null?void 0:n.data)==null?void 0:i.status)==!0&&(R((u=n==null?void 0:n.data)==null?void 0:u.data),console.log("this is collector data",(x=n==null?void 0:n.data)==null?void 0:x.data)),b(!1)}).catch(n=>b(!1))};s.useEffect(()=>{Q()},[]);const $=[{Header:"Zone",accessor:"zone_name",Cell:({cell:a})=>e.jsxs("div",{children:[e.jsx("span",{children:a.row.original.zone_name=="A"&&"A-East Zone"}),e.jsx("span",{children:a.row.original.zone_name=="B"&&"B-West Zone"}),e.jsx("span",{children:a.row.original.zone_name=="C"&&"C-North Zone"}),e.jsx("span",{children:a.row.original.zone_name=="D"&&"D-South Zone"})]})},{Header:"Ward No.",accessor:"ward_name",Cell:a=>r(a==null?void 0:a.value)},{Header:"Holding No.",accessor:"app_no",Cell:a=>r(a==null?void 0:a.value)},{Header:"Application No.",accessor:"application_no",Cell:a=>r(a==null?void 0:a.value)},{Header:"Tran. No.",accessor:"tran_no",Cell:a=>r(a==null?void 0:a.value)},{Header:"Tran. Date",accessor:"tran_date",Cell:a=>r(a==null?void 0:a.value)},{Header:"Tran. Mode",accessor:"payment_mode",Cell:a=>r(a==null?void 0:a.value)},{Header:"Cheque/DD No.",accessor:"cheque_no",Cell:a=>r(a==null?void 0:a.value)},{Header:"Bank Name",accessor:"bank_name",Cell:a=>r(a==null?void 0:a.value)},{Header:"Branch Name",accessor:"branch_name",Cell:a=>r(a==null?void 0:a.value)},{Header:"Deactive Date",accessor:"deactive_date",Cell:a=>r(a==null?void 0:a.value)},{Header:"Deactive Reason",accessor:"reason",Cell:a=>r(a==null?void 0:a.value)},{Header:"Deactive By",accessor:"tran_deactivated_by",Cell:a=>r(a==null?void 0:a.value)},{Header:"Amount",accessor:"amount",Cell:a=>ne(a==null?void 0:a.value)}];s.useEffect(()=>{},[]);const A=a=>{let l=a.target.name,n=a.target.value;l=="zoneId"&&U(n)};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onChange:t.handleChange,onSubmit:t.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Deactivated Transaction"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[o("tranActualTaxBillPage.fromDate.label")," ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:t.values.fromDate,id:"fromDate",className:d,defaultValue:w})}),e.jsx("div",{className:"col-span-12 text-end",children:t.touched.fromDate&&t.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:t.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[o("tranActualTaxBillPage.uptoDate.label")," ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:t.values.uptoDate,id:"uptoDate",className:d,defaultValue:w})}),e.jsx("div",{className:"col-span-12 text-end",children:t.touched.uptoDate&&t.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:t.errors.uptoDate})})})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[o("tranActualTaxBillPage.zoneLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:A,className:d,children:[e.jsx("option",{value:"",children:o("tranActualTaxBillPage.AllZones.label")}),e.jsx("option",{value:"1",children:o("tranActualTaxBillPage.ZoneAEast.label")}),e.jsx("option",{value:"2",children:o("tranActualTaxBillPage.ZoneBWest.label")}),e.jsx("option",{value:"3",children:o("tranActualTaxBillPage.ZoneCNorth.label")}),e.jsx("option",{value:"4",children:o("tranActualTaxBillPage.ZoneDSouth.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:t.touched.zoneId&&t.errors.zoneId?t.errors.zoneId:null})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[o("tranActualTaxBillPage.wardNoLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:A,className:d,children:[e.jsx("option",{value:"",children:o("tranActualTaxBillPage.AllWard.label")}),h==null?void 0:h.map((a,l)=>e.jsx("option",{value:a.id,children:a.ward_name},l))]}),e.jsx("p",{className:"text-red-500 text-xs",children:t.touched.wardNo&&t.errors.wardNo?t.errors.wardNo:null})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:o("tranActualTaxBillPage.paymentMode.label")}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",onChange:t.handleChange,className:d,children:[e.jsx("option",{value:"ALL",children:o("tranActualTaxBillPage.All.label")}),e.jsx("option",{value:"CASH",children:o("tranActualTaxBillPage.Cash.label")}),e.jsx("option",{value:"CHEQUE",children:o("tranActualTaxBillPage.Cheque.label")}),e.jsx("option",{value:"DD",children:o("tranActualTaxBillPage.DD.label")}),e.jsx("option",{value:"ONLINE",children:o("tranActualTaxBillPage.Online.label")})]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:o("tranActualTaxBillPage.collectorName.label")}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:d,onChange:t.handleChange,children:[e.jsx("option",{value:"",children:o("tranActualTaxBillPage.All.label")}),v==null?void 0:v.map(a=>e.jsx(e.Fragment,{children:e.jsx("option",{value:a==null?void 0:a.id,children:e.jsx("span",{className:"capitalize",children:a==null?void 0:a.user_name})})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsxs("div",{className:"col-span-12 md:col-span-6 font-semibold",children:["Module Name",e.jsx("span",{className:"text-red-500 text-xs",children:"*"})]}),e.jsxs("select",{value:t.values.selectedModuleOption,name:"selectedModuleOption",onChange:a=>L(a.target.value),className:d,children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"Property",children:"Property"}),e.jsx("option",{value:"Water",children:"Water"}),e.jsx("option",{value:"Trade",children:"Trade"})]}),e.jsx("div",{className:"col-span-12 text-end",children:t.touched.selectedModuleOption&&t.errors.selectedModuleOption&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:t.errors.selectedModuleOption})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsxs("div",{className:"col-span-12 md:col-span-6 font-semibold",children:["Transaction No.",e.jsx("span",{className:"text-red-500 text-xs",children:"*"})]}),e.jsx("div",{className:"col-span-12 md:col-span-6",children:e.jsx("input",{type:"text",value:t.values.tranNo,name:"tranNo",tranNo:a=>M(a.target.value),id:"",className:d})}),e.jsx("div",{className:"col-span-12 text-end",children:t.touched.tranNo&&t.errors.tranNo&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:t.errors.tranNo})})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:H?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-start items-end",children:e.jsx(te,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(le,{})})," ",o("tranActualTaxBillPage.searchLabel.label")]})})]})]}),e.jsx("div",{className:"mt-10",children:D!==null?e.jsx(oe,{getData:!0,allData:a=>g(a),type:"old",api:y,columns:$,requestBody:D,changeData:Z}):e.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 pl-4 pr-16 py-3 text-center rounded relative mt-2",children:e.jsx("span",{className:"block sm:inline",children:"No any transaction found today."})})})]})};export{je as default};
