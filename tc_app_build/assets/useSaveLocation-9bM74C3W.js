import{d as c,b as l,e as p,l as m}from"./index-dL_EjbSt.js";function A(){const i=c({}),a=l(),{coords:t,timestamp:d}=p();return{saveLocation:async({refId:s,actionType:o,moduleId:u})=>{var e,n;return await i.mutateAsync({api:(e=m)==null?void 0:e.saveLocation,data:{tcId:(n=a==null?void 0:a.user)==null?void 0:n.id,latitude:t==null?void 0:t.latitude,longitude:t==null?void 0:t.longitude,altitude:t==null?void 0:t.altitude,actionType:o,refId:s,moduleId:u}})}}}export{A as U};
