!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,l,o=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(e){u=!0,i=e}finally{try{if(!s&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(t,n,r){var i;return i=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(n,"string"),(n="symbol"==e(i)?i:String(i))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function l(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */l=function(){return n};var t,n={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(t){d=function(e,t,n){return e[t]=n}}function h(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,l=Object.create(i.prototype),o=new M(r||[]);return a(l,"_invoke",{value:L(e,n,o)}),l}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=h;var v="suspendedStart",f="suspendedYield",m="executing",y="completed",x={};function g(){}function j(){}function b(){}var w={};d(w,s,(function(){return this}));var N=Object.getPrototypeOf,S=N&&N(N(C([])));S&&S!==r&&i.call(S,s)&&(w=S);var k=b.prototype=g.prototype=Object.create(w);function O(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function I(t,n){function r(a,l,o,s){var u=p(t[a],t,l);if("throw"!==u.type){var c=u.arg,d=c.value;return d&&"object"==e(d)&&i.call(d,"__await")?n.resolve(d.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):n.resolve(d).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(u.arg)}var l;a(this,"_invoke",{value:function(e,t){function i(){return new n((function(n,i){r(e,t,n,i)}))}return l=l?l.then(i,i):i()}})}function L(e,n,r){var i=v;return function(a,l){if(i===m)throw new Error("Generator is already running");if(i===y){if("throw"===a)throw l;return{value:t,done:!0}}for(r.method=a,r.arg=l;;){var o=r.delegate;if(o){var s=_(o,r);if(s){if(s===x)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===v)throw i=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=m;var u=p(e,n,r);if("normal"===u.type){if(i=r.done?y:f,u.arg===x)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(i=y,r.method="throw",r.arg=u.arg)}}}function _(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,_(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),x;var a=p(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,x;var l=a.arg;return l?l.done?(n[e.resultName]=l.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,x):l:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,x)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function C(n){if(n||""===n){var r=n[s];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var a=-1,l=function e(){for(;++a<n.length;)if(i.call(n,a))return e.value=n[a],e.done=!1,e;return e.value=t,e.done=!0,e};return l.next=l}}throw new TypeError(e(n)+" is not iterable")}return j.prototype=b,a(k,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:j,configurable:!0}),j.displayName=d(b,c,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,d(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},n.awrap=function(e){return{__await:e}},O(I.prototype),d(I.prototype,u,(function(){return this})),n.AsyncIterator=I,n.async=function(e,t,r,i,a){void 0===a&&(a=Promise);var l=new I(h(e,t,r,i),a);return n.isGeneratorFunction(t)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},O(k),d(k,c,"Generator"),d(k,s,(function(){return this})),d(k,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=C,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return o.type="throw",o.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var s=i.call(l,"catchLoc"),u=i.call(l,"finallyLoc");if(s&&u){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(s){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var l=a?a.completion:{};return l.type=e,l.arg=t,a?(this.method="next",this.next=a.finallyLoc,x):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),x},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),x}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),x}},n}function o(e,t,n,r,i,a,l){try{var o=e[a](l),s=o.value}catch(u){return void n(u)}o.done?t(s):Promise.resolve(s).then(r,i)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function l(e){o(a,r,i,l,s,"next",e)}function s(e){o(a,r,i,l,s,"throw",e)}l(void 0)}))}}System.register(["./index-legacy-cI_nx4AF.js","./react-legacy-47VUrxM6.js","./index.esm-legacy-XH-G4fNR.js","./SelectField-legacy-kcbKd326.js","./index-legacy-rBwa93P6.js","./formik.esm-legacy-ztsLfv9B.js","./FormProvider-legacy-ISR95z_R.js","./TextField-legacy-gYikKKIk.js","./PaginationState-legacy-aGzL_8-N.js","./ArrowRightIcon-legacy-5eASLPHv.js"],(function(e,n){"use strict";var r,a,o,u,c,d,h,p,v,f,m,y,x,g,j,b;return{setters:[function(e){r=e.b,a=e.n,o=e.Q,u=e.a,c=e.m,d=e.j,h=e.r},function(e){p=e.e,v=e.r},function(e){f=e.c,m=e.a},function(e){y=e.S},null,function(e){x=e.u},function(e){g=e.F},function(e){j=e.T},function(e){b=e.S},null],execute:function(){function n(e){var t,n,v,b,w,N,S,k,O,I,L,_,P=e.openForm,E=e.setOpenForm,M=e.moduleListData,C=e.menuDtl,F=e.isEdit,A=e.refetch,T=e.setIsEdit,q=r({}),D=q.mutateAsync,G=q.isLoading,R=x({enableReinitialize:!0,initialValues:{moduleId:(null==C||null===(t=C.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.module_id)||"",roleId:(null==C||null===(n=C.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.role_id)||"",path:(null==C||null===(v=C.data)||void 0===v||null===(v=v.data)||void 0===v?void 0:v.route)||"",menuName:(null==C||null===(b=C.data)||void 0===b||null===(b=b.data)||void 0===b?void 0:b.menu_string)||"",isSidebar:(null==C||null===(w=C.data)||void 0===w||null===(w=w.data)||void 0===w?void 0:w.is_sidebar)||"",isMenu:(null==C||null===(N=C.data)||void 0===N||null===(N=N.data)||void 0===N?void 0:N.is_menu)||"",serial:(null==C||null===(S=C.data)||void 0===S||null===(S=S.data)||void 0===S?void 0:S.serial)||""},validationSchema:f({moduleId:m().required("Module is required"),roleId:m().required("Role is required"),path:m().required("Path is required"),menuName:m().required("Menu Name is required"),serial:m().required("Serial is required")}),onSubmit:(_=s(l().mark((function e(t){var n,r,i,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D({api:F?a.updateMenu:a.addMenu,data:{id:(null==C||null===(n=C.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.id)||"",roleId:null==t?void 0:t.roleId,parentId:0,moduleId:null==t?void 0:t.moduleId,serial:null==t?void 0:t.serial,menuName:null==t?void 0:t.menuName,path:null==t?void 0:t.path,isSidebar:null==t?void 0:t.isSidebar,isMenu:null==t?void 0:t.isMenu}});case 3:null!=(i=e.sent)&&null!==(r=i.data)&&void 0!==r&&r.status&&(o.success(null==i||null===(s=i.data)||void 0===s?void 0:s.message),A(),Y(),R.resetForm()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o.error(null===e.t0||void 0===e.t0?void 0:e.t0.message,{delay:2e3});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return _.apply(this,arguments)})}),z=R.values,Y=function(){T(!1),E(!P)},B=u({api:c.roleList,config:{},options:{enabled:!0}}),U=function(e){return"property"==(null==e?void 0:e.layout)&&1==(null==z?void 0:z.moduleId)?"property":"water"==(null==e?void 0:e.layout)&&2==(null==z?void 0:z.moduleId)?"water":"trade"==(null==e?void 0:e.layout)&&3==(null==z?void 0:z.moduleId)?"trade":"adv-municipal-rental"==(null==e?void 0:e.layout)&&5==(null==z?void 0:z.moduleId)?"adv-municipal-rental":"admin"==(null==e?void 0:e.layout)&&8==(null==z?void 0:z.moduleId)?"admin":null};return d.jsxs(g,{formik:R,children:[P&&d.jsx("div",{onClick:Y,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),d.jsx("div",{tabIndex:-1,"aria-hidden":"true",className:"".concat(P?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:d.jsx("div",{className:"relative p-4 w-full max-w-4xl max-h-full",children:d.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[d.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[d.jsxs("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:["Add Menu ",JSON.stringify(null==z?void 0:z.moduleId)]}),d.jsxs("button",{onClick:function(){return Y()},type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[d.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:d.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),d.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),null!=C&&C.isLoading?d.jsx("div",{className:"flex justify-center items-center py-24",children:d.jsx("div",{className:"loader",children:"Loading..."})}):d.jsxs("div",{className:"p-4 md:p-5",children:[d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[d.jsx("div",{children:d.jsxs(y,{label:"Select Module",formik:R,name:"moduleId",children:[d.jsx("option",{value:"",children:"Select"}),null==M||null===(k=M.data)||void 0===k||null===(k=k.data)||void 0===k?void 0:k.map((function(e,t){return d.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.module_name},t)}))]})}),d.jsx("div",{children:d.jsxs(y,{label:"Select Role",formik:R,name:"roleId",children:[d.jsx("option",{value:"",children:"Select"}),null==B||null===(O=B.data)||void 0===O?void 0:O.data.map((function(e,t){return d.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.role_name},t)}))]})}),d.jsx("div",{children:d.jsxs(y,{label:"Select Menu Name",formik:R,name:"menuName",children:[d.jsx("option",{value:"",children:"Select"}),null===(I=h)||void 0===I?void 0:I.map((function(e,t){var n;return U(e)&&(null==e||null===(n=e.pages)||void 0===n?void 0:n.map((function(e,t){return d.jsx("option",{value:e.name,children:e.name},t)})))}))]})}),d.jsx("div",{children:d.jsxs(y,{label:"Select Path",formik:R,name:"path",children:[d.jsx("option",{value:"",children:"Select"}),null===(L=h)||void 0===L?void 0:L.map((function(e,t){var n;return U(e)&&(null==e||null===(n=e.pages)||void 0===n?void 0:n.map((function(t,n){return t.name==(null==z?void 0:z.menuName)&&("/daily-license-app"==t.path?d.jsx("option",{value:t.path,children:t.path},n):d.jsx("option",{value:"/amc-app/".concat(U(e),"/").concat(t.path).replace("/:id",""),children:"/amc-app/".concat(U(e),"/").concat(t.path)},n))})))}))]})}),d.jsx("div",{children:d.jsx(j,{label:"Serial No",formik:R,name:"serial",type:"number",onInput:function(e){return e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,2)}})}),d.jsx("div",{children:d.jsxs("div",{className:"flex gap-12 lg:mt-8",children:[d.jsxs("div",{className:"flex gap-3",children:[d.jsx("input",i({checked:null==z?void 0:z.isSidebar,type:"checkbox"},R.getFieldProps("isSidebar"))),d.jsx("h1",{className:"",children:"Is Sidebar"})]}),d.jsx("div",{children:"|"}),d.jsxs("div",{className:"flex gap-3",children:[d.jsx("input",i({checked:null==z?void 0:z.isMenu,type:"checkbox"},R.getFieldProps("isMenu"))),d.jsx("h1",{className:"",children:"Is Menu"})]})]})})]}),d.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[d.jsx(p.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:Y,className:"mr-1 bg-gray-300",children:d.jsx("span",{children:"Cancel"})}),d.jsx(p.Button,{type:"submit",size:"sm",loading:G,disabled:G,children:d.jsx("span",{children:"SUBMIT"})})]})]})]})})})]})}e("default",(function(){var e,i,h,f=r({}),m=f.mutateAsync,x=(f.isLoading,t(v.useState(!1),2)),g=x[0],j=x[1],w=t(v.useState(""),2),N=w[0],S=w[1],k=t(v.useState(""),2),O=k[0],I=k[1],L=t(v.useState(!1),2),_=L[0],P=L[1],E=t(v.useState(""),2),M=E[0],C=E[1],F=t(v.useState(1),2),A=F[0],T=F[1],q=t(v.useState(10),2),D=q[0],G=q[1],R=u({api:a.listMenu,config:{page:A,pageSize:D,moduleId:M},value:[M,A,D],options:{enabled:!0}}),z=u({api:c.moduleList,config:{},options:{enabled:!0}}),Y=u({api:a.menuDtl,config:{id:N,roleId:O},value:[N,O],options:{enabled:!!N&&!!O}}),B=function(){var e=s(l().mark((function e(t,n){var r,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m({api:a.updateMenu,data:{id:null==n?void 0:n.id,roleId:null==n?void 0:n.role_id,parentId:0,moduleId:null==n?void 0:n.module_id,serial:null==n?void 0:n.serial,menuName:null==n?void 0:n.menu_string,path:null==n?void 0:n.route,isSidebar:null==n?void 0:n.is_sidebar,isMenu:null==n?void 0:n.is_menu,create:"create"===t.target.value?t.target.checked:null==n?void 0:n.create,read:"read"===t.target.value?t.target.checked:null==n?void 0:n.read,update:"update"===t.target.value?t.target.checked:null==n?void 0:n.update,status:"status"===t.target.value?t.target.checked:n.is_active}});case 3:null!=(i=e.sent)&&null!==(r=i.data)&&void 0!==r&&r.status&&(o.success("Menu Updated Successfully"),null==R||R.refetch()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}();return d.jsxs(d.Fragment,{children:[d.jsxs(p.Card,{children:[d.jsxs("div",{className:"flex justify-between items-center px-5  py-4 rounded-tl-lg rounded-tr-lg",children:[d.jsx("h1",{className:"text-base font-semibold text-gray-100",children:d.jsxs(y,{onChange:function(e){C(e.target.value)},children:[d.jsx("option",{value:"",children:"Select Module"}),null==z||null===(e=z.data)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.map((function(e,t){return d.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.module_name},t)}))]})}),d.jsx(p.Button,{size:"sm",color:"blue",onClick:function(){return j(!0)},children:"Create Menu"})]}),d.jsxs("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:[d.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[d.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400",children:d.jsxs("tr",{children:[d.jsx("th",{scope:"col",className:"p-4",children:d.jsx("div",{className:"flex items-center",children:"#"})}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Module Name"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Role Name"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Menu Name"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Route Name"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Create"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Read"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Update"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Status"}),d.jsx("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),d.jsx("tbody",{children:null==R||null===(i=R.data)||void 0===i||null===(i=i.data)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.map((function(e,t){return d.jsxs("tr",{children:[d.jsx("td",{className:"w-4 p-4",children:d.jsx("div",{className:"flex items-center",children:t+1})}),d.jsx("td",{className:"px-6 py-4",children:e.module_name}),d.jsx("td",{className:"px-6 py-4",children:e.role_name}),d.jsx("td",{className:"px-6 py-4",children:e.menu_string}),d.jsx("td",{className:"px-6 py-4",children:e.route}),d.jsx("td",{className:"px-6 py-4",children:d.jsxs("div",{className:"flex items-center gap-1",children:[e.create?"Yes":"No",d.jsx("input",{onChange:function(t){B(t,e)},value:"create",type:"checkbox",checked:null!==(null==e?void 0:e.create)&&(null==e?void 0:e.create)})]})}),d.jsx("td",{className:"px-6 py-4",children:d.jsxs("div",{className:"flex items-center gap-1",children:[e.read?"Yes":"No",d.jsx("input",{onChange:function(t){B(t,e)},value:"read",type:"checkbox",checked:null!==(null==e?void 0:e.read)&&(null==e?void 0:e.read)})]})}),d.jsx("td",{className:"px-6 py-4",children:d.jsxs("div",{className:"flex items-center gap-1",children:[e.update?"Yes":"No",d.jsx("input",{onChange:function(t){B(t,e)},value:"update",type:"checkbox",checked:null!==(null==e?void 0:e.update)&&(null==e?void 0:e.update)})]})}),d.jsx("td",{className:"px-6 py-4",children:d.jsx(p.Switch,{name:"status",type:"checkbox",onChange:function(t){B(t,e)},value:"status",checked:null!=(null==e?void 0:e.is_active)&&(null==e?void 0:e.is_active),ripple:!0,className:"h-full w-full checked:bg-[#2ec946]",containerProps:{className:"w-11 h-6"},circleProps:{className:"before:hidden left-0.5 border-none"}})}),d.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:d.jsx("button",{onClick:function(){j(!0),S(null==e?void 0:e.id),I(null==e?void 0:e.role_id),P(!0)},className:"text-indigo-600 hover:text-indigo-900",children:"Edit"})})]},t)}))})]}),d.jsx("div",{className:"\r\n          w-full border-t border-gray-300 \r\n          "}),d.jsx("div",{className:"py-2 px-4",children:d.jsx(b,{page:A,setPage:T,perPage:D,setPerPage:G,noOfPage:null==R||null===(h=R.data)||void 0===h||null===(h=h.data)||void 0===h?void 0:h.last_page})})]})]}),d.jsx(n,{openForm:g,setOpenForm:j,moduleListData:z,menuDtl:Y,isEdit:_,setIsEdit:P,refetch:null==R?void 0:R.refetch})]})}))}}}))}();
