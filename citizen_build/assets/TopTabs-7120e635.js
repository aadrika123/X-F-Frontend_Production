import{a as u,u as x,j as t,bd as g,aI as h,z as d,D as c}from"./index-5aface7b.js";function b(e){const a=u(),{id:i,btc:o}=x();console.log("id direct at topnav...",i);let n="",l="",m="",s="";return(e==null?void 0:e.type)=="application"?(n=`/propApplicationDetails/${i}`,l=`/viewDemand/${i}`,s=`/safdocumentupload/${i}/${e==null?void 0:e.btc}`):(n=`/holdingPropertyDetails/${i}`,l=`/viewDemandHoldingProperty/${i}`,m=`/holding-transactions/${i}`),t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex flex-col-reverse gap-y-4 md:flex-row md:py-2 justify-center items-center",children:[t.jsxs("div",{className:"flex-1 flex font-bold text-md text-gray-700",children:[t.jsxs("span",{className:g,children:[" ",e==null?void 0:e.title]}),(e==null?void 0:e.payButton)&&t.jsxs("button",{onClick:()=>a(`/property-payment/${i}/${(e==null?void 0:e.type)=="holding"?"holding":"saf"}`),type:"button",className:"ml-4 font-bold px-6 py-1 bg-indigo-500 text-white  text-sm leading-tight uppercase rounded  hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out shadow-xl border border-white",children:["Pay Tax ",t.jsx("span",{children:t.jsx(h,{className:"inline font-bold text-xl"})})," "]})]}),t.jsxs("div",{className:"flex flex-wrap md:flex-nowrap justify-between gap-y-2 md:justify-right items-center",children:[t.jsx("button",{className:`mr-4 ${(e==null?void 0:e.active)=="property"?d:c}`,onClick:()=>a(n),children:"Property-Details"}),t.jsx("button",{className:`mr-4 ${(e==null?void 0:e.active)=="demand"?d:c}`,onClick:()=>a(l),children:"Demand-Details"}),(e==null?void 0:e.type)=="holding"&&t.jsx("button",{className:`mr-4 ${(e==null?void 0:e.active)=="payment"?d:c}`,onClick:()=>a(m),children:"Payment-History"}),((e==null?void 0:e.type)=="application"||o==!0||o=="true")&&t.jsx("button",{className:`${(e==null?void 0:e.active)=="document"?"bg-indigo-500  text-white":"bg-white border border-indigo-500 text-indigo-500"} px-4 py-1 shadow-lg hover:scale-105 rounded-sm text-sm md:text-base`,onClick:()=>a(s),children:"Upload-Documents"})]})]})})}export{b as T};
