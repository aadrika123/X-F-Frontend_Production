import{r as t,aK as se,u as oe,a as re,g as de,A as ce,j as a,bR as le,bL as ne,bK as pe,bT as w}from"./index-60abe2ed.js";/* empty css              */import{p as O}from"./pdf-37897ad1.js";import{W as ie,a as xe,n as P,i as p}from"./WaterDocumentModalForOwner-6ba3ba4f.js";const ge=me=>{var V,C,F;const[W,L]=t.useState(0),[R,E]=t.useState(0),[D,A]=t.useState(),[N,B]=t.useState(),[T,K]=t.useState(0),[U,M]=t.useState(),[q,z]=t.useState(),[k,v]=t.useState(!1),[G,H]=t.useState(!1),[d,J]=t.useState(!1),[Q,I]=t.useState(!1),{api_waterViewDocumetTobeuploaded:X,header:Y}=se(),{id:f}=oe();re(),t.useEffect(()=>{_()},[f]);const{setBreadCrumbData:Z}=t.useContext(de);t.useEffect(()=>{Z(["Water Dashboard","Upload Document"])},[]);const _=()=>{v(!0),ce.post(X,{applicationId:f},Y).then(e=>{var s,o,r;v(!1),console.log("LIst of document to be uploaded in water",e),A(e.data.data.documentsList),B(e.data.data.ownersDocList),H((o=(s=e==null?void 0:e.data)==null?void 0:s.data)==null?void 0:o.doc_upload_status),J((r=e==null?void 0:e.data)==null?void 0:r.data)}).catch(e=>{v(!1),console.log("ERror while fetching list of water doc to be upladed",e)})},$=(e,s,o)=>{M({docName:e,applicationId:f,docVal:s,refDocName:o}),L(c=>c+1)},ee=(e,s,o,r,c)=>{M({ownerName:e,docName:s,applicationId:f,ownerId:o,docVal:r,docCategory:c}),E(l=>l+1)},S=e=>{e&&(z(e),K(s=>s+1))},ae=()=>{I(!0)},te=(V=d==null?void 0:d.connectionCharges)==null?void 0:V.charge_category;return console.log("connectionCharges"),a.jsxs(a.Fragment,{children:[a.jsx(le,{active:"document",title:"Water Application Document Upload",applicationNo:(C=d==null?void 0:d.connectionCharges)==null?void 0:C.applicationNo}),Q&&a.jsx(ne,{openPaymentModal:I,category:te,paymentData:d}),a.jsx(ie,{openDocumentModal:W,payloadData:U,refetch:_}),a.jsx(xe,{openDocumentModal:R,payloadData:U,refetch:_}),a.jsx(pe,{openDocviewModal:T,documentUrl:q}),a.jsx("div",{className:"grid grid-cols-12 bg-white poppins animate__animated animate__fadeIn animate__faster",children:a.jsx("div",{className:"col-span-12 pt-4 2xl:h-full md:h-screen overflow-y-auto pb-2",children:a.jsxs("div",{className:"md:px-2 col-span-12",children:[a.jsx("div",{className:"float-right m-3 space-x-3",children:G==!0?((F=d==null?void 0:d.connectionCharges)==null?void 0:F.paid_status)==!1&&a.jsx("button",{onClick:()=>ae(),class:"py-2 px-4 inline-block text-center mb-3 leading-5 text-gray-100 bg-green-500 border border-green-500 hover:text-white hover:bg-green-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",children:"Pay Now"}):a.jsx("div",{})}),a.jsx("div",{children:a.jsx("h1",{class:"text-base md:text-xl font-bold md:my-3 text-gray-600 text-center",children:"Water Connection Document List"})}),a.jsx("div",{className:"",children:a.jsx("div",{className:"md:inline-block min-w-full overflow-hidden",children:k?a.jsxs(a.Fragment,{children:[" ",a.jsx(w,{})," ",a.jsx(w,{})," "]}):a.jsxs(a.Fragment,{children:[a.jsxs("table",{className:"min-w-full leading-normal border",children:[a.jsx("thead",{className:"bg-sky-100",children:a.jsxs("tr",{className:"font-semibold ",children:[a.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"#"}),a.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Document Name"}),a.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"View"}),a.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800 text-center text-sm uppercase",children:"Status"}),a.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Upload"})]})}),a.jsx("tbody",{children:D==null?void 0:D.map((e,s=1)=>{var o,r,c,n,l,i,x,m,h,u,b,j,g;return a.jsxs("tr",{children:[a.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:a.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:s+1})}),a.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:a.jsxs("p",{className:"text-gray-900 whitespace-no-wrap",children:[e==null?void 0:e.refDocName,(e==null?void 0:e.isMadatory)==1&&a.jsx("span",{className:"text-red-500 font-semibold mx-1",children:"*"})]})}),a.jsx("td",{onClick:()=>{var y;return S((y=e==null?void 0:e.uploadDoc)==null?void 0:y.doc_path)},className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:a.jsx("div",{className:"flex items-center",children:a.jsx("div",{className:"flex-shrink-0",children:a.jsxs("a",{href:"#",className:"block relative",children:[(e==null?void 0:e.uploadDoc)==""&&a.jsx("img",{alt:"profil",src:P,className:"mx-auto object-cover rounded-none cursor-not-allowed md:h-10 h-8 md:w-10 w-8"}),((r=(o=e==null?void 0:e.uploadDoc)==null?void 0:o.doc_path)==null?void 0:r.split(".").pop())=="pdf"&&a.jsx("img",{alt:"profil",src:O,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8 "}),((n=(c=e==null?void 0:e.uploadDoc)==null?void 0:c.doc_path)==null?void 0:n.split(".").pop())=="jpg"&&a.jsx("img",{alt:"profil",src:p,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8 "}),((i=(l=e==null?void 0:e.uploadDoc)==null?void 0:l.doc_path)==null?void 0:i.split(".").pop())=="jpeg"&&a.jsx("img",{alt:"profil",src:p,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8 "}),((m=(x=e==null?void 0:e.uploadDoc)==null?void 0:x.doc_path)==null?void 0:m.split(".").pop())=="png"&&a.jsx("img",{alt:"profil",src:p,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8 "})]})})})}),a.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:a.jsx("p",{className:"text-center text-black md:font-medium text-xs md:text-sm",children:(e==null?void 0:e.uploadDoc)==""?a.jsx("p",{className:"text-red-500",children:"Not Upload"}):a.jsxs("div",{children:[((h=e==null?void 0:e.uploadDoc)==null?void 0:h.verify_status)==0&&a.jsx("p",{className:"text-yellow-700",children:"Pending"}),((u=e==null?void 0:e.uploadDoc)==null?void 0:u.verify_status)==1&&a.jsx("p",{className:"text-green-700",children:"Verified"}),((b=e==null?void 0:e.uploadDoc)==null?void 0:b.verify_status)==2&&a.jsx("p",{className:"text-red-700",children:"Rejected"})]})})}),a.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm ",children:((j=e==null?void 0:e.uploadDoc)==null?void 0:j.verify_status)!=1&&a.jsx("button",{onClick:()=>$(e.docName,e.docVal,e.refDocName),className:"border px-2 md:px-4 py-1 md:py-2 hover:text-white hover:bg-indigo-500",children:((g=e==null?void 0:e.uploadDoc)==null?void 0:g.verify_status)==2?"Re-Upload":"Upload"})})]})})})]}),a.jsxs("p",{className:" font-semibold text-red-400",children:[" ",a.jsx("span",{className:"text-base",children:" *"})," ",a.jsx("span",{className:"text-xs",children:" Mandatory"})]})]})})}),a.jsx("div",{children:a.jsx("h1",{class:"text-base md:text-xl font-bold my-3 text-gray-600 text-center",children:"Owner Document List"})}),a.jsx("div",{className:"",children:a.jsx("div",{className:"md:inline-block min-w-full overflow-hidden",children:k?a.jsxs(a.Fragment,{children:[" ",a.jsx(w,{})," ",a.jsx(w,{})," "]}):a.jsxs(a.Fragment,{children:[a.jsxs("table",{className:"min-w-full leading-normal border",children:[a.jsx("thead",{className:"bg-sky-100",children:a.jsxs("tr",{className:"font-semibold ",children:[a.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"#"}),a.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Document Name"}),a.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"View"}),a.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800 text-center text-sm uppercase",children:"Status"}),a.jsx("th",{scope:"col",className:"px-1 md:px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Upload"})]})}),a.jsx("tbody",{children:N?N==null?void 0:N.map((e,s=1)=>{var o,r,c,n,l,i,x,m,h,u,b,j,g;return a.jsxs("tr",{children:[a.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:a.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:s+1})}),a.jsxs("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:[a.jsxs("p",{className:"text-gray-900 whitespace-no-wrap",children:[e==null?void 0:e.refDocName,(e==null?void 0:e.isMadatory)&&a.jsx("span",{className:"text-red-500 font-semibold mx-1",children:"*"})]}),a.jsxs("p",{className:"text-xs md:w-full w-40",children:["(",e==null?void 0:e.ownerName,")"]})]}),a.jsx("td",{onClick:()=>{var y;return S((y=e==null?void 0:e.uploadDoc)==null?void 0:y.doc_path)},className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:a.jsx("div",{className:"flex items-center",children:a.jsx("div",{className:"flex-shrink-0",children:a.jsxs("a",{href:"#",className:"block relative",children:[(e==null?void 0:e.uploadDoc)==""&&a.jsx("img",{alt:"profil",src:P,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8  cursor-not-allowed"}),((r=(o=e==null?void 0:e.uploadDoc)==null?void 0:o.doc_path)==null?void 0:r.split(".").pop())=="pdf"&&a.jsx("img",{alt:"profil",src:O,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8  "}),((n=(c=e==null?void 0:e.uploadDoc)==null?void 0:c.doc_path)==null?void 0:n.split(".").pop())=="jpg"&&a.jsx("img",{alt:"profil",src:p,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8  "}),((i=(l=e==null?void 0:e.uploadDoc)==null?void 0:l.doc_path)==null?void 0:i.split(".").pop())=="jpeg"&&a.jsx("img",{alt:"profil",src:p,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8  "}),((m=(x=e==null?void 0:e.uploadDoc)==null?void 0:x.doc_path)==null?void 0:m.split(".").pop())=="png"&&a.jsx("img",{alt:"profil",src:p,className:"mx-auto object-cover rounded-none md:h-10 h-8 md:w-10 w-8  "})]})})})}),a.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:a.jsx("p",{className:"text-center text-black md:font-medium text-xs md:text-sm",children:(e==null?void 0:e.uploadDoc)==""?a.jsx("p",{className:"text-red-500",children:"Not Upload"}):a.jsxs("div",{children:[((h=e==null?void 0:e.uploadDoc)==null?void 0:h.verify_status)==0&&a.jsx("p",{className:"text-yellow-700",children:"Pending"}),((u=e==null?void 0:e.uploadDoc)==null?void 0:u.verify_status)==1&&a.jsx("p",{className:"text-green-700",children:"Verified"}),((b=e==null?void 0:e.uploadDoc)==null?void 0:b.verify_status)==2&&a.jsx("p",{className:"text-red-700",children:"Rejected"})]})})}),a.jsx("td",{className:"px-1 md:px-5 py-2 border-b border-gray-200 bg-white text-sm",children:((j=e==null?void 0:e.uploadDoc)==null?void 0:j.verify_status)!=1&&a.jsx("button",{onClick:()=>ee(e.ownerName,e.docName,e.ownerId,e.docVal,e.refDocName),className:"border px-2 md:px-4 py-1 md:py-2 hover:text-white hover:bg-indigo-500",children:((g=e==null?void 0:e.uploadDoc)==null?void 0:g.verify_status)==2?"Re-Upload":"Upload"})})]})}):a.jsx("p",{children:"No Data Found"})})]}),a.jsxs("p",{className:" font-semibold text-red-400",children:[" ",a.jsx("span",{className:"text-base",children:" *"})," ",a.jsx("span",{className:"text-xs",children:" Mandatory"})]})]})})})]})})})]})};export{ge as default};
