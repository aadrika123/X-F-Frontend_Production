import{r as c,_ as ye,Y as De,e as _e,aw as N,a as Ce,q as Ae,s as g,a5 as Te,w as Se,A as X,b as L,j as e,B as Ie,U as Me,i as j,ag as Pe,n,P as Fe,ae as He,an as Be}from"./index-89110e36.js";const ke=c.lazy(()=>ye(()=>import("./index-89110e36.js").then(p=>p.el),["assets/index-89110e36.js","assets/index-473715f5.css"])),Ee=()=>{var S,I,M,P,F,H,B,k,z,q,E,O,W,Z,V,R,U,Y,$,G;const{get_MasterData:p,searchCollection:ee,get_taxCollectorList:ze,get_collectorList:se}=Fe(),{t:d}=De(),{api_newWardByZoneId:ae}=Be(),u=_e(),[le,ne]=c.useState(!1),[h,te]=c.useState(),[f,ce]=c.useState(),[x,re]=c.useState([]),[a,oe]=c.useState(null),[de,ie]=c.useState(0),[me,i]=c.useState(!1),[w,ue]=c.useState(""),[t,xe]=c.useState(null),[v,b]=c.useState(null),[y,D]=c.useState(0),he=()=>ne(!1),fe=()=>{};let Ne=new Date().toLocaleDateString("in-IN"),_=N(Ne).format("DD-MM-YYYY");Ce("Tc Wise Collection Summary");const m="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",ge=Ae({fromDate:g().required("Field Required"),uptoDate:g().required("Field Required"),collType:Te().min(1,"Check atleast one").of(g().required("Array items must be non-empty strings"))}),l=Se({initialValues:{fromDate:N(new Date).format("yy-MM-DD"),uptoDate:N(new Date).format("yy-MM-DD"),collType:["property"],wardId:"",userId:"",zoneId:"",paymentMode:""},onSubmit:s=>{xe(null),re(s==null?void 0:s.collType),b({collectionType:l.values.collType,fromDate:l.values.fromDate,uptoDate:l.values.uptoDate,wardId:l.values.wardId,userId:l.values.userId,zoneId:l.values.zoneId,paymentMode:l.values.paymentMode}),D(r=>r+1)},validationSchema:ge});c.useEffect(()=>{ie(a==null?void 0:a.totalAmt)},[a,y]),c.useEffect(()=>{var s;pe(),ue((s=l.values)==null?void 0:s.collType),b({collectionType:l.values.collType,fromDate:l.values.fromDate,uptoDate:l.values.uptoDate,wardId:l.values.wardId,userId:l.values.userId,zoneId:l.values.zoneId,paymentMode:l.values.paymentMode}),D(r=>r+1)},[]);const je=s=>{i(!0),l.setFieldValue("wardId","");let r={zoneId:s};X.post(ae,r,L()).then(function(o){te(o.data.data),i(!1)}).catch(function(o){i(!1)})},C=s=>{let r=s.target.name,o=s.target.value;r=="zoneId"&&je(o)},pe=()=>{X.post(se,{},L()).then(s=>{var r,o;((r=s==null?void 0:s.data)==null?void 0:r.status)==!0&&ce((o=s==null?void 0:s.data)==null?void 0:o.data),i(!1)}).catch(s=>i(!1)).finally(()=>i(!1))},A=["property"],T=["saf"],we=c.useMemo(()=>Array.isArray(x)&&x.some(s=>A.includes(s)),[A]),ve=c.useMemo(()=>Array.isArray(x)&&x.some(s=>T.includes(s)),[T]),be=[{Header:"S.No.",Cell:({row:s})=>e.jsx("div",{children:(s==null?void 0:s.index)+1}),className:"w-[5%]"},{Header:"Zone No.",accessor:"zone_name",Cell:s=>n(s==null?void 0:s.value),className:"w-[5%]"},{Header:"Ward No.",accessor:"ward_no",Cell:s=>n(s==null?void 0:s.value),className:"w-[5%]"},{Header:"Holding / SAF No.",accessor:s=>s.holding_no?s.holding_no:s.saf_no?s.saf_no:"N/A"},{Header:"Property No.",accessor:"property_no",Cell:s=>n(s==null?void 0:s.value),className:"w-1/3"},{Header:"Owner Name",accessor:"owner_name",Cell:s=>n(s==null?void 0:s.value),className:"w-1/3"},{Header:"Mobile No.",accessor:"mobile_no",Cell:s=>n(s==null?void 0:s.value),className:"w-1/3"},{Header:"Address",accessor:"prop_address",Cell:s=>n(s==null?void 0:s.value),className:"w-1/3"},{Header:"Payment(From/Upto)",accessor:"from_upto_fy_qtr",Cell:s=>n(s==null?void 0:s.value)},{Header:"Amount",accessor:"amount",Cell:s=>e.jsx(e.Fragment,{children:j(s==null?void 0:s.value)}),className:"w-1/3"},{Header:"Payment Mode",accessor:"transaction_mode",Cell:s=>n(s==null?void 0:s.value),className:"w-1/3"},{Header:"Cheque / NEFT / RTGS Details",accessor:"cheque_no",Cell:s=>n(s==null?void 0:s.value),className:"w-[10%]"},{Header:"Bank Name",accessor:"bank_name",Cell:s=>n(s==null?void 0:s.value),className:"whitespace-nowrap"},{Header:"Branch Name",accessor:"branch_name",Cell:s=>n(s==null?void 0:s.value),className:"w-[5%]"},{Header:"Collection Date",accessor:"tran_date",Cell:s=>He(s==null?void 0:s.value),className:"w-1/3"},{Header:"Transaction No",accessor:"tran_no",Cell:s=>n(s==null?void 0:s.value),className:"w-1/3"},{Header:"Collector Name",accessor:"emp_name",Cell:s=>e.jsx(e.Fragment,{children:s==null?void 0:s.value}),className:"w-1/3"}];return e.jsxs(e.Fragment,{children:[me&&e.jsx(Ie,{}),e.jsxs("form",{onChange:l.handleChange,onSubmit:l.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Collection Summary"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collection Type :"}),e.jsxs("div",{className:"col-span-6 flex items-center justify-start gap-4 bg-green-100 shadow-md px-2 py-1.5 rounded-md border border-green-300 shadow-green-100",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"1",children:"Property"}),e.jsx("input",{className:"",type:"checkbox",name:"collType",id:"1",value:"property",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"2",children:"SAF"}),e.jsx("input",{className:"",type:"checkbox",name:"collType",id:"2",value:"saf"})]})]}),e.jsx("div",{className:"col-span-12 text-start",children:l.touched.collType&&l.errors.collType&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.collType})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:l.values.fromDate,id:"",className:m,defaultValue:_})}),e.jsx("div",{className:"col-span-12 text-end",children:l.touched.fromDate&&l.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:l.values.uptoDate,id:"",className:m,defaultValue:_})}),e.jsx("div",{className:"col-span-12 text-end",children:l.touched.uptoDate&&l.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:l.errors.uptoDate})})})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[d("tranActualTaxBillPage.zoneLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:C,className:m,children:[e.jsx("option",{value:"",children:d("tranActualTaxBillPage.AllZones.label")}),e.jsx("option",{value:"1",children:d("tranActualTaxBillPage.ZoneAEast.label")}),e.jsx("option",{value:"2",children:d("tranActualTaxBillPage.ZoneBWest.label")}),e.jsx("option",{value:"3",children:d("tranActualTaxBillPage.ZoneCNorth.label")}),e.jsx("option",{value:"4",children:d("tranActualTaxBillPage.ZoneDSouth.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.zoneId&&l.errors.zoneId?l.errors.zoneId:null})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[d("tranActualTaxBillPage.wardNoLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:C,className:m,children:[e.jsx("option",{value:"",children:d("tranActualTaxBillPage.AllWard.label")}),h==null?void 0:h.map((s,r)=>e.jsx("option",{value:s.id,children:s.ward_name},r))]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.wardNo&&l.errors.wardNo?l.errors.wardNo:null})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector List :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:m,children:[e.jsx("option",{value:"",children:"All"}),f==null?void 0:f.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.id,children:e.jsx("span",{className:"capitalize",children:s==null?void 0:s.user_name})})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:m,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-center",children:e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-400 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(Me,{})}),"Search"]})})]})]}),w!=""&&w!="gbSaf"&&((S=a==null?void 0:a.data)==null?void 0:S.length)>1&&e.jsxs("div",{className:"w-full text-end",children:[we&&e.jsx("button",{className:"font-semibold px-6 py-2 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white mr-2",onClick:()=>u("/payment-mode-wise-summary/property"),children:"Payment Mode Wise Property Summary"}),ve&&e.jsx("button",{className:"font-semibold px-6 py-2 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white",onClick:()=>u("/payment-mode-wise-summary/saf"),children:"Payment Mode Wise SAF Summary"})]}),v!=null&&e.jsxs("div",{className:"relative",children:[((I=a==null?void 0:a.data)==null?void 0:I.length)>1&&e.jsxs("div",{className:"absolute top-11 right-0",children:["Total Amount : ",e.jsx("span",{className:"font-semibold",children:j(de)})]}),e.jsx(ke,{getData:!0,allData:s=>oe(s),api:ee,columns:be,requestBody:v,changeData:y})]}),e.jsx("div",{className:"h-[20vh]"}),e.jsx(Pe,{isOpen:le,onAfterOpen:fe,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center sm:ml-10 overflow-auto",contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] mt-16 sm:h-max w-full relative border-2 border-indigo-400 bg-gray-40 px-6 py-4 h-[88vh] border-t-2 border-l-2 overflow-auto",children:[e.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-md px-2 text-xl cursor-pointer",onClick:he,children:"×"}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-400 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-base sm:text-lg",children:"View Details"})})}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 flex-wrap items-center justify-evenly w-full relative",children:[e.jsx("button",{className:"text-xs px-2 py-1 bg-green-400 hover:bg-green-500 rounded-md shadow-md shadow-green-100 absolute bottom-0 right-0 transition-all duration-150 ",onClick:()=>{var s,r,o,Q,J,K;((s=a==null?void 0:a.data[t])==null?void 0:s.type)=="property"&&u("/holdingPropertyDetails/"+((r=a==null?void 0:a.data[t])==null?void 0:r.id)),((o=a==null?void 0:a.data[t])==null?void 0:o.type)=="saf"&&u("/propApplicationDetails/"+((Q=a==null?void 0:a.data[t])==null?void 0:Q.id)),((J=a==null?void 0:a.data[t])==null?void 0:J.type)=="gbsaf"&&u("/gbsaf-details/"+((K=a==null?void 0:a.data[t])==null?void 0:K.id))},children:"View More"}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Collector Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:n((M=a==null?void 0:a.data[t])==null?void 0:M.emp_name)})]}),((P=a==null?void 0:a.data[t])==null?void 0:P.type)!="property"&&e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Assesment Type : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:n((F=a==null?void 0:a.data[t])==null?void 0:F.assessment_type)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Zone No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:n((H=a==null?void 0:a.data[t])==null?void 0:H.zone_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Ward No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:n((B=a==null?void 0:a.data[t])==null?void 0:B.ward_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Holding No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:n((k=a==null?void 0:a.data[t])==null?void 0:k.holding_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"SAF No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:n((z=a==null?void 0:a.data[t])==null?void 0:z.saf_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Owner Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:n((q=a==null?void 0:a.data[t])==null?void 0:q.owner_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Mobile No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:n((E=a==null?void 0:a.data[t])==null?void 0:E.mobile_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Payment (From-Upto) : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:n((O=a==null?void 0:a.data[t])==null?void 0:O.from_upto_fy_qtr)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:n((W=a==null?void 0:a.data[t])==null?void 0:W.tran_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Date : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:n((Z=a==null?void 0:a.data[t])==null?void 0:Z.tran_date)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Mode : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:n((V=a==null?void 0:a.data[t])==null?void 0:V.transaction_mode)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Amount : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:j((R=a==null?void 0:a.data[t])==null?void 0:R.amount)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Cheque No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:n((U=a==null?void 0:a.data[t])==null?void 0:U.cheque_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Bank Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:n((Y=a==null?void 0:a.data[t])==null?void 0:Y.bank_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Branch Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:n(($=a==null?void 0:a.data[t])==null?void 0:$.branch_name)})]}),((G=a==null?void 0:a.data[t])==null?void 0:G.type)!="property"&&e.jsx("div",{className:"w-full sm:w-[40%] grid grid-cols-12"})]})]})})]})};export{Ee as default};
