import{u as s,a as o,bw as c,j as t}from"./index-7379c390.js";function x(e){const{t:n}=s(),a=o(),{id:i,location:g,tabIndex:m}=c();console.log("id direct at topnav...",i);let l="",d="";return l=`/viewDemandHoldingPropertyCluster/${i}`,d=`/cluster-holding-transactions/${i}`,t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex py-2 justify-center items-center",children:[t.jsx("div",{className:"flex-1 flex pl-2 font-bold text-2xl text-gray-700",children:e==null?void 0:e.title}),t.jsxs("div",{className:"flex justify-right items-center",children:[t.jsx("button",{className:`mr-4 ${(e==null?void 0:e.active)=="demand"?"bg-indigo-500  text-white":"bg-white border border-indigo-500 text-indigo-500"} px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,onClick:()=>a(l),children:n("mainHoldingPage.demandDetailsButton.label")}),(e==null?void 0:e.type)=="holding"&&t.jsx("button",{className:`mr-4 ${(e==null?void 0:e.active)=="payment"?"bg-indigo-500  text-white":"bg-white border border-indigo-500 text-indigo-500"} px-4 py-1 shadow-lg hover:scale-105 rounded-sm`,onClick:()=>a(d),children:n("mainHoldingPage.paymentHistoryButton.label")})]})]})})}export{x as T};
