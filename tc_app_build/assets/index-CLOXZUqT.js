import{a as g,u as f,l as y,p as w,Q as B,j as e,r,R as F}from"./index-FrIfp6aF.js";import{u as k}from"./formik.esm-ILGRl0OC.js";import{c as C,a as d}from"./index.esm-RkfN_1BU.js";import{F as _}from"./FormProvider-TMbKSDWq.js";import{T as P}from"./TextField-DsPinPgm.js";import{S as p}from"./SelectField-cwKdI9EX.js";import{P as S}from"./index-quOquyFO.js";import{S as q}from"./index-AoaF_XAn.js";function T(){var i,t,o,x,h,m,j,u;const v=g(),{searchSafApp:l,setSearchSafApp:c}=f(),{data:a,isLoading:b,refetch:L}=y({api:(i=w)==null?void 0:i.searchApplication,config:l,value:[l==null?void 0:l.filteredBy,l==null?void 0:l.searchBy,l==null?void 0:l.value,l.page,l.perPage],options:{enabled:!!(l!=null&&l.filteredBy)&&!!(l!=null&&l.searchBy)&&!!(l!=null&&l.value)}}),n=k({enableReinitialize:!0,initialValues:l,validationSchema:C().shape({filteredBy:d().required("Filtered By is required"),searchBy:d().required("Search By is required"),value:d().required("Value is required")}),onSubmit:async s=>{try{c(s)}catch(N){B.error(N.message)}}});return e.jsx(S,{title:"Search Applications",children:e.jsxs("div",{className:"p-4",children:[e.jsx(r.Card,{className:"mb-4",children:e.jsxs(r.CardBody,{children:[e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h1",{className:"text-lg font-semibold",children:"Search Applications"})}),e.jsx("div",{className:"border-t border-gray-200 my-2"}),e.jsxs(_,{formik:n,children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-2",children:[e.jsxs(p,{label:"Filtered By",name:"filteredBy",formik:n,children:[e.jsx("option",{value:"",children:"Select"}),[{label:"SAF",value:"saf"}].map(s=>e.jsx("option",{value:s.value,children:s.label},s.value))]}),e.jsxs(p,{label:"Search By",name:"searchBy",formik:n,children:[e.jsx("option",{value:"",children:"Select"}),[{label:"Application",value:"applicationNo"},{label:"Mobile",value:"mobileNo"},{label:"Name",value:"name"},{label:"Holding",value:"holding"}].map(s=>e.jsx("option",{value:s.value,children:s.label},s.value))]}),e.jsx("div",{className:"col-span-2",children:e.jsx(P,{label:"Value",name:"value",formik:n})})]}),e.jsx("div",{className:"flex justify-center mt-1",children:e.jsx(r.Button,{fullWidth:!0,type:"submit",color:"blue",children:"Search"})})]})]})}),e.jsx("div",{className:"border-t border-gray-200 my-2"}),b?e.jsx("div",{className:"flex justify-center my-16 items-center",children:e.jsx("h1",{className:"font-semibold",children:"Loading..."})}):((o=(t=a==null?void 0:a.data)==null?void 0:t.data)==null?void 0:o.length)>0?e.jsxs(e.Fragment,{children:[e.jsx(q,{active:l,noOfPage:(x=a==null?void 0:a.data)==null?void 0:x.total,setActive:c}),e.jsx("div",{className:"border-t border-gray-200 my-2"}),((m=(h=a==null?void 0:a.data)==null?void 0:h.data)==null?void 0:m.length)>0?(u=(j=a==null?void 0:a.data)==null?void 0:j.data)==null?void 0:u.map(s=>e.jsxs(F.Fragment,{children:[e.jsxs(r.Card,{className:"w-full",children:[e.jsxs(r.CardBody,{children:[e.jsxs("div",{className:"flex justify-between gap-2 mb-4",children:[e.jsxs("div",{className:"relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-900 uppercase rounded-md select-none whitespace-nowrap bg-red-500/20",children:[e.jsx("div",{className:"absolute w-4 h-4 top-2/4 left-1 -translate-y-2/4",children:e.jsx("span",{className:"mx-auto mt-1 block h-2 w-2 rounded-full bg-red-900 content-['']"})}),e.jsx("span",{className:"ml-4",children:s==null?void 0:s.current_role})]}),e.jsxs("div",{className:"relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20",children:[e.jsx("div",{className:"absolute w-4 h-4 top-2/4 left-1 -translate-y-2/4",children:e.jsx("span",{className:"mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']"})}),e.jsx("span",{className:"ml-4",children:s==null?void 0:s.status})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Application No"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm ",children:s==null?void 0:s.saf_no})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Name"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm ",children:s==null?void 0:s.owner_name})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Mobile No"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm ",children:s==null?void 0:s.mobile_no})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Assessment"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm ",children:s==null?void 0:s.assessment_type})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Ward"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm ",children:s==null?void 0:s.new_ward_no})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Address"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm truncate w-20",children:s==null?void 0:s.prop_address})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Label"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm truncate w-20",children:s==null?void 0:s.currentRole})})]})]}),e.jsx(r.CardFooter,{className:"-mt-8",children:e.jsxs(r.Button,{onClick:()=>v("/amc-app/property/saf-property-details/".concat(s.id)),size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-blue-500",children:["View Details",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})]}),e.jsx("div",{className:"border-t border-gray-200 my-2"})]},s==null?void 0:s.id)):null]}):e.jsx("div",{className:"flex justify-center my-16 items-center",children:e.jsx("h1",{className:"font-semibold",children:"No Record Found"})})]})})}export{T as default};
