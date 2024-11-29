import{d as Ve,c as W,p as S,w as De,S as Ye,Q as x,j as e,I as et}from"./index-iVUjWhr9.js";import{d as C,u as tt,e as st}from"./router-5yjtezO8.js";import{u as at}from"./formik.esm-BnzrXcQN.js";import{c as nt,d as $e,a as dt}from"./index.esm-uHa2PMRf.js";import{F as rt}from"./FormProvider-bvmZiPgo.js";import{T as lt}from"./TextAreaField-6pPVNPMx.js";import"./index-iFVn5AxS.js";import{r as y}from"./tailwind-6U-kYQAu.js";import{P as ot}from"./index-6UKcasu-.js";import{r as Ge}from"./resizeImage-0R1C6TG9.js";import{O as ct}from"./OverLayLoader-laS6Seqn.js";import{M as ke}from"./MyPDFViewer-yX8POwRg.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./customInputValidation-jhKsg103.js";import"./module-UibcSNar.js";/* empty css              */import"./reactPdfViewerCore-_DhfwgKt.js";import"./reactPdfViewerDefaultLayout-2IVdmRVg.js";function Bt(){var H,J,X,Z,f,V,D,ee,te,se,ae,ne,de,re,le,oe,ce,me,ie,pe,ue,xe,ge,he,ye,je,Ne,we,be,Ae,Te,Re,_e,Se,Ce,Fe,ve,Me,Ie,Be,Pe,Le,Oe,Ue,ze,Ee,Ke,We,qe;const[N,v]=C.useState("");C.useState(""),C.useState("");const O=tt(),F=Ve({}),[U,q]=C.useState(""),[Y,$]=C.useState(""),[z,G]=C.useState(""),[mt,k]=C.useState(""),{id:j}=st(),s=W({api:S.staticSafDetail,config:{applicationId:j},value:[j],options:{enabled:!!j}}),t=W({api:S.staticSafDetailForVerification,config:{applicationId:j},value:[j],options:{enabled:!!j}}),E=W({api:(H=De)==null?void 0:H.workFlowInfo,config:{workflowId:(X=(J=s==null?void 0:s.data)==null?void 0:J.data)==null?void 0:X.workflow_id},value:[(f=(Z=s==null?void 0:s.data)==null?void 0:Z.data)==null?void 0:f.workflow_id],options:{enabled:!!((D=(V=s==null?void 0:s.data)==null?void 0:V.data)!=null&&D.workflow_id)}}),Q=()=>{var n,l,o;return(o=(l=(n=t==null?void 0:t.data)==null?void 0:n.data)==null?void 0:l.lastTcFloorVerificationData)==null?void 0:o.reduce((p,c)=>p+(c==null?void 0:c.rent_amount),0)},r=at({initialValues:{uploadMeasurement:"",comment:"",rentDocCode:"RENT AGREEMENT",rentAgreementDocument:null,rentDocCategory:"Rent Agreement"},validationSchema:nt({uploadMeasurement:((te=(ee=s==null?void 0:s.data)==null?void 0:ee.data)==null?void 0:te.applied_by)=="TC"||((ae=(se=s==null?void 0:s.data)==null?void 0:se.data)==null?void 0:ae.applied_by)=="TC Reassesment"?$e().notRequired():$e().required("Measurement Sheet is required").test("fileSize","Max 10 mb file size",a=>(a==null?void 0:a.size)<=1e7),comment:dt().label("Comment").min(2).max(500)}),onSubmit:async a=>{Ye.fire({title:"Are you sure?",text:"\n       You are going to forward the application to the ".concat(Qe()),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(n=>{n.isConfirmed&&He(a)}).catch(n=>{var l,o;console.log(n),x.error((o=(l=n==null?void 0:n.response)==null?void 0:l.data)==null?void 0:o.message)})}}),K=()=>{var a,n,l,o,p,c,d,u,m,w,b,A,T,R,_,i,g,h,M,I,B,P,L;return((n=(a=t==null?void 0:t.data)==null?void 0:a.data)==null?void 0:n.assessment_type)=="New Assessment"&&((p=(o=(l=t==null?void 0:t.data)==null?void 0:l.data)==null?void 0:o.lastTcVerificationData)==null?void 0:p.prop_type_id)=="2"||((d=(c=t==null?void 0:t.data)==null?void 0:c.data)==null?void 0:d.assessment_type)=="New Assessment"&&((w=(m=(u=t==null?void 0:t.data)==null?void 0:u.data)==null?void 0:m.lastTcVerificationData)==null?void 0:w.prop_type_id)=="3"?"7":((A=(b=t==null?void 0:t.data)==null?void 0:b.data)==null?void 0:A.assessment_type)=="New Assessment"&&((_=(R=(T=t==null?void 0:t.data)==null?void 0:T.data)==null?void 0:R.lastTcVerificationData)==null?void 0:_.prop_type_id)=="4"?"9":((g=(i=t==null?void 0:t.data)==null?void 0:i.data)==null?void 0:g.assessment_type)=="Reassessment"||((M=(h=t==null?void 0:t.data)==null?void 0:h.data)==null?void 0:M.assessment_type)=="Bifurcation"||((B=(I=t==null?void 0:t.data)==null?void 0:I.data)==null?void 0:B.assessment_type)=="Amalgamation"||((L=(P=t==null?void 0:t.data)==null?void 0:P.data)==null?void 0:L.assessment_type)=="Mutation"?N=="ATS"?"9":"7":"NO WORKFLOW"},Qe=()=>{var a,n,l,o,p,c,d,u,m,w,b,A,T,R,_,i,g,h,M,I,B,P,L;return((n=(a=t==null?void 0:t.data)==null?void 0:a.data)==null?void 0:n.assessment_type)=="New Assessment"&&((p=(o=(l=t==null?void 0:t.data)==null?void 0:l.data)==null?void 0:o.lastTcVerificationData)==null?void 0:p.prop_type_id)=="2"||((d=(c=t==null?void 0:t.data)==null?void 0:c.data)==null?void 0:d.assessment_type)=="New Assessment"&&((w=(m=(u=t==null?void 0:t.data)==null?void 0:u.data)==null?void 0:m.lastTcVerificationData)==null?void 0:w.prop_type_id)=="3"?"Nagar Rachna":((A=(b=t==null?void 0:t.data)==null?void 0:b.data)==null?void 0:A.assessment_type)=="New Assessment"&&((_=(R=(T=t==null?void 0:t.data)==null?void 0:T.data)==null?void 0:R.lastTcVerificationData)==null?void 0:_.prop_type_id)=="4"?"ATS":((g=(i=t==null?void 0:t.data)==null?void 0:i.data)==null?void 0:g.assessment_type)=="Reassessment"||((M=(h=t==null?void 0:t.data)==null?void 0:h.data)==null?void 0:M.assessment_type)=="Bifurcation"||((B=(I=t==null?void 0:t.data)==null?void 0:I.data)==null?void 0:B.assessment_type)=="Amalgamation"||((L=(P=t==null?void 0:t.data)==null?void 0:P.data)==null?void 0:L.assessment_type)=="Mutation"?N=="ATS"?"ATS":"Nagar Rachna":"NO WORKFLOW"},He=async a=>{var n,l,o,p,c,d,u,m,w,b,A,T,R,_;if(K()=="NO WORKFLOW")return x.error("No workflow found");if(await fe(),((l=(n=s==null?void 0:s.data)==null?void 0:n.data)==null?void 0:l.applied_by)=="TC"||((p=(o=s==null?void 0:s.data)==null?void 0:o.data)==null?void 0:p.applied_by)=="TC Reassesment")try{const i=await F.mutateAsync({api:S.safLevelV2,data:{applicationId:j,receiverRoleId:K(),action:"forward",comment:(a==null?void 0:a.comment)||"OK"}});(c=i==null?void 0:i.data)!=null&&c.status?(x.success((d=i==null?void 0:i.data)==null?void 0:d.message),O("/amc-app/property/saf-verification-list",{replace:!0})):x.error((u=i==null?void 0:i.data)==null?void 0:u.message)}catch(i){x.error((m=i==null?void 0:i.data)==null?void 0:m.message)}else{const i=new FormData;i.append("applicationId",j),i.append("document",a==null?void 0:a.uploadMeasurement);try{const g=await F.mutateAsync({api:S.uploadMeasurementSheetApi,data:i});if((w=g==null?void 0:g.data)!=null&&w.status){const h=await F.mutateAsync({api:S.safLevelV2,data:{applicationId:j,receiverRoleId:K(),action:"forward",comment:(a==null?void 0:a.comment)||"OK"}});(b=h==null?void 0:h.data)!=null&&b.status?(x.success((A=h==null?void 0:h.data)==null?void 0:A.message),O("/amc-app/property/saf-verification-list",{replace:!0})):x.error((T=h==null?void 0:h.data)==null?void 0:T.message)}else x.error((R=g==null?void 0:g.data)==null?void 0:R.message)}catch(g){x.error((_=g==null?void 0:g.data)==null?void 0:_.message)}}},Je=async()=>{var a;if(((a=r==null?void 0:r.values)==null?void 0:a.comment)=="")return x.error("Comment is required !");Ye.fire({title:"Are you sure?",text:"You are going to backward of this application",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async n=>{var l,o,p,c;if(n.isConfirmed)try{const d=await F.mutateAsync({api:S.safLevel,data:{applicationId:j,receiverRoleId1:"",action:"backward",comment:((l=r==null?void 0:r.values)==null?void 0:l.comment)||"No Comment"}});(o=d==null?void 0:d.data)!=null&&o.status?(x.success((p=d==null?void 0:d.data)==null?void 0:p.message),O("/amc-app/property/saf-verification-list",{replace:!0})):x.error(((c=d==null?void 0:d.data)==null?void 0:c.message)||"Something went wrong, Please try again")}catch(d){x.error(d==null?void 0:d.message),console.log(d)}}).catch(n=>{var l,o;x.error((o=(l=n==null?void 0:n.response)==null?void 0:l.data)==null?void 0:o.message)})},Xe=async a=>{var l,o,p;const n=a.target.files[0];if((n==null?void 0:n.type)==="application/pdf"){const c=new FileReader;c.onload=d=>{q(d.target.result),$(n.name.split(".").pop())},c.readAsDataURL(n),r.setFieldValue("uploadMeasurement",n)}else{const c=await Ge((l=a==null?void 0:a.target)==null?void 0:l.files[0]),d=new File([c],(p=(o=a==null?void 0:a.target)==null?void 0:o.files[0])==null?void 0:p.name,{type:"image/*"}),u=new FileReader;u.onload=m=>{q(m.target.result),$(d.name.split(".").pop())},u.readAsDataURL(d),r.setFieldValue("uploadMeasurement",d)}},Ze=async a=>{var l,o,p;const n=a.target.files[0];if((n==null?void 0:n.type)==="application/pdf"){const c=new FileReader;c.onload=d=>{G(d.target.result),k(n.name.split(".").pop())},c.readAsDataURL(n),r.setFieldValue("rentAgreementDocument",n)}else{const c=await Ge((l=a==null?void 0:a.target)==null?void 0:l.files[0]),d=new File([c],(p=(o=a==null?void 0:a.target)==null?void 0:o.files[0])==null?void 0:p.name,{type:"image/*"}),u=new FileReader;u.onload=m=>{G(m.target.result),k(d.name.split(".").pop())},u.readAsDataURL(d),r.setFieldValue("rentAgreementDocument",d)}},fe=async a=>{var n,l,o,p,c,d;if(Q()>0&&((n=r==null?void 0:r.values)!=null&&n.rentAgreementDocument)){const u=new FormData;u.append("applicationId",j),u.append("docCode","RENT AGREEMENT"),u.append("docCategory","Rent Agreement"),u.append("document",(l=r==null?void 0:r.values)==null?void 0:l.rentAgreementDocument);try{const m=await F.mutateAsync({api:S.documentUpload,data:u});(o=m==null?void 0:m.data)!=null&&o.status?x.success((p=m==null?void 0:m.data)==null?void 0:p.message):x.error((c=m==null?void 0:m.data)==null?void 0:c.message)}catch(m){x.error((d=m==null?void 0:m.data)==null?void 0:d.message)}}};return s!=null&&s.isLoading?e.jsx(et,{}):e.jsxs(ot,{title:"Measurement",children:[F.isLoading&&e.jsx(ct,{}),e.jsx(rt,{formik:r,children:e.jsxs("div",{className:"p-4 ",children:[e.jsx(y.Card,{className:"w-full",children:e.jsxs(y.CardBody,{children:[e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h1",{className:"font-semibold text-sm",children:"Application Details"})}),e.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-3",children:[e.jsx("h1",{className:"font-semibold text-xs",children:"Application No : "}),e.jsx("h1",{className:"text-xs",children:(de=(ne=s==null?void 0:s.data)==null?void 0:ne.data)==null?void 0:de.saf_no}),e.jsx("h1",{className:"font-semibold text-xs",children:"Application Type : "}),e.jsx("h1",{className:"text-xs",children:(le=(re=s==null?void 0:s.data)==null?void 0:re.data)==null?void 0:le.assessment_type}),e.jsx("h1",{className:"font-semibold text-xs",children:"Apply Date : "}),e.jsx("h1",{className:"text-xs",children:(ce=(oe=s==null?void 0:s.data)==null?void 0:oe.data)==null?void 0:ce.application_date}),e.jsx("h1",{className:"font-semibold text-xs",children:"Owner Name : "}),e.jsx("h1",{className:"text-xs",children:(ie=(me=s==null?void 0:s.data)==null?void 0:me.data)==null?void 0:ie.applicant_name}),e.jsx("h1",{className:"font-semibold text-xs",children:"Mobile No : "}),e.jsx("h1",{className:"text-xs w-40 truncate",children:(ge=(xe=(ue=(pe=s==null?void 0:s.data)==null?void 0:pe.data)==null?void 0:ue.owners)==null?void 0:xe.map(a=>a==null?void 0:a.mobile_no))==null?void 0:ge.join(", ")})]})]})}),Q()>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(y.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-xs font-semibold text-gray-100",children:"Rent Agreement"})}),z&&(Y==="pdf"?e.jsx(ke,{fileUrl:z}):e.jsx("div",{className:"flex justify-center px-4 py-2",children:e.jsx("img",{src:z,alt:"preview",loading:"lazy"})})),e.jsx(y.CardBody,{children:e.jsx("div",{className:"grid grid-cols-1 justify-center gap-5",children:((ye=(he=s==null?void 0:s.data)==null?void 0:he.data)==null?void 0:ye.applied_by)!="TC"&&((Ne=(je=s==null?void 0:s.data)==null?void 0:je.data)==null?void 0:Ne.applied_by)!="TC Reassesment"&&e.jsxs("div",{children:[e.jsx("div",{className:"mb-1",children:e.jsx("h1",{className:"font-semibold text-xs",children:"Upload Rent Agreement"})}),e.jsx("input",{type:"file",accept:"application/pdf, image/*",name:"rentAgreementDocument",onChange:Ze,className:"border border-gray-300 p-2 w-full rounded-lg"}),e.jsx("small",{className:"text-red-500",children:((we=r==null?void 0:r.errors)==null?void 0:we.rentAgreementDocument)&&((be=r==null?void 0:r.touched)==null?void 0:be.rentAgreementDocument)&&((Ae=r==null?void 0:r.errors)==null?void 0:Ae.rentAgreementDocument)})]})})})]}),e.jsx("div",{className:"my-4 border-b-2"})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(y.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-xs font-semibold text-gray-100",children:((Re=(Te=s==null?void 0:s.data)==null?void 0:Te.data)==null?void 0:Re.applied_by)=="TC"||((Se=(_e=s==null?void 0:s.data)==null?void 0:_e.data)==null?void 0:Se.applied_by)=="TC Reassesment"?"Comment":"Upload Measurement Sheet"})}),U&&(Y==="pdf"?e.jsx(ke,{fileUrl:U}):e.jsx("div",{className:"flex justify-center px-4 py-2",children:e.jsx("img",{src:U,alt:"preview",loading:"lazy"})})),e.jsx(y.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-1 justify-center gap-5",children:[((Fe=(Ce=s==null?void 0:s.data)==null?void 0:Ce.data)==null?void 0:Fe.applied_by)!="TC"&&((Me=(ve=s==null?void 0:s.data)==null?void 0:ve.data)==null?void 0:Me.applied_by)!="TC Reassesment"&&e.jsxs("div",{children:[e.jsx("div",{className:"mb-1",children:e.jsx("h1",{className:"font-semibold text-xs",children:"Upload Measurement Sheet"})}),e.jsx("input",{type:"file",accept:"application/pdf, image/*",name:"uploadMeasurement",onChange:Xe,className:"border border-gray-300 p-2 w-full rounded-lg"}),e.jsx("small",{className:"text-red-500",children:((Ie=r==null?void 0:r.errors)==null?void 0:Ie.uploadMeasurement)&&((Be=r==null?void 0:r.touched)==null?void 0:Be.uploadMeasurement)&&((Pe=r==null?void 0:r.errors)==null?void 0:Pe.uploadMeasurement)})]}),e.jsx("div",{children:e.jsx(lt,{label:"Comment",name:"comment",formik:r,placeholder:"Comment"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"justify-center items-center mt-4 gap-3",children:[e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(y.Button,{onClick:Je,size:"sm",className:"bg-red-500 text-white",children:e.jsx("small",{children:"BACK TO LIPIK"})})}),((Ue=(Oe=(Le=E==null?void 0:E.data)==null?void 0:Le.data)==null?void 0:Oe.permissions)==null?void 0:Ue.can_forward)&&(((Ee=(ze=t==null?void 0:t.data)==null?void 0:ze.data)==null?void 0:Ee.assessment_type)=="New Assessment"?e.jsx("div",{className:"flex justify-center items-center gap-2 mt-4",children:((qe=(We=(Ke=t==null?void 0:t.data)==null?void 0:Ke.data)==null?void 0:We.lastTcVerificationData)==null?void 0:qe.prop_type_id)=="4"?e.jsx(y.Button,{type:"submit",onClick:()=>v("ATS"),size:"sm",className:"bg-blue-500 text-white",children:e.jsx("small",{children:"Send To ATS"})}):e.jsxs(e.Fragment,{children:[e.jsx(y.Button,{type:"submit",onClick:()=>v("ATS"),size:"sm",className:"bg-blue-500 text-white",children:e.jsx("small",{children:"Send To ATS"})}),e.jsx(y.Button,{type:"submit",size:"sm",onClick:()=>v("SR_LIPIK"),className:"bg-green-500 text-white",children:e.jsx("small",{children:"Send To Nagar Rachna"})})]})}):e.jsxs("div",{className:"flex justify-center items-center gap-2 mt-4",children:[e.jsx(y.Button,{type:"submit",onClick:()=>v("ATS"),size:"sm",className:"bg-blue-500 text-white",children:e.jsx("small",{children:"Send To ATS"})}),e.jsx(y.Button,{type:"submit",size:"sm",onClick:()=>v("SR_LIPIK"),className:"bg-green-500 text-white",children:e.jsx("small",{children:"Send To Nagar Rachna"})})]}))]})})]})})]})}export{Bt as default};
