import{e as s,j as t}from"./index-tJbU7ayB.js";import"./router-vSHQYlWC.js";import"./reactQuery-xwoMMF6K.js";import"./axios-lPgvryBG.js";import"./tailwind-nPCoKmcy.js";import"./reactIcons-jqXmw8S_.js";import"./headlessui-kWR29u24.js";function o(){const{coords:e,timestamp:i}=s();return t.jsx("div",{className:"flex flex-col items-center justify-center h-96 bg-gray-100",children:t.jsxs("div",{className:"flex flex-col items-center justify-center",children:[t.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"GeoLocationChecker"}),t.jsxs("p",{className:" text-red-900",children:["Latitude: ",e==null?void 0:e.latitude]}),t.jsxs("p",{className:" text-red-900",children:["Longitude: ",e==null?void 0:e.longitude]}),t.jsxs("p",{className:" text-red-900",children:["Altitude: ",e==null?void 0:e.altitude]}),t.jsxs("p",{className:" text-red-900",children:["Timestamp: ",new Date(i).toLocaleString()]})]})})}export{o as default};