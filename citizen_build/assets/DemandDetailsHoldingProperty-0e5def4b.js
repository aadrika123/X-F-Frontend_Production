import{r as i,u as v,a as S,j as a,ai as P,S as A,$ as N,bJ as w,A as g,f as I,bG as L}from"./index-6ee3d9b0.js";import{T as E}from"./TopTabs-31365a03.js";function _(F){i.useState(!1);const[H,r]=i.useState(),[T,f]=i.useState(),[n,l]=i.useState(!1),[D,u]=i.useState(!1),{id:d}=v(),{api_getDirectHoldingDemandById:y}=I(),{api_getPropHoldingDetailsById:h}=L(),[B,m]=i.useState();S();const j=()=>{u(!1),l(!0),g.post(`${y}`,{propId:d},{timeout:6e4}).then(function(t){var c,e,o;console.log("view deamnd details at property in egov...",t==null?void 0:t.data),(c=t==null?void 0:t.data)!=null&&c.status?(r((e=t==null?void 0:t.data)==null?void 0:e.data),f(t==null?void 0:t.data)):(r((o=t==null?void 0:t.data)==null?void 0:o.data),f(t==null?void 0:t.data)),l(!1)}).catch(function(t){console.log("==2 details by id error...",t),u(!0),l(!1)})},b=()=>{u(!1),l(!0),g.post(`${h}`,{propertyId:d}).then(function(t){var c,e,o,x,s;console.log("view prop prop full details...",(c=t==null?void 0:t.data)==null?void 0:c.data),(o=(e=t==null?void 0:t.data)==null?void 0:e.data)!=null&&o.status?m((x=t==null?void 0:t.data)==null?void 0:x.data):m((s=t==null?void 0:t.data)==null?void 0:s.data),l(!1)}).catch(function(t){console.log("==2 details by id error...",t),u(!0),l(!1)})};return i.useEffect(()=>{b(),j()},[]),n?a.jsxs(a.Fragment,{children:[a.jsx(P,{}),a.jsx("div",{className:"min-h-screen"})]}):D?a.jsx(A,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):a.jsxs(a.Fragment,{children:[a.jsx(N,{position:"top-right",autoClose:2e3}),a.jsxs("div",{className:"w-full  mx-auto px-48",children:[a.jsx("div",{className:"px-10 text-center font-semibold text-2xl mt-4",children:a.jsx(E,{title:`Demand-Details And Property Details
                        `,type:"holding",id:d,safNo:"",active:"demand"})}),a.jsx(w,{id:d}),console.log("first",d)]}),a.jsx("div",{className:"w-full mt-20 h-60"})]})}export{_ as default};
