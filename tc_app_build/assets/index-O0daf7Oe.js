import{b as _,c as I,p as z,j as s}from"./index-dL_EjbSt.js";import{f as H,d as F,u as R}from"./router-5yjtezO8.js";import{P as Z}from"./index-vQju75AN.js";import{r as o}from"./tailwind-6U-kYQAu.js";import{F as A}from"./FormProvider-YtxP4ZK3.js";import{T as L}from"./TextField-dPnkdtDO.js";import{L as W}from"./LoaderButton-Dwke1iI3.js";import{S as i}from"./SelectField-n1Rwev9N.js";import{u as E}from"./formik.esm-BnzrXcQN.js";import"./index-iFVn5AxS.js";import{c as O,a as $}from"./index.esm-uHa2PMRf.js";import{S as k}from"./index-K1OXNMvY.js";import{u as D}from"./usePathWisePermission-mVPPYgiX.js";import{I as M}from"./index.esm-DDfPnpCl.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./customInputValidation-jhKsg103.js";import"./ArrowRightIcon-g-6SOtWO.js";const c=[{id:1,label:"Old Property No",value:"propertyNo"},{id:2,label:"Holding No",value:"holdingNo"},{id:3,label:"Mobile",value:"mobileNo"},{id:4,label:"Owner Name",value:"ownerName"}],q=[{id:1,label:"Zone A-East",value:"1"},{id:2,label:"Zone B-West",value:"2"},{id:3,label:"Zone C-North",value:"3"},{id:4,label:"Zone D-South",value:"4"}],T=O().shape({filteredBy:$().required("Filter By is required")});function ue(){var h,j,b,f,m,y,N,g,P,u,v,w,S;const{pathname:B}=H(),r=_();D(B),F.useState(1),F.useState(10);const l=R(),{data:a,isPending:G,isLoading:C,isError:J,error:K,refetch:Q,isRefetching:U,isFetching:x,isFetched:X,isPreviousData:Y}=I({api:z.getFilterPropDetails,config:r==null?void 0:r.searchProperty,value:[(h=r==null?void 0:r.searchProperty)==null?void 0:h.filteredBy,(j=r==null?void 0:r.searchProperty)==null?void 0:j.parameter,(b=r==null?void 0:r.searchProperty)==null?void 0:b.zoneId,(f=r==null?void 0:r.searchProperty)==null?void 0:f.wardId,(m=r==null?void 0:r.searchProperty)==null?void 0:m.page,(y=r==null?void 0:r.searchProperty)==null?void 0:y.perPage],options:{enabled:!!((N=r==null?void 0:r.searchProperty)!=null&&N.filteredBy)}}),d=E({enableReinitialize:!0,initialValues:r==null?void 0:r.searchProperty,validationSchema:T,onSubmit:async e=>{r==null||r.setSearchProperty({...r==null?void 0:r.searchProperty,filteredBy:e==null?void 0:e.filteredBy,parameter:e==null?void 0:e.parameter,zoneId:e==null?void 0:e.zoneId,wardId:e!=null&&e.zoneId?e==null?void 0:e.wardId:""})}}),{values:n}=d,{data:t,isPending:V,isError:ee,error:se,isLoading:p}=I({api:z.getWardByZone,config:{zoneId:n==null?void 0:n.zoneId},value:[n==null?void 0:n.zoneId],options:{enabled:!!(n!=null&&n.zoneId)}});return s.jsx(Z,{title:"Search Survey",children:s.jsxs("div",{className:"px-4 py-4 flex-1",children:[s.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Survey"}),s.jsx("div",{children:s.jsx(o.Button,{size:"sm",color:"blue-gray",onClick:()=>l("/amc-app/property/new-survey-basic"),fullWidth:!0,children:s.jsx("small",{children:"New Survey"})})})]}),s.jsx(A,{formik:d,children:s.jsx(o.Card,{className:"w-full",children:s.jsxs(o.CardBody,{children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("h1",{className:"text-xs font-semibold",children:"Search Holding"}),s.jsxs("div",{className:"items-center flex justify-start px-2 py-1 border rounded-lg gap-1 cursor-pointer",onClick:()=>{r==null||r.setSearchProperty({filteredBy:"",parameter:"",zoneId:"",wardId:"",page:1,perPage:10}),d==null||d.resetForm()},children:[s.jsx(M,{className:"text-blue-600",size:"1.2rem"}),s.jsx("small",{className:"text-blue-600",children:"Reset"})]})]}),s.jsx("div",{className:"my-4 border-b-2"}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs(i,{label:"Filter By",name:"filteredBy",formik:d,children:[s.jsx("option",{value:"",children:"select"}),c==null?void 0:c.map(e=>s.jsx("option",{value:e==null?void 0:e.value,children:e==null?void 0:e.label},e==null?void 0:e.id))]}),s.jsxs(i,{label:"Zone",name:"zoneId",formik:d,children:[s.jsx("option",{value:"",children:"select"}),q.map(e=>s.jsx("option",{value:e==null?void 0:e.value,children:e==null?void 0:e.label},e==null?void 0:e.id))]}),s.jsxs("div",{children:[s.jsxs(i,{label:"Ward",formik:d,name:"wardId",disabled:p,children:[s.jsx("option",{value:"",children:"select"}),(g=t==null?void 0:t.data)==null?void 0:g.map(e=>s.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name},e==null?void 0:e.id))]}),s.jsx("small",{className:"text-blue-500",children:p?"Please wait...":""})]}),s.jsx(L,{label:"Parameter",name:"parameter",type:"text",formik:d})]}),s.jsx("div",{className:"flex justify-center mt-2",children:s.jsx(W,{type:"submit",disabled:x,loading:C,children:"Search"})})]})})}),s.jsx("div",{className:"mt-4",children:x?s.jsx("div",{className:"text-center py-40 text-blue-600",children:"Please Wait...."}):s.jsx(s.Fragment,{children:((u=(P=a==null?void 0:a.data)==null?void 0:P.data)==null?void 0:u.length)>0?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"my-4 border-b-2"}),(w=(v=a==null?void 0:a.data)==null?void 0:v.data)==null?void 0:w.map(e=>s.jsx(o.Card,{className:"w-full mb-5",children:s.jsxs(o.CardBody,{children:[s.jsx("div",{className:"flex items-center justify-between -mt-1",children:s.jsx("div",{className:"flex items-center",children:s.jsx("h1",{className:"font-bold text-xs",children:"Details"})})}),s.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-xs font-semibold",children:"Holding No:"}),s.jsx("p",{className:"text-xs text-end",children:e==null?void 0:e.holding_no})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-xs font-semibold",children:"Property No:"}),s.jsx("p",{className:"text-xs text-end",children:e==null?void 0:e.property_no})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-xs font-semibold",children:"Zone:"}),s.jsx("p",{className:"text-xs text-end",children:e==null?void 0:e.zone_name})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-xs font-semibold",children:"Address:"}),s.jsx("p",{className:"text-xs text-end truncate w-60",children:e==null?void 0:e.prop_address})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-xs font-semibold",children:"Mobile No:"}),s.jsx("p",{className:"text-xs text-end",children:e==null?void 0:e.mobile_no})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-xs font-semibold",children:"Owner Name:"}),s.jsx("p",{className:"text-xs text-end truncate w-60",children:e==null?void 0:e.owner_name})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-xs font-semibold",children:"Payment Status:"}),s.jsx("p",{className:"text-xs font-semibold ".concat((e==null?void 0:e.paid_status)===1?"text-green-500":"text-red-500"),children:(e==null?void 0:e.paid_status)===1?"Paid":"Pending"})]}),s.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),s.jsxs("div",{className:"flex items-center justify-around mt-4 -mb-1 gap-6",children:[s.jsx("button",{onClick:()=>l("/amc-app/property/survey-for-reassessment/".concat(e==null?void 0:e.id)),className:"text-xs font-bold text-blue-600",children:"Survey for Reassessment"}),"|",s.jsx("button",{onClick:()=>l("/amc-app/property/add-tc-visit?id=".concat(e==null?void 0:e.id)),className:"text-xs font-bold text-blue-600",children:"Add Field Visit"})]})]})},e==null?void 0:e.id)),s.jsx("div",{className:"my-4 border-b-2"}),s.jsx(k,{active:r==null?void 0:r.searchProperty,setActive:r==null?void 0:r.setSearchProperty,noOfPage:(S=a==null?void 0:a.data)==null?void 0:S.last_page})]}):s.jsx("div",{className:"flex items-center justify-center py-52",children:s.jsx("h1",{color:"gray",className:"text-center text-xs",children:"No Record Found!"})})})})]})})}export{ue as default};
