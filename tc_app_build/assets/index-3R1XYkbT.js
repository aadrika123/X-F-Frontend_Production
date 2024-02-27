import{u as A,a as F,p as L,j as e}from"./index-TVKchaO_.js";import{f as W,u as M,e as i}from"./react-HXRlOr-l.js";import{I}from"./index.esm-JRMsw2pH.js";import{T}from"./TextField-pss9rZ3n.js";import{S as z}from"./SelectField-JgAfOctE.js";import"./index-mWJwE1Yp.js";import{P as $}from"./index-NthHsoqN.js";import{S as R}from"./index-HhrZQbzH.js";import{u as H}from"./usePathWisePermission-NKSe41Dl.js";import"./formik.esm-BYe_KACy.js";import"./ArrowRightIcon-CCiBET_f.js";const D=[{id:1,value:"applicationNo",label:"Application No"},{id:2,value:"mobileNo",label:"Mobile No"},{id:3,value:"name",label:"Name"}];function es(){var h,t,g,x,f,p,j,v,N,y,b;const{pathname:C}=W(),{result:n}=H(C),r=A(),d=M(),{data:a,refetch:l,isFetching:k,isLoading:E,isPending:G}=F({api:L.safInbox,config:{[(h=r==null?void 0:r.searchVerification)==null?void 0:h.searchBy]:r==null?void 0:r.searchVerification.search,page:r==null?void 0:r.searchVerification.page,perPage:r==null?void 0:r.searchVerification.perPage},value:[(t=r==null?void 0:r.searchVerification)==null?void 0:t.page,(g=r==null?void 0:r.searchVerification)==null?void 0:g.perPage],options:{enabled:!!((x=r==null?void 0:r.searchVerification)!=null&&x.page)}}),m=()=>{r==null||r.setSearchVerification({...r==null?void 0:r.searchVerification,page:1}),l()},B=s=>{var c,o;if(((o=(c=r==null?void 0:r.user)==null?void 0:c.roleWithId[0])==null?void 0:o.role_id)==7){if(!(s!=null&&s.is_field_verified)){d("/amc-app/property/saf-site-verification/".concat(s==null?void 0:s.id));return}alert("Already Verified");return}else{if(!(s!=null&&s.is_agency_verified)){d("/amc-app/property/saf-site-verification/".concat(s==null?void 0:s.id));return}if(s!=null&&s.is_agency_verified&&!(s!=null&&s.is_geo_tagged)){d("/amc-app/property/geo-tagging/".concat(s==null?void 0:s.id));return}if(s!=null&&s.is_geo_tagged&&(s!=null&&s.is_agency_verified)){d("/amc-app/property/measurement-sheet/".concat(s==null?void 0:s.id));return}}};return e.jsx($,{title:"SAF Verification List",children:e.jsxs("div",{className:"p-4 ",children:[e.jsx(i.Card,{className:"w-full",children:e.jsxs(i.CardBody,{children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h1",{className:"font-semibold",children:"SAF Verification"}),e.jsxs("div",{className:"items-center flex justify-start px-2 py-1 border rounded-lg gap-1 cursor-pointer",onClick:()=>{r==null||r.setSearchVerification({searchBy:"",setSearchBy:"",search:"",setSearch:"",page:1,perPage:10}),l()},children:[e.jsx(I,{size:"1.2rem",className:"cursor-pointer text-blue-600"}),e.jsx("small",{className:" text-blue-600 ",children:"Reset"})]})]}),e.jsx("div",{className:"my-2 border-b-2"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-3",children:[e.jsx("div",{children:e.jsxs(z,{label:"Search By",value:(f=r==null?void 0:r.searchVerification)==null?void 0:f.searchBy,onChange:s=>{r==null||r.setSearchVerification({...r==null?void 0:r.searchVerification,searchBy:s.target.value})},name:"searchBy",children:[e.jsx("option",{value:"",children:"Select"}),D.map(s=>e.jsx("option",{value:s==null?void 0:s.value,children:s==null?void 0:s.label},s==null?void 0:s.id))]})}),e.jsx("div",{children:e.jsx(T,{label:"Search",name:"search",value:(p=r==null?void 0:r.searchVerification)==null?void 0:p.search,onChange:s=>{r==null||r.setSearchVerification({...r==null?void 0:r.searchVerification,search:s.target.value})}})})]}),e.jsx(i.Button,{color:"blue",onClick:m,fullWidth:!0,children:"Search"})]})}),k?e.jsx("div",{className:"flex justify-center items-center py-52",children:e.jsx("h1",{children:"Loading..."})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-b-2 border-gray-300 w-full py-2"}),((v=(j=a==null?void 0:a.data)==null?void 0:j.data)==null?void 0:v.length)>0?(y=(N=a==null?void 0:a.data)==null?void 0:N.data)==null?void 0:y.map((s,c)=>{var o,_,w,S,u,P;return e.jsxs(i.Card,{className:"mt-4 full",children:[e.jsx(i.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[e.jsxs("div",{className:"grid grid-cols-2 items-start",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"SAF No :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600",children:s==null?void 0:s.saf_no})})]}),e.jsxs("div",{className:"grid grid-cols-2 items-start",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Name :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 truncate w-40",children:s==null?void 0:s.owner_name})})]}),e.jsxs("div",{className:"grid grid-cols-2 items-start",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Ward :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600",children:s==null?void 0:s.ward_no})})]}),e.jsxs("div",{className:"grid grid-cols-2 items-start",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Assessment Type :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600",children:s==null?void 0:s.assessment})})]}),e.jsxs("div",{className:"grid grid-cols-2 items-start",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Mobile No :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 truncate w-40",children:s==null?void 0:s.mobile_no})})]}),e.jsxs("div",{className:"grid grid-cols-2 items-start",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Property Type :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 lowercase ",children:s==null?void 0:s.property_type})})]}),e.jsxs("div",{className:"grid grid-cols-2 items-start",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-600",children:"Verification Status :"})}),e.jsxs("div",{children:[((_=(o=r==null?void 0:r.user)==null?void 0:o.roleWithId[0])==null?void 0:_.role_id)==7&&(s!=null&&s.is_agency_verified&&!(s!=null&&s.is_field_verified)?e.jsx("h1",{className:"text-xs text-green-500 font-semibold  w-40",children:"Verified by TC"}):s!=null&&s.is_field_verified?e.jsx(e.Fragment,{children:e.jsx("h1",{className:"text-xs text-indigo-500 font-semibold ",children:"Pending Sanction Plan Verification"})}):e.jsx("h1",{className:"text-xs text-red-500 font-semibold",children:"Not Verified"})),((S=(w=r==null?void 0:r.user)==null?void 0:w.roleWithId[0])==null?void 0:S.role_id)==5&&(s!=null&&s.is_agency_verified&&!(s!=null&&s.is_geo_tagged)?e.jsx("h1",{className:"text-xs text-green-500 font-semibold  w-40",children:"Pending Geo Tagging"}):s!=null&&s.is_geo_tagged?e.jsx(e.Fragment,{children:e.jsx("h1",{className:"text-xs text-blue-500 font-semibold  w-40",children:"Pending Measurement Sheet"})}):e.jsx("h1",{className:"text-xs text-red-500 font-semibold",children:"Not Verified"}))]})]})]})}),e.jsx(i.CardFooter,{className:"-mt-8",children:e.jsxs("div",{className:"flex justify-between items-center gap-2 mb-1",children:[(n==null?void 0:n.create)&&e.jsxs(i.Button,{disabled:(s==null?void 0:s.is_field_verified)&&((P=(u=r==null?void 0:r.user)==null?void 0:u.roleWithId[0])==null?void 0:P.role_id)==7,onClick:()=>B(s),size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-blue-500 capitalize",children:["Verification",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]}),(n==null?void 0:n.update)&&e.jsxs(i.Button,{onClick:()=>d("/amc-app/property/naksha-verification/".concat(s==null?void 0:s.id)),size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-red-500 capitalize",children:["Sanction Plan",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})]})})]},c)}):e.jsx("div",{className:"flex justify-center items-center py-52",children:e.jsx("h1",{children:"No Record Found"})}),e.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),e.jsx(R,{active:r==null?void 0:r.searchVerification,noOfPage:(b=a==null?void 0:a.data)==null?void 0:b.last_page,setActive:r==null?void 0:r.setSearchVerification})]})]})})}export{es as default};
