import{M as B,u as E,g as M,r as n,h as T,i as j,d as u,e as L,f as l,F as _,j as e,B as H,n as i,k as b,A as O}from"./index-e7e132f9.js";import{P as R}from"./PilotWorkflowDocumentRow-b74d1d5e.js";B.setAppElement("#root");function W(){var g,h,x,f;const{t:r}=E(),{api_hoardingApplicationFullDetailById:y,api_hoardingViewDocuments:N}=O();M("Agency Details");const[c,w]=n.useState();n.useState(),T();const{id:d}=j(),[s,A]=n.useState(),[p,m]=n.useState(!1),[U,v]=n.useState(!1),[q,k]=n.useState(""),P=()=>v(!0);n.useEffect(()=>{D()},[]);const D=()=>{console.log("before document fetch ",d);let o={applicationId:d};u.post(N,o,L()).then(a=>{var t;console.log("document list at saf application details ",a),w((t=a==null?void 0:a.data)==null?void 0:t.data)}).catch(a=>{console.log("error at saf application details ",a)})},S=o=>{console.log("incoming doc url modal => ",o),k(o),P()},I=()=>{m(!0);const a={headers:{Authorization:`Bearer ${window.localStorage.getItem("token")}`,Accept:"application/json"}};u.post(y,{applicationId:d,type:"Active"},a).then(function(t){console.log("agency application details",t.data.data),A(t.data.data),m(!1)}).catch(function(t){console.log("agency application details error...",t),m(!1)})};return n.useEffect(()=>{I()},[]),l(_,{children:[p&&e(H,{}),e("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:l("div",{className:"col-span-12 rounded-lg  p-4",children:[e("h1",{className:"mb-2 pl-2 font-bold text-3xl text-gray-700 uppercase underline text-center",children:i((h=(g=s==null?void 0:s.fullDetailsData)==null?void 0:g.cardArray)==null?void 0:h.headerTitle)}),l("h1",{className:"flex-1 flex pl-2 font-bold text-2xl text-gray-700",children:[r("workflowPage.applicationNo.label")," -",i((s==null?void 0:s.application_no)||"")]}),l("div",{className:"p-4",children:[l("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e(b,{className:"inline"})," ",r("workflowPage.basicDetails.label")]}),(f=(x=s==null?void 0:s.fullDetailsData)==null?void 0:x.dataArray)==null?void 0:f.map(o=>{var a;return e("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto bg-white rounded-lg shadow-xl p-4 mt-4",children:(a=o==null?void 0:o.data)==null?void 0:a.map(t=>l("div",{className:"pl-4 p-2",children:[l("h1",{className:"font-bold text-sm",children:[i((t==null?void 0:t.value)||"N/A")," "]}),e("h1",{className:"text-gray-500 text-xs",children:i(t==null?void 0:t.displayString)})]}))})})]})]})}),l("div",{className:"container mx-auto mt-10  px-5 pb-48  rounded-lg",children:[l("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e(b,{className:"inline"})," ",r("workflowPage.documentList.label")]}),e("div",{className:"py-0 shadow-xl mt-3",children:e("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:l("table",{className:"min-w-full leading-normal",children:[e("thead",{className:"bg-white",children:l("tr",{className:"font-semibold",children:[e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"#"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:r("workflowPage.documentName.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:r("workflowPage.view.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:r("workflowPage.status.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:r("workflowPage.Remarks.label")})]})}),l("tbody",{children:[(c==null?void 0:c.length)==0&&!p&&e("tr",{className:"mt-10 py-20",children:e("td",{colSpan:5,className:"text-center",children:l("span",{className:"bg-red-200 text-sm text-red-400 italic my-4 px-4 py-2 rounded-md shadow-lg ",children:[r("workflowPage.noDocumentFound.label")," !!"]})})}),c==null?void 0:c.map((o,a)=>e(R,{openModal:S,docList:o,index:a}))]})]})})})})]})]})}export{W as default};
