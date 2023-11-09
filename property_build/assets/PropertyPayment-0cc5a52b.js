import{J as de,r,d as xe,u as me,a as ye,j as e,G as he,I as i,A as Q,b as K,a4 as fe}from"./index-0f9f451c.js";import{P as ge}from"./PaymentCard-d8da239a.js";import"./RazorpayPaymentScreen-6f86407f.js";import"./index.esm-96bf5e14.js";import"./BottomErrorCard-429c8f6d.js";import"./index.esm-bef0a5a6.js";function Ae(pe){var P,b,N,v,j,w,_,S,A,I,T,z,B,C,H,L,$,R,U;const{t:l}=de(),[V,x]=r.useState(!1);r.useState();const[s,X]=r.useState(),[ue,Z]=r.useState();r.useState(!1),r.useState(null);const[Pe,D]=r.useState(null),[ee,be]=r.useState(null),[f,se]=r.useState(null),[ae,te]=r.useState(null),[g,le]=r.useState(0),y=xe(),{id:n,moduleType:t}=me(),{zeroDemandPayment:ie,api_getHoldingDemandById:ce,api_getsafDemandById:p,api_getClusterSafDemandById:re,api_getClusterHoldingDemandById:ne}=fe();ye(`${l("mainPropertyPaymentPage.paymentScreen.label")}`);const u=(h=null,c=null)=>{x(!0);let o,d;t=="holding"&&(o=ce,d={propId:n,fYear:h,qtr:c}),t=="saf"&&(o=p,d={id:n}),t=="gbsaf"&&(o=p,d={id:n,fYear:h,qtr:c}),t=="cluster-saf"&&(o=re,d={clusterId:n}),t=="cluster-holding"&&(o=ne,d={clusterId:n}),Q.post(o,d,K()).then(function(a){var m,q,E,F,M,k,G,W,Y,J,O;console.log("payment details data...",a==null?void 0:a.data),X((m=a==null?void 0:a.data)==null?void 0:m.data),Z(a==null?void 0:a.data),x(!1),((E=(q=a==null?void 0:a.data)==null?void 0:q.data)==null?void 0:E.paymentStatus)===1&&t=="saf"&&y(`/viewDemand/${n}`),te((k=(M=(F=a==null?void 0:a.data)==null?void 0:F.data)==null?void 0:M.amounts)==null?void 0:k.isPayable),((Y=(W=(G=a==null?void 0:a.data)==null?void 0:G.data)==null?void 0:W.amounts)==null?void 0:Y.isPayable)==!1&&oe(),((O=(J=a==null?void 0:a.data)==null?void 0:J.data)==null?void 0:O.paymentStatus)===1&&t=="holding"&&y(`/viewDemandHoldingProperty/${n}`),le(g+1)}).catch(function(a){console.log("payment details error...",a),x(!1)})},oe=()=>{x(!0),seterroState(!1);let h={id:n,paymentMode:"Online"};Q.post(ie,h,K()).then(c=>{var o,d,a,m;console.log("response zero payment => ",c),(o=c==null?void 0:c.data)!=null&&o.status?(console.log("response zero payment => ",(d=c==null?void 0:c.data)==null?void 0:d.data),se((m=(a=c==null?void 0:c.data)==null?void 0:a.data)==null?void 0:m.TransactionNo)):(console.log("false status response zero payment => ",c),seterroState(!0))}).catch(c=>{console.log("error zero payment => ",c),seterroState(!0)}).finally(()=>x(!1))};return r.useEffect(()=>{u()},[]),e.jsxs(e.Fragment,{children:[V&&e.jsx(he,{}),e.jsxs("div",{className:"sm:p-10 p-2",children:[e.jsxs("div",{className:"w-full bg-white shadow-xl mb-6",children:[t!="cluster-saf"&&t!="cluster-holding"&&e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[t!="saf"&&e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((P=s==null?void 0:s.basicDetails)==null?void 0:P.holding_no)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[l("mainPropertyPaymentPage.holdingNo.label"),"."]})]}),(t=="saf"||t=="gbsaf")&&e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((b=s==null?void 0:s.basicDetails)==null?void 0:b.saf_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.applicationNo.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((N=s==null?void 0:s.basicDetails)==null?void 0:N.old_ward_no)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:["Ward No.",l("mainPropertyPaymentPage.wardNo.label")]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:i((v=s==null?void 0:s.basicDetails)==null?void 0:v.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.newWardNo.label")})]}),t!="gbsaf"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:i((j=s==null?void 0:s.basicDetails)==null?void 0:j.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.ownershipType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((w=s==null?void 0:s.basicDetails)==null?void 0:w.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.propertyType.label")})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:i((_=s==null?void 0:s.basicDetails)==null?void 0:_.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.govtBuildingUsageType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((S=s==null?void 0:s.basicDetails)==null?void 0:S.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.propertyUsageType.label")})]})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((A=s==null?void 0:s.basicDetails)==null?void 0:A.zone_mstr_id)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.zone.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((I=s==null?void 0:s.basicDetails)==null?void 0:I.is_mobile_tower)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[l("mainPropertyPaymentPage.propertyHasMobileTower.label")," ?"]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:i((T=s==null?void 0:s.basicDetails)==null?void 0:T.is_hoarding_board)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[l("mainPropertyPaymentPage.propertyHasHoardingBoard.label")," ?"]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:i((z=s==null?void 0:s.basicDetails)==null?void 0:z.is_petrol_pump)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[l("mainPropertyPaymentPage.isPropertyPetrolPump.label")," ?"]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((B=s==null?void 0:s.basicDetails)==null?void 0:B.is_water_harvesting)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[l("mainPropertyPaymentPage.rainwaterHarvestingProvision.label")," ?"]})]})]})]}),(t=="cluster-saf"||t=="cluster-holding")&&e.jsx("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((C=s==null?void 0:s.basicDetails)==null?void 0:C.cluster_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.clusterName.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((H=s==null?void 0:s.basicDetails)==null?void 0:H.cluster_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.clusterType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:i((L=s==null?void 0:s.basicDetails)==null?void 0:L.authorized_person_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.authorizedPersonName.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:i(($=s==null?void 0:s.basicDetails)==null?void 0:$.mobile_no)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[l("mainPropertyPaymentPage.mobileNo.label"),"."]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((R=s==null?void 0:s.basicDetails)==null?void 0:R.address)}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.address.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i(new Date((U=s==null?void 0:s.basicDetails)==null?void 0:U.created_at).toLocaleDateString("en-GB"))}),e.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.createdAt.label")})]})]})})]}),e.jsx("div",{children:ae==!1?e.jsx("div",{className:"w-full h-full bg-white p-20",children:e.jsxs("div",{children:[e.jsxs("div",{className:"text-center font-semibold text-3xl",children:[l("mainPropertyPaymentPage.applicationSubmittedMessage.label")," !"]}),e.jsxs("div",{className:"text-center mt-6",children:[e.jsx("button",{className:"mr-4 bg-indigo-500  text-white px-6 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>y(`/paymentReceipt/${t=="cluster-saf"||t=="cluster-holding",encodeURIComponent(f)}/${t=="cluster-saf"||t=="cluster-holding"?t=="cluster-saf"?"cluster-saf":"cluster-holding":t=="saf"||t=="gbsaf"?"saf":"holding"}`),children:l("mainPropertyPaymentPage.viewReceipt.label")}),t!="direct"&&e.jsx("button",{className:"mr-4 bg-white border border-indigo-500 text-indigo-500 px-4 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>y(`/propApplicationDetails/${n}`),children:l("mainPropertyPaymentPage.viewApplication.label")})]})]})}):e.jsx(ge,{reset:g,selectedPaymentQtr:ee,selectedPaymentYear:D,fetchDemandDetail:u,basicDetails:s==null?void 0:s.basicDetails,safPaymentDetailsData:s==null?void 0:s.amounts,paymentDetails:t=="cluster-saf"?s==null?void 0:s.demand:s==null?void 0:s.duesList})})]}),e.jsx("div",{className:"w-full h-40 md:none"})]})}export{Ae as default};
