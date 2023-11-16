import{r as a,u as H,F,a as R,b as L,e as A,G as B,q as T,s as f,w as $,j as e,S as P,H as V,I as k,L as D,J as o}from"./index-2e37e53a.js";import{R as M}from"./index.esm-a2de8798.js";import{s as q}from"./superNavigation-79150193.js";import{B as E}from"./index.esm-1041c888.js";function Q(){const[w,I]=a.useState(),{type:i,filterParam:j,searchValueParam:c}=H(),[N,U]=a.useState(!1),[r,v]=a.useState(),[m,G]=a.useState(!1);a.useContext(F);const[y,O]=a.useState(!1);R("TC Routes"),L();const d=A();B(),console.log("last url.......");const x=s=>{v([])},S=T({filterBy:f().required("This is a required field !"),parameter:f().required("This is a required field !")}),t=$({initialValues:{filterBy:"",parameter:""},onSubmit:s=>{x()},validationSchema:S}),_=(s,n)=>{let l=`/holdingPropertyDetails/${n}`;q(s,l,d)},C=[{Header:"Ward No.",accessor:"ward_name"},{Header:"Owner's Name",accessor:"owner_name"},{Header:"Property Tax No.",accessor:"pt_no",Cell:({cell:s})=>e.jsx("span",{children:o(s.row.original.pt_no)})},{Header:"Holding No",accessor:"holding_no",Cell:({cell:s})=>e.jsx("span",{children:o(s.row.original.holding_no)})},{Header:"New Holding No",accessor:"new_holding_no",Cell:({cell:s})=>e.jsx("span",{children:o(s.row.original.new_holding_no)})},{Header:"Mobile No",accessor:"mobile_no",Cell:({cell:s})=>e.jsx("span",{children:o(s.row.original.mobile_no)})},{Header:"Address",accessor:"prop_address",Cell:({cell:s})=>e.jsx("span",{children:o(s.row.original.prop_address)})},{Header:"Status",Cell:({cell:s})=>e.jsxs("div",{children:[s.row.original.active_status===1&&e.jsx("span",{className:"text-green-400 font-semibold",children:"Active"}),s.row.original.active_status===0&&e.jsx("span",{className:"text-red-400 font-semibold",children:"Disabled"})]})},{Header:"Action",accessor:"id",Cell:({cell:s})=>e.jsx("button",{onClick:n=>_(n,s.row.values.id),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:"View"})},{Header:"All Modules",Cell:({cell:s})=>e.jsx("button",{onClick:()=>d(`/allmodules-dues/${s.row.values.id}`),className:"px-2 py-1 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Dues"})},{Header:"Geo",Cell:({cell:s})=>e.jsx("button",{onClick:n=>{var l,u,h,p,g,b;return d(`/geo-map/${(l=s.row.original)==null?void 0:l.latitude}/${(u=s.row.original)==null?void 0:u.longitude}/${(h=s.row.original)==null?void 0:h.new_holding_no}/${(p=s.row.original)==null?void 0:p.prop_address}/${(b=(g=s==null?void 0:s.row)==null?void 0:g.original)==null?void 0:b.id}`)},className:"px-2 py-1 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"Geo-Map"})}];return a.useEffect(()=>{c!="direct"&&(t.setFieldValue("filterBy",decodeURIComponent(j)),t.setFieldValue("parameter",decodeURIComponent(c)),x())},[]),y?e.jsx(P,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[N&&e.jsx(V,{}),(i=="re"||i=="mu")&&e.jsxs("div",{className:"bg-amber-50 px-4 py-4 mb-4 text-lg rounded-lg shadow-lg text-amber-600 inline-block",children:[e.jsx(k,{className:"inline mr-2 text-3xl"}),"For ",e.jsx("span",{className:"font-semibold",children:i=="re"?"Re-Assessment":"Mutation"})," of property search the property and then apply for ",i=="re"?"Re-Assessment":"Mutation"]}),e.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[e.jsx("div",{className:"ml-5 mt-2 text-center",children:e.jsxs("div",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600 flex justify-center items-center",children:[e.jsx("div",{className:"bg-indigo-50 rounded-full p-2 text-indigo-500 w-12 h-12 flex justify-center items-center mr-4",children:e.jsx(E,{className:"inline text-indigo-500"})}),e.jsx("div",{children:" Set Default Route from previous collection History"})]})}),e.jsx("form",{onSubmit:t.handleSubmit,children:e.jsxs("div",{className:"flex flex-col sm:flex-row justify-center sm:space-x-8 my-5 m-10",children:[e.jsxs("div",{className:"mt-3 sm:mt-0",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Search By ",w," ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"date",...t.getFieldProps("parameter"),className:"cypress_parameter w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer"}),e.jsx("p",{className:"text-red-500 text-xs",children:t.touched.parameter&&t.errors.parameter?t.errors.parameter:null})]}),e.jsx("div",{className:"mt-6",children:e.jsxs("button",{type:"submit",className:"cypress_submit_holding_search w-full border rounded-md border-indigo-700 bg-indigo-600 hover:bg-indigo-700 text-white  shadow-lg text-base font-semibold px-5 sm:m-3 py-1",children:[" ",e.jsxs("p",{className:"flex",children:[" ",e.jsxs("span",{className:"mt-1 mr-2",children:[" ",e.jsx(M,{})," "]})," ","Search Route"]})]})})]})}),e.jsxs("div",{className:"border shadow-xl bg-white mt-6 h-auto border-indigo-500 flex justify-center items-center flex-col md:flex-row",children:[e.jsx("div",{className:"flex-1"}),e.jsx("div",{className:"flex-1 flex justify-center items-center pb-10"})]})]}),e.jsxs("div",{className:"mt-10",children:[m&&(r==null?void 0:r.length)!=0&&e.jsx(D,{exportStatus:!1,columns:C,dataList:r}),m&&(r==null?void 0:r.length)==0&&e.jsx("div",{className:"text-xl font-semibold text-red-400 text-center",children:"Data Not Found"}),e.jsx("div",{className:"w-full h-40"})]})]})}export{Q as default};
