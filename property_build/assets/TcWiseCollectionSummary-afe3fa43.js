import{r as c,_ as ye,K as De,e as _e,ab as p,a as Ce,q as Ae,s as N,O as Te,w as Se,A as X,b as L,j as e,B as Ie,i as g,a0 as Me,n as t,P as Pe,Z as Fe,a5 as ze}from"./index-6178a477.js";import{R as He}from"./index.esm-a16a9541.js";const Be=c.lazy(()=>ye(()=>import("./index-6178a477.js").then(j=>j.c3),["assets/index-6178a477.js","assets/index-878e418f.css"])),Oe=()=>{var S,I,M,P,F,z,H,B,k,q,E,O,W,Z,R,V,U,Y,$,G;const{get_MasterData:j,searchCollection:ee,get_taxCollectorList:ke,get_collectorList:se}=Pe(),{t:d}=De(),{api_newWardByZoneId:ae}=ze(),u=_e(),[le,ne]=c.useState(!1),[h,te]=c.useState(),[f,ce]=c.useState(),[x,oe]=c.useState([]),[a,re]=c.useState(null),[de,ie]=c.useState(0),[me,i]=c.useState(!1),[w,ue]=c.useState(""),[n,xe]=c.useState(null),[v,b]=c.useState(null),[y,D]=c.useState(0),he=()=>ne(!1),fe=()=>{};let pe=new Date().toLocaleDateString("in-IN"),_=p(pe).format("DD-MM-YYYY");Ce("Tc Wise Collection Summary");const m="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",Ne=Ae({fromDate:N().required("Field Required"),uptoDate:N().required("Field Required"),collType:Te().min(1,"Check atleast one").of(N().required("Array items must be non-empty strings"))}),l=Se({initialValues:{fromDate:p(new Date).format("yy-MM-DD"),uptoDate:p(new Date).format("yy-MM-DD"),collType:["property"],wardId:"",userId:"",zoneId:"",paymentMode:""},onSubmit:s=>{console.log("values =>  ",s),xe(null),oe(s==null?void 0:s.collType),b({collectionType:l.values.collType,fromDate:l.values.fromDate,uptoDate:l.values.uptoDate,wardId:l.values.wardId,userId:l.values.userId,zoneId:l.values.zoneId,paymentMode:l.values.paymentMode}),D(o=>o+1)},validationSchema:Ne});c.useEffect(()=>{ie(a==null?void 0:a.totalAmt)},[a,y]),c.useEffect(()=>{var s;je(),ue((s=l.values)==null?void 0:s.collType),b({collectionType:l.values.collType,fromDate:l.values.fromDate,uptoDate:l.values.uptoDate,wardId:l.values.wardId,userId:l.values.userId,zoneId:l.values.zoneId,paymentMode:l.values.paymentMode}),D(o=>o+1)},[]);const ge=s=>{i(!0),l.setFieldValue("wardId","");let o={zoneId:s};X.post(ae,o,L()).then(function(r){console.log("wardlist by zone id list ....",r.data.data),te(r.data.data),i(!1)}).catch(function(r){console.log("errorrr.... ",r),i(!1)})},C=s=>{let o=s.target.name,r=s.target.value;o=="zoneId"&&ge(r)},je=()=>{X.post(se,{},L()).then(s=>{var o,r;((o=s==null?void 0:s.data)==null?void 0:o.status)==!0&&ce((r=s==null?void 0:s.data)==null?void 0:r.data),i(!1)}).catch(s=>i(!1)).finally(()=>i(!1))},A=["property"],T=["saf"],we=c.useMemo(()=>Array.isArray(x)&&x.some(s=>A.includes(s)),[A]),ve=c.useMemo(()=>Array.isArray(x)&&x.some(s=>T.includes(s)),[T]),be=[{Header:"S.No.",Cell:({row:s})=>e.jsx("div",{children:(s==null?void 0:s.index)+1}),className:"w-[5%]"},{Header:"Zone No.",accessor:"zone_name",Cell:s=>t(s==null?void 0:s.value),className:"w-[5%]"},{Header:"Ward No.",accessor:"ward_no",Cell:s=>t(s==null?void 0:s.value),className:"w-[5%]"},{Header:"Holding / SAF No.",accessor:s=>s.holding_no?s.holding_no:s.saf_no?s.saf_no:"N/A"},{Header:"Owner Name",accessor:"owner_name",Cell:s=>t(s==null?void 0:s.value),className:"w-1/3"},{Header:"Mobile No.",accessor:"mobile_no",Cell:s=>t(s==null?void 0:s.value),className:"w-1/3"},{Header:"Address",accessor:"prop_address",Cell:s=>t(s==null?void 0:s.value),className:"w-1/3"},{Header:"Payment(From/Upto)",accessor:"from_upto_fy_qtr",Cell:s=>t(s==null?void 0:s.value)},{Header:"Amount",accessor:"amount",Cell:s=>e.jsx(e.Fragment,{children:g(s==null?void 0:s.value)}),className:"w-1/3"},{Header:"Payment Mode",accessor:"transaction_mode",Cell:s=>t(s==null?void 0:s.value),className:"w-1/3"},{Header:"Cheque / NEFT / RTGS Details",accessor:"cheque_no",Cell:s=>t(s==null?void 0:s.value),className:"w-1/3"},{Header:"Collection Date",accessor:"tran_date",Cell:s=>Fe(s==null?void 0:s.value),className:"w-1/3"},{Header:"Transaction No",accessor:"tran_no",Cell:s=>t(s==null?void 0:s.value),className:"w-1/3"},{Header:"Collector Name",accessor:"emp_name",Cell:s=>e.jsx(e.Fragment,{children:s==null?void 0:s.value}),className:"w-1/3"}];return e.jsxs(e.Fragment,{children:[me&&e.jsx(Ie,{}),e.jsxs("form",{onChange:l.handleChange,onSubmit:l.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Collection Summary"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collection Type :"}),e.jsxs("div",{className:"col-span-6 flex items-center justify-start gap-4 bg-green-100 shadow-md px-2 py-1.5 rounded-md border border-green-300 shadow-green-100",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"1",children:"Property"}),e.jsx("input",{className:"",type:"checkbox",name:"collType",id:"1",value:"property",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"2",children:"SAF"}),e.jsx("input",{className:"",type:"checkbox",name:"collType",id:"2",value:"saf"})]})]}),e.jsx("div",{className:"col-span-12 text-start",children:l.touched.collType&&l.errors.collType&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.collType})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:l.values.fromDate,id:"",className:m,defaultValue:_})}),e.jsx("div",{className:"col-span-12 text-end",children:l.touched.fromDate&&l.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:l.values.uptoDate,id:"",className:m,defaultValue:_})}),e.jsx("div",{className:"col-span-12 text-end",children:l.touched.uptoDate&&l.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.uptoDate})})})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[d("tranActualTaxBillPage.zoneLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:C,className:m,children:[e.jsx("option",{value:"",children:d("tranActualTaxBillPage.AllZones.label")}),e.jsx("option",{value:"1",children:d("tranActualTaxBillPage.ZoneAEast.label")}),e.jsx("option",{value:"2",children:d("tranActualTaxBillPage.ZoneBWest.label")}),e.jsx("option",{value:"3",children:d("tranActualTaxBillPage.ZoneCNorth.label")}),e.jsx("option",{value:"4",children:d("tranActualTaxBillPage.ZoneDSouth.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.zoneId&&l.errors.zoneId?l.errors.zoneId:null})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[d("tranActualTaxBillPage.wardNoLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:C,className:m,children:[e.jsx("option",{value:"",children:d("tranActualTaxBillPage.AllWard.label")}),h==null?void 0:h.map((s,o)=>e.jsx("option",{value:s.id,children:s.ward_name},o))]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.wardNo&&l.errors.wardNo?l.errors.wardNo:null})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector List :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:m,children:[e.jsx("option",{value:"",children:"All"}),f==null?void 0:f.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.id,children:e.jsx("span",{className:"capitalize",children:s==null?void 0:s.user_name})})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:m,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-center",children:e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-400 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(He,{})}),"Search"]})})]})]}),w!=""&&w!="gbSaf"&&((S=a==null?void 0:a.data)==null?void 0:S.length)>1&&e.jsxs("div",{className:"w-full text-end",children:[we&&e.jsx("button",{className:"font-semibold px-6 py-2 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white mr-2",onClick:()=>u("/payment-mode-wise-summary/property"),children:"Payment Mode Wise Property Summary"}),ve&&e.jsx("button",{className:"font-semibold px-6 py-2 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white",onClick:()=>u("/payment-mode-wise-summary/saf"),children:"Payment Mode Wise SAF Summary"})]}),v!=null&&e.jsxs("div",{className:"relative",children:[((I=a==null?void 0:a.data)==null?void 0:I.length)>1&&e.jsxs("div",{className:"absolute top-11 right-0",children:["Total Amount : ",e.jsx("span",{className:"font-semibold",children:g(de)})]}),e.jsx(Be,{getData:!0,allData:s=>re(s),api:ee,columns:be,requestBody:v,changeData:y})]}),e.jsx("div",{className:"h-[20vh]"}),e.jsx(Me,{isOpen:le,onAfterOpen:fe,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center sm:ml-10 overflow-auto",contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] mt-16 sm:h-max w-full relative border-2 border-indigo-400 bg-gray-40 px-6 py-4 h-[88vh] border-t-2 border-l-2 overflow-auto",children:[e.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-md px-2 text-xl cursor-pointer",onClick:he,children:"×"}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-400 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-base sm:text-lg",children:"View Details"})})}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 flex-wrap items-center justify-evenly w-full relative",children:[e.jsx("button",{className:"text-xs px-2 py-1 bg-green-400 hover:bg-green-500 rounded-md shadow-md shadow-green-100 absolute bottom-0 right-0 transition-all duration-150 ",onClick:()=>{var s,o,r,K,Q,J;((s=a==null?void 0:a.data[n])==null?void 0:s.type)=="property"&&u("/holdingPropertyDetails/"+((o=a==null?void 0:a.data[n])==null?void 0:o.id)),((r=a==null?void 0:a.data[n])==null?void 0:r.type)=="saf"&&u("/propApplicationDetails/"+((K=a==null?void 0:a.data[n])==null?void 0:K.id)),((Q=a==null?void 0:a.data[n])==null?void 0:Q.type)=="gbsaf"&&u("/gbsaf-details/"+((J=a==null?void 0:a.data[n])==null?void 0:J.id))},children:"View More"}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Collector Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((M=a==null?void 0:a.data[n])==null?void 0:M.emp_name)})]}),((P=a==null?void 0:a.data[n])==null?void 0:P.type)!="property"&&e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Assesment Type : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((F=a==null?void 0:a.data[n])==null?void 0:F.assessment_type)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Zone No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((z=a==null?void 0:a.data[n])==null?void 0:z.zone_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Ward No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((H=a==null?void 0:a.data[n])==null?void 0:H.ward_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Holding No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((B=a==null?void 0:a.data[n])==null?void 0:B.holding_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"SAF No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((k=a==null?void 0:a.data[n])==null?void 0:k.saf_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Owner Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((q=a==null?void 0:a.data[n])==null?void 0:q.owner_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Mobile No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((E=a==null?void 0:a.data[n])==null?void 0:E.mobile_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Payment (From-Upto) : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((O=a==null?void 0:a.data[n])==null?void 0:O.from_upto_fy_qtr)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((W=a==null?void 0:a.data[n])==null?void 0:W.tran_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Date : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((Z=a==null?void 0:a.data[n])==null?void 0:Z.tran_date)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Mode : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((R=a==null?void 0:a.data[n])==null?void 0:R.transaction_mode)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Amount : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:g((V=a==null?void 0:a.data[n])==null?void 0:V.amount)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Cheque No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((U=a==null?void 0:a.data[n])==null?void 0:U.cheque_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Bank Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t((Y=a==null?void 0:a.data[n])==null?void 0:Y.bank_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Branch Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:t(($=a==null?void 0:a.data[n])==null?void 0:$.branch_name)})]}),((G=a==null?void 0:a.data[n])==null?void 0:G.type)!="property"&&e.jsx("div",{className:"w-full sm:w-[40%] grid grid-cols-12"})]})]})})]})};export{Oe as default};
