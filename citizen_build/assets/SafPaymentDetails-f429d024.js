import{u as i,b1 as m,r as l,j as e,C as f,A as b,bG as h}from"./index-12835ad9.js";import{T as y}from"./TopTabs-9c94e2f5.js";function N(){const{id:a}=i(),{api_PropTransactionById:c}=h(),{header:d}=m(),[p,r]=l.useState(!1),[s,o]=l.useState();console.log("SAF id issssssssss",a);const n=()=>{r(!0),b.post(c,{safId:a},d).then(function(t){var x;console.log("saf transcation list----- ",t),o((x=t==null?void 0:t.data)==null?void 0:x.data),r(!1)}).catch(function(t){console.log(t),r(!1)})};return l.useEffect(()=>{n()},[]),e.jsxs(e.Fragment,{children:[p&&e.jsx("div",{className:"w-full z-10 absolute mx-auto text-center flex justify-center items-center top-1/2",children:e.jsx("span",{className:"inline",children:e.jsx(f,{visible:!0,height:"120",width:"120",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12  lg:grid-cols-12 container mx-auto",children:e.jsxs("div",{className:"col-span-12 bg-gray-50 p-4",children:[e.jsx("div",{className:"flex flex-row justify-center",children:e.jsx("h1",{className:"px-2 font-semibold text-center text-gray-600 font-serif py-2 xl md:text-3xl mt-2",children:"PAYMENT DETAILS"})}),e.jsx(y,{safId:a,safNo:"",active:"payment",application:!1}),e.jsxs("table",{className:"min-w-full leading-normal mt-10",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-green-50 text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Status"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Saf No."}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"From finanacial year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Upto finanacial year"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"From Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Upto Quarter"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Transcation No."}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Transcation Date"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Penalty Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Discount Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Payable Amount"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Demand Amount"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:(s==null?void 0:s.length)!=0&&(s==null?void 0:s.map(t=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:"1"}),e.jsx("td",{className:`px-2 py-2 text-sm text-left font-semibold ${t.verify_status==1?"text-green-500":"text-red-400"}`,children:t.verify_status==1?"Paid":"Failed"}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.saf_no}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.from_fyear}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.upto_fyear}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.from_qtr}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.upto_qtr}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.tran_no}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.tran_date}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.amount}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.penalty_amt}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.discount_amt}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.payable_amt}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.demand_amt})]})))})})]}),(s==null?void 0:s.length)==0&&e.jsx("div",{className:"text-red-500 w-full text-center py-4 font-semibold text-xl",children:"No Payment Found"})]})})]})}export{N as default};
