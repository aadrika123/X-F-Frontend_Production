import{r as s,j as e,ay as p}from"./index-e24d5f40.js";const j="/assets/otpsvg-24a868f7.svg";function y(t){const[l,n]=s.useState(""),[d,o]=s.useState("hidden"),[r,c]=s.useState(),[i,m]=s.useState(),[b,x]=s.useState(!0),h=()=>{i==r?(o("hidden"),n(""),console.log("after verification calling submit form"),t.submitFun(),t.closeOtpModaal()):alert("check OTP"),x(!1)},u=a=>{c(Math.floor(Math.random()*(9999-1e3+1))),o(""),n("hidden"),a.preventDefault()};return e.jsx("div",{children:e.jsx("div",{className:"rounded-lg  shadow-xl pt-4 text-white text-center z-20  mx-auto",style:{width:"50vw",height:"70vh"},children:e.jsxs("div",{className:"grid grid-cols-6 gap-2 mx-auto p-4",children:[e.jsx("div",{className:"col-span-3 ",children:e.jsx("img",{src:j})}),e.jsx("div",{className:"col-span-3  shadow-2xl border-2 border-gray-400 rounded-t-xl rounded-b-xl flex justify-center items-center",children:e.jsxs("div",{className:"w-80 h-96 p-4",children:[e.jsx("button",{onClick:()=>t==null?void 0:t.closeOtpModaal(),children:e.jsx(p,{className:"absolute top-2 right-5 text-red-500 text-3xl hover:scale-125"})}),e.jsx("div",{className:"",children:e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/1773/1773239.png",className:"h-10 mx-auto mt-8 "})}),e.jsx("h1",{className:"text-center text-sm text-gray-600 p-4 font-semibold",children:"Mobile Number"}),e.jsx("h1",{className:"text-center text-xs text-gray-500 ",children:"We need to send otp to authenticate your number"}),e.jsxs("div",{className:" p-6 ",children:[e.jsx("form",{onSubmit:u,className:l,children:e.jsxs("div",{children:[e.jsx("input",{type:"number",maxLength:10,name:"mobile",placeholder:"Enter your mobile no",className:"px-3 py-1 rounded-md shadow-md text-gray-500"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("button",{type:"submit",className:"w-44 py-1 rounded-md shadow-sm bg-sky-400 text-gray-50 text-sm",children:" NEXT"})]})}),e.jsxs("form",{className:d,children:[e.jsx("p",{htmlFor:"forMobile",children:"Enter OTP"}),e.jsxs("h5",{className:"text-green-600 text-md ",children:[" YOUR OTP IS ",r," "]})," ",e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("input",{type:"number",maxLength:10,name:"otp",placeholder:"Enter your OTP",className:"px-3 py-1 rounded-md shadow-md text-gray-500",onChange:a=>m(a.target.value)}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("button",{type:"button",className:"w-44 py-1 rounded-md shadow-sm bg-sky-400 text-gray-50 text-sm",onClick:h,children:"CONFIRM"})]})]})]})]})})]})})})}export{y as default};
