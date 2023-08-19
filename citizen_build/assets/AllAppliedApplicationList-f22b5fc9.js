import{r as d,c as k,d as A,b as I,A as u,v as P,j as e,f as b,L as S}from"./index-5738b2d0.js";import C from"./Dashboard-6d8f0444.js";import{B as M}from"./BackComponent-62d9b95d.js";function z(a){const{api_independentComment:l}=b();d.useState(),console.log("props..applicationIdfun",a.applicationIdfun),console.log("props..workflowIdfun",a.workflowIdfun);let x=a.applicationId,i=a.workflowId;const n=k({message:A().required("Enter message")}),c=I({initialValues:{message:""},onSubmit:t=>{h(t)},validationSchema:n}),h=t=>{console.log("post data...",t);let r={workflowId:i,applicationId:x,message:t.message};console.log("before citizen comment...",r),u.post(l,r,P()).then(function(o){console.log("send msg.....",o),a==null||a.notify("Message successfully sent !"),a==null||a.closeModalFun()}).catch(o=>{console.log("err",o)})};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full h-full",children:e.jsx("div",{className:" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  h-modal py-10 justify-center items-center ",children:e.jsxs("section",{className:" w-full h-full mx-auto text-gray-600 bg-gray-200 border border-sky-500 rounded-sm body-font overflow-hidden p-3   ",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-1",children:e.jsx("h1",{className:"text-gray-900 text-xl font-semibold title-font mb-4 flex items-center",children:e.jsx("p",{className:"",children:"Send Message"})})}),e.jsx("div",{className:"flex-1 ",children:e.jsx("button",{className:"float-right hover:scale-105",onClick:()=>a==null?void 0:a.closeModalFun(),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-8 h-8 text-red-500",children:e.jsx("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z","clip-rule":"evenodd"})})})})]}),e.jsx("form",{onSubmit:c.handleSubmit,children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1",children:[e.jsx("textarea",{name:"message",className:"bg-white shadow-lg px-2 border-white text-gray-700",value:c.values.message,onChange:c.handleChange}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:c.touched.message&&c.errors.message?c.errors.message:null}),e.jsx("div",{className:"flex mt-2",children:e.jsx("div",{className:"flex-1 mx-auto mt-5",children:e.jsx("button",{type:"submit",className:"bg-sky-500 font-semibold text-white rounded-sm px-8 hover:shadow-lg py-2 hover:scale-105",children:"Send "})})})]})})]})})})})}function L(){var m,j,f,w,N,v,p;const{api_getAllApplicationList:a}=b(),[l,x]=d.useState(),[i,n]=d.useState(!1),[g,c]=d.useState(),[h,t]=d.useState(),r=s=>{console.log("------e.target.values/id",s.target.value,s.target.id),c(s.target.value),t(s.target.id),n(!i)};let o=window.localStorage.getItem("token");const y=()=>{u.get(a,{headers:{Authorization:`Bearer ${o}`,Accept:"application/json"}}).then(function(s){console.log("all apllication list----- ",s.data.data),x(s.data.data)}).catch(function(s){console.log(s)})};return d.useEffect(()=>{y()},[]),console.log("all apllication list 2----- ",l),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"-mt-8 p-2 ",children:e.jsx(S,{to:"/dashboardEntry",children:e.jsx(M,{})})}),e.jsx("div",{children:e.jsxs("div",{className:"bg-gray-50 rounded-lg mt-4",children:[e.jsx(C,{}),e.jsx("div",{className:" md:p-2 flex justify-center items-center    mb-2",children:e.jsxs("div",{className:"grid grid-cols-12 bg-gray-50 shadow-lg w-full md:w-full p-3 md:p-3 gap-3 rounded-lg",children:[e.jsx("div",{className:"col-span-12",children:e.jsxs("div",{className:"flex flex-row",children:[e.jsxs("div",{className:"flex flex-row  text-sky-500 hover:bg-sky-50 p-1",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/3187/3187927.png",className:"h-6  ml-3"}),e.jsx("h1",{className:"font-mono text-lg ",children:"All Applied Applications"})]}),e.jsxs("div",{className:"flex flex-row bg-slate-200 text-sky-500 hover:bg-sky-50 p-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"})}),e.jsx("h1",{className:"font italic text-xs ml-2 ",children:"you can suggest or request  related to your application by clicking on message icon"})]})]})}),e.jsxs("div",{className:"flex flex-row space-x-3 p-2",children:[e.jsxs("div",{className:"flex flex-row",children:[e.jsx("h1",{className:"w-6 h-6 bg-teal-400 rounded-full text-xs text-center px-1 py-1 shadow-lg shadow-sky-300 text-white",children:(m=l==null?void 0:l.Property)==null?void 0:m.totalApplications}),e.jsx("button",{className:"text-sm ml-1",children:"Property "})]}),e.jsxs("div",{className:"flex flex-row",children:[e.jsx("h1",{className:"w-6 h-6 bg-teal-400 rounded-full text-xs text-center px-1 py-1 shadow-lg shadow-sky-300 text-white",children:(j=l==null?void 0:l.Trade)==null?void 0:j.totalApplications}),e.jsx("button",{className:"text-sm ml-1",children:"Trade "})]}),e.jsxs("div",{className:"flex flex-row",children:[e.jsx("h1",{className:"w-6 h-6 bg-teal-400 rounded-full text-xs text-center px-1 py-1 shadow-lg shadow-sky-300 text-white",children:(f=l==null?void 0:l.Water)==null?void 0:f.totalApplications}),e.jsx("button",{className:"text-sm ml-1",children:"Water "})]})]}),e.jsxs("div",{className:"col-span-12  mt-4 ",children:[e.jsx("div",{className:"col-span-12 flex flex-row w-full  text-lg   ",children:e.jsx("h1",{className:"font-semibold text-gray-500 text-sm ml-2 text-center ",children:"PROPERTY APPLIED APPLICATION"})}),e.jsx("div",{className:"col-span-12  w-full p-2 shadow-md text-center text-xs",children:e.jsxs("div",{className:"grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-2   ",children:[e.jsx("div",{className:" ",children:e.jsx("h1",{className:"",children:"ACTION"})}),e.jsx("div",{className:" ",children:e.jsx("h1",{className:"",children:"STATUS"})}),e.jsx("div",{className:"",children:e.jsx("h1",{className:"",children:"SAF NO."})}),e.jsx("div",{className:"",children:e.jsx("h1",{className:"",children:"HOLDING NO."})}),e.jsx("div",{className:"",children:e.jsx("h1",{className:"",children:"ASSESSMENT TYPE "})}),e.jsx("div",{className:"",children:e.jsx("h1",{className:"",children:"APPLY DATE "})})]})}),e.jsx("div",{className:"col-span-12 w-full bg-white h-44 text-xs text-center overflow-y-scroll ",children:(N=(w=l==null?void 0:l.Property)==null?void 0:w.applications)==null?void 0:N.map(s=>e.jsxs("div",{className:"grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-2 py-2 shadow-md shadow-gray-300 mb-4  bg-white ",children:[e.jsxs("div",{className:"flex flex-row space-x-2 mx-auto",children:[e.jsx("div",{children:e.jsx("button",{className:"text-center   text-xs",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 text-[#0369a1]",children:[e.jsx("path",{d:"M12 15a3 3 0 100-6 3 3 0 000 6z"}),e.jsx("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z","clip-rule":"evenodd"})]})})}),e.jsx("div",{children:e.jsxs("button",{type:"button",value:s==null?void 0:s.application_id,id:s==null?void 0:s.workflow_id,className:"text-center  text-xs",onClick:r,children:[" ",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 text-[#0369a1] ",children:[e.jsx("path",{d:"M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"}),e.jsx("path",{d:"M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"})]})]})})]}),e.jsx("div",{className:"",children:e.jsx("span",{className:"text-xs text-gray-600 font-semibold",children:(s==null?void 0:s.saf_pending_status)==0?"PENDING ":"APPROVED"})}),e.jsx("div",{className:"",children:e.jsx("span",{className:"text-xs text-gray-600 font-semibold",children:s==null?void 0:s.saf_no})}),e.jsx("div",{className:"",children:e.jsx("span",{className:"text-xs text-gray-600 font-semibold",children:s==null?void 0:s.holding_no})}),e.jsx("div",{className:"",children:e.jsx("span",{className:"text-xs text-gray-600 font-semibold",children:s==null?void 0:s.assessment_type})}),e.jsx("div",{className:"",children:e.jsxs("span",{className:"text-xs text-gray-600 font-semibold",children:[s==null?void 0:s.created_at,"    "]})})]}))})]}),e.jsxs("div",{className:"col-span-12 mt-4",children:[e.jsx("div",{className:"col-span-12 flex flex-row w-full  text-lg   ",children:e.jsx("h1",{className:"font-semibold text-gray-500 text-sm ml-2 text-center ",children:"TRADE APPLIED APPLICATION"})}),e.jsx("div",{className:"col-span-12  w-full bg-gray-50 p-2 shadow-md text-center text-xs",children:e.jsxs("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-2",children:[e.jsx("div",{className:" ",children:e.jsx("h1",{className:"",children:"ACTION"})}),e.jsx("div",{className:" ",children:e.jsx("h1",{className:"",children:"STATUS"})}),e.jsx("div",{className:"",children:e.jsx("h1",{className:"",children:"APPLICATION NO."})}),e.jsx("div",{className:"",children:e.jsx("h1",{className:"",children:"HOLDING NO."})}),e.jsx("div",{className:"",children:e.jsx("h1",{className:"",children:"APPLY DATE "})})]})}),e.jsx("div",{className:"col-span-12 w-full h-44 text-xs text-center overflow-y-scroll overflow-x-scroll",children:(p=(v=l==null?void 0:l.Trade)==null?void 0:v.applications)==null?void 0:p.map(s=>e.jsxs("div",{className:"grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-2 py-2 shadow-md shadow-gray-300 mb-4  bg-white ",children:[e.jsxs("div",{className:"flex flex-row space-x-2 mx-auto",children:[e.jsx("div",{children:e.jsx("button",{className:"text-center   text-xs",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 text-[#0369a1]",children:[e.jsx("path",{d:"M12 15a3 3 0 100-6 3 3 0 000 6z"}),e.jsx("path",{"fill-rule":"evenodd",d:"M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z","clip-rule":"evenodd"})]})})}),e.jsx("div",{children:e.jsxs("button",{type:"button",value:s==null?void 0:s.application_id,id:s==null?void 0:s.workflow_id,className:"text-center  text-xs",onClick:r,children:[" ",e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5 text-[#0369a1]",children:[e.jsx("path",{d:"M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"}),e.jsx("path",{d:"M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"})]})]})})]}),e.jsx("div",{className:"",children:e.jsx("span",{className:"text-xs text-gray-600 font-semibold",children:(s==null?void 0:s.saf_pending_status)==0?"PENDING ":"APPROVED"})}),e.jsx("div",{className:"",children:e.jsx("span",{className:"text-xs text-gray-600 font-semibold",children:s==null?void 0:s.application_no})}),e.jsx("div",{className:"",children:e.jsx("span",{className:"text-xs text-gray-600 font-semibold",children:s==null?void 0:s.holding_no})}),e.jsx("div",{className:"",children:e.jsxs("span",{className:"text-xs text-gray-600 font-semibold",children:[s==null?void 0:s.created_at,"    "]})})]}))})]}),e.jsx("div",{children:i?e.jsx(z,{fun:n,applicationIdfun:g,workflowIdfun:h}):""})]})})]})})]})}export{L as default};
