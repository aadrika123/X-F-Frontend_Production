import{e as d,b as m,j as e}from"./index-kwyYuGuR.js";import{h as x}from"./router-5yjtezO8.js";import{r as n}from"./tailwind-6U-kYQAu.js";import{A as p,M as g,a as h}from"./MarkerWithInfo-isNVYrFo.js";import{P as f}from"./index-tU9B2LIK.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";const j=20.7122002,u=77.0102968,$=()=>{const[s]=x(),t=s.get("name"),i=s.get("lat"),c=s.get("lng"),a=s.get("address"),r=s.get("holding-no"),o=s.get("property-no"),{coords:N,isGeolocationEnabled:l}=d();return m(),e.jsx(f,{title:"View Map",children:e.jsxs("div",{className:"p-2",children:[e.jsx(n.Card,{className:"w-full",children:e.jsx(n.CardBody,{children:e.jsx("div",{className:"grid grid-cols-2 gap-2",children:e.jsxs("div",{className:"col-span-2 justify-between flex",children:[e.jsx("h1",{className:"text-sm font-bold text-gray-600",children:"Geo Enabled Status:"}),e.jsx("h1",{className:"text-sm font-bold \n                ".concat(l?"text-green-500":"text-red-500","\n                "),children:l?"Yes":"No"})]})})})}),e.jsx("div",{className:"border-t border-gray-300 my-4"}),l?e.jsx(p,{apiKey:"AIzaSyC0AArVHmqXGAxgWcljuOD_fvY5eDXfwS0",children:e.jsx(g,{className:"w-full h-screen",defaultCenter:{lat:j,lng:u},defaultZoom:10,gestureHandling:"greedy",disableDefaultUI:!1,children:e.jsx(h,{name:t!=null?t:"NA",lat:parseFloat(i),lng:parseFloat(c),popOver:"This is ".concat(t!=null?t:"NA"," location"),title:"Holding no-:".concat(r!=null?r:"NA"," \n Property no-:").concat(o!=null?o:"NA"),subTitle:"Address-:".concat(a!=null?a:"NA")})})}):e.jsx("div",{className:"text-red-500 text-center",children:e.jsx("h1",{children:"Geo Location is disabled"})})]})})};export{$ as default};
