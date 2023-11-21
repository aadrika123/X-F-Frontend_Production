import{r as a,b as m,a as x,j as e}from"./index-jm7kGz-q.js";import{T as J}from"./ThemeStyle-mSkMd4lv.js";import{u as K}from"./formik.esm-chVr7t2Z.js";import{R as Q}from"./RentalApiList-cFLWuyfa.js";import{R as W,s as X}from"./search-t-4Civwy.js";import{L as Y}from"./Loader-4eRTBfyD.js";import"./ShopListViewInCard-LACVSW28.js";import"./PowerupFunctions-J08OQ4wz.js";import"./TollListViewInCard-1Z_Y57kY.js";function Ne(){const{bgHeaderColor:Z,titleColor:c,nextButtonColor:ee,bgCardColor:te,bgInfoColor:ae,infoTextColor:se,backButtonColor:le,backBtnHoverColor:oe,nextBtnHoverColor:re,inputStyle:ne}=J(),{api_UlbCircleList:S,api_locationByCircleList:v,api_searchToll:C}=Q(),[ie,L]=a.useState();a.useState(null);const[ce,B]=a.useState();a.useState(null);const[i,F]=a.useState(null),[D,o]=a.useState(!1),[de,E]=a.useState(),[d,H]=a.useState(),[R,T]=a.useState(0),[h,P]=a.useState(1),[_,u]=a.useState(0),[g,k]=a.useState(5),[p,I]=a.useState(""),[V,me]=a.useState(!1),s=K({initialValues:{filterBy:"",filterField:""},onSubmit:t=>{f(t==null?void 0:t.filterBy,t==null?void 0:t.filterField)}}),f=(t,r)=>{A(t,r,h,g,p)},A=(t,r,l,q,G="")=>{o(!0),m.post(C,{searchBy:t,value:r,page:l,perPage:q,key:G},x()).then(n=>{var b,j,N,w;console.log("toll list",n.data),n.data.status&&(F(n.data.data.data),T((j=(b=n.data)==null?void 0:b.data)==null?void 0:j.total),u((w=(N=n.data)==null?void 0:N.data)==null?void 0:w.last_page)),o(!1)}).catch(n=>{console.log(n),o(!1)})},M=[{Header:"Shop no.",accessor:"shop_no"},{Header:"Allottee",accessor:"allottee"},{Header:"Last paid on",accessor:"updated_at"},{Header:"Area",accessor:"circle_name"},{Header:"Rate",accessor:"rate"}];a.useEffect(()=>{$()},[]);const $=()=>{o(!0),m.post(S,{},x()).then(t=>{console.log("circle list 1",t.data),t.data.status&&L(t.data.data),o(!1)}).catch(t=>{console.log(t),o(!1)})},z=t=>{console.log("circle id ",t),o(!0);const r={circleId:t};m.post(v,r,x()).then(l=>{console.log("location list",l.data),l.data.status&&B(l.data.data),o(!1)}).catch(l=>{console.log(l),o(!1)})};console.log("shop list by location",i);const O=t=>{console.log("target type",t.target.type),console.log("check box name",t.target.name),console.log("target id..",t.target.value);let r=t.target.name,l=t.target.value;r=="circle"&&z(l),r=="location"&&E(l),r=="filterBy"&&H(l)};console.log("===1==",d);let y="Toll Rental pay";const U={tittle:y,totalDataCount:R,currentPageIndex:h,setcurrentPageIndex:P,pageLength:g,setpageLength:k,lastPageIndex:_,setlastPageIndex:u,searchValue:p,setsearchValue:I,refreshStatus:V};return e.jsxs(e.Fragment,{children:[D&&e.jsx(Y,{}),e.jsx("div",{className:"h-screen bg-[#FDFCFE] flex flex-row flex-wrap justify-center items-center p-3",children:e.jsxs("div",{className:"bg-white shadow-xl rounded-tl-[44px]  h-full sm:w-1/2 lg:w-1/3 w-full rounded-xl",children:[e.jsx("div",{className:"bg-[#5846BE] h-32 w-full mx-auto rounded-br-[68px] rounded-tl-[44px] opacity-90",children:e.jsxs("div",{className:"p-4 pt-12",children:[e.jsx("h1",{className:"text-gray-50 font-bold capitalize text-2xl",children:y}),e.jsx("h1",{className:"text-gray-50 capitalize text-[12px]",children:"Budgeting Essentials: Toll Rent Payment"})]})}),e.jsx("form",{onSubmit:s.handleSubmit,onChange:O,children:e.jsx("div",{className:"p-2 md:p-10 mt-2 flex justify-center items-center  overflow-hidden ",children:e.jsxs("div",{className:"grid grid-cols-12 bg-[#EDEDF4]  w-full md:w-full    p-6 md:p-10 rounded-xl shadow-md",children:[e.jsx("div",{className:"form-group mb-4 md:mb-6 col-span-12 mt-2 text-gray-600 ",children:e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"".concat(c," text-sm py-2 text-gray-600"),children:"Search By"}),e.jsxs("select",{...s.getFieldProps("filterBy"),className:" border border-gray-100 w-full py-2 px-2 bg-white shadow-lg rounded-xl text-gray-600 font-normal text-sm",children:[e.jsx("option",{selected:!0,children:"select"}),e.jsx("option",{value:"vendorName",children:"Vendor Name"}),e.jsx("option",{value:"mobileNo",children:"Mobile No."})]}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.filterBy&&s.errors.filterBy?s.errors.filterBy:null})]})}),e.jsx("div",{className:"form-group mb-4 md:mb-6 col-span-12  text-gray-600 ",children:e.jsxs("div",{className:"",children:[d=="vendorName"&&e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:" ".concat(c," text-sm py-2 text-gray-600"),children:"Vendor Name"}),e.jsx("input",{type:"text",name:"filterField",className:" border border-gray-100 w-full py-2 px-2 bg-white shadow-lg rounded-xl text-gray-600 font-normal text-sm",onChange:s.handleChange,value:s.values.filterField})]}),d=="mobileNo"&&e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:" ".concat(c," text-sm py-2 text-gray-600"),children:"Mobile No."}),e.jsx("input",{type:"text",name:"filterField",className:" border border-gray-100 w-full py-2 px-2 bg-white shadow-lg rounded-xl text-gray-600 font-normal",onChange:s.handleChange,value:s.values.filterField})]}),e.jsx("p",{className:"text-red-500 text-xs",children:s.touched.filterField&&s.errors.filterField?s.errors.filterField:null})]})}),e.jsx("div",{className:"col-span-12 grid grid-cols-12  mt-4",children:e.jsxs("div",{className:"col-span-12",children:[" ",e.jsx("button",{type:"submit",className:"shadow-lg w-full px-6 py-3 bg-[#5846BE] text-white font-medium text-xs leading-tight rounded-xl   hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out",onClick:f,children:"Search"})]})})]})})}),e.jsx("div",{children:(i==null?void 0:i.length)>0?e.jsx(W,{canRefresh:!0,columns:M,values:U,dataList:i}):e.jsx("div",{className:"p-2 relative ",children:e.jsx("img",{src:X,className:"mx-auto h-64 p-8 pt-4"})})})]})})]})}export{Ne as default};
