!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},u=l.iterator||"@@iterator",d=l.asyncIterator||"@@asyncIterator",s=l.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(n){c=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof b?t:b,a=Object.create(o.prototype),l=new C(r||[]);return i(a,"_invoke",{value:S(e,n,l)}),a}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var m="suspendedStart",v="suspendedYield",h="executing",y="completed",g={};function b(){}function x(){}function w(){}var j={};c(j,u,(function(){return this}));var N=Object.getPrototypeOf,k=N&&N(N(P([])));k&&k!==o&&a.call(k,u)&&(j=k);var L=w.prototype=b.prototype=Object.create(j);function I(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(t,n){function r(o,i,l,u){var d=p(t[o],t,i);if("throw"!==d.type){var s=d.arg,c=s.value;return c&&"object"==e(c)&&a.call(c,"__await")?n.resolve(c.__await).then((function(e){r("next",e,l,u)}),(function(e){r("throw",e,l,u)})):n.resolve(c).then((function(e){s.value=e,l(s)}),(function(e){return r("throw",e,l,u)}))}u(d.arg)}var o;i(this,"_invoke",{value:function(e,t){function a(){return new n((function(n,o){r(e,t,n,o)}))}return o=o?o.then(a,a):a()}})}function S(e,t,r){var o=m;return function(a,i){if(o===h)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:n,done:!0}}for(r.method=a,r.arg=i;;){var l=r.delegate;if(l){var u=_(l,r);if(u){if(u===g)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===m)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var d=p(e,t,r);if("normal"===d.type){if(o=r.done?y:v,d.arg===g)continue;return{value:d.arg,done:r.done}}"throw"===d.type&&(o=y,r.method="throw",r.arg=d.arg)}}}function _(e,t){var r=t.method,o=e.iterator[r];if(o===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,_(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=p(o,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,g;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,g):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function D(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return x.prototype=w,i(L,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:x,configurable:!0}),x.displayName=c(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,c(e,s,"GeneratorFunction")),e.prototype=Object.create(L),e},r.awrap=function(e){return{__await:e}},I(E.prototype),c(E.prototype,d,(function(){return this})),r.AsyncIterator=E,r.async=function(e,t,n,o,a){void 0===a&&(a=Promise);var i=new E(f(e,t,n,o),a);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},I(L),c(L,s,"Generator"),c(L,u,(function(){return this})),c(L,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=P,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(D),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return l.type="throw",l.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),d=a.call(i,"finallyLoc");if(u&&d){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),D(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;D(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),g}},r}function n(e,t,n,r,o,a,i){try{var l=e[a](i),u=l.value}catch(d){return void n(d)}l.done?t(u):Promise.resolve(u).then(r,o)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function l(e){n(i,o,a,l,u,"next",e)}function u(e){n(i,o,a,l,u,"throw",e)}l(void 0)}))}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,d=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){d=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(d)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-ZPSGecu8.js","./index-legacy-gcPxMepw.js","./router-legacy-_t8Mc_yw.js","./formik.esm-legacy-L7X0greu.js","./index.esm-legacy-sahDnNe5.js","./FormProvider-legacy-GluYFKlN.js","./TextField-legacy-Gk_AUiCo.js","./SelectField-legacy-SePR7mbB.js","./TextAreaField-legacy-0e2i-iUS.js","./index-legacy-GzbAK-b2.js","./resizeImage-legacy-qd5zzYrP.js","./tailwind-legacy-Afc9ICbc.js","./reactQuery-legacy-820C8VGY.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-v-aafSOk.js","./headlessui-legacy-MZogm2kK.js","./customInputValidation-legacy-09WHxC9F.js"],(function(e,n){"use strict";var a,i,l,u,d,s,c,f,p,m,v,h,y,g,b,x,w,j,N;return{setters:[function(e){a=e.e,i=e.d,l=e.Q,u=e.S,d=e.p,s=e.c,c=e.j},function(e){f=e.P},function(e){p=e.u,m=e.d},function(e){v=e.u},function(e){h=e.c,y=e.a},function(e){g=e.F},function(e){b=e.T},function(e){x=e.S},function(e){w=e.T},null,function(e){j=e.r},function(e){N=e.r},null,null,null,null,null],execute:function(){e("default",(function(){var e=new URLSearchParams(window.location.search),t=s({api:d.getPropByHolding,config:{propertyId:e.get("id")},options:{enabled:!!e.get("id")}}),n=s({api:d.getDemandDetails,config:{propId:e.get("id")},options:{enabled:!!e.get("id")}});return c.jsx(f,{title:"Visiting",children:c.jsx("div",{className:"p-2",children:c.jsx(k,{getPropDetails:t,demandDetails:n,id:e.get("id")})})})}));var n=[{id:1,label:"Zone A-East",value:"1"},{id:2,label:"Zone B-West",value:"2"},{id:3,label:"Zone C-North",value:"3"},{id:4,label:"Zone D-South",value:"4"}];function k(e){var f,k,L,I,E,S,_,T,D,C,P,A,O,z,F,V,q,B,G,U,Z,R=e.getPropDetails,W=e.demandDetails,M=e.id,Y=p(),H=a(),Q=H.coords,J=H.isGeolocationEnabled,K=H.isGeolocationAvailable,$=i({}),X=o(m.useState(null),2),ee=X[0],te=X[1],ne=v({enableReinitialize:!0,initialValues:{zoneName:(null==R||null===(f=R.data)||void 0===f||null===(f=f.data)||void 0===f?void 0:f.zone_name)||"",zoneId:(null==R||null===(k=R.data)||void 0===k||null===(k=k.data)||void 0===k?void 0:k.zone_mstr_id)||"",wardId:(null==R||null===(L=R.data)||void 0===L||null===(L=L.data)||void 0===L?void 0:L.ward_mstr_id)||"",wardName:(null==R||null===(I=R.data)||void 0===I||null===(I=I.data)||void 0===I?void 0:I.ward_no)||"",holdingNo:(null==R||null===(E=R.data)||void 0===E||null===(E=E.data)||void 0===E?void 0:E.holding_no)||"",propertyNo:(null==R||null===(S=R.data)||void 0===S||null===(S=S.data)||void 0===S?void 0:S.property_no)||"",name:(null==R||null===(_=R.data)||void 0===_||null===(_=_.data)||void 0===_?void 0:_.owner_name)||"",propAddress:(null==R||null===(T=R.data)||void 0===T||null===(T=T.data)||void 0===T?void 0:T.prop_address)||"",mobileNo:(null==R||null===(D=R.data)||void 0===D||null===(D=D.data)||void 0===D||null===(D=D.owners[0])||void 0===D?void 0:D.mobile_no)||"",arrearDemand:(null==W||null===(C=W.data)||void 0===C||null===(C=C.data)||void 0===C?void 0:C.arrear)||"",currentDemand:(null==W||null===(P=W.data)||void 0===P||null===(P=P.data)||void 0===P?void 0:P.currentDemand)||"",interest:(null==W||null===(A=W.data)||void 0===A||null===(A=A.data)||void 0===A?void 0:A.arrearMonthlyPenalty)||"",totalDemand:(null==W||null===(O=W.data)||void 0===O||null===(O=O.data)||void 0===O?void 0:O.payableAmt)||"",changeConsTypeId:"",changeUsagesTypeId:"",latitude:"",longitude:"",document:"",remark:"",citizenComment:""},validationSchema:h().shape({zoneId:y().required("Zone is required"),wardId:y().required("Ward is required"),latitude:y().required("Latitude is required"),longitude:y().required("Longitude is required"),document:y().required("Document is required"),remark:y().required("Remark is required")}),onSubmit:(Z=r(t().mark((function e(n,o){var a,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=o.resetForm,J){e.next=3;break}return e.abrupt("return",l.error("Please enable location service"));case 3:(i=new FormData).append("zoneId",n.zoneId),i.append("wardId",n.wardId),i.append("holdingNo",n.holdingNo||""),i.append("propertyNo",n.propertyNo||""),i.append("name",n.name||""),i.append("propAddress",n.propAddress||""),i.append("mobileNo",n.mobileNo||""),i.append("arrearDemand",n.arrearDemand||""),i.append("currentDemand",n.currentDemand||""),i.append("interest",n.interest||""),i.append("totalDemand",n.totalDemand||""),i.append("changeConsTypeId",n.changeConsTypeId||""),i.append("changeUsagesTypeId",n.changeUsagesTypeId||""),i.append("latitude",n.latitude),i.append("longitude",n.longitude),i.append("document",ee),i.append("remark",n.remark),i.append("citizenComment",n.citizenComment||""),u.fire({title:"Are you sure?",text:"\n          You are going to submit the application for the visit. Please make sure all the details are correct.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(function(){var e=r(t().mark((function e(n){var r,o,u,s,c;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConfirmed){e.next=11;break}return e.prev=1,e.next=4,$.mutateAsync({api:d.addVisit,data:i});case 4:null!=(o=e.sent)&&null!==(r=o.data)&&void 0!==r&&r.status?(l.success(null==o||null===(u=o.data)||void 0===u?void 0:u.message),a(),R.remove(),W.remove(),Y("/amc-app/property/visiting-list",{replace:!0})):l.error(null==o||null===(s=o.data)||void 0===s?void 0:s.message),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),l.error(null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c||null===(c=c.data)||void 0===c?void 0:c.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var t;l.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 23:case"end":return e.stop()}}),e)}))),function(e,t){return Z.apply(this,arguments)})}),re=ne.values,oe=s({api:d.getWardByZone,config:{zoneId:null==re?void 0:re.zoneId},value:[null==re?void 0:re.zoneId],options:{enabled:!(null==re||!re.zoneId)}}),ae=oe.data,ie=(oe.isPending,oe.isError,oe.error,oe.isLoading,function(){var e=r(t().mark((function e(n){var r,o,a,i,l;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(r=n.target)&&void 0!==r&&r.files[0]){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,null===(o=window)||void 0===o||null===(o=o.ReactNativeWebView)||void 0===o?void 0:o.postMessage(JSON.stringify({Key:"OPEN_CAMERA"}));case 4:return e.next=6,j(n.target.files[0]);case 6:i=e.sent,l=new File([i],null===(a=n.target.files[0])||void 0===a?void 0:a.name,{type:"image/*"}),ne.setFieldValue("latitude",null==Q?void 0:Q.latitude),ne.setFieldValue("longitude",null==Q?void 0:Q.longitude),ne.setFieldValue("document",l),te(l);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return c.jsx(N.Card,{children:c.jsx(N.CardBody,{color:"blue",children:c.jsxs(g,{formik:ne,children:[c.jsx("div",{className:"p-2",children:c.jsxs("div",{className:"row",children:[c.jsxs("div",{className:"col-md-6",children:[c.jsxs(x,{name:"zoneId",label:"Zone Name",formik:ne,disabled:M,children:[c.jsx("option",{value:"",children:"Select Zone"}),n.map((function(e){return c.jsx("option",{value:e.value,children:e.label},e.id)}))]}),c.jsxs(x,{name:"wardId",label:"Ward Name",formik:ne,disabled:M,children:[c.jsx("option",{value:"",children:"Select Ward"}),null==ae||null===(z=ae.data)||void 0===z?void 0:z.map((function(e){return c.jsx("option",{value:e.id,children:e.ward_name},e.id)}))]}),c.jsx(b,{name:"holdingNo",label:"Holding No",formik:ne,disabled:M}),c.jsx(b,{name:"propertyNo",label:"Property No",formik:ne,disabled:M}),c.jsx(b,{name:"name",label:"Name",formik:ne,disabled:M}),c.jsx(b,{name:"propAddress",label:"Address",formik:ne,disabled:M}),c.jsx(b,{name:"mobileNo",label:"Mobile No",formik:ne,inputValidation:["mobile","number"]})]}),c.jsxs("div",{className:"col-md-6",children:[c.jsx(b,{name:"arrearDemand",label:"Arrear Demand",formik:ne,inputValidation:["floatNumber"],disabled:M}),c.jsx(b,{name:"currentDemand",label:"Current Demand",inputValidation:["floatNumber"],formik:ne,disabled:M}),c.jsx(b,{name:"interest",label:"Interest",formik:ne,inputValidation:["floatNumber"],disabled:M}),c.jsx(b,{name:"totalDemand",label:"Total Demand",formik:ne,inputValidation:["floatNumber"],disabled:M}),c.jsx(b,{name:"changeConsTypeId",label:"Change in Construction Type?",placeholder:"Construction Type",formik:ne}),c.jsx(b,{name:"changeUsagesTypeId",label:"Change in Usages Type?",placeholder:"Usages Type",formik:ne}),c.jsxs("div",{children:[c.jsx(b,{type:"file",label:"Visit Document",capture:"environment",name:"document",accept:"image/*",id:"document",onChange:function(e){if(!J||!K)return e.target.value=null,void u.fire({title:"Location Service",text:"Please enable location service",icon:"warning",confirmButtonText:"Ok",reverseButtons:!0});ie(e)}}),(null==ne||null===(F=ne.errors)||void 0===F?void 0:F.document)&&c.jsx("span",{className:"text-red-500 text-xs",children:null==ne||null===(V=ne.errors)||void 0===V?void 0:V.document}),!(null!=ne&&null!==(q=ne.values)&&void 0!==q&&q.latitude)&&c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-red-500 text-xs",children:null==ne||null===(B=ne.errors)||void 0===B?void 0:B.latitude}),c.jsx("span",{className:"text-red-500 text-xs",children:null==ne||null===(G=ne.errors)||void 0===G?void 0:G.longitude})]}),(null==ne||null===(U=ne.values)||void 0===U?void 0:U.document)&&c.jsxs("div",{className:"flex justify-between",children:[c.jsx("span",{className:"text-xs",children:"Latitude: "+(null==re?void 0:re.latitude)}),c.jsx("span",{className:"text-xs",children:" Longitude: "+(null==re?void 0:re.longitude)})]})]}),c.jsx("div",{className:"mt-6",children:c.jsx(w,{name:"remark",label:"Remark",formik:ne})}),c.jsx(w,{name:"citizenComment",label:"Citizen Comment",formik:ne})]})]})}),c.jsx("div",{className:"flex justify-center",children:c.jsx(N.Button,{size:"sm",type:"submit",className:"btn btn-primary",children:"Submit"})})]})})})}}}}))}();
