import{u as z,r as x,U as c,j as a,i as M,T as U,n as i,A as O,b as k,a4 as $}from"./index-0f9f451c.js";import{C as q,A as G,p as J,a as K,D as Q}from"./index-b3617827.js";import{I as V}from"./index.esm-23fa540d.js";q.register(G,J,K);function X(t){var d;const{id:E,type:m}=z(),[L,T]=x.useState(),[l,n]=x.useState();x.useEffect(()=>{var r,A,C,f,y,u,h;m=="saf"?(T([c((r=t==null?void 0:t.data)==null?void 0:r.lateAssessmentPenalty),c((A=t==null?void 0:t.data)==null?void 0:A.additionalTax),c((C=t==null?void 0:t.data)==null?void 0:C.totalOnePercPenalty),c((f=t==null?void 0:t.data)==null?void 0:f.totalTax)]),n(["Late Assesment Penalty","RWH Penalty","1% Penalty","Total Tax"])):(T([c((y=t==null?void 0:t.data)==null?void 0:y.additionalTax),c((u=t==null?void 0:t.data)==null?void 0:u.onePercPenalty),c((h=t==null?void 0:t.data)==null?void 0:h.totalDues)]),n(["RWH Penalty","1% Penalty","Total Tax"]))},[m,t==null?void 0:t.data]);const B={responsive:!0,animation:{duration:2e3},plugins:{legend:{position:"bottom"}}},s={labels:l,datasets:[{label:"Demand Details (₹)",data:L,backgroundColor:["#EC4456","#22C55E","#6366F1","#EC4899"]}]};return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"relative h-[50vh] flex ",children:[a.jsxs("div",{className:"text-xs absolute top-[42%] left-[42%] flex flex-col justify-center items-center",children:[a.jsx("span",{className:"font-semibold text-sm",children:M((d=t==null?void 0:t.data)==null?void 0:d.payableAmount)}),a.jsx("span",{children:"Total Dues"})]}),a.jsx(Q,{data:s,options:B,className:" h-[15rem]"})]})})}const aa=t=>{var f,y,u,h,I,S,H,F,D,R,W;const{id:E,type:m}=z(),{api_getsafDemandById:L,api_getHoldingDemandById:T}=$(),[l,n]=x.useState(),[B,s]=x.useState(!1),[d,r]=x.useState([]),A=()=>{s(!0),O.post(`${T}`,{propId:E},k()).then(function(e){var g,v,o,j,N,b,w,_,P;(g=e==null?void 0:e.data)!=null&&g.status?(n((v=e==null?void 0:e.data)==null?void 0:v.data),t==null||t.demand((j=(o=e==null?void 0:e.data)==null?void 0:o.data)==null?void 0:j.demandList),r((b=(N=e==null?void 0:e.data)==null?void 0:N.data)==null?void 0:b.duesList),t==null||t.dueList((_=(w=e==null?void 0:e.data)==null?void 0:w.data)==null?void 0:_.duesList)):t==null||t.activateBottomErrorCard(!0,(P=e==null?void 0:e.data)==null?void 0:P.message),s(!1),console.log("view demand details of property ...",e)}).catch(function(e){console.log("at error part of property.",e),t==null||t.activateBottomErrorCard(!0,"Please try again later !!!"),s(!1)})},C=()=>{s(!0),O.post(L,{id:E},k()).then(function(e){var g,v,o,j,N,b,w,_,P;(g=e==null?void 0:e.data)!=null&&g.status?(n((v=e==null?void 0:e.data)==null?void 0:v.data),t==null||t.demand((j=(o=e==null?void 0:e.data)==null?void 0:o.data)==null?void 0:j.details),r((b=(N=e==null?void 0:e.data)==null?void 0:N.data)==null?void 0:b.amounts),t==null||t.dueList((_=(w=e==null?void 0:e.data)==null?void 0:w.data)==null?void 0:_.amounts)):t==null||t.activateBottomErrorCard(!0,(P=e==null?void 0:e.data)==null?void 0:P.message),s(!1),console.log("view demand details of saf ...",e)}).catch(function(e){console.log("at error part of saf.",e),t==null||t.activateBottomErrorCard(!0,"Please try again later !!!"),s(!1)})};return x.useEffect(()=>{m=="saf"?C():A()},[m]),B?a.jsx(a.Fragment,{children:a.jsxs("div",{className:"my-4 w-screen flex-col items-center justify-center",children:[a.jsx(U,{radius:"9",color:"#4338ca",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),a.jsx("span",{className:"italic",children:"Application Details Fetching..."})," "]})}):a.jsx(a.Fragment,{children:a.jsxs("div",{className:"w-full mb-6 mt-4 flex flex-row flex-wrap gap-4 h-max ",children:[a.jsxs("div",{className:"w-full  md:w-[49%] p-4 flex flex-wrap gap-0 bg-white border-2 border-indigo-200 shadow-lg shadow-indigo-200  animate__animated animate__fadeInLeft transition-all duration-200 ease-in-out ",children:[a.jsxs("div",{className:"w-full font-semibold border-b-2 flex justify-between items-center pb-2 md:pb-0",children:[a.jsxs("div",{className:"flex gap-2 items-center text-xl text-indigo-500",children:[a.jsx("span",{className:"text-blue-600",children:a.jsx(V,{})})," Basic Details"]}),a.jsx("div",{className:"text-xs font-normal w-1/2 flex justify-end items-center",children:a.jsxs("div",{className:"w-max rounded-md border-l-2 border-r-2 bg-green-50 px-4 border-green-400 py-2  transition-all duration-200 ",children:["Current Demand: ",a.jsx("span",{className:"font-semibold text-md",children:M(d==null?void 0:d.payableAmount)})]})})]}),m=="saf"?a.jsxs("div",{className:"w-1/2 flex flex-col-reverse my-1 md:my-0",children:[a.jsx("div",{className:"text-gray-800 uppercase font-semibold text-sm",children:i((f=l==null?void 0:l.basicDetails)==null?void 0:f.saf_no)}),a.jsx("div",{className:"text-gray-700 text-xs",children:"SAF No."})]}):a.jsxs("div",{className:"w-1/2 flex flex-col-reverse my-1 md:my-0",children:[a.jsx("div",{className:"text-gray-800 uppercase font-semibold text-sm",children:i((y=l==null?void 0:l.basicDetails)==null?void 0:y.holding_no)}),a.jsx("div",{className:"text-gray-700 text-xs",children:"Holding No."})]}),a.jsxs("div",{className:"w-1/2 flex flex-col-reverse my-1 md:my-0",children:[a.jsx("div",{className:"text-gray-800 uppercase font-semibold text-sm",children:i((u=l==null?void 0:l.basicDetails)==null?void 0:u.old_ward_no)}),a.jsx("div",{className:"text-gray-700 text-xs",children:"Ward No."})]}),a.jsxs("div",{className:"w-1/2 flex flex-col-reverse my-1 md:my-0",children:[a.jsx("div",{className:"text-gray-800 uppercase font-semibold text-sm",children:i((h=l==null?void 0:l.basicDetails)==null?void 0:h.old_ward_no)}),a.jsx("div",{className:"text-gray-700 text-xs",children:"New Ward No"})]}),a.jsxs("div",{className:"w-1/2 flex flex-col-reverse my-1 md:my-0",children:[a.jsx("div",{className:"text-gray-800 uppercase font-semibold text-sm",children:i((I=l==null?void 0:l.basicDetails)==null?void 0:I.ownership_type)}),a.jsx("div",{className:"text-gray-700 text-xs",children:"Ownership Type"})]}),a.jsxs("div",{className:"w-1/2 flex flex-col-reverse my-1 md:my-0",children:[a.jsx("div",{className:"text-gray-800 uppercase font-semibold text-sm",children:i((S=l==null?void 0:l.basicDetails)==null?void 0:S.property_type)}),a.jsx("div",{className:"text-gray-700 text-xs",children:"Property Type"})]}),a.jsxs("div",{className:"w-1/2 flex flex-col-reverse my-1 md:my-0",children:[a.jsx("div",{className:"text-gray-800 uppercase font-semibold text-sm",children:i((H=l==null?void 0:l.basicDetails)==null?void 0:H.holding_type)}),a.jsx("div",{className:"text-gray-700 text-xs",children:"Holding Type"})]}),a.jsxs("div",{className:"w-1/2 flex flex-col-reverse my-1 md:my-0",children:[a.jsx("div",{className:"text-gray-800 uppercase font-semibold text-sm",children:i((F=l==null?void 0:l.basicDetails)==null?void 0:F.is_mobile_tower)}),a.jsx("div",{className:"text-gray-700 text-xs",children:"Property has Mobile Tower(s) ?"})]}),a.jsxs("div",{className:"w-1/2 flex flex-col-reverse my-1 md:my-0",children:[a.jsxs("div",{className:"text-gray-800 uppercase font-semibold text-sm",children:[i((D=l==null?void 0:l.basicDetails)==null?void 0:D.is_hoarding_board)," "]}),a.jsx("div",{className:"text-gray-700 text-xs",children:"Property has Hoarding Board(s) ?"})]}),a.jsxs("div",{className:"w-1/2 flex flex-col-reverse my-1 md:my-0",children:[a.jsx("div",{className:"text-gray-800 uppercase font-semibold text-sm",children:i((R=l==null?void 0:l.basicDetails)==null?void 0:R.is_petrol_pump)}),a.jsx("div",{className:"text-gray-700 text-xs",children:"Is property a Petrol Pump ?"})]}),a.jsxs("div",{className:"w-1/2 flex flex-col-reverse my-1 md:my-0",children:[a.jsx("div",{className:"text-gray-800 uppercase font-semibold text-sm",children:i((W=l==null?void 0:l.basicDetails)==null?void 0:W.is_water_harvesting)}),a.jsx("div",{className:"text-gray-700 text-xs",children:"Rainwater harvesting provision ?"})]})]}),a.jsx("div",{className:"w-full md:w-[49%]   flex justify-center items-center py-4 animate__animated animate__fadeInRight transition-all duration-200 ease-in-out ",children:a.jsx(X,{data:d})})]})})};export{aa as B};
