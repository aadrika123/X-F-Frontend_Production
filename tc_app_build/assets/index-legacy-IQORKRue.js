!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,i,s=[],o=!0,d=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;o=!1}else for(;!(o=(n=l.call(r)).done)&&(s.push(n.value),s.length!==t);o=!0);}catch(e){d=!0,a=e}finally{try{if(!o&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(d)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return r};var t,r={},a=Object.prototype,l=a.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},o=s.iterator||"@@iterator",d=s.asyncIterator||"@@asyncIterator",c=s.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(t){u=function(e,t,r){return e[t]=r}}function x(e,t,r,n){var a=t&&t.prototype instanceof g?t:g,l=Object.create(a.prototype),s=new D(n||[]);return i(l,"_invoke",{value:E(e,r,s)}),l}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=x;var m="suspendedStart",v="suspendedYield",f="executing",y="completed",p={};function g(){}function j(){}function b(){}var N={};u(N,o,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(I([])));_&&_!==a&&l.call(_,o)&&(N=_);var k=b.prototype=g.prototype=Object.create(N);function C(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(t,r){function n(a,i,s,o){var d=h(t[a],t,i);if("throw"!==d.type){var c=d.arg,u=c.value;return u&&"object"==e(u)&&l.call(u,"__await")?r.resolve(u.__await).then((function(e){n("next",e,s,o)}),(function(e){n("throw",e,s,o)})):r.resolve(u).then((function(e){c.value=e,s(c)}),(function(e){return n("throw",e,s,o)}))}o(d.arg)}var a;i(this,"_invoke",{value:function(e,t){function l(){return new r((function(r,a){n(e,t,r,a)}))}return a=a?a.then(l,l):l()}})}function E(e,r,n){var a=m;return function(l,i){if(a===f)throw new Error("Generator is already running");if(a===y){if("throw"===l)throw i;return{value:t,done:!0}}for(n.method=l,n.arg=i;;){var s=n.delegate;if(s){var o=O(s,n);if(o){if(o===p)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===m)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=f;var d=h(e,r,n);if("normal"===d.type){if(a=n.done?y:v,d.arg===p)continue;return{value:d.arg,done:n.done}}"throw"===d.type&&(a=y,n.method="throw",n.arg=d.arg)}}}function O(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var l=h(a,e.iterator,r.arg);if("throw"===l.type)return r.method="throw",r.arg=l.arg,r.delegate=null,p;var i=l.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function I(r){if(r||""===r){var n=r[o];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var a=-1,i=function e(){for(;++a<r.length;)if(l.call(r,a))return e.value=r[a],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(e(r)+" is not iterable")}return j.prototype=b,i(k,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:j,configurable:!0}),j.displayName=u(b,c,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},r.awrap=function(e){return{__await:e}},C(L.prototype),u(L.prototype,d,(function(){return this})),r.AsyncIterator=L,r.async=function(e,t,n,a,l){void 0===l&&(l=Promise);var i=new L(x(e,t,n,a),l);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},C(k),u(k,c,"Generator"),u(k,o,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=I,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&l.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var o=l.call(i,"catchLoc"),d=l.call(i,"finallyLoc");if(o&&d){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},r}function a(e,t,r,n,a,l,i){try{var s=e[l](i),o=s.value}catch(d){return void r(d)}s.done?t(o):Promise.resolve(o).then(n,a)}System.register(["./index-legacy-e5jDIJ7v.js","./router-legacy-kOAqN8oI.js","./tailwind-legacy-Cj8YFuLD.js","./index-legacy-JBeNDdiK.js","./module-legacy-xZ9KfaFL.js","./formik.esm-legacy-XdfQijo5.js","./index.esm-legacy-d1HI7OdW.js","./FormProvider-legacy-_hPrE_So.js","./TextField-legacy-c49Cp5fy.js","./TranslateField-legacy--lpTz8hS.js","./moment-legacy-tjrIIMAh.js","./MyPDFViewer-legacy-RD-f8f8y.js","./reactQuery-legacy-GzPKeAE1.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-xgqmug7p.js","./headlessui-legacy-7mFRxZdX.js","./customInputValidation-legacy-09WHxC9F.js","./index-legacy-a1BxB_Or.js","./reactPdfViewerCore-legacy-yNNMdws2.js","./reactPdfViewerDefaultLayout-legacy-3UopyIeK.js"],(function(e,r){"use strict";var l,i,s,o,d,c,u,x,h,m,v,f,y,p,g,j,b,N;return{setters:[function(e){l=e.d,i=e.f,s=e.Q,o=e.j,d=e.b,c=e.I},function(e){u=e.d,x=e.e,h=e.u},function(e){m=e.r},function(e){v=e.P},null,function(e){f=e.u},function(e){y=e.c,p=e.a},function(e){g=e.F},function(e){j=e.T},null,function(e){b=e.h},function(e){N=e.M},null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){var e=t(u.useState("consumer"),2),r=e[0],n=e[1],a=t(u.useState(!1),2),l=a[0],s=a[1],x=h().id,m=d({api:i.waterGetDetails,config:{applicationId:x},options:{enabled:!!x}});if(null!=m&&m.isLoading)return o.jsx(c,{});return o.jsxs(v,{title:"Consumer Details",children:[o.jsx(w,{open:l,setOpen:s,wtrDetail:m}),o.jsx("div",{className:"p-4",children:o.jsxs("div",{className:"flex justify-center items-center gap-2",children:[o.jsx("button",{onClick:function(){return n("consumer")},className:" rounded-md font-bold text-xs px-3 py-2 ".concat("consumer"===r?"bg-blue-gray-400":"bg-blue-gray-200"),children:"Consumer Details"}),o.jsx("button",{onClick:function(){return n("meter")},className:" rounded-md font-bold text-xs px-3 py-2 ".concat("meter"===r?"bg-blue-gray-400":"bg-blue-gray-200"),children:"Meter Details"})]})}),{consumer:o.jsx(_,{wtrDetail:m,setOpen:s,open:l}),meter:o.jsx(C,{wtrDetail:m,setOpen:s,open:l,id:x})}[r]]})}));var r=y().shape({mobileNo:p().required("Mobile No is required").min(10).max(10)});function w(e){var t,d,c,u,x,h,v,y,p,b,N,w,_,k,C,L=e.open,E=e.setOpen,O=e.wtrDetail,A=function(){return E(!L)},S=l({}),D=f({enableReinitialize:!0,initialValues:{consumerId:null==O||null===(t=O.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.id,property_no:(null==O||null===(d=O.data)||void 0===d||null===(d=d.data)||void 0===d?void 0:d.folio_no)||"N/A",consumer_no:(null==O||null===(c=O.data)||void 0===c||null===(c=c.data)||void 0===c?void 0:c.consumer_no)||"N/A",applicant_name:(null==O||null===(u=O.data)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.applicant_name)||"N/A",guardian_name:(null==O||null===(x=O.data)||void 0===x||null===(x=x.data)||void 0===x?void 0:x.guardian_name)||"N/A",mobileNo:(null==O||null===(h=O.data)||void 0===h||null===(h=h.data)||void 0===h?void 0:h.mobile_no)||"N/A",email:(null==O||null===(v=O.data)||void 0===v||null===(v=v.data)||void 0===v?void 0:v.email)||"N/A",dtc_code:(null==O||null===(y=O.data)||void 0===y||null===(y=y.data)||void 0===y?void 0:y.dtc_code)||"N/A",zoneId:(null==O||null===(p=O.data)||void 0===p||null===(p=p.data)||void 0===p?void 0:p.zone_mstr_id)||"N/A",address:(null==O||null===(b=O.data)||void 0===b||null===(b=b.data)||void 0===b?void 0:b.address)||"N/A",landmark:(null==O||null===(N=O.data)||void 0===N||null===(N=N.data)||void 0===N?void 0:N.landmark)||"N/A",wardId:(null==O||null===(w=O.data)||void 0===w||null===(w=w.data)||void 0===w?void 0:w.ward_mstr_id)||0,ownerId:(null==O||null===(_=O.data)||void 0===_||null===(_=_.data)||void 0===_?void 0:_.ownerId)||""},validationSchema:r,onSubmit:(k=n().mark((function e(t){var r,a,l;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.mutateAsync({api:null===(r=i)||void 0===r?void 0:r.updateMobileApi,data:t});case 3:a=e.sent,null!=(l=a.data)&&l.status&&(s.success(null==l?void 0:l.message),null==O||O.refetch(),A()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),C=function(){var e=this,t=arguments;return new Promise((function(r,n){var l=k.apply(e,t);function i(e){a(l,r,n,i,s,"next",e)}function s(e){a(l,r,n,i,s,"throw",e)}i(void 0)}))},function(e){return C.apply(this,arguments)})});return o.jsxs(g,{formik:D,children:[L&&o.jsx("div",{onClick:A,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),o.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(L?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:o.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:o.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[o.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[o.jsx("h3",{className:"text-sm font-semibold text-gray-900 dark:text-white",children:"Update Details"}),o.jsxs("button",{onClick:A,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[o.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:o.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),o.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),o.jsxs("div",{className:"p-4 md:p-5",children:[o.jsx("div",{className:"grid grid-cols-1 gap-4",children:o.jsx("div",{children:o.jsx(j,{inputValidation:["mobile","number"],name:"mobileNo",label:"Mobile No",formik:D,placeholder:"Enter Mobile No"})})}),o.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[o.jsx(m.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:A,className:"mr-1 bg-gray-300",children:o.jsx("span",{children:"Cancel"})}),o.jsx(m.Button,{type:"submit",size:"sm",loading:S.isLoading,disabled:S.isLoading,children:o.jsx("span",{children:"Update"})})]})]})]})})})]})}function _(e){var t,r,n,a,l,i,s,d,c,u,x,h,v,f,y,p=e.wtrDetail,g=e.setOpen;e.open;return o.jsxs("div",{className:"p-4",children:[o.jsxs(m.Card,{className:"w-full",children:[o.jsxs("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:[o.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Basic Details"}),o.jsx("div",{children:o.jsx(m.Button,{size:"sm",onClick:function(){return g(!0)},children:o.jsx("small",{children:"Edit Mobile No"})})})]}),o.jsx(m.CardBody,{children:o.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Property No :"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs  text-gray-900",children:(null==p||null===(t=p.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.folio_no)||"--"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Consumer No :"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:null==p||null===(r=p.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.consumer_no}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Tap Size:"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:(null==p||null===(n=p.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.tab_size)||"--"}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Cycle :"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:o.jsx("h1",{className:"text-xs  text-gray-900",children:(null==p||null===(a=p.data)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.cycle)||"--"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Category :"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:o.jsx("h1",{className:"text-xs  text-gray-900",children:(null==p||null===(l=p.data)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.category)||"--"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Property Type :"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:o.jsx("h1",{className:"text-xs  text-gray-900",children:null==p||null===(i=p.data)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.property_type})})]})})]}),o.jsx("div",{className:"my-3 border-b-2"}),o.jsxs(m.Card,{className:"w-full",children:[o.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:o.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Property Address & Details"})}),o.jsx(m.CardBody,{children:o.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Address :"})}),o.jsx("div",{className:"w-42 ",children:o.jsx("h1",{className:"text-xs  text-gray-900 truncate",children:(null==p||null===(s=p.data)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.address)||"--"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"zone:"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:(null==p||null===(d=p.data)||void 0===d||null===(d=d.data)||void 0===d?void 0:d.zone_name)||"--"}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Ward No:"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:(null==p||null===(c=p.data)||void 0===c||null===(c=c.data)||void 0===c?void 0:c.ward_number)||"--"}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Cycle :"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:o.jsx("h1",{className:"text-xs  text-gray-900",children:(null==p||null===(u=p.data)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.cycle)||"--"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Land Mark :"})}),o.jsx("div",{className:"w-44 text-xs  text-gray-900",children:o.jsx("h1",{className:"text-xs  text-gray-900 truncate",children:(null==p||null===(x=p.data)||void 0===x||null===(x=x.data)||void 0===x?void 0:x.landmark)||"--"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Property Type :"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:o.jsx("h1",{className:"text-xs  text-gray-900",children:null==p||null===(h=p.data)||void 0===h||null===(h=h.data)||void 0===h?void 0:h.property_type})})]})})]}),o.jsx("div",{className:"my-3 border-b-2"}),o.jsxs(m.Card,{className:"w-full",children:[o.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:o.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Owner Details"})}),o.jsx(m.CardBody,{children:o.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Owner Name :"})}),o.jsx("div",{className:"w-42 ",children:o.jsx("h1",{className:"text-xs  text-gray-900 truncate",children:(null==p||null===(v=p.data)||void 0===v||null===(v=v.data)||void 0===v?void 0:v.applicant_name)||"--"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Mobile No:"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:(null==p||null===(f=p.data)||void 0===f||null===(f=f.data)||void 0===f?void 0:f.mobile_no)||"--"}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Email:"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:(null==p||null===(y=p.data)||void 0===y||null===(y=y.data)||void 0===y?void 0:y.email)||"--"})]})})]})]})}function k(e){var t=e.open,r=e.setOpen,n=e.url,a=e.ext,l=e.title,i=function(){return r(!t)};return o.jsxs(o.Fragment,{children:[t&&o.jsx("div",{onClick:i,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),o.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(t?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:o.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full ",children:o.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px]",children:[o.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-600",children:[o.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:l}),o.jsxs("button",{onClick:i,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[o.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:o.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),o.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),"pdf"===a?o.jsx(N,{fileUrl:n}):o.jsx("img",{src:n,alt:"Document",className:"w-full h-full",loading:"lazy"}),o.jsx("div",{className:"p-4 md:p-5",children:o.jsx("div",{className:"flex items-center justify-end mt-4 gap-5",children:o.jsx(m.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:i,className:"mr-1 bg-gray-300",children:o.jsx("span",{children:"Close"})})})})]})})})]})}function C(e){var r,n,a,l,s,c,h,v=e.wtrDetail,f=(e.setOpen,e.open,e.id),y=t(u.useState(!1),2),p=y[0],g=y[1],j=t(u.useState(""),2),N=j[0],w=j[1],_=t(u.useState(""),2),C=_[0],L=_[1],E=x(),O=d({api:i.meterList,config:{consumerId:f},options:{enabled:!!f}});return o.jsxs("div",{className:"p-4",children:[o.jsx(k,{open:p,setOpen:g,ext:N,url:C,title:"Meter Document"}),o.jsxs(m.Card,{className:"w-full",children:[o.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:o.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Basic Details"})}),o.jsx(m.CardBody,{children:o.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Consumer name :"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:null==v||null===(r=v.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.applicant_name}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Consumer No :"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:null==v||null===(n=v.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.consumer_no}),1==(null==v||null===(a=v.data)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.connection_type)&&o.jsxs(o.Fragment,{children:[o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Meter Reading:"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:o.jsx("h1",{className:"text-xs  text-gray-900",children:(null==v||null===(l=v.data)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.meter_reading)||"--"})})]}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Connection Type:"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:o.jsx("h1",{className:"text-xs  text-gray-900",children:1==(null==v||null===(s=v.data)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.connection_type)?"Meter":"Fixed"})}),o.jsx("div",{children:o.jsx("h1",{className:"text-xs font-semibold text-gray-900",children:"Apply Date :"})}),o.jsx("div",{className:"text-xs  text-gray-900",children:o.jsx("h1",{className:"text-xs  text-gray-900",children:(null==v||null===(c=v.data)||void 0===c||null===(c=c.data)||void 0===c?void 0:c.application_apply_date)||"--"})})]})})]}),o.jsx("div",{className:"my-3 border-b-2"}),o.jsxs(m.Card,{className:"w-full",children:[o.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:o.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Consumer meter list"})}),o.jsx(m.CardBody,{children:o.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:o.jsxs("table",{className:"w-full text-xs text-left  border-slate-400 border",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"# Sno."}),o.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"CONNECTION TYPE"}),o.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"METER NO"}),o.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"INITIAL METER READING"}),o.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"METER CONNECTION DATE"}),o.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Document"})]})}),o.jsx("tbody",{children:null==O||null===(h=O.data)||void 0===h||null===(h=h.data)||void 0===h?void 0:h.map((function(e,t){return o.jsxs("tr",{children:[o.jsx("td",{className:"text-xs p-4 border border-slate-300",children:t+1}),o.jsx("td",{className:"text-xs p-4 border border-slate-300",children:null==e?void 0:e.meter_connection_type}),o.jsx("td",{className:"text-xs p-4 border border-slate-300",children:""!=(null==e?void 0:e.meter_no)?null==e?void 0:e.meter_no:"--"}),o.jsx("td",{className:"text-xs p-4 border border-slate-300",children:""!=(null==e?void 0:e.initial_reading)?null==e?void 0:e.initial_reading:"--"}),o.jsx("td",{className:"text-xs p-4 border border-slate-300",children:""!=(null==e?void 0:e.connection_date)?b(null==e?void 0:e.connection_date).format("DD-MM-YYYY"):"--"}),o.jsx("td",{className:"text-xs p-4 border border-slate-300",children:o.jsx("button",{className:"text-blue-500",onClick:function(){var t;w(null==e||null===(t=e.doc_path)||void 0===t||null===(t=t.split("."))||void 0===t?void 0:t.pop()),L(null==e?void 0:e.doc_path),g(!0)},children:"View"})})]},t)}))})]})})})]}),o.jsx("div",{className:"my-3 border-b-2"}),o.jsx("div",{className:"flex justify-center",children:o.jsx(m.Button,{color:"blue",size:"sm",onClick:function(){return E("/amc-app/water/update-meters/".concat(f))},children:"Update Connection Type"})})]})}}}}))}();
