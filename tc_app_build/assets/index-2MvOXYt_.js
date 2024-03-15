import{j as e,U as ge,b as fe,a as ye,t as me,Q as h,S as Ne}from"./index-kY_1vXrj.js";import{u as ue,h as ve,d as p}from"./router-g9NwwHut.js";import{P as we}from"./index-CK_pnLs4.js";import{u as De}from"./formik.esm-MEJnthxH.js";import{c as _e,a as ke}from"./index.esm-lGQm42K_.js";import{F as Ce}from"./FormProvider-rxNuI5sC.js";import{T as Be}from"./TextAreaField-cQVyZDKI.js";import"./index-KJUlVKah.js";import{r as l}from"./tailwind-xMhOhnt0.js";import{O as Ae}from"./OverLayLoader-SmXvaihr.js";import{u as Fe}from"./usePathWisePermission-LkOG6C84.js";import"./reactQuery-Q7rJjNxq.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-hq-Xw8mW.js";import"./reactIcons-TqjzQo_g.js";import"./headlessui-QgKi6LbN.js";import"./module-ZmhHPkNa.js";function Pe({open:a,setOpen:d,url:n}){const c=()=>d(!a),o=j=>j.split(".").pop();return e.jsxs(e.Fragment,{children:[a&&e.jsx("div",{onClick:c,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(a?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px]",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:"View Document"}),e.jsxs("button",{onClick:c,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),o(n)=="pdf"?e.jsx("embed",{type:"application/pdf",src:"https://docs.google.com/viewer?url=".concat(n,"&embedded=true"),width:"100%",height:"100%"}):e.jsx("img",{src:n,alt:"Naksha",className:"w-full h-full",loading:"lazy"}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsx("div",{className:"flex items-center justify-end mt-4 gap-5",children:e.jsx(l.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:c,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Ok"})})})})]})})})]})}function Je(){var g,f,y,N,u,v,w,D,_,k,C,B,A,F,P,L,S,T,O,V,z,$,U,E,M,R,q,Y,G,I,W,H,Q,J,K,X,Z,ee,se,te,re,le,ie,ae,de,ne,ce,oe;const a=ue();ge();const d=Fe("/amc-app/trade/application-details"),{mutateAsync:n,isLoading:c}=fe({}),{id:o}=ve(),[j,b]=p.useState(!1),[he,je]=p.useState(""),{data:s,isLoading:be,refetch:Le}=ye({api:(g=me)==null?void 0:g.tradeAppDetail,config:{id:o},options:{enabled:!!o}}),x=De({enableReinitialize:!0,initialValues:{comment:"",action:""},validationSchema:_e({comment:ke().required("Comment is required")}),onSubmit:async(t,{setSubmitting:i})=>{if(!(t!=null&&t.action)){h.error("Please select action");return}Ne.fire({title:"Are you sure?",text:"You want to ".concat((t==null?void 0:t.action)=="forward"?"Forward":"backward"," this application!"),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, submit it!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async m=>{m.isConfirmed&&pe(t)})}}),pe=async t=>{var i,m,xe;try{const r=await n({api:me.tradeLevel,data:{applicationId:o,comment:t==null?void 0:t.comment,action:(t==null?void 0:t.action)=="forward"?"forward":"backward"}});(i=r==null?void 0:r.data)!=null&&i.status?(h.success((m=r==null?void 0:r.data)==null?void 0:m.message),a("/amc-app/trade/utc-inbox")):h.error((xe=r==null?void 0:r.data)==null?void 0:xe.message)}catch(r){h.error(r==null?void 0:r.message)}};return e.jsxs(we,{title:"Trade Application Details",children:[be||c?e.jsx(Ae,{}):null,e.jsx(Pe,{open:j,setOpen:b,url:he}),e.jsxs("div",{className:"p-4",children:[e.jsxs(l.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Application Status"})}),e.jsx(l.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application No :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-green-900 font-semibold",children:((y=(f=s==null?void 0:s.data)==null?void 0:f.licenceDtl)==null?void 0:y.application_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application Type:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 ",children:((u=(N=s==null?void 0:s.data)==null?void 0:N.licenceDtl)==null?void 0:u.application_type)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application Status :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-blue-600 font-semibold",children:((v=s==null?void 0:s.data)==null?void 0:v.pendingStatus)||"--"})})]})})]}),e.jsx("div",{className:"border-t border-gray-200 my-3"}),e.jsxs(l.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),e.jsx(l.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Firm Name :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((D=(w=s==null?void 0:s.data)==null?void 0:w.licenceDtl)==null?void 0:D.firm_name)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Firm Type:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((k=(_=s==null?void 0:s.data)==null?void 0:_.licenceDtl)==null?void 0:k.firm_type)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Nature of Business :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((B=(C=s==null?void 0:s.data)==null?void 0:C.licenceDtl)==null?void 0:B.items_code)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"License For Years :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((F=(A=s==null?void 0:s.data)==null?void 0:A.licenceDtl)==null?void 0:F.licence_for_years)+"yrs"||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Category Type :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((L=(P=s==null?void 0:s.data)==null?void 0:P.licenceDtl)==null?void 0:L.category_type)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"License No :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((T=(S=s==null?void 0:s.data)==null?void 0:S.licenceDtl)==null?void 0:T.license_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Ownership Type :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((V=(O=s==null?void 0:s.data)==null?void 0:O.licenceDtl)==null?void 0:V.ownership_type)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application Type :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(($=(z=s==null?void 0:s.data)==null?void 0:z.licenceDtl)==null?void 0:$.application_type)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Apply Date :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((E=(U=s==null?void 0:s.data)==null?void 0:U.licenceDtl)==null?void 0:E.application_date)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Valid Upto :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((R=(M=s==null?void 0:s.data)==null?void 0:M.licenceDtl)==null?void 0:R.valid_upto)||"--"})})]})})]}),e.jsx("div",{className:"border-t border-gray-200 my-3"}),e.jsxs(l.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Property Details"})}),e.jsx(l.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Holding No :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((Y=(q=s==null?void 0:s.data)==null?void 0:q.licenceDtl)==null?void 0:Y.holding_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Apply Date:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((I=(G=s==null?void 0:s.data)==null?void 0:G.licenceDtl)==null?void 0:I.application_date)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Business Area :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((H=(W=s==null?void 0:s.data)==null?void 0:W.licenceDtl)==null?void 0:H.area_in_sqft)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Owner of Business Premises :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((J=(Q=s==null?void 0:s.data)==null?void 0:Q.licenceDtl)==null?void 0:J.premises_owner_name)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Pincode :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((X=(K=s==null?void 0:s.data)==null?void 0:K.licenceDtl)==null?void 0:X.pin_code)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Business Address:"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold w-42 truncate",children:((ee=(Z=s==null?void 0:s.data)==null?void 0:Z.licenceDtl)==null?void 0:ee.address)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Landmark :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((te=(se=s==null?void 0:s.data)==null?void 0:se.licenceDtl)==null?void 0:te.landmark)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Firm Establishment Date :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:((le=(re=s==null?void 0:s.data)==null?void 0:re.licenceDtl)==null?void 0:le.establishment_date)||"--"})})]})})]}),e.jsx("div",{className:"border-t border-gray-200 my-3"}),e.jsxs(l.Card,{className:"mt-4 w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner Details"})}),e.jsx(l.CardBody,{children:e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"#"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Owner Name"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Guardian Name"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Mobile No."}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Email"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Address"})]})}),e.jsx("tbody",{children:(ae=(ie=s==null?void 0:s.data)==null?void 0:ie.ownerDtl)==null?void 0:ae.map((t,i)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:i+1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(t==null?void 0:t.owner_name)+" "+(t==null?void 0:t.owner_name_marathi)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(t==null?void 0:t.guardian_name)+" "+(t==null?void 0:t.guardian_name_marathi)}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t==null?void 0:t.mobile_no}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(t==null?void 0:t.email_id)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(t==null?void 0:t.address)||"--"})]},i))})]})})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(l.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Document List"})}),e.jsx(l.CardBody,{children:((de=s==null?void 0:s.data)==null?void 0:de.documents.length)>0?(ce=(ne=s==null?void 0:s.data)==null?void 0:ne.documents)==null?void 0:ce.map((t,i)=>e.jsxs(p.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"col-span-2",children:e.jsx("h1",{className:"text-sm text-blue-600 font-bold mb-2",children:t==null?void 0:t.doc_code})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Status : "})}),e.jsx("div",{children:e.jsx("h1",{className:"".concat((t==null?void 0:t.verify_status)==1?"text-green-600":"text-red-900"," text-sm font-semibold"),children:(t==null?void 0:t.verify_status)==1?"Verified":"Pending"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Remarks : "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(t==null?void 0:t.remarks)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Document : "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:e.jsx("button",{className:"text-xs text-white bg-blue-500 px-3 py-1 rounded",onClick:()=>{b(!0),je(t==null?void 0:t.doc_path)},children:"View"})})})]}),e.jsx("div",{className:"my-4 border-b-2"})]},i)):e.jsx("div",{className:"text-center ",children:e.jsx("h1",{className:"text-sm font-semibold text-red-900",children:"No Document Found"})})})]}),((oe=d==null?void 0:d.result)==null?void 0:oe.create)&&e.jsxs(Ce,{formik:x,children:[e.jsx("div",{className:"my-4 border-b-2"}),e.jsx(Be,{label:"Comment",name:"comment",formik:x}),e.jsxs("div",{className:"flex justify-between items-center mt-4",children:[e.jsx(l.Button,{size:"sm",type:"submit",color:"red",onClick:()=>{x.setFieldValue("action","backward")},children:"Back to Dealing Officer"}),e.jsx(l.Button,{size:"sm",color:"blue",type:"submit",onClick:()=>{x.setFieldValue("action","forward")},children:"Forward"})]})]})]})]})}export{Je as default};
