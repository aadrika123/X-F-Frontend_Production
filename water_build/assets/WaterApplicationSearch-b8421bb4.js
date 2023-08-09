import{r as n,W as H,a1 as M,o as O,q as w,s as _,u as z,f as U,A as G,a as l,F as I,j as e,B as J,a0 as K}from"./index-111426c8.js";function Z(){var x;const[t,S]=n.useState(),[Q,c]=n.useState(!1),[A,h]=n.useState(),[B,i]=n.useState(),[k,d]=n.useState(!1),[p,C]=n.useState(1);n.useState("");const[u,E]=n.useState(5),[g,F]=n.useState(""),[q,m]=n.useState(0),{api_waterSearchActiveApplication:j,header:X}=H();M("Water Application Search");const P=O({filterBy:w().required("This is a required field !"),entry:w().required("This is a required field !")}),r=_({initialValues:{filterBy:"",entry:""},onSubmit:a=>{f(a)},validationSchema:P}),R=z();n.useEffect(()=>{q>0&&f()},[p,u]);const T=()=>{window.history.pushState(null,"",`/water/waterViewApplication/${r.values.filterBy}/${r.values.parameter} `)},f=a=>{d(!0),c(!1);const s={filterBy:a?a.filterBy:r.values.filterBy,parameter:a?a.entry:r.values.entry,pages:u,page:p,search:g};console.log("before fetch applied application..",s),U.post(j,s,G()).then(o=>{var b,N,y,v;console.log("applied application. in ...",(N=(b=o==null?void 0:o.data)==null?void 0:b.data)==null?void 0:N.data),(y=o==null?void 0:o.data)!=null&&y.status?(S((v=o==null?void 0:o.data)==null?void 0:v.data),c(!0)):(h(o.data.message),notify("No data found","error")),d(!1)}).catch(o=>{console.log("Error while fetching Filter Data",o),c(!1),d(!1)})};console.log("readymadeListData.data",t==null?void 0:t.data);const V=a=>a=="&laquo; Previous"?"<< Prev":a=="Next &raquo;"?">> Next":a,W=a=>{r.values.filterBy=a.target.value,a.target.value=="holdingNo"&&i("Enter Holding No."),a.target.value=="safNo"&&i("Enter SAF No."),a.target.value=="newConnection"&&i("Enter Application No."),a.target.value=="regularization"&&i("Enter Application No."),a.target.value=="name"&&i("Enter Owner Name"),a.target.value=="mobileNo"&&i("Enter Mobile No.")},$=()=>{h(),r.values&&i(r.values.filterBy)};return console.log("readymadeListData.data",t==null?void 0:t.data),l(I,{children:[k&&e(J,{}),l("div",{className:"border shadow-xl bg-white mt-6",children:[e("div",{className:"flex ml-5 mt-2 ",children:e("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:"Search Water Applied Applications"})}),e("form",{onChange:$,onSubmit:r.handleSubmit,children:l("div",{className:"flex justify-center space-x-8 my-5 m-10",children:[l("div",{children:[l("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Application Type",e("span",{className:"text-red-500",children:"*"})]}),l("select",{name:"filterBy",onChange:W,className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e("option",{value:"",children:"Select"}),e("option",{value:"newConnection",children:"New Connection"}),e("option",{value:"regularization",children:"Regularization"}),e("option",{value:"name",children:"Name"}),e("option",{value:"safNo",children:"SAF No"}),e("option",{value:"holdingNo",children:"Holding No"})]}),e("p",{className:"text-red-500 text-xs",children:r.touched.filterBy&&r.errors.filterBy?r.errors.filterBy:null})]}),l("div",{children:[l("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:[B||"Select Application Type"," ",e("span",{className:"text-red-500",children:"*"})]}),e("input",{type:"text",name:"entry",onChange:r.handleChange,className:" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e("p",{className:"text-red-500 text-xs",children:r.touched.entry&&r.errors.entry?r.errors.entry:null})]}),e("div",{className:"mt-4",children:l("button",{type:"submit",className:"w-full border border-indigo-600 bg-indigo-600 hover:bg-indigo-500 text-white hover:text-black shadow-lg rounded-sm text-base font-semibold px-5 m-3 py-1",children:[" ",l("p",{className:"flex",children:[" ",l("span",{className:"mt-1 mr-2",children:[" ",e(K,{})," "]})," ","Search record"]})]})})]})}),e("div",{className:"flex justify-center text-red-600 mb-2 font-semibold",children:A}),t!=null&&t.data?l("div",{className:"relative overflow-x-auto sm:rounded-lg border shadow-md",children:[l("div",{className:"flex justify-between my-3 mx-5",children:[l("div",{className:"flex gap-3",children:[e("p",{children:"Show"}),l("select",{onChange:a=>(m(s=>s+1),E(a.target.value)),name:"",id:"",className:"border rounded shadow w-24",children:[e("option",{value:"5",children:"5 Records"}),e("option",{value:"10",children:"10 Records"}),e("option",{value:"20",children:"20 Records"}),e("option",{value:"30",children:"30 Records"})]})]}),l("div",{className:"flex gap-3",children:[e("p",{children:"Search"}),e("input",{type:"text",name:"search",value:g,onChange:a=>F(a.target.value),className:"border rounded shadow w-40"})]})]}),l("table",{className:"w-full text-sm text-left text-gray-500 ",children:[e("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50",children:l("tr",{children:[e("th",{scope:"col",className:"px-6 py-3",children:e("div",{className:"flex items-center",children:" Ward No. "})}),e("th",{scope:"col",className:"px-6 py-3",children:"Application No"}),e("th",{scope:"col",className:"px-6 py-3",children:"Holding No"}),e("th",{scope:"col",className:"px-6 py-3",children:"Applicant Name"}),e("th",{scope:"col",className:"px-6 py-3",children:"Address"}),e("th",{scope:"col",className:"px-6 py-3",children:"Mobile No"}),e("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),e("tbody",{children:t&&t.data?t.data.map((a,s)=>l("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600",children:[e("td",{className:"w-4 p-4",children:l("div",{className:"flex items-center",children:[" ",a.ward_name]})}),e("td",{className:"px-6 py-4",children:a.application_no}),e("td",{className:"px-6 py-4",children:a.holding_no}),e("td",{className:"px-6 py-4",children:a.applicantname}),e("td",{className:"px-6 py-4",children:a.address}),e("td",{className:"px-6 py-4",children:a.mobileno}),e("td",{className:"px-6 py-4",children:e("button",{onClick:()=>{T(),R(`/waterViewApplication/${a==null?void 0:a.id}`)},className:"bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black",children:"View"})})]},s)):e("tr",{children:e("td",{colSpan:"8",children:"No data found"})})})]}),l("nav",{className:"block md:flex items-center md:justify-between text-center md:pt-4 m-5","aria-label":"Table navigation",children:[l("span",{className:"text-sm font-normal text-gray-500",children:["Showing ",l("span",{className:"font-semibold text-gray-900 dark:text-white",children:[t==null?void 0:t.from,"-",t==null?void 0:t.to]})," of"," ",e("span",{className:"font-semibold text-gray-900 dark:text-white",children:t==null?void 0:t.total})]}),e("ul",{className:"inline-flex items-center -space-x-px",children:(x=t==null?void 0:t.links)==null?void 0:x.map(a=>e("li",{children:e("p",{onClick:()=>{C(a==null?void 0:a.url.slice(-1)),m(s=>s+1)},className:`${(a==null?void 0:a.active)==!0?"bg-indigo-500 text-white":"bg-white text-gray-500"} px-3 py-2 leading-tight  border border-gray-300 hover:bg-indigo-100 hover:text-gray-700 cursor-pointer whitespace-nowrap`,children:V(a.label)})}))})]})]}):""]})]})}export{Z as default};
