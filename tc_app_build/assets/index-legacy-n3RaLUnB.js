!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e){if(null==e)throw new TypeError("Cannot destructure "+e)}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return r};var t,r={},i=Object.prototype,a=i.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},s=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(t){d=function(e,t,n){return e[t]=n}}function m(e,t,n,r){var i=t&&t.prototype instanceof y?t:y,a=Object.create(i.prototype),l=new E(r||[]);return o(a,"_invoke",{value:S(e,n,l)}),a}function v(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=m;var f="suspendedStart",h="suspendedYield",p="executing",g="completed",x={};function y(){}function b(){}function j(){}var w={};d(w,s,(function(){return this}));var N=Object.getPrototypeOf,D=N&&N(N(A([])));D&&D!==i&&a.call(D,s)&&(w=D);var L=j.prototype=y.prototype=Object.create(w);function T(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function P(t,n){function r(i,o,l,s){var c=v(t[i],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==e(d)&&a.call(d,"__await")?n.resolve(d.__await).then((function(e){r("next",e,l,s)}),(function(e){r("throw",e,l,s)})):n.resolve(d).then((function(e){u.value=e,l(u)}),(function(e){return r("throw",e,l,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(e,t){function a(){return new n((function(n,i){r(e,t,n,i)}))}return i=i?i.then(a,a):a()}})}function S(e,n,r){var i=f;return function(a,o){if(i===p)throw new Error("Generator is already running");if(i===g){if("throw"===a)throw o;return{value:t,done:!0}}for(r.method=a,r.arg=o;;){var l=r.delegate;if(l){var s=k(l,r);if(s){if(s===x)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===f)throw i=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=p;var c=v(e,n,r);if("normal"===c.type){if(i=r.done?g:h,c.arg===x)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(i=g,r.method="throw",r.arg=c.arg)}}}function k(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),x;var a=v(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,x;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,x):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,x)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function A(n){if(n||""===n){var r=n[s];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var i=-1,o=function e(){for(;++i<n.length;)if(a.call(n,i))return e.value=n[i],e.done=!1,e;return e.value=t,e.done=!0,e};return o.next=o}}throw new TypeError(e(n)+" is not iterable")}return b.prototype=j,o(L,"constructor",{value:j,configurable:!0}),o(j,"constructor",{value:b,configurable:!0}),b.displayName=d(j,u,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,d(e,u,"GeneratorFunction")),e.prototype=Object.create(L),e},r.awrap=function(e){return{__await:e}},T(P.prototype),d(P.prototype,c,(function(){return this})),r.AsyncIterator=P,r.async=function(e,t,n,i,a){void 0===a&&(a=Promise);var o=new P(m(e,t,n,i),a);return r.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},T(L),d(L,u,"Generator"),d(L,s,(function(){return this})),d(L,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=A,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return l.type="throw",l.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],l=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,x):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),x},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),x}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),x}},r}function r(e,t,n,r,i,a,o){try{var l=e[a](o),s=l.value}catch(c){return void n(c)}l.done?t(s):Promise.resolve(s).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function l(e){r(o,i,a,l,s,"next",e)}function s(e){r(o,i,a,l,s,"throw",e)}l(void 0)}))}}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(t,n,r){var i;return i=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(n,"string"),(n="symbol"==e(i)?i:String(i))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,o,l=[],s=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw i}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-e5jDIJ7v.js","./router-legacy-kOAqN8oI.js","./index.esm-legacy-d1HI7OdW.js","./tailwind-legacy-Cj8YFuLD.js","./formik.esm-legacy-XdfQijo5.js","./FormProvider-legacy-_hPrE_So.js","./TextField-legacy-c49Cp5fy.js","./TextAreaField-legacy-5tRmg6Ms.js","./TranslateField-legacy--lpTz8hS.js","./index-legacy-JBeNDdiK.js","./resizeImage-legacy-ikE3Gj7P.js","./useErrorFocusFields-legacy-3feDRW_L.js","./OverLayLoader-legacy-ntsmuMYX.js","./usePathWisePermission-legacy-fZbX4CvW.js","./reactQuery-legacy-GzPKeAE1.js","./SelectField-legacy-ArjD7CHD.js","./module-legacy-xZ9KfaFL.js","./index-legacy-a1BxB_Or.js","./reactPdfViewerCore-legacy-yNNMdws2.js","./reactPdfViewerDefaultLayout-legacy-3UopyIeK.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-xgqmug7p.js","./headlessui-legacy-7mFRxZdX.js","./customInputValidation-legacy-09WHxC9F.js"],(function(e,r){"use strict";var a,l,c,u,d,m,v,f,h,p,g,x,y,b,j,w,N,D,L,T,P,S,k,I,O,E,A,F,C,q,_;return{setters:[function(e){a=e.c,l=e.d,c=e.e,u=e.b,d=e.p,m=e.w,v=e.S,f=e.Q,h=e.j,p=e.I},function(e){g=e.d,x=e.e,y=e.u,b=e.f,j=e.r},function(e){w=e.c,N=e.b,D=e.a,L=e.d},function(e){T=e.r},function(e){P=e.u,S=e.F},function(e){k=e.F},function(e){I=e.T},function(e){O=e.T},null,function(e){E=e.P},function(e){A=e.r},function(e){F=e.u},function(e){C=e.O},function(e){q=e.u},null,function(e){_=e.S},null,null,null,null,null,null,null,null],execute:function(){function r(e){var t,r,E,_,B,W,R;a();var V=s(g.useState(""),2),M=V[0],z=(V[1],F().AutoFocusErrorField),H=s(g.useState([]),2),G=H[0],Z=H[1],Y=x(),U=l({}),K=s(g.useState(null),2),Q=(K[0],K[1]),J=y().id,$=b().pathname;q(null==$||null===(t=$.split("/"))||void 0===t||null===(t=t.slice(0,-1))||void 0===t?void 0:t.join("/"));var X=c(),ee=X.coords,te=X.isGeolocationEnabled,ne=u({api:d.staticSafDetail,config:{applicationId:J},value:[J],options:{enabled:!!J}});u({api:null===(r=m)||void 0===r?void 0:r.workFlowInfo,config:{workflowId:null==ne||null===(E=ne.data)||void 0===E||null===(E=E.data)||void 0===E?void 0:E.workflow_id},value:[null==ne||null===(_=ne.data)||void 0===_||null===(_=_.data)||void 0===_?void 0:_.workflow_id],options:{enabled:!(null==ne||null===(B=ne.data)||void 0===B||null===(B=B.data)||void 0===B||!B.workflow_id)}});var re,ie=P({enableReinitialize:!0,initialValues:o(o({},null==e?void 0:e.data),{},{geoTagged:null==e||null===(W=e.data)||void 0===W||null===(W=W.geoTagged)||void 0===W?void 0:W.map((function(e){return o({},e)})),comment:(null==e||null===(R=e.data)||void 0===R?void 0:R.comment)||""}),validationSchema:w().shape({geoTagged:N().of(w().shape({latitude:D().required("Latitude is required"),longitude:D().required("Longitude is required"),directionType:D().required("Direction is required"),imagePath:L().required("Image is required")}))}),onSubmit:(re=i(n().mark((function e(t){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.fire({title:"Are you sure?",text:"\n          You are going to submit the application for the survey. Please make sure all the details are correct.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((function(e){e.isConfirmed&&ae(t)})).catch((function(e){var t;f.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 1:case"end":return e.stop()}}),e)}))),function(e){return re.apply(this,arguments)})}),ae=function(){var e=i(n().mark((function e(t){var r,i,a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,null==U?void 0:U.mutateAsync({api:d.surveyNewApplyByTc,data:{propertyType:null==t?void 0:t.propertyType,apartmentId:null==t?void 0:t.apartmentId,plotArea:null==t?void 0:t.plotArea,propAddress:null==t?void 0:t.address,mobileNo:null==t?void 0:t.mobile,ownerName:null==t?void 0:t.name,ward:null==t?void 0:t.wardId,zone:null==t?void 0:t.zoneId,consumerNo:null==t?void 0:t.consumerNo,licenseNo:null==t?void 0:t.licenseNo,isWaterHarvesting:"yes"==(null==t?void 0:t.isWaterHarvesting),harvestingDate:null==t?void 0:t.waterHarvestingDate,isApplicationFormDoc:"yes"==(null==t?void 0:t.isApplicationFormDoc),isSaleDeedDoc:"yes"==(null==t?void 0:t.isSaleDeedDoc),isLayoutSactionMapDoc:"yes"==(null==t?void 0:t.isLayoutSactionMapDoc),isNaOrderDoc:"yes"==(null==t?void 0:t.isNaOrderDoc),isNamunaDDoc:"yes"==(null==t?void 0:t.isNamunaDDoc),isOthersDoc:"yes"==(null==t?void 0:t.isOthersDoc),isMeasurementDoc:"yes"==(null==t?void 0:t.isMeasurementDoc),isPhotoDoc:"yes"==(null==t?void 0:t.isPhotoDoc),isIdProofDoc:"yes"==(null==t?void 0:t.isIdProofDoc)}});case 3:if(null==(i=e.sent)||null===(r=i.data)||void 0===r||!r.status){e.next=7;break}return e.next=7,oe(t,null==i||null===(a=i.data)||void 0===a||null===(a=a.data)||void 0===a?void 0:a.safId);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=i(n().mark((function e(t,r){var i,a,o,l,s,c;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=new FormData).append("safId",r),null==t||t.geoTagged.forEach((function(e,t){i.append("latitude[".concat(t,"]"),null==e?void 0:e.latitude),i.append("longitude[".concat(t,"]"),null==e?void 0:e.longitude),i.append("directionType[".concat(t,"]"),null==e?void 0:e.directionType),i.append("imagePath[".concat(t,"]"),null==e?void 0:e.imagePath)})),e.prev=3,e.next=6,U.mutateAsync({api:d.geoTagging,data:i});case 6:null!=(o=e.sent)&&null!==(a=o.data)&&void 0!==a&&a.status?(f.success(null==o||null===(l=o.data)||void 0===l?void 0:l.message),Y("/amc-app/property/saf-generated-new/".concat(r),{replace:!0})):f.error(null==o||null===(s=o.data)||void 0===s?void 0:s.message),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),f.error(null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c||null===(c=c.data)||void 0===c?void 0:c.message);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,n){return e.apply(this,arguments)}}(),le=ie.submitCount,se=ie.isSubmitting,ce=ie.errors,ue=ie.isValid,de=function(){var e=i(n().mark((function e(t,r,i){var a,o,l,s;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(a=window)||void 0===a||null===(a=a.ReactNativeWebView)||void 0===a?void 0:a.postMessage(JSON.stringify({Key:"OPEN_CAMERA"}));case 2:return e.next=4,A(t.target.files[0]);case 4:l=e.sent,s=new File([l],null===(o=t.target.files[0])||void 0===o?void 0:o.name,{type:"image/*"}),ie.setFieldValue("geoTagged.".concat(r,".latitude"),null==ee?void 0:ee.latitude),ie.setFieldValue("geoTagged.".concat(r,".longitude"),null==ee?void 0:ee.longitude),ie.setFieldValue("geoTagged.".concat(r,".directionType"),null==i?void 0:i.directionType),ie.setFieldValue("geoTagged.".concat(r,".imagePath"),s),Q(s);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return j.useEffect((function(){var t;Z("yes"==(null==e||null===(t=e.data)||void 0===t?void 0:t.isWaterHarvesting)?[{id:1,title:"Front Image",directionType:"Front"},{id:2,title:"Left Image",directionType:"Left"},{id:3,title:"Right Image",directionType:"Right"},{id:4,title:"Rain Water Harvesting Image",directionType:"waterHarvesting",isRainWaterHarvesting:!0}]:[{id:1,title:"Front Image",directionType:"Front"},{id:2,title:"Left Image",directionType:"Left"},{id:3,title:"Right Image",directionType:"Right"}])}),[null==e?void 0:e.data]),g.useEffect((function(){z({submitCount:le,isSubmitting:se,errors:ce,isValid:ue})}),[ce,le,se]),te||v.fire({text:"Geolocation is not enabled! Please enable to use this app",icon:"error",confirmButtonText:"Ok"}),M?h.jsx("div",{className:"p-16 flex text-center text-red-500 font-semibold h-screen justify-center items-center",children:"Network Error"}):null!=ne&&ne.isLoading?h.jsx(p,{}):h.jsxs(h.Fragment,{children:[U.isLoading&&h.jsx(C,{}),h.jsx("div",{children:h.jsxs(k,{formik:ie,children:[h.jsx(S,{name:"geoTagged",children:function(e){return G.map((function(e,t){var n,r,i,a,o,l,s;return h.jsxs(g.Fragment,{children:[h.jsxs(T.Card,{className:"w-full",children:[h.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:h.jsx("h1",{className:"text-base font-semibold text-gray-100",children:null==e?void 0:e.title})}),h.jsxs(T.CardBody,{children:[h.jsxs("div",{className:"grid grid-cols-2 gap-3 items-center",children:[h.jsx("h1",{className:"font-semibold text-sm",children:"Latitude : "}),h.jsx(I,{disabled:!0,type:"text",isDynamic:!0,name:"geoTagged.".concat(t,".latitude"),formik:ie}),h.jsxs("h1",{className:"font-semibold text-sm",children:["Longitude :"," "]}),h.jsx(I,{disabled:!0,type:"text",isDynamic:!0,name:"geoTagged.".concat(t,".longitude"),formik:ie})]}),h.jsxs("div",{className:"grid grid-cols-1 gap-3 mt-4",children:[h.jsx("div",{children:(null==ie||null===(n=ie.values)||void 0===n||null===(n=n.geoTagged[t])||void 0===n?void 0:n.imagePath)&&h.jsx("img",{className:"w-full h-64",loading:"lazy",src:null!=ie&&null!==(r=ie.values)&&void 0!==r&&null!==(r=r.geoTagged[t])&&void 0!==r&&r.imagePath?URL.createObjectURL(null==ie||null===(i=ie.values)||void 0===i||null===(i=i.geoTagged[t])||void 0===i?void 0:i.imagePath):null,alt:null==ie||null===(a=ie.values)||void 0===a||null===(a=a.geoTagged[t])||void 0===a||null===(a=a.imagePath)||void 0===a?void 0:a.name})}),h.jsxs("div",{children:[h.jsx("input",{type:"file",name:"imagePath",accept:"image/*",onChange:function(n){return de(n,t,e)}}),h.jsx("span",{className:"text-sm text-red-500",children:null==ie||null===(o=ie.errors)||void 0===o||null===(o=o.geoTagged)||void 0===o||null===(o=o[t])||void 0===o?void 0:o.imagePath})]}),h.jsx("div",{children:h.jsx("h1",{className:"text-sm text-red-900",children:(null==ie||null===(l=ie.values)||void 0===l||null===(l=l.geoTagged[t])||void 0===l?void 0:l.imagePath)&&Math.round((null==ie||null===(s=ie.values)||void 0===s||null===(s=s.geoTagged[t])||void 0===s||null===(s=s.imagePath)||void 0===s?void 0:s.size)/1024/1024*100)/100+"MB"})})]})]})]}),h.jsx("div",{className:"my-4 border-b-2"})]},t)}))}}),h.jsx(O,{name:"comment",label:"Comment",formik:ie}),h.jsxs("div",{className:"flex justify-center items-center mt-4 gap-3",children:[h.jsx(T.Button,{type:"button",onClick:function(){var t;null==e||e.prev(o(o({},null==e?void 0:e.data),{},{geoTagged:null==ie||null===(t=ie.values)||void 0===t?void 0:t.geoTagged}))},size:"sm",className:"bg-blue-500 text-white",children:h.jsx("small",{children:"Back"})}),h.jsx(T.Button,{type:"submit",size:"sm",className:"bg-blue-500 text-white",children:h.jsx("small",{children:"Final Submit"})})]})]})})]})}function B(e){var t=e.data,n=e.consumerDetails,r=e.licenseDetails;return h.jsxs("div",{className:"flex-1",children:[h.jsx("div",{className:"flex flex-row justify-between mb-3",children:h.jsx("h1",{className:"text-sm font-semibold",children:"View Details"})}),h.jsx(T.Card,{children:h.jsxs(T.CardBody,{children:[h.jsx("div",{className:"flex flex-row items-center justify-between mb-3",children:h.jsx("div",{children:h.jsx("h1",{className:"text-sm font-semibold",children:"Basic Details"})})}),h.jsx("div",{className:"border-t border-gray-200 mb-1"}),h.jsx("div",{className:"grid grid-cols-2 gap-2",children:h.jsx("div",{children:h.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[h.jsxs("div",{children:[h.jsx("h1",{className:"text-xs font-semibold",children:"Name"}),h.jsx("p",{className:"text-xs text-gray-800",children:null==t?void 0:t.name})]}),h.jsxs("div",{children:[h.jsx("h1",{className:"text-xs font-semibold",children:"Mobile"}),h.jsxs("p",{className:"text-xs text-gray-800",children:["+91 ",null==t?void 0:t.mobile]})]}),h.jsxs("div",{children:[h.jsx("h1",{className:"text-xs font-semibold",children:"Address"}),h.jsx("p",{className:"text-xs text-gray-800",children:null==t?void 0:t.address})]})]})})})]})}),h.jsx("div",{className:"border-t border-gray-200 my-2"}),(null==n?void 0:n.consumer_no)&&h.jsx(T.Card,{children:h.jsxs(T.CardBody,{children:[h.jsx("div",{className:"flex flex-row items-center justify-between mb-3",children:h.jsx("div",{children:h.jsx("h1",{className:"text-sm font-semibold",children:"Consumer Details"})})}),h.jsx("div",{className:"border-t border-gray-200 mb-1"}),h.jsx("div",{className:"grid grid-cols-1 gap-2",children:h.jsx("div",{children:h.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[h.jsxs("div",{children:[h.jsx("h1",{className:"text-xs font-semibold",children:"Consumer No"}),h.jsx("p",{className:"text-xs text-gray-800",children:null==n?void 0:n.consumer_no})]}),h.jsxs("div",{children:[h.jsx("h1",{className:"text-xs font-semibold",children:"Consumer Name"}),h.jsx("p",{className:"text-xs text-gray-800",children:null==n?void 0:n.applicant_name})]}),h.jsxs("div",{children:[h.jsx("h1",{className:"text-xs font-semibold",children:"Building Type"}),h.jsx("p",{className:"text-xs text-gray-800",children:null==n?void 0:n.building_type})]})]})})})]})}),h.jsx("div",{className:"border-t border-gray-200 my-2"}),(null==r?void 0:r.application_no)&&h.jsx(T.Card,{children:h.jsxs(T.CardBody,{children:[h.jsx("div",{className:"flex flex-row items-center justify-between mb-3",children:h.jsx("div",{children:h.jsx("h1",{className:"text-sm font-semibold",children:"License Details"})})}),h.jsx("div",{className:"border-t border-gray-200 mb-1"}),h.jsx("div",{className:"grid grid-cols-1 gap-2",children:h.jsx("div",{children:h.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[h.jsxs("div",{children:[h.jsx("h1",{className:"text-xs font-semibold",children:"License No"}),h.jsx("p",{className:"text-xs text-gray-800",children:null==r?void 0:r.license_no})]}),h.jsxs("div",{children:[h.jsx("h1",{className:"text-xs font-semibold",children:"Name"}),h.jsx("p",{className:"text-xs text-gray-800",children:null==r?void 0:r.premises_owner_name})]}),h.jsxs("div",{children:[h.jsx("h1",{className:"text-xs font-semibold",children:"Firm Name"}),h.jsx("p",{className:"text-xs text-gray-800",children:null==r?void 0:r.firm_name})]}),h.jsxs("div",{children:[h.jsx("h1",{className:"text-xs font-semibold",children:"Address"}),h.jsx("p",{className:"text-xs text-gray-800",children:null==r?void 0:r.entity_address})]})]})})})]})}),h.jsx("div",{className:"border-t border-gray-200 my-2"}),h.jsxs("div",{className:"flex flex-row gap-8 justify-center",children:[h.jsx(T.Button,{size:"sm",className:"px-8",onClick:function(){e.prev(o(o({},t),t))},color:"blue-gray",children:"Back"}),h.jsx(T.Button,{size:"sm",className:"px-8",onClick:function(){e.next(o(o({},t),t),!1)},variant:"gradient",color:"blue",children:"Next"})]})]})}e("default",(function(){var e=s(g.useState(0),2),t=e[0],n=e[1],i=s(g.useState({name:"",mobile:"",zoneId:"",wardId:"",address:"",isConsumer:"no",isLicense:"no",consumerNo:"",licenseNo:"",propertyType:"",apartmentId:"",plotArea:"",isWaterHarvesting:"no",waterHarvestingDate:"",comment:"",isApplicationFormDoc:"no",isSaleDeedDoc:"no",isLayoutSactionMapDoc:"no",isNaOrderDoc:"no",isNamunaDDoc:"no",isOthersDoc:"no",isMeasurementDoc:"no",isPhotoDoc:"no",isIdProofDoc:"no",geoTagged:[{latitude:"",longitude:"",altitude:"",accuracy:"",imagePath:"",directionType:"",rainWaterHarvesting:""}]}),2),a=i[0],l=i[1],c=s(g.useState({}),2),u=c[0],d=c[1],m=s(g.useState({}),2),v=m[0],f=m[1];g.useState(""),g.useState("");var p=function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];l(o(o({},a),e)),r||n(t+1)},x=function(e){l(o(o({},a),e)),n(t-1)};return h.jsx(E,{title:"New Survey Form",children:h.jsx("div",{className:"px-4 py-6 flex-1",children:h.jsx("div",{children:{0:h.jsx(M,{next:p,data:a,setData:l,setConsumerDetails:d,setLicenseDetails:f}),1:h.jsx(B,{next:p,prev:x,data:a,setData:l,setConsumerDetails:d,consumerDetails:u,licenseDetails:v,setLicenseDetails:f}),2:h.jsx(r,{next:p,prev:x,data:a,setData:l,setConsumerDetails:d,consumerDetails:u,setLicenseDetails:f})}[t]})})})}));var W=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],R=[{id:1,label:"Zone A-East",value:"1"},{id:2,label:"Zone B-West",value:"2"},{id:3,label:"Zone C-North",value:"3"},{id:4,label:"Zone D-South",value:"4"}],V=[{docname:"isPhotoDoc",label:"Photograph"},{docname:"isIdProofDoc",label:"Id Proof"},{docname:"isApplicationFormDoc",label:"Application Form"},{docname:"isSaleDeedDoc",label:"Sale Deed"},{docname:"isMeasurementDoc",label:"Measurement"},{docname:"isLayoutSactionMapDoc",label:"Layout Saction Map"},{docname:"isNaOrderDoc",label:"NA Order"},{docname:"isNamunaDDoc",label:"7/12/Namuna D"},{docname:"isOthersDoc",label:"Others"}];function M(e){var r,a,s,c,m,v=F().AutoFocusErrorField;x();var p=l({}),y=(p.mutateAsync,p.isLoading),b=l({});l({});var j,N=P({validationSchema:w().shape({name:D().required("Name is required"),mobile:D().required("Mobile is required"),zoneId:D().required("Zone is required"),wardId:D().required().label("Ward"),address:D().required("Address is required"),propertyType:D().required("Property Type is required"),plotArea:D().required("Plot Area is required"),consumerNo:D().when("isConsumer",{is:function(e){return"yes"===e},then:function(){return D().required("Consumer No is required")}}),licenseNo:D().when("isLicense",{is:function(e){return"yes"===e},then:function(){return D().required("License No is required")}}),waterHarvestingDate:D().when("isWaterHarvesting",{is:function(e){return"yes"===e},then:function(){return D().required("Date is required")}})}),initialValues:null==e?void 0:e.data,onSubmit:(j=i(n().mark((function r(i,a){return n().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t(a),null==e||e.next(o(o({},null==e?void 0:e.data),i),!1);case 3:case"end":return n.stop()}}),r)}))),function(e,t){return j.apply(this,arguments)})}),L=N.values,S=N.submitCount,O=N.isSubmitting,E=N.errors,A=N.isValid,C=u({api:d.getWardByZone,config:{zoneId:null==L?void 0:L.zoneId},value:[null==L?void 0:L.zoneId],options:{enabled:!(null==L||!L.zoneId)}}),q=C.data,B=(C.isPending,C.isError,C.error,C.isLoading),M=u({api:d.masterSaf,config:{},options:{enabled:!0}}),z=u({api:d.getAptByWard,config:{wardMstrId:null==L?void 0:L.wardId},value:[null==L?void 0:L.wardId],options:{enabled:3==(null===(r=N.values)||void 0===r?void 0:r.propertyType)}}),H=function(){var t=i(n().mark((function t(){var r,i,a,o;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.mutateAsync({api:d.consumerVerify,data:{consumerNo:null==N||null===(r=N.values)||void 0===r?void 0:r.consumerNo}});case 3:null!=(a=t.sent)&&null!==(i=a.data)&&void 0!==i&&i.status?(null==e||e.setConsumerDetails(null==a||null===(o=a.data)||void 0===o?void 0:o.data),f.success("Consumer Verified")):f.error("Consumer not found"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),f.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),G=function(){var t=i(n().mark((function t(){var r,i,a,o;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.mutateAsync({api:d.tradeVerify,data:{licenseNo:null==N||null===(r=N.values)||void 0===r?void 0:r.licenseNo}});case 3:null!=(a=t.sent)&&null!==(i=a.data)&&void 0!==i&&i.status?(null==e||e.setLicenseDetails(null==a||null===(o=a.data)||void 0===o?void 0:o.data),f.success("License Verified")):f.error("License not found"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),f.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return g.useEffect((function(){v({submitCount:S,isSubmitting:O,errors:E,isValid:A})}),[E,S,O]),h.jsxs("div",{className:"flex-1",children:[h.jsx("div",{className:"flex flex-row justify-between mb-3",children:h.jsx("h1",{className:"text-sm font-semibold",children:"Basic Details"})}),h.jsx(T.Card,{children:h.jsx("div",{className:"p-4",children:h.jsx(k,{formik:N,children:h.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[h.jsx("div",{children:h.jsx(I,{isRequiredLabel:!0,label:"Property Owner Name",name:"name",type:"text",formik:N,placeholder:"Enter property owner name"})}),h.jsx(I,{isRequiredLabel:!0,label:"Mobile",name:"mobile",type:"text",formik:N,placeholder:"Enter your mobile number",onInput:function(e){e.target.value.length>10?e.target.value=e.target.value.slice(0,10):e.target.value=e.target.value.replace(/[^0-9]/g,"")}}),h.jsxs(_,{label:"Zone",name:"zoneId",formik:N,isRequiredLabel:!0,children:[h.jsx("option",{value:"",children:"select"}),R.map((function(e){return h.jsx("option",{value:null==e?void 0:e.value,children:null==e?void 0:e.label},null==e?void 0:e.id)}))]}),h.jsxs("div",{children:[h.jsxs(_,{isRequiredLabel:!0,label:"Ward",formik:N,name:"wardId",disabled:B,children:[h.jsx("option",{value:"",children:"select"}),null==q||null===(a=q.data)||void 0===a?void 0:a.map((function(e){return h.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.ward_name},null==e?void 0:e.id)}))]}),h.jsx("small",{className:"text-blue-500",children:B?"Please wait...":""})]}),h.jsxs(_,{isRequiredLabel:!0,label:"Property Type",name:"propertyType",formik:N,children:[h.jsx("option",{value:"",children:"Select"}),null==M||null===(s=M.data)||void 0===s||null===(s=s.data)||void 0===s||null===(s=s.property_type)||void 0===s?void 0:s.map((function(e){return h.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.property_type},null==e?void 0:e.id)}))]}),3==(null==N||null===(c=N.values)||void 0===c?void 0:c.propertyType)&&h.jsxs(_,{label:"Apartment",name:"apartmentId",formik:N,children:[h.jsx("option",{value:"",children:"Select"}),null==z||null===(m=z.data)||void 0===m||null===(m=m.data)||void 0===m?void 0:m.map((function(e,t){return h.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.apartment_name},t+1)}))]}),h.jsx(I,{label:"Area of Plot",name:"plotArea",type:"number",onInput:function(e){e.target.value.length>10?e.target.value=e.target.value.slice(0,10):e.target.value=e.target.value.replace(/[^0-9]/g,"")},formik:N,placeholder:"Enter area of plot"}),h.jsx(I,{isRequiredLabel:!0,label:"Address",name:"address",type:"text",formik:N,placeholder:"Enter your address"}),h.jsx(_,{label:"Is Water Connection?",name:"isConsumer",formik:N,children:W.map((function(e){return h.jsx("option",{value:e.value,children:e.label},e.value)}))}),"yes"===N.values.isConsumer&&h.jsx(I,{isRequiredLabel:!0,onBlur:H,label:"Consumer No",name:"consumerNo",type:"text",formik:N,placeholder:"Enter your consumer number"}),h.jsx(_,{label:"Is Trade License?",name:"isLicense",formik:N,children:W.map((function(e){return h.jsx("option",{value:e.value,children:e.label},e.value)}))}),"yes"===N.values.isLicense&&h.jsx(I,{isRequiredLabel:!0,label:"License No",onBlur:G,name:"licenseNo",type:"text",formik:N,placeholder:"Enter your license number"}),h.jsx(_,{label:"Is Water Harvesting?",name:"isWaterHarvesting",formik:N,children:W.map((function(e){return h.jsx("option",{value:e.value,children:e.label},e.value)}))}),"yes"===N.values.isWaterHarvesting&&h.jsx(I,{isRequiredLabel:!0,label:"Water Harvesting Date",name:"waterHarvestingDate",type:"date",formik:N}),h.jsx("h1",{className:"text-xs font-semibold",children:"Please select the document you have"}),h.jsx("div",{className:"border-t border-gray-200"}),h.jsx("div",{className:"grid grid-cols-2 gap-4",children:V.map((function(e){var t,n,r,i,a;return h.jsxs("div",{className:"flex gap-2",children:[h.jsx("input",{type:"checkbox",name:e.docname,value:null==N||null===(t=N.values)||void 0===t?void 0:t[e.docname],checked:"yes"===(null==N||null===(n=N.values)||void 0===n?void 0:n[e.docname]),onChange:function(t){N.setFieldValue(e.docname,t.target.checked?"yes":"no")}}),h.jsxs("h1",{className:"text-xs font-semibold",children:[e.label,("isPhotoDoc"===e.docname||"isIdProofDoc"==(null==e?void 0:e.docname)||"isApplicationFormDoc"==(null==e?void 0:e.docname)||"isSaleDeedDoc"==(null==e?void 0:e.docname))&&h.jsx(h.Fragment,{children:h.jsx("div",{className:"text-red-500 text-[10px]",children:(null==N||null===(r=N.errors)||void 0===r?void 0:r[e.docname])&&(null==N||null===(i=N.touched)||void 0===i?void 0:i[e.docname])&&(null==N||null===(a=N.errors)||void 0===a?void 0:a[e.docname])})})]})]},e.docname)}))}),h.jsx("div",{className:"text-center mt-4",children:h.jsx(T.Button,{size:"sm",type:"submit",color:"blue",loading:y,formik:N,fullWidth:!0,label:"Submit",children:"Next"})})]})})})})]})}}}}))}();
