import{j as e,a1 as F,r as t,aJ as V,aK as E,A as W,bJ as R,bK as T,a as z,bL as J}from"./index-5738b2d0.js";import{N as K}from"./NotificationButton-82be603c.js";import{p as B}from"./pdf-37897ad1.js";import{W as H,a as $,n as O,i as _}from"./WaterDocumentModalForOwner-6f6bfacb.js";function q(){return e.jsx("div",{className:"w-full h-12 bg-green-50 shadow-lg px-2 flex items-center text-xs text-gray-500 relative overflow-hidden",children:e.jsx("span",{className:" absolute text-green-800",children:e.jsxs("span",{className:"text-red-800 ml-2",children:[e.jsx(F,{className:"inline text-sm"})," Please pay your water tax on time and avoid penalty. Pay before 10/12/2022"]})})})}function G(l){const[c,x]=t.useState(0),[d,P]=t.useState(0),[S,M]=t.useState(0);V.useState(!1);const[p,m]=t.useState(),[n,h]=t.useState(),[v,D]=t.useState(),[I,L]=t.useState(),{api_getDocList:C}=E();t.useEffect(()=>{i()},[l.uploadDocBtnId]);const i=()=>{W.post(C,{applicationId:l==null?void 0:l.uploadDocBtnId},R()).then(s=>{console.log("Llist of document to upload",s),s.data.status==!0&&(m(s.data.data.documentsList),h(s.data.data.ownersDocList))}).catch(s=>console.log("Error in Document upload list",s))},U=s=>{const a={docName:s,applicationId:l==null?void 0:l.uploadDocBtnId};D(a),x(o=>o+1)},k=(s,a)=>{const o={docName:s,applicationId:l==null?void 0:l.uploadDocBtnId,ownerId:a};D(o),P(r=>r+1)},A=s=>{s&&(L(s),M(a=>a+1))};return console.log("ownerDocList",n),e.jsxs(e.Fragment,{children:[e.jsx(H,{openDocumentModal:c,payloadData:v,refetch:i}),e.jsx($,{openDocumentModal:d,payloadData:v,refetch:i}),e.jsx(T,{openDocviewModal:S,documentUrl:I}),e.jsx("div",{className:"float-right m-3",children:e.jsx("button",{onClick:l.back,class:"py-2 px-4 inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",children:"Back"})}),e.jsx("div",{children:e.jsx("h1",{class:"text-xl font-bold mt-3 mb-5 text-gray-600 ml-3",children:"Water Connection Document List+"})}),e.jsx("div",{className:"bg-white shadow-xl border border-sky-200 p-5 m-2 rounded-md",children:e.jsx("div",{className:"md:inline-block min-w-full overflow-hidden hidden",children:e.jsxs("table",{className:"min-w-full leading-normal border",children:[e.jsx("thead",{className:"bg-sky-100",children:e.jsxs("tr",{className:"font-semibold ",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Document Name"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Remark"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"View"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800 text-center text-sm uppercase",children:"Status"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Upload"})]})}),e.jsx("tbody",{children:p==null?void 0:p.map((s,a=1)=>{var o,r,b,g,u,y,j,N,f;return e.jsxs("tr",{children:[e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:a+1})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsxs("p",{className:"text-gray-900 whitespace-no-wrap",children:[s==null?void 0:s.docName,(s==null?void 0:s.isMadatory)&&e.jsx("span",{className:"text-red-500 font-semibold mx-1",children:"*"})]})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:(s==null?void 0:s.uploadDoc)==null?e.jsx("p",{className:"text-red-500",children:"Not Upload"}):e.jsxs("div",{children:[((o=s==null?void 0:s.uploadDoc)==null?void 0:o.verify_status)==0&&e.jsx("p",{className:"text-green-700",children:"Pending"}),((r=s==null?void 0:s.uploadDoc)==null?void 0:r.verify_status)==1&&e.jsx("p",{className:"text-green-700",children:"Verified"}),((b=s==null?void 0:s.uploadDoc)==null?void 0:b.verify_status)==2&&e.jsx("p",{className:"text-red-700",children:"Rejected"})]})})}),e.jsx("td",{onClick:()=>{var w;return A((w=s==null?void 0:s.uploadDoc)==null?void 0:w.doc_path)},className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("div",{className:"flex items-center",children:e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("a",{href:"#",className:"block relative",children:[(s==null?void 0:s.uploadDoc)==null&&e.jsx("img",{alt:"profil",src:O,className:"mx-auto object-cover rounded-none h-10 w-10 cursor-not-allowed"}),((u=(g=s==null?void 0:s.uploadDoc)==null?void 0:g.doc_path)==null?void 0:u.split(".").pop())=="pdf"&&e.jsx("img",{alt:"profil",src:B,className:"mx-auto object-cover rounded-none h-10 w-10 "}),((j=(y=s==null?void 0:s.uploadDoc)==null?void 0:y.doc_path)==null?void 0:j.split(".").pop())=="jpg"&&e.jsx("img",{alt:"profil",src:_,className:"mx-auto object-cover rounded-none h-10 w-10 "}),((f=(N=s==null?void 0:s.uploadDoc)==null?void 0:N.doc_path)==null?void 0:f.split(".").pop())=="png"&&e.jsx("img",{alt:"profil",src:_,className:"mx-auto object-cover rounded-none h-10 w-10 "})]})})})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsxs("p",{className:"text-center text-black font-medium",children:[s.uploadDoc==null&&e.jsx("p",{className:"bg-red-400 rounded-xl px-2 py-0.5",children:s.docStatus}),s.uploadDoc!=null&&e.jsx("p",{className:"bg-green-400 rounded-xl py-0.5",children:s.docStatus})]})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("button",{onClick:()=>U(s.docName),className:"border px-4 py-2",children:"Upload"})})]})})})]})})}),e.jsx("div",{children:e.jsx("h1",{class:"text-xl font-bold my-5 text-gray-600 ml-3",children:"Owner Document List++"})}),e.jsx("div",{className:"bg-white shadow-xl border border-sky-200 p-5 m-2 rounded-md",children:e.jsx("div",{className:"md:inline-block min-w-full overflow-hidden hidden",children:e.jsxs("table",{className:"min-w-full leading-normal border",children:[e.jsx("thead",{className:"bg-sky-100",children:e.jsxs("tr",{className:"font-semibold ",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Document Name"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Owner Name"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Remark"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"View"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800 text-center text-sm uppercase",children:"Status"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Upload"})]})}),e.jsx("tbody",{children:n==null?void 0:n.map((s,a=1)=>{var o,r,b,g,u,y,j,N,f;return e.jsxs("tr",{children:[e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:a+1})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsxs("p",{className:"text-gray-900 whitespace-no-wrap",children:[s==null?void 0:s.docName,(s==null?void 0:s.isMadatory)&&e.jsx("span",{className:"text-red-500 font-semibold mx-1",children:"*"})]})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:s==null?void 0:s.ownerName})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:(s==null?void 0:s.uploadDoc)==null?e.jsx("p",{className:"text-red-500",children:"Not Upload"}):e.jsxs("div",{children:[((o=s==null?void 0:s.uploadDoc)==null?void 0:o.verify_status)==0&&e.jsx("p",{className:"text-green-700",children:"Pending"}),((r=s==null?void 0:s.uploadDoc)==null?void 0:r.verify_status)==1&&e.jsx("p",{className:"text-green-700",children:"Verified"}),((b=s==null?void 0:s.uploadDoc)==null?void 0:b.verify_status)==2&&e.jsx("p",{className:"text-red-700",children:"Rejected"})]})})}),e.jsx("td",{onClick:()=>{var w;return A((w=s==null?void 0:s.uploadDoc)==null?void 0:w.doc_path)},className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("div",{className:"flex items-center",children:e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("a",{href:"#",className:"block relative",children:[(s==null?void 0:s.uploadDoc)==null&&e.jsx("img",{alt:"profil",src:O,className:"mx-auto object-cover rounded-none h-10 w-10 cursor-not-allowed"}),((u=(g=s==null?void 0:s.uploadDoc)==null?void 0:g.doc_path)==null?void 0:u.split(".").pop())=="pdf"&&e.jsx("img",{alt:"profil",src:B,className:"mx-auto object-cover rounded-none h-10 w-10 "}),((j=(y=s==null?void 0:s.uploadDoc)==null?void 0:y.doc_path)==null?void 0:j.split(".").pop())=="jpg"&&e.jsx("img",{alt:"profil",src:_,className:"mx-auto object-cover rounded-none h-10 w-10 "}),((f=(N=s==null?void 0:s.uploadDoc)==null?void 0:N.doc_path)==null?void 0:f.split(".").pop())=="png"&&e.jsx("img",{alt:"profil",src:_,className:"mx-auto object-cover rounded-none h-10 w-10 "})]})})})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsxs("p",{className:"text-center text-black font-medium",children:[s.uploadDoc==null&&e.jsx("p",{className:"bg-red-400 rounded-xl px-2 py-0.5",children:s.docStatus}),s.uploadDoc!=null&&e.jsx("p",{className:"bg-green-400 rounded-xl py-0.5",children:s.docStatus})]})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("button",{onClick:()=>k(s.docName,s.ownerId),className:"border px-4 py-2",children:"Upload"})})]})})})]})})})]})}function Q(l){const{api_citizenApplications:c,api_citizenApprovedApplications:x,header:d}=E(),[P,S]=t.useState(0),[M,p]=t.useState(0),[m,n]=t.useState(),[h,v]=t.useState(),[D,I]=t.useState(),[L,C]=t.useState(),[i,U]=t.useState(0),k=z(),A=(a,o)=>{console.log("Clicked PAy"),S(r=>r+1),I({id:a,type:o})},s=a=>{console.log("Clicked Document Upload"),p(o=>o+1),C(a),l.uploadDocId(a)};return t.useEffect(()=>{W.post(x,{},d).then(a=>{a.data.status==!0?(console.log("Approved Application Listst",a.data),v(a.data.data)):console.log("Error Approced Application Listst",a)}).catch(a=>console.log("error ecxewption",a))},[i]),t.useEffect(()=>{W.post(c,{},d).then(a=>{a.data.status==!0?(console.log("Application Listst",a),n(a.data.data)):console.log("Error its FALSE",a)}).catch(a=>console.log("error ecxewption",a))},[i]),e.jsxs(e.Fragment,{children:[e.jsx(J,{openPaymentModal:P,paymentData:D,refechList:()=>U(a=>a+1)}),e.jsxs("div",{children:[e.jsx("h1",{className:"px-2 font-semibold mt-0 text-center text-gray-900 font-serif py-2 md:text-2xl uppercase ",children:"Manage all your water connections at one place"}),e.jsx("p",{className:"border-b border-gray-300 mx-5"}),e.jsxs("div",{className:"float-right mt-2 mr-3",children:[" ",e.jsx("button",{onClick:()=>k("/water-apply"),className:"py-2 mx-2 px-4 inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-sky-500 border border-sky-500 hover:text-white hover:bg-sky-600 hover:ring-0 hover:border-sky-600 focus:bg-sky-600 focus:border-sky-600 focus:outline-none focus:ring-2",children:"Apply New Connection"})," "]}),e.jsxs("div",{className:"px-2 w-full mt-10",children:[e.jsx("div",{className:"text-lg font-sans font-semibold text-gray-700 mx-2 my-2",children:"All Water Connections"}),h==null?void 0:h.map(a=>e.jsx("div",{className:"bg-white shadow-lg pb-2 oveflow-hidden mb-2 rounded-lg relative",children:e.jsxs("div",{className:"w-full py-8 rounded-lg  px-4 md:flex",children:[e.jsx("span",{className:"px-3 py-1 bg-green-200 border border-green-300 text-gray-700 text-xs font-semibold absolute rounded-tl-md rounded-br-md top-0 left-0 shadow-sm",children:"Active Water Connection "}),e.jsxs("div",{className:"w-full flex space-x-2 mt-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-gray-700",children:a==null?void 0:a.consumer_no}),e.jsx("div",{className:"text-sm text-gray-600 font-serif",children:"Connection No."})]}),e.jsxs("div",{className:"pl-4",children:[e.jsx("div",{className:"font-semibold text-gray-700",children:a==null?void 0:a.applicant_name}),e.jsx("div",{className:"text-sm text-gray-600 font-serif",children:"Owner Name"})]}),e.jsxs("div",{className:"pl-4",children:[e.jsx("div",{className:"font-semibold text-gray-700",children:a==null?void 0:a.ward_name}),e.jsx("div",{className:"text-sm text-gray-600 font-serif",children:"Ward No"})]}),e.jsxs("div",{className:"pl-4",children:[e.jsx("div",{className:"font-semibold text-gray-700",children:a==null?void 0:a.ulb_name}),e.jsx("div",{className:"text-sm text-gray-600 font-serif",children:"ULB Name"})]}),e.jsxs("div",{className:"pl-4",children:[e.jsx("div",{className:"font-semibold text-gray-700",children:a==null?void 0:a.address}),e.jsx("div",{className:"text-sm text-gray-600 font-serif",children:"Address"})]})]}),e.jsx("div",{className:"float-right",children:e.jsxs("div",{className:"flex",children:[e.jsx("button",{onClick:()=>k(`/water/viewApplication/${a==null?void 0:a.consumer_no}`),className:"border text-sm bg-amber-400 hover:bg-amber-500 mx-2 my-2 px-3 py-2 rounded-md shadow-lg",children:" View Application"}),e.jsx("button",{className:"border text-sm bg-green-400 hover:bg-green-500 mx-2 my-2 px-3 py-2 rounded-md shadow-lg",children:" View Demand"})]})})]})}))]}),e.jsxs("div",{className:"px-2 w-full mt-10",children:[e.jsx("div",{className:"text-lg font-sans font-semibold text-gray-700 mx-2 my-2",children:"Applied Water Applications"}),m==null?void 0:m.map((a,o)=>e.jsx("div",{className:"bg-white shadow-lg pb-2 oveflow-hidden mb-2 rounded-lg relative",children:e.jsxs("div",{className:"w-full py-4 rounded-lg  px-4 md:flex",children:[e.jsx("span",{className:"px-3 py-1 bg-yellow-200 border border-yellow-300 text-gray-700 text-xs font-semibold absolute rounded-tl-md rounded-br-md top-0 left-0 shadow-sm",children:"Pending Application "}),e.jsxs("div",{className:"w-full flex space-x-2 mt-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold text-gray-700",children:a==null?void 0:a.application_no}),e.jsx("div",{className:"text-xs text-gray-600 font-serif",children:"Application No."}),e.jsxs("div",{className:"text-xs text-gray-600 font-serif",children:["Ward No (ID) - ",a==null?void 0:a.ward_name," (",a==null?void 0:a.ward_id,")"]})]}),e.jsxs("div",{className:"pl-4",children:[e.jsxs("div",{className:"font-semibold text-gray-700",children:["₹ ",a==null?void 0:a.amount]}),e.jsx("div",{className:"text-xs text-gray-600 font-serif",children:"Total Tax"})]}),e.jsx("p",{className:"border-r border-gray-600 md:pl-10"}),e.jsxs("div",{className:"w-full md:w-1/4 pl-2 text-xs",children:[e.jsx("div",{className:"font-semibold font-sans",children:"Actions"}),e.jsx("div",{className:"text-sm text-amber-500",children:" Document Upload Pending"}),a!=null&&a.payment_status?e.jsx("div",{className:"text-sm text-green-500",children:" Payment Completed"}):e.jsx("div",{className:"text-sm text-amber-500",children:" Waiting for Payment"})]}),e.jsxs("div",{className:"block",children:[e.jsx("button",{className:"border text-sm bg-blue-400 hover:bg-blue-500 mx-2 py-2 px-3 text-white font-sans font-normal rounded-md shadow-lg",children:" View Application"}),e.jsx("button",{onClick:()=>s(a.id),className:"border text-sm bg-indigo-400 hover:bg-indigo-500 py-2 mx-2 px-3 rounded-md text-white font-sans font-normal shadow-lg",children:" Upload Document"}),!(a!=null&&a.payment_status)&&e.jsx("button",{onClick:()=>A(a.id,a.type),className:"border text-sm py-2 text-white font-sans font-normal bg-cyan-400 hover:bg-cyan-500 mx-2 px-3 rounded-md shadow-lg",children:" Pay Now"})]})]})]})}))]})]})]})}function X(){return e.jsxs("div",{children:[e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"mb-2 text-gray-700 font-sans font-semibold",children:"Notifications"}),e.jsx("div",{className:"bg-yellow-50 shadow-lg py-2 text-base  flex pl-4 items-center mt-2",children:"Property appication no 2083 has been approved"}),e.jsx("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center mt-2",children:"Property appication no 2083 has been approved"}),e.jsx("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center mt-2",children:"Property appication no 2083 has been approved"})]}),e.jsx("div",{className:"w-full h-1 border-b-2 border-white mt-10"}),e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"mb-2 text-gray-700 font-sans font-semibold",children:"Actions"}),e.jsxs("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center mt-2",children:["Pay your property tax ",e.jsx("span",{className:"ml-4 cursor-pointer bg-green-400 text-white px-2 py-1 text-base shadow-lg",children:"Pay"})]}),e.jsxs("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center mt-2",children:["Pay your property tax ",e.jsx("span",{className:"ml-4 cursor-pointer bg-green-400 text-white px-2 py-1 text-base shadow-lg",children:"Pay"})]}),e.jsxs("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center mt-2",children:["Pay your property tax ",e.jsx("span",{className:"ml-4 cursor-pointer bg-green-400 text-white px-2 py-1 text-base shadow-lg",children:"Pay"})]})]}),e.jsx("div",{className:"w-full h-1 border-b-2 border-white mt-10"}),e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"mb-2 text-gray-700 font-sans font-semibold",children:"Summary"}),e.jsxs("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center w-3/4 rounded-sm",children:["Total Property",e.jsx("span",{className:"ml-4 cursor-pointer bg-yellow-400 text-white px-2 py-1 text-base shadow-lg rounded-lg ",children:"2"})]}),e.jsxs("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center mt-2 w-3/4 rounded-sm",children:["Total Water",e.jsx("span",{className:"ml-4 cursor-pointer bg-yellow-400 text-white px-2 py-1 text-base shadow-lg rounded-lg ",children:"2"})]}),e.jsxs("div",{className:"bg-yellow-50 shadow-lg py-2 text-base flex pl-4 items-center mt-2 w-3/4 rounded-sm",children:["Total Trade",e.jsx("span",{className:"ml-4 cursor-pointer bg-yellow-400 text-white px-2 py-1 text-base shadow-lg rounded-lg ",children:"2"})]})]})]})}function Y(){const[l,c]=t.useState(),x=d=>{console.log("uploadDocId",d),c(d)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-12 my-10",children:[e.jsxs("div",{className:"col-span-9 border rounded-md bg-blue-50",children:[!l&&e.jsx(Q,{uploadDocId:x}),l&&e.jsx(G,{uploadDocBtnId:l,back:()=>c()})]}),e.jsxs("div",{className:"col-span-3 border rounded-md ml-3 bg-blue-50",children:[" ",e.jsx(X,{})," "]})]})})}function te(){return e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsx(Y,{}),e.jsx(K,{})]})}export{te as default};
