import{ag as L,r as a,u as Z,a as ee,j as e,B as re,S as se,n as c,ae as le,by as n,bT as p,c1 as te,Q as B,A as R,b as z,P as oe}from"./index-be1e1588.js";const ce={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none"}};L.setAppElement("#root");function xe(de){var v,k,S,C,A,_,E,T,V,F,I,M,P,O;const[q,i]=a.useState(!1);a.useState();const[G,x]=a.useState(!1),[$,m]=a.useState(""),[s,U]=a.useState(),{safId:y,type:ae}=Z(),[D,g]=a.useState(!1),[H,j]=a.useState(""),[h,f]=a.useState(""),[Q,b]=a.useState(!1),[X,u]=a.useState(!0),{api_getVerificationData:J,api_approveRejectApplication:K}=oe();ee("Existing holding Edit Approval ");const W=r=>{if(!h){B("Please enter a comment.");return}i(!0),x(!1);let t={applicationId:y,status:r,comment:h};R.post(K,t,z()).then(function(o){o.status===200?(B(`Application has been ${r?"approved":"rejected"}.`),f(""),b(!1),window.history.back()):alert(`Error: ${o.statusText}`),i(!1)}).catch(function(o){alert(`Error: ${o.message}`),i(!1)})},N=r=>{g(!0),j(r)},w=()=>{g(!1),j("")},Y=()=>{i(!0),x(!1);let r={applicationId:y};R.post(J,r,z()).then(function(t){var o,d,l;(o=t==null?void 0:t.data)!=null&&o.status?U((d=t==null?void 0:t.data)==null?void 0:d.data):(x(!0),m((l=t==null?void 0:t.data)==null?void 0:l.message)),i(!1)}).catch(function(t){m("Server error! Please try again later."),x(!0),i(!1)})};return a.useEffect(()=>{Y()},[]),q?e.jsx(e.Fragment,{children:e.jsx(re,{})}):G?e.jsx(se,{title:"Server is busy",desc:$,buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{className:"py-4 rounded-lg shadow-lg p-4",children:e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 md:items-center justify-center",children:[e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-semibold text-md",children:c((v=s==null?void 0:s.userDtl)==null?void 0:v.updationType)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Updation Type"})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:c((k=s==null?void 0:s.userDtl)==null?void 0:k.employeeName)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Verified By"})]}),e.jsxs("div",{className:"flex-1 flex flex-col-reverse justify-center",children:[e.jsx("div",{className:"font-bold text-sm",children:le((S=s==null?void 0:s.userDtl)==null?void 0:S.applicationDate)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Application Date"})]})]})})}),e.jsx("div",{className:" font-bold text-xl pb-4 md:py-4 text-gray-400",children:"Verification Details"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3",children:"#"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Particular"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Self-Assessed"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Check"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Verification"})]})}),e.jsxs("tbody",{children:[(_=(A=(C=s==null?void 0:s.propCom)==null?void 0:C.basic)==null?void 0:A.values)==null?void 0:_.map((r,t)=>e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:t+1}),e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800 border-l border-l-gray-200",children:c(r==null?void 0:r.key)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:c(r==null?void 0:r.according_application)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:c((r==null?void 0:r.values)==!1?e.jsx(n,{className:"inline text-red-500 text-5xl"}):e.jsx(p,{className:"inline text-green-500 text-3xl ml-3"}))}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:c(r==null?void 0:r.according_verification)})]})),(V=(T=(E=s==null?void 0:s.propCom)==null?void 0:E.primary)==null?void 0:T.values)==null?void 0:V.map((r,t)=>{var o,d;return e.jsxs("tr",{class:"border-b border-gray-200 ",children:[e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800",children:((d=(o=s==null?void 0:s.propCom)==null?void 0:o.basic)==null?void 0:d.values.length)+t+1}),e.jsx("th",{scope:"row",class:"px-6 py-3 font-medium text-gray-900 whitespace-nowrap  darks:bg-gray-800 border-l border-l-gray-200",children:c(r==null?void 0:r.key)}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:c(r==null?void 0:r.according_application)}),e.jsx("td",{class:"px-6 py-3 darks:bg-gray-800 border-l border-l-gray-200",children:c((r==null?void 0:r.values)==!1?e.jsx(n,{className:"inline text-red-500 text-5xl"}):e.jsx(p,{className:"inline text-green-500 text-3xl ml-3"}))}),e.jsx("td",{class:"px-6 py-3 border-l border-l-gray-200",children:c(r==null?void 0:r.according_verification)})]})})]})]})})}),e.jsx("div",{className:" font-bold text-xl pb-4 md:py-4 text-gray-400",children:"Owner Verified Details"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3",children:"Particular"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Owner Name"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Owner Name In Marathi"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Guardian Name"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Guardian Name In Marathi"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Relation Type"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Mobile No."}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Email"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Pan No."}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Aadhar No."}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Gender"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"DOB"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Is armed force"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Is specially abled"})]})}),e.jsx("tbody",{children:(F=s==null?void 0:s.ownerCom)==null?void 0:F.map(r=>{var t,o,d;return e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Self Assessed"}),(t=r==null?void 0:r.values)==null?void 0:t.map(l=>e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200",children:c(l==null?void 0:l.according_application)}))]}),e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Check"}),(o=r==null?void 0:r.values)==null?void 0:o.map(l=>e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200",children:c((l==null?void 0:l.values)==!1?e.jsx(n,{className:"inline text-red-500 text-5xl"}):e.jsx(p,{className:"inline text-green-500 text-3xl ml-3"}))}))]}),e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Verification"}),(d=r==null?void 0:r.values)==null?void 0:d.map(l=>e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200",children:c(l==null?void 0:l.according_verification)}))]})]})})})]})})}),e.jsx("div",{className:" font-bold text-xl pb-4 md:py-4 text-gray-400",children:"Floor Verified Details"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsxs("table",{class:"w-full text-sm text-left text-gray-500 darks:text-gray-400",children:[e.jsx("thead",{class:"text-gray-700 capitalize darks:text-gray-400",children:e.jsxs("tr",{className:"border-b border-gray-200 bg-gray-50",children:[e.jsx("th",{scope:"col",class:"text-md px-6 py-3",children:"Particular"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"Floor No"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"usage Type"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"construction Type"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"occupancy Type"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"builtup area"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"date from"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"date upto"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"no. of rooms"}),e.jsx("th",{scope:"col",class:"text-md px-6 py-3 border-l border-l-gray-200",children:"no. of toilets"})]})}),e.jsx("tbody",{children:(I=s==null?void 0:s.floorCom)==null?void 0:I.map(r=>{var t,o,d;return e.jsxs(e.Fragment,{children:[e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Self Assessed"}),(t=r==null?void 0:r.values)==null?void 0:t.map(l=>e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200",children:c(l==null?void 0:l.according_application)}))]}),e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Check"}),(o=r==null?void 0:r.values)==null?void 0:o.map(l=>e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200",children:c((l==null?void 0:l.values)==!1?e.jsx(n,{className:"inline text-red-500 text-5xl"}):e.jsx(p,{className:"inline text-green-500 text-3xl ml-3"}))}))]}),e.jsxs("tr",{className:"border-b border-gray-200 ",children:[e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200 font-semibold text-gray-900",children:"Verification"}),(d=r==null?void 0:r.values)==null?void 0:d.map(l=>e.jsx("td",{className:"px-6 py-3 border-l border-l-gray-200",children:c(l==null?void 0:l.according_verification)}))]})]})})})]})})}),e.jsx("div",{className:" font-bold text-xl pb-4 md:py-4 text-gray-400",children:"Supportive Document"}),e.jsx("div",{className:"w-full bg-white shadow-xl mt-4 mb-6  ",children:e.jsx("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:e.jsx("div",{className:"font-semibold text-md cursor-pointer p-4",children:(O=(P=(M=s==null?void 0:s.userDtl)==null?void 0:M.document)==null?void 0:P.original)==null?void 0:O.data.map((r,t)=>te(r.doc_path)=="pdf"?e.jsx("img",{src:"https://static.vecteezy.com/system/resources/previews/022/597/332/original/3d-file-pdf-icon-illustration-png.png",alt:"supporting document",className:"w-16 h-16",onClick:()=>N(r.doc_path)}):e.jsx("img",{src:r.doc_path,alt:"supporting document",className:"w-16 h-16",onClick:()=>N(r.doc_path)}))})})}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx("button",{className:"bg-green-600 text-white px-2 py-2 rounded-md",onClick:()=>{b(!0),u(!0)},children:"Approve"}),e.jsx("button",{className:"bg-red-600 text-white px-2 py-2 rounded-md",onClick:()=>{b(!0),u(!1)},children:"Reject"}),Q&&e.jsxs("div",{children:[e.jsx("textarea",{placeholder:"Enter your comment",value:h,required:!0,onChange:r=>f(r.target.value)}),e.jsx("button",{className:"bg-blue-600 text-white px-2 py-2 rounded-md",onClick:()=>{W(X?1:0)},children:"Submit"})]})]}),e.jsx(L,{isOpen:D,onAfterClose:w,style:ce,children:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"overflow-auto p-1  shadow-lg rounded-lg text-center bg-gray-500",style:{width:"60vw",height:"70vh"},children:[e.jsx("button",{className:"bg-red-500 rounded-full absolute top-0 right-0 p-1 h-8 w-8 text-white cursor-pointer",onClick:w,children:"X"}),e.jsx("iframe",{src:H,frameborder:"0",className:"w-full h-full ml-20"})]})})})]})}export{xe as default};
