import{M as A,r as t,u as W,a as X,A as Y,w as Z,j as e,ag as $,i as ee,S as te,cO as se}from"./index-12835ad9.js";import"./setBatchUpdatesFn-fb47d80a.js";import"./AgencyNotification-d28460fa.js";import{H as ae}from"./HoardingApplicationFullDetail-fe432fac.js";import{A as oe}from"./AdvtListTablePagination-082daeb2.js";import"./Search-d9c984f8.js";const re={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};A.setAppElement("#root");function xe(ne){t.useState(!1),t.useState(!1);const{api_getHoardingArchivedList:N}=se();t.useState(),t.useState(!1);const[y,L]=t.useState(),[C,H]=t.useState(),[I,ie]=t.useState(!1),[le,P]=t.useState(!1),[E,c]=t.useState(!1),M=()=>c(!0),p=()=>c(!1),O=()=>{};t.useState();const[a,D]=t.useState(!1),[u,h]=t.useState(!1),[F,n]=t.useState(!1),[T,V]=t.useState(0),[i,R]=t.useState(1),[_,g]=t.useState(0),[l,k]=t.useState(10),[d,U]=t.useState(""),[q,x]=t.useState(!1),{id:B}=W();console.log("id im param",B);const z=s=>{P(s)};X();const G=[{Header:"#",Cell:({row:s})=>e.jsx("div",{className:"pr-2",children:s.index+1})},{Header:"Application No",accessor:"application_no"},{Header:"Apply Date.",accessor:"application_date"},{Header:"Action",accessor:"id",Cell:({cell:s})=>e.jsx("div",{children:e.jsx("button",{onClick:()=>J(s.row.values.id,"Approve"),className:`bg-indigo-500 px-3 py-1 rounded leading-5 shadow-lg hover:shadow-xl hover:bg-indigo-700 \r
                hover:text-white text-white`,children:"View"})})}],J=(s,r)=>{console.log("..............application id..............",s),console.log("..............application type..............",r),H(s),L(r),M()};t.useEffect(()=>{m(i,l,d)},[i,d,l]);const m=(s,r,Q="")=>{x(!0),n(!0),Y.post(N,{page:s,perPage:r,key:Q},Z()).then(o=>{var f,S,v,j,b,w;D((S=(f=o.data)==null?void 0:f.data)==null?void 0:S.data),h(!0),n(!1),V((j=(v=o.data)==null?void 0:v.data)==null?void 0:j.total),g((w=(b=o.data)==null?void 0:b.data)==null?void 0:w.last_page)}).catch(o=>{console.log("Error while fetching Filter Data",o),h(!1),n(!1)}),setTimeout(()=>{x(!1)},[500])},K={totalDataCount:T,currentPageIndex:i,setcurrentPageIndex:R,pageLength:l,setpageLength:k,lastPageIndex:_,setlastPageIndex:g,fetchInboxList:m,searchValue:d,setsearchValue:U,refreshStatus:q};return F?e.jsx(e.Fragment,{children:e.jsx($,{})}):I?e.jsx(ee,{children:e.jsx(te,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"container bg-white text-gray-600 h-screen mx-auto mt-12",children:e.jsxs("div",{children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 container mx-auto pt-4 ",children:e.jsx("div",{className:"col-span-12 p-2",children:e.jsxs("div",{className:"flex flex-row bg-white mb-4 rounded leading-5 shadow-md shadow-violet-100 ",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/3288/3288006.png",className:"h-10 ml-3 mt-2"}),e.jsx("h1",{className:"text-xl text-gray-700 font-semibold p-4",children:"ARCHIVED APPLICATIONS"})]})})}),e.jsxs("div",{className:"grid grid-cols-1 p-2",children:[u&&(a==null?void 0:a.length)!=0&&e.jsx(oe,{columns:G,dataList:a,values:K}),u&&(a==null?void 0:a.length)==0&&e.jsx("div",{className:"text-xl font-semibold text-red-400 text-center",children:"Data Not Found"})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx(A,{isOpen:E,onAfterOpen:O,onRequestClose:p,style:re,contentLabel:"Example Modal",children:e.jsx("div",{class:" rounded-lg shadow-xl border-2 border-gray-50 mx-auto px-0 ",style:{width:"80vw",height:"100%"},children:e.jsx("div",{className:"h-[44rem] bg-white overflow-y-auto",children:e.jsx(ae,{data:C,applicationType:y,showLoader:z,closeModal:p})})})})})]})})})}export{xe as default};
