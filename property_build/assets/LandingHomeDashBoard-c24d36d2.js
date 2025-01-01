import{j as e,R as Ne,I as ie,X as oe,r as i,e as ne,A as G,a9 as J,B as re,S as ce,n as l,c6 as f,w as ee,ad as se,i as ye,g as xe,af as K,c7 as g,a as we,p as Se,q as T,v as Ae,a7 as ke,c8 as Le,br as $,aW as Pe,c9 as Fe}from"./index-161aea56.js";import{c as Ee}from"./check-f4ca1ac8.js";const R="/assets/role-9fef35d5.png";function de(){return e.jsxs("div",{className:"p-4 w-screen h-screen fixed top-0 left-0 flex justify-center items-center",style:{zIndex:1e3},children:[e.jsx("div",{className:"h-screen w-screen top-0 left-0 opacity-30 absolute flex justify-center items-center",children:e.jsx("div",{className:"w-1/3 h-1/3 "})}),e.jsx("div",{className:"",children:e.jsx("span",{className:"loader px-20 py-20 text-center"})})]})}function ae(){const{notify:o}=Ne.useContext(ie);return o}const Ie="/assets/money-7f967e56.png",te="/assets/forms-9a62bcb2.png",Te="/assets/decline-e30a1128.png";function Re(){var j,k,L,v,P,F;const{t:o}=oe();i.useState(R);const[_,u]=i.useState(!1),[M,p]=i.useState(!1);i.useState("jsk");const[n,O]=i.useState(),[s,y]=i.useState(),[w,X]=i.useState("saf"),[B,S]=i.useState(!1);i.useRef();const{api_landingDashboard:H,api_landingDashboardCard:Y}=xe(),A=ae(),d=ne();i.useEffect(()=>{b("saf"),z()},[]);const b=t=>{p(!0),X(t);let x;t=="saf"?x={}:x={applicationType:t},G.post(H,x,J()).then(function(m){var N;O((N=m==null?void 0:m.data)==null?void 0:N.data),p(!1)}).catch(function(m){p(!1),A("Network Problem","error")})},z=()=>{u(!0);let t={};G.post(Y,t,J()).then(function(x){var m;y((m=x==null?void 0:x.data)==null?void 0:m.data),u(!1)}).catch(function(x){u(!1),A("Network Problem","error")})};return _?e.jsx(e.Fragment,{children:e.jsx(re,{})}):B?e.jsx(ce,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[M&&e.jsx("div",{className:"inline",children:e.jsx(de,{})}),e.jsx("div",{className:"grid grid-cols-12 mt-10",children:e.jsxs(e.Fragment,{children:[(s==null?void 0:s.totalApplication)!==void 0&&e.jsx("div",{className:"min-h-44 relative  transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white",children:[e.jsxs("div",{className:"px-6 py-4 flex items-center border-b border-gray-200",children:[e.jsxs("div",{className:"flex-initial",children:[" ",e.jsx("span",{className:"w-10 h-10 bg-indigo-100 rounded-full flex justify-center items-center",children:e.jsx("img",{className:"bg-indigo-50 rounded-full p-1",src:te,alt:""})})," "]}),(s==null?void 0:s.totalCollection)==null&&e.jsx("div",{className:"font-bold text-md mb-2 flex-1 text-center text-gray-700",children:"Received Applications"}),(s==null?void 0:s.totalCollection)!=null&&e.jsx("div",{className:"font-bold text-md mb-2 flex-1 text-center text-gray-700 capitalize",children:o("mainLandingPage.appliedApplicationsHeaderText.label")}),e.jsx("div",{className:"font-bold text-2xl mb-2 flex-initial",children:e.jsx("span",{className:"bg-indigo-50 text-indigo-600 px-2 py-1 rounded-lg",children:l(s==null?void 0:s.totalApplication)})})]}),e.jsxs("div",{className:"px-6 py-4 flex items-center border-b",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.saf)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"SAF"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.concession)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Con."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.harvesting)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"RWH"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.objection)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Obj."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.deactivation)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Deact."})]})]})]})}),(s==null?void 0:s.forwardedSaf)!==void 0&&e.jsx("div",{className:"min-h-44 relative  transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white",children:[e.jsxs("div",{className:"px-6 py-4 flex items-center border-b border-gray-200",children:[e.jsxs("div",{className:"flex-initial",children:[" ",e.jsx("span",{className:"w-10 h-10 bg-indigo-100 rounded-full flex justify-center items-center",children:e.jsx("img",{className:"bg-indigo-50 rounded-full p-1",src:te,alt:""})})," "]}),e.jsx("div",{className:"font-bold text-md mb-2 flex-1 text-center text-gray-700",children:"Forwared Applications"}),e.jsx("div",{className:"font-bold text-2xl mb-2 flex-initial",children:e.jsx("span",{className:"bg-indigo-50 text-indigo-600 px-2 py-1 rounded-lg",children:l(s==null?void 0:s.totalApplication)})})]}),e.jsxs("div",{className:"px-6 py-4 flex items-center border-b",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.saf)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"SAF"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.concession)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Con."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.harvesting)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"RWH"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.objection)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Obj."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.deactivation)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Deact."})]})]})]})}),(s==null?void 0:s.approvedSaf)!==void 0&&e.jsx("div",{className:"min-h-44 relative  transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white",children:[e.jsxs("div",{className:"px-6 py-4 flex items-center border-b border-gray-200",children:[e.jsxs("div",{className:"flex-initial",children:[" ",e.jsx("span",{className:"w-10 h-10 bg-green-100 rounded-full flex justify-center items-center",children:e.jsx("img",{className:"bg-green-50 rounded-full p-1",src:Ee,alt:""})})," "]}),e.jsx("div",{className:"font-bold text-md mb-2 flex-1 text-center text-gray-700",children:"Approved Applications"}),e.jsx("div",{className:"font-bold text-2xl mb-2 flex-initial",children:e.jsx("span",{className:"bg-green-50 text-green-600 px-2 py-1 rounded-lg",children:l(s==null?void 0:s.totalApplication)})})]}),e.jsxs("div",{className:"px-6 py-4 flex items-center border-b",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.saf)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"SAF"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.concession)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Con."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.harvesting)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"RWH"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.objection)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Obj."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.deactivation)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Deact."})]})]})]})}),(s==null?void 0:s.rejectedSaf)!==void 0&&e.jsx("div",{className:"min-h-44 relative  transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white",children:[e.jsxs("div",{className:"px-6 py-4 flex items-center border-b border-gray-200",children:[e.jsxs("div",{className:"flex-initial",children:[" ",e.jsx("span",{className:"w-10 h-10 bg-red-100 rounded-full flex justify-center items-center",children:e.jsx("img",{className:"bg-red-50 rounded-full p-1",src:Te,alt:""})})," "]}),e.jsx("div",{className:"font-bold text-md mb-2 flex-1 text-center text-gray-700",children:"Rejected Applications"}),e.jsx("div",{className:"font-bold text-2xl mb-2 flex-initial",children:e.jsx("span",{className:"bg-red-50 text-red-600 px-2 py-1 rounded-lg",children:l(s==null?void 0:s.totalApplication)})})]}),e.jsxs("div",{className:"px-6 py-4 flex items-center border-b",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.saf)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"SAF"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.concession)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Con."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.harvesting)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"RWH"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.objection)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Obj."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.deactivation)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Deact."})]})]})]})}),(s==null?void 0:s.totalCollection)!==void 0&&e.jsx("div",{className:"min-h-44 relative  transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white",children:[e.jsxs("div",{className:"px-6 py-4 flex items-center border-b border-gray-200",children:[e.jsxs("div",{className:"flex-initial",children:[" ",e.jsx("span",{className:"w-10 h-10 bg-green-50 rounded-full flex justify-center items-center",children:e.jsx("img",{className:"bg-green-200 rounded-full p-1",src:Ie,alt:""})})," "]}),e.jsx("div",{className:"font-bold text-md mb-2 flex-1 text-center text-gray-700 capitalize",children:o("mainLandingPage.TotalCollectionHeaderText.label")}),e.jsx("div",{className:"font-bold text-2xl mb-2 flex-initial",children:e.jsx("span",{className:"bg-green-50 text-green-400 px-2 py-1 rounded-lg",children:l(s==null?void 0:s.totalCollection)})})]}),e.jsxs("div",{className:"px-6 py-4 flex items-center border-b",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.totalCash)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Cash"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.totalCheque)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Cheque"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.totalDD)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"DD"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-lg flex-1 text-gray-700",children:l(s==null?void 0:s.totalOnline)}),e.jsx("div",{className:"text-xs mb-2 font-semibold text-gray-400",children:"Online"})]})]})]})}),(s==null?void 0:s.totalApplication)===void 0&&e.jsxs("div",{className:"min-h-44 relative transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:[e.jsxs("div",{className:"mb-4 w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center",children:[e.jsx("div",{className:"flex-1",children:o("mainLandingPage.collectionReport.label")}),e.jsx("div",{onClick:()=>d("/collection-report"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center text-indigo-500 font-bold",children:e.jsx(f,{className:"inline text-indigo-500"})})]}),e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center",children:[e.jsx("div",{className:"flex-1",children:"DCB Report"}),e.jsx("div",{onClick:()=>d("/dcb-report"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center text-indigo-500 font-bold",children:e.jsx(f,{className:"inline text-indigo-500"})})]})]}),(s==null?void 0:s.totalApplication)===void 0&&e.jsxs("div",{className:"min-h-44 relative transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:[e.jsxs("div",{className:"mb-4 w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center",children:[e.jsx("div",{className:"flex-1",children:"Level Pending Report"}),e.jsx("div",{onClick:()=>d("/level-wise-pending-report"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center",children:e.jsx(f,{className:"inline text-indigo-500"})})]}),e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center",children:[e.jsx("div",{className:"flex-1",children:"Deactivated Holding Report"}),e.jsx("div",{onClick:()=>d("/deactivated-holding"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center",children:e.jsx(f,{className:"inline text-indigo-500"})})]})]}),(s==null?void 0:s.totalApplication)!==void 0&&(s==null?void 0:s.totalCollection)==null&&(s==null?void 0:s.totalApprovedApplication)==null&&e.jsxs("div",{className:"min-h-44 relative transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:[e.jsxs("div",{className:"mb-4 w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center",children:[e.jsx("div",{className:"flex-1",children:"GBSAF Workflow"}),e.jsx("div",{onClick:()=>d("/gbsaf-workflow"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center",children:e.jsx(f,{className:"inline text-indigo-500"})})]}),e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center",children:[e.jsx("div",{className:"flex-1",children:"Concession Workflow"}),e.jsx("div",{onClick:()=>d("/concession-workflow"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center",children:e.jsx(f,{className:"inline text-indigo-500"})})]})]}),(s==null?void 0:s.totalCollection)!=null&&e.jsxs("div",{className:"min-h-44 relative transition-all duration-500 col-span-12 px-4 md:px-0 md:col-span-4 md:pr-20 ",children:[e.jsxs("div",{className:"mb-4 w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center ",children:[e.jsx("div",{className:"flex-1 capitalize",children:o("mainLandingPage.collectionReport.label")}),e.jsx("div",{onClick:()=>d("/collection-report"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center",children:e.jsx(f,{className:"inline text-indigo-500"})})]}),e.jsxs("div",{className:"w-full rounded overflow-hidden shadow-lg bg-white p-4 px-10 flex items-center",children:[e.jsx("div",{className:"flex-1",children:o("mainLandingPage.searchApplications.label")}),e.jsx("div",{onClick:()=>d("/searchAppliedProperty/direct/direct/direct"),className:"cursor-pointer hover:bg-indigo-200 w-10 h-10 bg-indigo-50 rounded-full inline-flex justify-center items-center",children:e.jsx(f,{className:"inline text-indigo-500"})})]})]}),e.jsx("div",{className:"col-span-12 my-0 md:my-2"})]})}),(s==null?void 0:s.totalApplication)!==void 0&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("div",{className:"px-1 font-semibold  text-gray-500 mt-10 google-roboto",children:e.jsxs("div",{className:"flex-initial capitalize",children:[e.jsx(ee,{className:"inline"}),o("mainLandingPage.recentApplicationsHeaderText.label")]})}),e.jsx("div",{className:"mt-2 px-4",children:e.jsxs("div",{className:"w-full flex-3 space-y-2",children:[e.jsx("button",{className:`mr-4 ${w=="saf"?"bg-indigo-500 text-white":"border border-indigo-500 text-indigo-500 bg-white"}   px-4 py-0.5 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white`,onClick:()=>b("saf"),children:o("mainLandingPage.safButtonText.label")}),e.jsx("button",{className:`mr-4 ${w=="Objection"?"bg-indigo-500 text-white":"border border-indigo-500 text-indigo-500 bg-white"}  px-2 py-0.5 shadow-lg hover:scale-105 rounded-sm hover:bg-indigo-500 hover:text-white`,onClick:()=>b("Objection"),children:o("mainLandingPage.objectionButtonText.label")})]})})]}),e.jsx(e.Fragment,{children:e.jsx("div",{className:"container mx-auto mt-2  rounded-lg",children:e.jsx("div",{className:"py-0 shadow-xl mt-3",children:e.jsx("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto w-full",children:e.jsx("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"bg-indigo-50",children:e.jsxs("tr",{className:"font-semibold",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:o("mainLandingPage.tblClmApplicationNo.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:o("mainLandingPage.tblClmApplicantName.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:o("mainLandingPage.tblClmAssesmentTypeNew.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:o("mainLandingPage.tblClmApplyDate.label")}),e.jsx("th",{scope:"col",className:"px-2 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:o("mainLandingPage.tblClmActionText.label")})]})}),e.jsxs("tbody",{children:[((j=n==null?void 0:n.recentApplications)==null?void 0:j.length)!=0&&((k=n==null?void 0:n.recentApplications)==null?void 0:k.map((t,x)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.applicationNo)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.applicantname)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.assessmentType)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:se(t==null?void 0:t.applyDate)}),e.jsxs("td",{className:"px-1 py-2 text-sm text-left",children:[" ",e.jsx("button",{onClick:m=>d(`/propApplicationDetails/${t==null?void 0:t.id}`),className:"bg-indigo-500 px-3 py-1 rounded-md shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:o("mainLandingPage.viewButtonText.label")})]})]}))),((L=n==null?void 0:n.recentApplications)==null?void 0:L.length)==0&&e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center text-red-500 font-semibold py-4",children:"No Application Found"})})]})]})})})})})})]}),(n==null?void 0:n.recentPayments)&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container mx-auto mt-10 rounded-lg",children:[e.jsxs("div",{className:"px-1 font-semibold  text-gray-500 mt-10 google-roboto",children:[e.jsxs("div",{className:"flex-initial",children:[e.jsx(ee,{className:"inline"}),o("mainLandingPage.recentPaymentHeaderText.label")]}),e.jsx("div",{className:"flex-1 float-right"})]}),e.jsx("div",{className:"py-0 shadow-xl mt-3",children:e.jsx("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e.jsx("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:e.jsxs("table",{className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"bg-indigo-50",children:e.jsxs("tr",{className:"font-semibold",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:o("mainLandingPage.tblClmTransactionNo.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:o("mainLandingPage.tblClmAmount.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:o("mainLandingPage.tblClmPaymentMode.label")}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:o("mainLandingPage.tblClmDate.label")})]})}),e.jsxs("tbody",{children:[((v=n==null?void 0:n.recentPayments)==null?void 0:v.length)!=0&&((P=n==null?void 0:n.recentPayments)==null?void 0:P.map((t,x)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:x+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.transactionNo)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:ye(t==null?void 0:t.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l(t==null?void 0:t.paymentMode)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:se(t==null?void 0:t.transactionDate)})]}))),((F=n==null?void 0:n.recentPayments)==null?void 0:F.length)==0&&e.jsx("tr",{children:e.jsx("td",{colSpan:5,className:"text-center text-red-500 font-semibold py-4",children:"No Payment Found"})})]})]})})})})]})})]})}const le={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};K.setAppElement("#root");function ze(){const{t:o}=oe();i.useState("");const[_,u]=i.useState(!1),[M,p]=i.useState(!1),[n,O]=i.useState(null),[s,y]=i.useState(R);i.useState(R);const[w,X]=i.useState(!1),[B,S]=i.useState(!1);i.useState("jsk");const[H,Y]=i.useState(!1),[A,d]=i.useState(!1),[b,z]=i.useState(null),j=i.useRef(),{api_editAdminProfile:k}=xe(),L=ae(),{roles:v,setroles:P,setuserName:F,userName:t,userUlbName:x,setuserUlbName:m,userMobile:N,setuserMobile:_e,userEmail:Q,setuserEmail:Me,userImage:Z,setuserImage:Oe}=i.useContext(ie);i.useEffect(()=>{let c=t==""?g("userName"):t,a=v==""?g("roles"):v;x==""&&g("userUlbName"),N==""&&g("userMobile"),Q==""&&g("userEmail"),Z==""&&g("userImage"),F(c),P(a)},[]);const h=g("roles"),me=["JSK"],fe=i.useMemo(()=>Array.isArray(h)&&h.some(c=>me.includes(c)),[h]),ge=["DEALING ASSISTANT","EXECUTIVE OFFICER","BACK OFFICE","SECTION INCHARGE"],pe=i.useMemo(()=>Array.isArray(h)&&h.some(c=>ge.includes(c)),[h]);function U(){y(R),r.resetForm(),u(!1)}function he(){p(!0)}function q(){p(!1)}const W=ne();we("Home",!0);const ue=Se({image:T().required("Select image"),name:T().required("Enter name"),mobileNo:T().required("Eneter mobile no.").max(10,"Enter maximum 10 digits").min(10,"Enter minimum 10 digits"),email:T().required("enter valid email address")}),r=Ae({initialValues:{name:"",image:"",mobileNo:"",email:""},onSubmit:(c,a)=>{he()},validationSchema:ue}),be=c=>{c.target.files[0],y(URL.createObjectURL(c.target.files[0])),O(c.target.files[0])},je=c=>{let a=c.target.name,E=c.target.value;a=="image"&&be(c),a=="mobileNo"&&r.setFieldValue("mobileNo",Fe(E,r.values.mobileNo,10))},ve=()=>{var a,E,C;U(),q(),S(!0);let c=new FormData;c.append("name",(a=r.values)==null?void 0:a.name),c.append("mobileNo",(E=r.values)==null?void 0:E.mobileNo),c.append("email",(C=r.values)==null?void 0:C.email),c.append("photo",n),G.post(k,c,J()).then(function(I){var D;(D=I==null?void 0:I.data)!=null&&D.status?L("Profile Updated Successfully !","success"):V(!0,"Error occured while updating profile. Please try again later."),S(!1)}).catch(function(I){S(!1),V(!0,"Error occured while updating profile. Please try again later.")})},V=(c,a)=>{z(a),d(c)};return w?e.jsx(e.Fragment,{children:e.jsx(re,{})}):H?e.jsx(ce,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[B&&e.jsx(de,{}),A&&e.jsx(ke,{activateBottomErrorCard:V,errorTitle:b}),e.jsx("div",{className:"w-full bg-white  shadow-xl py-4 px-2 md:px-6 md:py-6 mt-4",children:e.jsxs("div",{className:"flex flex-col md:flex-row ",children:[e.jsxs("div",{className:"flex-initial ml-4 ",children:[e.jsx("div",{className:"text-2xl font-bold text-black google-roboto capitalize",children:o("mainLandingPage.mainHeadingText.label")}),e.jsx("div",{className:"mt-1",children:e.jsxs("span",{className:"text-gray-600",children:[e.jsx(Le,{className:"inline text-green-500 text-xl"}),o("mainLandingPage.subHeadingText.label")," "]})}),e.jsx("div",{})]}),e.jsxs("div",{className:"flex-1 flex text-right justify-center items-center md:justify-end md:items-end h-full mt-4 md:mt-0 ",children:[e.jsx($,{anchorId:"button-3"}),e.jsx("button",{id:"button-3","data-tooltip-content":"Click to change password.",onClick:()=>W("/change-password/change"),className:"mr-4 cypress_floor_add_update text-gray-700 px-4 md:px-8 py-3 bg-white-600 font-medium border text-xs leading-tight capitalize rounded-xl shadow-md hover:bg-indigo-500 hover:shadow-lg focus:bg-indigo-500 hover:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:o("mainLandingPage.changePasswordButtonText.label")}),pe&&e.jsxs(e.Fragment,{children:[e.jsx($,{anchorId:"button-1"}),e.jsx("button",{id:"button-1","data-tooltip-content":"Click to go to saf workflow.",onClick:()=>W("/saf-workflow"),className:"cypress_floor_add_update text-white px-4 md:px-8 py-3 bg-indigo-500 font-medium border text-xs leading-tight capitalize rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:"SAF Workflow"})]}),fe&&e.jsxs(e.Fragment,{children:[e.jsx($,{anchorId:"button-2"}),e.jsx("button",{id:"button-2","data-tooltip-content":"Click to apply new assessment.",onClick:()=>W("/saf-entry"),className:"cypress_floor_add_update text-white px-4 md:px-8 py-3 bg-indigo-500 font-medium border text-xs leading-tight capitalize rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:o("mainLandingPage.applyAssesmentButtonText.label")})]})]})]})}),e.jsx(Re,{}),e.jsx("div",{className:"w-full h-10"}),e.jsx(K,{isOpen:_,onRequestClose:U,style:le,contentLabel:"Example Modal",children:e.jsxs("div",{class:"relative bg-white p-10 rounded-lg shadow-xl border-2 border-gray-50 w-full md:w-96",children:[e.jsx("button",{onClick:U,type:"button",class:"absolute top-3 right-2.5 bg-red-500 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 ml-auto inline-flex items-center",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{className:"max-w-2xl mx-auto",children:[e.jsx("div",{className:"font-semibold text-2xl text-center w-full",children:"Edit profile"}),e.jsx("div",{className:"w-full h-3"}),e.jsx("form",{onSubmit:r.handleSubmit,onChange:je,children:e.jsxs("div",{className:"grid col-span-12 relative",children:[e.jsx("div",{className:"form-group col-span-12 flex justify-center relative mt-5",children:e.jsxs("div",{className:"w-28 h-28 border rounded-full",children:[e.jsx("img",{className:"w-28 h-28 rounded-full border bg-gray-700 shadow-xl",src:s,alt:""}),e.jsx("span",{className:"absolute bottom-2 left-0 right-0 text-center ",children:e.jsx("span",{onClick:()=>j.current.click(),className:"bg-white text-indigo-500 px-1 border rounded-xl text-xs cursor-pointer font-semibold hover:scale-105",children:"Change"})}),e.jsx("span",{className:"text-red-600 absolute text-xs -bottom-3 text-center",children:r.touched.image&&r.errors.image?r.errors.image:null})]})}),e.jsxs("div",{className:"form-group col-span-12 invisible absolute top-0 left-0",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Image",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{ref:j,...r.getFieldProps("image"),type:"file",className:"cypress_khata_no form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"})]}),e.jsxs("div",{className:"form-group mb-4 col-span-12 mt-5",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Mobile No.",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...r.getFieldProps("name"),type:"text",className:"cypress_plot_no form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter mobile no."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.name&&r.errors.name?r.errors.name:null})]}),e.jsxs("div",{className:"form-group mb-4 col-span-12 mt-5",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Mobile No.",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...r.getFieldProps("mobileNo"),type:"text",className:"cypress_plot_no form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter mobile no."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.mobileNo&&r.errors.mobileNo?r.errors.mobileNo:null})]}),e.jsxs("div",{className:"form-group mb-6 col-span-12",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Email",e.jsx("small",{className:"mt-1 text-sm font-semibold text-red-600 inline ",children:"*"})]}),e.jsx("input",{...r.getFieldProps("email"),type:"text",className:"cypress_plot_no form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",placeholder:"Enter email."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:r.touched.email&&r.errors.email?r.errors.email:null})]}),e.jsx("div",{className:"col-span-12 text-center mt-2",children:e.jsx("button",{type:"submit",className:"cypress_next2_button text-md w-full px-6 py-2.5 bg-indigo-600 text-white font-medium  leading-tight  rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out",children:"Save"})})]})})]})]})}),e.jsx(K,{isOpen:M,onRequestClose:q,style:le,contentLabel:"Example Modal",children:e.jsxs("div",{class:"relative bg-white rounded-lg shadow-xl border-2 border-gray-50",children:[e.jsx("button",{onClick:q,type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center",children:[e.jsxs("div",{className:"w-full flex h-10",children:[" ",e.jsx("span",{className:"mx-auto",children:e.jsx(Pe,{size:30})})]}),e.jsx("h3",{class:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400",children:"Are you sure to update details ?"}),e.jsx("button",{type:"button",class:"text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",onClick:ve,children:"Yes, I'm sure"})]})]})})]})}export{ze as default};
