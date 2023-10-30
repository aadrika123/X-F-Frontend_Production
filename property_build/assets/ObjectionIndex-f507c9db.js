import{g as p,k as S,bm as O,a as k,r as o,j as s,bn as A,bo as c,bp as F,bq as C,br as M}from"./index-bfae062f.js";import z from"./ObjectionRectificationTable-e430440c.js";import E from"./ObjectionFormIndex-b8485549.js";import I from"./ObjectionForgery-8929ba0c.js";import"./ObjectionRectificationApi-2763afdc.js";import"./EmptyDetailsIllustration-ee4ff2a3.js";import"./index.esm-1e8af25d.js";import"./formControlState-a1fb9590.js";import"./Switch-6316db4c.js";import"./reactjs-popup.esm-49f20e8a.js";const P="/assets/assessment-27ec3068.png",T="/assets/objection-87bae01f.png",B="/assets/forgery-047dd381.png";p.setAppElement("#root");const Q=()=>{S("Objection");const{id:m}=O(),x=k(),[n,u]=o.useState(0),[h,d]=o.useState(!1),[b,a]=o.useState(""),[j,r]=o.useState(!1),[f,i]=o.useState(""),g=()=>{d(!0),r(!1)},e=()=>d(!1),v=()=>{},l=t=>{u(t),g()},y=t=>{console.log("app id => ",t),a(t),i("Clerical Objection"),e(),r(!0)},N=t=>{a(t),e(),r(!0),i("Assessment Objection")},w=t=>{a(t),e(),r(!0),i("Forgery Objection")};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"px-6 mt-[2rem] flex flex-wrap flex-col gap-4 ",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex flex-row justify-evenly items-center space-x-2 w-[10vw] my-4 md:mx-8 mx-10 poppins",children:[s.jsx("span",{className:"font-extrabold text-[30px]",children:s.jsx(A,{})}),s.jsx("span",{className:"text-lg font-bold uppercase",children:"Objections"})]}),s.jsxs("p",{className:"text-xs mb-2 md:mx-2 mx-10 poppins italic  hover:text-sm cursor-pointer hover:tracking-wide transition-all duration-300",children:[s.jsx("b",{children:"Objection"})," is for helping you in any issues related to Property."]})]}),s.jsxs("div",{className:"flex flex-row flex-wrap gap-4 w-full poppins",children:[s.jsxs("div",{className:"md:w-[30%] rounded-sm shadow-sm bg-zinc-50 hover:scale-105 transition-all duration-300 hover:shadow-md",children:[s.jsx("div",{className:"bg-gradient-to-r from-blue-200 to-blue-100 h-[25vh] flex items-center rounded-sm",children:s.jsx("img",{src:T,alt:"",srcset:"",className:"rounded-sm hover:scale-110 transition-all duration-300"})}),s.jsx("div",{className:"poppins font-semibold px-4 py-1.5",children:"Clerical Mistake"}),s.jsxs("div",{className:"poppins text-xs px-4 py-1.5",children:["This ",s.jsx("span",{className:"font-semibold",children:"Clerical Mistake"})," is for correction of personal details."]}),s.jsx("div",{className:"px-4 py-1.5 poppins",onClick:()=>l(1),children:s.jsxs("button",{className:"bg-blue-100 text-blue-600 w-full flex gap-x-1 items-center justify-center py-1.5 rounded-sm text-sm transition-all duration-300 hover:gap-x-4 ",children:[s.jsx("span",{children:"Apply"})," ",s.jsx("span",{children:s.jsx(c,{})})]})})]}),s.jsxs("div",{className:"md:w-[30%] rounded-sm shadow-sm bg-zinc-50 hover:scale-105 transition-all duration-300 hover:shadow-md",children:[s.jsx("div",{className:"bg-gradient-to-r from-blue-200 to-blue-100 h-[25vh] flex flex-row justify-center items-center rounded-sm",children:s.jsx("img",{src:P,alt:"",srcset:"",className:" rounded-sm hover:scale-110 transition-all duration-300"})}),s.jsx("div",{className:"poppins font-semibold px-4 py-1.5",children:"Assessment Error"}),s.jsxs("div",{className:"poppins text-xs px-4 py-1.5",children:["This ",s.jsx("span",{className:"font-semibold",children:"Assessment Error"})," is for correction of assessment or re-assessment of property."]}),s.jsx("div",{className:"px-4 py-1.5 poppins",onClick:()=>l(2),children:s.jsxs("button",{className:"bg-blue-100 text-blue-600 w-full flex gap-x-1 items-center justify-center py-1.5 rounded-sm text-sm transition-all duration-300 hover:gap-x-4 ",children:[s.jsx("span",{children:"Apply"})," ",s.jsx("span",{children:s.jsx(c,{})})]})})]}),s.jsxs("div",{className:"md:w-[30%] rounded-sm shadow-sm bg-zinc-50 hover:scale-105 transition-all duration-300 hover:shadow-md",children:[s.jsx("div",{className:"bg-gradient-to-r from-blue-200 to-blue-100 h-[25vh] flex items-center rounded-sm",children:s.jsx("img",{src:B,alt:"",srcset:"",className:"rounded-sm hover:scale-110 transition-all duration-300"})}),s.jsx("div",{className:"poppins font-semibold px-4 py-1.5",children:"Forgery"}),s.jsxs("div",{className:"poppins text-xs px-4 py-1.5",children:["This ",s.jsx("span",{className:"font-semibold",children:"Forgery"})," is for issuing complaint that someone has taken your property from fraud or by forgery."]}),s.jsx("div",{className:"px-4 py-1.5 poppins",onClick:()=>l(3),children:s.jsxs("button",{className:"bg-blue-100 text-blue-600 w-full flex gap-x-1 items-center justify-center py-1.5 rounded-sm text-sm transition-all duration-300 hover:gap-x-4 ",children:[s.jsx("span",{children:"Apply"})," ",s.jsx("span",{children:s.jsx(c,{})})]})})]})]}),s.jsxs("div",{onClick:()=>x(`/holdingPropertyDetails/${m}`),className:"bg-blue-200 px-4 py-1.5 flex gap-x-1 mt-6 items-center justify-center rounded-sm transition-all duration-300 w-max cursor-pointer text-blue-600 shadow-md hover:gap-x-3 hover:bg-blue-300 text-xs ",children:[s.jsx("span",{children:s.jsx(F,{})})," ",s.jsx("span",{children:"Back"})]})]}),s.jsx(p,{isOpen:h,onAfterOpen:v,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center sm:ml-10 overflow-auto",contentLabel:"Example Modal",children:s.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] mt-16 sm:h-[85vh] w-full relative border-2 border-indigo-500 bg-gray-50 px-6 py-4 h-[88vh] border-t-2 border-l-2 overflow-auto",children:[s.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:e,children:s.jsx(C,{fontSize:10})}),n==1&&s.jsx(z,{closePopUp:e,submitForm:y}),n==2&&s.jsx("div",{className:"h-[80vh]",children:s.jsx(E,{closePopUp:e,submitForm:N})}),n==3&&s.jsx(I,{closePopUp:e,submitForm:w})]})}),s.jsx(M,{heading:f,appNo:b,openSubmit:j,navigation:e})]})};export{Q as default};
