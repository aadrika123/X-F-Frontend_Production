import{R as g,_,e as A,r as a,a as D,u as W,j as t,P as y,A as C,b}from"./index-978ed1c2.js";const E=g.lazy(()=>_(()=>import("./index-978ed1c2.js").then(i=>i.dq),["assets/index-978ed1c2.js","assets/index-074db515.css"])),q=()=>{const{wardWiseCollection:i}=y();A();const[L,f]=a.useState(!1),[P,m]=a.useState(),[u,v]=a.useState(null),[n,x]=a.useState(null),[h,N]=a.useState(0);a.useState(0),D("Ward Wise Details");const{id:c}=W();a.useEffect(()=>{o()},[]);const o=()=>{f(!0),v({userId:c}),N(e=>e+1)},j=()=>{let e={userId:c};C.post(i,e,b()).then(function(l){var d,s;console.log("fetch",(s=(d=l==null?void 0:l.data)==null?void 0:d.data)==null?void 0:s.totalSaf),x(l.data.data)}).catch(function(l){console.log("errorrr.... ",l)})};a.useEffect(()=>{j()},[]);const S=[{Header:"S.No.",Cell:({row:e})=>t.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return t.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total No of Form(s)",accessor:"total",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return t.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}];return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4"}),t.jsxs("div",{className:"absolute top-11 right-16 mt-16 text-gray-600",children:["Total Forms : ",t.jsxs("span",{className:"font-semibold",children:[" ",n==null?void 0:n.totalSaf]})]}),u!=null&&t.jsx(E,{type:"old",allData:e=>m(e),api:i,columns:S,requestBody:u,changeData:h}),t.jsx("div",{className:"h-[20vh]"})]})};export{q as default};
