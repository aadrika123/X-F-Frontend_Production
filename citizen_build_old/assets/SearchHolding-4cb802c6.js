import{t as W,r,g as G,ad as J,H as K,a as Q,c as X,d as Y,b as ee,j as e,ae as te,o as le,p as se,a1 as i,bM as oe,l as w,A as re,f as ae,b5 as ne}from"./index-a9962f11.js";import{b as ie}from"./index.esm-e079f1b0.js";import ce from"./OtpCard-c1852640.js";import de from"./MobileNoCard-29784b19.js";const xe=6e4;function pe(){const{t:o}=W(),[j,n]=r.useState(!0),[c,P]=r.useState(),[L,f]=r.useState(!1),[H,I]=r.useState(null),[be,M]=r.useState(null),[_,m]=r.useState(""),[he,C]=r.useState(),{notify:d}=r.useContext(G),[y,p]=r.useState(!1),[S,v]=r.useState(null),[k,x]=r.useState(!1),[E,F]=r.useState(null),[T,u]=r.useState(!1);J("Search Property");const{api_searchDirectHolding:A}=ne(),{api_getAllUlb:B,api_sendMobileOtp:O}=ae();K();const D=Q(),U=t=>{u(!1),x(!1),m(""),f(!1),n(!0);const s={holdingNo:t==null?void 0:t.holdingNo,ulbId:t==null?void 0:t.ulbId};console.log("before fetch holding details....",s),w.post(A,s).then(l=>{var b,h;console.log("search property list",l==null?void 0:l.data),(b=l==null?void 0:l.data)!=null&&b.status?(P((h=l==null?void 0:l.data)==null?void 0:h.data),f(!0),m(""),M(s==null?void 0:s.ulbId)):(d("This holding no does not exits!","error"),m("Data not found. Please enter a valid holding no. or related ULB")),n(!1)}).catch(l=>{console.log("Error while fetching Filter Data",l),d("Something went wrong!!","error"),m("Network problem."),g(!0,"Error occured. Please try again later."),n(!1),f(!1)})},Z=X({holdingNo:Y().required("This is a required field !")}),a=ee({initialValues:{holdingNo:""},onSubmit:t=>{console.log("at submit form.....",t),U(t)},validationSchema:Z}),q=t=>{let s=t.target.name,l=t.target.value;s=="holdingNo"&&a.setFieldValue("holdingNo",oe(l,a.values.holdingNo,17))},N=(t=null)=>{console.log("passed mobile no....."),n(!0);let s;t==null?s={mobileNo:S}:s={mobileNo:t},console.log("before send otp. of direct search..",s),w.post(O,s).then(l=>{var b,h;console.log("otp send response",l==null?void 0:l.data),(b=l==null?void 0:l.data)!=null&&b.status?(p(!0),d("OTP is send to your mobile no.","success")):(d((h=l==null?void 0:l.data)==null?void 0:h.message,"error"),g(!0,"Error occured. Please try again later.")),n(!1)}).catch(l=>{console.log("error otp send",l),g(!0,"Error occured. Please try again later."),n(!1)})},z=()=>{x(!1),n(!0),re.get(B,{timeout:xe}).then(function(t){var s,l;console.log("ulb list. at..",t==null?void 0:t.data),(s=t==null?void 0:t.data)!=null&&s.status?C((l=t==null?void 0:t.data)==null?void 0:l.data):x(!0),n(!1)}).catch(function(t){console.log("ulb list error.... ",t),x(!0),n(!1)})};r.useEffect(()=>{z()},[]);const R=()=>{d("Mobile no. has been verified successfully !","success"),D(`/viewDemandHoldingPropertyDirect/${H}`)},V=()=>{p(!1)},g=(t,s)=>{F(s),x(t)},$=(t,s)=>{console.log("incoming data => ",t,s),I(t),s==""||s==null||s==null?(u(!0),console.log("entered in condition")):(u(!1),v(s),N(s))};if(j)return e.jsxs(e.Fragment,{children:[e.jsx(te,{}),e.jsx("div",{className:"min-h-screen"})]});if(y)return e.jsx(ce,{closeOtpModal:V,bottomNaviation:!0,headTitle:o("tranSearchHoldingPage.payPropertyTaxLabel.label"),reSendOtp:N,verifedMobileNo:S,callback:R,setotpCardStatus:p});if(!y)return e.jsxs(e.Fragment,{children:[T&&e.jsx(de,{title:"Enter Mobile No.",desc:"Enter mobile no. to proceed for payment",setverifedMobileNo:t=>{v(t),N(t)},closeMobileModal:()=>u(!1)}),j&&e.jsx(le,{}),k&&e.jsx(se,{activateBottomErrorCard:g,errorTitle:E}),e.jsxs("div",{className:"px-2 md:px-10 mt-16",children:[e.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[e.jsx("div",{className:"flex ml-5 mt-2 ",children:e.jsx("p",{className:"font-semibold text-3xl ml-4 mt-1 text-gray-600",children:o("tranSearchHoldingPage.searchPropertyLabel.label")})}),e.jsx("form",{onSubmit:a.handleSubmit,onChange:q,children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-center my-5 m-10 ",children:[e.jsxs("div",{className:"form-group col-span-12 mb-4 md:px-10",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[o("tranSearchHoldingPage.zoneLabel.label"),e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsxs("select",{id:"basic_details_1",...a.getFieldProps("zone"),className:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md cursor-pointer ",children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:o("tranSearchHoldingPage.selectLabel.label")}),e.jsx("option",{value:"1",children:"Zone A-East"}),e.jsx("option",{value:"2",children:"Zone B-West"}),e.jsx("option",{value:"3",children:"Zone C-North"}),e.jsx("option",{value:"4",children:"Zone D-South"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.ulbId&&a.errors.ulbId?a.errors.ulbId:null})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[o("tranSearchHoldingPage.holdingPtNoLabel.label"),e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("input",{type:"text",...a.getFieldProps("holdingNo"),className:" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("p",{className:"text-red-500 text-xs",children:a.touched.holdingNo&&a.errors.holdingNo?a.errors.holdingNo:null})]}),e.jsx("div",{className:"mt-4 md:px-10",children:e.jsx("button",{type:"submit",className:"w-full border border-indigo-500 bg-indigo-600 hover:bg-indigo-500 text-white hover:text-black shadow-lg rounded-sm text-base font-semibold px-5 m-3 py-1",children:e.jsxs("p",{className:"flex text-center justify-center items-center",children:[e.jsx(ie,{className:"inline mr-2"}),o("tranSearchHoldingPage.searchRecordLabel.label")]})})})]})})]}),e.jsxs("div",{className:"mt-10",children:[L&&(c==null?void 0:c.length)>0?e.jsxs("div",{className:"col-span-10 bg-gray-50 p-4 overflow-x-scroll",children:[e.jsx("div",{className:"flex flex-row",children:e.jsx("h1",{className:"px-1 font-semibold font-serif text-2xl mt-4",children:o("tranSearchHoldingPage.allTransactionsLabel.label")})}),e.jsxs("table",{className:"min-w-full leading-normal mt-10",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-indigo-50 text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:o("tranSearchHoldingPage.actionLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:o("tranSearchHoldingPage.ownersNameLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:o("tranSearchHoldingPage.holdingNoLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:o("tranSearchHoldingPage.newHoldingNoLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:o("tranSearchHoldingPage.mobileNoLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:o("tranSearchHoldingPage.wardNoLabel.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:o("tranSearchHoldingPage.ulbLabel2.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:o("tranSearchHoldingPage.addressLabel.label")})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:c==null?void 0:c.map(t=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"1"}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[" ",e.jsx("button",{onClick:()=>$(t==null?void 0:t.id,t==null?void 0:t.mobile_no),className:"bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black",children:o("tranSearchHoldingPage.viewLabel.label")})]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i(t==null?void 0:t.owner_name)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i(t==null?void 0:t.holding_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i(t==null?void 0:t.new_holding_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i(t==null?void 0:t.mobile_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i(t==null?void 0:t.ward_name)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i(t==null?void 0:t.ulb)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i(t==null?void 0:t.prop_address)})]}))})})]})]}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-sm ",children:"No transactions found for this request..."})}),e.jsx("div",{className:"text-xl font-semibold text-red-400 text-center",children:_}),e.jsx("div",{className:"w-full h-40"})]})]})]})}export{pe as default};
