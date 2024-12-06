import{c as W,b as i,m as t,j as e}from"./index-JPdk8MYx.js";import{e as $}from"./router-vSHQYlWC.js";import{r as o}from"./tailwind-nPCoKmcy.js";import{u as L}from"./formik.esm-feHG9Gj_.js";import{I as T,a as R}from"./index.esm-ad4jnpi1.js";import{c as E,a as h}from"./index.esm-YegZWto1.js";import{F as H}from"./FormProvider-hakOsLcM.js";import{L as O}from"./LoaderButton-MRpyEB_5.js";import{S as x}from"./SelectField-HeY0cYhO.js";import"./TranslateField-ZxvkbHLJ.js";import{P as Z}from"./index-ZOEHJXjh.js";import{S as G}from"./index-SlmWC0sk.js";import"./reactQuery-xwoMMF6K.js";import"./axios-lPgvryBG.js";import"./reactIcons-jqXmw8S_.js";import"./headlessui-kWR29u24.js";import"./ArrowRightIcon-FriVY7EG.js";function te(){var j,m,b,f,N,g,y,u,v,S,I,w,C,F,P,k,_,q,z,A,B,M;const p=$(),r=W(),n=i({api:t.shopMaster,config:{},options:{enabled:!0}}),c=L({enableReinitialize:!0,initialValues:r==null?void 0:r.searchShopList,validationSchema:E({shopCategoryId:h().required("Search String is required"),circleId:h().required("Search String is required"),marketId:h().required("Search String is required")}),onSubmit:async(s,{resetForm:J})=>{console.log("values",r==null?void 0:r.searchShopList),r==null||r.setSearchShopList({...s,page:1})}}),{values:d}=c,l=i({api:t.listWiseCircleMarket,key:"marketList",config:{circleId:d==null?void 0:d.circleId},value:[d==null?void 0:d.circleId],options:{enabled:!!(d!=null&&d.circleId)}}),a=i({api:(j=t)==null?void 0:j.searchShopForPayment,config:r==null?void 0:r.searchShopList,value:[(m=r==null?void 0:r.searchShopList)==null?void 0:m.shopCategoryId,(b=r==null?void 0:r.searchShopList)==null?void 0:b.circleId,(f=r==null?void 0:r.searchShopList)==null?void 0:f.marketId,(N=r==null?void 0:r.searchShopList)==null?void 0:N.page,(g=r==null?void 0:r.searchShopList)==null?void 0:g.perPage],options:{enabled:!!((y=r==null?void 0:r.searchShopList)!=null&&y.marketId)}});return e.jsx(Z,{title:"Search Shop",children:e.jsx("div",{className:"px-4 py-4 flex-1",children:e.jsxs(H,{formik:c,children:[e.jsx(o.Card,{className:"w-full",children:e.jsxs(o.CardBody,{children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Search Shop list"}),e.jsxs("button",{className:"items-center flex justify-start px-2 py-1 border rounded-lg gap-1 cursor-pointer",onClick:()=>{c==null||c.resetForm(),r==null||r.setSearchShopList({page:1,perPage:10,shopCategoryId:"",circleId:"",marketId:""})},children:[e.jsx(T,{size:"1.2rem",className:"cursor-pointer text-blue-600"}),e.jsx("small",{className:" text-blue-600 ",children:"Reset"})]})]}),e.jsx("div",{className:"my-4 border-b-2"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("div",{children:e.jsxs(x,{label:"Shop category",name:"shopCategoryId",formik:c,children:[e.jsx("option",{value:"",children:"select"}),(S=(v=(u=n==null?void 0:n.data)==null?void 0:u.data)==null?void 0:v.shopType)==null?void 0:S.map(s=>e.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.shop_type},s==null?void 0:s.id))]})}),e.jsx("div",{children:e.jsxs(x,{label:"Zone",name:"circleId",formik:c,children:[e.jsx("option",{value:"",children:"select"}),(C=(w=(I=n==null?void 0:n.data)==null?void 0:I.data)==null?void 0:w.circleList)==null?void 0:C.map(s=>e.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.circle_name},s==null?void 0:s.id))]})}),e.jsxs("div",{className:"col-span-2",children:[e.jsxs(x,{label:"Market",formik:c,name:"marketId",disabled:l==null?void 0:l.isLoading,children:[e.jsx("option",{value:"",children:"select"}),(P=(F=l==null?void 0:l.data)==null?void 0:F.data)==null?void 0:P.map(s=>e.jsx("option",{value:s==null?void 0:s.id,children:s==null?void 0:s.market_name},s==null?void 0:s.id))]}),e.jsx("small",{className:"text-blue-500",children:(l==null?void 0:l.isLoading)&&"Please wait..."})]})]}),e.jsx("div",{className:"flex justify-center mt-1",children:e.jsx(O,{className:"w-full",type:"submit",disabled:a==null?void 0:a.isLoading,children:"Search"})})]})}),a!=null&&a.isFetching?e.jsx("div",{className:"text-center py-52 text-blue-600",children:"Please Wait..."}):e.jsx(e.Fragment,{children:((_=(k=a==null?void 0:a.data)==null?void 0:k.data.data)==null?void 0:_.length)>0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"my-4 border-b-2"}),(A=(z=(q=a==null?void 0:a.data)==null?void 0:q.data)==null?void 0:z.data)==null?void 0:A.map(s=>e.jsx(o.Card,{className:"w-full mb-5",children:e.jsxs(o.CardBody,{children:[e.jsx("div",{className:"flex items-center justify-between -mt-1",children:e.jsx("div",{className:"flex items-center",children:e.jsx("p",{className:"text-xs text-end font-bold",children:s==null?void 0:s.allottee})})}),e.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Shop No:"}),e.jsx("p",{className:"text-xs text-end",children:s==null?void 0:s.id})]}),e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Shop Type:"}),e.jsx("p",{className:"text-xs text-end",children:s==null?void 0:s.shop_type})]}),e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Market:"}),e.jsx("p",{className:"text-xs text-end",children:(s==null?void 0:s.market_name)||"--"})]}),e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Circle:"}),e.jsx("p",{className:"text-xs text-end truncate w-60",children:s==null?void 0:s.circle_name})]}),e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("h1",{className:"text-xs font-semibold",children:"Contact:"}),e.jsx("div",{className:"w-44",children:e.jsx("p",{className:"text-xs text-end truncate",children:(s==null?void 0:s.contact_no)||"--"})})]}),e.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),e.jsxs("div",{className:"flex items-center justify-center mt-6 gap-4",children:[e.jsx(o.Button,{fullWidth:!0,onClick:()=>p("/amc-app/adv-municipal-rental/receipt-list-by-shop?shop-id=".concat(s==null?void 0:s.id)),color:"blue-gray",size:"sm",className:"rounded-md ",children:e.jsxs("small",{className:"flex justify-center items-center space-x-1",children:["Payment History ","  ",e.jsx(R,{size:"1rem"})]})}),e.jsx(o.Button,{fullWidth:!0,onClick:()=>p("/amc-app/adv-municipal-rental/shop-details/".concat(s==null?void 0:s.id)),color:"blue",size:"sm",className:"rounded-md",children:e.jsxs("small",{className:"flex justify-center items-center space-x-1",children:["View Details ","  ",e.jsx(R,{size:"1rem"})]})})]})]})},s==null?void 0:s.id)),e.jsx("div",{className:"my-4 border-b-2"}),e.jsx(G,{active:r==null?void 0:r.searchShopList,noOfPage:(M=(B=a==null?void 0:a.data)==null?void 0:B.data)==null?void 0:M.last_page,setActive:r==null?void 0:r.setSearchShopList})]}):e.jsx("div",{className:"text-center py-52",children:"No Record Found!"})}),e.jsx("div",{className:"my-4 border-b-2"})]})})})}export{te as default};
