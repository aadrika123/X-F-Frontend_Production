import{u as P,a as W,w as F,p as z,j as s}from"./index-TVKchaO_.js";import{u as B,e as l}from"./react-HXRlOr-l.js";import{F as A}from"./FormProvider-VQsTVwN5.js";import{T as _}from"./TextField-pss9rZ3n.js";import{L as R}from"./LoaderButton-FmGEwX60.js";import{S as c}from"./SelectField-JgAfOctE.js";import{u as $}from"./formik.esm-BYe_KACy.js";import"./index-mWJwE1Yp.js";import{I as k}from"./index.esm-JRMsw2pH.js";import{c as q,a as I}from"./index.esm-yBrOrWJe.js";import{P as E}from"./index-NthHsoqN.js";import{S as M}from"./index-HhrZQbzH.js";import"./ArrowRightIcon-CCiBET_f.js";const O=[{id:1,label:"Consumer No",value:"consumerNo"},{id:2,label:"Property No",value:"propertyNo"},{id:3,label:"Applicant Name",value:"applicantName"},{id:4,label:"Mobile",value:"mobileNo"}],T=[{id:1,label:"Zone A-East",value:"1"},{id:2,label:"Zone B-West",value:"2"},{id:3,label:"Zone C-North",value:"3"},{id:4,label:"Zone D-South",value:"4"}];function ae(){var i,x,h,m,p,b,j,f,N,y,g,u,S,C,w,v;const o=B(),a=P(),r=W({api:F.searchWaterConsumer,config:a==null?void 0:a.searchWaterConsumerState,value:[(i=a==null?void 0:a.searchWaterConsumerState)==null?void 0:i.filterBy,(x=a==null?void 0:a.searchWaterConsumerState)==null?void 0:x.parameter,(h=a==null?void 0:a.searchWaterConsumerState)==null?void 0:h.wardId,(m=a==null?void 0:a.searchWaterConsumerState)==null?void 0:m.zoneId,(p=a==null?void 0:a.searchWaterConsumerState)==null?void 0:p.page,(b=a==null?void 0:a.searchWaterConsumerState)==null?void 0:b.perPage],options:{enabled:!!((j=a==null?void 0:a.searchWaterConsumerState)!=null&&j.filterBy)}}),n=$({enableReinitialize:!0,initialValues:a==null?void 0:a.searchWaterConsumerState,validationSchema:q({filterBy:I().required("Search String is required"),parameter:I().required("Search String is required")}),onSubmit:async(e,{resetForm:Z})=>{a==null||a.setSearchWaterConsumerState({...a==null?void 0:a.searchWaterConsumerState,filterBy:e==null?void 0:e.filterBy,parameter:e==null?void 0:e.parameter,zoneId:e==null?void 0:e.zoneId,wardId:e!=null&&e.zoneId?e==null?void 0:e.wardId:""})}}),{values:d}=n,t=W({api:z.getWardByZone,config:{zoneId:d==null?void 0:d.zoneId},value:[d==null?void 0:d.zoneId],options:{enabled:!!(d!=null&&d.zoneId)}});return s.jsx(E,{title:"Search Water Consumer",children:s.jsx("div",{className:"px-4 py-4 flex-1",children:s.jsxs(A,{formik:n,children:[s.jsx(l.Card,{className:"w-full",children:s.jsxs(l.CardBody,{children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Search Consumer"}),s.jsxs("div",{className:"items-center flex justify-start px-2 py-1 border rounded-lg gap-1 cursor-pointer",onClick:()=>{n==null||n.resetForm(),a==null||a.setSearchWaterConsumerState({filterBy:"",parameter:"",zoneId:"",wardId:"",page:1,perPage:10})},children:[s.jsx(k,{size:"1.2rem",className:"cursor-pointer text-blue-600"}),s.jsx("small",{className:" text-blue-600 ",children:"Reset"})]})]}),s.jsx("div",{className:"my-4 border-b-2"}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs(c,{label:"Filter By",name:"filterBy",formik:n,children:[s.jsx("option",{value:"",children:"select"}),O.map(e=>s.jsx("option",{value:e==null?void 0:e.value,children:e==null?void 0:e.label},e==null?void 0:e.id))]}),s.jsxs(c,{label:"Zone",name:"zoneId",formik:n,children:[s.jsx("option",{value:"",children:"select"}),T.map(e=>s.jsx("option",{value:e==null?void 0:e.value,children:e==null?void 0:e.label},e==null?void 0:e.id))]}),s.jsxs("div",{children:[s.jsxs(c,{label:"select",formik:n,name:"wardId",disabled:t==null?void 0:t.isLoading,children:[s.jsx("option",{value:"",children:"select"}),(N=(f=t==null?void 0:t.data)==null?void 0:f.data)==null?void 0:N.map(e=>s.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name},e==null?void 0:e.id))]}),s.jsx("small",{className:"text-blue-500",children:(t==null?void 0:t.isLoading)&&"Please wait..."})]}),s.jsx(_,{label:"Parameter",name:"parameter",type:"text",formik:n})]}),s.jsx("div",{className:"flex justify-center mt-2",children:s.jsx(R,{type:"submit",disabled:r==null?void 0:r.isLoading,children:"Search"})})]})}),r!=null&&r.isFetching?s.jsx("div",{className:"text-center py-52 text-blue-600",children:"Please Wait..."}):s.jsx(s.Fragment,{children:((g=(y=r==null?void 0:r.data)==null?void 0:y.data.data)==null?void 0:g.length)>0?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"my-4 border-b-2"}),(C=(S=(u=r==null?void 0:r.data)==null?void 0:u.data)==null?void 0:S.data)==null?void 0:C.map(e=>s.jsx(l.Card,{className:"w-full mb-5",children:s.jsxs(l.CardBody,{children:[s.jsx("div",{className:"flex items-center justify-between -mt-1",children:s.jsx("div",{className:"flex items-center",children:s.jsx("h1",{className:"font-bold text-sm",children:"Details"})})}),s.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Owner's Name:"}),s.jsx("p",{className:"text-sm text-end",children:e==null?void 0:e.owner_name})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Consumer No:"}),s.jsx("p",{className:"text-sm text-end",children:e==null?void 0:e.consumer_no})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Property No:"}),s.jsx("p",{className:"text-sm text-end",children:(e==null?void 0:e.folio_no)||"--"})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Mobile:"}),s.jsx("p",{className:"text-sm text-end truncate w-60",children:e==null?void 0:e.mobile_no})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),s.jsx("div",{className:"w-44",children:s.jsx("p",{className:"text-sm text-end truncate",children:e==null?void 0:e.address})})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Bill Amount:"}),s.jsx("p",{className:"text-sm text-end truncate w-60",children:(e==null?void 0:e.balance_amount)||0})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Payment Status:"}),s.jsx("p",{className:"text-sm font-semibold ".concat(e.paid_status?"text-green-500":"text-red-500"),children:e!=null&&e.paid_status?"Paid":"Pending"})]}),s.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),s.jsxs("div",{className:"flex items-center justify-around mt-4 -mb-1 gap-6",children:[s.jsx("div",{onClick:()=>o("/amc-app/water/consumer-details/".concat(e==null?void 0:e.id)),className:"text-xs font-bold text-blue-600",children:"Basic Details"}),s.jsx("div",{onClick:()=>o("/amc-app/water/demand-details/".concat(e==null?void 0:e.id)),className:"text-xs font-bold text-blue-600",children:"Demand Details"}),s.jsx("div",{onClick:()=>o("/amc-app/water/water-payment-history/".concat(e==null?void 0:e.id)),className:"text-xs font-bold text-blue-600",children:"Payment History"})]})]})},e==null?void 0:e.id)),s.jsx("div",{className:"my-4 border-b-2"}),s.jsx(M,{active:a==null?void 0:a.searchWaterConsumerState,noOfPage:(v=(w=r==null?void 0:r.data)==null?void 0:w.data)==null?void 0:v.total,setActive:a==null?void 0:a.setSearchWaterConsumerState})]}):s.jsx("div",{className:"text-center py-52",children:"No Record Found!"})}),s.jsx("div",{className:"my-4 border-b-2"})]})})})}export{ae as default};
