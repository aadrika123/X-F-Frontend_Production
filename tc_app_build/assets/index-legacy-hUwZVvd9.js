!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,i,l,o=[],s=!0,d=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(o.push(n.value),o.length!==e);s=!0);}catch(t){d=!0,a=t}finally{try{if(!s&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(d)throw a}}return o}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return r};var e,r={},a=Object.prototype,i=a.hasOwnProperty,l=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",d=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(e){u=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),o=new P(n||[]);return l(i,"_invoke",{value:O(t,r,o)}),i}function m(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var v="suspendedStart",f="suspendedYield",x="executing",y="completed",g={};function p(){}function j(){}function b(){}var N={};u(N,s,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(z([])));_&&_!==a&&i.call(_,s)&&(N=_);var L=b.prototype=p.prototype=Object.create(N);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(e,r){function n(a,l,o,s){var d=m(e[a],e,l);if("throw"!==d.type){var c=d.arg,u=c.value;return u&&"object"==t(u)&&i.call(u,"__await")?r.resolve(u.__await).then((function(t){n("next",t,o,s)}),(function(t){n("throw",t,o,s)})):r.resolve(u).then((function(t){c.value=t,o(c)}),(function(t){return n("throw",t,o,s)}))}s(d.arg)}var a;l(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,a){n(t,e,r,a)}))}return a=a?a.then(i,i):i()}})}function O(t,r,n){var a=v;return function(i,l){if(a===x)throw new Error("Generator is already running");if(a===y){if("throw"===i)throw l;return{value:e,done:!0}}for(n.method=i,n.arg=l;;){var o=n.delegate;if(o){var s=A(o,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===v)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=x;var d=m(t,r,n);if("normal"===d.type){if(a=n.done?y:f,d.arg===g)continue;return{value:d.arg,done:n.done}}"throw"===d.type&&(a=y,n.method="throw",n.arg=d.arg)}}}function A(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,A(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=m(a,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var l=i.arg;return l?l.done?(r[t.resultName]=l.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):l:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function z(r){if(r||""===r){var n=r[s];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var a=-1,l=function t(){for(;++a<r.length;)if(i.call(r,a))return t.value=r[a],t.done=!1,t;return t.value=e,t.done=!0,t};return l.next=l}}throw new TypeError(t(r)+" is not iterable")}return j.prototype=b,l(L,"constructor",{value:b,configurable:!0}),l(b,"constructor",{value:j,configurable:!0}),j.displayName=u(b,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},k(E.prototype),u(E.prototype,d,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,a,i){void 0===i&&(i=Promise);var l=new E(h(t,e,n,a),i);return r.isGeneratorFunction(e)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},k(L),u(L,c,"Generator"),u(L,s,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=z,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,a){return o.type="throw",o.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a],o=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var s=i.call(l,"catchLoc"),d=i.call(l,"finallyLoc");if(s&&d){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(s){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var l=a?a.completion:{};return l.type=t,l.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(l)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;C(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:z(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},r}function a(t,e,r,n,a,i,l){try{var o=t[i](l),s=o.value}catch(d){return void r(d)}o.done?e(s):Promise.resolve(s).then(n,a)}System.register(["./index-legacy-dE0Ku1ex.js","./router-legacy-rigPOyFI.js","./tailwind-legacy-e6PAgAmt.js","./index-legacy-qmYWmiQy.js","./module-legacy-UtZhFhTp.js","./formik.esm-legacy-LafwCeEO.js","./index.esm-legacy-5u-Ffckd.js","./FormProvider-legacy-aExv1QNE.js","./TextField-legacy-rlNEYOgK.js","./index-legacy-vtVAGFCF.js","./reactQuery-legacy-jKPiMKrc.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-ELZmKVKq.js","./headlessui-legacy-Yu0VJXN1.js"],(function(t,r){"use strict";var i,l,o,s,d,c,u,h,m,v,f,x,y,g,p;return{setters:[function(t){i=t.b,l=t.w,o=t.Q,s=t.j,d=t.a,c=t.f},function(t){u=t.d,h=t.h},function(t){m=t.r},function(t){v=t.P},null,function(t){f=t.u},function(t){x=t.c,y=t.a},function(t){g=t.F},function(t){p=t.T},null,null,null,null,null,null],execute:function(){t("default",(function(){var t,r,n,a,i,o,f,x,y,g,p,b,N,w,_,L=e(u.useState(!1),2),k=L[0],E=L[1],O=h().id,A=d({api:l.waterGetDetails,config:{applicationId:O},options:{enabled:!!O}});if(null!=A&&A.isLoading)return s.jsx(c,{});return s.jsxs(v,{title:"Consumer Details",children:[s.jsx(j,{open:k,setOpen:E,wtrDetail:A}),s.jsxs("div",{className:"p-4",children:[s.jsxs(m.Card,{className:"w-full",children:[s.jsxs("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:[s.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"}),s.jsx("div",{children:s.jsx(m.Button,{size:"sm",onClick:function(){return E(!0)},children:"Edit"})})]}),s.jsx(m.CardBody,{children:s.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Property No :"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm  text-gray-900",children:(null==A||null===(t=A.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.folio_no)||"--"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Consumer No :"})}),s.jsx("div",{className:"text-sm  text-gray-900",children:null==A||null===(r=A.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.consumer_no}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Tap Size:"})}),s.jsx("div",{className:"text-sm  text-gray-900",children:(null==A||null===(n=A.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.tab_size)||"--"}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Cycle :"})}),s.jsx("div",{className:"text-sm  text-gray-900",children:s.jsx("h1",{className:"text-sm  text-gray-900",children:(null==A||null===(a=A.data)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.cycle)||"--"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Category :"})}),s.jsx("div",{className:"text-sm  text-gray-900",children:s.jsx("h1",{className:"text-sm  text-gray-900",children:(null==A||null===(i=A.data)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.category)||"--"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Property Type :"})}),s.jsx("div",{className:"text-sm  text-gray-900",children:s.jsx("h1",{className:"text-sm  text-gray-900",children:null==A||null===(o=A.data)||void 0===o||null===(o=o.data)||void 0===o?void 0:o.property_type})})]})})]}),s.jsx("div",{className:"my-3 border-b-2"}),s.jsxs(m.Card,{className:"w-full",children:[s.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:s.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Property Address & Details"})}),s.jsx(m.CardBody,{children:s.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Address :"})}),s.jsx("div",{className:"w-42 ",children:s.jsx("h1",{className:"text-sm  text-gray-900 truncate",children:(null==A||null===(f=A.data)||void 0===f||null===(f=f.data)||void 0===f?void 0:f.address)||"--"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"zone:"})}),s.jsx("div",{className:"text-sm  text-gray-900",children:(null==A||null===(x=A.data)||void 0===x||null===(x=x.data)||void 0===x?void 0:x.zone_name)||"--"}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Ward No:"})}),s.jsx("div",{className:"text-sm  text-gray-900",children:(null==A||null===(y=A.data)||void 0===y||null===(y=y.data)||void 0===y?void 0:y.ward_number)||"--"}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Cycle :"})}),s.jsx("div",{className:"text-sm  text-gray-900",children:s.jsx("h1",{className:"text-sm  text-gray-900",children:(null==A||null===(g=A.data)||void 0===g||null===(g=g.data)||void 0===g?void 0:g.cycle)||"--"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Land Mark :"})}),s.jsx("div",{className:"w-44 text-sm  text-gray-900",children:s.jsx("h1",{className:"text-sm  text-gray-900 truncate",children:(null==A||null===(p=A.data)||void 0===p||null===(p=p.data)||void 0===p?void 0:p.landmark)||"--"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Property Type :"})}),s.jsx("div",{className:"text-sm  text-gray-900",children:s.jsx("h1",{className:"text-sm  text-gray-900",children:null==A||null===(b=A.data)||void 0===b||null===(b=b.data)||void 0===b?void 0:b.property_type})})]})})]}),s.jsx("div",{className:"my-3 border-b-2"}),s.jsxs(m.Card,{className:"w-full",children:[s.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:s.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner Details"})}),s.jsx(m.CardBody,{children:s.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Owner Name :"})}),s.jsx("div",{className:"w-42 ",children:s.jsx("h1",{className:"text-sm  text-gray-900 truncate",children:(null==A||null===(N=A.data)||void 0===N||null===(N=N.data)||void 0===N?void 0:N.applicant_name)||"--"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Mobile No:"})}),s.jsx("div",{className:"text-sm  text-gray-900",children:(null==A||null===(w=A.data)||void 0===w||null===(w=w.data)||void 0===w?void 0:w.mobile_no)||"--"}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Email:"})}),s.jsx("div",{className:"text-sm  text-gray-900",children:(null==A||null===(_=A.data)||void 0===_||null===(_=_.data)||void 0===_?void 0:_.email)||"--"})]})})]})]})]})}));var r=x().shape({mobile_no:y().required("Mobile No is required").min(10).max(10)});function j(t){var e,d,c,u,h,v,x,y,j,b,N,w,_,L,k=t.open,E=t.setOpen,O=t.wtrDetail,A=function(){return E(!k)},S=i({}),C=f({enableReinitialize:!0,initialValues:{consumerId:null==O||null===(e=O.data)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.id,property_no:(null==O||null===(d=O.data)||void 0===d||null===(d=d.data)||void 0===d?void 0:d.folio_no)||"N/A",consumer_no:(null==O||null===(c=O.data)||void 0===c||null===(c=c.data)||void 0===c?void 0:c.consumer_no)||"N/A",applicant_name:(null==O||null===(u=O.data)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.applicant_name)||"N/A",guardian_name:(null==O||null===(h=O.data)||void 0===h||null===(h=h.data)||void 0===h?void 0:h.guardian_name)||"N/A",mobile_no:(null==O||null===(v=O.data)||void 0===v||null===(v=v.data)||void 0===v?void 0:v.mobile_no)||"N/A",email:(null==O||null===(x=O.data)||void 0===x||null===(x=x.data)||void 0===x?void 0:x.email)||"N/A",dtc_code:(null==O||null===(y=O.data)||void 0===y||null===(y=y.data)||void 0===y?void 0:y.dtc_code)||"N/A",zoneId:(null==O||null===(j=O.data)||void 0===j||null===(j=j.data)||void 0===j?void 0:j.zone_mstr_id)||"N/A",address:(null==O||null===(b=O.data)||void 0===b||null===(b=b.data)||void 0===b?void 0:b.address)||"N/A",landmark:(null==O||null===(N=O.data)||void 0===N||null===(N=N.data)||void 0===N?void 0:N.landmark)||"N/A",wardId:(null==O||null===(w=O.data)||void 0===w||null===(w=w.data)||void 0===w?void 0:w.ward_mstr_id)||0},validationSchema:r,onSubmit:(_=n().mark((function t(e){var r,a,i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.mutateAsync({api:null===(r=l)||void 0===r?void 0:r.updateWaterDetails,data:e});case 3:a=t.sent,null!=(i=a.data)&&i.status&&(o.success(null==i?void 0:i.message),null==O||O.refetch(),A()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),o.error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})),L=function(){var t=this,e=arguments;return new Promise((function(r,n){var i=_.apply(t,e);function l(t){a(i,r,n,l,o,"next",t)}function o(t){a(i,r,n,l,o,"throw",t)}l(void 0)}))},function(t){return L.apply(this,arguments)})});return s.jsxs(g,{formik:C,children:[k&&s.jsx("div",{onClick:A,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),s.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(k?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:s.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:s.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[s.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[s.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Update Details"}),s.jsxs("button",{onClick:A,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[s.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:s.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),s.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),s.jsxs("div",{className:"p-4 md:p-5",children:[s.jsx("div",{className:"grid grid-cols-1 gap-4",children:s.jsx("div",{children:s.jsx(p,{type:"text",name:"mobile_no",label:"Mobile No",formik:C,placeholder:"Enter Mobile No",maxLength:10})})}),s.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[s.jsx(m.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:A,className:"mr-1 bg-gray-300",children:s.jsx("span",{children:"Cancel"})}),s.jsx(m.Button,{type:"submit",size:"sm",loading:S.isLoading,disabled:S.isLoading,children:s.jsx("span",{children:"Update"})})]})]})]})})})]})}}}}))}();
