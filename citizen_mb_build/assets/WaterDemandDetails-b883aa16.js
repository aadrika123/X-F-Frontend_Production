import{k as A,r as a,j as d,F as l,b as t,E as h}from"./index-aa793834.js";import{W as _}from"./WaterApiList-5aa50fab.js";import{C as i}from"./ConsumerButtons-4d0b43b9.js";import{h as N}from"./moment-fbc5633a.js";const S=()=>{var o;const{id:s}=A(),[r,f]=a.useState(),[n,m]=a.useState(),[w,c]=a.useState(!1),{api_waterApprovedApplicationDetails:y,api_waterListDemand:b,header:x}=_(),g=()=>{c(!0),h.post(y,{id:s},x).then(function(e){console.log("water Approved Application Details",e.data.data),f(e.data.data),c(!1)}).catch(function(e){console.log("Error : water Approved Application Details",e),c(!1)})},p=()=>{h.post(b,{ConsumerId:s},x).then(e=>{console.log("Fetched Water Demand List",e.data.data),m(e.data.data)}).catch(e=>{console.log("Exception while fetching Water Demand",e)})};return a.useEffect(()=>{g(),p()},[s]),d(l,{children:[t(i,{active:"demand"}),d("div",{className:"mb-14",children:[t("div",{className:" mt-2 border bg-white rounded-lg shadow-xl p-4",children:d("div",{className:"space-y-4 pl-4",children:[d("div",{className:"",children:[t("div",{className:"font-semibold text-sm",children:r!=null&&r.ulb_name?r==null?void 0:r.ulb_name:"N/A"}),t("div",{className:"text-gray-600 text-xs",children:"ULB Name"})]}),d("div",{className:"flex space-x-4 ",children:[d("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-sm",children:r!=null&&r.consumer_no?r==null?void 0:r.consumer_no:"N/A"}),t("div",{className:"text-gray-600 text-xs",children:"Consumer No"})]}),(r==null?void 0:r.connection_through)=="SAF"?d("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-sm",children:r!=null&&r.saf_no?r==null?void 0:r.saf_no:"N/A"}),t("div",{className:"text-gray-600 text-xs",children:"SAF No"})]}):d("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-sm",children:r!=null&&r.holding_no?r==null?void 0:r.holding_no:"N/A"}),t("div",{className:"text-gray-600 text-xs",children:"Holding No"})]})]}),d("div",{className:"flex space-x-4 ",children:[d("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:r!=null&&r.ward_name?r==null?void 0:r.ward_name:"N/A"}),t("div",{className:"text-gray-600 text-xs",children:"Ward No."})]}),d("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:r!=null&&r.area_sqft?r==null?void 0:r.area_sqft:"N/A"}),t("div",{className:"text-gray-600 text-xs",children:"Area (Sqft.)"})]})]})]})}),d("div",{className:"mx-2 overflow-x-auto",children:[t("h1",{className:"px-1 mt-3 text-center font-semibold text-gray-700",children:" Demand Details"}),t("p",{className:"border-b border-gray-700 mx-5"}),d("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[t("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:d("tr",{children:[t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand From"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Upto"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Amount"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Penalty"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Connection Type"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Payable Amount "})]})}),t("tbody",{className:"text-sm",children:t(l,{children:(o=n==null?void 0:n.consumerDemands)==null?void 0:o.map((e,v)=>d("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:v+1}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:e!=null&&e.demand_from?N(e==null?void 0:e.demand_from,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:e!=null&&e.demand_upto?N(e==null?void 0:e.demand_upto,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:e!=null&&e.balance_amount?e==null?void 0:e.balance_amount:"N/A"}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:e!=null&&e.penalty?e==null?void 0:e.penalty:"N/A"}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:e!=null&&e.connection_type?e==null?void 0:e.connection_type:"N/A"}),t("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:e!=null&&e.amount?"₹ "+(e==null?void 0:e.amount):"N/A"})]}))})})]})]})]})]})};export{S as default};
