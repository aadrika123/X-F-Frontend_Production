import{r as n,cD as S,j as t,ax as J,dE as K,a as Q,w as X,au as q,A as D,b as F,dF as Y,L as Z,o as $,U as p,P as ee}from"./index-45e0c9da.js";import{G as te}from"./GlobalFilter-bb5e1091.js";function ae(a){const[N,y]=n.useState("hidden"),M=n.useMemo(()=>a.columns,[]),k=n.useMemo(()=>a.dataList,[a.dataList,a==null?void 0:a.totalCount]),[i,f]=n.useState(1),[L,h]=n.useState(!0),[g,x]=n.useState(!0),[v,c]=n.useState(0);n.useEffect(()=>{f(1)},[a==null?void 0:a.totalCount]),n.useEffect(()=>{h(!0),x(!0);let l=(a==null?void 0:a.totalCount)/(a==null?void 0:a.perPage);(a==null?void 0:a.totalCount)%(a==null?void 0:a.perPage)!=0?P(parseInt(l)+1):P(parseInt(l)),u==i&&h(!1),(u==i||i==1)&&x(!1)},[a==null?void 0:a.totalCount,v]);const{getTableProps:A,getTableBodyProps:w,headerGroups:o,page:E,nextPage:b,previousPage:C,canNextPage:H,canPreviousPage:B,prepareRow:I,pageOptions:G,gotoPage:O,pageCount:T,setPageSize:P,state:m,rows:W,setGlobalFilter:_}=S.useTable({columns:M,data:k,initialState:{pageIndex:0}},S.useGlobalFilter,S.useSortBy,S.usePagination),{globalFilter:R,pageIndex:U,pageSize:u}=m,e=()=>{u!=i&&i!=u&&(f(i+1),x(!0),a.nextPage()),u==i&&h(!1)},d=()=>{u!=i&&i!=1&&(h(!0),f(i-1),a.prevPage()),(u==i||i==1)&&x(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex mb-2 pb-2",children:[t.jsx("div",{className:"flex-initial opacity-50",children:t.jsx(te,{filter:R,setFilter:_})}),t.jsx("div",{className:"flex-initial ml-2",children:t.jsxs("button",{className:"bg-sky-400 px-3 pr-3  shadow-lg rounded py-1 text-white hover:shadow-2xl hover:bg-green-600 text-center relative",onMouseEnter:()=>y(""),onMouseLeave:()=>y("hidden"),onClick:a.exportDataF,children:["Export",t.jsx("div",{className:N+" absolute h-full top-3 text-sm left-0 text-center animate-bounce",children:t.jsx(J,{})})]})}),t.jsx("div",{className:"flex-1",children:a.children})]}),t.jsx("div",{className:"flex w-full",children:t.jsxs("div",{className:"flex-1",children:[t.jsx("span",{className:"opacity-50",children:"Total Result : "}),t.jsx("span",{className:"font-semibold",children:a==null?void 0:a.totalCount})," "]})}),(a==null?void 0:a.feedback)!=null&&t.jsx("div",{children:t.jsxs("span",{className:"text-xs bg-gray-200 opacity-50 pr-2 pl-1 py-1 rounded-sm",children:[t.jsx(K,{className:"inline text-xs text-gray-400 mr-2"}),a.feedback]})}),t.jsx("div",{className:" py-2 overflow-x-auto bg-white",children:t.jsxs("div",{className:"inline-block min-w-full rounded-lg overflow-hidden bg-white",children:[t.jsxs("table",{...w,className:"min-w-full leading-normal",children:[t.jsx("thead",{className:"font-bold text-left text-sm bg-sky-50",children:o==null?void 0:o.map(l=>t.jsx("tr",{...l.getHeaderGroupProps(),children:l.headers.map(s=>t.jsxs("th",{...s.getHeaderProps(s.getSortByToggleProps()),className:"px-2 py-3 border-[1px] text-center border-gray-200 text-gray-800 text-xs capitalize",children:[s.render("Header"),t.jsx("span",{children:s.isSorted?s.isSortedDesc?"⬆️":"⬇️":""})]}))}))}),t.jsxs("tbody",{...w(),className:"text-sm",children:[W.map((l,s)=>{var r;return I(l),t.jsx("tr",{...l.getRowProps(),className:"bg-white shadow-lg border-[1px] border-gray-200",children:(r=l==null?void 0:l.cells)==null?void 0:r.map(j=>t.jsx("td",{...j.getCellProps(),className:"px-2 py-2 text-sm text-left border-[1px] border-gray-200",children:j.render("Cell")}))})}),t.jsx("tr",{children:t.jsx("td",{})})]})]}),t.jsxs("div",{className:"mt-3 grid grid-cols-12",children:[t.jsxs("div",{className:"col-span-2",children:["  ",t.jsx("select",{className:"h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ",value:v,onChange:l=>{c(Number(l.target.value)),a.perPageC(Number(l.target.value))},children:[5,10,25,50].map(l=>t.jsxs("option",{value:l,children:["show ",l]},l))})]}),t.jsxs("div",{className:"col-span-4 text-center col-start-5",children:["   ",t.jsxs("span",{children:["page ","",t.jsxs("strong",{children:[i," of ",u]}),""]})]}),t.jsxs("div",{className:"col-span-4 text-right",children:[t.jsx("button",{className:(g?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>d(),disabled:!g,children:"⬅️"}),t.jsx("button",{className:(L?"opacity-100":"opacity-50")+" text-xl hover:bg-sky-300 hover:text-white",onClick:()=>e(),disabled:!L,children:"➡️"})]})]})]})})]})}const ie=()=>{const{get_MasterData:a,searchWardWiseCollectionSummary:N,yearList:y}=ee();Q("Ward Wise Collection Summary");const[M,k]=n.useState(),[i,f]=n.useState(),[L,h]=n.useState(),[g,x]=n.useState(!1),v="form-control block w-full px-2 py-1 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none shadow-md",c=X({initialValues:{fromDate:q(new Date),uptoDate:q(new Date)},onSubmit:e=>{E(5),C(1),A()}}),A=e=>{x(!0);let d={fromDate:c.values.fromDate,uptoDate:c.values.uptoDate,page:b,perPage:o};D.post(N,d,F()).then(l=>{var s,r,j,V,z;((s=l==null?void 0:l.data)==null?void 0:s.status)==!0&&(f((j=(r=l==null?void 0:l.data)==null?void 0:r.data)==null?void 0:j.items),B((z=(V=l==null?void 0:l.data)==null?void 0:V.data)==null?void 0:z.total)),x(!1),m(!1)}).catch(l=>(x(!1),m(!1)))};n.useEffect(()=>{D.get(a,F()).then(e=>{var d,l,s;((d=e==null?void 0:e.data)==null?void 0:d.status)==!0&&k((s=(l=e==null?void 0:e.data)==null?void 0:l.data)==null?void 0:s.ward_master)}).catch(e=>{}),D.post(y,{},F()).then(e=>{var d,l;((d=e==null?void 0:e.data)==null?void 0:d.status)==!0&&h((l=e==null?void 0:e.data)==null?void 0:l.data)}).catch(e=>{})},[]);const w=[{Header:"S.No.",Cell:({row:e})=>t.jsx("div",{children:(e==null?void 0:e.index)+1})},{Header:"Ward No",accessor:"ward_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return t.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total Holding",accessor:"holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return t.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Current",accessor:"new_holding_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return t.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Arrear",accessor:"owner_name",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return t.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}},{Header:"Total",accessor:"mobile_no",Cell:e=>{if((e==null?void 0:e.value)==null||(e==null?void 0:e.value)==""||(e==null?void 0:e.value)==null)return t.jsx("i",{className:"font-semibold ",children:"N/A"});if((e==null?void 0:e.value)!=null)return e==null?void 0:e.value}}],[o,E]=n.useState(5),[b,C]=n.useState(1),[H,B]=n.useState(0),[I,G]=n.useState(),[O,T]=n.useState(!1),[P,m]=n.useState(!1),W=()=>{C(b+1)},_=()=>{C(b-1)},R=e=>{E(e)};n.useEffect(()=>{m(!0),A()},[b,o]);const U=()=>{m(!0),T(!1);let e={wardId:c.values.wardId,key:c.values.key,page:"",perPage:H};D.post(N,e,F()).then(d=>{var l,s,r;((l=d==null?void 0:d.data)==null?void 0:l.status)==!0&&(G((r=(s=d==null?void 0:d.data)==null?void 0:s.data)==null?void 0:r.items),u()),m(!1)}).catch(d=>{m(!1)})},u=()=>{T(!0)};return t.jsxs(t.Fragment,{children:[O&&t.jsx(Y,{data:I}),P&&t.jsx(Z,{}),t.jsxs("form",{onChange:c.handleChange,onSubmit:c.handleSubmit,className:"mb-4 bg-white shadow-lg rounded-md",children:[t.jsx("h1",{className:"text-xl w-full font-bold px-8 pt-4 text-gray-700",children:"Search Report"}),t.jsxs("div",{className:"flex flex-wrap flex-row justify-start w-full gap-x-6 gap-y-2 text-sm 3xl:text-base p-4 px-8",children:[t.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[t.jsx("div",{className:"col-span-6 font-semibold",children:"From Date :"}),t.jsx("div",{className:"col-span-6",children:t.jsx("input",{value:c.values.fromDate,type:"date",name:"fromDate",id:"",className:v,disabled:g})})]}),t.jsxs("div",{className:"flex flex-col w-full md:w-[20%]",children:[t.jsx("div",{className:"col-span-6 font-semibold",children:"Upto Date :"}),t.jsx("div",{className:"col-span-6",children:t.jsx("input",{value:c.values.uptoDate,type:"date",name:"uptoDate",id:"",className:v,disabled:g})})]}),t.jsx("div",{className:"w-full md:w-[20%] flex justify-start items-end",children:g?t.jsx(t.Fragment,{children:t.jsx("div",{className:"flex justify-end",children:t.jsx($,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})})}):t.jsxs("button",{type:"submit",className:"flex flex-row items-center border border-green-600 bg-green-600 hover:bg-green-500 text-white hover:text-black shadow-lg rounded-sm text-sm font-semibold px-5 py-1 w-max",children:[" ",t.jsx("span",{className:"mr-2",children:t.jsx(p,{})}),"Search"]})})]})]}),i!=null&&(i==null?void 0:i.length)!=0?t.jsx(t.Fragment,{children:t.jsx(ae,{columns:w,dataList:i,exportStatus:!0,perPage:o,perPageC:R,totalCount:H,nextPage:W,prevPage:_,exportDataF:U})}):t.jsx(t.Fragment,{children:t.jsx("div",{className:"w-full my-4 text-center text-red-500 text-lg font-bold",children:"No Data Found"})}),t.jsx("div",{className:"h-[20vh]"})]})};export{ie as default};
