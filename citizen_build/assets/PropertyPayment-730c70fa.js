import{r as n,v as Y,u as Q,a as aa,j as a,ag as ea,S as ta,p as sa,a2 as i,A as q,w as M,f as la}from"./index-d8dc37f9.js";localStorage.getItem("citizenName");localStorage.getItem("citizenMobile");function ra(h){var u,v,b,N,j,P,p,_,w,S,z;const[C,m]=n.useState(!1),[F,g]=n.useState(!1);n.useState();const[e,O]=n.useState(),[ia,R]=n.useState();n.useState(!1);const[U,y]=n.useState(!1),[na,V]=n.useState(null),[oa,$]=n.useState(null),{t:l}=Y(),{id:x,moduleType:r}=Q(),k=aa();h==null||h.values;const{zeroDemandPayment:G,api_getDirectHoldingDemandById:J,api_getHoldingDemandById:K,api_getsafDemandById:W}=la(),X=(d=null,s=null)=>{y(!1);let o,c;r=="holding"&&(o=K,c={propId:x,fYear:s,qtr:d}),r=="saf"&&(o=W,c={id:x}),r=="direct"&&(o=J,c={propId:x,fYear:s,qtr:d}),d!==null?g(!0):m(!0),console.log("before hit => ",c,o),q.post(o,c,M()).then(function(t){var f,A,I,T,B,H,L,D,E;console.log("payment details data...",t==null?void 0:t.data),O((f=t==null?void 0:t.data)==null?void 0:f.data),R(t==null?void 0:t.data),((I=(A=t==null?void 0:t.data)==null?void 0:A.data)==null?void 0:I.paymentStatus)==1&&k(`/viewDemand/${x}`),d!==null?g(!1):m(!1),$((H=(B=(T=t==null?void 0:t.data)==null?void 0:T.data)==null?void 0:B.amounts)==null?void 0:H.isPayable),((E=(D=(L=t==null?void 0:t.data)==null?void 0:L.data)==null?void 0:D.amounts)==null?void 0:E.isPayable)==!1&&Z()}).catch(function(t){console.log("payment details error...",t),y(!0),d!==null?g(!1):m(!1)})},Z=()=>{m(!0),y(!1);let d={id:x,paymentMode:"Online"};q.post(G,d,M()).then(s=>{var o,c,t,f;console.log("response zero payment => ",s),(o=s==null?void 0:s.data)!=null&&o.status?(console.log("response zero payment => ",(c=s==null?void 0:s.data)==null?void 0:c.data),V((f=(t=s==null?void 0:s.data)==null?void 0:t.data)==null?void 0:f.TransactionNo)):(console.log("false status response zero payment => ",s),y(!0))}).catch(s=>{console.log("error zero payment => ",s),y(!0)}).finally(()=>m(!1))};return n.useEffect(()=>{X()},[x,r]),C?a.jsxs(a.Fragment,{children:[a.jsx(ea,{}),a.jsx("div",{className:"min-h-screen"})]}):U?a.jsx(ta,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):a.jsxs(a.Fragment,{children:[F&&a.jsx(sa,{}),a.jsxs("div",{className:r=="direct"&&" p-4 mt-10",children:[a.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:a.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[a.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[r!="saf"&&a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:i((u=e==null?void 0:e.basicDetails)==null?void 0:u.holding_no)}),a.jsxs("div",{className:"text-gray-500 text-xs",children:[l("mainPropertyPaymentPage.holdingNo.label")," "]})]}),r=="saf"&&a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:i((v=e==null?void 0:e.basicDetails)==null?void 0:v.saf_no)}),a.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.applicationNo.label")})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-semibold text-lg",children:i((b=e==null?void 0:e.basicDetails)==null?void 0:b.zone_name)}),a.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.zone.label")})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:i((N=e==null?void 0:e.basicDetails)==null?void 0:N.ward_no)}),a.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.wardNo.label")})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-semibold text-md",children:i((j=e==null?void 0:e.basicDetails)==null?void 0:j.ownership_type)}),a.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.ownershipType.label")})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:i((P=e==null?void 0:e.basicDetails)==null?void 0:P.property_type)}),a.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.propertyType.label")})]})]}),a.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:i((p=e==null?void 0:e.basicDetails)==null?void 0:p.zone_mstr_id)}),a.jsx("div",{className:"text-gray-500 text-xs",children:l("mainPropertyPaymentPage.zone.label")})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:i((_=e==null?void 0:e.basicDetails)==null?void 0:_.is_mobile_tower)}),a.jsxs("div",{className:"text-gray-500 text-xs",children:[l("mainPropertyPaymentPage.propertyHasMobileTower.label")," ?"]})]}),a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"font-semibold text-md",children:[i((w=e==null?void 0:e.basicDetails)==null?void 0:w.is_hoarding_board)," "]}),a.jsxs("div",{className:"text-gray-500 text-xs",children:[l("mainPropertyPaymentPage.propertyHasHoardingBoard.label")," ?"]})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-semibold text-md",children:i((S=e==null?void 0:e.basicDetails)==null?void 0:S.is_petrol_pump)}),a.jsxs("div",{className:"text-gray-500 text-xs",children:[l("mainPropertyPaymentPage.isPropertyPetrolPump.label")," ?"]})]}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:"font-bold text-sm",children:i((z=e==null?void 0:e.basicDetails)==null?void 0:z.is_water_harvesting)}),a.jsxs("div",{className:"text-gray-500 text-xs",children:[l("mainPropertyPaymentPage.rainwaterHarvestingProvision.label")," ?"]})]})]})]})}),a.jsx("div",{})]}),a.jsx("div",{className:"w-full h-40 md:none"})]})}export{ra as default};
