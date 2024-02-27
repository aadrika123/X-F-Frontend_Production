import{u as F,a as u,p as z,j as s}from"./index-TVKchaO_.js";import{u as H,e as o}from"./react-HXRlOr-l.js";import{I as C}from"./index.esm-JRMsw2pH.js";import{u as _}from"./formik.esm-BYe_KACy.js";import{c as Z,a as D}from"./index.esm-yBrOrWJe.js";import{U as A,P as $}from"./index-NthHsoqN.js";import{F as E}from"./FormProvider-VQsTVwN5.js";import{T as L}from"./TextField-pss9rZ3n.js";import{L as O}from"./LoaderButton-FmGEwX60.js";import{S as i}from"./SelectField-JgAfOctE.js";import"./index-mWJwE1Yp.js";import{S as R}from"./index-HhrZQbzH.js";import"./ArrowRightIcon-CCiBET_f.js";const c=[{id:1,label:"Old Property No",value:"propertyNo"},{id:2,label:"Holding No",value:"holdingNo"},{id:3,label:"Mobile",value:"mobileNo"},{id:4,label:"Owner Name",value:"ownerName"}],k=[{id:1,label:"Zone A-East",value:"1"},{id:2,label:"Zone B-West",value:"2"},{id:3,label:"Zone C-North",value:"3"},{id:4,label:"Zone D-South",value:"4"}],W=Z().shape({filteredBy:D().required("Filter By is required")});function xe(){var h,b,j,f,m,y,N,g,P,w,v,I,S;const l=H(),r=F();A("Search Holding");const{data:a,isPending:M,isLoading:B,isError:q,error:T,refetch:U,isRefetching:G,isFetching:p,isFetched:J,isPreviousData:K}=u({api:z.getFilterPropDetails,config:r==null?void 0:r.searchProperty,value:[(h=r==null?void 0:r.searchProperty)==null?void 0:h.filteredBy,(b=r==null?void 0:r.searchProperty)==null?void 0:b.parameter,(j=r==null?void 0:r.searchProperty)==null?void 0:j.zoneId,(f=r==null?void 0:r.searchProperty)==null?void 0:f.wardId,(m=r==null?void 0:r.searchProperty)==null?void 0:m.page,(y=r==null?void 0:r.searchProperty)==null?void 0:y.perPage],options:{enabled:!!((N=r==null?void 0:r.searchProperty)!=null&&N.filteredBy)}}),d=_({enableReinitialize:!0,initialValues:r==null?void 0:r.searchProperty,validationSchema:W,onSubmit:async e=>{r==null||r.setSearchProperty({...r==null?void 0:r.searchProperty,filteredBy:e==null?void 0:e.filteredBy,parameter:e==null?void 0:e.parameter,zoneId:e==null?void 0:e.zoneId,wardId:e!=null&&e.zoneId?e==null?void 0:e.wardId:""})}}),{values:n}=d,{data:t,isPending:Q,isError:X,error:Y,isLoading:x}=u({api:z.getWardByZone,config:{zoneId:n==null?void 0:n.zoneId},value:[n==null?void 0:n.zoneId],options:{enabled:!!(n!=null&&n.zoneId)}});return s.jsx($,{title:"Search Holding",children:s.jsx("div",{className:"px-4 py-4 flex-1",children:s.jsxs(E,{formik:d,children:[s.jsx(o.Card,{className:"w-full",children:s.jsxs(o.CardBody,{children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Search Holding"}),s.jsxs("div",{className:"items-center flex justify-start px-2 py-1 border rounded-lg gap-1 cursor-pointer",onClick:()=>{r==null||r.setSearchProperty({filteredBy:"",parameter:"",zoneId:"",wardId:"",page:1,perPage:10}),d==null||d.resetForm()},children:[s.jsx(C,{className:"text-blue-600",size:"1.2rem"}),s.jsx("small",{className:" text-blue-600 ",children:"Reset"})]})]}),s.jsx("div",{className:"my-4 border-b-2"}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs(i,{label:"Filter By",name:"filteredBy",formik:d,children:[s.jsx("option",{value:"",children:"select"}),c==null?void 0:c.map(e=>s.jsx("option",{value:e==null?void 0:e.value,children:e==null?void 0:e.label},e==null?void 0:e.id))]}),s.jsxs(i,{label:"Zone",name:"zoneId",formik:d,children:[s.jsx("option",{value:"",children:"select"}),k.map(e=>s.jsx("option",{value:e==null?void 0:e.value,children:e==null?void 0:e.label},e==null?void 0:e.id))]}),s.jsxs("div",{children:[s.jsxs(i,{label:"Ward",formik:d,name:"wardId",disabled:x,children:[s.jsx("option",{value:"",children:"select"}),(g=t==null?void 0:t.data)==null?void 0:g.map(e=>s.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name},e==null?void 0:e.id))]}),s.jsx("small",{className:"text-blue-500",children:x?"Please wait...":""})]}),s.jsx(L,{label:"Parameter",name:"parameter",type:"text",formik:d})]}),s.jsx("div",{className:"flex justify-center mt-2",children:s.jsx(O,{type:"submit",disabled:p,loading:B,children:"Search"})})]})}),p?s.jsx("div",{className:"text-center py-40 text-blue-600",children:"Please Wait...."}):s.jsx(s.Fragment,{children:((w=(P=a==null?void 0:a.data)==null?void 0:P.data)==null?void 0:w.length)>0?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"my-4 border-b-2"}),(I=(v=a==null?void 0:a.data)==null?void 0:v.data)==null?void 0:I.map(e=>s.jsx(o.Card,{className:"w-full mb-5",children:s.jsxs(o.CardBody,{children:[s.jsx("div",{className:"flex items-center justify-between -mt-1",children:s.jsx("div",{className:"flex items-center",children:s.jsx("h1",{className:"font-bold text-sm",children:"Details"})})}),s.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Holding No:"}),s.jsx("p",{className:"text-sm text-end",children:e==null?void 0:e.holding_no})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Property No:"}),s.jsx("p",{className:"text-sm text-end",children:e==null?void 0:e.property_no})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Zone:"}),s.jsx("p",{className:"text-sm text-end",children:e==null?void 0:e.zone_name})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),s.jsx("p",{className:"text-sm text-end truncate w-60",children:e==null?void 0:e.prop_address})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Mobile No:"}),s.jsx("p",{className:"text-sm text-end",children:e==null?void 0:e.mobile_no})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name:"}),s.jsx("p",{className:"text-sm text-end truncate w-60",children:e==null?void 0:e.owner_name})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Payment Status:"}),s.jsx("p",{className:"text-sm font-semibold ".concat((e==null?void 0:e.paid_status)===1?"text-green-500":"text-red-500"),children:(e==null?void 0:e.paid_status)===1?"Paid":"Pending"})]}),s.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),s.jsxs("div",{className:"flex items-center justify-around mt-4 -mb-1 gap-6",children:[s.jsx("div",{onClick:()=>l("/amc-app/property/pro-basic-details/".concat(e==null?void 0:e.id)),className:"text-xs font-bold text-blue-600",children:"Basic Details"}),s.jsx("div",{onClick:()=>l("/amc-app/property/demand-details/".concat(e==null?void 0:e.id)),className:"text-xs font-bold text-blue-600",children:"Demand Details"}),s.jsx("div",{onClick:()=>l("/amc-app/property/payment-history/".concat(e==null?void 0:e.id)),className:"text-xs font-bold text-blue-600",children:"Payment History"})]})]})},e==null?void 0:e.id)),s.jsx("div",{className:"my-4 border-b-2"}),s.jsx(R,{active:r==null?void 0:r.searchProperty,setActive:r==null?void 0:r.setSearchProperty,noOfPage:(S=a==null?void 0:a.data)==null?void 0:S.last_page})]}):s.jsx("div",{className:"text-center py-52",children:"No Record Found!"})})]})})})}export{xe as default};
