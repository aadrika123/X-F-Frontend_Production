import{r as n,K as r,a as c,j as e,dn as x,b_ as m}from"./index-f317ffa6.js";function f(s){n.useState(!0);const t=r();c("Verification");const i=()=>{const l=window.location.href,a=document.referrer;l!==a?(window.history.replaceState(null,null,""),window.history.back()):console.log("Already at the previous page.")};if(!(t.pathname=="/"||(t==null?void 0:t.pathname)=="/login"&&(t==null?void 0:t.pathname)=="/mobile-modules")&&(s==null?void 0:s.titleBarVisibility)!==!1)return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-row  py-2 justify-center items-center pr-2 sm:pr-0",children:[e.jsx("div",{className:"flex-1 flex pl-2 text-gray-700",children:e.jsxs("span",{className:"cursor-pointer hover:text-[#122031] text-[#1A4D8C]",onClick:i,children:[e.jsx(x,{className:"inline font-semibold"}),"Back"]})}),e.jsxs("div",{className:"flex justify-right items-center text-xl font-semibold text-[#1A4D8C]",children:[e.jsx(m,{className:"inline mr-2"}),s==null?void 0:s.titleText]})]}),e.jsx("hr",{})]})}export{f as default};
