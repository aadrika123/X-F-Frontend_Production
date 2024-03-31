!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},i=Object.prototype,l=i.hasOwnProperty,s=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",d=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(r){u=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var i=t&&t.prototype instanceof j?t:j,l=Object.create(i.prototype),a=new A(n||[]);return s(l,"_invoke",{value:O(e,r,a)}),l}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=h;var x="suspendedStart",f="suspendedYield",v="executing",y="completed",p={};function j(){}function g(){}function b(){}var N={};u(N,o,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(B([])));_&&_!==i&&l.call(_,o)&&(N=_);var k=b.prototype=j.prototype=Object.create(N);function L(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function D(t,r){function n(i,s,a,o){var c=m(t[i],t,s);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==e(u)&&l.call(u,"__await")?r.resolve(u.__await).then((function(e){n("next",e,a,o)}),(function(e){n("throw",e,a,o)})):r.resolve(u).then((function(e){d.value=e,a(d)}),(function(e){return n("throw",e,a,o)}))}o(c.arg)}var i;s(this,"_invoke",{value:function(e,t){function l(){return new r((function(r,i){n(e,t,r,i)}))}return i=i?i.then(l,l):l()}})}function O(e,t,n){var i=x;return function(l,s){if(i===v)throw new Error("Generator is already running");if(i===y){if("throw"===l)throw s;return{value:r,done:!0}}for(n.method=l,n.arg=s;;){var a=n.delegate;if(a){var o=S(a,n);if(o){if(o===p)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===x)throw i=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=v;var c=m(e,t,n);if("normal"===c.type){if(i=n.done?y:f,c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=y,n.method="throw",n.arg=c.arg)}}}function S(e,t){var n=t.method,i=e.iterator[n];if(i===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,S(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var l=m(i,e.iterator,t.arg);if("throw"===l.type)return t.method="throw",t.arg=l.arg,t.delegate=null,p;var s=l.arg;return s?s.done?(t[e.resultName]=s.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,p):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function B(t){if(t||""===t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function e(){for(;++i<t.length;)if(l.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=r,e.done=!0,e};return s.next=s}}throw new TypeError(e(t)+" is not iterable")}return g.prototype=b,s(k,"constructor",{value:b,configurable:!0}),s(b,"constructor",{value:g,configurable:!0}),g.displayName=u(b,d,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,d,"GeneratorFunction")),e.prototype=Object.create(k),e},n.awrap=function(e){return{__await:e}},L(D.prototype),u(D.prototype,c,(function(){return this})),n.AsyncIterator=D,n.async=function(e,t,r,i,l){void 0===l&&(l=Promise);var s=new D(h(e,t,r,i),l);return n.isGeneratorFunction(t)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},L(k),u(k,d,"Generator"),u(k,o,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=B,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,i){return a.type="throw",a.arg=e,t.next=n,i&&(t.method="next",t.arg=r),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],a=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var o=l.call(s,"catchLoc"),c=l.call(s,"finallyLoc");if(o&&c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(o){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=e,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;C(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:B(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),p}},n}function r(e,t,r,n,i,l,s){try{var a=e[l](s),o=a.value}catch(c){return void r(c)}a.done?t(o):Promise.resolve(o).then(n,i)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(i,l){var s=e.apply(t,n);function a(e){r(s,i,l,a,o,"next",e)}function o(e){r(s,i,l,a,o,"throw",e)}a(void 0)}))}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,l,s,a=[],o=!0,c=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;o=!1}else for(;!(o=(n=l.call(r)).done)&&(a.push(n.value),a.length!==t);o=!0);}catch(e){c=!0,i=e}finally{try{if(!o&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-_w30ICfg.js","./router-legacy-rigPOyFI.js","./index-legacy-dIXo1csY.js","./formik.esm-legacy-LafwCeEO.js","./index.esm-legacy-5u-Ffckd.js","./FormProvider-legacy-gbebjuQe.js","./TextAreaField-legacy-g0NXjLpW.js","./index-legacy-vtVAGFCF.js","./tailwind-legacy-e6PAgAmt.js","./OverLayLoader-legacy-sOU5Zwlk.js","./usePathWisePermission-legacy-OX3YObs2.js","./reactQuery-legacy-jKPiMKrc.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-ELZmKVKq.js","./headlessui-legacy-Yu0VJXN1.js","./module-legacy-4l2XNmm8.js"],(function(e,r){"use strict";var l,s,a,o,c,d,u,h,m,x,f,v,y,p,j,g,b,N,w;return{setters:[function(e){l=e.j,s=e.U,a=e.b,o=e.a,c=e.t,d=e.Q,u=e.S},function(e){h=e.u,m=e.h,x=e.d},function(e){f=e.P},function(e){v=e.u},function(e){y=e.c,p=e.a},function(e){j=e.F},function(e){g=e.T},null,function(e){b=e.r},function(e){N=e.O},function(e){w=e.u},null,null,null,null,null,null],execute:function(){function r(e){var t,r=e.open,n=e.setOpen,i=e.url,s=function(){return n(!r)};return l.jsxs(l.Fragment,{children:[r&&l.jsx("div",{onClick:s,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),l.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(r?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:l.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:l.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px]",children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-600",children:[l.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:"View Document"}),l.jsxs("button",{onClick:s,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[l.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:l.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),l.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),"pdf"==(t=i,t.split(".").pop())?l.jsx("embed",{type:"application/pdf",src:"https://docs.google.com/viewer?url=".concat(i,"&embedded=true"),width:"100%",height:"100%"}):l.jsx("img",{src:i,alt:"Naksha",className:"w-full h-full",loading:"lazy"}),l.jsx("div",{className:"p-4 md:p-5",children:l.jsx("div",{className:"flex items-center justify-end mt-4 gap-5",children:l.jsx(b.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:s,className:"mr-1 bg-gray-300",children:l.jsx("span",{children:"Ok"})})})})]})})})]})}e("default",(function(){var e,_,k,L,D,O,S,E,C,A,B,F,P,T,G,I,z,V,Y,M,q,Q,U,R,W,$,H=h();s();var X=w("/amc-app/trade/application-details"),Z=a({}),J=Z.mutateAsync,K=Z.isLoading,ee=m().id,te=i(x.useState(!1),2),re=te[0],ne=te[1],ie=i(x.useState(""),2),le=ie[0],se=ie[1],ae=o({api:null===(e=c)||void 0===e?void 0:e.tradeAppDetail,config:{id:ee},options:{enabled:!!ee}}),oe=ae.data,ce=ae.isLoading,de=(ae.refetch,v({enableReinitialize:!0,initialValues:{comment:"",action:""},validationSchema:y({comment:p().required("Comment is required")}),onSubmit:(he=n(t().mark((function e(r,i){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.setSubmitting,null!=r&&r.action){e.next=4;break}return d.error("Please select action"),e.abrupt("return");case 4:u.fire({title:"Are you sure?",text:"You want to ".concat("forward"==(null==r?void 0:r.action)?"Forward":"backward"," this application!"),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, submit it!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(function(){var e=n(t().mark((function e(n){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.isConfirmed&&ue(r);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:case"end":return e.stop()}}),e)}))),function(e,t){return he.apply(this,arguments)})})),ue=function(){var e=n(t().mark((function e(r){var n,i,l,s;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J({api:c.tradeLevel,data:{applicationId:ee,comment:null==r?void 0:r.comment,action:"forward"==(null==r?void 0:r.action)?"forward":"backward"}});case 3:null!=(i=e.sent)&&null!==(n=i.data)&&void 0!==n&&n.status?(d.success(null==i||null===(l=i.data)||void 0===l?void 0:l.message),H("/amc-app/trade/utc-inbox")):d.error(null==i||null===(s=i.data)||void 0===s?void 0:s.message),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d.error(null===e.t0||void 0===e.t0?void 0:e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();var he;return l.jsxs(f,{title:"Trade Application Details",children:[ce||K?l.jsx(N,{}):null,l.jsx(r,{open:re,setOpen:ne,url:le}),l.jsxs("div",{className:"p-4",children:[l.jsxs(b.Card,{className:"w-full",children:[l.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:l.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Application Status"})}),l.jsx(b.CardBody,{children:l.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application No :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-green-900 font-semibold",children:(null==oe||null===(_=oe.data)||void 0===_||null===(_=_.licenceDtl)||void 0===_?void 0:_.application_no)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application Type:"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 ",children:(null==oe||null===(k=oe.data)||void 0===k||null===(k=k.licenceDtl)||void 0===k?void 0:k.application_type)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application Status :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-blue-600 font-semibold",children:(null==oe||null===(L=oe.data)||void 0===L?void 0:L.pendingStatus)||"--"})})]})})]}),l.jsx("div",{className:"border-t border-gray-200 my-3"}),l.jsxs(b.Card,{className:"w-full",children:[l.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:l.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),l.jsx(b.CardBody,{children:l.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Firm Name :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(D=oe.data)||void 0===D||null===(D=D.licenceDtl)||void 0===D?void 0:D.firm_name)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Firm Type:"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(O=oe.data)||void 0===O||null===(O=O.licenceDtl)||void 0===O?void 0:O.firm_type)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Nature of Business :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(S=oe.data)||void 0===S||null===(S=S.licenceDtl)||void 0===S?void 0:S.items_code)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"License For Years :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(E=oe.data)||void 0===E||null===(E=E.licenceDtl)||void 0===E?void 0:E.licence_for_years)+"yrs"||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Category Type :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(C=oe.data)||void 0===C||null===(C=C.licenceDtl)||void 0===C?void 0:C.category_type)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"License No :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(A=oe.data)||void 0===A||null===(A=A.licenceDtl)||void 0===A?void 0:A.license_no)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Ownership Type :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(B=oe.data)||void 0===B||null===(B=B.licenceDtl)||void 0===B?void 0:B.ownership_type)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application Type :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(F=oe.data)||void 0===F||null===(F=F.licenceDtl)||void 0===F?void 0:F.application_type)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Apply Date :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(P=oe.data)||void 0===P||null===(P=P.licenceDtl)||void 0===P?void 0:P.application_date)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Valid Upto :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(T=oe.data)||void 0===T||null===(T=T.licenceDtl)||void 0===T?void 0:T.valid_upto)||"--"})})]})})]}),l.jsx("div",{className:"border-t border-gray-200 my-3"}),l.jsxs(b.Card,{className:"w-full",children:[l.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:l.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Property Details"})}),l.jsx(b.CardBody,{children:l.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Holding No :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(G=oe.data)||void 0===G||null===(G=G.licenceDtl)||void 0===G?void 0:G.holding_no)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Apply Date:"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(I=oe.data)||void 0===I||null===(I=I.licenceDtl)||void 0===I?void 0:I.application_date)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Business Area :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(z=oe.data)||void 0===z||null===(z=z.licenceDtl)||void 0===z?void 0:z.area_in_sqft)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Owner of Business Premises :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(V=oe.data)||void 0===V||null===(V=V.licenceDtl)||void 0===V?void 0:V.premises_owner_name)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Pincode :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(Y=oe.data)||void 0===Y||null===(Y=Y.licenceDtl)||void 0===Y?void 0:Y.pin_code)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Business Address:"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold w-42 truncate",children:(null==oe||null===(M=oe.data)||void 0===M||null===(M=M.licenceDtl)||void 0===M?void 0:M.address)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Landmark :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(q=oe.data)||void 0===q||null===(q=q.licenceDtl)||void 0===q?void 0:q.landmark)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Firm Establishment Date :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-600 font-semibold",children:(null==oe||null===(Q=oe.data)||void 0===Q||null===(Q=Q.licenceDtl)||void 0===Q?void 0:Q.establishment_date)||"--"})})]})})]}),l.jsx("div",{className:"border-t border-gray-200 my-3"}),l.jsxs(b.Card,{className:"mt-4 w-full",children:[l.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:l.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner Details"})}),l.jsx(b.CardBody,{children:l.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:l.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"#"}),l.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Owner Name"}),l.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Guardian Name"}),l.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Mobile No."}),l.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Email"}),l.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Address"})]})}),l.jsx("tbody",{children:null==oe||null===(U=oe.data)||void 0===U||null===(U=U.ownerDtl)||void 0===U?void 0:U.map((function(e,t){return l.jsxs("tr",{children:[l.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t+1}),l.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(null==e?void 0:e.owner_name)+" "+(null==e?void 0:e.owner_name_marathi)||"--"}),l.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(null==e?void 0:e.guardian_name)+" "+(null==e?void 0:e.guardian_name_marathi)}),l.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.mobile_no}),l.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(null==e?void 0:e.email_id)||"--"}),l.jsx("td",{className:"text-sm p-4 border border-slate-300",children:(null==e?void 0:e.address)||"--"})]},t)}))})]})})})]}),l.jsx("div",{className:"my-4 border-b-2"}),l.jsxs(b.Card,{className:"w-full",children:[l.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:l.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Document List"})}),l.jsx(b.CardBody,{children:(null==oe||null===(R=oe.data)||void 0===R?void 0:R.documents.length)>0?null==oe||null===(W=oe.data)||void 0===W||null===(W=W.documents)||void 0===W?void 0:W.map((function(e,t){return l.jsxs(x.Fragment,{children:[l.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[l.jsx("div",{className:"col-span-2",children:l.jsx("h1",{className:"text-sm text-blue-600 font-bold mb-2",children:null==e?void 0:e.doc_code})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold",children:"Status : "})}),l.jsx("div",{children:l.jsx("h1",{className:"".concat(1==(null==e?void 0:e.verify_status)?"text-green-600":"text-red-900"," text-sm font-semibold"),children:1==(null==e?void 0:e.verify_status)?"Verified":"Pending"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold",children:"Remarks : "})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm",children:(null==e?void 0:e.remarks)||"--"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold",children:"Document : "})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm",children:l.jsx("button",{className:"text-xs text-white bg-blue-500 px-3 py-1 rounded",onClick:function(){ne(!0),se(null==e?void 0:e.doc_path)},children:"View"})})})]}),l.jsx("div",{className:"my-4 border-b-2"})]},t)})):l.jsx("div",{className:"text-center ",children:l.jsx("h1",{className:"text-sm font-semibold text-red-900",children:"No Document Found"})})})]}),(null==X||null===($=X.result)||void 0===$?void 0:$.create)&&l.jsxs(j,{formik:de,children:[l.jsx("div",{className:"my-4 border-b-2"}),l.jsx(g,{label:"Comment",name:"comment",formik:de}),l.jsxs("div",{className:"flex justify-between items-center mt-4",children:[l.jsx(b.Button,{size:"sm",type:"submit",color:"red",onClick:function(){de.setFieldValue("action","backward")},children:"Back to Dealing Officer"}),l.jsx(b.Button,{size:"sm",color:"blue",type:"submit",onClick:function(){de.setFieldValue("action","forward")},children:"Forward"})]})]})]})]})}))}}}))}();
