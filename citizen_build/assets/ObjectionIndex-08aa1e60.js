import{M as m,u as O,a as v,r as a,j as t,ad as w,ae as I}from"./index-a34e0778.js";import F from"./ObjectionRectificationTable-d45f9b06.js";import M from"./ObjectionFormIndex-f27f6975.js";import _ from"./ObjectionForgery-01eb3646.js";import"./ObjectionRectificationApi-dfcde08e.js";import"./index.esm-a014bd32.js";m.setAppElement("#root");const U=e=>{O(),v();const[s,u]=a.useState(0),[b,d]=a.useState(!1),[f,l]=a.useState(""),[r,c]=a.useState(!1),[x,o]=a.useState("");a.useState("");const j=()=>{c(!1),d(!0)},n=()=>{d(!1),e.resetId()},g=i=>{console.log("app id => ",i),l(i),o("Clerical Objection"),n(),c(!0)},S=i=>{l(i),n(),c(!0),o("Assessment Objection")},h=i=>{l(i),n(),c(!0),o("Forgery Objection")},A=()=>{};return a.useEffect(()=>{console.log("modal enter obj => ",e==null?void 0:e.modalAction),((e==null?void 0:e.modalAction)==1||(e==null?void 0:e.modalAction)==2||(e==null?void 0:e.modalAction)==3)&&j()},[e==null?void 0:e.modalAction]),t.jsxs(t.Fragment,{children:[t.jsx(m,{isOpen:b,onAfterOpen:A,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center overflow-auto",contentLabel:"Example Modal",children:t.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] sm:h-[85vh] w-full relative border-2 border-indigo-500 bg-gray-50 px-6 py-4 h-max border-t-2 border-l-2 overflow-auto animate__animated animate__slideInLeft animate__faster",children:[t.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:n,children:t.jsx(w,{fontSize:10})}),(e==null?void 0:e.modalAction)==1&&t.jsx(F,{closePopUp:n,id:e==null?void 0:e.id,submitForm:g}),(e==null?void 0:e.modalAction)==2&&t.jsx("div",{children:t.jsx(M,{closePopUp:n,id:e==null?void 0:e.id,submitForm:S})}),(e==null?void 0:e.modalAction)==3&&t.jsx(_,{closePopUp:n,id:e==null?void 0:e.id,submitForm:h})]})}),t.jsx(I,{heading:x,appNo:f,openSubmit:r,refresh:()=>u(s+1)})]})};export{U as default};
