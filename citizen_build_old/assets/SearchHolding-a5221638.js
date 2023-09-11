import{t as J,r as o,g as Q,ad as W,H as X,a as Y,c as Z,d as ee,b as te,j as t,ae as le,o as se,p as re,a1 as i,bK as oe,l as v,A as ae,f as ne,b4 as ie}from"./index-494decc0.js";import{b as ce}from"./index.esm-e547311e.js";import de from"./OtpCard-bf142654.js";import xe from"./MobileNoCard-003bf8a0.js";const be=6e4;function ye(){const{t:r}=J(),[y,n]=o.useState(!0),[c,P]=o.useState(),[L,f]=o.useState(!1),[H,I]=o.useState(null),[he,_]=o.useState(null),[M,m]=o.useState(""),[me,C]=o.useState(),{notify:d}=o.useContext(Q),[j,p]=o.useState(!1),[S,w]=o.useState(null),[k,x]=o.useState(!1),[E,T]=o.useState(null),[F,g]=o.useState(!1);W("Search Property");const{api_searchDirectHolding:A}=ie(),{api_getAllUlb:B,api_sendMobileOtp:O}=ne(),{ulb_name:U,brand_tag:ge}=X(),D=Y(),R=e=>{g(!1),x(!1),m(""),f(!1),n(!0);const s={holdingNo:e==null?void 0:e.holdingNo,ulbId:e==null?void 0:e.ulbId};console.log("before fetch holding details....",s),v.post(A,s).then(l=>{var b,h;console.log("search property list",l==null?void 0:l.data),(b=l==null?void 0:l.data)!=null&&b.status?(P((h=l==null?void 0:l.data)==null?void 0:h.data),f(!0),m(""),_(s==null?void 0:s.ulbId)):(d("This holding no does not exits!","error"),m("Data not found. Please enter a valid holding no. or related ULB")),n(!1)}).catch(l=>{console.log("Error while fetching Filter Data",l),d("Something went wrong!!","error"),m("Network problem."),u(!0,"Error occured. Please try again later."),n(!1),f(!1)})},V=Z({holdingNo:ee().required("This is a required field !")}),a=te({initialValues:{holdingNo:""},onSubmit:e=>{console.log("at submit form.....",e),R(e)},validationSchema:V}),q=e=>{let s=e.target.name,l=e.target.value;s=="holdingNo"&&a.setFieldValue("holdingNo",oe(l,a.values.holdingNo,17))},N=(e=null)=>{console.log("passed mobile no....."),n(!0);let s;e==null?s={mobileNo:S}:s={mobileNo:e},console.log("before send otp. of direct search..",s),v.post(O,s).then(l=>{var b,h;console.log("otp send response",l==null?void 0:l.data),(b=l==null?void 0:l.data)!=null&&b.status?(p(!0),d("OTP is send to your mobile no.","success")):(d((h=l==null?void 0:l.data)==null?void 0:h.message,"error"),u(!0,"Error occured. Please try again later.")),n(!1)}).catch(l=>{console.log("error otp send",l),u(!0,"Error occured. Please try again later."),n(!1)})},$=()=>{x(!1),n(!0),ae.get(B,{timeout:be}).then(function(e){var s,l;console.log("ulb list. at..",e==null?void 0:e.data),(s=e==null?void 0:e.data)!=null&&s.status?C((l=e==null?void 0:e.data)==null?void 0:l.data):x(!0),n(!1)}).catch(function(e){console.log("ulb list error.... ",e),x(!0),n(!1)})};o.useEffect(()=>{$()},[]);const z=()=>{d("Mobile no. has been verified successfully !","success"),D(`/viewDemandHoldingPropertyDirect/${H}`)},K=()=>{p(!1)},u=(e,s)=>{T(s),x(e)},G=(e,s)=>{console.log("incoming data => ",e,s),I(e),s==""||s==null||s==null?(g(!0),console.log("entered in condition")):(g(!1),w(s),N(s))};if(y)return t.jsxs(t.Fragment,{children:[t.jsx(le,{}),t.jsx("div",{className:"min-h-screen"})]});if(j)return t.jsx(de,{closeOtpModal:K,bottomNaviation:!0,headTitle:r("tranSearchHoldingPage.payPropertyTaxLabel.label"),reSendOtp:N,verifedMobileNo:S,callback:z,setotpCardStatus:p});if(!j)return t.jsxs(t.Fragment,{children:[F&&t.jsx(xe,{title:"Enter Mobile No.",desc:"Enter mobile no. to proceed for payment",setverifedMobileNo:e=>{w(e),N(e)},closeMobileModal:()=>g(!1)}),y&&t.jsx(se,{}),k&&t.jsx(re,{activateBottomErrorCard:u,errorTitle:E}),t.jsxs("div",{className:"px-2 md:px-10 mt-16",children:[t.jsxs("div",{className:"border shadow-xl bg-white mt-6",children:[t.jsx("div",{className:"flex ml-5 mt-2 ",children:t.jsx("p",{className:"font-semibold text-3xl ml-4 mt-1 text-gray-600",children:r("tranSearchHoldingPage.searchPropertyLabel.label")})}),t.jsx("form",{onSubmit:a.handleSubmit,onChange:q,children:t.jsxs("div",{className:"flex flex-col md:flex-row justify-center my-5 m-10 ",children:[t.jsxs("div",{className:"form-group col-span-12 mb-4 md:px-10",children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[r("tranSearchHoldingPage.ulbLabel.label"),t.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t.jsx("input",{type:"text",value:U,className:" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),t.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.ulbId&&a.errors.ulbId?a.errors.ulbId:null})]}),t.jsxs("div",{children:[t.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[r("tranSearchHoldingPage.holdingPtNoLabel.label"),t.jsx("span",{className:"text-red-500",children:"*"})]}),t.jsx("input",{type:"text",...a.getFieldProps("holdingNo"),className:" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),t.jsx("p",{className:"text-red-500 text-xs",children:a.touched.holdingNo&&a.errors.holdingNo?a.errors.holdingNo:null})]}),t.jsx("div",{className:"mt-4 md:px-10",children:t.jsx("button",{type:"submit",className:"w-full border border-indigo-500 bg-indigo-600 hover:bg-indigo-500 text-white hover:text-black shadow-lg rounded-sm text-base font-semibold px-5 m-3 py-1",children:t.jsxs("p",{className:"flex text-center justify-center items-center",children:[t.jsx(ce,{className:"inline mr-2"}),r("tranSearchHoldingPage.searchRecordLabel.label")]})})})]})})]}),t.jsxs("div",{className:"mt-10",children:[L&&(c==null?void 0:c.length)!=0&&t.jsxs("div",{className:"col-span-10 bg-gray-50 p-4 overflow-x-scroll",children:[t.jsx("div",{className:"flex flex-row",children:t.jsx("h1",{className:"px-1 font-semibold font-serif text-2xl mt-4",children:r("tranSearchHoldingPage.allTransactionsLabel.label")})}),t.jsxs("table",{className:"min-w-full leading-normal mt-10",children:[t.jsx("thead",{className:"font-bold text-left text-sm bg-indigo-50 text-gray-600",children:t.jsxs("tr",{children:[t.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),t.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:r("tranSearchHoldingPage.actionLabel.label")}),t.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:r("tranSearchHoldingPage.ownersNameLabel.label")}),t.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:r("tranSearchHoldingPage.holdingNoLabel.label")}),t.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:r("tranSearchHoldingPage.newHoldingNoLabel.label")}),t.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:r("tranSearchHoldingPage.mobileNoLabel.label")}),t.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:r("tranSearchHoldingPage.wardNoLabel.label")}),t.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:r("tranSearchHoldingPage.ulbLabel2.label")}),t.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:r("tranSearchHoldingPage.addressLabel.label")})]})}),t.jsx("tbody",{className:"text-sm",children:t.jsx(t.Fragment,{children:c==null?void 0:c.map(e=>t.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[t.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"1"}),t.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[" ",t.jsx("button",{onClick:()=>G(e==null?void 0:e.id,e==null?void 0:e.mobile_no),className:"bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black",children:r("tranSearchHoldingPage.viewLabel.label")})]}),t.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i(e==null?void 0:e.owner_name)}),t.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i(e==null?void 0:e.holding_no)}),t.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i(e==null?void 0:e.new_holding_no)}),t.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i(e==null?void 0:e.mobile_no)}),t.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i(e==null?void 0:e.ward_name)}),t.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i(e==null?void 0:e.ulb)}),t.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i(e==null?void 0:e.prop_address)})]}))})})]})]}),t.jsx("div",{className:"text-xl font-semibold text-red-400 text-center",children:M}),t.jsx("div",{className:"w-full h-40"})]})]})]})}export{ye as default};