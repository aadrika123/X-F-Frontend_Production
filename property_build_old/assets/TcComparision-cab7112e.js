import{r as o,bv as ee,k as le,j as e,B as se,S as xe,n as l,i as ce,bc as Or,b1 as Zr,A as oe,N as ie,bP as de}from"./index-4b7c3b74.js";function pe(ye){var g,t,j,m,f,u,T,w,v,N,k,_,S,F,R,C,P,A,V,H,Q,q,L,E,B,z,U,W,I,M,G,O,Z,J,K,X,Y,$,D,a,rr,er,lr,sr,xr,cr,or,ir,dr,yr,nr,br,pr,hr,gr,tr,jr,mr,fr,ur,Tr,wr,vr,Nr,kr,_r,Sr,Fr,Rr,Cr,Pr,Ar,Vr,Hr,Qr,qr,Lr,Er,Br,zr,Ur,Wr,Ir,Mr;const[Jr,y]=o.useState(!1);o.useState();const[Kr,n]=o.useState(!1),[Xr,h]=o.useState(""),[s,Yr]=o.useState(),{id:$r,type:b}=ee(),{api_getPropHoldingDetailsById:ne,api_getTcComparisonData:Dr}=de();let p;b=="agency"?p="Agency TC Comparison":p="ULB TC Comparison",le(p);const ar=()=>{},re=()=>{y(!0),n(!1);let r={verificationId:$r};oe.post(Dr,r,ie()).then(function(x){var i,d,c;console.log("tc comparison data list...",x==null?void 0:x.data),(i=x==null?void 0:x.data)!=null&&i.status?Yr((d=x==null?void 0:x.data)==null?void 0:d.data):(n(!0),h((c=x==null?void 0:x.data)==null?void 0:c.message)),y(!1)}).catch(function(x){console.log("tc comparison data error...",x),h("Server error! Please try again later."),n(!0),y(!1)})};return o.useEffect(()=>{re()},[]),Jr?e.jsx(e.Fragment,{children:e.jsx(se,{})}):Kr?e.jsx(xe,{title:"Server is busy",desc:Xr,buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:" text-lg pb-4 md:py-4 text-gray-500",children:[e.jsxs("span",{children:["Verified By : ",e.jsx("span",{className:"font-semibold text-gray-800",children:l((g=s==null?void 0:s.employee_details)==null?void 0:g.user_name)})," "]}),e.jsxs("span",{className:"float-right",children:["Verification Date : ",e.jsx("span",{className:"font-semibold text-gray-800",children:ce((t=s==null?void 0:s.employee_details)==null?void 0:t.date)})]})," "]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{className:"py-4 rounded-lg shadow-lg p-4",children:e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 md:items-center justify-center",children:[e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-semibold text-md",children:l((j=s==null?void 0:s.saf_details)==null?void 0:j.assessment_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Assessment Type"})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:l((m=s==null?void 0:s.saf_details)==null?void 0:m.saf_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"SAF No."})]}),(s==null?void 0:s.pt_no)==""?e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:l((f=s==null?void 0:s.saf_details)==null?void 0:f.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No."})]}):e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:l((u=s==null?void 0:s.saf_details)==null?void 0:u.plot_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"PT No."})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsxs("div",{className:"font-semibold text-md",children:[l((T=s==null?void 0:s.saf_details)==null?void 0:T.holding_type)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding Type"})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:l((w=s==null?void 0:s.saf_details)==null?void 0:w.zone_mstr_id)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Zone"})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:l((v=s==null?void 0:s.saf_details)==null?void 0:v.prop_address)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Address"})]})]})})}),e.jsx("div",{className:" font-bold text-xl pb-4 md:py-4 text-gray-400",children:"Verification Details"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3",children:"#"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Particular"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Self-Assessed"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Check"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Verification"})]})}),e.jsx("tbody",{children:(N=s==null?void 0:s.property_comparison)==null?void 0:N.map((r,x)=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:x+1}),e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.key)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.according_application)}),e.jsxs("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:[l(r==null?void 0:r.values)&&e.jsx(Or,{className:"inline text-green-500 text-3xl ml-3"}),l(r==null?void 0:r.values)==!1&&e.jsx(Zr,{className:"inline text-red-500 text-5xl"})]}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.according_verification)})]}))})]})})}),e.jsx("div",{className:" font-bold text-xl pb-4 md:py-4 text-gray-400",children:"Floor Verified Details"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3",children:"Floor No."}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Usage Type"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Occupany Type"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Construction Type"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Built Up Area (in sq ft.)"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Date of completion"})]})}),e.jsx("tbody",{children:(k=s==null?void 0:s.floor_comparison)==null?void 0:k.map(r=>{var x,i,d;return e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{rowspan:"3",className:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.floar_name)}),e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Self Assessed"}),(x=r==null?void 0:r.values)==null?void 0:x.map(c=>e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200",children:l(c==null?void 0:c.according_application)}))]}),e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Check"}),(i=r==null?void 0:r.values)==null?void 0:i.map(c=>e.jsxs("td",{className:"px-6 py-3 border-l border-l-gray-200",children:[(c==null?void 0:c.values)&&e.jsx(Or,{className:"inline text-green-500 text-3xl ml-3"}),(c==null?void 0:c.values)==!1&&e.jsx(Zr,{className:"inline text-red-500 text-5xl"})]}))]}),e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Verification"}),(d=r==null?void 0:r.values)==null?void 0:d.map(c=>{var Gr;return e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200",children:l((Gr=c==null?void 0:c.verification)==null?void 0:Gr.according_verification)})})]})]})})})]})})}),b=="agency"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-bold text-xl pb-4 md:py-4 text-gray-400",children:"Geo Tagging"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Location"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Image"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Latitude"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Longitude"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"View on google map"})]})}),e.jsx("tbody",{children:(_=s==null?void 0:s.geoTagging)==null?void 0:_.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.direction_type)}),e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800 border-l border-l-gray-200",children:e.jsx("span",{onClick:()=>ar(r==null?void 0:r.imageUrl),className:"cursor-pointer",children:e.jsx("img",{className:"w-40",src:l(r==null?void 0:r.paths)})})}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latitude)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.longitude)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.mapUrl)})]}))})]})})})]}),b=="ulb"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-bold text-xl py-1 px-4 text-white bg-indigo-500 mt-10",children:"Quarterly Tax Details"}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-bold text-xl pb-4 md:py-1 text-gray-800 bg-white mb-5 pl-5 mt-10",children:"According to Assessment"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Effect From"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"ARV/CV"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Holding Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Water Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Education Cess"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Health Cess"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Latrine Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"RWH Penalty"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Quarterly Tax"})]})}),e.jsxs("tbody",{children:[((R=(F=(S=s==null?void 0:s.Tax)==null?void 0:S.according_application)==null?void 0:F.details)==null?void 0:R.RuleSet1)&&((H=(V=(A=(P=(C=s==null?void 0:s.Tax)==null?void 0:C.according_application)==null?void 0:P.details)==null?void 0:A.RuleSet1)==null?void 0:V.totalQtrTaxes)==null?void 0:H.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]}))),((L=(q=(Q=s==null?void 0:s.Tax)==null?void 0:Q.according_application)==null?void 0:q.details)==null?void 0:L.RuleSet2)&&((W=(U=(z=(B=(E=s==null?void 0:s.Tax)==null?void 0:E.according_application)==null?void 0:B.details)==null?void 0:z.RuleSet2)==null?void 0:U.totalQtrTaxes)==null?void 0:W.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]}))),((G=(M=(I=s==null?void 0:s.Tax)==null?void 0:I.according_application)==null?void 0:M.details)==null?void 0:G.RuleSet3)&&((X=(K=(J=(Z=(O=s==null?void 0:s.Tax)==null?void 0:O.according_application)==null?void 0:Z.details)==null?void 0:J.RuleSet3)==null?void 0:K.totalQtrTaxes)==null?void 0:X.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]})))]})]})})})]}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-bold text-xl pb-4 md:py-1 text-gray-800 bg-white mb-5 pl-5",children:"According to Verification"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Effect From"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"ARV/CV"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Holding Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Water Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Education Cess"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Health Cess"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Latrine Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"RWH Penalty"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Quarterly Tax"})]})}),e.jsxs("tbody",{children:[((D=($=(Y=s==null?void 0:s.Tax)==null?void 0:Y.according_verification)==null?void 0:$.details)==null?void 0:D.RuleSet1)&&((sr=(lr=(er=(rr=(a=s==null?void 0:s.Tax)==null?void 0:a.according_verification)==null?void 0:rr.details)==null?void 0:er.RuleSet1)==null?void 0:lr.totalQtrTaxes)==null?void 0:sr.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]}))),((or=(cr=(xr=s==null?void 0:s.Tax)==null?void 0:xr.according_verification)==null?void 0:cr.details)==null?void 0:or.RuleSet2)&&((br=(nr=(yr=(dr=(ir=s==null?void 0:s.Tax)==null?void 0:ir.according_verification)==null?void 0:dr.details)==null?void 0:yr.RuleSet2)==null?void 0:nr.totalQtrTaxes)==null?void 0:br.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]}))),((gr=(hr=(pr=s==null?void 0:s.Tax)==null?void 0:pr.according_verification)==null?void 0:hr.details)==null?void 0:gr.RuleSet3)&&((ur=(fr=(mr=(jr=(tr=s==null?void 0:s.Tax)==null?void 0:tr.according_verification)==null?void 0:jr.details)==null?void 0:mr.RuleSet3)==null?void 0:fr.totalQtrTaxes)==null?void 0:ur.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]})))]})]})})})]}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:" font-bold text-xl pb-4 md:py-1 text-gray-800 bg-white mb-5 pl-5",children:"Differences :"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Effect From"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"ARV/CV"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Holding Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Water Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Education Cess"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Health Cess"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Latrine Tax"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"RWH Penalty"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Quarterly Tax"})]})}),e.jsxs("tbody",{children:[((vr=(wr=(Tr=s==null?void 0:s.Tax)==null?void 0:Tr.compairTax)==null?void 0:wr.details)==null?void 0:vr.RuleSet1)&&((Fr=(Sr=(_r=(kr=(Nr=s==null?void 0:s.Tax)==null?void 0:Nr.compairTax)==null?void 0:kr.details)==null?void 0:_r.RuleSet1)==null?void 0:Sr.totalQtrTaxes)==null?void 0:Fr.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]}))),((Pr=(Cr=(Rr=s==null?void 0:s.Tax)==null?void 0:Rr.compairTax)==null?void 0:Cr.details)==null?void 0:Pr.RuleSet2)&&((qr=(Qr=(Hr=(Vr=(Ar=s==null?void 0:s.Tax)==null?void 0:Ar.compairTax)==null?void 0:Vr.details)==null?void 0:Hr.RuleSet2)==null?void 0:Qr.totalQtrTaxes)==null?void 0:qr.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]}))),((Br=(Er=(Lr=s==null?void 0:s.Tax)==null?void 0:Lr.compairTax)==null?void 0:Er.details)==null?void 0:Br.RuleSet3)&&((Mr=(Ir=(Wr=(Ur=(zr=s==null?void 0:s.Tax)==null?void 0:zr.compairTax)==null?void 0:Ur.details)==null?void 0:Wr.RuleSet3)==null?void 0:Ir.totalQtrTaxes)==null?void 0:Mr.map(r=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:l(r==null?void 0:r.effectingFrom)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.arv)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:l(r==null?void 0:r.holdingTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.waterTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.educationTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.healthTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.latrineTax)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.rwhPenalty)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:l(r==null?void 0:r.quaterlyTax)})]})))]})]})})})]})]}),e.jsx("div",{className:"w-full h-40 md:none"})]})}export{pe as default};
