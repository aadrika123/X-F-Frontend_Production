import{r as c,J as m,bX as u,j as t,b_ as N,b$ as v,e as j,K as S,c0 as d,c1 as f,c2 as C,o as b}from"./index-025cc29f.js";import{a as w}from"./index.esm-8b710b9b.js";import{F as y}from"./index.esm-f2a995d6.js";function L(e){const{userName:n,roles:a,setuserName:l,setroles:i}=c.useContext(m);return c.useEffect(()=>{let o=n==""?u("userName"):n,r=a==""?u("roles"):a;console.log("username at sidebar...",o),console.log("roles at sidebar...",r),l(o),i(r)},[]),t.jsx(t.Fragment,{children:t.jsxs("div",{className:"text-center px-1",children:[t.jsx("span",{className:"text-[40px] flex justify-center py-2 text-white",children:t.jsx(N,{})}),t.jsx("p",{className:"text-sm font-medium",style:e.sideBarStatus?{display:"none"}:{display:"block"},children:n}),a!=""&&(a==null?void 0:a.map(o=>t.jsx("p",{className:"text-xs",style:e.sideBarStatus?{display:"none"}:{display:"block"},children:o})))]})})}function _(e){const n=j(),a=S(),l=i=>{if(console.log("menu id ",i),window.innerWidth<=500&&(e.navCloseStatus||(e.NAV_CLOSE(),e.NAV_CLOSE_ORIGINAL_STATUS())),console.log("current path..",a.pathname),console.log("target path..",e==null?void 0:e.path),a.pathname===e.path){window.location.reload();return}n(e.path)};return t.jsx(t.Fragment,{children:e.subMenuStatus?t.jsx("li",{className:"cursor-pointer",style:{textDecoration:"none",fontSize:"13px",fontWeight:"400",paddingLeft:"10px"},children:e.title}):t.jsx("div",{className:"cursor-pointer",onClick:()=>l(e==null?void 0:e.menuId),children:t.jsx("li",{style:{textDecoration:"none",fontSize:"13px",fontWeight:"400",paddingLeft:"10px"},href:e.path,children:e.title})})})}const A=e=>({navCloseStatus:e.navCloseStatus,navOriginalCloseStatus:e.navOriginalCloseStatus}),O=e=>({NAV_CLOSE:n=>e({type:"NAV_CLOSE"}),NAV_CLOSE_ORIGINAL_STATUS:n=>e({type:"NAV_CLOSE_ORIGINAL_STATUS"})}),h=v(A,O)(_);function E(e){console.log("props path name.....",e==null?void 0:e.path);const[n,a]=c.useState("h-0"),l=()=>{n=="h-0"?a("h-auto"):a("h-0")};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"block select-none",children:[e.path!=null&&t.jsxs("li",{className:"cursor-pointer flex items-center pl-2 py-2 mt-2 hover:bg-sky-100 hover:border-l-2 hover:border-white  hover:text-[#1A4D8C]",style:{width:"250px"},children:[t.jsx("div",{className:"flex-none ",children:t.jsx(d,{})}),t.jsx("div",{className:"flex-initial w-40",children:t.jsx(h,{subMenuStatus:e.subMenuStatus,path:e.path,title:e.title})})]}),e.path==null&&t.jsxs("li",{onClick:l,className:"cursor-pointer flex items-center pl-2 py-2 mt-2 hover:bg-sky-100 hover:border-l-2 hover:border-white  hover:text-[#1A4D8C]",style:{width:"250px"},children:[t.jsx("div",{className:"flex-none ",children:t.jsx(d,{})}),t.jsx("div",{className:"flex-initial w-40",children:t.jsx(h,{subMenuStatus:e.subMenuStatus,path:e.path,title:e.title})}),e.subMenuStatus&&t.jsxs("div",{className:"flex-none ",children:[n=="h-0"&&t.jsx(f,{size:18}),n=="h-auto"&&t.jsx(C,{size:18})]})]}),e.path==null&&t.jsx("div",{className:`transition-all duration-1000 ${n} overflow-hidden bg-[#133e71]  text-sm`,children:e.subMenu.map(i=>t.jsxs("div",{className:"flex items-center pl-8 py-2 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-[#1A4D8C]  text-white",style:{width:"250px"},children:[t.jsx("div",{className:"flex-none ",children:t.jsx(y,{size:14})}),t.jsx("div",{className:"flex-initial w-40",children:t.jsx(h,{path:i.path,title:i.name,menuId:i==null?void 0:i.id})})]}))})]})})}function k(e){const n=S(),{menuList:a,setmenuList:l}=c.useContext(m);c.useEffect(()=>{let s=a==""?u("menuList"):a;console.log("menu at console....",s),l(s)},[]);const i=()=>{e.navOriginalCloseStatus&&e.NAV_OPEN()},o=()=>{e.navOriginalCloseStatus&&e.NAV_CLOSE()};let r=window.localStorage.getItem("device");return t.jsx(t.Fragment,{children:r!="mobile"&&n.pathname!="/landing"&&n.pathname!="/"&&n.pathname!="/login"&&n.pathname!="/mobile-login"&&n.pathname!="/error"&&t.jsxs("div",{className:(e.navCloseStatus?"w-0 md:w-9":"w-60 pr-2")+" shadow-lg px-0 bg-[#1A4D8C] h-screen pb-12 overflow-y-scroll absolute z-10 top-20 sm:top-16 left-0  text-white  transition-all  border-r-2 scbar animate__animated animate__fadeInLeft",onMouseEnter:i,onMouseLeave:o,children:[t.jsx("div",{className:"py-4",children:t.jsx(L,{sideBarStatus:e.navCloseStatus})}),t.jsx("hr",{}),t.jsxs("ul",{className:"list-none",style:e.navCloseStatus==!0?{padding:"0px 2px 0px 2px"}:{padding:"0px 10px 0px 10px"},children:[(e==null?void 0:e.menuFetchStatus)&&t.jsx("div",{className:"w-full flex justify-center items-center",children:t.jsx(b,{strokeColor:"white",strokeWidth:"5",animationDuration:"0.75",width:"25",visible:!0})}),!(e!=null&&e.menuFetchStatus)&&a!=""&&(a==null?void 0:a.map((s,g)=>{var x;return t.jsx(E,{title:s.name,path:s==null?void 0:s.path,subMenu:s==null?void 0:s.children,subMenuStatus:((x=s==null?void 0:s.children)==null?void 0:x.length)!=0,icon:t.jsx(w,{size:14})},`sidebar_menu${g}`)})),t.jsx("div",{className:"mt-10 h-20"})]})]})})}const V=e=>({navCloseStatus:e.navCloseStatus,navOriginalCloseStatus:e.navOriginalCloseStatus}),I=e=>({NAV_OPEN:n=>e({type:"NAV_OPEN"}),NAV_CLOSE:n=>e({type:"NAV_CLOSE"})}),T=v(V,I)(k);export{T as default};
