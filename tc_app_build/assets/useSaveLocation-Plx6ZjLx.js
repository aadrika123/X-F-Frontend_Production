import{u as c,f as l,l as m}from"./index-k8yqkKI_.js";import{a as p}from"./useCustomQuery-iWZaBnwd.js";function A(){const n=p({}),a=c(),{coords:t,timestamp:r}=l();return{saveLocation:async({refId:o,actionType:s,moduleId:u})=>{var e,i;return await n.mutateAsync({api:(e=m)==null?void 0:e.saveLocation,data:{tcId:(i=a==null?void 0:a.user)==null?void 0:i.id,latitude:t==null?void 0:t.latitude,longitude:t==null?void 0:t.longitude,altitude:t==null?void 0:t.altitude,actionType:s,refId:o,moduleId:u}})}}}export{A as U};
