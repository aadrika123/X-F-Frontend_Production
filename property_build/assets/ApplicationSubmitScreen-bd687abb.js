import{r as i,j as e,af as d}from"./index-161aea56.js";import{b as r}from"./index.esm-9a0a1c6c.js";import{c as x}from"./check-f4ca1ac8.js";/* empty css             */const g=s=>{const[n,t]=i.useState(!1);i.useEffect(()=>{(s==null?void 0:s.openSubmit)==!0&&o()},[s==null?void 0:s.openSubmit]);const o=()=>t(!0),a=()=>{t(!1)},c=()=>{},l=()=>{a(),s.navigation()};return e.jsx(e.Fragment,{children:e.jsx(d,{isOpen:n,onAfterOpen:c,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center overflow-auto",contentLabel:"Example Modal",children:e.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[50vw] md:h-max w-full relative border-2 border-indigo-500 bg-gray-50 px-6 py-4 h-max border-t-2 border-l-2 overflow-auto",children:[e.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:()=>l(),children:e.jsx(r,{fontSize:10})}),e.jsxs("div",{className:"poppins text-xl font-semibold w-full pt-6 px-8",children:[e.jsx("div",{className:"bg-indigo-600 font-semibold rounded-sm w-full 2xl:text-2xl text-lg text-center shadow-sm text-white px-4 py-2 poppins uppercase",children:s==null?void 0:s.heading}),e.jsxs("div",{className:"bg-white grid grid-cols-12 my-4 rounded-md shadow-lg",children:[e.jsx("div",{className:"col-span-4 p-6 ",children:e.jsx("img",{src:x,alt:"",srcset:"",className:"w-[10rem]"})}),e.jsxs("div",{className:"col-span-8 p-6 poppins font-normal",children:[e.jsx("div",{className:"poppins text-green-500 font-semibold 2xl:text-2xlxl text-lg",children:"The form has submitted successfully."}),e.jsxs("div",{className:"poppins mt-4 text-sm 2xl:text-lg",children:["Application No. : ",e.jsx("span",{className:"poppins font-semibold",children:s==null?void 0:s.appNo})]}),e.jsx("div",{className:"poppins mt-4 text-sm 2xl:text-lg",children:" You can track this application through the application number."}),e.jsx("div",{}),e.jsx("div",{})]})]}),e.jsx("div",{className:"flex items-center justify-center my-6",children:e.jsx("button",{className:"2xl:px-6 px-3 py-1.5 2xl:py-2.5 cursor-pointer bg-blue-500 text-white font-medium text-xs  poppins rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",onClick:()=>l(),children:"Close"})})]})]})})})};export{g as A};
