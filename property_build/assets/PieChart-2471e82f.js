import{r as e,j as d}from"./index-048babd9.js";import{C as n,A as r,p as b,a as o,P as u}from"./index-d69bcca8.js";n.register(r,b,o);function C(a){const[t,l]=e.useState({labels:a==null?void 0:a.label,datasets:[{label:"# in ₹",data:[0,0,0],backgroundColor:["#22C55E","#6366F1","#EC4899"],borderColor:["rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]});e.useEffect(()=>{l({labels:a==null?void 0:a.label,datasets:[{label:"# in ₹",data:a==null?void 0:a.data,backgroundColor:["#22C55E","#6366F1","#EC4899"],borderColor:["rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]})},[a==null?void 0:a.data]);const i={responsive:!0,animation:{duration:2e3},plugins:{legend:{position:"bottom",display:!1}}};return d.jsx(u,{data:t,options:i})}export{C as default};
