import{j as e,d as He,c as B,p as f,w as Ke,S as Re,Q as x,I as Qe}from"./index-kwyYuGuR.js";import{d as S,e as Ze,u as Ge,r as Je}from"./router-5yjtezO8.js";import{r as o}from"./tailwind-6U-kYQAu.js";import{u as Xe}from"./formik.esm-BnzrXcQN.js";import{c as es,a as De,f as Ee}from"./index.esm-uHa2PMRf.js";import{F as ss}from"./FormProvider-E8aVPPYG.js";import{T as ts}from"./TextField-Xxe-cRKK.js";import{R as as}from"./RadioButton-x35Eeire.js";import{T as rs}from"./TextAreaField-qxkYCnYB.js";import"./index-iFVn5AxS.js";import{P as is}from"./index-tU9B2LIK.js";import{O as ns}from"./OverLayLoader-69Ia_cBz.js";import{M as A}from"./MyPDFViewer-FdKbrf1G.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./customInputValidation-jhKsg103.js";import"./module-9-PvGTXA.js";/* empty css              */import"./reactPdfViewerCore-_DhfwgKt.js";import"./reactPdfViewerDefaultLayout-2IVdmRVg.js";function $e({open:h,setOpen:C,url:y,ext:b,title:N}){const p=()=>C(!h);return e.jsxs(e.Fragment,{children:[h&&e.jsx("div",{onClick:p,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(h?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full ",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px]",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:N}),e.jsxs("button",{onClick:p,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),b==="pdf"?e.jsx(A,{fileUrl:y}):e.jsx("img",{src:y,alt:"Naksha",className:"w-full h-full",loading:"lazy"}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsx("div",{className:"flex items-center justify-end mt-4 gap-5",children:e.jsx(o.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:p,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Close"})})})})]})})})]})}const ls=[{label:"Yes",value:"yes"},{label:"No",value:"no"}];function Fs(){var F,M,O,V,z,q,T,L,R,D,E,$,Y,U,W,H,K,Q,Z,G,J,X,ee,se,te,ae,re,ie,ne,le,ce,oe,de,xe,me,he,ue,pe,je,ge,fe,ye,Ne,ve,be,we,_e,ke,Be,Se,Ae,Ce,Pe,Ie,Fe,Me,Oe,Ve,ze;const h=He({}),[C,y]=S.useState(""),[b,N]=S.useState(!1),[p,P]=S.useState(!1),{id:d}=Ze(),w=Ge(),_=B({api:f.staticSafDetail,config:{applicationId:d},value:[d],options:{enabled:!!d}}),{data:s,refetch:cs,error:os,isLoading:Ye}=B({api:f.getUploadDocNaksha,config:{applicationId:d},value:[d],options:{enabled:!!d}}),k=B({api:(F=Ke)==null?void 0:F.workFlowInfo,config:{workflowId:(M=s==null?void 0:s.data)==null?void 0:M.workflow_id},value:[(O=s==null?void 0:s.data)==null?void 0:O.workflow_id],options:{enabled:!!((V=s==null?void 0:s.data)!=null&&V.workflow_id)}}),t=Xe({enableReinitialize:!0,initialValues:{areaOfPlot:"",isNaksha:(z=s==null?void 0:s.data)!=null&&z.naksha?"":"no",comment:"",message:""},validationSchema:es({isNaksha:De().required("Required"),comment:De().required("Required").max(500,"Max 500 characters"),areaOfPlot:Ee().when("isNaksha",{is:"yes",then:()=>Ee().required("Required")})}),onSubmit:async r=>{Re.fire({title:"Are you sure?",text:"You are going to verify naksha of this property ",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(a=>{a.isConfirmed&&Ue(r)}).catch(a=>{var i,c;x.error((c=(i=a==null?void 0:a.response)==null?void 0:i.data)==null?void 0:c.message)})}}),Ue=async r=>{var i,c,u,g,n,qe,Te,Le;const a={applicationId:d,IsDouble:r.isNaksha==="no",areaOfPlot:r.areaOfPlot};try{const l=await h.mutateAsync({api:f.nakshaVerify,data:a});if((i=l==null?void 0:l.data)!=null&&i.status){console.log((c=l==null?void 0:l.data)==null?void 0:c.message),y((u=l==null?void 0:l.data)==null?void 0:u.message);const m=await h.mutateAsync({api:f.safLevel,data:{applicationId:d,action:"forward",comment:"Ok"}});(g=m==null?void 0:m.data)!=null&&g.status?(w("/amc-app/property/saf-verification-list",{replace:!0}),x.success((n=m==null?void 0:m.data)==null?void 0:n.message)):x.error((qe=m==null?void 0:m.data)==null?void 0:qe.message)}else x.error((Te=l==null?void 0:l.data)==null?void 0:Te.message)}catch(l){x.error(((Le=l==null?void 0:l.data)==null?void 0:Le.message)||"Something went wrong !")}},We=async()=>{var r;if(((r=t==null?void 0:t.values)==null?void 0:r.comment)=="")return x.error("Comment is required !");Re.fire({title:"Are you sure?",text:"You are going to back this application to Agency Engineer",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async a=>{var i,c,u,g;if(a.isConfirmed)try{const n=await h.mutateAsync({api:f.safLevel,data:{applicationId:d,receiverRoleId1:"",action:"backward",comment:((i=t==null?void 0:t.values)==null?void 0:i.comment)||"No Comment"}});(c=n==null?void 0:n.data)!=null&&c.status?(x.success((u=n==null?void 0:n.data)==null?void 0:u.message),w("/amc-app/property/saf-verification-list",{replace:!0})):x.error(((g=n==null?void 0:n.data)==null?void 0:g.message)||"Something went wrong, Please try again")}catch(n){x.error(n==null?void 0:n.message),console.log(n)}}).catch(a=>{var i,c;x.error((c=(i=a==null?void 0:a.response)==null?void 0:i.data)==null?void 0:c.message)})};Je.useEffect(()=>{var r;((r=t==null?void 0:t.values)==null?void 0:r.isNaksha)=="no"&&(t.setFieldValue("areaOfPlot",""),t.setFieldValue("message",""))},[(q=t==null?void 0:t.values)==null?void 0:q.isNaksha]);const j=()=>{var a,i,c;return(c=(i=(a=_==null?void 0:_.data)==null?void 0:a.data)==null?void 0:i.documents)==null?void 0:c.find(u=>u.doc_code==="Measurement form")},v=(L=(T=j())==null?void 0:T.doc_path)==null?void 0:L.split(".").pop(),I=()=>{var r,a,i;return((r=s==null?void 0:s.data)==null?void 0:r.assessment_type)=="Reassessment"?(a=s==null?void 0:s.data)==null?void 0:a.new_builtup_area:(i=s==null?void 0:s.data)==null?void 0:i.builtup_area};return Ye?e.jsx(Qe,{}):e.jsxs(e.Fragment,{children:[h.isLoading&&e.jsx(ns,{}),e.jsxs(is,{title:"Naksha Verification",children:[e.jsx($e,{open:b,setOpen:N,url:(D=(R=s==null?void 0:s.data)==null?void 0:R.naksha)==null?void 0:D.doc_path,ext:($=(E=s==null?void 0:s.data)==null?void 0:E.naksha)==null?void 0:$.ext,title:"Sanction Plan"}),e.jsx($e,{open:p,setOpen:P,url:((U=(Y=s==null?void 0:s.data)==null?void 0:Y.measurement_sheet)==null?void 0:U.doc_path)||((W=j())==null?void 0:W.doc_path),ext:((K=(H=s==null?void 0:s.data)==null?void 0:H.measurement_sheet)==null?void 0:K.ext)||v,title:"Measurement Sheet"}),e.jsxs("div",{className:"p-4",children:[e.jsxs(o.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-xs font-semibold text-gray-100",children:"Basic Details"})}),e.jsx(o.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Application No :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs  text-gray-900",children:(Q=s==null?void 0:s.data)==null?void 0:Q.saf_no})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Owner Name :"})}),e.jsx("div",{className:"text-xs  text-gray-900",children:(Z=s==null?void 0:s.data)==null?void 0:Z.applicant_name}),e.jsx("div",{children:e.jsxs("h1",{className:"text-xs font-semibold text-gray-900",children:["Buildup Area (",e.jsx("small",{children:"In Sqft"}),") :"]})}),e.jsx("div",{className:"text-xs  text-gray-900",children:(G=s==null?void 0:s.data)==null?void 0:G.builtup_area}),((J=s==null?void 0:s.data)==null?void 0:J.assessment_type)=="Reassessment"?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsxs("h1",{className:"text-xs font-semibold text-gray-900",children:["New Buildup Area (",e.jsx("small",{children:"In Sqft"}),") :"]})}),e.jsx("div",{className:"text-xs  text-gray-900",children:(X=s==null?void 0:s.data)==null?void 0:X.new_builtup_area})]}):null,e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Zone :"})}),e.jsx("div",{className:"text-xs  text-gray-900",children:e.jsx("h1",{className:"text-xs  text-gray-900",children:(ee=s==null?void 0:s.data)==null?void 0:ee.zone})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Ward :"})}),e.jsx("div",{className:"text-xs  text-gray-900",children:e.jsx("h1",{className:"text-xs  text-gray-900",children:(se=s==null?void 0:s.data)==null?void 0:se.new_ward_no})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Property Type :"})}),e.jsx("div",{className:"text-xs  text-gray-900",children:e.jsx("h1",{className:"text-xs  text-gray-900",children:(te=s==null?void 0:s.data)==null?void 0:te.property_type})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Address :"})}),e.jsx("div",{className:"text-xs  text-gray-900",children:e.jsx("h1",{className:"text-xs  text-gray-900",children:(ae=s==null?void 0:s.data)==null?void 0:ae.prop_address})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Assessment Type :"})}),e.jsx("div",{className:"text-xs  text-gray-900",children:e.jsx("h1",{className:"text-xs  text-gray-900",children:(re=s==null?void 0:s.data)==null?void 0:re.assessment_type})}),e.jsx("div",{children:e.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Application Date :"})}),e.jsx("div",{className:"text-xs  text-gray-900",children:e.jsx("h1",{className:"text-xs  text-gray-900",children:(ie=s==null?void 0:s.data)==null?void 0:ie.application_date})}),e.jsx("div",{className:"col-span-2 flex justify-center items-center mt-3",children:e.jsx(o.Button,{size:"sm",variant:"outlined",onClick:()=>w("/amc-app/property/saf-property-details/".concat(d)),children:e.jsx("span",{children:"View Saf Details"})})})]})})]}),e.jsx("div",{className:"border-b-2 border-gray-300 mt-3 mb-3"}),e.jsxs(o.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsxs("h1",{className:"text-xs font-semibold text-gray-100",children:["Measurement Sheet"," "]})}),(ne=s==null?void 0:s.data)!=null&&ne.measurement_sheet||(le=j())!=null&&le.doc_path?e.jsxs("div",{className:"grid grid-cols-1 gap-2 items-center",children:[((oe=(ce=s==null?void 0:s.data)==null?void 0:ce.measurement_sheet)==null?void 0:oe.ext)=="jpg"||((xe=(de=s==null?void 0:s.data)==null?void 0:de.measurement_sheet)==null?void 0:xe.ext)=="jpeg"||((he=(me=s==null?void 0:s.data)==null?void 0:me.measurement_sheet)==null?void 0:he.ext)=="png"||v=="jpg"||v=="jpeg"||v=="png"?e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("img",{src:((pe=(ue=s==null?void 0:s.data)==null?void 0:ue.measurement_sheet)==null?void 0:pe.doc_path)||((je=j())==null?void 0:je.doc_path),alt:"measurement_sheet",loading:"lazy",width:500,className:"w-full h-full object-cover"})}):e.jsx("div",{className:"w-full",children:e.jsx(A,{fileUrl:((fe=(ge=s==null?void 0:s.data)==null?void 0:ge.measurement_sheet)==null?void 0:fe.doc_path)||((ye=j())==null?void 0:ye.doc_path),toolbar:!1})}),e.jsx("div",{className:"flex justify-center items-center mb-5 mt-4",children:e.jsx(o.Button,{type:"button",size:"sm",color:"blue",className:"text-[11px]  h-8 justify-center items-center text-center flex",onClick:()=>P(!0),variant:"outlined",children:e.jsx("span",{children:"View Measurement"})})})]}):e.jsx("div",{className:"text-center py-5",children:e.jsx("h1",{className:"text-red-900 font-semibold text-xs",children:"Measurement Sheet not found!"})})]}),e.jsx("div",{className:"border-b-2 border-gray-300 mt-3 mb-3"}),e.jsxs(o.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-xs font-semibold text-gray-100",children:"Sanction Plan"})}),e.jsx(o.CardBody,{children:(Ne=s==null?void 0:s.data)!=null&&Ne.naksha?e.jsxs("div",{className:"grid grid-cols-1 gap-2 items-center",children:[((be=(ve=s==null?void 0:s.data)==null?void 0:ve.naksha)==null?void 0:be.ext)=="jpg"||((_e=(we=s==null?void 0:s.data)==null?void 0:we.naksha)==null?void 0:_e.ext)=="jpeg"||((Be=(ke=s==null?void 0:s.data)==null?void 0:ke.naksha)==null?void 0:Be.ext)=="png"?e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("img",{src:(Ae=(Se=s==null?void 0:s.data)==null?void 0:Se.naksha)==null?void 0:Ae.doc_path,alt:"naksha",loading:"lazy",width:500,className:"w-full h-full object-cover"})}):e.jsx("div",{className:"w-full",children:e.jsx(A,{fileUrl:(Pe=(Ce=s==null?void 0:s.data)==null?void 0:Ce.naksha)==null?void 0:Pe.doc_path})}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(o.Button,{type:"button",size:"sm",color:"blue",className:"text-[11px]  h-8 justify-center items-center text-center flex",onClick:()=>N(!0),variant:"outlined",children:e.jsx("span",{children:"View Sanction"})})})]}):e.jsx("div",{className:"text-center",children:e.jsx("h1",{className:"text-red-900 font-semibold text-xs",children:"Sanction Plan not found!"})})})]}),e.jsx("div",{className:"border-b-2 border-gray-300 mt-3 mb-4"}),((Ie=t==null?void 0:t.values)==null?void 0:Ie.isNaksha)=="no"&&e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("h1",{className:"text-xs font-semibold text-red-900 text-center mb-3 w-52",children:"Double taxation will be applied for this property !"})}),e.jsxs(ss,{formik:t,children:[((Fe=s==null?void 0:s.data)==null?void 0:Fe.naksha)&&e.jsx("div",{className:"flex justify-center gap-4 items-center px-5 ",children:ls.map(r=>e.jsx(as,{formik:t,name:"isNaksha",label:r.label,value:r.value},r.value))}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 items-center mt-4",children:[t.values.isNaksha==="yes"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xs font-semibold text-gray-900"}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("h1",{className:"text-xs font-semibold text-red-900 text-center mb-3 w-52",children:(Me=t==null?void 0:t.values)==null?void 0:Me.message})})]}),e.jsx("div",{children:e.jsx(ts,{label:"Constructed Area(In Sqft) :",type:"number",formik:t,name:"areaOfPlot",placeholder:"Constructed Area (In Sqft)",onBlur:()=>{var r,a;((r=t==null?void 0:t.values)==null?void 0:r.areaOfPlot)<I()?t.setFieldValue("message","100% Taxation will be applied on ".concat(I()-((a=t==null?void 0:t.values)==null?void 0:a.areaOfPlot)," sqft constructed area !")):t.setFieldValue("message","")}})})]}),e.jsx("div",{children:e.jsx(rs,{label:"comment",formik:t,name:"comment",placeholder:"Comment"})})]}),e.jsxs("div",{className:"flex justify-center mt-4 gap-5",children:[e.jsx(o.Button,{onClick:We,size:"sm",className:"bg-red-500 text-white",children:e.jsx("small",{children:"Back To Agency Engineer"})}),((ze=(Ve=(Oe=k==null?void 0:k.data)==null?void 0:Oe.data)==null?void 0:Ve.permissions)==null?void 0:ze.can_forward)&&e.jsx(o.Button,{type:"submit",size:"sm",className:"bg-blue-500 text-white",children:e.jsx("small",{children:"Forward"})})]})]})]})]})]})}export{Fs as default};
