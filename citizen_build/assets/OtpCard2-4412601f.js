import{r as n,h as W,a as G,c as te,d as ae,b as le,m as K,j as e,p as J,q as Q,i as X,k as ie,l as ne,f as Y,n as se,v as oe,u as ce,w as U}from"./index-d8dc37f9.js";function de(t){const[r,u]=n.useState(!1),[v,x]=n.useState(!1),[R,$]=n.useState(""),[d,L]=n.useState(!1),[M,B]=n.useState(null),{api_sendMobileOtp:I}=Y(),{notify:y}=n.useContext(W),E=G();console.log("entered in mobile card...");const j=te({mobileNo:ae().required("Enter 10 digit mobile no.").min(10,"Enter 10 digit mobile no.")}),f=le({initialValues:{mobileNo:""},onSubmit:o=>{console.log("at submit form.....",o),t==null||t.setverifedMobileNo(o.mobileNo),F()},validationSchema:j}),O=o=>{$("");let l=o.target.name,s=o.target.value;l=="mobileNo"&&f.setFieldValue("mobileNo",se(s,f.values.mobileNo,10)),l=="mobileNo"&&s.length>=10?x(!0):x(!1)},F=()=>{console.log("otp send..."),u(!0),x(!1);let o;o={mobileNo:f.values.mobileNo,type:"Update Mobile"},console.log("before send otp into...",o),K.post(I,o).then(l=>{var s,N;console.log("otp send response",l==null?void 0:l.data),(s=l==null?void 0:l.data)!=null&&s.status?(y("OTP is send to your mobile no.","success"),t==null||t.setmobileCardStatus2(!1),t==null||t.setotpCardStatus2(!0)):w(!0,(N=l==null?void 0:l.data)==null?void 0:N.message),u(!1)}).catch(l=>{var s;console.log("error otp send",l),w(!0,(s=response==null?void 0:response.data)==null?void 0:s.message),u(!1),x(!0)})},w=(o,l)=>{B(l),L(o)};return e.jsxs(e.Fragment,{children:[r&&e.jsx(J,{}),d&&e.jsx(Q,{activateBottomErrorCard:w,errorTitle:M}),e.jsx(X,{children:e.jsx("div",{class:"",children:e.jsx("div",{class:"",children:e.jsx("div",{class:"container mx-auto",children:e.jsx("div",{class:"max-w-sm mx-auto md:max-w-lg",children:e.jsxs("div",{class:"w-full",children:[e.jsxs("div",{className:"w-full text-center py-2 bg-gray-200 text-black relative",children:[t==null?void 0:t.headTitle,e.jsx("button",{onClick:t==null?void 0:t.closeMobileModal,type:"button",class:"absolute z-50 top-1 right-6 bg-transparent bg-gray-200 text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center shadow-sm  hover:bg-red-200 hover:border-none",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})})]}),e.jsxs("div",{class:"bg-white py-20 px-6 md:py-20 md:px-20 w-full md:w-auto rounded text-center shadow-xl relative",children:[e.jsx("div",{class:"flex flex-col mt-4 text-center",children:e.jsx("span",{className:"text-center text-red-400",children:R})}),e.jsx("div",{class:"text-2xl font-bold",children:t==null?void 0:t.title}),e.jsx("div",{class:"flex flex-col mt-4 text-center",children:e.jsx("span",{className:"text-center",children:t==null?void 0:t.desc})}),e.jsx("div",{class:"flex flex-row justify-center text-center mt-5 w-full",children:e.jsxs("form",{onSubmit:f.handleSubmit,onChange:O,children:[e.jsx("div",{className:"w-full",children:e.jsx("input",{type:"text",min:0,...f.getFieldProps("mobileNo"),className:"form-control block w-full px-3 2xl:py-1.5 py-1 2xl:text-base text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})}),e.jsxs("div",{class:"w-full text-center mt-5",children:[v&&e.jsx("button",{type:"submit",className:"w-full  py-2.5 bg-[#F59E0B] text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-[#F59E0B] hover:shadow-lg focus:bg-[#F59E0B] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#F59E0B] active:shadow-lg transition duration-150 ease-in-out",children:"Submit"}),!v&&e.jsx("button",{type:"button",className:"w-full  py-2.5 bg-gray-300 text-white font-medium text-xs leading-tight  rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out cursor-default ",children:"Submit"})]}),e.jsxs("div",{className:"text-left w-full mt-10 flex justify-center items-center",children:[e.jsx("div",{className:"flex-1",children:e.jsxs("span",{onClick:()=>E("/"),className:"text-gray-600 font-semibold hover:bg-white px-3 py-1 cursor-pointer ",children:[" ",e.jsx(ie,{className:"inline mr-2"})," Home"]})}),e.jsx("div",{className:"flex-1",children:e.jsxs("span",{onClick:()=>E("/login"),className:"text-gray-600 font-semibold hover:bg-white px-3 py-1 cursor-pointer float-right",children:[" Login ",e.jsx(ne,{className:"inline ml-2"})]})})]})]})})]})]})})})})})})]})}function ue(t){const{t:r}=oe(),[u,v]=n.useState(!1);n.useState("");const{api_verifyMobileOtp:x,api_updateMobile:R}=Y(),[$,d]=n.useState(!1),{notify:L}=n.useContext(W),[M,B]=n.useState(!1),[I,y]=n.useState(""),[E,j]=n.useState(!1),[f,O]=n.useState(null),{id:F}=ce(),[w,o]=n.useState(60),[l,s]=n.useState({first:"",second:"",third:"",fourth:"",fifth:"",sixth:""}),N=n.useRef(),H=n.useRef(),T=n.useRef(),A=n.useRef(),D=n.useRef(),q=n.useRef(),z=G(),[m,c]=n.useState("first"),g=(a,i)=>{y("");let h={...l,[i]:a.target.value};if(s({...l,[i]:a.target.value}),a.target.value.length===1)switch(i){case"first":H.current.focus(),c("second");break;case"second":T.current.focus(),c("third");break;case"third":A.current.focus(),c("fourth");break;case"fourth":D.current.focus(),c("fifth");break;case"fifth":q.current.focus(),c("sixth");break;case"sixth":c("sixth");break}Z(h)},b=a=>{switch(a){case"second":N.current.focus(),s({...l,second:""}),c("first");break;case"third":H.current.focus(),s({...l,third:""}),c("second");break;case"fourth":T.current.focus(),s({...l,fourth:""}),c("third");break;case"fifth":A.current.focus(),s({...l,fifth:""}),c("fouth");break;case"sixth":D.current.focus(),s({...l,sixth:""}),c("fifth");break}},Z=a=>{console.table(a),a.first!=""&&a.second!=""&&a.third!=""&&a.fourth!=""&&a.fifth!=""&&a.sixth!=""?B(!0):B(!1)},p=()=>{console.log("object"),j(!1),d(!0);let a={mobileNo:t==null?void 0:t.verifedMobileNo,propertyId:parseInt(F),ownerId:t==null?void 0:t.editOwnerId};console.log("before verify otp...",a),t==null||t.callback(),K.post(R,a,U()).then(i=>{var h,S,C;console.log("otp verify response",i==null?void 0:i.data),(h=i==null?void 0:i.data)!=null&&h.status?t==null||t.callback():(L("Mobile number updated successfully"),y((S=i==null?void 0:i.data)==null?void 0:S.message),k(!0,(C=i==null?void 0:i.data)==null?void 0:C.message)),d(!1)}).catch(i=>{console.log("otp verify error",i),k(!0,"Error occured. Please try again later."),d(!1)})},ee=()=>{console.log("object"),j(!1),d(!0);let a={otp:`${l.first}${l.second}${l.third}${l.fourth}${l.fifth}${l.sixth}`,mobileNo:t==null?void 0:t.verifedMobileNo,type:"Update Mobile"};console.log("before verify otp...",a),t==null||t.callback(),K.post(x,a,U()).then(i=>{var h,S,C;console.log("otp verify response",i==null?void 0:i.data),(h=i==null?void 0:i.data)!=null&&h.status?(p(),t==null||t.callback()):(L("Wrong OTP, Please enter correct OTP","error"),y((S=i==null?void 0:i.data)==null?void 0:S.message),k(!0,(C=i==null?void 0:i.data)==null?void 0:C.message)),d(!1)}).catch(i=>{console.log("otp verify error",i),k(!0,"Error occured. Please try again later."),d(!1)})};let V,P=60;const _=()=>{V=setInterval(()=>{o(a=>a-1),P=P-1,P==0&&(v(!0),console.log("inside static stop..."),clearInterval(V))},1e3)};n.useEffect(()=>{_()},[]);const k=(a,i)=>{O(i),j(a)};return e.jsxs(e.Fragment,{children:[$&&e.jsx(J,{}),E&&e.jsx(Q,{activateBottomErrorCard:k,errorTitle:f}),e.jsx(X,{children:e.jsx("div",{class:"",children:e.jsx("div",{class:"container mx-auto",children:e.jsx("div",{class:"max-w-sm mx-auto md:max-w-lg",children:e.jsxs("div",{class:"w-full px-2 md:px-0",children:[e.jsxs("div",{className:"w-full text-center py-2  bg-gray-200 text-black relative",children:[t==null?void 0:t.headTitle,e.jsx("button",{onClick:t==null?void 0:t.closeOtpModal,type:"button",class:"absolute top-1 right-6 bg-transparent bg-gray-200 text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center shadow-sm  hover:bg-red-200 hover:border-none",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})})]}),e.jsxs("div",{class:"bg-white py-20 px-6 md:py-20 md:px-20 w-full md:w-auto rounded text-center shadow-xl relative",children:[e.jsxs("div",{class:"text-2xl font-bold px-2",children:[" ",r("tranSearchHoldingPage.otpVerificationLabel.label")]}),e.jsx("div",{class:"flex flex-col mt-4 text-center",children:e.jsx("span",{className:"text-center text-red-400",children:I})}),e.jsxs("div",{class:"flex flex-col mt-4",children:[e.jsx("span",{children:r("tranSearchHoldingPage.enterOtpLabel.label")}),e.jsxs("span",{class:"font-bold",children:["+91 ",t==null?void 0:t.verifedMobileNo]})]}),e.jsxs("div",{id:"otp",class:"flex flex-row justify-center text-center px-2 mt-5",children:[e.jsx("input",{ref:N,type:"text",min:0,value:l.first,maxLength:1,onChange:a=>g(a,"first"),onKeyDown:a=>a.key==="Backspace"&&b("first"),className:`${m==="first"?"active":""} m-2 border h-10 w-10 text-center form-control rounded`}),e.jsx("input",{ref:H,type:"text",min:0,value:l.second,maxLength:1,onChange:a=>g(a,"second"),onKeyDown:a=>a.key==="Backspace"&&b("second"),className:`${m==="second"?"active":""} m-2 border h-10 w-10 text-center form-control rounded`}),e.jsx("input",{ref:T,type:"text",min:0,value:l.third,maxLength:1,onChange:a=>g(a,"third"),onKeyDown:a=>a.key==="Backspace"&&b("third"),className:`${m==="third"?"active":""} m-2 border h-10 w-10 text-center form-control rounded`}),e.jsx("input",{ref:A,type:"text",min:0,value:l.fourth,maxLength:1,onChange:a=>g(a,"fourth"),onKeyDown:a=>a.key==="Backspace"&&b("fourth"),className:`${m==="fourth"?"active":""} m-2 border h-10 w-10 text-center form-control rounded`}),e.jsx("input",{ref:D,type:"text",min:0,value:l.fifth,maxLength:1,onChange:a=>g(a,"fifth"),onKeyDown:a=>a.key==="Backspace"&&b("fifth"),className:`${m==="fifth"?"active":""} m-2 border h-10 w-10 text-center form-control rounded`}),e.jsx("input",{ref:q,type:"text",min:0,value:l.sixth,maxLength:1,onChange:a=>g(a,"sixth"),onKeyDown:a=>a.key==="Backspace"&&b("sixth"),className:`${m==="sixth"?"active":""} m-2 border h-10 w-10 text-center form-control rounded`})]}),e.jsxs("div",{class:"flex justify-center text-center mt-5",children:[!u&&e.jsx("div",{className:"w-10 h-10 bg-indigo-500 flex justify-center items-center rounded-full text-white",children:w}),e.jsxs("button",{disabled:!u,onClick:()=>{t==null||t.reSendOtp(),v(!1),o(60),P=60,_()},class:`ml-4 flex items-center ${u?"text-indigo-500 hover:text-blue-900 cursor-pointer":"text-gray-400 hover:text-none cursor-default"}`,children:[e.jsx("span",{class:"font-bold",children:r("tranSearchHoldingPage.resendOtpLabel.label")}),e.jsx("i",{class:"bx bx-caret-right ml-1"})]})]}),e.jsxs("div",{class:"w-full text-center mt-5",children:[M&&e.jsx("button",{type:"button",onClick:ee,className:"w-full  py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:r("tranSearchHoldingPage.submitLabel.label")}),!M&&e.jsx("button",{type:"button",className:"w-full  py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight  rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out cursor-default ",children:r("tranSearchHoldingPage.submitLabel.label")})]}),(t==null?void 0:t.bottomNaviation)!=!1&&e.jsxs("div",{className:"text-left w-full mt-10 flex justify-center items-center",children:[e.jsx("div",{className:"flex-1",children:e.jsx("span",{onClick:()=>z("/"),className:"text-indigo-500 font-semibold hover:bg-white px-3 py-1 cursor-pointer ",children:r("tranSearchHoldingPage.homeLabel.label")})}),e.jsx("div",{className:"flex-1",children:e.jsxs("span",{onClick:()=>z("/login"),className:"text-indigo-500 font-semibold hover:bg-white px-3 py-1 cursor-pointer float-right",children:[r("tranSearchHoldingPage.loginLabel.label")," "]})})]})]})]})})})})})]})}export{de as M,ue as O};
