import{u as L,d as C,r as n,j as e,B as P,S as $,n as d,W as q,b as z}from"./index-0f9f451c.js";import{T as F}from"./TopTabs-f59f9194.js";import{a as k}from"./index.esm-78106126.js";function W(i){var f,u,j,b,v,N,y,w,S;const{id:E}=L();C();const[l,R]=n.useState(),[m,_]=n.useState(!1),[p,o]=n.useState(!1),[B,h]=n.useState(!1),H=()=>{var a,t,c,g,x,D;console.log("calling details api for now conecession...."),h(!1),o(!0);let s={applicationId:E};console.log("before fetch...",s),q[(c=(t=(a=i==null?void 0:i.detailRules)==null?void 0:a.api)==null?void 0:t.api_getAppicationFullDetail)==null?void 0:c.method]((D=(x=(g=i==null?void 0:i.detailRules)==null?void 0:g.api)==null?void 0:x.api_getAppicationFullDetail)==null?void 0:D.url,s,z()).then(function(r){var A,T;o(!1),console.log("view full details...",r==null?void 0:r.data),(A=r==null?void 0:r.data)!=null&&A.status?R((T=r==null?void 0:r.data)==null?void 0:T.data):h(!0)}).catch(function(r){o(!1),h(!0),console.log("==2 details by id error...",r)})};return console.log("test ..........at details entry"),n.useEffect(()=>{H()},[]),p?e.jsx(e.Fragment,{children:e.jsx(P,{})}):B?e.jsx($,{title:"Server is busy",desc:"Server is too busy to respond. Please try again later.",buttonText:"View Dashboard",buttonUrl:"/propertyDashboard"}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full mx-auto md:px-6",children:[e.jsx("div",{className:"pt-10",children:e.jsx(F,{title:`${(u=(f=i==null?void 0:i.detailRules)==null?void 0:f.detailInfo)==null?void 0:u.title} - ${l==null?void 0:l.application_no}`,type:"gbSaf",id:i==null?void 0:i.id,safNo:l==null?void 0:l.saf_no,active:"property"})}),e.jsx("div",{className:"flex flex-row flex-wrap justify-center",children:e.jsx("div",{class:"rounded-lg pt-4 w-full",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"text-gray-700 py-6 ",children:e.jsx("div",{className:"grid md:grid-cols-2 text-sm bg-white shadow-lg rounded-sm py-4",children:(v=(b=(j=l==null?void 0:l.fullDetailsData)==null?void 0:j.cardArray)==null?void 0:b.data)==null?void 0:v.map(s=>e.jsxs("div",{className:"grid grid-cols-2",children:[e.jsxs("div",{className:"px-4 py-2 font-semibold",children:[d(s==null?void 0:s.displayString)," : "]}),e.jsx("div",{className:"px-4 py-2",children:d(s==null?void 0:s.value)})]}))})}),e.jsx("div",{children:e.jsx("button",{type:"button",className:"block bg-indigo-500 border-2  shadow-lg text-white text-sm font-semibold rounded-lg  focus:outline-none focus:shadow-outline  hover:shadow-xs p-3 py-2 hover:bg-indigo-600 hover:text-white my-4",onClick:()=>_(!m),children:m?"Hide Full Details":"Show Full Details"})}),m&&e.jsxs(e.Fragment,{children:[(y=(N=l==null?void 0:l.fullDetailsData)==null?void 0:N.dataArray)==null?void 0:y.map(s=>{var a;return e.jsx("div",{className:"",children:e.jsx("div",{className:"container mx-auto mb-0 mt-1  py-1 ",children:e.jsx("div",{className:"md:flex no-wrap ",children:e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"py-3 rounded-sm",children:[e.jsx("div",{className:"flex items-center pl-0 space-x-2 font-semibold text-gray-900 leading-8 mb-2",children:e.jsxs("div",{className:"tracking-wide flex-1 text-md",children:[e.jsx(k,{className:"inline"}),"  ",s==null?void 0:s.headerTitle]})}),e.jsx("div",{className:"shadow-lg rounded-lg  py-6 bg-white",children:e.jsx("div",{className:"grid grid-cols-10 space-y-2  pl-4 ",children:(a=s==null?void 0:s.data)==null?void 0:a.map(t=>e.jsxs("div",{className:"col-span-2 text-xs",children:[e.jsx("div",{className:"font-bold text-sm",children:d(t==null?void 0:t.value)}),e.jsx("div",{className:"text-gray-500",children:d(t==null?void 0:t.displayString)})]}))})})]})})})})})}),(S=(w=l==null?void 0:l.fullDetailsData)==null?void 0:w.tableArray)==null?void 0:S.map(s=>{var a,t;return e.jsx("div",{className:"",children:e.jsx("div",{className:"container mx-auto mb-0 mt-1 py-1 ",children:e.jsx("div",{className:"md:flex no-wrap",children:e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"0 py-3 rounded-sm",children:[e.jsx("div",{className:"flex items-center pl-0 space-x-2 font-semibold text-gray-900 leading-8 mb-2",children:e.jsxs("span",{className:"tracking-wide",children:[e.jsx(k,{className:"inline"})," ",d(s==null?void 0:s.headerTitle)]})}),e.jsx(e.Fragment,{children:e.jsxs("table",{className:"min-w-full leading-normal mt-2 bg-sky-5 shadow-lg rounded-lg",children:[e.jsx("thead",{className:"font-bold text-left text-sm bg-white text-gray-600",children:e.jsx("tr",{children:(a=s==null?void 0:s.tableHead)==null?void 0:a.map(c=>e.jsx("th",{className:"px-2 py-3 border-b border-gray-200  text-xs capitalize text-left",children:d(c)}))})}),e.jsx("tbody",{className:"text-sm",children:(t=s==null?void 0:s.tableData)==null?void 0:t.map((c,g)=>e.jsx("tr",{className:"bg-white  border-b border-gray-200",children:c==null?void 0:c.map(x=>e.jsx("td",{className:"px-2 py-2 text-sm text-left",children:d(x)}))}))})]})})]})})})})})})]})]})})})]}),e.jsx("div",{className:"w-full mt-40"})]})}export{W as D};
