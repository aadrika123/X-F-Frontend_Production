import{bw as $,u as Q,r as n,k as z,l as J,m as H,o as K,A as b,O as D,j as a,cG as X,U as Y,C as Z,bS as o,bQ as r}from"./index-33b137df.js";import{L as p}from"./ListTable2-8a12ee4b.js";const le=()=>{const{get_MasterData:P,searchDateWardWiseGeneratedNotice:w}=r();$(),Q();const[x,T]=n.useState();n.useState();const[c,W]=n.useState(),[k,h]=n.useState(!1);z("Date and Ward Wise Generated Notice");const v="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",I=J({fromDate:H().required("Field Required"),uptoDate:H().required("Field Required")}),t=K({initialValues:{fromDate:"",uptoDate:"",wardId:"",noticeType:""},onSubmit:e=>{C(5),j(1),y()},validationSchema:I}),y=()=>{h(!0);let e={fromDate:t.values.fromDate,uptoDate:t.values.uptoDate,wardId:t.values.wardId,noticeType:t.values.noticeType,page:f,perPage:N};b.post(w,e,D()).then(l=>{var i,u,m,F,_;((i=l==null?void 0:l.data)==null?void 0:i.status)==!0?(console.log("search success => ",l),W((m=(u=l==null?void 0:l.data)==null?void 0:u.data)==null?void 0:m.items),q((_=(F=l==null?void 0:l.data)==null?void 0:F.data)==null?void 0:_.total)):console.log("error while search => ",l),h(!1),d(!1)}).catch(l=>(console.log("error while search => ",l),h(!1),d(!1)))};n.useEffect(()=>{L()},[]);const L=()=>{b.get(P,D()).then(e=>{var l,i,u;((l=e==null?void 0:e.data)==null?void 0:l.status)==!0&&T((u=(i=e==null?void 0:e.data)==null?void 0:i.data)==null?void 0:u.ward_master)}).catch(e=>console.log("error getting master list",e))},R=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Notice No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Notice Date",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Notice Type",accessor:"saf_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Ward No.",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"holding No.",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Owner Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Demand From/Upto",accessor:"from_upto_fy_qtr",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Amount",accessor:"tran_date",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Penalty Amount",accessor:"transaction_mode",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Generated Date",accessor:"amount",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Generated By",accessor:"emp_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Deactive Reason",accessor:"tran_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Deactivated Date",accessor:"cheque_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Deactivated By",accessor:"bank_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}],[N,C]=n.useState(5),[f,j]=n.useState(1),[g,q]=n.useState(0),[A,s]=n.useState(),[G,S]=n.useState(!1),[M,d]=n.useState(!1),E=()=>{j(f+1)},U=()=>{j(f-1)},B=e=>{C(e)};n.useEffect(()=>{d(!0),y()},[f,N]);const O=()=>{d(!0),S(!1);let e={fromDate:t.values.fromDate,uptoDate:t.values.uptoDate,wardId:t.values.wardId,noticeType:t.values.noticeType,page:"",perPage:g};b.post(w,e,D()).then(l=>{var i,u,m;((i=l==null?void 0:l.data)==null?void 0:i.status)==!0&&(s((m=(u=l==null?void 0:l.data)==null?void 0:u.data)==null?void 0:m.items),V()),d(!1)}).catch(l=>{d(!1)})},V=()=>{S(!0)};return a.jsxs(a.Fragment,{children:[G&&a.jsx(X,{data:A}),M&&a.jsx(Y,{}),a.jsxs("form",{onChange:t.handleChange,onSubmit:t.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),a.jsx("div",{className:"col-span-6",children:a.jsx("input",{type:"date",name:"fromDate",id:"",className:v})}),a.jsx("div",{className:"col-span-12 text-end",children:t.touched.fromDate&&t.errors.fromDate&&a.jsx(a.Fragment,{children:a.jsx("span",{className:"text-red-600 text-xs",children:t.errors.fromDate})})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),a.jsx("div",{className:"col-span-6",children:a.jsx("input",{type:"date",name:"uptoDate",id:"",className:v})}),a.jsx("div",{className:"col-span-12 text-end",children:t.touched.uptoDate&&t.errors.uptoDate&&a.jsx(a.Fragment,{children:a.jsx("span",{className:"text-red-600 text-xs",children:t.errors.uptoDate})})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardId",id:"",className:v,children:[a.jsx("option",{value:"",children:"All"}),x==null?void 0:x.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Notice Type :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"paymentMode",id:"",className:v,children:[a.jsx("option",{value:"",children:"All"}),a.jsx("option",{value:"Assessment",children:"Assessment"}),a.jsx("option",{value:"Demand",children:"Demand"})]})})]}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:k?a.jsx(a.Fragment,{children:a.jsx("div",{className:"flex justify-start items-end",children:a.jsx(Z,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(o,{})}),"Search"]})})]})]}),c!=null&&(c==null?void 0:c.length)!=0?a.jsx(a.Fragment,{children:a.jsx(p,{count1:g,columns:R,dataList:c,exportStatus:!0,perPage:N,perPageC:B,totalCount:g,nextPage:E,prevPage:U,exportDataF:O,exportData:A})}):a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),a.jsx("div",{className:"h-[20vh]"})]})};export{le as default};
