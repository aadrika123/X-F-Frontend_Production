import{x as c,v as m,m as x,j as t,o as b,k as s}from"./index-e6cc12e6.js";const h=e=>{const{t:a}=c(),{id:i}=m(),n=x(),o=e==null?void 0:e.active,l=localStorage.getItem("UserDetails"),r=JSON.parse(l),{user_type:d}=r;return console.log("User Type:",d),t(b,{children:s("div",{className:"md:flex py-2 justify-center items-center container mx-2 md:mx-auto w-full",children:[s("div",{className:"flex-1 flex pl-2 font-bold text-xs md:text-2xl text-gray-700",children:[" ",a("tranWaterApplicationSearchPage.consumerDetailsLabel.label")," - ",e==null?void 0:e.consumerNo]}),s("div",{className:"flex justify-right items-center space-x-2",children:[t("button",{onClick:()=>n(`/waterViewConsumer/${i}`),className:`font-semibold text-xs md:text-base ${o=="consumer"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,children:a("tranWaterApplicationSearchPage.consumerDetailsLabel.label")}),t("button",{onClick:()=>n(`/waterViewDemand/${i}`),className:`font-semibold md:text-base text-xs ${o=="demand"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,children:a("tranWaterApplicationSearchPage.demandDetailsLabel.label")}),t("button",{onClick:()=>n(`/waterViewPaymentHistory/${i}`),className:`font-semibold md:text-base text-xs ${o=="payment"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-2 py-1 shadow-lg hover:scale-105 rounded-sm`,children:a("tranWaterApplicationSearchPage.paymentHistoryLabel.label")}),d==="Admin"&&t("button",{onClick:()=>n(`/updatedetails/${i}`),className:`font-semibold md:text-base text-xs ${o==="payment"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500 px-2 py-1 shadow-lg hover:scale-105 rounded-sm`,children:a("tranWaterApplicationSearchPage.updatedetails.label")}),t("button",{onClick:()=>n(`/update-meter-details/${i}`),className:`font-semibold md:text-base text-xs ${o=="payment"?"bg-indigo-500 text-white":"bg-white text-indigo-500"} border border-indigo-500  px-2 py-1 shadow-lg hover:scale-105 rounded-sm`,children:"Update Connection Type"})]})]})})};export{h as W};