import{M as m,u as O,a as v,r as a,j as t,aa as w,ab as I}from"./index-5738b2d0.js";import F from"./ObjectionRectificationTable-9ba162cc.js";import M from"./ObjectionFormIndex-3d8d9691.js";import _ from"./ObjectionForgery-8306e890.js";import"./ObjectionRectificationApi-c8b183ed.js";import"./index.esm-c5a0c411.js";import"./OtpCard-f3dfbdca.js";m.setAppElement("#root");const k=e=>{O(),v();const[s,u]=a.useState(0),[b,d]=a.useState(!1),[f,c]=a.useState(""),[r,o]=a.useState(!1),[x,l]=a.useState("");a.useState("");const j=()=>{o(!1),d(!0)},n=()=>{d(!1),e.resetId()},g=i=>{console.log("app id => ",i),c(i),l("Clerical Objection"),n(),o(!0)},S=i=>{c(i),n(),o(!0),l("Assessment Objection")},h=i=>{c(i),n(),o(!0),l("Forgery Objection")},A=()=>{};return a.useEffect(()=>{console.log("modal enter obj => ",e==null?void 0:e.modalAction),((e==null?void 0:e.modalAction)==1||(e==null?void 0:e.modalAction)==2||(e==null?void 0:e.modalAction)==3)&&j()},[e==null?void 0:e.modalAction]),t.jsxs(t.Fragment,{children:[t.jsx(m,{isOpen:b,onAfterOpen:A,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center overflow-auto",contentLabel:"Example Modal",children:t.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] sm:h-[85vh] w-full relative border-2 border-indigo-500 bg-gray-50 px-6 py-4 h-max border-t-2 border-l-2 overflow-auto animate__animated animate__slideInLeft animate__faster",children:[t.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:n,children:t.jsx(w,{fontSize:10})}),(e==null?void 0:e.modalAction)==1&&t.jsx(F,{closePopUp:n,id:e==null?void 0:e.id,submitForm:g}),(e==null?void 0:e.modalAction)==2&&t.jsx("div",{children:t.jsx(M,{closePopUp:n,id:e==null?void 0:e.id,submitForm:S})}),(e==null?void 0:e.modalAction)==3&&t.jsx(_,{closePopUp:n,id:e==null?void 0:e.id,submitForm:h})]})}),t.jsx(I,{heading:x,appNo:f,openSubmit:r,refresh:()=>u(s+1)})]})};export{k as default};
