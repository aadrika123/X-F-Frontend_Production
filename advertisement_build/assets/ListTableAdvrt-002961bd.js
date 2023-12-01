import{u as v,f as t,F as f,j as e,r,aj as n,ak as R,al as j,am as D,an as E}from"./index-5e7d8a49.js";function O({filter:a,setFilter:d}){const{t:o}=v();return t(f,{children:[o("dashboardPage.search.label")," : "," ",e("input",{className:"border-2 border-gray-600 px-2 bg-gray-200",type:"text",value:a||"",onChange:i=>d(i.target.value)})]})}function G(a){const{t:d}=v(),[o,i]=r.useState("hidden"),N=r.useMemo(()=>a.columns,[]),y=r.useMemo(()=>a.dataList,[a.dataList]);r.useEffect(()=>{u(10)},[]);const{getTableProps:B,getTableBodyProps:g,headerGroups:c,page:h,nextPage:w,previousPage:P,canNextPage:x,canPreviousPage:b,prepareRow:k,pageOptions:C,gotoPage:m,pageCount:L,setPageSize:u,state:T,setGlobalFilter:A}=n.useTable({columns:N,data:y,initialState:{pageIndex:0}},n.useGlobalFilter,n.useSortBy,n.usePagination),{globalFilter:F,pageIndex:S,pageSize:M}=T;return console.log("props.dataList",a.dataList),t(f,{children:[t("div",{className:"flex mb-2 pb-2",children:[e("div",{className:"flex-initial",children:e(O,{filter:F,setFilter:A})}),e("div",{className:"flex-initial ml-2",children:t("button",{className:"bg-sky-400 px-3 pr-3  shadow-lg rounded py-1 text-white hover:shadow-2xl hover:bg-green-600 text-center relative",onMouseEnter:()=>i(""),onMouseLeave:()=>i("hidden"),children:[t(R,{data:a.dataList,children:[" ",d("dashboardPage.export.label")]}),e("div",{className:o+" absolute h-full top-3 text-sm left-0 text-center animate-bounce",children:e(j,{})})]})}),e("div",{className:"flex-1",children:a.children}),a.assessmentType&&t("div",{className:"flex-initial flex",children:[t("div",{className:"flex",children:[e("div",{className:"flex-initial h-4 w-4 text-green-900 text-xs font-semibold text-center bg-green-200 rounded-full ml-4 ",children:"N"}),e("div",{className:"flex-initial text-xs ml-2",children:" New Assessment"}),e("div",{className:"flex-initial h-4 w-4 bg-blue-200  text-blue-900 text-xs font-semibold text-center rounded-full ml-4",children:"R"}),e("div",{className:"flex-initial text-xs ml-2",children:" Re-Assessment"}),e("div",{className:"flex-initial h-4 w-4 bg-red-200  text-red-900 text-xs font-semibold text-center rounded-full ml-4",children:"M"}),e("div",{className:"flex-initial text-xs ml-2",children:" Mutation"})]}),e("div",{}),e("div",{})]})]}),e("div",{className:" py-2 overflow-x-auto bg-white",children:t("div",{className:"inline-block min-w-full rounded-lg overflow-hidden bg-white",children:[t("table",{...g,className:"min-w-full leading-normal",children:[e("thead",{className:"font-bold text-left text-sm bg-sky-50",children:c==null?void 0:c.map(l=>e("tr",{...l.getHeaderGroupProps(),children:l.headers.map(s=>t("th",{...s.getHeaderProps(s.getSortByToggleProps()),className:"px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs capitalize",children:[s.render("Header"),e("span",{children:s.isSorted?s.isSortedDesc?"⬆️":"⬇️":""})]}))}))}),t("tbody",{...g(),className:"text-sm",children:[" ",h==null?void 0:h.map(l=>{var s;return k(l),e("tr",{...l.getRowProps(),className:"bg-white shadow-lg border-b border-gray-200",children:(s=l==null?void 0:l.cells)==null?void 0:s.map(p=>e("td",{...p.getCellProps(),className:"px-2 py-2 text-sm text-left",children:p.render("Cell")}))})}),e("tr",{children:e("td",{})})]})]}),t("div",{className:"mt-3 grid grid-cols-12",children:[t("div",{className:"col-span-2",children:[" ",e("select",{className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",value:M,onChange:l=>u(Number(l.target.value)),children:[5,10,25,50].map(l=>t("option",{value:l,children:["show ",l]},l))})]}),t("div",{className:"col-span-4 text-center col-start-5",children:[" ",t("span",{children:["page ","",t("strong",{children:[S+1," of ",C.length]}),""]})]}),t("div",{className:"col-span-4 text-right",children:[t("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>m(0),disabled:!b,children:[e(D,{})," "]}),e("button",{className:(b?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>P(),disabled:!b,children:"⬅️"}),e("button",{className:(x?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>w(),disabled:!x,children:"➡️"}),t("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>m(L-1),disabled:!x,children:[" ",e(E,{})]})]})]})]})})]})}export{G as L};