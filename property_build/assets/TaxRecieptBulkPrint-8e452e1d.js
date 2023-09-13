import{E as _,j as e,f as u,r as o,cI as L,a as M,k as q,l as Q,m as b,o as z,be as F,A as v,N as w,C as B,bR as E,bP as H}from"./index-378193f7.js";import{Q as O}from"./QrCode-16148d60.js";const W=({index:i,paymentData:s,type:m})=>{var x;let l=_();return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx("div",{className:"print:col-span-12",children:e.jsxs("div",{className:"print:absolute print:z-40 border-2 border-dashed border-gray-600 print:w-screen  bg-white p-2  h-auto  md:mx-auto lg:mx-auto  ",children:[e.jsxs("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 ",children:[e.jsx("div",{className:"",children:e.jsx("img",{src:l==null?void 0:l.ulb_logo,className:"h-20 mx-auto"})}),e.jsx("div",{className:"",children:e.jsx("img",{src:l==null?void 0:l.state_logo,alt:"",className:"w-[22rem] h-[22rem]  absolute z-10 bg-transparent opacity-20 mt-[16rem] ml-[10rem]  rounded-full border"})})]}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 pt-2",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-4xl text-center uppercase ",children:l==null?void 0:l.ulb_name})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 pt-4 ",children:e.jsx("div",{className:"mx-auto",children:e.jsx("div",{className:"",children:e.jsxs("div",{className:"flex flex-col items-center uppercase border-2 font-bold border-black px-10 py-2 text-xl",children:[e.jsx("span",{className:"",children:"Payment Reciept"}),e.jsx("span",{className:"text-base",children:"Holding Tax"})]})})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-1 text-md",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Receipt No. :"}),e.jsxs("h1",{className:"flex font-sans font-semibold  pl-2",children:[" ",s==null?void 0:s.transactionNo]})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Department/Section :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:s==null?void 0:s.departmentSection})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Account Description :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:s==null?void 0:s.accountDescription})]}),e.jsx("div",{className:"flex p-1 "})]}),e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Date :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:s==null?void 0:s.transactionDate})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Ward No. :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:s==null?void 0:s.newWardNo})]}),e.jsxs("div",{className:"flex p-1 ",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans ",children:[m=="Property"?"Holding No. :":"Application No. :"," "]}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:s==null?void 0:s.applicationNo})]}),e.jsx("div",{className:"flex p-1 ",children:"  "}),e.jsx("div",{className:"flex p-1 "}),e.jsx("div",{className:"flex p-1 ",children:"  "}),e.jsx("div",{className:"flex p-1 "})]})]})})}),e.jsx("div",{children:e.jsx("table",{className:"w-full  p-2 text-md",children:e.jsx("tr",{className:"",children:e.jsxs("td",{className:" ",children:[e.jsxs("div",{className:"flex p-1",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Received From Mr/Mrs/Miss :"}),e.jsx("h1",{className:"flex font-sans font-semibold  pl-2",children:s==null?void 0:s.customerName})]}),e.jsxs("div",{className:"flex p-1",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"Address :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:s==null?void 0:s.address})]}),e.jsxs("div",{className:"flex p-1",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"A Sum of :"}),e.jsx("h1",{className:"flex font-sans font-semibold pl-2 ",children:u(s==null?void 0:s.totalPaidAmount)})]}),e.jsxs("div",{className:"flex p-1",children:[e.jsx("h1",{className:"flex text-gray-900 font-sans ",children:"(in words) :"}),e.jsxs("h1",{className:"flex font-sans font-semibold pl-2 border-b border-dashed border-gray-600 ",children:[" ",s==null?void 0:s.paidAmtInWords," Rupees Only"]})]}),e.jsxs("div",{className:"flex p-1",children:[e.jsxs("h1",{className:"flex text-gray-900 font-sans ",children:["towards : ",e.jsx("span",{className:" font-sans font-semibold ml-1",children:s==null?void 0:s.towards})]}),e.jsxs("h1",{className:"flex text-gray-900 font-sans  ml-8 ",children:["Vide :  ",e.jsx("span",{className:" font-sans font-semibold ml-1",children:s==null?void 0:s.paymentMode})]})]})]})})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-3",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-md text-left ",children:"N.B. Online Payment/Cheque/Draft/Bankers Cheque are Subject to Realisation"})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 -mt-1",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-bold text-base text-left ",children:"HOLDING TAX DETAILS"})})}),e.jsx("div",{children:e.jsxs("table",{className:"w-full border border-gray-500 ",children:[e.jsxs("thead",{className:" w-full",children:[e.jsxs("tr",{className:"flex  text-md   ",children:[e.jsx("td",{className:" text-center border-r  w-48",children:e.jsx("h1",{className:" text-gray-900 font-sans ",children:"Description"})}),e.jsx("td",{className:"flex-1 text-center border border-gray-500",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"Period"})}),e.jsx("td",{className:" text-center  border-l w-48",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"Total Amount"})})]}),e.jsxs("tr",{className:"flex text-md ",children:[e.jsx("td",{className:"text-center w-48"}),e.jsx("td",{className:"flex-1 first-line:text-center border-b border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center border-r border-gray-500",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"From"})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans",children:"To"})})]})}),e.jsx("td",{className:"text-center border-l w-48"})]}),e.jsxs("tr",{className:"flex  text-md   border-b border-gray-500",children:[e.jsx("td",{className:"text-center w-48 ",children:" "}),e.jsx("td",{className:"flex-1 text-center  border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:"QTR"})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:"FY"})})]})}),e.jsx("td",{className:"flex-1   text-center",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" text-gray-900 font-sans border-r border-gray-500",children:"QTR"})}),e.jsx("td",{className:"flex-1 text-center",children:e.jsx("h1",{className:" text-gray-900 font-sans ",children:"FY"})})]})})]})}),e.jsx("td",{className:"text-center border-l w-48",children:" "})]})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{className:"flex  border-b border-gray-500  text-md ",children:[e.jsx("td",{className:" text-center w-48",children:e.jsx("h1",{className:" font-sans font-semibold ",children:"Holding Tax"})}),e.jsx("td",{className:"flex-1 text-center border-r border-l border-gray-500",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold  border-r border-gray-500 text-[0.7rem]",children:s==null?void 0:s.paidFromQtr})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:"font-sans font-semibold  border-r border-gray-500 text-[0.7rem]",children:s==null?void 0:s.paidFrom})})]})}),e.jsx("td",{className:"flex-1   text-center",children:e.jsxs("tr",{className:"flex  ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" font-sans font-semibold border-r border-gray-500 text-[0.7rem]",children:s==null?void 0:s.paidUptoQtr})}),e.jsx("td",{className:"flex-1 text-center",children:e.jsx("h1",{className:" font-sans font-semibold text-[0.7rem]",children:s==null?void 0:s.paidUpto})})]})})]})}),e.jsx("td",{className:"text-center border-l w-48",children:e.jsx("h1",{className:" font-sans font-semibold ",children:u(s==null?void 0:s.demandAmount)})})]}),(x=s==null?void 0:s.taxDetails)==null?void 0:x.map(d=>e.jsxs("tr",{className:"flex border-b border-gray-500  text-md ",children:[e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("h1",{className:" font-sans font-semibold ",children:" "})}),e.jsx("td",{className:"flex-1 text-center ",children:e.jsx("tr",{className:"flex",children:e.jsx("td",{className:"flex-1 text-right",colSpan:2,children:e.jsx("h1",{className:"-ml-16 font-sans font-semibold text-sm mr-2",children:d==null?void 0:d.keyString})})})}),e.jsx("td",{className:" text-center border-l border-gray-500 w-48",children:e.jsx("h1",{className:" font-sans font-semibold ",children:u(d==null?void 0:d.value)})})]}))]})]})}),e.jsx("div",{children:e.jsx("table",{className:"w-full mt-4 ",children:e.jsxs("tr",{className:"",children:[e.jsxs("td",{className:" ",children:[e.jsx("div",{className:"",children:e.jsx(O,{url:window.location.href,size:"64"})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-md",children:["For Details Please Visit : ",l==null?void 0:l.website]})}),e.jsx("div",{className:"flex ",children:e.jsxs("h1",{className:"flex text-gray-900 font-sans text-md",children:["Or Call us at ",l==null?void 0:l.mobile_no," or ",l==null?void 0:l.mobile_no_2]})})]}),e.jsxs("td",{className:"float-right mt-16",children:[e.jsx("div",{className:"flex ",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-md",children:"In Collaboration with"})}),e.jsx("div",{className:"flex",children:e.jsx("h1",{className:"flex text-gray-900 font-sans text-md",children:"Sri Publication & Stationers Pvt Ltd"})})]})]})})}),e.jsx("div",{className:"grid grid-col-1 md:grid-col-12 lg:grid-col-12 p-2 mt-2",children:e.jsx("div",{className:"",children:e.jsx("h1",{className:"font-semibold text-md text-center ",children:"**This is a computer-generated receipt and it does not require a signature.**"})})})]})})})})};function U(i){var l,x;const s=o.useRef(),m=()=>{window.print()};return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("div",{className:"md:px-0 flex-1 ",children:e.jsxs("button",{onClick:()=>m(),className:"float-right pl-4 pr-6 py-1 bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded  hover: focus: focus:outline-none focus:ring-0  active: transition duration-150 ease-in-out",children:[e.jsx(L,{className:"inline text-lg"}),"Print All"]})})}),e.jsx("div",{ref:s,id:"printableArea",className:"border border-red-500",children:(x=(l=i==null?void 0:i.data)==null?void 0:l.data)==null?void 0:x.map((d,f)=>e.jsx(W,{paymentData:d,index:f,type:i==null?void 0:i.type}))})]})})}const $=()=>{var p;const{get_MasterData:i,get_taxCollectorList:s,get_collectorList:m,searchTaxRecieptBulkPrint:l}=H();M();const[x,d]=o.useState(),[f,S]=o.useState(),[a,T]=o.useState(),[g,h]=o.useState(!1),[R,P]=o.useState("");q("Tax Reciept Bulk Print");const N="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",A=Q({fromDate:b().required("Field Required"),uptoDate:b().required("Field Required"),userId:b().required("Field Required")}),t=z({initialValues:{fromDate:F(new Date).format("yy-MM-DD"),uptoDate:F(new Date).format("yy-MM-DD"),userId:"",tranType:"Property"},enableReinitialize:!0,onSubmit:c=>{P(c.tranType),I()},validationSchema:A}),I=()=>{h(!0);let c={fromDate:t.values.fromDate,toDate:t.values.uptoDate,userId:t.values.userId,tranType:t.values.tranType};v.post(l,c,w()).then(r=>{var n;((n=r==null?void 0:r.data)==null?void 0:n.status)==!0?(console.log("search success => ",r),T(r==null?void 0:r.data)):console.log("error while search => ",r),h(!1)}).catch(r=>(console.log("error while search => ",r),h(!1)))};o.useEffect(()=>{k(),C()},[]);const k=()=>{v.get(i,w()).then(c=>{var r,n,j;((r=c==null?void 0:c.data)==null?void 0:r.status)==!0&&d((j=(n=c==null?void 0:c.data)==null?void 0:n.data)==null?void 0:j.ward_master)}).catch(c=>console.log("error getting master list",c))},C=c=>{h(!0),v.post(m,{},w()).then(r=>{var n,j;((n=r==null?void 0:r.data)==null?void 0:n.status)==!0&&(console.log("getting collector list => ",r),S((j=r==null?void 0:r.data)==null?void 0:j.data)),h(!1)}).catch(r=>(console.log("error getting collector list => ",r),h(!1)))};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onChange:t.handleChange,onSubmit:t.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Collection Report"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Transaction From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",id:"",className:N,value:t.values.fromDate})}),e.jsx("div",{className:"col-span-12 text-end",children:t.touched.fromDate&&t.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:t.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Transaction Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",id:"",className:N,value:t.values.uptoDate})}),e.jsx("div",{className:"col-span-12 text-end",children:t.touched.uptoDate&&t.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:t.errors.uptoDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Collector Name :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"userId",id:"",className:N,children:[e.jsx("option",{value:"",children:"Select"}),f==null?void 0:f.map(c=>e.jsx(e.Fragment,{children:e.jsx("option",{className:"capitalize",value:c==null?void 0:c.id,children:c==null?void 0:c.user_name})}))]})}),e.jsx("div",{className:"col-span-12 text-end",children:t.touched.userId&&t.errors.userId&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:t.errors.userId})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Transaction Type :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"tranType",id:"",className:N,children:[e.jsx("option",{value:"Property",selected:!0,children:"Property"}),e.jsx("option",{value:"Saf",children:"SAF"})]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:g?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-start items-end",children:e.jsx(B,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(E,{})}),"Search"]})})]})]}),!g&&(a==null?void 0:a.data)!=null&&((p=a==null?void 0:a.data)==null?void 0:p.length)!=0?e.jsxs(e.Fragment,{children:[e.jsx(U,{data:a,type:R}),e.jsx("div",{className:"mb-6"})]}):e.jsx(e.Fragment,{children:!g&&e.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),e.jsx("div",{className:"h-[20vh]"})]})};export{$ as default};
