import{aL as te,r as d,j as e,M as ne,bQ as we,bR as Le,t as _,g as re,aM as oe,c as Ie,d as I,a as de,b as We,A as C,o as Te,bS as ae,m as le,av as se,H as Se,l as De,bT as Fe,bU as $e}from"./index-e24d5f40.js";import{S as Ce}from"./react-select.esm-b195c2c5.js";const _e={content:{top:"30%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"transparent",border:"none"}};function ke(r){const[s,m]=te.useState(!1);function p(){}function j(){m(!1)}return d.useEffect(()=>{r!=null&&r.message&&m(!0)},[r==null?void 0:r.message]),e.jsx("div",{className:"",children:e.jsx(ne,{isOpen:s,onAfterOpen:p,onRequestClose:j,style:_e,contentLabel:"Example Modal",shouldCloseOnOverlayClick:!1,children:e.jsxs("div",{className:"p-10 py-8 border border-indigo-300 bg-white rounded-lg shadow-lg",children:[e.jsx("p",{onClick:j,className:"absolute right-8 top-8 cursor-pointer capitalize text-black hover:bg-red-300 font-light hover:underline",children:e.jsx(we,{})}),e.jsx("h1",{className:"text-5xl flex justify-center text-red-500 mx-auto",children:e.jsx(Le,{})}),e.jsx("div",{className:"font-normal text-gray-500",children:r==null?void 0:r.message}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{className:"bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-2 mt-6 flex justify-center",onClick:j,children:"Close"})})]})})})}function Ae(r){var V,P,M;const{t:s}=_(),[m,p]=d.useState(!1),[j,c]=d.useState(!1),[n,f]=d.useState(),[u,L]=d.useState([]),[W,w]=d.useState(),[i,v]=d.useState(),[F,g]=d.useState(!1),[T,ie]=d.useState(),[k,S]=d.useState(!1),[ce,A]=d.useState(!1),[xe,D]=d.useState(!1),{notify:N}=d.useContext(re),x="form-group col-span-4 md:col-span-1 mb-6 md:px-4",b="form-label inline-block mb-1 text-gray-600 text-sm font-semibold",h="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-sm",{api_NewWaterConnection:he,header:$,api_getHoldingSafOfLogin:be,api_getSafHoldingDetails:ue,api_userProfileDetails:Pe}=oe(),me=a=>{D(!0);const t={ulbId:r==null?void 0:r.selectedUlbId,connectionTypeId:a==null?void 0:a.typeofConnection,propertyTypeId:a==null?void 0:a.propertyType,ownerType:a==null?void 0:a.ownerType,category:a==null?void 0:a.categoryType,pipelineTypeId:a==null?void 0:a.pipelineType,connection_through:a==null?void 0:a.connectionThrough,landmark:"Landmark",safNo:a==null?void 0:a.selectedSafHol,holdingNo:a==null?void 0:a.selectedSafHol,wardId:a==null?void 0:a.new_ward_mstr_id,areaSqft:a==null?void 0:a.totalArea,address:a==null?void 0:a.address,pin:a==null?void 0:a.pincode,tenant:u,owners:n==null?void 0:n.owners};console.log("Payload Data",a),console.log("Final Payload",t),C.post(he,t,$).then(o=>{var y;o.data.status==!0?(D(!1),console.log("Data Really Saved",o),r.screen1Data(o.data.data),N("Application Applied Successfully","success")):(D(!1),console.log("False While Water Apply",o),w("Error While Apply : "+((y=o==null?void 0:o.data)==null?void 0:y.message)),N("Error While Apply Form","error"))}).catch(o=>{D(!1),console.log("Error while Water Apply",o),w("Exception While Apply"),N("Something Went Wrong","error")}),console.log("Final Payload",t)},ge=Ie({typeofConnection:I().required("Require"),connectionThrough:I().required("Require"),ownerType:I().required("Require"),propertyType:I().required("Require"),selectedSafHol:I().required("Require")}),pe=de(),l=We({initialValues:{typeofConnection:"",connectionThrough:"",ownerType:"",propertyType:"",categoryType:"",pipelineType:"",wardNo:"",totalArea:"",pincode:"",address:"",safNo:"",holdingNo:"",selectedSafHol:""},enableReinitialize:!0,onSubmit:(a,t)=>{console.log("Value.....",a),me(a)},validationSchema:ge}),je=a=>{let t=a.target.name,o=a.target.value;w(""),t==="propertyType"&&(o=="1"?p(!0):p(!1)),t==="ownerType"&&(o=="2"?g(!0):g(!1)),t=="pincode"&&l.setFieldValue("pincode",le(o,l.values.pincode,6)),t=="ownerName"&&l.setFieldValue("ownerName",se(o,l.values.ownerName,60)),t=="guardianName"&&l.setFieldValue("guardianName",se(o,l.values.guardianName,60)),t=="mobileNo"&&l.setFieldValue("mobileNo",le(o,l.values.mobileNo,10))},fe=()=>{if(l.setFieldValue("selectedSafHol",""),console.log("formik.values.connectionThrough",l.values.connectionThrough),l.values.connectionThrough==1)var a="holding";else if(l.values.connectionThrough==2)var a="saf";else return S(!1);c(!0),C.post(be,{type:a,ulbId:r==null?void 0:r.selectedUlbId},$).then(t=>{var o;t.data.status?(S(!0),console.log("List of Holding SAF",t),ie((o=t==null?void 0:t.data)==null?void 0:o.data),N(t.data.data.length+" "+a+" Found","success"),c(!1)):(S(!1),N("No "+a+" found against this account","error"),console.log("Error/No "+a+" Found",t),A("No "+a+" found against this account"),c(!1),w("No "+a+" found against this account"))}).catch(t=>{N("Something Went Wrong","error"),S(!1),console.log("Error while getting holding saf",t),c(!1)})};d.useEffect(()=>{fe()},[l.values.connectionThrough]),d.useEffect(()=>{Ne()},[l.values.selectedSafHol]);const Ne=()=>{L([]),O(),c(!0);const a={connectionThrough:l.values.connectionThrough,id:l.values.selectedSafHol,ulbId:r==null?void 0:r.selectedUlbId};C.post(ue,a,$).then(t=>{var o,y,U,R,q,H,E,B,z,G,Q,J,K,X,Y,Z,ee;console.log("Response of holding/saf",t),t.data.status==!0&&(c(!1),f((o=t==null?void 0:t.data)==null?void 0:o.data),l.setFieldValue("totalArea",(U=(y=t==null?void 0:t.data)==null?void 0:y.data)==null?void 0:U.areaInSqFt),l.setFieldValue("address",(q=(R=t==null?void 0:t.data)==null?void 0:R.data)==null?void 0:q.prop_address),l.setFieldValue("pincode",(E=(H=t==null?void 0:t.data)==null?void 0:H.data)==null?void 0:E.prop_pin_code),l.setFieldValue("new_ward_mstr_id",(z=(B=t==null?void 0:t.data)==null?void 0:B.data)==null?void 0:z.new_ward_mstr_id),l.setFieldValue("new_ward_no",(Q=(G=t==null?void 0:t.data)==null?void 0:G.data)==null?void 0:Q.new_ward_no),l.setFieldValue("ownerName",(K=(J=t==null?void 0:t.data)==null?void 0:J.data)==null?void 0:K.owner_name),l.setFieldValue("guardianName",(Y=(X=t==null?void 0:t.data)==null?void 0:X.data)==null?void 0:Y.guardian_name),l.setFieldValue("mobileNo",(ee=(Z=t==null?void 0:t.data)==null?void 0:Z.data)==null?void 0:ee.mobile_no),l.setFieldValue("ownerType",1)),t.data.status==!1&&(console.log("NO data......"+l.values.connectionThrough),w("No Data found against : "+l.values.selectedSafHol,"error"),N("No Data found against : "+l.values.selectedSafHol,"error"),A("No Data found against : "+l.values.selectedSafHol),f({message:"Please enter valid no."}),c(!1))}).catch(t=>{console.log("Failed to Saf Holding ",t),f({message:"Error While Fetching Data"}),c(!1)})};d.useEffect(()=>{O()},[l.values.connectionThrough]);const O=()=>{f(""),g(""),l.setFieldValue("totalArea",""),l.setFieldValue("address",""),l.setFieldValue("pincode",""),l.setFieldValue("new_ward_no",""),l.setFieldValue("new_ward_mstr_id",""),l.setFieldValue("ownerName",""),l.setFieldValue("guardianName",""),l.setFieldValue("mobileNo","")},ve=a=>{const t=window.confirm("Are you sure you want to delete this tenant?");console.log("key ",a),t&&(L(o=>o.filter(y=>{if(o.indexOf(y)==a)console.log("value matched at ",a);else return y})),N("Tenant deleted","info"))},ye=()=>{if(console.log("formik.values.ownerName ",l.values.ownerName,", Type",typeof l.values.ownerName),l.values.ownerName==""||l.values.ownerName==null)return v({ownerName:"Require"});if(l.values.guardianName==""||l.values.guardianName==null)return v({guardianName:"Require"});if(l.values.mobileNo==""||l.values.mobileNo==null)return v({mobileNo:"Require"});const a={ownerName:l.values.ownerName,guardianName:l.values.guardianName,email:l.values.email,mobileNo:l.values.mobileNo};L([...u,a]),N("Tenant Added","info"),v(),l.setFieldValue("ownerName",""),l.setFieldValue("guardianName",""),l.setFieldValue("email",""),l.setFieldValue("mobileNo","")};return e.jsxs(e.Fragment,{children:[j&&e.jsx(Te,{}),e.jsx(ke,{message:ce}),e.jsx("p",{className:"mt-6"}),e.jsx("div",{className:"block p-4 md:py-6 shadow-lg bg-white border border-gray-200 rounded-md mx-auto",children:e.jsx("form",{onSubmit:l.handleSubmit,onChange:je,children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4",children:[e.jsxs("div",{className:"col-span-4 grid grid-cols-1 md:grid-cols-4",children:[e.jsxs("div",{className:`${x}`,children:[e.jsxs("label",{className:`${b}`,children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),s("tranWaterDashboardIndex.connectionThroughLabel.label")]}),e.jsxs("select",{...l.getFieldProps("connectionThrough"),className:`${h} cursor-pointer `,children:[e.jsxs("option",{value:"",children:[" ",s("tranWaterDashboardIndex.selectUlbOptionLabel.label")]}),e.jsx("option",{value:"1",children:s("tranWaterDashboardIndex.holdingNoLabel.label")}),e.jsx("option",{value:"2",children:s("tranWaterDashboardIndex.safNoLabel.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.connectionThrough&&l.errors.connectionThrough?l.errors.connectionThrough:null})]}),e.jsxs("div",{className:`${x}`,children:[e.jsxs("label",{className:`${b}`,children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),s("tranWaterDashboardIndex.selectHoldingSafLabel.label")]}),e.jsxs("select",{disabled:!k,...l.getFieldProps("selectedSafHol"),className:`${h} ${k?"cursor-pointer":"cursor-not-allowed"}  `,children:[e.jsxs("option",{value:"",children:[s("tranWaterDashboardIndex.selectUlbOptionLabel.label")," "]}),T&&(T==null?void 0:T.map((a,t)=>e.jsx("option",{value:(a==null?void 0:a.new_holding_no)||(a==null?void 0:a.saf_no),children:(a==null?void 0:a.new_holding_no)||(a==null?void 0:a.saf_no)},t)))]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.selectedSafHol&&l.errors.selectedSafHol?l.errors.selectedSafHol:null})]}),e.jsxs("div",{className:`${x}`,children:[e.jsxs("label",{className:`${b}`,children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),s("tranWaterDashboardIndex.typeOfRequestLabel.label")]}),e.jsxs("select",{...l.getFieldProps("typeofConnection"),className:`${h} cursor-pointer `,children:[e.jsx("option",{value:"",children:s("tranWaterDashboardIndex.selectUlbOptionLabel.label")}),e.jsx("option",{value:"1",children:s("tranWaterDashboardIndex.newConnectionLabel.label")}),e.jsx("option",{value:"2",children:s("tranWaterDashboardIndex.regularizationLabel.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.typeofConnection&&l.errors.typeofConnection?l.errors.typeofConnection:null})]}),e.jsxs("div",{className:`${x}`,children:[e.jsxs("label",{className:`${b}`,children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),s("tranWaterDashboardIndex.ownerTypeLabel.label")]}),n!=null&&n.tenanted?e.jsxs("select",{...l.getFieldProps("ownerType"),className:`${h} `,children:[e.jsx("option",{value:"",children:s("tranWaterDashboardIndex.selectUlbOptionLabel.label")}),e.jsx("option",{value:"1",children:s("tranWaterDashboardIndex.ownerLabel.label")}),e.jsx("option",{value:"2",children:s("tranWaterDashboardIndex.tenantLabel.label")})]}):e.jsx("div",{children:e.jsx("input",{type:"text",disabled:!0,value:"Owner",className:`${h} bg-gray-100`})}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.ownerType&&l.errors.ownerType?l.errors.ownerType:null})]})]}),e.jsxs("div",{className:"col-span-4 grid grid-cols-3",children:[e.jsxs("div",{className:`${x}`,children:[e.jsxs("label",{className:`${b}`,children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),s("tranWaterDashboardIndex.propertyTypeLabel.label")]}),e.jsxs("select",{...l.getFieldProps("propertyType"),className:`${h} cursor-pointer `,children:[e.jsx("option",{value:"",children:s("tranWaterDashboardIndex.selectUlbOptionLabel.label")}),((V=n==null?void 0:n.usageType)==null?void 0:V.length)>0&&((P=n==null?void 0:n.usageType)==null?void 0:P.map(a=>e.jsx("option",{value:a.id,children:a.usageType})))]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.propertyType&&l.errors.propertyType?l.errors.propertyType:null})]}),e.jsxs("div",{className:`${x}`,children:[e.jsxs("label",{className:`${b}`,children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),s("tranWaterDashboardIndex.categoryTypeLabel.label")]}),e.jsxs("select",{disabled:!m,...l.getFieldProps("categoryType"),type:"text",className:`${h} ${!m&&"bg-gray-300 opacity-30"}`,children:[e.jsx("option",{value:"",children:s("tranWaterDashboardIndex.selectUlbOptionLabel.label")}),e.jsx("option",{value:"APL",children:s("tranWaterDashboardIndex.aplLabel.label")}),e.jsx("option",{value:"BPL",children:s("tranWaterDashboardIndex.bplLabel.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.categoryType&&l.errors.categoryType?l.errors.categoryType:null})]}),e.jsxs("div",{className:`${x}`,children:[e.jsxs("label",{className:`${b}`,children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),s("tranWaterDashboardIndex.pipelineTypeLabel.label")]}),e.jsxs("select",{disabled:!m,...l.getFieldProps("pipelineType"),type:"date",className:`${h} ${!m&&"bg-gray-300 opacity-30"}`,children:[e.jsx("option",{value:"",children:s("tranWaterDashboardIndex.selectUlbOptionLabel.label")}),e.jsx("option",{value:"2",children:s("tranWaterDashboardIndex.newPipelineLabel.label")}),e.jsx("option",{value:"1",children:s("tranWaterDashboardIndex.oldPipelineLabel.label")})]}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.pipelineType&&l.errors.pipelineType?l.errors.pipelineType:null})]})]}),e.jsxs("div",{className:"col-span-4 grid grid-cols-3",children:[e.jsxs("div",{className:`${x}`,children:[e.jsxs("label",{className:`${b}`,children:[e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),s("tranWaterDashboardIndex.wardNoLabel.label")]}),e.jsxs("div",{children:[e.jsx("input",{disabled:!0,type:"text",...l.getFieldProps("new_ward_no"),className:`${h} bg-gray-100 `}),e.jsx("input",{type:"hidden",...l.getFieldProps("wardNo"),className:`${h} bg-gray-100 `})]})]}),e.jsxs("div",{className:`${x}`,children:[e.jsxs("label",{className:`${b}`,children:[e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),s("tranWaterDashboardIndex.totalAreaLabel.label")]}),e.jsx("input",{disabled:!0,type:"text",...l.getFieldProps("totalArea"),className:`${h} bg-gray-100 `}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.totalArea&&l.errors.totalArea?l.errors.totalArea:null})]}),e.jsxs("div",{className:`${x}`,children:[e.jsxs("label",{className:`${b}`,children:[e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),s("tranWaterDashboardIndex.pincodeLabel.label")]}),e.jsx("input",{type:"text",disabled:!0,...l.getFieldProps("pincode"),className:`${h} bg-gray-100`}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.pincode&&l.errors.pincode?l.errors.pincode:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-1",children:e.jsxs("div",{className:`${x}`,children:[e.jsxs("label",{className:`${b}`,children:[e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),s("tranWaterDashboardIndex.addressLabel.label")]}),e.jsx("textarea",{type:"text",disabled:!0,...l.getFieldProps("address"),className:`${h} bg-gray-100`}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.address&&l.errors.address?l.errors.address:null})]})}),(n==null?void 0:n.owners)&&e.jsx("div",{className:"col-span-4 grid grid-cols-1",children:e.jsxs("div",{className:`${x}`,children:[e.jsx("div",{className:"p-2 bg-indigo-500 rounded text-white",children:e.jsxs("p",{className:"font-semibold text-gray-200 flex text-xs",children:[" ",e.jsx("span",{className:"mt-0.5 mr-1",children:e.jsx(ae,{})})," ",s("tranWaterDashboardIndex.listOfOwnersLabel.label")]})}),e.jsxs("table",{class:"table-auto w-full mt-4 border rounded-md shadow-md",children:[e.jsx("thead",{class:"text-xs text-left text-gray-900 bg-indigo-300",children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{class:"p-2",children:e.jsx("div",{class:"",children:s("tranWaterDashboardIndex.slLabel.label")})}),e.jsx("th",{class:"p-2",children:e.jsx("div",{class:"",children:s("tranWaterDashboardIndex.applicantNameLabel.label")})}),e.jsx("th",{class:"p-2",children:e.jsx("div",{class:"",children:s("tranWaterDashboardIndex.guardianNameLabel.label")})}),e.jsx("th",{class:"p-2",children:e.jsx("div",{class:"",children:s("tranWaterDashboardIndex.mobileNoLabel.label")})}),e.jsx("th",{class:"p-2",children:e.jsx("div",{class:"",children:s("tranWaterDashboardIndex.emailLabel.label")})})]})}),e.jsx("tbody",{class:"text-sm divide-y divide-gray-100",children:e.jsx(e.Fragment,{children:(M=n==null?void 0:n.owners)==null?void 0:M.map((a,t)=>e.jsxs("tr",{children:[e.jsx("td",{}),e.jsx("td",{class:"p-2",children:e.jsxs("div",{class:"font-semibold text-gray-800 text-left text-xs",children:[t+1,"."]})}),e.jsx("td",{class:"p-2",children:e.jsx("div",{class:"font-medium text-gray-800 text-left text-xs",children:a!=null&&a.ownerName?a==null?void 0:a.ownerName:"N/A"})}),e.jsx("td",{class:"p-2",children:e.jsx("div",{class:"text-left",children:a!=null&&a.guardianName?a==null?void 0:a.guardianName:"N/A"})}),e.jsx("td",{class:"p-2",children:e.jsx("div",{class:"text-left font-medium text-gray-800  text-xs",children:a!=null&&a.mobileNo?a==null?void 0:a.mobileNo:"N/A"})}),e.jsx("td",{class:"p-2",children:e.jsx("div",{class:"font-medium text-gray-800 text-left text-xs",children:a!=null&&a.email?a==null?void 0:a.email:"N/A"})})]}))})})]})]})}),e.jsx("div",{className:"col-span-4 grid grid-cols-1",children:u.length==0?e.jsx("p",{className:"text-center font-semibold text-sm  text-red-500"}):e.jsxs("div",{className:`${x}`,children:[e.jsxs("div",{className:"p-2 bg-yellow-200 rounded",children:[e.jsxs("p",{className:"font-semibold text-gray-800 flex",children:[" ",e.jsx("span",{className:"mt-0.5 mr-1",children:e.jsx(ae,{})})," ",s("tranWaterDashboardIndex.listOfTenantsLabel.label")]}),e.jsx("p",{className:"text-sm font-semibold text-gray-700",children:s("tranWaterDashboardIndex.addOrRemoveTenantLabel.label")})]}),e.jsxs("table",{class:"table-auto w-full mt-4 border rounded-md shadow-md",children:[e.jsx("thead",{class:"text-xs text-left text-gray-900 bg-sky-300",children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{class:"p-2",children:e.jsx("div",{class:"",children:s("tranWaterDashboardIndex.slLabel.label")})}),e.jsx("th",{class:"p-2",children:e.jsx("div",{class:"",children:s("tranWaterDashboardIndex.applicantNameLabel.label")})}),e.jsx("th",{class:"p-2",children:e.jsx("div",{class:"",children:s("tranWaterDashboardIndex.guardianFatherLabel.label")})}),e.jsx("th",{class:"p-2",children:e.jsx("div",{class:"",children:s("tranWaterDashboardIndex.mobileNoLabel.label")})}),e.jsx("th",{class:"p-2",children:e.jsx("div",{class:"",children:s("tranWaterDashboardIndex.emailLabel.label")})}),e.jsx("th",{class:"p-2",children:e.jsx("div",{class:" text-center",children:s("tranWaterDashboardIndex.deleteLabel.label")})})]})}),e.jsx("tbody",{class:"text-sm divide-y divide-gray-100",children:e.jsx(e.Fragment,{children:u==null?void 0:u.map((a,t)=>e.jsxs("tr",{children:[e.jsx("td",{}),e.jsx("td",{class:"p-2",children:e.jsxs("div",{class:"font-semibold text-gray-800 text-left text-xs",children:[t+1,"."]})}),e.jsx("td",{class:"p-2",children:e.jsx("div",{class:"font-medium text-gray-800 text-left text-xs",children:a==null?void 0:a.ownerName})}),e.jsx("td",{class:"p-2",children:e.jsx("div",{class:"text-left",children:a==null?void 0:a.guardianName})}),e.jsx("td",{class:"p-2",children:e.jsx("div",{class:"text-left font-medium text-gray-800  text-xs",children:a==null?void 0:a.mobileNo})}),e.jsx("td",{class:"p-2",children:e.jsx("div",{class:"font-medium text-gray-800 text-left text-xs",children:a==null?void 0:a.email})}),e.jsx("td",{class:"",children:e.jsx("div",{class:"flex justify-center",children:e.jsx("button",{type:"button",onClick:()=>ve(t),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-4 h-4 text-red-500 hover:text-red-700",children:e.jsx("path",{"fill-rule":"evenodd",d:"M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z","clip-rule":"evenodd"})})})})})]}))})})]})]})}),F&&e.jsxs("div",{className:"col-span-4 grid grid-cols-4",children:[e.jsxs("div",{className:`${x}`,children:[e.jsxs("label",{className:`${b}`,children:[s("tranWaterDashboardIndex.applicantNameLabel.label")," ",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{type:"text",...l.getFieldProps("ownerName"),className:`${h} `,onChange:l.handleChange}),e.jsx("p",{className:"text-red-500 text-xs",children:(i==null?void 0:i.ownerName)&&(i==null?void 0:i.ownerName)})]}),e.jsxs("div",{className:`${x}`,children:[e.jsxs("label",{className:`${b}`,children:[s("tranWaterDashboardIndex.guardianNameLabel.label")," ",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{type:"text",...l.getFieldProps("guardianName"),className:`${h}`,onChange:l.handleChange}),e.jsx("p",{className:"text-red-500 text-xs",children:(i==null?void 0:i.guardianName)&&(i==null?void 0:i.guardianName)})]}),e.jsxs("div",{className:`${x}`,children:[e.jsxs("label",{className:`${b}`,children:[s("tranWaterDashboardIndex.mobileNoLabel.label")," ",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{type:"text",...l.getFieldProps("mobileNo"),className:`${h}`,onChange:l.handleChange}),e.jsx("p",{className:"text-red-500 text-xs",children:(i==null?void 0:i.mobileNo)&&(i==null?void 0:i.mobileNo)})]}),e.jsxs("div",{className:`${x}`,children:[e.jsxs("label",{className:`${b}`,children:[" ",s("tranWaterDashboardIndex.emailLabel.label")]}),e.jsx("input",{...l.getFieldProps("email"),className:`${h}`,onChange:l.handleChange}),e.jsx("p",{className:"text-red-500 text-xs",children:l.touched.email&&l.errors.email?l.errors.email:null})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-1",children:e.jsx("div",{className:"col-span-4",children:e.jsx("div",{className:"float-right mr-4 -mt-4 mb-5",children:e.jsx("button",{type:"button",onClick:ye,className:"bg-cyan-500 hover:bg-cyan-400 text-sm text-white px-3 py-1 rounded",children:s("tranWaterDashboardIndex.addLabel.label")})})})})]}),e.jsx("div",{className:"col-span-4 mb-3",children:e.jsx("div",{className:"text-center text-red-600 font-semibold",children:W&&"Error : "+W})}),e.jsx("div",{className:"col-span-4",children:e.jsx("div",{className:"flex justify-center",children:xe?e.jsx("p",{className:"font-medium",children:s("tranWaterDashboardIndex.submittingFormLabel.label")}):e.jsxs("div",{className:"space-x-8",children:[e.jsx("button",{type:"button",onClick:()=>pe(-1),className:" px-12 py-2.5 bg-red-600 text-white font-medium text-sm leading-tight  rounded  hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out",children:s("tranWaterDashboardIndex.cancelLabel.label")}),e.jsx("button",{type:"submit",className:" px-12 py-2.5 bg-indigo-600 text-white font-medium text-sm leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:s("tranWaterDashboardIndex.submitFormLabel.label")})]})})})]})})})]})}const Oe={overlay:{background:"#e6e6fc"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"transparent",border:"none",height:"600px"}};function Ve(r){const{t:s}=_(),[m,p]=te.useState(!1),[j,c]=d.useState(),[n,f]=d.useState(null),{api_ulbList:u}=oe(),{notify:L}=d.useContext(re),W=de(),w=Se().brand_tag;console.log("ULB Brand Tag",w),d.useEffect(()=>{r.openUlbModal==0&&p(!0)},[r.openUlbModal]),d.useEffect(()=>{De.get(u).then(g=>{console.log("ULB LIsts...",g.data.data),c([{id:2,ulb_name:` ${s("tranWaterDashboardIndex.selectUlbOptionsAMC.label")}`}])}).catch(g=>console.log("Error while fetching ulblist",g))},[]);function i(){}function v(){p(!1),W(-1)}const F=()=>{if(n.id)L("ULB Selected","success"),console.log("Start Button Clicked.."),r.nextScreen(),r.setSelectedUlb(n),p(!1);else return f(null)};return console.log("selectedOption",n),e.jsx("div",{className:"",children:e.jsx(ne,{isOpen:m,onAfterOpen:i,onRequestClose:v,style:Oe,contentLabel:"Example Modal",children:e.jsx("div",{className:"container",children:e.jsx("div",{class:"relative w-full h-full max-w-3xl md:h-auto border-indigo-600 shadow-indigo-200 shadow-sm rounded",children:e.jsxs("div",{class:"relative bg-white rounded-lg shadow ",children:[e.jsxs("div",{class:"flex items-start justify-between p-4 border-b rounded-t darks:border-gray-600",children:[e.jsxs("h3",{class:"text-base md:text-xl font-semibold text-gray-900 darks:text-white",children:[" ",s("tranWaterDashboardIndex.applyingForWaterConnectionLabel.label")]}),e.jsxs("button",{onClick:v,class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-600 darks:hover:text-white","data-modal-hide":"defaultModal",children:[e.jsx("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})}),e.jsx("span",{class:"sr-only",children:s("tranWaterDashboardIndex.closeModalLabel.label")})]})]}),e.jsxs("div",{class:"p-6 space-y-5",children:[e.jsx("p",{class:"md:text-sm leading-relaxed text-gray-500 text-xs",children:s("tranWaterDashboardIndex.welcomeMessageLabel.label")}),e.jsx("p",{class:"md:text-sm leading-relaxed text-gray-500 text-xs",children:s("tranWaterDashboardIndex.processApplicationLabel.label")}),e.jsx("p",{class:"md:text-sm leading-relaxed text-gray-500 text-xs",children:s("tranWaterDashboardIndex.readInstructionsLabel.label")})]}),e.jsxs("div",{className:"block md:flex justify-center space-x-4",children:[e.jsx("div",{className:"font-semibold text-center",children:s("tranWaterDashboardIndex.selectUlbtLabel.label")}),e.jsx("div",{className:"md:w-1/2 w-auto mr-5",children:e.jsx(Ce,{defaultValue:n,onChange:f,getOptionLabel:g=>g.ulb_name,getOptionValue:g=>g.id,options:j,isClearable:!0,isLoading:!j})})]}),e.jsx("div",{className:"text-center",children:n&&(n==null?void 0:n.id)!=""?e.jsxs("p",{children:[s("tranWaterDashboardIndex.applyingForLabel.label"),e.jsx("span",{className:"text-indigo-500 mx-2",children:n==null?void 0:n.ulb_name})]}):e.jsxs("p",{className:"text-red-500 py-2 mx-2",children:[" ",s("tranWaterDashboardIndex.selectUlbtLabel.label")]})}),e.jsxs("div",{class:"flex flex-row-reverse items-center p-6 border-t border-gray-200 rounded-b",children:[e.jsx("button",{onClick:F,disabled:!(n!=null&&n.id),class:"mx-2 text-white disabled:bg-gray-500 disabled:scale-100 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center darks:bg-indigo-600 darks:hover:bg-indigo-700 darks:focus:ring-indigo-800",children:s("tranWaterDashboardIndex.startLabel.label")}),e.jsx("button",{onClick:v,class:"mx-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg border border-red-200 text-sm font-medium px-5 py-2.5 focus:z-10 ",children:s("tranWaterDashboardIndex.cancelLabel.label")})]})]})})})})})}function qe(){const{t:r}=_(),[s,m]=d.useState(0),[p,j]=d.useState(),[c,n]=d.useState(),f=u=>{console.log("Screen 1 Data After Apply Water",u),j(u),m(2)};return e.jsxs(e.Fragment,{children:[e.jsx(Ve,{openUlbModal:s,nextScreen:()=>m(1),setSelectedUlb:u=>n(u)}),e.jsxs("div",{className:"grid grid-cols-12 gap-10",children:[e.jsxs("div",{className:"md:col-span-9 col-span-12",children:[e.jsxs("p",{className:"border p-2 bg-indigo-500 text-gray-200 rounded shadow-md",children:[r("tranWaterDashboardIndex.applyingForLabel.label")," ",e.jsx("span",{className:"font-semibold text-gray-100",children:c==null?void 0:c.ulb_name})]}),e.jsxs("div",{className:`${s==1?"block":"hidden"} `,children:["   ",e.jsx(Ae,{screen1Data:f,selectedUlbId:c==null?void 0:c.id})]}),e.jsxs("div",{className:`${s==2?"block":"hidden"} `,children:["   ",e.jsx(Fe,{data:p})]})]}),e.jsxs("div",{className:"md:col-span-3 col-span-12",children:[e.jsxs("p",{className:"border-2 border-indigo-400 p-2 text-center bg-white text-xl shadow-md",children:[" ",r("tranWaterDashboardIndex.faqLabel.label")," "]}),e.jsx($e,{})]})]})]})}export{qe as default};
