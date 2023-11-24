import{t as ee,r,g as te,ad as ae,a as le,c as oe,d as m,b as re,j as e,p as se,bM as ne,bN as ie,bO as de,bx as ce,l as b,v as ue,f as me}from"./index-b1005ae7.js";import be from"./OtpCard-1bc32c48.js";import xe from"./MobileNoCard-f19a3e2e.js";import{S as he}from"./Search-64511aeb.js";function je(){const{t:s}=ee(),[L,n]=r.useState(!1),[_,w]=r.useState(),[pe,x]=r.useState(!1),[v,h]=r.useState(null),[fe,k]=r.useState(null),[D,p]=r.useState("");r.useState();const{notify:c}=r.useContext(te),[j,f]=r.useState(!1),[S,E]=r.useState(null),[T,P]=r.useState(!1),[F,O]=r.useState(null),[A,B]=r.useState(!1),[g,V]=r.useState([]),[q,y]=r.useState(!1),[N,I]=r.useState([]);ae("Search Property");const{api_getAllUlb:ge,api_sendMobileOtp:Z,unauth_ward_by_zone:U,unauth_search_property:z}=me(),W=le(),$={id:v,setId:h,showDemandStatus:q,setshowDemandStatus:y,data:_},H=t=>{B(!1),P(!1),p(""),x(!1),n(!0);let l={zone:o.values.zone,wardId:o.values.wardId,parameter:o.values.parameter,filteredBy:o.values.filterBy||"propertyNo",propId:t};console.log("before fetch holding details....",l),b.post(z,l).then(a=>{var i,d,C;console.log("search property list",(i=a==null?void 0:a.data)==null?void 0:i.data),(d=a==null?void 0:a.data)!=null&&d.status&&(w((C=a==null?void 0:a.data)==null?void 0:C.data),x(!0),p(""),k(l==null?void 0:l.ulbId)),n(!1)}).catch(a=>{console.log("Error while fetching Filter Data",a),c("Something went wrong!!","error"),p("Network problem."),u(!0,"Error occured. Please try again later."),n(!1),x(!1)})},R=oe({filterBy:m().required("This is a required field."),zone:m().required("This is a required field."),wardId:m().required("This is a required field."),parameter:m().required("This is a required field.")}),o=re({initialValues:{filterBy:"propertyNo",zone:"",wardId:"",parameter:"",propId:""},onSubmit:t=>{console.log("at submit form.....",t),h(null),y(!1),H(t)},validationSchema:R}),G=(t,l)=>{o.setFieldValue("parameter",l),o.setFieldValue("propId",t),H(t),I([])},J=t=>{let l=t.target.name,a=t.target.value;l=="holdingNo"&&o.setFieldValue("holdingNo",de(a,o.values.holdingNo,17)),l=="zone"&&Y(a)},K=t=>{n(!0),h(null),y(!1);let l={zone:o.values.zone,wardId:o.values.wardId,parameter:t,filteredBy:o.values.filterBy||"propertyNo"};if((l==null?void 0:l.zone)==""||(l==null?void 0:l.wardId)==""||(l==null?void 0:l.filteredBy)==""){ce("Fill all fields to search for property ");return}b.post(z,l).then(a=>{console.log("property response",a.data.data),a.data.status&&(w(a.data.data.data),I(a.data.data.data)),n(!1)}).catch(a=>{console.log(a),n(!1)})},M=(t=null)=>{console.log("passed mobile no....."),n(!0);let l;t==null?l={mobileNo:S}:l={mobileNo:t},console.log("before send otp. of direct search..",l),b.post(Z,l).then(a=>{var i,d;console.log("otp send response",a==null?void 0:a.data),(i=a==null?void 0:a.data)!=null&&i.status?(f(!0),c("OTP is send to your mobile no.","success")):(c((d=a==null?void 0:a.data)==null?void 0:d.message,"error"),u(!0,"Error occured. Please try again later.")),n(!1)}).catch(a=>{console.log("error otp send",a),u(!0,"Error occured. Please try again later."),n(!1)})},Q=()=>{c("Mobile no. has been verified successfully !","success"),W(`/viewDemandHoldingPropertyDirect/${v}`)},X=()=>{f(!1)},u=(t,l)=>{O(l),P(t)},Y=t=>{n(!0);let l={zoneId:t};console.log("before fetch wardby old ward...",l),b.post(U,l,ue()).then(function(a){console.log("wardlist by zone id list ....",a.data.data),V(a.data.data),n(!1)}).catch(function(a){console.log("errorrr.... ",a),n(!1)})};if(j)return e.jsx(be,{closeOtpModal:X,bottomNaviation:!0,headTitle:s("tranSearchHoldingPage.payPropertyTaxLabel.label"),reSendOtp:M,verifedMobileNo:S,callback:Q,setotpCardStatus:f});if(!j)return e.jsxs(e.Fragment,{children:[A&&e.jsx(xe,{title:"Enter Mobile No.",desc:"Enter mobile no. to proceed for payment",setverifedMobileNo:t=>{E(t),M(t)},closeMobileModal:()=>B(!1)}),T&&e.jsx(se,{activateBottomErrorCard:u,errorTitle:F}),e.jsxs("div",{className:"px-2 md:px-10 py-4 rounded-l bg-white border-0 border-slate-200 md:w-11/12 min-h-fit mx-auto shadow shadow-indigo-400 ",children:[e.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[e.jsxs("div",{className:"flex justify-between ml-5 mt-2 ",children:[e.jsx("p",{className:"font-semibold text-3xl ml-4 mt-1 text-gray-600",children:s("tranSearchHoldingPage.searchPropertyLabel.label")}),L&&e.jsx("div",{className:"text-blue-500 p-4 font-bold",children:ne("lg")})]}),e.jsx("form",{onSubmit:o.handleSubmit,onChange:J,children:e.jsxs("div",{className:"w-full  pl-10 pr-4 grid grid-cols-1 md:grid-cols-5 gap-4 py-12",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"min-w-[80px] whitespace-nowrap mx-2  form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s("tranSearchHoldingPage.searchPropertyLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...o.getFieldProps("filterBy"),className:"min-w-[80px] mx-2  cypress_filterBy cursor-pointer w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"",selected:!0,children:s("tranSearchHoldingPage.selectLabel.label")}),e.jsx("option",{value:"propertyNo",children:"Property No"}),e.jsx("option",{value:"holdingNo",children:"Holding No."}),e.jsx("option",{value:"ownerName",children:"Owner Name"}),e.jsx("option",{value:"mobileNo",children:"Mobile No"})]}),e.jsx("p",{className:"text-red-500 text-xs",children:o.touched.filterBy&&o.errors.filterBy?o.errors.filterBy:null})]}),e.jsxs("div",{className:"",children:[e.jsxs("label",{className:"min-w-[80px] mx-2  form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s("tranSearchHoldingPage.zoneLabel.label"),e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsxs("select",{id:"basic_details_1",...o.getFieldProps("zone"),className:"min-w-[80px] mx-2  form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md cursor-pointer ",children:[e.jsx("option",{value:"",selected:!0,children:s("tranSearchHoldingPage.selectLabel.label")}),e.jsx("option",{value:"1",children:"Zone A-East"}),e.jsx("option",{value:"2",children:"Zone B-West"}),e.jsx("option",{value:"3",children:"Zone C-North"}),e.jsx("option",{value:"4",children:"Zone D-South"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.zone&&o.errors.zone?o.errors.zone:null})]}),e.jsxs("div",{className:"",children:[e.jsxs("label",{className:"min-w-[80px] mx-2  form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s("tranSearchHoldingPage.wardNoLabel.label"),e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsxs("select",{id:"basic_details_1",...o.getFieldProps("wardId"),className:"min-w-[80px] mx-2  form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md cursor-pointer ",children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:s("tranSearchHoldingPage.selectLabel.label")}),g==null?void 0:g.map((t,l)=>e.jsx("option",{value:t==null?void 0:t.id,children:t==null?void 0:t.ward_name},l))]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.zone&&o.errors.zone?o.errors.zone:null})]}),e.jsxs("div",{className:"",children:[e.jsxs("label",{className:"min-w-[80px] mx-2  form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[o.values.filterBy=="propertyNo"&&s("tranSearchHoldingPage.oldPropertyNo.label"),o.values.filterBy=="holdingNo"&&s("tranSearchHoldingPage.propertyHoldingNumber.label"),o.values.filterBy=="ownerName"&&s("tranSearchHoldingPage.holdingOwnersName.label"),o.values.filterBy=="mobileNo"&&s("tranSearchHoldingPage.holdingMobileNumber.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("div",{className:"border border-solid border-gray-300 rounded focus:bg-white focus:border-blue-600 focus:outline  shadow-md mr-1 flex",children:[e.jsx("input",{type:"text",...o.getFieldProps("parameter"),id:"parameter",onBlur:t=>K(t.target.value),className:" min-w-[80px] mx-2 w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding transition ease-in-out m-0 focus:outline-none focus:text-gray-700 placeholder-gray-300"}),e.jsx("span",{className:"pt-1 cursor-pointer",onClick:()=>window.document.getElementById("parameter").focus(),children:e.jsx(he,{})})]}),e.jsx("p",{className:"text-red-500 text-xs",children:o.touched.parameter&&o.errors.parameter?o.errors.parameter:null}),e.jsx("div",{className:"min-w-[100px] border-0 relative border-cyan-500 bg-green-50 text-amber-800 font-semibold text-xs max-h-24 overflow-y-auto shadow",children:e.jsx("ul",{children:N==null?void 0:N.map((t,l)=>e.jsxs("li",{className:"pl-4 py-2 border-b cursor-pointer hover:text-amber-900 hover:scale-100 hover:bg-teal-200",onClick:()=>G(t==null?void 0:t.id,t==null?void 0:t.property_no),children:[t==null?void 0:t.property_no," "]},l))})})]})]})})]}),e.jsxs("div",{className:"mt-10",children:[e.jsx(ie,{values:$}),e.jsx("div",{className:"text-xl font-semibold text-red-400 text-center",children:D}),e.jsx("div",{className:"w-full h-40"})]})]})]})}export{je as default};
