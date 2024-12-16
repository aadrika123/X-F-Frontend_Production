import{r as s,j as e,B as $,u as G,Y as X,e as ee,aw as L,q as re,s as K,w as se,A as de,b as ae,o as le,U as ce,ay as te,c as oe,ar as ne,P as ie}from"./index-4f037684.js";class xe extends s.Component{render(){var f,g,x,h,D,v,w,t,m,u,b,S,j,o,a,N,l,y,p,O,r,n,c,d,i,R,P,T,M,A,C,B,k,F,E,Y,q,W,Z,H,I,U,V,_,z,J;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-[66rem] mx-auto bg-white p-4 border ",id:"printableArea",children:[((f=this.props)==null?void 0:f.Loading)&&e.jsx($,{}),e.jsxs("div",{className:"grid grid-cols-6 text-center ",children:[e.jsx("div",{className:"col-span-5",children:e.jsxs("div",{className:"h-auto flex gap-1 w-full",children:[e.jsx("img",{src:"https://th.bing.com/th/id/OIP.2h0NzgL6-wG4kSWlkAS0jgHaHX?pid=ImgDet&rs=1",alt:"logo",className:"w-24 h-24"}),e.jsx("div",{className:"text-sm font-semibold whitespace-nowrap  py-2"}),e.jsxs("div",{className:"text-center  w-full",children:[e.jsx("div",{className:"text-2xl font-semibold px-2  bg-gray-700 text-white border rounded mx-1 py-1",children:(g=this.props)==null?void 0:g.t("tranActualTaxBillPage.akolaMunicipalCorporationLabel.label")}),e.jsxs("p",{className:"text-sm font-normal px-2",children:[(x=this.props)==null?void 0:x.t("tranActualTaxBillPage.receiptLabel.label"),e.jsxs("h1",{children:[(h=this.props)==null?void 0:h.t("tranActualTaxBillPage.taxReceiptLabel.label")," (",(D=this.props)==null?void 0:D.t("tranActualTaxBillPage.fiscalYearLabel.label")," - ",(u=(m=(t=(w=(v=this.props)==null?void 0:v.collectionList)==null?void 0:w.data)==null?void 0:t.data)==null?void 0:m.headers)==null?void 0:u.uptoFyear,")"]})]})]})]})}),e.jsx("div",{className:"col-span-1"})]}),e.jsxs("div",{className:"grid grid-cols-4   text-center",children:[e.jsx("div",{}),e.jsx("div",{className:"text-xs w-full ml-4 mt-4 whitespace-nowrap",children:e.jsxs("h1",{className:"text-center",children:[e.jsx("b",{children:(a=(o=(j=(S=(b=this.props)==null?void 0:b.collectionList)==null?void 0:S.data)==null?void 0:j.data)==null?void 0:o.report)==null?void 0:a.payment_mode})," ",(N=this.props)==null?void 0:N.t("tranActualTaxBillPage.collectionDateLabel.label")," :- ",e.jsxs("b",{children:[(r=(O=(p=(y=(l=this.props)==null?void 0:l.collectionList)==null?void 0:y.data)==null?void 0:p.data)==null?void 0:O.headers)==null?void 0:r.fromDate," "]}),"6:00:00 PM  ",e.jsxs("b",{children:["   -   ",(R=(i=(d=(c=(n=this.props)==null?void 0:n.collectionList)==null?void 0:c.data)==null?void 0:d.data)==null?void 0:i.headers)==null?void 0:R.uptoDate]})," 6:00:00 PM"]})}),e.jsx("div",{}),e.jsxs("div",{className:"text-xs pb-2 w-full text-left",children:[e.jsxs("h1",{className:"text-",children:[" ",(P=this.props)==null?void 0:P.t("tranActualTaxBillPage.zoneLabel.label")," : ",e.jsx("b",{children:(T=this.props)==null?void 0:T.t("tranActualTaxBillPage.eastWestNorthSouthLabel.label")})]}),e.jsxs("h1",{className:"text-",children:[(M=this.props)==null?void 0:M.t("tranActualTaxBillPage.printedOnLabel.label")," : ",e.jsxs("b",{children:[" ",(F=(k=(B=(C=(A=this.props)==null?void 0:A.collectionList)==null?void 0:C.data)==null?void 0:B.data)==null?void 0:k.headers)==null?void 0:F.printDate]})," "]}),e.jsxs("h1",{className:"text-",children:[(E=this.props)==null?void 0:E.t("tranActualTaxBillPage.printedByLabel.label")," : ",e.jsxs("b",{children:[" ",(H=(Z=(W=(q=(Y=this.props)==null?void 0:Y.collectionList)==null?void 0:q.data)==null?void 0:W.data)==null?void 0:Z.headers)==null?void 0:H.printedBy]})," "]})]})]}),e.jsx("div",{className:"w-full  text-center text-xs border border-gray-600 ",children:e.jsxs("table",{className:"table-auto w-full border text-center",id:"table-to-export",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border",children:[e.jsx("th",{className:"border",children:"Zone no "}),e.jsx("th",{className:"border",children:"Overdue recovery Rs "}),e.jsx("th",{className:"border",children:"Current recovery Rs "}),e.jsx("th",{className:"border",children:" Total recovery Rs"}),e.jsx("th",{className:"border",colSpan:5,children:" Daily Receipt Report"}),e.jsx("th",{className:"border",children:"Total Number of Receipt till date 01/04/2023 "}),e.jsx("th",{className:"border",children:" Total Number of Receipt till date 01/04/2023 peercentage (%)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"",colSpan:4,children:" "}),e.jsx("td",{className:"border",colSpan:2,children:" Ward of JSK Recovery Receipt No"}),e.jsx("td",{className:"border",colSpan:2,children:" HQ JSK Counter Recovery Receipt No"}),e.jsx("td",{className:"border ",children:"Online Collection"}),e.jsx("td",{className:"  ",colSpan:2,children:" "})]}),e.jsxs("tr",{children:[e.jsx("td",{className:" ",colSpan:4,children:" "}),e.jsx("td",{className:"border",children:" Cash"}),e.jsx("td",{className:"border ",children:"cheque "}),e.jsx("td",{className:"border",children:" Cash"}),e.jsx("td",{className:"border",children:" cheque"}),e.jsx("td",{className:"border "}),e.jsx("td",{className:"",colSpan:2})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"Eastern Zone"}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:"Overdue recovery "})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"Western Zone"}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:"Overdue recovery "})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"North Zone"}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:"Overdue recovery "})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" South Zone"}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:"Overdue recovery "})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:" Municipal office"}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:"Overdue recovery "})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"Total recovery Rs"}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:"Overdue recovery "})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"Total recovery Penalty recovery out of Rs"}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:"Overdue recovery "})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"Encumbered cheques"}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:"Overdue recovery "})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"(01/04/2023)Recovery Upto Rs"}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:"Overdue recovery "})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"Total Demand as on (01/04/2023)"}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:"Overdue recovery "})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"Total  Collection"}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:"Overdue recovery "})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"Total  Penalty Exclusion Demand Rs"}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:"Overdue recovery "})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:"Total  Rebate"}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:"Overdue recovery "})]}),e.jsxs("tr",{children:[e.jsxs("td",{className:"border font-bold ",children:["   ",(I=this.props)==null?void 0:I.t("tranActualTaxBillPage.totalTaxLabel.label")," "]}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsx("td",{className:"border",children:" Overdue recovery"}),e.jsx("td",{className:"border",children:"Overdue recovery "}),e.jsx("td",{className:"border ",children:"Overdue recovery "}),e.jsxs("td",{className:"border",children:["  ",(J=(z=(_=(V=(U=this.props)==null?void 0:U.collectionList)==null?void 0:V.data)==null?void 0:_.data)==null?void 0:z.total)==null?void 0:J.total," Overdue recovery"]})]})]})]})})]})})}}function ve(){const{get_MasterData:Q,propPaymentModeWiseSummary:f,safPaymentModeWiseSummary:g,collectionReportDaily:x}=ie(),[h,D]=s.useState(null),[v,w]=s.useState(!1);s.useState(!1);const t=s.useRef();G();const{t:m}=X(),u=ee(),[b,S]=s.useState("null");let j=new Date().toLocaleDateString("in-IN"),o=L(j).format("YYYY-DD-MM");s.useState([]);const a="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",[N,l]=s.useState(!1);s.useState(!0);const[y,p]=s.useState(),O=re({fromDate:K().required("Field Required"),uptoDate:K().required("Field Required")}),r=se({initialValues:{fromDate:L(new Date).format("DD-MM-YY"),uptoDate:L(new Date).format("DD-MM-YY"),paymentMode:""},onSubmit:c=>{n()},validationSchema:O}),n=()=>{l(!0);let c;c={fromDate:r.values.fromDate,uptoDate:r.values.uptoDate,paymentMode:r.values.paymentMode},de.post(x,c,ae()).then(d=>{var i;((i=d==null?void 0:d.data)==null?void 0:i.status)==!0&&p(d),l(!1)}).catch(d=>l(!1)),s.useEffect(()=>{n()},[])};return e.jsxs("div",{children:[e.jsxs("form",{onChange:r.handleChange,onSubmit:r.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search daily collection Summary"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",value:r.values.fromDate,id:"",className:a,defaultValue:o})}),e.jsx("div",{className:"col-span-12 text-end",children:r.touched.fromDate&&r.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:r.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",value:r.values.uptoDate,id:"",className:a,defaultValue:o})}),e.jsx("div",{className:"col-span-12 text-end",children:r.touched.uptoDate&&r.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:r.errors.uptoDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"paymentMode",id:"",className:a,children:[e.jsx("option",{value:"ALL",children:"All"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"}),e.jsx("option",{value:"ONLINE",children:"Online"})]})})]}),e.jsxs("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:[N?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-start items-end",children:e.jsx(le,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(ce,{})}),"Search"]}),e.jsx("div",{className:"ml-8",children:e.jsx(te,{id:"test-table-xls-button",className:"download-table-xls-button   border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg h-8 rounded-sm text-sm font-semibold px-5 py-1 ",table:"table-to-export",filename:"Daily Collection Report",sheet:"tablexls",buttonText:"Export "})})]})]})]}),v?e.jsxs("div",{className:"w-full bg-white h-48 p-4 text-center",children:[e.jsx("h1",{className:"my-2 p-2 text-lg font-semibold font-poppins text-red-500",children:"Demands against this transaction does not exist"}),e.jsx("button",{className:"px-2 py-2 rounded border bg-blue-500 hover:bg-blue-600 text-white ",type:"button",onClick:()=>u(-1),children:"Return To Previous Page"})]}):e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx(oe,{trigger:()=>e.jsxs("button",{id:"clickButton",className:"bg-teal-500  hover:bg-teal-800 text-white px-3 py-1.5 rounded-lg text-xs font-mono fixed bottom-1 right-[25vw] md:right-[40vw] ",children:[e.jsx(ne,{})," Print !"]}),content:()=>t.current,copyStyles:!0}),e.jsx(xe,{ref:t,t:m,fullData:h,selectedMode:b,collectionList:y}),void 0]})})]})}export{ve as default};
