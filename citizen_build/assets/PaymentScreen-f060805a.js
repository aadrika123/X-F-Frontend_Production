import{u as h,a as f,r,A as j,c4 as p,j as s,c9 as N}from"./index-f9255818.js";function y(){var a,d,i;const{paymentid:c,wrkflowId:l}=h(),{getPaymentsuccessDetails:o}=N();console.log("id..in payment screen",c),console.log("workflow id..in payment screen",l);const n=f(),[e,m]=r.useState();r.useEffect(()=>{x()},[]);const x=()=>{const g={paymentId:c,workflowId:l};j.post(`${o}`,g,p()).then(function(t){console.log("payment data",t),m(t.data.data)}).catch(function(t){console.log("errorrr.... ",t)})};return console.log("payment details",e),s.jsx(s.Fragment,{children:s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1  border p-8 h-screen w-full  mt-24",children:s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 bg-gray-50 w-[32rem] h-[32rem] container mx-auto  shadow-2xl z-50 opacity-100",children:[s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1"}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1",children:s.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/5610/5610944.png",className:"h-20 mx-auto opacity-75"})}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 ",children:s.jsx("h1",{className:"text-center text-2xl  text-green-500",children:"Payment Successful"})}),s.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 p-4 pt-8",children:[s.jsxs("div",{className:"flex px-4",children:[s.jsx("div",{className:"flex-1",children:s.jsx("h1",{className:"text-gray-500 font-semibold text-md",children:"Payment Mode"})}),s.jsx("div",{className:"flex-1",children:s.jsx("h1",{className:"float-right text-gray-500 font-semibold text-md",children:(a=e==null?void 0:e.payment_details)==null?void 0:a.paymentMode})})]}),s.jsxs("div",{className:"flex px-4 pt-4",children:[s.jsx("div",{className:"flex-1",children:s.jsx("h1",{className:"text-gray-600 font-bold text-md",children:"Amount Paid"})}),s.jsx("div",{className:"flex-1",children:s.jsx("h1",{className:"float-right text-gray-600 font-bold text-md",children:(d=e==null?void 0:e.payment_details)==null?void 0:d.amount})})]}),s.jsxs("div",{className:"flex px-4 pt-4",children:[s.jsx("div",{className:"flex-1",children:s.jsx("h1",{className:"text-gray-500 font-semibold text-md",children:"Transaction No"})}),s.jsx("div",{className:"flex-1",children:s.jsx("h1",{className:"float-right text-gray-500 font-semibold text-md",children:(i=e==null?void 0:e.payment_details)==null?void 0:i.transactionNo})})]})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mb-4",children:s.jsx("div",{className:"",children:s.jsx("div",{className:"text-center",children:s.jsx("button",{className:"text-md bg-indigo-500 text-white px-4 py-2 text-center",onClick:()=>n(`/advtPaymentReceipt/${c}/${l}`),children:"View Receipt"})})})})]})})})}export{y as default};
