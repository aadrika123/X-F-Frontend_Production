!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,l,s,a=[],o=!0,d=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=l.call(n)).done)&&(a.push(r.value),a.length!==t);o=!0);}catch(e){d=!0,i=e}finally{try{if(!o&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(d)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return n};var t,n={},i=Object.prototype,l=i.hasOwnProperty,s=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",d=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(t){u=function(e,t,n){return e[t]=n}}function x(e,t,n,r){var i=t&&t.prototype instanceof j?t:j,l=Object.create(i.prototype),a=new A(r||[]);return s(l,"_invoke",{value:C(e,n,a)}),l}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=x;var m="suspendedStart",f="suspendedYield",v="executing",p="completed",y={};function j(){}function g(){}function b(){}var N={};u(N,o,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(B([])));k&&k!==i&&l.call(k,o)&&(N=k);var _=b.prototype=j.prototype=Object.create(N);function L(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function D(t,n){function r(i,s,a,o){var d=h(t[i],t,s);if("throw"!==d.type){var c=d.arg,u=c.value;return u&&"object"==e(u)&&l.call(u,"__await")?n.resolve(u.__await).then((function(e){r("next",e,a,o)}),(function(e){r("throw",e,a,o)})):n.resolve(u).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,o)}))}o(d.arg)}var i;s(this,"_invoke",{value:function(e,t){function l(){return new n((function(n,i){r(e,t,n,i)}))}return i=i?i.then(l,l):l()}})}function C(e,n,r){var i=m;return function(l,s){if(i===v)throw new Error("Generator is already running");if(i===p){if("throw"===l)throw s;return{value:t,done:!0}}for(r.method=l,r.arg=s;;){var a=r.delegate;if(a){var o=S(a,r);if(o){if(o===y)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===m)throw i=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=v;var d=h(e,n,r);if("normal"===d.type){if(i=r.done?p:f,d.arg===y)continue;return{value:d.arg,done:r.done}}"throw"===d.type&&(i=p,r.method="throw",r.arg=d.arg)}}}function S(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var l=h(i,e.iterator,n.arg);if("throw"===l.type)return n.method="throw",n.arg=l.arg,n.delegate=null,y;var s=l.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function B(n){if(n||""===n){var r=n[o];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var i=-1,s=function e(){for(;++i<n.length;)if(l.call(n,i))return e.value=n[i],e.done=!1,e;return e.value=t,e.done=!0,e};return s.next=s}}throw new TypeError(e(n)+" is not iterable")}return g.prototype=b,s(_,"constructor",{value:b,configurable:!0}),s(b,"constructor",{value:g,configurable:!0}),g.displayName=u(b,c,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(_),e},n.awrap=function(e){return{__await:e}},L(D.prototype),u(D.prototype,d,(function(){return this})),n.AsyncIterator=D,n.async=function(e,t,r,i,l){void 0===l&&(l=Promise);var s=new D(x(e,t,r,i),l);return n.isGeneratorFunction(t)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},L(_),u(_,c,"Generator"),u(_,o,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=B,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var n in this)"t"===n.charAt(0)&&l.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var o=l.call(s,"catchLoc"),d=l.call(s,"finallyLoc");if(o&&d){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(o){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&l.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:B(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}function i(e,t,n,r,i,l,s){try{var a=e[l](s),o=a.value}catch(d){return void n(d)}a.done?t(o):Promise.resolve(o).then(r,i)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,l){var s=e.apply(t,n);function a(e){i(s,r,l,a,o,"next",e)}function o(e){i(s,r,l,a,o,"throw",e)}a(void 0)}))}}System.register(["./index-legacy-e5jDIJ7v.js","./router-legacy-kOAqN8oI.js","./index-legacy-JBeNDdiK.js","./formik.esm-legacy-XdfQijo5.js","./index.esm-legacy-d1HI7OdW.js","./FormProvider-legacy-_hPrE_So.js","./TextAreaField-legacy-5tRmg6Ms.js","./TranslateField-legacy--lpTz8hS.js","./tailwind-legacy-Cj8YFuLD.js","./OverLayLoader-legacy-ntsmuMYX.js","./usePathWisePermission-legacy-fZbX4CvW.js","./TextField-legacy-c49Cp5fy.js","./reactQuery-legacy-GzPKeAE1.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-xgqmug7p.js","./headlessui-legacy-7mFRxZdX.js","./customInputValidation-legacy-09WHxC9F.js","./module-legacy-xZ9KfaFL.js"],(function(e,n){"use strict";var i,s,a,o,d,c,u,x,h,m,f,v,p,y,j,g,b,N,w,k;return{setters:[function(e){i=e.j,s=e.d,a=e.t,o=e.Q,d=e.U,c=e.b,u=e.S},function(e){x=e.e,h=e.d,m=e.u},function(e){f=e.P},function(e){v=e.u},function(e){p=e.c,y=e.a},function(e){j=e.F},function(e){g=e.T},null,function(e){b=e.r},function(e){N=e.O},function(e){w=e.u},function(e){k=e.T},null,null,null,null,null,null],execute:function(){function n(e){var t,n=e.open,r=e.setOpen,l=e.url,s=function(){return r(!n)};return i.jsxs(i.Fragment,{children:[n&&i.jsx("div",{onClick:s,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),i.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(n?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:i.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:i.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px]",children:[i.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-600",children:[i.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:"View Document"}),i.jsxs("button",{onClick:s,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[i.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:i.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),i.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),"pdf"==(t=l,t.split(".").pop())?i.jsx("embed",{type:"application/pdf",src:"https://docs.google.com/viewer?url=".concat(l,"&embedded=true"),width:"100%",height:"100%"}):i.jsx("img",{src:l,alt:"Naksha",className:"w-full h-full",loading:"lazy"}),i.jsx("div",{className:"p-4 md:p-5",children:i.jsx("div",{className:"flex items-center justify-end mt-4 gap-5",children:i.jsx(b.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:s,className:"mr-1 bg-gray-300",children:i.jsx("span",{children:"Ok"})})})})]})})})]})}e("default",(function(){var e,k,_,D,C,S,O,E,A,B,F,P,T,z,I,M,G,V,q,U,Y,R,W,H,Q,$,J,K,X,Z=x(),ee=t(h.useState({}),2),te=ee[0],ne=ee[1],re=t(h.useState(!1),2),ie=re[0],le=re[1];d();var se=w("/amc-app/trade/application-details"),ae=s({}),oe=ae.mutateAsync,de=ae.isLoading,ce=m().id,ue=t(h.useState(!1),2),xe=ue[0],he=ue[1],me=t(h.useState(""),2),fe=me[0],ve=me[1],pe=c({api:null===(e=a)||void 0===e?void 0:e.tradeAppDetail,config:{id:ce},options:{enabled:!!ce}}),ye=pe.data,je=pe.isLoading,ge=pe.refetch,be=v({enableReinitialize:!0,initialValues:{comment:"",action:""},validationSchema:p({comment:y().required("Comment is required")}),onSubmit:(we=l(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.setSubmitting,null!=t&&t.action){e.next=4;break}return o.error("Please select action"),e.abrupt("return");case 4:u.fire({title:"Are you sure?",text:"You want to ".concat("forward"==(null==t?void 0:t.action)?"Forward":"backward"," this application!"),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, submit it!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(function(){var e=l(r().mark((function e(n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.isConfirmed&&Ne(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e)}))),function(e,t){return we.apply(this,arguments)})}),Ne=function(){var e=l(r().mark((function e(t){var n,i,l,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe({api:a.tradeLevel,data:{applicationId:ce,comment:null==t?void 0:t.comment,action:"forward"==(null==t?void 0:t.action)?"forward":"backward"}});case 3:null!=(i=e.sent)&&null!==(n=i.data)&&void 0!==n&&n.status?(o.success(null==i||null===(l=i.data)||void 0===l?void 0:l.message),Z("/amc-app/trade/utc-inbox")):o.error(null==i||null===(s=i.data)||void 0===s?void 0:s.message),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o.error(null===e.t0||void 0===e.t0?void 0:e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();var we;return i.jsxs(f,{title:"Trade Application Details",children:[ie&&i.jsx(L,{open:ie,setOpen:le,updateMobData:te,refetch:ge}),je||de?i.jsx(N,{}):null,i.jsx(n,{open:xe,setOpen:he,url:fe}),i.jsxs("div",{className:"p-4",children:[i.jsxs("div",{className:"flex justify-center gap-2 items-center mb-2",children:[(null==ye||null===(k=ye.data)||void 0===k||null===(k=k.transactionDtl)||void 0===k?void 0:k.length)>0&&i.jsx(b.Button,{size:"sm",color:"blue",className:"py-1.5",onClick:function(){return Z("/amc-app/trade/trade-payment-history/".concat(ce))},children:i.jsx("small",{children:"Payment History"})}),"0"==(null==ye||null===(_=ye.data)||void 0===_||null===(_=_.licenceDtl)||void 0===_?void 0:_.payment_status)&&"5"==(null==ye||null===(D=ye.data)||void 0===D||null===(D=D.licenceDtl)||void 0===D?void 0:D.pending_status)&&i.jsx(b.Button,{size:"sm",color:"red",className:"py-1.5 px-9",onClick:function(){return Z("/amc-app/trade/trade-payment/".concat(ce))},children:i.jsx("small",{children:"Pay Now"})})]}),i.jsxs(b.Card,{className:"w-full",children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Application Status"})}),i.jsx(b.CardBody,{children:i.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Application No :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-green-900 font-semibold",children:(null==ye||null===(C=ye.data)||void 0===C||null===(C=C.licenceDtl)||void 0===C?void 0:C.application_no)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Application Type:"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 ",children:(null==ye||null===(S=ye.data)||void 0===S||null===(S=S.licenceDtl)||void 0===S?void 0:S.application_type)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Application Status :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-blue-600 font-semibold",children:(null==ye||null===(O=ye.data)||void 0===O?void 0:O.pendingStatus)||"--"})})]})})]}),i.jsx("div",{className:"border-t border-gray-200 my-3"}),i.jsxs(b.Card,{className:"w-full",children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Basic Details"})}),i.jsx(b.CardBody,{children:i.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Firm Name :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(E=ye.data)||void 0===E||null===(E=E.licenceDtl)||void 0===E?void 0:E.firm_name)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Firm Type:"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(A=ye.data)||void 0===A||null===(A=A.licenceDtl)||void 0===A?void 0:A.firm_type)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Nature of Business :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(B=ye.data)||void 0===B||null===(B=B.licenceDtl)||void 0===B?void 0:B.items_code)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"License For Years :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(F=ye.data)||void 0===F||null===(F=F.licenceDtl)||void 0===F?void 0:F.licence_for_years)+"yrs"||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Category Type :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(P=ye.data)||void 0===P||null===(P=P.licenceDtl)||void 0===P?void 0:P.category_type)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"License No :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(T=ye.data)||void 0===T||null===(T=T.licenceDtl)||void 0===T?void 0:T.license_no)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Ownership Type :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(z=ye.data)||void 0===z||null===(z=z.licenceDtl)||void 0===z?void 0:z.ownership_type)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Application Type :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(I=ye.data)||void 0===I||null===(I=I.licenceDtl)||void 0===I?void 0:I.application_type)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Apply Date :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(M=ye.data)||void 0===M||null===(M=M.licenceDtl)||void 0===M?void 0:M.application_date)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Valid Upto :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(G=ye.data)||void 0===G||null===(G=G.licenceDtl)||void 0===G?void 0:G.valid_upto)||"--"})})]})})]}),i.jsx("div",{className:"border-t border-gray-200 my-3"}),i.jsxs(b.Card,{className:"w-full",children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Property Details"})}),i.jsx(b.CardBody,{children:i.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Holding No :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(V=ye.data)||void 0===V||null===(V=V.licenceDtl)||void 0===V?void 0:V.holding_no)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Apply Date:"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(q=ye.data)||void 0===q||null===(q=q.licenceDtl)||void 0===q?void 0:q.application_date)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Business Area :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(U=ye.data)||void 0===U||null===(U=U.licenceDtl)||void 0===U?void 0:U.area_in_sqft)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Owner of Business Premises :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(Y=ye.data)||void 0===Y||null===(Y=Y.licenceDtl)||void 0===Y?void 0:Y.premises_owner_name)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Pincode :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(R=ye.data)||void 0===R||null===(R=R.licenceDtl)||void 0===R?void 0:R.pin_code)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Business Address:"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold w-42 truncate",children:(null==ye||null===(W=ye.data)||void 0===W||null===(W=W.licenceDtl)||void 0===W?void 0:W.address)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Landmark :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(H=ye.data)||void 0===H||null===(H=H.licenceDtl)||void 0===H?void 0:H.landmark)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Firm Establishment Date :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs  text-gray-600 font-semibold",children:(null==ye||null===(Q=ye.data)||void 0===Q||null===(Q=Q.licenceDtl)||void 0===Q?void 0:Q.establishment_date)||"--"})})]})})]}),i.jsx("div",{className:"border-t border-gray-200 my-3"}),i.jsxs(b.Card,{className:"mt-4 w-full",children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Owner Details"})}),i.jsx(b.CardBody,{children:i.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:i.jsxs("table",{className:"w-full text-xs text-left  border-slate-400 border",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"#"}),i.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Owner Name"}),i.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Guardian Name"}),i.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Mobile No."}),i.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Email"}),i.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Address"}),i.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Edit Mobile No."})]})}),i.jsx("tbody",{children:null==ye||null===($=ye.data)||void 0===$||null===($=$.ownerDtl)||void 0===$?void 0:$.map((function(e,t){return i.jsxs("tr",{children:[i.jsx("td",{className:"text-xs p-4 border border-slate-300",children:t+1}),i.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(null==e?void 0:e.owner_name)+" "+(null==e?void 0:e.owner_name_marathi)||"--"}),i.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(null==e?void 0:e.guardian_name)+" "+(null==e?void 0:e.guardian_name_marathi)}),i.jsx("td",{className:"text-xs p-4 border border-slate-300",children:null==e?void 0:e.mobile_no}),i.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(null==e?void 0:e.email_id)||"--"}),i.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(null==e?void 0:e.address)||"--"}),i.jsx("td",{className:"text-xs p-4 border border-slate-300",children:i.jsx(b.Button,{size:"sm",color:"blue",className:"py-1.5",onClick:function(){return function(e){ne(e),le(!0)}(e)},children:i.jsx("small",{children:"Edit"})})})]},t+1)}))})]})})})]}),i.jsx("div",{className:"my-4 border-b-2"}),i.jsxs(b.Card,{className:"w-full",children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Document List"})}),i.jsx(b.CardBody,{children:(null==ye||null===(J=ye.data)||void 0===J?void 0:J.documents.length)>0?null==ye||null===(K=ye.data)||void 0===K||null===(K=K.documents)||void 0===K?void 0:K.map((function(e,t){return i.jsxs(h.Fragment,{children:[i.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[i.jsx("div",{className:"col-span-2",children:i.jsx("h1",{className:"text-xs text-blue-600 font-bold mb-2",children:null==e?void 0:e.doc_code})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold",children:"Status : "})}),i.jsx("div",{children:i.jsx("h1",{className:"".concat(1==(null==e?void 0:e.verify_status)?"text-green-600":"text-red-900"," text-xs font-semibold"),children:1==(null==e?void 0:e.verify_status)?"Verified":"Pending"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold",children:"Remarks : "})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs",children:(null==e?void 0:e.remarks)||"--"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs font-semibold",children:"Document : "})}),i.jsx("div",{children:i.jsx("h1",{className:"text-xs",children:i.jsx("button",{className:"text-xs text-white bg-blue-500 px-3 py-1 rounded",onClick:function(){he(!0),ve(null==e?void 0:e.doc_path)},children:"View"})})})]}),i.jsx("div",{className:"my-4 border-b-2"})]},t)})):i.jsx("div",{className:"text-center ",children:i.jsx("h1",{className:"text-xs font-semibold text-red-900",children:"No Document Found"})})})]}),(null==se||null===(X=se.result)||void 0===X?void 0:X.create)&&i.jsxs(j,{formik:be,children:[i.jsx("div",{className:"my-4 border-b-2"}),i.jsx(g,{label:"Comment",name:"comment",formik:be}),i.jsxs("div",{className:"flex justify-between items-center mt-4",children:[i.jsx(b.Button,{size:"sm",type:"submit",color:"red",onClick:function(){be.setFieldValue("action","backward")},children:"Back to Dealing Officer"}),i.jsx(b.Button,{size:"sm",color:"blue",type:"submit",onClick:function(){be.setFieldValue("action","forward")},children:"Forward"})]})]})]})]})}));var _=p().shape({mobileNo:y().required("Mobile No is required").min(10).max(10)});function L(e){var t,n=e.open,d=e.setOpen,c=e.updateMobData,u=(e.applicationId,e.refetch),x=function(){return d(!n)},h=s({}),m=v({enableReinitialize:!0,initialValues:{applicationId:null==c?void 0:c.temp_id,ownerId:c.id,mobileNo:c.mobile_no},validationSchema:_,onSubmit:(t=l(r().mark((function e(t){var n,i,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.mutateAsync({api:null===(n=a)||void 0===n?void 0:n.tradeUpdateMobile,data:t});case 3:i=e.sent,null!=(l=i.data)&&l.status&&(o.success(null==l?void 0:l.message),u(),x()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),function(e){return t.apply(this,arguments)})});return i.jsxs(j,{formik:m,children:[n&&i.jsx("div",{onClick:x,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),i.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(n?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:i.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:i.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[i.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[i.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Add Mobile No"}),i.jsxs("button",{onClick:x,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[i.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:i.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),i.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),i.jsxs("div",{className:"p-4 md:p-5",children:[i.jsx("div",{className:"grid grid-cols-1 gap-4",children:i.jsx("div",{children:i.jsx(k,{type:"text",name:"mobileNo",label:"Mobile No",formik:m,placeholder:"Enter Mobile No",maxLength:10})})}),i.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[i.jsx(b.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:x,className:"mr-1 bg-gray-300",children:i.jsx("span",{children:"Cancel"})}),i.jsx(b.Button,{type:"submit",size:"sm",loading:h.isLoading,disabled:h.isLoading,children:i.jsx("span",{children:"Update"})})]})]})]})})})]})}}}}))}();