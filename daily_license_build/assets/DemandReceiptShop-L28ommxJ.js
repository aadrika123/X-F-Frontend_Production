import{c as f,r as o,A as j,a as v,j as s}from"./index-jm7kGz-q.js";import{n as t}from"./PowerupFunctions-J08OQ4wz.js";import{R as u}from"./RentalApiList-cFLWuyfa.js";import{L as g}from"./Loader-4eRTBfyD.js";function A(){var n;const{id:c,year:d}=f();console.log("id...",c,d);const{api_getRentalDemandReceipt:r}=u(),[e,x]=o.useState(),[m,a]=o.useState(!1);o.useEffect(()=>{h()},[c,d]);const h=()=>{const i={shopId:c,financialYear:d};j.post("".concat(r),i,v()).then(l=>{console.log("payment data 2",l.data.data),l.data.status&&x(l.data.data),a(!1)}).catch(l=>{console.log(l),a(!1)})};function N(){console.log("rn hit",e),window.ReactNativeWebView&&window.ReactNativeWebView.postMessage(JSON.stringify({keyData:e,Key:"shopDemandReceipt"}))}return console.log("payment data",e),s.jsxs(s.Fragment,{children:[m&&s.jsx(g,{}),s.jsx("button",{className:"bg-sky-500 px-3 py-1 text-xs  text-white ",onClick:()=>N(),children:"Print Receipt"}),s.jsx("div",{className:" border-dashed text-[14px]  bg-white text-gray-700  border-2 font-Lato  w-[22rem] p-3 ml-5 mt-4 border-gray-700 ",children:s.jsx("div",{className:" text-justify font-poppins ",children:s.jsxs("div",{className:" text-gray-700  text-xs",children:[s.jsx("div",{className:"text-center",children:s.jsx("img",{src:e==null?void 0:e.ulbLogo,className:"w-12 mx-auto"})}),s.jsx("div",{className:"text-center  font-semibold",children:t(e==null?void 0:e.ulbName)}),s.jsx("div",{className:"text-center ",children:"Municipal Rental Demand Receipt"}),s.jsxs("div",{className:"mt-2",children:["Allottee name : ",t(e==null?void 0:e.allottee)]}),s.jsxs("div",{className:"",children:["Market : ",t(e==null?void 0:e.market)]}),s.jsxs("div",{className:"",children:["Shop no : ",t(e==null?void 0:e.shopNo)]}),s.jsxs("div",{className:"",children:["Shop category : ",t(e==null?void 0:e.shopType)]}),s.jsxs("div",{className:"",children:["Amount : ",t(e==null?void 0:e.totalAmount)]}),s.jsxs("div",{className:"",children:["(in words) : ",t(e==null?void 0:e.amountinWords)]}),s.jsx("div",{className:"mt-2 font-semibold",children:"Demand Details :"}),s.jsxs("div",{className:"flex mt-1 text-center",children:[s.jsx("div",{className:"flex-1",children:"Period"}),s.jsx("div",{className:"flex-1",children:"Amount"})]}),(n=e==null?void 0:e.shopDemand)==null?void 0:n.map(i=>s.jsxs("div",{className:"flex mt-1 text-center",children:[s.jsx("div",{className:"flex-1",children:t(i==null?void 0:i.financial_year)}),s.jsx("div",{className:"flex-1",children:t(i==null?void 0:i.amount)})]})),s.jsx("div",{className:"text-center mt-2 text-xs font-semibold",children:"***This is a demand generated receipt, not a payment receipt***"}),s.jsx("div",{className:"text-center mt-2 text-xs",children:"***************************************"}),s.jsx("div",{className:"text-center font-semibold capitalize mt-2",children:"For details please visit"}),s.jsx("div",{className:"text-center font-semibold  ",children:t(e==null?void 0:e.website)}),s.jsx("div",{className:"text-center font-semibold  ",children:t(e==null?void 0:e.tollFreeNo)})]})})})]})}export{A as default};
