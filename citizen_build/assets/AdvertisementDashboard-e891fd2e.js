import{M,a as Ia,r as o,A as t,bY as i,j as e,bZ as Oa,bb as Ba,bl as Ra,bm as qa,aL as Ya,b_ as y,a0 as n,bn as u,bo as N,b$ as Ha,c0 as Ua,c1 as Ga}from"./index-5738b2d0.js";const Y={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none",overflowY:"scroll"}};M.setAppElement("#root");const Wa=()=>{const{api_getAppliedApplicationList:H,api_getApprovedApplicationList:U,api_getApplicationDetailForPayment:G,api_getMovableAppliedApplicationList:Z,api_getPrivateLandAppliedApplicationList:J,api_getAgencyAppliedApplicationList:K,api_getMovableApprovedApplicationList:Q,api_getPrivateLandApprovedApplicationList:W,api_getAgencyApprovedApplicationList:X,api_postRedirectToAgencyDashboard:m,api_getHoardingPendingApplicationList:Za,api_getMovableVehicleApplicationDetailForPayment:aa,api_getPrivateLandApplicationDetailForPayment:ea,api_getAgencyApplicationDetailForPayment:la}=Ga(),r=Ia(),[c,P]=o.useState(!1),[s,E]=o.useState(!1),[v,T]=o.useState(1),[V,na]=o.useState(!1);o.useState(null),o.useState(null);const[da,Ja]=o.useState(0),[p,oa]=o.useState(),[x,ca]=o.useState(),[f,sa]=o.useState(),[h,ra]=o.useState(),[Ka,pa]=o.useState(),[w,ta]=o.useState(),[A,ia]=o.useState(),[k,xa]=o.useState(),[_,ha]=o.useState(),[ga,ba]=o.useState(0),[ja,ya]=o.useState(),[ua,Na]=o.useState(),[z,F]=o.useState(),[$,I]=o.useState(),[fa,va]=o.useState(),[wa,O]=o.useState(!1),[Aa,B]=o.useState(!1),ka=()=>O(!0),R=()=>O(!1),_a=()=>{},La=()=>B(!0),q=()=>B(!1),Ca=()=>{},g=(a,l,d)=>{console.log("..............application id..............",a),console.log("..............application type..............",l),console.log("..............application Name..............",d),I(a),Na(l),F(d),ka()};console.log("application no. for modal",$);const L=(a,l)=>{console.log("..............application id..............",a),I(a),F(l),La()},C=a=>{console.log("application id",a.target.id),console.log("application name payment",a.target.value);let l=a.target.value,d=a.target.id;va(l);let j;l=="selfAdvt"&&(j=G),l=="movableVehicle"&&(j=aa),l=="privateLand"&&(j=ea),l=="agency"&&(j=la);const S={applicationId:d};t.post(`${j}`,S,i()).then(function(D){console.log("application detail for payment 1",D.data.data),ya(D.data.data),ba(Fa=>Fa+1)}).catch(function(D){console.log("errorrr.... ",D)})},b=(a,l)=>{c===a?(P(null),E(null)):(P(a),E(l))};o.useEffect(()=>{Sa(),Da(),$a(),Ma(),Pa(),Ea(),Ta(),Va(),na(!1)},[da]);const Sa=()=>{const a={deviceId:"selfAdvert"};t.post(`${H}`,a,i()).then(function(l){console.log("applied application in self advertisement",l.data.data),oa(l.data.data.data)}).catch(function(l){console.log("errorrr.... ",l)})};console.log("Applied application list",p==null?void 0:p.length);const Da=()=>{const a={deviceId:"selfAdvert"};t.post(`${Z}`,a,i()).then(function(l){console.log("applied application in self advertisement",l.data.data),ca(l.data.data.data)}).catch(function(l){console.log("errorrr.... ",l)})};console.log("Applied application list movableAppliedApplication",x==null?void 0:x.length);const $a=()=>{const a={deviceId:"land"};t.post(`${J}`,a,i()).then(function(l){console.log("setlandAppliedApplication",l.data.data),sa(l.data.data.data)}).catch(function(l){console.log("errorrr.... ",l)})};console.log("Applied application list landAppliedApplication",f);const Ma=()=>{const a={deviceId:"agency"};t.post(`${K}`,a,i()).then(function(l){console.log("applied agency application ",l.data.data),ra(l.data.data.data)}).catch(function(l){console.log("errorrr.... ",l)})};console.log("Applied application list AgencyAppliedApplication",h==null?void 0:h.length);const Pa=()=>{const a={};t.post(`${U}`,a,i()).then(function(l){console.log("applied application in self advertisement",l.data.data),ta(l.data.data.data)}).catch(function(l){console.log("errorrr.... ",l)})},Ea=()=>{const a={};t.post(`${Q}`,a,i()).then(function(l){console.log("APPROVED LIST",l),ia(l.data.data.data)}).catch(function(l){console.log("errorrr.... ",l)})},Ta=()=>{const a={deviceId:"pvtLand"};t.post(`${W}`,a,i()).then(function(l){console.log("Private land approved list",l),xa(l.data.data.data)}).catch(function(l){console.log("errorrr.... ",l)})},Va=()=>{const a={};t.post(`${X}`,a,i()).then(function(l){console.log("APPROVED LIST",l.data.data),ha(l.data.data.data)}).catch(function(l){console.log("errorrr.... ",l)})},za=a=>{console.log("application to redirect form",a);const l={};t.post(`${m}`,l,i()).then(function(d){var j,S;console.log("agency dashboard22",(j=d==null?void 0:d.data)==null?void 0:j.status),((S=d==null?void 0:d.data)==null?void 0:S.status)==!0?r(`/agencyDashboard/${a}`):r("/advertDashboard"),pa(d)}).catch(function(d){console.log("errorrr.... ",d)})};return console.log("pending applications",p),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"",children:e.jsx(Oa,{openPaymentModal:ga,applicationDetails:ja,containApplicationType:fa})}),e.jsxs("div",{className:" h-full overflow-y-auto pb-12",children:[e.jsx("div",{children:e.jsxs("div",{className:" grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 mt-8 ",children:[e.jsx("div",{className:"col-span-4 ",children:e.jsxs("div",{className:"p-2",children:[e.jsx("h2",{className:`${Ba}`,children:" Advertisement Dashboard"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500 ",children:"You Can Get License To Advertise Your Business Name"})]})}),e.jsx("div",{className:"col-span-8  p-2",children:e.jsxs("div",{className:"text-right grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-2 ",children:[e.jsx("button",{type:"button",class:"py-2 px-2 text-sm inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",onClick:()=>r("/selfAdvrt/0/newapply"),children:"Apply Self Advertisement"}),e.jsx("button",{type:"button",class:"py-2 px-2 text-sm inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",onClick:()=>r("/movableVehicle/0/newapply"),children:"Apply Movable Vehicle"}),e.jsx("button",{type:"button",class:"py-2 px-2 text-sm inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",onClick:()=>r("/privateLand/0/newapply"),children:"Apply Private Land"}),e.jsx("button",{type:"button",class:"py-2 px-2 text-sm inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",onClick:()=>r("/agency/0/newapply"),children:"Apply Agency"})]})})]})}),e.jsx("div",{className:"",children:e.jsxs("ul",{className:"max-w-screen-xl border-b  flex items-center gap-1 md:gap-x-6 text-xs md:text-sm",children:[e.jsx("li",{className:`whitespace-nowrap py-2 border-b-2 ${v==1?"text-indigo-500 border-indigo-500":"border-white text-gray-500"}  `,children:e.jsxs("button",{onClick:()=>T(1),role:"tab",className:`flex  ${v==1?"":"bg-indigo-400 text-white"} items-center gap-x-2 py-2 px-2 rounded duration-150 hover:text-indigo-500 hover:bg-gray-50 active:bg-gray-100 font-medium`,children:[e.jsx("img",{className:"h-5 w-5",src:Ra,alt:"Pending"}),"Pending Applications"]})}),e.jsx("li",{className:`whitespace-nowrap py-2 border-b-2 ${v==2?"text-indigo-500 border-indigo-500":"border-white text-gray-500"}  `,children:e.jsxs("button",{onClick:()=>T(2),role:"tab",className:`flex  ${v==2?"":"bg-indigo-400 text-white"} items-center gap-x-2 py-2 px-2 rounded duration-150 hover:text-indigo-500 hover:bg-gray-50 active:bg-gray-100 font-medium`,children:[e.jsx("img",{className:"h-5 w-5",src:qa,alt:""}),"Approved Applications"]})})]})}),e.jsxs("div",{children:[V&&e.jsx(Ya,{height:"80",width:"80",radius:"9",color:"#6366f1",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),!V&&e.jsxs("section",{className:"overflow-auto mx-auto py-3 ",children:[e.jsx("div",{className:"flex items-center justify-between mt-2 mb-5"}),v==1&&e.jsxs("div",{className:"w-full text-sm ",children:[e.jsx("div",{className:"bg-gray-200 text-gray-700 py-3 font-semibold rounded-md hidden md:block lg:block ",children:e.jsxs("div",{className:" grid grid-cols-12 items-center",children:[e.jsx("p",{className:"px-4 col-span-3",children:"Application No.  "}),e.jsx("p",{className:"px-4 col-span-2",children:"Applicant Name "}),e.jsx("p",{className:"px-4 col-span-2",children:"Apply Date  "}),e.jsx("p",{className:"px-4 col-span-2",children:"Entity Name  "}),e.jsx("p",{className:"px-4 col-span-2",children:"Type  "}),e.jsx("p",{className:"px-4 col-span-1"})]})}),e.jsx("h1",{className:"text-lg p-2 text-gray-700 font-semibold",children:"Self Advertisement Applications list"}),(p==null?void 0:p.length)===0?e.jsx("div",{className:"bg-red-200 border-2 border-red-400 p-2",children:e.jsxs("span",{className:"text-red-600 px-4 flex",children:[e.jsx(y,{}),e.jsx("h1",{className:"ml-2",children:"No list available"})]})}):e.jsx(e.Fragment,{children:p==null?void 0:p.map((a,l)=>e.jsxs("div",{className:"w-full border border-gray-300 rounded-md my-2 bg-white",children:[e.jsxs("div",{className:" grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 items-center justify-between border-b border-gray-100",children:[e.jsxs("p",{className:"px-4 py-2 col-span-3",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Application No.  "}),e.jsx("span",{children:n(a==null?void 0:a.application_no)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Applicant Name"}),e.jsxs("span",{children:[" ",n(a==null?void 0:a.applicant)]})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Apply Date  "}),e.jsx("span",{children:n(a==null?void 0:a.application_date)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Entity Name  "}),e.jsx("span",{children:n(a==null?void 0:a.entity_name)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Type"}),e.jsx("span",{className:"text-indigo-500 font-semibold text-xs px-2 py-1 ",children:n(a==null?void 0:a.application_type)})]}),e.jsx("p",{className:"px-4 py-2 whitespace-nowrap text-right text-sm font-medium col-span-1 cursor-pointer",onClick:()=>b(l,"self"),children:c===l&&s==="self"?e.jsx(u,{size:24}):e.jsx(N,{size:24})})]}),e.jsx("div",{className:"flex-none bg-gray-100",children:c===l&&s==="self"&&e.jsx("div",{className:"p-5 ease-in duration-300",children:e.jsx("div",{className:"flex justify-between gap-3",children:e.jsxs("div",{className:"flex-1 justify-end",children:[(a==null?void 0:a.doc_upload_status)==0&&(a==null?void 0:a.parked)==1&&e.jsx("div",{className:"",children:e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:"Active",class:"float-right text-xs shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:d=>L(a==null?void 0:a.id,"selfAdvertisement"),children:"upload Document"})}),e.jsx("div",{className:"",children:e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:"Active",class:"float-right text-xs shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:d=>g(a==null?void 0:a.id,d.target.value,"selfAdvertisement"),children:"View"})})]})})})})]},a==null?void 0:a.id))}),e.jsx("h1",{className:"text-lg p-2 text-gray-700 font-semibold",children:"Movable Vehicle Applications list"}),(x==null?void 0:x.length)===0?e.jsx("div",{className:"bg-red-200 border-2 border-red-400 p-2",children:e.jsxs("span",{className:"text-red-600 px-4 flex",children:[e.jsx(y,{}),e.jsx("h1",{className:"ml-2",children:"No list available"})]})}):e.jsx(e.Fragment,{children:x==null?void 0:x.map((a,l)=>e.jsxs("div",{className:"w-full border border-gray-300 rounded-md my-2 bg-white",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 items-center justify-between border-b border-gray-100",children:[e.jsxs("p",{className:"px-4 py-2 col-span-3",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Application No.  "}),e.jsx("span",{children:n(a==null?void 0:a.application_no)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Applicant Name"}),e.jsxs("span",{children:[" ",n(a==null?void 0:a.applicant)]})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Apply Date  "}),e.jsx("span",{children:n(a==null?void 0:a.application_date)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Entity Name  "}),e.jsx("span",{children:n(a==null?void 0:a.entity_name)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Type"}),e.jsx("span",{className:"text-indigo-500 font-semibold text-xs px-2 py-1 ",children:n(a==null?void 0:a.application_type)})]}),e.jsx("p",{className:"px-4 py-2 whitespace-nowrap text-right text-sm font-medium col-span-1 cursor-pointer",onClick:()=>b(l,"vehicle"),children:c===l&&s==="vehicle"?e.jsx(u,{size:24}):e.jsx(N,{size:24})})]}),e.jsx("div",{className:"flex-none bg-gray-100",children:c===l&&s==="vehicle"&&e.jsx("div",{className:"p-5 ease-in duration-300",children:e.jsx("div",{className:"flex justify-between gap-3",children:e.jsxs("div",{className:"flex-1 justify-end",children:[(a==null?void 0:a.doc_upload_status)==0&&(a==null?void 0:a.parked)==1&&e.jsx("div",{className:"",children:e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:"Active",class:"float-right text-xs shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:d=>L(a==null?void 0:a.id,"movableVehicle"),children:"upload Document"})}),e.jsx("div",{className:"",children:e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:"Active",class:"float-right text-xs   shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:d=>g(a==null?void 0:a.id,d.target.value,"movableVehicle"),children:"View"})})]})})})})]},a==null?void 0:a.id))}),e.jsx("h1",{className:"text-lg p-2 text-gray-700 font-semibold",children:"Private Land  Applications list"}),(f==null?void 0:f.length)===0?e.jsx("div",{className:"bg-red-200 border-2 border-red-400 p-2",children:e.jsxs("span",{className:"text-red-600 px-4 flex",children:[e.jsx(y,{}),e.jsx("h1",{className:"ml-2",children:"No list available"})]})}):e.jsx(e.Fragment,{children:f==null?void 0:f.map((a,l)=>e.jsxs("div",{className:"w-full border border-gray-300 rounded-md my-2 bg-white",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 items-center justify-between border-b border-gray-100",children:[e.jsxs("p",{className:"px-4 py-2 col-span-3",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Application No.  "}),e.jsx("span",{children:n(a==null?void 0:a.application_no)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Applicant Name"}),e.jsxs("span",{children:[" ",n(a==null?void 0:a.applicant)]})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Apply Date  "}),e.jsx("span",{children:n(a==null?void 0:a.application_date)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Entity Name  "}),e.jsx("span",{children:n(a==null?void 0:a.entity_name)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Type"}),e.jsx("span",{className:"text-indigo-500 font-semibold text-xs px-2 py-1 ",children:n(a==null?void 0:a.application_type)})]}),e.jsx("p",{className:"px-4 py-2 whitespace-nowrap text-right text-sm font-medium col-span-1 cursor-pointer",onClick:()=>b(l,"land"),children:c===l&&s==="land"?e.jsx(u,{size:24}):e.jsx(N,{size:24})})]}),e.jsx("div",{className:"flex-none bg-gray-100",children:c===l&&s==="land"&&e.jsx("div",{className:"p-5 ease-in duration-300",children:e.jsx("div",{className:"flex justify-between gap-3",children:e.jsxs("div",{className:"flex-1 justify-end",children:[(a==null?void 0:a.doc_upload_status)==0&&(a==null?void 0:a.parked)==1&&e.jsx("div",{className:"",children:e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:"Active",class:"float-right text-xs shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:d=>L(a==null?void 0:a.id,"privateLand"),children:"upload Document"})}),e.jsx("div",{className:"",children:e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:"Active",class:"float-right text-xs   shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:d=>g(a==null?void 0:a.id,d.target.value,"privateLand"),children:"View"})})]})})})})]},a==null?void 0:a.id))}),e.jsx("h1",{className:"text-lg p-2 text-gray-700 font-semibold",children:"Agency Applications list"}),(h==null?void 0:h.length)===0?e.jsx("div",{className:"bg-red-200 border-2 border-red-400 p-2",children:e.jsxs("span",{className:"text-red-600 px-4 flex",children:[e.jsx(y,{}),e.jsx("h1",{className:"ml-2",children:"No list available"})]})}):e.jsx(e.Fragment,{children:h==null?void 0:h.map((a,l)=>e.jsxs("div",{className:"w-full border border-gray-300 rounded-md my-2 bg-white",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 items-center justify-between border-b border-gray-100",children:[e.jsxs("p",{className:"px-4 py-2 col-span-3",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Application No.  "}),e.jsx("span",{children:n(a==null?void 0:a.application_no)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Applicant Name"}),e.jsxs("span",{children:[" ",n(a==null?void 0:a.applicant)]})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Apply Date  "}),e.jsx("span",{children:n(a==null?void 0:a.application_date)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Entity Name  "}),e.jsx("span",{children:n(a==null?void 0:a.entity_name)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Type"}),e.jsx("span",{className:"text-indigo-500 font-semibold text-xs px-2 py-1 ",children:n(a==null?void 0:a.application_type)})]}),e.jsx("p",{className:"px-4 py-2 whitespace-nowrap text-right text-sm font-medium col-span-1 cursor-pointer",onClick:()=>b(l,"agency"),children:c===l&&s==="agency"?e.jsx(u,{size:24}):e.jsx(N,{size:24})})]}),e.jsx("div",{className:"flex-none bg-gray-100",children:c===l&&s==="agency"&&e.jsx("div",{className:"p-5 ease-in duration-300",children:e.jsx("div",{className:"flex justify-between gap-3",children:e.jsxs("div",{className:"flex-1 justify-end",children:[(a==null?void 0:a.doc_upload_status)==0&&(a==null?void 0:a.parked)==1&&e.jsx("div",{className:"",children:e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:"Active",class:"float-right text-xs shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:d=>L(a==null?void 0:a.id,"agency"),children:"upload Document"})}),e.jsx("div",{className:"",children:e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:"Active",class:"float-right text-xs   shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:d=>g(a==null?void 0:a.id,d.target.value,"agency"),children:"View"})})]})})})})]},a==null?void 0:a.id))})]}),v==2&&e.jsxs("div",{className:"w-full text-sm",children:[e.jsx("div",{className:"bg-gray-200 text-gray-700 py-3 font-semibold rounded-md ",children:e.jsxs("div",{className:" grid grid-cols-12 items-center",children:[e.jsx("p",{className:"px-4 col-span-3",children:"Application No.  "}),e.jsx("p",{className:"px-4 col-span-2",children:"Applicant Name "}),e.jsx("p",{className:"px-4 col-span-2",children:"Apply Date  "}),e.jsx("p",{className:"px-4 col-span-2",children:"Entity Name  "}),e.jsx("p",{className:"px-4 col-span-2",children:"Type  "}),e.jsx("p",{className:"px-4 col-span-1"})]})}),e.jsx("h1",{className:"text-lg p-2 text-gray-700 font-semibold",children:"Self Advertisement Applications list"}),(w==null?void 0:w.length)===0?e.jsx("div",{className:"bg-red-200 border-2 border-red-400 p-2",children:e.jsxs("span",{className:"text-red-600 px-4 flex",children:[e.jsx(y,{}),e.jsx("h1",{className:"ml-2",children:"No list available"})]})}):e.jsx(e.Fragment,{children:w==null?void 0:w.map((a,l)=>e.jsxs("div",{className:"w-full border border-gray-300 rounded-md my-2 bg-white",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 items-center justify-between border-b border-gray-100",children:[e.jsxs("p",{className:"px-4 py-2 col-span-3",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Application No.  "}),e.jsx("span",{children:n(a==null?void 0:a.application_no)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Applicant Name"}),e.jsxs("span",{children:[" ",n(a==null?void 0:a.applicant)]})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Apply Date  "}),e.jsx("span",{children:n(a==null?void 0:a.application_date)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Entity Name  "}),e.jsx("span",{children:n(a==null?void 0:a.entity_name)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Type"}),e.jsx("span",{className:"text-indigo-500 font-semibold text-xs px-2 py-1 ",children:n(a==null?void 0:a.application_type)})]}),e.jsx("p",{className:"px-4 py-2 whitespace-nowrap text-right text-sm font-medium col-span-1 cursor-pointer",onClick:()=>b(l,"approveSelf"),children:c===l&&s==="approveSelf"?e.jsx(u,{size:24}):e.jsx(N,{size:24})})]}),e.jsx("div",{className:"flex-none bg-gray-100",children:c===l&&s==="approveSelf"&&e.jsx("div",{className:"p-5 ease-in duration-300",children:e.jsx("div",{className:"flex justify-between gap-3",children:e.jsxs("div",{className:"flex-1 justify-end",children:[(a==null?void 0:a.renew_option)==1&&e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:"Approve",class:"float-right text-xs   shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:()=>r(`/selfAdvrt/${a==null?void 0:a.id}/renew`),children:"Renew License"}),e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:"Approve",class:"float-right text-xs   shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:d=>g(a==null?void 0:a.id,d.target.value,"selfAdvertisement"),children:"View"}),a.payment_status==1?e.jsx("h1",{className:"text-xs font-BreeSerif text-green-500",children:e.jsx("span",{children:e.jsx("button",{className:"float-right  shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:()=>r(`/approvalLetter/${a==null?void 0:a.id}/${a==null?void 0:a.workflow_id}`),children:"Download Approval Letter"})})}):e.jsx("div",{children:e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:a==null?void 0:a.type,class:"float-right text-xs   shadow-lg mr-2 rounded leading-5 border-gray-50 bg-green-500 px-2 py-1 text-white",onClick:C,children:"Pay"})})]})})})})]},a==null?void 0:a.id))}),e.jsx("h1",{className:"text-lg p-2 text-gray-700 font-semibold",children:"Movable Vehicle Applications list"}),(A==null?void 0:A.length)===0?e.jsx("div",{className:"bg-red-200 border-2 border-red-400 p-2",children:e.jsxs("span",{className:"text-red-600 px-4 flex",children:[e.jsx(y,{}),e.jsx("h1",{className:"ml-2",children:"No list available"})]})}):e.jsx(e.Fragment,{children:A==null?void 0:A.map((a,l)=>e.jsxs("div",{className:"w-full border border-gray-300 rounded-md my-2 bg-white",children:[e.jsxs("div",{className:" grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 items-center justify-between border-b border-gray-100",children:[e.jsxs("p",{className:"px-4 py-2 col-span-3",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Application No.  "}),e.jsx("span",{children:n(a==null?void 0:a.application_no)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Applicant Name"}),e.jsxs("span",{children:[" ",n(a==null?void 0:a.applicant)]})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Apply Date  "}),e.jsx("span",{children:n(a==null?void 0:a.application_date)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Entity Name  "}),e.jsx("span",{children:n(a==null?void 0:a.entity_name)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Type"}),e.jsx("span",{className:"text-indigo-500 font-semibold text-xs px-2 py-1 ",children:n(a==null?void 0:a.application_type)})]}),e.jsx("p",{className:"px-4 py-2 whitespace-nowrap text-right text-sm font-medium col-span-1 cursor-pointer",onClick:()=>b(l,"approveVehicle"),children:c===l&&s==="approveVehicle"?e.jsx(u,{size:24}):e.jsx(N,{size:24})})]}),e.jsx("div",{className:"flex-none bg-gray-100",children:c===l&&s==="approveVehicle"&&e.jsx("div",{className:"p-5 ease-in duration-300",children:e.jsx("div",{className:"flex justify-between gap-3",children:e.jsxs("div",{className:"flex-1 justify-end",children:[(a==null?void 0:a.renew_option)==1&&e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:"Approve",class:"float-right text-xs   shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:()=>r(`/movableVehicle/${a==null?void 0:a.id}/renew`),children:"Renew License"}),e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:"Approve",class:"float-right text-xs   shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:d=>g(a==null?void 0:a.id,d.target.value,"movableVehicle"),children:"View"}),a.payment_status==1?e.jsx("h1",{className:"text-xs font-BreeSerif text-green-500",children:e.jsx("span",{children:e.jsx("button",{className:"float-right  shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:()=>r(`/approvalLetter/${a==null?void 0:a.id}/${a==null?void 0:a.workflow_id}`),children:"Download Approval Letter"})})}):e.jsx("div",{className:"",children:e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:a==null?void 0:a.type,class:"float-right text-xs   shadow-lg mr-2 rounded leading-5 border-gray-50 bg-green-500 px-2 py-1 text-white",onClick:C,children:"Pay"})})]})})})})]},a==null?void 0:a.id))}),e.jsx("h1",{className:"text-lg p-2 text-gray-700 font-semibold",children:"Private Land Applications list"}),(k==null?void 0:k.length)===0?e.jsx("div",{className:"bg-red-200 border-2 border-red-400 p-2",children:e.jsxs("span",{className:"text-red-600 px-4 flex",children:[e.jsx(y,{}),e.jsx("h1",{className:"ml-2",children:"No list available"})]})}):e.jsx(e.Fragment,{children:k==null?void 0:k.map((a,l)=>e.jsxs("div",{className:"w-full border border-gray-300 rounded-md my-2 bg-white",children:[e.jsxs("div",{className:" grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 items-center justify-between border-b border-gray-100",children:[e.jsxs("p",{className:"px-4 py-2 col-span-3",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Application No.  "}),e.jsx("span",{children:n(a==null?void 0:a.application_no)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Applicant Name"}),e.jsxs("span",{children:[" ",n(a==null?void 0:a.applicant)]})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Apply Date  "}),e.jsx("span",{children:n(a==null?void 0:a.application_date)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Entity Name  "}),e.jsx("span",{children:n(a==null?void 0:a.entity_name)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Type"}),e.jsx("span",{className:"text-indigo-500 font-semibold text-xs px-2 py-1 ",children:n(a==null?void 0:a.application_type)})]}),e.jsx("p",{className:"px-4 py-2 whitespace-nowrap text-right text-sm font-medium col-span-1 cursor-pointer",onClick:()=>b(l,"approveLand"),children:c===l&&s==="approveLand"?e.jsx(u,{size:24}):e.jsx(N,{size:24})})]}),e.jsx("div",{className:"flex-none bg-gray-100",children:c===l&&s==="approveLand"&&e.jsx("div",{className:"p-5 ease-in duration-300",children:e.jsx("div",{className:"flex justify-between gap-3",children:e.jsxs("div",{className:"flex-1 justify-end",children:[(a==null?void 0:a.renew_option)==1&&e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:"Approve",class:"float-right text-xs   shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:()=>r(`/privateLand/${a==null?void 0:a.id}/renew`),children:"Renew License"}),e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:"Approve",class:"float-right text-xs   shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:d=>g(a==null?void 0:a.id,d.target.value,"privateLand"),children:"View"}),a.payment_status==1?e.jsx("h1",{className:"text-xs font-BreeSerif text-green-500",children:e.jsx("span",{children:e.jsx("button",{className:"float-right  shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:()=>r(`/approvalLetter/${a==null?void 0:a.id}/${a==null?void 0:a.workflow_id}`),children:"Download Approval Letter"})})}):e.jsx("div",{className:"",children:e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:a==null?void 0:a.type,class:"float-right text-xs   shadow-lg mr-2 rounded leading-5 border-gray-50 bg-green-500 px-2 py-1 text-white",onClick:C,children:"Pay"})})]})})})})]},a==null?void 0:a.id))}),e.jsx("h1",{className:"text-lg p-2 text-gray-700 font-semibold",children:"Agency Applications list"}),(_==null?void 0:_.length)===0?e.jsx("div",{className:"bg-red-200 border-2 border-red-400 p-2",children:e.jsxs("span",{className:"text-red-600 px-4 flex",children:[e.jsx(y,{}),e.jsx("h1",{className:"ml-2",children:"No list available"})]})}):e.jsx(e.Fragment,{children:_==null?void 0:_.map((a,l)=>e.jsxs("div",{className:"w-full border border-gray-300 rounded-md my-2 bg-white",children:[e.jsxs("div",{className:" grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 items-center justify-between border-b border-gray-100",children:[e.jsxs("p",{className:"px-4 py-2 col-span-3",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Application No.  "}),e.jsx("span",{children:n(a==null?void 0:a.application_no)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Applicant Name"}),e.jsxs("span",{children:[" ",n(a==null?void 0:a.applicant)]})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Apply Date  "}),e.jsx("span",{children:n(a==null?void 0:a.application_date)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2 ",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Entity Name  "}),e.jsx("span",{children:n(a==null?void 0:a.entity_name)})]}),e.jsxs("p",{className:"px-4 py-2 whitespace-nowrap col-span-2",children:[e.jsx("span",{className:"block md:hidden lg:hidden font-bold",children:"Type"}),e.jsx("span",{className:"text-indigo-500 font-semibold text-xs px-2 py-1 ",children:n(a==null?void 0:a.application_type)})]}),e.jsx("p",{className:"px-4 py-2 whitespace-nowrap text-right text-sm font-medium col-span-1 cursor-pointer",onClick:()=>b(l,"approveAgency"),children:c===l&&s==="approveAgency"?e.jsx(u,{size:24}):e.jsx(N,{size:24})})]}),e.jsx("div",{className:"flex-none bg-gray-100",children:c===l&&s==="approveAgency"&&e.jsx("div",{className:"p-5 ease-in duration-300",children:e.jsx("div",{className:"flex justify-between gap-3",children:e.jsxs("div",{className:"flex-1 justify-end",children:[e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:"Approve",class:"float-right text-xs   shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:d=>g(a==null?void 0:a.id,d.target.value,"agency"),children:"View"}),a.payment_status==1?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"float-right text-xs shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:()=>r(`/approvalLetter/${a==null?void 0:a.id}/${a==null?void 0:a.workflow_id}`),children:"Download Approval Letter"}),e.jsx("button",{id:a==null?void 0:a.id,className:"float-right text-xs   shadow-lg mr-2 rounded leading-5 border-gray-50 bg-indigo-500 px-2 py-1 text-white",onClick:()=>za(a==null?void 0:a.id),children:"Your Dashboard"})]}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",id:a==null?void 0:a.id,value:a==null?void 0:a.type,class:"float-right text-xs shadow-lg border  mr-2 rounded leading-5 border-gray-50 bg-green-500 px-2 py-1 text-white cursor-pointer",onClick:C,children:"Pay"}),e.jsxs("div",{type:"button",id:a==null?void 0:a.id,class:"text-md font-semibold mr-2  px-2 py-1 text-gray-800  cursor-pointer",disabled:!0,children:["Your application has been approved Now pay Your ",e.jsx("span",{className:"font-bold text-md text-indigo-500",children:" LICENSE FEE"})]})]})]})})})})]},a==null?void 0:a.id))})]})]})]}),e.jsx(M,{isOpen:wa,onAfterOpen:_a,onRequestClose:R,style:Y,contentLabel:"Example Modal",children:e.jsx("div",{class:"mx-auto px-0 overflow-y-auto",style:{width:"80vw",height:"100%"},children:e.jsx("div",{className:"h-[44rem] bg-white overflow-y-auto ",children:e.jsx(Ha,{data:$,applicationType:ua,applicationName:z,closeModal:R})})})}),e.jsx(M,{isOpen:Aa,onAfterOpen:Ca,onRequestClose:q,style:Y,contentLabel:"Example Modal",children:e.jsx("div",{class:"mx-auto px-0 overflow-y-auto",style:{width:"50vw",height:"100%"},children:e.jsx("div",{className:"h-[44rem] bg-violet-50 overflow-y-auto ",children:e.jsx(Ua,{data:$,closeModal:q,applicationName:z})})})}),e.jsx("div",{className:"h-[5rem]"})]})]})};export{Wa as default};
