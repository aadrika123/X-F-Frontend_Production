import{M as i,t as v,r as n,a as p,l as j,v as L,j as e,c5 as w}from"./index-e24d5f40.js";import{S as U}from"./react-select.esm-b195c2c5.js";const y={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"transparent",border:"none"}};i.setAppElement("#root");function M(s){const{t:a}=v(),[c,d]=n.useState(s==null?void 0:s.open),[b,u]=n.useState(),[t,o]=n.useState(null),{api_getUlbList:x}=w(),g=p();n.useEffect(()=>{h(),s.openUlbModal==0&&d(!0)},[s.openUlbModal]);const h=()=>{j.get(x,{},L()).then(l=>{console.log("ULB LIsts...",l.data),u(l.data.data)}).catch(l=>{console.log("Error while fetching ulblist",l)})};function m(){}function r(){d(!1),g(-1)}const f=()=>{if(t.id)console.log("Start Button Clicked.."),s==null||s.setUlbValues(t.id,t.ulb_name),d(!1);else return o(null)};return e.jsx("div",{className:"",children:e.jsx(i,{isOpen:c,onAfterOpen:m,onRequestClose:r,style:y,contentLabel:"Example Modal",children:e.jsx("div",{className:"container",children:e.jsx("div",{class:"relative w-full h-full max-w-3xl md:h-auto border-indigo-600 shadow-indigo-200 shadow-sm rounded",children:e.jsxs("div",{class:"relative bg-white rounded-lg shadow ",children:[e.jsxs("div",{class:"flex items-start justify-between p-4 border-b rounded-t darks:border-gray-600",children:[e.jsxs("h3",{class:"text-base md:text-xl font-semibold text-gray-900 darks:text-white",children:[a("tranAdvertisementDashboardUpdatedPage.selectUlbLabel.label")," "]}),e.jsxs("button",{onClick:r,class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-600 darks:hover:text-white","data-modal-hide":"defaultModal",children:[e.jsx("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})}),e.jsxs("span",{class:"sr-only",children:["l",a("tranAdvertisementDashboardUpdatedPage.closeModalLabel.label")]})]})]}),e.jsx("div",{class:"p-6 space-y-6",children:e.jsx("p",{class:"md:text-base leading-relaxed text-gray-500 text-xs",children:a("tranAdvertisementDashboardUpdatedPage.beforeApplyingForAdvertisementLabel.label")})}),e.jsxs("div",{className:"block md:flex justify-center space-x-4",children:[e.jsx("div",{className:"font-semibold text-center",children:a("tranAdvertisementDashboardUpdatedPage.pleaseSelectYourUlbLabel.label")}),e.jsx("div",{className:"md:w-1/2 w-auto mr-5",children:e.jsx(U,{defaultValue:t,onChange:o,getOptionLabel:l=>l.ulb_name,getOptionValue:l=>l.id,options:[{id:2,ulb_name:`${a("tranAdvertisementDashboardUpdatedPage.akolaMunicipalCorporationLabel.label")}`}],isClearable:!0,isLoading:!b})})]}),e.jsx("div",{className:"text-center",children:t&&(t==null?void 0:t.id)!=""?e.jsxs("p",{children:[a("tranAdvertisementDashboardUpdatedPage.youAreApplyingForLabel.label"),e.jsx("span",{className:"text-indigo-500 mx-2",children:t==null?void 0:t.ulb_name})," "]}):e.jsxs("p",{className:"text-red-500 py-2 mx-2",children:[" ",a("tranAdvertisementDashboardUpdatedPage.pleaseSelectYourUlbLabel.label")]})}),e.jsxs("div",{class:"flex flex-row-reverse items-center p-6 border-t border-gray-200 rounded-b",children:[e.jsx("button",{onClick:f,disabled:!(t!=null&&t.id),class:"mx-2 text-white  bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded leading-5 text-sm px-6 py-1 text-center darks:bg-indigo-600 darks:hover:bg-indigo-700 darks:focus:ring-indigo-800",children:a("tranAdvertisementDashboardUpdatedPage.startLabel.label")}),e.jsx("button",{onClick:r,class:"mx-2 text-red-400 hover:text-white  hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 rounded leading-5 border border-red-200 text-sm font-medium px-4 py-1 focus:z-10 ",children:a("tranAdvertisementDashboardUpdatedPage.cancelLabel.label")})]})]})})})})})}export{M as A};
