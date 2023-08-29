import{t as W,r,g as _,a as G,j as t,o as J,p as Q,h as U,l as X,f as Y}from"./index-e238b906.js";function p(a){const{t:o}=W(),[x,w]=r.useState(!1);r.useState("");const{api_verifyMobileOtp:D}=Y(),[K,g]=r.useState(!1),{notify:T}=r.useContext(_),[k,S]=r.useState(!1),[I,L]=r.useState(""),[O,N]=r.useState(!1),[A,z]=r.useState(null),[V,C]=r.useState(60),[n,l]=r.useState({first:"",second:"",third:"",fourth:"",fifth:"",sixth:""}),B=r.useRef(),m=r.useRef(),b=r.useRef(),v=r.useRef(),y=r.useRef(),R=r.useRef(),$=G(),[c,i]=r.useState("first"),d=(e,s)=>{L("");let h={...n,[s]:e.target.value};if(l({...n,[s]:e.target.value}),e.target.value.length===1)switch(s){case"first":m.current.focus(),i("second");break;case"second":b.current.focus(),i("third");break;case"third":v.current.focus(),i("fourth");break;case"fourth":y.current.focus(),i("fifth");break;case"fifth":R.current.focus(),i("sixth");break;case"sixth":i("sixth");break}q(h)},f=e=>{switch(e){case"second":B.current.focus(),l({...n,second:""}),i("first");break;case"third":m.current.focus(),l({...n,third:""}),i("second");break;case"fourth":b.current.focus(),l({...n,fourth:""}),i("third");break;case"fifth":v.current.focus(),l({...n,fifth:""}),i("fouth");break;case"sixth":y.current.focus(),l({...n,sixth:""}),i("fifth");break}},q=e=>{console.table(e),e.first!=""&&e.second!=""&&e.third!=""&&e.fourth!=""&&e.fifth!=""&&e.sixth!=""?S(!0):S(!1)},F=()=>{N(!1),g(!0);let e={otp:`${n.first}${n.second}${n.third}${n.fourth}${n.fifth}${n.sixth}`,mobileNo:a==null?void 0:a.verifedMobileNo};console.log("before verify otp...",e),X.post(D,e).then(s=>{var h,E,H;console.log("otp verify response",s==null?void 0:s.data),(h=s==null?void 0:s.data)!=null&&h.status?a==null||a.callback():(T("Wrong OTP, Please enter correct OTP","error"),L((E=s==null?void 0:s.data)==null?void 0:E.message),j(!0,(H=s==null?void 0:s.data)==null?void 0:H.message)),g(!1)}).catch(s=>{console.log("otp verify error",s),j(!0,"Error occured. Please try again later."),g(!1)})};let P,u=60;const M=()=>{P=setInterval(()=>{C(e=>e-1),u=u-1,u==0&&(w(!0),console.log("inside static stop..."),clearInterval(P))},1e3)};r.useEffect(()=>{M()},[]);const j=(e,s)=>{z(s),N(e)};return t.jsxs(t.Fragment,{children:[K&&t.jsx(J,{}),O&&t.jsx(Q,{activateBottomErrorCard:j,errorTitle:A}),t.jsx(U,{children:t.jsx("div",{class:"",children:t.jsx("div",{class:"container mx-auto",children:t.jsx("div",{class:"max-w-sm mx-auto md:max-w-lg",children:t.jsxs("div",{class:"w-full px-2 md:px-0",children:[t.jsxs("div",{className:"w-full text-center py-2  bg-gray-200 text-black relative",children:[a==null?void 0:a.headTitle,t.jsx("button",{onClick:a==null?void 0:a.closeOtpModal,type:"button",class:"absolute top-1 right-6 bg-transparent bg-gray-200 text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center shadow-sm  hover:bg-red-200 hover:border-none",children:t.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:t.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})})]}),t.jsxs("div",{class:"bg-white py-20 px-6 md:py-20 md:px-20 w-full md:w-auto rounded text-center shadow-xl relative",children:[t.jsxs("div",{class:"text-2xl font-bold px-2",children:[" ",o("tranSearchHoldingPage.otpVerificationLabel.label")]}),t.jsx("div",{class:"flex flex-col mt-4 text-center",children:t.jsx("span",{className:"text-center text-red-400",children:I})}),t.jsxs("div",{class:"flex flex-col mt-4",children:[t.jsx("span",{children:o("tranSearchHoldingPage.enterOtpLabel.label")}),t.jsxs("span",{class:"font-bold",children:["+91 ",a==null?void 0:a.verifedMobileNo]})]}),t.jsxs("div",{id:"otp",class:"flex flex-row justify-center text-center px-2 mt-5",children:[t.jsx("input",{ref:B,type:"text",min:0,value:n.first,maxLength:1,onChange:e=>d(e,"first"),onKeyDown:e=>e.key==="Backspace"&&f("first"),className:`${c==="first"?"active":""} m-2 border h-10 w-10 text-center form-control rounded`}),t.jsx("input",{ref:m,type:"text",min:0,value:n.second,maxLength:1,onChange:e=>d(e,"second"),onKeyDown:e=>e.key==="Backspace"&&f("second"),className:`${c==="second"?"active":""} m-2 border h-10 w-10 text-center form-control rounded`}),t.jsx("input",{ref:b,type:"text",min:0,value:n.third,maxLength:1,onChange:e=>d(e,"third"),onKeyDown:e=>e.key==="Backspace"&&f("third"),className:`${c==="third"?"active":""} m-2 border h-10 w-10 text-center form-control rounded`}),t.jsx("input",{ref:v,type:"text",min:0,value:n.fourth,maxLength:1,onChange:e=>d(e,"fourth"),onKeyDown:e=>e.key==="Backspace"&&f("fourth"),className:`${c==="fourth"?"active":""} m-2 border h-10 w-10 text-center form-control rounded`}),t.jsx("input",{ref:y,type:"text",min:0,value:n.fifth,maxLength:1,onChange:e=>d(e,"fifth"),onKeyDown:e=>e.key==="Backspace"&&f("fifth"),className:`${c==="fifth"?"active":""} m-2 border h-10 w-10 text-center form-control rounded`}),t.jsx("input",{ref:R,type:"text",min:0,value:n.sixth,maxLength:1,onChange:e=>d(e,"sixth"),onKeyDown:e=>e.key==="Backspace"&&f("sixth"),className:`${c==="sixth"?"active":""} m-2 border h-10 w-10 text-center form-control rounded`})]}),t.jsxs("div",{class:"flex justify-center text-center mt-5",children:[!x&&t.jsx("div",{className:"w-10 h-10 bg-indigo-500 flex justify-center items-center rounded-full text-white",children:V}),t.jsxs("button",{disabled:!x,onClick:()=>{a==null||a.reSendOtp(),w(!1),C(60),u=60,M()},class:`ml-4 flex items-center ${x?"text-indigo-500 hover:text-blue-900 cursor-pointer":"text-gray-400 hover:text-none cursor-default"}`,children:[t.jsx("span",{class:"font-bold",children:o("tranSearchHoldingPage.resendOtpLabel.label")}),t.jsx("i",{class:"bx bx-caret-right ml-1"})]})]}),t.jsxs("div",{class:"w-full text-center mt-5",children:[k&&t.jsx("button",{type:"button",onClick:F,className:"w-full  py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:o("tranSearchHoldingPage.submitLabel.label")}),!k&&t.jsx("button",{type:"button",className:"w-full  py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight  rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out cursor-default ",children:o("tranSearchHoldingPage.submitLabel.label")})]}),(a==null?void 0:a.bottomNaviation)!=!1&&t.jsxs("div",{className:"text-left w-full mt-10 flex justify-center items-center",children:[t.jsx("div",{className:"flex-1",children:t.jsx("span",{onClick:()=>$("/"),className:"text-indigo-500 font-semibold hover:bg-white px-3 py-1 cursor-pointer ",children:o("tranSearchHoldingPage.homeLabel.label")})}),t.jsx("div",{className:"flex-1",children:t.jsxs("span",{onClick:()=>$("/login"),className:"text-indigo-500 font-semibold hover:bg-white px-3 py-1 cursor-pointer float-right",children:[o("tranSearchHoldingPage.loginLabel.label")," "]})})]})]})]})})})})})]})}export{p as default};
