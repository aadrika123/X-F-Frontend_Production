import{a as V,r as n,w as q,A as b,b as j,j as a,dt as J,L as K,o as Q,U as X,P as Y}from"./index-b7a9b315.js";import{L as Z}from"./ListTable2v-7ffaf46a.js";const o=()=>{const{get_MasterData:H,searchWardWiseSafPendingDetails:N}=Y();V("Ward Wise SAF Pending Details");const[m,D]=n.useState(),[d,I]=n.useState(),[L,x]=n.useState(!1),W="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",v=q({initialValues:{wardId:""},onSubmit:e=>{console.log("submitting report search values => ",e),S(5),h(1),w()}}),w=e=>{x(!0);let t={wardId:v.values.wardId,page:f,perPage:g};console.log("data before hitting api => ",t),b.post(N,t,j()).then(l=>{var i,c,F,y,P;((i=l==null?void 0:l.data)==null?void 0:i.status)==!0?(console.log("search success => ",l),I((F=(c=l==null?void 0:l.data)==null?void 0:c.data)==null?void 0:F.items),k((P=(y=l==null?void 0:l.data)==null?void 0:y.data)==null?void 0:P.total)):console.log("error while search => ",l),x(!1),u(!1)}).catch(l=>(console.log("error while search => ",l),x(!1),u(!1)))};n.useEffect(()=>{b.get(H,j()).then(e=>{var t,l,i;((t=e==null?void 0:e.data)==null?void 0:t.status)==!0?(console.log("getting master list data => ",e),D((i=(l=e==null?void 0:e.data)==null?void 0:l.data)==null?void 0:i.ward_master)):console.log("error getting master list",e)}).catch(e=>console.log("error getting master list",e))},[]);const _=[{Header:"SAF, SAM, Geotagging and Back To Citizen",columns:[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"SAF No",accessor:"saf_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"SAF Digitized",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"SAM",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Geo-Tagging",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Back To Citizen",accessor:"btc",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}]},{Header:"Pending At Level",columns:[{Header:"DA",accessor:"da",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"UTC",accessor:"utc",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"SI",accessor:"si",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"EO",accessor:"eo",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}]},{Header:"FAM",columns:[{Header:"Final Memo",accessor:"final_memo",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}]}],[g,S]=n.useState(5),[f,h]=n.useState(1),[C,k]=n.useState(0),[M,T]=n.useState(),[E,A]=n.useState(!1),[R,u]=n.useState(!1),z=()=>{h(f+1)},B=()=>{h(f-1)},U=e=>{S(e)};n.useEffect(()=>{u(!0),w()},[f,g]);const G=()=>{u(!0),A(!1);let e={wardId:v.values.wardId,page:"",perPage:C};b.post(N,e,j()).then(t=>{var l,i,c;((l=t==null?void 0:t.data)==null?void 0:l.status)==!0&&(T((c=(i=t==null?void 0:t.data)==null?void 0:i.data)==null?void 0:c.items),O()),u(!1)}).catch(t=>{u(!1)})},O=()=>{A(!0)};return a.jsxs(a.Fragment,{children:[E&&a.jsx(J,{data:M}),R&&a.jsx(K,{}),a.jsxs("form",{onChange:v.handleChange,onSubmit:v.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardId",id:"",className:W,children:[a.jsx("option",{value:"",children:"All"}),m==null?void 0:m.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:L?a.jsx(a.Fragment,{children:a.jsx("div",{className:"flex justify-end",children:a.jsx(Q,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(X,{})}),"Search"]})})]})]}),d!=null&&(d==null?void 0:d.length)!=0?a.jsx(a.Fragment,{children:a.jsx(Z,{columns:_,dataList:d,exportStatus:!0,perPage:g,perPageC:U,totalCount:C,nextPage:z,prevPage:B,exportDataF:G})}):a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})})]})};export{o as default};
