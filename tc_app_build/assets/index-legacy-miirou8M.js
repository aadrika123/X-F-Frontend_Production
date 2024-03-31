!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},a=Object.prototype,l=a.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",d=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(n){u=function(e,t,n){return e[t]=n}}function h(e,t,n,r){var a=t&&t.prototype instanceof g?t:g,l=Object.create(a.prototype),o=new A(r||[]);return i(l,"_invoke",{value:O(e,n,o)}),l}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=h;var f="suspendedStart",v="suspendedYield",x="executing",p="completed",y={};function g(){}function j(){}function b(){}var w={};u(w,s,(function(){return this}));var N=Object.getPrototypeOf,k=N&&N(N(B([])));k&&k!==a&&l.call(k,s)&&(w=k);var _=b.prototype=g.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(t,n){function r(a,i,o,s){var c=m(t[a],t,i);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==e(u)&&l.call(u,"__await")?n.resolve(u.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):n.resolve(u).then((function(e){d.value=e,o(d)}),(function(e){return r("throw",e,o,s)}))}s(c.arg)}var a;i(this,"_invoke",{value:function(e,t){function l(){return new n((function(n,a){r(e,t,n,a)}))}return a=a?a.then(l,l):l()}})}function O(e,t,r){var a=f;return function(l,i){if(a===x)throw new Error("Generator is already running");if(a===p){if("throw"===l)throw i;return{value:n,done:!0}}for(r.method=l,r.arg=i;;){var o=r.delegate;if(o){var s=E(o,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===f)throw a=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=x;var c=m(e,t,r);if("normal"===c.type){if(a=r.done?p:v,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=p,r.method="throw",r.arg=c.arg)}}}function E(e,t){var r=t.method,a=e.iterator[r];if(a===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,E(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var l=m(a,e.iterator,t.arg);if("throw"===l.type)return t.method="throw",t.arg=l.arg,t.delegate=null,y;var i=l.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,y):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function B(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(l.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return j.prototype=b,i(_,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:j,configurable:!0}),j.displayName=u(b,d,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,d,"GeneratorFunction")),e.prototype=Object.create(_),e},r.awrap=function(e){return{__await:e}},L(S.prototype),u(S.prototype,c,(function(){return this})),r.AsyncIterator=S,r.async=function(e,t,n,a,l){void 0===l&&(l=Promise);var i=new S(h(e,t,n,a),l);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(_),u(_,d,"Generator"),u(_,s,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=B,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!e)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,a){return o.type="throw",o.arg=e,t.next=r,a&&(t.method="next",t.arg=n),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=l.call(i,"catchLoc"),c=l.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&l.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;C(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:B(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),y}},r}function n(e,t,n,r,a,l,i){try{var o=e[l](i),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,a)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(a,l){var i=e.apply(t,r);function o(e){n(i,a,l,o,s,"next",e)}function s(e){n(i,a,l,o,s,"throw",e)}o(void 0)}))}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,i,o=[],s=!0,c=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=l.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-_w30ICfg.js","./router-legacy-rigPOyFI.js","./tailwind-legacy-e6PAgAmt.js","./formik.esm-legacy-LafwCeEO.js","./index.esm-legacy-5u-Ffckd.js","./FormProvider-legacy-gbebjuQe.js","./TextField-legacy-SzvcmarG.js","./RadioButton-legacy-lzrqlQ6T.js","./TextAreaField-legacy-g0NXjLpW.js","./index-legacy-vtVAGFCF.js","./index-legacy-dIXo1csY.js","./OverLayLoader-legacy-sOU5Zwlk.js","./reactQuery-legacy-jKPiMKrc.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-ELZmKVKq.js","./headlessui-legacy-Yu0VJXN1.js","./module-legacy-4l2XNmm8.js"],(function(e,n){"use strict";var l,i,o,s,c,d,u,h,m,f,v,x,p,y,g,j,b,w,N,k,_,L,S;return{setters:[function(e){l=e.j,i=e.b,o=e.a,s=e.p,c=e.g,d=e.S,u=e.Q,h=e.f},function(e){m=e.d,f=e.h,v=e.u,x=e.r},function(e){p=e.r},function(e){y=e.u},function(e){g=e.c,j=e.a,b=e.g},function(e){w=e.F},function(e){N=e.T},function(e){k=e.R},function(e){_=e.T},null,function(e){L=e.P},function(e){S=e.O},null,null,null,null,null,null],execute:function(){function n(e){var t=e.open,n=e.setOpen,r=e.url,a=e.ext,i=e.title,o=function(){return n(!t)};return l.jsxs(l.Fragment,{children:[t&&l.jsx("div",{onClick:o,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),l.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(t?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:l.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full ",children:l.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px]",children:[l.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-600",children:[l.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:i}),l.jsxs("button",{onClick:o,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[l.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:l.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),l.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),"pdf"===a?l.jsx("embed",{src:"https://docs.google.com/viewer?url=".concat(r,"&embedded=true"),width:"100%",height:"100%"}):l.jsx("img",{src:r,alt:"Naksha",className:"w-full h-full",loading:"lazy"}),l.jsx("div",{className:"p-4 md:p-5",children:l.jsx("div",{className:"flex items-center justify-end mt-4 gap-5",children:l.jsx(p.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:o,className:"mr-1 bg-gray-300",children:l.jsx("span",{children:"Ok"})})})})]})})})]})}e("default",(function(){var e,E,P,C,A,B,I,T,F,z,q,V,G,M,D,R,Y,Q,U,W,Z,$,X,H,J,K,ee,te,ne,re,ae,le,ie,oe,se,ce,de=i({}),ue=a(m.useState(""),2),he=(ue[0],ue[1]),me=a(m.useState(!1),2),fe=me[0],ve=me[1],xe=a(m.useState(!1),2),pe=xe[0],ye=xe[1],ge=f().id,je=v(),be=o({api:s.getUploadDocNaksha,config:{applicationId:ge},value:[ge],options:{enabled:!!ge}}),we=be.data,Ne=(be.refetch,be.error,be.isLoading),ke=o({api:null===(e=c)||void 0===e?void 0:e.workFlowInfo,config:{workflowId:null==we||null===(E=we.data)||void 0===E?void 0:E.workflow_id},value:[null==we||null===(P=we.data)||void 0===P?void 0:P.workflow_id],options:{enabled:!(null==we||null===(C=we.data)||void 0===C||!C.workflow_id)}}),_e=y({enableReinitialize:!0,initialValues:{areaOfPlot:"",isNaksha:null!=we&&null!==(A=we.data)&&void 0!==A&&A.naksha?"":"no",comment:"",message:""},validationSchema:g({isNaksha:j().required("Required"),comment:j().required("Required").max(500,"Max 500 characters"),areaOfPlot:b().when("isNaksha",{is:"yes",then:function(){return b().required("Required")}})}),onSubmit:(Oe=r(t().mark((function e(n){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.fire({title:"Are you sure?",text:"You are going to verify naksha of this property ",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((function(e){e.isConfirmed&&Le(n)})).catch((function(e){var t;u.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 1:case"end":return e.stop()}}),e)}))),function(e){return Oe.apply(this,arguments)})}),Le=function(){var e=r(t().mark((function e(n){var r,a,l,i,o,c,d,h,m,f;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={applicationId:ge,IsDouble:"no"===n.isNaksha,areaOfPlot:n.areaOfPlot},e.prev=1,e.next=4,de.mutateAsync({api:s.nakshaVerify,data:r});case 4:if(null==(l=e.sent)||null===(a=l.data)||void 0===a||!a.status){e.next=13;break}return he(null==l||null===(i=l.data)||void 0===i?void 0:i.message),e.next=9,de.mutateAsync({api:s.safLevel,data:{applicationId:ge,action:"forward",comment:"Ok"}});case 9:null!=(c=e.sent)&&null!==(o=c.data)&&void 0!==o&&o.status?(je("/amc-app/property/saf-verification-list",{replace:!0}),u.success(null==c||null===(d=c.data)||void 0===d?void 0:d.message)):u.error(null==c||null===(h=c.data)||void 0===h?void 0:h.message),e.next=14;break;case 13:u.error(null==l||null===(m=l.data)||void 0===m?void 0:m.message);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),u.error((null===e.t0||void 0===e.t0||null===(f=e.t0.data)||void 0===f?void 0:f.message)||"Something went wrong !");case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),Se=function(){var e=r(t().mark((function e(){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=(null==_e||null===(n=_e.values)||void 0===n?void 0:n.comment)){e.next=2;break}return e.abrupt("return",u.error("Comment is required !"));case 2:d.fire({title:"Are you sure?",text:"You are going to back this application to Agency Engineer",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(function(){var e=r(t().mark((function e(n){var r,a,l,i,o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConfirmed){e.next=11;break}return e.prev=1,e.next=4,de.mutateAsync({api:s.safLevel,data:{applicationId:ge,receiverRoleId1:"",action:"backward",comment:(null==_e||null===(r=_e.values)||void 0===r?void 0:r.comment)||"No Comment"}});case 4:null!=(l=e.sent)&&null!==(a=l.data)&&void 0!==a&&a.status?(u.success(null==l||null===(i=l.data)||void 0===i?void 0:i.message),je("/amc-app/property/saf-verification-list",{replace:!0})):u.error((null==l||null===(o=l.data)||void 0===o?void 0:o.message)||"Something went wrong, Please try again"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),u.error(null===e.t0||void 0===e.t0?void 0:e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var t;u.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var Oe;return x.useEffect((function(){var e;"no"==(null==_e||null===(e=_e.values)||void 0===e?void 0:e.isNaksha)&&(_e.setFieldValue("areaOfPlot",""),_e.setFieldValue("message",""))}),[null==_e||null===(B=_e.values)||void 0===B?void 0:B.isNaksha]),Ne?l.jsx(h,{}):l.jsxs(l.Fragment,{children:[de.isLoading&&l.jsx(S,{}),l.jsxs(L,{title:"Naksha Verification",children:[l.jsx(n,{open:fe,setOpen:ve,url:null==we||null===(I=we.data)||void 0===I||null===(I=I.naksha)||void 0===I?void 0:I.doc_path,ext:null==we||null===(T=we.data)||void 0===T||null===(T=T.naksha)||void 0===T?void 0:T.ext,title:"Sanction Plan"}),l.jsx(n,{open:pe,setOpen:ye,url:null==we||null===(F=we.data)||void 0===F||null===(F=F.measurement_sheet)||void 0===F?void 0:F.doc_path,ext:null==we||null===(z=we.data)||void 0===z||null===(z=z.measurement_sheet)||void 0===z?void 0:z.ext,title:"Measurement Sheet"}),l.jsxs("div",{className:"p-4",children:[l.jsxs(p.Card,{className:"w-full",children:[l.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:l.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),l.jsx(p.CardBody,{children:l.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application No :"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm  text-gray-900",children:null==we||null===(q=we.data)||void 0===q?void 0:q.saf_no})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Owner Name :"})}),l.jsx("div",{className:"text-sm  text-gray-900",children:null==we||null===(V=we.data)||void 0===V?void 0:V.applicant_name}),l.jsx("div",{children:l.jsxs("h1",{className:"text-sm font-semibold text-gray-900",children:["Buildup Area (",l.jsx("small",{children:"In Sqft"}),") :"]})}),l.jsx("div",{className:"text-sm  text-gray-900",children:null==we||null===(G=we.data)||void 0===G?void 0:G.builtup_area}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Zone :"})}),l.jsx("div",{className:"text-sm  text-gray-900",children:l.jsx("h1",{className:"text-sm  text-gray-900",children:null==we||null===(M=we.data)||void 0===M?void 0:M.zone})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Ward :"})}),l.jsx("div",{className:"text-sm  text-gray-900",children:l.jsx("h1",{className:"text-sm  text-gray-900",children:null==we||null===(D=we.data)||void 0===D?void 0:D.new_ward_no})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Property Type :"})}),l.jsx("div",{className:"text-sm  text-gray-900",children:l.jsx("h1",{className:"text-sm  text-gray-900",children:null==we||null===(R=we.data)||void 0===R?void 0:R.property_type})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Address :"})}),l.jsx("div",{className:"text-sm  text-gray-900",children:l.jsx("h1",{className:"text-sm  text-gray-900",children:null==we||null===(Y=we.data)||void 0===Y?void 0:Y.prop_address})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Assessment Type :"})}),l.jsx("div",{className:"text-sm  text-gray-900",children:l.jsx("h1",{className:"text-sm  text-gray-900",children:null==we||null===(Q=we.data)||void 0===Q?void 0:Q.assessment_type})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application Date :"})}),l.jsx("div",{className:"text-sm  text-gray-900",children:l.jsx("h1",{className:"text-sm  text-gray-900",children:null==we||null===(U=we.data)||void 0===U?void 0:U.application_date})}),l.jsx("div",{className:"col-span-2 flex justify-center items-center mt-3",children:l.jsx(p.Button,{size:"sm",variant:"outlined",onClick:function(){return je("/amc-app/property/saf-property-details/".concat(ge))},children:l.jsx("span",{children:"View Saf Details"})})})]})})]}),l.jsx("div",{className:"border-b-2 border-gray-300 mt-3 mb-3"}),l.jsxs(p.Card,{className:"w-full",children:[l.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:l.jsxs("h1",{className:"text-base font-semibold text-gray-100",children:["Measurement Sheet"," "]})}),null!=we&&null!==(W=we.data)&&void 0!==W&&W.measurement_sheet?l.jsxs("div",{className:"grid grid-cols-1 gap-2 items-center",children:["jpg"==(null==we||null===(Z=we.data)||void 0===Z||null===(Z=Z.measurement_sheet)||void 0===Z?void 0:Z.ext)||"jpeg"==(null==we||null===($=we.data)||void 0===$||null===($=$.measurement_sheet)||void 0===$?void 0:$.ext)||"png"==(null==we||null===(X=we.data)||void 0===X||null===(X=X.measurement_sheet)||void 0===X?void 0:X.ext)?l.jsx("div",{className:"flex justify-center items-center",children:l.jsx("img",{src:null==we||null===(H=we.data)||void 0===H||null===(H=H.measurement_sheet)||void 0===H?void 0:H.doc_path,alt:"measurement_sheet",loading:"lazy",width:500,className:"w-full h-full object-cover"})}):l.jsx("div",{className:"w-full",children:l.jsx("embed",{src:"https://docs.google.com/viewer?url=".concat(null==we||null===(J=we.data)||void 0===J||null===(J=J.measurement_sheet)||void 0===J?void 0:J.doc_path,"&embedded=true"),width:"100%",height:"100%"})}),l.jsx("div",{className:"flex justify-center items-center mb-5 mt-4",children:l.jsx(p.Button,{type:"button",size:"sm",color:"blue",className:"text-[11px]  h-8 justify-center items-center text-center flex",onClick:function(){return ye(!0)},variant:"outlined",children:l.jsx("span",{children:"View Measurement"})})})]}):l.jsx("div",{className:"text-center py-5",children:l.jsx("h1",{className:"text-red-900 font-semibold text-sm",children:"Measurement Sheet not found!"})})]}),l.jsx("div",{className:"border-b-2 border-gray-300 mt-3 mb-3"}),l.jsxs(p.Card,{className:"w-full",children:[l.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:l.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Sanction Plan"})}),l.jsx(p.CardBody,{children:null!=we&&null!==(K=we.data)&&void 0!==K&&K.naksha?l.jsxs("div",{className:"grid grid-cols-1 gap-2 items-center",children:["jpg"==(null==we||null===(ee=we.data)||void 0===ee||null===(ee=ee.naksha)||void 0===ee?void 0:ee.ext)||"jpeg"==(null==we||null===(te=we.data)||void 0===te||null===(te=te.naksha)||void 0===te?void 0:te.ext)||"png"==(null==we||null===(ne=we.data)||void 0===ne||null===(ne=ne.naksha)||void 0===ne?void 0:ne.ext)?l.jsx("div",{className:"flex justify-center items-center",children:l.jsx("img",{src:null==we||null===(re=we.data)||void 0===re||null===(re=re.naksha)||void 0===re?void 0:re.doc_path,alt:"naksha",loading:"lazy",width:500,className:"w-full h-full object-cover"})}):l.jsx("div",{className:"w-full",children:l.jsx("embed",{src:"https://docs.google.com/viewer?url=".concat(null==we||null===(ae=we.data)||void 0===ae||null===(ae=ae.naksha)||void 0===ae?void 0:ae.doc_path,"&embedded=true"),width:"100%",height:"100%"})}),l.jsx("div",{className:"flex justify-center items-center",children:l.jsx(p.Button,{type:"button",size:"sm",color:"blue",className:"text-[11px]  h-8 justify-center items-center text-center flex",onClick:function(){return ve(!0)},variant:"outlined",children:l.jsx("span",{children:"View Sanction"})})})]}):l.jsx("div",{className:"text-center",children:l.jsx("h1",{className:"text-red-900 font-semibold text-sm",children:"Sanction Plan not found!"})})})]}),l.jsx("div",{className:"border-b-2 border-gray-300 mt-3 mb-4"}),"no"==(null==_e||null===(le=_e.values)||void 0===le?void 0:le.isNaksha)&&l.jsx("div",{className:"flex justify-center items-center",children:l.jsx("h1",{className:"text-sm font-semibold text-red-900 text-center mb-3 w-52",children:"Double taxation will be applied for this property !"})}),l.jsxs(w,{formik:_e,children:[(null==we||null===(ie=we.data)||void 0===ie?void 0:ie.naksha)&&l.jsx("div",{className:"flex justify-center gap-4 items-center px-5 ",children:O.map((function(e){return l.jsx(k,{formik:_e,name:"isNaksha",label:e.label,value:e.value},e.value)}))}),l.jsxs("div",{className:"grid grid-cols-1 gap-2 items-center mt-4",children:["yes"===_e.values.isNaksha&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{children:[l.jsx("h1",{className:"text-sm font-semibold text-gray-900"}),l.jsx("div",{className:"flex justify-center items-center",children:l.jsx("h1",{className:"text-sm font-semibold text-red-900 text-center mb-3 w-52",children:null==_e||null===(oe=_e.values)||void 0===oe?void 0:oe.message})})]}),l.jsx("div",{children:l.jsx(N,{label:"Constructed Area(In Sqft) :",type:"number",formik:_e,name:"areaOfPlot",placeholder:"Constructed Area (In Sqft)",onBlur:function(){var e,t,n,r;(null==_e||null===(e=_e.values)||void 0===e?void 0:e.areaOfPlot)<(null==we||null===(t=we.data)||void 0===t?void 0:t.builtup_area)?_e.setFieldValue("message","100% Taxation will be applied on ".concat((null==we||null===(n=we.data)||void 0===n?void 0:n.builtup_area)-(null==_e||null===(r=_e.values)||void 0===r?void 0:r.areaOfPlot)," sqft constructed area !")):_e.setFieldValue("message","")}})})]}),l.jsx("div",{children:l.jsx(_,{label:"comment",formik:_e,name:"comment",placeholder:"Comment"})})]}),l.jsxs("div",{className:"flex justify-center mt-4 gap-5",children:[(null==ke||null===(se=ke.data)||void 0===se||null===(se=se.data)||void 0===se||null===(se=se.permissions)||void 0===se?void 0:se.can_backward)&&l.jsx(p.Button,{onClick:Se,size:"sm",className:"bg-red-500 text-white",children:l.jsx("small",{children:"Back To Agency Engineer"})}),(null==ke||null===(ce=ke.data)||void 0===ce||null===(ce=ce.data)||void 0===ce||null===(ce=ce.permissions)||void 0===ce?void 0:ce.can_forward)&&l.jsx(p.Button,{type:"submit",size:"sm",className:"bg-blue-500 text-white",children:l.jsx("small",{children:"Forward"})})]})]})]})]})]})}));var O=[{label:"Yes",value:"yes"},{label:"No",value:"no"}]}}}))}();
