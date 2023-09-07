import{r as c,x as R,u as j,a1 as k,W as q,a as n,F as z,j as t,B,z as u,f as A}from"./index-111426c8.js";import{W as I}from"./WaterTopButtons-335ce7fd.js";const O=()=>{var h,N,g,y,f,p;const[e,C]=c.useState(),[r,P]=c.useState(""),[S,o]=c.useState(!1);c.useState();const[m,T]=c.useState(!1),{id:d}=R(),l=j();k("Water Payment History");const{api_waterConsumerPaymentHistory:a,api_waterApprovedApplicationDetails:W,header:i}=q(),E=()=>{o(!0),A.post(W,{id:d},i).then(function(s){console.log("water Approved Application Details",s.data.data),C(s.data.data),o(!1)}).catch(function(s){console.log("Error : water Approved Application Details",s),o(!1)})},H=()=>{o(!0),A.post(a,{consumerId:d},i).then(function(s){s.data.status?(console.log("water payment history",s.data.data),P(s.data.data),o(!1)):(console.log("No Data Found..",s),T(s.data.message))}).catch(function(s){console.log("Error : water payment history",s),o(!1)})};return c.useEffect(()=>{E(),H()},[d]),console.log("readyMadeListData11",r),console.log("readyMadeListData?.connection",r==null?void 0:r.connection),n(z,{children:[t(I,{active:"payment",consumerNo:e==null?void 0:e.consumer_no}),t("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:n("div",{className:"col-span-12 rounded-lg p-4",children:[t("div",{className:"",children:n("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-lg p-4",children:[n("div",{className:"flex space-x-5 pl-4 ",children:[n("div",{className:"flex-1",children:[n("div",{className:"font-semibold text-md",children:[e!=null&&e.connection_type?e==null?void 0:e.connection_type:"N/A"," "]}),t("div",{className:"text-gray-500 text-xs",children:"Connection Type"})]}),n("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:e!=null&&e.ward_name?e==null?void 0:e.ward_name:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),n("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:e!=null&&e.owner_char_type?e==null?void 0:e.owner_char_type:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),n("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:e!=null&&e.property_type?e==null?void 0:e.property_type:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Property Type"})]}),n("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:e!=null&&e.rule_set?e==null?void 0:e.rule_set:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Rule Set"})]})]}),n("div",{className:"flex space-x-10  pl-4 mt-4",children:[n("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:e!=null&&e.pipeline_type?e==null?void 0:e.pipeline_type:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Pipeline Type"})]}),n("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:e!=null&&e.connection_through?e==null?void 0:e.connection_through:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Connection Through"})]}),(e==null?void 0:e.connection_through)=="SAF"?n("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:e!=null&&e.saf_no?e==null?void 0:e.saf_no:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"SAF No"})]}):n("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:e!=null&&e.holding_no?e==null?void 0:e.holding_no:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Holding No"})]}),n("div",{className:"flex-1",children:[t("div",{className:"font-semibold text-md",children:e!=null&&e.area_sqft?e==null?void 0:e.area_sqft:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Area (Sqft.)"})]}),n("div",{className:"flex-1",children:[t("div",{className:"font-bold text-sm",children:e!=null&&e.category?e==null?void 0:e.category:"N/A"}),t("div",{className:"text-gray-500 text-xs",children:"Category"})]})]})]})}),S&&t(B,{})," ",m&&t("div",{className:"text-center mt-10",children:n("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl capitalize",children:[" ",m]})}),((h=r==null?void 0:r.Consumer)==null?void 0:h.length)<=0&&((N=r==null?void 0:r.connection)==null?void 0:N.length)<=0?t("div",{className:"text-center mt-10",children:t("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl capitalize",children:" No Payments Found Yet"})}):(r==null?void 0:r.length)!=0&&t("div",{className:"mt-10 bg-white shadow-xl  rounded-lg",children:n("table",{className:"min-w-full leading-normal mt-2",children:[t("thead",{className:"font-bold text-left text-sm bg-white text-gray-900",children:n("tr",{children:[t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Transaction No"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Payment Mode"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Date"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Type"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Paid For"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount"}),t("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Action"})]})}),n("tbody",{className:"text-sm",children:[((g=r==null?void 0:r.Consumer)==null?void 0:g.length)>0&&((y=r==null?void 0:r.Consumer)==null?void 0:y.map((s,x)=>{var b,v,w,_;return n("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[t("td",{className:"px-2 py-2 text-sm text-left",children:x+1}),t("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.tran_no}),t("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.payment_mode}),t("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.tran_date}),t("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.tran_type}),n("td",{className:"px-2 py-2 text-sm text-left",children:[(v=u((b=s==null?void 0:s.demand)==null?void 0:b.demand_from))==null?void 0:v.format("MMM/yy")," - ",(_=u((w=s==null?void 0:s.demand)==null?void 0:w.demand_upto))==null?void 0:_.format("MMM/yy")]}),t("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.amount}),t("td",{className:"px-2 py-2 text-sm text-left",children:t("button",{onClick:()=>l(`/water-demand-payment-receipt/${s==null?void 0:s.tran_no}`),type:"button",className:"px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]})})),((f=r==null?void 0:r.connection)==null?void 0:f.length)>0&&((p=r==null?void 0:r.connection)==null?void 0:p.map((s,x)=>n("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[t("td",{className:"px-2 py-2 text-sm text-left",children:x+1}),n("td",{className:"px-2 py-2 text-sm text-left",children:[s==null?void 0:s.tran_no,t("span",{className:"bg-indigo-500 text-white text-xs px-2 rounded-sm ml-2",children:"Application"})]}),t("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.payment_mode}),t("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.tran_date}),t("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.tran_type}),t("td",{className:"px-2 py-2 text-sm text-left",children:"Application"}),t("td",{className:"px-2 py-2 text-sm text-left",children:s==null?void 0:s.amount}),t("td",{className:"px-2 py-2 text-sm text-left",children:t("button",{onClick:()=>l(`/water-payment-receipt/${s==null?void 0:s.tran_no}/application`),type:"button",className:"px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]})))]})]})}),t("div",{className:"w-full h-40"})]})})]})};export{O as default};