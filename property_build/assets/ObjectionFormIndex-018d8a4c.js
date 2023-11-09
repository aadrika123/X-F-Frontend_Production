import{af as L,r as l,ag as de,j as e,ah as ee,e as Ee,A as X,b as te,v as se,a6 as Oe,Q as J,u as Le,d as We,p as $e,ar as O,q as w,V as De,X as ce,G as He,at as Re,aw as Ie}from"./index-79f03426.js";import{c as Me}from"./index.esm-dba5af70.js";/* empty css             */import{E as qe}from"./EmptyDetailsIllustration-7d554666.js";import{A as Ue}from"./ApiHeader2-b363f7b8.js";import{b as Ve}from"./index.esm-46aeaaf3.js";import{B as Ge}from"./BottomErrorCard-12099568.js";import{g as me,a as pe,s as xe,c as ue,u as ge,d as be}from"./useThemeProps-99b24bf1.js";import{a as fe}from"./useFormControl-1532d244.js";import{f as he}from"./formControlState-a1fb9590.js";import{T as ie}from"./Typography-360353e7.js";import{S as z}from"./Switch-610882d7.js";import"./notfound1-b58e95b5.js";import"./TransitionGroupContext-5693b27e.js";import"./SwitchBase-f6b657e8.js";function Be(s){return pe("MuiFormControlLabel",s)}const ze=me("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),Q=ze,Ye=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],Je=s=>{const{classes:d,disabled:u,labelPlacement:f,error:p}=s,h={root:["root",u&&"disabled",`labelPlacement${ue(f)}`,p&&"error"],label:["label",u&&"disabled"]};return be(h,Be,d)},Qe=xe("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(s,d)=>{const{ownerState:u}=s;return[{[`& .${Q.label}`]:d.label},d.root,d[`labelPlacement${ue(u.labelPlacement)}`]]}})(({theme:s,ownerState:d})=>L({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${Q.disabled}`]:{cursor:"default"}},d.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},d.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},d.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${Q.label}`]:{[`&.${Q.disabled}`]:{color:(s.vars||s).palette.text.disabled}}})),Xe=l.forwardRef(function(d,u){var f;const p=ge({props:d,name:"MuiFormControlLabel"}),{className:h,componentsProps:j={},control:g,disabled:T,disableTypography:x,label:F,labelPlacement:y="end",slotProps:_={}}=p,k=de(p,Ye),N=fe();let m=T;typeof m>"u"&&typeof g.props.disabled<"u"&&(m=g.props.disabled),typeof m>"u"&&N&&(m=N.disabled);const C={disabled:m};["checked","name","onChange","value","inputRef"].forEach(P=>{typeof g.props[P]>"u"&&typeof p[P]<"u"&&(C[P]=p[P])});const W=he({props:p,muiFormControl:N,states:["error"]}),E=L({},p,{disabled:m,labelPlacement:y,error:W.error}),o=Je(E),A=(f=_.typography)!=null?f:j.typography;let v=F;return v!=null&&v.type!==ie&&!x&&(v=e.jsx(ie,L({component:"span"},A,{className:ee(o.label,A==null?void 0:A.className),children:v}))),e.jsxs(Qe,L({className:ee(o.root,h),ownerState:E,ref:u},k,{children:[l.cloneElement(g,C),v]}))}),Y=Xe;function Ke(s){return pe("MuiFormGroup",s)}me("MuiFormGroup",["root","row","error"]);const Ze=["className","row"],et=s=>{const{classes:d,row:u,error:f}=s;return be({root:["root",u&&"row",f&&"error"]},Ke,d)},tt=xe("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(s,d)=>{const{ownerState:u}=s;return[d.root,u.row&&d.row]}})(({ownerState:s})=>L({display:"flex",flexDirection:"column",flexWrap:"wrap"},s.row&&{flexDirection:"row"})),st=l.forwardRef(function(d,u){const f=ge({props:d,name:"MuiFormGroup"}),{className:p,row:h=!1}=f,j=de(f,Ze),g=fe(),T=he({props:f,muiFormControl:g,states:["error"]}),x=L({},f,{row:h,error:T.error}),F=et(x);return e.jsx(tt,L({className:ee(F.root,p),ownerState:x,ref:u},j))}),ot=st,ye=()=>{const s=Ee;return{getAssessment:`${s}/api/property/saf/get-prop-byholding`,postAssessment:`${s}/api/property/objection/apply-objection`,getWardList:`${s}/api/property/saf/master-saf`}},rt=s=>{var C,W,E,o,A,v,P,D,H,R,I,M;const{usageTypeList:d,constructionTypeList:u,occupancyTypeList:f,getWardList:p}=ye(),[h,j]=l.useState(!1),[g,T]=l.useState(),[x,F]=l.useState(),[y,_]=l.useState(),[k,N]=l.useState(0);l.useEffect(()=>{N(k+1)},[]),l.useEffect(()=>{j(!0),X.get(p,te()).then(n=>{var K,q,Z,U,V,G;T((q=(K=n==null?void 0:n.data)==null?void 0:K.data)==null?void 0:q.usage_type),F((U=(Z=n==null?void 0:n.data)==null?void 0:Z.data)==null?void 0:U.occupancy_type),_((G=(V=n==null?void 0:n.data)==null?void 0:V.data)==null?void 0:G.construction_type),j(!1)}).catch(n=>{j(!1)})},[k]);const m=se({initialValues:{propFloorId:(C=s==null?void 0:s.floor)==null?void 0:C.id,floorNo:(W=s==null?void 0:s.floor)==null?void 0:W.floor_mstr_id,usageType:(E=s==null?void 0:s.floor)==null?void 0:E.usage_type_mstr_id,occupancyType:(o=s==null?void 0:s.floor)==null?void 0:o.occupancy_type_mstr_id,constructionType:(A=s==null?void 0:s.floor)==null?void 0:A.const_type_mstr_id,buildupArea:(v=s==null?void 0:s.floor)==null?void 0:v.builtup_area},enableReinitialize:!0,onSubmit:n=>{s.getfloor(n)}});return e.jsxs(e.Fragment,{children:[h&&e.jsx("div",{className:"w-full z-10 absolute mx-auto text-center flex justify-center items-center top-1/2",children:e.jsx("span",{className:"inline",children:e.jsx(Oe,{visible:!0,height:"120",width:"120",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}),e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200 poppins",children:[e.jsx("td",{className:"px-2 py-2 text-left",children:(P=s==null?void 0:s.floor)==null?void 0:P.floor_name}),e.jsx("td",{className:"px-2 py-2 text-left",children:(D=s==null?void 0:s.floor)==null?void 0:D.usage_type}),e.jsx("td",{className:"px-2 py-2 text-left",children:(H=s==null?void 0:s.floor)==null?void 0:H.occupancy_type}),e.jsx("td",{className:"px-2 py-2 text-left",children:(R=s==null?void 0:s.floor)==null?void 0:R.construction_type}),e.jsx("td",{className:"px-2 py-2 text-left",children:(I=s==null?void 0:s.floor)==null?void 0:I.builtup_area})]}),e.jsxs("tr",{className:"bg-white shadow-md  border-b border-gray-200 border-b border-gray-500 poppins",children:[e.jsx("td",{className:"px-2 py-2 text-xs text-left font-semibold text-sm",children:(M=s==null?void 0:s.floor)==null?void 0:M.floor_name}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsxs("select",{...m.getFieldProps("usageType"),value:m.values.usageType,className:"div-control block w-full px-3 py-1.5 text-base md:text-sm font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{selected:!0,disabled:!0,value:"",children:"--select--"}),g==null?void 0:g.map(n=>e.jsx(e.Fragment,{children:e.jsx("option",{value:n==null?void 0:n.id,children:n==null?void 0:n.usage_type})}))]})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsxs("select",{...m.getFieldProps("occupancyType"),value:m.values.occupancyType,className:"div-control block w-full px-3 py-1.5 text-base md:text-sm font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{selected:!0,disabled:!0,value:"",children:"--select--"}),x==null?void 0:x.map(n=>e.jsx(e.Fragment,{children:e.jsx("option",{value:n==null?void 0:n.id,children:n==null?void 0:n.occupancy_type})}))]})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsxs("select",{...m.getFieldProps("constructionType"),value:m.values.constructionType,className:"div-control block w-full px-3 py-1.5 text-base md:text-sm font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{selected:!0,disabled:!0,value:"",children:"--select--"}),y==null?void 0:y.map(n=>e.jsx(e.Fragment,{children:e.jsx("option",{value:n==null?void 0:n.id,children:n==null?void 0:n.construction_type})}))]})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("input",{type:"number",...m.getFieldProps("buildupArea"),value:m.values.buildupArea,className:"div-control block w-full px-3 py-1.5 text-base md:text-sm font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"})}),e.jsx("td",{children:e.jsx("button",{onClick:m.handleSubmit,type:"submit",className:"bg-blue-200 hover:bg-blue-300 rounded-md shadow-md px-3 py-1.5",children:"Post"})})]}),e.jsxs("tr",{children:[" ",e.jsx("td",{colSpan:8,children:" "})]})]})},at=s=>{var g,T;l.useState();const[d,u]=l.useState([]),[f,p]=l.useState(!0),h=se({initialValues:{floorNo:"",usageType:"",occupancyType:"",constructionType:"",buildupArea:""},onSubmit:x=>{}}),j=x=>{d==null||d.map(y=>{if((y==null?void 0:y.propFloorId)==(x==null?void 0:x.propFloorId))return p(!1)});let F=[...d,x];u([...d,x]),s==null||s.getFloorData(F),J.info("Posted...")};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"col-span-4 overflow-x-auto",onChange:h.handleChange,onSubmit:h.handleSubmit,children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-sky-50",children:e.jsxs("tr",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs capitalize text-left",children:[e.jsxs("th",{className:"py-2 px-2",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Floor No."]}),e.jsxs("th",{className:"py-2 px-2",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Usage Type"]}),e.jsxs("th",{className:"py-2 px-2",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Occupancy Type"]}),e.jsxs("th",{className:"py-2 px-2",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Construction Type"]}),e.jsxs("th",{className:"py-2 px-2",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Built Up Area"," ",e.jsxs("small",{className:"block mt-1 text-xs text-gray-600 inline ",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"(in Sq. Ft)"]})]}),e.jsx("th",{className:"py-2 px-2",children:"Action"})]})}),e.jsxs("tbody",{className:"text-xs",children:[((g=s==null?void 0:s.floor)==null?void 0:g.length)<1&&e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"italic bg-red-200 px-4 py-2 text-center",children:"No Floor List Found !!"})})}),(T=s==null?void 0:s.floor)==null?void 0:T.map(x=>e.jsx(e.Fragment,{children:e.jsx(rt,{floor:x,getfloor:j})}))]})]})})})};function lt(s){var le;const{getAssessment:d,postAssessment:u,getWardList:f}=ye(),{id:p}=Le();We();const[h,j]=l.useState(null),[g,T]=l.useState(0),[x,F]=l.useState(""),[y,_]=l.useState(),[k,N]=l.useState(),[m,C]=l.useState(),[W,E]=l.useState(),[o,A]=l.useState(),[v,P]=l.useState(!1),[D,H]=l.useState(!1),[R,I]=l.useState(!1),[M,n]=l.useState(!1),[K,q]=l.useState(!1),[Z,U]=l.useState(!1),[V,G]=l.useState(!1),[oe,je]=l.useState(!0),[we,Ne]=l.useState(),[Te,Se]=l.useState(!1),[re,$]=l.useState(!1),[Fe,ve]=l.useState(null);$e({harvestingToggleStatus:O(),roadWidthToggleStatus:O(),propertyTypeToggleStatus:O(),plotAreaToggleStatus:O(),mobileTowerToggleStatus:O(),hoardingToggleStatus:O(),floorToggleStatus:O(),isWaterHarvesting:w().when("harvestingToggleStatus",{is:!0,then:w().required("Field is required")}),rwhDateFrom:w().when("harvestingToggleStatus",{is:!0,then:w().required("Field is required")}),roadType:w().when("roadWidthToggleStatus",{is:!0,then:w().required("Field is required")}),propertyType:w().when("propertyTypeToggleStatus",{is:!0,then:w().required("Field is required")}),areaOfPlot:w().when("plotAreaToggleStatus",{is:!0,then:w().required("Field is required")}),isMobileTower:w().when("mobileTowerToggleStatus",{is:!0,then:w().required("Field is required")}),isHoarding:w().when("hoardingToggleStatus",{is:!0,then:w().required("Field is required")})});const r=se({initialValues:{harvestingToggleStatus:!1,roadWidthToggleStatus:!1,propertyTypeToggleStatus:!1,plotAreaToggleStatus:!1,mobileTowerToggleStatus:!1,hoardingToggleStatus:!1,floorToggleStatus:!1,propId:p,isWaterHarvesting:o!=null&&o.is_water_harvesting?1:0,rwhDateFrom:o==null?void 0:o.rwh_date_from,roadType:o==null?void 0:o.road_width,propertyType:o==null?void 0:o.prop_type_mstr_id,areaOfPlot:o==null?void 0:o.area_of_plot,isMobileTower:o!=null&&o.is_mobile_tower?1:0,mobileArea:o==null?void 0:o.tower_area,mobileDate:o==null?void 0:o.tower_installation_date,isHoarding:o!=null&&o.is_hoarding_board?1:0,hoardingArea:o==null?void 0:o.hoarding_area,hoardingDate:o==null?void 0:o.hoarding_installation_date,objEvidenceDoc:"",objRemarks:"",floor:[]},onSubmit:t=>{let i=Pe(t);if(h!=null&&!De(h))return r.setFieldValue("objEvidenceDoc","").then(()=>{S(!0,"Check your file size"),j(null)}),!0;i&&ke(t)}}),Pe=t=>{if(t.harvestingToggleStatus==!1&&t.roadWidthToggleStatus==!1&&t.propertyTypeToggleStatus==!1&&t.plotAreaToggleStatus==!1&&t.mobileTowerToggleStatus==!1&&t.hoardingToggleStatus==!1&&t.floorToggleStatus==!1)return S(!0,"You have not selected any field to change"),!1;if(t.harvestingToggleStatus){if(t.isWaterHarvesting==""||t.isWaterHarvesting==null)return S(!0,"Please change Water Harvesting details"),!1;if(t.rwhDateFrom==""||t.rwhDateFrom==null)return S(!0,"Please change water harvesting construction date"),!1}return t.roadWidthToggleStatus&&(t.roadType==""||t.roadType==null)?(S(!0,"Please change Road Type details"),!1):t.propertyTypeToggleStatus&&(t.propertyType==""||t.propertyType==null)?(S(!0,"Please change Property Type details"),!1):t.plotAreaToggleStatus&&(t.areaOfPlot==""||t.areaOfPlot==null)?(S(!0,"Please change Area of Plot details"),!1):t.mobileTowerToggleStatus&&(t.isMobileTower==""||t.isMobileTower==null)?(S(!0,"Please change Mobile Tower details"),!1):t.hoardingToggleStatus&&(t.isHoarding==""||t.isHoarding==null)?(S(!0,"Please change Hoarding details"),!1):!0},Ae=t=>{if(t.target.name=="objFormDoc"){let i=t.target.files[0];F(t.target.files[0]),r.setFieldValue("objFormDoc",t.target.files[0]),console.log("--1-- objFormDoc file on change..",i)}if(t.target.name=="objEvidenceDoc"){let i=t.target.files[0];j(t.target.files[0]),console.log("--3-- objEvidenceDoc file on change..",i),r.setFieldValue("objEvidenceDoc",t.target.files[0])}};l.useEffect(()=>{$(!0),X.post(d,{propertyId:p},te()).then(t=>{var i,c,a,b,B,ne;A((i=t==null?void 0:t.data)==null?void 0:i.data),E((a=(c=t==null?void 0:t.data)==null?void 0:c.data)==null?void 0:a.floors),T(g+1),$(!1),je((b=t==null?void 0:t.data)==null?void 0:b.status),Ne((ne=(B=t==null?void 0:t.data)==null?void 0:B.data)==null?void 0:ne.ulb_id)}).catch(t=>{J("Something went wrong !!"),$(!1)})},[]),l.useEffect(()=>{X.get(f,te()).then(t=>{var i,c,a,b;_((c=(i=t==null?void 0:t.data)==null?void 0:i.data)==null?void 0:c.property_type),N((b=(a=t==null?void 0:t.data)==null?void 0:a.data)==null?void 0:b.road_type)}).catch(t=>{})},[g]);const _e=t=>{C(t)};l.useEffect(()=>{},[m]);const ke=t=>{$(!0);let i=[];v&&(i.push({id:2,value:t==null?void 0:t.isWaterHarvesting}),i.push({id:8,value:t==null?void 0:t.rwhDateFrom})),D&&i.push({id:3,value:t==null?void 0:t.roadType}),R&&i.push({id:4,value:t==null?void 0:t.propertyType}),M&&i.push({id:5,value:t==null?void 0:t.areaOfPlot}),t==null||t.isWaterHarvesting,t==null||t.rwhDateFrom,t==null||t.roadType,t==null||t.propertyType,t==null||t.areaOfPlot,t==null||t.isMobileTower,t==null||t.isHoarding;let c=new FormData;c.append("propId",p),c.append("ulbId",we),c.append("objectionFor","Assessment Error"),r.values.objEvidenceDoc!=""&&c.append("docCode","OBJECTION_EVIDENCE_DOC"),r.values.objEvidenceDoc!=""&&c.append("objEvidenceDoc",h),(i==null?void 0:i.length)>0&&(i==null||i.forEach((a,b)=>{c.append(`assessmentData[${b}][id]`,a==null?void 0:a.id),c.append(`assessmentData[${b}][value]`,a==null?void 0:a.value)})),V&&(m==null||m.forEach((a,b)=>{c.append(`floorData[${b}][floorNo]`,a==null?void 0:a.floorNo),c.append(`floorData[${b}][buildupArea]`,a==null?void 0:a.buildupArea),c.append(`floorData[${b}][constructionType]`,a==null?void 0:a.constructionType),c.append(`floorData[${b}][occupancyType]`,a==null?void 0:a.occupancyType),c.append(`floorData[${b}][propFloorId]`,a==null?void 0:a.propFloorId),c.append(`floorData[${b}][usageType]`,a==null?void 0:a.usageType)})),console.log("before send data => ",c,`
 assessment data => `,i,`
 floor data =>`,m),X.post(u,c,Ue()).then(a=>{var b,B;((b=a==null?void 0:a.data)==null?void 0:b.status)==!0?(J.success("Assessment Objection Applied Successfully..."),s.submitForm((B=a==null?void 0:a.data)==null?void 0:B.data)):S(!0,"Error occured in submitting objection application. Please try again later."),$(!1)}).catch(a=>{S(!0,"Error occured in submitting objection application. Please try again later."),$(!1)})},Ce=t=>{let i=t.target.name,c=t.target.checked,a=t.target.value;i==="harvestingToggleStatus"&&P(c===!0),i==="roadWidthToggleStatus"&&H(c===!0),i==="propertyTypeToggleStatus"&&I(c===!0),i==="plotAreaToggleStatus"&&n(c===!0),i==="floorToggleStatus"&&G(c===!0),i==="hoardingToggleStatus"&&U(c===!0),i==="mobileTowerToggleStatus"&&q(c===!0),i=="builtupArea"&&r.setFieldValue("builtupArea",Ie(a,r.values.builtupArea,20))},ae=()=>{s.closePopUp()},S=(t,i)=>{ve(i),Se(t)};return e.jsxs(e.Fragment,{children:[e.jsx(ce,{position:"top-right",autoClose:2e3}),re&&e.jsx(He,{}),Te&&e.jsx(Ge,{activateBottomErrorCard:S,errorTitle:Fe}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-500 text-white flex flex-row md:justify-evenly items-center justify-center capitalize text-xs poppins 2xl:text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-extrabold text-[30px]",children:e.jsx(Ve,{})}),e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-lg",children:"Assessment Objection"})]})}),e.jsxs("div",{className:"poppins my-2 2xl:font-base text-sm poppins",children:["Citizens are able to file objections to assessments using this objection form in accordance with Section 167 of the ",(le=Re())==null?void 0:le.state," Municipal Act 2011. The objections that can be filed include the following:"]}),oe&&!re&&e.jsx("div",{className:" px-4 w-full md:py-6 rounded-lg shadow-lg bg-white mt-6 ",children:e.jsx("form",{onSubmit:r.handleSubmit,onChange:Ce,children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 h-max",children:[e.jsx(ot,{className:"col-span-4 grid grid-cols-4 h-max",children:e.jsxs("div",{className:"col-span-4 grid grid-cols-4 gap-2",children:[e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsxs("label",{className:" text-gray-800 pr-2",children:[" ",e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"RainWater Harvesting"})]}),e.jsx(Y,{control:e.jsx(z,{...r.getFieldProps("harvestingToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${v?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Rainwater Harvesting"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-bold font-serif",children:o!=null&&o.is_water_harvesting?e.jsx(e.Fragment,{children:"Yes"}):e.jsx(e.Fragment,{children:"No"})})]}),(o==null?void 0:o.isWaterHarvesting)&&e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment (Construction Date)"}),e.jsx("div",{className:"font-bold font-serif",children:o==null?void 0:o.rwh_date_from})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsxs("select",{...r.getFieldProps("isWaterHarvesting"),value:r.values.isWaterHarvesting,type:"text",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"0",children:"No"}),e.jsx("option",{value:"1",children:"Yes"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.isWaterHarvesting&&r.errors.isWaterHarvesting?r.errors.isWaterHarvesting:null})]}),r.values.isWaterHarvesting=="1"&&e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Appicant (Construction Date)"]}),e.jsx("input",{...r.getFieldProps("rwhDateFrom"),value:r.values.rwhDateFrom,type:"date",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.rwhDateFrom&&r.errors.rwhDateFrom?r.errors.rwhDateFrom:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsxs("label",{className:" text-gray-800 pr-2",children:[" ",e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Road Width"})]}),e.jsx(Y,{control:e.jsx(z,{...r.getFieldProps("roadWidthToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${D?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Road Width (in ft.)"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-bold font-serif",children:o==null?void 0:o.road_width})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsx("input",{...r.getFieldProps("roadType"),value:r.values.roadType,type:"text",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.roadType&&r.errors.roadType?r.errors.roadType:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsxs("label",{className:" text-gray-800 pr-2",children:[" ",e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Property Type"})]}),e.jsx(Y,{control:e.jsx(z,{...r.getFieldProps("propertyTypeToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${R?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Property Type"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-bold font-serif",children:o==null?void 0:o.property_type})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsxs("select",{...r.getFieldProps("propertyType"),value:r.values.propertyType,type:"text",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{disabled:!0,value:"",children:"--select--"}),y==null?void 0:y.map(t=>e.jsx(e.Fragment,{children:e.jsx("option",{value:t==null?void 0:t.id,children:t==null?void 0:t.property_type})}))]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.propertyType&&r.errors.propertyType?r.errors.propertyType:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsxs("label",{className:" text-gray-800 pr-2",children:[" ",e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Area of Plot"})]}),e.jsx(Y,{control:e.jsx(z,{...r.getFieldProps("plotAreaToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${M?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Area of plot (in sq.ft.)"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-bold font-serif",children:o==null?void 0:o.area_of_plot})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsx("input",{...r.getFieldProps("areaOfPlot"),type:"number",value:r.values.areaOfPlot,className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.areaOfPlot&&r.errors.areaOfPlot?r.errors.areaOfPlot:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsxs("label",{className:" text-gray-800 pr-2",children:[" ",e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Floor Detail"})]}),e.jsx(Y,{control:e.jsx(z,{...r.getFieldProps("floorToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${V?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Floor Details"})}),e.jsx(at,{floor:W,getFloorData:_e})]})]})}),e.jsxs("div",{className:"col-span-4 grid grid-cols-1 md:grid-cols-4 h-max mt-10 border",children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-green-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Documents"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 md:px-4",onChange:r.handleChange,children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"Evidence Document"}),e.jsx("input",{name:"objEvidenceDoc",onChange:Ae,accept:".pdf,.jpg,.jpeg",type:"file",className:"form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.objEvidenceDoc&&r.errors.objEvidenceDoc?r.errors.objEvidenceDoc:null})]})]}),e.jsxs("div",{className:"col-span-4 flex flex-row flex-wrap justify-between items-center w-full h-max mt-4",children:[e.jsx("div",{onClick:()=>ae(),className:"cursor-pointer px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out poppins",children:"Close"}),e.jsx("div",{children:e.jsxs("button",{type:"submit",className:" poppins px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-green-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:[" ","Submit"," "]})})]})]})})}),!oe&&e.jsx(e.Fragment,{children:e.jsx(qe,{title:"Oops !! No Assessment Details Found !!",location:ae})})]})}function Nt(s){l.useState(1);const[d,u]=l.useState("translate-x-0"),[f,p]=l.useState(!1),[h,j]=l.useState({}),[g,T]=l.useState(""),x=N=>{J.dismiss(),J.error(N)},F=()=>{p(!0)},y=(N,m)=>{j({...h,[N]:m})};if(g=="success")return e.jsx(e.Fragment,{children:" Done"});const _=()=>{s.closePopUp()},k=N=>{s.submitForm(N)};return e.jsxs(e.Fragment,{children:[e.jsx(ce,{position:"top-right",autoClose:2e3}),e.jsx("div",{className:`${d} transition-all relative md:mx-14`,children:e.jsx(lt,{collectFormDataFun:y,submitFun:F,toastFun:x,closePopUp:_,submitForm:k})}),f&&e.jsx("div",{onClick:()=>T("success"),className:"flex items-center justify-center",children:e.jsxs("button",{type:"submit",className:"absolute bottom-40 mx-auto px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:["Submit Form ",e.jsx(Me,{className:"inline text-xl"})]})})]})}export{Nt as default};
