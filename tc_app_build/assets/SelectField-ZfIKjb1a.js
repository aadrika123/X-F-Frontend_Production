import{j as l}from"./index-kY_1vXrj.js";import{g as d}from"./formik.esm-MEJnthxH.js";function p({label:g,name:t="",formik:e,selectedText:u,isDynamic:x,isRequiredLabel:r=!1,children:c,...n}){var a;return l.jsxs("div",{children:[l.jsxs("label",{htmlFor:t,className:"block text-gray-600 text-sm mb-1",children:[g," "]}),l.jsx("select",{name:t,value:(a=e==null?void 0:e.values[t])!=null?a:void 0,onChange:s=>(e==null||e.setFieldValue(t,s.target.value),e==null||e.setFieldValue(u,s.target.options[s.target.selectedIndex].text==="Select"?"":s.target.options[s.target.selectedIndex].text),e==null?void 0:e.handleChange(s)),className:"w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600",...n,children:c}),l.jsx("span",{className:"text-red-600 text-xs",children:x?d(e==null?void 0:e.touched,t)&&d(e==null?void 0:e.errors,t):e!=null&&e.touched[t]&&(e!=null&&e.errors[t])?e==null?void 0:e.errors[t]:null})]})}export{p as S};
