!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,r,l,a,o=[],s=!0,u=!1;try{if(l=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(i=l.call(t)).done)&&(o.push(i.value),o.length!==n);s=!0);}catch(e){u=!0,r=e}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw r}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function i(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return t};var n,t={},r=Object.prototype,l=r.hasOwnProperty,a=Object.defineProperty||function(e,n,t){e[n]=t.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",d=o.toStringTag||"@@toStringTag";function c(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{c({},"")}catch(n){c=function(e,n,t){return e[n]=t}}function m(e,n,t,i){var r=n&&n.prototype instanceof x?n:x,l=Object.create(r.prototype),o=new C(i||[]);return a(l,"_invoke",{value:L(e,t,o)}),l}function v(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}t.wrap=m;var f="suspendedStart",h="suspendedYield",p="executing",y="completed",g={};function x(){}function b(){}function j(){}var w={};c(w,s,(function(){return this}));var N=Object.getPrototypeOf,D=N&&N(N(B([])));D&&D!==r&&l.call(D,s)&&(w=D);var q=j.prototype=x.prototype=Object.create(w);function O(e){["next","throw","return"].forEach((function(n){c(e,n,(function(e){return this._invoke(n,e)}))}))}function S(n,t){function i(r,a,o,s){var u=v(n[r],n,a);if("throw"!==u.type){var d=u.arg,c=d.value;return c&&"object"==e(c)&&l.call(c,"__await")?t.resolve(c.__await).then((function(e){i("next",e,o,s)}),(function(e){i("throw",e,o,s)})):t.resolve(c).then((function(e){d.value=e,o(d)}),(function(e){return i("throw",e,o,s)}))}s(u.arg)}var r;a(this,"_invoke",{value:function(e,n){function l(){return new t((function(t,r){i(e,n,t,r)}))}return r=r?r.then(l,l):l()}})}function L(e,t,i){var r=f;return function(l,a){if(r===p)throw new Error("Generator is already running");if(r===y){if("throw"===l)throw a;return{value:n,done:!0}}for(i.method=l,i.arg=a;;){var o=i.delegate;if(o){var s=k(o,i);if(s){if(s===g)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===f)throw r=y,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=p;var u=v(e,t,i);if("normal"===u.type){if(r=i.done?y:h,u.arg===g)continue;return{value:u.arg,done:i.done}}"throw"===u.type&&(r=y,i.method="throw",i.arg=u.arg)}}}function k(e,t){var i=t.method,r=e.iterator[i];if(r===n)return t.delegate=null,"throw"===i&&e.iterator.return&&(t.method="return",t.arg=n,k(e,t),"throw"===t.method)||"return"!==i&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+i+"' method")),g;var l=v(r,e.iterator,t.arg);if("throw"===l.type)return t.method="throw",t.arg=l.arg,t.delegate=null,g;var a=l.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,g):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function _(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function A(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function B(t){if(t||""===t){var i=t[s];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(l.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}throw new TypeError(e(t)+" is not iterable")}return b.prototype=j,a(q,"constructor",{value:j,configurable:!0}),a(j,"constructor",{value:b,configurable:!0}),b.displayName=c(j,d,"GeneratorFunction"),t.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===b||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,c(e,d,"GeneratorFunction")),e.prototype=Object.create(q),e},t.awrap=function(e){return{__await:e}},O(S.prototype),c(S.prototype,u,(function(){return this})),t.AsyncIterator=S,t.async=function(e,n,i,r,l){void 0===l&&(l=Promise);var a=new S(m(e,n,i,r),l);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(q),c(q,d,"Generator"),c(q,s,(function(){return this})),c(q,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var n=Object(e),t=[];for(var i in n)t.push(i);return t.reverse(),function e(){for(;t.length;){var i=t.pop();if(i in n)return e.value=i,e.done=!1,e}return e.done=!0,e}},t.values=B,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function i(i,r){return o.type="throw",o.arg=e,t.next=i,r&&(t.method="next",t.arg=n),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],o=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=l.call(a,"catchLoc"),u=l.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,n){for(var t=this.tryEntries.length-1;t>=0;--t){var i=this.tryEntries[t];if(i.tryLoc<=this.prev&&l.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=n&&n<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=e,a.arg=n,r?(this.method="next",this.next=r.finallyLoc,g):this.complete(a)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),g},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),A(t),g}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var i=t.completion;if("throw"===i.type){var r=i.arg;A(t)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,i){return this.delegate={iterator:B(e),resultName:t,nextLoc:i},"next"===this.method&&(this.arg=n),g}},t}function r(e,n,t,i,r,l,a){try{var o=e[l](a),s=o.value}catch(u){return void t(u)}o.done?n(s):Promise.resolve(s).then(i,r)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(i,l){var a=e.apply(n,t);function o(e){r(a,i,l,o,s,"next",e)}function s(e){r(a,i,l,o,s,"throw",e)}o(void 0)}))}}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(n,t,i){var r;return r=function(n,t){if("object"!=e(n)||!n)return n;var i=n[Symbol.toPrimitive];if(void 0!==i){var r=i.call(n,t||"default");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(t,"string"),(t="symbol"==e(r)?r:String(r))in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i,n}System.register(["./index-legacy-v2qFtUJU.js","./router-legacy-rigPOyFI.js","./index-legacy-3NWst4mJ.js","./formik.esm-legacy-LafwCeEO.js","./tailwind-legacy-e6PAgAmt.js","./index.esm-legacy-5u-Ffckd.js","./FormProvider-legacy-XEc5ijVo.js","./TextField-legacy-JkeAT8vG.js","./SelectField-legacy-YdIIj6Gh.js","./index-legacy-vtVAGFCF.js","./react-select.esm-legacy-EPbiJsxz.js","./OverLayLoader-legacy-p2bMjKBm.js","./reactQuery-legacy-jKPiMKrc.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-ELZmKVKq.js","./headlessui-legacy-Yu0VJXN1.js","./module-legacy-tRD-sRax.js"],(function(e,t){"use strict";var r,a,s,u,d,c,m,v,f,h,p,y,g,x,b,j,w,N,D,q,O,S,L,k;return{setters:[function(e){r=e.j,a=e.a,s=e.t,u=e.m,d=e.b,c=e.S,m=e.Q},function(e){v=e.u,f=e.f,h=e.r},function(e){p=e.P},function(e){y=e.u,g=e.F},function(e){x=e.r},function(e){b=e.c,j=e.a,w=e.f,N=e.e},function(e){D=e.F},function(e){q=e.T},function(e){O=e.S},null,function(e){S=e.T,L=e.S},function(e){k=e.O},null,null,null,null,null,null],execute:function(){function t(e){var n,t,i=e.data,l=(e.setData,e.next),a=e.tradeApplyData,o=y({enableReinitialize:!0,initialValues:i,validationSchema:b({licenseNo:j().required("Required"),firmType:j().required("Required"),ownershipType:j().required("Required")}),onSubmit:function(e){l(e)}});return r.jsx(D,{formik:o,children:r.jsxs(x.Card,{children:[r.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:r.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),r.jsxs(x.CardBody,{children:[r.jsx("div",{children:r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsx(q,{label:"License No",name:"licenseNo",formik:o,disabled:!0}),r.jsxs(O,{label:"Firm Type",name:"firmType",formik:o,isRequiredLabel:!0,children:[r.jsx("option",{value:"",children:"Firm Type"}),null==a||null===(n=a.data)||void 0===n||null===(n=n.data)||void 0===n||null===(n=n.firmTypeList)||void 0===n?void 0:n.map((function(e){return r.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.firm_type},null==e?void 0:e.id)}))]}),r.jsxs(O,{label:"Ownership Type",name:"ownershipType",formik:o,isRequiredLabel:!0,children:[r.jsx("option",{value:"",children:"Ownership Type"}),null==a||null===(t=a.data)||void 0===t||null===(t=t.data)||void 0===t||null===(t=t.ownershipTypeList)||void 0===t?void 0:t.map((function(e){return r.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.ownership_type},null==e?void 0:e.id)}))]})]})}),r.jsx("div",{className:"flex justify-end mt-4",children:r.jsx(x.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})})]})]})})}function _(e){var n,t,i,l,d,c,m=e.data,v=(e.setData,e.next),f=e.prev,h=e.tradeApplyData,p=e.natureOfBusiness,g=y({enableReinitialize:!0,initialValues:m,validationSchema:b({holdingNo:j().required("Required"),zoneId:j().required("Required"),wardNo:j().required("Required"),areaSqft:j().required("Required"),firmName:j().required("Required"),firmEstdDate:j().required("Required"),businessAddress:j().required("Required"),landmark:j().required("Required"),pincode:j().required("Required"),premisesOwner:j().required("Required"),businessDescription:j().required("Required"),natureOfBusiness:w().required("Required")}),onSubmit:function(e){v(o(o({},m),e))}}),N=g.values,_=a({api:s.tradeGetPropByHolding,config:{holdingNo:null==N?void 0:N.holdingNo},value:[null==N?void 0:N.holdingNo],options:{enabled:!1}}),A=a({api:null===(n=u)||void 0===n?void 0:n.getWardByZone,config:{zoneId:null==N?void 0:N.zoneId},value:[null==N?void 0:N.zoneId],options:{enabled:!(null==N||!N.zoneId)}});return r.jsxs(D,{formik:g,children:[(null==_?void 0:_.isLoading)&&r.jsx(k,{}),r.jsxs(x.Card,{children:[r.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:r.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Firm Details"})}),r.jsxs(x.CardBody,{children:[r.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4",children:[r.jsx(q,{label:"Holding No",name:"holdingNo",formik:g,isRequiredLabel:!0,onBlur:function(){return null==_?void 0:_.refetch()}}),r.jsxs(O,{label:"Zone",name:"zoneId",formik:g,isRequiredLabel:!0,children:[r.jsx("option",{value:"",children:"Zone"}),null==h||null===(t=h.data)||void 0===t||null===(t=t.data)||void 0===t||null===(t=t.zone)||void 0===t?void 0:t.map((function(e){return r.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.zone_name},null==e?void 0:e.id)}))]}),r.jsxs(O,{label:"Ward No",name:"wardNo",formik:g,isRequiredLabel:!0,children:[r.jsx("option",{value:"",children:"Ward No"}),null==A||null===(i=A.data)||void 0===i||null===(i=i.data)||void 0===i?void 0:i.map((function(e){return r.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.ward_name},null==e?void 0:e.id)}))]}),r.jsx(q,{type:"number",label:"Area in Sqft",name:"areaSqft",formik:g,isRequiredLabel:!0}),r.jsx(q,{disabled:!0,label:"Firm Name",name:"firmName",formik:g,isRequiredLabel:!0}),r.jsx(S,{disabled:!0,onChangeText:function(e){g.setFieldValue("firmNameMarathi",e)},value:null==g||null===(l=g.values)||void 0===l?void 0:l.firmNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],label:"Firm Name (Marathi)",name:"firmNameMarathi",formik:g,isRequiredLabel:!0}),r.jsx(q,{disabled:!0,type:"date",label:"Firm Estd. Date",name:"firmEstdDate",formik:g,isRequiredLabel:!0,max:new Date((new Date).setMonth((new Date).getMonth()+1)).toISOString().split("T")[0]}),r.jsx(q,{disabled:!0,label:"Business Address",name:"businessAddress",formik:g,isRequiredLabel:!0}),r.jsx(q,{label:"Landmark",name:"landmark",formik:g,isRequiredLabel:!0}),r.jsx(q,{type:"number",onInput:function(e){return e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,6)},label:"Pincode",name:"pincode",formik:g}),r.jsx(q,{disabled:!0,label:"Premises Owner",name:"premisesOwner",formik:g,isRequiredLabel:!0}),r.jsx(q,{label:"Business Description",name:"businessDescription",formik:g,isRequiredLabel:!0}),r.jsxs("div",{className:"col-span-2",children:[r.jsx(L,{isDisabled:null==m?void 0:m.natureOfBusiness,value:null==g||null===(d=g.values)||void 0===d?void 0:d.natureOfBusiness,name:"natureOfBusiness",options:p,className:"basic-multi-select",classNamePrefix:"select",onChange:function(e){g.setFieldValue("natureOfBusiness",e)}}),r.jsx("p",{className:"text-sm text-red-500",children:null==g||null===(c=g.errors)||void 0===c?void 0:c.natureOfBusiness})]})]}),r.jsx("hr",{className:"my-4"}),r.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[r.jsx(x.Button,{color:"gray",size:"sm",onClick:function(){return f(g.values)},children:"Back"}),r.jsx(x.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})]})}function A(e){var n=e.data,t=(e.setData,e.next),i=e.prev,l=y({enableReinitialize:!0,initialValues:n,validationSchema:b({ownerDetails:N().of(b().shape({businessOwnerName:j().required("Required"),guardianName:j().required("Required"),mobileNo:j().required("Required"),ownerNameMarathi:j().required("Required"),guardianNameMarathi:j().required("Required"),email:j().required("Required")}))}),onSubmit:function(e){t(e)}});return r.jsx(D,{formik:l,children:r.jsxs(x.Card,{children:[r.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:r.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner"})}),r.jsxs(x.CardBody,{children:[r.jsx("div",{children:r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.jsx(g,{name:"ownerDetails",children:function(e){var t,i=e.push,a=e.remove;return r.jsxs(r.Fragment,{children:[null==l||null===(t=l.values)||void 0===t||null===(t=t.ownerDetails)||void 0===t?void 0:t.map((function(e,t){var i,o,s,u,d,c,m;return r.jsxs("div",{children:[r.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-2",children:[r.jsx(q,{disabled:null==n||null===(i=n.ownerDetails)||void 0===i||null===(i=i[t])||void 0===i?void 0:i.businessOwnerName,isDynamic:!0,label:"Business Owner Name",name:"ownerDetails.".concat(t,".businessOwnerName"),formik:l,isRequiredLabel:!0}),r.jsx(q,{disabled:null==n||null===(o=n.ownerDetails)||void 0===o||null===(o=o[t])||void 0===o?void 0:o.guardianName,isDynamic:!0,label:"Guardian Name",name:"ownerDetails.".concat(t,".guardianName"),formik:l,isRequiredLabel:!0}),r.jsx(q,{type:"number",onInput:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,10)},disabled:null==n||null===(s=n.ownerDetails)||void 0===s||null===(s=s[t])||void 0===s?void 0:s.mobileNo,isDynamic:!0,label:"Mobile No",name:"ownerDetails.".concat(t,".mobileNo"),formik:l,isRequiredLabel:!0}),r.jsx(S,{disabled:null==n||null===(u=n.ownerDetails)||void 0===u||null===(u=u[t])||void 0===u?void 0:u.ownerNameMarathi,onChangeText:function(e){l.setFieldValue("ownerDetails.".concat(t,".ownerNameMarathi"),e)},value:null==l||null===(d=l.values)||void 0===d||null===(d=d.ownerDetails)||void 0===d||null===(d=d[t])||void 0===d?void 0:d.ownerNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],isDynamic:!0,label:"Owner Name Marathi",name:"ownerDetails.".concat(t,".ownerNameMarathi"),formik:l,isRequiredLabel:!0}),r.jsx(S,{disabled:null==n||null===(c=n.ownerDetails)||void 0===c||null===(c=c[t])||void 0===c?void 0:c.guardianNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],isDynamic:!0,value:null==l||null===(m=l.values)||void 0===m||null===(m=m.ownerDetails)||void 0===m||null===(m=m[t])||void 0===m?void 0:m.guardianNameMarathi,onChangeText:function(e){l.setFieldValue("ownerDetails.".concat(t,".guardianNameMarathi"),e)},label:"Guardian Name Marathi",name:"ownerDetails.".concat(t,".guardianNameMarathi"),formik:l,isRequiredLabel:!0}),r.jsx(q,{isDynamic:!0,label:"Email",name:"ownerDetails.".concat(t,".email"),formik:l,isRequiredLabel:!0}),t>0&&r.jsx("div",{className:"flex justify-end items-end col-span-2",children:r.jsx(x.Button,{color:"red",size:"sm",onClick:function(){return a(t)},children:r.jsx("small",{children:"Remove"})})})]}),r.jsx("div",{className:"border-b border-gray-300 my-4"})]},t)})),1!=(null==n?void 0:n.firmType)&&r.jsx("div",{className:"flex justify-center items-end -mt-4",children:r.jsx(x.Button,{size:"sm",onClick:function(){return i?i({businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}):null},children:"Add Owner"})})]})}})})}),r.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[r.jsx(x.Button,{color:"gray",size:"sm",onClick:function(){return i(l.values)},children:"Back"}),r.jsx(x.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})})}function C(e){var n,t,u,v,f,h,p,g,w,N,q=e.data,S=(e.setData,e.next),L=e.prev,_=e.licenseId,A=d({}),C=A.mutateAsync,B=A.isLoading,R=y({enableReinitialize:!0,initialValues:{licenseFor:q.licenseFor||"1",licenseCharge:q.licenseCharge||"",penalty:q.penalty||"",denialAmount:q.denialAmount||"",totalCharge:q.totalCharge||""},validationSchema:b().shape({licenseFor:j().required("License For is required"),licenseCharge:j().required("License Charge is required"),penalty:j().required("Penalty is required"),denialAmount:j().required("Denial Amount is required"),totalCharge:j().required("Total Charge is required")}),onSubmit:(N=l(i().mark((function e(n,t){var r,l,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setSubmitting,a={initialBusinessDetails:{applyWith:null==q?void 0:q.applyWith,noticeNo:(null==q?void 0:q.noticeNo)||"",noticeDate:(null==q?void 0:q.noticeDate)||"",firmType:(null==q?void 0:q.firmType)||"",ownershipType:(null==q?void 0:q.ownershipType)||"",licenseNo:(null==q?void 0:q.licenseNo)||"",otherFirmType:(null==q?void 0:q.otherFirmType)||""},firmDetails:{wardNo:(null==q?void 0:q.wardNo)||"",holdingNo:(null==q?void 0:q.holdingNo)||"",areaSqft:(null==q?void 0:q.areaSqft)||"",firmName:(null==q?void 0:q.firmName)||"",firmNameMarathi:(null==q?void 0:q.firmNameMarathi)||"",firmEstdDate:(null==q?void 0:q.firmEstdDate)||"",businessAddress:(null==q?void 0:q.businessAddress)||"",landmark:(null==q?void 0:q.landmark)||"",pincode:(null==q?void 0:q.pincode)||"",premisesOwner:(null==q?void 0:q.premisesOwner)||"",businessDescription:(null==q?void 0:q.businessDescription)||"",natureOfBusiness:[{name:null==q||null===(r=q.natureOfBusiness)||void 0===r?void 0:r.label,id:null==q||null===(l=q.natureOfBusiness)||void 0===l?void 0:l.value}],tocStatus:0,propDtlId:(null==q?void 0:q.propDtlId)||"",zoneId:(null==q?void 0:q.zoneId)||""},ownerDetails:null==q?void 0:q.ownerDetails,licenseDetails:{licenseFor:null==n?void 0:n.licenseFor,licenseCharge:null==n?void 0:n.licenseCharge,penalty:null==n?void 0:n.penalty,denialAmount:null==n?void 0:n.denialAmount,totalCharge:null==n?void 0:n.totalCharge,paymentMode:"NA",bankName:"",chequeNo:"",chequeDate:"",branchName:""},applicationType:"AMENDMENT",licenseId:_||""},c.fire({title:"Are you sure?",text:"You want to proceed with the payment of ₹ ".concat(null==n?void 0:n.totalCharge),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((function(e){e.isConfirmed&&E(n,a)})).catch((function(e){var n;m.error(null==e||null===(n=e.response)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.message)}));case 3:case"end":return e.stop()}}),e)}))),function(e,n){return N.apply(this,arguments)})}),E=function(){var e=l(i().mark((function e(n,t){var r,l,a,u,d,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C({api:s.tradeAddNew,data:t});case 3:null!=(l=e.sent)&&null!==(r=l.data)&&void 0!==r&&r.status?(m.success((null==l||null===(a=l.data)||void 0===a?void 0:a.message)||"Success"),S(o(o(o({},q),n),{},{message:null==l||null===(u=l.data)||void 0===u?void 0:u.message,applyLicenseId:null==l||null===(d=l.data)||void 0===d||null===(d=d.data)||void 0===d?void 0:d.applyLicenseId}))):m.error((null==l||null===(c=l.data)||void 0===c?void 0:c.message)||"Something went wrong"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m.error((null===e.t0||void 0===e.t0?void 0:e.t0.message)||"Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}();return a({api:s.tradeGetDemand,config:{licenseFor:R.values.licenseFor,firmEstdDate:null==q?void 0:q.firmEstdDate,natureOfBusiness:[{id:null===(n=q.natureOfBusiness)||void 0===n?void 0:n.value,name:null===(t=q.natureOfBusiness)||void 0===t?void 0:t.label}],areaSqft:null==q?void 0:q.areaSqft,applicationType:"RENEWAL",tocStatus:0,noticeDate:""},value:[null==R||null===(u=R.values)||void 0===u?void 0:u.licenseFor],options:{enabled:!(null==R||null===(v=R.values)||void 0===v||!v.licenseFor),onSuccess:function(e){var n,t,i,r,l;R.setFieldValue("licenseCharge",null==e||null===(n=e.data)||void 0===n?void 0:n.rate),R.setFieldValue("penalty",null==e||null===(t=e.data)||void 0===t?void 0:t.penalty),R.setFieldValue("denialAmount",(null==e||null===(i=e.data)||void 0===i?void 0:i.arear_amount)+(null==e||null===(r=e.data)||void 0===r?void 0:r.notice_amount)||0),R.setFieldValue("totalCharge",(null==e||null===(l=e.data)||void 0===l?void 0:l.total_charge)||0)}}}),r.jsxs(D,{formik:R,children:[B&&r.jsx(k,{}),r.jsxs(x.Card,{children:[r.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:r.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Payable Amount"})}),r.jsxs(x.CardBody,{children:[r.jsx("div",{children:r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.jsxs(O,{label:"License For",name:"licenseFor",formik:R,children:[r.jsx("option",{value:"",children:"Select License For"}),r.jsx("option",{value:"1",children:"1 Year"})]})})}),r.jsx("div",{className:"border-t border-gray-200 my-5"}),r.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4 ",children:[r.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Charge Applied :"}),r.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",(null==R||null===(f=R.values)||void 0===f?void 0:f.licenseCharge)||0]}),r.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Penalty :"}),r.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",(null==R||null===(h=R.values)||void 0===h?void 0:h.penalty)||0]}),r.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Denial Amount :"}),r.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",(null==R||null===(p=R.values)||void 0===p?void 0:p.denialAmount)||0]}),r.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Total Charge :"}),r.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",(null==R||null===(g=R.values)||void 0===g?void 0:g.totalCharge)||0]}),r.jsx("div",{className:"border-t border-gray-200 col-span-2 "}),r.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Payable Amount :"}),r.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",(null==R||null===(w=R.values)||void 0===w?void 0:w.totalCharge)||0]})]}),r.jsxs("div",{className:"flex justify-between mt-4",children:[r.jsx(x.Button,{color:"gray",size:"sm",onClick:function(){return L(R.values)},children:"Back"}),r.jsx(x.Button,{color:"blue",type:"submit",size:"sm",children:"Final Submit"})]})]})]})]})}function B(e){var n=e.data,t=v();return r.jsx(r.Fragment,{children:r.jsxs("div",{className:"border border-gray-200 shadow-md shadow-gray-300 justify-center p-4 sm:w-1/2 lg:w-1/3 w-full bg-white mx-auto flex flex-col h-screen top-0 left-0 right-0 bottom-0 fixed",children:[r.jsxs("div",{className:"relative overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 hover:bg-white opacity-0 transition duration-700 hover:opacity-10"}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","data-slot":"icon",className:"text-white w-24 h-24 mb-4 mt-12 bg-green-600 max-w-full h-auto mx-auto animate-wiggle rounded-full",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"})})]}),r.jsx("div",{className:"",children:r.jsxs("div",{className:"mb-2",children:[r.jsx("h3",{className:"text-2xl  text-center mb-6 text-[#40AA15] font-openSans font-semibold",children:"This Application Is Submitted."}),r.jsxs("h3",{className:"text-xl  text-center mb-2 text-gray-400 font-openSans font-semibold ",children:["Generated Application No: ",null==n?void 0:n.message]}),r.jsx("h3",{className:"text-sm  text-center mb-3 text-gray-400 font-openSans font-semibold ",children:"( Keep This application No. for future reference. You can always find your applications in)"})]})}),r.jsx("div",{className:"",children:r.jsx("div",{className:" text-center mt-8 mb-16",children:r.jsxs("button",{onClick:function(){return t("/amc-app/trade/application-details/".concat(null==n?void 0:n.applyLicenseId),{replace:!0})},className:"bg-[#1A4D8C] text-sm px-8 py-2 text-white  rounded leading-5 shadow-lg",children:[" ","View Application"]})})})]})})}e("default",(function(){var e,i,l,u,d,c=f(),m=null===(e=new URLSearchParams(null==c?void 0:c.search))||void 0===e?void 0:e.get("app-type"),v=null===(i=new URLSearchParams(null==c?void 0:c.search))||void 0===i?void 0:i.get("license-id"),y=n(h.useState([]),2),g=y[0],x=y[1],b=n(h.useState(1),2),j=b[0],w=b[1],N=n(h.useState({applyWith:"",noticeNo:"",noticeDate:"",firmType:"",ownershipType:"",licenseNo:"",otherFirmType:"",holdingNo:"",zoneId:"",wardNo:"",areaSqft:"",firmName:"",firmNameMarathi:"",firmEstdDate:"",businessAddress:"",landmark:"",pincode:"",premisesOwner:"",businessDescription:"",natureOfBusiness:null,tocStatus:0,propDtlId:"",ownerDetails:[{businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}],licenseFor:"",licenseCharge:"",penalty:"",denialAmount:"",totalCharge:"",message:"",applyLicenseId:""}),2),D=N[0],q=N[1],O=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];q(o(o({},D),e)),n||w(j+1)},S=function(e){q(o(o({},D),e)),w(j-1)},L=a({api:null===(l=s)||void 0===l?void 0:l.tradeApplyData,config:{licenseId:v,applicationType:m},value:[m,v],options:{enabled:!!v&&!!m,onSuccess:function(e){var n;q((function(n){var t,i,r,l,a,s,u,d,c,m,v,f,h,p,y,g,x;return o(o({},n),{},{ownerDetails:null==e||null===(t=e.data)||void 0===t||null===(t=t.ownerDtl)||void 0===t?void 0:t.map((function(e){return{businessOwnerName:null==e?void 0:e.owner_name,guardianName:null==e?void 0:e.guardian_name,mobileNo:null==e?void 0:e.mobile_no,ownerNameMarathi:null==e?void 0:e.owner_name_marathi,guardianNameMarathi:null==e?void 0:e.guardian_name_marathi,email:null==e?void 0:e.email_id,natureOfBusiness:null==e?void 0:e.nature_of_business}})),firmType:null==e||null===(i=e.data)||void 0===i||null===(i=i.licenceDtl)||void 0===i?void 0:i.firm_type_id,ownershipType:null==e||null===(r=e.data)||void 0===r||null===(r=r.licenceDtl)||void 0===r?void 0:r.ownership_type_id,licenseNo:null==e||null===(l=e.data)||void 0===l||null===(l=l.licenceDtl)||void 0===l?void 0:l.license_no,zoneId:null==e||null===(a=e.data)||void 0===a||null===(a=a.licenceDtl)||void 0===a?void 0:a.zone_id,wardNo:null==e||null===(s=e.data)||void 0===s||null===(s=s.licenceDtl)||void 0===s?void 0:s.ward_id,areaSqft:null==e||null===(u=e.data)||void 0===u||null===(u=u.licenceDtl)||void 0===u?void 0:u.area_in_sqft,firmName:null==e||null===(d=e.data)||void 0===d||null===(d=d.licenceDtl)||void 0===d?void 0:d.firm_name,firmNameMarathi:null==e||null===(c=e.data)||void 0===c||null===(c=c.licenceDtl)||void 0===c?void 0:c.firm_name_marathi,firmEstdDate:null==e||null===(m=e.data)||void 0===m||null===(m=m.licenceDtl)||void 0===m?void 0:m.establishment_date,businessAddress:null==e||null===(v=e.data)||void 0===v||null===(v=v.licenceDtl)||void 0===v?void 0:v.address,landmark:null==e||null===(f=e.data)||void 0===f||null===(f=f.licenceDtl)||void 0===f?void 0:f.landmark,pincode:null==e||null===(h=e.data)||void 0===h||null===(h=h.licenceDtl)||void 0===h?void 0:h.pin_code,premisesOwner:null==e||null===(p=e.data)||void 0===p||null===(p=p.licenceDtl)||void 0===p?void 0:p.premises_owner_name,businessDescription:null==e||null===(y=e.data)||void 0===y||null===(y=y.licenceDtl)||void 0===y?void 0:y.brief_firm_desc,natureOfBusiness:null==e||null===(g=e.data)||void 0===g||null===(g=g.licenceDtl)||void 0===g||null===(g=g.nature_of_bussiness)||void 0===g?void 0:g.map((function(e){return{value:null==e?void 0:e.id,label:null==e?void 0:e.trade_item}}))[0],tocStatus:null==e||null===(x=e.data)||void 0===x||null===(x=x.licenceDtl)||void 0===x?void 0:x.toc_status})})),x(null==e||null===(n=e.data)||void 0===n||null===(n=n.natureOfBusiness)||void 0===n?void 0:n.map((function(e){return{value:null==e?void 0:e.id,label:"(".concat(null==e?void 0:e.trade_code,") - ").concat(null==e?void 0:e.trade_item)}})))}}});return null!=L&&null!==(u=L.data)&&void 0!==u&&u.status?r.jsx(p,{title:"Amendment Application",children:r.jsx("div",{className:"p-4",children:{1:r.jsx(t,{data:D,setData:q,next:O,tradeApplyData:L}),2:r.jsx(_,{data:D,setData:q,next:O,prev:S,tradeApplyData:L,natureOfBusiness:g}),3:r.jsx(A,{data:D,setData:q,next:O,prev:S}),4:r.jsx(C,{data:D,setData:q,next:O,prev:S,licenseId:v}),5:r.jsx(B,{data:D})}[j]})}):r.jsx("div",{className:"flex justify-center items-center h-96 ",children:r.jsx("div",{className:"text-base font-semibold text-center text-red-900",children:null==L||null===(d=L.data)||void 0===d?void 0:d.message})})}))}}}))}();
