import{r as o,d as g,j as t,A as f,b as u,f as m,E as w,a as j,aJ as b}from"./index-0f9f451c.js";import{g as v,h as y}from"./index.esm-93a8aaab.js";function N(s){const[i,n]=o.useState([]),{api_fetchQuickAccessAllList:a}=m(),l=g(),r=e=>{f.post(a,{},u()).then(c=>{var x,h;console.log("quick access list response",c==null?void 0:c.data),(x=c==null?void 0:c.data)!=null&&x.status?n((h=c==null?void 0:c.data)==null?void 0:h.data):notify("quick access list error","error")}).catch(c=>{console.log("Error while fetching Filter Data",c),notify("Something went wrong!!","error")})},d=e=>{(e==null?void 0:e.is_module_different)===!0?window.location.replace(e==null?void 0:e.route):l(e==null?void 0:e.route)};return o.useEffect(()=>{r()},[]),t.jsx(t.Fragment,{children:t.jsxs("div",{className:" h-auto w-auto fixed bottom-10 right-10",children:[t.jsxs("div",{className:`bg-indigo-500 fixed bottom-10 right-10  rounded-lg w-auto ${s!=null&&s.showQuickAccess?"h-auto":"h-0"} ${s!=null&&s.showQuickAccess?"px-6 py-10":""} flex flex-col justify-center items-start   cursor-pointer shadow-2xl text-white font-semibold ${(s==null?void 0:s.showQuickAccess)&&"border-2 border-white"} overflow-hidden transition-all`,href:"",children:[t.jsx("span",{onClick:()=>s==null?void 0:s.setshowQuickAccess(!1),className:"absolute top-2 right-3 text-gray-200 text-2xl",children:"X"}),(i==null?void 0:i.length)!==0&&t.jsx("span",{onClick:()=>l("/quick-access-list"),className:"absolute bottom-2 right-3 text-gray-200 text-2xl",children:t.jsx(v,{className:"inline"})}),t.jsx("span",{className:"absolute top-3 left-3 text-gray-200 text-sm",children:"Quick Access"}),(!Array.isArray(i)||(i==null?void 0:i.length)==0)&&t.jsx("button",{onClick:()=>l("/quick-access-list"),className:"mt-10 mr-4  text-indigo-500 bg-white border border-indigo-500 text-indigo-500'} px-4 py-1 shadow-lg hover:scale-105 rounded-sm text-sm md:text-base",children:"Add Quick Access"}),i==null?void 0:i.map((e,c)=>t.jsxs("span",{onClick:()=>d(e),className:"text-xs bg-white text-gray-700 px-4 py-1 mt-4 rounded-lg hover:bg-gray-600 hover:text-white",children:[e==null?void 0:e.page_name," "]}))]}),t.jsxs("div",{onClick:()=>s==null?void 0:s.setshowQuickAccess(!0),className:`bg-indigo-500 fixed bottom-10 right-10  ${s!=null&&s.showQuickAccess?"h-0 w-0":"h-20 w-20"} ${s!=null&&s.showQuickAccess?"overflow-hidden":""} rounded-full  flex flex-col justify-center items-center   cursor-pointer shadow-2xl text-white font-semibold border-2 border-white`,href:"",children:[t.jsx(y,{className:"text-lg"}),"Quick"]})]})})}function Q(s){const{menuList:i}=o.useContext(w),n=g();j("Property"),o.useState(0);const[a,l]=o.useState(!1);let r=b("roles");r[0],console.log("roles...",r),console.log("menu list => ",i);const d=(e,c)=>{e==11900?window.location.replace(c):n(c)};return t.jsxs("div",{className:"mx-auto w-screen h-screen overflow-auto",children:[t.jsx("div",{className:"bg-white shadow-xl flex justify-center items-center relative",children:t.jsxs("div",{className:"w-full px-4 mx-auto ",children:[t.jsx("div",{className:"w-full",children:t.jsx("div",{})}),t.jsxs("div",{className:"my-4 relative",children:[t.jsx("div",{className:"grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",children:Array.isArray(i)&&(i==null?void 0:i.map(e=>t.jsx(t.Fragment,{children:t.jsxs("div",{onClick:()=>d(e==null?void 0:e.id,e==null?void 0:e.path),className:"bg-gray-100  rounded-xl flex flex-col justify-center items-center p-4 md:p-6 relative cursor-pointer",href:"",children:[t.jsx("img",{className:"h-16 w-16",src:e==null?void 0:e.icon,alt:"Icon"}),t.jsx("div",{className:"font-bold mt-4 text-center",children:e==null?void 0:e.name})]})})))}),a&&t.jsx("div",{className:"absolute top-0 left-0 w-screen h-screen bg-gray-600 opacity-50 rounded-sm blur-lg"})]}),t.jsx(N,{showQuickAccess:a,setshowQuickAccess:l})]})}),t.jsx("div",{className:"w-full mt-56"})]})}export{Q as default};
