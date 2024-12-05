import{j as e,d as we,t as N,Q as j,U as Se,c as Oe,S as Te}from"./index-r6pkVfbe.js";import{u as Me,d as p,e as Ue}from"./router-5yjtezO8.js";import{P as Ve}from"./index-XdDZ0AxP.js";import{u as ke}from"./formik.esm-BnzrXcQN.js";import{c as _e,a as De}from"./index.esm-uHa2PMRf.js";import{F as Ce}from"./FormProvider-kGPBuDhT.js";import{T as $e}from"./TextAreaField-wwGW22Fx.js";import"./TranslateField-BH3bQnqu.js";import{r}from"./tailwind-6U-kYQAu.js";import{O as Ee}from"./OverLayLoader-ZQFsfgoF.js";import{u as Ie}from"./usePathWisePermission-A3g_L-B3.js";import{T as qe}from"./TextField-WLFSaEKU.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./customInputValidation-jhKsg103.js";import"./module-BKxwfC_F.js";function Re({open:i,setOpen:b,url:a}){const o=()=>b(!i),m=d=>d.split(".").pop();return e.jsxs(e.Fragment,{children:[i&&e.jsx("div",{onClick:o,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(i?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px]",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:"View Document"}),e.jsxs("button",{onClick:o,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),m(a)=="pdf"?e.jsx("embed",{type:"application/pdf",src:"https://docs.google.com/viewer?url=".concat(a,"&embedded=true"),width:"100%",height:"100%"}):e.jsx("img",{src:a,alt:"Naksha",className:"w-full h-full",loading:"lazy"}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsx("div",{className:"flex items-center justify-end mt-4 gap-5",children:e.jsx(r.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:o,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Ok"})})})})]})})})]})}const We=_e().shape({mobileNo:De().required("Mobile No is required").min(10).max(10)});function Ye({open:i,setOpen:b,updateMobData:a,applicationId:o,refetch:m}){const d=()=>b(!i),h=we({}),g=ke({enableReinitialize:!0,initialValues:{applicationId:a==null?void 0:a.temp_id,ownerId:a.id,mobileNo:a.mobile_no},validationSchema:We,onSubmit:async x=>{var f;try{const{data:n}=await h.mutateAsync({api:(f=N)==null?void 0:f.tradeUpdateMobile,data:x});n!=null&&n.status&&(j.success(n==null?void 0:n.message),m(),d())}catch(n){j.error(n.message)}}});return e.jsxs(Ce,{formik:g,children:[i&&e.jsx("div",{onClick:d,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(i?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Add Mobile No"}),e.jsxs("button",{onClick:d,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsxs("div",{className:"p-4 md:p-5",children:[e.jsx("div",{className:"grid grid-cols-1 gap-4",children:e.jsx("div",{children:e.jsx(qe,{type:"text",name:"mobileNo",label:"Mobile No",formik:g,placeholder:"Enter Mobile No",maxLength:10})})}),e.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[e.jsx(r.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:d,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Cancel"})}),e.jsx(r.Button,{type:"submit",size:"sm",loading:h.isLoading,disabled:h.isLoading,children:e.jsx("span",{children:"Update"})})]})]})]})})})]})}function xs(){var v,w,k,_,D,C,B,A,L,F,z,P,S,O,T,M,U,V,$,E,I,q,R,W,Y,G,H,Q,J,K,X,Z,ee,se,te,re,le,ie,ae,ne,de,ce,oe,xe,me,he,je,be,pe,ge,fe,ye,ue,Ne;const i=Me(),[b,a]=p.useState({}),[o,m]=p.useState(!1);Se();const d=Ie("/amc-app/trade/application-details"),{mutateAsync:h,isLoading:g}=we({}),{id:x}=Ue(),[f,n]=p.useState(!1),[Be,Ae]=p.useState(""),{data:s,isLoading:Le,refetch:Fe}=Oe({api:(v=N)==null?void 0:v.tradeAppDetail,config:{id:x},options:{enabled:!!x}}),y=ke({enableReinitialize:!0,initialValues:{comment:"",action:""},validationSchema:_e({comment:De().required("Comment is required")}),onSubmit:async(t,{setSubmitting:c})=>{if(!(t!=null&&t.action)){j.error("Please select action");return}Te.fire({title:"Are you sure?",text:"You want to ".concat((t==null?void 0:t.action)=="forward"?"Forward":"backward"," this application!"),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, submit it!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async u=>{u.isConfirmed&&ze(t)})}}),ze=async t=>{var c,u,ve;try{const l=await h({api:N.tradeLevel,data:{applicationId:x,comment:t==null?void 0:t.comment,action:(t==null?void 0:t.action)=="forward"?"forward":"backward"}});(c=l==null?void 0:l.data)!=null&&c.status?(j.success((u=l==null?void 0:l.data)==null?void 0:u.message),i("/amc-app/trade/utc-inbox")):j.error((ve=l==null?void 0:l.data)==null?void 0:ve.message)}catch(l){j.error(l==null?void 0:l.message)}},Pe=t=>{a(t),m(!0)};return e.jsxs(Ve,{title:"Trade Application Details",children:[o&&e.jsx(Ye,{open:o,setOpen:m,updateMobData:b,refetch:Fe}),Le||g?e.jsx(Ee,{}):null,e.jsx(Re,{open:f,setOpen:n,url:Be}),e.jsxs("div",{className:"p-4",children:[e.jsxs("div",{className:"flex justify-center gap-2 items-center mb-2",children:[((k=(w=s==null?void 0:s.data)==null?void 0:w.transactionDtl)==null?void 0:k.length)>0&&e.jsx(r.Button,{size:"sm",color:"blue",className:"py-1.5",onClick:()=>i("/amc-app/trade/trade-payment-history/".concat(x)),children:e.jsx("small",{children:"Payment History"})}),((D=(_=s==null?void 0:s.data)==null?void 0:_.licenceDtl)==null?void 0:D.payment_status)=="0"&&((B=(C=s==null?void 0:s.data)==null?void 0:C.licenceDtl)==null?void 0:B.pending_status)=="5"&&e.jsx(r.Button,{size:"sm",color:"red",className:"py-1.5 px-9",onClick:()=>i("/amc-app/trade/trade-payment/".concat(x)),children:e.jsx("small",{children:"Pay Now"})})]}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Application Status"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Application No :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-green-900 font-semibold",children:((L=(A=s==null?void 0:s.data)==null?void 0:A.licenceDtl)==null?void 0:L.application_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Application Type:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 ",children:((z=(F=s==null?void 0:s.data)==null?void 0:F.licenceDtl)==null?void 0:z.application_type)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Application Status :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-blue-600 font-semibold",children:((P=s==null?void 0:s.data)==null?void 0:P.pendingStatus)||"--"})})]})})]}),e.jsx("div",{className:"border-t border-gray-200 my-3"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Basic Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Firm Name :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((O=(S=s==null?void 0:s.data)==null?void 0:S.licenceDtl)==null?void 0:O.firm_name)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Firm Type:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((M=(T=s==null?void 0:s.data)==null?void 0:T.licenceDtl)==null?void 0:M.firm_type)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Nature of Business :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((V=(U=s==null?void 0:s.data)==null?void 0:U.licenceDtl)==null?void 0:V.items_code)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"License For Years :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((E=($=s==null?void 0:s.data)==null?void 0:$.licenceDtl)==null?void 0:E.licence_for_years)+"yrs"||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Category Type :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((q=(I=s==null?void 0:s.data)==null?void 0:I.licenceDtl)==null?void 0:q.category_type)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"License No :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((W=(R=s==null?void 0:s.data)==null?void 0:R.licenceDtl)==null?void 0:W.license_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Ownership Type :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((G=(Y=s==null?void 0:s.data)==null?void 0:Y.licenceDtl)==null?void 0:G.ownership_type)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Application Type :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((Q=(H=s==null?void 0:s.data)==null?void 0:H.licenceDtl)==null?void 0:Q.application_type)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Apply Date :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((K=(J=s==null?void 0:s.data)==null?void 0:J.licenceDtl)==null?void 0:K.application_date)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Valid Upto :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((Z=(X=s==null?void 0:s.data)==null?void 0:X.licenceDtl)==null?void 0:Z.valid_upto)||"--"})})]})})]}),e.jsx("div",{className:"border-t border-gray-200 my-3"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Property Details"})}),e.jsx(r.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Holding No :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((se=(ee=s==null?void 0:s.data)==null?void 0:ee.licenceDtl)==null?void 0:se.holding_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Apply Date:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((re=(te=s==null?void 0:s.data)==null?void 0:te.licenceDtl)==null?void 0:re.application_date)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Business Area :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((ie=(le=s==null?void 0:s.data)==null?void 0:le.licenceDtl)==null?void 0:ie.area_in_sqft)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Owner of Business Premises :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((ne=(ae=s==null?void 0:s.data)==null?void 0:ae.licenceDtl)==null?void 0:ne.premises_owner_name)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Pincode :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((ce=(de=s==null?void 0:s.data)==null?void 0:de.licenceDtl)==null?void 0:ce.pin_code)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Business Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold w-42 truncate",children:((xe=(oe=s==null?void 0:s.data)==null?void 0:oe.licenceDtl)==null?void 0:xe.address)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Landmark :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((he=(me=s==null?void 0:s.data)==null?void 0:me.licenceDtl)==null?void 0:he.landmark)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Firm Establishment Date :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:((be=(je=s==null?void 0:s.data)==null?void 0:je.licenceDtl)==null?void 0:be.establishment_date)||"--"})})]})})]}),e.jsx("div",{className:"border-t border-gray-200 my-3"}),e.jsxs(r.Card,{className:"mt-4 w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Owner Details"})}),e.jsx(r.CardBody,{children:e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-xs text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"#"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Owner Name"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Guardian Name"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Mobile No."}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Email"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Address"}),e.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Edit Mobile No."})]})}),e.jsx("tbody",{children:(ge=(pe=s==null?void 0:s.data)==null?void 0:pe.ownerDtl)==null?void 0:ge.map((t,c)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:c+1}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(t==null?void 0:t.owner_name)+" "+(t==null?void 0:t.owner_name_marathi)||"--"}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(t==null?void 0:t.guardian_name)+" "+(t==null?void 0:t.guardian_name_marathi)}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:t==null?void 0:t.mobile_no}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(t==null?void 0:t.email_id)||"--"}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(t==null?void 0:t.address)||"--"}),e.jsx("td",{className:"text-xs p-4 border border-slate-300",children:e.jsx(r.Button,{size:"sm",color:"blue",className:"py-1.5",onClick:()=>Pe(t),children:e.jsx("small",{children:"Edit"})})})]},c+1))})]})})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(r.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Document List"})}),e.jsx(r.CardBody,{children:((fe=s==null?void 0:s.data)==null?void 0:fe.documents.length)>0?(ue=(ye=s==null?void 0:s.data)==null?void 0:ye.documents)==null?void 0:ue.map((t,c)=>e.jsxs(p.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"col-span-2",children:e.jsx("h1",{className:"text-xs text-blue-600 font-bold mb-2",children:t==null?void 0:t.doc_code})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Status : "})}),e.jsx("div",{children:e.jsx("h1",{className:"".concat((t==null?void 0:t.verify_status)==1?"text-green-600":"text-red-900"," text-xs font-semibold"),children:(t==null?void 0:t.verify_status)==1?"Verified":"Pending"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Remarks : "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:(t==null?void 0:t.remarks)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold",children:"Document : "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs",children:e.jsx("button",{className:"text-xs text-white bg-blue-500 px-3 py-1 rounded",onClick:()=>{n(!0),Ae(t==null?void 0:t.doc_path)},children:"View"})})})]}),e.jsx("div",{className:"my-4 border-b-2"})]},c)):e.jsx("div",{className:"text-center ",children:e.jsx("h1",{className:"text-xs font-semibold text-red-900",children:"No Document Found"})})})]}),((Ne=d==null?void 0:d.result)==null?void 0:Ne.create)&&e.jsxs(Ce,{formik:y,children:[e.jsx("div",{className:"my-4 border-b-2"}),e.jsx($e,{label:"Comment",name:"comment",formik:y}),e.jsxs("div",{className:"flex justify-between items-center mt-4",children:[e.jsx(r.Button,{size:"sm",type:"submit",color:"red",onClick:()=>{y.setFieldValue("action","backward")},children:"Back to Dealing Officer"}),e.jsx(r.Button,{size:"sm",color:"blue",type:"submit",onClick:()=>{y.setFieldValue("action","forward")},children:"Forward"})]})]})]})]})}export{xs as default};
