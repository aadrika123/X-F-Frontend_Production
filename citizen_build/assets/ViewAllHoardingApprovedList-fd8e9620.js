import{M as A,r as t,A as K,w as Q,j as e,ag as W,h as X,S as Y,Z as $,cc as ee}from"./index-a34e0778.js";import"./setBatchUpdatesFn-83ae4628.js";import{H as te}from"./HoardingApplicationFullDetail-384d3526.js";import"./AgencyNotification-e56ee91e.js";import{A as se}from"./AdvtListTablePagination-a1cfb4ba.js";const ae={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};A.setAppElement("#root");function ue(oe){t.useState(!1),t.useState(!1);const{api_getHoardingApprovedApplicationList:N}=ee();t.useState(),t.useState(!1);const[y,L]=t.useState(),[C,H]=t.useState(),[re,I]=t.useState(!1),[P,ne]=t.useState(!1),[O,d]=t.useState(!1),D=()=>d(!0),p=()=>d(!1),E=()=>{};t.useState();const[a,M]=t.useState(!1),[u,h]=t.useState(!1),[F,n]=t.useState(!1),[V,R]=t.useState(0),[l,T]=t.useState(1),[_,g]=t.useState(0),[i,k]=t.useState(10),[c,U]=t.useState(""),[q,x]=t.useState(!1),B=s=>{I(s)},G=[{Header:"#",Cell:({row:s})=>e.jsx("div",{className:"pr-2",children:s.index+1})},{Header:"Application No",accessor:"application_no"},{Header:"Apply Date.",accessor:"application_date"},{Header:"Action",accessor:"id",Cell:({cell:s})=>e.jsx(e.Fragment,{children:e.jsx("button",{onClick:()=>Z(s.row.values.id,"Approve"),className:`bg-indigo-500 px-3 py-1 rounded leading-5 shadow-lg hover:shadow-xl hover:bg-indigo-700 \r
                hover:text-white text-white`,children:"View"})})}],Z=(s,r)=>{console.log("..............application id..............",s),console.log("..............application type..............",r),H(s),L(r),D()};t.useEffect(()=>{m(l,i,c)},[l,c,i]);const m=(s,r,J="")=>{x(!0),n(!0),K.post(N,{page:s,perPage:r,key:J},Q()).then(o=>{var f,S,v,j,w,b;M((S=(f=o.data)==null?void 0:f.data)==null?void 0:S.data),h(!0),n(!1),R((j=(v=o.data)==null?void 0:v.data)==null?void 0:j.total),g((b=(w=o.data)==null?void 0:w.data)==null?void 0:b.last_page)}).catch(o=>{console.log("Error while fetching Filter Data",o),h(!1),n(!1)}),setTimeout(()=>{x(!1)},[500])},z={totalDataCount:V,currentPageIndex:l,setcurrentPageIndex:T,pageLength:i,setpageLength:k,lastPageIndex:_,setlastPageIndex:g,fetchInboxList:m,searchValue:c,setsearchValue:U,refreshStatus:q};return F?e.jsx(e.Fragment,{children:e.jsx(W,{})}):P?e.jsx(X,{children:e.jsx(Y,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"})}):e.jsxs(e.Fragment,{children:[e.jsx($,{position:"top-right",autoClose:2e3}),e.jsx("div",{className:"container bg-white text-gray-600 h-screen mx-auto mt-16",children:e.jsxs("div",{children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 container mx-auto pt-4 ",children:e.jsx("div",{className:"col-span-12 p-2",children:e.jsxs("div",{className:"flex flex-row bg-white mb-4 rounded leading-5 shadow-md shadow-violet-100 ",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/3288/3288006.png",className:"h-10 ml-3 mt-2"}),e.jsx("h1",{className:"text-xl text-gray-700 font-semibold p-4",children:"HOARDING APPROVED APPLICATIONS"})]})})}),e.jsxs("div",{className:"grid grid-cols-1 p-2",children:[u&&(a==null?void 0:a.length)!=0&&e.jsx(se,{columns:G,dataList:a,values:z}),u&&(a==null?void 0:a.length)==0&&e.jsx("div",{className:"text-xl font-semibold text-red-400 text-center",children:"Data Not Found"})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx(A,{isOpen:O,onAfterOpen:E,onRequestClose:p,style:ae,contentLabel:"Example Modal",children:e.jsx("div",{class:" rounded-lg shadow-xl border-2 border-gray-50 mx-auto px-0 ",style:{width:"80vw",height:"100%"},children:e.jsx("div",{className:"h-[44rem] bg-white overflow-y-auto",children:e.jsx(te,{data:C,applicationType:y,showLoader:B,closeModal:p})})})})})]})})]})}export{ue as default};
