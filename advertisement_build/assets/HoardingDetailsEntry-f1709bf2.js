import{M as B,r as c,g as E,h as M,d as u,e as j,f as s,F as L,j as e,i as T,n as r,k as f,l as _,A as H}from"./index-8dee1bf7.js";import{u as O}from"./useSetTitle-5f4a32cb.js";B.setAppElement("#root");function q(){var p,h,g,x;const{api_hoardingApplicationFullDetailById:y,api_hoardingViewDocuments:N}=H();O("Agency Details");const[n,b]=c.useState();c.useState(),E();const{id:i}=M(),[o,A]=c.useState(),[m,d]=c.useState(!1),[P,w]=c.useState(!1),[R,v]=c.useState(""),D=()=>w(!0);c.useEffect(()=>{S()},[]);const S=()=>{console.log("before document fetch ",i);let l={applicationId:i};u.post(N,l,j()).then(a=>{var t;console.log("document list at saf application details ",a),b((t=a==null?void 0:a.data)==null?void 0:t.data)}).catch(a=>{console.log("error at saf application details ",a)})},k=l=>{console.log("incoming doc url modal => ",l),v(l),D()},I=()=>{d(!0);const a={headers:{Authorization:`Bearer ${window.localStorage.getItem("token")}`,Accept:"application/json"}};u.post(y,{applicationId:i,type:"Active"},a).then(function(t){console.log("agency application details",t.data.data),A(t.data.data),d(!1)}).catch(function(t){console.log("agency application details error...",t),d(!1)})};return c.useEffect(()=>{I()},[]),s(L,{children:[m&&e(T,{}),e("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:s("div",{className:"col-span-12 rounded-lg  p-4",children:[e("h1",{className:"mb-2 pl-2 font-bold text-3xl text-gray-700 uppercase underline text-center",children:r((h=(p=o==null?void 0:o.fullDetailsData)==null?void 0:p.cardArray)==null?void 0:h.headerTitle)}),s("h1",{className:"flex-1 flex pl-2 font-bold text-2xl text-gray-700",children:["Application No. -",r((o==null?void 0:o.application_no)||"")]}),s("div",{className:"p-4",children:[s("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[e(f,{className:"inline"})," Basic Details"]}),(x=(g=o==null?void 0:o.fullDetailsData)==null?void 0:g.dataArray)==null?void 0:x.map(l=>{var a;return e("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 container mx-auto bg-white rounded-lg shadow-xl p-4 mt-4",children:(a=l==null?void 0:l.data)==null?void 0:a.map(t=>s("div",{className:"pl-4 p-2",children:[s("h1",{className:"font-bold text-sm",children:[r((t==null?void 0:t.value)||"N/A")," "]}),e("h1",{className:"text-gray-500 text-xs",children:r(t==null?void 0:t.displayString)})]}))})})]})]})}),s("div",{className:"container mx-auto mt-10  px-5 pb-48  rounded-lg",children:[s("h1",{className:"px-1 font-semibold font-serif text-gray-500 mt-10",children:[e(f,{className:"inline"})," Document List"]}),e("div",{className:"py-0 shadow-xl mt-3",children:e("div",{className:"-mx-4 sm:-mx-8 px-4 sm:px-8 py-0 overflow-x-auto",children:e("div",{className:"inline-block min-w-full rounded-lg overflow-hidden",children:s("table",{className:"min-w-full leading-normal",children:[e("thead",{className:"bg-white",children:s("tr",{className:"font-semibold",children:[e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"#"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Document Name"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"View"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Status"}),e("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm ",children:"Remarks"})]})}),s("tbody",{children:[(n==null?void 0:n.length)==0&&!m&&e("tr",{className:"mt-10 py-20",children:e("td",{colSpan:5,className:"text-center",children:e("span",{className:"bg-red-200 text-sm text-red-400 italic my-4 px-4 py-2 rounded-md shadow-lg ",children:"No Document Found !!"})})}),n==null?void 0:n.map((l,a)=>e(_,{openModal:k,docList:l,index:a}))]})]})})})})]})]})}export{q as default};
