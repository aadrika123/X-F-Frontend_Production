import{u as C,r as n,e as S,q as A,a3 as B,s as t,w as D,j as e,B as E,S as k,b8 as r,at as a,A as u,b as p,Q as h,ai as W}from"./index-e53b351f.js";const U=R=>{const{id:c,index:N,indexId:b}=C(),{api_getHoldingDemandById:j,api_demandUpdateDetails:g}=W(),[T,x]=n.useState(!1),[f,d]=n.useState(!1),[m,$]=n.useState(),[H,q]=n.useState(),y=S(),v=A({generalTax:B().required("This field is required !"),roadTax:t().required("This field is required !"),firefightingTax:t().required("This field is required !"),educationTax:t().required("This field is required !"),waterTax:t().required("This field is required !"),sewarageTax:t().required("This field is required !"),treeTax:t().required("This field is required !"),professionalTax:t().required("This field is required !"),tax1:t().required("This field is required !"),spEducationTax:t().required("This field is required !"),waterBenefit:t().required("This field is required !"),waterBill:t().required("This field is required !"),spWaterCess:t().required("This field is required !"),drainCess:t().required("This field is required !"),majorBuilding:t().required("This field is required !"),openPloatTax:t().required("This field is required !"),ReceiptNo:t().required("This field is required !"),agingAmt:t().required("This field is required !"),amount:t().required("This field is required !"),bookNo:t().required("This field is required !"),cleanlinessTax:t().required("This field is required !"),lightCess:t().required("This field is required !"),maintananceAmt:t().required("This field is required !"),penalty:t().required("This field is required !"),tax2:t().required("This field is required !"),tax3:t().required("This field is required !"),tranDate:t().required("This field is required !"),nonAgriTax:t().required("This field is required !"),totalTax:t().required("This field is required !"),paymentMode:t().required("This field is required !")}),s=D({initialValues:{generalTax:"",roadTax:"",firefightingTax:"",educationTax:"",waterTax:"",vSanitationTax:"",sewarageTax:"",treeTax:"",professionalTax:"",tax1:"",spEducationTax:"",waterBenefit:"",waterBill:"",spWaterCess:"",drainCess:"",majorBuilding:"",openPloatTax:"",totalTax:"",ReceiptNo:"",agingAmt:"",amount:"",bankName:"",bookNo:"",branchName:"",chequeNo:"",cleanlinessTax:"",clearStatus:"",lightCess:"",maintananceAmt:"",penalty:"",tax2:"",tax3:"",tranDate:"",nonAgriTax:""},enableReinitialize:!0,onSubmit:l=>{w(l)},validationSchema:v}),P=()=>{x(!0),d(!1),u.post(`${j}`,{propId:c},p()).then(function(l){var o,i;q(l==null?void 0:l.data),$((i=(o=l==null?void 0:l.data)==null?void 0:o.data)==null?void 0:i.demandList[N]),x(!1)}).catch(function(l){d(!0),x(!1)})};n.useEffect(()=>{P()},[]);const w=l=>{const o={propId:c,demandId:b,generalTax:(l==null?void 0:l.generalTax)||0,roadTax:l==null?void 0:l.roadTax,firefightingTax:l==null?void 0:l.firefightingTax,educationTax:l==null?void 0:l.educationTax,waterTax:l==null?void 0:l.waterTax,vSanitationTax:l==null?void 0:l.vSanitationTax,sewarageTax:l==null?void 0:l.sewarageTax,treeTax:l==null?void 0:l.treeTax,professionalTax:l==null?void 0:l.professionalTax,tax1:l==null?void 0:l.tax1,spEducationTax:l==null?void 0:l.spEducationTax,waterBenefit:l==null?void 0:l.waterBenefit,waterBill:l==null?void 0:l.waterBill,spWaterCess:l==null?void 0:l.spWaterCess,drainCess:l==null?void 0:l.drainCess,majorBuilding:l==null?void 0:l.majorBuilding,openPloatTax:l==null?void 0:l.openPloatTax,totalTax:l==null?void 0:l.totalTax,ReceiptNo:l==null?void 0:l.ReceiptNo,agingAmt:l==null?void 0:l.agingAmt,amount:l==null?void 0:l.amount,bankName:l==null?void 0:l.bankName,bookNo:l==null?void 0:l.bookNo,branchName:l==null?void 0:l.branchName,chequeNo:l==null?void 0:l.chequeNo,cleanlinessTax:l==null?void 0:l.cleanlinessTax,clearStatus:l==null?void 0:l.clearStatus,lightCess:l==null?void 0:l.lightCess,maintananceAmt:l==null?void 0:l.maintananceAmt,penalty:l==null?void 0:l.penalty,tax2:l==null?void 0:l.tax2,tax3:l==null?void 0:l.tax3,tranDate:l==null?void 0:l.tranDate,nonAgriTax:l==null?void 0:l.nonAgriTax,paymentMode:l==null?void 0:l.paymentMode};u.post(`${g}`,o,p()).then(i=>{i.data.status?(h("Demand Updated Successfully"),y(`/paymentReceipt/${i.data.data.transactionId}/holding`)):h("Failed to update demand")}).catch(i=>{})},F=l=>{l.target.name,l.target.value};return T?e.jsx(e.Fragment,{children:e.jsx(E,{})}):f?e.jsx(k,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"font-bold text-2xl ml-4  text-gray-600 mb-8 mt-2",children:e.jsx("h1",{children:"Update Holding Demand Details"})}),e.jsxs("p",{className:"py-2 px-2 font-semibold ",children:["Financial Year -  ",e.jsxs("span",{className:"text-blue-600 font-semibold",children:[" ",m==null?void 0:m.fyear," "]})]}),e.jsx("div",{className:"container mt-2",children:e.jsxs("form",{onSubmit:s.handleSubmit,onChange:F,children:[e.jsxs("div",{className:"grid grid-cols-7 w-full bg-white py-2 px-2 rounded-md shadow-md",children:[e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["General Tax",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("generalTax"),type:"number",placeholder:"General Tax",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.generalTax&&s.errors.generalTax?s.errors.generalTax:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Road Tax",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("roadTax"),type:"number",placeholder:"Road Tax",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.roadTax&&s.errors.roadTax?s.errors.roadTax:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Sewage Tax",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("sewarageTax"),type:"number",placeholder:"Sewage Tax",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.sewarageTax&&s.errors.sewarageTax?s.errors.sewarageTax:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Firefighting Tax",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("firefightingTax"),type:"number",placeholder:"Firefighting Tax",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.firefightingTax&&s.errors.firefightingTax?s.errors.firefightingTax:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Water Benefit",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("waterBenefit"),type:"number",placeholder:"Water Benefit",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.waterBenefit&&s.errors.waterBenefit?s.errors.waterBenefit:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Education Tax",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("educationTax"),type:"number",placeholder:"Education Tax",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.educationTax&&s.errors.educationTax?s.errors.educationTax:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["V. Sanitation Tax",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("cleanlinessTax"),type:"number",placeholder:"Sanitation Tax",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.cleanlinessTax&&s.errors.cleanlinessTax?s.errors.cleanlinessTax:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Tree Tax",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("treeTax"),type:"number",placeholder:"Tree Tax",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.treeTax&&s.errors.treeTax?s.errors.treeTax:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Professional Tax",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("professionalTax"),type:"number",placeholder:"Professional Tax",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.professionalTax&&s.errors.professionalTax?s.errors.professionalTax:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["State Education Tax",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("spEducationTax"),type:"number",placeholder:"State Education Tax",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.spEducationTax&&s.errors.spEducationTax?s.errors.spEducationTax:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Water Tax",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("waterTax"),type:"number",placeholder:"Water Tax",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.waterTax&&s.errors.waterTax?s.errors.waterTax:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Big Building",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("majorBuilding"),type:"number",placeholder:"Big Building",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.majorBuilding&&s.errors.majorBuilding?s.errors.majorBuilding:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Non Agricultural Tax",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("nonAgriTax"),type:"number",placeholder:"Non Agricultural Tax",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.nonAgriTax&&s.errors.nonAgriTax?s.errors.nonAgriTax:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Open Plot Tax",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("openPloatTax"),type:"number",placeholder:"open plot tax",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.openPloatTax&&s.errors.openPloatTax?s.errors.openPloatTax:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Water Bill",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("waterBill"),type:"number",placeholder:"Water Bill",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.waterBill&&s.errors.waterBill?s.errors.waterBill:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Sp Water Cess",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("spWaterCess"),type:"number",placeholder:"Sp Water Cess",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.spWaterCess&&s.errors.spWaterCess?s.errors.spWaterCess:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Drain Cess",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("drainCess"),type:"number",placeholder:"Drain Cess",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.drainCess&&s.errors.drainCess?s.errors.drainCess:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Aging Amount",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("agingAmt"),type:"number",placeholder:"Aging Amount",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.agingAmt&&s.errors.agingAmt?s.errors.agingAmt:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Total tax ",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("amount"),type:"number",placeholder:"Amount",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.amount&&s.errors.amount?s.errors.amount:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Light Cess",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("lightCess"),type:"number",placeholder:"light Cess",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.lightCess&&s.errors.lightCess?s.errors.lightCess:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Maintanance Amt",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("maintananceAmt"),type:"number",placeholder:"maintanance Amt",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.maintananceAmt&&s.errors.maintananceAmt?s.errors.maintananceAmt:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Penalty",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("penalty"),type:"number",placeholder:"penalty",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.penalty&&s.errors.penalty?s.errors.penalty:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Art 267 (a) According to the penalty",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("tax1"),type:"number",placeholder:"Tax 1",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.tax1&&s.errors.tax1?s.errors.tax1:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Warrant Fee/ Notice Fee",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("tax2"),type:"number",placeholder:"tax2",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.tax2&&s.errors.tax2?s.errors.tax2:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Other Taxes",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("tax3"),type:"number",placeholder:"tax3",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.tax3&&s.errors.tax3?s.errors.tax3:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Total Payment",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("totalTax"),type:"number",placeholder:"Total Tax",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.totalTax&&s.errors.totalTax?s.errors.totalTax:null})]})]}),e.jsx("div",{className:" px-2 py-2 text-lg font-semibold",children:"Transaction Details"}),e.jsxs("div",{className:"grid grid-cols-7 w-full bg-white py-2 px-2 rounded-md shadow-md",children:[e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Receipt No",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("ReceiptNo"),type:"text",placeholder:"Receipt No",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.ReceiptNo&&s.errors.ReceiptNo?s.errors.ReceiptNo:null})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Book No",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("bookNo"),type:"text",placeholder:"book No",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.bookNo&&s.errors.bookNo?s.errors.bookNo:null})]}),e.jsxs("div",{className:"form-group mb-6 md:px-4",children:[e.jsxs("label",{required:!0,className:`${r} `,children:["Payment Mode",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline",children:"*"})]}),e.jsxs("select",{...s.getFieldProps("paymentMode"),className:`${a}`,children:[e.jsx("option",{value:"",label:"Select"}),e.jsx("option",{value:"CASH",label:"CASH"}),e.jsx("option",{value:"CHEQUE",label:"CHEQUE"}),e.jsx("option",{value:"DD",label:"DD"}),e.jsx("option",{value:"NEFT",label:"NEFT"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.paymentMode&&s.errors.paymentMode?s.errors.paymentMode:null})]}),["CHEQUE","DD"].includes(s.values.paymentMode)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-group mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Bank Name",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("bankName"),type:"text",placeholder:"Bank Name",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.bankName&&s.errors.bankName?s.errors.bankName:null})]}),e.jsxs("div",{className:"form-group mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Branch Name",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("branchName"),type:"text",placeholder:"Branch Name",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.branchName&&s.errors.branchName?s.errors.branchName:null})]}),e.jsxs("div",{className:"form-group mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Cheque No",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("chequeNo"),type:"number",placeholder:"Cheque No",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.chequeNo&&s.errors.chequeNo?s.errors.chequeNo:null})]}),e.jsxs("div",{className:"form-group mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Clear Status",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline",children:"*"})]}),e.jsxs("select",{...s.getFieldProps("clearStatus"),className:`${a}`,children:[e.jsx("option",{value:"",label:"Select Clear Status",disabled:!0}),e.jsx("option",{value:"clear",label:"Clear"}),e.jsx("option",{value:"pending",label:"Pending"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.clearStatus&&s.errors.clearStatus?s.errors.clearStatus:null})]})]}),e.jsxs("div",{className:"form-group  mb-6 md:px-4",children:[e.jsxs("label",{className:`${r}`,children:["Transaction Date",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...s.getFieldProps("tranDate"),type:"date",placeholder:"tranDate",className:`${a}`}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.tranDate&&s.errors.tranDate?s.errors.tranDate:null})]})]}),e.jsx("div",{className:"w-full m-2 text-right",children:e.jsx("button",{type:"submit",className:"capitalize hover:shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 focus:outline-none max-w-[144px] whitespace-pre-wrap ",children:"Save"})})]})})]})};export{U as default};
