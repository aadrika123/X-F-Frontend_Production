import{M as H,r as s,u as se,a as ae,A as E,t as oe,j as e,ac as re,h as ne,S as ie,V as le,c0 as de,c2 as ce,bX as he,Z as h}from"./index-ecfe615e.js";import"./setBatchUpdatesFn-1891a6b2.js";import"./AgencyNotification-9e36f8da.js";import{H as pe}from"./HoardingApplicationFullDetail-c5a266f9.js";import{A as ge}from"./AdvtListTablePagination-6a9bf8c1.js";const ue={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"none"}};H.setAppElement("#root");function ye(xe){s.useState(!1),s.useState(!1);const{api_postHoardingRenewList:M,api_archivedApplication:P}=de(),[p,me]=s.useState();s.useState(!1);const[I,_]=s.useState(),[D,O]=s.useState(),[we,R]=s.useState(!1),[F,ve]=s.useState(!1),[T,g]=s.useState(!1),k=()=>g(!0),u=()=>g(!1),V=()=>{};s.useState();const[o,q]=s.useState(!1),[x,m]=s.useState(!1),[B,i]=s.useState(!1),[$,U]=s.useState(0),[l,z]=s.useState(1),[Q,w]=s.useState(0),[d,W]=s.useState(10),[c,X]=s.useState(""),[Z,v]=s.useState(!1),{id:f}=se();console.log("id im param",f);const G=t=>{R(t)},b=(t,a)=>{h.dismiss(),a=="success"&&h.success(t),a=="error"&&h.error(t)},J=ae(),K=[{Header:"#",Cell:({row:t})=>e.jsx("div",{className:"pr-2",children:t.index+1})},{Header:"Application No",accessor:"application_no"},{Header:"Apply Date.",accessor:"application_date"},{Header:"Action",accessor:"id",Cell:({cell:t})=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx("button",{onClick:()=>Y(t.row.values.id,"Approve"),className:`bg-indigo-500 px-3 py-1 rounded leading-5 shadow-lg hover:shadow-xl hover:bg-indigo-700 \r
                hover:text-white text-white`,children:"View"}),t.row.original.renew_option==1&&e.jsx("button",{onClick:()=>J(`/hoarding/${f}/${t.row.values.id}/renew`),className:`bg-indigo-500 px-3 py-1 ml-2 rounded leading-5 shadow-lg hover:shadow-xl hover:bg-indigo-700 \r
              hover:text-white text-white`,children:"Renew"}),t.row.original.renew_option=="Expired"&&e.jsx("button",{className:`bg-indigo-500 px-3 py-1 ml-2 rounded leading-5 shadow-lg hover:shadow-xl hover:bg-indigo-700 \r
              hover:text-white text-white`,disabled:!0,children:"Expired"}),t.row.original.renew_option=="Expired"&&e.jsx(ce.Tooltip,{className:"bg-gray-300 text-xs text-gray-900",content:"Archived",children:e.jsx("button",{onClick:()=>te(t.row.values.id),className:`bg-indigo-500 float-right px-2 py-1 ml-2 rounded leading-5 shadow-lg hover:shadow-xl hover:bg-indigo-700 \r
              hover:text-white text-white`,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-5 h-5",children:e.jsx("path",{"fill-rule":"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z","clip-rule":"evenodd"})})})})]})})}],Y=(t,a)=>{console.log("..............application id..............",t),console.log("..............application type..............",a),O(t),_(a),k()};s.useEffect(()=>{j(l,d,c)},[l,c,d]);const j=(t,a,r="")=>{v(!0),i(!0),E.post(M,{page:t,perPage:a,key:r},oe()).then(n=>{var S,N,y,A,L,C;q((N=(S=n.data)==null?void 0:S.data)==null?void 0:N.data),m(!0),i(!1),U((A=(y=n.data)==null?void 0:y.data)==null?void 0:A.total),w((C=(L=n.data)==null?void 0:L.data)==null?void 0:C.last_page)}).catch(n=>{console.log("Error while fetching Filter Data",n),m(!1),i(!1)}),setTimeout(()=>{v(!1)},[500])},ee={totalDataCount:$,currentPageIndex:l,setcurrentPageIndex:z,pageLength:d,setpageLength:W,lastPageIndex:Q,setlastPageIndex:w,fetchInboxList:j,searchValue:c,setsearchValue:X,refreshStatus:Z};console.log("application renew list",p);const te=t=>{const a={applicationId:t};console.log("request body in renew...12",t),E.post(`${P}`,a,he()).then(function(r){console.log("archived response",r.data),b("Archived successfully","success")}).catch(function(r){console.log("errorrr.... ",r),b("failed to archived","error")})};return B?e.jsx(e.Fragment,{children:e.jsx(re,{})}):F?e.jsx(ne,{children:e.jsx(ie,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"})}):(console.log("application data in renew list 12",p),e.jsxs(e.Fragment,{children:[e.jsx(le,{position:"top-right",autoClose:2e3}),e.jsx("div",{className:"container bg-white text-gray-600 h-screen mx-auto mt-12",children:e.jsxs("div",{children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4 container mx-auto pt-4 ",children:e.jsx("div",{className:"col-span-12 p-2",children:e.jsxs("div",{className:"flex flex-row bg-white mb-4 rounded leading-5 shadow-md shadow-violet-100 ",children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/3288/3288006.png",className:"h-10 ml-3 mt-2"}),e.jsx("h1",{className:"text-xl text-gray-700 font-semibold p-4",children:"RENEW APPLICATIONS"})]})})}),e.jsxs("div",{className:"grid grid-cols-1 p-2",children:[x&&(o==null?void 0:o.length)!=0&&e.jsx(ge,{columns:K,dataList:o,values:ee}),x&&(o==null?void 0:o.length)==0&&e.jsx("div",{className:"text-xl font-semibold text-red-400 text-center",children:"Data Not Found"})]}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx(H,{isOpen:T,onAfterOpen:V,onRequestClose:u,style:ue,contentLabel:"Example Modal",children:e.jsx("div",{class:" rounded-lg shadow-xl border-2 border-gray-50 mx-auto px-0 ",style:{width:"80vw",height:"100%"},children:e.jsx("div",{className:"h-[44rem] bg-white overflow-y-auto",children:e.jsx(pe,{data:D,applicationType:I,showLoader:G,closeModal:u})})})})})]})})]}))}export{ye as default};
