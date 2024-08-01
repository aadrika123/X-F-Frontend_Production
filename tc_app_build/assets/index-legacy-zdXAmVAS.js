!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(r){d=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof j?e:j,o=Object.create(i.prototype),s=new I(n||[]);return a(o,"_invoke",{value:O(t,r,s)}),o}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var m="suspendedStart",y="suspendedYield",p="executing",x="completed",v={};function j(){}function g(){}function b(){}var N={};d(N,l,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(C([])));L&&L!==i&&o.call(L,l)&&(N=L);var S=b.prototype=j.prototype=Object.create(N);function E(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function _(e,r){function n(i,a,s,l){var c=f(e[i],e,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==t(d)&&o.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,s,l)}),(function(t){n("throw",t,s,l)})):r.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,l)}))}l(c.arg)}var i;a(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,i){n(t,e,r,i)}))}return i=i?i.then(o,o):o()}})}function O(t,e,n){var i=m;return function(o,a){if(i===p)throw new Error("Generator is already running");if(i===x){if("throw"===o)throw a;return{value:r,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var l=A(s,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===m)throw i=x,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=p;var c=f(t,e,n);if("normal"===c.type){if(i=n.done?x:y,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=x,n.method="throw",n.arg=c.arg)}}}function A(t,e){var n=e.method,i=t.iterator[n];if(i===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,A(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=f(i,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[l];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function t(){for(;++i<e.length;)if(o.call(e,i))return t.value=e[i],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return g.prototype=b,a(S,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:g,configurable:!0}),g.displayName=d(b,u,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,d(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},E(_.prototype),d(_.prototype,c,(function(){return this})),n.AsyncIterator=_,n.async=function(t,e,r,i,o){void 0===o&&(o=Promise);var a=new _(h(t,e,r,i),o);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(S),d(S,u,"Generator"),d(S,l,(function(){return this})),d(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=C,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,i){return s.type="throw",s.arg=t,e.next=n,i&&(e.method="next",e.arg=r),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},n}function r(t,e,r,n,i,o,a){try{var s=t[o](a),l=s.value}catch(c){return void r(c)}s.done?e(l):Promise.resolve(l).then(n,i)}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o,a,s=[],l=!0,c=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(s.push(n.value),s.length!==e);l=!0);}catch(t){c=!0,i=t}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy-zVv7LN3D.js","./router-legacy-d7mQ5O4E.js","./formik.esm-legacy--WzrQHeF.js","./FormProvider-legacy-9vZABNQN.js","./TextField-legacy-Q_HGJiNI.js","./SelectField-legacy-R3wULV_i.js","./index-legacy-eoh2ESgH.js","./tailwind-legacy-wJ_Ag7Dp.js","./index-legacy-CDybzcQc.js","./index-legacy-qcVxUhim.js","./reactQuery-legacy-CGVy-x5i.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-5CyayZ_y.js","./headlessui-legacy-yLFhCrEc.js","./customInputValidation-legacy-1dLT3o3X.js","./ArrowRightIcon-legacy-lOGvRqu-.js"],(function(t,i){"use strict";var o,a,s,l,c,u,d,h,f,m,y,p;return{setters:[function(t){o=t.b,a=t.c,s=t.f,l=t.j},function(t){c=t.d},function(t){u=t.u},function(t){d=t.F},function(t){h=t.T},function(t){f=t.S},null,function(t){m=t.r},function(t){y=t.P},function(t){p=t.S},null,null,null,null,null,null],execute:function(){t("default",(function(){var t,i,x,v,j,g=o(),b=n(c.useState({fromDate:"",uptoDate:"",wardId:"",userId:null==g||null===(t=g.user)||void 0===t?void 0:t.id,zoneId:"",paymentMode:"",page:1,perPage:10}),2),N=b[0],w=b[1],L=u({enableReinitialize:!0,initialValues:N,onSubmit:(E=e().mark((function t(r,n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.setSubmitting,w(r);case 2:case"end":return t.stop()}}),t)})),_=function(){var t=this,e=arguments;return new Promise((function(n,i){var o=E.apply(t,e);function a(t){r(o,n,i,a,s,"next",t)}function s(t){r(o,n,i,a,s,"throw",t)}a(void 0)}))},function(t,e){return _.apply(this,arguments)})}),S=a({api:s.waterTcCollection,config:N,value:[null==N?void 0:N.fromDate,null==N?void 0:N.uptoDate,null==N?void 0:N.wardId,null==N?void 0:N.userId,null==N?void 0:N.zoneId,null==N?void 0:N.paymentMode,null==N?void 0:N.page,null==N?void 0:N.perPage],options:{enabled:!(null==N||!N.fromDate)}});var E,_;return l.jsx(y,{title:"Collection Report",children:l.jsx("div",{className:"p-4",children:l.jsxs(d,{formik:L,children:[l.jsxs(m.Card,{children:[l.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:l.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Collection Report"})}),l.jsxs(m.CardBody,{children:[l.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"From Date :"})}),l.jsx("div",{children:l.jsx(h,{formik:L,type:"date",name:"fromDate",placeholder:"From Date"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Upto Date :"})}),l.jsx("div",{children:l.jsx(h,{formik:L,type:"date",name:"uptoDate",placeholder:"Upto Date"})}),l.jsx("div",{children:l.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Payment Mode :"})}),l.jsx("div",{children:l.jsxs(f,{name:"paymentMode",placeholder:"Payment Mode",formik:L,children:[l.jsx("option",{value:"",children:"All"}),l.jsx("option",{value:"CASH",children:"Cash"}),l.jsx("option",{value:"CHEQUE",children:"Cheque"}),l.jsx("option",{value:"ONLINE",children:"Online"})]})})]}),l.jsx("div",{className:"flex justify-center mt-5",children:l.jsx(m.Button,{color:"blue",size:"sm",ripple:!0,type:"submit",disabled:L.isSubmitting,onClick:L.handleSubmit,children:"Search"})})]})]}),null!=S&&S.isLoading?l.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"Loading..."}):l.jsx(l.Fragment,{children:l.jsxs("div",{className:"py-2 mt-6",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("h1",{className:"font-semibold text-sm",children:"Collection Report"}),l.jsxs("h1",{className:"font-semibold text-sm text-green-700",children:["Total Amount: ",null==S||null===(i=S.data)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.totalAmount]})]}),l.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),l.jsx("div",{children:(null==S||null===(x=S.data)||void 0===x||null===(x=x.data)||void 0===x||null===(x=x.data)||void 0===x?void 0:x.length)>0?l.jsxs(l.Fragment,{children:[null==S||null===(v=S.data)||void 0===v||null===(v=v.data)||void 0===v||null===(v=v.data)||void 0===v?void 0:v.map((function(t,e){return l.jsx(m.Card,{className:"mt-2 full",children:l.jsx(m.CardBody,{children:l.jsx("div",{className:"flex justify-between items-center",children:l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[l.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name :"}),l.jsx("h1",{className:"text-sm w-48 truncate",children:null==t?void 0:t.applicant_name})]}),l.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[l.jsxs("h1",{className:"text-sm font-semibold",children:["SAF No :"," "]}),l.jsx("h1",{className:"text-sm truncate w-40",children:(null==t?void 0:t.saf_no)||"--"})]}),l.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[l.jsxs("h1",{className:"text-sm font-semibold",children:["Property No :"," "]}),l.jsx("h1",{className:"text-sm",children:null==t?void 0:t.property_no})]}),l.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[l.jsxs("h1",{className:"text-sm font-semibold",children:["Ward No :"," "]}),l.jsx("h1",{className:"text-sm",children:null==t?void 0:t.ward_no})]}),l.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[l.jsx("h1",{className:"text-sm font-semibold",children:"Zone:"}),l.jsx("h1",{className:"text-sm",children:(null==t?void 0:t.zone_name)||"--"})]}),l.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[l.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),l.jsx("h1",{className:"text-sm w-48 truncate",children:(null==t?void 0:t.address)||"--"})]}),l.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[l.jsxs("h1",{className:"text-sm font-semibold",children:["Mobile No :"," "]}),l.jsx("h1",{className:"text-sm truncate w-40",children:null==t?void 0:t.mobile_no})]}),l.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[l.jsxs("h1",{className:"text-sm font-semibold",children:["Tran No :"," "]}),l.jsx("h1",{className:"text-sm",children:null==t?void 0:t.tran_no})]}),l.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[l.jsxs("h1",{className:"text-sm font-semibold",children:["Tran Date:"," "]}),l.jsx("h1",{className:"text-sm",children:null==t?void 0:t.tran_date})]}),l.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[l.jsxs("h1",{className:"text-sm font-semibold",children:["Mode:"," "]}),l.jsx("h1",{className:"text-sm",children:null==t?void 0:t.transaction_mode})]}),l.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[l.jsxs("h1",{className:"text-sm font-semibold",children:["Amount:"," "]}),l.jsx("h1",{className:"text-sm",children:null==t?void 0:t.amount})]}),l.jsxs("div",{className:"flex justify-start items-center gap-2 mb-1",children:[l.jsxs("h1",{className:"text-sm font-semibold",children:["Collector Name:"," "]}),l.jsx("h1",{className:"text-sm",children:null==t?void 0:t.emp_name})]})]})})})},e)})),l.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),l.jsx(p,{active:N,noOfPage:null==S||null===(j=S.data)||void 0===j||null===(j=j.data)||void 0===j?void 0:j.last_page,setActive:w})]}):l.jsx("h1",{className:"mt-24 font-semibold text-sm text-center",children:"No Data Found"})})]})})]})})})}))}}}))}();
