import{M as B,u as E,g as M,r,h as T,i as j,d as u,e as L,f as l,F as _,j as e,B as O,n,k as y,A as R}from"./index-dec8e078.js";import{P as U}from"./PilotWorkflowDocumentRow-96d25bd6.js";B.setAppElement("#root");function W(){var h,g,x,f;const{t:i}=E(),{api_DharamshalaApplicationFullDetailById:b,api_DharamshalaViewDocuments:N}=R();M("Agency Details");const[c,w]=r.useState();r.useState(),T();const{id:d}=j(),[o,A]=r.useState(),[p,m]=r.useState(!1),[V,v]=r.useState(!1),[q,D]=r.useState(""),S=()=>v(!0);r.useEffect(()=>{k()},[]);const k=()=>{console.log("before document fetch ",d);let s={applicationId:d};u.post(N,s,L()).then(a=>{var t;console.log("document list at saf application details ",a),w((t=a==null?void 0:a.data)==null?void 0:t.data)}).catch(a=>{console.log("error at saf application details ",a)})},I=s=>{console.log("incoming doc url modal => ",s),D(s),S()},P=()=>{m(!0);const a={headers:{Authorization:`Bearer ${window.localStorage.getItem("token")}`,Accept:"application/json"}};u.post(b,{applicationId:d,type:"Active"},a).then(function(t){console.log("agency application details",t.data.data),A(t.data.data),m(!1)}).catch(function(t){console.log("agency application details error...",t),m(!1)})};return r.useEffect(()=>{P()},[]),l(_,{children:[p&&e(O,{}),e("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:l("div",{className:"col-span-12 rounded-lg  p-4",children:[e("h1",{className:"mb-2 pl-2 font-bold text-3xl text-gray-700 uppercase underline text-center",children:n((g=(h=o==null?void 0:o.fullDetailsData)==null?void 0:h.cardArray)==null?void 0:g.headerTitle)}),l("h1",{className:"flex-1 flex pl-2 font-bold text-2xl text-gray-700",children:[i("workflowPage.applicationNo.label")," -",n((o==null?void 0:o.application_no)||"")]}),l("div",{className:"p-4",children:[l("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e(y,{className:"inline"})," ",i("workflowPage.basicDetails.label")]}),(f=(x=o==null?void 0:o.fullDetailsData)==null?void 0:x.dataArray)==null?void 0:f.map(s=>{var a;return e("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto bg-white rounded-lg shadow-xl p-4 mt-4",children:(a=s==null?void 0:s.data)==null?void 0:a.map(t=>l("div",{className:"pl-4 p-2",children:[l("h1",{className:"font-bold text-sm",children:[n((t==null?void 0:t.value)||"N/A")," "]}),e("h1",{className:"text-gray-500 text-xs",children:n(t==null?void 0:t.displayString)})]}))})})]})]})}),l("div",{className:"container mx-auto mt-10  px-5 pb-48  rounded-lg",children:[l("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e(y,{className:"inline"})," ",i("workflowPage.documentList.label")]}),e("div",{className:"py-0 shadow-xl mt-3",children:e("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:l("table",{className:"min-w-full leading-normal",children:[e("thead",{className:"bg-white",children:l("tr",{className:"font-semibold",children:[e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"#"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Document Name"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"View"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Status"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Remarks"})]})}),l("tbody",{children:[(c==null?void 0:c.length)==0&&!p&&e("tr",{className:"mt-10 py-20",children:e("td",{colSpan:5,className:"text-center",children:e("span",{className:"bg-red-200 text-sm text-red-400 italic my-4 px-4 py-2 rounded-md shadow-lg ",children:"No Document Found !!"})})}),c==null?void 0:c.map((s,a)=>e(U,{openModal:I,docList:s,index:a}))]})]})})})})]})]})}export{W as default};
