import{b as I,d as T,S as W,Q as C,p as x,c as j,j as r}from"./index-CUXWRp7E.js";import{P as H}from"./index-Nw9NoOgx.js";import{u as L}from"./router-vn-0iGwJ.js";import{u as S}from"./formik.esm-ilDmhU_v.js";import{c as A,a as o}from"./index.esm-19LW8OGO.js";import{F as z}from"./FormProvider-AqaH0m2Q.js";import{T as t}from"./TextField-lIRIs8bD.js";import{L as B}from"./LoaderButton-FrOaBsPk.js";import{S as d}from"./SelectField-rfwRcLQn.js";import"./index-9INnh4Fj.js";import{r as D}from"./tailwind-umh7vczy.js";import"./reactQuery-VYMV1vFj.js";import"./axios-lPgvryBG.js";import"./reactIcons-lANGEfNm.js";import"./headlessui-pLs_kC1m.js";import"./customInputValidation-8tSUGdUh.js";const m=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],P=[{id:1,label:"Zone A-East",value:"1"},{id:2,label:"Zone B-West",value:"2"},{id:3,label:"Zone C-North",value:"3"},{id:4,label:"Zone D-South",value:"4"}];function re(){var h,b,u,g;I();const N=L(),{mutateAsync:f,isLoading:w}=T({}),a=S({validationSchema:A().shape({name:o().required("Name is required"),mobile:o().required("Mobile is required"),zoneId:o().required("Zone is required"),wardId:o().required().label("Ward"),address:o().required("Address is required"),propertyType:o().required("Property Type is required"),consumerNo:o().when("isConsumer",{is:e=>e==="yes",then:()=>o().required("Consumer No is required")}),licenseNo:o().when("isLicense",{is:e=>e==="yes",then:()=>o().required("License No is required")}),waterHarvestingDate:o().when("isWaterHarvesting",{is:e=>e==="yes",then:()=>o().required("Date is required")})}),initialValues:{name:"",mobile:"",zoneId:"",wardId:"",address:"",isConsumer:"no",isLicense:"no",consumerNo:"",licenseNo:"",propertyType:"",isWaterHarvesting:"no",waterHarvestingDate:""},onSubmit:async(e,{})=>{W.fire({title:"Are you sure?",text:"You are going to backward of this application",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(i=>{i.isConfirmed&&q(e)}).catch(i=>{var l,n;console.log(i),C.error((n=(l=i==null?void 0:i.response)==null?void 0:l.data)==null?void 0:n.message)})}}),q=async e=>{var i,l;try{const n=await f({api:x.surveyNewApplyByTc,data:{propertyType:e==null?void 0:e.propertyType,propAddress:e==null?void 0:e.address,mobileNo:e==null?void 0:e.mobile,ownerName:e==null?void 0:e.name,ward:e==null?void 0:e.wardId,zone:e==null?void 0:e.zoneId,consumerNo:e==null?void 0:e.consumerNo,licenseNo:e==null?void 0:e.licenseNo,isWaterHarvesting:(e==null?void 0:e.isWaterHarvesting)=="yes",harvestingDate:e==null?void 0:e.waterHarvestingDate}});console.log(n==null?void 0:n.data),N("/amc-app/property/new-view-survey/".concat((l=(i=n==null?void 0:n.data)==null?void 0:i.data)==null?void 0:l.safId))}catch(n){console.log(n)}},{values:s}=a,{data:c,isPending:E,isError:v,error:Z,isLoading:y}=j({api:x.getWardByZone,config:{zoneId:s==null?void 0:s.zoneId},value:[s==null?void 0:s.zoneId],options:{enabled:!!(s!=null&&s.zoneId)}}),p=j({api:x.masterSaf,config:{},options:{enabled:!0}});return r.jsx(H,{title:"Basic Details",children:r.jsxs("div",{className:"px-4 py-4 flex-1",children:[r.jsx("div",{className:"flex flex-row justify-between mb-3",children:r.jsx("h1",{className:"text-sm font-semibold",children:"Basic Details"})}),r.jsx(D.Card,{children:r.jsx("div",{className:"p-4",children:r.jsx(z,{formik:a,children:r.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[r.jsx("div",{children:r.jsx(t,{label:"Name",name:"name",type:"text",formik:a,placeholder:"Enter your name"})}),r.jsx(t,{label:"Mobile",name:"mobile",type:"text",formik:a,placeholder:"Enter your mobile number",onInput:e=>{e.target.value.length>10?e.target.value=e.target.value.slice(0,10):e.target.value=e.target.value.replace(/[^0-9]/g,"")}}),r.jsxs(d,{label:"Property Type",name:"propertyType",formik:a,children:[r.jsx("option",{value:"",children:"Select"}),(u=(b=(h=p==null?void 0:p.data)==null?void 0:h.data)==null?void 0:b.property_type)==null?void 0:u.map(e=>r.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.property_type},e==null?void 0:e.id))]}),r.jsxs(d,{label:"Zone",name:"zoneId",formik:a,children:[r.jsx("option",{value:"",children:"select"}),P.map(e=>r.jsx("option",{value:e==null?void 0:e.value,children:e==null?void 0:e.label},e==null?void 0:e.id))]}),r.jsxs("div",{children:[r.jsxs(d,{label:"Ward",formik:a,name:"wardId",disabled:y,children:[r.jsx("option",{value:"",children:"select"}),(g=c==null?void 0:c.data)==null?void 0:g.map(e=>r.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.ward_name},e==null?void 0:e.id))]}),r.jsx("small",{className:"text-blue-500",children:y?"Please wait...":""})]}),r.jsx(t,{label:"Address",name:"address",type:"text",formik:a,placeholder:"Enter your address"}),r.jsx(d,{label:"Is Water Connection?",name:"isConsumer",formik:a,children:m.map(e=>r.jsx("option",{value:e.value,children:e.label},e.value))}),a.values.isConsumer==="yes"&&r.jsx(t,{label:"Consumer No",name:"consumerNo",type:"text",formik:a,placeholder:"Enter your consumer number"}),r.jsx(d,{label:"Is Trade License?",name:"isLicense",formik:a,children:m.map(e=>r.jsx("option",{value:e.value,children:e.label},e.value))}),a.values.isLicense==="yes"&&r.jsx(t,{label:"License No",name:"licenseNo",type:"text",formik:a,placeholder:"Enter your license number"}),r.jsx(d,{label:"Is Water Harvesting?",name:"isWaterHarvesting",formik:a,children:m.map(e=>r.jsx("option",{value:e.value,children:e.label},e.value))}),a.values.isWaterHarvesting==="yes"&&r.jsx(t,{label:"Water Harvesting Date",name:"waterHarvestingDate",type:"date",formik:a}),r.jsx("div",{className:"border-t border-gray-200"}),r.jsx("div",{className:"text-center mt-8",children:r.jsx(B,{type:"submit",loading:w,formik:a,className:"w-full",label:"Submit",children:"Save & Next"})})]})})})})]})})}export{re as default};
