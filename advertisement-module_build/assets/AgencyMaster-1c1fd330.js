import{r as d,c as Ne,b as we,d as ye,e as z,f as _,a0 as V,g as l,F as f,j as t,l as _e,a1 as K,a2 as Q,O as Ae,n as m,a3 as Ce,S as ke,a4 as Se,A as Fe}from"./index-061168d8.js";import{L as W,R as Ee}from"./ListTable-79946600.js";const Ie=()=>{const{api_updateRole:X,api_deletedRole:Z,api_listRole:H,api_addagency:I,api_agencyupdate:v,api_agencydeleteuser:ee,api_getdataagency:re,api_assignRole:te}=Fe(),u=d.useRef(),[x,A]=d.useState(!1),[oe,M]=d.useState(!1),[ze,ne]=d.useState(""),[Pe,ie]=d.useState(!1),[c,se]=d.useState(""),[P,q]=d.useState(null),[y,C]=d.useState([]),[p,le]=d.useState([]),[g,$]=d.useState(null),[ae,j]=d.useState(!1),[o,$e]=d.useState("user"),[k,L]=d.useState(null),[B,S]=d.useState(null),D="border border-sky-800 text-sky-800 mx-1 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white",T="border border-red-400 text-red-400 mx-1 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-red-800 hover:text-white",U="float-right bg-[#1A4D8C] px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-[#113766] hover:text-white text-white flex items-center",de="text-gray-800 text-sm",O="border focus:outline-none drop-shadow-sm focus:drop-shadow-md px-4 py-1 text-gray-700 shadow-black placeholder:text-sm",ce="block w-full border focus:outline-none drop-shadow-sm focus:drop-shadow-md p-1 text-sm text-slate-500 file:mr-4 file:py-1 file:px-4 file:rounded-sm file:border file:text-xs file:font-semibold file:bg-zinc-100 hover:file:bg-zinc-200",pe=e=>`px-4 py-1 text-sm bg-${e}-500 hover:bg-${e}-600 select-none rounded-sm hover:drop-shadow-md text-white`,N=(e,r)=>{ie(e),ne(r)},w=(e,r=null)=>{switch(se(e),console.log(e,":::::::::",o,r),e){case"add":break;case"edit":$(r),o=="role"&&s.setFieldValue("role",r==null?void 0:r.role_name),o=="user"&&(s.setFieldValue("agencyName",(r==null?void 0:r.agency_name)||""),s.setFieldValue("agencyCode",(r==null?void 0:r.agency_code)||""),s.setFieldValue("correspondingAddress",(r==null?void 0:r.address)||""),s.setFieldValue("mobileNo",r==null?void 0:r.mobile),s.setFieldValue("email",r==null?void 0:r.email),s.setFieldValue("contactPerson",r==null?void 0:r.contact_person),s.setFieldValue("gstNo",r==null?void 0:r.gst_no),s.setFieldValue("panNo",r==null?void 0:r.pan_no),s.setFieldValue("signature",r==null?void 0:r.signature),s.setFieldValue("profile",r==null?void 0:r.profile_image));break;case"delete":q(r);break;case"assign":$(r),q(r==null?void 0:r.id),S((r==null?void 0:r.wf_role_id)||"");break}u.current.showModal()},he=[{Header:"#",Cell:({row:e})=>t("div",{className:"pr-2",children:(e==null?void 0:e.index)+1})},{Header:"Roles",accessor:"role_name",Cell:({cell:e})=>{var r;return m((r=e.row.original)==null?void 0:r.role_name)}},{Header:"Created At",accessor:"date",Cell:({cell:e})=>{var r;return Ce((r=e.row.original)==null?void 0:r.date)}},{Header:"Action",accessor:"id",Cell:({cell:e})=>l("div",{className:"flex flex-row flex-wrap gap-2",children:[t("button",{onClick:()=>{var r;return w("edit",(r=e==null?void 0:e.row)==null?void 0:r.original)},className:D,children:"Edit"}),t("button",{onClick:()=>{var r,n;return w("delete",(n=(r=e==null?void 0:e.row)==null?void 0:r.original)==null?void 0:n.id)},className:T,children:"Delete"})]})}],ge=[{Header:"#",Cell:({row:e})=>t("div",{className:"pr-2",children:(e==null?void 0:e.index)+1})},{Header:"Agency Name",accessor:"agency_name",Cell:({cell:e})=>{var r;return m((r=e.row.original)==null?void 0:r.agency_name)}},{Header:"Agency Code",accessor:"agency_code",Cell:({cell:e})=>{var r;return m((r=e.row.original)==null?void 0:r.agency_code)}},{Header:"Address",accessor:"address",Cell:({cell:e})=>{var r;return m((r=e.row.original)==null?void 0:r.address)}},{Header:"Mobile No.",accessor:"mobile",Cell:({cell:e})=>{var r;return m((r=e.row.original)==null?void 0:r.mobile)}},{Header:"E-mail",accessor:"email",Cell:({cell:e})=>{var r;return m((r=e.row.original)==null?void 0:r.email)}},{Header:"Contact Person",accessor:"contact_person",Cell:({cell:e})=>{var r;return m((r=e.row.original)==null?void 0:r.contact_person)}},{Header:"Gst No",accessor:"gst_no",Cell:({cell:e})=>{var r;return m((r=e.row.original)==null?void 0:r.gst_no)}},{Header:"Pan No",accessor:"pan_no",Cell:({cell:e})=>{var r;return m((r=e.row.original)==null?void 0:r.pan_no)}},{Header:"Action",accessor:"id",Cell:({cell:e})=>l("div",{className:"flex items-center flex-wrap flex-row gap-1",children:[t("button",{onClick:()=>{var r;return w("edit",(r=e==null?void 0:e.row)==null?void 0:r.original)},className:D,children:"Edit"}),t("button",{onClick:()=>{var r,n;return w("delete",(n=(r=e==null?void 0:e.row)==null?void 0:r.original)==null?void 0:n.id)},className:T,children:"Delete"})]})}],F=[{title:"Role",key:"role",width:` w-full ${o=="role"?"block ":"hidden "}`,type:o=="role"?"text":"select",hint:"Enter role",required:!0,options:p,okey:"id",ovalue:"role_name",required:o=="role"&&!0},{title:"Agency Name",key:"agencyName",width:`md:w-[48%] w-full ${o=="user"?"block ":"hidden "}`,type:"text",hint:"Enter Agency name",required:o=="user"&&!0},{title:"Corresponding Adress",key:"correspondingAddress",width:`md:w-[48%] w-full ${o=="user"?"block ":"hidden "}`,type:"text",hint:"Enter Address",required:o=="user"&&!0},{title:"Mobile No.",key:"mobileNo",width:`md:w-[48%] w-full ${o=="user"?"block ":"hidden "}`,type:"text",hint:"Enter mobile no.",required:o=="user"&&!0},{title:"E-Mail",key:"email",width:`md:w-[48%] w-full ${o=="user"?"block ":"hidden "}`,type:"email",hint:"Enter email",required:o=="user"&&!0},{title:"Contact Person",key:"contactPerson",width:`md:w-[48%] w-full ${o=="user"?"block ":"hidden "}`,type:"text",hint:"Enter Contact Person",required:o=="user"&&!0},{title:"Gst No",key:"gstNo",width:`md:w-[48%] w-full ${o=="user"?"block ":"hidden "}`,type:"text",hint:"Enter Gst No",required:o=="user"&&!1},{title:"Pan No",key:"panNo",width:` w-full ${o=="user"?"block ":"hidden "}`,type:"text",hint:"Enter Pan No",required:o=="user"&&!1}],fe=Ne().shape([...F].reduce((e,r)=>(r!=null&&r.required&&(e[r.key]=we().required(r==null?void 0:r.hint)),e),{})),s=ye({initialValues:{role:"",agencyName:"",correspondingAddress:"",mobileNo:"",email:"",contactPerson:"",gstNo:"",panNo:"",profile:""},enableReinitialize:!0,validationSchema:fe,onSubmit:e=>{G(e)}}),R=()=>{C([]),A(!0);let e;o=="role"&&(e=H),o=="user"&&(e=re),z.post(e,{},_()).then(r=>{var n,i,a,b,h,E;(n=r==null?void 0:r.data)!=null&&n.status?(C((a=(i=r==null?void 0:r.data)==null?void 0:i.data)==null?void 0:a.data),console.log("chandan",(h=(b=r==null?void 0:r.data)==null?void 0:b.data)==null?void 0:h.data)):(N(!0,V((E=r==null?void 0:r.data)==null?void 0:E.message)),C([])),console.log("user role list response => ",r)}).catch(r=>{N(!0,"Server Error! Please try again later."),C([]),console.log("error user role list => ",r)}).finally(()=>{A(!1),$(null),setSignDoc(null),L(null),S(null),u.current.close()})},me=(e,r="",n,i="",a="",b=!1,h=[],E="",xe="")=>l("div",{className:`flex flex-col ${i} `,children:[r!=""&&l("label",{htmlFor:e,className:de,children:[r," ",b&&t("span",{className:"text-red-500 text-xs font-bold",children:"*"})," : "]}),n!="select"&&n!="file"&&t("input",{...s.getFieldProps(e),type:n,className:O+` ${s.touched[e]&&s.errors[e]?" border-red-200 placeholder:text-red-400 ":" focus:border-zinc-300 border-zinc-200"}`,name:e,id:"",placeholder:a}),n=="file"&&t("input",{type:"file",className:ce+`${s.touched[e]&&s.errors[e]?" border-red-200 placeholder:text-red-400 text-red-400 file:border-red-200 file:text-red-400":" focus:border-zinc-300 border-zinc-200 file:border-zinc-300 file:text-gray-600"}`,name:e,id:"",placeholder:a,accept:".jpg, .jpeg, .png"}),n=="select"&&t("select",{...s.getFieldProps(e),className:O+` ${s.touched[e]&&s.errors[e]?" border-red-200 placeholder:text-red-400 text-red-400":" focus:border-zinc-300 border-zinc-200 "}`,children:ae?t("option",{children:"Loading..."}):l(f,{children:[t("option",{value:null,children:"Select"}),typeof h=="object"&&(h==null?void 0:h.map(J=>t("option",{className:"",value:J[E],children:J[xe]})))]})})]}),G=e=>{M(!0),u.current.close();let r,n,i=new FormData;switch(c){case"add":o=="role"&&(r={roleName:e==null?void 0:e.role},n=I),o=="user"&&(i.append("agencyName",e==null?void 0:e.agencyName),i.append("correspondingAddress",e==null?void 0:e.correspondingAddress),i.append("mobileNo",e==null?void 0:e.mobileNo),i.append("email",e==null?void 0:e.email),i.append("contactPerson",e==null?void 0:e.contactPerson),i.append("gstNo",e==null?void 0:e.gstNo),i.append("panNo",e==null?void 0:e.panNo),k&&i.append("profile",k),n=I);break;case"edit":o=="role"&&(r={roleId:g==null?void 0:g.id,roleName:e==null?void 0:e.role},n=X),o=="user"&&(i.append("UserId",g==null?void 0:g.id),i.append("agencyName",e==null?void 0:e.agencyName),i.append("agencyCode",e==null?void 0:e.agencyCode),i.append("correspondingAddress",e==null?void 0:e.correspondingAddress),i.append("mobileNo",e==null?void 0:e.mobileNo),i.append("email",e==null?void 0:e.email),i.append("contactPerson",e==null?void 0:e.contactPerson),i.append("gstNo",e==null?void 0:e.gstNo),i.append("panNo",e==null?void 0:e.panNo),k&&i.append("profile",k),n=v);break;case"delete":o=="role"&&(n=Z,r={roleId:P}),o=="user"&&(n=ee,i.append("id",P));break}z.post(n,o=="user"?i:r,o=="user"?_():_()).then(a=>{var b,h;(b=a==null?void 0:a.data)!=null&&b.status?R():N(!0,V((h=a==null?void 0:a.data)==null?void 0:h.message)),console.log("fp violation response => ",a)}).catch(a=>{N(!0,"Server Error! Please try again later."),console.log("error violation list => ",a)}).finally(()=>{M(!1),s.resetForm()})},ue=()=>{j(!0),z.post(H,{},_()).then(e=>{var r,n;(r=e==null?void 0:e.data)!=null&&r.status&&le((n=e==null?void 0:e.data)==null?void 0:n.data),console.log("fp department list response => ",e)}).catch(e=>{console.log("error fp department list => ",e)}).finally(()=>{j(!1)})},Y=e=>{var i;const r=e.target.name,n=e.target.value;if(r=="mobileNo"&&s.setFieldValue("mobileNo",ke(n,s.values.mobileNo,10)),r=="profile"){let a=(i=e==null?void 0:e.target)==null?void 0:i.files[0];if(!Se(a)){s.setFieldValue("profile","");return}L(a)}r=="roleAssign"&&S(n)},be=()=>{A(!0);let e={userId:P,roleId:B};z.post(te,e,_()).then(r=>{var n,i;(n=r==null?void 0:r.data)!=null&&n.status?R():N(!0,V((i=r==null?void 0:r.data)==null?void 0:i.message)),console.log("fp role assign response => ",r)}).catch(r=>{N(!0,"Server Error! Please try again later."),console.log("error fp role assign => ",r)}).finally(()=>{A(!1),u.current.close()})};return d.useEffect(()=>{o!="department"&&ue(),R()},[o]),l(f,{children:[oe&&t(_e,{}),l("div",{className:"poppins p-4 px-6",children:[t("div",{className:"uppercase font-semibold text-gray-700 text-2xl py-2 text-center tracking-[0.5rem]",children:"Agency Master"}),t("div",{className:"w-full h-[0.15rem] bg-gray-400 mb-6"}),x&&t(K,{}),!x&&t(f,{children:(y==null?void 0:y.length)>0?l(f,{children:[l("button",{onClick:()=>w("add"),className:U+"capitalize flex gap-1 items-center",children:[t(Q,{})," Add ",t("span",{className:"capitalize",children:"Agency"})]}),o=="role"&&t(W,{columns:he,dataList:y}),o=="user"&&t(W,{columns:ge,dataList:y})]}):l(f,{children:[t("div",{className:"flex justify-end mb-2",children:l("button",{onClick:()=>w("add"),className:U+"capitalize flex gap-1 items-center",children:[t(Q,{})," Add ",t("span",{className:"capitalize",children:o})]})}),t("div",{className:"bg-red-100 text-red-500 py-2 text-lg font-semibold text-center border border-red-500 drop-shadow-sm",children:"Oops! No Data Found."})]})})]}),l("dialog",{ref:u,className:`relative overflow-clip animate__animated animate__zoomIn animate__faster w-full ${o=="role"&&"md:w-[21rem]"} ${o=="user"&&c!="delete"&&"md:w-[50rem]"} ${c=="delete"&&"md:w-[21rem]"} ${c=="assign"&&"md:w-[40rem]"}`,children:[c!="delete"&&t("span",{onClick:()=>(u.current.close(),s.resetForm(),S(null)),className:"block p-1 bg-red-100 hover:bg-red-500 rounded-full hover:text-white cursor-pointer transition-all duration-200 absolute top-2 right-2",children:t(Ee,{})}),c!="delete"&&c!="assign"&&l("form",{onChange:e=>(s.handleChange(e),Y(e)),onSubmit:s.handleSubmit,className:"p-4 px-8 py-6 shadow-lg",children:[l("section",{className:"flex flex-row justify-between gap-4 flex-wrap",children:[l("header",{className:"w-full font-semibold text-xl capitalize text-sky-700 border-b pb-1 text-center",children:[c," Agency"]}),c=="edit"&&o=="user"&&t(f,{children:t("div",{className:"w-full grid grid-cols-12 items-center gap-4 mb-4 mt-2"})}),F==null?void 0:F.map(e=>me(e==null?void 0:e.key,e==null?void 0:e.title,e==null?void 0:e.type,e==null?void 0:e.width,e==null?void 0:e.hint,e==null?void 0:e.required,e==null?void 0:e.options,e==null?void 0:e.okey,e==null?void 0:e.ovalue))]}),t("footer",{className:"mt-4 flex justify-center",children:l("button",{type:"submit",className:pe("green"),children:[c=="add"&&"Add",c=="edit"&&"Update"]})})]}),c=="delete"&&t(f,{children:l("div",{className:" z-50 px-6 py-4 flex flex-col gap-4 ",children:[l("div",{className:"flex items-center gap-6",children:[t("span",{className:"text-red-500 bg-red-100 p-2 block rounded-full drop-shadow-md shadow-red-300",children:t(Ae,{size:25})}),l("div",{className:"flex flex-col gap-2",children:[t("span",{className:"text-xl font-semibold border-b pb-1",children:"Confirmation"}),t("span",{className:"text-base",children:"Are you sure want to delete ?"})]})]}),l("div",{className:"flex justify-end gap-2",children:[t("button",{className:"text-white bg-slate-400 hover:bg-slate-500 px-4 py-1 text-sm ",onClick:()=>u.current.close(),children:"No"}),t("button",{className:"text-white bg-red-500 hover:bg-red-600 px-4 py-1 text-sm ",onClick:()=>G(),children:"Yes"})]})]})}),c=="assign"&&t(f,{children:l("div",{className:"p-4 px-8 py-6 shadow-lg",children:[l("header",{className:"w-full font-semibold text-xl capitalize text-sky-700 border-b pb-1 mt-4 text-center",children:["Assign Role to ",t("span",{className:"text-amber-600",children:g==null?void 0:g.user_name})]}),!x&&Array.isArray(p)&&(p==null?void 0:p.length)>0&&t("div",{className:" mt-4 animate__animated animate__fadeIn animate__faster",children:t("button",{onClick:()=>be(),className:"float-right bg-green-500 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-green-600 hover:text-white text-white flex items-center mb-1",children:"Assign"})}),l("div",{className:"flex flex-col h-[40vh] w-full overflow-y-auto md:overflow-x-hidden mt-6",children:[l("div",{className:"w-full grid grid-cols-12 items-center gap-2 bg-slate-500 text-white font-semibold border border-slate-200 px-4 py-2",children:[t("div",{className:"col-span-3",children:"Sl. No."}),t("div",{className:"col-span-6",children:"Role Name"}),t("div",{className:"col-span-3 text-end",children:t("span",{children:"Action"})})]}),x&&t(K,{}),!x&&Array.isArray(p)&&(p==null?void 0:p.map((e,r)=>t(f,{children:l("div",{className:"w-full grid grid-cols-12 items-center gap-2 bg-slate-100 border-b hover:bg-white pb-1 p-4 animate__animated animate__fadeIn animate__faster",children:[t("div",{className:"col-span-1",children:r+1}),t("div",{className:"col-span-10",children:e==null?void 0:e.role_name}),t("div",{className:"col-span-1",children:t("label",{class:"inline-flex items-center px-4",children:t("input",{type:"radio",name:"roleAssign",checked:B==(e==null?void 0:e.id)||"",value:e==null?void 0:e.id,onChange:Y,class:"cursor-pointer form-radio h-5 w-5 text-slate-800"})})})]},r)}))),!x&&Array.isArray(p)&&(p==null?void 0:p.length)==0&&t("div",{className:"w-full text-center text-red-400 font-semibold pb-1 p-4",children:"No Roles Available"})]})]})})]})]})};export{Ie as default};