import{j as e,r as d,i as ie,R as J,m as re,a as le,l as ne,S as ce,Q as h,p as f,e as de,n as oe}from"./index-CLQTue-1.js";import{u as me}from"./formik.esm-ZMfjvqLZ.js";import{c as xe,a as X,f as ee}from"./index.esm-1AmIhvL4.js";import{F as he}from"./FormProvider-6mUm7w2d.js";import{T as ue}from"./TextField-d2gTAbft.js";import{R as ge}from"./RadioButton-11LCM1bs.js";import{T as je}from"./TextAreaField-mQOPDeVo.js";import{P as fe}from"./index-48193XFW.js";import"./index-8fWu6pOB.js";function pe({open:o,setOpen:g,url:u,ext:j}){const m=()=>g(!o);return e.jsxs(e.Fragment,{children:[o&&e.jsx("div",{onClick:m,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(o?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full ",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px]",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:"View Naksha"}),e.jsxs("button",{onClick:m,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),j==="pdf"?e.jsx("embed",{src:"https://docs.google.com/viewer?url=".concat(u,"&embedded=true"),width:"100%",height:"100%"}):e.jsx("img",{src:u,alt:"Naksha",className:"w-full h-full"}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsx("div",{className:"flex items-center justify-end mt-4 gap-5",children:e.jsx(d.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:m,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Ok"})})})})]})})})]})}const Ne=[{label:"Yes",value:"yes"},{label:"No",value:"no"}];function Ve(){var p,N,y,v,b,w,k,A,_,P,C,B,O,V,F,S,I,q,R,$,z,T,L,D,M,E,Y,W;const o=ie({}),[g,u]=J.useState(""),[j,m]=J.useState(!1),{id:x}=re(),se=le(),{data:s,refetch:ye,error:ve,isLoading:ae}=ne({api:f.getUploadDocNaksha,config:{applicationId:x},value:[x],options:{enabled:!!x}}),a=me({enableReinitialize:!0,initialValues:{areaOfPlot:"",isNaksha:(p=s==null?void 0:s.data)!=null&&p.naksha?"":"no",comment:"",message:""},validationSchema:xe({isNaksha:X().required("Required"),comment:X().required("Required").max(500,"Max 500 characters"),areaOfPlot:ee().when("isNaksha",{is:"yes",then:()=>ee().required("Required")})}),onSubmit:async i=>{ce.fire({title:"Are you sure?",text:"You are going to verify naksha of this property ",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(r=>{r.isConfirmed&&te(i)}).catch(r=>{var n,c;h.error((c=(n=r==null?void 0:r.response)==null?void 0:n.data)==null?void 0:c.message)})}}),te=async i=>{var n,c,H,K,Q,U,Z,G;const r={applicationId:x,IsDouble:i.isNaksha==="no",areaOfPlot:i.areaOfPlot};try{const t=await o.mutateAsync({api:f.nakshaVerify,data:r});if((n=t==null?void 0:t.data)!=null&&n.status){console.log((c=t==null?void 0:t.data)==null?void 0:c.message),u((H=t==null?void 0:t.data)==null?void 0:H.message);const l=await o.mutateAsync({api:f.safLevel,data:{applicationId:x,action:"forward",comment:"Ok"}});(K=l==null?void 0:l.data)!=null&&K.status?(se("/amc-app/property/saf-verification-list",{replace:!0}),h.success("".concat(g," and ").concat((Q=l==null?void 0:l.data)==null?void 0:Q.message))):h.error((U=l==null?void 0:l.data)==null?void 0:U.message)}else h.error((Z=t==null?void 0:t.data)==null?void 0:Z.message)}catch(t){h.error(((G=t==null?void 0:t.data)==null?void 0:G.message)||"Something went wrong !")}};return de.useEffect(()=>{var i;((i=a==null?void 0:a.values)==null?void 0:i.isNaksha)=="no"&&(a.setFieldValue("areaOfPlot",""),a.setFieldValue("message",""))},[(N=a==null?void 0:a.values)==null?void 0:N.isNaksha]),ae?e.jsx(oe,{}):e.jsxs(fe,{title:"Naksha Verification",children:[e.jsx(pe,{open:j,setOpen:m,url:(v=(y=s==null?void 0:s.data)==null?void 0:y.naksha)==null?void 0:v.doc_path,ext:(w=(b=s==null?void 0:s.data)==null?void 0:b.naksha)==null?void 0:w.ext}),e.jsxs("div",{className:"p-4",children:[e.jsxs(d.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),e.jsx(d.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application No :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-900",children:(k=s==null?void 0:s.data)==null?void 0:k.saf_no})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Owner Name :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:(A=s==null?void 0:s.data)==null?void 0:A.applicant_name}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold text-gray-900",children:["Area Of Plot (",e.jsx("small",{children:"In Sqft"}),") :"]})}),e.jsx("div",{className:"text-sm  text-gray-900",children:(_=s==null?void 0:s.data)==null?void 0:_.area_of_plot}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Zone :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:(P=s==null?void 0:s.data)==null?void 0:P.zone})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Ward :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:(C=s==null?void 0:s.data)==null?void 0:C.new_ward_no})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Address :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:(B=s==null?void 0:s.data)==null?void 0:B.prop_address})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Assessment Type :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:(O=s==null?void 0:s.data)==null?void 0:O.assessment_type})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application Date :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:(V=s==null?void 0:s.data)==null?void 0:V.application_date})})]})})]}),e.jsx("div",{className:"border-b-2 border-gray-300 mt-2 mb-2"}),e.jsxs(d.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Naksha Verification"})}),e.jsx(d.CardBody,{children:(F=s==null?void 0:s.data)!=null&&F.naksha?e.jsxs("div",{className:"grid grid-cols-1 gap-2 items-center",children:[((I=(S=s==null?void 0:s.data)==null?void 0:S.naksha)==null?void 0:I.ext)=="jpg"||((R=(q=s==null?void 0:s.data)==null?void 0:q.naksha)==null?void 0:R.ext)=="jpeg"||((z=($=s==null?void 0:s.data)==null?void 0:$.naksha)==null?void 0:z.ext)=="png"?e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("img",{src:(L=(T=s==null?void 0:s.data)==null?void 0:T.naksha)==null?void 0:L.doc_path,alt:"naksha",loading:"lazy",width:500,className:"w-full h-full object-cover"})}):e.jsx("div",{className:"w-full",children:e.jsx("embed",{src:"https://docs.google.com/viewer?url=".concat((M=(D=s==null?void 0:s.data)==null?void 0:D.naksha)==null?void 0:M.doc_path,"&embedded=true"),width:"100%",height:"100%"})}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(d.Button,{type:"button",size:"sm",color:"blue",onClick:()=>m(!0),variant:"outlined",children:e.jsx("span",{children:"View Naksha"})})})]}):e.jsx("div",{className:"text-center",children:e.jsx("h1",{className:"text-red-900 font-semibold",children:"Naksha not found!"})})})]}),e.jsx("div",{className:"border-b-2 border-gray-300 mt-2 mb-4"}),((E=a==null?void 0:a.values)==null?void 0:E.isNaksha)=="no"&&e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("h1",{className:"text-sm font-semibold text-red-900 text-center mb-3 w-52",children:"Double taxation will be applied for this property !"})}),e.jsxs(he,{formik:a,children:[((Y=s==null?void 0:s.data)==null?void 0:Y.naksha)&&e.jsx("div",{className:"flex justify-center gap-4 items-center px-5 ",children:Ne.map(i=>e.jsx(ge,{formik:a,name:"isNaksha",label:i.label,value:i.value},i.value))}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 items-center mt-4",children:[a.values.isNaksha==="yes"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-sm font-semibold text-gray-900"}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("h1",{className:"text-sm font-semibold text-red-900 text-center mb-3 w-52",children:(W=a==null?void 0:a.values)==null?void 0:W.message})})]}),e.jsx("div",{children:e.jsx(ue,{label:"Constructed Area(In Sqft) :",type:"number",formik:a,name:"areaOfPlot",placeholder:"Constructed Area (In Sqft)",onBlur:()=>{var i,r,n,c;((i=a==null?void 0:a.values)==null?void 0:i.areaOfPlot)>((r=s==null?void 0:s.data)==null?void 0:r.area_of_plot)?a.setFieldValue("message","100% Taxation will be applied on ".concat(((n=a==null?void 0:a.values)==null?void 0:n.areaOfPlot)-((c=s==null?void 0:s.data)==null?void 0:c.area_of_plot)," sqft constructed area !")):a.setFieldValue("message","")}})})]}),e.jsx("div",{children:e.jsx(je,{label:"comment",formik:a,name:"comment",placeholder:"Comment"})})]}),e.jsx("div",{className:"flex justify-center mt-4 gap-5",children:e.jsx(d.Button,{type:"submit",size:"sm",children:e.jsx("span",{children:"Forward"})})})]})]})]})}export{Ve as default};
