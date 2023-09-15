import{k as ge,a as ie,R as je,r as d,A as B,N as U,j as e,T as xe,Q as Ne,g as fe,cD as ve,n as i,f as g,bg as we,F as pe,bP as he,Y as ce,l as Ce,m as ke,o as Te,a$ as Ae,p as Se,U as _e}from"./index-408dfad7.js";const Ee={overlay:{background:"rgba(0, 0, 0, 0.5)",overflowY:"scroll"}};function Pe(r){var ee,ae,re,se,te,le,ne,de,oe;ge("Cash Verification");const O=ie(),{api_verifiedTcCollection:$,api_notVerifiedTcCollection:V,api_verifyTcCollection:z,api_chequeDdUpdate:p}=he(),[W,H]=je.useState(!1),[s,Y]=d.useState(),[R,f]=d.useState(!1);d.useState(!1),d.useState(null);const[F,Q]=d.useState(!1),[j,C]=d.useState([]),[I,Z]=d.useState(!1),[N,k]=d.useState([]),[P,G]=d.useState(!1),[T,A]=d.useState([]),[n,S]=d.useState(null),[u,t]=d.useState(["cash","cheque","dd"]),[o,m]=d.useState([]),[v,w]=d.useState(""),[X,_]=d.useState(!1),ue=d.useRef(),me=d.useRef();console.log(r==null?void 0:r.reportType),d.useEffect(()=>{!r||!r.data||(C([]),k([]),A([]),_(!1),D())},[r==null?void 0:r.data]),console.log(r==null?void 0:r.data);const D=()=>{var c,b,q;f(!0);let a;(r==null?void 0:r.reportType)=="1"?a={date:(c=r==null?void 0:r.data)==null?void 0:c.date,userId:(b=r==null?void 0:r.data)==null?void 0:b.id}:a={tranNo:(q=r==null?void 0:r.data)==null?void 0:q.tranNo};let l;(r==null?void 0:r.reportType)=="1"&&(l=V),(r==null?void 0:r.reportType)=="2"&&(l=$),B.post(l,a,U()).then(y=>{var M,x,h;console.log("response of te data in modal",y),(M=y==null?void 0:y.data)!=null&&M.status?Y((x=y==null?void 0:y.data)==null?void 0:x.data):(r==null||r.activateBottomErrorCard(!0,(h=y==null?void 0:y.data)==null?void 0:h.message),E())}).catch(y=>{console.log("Error while tc list data in modal",y),r==null||r.activateBottomErrorCard(!0,"Some error occured. Please try again later."),E()}).finally(()=>f(!1))};console.log("getting data in cash verification modal => ",r==null?void 0:r.data),d.useEffect(()=>{r.openAddPopUP>0&&H(!0)},[r==null?void 0:r.openAddPopUP]);function E(){H(!1),m([])}const be=()=>{if((j==null?void 0:j.length)==0&&(N==null?void 0:N.length)==0&&(T==null?void 0:T.length)==0){r==null||r.activateBottomErrorCard(!0,"Select atleast one transaction to verify !!!");return}f(!0);const a={property:j,water:N,trade:T};B.post(z,a,U()).then(l=>{var c,b;(c=l==null?void 0:l.data)!=null&&c.status?(console.log("Data After Verification",l),ce.success("Verified Successfully !!!"),r==null||r.refresh()):r==null||r.activateBottomErrorCard(!0,(b=l==null?void 0:l.data)==null?void 0:b.message)}).catch(l=>{console.log("Exception While Verifying Data",l),r==null||r.activateBottomErrorCard(!0,"Some error occured. Please try again later.")}).finally(()=>{f(!1),E()}),console.log("Verify Data",a)},ye=()=>{f(!0);const a={chequeNo:n==null?void 0:n.cheque_dd_no,bankName:n==null?void 0:n.bank_name,id:n==null?void 0:n.id,moduleId:n==null?void 0:n.module_id};B.post(p,a,U()).then(l=>{var c,b;(c=l==null?void 0:l.data)!=null&&c.status?(console.log("Data After updation",l),ce.success("Updated Successfully !!!"),D()):r==null||r.activateBottomErrorCard(!0,(b=l==null?void 0:l.data)==null?void 0:b.message)}).catch(l=>{console.log("Exception While Verifying Data",l),r==null||r.activateBottomErrorCard(!0,"Some error occured. Please try again later.")}).finally(()=>{f(!1),_(!1)}),console.log("Verify Data",a)},L=a=>{var q,y,M;const l=a.target.name,c=a.target.checked,b=a.target.value;if(l=="propertyAll")if(Q(c),c){const x=(q=s==null?void 0:s.property)==null?void 0:q.map(h=>h==null?void 0:h.id);C(x)}else C([]);if(l=="property"){if(c)C(x=>[...x,b]);else if(!c&&F!=!0){let x=j==null?void 0:j.filter(h=>h!=b);C(x)}}if(l=="waterAll")if(Z(c),c){const x=(y=s==null?void 0:s.water)==null?void 0:y.map(h=>h==null?void 0:h.id);k(x)}else k([]);if(l=="water"){if(c)k(x=>[...x,b]);else if(!c&&I!=!0){let x=N==null?void 0:N.filter(h=>h!=b);k(x)}}if(l=="tradeAll")if(G(c),c){const x=(M=s==null?void 0:s.trade)==null?void 0:M.map(h=>h==null?void 0:h.id);A(x)}else A([]);if(l=="trade"){if(c)A(x=>[...x,b]);else if(!c&&T!=!0){let x=P==null?void 0:P.filter(h=>h!=b);A(x)}}},J=a=>a==null?void 0:a.map(c=>c==null?void 0:c.payment_mode),K=a=>{w("edit"),S(a),_(!0)};return d.useEffect(()=>{(u==null?void 0:u.length)==0&&t(["cash","cheque","dd"])},[u]),R?e.jsx(xe,{}):e.jsxs(e.Fragment,{children:[e.jsx(Ne,{autoClose:2e3}),e.jsx(fe,{isOpen:W,onRequestClose:E,style:Ee,className:"h-screen flex justify-center items-center",children:e.jsxs("div",{className:"",children:[!X&&e.jsxs("div",{className:"max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl border-2 p-2",children:[e.jsxs("div",{className:"",children:[e.jsx("div",{className:"float-right",children:e.jsxs("div",{onClick:E,className:"hover:bg-gray-100 rounded-full w-5 cursor-pointer mr-3",children:["  ",e.jsx(ve,{size:20})]})}),e.jsx("div",{className:"float-left",children:e.jsx("h1",{className:"mb-3 text-2xl ml-5 font-semibold",children:"TC Collection Details"})})]}),e.jsx("p",{className:"border-b mt-10 mb-6 mx-5 border-gray-100"}),e.jsxs("div",{className:"grid grid-cols-12 gap-2",children:[e.jsx("div",{className:"col-span-4",children:e.jsxs("div",{className:"grid grid-cols-2 bg-gray-50 shadow-md rounded  p-4",children:[e.jsxs("div",{className:"col-span-1",children:[e.jsx("p",{children:" Collector Name"}),e.jsx("p",{children:" Transaction Date"}),e.jsx("p",{children:" Total Amount"}),e.jsx("p",{children:" Number of Transaction"})]}),e.jsxs("div",{className:"col-span-1 font-semibold",children:[e.jsxs("p",{className:"uppercase",children:[": ",i(s==null?void 0:s.collectorName)]}),e.jsxs("p",{children:[": ",i(s==null?void 0:s.date)]}),e.jsxs("p",{children:[": ",g(s==null?void 0:s.totalAmount)]}),e.jsxs("p",{children:[": ",we(s==null?void 0:s.numberOfTransaction)]})]})]})}),e.jsx("div",{className:"col-span-8",children:e.jsxs("div",{className:"flex flex-wrap-reverse m-0 gap-2",children:[e.jsxs("div",{className:"bg-gray-50 shadow-md  p-6 m-2 rounded",children:[e.jsx("p",{className:"font-semibold text-3xl",children:g(s==null?void 0:s.Cash)}),e.jsx("p",{className:"text-lg font-semibold",children:"Cash"})]}),e.jsxs("div",{className:"bg-gray-50 shadow-md  p-6 m-2 rounded",children:[e.jsx("p",{className:"font-semibold text-3xl",children:g(s==null?void 0:s.Cheque)}),e.jsx("p",{className:"text-lg font-semibold",children:"Cheque"})]}),e.jsxs("div",{className:"bg-gray-50 shadow-md  p-6 m-2 rounded",children:[e.jsx("p",{className:"font-semibold text-3xl",children:g(s==null?void 0:s.DD)}),e.jsx("p",{className:"text-lg font-semibold",children:"DD"})]})]})})]}),e.jsx("p",{className:"border-b mt-5 mb-4 mx-5 border-gray-100"}),e.jsxs("div",{className:"flex gap-2 mb-2 ",children:[e.jsx("button",{className:`${u.some(a=>a=="cash")?"shadow-lg":"shadow-none"} px-4 py-1 text-sm border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white`,onClick:()=>t(["cash"]),children:"Cash"}),e.jsx("button",{className:`${u.some(a=>a=="cheque")?"shadow-lg":"shadow-none"} px-4 py-1 text-sm border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white`,onClick:()=>t(["cheque"]),children:"Cheque"}),e.jsx("button",{className:`${u.some(a=>a=="dd")?"shadow-lg":"shadow-none"} px-4 py-1 text-sm border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white`,onClick:()=>t(["dd"]),children:"DD"}),e.jsx("button",{className:" px-4 py-1 text-sm border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white",onClick:()=>t(["cash","cheque","dd"]),children:"All"})]}),((ee=s==null?void 0:s.property)==null?void 0:ee.length)>0&&e.jsxs("div",{children:[e.jsxs("p",{className:"uppercase font-bold",children:[" ",(r==null?void 0:r.reportType)=="1"&&e.jsx("input",{type:"checkbox",name:"propertyAll",id:"",onChange:L})," Property Payment"]}),e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{className:"bg-gray-100 border-t border-l border-r text-left",children:e.jsxs("tr",{children:[(r==null?void 0:r.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"#"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Transaction No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Application No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Check/DD No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Bank Name"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Paid Amount"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Date"}),(r==null?void 0:r.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r",children:"Action"})]})}),e.jsx("tbody",{children:(re=(ae=s==null?void 0:s.property)==null?void 0:ae.filter(a=>J(s==null?void 0:s.property).some(l=>u.includes(l.toLowerCase()))))==null?void 0:re.map((a,l)=>e.jsxs("tr",{children:[(r==null?void 0:r.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:e.jsx("input",{type:"checkbox",name:"property",id:"",checked:F?!0:null,value:a==null?void 0:a.id,onChange:L})}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l+1}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.tran_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.payment_mode)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.application_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.cheque_dd_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.bank_name)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:g(a==null?void 0:a.amount)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.tran_date)}),(r==null?void 0:r.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:(a==null?void 0:a.payment_mode)!="CASH"?e.jsx("button",{className:"px-4 py-1 border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white",onClick:()=>K(a),children:"Edit"}):"No Action"})]},l))})]})]}),e.jsx("p",{className:"py-2"}),((se=s==null?void 0:s.water)==null?void 0:se.length)>0&&e.jsxs("div",{children:[e.jsxs("p",{className:"uppercase font-bold",children:[(r==null?void 0:r.reportType)=="1"&&e.jsx("input",{type:"checkbox",name:"waterAll",id:"",onChange:L})," Water Payment"]}),e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{className:"bg-gray-100 border-t border-l border-r text-left",children:e.jsxs("tr",{children:[(r==null?void 0:r.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"#"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Transaction No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Application No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Check/DD No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Bank Name"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Paid Amount"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Date"}),(r==null?void 0:r.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r",children:"Action"})]})}),e.jsx("tbody",{children:(le=(te=s==null?void 0:s.water)==null?void 0:te.filter(()=>J(s==null?void 0:s.water).some(a=>u.includes(a.toLowerCase()))))==null?void 0:le.map((a,l)=>e.jsxs("tr",{children:[(r==null?void 0:r.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:e.jsx("input",{type:"checkbox",name:"water",id:"",checked:I?!0:null,value:a==null?void 0:a.id,onChange:L})}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l+1}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.tran_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.payment_mode)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.application_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.cheque_dd_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.bank_name)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:g(a==null?void 0:a.amount)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.tran_date)}),(r==null?void 0:r.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:(a==null?void 0:a.payment_mode)!="CASH"?e.jsx("button",{className:"px-4 py-1 border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white",onClick:()=>K(a),children:"Edit"}):"No Action"})]},l))})]})]}),e.jsx("p",{className:"py-2"}),((ne=s==null?void 0:s.trade)==null?void 0:ne.length)>0&&e.jsxs("div",{children:[e.jsxs("p",{className:"uppercase font-bold",children:[(r==null?void 0:r.reportType)=="1"&&e.jsx("input",{type:"checkbox",name:"tradeAll",id:"",onChange:L})," Trade Payment"]}),e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{className:"bg-gray-100 border-t border-l border-r text-left",children:e.jsxs("tr",{children:[(r==null?void 0:r.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"#"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Transaction No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Application No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Check/DD No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Bank Name"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Paid Amount"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Date"}),(r==null?void 0:r.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r",children:"Action"})]})}),e.jsx("tbody",{children:(oe=(de=s==null?void 0:s.trade)==null?void 0:de.filter(a=>J(s==null?void 0:s.trade).some(l=>u.includes(l.toLowerCase()))))==null?void 0:oe.map((a,l)=>e.jsxs("tr",{children:[(r==null?void 0:r.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:e.jsx("input",{type:"checkbox",name:"trade",id:"",checked:P?!0:null,value:a==null?void 0:a.id,onChange:L})}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l+1}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.tran_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.payment_mode)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.application_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.cheque_dd_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.bank_name)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:g(a==null?void 0:a.amount)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:i(a==null?void 0:a.tran_date)}),(r==null?void 0:r.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:(a==null?void 0:a.payment_mode)!="CASH"?e.jsx("button",{className:"px-4 py-1 border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white",onClick:()=>K(a),children:"Edit"}):"No Action"})]},l))})]})]}),e.jsxs("div",{className:"w-full flex justify-center gap-4 mt-2",children:[(r==null?void 0:r.reportType)=="1"?e.jsx("button",{className:" text-sm px-4 rounded bg-green-500 hover:bg-green-600 py-1 text-white sm:w-auto",onClick:()=>(w("verify"),_(!0)),children:" Verify "}):e.jsx("button",{className:" text-sm px-4 rounded bg-indigo-500 hover:bg-indigo-600 py-1 text-white sm:w-auto",onClick:()=>O(`/cashVerificationReceipt/${encodeURIComponent(s==null?void 0:s.tranNo)}`),children:" Print "}),e.jsx("button",{onClick:E,className:"w-full text-sm px-4 rounded bg-red-500 hover:bg-red-600 py-1 text-white sm:w-auto",children:" Close "})]})]}),X&&e.jsx("div",{className:"my-5",children:e.jsx("div",{className:"flex justify-center pt-3 space-x-3",children:(r==null?void 0:r.reportType)=="1"&&e.jsxs("div",{style:{zIndex:999},class:"h-screen w-screen flex justify-center items-center backdrop-blur-sm",children:[v=="verify"&&e.jsxs("div",{className:"bg-white w-max h-max rounded-md shadow-lg relative",children:[e.jsx("button",{type:"button",onClick:()=>_(!1),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center",children:[e.jsxs("div",{className:"w-full flex h-10",children:[" ",e.jsx("span",{className:"mx-auto",children:e.jsx(pe,{size:30})})]}),e.jsx("h3",{class:"mb-5 text-lg font-normal text-gray-500 darks:text-gray-400",children:"Are you sure you ?"}),e.jsx("button",{type:"button",className:"cypress_button_logout text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 darks:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",onClick:()=>(be(),E()),children:"Yes, I'm sure"})]})]}),v=="edit"&&e.jsxs("div",{className:"bg-white w-max h-max rounded-md shadow-lg relative",children:[e.jsx("button",{type:"button",onClick:()=>_(!1),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center flex flex-col gap-y-2 flex-wrap",children:[e.jsx("h1",{className:"w-full text-lg text-indigo-400 font-semibold border-b pb-1 mb-2",children:"Update Data"}),e.jsxs("div",{className:"grid grid-cols-12 items-center",children:[e.jsx("label",{className:"col-span-6 text-start",htmlFor:"checkNo",children:"Cheque/DD No.: "}),e.jsx("input",{ref:ue,className:"col-span-6 border focus:outline-none focus:shadow-lg shadow-md px-2 py-1",value:n==null?void 0:n.cheque_dd_no,onChange:a=>S({...n,cheque_dd_no:a.target.value}),type:"text",name:"chequeNo",id:""})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center",children:[e.jsx("label",{className:"col-span-6 text-start",htmlFor:"checkNo",children:"Bank Name: "}),e.jsx("input",{ref:me,className:"col-span-6 border focus:outline-none focus:shadow-lg shadow-md px-2 py-1",value:n==null?void 0:n.bank_name,onChange:a=>S({...n,bank_name:a.target.value}),type:"text",name:"bankName",id:""})]}),e.jsxs("div",{className:"w-full flex justify-center gap-2 mt-2",children:[e.jsx("button",{className:" px-4 text-sm rounded bg-green-500 hover:bg-green-600 py-1 text-white ",onClick:()=>ye(),children:" Update "}),e.jsx("button",{onClick:()=>_(!1),className:" px-4 text-sm rounded bg-indigo-400 hover:bg-indigo-500 py-1 text-white ",children:" Close "})]})]})]})]})})})]})})]})}const Ve=r=>{const[O,$]=d.useState(0),[V,z]=d.useState(),[p,W]=d.useState(),[H,s]=d.useState();d.useState("");const[Y,R]=d.useState(!1),[f,F]=d.useState(!1),[Q,j]=d.useState(null),[C,I]=d.useState(""),Z=ie(),{api_listofEmployees:N,api_listUnverifiedCashVerification:k,api_listVerifiedCashVerification:P}=he();d.useEffect(()=>{S()},[]);const G=t=>{s(t),$(o=>o+1)};d.useEffect(()=>{B.post(N,{},U()).then(t=>{z(t.data.data)}).catch(t=>{console.log("Error while getting employee list",t)})},[]);const T=[{Header:"Sl.",Cell:({row:t})=>e.jsxs("div",{className:"px-2 font-semibold",children:[t.index+1,"."]})},{Header:"EmployeeName",Cell:({cell:t})=>{var o;return e.jsxs("span",{children:["  ",i((o=t.row.original)==null?void 0:o.user_name)]})}},{Header:"Property",Cell:({cell:t})=>{var o;return e.jsxs("span",{children:[" ",g((o=t.row.original)==null?void 0:o.property)]})}},{Header:"Water",Cell:({cell:t})=>{var o;return e.jsxs("span",{children:[" ",g((o=t.row.original)==null?void 0:o.water)]})}},{Header:"Trade",Cell:({cell:t})=>{var o;return e.jsxs("span",{children:[" ",g((o=t.row.original)==null?void 0:o.trade)]})}},{Header:"Total Amount",Cell:({cell:t})=>{var o;return e.jsxs("span",{children:[" ",g((o=t.row.original)==null?void 0:o.total)]})}},{Header:"Paid Date",Cell:({cell:t})=>{var o;return e.jsxs("span",{children:["  ",i((o=t.row.original)==null?void 0:o.date)]})}},{Header:"Action",Cell:({cell:t})=>{var o,m;return e.jsxs("div",{className:"flex gap-2 w-full flex-wrap",children:[e.jsx("button",{onClick:()=>G(t.row.original),className:"bg-blue-600 hover:bg-blue-400 py-1 px-3 text-white rounded-sm",children:"View"}),((m=(o=t==null?void 0:t.row)==null?void 0:o.original)==null?void 0:m.verifyStatus)==!0&&e.jsx("button",{onClick:()=>{var v,w;return Z(`/cashVerificationReceipt/${encodeURIComponent((w=(v=t==null?void 0:t.row)==null?void 0:v.original)==null?void 0:w.tranNo)}`)},className:"bg-sky-600 hover:bg-sky-400 py-1 px-3 text-white rounded-sm",children:"Print"})]})}}],A=Ce({collectionDate:ke().required("Select Date")}),n=Te({initialValues:{empName:"",collectionDate:Ae(),reportType:"1"},enableReinitialize:!0,onSubmit:t=>{console.log("report type ",t.reportType),S()},validationSchema:A}),S=()=>{let t;n.values.reportType=="1"&&(t=k),n.values.reportType=="2"&&(t=P),I(n.values.reportType),R(!0);const o={date:n.values.collectionDate,id:n.values.empName};B.post(t,o,U()).then(m=>{var v,w;console.log("response list cash",m),(v=m==null?void 0:m.data)!=null&&v.status?W(m.data.data):u(!0,(w=m==null?void 0:m.data)==null?void 0:w.message)}).catch(m=>{u(!0,"Error occured while fetching cash verification list. Please try again later."),console.log("Error while list cash verification",m)}).finally(()=>{R(!1)})},u=(t,o)=>{j(o),F(t)};return e.jsxs(e.Fragment,{children:[Y&&e.jsx(xe,{}),f&&e.jsx(Se,{activateBottomErrorCard:u,errorTitle:Q}),e.jsx(Pe,{openAddPopUP:O,data:H,refresh:()=>S(),activateBottomErrorCard:u,reportType:C}),e.jsxs("div",{className:"m-2",children:[e.jsx("div",{className:"shadow-md  rounded bg-indigo-100 px-4",children:e.jsx("form",{onSubmit:n.handleSubmit,onChange:n.handleChange,children:e.jsxs("div",{className:"px-3 py-3",children:[e.jsx("div",{className:"text-left",children:e.jsx("h1",{className:"mb-3 text-2xl font-semibold",children:"Cash Verification"})}),e.jsxs("div",{className:"grid grid-cols-12 gap-4 items-end",children:[e.jsxs("div",{className:"col-span-10 md:col-span-2",children:[e.jsxs("p",{className:"py-1 text-base font-semibold",children:["Select Date ",e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsx("input",{onChange:n.handleChange,name:"collectionDate",className:"w-full rounded border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1",type:"date",value:n.values.collectionDate}),e.jsxs("p",{className:"text-red-500 text-xs font-semibold absolute",children:[" ",n.touched.collectionDate&&n.errors.collectionDate?n.errors.collectionDate:null]})]}),e.jsxs("div",{className:"col-span-10 md:col-span-2",children:[e.jsxs("p",{className:"py-1 text-base font-semibold",children:["Select Employee ",e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsxs("select",{onChange:n.handleChange,className:"w-full rounded border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1",placeholder:"Enter New Taluka",type:"text",name:"empName",children:[e.jsx("option",{value:"",children:"All"}),V==null?void 0:V.map((t,o)=>e.jsx("option",{value:t.id,children:t.user_name}))]}),e.jsxs("p",{className:"text-red-500 text-xs font-semibold absolute",children:[" ",n.touched.empName&&n.errors.empName?n.errors.empName:null]})]}),e.jsxs("div",{className:"col-span-10 md:col-span-2",children:[e.jsxs("p",{className:"py-1 text-base font-semibold",children:["Report Type ",e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsxs("select",{value:n.values.reportType,className:"w-full rounded border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1",placeholder:"Enter New Taluka",type:"text",name:"reportType",children:[e.jsx("option",{value:"1",children:"Not Verified"}),e.jsx("option",{value:"2",children:"Verified"})]})]}),e.jsx("div",{className:"col-span-10 md:col-span-2 flex items-end justify-end md:mt-0 mt-6",children:e.jsx("button",{type:"submit",class:"w-full py-2 px-4 inline-block text-center rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",children:"Search"})})]})]})})}),e.jsx("p",{className:" mx-10 py-5"}),e.jsx("div",{className:"my-4",children:(p==null?void 0:p.length)==0?e.jsx("p",{className:"text-center font-semibold text-xl -mt-8 text-red-500",children:"No Data Found !"}):e.jsxs(e.Fragment,{children:[p&&e.jsx("div",{className:"bg-white p-4",children:e.jsx(_e,{columns:T,dataList:p})})," "]})})]})]})};export{Ve as default};
