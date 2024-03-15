import{r as n,a as Q,q as X,s as P,w as Y,A as h,b as N,j as a,d7 as Z,L as r,o,U as p,P as ee}from"./index-e53b351f.js";import{L as ae}from"./ListTable2v-d67ef8ea.js";const ne=()=>{const{get_MasterData:I,get_collectorList:L,searchArrearCurrentCollectionSummary:D}=ee(),[j,R]=n.useState(),[g,k]=n.useState(),[v,q]=n.useState(),[T,d]=n.useState(!1);Q("Arrear and Current Collection Summary");const x="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",E=X({fromDate:P().required("Field Required"),uptoDate:P().required("Field Required")}),t=Y({initialValues:{fromDate:"",uptoDate:"",wardId:"",userId:""},onSubmit:e=>{S(5),C(1),A()},validationSchema:E}),A=()=>{d(!0);let e={fromDate:t.values.fromDate,uptoDate:t.values.uptoDate,wardId:t.values.wardId,userId:t.values.userId,page:f,perPage:b};h.post(D,e,N()).then(l=>{var u,i,m,F,_;((u=l==null?void 0:l.data)==null?void 0:u.status)==!0&&(q((m=(i=l==null?void 0:l.data)==null?void 0:i.data)==null?void 0:m.items),W((_=(F=l==null?void 0:l.data)==null?void 0:F.data)==null?void 0:_.total)),d(!1),c(!1)}).catch(l=>(d(!1),c(!1)))};n.useEffect(()=>{U()},[]);const U=()=>{h.get(I,N()).then(e=>{var l,u,i;((l=e==null?void 0:e.data)==null?void 0:l.status)==!0&&R((i=(u=e==null?void 0:e.data)==null?void 0:u.data)==null?void 0:i.ward_master)}).catch(e=>{})},M=e=>{d(!0),h.post(L,{wardId:e.target.value},N()).then(l=>{var u,i;((u=l==null?void 0:l.data)==null?void 0:u.status)==!0&&k((i=l==null?void 0:l.data)==null?void 0:i.data),d(!1)}).catch(l=>d(!1))},O=[{Header:"_",columns:[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Tran. Date",accessor:"tran_date",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Tran. No",accessor:"tran_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Holding No",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Unique House No",accessor:"new_holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}]},{Header:"Arrear Collection",columns:[{Header:"Owner Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Period",accessor:"period",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}]},{Header:"Current Collection",columns:[{Header:"Owner Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Period",accessor:"period",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}]},{Header:"_",columns:[{Header:"Collection",accessor:"collection",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Penalty",accessor:"penalty",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Rebate",accessor:"rebate",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Adv.",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Adj.",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}]},{Header:"_",columns:[{Header:"Total Collection",accessor:"total_collection",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}]}],[b,S]=n.useState(5),[f,C]=n.useState(1),[w,W]=n.useState(0),[y,s]=n.useState(),[V,H]=n.useState(!1),[$,c]=n.useState(!1),z=()=>{C(f+1)},B=()=>{C(f-1)},G=e=>{S(e)};n.useEffect(()=>{c(!0),A()},[f,b]);const J=()=>{c(!0),H(!1);let e={fromDate:t.values.fromDate,uptoDate:t.values.uptoDate,wardId:t.values.wardId,userId:t.values.userId,page:"",perPage:w};h.post(D,e,N()).then(l=>{var u,i,m;((u=l==null?void 0:l.data)==null?void 0:u.status)==!0&&(s((m=(i=l==null?void 0:l.data)==null?void 0:i.data)==null?void 0:m.items),K()),c(!1)}).catch(l=>{c(!1)})},K=()=>{H(!0)};return a.jsxs(a.Fragment,{children:[V&&a.jsx(Z,{data:y}),$&&a.jsx(r,{}),a.jsxs("form",{onChange:t.handleChange,onSubmit:t.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Collection Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),a.jsx("div",{className:"col-span-6",children:a.jsx("input",{type:"date",name:"fromDate",id:"",className:x})}),a.jsx("div",{className:"col-span-12 text-end",children:t.touched.fromDate&&t.errors.fromDate&&a.jsx(a.Fragment,{children:a.jsx("span",{className:"text-red-600 text-xs",children:t.errors.fromDate})})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),a.jsx("div",{className:"col-span-6",children:a.jsx("input",{type:"date",name:"uptoDate",id:"",className:x})}),a.jsx("div",{className:"col-span-12 text-end",children:t.touched.uptoDate&&t.errors.uptoDate&&a.jsx(a.Fragment,{children:a.jsx("span",{className:"text-red-600 text-xs",children:t.errors.uptoDate})})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardId",id:"",className:x,onChange:M,children:[a.jsx("option",{value:"",children:"All"}),j==null?void 0:j.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Collector Name :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"userId",id:"",className:x,children:[a.jsx("option",{value:"",children:"All"}),g==null?void 0:g.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:a.jsx("span",{className:"capitalize",children:e==null?void 0:e.user_name})})}))]})}),a.jsx("div",{className:"col-span-12 text-end text-xs text-red-500",children:"select ward no to get collector name list"})]}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:T?a.jsx(a.Fragment,{children:a.jsx("div",{className:"flex justify-start items-end",children:a.jsx(o,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(p,{})}),"Search"]})})]})]}),v!=null&&(v==null?void 0:v.length)!=0?a.jsx(a.Fragment,{children:a.jsx(ae,{count1:w,columns:O,dataList:v,exportStatus:!0,perPage:b,perPageC:G,totalCount:w,nextPage:z,prevPage:B,exportDataF:J,exportData:y})}):a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),a.jsx("div",{className:"h-[20vh]"})]})};export{ne as default};
