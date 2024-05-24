import{x as v,l as a,v as A,m as p,z as S,W,k as r,o as w,j as s,G as P,K as _,M as l,q as L}from"./index-e6cc12e6.js";import{W as M}from"./WaterTopButtons-9d75f1a3.js";function T(z){const{t}=v(),[x,n]=a.useState(!1),[e,i]=a.useState(),[m,j]=a.useState(0),[o,h]=a.useState(!0),[N,b]=a.useState(0);a.useState();const{id:c}=A();console.log("param",c),p(),S(`${t("tranWaterApplicationSearchPage.waterConsumerDetailsLabel.label")}`);const{api_waterApprovedApplicationDetails:g,header:f}=W(),y=()=>{n(!0),L.post(g,{applicationId:c},f).then(function(d){console.log("water Approved Application Details",d.data.data),i(d.data.data),n(!1)}).catch(function(d){console.log("Error : water Approved Application Details",d),n(!1)})};return a.useEffect(()=>{y(),(e==null?void 0:e.connectionName)=="Fixed"&&h(!1)},[c,N]),r(w,{children:[x&&s(P,{}),s(_,{refetch:()=>b(d=>d+1),id:c,isConnectionFixed:o,openMeterModal:m}),s(M,{active:"consumer",consumerNo:e==null?void 0:e.consumer_no}),s("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:r("div",{className:"col-span-12 rounded-lg p-4",children:[r("div",{className:"p-4",children:[r("div",{className:"",children:[r("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[s(l,{className:"inline"})," ",t("tranWaterApplicationSearchPage.basicDetailsLabel.label")]}),s("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:r("div",{className:"flex space-x-5 pl-4 ",children:[r("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-sm",children:e!=null&&e.folio_no?e==null?void 0:e.folio_no:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:t("tranWaterApplicationSearchPage.propertyNo.label")})]}),r("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.consumer_no?e==null?void 0:e.consumer_no:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:t("tranWaterApplicationSearchPage.consumerNoLabel.label")})]}),r("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.tab_size?e==null?void 0:e.tab_size:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:t("tranWaterApplicationSearchPage.tapsize.label")})]}),r("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-md",children:e!=null&&e.cycle?e==null?void 0:e.cycle:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:t("tranWaterApplicationSearchPage.cycle.label")})]}),r("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-md",children:(e==null?void 0:e.category)=="General"?"Domestic (R)":e==null?void 0:e.category}),s("div",{className:"text-gray-500 text-xs",children:t("tranWaterApplicationSearchPage.category.label")})]}),r("div",{className:"flex-1",children:[s("div",{className:"font-semibold text-md",children:e!=null&&e.property_type?e==null?void 0:e.property_type:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:t("tranWaterApplicationSearchPage.propertytype.label")})]})]})})]}),r("h1",{className:"px-1 font-semibold font-serif mt-10 text-gray-500",children:[s(l,{className:"inline"})," ",t("tranWaterApplicationSearchPage.propertyAddressDetailsLabel.label")]}),r("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:[r("div",{className:"flex space-x-10 pl-4 ",children:[r("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.address?e==null?void 0:e.address:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:t("tranWaterApplicationSearchPage.addressLabel.label")})]}),r("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.zone_name?e==null?void 0:e.zone_name:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:t("tranWaterApplicationSearchPage.zonelabel.label")})]}),r("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.ward_number?e==null?void 0:e.ward_number:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:t("tranWaterApplicationSearchPage.wardNoLabel.label")})]}),r("div",{className:"flex-1",children:[s("div",{className:"font-bold text-sm",children:e!=null&&e.landmark?e==null?void 0:e.landmark:"N/A"}),s("div",{className:"text-gray-500 text-xs",children:t("tranWaterApplicationSearchPage.landmark.label")})]})]}),s("div",{className:"flex space-x-10  pl-4 mt-4"}),s("div",{})]}),r("div",{className:"mt-10",children:[r("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[s(l,{className:"inline"})," ",t("tranWaterApplicationSearchPage.ownerDetailsLabel.label")]}),r("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[s("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:r("tr",{children:[s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:t("tranWaterApplicationSearchPage.ownerNameLabel.label")}),s("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:t("tranWaterApplicationSearchPage.guardianNameLabel.label")}),r("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:[" ",t("tranWaterApplicationSearchPage.mobileNoLabel.label")]}),r("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:[t("tranWaterApplicationSearchPage.emailLabel.label")," "]})]})}),s("tbody",{className:"text-sm",children:r("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:"1"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:(e==null?void 0:e.applicant_name)||"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:(e==null?void 0:e.guardian_name)||"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:(e==null?void 0:e.mobile_no)||"N/A"}),s("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:(e==null?void 0:e.email)||"N/A"})]})})]})]})]}),s("div",{className:"flex justify-end"})]})}),s("div",{className:"w-full h-60"})]})}export{T as default};
