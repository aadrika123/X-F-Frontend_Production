import{b as q,a as E,p as g,S as Y,Q as u,j as e,f as K}from"./index-W1AIrKZX.js";import{u as Q,R as T,h as G,e as h}from"./react-HXRlOr-l.js";import{u as H}from"./formik.esm-BYe_KACy.js";import{c as J,f as W,a as X}from"./index.esm-yBrOrWJe.js";import{F as Z}from"./FormProvider-Eg1-phm1.js";import{T as D}from"./TextAreaField-CK393TAC.js";import"./index-mWJwE1Yp.js";import{P as k}from"./index-XLAeQlkZ.js";import{r as ee}from"./resizeImage-EiVwrfIO.js";import{O as ae}from"./OverLayLoader-g5DV0Wpg.js";import{M as se}from"./MyPDFViewer-27kREiFA.js";import"./module-m7Ub87Bs.js";function he(){var N,w,M,F,v,S,A,C,P,L,R,B,I,U,z;const _=Q(),j=q({}),[f,b]=T.useState(""),[O,y]=T.useState(""),{id:m}=G(),s=E({api:g.staticSafDetail,config:{applicationId:m},value:[m],options:{enabled:!!m}}),r=H({initialValues:{uploadMeasurement:"",comment:""},validationSchema:J({uploadMeasurement:W().required("Measurement Sheet is required").test("fileSize","Max 10 mb file size",a=>(a==null?void 0:a.size)<=1e7),comment:X().label("Comment").min(2).max(500)}),onSubmit:async a=>{Y.fire({title:"Are you sure?",text:"\n       You are going to forward the application to the next level.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(t=>{t.isConfirmed&&V(a)}).catch(t=>{var o,l;console.log(t),u.error((l=(o=t==null?void 0:t.response)==null?void 0:o.data)==null?void 0:l.message)})}}),V=async a=>{var o,l,p,c,d,x;const t=new FormData;t.append("applicationId",m),t.append("document",a==null?void 0:a.uploadMeasurement);try{const i=await j.mutateAsync({api:g.uploadMeasurementSheetApi,data:t});if((o=i==null?void 0:i.data)!=null&&o.status){const n=await j.mutateAsync({api:g.safLevel,data:{applicationId:m,receiverRoleId1:"",action:"forward",comment:(a==null?void 0:a.comment)||"OK"}});(l=n==null?void 0:n.data)!=null&&l.status?(u.success((p=n==null?void 0:n.data)==null?void 0:p.message),_("/amc-app/property/saf-verification-list",{replace:!0})):u.error((c=n==null?void 0:n.data)==null?void 0:c.message)}else u.error((d=i==null?void 0:i.data)==null?void 0:d.message)}catch(i){u.error((x=i==null?void 0:i.data)==null?void 0:x.message)}},$=async a=>{var o,l,p;const t=a.target.files[0];if((t==null?void 0:t.type)==="application/pdf"){const c=new FileReader;c.onload=d=>{b(d.target.result),y(t.name.split(".").pop())},c.readAsDataURL(t),r.setFieldValue("uploadMeasurement",t)}else{const c=await ee((o=a==null?void 0:a.target)==null?void 0:o.files[0]),d=new File([c],(p=(l=a==null?void 0:a.target)==null?void 0:l.files[0])==null?void 0:p.name,{type:"image/*"}),x=new FileReader;x.onload=i=>{b(i.target.result),y(d.name.split(".").pop())},x.readAsDataURL(d),r.setFieldValue("uploadMeasurement",d)}};return s!=null&&s.isLoading?e.jsx(K,{}):e.jsxs(k,{title:"Measurement",children:[j.isLoading&&e.jsx(ae,{}),e.jsx(Z,{formik:r,children:e.jsxs("div",{className:"p-4 ",children:[e.jsx(h.Card,{className:"w-full",children:e.jsxs(h.CardBody,{children:[e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h1",{className:"font-semibold",children:"Measurement Sheet"})}),e.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-3",children:[e.jsx("h1",{className:"font-semibold text-sm",children:"Application No : "}),e.jsx("h1",{className:"text-sm",children:(w=(N=s==null?void 0:s.data)==null?void 0:N.data)==null?void 0:w.saf_no}),e.jsx("h1",{className:"font-semibold text-sm",children:"Application Type : "}),e.jsx("h1",{className:"text-sm",children:(F=(M=s==null?void 0:s.data)==null?void 0:M.data)==null?void 0:F.assessment_type}),e.jsx("h1",{className:"font-semibold text-sm",children:"Apply Date : "}),e.jsx("h1",{className:"text-sm",children:(S=(v=s==null?void 0:s.data)==null?void 0:v.data)==null?void 0:S.application_date}),e.jsx("h1",{className:"font-semibold text-sm",children:"Owner Name : "}),e.jsx("h1",{className:"text-sm",children:(C=(A=s==null?void 0:s.data)==null?void 0:A.data)==null?void 0:C.applicant_name}),e.jsx("h1",{className:"font-semibold text-sm",children:"Mobile No : "}),e.jsx("h1",{className:"text-sm w-40 truncate",children:(B=(R=(L=(P=s==null?void 0:s.data)==null?void 0:P.data)==null?void 0:L.owners)==null?void 0:R.map(a=>a==null?void 0:a.mobile_no))==null?void 0:B.join(", ")})]})]})}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(h.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Upload Measurement Sheet"})}),f&&(O==="pdf"?e.jsx(se,{fileUrl:f}):e.jsx("div",{className:"flex justify-center px-4 py-2",children:e.jsx("img",{src:f,alt:"preview"})})),e.jsx(h.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-1 justify-center gap-5",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-1",children:e.jsx("h1",{className:"font-semibold text-xs",children:"Upload Measurement Sheet"})}),e.jsx("input",{type:"file",name:"uploadMeasurement",onChange:$,className:"border border-gray-300 p-2 w-full rounded-lg"}),e.jsx("small",{className:"text-red-500",children:((I=r==null?void 0:r.errors)==null?void 0:I.uploadMeasurement)&&((U=r==null?void 0:r.touched)==null?void 0:U.uploadMeasurement)&&((z=r==null?void 0:r.errors)==null?void 0:z.uploadMeasurement)})]}),e.jsx("div",{children:e.jsx(D,{label:"Comment",name:"comment",formik:r,placeholder:"Comment"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsx("div",{className:"flex justify-center",children:e.jsx(h.Button,{color:"blue",size:"sm",type:"submit",children:"Forward"})})]})})]})}export{he as default};
