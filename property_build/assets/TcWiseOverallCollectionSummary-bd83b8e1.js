import{r as t,_ as re,Y as ce,e as de,ap as j,a as ie,q as me,s as g,a2 as ue,w as xe,A as z,b as k,j as e,B as pe,U as he,i as q,ad as fe,n as u,P as je}from"./index-c6aa66f9.js";import"./html2canvas.esm-5d675120.js";const ge=t.lazy(()=>re(()=>import("./index-c6aa66f9.js").then(v=>v.dq),["assets/index-c6aa66f9.js","assets/index-960bb152.css"])),be=v=>{var C,S,I,B,M;const{api_newWardByZoneId:E,get_collectorList:O,api_individualTranDtl:H}=je(),{t:c}=ce(),x=de(),[V,W]=t.useState(!1),[p,Z]=t.useState(),[d,R]=t.useState(),[h,Y]=t.useState();t.useState([]);const[a,U]=t.useState(null),[$,Q]=t.useState(0),[G,J]=t.useState(0),[K,i]=t.useState(!1),[ve,X]=t.useState(""),[r,L]=t.useState(null),[f,N]=t.useState(null),[y,b]=t.useState(0),ee=()=>W(!1),le=()=>{};t.useState("");let ae=new Date().toLocaleDateString("in-IN"),w=j(ae).format("DD-MM-YYYY");ie("Tc Wise Collection Summary");const m="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",se=me({fromDate:g().required("Field Required"),uptoDate:g().required("Field Required"),collType:ue().min(1,"Check atleast one").of(g().required("Array items must be non-empty strings"))}),s=xe({initialValues:{fromDate:j(new Date).format("yy-MM-DD"),uptoDate:j(new Date).format("yy-MM-DD"),collType:["property"],wardId:"",userId:"",zoneId:"",paymentMode:""},onSubmit:l=>{console.log("values =>  ",l),L(null),R(l==null?void 0:l.collType),N({collectionType:s.values.collType,fromDate:s.values.fromDate,uptoDate:s.values.uptoDate,wardId:s.values.wardId,zoneId:s.values.zoneId,userId:s.values.userId,paymentMode:s.values.paymentMode}),b(n=>n+1)},validationSchema:se});console.log("getting data => ",f),t.useEffect(()=>{Q(a==null?void 0:a.total_sum),J(a==null?void 0:a.totalBillCut)},[a,y,d]),t.useEffect(()=>{var l;ne(),X((l=s.values)==null?void 0:l.collType),N({collectionType:s.values.collType,fromDate:s.values.fromDate,uptoDate:s.values.uptoDate,wardId:s.values.wardId,userId:s.values.userId,paymentMode:s.values.paymentMode}),b(n=>n+1)},[]);const te=l=>{i(!0),s.setFieldValue("wardId","");let n={zoneId:l};console.log("before fetch wardby old ward...",n),z.post(E,n,k()).then(function(o){console.log("wardlist by zone id list ....",o.data.data),Z(o.data.data),i(!1)}).catch(function(o){console.log("errorrr.... ",o),i(!1)})},D=l=>{let n=l.target.name,o=l.target.value;n=="zoneId"&&te(o)},ne=()=>{z.post(O,{},k()).then(l=>{var n,o;((n=l==null?void 0:l.data)==null?void 0:n.status)==!0&&Y((o=l==null?void 0:l.data)==null?void 0:o.data),i(!1)}).catch(l=>i(!1)).finally(()=>i(!1))},T=["property"],A=["saf"];t.useMemo(()=>Array.isArray(d)&&d.some(l=>T.includes(l)),[T]),t.useMemo(()=>Array.isArray(d)&&d.some(l=>A.includes(l)),[A]);const oe=[{Header:"S.No.",Cell:({row:l})=>e.jsx("div",{children:(l==null?void 0:l.index)+1}),className:"w-[5%]"},{Header:"TC Name",accessor:"name",Cell:l=>u(l==null?void 0:l.value),className:"w-[5%]"},{Header:"Total Bill Cut",accessor:"total_tran",Cell:l=>u(l==null?void 0:l.value),className:"w-[5%]"},{Header:"Total Amount",accessor:"total_amount",Cell:l=>e.jsx(e.Fragment,{children:q(l==null?void 0:l.value)}),className:"w-[5%]"}];return console.log("collType ",d),e.jsxs(e.Fragment,{children:[K&&e.jsx(pe,{}),e.jsxs("form",{onChange:s.handleChange,onSubmit:s.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Collection Summary"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collection Type :"}),e.jsxs("div",{className:"col-span-6 flex items-center justify-start gap-4 bg-green-100 shadow-md px-2 py-1.5 rounded-md border border-green-300 shadow-green-100",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"1",children:"Property"}),e.jsx("input",{className:"",type:"checkbox",name:"collType",id:"1",value:"property",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("label",{htmlFor:"2",children:"SAF"}),e.jsx("input",{className:"",type:"checkbox",name:"collType",id:"2",value:"saf"})]})]}),e.jsx("div",{className:"col-span-12 text-start",children:s.touched.collType&&s.errors.collType&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:s.errors.collType})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:s.values.fromDate,id:"",className:m,defaultValue:w})}),e.jsx("div",{className:"col-span-12 text-end",children:s.touched.fromDate&&s.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:s.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:s.values.uptoDate,id:"",className:m,defaultValue:w})}),e.jsx("div",{className:"col-span-12 text-end",children:s.touched.uptoDate&&s.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:s.errors.uptoDate})})})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[c("tranActualTaxBillPage.zoneLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"zoneId",onChange:D,className:m,children:[e.jsx("option",{value:"",children:c("tranActualTaxBillPage.AllZones.label")}),e.jsx("option",{value:"1",children:c("tranActualTaxBillPage.ZoneAEast.label")}),e.jsx("option",{value:"2",children:c("tranActualTaxBillPage.ZoneBWest.label")}),e.jsx("option",{value:"3",children:c("tranActualTaxBillPage.ZoneCNorth.label")}),e.jsx("option",{value:"4",children:c("tranActualTaxBillPage.ZoneDSouth.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.zoneId&&s.errors.zoneId?s.errors.zoneId:null})]}),e.jsxs("div",{className:'className="flex flex-col w-full md:w-[20%]',children:[e.jsxs("div",{className:"col-span-6 font-semibold",children:[c("tranActualTaxBillPage.wardNoLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{name:"wardId",onChange:D,className:m,children:[e.jsx("option",{value:"",children:c("tranActualTaxBillPage.AllWard.label")}),p==null?void 0:p.map((l,n)=>e.jsx("option",{value:l.id,children:l.ward_name},n))]}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.wardNo&&s.errors.wardNo?s.errors.wardNo:null})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector List :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:m,children:[e.jsx("option",{value:"",children:"All"}),h==null?void 0:h.map(l=>e.jsx(e.Fragment,{children:e.jsx("option",{value:l==null?void 0:l.id,children:e.jsx("span",{className:"capitalize",children:l==null?void 0:l.user_name})})}))]})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:m,children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-center",children:e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-400 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(he,{})}),"Search"]})})]})]}),f!=null&&e.jsxs("div",{className:"relative",children:[((C=a==null?void 0:a.data)==null?void 0:C.length)>1&&e.jsxs("div",{className:"absolute top-11  right-0 grid grid-cols-3",children:[e.jsxs("div",{className:"ml-8",children:["Total Bill Cut : ",e.jsx("span",{className:"font-semibold mr-16",children:G})]}),e.jsx("div",{}),e.jsxs("div",{className:"",children:["Total Amount : ",e.jsx("span",{className:" font-semibold",children:q($)})]})]}),e.jsx(ge,{getData:!0,allData:l=>U(l),api:H,columns:oe,requestBody:f,changeData:y})]}),e.jsx("div",{className:"h-[20vh]"}),e.jsx(fe,{isOpen:V,onAfterOpen:le,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center sm:ml-10 overflow-auto",contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] mt-16 sm:h-max w-full relative border-2 border-indigo-400 bg-gray-40 px-6 py-4 h-[88vh] border-t-2 border-l-2 overflow-auto",children:[e.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-md px-2 text-xl cursor-pointer",onClick:ee,children:"×"}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-400 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-base sm:text-lg",children:"View Details"})})}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 flex-wrap items-center justify-evenly w-full relative",children:[e.jsx("button",{className:"text-xs px-2 py-1 bg-green-400 hover:bg-green-500 rounded-md shadow-md shadow-green-100 absolute bottom-0 right-0 transition-all duration-150 ",onClick:()=>{var l,n,o,_,P,F;((l=a==null?void 0:a.data[r])==null?void 0:l.type)=="property"&&x("/holdingPropertyDetails/"+((n=a==null?void 0:a.data[r])==null?void 0:n.id)),((o=a==null?void 0:a.data[r])==null?void 0:o.type)=="saf"&&x("/propApplicationDetails/"+((_=a==null?void 0:a.data[r])==null?void 0:_.id)),((P=a==null?void 0:a.data[r])==null?void 0:P.type)=="gbsaf"&&x("/gbsaf-details/"+((F=a==null?void 0:a.data[r])==null?void 0:F.id))},children:"View More"}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"TC Name : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:u((S=a==null?void 0:a.data[r])==null?void 0:S.emp_name)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Total Bill Cut : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:u((I=a==null?void 0:a.data[r])==null?void 0:I.ward_no)})]}),e.jsxs("div",{className:"w-full sm:w-[40%] grid grid-cols-12",children:[e.jsx("span",{className:"col-span-6 items-center",children:"Total Amount : "}),e.jsx("span",{className:"col-span-6 items-center font-semibold",children:u((B=a==null?void 0:a.data[r])==null?void 0:B.holding_no)})]}),((M=a==null?void 0:a.data[r])==null?void 0:M.type)!="property"&&e.jsx("div",{className:"w-full sm:w-[40%] grid grid-cols-12"})]})]})})]})};export{be as default};
