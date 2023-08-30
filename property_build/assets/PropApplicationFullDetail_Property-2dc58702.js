import{u as z,r as c,a as O,bv as B,j as e,p as $,br as T,A as P,N as k,w as I,k as R,B as M,S as E,n as l,c5 as L,M as f,i as m,bP as V,P as U}from"./index-54024790.js";import{T as W}from"./TopTabs-d17c80af.js";import{C as Y}from"./CitizenApplyApiList-3c6a00ac.js";function Z(r){var h;const{t:o}=z(),[N,v]=c.useState(null),[s,u]=c.useState(!1),[j,g]=c.useState(!1),w=O(),{id:i}=B(),{checkFormStatus:_}=Y(),b=(t,d)=>{v(d),u(t)},H=(t,d)=>{if(!["Re Assessment","Mutation","Bifurcation","Concession","Harvesting","Objection"].includes(t)){w(`${d}/${i}`);return}let n;t=="Re Assessment"&&(n={type:"Reassesment",propertyId:i}),t=="Mutation"&&(n={type:"Mutation",propertyId:i}),t=="Bifurcation"&&(n={type:"Bifurcation",propertyId:i}),t=="Concession"&&(n={type:"Concession",propertyId:i}),t=="Harvesting"&&(n={type:"Harvesting",propertyId:i}),t=="Objection"&&(n={type:"Objection",propertyId:i}),g(!0),P.post(_,n,k()).then(x=>{var p,A,S,C;console.log("form status => ",x),(A=(p=x==null?void 0:x.data)==null?void 0:p.data)!=null&&A.inWorkflow?b(!0,(C=(S=x==null?void 0:x.data)==null?void 0:S.data)==null?void 0:C.message):w(`${d}/${i}`)}).catch(x=>{console.log("error getting form status => ",x)}).finally(()=>g(!1))},y=t=>{if(!["Re Assessment","Mutation","Bifurcation","Concession","Harvesting","Objection","View Saf","Comparitive Demand","Demand Receipt"].includes(t))return null;if(t=="Re Assessment")return o("mainHoldingPage.holdingReAssessment.label");if(t=="Mutation")return o("mainHoldingPage.holdingMutation.label");if(t=="Bifurcation")return o("mainHoldingPage.holdingBifurcation.label");if(t=="Concession")return o("mainHoldingPage.holdingConcession.label");if(t=="Harvesting")return o("mainHoldingPage.holdingHarvesting.label");if(t=="View Saf")return o("mainHoldingPage.holdingViewSaf.label");if(t=="Comparitive Demand")return o("mainHoldingPage.holdingComparitiveDemand.label");if(t=="Demand Receipt")return o("mainHoldingPage.holdingDemandReceipt.label");if(t=="Objection")return o("mainHoldingPage.holdingObjection.label")};return c.useEffect(()=>{y()},[window.localStorage.lang]),e.jsxs(e.Fragment,{children:[s&&e.jsx($,{activateBottomErrorCard:b,errorTitle:N}),j&&e.jsx(T,{color:"#818cf8"}),!j&&e.jsx("div",{className:"flex gap-y-4 flex-wrap justify-center flex-row md:py-2 w-full items-center sm:justify-end",children:(h=r==null?void 0:r.permissionData)==null?void 0:h.map((t,d)=>e.jsx("button",{className:`cypress_button${d} mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm text-sm md:text-base hover:bg-indigo-500 hover:text-white`,onClick:()=>{(t==null?void 0:t.action_name)=="View Saf"?w(`${t==null?void 0:t.endpoint}/${r==null?void 0:r.safId}`):H(t==null?void 0:t.action_name,t==null?void 0:t.endpoint)},children:y(t==null?void 0:t.lebel)}))})]})}function J(){var h,t;const{t:r}=z(),{id:o}=B();console.log("param",o),O(),I(),console.log("last url.......",window.history.back);const{api_getPropHoldingDetailsById:N}=V(),{api_getPermissionByUser:v}=U(),[s,u]=c.useState(),[j,g]=c.useState(!1),[w,i]=c.useState(null),[_,b]=c.useState(!1);R("Holding Details");const H=()=>{b(!1),g(!0),P.post(N,{propertyId:o},k()).then(function(d){var a,n,x;console.log("view prop prop full details at property ...",(a=d==null?void 0:d.data)==null?void 0:a.data),(n=d==null?void 0:d.data)!=null&&n.status?(u((x=d==null?void 0:d.data)==null?void 0:x.data),g(!1)):b(!0)}).catch(function(d){console.log("==2 details by id error...",d),b(!0),g(!1)})},y=()=>{const d={module:1};console.log("before permission fetch...",d),P.post(v,d,k()).then(function(a){var n,x;console.log("after permission response ...",(n=a==null?void 0:a.data)==null?void 0:n.data),i((x=a==null?void 0:a.data)==null?void 0:x.data)}).catch(function(a){console.log("after permission error...",a)})};return c.useEffect(()=>{H(),y()},[]),j?e.jsx(e.Fragment,{children:e.jsx(M,{})}):_?e.jsx(E,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full overflow-x-auto",children:e.jsxs("div",{className:"col-span-12 rounded-lg p-4",children:[(s==null?void 0:s.active_status)==1&&e.jsxs(e.Fragment,{children:[e.jsx(W,{title:`${r("mainHoldingPage.holdingHeadingText.label")} - ${l(s==null?void 0:s.new_holding_no)} `,type:"holding",id:o,safNo:"",active:"property"}),e.jsx("div",{className:"mt-2 sm:text-right",children:e.jsx(Z,{permissionData:w,safId:s==null?void 0:s.saf_id})})]}),(s==null?void 0:s.active_status)==0&&e.jsx("div",{className:"pl-4",children:e.jsxs("span",{className:"bg-red-500 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:[e.jsx(L,{className:"inline"})," ",r("mainHoldingPage.holdingDisableText.label")]})}),e.jsxs("div",{className:"p-2 md:p-4",children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e.jsx(f,{className:"inline"})," ",r("mainHoldingPage.holdingBasicSubHeadingText.label")]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4  ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.new_holding_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.holdingNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.old_ward_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.holdingOldWardNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.ownership_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.holdingOwnershipType.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.property_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.holdingPropertyType.label")})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4  ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.holding_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.holdingResidentialType.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]}),(s==null?void 0:s.apartment_code)&&e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[l(s==null?void 0:s.apartment_name)," , ",l(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.holdingApartmentNm.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[l(s==null?void 0:s.apartment_code)," , ",l(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.holdingApartmentCode.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(f,{className:"inline"})," ",r("mainHoldingPage.holdingPropertySubHeadingText.label")]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-10 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.khata_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyKhataNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.plot_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyPlotNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.village_mauja_name)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyVillageMaujaName.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.area_of_plot)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyPlotArea.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.road_width)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyRoadWidth.label")})]})]}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[l(s==null?void 0:s.prop_address)," , ",l(s==null?void 0:s.prop_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertAddress.label")})]})}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.corr_address)=="NA"&&l((s==null?void 0:s.prop_address)!="NA")?"Same as property address":e.jsxs(e.Fragment,{children:[l(s==null?void 0:s.corr_address)=="NA"&&l(s==null?void 0:s.corr_address)=="NA"?"NA":e.jsxs(e.Fragment,{children:[l(s==null?void 0:s.corr_address),", ",l(s==null?void 0:s.corr_state)]})," "]})}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyCorrespondingAddress.label")})]})}),e.jsx("div",{})]}),e.jsxs("div",{className:"mt-10 md:w-auto w-[100vw] overflow-x-auto pr-4",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e.jsx(f,{className:"inline"})," ",r("mainHoldingPage.holdingOwnerSubHeadingText.label")]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerName.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerGender.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerDOB.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerGuardianName.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerRelation.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerMobileNum.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerAadharNumber.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerPan.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerEmail.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerArmedDetail.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerPhysicalHealth.label")})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(h=s==null?void 0:s.owners)==null?void 0:h.map(d=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:"#"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.owner_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.gender)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:m(d==null?void 0:d.dob)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.guardian_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.relation_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.mobile_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.aadhar_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.pan_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.email)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.is_armed_force)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.is_specially_abled)})]}))})})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(f,{className:"inline"})," ",r("mainHoldingPage.holdingElectrictySubHeadingText.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-10 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.elect_consumer_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.electricityConnectionNum.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.elect_acc_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.elstricityAccountNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.elect_bind_book_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.electricityBindNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.elect_cons_category)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.electricityConsumerCateogry.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(f,{className:"inline"})," ",r("mainHoldingPage.holdingBuildingHeading.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.building_plan_approval_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.buildingApprovalNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:m(s==null?void 0:s.building_plan_approval_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.buildingApprovalDate.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(f,{className:"inline"})," ",r("mainHoldingPage.holdingWaterSubHeading.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.water_conn_no)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[r("mainHoldingPage.waterConsumerNum.label"),"."]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:m(s==null?void 0:s.water_conn_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.waterConsumerDate.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("div",{className:"mt-10 md:w-auto w-[100vw] overflow-x-auto  pr-6",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 ",children:[e.jsx(f,{className:"inline"})," ",r("mainHoldingPage.holdingFloorDetailSubHeadingText.label")]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl",children:[e.jsx("thead",{className:"font-bold text-left border text-gray-800 text-xs bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[r("mainHoldingPage.holdingFloor.label")," "]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingFloorUsageType.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingFloorOccupancyType.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingFloorConstTyp.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingFloorBuiltArea.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingFloorFromDate.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingFloorUptoDate.label")})]})}),e.jsx("tbody",{className:"text-sm",children:(t=s==null?void 0:s.floors)==null?void 0:t.map((d,a)=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.floor_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.usage_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.occupancy_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.construction_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.builtup_area)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:m(d==null?void 0:d.date_from)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:m(d==null?void 0:d.date_upto)})]}))})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(f,{className:"inline"})," ",r("mainHoldingPage.holdingAdditionalDetailsSubHeading.label")]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:s!=null&&s.is_mobile_tower?"Yes":"No"}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[" ",r("mainHoldingPage.propertyMobileTower.label")]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[s!=null&&s.is_hoarding_board?"Yes":"No"," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:s!=null&&s.is_petrol_pump?"Yes":"No"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:s!=null&&s.is_water_harvesting?"Yes":"No"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyRainwaterHarvest.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.zone_mstr_id)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyZone.label")})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&nullToZero(s==null?void 0:s.tower_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&`${r("mainHoldingPage.mobileTowerArea.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&nullToZero(s==null?void 0:s.hoarding_area)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&`${r("mainHoldingPage.hoardingArea.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&nullToZero(s==null?void 0:s.under_ground_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&`${r("mainHoldingPage.petrolPumpArea.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_water_harvesting)&&m(s==null?void 0:s.rwh_date_from)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_water_harvesting)&&`${r("mainHoldingPage.rainwaterHarvestingConstructionDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&m(s==null?void 0:s.tower_installation_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&`${r("mainHoldingPage.mobileTowerInstallationDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&m(s==null?void 0:s.hoarding_installation_date)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&`${r("mainHoldingPage.hoardingInstallationDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&m(s==null?void 0:s.petrol_pump_completion_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&`${r("mainHoldingPage.petrolPumpConstructionDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]})]})]})]})}),e.jsx("div",{className:"w-full h-60"})]})}export{J as default};
