import{r as a,c as h,a as x,j as t}from"./index--WTeRErR.js";import{T as ct}from"./ThemeStyle-mSkMd4lv.js";import{u as nt}from"./formik.esm-8kCYIjK3.js";import{R as rt}from"./RentalApiList-47uYX2rF.js";import{R as it,s as dt}from"./search-vQl9znIl.js";import{L as mt}from"./Loader-rRSPKwVM.js";import"./ShopListViewInCard-oJ3UKUwj.js";import"./PowerupFunctions-oD_B7n7p.js";import"./TollListViewInCard-t9v0HrFR.js";function Tt(){const{titleColor:d}=ct(),{api_UlbCircleList:E,api_locationByCircleList:R,api_tcCollectionReport:_,api_tcShopCollectionReport:B}=rt(),[ht,P]=a.useState();a.useState(null);const[xt,H]=a.useState(),[r,I]=a.useState(null),[V,n]=a.useState(!1),[pt,k]=a.useState(),[ut,A]=a.useState(),[gt,O]=a.useState(),[ft,$]=a.useState(),[z,M]=a.useState(),[i,U]=a.useState(),[q,G]=a.useState(0),[p,J]=a.useState(1),[K,u]=a.useState(0),[g,Q]=a.useState(5),[f,W]=a.useState(""),[X,jt]=a.useState(!1),l=nt({initialValues:{dateFrom:"",dateTo:"",collectionType:""},onSubmit:e=>{j(e==null?void 0:e.dateFrom,e==null?void 0:e.dateTo)}}),j=(e,c)=>{Y(e,c,p,g,f)},Y=(e,c,s,ot,lt="")=>{n(!0);let m;i==1&&(m=B),i==2&&(m=_),h.post("".concat(m),{fromDate:e,toDate:c,page:s,perPage:ot,key:lt},x()).then(o=>{var N,b,S,w,v,C,D,L,T,F;console.log("toll list",(b=(N=o==null?void 0:o.data)==null?void 0:N.data)==null?void 0:b.totalCollection),o.data.status&&(M((w=(S=o==null?void 0:o.data)==null?void 0:S.data)==null?void 0:w.totalCollection),I((C=(v=o==null?void 0:o.data)==null?void 0:v.data)==null?void 0:C.data),G((L=(D=o.data)==null?void 0:D.data)==null?void 0:L.total),u((F=(T=o.data)==null?void 0:T.data)==null?void 0:F.last_page)),n(!1)}).catch(o=>{console.log(o),n(!1)})},Z=[{Header:"Shop no.",accessor:"shop_no"},{Header:"Allottee",accessor:"allottee"},{Header:"Last paid on",accessor:"updated_at"},{Header:"Area",accessor:"circle_name"},{Header:"Rate",accessor:"rate"}];a.useEffect(()=>{tt()},[]);const tt=()=>{n(!0),h.post(E,{},x()).then(e=>{console.log("circle list 1",e.data),e.data.status&&P(e.data.data),n(!1)}).catch(e=>{console.log(e),n(!1)})},et=e=>{console.log("circle id ",e),n(!0);const c={circleId:e};h.post(R,c,x()).then(s=>{console.log("location list",s.data),s.data.status&&H(s.data.data),n(!1)}).catch(s=>{console.log(s),n(!1)})},at=e=>{console.log("target type",e.target.type),console.log("check box name",e.target.name),console.log("target id..",e.target.value);let c=e.target.name,s=e.target.value;c=="circle"&&et(s),c=="location"&&k(s),c=="filterBy"&&A(s),c=="dateFrom"&&O(s),c=="dateTo"&&$(s),c=="collectionType"&&U(s)};console.log("===1==",i);let y="Collection Report";const st={tittle:y,totalDataCount:q,currentPageIndex:p,setcurrentPageIndex:J,pageLength:g,setpageLength:Q,lastPageIndex:K,setlastPageIndex:u,searchValue:f,setsearchValue:W,refreshStatus:X,collectionTypeVal:i};return t.jsxs(t.Fragment,{children:[V&&t.jsx(mt,{}),t.jsx("div",{className:"h-auto bg-[#FDFCFE] flex flex-row flex-wrap justify-center items-center p-3",children:t.jsxs("div",{className:"bg-white shadow-xl rounded-tl-[44px]  h-full sm:w-1/2 lg:w-1/3 w-full rounded-xl",children:[t.jsx("div",{className:"bg-[#5846BE] h-32 w-full mx-auto rounded-br-[68px] rounded-tl-[44px]  opacity-90",children:t.jsxs("div",{className:"p-4 pt-12",children:[t.jsx("h1",{className:"text-gray-50 font-bold capitalize text-2xl",children:y}),t.jsx("h1",{className:"text-gray-50 capitalize text-[12px]",children:"Budgeting Essentials: Toll Rent Payment"})]})}),t.jsx("form",{onSubmit:l.handleSubmit,onChange:at,children:t.jsx("div",{className:"p-2 md:p-10 mt-2 flex justify-center items-center  overflow-hidden ",children:t.jsxs("div",{className:"grid grid-cols-12 bg-[#EDEDF4]  w-full md:w-1/3 p-6 md:p-10 rounded-xl shadow-md",children:[t.jsx("div",{className:"form-group mb-4 md:mb-6 col-span-12 mt-2 text-gray-600 ",children:t.jsxs("div",{className:"",children:[t.jsx("h1",{className:"".concat(d," text-sm py-2 text-gray-600"),children:"Collection"}),t.jsxs("select",{...l.getFieldProps("collectionType"),className:"border border-gray-100 w-full py-2 px-2 bg-white shadow-lg rounded-xl text-gray-600 font-normal text-sm",children:[t.jsx("option",{value:"",selected:!0,disabled:!0,children:"Select"}),t.jsx("option",{value:1,children:"Municipal Rental"}),t.jsx("option",{value:2,children:"Daily License"})]})]})}),t.jsx("div",{className:"form-group mb-4 md:mb-6 col-span-12 mt-2 text-gray-600 ",children:t.jsxs("div",{className:"",children:[t.jsx("h1",{className:"".concat(d," text-sm py-2 text-gray-600"),children:"Date From"}),t.jsx("input",{type:"date",name:"dateFrom",className:" border border-gray-100 w-full py-2 px-2 bg-white shadow-lg rounded-xl text-gray-600 font-normal text-sm",onChange:l.handleChange,value:l.values.dateFrom}),t.jsx("p",{className:"text-red-500 text-xs",children:l.touched.dateFrom&&l.errors.dateFrom?l.errors.dateFrom:null})]})}),t.jsx("div",{className:"form-group mb-4 md:mb-6 col-span-12  text-gray-600 ",children:t.jsxs("div",{className:"",children:[t.jsx("h1",{className:" ".concat(d," text-sm py-2 text-gray-600"),children:"Date To"}),t.jsx("input",{type:"date",name:"dateTo",className:" border border-gray-100 w-full py-2 px-2 bg-white shadow-lg rounded-xl text-gray-600 font-normal text-sm",onChange:l.handleChange,value:l.values.dateTo}),t.jsx("p",{className:"text-red-500 text-xs",children:l.touched.dateTo&&l.errors.dateTo?l.errors.dateTo:null})]})}),t.jsx("div",{className:"col-span-12 grid grid-cols-12  mt-4",children:t.jsxs("div",{className:"col-span-12",children:[" ",t.jsx("button",{type:"submit",className:"shadow-lg w-full px-6 py-3 bg-[#5846BE] text-white font-medium text-xs leading-tight rounded-xl   hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out",onClick:j,children:"Search"})]})})]})})}),t.jsx("div",{className:"p-3",children:t.jsxs("div",{className:"col-span-12 grid grid-cols-12  shadow-lg hover:shadow-lg   bg-[#EDEDF4] text-[#5846BE]",children:[t.jsx("div",{className:"col-span-10",children:t.jsxs("div",{type:"submit",className:" w-full px-4 py-3  font-bold text-lg  ",children:["COLLECTION - ",z]})}),t.jsx("div",{className:"col-span-2",children:t.jsx("img",{src:"https://cdn-icons-png.flaticon.com/128/3592/3592606.png",className:"h-8 mt-2.5 opacity-80"})})]})}),t.jsx("div",{children:(r==null?void 0:r.length)>0?t.jsx(it,{canRefresh:!0,columns:Z,values:st,dataList:r}):t.jsx("div",{className:"p-2 relative ",children:t.jsx("img",{src:dt,className:"mx-auto h-64 p-8 pt-4"})})})]})})]})}export{Tt as default};
