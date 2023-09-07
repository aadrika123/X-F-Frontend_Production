import{w as te,r as l,k as le,l as ne,o as ie,A as v,N as m,j as a,cE as de,T as ue,C as ce,bR as xe,cF as fe,bP as ve}from"./index-76241749.js";const he=()=>{const{get_MasterData:r,wardWiseHolding:w,yearList:R}=ve(),o=te(),[g,E]=l.useState();l.useState();const[c,T]=l.useState(),[O,h]=l.useState(!1),[me,y]=l.useState(!0),[s,U]=l.useState();le("Ward Wise Holding Report");const S="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md";ne({});const d=ie({initialValues:{wardMstrId:"",year:""},onSubmit:e=>{F(5),x(1),C()}}),C=()=>{h(!0);let e={wardMstrId:d.values.wardMstrId,year:d.values.year.split("-")[0],perPage:j};console.log("data before hitting api => ",e),v.post(w+"?page="+P,e,m()).then(t=>{var n,i,f,L,M,D,I,W,k;((n=t==null?void 0:t.data)==null?void 0:n.status)==!0?(console.log("search success => ",t),T((f=(i=t==null?void 0:t.data)==null?void 0:i.data)==null?void 0:f.data),Y((M=(L=t==null?void 0:t.data)==null?void 0:L.data)==null?void 0:M.total),B((I=(D=t==null?void 0:t.data)==null?void 0:D.data)==null?void 0:I.current_page),Q((k=(W=t==null?void 0:t.data)==null?void 0:W.data)==null?void 0:k.last_page)):console.log("error while search => ",t),h(!1),u(!1)}).catch(t=>(console.log("error while search => ",t),h(!1),u(!1)))};l.useEffect(()=>{V(),o.pathname=="/property-report"&&y(!0),o.pathname=="/saf-report"&&y(!1)},[]);const V=()=>{v.get(r,m()).then(e=>{var t,n,i;((t=e==null?void 0:e.data)==null?void 0:t.status)==!0?(console.log("getting master list data => ",e),E((i=(n=e==null?void 0:e.data)==null?void 0:n.data)==null?void 0:i.ward_master)):console.log("error getting master list",e)}).catch(e=>console.log("error getting master list",e)),v.post(R,{},m()).then(e=>{var t,n;((t=e==null?void 0:e.data)==null?void 0:t.status)==!0?(console.log("year list data => ",e),U((n=e==null?void 0:e.data)==null?void 0:n.data)):console.log("error year list",e)}).catch(e=>console.log("error year list",e))},q=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property Tax No",accessor:"pt_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Holding No",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Unique House No",accessor:"new_holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Owner Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Address",accessor:"prop_address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"From(QTR|FY)",accessor:"fyear",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Due Amount",accessor:"balance",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}],[j,F]=l.useState(5),[P,x]=l.useState(1),[N,B]=l.useState(0),[A,Q]=l.useState(0),[b,Y]=l.useState(0),[H,$]=l.useState(),[z,_]=l.useState(!1),[G,u]=l.useState(!1),J=()=>{x(N+1)},K=()=>{x(N-1)},X=e=>{F(e)};l.useEffect(()=>{u(!0),C()},[P,j]);const Z=()=>{x(1)},p=()=>{x(A)},ee=()=>{u(!0),_(!1);let e={wardMstrId:d.values.wardMstrId,year:d.values.year.split("-")[0],perPage:b};v.post(w+"?page=1",e,m()).then(t=>{var n,i,f;((n=t==null?void 0:t.data)==null?void 0:n.status)==!0&&($((f=(i=t==null?void 0:t.data)==null?void 0:i.data)==null?void 0:f.data),ae()),u(!1)}).catch(t=>{u(!1)})},ae=()=>{_(!0)};return a.jsxs(a.Fragment,{children:[z&&a.jsx(de,{data:H}),G&&a.jsx(ue,{}),a.jsxs("form",{onChange:d.handleChange,onSubmit:d.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardMstrId",id:"",className:S,children:[a.jsx("option",{value:"",children:"All"}),g==null?void 0:g.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Not Paid From :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"year",id:"",className:S,children:[a.jsx("option",{value:"",children:"All"}),s==null?void 0:s.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e,children:e})}))]})})]}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:O?a.jsx(a.Fragment,{children:a.jsx("div",{className:"flex justify-start items-end",children:a.jsx(ce,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(xe,{})}),"Search"]})})]})]}),c!=null&&(c==null?void 0:c.length)!=0?a.jsx(a.Fragment,{children:a.jsx(fe,{currentPage:N,lastPage:A,goFirst:Z,goLast:p,count1:b,columns:q,dataList:c,exportStatus:!0,perPage:j,perPageC:X,totalCount:b,nextPage:J,prevPage:K,exportDataF:ee,exportData:H})}):a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),a.jsx("div",{className:"h-[20vh]"})]})};export{he as default};