import{k as W,r as c,o as k,A as f,N as v,j as a,C as I,bR as T,bP as E,f as i,cr as R}from"./index-37e267a8.js";import{L as Y}from"./ListTable-8e90106b.js";import"./GlobalFilter-faa8febf.js";const P=()=>{const{get_MasterData:C,searchWardWiseDcb:H,yearList:_}=E();W("Ward Wise DCB");const[h,y]=c.useState(),[d,A]=c.useState(),[x,S]=c.useState(),[u,g]=c.useState(!1),j="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",m=k({initialValues:{wardId:"",fiYear:""},onSubmit:e=>{console.log("submitting report search values => ",e),L()}}),L=e=>{g(!0);let n={wardId:m.values.wardId,fiYear:m.values.fiYear};console.log("data before hitting api => ",n),f.post(H,n,v()).then(t=>{var r,l;((r=t==null?void 0:t.data)==null?void 0:r.status)==!0?(console.log("search success => ",t),A((l=t==null?void 0:t.data)==null?void 0:l.data)):console.log("error while search => ",t),g(!1)}).catch(t=>(console.log("error while search => ",t),g(!1)))};c.useEffect(()=>{f.get(C,v()).then(e=>{var n,t,r;((n=e==null?void 0:e.data)==null?void 0:n.status)==!0?(console.log("getting master list data => ",e),y((r=(t=e==null?void 0:e.data)==null?void 0:t.data)==null?void 0:r.ward_master)):console.log("error getting master list",e)}).catch(e=>console.log("error getting master list",e)),f.post(_,{},v()).then(e=>{var n,t;((n=e==null?void 0:e.data)==null?void 0:n.status)==!0?(console.log("year list data => ",e),S((t=e==null?void 0:e.data)==null?void 0:t.data)):console.log("error year list",e)}).catch(e=>console.log("error year list",e))},[]);const D=[{Header:"_",columns:[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"House Hold",accessor:"current_hh",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}]},{Header:"DEMAND",columns:[{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:i(e==null?void 0:e.value)})},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:i(e==null?void 0:e.value)})},{Header:"Total Demand",Cell:({cell:e})=>{var n,t,r,l;return i(parseFloat((t=(n=e==null?void 0:e.row)==null?void 0:n.original)==null?void 0:t.arrear_demand)+parseFloat((l=(r=e==null?void 0:e.row)==null?void 0:r.original)==null?void 0:l.current_demand))}},{Header:"Collection From No of HH",accessor:"collection_from_hh",Cell:e=>a.jsx(a.Fragment,{children:R(e==null?void 0:e.value)})}]},{Header:"COLLECTION",columns:[{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:i(e==null?void 0:e.value)})},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:i(e==null?void 0:e.value)})},{Header:"Total Collection",Cell:({cell:e})=>{var n,t,r,l;return i(parseFloat((t=(n=e==null?void 0:e.row)==null?void 0:n.original)==null?void 0:t.arrear_collection)+parseFloat((l=(r=e==null?void 0:e.row)==null?void 0:r.original)==null?void 0:l.current_collection))}},{Header:"Balance HH",accessor:"balance_hh",Cell:e=>a.jsx(a.Fragment,{children:i(e==null?void 0:e.value)})}]},{Header:"BALANCE",columns:[{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:i(e==null?void 0:e.value)})},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:i(e==null?void 0:e.value)})},{Header:"Total Balance",accessor:"outstanding",Cell:e=>a.jsx(a.Fragment,{children:i(e==null?void 0:e.value)})}]},{Header:"%",columns:[{Header:"HH % Cover",Cell:({cell:e})=>{var r,l,o,s;let n=parseFloat((l=(r=e==null?void 0:e.row)==null?void 0:r.original)==null?void 0:l.current_hh)/100,t=(parseFloat((s=(o=e==null?void 0:e.row)==null?void 0:o.original)==null?void 0:s.collection_from_hh)/n).toFixed(2);return t=="NaN"?"0.00":t}},{Header:"Amount % Cover",Cell:({cell:e})=>{var r,l,o,s,b,w,N,F;let n=(parseFloat((l=(r=e==null?void 0:e.row)==null?void 0:r.original)==null?void 0:l.arrear_demand)+parseFloat((s=(o=e==null?void 0:e.row)==null?void 0:o.original)==null?void 0:s.current_demand))/100,t=((parseFloat((w=(b=e==null?void 0:e.row)==null?void 0:b.original)==null?void 0:w.arrear_collection)+parseFloat((F=(N=e==null?void 0:e.row)==null?void 0:N.original)==null?void 0:F.current_collection))/n).toFixed(2);return t=="NaN"?"0.00":t}}]}];return a.jsxs(a.Fragment,{children:[a.jsxs("form",{onChange:m.handleChange,onSubmit:m.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardId",id:"",className:j,disabled:u,children:[a.jsx("option",{value:"",children:"All"}),h==null?void 0:h.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Financial Year :"}),a.jsx("div",{className:"col-span-6",children:a.jsx("select",{name:"fiYear",id:"",className:j,disabled:u,children:x==null?void 0:x.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e,children:e})}))})})]}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:u?a.jsx(a.Fragment,{children:a.jsx("div",{className:"flex justify-end",children:a.jsx(I,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(T,{})}),"Search"]})})]})]}),!u&&d!=null&&(d==null?void 0:d.length)!=0?a.jsx(a.Fragment,{children:a.jsx(Y,{columns:D,dataList:d})}):a.jsx(a.Fragment,{children:a.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),a.jsx("div",{className:"h-[20vh]"})]})};export{P as default};