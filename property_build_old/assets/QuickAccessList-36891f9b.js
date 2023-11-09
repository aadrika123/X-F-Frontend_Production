import{K as w,r as c,u as N,E as q,a as Q,d as C,j as a,S as E,G as B,L as U,A as h,b as p,f as D}from"./index-3617a985.js";function I(f){return w({tag:"svg",attr:{viewBox:"0 0 12 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"}}]})(f)}function T(){c.useState(),N();const[f,o]=c.useState(!1);c.useState(),c.useState(!1);const{notify:n}=c.useContext(q),[g,F]=c.useState(!1),[l,u]=c.useState([]),[d,x]=c.useState([]),[H,m]=c.useState([]);Q("Quick Access List");const{api_udpateQuickAccessList:k,api_fetchQuickAccessAllList:S,api_fetchQuickAccessByUser:y}=D();C();const A=i=>{o(!0),h.post(S,{},p()).then(e=>{var s,t;console.log("quick access list response",e==null?void 0:e.data),(s=e==null?void 0:e.data)!=null&&s.status?x((t=e==null?void 0:e.data)==null?void 0:t.data):n("quick access list error","error"),o(!1)}).catch(e=>{console.log("Error while fetching Filter Data",e),n("Something went wrong!!","error"),o(!1)})},L=i=>{o(!0),h.post(y,{},p()).then(e=>{var s,t;console.log("quick access list by user response",e==null?void 0:e.data),(s=e==null?void 0:e.data)!=null&&s.status?m((t=e==null?void 0:e.data)==null?void 0:t.data):n("quick access list by user error","error"),u([]),o(!1)}).catch(e=>{console.log("Error while fetching Filter Data",e),n("Something went wrong!!","error"),u([]),o(!1)})},j=(i,e)=>{i.target.name;let s=i.target.checked;const t=l.findIndex(r=>r.id===Number(e));if(console.log("inside function....",l),console.log("filtered index...",t),t!==-1){const r=[...l];r[t]={id:e,checkStatus:s},u(r)}else u(r=>[...r,{quickAccessId:e,status:s}])};console.log("api quick access list hitted....",l);const b=(i,e)=>{o(!0);let s={data:l};console.log("data post...",s),h.post(k,s,p()).then(t=>{var r;console.log("quick access updated response",t==null?void 0:t.data),(r=t==null?void 0:t.data)!=null&&r.status?u([]):n("quick access updated error","error"),o(!1)}).catch(t=>{console.log("Error while fetching Filter Data",t),n("Something went wrong!!","error"),o(!1)})},v=[{Header:"#",Cell:({row:i})=>a.jsx("div",{className:"pr-2",children:i.index+1})},{Header:"Page",accessor:"page_name"},{Header:"Action",accessor:"id",Cell:({cell:i})=>a.jsx("div",{className:"form-group col-span-12 form-check mb-2 md:px-4 flex items-center",children:a.jsx("input",{onChange:e=>{var s;return j(e,(s=i.row.values)==null?void 0:s.id)},type:"checkbox",className:"w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"})})}];return c.useEffect(()=>{A(),L()},[]),g?a.jsx(E,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):a.jsxs(a.Fragment,{children:[f&&a.jsx(B,{}),(l==null?void 0:l.length)!==0&&a.jsxs("div",{className:"flex justify-center items-center w-full pl-4 pr-4",children:[a.jsx("div",{className:"flex-1  text-3xl text-gray-80 cursor-pointer",children:"X"}),a.jsx("div",{className:"flex-1 text-right ",children:a.jsx(I,{onClick:b,className:"inline text-3xl text-gray-80 cursor-pointer"})})]}),a.jsxs("div",{className:"mt-10",children:[(d==null?void 0:d.length)!=0&&a.jsx(U,{exportStatus:!1,columns:v,dataList:d}),a.jsx("div",{className:"w-full h-40"})]})]})}export{T as default};
