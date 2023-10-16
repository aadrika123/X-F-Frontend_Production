import{k as ye,a as ie,R as je,r as d,A as B,N as U,j as e,T as xe,Q as Ne,g as fe,cL as ve,n as x,f as y,b1 as we,F as Ce,bB as he,Y as ce,l as pe,m as ke,o as Te,aM as Ae,p as Se,U as _e}from"./index-08241deb.js";const Ee={overlay:{background:"rgba(0, 0, 0, 0.5)",overflowY:"scroll"}};function Pe(t){var ee,ae,te,se,re,le,ne,de,oe;ye("Cash Verification");const O=ie(),{api_verifiedTcCollection:$,api_notVerifiedTcCollection:V,api_verifyTcCollection:z,api_chequeDdUpdate:C}=he(),[W,H]=je.useState(!1),[s,Y]=d.useState(),[R,f]=d.useState(!1);d.useState(!1),d.useState(null);const[F,Q]=d.useState(!1),[j,p]=d.useState([]),[I,Z]=d.useState(!1),[N,k]=d.useState([]),[P,G]=d.useState(!1),[T,A]=d.useState([]),[n,S]=d.useState(null),[c,r]=d.useState(["cash","cheque","dd"]),[o,m]=d.useState([]),[v,w]=d.useState(""),[X,_]=d.useState(!1),ue=d.useRef(),me=d.useRef();console.log(t==null?void 0:t.reportType),d.useEffect(()=>{!t||!t.data||(p([]),k([]),A([]),_(!1),D())},[t==null?void 0:t.data]),console.log(t==null?void 0:t.data);const D=()=>{var i,b,q;f(!0);let a;(t==null?void 0:t.reportType)=="1"?a={date:(i=t==null?void 0:t.data)==null?void 0:i.date,userId:(b=t==null?void 0:t.data)==null?void 0:b.id}:a={tranNo:(q=t==null?void 0:t.data)==null?void 0:q.tranNo};let l;(t==null?void 0:t.reportType)=="1"&&(l=V),(t==null?void 0:t.reportType)=="2"&&(l=$),B.post(l,a,U()).then(g=>{var M,h,u;console.log("response of te data in modal",g),(M=g==null?void 0:g.data)!=null&&M.status?Y((h=g==null?void 0:g.data)==null?void 0:h.data):(t==null||t.activateBottomErrorCard(!0,(u=g==null?void 0:g.data)==null?void 0:u.message),E())}).catch(g=>{console.log("Error while tc list data in modal",g),t==null||t.activateBottomErrorCard(!0,"Some error occured. Please try again later."),E()}).finally(()=>f(!1))};console.log("getting data in cash verification modal => ",t==null?void 0:t.data),d.useEffect(()=>{t.openAddPopUP>0&&H(!0)},[t==null?void 0:t.openAddPopUP]);function E(){H(!1),m([])}const be=()=>{if((j==null?void 0:j.length)==0&&(N==null?void 0:N.length)==0&&(T==null?void 0:T.length)==0){t==null||t.activateBottomErrorCard(!0,"Select atleast one transaction to verify !!!");return}f(!0);const a={property:j,water:N,trade:T};B.post(z,a,U()).then(l=>{var i,b;(i=l==null?void 0:l.data)!=null&&i.status?(console.log("Data After Verification",l),ce.success("Verified Successfully !!!"),t==null||t.refresh()):t==null||t.activateBottomErrorCard(!0,(b=l==null?void 0:l.data)==null?void 0:b.message)}).catch(l=>{console.log("Exception While Verifying Data",l),t==null||t.activateBottomErrorCard(!0,"Some error occured. Please try again later.")}).finally(()=>{f(!1),E()}),console.log("Verify Data",a)},ge=()=>{f(!0);const a={chequeNo:n==null?void 0:n.cheque_dd_no,bankName:n==null?void 0:n.bank_name,id:n==null?void 0:n.id,moduleId:n==null?void 0:n.module_id};B.post(C,a,U()).then(l=>{var i,b;(i=l==null?void 0:l.data)!=null&&i.status?(console.log("Data After updation",l),ce.success("Updated Successfully !!!"),D()):t==null||t.activateBottomErrorCard(!0,(b=l==null?void 0:l.data)==null?void 0:b.message)}).catch(l=>{console.log("Exception While Verifying Data",l),t==null||t.activateBottomErrorCard(!0,"Some error occured. Please try again later.")}).finally(()=>{f(!1),_(!1)}),console.log("Verify Data",a)},L=a=>{var q,g,M;const l=a.target.name,i=a.target.checked,b=a.target.value;if(l=="propertyAll")if(Q(i),i){const h=(q=s==null?void 0:s.property)==null?void 0:q.map(u=>u==null?void 0:u.id);p(h)}else p([]);if(l=="property"){if(i)p(h=>[...h,b]);else if(!i&&F!=!0){let h=j==null?void 0:j.filter(u=>u!=b);p(h)}}if(l=="waterAll")if(Z(i),i){const h=(g=s==null?void 0:s.water)==null?void 0:g.map(u=>u==null?void 0:u.id);k(h)}else k([]);if(l=="water"){if(i)k(h=>[...h,b]);else if(!i&&I!=!0){let h=N==null?void 0:N.filter(u=>u!=b);k(h)}}if(l=="tradeAll")if(G(i),i){const h=(M=s==null?void 0:s.trade)==null?void 0:M.map(u=>u==null?void 0:u.id);A(h)}else A([]);if(l=="trade"){if(i)A(h=>[...h,b]);else if(!i&&T!=!0){let h=P==null?void 0:P.filter(u=>u!=b);A(h)}}},J=a=>a==null?void 0:a.map(i=>i==null?void 0:i.payment_mode),K=a=>{w("edit"),S(a),_(!0)};return d.useEffect(()=>{(c==null?void 0:c.length)==0&&r(["cash","cheque","dd"])},[c]),R?e.jsx(xe,{}):e.jsxs(e.Fragment,{children:[e.jsx(Ne,{autoClose:2e3}),e.jsx(fe,{isOpen:W,onRequestClose:E,style:Ee,className:"absolute left-1/4 h-screen w-2/3 flex justify-center items-center",children:e.jsxs("div",{className:"w-[90vw] md:w-[80vw]",children:[!X&&e.jsxs("div",{className:"max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl border-2 p-2",children:[e.jsxs("div",{className:"",children:[e.jsx("div",{className:"float-right",children:e.jsxs("div",{onClick:E,className:"hover:bg-gray-100 rounded-full w-5 cursor-pointer mr-3",children:["  ",e.jsx(ve,{size:20})]})}),e.jsx("div",{className:"float-left",children:e.jsx("h1",{className:"mb-3 text-2xl ml-5 font-semibold",children:"Collection Details"})})]}),e.jsx("p",{className:"border-b mt-10 mb-6 mx-5 border-gray-100"}),e.jsxs("div",{className:"grid grid-cols-12 gap-2",children:[e.jsx("div",{className:"col-span-4 ",children:e.jsx("div",{className:" bg-gray-50 shadow-md rounded  p-4",children:e.jsx("table",{className:"w-full",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Collector Name :"}),e.jsxs("td",{className:"font-semibold",children:[x(s==null?void 0:s.collectorName)," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Transaction Date :"}),e.jsxs("td",{className:"font-semibold",children:[x(s==null?void 0:s.date)," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Total Amount :"}),e.jsxs("td",{className:"font-semibold",children:[y(s==null?void 0:s.totalAmount)," "]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Number of Transaction :"}),e.jsxs("td",{className:"font-semibold",children:[we(s==null?void 0:s.numberOfTransaction)," "]})]})]})})})}),e.jsx("div",{className:"col-span-8",children:e.jsxs("div",{className:"flex flex-wrap-reverse m-0 gap-2",children:[e.jsxs("div",{className:"bg-gray-50 shadow-md  p-6 m-2 rounded",children:[e.jsx("p",{className:"font-semibold text-3xl",children:y(s==null?void 0:s.Cash)}),e.jsx("p",{className:"text-lg font-semibold",children:"Cash"})]}),e.jsxs("div",{className:"bg-gray-50 shadow-md  p-6 m-2 rounded",children:[e.jsx("p",{className:"font-semibold text-3xl",children:y(s==null?void 0:s.Cheque)}),e.jsx("p",{className:"text-lg font-semibold",children:"Cheque"})]}),e.jsxs("div",{className:"bg-gray-50 shadow-md  p-6 m-2 rounded",children:[e.jsx("p",{className:"font-semibold text-3xl",children:y(s==null?void 0:s.DD)}),e.jsx("p",{className:"text-lg font-semibold",children:"DD"})]})]})})]}),e.jsx("p",{className:"border-b mt-5 mb-4 mx-5 border-gray-100"}),e.jsxs("div",{className:"flex gap-2 mb-2 ",children:[e.jsx("button",{className:`${(c==null?void 0:c.length)==1&&c.some(a=>a=="cash")?"shadow-lg bg-indigo-500 text-white":"shadow-none"} px-4 py-1 text-sm border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white`,onClick:()=>r(["cash"]),children:"Cash"}),e.jsx("button",{className:`${(c==null?void 0:c.length)==1&&c.some(a=>a=="cheque")?"shadow-lg bg-indigo-500 text-white ":"shadow-none"} px-4 py-1 text-sm border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white`,onClick:()=>r(["cheque"]),children:"Cheque"}),e.jsx("button",{className:`${(c==null?void 0:c.length)==1&&c.some(a=>a=="dd")?"shadow-lg bg-indigo-500 text-white ":"shadow-none"} px-4 py-1 text-sm border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white`,onClick:()=>r(["dd"]),children:"DD"}),e.jsx("button",{className:`${c.length==3?"shadow-lg bg-indigo-500 text-white":"shadow-none"} px-4 py-1 text-sm border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white`,onClick:()=>r(["cash","cheque","dd"]),children:"All"})]}),((ee=s==null?void 0:s.property)==null?void 0:ee.length)>0&&e.jsxs("div",{className:" overflow-auto",children:[e.jsxs("p",{className:"uppercase font-bold",children:[" ",(t==null?void 0:t.reportType)=="1"&&e.jsx("input",{type:"checkbox",name:"propertyAll",id:"",onChange:L})," Property Payment"]}),e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{className:"bg-gray-100 border-t border-l border-r text-left",children:e.jsxs("tr",{children:[(t==null?void 0:t.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"#"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Transaction No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Application No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Check/DD No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Bank Name"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Paid Amount"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Date"}),(t==null?void 0:t.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r",children:"Action"})]})}),e.jsx("tbody",{children:(te=(ae=s==null?void 0:s.property)==null?void 0:ae.filter(a=>J(s==null?void 0:s.property).some(l=>c.includes(l.toLowerCase()))))==null?void 0:te.map((a,l)=>e.jsxs("tr",{children:[(t==null?void 0:t.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:e.jsx("input",{type:"checkbox",name:"property",id:"",checked:F?!0:null,value:a==null?void 0:a.id,onChange:L})}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l+1}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.tran_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.payment_mode)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.application_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.cheque_dd_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.bank_name)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:y(a==null?void 0:a.amount)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.tran_date)}),(t==null?void 0:t.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:(a==null?void 0:a.payment_mode)!="CASH"?e.jsx("button",{className:"px-4 py-1 border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white",onClick:()=>K(a),children:"Edit"}):"No Action"})]},l))})]})]}),e.jsx("p",{className:"py-2"}),((se=s==null?void 0:s.water)==null?void 0:se.length)>0&&e.jsxs("div",{children:[e.jsxs("p",{className:"uppercase font-bold",children:[(t==null?void 0:t.reportType)=="1"&&e.jsx("input",{type:"checkbox",name:"waterAll",id:"",onChange:L})," Water Payment"]}),e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{className:"bg-gray-100 border-t border-l border-r text-left",children:e.jsxs("tr",{children:[(t==null?void 0:t.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"#"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Transaction No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Application No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Check/DD No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Bank Name"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Paid Amount"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Date"}),(t==null?void 0:t.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r",children:"Action"})]})}),e.jsx("tbody",{children:(le=(re=s==null?void 0:s.water)==null?void 0:re.filter(()=>J(s==null?void 0:s.water).some(a=>c.includes(a.toLowerCase()))))==null?void 0:le.map((a,l)=>e.jsxs("tr",{children:[(t==null?void 0:t.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:e.jsx("input",{type:"checkbox",name:"water",id:"",checked:I?!0:null,value:a==null?void 0:a.id,onChange:L})}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l+1}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.tran_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.payment_mode)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.application_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.cheque_dd_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.bank_name)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:y(a==null?void 0:a.amount)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.tran_date)}),(t==null?void 0:t.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:(a==null?void 0:a.payment_mode)!="CASH"?e.jsx("button",{className:"px-4 py-1 border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white",onClick:()=>K(a),children:"Edit"}):"No Action"})]},l))})]})]}),e.jsx("p",{className:"py-2"}),((ne=s==null?void 0:s.trade)==null?void 0:ne.length)>0&&e.jsxs("div",{children:[e.jsxs("p",{className:"uppercase font-bold",children:[(t==null?void 0:t.reportType)=="1"&&e.jsx("input",{type:"checkbox",name:"tradeAll",id:"",onChange:L})," Trade Payment"]}),e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{className:"bg-gray-100 border-t border-l border-r text-left",children:e.jsxs("tr",{children:[(t==null?void 0:t.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"#"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Transaction No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Mode"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Application No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Check/DD No"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Bank Name"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Paid Amount"}),e.jsx("th",{className:"px-2 py-2 border-r",children:"Payment Date"}),(t==null?void 0:t.reportType)=="1"&&e.jsx("th",{className:"px-2 py-2 border-r",children:"Action"})]})}),e.jsx("tbody",{children:(oe=(de=s==null?void 0:s.trade)==null?void 0:de.filter(a=>J(s==null?void 0:s.trade).some(l=>c.includes(l.toLowerCase()))))==null?void 0:oe.map((a,l)=>e.jsxs("tr",{children:[(t==null?void 0:t.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:e.jsx("input",{type:"checkbox",name:"trade",id:"",checked:P?!0:null,value:a==null?void 0:a.id,onChange:L})}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:l+1}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.tran_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.payment_mode)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.application_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.cheque_dd_no)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.bank_name)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:y(a==null?void 0:a.amount)}),e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:x(a==null?void 0:a.tran_date)}),(t==null?void 0:t.reportType)=="1"&&e.jsx("td",{className:"border border-gray-200 px-2 py-2 font-medium",children:(a==null?void 0:a.payment_mode)!="CASH"?e.jsx("button",{className:"px-4 py-1 border-indigo-500 text-indigo-500 border hover:bg-indigo-500 hover:text-white",onClick:()=>K(a),children:"Edit"}):"No Action"})]},l))})]})]}),e.jsxs("div",{className:"w-full flex justify-center gap-4 mt-2",children:[(t==null?void 0:t.reportType)=="1"?e.jsx("button",{className:" text-sm px-4 rounded bg-green-500 hover:bg-green-600 py-1 text-white sm:w-auto",onClick:()=>(w("verify"),_(!0)),children:" Verify "}):e.jsx("button",{className:" text-sm px-4 rounded bg-indigo-500 hover:bg-indigo-600 py-1 text-white sm:w-auto",onClick:()=>O(`/cashVerificationReceipt/${encodeURIComponent(s==null?void 0:s.tranNo)}`),children:" Print "}),e.jsx("button",{onClick:E,className:"w-full text-sm px-4 rounded bg-red-500 hover:bg-red-600 py-1 text-white sm:w-auto",children:" Close "})]})]}),X&&e.jsx("div",{className:"my-5",children:e.jsx("div",{className:"flex justify-center pt-3 space-x-3",children:(t==null?void 0:t.reportType)=="1"&&e.jsxs("div",{style:{zIndex:999},class:"h-screen w-screen flex justify-center items-center backdrop-blur-sm",children:[v=="verify"&&e.jsxs("div",{className:"bg-white w-max h-max rounded-md shadow-lg relative",children:[e.jsx("button",{type:"button",onClick:()=>_(!1),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center",children:[e.jsxs("div",{className:"w-full flex h-10",children:[" ",e.jsx("span",{className:"mx-auto",children:e.jsx(Ce,{size:30})})]}),e.jsx("h3",{class:"mb-5 text-lg font-normal text-gray-500 darks:text-gray-400",children:"Are you sure you ?"}),e.jsx("button",{type:"button",className:"cypress_button_logout text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 darks:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",onClick:()=>(be(),E()),children:"Yes, I'm sure"})]})]}),v=="edit"&&e.jsxs("div",{className:"bg-white w-max h-max rounded-md shadow-lg relative",children:[e.jsx("button",{type:"button",onClick:()=>_(!1),class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{class:"p-6 text-center flex flex-col gap-y-2 flex-wrap",children:[e.jsx("h1",{className:"w-full text-lg text-indigo-400 font-semibold border-b pb-1 mb-2",children:"Update Data"}),e.jsxs("div",{className:"grid grid-cols-12 items-center",children:[e.jsx("label",{className:"col-span-6 text-start",htmlFor:"checkNo",children:"Cheque/DD No.: "}),e.jsx("input",{ref:ue,className:"col-span-6 border focus:outline-none focus:shadow-lg shadow-md px-2 py-1",value:n==null?void 0:n.cheque_dd_no,onChange:a=>S({...n,cheque_dd_no:a.target.value}),type:"text",name:"chequeNo",id:""})]}),e.jsxs("div",{className:"grid grid-cols-12 items-center",children:[e.jsx("label",{className:"col-span-6 text-start",htmlFor:"checkNo",children:"Bank Name: "}),e.jsx("input",{ref:me,className:"col-span-6 border focus:outline-none focus:shadow-lg shadow-md px-2 py-1",value:n==null?void 0:n.bank_name,onChange:a=>S({...n,bank_name:a.target.value}),type:"text",name:"bankName",id:""})]}),e.jsxs("div",{className:"w-full flex justify-center gap-2 mt-2",children:[e.jsx("button",{className:" px-4 text-sm rounded bg-green-500 hover:bg-green-600 py-1 text-white ",onClick:()=>ge(),children:" Update "}),e.jsx("button",{onClick:()=>_(!1),className:" px-4 text-sm rounded bg-indigo-400 hover:bg-indigo-500 py-1 text-white ",children:" Close "})]})]})]})]})})})]})})]})}const Ve=t=>{const[O,$]=d.useState(0),[V,z]=d.useState(),[C,W]=d.useState(),[H,s]=d.useState();d.useState("");const[Y,R]=d.useState(!1),[f,F]=d.useState(!1),[Q,j]=d.useState(null),[p,I]=d.useState(""),Z=ie(),{api_listofEmployees:N,api_listUnverifiedCashVerification:k,api_listVerifiedCashVerification:P}=he();d.useEffect(()=>{S()},[]);const G=r=>{s(r),$(o=>o+1)};d.useEffect(()=>{B.post(N,{},U()).then(r=>{z(r.data.data)}).catch(r=>{console.log("Error while getting employee list",r)})},[]);const T=[{Header:"Sl.",Cell:({row:r})=>e.jsxs("div",{className:"px-2 font-semibold",children:[r.index+1,"."]})},{Header:"EmployeeName",Cell:({cell:r})=>{var o;return e.jsxs("span",{children:["  ",x((o=r.row.original)==null?void 0:o.user_name)]})}},{Header:"Property",Cell:({cell:r})=>{var o;return e.jsxs("span",{children:[" ",y((o=r.row.original)==null?void 0:o.property)]})}},{Header:"Water",Cell:({cell:r})=>{var o;return e.jsxs("span",{children:[" ",y((o=r.row.original)==null?void 0:o.water)]})}},{Header:"Trade",Cell:({cell:r})=>{var o;return e.jsxs("span",{children:[" ",y((o=r.row.original)==null?void 0:o.trade)]})}},{Header:"Total Amount",Cell:({cell:r})=>{var o;return e.jsxs("span",{children:[" ",y((o=r.row.original)==null?void 0:o.total)]})}},{Header:"Paid Date",Cell:({cell:r})=>{var o;return e.jsxs("span",{children:["  ",x((o=r.row.original)==null?void 0:o.date)]})}},{Header:"Action",Cell:({cell:r})=>{var o,m;return e.jsxs("div",{className:"flex gap-2 w-full flex-wrap",children:[e.jsx("button",{onClick:()=>G(r.row.original),className:"bg-blue-600 hover:bg-blue-400 py-1 px-3 text-white rounded-sm",children:"View"}),((m=(o=r==null?void 0:r.row)==null?void 0:o.original)==null?void 0:m.verifyStatus)==!0&&e.jsx("button",{onClick:()=>{var v,w;return Z(`/cashVerificationReceipt/${encodeURIComponent((w=(v=r==null?void 0:r.row)==null?void 0:v.original)==null?void 0:w.tranNo)}`)},className:"bg-sky-600 hover:bg-sky-400 py-1 px-3 text-white rounded-sm",children:"Print"})]})}}],A=pe({collectionDate:ke().required("Select Date")}),n=Te({initialValues:{empName:"",collectionDate:Ae(),reportType:"1"},enableReinitialize:!0,onSubmit:r=>{console.log("report type ",r.reportType),S()},validationSchema:A}),S=()=>{let r;n.values.reportType=="1"&&(r=k),n.values.reportType=="2"&&(r=P),I(n.values.reportType),R(!0);const o={date:n.values.collectionDate,id:n.values.empName};B.post(r,o,U()).then(m=>{var v,w;console.log("response list cash",m),(v=m==null?void 0:m.data)!=null&&v.status?W(m.data.data):c(!0,(w=m==null?void 0:m.data)==null?void 0:w.message)}).catch(m=>{c(!0,"Error occured while fetching cash verification list. Please try again later."),console.log("Error while list cash verification",m)}).finally(()=>{R(!1)})},c=(r,o)=>{j(o),F(r)};return e.jsxs(e.Fragment,{children:[Y&&e.jsx(xe,{}),f&&e.jsx(Se,{activateBottomErrorCard:c,errorTitle:Q}),e.jsx(Pe,{openAddPopUP:O,data:H,refresh:()=>S(),activateBottomErrorCard:c,reportType:p}),e.jsxs("div",{className:"m-2",children:[e.jsx("div",{className:"shadow-md  rounded bg-indigo-100 px-4",children:e.jsx("form",{onSubmit:n.handleSubmit,onChange:n.handleChange,children:e.jsxs("div",{className:"px-3 py-3",children:[e.jsx("div",{className:"text-left",children:e.jsx("h1",{className:"mb-3 text-2xl font-semibold",children:"Cash Verification"})}),e.jsxs("div",{className:"grid grid-cols-12 gap-4 items-end",children:[e.jsxs("div",{className:"col-span-10 md:col-span-2",children:[e.jsxs("p",{className:"py-1 text-base font-semibold",children:["Select Date ",e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsx("input",{onChange:n.handleChange,name:"collectionDate",className:"w-full rounded border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1",type:"date",value:n.values.collectionDate}),e.jsxs("p",{className:"text-red-500 text-xs font-semibold absolute",children:[" ",n.touched.collectionDate&&n.errors.collectionDate?n.errors.collectionDate:null]})]}),e.jsxs("div",{className:"col-span-10 md:col-span-2",children:[e.jsxs("p",{className:"py-1 text-base font-semibold",children:["Select Employee ",e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsxs("select",{onChange:n.handleChange,className:"w-full rounded border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1",placeholder:"Enter New Taluka",type:"text",name:"empName",children:[e.jsx("option",{value:"",children:"All"}),V==null?void 0:V.map((r,o)=>e.jsx("option",{value:r.id,children:r.user_name}))]}),e.jsxs("p",{className:"text-red-500 text-xs font-semibold absolute",children:[" ",n.touched.empName&&n.errors.empName?n.errors.empName:null]})]}),e.jsxs("div",{className:"col-span-10 md:col-span-2",children:[e.jsxs("p",{className:"py-1 text-base font-semibold",children:["Report Type ",e.jsx("span",{className:"text-red-400",children:"*"})]}),e.jsxs("select",{value:n.values.reportType,className:"w-full rounded border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1",placeholder:"Enter New Taluka",type:"text",name:"reportType",children:[e.jsx("option",{value:"1",children:"Not Verified"}),e.jsx("option",{value:"2",children:"Verified"})]})]}),e.jsx("div",{className:"col-span-10 md:col-span-2 flex items-end justify-end md:mt-0 mt-6",children:e.jsx("button",{type:"submit",class:"w-full py-2 px-4 inline-block text-center rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0",children:"Search"})})]})]})})}),e.jsx("p",{className:" mx-10 py-5"}),e.jsx("div",{className:"my-4",children:(C==null?void 0:C.length)==0?e.jsx("p",{className:"text-center font-semibold text-xl -mt-8 text-red-500",children:"No Data Found !"}):e.jsxs(e.Fragment,{children:[C&&e.jsx("div",{className:"bg-white p-4",children:e.jsx(_e,{columns:T,dataList:C})})," "]})})]})]})};export{Ve as default};