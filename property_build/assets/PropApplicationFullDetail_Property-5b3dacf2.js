import{u as p,bv as A,a as T,w as z,r as n,k as S,j as e,B as O,S as B,n as l,c7 as C,M as a,i as t,cr as g,A as h,N as j,bP as $,P as M}from"./index-30cd7655.js";import{T as E}from"./TopTabs-76873978.js";function U(){var b,w;const{t:r}=p(),{id:i}=A();console.log("param",i),T(),z(),console.log("last url.......",window.history.back);const{api_getPropHoldingDetailsById:y}=$(),{api_getPermissionByUser:N}=M(),[s,v]=n.useState(),[_,c]=n.useState(!1),[I,u]=n.useState(null),[P,f]=n.useState(!1);S("Holding Details");const H=()=>{f(!1),c(!0),h.post(y,{propertyId:i},j()).then(function(d){var x,o,m;console.log("view prop prop full details at property ...",(x=d==null?void 0:d.data)==null?void 0:x.data),(o=d==null?void 0:d.data)!=null&&o.status?(v((m=d==null?void 0:d.data)==null?void 0:m.data),c(!1)):f(!0)}).catch(function(d){console.log("==2 details by id error...",d),f(!0),c(!1)})},k=()=>{const d={module:1};console.log("before permission fetch...",d),h.post(N,d,j()).then(function(x){var o,m;console.log("after permission response ...",(o=x==null?void 0:x.data)==null?void 0:o.data),u((m=x==null?void 0:x.data)==null?void 0:m.data)}).catch(function(x){console.log("after permission error...",x)})};return n.useEffect(()=>{H(),k()},[]),_?e.jsx(e.Fragment,{children:e.jsx(O,{})}):P?e.jsx(B,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full overflow-x-auto",children:e.jsxs("div",{className:"col-span-12 rounded-lg p-4",children:[(s==null?void 0:s.active_status)==1&&e.jsx(e.Fragment,{children:e.jsx(E,{title:`${r("mainHoldingPage.holdingHeadingText.label")} - ${l(s==null?void 0:s.holding_no)} `,type:"holding",id:i,safNo:"",active:"property"})}),(s==null?void 0:s.active_status)==0&&e.jsx("div",{className:"pl-4",children:e.jsxs("span",{className:"bg-red-500 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:[e.jsx(C,{className:"inline"})," ",r("mainHoldingPage.holdingDisableText.label")]})}),e.jsxs("div",{className:"p-2 md:p-4",children:[e.jsxs("div",{className:"",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e.jsx(a,{className:"inline"})," ",r("mainHoldingPage.holdingBasicSubHeadingText.label")," "]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4  ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.property_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyNo.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.holding_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.holdingNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.zone_name)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[r("mainHoldingPage.propertyZone.label")," "]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.ward_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.holdingOldWardNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-lg",children:l(s==null?void 0:s.land_occupation_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainNewAssessmentPage.dateOfPurchase.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.ownership_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.holdingOwnershipType.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.property_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.holdingPropertyType.label")})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4  ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.holding_type)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.holdingResidentialType.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]}),(s==null?void 0:s.apartment_code)&&e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[l(s==null?void 0:s.apartment_name)," , ",l(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.holdingApartmentNm.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[l(s==null?void 0:s.apartment_code)," , ",l(s==null?void 0:s.corr_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.holdingApartmentCode.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(a,{className:"inline"})," ",r("mainHoldingPage.holdingPropertySubHeadingText.label")]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-10 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.khata_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyKhataNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.plot_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyPlotNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.village_mauja_name)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyVillageMaujaName.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.area_of_plot)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyPlotArea.label")})]})]}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:[l(s==null?void 0:s.prop_address)," , ",l(s==null?void 0:s.prop_state)]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertAddress.label")})]})}),e.jsx("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.corr_address)=="NA"&&l((s==null?void 0:s.prop_address)!="NA")?"Same as property address":e.jsxs(e.Fragment,{children:[l(s==null?void 0:s.corr_address)=="NA"&&l(s==null?void 0:s.corr_address)=="NA"?"NA":e.jsxs(e.Fragment,{children:[l(s==null?void 0:s.corr_address),", ",l(s==null?void 0:s.corr_state)]})," "]})}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyCorrespondingAddress.label")})]})}),e.jsx("div",{})]}),e.jsxs("div",{className:"mt-10 md:w-auto w-[100vw] overflow-x-auto pr-4",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e.jsx(a,{className:"inline"})," ",r("mainHoldingPage.holdingOwnerSubHeadingText.label")]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsx("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerName.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainNewAssessmentPage.ownerNameMarathi.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerGender.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerDOB.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerGuardianName.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainNewAssessmentPage.guardianNameMarathi.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerRelation.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerMobileNum.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerAadharNumber.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerPan.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerEmail.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerArmedDetail.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingOwnerPhysicalHealth.label")})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(b=s==null?void 0:s.owners)==null?void 0:b.map(d=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:"#"}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.owner_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.owner_name_marathi)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.gender)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t(d==null?void 0:d.dob)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.guardian_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.guardian_name_marathi)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.relation_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.mobile_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.aadhar_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.pan_no)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.email)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.is_armed_force)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.is_specially_abled)})]}))})})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(a,{className:"inline"})," ",r("mainHoldingPage.holdingElectrictySubHeadingText.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-10 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.elect_consumer_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.electricityConnectionNum.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.elect_acc_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.elstricityAccountNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.elect_bind_book_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.electricityBindNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.elect_cons_category)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.electricityConsumerCateogry.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(a,{className:"inline"})," ",r("mainHoldingPage.holdingBuildingHeading.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:l(s==null?void 0:s.building_plan_approval_no)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.buildingApprovalNumber.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:t(s==null?void 0:s.building_plan_approval_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.buildingApprovalDate.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[e.jsx(a,{className:"inline"})," ",r("mainHoldingPage.holdingWaterSubHeading.label")]}),e.jsx("div",{className:"py-6  mt-2 bg-white shadow-xl rounded-lg p-4",children:e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:l(s==null?void 0:s.water_conn_no)}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[r("mainHoldingPage.waterConsumerNum.label"),"."]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:t(s==null?void 0:s.water_conn_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.waterConsumerDate.label")})]}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"}),e.jsx("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between"})]})}),e.jsxs("div",{className:"mt-10 md:w-auto w-[100vw] overflow-x-auto  pr-6",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 ",children:[e.jsx(a,{className:"inline"})," ",r("mainHoldingPage.holdingFloorDetailSubHeadingText.label")]}),e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl",children:[e.jsx("thead",{className:"font-bold text-left border text-gray-800 text-xs bg-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:[r("mainHoldingPage.holdingFloor.label")," "]}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingFloorUsageType.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingFloorOccupancyType.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingFloorConstTyp.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingFloorBuiltArea.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingFloorFromDate.label")}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:r("mainHoldingPage.holdingFloorUptoDate.label")})]})}),e.jsx("tbody",{className:"text-sm",children:(w=s==null?void 0:s.floors)==null?void 0:w.map((d,x)=>e.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.floor_name)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.usage_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.occupancy_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.construction_type)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:l(d==null?void 0:d.builtup_area)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t(d==null?void 0:d.date_from)}),e.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t(d==null?void 0:d.date_upto)})]}))})]})]}),e.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e.jsx(a,{className:"inline"})," ",r("mainHoldingPage.holdingAdditionalDetailsSubHeading.label")]}),e.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:s!=null&&s.is_mobile_tower?"Yes":"No"}),e.jsxs("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:[" ",r("mainHoldingPage.propertyMobileTower.label")]})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[s!=null&&s.is_hoarding_board?"Yes":"No"," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:s!=null&&s.is_petrol_pump?"Yes":"No"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:s!=null&&s.is_water_harvesting?"Yes":"No"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:r("mainHoldingPage.propertyRainwaterHarvest.label")})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&g(s==null?void 0:s.tower_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&`${r("mainHoldingPage.mobileTowerArea.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&g(s==null?void 0:s.hoarding_area)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&`${r("mainHoldingPage.hoardingArea.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&g(s==null?void 0:s.under_ground_area)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&`${r("mainHoldingPage.petrolPumpArea.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_water_harvesting)&&t(s==null?void 0:s.rwh_date_from)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_water_harvesting)&&`${r("mainHoldingPage.rainwaterHarvestingConstructionDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]}),e.jsxs("div",{className:"flex md:flex-row flex-col gap-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm",children:(s==null?void 0:s.is_mobile_tower)&&t(s==null?void 0:s.tower_installation_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_mobile_tower)&&`${r("mainHoldingPage.mobileTowerInstallationDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsxs("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:[(s==null?void 0:s.is_hoarding_board)&&t(s==null?void 0:s.hoarding_installation_date)," "]}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_hoarding_board)&&`${r("mainHoldingPage.hoardingInstallationDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-semibold text-md",children:(s==null?void 0:s.is_petrol_pump)&&t(s==null?void 0:s.petrol_pump_completion_date)}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs",children:(s==null?void 0:s.is_petrol_pump)&&`${r("mainHoldingPage.petrolPumpConstructionDate.label")}`})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]}),e.jsxs("div",{className:"md:flex-1 md:block flex flex-row-reverse justify-between",children:[e.jsx("div",{className:"md:w-auto w-[50%] font-bold text-sm"}),e.jsx("div",{className:"md:w-auto w-[50%] text-gray-500 text-xs"})]})]})]})]})]})}),e.jsx("div",{className:"w-full h-60"})]})}export{U as default};