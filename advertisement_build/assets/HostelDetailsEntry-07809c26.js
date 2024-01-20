import{M as E,r as c,g as M,h as j,d as f,e as H,f as l,F as L,j as e,B as T,n as r,i as y,A as P}from"./index-dcf7345c.js";import{u as _}from"./useSetTitle-ce0c2031.js";import{P as O}from"./PilotWorkflowDocumentRow-a8ccc7ff.js";E.setAppElement("#root");function W(){var p,h,x,g;const{api_HostelApplicationFullDetailById:N,api_HostelViewDocuments:b}=P();_("Agency Details");const[n,A]=c.useState();c.useState(),M();const{id:i}=j(),[o,w]=c.useState(),[m,d]=c.useState(!1),[R,v]=c.useState(!1),[U,D]=c.useState(""),S=()=>v(!0);c.useEffect(()=>{I()},[]);const I=()=>{console.log("before document fetch ",i);let s={applicationId:i};f.post(b,s,H()).then(t=>{var a,u;console.log("document list at saf application details 12",(a=t==null?void 0:t.data)==null?void 0:a.data),A((u=t==null?void 0:t.data)==null?void 0:u.data)}).catch(t=>{console.log("error at saf application details ",t)})},k=s=>{console.log("incoming doc url modal => ",s),D(s),S()},B=()=>{d(!0);const t={headers:{Authorization:`Bearer ${window.localStorage.getItem("token")}`,Accept:"application/json"}};f.post(N,{applicationId:i,type:"Active"},t).then(function(a){console.log("agency application details",a.data.data),w(a.data.data),d(!1)}).catch(function(a){console.log("agency application details error...",a),d(!1)})};return c.useEffect(()=>{B()},[]),l(L,{children:[m&&e(T,{}),e("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:l("div",{className:"col-span-12 rounded-lg  p-4",children:[e("h1",{className:"mb-2 pl-2 font-bold text-3xl text-gray-700 uppercase underline text-center",children:r((h=(p=o==null?void 0:o.fullDetailsData)==null?void 0:p.cardArray)==null?void 0:h.headerTitle)}),l("h1",{className:"flex-1 flex pl-2 font-bold text-2xl text-gray-700",children:["Application No. -",r((o==null?void 0:o.application_no)||"")]}),l("div",{className:"p-4",children:[l("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e(y,{className:"inline"})," Basic Details"]}),(g=(x=o==null?void 0:o.fullDetailsData)==null?void 0:x.dataArray)==null?void 0:g.map(s=>{var t;return e("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto bg-white rounded-lg shadow-xl p-4 mt-4",children:(t=s==null?void 0:s.data)==null?void 0:t.map(a=>l("div",{className:"pl-4 p-2",children:[l("h1",{className:"font-bold text-sm",children:[r((a==null?void 0:a.value)||"N/A")," "]}),e("h1",{className:"text-gray-500 text-xs",children:r(a==null?void 0:a.displayString)})]}))})})]})]})}),l("div",{className:"container mx-auto mt-10  px-5 pb-48  rounded-lg",children:[l("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e(y,{className:"inline"})," Document List"]}),e("div",{className:"py-0 shadow-xl mt-3",children:e("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:l("table",{className:"min-w-full leading-normal",children:[e("thead",{className:"bg-white",children:l("tr",{className:"font-semibold",children:[e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"#"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Document Name"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"View"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Status"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Remarks"})]})}),l("tbody",{children:[(n==null?void 0:n.length)==0&&!m&&e("tr",{className:"mt-10 py-20",children:e("td",{colSpan:5,className:"text-center",children:e("span",{className:"bg-red-200 text-sm text-red-400 italic my-4 px-4 py-2 rounded-md shadow-lg ",children:"No Document Found !!"})})}),n==null?void 0:n.map((s,t)=>e(O,{openModal:k,docList:s,index:t}))]})]})})})})]})]})}export{W as default};
