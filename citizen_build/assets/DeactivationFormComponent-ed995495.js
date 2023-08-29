import{r,u as K,g as Q,a as X,c as Y,d as P,b as F,j as e,ad as ee,o as se,p as te,bd as ae,a0 as d,z as A,l as re,v as L,A as oe,b3 as de}from"./index-5aface7b.js";function me(ie){var f,g,u,v,j,p,b,N,y,w,S,_;const[E,H]=r.useState(),[le,C]=r.useState(),[T,n]=r.useState(!1),[R,c]=r.useState(!1),[s,U]=r.useState(),[B,ne]=r.useState(!1),{id:x}=K(),{api_getHoldingDeactivationDetails:q,api_postHoldingDeactivationApply:I}=de(),{notify:i}=r.useContext(Q),[M,l]=r.useState(!1),[O,V]=r.useState(null),[h,z]=r.useState(!1),W=X(),Z=Y({holdingDoc:P().required("Upload proof of deactivation"),remark:P().required("write comment for deactivation")}),o=F({initialValues:{holdingDoc:"",remark:""},onSubmit:(t,a)=>{if(console.log("onsumbt deactivation ",t),t.remark.length<10){i("Please write atleast 10 character comment","error");return}D()},validationSchema:Z}),$=t=>{t.target.files[0],C(URL.createObjectURL(t.target.files[0])),H(t.target.files[0])},D=()=>{c(!0),l(!1);let t=new FormData;t.append("propertyId",x),t.append("document",E),t.append("comments",o.values.remark),console.log("before apply holding deactivation ",t),re.post(I,t,L()).then(a=>{var k;console.log("submit deactivation response....",a==null?void 0:a.data),a.data.status?(i("Holding deactivation applied successfully !!","success"),z(!0)):(i((k=a==null?void 0:a.data)==null?void 0:k.message,"error"),m(!0,"Error occured. Please try again later.")),c(!1)}).catch(a=>{console.log("error at submit deactivation ",a),i("something went wrong !!","error"),m(!0,"Error occured. Please try again later."),c(!1)})},G=t=>{t.target.name=="holdingDoc"&&$(t)},J=()=>{l(!1),n(!0),console.log("before fetch property details in deactivation"),oe.post(q,{propertyId:x},L()).then(function(t){console.log("view prop prop full details...",t.data),U(t.data),n(!1)}).catch(function(t){console.log("==2 details by id error...",t),l(!0),n(!1)})};r.useEffect(()=>{J()},[]);const m=(t,a)=>{V(a),l(t)};return T?e.jsxs(e.Fragment,{children:[e.jsx(ee,{}),e.jsx("div",{className:"min-h-screen"})]}):e.jsxs(e.Fragment,{children:[R&&e.jsx(se,{}),M&&e.jsx(te,{activateBottomErrorCard:m,errorTitle:O}),e.jsx("div",{className:ae,children:"Holding Deactivation"}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((f=s==null?void 0:s.data)==null?void 0:f.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((g=s==null?void 0:s.data)==null?void 0:g.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:d((u=s==null?void 0:s.data)==null?void 0:u.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"New Ward No"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:d((v=s==null?void 0:s.data)==null?void 0:v.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((j=s==null?void 0:s.data)==null?void 0:j.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((p=s==null?void 0:s.data)==null?void 0:p.zone_mstr_id)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Zone"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((b=s==null?void 0:s.data)==null?void 0:b.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[d((N=s==null?void 0:s.data)==null?void 0:N.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:d((y=s==null?void 0:s.data)==null?void 0:y.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:d((w=s==null?void 0:s.data)==null?void 0:w.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]})]})]})}),e.jsxs("div",{children:[((S=s==null?void 0:s.data)==null?void 0:S.deactivationStatus)!=1&&!h&&e.jsx("form",{onSubmit:o.handleSubmit,onChange:G,encType:"multipart/form",className:"w-full bg-white shadow-xl py-5",children:e.jsxs("div",{className:"w-full flex flex-col md:flex-row md:items-center md:justify-center pl-6 py-2",children:[e.jsx("label",{className:"",children:"Upload Document"}),e.jsxs("div",{className:"text-xs text-gray-700 md:ml-4",children:[e.jsx("input",{...o.getFieldProps("holdingDoc"),accept:".pdf,.png,.jpg,.jpeg",type:"file",className:"mt-2 form-control block w-full px-3 py-2 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 foc}us:outline-none cursor-pointer shadow-md w-40"}),e.jsx("div",{children:"Only pdf, jpg, jpeg or png allowed."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.holdingDoc&&o.errors.holdingDoc?o.errors.holdingDoc:null})]}),e.jsx("div",{className:"mt-10 md:mt-0",children:e.jsx("label",{className:"",children:"Add Remarks"})}),e.jsxs("div",{className:"md:ml-4",children:[e.jsx("textarea",{...o.getFieldProps("remark"),className:"form-control block w-full px-3 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 foc}us:outline-none shadow-md w-60 ",placeholder:"Enter your remark"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.remark&&o.errors.remark?o.errors.remark:null})]}),e.jsx("div",{className:"md:ml-4",children:e.jsx("button",{type:"submit",className:A,children:"Submit Deactivation Request"})})]})}),h&&e.jsx("div",{className:"w-full h-full bg-white p-20",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-center font-semibold text-3xl",children:"Deactivation for this property has been applied."}),e.jsx("div",{className:"text-center mt-6",children:e.jsx("button",{type:"button",className:A,onClick:()=>W("/propertyDashboard"),children:"View Dashboard"})})]})}),(((_=s==null?void 0:s.data)==null?void 0:_.deactivationStatus)==1||B)&&e.jsx("div",{children:e.jsx("h1",{className:"w-full text-center text-red-500 text-2xl font-semibold",children:"Deactivation request already submitted !"})})]}),e.jsx("div",{className:"w-full h-40 md:none"})]})}export{me as default};
