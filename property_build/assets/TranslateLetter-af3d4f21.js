import{r as l,j as a,ac as y}from"./index-0259a4f9.js";const f=()=>{const[p,o]=l.useState(""),[n,i]=l.useState([]),[j,c]=l.useState(!1),[m,h]=l.useState(null),[d,r]=l.useState([]),u=async t=>{var s,x,g;try{c(!0),h(null);const e=await y.get(`https://translator-jet.vercel.app/translate-text?text=${t}&from=en&to=hi`);(s=e==null?void 0:e.data)!=null&&s.result&&Array.isArray(e.data.result)?(i(e.data.result),r(e.data.result)):(i([(x=e==null?void 0:e.data)==null?void 0:x.result]),r([(g=e==null?void 0:e.data)==null?void 0:g.result]))}catch{h("Failed to translate the name. Please try again.")}finally{c(!1)}},b=t=>{const s=t.target.value;o(s),s.length>2?u(s):(r([]),i([]))},N=t=>{o(t),r([]),u(t)};return a.jsxs("div",{className:"p-4 max-w-md mx-auto",children:[a.jsx("h2",{className:"text-xl font-bold mb-4",children:"English to Hindi Name Translator"}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"name-input",className:"block mb-2",children:"Enter Name (English)"}),a.jsx("input",{id:"name-input",type:"text",value:p,onChange:b,className:"w-full p-2 border rounded",placeholder:"Type a name (e.g., Akshay)"})]}),j&&a.jsx("div",{children:"Loading..."}),m&&a.jsx("div",{className:"text-red-500",children:m}),Array.isArray(d)&&d.length>0&&a.jsx("div",{className:"border mt-2 rounded p-2 bg-white shadow-md",children:d.map((t,s)=>a.jsx("div",{className:"p-2 cursor-pointer hover:bg-gray-200",onClick:()=>N(t),children:t},s))}),Array.isArray(n)&&n.length>0&&a.jsxs("div",{children:[a.jsx("label",{className:"block mb-2",children:"Possible Hindi Translations"}),a.jsx("div",{className:"p-2 border rounded bg-gray-100",children:a.jsx("ul",{children:n.map((t,s)=>a.jsx("li",{className:"p-1",children:t},s))})})]})]})};export{f as default};