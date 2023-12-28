import{r as n,u as Z,a as s,q as r,s as T,w as o,A as w,b as A,j as a,cM as p,K as ee,o as ae,O as le,P as te}from"./index-07053450.js";import{L as ne}from"./ListTable2-9e470992.js";const de=()=>{const{get_MasterData:I,searchPropCollectionReportwithRebatePenalty:D,searchSafCollectionReportwithRebatePenalty:H}=te(),[N,q]=n.useState(),[m,L]=n.useState(),[E,j]=n.useState(!1),[b,k]=n.useState(),{type:d}=Z();s(d=="property"?"Property Collection with Rebate and Penalty":"SAF Collection with Rebate and Penalty");const f="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",O=r({fromDate:T().required("Field Required"),uptoDate:T().required("Field Required")}),t=o({initialValues:{fromDate:"",uptoDate:"",wardId:"",propertyType:"",paymentMode:""},onSubmit:e=>{S(5),g(1),P()},validationSchema:O}),P=()=>{j(!0);let e;d=="property"&&(e=D),d=="saf"&&(e=H);let v={fromDate:t.values.fromDate,uptoDate:t.values.uptoDate,wardId:t.values.wardId,paymentMode:t.values.paymentMode,propertyType:t.values.propertyType,page:h,perPage:y};w.post(e,v,A()).then(l=>{var u,i,x,R,M;((u=l==null?void 0:l.data)==null?void 0:u.status)==!0?(console.log("search success => ",l),L((x=(i=l==null?void 0:l.data)==null?void 0:i.data)==null?void 0:x.items),$((M=(R=l==null?void 0:l.data)==null?void 0:R.data)==null?void 0:M.total)):console.log("error while search => ",l),j(!1),c(!1)}).catch(l=>(console.log("error while search => ",l),j(!1),c(!1)))};n.useEffect(()=>{U()},[]);const U=()=>{w.get(I,A()).then(e=>{var v,l,u,i;((v=e==null?void 0:e.data)==null?void 0:v.status)==!0&&(k((l=e==null?void 0:e.data)==null?void 0:l.property_type),q((i=(u=e==null?void 0:e.data)==null?void 0:u.data)==null?void 0:i.ward_master))}).catch(e=>console.log("error getting master list",e))},W=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Holding No",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Unique House No",accessor:"new_holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Owner Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Payment(From/Upto)",accessor:"from_upto_fy_qtr",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Tran. Date",accessor:"tran_date",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mode",accessor:"transaction_mode",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Amount",accessor:"amount",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Tran. No.",accessor:"tran_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Rebate",accessor:"tran_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Penalty",accessor:"penalty",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}],V=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"SAF No",accessor:"saf_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Owner Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Payment(From/Upto)",accessor:"from_upto_fy_qtr",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Tran. Date",accessor:"tran_date",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mode",accessor:"transaction_mode",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Amount",accessor:"amount",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Tran. No.",accessor:"tran_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Rebate Amount",accessor:"tran_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Penalty Amount",accessor:"penalty",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Late Penalty Amount",accessor:"penalty",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}],[y,S]=n.useState(5),[h,g]=n.useState(1),[C,$]=n.useState(0),[_,B]=n.useState(),[K,F]=n.useState(!1),[Q,c]=n.useState(!1),z=()=>{g(h+1)},G=()=>{g(h-1)},J=e=>{S(e)};n.useEffect(()=>{c(!0),P()},[h,y]);const X=()=>{c(!0),F(!1);let e;d=="property"&&(e=D),d=="saf"&&(e=H);let v={fromDate:t.values.fromDate,uptoDate:t.values.uptoDate,wardId:t.values.wardId,userId:t.values.userId,paymentMode:t.values.paymentMode,propertyType:t.values.propertyType,page:"",perPage:C};w.post(e,v,A()).then(l=>{var u,i,x;((u=l==null?void 0:l.data)==null?void 0:u.status)==!0&&(B((x=(i=l==null?void 0:l.data)==null?void 0:i.data)==null?void 0:x.items),Y()),c(!1)}).catch(l=>{c(!1)})},Y=()=>{F(!0)};return a.jsxs(a.Fragment,{children:[K&&a.jsx(p,{data:_}),Q&&a.jsx(ee,{}),a.jsxs("form",{onChange:t.handleChange,onSubmit:t.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Collection Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),a.jsx("div",{className:"col-span-6",children:a.jsx("input",{type:"date",name:"fromDate",id:"",className:f})}),a.jsx("div",{className:"col-span-12 text-end",children:t.touched.fromDate&&t.errors.fromDate&&a.jsx(a.Fragment,{children:a.jsx("span",{className:"text-red-600 text-xs",children:t.errors.fromDate})})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),a.jsx("div",{className:"col-span-6",children:a.jsx("input",{type:"date",name:"uptoDate",id:"",className:f})}),a.jsx("div",{className:"col-span-12 text-end",children:t.touched.uptoDate&&t.errors.uptoDate&&a.jsx(a.Fragment,{children:a.jsx("span",{className:"text-red-600 text-xs",children:t.errors.uptoDate})})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardId",id:"",className:f,children:[a.jsx("option",{value:"",children:"All"}),N==null?void 0:N.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Payment Mode :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"paymentMode",id:"",className:f,children:[a.jsx("option",{value:"",children:"All"}),a.jsx("option",{value:"CASH",children:"Cash"}),a.jsx("option",{value:"CHEQUE",children:"Cheque"}),a.jsx("option",{value:"DD",children:"DD"}),a.jsx("option",{value:"ONLINE",children:"Online"})]})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Property Type :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"propertyType",id:"",className:f,children:[a.jsx("option",{value:"",children:"All"}),b==null?void 0:b.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.property_type})}))]})})]}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:E?a.jsx(a.Fragment,{children:a.jsx("div",{className:"flex justify-start items-end",children:a.jsx(ae,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(le,{})}),"Search"]})})]})]}),m!=null&&(m==null?void 0:m.length)!=0?a.jsx(a.Fragment,{children:a.jsx(ne,{count1:C,columns:d=="property"?W:V,dataList:m,exportStatus:!0,perPage:y,perPageC:J,totalCount:C,nextPage:z,prevPage:G,exportDataF:X,exportData:_})}):a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),a.jsx("div",{className:"h-[20vh]"})]})};export{de as default};
