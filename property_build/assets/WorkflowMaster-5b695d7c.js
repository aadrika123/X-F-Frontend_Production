import{J as g,g as F,r as o,l as Ie,m as C,o as Le,K as f,L as We,j as e,O as U,Q as _e,T as Z,U as Fe,V as Ee,W as Me,X as V,Y as le,Z as _,$ as $e,a0 as Re,a1 as Oe,a2 as qe,a3 as Ae,E as ee,a4 as Be,a5 as Te,a6 as Pe,a7 as N,a8 as ae,a9 as H,aa as oe,ab as Ue}from"./index-bfae062f.js";import{u as Ve}from"./useQuery-c386aede.js";g.node,g.number.isRequired,g.number.isRequired;const He="/assets/ill-7e2029c8.svg",Ge="/assets/delete-85371ce6.svg",te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};F.setAppElement("#modal");function Je(a){o.useState(0);const[i,n]=o.useState(!1),[r,d]=o.useState(!1),[c,u]=o.useState(!1);o.useState([]);const[x,D]=o.useState(""),[ne,J]=o.useState(""),[j,Q]=o.useState(null),[E,ie]=o.useState([]),[M,de]=o.useState(),[$,ce]=o.useState(),[R,ue]=o.useState([]);o.useState([]);const[v,I]=o.useState([]),[me,z]=o.useState(""),[y,L]=o.useState([]),[k,W]=o.useState([]),[xe,K]=o.useState([]),[lt,he]=o.useState([]),O=(s,t)=>{_.dismiss(),t=="delete"&&_.error(s),t=="update"&&_.info(s),t=="save"&&_.success(s)},be=Ie({workflowName:C().required("Enter Workflow Name").max(50,"Enter maximum 50 characters"),ulb:C().required("Select ulb"),module:C().required("Select module"),initiator:C().required("Select Initiator"),finisher:C().required("Select Finisher")}),l=Le({initialValues:{workflowName:"",ulb:"",module:"",initiator:"",finisher:""},onSubmit:(s,t)=>{u(!0),console.log("form data final at submit",s),we()},validationSchema:be});function fe(){n(!0)}function ge(s,t){document.getElementById("root").style.filter="blur(3px)",D(t),J(s),d(!0)}function q(){document.getElementById("root").style.filter="none",n(!1),l.resetForm(),u(!1)}function A(){document.getElementById("root").style.filter="none",d(!1)}const we=()=>{const s={ulbID:l.values.ulb,moduleID:l.values.module,workflowID:l.values.workflowName,initiator:l.values.initiator,finisher:l.values.finisher,candidates:l.values.candidateInputList};j!=null?f.put(`http://192.168.0.166/api/crud/ulb-workflow-masters/${j}`,s,h).then(function(t){u(!1),O("Worflow Update Successfully","update"),q(),P()}).catch(function(t){console.log(t)}).then(function(){}):f.post("http://192.168.0.166/api/crud/ulb-workflow-masters",s,h).then(function(t){u(!1),O("Worflow Saved Successfully","save"),P(),q()}).catch(function(t){console.log(t)}).then(function(){})},h=We(),B=(s=null)=>{console.log("workflow id  ....",s),document.getElementById("root").style.filter="blur(4px)",l.resetForm(),l.values.workflowName="",l.values.ulb="",l.values.module="",l.values.initiator="",l.values.finisher="",I([]),L([]),W([]),fe(),Q(null),s!=null&&(Q(s),f.get(`http://192.168.0.166/api/crud/ulb-workflow-masters/${s}`,h).then(function(t){console.log("edit workflow data ",t.data),l.values.workflowName=t.data[0].workflow_id,l.values.ulb=t.data[0].ulb_id,l.values.module=t.data[0].module_id,l.values.initiator=t.data[0].initiator,l.values.finisher=t.data[0].finisher;const m=t.data[0].candidate_id.map(p=>({id:p})),b=t.data[0].candidate_name.map(p=>({name:p})),w=m.map((p,De)=>({id:p.id,name:b[De].name}));I(w),L(w),W(w)}).catch(function(t){console.log(t)}).then(function(){})),f.get("http://192.168.0.166/api/all-workflows",h).then(function(t){ie(t.data)}).catch(function(t){console.log(t)}).then(function(){}),f.get("http://192.168.0.166/api/get-all-ulb",h).then(function(t){console.log("ulbLIst  ....",t.data),de(t.data)}).catch(function(t){console.log(t)}).then(function(){}),f.get("http://192.168.0.166/api/crud/module-masters/create",h).then(function(t){ce(t.data)}).catch(function(t){console.log(t)}).then(function(){}),f.get($e+"/api/get-all-users",h).then(function(t){const m=t.data.filter(b=>b.user_name!=null).map(b=>({id:b.id,name:b.user_name}));console.log("List of candidatees .............",m),ue({options:m})}).catch(function(t){console.log(t)}).then(function(){})},pe=()=>{f.delete(`http://192.168.0.166/api/crud/ulb-workflow-masters/${ne}`,h).then(function(s){u(!1),O(`${x} Worflow Deleted Successfully`,"delete"),A(),P(),D(null),J(null)}).catch(function(s){console.log(s)}).then(function(){})},je=s=>{const t=S.data.filter(m=>m.id==s);console.log("data to view ",t),a.fun(t[0])},ve=[{Header:"#",Cell:({row:s})=>e.jsx("div",{children:s.index+1})},{Header:"Workflow Name",accessor:"workflow_name"},{Header:"Ulb",accessor:"ulb_name"},{Header:"Initiator",accessor:"initiator_name"},{Header:"Finisher",accessor:"finisher_name"},{Header:"Action",accessor:"id",Cell:({cell:s})=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("button",{onClick:()=>B(s.row.values.id),className:"flex-initial bg-green-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-green-800 hover:text-white text-black flex items-center",children:[e.jsx(Re,{className:"inline"})," Edit"]}),e.jsxs("button",{onClick:()=>ge(s.row.values.id,s.row.values.workflowName),className:"flex-initial bg-red-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-red-800 hover:text-white text-black items-center flex",children:[e.jsx(V,{className:"inline"}),"Delete"]}),e.jsxs("button",{onClick:()=>je(s.row.values.id),className:"flex-initial bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black items-center flex",children:[e.jsx(Oe,{className:"inline text-lg"}),"View"]})]})}];let Ne=0;const ye=s=>{console.log("fetch 1 .......",Ne++),he(s.data)},{isLoading:T,data:S,isError:X,error:at,refetch:P}=Ve("workflow-list",()=>f.get("http://192.168.0.166/api/crud/ulb-workflow-masters/create",h),{onSuccess:ye});T||console.log("wwww data full workflow.....",S);function ke(s,t){I([...v,t]),z(""),L([...y,t]),W([...k,t]),K([...xe,t])}console.log("initiator list  ....",y),console.log("finisher list  ....",k);function Se(s,t){let m=v.indexOf(t),b=[...v];const w=b.filter(p=>{if(b.indexOf(p)!=m)return p});I(w),L(w),W(w),K(w)}const Y=s=>{if(s.preventDefault(),v==""){z("Select candidate");return}const t=v.map(m=>m.id);l.values.candidateInputList=t,l.handleSubmit()},Ce=s=>{};return e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>B(),className:"float-right bg-green-500 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-green-800 hover:text-white text-white flex items-center",children:[e.jsx(U,{}),"Add"]}),e.jsx(_e,{position:"top-right",autoClose:2e3}),T&&e.jsx(Z,{}),X&&e.jsx(ErrorPage,{}),!T&&!X&&e.jsx(Fe,{columns:ve,dataList:S==null?void 0:S.data,children:e.jsxs("button",{onClick:()=>B(),className:"float-right bg-green-500 px-3 py-1 rounded-sm shadow-lg hover:shadow-xl hover:bg-green-800 hover:text-white text-white flex items-center",children:[e.jsx(U,{}),"Add"]})}),e.jsx(F,{isOpen:i,onRequestClose:q,style:te,contentLabel:"Example Modal",children:e.jsxs("div",{className:"relative rounded-lg shadow-xl border-8 border-white z-50",children:[j==null&&e.jsxs("h1",{className:"text-center bg-white text-gray-800 border-t border-gray-400 text-lg font-semibold py-1",children:[e.jsx(U,{className:"inline text-3xl"})," Add Worflow"]}),j!=null&&e.jsxs("h1",{className:"text-center bg-white text-gray-800 border-t border-gray-400 text-lg font-semibold py-1 ",children:[e.jsx(Ee,{className:"inline text-xl"})," Update Worflow"]}),e.jsx("div",{className:`p-10 px-10 pb-32 ${j==null?"bg-green-400":"bg-gray-400"}   text-white`,style:{width:"60vw"},children:e.jsxs("form",{className:" md:w-full md:grid md:grid-cols-2 md:gap-x-8",onChange:Ce,onSubmit:l.handleSubmit,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium ",children:"Select Workflow"}),e.jsxs("select",{...l.getFieldProps("workflowName"),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-lg cursor-pointer",children:[e.jsx("option",{value:"",disabled:!0,children:"== select =="}),E==null?void 0:E.map(s=>e.jsx("option",{value:s.id,children:s.workflow_name}))]}),e.jsx("span",{className:"text-red-600 absolute",children:l.touched.workflowName&&l.errors.workflowName?l.errors.workflowName:null})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium",children:"Select ULB"}),e.jsxs("select",{...l.getFieldProps("ulb"),className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg cursor-pointer",children:[e.jsx("option",{value:"_",children:"== Select =="}),M==null?void 0:M.map(s=>e.jsx("option",{value:s.id,children:s.ulb_name}))]}),e.jsx("span",{className:"text-red-600 absolute",children:l.touched.ulb&&l.errors.ulb?l.errors.ulb:null})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium",children:"Select Module"}),e.jsxs("select",{...l.getFieldProps("module"),className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg cursor-pointer",children:[e.jsx("option",{value:"_",children:"== Select =="}),$==null?void 0:$.map(s=>e.jsx("option",{value:s.id,children:s.module_name}))]}),e.jsx("span",{className:"text-red-600 absolute",children:l.touched.module&&l.errors.module?l.errors.module:null})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium",children:"Select Canidates"}),e.jsx("div",{className:"bg-white text-black cursor-pointer rounded-lg shadow-lg",children:e.jsx(Me,{options:R==null?void 0:R.options,selectedValues:v,onSelect:ke,onRemove:Se,displayValue:"name"})}),e.jsx("span",{className:"text-red-600",children:me})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium",children:"Select Initiator"}),e.jsxs("select",{...l.getFieldProps("initiator"),className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg cursor-pointer",children:[e.jsx("option",{value:"_",children:"== Select =="}),y==null?void 0:y.map(s=>e.jsx("option",{value:s.id,children:s.name}))]}),e.jsx("span",{className:"text-red-600",children:l.touched.initiator&&l.errors.initiator?l.errors.initiator:null})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium",children:"Select Finisher"}),e.jsxs("select",{...l.getFieldProps("finisher"),className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg cursor-pointer",children:[e.jsx("option",{value:"_",children:"== Select =="}),k==null?void 0:k.map(s=>e.jsx("option",{value:s.id,children:s.name}))]}),e.jsx("span",{className:"text-red-600",children:l.touched.finisher&&l.errors.finisher?l.errors.finisher:null})]}),e.jsx("div",{className:"text-left col-span-2 relative top-20",children:e.jsxs("div",{className:"col-span-2",children:[j==null&&!c&&e.jsx("button",{onClick:Y,type:"button",className:"text-white bg-green-700 border-2 border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-green-400 hover:shadow-2xl",children:"Submit"}),j!=null&&!c&&e.jsx("button",{onClick:Y,type:"button",className:"text-white bg-blue-700 border-2 border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:bg-blue-500 hover:shadow-2xl",children:"Update"}),c&&e.jsx(Z,{})]})})]})}),e.jsx("img",{src:He,className:" w-40 absolute bottom-0 right-10",alt:"image"})]})}),e.jsx(F,{isOpen:r,onRequestClose:A,style:te,contentLabel:"Example Modal",children:e.jsx("div",{className:"relative bg-white rounded-lg shadow-2xl border-2 border-gray-50 rounded",children:e.jsxs("div",{className:"p-10 px-10 md:w-96 bg-red-500  text-center",children:[e.jsxs("h1",{className:"text-white text-lg",children:["Do you want to delete"," ",e.jsx("b",{children:e.jsx("i",{children:x})})," ","workflow ?"]}),e.jsx("img",{src:Ge,alt:"deleteImage"}),e.jsxs("button",{onClick:pe,className:"bg-white text-red-800 border border-white shadow-lg rounded-lg px-2 py-1 text-white  mt-5 text-lg hover:bg-red-900 hover:text-white hover:shadow-3xl md:mr-3 font-semibold",children:[e.jsx(V,{className:"inline"}),"Delete"]}),e.jsxs("button",{onClick:A,className:"bg-gray-400 border border-white shadow-lg rounded-lg px-2 py-1 text-white  mt-5 text-lg hover:bg-gray-700 hover:shadow-2xl md:ml-3",children:[e.jsx(le,{className:"inline text-2xl"}),"Cancel"]})]})})})]})}const Qe="/assets/flow-425ed729.svg";function ze(a){var i,n,r,d,c,u,x;return o.useState({}),o.useState(0),console.log("workflow data at card ",a.workflowDetailsData),e.jsx(e.Fragment,{children:e.jsx("div",{className:"bg-gray-100",children:e.jsx("div",{className:"container mx-auto my-0 p-2",children:e.jsx("div",{className:"md:flex no-wrap md:-mx-2 ",children:e.jsxs("div",{className:"w-full md:w-12/12 mx-2 h-auto",children:[e.jsxs("div",{className:"bg-white p-3 shadow-xl rounded-sm relative",children:[e.jsxs("div",{className:"shadow-xl bg-sky-200 flex items-center pl-4 space-x-2 font-semibold text-gray-900 leading-8 mb-5 py-2 relative",children:[e.jsx("div",{className:"flex-initial",children:e.jsx(qe,{className:"text-black"})}),e.jsx("div",{className:"tracking-wide font-bold text-lg text-gray-900 flex-initial",children:(i=a.workflowDetailsData)==null?void 0:i.workflow_name}),e.jsx("div",{className:"flex-1 absolute right-6",children:e.jsx(Ae,{className:"text-xl text-sky-900"})})]}),e.jsx("div",{className:"text-gray-700",children:e.jsxs("div",{className:"grid md:grid-cols-2 text-sm pb-6",children:[e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsx("div",{className:"px-4 py-2 font-semibold",children:"ULB Name"}),e.jsx("div",{className:"px-4 py-2",children:((n=ee())==null?void 0:n.brand_tag)=="AMC"?(r=ee())==null?void 0:r.ulb_name:(d=a.workflowDetailsData)==null?void 0:d.ulb_name})]}),e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsx("div",{className:"px-4 py-2 font-semibold",children:"Module Name"}),e.jsx("div",{className:"px-4 py-2",children:(c=a.workflowDetailsData)==null?void 0:c.module_name})]}),e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsx("div",{className:"px-4 py-2 font-semibold",children:"Initiator"}),e.jsx("div",{className:"px-4 py-2",children:(u=a.workflowDetailsData)==null?void 0:u.initiator_name})]}),e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsx("div",{className:"px-4 py-2 font-semibold",children:"Finisher"}),e.jsx("div",{className:"px-4 py-2",children:(x=a.workflowDetailsData)==null?void 0:x.finisher_name})]})]})}),e.jsx("img",{className:"w-1/5 absolute top-20 right-2",src:Qe,alt:"flowImage"})]}),e.jsx("div",{className:"md:my-4"})]})})})})})}const Ke={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};function Xe(a){const[i,n]=o.useState(!1),[r,d]=o.useState("");function c(D){d(D),n(!0)}function u(){n(!1)}function x(){}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex shadow-xl border border-white md:w-2/4 items-center rounded-lg bg-gray-100 mt-3 relative",children:[e.jsx("div",{className:"absolute -left-5 text-sm",children:a.index}),e.jsx("div",{className:"flex-initial",children:e.jsx("img",{className:"h-10 w-10 rounded-full",src:Be,alt:""})}),e.jsx("div",{className:"flex-1 ml-2 font-mono font-semibold text-sm",children:a.name}),e.jsx("div",{className:"flex-1 text-sm",children:e.jsx("span",{className:"bg-indigo-200 px-2 rounded-lg text-gray-800",children:"general"})}),e.jsx("div",{className:"flex-initial md:mr-5 shadow-xl cursor-pointer",onClick:()=>c(a.name),children:e.jsx(Te,{className:"text-red-500 text-2xl"})})," "]}),e.jsx(F,{isOpen:i,onAfterOpen:x,onRequestClose:u,style:Ke,contentLabel:"Example Modal",children:e.jsx("div",{className:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50",children:e.jsxs("div",{className:"p-10 px-10 md:w-96 bg-red-600  text-center",children:[e.jsxs("h1",{className:"text-white",children:["Do you want to remove ",e.jsx("b",{children:e.jsx("i",{children:r})})," from workflow ?"]}),e.jsxs("button",{className:"bg-white text-red-800 border border-white shadow-lg rounded-lg px-2 py-1 text-white  mt-5 text-lg hover:bg-red-900 hover:text-white hover:shadow-3xl md:mr-3 font-semibold",children:[e.jsx(V,{className:"inline"}),"Delete"]}),e.jsxs("button",{onClick:u,className:"bg-gray-400 border border-white shadow-lg rounded-lg px-2 py-1 text-white  mt-5 text-lg hover:bg-gray-700 hover:shadow-2xl md:ml-3",children:[e.jsx(le,{className:"inline text-2xl"}),"Cancel"]})]})})})]})}function Ye(a){var i;return o.useState([]),e.jsx(e.Fragment,{children:(i=a.workflowDetailsData)==null?void 0:i.candidate_name.map((n,r)=>e.jsx(Xe,{name:n,index:r+1}))})}function re(a){const{children:i,value:n,index:r,...d}=a;return e.jsx("div",{role:"tabpanel",hidden:n!==r,id:`simple-tabpanel-${r}`,"aria-labelledby":`simple-tab-${r}`,...d,children:n===r&&e.jsx(N,{sx:{p:3},children:e.jsx(oe,{children:i})})})}re.propTypes={children:g.node,index:g.number.isRequired,value:g.number.isRequired};function Ze(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}function et(a){const[i,n]=o.useState(0);if(o.useState(""),o.useState({}),a.workflowDetails=="")return e.jsx(e.Fragment,{children:e.jsx(Pe,{fun:a.fun,title:"No Workflow Selected !"})});const r=(d,c)=>{n(c)};return e.jsxs(e.Fragment,{children:[e.jsx(ze,{workflowDetailsData:a.workflowDetails}),e.jsxs(N,{sx:{width:"100%"},children:[e.jsx(N,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsx(ae,{value:i,onChange:r,"aria-label":"basic tabs example",children:e.jsx(H,{label:"Candidates",...Ze(0)})})}),e.jsx(re,{value:i,index:0,children:e.jsx(Ye,{workflowDetailsData:a.workflowDetails})})]})]})}function G(a){const{children:i,value:n,index:r,...d}=a;return e.jsx("div",{role:"tabpanel",hidden:n!==r,id:`simple-tabpanel-${r}`,"aria-labelledby":`simple-tab-${r}`,...d,children:n===r&&e.jsx(N,{sx:{p:3},children:e.jsx(oe,{children:i})})})}G.propTypes={children:g.node,index:g.number.isRequired,value:g.number.isRequired};function se(a){return{id:`simple-tab-${a}`,"aria-controls":`simple-tabpanel-${a}`}}function tt(){const[a,i]=o.useState(0),[n,r]=o.useState(""),d=u=>{r(u),c(null,1)},c=(u,x)=>{i(x)};return e.jsxs(N,{sx:{width:"100%"},children:[e.jsx(N,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(ae,{value:a,onChange:c,"aria-label":"basic tabs example",children:[e.jsx(H,{label:"List",...se(0)}),e.jsx(H,{label:"Details",...se(1)})]})}),e.jsx(G,{value:a,index:0,children:e.jsx(Je,{fun:d})}),e.jsx(G,{value:a,index:1,children:e.jsx(et,{fun:c,workflowDetails:n})})]})}function st(){const[a,i]=o.useState(0),n=[{title:"Workflow",tabIndex:0},{title:"..............",tabIndex:1},{title:".......................",tabIndex:2}],r=d=>{i(d)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-12 rounded-lg mt-4 -ml-10 shadow-xl broder-2 border-sky-200 bg-gray-200",children:[e.jsxs("div",{className:"col-span-12 sm:col-span-2 ",children:[" ",e.jsx(Ue,{tabs:n,fun:r})]}),a==0&&e.jsx("div",{className:"col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll",style:{height:"90vh"},children:e.jsx(tt,{})}),"       ",a==1&&e.jsx("div",{className:"col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll",style:{height:"90vh"},children:"........."}),"       ",a==2&&e.jsx("div",{className:"col-span-12 sm:col-span-10 shadow-lg bg-white overflow-y-scroll",style:{height:"90vh"},children:"........."}),"       "]})})}function nt(){return e.jsx(st,{})}export{nt as default};
