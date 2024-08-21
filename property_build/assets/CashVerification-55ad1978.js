import{a as ge,e as ie,R as je,r as d,A as V,b as z,j as e,L as xe,ad as Ne,ag as fe,dC as ve,n as x,i as g,as as pe,aV as we,P as he,Q as ce,q as Ce,s as ke,w as Te,v as Se,a8 as Ae,V as _e}from"./index-48b3dac3.js";const Ee={overlay:{background:"rgba(0, 0, 0, 0.5)",overflowY:"scroll"}};function Pe(s){var ee,ae,se,re,te,le,ne,de,oe;ge("Cash Verification");const I=ie(),{api_verifiedTcCollection:$,api_notVerifiedTcCollection:q,api_verifyTcCollection:O,api_chequeDdUpdate:w}=he(),[Z,U]=je.useState(!1),[r,W]=d.useState(),[F,f]=d.useState(!1);d.useState(!1),d.useState(null);const[H,Y]=d.useState(!1),[j,C]=d.useState([]),[R,Q]=d.useState(!1),[N,k]=d.useState([]),[P,G]=d.useState(!1),[T,S]=d.useState([]),[t,A]=d.useState(null),[o,l]=d.useState(["cash","cheque","dd"]),[c,b]=d.useState([]),[v,p]=d.useState(""),[X,_]=d.useState(!1),ue=d.useRef(),me=d.useRef();d.useEffect(()=>{!s||!s.data||(C([]),k([]),S([]),_(!1),D())},[s==null?void 0:s.data]);const D=()=>{var i,m,B;f(!0);let a;(s==null?void 0:s.reportType)=="1"?a={date:(i=s==null?void 0:s.data)==null?void 0:i.date,userId:(m=s==null?void 0:s.data)==null?void 0:m.id}:a={tranNo:(B=s==null?void 0:s.data)==null?void 0:B.tranNo};let n;(s==null?void 0:s.reportType)=="1"&&(n=q),(s==null?void 0:s.reportType)=="2"&&(n=$),V.post(n,a,z()).then(y=>{var M,h,u;(M=y==null?void 0:y.data)!=null&&M.status?W((h=y==null?void 0:y.data)==null?void 0:h.data):(s==null||s.activateBottomErrorCard(!0,(u=y==null?void 0:y.data)==null?void 0:u.message),E())}).catch(y=>{s==null||s.activateBottomErrorCard(!0,"Some error occured. Please try again later."),E()}).finally(()=>f(!1))};d.useEffect(()=>{s.openAddPopUP>0&&U(!0)},[s==null?void 0:s.openAddPopUP]);function E(){U(!1),b([])}const be=()=>{if((j==null?void 0:j.length)==0&&(N==null?void 0:N.length)==0&&(T==null?void 0:T.length)==0){s==null||s.activateBottomErrorCard(!0,"Select atleast one transaction to verify !!!");return}f(!0);const a={property:j,water:N,trade:T};V.post(O,a,z()).then(n=>{var i,m;(i=n==null?void 0:n.data)!=null&&i.status?(ce.success("Verified Successfully !!!"),s==null||s.refresh()):s==null||s.activateBottomErrorCard(!0,(m=n==null?void 0:n.data)==null?void 0:m.message)}).catch(n=>{s==null||s.activateBottomErrorCard(!0,"Some error occured. Please try again later.")}).finally(()=>{f(!1),E()})},ye=()=>{f(!0);const a={chequeNo:t==null?void 0:t.cheque_dd_no,bankName:t==null?void 0:t.bank_name,id:t==null?void 0:t.id,moduleId:t==null?void 0:t.module_id};V.post(w,a,z()).then(n=>{var i,m;(i=n==null?void 0:n.data)!=null&&i.status?(ce.success("Updated Successfully !!!"),D()):s==null||s.activateBottomErrorCard(!0,(m=n==null?void 0:n.data)==null?void 0:m.message)}).catch(n=>{s==null||s.activateBottomErrorCard(!0,"Some error occured. Please try again later.")}).finally(()=>{f(!1),_(!1)})},L=a=>{var B,y,M;const n=a.target.name,i=a.target.checked,m=a.target.value;if(n=="propertyAll")if(Y(i),i){const h=(B=r==null?void 0:r.property)==null?void 0:B.map(u=>u==null?void 0:u.id);C(h)}else C([]);if(n=="property"){if(i)C(h=>[...h,m]);else if(!i&&H!=!0){let h=j==null?void 0:j.filter(u=>u!=m);C(h)}}if(n=="waterAll")if(Q(i),i){const h=(y=r==null?void 0:r.water)==null?void 0:y.map(u=>u==null?void 0:u.id);k(h)}else k([]);if(n=="water"){if(i)k(h=>[...h,m]);else if(!i&&R!=!0){let h=N==null?void 0:N.filter(u=>u!=m);k(h)}}if(n=="tradeAll")if(G(i),i){const h=(M=r==null?void 0:r.trade)==null?void 0:M.map(u=>u==null?void 0:u.id);S(h)}else S([]);if(n=="trade"){if(i)S(h=>[...h,m]);else if(!i&&T!=!0){let h=P==null?void 0:P.filter(u=>u!=m);S(h)}}},J=a=>a==null?void 0:a.map(i=>i==null?void 0:i.payment_mode),K=a=>{p("edit"),A(a),_(!0)};return d.useEffect(()=>{(o==null?void 0:o.length)==0&&l(["cash","cheque","dd","neft"])},[o]),F?e.jsx(xe,{}):e.jsxs(e.Fragment,{children:[e.jsx(Ne,{autoClose:2e3}),e.jsx(fe,{isOpen:Z,onRequestClose:E,style:Ee,className:"absolute left-1/4 h-screen w-2/3 flex justify-center items-center",children:e.jsxs("div",{className:"w-[90vw] md:w-[80vw]",children:[!X&&e.jsxs("div",{className:"max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl border-2 p-2",children:[e.jsxs("div",{className:"",children:[e.jsx("div",{className:"float-right",children:e.jsxs("div",{onClick:E,className:"hover:bg-gray-100 rounded-full w-5 cursor-pointer mr-3",children:["  ",e.jsx(ve,{size:20})]})}),e.jsx("div",{className:"float-left",children:e.jsx("h1",{className:"mb-3 text-2xl ml-5 font-semibold",children:"Collection Details"})})]}),e.jsx("p",{className:"border-b mt-10 mb-6 mx-5 border-gray-100"}),e.jsxs("div",{className:"grid grid-cols-12 gap-2",children:[e.jsx("div",{className:"col-span-4 ",children:e.jsx("div",{className:" bg-gray-50 shadow-md rounded  p-4",children:e.jsx("table",{className:"w-full",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Collector Name :"}),e.jsxs("td",{className:"font-semibold",children:[x(r==null?void 0:r.collectorName)," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Transaction Date :"}),e.jsxs("td",{className:"font-semibold",children:[x(r==null?void 0:r.date)," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Total Amount :"}),e.jsxs("td",{className:"font-semibold",children:[g(r==null?void 0:r.totalAmount)," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Number of Transaction :"}),e.jsxs("td",{className:"font-semibold",children:[pe(r==null?void 0:r.numberOfTransaction)," "]})]})]})})})}),e.jsx("div",{className:"col-span-8",children:e.jsxs("div",{className:"flex flex-wrap-reverse m-0 gap-2",children:[e.jsxs("div",{className:"bg-gray-50 shadow-md  p-6 m-2 rounded",children:[e.jsx("p",{className:"font-semibold text-3xl",children:g(r==null?void 0:r.Cash)}),e.jsx("p",{className:"text-lg font-semibold",children:"Cash"})]}),e.jsxs("div",{className:"bg-gray-50 shadow-md  p-6 m-2 rounded",children:[e.jsx("p",{className:"font-semibold text-3xl",children:g(r==null?void 0:r.Cheque)}),e.jsx("p",{className:"text-lg font-semibold",children:"Cheque"})]}),e.jsxs("div",{className:"bg-gray-50 shadow-md  p-6 m-2 rounded",children:[e.jsx("p",{className:"font-semibold text-3xl",children:g(r==null?void 0:r.DD)}),e.jsx("p",{className:"text-lg font-semibold",children:"DD"})]}),e.jsxs("div",{className:"bg-gray-50 shadow-md  p-6 m-2 rounded",children:[e.jsx("p",{className:"font-semibold text-3xl",children:g(r==null?void 0:r.Neft)}),e.jsx("p",{className:"text-lg font-semibold",children:"NEFT"})]})]})})]}),e.jsx("p",{className:"border-b mt-5 mb-4 mx-5 border-gray-100"}),e.jsxs("div",{className:"flex gap-2 mb-2 ",children:[e.jsx("button",{className:`${(o==null?void 0:o.length)==1&&o.some(a=>a=="cash")?"shadow-lg bg-indigo-500 text-white":"shadow-none"} px-4 py-1 text-sm border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white`,onClick:()=>l(["cash"]),children:"Cash"}),e.jsx("button",{className:`${(o==null?void 0:o.length)==1&&o.some(a=>a=="cheque")?"shadow-lg bg-indigo-500 text-white ":"shadow-none"} px-4 py-1 text-sm border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white`,onClick:()=>l(["cheque"]),children:"Cheque"}),e.jsx("button",{className:`${(o==null?void 0:o.length)==1&&o.some(a=>a=="dd")?"shadow-lg bg-indigo-500 text-white ":"shadow-none"} px-4 py-1 text-sm border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white`,onClick:()=>l(["dd"]),children:"DD"}),e.jsx("button",{className:`${(o==null?void 0:o.length)==1&&o.some(a=>a=="neft")?"shadow-lg bg-indigo-500 text-white ":"shadow-none"} px-4 py-1 text-sm border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white`,onClick:()=>l(["neft"]),children:"NEFT"}),e.jsx("button",{className:`${o.length==4?"shadow-lg bg-indigo-500 text-white":"shadow-none"} px-4 py-1 text-sm border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white`,onClick:()=>l(["cash","cheque","dd","neft"]),children:"All"})]}),((ee=r==null?void 0:r.property)==null?void 0:ee.length)>0&&e.jsxs("div",{className:" overflow-auto",children:[e.jsxs("p",{className:"uppercase font-bold",children:[" ",(s==null?void 0:s.reportType)=="1"&&e.jsx("input",{type:"checkbox",name:"propertyAll",id:"",onChange:L})," Property Payment"]}),e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{className:"bg-gray-100 border-t border-l border-r text-left",children:e.jsxs("tr",{children:[(s==null?void 0:s.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"#"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Transaction No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Application No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Check/DD No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Bank Name"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Paid Amount"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Date"}),(s==null?void 0:s.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r",children:"Action"})]})}),e.jsx("tbody",{children:(se=(ae=r==null?void 0:r.property)==null?void 0:ae.filter(a=>J(r==null?void 0:r.property).some(n=>o.includes(n.toLowerCase()))))==null?void 0:se.map((a,n)=>e.jsxs("tr",{children:[(s==null?void 0:s.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:e.jsx("input",{type:"checkbox",name:"property",id:"",checked:H?!0:null,value:a==null?void 0:a.id,onChange:L})}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:n+1}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.tran_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.payment_mode)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.application_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.cheque_dd_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.bank_name)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:g(a==null?void 0:a.amount)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.tran_date)}),(s==null?void 0:s.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:(a==null?void 0:a.payment_mode)!="CASH"?e.jsx("button",{className:"px-4 py-1 border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white",onClick:()=>K(a),children:"Edit"}):"No Action"})]},n))})]})]}),e.jsx("p",{className:"py-2"}),((re=r==null?void 0:r.water)==null?void 0:re.length)>0&&e.jsxs("div",{children:[e.jsxs("p",{className:"uppercase font-bold",children:[(s==null?void 0:s.reportType)=="1"&&e.jsx("input",{type:"checkbox",name:"waterAll",id:"",onChange:L})," Water Payment"]}),e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{className:"bg-gray-100 border-t border-l border-r text-left",children:e.jsxs("tr",{children:[(s==null?void 0:s.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"#"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Transaction No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Application No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Check/DD No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Bank Name"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Paid Amount"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Date"}),(s==null?void 0:s.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r",children:"Action"})]})}),e.jsx("tbody",{children:(le=(te=r==null?void 0:r.water)==null?void 0:te.filter(()=>J(r==null?void 0:r.water).some(a=>o.includes(a.toLowerCase()))))==null?void 0:le.map((a,n)=>e.jsxs("tr",{children:[(s==null?void 0:s.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:e.jsx("input",{type:"checkbox",name:"water",id:"",checked:R?!0:null,value:a==null?void 0:a.id,onChange:L})}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:n+1}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.tran_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.payment_mode)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.application_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.cheque_dd_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.bank_name)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:g(a==null?void 0:a.amount)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.tran_date)}),(s==null?void 0:s.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:(a==null?void 0:a.payment_mode)!="CASH"?e.jsx("button",{className:"px-4 py-1 border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white",onClick:()=>K(a),children:"Edit"}):"No Action"})]},n))})]})]}),e.jsx("p",{className:"py-2"}),((ne=r==null?void 0:r.trade)==null?void 0:ne.length)>0&&e.jsxs("div",{children:[e.jsxs("p",{className:"uppercase font-bold",children:[(s==null?void 0:s.reportType)=="1"&&e.jsx("input",{type:"checkbox",name:"tradeAll",id:"",onChange:L})," Trade Payment"]}),e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{className:"bg-gray-100 border-t border-l border-r text-left",children:e.jsxs("tr",{children:[(s==null?void 0:s.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"#"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Transaction No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Application No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Check/DD No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Bank Name"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Paid Amount"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Date"}),(s==null?void 0:s.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r",children:"Action"})]})}),e.jsx("tbody",{children:(oe=(de=r==null?void 0:r.trade)==null?void 0:de.filter(a=>J(r==null?void 0:r.trade).some(n=>o.includes(n.toLowerCase()))))==null?void 0:oe.map((a,n)=>e.jsxs("tr",{children:[(s==null?void 0:s.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:e.jsx("input",{type:"checkbox",name:"trade",id:"",checked:P?!0:null,value:a==null?void 0:a.id,onChange:L})}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:n+1}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.tran_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.payment_mode)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.application_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.cheque_dd_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.bank_name)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:g(a==null?void 0:a.amount)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.tran_date)}),(s==null?void 0:s.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:(a==null?void 0:a.payment_mode)!="CASH"?e.jsx("button",{className:"px-4 py-1 border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white",onClick:()=>K(a),children:"Edit"}):"No Action"})]},n))})]})]}),e.jsxs("div",{className:"w-full flex justify-center gap-4 mt-2",children:[(s==null?void 0:s.reportType)=="1"?e.jsx("button",{className:" text-sm px-4 rounded bg-green-500 hover:bg-green-600 py-1 text-white sm:w-auto",onClick:()=>(p("verify"),_(!0)),children:" Verify "}):e.jsx("button",{className:" text-sm px-4 rounded bg-indigo-500 hover:bg-indigo-600 py-1 text-white sm:w-auto",onClick:()=>I(`/cashVerificationReceipt/${encodeURIComponent(r==null?void 0:r.tranNo)}`),children:" Print "}),e.jsx("button",{onClick:E,className:"w-full text-sm px-4 rounded bg-red-500 hover:bg-red-600 py-1 text-white sm:w-auto",children:" Close "})]})]}),X&&e.jsx("div",{className:"my-5",children:e.jsx("div",{className:"flex justify-center pt-3 space-x-3",children:(s==null?void 0:s.reportType)=="1"&&e.jsxs("div",{style:{zIndex:999},class:"h-screen w-screen flex justify-center items-center backdrop-blur-sm",children:[v=="verify"&&e.jsxs("div",{className:"bg-white w-max h-max rounded-md shadow-lg relative",children:[e.jsx("button",{type:"button",onClick:()=>_(!1),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center",children:[e.jsxs("div",{className:"w-full flex h-10",children:[" ",e.jsx("span",{className:"mx-auto",children:e.jsx(we,{size:30})})]}),e.jsx("h3",{class:"mb-5 text-lg font-normal text-gray-500 darks:text-gray-400",children:"Are you sure you ?"}),e.jsx("button",{type:"button",className:"cypress_button_logout text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 darks:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",onClick:()=>(be(),E()),children:"Yes, I'm sure"})]})]}),v=="edit"&&e.jsxs("div",{className:"bg-white w-max h-max rounded-md shadow-lg relative",children:[e.jsx("button",{type:"button",onClick:()=>_(!1),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center flex flex-col gap-y-2 flex-wrap",children:[e.jsx("h1",{className:"w-full text-lg text-indigo-400 font-semibold border-b pb-1 mb-2",children:"Update Data"}),e.jsxs("div",{className:"grid grid-cols-12 items-center",children:[e.jsx("label",{className:"col-span-6 text-start",htmlFor:"checkNo",children:"Cheque/DD No.: "}),e.jsx("input",{ref:ue,className:"col-span-6 border focus:outline-none focus:shadow-lg shadow-md px-2 py-1",value:t==null?void 0:t.cheque_dd_no,onChange:a=>A({...t,cheque_dd_no:a.target.value}),type:"text",name:"chequeNo",id:""})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center",children:[e.jsx("label",{className:"col-span-6 text-start",htmlFor:"checkNo",children:"Bank Name: "}),e.jsx("input",{ref:me,className:"col-span-6 border focus:outline-none focus:shadow-lg shadow-md px-2 py-1",value:t==null?void 0:t.bank_name,onChange:a=>A({...t,bank_name:a.target.value}),type:"text",name:"bankName",id:""})]}),e.jsxs("div",{className:"w-full flex justify-center gap-2 mt-2",children:[e.jsx("button",{className:" px-4 text-sm rounded bg-green-500 hover:bg-green-600 py-1 text-white ",onClick:()=>ye(),children:" Update "}),e.jsx("button",{onClick:()=>_(!1),className:" px-4 text-sm rounded bg-indigo-400 hover:bg-indigo-500 py-1 text-white ",children:" Close "})]})]})]})]})})})]})})]})}const qe=s=>{const[I,$]=d.useState(0),[q,O]=d.useState(),[w,Z]=d.useState(),[U,r]=d.useState();d.useState("");const[W,F]=d.useState(!1),[f,H]=d.useState(!1),[Y,j]=d.useState(null),[C,R]=d.useState(""),Q=ie(),{api_listofEmployees:N,api_listUnverifiedCashVerification:k,api_listVerifiedCashVerification:P}=he();d.useEffect(()=>{A()},[]);const G=l=>{r(l),$(c=>c+1)};d.useEffect(()=>{V.post(N,{},z()).then(l=>{O(l.data.data)}).catch(l=>{})},[]);const T=[{Header:"Sl.",Cell:({row:l})=>e.jsxs("div",{className:"px-2 font-semibold",children:[l.index+1,"."]})},{Header:"EmployeeName",accessor:"user_name",Cell:({cell:l})=>{var c;return e.jsxs("span",{children:["  ",x((c=l.row.original)==null?void 0:c.user_name)]})}},{Header:"Property",accessor:"property",Cell:({cell:l})=>{var c;return e.jsxs("span",{children:[" ",g((c=l.row.original)==null?void 0:c.property)]})}},{Header:"Water",accessor:"water",Cell:({cell:l})=>{var c;return e.jsxs("span",{children:[" ",g((c=l.row.original)==null?void 0:c.water)]})}},{Header:"Trade",accessor:"trade",Cell:({cell:l})=>{var c;return e.jsxs("span",{children:[" ",g((c=l.row.original)==null?void 0:c.trade)]})}},{Header:"Total Amount",accessor:"total",Cell:({cell:l})=>{var c;return e.jsxs("span",{children:[" ",g((c=l.row.original)==null?void 0:c.total)]})}},{Header:"Paid Date",accessor:"date",Cell:({cell:l})=>{var c;return e.jsxs("span",{children:["  ",x((c=l.row.original)==null?void 0:c.date)]})}},{Header:"Action",Cell:({cell:l})=>{var c,b;return e.jsxs("div",{className:"flex gap-2 w-full flex-wrap",children:[e.jsx("button",{onClick:()=>G(l.row.original),className:"bg-blue-600 hover:bg-blue-400 py-1 px-3 text-white rounded-sm",children:"View"}),((b=(c=l==null?void 0:l.row)==null?void 0:c.original)==null?void 0:b.verifyStatus)==!0&&e.jsx("button",{onClick:()=>{var v,p;return Q(`/cashVerificationReceipt/${encodeURIComponent((p=(v=l==null?void 0:l.row)==null?void 0:v.original)==null?void 0:p.tranNo)}`)},className:"bg-sky-600 hover:bg-sky-400 py-1 px-3 text-white rounded-sm",children:"Print"})]})}}],S=Ce({collectionDate:ke().required("Select Date")}),t=Te({initialValues:{empName:"",collectionDate:Se(),reportType:"1",zone:""},enableReinitialize:!0,onSubmit:l=>{A()},validationSchema:S}),A=()=>{let l;t.values.reportType=="1"&&(l=k),t.values.reportType=="2"&&(l=P),R(t.values.reportType),F(!0);const c={date:t.values.collectionDate,id:t.values.empName,zone:t.values.zone};V.post(l,c,z()).then(b=>{var v,p;(v=b==null?void 0:b.data)!=null&&v.status?Z(b.data.data):o(!0,(p=b==null?void 0:b.data)==null?void 0:p.message)}).catch(b=>{o(!0,"Error occured while fetching cash verification list. Please try again later.")}).finally(()=>{F(!1)})},o=(l,c)=>{j(c),H(l)};return e.jsxs(e.Fragment,{children:[W&&e.jsx(xe,{}),f&&e.jsx(Ae,{activateBottomErrorCard:o,errorTitle:Y}),e.jsx(Pe,{openAddPopUP:I,data:U,refresh:()=>A(),activateBottomErrorCard:o,reportType:C}),e.jsxs("div",{className:"m-2",children:[e.jsx("div",{className:"shadow-md  rounded bg-indigo-100 px-4",children:e.jsx("form",{onSubmit:t.handleSubmit,onChange:t.handleChange,children:e.jsxs("div",{className:"px-3 py-3",children:[e.jsx("div",{className:"text-left",children:e.jsx("h1",{className:"mb-3 text-2xl font-semibold",children:"Cash Verification"})}),e.jsxs("div",{className:"grid grid-cols-12 gap-4 items-end",children:[e.jsxs("div",{className:"col-span-10 md:col-span-2",children:[e.jsxs("p",{className:"py-1 text-base font-semibold",children:["Select Zone ",e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsxs("select",{onChange:t.handleChange,className:"w-full rounded border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1",placeholder:"Enter New Taluka",type:"text",name:"zone",children:[e.jsx("option",{value:"",children:"All"}),e.jsx("option",{value:"1",children:"A-East Zone"}),e.jsx("option",{value:"2",children:"B-West Zone"}),e.jsx("option",{value:"3",children:"C-North Zone"}),e.jsx("option",{value:"4",children:"D-South Zone"})]}),e.jsxs("p",{className:"text-red-500 text-xs font-semibold absolute",children:[" ",t.touched.zone&&t.errors.zone?t.errors.zone:null]})]}),e.jsxs("div",{className:"col-span-10 md:col-span-2",children:[e.jsxs("p",{className:"py-1 text-base font-semibold",children:["Select Date ",e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsx("input",{onChange:t.handleChange,name:"collectionDate",className:"w-full rounded border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1",type:"date",value:t.values.collectionDate}),e.jsxs("p",{className:"text-red-500 text-xs font-semibold absolute",children:[" ",t.touched.collectionDate&&t.errors.collectionDate?t.errors.collectionDate:null]})]}),e.jsxs("div",{className:"col-span-10 md:col-span-2",children:[e.jsxs("p",{className:"py-1 text-base font-semibold",children:["Select Employee ",e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsxs("select",{onChange:t.handleChange,className:"w-full rounded border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1",placeholder:"Enter New Taluka",type:"text",name:"empName",children:[e.jsx("option",{value:"",children:"All"}),q==null?void 0:q.map((l,c)=>e.jsx("option",{value:l.id,children:l.user_name}))]}),e.jsxs("p",{className:"text-red-500 text-xs font-semibold absolute",children:[" ",t.touched.empName&&t.errors.empName?t.errors.empName:null]})]}),e.jsxs("div",{className:"col-span-10 md:col-span-2",children:[e.jsxs("p",{className:"py-1 text-base font-semibold",children:["Report Type ",e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsxs("select",{value:t.values.reportType,className:"w-full rounded border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1",placeholder:"Enter New Taluka",type:"text",name:"reportType",children:[e.jsx("option",{value:"1",children:"Not Verified"}),e.jsx("option",{value:"2",children:"Verified"})]})]}),e.jsx("div",{className:"col-span-10 md:col-span-2 flex items-end justify-end md:mt-0 mt-6",children:e.jsx("button",{type:"submit",class:"w-full py-2 px-4 inline-block text-center rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",children:"Search"})})]})]})})}),e.jsx("p",{className:" mx-10 py-5"}),e.jsx("div",{className:"my-4",children:(w==null?void 0:w.length)==0?e.jsx("p",{className:"text-center font-semibold text-xl -mt-8 text-red-500",children:"No Data Found !"}):e.jsxs(e.Fragment,{children:[w&&e.jsx("div",{className:"bg-white p-4",children:e.jsx(_e,{columns:T,dataList:w})})," "]})})]})]})};export{qe as default};
