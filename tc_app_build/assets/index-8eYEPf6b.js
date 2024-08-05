import{b as L,c as M,p as W,j as s}from"./index-CUXWRp7E.js";import"./router-vn-0iGwJ.js";import{u as Z}from"./formik.esm-ilDmhU_v.js";import"./index.esm-19LW8OGO.js";import{r as n}from"./tailwind-umh7vczy.js";import{F as q}from"./FormProvider-AqaH0m2Q.js";import{T as H}from"./TextField-lIRIs8bD.js";import{S as c}from"./SelectField-rfwRcLQn.js";import"./index-9INnh4Fj.js";import{P as E}from"./index-Nw9NoOgx.js";import"./module-Bxm9W1j2.js";import{S as U}from"./index-pxLnVCm9.js";import"./reactQuery-VYMV1vFj.js";import"./axios-lPgvryBG.js";import"./reactIcons-lANGEfNm.js";import"./headlessui-pLs_kC1m.js";import"./customInputValidation-8tSUGdUh.js";import"./ArrowRightIcon-L63fzh56.js";const i=[{id:1,label:"Zone A-East",value:"1"},{id:2,label:"Zone B-West",value:"2"},{id:3,label:"Zone C-North",value:"3"},{id:4,label:"Zone D-South",value:"4"}],O=[{id:1,label:"Property",value:"property"},{id:2,label:"Saf",value:"saf"}],h=[{id:1,label:"Cash",value:"CASH"},{id:2,label:"Cheque",value:"CHEQUE"},{id:3,label:"DD",value:"DD"},{id:4,label:"Online",value:"ONLINE"}];function is(){var p,x,j,f,m,b,N,y,u,g,v,P,C,w,F,_,k,D,R,S,A,I,T,z,B;const r=L(),a=M({api:(p=W)==null?void 0:p.collectionReport,config:{...r==null?void 0:r.collectionReportProperty,user:(x=r==null?void 0:r.user)==null?void 0:x.user_type},value:[(j=r==null?void 0:r.collectionReportProperty)==null?void 0:j.collectionType,(f=r==null?void 0:r.collectionReportProperty)==null?void 0:f.fromDate,(m=r==null?void 0:r.collectionReportProperty)==null?void 0:m.uptoDate,(b=r==null?void 0:r.collectionReportProperty)==null?void 0:b.wardId,(N=r==null?void 0:r.collectionReportProperty)==null?void 0:N.zoneId,(y=r==null?void 0:r.collectionReportProperty)==null?void 0:y.user,(u=r==null?void 0:r.collectionReportProperty)==null?void 0:u.paymentMode,(g=r==null?void 0:r.collectionReportProperty)==null?void 0:g.page,(v=r==null?void 0:r.collectionReportProperty)==null?void 0:v.perPage],options:{enabled:!!((P=r==null?void 0:r.collectionReportProperty)!=null&&P.collectionType)}}),o=Z({enableReinitialize:!0,initialValues:r==null?void 0:r.collectionReportProperty,onSubmit:e=>{r==null||r.setCollectionReportProperty(e)}}),{values:l}=o,t=M({api:(C=W)==null?void 0:C.getWardByZone,config:{zoneId:l==null?void 0:l.zoneId},value:[l==null?void 0:l.zoneId],options:{enabled:!!(l!=null&&l.zoneId)}});return s.jsx(E,{title:"Collection Report",children:s.jsxs("div",{className:"p-4 ",children:[s.jsx(q,{formik:o,children:s.jsx(n.Card,{className:"w-full",children:s.jsxs(n.CardBody,{children:[s.jsx("div",{className:"flex justify-between items-center",children:s.jsx("h1",{className:"font-semibold",children:"Collection Report"})}),s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),s.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-2",children:[s.jsxs("div",{className:"col-span-2",children:[s.jsx("div",{className:"flex justify-between items-center px-10 py-2 border rounded-lg bg-gray-200",children:O.map(e=>{var d;return s.jsxs("div",{className:"flex items-center",children:[s.jsx("input",{...o.getFieldProps("collectionType",{value:e==null?void 0:e.value}),value:e==null?void 0:e.value,checked:(d=l==null?void 0:l.collectionType)==null?void 0:d.includes(e==null?void 0:e.value),id:"checked-checkbox",type:"checkbox",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),s.jsx("label",{htmlFor:"checked-checkbox",className:"ms-2 text-sm font-medium text-gray-900 ",children:e==null?void 0:e.label})]},e==null?void 0:e.id)})}),s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"})]}),s.jsx("div",{children:s.jsx(H,{type:"date",label:"From Date",name:"fromDate",formik:o})}),s.jsx("div",{children:s.jsx(H,{type:"date",label:"Upto Date",name:"uptoDate",formik:o})}),s.jsx("div",{className:"-mt-3",children:s.jsxs(c,{name:"zoneId",formik:o,children:[s.jsx("option",{value:"",children:"select"}),i==null?void 0:i.map(e=>s.jsx("option",{value:e==null?void 0:e.value,children:e==null?void 0:e.label},e==null?void 0:e.id))]})}),s.jsx("div",{className:"-mt-3",children:s.jsxs(c,{formik:o,name:"wardId",children:[s.jsx("option",{value:"",children:"select"}),(F=(w=t==null?void 0:t.data)==null?void 0:w.data)==null?void 0:F.map(e=>s.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name},e==null?void 0:e.id))]})}),s.jsx("div",{className:" col-span-2",children:s.jsxs(c,{formik:o,name:"paymentMode",children:[s.jsx("option",{value:"",children:"select"}),h==null?void 0:h.map(e=>s.jsx("option",{value:e==null?void 0:e.value,children:e==null?void 0:e.label},e==null?void 0:e.id))]})})]}),s.jsx("div",{className:"flex justify-end mt-4",children:s.jsx(n.Button,{type:"submit",color:"blue",fullWidth:!0,children:"Search"})})]})})}),a!=null&&a.isLoading?s.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"Loading..."}):s.jsx(s.Fragment,{children:s.jsxs("div",{className:"py-2 mt-6",children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("h1",{className:"font-semibold text-sm",children:"Collection Report"}),s.jsxs("h1",{className:"font-semibold text-sm text-green-700",children:["Total Amount: ₹",Math.round((k=(_=a==null?void 0:a.data)==null?void 0:_.data)==null?void 0:k.totalAmt).toFixed(2)||0]})]}),s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),s.jsx("div",{children:((S=(R=(D=a==null?void 0:a.data)==null?void 0:D.data)==null?void 0:R.data)==null?void 0:S.length)>0?s.jsxs(s.Fragment,{children:[(T=(I=(A=a==null?void 0:a.data)==null?void 0:A.data)==null?void 0:I.data)==null?void 0:T.map((e,d)=>s.jsx(n.Card,{className:"mt-2 full",children:s.jsx(n.CardBody,{children:s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("div",{children:[s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Holding No:"}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.holding_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["SAF No :"," "]}),s.jsx("h1",{className:"text-sm truncate w-40",children:(e==null?void 0:e.saf_no)||"--"})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Property No :"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.property_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Ward No :"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.ward_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Mobile No :"," "]}),s.jsx("h1",{className:"text-sm truncate w-40",children:e==null?void 0:e.mobile_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Tran No :"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.tran_no})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Duration:"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.from_upto_fy_qtr})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Tran Date:"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.tran_date})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Mode:"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.transaction_mode})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold text-green-600",children:["Amount:"," "]}),s.jsxs("h1",{className:"text-sm text-green-600 font-semibold",children:["₹",Math.round(e==null?void 0:e.amount).toFixed(2)||0]})]}),s.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[s.jsxs("h1",{className:"text-sm font-semibold",children:["Collector Name:"," "]}),s.jsx("h1",{className:"text-sm",children:e==null?void 0:e.emp_name})]})]})})})},d)),s.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),s.jsx(U,{active:r==null?void 0:r.collectionReportProperty,noOfPage:(B=(z=a==null?void 0:a.data)==null?void 0:z.data)==null?void 0:B.last_page,setActive:r==null?void 0:r.setCollectionReportProperty})]}):s.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"No Data Found"})})]})})]})})}export{is as default};
