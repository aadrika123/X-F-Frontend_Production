import{l as s,q as g}from"./index-7114329c.js";function d(){const[l,c]=s.useState(""),[a,u]=s.useState(""),e=localStorage.getItem("lang"),r=async()=>{var o,n;try{const t=await g.get(`https://translator-jet.vercel.app/translate-text?text=${a}&from=en&to=${e=="hn"?"hi":e}`);c((o=t.data)==null?void 0:o.result),console.log("translated",(n=t.data)==null?void 0:n.result)}catch(t){console.log("translated",t)}};return s.useEffect(()=>{a&&r()},[e,a]),{translatedData:l,convertText:r,setTextData:u}}export{d as u};
