!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return a};var n,a={},r=Object.prototype,l=r.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",d=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(n){c=function(e,t,n){return e[t]=n}}function v(e,t,n,a){var r=t&&t.prototype instanceof x?t:x,l=Object.create(r.prototype),o=new E(a||[]);return i(l,"_invoke",{value:k(e,n,o)}),l}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}a.wrap=v;var f="suspendedStart",m="suspendedYield",h="executing",y="completed",g={};function x(){}function b(){}function w(){}var j={};c(j,s,(function(){return this}));var N=Object.getPrototypeOf,_=N&&N(N(O([])));_&&_!==r&&l.call(_,s)&&(j=_);var A=w.prototype=x.prototype=Object.create(j);function T(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(t,n){function a(r,i,o,s){var u=p(t[r],t,i);if("throw"!==u.type){var d=u.arg,c=d.value;return c&&"object"==e(c)&&l.call(c,"__await")?n.resolve(c.__await).then((function(e){a("next",e,o,s)}),(function(e){a("throw",e,o,s)})):n.resolve(c).then((function(e){d.value=e,o(d)}),(function(e){return a("throw",e,o,s)}))}s(u.arg)}var r;i(this,"_invoke",{value:function(e,t){function l(){return new n((function(n,r){a(e,t,n,r)}))}return r=r?r.then(l,l):l()}})}function k(e,t,a){var r=f;return function(l,i){if(r===h)throw new Error("Generator is already running");if(r===y){if("throw"===l)throw i;return{value:n,done:!0}}for(a.method=l,a.arg=i;;){var o=a.delegate;if(o){var s=L(o,a);if(s){if(s===g)continue;return s}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(r===f)throw r=y,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r=h;var u=p(e,t,a);if("normal"===u.type){if(r=a.done?y:m,u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(r=y,a.method="throw",a.arg=u.arg)}}}function L(e,t){var a=t.method,r=e.iterator[a];if(r===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=n,L(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),g;var l=p(r,e.iterator,t.arg);if("throw"===l.type)return t.method="throw",t.arg=l.arg,t.delegate=null,g;var i=l.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,g):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function O(t){if(t||""===t){var a=t[s];if(a)return a.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(l.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return b.prototype=w,i(A,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:b,configurable:!0}),b.displayName=c(w,d,"GeneratorFunction"),a.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,c(e,d,"GeneratorFunction")),e.prototype=Object.create(A),e},a.awrap=function(e){return{__await:e}},T(S.prototype),c(S.prototype,u,(function(){return this})),a.AsyncIterator=S,a.async=function(e,t,n,r,l){void 0===l&&(l=Promise);var i=new S(v(e,t,n,r),l);return a.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},T(A),c(A,d,"Generator"),c(A,s,(function(){return this})),c(A,"toString",(function(){return"[object Generator]"})),a.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},a.values=O,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(R),!e)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=n),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=l.call(i,"catchLoc"),u=l.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&l.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=e,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),R(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;R(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:O(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=n),g}},a}function n(e,t,n,a,r,l,i){try{var o=e[l](i),s=o.value}catch(u){return void n(u)}o.done?t(s):Promise.resolve(s).then(a,r)}function a(e){return function(){var t=this,a=arguments;return new Promise((function(r,l){var i=e.apply(t,a);function o(e){n(i,r,l,o,s,"next",e)}function s(e){n(i,r,l,o,s,"throw",e)}o(void 0)}))}}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l,i,o=[],s=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(a=l.call(n)).done)&&(o.push(a.value),o.length!==t);s=!0);}catch(e){u=!0,r=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw r}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}System.register(["./index-legacy-NZJbOf30.js","./router-legacy-_t8Mc_yw.js","./formik.esm-legacy-L7X0greu.js","./index.esm-legacy-sahDnNe5.js","./FormProvider-legacy-fvjItCnM.js","./TextAreaField-legacy-Izs-qpTi.js","./TranslateField-legacy-xsHeShSG.js","./tailwind-legacy-Afc9ICbc.js","./index-legacy-I5h53JIb.js","./resizeImage-legacy-1tNDC-Fo.js","./OverLayLoader-legacy-L321BdWy.js","./MyPDFViewer-legacy-qEAmihzV.js","./reactQuery-legacy-820C8VGY.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-v-aafSOk.js","./headlessui-legacy-MZogm2kK.js","./customInputValidation-legacy-09WHxC9F.js","./module-legacy-kXSTpHJ0.js","./index-legacy-a1BxB_Or.js","./reactPdfViewerCore-legacy-2_nwZhw6.js","./reactPdfViewerDefaultLayout-legacy-8cR2wjni.js"],(function(e,n){"use strict";var l,i,o,s,u,d,c,v,p,f,m,h,y,g,x,b,w,j,N,_,A,T;return{setters:[function(e){l=e.d,i=e.c,o=e.p,s=e.w,u=e.S,d=e.Q,c=e.j,v=e.I},function(e){p=e.d,f=e.u,m=e.e},function(e){h=e.u},function(e){y=e.c,g=e.d,x=e.a},function(e){b=e.F},function(e){w=e.T},null,function(e){j=e.r},function(e){N=e.P},function(e){_=e.r},function(e){A=e.O},function(e){T=e.M},null,null,null,null,null,null,null,null,null],execute:function(){e("default",(function(){var e,n,S,k,L,C,R,E,O,D,F,I,M,B,P,V,z,U,G,K,W,Y,q,Q,J,$,H=r(p.useState(""),2),X=H[0],Z=H[1];p.useState(""),p.useState("");var ee=f(),te=l({}),ne=r(p.useState(""),2),ae=ne[0],re=ne[1],le=r(p.useState(""),2),ie=le[0],oe=le[1],se=r(p.useState(""),2),ue=se[0],de=se[1],ce=r(p.useState(""),2),ve=(ce[0],ce[1]),pe=m().id,fe=i({api:o.staticSafDetail,config:{applicationId:pe},value:[pe],options:{enabled:!!pe}}),me=i({api:o.staticSafDetailForVerification,config:{applicationId:pe},value:[pe],options:{enabled:!!pe}}),he=i({api:null===(e=s)||void 0===e?void 0:e.workFlowInfo,config:{workflowId:null==fe||null===(n=fe.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.workflow_id},value:[null==fe||null===(S=fe.data)||void 0===S||null===(S=S.data)||void 0===S?void 0:S.workflow_id],options:{enabled:!(null==fe||null===(k=fe.data)||void 0===k||null===(k=k.data)||void 0===k||!k.workflow_id)}}),ye=function(){var e;return null==me||null===(e=me.data)||void 0===e||null===(e=e.data)||void 0===e||null===(e=e.lastTcFloorVerificationData)||void 0===e?void 0:e.reduce((function(e,t){return e+(null==t?void 0:t.rent_amount)}),0)},ge=h({initialValues:{uploadMeasurement:"",comment:"",rentDocCode:"RENT AGREEMENT",rentAgreementDocument:null,rentDocCategory:"Rent Agreement"},validationSchema:y({uploadMeasurement:"TC"==(null==fe||null===(L=fe.data)||void 0===L||null===(L=L.data)||void 0===L?void 0:L.applied_by)||"TC Reassesment"==(null==fe||null===(C=fe.data)||void 0===C||null===(C=C.data)||void 0===C?void 0:C.applied_by)?g().notRequired():g().required("Measurement Sheet is required").test("fileSize","Max 10 mb file size",(function(e){return(null==e?void 0:e.size)<=1e7})),comment:x().label("Comment").min(2).max(500)}),onSubmit:(Te=a(t().mark((function e(n){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.fire({title:"Are you sure?",text:"\n       You are going to forward the application to the ".concat(be()),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((function(e){e.isConfirmed&&we(n)})).catch((function(e){var t;d.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 1:case"end":return e.stop()}}),e)}))),function(e){return Te.apply(this,arguments)})}),xe=function(){var e,t,n,a,r,l,i,o,s,u;return"New Assessment"==(null==me||null===(e=me.data)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.assessment_type)&&"2"==(null==me||null===(t=me.data)||void 0===t||null===(t=t.data)||void 0===t||null===(t=t.lastTcVerificationData)||void 0===t?void 0:t.prop_type_id)||"New Assessment"==(null==me||null===(n=me.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.assessment_type)&&"3"==(null==me||null===(a=me.data)||void 0===a||null===(a=a.data)||void 0===a||null===(a=a.lastTcVerificationData)||void 0===a?void 0:a.prop_type_id)?"7":"New Assessment"==(null==me||null===(r=me.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.assessment_type)&&"4"==(null==me||null===(l=me.data)||void 0===l||null===(l=l.data)||void 0===l||null===(l=l.lastTcVerificationData)||void 0===l?void 0:l.prop_type_id)?"9":"Reassessment"==(null==me||null===(i=me.data)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.assessment_type)||"Bifurcation"==(null==me||null===(o=me.data)||void 0===o||null===(o=o.data)||void 0===o?void 0:o.assessment_type)||"Amalgamation"==(null==me||null===(s=me.data)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.assessment_type)||"Mutation"==(null==me||null===(u=me.data)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.assessment_type)?"ATS"==X?"9":"7":"NO WORKFLOW"},be=function(){var e,t,n,a,r,l,i,o,s,u;return"New Assessment"==(null==me||null===(e=me.data)||void 0===e||null===(e=e.data)||void 0===e?void 0:e.assessment_type)&&"2"==(null==me||null===(t=me.data)||void 0===t||null===(t=t.data)||void 0===t||null===(t=t.lastTcVerificationData)||void 0===t?void 0:t.prop_type_id)||"New Assessment"==(null==me||null===(n=me.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.assessment_type)&&"3"==(null==me||null===(a=me.data)||void 0===a||null===(a=a.data)||void 0===a||null===(a=a.lastTcVerificationData)||void 0===a?void 0:a.prop_type_id)?"Nagar Rachna":"New Assessment"==(null==me||null===(r=me.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.assessment_type)&&"4"==(null==me||null===(l=me.data)||void 0===l||null===(l=l.data)||void 0===l||null===(l=l.lastTcVerificationData)||void 0===l?void 0:l.prop_type_id)?"ATS":"Reassessment"==(null==me||null===(i=me.data)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.assessment_type)||"Bifurcation"==(null==me||null===(o=me.data)||void 0===o||null===(o=o.data)||void 0===o?void 0:o.assessment_type)||"Amalgamation"==(null==me||null===(s=me.data)||void 0===s||null===(s=s.data)||void 0===s?void 0:s.assessment_type)||"Mutation"==(null==me||null===(u=me.data)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.assessment_type)?"ATS"==X?"ATS":"Nagar Rachna":"NO WORKFLOW"},we=function(){var e=a(t().mark((function e(n){var a,r,l,i,s,u,c,v,p,f,m,h,y,g,x,b;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("NO WORKFLOW"!=xe()){e.next=2;break}return e.abrupt("return",d.error("No workflow found"));case 2:return e.next=4,Ae();case 4:if("TC"!=(null==fe||null===(a=fe.data)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.applied_by)&&"TC Reassesment"!=(null==fe||null===(r=fe.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.applied_by)){e.next=17;break}return e.prev=5,e.next=8,te.mutateAsync({api:o.safLevelV2,data:{applicationId:pe,receiverRoleId:xe(),action:"forward",comment:(null==n?void 0:n.comment)||"OK"}});case 8:null!=(i=e.sent)&&null!==(l=i.data)&&void 0!==l&&l.status?(d.success(null==i||null===(s=i.data)||void 0===s?void 0:s.message),ee("/amc-app/property/saf-verification-list",{replace:!0})):d.error(null==i||null===(u=i.data)||void 0===u?void 0:u.message),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),d.error(null===e.t0||void 0===e.t0||null===(c=e.t0.data)||void 0===c?void 0:c.message);case 15:e.next=37;break;case 17:return(v=new FormData).append("applicationId",pe),v.append("document",null==n?void 0:n.uploadMeasurement),e.prev=20,e.next=23,te.mutateAsync({api:o.uploadMeasurementSheetApi,data:v});case 23:if(null==(f=e.sent)||null===(p=f.data)||void 0===p||!p.status){e.next=31;break}return e.next=27,te.mutateAsync({api:o.safLevelV2,data:{applicationId:pe,receiverRoleId:xe(),action:"forward",comment:(null==n?void 0:n.comment)||"OK"}});case 27:null!=(h=e.sent)&&null!==(m=h.data)&&void 0!==m&&m.status?(d.success(null==h||null===(y=h.data)||void 0===y?void 0:y.message),ee("/amc-app/property/saf-verification-list",{replace:!0})):d.error(null==h||null===(g=h.data)||void 0===g?void 0:g.message),e.next=32;break;case 31:d.error(null==f||null===(x=f.data)||void 0===x?void 0:x.message);case 32:e.next=37;break;case 34:e.prev=34,e.t1=e.catch(20),d.error(null===e.t1||void 0===e.t1||null===(b=e.t1.data)||void 0===b?void 0:b.message);case 37:case"end":return e.stop()}}),e,null,[[5,12],[20,34]])})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=a(t().mark((function e(){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=(null==ge||null===(n=ge.values)||void 0===n?void 0:n.comment)){e.next=2;break}return e.abrupt("return",d.error("Comment is required !"));case 2:u.fire({title:"Are you sure?",text:"You are going to backward of this application",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(function(){var e=a(t().mark((function e(n){var a,r,l,i,s;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConfirmed){e.next=12;break}return e.prev=1,e.next=4,te.mutateAsync({api:o.safLevel,data:{applicationId:pe,receiverRoleId1:"",action:"backward",comment:(null==ge||null===(a=ge.values)||void 0===a?void 0:a.comment)||"No Comment"}});case 4:null!=(l=e.sent)&&null!==(r=l.data)&&void 0!==r&&r.status?(d.success(null==l||null===(i=l.data)||void 0===i?void 0:i.message),ee("/amc-app/property/saf-verification-list",{replace:!0})):d.error((null==l||null===(s=l.data)||void 0===s?void 0:s.message)||"Something went wrong, Please try again"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),d.error(null===e.t0||void 0===e.t0?void 0:e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var t;d.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=a(t().mark((function e(n){var a,r,l,i,o,s,u;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("application/pdf"!==(null==(a=n.target.files[0])?void 0:a.type)){e.next=8;break}(r=new FileReader).onload=function(e){re(e.target.result),oe(a.name.split(".").pop())},r.readAsDataURL(a),ge.setFieldValue("uploadMeasurement",a),e.next=16;break;case 8:return e.next=10,_(null==n||null===(l=n.target)||void 0===l?void 0:l.files[0]);case 10:o=e.sent,s=new File([o],null==n||null===(i=n.target)||void 0===i||null===(i=i.files[0])||void 0===i?void 0:i.name,{type:"image/*"}),(u=new FileReader).onload=function(e){re(e.target.result),oe(s.name.split(".").pop())},u.readAsDataURL(s),ge.setFieldValue("uploadMeasurement",s);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_e=function(){var e=a(t().mark((function e(n){var a,r,l,i,o,s,u;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("application/pdf"!==(null==(a=n.target.files[0])?void 0:a.type)){e.next=8;break}(r=new FileReader).onload=function(e){de(e.target.result),ve(a.name.split(".").pop())},r.readAsDataURL(a),ge.setFieldValue("rentAgreementDocument",a),e.next=16;break;case 8:return e.next=10,_(null==n||null===(l=n.target)||void 0===l?void 0:l.files[0]);case 10:o=e.sent,s=new File([o],null==n||null===(i=n.target)||void 0===i||null===(i=i.files[0])||void 0===i?void 0:i.name,{type:"image/*"}),(u=new FileReader).onload=function(e){de(e.target.result),ve(s.name.split(".").pop())},u.readAsDataURL(s),ge.setFieldValue("rentAgreementDocument",s);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ae=function(){var e=a(t().mark((function e(n){var a,r,l,i,s,u,c,v;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(ye()>0&&null!=ge&&null!==(a=ge.values)&&void 0!==a&&a.rentAgreementDocument)){e.next=16;break}return(l=new FormData).append("applicationId",pe),l.append("docCode","RENT AGREEMENT"),l.append("docCategory","Rent Agreement"),l.append("document",null==ge||null===(r=ge.values)||void 0===r?void 0:r.rentAgreementDocument),e.prev=6,e.next=9,te.mutateAsync({api:o.documentUpload,data:l});case 9:null!=(s=e.sent)&&null!==(i=s.data)&&void 0!==i&&i.status?d.success(null==s||null===(u=s.data)||void 0===u?void 0:u.message):d.error(null==s||null===(c=s.data)||void 0===c?void 0:c.message),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),d.error(null===e.t0||void 0===e.t0||null===(v=e.t0.data)||void 0===v?void 0:v.message);case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t){return e.apply(this,arguments)}}();var Te;if(null!=fe&&fe.isLoading)return c.jsx(v,{});return c.jsxs(N,{title:"Measurement",children:[te.isLoading&&c.jsx(A,{}),c.jsx(b,{formik:ge,children:c.jsxs("div",{className:"p-4 ",children:[c.jsx(j.Card,{className:"w-full",children:c.jsxs(j.CardBody,{children:[c.jsx("div",{className:"flex justify-between items-center",children:c.jsx("h1",{className:"font-semibold text-sm",children:"Application Details"})}),c.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-3",children:[c.jsx("h1",{className:"font-semibold text-xs",children:"Application No : "}),c.jsx("h1",{className:"text-xs",children:null==fe||null===(R=fe.data)||void 0===R||null===(R=R.data)||void 0===R?void 0:R.saf_no}),c.jsx("h1",{className:"font-semibold text-xs",children:"Application Type : "}),c.jsx("h1",{className:"text-xs",children:null==fe||null===(E=fe.data)||void 0===E||null===(E=E.data)||void 0===E?void 0:E.assessment_type}),c.jsx("h1",{className:"font-semibold text-xs",children:"Apply Date : "}),c.jsx("h1",{className:"text-xs",children:null==fe||null===(O=fe.data)||void 0===O||null===(O=O.data)||void 0===O?void 0:O.application_date}),c.jsx("h1",{className:"font-semibold text-xs",children:"Owner Name : "}),c.jsx("h1",{className:"text-xs",children:null==fe||null===(D=fe.data)||void 0===D||null===(D=D.data)||void 0===D?void 0:D.applicant_name}),c.jsx("h1",{className:"font-semibold text-xs",children:"Mobile No : "}),c.jsx("h1",{className:"text-xs w-40 truncate",children:null==fe||null===(F=fe.data)||void 0===F||null===(F=F.data)||void 0===F||null===(F=F.owners)||void 0===F||null===(F=F.map((function(e){return null==e?void 0:e.mobile_no})))||void 0===F?void 0:F.join(", ")})]})]})}),ye()>0&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"my-4 border-b-2"}),c.jsxs(j.Card,{className:"w-full",children:[c.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:c.jsx("h1",{className:"text-xs font-semibold text-gray-100",children:"Rent Agreement"})}),ue&&("pdf"===ie?c.jsx(T,{fileUrl:ue}):c.jsx("div",{className:"flex justify-center px-4 py-2",children:c.jsx("img",{src:ue,alt:"preview",loading:"lazy"})})),c.jsx(j.CardBody,{children:c.jsx("div",{className:"grid grid-cols-1 justify-center gap-5",children:"TC"!=(null==fe||null===(I=fe.data)||void 0===I||null===(I=I.data)||void 0===I?void 0:I.applied_by)&&"TC Reassesment"!=(null==fe||null===(M=fe.data)||void 0===M||null===(M=M.data)||void 0===M?void 0:M.applied_by)&&c.jsxs("div",{children:[c.jsx("div",{className:"mb-1",children:c.jsx("h1",{className:"font-semibold text-xs",children:"Upload Rent Agreement"})}),c.jsx("input",{type:"file",accept:"application/pdf, image/*",name:"rentAgreementDocument",onChange:_e,className:"border border-gray-300 p-2 w-full rounded-lg"}),c.jsx("small",{className:"text-red-500",children:(null==ge||null===(B=ge.errors)||void 0===B?void 0:B.rentAgreementDocument)&&(null==ge||null===(P=ge.touched)||void 0===P?void 0:P.rentAgreementDocument)&&(null==ge||null===(V=ge.errors)||void 0===V?void 0:V.rentAgreementDocument)})]})})})]}),c.jsx("div",{className:"my-4 border-b-2"})]}),c.jsx("div",{className:"my-4 border-b-2"}),c.jsxs(j.Card,{className:"w-full",children:[c.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:c.jsx("h1",{className:"text-xs font-semibold text-gray-100",children:"TC"==(null==fe||null===(z=fe.data)||void 0===z||null===(z=z.data)||void 0===z?void 0:z.applied_by)||"TC Reassesment"==(null==fe||null===(U=fe.data)||void 0===U||null===(U=U.data)||void 0===U?void 0:U.applied_by)?"Comment":"Upload Measurement Sheet"})}),ae&&("pdf"===ie?c.jsx(T,{fileUrl:ae}):c.jsx("div",{className:"flex justify-center px-4 py-2",children:c.jsx("img",{src:ae,alt:"preview",loading:"lazy"})})),c.jsx(j.CardBody,{children:c.jsxs("div",{className:"grid grid-cols-1 justify-center gap-5",children:["TC"!=(null==fe||null===(G=fe.data)||void 0===G||null===(G=G.data)||void 0===G?void 0:G.applied_by)&&"TC Reassesment"!=(null==fe||null===(K=fe.data)||void 0===K||null===(K=K.data)||void 0===K?void 0:K.applied_by)&&c.jsxs("div",{children:[c.jsx("div",{className:"mb-1",children:c.jsx("h1",{className:"font-semibold text-xs",children:"Upload Measurement Sheet"})}),c.jsx("input",{type:"file",accept:"application/pdf, image/*",name:"uploadMeasurement",onChange:Ne,className:"border border-gray-300 p-2 w-full rounded-lg"}),c.jsx("small",{className:"text-red-500",children:(null==ge||null===(W=ge.errors)||void 0===W?void 0:W.uploadMeasurement)&&(null==ge||null===(Y=ge.touched)||void 0===Y?void 0:Y.uploadMeasurement)&&(null==ge||null===(q=ge.errors)||void 0===q?void 0:q.uploadMeasurement)})]}),c.jsx("div",{children:c.jsx(w,{label:"Comment",name:"comment",formik:ge,placeholder:"Comment"})})]})})]}),c.jsx("div",{className:"my-4 border-b-2"}),c.jsx("div",{className:"flex justify-center",children:c.jsxs("div",{className:"justify-center items-center mt-4 gap-3",children:[c.jsx("div",{className:"flex justify-center items-center",children:c.jsx(j.Button,{onClick:je,size:"sm",className:"bg-red-500 text-white",children:c.jsx("small",{children:"BACK TO LIPIK"})})}),(null==he||null===(Q=he.data)||void 0===Q||null===(Q=Q.data)||void 0===Q||null===(Q=Q.permissions)||void 0===Q?void 0:Q.can_forward)&&("New Assessment"==(null==me||null===(J=me.data)||void 0===J||null===(J=J.data)||void 0===J?void 0:J.assessment_type)?c.jsx("div",{className:"flex justify-center items-center gap-2 mt-4",children:"4"==(null==me||null===($=me.data)||void 0===$||null===($=$.data)||void 0===$||null===($=$.lastTcVerificationData)||void 0===$?void 0:$.prop_type_id)?c.jsx(j.Button,{type:"submit",onClick:function(){return Z("ATS")},size:"sm",className:"bg-blue-500 text-white",children:c.jsx("small",{children:"Send To ATS"})}):c.jsxs(c.Fragment,{children:[c.jsx(j.Button,{type:"submit",onClick:function(){return Z("ATS")},size:"sm",className:"bg-blue-500 text-white",children:c.jsx("small",{children:"Send To ATS"})}),c.jsx(j.Button,{type:"submit",size:"sm",onClick:function(){return Z("SR_LIPIK")},className:"bg-green-500 text-white",children:c.jsx("small",{children:"Send To Nagar Rachna"})})]})}):c.jsxs("div",{className:"flex justify-center items-center gap-2 mt-4",children:[c.jsx(j.Button,{type:"submit",onClick:function(){return Z("ATS")},size:"sm",className:"bg-blue-500 text-white",children:c.jsx("small",{children:"Send To ATS"})}),c.jsx(j.Button,{type:"submit",size:"sm",onClick:function(){return Z("SR_LIPIK")},className:"bg-green-500 text-white",children:c.jsx("small",{children:"Send To Nagar Rachna"})})]}))]})})]})})]})}))}}}))}();
