import{d as Qe,c as O,p as _,w as He,S as ze,Q as x,j as e,I as Je}from"./index-3ck_aEIh.js";import{d as C,u as Xe,e as Ze}from"./router-5yjtezO8.js";import{u as Ve}from"./formik.esm-BnzrXcQN.js";import{c as De,d as Ee,a as et}from"./index.esm-uHa2PMRf.js";import{F as tt}from"./FormProvider-0_zv-s35.js";import{T as st}from"./TextAreaField--HGFEHbG.js";import"./index-iFVn5AxS.js";import{r as y}from"./tailwind-6U-kYQAu.js";import{P as at}from"./index-n7n4ULIF.js";import{r as Ke}from"./resizeImage--5WTzS_k.js";import{O as nt}from"./OverLayLoader-kO56HPsg.js";import{M as fe}from"./MyPDFViewer-F6lCSwPr.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./customInputValidation-jhKsg103.js";import"./module-ukB6BBcz.js";/* empty css              */import"./reactPdfViewerCore-_DhfwgKt.js";import"./reactPdfViewerDefaultLayout-2IVdmRVg.js";function Ct(){var q,Y,$,G,k,Q,H,J,X,Z,V,D,ee,te,se,ae,ne,re,de,le,oe,ce,ie,me,pe,ue,xe,ge,he,ye,je,Ne,we,be,Ae,Te,Re,Se,_e,Ce,Fe,ve,Me,Ie,Be,Pe,Le,Oe,Ue;const[N,v]=C.useState("");C.useState(""),C.useState("");const M=Xe(),F=Qe({}),[I,U]=C.useState(""),[z,E]=C.useState(""),[B,K]=C.useState(""),[rt,f]=C.useState(""),{id:j}=Ze(),t=O({api:_.staticSafDetail,config:{applicationId:j},value:[j],options:{enabled:!!j}}),s=O({api:_.staticSafDetailForVerification,config:{applicationId:j},value:[j],options:{enabled:!!j}}),P=O({api:(q=He)==null?void 0:q.workFlowInfo,config:{workflowId:($=(Y=t==null?void 0:t.data)==null?void 0:Y.data)==null?void 0:$.workflow_id},value:[(k=(G=t==null?void 0:t.data)==null?void 0:G.data)==null?void 0:k.workflow_id],options:{enabled:!!((H=(Q=t==null?void 0:t.data)==null?void 0:Q.data)!=null&&H.workflow_id)}}),W=()=>{var n,l,o;return(o=(l=(n=s==null?void 0:s.data)==null?void 0:n.data)==null?void 0:l.lastTcFloorVerificationData)==null?void 0:o.reduce((p,c)=>p+(c==null?void 0:c.rent_amount),0)},d=Ve({initialValues:{uploadMeasurement:"",comment:"",rentDocCode:"RENT AGREEMENT",rentAgreementDocument:null,rentDocCategory:"Rent Agreement"},validationSchema:De({uploadMeasurement:((X=(J=t==null?void 0:t.data)==null?void 0:J.data)==null?void 0:X.applied_by)=="TC"||((V=(Z=t==null?void 0:t.data)==null?void 0:Z.data)==null?void 0:V.applied_by)=="TC Reassesment"?Ee().notRequired():Ee().required("Measurement Sheet is required").test("fileSize","Max 10 mb file size",a=>(a==null?void 0:a.size)<=1e7),comment:et().label("Comment").min(2).max(500)}),onSubmit:async a=>{ze.fire({title:"Are you sure?",text:"\n       You are going to forward the application to the ".concat(We()),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(n=>{n.isConfirmed&&qe(a)}).catch(n=>{var l,o;console.log(n),x.error((o=(l=n==null?void 0:n.response)==null?void 0:l.data)==null?void 0:o.message)})}}),L=()=>{var a,n,l,o,p,c,r,u,i,w,b,A,T,R,S,m,g,h;return((n=(a=s==null?void 0:s.data)==null?void 0:a.data)==null?void 0:n.assessment_type)=="New Assessment"&&((p=(o=(l=s==null?void 0:s.data)==null?void 0:l.data)==null?void 0:o.lastTcVerificationData)==null?void 0:p.prop_type_id)=="2"?"7":((r=(c=s==null?void 0:s.data)==null?void 0:c.data)==null?void 0:r.assessment_type)=="New Assessment"&&((w=(i=(u=s==null?void 0:s.data)==null?void 0:u.data)==null?void 0:i.lastTcVerificationData)==null?void 0:w.prop_type_id)=="4"?"9":((A=(b=s==null?void 0:s.data)==null?void 0:b.data)==null?void 0:A.assessment_type)=="Reassessment"||((R=(T=s==null?void 0:s.data)==null?void 0:T.data)==null?void 0:R.assessment_type)=="Bifurcation"||((m=(S=s==null?void 0:s.data)==null?void 0:S.data)==null?void 0:m.assessment_type)=="Amalgamation"||((h=(g=s==null?void 0:s.data)==null?void 0:g.data)==null?void 0:h.assessment_type)=="Mutation"?N=="ATS"?"9":"7":"NO WORKFLOW"},We=()=>{var a,n,l,o,p,c,r,u,i,w,b,A,T,R,S,m,g,h;return((n=(a=s==null?void 0:s.data)==null?void 0:a.data)==null?void 0:n.assessment_type)=="New Assessment"&&((p=(o=(l=s==null?void 0:s.data)==null?void 0:l.data)==null?void 0:o.lastTcVerificationData)==null?void 0:p.prop_type_id)=="2"?"Nagar Rachna":((r=(c=s==null?void 0:s.data)==null?void 0:c.data)==null?void 0:r.assessment_type)=="New Assessment"&&((w=(i=(u=s==null?void 0:s.data)==null?void 0:u.data)==null?void 0:i.lastTcVerificationData)==null?void 0:w.prop_type_id)=="4"?"ATS":((A=(b=s==null?void 0:s.data)==null?void 0:b.data)==null?void 0:A.assessment_type)=="Reassessment"||((R=(T=s==null?void 0:s.data)==null?void 0:T.data)==null?void 0:R.assessment_type)=="Bifurcation"||((m=(S=s==null?void 0:s.data)==null?void 0:S.data)==null?void 0:m.assessment_type)=="Amalgamation"||((h=(g=s==null?void 0:s.data)==null?void 0:g.data)==null?void 0:h.assessment_type)=="Mutation"?N=="ATS"?"ATS":"Nagar Rachna":"NO WORKFLOW"},qe=async a=>{var n,l,o,p,c,r,u,i,w,b,A,T,R,S;if(L()=="NO WORKFLOW")return x.error("No workflow found");if(await ke(),((l=(n=t==null?void 0:t.data)==null?void 0:n.data)==null?void 0:l.applied_by)=="TC"||((p=(o=t==null?void 0:t.data)==null?void 0:o.data)==null?void 0:p.applied_by)=="TC Reassesment")try{const m=await F.mutateAsync({api:_.safLevelV2,data:{applicationId:j,receiverRoleId:L(),action:"forward",comment:(a==null?void 0:a.comment)||"OK"}});(c=m==null?void 0:m.data)!=null&&c.status?(x.success((r=m==null?void 0:m.data)==null?void 0:r.message),M("/amc-app/property/saf-verification-list",{replace:!0})):x.error((u=m==null?void 0:m.data)==null?void 0:u.message)}catch(m){x.error((i=m==null?void 0:m.data)==null?void 0:i.message)}else{const m=new FormData;m.append("applicationId",j),m.append("document",a==null?void 0:a.uploadMeasurement);try{const g=await F.mutateAsync({api:_.uploadMeasurementSheetApi,data:m});if((w=g==null?void 0:g.data)!=null&&w.status){const h=await F.mutateAsync({api:_.safLevelV2,data:{applicationId:j,receiverRoleId:L(),action:"forward",comment:(a==null?void 0:a.comment)||"OK"}});(b=h==null?void 0:h.data)!=null&&b.status?(x.success((A=h==null?void 0:h.data)==null?void 0:A.message),M("/amc-app/property/saf-verification-list",{replace:!0})):x.error((T=h==null?void 0:h.data)==null?void 0:T.message)}else x.error((R=g==null?void 0:g.data)==null?void 0:R.message)}catch(g){x.error((S=g==null?void 0:g.data)==null?void 0:S.message)}}},Ye=async()=>{var a;if(((a=d==null?void 0:d.values)==null?void 0:a.comment)=="")return x.error("Comment is required !");ze.fire({title:"Are you sure?",text:"You are going to backward of this application",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async n=>{var l,o,p,c;if(n.isConfirmed)try{const r=await F.mutateAsync({api:_.safLevel,data:{applicationId:j,receiverRoleId1:"",action:"backward",comment:((l=d==null?void 0:d.values)==null?void 0:l.comment)||"No Comment"}});(o=r==null?void 0:r.data)!=null&&o.status?(x.success((p=r==null?void 0:r.data)==null?void 0:p.message),M("/amc-app/property/saf-verification-list",{replace:!0})):x.error(((c=r==null?void 0:r.data)==null?void 0:c.message)||"Something went wrong, Please try again")}catch(r){x.error(r==null?void 0:r.message),console.log(r)}}).catch(n=>{var l,o;x.error((o=(l=n==null?void 0:n.response)==null?void 0:l.data)==null?void 0:o.message)})},$e=async a=>{var l,o,p;const n=a.target.files[0];if((n==null?void 0:n.type)==="application/pdf"){const c=new FileReader;c.onload=r=>{U(r.target.result),E(n.name.split(".").pop())},c.readAsDataURL(n),d.setFieldValue("uploadMeasurement",n)}else{const c=await Ke((l=a==null?void 0:a.target)==null?void 0:l.files[0]),r=new File([c],(p=(o=a==null?void 0:a.target)==null?void 0:o.files[0])==null?void 0:p.name,{type:"image/*"}),u=new FileReader;u.onload=i=>{U(i.target.result),E(r.name.split(".").pop())},u.readAsDataURL(r),d.setFieldValue("uploadMeasurement",r)}},Ge=async a=>{var l,o,p;const n=a.target.files[0];if((n==null?void 0:n.type)==="application/pdf"){const c=new FileReader;c.onload=r=>{K(r.target.result),f(n.name.split(".").pop())},c.readAsDataURL(n),d.setFieldValue("rentAgreementDocument",n)}else{const c=await Ke((l=a==null?void 0:a.target)==null?void 0:l.files[0]),r=new File([c],(p=(o=a==null?void 0:a.target)==null?void 0:o.files[0])==null?void 0:p.name,{type:"image/*"}),u=new FileReader;u.onload=i=>{K(i.target.result),f(r.name.split(".").pop())},u.readAsDataURL(r),d.setFieldValue("rentAgreementDocument",r)}},ke=async a=>{var n,l,o,p,c,r;if(W()>0&&((n=d==null?void 0:d.values)!=null&&n.rentAgreementDocument)){const u=new FormData;u.append("applicationId",j),u.append("docCode","RENT AGREEMENT"),u.append("docCategory","Rent Agreement"),u.append("document",(l=d==null?void 0:d.values)==null?void 0:l.rentAgreementDocument);try{const i=await F.mutateAsync({api:_.documentUpload,data:u});(o=i==null?void 0:i.data)!=null&&o.status?x.success((p=i==null?void 0:i.data)==null?void 0:p.message):x.error((c=i==null?void 0:i.data)==null?void 0:c.message)}catch(i){x.error((r=i==null?void 0:i.data)==null?void 0:r.message)}}};return t!=null&&t.isLoading?e.jsx(Je,{}):e.jsxs(at,{title:"Measurement",children:[F.isLoading&&e.jsx(nt,{}),e.jsx(tt,{formik:d,children:e.jsxs("div",{className:"p-4 ",children:[e.jsx(y.Card,{className:"w-full",children:e.jsxs(y.CardBody,{children:[e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h1",{className:"font-semibold text-sm",children:"Application Details"})}),e.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-3",children:[e.jsx("h1",{className:"font-semibold text-xs",children:"Application No : "}),e.jsx("h1",{className:"text-xs",children:(ee=(D=t==null?void 0:t.data)==null?void 0:D.data)==null?void 0:ee.saf_no}),e.jsx("h1",{className:"font-semibold text-xs",children:"Application Type : "}),e.jsx("h1",{className:"text-xs",children:(se=(te=t==null?void 0:t.data)==null?void 0:te.data)==null?void 0:se.assessment_type}),e.jsx("h1",{className:"font-semibold text-xs",children:"Apply Date : "}),e.jsx("h1",{className:"text-xs",children:(ne=(ae=t==null?void 0:t.data)==null?void 0:ae.data)==null?void 0:ne.application_date}),e.jsx("h1",{className:"font-semibold text-xs",children:"Owner Name : "}),e.jsx("h1",{className:"text-xs",children:(de=(re=t==null?void 0:t.data)==null?void 0:re.data)==null?void 0:de.applicant_name}),e.jsx("h1",{className:"font-semibold text-xs",children:"Mobile No : "}),e.jsx("h1",{className:"text-xs w-40 truncate",children:(ie=(ce=(oe=(le=t==null?void 0:t.data)==null?void 0:le.data)==null?void 0:oe.owners)==null?void 0:ce.map(a=>a==null?void 0:a.mobile_no))==null?void 0:ie.join(", ")})]})]})}),W()>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(y.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-xs font-semibold text-gray-100",children:"Rent Agreement"})}),B&&(z==="pdf"?e.jsx(fe,{fileUrl:B}):e.jsx("div",{className:"flex justify-center px-4 py-2",children:e.jsx("img",{src:B,alt:"preview",loading:"lazy"})})),e.jsx(y.CardBody,{children:e.jsx("div",{className:"grid grid-cols-1 justify-center gap-5",children:((pe=(me=t==null?void 0:t.data)==null?void 0:me.data)==null?void 0:pe.applied_by)!="TC"&&((xe=(ue=t==null?void 0:t.data)==null?void 0:ue.data)==null?void 0:xe.applied_by)!="TC Reassesment"&&e.jsxs("div",{children:[e.jsx("div",{className:"mb-1",children:e.jsx("h1",{className:"font-semibold text-xs",children:"Upload Rent Agreement"})}),e.jsx("input",{type:"file",accept:"application/pdf, image/*",name:"rentAgreementDocument",onChange:Ge,className:"border border-gray-300 p-2 w-full rounded-lg"}),e.jsx("small",{className:"text-red-500",children:((ge=d==null?void 0:d.errors)==null?void 0:ge.rentAgreementDocument)&&((he=d==null?void 0:d.touched)==null?void 0:he.rentAgreementDocument)&&((ye=d==null?void 0:d.errors)==null?void 0:ye.rentAgreementDocument)})]})})})]}),e.jsx("div",{className:"my-4 border-b-2"})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(y.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-xs font-semibold text-gray-100",children:((Ne=(je=t==null?void 0:t.data)==null?void 0:je.data)==null?void 0:Ne.applied_by)=="TC"||((be=(we=t==null?void 0:t.data)==null?void 0:we.data)==null?void 0:be.applied_by)=="TC Reassesment"?"Comment":"Upload Measurement Sheet"})}),I&&(z==="pdf"?e.jsx(fe,{fileUrl:I}):e.jsx("div",{className:"flex justify-center px-4 py-2",children:e.jsx("img",{src:I,alt:"preview",loading:"lazy"})})),e.jsx(y.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-1 justify-center gap-5",children:[((Te=(Ae=t==null?void 0:t.data)==null?void 0:Ae.data)==null?void 0:Te.applied_by)!="TC"&&((Se=(Re=t==null?void 0:t.data)==null?void 0:Re.data)==null?void 0:Se.applied_by)!="TC Reassesment"&&e.jsxs("div",{children:[e.jsx("div",{className:"mb-1",children:e.jsx("h1",{className:"font-semibold text-xs",children:"Upload Measurement Sheet"})}),e.jsx("input",{type:"file",accept:"application/pdf, image/*",name:"uploadMeasurement",onChange:$e,className:"border border-gray-300 p-2 w-full rounded-lg"}),e.jsx("small",{className:"text-red-500",children:((_e=d==null?void 0:d.errors)==null?void 0:_e.uploadMeasurement)&&((Ce=d==null?void 0:d.touched)==null?void 0:Ce.uploadMeasurement)&&((Fe=d==null?void 0:d.errors)==null?void 0:Fe.uploadMeasurement)})]}),e.jsx("div",{children:e.jsx(st,{label:"Comment",name:"comment",formik:d,placeholder:"Comment"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"justify-center items-center mt-4 gap-3",children:[e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(y.Button,{onClick:Ye,size:"sm",className:"bg-red-500 text-white",children:e.jsx("small",{children:"BACK TO LIPIK"})})}),((Ie=(Me=(ve=P==null?void 0:P.data)==null?void 0:ve.data)==null?void 0:Me.permissions)==null?void 0:Ie.can_forward)&&(((Pe=(Be=s==null?void 0:s.data)==null?void 0:Be.data)==null?void 0:Pe.assessment_type)=="New Assessment"?e.jsx("div",{className:"flex justify-center items-center gap-2 mt-4",children:((Ue=(Oe=(Le=s==null?void 0:s.data)==null?void 0:Le.data)==null?void 0:Oe.lastTcVerificationData)==null?void 0:Ue.prop_type_id)=="4"?e.jsx(y.Button,{type:"submit",onClick:()=>v("ATS"),size:"sm",className:"bg-blue-500 text-white",children:e.jsx("small",{children:"Send To ATS"})}):e.jsxs(e.Fragment,{children:[e.jsx(y.Button,{type:"submit",onClick:()=>v("ATS"),size:"sm",className:"bg-blue-500 text-white",children:e.jsx("small",{children:"Send To ATS"})}),e.jsx(y.Button,{type:"submit",size:"sm",onClick:()=>v("SR_LIPIK"),className:"bg-green-500 text-white",children:e.jsx("small",{children:"Send To Nagar Rachna"})})]})}):e.jsxs("div",{className:"flex justify-center items-center gap-2 mt-4",children:[e.jsx(y.Button,{type:"submit",onClick:()=>v("ATS"),size:"sm",className:"bg-blue-500 text-white",children:e.jsx("small",{children:"Send To ATS"})}),e.jsx(y.Button,{type:"submit",size:"sm",onClick:()=>v("SR_LIPIK"),className:"bg-green-500 text-white",children:e.jsx("small",{children:"Send To Nagar Rachna"})})]}))]})})]})})]})}export{Ct as default};