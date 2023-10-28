import{an as de,ao as ce,ap as pe,ac as me,as as L,r,av as xe,aw as ue,bm as ge,a9 as ie,j as e,ax as ee,ay as be,Z as Ee,A as Z,L as te,o as se,bn as Oe,Y as Q,bg as Le,a as We,l as $e,bo as O,m as w,bp as De,b as He,O as fe,Q as Re,p as Ie,bh as Me,E as qe,aU as Ue,b5 as Ve}from"./index-34d8512c.js";import{E as Ge}from"./EmptyDetailsIllustration-3d73c559.js";import{f as he}from"./formControlState-a1fb9590.js";import{S as B}from"./Switch-a399acab.js";function ze(s){return ce("MuiFormControlLabel",s)}const Be=de("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),J=Be,Ye=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],Qe=s=>{const{classes:d,disabled:u,labelPlacement:f,error:m}=s,h={root:["root",u&&"disabled",`labelPlacement${me(f)}`,m&&"error"],label:["label",u&&"disabled"]};return be(h,ze,d)},Je=pe("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(s,d)=>{const{ownerState:u}=s;return[{[`& .${J.label}`]:d.label},d.root,d[`labelPlacement${me(u.labelPlacement)}`]]}})(({theme:s,ownerState:d})=>L({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${J.disabled}`]:{cursor:"default"}},d.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},d.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},d.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${J.label}`]:{[`&.${J.disabled}`]:{color:(s.vars||s).palette.text.disabled}}})),Ze=r.forwardRef(function(d,u){var f;const m=xe({props:d,name:"MuiFormControlLabel"}),{className:h,componentsProps:j={},control:g,disabled:S,disableTypography:x,label:F,labelPlacement:y="end",slotProps:_={}}=m,k=ue(m,Ye),N=ge();let p=S;typeof p>"u"&&typeof g.props.disabled<"u"&&(p=g.props.disabled),typeof p>"u"&&N&&(p=N.disabled);const C={disabled:p};["checked","name","onChange","value","inputRef"].forEach(P=>{typeof g.props[P]>"u"&&typeof m[P]<"u"&&(C[P]=m[P])});const W=he({props:m,muiFormControl:N,states:["error"]}),E=L({},m,{disabled:p,labelPlacement:y,error:W.error}),o=Qe(E),A=(f=_.typography)!=null?f:j.typography;let v=F;return v!=null&&v.type!==ie&&!x&&(v=e.jsx(ie,L({component:"span"},A,{className:ee(o.label,A==null?void 0:A.className),children:v}))),e.jsxs(Je,L({className:ee(o.root,h),ownerState:E,ref:u},k,{children:[r.cloneElement(g,C),v]}))}),Y=Ze;function Ke(s){return ce("MuiFormGroup",s)}de("MuiFormGroup",["root","row","error"]);const Xe=["className","row"],et=s=>{const{classes:d,row:u,error:f}=s;return be({root:["root",u&&"row",f&&"error"]},Ke,d)},tt=pe("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(s,d)=>{const{ownerState:u}=s;return[d.root,u.row&&d.row]}})(({ownerState:s})=>L({display:"flex",flexDirection:"column",flexWrap:"wrap"},s.row&&{flexDirection:"row"})),st=r.forwardRef(function(d,u){const f=xe({props:d,name:"MuiFormGroup"}),{className:m,row:h=!1}=f,j=ue(f,Xe),g=ge(),S=he({props:f,muiFormControl:g,states:["error"]}),x=L({},f,{row:h,error:S.error}),F=et(x);return e.jsx(tt,L({className:ee(F.root,m),ownerState:x,ref:u},j))}),ot=st,ye=()=>{const s=Ee;return{getAssessment:`${s}/api/property/saf/get-prop-byholding`,postAssessment:`${s}/api/property/objection/apply-objection`,getWardList:`${s}/api/property/saf/master-saf`}},at=s=>{var C,W,E,o,A,v,P,D,H,R,I,M;const{usageTypeList:d,constructionTypeList:u,occupancyTypeList:f,getWardList:m}=ye(),[h,j]=r.useState(!1),[g,S]=r.useState(),[x,F]=r.useState(),[y,_]=r.useState(),[k,N]=r.useState(0);r.useEffect(()=>{N(k+1)},[]),r.useEffect(()=>{j(!0),Z.get(m,te()).then(n=>{var K,q,X,U,V,G;S((q=(K=n==null?void 0:n.data)==null?void 0:K.data)==null?void 0:q.usage_type),F((U=(X=n==null?void 0:n.data)==null?void 0:X.data)==null?void 0:U.occupancy_type),_((G=(V=n==null?void 0:n.data)==null?void 0:V.data)==null?void 0:G.construction_type),j(!1)}).catch(n=>{j(!1)})},[k]);const p=se({initialValues:{propFloorId:(C=s==null?void 0:s.floor)==null?void 0:C.id,floorNo:(W=s==null?void 0:s.floor)==null?void 0:W.floor_mstr_id,usageType:(E=s==null?void 0:s.floor)==null?void 0:E.usage_type_mstr_id,occupancyType:(o=s==null?void 0:s.floor)==null?void 0:o.occupancy_type_mstr_id,constructionType:(A=s==null?void 0:s.floor)==null?void 0:A.const_type_mstr_id,buildupArea:(v=s==null?void 0:s.floor)==null?void 0:v.builtup_area},enableReinitialize:!0,onSubmit:n=>{s.getfloor(n)}});return e.jsxs(e.Fragment,{children:[h&&e.jsx("div",{className:"w-full z-10 absolute mx-auto text-center flex justify-center items-center top-1/2",children:e.jsx("span",{className:"inline",children:e.jsx(Oe,{visible:!0,height:"120",width:"120",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}),e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200 poppins",children:[e.jsx("td",{className:"px-2 py-2 text-left",children:(P=s==null?void 0:s.floor)==null?void 0:P.floor_name}),e.jsx("td",{className:"px-2 py-2 text-left",children:(D=s==null?void 0:s.floor)==null?void 0:D.usage_type}),e.jsx("td",{className:"px-2 py-2 text-left",children:(H=s==null?void 0:s.floor)==null?void 0:H.occupancy_type}),e.jsx("td",{className:"px-2 py-2 text-left",children:(R=s==null?void 0:s.floor)==null?void 0:R.construction_type}),e.jsx("td",{className:"px-2 py-2 text-left",children:(I=s==null?void 0:s.floor)==null?void 0:I.builtup_area})]}),e.jsxs("tr",{className:"bg-white shadow-md  border-b border-gray-200 border-b border-gray-500 poppins",children:[e.jsx("td",{className:"px-2 py-2 text-xs text-left font-semibold text-sm",children:(M=s==null?void 0:s.floor)==null?void 0:M.floor_name}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsxs("select",{...p.getFieldProps("usageType"),value:p.values.usageType,className:"div-control block w-full px-3 py-1.5 text-base md:text-sm font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{selected:!0,disabled:!0,value:"",children:"--select--"}),g==null?void 0:g.map(n=>e.jsx(e.Fragment,{children:e.jsx("option",{value:n==null?void 0:n.id,children:n==null?void 0:n.usage_type})}))]})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsxs("select",{...p.getFieldProps("occupancyType"),value:p.values.occupancyType,className:"div-control block w-full px-3 py-1.5 text-base md:text-sm font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{selected:!0,disabled:!0,value:"",children:"--select--"}),x==null?void 0:x.map(n=>e.jsx(e.Fragment,{children:e.jsx("option",{value:n==null?void 0:n.id,children:n==null?void 0:n.occupancy_type})}))]})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsxs("select",{...p.getFieldProps("constructionType"),value:p.values.constructionType,className:"div-control block w-full px-3 py-1.5 text-base md:text-sm font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md",children:[e.jsx("option",{selected:!0,disabled:!0,value:"",children:"--select--"}),y==null?void 0:y.map(n=>e.jsx(e.Fragment,{children:e.jsx("option",{value:n==null?void 0:n.id,children:n==null?void 0:n.construction_type})}))]})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("input",{type:"number",...p.getFieldProps("buildupArea"),value:p.values.buildupArea,className:"div-control block w-full px-3 py-1.5 text-base md:text-sm font-semibold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer shadow-md"})}),e.jsx("td",{children:e.jsx("button",{onClick:p.handleSubmit,type:"submit",className:"bg-blue-200 hover:bg-blue-300 rounded-md shadow-md px-3 py-1.5",children:"Post"})})]}),e.jsxs("tr",{children:[" ",e.jsx("td",{colSpan:8,children:" "})]})]})},lt=s=>{var g,S;r.useState();const[d,u]=r.useState([]),[f,m]=r.useState(!0),h=se({initialValues:{floorNo:"",usageType:"",occupancyType:"",constructionType:"",buildupArea:""},onSubmit:x=>{}}),j=x=>{d==null||d.map(y=>{if((y==null?void 0:y.propFloorId)==(x==null?void 0:x.propFloorId))return m(!1)});let F=[...d,x];u([...d,x]),s==null||s.getFloorData(F),Q.info("Posted...")};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"col-span-4 overflow-x-auto",onChange:h.handleChange,onSubmit:h.handleSubmit,children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-sky-50",children:e.jsxs("tr",{className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs capitalize text-left",children:[e.jsxs("th",{className:"py-2 px-2",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Floor No."]}),e.jsxs("th",{className:"py-2 px-2",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Usage Type"]}),e.jsxs("th",{className:"py-2 px-2",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Occupancy Type"]}),e.jsxs("th",{className:"py-2 px-2",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Construction Type"]}),e.jsxs("th",{className:"py-2 px-2",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Built Up Area"," ",e.jsxs("small",{className:"block mt-1 text-xs text-gray-600 inline ",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"(in Sq. Ft)"]})]}),e.jsx("th",{className:"py-2 px-2",children:"Action"})]})}),e.jsxs("tbody",{className:"text-xs",children:[((g=s==null?void 0:s.floor)==null?void 0:g.length)<1&&e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"italic bg-red-200 px-4 py-2 text-center",children:"No Floor List Found !!"})})}),(S=s==null?void 0:s.floor)==null?void 0:S.map(x=>e.jsx(e.Fragment,{children:e.jsx(at,{floor:x,getfloor:j})}))]})]})})})};function rt(s){var re;const{getAssessment:d,postAssessment:u,getWardList:f}=ye(),{id:m}=Le();We();const[h,j]=r.useState(null),[g,S]=r.useState(0),[x,F]=r.useState(""),[y,_]=r.useState(),[k,N]=r.useState(),[p,C]=r.useState(),[W,E]=r.useState(),[o,A]=r.useState(),[v,P]=r.useState(!1),[D,H]=r.useState(!1),[R,I]=r.useState(!1),[M,n]=r.useState(!1),[K,q]=r.useState(!1),[X,U]=r.useState(!1),[V,G]=r.useState(!1),[oe,je]=r.useState(!0),[we,Ne]=r.useState(),[Se,Te]=r.useState(!1),[ae,$]=r.useState(!1),[Fe,ve]=r.useState(null);$e({harvestingToggleStatus:O(),roadWidthToggleStatus:O(),propertyTypeToggleStatus:O(),plotAreaToggleStatus:O(),mobileTowerToggleStatus:O(),hoardingToggleStatus:O(),floorToggleStatus:O(),isWaterHarvesting:w().when("harvestingToggleStatus",{is:!0,then:w().required("Field is required")}),rwhDateFrom:w().when("harvestingToggleStatus",{is:!0,then:w().required("Field is required")}),roadType:w().when("roadWidthToggleStatus",{is:!0,then:w().required("Field is required")}),propertyType:w().when("propertyTypeToggleStatus",{is:!0,then:w().required("Field is required")}),areaOfPlot:w().when("plotAreaToggleStatus",{is:!0,then:w().required("Field is required")}),isMobileTower:w().when("mobileTowerToggleStatus",{is:!0,then:w().required("Field is required")}),isHoarding:w().when("hoardingToggleStatus",{is:!0,then:w().required("Field is required")})});const a=se({initialValues:{harvestingToggleStatus:!1,roadWidthToggleStatus:!1,propertyTypeToggleStatus:!1,plotAreaToggleStatus:!1,mobileTowerToggleStatus:!1,hoardingToggleStatus:!1,floorToggleStatus:!1,propId:m,isWaterHarvesting:o!=null&&o.is_water_harvesting?1:0,rwhDateFrom:o==null?void 0:o.rwh_date_from,roadType:o==null?void 0:o.road_width,propertyType:o==null?void 0:o.prop_type_mstr_id,areaOfPlot:o==null?void 0:o.area_of_plot,isMobileTower:o!=null&&o.is_mobile_tower?1:0,mobileArea:o==null?void 0:o.tower_area,mobileDate:o==null?void 0:o.tower_installation_date,isHoarding:o!=null&&o.is_hoarding_board?1:0,hoardingArea:o==null?void 0:o.hoarding_area,hoardingDate:o==null?void 0:o.hoarding_installation_date,objEvidenceDoc:"",objRemarks:"",floor:[]},onSubmit:t=>{let i=Pe(t);if(h!=null&&!De(h))return a.setFieldValue("objEvidenceDoc","").then(()=>{T(!0,"Check your file size"),j(null)}),!0;i&&ke(t)}}),Pe=t=>{if(t.harvestingToggleStatus==!1&&t.roadWidthToggleStatus==!1&&t.propertyTypeToggleStatus==!1&&t.plotAreaToggleStatus==!1&&t.mobileTowerToggleStatus==!1&&t.hoardingToggleStatus==!1&&t.floorToggleStatus==!1)return T(!0,"You have not selected any field to change"),!1;if(t.harvestingToggleStatus){if(t.isWaterHarvesting==""||t.isWaterHarvesting==null)return T(!0,"Please change Water Harvesting details"),!1;if(t.rwhDateFrom==""||t.rwhDateFrom==null)return T(!0,"Please change water harvesting construction date"),!1}return t.roadWidthToggleStatus&&(t.roadType==""||t.roadType==null)?(T(!0,"Please change Road Type details"),!1):t.propertyTypeToggleStatus&&(t.propertyType==""||t.propertyType==null)?(T(!0,"Please change Property Type details"),!1):t.plotAreaToggleStatus&&(t.areaOfPlot==""||t.areaOfPlot==null)?(T(!0,"Please change Area of Plot details"),!1):t.mobileTowerToggleStatus&&(t.isMobileTower==""||t.isMobileTower==null)?(T(!0,"Please change Mobile Tower details"),!1):t.hoardingToggleStatus&&(t.isHoarding==""||t.isHoarding==null)?(T(!0,"Please change Hoarding details"),!1):!0},Ae=t=>{if(t.target.name=="objFormDoc"){let i=t.target.files[0];F(t.target.files[0]),a.setFieldValue("objFormDoc",t.target.files[0]),console.log("--1-- objFormDoc file on change..",i)}if(t.target.name=="objEvidenceDoc"){let i=t.target.files[0];j(t.target.files[0]),console.log("--3-- objEvidenceDoc file on change..",i),a.setFieldValue("objEvidenceDoc",t.target.files[0])}};r.useEffect(()=>{$(!0),Z.post(d,{propertyId:m},te()).then(t=>{var i,c,l,b,z,ne;A((i=t==null?void 0:t.data)==null?void 0:i.data),E((l=(c=t==null?void 0:t.data)==null?void 0:c.data)==null?void 0:l.floors),S(g+1),$(!1),je((b=t==null?void 0:t.data)==null?void 0:b.status),Ne((ne=(z=t==null?void 0:t.data)==null?void 0:z.data)==null?void 0:ne.ulb_id)}).catch(t=>{Q("Something went wrong !!"),$(!1)})},[]),r.useEffect(()=>{Z.get(f,te()).then(t=>{var i,c,l,b;_((c=(i=t==null?void 0:t.data)==null?void 0:i.data)==null?void 0:c.property_type),N((b=(l=t==null?void 0:t.data)==null?void 0:l.data)==null?void 0:b.road_type)}).catch(t=>{})},[g]);const _e=t=>{C(t)};r.useEffect(()=>{},[p]);const ke=t=>{$(!0);let i=[];v&&(i.push({id:2,value:t==null?void 0:t.isWaterHarvesting}),i.push({id:8,value:t==null?void 0:t.rwhDateFrom})),D&&i.push({id:3,value:t==null?void 0:t.roadType}),R&&i.push({id:4,value:t==null?void 0:t.propertyType}),M&&i.push({id:5,value:t==null?void 0:t.areaOfPlot}),t==null||t.isWaterHarvesting,t==null||t.rwhDateFrom,t==null||t.roadType,t==null||t.propertyType,t==null||t.areaOfPlot,t==null||t.isMobileTower,t==null||t.isHoarding;let c=new FormData;c.append("propId",m),c.append("ulbId",we),c.append("objectionFor","Assessment Error"),a.values.objEvidenceDoc!=""&&c.append("docCode","OBJECTION_EVIDENCE_DOC"),a.values.objEvidenceDoc!=""&&c.append("objEvidenceDoc",h),(i==null?void 0:i.length)>0&&(i==null||i.forEach((l,b)=>{c.append(`assessmentData[${b}][id]`,l==null?void 0:l.id),c.append(`assessmentData[${b}][value]`,l==null?void 0:l.value)})),V&&(p==null||p.forEach((l,b)=>{c.append(`floorData[${b}][floorNo]`,l==null?void 0:l.floorNo),c.append(`floorData[${b}][buildupArea]`,l==null?void 0:l.buildupArea),c.append(`floorData[${b}][constructionType]`,l==null?void 0:l.constructionType),c.append(`floorData[${b}][occupancyType]`,l==null?void 0:l.occupancyType),c.append(`floorData[${b}][propFloorId]`,l==null?void 0:l.propFloorId),c.append(`floorData[${b}][usageType]`,l==null?void 0:l.usageType)})),console.log("before send data => ",c,`
 assessment data => `,i,`
 floor data =>`,p),Z.post(u,c,He()).then(l=>{var b,z;((b=l==null?void 0:l.data)==null?void 0:b.status)==!0?(Q.success("Assessment Objection Applied Successfully..."),s.submitForm((z=l==null?void 0:l.data)==null?void 0:z.data)):T(!0,"Error occured in submitting objection application. Please try again later."),$(!1)}).catch(l=>{T(!0,"Error occured in submitting objection application. Please try again later."),$(!1)})},Ce=t=>{let i=t.target.name,c=t.target.checked,l=t.target.value;i==="harvestingToggleStatus"&&P(c===!0),i==="roadWidthToggleStatus"&&H(c===!0),i==="propertyTypeToggleStatus"&&I(c===!0),i==="plotAreaToggleStatus"&&n(c===!0),i==="floorToggleStatus"&&G(c===!0),i==="hoardingToggleStatus"&&U(c===!0),i==="mobileTowerToggleStatus"&&q(c===!0),i=="builtupArea"&&a.setFieldValue("builtupArea",Ue(l,a.values.builtupArea,20))},le=()=>{s.closePopUp()},T=(t,i)=>{ve(i),Te(t)};return e.jsxs(e.Fragment,{children:[e.jsx(fe,{position:"top-right",autoClose:2e3}),ae&&e.jsx(Re,{}),Se&&e.jsx(Ie,{activateBottomErrorCard:T,errorTitle:Fe}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-500 text-white flex flex-row md:justify-evenly items-center justify-center capitalize text-xs poppins 2xl:text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-extrabold text-[30px]",children:e.jsx(Me,{})}),e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-lg",children:"Assessment Objection"})]})}),e.jsxs("div",{className:"poppins my-2 2xl:font-base text-sm poppins",children:["Citizens are able to file objections to assessments using this objection form in accordance with Section 167 of the ",(re=qe())==null?void 0:re.state," Municipal Act 2011. The objections that can be filed include the following:"]}),oe&&!ae&&e.jsx("div",{className:" px-4 w-full md:py-6 rounded-lg shadow-lg bg-white mt-6 ",children:e.jsx("form",{onSubmit:a.handleSubmit,onChange:Ce,children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 h-max",children:[e.jsx(ot,{className:"col-span-4 grid grid-cols-4 h-max",children:e.jsxs("div",{className:"col-span-4 grid grid-cols-4 gap-2",children:[e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsxs("label",{className:" text-gray-800 pr-2",children:[" ",e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"RainWater Harvesting"})]}),e.jsx(Y,{control:e.jsx(B,{...a.getFieldProps("harvestingToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${v?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Rainwater Harvesting"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-bold font-serif",children:o!=null&&o.is_water_harvesting?e.jsx(e.Fragment,{children:"Yes"}):e.jsx(e.Fragment,{children:"No"})})]}),(o==null?void 0:o.isWaterHarvesting)&&e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment (Construction Date)"}),e.jsx("div",{className:"font-bold font-serif",children:o==null?void 0:o.rwh_date_from})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsxs("select",{...a.getFieldProps("isWaterHarvesting"),value:a.values.isWaterHarvesting,type:"text",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{value:"0",children:"No"}),e.jsx("option",{value:"1",children:"Yes"})]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.isWaterHarvesting&&a.errors.isWaterHarvesting?a.errors.isWaterHarvesting:null})]}),a.values.isWaterHarvesting=="1"&&e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Appicant (Construction Date)"]}),e.jsx("input",{...a.getFieldProps("rwhDateFrom"),value:a.values.rwhDateFrom,type:"date",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.rwhDateFrom&&a.errors.rwhDateFrom?a.errors.rwhDateFrom:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsxs("label",{className:" text-gray-800 pr-2",children:[" ",e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Road Width"})]}),e.jsx(Y,{control:e.jsx(B,{...a.getFieldProps("roadWidthToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${D?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Road Width (in ft.)"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-bold font-serif",children:o==null?void 0:o.road_width})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsx("input",{...a.getFieldProps("roadType"),value:a.values.roadType,type:"text",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.roadType&&a.errors.roadType?a.errors.roadType:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsxs("label",{className:" text-gray-800 pr-2",children:[" ",e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Property Type"})]}),e.jsx(Y,{control:e.jsx(B,{...a.getFieldProps("propertyTypeToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${R?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Property Type"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-bold font-serif",children:o==null?void 0:o.property_type})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsxs("select",{...a.getFieldProps("propertyType"),value:a.values.propertyType,type:"text",className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e.jsx("option",{disabled:!0,value:"",children:"--select--"}),y==null?void 0:y.map(t=>e.jsx(e.Fragment,{children:e.jsx("option",{value:t==null?void 0:t.id,children:t==null?void 0:t.property_type})}))]}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.propertyType&&a.errors.propertyType?a.errors.propertyType:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsxs("label",{className:" text-gray-800 pr-2",children:[" ",e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Area of Plot"})]}),e.jsx(Y,{control:e.jsx(B,{...a.getFieldProps("plotAreaToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${M?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Area of plot (in sq.ft.)"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"As Per Assessment"}),e.jsx("div",{className:"font-bold font-serif",children:o==null?void 0:o.area_of_plot})]}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 px-2 md:px-4",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"As Per Applicant"]}),e.jsx("input",{...a.getFieldProps("areaOfPlot"),type:"number",value:a.values.areaOfPlot,className:"form-control block w-full px-3 py-1.5 text-xs poppins 2xl:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.areaOfPlot&&a.errors.areaOfPlot?a.errors.areaOfPlot:null})]})]}),e.jsx("div",{className:"col-span-4 grid grid-cols-4",children:e.jsxs("div",{className:"col-span-4 md:col-span-1  mb-2 px-2 md:px-4 bg-gray-100 shadow-md border border-gray-300",children:[e.jsxs("label",{className:" text-gray-800 pr-2",children:[" ",e.jsx("span",{className:"inline text-gray-700 2xl:text-sm text-xs poppins font-semibold",children:"Floor Detail"})]}),e.jsx(Y,{control:e.jsx(B,{...a.getFieldProps("floorToggleStatus"),inputProps:{"aria-label":"controlled"}}),label:""})]})}),e.jsxs("div",{className:`col-span-4 ${V?"grid":"hidden"} grid-cols-1 md:grid-cols-4  mt-2`,children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-red-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Objection On: Floor Details"})}),e.jsx(lt,{floor:W,getFloorData:_e})]})]})}),e.jsxs("div",{className:"col-span-4 grid grid-cols-1 md:grid-cols-4 h-max mt-10 border",children:[e.jsx("div",{className:"form-group col-span-4 mb-6 px-2 md:px-4 bg-green-100 shadow-md",children:e.jsx("label",{className:"form-label inline-block mb-1 text-gray-700 2xl:text-sm text-xs poppins text-xs poppins font-semibold",children:"Documents"})}),e.jsxs("div",{className:"form-group mb-6 col-span-4 md:col-span-1 md:px-4",onChange:a.handleChange,children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 2xl:text-sm text-xs poppins font-semibold",children:"Evidence Document"}),e.jsx("input",{name:"objEvidenceDoc",onChange:Ae,accept:".pdf,.jpg,.jpeg",type:"file",className:"form-control block w-full px-3 py-1 text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:a.touched.objEvidenceDoc&&a.errors.objEvidenceDoc?a.errors.objEvidenceDoc:null})]})]}),e.jsxs("div",{className:"col-span-4 flex flex-row flex-wrap justify-between items-center w-full h-max mt-4",children:[e.jsx("div",{onClick:()=>le(),className:"cursor-pointer px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out poppins",children:"Close"}),e.jsx("div",{children:e.jsxs("button",{type:"submit",className:" poppins px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-green-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:[" ","Submit"," "]})})]})]})})}),!oe&&e.jsx(e.Fragment,{children:e.jsx(Ge,{title:"Oops !! No Assessment Details Found !!",location:le})})]})}function pt(s){r.useState(1);const[d,u]=r.useState("translate-x-0"),[f,m]=r.useState(!1),[h,j]=r.useState({}),[g,S]=r.useState(""),x=N=>{Q.dismiss(),Q.error(N)},F=()=>{m(!0)},y=(N,p)=>{j({...h,[N]:p})};if(g=="success")return e.jsx(e.Fragment,{children:" Done"});const _=()=>{s.closePopUp()},k=N=>{s.submitForm(N)};return e.jsxs(e.Fragment,{children:[e.jsx(fe,{position:"top-right",autoClose:2e3}),e.jsx("div",{className:`${d} transition-all relative md:mx-14`,children:e.jsx(rt,{collectFormDataFun:y,submitFun:F,toastFun:x,closePopUp:_,submitForm:k})}),f&&e.jsx("div",{onClick:()=>S("success"),className:"flex items-center justify-center",children:e.jsxs("button",{type:"submit",className:"absolute bottom-40 mx-auto px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out",children:["Submit Form ",e.jsx(Ve,{className:"inline text-xl"})]})})]})}export{pt as default};