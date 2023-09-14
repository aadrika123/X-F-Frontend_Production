import{r as i,_ as Re,u as Pe,c as De,a as _e,be as b,k as Se,l as Ae,m as j,cA as Me,o as Te,A as X,N as Z,j as e,n as c,i as ke,f as N,T as Fe,bR as Ie,g as He,bP as $e}from"./index-ced44608.js";const Ee=i.lazy(()=>Re(()=>import("./index-ced44608.js").then(s=>s.d6),["assets/index-ced44608.js","assets/index-d6856991.css"])),We=()=>{var M,T,k,F,I,H,$,E,q,O,U,V,Y,z,B,W,G,Q,J;const{t:s}=Pe(),{get_MasterData:L,get_collectorList:ee,searchCollection:le,getCollectionData:qe,get_taxCollectorList:Oe,searchPropertyCollection:Ue,searchSafCollection:Ve,searchGbSafCollection:Ye}=$e(),{roles:g}=i.useContext(De),d=_e(),[ae,w]=i.useState(!1),[h,se]=i.useState(),[ze,oe]=i.useState(),[x,ne]=i.useState([]),[a,te]=i.useState(null),[ce,ie]=i.useState(0),[re,f]=i.useState(!1),[v,de]=i.useState(""),[t,y]=i.useState(null),[C,R]=i.useState(null),[P,D]=i.useState(0),me=()=>w(!0),pe=()=>w(!1),xe=()=>{};let ue=new Date().toLocaleDateString("in-IN"),_=b(ue).format("DD-MM-YYYY");const ge=["TEAM LEADER"],he=i.useMemo(()=>Array.isArray(g)&&g.some(l=>ge.includes(l)),[g]);Se(`${s("mainCollectionReportPage.useSetTitle.label")}`);const u="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",fe=Ae({fromDate:j().required("Field Required"),uptoDate:j().required("Field Required"),collType:Me().min(1,"Check atleast one").of(j().required("Array items must be non-empty strings"))}),o=Te({initialValues:{fromDate:b(new Date).format("yy-MM-DD"),uptoDate:b(new Date).format("yy-MM-DD"),collType:["property"],userId:"",wardId:"",paymentMode:""},onSubmit:l=>{console.log("values =>  ",l),y(null),ne(l==null?void 0:l.collType),R({collectionType:o.values.collType,fromDate:o.values.fromDate,uptoDate:o.values.uptoDate,wardId:o.values.wardId,user:he?o.values.userId:"tc",paymentMode:o.values.paymentMode}),D(n=>n+1)},validationSchema:fe});console.log("getting data => ",a),i.useEffect(()=>{ie(a==null?void 0:a.totalAmt)},[a,P]),i.useEffect(()=>{var l;je(),be(),de((l=o.values)==null?void 0:l.collType),R({collectionType:o.values.collType,fromDate:o.values.fromDate,uptoDate:o.values.uptoDate,wardId:o.values.wardId,user:"tc",paymentMode:o.values.paymentMode}),D(n=>n+1)},[]);const be=()=>{X.get(L,Z()).then(l=>{var n,r,m;((n=l==null?void 0:l.data)==null?void 0:n.status)==!0&&se((m=(r=l==null?void 0:l.data)==null?void 0:r.data)==null?void 0:m.ward_master)}).catch(l=>console.log("error getting master list",l))},je=()=>{X.post(ee,{},Z()).then(l=>{var n,r;((n=l==null?void 0:l.data)==null?void 0:n.status)==!0?(console.log("getting collector list => ",l),oe((r=l==null?void 0:l.data)==null?void 0:r.data)):console.log("error getting collector list => ",l),f(!1)}).catch(l=>(console.log("error getting collector list => ",l),f(!1))).finally(()=>f(!1))},Ne=l=>{y(l),console.log("view data => ",a==null?void 0:a.data[l]),me()},S=["property"],A=["saf"],we=i.useMemo(()=>Array.isArray(x)&&x.some(l=>S.includes(l)),[S]),ve=i.useMemo(()=>Array.isArray(x)&&x.some(l=>A.includes(l)),[A]),ye=(l,n)=>{n=="property"&&d("/paymentReceipt/"+encodeURIComponent(l)+"/holding"),n=="saf"&&d("/paymentReceipt/"+encodeURIComponent(l)+"/saf"),n=="gbsaf"&&d("/gb-saf-reciept/"+encodeURIComponent(l)+"/saf")},Ce=[{Header:`${s("mainCollectionReportPage.sNo.label")}`,Cell:({row:l})=>e.jsx("div",{children:(l==null?void 0:l.index)+1}),className:"w-[5%]"},{Header:`${s("mainCollectionReportPage.wardNo.label")}`,accessor:"ward_no",Cell:l=>c(l==null?void 0:l.value),className:"w-[5%]"},{Header:`${s("mainCollectionReportPage.holdingNo.label")}`,Cell:({cell:l})=>{var n,r;return e.jsx(e.Fragment,{children:c((r=(n=l==null?void 0:l.row)==null?void 0:n.original)==null?void 0:r.new_holding_no)})}},{Header:`${s("mainCollectionReportPage.safNo.label")}`,accessor:"saf_no",Cell:l=>c(l==null?void 0:l.value)},{Header:`${s("mainCollectionReportPage.ownerName.label")}`,accessor:"owner_name",Cell:l=>c(l==null?void 0:l.value),className:"w-1/3"},{Header:`${s("mainCollectionReportPage.paymentUpto.label")}`,accessor:"from_upto_fy_qtr",Cell:l=>c(l==null?void 0:l.value)},{Header:`${s("mainCollectionReportPage.tranNo.label")}`,accessor:"tran_no",Cell:l=>c(l==null?void 0:l.value)},{Header:`${s("mainCollectionReportPage.trandate.label")}`,accessor:"tran_date",Cell:l=>ke(l==null?void 0:l.value)},{Header:`${s("mainCollectionReportPage.mode.label")}`,accessor:"transaction_mode",Cell:l=>c(l==null?void 0:l.value)},{Header:`${s("mainCollectionReportPage.amount.label")}`,accessor:"amount",Cell:l=>e.jsx(e.Fragment,{children:N(l==null?void 0:l.value)})},{Header:"Action",Cell:({cell:l})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center justify-center gap-2 w-full",children:[e.jsx("button",{onClick:()=>{var n;return Ne((n=l==null?void 0:l.row)==null?void 0:n.index)},className:"px-2 py-1 rounded-md bg-indigo-500 text-white text-sm hover:bg-indigo-600",children:s("mainCollectionReportPage.view.label")}),e.jsx("button",{onClick:()=>{var n,r,m,p;return ye((r=(n=l==null?void 0:l.row)==null?void 0:n.original)==null?void 0:r.tran_no,(p=(m=l==null?void 0:l.row)==null?void 0:m.original)==null?void 0:p.type)},className:"px-2 py-1 rounded-md bg-indigo-500 text-white text-sm hover:bg-indigo-600",children:s("mainCollectionReportPage.print.label")})]})})}];return console.log("collType ",a),e.jsxs(e.Fragment,{children:[re&&e.jsx(Fe,{}),e.jsxs("form",{onChange:o.handleChange,onSubmit:o.handleSubmit,className:"mb-4 bg-white border-b",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-4 md:px-8 pt-4 text-gray-700",children:s("mainCollectionReportPage.searchCollectionReport.label")}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-4 md:px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:s("mainCollectionReportPage.collectionType.label")}),e.jsxs("div",{className:"col-span-6 flex items-center justify-evenly bg-green-100 shadow-md px-2 py-1.5 rounded-md border border-green-300 shadow-green-100",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs("label",{htmlFor:"1",children:[" ",s("mainCollectionReportPage.property.label")]}),e.jsx("input",{className:"mt-1",type:"checkbox",name:"collType",id:"1",value:"property",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"2",children:s("mainCollectionReportPage.saf.label")}),e.jsx("input",{className:"mt-1",type:"checkbox",name:"collType",id:"2",value:"saf"})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"3",children:s("mainCollectionReportPage.govsaf.label")}),e.jsx("input",{className:"mt-1",type:"checkbox",name:"collType",id:"3",value:"gbsaf"})]})]}),e.jsx("div",{className:"col-span-12 text-start",children:o.touched.collType&&o.errors.collType&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:o.errors.collType})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:s("mainCollectionReportPage.fromdate.label")}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:o.values.fromDate,id:"",className:u,defaultValue:_})}),e.jsx("div",{className:"col-span-12 text-end",children:o.touched.fromDate&&o.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:o.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:s("mainCollectionReportPage.uptodate.label")}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:o.values.uptoDate,id:"",className:u,defaultValue:_})}),e.jsx("div",{className:"col-span-12 text-end",children:o.touched.uptoDate&&o.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:o.errors.uptoDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:s("mainCollectionReportPage.wardNo.label")}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"wardId",id:"",className:u,children:[e.jsxs("option",{value:"",children:["  ",s("mainCollectionReportPage.all.label")]}),h==null?void 0:h.map(l=>e.jsx(e.Fragment,{children:e.jsx("option",{value:l==null?void 0:l.id,children:l==null?void 0:l.ward_name})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:s("mainCollectionReportPage.paymentMode.label")}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:u,children:[e.jsx("option",{value:"",children:s("mainCollectionReportPage.all.label")}),e.jsx("option",{value:"CASH",children:s("mainCollectionReportPage.cash.label")}),e.jsx("option",{value:"CHEQUE",children:s("mainCollectionReportPage.cheque.label")}),e.jsx("option",{value:"DD",children:s("mainCollectionReportPage.dd.label")}),e.jsx("option",{value:"ONLINE",children:s("mainCollectionReportPage.online.label")})]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-center",children:e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-400 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(Ie,{})}),s("mainCollectionReportPage.searchbutton.label")]})})]})]}),v!=""&&v!="gbSaf"&&((M=a==null?void 0:a.data)==null?void 0:M.length)>1&&e.jsxs("div",{className:"w-full text-end",children:[we&&e.jsx("button",{className:"font-semibold px-6 py-2 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white mr-2",onClick:()=>d("/payment-mode-wise-summary/property"),children:s("mainCollectionReportPage.paymentModeWisePropertySummary.label")}),ve&&e.jsx("button",{className:"font-semibold px-6 py-2 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white",onClick:()=>d("/payment-mode-wise-summary/saf"),children:s("mainCollectionReportPage.paymentModeWiseSAFSummary.label")})]}),C!=null&&e.jsxs("div",{className:"relative",children:[((T=a==null?void 0:a.data)==null?void 0:T.length)>1&&e.jsxs("div",{className:"absolute top-11 right-0",children:[s("mainCollectionReportPage.totalAmount.label")," ",e.jsx("span",{className:"font-semibold",children:N(ce)})]}),e.jsx(Ee,{getData:!0,allData:l=>te(l),type:"old",api:le,columns:Ce,requestBody:C,changeData:P})]}),e.jsx("div",{className:"h-[20vh]"}),e.jsx(He,{isOpen:ae,onAfterOpen:xe,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center sm:ml-10 overflow-auto",contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] mt-16 sm:h-max w-full relative border-2 border-indigo-400 bg-gray-40 px-6 py-4 h-[88vh] border-t-2 border-l-2 overflow-auto",children:[e.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-md px-2 text-xl cursor-pointer",onClick:pe,children:"×"}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-400 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-base sm:text-lg",children:s("mainCollectionReportPage.viewDetails.label")})})}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 flex-wrap items-center justify-evenly w-full relative",children:[e.jsxs("button",{className:"text-xs px-2 py-1 bg-green-400 hover:bg-green-500 rounded-md shadow-md shadow-green-100 absolute bottom-0 right-0 transition-all duration-150 ",onClick:()=>{var l,n,r,m,p,K;((l=a==null?void 0:a.data[t])==null?void 0:l.type)=="property"&&d("/holdingPropertyDetails/"+((n=a==null?void 0:a.data[t])==null?void 0:n.id)),((r=a==null?void 0:a.data[t])==null?void 0:r.type)=="saf"&&d("/propApplicationDetails/"+((m=a==null?void 0:a.data[t])==null?void 0:m.id)),((p=a==null?void 0:a.data[t])==null?void 0:p.type)=="gbsaf"&&d("/gbsaf-details/"+((K=a==null?void 0:a.data[t])==null?void 0:K.id))},children:["  ",s("mainCollectionReportPage.viewMore.label")]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.collectorName.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((k=a==null?void 0:a.data[t])==null?void 0:k.emp_name)})]}),((F=a==null?void 0:a.data[t])==null?void 0:F.type)!="property"&&e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.assesmentType.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((I=a==null?void 0:a.data[t])==null?void 0:I.assessment_type)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.wardNo.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((H=a==null?void 0:a.data[t])==null?void 0:H.ward_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.newWardNo.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c(($=a==null?void 0:a.data[t])==null?void 0:$.new_ward_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.holdingNo.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((E=a==null?void 0:a.data[t])==null?void 0:E.new_holding_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:s("mainCollectionReportPage.safNo.label")}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((q=a==null?void 0:a.data[t])==null?void 0:q.saf_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.ownerName.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((O=a==null?void 0:a.data[t])==null?void 0:O.owner_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.mobileno.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((U=a==null?void 0:a.data[t])==null?void 0:U.mobile_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.paymentUpto.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((V=a==null?void 0:a.data[t])==null?void 0:V.from_upto_fy_qtr)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.transactiondate.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((Y=a==null?void 0:a.data[t])==null?void 0:Y.tran_date)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.transactionmode.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((z=a==null?void 0:a.data[t])==null?void 0:z.transaction_mode)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.transactionNumber.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((B=a==null?void 0:a.data[t])==null?void 0:B.tran_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.transactionAmount.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:N((W=a==null?void 0:a.data[t])==null?void 0:W.amount)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.chequeNo.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((G=a==null?void 0:a.data[t])==null?void 0:G.cheque_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.bankname.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((Q=a==null?void 0:a.data[t])==null?void 0:Q.bank_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.branchName.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:c((J=a==null?void 0:a.data[t])==null?void 0:J.branch_name)})]})]})]})})]})};export{We as default};
