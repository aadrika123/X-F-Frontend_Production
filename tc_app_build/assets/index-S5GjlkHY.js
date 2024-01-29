import{e as de,D as _,Q as ee,b as w,j as e,E as se,r as k,x as U,c as p,R as ae}from"./index-tSYJy2m1.js";import{c as re}from"./index.esm-pLUSep0S.js";import{S}from"./SelectField-4N8sW67q.js";import"./index-ZS4GLSQF.js";import{u as te}from"./formik.esm-Cj1kbZGC.js";import{F as ie}from"./FormProvider-Z88UIU_N.js";import{T as ce}from"./TextField-XbeSlXOC.js";function ne({openForm:N,setOpenForm:M,moduleListData:l,menuDtl:d,isEdit:I,refetch:E,setIsEdit:L,userId:j,excludeIncludeType:o,dtlId:B}){var v,C,y,b,r,c,u,F,R,A,P,$,W,T,Y,O,Q,V,q,G,H,J,K,X,Z,D;const{mutateAsync:f,isLoading:g}=de({}),i=te({enableReinitialize:!0,initialValues:{moduleId:((C=(v=d==null?void 0:d.data)==null?void 0:v.data)==null?void 0:C.module_id)||"",roleId:((b=(y=d==null?void 0:d.data)==null?void 0:y.data)==null?void 0:b.role_id)||"",path:((c=(r=d==null?void 0:d.data)==null?void 0:r.data)==null?void 0:c.route)||"",menuName:((F=(u=d==null?void 0:d.data)==null?void 0:u.data)==null?void 0:F.menu_string)||"",isSidebar:((A=(R=d==null?void 0:d.data)==null?void 0:R.data)==null?void 0:A.is_sidebar)||"",isMenu:(($=(P=d==null?void 0:d.data)==null?void 0:P.data)==null?void 0:$.is_menu)||"",serial:((T=(W=d==null?void 0:d.data)==null?void 0:W.data)==null?void 0:T.serial)||"",userId:j||"",menuId:B||"",create:((O=(Y=d==null?void 0:d.data)==null?void 0:Y.data)==null?void 0:O.create)||"",read:((V=(Q=d==null?void 0:d.data)==null?void 0:Q.data)==null?void 0:V.read)||"",update:((G=(q=d==null?void 0:d.data)==null?void 0:q.data)==null?void 0:G.update)||"",delete:((J=(H=d==null?void 0:d.data)==null?void 0:H.data)==null?void 0:J.delete)||""},validationSchema:re({}),onSubmit:async s=>{var m,h;try{const t=await f({api:o=="Exclude"?_.userWiseRemoveMenu:_.userWiseAddMenu,data:{userId:j,menuId:s==null?void 0:s.menuId,create:s==null?void 0:s.create,read:s==null?void 0:s.read,update:s==null?void 0:s.update,delete:s==null?void 0:s.delete,isSidebar:s==null?void 0:s.isSidebar,isMenu:s==null?void 0:s.isMenu,roleId:s==null?void 0:s.roleId}});(m=t==null?void 0:t.data)!=null&&m.status&&(ee.success((h=t==null?void 0:t.data)==null?void 0:h.message),E(),n(),i.resetForm())}catch(t){ee.error(t==null?void 0:t.message)}}}),{values:a}=i,n=()=>{L(!1),M(!N)};w({api:U.roleList,config:{},options:{enabled:!0}});const x=s=>(s==null?void 0:s.layout)=="property"&&(a==null?void 0:a.moduleId)==1?"property":(s==null?void 0:s.layout)=="water"&&(a==null?void 0:a.moduleId)==2?"water":(s==null?void 0:s.layout)=="trade"&&(a==null?void 0:a.moduleId)==3?"trade":(s==null?void 0:s.layout)=="admin"&&(a==null?void 0:a.moduleId)==4?"admin":null;return e.jsxs(ie,{formik:i,children:[N&&e.jsx("div",{onClick:n,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(N?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:o=="Include"?e.jsx("div",{className:"relative p-4 w-full max-w-4xl max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsxs("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:["Add Menu (",o,") | ",j," | ",a==null?void 0:a.menuId," ","| ",a==null?void 0:a.roleId]}),e.jsxs("button",{onClick:()=>n(),type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),d!=null&&d.isLoading?e.jsx("div",{className:"flex justify-center items-center py-24",children:e.jsx("div",{className:"loader",children:"Loading..."})}):e.jsxs("div",{className:"p-4 md:p-5",children:[e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[e.jsx("div",{children:e.jsxs(S,{disabled:!0,label:"Select Module",value:a==null?void 0:a.moduleId,name:"moduleId",children:[e.jsx("option",{value:"",children:"Select"}),(X=(K=l==null?void 0:l.data)==null?void 0:K.data)==null?void 0:X.map((s,m)=>e.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.module_name},m))]})}),e.jsx("div",{children:e.jsxs(S,{disabled:!0,label:"Select Menu Name",value:a==null?void 0:a.menuName,name:"menuName",children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"admin",children:"Admin"}),(Z=se)==null?void 0:Z.map((s,m)=>{var h;return x(s)&&((h=s==null?void 0:s.pages)==null?void 0:h.map((t,z)=>e.jsx("option",{value:t.name,children:t.name},z)))})]})}),e.jsx("div",{children:e.jsxs(S,{disabled:!0,label:"Select Path",value:a==null?void 0:a.path,name:"path",children:[e.jsx("option",{value:"",children:"Select"}),(D=se)==null?void 0:D.map((s,m)=>{var h;return x(s)&&((h=s==null?void 0:s.pages)==null?void 0:h.map((t,z)=>t.name==(a==null?void 0:a.menuName)&&e.jsx("option",{value:"/amc-app/".concat(x(s),"/").concat(t.path).replace("/:id",""),children:"/amc-app/".concat(x(s),"/").concat(t.path)},z)))})]})}),e.jsx("div",{children:e.jsx(ce,{label:"Serial No",value:a==null?void 0:a.serial,name:"serial",type:"number",onInput:s=>s.target.value=Math.max(0,parseInt(s.target.value)).toString().slice(0,2)})}),e.jsx("div",{children:e.jsxs("div",{className:"flex gap-12 ",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx("input",{checked:a==null?void 0:a.isSidebar,type:"checkbox",...i.getFieldProps("isSidebar")}),e.jsx("h1",{className:"",children:"Is Sidebar"})]}),e.jsx("div",{children:"|"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("input",{checked:a==null?void 0:a.isMenu,type:"checkbox",...i.getFieldProps("isMenu")}),e.jsx("h1",{className:"",children:"Is Menu"})]})]})})]}),e.jsx("hr",{}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-4",children:[e.jsx("div",{children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx("input",{checked:a==null?void 0:a.create,type:"checkbox",...i.getFieldProps("create")}),e.jsx("h1",{className:"",children:"Create"})]})}),e.jsx("div",{children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx("input",{checked:a==null?void 0:a.read,type:"checkbox",...i.getFieldProps("read")}),e.jsx("h1",{className:"",children:"Read"})]})}),e.jsx("div",{children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx("input",{checked:a==null?void 0:a.update,type:"checkbox",...i.getFieldProps("update")}),e.jsx("h1",{className:"",children:"Update"})]})}),e.jsx("div",{children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx("input",{checked:a==null?void 0:a.delete,type:"checkbox",...i.getFieldProps("delete")}),e.jsx("h1",{className:"",children:"Delete"})]})})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[e.jsx(k.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:n,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Cancel"})}),e.jsx(k.Button,{type:"submit",size:"sm",loading:g,disabled:g,children:e.jsx("span",{children:"SUBMIT"})})]})]})]})}):e.jsx("div",{className:"relative p-4 w-full max-w-4xl max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsxs("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:["Remove Menu (",o,") | ",j," |"," ",a==null?void 0:a.menuId]}),e.jsxs("button",{onClick:()=>n(),type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),d!=null&&d.isLoading?e.jsx("div",{className:"flex justify-center items-center py-24",children:e.jsx("div",{className:"loader",children:"Loading..."})}):e.jsxs("div",{className:"p-4 md:p-5",children:[e.jsx("h1",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Are you sure you want to remove this menu?"}),e.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[e.jsx(k.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:n,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Cancel"})}),e.jsx(k.Button,{type:"submit",size:"sm",loading:g,disabled:g,children:e.jsx("span",{children:"SUBMIT"})})]})]})]})})})]})}function me(){var y,b;de({});const[N,M]=p.useState(!1),[l,d]=p.useState(""),[I,E]=p.useState(""),[L,j]=p.useState(!1);p.useState(""),p.useState(1),p.useState(10);const[o,B]=p.useState(null),[f,g]=ae.useState(null),[i,a]=ae.useState(""),n=w({api:U.getAllUser,config:{},options:{enabled:!0}}),x=w({api:_.userMenuList,config:{userId:f,excludeIncludeType:i},value:[i],options:{enabled:!!i,onSuccess:r=>{var u;const c=(u=r==null?void 0:r.data)==null?void 0:u.filter((F,R,A)=>R===A.findIndex(P=>P.route===F.route));B(c)}}}),v=w({api:U.moduleList,config:{},options:{enabled:!0}}),C=w({api:_.menuDtl,config:{id:l,roleId:I},value:[l,I],options:{enabled:!!l&&!!I}});return e.jsxs(e.Fragment,{children:[e.jsxs(k.Card,{children:[e.jsx("div",{className:"flex justify-between items-center px-5  py-4 rounded-tl-lg rounded-tr-lg",children:e.jsxs("div",{className:"flex gap-5",children:[e.jsx("div",{className:"w-52",children:e.jsxs(S,{onChange:r=>{g(r.target.value)},children:[e.jsx("option",{value:"",children:"Select Module"}),(b=(y=n==null?void 0:n.data)==null?void 0:y.data)==null?void 0:b.map((r,c)=>e.jsx("option",{value:r==null?void 0:r.id,children:r==null?void 0:r.name},c))]})}),e.jsx("div",{className:"w-52",children:e.jsxs(S,{disabled:!f,onChange:r=>{a(r.target.value)},children:[e.jsx("option",{value:"",children:"Select Module"}),[{id:"Exclude",name:"Added Menu"},{id:"Include",name:"Not Added Menu"}].map((r,c)=>e.jsx("option",{value:r.id,children:r.name},c))]})})]})}),e.jsxs("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:[e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"p-4",children:e.jsx("div",{className:"flex items-center",children:"#"})}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Module Name"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Role Name"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Menu Name"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Route Name"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Create"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Read"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Update"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),e.jsx("tbody",{children:o==null?void 0:o.map((r,c)=>e.jsxs("tr",{children:[e.jsx("td",{className:"w-4 p-4",children:e.jsx("div",{className:"flex items-center",children:c+1})}),e.jsx("td",{className:"px-6 py-4",children:r.module_name}),e.jsx("td",{className:"px-6 py-4",children:(r==null?void 0:r.role_name)||"User Wise Role"}),e.jsx("td",{className:"px-6 py-4",children:r.menu_string}),e.jsx("td",{className:"px-6 py-4",children:r.route}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"flex items-center gap-1",children:r.create?"Yes":"No"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"flex items-center gap-1",children:r.read?"Yes":"No"})}),e.jsx("td",{className:"px-6 py-4",children:e.jsx("div",{className:"flex items-center gap-1",children:r.update?"Yes":"No"})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:e.jsx("button",{onClick:()=>{M(!0),d(r==null?void 0:r.id),E(r==null?void 0:r.role_id),j(!0)},className:"text-indigo-600 hover:text-indigo-900",children:i==="Include"?"Add Menu":e.jsx("h1",{className:"text-red-500",children:"Remove Menu"})})})]},c))})]}),e.jsx("div",{className:"\r\n          w-full border-t border-gray-300 \r\n          "})]})]}),e.jsx(ne,{openForm:N,setOpenForm:M,moduleListData:v,menuDtl:C,isEdit:L,setIsEdit:j,userId:f,refetch:x==null?void 0:x.refetch,excludeIncludeType:i,dtlId:l})]})}export{me as default};
