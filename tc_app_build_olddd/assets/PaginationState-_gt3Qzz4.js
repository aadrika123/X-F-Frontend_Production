import{j as a}from"./index-lMcsV8Au.js";import{R as d,e as l}from"./react-HXRlOr-l.js";import{A as g,a as m}from"./ArrowRightIcon-CCiBET_f.js";const n=[{id:0,label:"5",value:5},{id:1,label:"10",value:10},{id:2,label:"20",value:20},{id:3,label:"50",value:50},{id:4,label:"100",value:100}];function f(e){const i=()=>{(e==null?void 0:e.page)!==(e==null?void 0:e.noOfPage)&&(e==null||e.setPage((e==null?void 0:e.page)+1))},c=()=>{(e==null?void 0:e.page)!==1&&(e==null||e.setPage((e==null?void 0:e.page)-1))};return d.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[e==null?void 0:e.page]),a.jsxs("div",{className:"flex items-center gap-4 mt-2 mb-2",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(l.IconButton,{className:"w-7 h-7",size:"sm",variant:"outlined",onClick:c,disabled:(e==null?void 0:e.page)===1||(e==null?void 0:e.page)===0,children:a.jsx(g,{strokeWidth:2,className:"h-3 w-3"})}),a.jsxs(l.Typography,{color:"gray",className:"font-normal text-sm",children:[a.jsx("strong",{className:"text-gray-900 text-sm",children:e==null?void 0:e.page})," of"," ",a.jsx("strong",{className:"text-gray-900",children:e==null?void 0:e.noOfPage})]}),a.jsx(l.IconButton,{className:"w-7 h-7",size:"sm",variant:"outlined",onClick:i,disabled:(e==null?void 0:e.page)===(e==null?void 0:e.noOfPage)||(e==null?void 0:e.page)===0,children:a.jsx(m,{strokeWidth:2,className:"h-3 w-3"})})]}),a.jsx("div",{className:"flex items-center gap-5",children:a.jsx("select",{className:"border border-gray-300 rounded-md text-gray-900 text-sm p-1.5",value:e==null?void 0:e.perPage,onChange:t=>e==null?void 0:e.setPerPage(parseInt(t.target.value)),children:n==null?void 0:n.map(t=>a.jsx("option",{value:t.value,children:t.label},t.id))})})]})}export{f as S};