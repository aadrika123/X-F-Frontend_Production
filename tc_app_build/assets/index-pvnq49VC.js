import{j as e}from"./index-TVKchaO_.js";import{u as o,f as r}from"./react-HXRlOr-l.js";import{P as i}from"./index-NthHsoqN.js";function c({paymentStatus:s,tranNo:t}){const a=o();return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"border border-gray-200 shadow-md shadow-gray-300 justify-center p-4 sm:w-1/2 lg:w-1/3 w-full bg-white mx-auto flex flex-col h-screen top-0 left-0 right-0 bottom-0 fixed",children:[e.jsxs("div",{className:"relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 hover:bg-white opacity-0 transition duration-700 hover:opacity-10"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","data-slot":"icon",className:"text-white w-24 h-24 mb-4 mt-12 bg-green-600 max-w-full h-auto mx-auto animate-wiggle rounded-full",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"})})]}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"mb-2",children:[e.jsx("h3",{className:"text-2xl  text-center mb-6 text-[#40AA15] font-openSans font-semibold",children:"Payment Successful"}),e.jsxs("h3",{className:"text-xl  text-center mb-2 text-gray-400 font-openSans font-semibold ",children:["Transaction Number. - ",t]}),e.jsx("h3",{className:"text-sm  text-center mb-3 text-gray-400 font-openSans font-semibold ",children:"( Thank you for your transaction)"})]})}),e.jsx("div",{className:"",children:e.jsx("div",{className:" text-center mt-8 mb-16",children:e.jsxs("button",{onClick:()=>a("/amc-app/property/payment-receipt/".concat(s),{replace:!0}),className:"bg-[#1A4D8C] text-sm px-8 py-2 text-white  rounded leading-5 shadow-lg",children:[" ","View Receipt"]})})})]})})}function x(){const s=r(),t=new URLSearchParams(s.search),a=t.get("response"),n=t.get("tranNo");return e.jsx(i,{title:"Payment Response",children:e.jsx(c,{paymentStatus:a,tranNo:n})})}export{x as default};
