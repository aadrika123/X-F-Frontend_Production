import{r as s,c as P,a as m,A as R,j as t}from"./index-jT1_tuvX.js";import{T as re}from"./ThemeStyle-mSkMd4lv.js";import{u as ce}from"./formik.esm-RJEjG-JI.js";import{R as ne}from"./RentalApiList-ncByEBHo.js";import{R as ie,s as de}from"./search-g2N0xD-E.js";import{L as he}from"./Loader-dKHVMc02.js";import"./ShopListViewInCard-zuBPbaXr.js";import"./PowerupFunctions-yHjJCi7V.js";import"./TollListViewInCard-2Huve3Il.js";function we(){var v,S;const{titleColor:u}=re(),{api_UlbCircleList:z,api_getShopMasterType:T,api_locationByCircleList:A,api_getFilteredShopList:B}=ne(),[pe,D]=s.useState(),[n,H]=s.useState(null),[M,o]=s.useState(!1),[V,$]=s.useState(0),[d,q]=s.useState(1),[O,b]=s.useState(0),[h,U]=s.useState(5),[p,Z]=s.useState(""),[G,me]=s.useState(!1),[i,J]=s.useState(),[x,K]=s.useState(),[g,Q]=s.useState(),[f,W]=s.useState(),[y,X]=s.useState(),a=ce({initialValues:{shopCategory:"",zone:"",market:""},onSubmit:e=>{j(g,y,f,d,h,p)}}),Y=e=>{console.log("target name",e.target.name),console.log("target value",e.target.value),console.log("values of circle",e.target.value);let c=e.target.name,l=e.target.value;c=="zone"&&se(l),c=="shopCategory"&&Q(l),c=="zone"&&X(l),c=="market"&&W(l)};s.useEffect(()=>{ee()},[]);const ee=()=>{o(!0),P.post(z,{},m()).then(e=>{console.log("circle list 1",e.data),e.data.status&&D(e.data.data),o(!1)}).catch(e=>{console.log(e),o(!1)})};s.useEffect(()=>{te(),o(!0)},[]);const te=()=>{R.post(T,{},m()).then(e=>{console.log("master data type",e.data.data),J(e.data.data),o(!1)}).catch(e=>{console.log(e),o(!1)})},se=e=>{o(!0);const c={circleId:e};R.post(A,c,m()).then(l=>{console.log("location list",l.data),l.data.status&&K(l.data.data),o(!1)}).catch(l=>{console.log(l)}),o(!1)},ae=[{Header:"Shop no.",accessor:"shop_no"},{Header:"Allottee",accessor:"allottee"},{Header:"Last paid on",accessor:"updated_at"},{Header:"Area",accessor:"circle_name"},{Header:"Rate",accessor:"rate"}];s.useEffect(()=>{j(g,y,f,d,h,p)},[g,y,f,d,p,h]);const j=(e,c,l,N,w,L="")=>{o(!0);const le={shopCategoryId:e,circleId:c,marketId:l,page:N,perPage:w,key:L};console.log("page , perpage , key ",N,w,L),P.post(B,le,m()).then(r=>{var C,I,k,E,F,_;console.log("shop list 1",r.data),r.data.status&&(H((I=(C=r==null?void 0:r.data)==null?void 0:C.data)==null?void 0:I.data),$((E=(k=r.data)==null?void 0:k.data)==null?void 0:E.total),b((_=(F=r.data)==null?void 0:F.data)==null?void 0:_.last_page)),o(!1)}).catch(r=>{console.log(r),o(!1)})};console.log("shop list by location",n);const oe={tittle:"shopRentalPay",totalDataCount:V,currentPageIndex:d,setcurrentPageIndex:q,pageLength:h,setpageLength:U,lastPageIndex:O,setlastPageIndex:b,searchValue:p,setsearchValue:Z,refreshStatus:G,fetchShopListFun:j};return console.log("====",n),t.jsxs(t.Fragment,{children:[M&&t.jsx(he,{}),t.jsx("div",{className:"h-screen bg-[#FDFCFE] flex flex-row flex-wrap justify-center items-center p-3",children:t.jsxs("div",{className:"bg-white shadow-xl rounded-tl-[44px]  h-full sm:w-1/2 lg:w-1/3 w-full rounded-xl",children:[t.jsx("div",{className:"bg-[#5846BE] h-28 w-full mx-auto rounded-br-[68px] rounded-tl-[44px] opacity-90",children:t.jsxs("div",{className:"p-4 pt-10",children:[t.jsx("h1",{className:"text-gray-50 font-bold capitalize text-2xl",children:"Shop Rental Pay"}),t.jsx("h1",{className:"text-gray-50 capitalize text-[12px]",children:"Budgeting Essentials: Toll Rent Payment"})]})}),t.jsx("form",{onSubmit:a.handleSubmit,onChange:Y,children:t.jsx("div",{className:"p-2 md:p-10 mt-2 flex justify-center items-center  overflow-hidden text-xs",children:t.jsxs("div",{className:"grid grid-cols-12 bg-[#EDEDF4]  w-full md:w-full    p-6 md:p-10 rounded-xl shadow-md",children:[t.jsx("div",{className:"form-group mb-2 md:mb-6 col-span-12  text-gray-600 ",children:t.jsxs("div",{className:"",children:[t.jsx("h1",{className:"".concat(u," text-sm py-2 text-gray-600"),children:"Shop category"}),t.jsxs("select",{...a.getFieldProps("shopCategory"),className:" border border-gray-100 w-full py-2 px-2 bg-white shadow-lg rounded-xl text-gray-600 font-normal",children:[t.jsx("option",{selected:!0,children:"select"}),(v=i==null?void 0:i.shopType)==null?void 0:v.map(e=>t.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.shop_type}))]}),t.jsx("p",{className:"text-red-500 text-xs",children:a.touched.shopCategory&&a.errors.shopCategory?a.errors.shopCategory:null})]})}),t.jsx("div",{className:"form-group mb-2 md:mb-6 col-span-12  text-gray-600 ",children:t.jsxs("div",{className:"",children:[t.jsxs("h1",{className:"".concat(u," text-sm py-2 text-gray-600"),children:[" ","Zone"]}),t.jsxs("select",{...a.getFieldProps("zone"),className:" border border-gray-100 w-full py-2 px-2 bg-white shadow-lg rounded-xl text-gray-600 font-normal",children:[t.jsx("option",{selected:!0,children:"select"}),(S=i==null?void 0:i.circleList)==null?void 0:S.map(e=>t.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.circle_name}))]}),t.jsx("p",{className:"text-red-500 text-xs",children:a.touched.zone&&a.errors.zone?a.errors.zone:null})]})}),t.jsxs("div",{className:"form-group mb-2 md:mb-6 col-span-12  text-gray-600 ",children:[t.jsxs("h1",{className:" ".concat(u," text-sm py-2 text-gray-600"),children:[" ","Market"]}),t.jsxs("select",{...a.getFieldProps("market"),className:" border border-gray-100 w-full py-2 px-2 bg-white shadow-lg rounded-xl text-gray-600 font-normal",children:[t.jsx("option",{children:"select"}),x==null?void 0:x.map(e=>t.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.market_name}))]}),t.jsx("p",{className:"text-red-500 text-xs",children:a.touched.market&&a.errors.market?a.errors.market:null})]}),t.jsx("div",{className:"col-span-12 grid grid-cols-12  mt-4",children:t.jsxs("div",{className:"col-span-12",children:[" ",t.jsx("button",{type:"submit",className:"shadow-lg w-full px-6 py-3 bg-[#5846BE] text-white font-medium text-xs leading-tight rounded-xl   hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out",children:"Search"})]})})]})})}),t.jsx("div",{children:(n==null?void 0:n.length)>0?t.jsx(ie,{canRefresh:!0,columns:ae,values:oe,dataList:n}):t.jsx("div",{className:"p-2 relative ",children:t.jsx("img",{src:de,className:"mx-auto h-64 p-8 pt-4"})})})]})})]})}export{we as default};
