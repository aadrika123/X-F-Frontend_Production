import{e as o,r as i,j as e}from"./index-83771a57.js";import{h as a}from"./home-2ae317ff.js";import{w as n,t as c}from"./team-a0256d3f.js";const d="/assets/piechart-6d54ef20.png",m="/assets/dustbin-c60a8353.png",u="/assets/advt-3553642c.png";function p(s){o();const[t,x]=i.useState([{moduleName:"Property",route:"/property/transfer",icon:a},{moduleName:"Water",route:"/water/transfer",icon:n},{moduleName:"Trade",route:"/trade/transfer",icon:c},{moduleName:"Advertisement",route:"/advertisement/transfer",icon:u},{moduleName:"SWM",route:"/swm/transfer",icon:m},{moduleName:"Dashboard",route:"/dashboard/transfer",icon:d}]),l=r=>{window.location.replace(r)};return e.jsx("div",{className:"w-full md:w-1/2 mx-auto mt-10",children:e.jsxs("div",{className:"bg-white shadow-xl flex justify-center items-center relative",children:[e.jsx("button",{onClick:s==null?void 0:s.closeModuleModal,type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent bg-gray-300 hover:bg-red-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white",children:e.jsx("svg",{class:"w-5 h-5",fill:"currentColor",children:e.jsx("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})})}),e.jsxs("div",{className:"w-full px-4 mx-auto py-4 md:py-6 ",children:[e.jsx("div",{className:"w-full",children:e.jsx("div",{children:e.jsx("h2",{className:"text-3xl font-medium text-center",children:"Choose Module"})})}),e.jsx("div",{className:"my-10 relative",children:e.jsx("div",{className:"grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",children:t==null?void 0:t.map((r,h)=>e.jsxs("div",{onClick:()=>l(r==null?void 0:r.route),className:"bg-gray-100  rounded-xl flex flex-col justify-center items-center p-4 md:p-6 relative cursor-pointer",href:"",children:[e.jsx("img",{className:"h-16 w-16",src:r==null?void 0:r.icon,alt:"Mobiles"}),e.jsx("div",{className:"font-bold mt-4 text-center",children:r==null?void 0:r.moduleName})]}))})})]})]})})}export{p as default};
