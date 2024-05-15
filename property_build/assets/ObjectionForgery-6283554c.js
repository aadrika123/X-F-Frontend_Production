import{u as ye,r as d,A as F,b as E,q as M,s as p,w as B,d as Ne,v as U,t as we,j as e,ad as ve,L as je,a8 as Se,bm as Fe,bu as ke,bx as Ae,n as u,bv as Ce,bw as T,N as Ee,P as De,ab as D,Q as Y,aa as Ie,bo as L,D as G,bl as Oe,by as Pe}from"./index-45e0c9da.js";import{O as Ve}from"./ObjectionRectificationApi-3e21b8dc.js";import{b as $e,F as Re}from"./index.esm-79a4b043.js";/* empty css             */import{P as _e}from"./reactjs-popup.esm-0e62af81.js";const Ye=I=>{var z;const{getForgeryReason:H,getForgeryDoc:Q,postForgery:W}=Ve(),{api_getPropHoldingDetailsById:J}=De(),{id:k}=ye();d.useState();const[K,h]=d.useState(!1);d.useState(1);const[y,X]=d.useState(null),[Z,ee]=d.useState(!1),[se,te]=d.useState(null),[A,re]=d.useState(null),[g,le]=d.useState(null),[m,N]=d.useState([]);let oe="border-2 border-slate-300 focus:border-2 focus:border-blue-400 rounded-md poppins 2xl:text-sm text-xs px-4 py-1 w-full";d.useEffect(()=>{h(!0),F.post(J,{propertyId:k},E()).then(s=>{var r,t;(r=s==null?void 0:s.data)!=null&&r.status&&le((t=s==null?void 0:s.data)==null?void 0:t.data)}).catch(s=>{}).finally(()=>h(!1)),F.post(H,{},E()).then(s=>{var r,t;(r=s==null?void 0:s.data)!=null&&r.status&&re((t=s==null?void 0:s.data)==null?void 0:t.data)}).catch(s=>{})},[k]);const ne=s=>{h(!0),N([]),F.post(Q,{forgeryTypeMstrId:s},E()).then(r=>{var t,o,i,n;(t=r==null?void 0:r.data)!=null&&t.status&&(X((o=r==null?void 0:r.data)==null?void 0:o.data),(n=(i=r==null?void 0:r.data)==null?void 0:i.data)==null||n.map((f,qe)=>{N(be=>[...be,{[f==null?void 0:f.docName]:null,docCode:""}])}))}).catch(r=>{}).finally(()=>h(!1))},ae=(s,r)=>{N(t=>{const o=[...t],i=o.findIndex(n=>n[r]!==void 0);return i!==-1&&(o[i]={...o[i],docCode:s.target.value}),o})},ie=(s,r)=>{D||a.setFieldValue,N(t=>{const o=[...t],i=o.findIndex(n=>n[r]!==void 0);return i!==-1&&(o[i]={...o[i],docName:s.target.files[0]}),o})},de=M({forgeryReason:p().required("Select any reason")}),a=B({initialValues:{forgeryReason:"",otherReason:""},onSubmit:s=>{if((c==null?void 0:c.length)<=0)return Y.info("Add atleast one owner..."),!0;let r=!1;m==null||m.forEach((t,o)=>{(t==null?void 0:t.docCode)==""||(t==null?void 0:t.docName)==""||(t==null?void 0:t.docCode)==null||(t==null?void 0:t.docName)==null?r=!1:(t==null?void 0:t.docName)!=""&&(t==null?void 0:t.docName)!=null&&(D(t==null?void 0:t.docName)||(w(!0,`Check your ${t==null?void 0:t.docCode} file size`),r=!0))}),!r&&pe(s)},validationSchema:de});function ce(s,r){const t=s.split(","),o=t[0].match(/:(.*?);/)[1],i=atob(t[1]);let n=i.length;const f=new Uint8Array(n);for(;n--;)f[n]=i.charCodeAt(n);return new File([f],r,{type:o})}const pe=s=>{h(!0);let r=new FormData;r.append("objectionFor","Forgery"),r.append("propId",k),r.append("forgeryTypeMstrId",s.forgeryReason),s.otherReason!=""&&r.append("remarks",s.otherReason),(m==null?void 0:m.length)>0&&(m==null||m.forEach((t,o)=>{(t==null?void 0:t.docName)==""&&(t==null?void 0:t.docName)==null&&(t==null?void 0:t.docCode)==""&&(t==null?void 0:t.docCode)==null&&(r.append(`documents[${o}][doc]`,t==null?void 0:t.docName),r.append(`documents[${o}][docCode]`,t==null?void 0:t.docCode))})),(c==null?void 0:c.length)>0&&(c==null||c.forEach((t,o)=>{r.append(`owners[${o}][ownerId]`,t==null?void 0:t.ownerId),r.append(`owners[${o}][ownerName]`,t==null?void 0:t.ownerName),r.append(`owners[${o}][gender]`,t==null?void 0:t.gender),r.append(`owners[${o}][dob]`,t==null?void 0:t.dob),r.append(`owners[${o}][guardianName]`,t==null?void 0:t.guardianName),r.append(`owners[${o}][relation]`,t==null?void 0:t.relation),r.append(`owners[${o}][mobileNo]`,t==null?void 0:t.mobileNo),r.append(`owners[${o}][aadhar]`,t==null?void 0:t.aadhar),r.append(`owners[${o}][pan]`,t==null?void 0:t.pan),r.append(`owners[${o}][email]`,t==null?void 0:t.email),r.append(`owners[${o}][isArmedForce]`,t==null?void 0:t.isArmedForce),r.append(`owners[${o}][isSpeciallyAbled]`,t==null?void 0:t.isSpeciallyAbled),(t==null?void 0:t.ownerDocument)!=""&&r.append(`owners[${o}][ownerDoc]`,ce(t==null?void 0:t.ownerDocument,"IdProof.jpg"))})),F.post(W,r,Ie()).then(t=>{var o,i,n;(o=t==null?void 0:t.data)!=null&&o.status&&(Y.success("Forgery Objection Applied Successfully !!"),I.submitForm((i=t==null?void 0:t.data)==null?void 0:i.data)),((n=t==null?void 0:t.data)==null?void 0:n.status)==!1&&w(!0,"Error occurred in submitting objection application. Please try again later.")}).catch(t=>{w(!0,"Error occurred in submitting objection application. Please try again later.")}).finally(()=>h(!1))},w=(s,r)=>{te(r),ee(s)},[c,v]=d.useState([]),[x,j]=d.useState([]),[S,O]=d.useState({isArmedForce:"0",isSpeciallyAbled:"0"}),[P,V]=d.useState(!1),[$,xe]=d.useState(),[C,R]=d.useState("hidden");d.useState(!1),d.useState(null),d.useState(null),d.useState();const{notify:me}=d.useContext(Ne);d.useEffect(()=>{var s;(s=g==null?void 0:g.owners)==null||s.map(r=>{let t={ownerId:r==null?void 0:r.id,aadhar:r==null?void 0:r.aadhar_no,dob:r==null?void 0:r.dob,email:r==null?void 0:r.email,gender:r==null?void 0:r.gender,guardianName:r==null?void 0:r.guardian_name,isArmedForce:r!=null&&r.is_armed_force?"Yes":"No",isSpeciallyAbled:r!=null&&r.is_specially_abled?"Yes":"No",mobileNo:r==null?void 0:r.mobile_no,ownerDoc:"",ownerDocument:"",ownerName:r==null?void 0:r.owner_name,pan:r==null?void 0:r.pan_no,relation:r==null?void 0:r.relation_type};v([...c,t]),j([...x,t])})},[g==null?void 0:g.owners]);const l=B({initialValues:{ownerId:"",ownerName:"",gender:"",dob:U(),guardianName:"",relation:"",mobileNo:"",aadhar:"",pan:"",email:"",isArmedForce:"0",isSpeciallyAbled:"0",ownerDoc:"",ownerDocument:""},onSubmit:(s,r)=>{if(b(),P){he();return}ue(s)||([...c],v([...c,s]),[...x],j([...x,S]))},validationSchema:M({ownerName:p().required("Enter owner name").max(500,"Enter maximum 500 characters"),gender:p().required("Select gender"),dob:we().required("Select DOB").max(U(),"Please select valid date"),guardianName:p().required("Enter guardian name"),relation:p().required("Select relation"),mobileNo:p().required("Enter mobile no.").min(10,"Enter 10 digit mobilen no"),aadhar:p().required("Enter aadhar"),pan:p().required("Enter pan"),email:p().required("Enter email"),isArmedForce:p().required("Select armed force status"),isSpeciallyAbled:p().required("Select specially-abled status")})}),ue=s=>{let r=!1,t="";return c.some(o=>{if(s.aadhar!=""&&s.aadhar==o.aadhar){r=!0,t="Duplicate aadhar no.";return}if(s.pan!=""&&s.pan==o.pan){r=!0,t="Duplicate PAN no.";return}}),r&&me(t,"error"),r},he=()=>{let s=[...c];s[$]=a.values;let r=[...x];r[$]=S,v(s),j(r),V(!1),b()},b=()=>{R(C==="translate-y-0 top-[0px]"?"hidden":"translate-y-0 top-[0px]")},_=s=>{v(r=>r.filter((t,o)=>o!=s)),j(r=>r.filter((t,o)=>o!=s))},ge=s=>{V(!0),xe(s);let r=[...c];a.resetForm(),a.initialValues.ownerName=r[s].ownerName,a.initialValues.gender=r[s].gender,a.initialValues.dob=r[s].dob,a.initialValues.guardianName=r[s].guardianName,a.initialValues.relation=r[s].relation,a.initialValues.mobileNo=r[s].mobileNo,a.initialValues.aadhar=r[s].aadhar,a.initialValues.pan=r[s].pan,a.initialValues.email=r[s].email,a.initialValues.isArmedForce=r[s].isArmedForce,a.initialValues.isSpeciallyAbled=r[s].isSpeciallyAbled,b()},fe=s=>{let r=s.target.name,t=s.target.value;if(r=="ownerName"&&l.setFieldValue("ownerName",L(t,a.values.ownerName,100)),r=="guardianName"&&l.setFieldValue("guardianName",L(t,a.values.guardianName,100)),r=="mobileNo"&&l.setFieldValue("mobileNo",G(t,a.values.mobileNo,10)),r=="aadhar"&&l.setFieldValue("aadhar",G(t,a.values.aadhar,12)),r=="pan"&&l.setFieldValue("pan",Oe(t,a.values.pan,10)),r=="email"&&l.setFieldValue("email",Pe(t,a.values.email,100)),r=="ownerDoc"){const o=s.target.files[0];if(!D(o))return l.setFieldValue("ownerDoc",""),l.setFieldValue("ownerDocument",""),!0;const i=new FileReader;i.readAsDataURL(o),i.onload=()=>{const n=i.result;l.setFieldValue("ownerDocument",n)}}s.target.type=="select-one"?O({...S,[r]:s.target[s.target.selectedIndex].text}):O({...S,[r]:t})};let q="form-control w-full px-3 text-xs 2xl:text-sm py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md w-full sm:w-max";return e.jsxs(e.Fragment,{children:[e.jsx(ve,{position:"top-right",autoClose:2e3}),K&&e.jsx(je,{}),Z&&e.jsx(Se,{activateBottomErrorCard:w,errorTitle:se}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-500 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-base poppins mb-4 shadow-md py-2 rounded-md mx-6",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-extrabold text-[30px]",children:e.jsx($e,{})}),e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-lg",children:"Forgery Objection"})]})}),e.jsxs("div",{className:"poppins my-2 2xl:font-base text-sm px-6",children:["Under Section 167 of the ",(z=Fe())==null?void 0:z.state," Municipal Act 2011 allows citizens to file the following objections in forgery cases using this objection form."]}),e.jsxs("form",{onSubmit:a.handleSubmit,onChange:a.handleChange,className:"h-max p-4 mt-4 px-6 w-full",children:[e.jsxs("div",{className:"bg-white py-4 shadow-sm rounded-md transition-all duration-300 flex flex-wrap flex-col gap-y-4 px-2 w-full",children:[e.jsxs("div",{className:"bg-zinc-50 rounded-md shadow-sm",children:[e.jsx("div",{className:"px-4 py-1.5 text-gray-800 font-semibold uppercase poppins tracking-wider 2xl:text-base text-sm",children:"Select Reasons for Forgery"}),e.jsx("hr",{className:"h-0 border-1 border-gray-300"}),e.jsx("div",{className:"text-sm px-4 py-1.5 grid grid-cols-12",children:A==null?void 0:A.map((s,r)=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-row space-x-2 items-center py-2  col-span-12",children:e.jsxs("label",{className:"flex flex-row space-x-2 items-center",children:[e.jsx("input",{type:"radio",name:"forgeryReason",className:"rounded-md ",onChange:t=>ne(t.target.value),value:s==null?void 0:s.id}),e.jsx("p",{className:"2xl:text-sm text-xs poppins",children:s==null?void 0:s.type})]})})}))})]}),e.jsx("div",{className:"bg-white py-4 shadow-sm rounded-md transition-all duration-300 flex flex-wrap flex-col gap-y-4 px-2",children:e.jsxs("div",{className:"bg-zinc-50 rounded-md shadow-sm",children:[e.jsx("div",{className:"px-4 py-1.5 text-gray-800 font-semibold uppercase poppins tracking-wider 2xl:text-base text-sm",children:"Elaborate your Reason"}),e.jsx("hr",{className:"h-0 border-1 border-gray-300"}),e.jsx("div",{className:"text-sm px-4 py-1.5 w-full",children:e.jsx("div",{className:"flex flex-row flex-1 space-x-2 items-center py-2  col-span-12",children:e.jsx("textarea",{type:"text",name:"otherReason",value:a.values.otherReason,placeholder:"Elaborate your reason...",className:oe,rows:2})})})]})}),e.jsxs("div",{className:"bg-zinc-50 rounded-md shadow-sm relative",children:[e.jsxs("div",{className:"px-4 py-1.5 text-gray-800 font-semibold uppercase poppins tracking-wider 2xl:text-base text-sm flex justify-between items-center",children:[e.jsx("span",{children:" Property Owner(s)"}),e.jsxs("button",{onClick:b,type:"button",className:" px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-gray-200 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-white hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out",children:["Add Owner ",e.jsx(ke,{className:" hidden md:inline font-semibold text-sm md:text-lg"})]})]}),e.jsx("p",{className:"px-4",children:"Manage this property owner(s) according to your objection."}),e.jsx("hr",{className:"h-0 border-1 border-gray-300"}),e.jsxs("div",{className:"text-sm px-4 py-1.5 w-full relative",children:[e.jsxs("div",{className:`${C} transition-all block px-4 w-full 2xl:py-6 rounded-lg shadow-lg  md:w-full absolute top-4 -left-2 bg-white z-50`,children:[e.jsx("div",{onClick:b,children:e.jsx(Ae,{className:"absolute cursor-pointer top-2 right-2 text-red-500 text-3xl hover:scale-125"})}),e.jsx("form",{onChange:fe,children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5",children:e.jsxs("div",{className:"grid col-span-5 grid-cols-1 md:grid-cols-5",children:[e.jsxs("div",{className:"form-group col-span-4 md:col-span-1 mb-2 md:px-4",children:[e.jsxs("label",{className:"form-label poppins inline-block mb-1 text-gray-600 2xl:text-sm text-xs font-semibold ",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline poppins",children:"*"}),"Owner Name"]}),e.jsx("input",{...l.getFieldProps("ownerName"),type:"text",className:"form-control poppins block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md","aria-describedby":"emailHelp",placeholder:"Enter owner name"}),e.jsx("span",{className:"text-red-600 absolute text-xs poppins",children:l.touched.ownerName&&l.errors.ownerName?l.errors.ownerName:null})]}),e.jsxs("div",{className:"form-group col-span-4 md:col-span-1 mb-2 md:px-4",children:[e.jsxs("label",{className:"form-label poppins inline-block mb-1 text-gray-600 2xl:text-sm text-xs font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline poppins",children:"*"}),"Gender"]}),e.jsxs("select",{...l.getFieldProps("gender"),className:"form-control poppins block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"select gender"}),e.jsx("option",{value:"1",children:"Male"}),e.jsx("option",{value:"2",children:"Female"}),e.jsx("option",{value:"3",children:"Other"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs poppins",children:l.touched.gender&&l.errors.gender?l.errors.gender:null})]}),e.jsxs("div",{className:"form-group col-span-4 md:col-span-1 mb-2 md:px-4",children:[e.jsxs("label",{className:"form-label poppins inline-block mb-1 text-gray-600 2xl:text-sm text-xs font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline poppins",children:"*"}),"DOB"]}),e.jsx("input",{...l.getFieldProps("dob"),type:"date",className:"block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs poppins",children:l.touched.dob&&l.errors.dob?l.errors.dob:null})]}),e.jsxs("div",{className:"form-group col-span-4 md:col-span-1 mb-2 md:px-4",children:[e.jsx("label",{className:"form-label poppins inline-block mb-1 text-gray-600 2xl:text-sm text-xs font-semibold",children:"Guardian Name"}),e.jsx("input",{...l.getFieldProps("guardianName"),type:"text",className:"form-control poppins block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",placeholder:"Enter guardian name"}),e.jsx("span",{className:"text-red-600 absolute text-xs poppins",children:l.touched.guardianName&&l.errors.guardianName?l.errors.guardianName:null})]}),e.jsxs("div",{className:"form-group col-span-4 md:col-span-1 mb-2 md:px-4",children:[e.jsx("label",{className:"form-label poppins inline-block mb-1 text-gray-600 2xl:text-sm text-xs font-semibold",children:"Relation"}),e.jsxs("select",{...l.getFieldProps("relation"),className:"form-control poppins block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:"select relation"}),e.jsx("option",{value:"S/O",children:"S/O"}),e.jsx("option",{value:"D/O",children:"D/O"}),e.jsx("option",{value:"W/O",children:"W/O"}),e.jsx("option",{value:"C/O",children:"C/O"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs poppins",children:l.touched.relation&&l.errors.relation?l.errors.relation:null})]}),e.jsxs("div",{className:"form-group col-span-4 md:col-span-1 mb-2 md:px-4",children:[e.jsxs("label",{className:"form-label poppins inline-block mb-1 text-gray-600 2xl:text-sm text-xs font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline poppins",children:"*"}),"Mobile No."]}),e.jsx("input",{...l.getFieldProps("mobileNo"),type:"text",className:"form-control poppins block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",placeholder:"Enter mobile no"}),e.jsx("span",{className:"text-red-600 absolute text-xs poppins",children:l.touched.mobileNo&&l.errors.mobileNo?l.errors.mobileNo:null})]}),e.jsxs("div",{className:"form-group col-span-4 md:col-span-1 mb-2 md:px-4",children:[e.jsx("label",{className:"form-label poppins inline-block mb-1 text-gray-600 2xl:text-sm text-xs font-semibold",children:"Aadhar No"}),e.jsx("input",{...l.getFieldProps("aadhar"),type:"text",className:"form-control poppins block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",placeholder:"Enter aadhar no."}),e.jsx("span",{className:"text-red-600 absolute text-xs poppins",children:l.touched.aadhar&&l.errors.aadhar?l.errors.aadhar:null})]}),e.jsxs("div",{className:"form-group col-span-4 md:col-span-1 mb-2 md:px-4",children:[e.jsx("label",{className:"form-label poppins inline-block mb-1 text-gray-600 2xl:text-sm text-xs font-semibold",children:"PAN No."}),e.jsx("input",{...l.getFieldProps("pan"),type:"text",className:"form-control poppins block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",placeholder:"Enter pan no."}),e.jsx("span",{className:"text-red-600 absolute text-xs poppins",children:l.touched.pan&&l.errors.pan?l.errors.pan:null})]}),e.jsxs("div",{className:"form-group col-span-4 md:col-span-1 mb-2 md:px-4",children:[e.jsx("label",{className:"form-label poppins inline-block mb-1 text-gray-600 2xl:text-sm text-xs font-semibold",children:"email"}),e.jsx("input",{...l.getFieldProps("email"),type:"email",className:"form-control poppins block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",placeholder:"Enter email."}),e.jsx("span",{className:"text-red-600 absolute text-xs poppins",children:l.touched.email&&l.errors.email?l.errors.email:null})]}),e.jsxs("div",{className:"form-group col-span-4 md:col-span-1 mb-2 md:px-4",children:[e.jsxs("label",{className:"form-label poppins inline-block mb-1 text-gray-600 2xl:text-sm text-xs font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline poppins",children:"*"}),"Is-Armed-Force"]}),e.jsxs("select",{...l.getFieldProps("isArmedForce"),className:"form-control poppins block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"0",children:"No"}),e.jsx("option",{value:"1",children:"Yes"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs poppins",children:l.touched.isArmedForce&&l.errors.isArmedForce?l.errors.isArmedForce:null})]}),e.jsxs("div",{className:"form-group col-span-4 md:col-span-1 mb-2 md:px-4",children:[e.jsxs("label",{className:"form-label poppins inline-block mb-1 text-gray-600 2xl:text-sm text-xs font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline poppins",children:"*"}),"Is-Specially-Abled?"]}),e.jsxs("select",{...l.getFieldProps("isSpeciallyAbled"),className:"form-control poppins block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"0",children:"No"}),e.jsx("option",{value:"1",children:"Yes"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs poppins",children:l.touched.isSpeciallyAbled&&l.errors.isSpeciallyAbled?l.errors.isSpeciallyAbled:null})]}),e.jsxs("div",{className:"form-group col-span-4 md:col-span-1 mb-2 md:px-4",children:[e.jsxs("label",{className:"form-label poppins inline-block mb-1 text-gray-600 2xl:text-sm text-xs font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline poppins",children:"*"}),"Id Proof"]}),e.jsx("input",{...l.getFieldProps("ownerDoc"),className:"form-control poppins block w-full px-3 py-1.5 text-base md:text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",type:"file",accept:".jpg, .jpeg, .pdf"}),e.jsx("span",{className:"text-red-600 absolute text-xs poppins",children:l.touched.ownerDoc&&l.errors.ownerDoc?l.errors.ownerDoc:null})]}),e.jsx("div",{className:" flex justify-center items-end",children:e.jsx("div",{className:"md:px-10",children:e.jsx("div",{onClick:l.handleSubmit,className:"poppins 2xl:px-6 px-3 2xl:py-2.5 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:P?"Update":"Add"})})})]})})})]}),e.jsxs("div",{className:`${C=="translate-y-0 top-[200px]"?"hidden":"block"}    mt-2  md:py-4 md:px-0 md:pb-0 md:pt-0 rounded-lg  mx-auto w-full overflow-x-scroll`,children:[(x==null?void 0:x.length)!=0&&e.jsxs("table",{className:"min-w-full leading-normal mt-4 2xl:mt-0",children:[e.jsx("thead",{className:"font-semibold text-left text-sm bg-sky-50",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  poppins text-xs  text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  poppins text-xs  text-left",children:"Owner"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  poppins text-xs  text-left",children:"Gender"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  poppins text-xs  text-left",children:"DOB"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  poppins text-xs  text-left",children:"Guardian"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  poppins text-xs  text-left",children:"Relation"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  poppins text-xs  text-left",children:"Mobile No"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  poppins text-xs  text-left",children:"Aadhar"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  poppins text-xs  text-left",children:"PAN"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  poppins text-xs  text-left",children:"Email"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  poppins text-xs  text-left",children:"Is Armed"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  poppins text-xs  text-left",children:"Is Specially"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  poppins text-xs  text-left",children:"Id Proof"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  poppins text-xs  text-left",children:"Action"})]})}),e.jsx("tbody",{className:"text-sm",children:x==null?void 0:x.map((s,r)=>e.jsx(e.Fragment,{children:e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:r+1}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:u(s==null?void 0:s.ownerName)}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:u(s==null?void 0:s.gender)}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:u(s==null?void 0:s.dob)}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:u(s==null?void 0:s.guardianName)}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:u(s==null?void 0:s.relation)}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:u(s==null?void 0:s.mobileNo)}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:u(s==null?void 0:s.aadhar)}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:u(s==null?void 0:s.pan)}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:u(s==null?void 0:s.email)}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:s==null?void 0:s.isArmedForce}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:s==null?void 0:s.isSpeciallyAbled}),e.jsx("td",{className:"px-2 py-2 2xl:text-sm text-xs poppins text-left",children:(s==null?void 0:s.ownerDoc)!=""?e.jsx("span",{className:"text-2xl",children:e.jsx(Re,{})}):"NA"}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[!(s!=null&&s.ownerId)&&e.jsx(Ce,{onClick:()=>ge(r),className:"inline text-green-500 font-semibold text-lg cursor-pointer hover:text-green-700 relative hover:scale-150"}),s!=null&&s.ownerId?e.jsx(_e,{trigger:e.jsx("button",{className:"text-red-500 hover:text-red-600 rounded-md text-lg shadow-lg py-1 px-2",children:e.jsx(T,{})}),modal:!0,nested:!0,style:{zIndex:999},children:t=>e.jsx("div",{className:"h-screen w-screen flex-row justify-center items-center backdrop-blur-sm",children:e.jsxs("div",{className:"flex flex-col justify-center h-max w-max absolute top-[40%] right-[40%] bg-white px-8 py-2 rounde-md shadow-lg animate__animated animate__slideInLeft animate__faster rounded-md",children:[e.jsx("button",{className:"close text-end ",onClick:t,children:e.jsx("span",{className:"hover:bg-red-400 hover:text-white rounded-md px-1 ",children:"×"})}),e.jsx("div",{className:"text-base",children:"Are you sure want to delete ?"}),e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx("button",{className:"bg-red-200 hover:bg-red-300 shadow-md text-xs px-4 py-1 m-4 rounded-md",onClick:()=>{t(),_(r)},children:"Yes"}),e.jsx("button",{className:"bg-green-200 hover:bg-green-300 px-4 shadow-md text-xs py-1 m-4 rounded-md",onClick:t,children:"No"})]})]})})}):e.jsx(T,{onClick:()=>_(r),className:"inline ml-2 text-red-400 font-semibold text-lg cursor-pointer hover:text-red-700 relative hover:scale-150"})]})]})}))})]}),e.jsxs("div",{className:" my-1 bg-red-50 text-red-400 px-2 py-2 rounded-sm  opacity-80 2xl:mt-10 mt-5 text-sm w-full",children:[e.jsx(Ee,{className:"inline mr-2"}),"Click ",e.jsx("b",{children:"Add Owner"})," button to add owner of the property, You can add multiple owners by repeating the same method"]})]})]})]}),e.jsxs("div",{className:"bg-zinc-50 rounded-md shadow-sm relative",children:[e.jsx("div",{className:"px-4 py-1.5 text-gray-800 font-semibold uppercase poppins tracking-wider 2xl:text-base text-sm",children:"Upload Evidence for Forgery"}),e.jsx("hr",{className:"h-0 border-1 border-gray-300"}),e.jsxs("div",{className:"text-sm px-4 py-1.5 grid grid-cols-12",children:[y==null&&e.jsx("div",{className:"col-span-12 w-full text-center py-4 text-red-500 text-sm",children:"Select reason to get document list to upload..."}),y==null?void 0:y.map(s=>{var r,t,o,i;return e.jsxs("div",{className:"shadow-md col-span-12 grid grid-cols-12 text-sm px-2 sm:px-6 py-2 mt-2 my-2 gap-y-2 font-base poppins bg-zinc-50 rounded-sm mb-2",children:[e.jsxs("div",{className:"col-span-12 md:col-span-4 poppins 2xls:text-base md:text-sm text-xs",children:[(s==null?void 0:s.docName)==""?"Evidence":s==null?void 0:s.docName," :",e.jsx("span",{className:"font-semibold 2xls:text-base md:text-sm text-sm poppins"})]}),e.jsxs("div",{className:"col-span-12 md:col-span-4 poppins  2xls:text-base md:text-sm text-xs",children:[e.jsx("span",{className:"poppins",children:"Select Document :"})," ",e.jsx("br",{}),e.jsx("span",{className:"w-full",children:e.jsxs("select",{name:"docCode",onChange:n=>ae(n,s==null?void 0:s.docName),className:q+" poppins  2xls:text-base md:text-sm text-xs w-full",children:[e.jsx("option",{value:((r=s==null?void 0:s.masters)==null?void 0:r.length)==0?"other":"",selected:!0,children:((t=s==null?void 0:s.masters)==null?void 0:t.length)==0?"Other":"Select"}),((o=s==null?void 0:s.masters)==null?void 0:o.length)>0&&((i=s==null?void 0:s.masters)==null?void 0:i.map(n=>e.jsx(e.Fragment,{children:e.jsx("option",{value:n==null?void 0:n.documentCode,className:"poppins",children:n==null?void 0:n.docVal})})))]})})]}),e.jsxs("div",{className:"col-span-12 md:col-span-4 poppins flex flex-col  2xls:text-base md:text-sm text-xs",children:["Upload Document : ",e.jsx("br",{}),e.jsx("span",{children:e.jsx("input",{type:"file",onChange:n=>ie(n,s==null?void 0:s.docName),className:q+" poppins ",accept:".pdf,.jpg,.jpeg",name:"document",id:""})})]})]})})]})]}),e.jsx("div",{className:"text-xs text-red-600 col-span-9 italic mx-4 my-0",children:"Note : Only .pdf , .jpg and .jpeg file accepted.."})]}),e.jsxs("div",{className:"flex flex-row flex-wrap justify-between items-center mt-4",children:[e.jsx("div",{onClick:I.closePopUp,className:"cursor-pointer px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-dotted focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out poppins",children:"Close"}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:" px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-green-600 text-white font-medium text-xs leading-tight poppins rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-dotted focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:"Submit"})})]})]})]})};export{Ye as default};
