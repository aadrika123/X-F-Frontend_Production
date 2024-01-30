import{u as y,R as v,b as D,w as S,j as s,r}from"./index-97iCPWLP.js";import{u as A}from"./formik.esm-R8Mvjfpr.js";import{F}from"./FormProvider-DGtSSwzC.js";import{T as g}from"./TextField-gZBGFbQd.js";import{S as P}from"./SelectField-zEYhsvL7.js";import"./index-p4M61wA7.js";import{P as _}from"./index-fOrkBWLW.js";import{S as R}from"./index-E7BxovEf.js";import"./ArrowRightIcon-gFB2HtTz.js";function B(){var c,i,o,x,m,h,j,p,f,N,u;const d=y(),[t,n]=v.useState({fromDate:"",uptoDate:"",wardId:"",userId:(c=d==null?void 0:d.user)==null?void 0:c.id,zoneId:"",paymentMode:"",page:1,perPage:10}),l=A({enableReinitialize:!0,initialValues:t,onSubmit:async(e,{setSubmitting:b})=>{n(e)}}),a=D({api:S.waterTcCollection,config:t,value:[t.fromDate,t.uptoDate,t.wardId,t.userId,t.zoneId,t.paymentMode,t.page,t.perPage],options:{enabled:!!t.fromDate}});return s.jsx(_,{title:"Collection Report",children:s.jsx("div",{className:"p-4",children:s.jsxs(F,{formik:l,children:[s.jsxs(r.Card,{children:[s.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:s.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Collection Report"})}),s.jsxs(r.CardBody,{children:[s.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"From Date :"})}),s.jsx("div",{children:s.jsx(g,{formik:l,type:"date",name:"fromDate",placeholder:"From Date"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Upto Date :"})}),s.jsx("div",{children:s.jsx(g,{formik:l,type:"date",name:"uptoDate",placeholder:"Upto Date"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Payment Mode :"})}),s.jsx("div",{children:s.jsxs(P,{name:"paymentMode",placeholder:"Payment Mode",formik:l,children:[s.jsx("option",{value:"",children:"All"}),s.jsx("option",{value:"CASH",children:"Cash"}),s.jsx("option",{value:"CHEQUE",children:"Cheque"}),s.jsx("option",{value:"ONLINE",children:"Online"})]})})]}),s.jsx("div",{className:"flex justify-center mt-5",children:s.jsx(r.Button,{color:"blue",size:"sm",ripple:!0,type:"submit",disabled:l.isSubmitting,onClick:l.handleSubmit,children:"Search"})})]})]}),a!=null&&a.isLoading?s.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"Loading..."}):s.jsx(s.Fragment,{children:s.jsxs("div",{className:"py-2 mt-6",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("h1",{className:"font-semibold text-sm",children:"Collection Report"}),s.jsxs("h1",{className:"font-semibold text-sm text-green-700",children:["Total Amount: ",(o=(i=a==null?void 0:a.data)==null?void 0:i.data)==null?void 0:o.totalAmount]})]}),s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),s.jsx("div",{children:((h=(m=(x=a==null?void 0:a.data)==null?void 0:x.data)==null?void 0:m.data)==null?void 0:h.length)>0?s.jsxs(s.Fragment,{children:[(f=(p=(j=a==null?void 0:a.data)==null?void 0:j.data)==null?void 0:p.data)==null?void 0:f.map((e,b)=>s.jsx(r.Card,{className:"mt-2 full",children:s.jsx(r.CardBody,{children:s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name :"}),s.jsx("h1",{className:"text-sm w-48 truncate",children:e==null?void 0:e.applicant_name})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["SAF No :"," "]}),s.jsx("h1",{className:"text-sm truncate w-40",children:(e==null?void 0:e.saf_no)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Property No :"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.property_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Ward No :"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.ward_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Zone:"}),s.jsx("h1",{className:"text-sm",children:(e==null?void 0:e.zone_name)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),s.jsx("h1",{className:"text-sm w-48 truncate",children:(e==null?void 0:e.address)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Mobile No :"," "]}),s.jsx("h1",{className:"text-sm truncate w-40",children:e==null?void 0:e.mobile_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Tran No :"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.tran_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Tran Date:"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.tran_date})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Mode:"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.transaction_mode})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Amount:"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.amount})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Collector Name:"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.emp_name})]})]})})})},b)),s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),s.jsx(R,{active:t,noOfPage:(u=(N=a==null?void 0:a.data)==null?void 0:N.data)==null?void 0:u.last_page,setActive:n})]}):s.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"No Data Found"})})]})})]})})})}export{B as default};
