import{b as j,p,j as s,I as i}from"./index-JPdk8MYx.js";import{u as f}from"./router-vSHQYlWC.js";import{r as N}from"./tailwind-nPCoKmcy.js";import{P as m}from"./index-ZOEHJXjh.js";import{h as t}from"./moment-UBOc2Xni.js";import"./reactQuery-xwoMMF6K.js";import"./axios-lPgvryBG.js";import"./reactIcons-jqXmw8S_.js";import"./headlessui-kWR29u24.js";function Y(){var n,r,o,l,c,x;const{id:d}=f(),e=j({api:(n=p)==null?void 0:n.safDetails,config:{applicationId:d},key:"safDetails",value:[d],options:{enabled:!!d}});return e!=null&&e.isLoading?s.jsx("div",{className:"flex justify-center items-center h-96 mt-28",children:s.jsx(i,{})}):s.jsx(m,{title:"Level Comment",children:s.jsx("div",{className:"p-4",children:((l=(o=(r=e==null?void 0:e.data)==null?void 0:r.data)==null?void 0:o.levelComment)==null?void 0:l.length)>0?s.jsx(s.Fragment,{children:[...((x=(c=e==null?void 0:e.data)==null?void 0:c.data)==null?void 0:x.levelComment)||[]].reverse().map((a,h)=>s.jsx(N.Card,{className:"p-4 mt-3",children:s.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[s.jsx("div",{children:s.jsxs("h1",{children:[s.jsx("span",{className:"text-xs font-semibold",children:"Name-: "}),s.jsx("span",{className:"text-xs font-semibold",children:a==null?void 0:a.name})]})}),s.jsx("div",{children:s.jsxs("h1",{children:[s.jsxs("span",{className:"text-xs font-semibold",children:["Commented by-:"," "]}),s.jsx("span",{className:"text-xs font-semibold",children:(a==null?void 0:a.commentedBy)=="SENIOR LIPIK"?"NAGAR RACHANA":a==null?void 0:a.commentedBy})]})}),s.jsx("div",{children:s.jsxs("h1",{children:[s.jsxs("span",{className:"text-xs font-semibold",children:["Forwarded to-:"," "]}),s.jsx("span",{className:"text-xs font-semibold",children:(a==null?void 0:a.forwarded_to)=="SENIOR LIPIK"?"NAGAR RACHANA":a==null?void 0:a.forwarded_to})]})}),s.jsx("div",{children:s.jsxs("h1",{children:[s.jsxs("span",{className:"text-xs font-semibold",children:["Forward Date-:"," "]}),s.jsx("span",{className:"text-xs font-semibold",children:(a==null?void 0:a.forward_date)&&s.jsxs(s.Fragment,{children:[t(a==null?void 0:a.forward_date).format("DD-MM-YYYY")||"NA"," ","- ",a==null?void 0:a.forward_time]})||"NA"})]})}),s.jsx("div",{children:s.jsxs("h1",{children:[s.jsxs("span",{className:"text-xs font-semibold",children:["Received date-:"," "]}),s.jsx("span",{className:"text-xs font-semibold",children:(a==null?void 0:a.track_date)&&(t(a==null?void 0:a.track_date).format("DD-MM-YYYY HH:mm:ss")||"NA")||"NA"})]})}),s.jsx("div",{children:s.jsxs("h1",{children:[s.jsxs("span",{className:"text-xs font-semibold",children:["Comment-:"," "]}),s.jsx("span",{className:"text-xs font-semibold",children:a==null?void 0:a.message})]})})]})},h+1))}):s.jsx("div",{className:"flex justify-center items-center h-96 mt-28",children:s.jsx("h1",{className:"text-lg font-semibold text-gray-600",children:"No Comment Found"})})})})}export{Y as default};
