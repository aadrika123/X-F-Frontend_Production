import{c,e as d,j as e,i as x,H as m}from"./index-69AkISz-.js";import{r as o}from"./router-vSHQYlWC.js";function f(t=""){const s=c();return o.useEffect(()=>{s==null||s.setTitle(t)},[t]),null}const h=o.forwardRef(({children:t,title:s="",meta:n,...l},i)=>{f(s);const{isGeolocationEnabled:a}=d(),r=localStorage.getItem("isGeoEnable");return o.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[s]),!a&&r=="false"?e.jsx(e.Fragment,{children:e.jsx("div",{className:"px-16 flex text-center font-semibold mt-36 justify-center items-center",children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"text-4xl font-semibold text-red-900",children:e.jsx(x,{src:"/location-off.png",alt:"location",width:"100"})}),e.jsxs("h1",{className:"text-base font-semibold text-red-900",children:["Geolocation is not enabled! Please enable to use this app"," "]}),e.jsx("small",{className:"text-xs text-center font-semibold mt-10",children:"If location permission is not allowed then press the button below and go to settings and allow the permission"}),e.jsx("div",{className:"mt-10",children:e.jsx("button",{onClick:()=>{window.location.reload()},className:"bg-red-500 text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50",children:"Reload"})})]})})}):e.jsxs(e.Fragment,{children:[e.jsxs(m,{children:[e.jsx("title",{children:"".concat(s," | Akola Municipal Corporation")}),n]}),e.jsx("div",{ref:i,...l,children:t})]})}),b=h;export{b as P,f as U};
