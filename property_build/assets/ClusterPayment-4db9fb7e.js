import{r as i,u as E,a as W,j as s,L as M,W as t,A as R,b as q,aj as F}from"./index-f317ffa6.js";import{P as G}from"./PaymentCard-3494bd4a.js";import"./RazorpayPaymentScreen-defbcdf0.js";import"./index.esm-71d5ed0e.js";function U(O){var o,n,m,h,f,N,j,v,p,u,y,b,g,_,w,P,A;const[S,d]=i.useState(!1);i.useState();const[e,C]=i.useState(),[Z,I]=i.useState();i.useState(!1);const{id:r,moduleType:a}=E(),{api_getHoldingDemandById:L,api_getsafDemandById:T,api_getClusterPropertyDemand:B,api_getClusterSafDemand:z}=F();W("Payment Screen");const H=()=>{d(!0);let c,x;a=="holding"&&(c=L,x={propId:r}),a=="saf"&&(c=T,x={id:r}),a=="cluster-saf"&&(c=z,x={clusterId:r}),a=="cluster-holding"&&(c=B,x={clusterId:r}),R.post(c,x,q()).then(function(l){console.log("payment details data...",l.data),C(l.data.data),I(l==null?void 0:l.data),d(!1)}).catch(function(l){console.log("payment details error...",l),d(!1)})};return i.useEffect(()=>{H()},[]),s.jsxs(s.Fragment,{children:[S&&s.jsx(M,{}),s.jsxs("div",{className:"p-10",children:[s.jsxs("div",{className:"w-full bg-white shadow-xl mb-6",children:[a!="cluster-saf"&&a!="cluster-holding"&&s.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[s.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[a!="saf"&&s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((o=e==null?void 0:e.basicDetails)==null?void 0:o.holding_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No."})]}),a=="saf"&&s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((n=e==null?void 0:e.basicDetails)==null?void 0:n.saf_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Application No.(Saf No)"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((m=e==null?void 0:e.basicDetails)==null?void 0:m.old_ward_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-lg",children:t((h=e==null?void 0:e.basicDetails)==null?void 0:h.old_ward_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"New Ward No"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:t((f=e==null?void 0:e.basicDetails)==null?void 0:f.ownership_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((N=e==null?void 0:e.basicDetails)==null?void 0:N.property_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]})]}),s.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((j=e==null?void 0:e.basicDetails)==null?void 0:j.zone_mstr_id)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Zone"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((v=e==null?void 0:e.basicDetails)==null?void 0:v.is_mobile_tower)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:t((p=e==null?void 0:e.basicDetails)==null?void 0:p.is_hoarding_board)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:t((u=e==null?void 0:e.basicDetails)==null?void 0:u.is_petrol_pump)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((y=e==null?void 0:e.basicDetails)==null?void 0:y.is_water_harvesting)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]})]})]}),(a=="cluster-saf"||a=="cluster-holding")&&s.jsx("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:s.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((b=e==null?void 0:e.basicDetails)==null?void 0:b.cluster_name)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Cluster Name"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((g=e==null?void 0:e.basicDetails)==null?void 0:g.cluster_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Cluster Type"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-sm",children:t((_=e==null?void 0:e.basicDetails)==null?void 0:_.authorized_person_name)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Authorized Person Name"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-sm",children:t((w=e==null?void 0:e.basicDetails)==null?void 0:w.mobile_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Mobile No."})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((P=e==null?void 0:e.basicDetails)==null?void 0:P.address)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Address"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t(new Date((A=e==null?void 0:e.basicDetails)==null?void 0:A.created_at).toLocaleDateString("en-GB"))}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Created At"})]})]})})]}),s.jsx("div",{children:s.jsx(G,{basicDetails:e==null?void 0:e.basicDetails,safPaymentDetailsData:a=="cluster-saf"?e==null?void 0:e.demand:e==null?void 0:e.amounts,paymentDetails:e==null?void 0:e.duesList})})]}),s.jsx("div",{className:"w-full h-40 md:none"})]})}export{U as default};
