import{r as n,c as M,d as H,b as E,A as y,t as I,j as e,o as A,p as O,aS as $,a6 as U,f as T,aO as Y,Y as D,_ as G,Z as J,$ as h,aT as Q}from"./index-ecfe615e.js";/* empty css              */import{a as Z}from"./index.esm-38f4f0f3.js";function te(s){const{api_safindependentComment:p}=T(),[k,b]=n.useState(!1),[_,N]=n.useState(!1),[F,v]=n.useState(null);n.useState(),console.log("props..applicationIdfun",s.applicationIdfun),console.log("props..workflowIdfun",s.workflowIdfun);let w=s.applicationId;s.workflowId;const S=M({message:H().required("Enter message")}),c=E({initialValues:{message:""},onSubmit:d=>{C(d)},validationSchema:S}),C=d=>{console.log("post data...",d),b(!0);let x={applicationId:w,comment:d.message};console.log("before citizen comment...",x),y.post(p,x,I()).then(function(m){var j;console.log("send msg.....",m),(j=m==null?void 0:m.data)!=null&&j.status?(s==null||s.notify("Message successfully sent !"),s==null||s.closeModalFun()):i(!0,"Error occured. Please try again later."),b(!0)}).catch(m=>{console.log("err",m),i(!0,"Error occured. Please try again later."),s==null||s.closeModalFun()})},i=(d,x)=>{v(x),N(d)};return e.jsxs(e.Fragment,{children:[k&&e.jsx(A,{}),_&&e.jsx(O,{activateBottomErrorCard:i,errorTitle:F}),e.jsxs("div",{className:"p-4 md:w-[25vw] w-full",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-initial",children:e.jsx("h1",{className:"text-gray-900 text-xl font-semibold title-font mb-4 flex items-center poppins",children:e.jsxs("p",{className:" font-sans flex items-center",children:[" ",e.jsx($,{fontSize:20}),"   Send Message"]})})}),e.jsx("div",{className:"flex-1 ",children:e.jsx("button",{className:"float-right hover:scale-105 z-10 cursor-pointer",onClick:()=>s==null?void 0:s.closeModalFun(),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-8 h-8 text-red-500",children:e.jsx("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z","clip-rule":"evenodd"})})})})]}),e.jsx("div",{className:" font-sans flex items-center text-sm",children:" You can send message to the verification team regarding your application if you have any query."}),e.jsx("form",{onSubmit:c.handleSubmit,children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-4",children:[e.jsx("textarea",{name:"message",className:"bg-white shadow-lg px-2 poppins rounded-md text-gray-700 border-2 border-gray-300",value:c.values.message,onChange:c.handleChange}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:c.touched.message&&c.errors.message?c.errors.message:null}),e.jsx("div",{className:"flex mt-2",children:e.jsx("div",{className:"flex-1 mx-auto mt-5",children:e.jsxs("button",{type:"submit",className:"bg-indigo-500 hover:bg-indigo-600 text-white poppins transition-all duration-200 ease-in-out rounded-sm px-6 py-[0.2rem] flex items-center",children:["Send  ",e.jsx(U,{})]})})})]})})]})]})}function ae(s){const p=s==null?void 0:s.id;n.useState(!1);const[k,b]=n.useState(),[_,N]=n.useState(),[F,v]=n.useState(),[w,S]=n.useState(),[a,c]=n.useState(),[C,i]=n.useState(!1),[d,x]=n.useState(),[m,j]=n.useState(!1),[W,z]=n.useState(null),{api_postWaterHarvestingData:q,api_getHoldingDetails:L,api_postWaterHarvestindDocCode:P}=T(),B=M({dateOfCompletion:H().required("Select date of completion"),rwhImage:Y().required("Upload image")}),r=E({initialValues:{isWaterHarvestingBefore:"",dateOfCompletion:"",rwhImage:""},onSubmit:(t,l)=>{if(console.log("waterHarvesting ",t),!D(w))return r.setFieldValue("rwhImage","").then(()=>{u(!0,"Check your file size")}),!0;R(t)},validationSchema:B});n.useEffect(()=>{i(!0),y.post(`${P}`,{},I()).then(function(t){var l,o,g,f;console.log("water harvesting doc code => ",t),(l=t==null?void 0:t.data)!=null&&l.status?x((f=(g=(o=t==null?void 0:t.data)==null?void 0:o.data)==null?void 0:g.masters[0])==null?void 0:f.documentCode):u(!0,"Error occurred in getting doc code. Please try again later."),i(!1)}).catch(function(t){console.log("water harvesting doc code errorrr.... ",t),u(!0,"Error occurred in getting doc code. Please try again later."),i(!1)})},[]),n.useEffect(()=>{i(!0),y.post(L,{propertyId:p},I()).then(t=>{var l;console.log("getting harvesting details => ",t),c((l=t==null?void 0:t.data)==null?void 0:l.data),i(!1)}).catch(t=>{console.log("getting harvesting details error => ",t),i(!1)})},[]);const R=t=>{i(!0);let l=new FormData;l.append("dateOfCompletion",t.dateOfCompletion),l.append("document",w),l.append("docCode",d),l.append("propertyId",p),l.append("ulbId",a==null?void 0:a.ulb_id),setTimeout(()=>{i(!1)},1e4),y.post(`${q}`,l,G()).then(function(o){var g,f;((g=o==null?void 0:o.data)==null?void 0:g.status)==!0?(console.log("response after submitting water harvesting data",o),J.success("Water Harvesting Applied Successfully !!"),i(!1),s.submitHarvesting((f=o==null?void 0:o.data)==null?void 0:f.data)):u(!0,"Error occurred in submitting water harvesting application. Please try again later."),i(!1)}).catch(function(o){i(!1),u(!0,"Error occurred in submitting water harvesting application. Please try again later.")})},V=t=>{const l=t.target.name;if(l=="rwhImage"){let o=t.target.files[0];console.log(`${l} file in change => `,o),r.setFieldValue(l,o),S(t.target.files[0])}if(l=="rwhImageLeft"){let o=t.target.files;b(t.target.files[0]),console.log("file in change => ",o)}if(l=="rwhImageTop"){let o=t.target.files;N(t.target.files[0]),console.log("file in change => ",o)}if(l=="rwhImageRight"){let o=t.target.files;v(t.target.files[0]),console.log("file in change => ",o)}},u=(t,l)=>{z(l),j(t)};return e.jsxs(e.Fragment,{children:[C&&e.jsx(A,{}),m&&e.jsx(O,{activateBottomErrorCard:u,errorTitle:W}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-500 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-extrabold text-base sm:text-[30px]",children:e.jsx(Z,{className:"inline mr-2"})}),e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-base sm:text-lg",children:"Rain Water Harvesting Form"})]})}),e.jsx("div",{className:"poppins my-2 2xl:font-base text-sm",children:"As per the provisions of Notification Number: 01/विविध/रा.क.नि./10/2016/न.वि.-5350, Dated: 24-09-2016, issued by the UD&HD, GoJ, if any property or asset is located in an area of 300 square meters (3228 sqft) or more and does not adopt the technique or structure for rainwater harvesting, then a penalty will be imposed equal to 1.5 times of the total payable property tax and collected as the rainwater tax."}),e.jsxs("div",{className:"p-4 w-full md:py-6 rounded-lg shadow-lg bg-white mx-auto flex flex-wrap gap-x-20 top-14 mb-6",children:[(a==null?void 0:a.pt_no)==""&&(a==null?void 0:a.pt_no)==null?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm poppins",children:"Property Tax No.:    "}),e.jsx("span",{className:"font-semibold text-sm poppins",children:h(a==null?void 0:a.pt_no)})]})}):e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm poppins",children:"Holding No.:    "}),e.jsx("span",{className:"font-semibold text-sm poppins",children:h((a==null?void 0:a.new_holding_no)==""?a==null?void 0:a.holding_no:a==null?void 0:a.new_holding_no)})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm poppins",children:"Property Tax No.:    "}),e.jsx("span",{className:"font-semibold text-sm poppins",children:h(a==null?void 0:a.pt_no)})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm poppins",children:"Old Ward No.:     "}),e.jsx("span",{className:"font-semibold text-sm poppins",children:h(a==null?void 0:a.old_ward_no)})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm poppins",children:"New Ward No.:     "}),e.jsx("span",{className:"font-semibold text-sm poppins",children:h(a==null?void 0:a.new_ward_no)})]})]}),e.jsx("div",{className:"block p-4 w-full 2xl:py-6 py-3 rounded-lg shadow-lg bg-white mx-auto  top-14",children:e.jsxs("form",{onSubmit:r.handleSubmit,onChange:r.handleChange,children:[e.jsxs("div",{className:"grid grid-cols-12 gap-2",children:[e.jsxs("div",{className:"col-span-10 flex flex-row flex-wrap items-center gap-4",children:[e.jsxs("label",{className:"form-label mb-1 text-gray-600 text-sm font-semibold",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Date of Completion of Water Harvesting Structure"]}),e.jsx("input",{type:"date",name:"dateOfCompletion",className:"form-control px-3 py-1.5 2xl:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md poppins",placeholder:"",value:r.values.dateOfCompletion,onChange:r.handleChange}),e.jsx("p",{className:"text-red-500 text-xs poppins",children:r.touched.dateOfCompletion&&r.errors.dateOfCompletion?r.errors.dateOfCompletion:null})]}),e.jsxs("div",{className:"2xl:col-span-10 col-span-10 flex flex-row flex-wrap items-center gap-2 2xl:gap-4 poppins",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline",children:"*"}),"Rain Water Harvesting Image"]}),e.jsx("input",{accept:".jpg,.jpeg",type:"file",name:"rwhImage",className:"form-control px-2 py-1 2xl:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md poppins",placeholder:"",value:r.values.rwhImage,onChange:V}),e.jsx("p",{className:"text-red-500 text-xs poppins",children:r.touched.rwhImage&&r.errors.rwhImage?r.errors.rwhImage:null})]})]}),e.jsxs("div",{className:"col-span-10 mt-4 flex justify-between bg-transparent",children:[e.jsx("button",{onClick:()=>s.closePopUp(),type:"button",className:" px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out poppins",children:"Close"}),e.jsx("button",{type:"submit",className:" px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out poppins",children:"Submit"})]})]})})]})}const se=s=>e.jsx(e.Fragment,{children:e.jsxs("div",{class:"p-6 text-center",children:[e.jsxs("div",{className:"w-full flex h-10",children:[" ",e.jsx("span",{className:"mx-auto",children:e.jsx(Q,{size:30})})]}),e.jsx("h3",{class:"mb-5 2xl:text-lg text-md font-normal text-gray-500",children:"Are you sure want to delete ?"}),e.jsxs("div",{children:[e.jsx("button",{type:"button",class:"text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",onClick:()=>s==null?void 0:s.deleteSafFun(),children:"Delete"}),e.jsx("button",{onClick:s==null?void 0:s.closeModal,type:"button",class:"text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",children:"Cancel"})]})]})});export{te as C,se as D,ae as W};
