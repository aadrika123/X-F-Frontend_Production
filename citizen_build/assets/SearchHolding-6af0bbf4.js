import{t as re,r as o,g as se,ad as ae,a as oe,c as ne,d as p,b as ie,j as e,p as de,bM as ce,a1 as d,bN as xe,bO as be,bx as he,l as g,v as ue,f as me}from"./index-0fa96f22.js";import pe from"./OtpCard-a2ec7c69.js";import ge from"./MobileNoCard-6e604568.js";import{S as fe}from"./Search-f98327fb.js";function Pe(){const{t:a}=re(),[F,n]=o.useState(!1),[i,P]=o.useState(),[T,f]=o.useState(!1),[H,b]=o.useState(null),[ye,E]=o.useState(null),[O,y]=o.useState("");o.useState();const{notify:h}=o.useContext(se),[B,N]=o.useState(!1),[_,L]=o.useState(null),[D,I]=o.useState(!1),[A,V]=o.useState(null),[q,u]=o.useState(!1),[j,Z]=o.useState([]),[U,w]=o.useState(!1),[v,z]=o.useState([]);ae("Search Property");const{api_getAllUlb:Ne,api_sendMobileOtp:W,unauth_ward_by_zone:$,unauth_search_property:M}=me(),R=oe(),G={id:H,setId:b,showDemandStatus:U,setshowDemandStatus:w,data:i},k=t=>{u(!1),I(!1),y(""),f(!1),n(!0);let l={zone:s.values.zone,wardId:s.values.wardId,parameter:s.values.parameter,filteredBy:s.values.filterBy||"propertyNo",propId:t};console.log("before fetch holding details....",l),g.post(M,l).then(r=>{var c,x,C;console.log("search property list",(c=r==null?void 0:r.data)==null?void 0:c.data),(x=r==null?void 0:r.data)!=null&&x.status&&(P((C=r==null?void 0:r.data)==null?void 0:C.data),f(!0),y(""),E(l==null?void 0:l.ulbId)),n(!1)}).catch(r=>{console.log("Error while fetching Filter Data",r),h("Something went wrong!!","error"),y("Network problem."),m(!0,"Error occured. Please try again later."),n(!1),f(!1)})},J=ne({filterBy:p().required("This is a required field."),zone:p().required("This is a required field."),wardId:p().required("This is a required field."),parameter:p().required("This is a required field.")}),s=ie({initialValues:{filterBy:"propertyNo",zone:"",wardId:"",parameter:"",propId:""},onSubmit:t=>{console.log("at submit form.....",t),b(null),w(!1),k(t)},validationSchema:J}),K=(t,l)=>{alert(t+" hh "+l),s.setFieldValue("parameter",l),s.setFieldValue("propId",t),k(t),z([])},Q=t=>{let l=t.target.name,r=t.target.value;l=="holdingNo"&&s.setFieldValue("holdingNo",be(r,s.values.holdingNo,17)),l=="zone"&&le(r)},X=t=>{n(!0),b(null),w(!1);let l={zone:s.values.zone,wardId:s.values.wardId,parameter:t,filteredBy:s.values.filterBy||"propertyNo"};if((l==null?void 0:l.zone)==""||(l==null?void 0:l.wardId)==""||(l==null?void 0:l.filteredBy)==""){he("Fill all fields to search for property ");return}g.post(M,l).then(r=>{console.log("property response",r.data.data),r.data.status&&(P(r.data.data.data),z(r.data.data.data)),n(!1)}).catch(r=>{console.log(r),n(!1)})},S=(t=null)=>{console.log("passed mobile no....."),n(!0);let l;t==null?l={mobileNo:_}:l={mobileNo:t},console.log("before send otp. of direct search..",l),g.post(W,l).then(r=>{var c,x;console.log("otp send response",r==null?void 0:r.data),(c=r==null?void 0:r.data)!=null&&c.status?(N(!0),h("OTP is send to your mobile no.","success")):(h((x=r==null?void 0:r.data)==null?void 0:x.message,"error"),m(!0,"Error occured. Please try again later.")),n(!1)}).catch(r=>{console.log("error otp send",r),m(!0,"Error occured. Please try again later."),n(!1)})},Y=()=>{h("Mobile no. has been verified successfully !","success"),R(`/viewDemandHoldingPropertyDirect/${H}`)},ee=()=>{N(!1)},m=(t,l)=>{V(l),I(t)},te=(t,l)=>{console.log("incoming data => ",t,l),b(t),l==""||l==null||l==null?(u(!0),console.log("entered in condition")):(u(!1),L(l),S(l))},le=t=>{n(!0);let l={zoneId:t};console.log("before fetch wardby old ward...",l),g.post($,l,ue()).then(function(r){console.log("wardlist by zone id list ....",r.data.data),Z(r.data.data),n(!1)}).catch(function(r){console.log("errorrr.... ",r),n(!1)})};if(B)return e.jsx(pe,{closeOtpModal:ee,bottomNaviation:!0,headTitle:a("tranSearchHoldingPage.payPropertyTaxLabel.label"),reSendOtp:S,verifedMobileNo:_,callback:Y,setotpCardStatus:N});if(!B)return e.jsxs(e.Fragment,{children:[q&&e.jsx(ge,{title:"Enter Mobile No.",desc:"Enter mobile no. to proceed for payment",setverifedMobileNo:t=>{L(t),S(t)},closeMobileModal:()=>u(!1)}),D&&e.jsx(de,{activateBottomErrorCard:m,errorTitle:A}),e.jsxs("div",{className:"px-2 md:px-10 py-4 rounded-l bg-white border-0 border-slate-200 md:w-11/12 min-h-fit mx-auto shadow shadow-indigo-400 ",children:[e.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[e.jsxs("div",{className:"flex justify-between ml-5 mt-2 ",children:[e.jsx("p",{className:"font-semibold text-3xl ml-4 mt-1 text-gray-600",children:a("tranSearchHoldingPage.searchPropertyLabel.label")}),F&&e.jsx("div",{className:"text-blue-500 p-4 font-bold",children:ce("lg")})]}),e.jsx("form",{onSubmit:s.handleSubmit,onChange:Q,children:e.jsxs("div",{className:"w-full  pl-10 pr-4 grid grid-cols-1 md:grid-cols-5 gap-4 py-12",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"min-w-[80px] whitespace-nowrap mx-2  form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[a("tranSearchHoldingPage.searchPropertyLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("select",{...s.getFieldProps("filterBy"),className:"min-w-[80px] mx-2  cypress_filterBy cursor-pointer w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"",selected:!0,children:a("tranSearchHoldingPage.selectLabel.label")}),e.jsx("option",{value:"propertyNo",children:"Property No"}),e.jsx("option",{value:"holdingNo",children:"Holding No."}),e.jsx("option",{value:"ownerName",children:"Owner Name"}),e.jsx("option",{value:"mobileNo",children:"Mobile No"})]}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.filterBy&&s.errors.filterBy?s.errors.filterBy:null})]}),e.jsxs("div",{className:"",children:[e.jsxs("label",{className:"min-w-[80px] mx-2  form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[a("tranSearchHoldingPage.zoneLabel.label"),e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsxs("select",{id:"basic_details_1",...s.getFieldProps("zone"),className:"min-w-[80px] mx-2  form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md cursor-pointer ",children:[e.jsx("option",{value:"",selected:!0,children:a("tranSearchHoldingPage.selectLabel.label")}),e.jsx("option",{value:"1",children:"Zone A-East"}),e.jsx("option",{value:"2",children:"Zone B-West"}),e.jsx("option",{value:"3",children:"Zone C-North"}),e.jsx("option",{value:"4",children:"Zone D-South"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.zone&&s.errors.zone?s.errors.zone:null})]}),e.jsxs("div",{className:"",children:[e.jsxs("label",{className:"min-w-[80px] mx-2  form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[a("tranSearchHoldingPage.wardNoLabel.label"),e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsxs("select",{id:"basic_details_1",...s.getFieldProps("wardId"),className:"min-w-[80px] mx-2  form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md cursor-pointer ",children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:a("tranSearchHoldingPage.selectLabel.label")}),j==null?void 0:j.map((t,l)=>e.jsx("option",{value:t==null?void 0:t.id,children:t==null?void 0:t.ward_name},l))]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:s.touched.zone&&s.errors.zone?s.errors.zone:null})]}),e.jsxs("div",{className:"",children:[e.jsxs("label",{className:"min-w-[80px] mx-2  form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[s.values.filterBy=="propertyNo"&&a("tranSearchHoldingPage.oldPropertyNo.label"),s.values.filterBy=="holdingNo"&&a("tranSearchHoldingPage.propertyHoldingNumber.label"),s.values.filterBy=="ownerName"&&a("tranSearchHoldingPage.holdingOwnersName.label"),s.values.filterBy=="mobileNo"&&a("tranSearchHoldingPage.holdingMobileNumber.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsxs("div",{className:"border border-solid border-gray-300 rounded focus:bg-white focus:border-blue-600 focus:outline  shadow-md mr-1 flex",children:[e.jsx("input",{type:"text",...s.getFieldProps("parameter"),onBlur:t=>X(t.target.value),className:" min-w-[80px] mx-2 w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding transition ease-in-out m-0 focus:outline-none focus:text-gray-700 placeholder-gray-300"}),e.jsx("span",{className:"pt-1",children:e.jsx(fe,{})})]}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.parameter&&s.errors.parameter?s.errors.parameter:null}),e.jsx("div",{className:"min-w-[100px] border-0 relative border-cyan-500 bg-cyan-50 text-amber-800 font-semibold text-xs max-h-24 overflow-y-auto shadow",children:e.jsx("ul",{children:v==null?void 0:v.map((t,l)=>e.jsxs("li",{className:"pl-4 py-2 border-b cursor-pointer hover:text-amber-900 hover:scale-100 hover:bg-cyan-100",onClick:()=>K(t==null?void 0:t.id,t==null?void 0:t.property_no),children:[t==null?void 0:t.property_no," "]},l))})})]})]})})]}),e.jsxs("div",{className:"mt-10",children:[T&&(i==null?void 0:i.length)>0?e.jsxs("div",{className:"col-span-10 bg-gray-50 p-4 overflow-x-scroll",children:[e.jsx("div",{className:"flex flex-row",children:e.jsx("h1",{className:"px-1 font-semibold font-serif text-2xl mt-4",children:a("tranSearchHoldingPage.allTransactionsLabel.label")})}),e.jsxs("table",{className:"min-w-full leading-normal mt-10",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-indigo-50 text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:a("tranSearchHoldingPage.actionLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:a("tranSearchHoldingPage.ownersNameLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:a("tranSearchHoldingPage.holdingNoLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:a("tranSearchHoldingPage.newHoldingNoLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:a("tranSearchHoldingPage.mobileNoLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:a("tranSearchHoldingPage.wardNoLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:a("tranSearchHoldingPage.ulbLabel2.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:a("tranSearchHoldingPage.addressLabel.label")})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:i==null?void 0:i.map(t=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"1"}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[" ",e.jsx("button",{onClick:()=>te(t==null?void 0:t.id,t==null?void 0:t.mobile_no),className:"bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black",children:a("tranSearchHoldingPage.viewLabel.label")})]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.owner_name)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.holding_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.new_holding_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.mobile_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.ward_name)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.ulb)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(t==null?void 0:t.prop_address)})]}))})})]})]}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-sm "})}),e.jsx(xe,{values:G}),e.jsx("div",{className:"text-xl font-semibold text-red-400 text-center",children:O}),e.jsx("div",{className:"w-full h-40"})]})]})]})}export{Pe as default};