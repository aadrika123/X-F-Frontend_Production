import{r,bw as J,c as K,u as X,k as Y,l as F,m as k,o as ee,j as e,B as te,S as se,U as ae,p as re,n as i,N as oe,O as P,A as ie,bQ as de}from"./index-33b137df.js";function me(le){var g,f,u,v,b,j,p,N,y,w,S,_;const[A,E]=r.useState(),[ne,H]=r.useState(),[L,d]=r.useState(!1),[C,l]=r.useState(!1),[t,T]=r.useState(),[U,ce]=r.useState(!1),{id:x}=J(),{api_getHoldingDeactivationDetails:B,api_postHoldingDeactivationApply:R}=de(),{notify:m}=r.useContext(K),[h,q]=r.useState(!1),[I,n]=r.useState(!1),[O,M]=r.useState(!1),[V,W]=r.useState(null),$=X();Y("Holding Deactivation");const z=F({holdingDoc:k().required("Upload proof of deactivation"),remark:k().required("write comment for deactivation")}),o=ee({initialValues:{holdingDoc:"",remark:""},onSubmit:(s,a)=>{if(console.log("onsumbt deactivation ",s),s.remark.length<10){m("Please write atleast 10 character comment","error");return}Z()},validationSchema:z}),Q=s=>{s.target.files[0],H(URL.createObjectURL(s.target.files[0])),E(s.target.files[0])},Z=()=>{l(!0);let s=new FormData;s.append("propertyId",x),s.append("document",A),s.append("comments",o.values.remark),console.log("before apply holding deactivation ",s),oe.post(R,s,P()).then(a=>{console.log("submit deactivation response....",a==null?void 0:a.data),a.data.status?(m("Holding deactivation applied successfully !!","success"),q(!0)):c(!0,"Error occured in submitting deactivation application. Please try again later."),l(!1)}).catch(a=>{console.log("error at submit deactivation ",a),c(!0,"Error occured in submitting deactivation application. Please try again later."),l(!1)})},D=s=>{s.target.name=="holdingDoc"&&Q(s)},G=()=>{n(!1),d(!0),console.log("before fetch property details in deactivation"),ie.post(B,{propertyId:x},P()).then(function(s){var a;console.log("view prop prop full details...",s==null?void 0:s.data),(a=s==null?void 0:s.data)!=null&&a.status?T(s==null?void 0:s.data):n(!0),d(!1)}).catch(function(s){console.log("==2 details by id error...",s),n(!0),d(!1)})};r.useEffect(()=>{G()},[]);const c=(s,a)=>{W(a),M(s)};return L?e.jsx(e.Fragment,{children:e.jsx(te,{})}):I?e.jsx(se,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[C&&e.jsx(ae,{}),O&&e.jsx(re,{activateBottomErrorCard:c,errorTitle:V}),e.jsx("div",{className:"w-full bg-white shadow-xl mb-6",children:e.jsxs("div",{className:"py-6 mt-2 rounded-lg shadow-lg p-4",children:[e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-5 pl-4 ",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((g=t==null?void 0:t.data)==null?void 0:g.holding_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Holding No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((f=t==null?void 0:t.data)==null?void 0:f.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ward No."})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-lg",children:i((u=t==null?void 0:t.data)==null?void 0:u.old_ward_no)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"New Ward No"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:i((v=t==null?void 0:t.data)==null?void 0:v.ownership_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Ownership Type"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((b=t==null?void 0:t.data)==null?void 0:b.property_type)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property Type"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row space-y-2 md:space-x-10  pl-4 mt-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((j=t==null?void 0:t.data)==null?void 0:j.zone_mstr_id)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Zone"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((p=t==null?void 0:t.data)==null?void 0:p.is_mobile_tower)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Mobile Tower(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"font-semibold text-md",children:[i((N=t==null?void 0:t.data)==null?void 0:N.is_hoarding_board)," "]}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Property has Hoarding Board(s) ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-semibold text-md",children:i((y=t==null?void 0:t.data)==null?void 0:y.is_petrol_pump)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Is property a Petrol Pump ?"})]}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"font-bold text-sm",children:i((w=t==null?void 0:t.data)==null?void 0:w.is_water_harvesting)}),e.jsx("div",{className:"text-gray-500 text-xs",children:"Rainwater harvesting provision ?"})]})]})]})}),e.jsxs("div",{children:[((S=t==null?void 0:t.data)==null?void 0:S.deactivationStatus)!=1&&!h&&e.jsx("form",{onSubmit:o.handleSubmit,onChange:D,encType:"multipart/form",className:"w-full bg-white shadow-xl py-5",children:e.jsxs("div",{className:"w-full flex flex-col md:flex-row md:items-center md:justify-center pl-6 py-2",children:[e.jsx("label",{className:"",children:"Upload Document"}),e.jsxs("div",{className:"text-xs text-gray-700 md:ml-4",children:[e.jsx("input",{...o.getFieldProps("holdingDoc"),type:"file",accept:".pdf,.png,.jpg,.jpeg",className:"mt-2 form-control block w-full px-3 py-2 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 foc}us:outline-none cursor-pointer shadow-md w-40"}),e.jsx("div",{children:"Only pdf, jpg, jpeg or png allowed."}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.holdingDoc&&o.errors.holdingDoc?o.errors.holdingDoc:null})]}),e.jsx("div",{className:"mt-10 md:mt-0",children:e.jsx("label",{className:"",children:"Add Remarks"})}),e.jsxs("div",{className:"md:ml-4",children:[e.jsx("textarea",{...o.getFieldProps("remark"),className:"form-control block w-full px-3 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 foc}us:outline-none shadow-md w-60 ",placeholder:"Enter your remark"}),e.jsx("span",{className:"text-red-600 absolute text-xs",children:o.touched.remark&&o.errors.remark?o.errors.remark:null})]}),e.jsx("div",{className:"md:ml-4",children:e.jsx("button",{type:"submit",className:"px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight  rounded  hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out mt-10 shadow-xl w-60",children:"Submit Deactivation Request"})})]})}),h&&e.jsx("div",{className:"w-full h-full bg-white p-20",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-center font-semibold text-3xl",children:"Deactivation for this property has been applied."}),e.jsx("div",{className:"text-center mt-6",children:e.jsx("button",{type:"button",className:"mr-4 bg-indigo-500  text-white px-6 py-1 shadow-lg hover:scale-105 rounded-sm",onClick:()=>$("/search/fresh/direct/direct"),children:"Search Holding"})})]})}),(((_=t==null?void 0:t.data)==null?void 0:_.deactivationStatus)==1||U)&&e.jsx("div",{children:e.jsx("h1",{className:"w-full text-center text-red-500 text-2xl font-semibold",children:"Deactivation request already submitted !"})})]}),e.jsx("div",{className:"w-full h-40 md:none"})]})}export{me as default};
