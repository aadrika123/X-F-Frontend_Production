import{a as Y,r as n,w as q,A as b,b as N,j as a,dB as z,L as G,o as J,U as K,P as X}from"./index-7885ada7.js";import{L as Z}from"./ListTable2v-45ae2e3f.js";const r=()=>{const{get_MasterData:P,searchWardWiseDemand:j}=X();Y("Ward Wise Demand");const[m,_]=n.useState(),[i,D]=n.useState(),[W,x]=n.useState(!1),I="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",v=q({initialValues:{wardId:""},onSubmit:e=>{C(5),g(1),w()}}),w=e=>{x(!0);let t={wardId:v.values.wardId,page:f,perPage:h};b.post(j,t,N()).then(l=>{var u,c,y,A,H;((u=l==null?void 0:l.data)==null?void 0:u.status)==!0&&(D((y=(c=l==null?void 0:l.data)==null?void 0:c.data)==null?void 0:y.items),k((H=(A=l==null?void 0:l.data)==null?void 0:A.data)==null?void 0:H.total)),x(!1),d(!1)}).catch(l=>(x(!1),d(!1)))};n.useEffect(()=>{b.get(P,N()).then(e=>{var t,l,u;((t=e==null?void 0:e.data)==null?void 0:t.status)==!0&&_((u=(l=e==null?void 0:e.data)==null?void 0:l.data)==null?void 0:u.ward_master)}).catch(e=>{})},[]);const L=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Holding No",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Unique House No",accessor:"new_holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Owner Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Address",accessor:"address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"From FY",accessor:"tran_date",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"From QTR",accessor:"transaction_mode",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Upto FY",accessor:"amount",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Upto QTR",accessor:"emp_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total Due",accessor:"tran_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}],[h,C]=n.useState(5),[f,g]=n.useState(1),[S,k]=n.useState(0),[R,T]=n.useState(),[U,F]=n.useState(!1),[E,d]=n.useState(!1),M=()=>{g(f+1)},B=()=>{g(f-1)},O=e=>{C(e)};n.useEffect(()=>{d(!0),w()},[f,h]);const Q=()=>{d(!0),F(!1);let e={wardId:v.values.wardId,page:"",perPage:S};b.post(j,e,N()).then(t=>{var l,u,c;((l=t==null?void 0:t.data)==null?void 0:l.status)==!0&&(T((c=(u=t==null?void 0:t.data)==null?void 0:u.data)==null?void 0:c.items),V()),d(!1)}).catch(t=>{d(!1)})},V=()=>{F(!0)};return a.jsxs(a.Fragment,{children:[U&&a.jsx(z,{data:R}),E&&a.jsx(G,{}),a.jsxs("form",{onChange:v.handleChange,onSubmit:v.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardId",id:"",className:I,children:[a.jsx("option",{value:"",children:"All"}),m==null?void 0:m.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:W?a.jsx(a.Fragment,{children:a.jsx("div",{className:"flex justify-end",children:a.jsx(J,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(K,{})}),"Search"]})})]})]}),i!=null&&(i==null?void 0:i.length)!=0?a.jsx(a.Fragment,{children:a.jsx(Z,{columns:L,dataList:i,exportStatus:!0,perPage:h,perPageC:O,totalCount:S,nextPage:M,prevPage:B,exportDataF:Q})}):a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),a.jsx("div",{className:"h-[20vh]"})]})};export{r as default};
