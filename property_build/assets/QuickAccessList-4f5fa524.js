import{a0 as w,r as c,u as N,J as Q,a as C,e as q,j as t,S as B,L as U,V as I,A as f,b as p,g as V}from"./index-48b3dac3.js";function E(x){return w({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.03 5.72a.75.75 0 0 1 0 1.06l-11.5 11.5a.747.747 0 0 1-1.072-.012l-5.5-5.75a.75.75 0 1 1 1.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 0 1 1.06 0Z"}}]})(x)}function _(){c.useState(),N();const[x,r]=c.useState(!1);c.useState(),c.useState(!1);const{notify:n}=c.useContext(Q),[h,H]=c.useState(!1),[l,u]=c.useState([]),[d,g]=c.useState([]),[P,m]=c.useState([]);C("Quick Access List");const{api_udpateQuickAccessList:k,api_fetchQuickAccessAllList:S,api_fetchQuickAccessByUser:A}=V();q();const y=i=>{r(!0),f.post(S,{},p()).then(e=>{var s,a;(s=e==null?void 0:e.data)!=null&&s.status?g((a=e==null?void 0:e.data)==null?void 0:a.data):n("quick access list error","error"),r(!1)}).catch(e=>{n("Something went wrong!!","error"),r(!1)})},L=i=>{r(!0),f.post(A,{},p()).then(e=>{var s,a;(s=e==null?void 0:e.data)!=null&&s.status?m((a=e==null?void 0:e.data)==null?void 0:a.data):n("quick access list by user error","error"),u([]),r(!1)}).catch(e=>{n("Something went wrong!!","error"),u([]),r(!1)})},j=(i,e)=>{i.target.name;let s=i.target.checked;const a=l.findIndex(o=>o.id===Number(e));if(a!==-1){const o=[...l];o[a]={id:e,checkStatus:s},u(o)}else u(o=>[...o,{quickAccessId:e,status:s}])},b=(i,e)=>{r(!0);let s={data:l};f.post(k,s,p()).then(a=>{var o;(o=a==null?void 0:a.data)!=null&&o.status?u([]):n("quick access updated error","error"),r(!1)}).catch(a=>{n("Something went wrong!!","error"),r(!1)})},v=[{Header:"#",Cell:({row:i})=>t.jsx("div",{className:"pr-2",children:i.index+1})},{Header:"Page",accessor:"page_name"},{Header:"Action",accessor:"id",Cell:({cell:i})=>t.jsx("div",{className:"form-group col-span-12 form-check mb-2 md:px-4 flex items-center",children:t.jsx("input",{onChange:e=>{var s;return j(e,(s=i.row.values)==null?void 0:s.id)},type:"checkbox",className:"w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"})})}];return c.useEffect(()=>{y(),L()},[]),h?t.jsx(B,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):t.jsxs(t.Fragment,{children:[x&&t.jsx(U,{}),(l==null?void 0:l.length)!==0&&t.jsxs("div",{className:"flex justify-center items-center w-full pl-4 pr-4",children:[t.jsx("div",{className:"flex-1  text-3xl text-gray-80 cursor-pointer",children:"X"}),t.jsx("div",{className:"flex-1 text-right ",children:t.jsx(E,{onClick:b,className:"inline text-3xl text-gray-80 cursor-pointer"})})]}),t.jsxs("div",{className:"mt-10",children:[(d==null?void 0:d.length)!=0&&t.jsx(I,{exportStatus:!1,columns:v,dataList:d}),t.jsx("div",{className:"w-full h-40"})]})]})}export{_ as default};
