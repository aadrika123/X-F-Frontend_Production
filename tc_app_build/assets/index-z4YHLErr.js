import{e as H,D as $,Q as J,b as T,j as a,E as G,r as E,m as K,c as y}from"./index-26-p7w-4.js";import{c as X,a as R}from"./index.esm-n36fjmXy.js";import{S as A}from"./SelectField-wGEaMXgP.js";import"./index-Z8Y5rR5v.js";import{u as Z}from"./formik.esm-gFKTrVOh.js";import{F as m}from"./FormProvider-GwJgoio4.js";import{T as D}from"./TextField-zZnWSXtK.js";import{S as aa}from"./PaginationState-JDMvnSEu.js";import"./ArrowRightIcon-I1KpqDhn.js";function ea({openForm:k,setOpenForm:Q,moduleListData:I,menuDtl:d,isEdit:w,refetch:Y,setIsEdit:v}){var S,O,l,j,U,g,M,_,C,P,q,F,z,s,r,o,i,V,W;const{mutateAsync:L,isLoading:B}=H({}),n=Z({enableReinitialize:!0,initialValues:{moduleId:((O=(S=d==null?void 0:d.data)==null?void 0:S.data)==null?void 0:O.module_id)||"",roleId:((j=(l=d==null?void 0:d.data)==null?void 0:l.data)==null?void 0:j.role_id)||"",path:((g=(U=d==null?void 0:d.data)==null?void 0:U.data)==null?void 0:g.route)||"",menuName:((_=(M=d==null?void 0:d.data)==null?void 0:M.data)==null?void 0:_.menu_string)||"",isSidebar:((P=(C=d==null?void 0:d.data)==null?void 0:C.data)==null?void 0:P.is_sidebar)||"",isMenu:((F=(q=d==null?void 0:d.data)==null?void 0:q.data)==null?void 0:F.is_menu)||"",serial:((s=(z=d==null?void 0:d.data)==null?void 0:z.data)==null?void 0:s.serial)||""},validationSchema:X({moduleId:R().required("Module is required"),roleId:R().required("Role is required"),path:R().required("Path is required"),menuName:R().required("Menu Name is required"),serial:R().required("Serial is required")}),onSubmit:async e=>{var x,h,t,f;try{const p=await L({api:w?$.updateMenu:$.addMenu,data:{id:((h=(x=d==null?void 0:d.data)==null?void 0:x.data)==null?void 0:h.id)||"",roleId:e==null?void 0:e.roleId,parentId:0,moduleId:e==null?void 0:e.moduleId,serial:e==null?void 0:e.serial,menuName:e==null?void 0:e.menuName,path:e==null?void 0:e.path,isSidebar:e==null?void 0:e.isSidebar,isMenu:e==null?void 0:e.isMenu}});(t=p==null?void 0:p.data)!=null&&t.status&&(J.success((f=p==null?void 0:p.data)==null?void 0:f.message),Y(),N(),n.resetForm())}catch(p){J.error(p==null?void 0:p.message,{delay:2e3})}}}),{values:c}=n,N=()=>{v(!1),Q(!k)},u=T({api:K.roleList,config:{},options:{enabled:!0}}),b=e=>(e==null?void 0:e.layout)=="property"&&(c==null?void 0:c.moduleId)==1?"property":(e==null?void 0:e.layout)=="water"&&(c==null?void 0:c.moduleId)==2?"water":(e==null?void 0:e.layout)=="trade"&&(c==null?void 0:c.moduleId)==3?"trade":(e==null?void 0:e.layout)=="adv-municipal-rental"&&(c==null?void 0:c.moduleId)==5?"adv-municipal-rental":(e==null?void 0:e.layout)=="admin"&&(c==null?void 0:c.moduleId)==8?"admin":null;return a.jsxs(m,{formik:n,children:[k&&a.jsx("div",{onClick:N,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),a.jsx("div",{tabIndex:-1,"aria-hidden":"true",className:"".concat(k?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:a.jsx("div",{className:"relative p-4 w-full max-w-4xl max-h-full",children:a.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[a.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[a.jsxs("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:["Add Menu ",JSON.stringify(c==null?void 0:c.moduleId)]}),a.jsxs("button",{onClick:()=>N(),type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[a.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:a.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),a.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),d!=null&&d.isLoading?a.jsx("div",{className:"flex justify-center items-center py-24",children:a.jsx("div",{className:"loader",children:"Loading..."})}):a.jsxs("div",{className:"p-4 md:p-5",children:[a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[a.jsx("div",{children:a.jsxs(A,{label:"Select Module",formik:n,name:"moduleId",children:[a.jsx("option",{value:"",children:"Select"}),(o=(r=I==null?void 0:I.data)==null?void 0:r.data)==null?void 0:o.map((e,x)=>a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.module_name},x))]})}),a.jsx("div",{children:a.jsxs(A,{label:"Select Role",formik:n,name:"roleId",children:[a.jsx("option",{value:"",children:"Select"}),(i=u==null?void 0:u.data)==null?void 0:i.data.map((e,x)=>a.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.role_name},x))]})}),a.jsx("div",{children:a.jsxs(A,{label:"Select Menu Name",formik:n,name:"menuName",children:[a.jsx("option",{value:"",children:"Select"}),(V=G)==null?void 0:V.map((e,x)=>{var h;return b(e)&&((h=e==null?void 0:e.pages)==null?void 0:h.map((t,f)=>a.jsx("option",{value:t.name,children:t.name},f)))})]})}),a.jsx("div",{children:a.jsxs(A,{label:"Select Path",formik:n,name:"path",children:[a.jsx("option",{value:"",children:"Select"}),(W=G)==null?void 0:W.map((e,x)=>{var h;return b(e)&&((h=e==null?void 0:e.pages)==null?void 0:h.map((t,f)=>t.name==(c==null?void 0:c.menuName)&&(t.path=="/daily-license-app"?a.jsx("option",{value:t.path,children:t.path},f):a.jsx("option",{value:"/amc-app/".concat(b(e),"/").concat(t.path).replace("/:id",""),children:"/amc-app/".concat(b(e),"/").concat(t.path)},f))))})]})}),a.jsx("div",{children:a.jsx(D,{label:"Serial No",formik:n,name:"serial",type:"number",onInput:e=>e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,2)})}),a.jsx("div",{children:a.jsxs("div",{className:"flex gap-12 lg:mt-8",children:[a.jsxs("div",{className:"flex gap-3",children:[a.jsx("input",{checked:c==null?void 0:c.isSidebar,type:"checkbox",...n.getFieldProps("isSidebar")}),a.jsx("h1",{className:"",children:"Is Sidebar"})]}),a.jsx("div",{children:"|"}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("input",{checked:c==null?void 0:c.isMenu,type:"checkbox",...n.getFieldProps("isMenu")}),a.jsx("h1",{className:"",children:"Is Menu"})]})]})})]}),a.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[a.jsx(E.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:N,className:"mr-1 bg-gray-300",children:a.jsx("span",{children:"Cancel"})}),a.jsx(E.Button,{type:"submit",size:"sm",loading:B,disabled:B,children:a.jsx("span",{children:"SUBMIT"})})]})]})]})})})]})}function ia(){var M,_,C,P,q,F,z;const{mutateAsync:k,isLoading:Q}=H({}),[I,d]=y.useState(!1),[w,Y]=y.useState(""),[v,L]=y.useState(""),[B,n]=y.useState(!1),[c,N]=y.useState(""),[u,b]=y.useState(1),[S,O]=y.useState(10),l=T({api:$.listMenu,config:{page:u,pageSize:S,moduleId:c},value:[c,u,S],options:{enabled:!0}}),j=T({api:K.moduleList,config:{},options:{enabled:!0}}),U=T({api:$.menuDtl,config:{id:w,roleId:v},value:[w,v],options:{enabled:!!w&&!!v}}),g=async(s,r)=>{var o;try{const i=await k({api:$.updateMenu,data:{id:r==null?void 0:r.id,roleId:r==null?void 0:r.role_id,parentId:0,moduleId:r==null?void 0:r.module_id,serial:r==null?void 0:r.serial,menuName:r==null?void 0:r.menu_string,path:r==null?void 0:r.route,isSidebar:r==null?void 0:r.is_sidebar,isMenu:r==null?void 0:r.is_menu,create:s.target.value==="create"?s.target.checked:r==null?void 0:r.create,read:s.target.value==="read"?s.target.checked:r==null?void 0:r.read,update:s.target.value==="update"?s.target.checked:r==null?void 0:r.update,status:s.target.value==="status"?s.target.checked:r.is_active}});(o=i==null?void 0:i.data)!=null&&o.status&&(J.success("Menu Updated Successfully"),l==null||l.refetch())}catch(i){console.log(i)}};return a.jsxs(a.Fragment,{children:[a.jsxs(E.Card,{children:[a.jsxs("div",{className:"flex justify-between items-center px-5  py-4 rounded-tl-lg rounded-tr-lg",children:[a.jsx("h1",{className:"text-base font-semibold text-gray-100",children:a.jsxs(A,{onChange:s=>{N(s.target.value)},children:[a.jsx("option",{value:"",children:"Select Module"}),(_=(M=j==null?void 0:j.data)==null?void 0:M.data)==null?void 0:_.map((s,r)=>a.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.module_name},r))]})}),a.jsx(E.Button,{size:"sm",color:"blue",onClick:()=>d(!0),children:"Create Menu"})]}),a.jsxs("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:[a.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[a.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400",children:a.jsxs("tr",{children:[a.jsx("th",{scope:"col",className:"p-4",children:a.jsx("div",{className:"flex items-center",children:"#"})}),a.jsx("th",{scope:"col",className:"px-6 py-3",children:"Module Name"}),a.jsx("th",{scope:"col",className:"px-6 py-3",children:"Role Name"}),a.jsx("th",{scope:"col",className:"px-6 py-3",children:"Menu Name"}),a.jsx("th",{scope:"col",className:"px-6 py-3",children:"Route Name"}),a.jsx("th",{scope:"col",className:"px-6 py-3",children:"Create"}),a.jsx("th",{scope:"col",className:"px-6 py-3",children:"Read"}),a.jsx("th",{scope:"col",className:"px-6 py-3",children:"Update"}),a.jsx("th",{scope:"col",className:"px-6 py-3",children:"Status"}),a.jsx("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),a.jsx("tbody",{children:(q=(P=(C=l==null?void 0:l.data)==null?void 0:C.data)==null?void 0:P.data)==null?void 0:q.map((s,r)=>a.jsxs("tr",{children:[a.jsx("td",{className:"w-4 p-4",children:a.jsx("div",{className:"flex items-center",children:r+1})}),a.jsx("td",{className:"px-6 py-4",children:s.module_name}),a.jsx("td",{className:"px-6 py-4",children:s.role_name}),a.jsx("td",{className:"px-6 py-4",children:s.menu_string}),a.jsx("td",{className:"px-6 py-4",children:s.route}),a.jsx("td",{className:"px-6 py-4",children:a.jsxs("div",{className:"flex items-center gap-1",children:[s.create?"Yes":"No",a.jsx("input",{onChange:o=>{g(o,s)},value:"create",type:"checkbox",checked:(s==null?void 0:s.create)===null?!1:s==null?void 0:s.create})]})}),a.jsx("td",{className:"px-6 py-4",children:a.jsxs("div",{className:"flex items-center gap-1",children:[s.read?"Yes":"No",a.jsx("input",{onChange:o=>{g(o,s)},value:"read",type:"checkbox",checked:(s==null?void 0:s.read)===null?!1:s==null?void 0:s.read})]})}),a.jsx("td",{className:"px-6 py-4",children:a.jsxs("div",{className:"flex items-center gap-1",children:[s.update?"Yes":"No",a.jsx("input",{onChange:o=>{g(o,s)},value:"update",type:"checkbox",checked:(s==null?void 0:s.update)===null?!1:s==null?void 0:s.update})]})}),a.jsx("td",{className:"px-6 py-4",children:a.jsx(E.Switch,{name:"status",type:"checkbox",onChange:o=>{g(o,s)},value:"status",checked:(s==null?void 0:s.is_active)==null?!1:s==null?void 0:s.is_active,ripple:!0,className:"h-full w-full checked:bg-[#2ec946]",containerProps:{className:"w-11 h-6"},circleProps:{className:"before:hidden left-0.5 border-none"}})}),a.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:a.jsx("button",{onClick:()=>{d(!0),Y(s==null?void 0:s.id),L(s==null?void 0:s.role_id),n(!0)},className:"text-indigo-600 hover:text-indigo-900",children:"Edit"})})]},r))})]}),a.jsx("div",{className:"\n          w-full border-t border-gray-300 \n          "}),a.jsx("div",{className:"py-2 px-4",children:a.jsx(aa,{page:u,setPage:b,perPage:S,setPerPage:O,noOfPage:(z=(F=l==null?void 0:l.data)==null?void 0:F.data)==null?void 0:z.last_page})})]})]}),a.jsx(ea,{openForm:I,setOpenForm:d,moduleListData:j,menuDtl:U,isEdit:B,setIsEdit:n,refetch:l==null?void 0:l.refetch})]})}export{ia as default};
