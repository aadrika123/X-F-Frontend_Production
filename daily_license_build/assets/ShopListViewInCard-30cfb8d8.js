import{u as c,j as s}from"./index-33b98be8.js";import{n as i}from"./PowerupFunctions-93317dcd.js";function r(l){var n;console.log("data view",l==null?void 0:l.dataList);const t=c();return s.jsx(s.Fragment,{children:(n=l==null?void 0:l.dataList)==null?void 0:n.map(e=>s.jsx("div",{className:"  flex justify-center items-center  overflow-hidden bg-white",children:s.jsx("div",{class:"p-2 sm:w-full lg:w-full w-full hover:scale-105 duration-500",children:s.jsxs("div",{class:" flex items-center  justify-between p-3  rounded-lg bg-[#EDEDF4] shadow-indigo-50 shadow-md",children:[s.jsxs("div",{children:[s.jsx("h2",{class:"text-gray-900 text-sm font-bold",children:i(e==null?void 0:e.allottee)}),s.jsxs("h3",{class:"mt-2 text-sm font-bold text-[#5846BE] text-left",children:["Shop No. : ",i(e==null?void 0:e.shop_no)]}),s.jsxs("p",{class:"text-xs font-semibold text-gray-400",children:["Market : ",i(e==null?void 0:e.market_name)]}),s.jsxs("p",{class:"text-xs font-semibold text-gray-400",children:["Circle :  ",i(e==null?void 0:e.circle_name)]}),s.jsxs("p",{class:"text-xs font-semibold text-gray-400",children:["Contact No. :  ",i(e==null?void 0:e.contact_no)]})]}),s.jsx("div",{class:" ",children:s.jsx("div",{children:s.jsx("button",{class:"text-xs mt-2 px-8 py-1 bg-[#5846BE]  text-white rounded leading-5  tracking-wider hover:bg-[#5846BE] outline-none",onClick:()=>t("/shop-details/".concat(e==null?void 0:e.id)),children:"View"})})})]})})}))})}export{r as default};
