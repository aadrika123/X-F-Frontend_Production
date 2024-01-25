import{u as H,r as n,A as u,a as h,j as l,Q as f}from"./index-HXzSFZDl.js";import{u as Q}from"./formik.esm-vAUkrDjQ.js";import{T as Y}from"./ThemeStyle-mSkMd4lv.js";import{c as G,b as c}from"./object-GUVmbnYO.js";import{R as J}from"./RentalApiList-dg4qkorb.js";import{L as K}from"./Loader-AN_kqQ0B.js";import{b as W,a as y}from"./PowerupFunctions-m5kP1GwA.js";function ie(){const{inputStyle:a,labelStyle:i}=Y(),{api_UlbCircleList:F,api_locationByCircleList:T,api_addToll:$,api_getTollRateList:S}=J(),q=H(),[b,d]=n.useState(!1),[X,C]=n.useState(""),[P,L]=n.useState(""),[Z,R]=n.useState(""),[m,E]=n.useState(),[x,V]=n.useState(),[p,_]=n.useState(),A=G({circle:c().required("This field is required"),market:c().required("This field is required"),vendorName:c().required("This field is required"),mobile:c().required("Enter mobile no.").min(10,"Enter 10 digit number").max(10,"Enter 10 digit number"),address:c().required("This field is required"),rate:c().required("This field is required"),photo1Path:c().required("This field is required")}),v=(e,r)=>{f.dismiss(),r=="success"&&f.success(e),r=="error"&&f.error(e)},s=Q({initialValues:{circle:"",market:"",vendorName:"",vendorType:"",mobile:"",address:"",rate:"",photo1Path:""},enableReinitialize:!0,onSubmit:e=>{console.log("shop data",e),U(e)},validationSchema:A}),B=e=>{console.log("target type",e.target.type),console.log("check box name",e.target.name);let r=e.target.name,o=e.target.value;r=="photo1Path"&&I(r,e.target.files[0]),r=="circle"&&M(o),r=="vendorName"&&s.setFieldValue("vendorName",W(o,s.values.vendorName,50)),r=="mobile"&&s.setFieldValue("mobile",y(o,s.values.mobile,10)),r=="rate"&&s.setFieldValue("rate",y(o,s.values.rate,10))},I=(e,r)=>{console.log("name ,fileData ",e,r),C(r),e=="photo1Path"?s.setFieldValue("photo1Path",r):s.setFieldValue("photo2Path",r);const o=new FileReader;o.onloadend=()=>{e=="photo1Path"?L(o.result):R(o.result)},o.readAsDataURL(r)};console.log("form values",s.values);const U=e=>{console.log("data in form",e);let r,o;r=$,o={circleId:e==null?void 0:e.circle,marketId:e==null?void 0:e.market,vendorName:e==null?void 0:e.vendorName,vendorType:e==null?void 0:e.vendorType,address:e==null?void 0:e.address,rate:e==null?void 0:e.rate,mobile:e==null?void 0:e.mobile,photograph1:e==null?void 0:e.photo1Path},console.log("request body",o),u.post("".concat(r),o,h()).then(function(t){var g,j,w,N,k;console.log("response after data submitted",(j=(g=t==null?void 0:t.data)==null?void 0:g.data)==null?void 0:j.toll_no),((w=t==null?void 0:t.data)==null?void 0:w.status)===!0?(v("submitted successfully","success"),q("/submitScreen/toll/".concat((k=(N=t==null?void 0:t.data)==null?void 0:N.data)==null?void 0:k.toll_no))):v("Failed to submit","error")}).catch(function(t){console.log("errorrr.... ",t)})};n.useEffect(()=>{z(),O()},[]);const z=()=>{u.post(F,{},h()).then(e=>{console.log("circle list 1",e.data),E(e.data.data),d(!1)}).catch(e=>{console.log(e),d(!1)})},O=()=>{u.post(S,{},h()).then(e=>{console.log("circle list 1",e.data),_(e.data.data),d(!1)}).catch(e=>{console.log(e),d(!1)})},M=e=>{const r={circleId:e};u.post(T,r,h()).then(o=>{console.log("location list",o.data),o.data.status&&V(o.data.data)}).catch(o=>{console.log(o)})};return b?l.jsx(l.Fragment,{children:l.jsx("div",{className:"min-h-screen"})}):l.jsxs(l.Fragment,{children:[b&&l.jsx(K,{}),l.jsx("div",{className:"h-screen bg-[#FDFCFE] flex flex-row flex-wrap justify-center items-center p-3",children:l.jsxs("div",{className:"bg-white shadow-xl rounded-tl-[44px]  h-full sm:w-1/2 lg:w-1/3 w-full rounded-xl",children:[l.jsx("div",{className:"bg-[#5846BE] h-32 w-full mx-auto rounded-br-[68px] rounded-tl-[44px] opacity-90",children:l.jsxs("div",{className:"p-4 pt-12",children:[l.jsx("h1",{className:"text-gray-50 font-bold capitalize text-2xl",children:"Add Toll"}),l.jsx("h1",{className:"text-gray-50 capitalize text-[12px]",children:"Rent a Toll Booth and Secure Your Spot on the Road"})]})}),l.jsx("form",{onSubmit:s.handleSubmit,onChange:B,encType:"multipart/form-data",children:l.jsxs("div",{className:"bg-[#FFFFFF]  rounded-2xl shadow-md p-4 text-xs",children:[l.jsxs("div",{className:"p-2",children:[l.jsxs("div",{class:"valid-form flex flex-wrap flex-row -mx-4",children:[l.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[l.jsx("label",{className:"".concat(i," inline-block mb-2 "),children:"Circle"}),l.jsxs("select",{...s.getFieldProps("circle"),className:"".concat(a," inline-block w-full relative"),children:[l.jsx("option",{selected:!0,children:"select"}),m==null?void 0:m.map(e=>l.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.circle_name}))]}),l.jsx("p",{className:"text-red-500 text-xs absolute",children:s.touched.circle&&s.errors.circle?s.errors.circle:null})]}),l.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[l.jsx("label",{className:"".concat(i," inline-block mb-2 "),children:"Market"}),l.jsxs("select",{...s.getFieldProps("market"),className:"".concat(a," inline-block w-full relative"),children:[l.jsx("option",{selected:!0,children:"select"}),x==null?void 0:x.map(e=>l.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.market_name}))]}),l.jsx("p",{className:"text-red-500 text-xs absolute",children:s.touched.market&&s.errors.market?s.errors.market:null})]}),l.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[l.jsx("label",{className:"".concat(i," inline-block mb-2 "),children:"Vendor Type"}),l.jsxs("select",{...s.getFieldProps("vendorType"),className:"".concat(a," inline-block w-full relative"),children:[l.jsx("option",{selected:!0,children:"select"}),l.jsx("option",{value:"schedule",children:"Schedule"}),l.jsx("option",{value:"unschedule",children:"Unscheduled"})]}),l.jsx("p",{className:"text-red-500 text-xs absolute",children:s.touched.vendorType&&s.errors.vendorType?s.errors.vendorType:null})]}),l.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[l.jsx("h1",{className:"".concat(i," inline-block mb-2"),children:"Vendor name"}),l.jsx("input",{type:"text",name:"vendorName",className:"".concat(a," inline-block w-full relative"),onChange:s.handleChange,value:s.values.vendorName}),l.jsx("p",{className:"text-red-500 text-xs absolute",children:s.touched.vendorName&&s.errors.vendorName?s.errors.vendorName:null})]})]}),l.jsxs("div",{class:"valid-form flex flex-wrap flex-row -mx-4",children:[l.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[l.jsx("h1",{className:"".concat(i," inline-block mb-2"),children:"Mobile no."}),l.jsx("input",{type:"text",name:"mobile",className:"".concat(a," inline-block w-full relative"),onChange:s.handleChange,value:s.values.mobile}),l.jsx("p",{className:"text-red-500 text-xs absolute",children:s.touched.mobile&&s.errors.mobile?s.errors.mobile:null})]}),l.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[l.jsx("label",{className:"".concat(i," inline-block mb-2 "),children:"Landmark"}),l.jsx("input",{type:"text",name:"address",className:"".concat(a," inline-block w-full relative"),onChange:s.handleChange,value:s.values.address}),l.jsx("p",{className:"text-red-500 text-xs absolute",children:s.touched.address&&s.errors.address?s.errors.address:null})]}),l.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[l.jsx("label",{className:"".concat(i," inline-block mb-2 "),children:"Rate"}),l.jsxs("select",{...s.getFieldProps("rate"),className:"".concat(a," inline-block w-full relative"),children:[l.jsx("option",{selected:!0,children:"select"}),p==null?void 0:p.map(e=>l.jsxs("option",{value:e==null?void 0:e.id,children:[e==null?void 0:e.toll_type," (Rs.",e==null?void 0:e.rate,")"]}))]}),l.jsx("p",{className:"text-red-500 text-xs absolute",children:s.touched.rate&&s.errors.rate?s.errors.rate:null})]})]}),l.jsx("div",{class:"valid-form flex flex-wrap flex-row -mx-4",children:l.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[l.jsx("label",{className:"".concat(i," inline-block mb-2 "),children:"Image"}),l.jsx("input",{accept:"image/*",type:"file",name:"photo1Path",className:"".concat(a," inline-block w-full relative"),onChange:s.handleChange}),l.jsx("img",{src:"".concat(P),alt:"Upload img",className:"h-20"}),l.jsx("p",{className:"text-red-500 text-xs absolute",children:s.touched.photo1Path&&s.errors.photo1Path?s.errors.photo1Path:null})]})})]}),l.jsx("div",{className:"pb-8",children:l.jsx("button",{type:"submit",className:"bg-[#5846BE] px-7 py-2 text-white font-semibold rounded leading-5 shadow-lg w-full",children:"Save"})})]})})]})})]})}export{ie as default};
