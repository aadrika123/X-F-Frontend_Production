!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function a(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?t(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):t(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(t,a,o){return(a=function(t){var a=function(t,a){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var l=o.call(t,a||"default");if("object"!==e(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(t)}(t,"string");return"symbol"===e(a)?a:String(a)}(a))in t?Object.defineProperty(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o,t}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var o,l,n,r,s=[],i=!0,c=!1;try{if(n=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;i=!1}else for(;!(i=(o=n.call(a)).done)&&(s.push(o.value),s.length!==t);i=!0);}catch(e){c=!0,l=e}finally{try{if(!i&&null!=a.return&&(r=a.return(),Object(r)!==r))return}finally{if(c)throw l}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o}System.register(["./index-legacy-XupaJCet.js","./ThemeStyle-legacy-INb0jLAV.js","./formik.esm-legacy-UfK7d49p.js","./RentalApiList-legacy-Cs56hiIl.js","./search-legacy-KnihZyrd.js","./Loader-legacy-_g4Ucekw.js","./ShopListViewInCard-legacy-5vLRWghK.js","./PowerupFunctions-legacy-XgZdknmA.js","./TollListViewInCard-legacy-s6GaNSrT.js"],(function(e,t){"use strict";var o,n,r,s,i,c,d,u,m,p;return{setters:[function(e){o=e.r,n=e.b,r=e.a,s=e.j},function(e){i=e.T},function(e){c=e.u},function(e){d=e.R},function(e){u=e.R,m=e.s},function(e){p=e.L},null,null,null],execute:function(){e("default",(function(){var e=i(),t=(e.bgHeaderColor,e.titleColor),g=(e.nextButtonColor,e.bgCardColor,e.bgInfoColor,e.infoTextColor,e.backButtonColor,e.backBtnHoverColor,e.nextBtnHoverColor,e.inputStyle,d()),f=g.api_UlbCircleList,h=g.api_locationByCircleList,x=g.api_tcCollectionReport,y=g.api_tcShopCollectionReport,v=l(o.useState(),2),b=(v[0],v[1]);o.useState(null);var j=l(o.useState(),2),w=(j[0],j[1]);o.useState(null);var S=l(o.useState(null),2),N=S[0],C=S[1],O=l(o.useState(!1),2),T=O[0],P=O[1],F=l(o.useState(),2),D=(F[0],F[1]),E=l(o.useState(),2),L=(E[0],E[1]),I=l(o.useState(),2),B=(I[0],I[1]),R=l(o.useState(),2),A=(R[0],R[1]),k=l(o.useState(),2),H=k[0],_=k[1],V=l(o.useState(),2),z=V[0],M=V[1],U=l(o.useState(0),2),$=U[0],q=U[1],G=l(o.useState(1),2),J=G[0],K=G[1],Q=l(o.useState(0),2),W=Q[0],X=Q[1],Y=l(o.useState(5),2),Z=Y[0],ee=Y[1],te=l(o.useState(""),2),ae=te[0],oe=te[1],le=l(o.useState(!1),2),ne=le[0],re=(le[1],c({initialValues:{dateFrom:"",dateTo:"",collectionType:""},onSubmit:function(e){se(null==e?void 0:e.dateFrom,null==e?void 0:e.dateTo)}})),se=function(e,t){ie(e,t,J,Z,ae)},ie=function(e,t,a,o){var l,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";P(!0),1==z&&(l=y),2==z&&(l=x),n.post("".concat(l),{fromDate:e,toDate:t,page:a,perPage:o,key:s},r()).then((function(e){var t,a,o,l,n;(console.log("toll list",null==e||null===(t=e.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.totalCollection),e.data.status)&&(_(null==e||null===(a=e.data)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.totalCollection),C(null==e||null===(o=e.data)||void 0===o||null===(o=o.data)||void 0===o?void 0:o.data),q(null===(l=e.data)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.total),X(null===(n=e.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.last_page));P(!1)})).catch((function(e){console.log(e),P(!1)}))};o.useEffect((function(){ce()}),[]);var ce=function(){P(!0),n.post(f,{},r()).then((function(e){console.log("circle list 1",e.data),e.data.status&&b(e.data.data),P(!1)})).catch((function(e){console.log(e),P(!1)}))};console.log("shop list by location",N);console.log("===1==",z);var de="Collection Report",ue={tittle:de,totalDataCount:$,currentPageIndex:J,setcurrentPageIndex:K,pageLength:Z,setpageLength:ee,lastPageIndex:W,setlastPageIndex:X,searchValue:ae,setsearchValue:oe,refreshStatus:ne,collectionTypeVal:z};return s.jsxs(s.Fragment,{children:[T&&s.jsx(p,{}),s.jsx("div",{className:"h-auto bg-[#FDFCFE] flex flex-row flex-wrap justify-center items-center p-3",children:s.jsxs("div",{className:"bg-white shadow-xl rounded-tl-[44px]  h-full sm:w-1/2 lg:w-1/3 w-full rounded-xl",children:[s.jsx("div",{className:"bg-[#5846BE] h-32 w-full mx-auto rounded-br-[68px] rounded-tl-[44px]  opacity-90",children:s.jsxs("div",{className:"p-4 pt-12",children:[s.jsx("h1",{className:"text-gray-50 font-bold capitalize text-2xl",children:de}),s.jsx("h1",{className:"text-gray-50 capitalize text-[12px]",children:"Budgeting Essentials: Toll Rent Payment"})]})}),s.jsx("form",{onSubmit:re.handleSubmit,onChange:function(e){console.log("target type",e.target.type),console.log("check box name",e.target.name),console.log("target id..",e.target.value);var t=e.target.name,a=e.target.value;"circle"==t&&function(e){console.log("circle id ",e),P(!0);var t={circleId:e};n.post(h,t,r()).then((function(e){console.log("location list",e.data),e.data.status&&w(e.data.data),P(!1)})).catch((function(e){console.log(e),P(!1)}))}(a),"location"==t&&D(a),"filterBy"==t&&L(a),"dateFrom"==t&&B(a),"dateTo"==t&&A(a),"collectionType"==t&&M(a)},children:s.jsx("div",{className:"p-2 md:p-10 mt-2 flex justify-center items-center  overflow-hidden ",children:s.jsxs("div",{className:"grid grid-cols-12 bg-[#EDEDF4]  w-full md:w-1/3 p-6 md:p-10 rounded-xl shadow-md",children:[s.jsx("div",{className:"form-group mb-4 md:mb-6 col-span-12 mt-2 text-gray-600 ",children:s.jsxs("div",{className:"",children:[s.jsx("h1",{className:"".concat(t," text-sm py-2 text-gray-600"),children:"Collection"}),s.jsxs("select",a(a({},re.getFieldProps("collectionType")),{},{className:"border border-gray-100 w-full py-2 px-2 bg-white shadow-lg rounded-xl text-gray-600 font-normal text-sm",children:[s.jsx("option",{value:"",selected:!0,disabled:!0,children:"Select"}),s.jsx("option",{value:1,children:"Municipal Rental"}),s.jsx("option",{value:2,children:"Daily License"})]}))]})}),s.jsx("div",{className:"form-group mb-4 md:mb-6 col-span-12 mt-2 text-gray-600 ",children:s.jsxs("div",{className:"",children:[s.jsx("h1",{className:"".concat(t," text-sm py-2 text-gray-600"),children:"Date From"}),s.jsx("input",{type:"date",name:"dateFrom",className:" border border-gray-100 w-full py-2 px-2 bg-white shadow-lg rounded-xl text-gray-600 font-normal text-sm",onChange:re.handleChange,value:re.values.dateFrom}),s.jsx("p",{className:"text-red-500 text-xs",children:re.touched.dateFrom&&re.errors.dateFrom?re.errors.dateFrom:null})]})}),s.jsx("div",{className:"form-group mb-4 md:mb-6 col-span-12  text-gray-600 ",children:s.jsxs("div",{className:"",children:[s.jsx("h1",{className:" ".concat(t," text-sm py-2 text-gray-600"),children:"Date To"}),s.jsx("input",{type:"date",name:"dateTo",className:" border border-gray-100 w-full py-2 px-2 bg-white shadow-lg rounded-xl text-gray-600 font-normal text-sm",onChange:re.handleChange,value:re.values.dateTo}),s.jsx("p",{className:"text-red-500 text-xs",children:re.touched.dateTo&&re.errors.dateTo?re.errors.dateTo:null})]})}),s.jsx("div",{className:"col-span-12 grid grid-cols-12  mt-4",children:s.jsxs("div",{className:"col-span-12",children:[" ",s.jsx("button",{type:"submit",className:"shadow-lg w-full px-6 py-3 bg-[#5846BE] text-white font-medium text-xs leading-tight rounded-xl   hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out",onClick:se,children:"Search"})]})})]})})}),s.jsx("div",{className:"p-3",children:s.jsxs("div",{className:"col-span-12 grid grid-cols-12  shadow-lg hover:shadow-lg   bg-[#EDEDF4] text-[#5846BE]",children:[s.jsx("div",{className:"col-span-10",children:s.jsxs("div",{type:"submit",className:" w-full px-4 py-3  font-bold text-lg  ",children:["COLLECTION - ",H]})}),s.jsx("div",{className:"col-span-2",children:s.jsx("img",{src:"https://cdn-icons-png.flaticon.com/128/3592/3592606.png",className:"h-8 mt-2.5 opacity-80"})})]})}),s.jsx("div",{children:(null==N?void 0:N.length)>0?s.jsx(u,{canRefresh:!0,columns:[{Header:"Shop no.",accessor:"shop_no"},{Header:"Allottee",accessor:"allottee"},{Header:"Last paid on",accessor:"updated_at"},{Header:"Area",accessor:"circle_name"},{Header:"Rate",accessor:"rate"}],values:ue,dataList:N}):s.jsx("div",{className:"p-2 relative ",children:s.jsx("img",{src:m,className:"mx-auto h-64 p-8 pt-4"})})})]})})]})}))}}}))}();