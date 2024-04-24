import{r as p,Y as Ne,g as fe,h as be,c as xe,a as m,b as ye,f as n,j as t,B as Te,F as Se,M as Ee,d as E,e as h,ak as O,A as ve}from"./index-d822e393.js";const Ae={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"",border:"none"}},Ie=()=>t("div",{children:"Loading..."}),Ce=()=>{const[F,R]=p.useState(!1),[H,g]=p.useState(!1),[v,$]=p.useState(),[_e,B]=p.useState(),[P,z]=p.useState(),[A,k]=p.useState(),[u,W]=p.useState([]),{notify:T}=p.useContext(Ne),[Oe,S]=p.useState(""),[G,N]=p.useState(!0),[I,Y]=p.useState();fe("Apply Hoarding ");const U={userId:"",agencyId:"",id:"",hoardingName:"",allotmentDate:"",from:"",to:"",advertiser:"",squarefeet:"",Noofhoardings:"",Noofballons:"",Noofvehicle:"",purpose:"",location:"",hoardingNo:"",rate:"",hoardingType:"",propertyType:"",temporaryHoardingType:"",documentQuotation:"",documentAgreement:"",documentInvoice:""};console.log("dataaa--",A==null?void 0:A.rate);const[Q,j]=p.useState(""),[K,V]=p.useState(null),[w,J]=p.useState(!1),X=new Date().toISOString().split("T")[0];be();let i="form-label inline-block mb-1 text-gray-600 text-md font-semibold capitalize",c=" block w-full bg-white text-gray-700 border border-gray-200 rounded py-1.5 px-4 mb-2 leading-tight focus:outline-none focus:border-gray-500 focus:bg-white ring-0 shadow-md shadow-gray-100";const{api_applyhoarding:Z,api_calculatehoardingrate:ee,get_collectorList:Re,api_newWardByZoneId:Ve,api_masteraddress:ae,api_hoardingsize:te,api_temporaryhoarding:oe,api_temphoardingsize:C}=ve(),ne=xe().shape({hoardingType:m().required("Hoarding Type is required"),from:m().required("From is required"),to:m().required("To is required"),advertiser:m().required("Advertiser is required"),purpose:m().required("purpose is required"),squarefeet:m().when("hoardingType",{is:e=>["COMPASS_CANTILEVER","GLOSSINE_BOARD","ADVERTISEMENT_ON_THE_WALL","ADVERTISEMENT_ON_THE_CITY_BUS","CITY_BUS_STOP"].includes(e),then:m().required("Squarefeet is required")}),Noofballons:m().when("hoardingType",{is:"ADVERTISEMENT_ON_BALLONS",then:m().required("Noofballons is required")}),rate:m().required("Rate is required"),id:m().required("Allotted Hoarding Address is required"),documentInvoice:m().required("Design required")}),le=e=>{J(e.target.checked)},de=e=>{g(!0),se(e),console.log(e)};function se(e){var l;console.log(e);let o=new FormData;o.append("userId",e==null?void 0:e.userId),o.append("hoardingId",e==null?void 0:e.id),o.append("agencyId",((l=u==null?void 0:u[0])==null?void 0:l.agencyId)||(e==null?void 0:e.agencyId)),o.append("ulbId","2"),o.append("hoardingName",e.hoardingName),o.append("from",e.from),o.append("to",e.to),o.append("advertiser",e.advertiser),o.append("squarefeet",e.squarefeet),o.append("Noofhoardings",e.Noofhoardings),o.append("Noofballons",e.Noofballons),o.append("Noofvehicle",e.Noofvehicle),o.append("purpose",e.purpose),o.append("location",e.location),o.append("hoardingNo",e.hoardingNo),o.append("rate",e.rate),o.append("hoardingType",e.hoardingType),o.append("applicationType","TEMPORARY"),o.append("squareFeetId",e.hoardingSize||""),o.append("vehicleType",e.temporaryHoardingType||""),a.values.documentQuotation&&(o.append("documents[0][image]",a.values.documentQuotation),o.append("documents[0][docCode]","QUATATAION"),o.append("documents[0][ownerDtlId]","")),a.values.documentAgreement&&(o.append("documents[1][image]",e.documentAgreement),o.append("documents[1][docCode]","AGGREMENT"),o.append("documents[1][ownerDtlId]","")),o.append("documents[2][image]",e.documentInvoice),o.append("documents[2][docCode]","HOARDINGDESIGN"),o.append("documents[2][ownerDtlId]",""),E.post(Z,o,h()).then(d=>{var r,s;d.data.status===!0?($(d==null?void 0:d.data),console.log("chandandata",d==null?void 0:d.data),g(!1),console.log("Data Really Saved",d),R(!0)):(g(!1),console.log("False While hoarding Apply",d),S(" "+((r=d==null?void 0:d.data)==null?void 0:r.message)),T((s=d==null?void 0:d.data)==null?void 0:s.message,"error"))}).catch(d=>{g(!1),S("Exception While Apply"),T("Something Went Wrong","error"),console.log("Exception while Submitting the form",d)})}const _=()=>{E.post(C,{},h()).then(e=>{var o,l;((o=e==null?void 0:e.data)==null?void 0:o.status)==!0&&B((l=e==null?void 0:e.data)==null?void 0:l.data)})},re=()=>{O.post(oe,{},h()).then(e=>{var o,l;((o=e==null?void 0:e.data)==null?void 0:o.status)==!0&&z((l=e==null?void 0:e.data)==null?void 0:l.data)})},ie=()=>{N(!0),E.post(ae,{},h()).then(e=>{var o,l,d;((o=e==null?void 0:e.data)==null?void 0:o.status)===!0&&W((d=(l=e==null?void 0:e.data)==null?void 0:l.data)==null?void 0:d.data)}).catch(e=>{}).finally(()=>{N(!1)})};p.useEffect(()=>{_(),ie(),re()},[]);const ce=e=>{N(!0),a.setFieldValue("wardId","");let o={advertisementType:e,applicationType:"TEMPORARY"};console.log("before fetch wardby old ward...",o),O.post(C,o,h()).then(function(l){var d;console.log("wardlist by zone id list ....",l.data.data),Y((d=l==null?void 0:l.data)==null?void 0:d.data),N(!1),a.setFieldValue("wardId","")}).catch(function(l){console.log("errorrr.... ",l),N(!1)})},pe=e=>{let o=e.target.name,l=e.target.value;o==="userId"&&(a.setFieldValue("userId",l),_()),o==="id"&&(a.setFieldValue("id",l),_()),o==="hoardingType"&&ce(l)},a=ye({initialValues:U,validationSchema:ne,onSubmit:de}),me=()=>{},ue=()=>{R(!1)},he=e=>{const o=e.target.value,l=u==null?void 0:u.find(r=>(r==null?void 0:r.id)==o);console.log(l),a.setFieldValue("id",l==null?void 0:l.id),a==null||a.setFieldValue("agencyId",l==null?void 0:l.agencyId);const d=event.target.value;j(d),E.post(te,{id:d},h()).then(r=>{var s,f,b,x,y;((s=r==null?void 0:r.data)==null?void 0:s.status)===!0&&(V((b=(f=r==null?void 0:r.data)==null?void 0:f.data)==null?void 0:b.aresSqft),console.log("chandankumar",(y=(x=r==null?void 0:r.data)==null?void 0:x.data)==null?void 0:y.aresSqft))}).catch(r=>{}).finally(()=>{N(!1)})},ge=e=>{var r;const{name:o,value:l}=e.target;a.setFieldValue(o,l);const d={advertisementType:a.values.hoardingType,applicationType:"TEMPORARY",agencyId:((r=u==null?void 0:u[0])==null?void 0:r.agencyId)||(values==null?void 0:values.agencyId),squareFeetId:a.values.hoardingSize,squarefeet:a.values.squarefeet,Noofhoardings:a.values.Noofhoardings,Noofballons:a.values.Noofballons,Noofvehicle:a.values.Noofvehicle,vehicleType:a.values.temporaryHoardingType,from:a.values.from,to:l};O.post(ee,d,h()).then(s=>{var f,b,x,y,L,q,D,M;((f=s==null?void 0:s.data)==null?void 0:f.status)===!0?(k((b=s==null?void 0:s.data)==null?void 0:b.data),a.setFieldValue("rate",(y=(x=s==null?void 0:s.data)==null?void 0:x.data)==null?void 0:y.rate),console.log("chandankumar",(q=(L=s==null?void 0:s.data)==null?void 0:L.data)==null?void 0:q.rate)):(g(!1),console.log("False While hoarding Apply",s),S(" "+((D=s==null?void 0:s.data)==null?void 0:D.message)),T((M=s==null?void 0:s.data)==null?void 0:M.message,"error"))}).catch(s=>{g(!1),S("Exception While Apply"),T("Something Went Wrong","error"),console.log("Exception while Submitting the form",s)}),console.log("Calling API with payload:",d)};return n("div",{children:[H&&t(Te,{}),n("div",{className:"container mt-10",children:[n("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 pb-4",children:[n("div",{className:"col-span-6",children:[t("h1",{className:"text-3xl text-[#454646] opacity-90 font-bold ",children:"Request Permission"}),t("h1",{className:"text-md text-[#454646] opacity-80 capitalize",children:"Submit Request Application Here..."})]}),t("div",{className:"col-span-6 ",children:t("div",{className:"flex justify-end space-x-4",children:t("div",{className:"",children:t("img",{src:"https://i.ibb.co/JyBv2gt/hoarding-ads-featured-removebg-preview.png",className:"h-16 opacity-80"})})})})]}),n("form",{onSubmit:a.handleSubmit,onChange:pe,children:[n("div",{className:"grid grid-cols-12 w-full bg-white rounded leading-5 p-8 shadow-lg border border-dashed border-violet-700",children:[n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["Types of Advertisement ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),n("select",{...a.getFieldProps("hoardingType"),className:`${c}`,children:[t("option",{value:"",children:"Select Hoarding Type"}),t("option",{value:"TEMPORARY_ADVERTISEMENT",children:"Temporary advertisement Board"}),t("option",{value:"LAMP_POST",children:"Aplaque on lamp post"}),t("option",{value:"ABOVE_KIOX_ADVERTISEMENT",children:"Above Kiox Advertising"}),t("option",{value:"COMPASS_CANTILEVER",children:"Campass Cantilever"}),t("option",{value:"AD_POL",children:"Ad Pol"}),t("option",{value:"GLOSSINE_BOARD",children:"Company Advertisement board and glosine board at shop"}),t("option",{value:"ROAD_SHOW_ADVERTISING",children:"RoadShow Advertising"}),t("option",{value:"ADVERTISEMENT_ON_BALLONS",children:"Advertising on Ballons"}),t("option",{value:"ADVERTISEMENT_ON_THE_CITY_BUS",children:"Advertisement On City Bus"}),t("option",{value:"CITY_BUS_STOP",children:"City Bus Stop"}),t("option",{value:"ADVERTISEMENT_ON_MOVING_VEHICLE",children:"Advertisement On a moving Vehicle"}),t("option",{value:"ADVERTISEMENT_ON_THE_WALL",children:"Advertising on the wall"})]}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.hoardingType&&a.errors.hoardingType?a.errors.hoardingType:null})]}),a.values.hoardingType&&!["COMPASS_CANTILEVER","GLOSSINE_BOARD","ADVERTISEMENT_ON_THE_WALL","ADVERTISEMENT_ON_MOVING_VEHICLE","ADVERTISEMENT_ON_THE_CITY_BUS","CITY_BUS_STOP","ADVERTISEMENT_ON_BALLONS","ROAD_SHOW_ADVERTISING"].includes(a.values.hoardingType)&&n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["Measurement",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),n("select",{...a.getFieldProps("hoardingSize"),className:`${c}`,children:[t("option",{value:"",children:"Select"}),I==null?void 0:I.map(e=>t("option",{value:e==null?void 0:e.sizeId,children:t("span",{className:"capitalize",children:e==null?void 0:e.size})},e==null?void 0:e.sizeId))]}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.hoardingSize&&a.errors.hoardingSize?a.errors.hoardingSize:null})]}),a.values.hoardingType==="ADVERTISEMENT_ON_MOVING_VEHICLE"&&n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["Vehicle Type ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),n("select",{...a.getFieldProps("temporaryHoardingType"),className:`${c}`,onChange:e=>{const o=e.target.value;a.setFieldValue("temporaryHoardingType",o)},children:[t("option",{value:"",children:"Select"}),P.map(e=>t("option",{value:e==null?void 0:e.temId,children:t("span",{className:"capitalize",children:e==null?void 0:e.type})},e==null?void 0:e.temId))]}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.temporaryHoardingType&&a.errors.temporaryHoardingType?a.errors.temporaryHoardingType:null})]}),a.values.hoardingType!=="ADVERTISEMENT_ON_BALLONS"&&n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["Enter No of Hoardings ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...a.getFieldProps("Noofhoardings"),type:"number",className:`${c}`}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.Noofhoardings&&a.errors.Noofhoardings?a.errors.Noofhoardings:null})]}),a.values.hoardingType&&["COMPASS_CANTILEVER","GLOSSINE_BOARD","ADVERTISEMENT_ON_THE_WALL","ADVERTISEMENT_ON_THE_CITY_BUS","CITY_BUS_STOP"].includes(a.values.hoardingType)&&n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["Enter Area of Square feet ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...a.getFieldProps("squarefeet"),type:"text",className:`${c}`}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.squarefeet&&a.errors.squarefeet?a.errors.squarefeet:null})]}),a.values.hoardingType==="ADVERTISEMENT_ON_MOVING_VEHICLE"&&n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["Enter no of vehicle ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...a.getFieldProps("Noofvehicle"),type:"text",className:`${c}`}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.Noofvehicle&&a.errors.Noofvehicle?a.errors.Noofvehicle:null})]}),a.values.hoardingType==="ADVERTISEMENT_ON_BALLONS"&&n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["Enter no of ballons ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...a.getFieldProps("Noofballons"),type:"text",className:`${c}`}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.Noofballons&&a.errors.Noofballons?a.errors.Noofballons:null})]}),n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["Allotted Hoarding Address",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),G?t(Ie,{}):n(Se,{children:[n("select",{onChange:he,name:"id",className:`${c}`,children:[t("option",{value:"",children:"Select"}),u.map(e=>t("option",{value:e==null?void 0:e.id,children:t("span",{className:"capitalize",children:e==null?void 0:e.address})},e==null?void 0:e.id))]}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.id&&a.errors.id?a.errors.id:null})]})]}),Q&&a.values.hoardingType=="8"&&n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("div",{children:[n("label",{className:`${i}`,children:["Hoarding Size in (sqft)",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{type:"text",name:"hoardingSize",value:K,onChange:e=>V(e.target.value),className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-1.5 px-4 mb-2 leading-tight focus:outline-none focus:border-gray-500 focus:bg-white ring-0 shadow-md shadow-gray-100 cursor-not-allowed",readOnly:!0})]}),t("span",{className:"text-red-600 absolute text-xs ",children:a.touched.hoardingSize&&a.errors.hoardingSize?a.errors.hoardingSize:null})]}),n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["From",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...a.getFieldProps("from"),type:"date",className:`${c}`,min:X}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.from&&a.errors.from?a.errors.from:null})]}),n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["To",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...a.getFieldProps("to"),type:"date",className:`${c}`,onChange:ge}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.to&&a.errors.to?a.errors.to:null})]}),n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["Rate",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...a.getFieldProps("rate"),type:"text",disabled:!0,className:`${c}`,onInput:e=>{e.target.value=Math.max(0,e.target.value).toString().slice(0,10)}}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.rate&&a.errors.rate?a.errors.rate:null})]}),n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["Advertiser ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...a.getFieldProps("advertiser"),type:"text",className:`${c}`}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.advertiser&&a.errors.advertiser?a.errors.advertiser:null})]}),n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["Purpose of Hoarding  ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...a.getFieldProps("purpose"),type:"text",className:`${c}`}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.purpose&&a.errors.purpose?a.errors.purpose:null})]}),n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["Location ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline "})]}),t("input",{...a.getFieldProps("location"),type:"text",className:`${c}`}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.location&&a.errors.location?a.errors.location:null})]}),n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["Upload Quotation Document ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline "})]}),t("input",{type:"file",onChange:e=>a.setFieldValue("documentQuotation",e.currentTarget.files[0]),onBlur:a.handleBlur,className:`${c}`}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.documentQuotation&&a.errors.documentQuotation?a.errors.documentQuotation:null})]}),n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["Upload Agreement Document",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline "})]}),t("input",{type:"file",onChange:e=>a.setFieldValue("documentAgreement",e.currentTarget.files[0]),onBlur:a.handleBlur,className:`${c}`}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.documentAgreement&&a.errors.documentAgreement?a.errors.documentAgreement:null})]}),n("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[n("label",{className:`${i}`,children:["Upload Hoarding Design",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{type:"file",onChange:e=>a.setFieldValue("documentInvoice",e.currentTarget.files[0]),onBlur:a.handleBlur,className:`${c}`}),t("span",{className:"text-red-600 absolute text-xs",children:a.touched.documentInvoice&&a.errors.documentInvoice?a.errors.documentInvoice:null})]})]}),n("div",{className:"w-full m-2",children:[n("label",{htmlFor:"declaration",className:"inline-flex items-center mb-2",children:[t("input",{type:"checkbox",id:"declaration",className:"form-checkbox h-5 w-5 text-blue-600",checked:w,onChange:le}),t("span",{className:"ml-2 text-sm text-gray-700",children:"I hereby confirm my agreement to comply with all rules and regulations regarding the hoarding request permission."})]}),t("div",{className:"text-right",children:t("button",{type:"submit",className:"capitalize hover:shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 focus:outline-none max-w-[144px] whitespace-pre-wrap",disabled:!w,children:"Submit"})})]})]})]}),t(Ee,{isOpen:F,onAfterOpen:me,onRequestClose:ue,style:Ae,contentLabel:"Example Modal",children:t("div",{className:"bg-white shadow-2xl border border-blue-200 rounded-md ",children:t("div",{className:"block p-4 md:py-6 shadow-lg bg-indigo-100 border border-indigo-300 rounded  mx-auto ",children:n("div",{className:"text-center space-y-4",children:[t("p",{className:"font-semibold",children:"Your Application Has been Submitted Successfully."}),n("p",{children:[t("span",{className:"text-sm",children:" Application No: "}),t("span",{className:"text-indigo-600 font-semibold",children:(v==null?void 0:v.data)||"N/A"})]}),t("button",{onClick:()=>{window.location.reload()},className:"bg-white hover:bg-indigo-600 hover:text-white text-indigo-700  border border-indigo-600 mx-2 rounded-sm text-sm px-4 py-2 shadow-xl",children:"Okay"})]})})})})]})};export{Ce as default};