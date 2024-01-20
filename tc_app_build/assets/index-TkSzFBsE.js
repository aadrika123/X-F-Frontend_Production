import{h as E,p as F,Q as L,j as e,r as l,R as z,n as R,m as T,o as q}from"./index-Y5adADDh.js";import{P as G}from"./index-2XMET6oD.js";import{u as H}from"./formik.esm-eFjNUeW7.js";import{c as U,a as $}from"./index.esm-t8WjfqlW.js";import{F as W}from"./FormProvider-NGGCXq40.js";import{T as Y}from"./TextField-Hvf5tdYg.js";import"./index-XLkLeTL6.js";const Q=U().shape({mobileNo:$().required("Mobile No is required").min(10).max(10)});function V({open:t,setOpen:n,updateMobData:i,proId:x,refetch:a}){const s=()=>n(!t),o=E({}),h=H({enableReinitialize:!0,initialValues:{propertyId:x,ownerId:i.id,mobileNo:i.mobile_no},validationSchema:Q,onSubmit:async m=>{var c;try{const{data:d}=await o.mutateAsync({api:(c=F)==null?void 0:c.updateMobile,data:m});d!=null&&d.status&&(L.success(d==null?void 0:d.message),a(),s())}catch(d){L.error(d.message)}}});return e.jsxs(W,{formik:h,children:[t&&e.jsx("div",{onClick:s,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),e.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(t?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:e.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:e.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Add Mobile No"}),e.jsxs("button",{onClick:s,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsxs("div",{className:"p-4 md:p-5",children:[e.jsx("div",{className:"grid grid-cols-1 gap-4",children:e.jsx("div",{children:e.jsx(Y,{type:"text",name:"mobileNo",label:"Mobile No",formik:h,placeholder:"Enter Mobile No",maxLength:10})})}),e.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[e.jsx(l.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:s,className:"mr-1 bg-gray-300",children:e.jsx("span",{children:"Cancel"})}),e.jsx(l.Button,{type:"submit",size:"sm",loading:o.isLoading,disabled:o.isLoading,children:e.jsx("span",{children:"Update"})})]})]})]})})})]})}function de(){var b,j,p,N,f,u,g,v,y,w,_,k,P,C,M,A,B,I,D,O;const[t,n]=z.useState(!1),[i,x]=z.useState({}),{id:a}=R(),{data:s,refetch:o,isFetching:h,isLoading:m,isPending:c}=T({api:F.getPropByHolding,config:{propertyId:a},value:[a],options:{enabled:!!a}}),d=r=>{x(r),n(!0)};return m||c?e.jsx(q,{}):e.jsxs(G,{title:"Basic Details",children:[e.jsx(V,{setOpen:n,open:t,proId:a,updateMobData:i,refetch:o}),e.jsxs("div",{className:"p-4 ",children:[e.jsxs(l.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),e.jsx(l.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Property No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(j=(b=s==null?void 0:s.data)==null?void 0:b.property_no)!=null?j:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Holding No.: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(N=(p=s==null?void 0:s.data)==null?void 0:p.holding_no)!=null?N:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Zone: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(u=(f=s==null?void 0:s.data)==null?void 0:f.zone_name)!=null?u:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Ward No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:(v=(g=s==null?void 0:s.data)==null?void 0:g.ward_no)!=null?v:"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Date of Purchase: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((y=s==null?void 0:s.data)==null?void 0:y.land_occupation_date)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Ownership Type: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((w=s==null?void 0:s.data)==null?void 0:w.ownership_type)||"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Property Type: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((_=s==null?void 0:s.data)==null?void 0:_.property_type)||"-"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Holding Type: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((k=s==null?void 0:s.data)==null?void 0:k.holding_type)||"-"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(l.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Property Address & Details"})}),e.jsx(l.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Survey No: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((P=s==null?void 0:s.data)==null?void 0:P.khata_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Plot No.: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((C=s==null?void 0:s.data)==null?void 0:C.plot_no)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Mauja Name: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((M=s==null?void 0:s.data)==null?void 0:M.village_mauja_name)||"--"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Area Of Plot (in Sq ft) :"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((A=s==null?void 0:s.data)==null?void 0:A.area_of_plot)||"--"})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm font-semibold",children:"Property Address: "})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((B=s==null?void 0:s.data)==null?void 0:B.prop_address)||"--"})}),e.jsx("div",{children:e.jsxs("h1",{className:"text-sm font-semibold",children:["Corresponding Address:"," "]})}),e.jsx("div",{children:e.jsx("h1",{className:"text-sm",children:((I=s==null?void 0:s.data)==null?void 0:I.corr_address)||"--"})})]})})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs(l.Card,{className:"w-full",children:[e.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:e.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner Details"})}),e.jsx(l.CardBody,{children:e.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:e.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sno :"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Owner Name"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Owner Name In Marathi"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Gender"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DOB"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Guardian Name"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Guardian Name In Marathi"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Relation"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Mobile No."}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Aadhar"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Pan"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Email"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Is-Armed-Force"}),e.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Is-Specially-Abled?"}),e.jsx("td",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Action"})]})}),e.jsx("tbody",{children:(O=(D=s==null?void 0:s.data)==null?void 0:D.owners)==null?void 0:O.map((r,S)=>e.jsxs("tr",{children:[e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:S+1}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.owner_name}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.owner_name_marathi}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(r==null?void 0:r.gender)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(r==null?void 0:r.dob)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(r==null?void 0:r.guardian_name)||"--"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.guardian_name_marathi}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.relation_type}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.mobile_no}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.aadhar_no}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.pan_no}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r==null?void 0:r.email}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r!=null&&r.is_armed_force?"Yes":"No"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:r!=null&&r.is_specially_abled?"Yes":"No"}),e.jsx("td",{className:"text-sm p-4 border border-slate-300",children:e.jsx("button",{className:"text-sm text-white bg-blue-500 px-3 py-1 rounded",onClick:()=>{d(r)},children:"Edit"})})]},S))})]})})})]})]})]})}export{de as default};
