import{b as c,u as l,g as p,l as m}from"./index-W1AIrKZX.js";function g(){const i=c({}),a=l(),{coords:t,timestamp:r}=p();return{saveLocation:async({refId:s,actionType:o,moduleId:u})=>{var e,n;return await i.mutateAsync({api:(e=m)==null?void 0:e.saveLocation,data:{tcId:(n=a==null?void 0:a.user)==null?void 0:n.id,latitude:t==null?void 0:t.latitude,longitude:t==null?void 0:t.longitude,altitude:t==null?void 0:t.altitude,actionType:o,refId:s,moduleId:u}})}}}export{g as U};
