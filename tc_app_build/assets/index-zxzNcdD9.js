import{e as fa,d as Sa,Q as h,S as Fa,f as V,c as I,p as Pa,j as i}from"./index-r6pkVfbe.js";import{P as Ra}from"./index-XdDZ0AxP.js";import{u as Ea,d as La,r as Ia}from"./router-5yjtezO8.js";import{u as qa}from"./formik.esm-BnzrXcQN.js";import{c as Ba,a as m}from"./index.esm-uHa2PMRf.js";import{F as Za}from"./FormProvider-kGPBuDhT.js";import{T as t}from"./TextField-WLFSaEKU.js";import{S as w}from"./SelectField-D-hcXiLT.js";import{T as Va}from"./TextAreaField-wwGW22Fx.js";import"./TranslateField-BH3bQnqu.js";import{r as Ma}from"./resizeImage-xHSvE3rm.js";import{r as F}from"./tailwind-6U-kYQAu.js";import{u as Wa}from"./reactQuery-QTVGT_ni.js";import"./axios-lPgvryBG.js";import"./reactIcons-ElHvrKTF.js";import"./headlessui-iZReL1Rn.js";import"./customInputValidation-jhKsg103.js";const Oa=[{id:1,label:"Zone A-East",value:"1"},{id:2,label:"Zone B-West",value:"2"},{id:3,label:"Zone C-North",value:"3"},{id:4,label:"Zone D-South",value:"4"}],Ga=[{id:1,label:"Metered"},{id:3,label:"Fixed"}];function Qa({getConsumerDtl:d,getDemandDtl:p,id:c}){var _,T,A,f,S,P,R,E,L,q,B,Z,M,W,O,G,Q,K,Y,$,H,J,U,X,k,g,u,v,C,D,aa,da,ea,ia,na,ca,oa,ta,pa,ra,sa,ba,Na,xa,ma,ha,la;const l=Ea(),{coords:b,isGeolocationEnabled:z,isGeolocationAvailable:za}=fa(),_a=Sa({}),[Ka,Ta]=La.useState(null),e=qa({enableReinitialize:!0,initialValues:{consumerId:c||0,zoneName:((T=(_=d==null?void 0:d.data)==null?void 0:_.data)==null?void 0:T.zone_name)||"",zoneId:((f=(A=d==null?void 0:d.data)==null?void 0:A.data)==null?void 0:f.zone_mstr_id)||"",wardId:((P=(S=d==null?void 0:d.data)==null?void 0:S.data)==null?void 0:P.ward_mstr_id)||"",wardName:((E=(R=d==null?void 0:d.data)==null?void 0:R.data)==null?void 0:E.ward_number)||"",holdingNo:((q=(L=d==null?void 0:d.data)==null?void 0:L.data)==null?void 0:q.holding_no)||"",propertyNo:((Z=(B=d==null?void 0:d.data)==null?void 0:B.data)==null?void 0:Z.folio_no)||"",connectionType:((W=(M=d==null?void 0:d.data)==null?void 0:M.data)==null?void 0:W.connection_type)||"",ConsumerNo:((G=(O=d==null?void 0:d.data)==null?void 0:O.data)==null?void 0:G.consumer_no)||"",applicantName:((K=(Q=d==null?void 0:d.data)==null?void 0:Q.data)==null?void 0:K.applicant_name)||"",category:(($=(Y=d==null?void 0:d.data)==null?void 0:Y.data)==null?void 0:$.category)||"",meterNo:((J=(H=d==null?void 0:d.data)==null?void 0:H.data)==null?void 0:J.meter_no)||"",mobileNo:((X=(U=d==null?void 0:d.data)==null?void 0:U.data)==null?void 0:X.mobile_no)||"",meterReading:((g=(k=d==null?void 0:d.data)==null?void 0:k.data)==null?void 0:g.meter_reading)||"",address:((v=(u=d==null?void 0:d.data)==null?void 0:u.data)==null?void 0:v.address)||"",demandAmount:((D=(C=p==null?void 0:p.data)==null?void 0:C.data)==null?void 0:D.totalSumDemand)||"",latitude:"",longitude:"",document:"",remarks:"",citizenComment:""},validationSchema:Ba().shape({zoneId:m().required("Zone is required"),wardId:m().required("Ward is required"),latitude:m().required("Latitude is required"),longitude:m().required("Longitude is required"),document:m().required("Document is required"),remarks:m().required("Remark is required")}),onSubmit:async(a,{resetForm:y})=>{if(!z)return h.error("Please enable location service");const n=new FormData;n.append("consumerId",a==null?void 0:a.consumerId),n.append("zoneId",a==null?void 0:a.zoneId),n.append("wardId",a==null?void 0:a.wardId),n.append("holdingNo",a==null?void 0:a.holdingNo),n.append("propertyNo",a==null?void 0:a.propertyNo),n.append("applicantName",a==null?void 0:a.applicantName),n.append("mobileNo",a==null?void 0:a.mobileNo),n.append("address",a==null?void 0:a.address),n.append("connectionType",a==null?void 0:a.connectionType),n.append("connectionTypeName",(a==null?void 0:a.connectionType)==1?"Metered":"Fixed"),n.append("ConsumerNo",a==null?void 0:a.ConsumerNo),n.append("category",a==null?void 0:a.category),n.append("meterNo",a==null?void 0:a.meterNo),n.append("meterReading",a==null?void 0:a.meterReading),n.append("latitude",a==null?void 0:a.latitude),n.append("longitude",a==null?void 0:a.longitude),n.append("document",a==null?void 0:a.document),n.append("remarks",a==null?void 0:a.remarks),n.append("citizenComment",a==null?void 0:a.citizenComment),n.append("demandAmount",a==null?void 0:a.demandAmount),Fa.fire({title:"Are you sure?",text:"\n          You are going to submit the application for the visit. Please make sure all the details are correct.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async s=>{var N,x,ja,ya,wa;if(s.isConfirmed)try{const o=await _a.mutateAsync({api:V.addWaterTcVisit,data:n});(N=o==null?void 0:o.data)!=null&&N.status?(h.success((x=o==null?void 0:o.data)==null?void 0:x.message),l("/amc-app/water/list-tc-visit",{replace:!0}),y(),p.remove(),d.remove()):h.error((ja=o==null?void 0:o.data)==null?void 0:ja.message)}catch(o){h.error((wa=(ya=o==null?void 0:o.response)==null?void 0:ya.data)==null?void 0:wa.message)}}).catch(s=>{var N,x;console.log(s),h.error((x=(N=s==null?void 0:s.response)==null?void 0:N.data)==null?void 0:x.message)})}});Ia.useEffect(()=>{c||(e==null||e.setFieldValue("consumerId",0),e==null||e.setFieldValue("zoneName",""),e==null||e.setFieldValue("zoneId",""),e==null||e.setFieldValue("wardName",""),e==null||e.setFieldValue("wardId",""),e==null||e.setFieldValue("holdingNo",""),e==null||e.setFieldValue("propertyNo",""),e==null||e.setFieldValue("connectionType",""),e==null||e.setFieldValue("ConsumerNo",""),e==null||e.setFieldValue("applicantName",""),e==null||e.setFieldValue("category",""),e==null||e.setFieldValue("meterNo",""),e==null||e.setFieldValue("mobileNo",""),e==null||e.setFieldValue("meterReading",""),e==null||e.setFieldValue("address",""),e==null||e.setFieldValue("demandAmount",""))},[!c]);const{values:r}=e,{data:j,isPending:Ya,isError:$a,error:Ha,isLoading:Ja}=I({api:Pa.getWardByZone,config:{zoneId:r==null?void 0:r.zoneId},value:[r==null?void 0:r.zoneId],options:{enabled:!!(r!=null&&r.zoneId)}}),Aa=async a=>{var s,N,x;if(!((s=a.target)!=null&&s.files[0]))return;await((N=window==null?void 0:window.ReactNativeWebView)==null?void 0:N.postMessage(JSON.stringify({Key:"OPEN_CAMERA"})));const y=await Ma(a.target.files[0]),n=new File([y],(x=a.target.files[0])==null?void 0:x.name,{type:"image/*"});e.setFieldValue("latitude",b==null?void 0:b.latitude),e.setFieldValue("longitude",b==null?void 0:b.longitude),e.setFieldValue("document",n),Ta(n)};return i.jsx(F.Card,{children:i.jsx(F.CardBody,{color:"blue",children:i.jsxs(Za,{formik:e,children:[i.jsx("div",{className:"p-2",children:i.jsxs("div",{className:"row",children:[i.jsxs("div",{className:"col-md-6",children:[i.jsxs(w,{name:"zoneId",label:"Zone Name",formik:e,disabled:c,children:[i.jsx("option",{value:"",children:"Select Zone"}),Oa.map(a=>i.jsx("option",{value:a.value,children:a.label},a.id))]}),i.jsxs(w,{name:"wardId",label:"Ward Name",formik:e,disabled:c,children:[i.jsx("option",{value:"",children:"Select Ward"}),(aa=j==null?void 0:j.data)==null?void 0:aa.map(a=>i.jsx("option",{value:a.id,children:a.ward_name},a.id))]}),i.jsx(t,{name:"holdingNo",label:"Holding No",formik:e,disabled:c&&((ea=(da=d==null?void 0:d.data)==null?void 0:da.data)==null?void 0:ea.holding_no)}),i.jsx(t,{name:"propertyNo",label:"Property No",formik:e,disabled:c&&((na=(ia=d==null?void 0:d.data)==null?void 0:ia.data)==null?void 0:na.folio_no)}),i.jsx(t,{name:"applicantName",label:"Name",formik:e,disabled:c&&((oa=(ca=d==null?void 0:d.data)==null?void 0:ca.data)==null?void 0:oa.applicant_name)}),i.jsx(t,{name:"mobileNo",label:"Mobile No",formik:e}),i.jsx(t,{name:"address",label:"Address",formik:e,disabled:c&&((pa=(ta=d==null?void 0:d.data)==null?void 0:ta.data)==null?void 0:pa.address),inputValidation:["mobile"]})]}),i.jsx("div",{className:"col-md-6",children:i.jsxs(w,{name:"connectionType",label:"Connection Type",formik:e,disabled:c,children:[i.jsx("option",{value:"",children:"Connection Type"}),Ga.map(a=>i.jsx("option",{value:a.id,children:a.label},a.id))]})}),i.jsxs("div",{className:"col-md-6",children:[i.jsx(t,{name:"ConsumerNo",label:"Consumer No",formik:e,disabled:c&&((sa=(ra=d==null?void 0:d.data)==null?void 0:ra.data)==null?void 0:sa.consumer_no)}),i.jsx(t,{name:"category",label:"Category",formik:e,disabled:c&&((Na=(ba=d==null?void 0:d.data)==null?void 0:ba.data)==null?void 0:Na.category)}),i.jsx(t,{name:"meterNo",label:"Meter No",formik:e,disabled:c&&((ma=(xa=d==null?void 0:d.data)==null?void 0:xa.data)==null?void 0:ma.meter_no)}),i.jsx(t,{name:"meterReading",label:"Meter Reading",formik:e,disabled:c&&((la=(ha=d==null?void 0:d.data)==null?void 0:ha.data)==null?void 0:la.meter_reading)}),i.jsx(t,{name:"demandAmount",label:"Demand Amount",formik:e,disabled:c}),i.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[i.jsxs("div",{className:"col-span-2",children:[i.jsx(t,{label:"Document",type:"file",name:"document",accept:"image/*",onChange:a=>{if(!z||!za){a.target.value=null,Fa.fire({title:"Location Service",text:"Please enable location service",icon:"warning",confirmButtonText:"Ok",reverseButtons:!0});return}Aa(a)}}),e.errors.document&&e.touched.document?i.jsx("small",{className:"text-red-500 -mt-2",children:e.errors.document}):null]}),i.jsx("div",{children:i.jsx(t,{name:"latitude",label:"Latitude",formik:e,disabled:!0})}),i.jsx("div",{children:i.jsx(t,{name:"longitude",label:"Longitude",formik:e,disabled:!0})})]}),i.jsx(Va,{name:"remarks",label:"Remarks",formik:e}),i.jsx(Va,{name:"citizenComment",label:"Citizen Comment",formik:e})]})]})}),i.jsx("div",{className:"flex justify-center",children:i.jsx(F.Button,{size:"sm",type:"submit",className:"btn btn-primary",children:"Submit"})})]})})})}function rd(){const d=Wa(),p=new URLSearchParams(window.location.search),c=p.get("id"),l=I({api:V.waterGetDetails,key:"waterVisitDetail",config:{applicationId:p.get("id")},options:{enabled:!!p.get("id")}}),b=I({api:V.waterListDemand,key:"waterVisitListDemand",config:{ConsumerId:p.get("id")},options:{enabled:!!p.get("id")}});return Ia.useEffect(()=>{c||(d==null||d.removeQueries({queryKey:"waterVisitDetail",exact:!0}),d==null||d.removeQueries({queryKey:"waterVisitListDemand",exact:!0}))},[!c]),i.jsx(Ra,{title:"Water Visiting",children:i.jsx("div",{className:"p-2",children:i.jsx(Qa,{getConsumerDtl:l,getDemandDtl:b,id:p.get("id")})})})}export{rd as default};
