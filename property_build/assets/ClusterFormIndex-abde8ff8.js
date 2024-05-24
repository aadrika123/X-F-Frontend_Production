import{Y as te,e as ae,r as d,A as w,b as N,Q as g,W as de,q as ie,s as C,a6 as oe,w as ue,j as e,L as ce,a8 as le,ad as se,cY as re,bm as ee,al as me,g as be,a as xe,n as S,de as he,df as ge,dg as fe,bn as X,B as we,V as Ne}from"./index-3a3e7484.js";import{P as je}from"./reactjs-popup.esm-bdaf28d0.js";import{C as ne,a as ye}from"./ClusterView-ae0c2bb1.js";import"./index.esm-46081228.js";const ve=t=>{var M,W,$,H,K,B,q,z,O,V,U;const{t:r}=te();ae();const{addCluster:R,updateCluster:j}=ne(),{api_wardByUlb:D,api_newWardByOldWard:P}=me(),{ulbList:E}=be(),[Y,F]=d.useState(!1),[k,G]=d.useState(),[h,Q]=d.useState(),[f,_]=d.useState(),[T,b]=d.useState(!1),[J,I]=d.useState(null);d.useEffect(()=>{t!=null&&t.editState&&(x(),L()),b(!1),w.get(E,N()).then(n=>{var i,u;(i=n==null?void 0:n.data)!=null&&i.status?G((u=n==null?void 0:n.data)==null?void 0:u.data):(g.error("Something went wrong !!!"),t==null||t.backFun())}).catch(n=>{g.error("Something went wrong !!!"),t==null||t.backFun()}).finally(()=>b(!1))},[]);const x=n=>{var u;b(!0);let i;t!=null&&t.editState?i={ulbId:(u=t==null?void 0:t.userData)==null?void 0:u.ulb_id}:i={ulbId:n.target.value},w.post(D,i,N()).then(m=>{var v,o;(v=m==null?void 0:m.data)!=null&&v.status?Q((o=m==null?void 0:m.data)==null?void 0:o.data):(g.error("Something went wrong !!!"),t==null||t.backFun())}).catch(m=>{g.error("Something went wrong !!!"),t==null||t.backFun()}).finally(()=>b(!1))},L=n=>{var u,m,v;let i;t!=null&&t.editState?i={oldWardMstrId:de((u=t==null?void 0:t.userData)==null?void 0:u.ward_mstr_id)=="NA"?n:(m=t==null?void 0:t.userData)==null?void 0:m.ward_mstr_id,ulbId:(v=t==null?void 0:t.userData)==null?void 0:v.ulb_id}:i={oldWardMstrId:n,ulbId:l.values.ulbId},w.post(P,i,N()).then(function(o){var s,a,c;(s=o==null?void 0:o.data)!=null&&s.status?_((a=o==null?void 0:o.data)==null?void 0:a.data):g.error((c=o==null?void 0:o.data)==null?void 0:c.message)}).catch(o=>{g.error(o==null?void 0:o.message)}).finally(()=>b(!1))},Z=ie({ulbId:C().required("Select ulb id"),wardNo:C().required("Select ward"),newWardNo:C().required("Select new ward"),clusterName:C().required("Enter name"),clusterType:C().required("Select type"),clusterAddress:C().required("Enter address"),clusterMobileNo:oe().typeError("must be number").min(1e9,"not valid").max(9999999999,"not valid").required("Enter mobile no."),clusterAuthPersonName:C().required("Select authorized person name")});d.useEffect(()=>{});const l=ue({initialValues:{id:(M=t==null?void 0:t.userData)==null?void 0:M.id,ulbId:(W=t==null?void 0:t.userData)==null?void 0:W.ulb_id,wardNo:($=t==null?void 0:t.userData)==null?void 0:$.ward_mstr_id,newWardNo:(H=t==null?void 0:t.userData)==null?void 0:H.new_ward_mstr_id,clusterName:(K=t==null?void 0:t.userData)==null?void 0:K.cluster_name,clusterType:(B=t==null?void 0:t.userData)==null?void 0:B.cluster_type,clusterAddress:(q=t==null?void 0:t.userData)==null?void 0:q.address,clusterMobileNo:(z=t==null?void 0:t.userData)==null?void 0:z.mobile_no,clusterAuthPersonName:(O=t==null?void 0:t.userData)==null?void 0:O.authorized_person_name},onSubmit:n=>{p(n)},validationSchema:Z}),p=n=>{b(!0),t!=null&&t.editState?w.post(j,n,N()).then(i=>{var u;(u=i==null?void 0:i.data)!=null&&u.status?(g.success("Updated Successfully"),t.backFun(),t.refresh()):y(!0,"Error occured while updating cluster. Please try again later."),b(!1)}).catch(i=>{b(!1),y(!0,"Error occured while updating cluster. Please try again later.")}):w.post(R,n,N()).then(i=>{var u;(u=i==null?void 0:i.data)!=null&&u.status?(t.backFun(),g.success("Added Successfully"),t.refresh()):y(!0,"Error occured while adding cluster. Please try again later."),b(!1)}).catch(i=>{b(!1),y(!0,"Error occured while adding cluster. Please try again later.")})},y=(n,i)=>{I(i),F(n)};return e.jsxs(e.Fragment,{children:[T&&e.jsx(ce,{}),Y&&e.jsx(le,{activateBottomErrorCard:y,errorTitle:J}),e.jsx(se,{position:"top-right",autoClose:2e3}),e.jsxs("h1",{className:"mt-6 mb-2 sm:-mb-16 mx-6 font-serif font-semibold relative text-gray-600",children:[e.jsx(re,{className:"inline mr-2"}),t!=null&&t.editState?`${r("mainClusterPage.edit.label")}`:`${r("mainClusterPage.add.label")}`," ",r("mainClusterPage.cluster.label")]}),e.jsx("div",{className:" block sm:mt-[4rem] md:mt-[5rem] p-4 w-full md:py-6 md:px-14 shadow-lg bg-white mx-auto border border-gray-200",children:e.jsx("form",{onSubmit:l.handleSubmit,onChange:l.handleChange,className:"text-xs",children:e.jsxs("div",{className:"grid grid-cols-12 md:gap-x-8 gap-y-6",children:[e.jsxs("div",{className:"md:col-span-4 col-span-12",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 font-semibold",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),r("mainClusterPage.ulb.label")]}),e.jsxs("select",{value:l.values.ulbId,onChange:x,name:"ulbId",className:"form-control block w-[80%] px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",children:[e.jsxs("option",{value:"",children:[" ",r("mainClusterPage.select.label")]}),((V=ee())==null?void 0:V.brand_tag)=="AMC"?e.jsx("option",{value:"2",children:(U=ee())==null?void 0:U.ulb_name}):k==null?void 0:k.map(n=>e.jsx("option",{value:n.id,children:n.ulb_name}))]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.ulbId&&l.errors.ulbId?l.errors.ulbId:null})]}),e.jsxs("div",{className:"md:col-span-4 col-span-12",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 font-semibold",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),r("mainClusterPage.wardNo.label")]}),e.jsxs("select",{value:l.values.wardNo,onChange:n=>L(n.target.value),name:"wardNo",className:"form-control block w-[80%] px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",children:[e.jsx("option",{value:"",children:r("mainClusterPage.select.label")}),h==null?void 0:h.map(n=>e.jsx("option",{value:n.id,children:n.ward_name}))]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.wardNo&&l.errors.wardNo?l.errors.wardNo:null})]}),e.jsxs("div",{className:"md:col-span-4 col-span-12",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 font-semibold",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),r("mainClusterPage.newWardNo.label")]}),e.jsxs("select",{value:l.values.newWardNo,name:"newWardNo",className:"form-control block w-[80%] px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",children:[e.jsx("option",{value:"",children:r("mainClusterPage.select.label")}),f==null?void 0:f.map(n=>e.jsx("option",{value:n.new_ward_mstr_id,children:n.ward_name}))]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.newWardNo&&l.errors.newWardNo?l.errors.newWardNo:null})]}),e.jsxs("div",{className:"md:col-span-4 col-span-12",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 font-semibold",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),r("mainClusterPage.name.label")]}),e.jsx("input",{type:"text",value:l.values.clusterName,onChange:l.handleChange,name:"clusterName",className:"form-control block w-[80%] px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",placeholder:"Enter your name.."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.clusterName&&l.errors.clusterName?l.errors.clusterName:null})]}),e.jsxs("div",{className:"md:col-span-4 col-span-12",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 font-semibold",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),r("mainClusterPage.type.label")]}),e.jsxs("select",{value:l.values.clusterType,onChange:l.handleChange,name:"clusterType",className:"form-control block w-[80%] px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",children:[e.jsx("option",{value:"",disabled:!0,selected:!0,children:r("mainClusterPage.selectType.label")}),e.jsx("option",{value:"c-saf",children:r("mainClusterPage.cSaf.label")}),e.jsx("option",{value:"gb-saf",children:r("mainClusterPage.gsaf.label")})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.clusterType&&l.errors.clusterType?l.errors.clusterType:null})]}),e.jsxs("div",{className:"md:col-span-4 col-span-12",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 font-semibold",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),r("mainClusterPage.address.label")]}),e.jsx("input",{value:l.values.clusterAddress,onChange:l.handleChange,type:"text",name:"clusterAddress",className:"form-control block w-[80%] px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",placeholder:"Enter your address.."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.clusterAddress&&l.errors.clusterAddress?l.errors.clusterAddress:null})]}),e.jsxs("div",{className:"md:col-span-4 col-span-12",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 font-semibold",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),r("mainClusterPage.mobileNo.label")]}),e.jsx("input",{value:l.values.clusterMobileNo,onChange:l.handleChange,type:"text",maxLength:10,name:"clusterMobileNo",className:"form-control block w-[80%] px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",placeholder:"Enter your mobile no..."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.clusterMobileNo&&l.errors.clusterMobileNo?l.errors.clusterMobileNo:null})]}),e.jsxs("div",{className:"md:col-span-4 col-span-12",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 font-semibold",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),r("mainClusterPage.authorizedPersonName.label")]}),e.jsx("input",{value:l.values.clusterAuthPersonName,onChange:l.handleChange,type:"text",name:"clusterAuthPersonName",className:"form-control block w-[80%] px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",placeholder:"Enter authorized person name.."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:l.touched.clusterAuthPersonName&&l.errors.clusterAuthPersonName?l.errors.clusterAuthPersonName:null})]}),e.jsxs("div",{className:"col-span-12 flex justify-between",children:[e.jsx("button",{onClick:t.backFun,type:"button",className:"md:mt-1.5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",children:r("mainClusterPage.back.label")}),e.jsx("button",{type:"submit",className:"md:mt-2 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:t!=null&&t.editState?e.jsx(e.Fragment,{children:r("mainClusterPage.update.label")}):e.jsx(e.Fragment,{children:r("mainClusterPage.add.label")})})]})]})})})]})},Ce=t=>{const{t:r}=te(),[R,j]=d.useState(!1),[D,P]=d.useState(!1),[E,Y]=d.useState(),[F,k]=d.useState(),[G,h]=d.useState(!1),[Q,f]=d.useState(!1);d.useState(!1);const[_,T]=d.useState(0),[b,J]=d.useState(),[I,x]=d.useState(!1),[L,Z]=d.useState(),[l,p]=d.useState();d.useState();const[y,M]=d.useState(0),[W,$]=d.useState(!1),[H,K]=d.useState(!1),[B,q]=d.useState(null);xe(`${r("mainClusterPage.mainHeadingText.label")}`);const{getCluster:z,viewCluster:O,deleteCluster:V}=ne(),U=ae();d.useEffect(()=>{x(!0),w.post(z,{},N()).then(s=>{var a;J((a=s==null?void 0:s.data)==null?void 0:a.data),j(!0),h(!1),P(!1),f(!1),x(!1)}).catch(s=>{o(!0,"Error in fetching cluster list. Please try again later."),x(!1)})},[_]);const n=s=>{x(!0),w.post(V,{id:s},N()).then(a=>{g.success("Deleted Successfully !!"),T(_+1),x(!1),j(!0),h(!1),P(!1),f(!1)}).catch(a=>{o(!0,"Error in deleting cluster. Please try again later."),x(!1)})},i=()=>{j(!1),f(!0),h(!1)};d.useEffect(()=>{T(_+1)},[]);const u=s=>{x(!0),w.post(O,{clusterId:s},N()).then(a=>{var c,A;k((A=(c=a==null?void 0:a.data)==null?void 0:c.data)==null?void 0:A.cluster),j(!1),P(!0),h(!1),Y(s),x(!1)}).catch(a=>{o(!0,"Error in cluster data update. Please try again later."),x(!1)})},m=()=>{h(!1),j(!0),P(!1),f(!1),k("")},v=[{Header:`${r("mainClusterPage.tblClmsrNoText.label")}`,Cell:({row:s})=>e.jsx("div",{children:(s==null?void 0:s.index)+1}),className:"w-[5%]"},{Header:`${r("mainClusterPage.tblClmOldWardNoText.label")}`,Cell:({cell:s})=>{var a;return S((a=s.row.original)==null?void 0:a.oldWardName)},className:"w-[5%]"},{Header:`${r("mainClusterPage.tblClmNewWardNoText.label")}`,Cell:({cell:s})=>{var a;return S((a=s.row.original)==null?void 0:a.newWardName)},className:"w-[5%]"},{Header:`${r("mainClusterPage.tblClmNameText.label")}`,Cell:({cell:s})=>{var a;return S((a=s.row.original)==null?void 0:a.name)},className:"w-[15%]"},{Header:`${r("mainClusterPage.tblClmTypeText.label")}`,Cell:({cell:s})=>{var a;return S((a=s.row.original)==null?void 0:a.type)},className:"w-[5%]"},{Header:`${r("mainClusterPage.tblClmAddressText.label")}`,Cell:({cell:s})=>{var a;return S((a=s.row.original)==null?void 0:a.address)},className:"w-[20%]"},{Header:`${r("mainClusterPage.tblClmMobileText.label")}`,accessor:"mobileNo",Cell:({cell:s})=>{var a;return S((a=s.row.original)==null?void 0:a.mobileNo)},className:"w-[10%]"},{Header:`${r("mainClusterPage.tblClmAuthorizedPersonText.label")}`,accessor:"authPersonName",Cell:({cell:s})=>{var a;return S((a=s.row.original)==null?void 0:a.authPersonName)},className:"w-[15%]"},{Header:`${r("mainClusterPage.tblClmActionsText.label")}`,accessor:"id",Cell:({cell:s})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{"data-tooltip-id":"edit","data-tooltip-content":"Edit",className:"text-green-500 hover:border-green-500 hover:border-2 hover:shadow-green-300 rounded-md text-lg hover:shadow-md shadow-sm py-1 px-2 transition-all duration-100",onClick:()=>{var a,c;return u((c=(a=s==null?void 0:s.row)==null?void 0:a.values)==null?void 0:c.id)},children:e.jsx(he,{})}),e.jsx("button",{"data-tooltip-id":"view","data-tooltip-content":"View",className:"text-amber-500 hover:border-amber-500 hover:border-2 hover:shadow-amber-300 rounded-md text-lg hover:shadow-md shadow-sm py-1 px-2 transition-all duration-100",onClick:()=>{var a,c;return U("/viewCluster/"+((c=(a=s==null?void 0:s.row)==null?void 0:a.values)==null?void 0:c.id))},children:e.jsx(ge,{})}),e.jsx(je,{trigger:e.jsx("button",{"data-tooltip-id":"delete","data-tooltip-content":"Delete",className:"text-red-500 hover:border-red-500 hover:border-2 hover:shadow-red-300 rounded-md text-lg hover:shadow-md shadow-sm py-1 px-2 transition-all duration-100",children:e.jsx(fe,{})}),modal:!0,nested:!0,children:a=>e.jsx("div",{className:"h-screen w-screen flex-row justify-center items-center backdrop-blur-sm",children:e.jsxs("div",{className:"flex flex-col justify-center h-max w-max absolute top-[40%] right-[40%] bg-white px-4 py-2 rounde-md shadow-lg animate__animated animate__fadeInDown animate__faster",children:[e.jsx("button",{className:"close text-end ",onClick:a,children:e.jsx("span",{className:"hover:bg-red-400 hover:text-white rounded-md px-1 ",children:"×"})}),e.jsxs("div",{className:"text-base",children:[r("mainClusterPage.areYouSureToDelete.label")," ?"]}),e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx("button",{className:"bg-red-200 hover:bg-red-300 shadow-md text-xs px-4 py-1 m-4 rounded-md",onClick:()=>{var c,A;a(),n((A=(c=s==null?void 0:s.row)==null?void 0:c.values)==null?void 0:A.id)},children:r("mainClusterPage.yes.label")}),e.jsx("button",{className:"bg-green-200 hover:bg-green-300 px-4 shadow-md text-xs py-1 m-4 rounded-md",onClick:a,children:r("mainClusterPage.no.label")})]})]})})}),e.jsx(X,{id:"edit",style:{fontSize:"12px",padding:"2px 8px",transition:"all",transitionDuration:"300"},place:"bottom"}),e.jsx(X,{id:"view",style:{fontSize:"12px",padding:"2px 8px",transition:"all",transitionDuration:"300"},place:"bottom"}),e.jsx(X,{id:"delete",style:{fontSize:"12px",padding:"2px 8px",transition:"all",transitionDuration:"300"},place:"bottom"})]})}),className:"w-[12%]"}],o=(s,a)=>{q(a),$(s)};return I?e.jsx(e.Fragment,{children:e.jsx(we,{})}):H?e.jsx(ServerErrorCard,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx(se,{position:"top-right",autoClose:2e3}),W&&e.jsx(le,{activateBottomErrorCard:o,errorTitle:B}),e.jsx("div",{className:"px-2 sm:px-0",children:!I&&R&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h1",{className:"mt-6 mb-2 font-serif font-semibold  text-gray-600",children:[e.jsx(re,{className:"inline mr-2"}),r("mainClusterPage.mainHeadingText.label")]}),e.jsx("button",{className:"bg-sky-400 px-3 pr-3 shadow-lg rounded py-1 text-white hover:shadow-2xl hover:bg-green-600 text-center relative",onClick:()=>i(),children:r("mainClusterPage.add.label")})]}),e.jsx(Ne,{columns:v,dataList:b}),e.jsx("div",{className:"h-[20vh]"})]})}),(D||Q)&&e.jsx(e.Fragment,{children:e.jsx(ve,{backFun:m,editState:D,userId:E,userData:F,refresh:()=>T(_+1)})}),G&&e.jsx(ye,{backFun:m,userData:F,userId:E,holdingList:L,safList:l,refresh:()=>M(y+1)})]})},Te=()=>e.jsx("div",{className:"poppins",children:e.jsx(Ce,{})});export{Te as default};
