!function(){function e(l){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(l)}function l(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);l&&(r=r.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,r)}return t}function t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(l){r(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function r(l,t,r){return(t=function(l){var t=function(l,t){if("object"!==e(l)||null===l)return l;var r=l[Symbol.toPrimitive];if(void 0!==r){var n=r.call(l,t||"default");if("object"!==e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(l)}(l,"string");return"symbol"===e(t)?t:String(t)}(t))in l?Object.defineProperty(l,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):l[t]=r,l}function n(e,l){return function(e){if(Array.isArray(e))return e}(e)||function(e,l){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,n,o,a,i=[],s=!0,c=!1;try{if(o=(t=t.call(e)).next,0===l){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=o.call(t)).done)&&(i.push(r.value),i.length!==l);s=!0);}catch(e){c=!0,n=e}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw n}}return i}}(e,l)||function(e,l){if(!e)return;if("string"==typeof e)return o(e,l);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,l)}(e,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,r=new Array(l);t<l;t++)r[t]=e[t];return r}System.register(["./index-legacy-4d412f93.js","./formik.esm-legacy-aa98b667.js","./ThemeStyle-legacy-ed36c1dc.js","./object-legacy-de1366ac.js","./RentalApiList-legacy-f3ee0393.js","./Loader-legacy-c4d71a65.js","./PowerupFunctions-legacy-1d31ab4f.js"],(function(e,l){"use strict";var r,o,a,i,s,c,u,d,m,f,h,p,x,b;return{setters:[function(e){r=e.u,o=e.r,a=e.A,i=e.a,s=e.j,c=e.Q},function(e){u=e.u},function(e){d=e.T},function(e){m=e.c,f=e.b},function(e){h=e.R},function(e){p=e.L},function(e){x=e.b,b=e.a}],execute:function(){function l(){var e=window.localStorage.getItem("token");return{headers:{Authorization:"Bearer ".concat(e),Accept:"application/json","Content-Type":"multipart/form-data","API-KEY":"eff41ef6-d430-4887-aa55-9fcf46c72c99"}}}e("default",(function(){var e=d(),v=(e.saveButtonColor,e.inputStyle),g=e.labelStyle,j=(e.headingStyle,e.titleStyle,e.addButtonColor,e.formStyle,e.titleColor,h()),y=j.api_UlbCircleList,w=j.api_locationByCircleList,N=j.api_addToll,S=j.api_getTollRateList,k=r();o.useState();var P=n(o.useState(!1),2),T=P[0],F=P[1];o.useState(),o.useState(""),o.useState(!1),o.useState("");var O=n(o.useState(""),2),C=(O[0],O[1]),q=n(o.useState(""),2),A=q[0],E=q[1],R=n(o.useState(""),2),I=(R[0],R[1]),_=n(o.useState(),2),L=_[0],V=_[1];o.useState();var B=n(o.useState(),2),D=B[0],U=B[1],z=n(o.useState(),2),M=z[0],Y=z[1],K=m({circle:f().required("This field is required"),market:f().required("This field is required"),vendorName:f().required("This field is required"),mobile:f().required("Enter mobile no.").min(10,"Enter 10 digit number").max(10,"Enter 10 digit number"),address:f().required("This field is required"),rate:f().required("This field is required"),photo1Path:f().required("This field is required")}),Q=function(e,l){c.dismiss(),"success"==l&&c.success(e),"error"==l&&c.error(e)},$=u({initialValues:{circle:"",market:"",vendorName:"",vendorType:"",mobile:"",address:"",rate:"",photo1Path:""},enableReinitialize:!0,onSubmit:function(e){console.log("shop data",e),H(e)},validationSchema:K}),G=function(e,l){console.log("name ,fileData ",e,l),C(l),"photo1Path"==e?$.setFieldValue("photo1Path",l):$.setFieldValue("photo2Path",l);var t=new FileReader;t.onloadend=function(){"photo1Path"==e?E(t.result):I(t.result)},t.readAsDataURL(l)};console.log("form values",$.values);var H=function(e){var t,r;console.log("data in form",e),t=N,r={circleId:null==e?void 0:e.circle,marketId:null==e?void 0:e.market,vendorName:null==e?void 0:e.vendorName,vendorType:null==e?void 0:e.vendorType,address:null==e?void 0:e.address,rate:null==e?void 0:e.rate,mobile:null==e?void 0:e.mobile,photograph1:null==e?void 0:e.photo1Path},console.log("request body",r),a.post("".concat(t),r,l()).then((function(e){var l,t,r;(console.log("response after data submitted",null==e||null===(l=e.data)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.toll_no),!0===(null==e||null===(t=e.data)||void 0===t?void 0:t.status))?(Q("submitted successfully","success"),k("/submitScreen/toll/".concat(null==e||null===(r=e.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.toll_no))):Q("Failed to submit","error")})).catch((function(e){console.log("errorrr.... ",e)}))};o.useEffect((function(){J(),W()}),[]);var J=function(){a.post(y,{},l()).then((function(e){console.log("circle list 1",e.data),V(e.data.data),F(!1)})).catch((function(e){console.log(e),F(!1)}))},W=function(){a.post(S,{},i()).then((function(e){console.log("circle list 1",e.data),Y(e.data.data),F(!1)})).catch((function(e){console.log(e),F(!1)}))},X=function(e){var l={circleId:e};a.post(w,l,i()).then((function(e){console.log("location list",e.data),e.data.status&&U(e.data.data)})).catch((function(e){console.log(e)}))};if(T)return s.jsx(s.Fragment,{children:s.jsx("div",{className:"min-h-screen"})});return s.jsxs(s.Fragment,{children:[T&&s.jsx(p,{}),s.jsx("div",{className:"h-screen bg-[#FDFCFE] flex flex-row flex-wrap justify-center items-center p-3",children:s.jsxs("div",{className:"bg-white shadow-xl rounded-tl-[44px]  h-full sm:w-1/2 lg:w-1/3 w-full rounded-xl",children:[s.jsx("div",{className:"bg-[#5846BE] h-32 w-full mx-auto rounded-br-[68px] rounded-tl-[44px] opacity-90",children:s.jsxs("div",{className:"p-4 pt-12",children:[s.jsx("h1",{className:"text-gray-50 font-bold capitalize text-2xl",children:"Add Toll"}),s.jsx("h1",{className:"text-gray-50 capitalize text-[12px]",children:"Rent a Toll Booth and Secure Your Spot on the Road"})]})}),s.jsx("form",{onSubmit:$.handleSubmit,onChange:function(e){console.log("target type",e.target.type),console.log("check box name",e.target.name);var l=e.target.name,t=e.target.value;"photo1Path"==l&&G(l,e.target.files[0]),"circle"==l&&X(t),"vendorName"==l&&$.setFieldValue("vendorName",x(t,$.values.vendorName,50)),"mobile"==l&&$.setFieldValue("mobile",b(t,$.values.mobile,10)),"rate"==l&&$.setFieldValue("rate",b(t,$.values.rate,10))},encType:"multipart/form-data",children:s.jsxs("div",{className:"bg-[#FFFFFF]  rounded-2xl shadow-md p-4 text-xs",children:[s.jsxs("div",{className:"p-2",children:[s.jsxs("div",{class:"valid-form flex flex-wrap flex-row -mx-4",children:[s.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[s.jsx("label",{className:"".concat(g," inline-block mb-2 "),children:"Circle"}),s.jsxs("select",t(t({},$.getFieldProps("circle")),{},{className:"".concat(v," inline-block w-full relative"),children:[s.jsx("option",{selected:!0,children:"select"}),null==L?void 0:L.map((function(e){return s.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.circle_name})}))]})),s.jsx("p",{className:"text-red-500 text-xs absolute",children:$.touched.circle&&$.errors.circle?$.errors.circle:null})]}),s.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[s.jsx("label",{className:"".concat(g," inline-block mb-2 "),children:"Market"}),s.jsxs("select",t(t({},$.getFieldProps("market")),{},{className:"".concat(v," inline-block w-full relative"),children:[s.jsx("option",{selected:!0,children:"select"}),null==D?void 0:D.map((function(e){return s.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.market_name})}))]})),s.jsx("p",{className:"text-red-500 text-xs absolute",children:$.touched.market&&$.errors.market?$.errors.market:null})]}),s.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[s.jsx("label",{className:"".concat(g," inline-block mb-2 "),children:"Vendor Type"}),s.jsxs("select",t(t({},$.getFieldProps("vendorType")),{},{className:"".concat(v," inline-block w-full relative"),children:[s.jsx("option",{selected:!0,children:"select"}),s.jsx("option",{value:"schedule",children:"Schedule"}),s.jsx("option",{value:"unschedule",children:"Unscheduled"})]})),s.jsx("p",{className:"text-red-500 text-xs absolute",children:$.touched.vendorType&&$.errors.vendorType?$.errors.vendorType:null})]}),s.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[s.jsx("h1",{className:"".concat(g," inline-block mb-2"),children:"Vendor name"}),s.jsx("input",{type:"text",name:"vendorName",className:"".concat(v," inline-block w-full relative"),onChange:$.handleChange,value:$.values.vendorName}),s.jsx("p",{className:"text-red-500 text-xs absolute",children:$.touched.vendorName&&$.errors.vendorName?$.errors.vendorName:null})]})]}),s.jsxs("div",{class:"valid-form flex flex-wrap flex-row -mx-4",children:[s.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[s.jsx("h1",{className:"".concat(g," inline-block mb-2"),children:"Mobile no."}),s.jsx("input",{type:"text",name:"mobile",className:"".concat(v," inline-block w-full relative"),onChange:$.handleChange,value:$.values.mobile}),s.jsx("p",{className:"text-red-500 text-xs absolute",children:$.touched.mobile&&$.errors.mobile?$.errors.mobile:null})]}),s.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[s.jsx("label",{className:"".concat(g," inline-block mb-2 "),children:"Landmark"}),s.jsx("input",{type:"text",name:"address",className:"".concat(v," inline-block w-full relative"),onChange:$.handleChange,value:$.values.address}),s.jsx("p",{className:"text-red-500 text-xs absolute",children:$.touched.address&&$.errors.address?$.errors.address:null})]}),s.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[s.jsx("label",{className:"".concat(g," inline-block mb-2 "),children:"Rate"}),s.jsxs("select",t(t({},$.getFieldProps("rate")),{},{className:"".concat(v," inline-block w-full relative"),children:[s.jsx("option",{selected:!0,children:"select"}),null==M?void 0:M.map((function(e){return s.jsxs("option",{value:null==e?void 0:e.id,children:[null==e?void 0:e.toll_type," (Rs.",null==e?void 0:e.rate,")"]})}))]})),s.jsx("p",{className:"text-red-500 text-xs absolute",children:$.touched.rate&&$.errors.rate?$.errors.rate:null})]})]}),s.jsx("div",{class:"valid-form flex flex-wrap flex-row -mx-4",children:s.jsxs("div",{class:"form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4",children:[s.jsx("label",{className:"".concat(g," inline-block mb-2 "),children:"Image"}),s.jsx("input",{accept:"image/*",type:"file",name:"photo1Path",className:"".concat(v," inline-block w-full relative"),onChange:$.handleChange}),s.jsx("img",{src:"".concat(A),alt:"Upload img",className:"h-20"}),s.jsx("p",{className:"text-red-500 text-xs absolute",children:$.touched.photo1Path&&$.errors.photo1Path?$.errors.photo1Path:null})]})})]}),s.jsx("div",{className:"pb-8",children:s.jsx("button",{type:"submit",className:"bg-[#5846BE] px-7 py-2 text-white font-semibold rounded leading-5 shadow-lg w-full",children:"Save"})})]})})]})})]})}))}}}))}();
