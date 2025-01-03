import{e as ze,d as ve,Q as N,S as T,p as f,b as w,j as e}from"./index-tJbU7ayB.js";import{P as Ae}from"./index-6o85-u81.js";import{e as Se,d as _e}from"./router-vSHQYlWC.js";import{u as Fe}from"./formik.esm-feHG9Gj_.js";import{c as Ve,a as j}from"./index.esm-YegZWto1.js";import{F as Be}from"./FormProvider-fBqmJEVl.js";import{T as m}from"./TextField-QPeamiX3.js";import{S as je}from"./SelectField-T4CMJ1yZ.js";import{T as ye}from"./TextAreaField-sy2rrLiR.js";import"./TranslateField-wCz68bV9.js";import{r as qe}from"./resizeImage-XQgyMl68.js";import{r as z}from"./tailwind-nPCoKmcy.js";import{u as Re}from"./useLocationRadius-e2gYFfka.js";import"./reactQuery-xwoMMF6K.js";import"./axios-lPgvryBG.js";import"./reactIcons-jqXmw8S_.js";import"./headlessui-kWR29u24.js";import"./customInputValidation-jhKsg103.js";const Ze=[{id:1,label:"Zone A-East",value:"1"},{id:2,label:"Zone B-West",value:"2"},{id:3,label:"Zone C-North",value:"3"},{id:4,label:"Zone D-South",value:"4"}];function Ee({getPropDetails:n,demandDetails:r,id:c}){var A,S,_,F,V,B,q,R,Z,E,U,M,W,L,O,Y,$,H,J,K,Q,X,k,G,P,D,ee,ae,ne,te,de,re,ie,oe,se,ce,le,me,ue,pe,xe,he;const{calculateDistance:Ne}=Re(),fe=Se(),{coords:h,isGeolocationEnabled:v,isGeolocationAvailable:Ie}=ze(),we=ve({}),[ge,Ce]=_e.useState(null),a=Fe({enableReinitialize:!0,initialValues:{zoneName:((S=(A=n==null?void 0:n.data)==null?void 0:A.data)==null?void 0:S.zone_name)||"",zoneId:((F=(_=n==null?void 0:n.data)==null?void 0:_.data)==null?void 0:F.zone_mstr_id)||"",wardId:((B=(V=n==null?void 0:n.data)==null?void 0:V.data)==null?void 0:B.ward_mstr_id)||"",wardName:((R=(q=n==null?void 0:n.data)==null?void 0:q.data)==null?void 0:R.ward_no)||"",holdingNo:((E=(Z=n==null?void 0:n.data)==null?void 0:Z.data)==null?void 0:E.holding_no)||"",propertyNo:((M=(U=n==null?void 0:n.data)==null?void 0:U.data)==null?void 0:M.property_no)||"",name:((L=(W=n==null?void 0:n.data)==null?void 0:W.data)==null?void 0:L.owner_name)||"",propAddress:((Y=(O=n==null?void 0:n.data)==null?void 0:O.data)==null?void 0:Y.prop_address)||"",mobileNo:((J=(H=($=n==null?void 0:n.data)==null?void 0:$.data)==null?void 0:H.owners[0])==null?void 0:J.mobile_no)||"",arrearDemand:((Q=(K=r==null?void 0:r.data)==null?void 0:K.data)==null?void 0:Q.arrear)||"",currentDemand:((k=(X=r==null?void 0:r.data)==null?void 0:X.data)==null?void 0:k.currentDemand)||"",interest:((P=(G=r==null?void 0:r.data)==null?void 0:G.data)==null?void 0:P.arrearMonthlyPenalty)||"",totalDemand:((ee=(D=r==null?void 0:r.data)==null?void 0:D.data)==null?void 0:ee.payableAmt)||"",changeConsTypeId:"",changeUsagesTypeId:"",latitude:"",longitude:"",document:"",remark:"",citizenComment:""},validationSchema:Ve().shape({zoneId:j().required("Zone is required"),wardId:j().required("Ward is required"),latitude:j().required("Latitude is required"),longitude:j().required("Longitude is required"),document:j().required("Document is required"),remark:j().required("Remark is required")}),onSubmit:async(t,{resetForm:b})=>{var u;if(!v)return N.error("Please enable location service");if((u=o==null?void 0:o.data)!=null&&u.status&&I()>20)return T.fire({title:"Location Service",text:"You are not in the range of 20 meters from the property location. Please go near to the property location to submit the application.",icon:"warning",confirmButtonText:"Ok",reverseButtons:!0});const d=new FormData;d.append("zoneId",t.zoneId),d.append("wardId",t.wardId),d.append("holdingNo",t.holdingNo||""),d.append("propertyNo",t.propertyNo||""),d.append("name",t.name||""),d.append("propAddress",t.propAddress||""),d.append("mobileNo",t.mobileNo||""),d.append("arrearDemand",t.arrearDemand||""),d.append("currentDemand",t.currentDemand||""),d.append("interest",t.interest||""),d.append("totalDemand",t.totalDemand||""),d.append("changeConsTypeId",t.changeConsTypeId||""),d.append("changeUsagesTypeId",t.changeUsagesTypeId||""),d.append("latitude",t.latitude),d.append("longitude",t.longitude),d.append("document",ge),d.append("remark",t.remark),d.append("citizenComment",t.citizenComment||""),T.fire({title:"Are you sure?",text:"\n          You are going to submit the application for the visit. Please make sure all the details are correct.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async l=>{var p,x,y,C,be;if(l.isConfirmed)try{const s=await we.mutateAsync({api:f.addVisit,data:d});(p=s==null?void 0:s.data)!=null&&p.status?(N.success((x=s==null?void 0:s.data)==null?void 0:x.message),b(),n.remove(),r.remove(),fe("/amc-app/property/visiting-list",{replace:!0})):N.error((y=s==null?void 0:s.data)==null?void 0:y.message)}catch(s){N.error((be=(C=s==null?void 0:s.response)==null?void 0:C.data)==null?void 0:be.message)}}).catch(l=>{var p,x;console.log(l),N.error((x=(p=l==null?void 0:l.response)==null?void 0:p.data)==null?void 0:x.message)})}}),{values:i}=a,{data:g,isPending:Ue,isError:Me,error:We,isLoading:Le}=w({api:f.getWardByZone,config:{zoneId:i==null?void 0:i.zoneId},value:[i==null?void 0:i.zoneId],options:{enabled:!!(i!=null&&i.zoneId)}}),o=w({api:f.getLatLanBySafId,config:{safId:(ne=(ae=n==null?void 0:n.data)==null?void 0:ae.data)==null?void 0:ne.saf_id},key:"safGeoLocation",value:[(de=(te=n==null?void 0:n.data)==null?void 0:te.data)==null?void 0:de.saf_id],options:{enabled:!!((ie=(re=n==null?void 0:n.data)==null?void 0:re.data)!=null&&ie.saf_id)}}),Te=async t=>{var u,l;await((u=window==null?void 0:window.ReactNativeWebView)==null?void 0:u.postMessage(JSON.stringify({Key:"OPEN_CAMERA"})));const b=await qe(t.target.files[0]),d=new File([b],(l=t.target.files[0])==null?void 0:l.name,{type:"image/*"});a.setFieldValue("latitude",h==null?void 0:h.latitude),a.setFieldValue("longitude",h==null?void 0:h.longitude),a.setFieldValue("document",d),Ce(d)},I=()=>{var t,b,d,u,l,p,x,y;return((b=(t=o==null?void 0:o.data)==null?void 0:t.data)==null?void 0:b.length)>0?Ne((u=(d=o==null?void 0:o.data)==null?void 0:d.data[0])==null?void 0:u.latitude,(p=(l=o==null?void 0:o.data)==null?void 0:l.data[0])==null?void 0:p.longitude,(x=a==null?void 0:a.values)==null?void 0:x.latitude,(y=a==null?void 0:a.values)==null?void 0:y.longitude):0};return e.jsx(z.Card,{children:e.jsx(z.CardBody,{color:"blue",children:e.jsxs(Be,{formik:a,children:[e.jsx("div",{className:"p-2",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs(je,{name:"zoneId",label:"Zone Name",formik:a,disabled:c,children:[e.jsx("option",{value:"",children:"Select Zone"}),Ze.map(t=>e.jsx("option",{value:t.value,children:t.label},t.id))]}),e.jsxs(je,{name:"wardId",label:"Ward Name",formik:a,disabled:c,children:[e.jsx("option",{value:"",children:"Select Ward"}),(oe=g==null?void 0:g.data)==null?void 0:oe.map(t=>e.jsx("option",{value:t.id,children:t.ward_name},t.id))]}),e.jsx(m,{name:"holdingNo",label:"Holding No",formik:a,disabled:c}),e.jsx(m,{name:"propertyNo",label:"Property No",formik:a,disabled:c}),e.jsx(m,{name:"name",label:"Name",formik:a,disabled:c}),e.jsx(m,{name:"propAddress",label:"Address",formik:a,disabled:c}),e.jsx(m,{name:"mobileNo",label:"Mobile No",formik:a,inputValidation:["mobile","number"]})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsx(m,{name:"arrearDemand",label:"Arrear Demand",formik:a,inputValidation:["floatNumber"],disabled:c}),e.jsx(m,{name:"currentDemand",label:"Current Demand",inputValidation:["floatNumber"],formik:a,disabled:c}),e.jsx(m,{name:"interest",label:"Interest",formik:a,inputValidation:["floatNumber"],disabled:c}),e.jsx(m,{name:"totalDemand",label:"Total Demand",formik:a,inputValidation:["floatNumber"],disabled:c}),e.jsx(m,{name:"changeConsTypeId",label:"Change in Construction Type?",placeholder:"Construction Type",formik:a}),e.jsx(m,{name:"changeUsagesTypeId",label:"Change in Usages Type?",placeholder:"Usages Type",formik:a}),e.jsxs("div",{children:[e.jsx(m,{type:"file",label:"Visit Document",name:"document",accept:"image/*",onChange:t=>{if(!v||!Ie){t.target.value=null,T.fire({title:"Location Service",text:"Please enable location service",icon:"warning",confirmButtonText:"Ok",reverseButtons:!0});return}Te(t)}}),((se=a==null?void 0:a.errors)==null?void 0:se.document)&&e.jsx("span",{className:"text-red-500 text-xs",children:(ce=a==null?void 0:a.errors)==null?void 0:ce.document}),!((le=a==null?void 0:a.values)!=null&&le.latitude)&&e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-red-500 text-xs",children:(me=a==null?void 0:a.errors)==null?void 0:me.latitude}),e.jsx("span",{className:"text-red-500 text-xs",children:(ue=a==null?void 0:a.errors)==null?void 0:ue.longitude})]}),((pe=a==null?void 0:a.values)==null?void 0:pe.document)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-xs",children:"Latitude: "+(i==null?void 0:i.latitude)}),e.jsx("span",{className:"text-xs",children:" Longitude: "+(i==null?void 0:i.longitude)})]}),((he=(xe=o==null?void 0:o.data)==null?void 0:xe.data)==null?void 0:he.length)>0&&e.jsx("div",{className:"flex justify-center mt-4",children:e.jsxs("span",{className:"text-xs \n                          ".concat(I()>20?"text-red-500":"text-green-500","\n                            "),children:[I()>20?"You are not in the range of 20 meters from the property location. Please go near to the property location to submit the application.":"You are in the range of 20 meters from the property location."," ","Distance: "+Math.floor(I()).toFixed(2)+" meters"]})})]})]}),e.jsx("div",{className:"mt-6",children:e.jsx(ye,{name:"remark",label:"Remark",formik:a})}),e.jsx(ye,{name:"citizenComment",label:"Citizen Comment",formik:a})]})]})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(z.Button,{size:"sm",type:"submit",className:"btn btn-primary",children:"Submit"})})]})})})}function ia(){const n=new URLSearchParams(window.location.search),r=w({api:f.getPropByHolding,config:{propertyId:n.get("id")},options:{enabled:!!n.get("id")}}),c=w({api:f.getDemandDetails,config:{propId:n.get("id")},options:{enabled:!!n.get("id")}});return e.jsx(Ae,{title:"Visiting",children:e.jsx("div",{className:"p-2",children:e.jsx(Ee,{getPropDetails:r,demandDetails:c,id:n.get("id")})})})}export{ia as default};