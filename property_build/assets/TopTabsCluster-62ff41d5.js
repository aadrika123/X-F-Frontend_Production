import{Y as s,e as o,u as c,j as t}from"./index-48b3dac3.js";function x(e){const{t:i}=s(),n=o(),{id:a,location:m,tabIndex:g}=c();let l="",d="";return l=`/viewDemandHoldingPropertyCluster/${a}`,d=`/cluster-holding-transactions/${a}`,t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex py-2 justify-center items-center",children:[t.jsx("div",{className:"flex-1 flex pl-2 font-bold text-2xl text-gray-700",children:e==null?void 0:e.title}),t.jsxs("div",{className:"flex justify-right items-center",children:[t.jsx("button",{className:`mr-4 ${(e==null?void 0:e.active)=="demand"?"bg-indigo-500  text-white":"bg-white border border-indigo-500 text-indigo-500"} px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,onClick:()=>n(l),children:i("mainHoldingPage.demandDetailsButton.label")}),(e==null?void 0:e.type)=="holding"&&t.jsx("button",{className:`mr-4 ${(e==null?void 0:e.active)=="payment"?"bg-indigo-500  text-white":"bg-white border border-indigo-500 text-indigo-500"} px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,onClick:()=>n(d),children:i("mainHoldingPage.paymentHistoryButton.label")})]})]})})}export{x as T};
