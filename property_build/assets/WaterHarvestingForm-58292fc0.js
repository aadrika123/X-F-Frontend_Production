import{u as $,e as R,r as o,q as L,s as T,w as z,A as g,b as M,j as e,Y as V,H as Y,aO as J,J as m,g as Q,W as U,Q as G}from"./index-2e37e53a.js";import{d as K}from"./index.esm-a2de8798.js";import{A as X}from"./ApplicationSubmitScreen-e13e3e81.js";import{A as Z}from"./ApiHeader2-b363f7b8.js";import{B as D}from"./BottomErrorCard-9ffd1178.js";import"./index.esm-bbf93b69.js";import"./check-f4ca1ac8.js";/* empty css             */function ce(ee){var w;const l=$(),f=R();console.log("getting id => ",l==null?void 0:l.id),o.useState(!1),o.useState(),o.useState(),o.useState();const[u,h]=o.useState(null),[t,j]=o.useState();o.useState("");const[y,N]=o.useState(""),[v,b]=o.useState(!1),[S,C]=o.useState(),[x,te]=o.useState(0),[_,k]=o.useState(!1),[I,i]=o.useState(!1),[H,A]=o.useState(null),{api_postWaterHarvestindDocCode:F,api_postWaterHarvestingData:W,api_getHoldingDetails:O}=Q(),E=L({dateOfCompletion:T().required("This is a required field")}),r=z({initialValues:{isWaterHarvestingBefore:"",dateOfCompletion:"",rwhImage:""},onSubmit:(a,n)=>{if(console.log("waterHarvesting ",a),u!=null&&!U(u))return r.setFieldValue("rwhImage","").then(()=>{c(!0,"Check your file size"),h(null)}),!0;B(a)},validationSchema:E}),P=()=>{f(`/holdingPropertyDetails/${l==null?void 0:l.id}`)};o.useEffect(()=>{b(!1),i(!0),g.post(`${F}`,{},M()).then(function(a){var n,s,d,p;console.log("water harvesting doc code => ",a),(n=a==null?void 0:a.data)!=null&&n.status?C((p=(d=(s=a==null?void 0:a.data)==null?void 0:s.data)==null?void 0:d.masters[0])==null?void 0:p.documentCode):c(!0,"Error occured in submittion. Please try again later."),i(!1)}).catch(function(a){console.log("water harvesting doc code errorrr.... ",a),c(!0,"Error occured in submittion. Please try again later."),i(!1)})},[]),o.useEffect(()=>{i(!0);let a=window.localStorage.getItem("token");console.log("token at basic details is  get method...",a);const n={headers:{Authorization:`Bearer ${a}`,Accept:"application/json"}};g.post(O,{propertyId:l==null?void 0:l.id},n).then(s=>{var d;console.log("getting harvesting details => ",s),j((d=s==null?void 0:s.data)==null?void 0:d.data),i(!1)}).catch(s=>{console.log("getting harvesting details error => ",s),i(!1)})},[]);const B=a=>{i(!0);let n=new FormData;n.append("dateOfCompletion",a.dateOfCompletion),x==1&&n.append("document",u),x==1&&n.append("docCode",S),n.append("propertyId",l==null?void 0:l.id),n.append("ulbId",t==null?void 0:t.ulb_id),g.post(`${W}`,n,Z()).then(function(s){var d,p;((d=s==null?void 0:s.data)==null?void 0:d.status)==!0?(console.log("response after submitting water harvesting data",s),G.success("Water Harvesting Applied Successfully !!"),N((p=s==null?void 0:s.data)==null?void 0:p.data),b(!0)):c(!0,"Error occured in submitting water harvesting application. Please try again later."),i(!1)}).catch(s=>{i(!1),c(!0,"Error occured in submitting water harvesting application. Please try again later.")})},q=a=>{if(a.target.name=="rwhImage"){let s=a.target.files;h(a.target.files[0]),console.log("file in change => ",s)}},c=(a,n)=>{A(n),k(a)};return e.jsxs(e.Fragment,{children:[e.jsx(V,{position:"top-right",autoClose:2e3}),I&&e.jsx(Y,{}),_&&e.jsx(D,{activateBottomErrorCard:c,errorTitle:H}),e.jsx("div",{className:"2xl:mt-6 mt-3 bg-indigo-500 text-white flex flex-row md:justify-evenly items-center justify-center uppercase text-base poppins mb-4 shadow-md py-2 rounded-md",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-extrabold text-[30px]",children:e.jsx(K,{className:"inline mr-2"})}),e.jsx("span",{className:"font-semibold poppins 2xl:text-xl text-lg",children:"Rain Water Harvesting Form"})]})}),e.jsxs("div",{className:"poppins my-2 2xl:font-base text-sm",children:["As per the provisions of Notification Number: 01/विविध/रा.क.नि./10/2016/न.वि.-5350, Dated: 24-09-2016, issued by the ",(w=J())==null?void 0:w.brand_tag,", if any property or asset is located in an area of 300 square meters (3228 sqft) or more and does not adopt the technique or structure for rainwater harvesting, then a penalty will be imposed equal to 1.5 times of the total payable property tax and collected as the rainwater tax."]}),t!=null&&t.is_water_harvesting?e.jsx("div",{className:"animate__animated animate__fadeInUp w-full flex justify-center mt-2 items-center",children:e.jsx("div",{className:"bg-indigo-500 text-white rounded-md shadow-lg px-4 py-2",children:"You have already applied and your form is in workflow."})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"p-4 w-full md:py-6 rounded-lg shadow-lg bg-white mx-auto flex flex-wrap gap-x-20 top-14 mb-6",children:[(t==null?void 0:t.pt_no)==""&&(t==null?void 0:t.pt_no)==null?e.jsx(e.Fragment,{children:e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm poppins",children:"Property Tax No.:    "}),e.jsx("span",{className:"font-semibold text-sm poppins",children:m(t==null?void 0:t.pt_no)})]})}):e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm poppins",children:"Holding No.:    "}),e.jsx("span",{className:"font-semibold text-sm poppins",children:m(t==null?void 0:t.new_holding_no)})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm poppins",children:"Old Ward No.:     "}),e.jsx("span",{className:"font-semibold text-sm poppins",children:m(t==null?void 0:t.old_ward_no)})]}),e.jsxs("div",{className:"col-span-1",children:[e.jsx("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm poppins",children:"New Ward No.:     "}),e.jsx("span",{className:"font-semibold text-sm poppins",children:m(t==null?void 0:t.new_ward_no)})]})]}),e.jsx("div",{className:"block p-4 w-full 2xl:py-6 py-3 rounded-lg shadow-lg bg-white mx-auto  top-14",children:e.jsxs("form",{onSubmit:r.handleSubmit,onChange:r.handleChange,children:[e.jsxs("div",{className:"grid grid-cols-12 gap-2",children:[e.jsxs("div",{className:"col-span-10 flex flex-row flex-wrap items-center gap-4",children:[e.jsxs("label",{className:"form-label mb-1 text-gray-600 text-sm poppins",children:[e.jsx("small",{className:"block mt-1 text-sm font-semibold text-red-600 inline ",children:"*"}),"Date of Completion of Water Harvesting Structure"]}),e.jsx("input",{type:"date",name:"dateOfCompletion",className:"form-control px-3 py-1.5 2xl:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md poppins",placeholder:"",value:r.values.dateOfCompletion,onChange:r.handleChange}),e.jsx("p",{className:"text-red-500 text-xs poppins",children:r.touched.dateOfCompletion&&r.errors.dateOfCompletion?r.errors.dateOfCompletion:null})]}),e.jsxs("div",{className:"2xl:col-span-10 col-span-10 2xl:mt-4 mt-2 flex flex-row flex-wrap items-center gap-2 2xl:gap-4 poppins",children:[e.jsxs("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm poppins",children:[e.jsx("small",{className:" mt-1 text-sm font-semibold text-red-600 inline",children:"*"}),"Rain Water Harvesting Image "]}),e.jsx("input",{accept:".jpg,.jpeg",type:"file",name:"rwhImage",className:"form-control px-2 py-1 2xl:text-base text-xs font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md poppins",placeholder:"",value:r.values.rwhImage,onChange:q}),x==1&&e.jsx("span",{className:"col-span-2 flex items-center poppins",children:e.jsx("p",{className:"text-red-500 text-xs",children:r.touched.rwhImage&&r.errors.rwhImage?r.errors.rwhImage:null})})]})]}),e.jsxs("div",{className:"col-span-12 my-4 flex justify-between",children:[e.jsx("button",{onClick:()=>f(`/holdingPropertyDetails/${l==null?void 0:l.id}`),type:"button",className:" px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out poppins",children:"Back"}),e.jsx("button",{type:"submit",className:" px-3 py-1.5 2xl:px-6 2xl:py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out poppins",children:"Submit"})]})]})})]}),e.jsx(X,{heading:"Rain Water Harvesting Form",appNo:y,openSubmit:v,navigation:P}),e.jsx("div",{className:"h-[10rem] visible 2xl:hidden"})]})}export{ce as default};
