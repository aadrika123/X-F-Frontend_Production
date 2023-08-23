import{t as m,r as t,u as j,a as f,aK as g,j as s,o as i,aA as n,A as y}from"./index-adea03ed.js";import{W as v}from"./WaterTopButtons-8a82e54f.js";function L(_){var l;const{t:d}=m(),[c,x]=t.useState(!1),[e,o]=t.useState(),{id:a}=j();console.log("param",a),f();const{api_waterApprovedApplicationDetails:h,header:b}=g(),N=()=>{x(!0),y.post(h,{id:a},b).then(function(r){console.log("water Approved Application Details",r.data.data),o(r.data.data),x(!1)}).catch(function(r){console.log("Error : water Approved Application Details",r),x(!1)})};return t.useEffect(()=>{N()},[a]),s.jsxs(s.Fragment,{children:[c&&s.jsx(i,{}),s.jsx(v,{active:"consumer",consumerNo:e==null?void 0:e.consumer_no}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:s.jsx("div",{className:"col-span-12 rounded-lg",children:s.jsxs("div",{className:"",children:[s.jsxs("div",{className:"",children:[s.jsxs("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[s.jsx(n,{className:"inline"})," ",d("tranWaterDashboardIndex.basicDetailsLabel.label")]}),s.jsx("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-1 md:p-4",children:s.jsxs("div",{className:"flex flex-wrap gap-5 pl-4 ",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-sm",children:e!=null&&e.ulb_name?e==null?void 0:e.ulb_name:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:d("tranWaterDashboardIndex.ulbNameLabel.label")})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:e!=null&&e.ward_name?e==null?void 0:e.ward_name:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:d("tranWaterDashboardIndex.wardNoLabel.label")})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:e!=null&&e.owner_char_type?e==null?void 0:e.owner_char_type:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:d("tranWaterDashboardIndex.ownershipTypeLabel.label")})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:e!=null&&e.property_type?e==null?void 0:e.property_type:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:d("tranWaterDashboardIndex.pipelineTypeLabel.label")})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:e!=null&&e.pipeline_type?e==null?void 0:e.pipeline_type:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:d("tranWaterDashboardIndex.applicationNoLabel.label")})]})]})})]}),s.jsxs("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[s.jsx(n,{className:"inline"})," ",d("tranWaterDashboardIndex.propertyAddressDetailsLabel.label")]}),s.jsxs("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[s.jsxs("div",{className:"flex flex-wrap gap-10 pl-4 ",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:e!=null&&e.connection_through?e==null?void 0:e.connection_through:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:d("tranWaterDashboardIndex.connectionThroughLabel.label")})]}),(e==null?void 0:e.connection_through)=="SAF"?s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:e!=null&&e.saf_no?e==null?void 0:e.saf_no:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:d("tranWaterDashboardIndex.safNoLabel.label")})]}):s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:e!=null&&e.holding_no?e==null?void 0:e.holding_no:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:d("tranWaterDashboardIndex.holdingNoLabel.label")})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:e!=null&&e.connection_type?e==null?void 0:e.connection_type:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:d("tranWaterDashboardIndex.connectionTypeLabel.label")})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:e!=null&&e.area_sqft?e==null?void 0:e.area_sqft:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:d("tranWaterDashboardIndex.areaLabel.label")})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:e!=null&&e.category?e==null?void 0:e.category:"N/A"}),s.jsx("div",{className:"text-gray-500 text-xs",children:d("tranWaterDashboardIndex.categoryLabel.label")})]})]}),s.jsx("div",{className:"flex space-x-10  pl-4 mt-4",children:s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"font-bold text-sm",children:[e!=null&&e.address?e==null?void 0:e.address:"N/A"," , ",e==null?void 0:e.prop_state]}),s.jsx("div",{className:"text-gray-500 text-xs",children:d("tranWaterDashboardIndex.propertyAddressDetailsLabel.label")})]})})]}),s.jsxs("div",{className:"mt-10",children:[s.jsxs("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[s.jsx(n,{className:"inline"})," ",d("tranWaterDashboardIndex.ownerDetailsLabel.label")]}),s.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[s.jsx("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:s.jsxs("tr",{children:[s.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:d("tranWaterDashboardIndex.ownerNameLabel.label")}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:d("tranWaterDashboardIndex.guardianNameLabel.label")}),s.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:d("tranWaterDashboardIndex.mobileNoLabel.label")}),s.jsxs("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:[d("tranWaterDashboardIndex.emailLabel.label")," "]})]})}),s.jsx("tbody",{className:"text-sm",children:s.jsx(s.Fragment,{children:(l=e==null?void 0:e.ownerDetails)==null?void 0:l.map(r=>s.jsxs("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[s.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:"#"}),s.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.applicant_name?r==null?void 0:r.applicant_name:"N/A"}),s.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.guardian_name?r==null?void 0:r.guardian_name:"N/A"}),s.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.mobile_no?r==null?void 0:r.mobile_no:"N/A"}),s.jsx("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:r!=null&&r.email?r==null?void 0:r.email:"N/A"})]}))})})]})]})]})})}),s.jsx("div",{className:"w-full h-10"})]})}export{L as default};
