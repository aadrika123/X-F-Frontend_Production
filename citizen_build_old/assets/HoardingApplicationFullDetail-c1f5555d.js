import{r as a,A as h,c4 as p,j as e,ae as S,h as D,S as k,cr as L,c9 as _}from"./index-a9962f11.js";function C(t){var m,x;const{api_getHoardingApplicationFullDetail:u,api_getHoardingAppliedDocumentList:f}=_();console.log("application data in list application",t.data);const[l,j]=a.useState(),[r,v]=a.useState(),[N,n]=a.useState(!1),[b,g]=a.useState(!1),c=t.data,d=t.applicationType;console.log("onclick close modal",t.closeModal),console.log("application id..1",c),console.log("application type",d);const y=()=>{t.closeModal()};a.useEffect(()=>{w()},[]);const w=()=>{g(!1),n(!0),console.log("application no through props..",t==null?void 0:t.data);const s={applicationId:c,type:d};console.log("request body for application full detail",s),h.post(`${u}`,s,p()).then(function(o){console.log("application view details 1",o),j(o.data.data),n(!1)}).catch(function(o){console.log("errorrr.... ",o),g(!0),n(!1)})};console.log("details of application...hoarding",l==null?void 0:l.fullDetailsData),a.useEffect(()=>{A()},[]);const A=()=>{const s={applicationId:c,type:d};h.post(`${f}`,s,p()).then(function(o){console.log("document list 22",o.data.data),v(o.data.data)}).catch(function(o){console.log("errorrr.... ",o)})};return N?e.jsx(e.Fragment,{children:e.jsx(S,{})}):b?e.jsx(D,{children:e.jsx(k,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"})}):(console.log("document list...2",r),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"border border-violet-400 shadow-lg rounded leading-5 z-50",children:[e.jsxs("div",{className:" shadow-md shadow-violet-200 p-2 ",children:[e.jsx("h1",{className:"text-2xl px-4 font-semibold text-gray-700 ",children:"Application Details"}),e.jsx("h1",{className:"text-xs px-4 text-gray-500",children:"Review your application"}),e.jsx("button",{className:"float-right -mt-9 mr-4",onClick:y,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 bg-red-400 text-white  shadow-lg  rounded-full",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),e.jsx("div",{className:"ml-96"}),t.showLoader,e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 p-4 gap-4",children:[e.jsxs("div",{className:"col-span-7 ",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4 bg-violet-100 rounded leading-5",children:[e.jsxs("div",{className:"flex ",children:[e.jsx("h1",{className:"font-normal text-md ",children:"Application No."}),e.jsx("h1",{className:"font-bold text-lg text-gray-900 ml-4 -mt-1",children:l==null?void 0:l.application_no})]}),e.jsxs("div",{className:"flex",children:[e.jsx("h1",{className:"font-normal text-md ",children:"Apply Date"}),e.jsx("h1",{className:"font-bold text-lg text-gray-900 ml-4 -mt-1",children:l==null?void 0:l.apply_date})]})]}),(x=(m=l==null?void 0:l.fullDetailsData)==null?void 0:m.dataArray)==null?void 0:x.map(s=>{var o;return e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto bg-white rounded leading-5 p-2 mt-4",children:(o=s==null?void 0:s.data)==null?void 0:o.map(i=>e.jsxs("div",{className:"bg-violet-100 border border-white p-2",children:[e.jsxs("h1",{className:"font-bold text-lg text-gray-900 ",children:[(i==null?void 0:i.value)||"N/A"," "]}),e.jsx("h1",{className:" font-normal text-sm text-gray-600 ",children:i==null?void 0:i.displayString})]}))})})]}),e.jsxs("div",{className:"col-span-5 bg-white rounded leading-5",children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 bg-violet-100 p-4 rounded leading-5 container",children:e.jsx("div",{className:"   ",children:e.jsx("h1",{className:"font-semibold text-gray-800 text-lg text-center ",children:"Documents Uploaded"})})}),r==null?void 0:r.map(s=>e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 p-4 bg-white  rounded leading-5",children:e.jsxs("div",{className:"flex  bg-violet-100",children:[e.jsx("h1",{className:"flex-1 font-semibold text-sm text-gray-600 p-6 uppercase",children:s==null?void 0:s.doc_val}),e.jsx("h1",{className:"flex-1 ",children:e.jsx("embed",{className:"w-16 h-16 float-right",src:`${L}/${s==null?void 0:s.doc_path}`})})]})}))]})]})]})}))}export{C as H};
