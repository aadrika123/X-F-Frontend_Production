!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var t,r,l,a,o=[],s=!0,u=!1;try{if(l=(i=i.call(e)).next,0===n){if(Object(i)!==i)return;s=!1}else for(;!(s=(t=l.call(i)).done)&&(o.push(t.value),o.length!==n);s=!0);}catch(e){u=!0,r=e}finally{try{if(!s&&null!=i.return&&(a=i.return(),Object(a)!==a))return}finally{if(u)throw r}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return i};var n,i={},r=Object.prototype,l=r.hasOwnProperty,a=Object.defineProperty||function(e,n,i){e[n]=i.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",d=o.toStringTag||"@@toStringTag";function c(e,n,i){return Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{c({},"")}catch(n){c=function(e,n,i){return e[n]=i}}function m(e,n,i,t){var r=n&&n.prototype instanceof b?n:b,l=Object.create(r.prototype),o=new R(t||[]);return a(l,"_invoke",{value:L(e,i,o)}),l}function v(e,n,i){try{return{type:"normal",arg:e.call(n,i)}}catch(e){return{type:"throw",arg:e}}}i.wrap=m;var f="suspendedStart",h="suspendedYield",p="executing",y="completed",g={};function b(){}function x(){}function j(){}var w={};c(w,s,(function(){return this}));var N=Object.getPrototypeOf,D=N&&N(N(C([])));D&&D!==r&&l.call(D,s)&&(w=D);var q=j.prototype=b.prototype=Object.create(w);function O(e){["next","throw","return"].forEach((function(n){c(e,n,(function(e){return this._invoke(n,e)}))}))}function S(n,i){function t(r,a,o,s){var u=v(n[r],n,a);if("throw"!==u.type){var d=u.arg,c=d.value;return c&&"object"==e(c)&&l.call(c,"__await")?i.resolve(c.__await).then((function(e){t("next",e,o,s)}),(function(e){t("throw",e,o,s)})):i.resolve(c).then((function(e){d.value=e,o(d)}),(function(e){return t("throw",e,o,s)}))}s(u.arg)}var r;a(this,"_invoke",{value:function(e,n){function l(){return new i((function(i,r){t(e,n,i,r)}))}return r=r?r.then(l,l):l()}})}function L(e,i,t){var r=f;return function(l,a){if(r===p)throw new Error("Generator is already running");if(r===y){if("throw"===l)throw a;return{value:n,done:!0}}for(t.method=l,t.arg=a;;){var o=t.delegate;if(o){var s=k(o,t);if(s){if(s===g)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(r===f)throw r=y,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r=p;var u=v(e,i,t);if("normal"===u.type){if(r=t.done?y:h,u.arg===g)continue;return{value:u.arg,done:t.done}}"throw"===u.type&&(r=y,t.method="throw",t.arg=u.arg)}}}function k(e,i){var t=i.method,r=e.iterator[t];if(r===n)return i.delegate=null,"throw"===t&&e.iterator.return&&(i.method="return",i.arg=n,k(e,i),"throw"===i.method)||"return"!==t&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+t+"' method")),g;var l=v(r,e.iterator,i.arg);if("throw"===l.type)return i.method="throw",i.arg=l.arg,i.delegate=null,g;var a=l.arg;return a?a.done?(i[e.resultName]=a.value,i.next=e.nextLoc,"return"!==i.method&&(i.method="next",i.arg=n),i.delegate=null,g):a:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,g)}function _(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function A(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function C(i){if(i||""===i){var t=i[s];if(t)return t.call(i);if("function"==typeof i.next)return i;if(!isNaN(i.length)){var r=-1,a=function e(){for(;++r<i.length;)if(l.call(i,r))return e.value=i[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}throw new TypeError(e(i)+" is not iterable")}return x.prototype=j,a(q,"constructor",{value:j,configurable:!0}),a(j,"constructor",{value:x,configurable:!0}),x.displayName=c(j,d,"GeneratorFunction"),i.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===x||"GeneratorFunction"===(n.displayName||n.name))},i.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,c(e,d,"GeneratorFunction")),e.prototype=Object.create(q),e},i.awrap=function(e){return{__await:e}},O(S.prototype),c(S.prototype,u,(function(){return this})),i.AsyncIterator=S,i.async=function(e,n,t,r,l){void 0===l&&(l=Promise);var a=new S(m(e,n,t,r),l);return i.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(q),c(q,d,"Generator"),c(q,s,(function(){return this})),c(q,"toString",(function(){return"[object Generator]"})),i.keys=function(e){var n=Object(e),i=[];for(var t in n)i.push(t);return i.reverse(),function e(){for(;i.length;){var t=i.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},i.values=C,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!e)for(var i in this)"t"===i.charAt(0)&&l.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var i=this;function t(t,r){return o.type="throw",o.arg=e,i.next=t,r&&(i.method="next",i.arg=n),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],o=a.completion;if("root"===a.tryLoc)return t("end");if(a.tryLoc<=this.prev){var s=l.call(a,"catchLoc"),u=l.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);if(this.prev<a.finallyLoc)return t(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return t(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return t(a.finallyLoc)}}}},abrupt:function(e,n){for(var i=this.tryEntries.length-1;i>=0;--i){var t=this.tryEntries[i];if(t.tryLoc<=this.prev&&l.call(t,"finallyLoc")&&this.prev<t.finallyLoc){var r=t;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=n&&n<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=e,a.arg=n,r?(this.method="next",this.next=r.finallyLoc,g):this.complete(a)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),g},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),A(i),g}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc===e){var t=i.completion;if("throw"===t.type){var r=t.arg;A(i)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,i,t){return this.delegate={iterator:C(e),resultName:i,nextLoc:t},"next"===this.method&&(this.arg=n),g}},i}function r(e,n,i,t,r,l,a){try{var o=e[l](a),s=o.value}catch(u){return void i(u)}o.done?n(s):Promise.resolve(s).then(t,r)}function l(e){return function(){var n=this,i=arguments;return new Promise((function(t,l){var a=e.apply(n,i);function o(e){r(a,t,l,o,s,"next",e)}function s(e){r(a,t,l,o,s,"throw",e)}o(void 0)}))}}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){s(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(n,i,t){var r;return r=function(n,i){if("object"!=e(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,i||"default");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(n)}(i,"string"),(i="symbol"==e(r)?r:String(r))in n?Object.defineProperty(n,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[i]=t,n}System.register(["./index-legacy-wf7z0cRS.js","./react-legacy-B2uxfrw8.js","./index-legacy-dUenYBrB.js","./formik.esm-legacy-4K34LA0X.js","./index.esm-legacy-lBCJLnzP.js","./FormProvider-legacy-x4lzpEvm.js","./TextField-legacy-XLfqHztr.js","./SelectField-legacy-_JYmpCEx.js","./index-legacy-NuuOs5Ko.js","./react-select.esm-legacy-Viui29ZX.js","./OverLayLoader-legacy-pvkGtaRq.js","./module-legacy-HWLg1cBK.js"],(function(e,i){"use strict";var r,a,s,u,d,c,m,v,f,h,p,y,g,b,x,j,w,N,D,q,O,S,L,k;return{setters:[function(e){r=e.j,a=e.a,s=e.t,u=e.m,d=e.b,c=e.S,m=e.Q},function(e){v=e.e,f=e.u,h=e.f,p=e.r},function(e){y=e.P},function(e){g=e.u,b=e.F},function(e){x=e.c,j=e.a,w=e.f,N=e.e},function(e){D=e.F},function(e){q=e.T},function(e){O=e.S},null,function(e){S=e.T,L=e.S},function(e){k=e.O},null],execute:function(){function i(e){var n,i,t=e.data,l=(e.setData,e.next),a=e.tradeApplyData,o=g({enableReinitialize:!0,initialValues:t,validationSchema:x({licenseNo:j().required("Required"),firmType:j().required("Required"),ownershipType:j().required("Required")}),onSubmit:function(e){l(e)}});return r.jsx(D,{formik:o,children:r.jsxs(v.Card,{children:[r.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:r.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),r.jsxs(v.CardBody,{children:[r.jsx("div",{children:r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsx(q,{label:"License No",name:"licenseNo",formik:o,disabled:!0}),r.jsxs(O,{label:"Firm Type",name:"firmType",formik:o,isRequiredLabel:!0,disabled:!0,children:[r.jsx("option",{value:"",children:"Firm Type"}),null==a||null===(n=a.data)||void 0===n||null===(n=n.data)||void 0===n||null===(n=n.firmTypeList)||void 0===n?void 0:n.map((function(e){return r.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.firm_type},null==e?void 0:e.id)}))]}),r.jsxs(O,{disabled:!0,label:"Ownership Type",name:"ownershipType",formik:o,isRequiredLabel:!0,children:[r.jsx("option",{value:"",children:"Ownership Type"}),null==a||null===(i=a.data)||void 0===i||null===(i=i.data)||void 0===i||null===(i=i.ownershipTypeList)||void 0===i?void 0:i.map((function(e){return r.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.ownership_type},null==e?void 0:e.id)}))]})]})}),r.jsx("div",{className:"flex justify-end mt-4",children:r.jsx(v.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})})]})]})})}function _(e){var n,i,t,l,d,c,m,f,h=e.data,p=(e.setData,e.next),y=e.prev,b=e.tradeApplyData,N=e.natureOfBusiness,_=g({enableReinitialize:!0,initialValues:h,validationSchema:x({holdingNo:j().required("Required"),zoneId:j().required("Required"),wardNo:j().required("Required"),areaSqft:j().required("Required"),firmName:j().required("Required"),firmNameMarathi:j().required("Required"),firmEstdDate:j().required("Required"),businessAddress:j().required("Required"),landmark:j().required("Required"),pincode:j().required("Required"),premisesOwner:j().required("Required"),businessDescription:j().required("Required"),natureOfBusiness:w().required("Required")}),onSubmit:function(e){p(o(o({},h),e))}}),A=_.values,R=a({api:s.tradeGetPropByHolding,config:{holdingNo:null==A?void 0:A.holdingNo},value:[null==A?void 0:A.holdingNo],options:{enabled:!1}}),C=a({api:null===(n=u)||void 0===n?void 0:n.getWardByZone,config:{zoneId:null==A?void 0:A.zoneId},value:[null==A?void 0:A.zoneId],options:{enabled:!(null==A||!A.zoneId)}});return r.jsxs(D,{formik:_,children:[(null==R?void 0:R.isLoading)&&r.jsx(k,{}),r.jsxs(v.Card,{children:[r.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:r.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Firm Details"})}),r.jsxs(v.CardBody,{children:[r.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4",children:[r.jsx(q,{label:"Holding No",name:"holdingNo",formik:_,isRequiredLabel:!0,onBlur:function(){return R.refetch()}}),r.jsxs(O,{disabled:null==h?void 0:h.zoneId,label:"Zone",name:"zoneId",formik:_,isRequiredLabel:!0,children:[r.jsx("option",{value:"",children:"Zone"}),null==b||null===(i=b.data)||void 0===i||null===(i=i.data)||void 0===i||null===(i=i.zone)||void 0===i?void 0:i.map((function(e){return r.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.zone_name},null==e?void 0:e.id)}))]}),r.jsxs(O,{disabled:null===(t=_.values)||void 0===t?void 0:t.wardNo,label:"Ward No",name:"wardNo",formik:_,isRequiredLabel:!0,children:[r.jsx("option",{value:"",children:"Ward No"}),null==C||null===(l=C.data)||void 0===l||null===(l=l.data)||void 0===l?void 0:l.map((function(e){return r.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.ward_name},null==e?void 0:e.id)}))]}),r.jsx(q,{type:"number",disabled:null==h?void 0:h.areaSqft,label:"Area in Sqft",name:"areaSqft",formik:_,isRequiredLabel:!0}),r.jsx(q,{disabled:null==h?void 0:h.firmName,label:"Firm Name",name:"firmName",formik:_,isRequiredLabel:!0}),r.jsx(S,{disabled:null==h?void 0:h.firmNameMarathi,onChangeText:function(e){_.setFieldValue("firmNameMarathi",e)},value:null==_||null===(d=_.values)||void 0===d?void 0:d.firmNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],label:"Firm Name (Marathi)",name:"firmNameMarathi",formik:_,isRequiredLabel:!0}),r.jsx(q,{disabled:null==h?void 0:h.firmEstdDate,type:"date",label:"Firm Estd. Date",name:"firmEstdDate",formik:_,isRequiredLabel:!0}),r.jsx(q,{disabled:null==h?void 0:h.businessAddress,label:"Business Address",name:"businessAddress",formik:_,isRequiredLabel:!0}),r.jsx(q,{disabled:null==h?void 0:h.landmark,label:"Landmark",name:"landmark",formik:_,isRequiredLabel:!0}),r.jsx(q,{type:"number",onInput:function(e){return e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,6)},label:"Pincode",name:"pincode",formik:_,disabled:null==h?void 0:h.pincode}),r.jsx(q,{disabled:null===(c=_.values)||void 0===c?void 0:c.holdingNo,label:"Premises Owner",name:"premisesOwner",formik:_,isRequiredLabel:!0}),r.jsx(q,{disabled:null==h?void 0:h.businessDescription,label:"Business Description",name:"businessDescription",formik:_,isRequiredLabel:!0}),r.jsxs("div",{className:"col-span-2",children:[r.jsx(L,{isDisabled:null==h?void 0:h.natureOfBusiness,value:null==_||null===(m=_.values)||void 0===m?void 0:m.natureOfBusiness,name:"natureOfBusiness",options:N,className:"basic-multi-select",classNamePrefix:"select",onChange:function(e){_.setFieldValue("natureOfBusiness",e)}}),r.jsx("p",{className:"text-sm text-red-500",children:null==_||null===(f=_.errors)||void 0===f?void 0:f.natureOfBusiness})]})]}),r.jsx("hr",{className:"my-4"}),r.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[r.jsx(v.Button,{color:"gray",size:"sm",onClick:function(){return y(_.values)},children:"Back"}),r.jsx(v.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})]})}function A(e){var n=e.data,i=(e.setData,e.next),t=e.prev,l=g({enableReinitialize:!0,initialValues:n,validationSchema:x({ownerDetails:N().of(x().shape({businessOwnerName:j().required("Required"),guardianName:j().required("Required"),mobileNo:j().required("Required"),ownerNameMarathi:j().required("Required"),guardianNameMarathi:j().required("Required"),email:j().required("Required")}))}),onSubmit:function(e){i(e)}});return r.jsx(D,{formik:l,children:r.jsxs(v.Card,{children:[r.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:r.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner"})}),r.jsxs(v.CardBody,{children:[r.jsx("div",{children:r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.jsx(b,{name:"ownerDetails",children:function(e){var i,t=e.push,a=e.remove;return r.jsxs(r.Fragment,{children:[null==l||null===(i=l.values)||void 0===i||null===(i=i.ownerDetails)||void 0===i?void 0:i.map((function(e,i){var t,o,s,u,d,c,m;return r.jsxs("div",{children:[r.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-2",children:[r.jsx(q,{disabled:null==n||null===(t=n.ownerDetails)||void 0===t||null===(t=t[i])||void 0===t?void 0:t.businessOwnerName,isDynamic:!0,label:"Business Owner Name",name:"ownerDetails.".concat(i,".businessOwnerName"),formik:l,isRequiredLabel:!0}),r.jsx(q,{disabled:null==n||null===(o=n.ownerDetails)||void 0===o||null===(o=o[i])||void 0===o?void 0:o.guardianName,isDynamic:!0,label:"Guardian Name",name:"ownerDetails.".concat(i,".guardianName"),formik:l,isRequiredLabel:!0}),r.jsx(q,{type:"number",onInput:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,10)},disabled:null==n||null===(s=n.ownerDetails)||void 0===s||null===(s=s[i])||void 0===s?void 0:s.mobileNo,isDynamic:!0,label:"Mobile No",name:"ownerDetails.".concat(i,".mobileNo"),formik:l,isRequiredLabel:!0}),r.jsx(S,{disabled:null==n||null===(u=n.ownerDetails)||void 0===u||null===(u=u[i])||void 0===u?void 0:u.ownerNameMarathi,onChangeText:function(e){l.setFieldValue("ownerDetails.".concat(i,".ownerNameMarathi"),e)},value:null==l||null===(d=l.values)||void 0===d||null===(d=d.ownerDetails)||void 0===d||null===(d=d[i])||void 0===d?void 0:d.ownerNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],isDynamic:!0,label:"Owner Name Marathi",name:"ownerDetails.".concat(i,".ownerNameMarathi"),formik:l,isRequiredLabel:!0}),r.jsx(S,{disabled:null==n||null===(c=n.ownerDetails)||void 0===c||null===(c=c[i])||void 0===c?void 0:c.guardianNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],isDynamic:!0,value:null==l||null===(m=l.values)||void 0===m||null===(m=m.ownerDetails)||void 0===m||null===(m=m[i])||void 0===m?void 0:m.guardianNameMarathi,onChangeText:function(e){l.setFieldValue("ownerDetails.".concat(i,".guardianNameMarathi"),e)},label:"Guardian Name Marathi",name:"ownerDetails.".concat(i,".guardianNameMarathi"),formik:l,isRequiredLabel:!0}),r.jsx(q,{isDynamic:!0,label:"Email",name:"ownerDetails.".concat(i,".email"),formik:l,isRequiredLabel:!0}),i>0&&r.jsx("div",{className:"flex justify-end items-end col-span-2",children:r.jsx(v.Button,{color:"red",size:"sm",onClick:function(){return a(i)},children:r.jsx("small",{children:"Remove"})})})]}),r.jsx("div",{className:"border-b border-gray-300 my-4"})]},i)})),1!=(null==n?void 0:n.firmType)&&r.jsx("div",{className:"flex justify-center items-end -mt-4",children:r.jsx(v.Button,{size:"sm",onClick:function(){return t?t({businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}):null},children:"Add Owner"})})]})}})})}),r.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[r.jsx(v.Button,{color:"gray",size:"sm",onClick:function(){return t(l.values)},children:"Back"}),r.jsx(v.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})})}function R(e){var n,i,u,f,h,p,y,b,w,N,q=e.data,S=(e.setData,e.next),L=e.prev,_=e.licenseId,A=d({}),R=A.mutateAsync,C=A.isLoading,B=g({enableReinitialize:!0,initialValues:{licenseFor:q.licenseFor||"1",licenseCharge:q.licenseCharge||"",penalty:q.penalty||"",denialAmount:q.denialAmount||"",totalCharge:q.totalCharge||""},validationSchema:x().shape({licenseFor:j().required("License For is required"),licenseCharge:j().required("License Charge is required"),penalty:j().required("Penalty is required"),denialAmount:j().required("Denial Amount is required"),totalCharge:j().required("Total Charge is required")}),onSubmit:(N=l(t().mark((function e(n,i){var r,l,a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.setSubmitting,a={initialBusinessDetails:{applyWith:null==q?void 0:q.applyWith,noticeNo:(null==q?void 0:q.noticeNo)||"",noticeDate:(null==q?void 0:q.noticeDate)||"",firmType:(null==q?void 0:q.firmType)||"",ownershipType:(null==q?void 0:q.ownershipType)||"",licenseNo:(null==q?void 0:q.licenseNo)||"",otherFirmType:(null==q?void 0:q.otherFirmType)||""},firmDetails:{wardNo:(null==q?void 0:q.wardNo)||"",holdingNo:(null==q?void 0:q.holdingNo)||"",areaSqft:(null==q?void 0:q.areaSqft)||"",firmName:(null==q?void 0:q.firmName)||"",firmNameMarathi:(null==q?void 0:q.firmNameMarathi)||"",firmEstdDate:(null==q?void 0:q.firmEstdDate)||"",businessAddress:(null==q?void 0:q.businessAddress)||"",landmark:(null==q?void 0:q.landmark)||"",pincode:(null==q?void 0:q.pincode)||"",premisesOwner:(null==q?void 0:q.premisesOwner)||"",businessDescription:(null==q?void 0:q.businessDescription)||"",natureOfBusiness:[{name:null==q||null===(r=q.natureOfBusiness)||void 0===r?void 0:r.label,id:null==q||null===(l=q.natureOfBusiness)||void 0===l?void 0:l.value}],tocStatus:0,propDtlId:(null==q?void 0:q.propDtlId)||"",zoneId:(null==q?void 0:q.zoneId)||""},ownerDetails:null==q?void 0:q.ownerDetails,licenseDetails:{licenseFor:null==n?void 0:n.licenseFor,licenseCharge:null==n?void 0:n.licenseCharge,penalty:null==n?void 0:n.penalty,denialAmount:null==n?void 0:n.denialAmount,totalCharge:null==n?void 0:n.totalCharge,paymentMode:"NA",bankName:"",chequeNo:"",chequeDate:"",branchName:""},applicationType:"RENEWAL",licenseId:_||""},c.fire({title:"Are you sure?",text:"You want to proceed with the payment of ₹ ".concat(null==n?void 0:n.totalCharge),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((function(e){e.isConfirmed&&E(n,a)})).catch((function(e){var n;m.error(null==e||null===(n=e.response)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.message)}));case 3:case"end":return e.stop()}}),e)}))),function(e,n){return N.apply(this,arguments)})}),E=function(){var e=l(t().mark((function e(n,i){var r,l,a,u,d,c;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R({api:s.tradeAddNew,data:i});case 3:null!=(l=e.sent)&&null!==(r=l.data)&&void 0!==r&&r.status?(m.success((null==l||null===(a=l.data)||void 0===a?void 0:a.message)||"Success"),S(o(o(o({},q),n),{},{message:null==l||null===(u=l.data)||void 0===u?void 0:u.message,applyLicenseId:null==l||null===(d=l.data)||void 0===d||null===(d=d.data)||void 0===d?void 0:d.applyLicenseId}))):m.error((null==l||null===(c=l.data)||void 0===c?void 0:c.message)||"Something went wrong"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m.error((null===e.t0||void 0===e.t0?void 0:e.t0.message)||"Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,i){return e.apply(this,arguments)}}();return a({api:s.tradeGetDemand,config:{licenseFor:B.values.licenseFor,firmEstdDate:null==q?void 0:q.firmEstdDate,natureOfBusiness:[{id:null===(n=q.natureOfBusiness)||void 0===n?void 0:n.value,name:null===(i=q.natureOfBusiness)||void 0===i?void 0:i.label}],areaSqft:null==q?void 0:q.areaSqft,applicationType:"RENEWAL",tocStatus:0,noticeDate:""},value:[null==B||null===(u=B.values)||void 0===u?void 0:u.licenseFor],options:{enabled:!(null==B||null===(f=B.values)||void 0===f||!f.licenseFor),onSuccess:function(e){var n,i,t,r,l;B.setFieldValue("licenseCharge",null==e||null===(n=e.data)||void 0===n?void 0:n.rate),B.setFieldValue("penalty",null==e||null===(i=e.data)||void 0===i?void 0:i.penalty),B.setFieldValue("denialAmount",(null==e||null===(t=e.data)||void 0===t?void 0:t.arear_amount)+(null==e||null===(r=e.data)||void 0===r?void 0:r.notice_amount)||0),B.setFieldValue("totalCharge",(null==e||null===(l=e.data)||void 0===l?void 0:l.total_charge)||0)}}}),r.jsxs(D,{formik:B,children:[C&&r.jsx(k,{}),r.jsxs(v.Card,{children:[r.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:r.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Payable Amount"})}),r.jsxs(v.CardBody,{children:[r.jsx("div",{children:r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.jsxs(O,{label:"License For",name:"licenseFor",formik:B,children:[r.jsx("option",{value:"",children:"Select License For"}),r.jsx("option",{value:"1",children:"1 Year"})]})})}),r.jsx("div",{className:"border-t border-gray-200 my-5"}),r.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4 ",children:[r.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Charge Applied :"}),r.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",(null==B||null===(h=B.values)||void 0===h?void 0:h.licenseCharge)||0]}),r.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Penalty :"}),r.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",(null==B||null===(p=B.values)||void 0===p?void 0:p.penalty)||0]}),r.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Denial Amount :"}),r.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",(null==B||null===(y=B.values)||void 0===y?void 0:y.denialAmount)||0]}),r.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Total Charge :"}),r.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",(null==B||null===(b=B.values)||void 0===b?void 0:b.totalCharge)||0]}),r.jsx("div",{className:"border-t border-gray-200 col-span-2 "}),r.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Payable Amount :"}),r.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",(null==B||null===(w=B.values)||void 0===w?void 0:w.totalCharge)||0]})]}),r.jsxs("div",{className:"flex justify-between mt-4",children:[r.jsx(v.Button,{color:"gray",size:"sm",onClick:function(){return L(B.values)},children:"Back"}),r.jsx(v.Button,{color:"blue",type:"submit",size:"sm",children:"Final Submit"})]})]})]})]})}function C(e){var n=e.data,i=f();return r.jsx(r.Fragment,{children:r.jsxs("div",{className:"border border-gray-200 shadow-md shadow-gray-300 justify-center p-4 sm:w-1/2 lg:w-1/3 w-full bg-white mx-auto flex flex-col h-screen top-0 left-0 right-0 bottom-0 fixed",children:[r.jsxs("div",{className:"relative overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 hover:bg-white opacity-0 transition duration-700 hover:opacity-10"}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","data-slot":"icon",className:"text-white w-24 h-24 mb-4 mt-12 bg-green-600 max-w-full h-auto mx-auto animate-wiggle rounded-full",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"})})]}),r.jsx("div",{className:"",children:r.jsxs("div",{className:"mb-2",children:[r.jsx("h3",{className:"text-2xl  text-center mb-6 text-[#40AA15] font-openSans font-semibold",children:"This Application Is Submitted."}),r.jsxs("h3",{className:"text-xl  text-center mb-2 text-gray-400 font-openSans font-semibold ",children:["Generated Application No: ",null==n?void 0:n.message]}),r.jsx("h3",{className:"text-sm  text-center mb-3 text-gray-400 font-openSans font-semibold ",children:"( Keep This application No. for future reference. You can always find your applications in)"})]})}),r.jsx("div",{className:"",children:r.jsx("div",{className:" text-center mt-8 mb-16",children:r.jsxs("button",{onClick:function(){return i("/amc-app/trade/application-details/".concat(null==n?void 0:n.applyLicenseId),{replace:!0})},className:"bg-[#1A4D8C] text-sm px-8 py-2 text-white  rounded leading-5 shadow-lg",children:[" ","View Application"]})})})]})})}e("default",(function(){var e,t,l,u,d,c=h(),m=null===(e=new URLSearchParams(null==c?void 0:c.search))||void 0===e?void 0:e.get("app-type"),v=null===(t=new URLSearchParams(null==c?void 0:c.search))||void 0===t?void 0:t.get("license-id"),f=n(p.useState([]),2),g=f[0],b=f[1],x=n(p.useState(1),2),j=x[0],w=x[1],N=n(p.useState({applyWith:"",noticeNo:"",noticeDate:"",firmType:"",ownershipType:"",licenseNo:"",otherFirmType:"",holdingNo:"",zoneId:"",wardNo:"",areaSqft:"",firmName:"",firmNameMarathi:"",firmEstdDate:"",businessAddress:"",landmark:"",pincode:"",premisesOwner:"",businessDescription:"",natureOfBusiness:null,tocStatus:0,propDtlId:"",ownerDetails:[{businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}],licenseFor:"",licenseCharge:"",penalty:"",denialAmount:"",totalCharge:"",message:"",applyLicenseId:""}),2),D=N[0],q=N[1],O=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];q(o(o({},D),e)),n||w(j+1)},S=function(e){q(o(o({},D),e)),w(j-1)},L=a({api:null===(l=s)||void 0===l?void 0:l.tradeApplyData,config:{licenseId:v,applicationType:m},value:[m,v],options:{enabled:!!v&&!!m,onSuccess:function(e){var n;q((function(n){var i,t,r,l,a,s,u,d,c,m,v,f,h,p,y,g,b;return o(o({},n),{},{ownerDetails:null==e||null===(i=e.data)||void 0===i||null===(i=i.ownerDtl)||void 0===i?void 0:i.map((function(e){return{businessOwnerName:null==e?void 0:e.owner_name,guardianName:null==e?void 0:e.guardian_name,mobileNo:null==e?void 0:e.mobile_no,ownerNameMarathi:null==e?void 0:e.owner_name_marathi,guardianNameMarathi:null==e?void 0:e.guardian_name_marathi,email:null==e?void 0:e.email_id,natureOfBusiness:null==e?void 0:e.nature_of_business}})),firmType:null==e||null===(t=e.data)||void 0===t||null===(t=t.licenceDtl)||void 0===t?void 0:t.firm_type_id,ownershipType:null==e||null===(r=e.data)||void 0===r||null===(r=r.licenceDtl)||void 0===r?void 0:r.ownership_type_id,licenseNo:null==e||null===(l=e.data)||void 0===l||null===(l=l.licenceDtl)||void 0===l?void 0:l.license_no,zoneId:null==e||null===(a=e.data)||void 0===a||null===(a=a.licenceDtl)||void 0===a?void 0:a.zone_id,wardNo:null==e||null===(s=e.data)||void 0===s||null===(s=s.licenceDtl)||void 0===s?void 0:s.ward_id,areaSqft:null==e||null===(u=e.data)||void 0===u||null===(u=u.licenceDtl)||void 0===u?void 0:u.area_in_sqft,firmName:null==e||null===(d=e.data)||void 0===d||null===(d=d.licenceDtl)||void 0===d?void 0:d.firm_name,firmNameMarathi:null==e||null===(c=e.data)||void 0===c||null===(c=c.licenceDtl)||void 0===c?void 0:c.firm_name_marathi,firmEstdDate:null==e||null===(m=e.data)||void 0===m||null===(m=m.licenceDtl)||void 0===m?void 0:m.establishment_date,businessAddress:null==e||null===(v=e.data)||void 0===v||null===(v=v.licenceDtl)||void 0===v?void 0:v.address,landmark:null==e||null===(f=e.data)||void 0===f||null===(f=f.licenceDtl)||void 0===f?void 0:f.landmark,pincode:null==e||null===(h=e.data)||void 0===h||null===(h=h.licenceDtl)||void 0===h?void 0:h.pin_code,premisesOwner:null==e||null===(p=e.data)||void 0===p||null===(p=p.licenceDtl)||void 0===p?void 0:p.premises_owner_name,businessDescription:null==e||null===(y=e.data)||void 0===y||null===(y=y.licenceDtl)||void 0===y?void 0:y.firm_description,natureOfBusiness:null==e||null===(g=e.data)||void 0===g||null===(g=g.licenceDtl)||void 0===g||null===(g=g.nature_of_bussiness)||void 0===g?void 0:g.map((function(e){return{value:null==e?void 0:e.id,label:null==e?void 0:e.trade_item}}))[0],tocStatus:null==e||null===(b=e.data)||void 0===b||null===(b=b.licenceDtl)||void 0===b?void 0:b.toc_status})})),b(null==e||null===(n=e.data)||void 0===n||null===(n=n.natureOfBusiness)||void 0===n?void 0:n.map((function(e){return{value:null==e?void 0:e.id,label:"(".concat(null==e?void 0:e.trade_code,") - ").concat(null==e?void 0:e.trade_item)}})))}}});return null!=L&&null!==(u=L.data)&&void 0!==u&&u.status?r.jsx(y,{title:"Renewal Application",children:r.jsx("div",{className:"p-4",children:{1:r.jsx(i,{data:D,setData:q,next:O,tradeApplyData:L}),2:r.jsx(_,{data:D,setData:q,next:O,prev:S,tradeApplyData:L,natureOfBusiness:g}),3:r.jsx(A,{data:D,setData:q,next:O,prev:S}),4:r.jsx(R,{data:D,setData:q,next:O,prev:S,licenseId:v}),5:r.jsx(C,{data:D})}[j]})}):r.jsx("div",{className:"flex justify-center items-center h-96 ",children:r.jsx("div",{className:"text-base font-semibold text-center text-red-900",children:null==L||null===(d=L.data)||void 0===d?void 0:d.message})})}))}}}))}();
