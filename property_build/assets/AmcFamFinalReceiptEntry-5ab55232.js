import{r as e,u as p,J as x,j as a,W as g,b as h,a4 as y}from"./index-0f9f451c.js";import{R as j}from"./index-8c70f477.js";import{A}from"./AmcFamReceipt-aff6507e.js";import{P}from"./Print-b90f1f3d.js";import"./QrCode-f35e3d16.js";import"./index-e1a3bf57.js";import"./createSvgIcon-06fe645b.js";import"./useThemeProps-e4544d43.js";function D(){const o=e.useRef(),{propId:s}=p(),{t:n}=x(),{api_akolaFam:c}=y(),[R,r]=e.useState(!1),[l,f]=e.useState([]),m=()=>{r(!0);let u=c,d={safId:s,paymentMode:"CASH"};g.post(u,d,h()).then(function(t){var i;console.log("response after pushing saf data",t.data.data),(i=t==null?void 0:t.data)!=null&&i.status?(f(t.data.data),r(!1)):(setloaderStatus(!1),activateBottomErrorCard(!0,"Error occured in submitting form. Please try again later."))}).catch(function(t){console.log("error in submitting saf form ","error"),r(!1)})};return e.useEffect(()=>{m()},[]),a.jsx("div",{className:"container",children:a.jsxs("div",{children:[a.jsx(j,{trigger:()=>a.jsxs("button",{id:"clickButton",className:"bg-teal-500  hover:bg-teal-800 text-white px-3 py-1.5 rounded-lg text-xs font-mono",children:[a.jsx(P,{})," Print !"]}),content:()=>o.current,copyStyles:!0}),a.jsx(A,{ref:o,t:n,fullData:l,propId:s})]})})}export{D as default};
