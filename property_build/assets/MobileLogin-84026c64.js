import{c5 as ue,q as ge,s as X,r as i,J as be,u as he,a as fe,bk as ye,dA as ve,w as pe,e as je,j as e,bY as Ne,dB as we,dC as ke,dD as Se,aa as Ce,o as Le,A as $,dE as S,dF as s,b as Me,g as W}from"./index-b7a9b315.js";const De="/assets/meeting-3ecb6b1f.svg",{api_login:Ae}=W(),Ie=ge({username:X().required("Enter Username"),password:X().required("Enter Password")});function Pe(o){const{setmenuList:C,setuserName:Y,setroles:K,setuserUlbName:ze,setuserMobile:Ee,setuserEmail:Re,setuserImage:Oe}=i.useContext(be),[Q,d]=i.useState(!1),[Z,L]=i.useState(!1),[ee,j]=i.useState(!1),[Ue,ae]=i.useState(null),[M,D]=i.useState(!1),[le,N]=i.useState(""),[re,w]=i.useState(!1);he();const{api_getFreeMenuList:te}=W();fe("fafdsf",!1);let t=ye();const c=ve(),r=pe({initialValues:{username:"",password:""},onSubmit:k=>{oe()},validationSchema:Ie}),se=je(),ie={headers:{Accept:"application/json"}},oe=k=>{w(!1),d(!0),N("");let a={email:r.values.username,password:r.values.password,type:"mobile"};console.log("--1--before login send...",a),$.post(Ae,a,ie).then(function(l){var n,m,x,u,g,b,h,f,y,v,p;l.data.status==!0?(console.log("--2--login response...",l),S("token",(m=(n=l==null?void 0:l.data)==null?void 0:n.data)==null?void 0:m.token),S("ulbId",(g=(u=(x=l==null?void 0:l.data)==null?void 0:x.data)==null?void 0:u.userDetails)==null?void 0:g.ulbId),s("userType",(f=(h=(b=l==null?void 0:l.data)==null?void 0:b.data)==null?void 0:h.userDetails)==null?void 0:f.userType),s("roles",(p=(v=(y=l==null?void 0:l.data)==null?void 0:y.data)==null?void 0:v.userDetails)==null?void 0:p.role),window.localStorage.setItem("device","mobile"),S("device","mobile"),o.LOGIN(),ne(),se("/mobile-modules")):(console.log("false..."),d(!1),N(l.data.message),c(l.data.message,"error"))}).catch(function(l){d(!1),w(!0),console.log("--2--login error...",l),c("login error ","error")})},de=()=>{D(!1)},ce=()=>{c("Mobile no. has been verified successfully !","success"),j(!1),D(!0)},ne=()=>{let k={moduleId:1};$.post(te,k,Me()).then(function(a){var l,n,m,x,u,g,b,h,f,y,v,p,A,I,P,F,T,z,E,R,O,U,q,B,V,_,H,G,J;console.log("fetched menu list success.....",(l=a==null?void 0:a.data)==null?void 0:l.data),a.data.status==!0?(s("menuList",(m=(n=a==null?void 0:a.data)==null?void 0:n.data)==null?void 0:m.permission),s("userName",(g=(u=(x=a==null?void 0:a.data)==null?void 0:x.data)==null?void 0:u.userDetails)==null?void 0:g.userName),s("roles",(f=(h=(b=a==null?void 0:a.data)==null?void 0:b.data)==null?void 0:h.userDetails)==null?void 0:f.roles),s("userUlbName",(p=(v=(y=a==null?void 0:a.data)==null?void 0:y.data)==null?void 0:v.userDetails)==null?void 0:p.ulb),s("userMobile",(P=(I=(A=a==null?void 0:a.data)==null?void 0:A.data)==null?void 0:I.userDetails)==null?void 0:P.mobileNo),s("userEmail",(z=(T=(F=a==null?void 0:a.data)==null?void 0:F.data)==null?void 0:T.userDetails)==null?void 0:z.email),s("userImage",(O=(R=(E=a==null?void 0:a.data)==null?void 0:E.data)==null?void 0:R.userDetails)==null?void 0:O.imageUrl),C((q=(U=a==null?void 0:a.data)==null?void 0:U.data)==null?void 0:q.permission),Y((_=(V=(B=a==null?void 0:a.data)==null?void 0:B.data)==null?void 0:V.userDetails)==null?void 0:_.userName),K((J=(G=(H=a==null?void 0:a.data)==null?void 0:H.data)==null?void 0:G.userDetails)==null?void 0:J.roles)):(console.log("false..."),d(!1),N(a.data.message),c(a.data.message,"error"))}).catch(function(a){c("menulist fetch error","error"),d(!1),w(!0),console.log("--error in menulist....",a)})},me=()=>{L(!1)},xe=()=>{j(!1)};return re?e.jsx(Ne,{children:e.jsx(we,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"})}):Z?e.jsx(ke,{closeMobileModal:me,headTitle:"Forgot Password",title:"Enter mobile to get OTP",desc:"Enter your mobile no, which is attached to your account.",setverifedMobileNo:ae,setmobileCardStatus:L,setotpCardStatus:j}):ee?e.jsx(Se,{closeOtpModal:xe,bottomNaviation:!0,headTitle:"Forgot OTP",callback:ce,setotpCardStatus:j}):e.jsxs(e.Fragment,{children:[e.jsx(Ce,{position:"top-right",autoClose:2e3}),!M&&e.jsxs("div",{children:[e.jsx("header",{className:"border-b border-gray-200 bg-white darks:bg-gray-800 darks:border-gray-800",children:e.jsx("div",{className:"container mx-auto xl:max-w-6xl ",children:e.jsxs("nav",{className:"flex flex-row flex-nowrap items-center justify-between mt-0 py-4 px-6",id:"desktop-menu",children:[e.jsx("a",{className:"flex items-center py-2 ltr:mr-4 rtl:ml-4 text-xl",href:"../index.html",children:e.jsxs("div",{children:[" ",e.jsx("span",{className:"font-bold text-xl",children:t==null?void 0:t.brand_tag})," ",e.jsx("span",{className:"hidden text-gray-700 darks:text-gray-200",children:(t==null?void 0:t.brand_tag)=="AMC"?"AMC":"JUIDCO"})]})}),e.jsx("ul",{className:"flex ltr:ml-auto rtl:mr-auto mt-2",children:e.jsxs("li",{"x-data":"{ open: false }",className:"relative",children:[e.jsx("span",{className:"font-semibold text-gray-600 text-length",children:"Welcome Back"}),e.jsxs("div",{className:"fixed w-full h-full inset-0 z-50",id:"mobile-canvas",xDescription:"Mobile menu","x-show":"open",style:{display:"none"},children:[e.jsx("span",{className:"fixed bg-gray-900 bg-opacity-70 w-full h-full inset-x-0 top-0"}),e.jsxs("nav",{id:"mobile-nav",className:"flex flex-col ltr:right-0 rtl:left-0 w-72 fixed top-0 bg-white darks:bg-gray-800 h-full overflow-auto z-40 scrollbars show",children:[e.jsx("div",{className:"p-6 bg-indigo-500 text-gray-100 border-b border-gray-200 darks:border-gray-700",children:e.jsxs("div",{className:"flex flex-row justify-between",children:[e.jsx("h3",{className:"text-md font-bold",children:"Customizer"}),e.jsx("button",{type:"button",className:"inline-block w-4 h-4",children:e.jsx("svg",{xmlnsXlink:"http://www.w3.org/2000/svg",fill:"currentColor",className:"inline-block text-gray-100 bi bi-x-lg",viewBox:"0 0 16 16",id:"x-lg",children:e.jsx("path",{d:"M1.293 1.293a1 1 0 011.414 0L8 6.586l5.293-5.293a1 1 0 111.414 1.414L9.414 8l5.293 5.293a1 1 0 01-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 01-1.414-1.414L6.586 8 1.293 2.707a1 1 0 010-1.414z"})})})]})}),e.jsxs("div",{className:"py-3 px-6 border-b border-gray-200 darks:border-gray-700",children:[e.jsx("p",{className:"text-base text-semibold",children:"Color Scheme"}),e.jsxs("div",{className:"flex flex-row",children:[e.jsxs("div",{className:"relative inline-block w-8 py-3 mt-0.5 ltr:mr-3 rtl:ml-3 align-middle select-none transition duration-200 ease-in",children:[e.jsx("input",{type:"checkbox",name:"lightdark",id:"lightdark",className:"toggle-checkbox absolute block w-5 h-5 rounded-full bg-white darks:bg-gray-900 border-2 darks:border-gray-700 appearance-none cursor-pointer"}),e.jsx("label",{htmlFor:"lightdark",className:"toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 darks:bg-gray-700 cursor-pointer"})]}),e.jsx("p",{className:"text-sm text-gray-500 self-center",children:"Light and Dark"})]})]}),e.jsxs("div",{className:"py-3 px-6 border-b border-gray-200 darks:border-gray-700",children:[e.jsx("p",{className:"text-base text-semibold",children:"Sidebar Color"}),e.jsxs("div",{className:"flex flex-row",children:[e.jsxs("div",{className:"relative inline-block w-8 py-3 mt-0.5 ltr:mr-3 rtl:ml-3 align-middle select-none transition duration-200 ease-in",children:[e.jsx("input",{type:"checkbox",name:"sidecolor",id:"sidecolor",className:"toggle-checkbox absolute block w-5 h-5 rounded-full bg-white darks:bg-gray-900 border-2 darks:border-gray-700 appearance-none cursor-pointer"}),e.jsx("label",{htmlFor:"sidecolor",className:"toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 darks:bg-gray-700 cursor-pointer"})]}),e.jsx("p",{className:"text-sm text-gray-500 self-center",children:"Light and Dark"})]})]}),e.jsxs("div",{className:"py-3 px-6 border-b border-gray-200 darks:border-gray-700",children:[e.jsx("p",{className:"text-base text-semibold",children:"Direction"}),e.jsxs("div",{className:"flex flex-row",children:[e.jsxs("div",{className:"relative inline-block w-8 py-3 mt-0.5 ltr:mr-3 rtl:ml-3 align-middle select-none transition duration-200 ease-in",children:[e.jsx("input",{type:"checkbox",name:"rtlmode",id:"rtlmode",className:"toggle-checkbox absolute block w-5 h-5 rounded-full bg-white darks:bg-gray-900 border-2 darks:border-gray-700 appearance-none cursor-pointer"}),e.jsx("label",{htmlFor:"rtlmode",className:"toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 darks:bg-gray-700 cursor-pointer"})]}),e.jsx("p",{className:"text-sm text-gray-500 self-center",children:"LTR and RTL"})]})]}),e.jsxs("div",{className:"py-3 px-6 border-b border-gray-200 darks:border-gray-700",children:[e.jsx("p",{className:"text-base text-semibold",children:"Layout"}),e.jsxs("div",{className:"relative mb-3",children:[e.jsx("a",{href:"../index.html",className:"inline-block py-2 px-2.5 mt-2 rounded text-sm text-gray-500 bg-gray-100 darks:bg-gray-900 darks:bg-opacity-20 darks:hover:bg-opacity-60 hover:text-indigo-500 hover:bg-gray-200 self-center",children:"Default"}),e.jsx("a",{href:"../layout-compact.html",className:"inline-block py-2 px-2.5 mt-2 rounded text-sm text-gray-500 bg-gray-100 darks:bg-gray-900 darks:bg-opacity-20 darks:hover:bg-opacity-60 hover:text-indigo-500 hover:bg-gray-200 self-center",children:"Compact"}),e.jsx("a",{href:"../layout-topnav.html",className:"inline-block py-2 px-2.5 mt-2 rounded text-sm text-gray-500 bg-gray-100 darks:bg-gray-900 darks:bg-opacity-20 darks:hover:bg-opacity-60 hover:text-indigo-500 hover:bg-gray-200 self-center",children:"Topnav"})]})]}),e.jsxs("div",{id:"customcolor",className:"py-3 px-6 border-b border-gray-200 darks:border-gray-700",children:[e.jsx("p",{className:"text-base text-semibold",children:"Primary Color"}),e.jsxs("div",{className:"relative my-3",children:[e.jsx("div",{id:"custred",title:"red",className:"inline-block p-3 ltr:mr-1.5 rtl:ml-1.5 bg-red-500 hover:opacity-90 rounded-full cursor-pointer"}),e.jsx("div",{id:"custyellow",title:"yellow",className:"inline-block p-3 ltr:mr-1.5 rtl:ml-1.5 bg-yellow-500 hover:opacity-90 rounded-full cursor-pointer"}),e.jsx("div",{id:"custgreen",title:"green",className:"inline-block p-3 ltr:mr-1.5 rtl:ml-1.5 bg-green-500 hover:opacity-90 rounded-full cursor-pointer"}),e.jsx("div",{id:"custblue",title:"blue",className:"inline-block p-3 ltr:mr-1.5 rtl:ml-1.5 bg-blue-500 hover:opacity-90 rounded-full cursor-pointer"}),e.jsx("div",{id:"custpurple",title:"purple",className:"inline-block p-3 ltr:mr-1.5 rtl:ml-1.5 bg-purple-500 hover:opacity-90 rounded-full cursor-pointer"}),e.jsx("div",{id:"custpink",title:"pink",className:"inline-block p-3 ltr:mr-1.5 rtl:ml-1.5 bg-pink-500 hover:opacity-90 rounded-full cursor-pointer"}),e.jsx("div",{id:"custindigo",title:"reset color",className:"inline-block cursor-pointer",children:e.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"bi bi-arrow-counterclockwise",viewBox:"0 0 16 16",children:[e.jsx("path",{fillRule:"evenodd",d:"M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"}),e.jsx("path",{d:"M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"})]})})]})]}),e.jsx("div",{className:"pt-6 px-6",children:e.jsxs("div",{"x-data":"{ open: true }","x-show":"open",className:"flex justify-between items-center relative bg-yellow-100 text-yellow-900 p-3 rounded-lg mb-4",children:[e.jsxs("div",{children:["How to apply? please read the documentation on ",e.jsx("a",{href:"../docs/customize.html",className:"underline font-semibold",children:"Customize page"})]}),e.jsx("button",{type:"button",children:e.jsx("span",{className:"text-2xl",children:"×"})})]})})]})]})]})})]})})}),e.jsx("main",{children:e.jsx("div",{className:"py-8 md:py-12 bg-gray-100 darks:bg-gray-900 darks:bg-opacity-40",children:e.jsx("div",{className:"container mx-auto px-4 xl:max-w-6xl",children:e.jsxs("div",{className:"flex flex-wrap -mx-4 flex-row",children:[e.jsx("div",{className:"flex-shrink max-w-full px-4 w-full lg:w-1/2",children:e.jsx("div",{className:"max-w-full w-full px-2 sm:px-12 lg:pr-20 mb-12 lg:mb-0",children:e.jsx("div",{className:"relative",children:e.jsxs("div",{className:"p-6 sm:py-8 sm:px-12 rounded-lg bg-white darks:bg-gray-800 shadow-xl",children:[e.jsxs("form",{onSubmit:r.handleSubmit,children:[e.jsx("div",{className:"text-center",children:e.jsx("h1",{className:"text-2xl leading-normal mb-3 font-bold text-gray-800 darks:text-gray-300 text-center",children:"Log in to your account"})}),e.jsx("div",{class:"flex flex-col mt-4 text-center",children:e.jsx("span",{className:"text-center text-red-400",children:le})}),e.jsx("hr",{className:"block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"inputemail",className:"inline-block mb-2",children:"Username"}),e.jsx("input",{...r.getFieldProps("username"),className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600",defaultValue:!0,"aria-label":"email",type:"email",required:!0}),e.jsx("span",{className:"text-red-600",children:r.touched.username&&r.errors.username?r.errors.username:null})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"flex flex-wrap flex-row",children:e.jsx("div",{className:"flex-shrink max-w-full w-1/2",children:e.jsx("label",{htmlFor:"inputpass",className:"inline-block mb-2",children:"Password"})})}),e.jsx("input",{...r.getFieldProps("password"),className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600","aria-label":"password",type:"password",defaultValue:!0,required:!0}),e.jsx("span",{className:"text-red-600",children:r.touched.password&&r.errors.password?r.errors.password:null})]}),e.jsx("div",{className:"grid mt-10",children:Q?e.jsx("div",{className:"flex justify-center",children:e.jsx(Le,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})}):e.jsxs("button",{type:"submit",className:"py-2 px-4 inline-block text-center rounded leading-normal text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",children:[e.jsxs("svg",{xmlnsXlink:"http://www.w3.org/2000/svg",fill:"currentColor",className:"inline-block w-4 h-4 ltr:mr-2 rtl:ml-2 bi bi-box-arrow-in-right",viewBox:"0 0 16 16",children:[e.jsx("path",{fillRule:"evenodd",d:"M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"}),e.jsx("path",{fillRule:"evenodd",d:"M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"})]}),"Login"]})})]}),e.jsx("div",{className:"my-4",children:e.jsx("div",{className:"flex flex-col items-center justify-center flex-wrap gapx-x-2 gap-y-2 w-full poppins",children:e.jsx("span",{className:"text-gray-700 text-sm font-semibold cursor-pointer w-full text-center",onClick:()=>{},children:"Forgot Password"})})})]})})})}),e.jsx("div",{className:"flex-shrink max-w-full px-4 w-full lg:w-1/2",children:e.jsxs("div",{className:"text-center mt-6 lg:mt-0",children:[e.jsx("img",{src:De,alt:"welcome",className:"max-w-full h-auto mx-auto"}),e.jsxs("div",{className:"px-4 mt-12",children:[e.jsx("h1",{className:"text-bold text-4xl mb-2",children:"Serve Citizen Serives with Ease of Access"}),e.jsx("p",{className:"text-lg mb-4 text-gray-500",children:"Manage citizen government services with easy of access and serve them in no time. "})]})]})})]})})})}),e.jsx("footer",{className:"bg-white py-6 border-t border-gray-200 darks:bg-gray-800 darks:border-gray-800",children:e.jsx("div",{className:"container mx-auto px-4 xl:max-w-6xl ",children:e.jsx("div",{className:"mx-auto px-4",children:e.jsxs("div",{className:"flex flex-wrap flex-row -mx-4",children:[e.jsx("div",{className:"flex-shrink max-w-full px-4 w-full md:w-1/2 text-center md:ltr:text-left md:rtl:text-right",children:e.jsxs("ul",{className:"ltr:pl-0 rtl:pr-0",children:[e.jsx("li",{className:"inline-block ltr:mr-3 rtl:ml-3",children:e.jsx("a",{className:"hover:text-indigo-500",href:"#",children:"Support"})}),e.jsx("li",{className:"inline-block ltr:mr-3 rtl:ml-3",children:e.jsx("a",{className:"hover:text-indigo-500",href:"#",children:"Help Center"})}),e.jsx("li",{className:"inline-block ltr:mr-3 rtl:ml-3",children:e.jsx("a",{className:"hover:text-indigo-500",href:"#",children:"Privacy"})}),e.jsx("li",{className:"inline-block ltr:mr-3 rtl:ml-3",children:e.jsx("a",{className:"hover:text-indigo-500",href:"#",children:"Terms of Service"})})]})}),e.jsx("div",{className:"flex-shrink max-w-full px-4 w-full md:w-1/2 text-center md:ltr:text-right md:rtl:text-left",children:e.jsxs("p",{className:"mb-0 mt-3 md:mt-0",children:[e.jsx("a",{href:"#",className:"hover:text-indigo-500",children:(t==null?void 0:t.brand_tag)=="AMC"?"AMC":"JUIDCO"})," | All right reserved"]})})]})})})})]}),M&&e.jsx(ResetPassword,{back:()=>de()})]})}const Fe=o=>({RightNavCloseStatus:o.RightNavCloseStatus,isLoggedIn:o.isLoggedIn}),Te=o=>({LOGIN:C=>o({type:"LOGIN"})}),Be=ue(Fe,Te)(Pe);export{Be as default};
