import{r,j as e,C as d,A as p,f as m}from"./index-630682df.js";import{b as f}from"./brief-77d733cf.js";function g(){const[l,s]=r.useState(!1),{api_getTranscationHistory:x}=m(),[a,c]=r.useState();let n=window.localStorage.getItem("token");const o=()=>{s(!0),p.get(x,{headers:{Authorization:`Bearer ${n}`,Accept:"application/json"}}).then(function(t){console.log("all transcation list----- ",t.data.data),c(t.data.data),s(!1)}).catch(function(t){console.log(t),s(!1)})};return r.useEffect(()=>{o()},[]),e.jsxs(e.Fragment,{children:[l&&e.jsx("div",{className:"w-full z-10 absolute mx-auto text-center flex justify-center items-center top-1/2",children:e.jsx("span",{className:"inline",children:e.jsx(d,{visible:!0,height:"120",width:"120",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 mx-auto  w-full",children:e.jsxs("div",{className:"col-span-10 bg-gray-50 p-4",children:[e.jsx("div",{className:"flex flex-row",children:e.jsxs("h1",{className:"px-1 font-semibold font-serif text-2xl mt-4",children:[e.jsx("img",{src:f,alt:"pin",className:"w-8 inline"}),"All Transcation Related To Property"]})}),e.jsxs("table",{className:"min-w-full leading-normal mt-10",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-green-50 text-gray-600",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"#"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Saf No."}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Transcation No."}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Transcation Mode"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Transcation Date"}),e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-left text-xs uppercase text-left",children:"Amount"})]})}),e.jsx("tbody",{className:"text-sm",children:e.jsx(e.Fragment,{children:a==null?void 0:a.map((t,i)=>e.jsxs("tr",{className:"bg-white shadow-lg border-b border-gray-200",children:[e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:i+1}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.saf_no}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.tran_no}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.payment_mode}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.tran_date}),e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:t.amount})]}))})})]})]})})]})}export{g as default};
