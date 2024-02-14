import{b as S,w as R,Q as O,j as e,a as U,f as W}from"./index-BmzyyeIl.js";import{e as n,R as $,h as q}from"./react-kJeE4wWB.js";import{P as G}from"./index-hx76H7S1.js";import"./module-lhJH5toF.js";import{u as Q}from"./formik.esm-u2hvNN2G.js";import{c as V,a as H}from"./index.esm-APWbThjM.js";import{F as J}from"./FormProvider-tnvqnzZG.js";import{T as K}from"./TextField-CYO3Rrh-.js";import"./index-FYp6KAEl.js";const X=V().shape({mobile_no:H().required("Mobile No is required").min(10).max(10)});function Y({open:c,setOpen:T,wtrDetail:a}){var i,m,x,o,l,h,j,g,y,N,u,p,b,f,v,_,k,C,A,z,P,B,L,M;const s=()=>T(!c),t=S({}),r=Q({enableReinitialize:!0,initialValues:{consumerId:(m=(i=a==null?void 0:a.data)==null?void 0:i.data)==null?void 0:m.id,property_no:((o=(x=a==null?void 0:a.data)==null?void 0:x.data)==null?void 0:o.folio_no)||"N/A",consumer_no:((h=(l=a==null?void 0:a.data)==null?void 0:l.data)==null?void 0:h.consumer_no)||"N/A",applicant_name:((g=(j=a==null?void 0:a.data)==null?void 0:j.data)==null?void 0:g.applicant_name)||"N/A",guardian_name:((N=(y=a==null?void 0:a.data)==null?void 0:y.data)==null?void 0:N.guardian_name)||"N/A",mobile_no:((p=(u=a==null?void 0:a.data)==null?void 0:u.data)==null?void 0:p.mobile_no)||"N/A",email:((f=(b=a==null?void 0:a.data)==null?void 0:b.data)==null?void 0:f.email)||"N/A",dtc_code:((_=(v=a==null?void 0:a.data)==null?void 0:v.data)==null?void 0:_.dtc_code)||"N/A",zoneId:((C=(k=a==null?void 0:a.data)==null?void 0:k.data)==null?void 0:C.zone_mstr_id)||"N/A",address:((z=(A=a==null?void 0:a.data)==null?void 0:A.data)==null?void 0:z.address)||"N/A",landmark:((B=(P=a==null?void 0:a.data)==null?void 0:P.data)==null?void 0:B.landmark)||"N/A",wardId:((M=(L=a==null?void 0:a.data)==null?void 0:L.data)==null?void 0:M.ward_mstr_id)||0},validationSchema:X,onSubmit:async E=>{var I;try{const{data:d}=await t.mutateAsync({api:(I=R)==null?void 0:I.updateWaterDetails,data:E});d!=null&&d.status&&(O.success(d==null?void 0:d.message),a==null||a.refetch(),s())}catch(d){O.error(d.message)}}});return e.jsxs(J,{formik:r,children:[c&&e.jsx("div",{onClick:s,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(c?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Update Details"}),e.jsxs("button",{onClick:s,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsxs("div",{className:"p-4 md:p-5",children:[e.jsx("div",{className:"grid grid-cols-1 gap-4",children:e.jsx("div",{children:e.jsx(K,{type:"text",name:"mobile_no",label:"Mobile No",formik:r,placeholder:"Enter Mobile No",maxLength:10})})}),e.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[e.jsx(n.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:s,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Cancel"})}),e.jsx(n.Button,{type:"submit",size:"sm",loading:t.isLoading,disabled:t.isLoading,children:e.jsx("span",{children:"Update"})})]})]})]})})})]})}function ce(){var t,r,i,m,x,o,l,h,j,g,y,N,u,p,b,f,v,_,k,C,A,z,P,B,L,M,E,I,d,F;const[c,T]=$.useState(!1),{id:a}=q(),s=U({api:R.waterGetDetails,config:{applicationId:a},options:{enabled:!!a}});return s!=null&&s.isLoading?e.jsx(W,{}):e.jsxs(G,{title:"Consumer Details",children:[e.jsx(Y,{open:c,setOpen:T,wtrDetail:s}),e.jsxs("div",{className:"p-4",children:[e.jsxs(n.Card,{className:"w-full",children:[e.jsxs("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:[e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"}),e.jsx("div",{children:e.jsx(n.Button,{size:"sm",onClick:()=>T(!0),children:"Edit"})})]}),e.jsx(n.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Property No :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-900",children:((r=(t=s==null?void 0:s.data)==null?void 0:t.data)==null?void 0:r.folio_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Consumer No :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:(m=(i=s==null?void 0:s.data)==null?void 0:i.data)==null?void 0:m.consumer_no}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Tap Size:"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:((o=(x=s==null?void 0:s.data)==null?void 0:x.data)==null?void 0:o.tab_size)||"--"}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Cycle :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:((h=(l=s==null?void 0:s.data)==null?void 0:l.data)==null?void 0:h.cycle)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Category :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:((g=(j=s==null?void 0:s.data)==null?void 0:j.data)==null?void 0:g.category)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Property Type :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:(N=(y=s==null?void 0:s.data)==null?void 0:y.data)==null?void 0:N.property_type})})]})})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs(n.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Property Address & Details"})}),e.jsx(n.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Address :"})}),e.jsx("div",{className:"w-42 ",children:e.jsx("h1",{className:"text-sm  text-gray-900 truncate",children:((p=(u=s==null?void 0:s.data)==null?void 0:u.data)==null?void 0:p.address)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"zone:"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:((f=(b=s==null?void 0:s.data)==null?void 0:b.data)==null?void 0:f.zone_name)||"--"}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Ward No:"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:((_=(v=s==null?void 0:s.data)==null?void 0:v.data)==null?void 0:_.ward_number)||"--"}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Cycle :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:((C=(k=s==null?void 0:s.data)==null?void 0:k.data)==null?void 0:C.cycle)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Land Mark :"})}),e.jsx("div",{className:"w-44 text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900 truncate",children:((z=(A=s==null?void 0:s.data)==null?void 0:A.data)==null?void 0:z.landmark)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Property Type :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:(B=(P=s==null?void 0:s.data)==null?void 0:P.data)==null?void 0:B.property_type})})]})})]}),e.jsx("div",{className:"my-3 border-b-2"}),e.jsxs(n.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner Details"})}),e.jsx(n.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Owner Name :"})}),e.jsx("div",{className:"w-42 ",children:e.jsx("h1",{className:"text-sm  text-gray-900 truncate",children:((M=(L=s==null?void 0:s.data)==null?void 0:L.data)==null?void 0:M.applicant_name)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Mobile No:"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:((I=(E=s==null?void 0:s.data)==null?void 0:E.data)==null?void 0:I.mobile_no)||"--"}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Email:"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:((F=(d=s==null?void 0:s.data)==null?void 0:d.data)==null?void 0:F.email)||"--"})]})})]})]})]})}export{ce as default};
