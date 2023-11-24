import{a as q,r as n,w as z,A as b,b as N,j as a,cz as B,K,o as G,O as J,P as X}from"./index-dd0f3274.js";import{L as Z}from"./ListTable2-01c6f3d1.js";const o=()=>{const{get_MasterData:P,searchWardWiseDemand:j}=X();q("Ward Wise Demand");const[f,_]=n.useState(),[d,D]=n.useState(),[W,x]=n.useState(!1),I="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",v=z({initialValues:{wardId:""},onSubmit:e=>{console.log("submitting report search values => ",e),C(5),g(1),w()}}),w=e=>{x(!0);let t={wardId:v.values.wardId,page:m,perPage:h};console.log("data before hitting api => ",t),b.post(j,t,N()).then(l=>{var u,c,y,A,H;((u=l==null?void 0:l.data)==null?void 0:u.status)==!0?(console.log("search success => ",l),D((y=(c=l==null?void 0:l.data)==null?void 0:c.data)==null?void 0:y.items),k((H=(A=l==null?void 0:l.data)==null?void 0:A.data)==null?void 0:H.total)):console.log("error while search => ",l),x(!1),i(!1)}).catch(l=>(console.log("error while search => ",l),x(!1),i(!1)))};n.useEffect(()=>{b.get(P,N()).then(e=>{var t,l,u;((t=e==null?void 0:e.data)==null?void 0:t.status)==!0?(console.log("getting master list data => ",e),_((u=(l=e==null?void 0:e.data)==null?void 0:l.data)==null?void 0:u.ward_master)):console.log("error getting master list",e)}).catch(e=>console.log("error getting master list",e))},[]);const L=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Holding No",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Unique House No",accessor:"new_holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Owner Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Address",accessor:"address",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"From FY",accessor:"tran_date",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"From QTR",accessor:"transaction_mode",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Upto FY",accessor:"amount",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Upto QTR",accessor:"emp_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total Due",accessor:"tran_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}],[h,C]=n.useState(5),[m,g]=n.useState(1),[S,k]=n.useState(0),[R,T]=n.useState(),[E,F]=n.useState(!1),[U,i]=n.useState(!1),M=()=>{g(m+1)},O=()=>{g(m-1)},Q=e=>{C(e)};n.useEffect(()=>{i(!0),w()},[m,h]);const V=()=>{i(!0),F(!1);let e={wardId:v.values.wardId,page:"",perPage:S};b.post(j,e,N()).then(t=>{var l,u,c;((l=t==null?void 0:t.data)==null?void 0:l.status)==!0&&(T((c=(u=t==null?void 0:t.data)==null?void 0:u.data)==null?void 0:c.items),Y()),i(!1)}).catch(t=>{i(!1)})},Y=()=>{F(!0)};return a.jsxs(a.Fragment,{children:[E&&a.jsx(B,{data:R}),U&&a.jsx(K,{}),a.jsxs("form",{onChange:v.handleChange,onSubmit:v.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardId",id:"",className:I,children:[a.jsx("option",{value:"",children:"All"}),f==null?void 0:f.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:W?a.jsx(a.Fragment,{children:a.jsx("div",{className:"flex justify-end",children:a.jsx(G,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(J,{})}),"Search"]})})]})]}),d!=null&&(d==null?void 0:d.length)!=0?a.jsx(a.Fragment,{children:a.jsx(Z,{columns:L,dataList:d,exportStatus:!0,perPage:h,perPageC:Q,totalCount:S,nextPage:M,prevPage:O,exportDataF:V})}):a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),a.jsx("div",{className:"h-[20vh]"})]})};export{o as default};
