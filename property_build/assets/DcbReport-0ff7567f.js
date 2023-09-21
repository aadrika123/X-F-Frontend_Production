import{R as ce,_ as te,k as ne,r as i,o as re,bs as u,A as j,N as o,j as a,B as se,br as de,bR as ie,f as c,cr as t,bP as me}from"./index-bdacdace.js";import{C as he}from"./CitizenApplyApiList-b4c65dc6.js";import{L as g}from"./ListTable-3447205e.js";import"./GlobalFilter-8c9e94aa.js";const ue=ce.lazy(()=>te(()=>import("./PieChart-4dbfb909.js"),["assets/PieChart-4dbfb909.js","assets/index-bdacdace.js","assets/index-fdf8c803.css"])),be=()=>{const{get_MasterData:W,searchWardWiseDcb:U,yearList:k,getPieChartData:R}=me(),{api_getAllUlb:M}=he();ne("DCB Report");const _=window.localStorage.getItem("ulbId"),[f,P]=i.useState(),[w,Y]=i.useState(),[b,z]=i.useState(null),[N,v]=i.useState(!1),[V,F]=i.useState(!1),[r,A]=i.useState(!1),[d,Z]=i.useState(null),[l,q]=i.useState(null),[y,G]=i.useState(!0),[C,J]=i.useState(null),[m,L]=i.useState(!1),[x,T]=i.useState(!1),E="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",h=re({initialValues:{wardId:"",fiYear:b!=null&&b[0],withHh:"0",withCe:"0"},enableReinitialize:!0,onSubmit:e=>{F(!1),G(!1),console.log("submitting report search values => ",e),(e==null?void 0:e.ulbId)==""?T(!0):T(!1),((e==null?void 0:e.withHh)=="0"||(e==null?void 0:e.withHh[0])==null)&&A(!1),(e==null?void 0:e.withHh[0])=="on"&&A(!0),((e==null?void 0:e.withCe)=="0"||(e==null?void 0:e.withCe[0])==null)&&L(!1),(e==null?void 0:e.withCe[0])=="on"&&L(!0),K()}}),K=e=>{v(!0);let s;u(_)!="NA"?s={wardId:h.values.wardId,fiYear:h.values.fiYear}:s={fiYear:h.values.fiYear},j.post(U,s,o()).then(n=>{var H,B,S,O;((H=n==null?void 0:n.data)==null?void 0:H.status)==!0&&(Z((S=(B=n==null?void 0:n.data)==null?void 0:B.data)==null?void 0:S.dcb),q((O=n==null?void 0:n.data)==null?void 0:O.data)),v(!1)}).catch(n=>v(!1))};i.useEffect(()=>{F(!0),j.post(R,{},o()).then(e=>{var s,n;((s=e==null?void 0:e.data)==null?void 0:s.status)==!0&&J((n=e==null?void 0:e.data)==null?void 0:n.data)}).catch(e=>{}).finally(()=>F(!1)),j.get(W,o()).then(e=>{var s,n,H;((s=e==null?void 0:e.data)==null?void 0:s.status)==!0&&P((H=(n=e==null?void 0:e.data)==null?void 0:n.data)==null?void 0:H.ward_master)}).catch(e=>{}),j.post(k,{},o()).then(e=>{var s,n;((s=e==null?void 0:e.data)==null?void 0:s.status)==!0&&z((n=e==null?void 0:e.data)==null?void 0:n.data)}).catch(e=>{}),j.get(M,o()).then(e=>{var s,n;((s=e==null?void 0:e.data)==null?void 0:s.status)==!0&&Y((n=e==null?void 0:e.data)==null?void 0:n.data)}).catch(e=>{})},[]);const I=e=>{e.target.name,e.target.checked},Q=[{Header:"_",columns:[{Header:"Ward No",accessor:"ward_no",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"HH",accessor:"arrear_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"HH",accessor:"current_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"HH",accessor:"arrear_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"HH",accessor:"current_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"HH",accessor:"arrear_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"HH",accessor:"current_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"}],X=[{Header:"_",columns:[{Header:"Ward No",accessor:"ward_no",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"HH",accessor:"arrear_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"HH",accessor:"current_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"HH",accessor:"arrear_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"HH",accessor:"current_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"HH",accessor:"arrear_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"HH",accessor:"current_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"},{Header:"Collection Efficiency",columns:[{Header:"HH",accessor:"arrear_hh_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"Arrear",accessor:"arrear_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"HH",accessor:"current_hh_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"Current",accessor:"current_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})}]}],$=[{Header:"_",columns:[{Header:"Ward No",accessor:"ward_no",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"},{Header:"Collection Efficiency",columns:[{Header:"Arrear",accessor:"arrear_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"Current",accessor:"current_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})}]}],D=[{Header:"_",columns:[{Header:"Ward No",accessor:"ward_no",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"}],p=[{Header:"_",columns:[{Header:"ULB Name",accessor:"ulb_name",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"HH",accessor:"arrear_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"HH",accessor:"current_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"HH",accessor:"arrear_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"HH",accessor:"current_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"HH",accessor:"arrear_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"HH",accessor:"current_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"}],ee=[{Header:"_",columns:[{Header:"ULB Name",accessor:"ulb_name",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"HH",accessor:"arrear_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"HH",accessor:"current_demand_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"HH",accessor:"arrear_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"HH",accessor:"current_collection_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"HH",accessor:"arrear_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"HH",accessor:"current_balance_hh",Cell:e=>t(e==null?void 0:e.value),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"},{Header:"Collection Efficiency",columns:[{Header:"HH",accessor:"arrear_hh_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"Arrear",accessor:"arrear_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"HH",accessor:"current_hh_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"Current",accessor:"current_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})}]}],ae=[{Header:"_",columns:[{Header:"ULB Name",accessor:"ulb_name",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"},{Header:"Collection Efficiency",columns:[{Header:"Arrear",accessor:"arrear_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})},{Header:"Current",accessor:"current_eff",Cell:e=>a.jsxs(a.Fragment,{children:[t(e==null?void 0:e.value),"%"]})}]}],le=[{Header:"_",columns:[{Header:"ULB Name",accessor:"ulb_name",Cell:e=>u(e==null?void 0:e.value)}]},{Header:"DEMAND",columns:[{Header:"Arrear",accessor:"arrear_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"},{Header:"Current",accessor:"current_demand",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#22C55E]"}],className:"text-white bg-[#22C55E]"},{Header:"COLLECTION",columns:[{Header:"Arrear",accessor:"arrear_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"},{Header:"Current",accessor:"current_collection",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#6366F1]"}],className:"text-white bg-[#6366F1]"},{Header:"BALANCE",columns:[{Header:"Arrear",accessor:"old_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"},{Header:"Current",accessor:"current_due",Cell:e=>a.jsx(a.Fragment,{children:c(e==null?void 0:e.value)}),className:"text-white bg-[#EC4899]"}],className:"text-white bg-[#EC4899]"}];return a.jsxs(a.Fragment,{children:[N&&a.jsx(se,{}),V?a.jsxs("div",{className:"my-4 w-screen flex-col items-center justify-center",children:[a.jsx(de,{radius:"9",color:"#4338ca",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),a.jsx("span",{className:"italic",children:"Pie Chart Loading..."})," "]}):a.jsxs(a.Fragment,{children:[C!=null&&y&&(C==null?void 0:C.length)>0&&d==null&&a.jsxs("div",{className:"my-4 bg-white rounded-md py-2 shadow-md",children:[a.jsx("div",{className:"flex flex-row-reverse flex-wrap items-end justify-evenly gap-x-2 w-[100%] ",children:C==null?void 0:C.map(e=>a.jsxs("div",{className:"w-[20%] flex flex-col",children:[a.jsx("div",{className:"bg-indigo-500 w-max px-2 text-white rounded-md text-xs sm:text-sm font-semibold shadow-md shadow-indigo-300",children:e==null?void 0:e.fyear}),a.jsx(ue,{label:["Total Demand","Total Collection","Total Balance"],data:[e==null?void 0:e.totaldemand,e==null?void 0:e.totalcollection,e==null?void 0:e.totalbalance]})]}))}),a.jsxs("div",{className:"flex flex-wrap justify-center gap-2 sm:gap-4 items-center pt-4",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx("span",{className:"bg-[#22C55E] h-2 sm:h-4 w-7 sm:w-14 inline-block mr-1"}),a.jsx("span",{className:"text-xs sm:text-base",children:"Demand"})]}),a.jsxs("div",{className:"flex items-center",children:[a.jsx("span",{className:"bg-[#6366F1] h-2 sm:h-4 w-7 sm:w-14 inline-block mr-1"}),a.jsx("span",{className:"text-xs sm:text-base",children:"Collection"})]}),a.jsxs("div",{className:"flex items-center",children:[a.jsx("span",{className:"bg-[#EC4899] h-2 sm:h-4 w-7 sm:w-14 inline-block mr-1"}),a.jsx("span",{className:"text-xs sm:text-base",children:"Balance"})]})]})]})," "]}),a.jsxs("form",{onChange:h.handleChange,onSubmit:h.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md",children:[a.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),a.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[(_==""||_==null)&&a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Select ULB :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"ulbId",id:"",className:E,disabled:N,children:[a.jsx("option",{value:"",children:"Select"}),w==null?void 0:w.map(e=>a.jsx("option",{value:e.id,children:e.ulb_name}))]})}),a.jsx("div",{className:"col-span-12 text-start",children:h.touched.ulbId&&h.errors.ulbId&&a.jsx(a.Fragment,{children:a.jsx("span",{className:"text-red-600 text-xs",children:h.errors.ulbId})})})]}),h.values.ulbId!=""&&a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Ward No. :"}),a.jsx("div",{className:"col-span-6",children:a.jsxs("select",{name:"wardId",id:"",className:E,disabled:N,children:[a.jsx("option",{value:"",children:"All"}),f==null?void 0:f.map(e=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name})}))]})})]}),a.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[a.jsx("div",{className:"col-span-6 font-semibold",children:"Financial Year :"}),a.jsx("div",{className:"col-span-6",children:a.jsx("select",{name:"fiYear",id:"",className:E,disabled:N,children:b==null?void 0:b.map((e,s)=>a.jsx(a.Fragment,{children:a.jsx("option",{value:e,children:e})}))})})]}),a.jsx("div",{className:"flex flex-col justify-center w-full md:w-[20%]",children:a.jsxs("div",{className:"col-span-12 font-semibold flex items-center justify-center mt-4",children:[a.jsx("label",{htmlFor:"withHh",className:"mr-2",children:"With HH : "}),a.jsx("input",{type:"checkbox",name:"withHh",id:"withHh",className:"w-4 h-4 rounded",onChange:I})]})}),a.jsx("div",{className:"flex flex-col justify-center w-full md:w-[20%]",children:a.jsxs("div",{className:"col-span-12 font-semibold flex items-center justify-center mt-4",children:[a.jsx("label",{htmlFor:"withCe",className:"mr-2",children:"With Collection Efficiency : "}),a.jsx("input",{type:"checkbox",name:"withCe",id:"withCe",className:"w-4 h-4 rounded",onChange:I})]})}),a.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:a.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",a.jsx("span",{className:"mr-2",children:a.jsx(ie,{})}),"Search"]})})]})]}),!N&&d!=null&&(d==null?void 0:d.length)>0?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"bg-white p-2 rounded-md shadow-md mb-4 grid grid-cols-12 flex-wrap gap-4",children:[a.jsxs("div",{className:"col-span-12 sm:col-span-6 md:col-span-4 flex flex-col gap-1",children:[a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear Demand :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(l==null?void 0:l.total_arrear_demand)})]}),r&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear Demand HH :"}),a.jsx("span",{className:"font-semibold col-span-6",children:t(l==null?void 0:l.total_arrear_demand_hh)})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current Demand :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(l==null?void 0:l.total_current_demand)})]}),r&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current Demand HH :"}),a.jsx("span",{className:"font-semibold col-span-6",children:t(l==null?void 0:l.total_current_demand_hh)})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Demand :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(parseFloat(l==null?void 0:l.total_arrear_demand)+parseFloat(l==null?void 0:l.total_current_demand))})]})]}),a.jsxs("div",{className:"col-span-12 sm:col-span-6 md:col-span-4 flex flex-col gap-1",children:[a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear Collection :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(l==null?void 0:l.total_arrear_collection)})]}),r&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear Collection HH :"}),a.jsx("span",{className:"font-semibold col-span-6",children:t(l==null?void 0:l.total_arrear_collection_hh)})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current Collection :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(l==null?void 0:l.total_current_collection)})]}),r&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current Collection HH :"}),a.jsx("span",{className:"font-semibold col-span-6",children:t(l==null?void 0:l.total_current_collection_hh)})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Collection :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(parseFloat(l==null?void 0:l.total_arrear_collection)+parseFloat(l==null?void 0:l.total_current_collection))})]})]}),a.jsxs("div",{className:"col-span-12 sm:col-span-6 md:col-span-4 flex flex-col gap-1",children:[a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear Balance :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(l==null?void 0:l.total_old_due)})]}),r&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear Balance HH :"}),a.jsx("span",{className:"font-semibold col-span-6",children:t(l==null?void 0:l.total_arrear_balance_hh)})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current Balance :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(l==null?void 0:l.total_current_due)})]}),r&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current Balance HH :"}),a.jsx("span",{className:"font-semibold col-span-6",children:t(l==null?void 0:l.total_current_balance_hh)})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Balance :"}),a.jsx("span",{className:"font-semibold col-span-6",children:c(parseFloat(l==null?void 0:l.total_current_due)+parseFloat(l==null?void 0:l.total_old_due))})]})]}),m&&a.jsxs("div",{className:"col-span-12 sm:col-span-6 md:col-span-4 flex flex-col gap-1",children:[a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear Efficiency :"}),a.jsxs("span",{className:"font-semibold col-span-6",children:[t(l==null?void 0:l.total_arrear_eff),"%"]})]}),r&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Arrear HH Efficiency :"}),a.jsxs("span",{className:"font-semibold col-span-6",children:[t(l==null?void 0:l.total_arrear_hh_eff),"%"]})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current Efficiency :"}),a.jsxs("span",{className:"font-semibold col-span-6",children:[t(l==null?void 0:l.total_current_eff),"%"]})]}),r&&a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Current HH Efficiency :"}),a.jsxs("span",{className:"font-semibold col-span-6",children:[t(l==null?void 0:l.total_current_hh_eff),"%"]})]}),a.jsxs("div",{className:"grid grid-cols-12 items-center gap-2",children:[a.jsx("span",{className:"text-sm col-span-6",children:"Total Collection Efficiency :"}),a.jsxs("span",{className:"font-semibold col-span-6",children:[t(l==null?void 0:l.total_eff),"%"]})]})]})]}),!x&&r&&!m&&a.jsx(g,{columns:Q,dataList:d}),!x&&!r&&!m&&a.jsx(g,{columns:D,dataList:d}),!x&&!r&&m&&a.jsx(g,{columns:$,dataList:d}),!x&&r&&m&&a.jsx(g,{columns:X,dataList:d}),x&&r&&!m&&a.jsx(g,{columns:p,dataList:d}),x&&!r&&!m&&a.jsx(g,{columns:le,dataList:d}),x&&!r&&m&&a.jsx(g,{columns:ae,dataList:d}),x&&r&&m&&a.jsx(g,{columns:ee,dataList:d})]}):a.jsx(a.Fragment,{children:!y&&!N&&a.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),a.jsx("div",{className:"h-[20vh]"})]})};export{be as default};
