import{M,u as T,r as c,h as j,i as B,e as u,f as L,g as l,F as N,j as e,k as O,n,l as p,m as R,A as U}from"./index-bde45443.js";import{u as q}from"./useSetTitle-195d95a0.js";M.setAppElement("#root");function $(){var m,h,f,b,y;const{t:o}=T(),{api_agencyApplicationFullDetailById:w,api_agencyViewDocuments:A}=U();q("Agency Details");const[d,k]=c.useState();c.useState(),j();const{id:i}=B(),[s,v]=c.useState(),[g,x]=c.useState(!1),[z,P]=c.useState(!1),[H,S]=c.useState(""),D=()=>P(!0);c.useEffect(()=>{_()},[]);const _=()=>{console.log("before document fetch ",i);let t={applicationId:i};u.post(A,t,L()).then(r=>{var a;console.log("document list at saf application details ",r),k((a=r==null?void 0:r.data)==null?void 0:a.data)}).catch(r=>{console.log("error at saf application details ",r)})},I=t=>{console.log("incoming doc url modal => ",t),S(t),D()},E=()=>{x(!0);const r={headers:{Authorization:`Bearer ${window.localStorage.getItem("token")}`,Accept:"application/json"}};u.post(w,{applicationId:i,type:"Active"},r).then(function(a){console.log("agency application details",a.data.data),v(a.data.data),x(!1)}).catch(function(a){console.log("agency application details error...",a),x(!1)})};return c.useEffect(()=>{E()},[]),l(N,{children:[g&&e(O,{}),e("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:l("div",{className:"col-span-12 rounded-lg  p-4",children:[e("h1",{className:"mb-2 pl-2 font-bold text-3xl text-gray-700 uppercase underline text-center",children:n((h=(m=s==null?void 0:s.fullDetailsData)==null?void 0:m.cardArray)==null?void 0:h.headerTitle)}),l("h1",{className:"flex-1 flex pl-2 font-bold text-2xl text-gray-700",children:[o("workflowPage.applicationNo.label")," -",n((s==null?void 0:s.application_no)||"")]}),l("div",{className:"p-4",children:[l("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e(p,{className:"inline"})," ",o("workflowPage.basicDetails.label")]}),(b=(f=s==null?void 0:s.fullDetailsData)==null?void 0:f.dataArray)==null?void 0:b.map(t=>{var r;return e("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto bg-white rounded-lg shadow-xl p-4 mt-4",children:(r=t==null?void 0:t.data)==null?void 0:r.map(a=>l("div",{className:"pl-4 p-2",children:[l("h1",{className:"font-bold text-sm",children:[n((a==null?void 0:a.value)||"N/A")," "]}),e("h1",{className:"text-gray-500 text-xs",children:n(a==null?void 0:a.displayString)})]}))})}),l("div",{className:"mt-10 ",children:[l("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[e(p,{className:"inline"})," ",o("workflowPage.directorsDetails.label")]}),l("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[e("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:l("tr",{children:[e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:o("workflowPage.directorName.label")}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:o("workflowPage.directorMobileNo.label")}),e("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:o("workflowPage.directorEmail.label")})]})}),e("tbody",{className:"text-sm",children:e(N,{children:(y=s==null?void 0:s.directors)==null?void 0:y.map(t=>l("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:"#"}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.director_name?t==null?void 0:t.director_name:"N/A"}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.director_mobile?t==null?void 0:t.director_mobile:"N/A"}),e("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:t!=null&&t.director_email?t==null?void 0:t.director_email:"N/A"})]}))})})]})]})]})]})}),l("div",{className:"container mx-auto mt-10  px-5 pb-48  rounded-lg",children:[l("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e(p,{className:"inline"}),"  ",o("workflowPage.documentList.label")]}),e("div",{className:"py-0 shadow-xl mt-3",children:e("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:l("table",{className:"min-w-full leading-normal",children:[e("thead",{className:"bg-white",children:l("tr",{className:"font-semibold",children:[e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"#"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:o("workflowPage.documentName.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:o("workflowPage.view.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:o("workflowPage.status.label")}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:o("workflowPage.Remarks.label")})]})}),l("tbody",{children:[(d==null?void 0:d.length)==0&&!g&&e("tr",{className:"mt-10 py-20",children:e("td",{colSpan:5,className:"text-center",children:l("span",{className:"bg-red-200 text-sm text-red-400 italic my-4 px-4 py-2 rounded-md shadow-lg ",children:[o("workflowPage.noDocumentFound.label")," !!"]})})}),d==null?void 0:d.map((t,r)=>e(R,{openModal:I,docList:t,index:r}))]})]})})})})]})]})}export{$ as default};
