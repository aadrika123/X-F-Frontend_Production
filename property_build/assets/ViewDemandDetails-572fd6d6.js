import{u as L,bv as O,r as l,c as V,a as W,k as M,j as e,B as U,S as $,Q as z,T as G,n as i,bf as K,A as Q,N as q,bb as J}from"./index-d6b7ff3c.js";import"./RazorpayPaymentScreen-a93861d8.js";import{T}from"./TopTabs-d4eb6e09.js";function ts(X){var p,h,g,b,f,u,j,v,y,N,w,P,_;const{t:a}=L(),{id:o,location:Y,tabIndex:Z}=O();console.log("param demand screen...",o);const{roles:r}=l.useContext(V),{propertyGenerateOrderId:D,api_getsafDemandById:B}=J(),c=W();M("SAF Demand Details"),l.useState(!1);const[s,C]=l.useState();l.useState("");const[x,k]=l.useState(""),[d,n]=l.useState(!1),[R,m]=l.useState(!1),F=["BACK OFFICE"],I=l.useMemo(()=>Array.isArray(r)&&r.some(t=>F.includes(t)),[r]),E=()=>{n(!0),m(!1),Q.post(B,{id:o},q()).then(function(t){var H,S,A;console.log("view demand for my saf..",(H=t==null?void 0:t.data)==null?void 0:H.data),k((S=t==null?void 0:t.data)==null?void 0:S.safNo),C((A=t==null?void 0:t.data)==null?void 0:A.data),n(!1)}).catch(function(t){console.log("==2 details by id error...",t),m(!0),n(!1)})};return l.useEffect(()=>{E()},[]),d?e.jsx(e.Fragment,{children:e.jsx(U,{})}):R?e.jsx($,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):(console.log("roles in pd => ",r),e.jsxs(e.Fragment,{children:[e.jsx(z,{position:"top-right",autoClose:2e3}),d&&e.jsx(G,{}),e.jsxs("div",{className:"w-full mx-auto md:px-6",children:[e.jsx("div",{className:"pt-10 hidden sm:block",children:e.jsx(T,{payButton:(s==null?void 0:s.paymentStatus)!==1&&(s==null?void 0:s.can_pay)===!0,payableAmount:(p=s==null?void 0:s.amounts)==null?void 0:p.payableAmount,isPayable:(h=s==null?void 0:s.amounts)==null?void 0:h.isPayable,title:a("mainHoldingPage.demandDetailsButton.label"),type:"application",id:o,safNo:x,active:"demand"})}),e.jsx("div",{className:"pt-10 block sm:hidden",children:e.jsx(T,{payButton:(s==null?void 0:s.paymentStatus)!==1&&(s==null?void 0:s.can_pay)===!0,payableAmount:(g=s==null?void 0:s.amounts)==null?void 0:g.payableAmount,title:"",type:"application",id:o,safNo:x,active:"demand"})}),I&&(s==null?void 0:s.paymentStatus)!==1&&(s==null?void 0:s.can_pay)===!0&&e.jsx("div",{className:"border-2 border-amber-500 text px-4 py-1 justify-center items-center font-semibold text-amber-500 shadow-xl w-max cursor-pointer hover:bg-amber-500 hover:text-white",onClick:()=>c(`/waiver-demand-screen/${o}/saf`),children:"Waive Off Demand"}),(s==null?void 0:s.paymentStatus)===1&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"bg-red-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl",children:a("mainHoldingPage.allDemandPaidButton.label")}),(s==null?void 0:s.tran_no)!=null&&e.jsx("span",{className:"bg-indigo-400 text px-4 py-1 justify-center items-center font-semibold text-white shadow-xl cursor-pointer hover:bg-indigo-500",onClick:()=>c(`/paymentReceipt/${encodeURIComponent(s==null?void 0:s.tran_no)}/saf`),children:a("mainHoldingPage.viewRecieptButton.label")})]}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((b=s==null?void 0:s.basicDetails)==null?void 0:b.saf_no)}),e.jsxs("div",{className:"text-gray-500 text-xs",children:[a("mainHoldingPage.applicationNum.label"),a("mainHoldingPage.applicationSafNum.label")]})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((f=s==null?void 0:s.basicDetails)==null?void 0:f.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:a("mainHoldingPage.holdingWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:i((u=s==null?void 0:s.basicDetails)==null?void 0:u.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:a("mainHoldingPage.holdingNewWardNumber.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:i((j=s==null?void 0:s.basicDetails)==null?void 0:j.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:a("mainHoldingPage.holdingOwnershipType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((v=s==null?void 0:s.basicDetails)==null?void 0:v.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:a("mainHoldingPage.holdingPropertyType.label")})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((y=s==null?void 0:s.basicDetails)==null?void 0:y.holding_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:a("mainHoldingPage.holdingResidentialType.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((N=s==null?void 0:s.basicDetails)==null?void 0:N.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:a("mainHoldingPage.propertyMobileTower.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[i((w=s==null?void 0:s.basicDetails)==null?void 0:w.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:a("mainHoldingPage.propertyHoardingBoard.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:i((P=s==null?void 0:s.basicDetails)==null?void 0:P.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:a("mainHoldingPage.propertyPetrolPump.label")})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((_=s==null?void 0:s.basicDetails)==null?void 0:_.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:a("mainHoldingPage.propertyRainwaterHarvest.label")})]})]})]})}),e.jsx("div",{className:"",children:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-10",children:[e.jsxs("h1",{className:"px-1 font-semibold font-serif text-xs",children:[e.jsx("img",{src:K,alt:"pin",className:"w-5 inline"})," ",a("mainHoldingPage.demandTaxDetailHeadingText.label")]}),e.jsx("p",{children:"--------api key is missing---------"})]})})})]}),e.jsx("div",{className:"w-full h-40"})]}))}export{ts as default};
