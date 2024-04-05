!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},a=Object.prototype,o=a.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},s=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",c=l.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(n){d=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var a=t&&t.prototype instanceof x?t:x,o=Object.create(a.prototype),l=new C(r||[]);return i(o,"_invoke",{value:E(e,n,l)}),o}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var p="suspendedStart",m="suspendedYield",v="executing",y="completed",g={};function x(){}function w(){}function b(){}var j={};d(j,s,(function(){return this}));var N=Object.getPrototypeOf,L=N&&N(N(F([])));L&&L!==a&&o.call(L,s)&&(j=L);var k=b.prototype=x.prototype=Object.create(j);function S(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function _(t,n){function r(a,i,l,s){var u=h(t[a],t,i);if("throw"!==u.type){var c=u.arg,d=c.value;return d&&"object"==e(d)&&o.call(d,"__await")?n.resolve(d.__await).then((function(e){r("next",e,l,s)}),(function(e){r("throw",e,l,s)})):n.resolve(d).then((function(e){c.value=e,l(c)}),(function(e){return r("throw",e,l,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(e,t){function o(){return new n((function(n,a){r(e,t,n,a)}))}return a=a?a.then(o,o):o()}})}function E(e,t,r){var a=p;return function(o,i){if(a===v)throw new Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:n,done:!0}}for(r.method=o,r.arg=i;;){var l=r.delegate;if(l){var s=O(l,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===p)throw a=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=v;var u=h(e,t,r);if("normal"===u.type){if(a=r.done?y:m,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a=y,r.method="throw",r.arg=u.arg)}}}function O(e,t){var r=t.method,a=e.iterator[r];if(a===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,O(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var o=h(a,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,g;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,g):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function F(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(o.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return w.prototype=b,i(k,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:w,configurable:!0}),w.displayName=d(b,c,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,d(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},r.awrap=function(e){return{__await:e}},S(_.prototype),d(_.prototype,u,(function(){return this})),r.AsyncIterator=_,r.async=function(e,t,n,a,o){void 0===o&&(o=Promise);var i=new _(f(e,t,n,a),o);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(k),d(k,c,"Generator"),d(k,s,(function(){return this})),d(k,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=F,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(M),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,a){return l.type="throw",l.arg=e,t.next=r,a&&(t.method="next",t.arg=n),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],l=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;M(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:F(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),g}},r}function n(e,t,n,r,a,o,i){try{var l=e[o](i),s=l.value}catch(u){return void n(u)}l.done?t(s):Promise.resolve(s).then(r,a)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function l(e){n(i,a,o,l,s,"next",e)}function s(e){n(i,a,o,l,s,"throw",e)}l(void 0)}))}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-R4QqfF9d.js","./router-legacy-rigPOyFI.js","./formik.esm-legacy-LafwCeEO.js","./index.esm-legacy-5u-Ffckd.js","./FormProvider-legacy-lbo4CCyt.js","./TextAreaField-legacy-blURcULp.js","./index-legacy-vtVAGFCF.js","./tailwind-legacy-e6PAgAmt.js","./index-legacy-UtAP110M.js","./resizeImage-legacy-fEEQRwC3.js","./OverLayLoader-legacy-RIKbkBfr.js","./MyPDFViewer-legacy-2q4uBXJP.js","./reactQuery-legacy-jKPiMKrc.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-ELZmKVKq.js","./headlessui-legacy-Yu0VJXN1.js","./customInputValidation-legacy-1dLT3o3X.js","./module-legacy-desjtOYq.js","./reactPdfViewerCore-legacy-7F0U6H_8.js","./reactPdfViewerDefaultLayout-legacy-34JnA3iy.js"],(function(e,n){"use strict";var o,i,l,s,u,c,d,f,h,p,m,v,y,g,x,w,b,j,N,L,k,S;return{setters:[function(e){o=e.b,i=e.a,l=e.p,s=e.g,u=e.S,c=e.Q,d=e.j,f=e.f},function(e){h=e.u,p=e.d,m=e.h},function(e){v=e.u},function(e){y=e.c,g=e.f,x=e.a},function(e){w=e.F},function(e){b=e.T},null,function(e){j=e.r},function(e){N=e.P},function(e){L=e.r},function(e){k=e.O},function(e){S=e.M},null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){var e,n,_,E,O,A,M,C,F,I,P,T,B,D,G=h(),z=o({}),V=a(p.useState(""),2),R=V[0],U=V[1],Y=a(p.useState(""),2),q=Y[0],Q=Y[1],$=m().id,K=i({api:l.staticSafDetail,config:{applicationId:$},value:[$],options:{enabled:!!$}}),X=i({api:null===(e=s)||void 0===e?void 0:e.workFlowInfo,config:{workflowId:null==K||null===(n=K.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.workflow_id},value:[null==K||null===(_=K.data)||void 0===_||null===(_=_.data)||void 0===_?void 0:_.workflow_id],options:{enabled:!(null==K||null===(E=K.data)||void 0===E||null===(E=E.data)||void 0===E||!E.workflow_id)}}),Z=v({initialValues:{uploadMeasurement:"",comment:""},validationSchema:y({uploadMeasurement:g().required("Measurement Sheet is required").test("fileSize","Max 10 mb file size",(function(e){return(null==e?void 0:e.size)<=1e7})),comment:x().label("Comment").min(2).max(500)}),onSubmit:(ee=r(t().mark((function e(n){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.fire({title:"Are you sure?",text:"\n       You are going to forward the application to the next level.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((function(e){e.isConfirmed&&H(n)})).catch((function(e){var t;c.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 1:case"end":return e.stop()}}),e)}))),function(e){return ee.apply(this,arguments)})}),H=function(){var e=r(t().mark((function e(n){var r,a,o,i,s,u,d,f,h;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("applicationId",$),r.append("document",null==n?void 0:n.uploadMeasurement),e.prev=3,e.next=6,z.mutateAsync({api:l.uploadMeasurementSheetApi,data:r});case 6:if(null==(o=e.sent)||null===(a=o.data)||void 0===a||!a.status){e.next=14;break}return e.next=10,z.mutateAsync({api:l.safLevel,data:{applicationId:$,receiverRoleId1:"",action:"forward",comment:(null==n?void 0:n.comment)||"OK"}});case 10:null!=(s=e.sent)&&null!==(i=s.data)&&void 0!==i&&i.status?(c.success(null==s||null===(u=s.data)||void 0===u?void 0:u.message),G("/amc-app/property/saf-verification-list",{replace:!0})):c.error(null==s||null===(d=s.data)||void 0===d?void 0:d.message),e.next=15;break;case 14:c.error(null==o||null===(f=o.data)||void 0===f?void 0:f.message);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),c.error(null===e.t0||void 0===e.t0||null===(h=e.t0.data)||void 0===h?void 0:h.message);case 20:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=r(t().mark((function e(){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=(null==Z||null===(n=Z.values)||void 0===n?void 0:n.comment)){e.next=2;break}return e.abrupt("return",c.error("Comment is required !"));case 2:u.fire({title:"Are you sure?",text:"You are going to backward of this application",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(function(){var e=r(t().mark((function e(n){var r,a,o,i,s;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConfirmed){e.next=11;break}return e.prev=1,e.next=4,z.mutateAsync({api:l.safLevel,data:{applicationId:$,receiverRoleId1:"",action:"backward",comment:(null==Z||null===(r=Z.values)||void 0===r?void 0:r.comment)||"No Comment"}});case 4:null!=(o=e.sent)&&null!==(a=o.data)&&void 0!==a&&a.status?(c.success(null==o||null===(i=o.data)||void 0===i?void 0:i.message),G("/amc-app/property/saf-verification-list",{replace:!0})):c.error((null==o||null===(s=o.data)||void 0===s?void 0:s.message)||"Something went wrong, Please try again"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c.error(null===e.t0||void 0===e.t0?void 0:e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var t;c.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=r(t().mark((function e(n){var r,a,o,i,l,s,u;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("application/pdf"!==(null==(r=n.target.files[0])?void 0:r.type)){e.next=8;break}(a=new FileReader).onload=function(e){U(e.target.result),Q(r.name.split(".").pop())},a.readAsDataURL(r),Z.setFieldValue("uploadMeasurement",r),e.next=16;break;case 8:return e.next=10,L(null==n||null===(o=n.target)||void 0===o?void 0:o.files[0]);case 10:l=e.sent,s=new File([l],null==n||null===(i=n.target)||void 0===i||null===(i=i.files[0])||void 0===i?void 0:i.name,{type:"image/*"}),(u=new FileReader).onload=function(e){U(e.target.result),Q(s.name.split(".").pop())},u.readAsDataURL(s),Z.setFieldValue("uploadMeasurement",s);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var ee;if(null!=K&&K.isLoading)return d.jsx(f,{});return d.jsxs(N,{title:"Measurement",children:[z.isLoading&&d.jsx(k,{}),d.jsx(w,{formik:Z,children:d.jsxs("div",{className:"p-4 ",children:[d.jsx(j.Card,{className:"w-full",children:d.jsxs(j.CardBody,{children:[d.jsx("div",{className:"flex justify-between items-center",children:d.jsx("h1",{className:"font-semibold",children:"Measurement Sheet"})}),d.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),d.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-3",children:[d.jsx("h1",{className:"font-semibold text-sm",children:"Application No : "}),d.jsx("h1",{className:"text-sm",children:null==K||null===(O=K.data)||void 0===O||null===(O=O.data)||void 0===O?void 0:O.saf_no}),d.jsx("h1",{className:"font-semibold text-sm",children:"Application Type : "}),d.jsx("h1",{className:"text-sm",children:null==K||null===(A=K.data)||void 0===A||null===(A=A.data)||void 0===A?void 0:A.assessment_type}),d.jsx("h1",{className:"font-semibold text-sm",children:"Apply Date : "}),d.jsx("h1",{className:"text-sm",children:null==K||null===(M=K.data)||void 0===M||null===(M=M.data)||void 0===M?void 0:M.application_date}),d.jsx("h1",{className:"font-semibold text-sm",children:"Owner Name : "}),d.jsx("h1",{className:"text-sm",children:null==K||null===(C=K.data)||void 0===C||null===(C=C.data)||void 0===C?void 0:C.applicant_name}),d.jsx("h1",{className:"font-semibold text-sm",children:"Mobile No : "}),d.jsx("h1",{className:"text-sm w-40 truncate",children:null==K||null===(F=K.data)||void 0===F||null===(F=F.data)||void 0===F||null===(F=F.owners)||void 0===F||null===(F=F.map((function(e){return null==e?void 0:e.mobile_no})))||void 0===F?void 0:F.join(", ")})]})]})}),d.jsx("div",{className:"my-4 border-b-2"}),d.jsxs(j.Card,{className:"w-full",children:[d.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:d.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Upload Measurement Sheet"})}),R&&("pdf"===q?d.jsx(S,{fileUrl:R}):d.jsx("div",{className:"flex justify-center px-4 py-2",children:d.jsx("img",{src:R,alt:"preview",loading:"lazy"})})),d.jsx(j.CardBody,{children:d.jsxs("div",{className:"grid grid-cols-1 justify-center gap-5",children:[d.jsxs("div",{children:[d.jsx("div",{className:"mb-1",children:d.jsx("h1",{className:"font-semibold text-xs",children:"Upload Measurement Sheet"})}),d.jsx("input",{type:"file",accept:"application/pdf, image/*",name:"uploadMeasurement",onChange:W,className:"border border-gray-300 p-2 w-full rounded-lg"}),d.jsx("small",{className:"text-red-500",children:(null==Z||null===(I=Z.errors)||void 0===I?void 0:I.uploadMeasurement)&&(null==Z||null===(P=Z.touched)||void 0===P?void 0:P.uploadMeasurement)&&(null==Z||null===(T=Z.errors)||void 0===T?void 0:T.uploadMeasurement)})]}),d.jsx("div",{children:d.jsx(b,{label:"Comment",name:"comment",formik:Z,placeholder:"Comment"})})]})})]}),d.jsx("div",{className:"my-4 border-b-2"}),d.jsx("div",{className:"flex justify-center",children:d.jsxs("div",{className:"flex justify-center items-center mt-4 gap-3",children:[(null==X||null===(B=X.data)||void 0===B||null===(B=B.data)||void 0===B||null===(B=B.permissions)||void 0===B?void 0:B.can_backward)&&d.jsx(j.Button,{onClick:J,size:"sm",className:"bg-red-500 text-white",children:d.jsx("small",{children:"Back To Back Office"})}),(null==X||null===(D=X.data)||void 0===D||null===(D=D.data)||void 0===D||null===(D=D.permissions)||void 0===D?void 0:D.can_forward)&&d.jsx(j.Button,{type:"submit",size:"sm",className:"bg-blue-500 text-white",children:d.jsx("small",{children:"Forward"})})]})})]})})]})}))}}}))}();
