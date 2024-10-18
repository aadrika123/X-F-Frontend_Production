import{Y as U,r as a,e as Y,u as G,j as e,a8 as q,T as K,A as C,b as z,K as Z,a as X,B as J,S as Q,n as r,aX as L,x as h,ae as m,ak as R,P as D,g as F}from"./index-de9ac7f1.js";import{T as ee}from"./TopTabs-eb209b86.js";import{C as se}from"./CitizenApplyApiList-d2ee2396.js";function te(d){var u,E,k;const{t:x}=U(),v=a.useRef(),[O,B]=a.useState(null),[s,M]=a.useState(!1),[p,c]=a.useState(!1),b=Y(),{id:i}=G(),{checkFormStatus:I}=se(),j=(l,n)=>{B(n),M(l)},$=(l,n)=>{if(!["Re Assessment","Mutation","Bifurcation","Concession","Harvesting","Objection"].includes(l)){b(`${n}/${i}`);return}let f;l=="Re Assessment"&&(f={type:"Reassesment",propertyId:i}),l=="Mutation"&&(f={type:"Mutation",propertyId:i}),l=="Bifurcation"&&(f={type:"Bifurcation",propertyId:i}),l=="Concession"&&(f={type:"Concession",propertyId:i}),l=="Harvesting"&&(f={type:"Harvesting",propertyId:i}),l=="Objection"&&(f={type:"Objection",propertyId:i}),c(!0),C.post(I,f,z()).then(g=>{var S,A,_,P;(A=(S=g==null?void 0:g.data)==null?void 0:S.data)!=null&&A.inWorkflow?j(!0,(P=(_=g==null?void 0:g.data)==null?void 0:_.data)==null?void 0:P.message):b(`${n}/${i}`)}).catch(g=>{}).finally(()=>c(!1))},H=l=>{if(!["Re Assessment","Mutation","Bifurcation","Concession","Harvesting","Objection","View Saf","Comparitive Demand","Demand Receipt"].includes(l))return null;if(l=="Re Assessment")return x("mainHoldingPage.holdingReAssessment.label");if(l=="Mutation")return x("mainHoldingPage.holdingMutation.label");if(l=="Bifurcation")return x("mainHoldingPage.holdingBifurcation.label");if(l=="Concession")return x("mainHoldingPage.holdingConcession.label");if(l=="Harvesting")return x("mainHoldingPage.holdingHarvesting.label");if(l=="View Saf")return x("mainHoldingPage.holdingViewSaf.label");if(l=="Comparitive Demand")return x("mainHoldingPage.holdingComparitiveDemand.label");if(l=="Demand Receipt")return x("mainHoldingPage.holdingDemandReceipt.label");if(l=="Objection")return x("mainHoldingPage.holdingObjection.label")};a.useEffect(()=>{H()},[window.localStorage.lang]);const V=()=>{var l;(l=v.current)==null||l.showModal()},T=()=>{var l;(l=v.current)==null||l.close()},N=l=>{b(`/propApplicationDetails/${l}`)};return e.jsxs(e.Fragment,{children:[s&&e.jsx(q,{activateBottomErrorCard:j,errorTitle:O}),p&&e.jsx(K,{color:"#818cf8"}),!p&&e.jsx("div",{className:"flex gap-y-4 flex-wrap justify-center flex-row md:py-2 w-full items-center sm:justify-end",children:(u=d==null?void 0:d.permissionData)==null?void 0:u.map((l,n)=>e.jsx("button",{className:`cypress_button${n} mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm text-sm md:text-base hover:bg-indigo-500 hover:text-white`,onClick:()=>{var y;(l==null?void 0:l.action_name)=="View Saf"?((y=d==null?void 0:d.fulldata)==null?void 0:y.Safs.length)>0?V():b(`${l==null?void 0:l.endpoint}/${(d==null?void 0:d.safId)||0}`):$(l==null?void 0:l.action_name,l==null?void 0:l.endpoint)},children:H(l==null?void 0:l.lebel)},n))}),e.jsxs("dialog",{ref:v,className:"rounded-lg bg-indigo-100 w-1/2 h-96",children:[e.jsx("style",{children:"dialog::backdrop { background-color: rgba(0, 0, 0, 0.5); }"}),e.jsx("div",{className:"float-right p-2",children:e.jsx("p",{className:"bg-red-600 rounded-full px-3 py-1 cursor-pointer text-white font-semibold",onClick:T,children:"x"})}),e.jsxs("div",{children:[e.jsx("div",{className:"text-center mt-2 font-semibold text-lg",children:"Applied Saf Details"}),e.jsx("div",{children:e.jsx("div",{className:"mt-2 bg-white rounded-lg  p-4 overflow-x-auto ml-8 ",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white p-4 overflow-x-auto ",children:[e.jsx("thead",{className:"font-bold text-left text-sm border-b text-gray-800 bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 text-xl capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 text-xl capitalize text-left ",children:x("mainHoldingPage.holdingOwnerName.label")}),e.jsx("th",{className:"px-2 py-3 text-xl capitalize text-left",children:x("mainSearchapplicationPage.assessmentType.label")}),e.jsx("th",{className:"px-2 py-3 text-xl capitalize text-left",children:x("mainSearchapplicationPage.applicationNo.label")}),e.jsx("th",{className:"px-2 py-3 text-xl capitalize text-left",children:"Action"})]})}),e.jsx("tbody",{className:"text-xl",children:(k=(E=d==null?void 0:d.fulldata)==null?void 0:E.Safs)==null?void 0:k.map((l,n)=>e.jsxs("tr",{className:"bg-white  border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xl",children:n+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xl",children:l.owner_name}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xl",children:l.assessment_type}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xl",children:l.saf_no}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xl",children:e.jsx("button",{onClick:()=>N(l.id),className:"bg-blue-400 text-white hover:bg-blue-600 px-1 py-1 rounded-sm",children:"View"})})]}))})]})})})]})]})]})}function xe(){var _,P;const{t:d}=U(),{id:x}=G();Y(),Z();const{api_getPropHoldingDetailsById:v,api_updateMobileNo:O}=D(),{api_getPermissionByUser:B}=F(),[s,M]=a.useState(),[p,c]=a.useState(!1),[b,i]=a.useState(null),[I,j]=a.useState(!1),[$,H]=a.useState(null),[V,T]=a.useState(null),[N,u]=a.useState(""),[E,k]=a.useState(""),[l,n]=a.useState(!1);X("Holding Details");const y=t=>/^[0-9]{10}$/.test(t),f=()=>{j(!1),c(!0),C.post(v,{propertyId:x},z()).then(function(t){var o,w;(o=t==null?void 0:t.data)!=null&&o.status?(M((w=t==null?void 0:t.data)==null?void 0:w.data),c(!1)):j(!0)}).catch(function(t){j(!0),c(!1)})},g=()=>{const t={module:1};C.post(B,t,z()).then(function(o){var w;i((w=o==null?void 0:o.data)==null?void 0:w.data)}).catch(function(o){})};if(a.useEffect(()=>{f(),g()},[]),p)return e.jsx(e.Fragment,{children:e.jsx(J,{})});if(I)return e.jsx(Q,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"});const S=(t,o,w,W)=>{H(t),T(o),u(w),k(W),n(!0)},A=async()=>{if(!y(N)){alert("Invalid mobile number");return}c(!0);const t={propertyId:x,ownerId:$,mobileNo:N};C.post(O,t,z()).then(function(o){n(!1),c(!1)}).catch(function(o){c(!1)})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full overflow-x-auto",children:e.jsxs("div",{className:"col-span-12 rounded-lg p-4",children:[(s==null?void 0:s.active_status)==1&&e.jsxs(e.Fragment,{children:[e.jsx(ee,{title:`${d("mainHoldingPage.holdingHeadingText.label")} - ${r(s==null?void 0:s.holding_no)} `,type:"holding",id:x,safNo:"",active:"property"}),e.jsx("div",{className:"mt-2 sm:text-right",children:e.jsx(te,{permissionData:b,safId:s==null?void 0:s.saf_id,fulldata:s})})]}),(s==null?void 0:s.active_status)==0&&e.jsx("div",{className:"pl-4",children:e.jsxs("span",{className:"bg-red-500 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:[e.jsx(L,{className:"inline"})," ",d("mainHoldingPage.holdingDisableText.label")]})}),(s==null?void 0:s.active_status)==3&&e.jsx("div",{className:"pl-4",children:e.jsxs("span",{className:"bg-orange-500 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:[e.jsx(L,{className:"inline"})," SAF Is Applied Against This Holding And Process Fee Payment Is Pending"]})}),e.jsxs("div",{className:"p-2 md:p-4",children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e.jsx(h,{className:"inline"})," ",d("mainHoldingPage.holdingBasicSubHeadingText.label")," "]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4  ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.property_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyNo.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.holding_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.holdingNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.zone_name)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[d("mainHoldingPage.propertyZone.label")," "]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.ward_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.holdingOldWardNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.land_occupation_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainNewAssessmentPage.dateOfPurchase.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.ownership_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.holdingOwnershipType.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.property_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.holdingPropertyType.label")})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4  ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between mt-1",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.holding_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.holdingResidentialType.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.assessment_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainSearchapplicationPage.assessmentType.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.categoryType)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Category"})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:(s==null?void 0:s.prop_type_mstr_id)==4&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.vacant_land_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Plot Category"})]})}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]}),(s==null?void 0:s.apartment_code)&&e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[r(s==null?void 0:s.apartment_name)," , ",r(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.holdingApartmentNm.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[r(s==null?void 0:s.apartment_code)," , ",r(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.holdingApartmentCode.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(h,{className:"inline"})," ",d("mainHoldingPage.holdingPropertySubHeadingText.label")]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-10 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.khata_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainNewAssessmentPage.KhataNo.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:r(s==null?void 0:s.plot_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyPlotNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:r(s==null?void 0:s.village_mauja_name)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyVillageMaujaName.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.area_of_plot)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyPlotArea.label")})]})]}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[r(s==null?void 0:s.prop_address)," , ",r(s==null?void 0:s.prop_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertAddress.label")})]})}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.corr_address)=="NA"&&r((s==null?void 0:s.prop_address)!="NA")?"Same as property address":e.jsxs(e.Fragment,{children:[r(s==null?void 0:s.corr_address)=="NA"&&r(s==null?void 0:s.corr_address)=="NA"?"NA":e.jsxs(e.Fragment,{children:[r(s==null?void 0:s.corr_address),", ",r(s==null?void 0:s.corr_state)]})," "]})}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyCorrespondingAddress.label")})]})}),e.jsx("div",{})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-6",children:[e.jsx(h,{className:"inline"})," ",d("mainHoldingPage.holdingOwnerSubHeadingText.label")]}),e.jsx("div",{className:"  mt-2 bg-white rounded-lg shadow-xl p-4 overflow-x-auto",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white p-4 overflow-x-auto",children:[e.jsx("thead",{className:"font-bold text-left text-sm border-b text-gray-800 bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerName.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainNewAssessmentPage.ownerNameMarathi.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerGender.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerDOB.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:"Bhogatdar/ Occupant Name"}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:"Bhogatdar/ Occupant Name Marathi"}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerMobileNum.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerAadharNumber.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerPan.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerEmail.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerArmedDetail.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:d("mainHoldingPage.holdingOwnerPhysicalHealth.label")}),e.jsx("th",{className:"px-2 py-3    text-xs capitalize text-left",children:"Action"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(_=s==null?void 0:s.owners)==null?void 0:_.map(t=>e.jsxs("tr",{className:"bg-white   border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:"#"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.owner_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.owner_name_marathi)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.gender)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:m(t==null?void 0:t.dob)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.guardian_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.guardian_name_marathi)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.mobile_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.aadhar_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.pan_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.email)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.is_armed_force)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.is_specially_abled)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:e.jsx("button",{className:"bg-blue-500 text-white px-2 hover:bg-blue-700 py-1 rounded-md cursor-pointer",onClick:()=>S(t==null?void 0:t.id,t==null?void 0:t.propertyId,t==null?void 0:t.mobile_no,t==null?void 0:t.gender),children:"Edit"})})]}))})})]})}),l&&e.jsx("div",{className:"modal fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50",children:e.jsxs("div",{className:"modal-content bg-white w-1/2 p-4 rounded-md shadow-md border-4 border-blue-600 ",children:[e.jsx("span",{className:"absolute -mt-14 right-1/4 bg-red-500 text-white cursor-pointer w-auto h-auto px-2 text-center py-0 text-xl rounded-full",onClick:()=>n(!1),children:"×"}),e.jsx("label",{className:"text-lg font-semibold mb-2",children:"Update Mobile No."}),e.jsx("input",{type:"text",value:N,onChange:t=>u(t.target.value),className:`border-blue-400 border p-2 w-full mb-4 ${y(N)?"border-green-500":"border-red-500"}`}),e.jsx("button",{className:"bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600",onClick:A,children:"Save Changes"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(h,{className:"inline"})," ",d("mainHoldingPage.holdingElectrictySubHeadingText.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-10 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.elect_consumer_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.electricityConnectionNum.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:r(s==null?void 0:s.elect_acc_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.elstricityAccountNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:r(s==null?void 0:s.elect_bind_book_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.electricityBindNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:r(s==null?void 0:s.elect_cons_category)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.electricityConsumerCateogry.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(h,{className:"inline"})," ",d("mainHoldingPage.holdingBuildingHeading.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.building_plan_approval_no)||"NO"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.buildingApprovalNumber.label")})]}),(s==null?void 0:s.building_plan_approval_no)&&e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:m(s==null?void 0:s.building_plan_approval_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.buildingApprovalDate.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.building_plan_completion_no)||"NO"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Building Complition Number"})]}),(s==null?void 0:s.building_plan_completion_no)!=""&&e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-md",children:m(s==null?void 0:s.building_plan_completion_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:"Building Complition Date"})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(h,{className:"inline"})," ",d("mainHoldingPage.holdingWaterSubHeading.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.water_conn_no)||"NO"}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[d("mainHoldingPage.waterConsumerNum.label"),"."]})]}),(s==null?void 0:s.water_conn_no)&&e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:m(s==null?void 0:s.water_conn_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.waterConsumerDate.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-6 ",children:[e.jsx(h,{className:"inline"})," ",d("mainHoldingPage.holdingFloorDetailSubHeadingText.label")]}),e.jsx("div",{className:"  mt-2 bg-white rounded-lg shadow-xl p-4 overflow-x-auto",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white  ",children:[e.jsx("thead",{className:"font-bold text-left   text-gray-800 text-xs bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[d("mainHoldingPage.holdingFloor.label")," "]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:d("mainHoldingPage.holdingFloorUsageType.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:d("mainHoldingPage.holdingFloorOccupancyType.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:d("mainHoldingPage.holdingFloorConstTyp.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:d("mainHoldingPage.holdingFloorBuiltArea.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:d("mainHoldingPage.holdingFloorFromDate.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:d("mainHoldingPage.holdingFloorUptoDate.label")})]})}),e.jsx("tbody",{className:"text-sm",children:(P=s==null?void 0:s.floors)==null?void 0:P.map((t,o)=>e.jsxs("tr",{className:"bg-white   border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:o+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.floor_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.usage_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.occupancy_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.construction_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r(t==null?void 0:t.builtup_area)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:m(t==null?void 0:t.date_from)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:m(t==null?void 0:t.date_upto)})]}))})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(h,{className:"inline"})," ",d("mainHoldingPage.holdingAdditionalDetailsSubHeading.label")]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:s!=null&&s.is_mobile_tower?"Yes":"No"}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[" ",d("mainHoldingPage.propertyMobileTower.label")]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[s!=null&&s.is_hoarding_board?"Yes":"No"," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:s!=null&&s.is_petrol_pump?"Yes":"No"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:s!=null&&s.is_water_harvesting?"Yes":"No"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:d("mainHoldingPage.propertyRainwaterHarvest.label")})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&R(s==null?void 0:s.tower_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&`${d("mainHoldingPage.mobileTowerArea.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&R(s==null?void 0:s.hoarding_area)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&`${d("mainHoldingPage.hoardingArea.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&R(s==null?void 0:s.under_ground_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&`${d("mainHoldingPage.petrolPumpArea.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_water_harvesting)&&m(s==null?void 0:s.rwh_date_from)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_water_harvesting)&&`${d("mainHoldingPage.rainwaterHarvestingConstructionDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&m(s==null?void 0:s.tower_installation_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&`${d("mainHoldingPage.mobileTowerInstallationDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&m(s==null?void 0:s.hoarding_installation_date)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&`${d("mainHoldingPage.hoardingInstallationDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&m(s==null?void 0:s.petrol_pump_completion_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&`${d("mainHoldingPage.petrolPumpConstructionDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]})]})]})]})}),e.jsx("div",{className:"w-full h-60"})]})}export{xe as default};