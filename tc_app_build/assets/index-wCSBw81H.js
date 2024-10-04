import{e as Sa,d as Pa,Q as j,S as wa,f as I,c as _,p as la,j as i}from"./index-JsYGHPyl.js";import{P as Ra}from"./index-rQeoRPmg.js";import{u as qa,d as ka}from"./router-5yjtezO8.js";import{u as Ba}from"./formik.esm-BnzrXcQN.js";import{c as La,a as h}from"./index.esm-uHa2PMRf.js";import{F as Va}from"./FormProvider-Y5__ZVwD.js";import{T as r}from"./TextField-iX21WImJ.js";import{S as y}from"./SelectField-rYnh3ufy.js";import{T as Ia}from"./TextAreaField-QiD5v7kp.js";import"./index-iFVn5AxS.js";import{r as Ea}from"./resizeImage-bhTPe_yx.js";import{r as w}from"./tailwind-6U-kYQAu.js";import"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./customInputValidation-jhKsg103.js";const Za=[{id:1,label:"Zone A-East",value:"1"},{id:2,label:"Zone B-West",value:"2"},{id:3,label:"Zone C-North",value:"3"},{id:4,label:"Zone D-South",value:"4"}],Ma=[{id:1,label:"Metered"},{id:3,label:"Fixed"}];function Wa({getConsumerDtl:d,getDemandDtl:x,id:o}){var T,A,F,S,P,l,R,q,k,B,L,V,E,Z,M,W,O,G,Y,$,H,J,K,Q,U,X,g,v,u,C,D,aa,da,ia,ea,na,oa,ca,ra,pa,ta,ma,ba,xa,Na,ha,ja;const _a=qa(),{coords:N,isGeolocationEnabled:z,isGeolocationAvailable:za}=Sa(),Ta=Pa({}),[Oa,Aa]=ka.useState(null),e=Ba({enableReinitialize:!0,initialValues:{consumerId:o||0,zoneName:((A=(T=d==null?void 0:d.data)==null?void 0:T.data)==null?void 0:A.zone_name)||"",zoneId:((S=(F=d==null?void 0:d.data)==null?void 0:F.data)==null?void 0:S.zone_mstr_id)||"",wardId:((l=(P=d==null?void 0:d.data)==null?void 0:P.data)==null?void 0:l.ward_mstr_id)||"",wardName:((q=(R=d==null?void 0:d.data)==null?void 0:R.data)==null?void 0:q.ward_number)||"",holdingNo:((B=(k=d==null?void 0:d.data)==null?void 0:k.data)==null?void 0:B.holding_no)||"",propertyNo:((V=(L=d==null?void 0:d.data)==null?void 0:L.data)==null?void 0:V.folio_no)||"",connectionType:((Z=(E=d==null?void 0:d.data)==null?void 0:E.data)==null?void 0:Z.connection_type)||"",ConsumerNo:((W=(M=d==null?void 0:d.data)==null?void 0:M.data)==null?void 0:W.consumer_no)||"",applicantName:((G=(O=d==null?void 0:d.data)==null?void 0:O.data)==null?void 0:G.applicant_name)||"",category:(($=(Y=d==null?void 0:d.data)==null?void 0:Y.data)==null?void 0:$.category)||"",meterNo:((J=(H=d==null?void 0:d.data)==null?void 0:H.data)==null?void 0:J.meter_no)||"",mobileNo:((Q=(K=d==null?void 0:d.data)==null?void 0:K.data)==null?void 0:Q.mobile_no)||"",meterReading:((X=(U=d==null?void 0:d.data)==null?void 0:U.data)==null?void 0:X.meter_reading)||"",address:((v=(g=d==null?void 0:d.data)==null?void 0:g.data)==null?void 0:v.address)||"",demandAmount:((C=(u=x==null?void 0:x.data)==null?void 0:u.data)==null?void 0:C.totalSumDemand)||"",latitude:"",longitude:"",document:"",remarks:"",citizenComment:""},validationSchema:La().shape({zoneId:h().required("Zone is required"),wardId:h().required("Ward is required"),latitude:h().required("Latitude is required"),longitude:h().required("Longitude is required"),document:h().required("Document is required"),remarks:h().required("Remark is required")}),onSubmit:async(a,{resetForm:s})=>{if(!z)return j.error("Please enable location service");const n=new FormData;n.append("consumerId",a==null?void 0:a.consumerId),n.append("zoneId",a==null?void 0:a.zoneId),n.append("wardId",a==null?void 0:a.wardId),n.append("holdingNo",a==null?void 0:a.holdingNo),n.append("propertyNo",a==null?void 0:a.propertyNo),n.append("applicantName",a==null?void 0:a.applicantName),n.append("mobileNo",a==null?void 0:a.mobileNo),n.append("address",a==null?void 0:a.address),n.append("connectionType",a==null?void 0:a.connectionType),n.append("connectionTypeName",(a==null?void 0:a.connectionType)==1?"Metered":"Fixed"),n.append("ConsumerNo",a==null?void 0:a.ConsumerNo),n.append("category",a==null?void 0:a.category),n.append("meterNo",a==null?void 0:a.meterNo),n.append("meterReading",a==null?void 0:a.meterReading),n.append("latitude",a==null?void 0:a.latitude),n.append("longitude",a==null?void 0:a.longitude),n.append("document",a==null?void 0:a.document),n.append("remarks",a==null?void 0:a.remarks),n.append("citizenComment",a==null?void 0:a.citizenComment),n.append("demandAmount",a==null?void 0:a.demandAmount),wa.fire({title:"Are you sure?",text:"\n          You are going to submit the application for the visit. Please make sure all the details are correct.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async t=>{var m,b,fa,sa,ya;if(t.isConfirmed)try{const c=await Ta.mutateAsync({api:I.addWaterTcVisit,data:n});(m=c==null?void 0:c.data)!=null&&m.status?(j.success((b=c==null?void 0:c.data)==null?void 0:b.message),_a("/amc-app/water/list-tc-visit",{replace:!0}),s(),x.remove(),d.remove()):j.error((fa=c==null?void 0:c.data)==null?void 0:fa.message)}catch(c){j.error((ya=(sa=c==null?void 0:c.response)==null?void 0:sa.data)==null?void 0:ya.message)}}).catch(t=>{var m,b;console.log(t),j.error((b=(m=t==null?void 0:t.response)==null?void 0:m.data)==null?void 0:b.message)})}}),{values:p}=e,{data:f,isPending:Ga,isError:Ya,error:$a,isLoading:Ha}=_({api:la.getWardByZone,config:{zoneId:p==null?void 0:p.zoneId},value:[p==null?void 0:p.zoneId],options:{enabled:!!(p!=null&&p.zoneId)}}),Fa=async a=>{var t,m,b;if(!((t=a.target)!=null&&t.files[0]))return;await((m=window==null?void 0:window.ReactNativeWebView)==null?void 0:m.postMessage(JSON.stringify({Key:"OPEN_CAMERA"})));const s=await Ea(a.target.files[0]),n=new File([s],(b=a.target.files[0])==null?void 0:b.name,{type:"image/*"});e.setFieldValue("latitude",N==null?void 0:N.latitude),e.setFieldValue("longitude",N==null?void 0:N.longitude),e.setFieldValue("document",n),Aa(n)};return i.jsx(w.Card,{children:i.jsx(w.CardBody,{color:"blue",children:i.jsxs(Va,{formik:e,children:[i.jsx("div",{className:"p-2",children:i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"col-md-6",children:[i.jsxs(y,{name:"zoneId",label:"Zone Name",formik:e,disabled:o,children:[i.jsx("option",{value:"",children:"Select Zone"}),Za.map(a=>i.jsx("option",{value:a.value,children:a.label},a.id))]}),i.jsxs(y,{name:"wardId",label:"Ward Name",formik:e,disabled:o,children:[i.jsx("option",{value:"",children:"Select Ward"}),(D=f==null?void 0:f.data)==null?void 0:D.map(a=>i.jsx("option",{value:a.id,children:a.ward_name},a.id))]}),i.jsx(r,{name:"holdingNo",label:"Holding No",formik:e,disabled:o&&((da=(aa=d==null?void 0:d.data)==null?void 0:aa.data)==null?void 0:da.holding_no)}),i.jsx(r,{name:"propertyNo",label:"Property No",formik:e,disabled:o&&((ea=(ia=d==null?void 0:d.data)==null?void 0:ia.data)==null?void 0:ea.folio_no)}),i.jsx(r,{name:"applicantName",label:"Name",formik:e,disabled:o&&((oa=(na=d==null?void 0:d.data)==null?void 0:na.data)==null?void 0:oa.applicant_name)}),i.jsx(r,{name:"mobileNo",label:"Mobile No",formik:e}),i.jsx(r,{name:"address",label:"Address",formik:e,disabled:o&&((ra=(ca=d==null?void 0:d.data)==null?void 0:ca.data)==null?void 0:ra.address),inputValidation:["mobile"]})]}),i.jsx("div",{className:"col-md-6",children:i.jsxs(y,{name:"connectionType",label:"Connection Type",formik:e,disabled:o,children:[i.jsx("option",{value:"",children:"Connection Type"}),Ma.map(a=>i.jsx("option",{value:a.id,children:a.label},a.id))]})}),i.jsxs("div",{className:"col-md-6",children:[i.jsx(r,{name:"ConsumerNo",label:"Consumer No",formik:e,disabled:o&&((ta=(pa=d==null?void 0:d.data)==null?void 0:pa.data)==null?void 0:ta.consumer_no)}),i.jsx(r,{name:"category",label:"Category",formik:e,disabled:o&&((ba=(ma=d==null?void 0:d.data)==null?void 0:ma.data)==null?void 0:ba.category)}),i.jsx(r,{name:"meterNo",label:"Meter No",formik:e,disabled:o&&((Na=(xa=d==null?void 0:d.data)==null?void 0:xa.data)==null?void 0:Na.meter_no)}),i.jsx(r,{name:"meterReading",label:"Meter Reading",formik:e,disabled:o&&((ja=(ha=d==null?void 0:d.data)==null?void 0:ha.data)==null?void 0:ja.meter_reading)}),i.jsx(r,{name:"demandAmount",label:"Demand Amount",formik:e,disabled:o}),i.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[i.jsxs("div",{className:"col-span-2",children:[i.jsx(r,{label:"Document",type:"file",capture:"environment",name:"document",accept:"image/*",id:"document",onChange:a=>{if(!z||!za){a.target.value=null,wa.fire({title:"Location Service",text:"Please enable location service",icon:"warning",confirmButtonText:"Ok",reverseButtons:!0});return}Fa(a)}}),e.errors.document&&e.touched.document?i.jsx("small",{className:"text-red-500 -mt-2",children:e.errors.document}):null]}),i.jsx("div",{children:i.jsx(r,{name:"latitude",label:"Latitude",formik:e,disabled:!0})}),i.jsx("div",{children:i.jsx(r,{name:"longitude",label:"Longitude",formik:e,disabled:!0})})]}),i.jsx(Ia,{name:"remarks",label:"Remarks",formik:e}),i.jsx(Ia,{name:"citizenComment",label:"Citizen Comment",formik:e})]})]})}),i.jsx("div",{className:"flex justify-center",children:i.jsx(w.Button,{size:"sm",type:"submit",className:"btn btn-primary",children:"Submit"})})]})})})}function rd(){const d=new URLSearchParams(window.location.search),x=_({api:I.waterGetDetails,config:{applicationId:d.get("id")},options:{enabled:!!d.get("id")}}),o=_({api:I.waterListDemand,config:{ConsumerId:d.get("id")},options:{enabled:!!d.get("id")}});return i.jsx(Ra,{title:"Water Visiting",children:i.jsx("div",{className:"p-2",children:i.jsx(Wa,{getConsumerDtl:x,getDemandDtl:o,id:d.get("id")})})})}export{rd as default};
