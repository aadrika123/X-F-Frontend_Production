import{aB as de,aC as ce,aD as me,aF as pe,aG as L,r as l,aI as xe,aJ as ue,j as e,aK as ee,aL as ge,f as Ee,A as Q,b as te,w as se,am as Oe,Q as J,u as Le,e as De,q as We,bb as O,s as w,a8 as $e,a7 as He,aa as be,L as Re,a5 as Ie,be as Me,bh as qe}from"./index-c6aa66f9.js";import{c as Ue}from"./index.esm-7f12362d.js";/* empty css             */import{E as Ge}from"./EmptyDetailsIllustration-9a8e3ebe.js";import{b as Ve}from"./index.esm-800b63e1.js";import{a as fe}from"./useFormControl-6a6b17dc.js";import{f as he}from"./formControlState-a1fb9590.js";import{T as ie}from"./Typography-20347eb8.js";import{S as z}from"./Switch-3aab2a56.js";import"./notfound1-b58e95b5.js";import"./TransitionGroupContext-e60f7439.js";import"./SwitchBase-70de3519.js";function Be(s){return ce("MuiFormControlLabel",s)}const ze=de("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),K=ze,Ye=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],Je=s=>{const{classes:d,disabled:u,labelPlacement:f,error:p}=s,h={root:["root",u&&"disabled",`labelPlacement${pe(f)}`,p&&"error"],label:["label",u&&"disabled"]};return ge(h,Be,d)},Ke=me("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(s,d)=>{const{ownerState:u}=s;return[{[`& .${K.label}`]:d.label},d.root,d[`labelPlacement${pe(u.labelPlacement)}`]]}})(({theme:s,ownerState:d})=>L({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${K.disabled}`]:{cursor:"default"}},d.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},d.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},d.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${K.label}`]:{[`&.${K.disabled}`]:{color:(s.vars||s).palette.text.disabled}}})),Qe=l.forwardRef(function(d,u){var f;const p=xe({props:d,name:"MuiFormControlLabel"}),{className:h,componentsProps:j={},control:g,disabled:T,disableTypography:x,label:F,labelPlacement:y="end",slotProps:_={}}=p,k=ue(p,Ye),N=fe();let m=T;typeof m>"u"&&typeof g.props.disabled<"u"&&(m=g.props.disabled),typeof m>"u"&&N&&(m=N.disabled);const C={disabled:m};["checked","name","onChange","value","inputRef"].forEach(P=>{typeof g.props[P]>"u"&&typeof p[P]<"u"&&(C[P]=p[P])});const D=he({props:p,muiFormControl:N,states:["error"]}),E=L({},p,{disabled:m,labelPlacement:y,error:D.error}),o=Je(E),A=(f=_.typography)!=null?f:j.typography;let v=F;return v!=null&&v.type!==ie&&!x&&(v=e.jsx(ie,L({component:"span"},A,{className:ee(o.label,A==null?void 0:A.className),children:v}))),e.jsxs(Ke,L({className:ee(o.root,h),ownerState:E,ref:u},k,{children:[l.cloneElement(g,C),v]}))}),Y=Qe;function Xe(s){return ce("MuiFormGroup",s)}de("MuiFormGroup",["root","row","error"]);const Ze=["className","row"],et=s=>{const{classes:d,row:u,error:f}=s;return ge({root:["root",u&&"row",f&&"error"]},Xe,d)},tt=me("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(s,d)=>{const{ownerState:u}=s;return[d.root,u.row&&d.row]}})(({ownerState:s})=>L({display:"flex",flexDirection:"column",flexWrap:"wrap"},s.row&&{flexDirection:"row"})),st=l.forwardRef(function(d,u){const f=xe({props:d,name:"MuiFormGroup"}),{className:p,row:h=!1}=f,j=ue(f,Ze),g=fe(),T=he({props:f,muiFormControl:g,states:["error"]}),x=L({},f,{row:h,error:T.error}),F=et(x);return e.jsx(tt,L({className:ee(F.root,p),ownerState:x,ref:u},j))}),ot=st,ye=()=>{const s=Ee;return{getAssessment:`${s}/api/property/saf/get-prop-byholding`,postAssessment:`${s}/api/property/objection/apply-objection`,getWardList:`${s}/api/property/saf/master-saf`}},at=s=>{var C,D,E,o,A,v,P,$,H,R,I,M;const{usageTypeList:d,constructionTypeList:u,occupancyTypeList:f,getWardList:p}=ye(),[h,j]=l.useState(!1),[g,T]=l.useState(),[x,F]=l.useState(),[y,_]=l.useState(),[k,N]=l.useState(0);l.useEffect(()=>{N(k+1)},[]),l.useEffect(()=>{j(!0),Q.get(p,te()).then(n=>{var X,q,Z,U,G,V;T((q=(X=n==null?void 0:n.data)==null?void 0:X.data)==null?void 0:q.usage_type),F((U=(Z=n==null?void 0:n.data)==null?void 0:Z.data)==null?void 0:U.occupancy_type),_((V=(G=n==null?void 0:n.data)==null?void 0:G.data)==null?void 0:V.construction_type),j(!1)}).catch(n=>{j(!1)})},[k]);const m=se({initialValues:{propFloorId:(C=s==null?void 0:s.floor)==null?void 0:C.id,floorNo:(D=s==null?void 0:s.floor)==null?void 0:D.floor_mstr_id,usageType:(E=s==null?void 0:s.floor)==null?void 0:E.usage_type_mstr_id,occupancyType:(o=s==null?void 0:s.floor)==null?void 0:o.occupancy_type_mstr_id,constructionType:(A=s==null?void 0:s.floor)==null?void 0:A.const_type_mstr_id,buildupArea:(v=s==null?void 0:s.floor)==null?void 0:v.builtup_area},enableReinitialize:!0,onSubmit:n=>{s.getfloor(n)}});return e.jsxs(e.Fragment,{children:[h&&e.jsx("div",{className:"w-full z-10 absolute mx-auto text-center flex justify-center items-center top-1/2",children:e.jsx("span",{className:"inline",children:e.jsx(Oe,{visible:!0,height:"120",width:"120",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}),e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200 poppins",children:[e.jsx("td",{className:"px-2 py-2 text-left",children:(P=s==null?void 0:s.floor)==null?void 0:P.floor_name}),e.jsx("td",{className:"px-2 py-2 text-left",children:($=s==null?void 0:s.floor)==null?void 0:$.usage_type}),e.jsx("td",{className:"px-2 py-2 text-left",children:(H=s==null?void 0:s.floor)==null?void 0:H.occupancy_type}),e.jsx("td",{className:"px-2 py-2 text-left",children:(R=s==null?void 0:s.floor)==null?void 0:R.construction_type}),e.jsx("td",{className:"px-2 py-2 text-left",children:(I=s==null?void 0:s.floor)==null?void 0:I.builtup_area})]}),e.jsxs("tr",{className:"bg-white shadow-md  border-b border-gray-200 border-b border-gray-500 poppins",children:[e.jsx("td",{className:"px-2 py-2 text-xs text-left font-semibold text-sm",children:(M=s==null?void 0:s.floor)==null?void 0:M.floor_name}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsxs("select",{...m.getFieldProps("usageType"),value:m.values.usageType,className:"div-control block w-full px-3 py-1.5 text-base md:text-sm font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{selected:!0,disabled:!0,value:"",children:"--select--"}),g==null?void 0:g.map(n=>e.jsx(e.Fragment,{children:e.jsx("option",{value:n==null?void 0:n.id,children:n==null?void 0:n.usage_type})}))]})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsxs("select",{...m.getFieldProps("occupancyType"),value:m.values.occupancyType,className:"div-control block w-full px-3 py-1.5 text-base md:text-sm font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{selected:!0,disabled:!0,value:"",children:"--select--"}),x==null?void 0:x.map(n=>e.jsx(e.Fragment,{children:e.jsx("option",{value:n==null?void 0:n.id,children:n==null?void 0:n.occupancy_type})}))]})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsxs("select",{...m.getFieldProps("constructionType"),value:m.values.constructionType,className:"div-control block w-full px-3 py-1.5 text-base md:text-sm font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{selected:!0,disabled:!0,value:"",children:"--select--"}),y==null?void 0:y.map(n=>e.jsx(e.Fragment,{children:e.jsx("option",{value:n==null?void 0:n.id,children:n==null?void 0:n.construction_type})}))]})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("input",{type:"number",...m.getFieldProps("buildupArea"),value:m.values.buildupArea,className:"div-control block w-full px-3 py-1.5 text-base md:text-sm font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"})}),e.jsx("td",{children:e.jsx("button",{onClick:m.handleSubmit,type:"submit",className:"bg-blue-200 hover:bg-blue-300 rounded-md shadow-md px-3 py-1.5",children:"Post"})})]}),e.jsxs("tr",{children:[" ",e.jsx("td",{colSpan:8,children:" "})]})]})},rt=s=>{var g,T;l.useState();const[d,u]=l.useState([]),[f,p]=l.useState(!0),h=se({initialValues:{floorNo:"",usageType:"",occupancyType:"",constructionType:"",buildupArea:""},onSubmit:x=>{}}),j=x=>{d==null||d.map(y=>{if((y==null?void 0:y.propFloorId)==(x==null?void 0:x.propFloorId))return p(!1)});let F=[...d,x];u([...d,x]),s==null||s.getFloorData(F),J.info("Posted...")};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"col-span-4 overflow-x-auto",onChange:h.handleChange,onSubmit:h.handleSubmit,children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-sky-50",children:e.jsxs("tr",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs capitalize text-left",children:[e.jsxs("th",{className:"py-2 px-2",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Floor No."]}),e.jsxs("th",{className:"py-2 px-2",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Usage Type"]}),e.jsxs("th",{className:"py-2 px-2",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Occupancy Type"]}),e.jsxs("th",{className:"py-2 px-2",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Construction Type"]}),e.jsxs("th",{className:"py-2 px-2",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Built Up Area"," ",e.jsxs("small",{className:"block mt-1 text-xs text-gray-600 inline ",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"(in Sq. Ft)"]})]}),e.jsx("th",{className:"py-2 px-2",children:"Action"})]})}),e.jsxs("tbody",{className:"text-xs",children:[((g=s==null?void 0:s.floor)==null?void 0:g.length)<1&&e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"italic bg-red-200 px-4 py-2 text-center",children:"No Floor List Found !!"})})}),(T=s==null?void 0:s.floor)==null?void 0:T.map(x=>e.jsx(e.Fragment,{children:e.jsx(at,{floor:x,getfloor:j})}))]})]})})})};function lt(s){var le;const{getAssessment:d,postAssessment:u,getWardList:f}=ye(),{id:p}=Le();De();const[h,j]=l.useState(null),[g,T]=l.useState(0),[x,F]=l.useState(""),[y,_]=l.useState(),[k,N]=l.useState(),[m,C]=l.useState(),[D,E]=l.useState(),[o,A]=l.useState(),[v,P]=l.useState(!1),[$,H]=l.useState(!1),[R,I]=l.useState(!1),[M,n]=l.useState(!1),[X,q]=l.useState(!1),[Z,U]=l.useState(!1),[G,V]=l.useState(!1),[oe,je]=l.useState(!0),[we,Ne]=l.useState(),[Te,Se]=l.useState(!1),[ae,W]=l.useState(!1),[Fe,ve]=l.useState(null);We({harvestingToggleStatus:O(),roadWidthToggleStatus:O(),propertyTypeToggleStatus:O(),plotAreaToggleStatus:O(),mobileTowerToggleStatus:O(),hoardingToggleStatus:O(),floorToggleStatus:O(),isWaterHarvesting:w().when("harvestingToggleStatus",{is:!0,then:w().required("Field is required")}),rwhDateFrom:w().when("harvestingToggleStatus",{is:!0,then:w().required("Field is required")}),roadType:w().when("roadWidthToggleStatus",{is:!0,then:w().required("Field is required")}),propertyType:w().when("propertyTypeToggleStatus",{is:!0,then:w().required("Field is required")}),areaOfPlot:w().when("plotAreaToggleStatus",{is:!0,then:w().required("Field is required")}),isMobileTower:w().when("mobileTowerToggleStatus",{is:!0,then:w().required("Field is required")}),isHoarding:w().when("hoardingToggleStatus",{is:!0,then:w().required("Field is required")})});const a=se({initialValues:{harvestingToggleStatus:!1,roadWidthToggleStatus:!1,propertyTypeToggleStatus:!1,plotAreaToggleStatus:!1,mobileTowerToggleStatus:!1,hoardingToggleStatus:!1,floorToggleStatus:!1,propId:p,isWaterHarvesting:o!=null&&o.is_water_harvesting?1:0,rwhDateFrom:o==null?void 0:o.rwh_date_from,roadType:o==null?void 0:o.road_width,propertyType:o==null?void 0:o.prop_type_mstr_id,areaOfPlot:o==null?void 0:o.area_of_plot,isMobileTower:o!=null&&o.is_mobile_tower?1:0,mobileArea:o==null?void 0:o.tower_area,mobileDate:o==null?void 0:o.tower_installation_date,isHoarding:o!=null&&o.is_hoarding_board?1:0,hoardingArea:o==null?void 0:o.hoarding_area,hoardingDate:o==null?void 0:o.hoarding_installation_date,objEvidenceDoc:"",objRemarks:"",floor:[]},onSubmit:t=>{let i=Pe(t);if(h!=null&&!$e(h))return a.setFieldValue("objEvidenceDoc","").then(()=>{S(!0,"Check your file size"),j(null)}),!0;i&&ke(t)}}),Pe=t=>{if(t.harvestingToggleStatus==!1&&t.roadWidthToggleStatus==!1&&t.propertyTypeToggleStatus==!1&&t.plotAreaToggleStatus==!1&&t.mobileTowerToggleStatus==!1&&t.hoardingToggleStatus==!1&&t.floorToggleStatus==!1)return S(!0,"You have not selected any field to change"),!1;if(t.harvestingToggleStatus){if(t.isWaterHarvesting==""||t.isWaterHarvesting==null)return S(!0,"Please change Water Harvesting details"),!1;if(t.rwhDateFrom==""||t.rwhDateFrom==null)return S(!0,"Please change water harvesting construction date"),!1}return t.roadWidthToggleStatus&&(t.roadType==""||t.roadType==null)?(S(!0,"Please change Road Type details"),!1):t.propertyTypeToggleStatus&&(t.propertyType==""||t.propertyType==null)?(S(!0,"Please change Property Type details"),!1):t.plotAreaToggleStatus&&(t.areaOfPlot==""||t.areaOfPlot==null)?(S(!0,"Please change Area of Plot details"),!1):t.mobileTowerToggleStatus&&(t.isMobileTower==""||t.isMobileTower==null)?(S(!0,"Please change Mobile Tower details"),!1):t.hoardingToggleStatus&&(t.isHoarding==""||t.isHoarding==null)?(S(!0,"Please change Hoarding details"),!1):!0},Ae=t=>{if(t.target.name=="objFormDoc"){let i=t.target.files[0];F(t.target.files[0]),a.setFieldValue("objFormDoc",t.target.files[0]),console.log("--1-- objFormDoc file on change..",i)}if(t.target.name=="objEvidenceDoc"){let i=t.target.files[0];j(t.target.files[0]),console.log("--3-- objEvidenceDoc file on change..",i),a.setFieldValue("objEvidenceDoc",t.target.files[0])}};l.useEffect(()=>{W(!0),Q.post(d,{propertyId:p},te()).then(t=>{var i,c,r,b,B,ne;A((i=t==null?void 0:t.data)==null?void 0:i.data),E((r=(c=t==null?void 0:t.data)==null?void 0:c.data)==null?void 0:r.floors),T(g+1),W(!1),je((b=t==null?void 0:t.data)==null?void 0:b.status),Ne((ne=(B=t==null?void 0:t.data)==null?void 0:B.data)==null?void 0:ne.ulb_id)}).catch(t=>{J("Something went wrong !!"),W(!1)})},[]),l.useEffect(()=>{Q.get(f,te()).then(t=>{var i,c,r,b;_((c=(i=t==null?void 0:t.data)==null?void 0:i.data)==null?void 0:c.property_type),N((b=(r=t==null?void 0:t.data)==null?void 0:r.data)==null?void 0:b.road_type)}).catch(t=>{})},[g]);const _e=t=>{C(t)};l.useEffect(()=>{},[m]);const ke=t=>{W(!0);let i=[];v&&(i.push({id:2,value:t==null?void 0:t.isWaterHarvesting}),i.push({id:8,value:t==null?void 0:t.rwhDateFrom})),$&&i.push({id:3,value:t==null?void 0:t.roadType}),R&&i.push({id:4,value:t==null?void 0:t.propertyType}),M&&i.push({id:5,value:t==null?void 0:t.areaOfPlot}),t==null||t.isWaterHarvesting,t==null||t.rwhDateFrom,t==null||t.roadType,t==null||t.propertyType,t==null||t.areaOfPlot,t==null||t.isMobileTower,t==null||t.isHoarding;let c=new FormData;c.append("propId",p),c.append("ulbId",we),c.append("objectionFor","Assessment Error"),a.values.objEvidenceDoc!=""&&c.append("docCode","OBJECTION_EVIDENCE_DOC"),a.values.objEvidenceDoc!=""&&c.append("objEvidenceDoc",h),(i==null?void 0:i.length)>0&&(i==null||i.forEach((r,b)=>{c.append(`assessmentData[${b}][id]`,r==null?void 0:r.id),c.append(`assessmentData[${b}][value]`,r==null?void 0:r.value)})),G&&(m==null||m.forEach((r,b)=>{c.append(`floorData[${b}][floorNo]`,r==null?void 0:r.floorNo),c.append(`floorData[${b}][buildupArea]`,r==null?void 0:r.buildupArea),c.append(`floorData[${b}][constructionType]`,r==null?void 0:r.constructionType),c.append(`floorData[${b}][occupancyType]`,r==null?void 0:r.occupancyType),c.append(`floorData[${b}][propFloorId]`,r==null?void 0:r.propFloorId),c.append(`floorData[${b}][usageType]`,r==null?void 0:r.usageType)})),console.log("before send data => ",c,`
 assessment data => `,i,`
 floor data =>`,m),Q.post(u,c,He()).then(r=>{var b,B;((b=r==null?void 0:r.data)==null?void 0:b.status)==!0?(J.success("Assessment Objection Applied Successfully..."),s.submitForm((B=r==null?void 0:r.data)==null?void 0:B.data)):S(!0,"Error occured in submitting objection application. Please try again later."),W(!1)}).catch(r=>{S(!0,"Error occured in submitting objection application. Please try again later."),W(!1)})},Ce=t=>{let i=t.target.name,c=t.target.checked,r=t.target.value;i==="harvestingToggleStatus"&&P(c===!0),i==="roadWidthToggleStatus"&&H(c===!0),i==="propertyTypeToggleStatus"&&I(c===!0),i==="plotAreaToggleStatus"&&n(c===!0),i==="floorToggleStatus"&&V(c===!0),i==="hoardingToggleStatus"&&U(c===!0),i==="mobileTowerToggleStatus"&&q(c===!0),i=="builtupArea"&&a.setFieldValue("builtupArea",qe(r,a.values.builtupArea,20))},re=()=>{s.closePopUp()},S=(t,i)=>{ve(i),Se(t)};return e.jsxs(e.Fragment,{children:[e.jsx(be,{position:"top-right",autoClose:2e3}),ae&&e.jsx(Re,{}),Te&&e.jsx(Ie,{activateBottomErrorCard:S,errorTitle:Fe}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-500 text-white flex flex-row md:justify-evenly items-center justify-center capitalize text-xs poppins 2xl:text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-extrabold text-[30px]",children:e.jsx(Ve,{})}),e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-lg",children:"Assessment Objection"})]})}),e.jsxs("div",{className:"poppins my-2 2xl:font-base text-sm poppins",children:["Citizens are able to file objections to assessments using this objection form in accordance with Section 167 of the ",(le=Me())==null?void 0:le.state," Municipal Act 2011. The objections that can be filed include the following:"]}),oe&&!ae&&e.jsx("div",{className:" px-4 w-full md:py-6 rounded-lg shadow-lg bg-white mt-6 ",children:e.jsx("form",{onSubmit:a.handleSubmit,onChange:Ce,children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 h-max",children:[e.jsx(ot,{className:"col-span-4 grid grid-cols-4 h-max",children:e.jsxs("div",{className:"col-span-4 grid grid-cols-4 gap-2",children:[e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsxs("label",{className:" text-gray-800 pr-2",children:[" ",e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"RainWater Harvesting"})]}),e.jsx(Y,{control:e.jsx(z,{...a.getFieldProps("harvestingToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${v?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Rainwater Harvesting"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-bold font-serif",children:o!=null&&o.is_water_harvesting?e.jsx(e.Fragment,{children:"Yes"}):e.jsx(e.Fragment,{children:"No"})})]}),(o==null?void 0:o.isWaterHarvesting)&&e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment (Construction Date)"}),e.jsx("div",{className:"font-bold font-serif",children:o==null?void 0:o.rwh_date_from})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsxs("select",{...a.getFieldProps("isWaterHarvesting"),value:a.values.isWaterHarvesting,type:"text",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"0",children:"No"}),e.jsx("option",{value:"1",children:"Yes"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.isWaterHarvesting&&a.errors.isWaterHarvesting?a.errors.isWaterHarvesting:null})]}),a.values.isWaterHarvesting=="1"&&e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Appicant (Construction Date)"]}),e.jsx("input",{...a.getFieldProps("rwhDateFrom"),value:a.values.rwhDateFrom,type:"date",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.rwhDateFrom&&a.errors.rwhDateFrom?a.errors.rwhDateFrom:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsxs("label",{className:" text-gray-800 pr-2",children:[" ",e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Road Width"})]}),e.jsx(Y,{control:e.jsx(z,{...a.getFieldProps("roadWidthToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${$?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Road Width (in ft.)"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-bold font-serif",children:o==null?void 0:o.road_width})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsx("input",{...a.getFieldProps("roadType"),value:a.values.roadType,type:"text",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.roadType&&a.errors.roadType?a.errors.roadType:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsxs("label",{className:" text-gray-800 pr-2",children:[" ",e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Property Type"})]}),e.jsx(Y,{control:e.jsx(z,{...a.getFieldProps("propertyTypeToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${R?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Property Type"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-bold font-serif",children:o==null?void 0:o.property_type})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsxs("select",{...a.getFieldProps("propertyType"),value:a.values.propertyType,type:"text",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{disabled:!0,value:"",children:"--select--"}),y==null?void 0:y.map(t=>e.jsx(e.Fragment,{children:e.jsx("option",{value:t==null?void 0:t.id,children:t==null?void 0:t.property_type})}))]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.propertyType&&a.errors.propertyType?a.errors.propertyType:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsxs("label",{className:" text-gray-800 pr-2",children:[" ",e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Area of Plot"})]}),e.jsx(Y,{control:e.jsx(z,{...a.getFieldProps("plotAreaToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${M?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Area of plot (in sq.ft.)"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-bold font-serif",children:o==null?void 0:o.area_of_plot})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsx("input",{...a.getFieldProps("areaOfPlot"),type:"number",value:a.values.areaOfPlot,className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.areaOfPlot&&a.errors.areaOfPlot?a.errors.areaOfPlot:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsxs("label",{className:" text-gray-800 pr-2",children:[" ",e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Floor Detail"})]}),e.jsx(Y,{control:e.jsx(z,{...a.getFieldProps("floorToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${G?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Floor Details"})}),e.jsx(rt,{floor:D,getFloorData:_e})]})]})}),e.jsxs("div",{className:"col-span-4 grid grid-cols-1 md:grid-cols-4 h-max mt-10 border",children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-green-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Documents"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 md:px-4",onChange:a.handleChange,children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"Evidence Document"}),e.jsx("input",{name:"objEvidenceDoc",onChange:Ae,accept:".pdf,.jpg,.jpeg",type:"file",className:"form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.objEvidenceDoc&&a.errors.objEvidenceDoc?a.errors.objEvidenceDoc:null})]})]}),e.jsxs("div",{className:"col-span-4 flex flex-row flex-wrap justify-between items-center w-full h-max mt-4",children:[e.jsx("div",{onClick:()=>re(),className:"cursor-pointer px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out poppins",children:"Close"}),e.jsx("div",{children:e.jsxs("button",{type:"submit",className:" poppins px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-green-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:[" ","Submit"," "]})})]})]})})}),!oe&&e.jsx(e.Fragment,{children:e.jsx(Ge,{title:"Oops !! No Assessment Details Found !!",location:re})})]})}function yt(s){l.useState(1);const[d,u]=l.useState("translate-x-0"),[f,p]=l.useState(!1),[h,j]=l.useState({}),[g,T]=l.useState(""),x=N=>{J.dismiss(),J.error(N)},F=()=>{p(!0)},y=(N,m)=>{j({...h,[N]:m})};if(g=="success")return e.jsx(e.Fragment,{children:" Done"});const _=()=>{s.closePopUp()},k=N=>{s.submitForm(N)};return e.jsxs(e.Fragment,{children:[e.jsx(be,{position:"top-right",autoClose:2e3}),e.jsx("div",{className:`${d} transition-all relative md:mx-14`,children:e.jsx(lt,{collectFormDataFun:y,submitFun:F,toastFun:x,closePopUp:_,submitForm:k})}),f&&e.jsx("div",{onClick:()=>T("success"),className:"flex items-center justify-center",children:e.jsxs("button",{type:"submit",className:"absolute bottom-40 mx-auto px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:["Submit Form ",e.jsx(Ue,{className:"inline text-xl"})]})})]})}export{yt as default};
