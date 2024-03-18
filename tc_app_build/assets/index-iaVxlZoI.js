import{u as Le,f as Be,e as Ce,S as N,Q as g,p as w,j as e,d as Ae}from"./index-k8yqkKI_.js";import{d as y,u as _e,h as $e,f as Re,r as Se}from"./router-g9NwwHut.js";import{c as he,e as Ee,a as v,f as qe}from"./index.esm-lGQm42K_.js";import{r as x}from"./tailwind-xMhOhnt0.js";import{u as Oe,F as Ge}from"./formik.esm-MEJnthxH.js";import{F as Ve}from"./FormProvider-8P9kTgS9.js";import{T as xe}from"./TextField-k-N7beOX.js";import{T as ze}from"./TextAreaField-sUBSesBF.js";import"./index-KJUlVKah.js";import{P as Me}from"./index-M3_1qG-R.js";import{a as We,u as ye}from"./useCustomQuery-iWZaBnwd.js";import{r as He}from"./resizeImage-e4WWkMGI.js";import{u as Ye}from"./useErrorFocusFields-uptz28_u.js";import{O as Ue}from"./OverLayLoader-DJx17MnM.js";import{u as Je}from"./usePathWisePermission-pzg3Njhu.js";import"./reactQuery-m3ek4cLe.js";import"./reactQueryDevtools-6dm9iask.js";import"./axios-hq-Xw8mW.js";import"./reactIcons-TqjzQo_g.js";import"./headlessui-QgKi6LbN.js";import"./module-h8oLgeiQ.js";function xt(){var B,C,A,_,$,R,S,E,q,O,G,V,z,M,W,H,Y,U,J,K,Q,X,Z,k,D,ee,te,ae,se;Le();const[je,P]=y.useState(""),{AutoFocusErrorField:fe}=Ye(),[j,be]=y.useState([]),f=_e(),b=We({}),[Ke,Te]=y.useState(null),{id:m}=$e(),{pathname:T}=Re();Je((C=(B=T==null?void 0:T.split("/"))==null?void 0:B.slice(0,-1))==null?void 0:C.join("/"));const{coords:p,isGeolocationEnabled:Ne}=Be(),t=ye({api:w.staticSafDetail,config:{applicationId:m},value:[m],options:{enabled:!!m,onSuccess:r=>{var s,i;(s=r==null?void 0:r.data)!=null&&s.status?(P(!1),(i=r==null?void 0:r.data)!=null&&i.is_geo_tagged&&f("/amc-app/property/measurement-sheet/".concat(m),{replace:!0})):P(!0)}}}),h=ye({api:(A=Ce)==null?void 0:A.workFlowInfo,config:{workflowId:($=(_=t==null?void 0:t.data)==null?void 0:_.data)==null?void 0:$.workflow_id},value:[(S=(R=t==null?void 0:t.data)==null?void 0:R.data)==null?void 0:S.workflow_id],options:{enabled:!!((q=(E=t==null?void 0:t.data)==null?void 0:E.data)!=null&&q.workflow_id)}}),a=Oe({enableReinitialize:!0,initialValues:{geoTagged:j==null?void 0:j.map(r=>({latitude:"",longitude:"",altitude:"",accuracy:"",imagePath:"",directionType:"",rainWaterHarvesting:""})),comment:""},validationSchema:he().shape({geoTagged:Ee().of(he().shape({latitude:v().required("Latitude is required"),longitude:v().required("Longitude is required"),directionType:v().required("Direction is required"),imagePath:qe().required("Image is required")}))}),onSubmit:async r=>{N.fire({title:"Are you sure?",text:"\n        You are going to submit the Geo Tagging. Once submitted, you can't edit the Geo Tagging?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(s=>{s.isConfirmed&&we(r)}).catch(s=>{var i,d;g.error((d=(i=s==null?void 0:s.response)==null?void 0:i.data)==null?void 0:d.message)})}}),we=async r=>{var i,d,c,l,n;const s=new FormData;s.append("safId",m),r==null||r.geoTagged.forEach((o,u)=>{s.append("latitude[".concat(u,"]"),o==null?void 0:o.latitude),s.append("longitude[".concat(u,"]"),o==null?void 0:o.longitude),s.append("directionType[".concat(u,"]"),o==null?void 0:o.directionType),s.append("imagePath[".concat(u,"]"),o==null?void 0:o.imagePath)});try{const o=await b.mutateAsync({api:w.geoTagging,data:s});(i=o==null?void 0:o.data)!=null&&i.status?(g.success((d=o==null?void 0:o.data)==null?void 0:d.message),f("/amc-app/property/measurement-sheet/".concat(m),{replace:!0})):g.error((c=o==null?void 0:o.data)==null?void 0:c.message)}catch(o){g.error((n=(l=o==null?void 0:o.response)==null?void 0:l.data)==null?void 0:n.message)}},{submitCount:F,isSubmitting:I,errors:L,isValid:ve}=a,Pe=async()=>{var r;if(((r=a==null?void 0:a.values)==null?void 0:r.comment)=="")return g.error("Comment is required !");N.fire({title:"Are you sure?",text:"You are going to backward of this application",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async s=>{var i,d,c,l;if(s.isConfirmed)try{const n=await b.mutateAsync({api:w.safLevel,data:{applicationId:m,receiverRoleId1:"",action:"backward",comment:((i=a==null?void 0:a.values)==null?void 0:i.comment)||"No Comment"}});(d=n==null?void 0:n.data)!=null&&d.status?(g.success((c=n==null?void 0:n.data)==null?void 0:c.message),f("/amc-app/property/saf-verification-list",{replace:!0})):g.error(((l=n==null?void 0:n.data)==null?void 0:l.message)||"Something went wrong, Please try again")}catch(n){g.error(n==null?void 0:n.message)}}).catch(s=>{var i,d;g.error((d=(i=s==null?void 0:s.response)==null?void 0:i.data)==null?void 0:d.message)})},Fe=async(r,s,i)=>{var l,n;await((l=window==null?void 0:window.ReactNativeWebView)==null?void 0:l.postMessage(JSON.stringify({Key:"OPEN_CAMERA"})));const d=await He(r.target.files[0]),c=new File([d],(n=r.target.files[0])==null?void 0:n.name,{type:"image/*"});a.setFieldValue("geoTagged.".concat(s,".latitude"),p==null?void 0:p.latitude),a.setFieldValue("geoTagged.".concat(s,".longitude"),p==null?void 0:p.longitude),a.setFieldValue("geoTagged.".concat(s,".directionType"),i==null?void 0:i.directionType),a.setFieldValue("geoTagged.".concat(s,".imagePath"),c),Te(c)};return Se.useEffect(()=>{var r,s,i;(r=t==null?void 0:t.data)!=null&&r.data&&be((i=(s=t==null?void 0:t.data)==null?void 0:s.data)!=null&&i.is_water_harvesting?[{id:1,title:"Front Image",directionType:"Front"},{id:2,title:"Left Image",directionType:"Left"},{id:3,title:"Right Image",directionType:"Right"},{id:4,title:"Rain Water Harvesting Image",directionType:"waterHarvesting",isRainWaterHarvesting:!0}]:[{id:1,title:"Front Image",directionType:"Front"},{id:2,title:"Left Image",directionType:"Left"},{id:3,title:"Right Image",directionType:"Right"}])},[(G=(O=t==null?void 0:t.data)==null?void 0:O.data)==null?void 0:G.saf_no]),y.useEffect(()=>{fe({submitCount:F,isSubmitting:I,errors:L,isValid:ve})},[L,F,I]),Ne||N.fire({text:"Geolocation is not enabled! Please enable to use this app",icon:"error",confirmButtonText:"Ok"}),je?e.jsx("div",{className:"p-16 flex text-center text-red-500 font-semibold h-screen justify-center items-center",children:"Network Error"}):t!=null&&t.isLoading?e.jsx(Ae,{}):e.jsxs(Me,{title:"Geo Tagging",children:[b.isLoading&&e.jsx(Ue,{}),e.jsxs("div",{className:"p-4 ",children:[e.jsx(x.Card,{className:"w-full",children:e.jsxs(x.CardBody,{children:[e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("h1",{className:"font-semibold",children:"Geo Tagging"})}),e.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-3",children:[e.jsx("h1",{className:"font-semibold text-sm",children:"Application No : "}),e.jsx("h1",{className:"text-sm",children:(z=(V=t==null?void 0:t.data)==null?void 0:V.data)==null?void 0:z.saf_no}),e.jsx("h1",{className:"font-semibold text-sm",children:"Application Type : "}),e.jsx("h1",{className:"text-sm",children:(W=(M=t==null?void 0:t.data)==null?void 0:M.data)==null?void 0:W.assessment_type}),e.jsx("h1",{className:"font-semibold text-sm",children:"Apply Date : "}),e.jsx("h1",{className:"text-sm",children:(Y=(H=t==null?void 0:t.data)==null?void 0:H.data)==null?void 0:Y.application_date}),e.jsx("h1",{className:"font-semibold text-sm",children:"Owner Name : "}),e.jsx("h1",{className:"text-sm",children:(J=(U=t==null?void 0:t.data)==null?void 0:U.data)==null?void 0:J.applicant_name}),e.jsx("h1",{className:"font-semibold text-sm",children:"Mobile No : "}),e.jsx("h1",{className:"text-sm w-40 truncate",children:(Z=(X=(Q=(K=t==null?void 0:t.data)==null?void 0:K.data)==null?void 0:Q.owners)==null?void 0:X.map(r=>r==null?void 0:r.mobile_no))==null?void 0:Z.join(", ")})]})]})}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(Ve,{formik:a,children:[e.jsx(Ge,{name:"geoTagged",children:r=>j.map((s,i)=>{var d,c,l,n,o,u,ie,oe,re,ne,de,ce,le,ge,me,ue,pe;return e.jsxs(y.Fragment,{children:[e.jsxs(x.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:s==null?void 0:s.title})}),e.jsxs(x.CardBody,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-3 items-center",children:[e.jsx("h1",{className:"font-semibold text-sm",children:"Latitude : "}),e.jsx(xe,{disabled:!0,type:"text",isDynamic:!0,name:"geoTagged.".concat(i,".latitude"),formik:a}),e.jsxs("h1",{className:"font-semibold text-sm",children:["Longitude :"," "]}),e.jsx(xe,{disabled:!0,type:"text",isDynamic:!0,name:"geoTagged.".concat(i,".longitude"),formik:a})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 mt-4",children:[e.jsx("div",{children:((c=(d=a==null?void 0:a.values)==null?void 0:d.geoTagged[i])==null?void 0:c.imagePath)&&e.jsx("img",{className:"w-full h-64",loading:"lazy",src:(n=(l=a==null?void 0:a.values)==null?void 0:l.geoTagged[i])!=null&&n.imagePath?URL.createObjectURL((u=(o=a==null?void 0:a.values)==null?void 0:o.geoTagged[i])==null?void 0:u.imagePath):null,alt:(re=(oe=(ie=a==null?void 0:a.values)==null?void 0:ie.geoTagged[i])==null?void 0:oe.imagePath)==null?void 0:re.name})}),e.jsxs("div",{children:[e.jsx("input",{type:"file",name:"imagePath",accept:"image/*",onChange:Ie=>Fe(Ie,i,s)}),e.jsx("span",{className:"text-sm text-red-500",children:(ce=(de=(ne=a==null?void 0:a.errors)==null?void 0:ne.geoTagged)==null?void 0:de[i])==null?void 0:ce.imagePath})]}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm text-red-900",children:((ge=(le=a==null?void 0:a.values)==null?void 0:le.geoTagged[i])==null?void 0:ge.imagePath)&&Math.round(((pe=(ue=(me=a==null?void 0:a.values)==null?void 0:me.geoTagged[i])==null?void 0:ue.imagePath)==null?void 0:pe.size)/1024/1024*100)/100+"MB"})})]})]})]}),e.jsx("div",{className:"my-4 border-b-2"})]},i)})}),e.jsx(ze,{name:"comment",label:"Comment",formik:a}),e.jsxs("div",{className:"flex justify-center items-center mt-4 gap-3",children:[((ee=(D=(k=h==null?void 0:h.data)==null?void 0:k.data)==null?void 0:D.permissions)==null?void 0:ee.can_backward)&&e.jsx(x.Button,{onClick:Pe,size:"sm",className:"bg-red-500 text-white",children:e.jsx("small",{children:"Back To Back Office"})}),((se=(ae=(te=h==null?void 0:h.data)==null?void 0:te.data)==null?void 0:ae.permissions)==null?void 0:se.can_forward)&&e.jsx(x.Button,{type:"submit",size:"sm",className:"bg-blue-500 text-white",children:e.jsx("small",{children:"Save & Next"})})]})]})]})]})}export{xt as default};
