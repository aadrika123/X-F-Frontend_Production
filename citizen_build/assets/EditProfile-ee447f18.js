import{j as e,C as W,a as J,r as o,A as K,t as Q,c as T,d as i,b as X,v as Z,w as ee,x as c,y as re,z as le,f as se,B as oe}from"./index-ecfe615e.js";function ae(n){return e.jsx(e.Fragment,{children:e.jsx(W,{visible:n.show,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}function fe(){const{api_getProfileDetails:n,api_editCitizenProfile:ie}=se(),x=J(),[m,u]=o.useState("hidden"),[s,v]=o.useState();o.useState(),o.useState(!1);const[k,A]=o.useState(!1),[F,de]=o.useState(),[S,g]=o.useState(null),[D,b]=o.useState(null),[te,V]=o.useState(null),[ne,C]=o.useState(null),[ce,P]=o.useState(null),[xe,E]=o.useState(null),[me,R]=o.useState(null),[ue,U]=o.useState(null),[ge,z]=o.useState(null),[L,h]=o.useState(!1),[Y,f]=o.useState(!1),p=o.useRef(),_=o.useRef(),q=o.useRef(),M=o.useRef();let B=oe;const t=r=>{A(r)},y=()=>{m=="hidden"?u(""):u("hidden")},j=()=>{y()};o.useEffect(()=>{t(!0),K.post(`${n}`,{},Q()).then(function(r){var a,d,w,N;console.log("getdata for my profile ....",r.data),r.data.status&&(v((a=r==null?void 0:r.data)==null?void 0:a.data),O((d=r==null?void 0:r.data)==null?void 0:d.data),g((N=(w=r==null?void 0:r.data)==null?void 0:w.data)==null?void 0:N.profile_photo)),t(!1)}).catch(function(r){t(!1),console.log("getdata for my profile errorrr.... ",r)})},[]),new FormData().append("profileImage",F);const I=r=>{console.log("values",r);let a={id:"",name:r==null?void 0:r.name,mobile:r==null?void 0:r.mobile,email:r==null?void 0:r.email,aadhar:r==null?void 0:r.aadhar,dob:r==null?void 0:r.dob,gender:r==null?void 0:r.gender,isSpeciallyAbled:"0",isArmedForce:"0",aadharDoc:r==null?void 0:r.aadharDoc,armedForceDoc:r==null?void 0:r.armedForceDoc,speciallyAbledDoc:r==null?void 0:r.speciallyAbledDoc,photo:r==null?void 0:r.photo};console.log("before submit edit profile...",a)},O=r=>{l.setFieldValue("name",r==null?void 0:r.name),l.setFieldValue("mobile",r==null?void 0:r.mobile),l.setFieldValue("email",r==null?void 0:r.email),l.setFieldValue("aadhar",r==null?void 0:r.aadhar),l.setFieldValue("dob",r==null?void 0:r.dob),l.setFieldValue("gender",r==null?void 0:r.gender),l.setFieldValue("isSpeciallyAbled",(r==null?void 0:r.isSpeciallyAbled)==!0?"1":"0"),l.setFieldValue("isArmedForce",(r==null?void 0:r.isArmedForce)==!0?"1":"0"),l.setFieldValue("aadharDoc",r==null?void 0:r.aadharDoc),l.setFieldValue("armedForceDoc",r==null?void 0:r.armedForceDoc),l.setFieldValue("speciallyAbledDoc",r==null?void 0:r.speciallyAbledDoc),l.setFieldValue("photo",r==null?void 0:r.photo),b(`${B}/${r==null?void 0:r.profile_photo}`)},H=T().shape({name:i().required("Enter Your Name"),mobile:i().required("Enter Your Name"),email:i().required("Enter Your Name"),aadhar:i().required("Enter Your Name"),dob:i().required("Enter Your Name"),gender:i().required("Enter Your Name"),isSpeciallyAbled:i().required("Select specially abled or not"),isArmedForce:i().required("Select armed force or not"),aadharDoc:i().required("Enter Your Name"),armedForceDoc:i(),speciallyAbledDoc:i(),photo:i().required("Enter Your Name")}),l=X({initialValues:{name:"",mobile:"",email:"",aadhar:"",dob:"",gender:"",isSpeciallyAbled:"",isArmedForce:"",aadharDoc:"",armedForceDoc:"",speciallyAbledDoc:"",photo:""},enableReinitialize:!0,onSubmit:r=>{console.log("data at submit edit profile...",r),I(r)},validationSchema:H}),$=r=>{let a=r.target.name;if(a=="aadharDoc"){V(URL.createObjectURL(r.target.files[0])),R(r.target.files[0]);return}if(a=="armedForceDoc"){C(URL.createObjectURL(r.target.files[0])),U(r.target.files[0]);return}if(a=="speciallyAbledDoc"){P(URL.createObjectURL(r.target.files[0])),z(r.target.files[0]);return}if(a=="photo"){b(URL.createObjectURL(r.target.files[0])),E(r.target.files[0]);return}},G=r=>{let a=r.target.name,d=r.target.value;a=="isSpeciallyAbled"&&(d=="1"?h(!0):h(!1)),a=="isArmedForce"&&(d=="1"?f(!0):f(!1)),(a=="aadharDoc"||a=="armedForceDoc"||a=="speciallyAbledDoc"||a=="photo")&&$(r)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"",children:[e.jsx("div",{children:e.jsx("main",{className:"w-full mx-auto",children:e.jsx("div",{className:"mx-auto ",children:e.jsxs("div",{className:"flex flex-wrap flex-row",children:[e.jsx(ae,{show:k}),e.jsxs("div",{"x-data":"{ open: false }",className:"flex-shrink max-w-full px-4 w-full mb-6",children:[e.jsxs("div",{className:"bg-white darks:bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-8",children:[e.jsx("div",{className:"flex justify-center mt-10 relative",children:e.jsxs("a",{className:" group",href:"javascript:;",children:[e.jsx("img",{src:S,onError:()=>g(Z),className:"rounded-full w-24 h-24 bg-gray-200 border-solid border-white border-2 -mt-3"}),e.jsx("button",{type:"button",title:"Change avatar",className:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-white darks:text-gray-900",onClick:y,children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"w-6 h-6 bi bi-camera",viewBox:"0 0 16 16",children:[e.jsx("path",{d:"M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"}),e.jsx("path",{d:"M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"})]})})]})}),e.jsxs("div",{className:"text-center px-3 pb-6 pt-2",children:[e.jsx("h3",{className:"text-gray-800 darks:text-gray-100 font-bold text-lg",children:s==null?void 0:s.name}),e.jsx("p",{className:"mt-2 font-light text-center",children:"Welcome  to your profile"})]})]}),e.jsx("div",{className:"flex flex-wrap flex-row -mx-4",children:e.jsx("div",{className:"flex-shrink max-w-full px-4 w-full  mb-8",children:e.jsxs("div",{className:"bg-white darks:bg-gray-800 rounded-lg shadow-lg h-full p-6",children:[e.jsx("div",{className:"flex flex-row justify-between 2xl:pb-3",children:e.jsx("div",{className:"relative"})}),e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsxs("div",{className:"py-3 col-span-12 md:col-span-6",children:[e.jsx("div",{className:" my-3"}),e.jsxs("div",{className:"ltr:text-left rtl:text-right",children:[e.jsxs("div",{className:"mb-2 flex",children:[e.jsxs("div",{className:"flex-1",children:[" ",e.jsx("strong",{children:" Name :"})]}),e.jsx("div",{className:"flex-1",children:e.jsxs("span",{className:"ml-2",children:[" ",s==null?void 0:s.name]})})]}),e.jsxs("div",{className:"mb-2 flex mt-4",children:[e.jsx("div",{className:"flex-1",children:e.jsx("strong",{children:"Mobile :"})}),e.jsx("div",{className:"flex-1",children:e.jsxs("span",{className:"ml-2",children:["(+91) ",s==null?void 0:s.mobile]})})]}),e.jsxs("div",{className:"mb-2 flex mt-4",children:[e.jsx("div",{className:"flex-1",children:e.jsx("strong",{children:"Email :"})}),e.jsx("div",{className:"flex-1",children:e.jsx("span",{className:"ml-2",children:s==null?void 0:s.email})})]}),e.jsxs("div",{className:"mb-2 flex mt-4",children:[e.jsx("div",{className:"flex-1",children:e.jsx("strong",{children:"Date Of Birth :"})}),e.jsx("div",{className:"flex-1",children:e.jsx("span",{className:"ml-2",children:ee(s==null?void 0:s.dob)})})]}),e.jsxs("div",{className:"mb-2 flex mt-4",children:[e.jsx("div",{className:"flex-1",children:e.jsx("strong",{children:"Gender :"})}),e.jsx("div",{className:"flex-1",children:e.jsx("span",{className:"ml-2",children:(s==null?void 0:s.gender)==""||(s==null?void 0:s.gender)==null||(s==null?void 0:s.gender)==null?"N/A":s==null?void 0:s.gender})})]}),e.jsxs("div",{className:"mb-2 flex mt-4",children:[e.jsx("div",{className:"flex-1",children:e.jsx("strong",{children:"Aadhar No. :"})}),e.jsx("div",{className:"flex-1",children:e.jsx("span",{className:"ml-2",children:(s==null?void 0:s.aadhar)==""||(s==null?void 0:s.aadhar)==null||(s==null?void 0:s.aadhar)==null?"N/A":s==null?void 0:s.aadhar})})]})]})]}),e.jsxs("div",{className:"py-3 col-span-12 md:col-span-6",children:[e.jsx("div",{className:"my-3"}),e.jsxs("div",{className:"ltr:text-left rtl:text-right",children:[e.jsxs("div",{className:"mb-2 flex",children:[e.jsx("div",{className:"flex-1",children:e.jsx("strong",{children:" Specially Abled ? :"})}),e.jsx("div",{className:"flex-1",children:e.jsxs("span",{className:"ml-2",children:[" ",s!=null&&s.is_specially_abled?"Yes":"No"]})})]}),e.jsxs("div",{className:"mb-2 flex mt-3",children:[e.jsx("div",{className:"flex-1",children:e.jsx("strong",{children:" Armed Force... :"})}),e.jsx("div",{className:"flex-1",children:e.jsx("span",{className:"ml-2",children:s!=null&&s.is_armed_force?"Yes":"No"})})]}),e.jsxs("div",{className:"mb-2 flex mt-3",children:[e.jsx("div",{className:"flex-1",children:e.jsx("strong",{children:"Aadhar Document  : "})}),e.jsx("div",{className:"flex-1",children:e.jsx(c,{onClick:"",className:"text-3xl inline text-indigo-500 font-bold cursor-pointer hover:scale-105"})})]}),(s==null?void 0:s.is_specially_abled)&&e.jsxs("div",{className:"mb-2 flex mt-3",children:[e.jsx("div",{className:"flex-1",children:e.jsx("strong",{children:"Specially Abled Document  : "})}),e.jsx("div",{className:"flex-1",children:e.jsx(c,{onClick:"",className:"text-3xl inline text-indigo-500 font-bold cursor-pointer hover:scale-105"})})]}),(s==null?void 0:s.is_armed_force)&&e.jsxs("div",{className:"mb-2 flex mt-3",children:[e.jsx("div",{className:"flex-1",children:e.jsx("strong",{children:"Armed Force Document : "})}),e.jsx("div",{className:"flex-1",children:e.jsx(c,{onClick:"",className:"text-3xl inline text-indigo-500 font-bold cursor-pointer hover:scale-105"})})]})]})]})]}),e.jsxs("div",{className:"flex flex-row w-full border-t border-gray-200 pt-10",children:[e.jsx("div",{className:"flex-1",children:e.jsx("button",{className:re,onClick:()=>x("/change-password/change"),children:"Change Password"})}),e.jsx("div",{className:"flex-1 text-right",children:e.jsx("button",{className:le,onClick:()=>x("/landingDashboard"),children:"View Dashboard"})})]})]})})})]})]})})})}),e.jsx("div",{className:"pb-12"}),e.jsx("div",{className:`${m} `,children:e.jsx("div",{class:"z-50  overflow-auto inset-0 w-full h-full fixed py-6 mx-auto bg-transparent",children:e.jsx("div",{class:"z-50 relative p-3 mx-auto my-0 w-3/6",children:e.jsxs("form",{class:"valid-form bg-white darks:bg-gray-800 rounded-lg shadow-lg border darks:border-gray-800 flex flex-col overflow-hidden",onSubmit:l.handleSubmit,onChange:G,children:[e.jsxs("div",{className:"flex border-b darks:border-gray-800",children:[e.jsx("div",{className:"flex-1",children:e.jsx("h1",{class:"px-6 py-3 text-xl font-bold ",children:"Edit profile"})}),e.jsx("div",{className:"flex-1",children:e.jsx("button",{type:"button",class:"fill-current h-6 w-6 top-0 m-4 float-right font-6xl font-bold  ",onClick:j,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-red-500",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})})]}),e.jsx("div",{class:"p-6 flex-grow",children:e.jsxs("div",{class:"flex flex-wrap flex-row -mx-4",children:[e.jsx("div",{class:"flex-shrink max-w-full px-4 w-full",children:e.jsx("div",{class:"bg-white darks:bg-gray-800 rounded-lg overflow-hidden pb-8",children:e.jsx("div",{class:"flex justify-center mt-10 relative",children:e.jsx("div",{className:"form-group  flex justify-center relative mt-5",children:e.jsxs("div",{className:"w-28 h-28 border rounded-full",children:[e.jsx("img",{className:"w-28 h-28 rounded-full border bg-gray-700 shadow-xl",src:D,alt:""}),e.jsx("span",{className:"absolute bottom-2 left-0 right-0 text-center ",children:e.jsx("span",{onClick:()=>p.current.click(),className:"bg-white text-indigo-500 px-1 border rounded-xl text-xs cursor-pointer font-semibold hover:scale-105",children:"Change"})}),e.jsx("span",{className:"text-red-600 absolute text-xs -bottom-3 text-center",children:l.touched.photo&&l.errors.photo?l.errors.photo:null})]})})})})}),e.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6",children:[e.jsx("label",{class:"inline-block mb-2",children:"Name"}),e.jsx("input",{type:"text",...l.getFieldProps("name"),class:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.name&&l.errors.name?l.errors.name:null})]}),e.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6",children:[e.jsx("label",{class:"inline-block mb-2",children:"Mobile No."}),e.jsx("input",{...l.getFieldProps("mobile"),type:"text",class:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-gray-50 border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.mobile&&l.errors.mobile?l.errors.mobile:null})]}),e.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6",children:[e.jsx("label",{class:"inline-block mb-2",children:"Email"}),e.jsx("input",{...l.getFieldProps("email"),type:"email",class:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-gray-50 border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.email&&l.errors.email?l.errors.email:null})]}),e.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6",children:[e.jsx("label",{class:"inline-block mb-2",children:"Aadhar"}),e.jsx("input",{...l.getFieldProps("aadhar"),type:"text",class:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.aadhar&&l.errors.aadhar?l.errors.aadhar:null})]}),e.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6",children:[e.jsx("label",{class:"inline-block mb-2",children:"DOB"}),e.jsx("input",{...l.getFieldProps("dob"),type:"date",class:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600 cursor-pointer"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.dob&&l.errors.dob?l.errors.dob:null})]}),e.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6",children:[e.jsx("label",{class:"inline-block mb-2",children:"Gender"}),e.jsxs("select",{...l.getFieldProps("gender"),class:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600 cursor-pointer",children:[e.jsx("option",{children:"select"}),e.jsx("option",{value:"Male",children:"Male"}),e.jsx("option",{value:"Female",children:"Female"}),e.jsx("option",{value:"Other",children:"Other"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.gender&&l.errors.gender?l.errors.gender:null})]}),e.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6",children:[e.jsx("label",{class:"inline-block mb-2",children:"Is-Specially-Abled"}),e.jsxs("select",{...l.getFieldProps("isSpeciallyAbled"),type:"text",class:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600 cursor-pointer",children:[e.jsx("option",{value:"1",children:"Yes"}),e.jsx("option",{value:"0",children:"No"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.isSpeciallyAbled&&l.errors.isSpeciallyAbled?l.errors.isSpeciallyAbled:null})]}),e.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6",children:[e.jsx("label",{class:"inline-block mb-2",children:"Is-Armed-Force"}),e.jsxs("select",{...l.getFieldProps("isArmedForce"),type:"text",class:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600 cursor-pointer",children:[e.jsx("option",{value:"1",children:"Yes"}),e.jsx("option",{value:"0",children:"No"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.isArmedForce&&l.errors.isArmedForce?l.errors.isArmedForce:null})]}),e.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6 relative",children:[e.jsx("label",{class:"inline-block mb-2",children:"Aadhar Document"}),e.jsx("input",{ref:_,...l.getFieldProps("aadharDoc"),type:"file",class:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600 cursor-pointer"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.aadharDoc&&l.errors.aadharDoc?l.errors.aadharDoc:null})]}),Y&&e.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6",children:[e.jsx("label",{class:"inline-block mb-2",children:"Armed Force Document"}),e.jsx("input",{ref:q,...l.getFieldProps("armedForceDoc"),type:"file",class:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600 cursor-pointer"})]}),L&&e.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6",children:[e.jsx("label",{class:"inline-block mb-2",children:"Specially Abled Document"}),e.jsx("input",{ref:M,...l.getFieldProps("speciallyAbledDoc"),type:"file",class:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600 cursor-pointer"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.speciallyAbledDoc&&l.errors.speciallyAbledDoc?l.errors.speciallyAbledDoc:null})]}),e.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6",children:[e.jsx("label",{class:"inline-block mb-2",children:"Photo"}),e.jsx("input",{ref:p,...l.getFieldProps("photo"),type:"file",class:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.photo&&l.errors.photo?l.errors.photo:null})]})]})}),e.jsxs("div",{class:"px-6 py-3 border-t darks:border-gray-800 flex justify-end",children:[e.jsx("button",{type:"button",class:"py-2 px-4 inline-block text-center rounded leading-5 text-gray-800 bg-gray-100 border border-gray-100 hover:text-gray-900 hover:bg-gray-200 hover:ring-0 hover:border-gray-200 focus:bg-gray-200 focus:border-gray-200 focus:outline-none focus:ring-0 ltr:mr-2 rtl:ml-2",onClick:j,children:"Close"}),e.jsx("button",{type:"submit",class:"py-2 px-4 inline-block text-center rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",children:"Update"})]})]})})})})]})})}export{fe as default};
