import{r as o,u as M,a as W,j as e,B as q,S as O,n as l,ae as Q,bT as C,by as L,A as Z,b as J,P as K}from"./index-7885ada7.js";function D(X){var h,g,j,m,a,f,u,T,v,w,N,k,_,S,F,V,A,E;const[z,t]=o.useState(!1);o.useState();const[B,p]=o.useState(!1),[G,b]=o.useState(""),[s,P]=o.useState(),{id:U,type:n}=M(),{api_getPropHoldingDetailsById:Y,api_getTcComparisonData:H}=K();let y;n=="agency"?y="Agency TC Comparison":y="ULB TC Comparison",W(y);const I=()=>{},R=()=>{t(!0),p(!1);let r={verificationId:U};Z.post(H,r,J()).then(function(c){var d,i,x;(d=c==null?void 0:c.data)!=null&&d.status?P((i=c==null?void 0:c.data)==null?void 0:i.data):(p(!0),b((x=c==null?void 0:c.data)==null?void 0:x.message)),t(!1)}).catch(function(c){b("Server error! Please try again later."),p(!0),t(!1)})};return o.useEffect(()=>{R()},[]),z?e.jsx(e.Fragment,{children:e.jsx(q,{})}):B?e.jsx(O,{title:"Server is busy",desc:G,buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:" text-lg pb-4 md:py-4 text-gray-500",children:[e.jsxs("span",{children:["Verified By : ",e.jsx("span",{className:"font-semibold text-gray-800",children:l((h=s==null?void 0:s.employee_details)==null?void 0:h.user_name)})," "]}),e.jsxs("span",{className:"float-right",children:["Verification Date : ",e.jsx("span",{className:"font-semibold text-gray-800",children:Q((g=s==null?void 0:s.employee_details)==null?void 0:g.date)})]})," "]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{className:"py-4 rounded-lg shadow-lg p-4",children:e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 md:items-center justify-center",children:[e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-semibold text-md",children:l((j=s==null?void 0:s.saf_details)==null?void 0:j.assessment_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Assessment Type"})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:l((m=s==null?void 0:s.saf_details)==null?void 0:m.saf_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"SAF No."})]}),(s==null?void 0:s.pt_no)==""?e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:l((a=s==null?void 0:s.saf_details)==null?void 0:a.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No."})]}):e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:l((f=s==null?void 0:s.saf_details)==null?void 0:f.plot_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"PT No."})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsxs("div",{className:"font-semibold text-md",children:[l((u=s==null?void 0:s.saf_details)==null?void 0:u.holding_type)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding Type"})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:l((T=s==null?void 0:s.saf_details)==null?void 0:T.zone_mstr_id)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Zone"})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:l((v=s==null?void 0:s.saf_details)==null?void 0:v.prop_address)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Address"})]})]})})}),e.jsx("div",{className:" font-bold text-xl pb-4 md:py-4 text-gray-400",children:"Verification Details"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3",children:"#"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Particular"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Self-Assessed"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Check"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Verification"})]})}),e.jsx("tbody",{children:(w=s==null?void 0:s.property_comparison)==null?void 0:w.map((r,c)=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:c+1}),e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.key)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.according_application)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:r!=null&&r.values?e.jsx(C,{className:"inline text-green-500 text-3xl ml-3"}):e.jsx(L,{className:"inline text-red-500 text-5xl"})}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.according_verification)})]}))})]})})}),e.jsx("div",{className:" font-bold text-xl pb-4 md:py-4 text-gray-400",children:"Floor Verified Details"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3",children:"Floor No."}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Usage Type"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Occupany Type"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Construction Type"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Built Up Area (in sq ft.)"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Date of completion"})]})}),e.jsx("tbody",{children:(N=s==null?void 0:s.floor_comparison)==null?void 0:N.map(r=>{var c,d,i;return e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{rowspan:"3",className:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.floar_name)}),e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Self Assessed"}),(c=r==null?void 0:r.values)==null?void 0:c.map(x=>e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200",children:l(x==null?void 0:x.according_application)}))]}),e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Check"}),(d=r==null?void 0:r.values)==null?void 0:d.map(x=>e.jsxs("td",{className:"px-6 py-3 border-l border-l-gray-200",children:[(x==null?void 0:x.values)&&e.jsx(C,{className:"inline text-green-500 text-3xl ml-3"}),(x==null?void 0:x.values)==!1&&e.jsx(L,{className:"inline text-red-500 text-5xl"})]}))]}),e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Verification"}),(i=r==null?void 0:r.values)==null?void 0:i.map(x=>e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200",children:l(x==null?void 0:x.according_verification)})),void 0]})]})})})]})})}),n=="agency"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-bold text-xl pb-4 md:py-4 text-gray-400",children:"Geo Tagging"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Location"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Image"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Latitude"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Longitude"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"View on google map"})]})}),e.jsx("tbody",{children:(k=s==null?void 0:s.geoTagging)==null?void 0:k.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.direction_type)}),e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800 border-l border-l-gray-200",children:e.jsx("span",{onClick:()=>I(r==null?void 0:r.imageUrl),className:"cursor-pointer",children:e.jsx("img",{className:"w-40",src:l(r==null?void 0:r.paths)})})}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latitude)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.longitude)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.mapUrl)})]}))})]})})})]}),n=="ulb"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-bold text-xl py-1 px-4 text-white bg-indigo-500 mt-10",children:"Quarterly Tax Details"}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-bold text-xl pb-4 md:py-1 text-gray-800 bg-white mb-5 pl-5 mt-10",children:"According to Assessment"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Fyear"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"ALV"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Taxable Value"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"General Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Road Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Sewage Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Fire Fighting Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Water Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Education Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"V. Sanitization Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Tree Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Sp. Education Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Employement Guarantee"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Total Tax"})]})}),e.jsx("tbody",{children:(S=(_=s==null?void 0:s.Tax)==null?void 0:_.according_application)==null?void 0:S.details.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.key)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.alv)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.taxValue)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.generalTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.roadTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.sewerageTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.firefightingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.cleanlinessTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.treeTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.stateEducationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.professionalTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.totalTax)})]}))})]})})})]}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-bold text-xl pb-4 md:py-1 text-gray-800 bg-white mb-5 pl-5",children:"According to Verification"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Fyear"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"ALV"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Taxable Value"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"General Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Road Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Sewage Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Fire Fighting Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Water Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Education Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"V. Sanitization Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Tree Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Sp. Education Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Employement Guarantee"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Total Tax"})]})}),e.jsx("tbody",{children:(V=(F=s==null?void 0:s.Tax)==null?void 0:F.according_verification)==null?void 0:V.details.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.key)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.alv)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.taxValue)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.generalTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.roadTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.sewerageTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.firefightingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.cleanlinessTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.treeTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.stateEducationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.professionalTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.totalTax)})]}))})]})})})]}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-bold text-xl pb-4 md:py-1 text-gray-800 bg-white mb-5 pl-5",children:"Differences :"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Fyear"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"ALV"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Taxable Value"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"General Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Road Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Sewage Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Fire Fighting Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Water Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Education Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"V. Sanitization Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Tree Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Sp. Education Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Employement Guarantee"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Total Tax"})]})}),e.jsx("tbody",{children:(E=(A=s==null?void 0:s.Tax)==null?void 0:A.compairTax)==null?void 0:E.details.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.key)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.alv)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.taxValue)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.generalTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.roadTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.sewerageTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.firefightingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.cleanlinessTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.treeTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.stateEducationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.professionalTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.totalTax)})]}))})]})})})]})]}),e.jsx("div",{className:"w-full h-40 md:none"})]})}export{D as default};
