import{u as o,a,j as e}from"./index-5738b2d0.js";const r=t=>{const{id:d}=o(),i=a(),s=t.active;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"md:flex py-2 justify-center items-center container mx-2 md:mx-auto w-full",children:[e.jsx("div",{className:"flex-1 flex pl-2 font-bold text-xs md:text-2xl text-gray-700",children:(t==null?void 0:t.consumerNo)&&"Consumer Details - "+(t==null?void 0:t.consumerNo)}),e.jsxs("div",{className:"flex justify-right items-center space-x-2",children:[e.jsx("button",{onClick:()=>i("/water-dashboard"),className:`font-semibold text-xs md:text-base ${s=="dash"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,children:"Dashboard"}),e.jsx("button",{onClick:()=>i(`/waterViewConsumer/${d}`),className:`font-semibold text-xs md:text-base ${s=="consumer"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,children:"Consumer Details"}),e.jsx("button",{onClick:()=>i(`/waterViewDemand/${d}`),className:`font-semibold md:text-base text-xs ${s=="demand"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,children:"Demand Details"}),e.jsx("button",{onClick:()=>i(`/waterViewPaymentHistory/${d}`),className:`font-semibold md:text-base text-xs ${s=="payment"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-2 py-1 shadow-lg hover:scale-105 rounded-sm`,children:"Payment History"})]})]})})};export{r as W};
