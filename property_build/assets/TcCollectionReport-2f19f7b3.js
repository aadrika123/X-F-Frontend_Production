import{r as c,_ as Ce,Y as Pe,J as Re,e as De,au as b,a as _e,q as Ae,s as j,a5 as Te,w as Ie,A as K,b as X,j as e,n as r,ae as Se,i as N,L as Me,U as ke,ag as Fe,P as He}from"./index-3a3e7484.js";const $e=c.lazy(()=>Ce(()=>import("./index-3a3e7484.js").then(s=>s.e7),["assets/index-3a3e7484.js","assets/index-c50603d9.css"])),Ye=()=>{var S,M,k,F,H,$,q,z,B,E,O,U,W,V,Z,Y,G,J;const{t:s}=Pe(),{get_MasterData:qe,get_collectorList:L,searchCollectionUserWise:ee,searchCollection:ze,getCollectionData:Be,get_taxCollectorList:Ee,searchPropertyCollection:Oe,searchSafCollection:Ue,searchGbSafCollection:We}=He(),{roles:g}=c.useContext(Re),d=De(),[le,w]=c.useState(!1),[f,ae]=c.useState(),[Ve,se]=c.useState(),[h,ne]=c.useState([]),[a,te]=c.useState(null),[oe,re]=c.useState(0),[ce,m]=c.useState(!1),[v,ie]=c.useState(""),[o,y]=c.useState(null),[C,P]=c.useState(null),[R,D]=c.useState(0),de=()=>w(!0),me=()=>w(!1),ue=()=>{};let xe=new Date().toLocaleDateString("in-IN"),_=b(xe).format("DD-MM-YYYY");const pe=["TEAM LEADER"],he=c.useMemo(()=>Array.isArray(g)&&g.some(l=>pe.includes(l)),[g]);_e(`${s("mainCollectionReportPage.useSetTitle.label")}`);const u="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",ge=Ae({fromDate:j().required("Field Required"),uptoDate:j().required("Field Required"),collType:Te().min(1,"Check atleast one").of(j().required("Array items must be non-empty strings"))}),n=Ie({initialValues:{fromDate:b(new Date).format("yy-MM-DD"),uptoDate:b(new Date).format("yy-MM-DD"),collType:["property"],userId:"",wardId:"",zoneId:"",paymentMode:""},onSubmit:l=>{y(null),ne(l==null?void 0:l.collType),P({collectionType:n.values.collType,fromDate:n.values.fromDate,uptoDate:n.values.uptoDate,wardId:n.values.wardId,zoneId:n.values.zoneId,user:he?n.values.userId:"tc",paymentMode:n.values.paymentMode}),D(t=>t+1)},validationSchema:ge});c.useEffect(()=>{re(a==null?void 0:a.totalAmt)},[a,R]),c.useEffect(()=>{var l;be(),ie((l=n.values)==null?void 0:l.collType),P({collectionType:n.values.collType,fromDate:n.values.fromDate,uptoDate:n.values.uptoDate,wardId:n.values.wardId,zoneId:n.values.zoneId,user:"tc",paymentMode:n.values.paymentMode}),D(t=>t+1)},[]);const fe=l=>{m(!0),n.setFieldValue("wardId","");let t={zoneId:l};K.post(api_newWardByZoneId,t,X()).then(function(i){ae(i.data.data),m(!1)}).catch(function(i){m(!1)})},A=l=>{let t=l.target.name,i=l.target.value;t=="zoneId"&&fe(i)},be=()=>{K.post(L,{},X()).then(l=>{var t,i;((t=l==null?void 0:l.data)==null?void 0:t.status)==!0&&se((i=l==null?void 0:l.data)==null?void 0:i.data),m(!1)}).catch(l=>m(!1)).finally(()=>m(!1))},je=l=>{y(l),de()},T=["property"],I=["saf"],Ne=c.useMemo(()=>Array.isArray(h)&&h.some(l=>T.includes(l)),[T]),we=c.useMemo(()=>Array.isArray(h)&&h.some(l=>I.includes(l)),[I]),ve=(l,t)=>{t=="property"&&d("/paymentReceipt/"+encodeURIComponent(l)+"/holding"),t=="saf"&&d("/paymentReceipt/"+encodeURIComponent(l)+"/saf"),t=="gbsaf"&&d("/gb-saf-reciept/"+encodeURIComponent(l)+"/saf")},ye=[{Header:`${s("mainCollectionReportPage.sNo.label")}`,Cell:({row:l})=>e.jsx("div",{children:(l==null?void 0:l.index)+1}),className:"w-[5%]"},{Header:`${s("mainCollectionReportPage.wardNo.label")}`,accessor:"ward_no",Cell:l=>r(l==null?void 0:l.value),className:"w-[5%]"},{Header:`${s("mainCollectionReportPage.holdingNo.label")}`,Cell:({cell:l})=>{var t,i;return e.jsx(e.Fragment,{children:r((i=(t=l==null?void 0:l.row)==null?void 0:t.original)==null?void 0:i.holding_no)})}},{Header:`${s("mainCollectionReportPage.safNo.label")}`,accessor:"saf_no",Cell:l=>r(l==null?void 0:l.value)},{Header:`${s("mainCollectionReportPage.ownerName.label")}`,accessor:"owner_name",Cell:l=>r(l==null?void 0:l.value),className:"w-1/3"},{Header:`${s("mainCollectionReportPage.paymentUpto.label")}`,accessor:"from_upto_fy_qtr",Cell:l=>r(l==null?void 0:l.value)},{Header:`${s("mainCollectionReportPage.tranNo.label")}`,accessor:"tran_no",Cell:l=>r(l==null?void 0:l.value)},{Header:`${s("mainCollectionReportPage.trandate.label")}`,accessor:"tran_date",Cell:l=>Se(l==null?void 0:l.value)},{Header:`${s("mainCollectionReportPage.mode.label")}`,accessor:"transaction_mode",Cell:l=>r(l==null?void 0:l.value)},{Header:`${s("mainCollectionReportPage.amount.label")}`,accessor:"amount",Cell:l=>e.jsx(e.Fragment,{children:N(l==null?void 0:l.value)})},{Header:`${s("mainCollectionReportPage.collectorName.label")}`,accessor:"emp_name",Cell:l=>e.jsx(e.Fragment,{children:r(l==null?void 0:l.value)})},{Header:"Action",Cell:({cell:l})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center justify-center gap-2 w-full",children:[e.jsx("button",{onClick:()=>{var t;return je((t=l==null?void 0:l.row)==null?void 0:t.index)},className:"px-2 py-1 rounded-md bg-indigo-500 text-white text-sm hover:bg-indigo-600",children:s("mainCollectionReportPage.view.label")}),e.jsx("button",{onClick:()=>{var t,i,x,p;return ve((i=(t=l==null?void 0:l.row)==null?void 0:t.original)==null?void 0:i.tran_no,(p=(x=l==null?void 0:l.row)==null?void 0:x.original)==null?void 0:p.type)},className:"px-2 py-1 rounded-md bg-indigo-500 text-white text-sm hover:bg-indigo-600",children:s("mainCollectionReportPage.print.label")})]})})}];return e.jsxs(e.Fragment,{children:[ce&&e.jsx(Me,{}),e.jsxs("form",{onChange:n.handleChange,onSubmit:n.handleSubmit,className:"mb-4 bg-white border-b",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-4 md:px-8 pt-4 text-gray-700",children:s("mainCollectionReportPage.searchCollectionReport.label")}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-4 md:px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:s("mainCollectionReportPage.collectionType.label")}),e.jsxs("div",{className:"col-span-6 flex items-center justify-evenly bg-green-100 shadow-md px-2 py-1.5 rounded-md border border-green-300 shadow-green-100",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs("label",{htmlFor:"1",children:[" ",s("mainCollectionReportPage.property.label")]}),e.jsx("input",{className:"",type:"checkbox",name:"collType",id:"1",value:"property",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"2",children:s("mainCollectionReportPage.saf.label")}),e.jsx("input",{className:"",type:"checkbox",name:"collType",id:"2",value:"saf"})]})]}),e.jsx("div",{className:"col-span-12 text-start",children:n.touched.collType&&n.errors.collType&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:n.errors.collType})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:s("mainCollectionReportPage.fromdate.label")}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:n.values.fromDate,id:"",className:u,defaultValue:_})}),e.jsx("div",{className:"col-span-12 text-end",children:n.touched.fromDate&&n.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:n.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:s("mainCollectionReportPage.uptodate.label")}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:n.values.uptoDate,id:"",className:u,defaultValue:_})}),e.jsx("div",{className:"col-span-12 text-end",children:n.touched.uptoDate&&n.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:n.errors.uptoDate})})})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[s("tranActualTaxBillPage.zoneLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:A,className:u,children:[e.jsx("option",{value:"",children:s("tranActualTaxBillPage.AllZones.label")}),e.jsx("option",{value:"1",children:s("tranActualTaxBillPage.ZoneAEast.label")}),e.jsx("option",{value:"2",children:s("tranActualTaxBillPage.ZoneBWest.label")}),e.jsx("option",{value:"3",children:s("tranActualTaxBillPage.ZoneCNorth.label")}),e.jsx("option",{value:"4",children:s("tranActualTaxBillPage.ZoneDSouth.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:n.touched.zoneId&&n.errors.zoneId?n.errors.zoneId:null})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[s("tranActualTaxBillPage.wardNoLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:A,className:u,children:[e.jsx("option",{value:"",children:s("tranActualTaxBillPage.AllWard.label")}),f==null?void 0:f.map((l,t)=>e.jsx("option",{value:l.id,children:l.ward_name},t))]}),e.jsx("p",{className:"text-red-500 text-xs",children:n.touched.wardNo&&n.errors.wardNo?n.errors.wardNo:null})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:s("mainCollectionReportPage.paymentMode.label")}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:u,children:[e.jsx("option",{value:"",children:s("mainCollectionReportPage.all.label")}),e.jsx("option",{value:"CASH",children:s("mainCollectionReportPage.cash.label")}),e.jsx("option",{value:"CHEQUE",children:s("mainCollectionReportPage.cheque.label")}),e.jsx("option",{value:"DD",children:s("mainCollectionReportPage.dd.label")}),e.jsx("option",{value:"ONLINE",children:s("mainCollectionReportPage.online.label")})]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-center",children:e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-400 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(ke,{})}),s("mainCollectionReportPage.searchbutton.label")]})})]})]}),v!=""&&v!="gbSaf"&&((S=a==null?void 0:a.data)==null?void 0:S.length)>1&&e.jsxs("div",{className:"w-full text-end",children:[Ne&&e.jsx("button",{className:"font-semibold px-6 py-2 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white mr-2",onClick:()=>d("/payment-mode-wise-summary/property"),children:s("mainCollectionReportPage.paymentModeWisePropertySummary.label")}),we&&e.jsx("button",{className:"font-semibold px-6 py-2 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white",onClick:()=>d("/payment-mode-wise-summary/saf"),children:s("mainCollectionReportPage.paymentModeWiseSAFSummary.label")})]}),C!=null&&e.jsxs("div",{className:"relative",children:[((M=a==null?void 0:a.data)==null?void 0:M.length)>1&&e.jsxs("div",{className:"absolute top-11 right-0",children:[s("mainCollectionReportPage.totalAmount.label")," ",e.jsx("span",{className:"font-semibold",children:N(oe)})]}),e.jsx($e,{getData:!0,allData:l=>te(l),type:"old",api:ee,columns:ye,requestBody:C,changeData:R})]}),e.jsx("div",{className:"h-[20vh]"}),e.jsx(Fe,{isOpen:le,onAfterOpen:ue,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center sm:ml-10 overflow-auto",contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] mt-16 sm:h-max w-full relative border-2 border-indigo-400 bg-gray-40 px-6 py-4 h-[88vh] border-t-2 border-l-2 overflow-auto",children:[e.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-md px-2 text-xl cursor-pointer",onClick:me,children:"×"}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-400 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-base sm:text-lg",children:s("mainCollectionReportPage.viewDetails.label")})})}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 flex-wrap items-center justify-evenly w-full relative",children:[e.jsxs("button",{className:"text-xs px-2 py-1 bg-green-400 hover:bg-green-500 rounded-md shadow-md shadow-green-100 absolute bottom-0 right-0 transition-all duration-150 ",onClick:()=>{var l,t,i,x,p,Q;((l=a==null?void 0:a.data[o])==null?void 0:l.type)=="property"&&d("/holdingPropertyDetails/"+((t=a==null?void 0:a.data[o])==null?void 0:t.id)),((i=a==null?void 0:a.data[o])==null?void 0:i.type)=="saf"&&d("/propApplicationDetails/"+((x=a==null?void 0:a.data[o])==null?void 0:x.id)),((p=a==null?void 0:a.data[o])==null?void 0:p.type)=="gbsaf"&&d("/gbsaf-details/"+((Q=a==null?void 0:a.data[o])==null?void 0:Q.id))},children:["  ",s("mainCollectionReportPage.viewMore.label")]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.collectorName.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:r((k=a==null?void 0:a.data[o])==null?void 0:k.emp_name)})]}),((F=a==null?void 0:a.data[o])==null?void 0:F.type)!="property"&&e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.assesmentType.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:r((H=a==null?void 0:a.data[o])==null?void 0:H.assessment_type)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.wardNo.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:r(($=a==null?void 0:a.data[o])==null?void 0:$.ward_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.holdingNo.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:r((q=a==null?void 0:a.data[o])==null?void 0:q.holding_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:s("mainCollectionReportPage.safNo.label")}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:r((z=a==null?void 0:a.data[o])==null?void 0:z.saf_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.ownerName.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:r((B=a==null?void 0:a.data[o])==null?void 0:B.owner_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.mobileno.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:r((E=a==null?void 0:a.data[o])==null?void 0:E.mobile_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.paymentUpto.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:r((O=a==null?void 0:a.data[o])==null?void 0:O.from_upto_fy_qtr)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.transactiondate.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:r((U=a==null?void 0:a.data[o])==null?void 0:U.tran_date)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.transactionmode.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:r((W=a==null?void 0:a.data[o])==null?void 0:W.transaction_mode)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.transactionNumber.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:r((V=a==null?void 0:a.data[o])==null?void 0:V.tran_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.transactionAmount.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:N((Z=a==null?void 0:a.data[o])==null?void 0:Z.amount)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.chequeNo.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:r((Y=a==null?void 0:a.data[o])==null?void 0:Y.cheque_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.bankname.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:r((G=a==null?void 0:a.data[o])==null?void 0:G.bank_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsxs("span",{className:"col-span-6 items-center",children:[s("mainCollectionReportPage.branchName.label")," "]}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:r((J=a==null?void 0:a.data[o])==null?void 0:J.branch_name)})]})]})]})})]})};export{Ye as default};
