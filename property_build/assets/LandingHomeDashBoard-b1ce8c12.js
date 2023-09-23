import{j as e,R as Ne,c as ie,u as oe,r as o,a as ne,A as J,b as G,B as re,S as ce,n as l,d as ye,e as p,M as ee,i as te,f as we,P as de,g as K,h as u,k as Se,l as Ae,m as I,o as ke,p as Le,q as Pe,F as Fe,s as Ee}from"./index-600e3118.js";import{N as V}from"./react-tooltip.esm.min-fa73f953.js";const R="/assets/role-9fef35d5.png";function xe(){return e.jsxs("div",{className:"p-4 w-screen h-screen fixed top-0 left-0 flex justify-center items-center",style:{zIndex:1e3},children:[e.jsx("div",{className:"h-screen w-screen top-0 left-0 opacity-30 absolute flex justify-center items-center",children:e.jsx("div",{className:"w-1/3 h-1/3 "})}),e.jsx("div",{className:"",children:e.jsx("span",{className:"loader px-20 py-20 text-center"})})]})}function ae(){const{notify:i}=Ne.useContext(ie);return i}const Te="/assets/money-7f967e56.png",se="/assets/forms-9a62bcb2.png",Ie="/assets/decline-e30a1128.png";function Re(){var N,L,P,y,F,E;const{t:i}=oe();o.useState(R);const[M,v]=o.useState(!1),[_,b]=o.useState(!1);o.useState("jsk");const[r,B]=o.useState(),[t,S]=o.useState(),[g,X]=o.useState("saf"),[H,A]=o.useState(!1);o.useRef();const{api_landingDashboard:O,api_landingDashboardCard:Y}=de(),k=ae(),a=ne();o.useEffect(()=>{f("saf"),z()},[]);const f=s=>{b(!0),X(s);let d;s=="saf"?d={}:d={applicationType:s},J.post(O,d,G()).then(function(x){var w;console.log("JskDashboardData",x==null?void 0:x.data),B((w=x==null?void 0:x.data)==null?void 0:w.data),b(!1)}).catch(function(x){b(!1),k("Network Problem","error"),console.log("errorrr.... ",x)})},z=()=>{v(!0);let s={};J.post(Y,s,G()).then(function(d){var x;console.log("JskDashboard card",d==null?void 0:d.data),S((x=d==null?void 0:d.data)==null?void 0:x.data),v(!1)}).catch(function(d){v(!1),k("Network Problem","error"),console.log("errorrr.... ",d)})};return console.log("selected applications...",g),M?e.jsx(e.Fragment,{children:e.jsx(re,{})}):H?e.jsx(ce,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[_&&e.jsx("div",{className:"inline",children:e.jsx(xe,{})}),e.jsx("div",{className:"grid grid-cols-12 mt-10",children:e.jsxs(e.Fragment,{children:[(t==null?void 0:t.totalApplication)!==void 0&&e.jsx("div",{className:"min-h-44 relative  transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white",children:[e.jsxs("div",{className:"px-6 py-4 flex items-center border-b border-gray-200",children:[e.jsxs("div",{className:"flex-initial",children:[" ",e.jsx("span",{className:"w-10 h-10 bg-indigo-100 rounded-full flex justify-center items-center",children:e.jsx("img",{className:"bg-indigo-50 rounded-full p-1",src:se,alt:""})})," "]}),(t==null?void 0:t.totalCollection)==null&&e.jsx("div",{className:"font-bold text-md mb-2 flex-1 text-center text-gray-700",children:"Received Applications"}),(t==null?void 0:t.totalCollection)!=null&&e.jsx("div",{className:"font-bold text-md mb-2 flex-1 text-center text-gray-700 capitalize",children:i("mainLandingPage.appliedApplicationsHeaderText.label")}),e.jsx("div",{className:"font-bold text-2xl mb-2 flex-initial",children:e.jsx("span",{className:"bg-indigo-50 text-indigo-600 px-2 py-1 rounded-lg",children:l(t==null?void 0:t.totalApplication)})})]}),e.jsxs("div",{className:"px-6 py-4 flex items-center border-b",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.saf)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"SAF"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.concession)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Con."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.harvesting)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"RWH"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.objection)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Obj."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.deactivation)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Deact."})]})]})]})}),(t==null?void 0:t.forwardedSaf)!==void 0&&e.jsx("div",{className:"min-h-44 relative  transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white",children:[e.jsxs("div",{className:"px-6 py-4 flex items-center border-b border-gray-200",children:[e.jsxs("div",{className:"flex-initial",children:[" ",e.jsx("span",{className:"w-10 h-10 bg-indigo-100 rounded-full flex justify-center items-center",children:e.jsx("img",{className:"bg-indigo-50 rounded-full p-1",src:se,alt:""})})," "]}),e.jsx("div",{className:"font-bold text-md mb-2 flex-1 text-center text-gray-700",children:"Forwared Applications"}),e.jsx("div",{className:"font-bold text-2xl mb-2 flex-initial",children:e.jsx("span",{className:"bg-indigo-50 text-indigo-600 px-2 py-1 rounded-lg",children:l(t==null?void 0:t.totalApplication)})})]}),e.jsxs("div",{className:"px-6 py-4 flex items-center border-b",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.saf)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"SAF"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.concession)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Con."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.harvesting)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"RWH"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.objection)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Obj."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.deactivation)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Deact."})]})]})]})}),(t==null?void 0:t.approvedSaf)!==void 0&&e.jsx("div",{className:"min-h-44 relative  transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white",children:[e.jsxs("div",{className:"px-6 py-4 flex items-center border-b border-gray-200",children:[e.jsxs("div",{className:"flex-initial",children:[" ",e.jsx("span",{className:"w-10 h-10 bg-green-100 rounded-full flex justify-center items-center",children:e.jsx("img",{className:"bg-green-50 rounded-full p-1",src:ye,alt:""})})," "]}),e.jsx("div",{className:"font-bold text-md mb-2 flex-1 text-center text-gray-700",children:"Approved Applications"}),e.jsx("div",{className:"font-bold text-2xl mb-2 flex-initial",children:e.jsx("span",{className:"bg-green-50 text-green-600 px-2 py-1 rounded-lg",children:l(t==null?void 0:t.totalApplication)})})]}),e.jsxs("div",{className:"px-6 py-4 flex items-center border-b",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.saf)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"SAF"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.concession)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Con."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.harvesting)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"RWH"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.objection)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Obj."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.deactivation)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Deact."})]})]})]})}),(t==null?void 0:t.rejectedSaf)!==void 0&&e.jsx("div",{className:"min-h-44 relative  transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white",children:[e.jsxs("div",{className:"px-6 py-4 flex items-center border-b border-gray-200",children:[e.jsxs("div",{className:"flex-initial",children:[" ",e.jsx("span",{className:"w-10 h-10 bg-red-100 rounded-full flex justify-center items-center",children:e.jsx("img",{className:"bg-red-50 rounded-full p-1",src:Ie,alt:""})})," "]}),e.jsx("div",{className:"font-bold text-md mb-2 flex-1 text-center text-gray-700",children:"Rejected Applications"}),e.jsx("div",{className:"font-bold text-2xl mb-2 flex-initial",children:e.jsx("span",{className:"bg-red-50 text-red-600 px-2 py-1 rounded-lg",children:l(t==null?void 0:t.totalApplication)})})]}),e.jsxs("div",{className:"px-6 py-4 flex items-center border-b",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.saf)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"SAF"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.concession)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Con."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.harvesting)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"RWH"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.objection)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Obj."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.deactivation)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Deact."})]})]})]})}),(t==null?void 0:t.totalCollection)!==void 0&&e.jsx("div",{className:"min-h-44 relative  transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white",children:[e.jsxs("div",{className:"px-6 py-4 flex items-center border-b border-gray-200",children:[e.jsxs("div",{className:"flex-initial",children:[" ",e.jsx("span",{className:"w-10 h-10 bg-green-50 rounded-full flex justify-center items-center",children:e.jsx("img",{className:"bg-green-200 rounded-full p-1",src:Te,alt:""})})," "]}),e.jsx("div",{className:"font-bold text-md mb-2 flex-1 text-center text-gray-700 capitalize",children:i("mainLandingPage.TotalCollectionHeaderText.label")}),e.jsx("div",{className:"font-bold text-2xl mb-2 flex-initial",children:e.jsx("span",{className:"bg-green-50 text-green-400 px-2 py-1 rounded-lg",children:l(t==null?void 0:t.totalCollection)})})]}),e.jsxs("div",{className:"px-6 py-4 flex items-center border-b",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.totalCash)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Cash"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.totalCheque)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Cheque"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.totalDD)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"DD"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(t==null?void 0:t.totalOnline)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Online"})]})]})]})}),(t==null?void 0:t.totalApplication)===void 0&&e.jsxs("div",{className:"min-h-44 relative transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:[e.jsxs("div",{className:"mb-4 w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center",children:[e.jsx("div",{className:"flex-1",children:i("mainLandingPage.collectionReport.label")}),e.jsx("div",{onClick:()=>a("/collection-report"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center text-indigo-500 font-bold",children:e.jsx(p,{className:"inline text-indigo-500"})})]}),e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center",children:[e.jsx("div",{className:"flex-1",children:"DCB Report"}),e.jsx("div",{onClick:()=>a("/dcb-report"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center text-indigo-500 font-bold",children:e.jsx(p,{className:"inline text-indigo-500"})})]})]}),(t==null?void 0:t.totalApplication)===void 0&&e.jsxs("div",{className:"min-h-44 relative transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:[e.jsxs("div",{className:"mb-4 w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center",children:[e.jsx("div",{className:"flex-1",children:"Level Pending Report"}),e.jsx("div",{onClick:()=>a("/level-wise-pending-report"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center",children:e.jsx(p,{className:"inline text-indigo-500"})})]}),e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center",children:[e.jsx("div",{className:"flex-1",children:"Deactivated Holding Report"}),e.jsx("div",{onClick:()=>a("/deactivated-holding"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center",children:e.jsx(p,{className:"inline text-indigo-500"})})]})]}),(t==null?void 0:t.totalApplication)!==void 0&&(t==null?void 0:t.totalCollection)==null&&(t==null?void 0:t.totalApprovedApplication)==null&&e.jsxs("div",{className:"min-h-44 relative transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:[e.jsxs("div",{className:"mb-4 w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center",children:[e.jsx("div",{className:"flex-1",children:"GBSAF Workflow"}),e.jsx("div",{onClick:()=>a("/gbsaf-workflow"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center",children:e.jsx(p,{className:"inline text-indigo-500"})})]}),e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center",children:[e.jsx("div",{className:"flex-1",children:"Concession Workflow"}),e.jsx("div",{onClick:()=>a("/concession-workflow"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center",children:e.jsx(p,{className:"inline text-indigo-500"})})]})]}),(t==null?void 0:t.totalCollection)!=null&&e.jsxs("div",{className:"min-h-44 relative transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:[e.jsxs("div",{className:"mb-4 w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center ",children:[e.jsx("div",{className:"flex-1 capitalize",children:i("mainLandingPage.collectionReport.label")}),e.jsx("div",{onClick:()=>a("/collection-report-mobile"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center",children:e.jsx(p,{className:"inline text-indigo-500"})})]}),e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center",children:[e.jsx("div",{className:"flex-1",children:i("mainLandingPage.searchApplications.label")}),e.jsx("div",{onClick:()=>a("/searchAppliedProperty/direct/direct/direct"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center",children:e.jsx(p,{className:"inline text-indigo-500"})})]})]}),e.jsx("div",{className:"col-span-12 my-0 md:my-2"})]})}),(t==null?void 0:t.totalApplication)!==void 0&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("div",{className:"px-1 font-semibold  text-gray-500 mt-10 google-roboto",children:e.jsxs("div",{className:"flex-initial capitalize",children:[e.jsx(ee,{className:"inline"}),i("mainLandingPage.recentApplicationsHeaderText.label")]})}),e.jsx("div",{className:"mt-2 px-4",children:e.jsxs("div",{className:"w-full flex-3 space-y-2",children:[e.jsx("button",{className:`mr-4 ${g=="saf"?"bg-indigo-500 text-white":"border border-indigo-500 text-indigo-500 bg-white"}   px-4 py-0.5 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white`,onClick:()=>f("saf"),children:i("mainLandingPage.safButtonText.label")}),e.jsx("button",{className:`mr-4 ${g=="Concession"?"bg-indigo-500 text-white":"border border-indigo-500 text-indigo-500 bg-white"}  px-2 py-0.5 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white`,onClick:()=>f("Concession"),children:i("mainLandingPage.concessionButtonText.label")}),e.jsx("button",{className:`mr-4 ${g=="Harvesting"?"bg-indigo-500 text-white":"border border-indigo-500 text-indigo-500 bg-white"}  px-2 py-0.5 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white`,onClick:()=>f("Harvesting"),children:i("mainLandingPage.rainWaterHarvestingButtonText.label")}),e.jsx("button",{className:`mr-4 ${g=="Objection"?"bg-indigo-500 text-white":"border border-indigo-500 text-indigo-500 bg-white"}  px-2 py-0.5 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white`,onClick:()=>f("Objection"),children:i("mainLandingPage.objectionButtonText.label")}),e.jsx("button",{className:`mr-4 ${g=="Deactivation"?"bg-indigo-500 text-white":"border border-indigo-500 text-indigo-500 bg-white"}  px-2 py-0.5 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white`,onClick:()=>f("Deactivation"),children:i("mainLandingPage.deactivationButtonText.label")})]})})]}),e.jsx(e.Fragment,{children:e.jsx("div",{className:"container mx-auto mt-2  rounded-lg",children:e.jsx("div",{className:"py-0 shadow-xl mt-3",children:e.jsx("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto w-full",children:e.jsx("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"bg-indigo-50",children:e.jsxs("tr",{className:"font-semibold",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:i("mainLandingPage.tblClmApplicationNo.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:i("mainLandingPage.tblClmApplicantName.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:i("mainLandingPage.tblClmAssesmentTypeNew.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:i("mainLandingPage.tblClmApplyDate.label")}),e.jsx("th",{scope:"col",className:"px-2 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:i("mainLandingPage.tblClmActionText.label")})]})}),e.jsxs("tbody",{children:[((N=r==null?void 0:r.recentApplications)==null?void 0:N.length)!=0&&((L=r==null?void 0:r.recentApplications)==null?void 0:L.map((s,d)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(s==null?void 0:s.applicationNo)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(s==null?void 0:s.applicantname)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(s==null?void 0:s.assessmentType)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:te(s==null?void 0:s.applyDate)}),e.jsxs("td",{className:"px-1 py-2 text-sm text-left",children:[" ",e.jsx("button",{onClick:x=>a(`/propApplicationDetails/${s==null?void 0:s.id}`),className:"bg-indigo-500 px-3 py-1 rounded-md shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:i("mainLandingPage.viewButtonText.label")})]})]}))),((P=r==null?void 0:r.recentApplications)==null?void 0:P.length)==0&&e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center text-red-500 font-semibold py-4",children:"No Application Found"})})]})]})})})})})})]}),(r==null?void 0:r.recentPayments)&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container mx-auto mt-10 rounded-lg",children:[e.jsxs("div",{className:"px-1 font-semibold  text-gray-500 mt-10 google-roboto",children:[e.jsxs("div",{className:"flex-initial",children:[e.jsx(ee,{className:"inline"}),i("mainLandingPage.recentPaymentHeaderText.label")]}),e.jsx("div",{className:"flex-1 float-right"})]}),e.jsx("div",{className:"py-0 shadow-xl mt-3",children:e.jsx("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e.jsx("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"bg-indigo-50",children:e.jsxs("tr",{className:"font-semibold",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:i("mainLandingPage.tblClmTransactionNo.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:i("mainLandingPage.tblClmAmount.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:i("mainLandingPage.tblClmPaymentMode.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:i("mainLandingPage.tblClmDate.label")})]})}),e.jsxs("tbody",{children:[((y=r==null?void 0:r.recentPayments)==null?void 0:y.length)!=0&&((F=r==null?void 0:r.recentPayments)==null?void 0:F.map((s,d)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(s==null?void 0:s.transactionNo)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:we(s==null?void 0:s.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(s==null?void 0:s.paymentMode)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:te(s==null?void 0:s.transactionDate)})]}))),((E=r==null?void 0:r.recentPayments)==null?void 0:E.length)==0&&e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center text-red-500 font-semibold py-4",children:"No Payment Found"})})]})]})})})})]})})]})}const le={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};K.setAppElement("#root");function ze(){const{t:i}=oe();o.useState("");const[M,v]=o.useState(!1),[_,b]=o.useState(!1),[r,B]=o.useState(null),[t,S]=o.useState(R);o.useState(R);const[g,X]=o.useState(!1),[H,A]=o.useState(!1);o.useState("jsk");const[O,Y]=o.useState(!1),[k,a]=o.useState(!1),[f,z]=o.useState(null),N=o.useRef(),{api_editAdminProfile:L}=de(),P=ae(),{roles:y,setroles:F,setuserName:E,userName:s,userUlbName:d,setuserUlbName:x,userMobile:w,setuserMobile:Me,userEmail:Q,setuserEmail:_e,userImage:Z,setuserImage:Be}=o.useContext(ie);o.useEffect(()=>{let n=s==""?u("userName"):s,m=y==""?u("roles"):y;d==""&&u("userUlbName"),w==""&&u("userMobile"),Q==""&&u("userEmail"),Z==""&&u("userImage"),E(n),F(m)},[]);const j=u("roles"),me=["JSK"],ge=o.useMemo(()=>Array.isArray(j)&&j.some(n=>me.includes(n)),[j]),fe=["DEALING ASSISTANT","EXECUTIVE OFFICER","BACK OFFICE","SECTION INCHARGE"],he=o.useMemo(()=>Array.isArray(j)&&j.some(n=>fe.includes(n)),[j]);function U(){S(R),c.resetForm(),v(!1)}function pe(){b(!0)}function q(){b(!1)}const W=ne();Se("Home",!0);const ue=Ae({image:I().required("Select image"),name:I().required("Enter name"),mobileNo:I().required("Eneter mobile no.").max(10,"Enter maximum 10 digits").min(10,"Enter minimum 10 digits"),email:I().required("enter valid email address")}),c=ke({initialValues:{name:"",image:"",mobileNo:"",email:""},onSubmit:(n,m)=>{console.log("admin edit profile ",n),pe()},validationSchema:ue}),be=n=>{n.target.files[0],S(URL.createObjectURL(n.target.files[0])),B(n.target.files[0])},je=n=>{let m=n.target.name,T=n.target.value;m=="image"&&be(n),m=="mobileNo"&&c.setFieldValue("mobileNo",Ee(T,c.values.mobileNo,10))},ve=()=>{var m,T,C;U(),q(),A(!0);let n=new FormData;n.append("name",(m=c.values)==null?void 0:m.name),n.append("mobileNo",(T=c.values)==null?void 0:T.mobileNo),n.append("email",(C=c.values)==null?void 0:C.email),n.append("photo",r),console.log("before post edit profile",n),J.post(L,n,G()).then(function(h){var D;console.log("edit profile response ....",h==null?void 0:h.data),(D=h==null?void 0:h.data)!=null&&D.status?P("Profile Updated Successfully !","success"):$(!0,"Error occured while updating profile. Please try again later."),A(!1)}).catch(function(h){A(!1),$(!0,"Error occured while updating profile. Please try again later."),console.log("errorrr.... ",h)})},$=(n,m)=>{z(m),a(n)};return g?e.jsx(e.Fragment,{children:e.jsx(re,{})}):O?e.jsx(ce,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[H&&e.jsx(xe,{}),k&&e.jsx(Le,{activateBottomErrorCard:$,errorTitle:f}),e.jsx("div",{className:"w-full bg-white shadow-xl py-4 px-2 md:px-6 md:py-6 mt-4",children:e.jsxs("div",{className:"flex flex-col md:flex-row",children:[e.jsxs("div",{className:"flex-initial ml-4",children:[e.jsx("div",{className:"text-2xl font-bold text-black google-roboto capitalize",children:i("mainLandingPage.mainHeadingText.label")}),e.jsx("div",{className:"mt-1",children:e.jsxs("span",{className:"text-gray-600",children:[e.jsx(Pe,{className:"inline text-green-500 text-xl"}),i("mainLandingPage.subHeadingText.label")," "]})}),e.jsx("div",{})]}),e.jsxs("div",{className:"flex-1 flex text-right justify-center items-center md:justify-end md:items-end h-full mt-4 md:mt-0",children:[e.jsx(V,{anchorId:"button-3"}),e.jsx("button",{id:"button-3","data-tooltip-content":"Click to change password.",onClick:()=>W("/change-password/change"),className:"mr-4 cypress_floor_add_update text-gray-700 px-4 md:px-8 py-3 bg-white-600 font-medium border text-xs leading-tight capitalize rounded-xl shadow-md hover:bg-indigo-500 hover:shadow-lg focus:bg-indigo-500 hover:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:i("mainLandingPage.changePasswordButtonText.label")}),he&&e.jsxs(e.Fragment,{children:[e.jsx(V,{anchorId:"button-1"}),e.jsx("button",{id:"button-1","data-tooltip-content":"Click to go to saf workflow.",onClick:()=>W("/saf-workflow"),className:"cypress_floor_add_update text-white px-4 md:px-8 py-3 bg-indigo-500 font-medium border text-xs leading-tight capitalize rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:"SAF Workflow"})]}),ge&&e.jsxs(e.Fragment,{children:[e.jsx(V,{anchorId:"button-2"}),e.jsx("button",{id:"button-2","data-tooltip-content":"Click to apply new assessment.",onClick:()=>W("/saf-entry"),className:"cypress_floor_add_update text-white px-4 md:px-8 py-3 bg-indigo-500 font-medium border text-xs leading-tight capitalize rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:i("mainLandingPage.applyAssesmentButtonText.label")})]})]})]})}),e.jsx(Re,{}),e.jsx("div",{className:"w-full h-10"}),e.jsx(K,{isOpen:M,onRequestClose:U,style:le,contentLabel:"Example Modal",children:e.jsxs("div",{class:"relative bg-white p-10 rounded-lg shadow-xl border-2 border-gray-50 w-full md:w-96",children:[e.jsx("button",{onClick:U,type:"button",class:"absolute top-3 right-2.5 bg-red-500 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{className:"max-w-2xl mx-auto",children:[e.jsx("div",{className:"font-semibold text-2xl text-center w-full",children:"Edit profile"}),e.jsx("div",{className:"w-full h-3"}),e.jsx("form",{onSubmit:c.handleSubmit,onChange:je,children:e.jsxs("div",{className:"grid col-span-12 relative",children:[e.jsx("div",{className:"form-group col-span-12 flex justify-center relative mt-5",children:e.jsxs("div",{className:"w-28 h-28 border rounded-full",children:[e.jsx("img",{className:"w-28 h-28 rounded-full border bg-gray-700 shadow-xl",src:t,alt:""}),e.jsx("span",{className:"absolute bottom-2 left-0 right-0 text-center ",children:e.jsx("span",{onClick:()=>N.current.click(),className:"bg-white text-indigo-500 px-1 border rounded-xl text-xs cursor-pointer font-semibold hover:scale-105",children:"Change"})}),e.jsx("span",{className:"text-red-600 absolute text-xs -bottom-3 text-center",children:c.touched.image&&c.errors.image?c.errors.image:null})]})}),e.jsxs("div",{className:"form-group col-span-12 invisible absolute top-0 left-0",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Image",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{ref:N,...c.getFieldProps("image"),type:"file",className:"cypress_khata_no form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]}),e.jsxs("div",{className:"form-group mb-4 col-span-12 mt-5",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Mobile No.",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...c.getFieldProps("name"),type:"text",className:"cypress_plot_no form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter mobile no."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:c.touched.name&&c.errors.name?c.errors.name:null})]}),e.jsxs("div",{className:"form-group mb-4 col-span-12 mt-5",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Mobile No.",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...c.getFieldProps("mobileNo"),type:"text",className:"cypress_plot_no form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter mobile no."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:c.touched.mobileNo&&c.errors.mobileNo?c.errors.mobileNo:null})]}),e.jsxs("div",{className:"form-group mb-6 col-span-12",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Email",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...c.getFieldProps("email"),type:"text",className:"cypress_plot_no form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter email."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:c.touched.email&&c.errors.email?c.errors.email:null})]}),e.jsx("div",{className:"col-span-12 text-center mt-2",children:e.jsx("button",{type:"submit",className:"cypress_next2_button text-md w-full px-6 py-2.5 bg-indigo-600 text-white font-medium  leading-tight  rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:"Save"})})]})})]})]})}),e.jsx(K,{isOpen:_,onRequestClose:q,style:le,contentLabel:"Example Modal",children:e.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50",children:[e.jsx("button",{onClick:q,type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center",children:[e.jsxs("div",{className:"w-full flex h-10",children:[" ",e.jsx("span",{className:"mx-auto",children:e.jsx(Fe,{size:30})})]}),e.jsx("h3",{class:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400",children:"Are you sure to update details ?"}),e.jsx("button",{type:"button",class:"text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",onClick:ve,children:"Yes, I'm sure"})]})]})})]})}export{ze as default};
