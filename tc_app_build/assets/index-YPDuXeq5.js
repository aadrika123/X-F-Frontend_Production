import{a as b,R as v,m as S,j as e,r as i,C as A}from"./index-hiQLm8TA.js";import{P as C}from"./index-kqmfRL9d.js";import{T as R}from"./TextField-TuCHzpng.js";import{S as w}from"./SelectField-oYPPwjxC.js";import"./index-AiuV23kC.js";import"./formik.esm-e4egwEos.js";function k(){var c,n,d,o,m,x,p;const r=b(),[l,g]=v.useState(""),[t,N]=v.useState("2"),{data:s,isLoading:E,error:T,refetch:y}=S({api:(c=A)==null?void 0:c.tradeSearchApp,config:{licenceNo:l,applicationType:t},options:{enabled:!1}}),u=()=>{y()},f=()=>{var a,h,j;t==="2"&&r("/amc-app/trade/renewal-application?app-type=RENEWAL&license-id=".concat((a=s==null?void 0:s.data)==null?void 0:a.id)),t==="3"&&r("/amc-app/trade/surrender-application?app-type=SURRENDER&license-id=".concat((h=s==null?void 0:s.data)==null?void 0:h.id)),t==="4"&&r("/amc-app/trade/amendment-application?app-type=AMENDMENT&license-id=".concat((j=s==null?void 0:s.data)==null?void 0:j.id))};return e.jsx(C,{title:"Search Application",children:e.jsxs("div",{className:"p-4",children:[e.jsx(i.Card,{children:e.jsx(i.CardBody,{children:e.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[e.jsx("div",{children:e.jsxs(w,{label:"Search Type",value:t,onChange:a=>N(a.target.value),children:[e.jsx("option",{value:"2",children:"Renewal"}),e.jsx("option",{value:"3",children:"Surrender"}),e.jsx("option",{value:"4",children:"Amendment"})]})}),e.jsx("div",{children:e.jsx(R,{id:"search",label:"Search",value:l,onChange:a=>g(a.target.value)})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(i.Button,{size:"sm",color:"blue-gray",onClick:u,children:"Search"})})]})})}),e.jsx("div",{className:"border-t-2 border-gray-200 my-4"}),s!=null&&s.status?e.jsx(i.Card,{className:"overflow-x-auto",children:e.jsxs(i.CardBody,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Firm Name :"}),e.jsx("div",{className:"text-sm text-gray-500",children:(n=s==null?void 0:s.data)==null?void 0:n.firm_name}),e.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Application No :"}),e.jsx("div",{className:"text-sm text-gray-500",children:(d=s==null?void 0:s.data)==null?void 0:d.application_no}),e.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"License No."}),e.jsx("div",{className:"text-sm text-gray-500",children:(o=s==null?void 0:s.data)==null?void 0:o.license_no}),e.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Ward No."}),e.jsx("div",{className:"text-sm text-gray-500",children:(m=s==null?void 0:s.data)==null?void 0:m.ward_no}),e.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Address."}),e.jsx("div",{className:"text-sm text-gray-500 w-42 truncate",children:(x=s==null?void 0:s.data)==null?void 0:x.address}),e.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Validity."}),e.jsx("div",{className:"text-sm text-gray-500 w-42 truncate",children:(p=s==null?void 0:s.data)==null?void 0:p.valid_upto})]}),e.jsx("div",{className:"border-t-2 border-gray-200 my-4"}),e.jsx("div",{className:"col-span-2 flex justify-center",children:e.jsx(i.Button,{size:"sm",color:"blue",onClick:f,children:"View"})})]})}):e.jsx("div",{className:"text-center text-red-900 mt-32",children:s==null?void 0:s.message})]})})}export{k as default};
