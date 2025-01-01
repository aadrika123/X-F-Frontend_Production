import{r as n,q as I,h as H,i as O,c as M,b as d,d as R,g as l,j as e,l as W,M as j,e as x,f as N,A as V}from"./index-7796fcbb.js";const B={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"",border:"none"}},$=()=>{const[f,c]=n.useState(!1),[v,i]=n.useState(!1),[s,w]=n.useState(),[Y,A]=n.useState(),{notify:m}=n.useContext(I),[h,u]=n.useState("");H("Apply Hoarding ");const S={userId:"",agencyName:"",hoardingType:"",allotmentDate:"",from:"",to:"",rate:""};O();const{api_addagency:C,get_collectorList:T}=V(),q=M().shape({agencyName:d().required("Agency Name is required"),hoardingType:d().required("Hoarding Type is required"),allotmentDate:d().required("Allotment Date is required"),from:d().required(" required"),to:d().required(" required"),rate:d().required(" required")}),D=t=>{i(!0),F(t),console.log(t)};function F(t){let r={userId:t==null?void 0:t.userId,agencyName:t.agencyName,hoardingType:t.hoardingType,allotmentDate:t.allotmentDate,from:t.from,to:t.to,rate:t.rate};x.post(C,r,N()).then(o=>{var g,b,y;o.data.status===!0?(w((g=o==null?void 0:o.data)==null?void 0:g.data),i(!1),console.log("Data Really Saved",o),c(!0)):(i(!1),console.log("False While hoarding Apply",o),u(" "+((b=o==null?void 0:o.data)==null?void 0:b.message)),m((y=o==null?void 0:o.data)==null?void 0:y.message,"error"))}).catch(o=>{i(!1),u("Exception While Apply"),m("Something Went Wrong","error"),console.log("Exception while Submitting the form",o)})}const p=()=>{x.post(T,{},N()).then(t=>{var r,o;((r=t==null?void 0:t.data)==null?void 0:r.status)==!0&&A((o=t==null?void 0:t.data)==null?void 0:o.data)})};n.useEffect(()=>{p()},[]);const k=t=>{let r=t.target.name,o=t.target.value;r==="userId"&&(a.setFieldValue("userId",o),p())},a=R({initialValues:S,validationSchema:q,onSubmit:D}),E=()=>{},L=()=>{c(!1)};return l("div",{children:[v&&e(W,{}),e("div",{className:"grid grid-cols-12 p-5",children:l("div",{className:"col-span-10 ",children:[l("p",{className:"border p-2 bg-indigo-500 text-gray-200 rounded shadow-md",children:["You are applying for"," ",e("span",{className:"font-semibold",children:"Hoarding"})]}),e("div",{className:"bg-white rounded-md my-2 shadow-lg block",children:e("div",{className:"my-3 p-4",children:l("form",{onSubmit:a.handleSubmit,onChange:k,children:[l("div",{className:"mb-4",children:[l("label",{htmlFor:"agencyName",className:"block",children:[e("small",{className:"mt-1 text-sm font-semibold text-red-600 inline",children:"*"}),"Agency Name"]}),l("select",{id:"agencyName",name:"agencyName",className:"px-4 py-2 border rounded w-full",value:a.values.agencyName,onChange:a.handleChange,children:[e("option",{value:"",disabled:!0,children:"Select Agency Name"}),e("option",{value:"agency1",children:"Agency 1"}),e("option",{value:"agency2",children:"Agency 2"})]}),a.errors.agencyName&&a.touched.agencyName&&e("div",{className:"text-red-500 text-xs",children:a.errors.agencyName})]}),l("div",{className:"mb-4",children:[l("label",{htmlFor:"hoardingType",className:"block",children:[e("small",{className:"mt-1 text-sm font-semibold text-red-600 inline",children:"*"}),"Hoarding Type"]}),l("select",{id:"hoardingType",name:"hoardingType",className:"px-4 py-2 border rounded w-full",value:a.values.hoardingType,onChange:a.handleChange,children:[e("option",{value:"",disabled:!0,children:"Select Hoarding Type"}),e("option",{value:"type1",children:"Type 1"}),e("option",{value:"type2",children:"Type 2"})]}),a.errors.hoardingType&&a.touched.hoardingType&&e("div",{className:"text-red-500 text-xs",children:a.errors.hoardingType})]}),l("div",{className:"mb-4",children:[l("label",{htmlFor:"allotmentDate",className:"block",children:[e("small",{className:"mt-1 text-sm font-semibold text-red-600 inline",children:"*"}),"Allotment Date"]}),e("input",{type:"date",id:"allotmentDate",name:"allotmentDate",className:"px-4 py-2 border rounded w-full",placeholder:"Enter allotment date",value:a.values.allotmentDate,onChange:a.handleChange}),a.errors.allotmentDate&&a.touched.allotmentDate&&e("div",{className:"text-red-500 text-xs",children:a.errors.allotmentDate})]}),l("div",{className:"mb-4",children:[l("label",{htmlFor:"from",className:"block",children:[e("small",{className:"mt-1 text-sm font-semibold text-red-600 inline",children:"*"}),"From"]}),e("input",{type:"date",id:"from",name:"from",className:"px-4 py-2 border rounded w-full",placeholder:"Enter 'from' value",value:a.values.from,onChange:a.handleChange}),a.errors.from&&a.touched.from&&e("div",{className:"text-red-500 text-xs",children:a.errors.from})]}),l("div",{className:"mb-4",children:[l("label",{htmlFor:"to",className:"block",children:[e("small",{className:"mt-1 text-sm font-semibold text-red-600 inline",children:"*"}),"To"]}),e("input",{type:"date",id:"to",name:"to",className:"px-4 py-2 border rounded w-full",placeholder:"Enter 'to' value",value:a.values.to,onChange:a.handleChange}),a.errors.to&&a.touched.to&&e("div",{className:"text-red-500 text-xs",children:a.errors.to})]}),l("div",{className:"mb-4",children:[l("label",{htmlFor:"rate",className:"block",children:[e("small",{className:"mt-1 text-sm font-semibold text-red-600 inline",children:"*"}),"Rate"]}),e("textarea",{id:"rate",name:"rate",className:"px-4 py-2 border rounded w-full",placeholder:"Enter rate",value:a.values.rate,onChange:a.handleChange}),a.errors.rate&&a.touched.rate&&e("div",{className:"text-red-500 text-xs",children:a.errors.rate})]}),e("div",{className:"col-span-4 mb-3",children:e("div",{className:"text-center text-red-600 font-semibold",children:h&&`Error: ${h}`})}),e("div",{className:"text-center",children:e("button",{type:"submit",className:"bg-indigo-600 text-white font-medium text-sm leading-tight hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out px-12 py-2.5 rounded",children:"Submit"})})]})})})]})}),e(j,{isOpen:f,onAfterOpen:E,onRequestClose:L,style:B,contentLabel:"Example Modal",children:e("div",{className:"bg-white shadow-2xl border border-blue-200 rounded-md ",children:e("div",{className:"block p-4 md:py-6 shadow-lg bg-indigo-100 border border-indigo-300 rounded  mx-auto ",children:l("div",{className:"text-center space-y-4",children:[e("p",{className:"font-semibold",children:"Your Application Has been Submitted Successfully."}),l("p",{children:[e("span",{className:"text-sm",children:" Application No: "}),e("span",{className:"text-indigo-600 font-semibold",children:(s==null?void 0:s.applicationNo)||"N/A"})]}),e("button",{onClick:()=>{window.location.reload()},className:"bg-white hover:bg-indigo-600 hover:text-white text-indigo-700  border border-indigo-600 mx-2 rounded-sm text-sm px-4 py-2 shadow-xl",children:"OK"})]})})})})]})};export{$ as default};
