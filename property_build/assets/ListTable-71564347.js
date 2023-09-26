import{r as a,aQ as r,j as e,aS as S,aT as T,aU as A,aV as E}from"./index-9ed6f04c.js";import{G as F}from"./GlobalFilter-b13bd0b6.js";function G(l){const[b,h]=a.useState("hidden"),u=a.useMemo(()=>l.columns,[]),p=a.useMemo(()=>l.dataList,[l.dataList]);a.useEffect(()=>{m(10)},[]);const{getTableProps:M,getTableBodyProps:i,headerGroups:n,page:d,nextPage:j,previousPage:f,canNextPage:o,canPreviousPage:x,prepareRow:v,pageOptions:N,gotoPage:c,pageCount:y,setPageSize:m,state:w,setGlobalFilter:P}=r.useTable({columns:u,data:p,initialState:{pageIndex:0}},r.useGlobalFilter,r.useSortBy,r.usePagination),{globalFilter:k,pageIndex:C,pageSize:L}=w;return console.log("inside list table => ",i),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex mb-2 pb-2",children:[e.jsx("div",{className:"flex-initial",children:e.jsx(F,{filter:k,setFilter:P})}),e.jsx("div",{className:"flex-initial ml-2",children:e.jsxs("button",{className:"bg-sky-400 px-3 pr-3  shadow-lg rounded py-1 text-white hover:shadow-2xl hover:bg-green-600 text-center relative",onMouseEnter:()=>h(""),onMouseLeave:()=>h("hidden"),children:[e.jsx(S,{data:l.dataList,children:"Export"}),e.jsx("div",{className:b+" absolute h-full top-3 text-sm left-0 text-center animate-bounce",children:e.jsx(T,{})})]})}),e.jsx("div",{className:"flex-1",children:l.children}),l.assessmentType&&e.jsxs("div",{className:"flex-initial flex",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex-initial h-4 w-4 text-green-900 text-xs font-semibold text-center bg-green-200 rounded-full ml-4 ",children:"N"}),e.jsx("div",{className:"flex-initial text-xs ml-2",children:" New Assessment"}),e.jsx("div",{className:"flex-initial h-4 w-4 bg-blue-200  text-blue-900 text-xs font-semibold text-center rounded-full ml-4",children:"R"}),e.jsx("div",{className:"flex-initial text-xs ml-2",children:" Re-Assessment"}),e.jsx("div",{className:"flex-initial h-4 w-4 bg-red-200  text-red-900 text-xs font-semibold text-center rounded-full ml-4",children:"M"}),e.jsx("div",{className:"flex-initial text-xs ml-2",children:" Mutation"})]}),e.jsx("div",{}),e.jsx("div",{})]})]}),e.jsx("div",{className:" py-2 overflow-x-auto bg-white",children:e.jsxs("div",{className:"inline-block min-w-full rounded-lg overflow-hidden bg-white",children:[e.jsxs("table",{...i,className:"min-w-full leading-normal",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-sky-50",children:n==null?void 0:n.map(s=>e.jsx("tr",{...s.getHeaderGroupProps(),children:s.headers.map(t=>e.jsxs("th",{...t.getHeaderProps(t.getSortByToggleProps()),className:(t==null?void 0:t.className)+" px-2 py-3 border-[1px] text-center border-gray-200 text-gray-800 text-xs capitalize",children:[t.render("Header"),e.jsx("span",{children:t.isSorted?t.isSortedDesc?"⬆️":"⬇️":""})]}))}))}),e.jsxs("tbody",{...i(),className:"text-sm",children:[" ",d==null?void 0:d.map(s=>{var t;return v(s),e.jsx("tr",{...s.getRowProps(),className:"bg-white shadow-lg border-[1px] border-gray-200",children:(t=s==null?void 0:s.cells)==null?void 0:t.map(g=>e.jsx("td",{...g.getCellProps(),className:"px-2 py-2 text-sm text-left border-[1px] border-gray-200",children:g.render("Cell")}))})}),e.jsx("tr",{children:e.jsx("td",{})})]})]}),e.jsxs("div",{className:"mt-3 grid grid-cols-12 items-center",children:[e.jsx("div",{className:"sm:col-span-2 col-span-3 flex w-full ml-1 pr-10 items-center",children:e.jsx("input",{className:"h-10 w-[90%] placeholder:text-gray-600 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 ",placeholder:"Go to page...",type:"text",onChange:s=>{const t=s.target.value?Number(s.target.value)-1:0;c(t)}})}),e.jsxs("div",{className:"col-span-2",children:["  ",e.jsx("select",{className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",value:L,onChange:s=>m(Number(s.target.value)),children:[5,10,25,50].map(s=>e.jsxs("option",{value:s,children:["show ",s]},s))})]}),e.jsxs("div",{className:"col-span-3 sm:col-span-4 text-center sm:col-start-5 col-start-7",children:["   ",e.jsxs("span",{children:["page ","",e.jsxs("strong",{children:[C+1," of ",N.length]}),""]})]}),e.jsxs("div",{className:"col-span-3 sm:col-span-4 text-right",children:[e.jsxs("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>c(0),disabled:!x,children:[e.jsx(A,{})," "]}),e.jsx("button",{className:(x?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>f(),disabled:!x,children:"⬅️"}),e.jsx("button",{className:(o?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>j(),disabled:!o,children:"➡️"}),e.jsxs("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>c(y-1),disabled:!o,children:["  ",e.jsx(E,{})]})]})]})]})})]})}export{G as L};
