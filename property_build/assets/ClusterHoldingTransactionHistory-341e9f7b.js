import{r as n,a as I,u as P,e as k,q as B,s as b,w as q,au as g,A as j,b as R,j as e,B as $,S as E,W as s,ak as v,al as L,P as D}from"./index-be1e1588.js";import{T as M}from"./TopTabsCluster-190127a2.js";function Z(U){var y,f;const[o,_]=n.useState(),[w,c]=n.useState(!1),[S,V]=n.useState(!1),[r,C]=n.useState(),[Y,A]=n.useState(!0),[Q,m]=n.useState(!1);I("Cluster Holding Payment History");const{id:a}=P(),d=k(),{api_getClusterPropertyPaymentHistory:h}=L(),{api_getClusterBasicDeatilsById:T}=D(),x={api:{api_getTranscationHistory:{method:"get",url:h}},transactionInfo:{title:""},tableColumns:[{Header:"#",Cell:({row:t})=>e.jsx("div",{className:"pr-2",children:t.index+1})},{Header:"Application No.",accessor:"saf_no"},{Header:"Transaction No.",accessor:"tran_no"},{Header:"Payment Mode",accessor:"payment_mode"},{Header:"Transaction Date",accessor:"created_at"},{Header:"Amount",accessor:"amount"}],filters:{applicationNo:!0}};[...x==null?void 0:x.tableColumns];const z=B({fromDate:b().required("Select from date"),toDate:b().required("Select to date")}),p=q({initialValues:{fromDate:g(new Date).format("yy-MM-DD"),toDate:g(new Date).format("yy-MM-DD"),consumerCategory:"",consumerType:"",buildingType:"",paymentMode:"",wardNo:"",tcId:""},onSubmit:t=>{A(!1),u(p.values.fromDate,p.values.toDate)},validationSchema:z});n.useEffect(()=>{u()},[]);const u=()=>{m(!1),c(!0);let t={clusterId:a};j.post(h,t,R()).then(function(l){var i;_((i=l==null?void 0:l.data)==null?void 0:i.data),m(!0),c(!1)}).catch(function(l){m(!0),c(!1)})},H=()=>{c(!0);const l={headers:{Authorization:`Bearer ${window.localStorage.getItem("token")}`,Accept:"application/json"}};j.post(`${T}`,{clusterId:a},l).then(function(i){var N;C((N=i==null?void 0:i.data)==null?void 0:N.data),c(!1)}).catch(function(i){c(!1)})};return n.useEffect(()=>{H()},[]),w?e.jsx(e.Fragment,{children:e.jsx($,{})}):S?e.jsx(E,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-ful md:px-10 md:pt-5 mx-auto",children:[(x==null?void 0:x.transactionInfo.title)!="",e.jsx(M,{title:"Cluster Payment History",type:"holding",id:a,safNo:"",active:"payment"}),e.jsx("div",{className:"",children:e.jsx("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-lg p-4",children:e.jsxs("div",{className:"flex space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s(r==null?void 0:r.cluster_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Cluster Name"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s(r==null?void 0:r.cluster_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Cluster Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:s(r==null?void 0:r.authorized_person_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Authorized Person Name"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:s(r==null?void 0:r.mobile_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Mobile No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s(r==null?void 0:r.address)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Address"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s(new Date(r==null?void 0:r.created_at).toLocaleDateString("en-GB"))}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Created At"})]})]})})}),(o==null?void 0:o.length)==0&&e.jsx("div",{className:"text-center mt-10",children:e.jsx("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl ",children:" No Payments Found Yet"})}),(o==null?void 0:o.length)!=0&&e.jsx("div",{className:"mt-10 bg-white shadow-xl  rounded-lg",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-900",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Tansaction No"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Date"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"From Qtr/Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Upto Qtr/Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Action"})]})}),e.jsxs("tbody",{className:"text-sm",children:[(y=o==null?void 0:o.Property)==null?void 0:y.map((t,l)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(t==null?void 0:t.tran_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(t==null?void 0:t.payment_mode)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(t==null?void 0:t.tran_date)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s(t==null?void 0:t.from_qtr),"|",s(t==null?void 0:t.from_fyear)]}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s(t==null?void 0:t.to_qtr),"|",s(t==null?void 0:t.to_fyear)]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:v(parseFloat(t==null?void 0:t.amount)).toLocaleString("en-IN",{style:"currency",currency:"INR"})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("button",{onClick:()=>d(`/paymentReceipt/${encodeURIComponent(t==null?void 0:t.tran_no)}/cluster-holding`),type:"button",className:"cypress_owner_add_update px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]})),(f=o==null?void 0:o.Saf)==null?void 0:f.map((t,l)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:l+1}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s(t==null?void 0:t.tran_no),e.jsx("span",{className:"bg-indigo-500 text-white text-xs px-2 rounded-sm ml-2",children:"SAF"})]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(t==null?void 0:t.payment_mode)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(t==null?void 0:t.tran_date)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s(t==null?void 0:t.from_qtr),"|",s(t==null?void 0:t.from_fyear)]}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s(t==null?void 0:t.to_qtr),"|",s(t==null?void 0:t.to_fyear)]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:v(parseFloat(t==null?void 0:t.amount)).toLocaleString("en-IN",{style:"currency",currency:"INR"})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("button",{onClick:()=>d(`/paymentReceipt/${encodeURIComponent(t==null?void 0:t.tran_no)}/cluster-saf`),type:"button",className:"cypress_owner_add_update px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]}))]})]})}),e.jsx("div",{className:"w-full h-40"})]})})}export{Z as default};
