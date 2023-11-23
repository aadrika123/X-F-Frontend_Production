import{a8 as B,r as d,u as X,a as J,j as e,B as K,S as W,n as c,a6 as Y,bc as I,bi as M,bp as Z,Q as P,A as T,b as O,P as ee}from"./index-a241319b.js";const re={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none"}};B.setAppElement("#root");function de(te){var N,w,v,S,A,C,k,E,V;const[F,o]=d.useState(!1);d.useState();const[R,x]=d.useState(!1),[_,m]=d.useState(""),[t,D]=d.useState(),{safId:n,type:se}=X(),[L,b]=d.useState(!1),[q,y]=d.useState(""),[p,g]=d.useState(""),[z,h]=d.useState(!1),[G,u]=d.useState(!0),{api_getVerificationData:$,api_approveRejectApplication:U}=ee();J("Existing holding Edit Approval ");const H=r=>{if(!p){P("Please enter a comment.");return}o(!0),x(!1);let s={applicationId:n,status:r,comment:p};T.post(U,s,O()).then(function(a){a.status===200?(P(`Application has been ${r?"approved":"rejected"}.`),g(""),h(!1),window.history.back()):alert(`Error: ${a.statusText}`),o(!1)}).catch(function(a){alert(`Error: ${a.message}`),o(!1)})},j=r=>{b(!0),y(r)},f=()=>{b(!1),y("")},Q=()=>{o(!0),x(!1);let r={applicationId:n};console.log("object",n),T.post($,r,O()).then(function(s){var a,i,l;console.log("VerificationData data list...",s==null?void 0:s.data),(a=s==null?void 0:s.data)!=null&&a.status?D((i=s==null?void 0:s.data)==null?void 0:i.data):(x(!0),m((l=s==null?void 0:s.data)==null?void 0:l.message)),o(!1)}).catch(function(s){console.log("VerificationData data error...",s),m("Server error! Please try again later."),x(!0),o(!1)})};return console.log("object",t==null?void 0:t.userDtl),d.useEffect(()=>{Q()},[]),F?e.jsx(e.Fragment,{children:e.jsx(K,{})}):R?e.jsx(W,{title:"Server is busy",desc:_,buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{className:"py-4 rounded-lg shadow-lg p-4",children:e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 md:items-center justify-center",children:[e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-semibold text-md",children:c((N=t==null?void 0:t.userDtl)==null?void 0:N.updationType)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Updation Type"})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:c((w=t==null?void 0:t.userDtl)==null?void 0:w.employeeName)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Verified By"})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:Y((v=t==null?void 0:t.userDtl)==null?void 0:v.applicationDate)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Application Date"})]})]})})}),e.jsx("div",{className:" font-bold text-xl pb-4 md:py-4 text-gray-400",children:"Verification Details"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3",children:"#"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Particular"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Self-Assessed"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Check"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Verification"})]})}),e.jsx("tbody",{children:(C=(A=(S=t==null?void 0:t.propCom)==null?void 0:S.basic)==null?void 0:A.values)==null?void 0:C.map((r,s)=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:s+1}),e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800 border-l border-l-gray-200",children:c(r==null?void 0:r.key)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:c(r==null?void 0:r.according_application)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:c((r==null?void 0:r.values)==!1?e.jsx(I,{className:"inline text-red-500 text-5xl"}):e.jsx(M,{className:"inline text-green-500 text-3xl ml-3"}))}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:c(r==null?void 0:r.according_verification)})]}))})]})})}),e.jsx("div",{className:" font-bold text-xl pb-4 md:py-4 text-gray-400",children:"Owner Verified Details"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3",children:"Particular"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Owner Name"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Owner Name In Marathi"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Guardian Name"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Guardian Name In Marathi"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Relation Type"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Mobile No."}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Email"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Pan No."}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Aadhar No."}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Gender"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"DOB"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Is armed force"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Is specially abled"})]})}),e.jsx("tbody",{children:(k=t==null?void 0:t.ownerCom)==null?void 0:k.map(r=>{var s,a,i;return e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Self Assessed"}),(s=r==null?void 0:r.values)==null?void 0:s.map(l=>e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200",children:c(l==null?void 0:l.according_application)}))]}),e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Check"}),(a=r==null?void 0:r.values)==null?void 0:a.map(l=>e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200",children:c((l==null?void 0:l.values)==!1?e.jsx(I,{className:"inline text-red-500 text-5xl"}):e.jsx(M,{className:"inline text-green-500 text-3xl ml-3"}))}))]}),e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Verification"}),(i=r==null?void 0:r.values)==null?void 0:i.map(l=>e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200",children:c(l==null?void 0:l.according_verification)}))]})]})})})]})})}),e.jsx("div",{className:" font-bold text-xl pb-4 md:py-4 text-gray-400",children:"Supportive Document"}),e.jsx("div",{className:"w-full bg-white shadow-xl mt-4 mb-6  ",children:e.jsx("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsx("div",{className:"font-semibold text-md cursor-pointer p-4",children:Z((E=t==null?void 0:t.userDtl)==null?void 0:E.document)=="pdf"?e.jsx("img",{src:"https://static.vecteezy.com/system/resources/previews/022/597/332/original/3d-file-pdf-icon-illustration-png.png",alt:"supporting document",className:"w-16 h-16",onClick:()=>{var r;return j((r=t==null?void 0:t.userDtl)==null?void 0:r.document)}}):e.jsx("img",{src:(V=t==null?void 0:t.userDtl)==null?void 0:V.document,alt:"supporting document",className:"w-16 h-16",onClick:()=>{var r;return j((r=t==null?void 0:t.userDtl)==null?void 0:r.document)}})})})}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx("button",{className:"bg-green-600 text-white px-2 py-2 rounded-md",onClick:()=>{h(!0),u(!0)},children:"Approve"}),e.jsx("button",{className:"bg-red-600 text-white px-2 py-2 rounded-md",onClick:()=>{h(!0),u(!1)},children:"Reject"}),z&&e.jsxs("div",{children:[e.jsx("textarea",{placeholder:"Enter your comment",value:p,required:!0,onChange:r=>g(r.target.value)}),e.jsx("button",{className:"bg-blue-600 text-white px-2 py-2 rounded-md",onClick:()=>{H(G?1:0)},children:"Submit"})]})]}),e.jsx(B,{isOpen:L,onAfterClose:f,style:re,children:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"overflow-auto p-1  shadow-lg rounded-lg text-center bg-gray-500",style:{width:"60vw",height:"60vh"},children:[e.jsx("button",{className:"bg-red-500 rounded-full absolute top-0 right-0 p-1 h-8 w-8 text-white cursor-pointer",onClick:f,children:"X"}),e.jsx("iframe",{src:q,frameborder:"0",className:"w-full h-full ml-20"})]})})})]})}export{de as default};
