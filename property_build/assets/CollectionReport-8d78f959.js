import{r,_ as be,Y as ye,e as De,aq as j,a as Ae,q as Ce,s as N,a2 as Te,w as _e,A as L,b as ee,j as e,B as Ie,U as Se,i as w,ad as Me,n as o,P as Fe,ab as Pe}from"./index-860cda86.js";const ke=r.lazy(()=>be(()=>import("./index-860cda86.js").then(d=>d.dq),["assets/index-860cda86.js","assets/index-1b1c9d49.css"])),He=()=>{var F,P,k,B,z,q,H,E,O,R,V,W,Z,Y,U,$,Q,G;const{t:d}=ye(),{get_MasterData:Be,searchAllCollection:se,get_taxCollectorList:ze,get_collectorList:le,api_newWardByZoneId:ae}=Fe(),u=De(),[ne,v]=r.useState(!1),[f,te]=r.useState(),[g,oe]=r.useState(),[i,re]=r.useState([]),[s,ce]=r.useState(null),[de,ie]=r.useState(0),[me,m]=r.useState(!1),[b,xe]=r.useState(""),[n,y]=r.useState(null),[D,A]=r.useState(null),[C,T]=r.useState(0),ue=()=>v(!0),he=()=>v(!1),pe=()=>{};let fe=new Date().toLocaleDateString("in-IN"),_=j(fe).format("DD-MM-YYYY");Ae("Collection Report");const x="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",ge=Ce({fromDate:N().required("Field Required"),uptoDate:N().required("Field Required"),collType:Te().min(1,"Check atleast one").of(N().required("Array items must be non-empty strings"))}),a=_e({initialValues:{fromDate:j(new Date).format("yy-MM-DD"),uptoDate:j(new Date).format("yy-MM-DD"),collType:["property"],wardId:"",userId:"",zoneId:"",paymentMode:""},onSubmit:l=>{console.log("values =>  ",l),y(null),re(l==null?void 0:l.collType),A({collectionType:a.values.collType,fromDate:a.values.fromDate,uptoDate:a.values.uptoDate,wardId:a.values.wardId,userId:a.values.userId,zoneId:a.values.zoneId,paymentMode:a.values.paymentMode}),T(t=>t+1)},validationSchema:ge});console.log("getting data => ",s),r.useEffect(()=>{ie(s==null?void 0:s.totalAmt)},[s,C]),r.useEffect(()=>{var l;Ne(),xe((l=a.values)==null?void 0:l.collType),A({collectionType:a.values.collType,fromDate:a.values.fromDate,uptoDate:a.values.uptoDate,wardId:a.values.wardId,userId:a.values.userId,zoneId:a.values.zoneId,paymentMode:a.values.paymentMode}),T(t=>t+1)},[]);const je=l=>{m(!0),a.setFieldValue("wardId","");let t={zoneId:l};console.log("before fetch wardby old ward...",t),L.post(ae,t,ee()).then(function(c){console.log("wardlist by zone id list ....",c.data.data),te(c.data.data),m(!1)}).catch(function(c){console.log("errorrr.... ",c),m(!1)})},I=l=>{let t=l.target.name,c=l.target.value;t=="zoneId"&&je(c)},Ne=()=>{L.post(le,{},ee()).then(l=>{var t,c;((t=l==null?void 0:l.data)==null?void 0:t.status)==!0&&oe((c=l==null?void 0:l.data)==null?void 0:c.data),m(!1)}).catch(l=>m(!1)).finally(()=>m(!1))},we=l=>{y(l),console.log("view data => ",s==null?void 0:s.data[l]),ue()},h=["property"],p=["saf"],S=r.useMemo(()=>Array.isArray(i)&&(i==null?void 0:i.some(l=>h==null?void 0:h.includes(l))),[h]),M=r.useMemo(()=>Array.isArray(i)&&(i==null?void 0:i.some(l=>p==null?void 0:p.includes(l))),[p]);console.log("isProperty:",S),console.log("isSaf:",M),console.log("Collection:",b);const ve=[{Header:"S.No.",Cell:({row:l})=>e.jsx("div",{children:(l==null?void 0:l.index)+1}),className:"w-[5%]"},{Header:"Ward No.",accessor:"ward_no",Cell:l=>o(l==null?void 0:l.value),className:"w-[5%]"},{Header:"Holding No.",accessor:"holding_no",Cell:l=>o(l==null?void 0:l.value)},{Header:"SAF No.",accessor:"saf_no",Cell:l=>o(l==null?void 0:l.value)},{Header:"Assessment Type",accessor:"assessment_type",Cell:l=>o(l==null?void 0:l.value)},{Header:"Owner Name",accessor:"owner_name",Cell:l=>o(l==null?void 0:l.value),className:"w-1/3"},{Header:"Tran. Date",accessor:"tran_date",Cell:l=>Pe(l==null?void 0:l.value)},{Header:"Amount",accessor:"amount",Cell:l=>e.jsx(e.Fragment,{children:w(l==null?void 0:l.value)})},{Header:"Action",Cell:({cell:l})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex items-center justify-center gap-2 w-full",children:e.jsx("button",{onClick:()=>{var t;return we((t=l==null?void 0:l.row)==null?void 0:t.index)},className:"px-2 py-1 rounded-md bg-indigo-500 text-white text-sm hover:bg-indigo-600",children:"View"})})})}];return console.log("collType ",s),e.jsxs(e.Fragment,{children:[me&&e.jsx(Ie,{}),e.jsxs("form",{onChange:a.handleChange,onSubmit:a.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Collection Report"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collection Type :"}),e.jsxs("div",{className:"col-span-6 flex items-center justify-start gap-4 bg-green-100 shadow-md px-2 py-1.5 rounded-md border border-green-300 shadow-green-100",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"1",children:"Property"}),e.jsx("input",{className:"",type:"checkbox",name:"collType",id:"1",value:"property",checked:a.values.collType.includes("property"),onChange:a.handleChange})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"2",children:"SAF"}),e.jsx("input",{className:"",type:"checkbox",name:"collType",id:"2",value:"saf",checked:a.values.collType.includes("saf"),onChange:a.handleChange,defaultChecked:!0})]})]}),e.jsx("div",{className:"col-span-12 text-start",children:a.touched.collType&&a.errors.collType&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.collType})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:a.values.fromDate,id:"",className:x,defaultValue:_})}),e.jsx("div",{className:"col-span-12 text-end",children:a.touched.fromDate&&a.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:a.values.uptoDate,id:"",className:x,defaultValue:_})}),e.jsx("div",{className:"col-span-12 text-end",children:a.touched.uptoDate&&a.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.uptoDate})})})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[d("tranActualTaxBillPage.zoneLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:I,className:x,children:[e.jsx("option",{value:"",children:d("tranActualTaxBillPage.AllZones.label")}),e.jsx("option",{value:"1",children:d("tranActualTaxBillPage.ZoneAEast.label")}),e.jsx("option",{value:"2",children:d("tranActualTaxBillPage.ZoneBWest.label")}),e.jsx("option",{value:"3",children:d("tranActualTaxBillPage.ZoneCNorth.label")}),e.jsx("option",{value:"4",children:d("tranActualTaxBillPage.ZoneDSouth.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.zoneId&&a.errors.zoneId?a.errors.zoneId:null})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[d("tranActualTaxBillPage.wardNoLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:I,className:x,children:[e.jsx("option",{value:"",children:d("tranActualTaxBillPage.AllWard.label")}),f==null?void 0:f.map((l,t)=>e.jsx("option",{value:l.id,children:l.ward_name},t))]}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.wardNo&&a.errors.wardNo?a.errors.wardNo:null})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector List :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:x,children:[e.jsx("option",{value:"",children:"All"}),g==null?void 0:g.map((l,t)=>e.jsx(e.Fragment,{children:e.jsx("option",{value:l==null?void 0:l.id,children:e.jsx("span",{className:"capitalize",children:l==null?void 0:l.user_name})},t)}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:x,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"}),e.jsx("option",{value:"NEFT",children:"NEFT"})]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-center",children:e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-400 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(Se,{})}),"Search"]})})]})]}),b!=="gbSaf"&&e.jsxs("div",{className:"w-full text-end",children:[S&&e.jsx("button",{type:"Property",className:"font-semibold px-6 py-2 bg-indigo-500 text-white text-sm leading-tight uppercase rounded hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white mr-2",onClick:()=>u("/payment-mode-wise-summary/property"),children:"Payment Mode Wise Property Summary"}),M&&e.jsx("button",{type:"Property",className:"font-semibold px-6 py-2 bg-indigo-500 text-white text-sm leading-tight uppercase rounded hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-140 ease-in-out shadow-xl border border-white",onClick:()=>u("/payment-mode-wise-summary/saf"),children:"Payment Mode Wise SAF Summary"})]}),D!=null&&e.jsxs("div",{className:"relative",children:[((F=s==null?void 0:s.data)==null?void 0:F.length)>1&&e.jsxs("div",{className:"absolute top-11 right-0",children:["Total Amount : ",e.jsx("span",{className:"font-semibold",children:w(de)})]}),e.jsx(ke,{getData:!0,allData:l=>ce(l),api:se,columns:ve,requestBody:D,changeData:C})]}),e.jsx("div",{className:"h-[20vh]"}),e.jsx(Me,{isOpen:ne,onAfterOpen:pe,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center sm:ml-10 overflow-auto",contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] mt-16 sm:h-max w-full relative border-2 border-indigo-400 bg-gray-40 px-6 py-4 h-[88vh] border-t-2 border-l-2 overflow-auto",children:[e.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-md px-2 text-xl cursor-pointer",onClick:he,children:"×"}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-400 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-base sm:text-lg",children:"View Details"})})}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 flex-wrap items-center justify-evenly w-full relative",children:[e.jsx("button",{className:"text-xs px-2 py-1 bg-green-400 hover:bg-green-500 rounded-md shadow-md shadow-green-100 absolute bottom-0 right-0 transition-all duration-150 ",onClick:()=>{var l,t,c,J,K,X;((l=s==null?void 0:s.data[n])==null?void 0:l.type)=="property"&&u("/holdingPropertyDetails/"+((t=s==null?void 0:s.data[n])==null?void 0:t.id)),((c=s==null?void 0:s.data[n])==null?void 0:c.type)=="saf"&&u("/propApplicationDetails/"+((J=s==null?void 0:s.data[n])==null?void 0:J.id)),((K=s==null?void 0:s.data[n])==null?void 0:K.type)=="gbsaf"&&u("/gbsaf-details/"+((X=s==null?void 0:s.data[n])==null?void 0:X.id))},children:"View More"}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Collector Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((P=s==null?void 0:s.data[n])==null?void 0:P.emp_name)})]}),((k=s==null?void 0:s.data[n])==null?void 0:k.type)!="property"&&e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Assesment Type : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((B=s==null?void 0:s.data[n])==null?void 0:B.assessment_type)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Ward No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((z=s==null?void 0:s.data[n])==null?void 0:z.ward_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Holding No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((q=s==null?void 0:s.data[n])==null?void 0:q.holding_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"SAF No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((H=s==null?void 0:s.data[n])==null?void 0:H.saf_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Owner Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((E=s==null?void 0:s.data[n])==null?void 0:E.owner_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Mobile No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((O=s==null?void 0:s.data[n])==null?void 0:O.mobile_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Payment (From-Upto) : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((R=s==null?void 0:s.data[n])==null?void 0:R.from_upto_fy_qtr)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((V=s==null?void 0:s.data[n])==null?void 0:V.tran_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Date : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((W=s==null?void 0:s.data[n])==null?void 0:W.tran_date)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Mode : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((Z=s==null?void 0:s.data[n])==null?void 0:Z.transaction_mode)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Transaction Amount : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:w((Y=s==null?void 0:s.data[n])==null?void 0:Y.amount)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Cheque No. : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((U=s==null?void 0:s.data[n])==null?void 0:U.cheque_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Bank Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o(($=s==null?void 0:s.data[n])==null?void 0:$.bank_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Branch Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:o((Q=s==null?void 0:s.data[n])==null?void 0:Q.branch_name)})]}),((G=s==null?void 0:s.data[n])==null?void 0:G.type)!="property"&&e.jsx("div",{className:"w-full sm:w-[40%] grid grid-cols-12"})]})]})})]})};export{He as default};
