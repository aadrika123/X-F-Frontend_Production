import{u as r,j as s}from"./index-LVoQ7CEH.js";import{n as t}from"./PowerupFunctions-y4WO6uRc.js";function c(l){var i;console.log("data view",l==null?void 0:l.dataList);const n=r();return s.jsx(s.Fragment,{children:(i=l==null?void 0:l.dataList)==null?void 0:i.map(e=>s.jsx("div",{className:"  flex justify-center items-center  overflow-hidden bg-white",children:s.jsx("div",{class:"p-2 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500",children:s.jsxs("div",{class:" flex items-center  justify-between p-3  rounded-lg bg-[#EDEDF4] shadow-indigo-50 shadow-md",children:[s.jsxs("div",{children:[s.jsx("h2",{class:"text-gray-900 text-sm font-bold",children:t(e==null?void 0:e.vendor_name)}),s.jsxs("h3",{class:"mt-2 text-sm font-bold text-[#5846BE] text-left",children:["Toll No. : ",t(e==null?void 0:e.toll_no)]}),s.jsxs("p",{class:"text-xs font-semibold text-gray-400",children:["Last Paid on : ",t(e==null?void 0:e.last_payment_date)]}),s.jsxs("p",{class:"text-xs font-semibold text-gray-400",children:[" ",t(e==null?void 0:e.circle_name)]}),s.jsx("button",{class:"text-xs mt-2 px-8 py-1 bg-[#5846BE]  text-white rounded leading-5  tracking-wider hover:bg-[#5846BE] outline-none",onClick:()=>n("/toll-details/".concat(e==null?void 0:e.id)),children:"View"})]}),s.jsx("div",{class:"bg-gradient-to-tr from-[#5846BE] to-[#5846BE] w-20 h-20  rounded-full shadow-lg  border-gray-50  border-dashed border-2  flex justify-center items-center ",children:s.jsx("div",{children:s.jsxs("h1",{class:"text-gray-50 text-sm text-center",children:["Rate ",s.jsx("br",{}),t(e==null?void 0:e.rate)]})})})]})})}))})}export{c as default};
