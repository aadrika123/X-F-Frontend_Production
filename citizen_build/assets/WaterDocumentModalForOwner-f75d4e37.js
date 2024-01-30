import{aM as P,r as l,aN as T,g as _,j as e,M as B,bS as L,bT as I,A as R}from"./index-f9255818.js";const W="/assets/image-506bbc5b.png",$="/assets/no-photo-22d007b7.png",A="/assets/upload-2c8c7f58.gif",z={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"transparent",border:"none"}};function q(s){var y,f,j;const[v,i]=P.useState(!1),[p,u]=l.useState(),[h,d]=l.useState(),[o,b]=l.useState(),[n,c]=l.useState(!1),{api_getDocList:D,api_waterUploadDoc:O,header:C}=T(),{notify:g}=l.useContext(_),t=s==null?void 0:s.payloadData;console.log("Doc type is",p,t),console.log("this isss...",t==null?void 0:t.refDocName),l.useEffect(()=>{s.openDocumentModal>0&&i(!0),d()},[s.openDocumentModal]);function M(){}function m(){i(!1),u(),b()}const F=a=>{var N,w;a.preventDefault();const U=["jpg","jpeg","png","pdf"],E=(N=o==null?void 0:o.name)==null?void 0:N.split(".").pop().toLowerCase();if(!U.includes(E)){d(" Unsupported File Format. Please upload PDF, JPG, PNG, or JPEG.");return}if(p==null||p==""||o==null||o=="")return d("Please Select Correct File and Type");let r=new FormData;r.append("applicationId",(w=s==null?void 0:s.payloadData)==null?void 0:w.applicationId),r.append("document",o),r.append("docCode",p),r.append("docCategory",t==null?void 0:t.refDocName),c(!0),R.post(O,r,C).then(x=>{x.data.status==!0?(g("Document Uploaded Successfully","success"),console.log("Data Uploaded",x),c(!1),m(),s.refetch()):(c(!1),g("Failed to Upload Document","error"),d("Error : File is too large - must be under 2MB. "))}).catch(x=>{c(!1),g("Something went wrong","error"),d("Exception : File is too large - must be under 2MB.  "),console.log("Expection...",x)})};return e.jsx("div",{className:"",children:e.jsx(B,{isOpen:v,onAfterOpen:M,onRequestClose:m,style:z,contentLabel:"Example Modal",children:e.jsx("form",{encType:"multipart/form",onSubmit:F,children:e.jsxs("div",{className:"bg-indigo-200 shadow-2xl border border-sky-200 p-2 rounded-md",children:[e.jsxs("div",{className:"my-2 mx-3",children:[e.jsxs("div",{onClick:m,className:"float-right cursor-pointer hover:bg-gray-300 rounded-sm p-1",children:[" ",e.jsx(L,{})]}),e.jsxs("h1",{className:"font-semibold text-gray-700",children:["Upload Document ",(y=s==null?void 0:s.payloadData)==null?void 0:y.docName]})]}),e.jsxs("div",{className:"md:inline-block min-w-full overflow-hidden hidden p-4",children:[e.jsxs("table",{className:"min-w-full leading-normal border",children:[e.jsx("thead",{className:"bg-sky-100",children:e.jsxs("tr",{className:"font-semibold ",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Document Name"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Document Type"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Upload"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Submit"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:1})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:(f=t==null?void 0:t.refDocName)==null?void 0:f.replace(/_/g," ")})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:e.jsxs("select",{onChange:a=>u(a.target.selectedOptions[0].text),className:" outline-blue-600 border border-gray-400 w-40",children:[e.jsx("option",{children:"Select Document"}),(j=t==null?void 0:t.docVal)==null?void 0:j.map(a=>e.jsx("option",{value:a.id,children:a.doc_name}))]})})}),e.jsx("td",{className:"px-5 border-b border-gray-200 bg-white text-sm",children:e.jsxs("span",{className:"relative inline-block ",children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 "}),e.jsxs("span",{className:"relative ",children:[e.jsx("input",{disabled:n,name:"docPath",type:"file",style:{display:"none"},id:"contained-button-file",onChange:a=>b(a.target.files[0])}),e.jsxs("label",{className:` ${n?"cursor-wait hover:rounded-none":"cursor-pointer rounded-sm hover:rounded-md hover:shadow-2xl hover:bg-blue-600 hover:ring-1 hover:ring-blue-800"} bg-blue-500  shadow-lg flex pl-4 pr-5 py-2  text-white font-medium`,htmlFor:"contained-button-file",children:[e.jsx(I,{size:16,className:"mt-0 ml-0 mr-2 font-medium"}),"Browse File"]})]})]})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:n?e.jsx("img",{className:"h-8",src:A,alt:"Uploading"}):e.jsx("button",{disabled:n,type:"submit",className:"border disabled:bg-green-300 disabled:text-gray-500 bg-green-600 rounded-md text-white px-4 py-2",children:"Submit"})})]})})]}),e.jsx("div",{className:"my-2 flex justify-center font-semibold text-red-600 relative",children:e.jsx("p",{className:"absolute",children:h&&h})})]})]})})})})}const G={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"transparent",border:"none"}};function J(s){var y,f,j;const[v,i]=l.useState(),[p,u]=P.useState(!1),[h,d]=l.useState();l.useState();const[o,b]=l.useState(),[n,c]=l.useState(!1),{notify:D}=l.useContext(_),{api_getDocList:O,api_waterUploadDoc:C,header:g}=T(),t=s==null?void 0:s.payloadData;l.useEffect(()=>{s.openDocumentModal>0&&u(!0)},[s.openDocumentModal]);function M(){}function m(){u(!1),d(),b()}console.log("Props in water doc upload",s);const F=a=>{var N,w,x,k;if(a.preventDefault(),h==null||h==""||o==null||o=="")return i("Please Select Correct File and Type");const U=["jpg","jpeg","png","pdf"],E=(N=o==null?void 0:o.name)==null?void 0:N.split(".").pop().toLowerCase();if(!U.includes(E)){i("Invalid file extension");return}let r=new FormData;r.append("applicationId",(w=s==null?void 0:s.payloadData)==null?void 0:w.applicationId),r.append("docCategory",(x=s==null?void 0:s.payloadData)==null?void 0:x.docCategory),r.append("document",o),r.append("docCode",h),r.append("ownerId",(k=s==null?void 0:s.payloadData)==null?void 0:k.ownerId),console.log("Owner Document Complate Payload",r),c(!0),R.post(C,r,g).then(S=>{S.data.status==!0?(D("Document Uploaded Successfully","success"),console.log("Data Uploaded",S),c(!1),m(),s.refetch()):(c(!1),D("Failed to Upload Document","error"),i("Error : Exception : File is too large - must be under 2MB."))}).catch(S=>{c(!1),D("Something went wrong","error"),i("Exception : File is too large - must be under 2MB."),console.log("Expection...",S)})};return console.log("Paylidadd data in owner details",t),e.jsx("div",{className:"",children:e.jsx(B,{isOpen:p,onAfterOpen:M,onRequestClose:m,style:G,contentLabel:"Example Modal",children:e.jsx("form",{encType:"multipart/form",onSubmit:F,children:e.jsxs("div",{className:"bg-indigo-200 shadow-2xl border border-sky-200 p-2 rounded-md",children:[e.jsxs("div",{className:"my-2 mx-3",children:[e.jsxs("div",{onClick:m,className:"float-right cursor-pointer hover:bg-gray-300 rounded-sm p-1",children:[" ",e.jsx(L,{})]}),e.jsx("h1",{className:"font-semibold md:text-xl text-sm text-gray-700",children:"Upload Document"})]}),e.jsxs("div",{className:"md:inline-block min-w-full overflow-hidden hidden p-4",children:[e.jsxs("table",{className:"min-w-full leading-normal border",children:[e.jsx("thead",{className:"bg-sky-100",children:e.jsxs("tr",{className:"font-semibold ",children:[e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"#"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Document Name"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Owner Name"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Document Type"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Upload"}),e.jsx("th",{scope:"col",className:"px-5 py-2 border-b border-gray-200 text-gray-800  text-left text-sm uppercase",children:"Submit"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:1})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap capitalize",children:(y=t==null?void 0:t.docName)==null?void 0:y.replace(/_/g," ")})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:t==null?void 0:t.ownerName})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:e.jsx("p",{className:"text-gray-900 whitespace-no-wrap",children:e.jsxs("select",{onChange:a=>d(a.target.selectedOptions[0].text),className:" outline-blue-600 border border-gray-400 w-40",children:[e.jsx("option",{children:"Select Documet"}),(f=t==null?void 0:t.docVal)==null?void 0:f.map(a=>e.jsx("option",{value:a.id,children:a.doc_name}))]})})}),e.jsx("td",{className:"px-5 border-b border-gray-200 bg-white text-sm",children:e.jsxs("span",{className:"relative inline-block ",children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 "}),e.jsxs("span",{className:"relative ",children:[e.jsx("input",{disabled:n,name:"docPath",type:"file",style:{display:"none"},id:"contained-button-file",onChange:a=>b(a.target.files[0])}),e.jsxs("label",{className:` ${n?"cursor-wait hover:rounded-none":"cursor-pointer rounded-sm hover:rounded-md hover:shadow-2xl hover:bg-blue-600 hover:ring-1 hover:ring-blue-800"} bg-blue-500  shadow-lg flex pl-4 pr-5 py-2  text-white font-medium`,htmlFor:"contained-button-file",children:[e.jsx(I,{size:16,className:"mt-0 ml-0 mr-2 font-medium"}),"Browse File"]})]})]})}),e.jsx("td",{className:"px-5 py-2 border-b border-gray-200 bg-white text-sm",children:n?e.jsx("img",{className:"h-8",src:A,alt:"Uploading"}):e.jsx("button",{disabled:n,type:"submit",className:"border disabled:bg-green-300 disabled:text-gray-500 bg-green-600 rounded-md text-white px-4 py-2",children:"Submit"})})]})})]}),e.jsx("div",{className:"my-2 flex justify-center font-semibold text-red-600 relative",children:e.jsx("p",{className:"absolute",children:v&&v})})]}),e.jsxs("div",{className:"grid grid-cols-12 md:hidden",children:[e.jsxs("div",{className:"col-span-5 text-sm",children:[e.jsx("p",{children:"Document Name"}),e.jsx("p",{children:"Owner Name"}),e.jsx("p",{children:"Document Type"}),e.jsx("p",{children:"Select File"})]}),e.jsxs("div",{className:"col-span-7",children:[e.jsx("p",{children:t==null?void 0:t.docName}),e.jsx("p",{children:t==null?void 0:t.ownerName}),e.jsx("p",{children:e.jsxs("select",{onChange:a=>d(a.target.selectedOptions[0].text),className:" outline-blue-600 border border-gray-400 h-8 w-32 text-xs",children:[e.jsx("option",{children:"Select Document"}),(j=t==null?void 0:t.docVal)==null?void 0:j.map(a=>e.jsx("option",{value:a.id,children:a.doc_name}))]})}),e.jsx("p",{children:e.jsxs("span",{className:"relative inline-block ",children:[e.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 "}),e.jsxs("span",{className:"relative ",children:[e.jsx("input",{name:"docPath",type:"file",style:{display:"none"},id:"contained-button-file",onChange:a=>b(a.target.files[0])}),e.jsxs("label",{className:"bg-blue-500 hover:bg-blue-600 hover:ring-1 hover:ring-blue-800 rounded-sm hover:shadow-2xl shadow-lg cursor-pointer flex pl-2 pr-3 py-1  text-white font-medium",htmlFor:"contained-button-file",children:[e.jsx(I,{size:16,className:"mt-0 ml-0 mr-2 font-medium"}),"Browse File"]})]})]})})]}),e.jsxs("div",{className:"text-sm flex m-auto",children:[e.jsx("button",{type:"button",className:"border bg-sky-600 rounded-md text-white px-3 py-1",children:"Close"}),e.jsx("button",{disabled:n,type:"submit",className:"border disabled:bg-green-300 disabled:text-gray-500 bg-green-600 rounded-md text-white px-3 py-1",children:"Submit"})]})]})]})})})})}export{q as W,J as a,W as i,$ as n};
