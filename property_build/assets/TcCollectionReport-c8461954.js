import{r as i,_ as Ce,u as Re,c as Pe,a as De,be as b,k as _e,l as Se,m as j,cG as Me,o as Ae,A as K,N as X,j as e,n as c,i as Te,f as N,T as ke,bR as Fe,g as Ie,bP as He}from"./index-3115060c.js";const $e=i.lazy(()=>Ce(()=>import("./index-3115060c.js").then(s=>s.dc),["assets/index-3115060c.js","assets/index-0332f5e1.css"])),We=()=>{var A,T,k,F,I,H,$,E,q,O,U,V,Y,z,B,W,G,Q;const{t:s}=Re(),{get_MasterData:Z,get_collectorList:L,searchCollectionUserWise:ee,searchCollection:Ee,getCollectionData:qe,get_taxCollectorList:Oe,searchPropertyCollection:Ue,searchSafCollection:Ve,searchGbSafCollection:Ye}=He(),{roles:g}=i.useContext(Pe),d=De(),[le,w]=i.useState(!1),[h,ae]=i.useState(),[ze,se]=i.useState(),[u,oe]=i.useState([]),[a,ne]=i.useState(null),[te,ce]=i.useState(0),[ie,f]=i.useState(!1),[v,re]=i.useState(""),[t,y]=i.useState(null),[C,R]=i.useState(null),[P,D]=i.useState(0),de=()=>w(!0),me=()=>w(!1),pe=()=>{};let ue=new Date().toLocaleDateString("in-IN"),_=b(ue).format("DD-MM-YYYY");const xe=["TEAM LEADER"],ge=i.useMemo(()=>Array.isArray(g)&&g.some(l=>xe.includes(l)),[g]);_e(`${s("mainCollectionReportPage.useSetTitle.label")}`);const x="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",he=Se({fromDate:j().required("Field Required"),uptoDate:j().required("Field Required"),collType:Me().min(1,"Check atleast one").of(j().required("Array items must be non-empty strings"))}),n=Ae({initialValues:{fromDate:b(new Date).format("yy-MM-DD"),uptoDate:b(new Date).format("yy-MM-DD"),collType:["property"],userId:"",wardId:"",paymentMode:""},onSubmit:l=>{console.log("values =>  ",l),y(null),oe(l==null?void 0:l.collType),R({collectionType:n.values.collType,fromDate:n.values.fromDate,uptoDate:n.values.uptoDate,wardId:n.values.wardId,user:ge?n.values.userId:"tc",paymentMode:n.values.paymentMode}),D(o=>o+1)},validationSchema:he});console.log("getting data => ",a),i.useEffect(()=>{ce(a==null?void 0:a.totalAmt)},[a,P]),i.useEffect(()=>{var l;be(),fe(),re((l=n.values)==null?void 0:l.collType),R({collectionType:n.values.collType,fromDate:n.values.fromDate,uptoDate:n.values.uptoDate,wardId:n.values.wardId,user:"tc",paymentMode:n.values.paymentMode}),D(o=>o+1)},[]);const fe=()=>{K.get(Z,X()).then(l=>{var o,r,m;((o=l==null?void 0:l.data)==null?void 0:o.status)==!0&&ae((m=(r=l==null?void 0:l.data)==null?void 0:r.data)==null?void 0:m.ward_master)}).catch(l=>console.log("error getting master list",l))},be=()=>{K.post(L,{},X()).then(l=>{var o,r;((o=l==null?void 0:l.data)==null?void 0:o.status)==!0?(console.log("getting collector list => ",l),se((r=l==null?void 0:l.data)==null?void 0:r.data)):console.log("error getting collector list => ",l),f(!1)}).catch(l=>(console.log("error getting collector list => ",l),f(!1))).finally(()=>f(!1))},je=l=>{y(l),console.log("view data => ",a==null?void 0:a.data[l]),de()},S=["property"],M=["saf"],Ne=i.useMemo(()=>Array.isArray(u)&&u.some(l=>S.includes(l)),[S]),we=i.useMemo(()=>Array.isArray(u)&&u.some(l=>M.includes(l)),[M]),ve=(l,o)=>{o=="property"&&d("/paymentReceipt/"+encodeURIComponent(l)+"/holding"),o=="saf"&&d("/paymentReceipt/"+encodeURIComponent(l)+"/saf"),o=="gbsaf"&&d("/gb-saf-reciept/"+encodeURIComponent(l)+"/saf")},ye=[{Header:`${s("mainCollectionReportPage.sNo.label")}`,Cell:({row:l})=>e.jsx("div",{children:(l==null?void 0:l.index)+1}),className:"w-[5%]"},{Header:`${s("mainCollectionReportPage.wardNo.label")}`,accessor:"ward_no",Cell:l=>c(l==null?void 0:l.value),className:"w-[5%]"},{Header:`${s("mainCollectionReportPage.holdingNo.label")}`,Cell:({cell:l})=>{var o,r;return e.jsx(e.Fragment,{children:c((r=(o=l==null?void 0:l.row)==null?void 0:o.original)==null?void 0:r.holding_no)})}},{Header:`${s("mainCollectionReportPage.safNo.label")}`,accessor:"saf_no",Cell:l=>c(l==null?void 0:l.value)},{Header:`${s("mainCollectionReportPage.ownerName.label")}`,accessor:"owner_name",Cell:l=>c(l==null?void 0:l.value),className:"w-1/3"},{Header:`${s("mainCollectionReportPage.paymentUpto.label")}`,accessor:"from_upto_fy_qtr",Cell:l=>c(l==null?void 0:l.value)},{Header:`${s("mainCollectionReportPage.tranNo.label")}`,accessor:"tran_no",Cell:l=>c(l==null?void 0:l.value)},{Header:`${s("mainCollectionReportPage.trandate.label")}`,accessor:"tran_date",Cell:l=>Te(l==null?void 0:l.value)},{Header:`${s("mainCollectionReportPage.mode.label")}`,accessor:"transaction_mode",Cell:l=>c(l==null?void 0:l.value)},{Header:`${s("mainCollectionReportPage.amount.label")}`,accessor:"amount",Cell:l=>e.jsx(e.Fragment,{children:N(l==null?void 0:l.value)})},{Header:`${s("mainCollectionReportPage.collectorName.label")}`,accessor:"emp_name",Cell:l=>e.jsx(e.Fragment,{children:c(l==null?void 0:l.value)})},{Header:"Action",Cell:({cell:l})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center justify-center gap-2 w-full",children:[e.jsx("button",{onClick:()=>{var o;return je((o=l==null?void 0:l.row)==null?void 0:o.index)},className:"px-2 py-1 rounded-md bg-indigo-500 text-white text-sm hover:bg-indigo-600",children:s("mainCollectionReportPage.view.label")}),e.jsx("button",{onClick:()=>{var o,r,m,p;return ve((r=(o=l==null?void 0:l.row)==null?void 0:o.original)==null?void 0:r.tran_no,(p=(m=l==null?void 0:l.row)==null?void 0:m.original)==null?void 0:p.type)},className:"px-2 py-1 rounded-md bg-indigo-500 text-white text-sm hover:bg-indigo-600",children:s("mainCollectionReportPage.print.label")})]})})}];return console.log("collType ",a),e.jsxs(e.Fragment,{children:[ie&&e.jsx(ke,{}),e.jsxs("form",{onChange:n.handleChange,onSubmit:n.handleSubmit,className:"mb-4 bg-white border-b",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-4 md:px-8 pt-4 text-gray-700",children:s("mainCollectionReportPage.searchCollectionReport.label")}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-4 md:px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:s("mainCollectionReportPage.collectionType.label")}),e.jsxs("div",{className:"col-span-6 flex items-center justify-evenly bg-green-100 shadow-md px-2 py-1.5 rounded-md border border-green-300 shadow-green-100",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs("label",{htmlFor:"1",children:[" ",s("mainCollectionReportPage.property.label")]}),e.jsx("input",{className:"",type:"checkbox",name:"collType",id:"1",value:"property",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"2",children:s("mainCollectionReportPage.saf.label")}),e.jsx("input",{className:"",type:"checkbox",name:"collType",id:"2",value:"saf"})]})]}),e.jsx("div",{className:"col-span-12 text-start",children:n.touched.collType&&n.errors.collType&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:n.errors.collType})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:s("mainCollectionReportPage.fromdate.label")}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:n.values.fromDate,id:"",className:x,defaultValue:_})}),e.jsx("div",{className:"col-span-12 text-end",children:n.touched.fromDate&&n.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:n.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:s("mainCollectionReportPage.uptodate.label")}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:n.values.uptoDate,id:"",className:x,defaultValue:_})}),e.jsx("div",{className:"col-span-12 text-end",children:n.touched.uptoDate&&n.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:n.errors.uptoDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:s("mainCollectionReportPage.wardNo.label")}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"wardId",id:"",className:x,children:[e.jsxs("option",{value:"",children:["  ",s("mainCollectionReportPage.all.label")]}),h==null?void 0:h.map((l,o)=>e.jsx(e.Fragment,{children:e.jsx("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.ward_name},o)}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:s("mainCollectionReportPage.paymentMode.label")}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:x,children:[e.jsx("option",{value:"",children:s("mainCollectionReportPage.all.label")}),e.jsx("option",{value:"CASH",children:s("mainCollectionReportPage.cash.label")}),e.jsx("option",{value:"CHEQUE",children:s("mainCollectionReportPage.cheque.label")}),e.jsx("option",{value:"DD",children:s("mainCollectionReportPage.dd.label")}),e.jsx("option",{value:"ONLINE",children:s("mainCollectionReportPage.online.label")})]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-center",children:e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-400 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(Fe,{})}),s("mainCollectionReportPage.searchbutton.label")]})})]})]}),v!=""&&v!="gbSaf"&&((A=a==null?void 0:a.data)==null?void 0:A.length)>1&&e.jsxs("div",{className:"w-full text-end",children:[Ne&&e.jsx("button",{className:"font-semibold px-6 py-2 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white mr-2",onClick:()=>d("/payment-mode-wise-summary/property"),children:s("mainCollectionReportPage.paymentModeWisePropertySummary.label")}),we&&e.jsx("button",{className:"font-semibold px-6 py-2 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white",onClick:()=>d("/payment-mode-wise-summary/saf"),children:s("mainCollectionReportPage.paymentModeWiseSAFSummary.label")})]}),C!=null&&e.jsxs("div",{className:"relative",children:[((T=a==null?void 0:a.data)==null?void 0:T.length)>1&&e.jsxs("div",{className:"absolute top-11 right-0",children:[s("mainCollectionReportPage.totalAmount.label")," ",e.jsx("span",{className:"font-semibold",children:N(te)})]}),e.jsx($e,{getData:!0,allData:l=>ne(l),type:"old",api:ee,columns:ye,requestBody:C,changeData:P})]}),e.jsx("div",{className:"h-[20vh]"}),e.jsx(Ie,{isOpen:le,onAfterOpen:pe,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center sm:ml-10 overflow-auto",contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] mt-16 sm:h-max w-full relative border-2 border-indigo-400 bg-gray-40 px-6 py-4 h-[88vh] border-t-2 border-l-2 overflow-auto",children:[e.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-md px-2 text-xl cursor-pointer",onClick:me,children:"×"}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-400 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-base sm:text-lg",children:s("mainCollectionReportPage.viewDetails.label")})})}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 flex-wrap items-center justify-evenly w-full relative",children:[e.jsxs("button",{className:"text-xs px-2 py-1 bg-green-400 hover:bg-green-500 rounded-md shadow-md shadow-green-100 absolute bottom-0 right-0 transition-all duration-150 ",onClick:()=>{var l,o,r,m,p,J;((l=a==null?void 0:a.data[t])==null?void 0:l.type)=="property"&&d("/holdingPropertyDetails/"+((o=a==null?void 0:a.data[t])==null?void 0:o.id)),((r=a==null?void 0:a.data[t])==null?void 0:r.type)=="saf"&&d("/propApplicationDetails/"+((m=a==null?void 0:a.data[t])==null?void 0:m.id)),((p=a==null?void 0:a.data[t])==null?void 0:p.type)=="gbsaf"&&d("/gbsaf-details/"+((J=a==null?void 0:a.data[t])==null?void 0:J.id))},children:["  ",s("mainCollectionReportPage.viewMore.label")]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.collectorName.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((k=a==null?void 0:a.data[t])==null?void 0:k.emp_name)})]}),((F=a==null?void 0:a.data[t])==null?void 0:F.type)!="property"&&e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.assesmentType.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((I=a==null?void 0:a.data[t])==null?void 0:I.assessment_type)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.wardNo.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((H=a==null?void 0:a.data[t])==null?void 0:H.ward_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.holdingNo.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c(($=a==null?void 0:a.data[t])==null?void 0:$.holding_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:s("mainCollectionReportPage.safNo.label")}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((E=a==null?void 0:a.data[t])==null?void 0:E.saf_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.ownerName.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((q=a==null?void 0:a.data[t])==null?void 0:q.owner_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.mobileno.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((O=a==null?void 0:a.data[t])==null?void 0:O.mobile_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.paymentUpto.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((U=a==null?void 0:a.data[t])==null?void 0:U.from_upto_fy_qtr)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.transactiondate.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((V=a==null?void 0:a.data[t])==null?void 0:V.tran_date)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.transactionmode.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((Y=a==null?void 0:a.data[t])==null?void 0:Y.transaction_mode)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.transactionNumber.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((z=a==null?void 0:a.data[t])==null?void 0:z.tran_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.transactionAmount.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:N((B=a==null?void 0:a.data[t])==null?void 0:B.amount)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.chequeNo.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((W=a==null?void 0:a.data[t])==null?void 0:W.cheque_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.bankname.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((G=a==null?void 0:a.data[t])==null?void 0:G.bank_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.branchName.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((Q=a==null?void 0:a.data[t])==null?void 0:Q.branch_name)})]})]})]})})]})};export{We as default};
