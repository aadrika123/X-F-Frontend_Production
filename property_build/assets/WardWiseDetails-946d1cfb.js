import{R as f,_ as x,e as N,r as t,a as h,u as j,j as a,P as _}from"./index-f3761e5c.js";const S=f.lazy(()=>x(()=>import("./index-f3761e5c.js").then(l=>l.cP),["assets/index-f3761e5c.js","assets/index-468fe407.css"])),P=()=>{const{wardWiseCollection:l}=_();N();const[C,n]=t.useState(!1);t.useState();const[u,i]=t.useState(null),[c,d]=t.useState(0);h("Ward Wise Details");const{id:s}=j();t.useEffect(()=>{v()},[]);const v=()=>{n(!0),i({userId:s}),d(e=>e+1)},m=[{Header:"S.No.",Cell:({row:e})=>a.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total No of Form(s)",accessor:"total",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return a.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}];return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mt-4"}),u!=null&&a.jsx(S,{type:"old",api:l,columns:m,requestBody:u,changeData:c}),a.jsx("div",{className:"h-[20vh]"})]})};export{P as default};
