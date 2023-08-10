import{r as c,_ as be,a as ye,bf as g,k as De,l as _e,m as j,cz as Ce,o as Se,A as Z,O as L,j as e,B as Ae,bS as Me,f as N,g as Te,n as t,bQ as Fe,i as ke}from"./index-c815f2b8.js";const Ie=c.lazy(()=>be(()=>import("./index-c815f2b8.js").then(u=>u.d3),["assets/index-c815f2b8.js","assets/index-c427f174.css"])),qe=()=>{var T,F,k,I,H,P,q,O,E,R,V,B,W,z,U,Y,$,Q,G,J;const{get_MasterData:u,searchCollection:ee,get_taxCollectorList:He,get_collectorList:se}=Fe(),i=ye(),[ae,w]=c.useState(!1),[h,le]=c.useState(),[p,ne]=c.useState(),[x,te]=c.useState([]),[s,oe]=c.useState(null),[ce,re]=c.useState(0),[ie,f]=c.useState(!1),[v,de]=c.useState(""),[n,b]=c.useState(null),[y,D]=c.useState(null),[_,C]=c.useState(0),me=()=>w(!0),xe=()=>w(!1),ue=()=>{};let he=new Date().toLocaleDateString("in-IN"),S=g(he).format("DD-MM-YYYY");De("Collection Report");const d="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",pe=_e({fromDate:j().required("Field Required"),uptoDate:j().required("Field Required"),collType:Ce().min(1,"Check atleast one").of(j().required("Array items must be non-empty strings"))}),l=Se({initialValues:{fromDate:g(new Date).format("yy-MM-DD"),uptoDate:g(new Date).format("yy-MM-DD"),collType:["property"],wardId:"",userId:"",paymentMode:""},onSubmit:a=>{console.log("values =>  ",a),b(null),te(a==null?void 0:a.collType),D({collectionType:l.values.collType,fromDate:l.values.fromDate,uptoDate:l.values.uptoDate,wardId:l.values.wardId,userId:l.values.userId,paymentMode:l.values.paymentMode}),C(o=>o+1)},validationSchema:pe});console.log("getting data => ",s),c.useEffect(()=>{re(s==null?void 0:s.totalAmt)},[s,_]),c.useEffect(()=>{var a;ge(),fe(),de((a=l.values)==null?void 0:a.collType),D({collectionType:l.values.collType,fromDate:l.values.fromDate,uptoDate:l.values.uptoDate,wardId:l.values.wardId,userId:l.values.userId,paymentMode:l.values.paymentMode}),C(o=>o+1)},[]);const fe=()=>{Z.get(u,L()).then(a=>{var o,r,m;((o=a==null?void 0:a.data)==null?void 0:o.status)==!0&&le((m=(r=a==null?void 0:a.data)==null?void 0:r.data)==null?void 0:m.ward_master)}).catch(a=>console.log("error getting master list",a))},ge=()=>{Z.post(se,{},L()).then(a=>{var o,r;((o=a==null?void 0:a.data)==null?void 0:o.status)==!0&&ne((r=a==null?void 0:a.data)==null?void 0:r.data),f(!1)}).catch(a=>f(!1)).finally(()=>f(!1))},je=a=>{b(a),console.log("view data => ",s==null?void 0:s.data[a]),me()},A=["property"],M=["saf"],Ne=c.useMemo(()=>Array.isArray(x)&&x.some(a=>A.includes(a)),[A]),we=c.useMemo(()=>Array.isArray(x)&&x.some(a=>M.includes(a)),[M]),ve=[{Header:"S.No.",Cell:({row:a})=>e.jsx("div",{children:(a==null?void 0:a.index)+1}),className:"w-[5%]"},{Header:"Ward No.",accessor:"ward_no",Cell:a=>t(a==null?void 0:a.value),className:"w-[5%]"},{Header:"Holding No.",Cell:({cell:a})=>{var o,r;return e.jsx(e.Fragment,{children:t((r=(o=a==null?void 0:a.row)==null?void 0:o.original)==null?void 0:r.new_holding_no)})}},{Header:"SAF No.",accessor:"saf_no",Cell:a=>t(a==null?void 0:a.value)},{Header:"Owner Name",accessor:"owner_name",Cell:a=>t(a==null?void 0:a.value),className:"w-1/3"},{Header:"Payment(From/Upto)",accessor:"from_upto_fy_qtr",Cell:a=>t(a==null?void 0:a.value)},{Header:"Tran. Date",accessor:"tran_date",Cell:a=>ke(a==null?void 0:a.value)},{Header:"Amount",accessor:"amount",Cell:a=>e.jsx(e.Fragment,{children:N(a==null?void 0:a.value)})},{Header:"Action",Cell:({cell:a})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex items-center justify-center gap-2 w-full",children:e.jsx("button",{onClick:()=>{var o;return je((o=a==null?void 0:a.row)==null?void 0:o.index)},className:"px-2 py-1 rounded-md bg-indigo-500 text-white text-sm hover:bg-indigo-600",children:"View"})})})}];return console.log("collType ",s),e.jsxs(e.Fragment,{children:[ie&&e.jsx(Ae,{}),e.jsxs("form",{onChange:l.handleChange,onSubmit:l.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Collection Report"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collection Type :"}),e.jsxs("div",{className:"col-span-6 flex items-center justify-between bg-green-100 shadow-md px-2 py-1.5 rounded-md border border-green-300 shadow-green-100",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"1",children:"Property"}),e.jsx("input",{className:"mt-1",type:"checkbox",name:"collType",id:"1",value:"property",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"2",children:"SAF"}),e.jsx("input",{className:"mt-1",type:"checkbox",name:"collType",id:"2",value:"saf"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"3",children:"Gov. SAF"}),e.jsx("input",{className:"mt-1",type:"checkbox",name:"collType",id:"3",value:"gbsaf"})]})]}),e.jsx("div",{className:"col-span-12 text-start",children:l.touched.collType&&l.errors.collType&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.collType})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:l.values.fromDate,id:"",className:d,defaultValue:S})}),e.jsx("div",{className:"col-span-12 text-end",children:l.touched.fromDate&&l.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:l.values.uptoDate,id:"",className:d,defaultValue:S})}),e.jsx("div",{className:"col-span-12 text-end",children:l.touched.uptoDate&&l.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.uptoDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"wardId",id:"",className:d,children:[e.jsx("option",{value:"",children:"All"}),h==null?void 0:h.map(a=>e.jsx(e.Fragment,{children:e.jsx("option",{value:a==null?void 0:a.id,children:a==null?void 0:a.ward_name})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector List :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:d,children:[e.jsx("option",{value:"",children:"All"}),p==null?void 0:p.map(a=>e.jsx(e.Fragment,{children:e.jsx("option",{value:a==null?void 0:a.id,children:e.jsx("span",{className:"capitalize",children:a==null?void 0:a.user_name})})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:d,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-center",children:e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-400 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(Me,{})}),"Search"]})})]})]}),v!=""&&v!="gbSaf"&&((T=s==null?void 0:s.data)==null?void 0:T.length)>1&&e.jsxs("div",{className:"w-full text-end",children:[Ne&&e.jsx("button",{className:"font-semibold px-6 py-2 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white mr-2",onClick:()=>i("/payment-mode-wise-summary/property"),children:"Payment Mode Wise Property Summary"}),we&&e.jsx("button",{className:"font-semibold px-6 py-2 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white",onClick:()=>i("/payment-mode-wise-summary/saf"),children:"Payment Mode Wise SAF Summary"})]}),y!=null&&e.jsxs("div",{className:"relative",children:[((F=s==null?void 0:s.data)==null?void 0:F.length)>1&&e.jsxs("div",{className:"absolute top-11 right-0",children:["Total Amount : ",e.jsx("span",{className:"font-semibold",children:N(ce)})]}),e.jsx(Ie,{getData:!0,allData:a=>oe(a),api:ee,columns:ve,requestBody:y,changeData:_})]}),e.jsx("div",{className:"h-[20vh]"}),e.jsx(Te,{isOpen:ae,onAfterOpen:ue,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center sm:ml-10 overflow-auto",contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] mt-16 sm:h-max w-full relative border-2 border-indigo-400 bg-gray-40 px-6 py-4 h-[88vh] border-t-2 border-l-2 overflow-auto",children:[e.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-md px-2 text-xl cursor-pointer",onClick:xe,children:"×"}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-400 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-base sm:text-lg",children:"View Details"})})}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 flex-wrap items-center justify-evenly w-full relative",children:[e.jsx("button",{className:"text-xs px-2 py-1 bg-green-400 hover:bg-green-500 rounded-md shadow-md shadow-green-100 absolute bottom-0 right-0 transition-all duration-150 ",onClick:()=>{var a,o,r,m,K,X;((a=s==null?void 0:s.data[n])==null?void 0:a.type)=="property"&&i("/holdingPropertyDetails/"+((o=s==null?void 0:s.data[n])==null?void 0:o.id)),((r=s==null?void 0:s.data[n])==null?void 0:r.type)=="saf"&&i("/propApplicationDetails/"+((m=s==null?void 0:s.data[n])==null?void 0:m.id)),((K=s==null?void 0:s.data[n])==null?void 0:K.type)=="gbsaf"&&i("/gbsaf-details/"+((X=s==null?void 0:s.data[n])==null?void 0:X.id))},children:"View More"}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Collector Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((k=s==null?void 0:s.data[n])==null?void 0:k.emp_name)})]}),((I=s==null?void 0:s.data[n])==null?void 0:I.type)!="property"&&e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Assesment Type : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((H=s==null?void 0:s.data[n])==null?void 0:H.assessment_type)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Ward No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((P=s==null?void 0:s.data[n])==null?void 0:P.ward_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"New Ward No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((q=s==null?void 0:s.data[n])==null?void 0:q.new_ward_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Holding No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((O=s==null?void 0:s.data[n])==null?void 0:O.new_holding_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"SAF No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((E=s==null?void 0:s.data[n])==null?void 0:E.saf_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Owner Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((R=s==null?void 0:s.data[n])==null?void 0:R.owner_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Mobile No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((V=s==null?void 0:s.data[n])==null?void 0:V.mobile_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Payment (From-Upto) : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((B=s==null?void 0:s.data[n])==null?void 0:B.from_upto_fy_qtr)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((W=s==null?void 0:s.data[n])==null?void 0:W.tran_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Date : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((z=s==null?void 0:s.data[n])==null?void 0:z.tran_date)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Mode : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((U=s==null?void 0:s.data[n])==null?void 0:U.transaction_mode)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Amount : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:N((Y=s==null?void 0:s.data[n])==null?void 0:Y.amount)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Cheque No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t(($=s==null?void 0:s.data[n])==null?void 0:$.cheque_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Bank Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((Q=s==null?void 0:s.data[n])==null?void 0:Q.bank_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Branch Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((G=s==null?void 0:s.data[n])==null?void 0:G.branch_name)})]}),((J=s==null?void 0:s.data[n])==null?void 0:J.type)!="property"&&e.jsx("div",{className:"w-full sm:w-[40%] grid grid-cols-12"})]})]})})]})};export{qe as default};
