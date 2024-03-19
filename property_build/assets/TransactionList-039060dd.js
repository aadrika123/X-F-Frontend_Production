import{a as H,r as n,j as e,at as S,o as k,U,au as Q,W as o,ac as T,i as A,Q as c,A as C,b as G,a7 as J,P as K}from"./index-025cc29f.js";const X=()=>{H("Deactivate Transaction");const{searchTransaction:_,tranDeactivate:M}=K(),l=n.useRef(),[r,R]=n.useState(null),[h,D]=n.useState(""),[u,E]=n.useState(""),[a,F]=n.useState(null),[f,L]=n.useState(null),[j,O]=n.useState(""),[N,b]=n.useState(!1),[W,v]=n.useState(!1),[q,i]=n.useState(!1),[I,P]=n.useState(""),d=(s,t)=>{console.log(s,t),i(s),P(t)},y=()=>{if(h==""){c.info("Enter transaction no.");return}if(u==""){c.info("Select Module Name.");return}v(!0);let s={transactionNo:h,tranType:u};C.post(_,s,G()).then(t=>{var x,p,m,w;(x=t==null?void 0:t.data)!=null&&x.status?R((p=t==null?void 0:t.data)==null?void 0:p.data):(d(!0,(m=t==null?void 0:t.data)==null?void 0:m.message),c.error((w=t==null?void 0:t.data)==null?void 0:w.message)),console.log("::::::Response Search::::::",t)}).catch(t=>{l.current.close(),d(!0,"Oops! Something went wrong."),c.error("Oops! Something went wrong."),console.log("::::::Error Search::::::",t)}).finally(()=>{v(!1),i(!1)})},z=s=>{F(s),l.current.showModal()},B=()=>{if(f==null){d(!0,"Upload Document");return}if(j==""){d(!0,"Enter remarks");return}b(!0);let s=new FormData;s.append("id",a==null?void 0:a.transaction_id),s.append("applicationId",a==null?void 0:a.application_id),s.append("moduleId",a==null?void 0:a.moduleid),s.append("document",f),s.append("remarks",j),C.post(M,s,J()).then(t=>{var x,p,m;(x=t==null?void 0:t.data)!=null&&x.status?(c.success("Deactivated Successfully !!!"),y()):(l.current.close(),d(!0,(p=t==null?void 0:t.data)==null?void 0:p.message),c.error((m=t==null?void 0:t.data)==null?void 0:m.message)),l.current.close(),console.log("::::::Response Deactivation::::::",t)}).catch(t=>{l.current.close(),d(!0,"Oops! Something went wrong."),c.error("Oops! Something went wrong."),console.log("::::::Error Deactivation::::::",t)}).finally(()=>{b(!1),i(!1)})};let g=["Type","Ward No.","Application No.","Tran. No.","Tran. Date","Tran. Mode","Cheque/DD No.","Bank Name","Amount","Status","Action"];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-4 bg-white shadow-md rounded-md ",children:[e.jsx("h1",{className:"text-xl w-full font-bold px-4 pt-4 text-gray-700",children:"Deactivate Transaction"}),e.jsxs("div",{className:"flex flex-wrap flex-row items-end justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-4",children:[e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsxs("div",{className:"col-span-12 md:col-span-6 font-semibold",children:["Module Name",e.jsx("span",{className:"text-red-500 text-xs",children:"*"})]}),e.jsxs("select",{value:u,name:"selectedModuleOption",onChange:s=>E(s.target.value),className:S,children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"Property",children:"Property"}),e.jsx("option",{value:"Water",children:"Water"}),e.jsx("option",{value:"Trade",children:"Trade"})]})]}),e.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[e.jsxs("div",{className:"col-span-12 md:col-span-6 font-semibold",children:["Transaction No.",e.jsx("span",{className:"text-red-500 text-xs",children:"*"})]}),e.jsx("div",{className:"col-span-12 md:col-span-6",children:e.jsx("input",{type:"text",value:h,name:"tranNo",onChange:s=>D(s.target.value),id:"",className:S})})]}),e.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-center mb-1",children:W?e.jsx(k,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0}):e.jsxs("button",{onClick:y,className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-400 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",e.jsx("span",{className:"mr-2",children:e.jsx(U,{})}),"Search"]})}),e.jsx("div",{className:"flex flex-col w-full md:w-[20%]",children:e.jsx(Q,{to:"/deactivate-transaction-details",children:e.jsx("button",{className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-400 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:"Deactivated List "})})})]})]}),e.jsx("dialog",{ref:l,className:"relative h-max w-max rounded-sm drop-shadow-lg overflow-x-hidden focus:outline-none",children:e.jsxs("div",{className:"bg-white w-max h-max relative",children:[!N&&e.jsx("button",{type:"button",onClick:()=>l.current.close(),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-red-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-2 md:p-6 text-center text-sm flex flex-col gap-y-2 flex-wrap",children:[e.jsxs("h1",{className:"w-full text-base md:text-lg text-indigo-400 font-semibold border-b pb-1 mb-2",children:["Transaction No.: ",e.jsx("br",{className:"md:hidden block"})," ",a==null?void 0:a.transaction_no]}),e.jsxs("div",{className:"grid grid-cols-12 text-start text-sm mb-2 gap-2",children:[e.jsxs("div",{className:"grid grid-cols-12 col-span-12 md:col-span-6",children:[e.jsx("div",{className:"col-span-12 md:col-span-6",children:"Type :"}),e.jsx("div",{className:"col-span-12 md:col-span-6 font-semibold",children:o(a==null?void 0:a.module_name)})]}),e.jsxs("div",{className:"grid grid-cols-12 col-span-12 md:col-span-6",children:[e.jsx("div",{className:"col-span-12 md:col-span-6",children:"Application No. :"}),e.jsx("div",{className:"col-span-12 md:col-span-6 font-semibold",children:o(a==null?void 0:a.application_no)})]}),e.jsxs("div",{className:"grid grid-cols-12 col-span-12 md:col-span-6",children:[e.jsx("div",{className:"col-span-12 md:col-span-6",children:"Transaction Date. :"}),e.jsx("div",{className:"col-span-12 md:col-span-6 font-semibold",children:T(a==null?void 0:a.tran_date)})]}),e.jsxs("div",{className:"grid grid-cols-12 col-span-12 md:col-span-6",children:[e.jsx("div",{className:"col-span-12 md:col-span-6",children:"Amount :"}),e.jsx("div",{className:"col-span-12 md:col-span-6 font-semibold",children:A(a==null?void 0:a.amount)})]})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center",children:[e.jsxs("label",{className:"col-span-12 md:col-span-6 text-start",htmlFor:"checkNo",children:["Required Document ",e.jsx("span",{className:"text-red-500 text-xs",children:"*"})," : "]}),e.jsx("input",{className:"col-span-12 md:col-span-6 border focus:outline-none focus:shadow-lg shadow-md px-2 py-1",onChange:s=>(i(!1),L(s.target.files[0])),type:"file",name:"document",id:"",accept:".jpg,.jpeg,.png,.pdf"})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center",children:[e.jsxs("label",{className:"col-span-12 md:col-span-6 text-start",htmlFor:"checkNo",children:["Remarks ",e.jsx("span",{className:"text-red-500 text-xs",children:"*"})," : "]}),e.jsx("input",{className:"col-span-12 md:col-span-6 border focus:outline-none focus:shadow-lg shadow-md px-2 py-1",onChange:s=>(i(!1),O(s.target.value)),type:"text",name:"remarks",id:""})]}),q&&e.jsxs("div",{className:"bg-red-100 border border-red-400 text-red-700 pl-4 pr-16 py-3 rounded relative mt-2",children:[e.jsx("strong",{className:"font-bold"}),e.jsx("span",{className:"block sm:inline",children:I})]}),e.jsx("div",{className:"w-full flex flex-wrap justify-center gap-2 mt-4",children:N?e.jsx(k,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"submit",className:" px-4 text-sm rounded bg-red-500 hover:bg-red-600 py-1 text-white ",onClick:()=>B(),children:" Deactivate "}),e.jsx("button",{onClick:()=>l.current.close(),className:" px-4 text-sm rounded bg-zinc-400 hover:bg-zinc-500 py-1 text-white ",children:" Close "})]})})]})]})}),Array.isArray(r)&&e.jsx(e.Fragment,{children:(r==null?void 0:r.length)>0?e.jsx("div",{className:"p-4 bg-white shadow-sm rounded-md",children:e.jsxs("table",{className:"min-w-full ",children:[e.jsx("thead",{className:"bg-indigo-50",children:e.jsxs("tr",{className:"font-semibold",children:[e.jsx("th",{scope:"col",className:"px-2 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:"S.No."}),g==null?void 0:g.map(s=>e.jsx("th",{scope:"col",className:"px-2 py-2 border-b border-gray-200 text-gray-800  text-left text-sm",children:s}))]})}),e.jsx("tbody",{className:"bg-white",children:r==null?void 0:r.map((s,t)=>e.jsxs("tr",{className:"bg-white border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:o(s==null?void 0:s.module_name)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:o(s==null?void 0:s.ward_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:o(s==null?void 0:s.application_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:o(s==null?void 0:s.transaction_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:T(s==null?void 0:s.tran_date)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:o(s==null?void 0:s.payment_mode)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:o(s==null?void 0:s.cheque_dd_no)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:o(s==null?void 0:s.bank_name)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:A(s==null?void 0:s.amount)}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:o(s==null?void 0:s.status)=="1"?e.jsx("span",{className:"font-semibold text-green-500",children:"Active"}):e.jsx("span",{className:"font-semibold text-red-500",children:"Deactive"})}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:o(s==null?void 0:s.status)=="1"?e.jsx("span",{className:"border border-red-500 px-2 py-1 text-sm text-red-500 hover:bg-red-500 hover:text-white cursor-pointer",onClick:()=>z(s),children:"Deactivate"}):e.jsx("span",{className:"font-semibold",children:"No Action"})})]}))})]})}):e.jsxs("div",{className:"bg-red-100 border border-red-400 text-red-700 pl-4 pr-16 py-3 text-center rounded relative mt-2",children:[e.jsx("strong",{className:"font-bold"}),e.jsx("span",{className:"block sm:inline",children:"No any transaction found."})]})})]})};export{X as default};
