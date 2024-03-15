import{r as a,u as E,a as W,j as s,L as M,W as t,A as R,b as q,ai as F}from"./index-e53b351f.js";import{P as G}from"./PaymentCard-28de0e47.js";import"./RazorpayPaymentScreen-f7dce508.js";import"./index.esm-5cf06f76.js";function U(O){var o,n,m,h,f,N,j,v,p,u,b,y,g,_,w,P,A;const[S,d]=a.useState(!1);a.useState();const[e,C]=a.useState(),[Z,I]=a.useState();a.useState(!1);const{id:r,moduleType:l}=E(),{api_getHoldingDemandById:L,api_getsafDemandById:T,api_getClusterPropertyDemand:B,api_getClusterSafDemand:z}=F();W("Payment Screen");const H=()=>{d(!0);let i,c;l=="holding"&&(i=L,c={propId:r}),l=="saf"&&(i=T,c={id:r}),l=="cluster-saf"&&(i=z,c={clusterId:r}),l=="cluster-holding"&&(i=B,c={clusterId:r}),R.post(i,c,q()).then(function(x){C(x.data.data),I(x==null?void 0:x.data),d(!1)}).catch(function(x){d(!1)})};return a.useEffect(()=>{H()},[]),s.jsxs(s.Fragment,{children:[S&&s.jsx(M,{}),s.jsxs("div",{className:"p-10",children:[s.jsxs("div",{className:"w-full bg-white shadow-xl mb-6",children:[l!="cluster-saf"&&l!="cluster-holding"&&s.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[s.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[l!="saf"&&s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((o=e==null?void 0:e.basicDetails)==null?void 0:o.holding_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No."})]}),l=="saf"&&s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((n=e==null?void 0:e.basicDetails)==null?void 0:n.saf_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Application No.(Saf No)"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((m=e==null?void 0:e.basicDetails)==null?void 0:m.old_ward_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-lg",children:t((h=e==null?void 0:e.basicDetails)==null?void 0:h.old_ward_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"New Ward No"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:t((f=e==null?void 0:e.basicDetails)==null?void 0:f.ownership_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((N=e==null?void 0:e.basicDetails)==null?void 0:N.property_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]})]}),s.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((j=e==null?void 0:e.basicDetails)==null?void 0:j.zone_mstr_id)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Zone"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((v=e==null?void 0:e.basicDetails)==null?void 0:v.is_mobile_tower)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:t((p=e==null?void 0:e.basicDetails)==null?void 0:p.is_hoarding_board)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-md",children:t((u=e==null?void 0:e.basicDetails)==null?void 0:u.is_petrol_pump)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((b=e==null?void 0:e.basicDetails)==null?void 0:b.is_water_harvesting)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]})]})]}),(l=="cluster-saf"||l=="cluster-holding")&&s.jsx("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:s.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((y=e==null?void 0:e.basicDetails)==null?void 0:y.cluster_name)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Cluster Name"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((g=e==null?void 0:e.basicDetails)==null?void 0:g.cluster_type)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Cluster Type"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-sm",children:t((_=e==null?void 0:e.basicDetails)==null?void 0:_.authorized_person_name)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Authorized Person Name"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-semibold text-sm",children:t((w=e==null?void 0:e.basicDetails)==null?void 0:w.mobile_no)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Mobile No."})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t((P=e==null?void 0:e.basicDetails)==null?void 0:P.address)}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Address"})]}),s.jsxs("div",{className:"flex-1",children:[s.jsx("div",{className:"font-bold text-sm",children:t(new Date((A=e==null?void 0:e.basicDetails)==null?void 0:A.created_at).toLocaleDateString("en-GB"))}),s.jsx("div",{className:"text-gray-500 text-xs",children:"Created At"})]})]})})]}),s.jsx("div",{children:s.jsx(G,{basicDetails:e==null?void 0:e.basicDetails,safPaymentDetailsData:l=="cluster-saf"?e==null?void 0:e.demand:e==null?void 0:e.amounts,paymentDetails:e==null?void 0:e.duesList})})]}),s.jsx("div",{className:"w-full h-40 md:none"})]})}export{U as default};
