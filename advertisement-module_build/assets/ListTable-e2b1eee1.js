import{a3 as G,f as r,F as L,j as t,r as o,am as c,ao as q,ap as z,aq as V,ar as Z}from"./index-df188ed3.js";function W(a){return G({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"}}]})(a)}function J({filter:a,setFilter:h}){return r(L,{children:["Search : "," ",t("input",{className:"border-2 border-gray-600 px-2 bg-gray-200",type:"text",value:a||"",onChange:l=>h(l.target.value)})]})}function X(a){const[h,l]=o.useState("hidden"),P=o.useMemo(()=>a.columns,[]),k=o.useMemo(()=>a.dataList,[a.dataList]);o.useEffect(()=>{p(10),y()},[]);const{getTableProps:K,getTableBodyProps:v,headerGroups:g,page:u,nextPage:S,previousPage:F,canNextPage:b,canPreviousPage:x,prepareRow:O,pageOptions:R,gotoPage:f,pageCount:E,setPageSize:p,state:T,setGlobalFilter:D}=c.useTable({columns:P,data:k,initialState:{pageIndex:0}},c.useGlobalFilter,c.useSortBy,c.usePagination),{globalFilter:H,pageIndex:M,pageSize:j}=T,y=()=>{var n;return(n=a==null?void 0:a.dataList)==null?void 0:n.map((i,A)=>{var N;const B=(N=a==null?void 0:a.columns)==null?void 0:N.map((e,Q)=>{var C,w;var d;if(e!=null&&e.option&&((C=e==null?void 0:e.option)==null?void 0:C.length)>0){const m=(w=e==null?void 0:e.option)==null?void 0:w.find(I=>I.hasOwnProperty(i[e==null?void 0:e.accessor]));console.log("matching option ",m),m?d=m[i[e==null?void 0:e.accessor]]:d=i[e==null?void 0:e.accessor]}return console.log("incoming value => ",d),(e==null?void 0:e.Header.toLowerCase())!="action"&&{[e==null?void 0:e.Header]:e!=null&&e.accessor?d:A+1}});return Object.assign({},...B)})};return r(L,{children:[r("div",{className:"flex mb-2 pb-2",children:[t("div",{className:"flex-initial",children:t(J,{filter:H,setFilter:D})}),(a==null?void 0:a.exportStatus)!==!1&&t("div",{className:"flex-initial ml-2",children:r("button",{className:"bg-sky-400 px-3 pr-3  shadow-lg rounded py-1 text-white hover:shadow-2xl hover:bg-green-600 text-center relative",onMouseEnter:()=>l(""),onMouseLeave:()=>l("hidden"),children:[t(q,{data:y(),children:"Export"}),t("div",{className:h+" absolute h-full top-3 text-sm left-0 text-center animate-bounce",children:t(z,{})})]})}),t("div",{className:"flex-1",children:a.children})]}),t("div",{className:" p-4 overflow-x-auto bg-white",children:r("div",{className:"inline-block min-w-full rounded-lg overflow-hidden bg-white",children:[r("table",{...v,className:"min-w-full leading-normal",children:[t("thead",{className:"font-bold text-left text-sm bg-sky-50",children:g==null?void 0:g.map(s=>t("tr",{...s.getHeaderGroupProps(),children:s.headers.map(n=>r("th",{...n.getHeaderProps(n.getSortByToggleProps()),className:(n==null?void 0:n.className)+" px-2 py-3 border-b border-gray-200 text-gray-800  text-left text-xs capitalize",children:[n.render("Header"),t("span",{children:n.isSorted?n.isSortedDesc?"⬆️":"⬇️":""})]}))}))}),r("tbody",{...v(),className:"text-sm",children:[" ",u==null?void 0:u.map(s=>{var n;return O(s),t("tr",{...s.getRowProps(),className:"bg-white shadow-lg border-b border-gray-200",children:(n=s==null?void 0:s.cells)==null?void 0:n.map(i=>t("td",{...i.getCellProps(),className:"px-2 py-2 text-sm text-left",children:i.render("Cell")}))})}),t("tr",{children:t("td",{})})]})]}),r("div",{className:"mt-3 grid grid-cols-12",children:[r("div",{className:"col-span-2",children:["  ",t("select",{className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",value:j,onChange:s=>p(Number(s.target.value)),children:[5,10,25,50].map(s=>r("option",{value:s,children:["show ",s]},s))})]}),r("div",{className:"col-span-4 text-center col-start-5",children:["   ",r("span",{children:["page ","",r("strong",{children:[M+1," of ",R.length]}),""]})]}),r("div",{className:"col-span-4 text-right",children:[r("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>f(0),disabled:!x,children:[t(V,{})," "]}),t("button",{className:(x?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>F(),disabled:!x,children:"⬅️"}),t("button",{className:(b?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>S(),disabled:!b,children:"➡️"}),r("button",{className:"cursor-pointer hover:bg-sky-300 p-2 hover:text-white",onClick:()=>f(E-1),disabled:!b,children:["  ",t(Z,{})]})]})]})]})})]})}export{X as L,W as R};
