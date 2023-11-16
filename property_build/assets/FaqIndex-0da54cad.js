import{R as C,r as d,j as e,a0 as I,a1 as M,A as y,p as W,Q as N,g as A,q as O,s as j,w as E,b as F,a as T,B as H,L as $,a2 as z,n as S}from"./index-6178a477.js";/* empty css             */const B={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"transparent",border:"none"}};function P(s){const[h,m]=C.useState(!1),{post_deleteFaq:a}=A(),f=x=>{console.log("ID to be deleted",x);const r={id:x};y.post(a,r,W()).then(c=>(N.success("FAQ Deleted successfully"),i(),s==null?void 0:s.refresh())).catch(c=>(N.error("Failed to Deleted the FAQ"),i()))};d.useEffect(()=>{s.openDeleteModal>0&&m(!0)},[s.openDeleteModal]);function u(){}function i(){m(!1)}return e.jsx("div",{className:"",children:e.jsx(I,{isOpen:h,onAfterOpen:u,onRequestClose:i,style:B,contentLabel:"Example Modal",children:e.jsxs("div",{className:"bg-indigo-300 shadow-2xl p-5 m-5 rounded-md poppins",children:[e.jsxs("div",{className:"flow-root",children:[e.jsx("p",{className:"float-left text-center text-lg font-semibold",children:"Are you sure to Delete ?"}),e.jsxs("p",{onClick:i,className:"float-right cursor-pointer rounded-full bg-red-200 hover:bg-red-300 mx-3",children:[" ",e.jsx(M,{size:25})," "]})]}),e.jsxs("div",{className:"grid grid-cols-12",children:[e.jsx("div",{className:"col-span-10"}),e.jsx("div",{className:"col-span-2"})]}),e.jsx("p",{className:"border-b py-1 mb-3"}),e.jsxs("div",{className:"flex justify-center",children:[e.jsxs("button",{onClick:()=>f(s.deleteId),className:"rounded-md bg-red-300 hover:bg-red-400 shadow-lg py-1.5 text-sm px-3 m-3",children:[" ","Yes, Delete"," "]}),e.jsxs("button",{onClick:i,className:"rounded-md bg-green-300 hover:bg-green-400 shadow-lg py-1.5 text-sm px-3 m-3",children:[" ","Cancel"," "]})]})]})})})}const U={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"transparent",border:"none"}};function V(s){var c,o,b,w,v,q,_;const{post_editFaq:h}=A();console.log("getting data to edit =?> ",s==null?void 0:s.editData);const m=O({moduelName:j().required("Select module"),question:j().required("Write question"),answer:j().required("Write answer")}),a=E({initialValues:{moduelName:(c=s==null?void 0:s.editData)==null?void 0:c.module_id,question:(o=s==null?void 0:s.editData)==null?void 0:o.question,answer:(b=s==null?void 0:s.editData)==null?void 0:b.answer},enableReinitialize:!0,onSubmit:n=>{i(n)},validationSchema:m}),[f,u]=C.useState(!1),i=n=>{var p;const k={id:(p=s==null?void 0:s.editData)==null?void 0:p.id,question:n==null?void 0:n.question,answer:n==null?void 0:n.answer,moduleId:n==null?void 0:n.moduelName};y.post(h,k,F()).then(g=>(N.success("FAQ updated successfully"),r(),s==null?void 0:s.refresh())).catch(g=>(N.error("Failed to updated the FAQ"),r()))};d.useEffect(()=>{s.openEditFaq>0&&u(!0)},[s.openEditFaq]);function x(){}function r(){u(!1)}return e.jsx("div",{className:"",children:e.jsx(I,{isOpen:f,onAfterOpen:x,onRequestClose:r,style:U,contentLabel:"Example Modal",children:e.jsxs("div",{className:"bg-indigo-300 shadow-2xl p-5 m-5 rounded-md poppins w-[100vw] md:w-[50vw]",children:[e.jsxs("div",{className:"flow-root",children:[e.jsxs("p",{className:"float-left text-center text-lg font-semibold",children:["Edit FAQ"," "]}),e.jsxs("p",{onClick:r,className:"float-right cursor-pointer rounded-full bg-red-200 hover:bg-red-300 mx-3",children:[" ",e.jsx(M,{size:25})," "]})]}),e.jsx("p",{className:"border-b py-1 mb-3"}),e.jsx("div",{children:e.jsxs("form",{onSubmit:a.handleSubmit,onChange:a.handleChange,children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"late",className:"text-sm",children:"Module : "}),e.jsx("select",{type:"text",value:(w=a.values)==null?void 0:w.moduelName,name:"moduelName",id:"late",className:"animate__animated animate__fadeIn animate__faster form-control block w-full px-3 2xl:py-1 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:(v=s==null?void 0:s.moduleList)==null?void 0:v.map(n=>e.jsx(e.Fragment,{children:e.jsx("option",{value:n==null?void 0:n.id,children:n==null?void 0:n.module_name})}))}),e.jsx("span",{className:"text-red-600 text-xs",children:a.touched.moduelName&&a.errors.moduelName?a.errors.moduelName:null})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"late",className:"text-sm",children:"Question : "}),e.jsx("textarea",{cols:2,rows:2,placeholder:"Type Question",value:(q=a.values)==null?void 0:q.question,name:"question",id:"late",className:"animate__animated animate__fadeIn animate__faster form-control block w-full px-3 2xl:py-1 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 text-xs",children:a.touched.question&&a.errors.question?a.errors.question:null})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"late",className:"text-sm",children:"Answer : "}),e.jsx("textarea",{cols:2,rows:6,placeholder:"Type Answer",value:(_=a.values)==null?void 0:_.answer,name:"answer",id:"late",className:"animate__animated animate__fadeIn animate__faster form-control block w-full px-3 2xl:py-1 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 text-xs",children:a.touched.answer&&a.errors.answer?a.errors.answer:null})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("button",{type:"submit",className:"rounded-md bg-green-300 hover:bg-green-400  hover:text-black shadow-lg  py-1 text-sm px-3 m-3",children:[" ","Update"," "]})})]})})]})})})}const G={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"transparent",border:"none"}};function Y(s){var c;const{post_addFaq:h}=A(),m=O({moduelName:j().required("Select module"),question:j().required("Write question"),answer:j().required("Write answer")}),a=E({initialValues:{moduelName:"",question:"",answer:""},onSubmit:o=>{i(o)},validationSchema:m}),[f,u]=C.useState(!1),i=o=>{console.log("Data to be saved",o);const b={question:o==null?void 0:o.question,answer:o==null?void 0:o.answer,moduleId:o==null?void 0:o.moduelName};y.post(h,b,F()).then(w=>(N.success("FAQ added successfully"),r(),s==null||s.refresh(),a.resetForm())).catch(w=>(N.error("Failed to add the FAQ"),r()))};d.useEffect(()=>{s.openAddFaq>0&&u(!0)},[s.openAddFaq]);function x(){}function r(){u(!1)}return e.jsx("div",{className:"w-full",children:e.jsx(I,{isOpen:f,onAfterOpen:x,onRequestClose:r,style:G,contentLabel:"Example Modal",children:e.jsxs("div",{className:"bg-indigo-300 shadow-2xl p-5 m-5 rounded-md poppins w-[100vw] md:w-[50vw]",children:[e.jsxs("div",{className:"flow-root",children:[e.jsx("p",{className:"float-left text-center text-lg font-semibold",children:"Add FAQ"}),e.jsx("p",{onClick:r,className:"float-right cursor-pointer rounded-full bg-red-200 hover:bg-red-300 mx-3",children:e.jsx(M,{size:25})})]}),e.jsx("p",{className:"border-b py-1 mb-3"}),e.jsx("div",{children:e.jsxs("form",{onSubmit:a.handleSubmit,onChange:a.handleChange,children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"late",className:"text-sm",children:"Module : "}),e.jsxs("select",{type:"text",name:"moduelName",id:"late",className:"animate__animated animate__fadeIn animate__faster form-control block w-full px-3 2xl:py-1 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"",children:"Select"}),(c=s==null?void 0:s.moduleList)==null?void 0:c.map(o=>e.jsx(e.Fragment,{children:e.jsx("option",{value:o==null?void 0:o.id,children:o==null?void 0:o.module_name})}))]}),e.jsx("span",{className:"text-red-600 text-xs",children:a.touched.moduelName&&a.errors.moduelName?a.errors.moduelName:null})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"late",className:"text-sm",children:"Question : "}),e.jsx("textarea",{cols:2,rows:2,type:"text",placeholder:"Type Question",name:"question",id:"late",className:"animate__animated animate__fadeIn animate__faster form-control block w-full px-3 2xl:py-1 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 text-xs",children:a.touched.question&&a.errors.question?a.errors.question:null})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"late",className:"text-sm",children:"Answer : "}),e.jsx("textarea",{cols:2,rows:6,type:"text",placeholder:"Type Answer",name:"answer",id:"late",className:"animate__animated animate__fadeIn animate__faster form-control block w-full px-3 2xl:py-1 py-1 2xl:text-base text-sm font-normal text-gray-700  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 text-xs",children:a.touched.answer&&a.errors.answer?a.errors.answer:null})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{type:"submit",className:"rounded-md bg-green-300 hover:bg-green-400  hover:text-black shadow-lg  py-1 text-sm px-3 m-3",children:"Add"})})]})})]})})})}function X(){const{post_listFaq:s,post_moduleList:h}=A();T("FAQ Master");const[m,a]=d.useState(0),[f,u]=d.useState(0),[i,x]=d.useState(0),[r,c]=d.useState(0),[o,b]=d.useState([]),[w,v]=d.useState(),[q,_]=d.useState(),[n,k]=d.useState(),[p,g]=d.useState(!1),L=t=>{u(l=>l+1),v(t)},Q=t=>{x(l=>l+1),_(t),console.log("id to be edit is",t)};d.useEffect(()=>{console.log("entering 2"),g(!0),y.post(s,{},F()).then(t=>{var l;console.log("getting faq master list => ",t),k((l=t==null?void 0:t.data)==null?void 0:l.data),g(!1)}).catch(t=>{console.log("getting faq master list error =>",t),g(!1)}),y.post(h,{},F()).then(t=>{var l;console.log("getting module list list => ",t),b((l=t==null?void 0:t.data)==null?void 0:l.data),g(!1)}).catch(t=>{console.log("getting module list error =>",t),g(!1)})},[r]);const R=[{Header:"#",Cell:({row:t})=>e.jsx("div",{className:"pr-2",children:(t==null?void 0:t.index)+1})},{Header:"Module Name",Cell:({cell:t})=>{var l;return S((l=t.row.original)==null?void 0:l.module_name)}},{Header:"Question",Cell:({cell:t})=>{var l;return S((l=t.row.original)==null?void 0:l.question)}},{Header:"Answer",Cell:({cell:t})=>{var l;return S((l=t.row.original)==null?void 0:l.answer)}},{Header:"Action",accessor:"id",Cell:({cell:t})=>e.jsxs("div",{className:"flex flex-row flex-wrap gap-2",children:[e.jsx("button",{onClick:()=>{var l;return Q((l=t==null?void 0:t.row)==null?void 0:l.original)},className:"poppins bg-indigo-200 mx-1 px-5 py-1 rounded-md shadow-lg hover:shadow-xl hover:bg-indigo-400 hover:text-white text-black",children:"Edit"}),e.jsx("button",{onClick:()=>{var l,D;return L((D=(l=t==null?void 0:t.row)==null?void 0:l.original)==null?void 0:D.id)},className:"poppins bg-red-300 mx-1 px-3 py-1 rounded-md shadow-lg hover:shadow-xl hover:bg-red-400 hover:text-white text-black",children:"Delete"})]})}];return e.jsxs(e.Fragment,{children:[e.jsx(Y,{openAddFaq:m,moduleList:o,refresh:()=>c(t=>t+1)}),e.jsx(V,{openEditFaq:i,editData:q,moduleList:o,refresh:()=>c(t=>t+1)}),e.jsx(P,{openDeleteModal:f,deleteId:w,refresh:()=>c(t=>t+1)}),p&&e.jsx(H,{}),!p&&(n==null?void 0:n.length)!=null&&e.jsxs("div",{className:"poppins p-4 px-6",children:[e.jsx("div",{className:"uppercase font-semibold text-gray-700 text-2xl py-2 text-center tracking-[0.7rem]",children:"FAQ   Master"}),e.jsx("div",{className:"w-full h-[0.15rem] bg-gray-400 mb-6"}),e.jsx($,{assessmentType:!1,columns:R,dataList:n,children:e.jsxs("button",{onClick:()=>a(t=>t+1),className:"float-right bg-green-500 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-green-800 hover:text-white text-white flex items-center",children:[e.jsx(z,{})," Add FAQ"]})})]})]})}export{X as default};
