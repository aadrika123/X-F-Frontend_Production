import{Y as o,e as m,u as c,j as t,i as x,bW as s}from"./index-048babd9.js";function y(e){const{t:l}=o(),a=m(),{id:i,location:b,tabIndex:h}=c();let n="",d="",g="";return(e==null?void 0:e.type)=="application"?(n=`/propApplicationDetails/${i}`,d=`/viewDemand/${i}`):(n=`/holdingPropertyDetails/${i}`,d=`/viewDemandHoldingProperty/${i}`,g=`/holding-transactions/${i}`),(e==null?void 0:e.type)=="gbSaf"&&(d=`/viewDemandGbSaf/${i}`,n=`/gbsaf-details/${i}`),t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex flex-col-reverse gap-y-4 md:flex-row md:py-2 justify-center items-center",children:[t.jsxs("div",{className:"flex-1 flex font-bold text-md text-gray-700",children:[e==null?void 0:e.title,(e==null?void 0:e.payButton)&&t.jsxs("button",{onClick:()=>a(`/property-payment/${i}/${(e==null?void 0:e.type)=="holding"?"holding":"saf"}`),type:"button",className:"ml-4 font-bold px-6 py-1 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out shadow-xl border border-white",children:[e!=null&&e.isPayable?"Pay":"Submit"," ",x(e==null?void 0:e.payableAmount)," ",t.jsx("span",{children:t.jsx(s,{className:"inline font-bold text-xl"})})," "]})]}),t.jsxs("div",{className:"flex flex-wrap md:flex-nowrap justify-between gap-y-2 md:justify-right items-center",children:[t.jsx("button",{className:`mr-4 ${(e==null?void 0:e.active)=="property"?"bg-indigo-500  text-white":"bg-white border border-indigo-500 text-indigo-500"} px-4 py-1 shadow-lg hover:scale-105 rounded-sm text-sm md:text-base`,onClick:()=>a(n),children:l("mainHoldingPage.propertyDetailsButton.label")}),t.jsx("button",{className:`mr-4 ${(e==null?void 0:e.active)=="demand"?"bg-indigo-500  text-white":"bg-white border border-indigo-500 text-indigo-500"} px-4 py-1 shadow-lg hover:scale-105 rounded-sm text-sm md:text-base`,onClick:()=>a(d),children:l("mainHoldingPage.demandDetailsButton.label")}),(e==null?void 0:e.type)=="holding"&&t.jsx("button",{className:`mr-4 ${(e==null?void 0:e.active)=="payment"?"bg-indigo-500  text-white":"bg-white border border-indigo-500 text-indigo-500"} px-4 py-1 shadow-lg hover:scale-105 rounded-sm text-sm md:text-base`,onClick:()=>a(g),children:l("mainHoldingPage.paymentHistoryButton.label")})]})]})})}export{y as T};
