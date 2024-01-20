import{j as e,r as d,h as re,R as ee,n as le,a as ne,m as ce,S as de,Q as h,p,f as oe,o as me}from"./index-Y5adADDh.js";import{u as xe}from"./formik.esm-eFjNUeW7.js";import{c as he,a as se,g as ae}from"./index.esm-t8WjfqlW.js";import{F as ue}from"./FormProvider-NGGCXq40.js";import{T as je}from"./TextField-Hvf5tdYg.js";import{R as ge}from"./RadioButton-zJdtIGzg.js";import{T as pe}from"./TextAreaField-BJXMrTGA.js";import"./index-XLkLeTL6.js";import{P as fe}from"./index-2XMET6oD.js";function ye({open:o,setOpen:j,url:u,ext:g}){const m=()=>j(!o);return e.jsxs(e.Fragment,{children:[o&&e.jsx("div",{onClick:m,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(o?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full ",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px]",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:"View Sanction Plan"}),e.jsxs("button",{onClick:m,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),g==="pdf"?e.jsx("embed",{src:"https://docs.google.com/viewer?url=".concat(u,"&embedded=true"),width:"100%",height:"100%"}):e.jsx("img",{src:u,alt:"Naksha",className:"w-full h-full"}),e.jsx("div",{className:"p-4 md:p-5",children:e.jsx("div",{className:"flex items-center justify-end mt-4 gap-5",children:e.jsx(d.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:m,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Ok"})})})})]})})})]})}const Ne=[{label:"Yes",value:"yes"},{label:"No",value:"no"}];function Ve(){var y,N,v,b,w,k,P,A,B,C,S,_,O,V,F,I,q,$,z,R,T,D,L,M,E,Y,W,H,K;const o=re({}),[j,u]=ee.useState(""),[g,m]=ee.useState(!1),{id:x}=le(),f=ne(),{data:s,refetch:ve,error:be,isLoading:te}=ce({api:p.getUploadDocNaksha,config:{applicationId:x},value:[x],options:{enabled:!!x}}),a=xe({enableReinitialize:!0,initialValues:{areaOfPlot:"",isNaksha:(y=s==null?void 0:s.data)!=null&&y.naksha?"":"no",comment:"",message:""},validationSchema:he({isNaksha:se().required("Required"),comment:se().required("Required").max(500,"Max 500 characters"),areaOfPlot:ae().when("isNaksha",{is:"yes",then:()=>ae().required("Required")})}),onSubmit:async i=>{de.fire({title:"Are you sure?",text:"You are going to verify naksha of this property ",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(r=>{r.isConfirmed&&ie(i)}).catch(r=>{var n,c;h.error((c=(n=r==null?void 0:r.response)==null?void 0:n.data)==null?void 0:c.message)})}}),ie=async i=>{var n,c,Q,U,Z,G,J,X;const r={applicationId:x,IsDouble:i.isNaksha==="no",areaOfPlot:i.areaOfPlot};try{const t=await o.mutateAsync({api:p.nakshaVerify,data:r});if((n=t==null?void 0:t.data)!=null&&n.status){console.log((c=t==null?void 0:t.data)==null?void 0:c.message),u((Q=t==null?void 0:t.data)==null?void 0:Q.message);const l=await o.mutateAsync({api:p.safLevel,data:{applicationId:x,action:"forward",comment:"Ok"}});(U=l==null?void 0:l.data)!=null&&U.status?(f("/amc-app/property/saf-verification-list",{replace:!0}),h.success("".concat(j," and ").concat((Z=l==null?void 0:l.data)==null?void 0:Z.message))):h.error((G=l==null?void 0:l.data)==null?void 0:G.message)}else h.error((J=t==null?void 0:t.data)==null?void 0:J.message)}catch(t){h.error(((X=t==null?void 0:t.data)==null?void 0:X.message)||"Something went wrong !")}};return oe.useEffect(()=>{var i;((i=a==null?void 0:a.values)==null?void 0:i.isNaksha)=="no"&&(a.setFieldValue("areaOfPlot",""),a.setFieldValue("message",""))},[(N=a==null?void 0:a.values)==null?void 0:N.isNaksha]),te?e.jsx(me,{}):e.jsxs(fe,{title:"Naksha Verification",children:[e.jsx(ye,{open:g,setOpen:m,url:(b=(v=s==null?void 0:s.data)==null?void 0:v.naksha)==null?void 0:b.doc_path,ext:(k=(w=s==null?void 0:s.data)==null?void 0:w.naksha)==null?void 0:k.ext}),e.jsxs("div",{className:"p-4",children:[e.jsxs(d.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),e.jsx(d.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application No :"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm  text-gray-900",children:(P=s==null?void 0:s.data)==null?void 0:P.saf_no})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Owner Name :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:(A=s==null?void 0:s.data)==null?void 0:A.applicant_name}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold text-gray-900",children:["Buildup Area (",e.jsx("small",{children:"In Sqft"}),") :"]})}),e.jsx("div",{className:"text-sm  text-gray-900",children:(B=s==null?void 0:s.data)==null?void 0:B.builtup_area}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Zone :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:(C=s==null?void 0:s.data)==null?void 0:C.zone})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Ward :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:(S=s==null?void 0:s.data)==null?void 0:S.new_ward_no})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Property Type :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:(_=s==null?void 0:s.data)==null?void 0:_.property_type})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Address :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:(O=s==null?void 0:s.data)==null?void 0:O.prop_address})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Assessment Type :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:(V=s==null?void 0:s.data)==null?void 0:V.assessment_type})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application Date :"})}),e.jsx("div",{className:"text-sm  text-gray-900",children:e.jsx("h1",{className:"text-sm  text-gray-900",children:(F=s==null?void 0:s.data)==null?void 0:F.application_date})}),e.jsx("div",{className:"col-span-2 flex justify-center items-center mt-3",children:e.jsx(d.Button,{size:"sm",variant:"outlined",onClick:()=>f("/amc-app/property/saf-property-details/".concat(x),{replace:!0}),children:e.jsx("span",{children:"View Saf Details"})})})]})})]}),e.jsx("div",{className:"border-b-2 border-gray-300 mt-2 mb-2"}),e.jsxs(d.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Sanction Plan"})}),e.jsx(d.CardBody,{children:(I=s==null?void 0:s.data)!=null&&I.naksha?e.jsxs("div",{className:"grid grid-cols-1 gap-2 items-center",children:[(($=(q=s==null?void 0:s.data)==null?void 0:q.naksha)==null?void 0:$.ext)=="jpg"||((R=(z=s==null?void 0:s.data)==null?void 0:z.naksha)==null?void 0:R.ext)=="jpeg"||((D=(T=s==null?void 0:s.data)==null?void 0:T.naksha)==null?void 0:D.ext)=="png"?e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("img",{src:(M=(L=s==null?void 0:s.data)==null?void 0:L.naksha)==null?void 0:M.doc_path,alt:"naksha",loading:"lazy",width:500,className:"w-full h-full object-cover"})}):e.jsx("div",{className:"w-full",children:e.jsx("embed",{src:"https://docs.google.com/viewer?url=".concat((Y=(E=s==null?void 0:s.data)==null?void 0:E.naksha)==null?void 0:Y.doc_path,"&embedded=true"),width:"100%",height:"100%"})}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(d.Button,{type:"button",size:"sm",color:"blue",onClick:()=>m(!0),variant:"outlined",children:e.jsx("span",{children:"View"})})})]}):e.jsx("div",{className:"text-center",children:e.jsx("h1",{className:"text-red-900 font-semibold",children:"Sanction Plan not found!"})})})]}),e.jsx("div",{className:"border-b-2 border-gray-300 mt-2 mb-4"}),((W=a==null?void 0:a.values)==null?void 0:W.isNaksha)=="no"&&e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("h1",{className:"text-sm font-semibold text-red-900 text-center mb-3 w-52",children:"Double taxation will be applied for this property !"})}),e.jsxs(ue,{formik:a,children:[((H=s==null?void 0:s.data)==null?void 0:H.naksha)&&e.jsx("div",{className:"flex justify-center gap-4 items-center px-5 ",children:Ne.map(i=>e.jsx(ge,{formik:a,name:"isNaksha",label:i.label,value:i.value},i.value))}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 items-center mt-4",children:[a.values.isNaksha==="yes"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-sm font-semibold text-gray-900"}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("h1",{className:"text-sm font-semibold text-red-900 text-center mb-3 w-52",children:(K=a==null?void 0:a.values)==null?void 0:K.message})})]}),e.jsx("div",{children:e.jsx(je,{label:"Constructed Area(In Sqft) :",type:"number",formik:a,name:"areaOfPlot",placeholder:"Constructed Area (In Sqft)",onBlur:()=>{var i,r,n,c;((i=a==null?void 0:a.values)==null?void 0:i.areaOfPlot)<((r=s==null?void 0:s.data)==null?void 0:r.builtup_area)?a.setFieldValue("message","100% Taxation will be applied on ".concat(((n=s==null?void 0:s.data)==null?void 0:n.builtup_area)-((c=a==null?void 0:a.values)==null?void 0:c.areaOfPlot)," sqft constructed area !")):a.setFieldValue("message","")}})})]}),e.jsx("div",{children:e.jsx(pe,{label:"comment",formik:a,name:"comment",placeholder:"Comment"})})]}),e.jsx("div",{className:"flex justify-center mt-4 gap-5",children:e.jsx(d.Button,{type:"submit",size:"sm",children:e.jsx("span",{children:"Forward"})})})]})]})]})}export{Ve as default};
