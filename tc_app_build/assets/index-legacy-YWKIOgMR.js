!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,l,a,o=[],s=!0,d=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=l.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(e){d=!0,i=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(d)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(t,n,r){var i;return i=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(n,"string"),(n="symbol"==e(i)?i:String(i))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function a(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return n};var t,n={},r=Object.prototype,i=r.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",d=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(t){u=function(e,t,n){return e[t]=n}}function h(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),o=new _(r||[]);return l(a,"_invoke",{value:O(e,n,o)}),a}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=h;var v="suspendedStart",m="suspendedYield",f="executing",x="completed",y={};function g(){}function j(){}function b(){}var w={};u(w,s,(function(){return this}));var N=Object.getPrototypeOf,S=N&&N(N(F([])));S&&S!==r&&i.call(S,s)&&(w=S);var k=b.prototype=g.prototype=Object.create(w);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(t,n){function r(l,a,o,s){var d=p(t[l],t,a);if("throw"!==d.type){var c=d.arg,u=c.value;return u&&"object"==e(u)&&i.call(u,"__await")?n.resolve(u.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):n.resolve(u).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(d.arg)}var a;l(this,"_invoke",{value:function(e,t){function i(){return new n((function(n,i){r(e,t,n,i)}))}return a=a?a.then(i,i):i()}})}function O(e,n,r){var i=v;return function(l,a){if(i===f)throw new Error("Generator is already running");if(i===x){if("throw"===l)throw a;return{value:t,done:!0}}for(r.method=l,r.arg=a;;){var o=r.delegate;if(o){var s=E(o,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===v)throw i=x,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=f;var d=p(e,n,r);if("normal"===d.type){if(i=r.done?x:m,d.arg===y)continue;return{value:d.arg,done:r.done}}"throw"===d.type&&(i=x,r.method="throw",r.arg=d.arg)}}}function E(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var l=p(i,e.iterator,n.arg);if("throw"===l.type)return n.method="throw",n.arg=l.arg,n.delegate=null,y;var a=l.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function M(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(M,this),this.reset(!0)}function F(n){if(n||""===n){var r=n[s];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var l=-1,a=function e(){for(;++l<n.length;)if(i.call(n,l))return e.value=n[l],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(e(n)+" is not iterable")}return j.prototype=b,l(k,"constructor",{value:b,configurable:!0}),l(b,"constructor",{value:j,configurable:!0}),j.displayName=u(b,c,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},n.awrap=function(e){return{__await:e}},I(L.prototype),u(L.prototype,d,(function(){return this})),n.AsyncIterator=L,n.async=function(e,t,r,i,l){void 0===l&&(l=Promise);var a=new L(h(e,t,r,i),l);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},I(k),u(k,c,"Generator"),u(k,s,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=F,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return o.type="throw",o.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l],o=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),d=i.call(a,"finallyLoc");if(s&&d){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var a=l?l.completion:{};return a.type=e,a.arg=t,l?(this.method="next",this.next=l.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:F(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}function o(e,t,n,r,i,l,a){try{var o=e[l](a),s=o.value}catch(d){return void n(d)}o.done?t(s):Promise.resolve(s).then(r,i)}System.register(["./index-legacy-R4QqfF9d.js","./router-legacy-rigPOyFI.js","./tailwind-legacy-e6PAgAmt.js","./index.esm-legacy-5u-Ffckd.js","./SelectField-legacy-nnihkz9J.js","./index-legacy-vtVAGFCF.js","./formik.esm-legacy-LafwCeEO.js","./FormProvider-legacy-lbo4CCyt.js","./TextField-legacy-IhaPUqZ4.js","./reactQuery-legacy-jKPiMKrc.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-ELZmKVKq.js","./headlessui-legacy-Yu0VJXN1.js","./customInputValidation-legacy-1dLT3o3X.js"],(function(e,n){"use strict";var r,l,s,d,c,u,h,p,v,m,f,x,y,g,j;return{setters:[function(e){r=e.b,l=e.o,s=e.Q,d=e.a,c=e.m,u=e.j,h=e.r},function(e){p=e.r,v=e.d},function(e){m=e.r},function(e){f=e.c},function(e){x=e.S},null,function(e){y=e.u},function(e){g=e.F},function(e){j=e.T},null,null,null,null,null,null],execute:function(){function n(e){var t,n,p,v,b,w,N,S,k,I,L,O,E,M,P,_,F=e.openForm,A=e.setOpenForm,C=e.moduleListData,T=e.menuDtl,D=(e.isEdit,e.refetch),R=e.setIsEdit,B=e.userId,G=e.excludeIncludeType,z=e.dtlId,U=r({}),W=U.mutateAsync,Y=U.isLoading,Q=y({enableReinitialize:!0,initialValues:{moduleId:(null==T||null===(t=T.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.module_id)||"",roleId:(null==T||null===(n=T.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.role_id)||"",path:(null==T||null===(p=T.data)||void 0===p||null===(p=p.data)||void 0===p?void 0:p.route)||"",menuName:(null==T||null===(v=T.data)||void 0===v||null===(v=v.data)||void 0===v?void 0:v.menu_string)||"",isSidebar:(null==T||null===(b=T.data)||void 0===b||null===(b=b.data)||void 0===b?void 0:b.is_sidebar)||"",isMenu:(null==T||null===(w=T.data)||void 0===w||null===(w=w.data)||void 0===w?void 0:w.is_menu)||"",serial:(null==T||null===(N=T.data)||void 0===N||null===(N=N.data)||void 0===N?void 0:N.serial)||"",userId:B||"",menuId:z||"",create:(null==T||null===(S=T.data)||void 0===S||null===(S=S.data)||void 0===S?void 0:S.create)||"",read:(null==T||null===(k=T.data)||void 0===k||null===(k=k.data)||void 0===k?void 0:k.read)||"",update:(null==T||null===(I=T.data)||void 0===I||null===(I=I.data)||void 0===I?void 0:I.update)||"",delete:(null==T||null===(L=T.data)||void 0===L||null===(L=L.data)||void 0===L?void 0:L.delete)||""},validationSchema:f({}),onSubmit:(P=a().mark((function e(t){var n,r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W({api:"Exclude"==G?l.userWiseRemoveMenu:l.userWiseAddMenu,data:{userId:B,menuId:null==t?void 0:t.menuId,create:null==t?void 0:t.create,read:null==t?void 0:t.read,update:null==t?void 0:t.update,delete:null==t?void 0:t.delete,isSidebar:null==t?void 0:t.isSidebar,isMenu:null==t?void 0:t.isMenu,roleId:null==t?void 0:t.roleId}});case 3:null!=(r=e.sent)&&null!==(n=r.data)&&void 0!==n&&n.status&&(s.success(null==r||null===(i=r.data)||void 0===i?void 0:i.message),D(),$(),Q.resetForm()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s.error(null===e.t0||void 0===e.t0?void 0:e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),_=function(){var e=this,t=arguments;return new Promise((function(n,r){var i=P.apply(e,t);function l(e){o(i,n,r,l,a,"next",e)}function a(e){o(i,n,r,l,a,"throw",e)}l(void 0)}))},function(e){return _.apply(this,arguments)})}),V=Q.values,$=function(){R(!1),A(!F)};d({api:c.roleList,config:{},options:{enabled:!0}});var Z=function(e){return"property"==(null==e?void 0:e.layout)&&1==(null==V?void 0:V.moduleId)?"property":"water"==(null==e?void 0:e.layout)&&2==(null==V?void 0:V.moduleId)?"water":"trade"==(null==e?void 0:e.layout)&&3==(null==V?void 0:V.moduleId)?"trade":"admin"==(null==e?void 0:e.layout)&&4==(null==V?void 0:V.moduleId)?"admin":null};return u.jsxs(g,{formik:Q,children:[F&&u.jsx("div",{onClick:$,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),u.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(F?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:"Include"==G?u.jsx("div",{className:"relative p-4 w-full max-w-4xl max-h-full",children:u.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[u.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[u.jsxs("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:["Add Menu (",G,") | ",B," | ",null==V?void 0:V.menuId," ","| ",null==V?void 0:V.roleId]}),u.jsxs("button",{onClick:function(){return $()},type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[u.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:u.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),u.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),null!=T&&T.isLoading?u.jsx("div",{className:"flex justify-center items-center py-24",children:u.jsx("div",{className:"loader",children:"Loading..."})}):u.jsxs("div",{className:"p-4 md:p-5",children:[u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[u.jsx("div",{children:u.jsxs(x,{disabled:!0,label:"Select Module",value:null==V?void 0:V.moduleId,name:"moduleId",children:[u.jsx("option",{value:"",children:"Select"}),null==C||null===(O=C.data)||void 0===O||null===(O=O.data)||void 0===O?void 0:O.map((function(e,t){return u.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.module_name},t)}))]})}),u.jsx("div",{children:u.jsxs(x,{disabled:!0,label:"Select Menu Name",value:null==V?void 0:V.menuName,name:"menuName",children:[u.jsx("option",{value:"",children:"Select"}),u.jsx("option",{value:"admin",children:"Admin"}),null===(E=h)||void 0===E?void 0:E.map((function(e,t){var n;return Z(e)&&(null==e||null===(n=e.pages)||void 0===n?void 0:n.map((function(e,t){return u.jsx("option",{value:e.name,children:e.name},t)})))}))]})}),u.jsx("div",{children:u.jsxs(x,{disabled:!0,label:"Select Path",value:null==V?void 0:V.path,name:"path",children:[u.jsx("option",{value:"",children:"Select"}),null===(M=h)||void 0===M?void 0:M.map((function(e,t){var n;return Z(e)&&(null==e||null===(n=e.pages)||void 0===n?void 0:n.map((function(t,n){return t.name==(null==V?void 0:V.menuName)&&u.jsx("option",{value:"/amc-app/".concat(Z(e),"/").concat(t.path).replace("/:id",""),children:"/amc-app/".concat(Z(e),"/").concat(t.path)},n)})))}))]})}),u.jsx("div",{children:u.jsx(j,{label:"Serial No",value:null==V?void 0:V.serial,name:"serial",type:"number",onInput:function(e){return e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,2)}})}),u.jsx("div",{children:u.jsxs("div",{className:"flex gap-12 ",children:[u.jsxs("div",{className:"flex gap-3",children:[u.jsx("input",i({checked:null==V?void 0:V.isSidebar,type:"checkbox"},Q.getFieldProps("isSidebar"))),u.jsx("h1",{className:"",children:"Is Sidebar"})]}),u.jsx("div",{children:"|"}),u.jsxs("div",{className:"flex gap-3",children:[u.jsx("input",i({checked:null==V?void 0:V.isMenu,type:"checkbox"},Q.getFieldProps("isMenu"))),u.jsx("h1",{className:"",children:"Is Menu"})]})]})})]}),u.jsx("hr",{}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-4",children:[u.jsx("div",{children:u.jsxs("div",{className:"flex gap-3",children:[u.jsx("input",i({checked:null==V?void 0:V.create,type:"checkbox"},Q.getFieldProps("create"))),u.jsx("h1",{className:"",children:"Create"})]})}),u.jsx("div",{children:u.jsxs("div",{className:"flex gap-3",children:[u.jsx("input",i({checked:null==V?void 0:V.read,type:"checkbox"},Q.getFieldProps("read"))),u.jsx("h1",{className:"",children:"Read"})]})}),u.jsx("div",{children:u.jsxs("div",{className:"flex gap-3",children:[u.jsx("input",i({checked:null==V?void 0:V.update,type:"checkbox"},Q.getFieldProps("update"))),u.jsx("h1",{className:"",children:"Update"})]})}),u.jsx("div",{children:u.jsxs("div",{className:"flex gap-3",children:[u.jsx("input",i({checked:null==V?void 0:V.delete,type:"checkbox"},Q.getFieldProps("delete"))),u.jsx("h1",{className:"",children:"Delete"})]})})]}),u.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[u.jsx(m.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:$,className:"mr-1 bg-gray-300",children:u.jsx("span",{children:"Cancel"})}),u.jsx(m.Button,{type:"submit",size:"sm",loading:Y,disabled:Y,children:u.jsx("span",{children:"SUBMIT"})})]})]})]})}):u.jsx("div",{className:"relative p-4 w-full max-w-4xl max-h-full",children:u.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[u.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[u.jsxs("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:["Remove Menu (",G,") | ",B," |"," ",null==V?void 0:V.menuId]}),u.jsxs("button",{onClick:function(){return $()},type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[u.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:u.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),u.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),null!=T&&T.isLoading?u.jsx("div",{className:"flex justify-center items-center py-24",children:u.jsx("div",{className:"loader",children:"Loading..."})}):u.jsxs("div",{className:"p-4 md:p-5",children:[u.jsx("h1",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Are you sure you want to remove this menu?"}),u.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[u.jsx(m.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:$,className:"mr-1 bg-gray-300",children:u.jsx("span",{children:"Cancel"})}),u.jsx(m.Button,{type:"submit",size:"sm",loading:Y,disabled:Y,children:u.jsx("span",{children:"SUBMIT"})})]})]})]})})})]})}e("default",(function(){var e,i;r({});var a=t(p.useState(!1),2),o=a[0],s=a[1],h=t(p.useState(""),2),f=h[0],y=h[1],g=t(p.useState(""),2),j=g[0],b=g[1],w=t(p.useState(!1),2),N=w[0],S=w[1];p.useState(""),p.useState(1),p.useState(10);var k=t(p.useState(null),2),I=k[0],L=k[1],O=t(v.useState(null),2),E=O[0],M=O[1],P=t(v.useState(""),2),_=P[0],F=P[1],A=d({api:c.getAllUser,config:{},options:{enabled:!0}}),C=d({api:l.userMenuList,config:{userId:E,excludeIncludeType:_},value:[_],options:{enabled:!!_,onSuccess:function(e){var t,n=null==e||null===(t=e.data)||void 0===t?void 0:t.filter((function(e,t,n){return t===n.findIndex((function(t){return t.route===e.route}))}));L(n)}}}),T=d({api:c.moduleList,config:{},options:{enabled:!0}}),D=d({api:l.menuDtl,config:{id:f,roleId:j},value:[f,j],options:{enabled:!!f&&!!j}});return u.jsxs(u.Fragment,{children:[u.jsxs(m.Card,{children:[u.jsx("div",{className:"flex justify-between items-center px-5  py-4 rounded-tl-lg rounded-tr-lg",children:u.jsxs("div",{className:"flex gap-5",children:[u.jsx("div",{className:"w-52",children:u.jsxs(x,{onChange:function(e){M(e.target.value)},children:[u.jsx("option",{value:"",children:"Select Module"}),null==A||null===(e=A.data)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.map((function(e,t){return u.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.name},t)}))]})}),u.jsx("div",{className:"w-52",children:u.jsxs(x,{disabled:!E,onChange:function(e){F(e.target.value)},children:[u.jsx("option",{value:"",children:"Select Module"}),null===(i=[{id:"Exclude",name:"Added Menu"},{id:"Include",name:"Not Added Menu"}])||void 0===i?void 0:i.map((function(e,t){return u.jsx("option",{value:e.id,children:e.name},t)}))]})})]})}),u.jsxs("div",{className:"relative overflow-x-auto shadow-md sm:rounded-lg",children:[u.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[u.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400",children:u.jsxs("tr",{children:[u.jsx("th",{scope:"col",className:"p-4",children:u.jsx("div",{className:"flex items-center",children:"#"})}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Module Name"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Role Name"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Menu Name"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Route Name"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Create"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Read"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Update"}),u.jsx("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),u.jsx("tbody",{children:null==I?void 0:I.map((function(e,t){return u.jsxs("tr",{children:[u.jsx("td",{className:"w-4 p-4",children:u.jsx("div",{className:"flex items-center",children:t+1})}),u.jsx("td",{className:"px-6 py-4",children:e.module_name}),u.jsx("td",{className:"px-6 py-4",children:(null==e?void 0:e.role_name)||"User Wise Role"}),u.jsx("td",{className:"px-6 py-4",children:e.menu_string}),u.jsx("td",{className:"px-6 py-4",children:e.route}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("div",{className:"flex items-center gap-1",children:e.create?"Yes":"No"})}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("div",{className:"flex items-center gap-1",children:e.read?"Yes":"No"})}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("div",{className:"flex items-center gap-1",children:e.update?"Yes":"No"})}),u.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:u.jsx("button",{onClick:function(){s(!0),y(null==e?void 0:e.id),b(null==e?void 0:e.role_id),S(!0)},className:"text-indigo-600 hover:text-indigo-900",children:"Include"===_?"Add Menu":u.jsx("h1",{className:"text-red-500",children:"Remove Menu"})})})]},t)}))})]}),u.jsx("div",{className:"\r\n          w-full border-t border-gray-300 \r\n          "})]})]}),u.jsx(n,{openForm:o,setOpenForm:s,moduleListData:T,menuDtl:D,isEdit:N,setIsEdit:S,userId:E,refetch:null==C?void 0:C.refetch,excludeIncludeType:_,dtlId:f})]})}))}}}))}();
