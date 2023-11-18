import{r as d,u as $,A as R,a as Y,j as e,Q as I,d as oe}from"./index-33b98be8.js";import{M as z}from"./index-49062fd3.js";import{n as k,g as ne,a as re,s as ce}from"./PowerupFunctions-93317dcd.js";import{R as Q}from"./RentalApiList-11c9fe2f.js";import{L as W}from"./Loader-12e2b737.js";import{u as G}from"./formik.esm-8dc9d4c8.js";import{c as H,b as u}from"./object-6ddc155b.js";import{W as ie}from"./react-tooltip.min-b443648d.js";import"./index-387d7a00.js";function de(s){var T,M;const{api_shopPaymentByCash:q,api_getSelectedFinancialYearAmount:g,api_shopPaymentByChequeDD:p,api_shopPaymentOnline:C}=Q(),[y,f]=d.useState(!1);d.useState(!1);const[m,n]=d.useState(),[c,N]=d.useState(!1),[w,D]=d.useState(),[x,j]=d.useState(),[a,b]=d.useState(""),[h,S]=d.useState(""),[F,P]=d.useState();$();const A=(t,i)=>{I.dismiss(),i=="success"&&I.success(t),i=="error"&&I.error(t)};let E;m=="CASH"&&(E=H({paymentMode:u().required("select payment mode"),financialYearTo:u().required("select financial year")})),m=="CHEQUE"&&(E=H({paymentMode:u().required("select payment mode"),financialYearTo:u().required("select financial year"),bankName:u().required("Enter bank name"),branchName:u().required("Enter branch name"),chequeNo:u().required("Enter cheque no."),chequeDDPhoto:u().required("select photo"),chequeDdDate:u().required("Enter Date")})),m=="DD"&&(E=H({paymentMode:u().required("select payment mode"),financialYearTo:u().required("select financial year"),bankName:u().required("Enter bank name"),branchName:u().required("Enter branch name"),ddNo:u().required("Enter DD no."),chequeDDPhoto:u().required("select photo"),chequeDdDate:u().required("Enter Date")}));const o=G({initialValues:{paymentMode:"",bankName:"",branchName:"",chequeNo:"",ddNo:"",financialYearTo:"",chequeDDPhoto:"",chequeDdDate:""},enableReinitialize:!0,onSubmit:(t,i)=>{console.log("values at submit payment",t),_(t)},validationSchema:E}),B=()=>{s.closeModal()};console.log("master data...2",w);const L=t=>{f(!0),console.log("data---12",t);const i={shopId:s==null?void 0:s.shopId,toFYear:t};R.post(g,i,Y()).then(l=>{console.log("calculated amount",l.data.data),j(l.data.data),f(!1)}).catch(l=>{console.log(l),f(!1)})},O=t=>{let i=t.target.name,l=t.target.value;i=="chequeDDPhoto"&&V(i,t.target.files[0]),i=="financialYearTo"&&L(l),i=="paymentMode"&&n(l),i=="payAdvance"&&N(t.target.checked),i=="amount"&&o.setFieldValue("amount",re(l,o.values.amount,8))},V=(t,i)=>{console.log("name ,fileData ",t,i),b(i),t=="chequeDDPhoto"&&o.setFieldValue("chequeDDPhoto",i);const l=new FileReader;l.onloadend=()=>{t=="chequeDDPhoto"&&S(l.result)},l.readAsDataURL(i)},_=t=>{f(!0);let i,l;m=="ONLINE"&&(i=C,l={shopId:s==null?void 0:s.shopId,toFYear:t==null?void 0:t.financialYearTo,paymentMode:t==null?void 0:t.paymentMode}),m=="CASH"&&(i=q,l={shopId:s==null?void 0:s.shopId,toFYear:t==null?void 0:t.financialYearTo,paymentMode:t==null?void 0:t.paymentMode}),(m=="CHEQUE"||m=="DD")&&(i=p,l={shopId:s==null?void 0:s.shopId,toFYear:t==null?void 0:t.financialYearTo,paymentMode:t==null?void 0:t.paymentMode,bankName:t==null?void 0:t.bankName,chequeNo:t==null?void 0:t.chequeNo,ddNo:t==null?void 0:t.ddNo,branchName:t==null?void 0:t.branchName,photo:t==null?void 0:t.chequeDDPhoto,chequeDdDate:t==null?void 0:t.chequeDdDate}),console.log("before make payment..",l),R.post(i,l,Y()).then(function(r){var v,Z,J,K,X,ee,te,le,se,ae;console.log(" payment response...",(v=r==null?void 0:r.data)==null?void 0:v.data),((Z=r==null?void 0:r.data)==null?void 0:Z.status)===!0?(A((J=r==null?void 0:r.data)==null?void 0:J.message,"success"),console.log("status",(X=(K=r==null?void 0:r.data)==null?void 0:K.data)==null?void 0:X.paymentUrl),((te=(ee=r==null?void 0:r.data)==null?void 0:ee.data)==null?void 0:te.paymentUrl)!=null?window.location.href=(se=(le=r==null?void 0:r.data)==null?void 0:le.data)==null?void 0:se.paymentUrl:(s==null||s.closeModal(),s==null||s.fetchDetailsByIdFun())):(A((ae=r==null?void 0:r.data)==null?void 0:ae.message,"error"),s.closeModal()),f(!1)}).catch(function(r){console.log(" payment error..",r),f(!1)})};return console.log("list detail in card",F),e.jsxs(e.Fragment,{children:[y&&e.jsx(W,{}),e.jsx("div",{className:"  p-4  w-full md:py-4 md:px-40 md:pb-0 md:pt-0 rounded-lg shadow-lg bg-white md:w-full mx-auto   overflow-y-auto",children:e.jsxs("div",{className:" block p-4 w-full md:py-6 rounded-lg bg-white mx-auto  ",children:[e.jsx("h1",{className:" text-gray-600 text-md capitalize font-bold",children:"Payment Process"}),e.jsx("h1",{className:" text-gray-400 text-sm  mb-4",children:"Seamless Payments: Making transactions effortless."}),e.jsx("div",{className:"border-b"}),e.jsxs("div",{className:"flex space-x-8 justify-between mt-4 text-xs",children:[e.jsxs("h1",{className:"mb-2 text-gray-600 text-sm",children:[" Amount - ",e.jsxs("span",{className:"font-semibold text-sm text-gray-800",children:["Rs. ",k((T=s.listDetails)==null?void 0:T.pendingAmount)]})]}),e.jsxs("h1",{className:"mb-2 text-gray-600 text-sm",children:["Payable Amount  - ",e.jsxs("span",{className:"font-semibold text-sm text-gray-800",children:["Rs. ",k(x==null?void 0:x.amount)]})]})]}),e.jsxs("form",{onSubmit:o.handleSubmit,onChange:O,className:"p-4 relative",children:[e.jsxs("div",{className:"grid grid-cols-12 gap-3",children:[e.jsxs("div",{className:"form-group mb-6 col-span-6 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e.jsx("small",{className:" mt-1 text-xs font-semibold text-red-600 inline ",children:"*"}),"Payment Mode"]}),e.jsxs("select",{...o.getFieldProps("paymentMode"),className:"form-control block text-xs w-full px-3 py-1.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[e.jsx("option",{children:"Select"}),e.jsx("option",{value:"ONLINE",children:"Online"}),e.jsx("option",{value:"CASH",children:"Cash"}),e.jsx("option",{value:"CHEQUE",children:"Cheque"}),e.jsx("option",{value:"DD",children:"DD"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.paymentMode&&o.errors.paymentMode?o.errors.paymentMode:null})]}),e.jsxs("div",{className:"form-group mb-6 col-span-6 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e.jsx("small",{className:" mt-1 text-xs font-semibold text-red-600 inline ",children:"*"}),"Financial Year"]}),e.jsxs("select",{...o.getFieldProps("financialYearTo"),className:"form-control block w-full px-3 py-1.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[e.jsx("option",{children:"Select"}),(M=s==null?void 0:s.financialYrList)==null?void 0:M.map(t=>e.jsx("option",{value:t==null?void 0:t.id,children:t==null?void 0:t.financialYear}))]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.financialYearTo&&o.errors.financialYearTo?o.errors.financialYearTo:null})]})]}),e.jsxs("div",{className:"grid grid-cols-12",children:[(m=="CHEQUE"||m=="DD")&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e.jsx("small",{className:" mt-1 text-xs font-semibold text-red-600 inline ",children:"*"}),"Bank Name"]}),e.jsx("input",{...o.getFieldProps("bankName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter new ward no."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.bankName&&o.errors.bankName?o.errors.bankName:null})]}),e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e.jsx("small",{className:" mt-1 text-xs font-semibold text-red-600 inline ",children:"*"}),"Branch Name"]}),e.jsx("input",{...o.getFieldProps("branchName"),type:"text",className:"form-control block w-full px-3 py-1.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter new ward no."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.branchName&&o.errors.branchName?o.errors.branchName:null})]}),e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e.jsx("small",{className:" mt-1 text-xs font-semibold text-red-600 inline ",children:"*"}),m=="CHEQUE"?"Check Date":"DD Date"]}),e.jsx("input",{type:"date",...o.getFieldProps("chequeDdDate"),min:ne(),className:"form-control block w-full px-3 py-1.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter new ward no."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.chequeDdDate&&o.errors.chequeDdDate?o.errors.chequeDdDate:null})]})]}),m=="CHEQUE"&&e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e.jsx("small",{className:" mt-1 text-xs font-semibold text-red-600 inline ",children:"*"}),"Cheque No."]}),e.jsx("input",{...o.getFieldProps("chequeNo"),type:"text",className:"form-control block w-full px-3 py-1.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.chequeNo&&o.errors.chequeNo?o.errors.chequeNo:null})]}),m=="DD"&&e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e.jsx("small",{className:" mt-1 text-xs font-semibold text-red-600 inline ",children:"*"}),"DD No."]}),e.jsx("input",{...o.getFieldProps("ddNo"),type:"text",className:"form-control block w-full px-3 py-1.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.ddNo&&o.errors.ddNo?o.errors.ddNo:null})]}),(m=="CHEQUE"||m=="DD")&&e.jsxs("div",{className:"form-group  col-span-12 md:col-span-6 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[e.jsx("small",{className:" mt-1 text-xs font-semibold text-red-600 inline ",children:"*"}),"Upload Photo"]}),e.jsx("input",{type:"file",name:"chequeDDPhoto",className:"form-control block w-full px-3 py-1.5 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",onChange:o.handleChange}),e.jsx("img",{src:"".concat(h),alt:"Upload img",className:"h-20"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.chequeDDPhoto&&o.errors.chequeDDPhoto?o.errors.chequeDDPhoto:null})]}),e.jsx("div",{className:"col-span-12"}),e.jsx("div",{className:"col-span-12  mx-auto mt-10 ",children:e.jsxs("div",{className:"",children:[e.jsx("button",{type:"submit",className:" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"Pay "}),e.jsx("button",{type:"submit",className:"ml-4 px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-500 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",onClick:B,children:"Cancel"})]})})]})]})]})})]})}function me(s){var j;console.log("shop id",s==null?void 0:s.shopId);const[q,g]=d.useState(!1),[p,C]=d.useState(),{api_postUpdateOrReportedShop:y,api_getShopMasterType:f}=Q(),m=(a,b)=>{I.dismiss(),b=="success"&&I.success(a),b=="error"&&I.error(a)};H({contactNo:u().required("Enter mobile no.").min(10,"Enter 10 digit number").max(10,"Enter 10 digit number")});const c=G({initialValues:{contactNo:"",remarks:"",rentType:"",zoneId:""},onSubmit:a=>{console.log("form values",a),w(a)}});d.useEffect(()=>{N(),g(!0)},[]);const N=()=>{R.post(f,{},Y()).then(a=>{var b;console.log("master data type",a.data.data),C((b=a==null?void 0:a.data)==null?void 0:b.data),g(!1)}).catch(a=>{console.log(a),g(!1)})},w=a=>{g(!0);let b={shopId:s==null?void 0:s.shopId,contactNo:a==null?void 0:a.contactNo,rentType:a==null?void 0:a.rentType,circleId:a==null?void 0:a.zoneId,remarks:a==null?void 0:a.remarks};R.post(y,b,Y()).then(h=>{var S,F,P;console.log("response ",h.data),((S=h==null?void 0:h.data)==null?void 0:S.status)===!0?(m((F=h==null?void 0:h.data)==null?void 0:F.message,"success"),s==null||s.fetchDetailsByIdFun(),s==null||s.closeModal()):m((P=h==null?void 0:h.data)==null?void 0:P.message,"error"),g(!1)}).catch(h=>{console.log(h)})},D=a=>{let b=a.target.name,h=a.target.value;b=="contactNo"&&c.setFieldValue("contactNo",allowNumberInput(h,c.values.contactNo,10))},x=()=>{s==null||s.closeModal()};return e.jsxs(e.Fragment,{children:[q&&e.jsx(W,{}),e.jsx("div",{className:"container",children:e.jsx("form",{onSubmit:c.handleSubmit,onChange:D,children:e.jsxs("div",{className:"bg-white p-2 ",children:[e.jsxs("div",{className:"grid grid-cols-12 w-full border-b flex border-gray-300",children:[e.jsx("svg",{id:"report_id","data-tooltip-content":"Report problem",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 ml-0 md:ml-3 lg:ml-3  mt-1 text-red-600  ",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})}),e.jsx("h1",{className:"text-lg text-gray-500 font-semibold mb-2 ml-2",children:"Update"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"grid grid-cols-12 w-full  ",children:[e.jsxs("div",{className:"form-group col-span-12 md:col-span-4 mb-2 md:px-6 ",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-xs font-semibold",children:"Contact No."}),e.jsx("input",{...c.getFieldProps("contactNo"),type:"text",className:"text-xs appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 focus:bg-white ring-0 "}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:c.touched.contactNo&&c.errors.contactNo?c.errors.contactNo:null})]}),e.jsxs("div",{className:"form-group col-span-12 md:col-span-4 mb-2 md:px-6 -mt-4 ",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-xs font-semibold",children:"Zone"}),e.jsxs("select",{...c.getFieldProps("zoneId"),className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[e.jsx("option",{value:"",selected:!0,disabled:!0,children:"Select"}),(j=p==null?void 0:p.circleList)==null?void 0:j.map(a=>e.jsx("option",{value:a==null?void 0:a.id,children:a==null?void 0:a.circle_name}))]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:c.touched.zoneId&&c.errors.zoneId?c.errors.zoneId:null})]}),e.jsxs("div",{className:"form-group col-span-12 md:col-span-4 mb-2 md:px-6 ",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-xs font-semibold",children:"Rent Type"}),e.jsxs("select",{...c.getFieldProps("rentType"),className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[e.jsx("option",{value:"",selected:!0,disabled:!0,children:"Select"}),e.jsx("option",{value:"Shop Rent",children:"Shop Rent"}),e.jsx("option",{value:"Plot Rent",children:"Plot Rent"}),e.jsx("option",{value:"Building Rent",children:"Building Rent"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:c.touched.rentType&&c.errors.rentType?c.errors.rentType:null})]}),e.jsxs("div",{className:"form-group col-span-12 md:col-span-12 mb-6 md:px-6",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-xs font-semibold w-full",children:"Remark"}),e.jsx("textarea",{name:"remarks",onChange:c.handleChange,value:c.values.remarks,className:"border text-xs  p-2 w-full h-24",placeholder:"Remark..."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:c.touched.remarks&&c.errors.remarks?c.errors.remarks:null})]})]}),e.jsxs("div",{className:"w-full m-2 text-right",children:[e.jsx("button",{type:"submit",className:"capitalize hover:shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-md text-xs px-5 py-2 mr-2 mb-2 focus:outline-none max-w-[144px] whitespace-pre-wrap",children:"Save"}),e.jsx("button",{type:"button",className:"capitalize hover:shadow-md text-white bg-red-400 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-xs px-5 py-2 mr-2 mb-2 focus:outline-none max-w-[144px] whitespace-pre-wrap",onClick:x,children:"Close"})]})]})]})})})]})}function xe(s){var w,D;const[q,g]=d.useState(!1);d.useState(!1),d.useState();const[p,C]=d.useState();d.useState();const[y,f]=d.useState(),m=$(),n=G({initialValues:{financialYearTo:""},enableReinitialize:!0,onSubmit:(x,j)=>{console.log("values at submit payment",x)}}),c=()=>{s.closeModal()};console.log("master data...2",p);const N=x=>{let j=x.target.name,a=x.target.value;j=="financialYearTo"&&f(a)};return console.log("financial year",y),e.jsxs(e.Fragment,{children:[q&&e.jsxs("p",{className:"text-red-500 text-lg font-bold absolute top-1/2 left-1/2 z-20",children:[" ",ce()]}),e.jsx("div",{className:"  p-4  w-full md:py-4 md:px-40 md:pb-0 md:pt-0 rounded-lg shadow-lg bg-white md:w-full mx-auto   overflow-y-auto",children:e.jsxs("div",{className:" block p-4 w-full md:py-6 rounded-lg bg-white mx-auto  ",children:[e.jsx("h1",{className:" text-gray-600 text-lg capitalize",children:"Demand Receipt"}),e.jsx("h1",{className:" text-gray-400 text-sm  mb-4",children:"Seamless Payments: Making transactions effortless."}),e.jsx("div",{className:"border-b"}),e.jsx("div",{className:"flex space-x-8 justify-between mt-4",children:e.jsxs("h1",{className:"mb-2 text-gray-600 px-8 text-lg",children:["Amount - ",e.jsxs("span",{className:"font-semibold text-md text-gray-800",children:["Rs. ",k((w=s.listDetails)==null?void 0:w.pendingAmount)]})]})}),e.jsxs("form",{onSubmit:n.handleSubmit,onChange:N,className:"p-4 relative",children:[e.jsx("div",{className:"grid grid-cols-12",children:e.jsxs("div",{className:"form-group mb-6 col-span-12 md:col-span-12 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-xs font-semibold",children:[e.jsx("small",{className:" mt-1 text-xs font-semibold text-red-600 inline ",children:"*"}),"Financial Year"]}),e.jsxs("select",{...n.getFieldProps("financialYearTo"),className:"form-control block text-xs w-full px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer",children:[e.jsx("option",{children:"Select"}),(D=s==null?void 0:s.financialYrList)==null?void 0:D.map(x=>e.jsx("option",{value:x==null?void 0:x.id,children:x==null?void 0:x.financialYear}))]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:n.touched.financialYearTo&&n.errors.financialYearTo?n.errors.financialYearTo:null})]})}),e.jsx("div",{className:"col-span-12  mx-auto mt-10 ",children:e.jsxs("div",{className:"",children:[y!=null&&e.jsx("button",{type:"submit",className:" px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",onClick:()=>m("/demand-receipt/".concat(s==null?void 0:s.shopId,"/").concat(y)),children:"Demand Receipt"}),e.jsx("button",{type:"submit",className:"ml-4 px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-500 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",onClick:c,children:"Cancel"})]})})]})]})})]})}const U={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"gray",border:"none",overflowY:"scroll"}};z.setAppElement("#root");function we(){var t,i;const{api_getShopDetailsById:s,api_getShopReceiptData:q}=Q(),{id:g}=oe(),p=$();let C="text-md text-[#454646] opacity-80 font-semibold ",y="text-sm text-[#454646] opacity-80 capitalize";const[f,m]=d.useState(!1),[n,c]=d.useState(),[N,w]=d.useState(),[D,x]=d.useState(!1),j=()=>x(!0),a=()=>x(!1),b=()=>{},[h,S]=d.useState(!1),F=()=>S(!0),P=()=>S(!1),A=()=>{},[E,o]=d.useState(!1),B=()=>o(!0),L=()=>o(!1),O=()=>{},V=l=>{console.log("application id in modal",l),j()},_=l=>{console.log("application id in modal",l),B()},T=()=>{F()};d.useEffect(()=>{M()},[g]);const M=()=>{m(!0);let l=s;const r={id:g};console.log("request body category id",r),R.post("".concat(l),r,Y()).then(function(v){console.log("application details by id",v.data.data.fYear),c(v.data.data),w(v.data.data.fYear),m(!1)}).catch(function(v){console.log("errorrr.... ",v),m(!1)})};return e.jsxs(e.Fragment,{children:[f&&e.jsx(W,{}),e.jsx("div",{className:"h-auto bg-[#FDFCFE] flex flex-row flex-wrap justify-center items-center p-3",children:e.jsxs("div",{className:"bg-white shadow-xl rounded-tl-[44px]  h-full sm:w-1/2 lg:w-1/3 w-full rounded-xl p-2",children:[e.jsxs("div",{className:"bg-[#5846BE] h-28 w-full mx-auto rounded-br-[68px] rounded-tl-[44px]  opacity-90",children:[e.jsxs("div",{className:"p-4 pt-10",children:[e.jsx("h1",{className:"text-gray-50 font-bold capitalize text-2xl",children:"Shop Details"}),e.jsx("h1",{className:"text-gray-50 capitalize text-[12px]",children:"Budgeting Essentials: Shop Rent Payment"})]}),e.jsxs("div",{className:"col-span-6 ",children:[e.jsx(ie,{anchorId:"report_id"}),e.jsx("button",{className:"float-right",onClick:T,children:e.jsx("svg",{id:"report_id","data-tooltip-content":"Update",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8 mt-1 p-1  text-red-600 bg-red-100 rounded-full border border-red-600 ",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})})})]})]}),e.jsxs("div",{className:"bg-[#FDFCFE] shadow-lg rounded-lg  w-full mt-5 p-2",children:[e.jsx("div",{class:" flex-shrink space-x-2 max-w-full px-4 w-full md:w-full mb-3 border-b ",children:e.jsxs("h1",{className:"flex space-x-1 text-xl text-[#454646] opacity-80 ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"})}),e.jsx("span",{className:" text-[#161717] text-sm",children:"Basic Details"})]})}),(t=n==null?void 0:n.shopDetails)==null?void 0:t.map((l,r)=>e.jsxs("div",{class:" flex-shrink space-x-2 max-w-full px-4 w-full md:w-full mb-2 text-xs ",children:[e.jsxs("label",{className:"".concat(C," mb-2 "),children:[k(l==null?void 0:l.displayString)," -"]}),e.jsx("label",{className:"".concat(y," text-xs"),children:k(l==null?void 0:l.value)})]},r))]}),e.jsxs("div",{className:"bg-[#FDFCFE] shadow-lg rounded-lg  w-full mt-5 p-2 ",children:[e.jsx("div",{className:"col-span-2 text-center bg-indigo-100 px-1 py-1 mb-2 ",children:e.jsxs("span",{className:"font-semibold text-xs text-center text-[#454646] uppercase ",children:[" Total Demand -",e.jsxs("span",{className:"",children:[" Rs. ",n==null?void 0:n.total]})]})}),e.jsx("div",{className:"col-span-2 text-center bg-indigo-100 px-1 py-1 mb-2",children:e.jsxs("span",{className:"font-semibold text-xs text-center text-[#454646] uppercase ",children:["Paid Amount - Rs. ",e.jsx("span",{className:"",children:n==null?void 0:n.totalPaid})," "]})}),e.jsx("div",{className:"col-span-2 text-center bg-indigo-100 px-1 py-1 mb-2",children:e.jsxs("span",{className:"font-semibold text-xs text-center text-[#454646] uppercase ",children:["Pending Amount - Rs. ",e.jsx("span",{className:"",children:n==null?void 0:n.pendingAmount})]})}),e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[(n==null?void 0:n.pendingAmount)!=0&&e.jsx("div",{className:"col-span-2 text-center",children:e.jsx("button",{className:"bg-indigo-500 border-2 w-full border-indigo-500 hover:bg-indigo-600 px-2 py-0.5 text-white font-semibold  rounded leading-5 shadow-lg shadow-gray-300 text-xs",onClick:()=>_(g),children:"Demand Receipt"})}),(n==null?void 0:n.pendingAmount)!=0&&e.jsx("div",{className:"col-span-2 text-center",children:e.jsx("button",{className:"bg-green-500 border-2 w-full border-green-500 hover:bg-green-600 px-4 py-0.5 text-white font-semibold  rounded leading-5 shadow-lg shadow-gray-300 text-xs",onClick:()=>V(g),children:"Pay Now"})})]})]}),e.jsx("div",{className:"bg-[#FDFCFE] shadow-lg rounded-lg  w-full mt-5  ",children:e.jsxs("div",{class:"",children:[e.jsx("div",{class:" flex-shrink space-x-2 max-w-full px-4 w-full md:w-full mb-3 border-b ",children:e.jsxs("h1",{className:"flex space-x-1 text-md text-[#454646] opacity-80 ",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"})}),e.jsx("span",{className:"-mt-1 text-[#161717]",children:"Financial Year Wise Demand"})]})}),e.jsx("div",{class:"overflow-x-auto p-3",children:e.jsxs("table",{class:"w-full table-auto",children:[e.jsx("thead",{class:"bg-indigo-100    text-gray-400 ",children:e.jsxs("tr",{className:"text-xs",children:[e.jsx("th",{class:"",children:e.jsx("div",{class:"text-[#454646] ",children:"#"})}),e.jsx("th",{class:"p-2",children:e.jsx("div",{class:"text-[#454646] ",children:"Financial Year"})}),e.jsx("th",{class:"p-2",children:e.jsx("div",{class:"text-[#454646] ",children:"Generated Demand"})}),e.jsx("th",{class:"p-2",children:e.jsx("div",{class:"text-[#454646] ",children:"Payment Date"})}),e.jsx("th",{class:"p-2",children:e.jsx("div",{class:"text-[#454646] ",children:"Payment Status"})})]})}),e.jsx("tbody",{class:"",children:(i=n==null?void 0:n.demands)==null?void 0:i.map((l,r)=>e.jsxs("tr",{className:"".concat((l==null?void 0:l.payment_status)==1?"text-green-500  divide-y divide-gray-100":"text-[#454646] divide-y divide-gray-100 text-xs"),children:[e.jsx("td",{class:"p-2",children:e.jsx("div",{class:" text-center text-xs ",children:r+1})}),e.jsx("td",{class:"p-2",children:e.jsx("div",{class:" text-center text-xs",children:k(l==null?void 0:l.financial_year)})}),e.jsx("td",{class:"p-2",children:e.jsxs("div",{class:"text-center text-xs",children:["Rs. ",k(l==null?void 0:l.amount)]})}),e.jsx("td",{class:"p-2",children:e.jsx("div",{class:"text-center text-xs ",children:k(l==null?void 0:l.payment_date)})}),e.jsx("td",{class:"p-2",children:e.jsx("div",{class:"text-center text-xs ",children:(l==null?void 0:l.amount)==0?"NA":e.jsx(e.Fragment,{children:(l==null?void 0:l.payment_status)==1?e.jsx("button",{className:"capitalize border border-indigo-500 text-indigo-500 hover:bg-indigo-500 px-2 py-1 text-xs hover:text-white rounded-md",onClick:()=>p("/shop-receipt/".concat(l==null?void 0:l.tran_id)),children:"View Receipt "}):"Payment pending"})})})]}))})]})})]})})]})}),e.jsx(z,{isOpen:D,onAfterOpen:b,onRequestClose:a,style:U,contentLabel:"Example Modal",children:e.jsx("div",{className:"",style:{width:"auto",height:"170vw"},children:e.jsx("div",{className:"overflow-auto ",children:e.jsx(de,{listDetails:n,shopId:g,closeModal:a,fetchDetailsByIdFun:M,financialYrList:N})})})}),e.jsx(z,{isOpen:h,onAfterOpen:A,onRequestClose:P,style:U,contentLabel:"Example Modal",children:e.jsx("div",{className:"w-full",style:{height:"50%"},children:e.jsx("div",{className:"h-auto ",children:e.jsx(me,{closeModal:P,shopId:g,fetchDetailsByIdFun:M})})})}),e.jsx(z,{isOpen:E,onAfterOpen:O,onRequestClose:L,style:U,contentLabel:"Example Modal",children:e.jsx("div",{className:"",style:{width:"auto",height:"120vw"},children:e.jsx("div",{className:"overflow-auto ",children:e.jsx(xe,{listDetails:n,shopId:g,closeModal:L,fetchDetailsByIdFun:M,financialYrList:N})})})})]})}export{we as default};
