import{t as i,u as o,a as r,j as e}from"./index-5aface7b.js";const x=t=>{const{t:a}=i(),{id:n}=o(),s=r(),d=t.active;return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"md:flex py-2 justify-center items-center container mx-2 md:mx-auto w-full",children:[e.jsx("div",{className:"flex-1 flex pl-2 font-bold text-xs md:text-2xl text-gray-700",children:(t==null?void 0:t.consumerNo)&&` ${a("tranWaterDashboardIndex.consumerDetailsLabel.label")}`+(t==null?void 0:t.consumerNo)}),e.jsxs("div",{className:"flex justify-right items-center space-x-2",children:[e.jsx("button",{onClick:()=>s("/water-dashboard"),className:`font-semibold text-xs md:text-base ${d=="dash"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,children:a("tranWaterDashboardIndex.dashboardLabel.label")}),e.jsx("button",{onClick:()=>s(`/waterViewConsumer/${n}`),className:`font-semibold text-xs md:text-base ${d=="consumer"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,children:a("tranWaterDashboardIndex.consumerDetailsLabel.label")}),e.jsx("button",{onClick:()=>s(`/waterViewDemand/${n}`),className:`font-semibold md:text-base text-xs ${d=="demand"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,children:a("tranWaterDashboardIndex.demandDetailsLabel.label")}),e.jsx("button",{onClick:()=>s(`/waterViewPaymentHistory/${n}`),className:`font-semibold md:text-base text-xs ${d=="payment"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-2 py-1 shadow-lg hover:scale-105 rounded-sm`,children:a("tranWaterDashboardIndex.paymentHistoryLabel.label")})]})]})})};export{x as W};
