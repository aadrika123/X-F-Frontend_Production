!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},a=Object.prototype,i=a.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(n){d=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var a=t&&t.prototype instanceof g?t:g,i=Object.create(a.prototype),o=new I(r||[]);return l(i,"_invoke",{value:_(e,n,o)}),i}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var v="suspendedStart",m="suspendedYield",h="executing",y="completed",x={};function g(){}function b(){}function j(){}var w={};d(w,s,(function(){return this}));var N=Object.getPrototypeOf,k=N&&N(N(R([])));k&&k!==a&&i.call(k,s)&&(w=k);var A=j.prototype=g.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function S(t,n){function r(a,l,o,s){var u=p(t[a],t,l);if("throw"!==u.type){var c=u.arg,d=c.value;return d&&"object"==e(d)&&i.call(d,"__await")?n.resolve(d.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):n.resolve(d).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(u.arg)}var a;l(this,"_invoke",{value:function(e,t){function i(){return new n((function(n,a){r(e,t,n,a)}))}return a=a?a.then(i,i):i()}})}function _(e,t,r){var a=v;return function(i,l){if(a===h)throw new Error("Generator is already running");if(a===y){if("throw"===i)throw l;return{value:n,done:!0}}for(r.method=i,r.arg=l;;){var o=r.delegate;if(o){var s=T(o,r);if(s){if(s===x)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===v)throw a=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=h;var u=p(e,t,r);if("normal"===u.type){if(a=r.done?y:m,u.arg===x)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a=y,r.method="throw",r.arg=u.arg)}}}function T(e,t){var r=t.method,a=e.iterator[r];if(a===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,T(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),x;var i=p(a,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,x;var l=i.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,x):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,x)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function R(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,l=function e(){for(;++a<t.length;)if(i.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=n,e.done=!0,e};return l.next=l}}throw new TypeError(e(t)+" is not iterable")}return b.prototype=j,l(A,"constructor",{value:j,configurable:!0}),l(j,"constructor",{value:b,configurable:!0}),b.displayName=d(j,c,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,d(e,c,"GeneratorFunction")),e.prototype=Object.create(A),e},r.awrap=function(e){return{__await:e}},L(S.prototype),d(S.prototype,u,(function(){return this})),r.AsyncIterator=S,r.async=function(e,t,n,a,i){void 0===i&&(i=Promise);var l=new S(f(e,t,n,a),i);return r.isGeneratorFunction(t)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},L(A),d(A,c,"Generator"),d(A,s,(function(){return this})),d(A,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=R,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,a){return o.type="throw",o.arg=e,t.next=r,a&&(t.method="next",t.arg=n),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var s=i.call(l,"catchLoc"),u=i.call(l,"finallyLoc");if(s&&u){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(s){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var l=a?a.completion:{};return l.type=e,l.arg=t,a?(this.method="next",this.next=a.finallyLoc,x):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),x},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),x}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:R(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),x}},r}function n(e,t,n,r,a,i,l){try{var o=e[i](l),s=o.value}catch(u){return void n(u)}o.done?t(s):Promise.resolve(s).then(r,a)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var l=e.apply(t,r);function o(e){n(l,a,i,o,s,"next",e)}function s(e){n(l,a,i,o,s,"throw",e)}o(void 0)}))}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,l,o=[],s=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-TrrKniVl.js","./router-legacy-_t8Mc_yw.js","./formik.esm-legacy-L7X0greu.js","./index.esm-legacy-sahDnNe5.js","./FormProvider-legacy-VIQupVfj.js","./TextAreaField-legacy-TjPCGz0k.js","./index-legacy-GzbAK-b2.js","./tailwind-legacy-Afc9ICbc.js","./index-legacy-AZFdrbjc.js","./resizeImage-legacy-C_Dz4coE.js","./OverLayLoader-legacy-ozwnr9PC.js","./MyPDFViewer-legacy-_J4TDFCN.js","./reactQuery-legacy-820C8VGY.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-v-aafSOk.js","./headlessui-legacy-MZogm2kK.js","./customInputValidation-legacy-09WHxC9F.js","./module-legacy-YJrPmo5n.js","./index-legacy-a1BxB_Or.js","./reactPdfViewerCore-legacy-2_nwZhw6.js","./reactPdfViewerDefaultLayout-legacy-8cR2wjni.js"],(function(e,n){"use strict";var i,l,o,s,u,c,d,f,p,v,m,h,y,x,g,b,j,w,N,k,A,L;return{setters:[function(e){i=e.d,l=e.c,o=e.p,s=e.w,u=e.S,c=e.Q,d=e.j,f=e.I},function(e){p=e.d,v=e.u,m=e.e},function(e){h=e.u},function(e){y=e.c,x=e.d,g=e.a},function(e){b=e.F},function(e){j=e.T},null,function(e){w=e.r},function(e){N=e.P},function(e){k=e.r},function(e){A=e.O},function(e){L=e.M},null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){var e,n,S,_,T,C,E,I,R,F,D,O,P,M,B,V,z,U,G,K,Y,q,Q,J,$,H,W,X=a(p.useState(""),2),Z=X[0],ee=X[1],te=v(),ne=i({}),re=a(p.useState(""),2),ae=re[0],ie=re[1],le=a(p.useState(""),2),oe=le[0],se=le[1],ue=a(p.useState(""),2),ce=ue[0],de=ue[1],fe=a(p.useState(""),2),pe=(fe[0],fe[1]),ve=m().id,me=l({api:o.staticSafDetail,config:{applicationId:ve},value:[ve],options:{enabled:!!ve}}),he=l({api:o.staticSafDetailForVerification,config:{applicationId:ve},value:[ve],options:{enabled:!!ve}}),ye=l({api:null===(e=s)||void 0===e?void 0:e.workFlowInfo,config:{workflowId:null==me||null===(n=me.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.workflow_id},value:[null==me||null===(S=me.data)||void 0===S||null===(S=S.data)||void 0===S?void 0:S.workflow_id],options:{enabled:!(null==me||null===(_=me.data)||void 0===_||null===(_=_.data)||void 0===_||!_.workflow_id)}}),xe=function(){var e;return null==he||null===(e=he.data)||void 0===e||null===(e=e.data)||void 0===e||null===(e=e.lastTcFloorVerificationData)||void 0===e?void 0:e.reduce((function(e,t){return e+(null==t?void 0:t.rent_amount)}),0)},ge=h({initialValues:{uploadMeasurement:"",comment:"",rentDocCode:"RENT AGREEMENT",rentAgreementDocument:null,rentDocCategory:"Rent Agreement"},validationSchema:y({uploadMeasurement:"TC"==(null==me||null===(T=me.data)||void 0===T||null===(T=T.data)||void 0===T?void 0:T.applied_by)||"TC Reassesment"==(null==me||null===(C=me.data)||void 0===C||null===(C=C.data)||void 0===C?void 0:C.applied_by)?x().notRequired():x().required("Measurement Sheet is required").test("fileSize","Max 10 mb file size",(function(e){return(null==e?void 0:e.size)<=1e7})),comment:g().label("Comment").min(2).max(500)}),onSubmit:(Le=r(t().mark((function e(n){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.fire({title:"Are you sure?",text:"\n       You are going to forward the application to the ".concat(be()),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((function(e){e.isConfirmed&&je(n)})).catch((function(e){var t;c.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 1:case"end":return e.stop()}}),e)}))),function(e){return Le.apply(this,arguments)})}),be=function(){var e;return"New Assessment1"==(null==he||null===(e=he.data)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.assessment_type)?"ATS"===Z?"ATS":"Nagar Rachna":"LIPIK"===Z?"Lipik":"Nagar Rachna"},je=function(){var e=r(t().mark((function e(n){var r,a,i,l,s,u,d,f,p,v,m,h,y,x,g,b;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae();case 2:if("TC"!=(null==me||null===(r=me.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.applied_by)&&"TC Reassesment"!=(null==me||null===(a=me.data)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.applied_by)){e.next=15;break}return e.prev=3,e.next=6,ne.mutateAsync({api:o.safLevelV2,data:{applicationId:ve,receiverRoleId:(t=void 0,"New Assessment1"==(null==he||null===(t=he.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.assessment_type)?"ATS"===Z?"9":"7":"LIPIK"===Z?"6":"7"),action:"forward",comment:(null==n?void 0:n.comment)||"OK"}});case 6:null!=(l=e.sent)&&null!==(i=l.data)&&void 0!==i&&i.status?(c.success(null==l||null===(s=l.data)||void 0===s?void 0:s.message),te("/amc-app/property/saf-verification-list",{replace:!0})):c.error(null==l||null===(u=l.data)||void 0===u?void 0:u.message),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),c.error(null===e.t0||void 0===e.t0||null===(d=e.t0.data)||void 0===d?void 0:d.message);case 13:e.next=35;break;case 15:return(f=new FormData).append("applicationId",ve),f.append("document",null==n?void 0:n.uploadMeasurement),e.prev=18,e.next=21,ne.mutateAsync({api:o.uploadMeasurementSheetApi,data:f});case 21:if(null==(v=e.sent)||null===(p=v.data)||void 0===p||!p.status){e.next=29;break}return e.next=25,ne.mutateAsync({api:o.safLevelV2,data:{applicationId:ve,receiverRoleId:"ATS"===Z?"9":"7",action:"forward",comment:(null==n?void 0:n.comment)||"OK"}});case 25:null!=(h=e.sent)&&null!==(m=h.data)&&void 0!==m&&m.status?(c.success(null==h||null===(y=h.data)||void 0===y?void 0:y.message),te("/amc-app/property/saf-verification-list",{replace:!0})):c.error(null==h||null===(x=h.data)||void 0===x?void 0:x.message),e.next=30;break;case 29:c.error(null==v||null===(g=v.data)||void 0===g?void 0:g.message);case 30:e.next=35;break;case 32:e.prev=32,e.t1=e.catch(18),c.error(null===e.t1||void 0===e.t1||null===(b=e.t1.data)||void 0===b?void 0:b.message);case 35:case"end":return e.stop()}var t}),e,null,[[3,10],[18,32]])})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=r(t().mark((function e(){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=(null==ge||null===(n=ge.values)||void 0===n?void 0:n.comment)){e.next=2;break}return e.abrupt("return",c.error("Comment is required !"));case 2:u.fire({title:"Are you sure?",text:"You are going to backward of this application",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(function(){var e=r(t().mark((function e(n){var r,a,i,l,s;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConfirmed){e.next=12;break}return e.prev=1,e.next=4,ne.mutateAsync({api:o.safLevel,data:{applicationId:ve,receiverRoleId1:"",action:"backward",comment:(null==ge||null===(r=ge.values)||void 0===r?void 0:r.comment)||"No Comment"}});case 4:null!=(i=e.sent)&&null!==(a=i.data)&&void 0!==a&&a.status?(c.success(null==i||null===(l=i.data)||void 0===l?void 0:l.message),te("/amc-app/property/saf-verification-list",{replace:!0})):c.error((null==i||null===(s=i.data)||void 0===s?void 0:s.message)||"Something went wrong, Please try again"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),c.error(null===e.t0||void 0===e.t0?void 0:e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var t;c.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=r(t().mark((function e(n){var r,a,i,l,o,s,u;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("application/pdf"!==(null==(r=n.target.files[0])?void 0:r.type)){e.next=8;break}(a=new FileReader).onload=function(e){ie(e.target.result),se(r.name.split(".").pop())},a.readAsDataURL(r),ge.setFieldValue("uploadMeasurement",r),e.next=16;break;case 8:return e.next=10,k(null==n||null===(i=n.target)||void 0===i?void 0:i.files[0]);case 10:o=e.sent,s=new File([o],null==n||null===(l=n.target)||void 0===l||null===(l=l.files[0])||void 0===l?void 0:l.name,{type:"image/*"}),(u=new FileReader).onload=function(e){ie(e.target.result),se(s.name.split(".").pop())},u.readAsDataURL(s),ge.setFieldValue("uploadMeasurement",s);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=r(t().mark((function e(n){var r,a,i,l,o,s,u;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("application/pdf"!==(null==(r=n.target.files[0])?void 0:r.type)){e.next=8;break}(a=new FileReader).onload=function(e){de(e.target.result),pe(r.name.split(".").pop())},a.readAsDataURL(r),ge.setFieldValue("rentAgreementDocument",r),e.next=16;break;case 8:return e.next=10,k(null==n||null===(i=n.target)||void 0===i?void 0:i.files[0]);case 10:o=e.sent,s=new File([o],null==n||null===(l=n.target)||void 0===l||null===(l=l.files[0])||void 0===l?void 0:l.name,{type:"image/*"}),(u=new FileReader).onload=function(e){de(e.target.result),pe(s.name.split(".").pop())},u.readAsDataURL(s),ge.setFieldValue("rentAgreementDocument",s);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ae=function(){var e=r(t().mark((function e(n){var r,a,i,l,s,u,d,f;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(xe()>0&&null!=ge&&null!==(r=ge.values)&&void 0!==r&&r.rentAgreementDocument)){e.next=16;break}return(i=new FormData).append("applicationId",ve),i.append("docCode","RENT AGREEMENT"),i.append("docCategory","Rent Agreement"),i.append("document",null==ge||null===(a=ge.values)||void 0===a?void 0:a.rentAgreementDocument),e.prev=6,e.next=9,ne.mutateAsync({api:o.documentUpload,data:i});case 9:null!=(s=e.sent)&&null!==(l=s.data)&&void 0!==l&&l.status?c.success(null==s||null===(u=s.data)||void 0===u?void 0:u.message):c.error(null==s||null===(d=s.data)||void 0===d?void 0:d.message),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),c.error(null===e.t0||void 0===e.t0||null===(f=e.t0.data)||void 0===f?void 0:f.message);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t){return e.apply(this,arguments)}}();var Le;if(null!=me&&me.isLoading)return d.jsx(f,{});return d.jsxs(N,{title:"Measurement",children:[ne.isLoading&&d.jsx(A,{}),d.jsx(b,{formik:ge,children:d.jsxs("div",{className:"p-4 ",children:[d.jsx(w.Card,{className:"w-full",children:d.jsxs(w.CardBody,{children:[d.jsx("div",{className:"flex justify-between items-center",children:d.jsx("h1",{className:"font-semibold text-sm",children:"Application Details"})}),d.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),d.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-3",children:[d.jsx("h1",{className:"font-semibold text-xs",children:"Application No : "}),d.jsx("h1",{className:"text-xs",children:null==me||null===(E=me.data)||void 0===E||null===(E=E.data)||void 0===E?void 0:E.saf_no}),d.jsx("h1",{className:"font-semibold text-xs",children:"Application Type : "}),d.jsx("h1",{className:"text-xs",children:null==me||null===(I=me.data)||void 0===I||null===(I=I.data)||void 0===I?void 0:I.assessment_type}),d.jsx("h1",{className:"font-semibold text-xs",children:"Apply Date : "}),d.jsx("h1",{className:"text-xs",children:null==me||null===(R=me.data)||void 0===R||null===(R=R.data)||void 0===R?void 0:R.application_date}),d.jsx("h1",{className:"font-semibold text-xs",children:"Owner Name : "}),d.jsx("h1",{className:"text-xs",children:null==me||null===(F=me.data)||void 0===F||null===(F=F.data)||void 0===F?void 0:F.applicant_name}),d.jsx("h1",{className:"font-semibold text-xs",children:"Mobile No : "}),d.jsx("h1",{className:"text-xs w-40 truncate",children:null==me||null===(D=me.data)||void 0===D||null===(D=D.data)||void 0===D||null===(D=D.owners)||void 0===D||null===(D=D.map((function(e){return null==e?void 0:e.mobile_no})))||void 0===D?void 0:D.join(", ")})]})]})}),xe()>0&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"my-4 border-b-2"}),d.jsxs(w.Card,{className:"w-full",children:[d.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:d.jsx("h1",{className:"text-xs font-semibold text-gray-100",children:"Rent Agreement"})}),ce&&("pdf"===oe?d.jsx(L,{fileUrl:ce}):d.jsx("div",{className:"flex justify-center px-4 py-2",children:d.jsx("img",{src:ce,alt:"preview",loading:"lazy"})})),d.jsx(w.CardBody,{children:d.jsx("div",{className:"grid grid-cols-1 justify-center gap-5",children:"TC"!=(null==me||null===(O=me.data)||void 0===O||null===(O=O.data)||void 0===O?void 0:O.applied_by)&&"TC Reassesment"!=(null==me||null===(P=me.data)||void 0===P||null===(P=P.data)||void 0===P?void 0:P.applied_by)&&d.jsxs("div",{children:[d.jsx("div",{className:"mb-1",children:d.jsx("h1",{className:"font-semibold text-xs",children:"Upload Rent Agreement"})}),d.jsx("input",{type:"file",accept:"application/pdf, image/*",name:"rentAgreementDocument",onChange:ke,className:"border border-gray-300 p-2 w-full rounded-lg"}),d.jsx("small",{className:"text-red-500",children:(null==ge||null===(M=ge.errors)||void 0===M?void 0:M.rentAgreementDocument)&&(null==ge||null===(B=ge.touched)||void 0===B?void 0:B.rentAgreementDocument)&&(null==ge||null===(V=ge.errors)||void 0===V?void 0:V.rentAgreementDocument)})]})})})]}),d.jsx("div",{className:"my-4 border-b-2"})]}),d.jsx("div",{className:"my-4 border-b-2"}),d.jsxs(w.Card,{className:"w-full",children:[d.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:d.jsx("h1",{className:"text-xs font-semibold text-gray-100",children:"TC"==(null==me||null===(z=me.data)||void 0===z||null===(z=z.data)||void 0===z?void 0:z.applied_by)||"TC Reassesment"==(null==me||null===(U=me.data)||void 0===U||null===(U=U.data)||void 0===U?void 0:U.applied_by)?"Comment":"Upload Measurement Sheet"})}),ae&&("pdf"===oe?d.jsx(L,{fileUrl:ae}):d.jsx("div",{className:"flex justify-center px-4 py-2",children:d.jsx("img",{src:ae,alt:"preview",loading:"lazy"})})),d.jsx(w.CardBody,{children:d.jsxs("div",{className:"grid grid-cols-1 justify-center gap-5",children:["TC"!=(null==me||null===(G=me.data)||void 0===G||null===(G=G.data)||void 0===G?void 0:G.applied_by)&&"TC Reassesment"!=(null==me||null===(K=me.data)||void 0===K||null===(K=K.data)||void 0===K?void 0:K.applied_by)&&d.jsxs("div",{children:[d.jsx("div",{className:"mb-1",children:d.jsx("h1",{className:"font-semibold text-xs",children:"Upload Measurement Sheet"})}),d.jsx("input",{type:"file",accept:"application/pdf, image/*",name:"uploadMeasurement",onChange:Ne,className:"border border-gray-300 p-2 w-full rounded-lg"}),d.jsx("small",{className:"text-red-500",children:(null==ge||null===(Y=ge.errors)||void 0===Y?void 0:Y.uploadMeasurement)&&(null==ge||null===(q=ge.touched)||void 0===q?void 0:q.uploadMeasurement)&&(null==ge||null===(Q=ge.errors)||void 0===Q?void 0:Q.uploadMeasurement)})]}),d.jsx("div",{children:d.jsx(j,{label:"Comment",name:"comment",formik:ge,placeholder:"Comment"})})]})})]}),d.jsx("div",{className:"my-4 border-b-2"}),d.jsx("div",{className:"flex justify-center",children:d.jsxs("div",{className:"justify-center items-center mt-4 gap-3",children:["New Assessment1"==(null==he||null===(J=he.data)||void 0===J||null===(J=J.data)||void 0===J?void 0:J.assessment_type)?d.jsx("div",{className:"flex justify-center items-center",children:d.jsx(w.Button,{onClick:we,size:"sm",className:"bg-red-500 text-white",children:d.jsx("small",{children:"Back To Lipik"})})}):d.jsx("div",{className:"flex justify-center items-center",children:d.jsx(w.Button,{onClick:we,size:"sm",className:"bg-red-500 text-white",children:d.jsx("small",{children:"Back To Back Office"})})}),(null==ye||null===($=ye.data)||void 0===$||null===($=$.data)||void 0===$||null===($=$.permissions)||void 0===$?void 0:$.can_forward)&&("New Assessment1"==(null==he||null===(H=he.data)||void 0===H||null===(H=H.data)||void 0===H?void 0:H.assessment_type)?d.jsxs("div",{className:"flex justify-center items-center gap-2 mt-4",children:["4"==(null==he||null===(W=he.data)||void 0===W||null===(W=W.data)||void 0===W||null===(W=W.lastTcVerificationData)||void 0===W?void 0:W.prop_type_id)&&d.jsx(w.Button,{type:"submit",onClick:function(){return ee("ATS")},size:"sm",className:"bg-blue-500 text-white",children:d.jsx("small",{children:"Send To ATS"})}),d.jsx(w.Button,{type:"submit",size:"sm",onClick:function(){return ee("SR_LIPIK")},className:"bg-green-500 text-white",children:d.jsx("small",{children:"Send To Nagar Rachna"})})]}):d.jsxs("div",{className:"flex justify-center items-center gap-2 mt-4",children:[d.jsx(w.Button,{type:"submit",onClick:function(){return ee("LIPIK")},size:"sm",className:"bg-blue-500 text-white",children:d.jsx("small",{children:"Send To Lipik"})}),d.jsx(w.Button,{type:"submit",size:"sm",onClick:function(){return ee("SR_LIPIK")},className:"bg-green-500 text-white",children:d.jsx("small",{children:"Send To Nagar Rachna"})})]}))]})})]})})]})}))}}}))}();
