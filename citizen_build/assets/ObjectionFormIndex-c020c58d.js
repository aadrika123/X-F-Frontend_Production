import{r as a,j as t,b1 as F,a1 as i}from"./index-05c4e66c.js";function f(e){a.useState(1);const[u,c]=a.useState(!1),[n,l]=a.useState({}),[r,m]=a.useState(""),d=(s,o)=>{i.dismiss(),i[o](s)},x=()=>{c(!0)},b=s=>{e.submitForm(s)},g=(s,o)=>{console.log("prev Data",n),l({...n,[s]:o})};return r=="success"?t.jsx(t.Fragment,{children:" Done"}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"relative",children:t.jsx(f,{collectFormDataFun:g,submitFun:x,toastFun:d,id:e==null?void 0:e.id,closePopUp:e==null?void 0:e.closePopUp,submitForm:b})}),u&&t.jsx("div",{onClick:()=>m("success"),className:"flex items-center justify-center",children:t.jsxs("button",{type:"submit",className:"absolute bottom-40 mx-auto px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:["Submit Form ",t.jsx(F,{className:"inline text-xl"})]})})]})}export{f as default};
