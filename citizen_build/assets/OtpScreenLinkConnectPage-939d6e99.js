import{u as w,a as O,r as n,j as e,M as p}from"./index-5738b2d0.js";function M(t){const{id:s}=w();console.log("param",s);const d=O(),[h,c]=n.useState(""),[x,l]=n.useState("hidden"),[r,u]=n.useState(),[g,f]=n.useState(),[b,a]=n.useState(!1),j={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",width:"800",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};n.useEffect(()=>{(t==null?void 0:t.openOtpScreen)==!0&&m()},[t==null?void 0:t.openOtpScreen]),n.useEffect(()=>{s!=null&&m()},[s]);function m(){a(!0)}function y(){}function o(){a(!1),t==null||t.closeOtpScreen()}const N=()=>{g==r?(l("hidden"),c(""),console.log("after verification calling submit form"),s==1?d("/appicationList"):s==2&&d("/allTranscationList"),(t==null?void 0:t.id)==3&&(o(),t==null||t.verifyFun())):alert("check OTP"),a(!1)},v=i=>{u(Math.floor(Math.random()*(9999-1e3+1))),l(""),c("hidden"),i.preventDefault()};return e.jsx("div",{children:e.jsx(p,{isOpen:b,onAfterOpen:y,onRequestClose:o,style:j,contentLabel:"Example Modal",children:e.jsx("div",{className:"rounded-lg  shadow-xl pt-4 text-white text-center bg z-20  mx-auto",style:{width:"50vw",height:"70vh"},children:e.jsxs("div",{className:"grid grid-col-1 lg:grid grid-cols-6 md:grid grid-cols-6 gap-2 mx-auto",children:[e.jsx("div",{className:"col-span-3 ",children:e.jsx("img",{src:"https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5488.jpg?w=740&t=st=1669023049~exp=1669023649~hmac=40cad9816374be9c1321686b44fd28816051fad89f95f2a3010382a82a720f81",className:"h-96 opacity-95 hue-rotate-[40deg]"})}),e.jsx("div",{className:"col-span-2",children:e.jsxs("div",{className:"w-80 h-96 border-2 border-gray-400 rounded-t-xl rounded-b-xl p-4",children:[e.jsx("button",{className:"text-red-800 rounded-sm  shadow-md float-right text-xs bg-red-300 px-1",onClick:o,children:"Cancel"}),e.jsx("div",{className:"",children:e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/1773/1773239.png",className:"h-10 mx-auto mt-8 hue-rotate-[40deg]"})}),e.jsx("h1",{className:"text-center text-sm text-gray-600 p-4 font-semibold",children:"Mobile Number"}),e.jsx("h1",{className:"text-center text-xs text-gray-500 ",children:"We need to send otp to authenticate your number"}),e.jsxs("div",{className:" p-6 ",children:[e.jsx("form",{onSubmit:v,className:h,children:e.jsxs("div",{children:[e.jsx("input",{type:"number",maxLength:10,name:"mobile",placeholder:"Enter your mobile no",className:"px-3 py-1 rounded-md shadow-md text-gray-500"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("button",{type:"submit",className:"w-44 py-1 rounded-md shadow-sm bg-indigo-500 hover:bg-indigo-600 text-gray-50 text-sm",children:" NEXT"})]})}),e.jsxs("form",{className:x,children:[e.jsx("p",{htmlFor:"forMobile",children:"Enter OTP"}),e.jsxs("h5",{className:"text-green-600 text-md ",children:[" YOUR OTP IS ",r," "]})," ",e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("input",{type:"number",maxLength:10,name:"otp",placeholder:"Enter your OTP",className:"px-3 py-1 rounded-md shadow-md text-gray-500",onChange:i=>f(i.target.value)}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("button",{type:"button",className:"w-44 py-1 rounded-md shadow-sm bg-indigo-500 hover:bg-indigo-600 text-gray-50 text-sm",onClick:N,children:"CONFIRM"})]})]})]})]})})]})})})})}export{M as default};
