import{M as A,r as t,A as Q,w as W,j as e,ag as X,h as Y,S as Z,c9 as $}from"./index-58de3b88.js";import"./setBatchUpdatesFn-81772350.js";import{H as ee}from"./HoardingApplicationFullDetail-9a5d2eca.js";import"./AgencyNotification-d6a6665b.js";import{A as te}from"./AdvtListTablePagination-dcb46a92.js";const se={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};A.setAppElement("#root");function pe(ae){t.useState(!1),t.useState(!1);const{api_getHoardingRejectedApplicationList:N}=$();t.useState();const[y,L]=t.useState(),[C,E]=t.useState(),[H,oe]=t.useState(!1),[ne,I]=t.useState(!1),[D,d]=t.useState(!1);t.useState(!1);const M=()=>d(!0),p=()=>d(!1),O=()=>{};t.useState();const[a,P]=t.useState(!1),[u,h]=t.useState(!1),[R,r]=t.useState(!1),[T,F]=t.useState(0),[l,V]=t.useState(1),[_,g]=t.useState(0),[i,k]=t.useState(10),[c,U]=t.useState(""),[q,x]=t.useState(!1),B=s=>{I(s)},G=[{Header:"#",Cell:({row:s})=>e.jsx("div",{className:"pr-2",children:s.index+1})},{Header:"Application No",accessor:"application_no"},{Header:"Apply Date.",accessor:"application_date"},{Header:"Action",accessor:"id",Cell:({cell:s})=>e.jsx("button",{onClick:()=>J(s.row.values.id,"Active"),className:`bg-indigo-500 px-3 py-1 rounded leading-5 shadow-lg hover:shadow-xl hover:bg-indigo-700 \r
                hover:text-white text-white`,children:"View"})}],J=(s,n)=>{console.log("..............application id..............",s),console.log("..............application type..............",n),E(s),L(n),M()};t.useEffect(()=>{m(l,i,c)},[l,c,i]);const m=(s,n,K="")=>{x(!0),r(!0),Q.post(N,{page:s,perPage:n,key:K},W()).then(o=>{var f,S,j,v,w,b;P((S=(f=o.data)==null?void 0:f.data)==null?void 0:S.data),h(!0),r(!1),F((v=(j=o.data)==null?void 0:j.data)==null?void 0:v.total),g((b=(w=o.data)==null?void 0:w.data)==null?void 0:b.last_page)}).catch(o=>{console.log("Error while fetching Filter Data",o),h(!1),r(!1)}),setTimeout(()=>{x(!1)},[500])},z={totalDataCount:T,currentPageIndex:l,setcurrentPageIndex:V,pageLength:i,setpageLength:k,lastPageIndex:_,setlastPageIndex:g,fetchInboxList:m,searchValue:c,setsearchValue:U,refreshStatus:q};return R?e.jsx(e.Fragment,{children:e.jsx(X,{})}):H?e.jsx(Y,{children:e.jsx(Z,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"container bg-white text-gray-600 h-screen mx-auto mt-16",children:e.jsxs("div",{children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 container mx-auto pt-4 ",children:e.jsx("div",{className:"col-span-12 p-2",children:e.jsxs("div",{className:"flex flex-row bg-white mb-4 rounded leading-5 shadow-md shadow-violet-100 ",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/3288/3288006.png",className:"h-10 ml-3 mt-2"}),e.jsx("h1",{className:"text-xl text-gray-700 font-semibold p-4",children:"HOARDING REJECTED APPLICATIONS"})]})})}),e.jsxs("div",{className:"grid grid-cols-1 p-2",children:[u&&(a==null?void 0:a.length)!=0&&e.jsx(te,{columns:G,dataList:a,values:z}),u&&(a==null?void 0:a.length)==0&&e.jsx("div",{className:"text-xl font-semibold text-red-400 text-center",children:"Data Not Found"})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx(A,{isOpen:D,onAfterOpen:O,onRequestClose:p,style:se,contentLabel:"Example Modal",children:e.jsx("div",{class:" rounded-lg shadow-xl border-2 border-gray-50 mx-auto px-0 ",style:{width:"80vw",height:"100%"},children:e.jsx("div",{className:"h-[44rem] bg-white overflow-y-auto",children:e.jsx(ee,{data:C,applicationType:y,showLoader:B,closeModal:p})})})})})]})})})}export{pe as default};