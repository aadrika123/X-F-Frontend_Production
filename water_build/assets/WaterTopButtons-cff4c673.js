import{x as l,v as d,m as r,j as t,o as c,k as s}from"./index-c8689842.js";const x=e=>{const{t:a}=l(),{id:i}=d(),n=r(),o=e==null?void 0:e.active;return t(c,{children:s("div",{className:"md:flex py-2 justify-center items-center container mx-2 md:mx-auto w-full",children:[s("div",{className:"flex-1 flex pl-2 font-bold text-xs md:text-2xl text-gray-700",children:[" ",a("tranWaterApplicationSearchPage.consumerDetailsLabel.label")," - ",e==null?void 0:e.consumerNo]}),s("div",{className:"flex justify-right items-center space-x-2",children:[t("button",{onClick:()=>n(`/waterViewConsumer/${i}`),className:`font-semibold text-xs md:text-base ${o=="consumer"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,children:a("tranWaterApplicationSearchPage.consumerDetailsLabel.label")}),t("button",{onClick:()=>n(`/waterViewDemand/${i}`),className:`font-semibold md:text-base text-xs ${o=="demand"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,children:a("tranWaterApplicationSearchPage.demandDetailsLabel.label")}),t("button",{onClick:()=>n(`/waterViewPaymentHistory/${i}`),className:`font-semibold md:text-base text-xs ${o=="payment"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-2 py-1 shadow-lg hover:scale-105 rounded-sm`,children:a("tranWaterApplicationSearchPage.paymentHistoryLabel.label")}),t("button",{onClick:()=>n(`/waterdemndbill/${i}`),className:`font-semibold md:text-base text-xs ${o=="payment"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-2 py-1 shadow-lg hover:scale-105 rounded-sm`,children:"View Bill"})]})]})})};export{x as W};
