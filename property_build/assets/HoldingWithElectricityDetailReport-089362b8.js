import{r as t,u as k,a as I,w as M,j as a,cE as V,K,A as S,b as P,P as O}from"./index-dfa57855.js";import{L as U}from"./ListTable2-0a3f36a5.js";const J=()=>{const{searchHoldingWithElectricityDetailReport:N}=O(),[n,y]=t.useState(),[q,f]=t.useState(!1);k(),I("Holding With Electricity Detail Report"),M({initialValues:{wardId:""},onSubmit:e=>{b(5),x(1),g()}});const g=()=>{f(!0);let e={page:v,perPage:m};S.post(N,e,P()).then(l=>{var i,d,c,H,A;((i=l==null?void 0:l.data)==null?void 0:i.status)==!0?(console.log("search success => ",l),y((c=(d=l==null?void 0:l.data)==null?void 0:d.data)==null?void 0:c.items),E((A=(H=l==null?void 0:l.data)==null?void 0:H.data)==null?void 0:A.total)):console.log("error while search => ",l),f(!1),u(!1)}).catch(l=>(console.log("error while search => ",l),f(!1),u(!1)))},F=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Holding No",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Address",accessor:"address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Elect. Consumer No",accessor:"prop_address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Elect. Account No.",accessor:"prop_address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Elect. Bind Book No.",accessor:"prop_address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Holding Type",accessor:"prop_address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Buildup Area",accessor:"prop_address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property Type",accessor:"prop_address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}],[m,b]=t.useState(5),[v,x]=t.useState(1),[h,E]=t.useState(0),[j,D]=t.useState(),[_,C]=t.useState(!1),[w,u]=t.useState(!1),L=()=>{x(v+1)},R=()=>{x(v-1)},W=e=>{b(e)};t.useEffect(()=>{u(!0),g()},[v,m]);const B=()=>{u(!0),C(!1);let e={page:"",perPage:h};S.post(N,e,P()).then(l=>{var i,d,c;((i=l==null?void 0:l.data)==null?void 0:i.status)==!0&&(D((c=(d=l==null?void 0:l.data)==null?void 0:d.data)==null?void 0:c.items),T()),u(!1)}).catch(l=>{u(!1)})},T=()=>{C(!0)};return a.jsxs(a.Fragment,{children:[_&&a.jsx(V,{data:j}),w&&a.jsx(K,{}),a.jsx("div",{children:a.jsx("h1",{className:"w-full border-b-2 border-gray-700 text-gray-700 text-center text-lg font-semibold uppercase tracking-[0.7rem] mb-2 mt-8",children:"Holding With Electricity Detail Report"})}),n!=null&&(n==null?void 0:n.length)!=0?a.jsx(a.Fragment,{children:a.jsx(U,{count1:h,columns:F,dataList:n,exportStatus:!0,perPage:m,perPageC:W,totalCount:h,nextPage:L,prevPage:R,exportDataF:B,exportData:j})}):a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),a.jsx("div",{className:"h-[20vh]"})]})};export{J as default};
