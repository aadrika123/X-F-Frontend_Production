import{r as e,j as i}from"./index-13160f97.js";import{C as n,A as b,p as o,a as u,P as g}from"./index-a295f186.js";n.register(b,o,u);function s(a){const[t,l]=e.useState({labels:a==null?void 0:a.label,datasets:[{label:"# in ₹",data:[0,0,0],backgroundColor:["#22C55E","#6366F1","#EC4899"],borderColor:["rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]});console.log("moudle wise data data...",a==null?void 0:a.data),e.useEffect(()=>{l({labels:a==null?void 0:a.label,datasets:[{label:"# in ₹",data:a==null?void 0:a.data,backgroundColor:["#22C55E","#6366F1","#EC4899"],borderColor:["rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]})},[a==null?void 0:a.data]);const d={responsive:!0,animation:{duration:2e3},plugins:{legend:{position:"bottom",display:!1}}};return i.jsx(g,{data:t,options:d})}export{s as default};
