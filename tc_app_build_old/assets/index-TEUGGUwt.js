import{u as c,b as u,c as p,Q as m,j as t,d as x,e as g}from"./index-96TN4Nrp.js";import{L as h}from"./router-Gz5zDwiC.js";import{u as f}from"./formik.esm--kcEIyis.js";import{c as j,a as d}from"./index.esm-R3GYZtbq.js";import{F as b}from"./FormProvider-drLJnCtF.js";import{T as w}from"./TextField-QWh9rUR8.js";import{L}from"./LoaderButton-BHdPwb_i.js";import{P as v}from"./PasswordField-gLt9FhqG.js";import"./index-iyheVW_q.js";import"./VerifyOtp-xHtD5sK0.js";import"./reactQuery-jbZnqRwH.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-lPgvryBG.js";import"./tailwind-I_6OOYa1.js";import"./reactIcons-3AhG4mX-.js";import"./headlessui-KvrvKpJj.js";import"./customInputValidation-8tSUGdUh.js";import"./useCountDown-fFVZB0yz.js";const E=j().shape({email:d().email("Invalid email").required("Email is required"),password:d().required("Password is required")});function F(){const s=c(),{mutateAsync:n}=u({}),a=f({initialValues:{email:"",password:""},validationSchema:E,onSubmit:async(l,{})=>{var r,o,e;try{const i=await n({api:p.login,data:l});((r=i==null?void 0:i.data)==null?void 0:r.status)===!0?(s==null||s.login(i),m.success((o=i==null?void 0:i.data)==null?void 0:o.message)):m.error((e=i==null?void 0:i.data)==null?void 0:e.message)}catch(i){console.log(i)}}});return t.jsxs("div",{children:[t.jsx("h2",{className:" font-semibold mt-8 mb-4",children:"Login with Email Address"}),t.jsxs(b,{formik:a,children:[t.jsx(w,{label:"Email",name:"email",type:"email",formik:a,placeholder:"Enter your register email id"}),t.jsx(v,{label:"Password",name:"password",formik:a}),t.jsx("div",{className:"text-center mt-8",children:t.jsx(L,{type:a.isSubmitting?"button":"submit",disabled:a.isSubmitting,loading:a.isSubmitting,children:"Login"})}),t.jsx("div",{className:"text-center mt-4",children:t.jsx(h,{to:"/auth/forgot-password",className:"text-[#5846BE]",children:"Forgot Password?"})})]})]})}function H(){return x({updateAction:g}),t.jsx("div",{children:t.jsx(F,{})})}export{H as default};