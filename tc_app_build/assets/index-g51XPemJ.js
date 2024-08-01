import{b as Pe,d as Fe,e as Ie,c as me,p as w,w as Le,S as N,Q as g,j as e,I as Be}from"./index-nTD-ItDx.js";import{d as x,u as Ce,e as Ae,f as $e,r as _e}from"./router-vn-0iGwJ.js";import{c as ue,b as Re,a as v,d as Se}from"./index.esm-19LW8OGO.js";import{r as h}from"./tailwind-umh7vczy.js";import{u as Ee,F as qe}from"./formik.esm-ilDmhU_v.js";import{F as Oe}from"./FormProvider-22m3QvO4.js";import{T as pe}from"./TextField-GkGfgt8t.js";import{T as Ge}from"./TextAreaField-W_3fAECp.js";import"./index-9INnh4Fj.js";import{P as Ve}from"./index-fOi6iZgB.js";import{r as ze}from"./resizeImage-r9m895oW.js";import{u as Me}from"./useErrorFocusFields-f_sEGw1K.js";import{O as We}from"./OverLayLoader-9zRfM8R-.js";import{u as He}from"./usePathWisePermission-Azg88mQv.js";import"./reactQuery-VYMV1vFj.js";import"./axios-lPgvryBG.js";import"./reactIcons-lANGEfNm.js";import"./headlessui-pLs_kC1m.js";import"./customInputValidation-8tSUGdUh.js";import"./module-VoyHJF_3.js";function mt(){var B,C,A,$,_,R,S,E,q,O,G,V,z,M,W,H,Y,U,J,K,Q,X,Z,k,D,ee;Pe();const[he,P]=x.useState(""),{AutoFocusErrorField:xe}=Me(),[y,ye]=x.useState([]),j=Ce(),f=Fe({}),[Ye,je]=x.useState(null),{id:m}=Ae(),{pathname:b}=$e();He((C=(B=b==null?void 0:b.split("/"))==null?void 0:B.slice(0,-1))==null?void 0:C.join("/"));const{coords:p,isGeolocationEnabled:fe}=Ie(),t=me({api:w.staticSafDetail,config:{applicationId:m},value:[m],options:{enabled:!!m,onSuccess:n=>{var s,i;(s=n==null?void 0:n.data)!=null&&s.status?(P(!1),(i=n==null?void 0:n.data)!=null&&i.is_geo_tagged&&j("/amc-app/property/measurement-sheet/".concat(m),{replace:!0})):P(!0)}}}),T=me({api:(A=Le)==null?void 0:A.workFlowInfo,config:{workflowId:(_=($=t==null?void 0:t.data)==null?void 0:$.data)==null?void 0:_.workflow_id},value:[(S=(R=t==null?void 0:t.data)==null?void 0:R.data)==null?void 0:S.workflow_id],options:{enabled:!!((q=(E=t==null?void 0:t.data)==null?void 0:E.data)!=null&&q.workflow_id)}}),a=Ee({enableReinitialize:!0,initialValues:{geoTagged:y==null?void 0:y.map(n=>({latitude:"",longitude:"",altitude:"",accuracy:"",imagePath:"",directionType:"",rainWaterHarvesting:""})),comment:""},validationSchema:ue().shape({geoTagged:Re().of(ue().shape({latitude:v().required("Latitude is required"),longitude:v().required("Longitude is required"),directionType:v().required("Direction is required"),imagePath:Se().required("Image is required")}))}),onSubmit:async n=>{N.fire({title:"Are you sure?",text:"\n        You are going to submit the Geo Tagging. Once submitted, you can't edit the Geo Tagging?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(s=>{s.isConfirmed&&be(n)}).catch(s=>{var i,d;console.log(s),g.error((d=(i=s==null?void 0:s.response)==null?void 0:i.data)==null?void 0:d.message)})}}),be=async n=>{var i,d,c,l,r;const s=new FormData;s.append("safId",m),n==null||n.geoTagged.forEach((o,u)=>{s.append("latitude[".concat(u,"]"),o==null?void 0:o.latitude),s.append("longitude[".concat(u,"]"),o==null?void 0:o.longitude),s.append("directionType[".concat(u,"]"),o==null?void 0:o.directionType),s.append("imagePath[".concat(u,"]"),o==null?void 0:o.imagePath)});try{const o=await f.mutateAsync({api:w.geoTagging,data:s});(i=o==null?void 0:o.data)!=null&&i.status?(g.success((d=o==null?void 0:o.data)==null?void 0:d.message),j("/amc-app/property/measurement-sheet/".concat(m),{replace:!0})):g.error((c=o==null?void 0:o.data)==null?void 0:c.message)}catch(o){g.error((r=(l=o==null?void 0:o.response)==null?void 0:l.data)==null?void 0:r.message)}},{submitCount:F,isSubmitting:I,errors:L,isValid:Te}=a,we=async()=>{var n;if(((n=a==null?void 0:a.values)==null?void 0:n.comment)=="")return g.error("Comment is required !");N.fire({title:"Are you sure?",text:"You are going to backward of this application",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async s=>{var i,d,c,l;if(s.isConfirmed)try{const r=await f.mutateAsync({api:w.safLevel,data:{applicationId:m,receiverRoleId1:"",action:"backward",comment:((i=a==null?void 0:a.values)==null?void 0:i.comment)||"No Comment"}});(d=r==null?void 0:r.data)!=null&&d.status?(g.success((c=r==null?void 0:r.data)==null?void 0:c.message),j("/amc-app/property/saf-verification-list",{replace:!0})):g.error(((l=r==null?void 0:r.data)==null?void 0:l.message)||"Something went wrong, Please try again")}catch(r){g.error(r==null?void 0:r.message),console.log(r)}}).catch(s=>{var i,d;g.error((d=(i=s==null?void 0:s.response)==null?void 0:i.data)==null?void 0:d.message)})},Ne=async(n,s,i)=>{var l,r;await((l=window==null?void 0:window.ReactNativeWebView)==null?void 0:l.postMessage(JSON.stringify({Key:"OPEN_CAMERA"})));const d=await ze(n.target.files[0]),c=new File([d],(r=n.target.files[0])==null?void 0:r.name,{type:"image/*"});a.setFieldValue("geoTagged.".concat(s,".latitude"),p==null?void 0:p.latitude),a.setFieldValue("geoTagged.".concat(s,".longitude"),p==null?void 0:p.longitude),a.setFieldValue("geoTagged.".concat(s,".directionType"),i==null?void 0:i.directionType),a.setFieldValue("geoTagged.".concat(s,".imagePath"),c),je(c)};return _e.useEffect(()=>{var n,s,i;(n=t==null?void 0:t.data)!=null&&n.data&&ye((i=(s=t==null?void 0:t.data)==null?void 0:s.data)!=null&&i.is_water_harvesting?[{id:1,title:"Front Image",directionType:"Front"},{id:2,title:"Left Image",directionType:"Left"},{id:3,title:"Right Image",directionType:"Right"},{id:4,title:"Rain Water Harvesting Image",directionType:"waterHarvesting",isRainWaterHarvesting:!0}]:[{id:1,title:"Front Image",directionType:"Front"},{id:2,title:"Left Image",directionType:"Left"},{id:3,title:"Right Image",directionType:"Right"}])},[(G=(O=t==null?void 0:t.data)==null?void 0:O.data)==null?void 0:G.saf_no]),x.useEffect(()=>{xe({submitCount:F,isSubmitting:I,errors:L,isValid:Te})},[L,F,I]),fe||N.fire({text:"Geolocation is not enabled! Please enable to use this app",icon:"error",confirmButtonText:"Ok"}),he?e.jsx("div",{className:"p-16 flex text-center text-red-500 font-semibold h-screen justify-center items-center",children:"Network Error"}):t!=null&&t.isLoading?e.jsx(Be,{}):e.jsxs(Ve,{title:"Geo Tagging",children:[f.isLoading&&e.jsx(We,{}),e.jsxs("div",{className:"p-4 ",children:[e.jsx(h.Card,{className:"w-full",children:e.jsxs(h.CardBody,{children:[e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h1",{className:"font-semibold text-sm",children:"Geo Tagging"})}),e.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-3",children:[e.jsx("h1",{className:"font-semibold text-xs",children:"Application No : "}),e.jsx("h1",{className:"text-xs",children:(z=(V=t==null?void 0:t.data)==null?void 0:V.data)==null?void 0:z.saf_no}),e.jsx("h1",{className:"font-semibold text-xs",children:"Application Type : "}),e.jsx("h1",{className:"text-xs",children:(W=(M=t==null?void 0:t.data)==null?void 0:M.data)==null?void 0:W.assessment_type}),e.jsx("h1",{className:"font-semibold text-xs",children:"Apply Date : "}),e.jsx("h1",{className:"text-xs",children:(Y=(H=t==null?void 0:t.data)==null?void 0:H.data)==null?void 0:Y.application_date}),e.jsx("h1",{className:"font-semibold text-xs",children:"Owner Name : "}),e.jsx("h1",{className:"text-xs",children:(J=(U=t==null?void 0:t.data)==null?void 0:U.data)==null?void 0:J.applicant_name}),e.jsx("h1",{className:"font-semibold text-xs",children:"Mobile No : "}),e.jsx("h1",{className:"text-xs w-40 truncate",children:(Z=(X=(Q=(K=t==null?void 0:t.data)==null?void 0:K.data)==null?void 0:Q.owners)==null?void 0:X.map(n=>n==null?void 0:n.mobile_no))==null?void 0:Z.join(", ")})]})]})}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(Oe,{formik:a,children:[e.jsx(qe,{name:"geoTagged",children:n=>y.map((s,i)=>{var d,c,l,r,o,u,te,ae,se,ie,oe,ne,re,de,ce,le,ge;return e.jsxs(x.Fragment,{children:[e.jsxs(h.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:s==null?void 0:s.title})}),e.jsxs(h.CardBody,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-3 items-center",children:[e.jsx("h1",{className:"font-semibold text-sm",children:"Latitude : "}),e.jsx(pe,{disabled:!0,type:"text",isDynamic:!0,name:"geoTagged.".concat(i,".latitude"),formik:a}),e.jsxs("h1",{className:"font-semibold text-sm",children:["Longitude :"," "]}),e.jsx(pe,{disabled:!0,type:"text",isDynamic:!0,name:"geoTagged.".concat(i,".longitude"),formik:a})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 mt-4",children:[e.jsx("div",{children:((c=(d=a==null?void 0:a.values)==null?void 0:d.geoTagged[i])==null?void 0:c.imagePath)&&e.jsx("img",{className:"w-full h-64",loading:"lazy",src:(r=(l=a==null?void 0:a.values)==null?void 0:l.geoTagged[i])!=null&&r.imagePath?URL.createObjectURL((u=(o=a==null?void 0:a.values)==null?void 0:o.geoTagged[i])==null?void 0:u.imagePath):null,alt:(se=(ae=(te=a==null?void 0:a.values)==null?void 0:te.geoTagged[i])==null?void 0:ae.imagePath)==null?void 0:se.name})}),e.jsxs("div",{children:[e.jsx("input",{type:"file",name:"imagePath",accept:"image/*",onChange:ve=>Ne(ve,i,s)}),e.jsx("span",{className:"text-sm text-red-500",children:(ne=(oe=(ie=a==null?void 0:a.errors)==null?void 0:ie.geoTagged)==null?void 0:oe[i])==null?void 0:ne.imagePath})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm text-red-900",children:((de=(re=a==null?void 0:a.values)==null?void 0:re.geoTagged[i])==null?void 0:de.imagePath)&&Math.round(((ge=(le=(ce=a==null?void 0:a.values)==null?void 0:ce.geoTagged[i])==null?void 0:le.imagePath)==null?void 0:ge.size)/1024/1024*100)/100+"MB"})})]})]})]}),e.jsx("div",{className:"my-4 border-b-2"})]},i)})}),e.jsx(Ge,{name:"comment",label:"Comment",formik:a}),e.jsxs("div",{className:"flex justify-center items-center mt-4 gap-3",children:[e.jsx(h.Button,{onClick:we,size:"sm",className:"bg-red-500 text-white",children:e.jsx("small",{children:"Back To Back Office"})}),((ee=(D=(k=T==null?void 0:T.data)==null?void 0:k.data)==null?void 0:D.permissions)==null?void 0:ee.can_forward)&&e.jsx(h.Button,{type:"submit",size:"sm",className:"bg-blue-500 text-white",children:e.jsx("small",{children:"Save & Next"})})]})]})]})]})}export{mt as default};
