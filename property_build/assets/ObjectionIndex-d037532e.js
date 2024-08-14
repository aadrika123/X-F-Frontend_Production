import{ag as p,a as S,u as O,e as A,r,j as s,h as c,dj as k}from"./index-7885ada7.js";import{b as F}from"./index.esm-9074603f.js";/* empty css             */import C from"./ObjectionRectificationTable-21f3b939.js";import I from"./ObjectionFormIndex-e986f8c9.js";import M from"./ObjectionForgery-015968aa.js";import{b as z}from"./index.esm-94d36750.js";import{A as E}from"./ApplicationSubmitScreen-36f3cbf9.js";import"./ObjectionRectificationApi-869febd7.js";import"./EmptyDetailsIllustration-f42e05ed.js";import"./notfound1-b58e95b5.js";import"./index.esm-eb724f11.js";import"./useFormControl-29cacc7e.js";import"./formControlState-a1fb9590.js";import"./Typography-fc1873bf.js";import"./useTimeout-765a8741.js";import"./Switch-a98d9eac.js";import"./SwitchBase-fbf2a2d5.js";import"./reactjs-popup.esm-57205932.js";import"./check-f4ca1ac8.js";const P="/assets/assessment-27ec3068.png",T="/assets/objection-87bae01f.png",B="/assets/forgery-047dd381.png";p.setAppElement("#root");const rs=()=>{S("Objection");const{id:m}=O(),x=A(),[n,u]=r.useState(0),[h,d]=r.useState(!1),[j,i]=r.useState(""),[b,o]=r.useState(!1),[f,a]=r.useState(""),g=()=>{d(!0),o(!1)},e=()=>d(!1),v=()=>{},l=t=>{u(t),g()},y=t=>{i(t),a("Clerical Objection"),e(),o(!0)},N=t=>{i(t),e(),o(!0),a("Assessment Objection")},w=t=>{i(t),e(),o(!0),a("Forgery Objection")};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"px-6 mt-[2rem] flex flex-wrap flex-col gap-4 ",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"flex flex-row justify-evenly items-center space-x-2 w-[10vw] my-4 md:mx-8 mx-10 poppins",children:[s.jsx("span",{className:"font-extrabold text-[30px]",children:s.jsx(F,{})}),s.jsx("span",{className:"text-lg font-bold uppercase",children:"Objections"})]}),s.jsxs("p",{className:"text-xs mb-2 md:mx-2 mx-10 poppins italic  hover:text-sm cursor-pointer hover:tracking-wide transition-all duration-300",children:[s.jsx("b",{children:"Objection"})," is for helping you in any issues related to Property."]})]}),s.jsxs("div",{className:"flex flex-row flex-wrap gap-4 w-full poppins",children:[s.jsxs("div",{className:"md:w-[30%] rounded-sm shadow-sm bg-zinc-50 hover:scale-105 transition-all duration-300 hover:shadow-md",children:[s.jsx("div",{className:"bg-gradient-to-r from-blue-200 to-blue-100 h-[25vh] flex items-center rounded-sm",children:s.jsx("img",{src:T,alt:"",srcset:"",className:"rounded-sm hover:scale-110 transition-all duration-300"})}),s.jsx("div",{className:"poppins font-semibold px-4 py-1.5",children:"Clerical Mistake"}),s.jsxs("div",{className:"poppins text-xs px-4 py-1.5",children:["This ",s.jsx("span",{className:"font-semibold",children:"Clerical Mistake"})," is for correction of personal details."]}),s.jsx("div",{className:"px-4 py-1.5 poppins",onClick:()=>l(1),children:s.jsxs("button",{className:"bg-blue-100 text-blue-600 w-full flex gap-x-1 items-center justify-center py-1.5 rounded-sm text-sm transition-all duration-300 hover:gap-x-4 ",children:[s.jsx("span",{children:"Apply"})," ",s.jsx("span",{children:s.jsx(c,{})})]})})]}),s.jsxs("div",{className:"md:w-[30%] rounded-sm shadow-sm bg-zinc-50 hover:scale-105 transition-all duration-300 hover:shadow-md",children:[s.jsx("div",{className:"bg-gradient-to-r from-blue-200 to-blue-100 h-[25vh] flex flex-row justify-center items-center rounded-sm",children:s.jsx("img",{src:P,alt:"",srcset:"",className:" rounded-sm hover:scale-110 transition-all duration-300"})}),s.jsx("div",{className:"poppins font-semibold px-4 py-1.5",children:"Assessment Error"}),s.jsxs("div",{className:"poppins text-xs px-4 py-1.5",children:["This ",s.jsx("span",{className:"font-semibold",children:"Assessment Error"})," is for correction of assessment or re-assessment of property."]}),s.jsx("div",{className:"px-4 py-1.5 poppins",onClick:()=>l(2),children:s.jsxs("button",{className:"bg-blue-100 text-blue-600 w-full flex gap-x-1 items-center justify-center py-1.5 rounded-sm text-sm transition-all duration-300 hover:gap-x-4 ",children:[s.jsx("span",{children:"Apply"})," ",s.jsx("span",{children:s.jsx(c,{})})]})})]}),s.jsxs("div",{className:"md:w-[30%] rounded-sm shadow-sm bg-zinc-50 hover:scale-105 transition-all duration-300 hover:shadow-md",children:[s.jsx("div",{className:"bg-gradient-to-r from-blue-200 to-blue-100 h-[25vh] flex items-center rounded-sm",children:s.jsx("img",{src:B,alt:"",srcset:"",className:"rounded-sm hover:scale-110 transition-all duration-300"})}),s.jsx("div",{className:"poppins font-semibold px-4 py-1.5",children:"Forgery"}),s.jsxs("div",{className:"poppins text-xs px-4 py-1.5",children:["This ",s.jsx("span",{className:"font-semibold",children:"Forgery"})," is for issuing complaint that someone has taken your property from fraud or by forgery."]}),s.jsx("div",{className:"px-4 py-1.5 poppins",onClick:()=>l(3),children:s.jsxs("button",{className:"bg-blue-100 text-blue-600 w-full flex gap-x-1 items-center justify-center py-1.5 rounded-sm text-sm transition-all duration-300 hover:gap-x-4 ",children:[s.jsx("span",{children:"Apply"})," ",s.jsx("span",{children:s.jsx(c,{})})]})})]})]}),s.jsxs("div",{onClick:()=>x(`/holdingPropertyDetails/${m}`),className:"bg-blue-200 px-4 py-1.5 flex gap-x-1 mt-6 items-center justify-center rounded-sm transition-all duration-300 w-max cursor-pointer text-blue-600 shadow-md hover:gap-x-3 hover:bg-blue-300 text-xs ",children:[s.jsx("span",{children:s.jsx(k,{})})," ",s.jsx("span",{children:"Back"})]})]}),s.jsx(p,{isOpen:h,onAfterOpen:v,className:"z-20 h-screen w-screen backdrop-blur-sm flex flex-row justify-center items-center sm:ml-10 overflow-auto",contentLabel:"Example Modal",children:s.jsxs("div",{class:" rounded-lg shadow-lg shadow-indigo-300 md:w-[73%] mt-16 sm:h-[85vh] w-full relative border-2 border-indigo-500 bg-gray-50 px-6 py-4 h-[88vh] border-t-2 border-l-2 overflow-auto",children:[s.jsx("div",{className:"absolute top-2 z-10 bg-red-200 hover:bg-red-300 right-2 rounded-full p-2 cursor-pointer",onClick:e,children:s.jsx(z,{fontSize:10})}),n==1&&s.jsx(C,{closePopUp:e,submitForm:y}),n==2&&s.jsx("div",{className:"h-[80vh]",children:s.jsx(I,{closePopUp:e,submitForm:N})}),n==3&&s.jsx(M,{closePopUp:e,submitForm:w})]})}),s.jsx(E,{heading:f,appNo:j,openSubmit:b,navigation:e})]})};export{rs as default};
