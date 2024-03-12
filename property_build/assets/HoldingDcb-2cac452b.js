import{a as I,r as u,w as T,A as b,b as w,j as a,o as k,U as E,ag as B,P as Y,i}from"./index-dedcd94c.js";const R=()=>{const{get_MasterData:C,searchHoldingDcb:H,yearList:_}=Y();I("Holding DCB");const[r,F]=u.useState();u.useState();const[m,y]=u.useState(),[x,M]=u.useState(!1),[g,A]=u.useState(null),[S,D]=u.useState(0),h="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",c=T({initialValues:{wardId:"",fiYear:""},onSubmit:e=>{console.log("submitting report search values => ",e),A({wardId:c.values.wardId,fiYear:c.values.fiYear}),D(t=>t+1)}});u.useEffect(()=>{b.get(C,w()).then(e=>{var t,n,l;((t=e==null?void 0:e.data)==null?void 0:t.status)==!0?(console.log("getting master list data => ",e),F((l=(n=e==null?void 0:e.data)==null?void 0:n.data)==null?void 0:l.ward_master)):console.log("error getting master list",e)}).catch(e=>console.log("error getting master list",e)),b.post(_,{},w()).then(e=>{var t,n;((t=e==null?void 0:e.data)==null?void 0:t.status)==!0?(console.log("year list data => ",e),y((n=e==null?void 0:e.data)==null?void 0:n.data)):console.log("error year list",e)}).catch(e=>console.log("error year list",e))},[]);const L=[{Header:"_",columns:[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Property Tax No",accessor:"pt_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Holding No",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"New Holding No",accessor:"new_holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Owner Name",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Mobile No",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}]},{Header:"DEMAND",columns:[{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:i(e==null?void 0:e.value)})},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:i(e==null?void 0:e.value)})},{Header:"Total Demand",Cell:({cell:e})=>{var t,n,l,d;return i(parseFloat((n=(t=e==null?void 0:e.row)==null?void 0:t.original)==null?void 0:n.arrear_demand)+parseFloat((d=(l=e==null?void 0:e.row)==null?void 0:l.original)==null?void 0:d.current_demand))}}]},{Header:"COLLECTION",columns:[{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:i(e==null?void 0:e.value)})},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:i(e==null?void 0:e.value)})},{Header:"Total Collection",Cell:({cell:e})=>{var t,n,l,d;return i(parseFloat((n=(t=e==null?void 0:e.row)==null?void 0:t.original)==null?void 0:n.arrear_collection)+parseFloat((d=(l=e==null?void 0:e.row)==null?void 0:l.original)==null?void 0:d.current_collection))}}]},{Header:"BALANCE",columns:[{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:i(e==null?void 0:e.value)})},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:i(e==null?void 0:e.value)})},{Header:"Total Balance",accessor:"outstanding",Cell:e=>a.jsx(a.Fragment,{children:i(e==null?void 0:e.value)})}]},{Header:"%",columns:[{Header:"Amount % Cover",Cell:({cell:e})=>{var l,d,v,f,s,o,j,N;let t=(parseFloat((d=(l=e==null?void 0:e.row)==null?void 0:l.original)==null?void 0:d.arrear_demand)+parseFloat((f=(v=e==null?void 0:e.row)==null?void 0:v.original)==null?void 0:f.current_demand))/100,n=((parseFloat((o=(s=e==null?void 0:e.row)==null?void 0:s.original)==null?void 0:o.arrear_collection)+parseFloat((N=(j=e==null?void 0:e.row)==null?void 0:j.original)==null?void 0:N.current_collection))/t).toFixed(2);return n=="NaN"?"0.00":n}}]}];return a.jsxs(a.Fragment,{children:[a.jsxs("form",{onChange:c.handleChange,onSubmit:c.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardId",id:"",className:h,disabled:x,children:[a.jsx("option",{value:"",children:"All"}),r==null?void 0:r.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Financial Year :"}),a.jsx("div",{className:"col-span-6",children:a.jsx("select",{name:"fiYear",id:"",className:h,disabled:x,children:m==null?void 0:m.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e,children:e})}))})})]}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:x?a.jsx(a.Fragment,{children:a.jsx("div",{className:"flex justify-end",children:a.jsx(k,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(E,{})}),"Search"]})})]})]}),g!=null&&a.jsx(B,{margin:!0,type:"old",api:H,columns:L,requestBody:g,changeData:S}),a.jsx("div",{className:"h-[20vh]"})]})};export{R as default};
