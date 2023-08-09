import{f as t,F as B,j as e,r as s,o as N,C as H,p as M,q as E,s as R,h as D,t as O,e as q,g as _,v as $,c as j,b as T,u as I,i as V,R as G,d as z,A as K}from"./index-8dee1bf7.js";import{u as U}from"./useSetTitle-5f4a32cb.js";function J({filter:i,setFilter:m}){return t(B,{children:["Search : "," ",e("input",{className:"border-2 border-gray-600 px-2 bg-gray-200",type:"text",value:i||"",onChange:c=>m(c.target.value)})]})}function Q(i){const[m,c]=s.useState("hidden"),b=s.useMemo(()=>i.columns,[]),w=s.useMemo(()=>i.dataList,[i.dataList]);s.useEffect(()=>{n(10)},[]);const{getTableProps:C,getTableBodyProps:u,headerGroups:o,page:x,nextPage:y,previousPage:p,canNextPage:g,canPreviousPage:f,prepareRow:S,pageOptions:P,gotoPage:v,pageCount:k,setPageSize:n,state:A,setGlobalFilter:L}=N.useTable({columns:b,data:w,initialState:{pageIndex:0}},N.useGlobalFilter,N.useSortBy,N.usePagination),{globalFilter:l,pageIndex:h,pageSize:r}=A;return console.log("props.dataList",i.dataList),t(B,{children:[t("div",{className:"flex mb-2 pb-2",children:[e("div",{className:"flex-initial",children:e(J,{filter:l,setFilter:L})}),e("div",{className:"flex-initial ml-2",children:t("button",{className:"bg-sky-400 px-3 pr-3  shadow-lg rounded py-1 text-white hover:shadow-2xl hover:bg-green-600 text-center relative",onMouseEnter:()=>c(""),onMouseLeave:()=>c("hidden"),children:[e(H,{data:i.dataList,children:"Export"}),e("div",{className:m+" absolute h-full top-3 text-sm left-0 text-center animate-bounce",children:e(M,{})})]})}),e("div",{className:"flex-1",children:i.children}),i.assessmentType&&t("div",{className:"flex-initial flex",children:[t("div",{className:"flex",children:[e("div",{className:"flex-initial h-4 w-4 text-green-900 text-xs font-semibold text-center bg-green-200 rounded-full ml-4 ",children:"N"}),e("div",{className:"flex-initial text-xs ml-2",children:" New Assessment"}),e("div",{className:"flex-initial h-4 w-4 bg-blue-200  text-blue-900 text-xs font-semibold text-center rounded-full ml-4",children:"R"}),e("div",{className:"flex-initial text-xs ml-2",children:" Re-Assessment"}),e("div",{className:"flex-initial h-4 w-4 bg-red-200  text-red-900 text-xs font-semibold text-center rounded-full ml-4",children:"M"}),e("div",{className:"flex-initial text-xs ml-2",children:" Mutation"})]}),e("div",{}),e("div",{})]})]}),e("div",{className:" py-2 overflow-x-auto bg-white",children:t("div",{className:"inline-block min-w-full rounded-lg overflow-hidden bg-white",children:[t("table",{...u,className:"min-w-full leading-normal",children:[e("thead",{className:"font-bold text-left text-sm bg-sky-50",children:o==null?void 0:o.map(a=>e("tr",{...a.getHeaderGroupProps(),children:a.headers.map(d=>t("th",{...d.getHeaderProps(d.getSortByToggleProps()),className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs capitalize",children:[d.render("Header"),e("span",{children:d.isSorted?d.isSortedDesc?"⬆️":"⬇️":""})]}))}))}),t("tbody",{...u(),className:"text-sm",children:[" ",x==null?void 0:x.map(a=>{var d;return S(a),e("tr",{...a.getRowProps(),className:"bg-white shadow-lg border-b border-gray-200",children:(d=a==null?void 0:a.cells)==null?void 0:d.map(F=>e("td",{...F.getCellProps(),className:"px-2 py-2 text-sm text-left",children:F.render("Cell")}))})}),e("tr",{children:e("td",{})})]})]}),t("div",{className:"mt-3 grid grid-cols-12",children:[t("div",{className:"col-span-2",children:["  ",e("select",{className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",value:r,onChange:a=>n(Number(a.target.value)),children:[5,10,25,50].map(a=>t("option",{value:a,children:["show ",a]},a))})]}),t("div",{className:"col-span-4 text-center col-start-5",children:["   ",t("span",{children:["page ","",t("strong",{children:[h+1," of ",P.length]}),""]})]}),t("div",{className:"col-span-4 text-right",children:[t("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>v(0),disabled:!f,children:[e(E,{})," "]}),e("button",{className:(f?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>p(),disabled:!f,children:"⬅️"}),e("button",{className:(g?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>y(),disabled:!g,children:"➡️"}),t("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>v(k-1),disabled:!g,children:["  ",e(R,{})]})]})]})]})})]})}function W(i,m,c){let b="/admin";i.ctrlKey?window.open(`${b}${m}`,"_blank"):c(m)}function Z(){s.useState(!1),s.useState();const[i,m]=s.useState();s.useState(!1),s.useState();const{type:c,filterParam:b,searchValueParam:w}=D(),[C,u]=s.useState(!1),[o,x]=s.useState(),[y,p]=s.useState(!1);s.useState();const{notify:g}=s.useContext(O);U("Search Holding"),console.log("search params...",c," ",b," ",w);const{api_advtSearchPaymentParameters:f}=K(),S=q(),P=_();$(),console.log("last url.......");const v=l=>{p(!1),u(!0);const h={filterBy:l==null?void 0:l.filterBy,parameter:l==null?void 0:l.parameter};console.log("before fetch holding details....",h),z.post(f,h,S).then(r=>{var a,d;console.log("search property list",r==null?void 0:r.data),(a=r==null?void 0:r.data)!=null&&a.status?(x((d=r==null?void 0:r.data)==null?void 0:d.data),p(!0)):g("Something went wrong!!","error"),u(!1)}).catch(r=>{console.log("Error while fetching Filter Data",r),g("Something went wrong!!","error"),u(!1),p(!1)})},k=j({filterBy:T().required("This is a required field !"),parameter:T().required("This is a required field !")}),n=I({initialValues:{filterBy:"",parameter:""},onSubmit:l=>{v(l)},validationSchema:k}),A=(l,h,r)=>{let a=`/agencyApprovedDetail/${h}/${r}/Approve`;W(l,a,P)},L=[{Header:"Application No.",accessor:"application_no"},{Header:"Entity Name",accessor:"entity_name"},{Header:"Mobile No.",accessor:"mobile_no"},{Header:"Action",Cell:({row:l})=>e("button",{onClick:h=>A(h,l.original.id,l.original.type),className:"bg-indigo-500 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-700 text-white",children:"view"})}];return console.log("application type ",o),t(B,{children:[C&&e(V,{}),t("div",{className:"border shadow-xl bg-white mt-6",children:[e("div",{className:"flex ml-5 mt-2 ",children:e("p",{className:"font-bold text-3xl ml-4 mt-1 text-gray-600",children:"Search For Payment"})}),e("form",{onSubmit:n.handleSubmit,children:t("div",{className:"flex justify-center space-x-8 my-5 m-10",children:[t("div",{children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Filter By",e("span",{className:"text-red-500",children:"*"})]}),t("select",{...n.getFieldProps("filterBy"),className:"cursor-pointer w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md",children:[e("option",{value:"",children:"Select"}),e("option",{value:"entityName",children:"Entity Name"}),e("option",{value:"ownerName",children:"Owner Name"}),e("option",{value:"mobileNo",children:"Mobile No"})]}),e("p",{className:"text-red-500 text-xs",children:n.touched.filterBy&&n.errors.filterBy?n.errors.filterBy:null})]}),t("div",{children:[t("label",{className:"form-label inline-block mb-1 text-gray-600 text-sm font-semibold",children:["Search By ",i," ",e("span",{className:"text-red-500",children:"*"})]}),e("input",{type:"text",...n.getFieldProps("parameter"),className:" w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"}),e("p",{className:"text-red-500 text-xs",children:n.touched.parameter&&n.errors.parameter?n.errors.parameter:null})]}),e("div",{className:"mt-4",children:t("button",{type:"submit",className:"w-full border border-indigo-700 bg-indigo-600 hover:bg-indigo-500 text-white hover:text-black shadow-lg rounded-sm text-base font-semibold px-5 m-3 py-1",children:[" ",t("p",{className:"flex",children:[" ",t("span",{className:"mt-1 mr-2",children:[" ",e(G,{})," "]})," ","Search record"]})]})})]})})]}),t("div",{className:"mt-10",children:[y&&(o==null?void 0:o.length)!=0&&e(Q,{columns:L,dataList:o}),y&&(o==null?void 0:o.length)==0&&e("div",{className:"text-xl font-semibold text-red-400 text-center",children:"Data Not Found"}),e("div",{className:"w-full h-40"})]})]})}export{Z as default};
