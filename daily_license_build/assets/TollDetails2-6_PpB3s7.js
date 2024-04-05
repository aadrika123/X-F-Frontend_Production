import{d as K,u as W,r as d,A as u,a as h,j as e,Q as y}from"./index-jT1_tuvX.js";import{M as _}from"./index-oM9zVoD4.js";import{u as X}from"./formik.esm-RJEjG-JI.js";import{n as o}from"./PowerupFunctions-yHjJCi7V.js";import{R as Z}from"./RentalApiList-ncByEBHo.js";import{L as ee}from"./Loader-dKHVMc02.js";const te={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"gray",border:"none",overflowY:"scroll"}};_.setAppElement("#root");function ce(){const{id:x}=K();console.log("id.....",x);const{api_tollDetailsById:M,api_tollTcPayment:k,api_getTollCalculatedAmount:I,api_tollOnlineTcPayment:L}=Z(),T=W(),p=(s,a)=>{y.dismiss(),a=="success"&&y.success(s),a=="error"&&y.error(s)},[R,i]=d.useState(!1),[t,O]=d.useState();d.useState("");const[c,U]=d.useState();d.useState("");const[f,B]=d.useState(""),[b,q]=d.useState(""),[j,D]=d.useState(""),[N,H]=d.useState(!1),[V,v]=d.useState(!1);function Q(){v(!0)}function w(){v(!1)}const r=X({initialValues:{amount:"",fromDate:"",uptoDate:"",paymentMode:""},onSubmit:s=>{console.log("shop data",s),J(s)}}),Y=s=>{console.log("target value",s.target.value),console.log("target value",s.target.name);let a=s.target.name,n=s.target.value;console.log("value to ...",n),a=="fromDate"&&B(n),a=="uptoDate"&&q(n)},$=()=>{i(!0);let s;s={tollId:x,dateFrom:f,dateUpto:b},u.post(I,s,h()).then(a=>{var n,l,m;console.log("shop details...1",a.data.message),a.data.status?(console.log("data",a.data.data),g(),D((l=(n=a==null?void 0:a.data)==null?void 0:n.data)==null?void 0:l.tollAmount),p((m=a==null?void 0:a.data)==null?void 0:m.message,"success")):p("Error...","error"),i(!1),w()}).catch(a=>{console.log(a),i(!1)})},G=s=>{U(s.target.value)};console.log("===",c);const J=s=>{i(!0);let a,n;c=="ONLINE"&&(a=L,n={tollId:x,dateFrom:s==null?void 0:s.fromDate,dateUpto:s==null?void 0:s.uptoDate,paymentMode:c}),c=="CASH"&&(a=k,n={tollId:x,dateFrom:s==null?void 0:s.fromDate,dateUpto:s==null?void 0:s.uptoDate,paymentMode:c}),console.log("toll details...1",n),u.post(a,n,h()).then(l=>{var m,C,S,z,P,E,A,F;l.data.status?(H(l.data.status),p((m=l==null?void 0:l.data)==null?void 0:m.message,"success"),console.log("====1",(S=(C=l==null?void 0:l.data)==null?void 0:C.data)==null?void 0:S.paymentUrl),((P=(z=l==null?void 0:l.data)==null?void 0:z.data)==null?void 0:P.paymentUrl)!=null?window.location.href=(A=(E=l==null?void 0:l.data)==null?void 0:E.data)==null?void 0:A.paymentUrl:g()):p((F=l==null?void 0:l.data)==null?void 0:F.message,"error"),i(!1)}).catch(l=>{console.log(l),i(!1)})};d.useEffect(()=>{g()},[]);const g=()=>{i(!0);const s={tollId:x};u.post(M,s,h()).then(a=>{console.log("toll details...",a.data),a.data.status&&O(a.data.data),i(!1)}).catch(a=>{console.log(a),i(!1)})};return console.log("payment date for payment amount ...",N),e.jsxs(e.Fragment,{children:[R&&e.jsx(ee,{}),e.jsx("div",{className:"h-auto bg-[#FDFCFE] flex flex-row flex-wrap justify-center items-center p-3",children:e.jsxs("div",{className:"bg-white shadow-xl rounded-tl-[44px]  h-full sm:w-1/2 lg:w-1/3 w-full rounded-xl",children:[e.jsx("div",{className:"bg-[#5846BE] h-32 w-full mx-auto rounded-br-[68px] rounded-tl-[44px]  opacity-90",children:e.jsxs("div",{className:"p-4 pt-12",children:[e.jsx("h1",{className:"text-gray-50 font-bold capitalize text-2xl",children:"Toll Details"}),e.jsx("h1",{className:"text-gray-50 capitalize text-[12px]",children:"Budgeting Essentials: Toll Rent Payment"})]})}),e.jsxs("div",{className:"p-3",children:[e.jsxs("div",{className:"bg-[#EDEDF4] shadow-lg rounded-lg p-4 text-grey-500 mt-3",children:[e.jsxs("p",{class:"text-md text-center font-semibold ",children:["Toll No. : ",e.jsx("span",{children:o(t==null?void 0:t.toll_no)})]}),e.jsxs("div",{class:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-2 ",children:[e.jsx("div",{className:" text-gray-600 text-xs font-semibold",children:"Payable amount"}),e.jsxs("div",{className:" text-gray-700 text-xs bg-white px-2 ",children:["Rs. ",o(j)]})]}),e.jsxs("div",{class:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-2 ",children:[e.jsx("div",{className:" text-gray-600 text-xs font-semibold",children:"Payment upto"}),e.jsx("div",{className:" text-gray-700 text-xs bg-white px-2",children:o(t==null?void 0:t.payment_upto)})]}),e.jsxs("div",{className:"bg-white p-2 mt-2",children:[e.jsxs("div",{class:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-2 ",children:[e.jsx("div",{className:" text-gray-600 text-xs font-semibold",children:"Payment Mode"}),e.jsxs("select",{...r.getFieldProps("paymentMode"),className:"form-control block w-full px-3 py-0.5 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer text-xs",value:c,onChange:G,children:[e.jsx("option",{children:"Select"}),e.jsx("option",{value:"ONLINE",children:"ONLINE"}),e.jsx("option",{value:"CASH",children:"CASH"})]})]}),e.jsxs("div",{class:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-2 ",children:[e.jsx("div",{className:" text-gray-600 text-xs font-semibold",children:"Payment From"}),e.jsx("div",{className:" text-gray-700 text-xs bg-white px-2",children:o(f)})]}),e.jsxs("div",{class:"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-2 ",children:[e.jsx("div",{className:" text-gray-600 text-xs font-semibold",children:"Payment To"}),e.jsx("div",{className:" text-gray-700 text-xs bg-white px-2",children:o(b)})]}),e.jsx("div",{class:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-2 ",children:e.jsx("div",{className:" text-gray-600 text-xs mx-auto",children:e.jsx("button",{className:"bg-amber-400 px-4 py-1 shadow-lg",onClick:Q,children:"Select date"})})})]}),e.jsxs("form",{onSubmit:r.handleSubmit,onChange:Y,children:[e.jsx("div",{className:"flex space-x-2 py-1  ",children:e.jsxs(_,{isOpen:V,onRequestClose:w,style:te,contentLabel:"Example Modal",children:[e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs("div",{children:[e.jsx("p",{className:"capitalize text-xs",children:"date from"}),e.jsx("input",{type:"date",min:t==null?void 0:t.payment_upto,name:"fromDate",className:"px-2 text-gray-800 border border-gray-300 rounded-sm",onChange:r.handleChange,value:r.values.fromDate})]}),e.jsxs("div",{children:[e.jsx("p",{className:"capitalize text-xs",children:"date upto"}),e.jsx("input",{type:"date",name:"uptoDate",className:"px-2 text-gray-800 border border-gray-300 rounded-sm",onChange:r.handleChange,value:r.values.uptoDate})]})]}),e.jsx("div",{className:"mt-1 text-center",children:e.jsx("button",{className:"text-xs border bg-blue-500 py-1 px-2",onClick:$,children:"Confirm"})})]})}),e.jsx("div",{className:"flex space-x-1 py-1"}),j&&e.jsx("div",{className:"",children:e.jsx("button",{type:"submit",className:"bg-green-500 text-gray-50 mt-1 py-2 px-2 rounded-sm capitalize text-xs w-full",children:"Pay Now"})})]}),N==!0&&e.jsx("div",{className:"text-center",children:e.jsx("button",{className:"bg-indigo-500 text-gray-50 mt-2 py-2 px-2 rounded-sm capitalize text-xs w-full",onClick:()=>T("/toll-payReceipt/".concat(t==null?void 0:t.id)),children:"view receipt"})})]}),e.jsx("div",{class:"bg-[#EDEDF4] shadow-lg rounded-lg  w-full mt-4",children:e.jsx("div",{children:e.jsxs("ul",{children:[e.jsxs("li",{className:"p-2 px-5 text-xs text-gray-600 font-semibold capitalize  border-b shadow-sm",children:["vendor Name :",e.jsx("span",{className:"px-4 text-xs text-gray-500 capitalize",children:o(t==null?void 0:t.vendor_name)})]}),e.jsxs("li",{className:"p-2 px-5 text-xs text-gray-600 font-semibold capitalize  border-b shadow-sm",children:["Address :",e.jsx("span",{className:"px-4 text-xs text-gray-500 capitalize",children:o(t==null?void 0:t.address)})]}),e.jsxs("li",{className:"p-2 px-5 text-xs text-gray-600 font-semibold capitalize  border-b shadow-sm",children:["Circle :",e.jsx("span",{className:"px-4 text-xs text-gray-500 capitalize",children:o(t==null?void 0:t.circle_name)})]}),e.jsxs("li",{className:"p-2 px-5 text-xs text-gray-600 font-semibold capitalize  border-b shadow-sm",children:["market :",e.jsx("span",{className:"px-4 text-xs text-gray-500 capitalize",children:o(t==null?void 0:t.market_name)})]}),e.jsxs("li",{className:"p-2 px-5 text-xs text-gray-600 font-semibold capitalize  border-b shadow-sm",children:["Rate :",e.jsx("span",{className:"px-4 text-xs text-gray-500 capitalize",children:o(t==null?void 0:t.rate)})]}),e.jsxs("li",{className:"p-2 px-5 text-xs text-gray-600 font-semibold capitalize  border-b shadow-sm",children:["Last Payment date :",e.jsx("span",{className:"px-4 text-xs text-gray-500 capitalize",children:o(t==null?void 0:t.last_payment_date)})]}),e.jsxs("li",{className:"p-2 px-5 text-xs text-gray-600 font-semibold capitalize  border-b shadow-sm",children:["Last payment amt. :",e.jsx("span",{className:"px-4 text-xs text-gray-500 capitalize",children:o(t==null?void 0:t.last_payment_amount)})]})]})})})]})]})})]})}export{ce as default};
