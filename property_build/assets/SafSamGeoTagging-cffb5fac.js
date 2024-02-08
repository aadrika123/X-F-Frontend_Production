import{j as e,r as h,a as v,q as D,s as f,w as S,aq as u,A as p,b as j,o as F,U as _,P as A}from"./index-905c0fa4.js";const M=l=>{var d,m;const o=r=>{var g;let n=0;return(g=l==null?void 0:l.data)==null||g.forEach(i=>{n+=parseInt(i[r])}),n};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"bg-white rounded-md shadow-md px-2 py-2",children:e.jsxs("table",{className:"w-full mt-2 text-center",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"S.No."}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"Ward No."}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"No. of SAF"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"No. of FAM"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"No. of Geo-Tagging"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"No. of Back To Citizen"}),e.jsx("td",{className:"bg-gray-200 border-[1px] border-gray-700 pl-1 font-semibold",children:"No. of FAM Pending"})]}),((d=l==null?void 0:l.data)==null?void 0:d.length)>0&&((m=l==null?void 0:l.data)==null?void 0:m.map((r,n)=>e.jsxs("tr",{children:[e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:n+1}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.ward_no}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.total_saf}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.total_fam}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.total_geotaging}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.total_btc}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1",children:r==null?void 0:r.pending_fam})]}))),e.jsxs("tr",{children:[e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold text-center",colSpan:2,children:"Total"}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:o("total_saf")}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:o("total_fam")}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:o("total_geotaging")}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:o("total_btc")}),e.jsx("td",{className:"border-[1px] border-gray-700 pl-1 font-semibold",children:o("pending_fam")})]})]})})})},k=()=>{const{get_MasterData:l,searchSafSamGeoTagging:o}=A(),[d,m]=h.useState(),[r,n]=h.useState(),[g,i]=h.useState(!1);v("SAF, SAM and Geo-Tagging Report");const b="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",N=D({fromDate:f().required("Field Required"),uptoDate:f().required("Field Required")}),a=S({initialValues:{fromDate:u(new Date).format("yy-MM-DD"),uptoDate:u(new Date).format("yy-MM-DD"),wardId:""},onSubmit:s=>{y()},validationSchema:N}),y=()=>{i(!0);let s={fromDate:a.values.fromDate,uptoDate:a.values.uptoDate,wardId:a.values.wardId};console.log("data before hitting api => ",s),p.post(o,s,j()).then(t=>{var c,x;((c=t==null?void 0:t.data)==null?void 0:c.status)==!0?(console.log("search success => ",t),n((x=t==null?void 0:t.data)==null?void 0:x.data)):console.log("error while search => ",t),i(!1)}).catch(t=>(console.log("error while search => ",t),i(!1)))};h.useEffect(()=>{w()},[]);const w=()=>{p.get(l,j()).then(s=>{var t,c,x;((t=s==null?void 0:s.data)==null?void 0:t.status)==!0&&m((x=(c=s==null?void 0:s.data)==null?void 0:c.data)==null?void 0:x.ward_master)}).catch(s=>console.log("error getting master list",s))};return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onChange:a.handleChange,onSubmit:a.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),e.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"fromDate",id:"",className:b,value:a.values.fromDate})}),e.jsx("div",{className:"col-span-12 text-end",children:a.touched.fromDate&&a.errors.fromDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.fromDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),e.jsx("div",{className:"col-span-6",children:e.jsx("input",{type:"date",name:"uptoDate",id:"",className:b,value:a.values.uptoDate})}),e.jsx("div",{className:"col-span-12 text-end",children:a.touched.uptoDate&&a.errors.uptoDate&&e.jsx(e.Fragment,{children:e.jsx("span",{className:"text-red-600 text-xs",children:a.errors.uptoDate})})})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),e.jsx("div",{className:"col-span-6",children:e.jsxs("select",{name:"wardId",id:"",className:b,children:[e.jsx("option",{value:"",children:"All"}),d==null?void 0:d.map(s=>e.jsx(e.Fragment,{children:e.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.ward_name})}))]})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:g?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex justify-start items-end",children:e.jsx(F,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):e.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(_,{})}),"Search"]})})]})]}),r!=null&&(r==null?void 0:r.length)!=0?e.jsx(e.Fragment,{children:e.jsx(M,{data:r})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),e.jsx("div",{className:"h-[20vh]"})]})};export{k as default};
