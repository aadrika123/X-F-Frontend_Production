import{r as m,Y as fe,g as ye,h as Te,c as M,a as u,aw as Se,b as ve,f as o,j as t,B as Ee,ax as Ae,ay as Ie,F as D,az as _e,R as Oe,aA as H,aB as Fe,M as Re,d as v,e as g,ak as O,A as we}from"./index-df188ed3.js";import{a as Ce}from"./index.esm-85c60bc5.js";const Ve={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"",border:"none"}},qe=()=>t("div",{children:"Loading..."}),Be=()=>{const[P,F]=m.useState(!1),[B,N]=m.useState(!1),[E,z]=m.useState(),[Le,k]=m.useState(),[W,G]=m.useState(),[A,Y]=m.useState(),[h,U]=m.useState([]),{notify:T}=m.useContext(fe),[$e,S]=m.useState(""),[Q,b]=m.useState(!0),[I,K]=m.useState();ye("Apply Hoarding ");const J={userId:"",agencyId:"",id:"",hoardingName:"",allotmentDate:"",from:"",to:"",advertiser:"",squarefeet:"",Noofhoardings:"",Noofballons:"",Noofvehicle:"",purpose:"",location:"",hoardingNo:"",rate:"",hoardingType:"",propertyType:"",temporaryHoardingType:"",documentQuotation:"",documentAgreement:"",documentInvoice:"",mobileNo:"",addressField:[{address:""}]};console.log("dataaa--",A==null?void 0:A.rate);const[X,Z]=m.useState(""),[j,R]=m.useState(null),[w,ee]=m.useState(!1),ae=new Date().toISOString().split("T")[0];Te();let r="form-label inline-block mb-1 text-gray-600 text-md font-semibold capitalize",i=" block w-full bg-white text-gray-700 border border-gray-200 rounded py-1.5 px-4 mb-2 leading-tight focus:outline-none focus:border-gray-500 focus:bg-white ring-0 shadow-md shadow-gray-100";const{api_applyhoarding:te,api_calculatehoardingrate:oe,get_collectorList:Me,api_newWardByZoneId:De,api_masteraddress:le,api_hoardingsize:ne,api_temporaryhoarding:de,api_temphoardingsize:C}=we(),se=M().shape({hoardingType:u().required("Hoarding Type is required"),from:u().required("From is required"),to:u().required("To is required"),advertiser:u().required("Advertiser is required"),purpose:u().required("purpose is required"),mobileNo:u().required("Mobile no is required"),squarefeet:u().when("hoardingType",{is:a=>["COMPASS_CANTILEVER","GLOSSINE_BOARD","ADVERTISEMENT_ON_THE_WALL","ADVERTISEMENT_ON_THE_CITY_BUS","CITY_BUS_STOP"].includes(a),then:u().required("Squarefeet is required")}),Noofballons:u().when("hoardingType",{is:"ADVERTISEMENT_ON_BALLONS",then:u().required("Noofballons is required")}),rate:u().required("Rate is required"),id:u().required("Allotted Hoarding Address is required"),documentInvoice:u().required("Design required"),addressField:Se().of(M().shape({address:u().required("Address is required")}))}),re=a=>{ee(a.target.checked)},ie=a=>{N(!0),ce(a),console.log(a)};function ce(a){var d,c;console.log(a);let l=new FormData;l.append("userId",a==null?void 0:a.userId),l.append("hoardingId",a==null?void 0:a.id),l.append("agencyId",((d=h==null?void 0:h[0])==null?void 0:d.agencyId)||(a==null?void 0:a.agencyId)),l.append("ulbId","2"),l.append("hoardingName",a.hoardingName),l.append("from",a.from),l.append("to",a.to),l.append("advertiser",a.advertiser),l.append("squarefeet",a.squarefeet),l.append("Noofhoardings",a.Noofhoardings),l.append("Noofballons",a.Noofballons),l.append("Noofvehicle",a.Noofvehicle),l.append("purpose",a.purpose),l.append("location",a.location),l.append("hoardingNo",a.hoardingNo),l.append("rate",a.rate),l.append("mobileNo",a.mobileNo),l.append("hoardingType",a.hoardingType),l.append("applicationType","TEMPORARY"),l.append("squareFeetId",a.hoardingSize||""),l.append("vehicleType",a.temporaryHoardingType||""),e.values.documentQuotation&&(l.append("documents[0][image]",e.values.documentQuotation),l.append("documents[0][docCode]","QUATATAION"),l.append("documents[0][ownerDtlId]","")),e.values.documentAgreement&&(l.append("documents[1][image]",a.documentAgreement),l.append("documents[1][docCode]","AGGREMENT"),l.append("documents[1][ownerDtlId]","")),l.append("documents[2][image]",a.documentInvoice),l.append("documents[2][docCode]","HOARDINGDESIGN"),l.append("documents[2][ownerDtlId]",""),(c=a==null?void 0:a.addressField)==null||c.forEach((n,s)=>{l.append(`addressField[${s}][address]`,n==null?void 0:n.address)}),v.post(te,l,g()).then(n=>{var s,p;n.data.status===!0?(z(n==null?void 0:n.data),console.log("chandandata",n==null?void 0:n.data),N(!1),console.log("Data Really Saved",n),F(!0)):(N(!1),console.log("False While hoarding Apply",n),S(" "+((s=n==null?void 0:n.data)==null?void 0:s.message)),T((p=n==null?void 0:n.data)==null?void 0:p.message,"error"))}).catch(n=>{N(!1),S("Exception While Apply"),T("Something Went Wrong","error"),console.log("Exception while Submitting the form",n)})}const _=()=>{v.post(C,{},g()).then(a=>{var l,d;((l=a==null?void 0:a.data)==null?void 0:l.status)==!0&&k((d=a==null?void 0:a.data)==null?void 0:d.data)})},me=()=>{O.post(de,{},g()).then(a=>{var l,d;((l=a==null?void 0:a.data)==null?void 0:l.status)==!0&&G((d=a==null?void 0:a.data)==null?void 0:d.data)})},pe=()=>{b(!0),v.post(le,{},g()).then(a=>{var l,d,c;((l=a==null?void 0:a.data)==null?void 0:l.status)===!0&&U((c=(d=a==null?void 0:a.data)==null?void 0:d.data)==null?void 0:c.data)}).catch(a=>{}).finally(()=>{b(!1)})};m.useEffect(()=>{_(),pe(),me()},[]);const ue=a=>{b(!0),e.setFieldValue("wardId","");let l={advertisementType:a,applicationType:"TEMPORARY"};console.log("before fetch wardby old ward...",l),O.post(C,l,g()).then(function(d){var c;console.log("wardlist by zone id list ....",d.data.data),K((c=d==null?void 0:d.data)==null?void 0:c.data),b(!1),e.setFieldValue("wardId","")}).catch(function(d){console.log("errorrr.... ",d),b(!1)})},he=a=>{let l=a.target.name,d=a.target.value;l==="userId"&&(e.setFieldValue("userId",d),_()),l==="id"&&(e.setFieldValue("id",d),_()),l==="hoardingType"&&ue(d)},e=ve({initialValues:J,validationSchema:se,onSubmit:ie}),ge=()=>{},Ne=()=>{F(!1)},be=a=>{const l=a.target.value,d=h==null?void 0:h.find(n=>(n==null?void 0:n.id)==l);console.log(d),e.setFieldValue("id",d==null?void 0:d.id),e==null||e.setFieldValue("agencyId",d==null?void 0:d.agencyId);const c=event.target.value;Z(c),v.post(ne,{id:c},g()).then(n=>{var s,p,x,f,y;((s=n==null?void 0:n.data)==null?void 0:s.status)===!0&&(R((x=(p=n==null?void 0:n.data)==null?void 0:p.data)==null?void 0:x.aresSqft),console.log("chandankumar",(y=(f=n==null?void 0:n.data)==null?void 0:f.data)==null?void 0:y.aresSqft))}).catch(n=>{}).finally(()=>{b(!1)})},xe=a=>{var n;const{name:l,value:d}=a.target;e.setFieldValue(l,d);const c={advertisementType:e.values.hoardingType,applicationType:"TEMPORARY",agencyId:((n=h==null?void 0:h[0])==null?void 0:n.agencyId)||(values==null?void 0:values.agencyId),squareFeetId:e.values.hoardingSize,squarefeet:e.values.squarefeet,Noofhoardings:e.values.Noofhoardings,Noofballons:e.values.Noofballons,Noofvehicle:e.values.Noofvehicle,vehicleType:e.values.temporaryHoardingType,from:e.values.from,to:d};O.post(oe,c,g()).then(s=>{var p,x,f,y,V,q,L,$;((p=s==null?void 0:s.data)==null?void 0:p.status)===!0?(Y((x=s==null?void 0:s.data)==null?void 0:x.data),e.setFieldValue("rate",(y=(f=s==null?void 0:s.data)==null?void 0:f.data)==null?void 0:y.rate),console.log("chandankumar",(q=(V=s==null?void 0:s.data)==null?void 0:V.data)==null?void 0:q.rate)):(N(!1),console.log("False While hoarding Apply",s),S(" "+((L=s==null?void 0:s.data)==null?void 0:L.message)),T(($=s==null?void 0:s.data)==null?void 0:$.message,"error"))}).catch(s=>{N(!1),S("Exception While Apply"),T("Something Went Wrong","error"),console.log("Exception while Submitting the form",s)}),console.log("Calling API with payload:",c)};return o("div",{children:[B&&t(Ee,{}),o("div",{className:"container mt-10",children:[o("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 pb-4",children:[o("div",{className:"col-span-6",children:[t("h1",{className:"text-3xl text-[#454646] opacity-90 font-bold ",children:"Request Permission"}),t("h1",{className:"text-md text-[#454646] opacity-80 capitalize",children:"Submit Request Application Here..."})]}),t("div",{className:"col-span-6 ",children:t("div",{className:"flex justify-end space-x-4",children:t("div",{className:"",children:t("img",{src:"https://i.ibb.co/JyBv2gt/hoarding-ads-featured-removebg-preview.png",className:"h-16 opacity-80"})})})})]}),t(Ae,{value:e,children:o(Ie,{onSubmit:e.handleSubmit,onChange:he,children:[o("div",{className:"grid grid-cols-12 w-full bg-white rounded leading-5 p-8 shadow-lg border border-dashed border-violet-700",children:[o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Types of Advertisement ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),o("select",{...e.getFieldProps("hoardingType"),className:`${i}`,children:[t("option",{value:"",children:"Select Hoarding Type"}),t("option",{value:"TEMPORARY_ADVERTISEMENT",children:"Temporary advertisement Board"}),t("option",{value:"LAMP_POST",children:"Aplaque on lamp post"}),t("option",{value:"ABOVE_KIOX_ADVERTISEMENT",children:"Above Kiox Advertising"}),t("option",{value:"COMPASS_CANTILEVER",children:"Campass Cantilever"}),t("option",{value:"AD_POL",children:"Ad Pol"}),t("option",{value:"GLOSSINE_BOARD",children:"Company Advertisement board and glosine board at shop"}),t("option",{value:"ROAD_SHOW_ADVERTISING",children:"RoadShow Advertising"}),t("option",{value:"ADVERTISEMENT_ON_BALLONS",children:"Advertising on Ballons"}),t("option",{value:"ADVERTISEMENT_ON_THE_CITY_BUS",children:"Advertisement On City Bus"}),t("option",{value:"CITY_BUS_STOP",children:"City Bus Stop"}),t("option",{value:"ADVERTISEMENT_ON_MOVING_VEHICLE",children:"Advertisement On a moving Vehicle"}),t("option",{value:"ADVERTISEMENT_ON_THE_WALL",children:"Advertising on the wall"})]}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.hoardingType&&e.errors.hoardingType?e.errors.hoardingType:null})]}),e.values.hoardingType&&!["COMPASS_CANTILEVER","GLOSSINE_BOARD","ADVERTISEMENT_ON_THE_WALL","ADVERTISEMENT_ON_MOVING_VEHICLE","ADVERTISEMENT_ON_THE_CITY_BUS","CITY_BUS_STOP","ADVERTISEMENT_ON_BALLONS","ROAD_SHOW_ADVERTISING"].includes(e.values.hoardingType)&&o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Measurement",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),o("select",{...e.getFieldProps("hoardingSize"),className:`${i}`,children:[t("option",{value:"",children:"Select"}),I==null?void 0:I.map(a=>t("option",{value:a==null?void 0:a.sizeId,children:t("span",{className:"capitalize",children:a==null?void 0:a.size})},a==null?void 0:a.sizeId))]}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.hoardingSize&&e.errors.hoardingSize?e.errors.hoardingSize:null})]}),e.values.hoardingType==="ADVERTISEMENT_ON_MOVING_VEHICLE"&&o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Vehicle Type ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),o("select",{...e.getFieldProps("temporaryHoardingType"),className:`${i}`,onChange:a=>{const l=a.target.value;e.setFieldValue("temporaryHoardingType",l)},children:[t("option",{value:"",children:"Select"}),W.map(a=>t("option",{value:a==null?void 0:a.temId,children:t("span",{className:"capitalize",children:a==null?void 0:a.type})},a==null?void 0:a.temId))]}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.temporaryHoardingType&&e.errors.temporaryHoardingType?e.errors.temporaryHoardingType:null})]}),e.values.hoardingType!=="ADVERTISEMENT_ON_BALLONS"&&o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Enter No of Hoardings ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...e.getFieldProps("Noofhoardings"),type:"number",className:`${i}`}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.Noofhoardings&&e.errors.Noofhoardings?e.errors.Noofhoardings:null})]}),e.values.hoardingType&&["COMPASS_CANTILEVER","GLOSSINE_BOARD","ADVERTISEMENT_ON_THE_WALL","ADVERTISEMENT_ON_THE_CITY_BUS","CITY_BUS_STOP"].includes(e.values.hoardingType)&&o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Enter Area of Square feet ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...e.getFieldProps("squarefeet"),type:"text",className:`${i}`}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.squarefeet&&e.errors.squarefeet?e.errors.squarefeet:null})]}),e.values.hoardingType==="ADVERTISEMENT_ON_MOVING_VEHICLE"&&o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Enter no of vehicle ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...e.getFieldProps("Noofvehicle"),type:"text",className:`${i}`}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.Noofvehicle&&e.errors.Noofvehicle?e.errors.Noofvehicle:null})]}),e.values.hoardingType==="ADVERTISEMENT_ON_BALLONS"&&o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Enter no of ballons ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...e.getFieldProps("Noofballons"),type:"text",className:`${i}`}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.Noofballons&&e.errors.Noofballons?e.errors.Noofballons:null})]}),o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Allotted Hoarding Address",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),Q?t(qe,{}):o(D,{children:[o("select",{onChange:be,name:"id",className:`${i}`,children:[t("option",{value:"",children:"Select"}),h.map(a=>t("option",{value:a==null?void 0:a.id,children:t("span",{className:"capitalize",children:a==null?void 0:a.address})},a==null?void 0:a.id))]}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.id&&e.errors.id?e.errors.id:null})]})]}),X&&e.values.hoardingType=="8"&&o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("div",{children:[o("label",{className:`${r}`,children:["Hoarding Size in (sqft)",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{type:"text",name:"hoardingSize",value:j,onChange:a=>R(a.target.value),className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-1.5 px-4 mb-2 leading-tight focus:outline-none focus:border-gray-500 focus:bg-white ring-0 shadow-md shadow-gray-100 cursor-not-allowed",readOnly:!0})]}),t("span",{className:"text-red-600 absolute text-xs ",children:e.touched.hoardingSize&&e.errors.hoardingSize?e.errors.hoardingSize:null})]}),o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["From",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...e.getFieldProps("from"),type:"date",className:`${i}`,min:ae}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.from&&e.errors.from?e.errors.from:null})]}),o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["To",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...e.getFieldProps("to"),type:"date",className:`${i}`,onChange:xe}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.to&&e.errors.to?e.errors.to:null})]}),o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Rate",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...e.getFieldProps("rate"),type:"text",disabled:!0,className:`${i}`,onInput:a=>{a.target.value=Math.max(0,a.target.value).toString().slice(0,10)}}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.rate&&e.errors.rate?e.errors.rate:null})]}),o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Advertiser Name ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...e.getFieldProps("advertiser"),type:"text",className:`${i}`}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.advertiser&&e.errors.advertiser?e.errors.advertiser:null})]}),o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Purpose of Hoarding  ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...e.getFieldProps("purpose"),type:"text",className:`${i}`}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.purpose&&e.errors.purpose?e.errors.purpose:null})]}),o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Location ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...e.getFieldProps("location"),type:"text",className:`${i}`}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.location&&e.errors.location?e.errors.location:null})]}),o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Mobile No ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{...e.getFieldProps("mobileNo"),type:"text",className:`${i}`,pattern:"[0-9]{10}",maxLength:"10",required:!0}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.mobileNo&&e.errors.mobileNo?e.errors.mobileNo:null})]}),t(_e,{name:"addressField",children:a=>{var l,d,c,n;return t(D,{children:((d=(l=e.values)==null?void 0:l.addressField)==null?void 0:d.length)>0&&((n=(c=e==null?void 0:e.values)==null?void 0:c.addressField)==null?void 0:n.map((s,p)=>o(Oe.Fragment,{children:[o("div",{className:"form-group col-span-11 md:col-span-11 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:[" Full Site Address ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("textarea",{...e.getFieldProps(`addressField.${p}.address`),type:"text",className:`${i}`}),t("span",{className:"text-red-600 absolute text-xs",children:H(e.touched,`addressField.${p}.address`)&&H(e.errors,`addressField.${p}.address`)})]}),o("div",{className:"form-group col-span-1 md:col-span- mb-6 md:px-4",children:[t("h1",{className:"block text-xs font-medium text-gray-700",children:"Add & Remove"}),p>0&&t("button",{className:"mt-1",type:"button",onClick:()=>a.remove(p),children:t(Ce,{className:"inline-block w-6 h-6 text-red-600"})}),"|"," ",t("button",{type:"button",className:"mt-1",onClick:()=>a.push({address:""}),children:t(Fe,{className:"inline-block w-5 h-5 text-green-600"})})]})]})))})}}),o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Upload Quotation Document ",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline "})]}),t("input",{type:"file",onChange:a=>e.setFieldValue("documentQuotation",a.currentTarget.files[0]),onBlur:e.handleBlur,className:`${i}`}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.documentQuotation&&e.errors.documentQuotation?e.errors.documentQuotation:null})]}),o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Upload Agreement Document",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline "})]}),t("input",{type:"file",onChange:a=>e.setFieldValue("documentAgreement",a.currentTarget.files[0]),onBlur:e.handleBlur,className:`${i}`}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.documentAgreement&&e.errors.documentAgreement?e.errors.documentAgreement:null})]}),o("div",{className:"form-group col-span-12 md:col-span-4 mb-6 md:px-4",children:[o("label",{className:`${r}`,children:["Upload Hoarding Design",t("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),t("input",{type:"file",onChange:a=>e.setFieldValue("documentInvoice",a.currentTarget.files[0]),onBlur:e.handleBlur,className:`${i}`}),t("span",{className:"text-red-600 absolute text-xs",children:e.touched.documentInvoice&&e.errors.documentInvoice?e.errors.documentInvoice:null})]})]}),o("div",{className:"w-full m-2",children:[o("label",{htmlFor:"declaration",className:"inline-flex items-center mb-2",children:[t("input",{type:"checkbox",id:"declaration",className:"form-checkbox h-5 w-5 text-blue-600",checked:w,onChange:re}),t("span",{className:"ml-2 text-sm text-gray-700",children:"I hereby confirm my agreement to comply with all rules and regulations regarding the hoarding request permission."})]}),t("div",{className:"text-right",children:t("button",{type:"submit",className:"capitalize hover:shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 focus:outline-none max-w-[144px] whitespace-pre-wrap",disabled:!w,children:"Submit"})})]})]})})]}),t(Re,{isOpen:P,onAfterOpen:ge,onRequestClose:Ne,style:Ve,contentLabel:"Example Modal",children:t("div",{className:"bg-white shadow-2xl border border-blue-200 rounded-md ",children:t("div",{className:"block p-4 md:py-6 shadow-lg bg-indigo-100 border border-indigo-300 rounded  mx-auto ",children:o("div",{className:"text-center space-y-4",children:[t("p",{className:"font-semibold",children:"Your Application Has been Submitted Successfully."}),o("p",{children:[t("span",{className:"text-sm",children:" Application No: "}),t("span",{className:"text-indigo-600 font-semibold",children:(E==null?void 0:E.data)||"N/A"})]}),t("button",{onClick:()=>{window.location.reload()},className:"bg-white hover:bg-indigo-600 hover:text-white text-indigo-700  border border-indigo-600 mx-2 rounded-sm text-sm px-4 py-2 shadow-xl",children:"Okay"})]})})})})]})};export{Be as default};
