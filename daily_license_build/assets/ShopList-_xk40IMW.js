import{r as s,b as S,a as d,A as N,j as t}from"./index-jm7kGz-q.js";import{T as oe}from"./ThemeStyle-mSkMd4lv.js";import{u as ae}from"./formik.esm-chVr7t2Z.js";import{R as le}from"./RentalApiList-cFLWuyfa.js";import{R as re,s as ce}from"./search-t-4Civwy.js";import{L as ne}from"./Loader-4eRTBfyD.js";import"./ShopListViewInCard-LACVSW28.js";import"./PowerupFunctions-J08OQ4wz.js";import"./TollListViewInCard-1Z_Y57kY.js";function Ee(){var u,x;const{bgHeaderColor:ie,titleColor:h,nextButtonColor:de,bgCardColor:he,bgInfoColor:pe,infoTextColor:me,backButtonColor:ue,backBtnHoverColor:xe,nextBtnHoverColor:ge,inputStyle:fe}=oe(),{api_UlbCircleList:w,api_shopListByLocation:ye,api_getShopMasterType:C,api_locationByCircleList:L,api_getFilteredShopList:k}=le(),[je,I]=s.useState(),[n,_]=s.useState(null),[B,l]=s.useState(!1),[E,F]=s.useState(0),[P,R]=s.useState(1),[z,m]=s.useState(0),[H,T]=s.useState(5),[A,D]=s.useState(""),[M,be]=s.useState(!1),[i,V]=s.useState(),[p,$]=s.useState(),[q,O]=s.useState(),[U,Z]=s.useState(),[G,J]=s.useState(),o=ae({initialValues:{shopCategory:"",zone:"",market:""},onSubmit:e=>{ee()}}),K=e=>{console.log("target name",e.target.name),console.log("target value",e.target.value),console.log("values of circle",e.target.value);let r=e.target.name,a=e.target.value;r=="zone"&&X(a),r=="shopCategory"&&O(a),r=="zone"&&J(a),r=="market"&&Z(a)};s.useEffect(()=>{Q()},[]);const Q=()=>{l(!0),S.post(w,{},d()).then(e=>{console.log("circle list 1",e.data),e.data.status&&I(e.data.data),l(!1)}).catch(e=>{console.log(e),l(!1)})};s.useEffect(()=>{W(),l(!0)},[]);const W=()=>{N.post(C,{},d()).then(e=>{console.log("master data type",e.data.data),V(e.data.data),l(!1)}).catch(e=>{console.log(e),l(!1)})},X=e=>{l(!0);const r={circleId:e};N.post(L,r,d()).then(a=>{console.log("location list",a.data),a.data.status&&$(a.data.data),l(!1)}).catch(a=>{console.log(a)}),l(!1)},Y=[{Header:"Shop no.",accessor:"shop_no"},{Header:"Allottee",accessor:"allottee"},{Header:"Last paid on",accessor:"updated_at"},{Header:"Area",accessor:"circle_name"},{Header:"Rate",accessor:"rate"}],ee=(e,r,a="")=>{l(!0);const se={shopCategoryId:q,circleId:G,marketId:U,page:e,perPage:r,key:a};console.log("page , perpage , key ",e,r,a),S.post(k,se,d()).then(c=>{var g,f,y,j,b,v;console.log("shop list 1",c.data),c.data.status&&(_((f=(g=c==null?void 0:c.data)==null?void 0:g.data)==null?void 0:f.data),F((j=(y=c.data)==null?void 0:y.data)==null?void 0:j.total),m((v=(b=c.data)==null?void 0:b.data)==null?void 0:v.last_page)),l(!1)}).catch(c=>{console.log(c),l(!1)})};console.log("shop list by location",n);const te={tittle:"shopRentalPay",totalDataCount:E,currentPageIndex:P,setcurrentPageIndex:R,pageLength:H,setpageLength:T,lastPageIndex:z,setlastPageIndex:m,searchValue:A,setsearchValue:D,refreshStatus:M};return console.log("====",n),t.jsxs(t.Fragment,{children:[B&&t.jsx(ne,{}),t.jsx("div",{className:"h-screen bg-[#FDFCFE] flex flex-row flex-wrap justify-center items-center p-3",children:t.jsxs("div",{className:"bg-white shadow-xl rounded-tl-[44px]  h-full sm:w-1/2 lg:w-1/3 w-full rounded-xl",children:[t.jsx("div",{className:"bg-[#5846BE] h-28 w-full mx-auto rounded-br-[68px] rounded-tl-[44px] opacity-90",children:t.jsxs("div",{className:"p-4 pt-10",children:[t.jsx("h1",{className:"text-gray-50 font-bold capitalize text-2xl",children:"Shop Rental Pay"}),t.jsx("h1",{className:"text-gray-50 capitalize text-[12px]",children:"Budgeting Essentials: Toll Rent Payment"})]})}),t.jsx("form",{onSubmit:o.handleSubmit,onChange:K,children:t.jsx("div",{className:"p-2 md:p-10 mt-2 flex justify-center items-center  overflow-hidden text-xs",children:t.jsxs("div",{className:"grid grid-cols-12 bg-[#EDEDF4]  w-full md:w-full    p-6 md:p-10 rounded-xl shadow-md",children:[t.jsx("div",{className:"form-group mb-2 md:mb-6 col-span-12  text-gray-600 ",children:t.jsxs("div",{className:"",children:[t.jsx("h1",{className:"".concat(h," text-sm py-2 text-gray-600"),children:"Shop category"}),t.jsxs("select",{...o.getFieldProps("shopCategory"),className:" border border-gray-100 w-full py-2 px-2 bg-white shadow-lg rounded-xl text-gray-600 font-normal",children:[t.jsx("option",{selected:!0,children:"select"}),(u=i==null?void 0:i.shopType)==null?void 0:u.map(e=>t.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.shop_type}))]}),t.jsx("p",{className:"text-red-500 text-xs",children:o.touched.shopCategory&&o.errors.shopCategory?o.errors.shopCategory:null})]})}),t.jsx("div",{className:"form-group mb-2 md:mb-6 col-span-12  text-gray-600 ",children:t.jsxs("div",{className:"",children:[t.jsxs("h1",{className:"".concat(h," text-sm py-2 text-gray-600"),children:[" ","Zone"]}),t.jsxs("select",{...o.getFieldProps("zone"),className:" border border-gray-100 w-full py-2 px-2 bg-white shadow-lg rounded-xl text-gray-600 font-normal",children:[t.jsx("option",{selected:!0,children:"select"}),(x=i==null?void 0:i.circleList)==null?void 0:x.map(e=>t.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.circle_name}))]}),t.jsx("p",{className:"text-red-500 text-xs",children:o.touched.zone&&o.errors.zone?o.errors.zone:null})]})}),t.jsxs("div",{className:"form-group mb-2 md:mb-6 col-span-12  text-gray-600 ",children:[t.jsxs("h1",{className:" ".concat(h," text-sm py-2 text-gray-600"),children:[" ","Market"]}),t.jsxs("select",{...o.getFieldProps("market"),className:" border border-gray-100 w-full py-2 px-2 bg-white shadow-lg rounded-xl text-gray-600 font-normal",children:[t.jsx("option",{children:"select"}),p==null?void 0:p.map(e=>t.jsx("option",{value:e==null?void 0:e.id,children:e==null?void 0:e.market_name}))]}),t.jsx("p",{className:"text-red-500 text-xs",children:o.touched.market&&o.errors.market?o.errors.market:null})]}),t.jsx("div",{className:"col-span-12 grid grid-cols-12  mt-4",children:t.jsxs("div",{className:"col-span-12",children:[" ",t.jsx("button",{type:"submit",className:"shadow-lg w-full px-6 py-3 bg-[#5846BE] text-white font-medium text-xs leading-tight rounded-xl   hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out",children:"Search"})]})})]})})}),t.jsx("div",{children:(n==null?void 0:n.length)>0?t.jsx(re,{canRefresh:!0,columns:Y,values:te,dataList:n}):t.jsx("div",{className:"p-2 relative ",children:t.jsx("img",{src:ce,className:"mx-auto h-64 p-8 pt-4"})})})]})})]})}export{Ee as default};
