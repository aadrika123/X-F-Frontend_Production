import{e as N,u as v,m as z,Q as p,j as e,r as b,f as O,R as y}from"./index-zaCdDO5V.js";import{P as q}from"./index-IiE-jXtg.js";import{u as P}from"./formik.esm-cb9hUQFj.js";import{c as k,a as j,b as A}from"./index.esm-FKayUvIM.js";import{F as C}from"./FormProvider-qZPxkVEg.js";import{T as g}from"./TextField-fCA0GE8x.js";import{T as B}from"./TextAreaField-HG_VBbL7.js";import"./index-hMp1sxda.js";const M=k().shape({name:j().required("Name is required"),mobile:j().required("Mobile is required"),address:j().required("Address is required")});function S({open:i,setOpen:w}){var t,x,l,o,m,c,h;const{mutateAsync:n}=N({}),d=()=>w(!i),s=v(),r=P({enableReinitialize:!0,initialValues:{id:((t=s==null?void 0:s.user)==null?void 0:t.id)||"",email:((x=s==null?void 0:s.user)==null?void 0:x.email)||"",name:((l=s==null?void 0:s.user)==null?void 0:l.name)||"",mobile:((o=s==null?void 0:s.user)==null?void 0:o.mobile)||"",dateOfBirth:((m=s==null?void 0:s.user)==null?void 0:m.dateOfBirth)||"",address:((c=s==null?void 0:s.user)==null?void 0:c.address)||""},validationSchema:M,onSubmit:async(a,{resetForm:u})=>{try{const f=await n({api:z.userUpdateProfile,data:a});f.data.status?(p.success(f.data.message),d(),s==null||s.initialize()):p.error(f.data.message)}catch(f){p.error(f.message)}}});return e.jsxs(C,{formik:r,children:[i&&e.jsx("div",{onClick:d,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(i?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Update Profile"}),e.jsxs("button",{onClick:d,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsxs("div",{className:"p-4 md:p-5",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[e.jsx("div",{children:e.jsx(g,{name:"name",label:"Full Name",formik:r})}),e.jsx("div",{className:"-mt-3",children:e.jsx(g,{name:"email",label:"Email",value:(h=s==null?void 0:s.user)==null?void 0:h.email,formik:r,disabled:!0})}),e.jsx("div",{className:"-mt-3",children:e.jsx(g,{name:"mobile",label:"Mobile",formik:r,type:"number"})}),e.jsx("div",{className:"-mt-3",children:e.jsx(g,{name:"dateOfBirth",label:"Date of Birth (Optional)",formik:r,type:"date"})}),e.jsx("div",{className:"-mt-3",children:e.jsx(B,{name:"address",label:"Address",formik:r})})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[e.jsx(b.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:d,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Cancel"})}),e.jsx(b.Button,{type:"submit",size:"sm",children:e.jsx("span",{children:"UPDATE"})})]})]})]})})})]})}const E=k().shape({password:j().required("Password is required"),newPassword:j().required("New Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,"Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),confirmPassword:j().required("Confirm Password is required").oneOf([A("newPassword"),null],"New Password must match")});function R({open:i,setOpen:w}){const n=()=>w(!i),{mutateAsync:d}=N({}),s=v(),r=P({enableReinitialize:!0,initialValues:{password:"",newPassword:"",confirmPassword:""},validationSchema:E,onSubmit:async(t,{resetForm:x})=>{var l,o,m,c,h;try{const a=await d({api:O.changePassword,data:{password:t==null?void 0:t.password,newPassword:t==null?void 0:t.newPassword}});(l=a==null?void 0:a.data)!=null&&l.status?(p.success((o=a==null?void 0:a.data)==null?void 0:o.message),s==null||s.logoutChangePassword()):p.error((m=a==null?void 0:a.data)==null?void 0:m.message)}catch(a){p.error((h=(c=a==null?void 0:a.response)==null?void 0:c.data)==null?void 0:h.message)}x(),n()}});return e.jsxs(C,{formik:r,children:[i&&e.jsx("div",{onClick:n,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(i?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Change Password"}),e.jsxs("button",{onClick:n,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsxs("div",{className:"p-4 md:p-5",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[e.jsx("div",{children:e.jsx(g,{name:"password",label:"Old Password",type:"password",formik:r})}),e.jsx("div",{children:e.jsx(g,{name:"newPassword",label:"New Password",type:"password",formik:r})}),e.jsx("div",{children:e.jsx(g,{name:"confirmPassword",label:"Confirm Password",type:"password",formik:r})})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[e.jsx(b.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:n,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Cancel"})}),e.jsx(b.Button,{type:"submit",size:"sm",loading:r.isSubmitting,children:e.jsx("span",{children:"UPDATE"})})]})]})]})})})]})}function H(){var x,l,o,m,c,h,a;const[i,w]=y.useState(!1),[n,d]=y.useState(!1),s=v(),r=()=>{w(!0)},t=()=>{d(!0)};return e.jsxs(q,{title:"Profile",children:[e.jsx(S,{open:i,setOpen:w}),e.jsx(R,{open:n,setOpen:d}),e.jsx("div",{className:"px-4",children:e.jsxs("div",{className:"p-8 bg-white shadow mt-20 rounded-2xl",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3",children:[e.jsx("div",{className:"relative",children:e.jsx("div",{className:"w-32 h-32 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-24 w-24",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})})}),e.jsxs("div",{className:"space-x-4 flex justify-between mt-20 md:mt-0 md:justify-center",children:[e.jsx("button",{onClick:t,className:"text-white w-full text-sm py-1 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5",children:e.jsx("small",{children:"Change Password"})}),e.jsx("button",{onClick:r,className:"text-white w-full text-sm py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5",children:e.jsx("small",{children:"Edit Profile"})})]})]}),e.jsxs("div",{className:"mt-8 text-center border-b pb-8",children:[e.jsx("h1",{className:"text-xl font-medium text-gray-700",children:(x=s==null?void 0:s.user)==null?void 0:x.name}),e.jsx("p",{className:"font-light text-sm text-gray-600 mt-1",children:(l=s==null?void 0:s.user)==null?void 0:l.email}),e.jsx("p",{className:"mt-1 text-gray-500 text-sm",children:(o=s==null?void 0:s.user)==null?void 0:o.mobile}),e.jsx("p",{className:"mt-1 text-gray-500 text-sm",children:((m=s==null?void 0:s.user)==null?void 0:m.role[0])||"Role not found"}),e.jsx("p",{className:"mt-1 text-gray-500 text-sm",children:(c=s==null?void 0:s.user)==null?void 0:c.address})]}),((h=s==null?void 0:s.permittedWard)==null?void 0:h.length)>0&&e.jsxs("div",{className:" flex flex-col justify-center",children:[e.jsx("h1",{className:"text-sm font-bold text-gray-700",children:"Permitted Ward"}),e.jsx("div",{className:"grid grid-cols-4 mt-1",children:(a=s==null?void 0:s.permittedWard)==null?void 0:a.map(u=>e.jsx("div",{className:"p-1",children:e.jsx(b.Chip,{variant:"ghost",value:u==null?void 0:u.ward_name,className:"text-center"})},u==null?void 0:u.id))})]})]})}),e.jsx("div",{className:"mb-8"})]})}export{H as default};
