import{x as l,v as r,m as d,j as a,o as c,k as o}from"./index-f00892d3.js";const x=e=>{const{t}=l(),{id:i}=r(),n=d(),s=e==null?void 0:e.active;return a(c,{children:o("div",{className:"md:flex py-2 justify-center items-center container mx-2 md:mx-auto w-full",children:[o("div",{className:"flex-1 flex pl-2 font-bold text-xs md:text-2xl text-gray-700",children:[" ",t("tranWaterApplicationSearchPage.consumerDetailsLabel.label")," - ",e==null?void 0:e.consumerNo]}),o("div",{className:"flex justify-right items-center space-x-2",children:[a("button",{onClick:()=>n(`/waterViewConsumer/${i}`),className:`font-semibold text-xs md:text-base ${s=="consumer"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,children:t("tranWaterApplicationSearchPage.consumerDetailsLabel.label")}),a("button",{onClick:()=>n(`/waterViewDemand/${i}`),className:`font-semibold md:text-base text-xs ${s=="demand"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,children:t("tranWaterApplicationSearchPage.demandDetailsLabel.label")}),a("button",{onClick:()=>n(`/waterViewPaymentHistory/${i}`),className:`font-semibold md:text-base text-xs ${s=="payment"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-2 py-1 shadow-lg hover:scale-105 rounded-sm`,children:t("tranWaterApplicationSearchPage.paymentHistoryLabel.label")})]})]})})};export{x as W};