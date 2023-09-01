import{M as a,r as n,a as M,A as z,c0 as C,j as e,c5 as H}from"./index-e24d5f40.js";const x={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none"}};a.setAppElement("#root");function S(h){var c;const{api_getAgencyDetails:m}=H(),[s,g]=n.useState(),[p,r]=n.useState(!1),[u,l]=n.useState(!1),b=()=>r(!0),i=()=>r(!1),f=()=>{},v=()=>l(!0),d=()=>l(!1),w=()=>{},j=()=>{b()},y=()=>{v()},[N,O]=n.useState([{id:"1",notification:"Hoarding Has Been Approved",hoardingNo:"123456789",action:"pay"},{id:"2",notification:"Hoarding Has Been Approved",hoardingNo:"3433456789",action:"pay"},{id:"3",notification:"Hoarding Has Been Approved",hoardingNo:"1344345688",action:"pay"},{id:"4",notification:"Hoarding Has Been Approved",hoardingNo:"1344345688",action:"pay"}]),k=M();n.useEffect(()=>{A()},[]);const A=()=>{const t={applicationId:h.applicationId};z.post(`${m}`,t,C()).then(function(o){console.log("agency details",o.data.data.data),g(o.data.data.data)}).catch(function(o){console.log("errorrr.... ",o)})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex space-x-6 justify-end mr-16",children:[e.jsxs("button",{className:"flex text-indigo-500  darks:bg-pink-900 darks:bg-opacity-60 border border-indigo-500 bg-white shadow-lg px-2 font-PublicSans ",onClick:()=>j(),children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-8 h-8 p-1 ",children:[e.jsx("path",{"fill-rule":"evenodd",d:"M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z","clip-rule":"evenodd"}),e.jsx("path",{d:"M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"})]}),e.jsx("h1",{className:"mt-1",children:"Profile"})]}),e.jsxs("button",{className:"flex text-red-500 darks:bg-pink-900 darks:bg-opacity-60 border border-red-500 bg-white shadow-lg px-2 font-PublicSans",onClick:()=>y(),children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-8 h-8 p-1 rounded-full ",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"})}),e.jsx("h1",{className:"mt-1",children:"Notifications"})]})]}),e.jsx(a,{isOpen:p,onAfterOpen:f,onRequestClose:i,style:x,contentLabel:"Example Modal",children:e.jsxs("div",{className:"overflow-auto w-full",children:[e.jsx("button",{className:"float-right bg-red-400 rounded-full px-2 py-1 text-xs text-white",onClick:i,children:e.jsx("h1",{children:"Close"})}),e.jsx("div",{class:"relative max-w-md mx-auto md:max-w-2xl  min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16 ",children:e.jsxs("div",{class:"px-6",children:[e.jsx("div",{class:"flex flex-wrap justify-center",children:e.jsx("div",{class:"w-full flex justify-center",children:e.jsx("div",{class:"relative",children:e.jsx("img",{src:"https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",class:"shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"})})})}),e.jsxs("div",{class:"text-center  mt-32",children:[e.jsx("h3",{class:"text-2xl text-slate-700 font-bold leading-normal mb-1",children:s==null?void 0:s.entity_name}),e.jsxs("div",{class:"text-sm mt-0 mb-2 text-violet-400 font-bold uppercase",children:[e.jsx("i",{class:"fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"}),"Your License is valid for 5 years ",e.jsx("br",{})," ",s==null?void 0:s.approve_date,"  to  ",s==null?void 0:s.expiry_date]})]}),e.jsx("div",{class:"mt-6 py-6 border-t border-slate-200 text-center",children:e.jsx("div",{class:"flex flex-wrap justify-center items-center",children:e.jsxs("div",{class:"w-full overflow-auto px-4",children:[e.jsx("div",{class:"font-light leading-relaxed text-slate-600 mb-4 ",children:e.jsx("div",{className:"text-center mx-auto",children:e.jsxs("table",{className:"rounded-lg w-full border",children:[e.jsx("thead",{className:"bg-violet-200 font-PublicSans font-semibold",children:e.jsxs("tr",{className:"border ",children:[e.jsx("td",{className:"border px-12 text-sm",children:"Members"}),e.jsx("td",{className:"border px-12 text-sm",children:"Mobile No."}),e.jsx("td",{className:"border px-12 text-sm",children:"Email"})]})}),e.jsx("tbody",{children:(c=s==null?void 0:s.directors)==null?void 0:c.map(t=>e.jsxs("tr",{className:"text-center text-xs font-PublicSans",children:[e.jsx("td",{className:"border",children:t==null?void 0:t.director_name}),e.jsx("td",{className:"border",children:t==null?void 0:t.director_mobile}),e.jsx("td",{className:"border",children:t==null?void 0:t.director_email})]}))})]})})}),(s==null?void 0:s.warning)===1&&e.jsxs("div",{children:[e.jsx("button",{className:" mt-4 py-1 px-4 text-xs inline-block text-center shadow-lg  rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0 animate-pulse",onClick:()=>k(`/agency/${s==null?void 0:s.id}/renew`),children:"Renew your license"}),e.jsxs("h1",{className:"text-sm text-slate-700 hover:text-slate-400 font-bold mt-1 p-4",children:["your license is going to expire on ",e.jsx("span",{className:"text-red-500",children:s==null?void 0:s.expiry_date}),".To continue with the license Renew It. "]})]})]})})})]})})]})}),e.jsx(a,{isOpen:u,onAfterOpen:w,onRequestClose:d,style:x,contentLabel:"Example Modal",children:e.jsxs("div",{className:"overflow-auto",children:[e.jsx("button",{className:"float-right bg-red-400 rounded-full px-2 py-1 text-xs text-white",onClick:d,children:e.jsx("h1",{children:"Close"})}),e.jsx("div",{class:"flex flex-col justify-center items-center h-[50vh] w-[50vh] bg-white ",children:e.jsxs("div",{class:"border relative flex flex-col items-center rounded-[20px] w-max-content max-w-[100%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-5 pb-8 transition duration-200 linear",children:[e.jsxs("div",{class:"relative mb-3 flex items-center justify-between pt-1 w-full",children:[e.jsx("h4",{class:"text-xl font-bold text-navy-700 dark:text-white",children:"Notifications"}),e.jsx("button",{class:"flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10 rounded-lg",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6 text-red-500 text-center animate-pulse",children:[e.jsx("path",{d:"M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z"}),e.jsx("path",{"fill-rule":"evenodd",d:"M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z","clip-rule":"evenodd"})]})})]}),e.jsx("div",{class:"flex flex-col  ",children:N.map(t=>e.jsxs("div",{class:"mt-3 flex items-center gap-3 border-b mb-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 relative",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"})}),e.jsxs("label",{class:"text-base font-medium text-navy-700 dark:text-white font-PublicSans",children:[t.notification," ",e.jsx("br",{})," ",e.jsxs("span",{className:"text-sm font-bold",children:["HOARDING NO. :- ",t.hoardingNo]})]})]}))})]})})]})})]})}export{S as A};
