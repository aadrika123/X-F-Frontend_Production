import{j as i}from"./index-r6pkVfbe.js";import{d as s}from"./router-5yjtezO8.js";import{S as l,V as x}from"./VerifyOtp-zR5g6XdE.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./tailwind-6U-kYQAu.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./formik.esm-BnzrXcQN.js";import"./index.esm-uHa2PMRf.js";import"./FormProvider-kGPBuDhT.js";import"./TextField-WLFSaEKU.js";import"./customInputValidation-jhKsg103.js";import"./LoaderButton-MYONtpkO.js";import"./TranslateField-BH3bQnqu.js";import"./useCountDown-_X0tCZ2B.js";function y(){const[r,p]=s.useState(0),[o,e]=s.useState({email:"",otp:"",mobile:""}),a=t=>{console.log(t)},m=(t,c=!1)=>{if(e({...o,...t}),c){a(t);return}p(r+1)},n=t=>{e({...o,...t}),p(r-1)};return i.jsx("div",{children:{0:i.jsx(l,{next:m,data:o,setData:e}),1:i.jsx(x,{next:m,prev:n,data:o,setData:e})}[r]})}export{y as default};
