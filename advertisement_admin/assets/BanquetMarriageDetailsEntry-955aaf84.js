import{M as B,u as I,r,h as E,i as T,e as u,f as j,g as l,F as q,j as e,k as L,n as i,l as b,m as _,A as O}from"./index-930f8084.js";import{u as R}from"./useSetTitle-74d2d12c.js";B.setAppElement("#root");function W(){var g,h,x,f;const{t:n}=I(),{api_BanquetMarriageApplicationFullDetailById:y,api_BanquetMarriageViewDocuments:N}=O();R("Agency Details");const[c,w]=r.useState();r.useState(),E();const{id:d}=T(),[o,A]=r.useState(),[p,m]=r.useState(!1),[U,v]=r.useState(!1),[z,k]=r.useState(""),D=()=>v(!0);r.useEffect(()=>{S()},[]);const S=()=>{console.log("before document fetch ",d);let s={applicationId:d};u.post(N,s,j()).then(a=>{var t;console.log("document list at saf application details 12",a),w((t=a==null?void 0:a.data)==null?void 0:t.data)}).catch(a=>{console.log("error at saf application details ",a)})},P=s=>{console.log("incoming doc url modal => ",s),k(s),D()},M=()=>{m(!0);const a={headers:{Authorization:`Bearer ${window.localStorage.getItem("token")}`,Accept:"application/json"}};u.post(y,{applicationId:d,type:"Active"},a).then(function(t){console.log("agency application details",t.data.data),A(t.data.data),m(!1)}).catch(function(t){console.log("agency application details error...",t),m(!1)})};return r.useEffect(()=>{M()},[]),l(q,{children:[p&&e(L,{}),e("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:l("div",{className:"col-span-12 rounded-lg  p-4",children:[e("h1",{className:"mb-2 pl-2 font-bold text-3xl text-gray-700 uppercase underline text-center",children:i((h=(g=o==null?void 0:o.fullDetailsData)==null?void 0:g.cardArray)==null?void 0:h.headerTitle)}),l("h1",{className:"flex-1 flex pl-2 font-bold text-2xl text-gray-700",children:["Application No. -",i((o==null?void 0:o.application_no)||"")]}),l("div",{className:"p-4",children:[l("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e(b,{className:"inline"}),"  ",n("workflowPage.basicDetails.label")]}),(f=(x=o==null?void 0:o.fullDetailsData)==null?void 0:x.dataArray)==null?void 0:f.map(s=>{var a;return e("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto bg-white rounded-lg shadow-xl p-4 mt-4",children:(a=s==null?void 0:s.data)==null?void 0:a.map(t=>l("div",{className:"pl-4 p-2",children:[l("h1",{className:"font-bold text-sm",children:[i((t==null?void 0:t.value)||"N/A")," "]}),e("h1",{className:"text-gray-500 text-xs",children:i(t==null?void 0:t.displayString)})]}))})})]})]})}),l("div",{className:"container mx-auto mt-10  px-5 pb-48  rounded-lg",children:[l("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e(b,{className:"inline"})," ",n("workflowPage.documentList.label")]}),e("div",{className:"py-0 shadow-xl mt-3",children:e("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:l("table",{className:"min-w-full leading-normal",children:[e("thead",{className:"bg-white",children:l("tr",{className:"font-semibold",children:[e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"#"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:n("workflowPage.documentName.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:n("workflowPage.view.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:n("workflowPage.status.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:n("workflowPage.Remarks.label")})]})}),l("tbody",{children:[(c==null?void 0:c.length)==0&&!p&&e("tr",{className:"mt-10 py-20",children:e("td",{colSpan:5,className:"text-center",children:l("span",{className:"bg-red-200 text-sm text-red-400 italic my-4 px-4 py-2 rounded-md shadow-lg ",children:[n("workflowPage.noDocumentFound.label")," !!"]})})}),c==null?void 0:c.map((s,a)=>e(_,{openModal:P,docList:s,index:a}))]})]})})})})]})]})}export{W as default};
