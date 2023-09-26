import{r as n,k as P,bv as k,a as B,l as q,m as N,o as E,be as j,A as v,N as $,j as e,B as L,S as D,bs as s,cr as w,bb as M,bP as R}from"./index-9ed6f04c.js";import{T as U}from"./TopTabsCluster-b9c19be6.js";function K(V){var y,u;const[l,_]=n.useState(),[S,x]=n.useState(!1),[C,Y]=n.useState(!1),[r,A]=n.useState(),[Q,T]=n.useState(!0),[G,a]=n.useState(!1);P("Cluster Holding Payment History");const{id:m}=k(),d=B(),{api_getClusterPropertyPaymentHistory:h}=M(),{api_getClusterBasicDeatilsById:z}=R(),c={api:{api_getTranscationHistory:{method:"get",url:h}},transactionInfo:{title:""},tableColumns:[{Header:"#",Cell:({row:t})=>e.jsx("div",{className:"pr-2",children:t.index+1})},{Header:"Application No.",accessor:"saf_no"},{Header:"Transaction No.",accessor:"tran_no"},{Header:"Payment Mode",accessor:"payment_mode"},{Header:"Transaction Date",accessor:"created_at"},{Header:"Amount",accessor:"amount"}],filters:{applicationNo:!0}};console.log("passed api at inbox list hello bellow...",c),console.log("passed api at inbox col...",c==null?void 0:c.tableColumns),[...c==null?void 0:c.tableColumns];const H=q({fromDate:N().required("Select from date"),toDate:N().required("Select to date")}),p=E({initialValues:{fromDate:j(new Date).format("yy-MM-DD"),toDate:j(new Date).format("yy-MM-DD"),consumerCategory:"",consumerType:"",buildingType:"",paymentMode:"",wardNo:"",tcId:""},onSubmit:t=>{T(!1),f(p.values.fromDate,p.values.toDate)},validationSchema:H});n.useEffect(()=>{console.log("fethcing in useEffect"),f()},[]);const f=()=>{a(!1),x(!0);let t={clusterId:m};console.log("before fetch factory data"),v.post(h,t,$()).then(function(o){var i;console.log("all transcation list at holding specific----- ",o==null?void 0:o.data),_((i=o==null?void 0:o.data)==null?void 0:i.data),a(!0),x(!1)}).catch(function(o){console.log("error at transactions fetch ",o),a(!0),x(!1)})},I=()=>{x(!0);const o={headers:{Authorization:`Bearer ${window.localStorage.getItem("token")}`,Accept:"application/json"}};v.post(`${z}`,{clusterId:m},o).then(function(i){var b,g;console.log("view prop prop full details of cluster...",(b=i==null?void 0:i.data)==null?void 0:b.data),A((g=i==null?void 0:i.data)==null?void 0:g.data),x(!1)}).catch(function(i){console.log("==2 details by id error...",i),x(!1)})};return n.useEffect(()=>{I()},[]),S?e.jsx(e.Fragment,{children:e.jsx(L,{})}):C?e.jsx(D,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-ful md:px-10 md:pt-5 mx-auto",children:[(c==null?void 0:c.transactionInfo.title)!="",e.jsx(U,{title:"Cluster Payment History",type:"holding",id:m,safNo:"",active:"payment"}),e.jsx("div",{className:"",children:e.jsx("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-lg p-4",children:e.jsxs("div",{className:"flex space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s(r==null?void 0:r.cluster_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Cluster Name"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s(r==null?void 0:r.cluster_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Cluster Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:s(r==null?void 0:r.authorized_person_name)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Authorized Person Name"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-sm",children:s(r==null?void 0:r.mobile_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Mobile No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s(r==null?void 0:r.address)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Address"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:s(new Date(r==null?void 0:r.created_at).toLocaleDateString("en-GB"))}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Created At"})]})]})})}),(l==null?void 0:l.length)==0&&e.jsx("div",{className:"text-center mt-10",children:e.jsx("span",{className:"text-red-600 font-bold text-lg px-4 py-2 border border-red-500  shadow-xl ",children:" No Payments Found Yet"})}),(l==null?void 0:l.length)!=0&&e.jsx("div",{className:"mt-10 bg-white shadow-xl  rounded-lg",children:e.jsxs("table",{className:"min-w-full leading-normal mt-2",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-900",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Tansaction No"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Date"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"From Qtr/Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Upto Qtr/Year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:"Action"})]})}),e.jsxs("tbody",{className:"text-sm",children:[(y=l==null?void 0:l.Property)==null?void 0:y.map((t,o)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:o+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(t==null?void 0:t.tran_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(t==null?void 0:t.payment_mode)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(t==null?void 0:t.tran_date)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s(t==null?void 0:t.from_qtr),"|",s(t==null?void 0:t.from_fyear)]}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s(t==null?void 0:t.to_qtr),"|",s(t==null?void 0:t.to_fyear)]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:w(parseFloat(t==null?void 0:t.amount)).toLocaleString("en-IN",{style:"currency",currency:"INR"})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("button",{onClick:()=>d(`/paymentReceipt/${encodeURIComponent(t==null?void 0:t.tran_no)}/cluster-holding`),type:"button",className:"cypress_owner_add_update px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]})),(u=l==null?void 0:l.Saf)==null?void 0:u.map((t,o)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:o+1}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s(t==null?void 0:t.tran_no),e.jsx("span",{className:"bg-indigo-500 text-white text-xs px-2 rounded-sm ml-2",children:"SAF"})]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(t==null?void 0:t.payment_mode)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:s(t==null?void 0:t.tran_date)}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s(t==null?void 0:t.from_qtr),"|",s(t==null?void 0:t.from_fyear)]}),e.jsxs("td",{className:"px-2 py-2 text-sm text-left",children:[s(t==null?void 0:t.to_qtr),"|",s(t==null?void 0:t.to_fyear)]}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:w(parseFloat(t==null?void 0:t.amount)).toLocaleString("en-IN",{style:"currency",currency:"INR"})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:e.jsx("button",{onClick:()=>d(`/paymentReceipt/${encodeURIComponent(t==null?void 0:t.tran_no)}/cluster-saf`),type:"button",className:"cypress_owner_add_update px-2 py-2.5 border border-indigo-500 text-indigo-500 font-medium text-xs leading-tight capitalize rounded shadow-xl hover:bg-indigo-700 hover:text-white hover:shadow-lg  active:shadow-lg transition duration-150 ease-in-out cursor-pointer",children:"View Receipt"})})]}))]})]})}),e.jsx("div",{className:"w-full h-40"})]})})}export{K as default};
