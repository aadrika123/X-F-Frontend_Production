import{R as r}from"./index-W1AIrKZX.js";const i=t=>{const s=t.split(","),e=s[0].indexOf("base64")>=0?atob(s[1]):decodeURI(s[1]),a=s[0].split(":")[1].split(";")[0],n=new Uint8Array(e==null?void 0:e.length);for(let o=0;o<(e==null?void 0:e.length);o++)n[o]=e==null?void 0:e.charCodeAt(o);return new Blob([n],{type:a})},c=async t=>new Promise(e=>{r.imageFileResizer(t,500,500,"JPEG",60,0,a=>{e(a)},"base64")}).then(e=>i(e));export{c as r};
