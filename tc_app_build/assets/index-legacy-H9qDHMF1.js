!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},u=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",c=l.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(n){d=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var i=t&&t.prototype instanceof x?t:x,o=Object.create(i.prototype),l=new F(r||[]);return a(o,"_invoke",{value:_(e,n,l)}),o}function v(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var h="suspendedStart",g="suspendedYield",m="executing",p="completed",y={};function x(){}function w(){}function b(){}var j={};d(j,u,(function(){return this}));var T=Object.getPrototypeOf,N=T&&T(T(I([])));N&&N!==i&&o.call(N,u)&&(j=N);var L=b.prototype=x.prototype=Object.create(j);function k(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function E(t,n){function r(i,a,l,u){var s=v(t[i],t,a);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==e(d)&&o.call(d,"__await")?n.resolve(d.__await).then((function(e){r("next",e,l,u)}),(function(e){r("throw",e,l,u)})):n.resolve(d).then((function(e){c.value=e,l(c)}),(function(e){return r("throw",e,l,u)}))}u(s.arg)}var i;a(this,"_invoke",{value:function(e,t){function o(){return new n((function(n,i){r(e,t,n,i)}))}return i=i?i.then(o,o):o()}})}function _(e,t,r){var i=h;return function(o,a){if(i===m)throw new Error("Generator is already running");if(i===p){if("throw"===o)throw a;return{value:n,done:!0}}for(r.method=o,r.arg=a;;){var l=r.delegate;if(l){var u=P(l,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===h)throw i=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=m;var s=v(e,t,r);if("normal"===s.type){if(i=r.done?p:g,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(i=p,r.method="throw",r.arg=s.arg)}}}function P(e,t){var r=t.method,i=e.iterator[r];if(i===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,P(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var o=v(i,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,y;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,y):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function I(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){for(;++i<t.length;)if(o.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}throw new TypeError(e(t)+" is not iterable")}return w.prototype=b,a(L,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:w,configurable:!0}),w.displayName=d(b,c,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,d(e,c,"GeneratorFunction")),e.prototype=Object.create(L),e},r.awrap=function(e){return{__await:e}},k(E.prototype),d(E.prototype,s,(function(){return this})),r.AsyncIterator=E,r.async=function(e,t,n,i,o){void 0===o&&(o=Promise);var a=new E(f(e,t,n,i),o);return r.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},k(L),d(L,c,"Generator"),d(L,u,(function(){return this})),d(L,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=I,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,i){return l.type="throw",l.arg=e,t.next=r,i&&(t.method="next",t.arg=n),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:I(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),y}},r}function n(e,t,n,r,i,o,a){try{var l=e[o](a),u=l.value}catch(s){return void n(s)}l.done?t(u):Promise.resolve(u).then(r,i)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function l(e){n(a,i,o,l,u,"next",e)}function u(e){n(a,i,o,l,u,"throw",e)}l(void 0)}))}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],u=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){s=!0,i=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-_w30ICfg.js","./router-legacy-rigPOyFI.js","./index.esm-legacy-5u-Ffckd.js","./tailwind-legacy-e6PAgAmt.js","./formik.esm-legacy-LafwCeEO.js","./FormProvider-legacy-gbebjuQe.js","./TextField-legacy-SzvcmarG.js","./TextAreaField-legacy-g0NXjLpW.js","./index-legacy-vtVAGFCF.js","./index-legacy-dIXo1csY.js","./resizeImage-legacy-7UyDI495.js","./useErrorFocusFields-legacy-lPzH5Ai2.js","./OverLayLoader-legacy-sOU5Zwlk.js","./usePathWisePermission-legacy-OX3YObs2.js","./reactQuery-legacy-jKPiMKrc.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-ELZmKVKq.js","./headlessui-legacy-Yu0VJXN1.js","./module-legacy-4l2XNmm8.js"],(function(e,n){"use strict";var o,a,l,u,s,c,d,f,v,h,g,m,p,y,x,w,b,j,T,N,L,k,E,_,P,S,O,F,I,A;return{setters:[function(e){o=e.u,a=e.b,l=e.h,u=e.a,s=e.p,c=e.g,d=e.S,f=e.Q,v=e.j,h=e.f},function(e){g=e.d,m=e.u,p=e.h,y=e.f,x=e.r},function(e){w=e.c,b=e.e,j=e.a,T=e.f},function(e){N=e.r},function(e){L=e.u,k=e.F},function(e){E=e.F},function(e){_=e.T},function(e){P=e.T},null,function(e){S=e.P},function(e){O=e.r},function(e){F=e.u},function(e){I=e.O},function(e){A=e.u},null,null,null,null,null,null],execute:function(){e("default",(function(){var e,n,C,B,G,R,q,V,D,Y,z,M,W;o();var H=i(g.useState(""),2),Q=H[0],U=H[1],$=F().AutoFocusErrorField,J=i(g.useState([]),2),K=J[0],X=J[1],Z=m(),ee=a({}),te=i(g.useState(null),2),ne=(te[0],te[1]),re=p().id,ie=y().pathname;A(null==ie||null===(e=ie.split("/"))||void 0===e||null===(e=e.slice(0,-1))||void 0===e?void 0:e.join("/"));var oe=l(),ae=oe.coords,le=oe.isGeolocationEnabled,ue=u({api:s.staticSafDetail,config:{applicationId:re},value:[re],options:{enabled:!!re,onSuccess:function(e){var t,n;null!=e&&null!==(t=e.data)&&void 0!==t&&t.status?(U(!1),null!=e&&null!==(n=e.data)&&void 0!==n&&n.is_geo_tagged&&Z("/amc-app/property/measurement-sheet/".concat(re),{replace:!0})):U(!0)}}}),se=u({api:null===(n=c)||void 0===n?void 0:n.workFlowInfo,config:{workflowId:null==ue||null===(C=ue.data)||void 0===C||null===(C=C.data)||void 0===C?void 0:C.workflow_id},value:[null==ue||null===(B=ue.data)||void 0===B||null===(B=B.data)||void 0===B?void 0:B.workflow_id],options:{enabled:!(null==ue||null===(G=ue.data)||void 0===G||null===(G=G.data)||void 0===G||!G.workflow_id)}}),ce=L({enableReinitialize:!0,initialValues:{geoTagged:null==K?void 0:K.map((function(e){return{latitude:"",longitude:"",altitude:"",accuracy:"",imagePath:"",directionType:"",rainWaterHarvesting:""}})),comment:""},validationSchema:w().shape({geoTagged:b().of(w().shape({latitude:j().required("Latitude is required"),longitude:j().required("Longitude is required"),directionType:j().required("Direction is required"),imagePath:T().required("Image is required")}))}),onSubmit:(ye=r(t().mark((function e(n){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.fire({title:"Are you sure?",text:"\n        You are going to submit the Geo Tagging. Once submitted, you can't edit the Geo Tagging?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((function(e){e.isConfirmed&&de(n)})).catch((function(e){var t;f.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 1:case"end":return e.stop()}}),e)}))),function(e){return ye.apply(this,arguments)})}),de=function(){var e=r(t().mark((function e(n){var r,i,o,a,l,u;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("safId",re),null==n||n.geoTagged.forEach((function(e,t){r.append("latitude[".concat(t,"]"),null==e?void 0:e.latitude),r.append("longitude[".concat(t,"]"),null==e?void 0:e.longitude),r.append("directionType[".concat(t,"]"),null==e?void 0:e.directionType),r.append("imagePath[".concat(t,"]"),null==e?void 0:e.imagePath)})),e.prev=3,e.next=6,ee.mutateAsync({api:s.geoTagging,data:r});case 6:null!=(o=e.sent)&&null!==(i=o.data)&&void 0!==i&&i.status?(f.success(null==o||null===(a=o.data)||void 0===a?void 0:a.message),Z("/amc-app/property/measurement-sheet/".concat(re),{replace:!0})):f.error(null==o||null===(l=o.data)||void 0===l?void 0:l.message),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),f.error(null===e.t0||void 0===e.t0||null===(u=e.t0.response)||void 0===u||null===(u=u.data)||void 0===u?void 0:u.message);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),fe=ce.submitCount,ve=ce.isSubmitting,he=ce.errors,ge=ce.isValid,me=function(){var e=r(t().mark((function e(){var n;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=(null==ce||null===(n=ce.values)||void 0===n?void 0:n.comment)){e.next=2;break}return e.abrupt("return",f.error("Comment is required !"));case 2:d.fire({title:"Are you sure?",text:"You are going to backward of this application",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(function(){var e=r(t().mark((function e(n){var r,i,o,a,l;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConfirmed){e.next=11;break}return e.prev=1,e.next=4,ee.mutateAsync({api:s.safLevel,data:{applicationId:re,receiverRoleId1:"",action:"backward",comment:(null==ce||null===(r=ce.values)||void 0===r?void 0:r.comment)||"No Comment"}});case 4:null!=(o=e.sent)&&null!==(i=o.data)&&void 0!==i&&i.status?(f.success(null==o||null===(a=o.data)||void 0===a?void 0:a.message),Z("/amc-app/property/saf-verification-list",{replace:!0})):f.error((null==o||null===(l=o.data)||void 0===l?void 0:l.message)||"Something went wrong, Please try again"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f.error(null===e.t0||void 0===e.t0?void 0:e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var t;f.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=r(t().mark((function e(n,r,i){var o,a,l,u;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(o=window)||void 0===o||null===(o=o.ReactNativeWebView)||void 0===o?void 0:o.postMessage(JSON.stringify({Key:"OPEN_CAMERA"}));case 2:return e.next=4,O(n.target.files[0]);case 4:l=e.sent,u=new File([l],null===(a=n.target.files[0])||void 0===a?void 0:a.name,{type:"image/*"}),ce.setFieldValue("geoTagged.".concat(r,".latitude"),null==ae?void 0:ae.latitude),ce.setFieldValue("geoTagged.".concat(r,".longitude"),null==ae?void 0:ae.longitude),ce.setFieldValue("geoTagged.".concat(r,".directionType"),null==i?void 0:i.directionType),ce.setFieldValue("geoTagged.".concat(r,".imagePath"),u),ne(u);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();var ye;x.useEffect((function(){var e,t;null!=ue&&null!==(e=ue.data)&&void 0!==e&&e.data&&X(null!=ue&&null!==(t=ue.data)&&void 0!==t&&null!==(t=t.data)&&void 0!==t&&t.is_water_harvesting?[{id:1,title:"Front Image",directionType:"Front"},{id:2,title:"Left Image",directionType:"Left"},{id:3,title:"Right Image",directionType:"Right"},{id:4,title:"Rain Water Harvesting Image",directionType:"waterHarvesting",isRainWaterHarvesting:!0}]:[{id:1,title:"Front Image",directionType:"Front"},{id:2,title:"Left Image",directionType:"Left"},{id:3,title:"Right Image",directionType:"Right"}])}),[null==ue||null===(R=ue.data)||void 0===R||null===(R=R.data)||void 0===R?void 0:R.saf_no]),g.useEffect((function(){$({submitCount:fe,isSubmitting:ve,errors:he,isValid:ge})}),[he,fe,ve]),le||d.fire({text:"Geolocation is not enabled! Please enable to use this app",icon:"error",confirmButtonText:"Ok"});if(Q)return v.jsx("div",{className:"p-16 flex text-center text-red-500 font-semibold h-screen justify-center items-center",children:"Network Error"});if(null!=ue&&ue.isLoading)return v.jsx(h,{});return v.jsxs(S,{title:"Geo Tagging",children:[ee.isLoading&&v.jsx(I,{}),v.jsxs("div",{className:"p-4 ",children:[v.jsx(N.Card,{className:"w-full",children:v.jsxs(N.CardBody,{children:[v.jsx("div",{className:"flex justify-between items-center",children:v.jsx("h1",{className:"font-semibold",children:"Geo Tagging"})}),v.jsx("div",{className:"border-b-2 border-gray-300 w-full py-1"}),v.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-3",children:[v.jsx("h1",{className:"font-semibold text-sm",children:"Application No : "}),v.jsx("h1",{className:"text-sm",children:null==ue||null===(q=ue.data)||void 0===q||null===(q=q.data)||void 0===q?void 0:q.saf_no}),v.jsx("h1",{className:"font-semibold text-sm",children:"Application Type : "}),v.jsx("h1",{className:"text-sm",children:null==ue||null===(V=ue.data)||void 0===V||null===(V=V.data)||void 0===V?void 0:V.assessment_type}),v.jsx("h1",{className:"font-semibold text-sm",children:"Apply Date : "}),v.jsx("h1",{className:"text-sm",children:null==ue||null===(D=ue.data)||void 0===D||null===(D=D.data)||void 0===D?void 0:D.application_date}),v.jsx("h1",{className:"font-semibold text-sm",children:"Owner Name : "}),v.jsx("h1",{className:"text-sm",children:null==ue||null===(Y=ue.data)||void 0===Y||null===(Y=Y.data)||void 0===Y?void 0:Y.applicant_name}),v.jsx("h1",{className:"font-semibold text-sm",children:"Mobile No : "}),v.jsx("h1",{className:"text-sm w-40 truncate",children:null==ue||null===(z=ue.data)||void 0===z||null===(z=z.data)||void 0===z||null===(z=z.owners)||void 0===z||null===(z=z.map((function(e){return null==e?void 0:e.mobile_no})))||void 0===z?void 0:z.join(", ")})]})]})}),v.jsx("div",{className:"my-4 border-b-2"}),v.jsxs(E,{formik:ce,children:[v.jsx(k,{name:"geoTagged",children:function(e){return K.map((function(e,t){var n,r,i,o,a,l,u;return v.jsxs(g.Fragment,{children:[v.jsxs(N.Card,{className:"w-full",children:[v.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:v.jsx("h1",{className:"text-base font-semibold text-gray-100",children:null==e?void 0:e.title})}),v.jsxs(N.CardBody,{children:[v.jsxs("div",{className:"grid grid-cols-2 gap-3 items-center",children:[v.jsx("h1",{className:"font-semibold text-sm",children:"Latitude : "}),v.jsx(_,{disabled:!0,type:"text",isDynamic:!0,name:"geoTagged.".concat(t,".latitude"),formik:ce}),v.jsxs("h1",{className:"font-semibold text-sm",children:["Longitude :"," "]}),v.jsx(_,{disabled:!0,type:"text",isDynamic:!0,name:"geoTagged.".concat(t,".longitude"),formik:ce})]}),v.jsxs("div",{className:"grid grid-cols-1 gap-3 mt-4",children:[v.jsx("div",{children:(null==ce||null===(n=ce.values)||void 0===n||null===(n=n.geoTagged[t])||void 0===n?void 0:n.imagePath)&&v.jsx("img",{className:"w-full h-64",loading:"lazy",src:null!=ce&&null!==(r=ce.values)&&void 0!==r&&null!==(r=r.geoTagged[t])&&void 0!==r&&r.imagePath?URL.createObjectURL(null==ce||null===(i=ce.values)||void 0===i||null===(i=i.geoTagged[t])||void 0===i?void 0:i.imagePath):null,alt:null==ce||null===(o=ce.values)||void 0===o||null===(o=o.geoTagged[t])||void 0===o||null===(o=o.imagePath)||void 0===o?void 0:o.name})}),v.jsxs("div",{children:[v.jsx("input",{type:"file",name:"imagePath",accept:"image/*",onChange:function(n){return pe(n,t,e)}}),v.jsx("span",{className:"text-sm text-red-500",children:null==ce||null===(a=ce.errors)||void 0===a||null===(a=a.geoTagged)||void 0===a||null===(a=a[t])||void 0===a?void 0:a.imagePath})]}),v.jsx("div",{children:v.jsx("h1",{className:"text-sm text-red-900",children:(null==ce||null===(l=ce.values)||void 0===l||null===(l=l.geoTagged[t])||void 0===l?void 0:l.imagePath)&&Math.round((null==ce||null===(u=ce.values)||void 0===u||null===(u=u.geoTagged[t])||void 0===u||null===(u=u.imagePath)||void 0===u?void 0:u.size)/1024/1024*100)/100+"MB"})})]})]})]}),v.jsx("div",{className:"my-4 border-b-2"})]},t)}))}}),v.jsx(P,{name:"comment",label:"Comment",formik:ce}),v.jsxs("div",{className:"flex justify-center items-center mt-4 gap-3",children:[(null==se||null===(M=se.data)||void 0===M||null===(M=M.data)||void 0===M||null===(M=M.permissions)||void 0===M?void 0:M.can_backward)&&v.jsx(N.Button,{onClick:me,size:"sm",className:"bg-red-500 text-white",children:v.jsx("small",{children:"Back To Back Office"})}),(null==se||null===(W=se.data)||void 0===W||null===(W=W.data)||void 0===W||null===(W=W.permissions)||void 0===W?void 0:W.can_forward)&&v.jsx(N.Button,{type:"submit",size:"sm",className:"bg-blue-500 text-white",children:v.jsx("small",{children:"Save & Next"})})]})]})]})]})}))}}}))}();
