!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var t,r,l,a,o=[],s=!0,u=!1;try{if(l=(i=i.call(e)).next,0===n){if(Object(i)!==i)return;s=!1}else for(;!(s=(t=l.call(i)).done)&&(o.push(t.value),o.length!==n);s=!0);}catch(e){u=!0,r=e}finally{try{if(!s&&null!=i.return&&(a=i.return(),Object(a)!==a))return}finally{if(u)throw r}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return i};var n,i={},r=Object.prototype,l=r.hasOwnProperty,a=Object.defineProperty||function(e,n,i){e[n]=i.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",d=o.toStringTag||"@@toStringTag";function c(e,n,i){return Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{c({},"")}catch(n){c=function(e,n,i){return e[n]=i}}function v(e,n,i,t){var r=n&&n.prototype instanceof g?n:g,l=Object.create(r.prototype),o=new R(t||[]);return a(l,"_invoke",{value:_(e,i,o)}),l}function m(e,n,i){try{return{type:"normal",arg:e.call(n,i)}}catch(e){return{type:"throw",arg:e}}}i.wrap=v;var f="suspendedStart",p="suspendedYield",h="executing",y="completed",b={};function g(){}function x(){}function w(){}var j={};c(j,s,(function(){return this}));var N=Object.getPrototypeOf,D=N&&N(N(B([])));D&&D!==r&&l.call(D,s)&&(j=D);var O=w.prototype=g.prototype=Object.create(j);function q(e){["next","throw","return"].forEach((function(n){c(e,n,(function(e){return this._invoke(n,e)}))}))}function S(n,i){function t(r,a,o,s){var u=m(n[r],n,a);if("throw"!==u.type){var d=u.arg,c=d.value;return c&&"object"==e(c)&&l.call(c,"__await")?i.resolve(c.__await).then((function(e){t("next",e,o,s)}),(function(e){t("throw",e,o,s)})):i.resolve(c).then((function(e){d.value=e,o(d)}),(function(e){return t("throw",e,o,s)}))}s(u.arg)}var r;a(this,"_invoke",{value:function(e,n){function l(){return new i((function(i,r){t(e,n,i,r)}))}return r=r?r.then(l,l):l()}})}function _(e,i,t){var r=f;return function(l,a){if(r===h)throw new Error("Generator is already running");if(r===y){if("throw"===l)throw a;return{value:n,done:!0}}for(t.method=l,t.arg=a;;){var o=t.delegate;if(o){var s=L(o,t);if(s){if(s===b)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(r===f)throw r=y,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r=h;var u=m(e,i,t);if("normal"===u.type){if(r=t.done?y:p,u.arg===b)continue;return{value:u.arg,done:t.done}}"throw"===u.type&&(r=y,t.method="throw",t.arg=u.arg)}}}function L(e,i){var t=i.method,r=e.iterator[t];if(r===n)return i.delegate=null,"throw"===t&&e.iterator.return&&(i.method="return",i.arg=n,L(e,i),"throw"===i.method)||"return"!==t&&(i.method="throw",i.arg=new TypeError("The iterator does not provide a '"+t+"' method")),b;var l=m(r,e.iterator,i.arg);if("throw"===l.type)return i.method="throw",i.arg=l.arg,i.delegate=null,b;var a=l.arg;return a?a.done?(i[e.resultName]=a.value,i.next=e.nextLoc,"return"!==i.method&&(i.method="next",i.arg=n),i.delegate=null,b):a:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,b)}function k(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function A(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function B(i){if(i||""===i){var t=i[s];if(t)return t.call(i);if("function"==typeof i.next)return i;if(!isNaN(i.length)){var r=-1,a=function e(){for(;++r<i.length;)if(l.call(i,r))return e.value=i[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}throw new TypeError(e(i)+" is not iterable")}return x.prototype=w,a(O,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:x,configurable:!0}),x.displayName=c(w,d,"GeneratorFunction"),i.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===x||"GeneratorFunction"===(n.displayName||n.name))},i.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,c(e,d,"GeneratorFunction")),e.prototype=Object.create(O),e},i.awrap=function(e){return{__await:e}},q(S.prototype),c(S.prototype,u,(function(){return this})),i.AsyncIterator=S,i.async=function(e,n,t,r,l){void 0===l&&(l=Promise);var a=new S(v(e,n,t,r),l);return i.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},q(O),c(O,d,"Generator"),c(O,s,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),i.keys=function(e){var n=Object(e),i=[];for(var t in n)i.push(t);return i.reverse(),function e(){for(;i.length;){var t=i.pop();if(t in n)return e.value=t,e.done=!1,e}return e.done=!0,e}},i.values=B,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!e)for(var i in this)"t"===i.charAt(0)&&l.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var i=this;function t(t,r){return o.type="throw",o.arg=e,i.next=t,r&&(i.method="next",i.arg=n),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],o=a.completion;if("root"===a.tryLoc)return t("end");if(a.tryLoc<=this.prev){var s=l.call(a,"catchLoc"),u=l.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return t(a.catchLoc,!0);if(this.prev<a.finallyLoc)return t(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return t(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return t(a.finallyLoc)}}}},abrupt:function(e,n){for(var i=this.tryEntries.length-1;i>=0;--i){var t=this.tryEntries[i];if(t.tryLoc<=this.prev&&l.call(t,"finallyLoc")&&this.prev<t.finallyLoc){var r=t;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=n&&n<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=e,a.arg=n,r?(this.method="next",this.next=r.finallyLoc,b):this.complete(a)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),b},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.finallyLoc===e)return this.complete(i.completion,i.afterLoc),A(i),b}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc===e){var t=i.completion;if("throw"===t.type){var r=t.arg;A(i)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,i,t){return this.delegate={iterator:B(e),resultName:i,nextLoc:t},"next"===this.method&&(this.arg=n),b}},i}function r(e,n,i,t,r,l,a){try{var o=e[l](a),s=o.value}catch(u){return void i(u)}o.done?n(s):Promise.resolve(s).then(t,r)}function l(e){return function(){var n=this,i=arguments;return new Promise((function(t,l){var a=e.apply(n,i);function o(e){r(a,t,l,o,s,"next",e)}function s(e){r(a,t,l,o,s,"throw",e)}o(void 0)}))}}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){s(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(n,i,t){var r;return r=function(n,i){if("object"!=e(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,i||"default");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(n)}(i,"string"),(i="symbol"==e(r)?r:String(r))in n?Object.defineProperty(n,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[i]=t,n}System.register(["./index-legacy-7j04T4Xw.js","./index-legacy-zthRPTYJ.js","./formik.esm-legacy-EDyw-x_q.js","./index.esm-legacy-6umFe2Lw.js","./FormProvider-legacy-xRVePbWN.js","./TextField-legacy-y5rXDDnc.js","./SelectField-legacy-E60pKQ3a.js","./index-legacy-dl7WNW14.js","./react-select.esm-legacy-aMyZBac8.js","./OverLayLoader-legacy-pMHHacqU.js","./module-legacy-diEBkCv4.js"],(function(e,i){"use strict";var r,a,s,u,d,c,v,m,f,p,h,y,b,g,x,w,j,N,D,O,q,S,_,L;return{setters:[function(e){r=e.j,a=e.r,s=e.m,u=e.C,d=e.D,c=e.h,v=e.S,m=e.Q,f=e.a,p=e.q,h=e.f},function(e){y=e.P},function(e){b=e.u,g=e.F},function(e){x=e.c,w=e.a,j=e.f,N=e.e},function(e){D=e.F},function(e){O=e.T},function(e){q=e.S},null,function(e){S=e.T,_=e.S},function(e){L=e.O},null],execute:function(){function i(e){var n,i,t=e.data,l=(e.setData,e.next),o=e.tradeApplyData,s=b({enableReinitialize:!0,initialValues:t,validationSchema:x({licenseNo:w().required("Required"),firmType:w().required("Required"),ownershipType:w().required("Required")}),onSubmit:function(e){l(e)}});return r.jsx(D,{formik:s,children:r.jsxs(a.Card,{children:[r.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:r.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),r.jsxs(a.CardBody,{children:[r.jsx("div",{children:r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsx(O,{label:"Application Type",name:"applicationType",formik:s}),r.jsx(O,{label:"License No",name:"licenseNo",formik:s,disabled:!0}),r.jsxs(q,{label:"Firm Type",name:"firmType",formik:s,isRequiredLabel:!0,disabled:!0,children:[r.jsx("option",{value:"",children:"Firm Type"}),null==o||null===(n=o.data)||void 0===n||null===(n=n.data)||void 0===n||null===(n=n.firmTypeList)||void 0===n?void 0:n.map((function(e){return r.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.firm_type},null==e?void 0:e.id)}))]}),r.jsxs(q,{disabled:!0,label:"Ownership Type",name:"ownershipType",formik:s,isRequiredLabel:!0,children:[r.jsx("option",{value:"",children:"Ownership Type"}),null==o||null===(i=o.data)||void 0===i||null===(i=i.data)||void 0===i||null===(i=i.ownershipTypeList)||void 0===i?void 0:i.map((function(e){return r.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.ownership_type},null==e?void 0:e.id)}))]})]})}),r.jsx("div",{className:"flex justify-end mt-4",children:r.jsx(a.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})})]})]})})}function k(e){var n,i,t,l,c,v,m=e.data,f=(e.setData,e.next),p=e.prev,h=e.tradeApplyData,y=e.natureOfBusiness,g=b({enableReinitialize:!0,initialValues:m,validationSchema:x({holdingNo:w().required("Required"),zoneId:w().required("Required"),wardNo:w().required("Required"),areaSqft:w().required("Required"),firmName:w().required("Required"),firmNameMarathi:w().required("Required"),firmEstdDate:w().required("Required"),businessAddress:w().required("Required"),landmark:w().required("Required"),pincode:w().required("Required"),premisesOwner:w().required("Required"),businessDescription:w().required("Required"),natureOfBusiness:j().required("Required")}),onSubmit:function(e){f(o(o({},m),e))}}),N=g.values,k=s({api:u.tradeGetPropByHolding,config:{holdingNo:N.holdingNo},value:[N.holdingNo],options:{enabled:!1,onSuccess:function(e){var n,i,t,r,l,a,o,s,u;console.log("res",null==e||null===(n=e.data)||void 0===n?void 0:n.property),g.setFieldValue("zoneId",null==e||null===(i=e.data)||void 0===i||null===(i=i.property)||void 0===i?void 0:i.zone_mstr_id),g.setFieldValue("wardNo",null==e||null===(t=e.data)||void 0===t||null===(t=t.property)||void 0===t?void 0:t.ward_mstr_id),g.setFieldValue("areaSqft",null==e||null===(r=e.data)||void 0===r||null===(r=r.property)||void 0===r?void 0:r.area_of_plot),g.setFieldValue("businessAddress",null==e||null===(l=e.data)||void 0===l||null===(l=l.property)||void 0===l?void 0:l.prop_address),g.setFieldValue("landmark",null==e||null===(a=e.data)||void 0===a||null===(a=a.property)||void 0===a?void 0:a.landmark),g.setFieldValue("pincode",null==e||null===(o=e.data)||void 0===o||null===(o=o.property)||void 0===o?void 0:o.prop_pin_code),g.setFieldValue("premisesOwner",null==e||null===(s=e.data)||void 0===s||null===(s=s.property)||void 0===s?void 0:s.owner_name),null==g||g.setFieldValue("propDtlId",null==e||null===(u=e.data)||void 0===u||null===(u=u.property)||void 0===u?void 0:u.id)}}}),A=s({api:null===(n=d)||void 0===n?void 0:n.getWardByZone,config:{zoneId:N.zoneId},value:[N.zoneId],options:{enabled:!!N.zoneId}});return r.jsxs(D,{formik:g,children:[k.isLoading&&r.jsx(L,{}),r.jsxs(a.Card,{children:[r.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:r.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Firm Details"})}),r.jsxs(a.CardBody,{children:[r.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4",children:[r.jsx(O,{label:"Holding No",name:"holdingNo",formik:g,isRequiredLabel:!0,onBlur:function(){return k.refetch()}}),r.jsxs(q,{disabled:null==m?void 0:m.zoneId,label:"Zone",name:"zoneId",formik:g,isRequiredLabel:!0,children:[r.jsx("option",{value:"",children:"Zone"}),null==h||null===(i=h.data)||void 0===i||null===(i=i.data)||void 0===i||null===(i=i.zone)||void 0===i?void 0:i.map((function(e){return r.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.zone_name},null==e?void 0:e.id)}))]}),r.jsxs(q,{disabled:g.values.wardNo,label:"Ward No",name:"wardNo",formik:g,isRequiredLabel:!0,children:[r.jsx("option",{value:"",children:"Ward No"}),null==A||null===(t=A.data)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.map((function(e){return r.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.ward_name},null==e?void 0:e.id)}))]}),r.jsx(O,{type:"number",disabled:null==m?void 0:m.areaSqft,label:"Area in Sqft",name:"areaSqft",formik:g,isRequiredLabel:!0}),r.jsx(O,{disabled:null==m?void 0:m.firmName,label:"Firm Name",name:"firmName",formik:g,isRequiredLabel:!0}),r.jsx(S,{disabled:null==m?void 0:m.firmNameMarathi,onChangeText:function(e){g.setFieldValue("firmNameMarathi",e)},value:null==g||null===(l=g.values)||void 0===l?void 0:l.firmNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],label:"Firm Name (Marathi)",name:"firmNameMarathi",formik:g,isRequiredLabel:!0}),r.jsx(O,{disabled:null==m?void 0:m.firmEstdDate,type:"date",label:"Firm Estd. Date",name:"firmEstdDate",formik:g,isRequiredLabel:!0}),r.jsx(O,{disabled:null==m?void 0:m.businessAddress,label:"Business Address",name:"businessAddress",formik:g,isRequiredLabel:!0}),r.jsx(O,{disabled:null==m?void 0:m.landmark,label:"Landmark",name:"landmark",formik:g,isRequiredLabel:!0}),r.jsx(O,{type:"number",onInput:function(e){return e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,6)},label:"Pincode",name:"pincode",formik:g,disabled:null==m?void 0:m.pincode}),r.jsx(O,{disabled:g.values.holdingNo,label:"Premises Owner",name:"premisesOwner",formik:g,isRequiredLabel:!0}),r.jsx(O,{disabled:null==m?void 0:m.businessDescription,label:"Business Description",name:"businessDescription",formik:g,isRequiredLabel:!0}),r.jsxs("div",{className:"col-span-2",children:[r.jsx(_,{isDisabled:null==m?void 0:m.natureOfBusiness,value:null==g||null===(c=g.values)||void 0===c?void 0:c.natureOfBusiness,name:"natureOfBusiness",options:y,className:"basic-multi-select",classNamePrefix:"select",onChange:function(e){g.setFieldValue("natureOfBusiness",e)}}),r.jsx("p",{className:"text-sm text-red-500",children:null==g||null===(v=g.errors)||void 0===v?void 0:v.natureOfBusiness})]})]}),r.jsx("hr",{className:"my-4"}),r.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[r.jsx(a.Button,{color:"gray",size:"sm",onClick:function(){return p(g.values)},children:"Back"}),r.jsx(a.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})]})}function A(e){var n=e.data,i=(e.setData,e.next),t=e.prev,l=b({enableReinitialize:!0,initialValues:n,validationSchema:x({ownerDetails:N().of(x().shape({businessOwnerName:w().required("Required"),guardianName:w().required("Required"),mobileNo:w().required("Required"),ownerNameMarathi:w().required("Required"),guardianNameMarathi:w().required("Required"),email:w().required("Required")}))}),onSubmit:function(e){i(e)}});return r.jsx(D,{formik:l,children:r.jsxs(a.Card,{children:[r.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:r.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner"})}),r.jsxs(a.CardBody,{children:[r.jsx("div",{children:r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:r.jsx(g,{name:"ownerDetails",children:function(e){var i,t=e.push,o=e.remove;return r.jsxs(r.Fragment,{children:[null==l||null===(i=l.values)||void 0===i||null===(i=i.ownerDetails)||void 0===i?void 0:i.map((function(e,i){var t,s,u,d,c,v,m;return r.jsxs("div",{children:[r.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-2",children:[r.jsx(O,{disabled:null==n||null===(t=n.ownerDetails)||void 0===t||null===(t=t[i])||void 0===t?void 0:t.businessOwnerName,isDynamic:!0,label:"Business Owner Name",name:"ownerDetails.".concat(i,".businessOwnerName"),formik:l,isRequiredLabel:!0}),r.jsx(O,{disabled:null==n||null===(s=n.ownerDetails)||void 0===s||null===(s=s[i])||void 0===s?void 0:s.guardianName,isDynamic:!0,label:"Guardian Name",name:"ownerDetails.".concat(i,".guardianName"),formik:l,isRequiredLabel:!0}),r.jsx(O,{type:"number",onInput:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,10)},disabled:null==n||null===(u=n.ownerDetails)||void 0===u||null===(u=u[i])||void 0===u?void 0:u.mobileNo,isDynamic:!0,label:"Mobile No",name:"ownerDetails.".concat(i,".mobileNo"),formik:l,isRequiredLabel:!0}),r.jsx(S,{disabled:null==n||null===(d=n.ownerDetails)||void 0===d||null===(d=d[i])||void 0===d?void 0:d.ownerNameMarathi,onChangeText:function(e){l.setFieldValue("ownerDetails.".concat(i,".ownerNameMarathi"),e)},value:null==l||null===(c=l.values)||void 0===c||null===(c=c.ownerDetails)||void 0===c||null===(c=c[i])||void 0===c?void 0:c.ownerNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],isDynamic:!0,label:"Owner Name Marathi",name:"ownerDetails.".concat(i,".ownerNameMarathi"),formik:l,isRequiredLabel:!0}),r.jsx(S,{disabled:null==n||null===(v=n.ownerDetails)||void 0===v||null===(v=v[i])||void 0===v?void 0:v.guardianNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],isDynamic:!0,value:null==l||null===(m=l.values)||void 0===m||null===(m=m.ownerDetails)||void 0===m||null===(m=m[i])||void 0===m?void 0:m.guardianNameMarathi,onChangeText:function(e){l.setFieldValue("ownerDetails.".concat(i,".guardianNameMarathi"),e)},label:"Guardian Name Marathi",name:"ownerDetails.".concat(i,".guardianNameMarathi"),formik:l,isRequiredLabel:!0}),r.jsx(O,{isDynamic:!0,label:"Email",name:"ownerDetails.".concat(i,".email"),formik:l,isRequiredLabel:!0}),i>0&&r.jsx("div",{className:"flex justify-end items-end col-span-2",children:r.jsx(a.Button,{color:"red",size:"sm",onClick:function(){return o(i)},children:r.jsx("small",{children:"Remove"})})})]}),r.jsx("div",{className:"border-b border-gray-300 my-4"})]},i)})),1!=(null==n?void 0:n.firmType)&&r.jsx("div",{className:"flex justify-center items-end -mt-4",children:r.jsx(a.Button,{size:"sm",onClick:function(){return t?t({businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}):null},children:"Add Owner"})})]})}})})}),r.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[r.jsx(a.Button,{color:"gray",size:"sm",onClick:function(){return t(l.values)},children:"Back"}),r.jsx(a.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})})}function R(e){var n,i,d,f,p,h=e.data,y=(e.setData,e.next),g=e.prev,x=e.licenseId,w=c({}),j=w.mutateAsync,N=w.isLoading,O=b({enableReinitialize:!0,initialValues:{licenseFor:h.licenseFor||"1",licenseCharge:h.licenseCharge||"",penalty:h.penalty||"",denialAmount:h.denialAmount||"",totalCharge:h.totalCharge||""},onSubmit:(p=l(t().mark((function e(n,i){var r,l,a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.setSubmitting,a={initialBusinessDetails:{applyWith:null==h?void 0:h.applyWith,noticeNo:(null==h?void 0:h.noticeNo)||"",noticeDate:(null==h?void 0:h.noticeDate)||"",firmType:(null==h?void 0:h.firmType)||"",ownershipType:(null==h?void 0:h.ownershipType)||"",licenseNo:(null==h?void 0:h.licenseNo)||"",otherFirmType:(null==h?void 0:h.otherFirmType)||""},firmDetails:{wardNo:(null==h?void 0:h.wardNo)||"",holdingNo:(null==h?void 0:h.holdingNo)||"",areaSqft:(null==h?void 0:h.areaSqft)||"",firmName:(null==h?void 0:h.firmName)||"",firmNameMarathi:(null==h?void 0:h.firmNameMarathi)||"",firmEstdDate:(null==h?void 0:h.firmEstdDate)||"",businessAddress:(null==h?void 0:h.businessAddress)||"",landmark:(null==h?void 0:h.landmark)||"",pincode:(null==h?void 0:h.pincode)||"",premisesOwner:(null==h?void 0:h.premisesOwner)||"",businessDescription:(null==h?void 0:h.businessDescription)||"",natureOfBusiness:[{name:null==h||null===(r=h.natureOfBusiness)||void 0===r?void 0:r.label,id:null==h||null===(l=h.natureOfBusiness)||void 0===l?void 0:l.value}],tocStatus:0,propDtlId:(null==h?void 0:h.propDtlId)||"",zoneId:(null==h?void 0:h.zoneId)||""},ownerDetails:null==h?void 0:h.ownerDetails,licenseDetails:{licenseFor:null==n?void 0:n.licenseFor,licenseCharge:null==n?void 0:n.licenseCharge,penalty:null==n?void 0:n.penalty,denialAmount:null==n?void 0:n.denialAmount,totalCharge:null==n?void 0:n.totalCharge,paymentMode:"NA",bankName:"",chequeNo:"",chequeDate:"",branchName:""},applicationType:"SURRENDER",licenseId:x||""},v.fire({title:"Are you sure?",text:"You want to proceed with the payment of ₹ ".concat(null==n?void 0:n.totalCharge),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((function(e){e.isConfirmed&&q(n,a)})).catch((function(e){var n;m.error(null==e||null===(n=e.response)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.message)}));case 3:case"end":return e.stop()}}),e)}))),function(e,n){return p.apply(this,arguments)})}),q=function(){var e=l(t().mark((function e(n,i){var r,l,a,s,d,c;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j({api:u.tradeAddNew,data:i});case 3:null!=(l=e.sent)&&null!==(r=l.data)&&void 0!==r&&r.status?(m.success((null==l||null===(a=l.data)||void 0===a?void 0:a.message)||"Success"),y(o(o(o({},h),n),{},{message:null==l||null===(s=l.data)||void 0===s?void 0:s.message,applyLicenseId:null==l||null===(d=l.data)||void 0===d||null===(d=d.data)||void 0===d?void 0:d.applyLicenseId}))):m.error((null==l||null===(c=l.data)||void 0===c?void 0:c.message)||"Something went wrong"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m.error((null===e.t0||void 0===e.t0?void 0:e.t0.message)||"Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,i){return e.apply(this,arguments)}}();return s({api:u.tradeGetDemand,config:{licenseFor:O.values.licenseFor,firmEstdDate:null==h?void 0:h.firmEstdDate,natureOfBusiness:[{id:null===(n=h.natureOfBusiness)||void 0===n?void 0:n.value,name:null===(i=h.natureOfBusiness)||void 0===i?void 0:i.label}],areaSqft:null==h?void 0:h.areaSqft,applicationType:"RENEWAL",tocStatus:0,noticeDate:""},value:[null==O||null===(d=O.values)||void 0===d?void 0:d.licenseFor],options:{enabled:!(null==O||null===(f=O.values)||void 0===f||!f.licenseFor),onSuccess:function(e){var n,i,t,r,l,a;console.log("res",null==e||null===(n=e.data)||void 0===n?void 0:n.total_charge),O.setFieldValue("licenseCharge",null==e||null===(i=e.data)||void 0===i?void 0:i.rate),O.setFieldValue("penalty",null==e||null===(t=e.data)||void 0===t?void 0:t.penalty),O.setFieldValue("denialAmount",(null==e||null===(r=e.data)||void 0===r?void 0:r.arear_amount)+(null==e||null===(l=e.data)||void 0===l?void 0:l.notice_amount)||0),O.setFieldValue("totalCharge",(null==e||null===(a=e.data)||void 0===a?void 0:a.total_charge)||0)}}}),r.jsxs(D,{formik:O,children:[N&&r.jsx(L,{}),r.jsxs(a.Card,{children:[r.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:r.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Surrender Application"})}),r.jsxs(a.CardBody,{children:[r.jsx("div",{className:"flex justify-center",children:r.jsx("h1",{className:"text-sm font-semibold text-red-700",children:"Final Submit For Surrender Application"})}),r.jsx("div",{className:"border-t border-gray-200 my-5"}),r.jsxs("div",{className:"flex justify-between mt-4",children:[r.jsx(a.Button,{color:"gray",size:"sm",onClick:function(){return g(O.values)},children:"Back"}),r.jsx(a.Button,{color:"blue",type:"submit",size:"sm",children:"Final Submit"})]})]})]})]})}function B(e){var n=e.data,i=f();return r.jsx(r.Fragment,{children:r.jsxs("div",{className:"border border-gray-200 shadow-md shadow-gray-300 justify-center p-4 sm:w-1/2 lg:w-1/3 w-full bg-white mx-auto flex flex-col h-screen top-0 left-0 right-0 bottom-0 fixed",children:[r.jsxs("div",{className:"relative overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 hover:bg-white opacity-0 transition duration-700 hover:opacity-10"}),r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","data-slot":"icon",className:"text-white w-24 h-24 mb-4 mt-12 bg-green-600 max-w-full h-auto mx-auto animate-wiggle rounded-full",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"})})]}),r.jsx("div",{className:"",children:r.jsxs("div",{className:"mb-2",children:[r.jsx("h3",{className:"text-2xl  text-center mb-6 text-[#40AA15] font-openSans font-semibold",children:"This Application Is Submitted."}),r.jsxs("h3",{className:"text-xl  text-center mb-2 text-gray-400 font-openSans font-semibold ",children:["Generated Application No: ",null==n?void 0:n.message]}),r.jsx("h3",{className:"text-sm  text-center mb-3 text-gray-400 font-openSans font-semibold ",children:"( Keep This application No. for future reference. You can always find your applications in)"})]})}),r.jsx("div",{className:"",children:r.jsx("div",{className:" text-center mt-8 mb-16",children:r.jsxs("button",{onClick:function(){return i("/amc-app/trade/application-details/".concat(null==n?void 0:n.applyLicenseId),{replace:!0})},className:"bg-[#1A4D8C] text-sm px-8 py-2 text-white  rounded leading-5 shadow-lg",children:[" ","View Application"]})})})]})})}e("default",(function(){var e,t,l,a,d,c=p(),v=null===(e=new URLSearchParams(null==c?void 0:c.search))||void 0===e?void 0:e.get("app-type"),m=null===(t=new URLSearchParams(null==c?void 0:c.search))||void 0===t?void 0:t.get("license-id"),f=n(h.useState([]),2),b=f[0],g=f[1],x=n(h.useState(1),2),w=x[0],j=x[1],N=n(h.useState({applicationType:"",applyWith:"",noticeNo:"",noticeDate:"",firmType:"",ownershipType:"",licenseNo:"",otherFirmType:"",holdingNo:"",zoneId:"",wardNo:"",areaSqft:"",firmName:"",firmNameMarathi:"",firmEstdDate:"",businessAddress:"",landmark:"",pincode:"",premisesOwner:"",businessDescription:"",natureOfBusiness:null,tocStatus:0,propDtlId:"",ownerDetails:[{businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}],licenseFor:"",licenseCharge:"",penalty:"",denialAmount:"",totalCharge:"",message:"",applyLicenseId:""}),2),D=N[0],O=N[1],q=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];O(o(o({},D),e)),n?function(e){console.log(e)}(e):j(w+1)},S=function(e){O(o(o({},D),e)),j(w-1)},_=s({api:null===(l=u)||void 0===l?void 0:l.tradeApplyData,config:{licenseId:m,applicationType:v},value:[v,m],options:{enabled:!!m&&!!v,onSuccess:function(e){var n;O((function(n){var i,t,r,l,a,s,u,d,c,v,m,f,p,h,y,b,g,x;return o(o({},n),{},{ownerDetails:null==e||null===(i=e.data)||void 0===i||null===(i=i.ownerDtl)||void 0===i?void 0:i.map((function(e){return{businessOwnerName:null==e?void 0:e.owner_name,guardianName:null==e?void 0:e.guardian_name,mobileNo:null==e?void 0:e.mobile_no,ownerNameMarathi:null==e?void 0:e.owner_name_marathi,guardianNameMarathi:null==e?void 0:e.guardian_name_marathi,email:null==e?void 0:e.email_id,natureOfBusiness:null==e?void 0:e.nature_of_business}})),applicationType:null==e||null===(t=e.data)||void 0===t||null===(t=t.licenceDtl)||void 0===t?void 0:t.application_type,firmType:null==e||null===(r=e.data)||void 0===r||null===(r=r.licenceDtl)||void 0===r?void 0:r.firm_type_id,ownershipType:null==e||null===(l=e.data)||void 0===l||null===(l=l.licenceDtl)||void 0===l?void 0:l.ownership_type_id,licenseNo:null==e||null===(a=e.data)||void 0===a||null===(a=a.licenceDtl)||void 0===a?void 0:a.license_no,zoneId:null==e||null===(s=e.data)||void 0===s||null===(s=s.licenceDtl)||void 0===s?void 0:s.zone_id,wardNo:null==e||null===(u=e.data)||void 0===u||null===(u=u.licenceDtl)||void 0===u?void 0:u.ward_id,areaSqft:null==e||null===(d=e.data)||void 0===d||null===(d=d.licenceDtl)||void 0===d?void 0:d.area_in_sqft,firmName:null==e||null===(c=e.data)||void 0===c||null===(c=c.licenceDtl)||void 0===c?void 0:c.firm_name,firmNameMarathi:null==e||null===(v=e.data)||void 0===v||null===(v=v.licenceDtl)||void 0===v?void 0:v.firm_name_marathi,firmEstdDate:null==e||null===(m=e.data)||void 0===m||null===(m=m.licenceDtl)||void 0===m?void 0:m.establishment_date,businessAddress:null==e||null===(f=e.data)||void 0===f||null===(f=f.licenceDtl)||void 0===f?void 0:f.address,landmark:null==e||null===(p=e.data)||void 0===p||null===(p=p.licenceDtl)||void 0===p?void 0:p.landmark,pincode:null==e||null===(h=e.data)||void 0===h||null===(h=h.licenceDtl)||void 0===h?void 0:h.pin_code,premisesOwner:null==e||null===(y=e.data)||void 0===y||null===(y=y.licenceDtl)||void 0===y?void 0:y.premises_owner_name,businessDescription:null==e||null===(b=e.data)||void 0===b||null===(b=b.licenceDtl)||void 0===b?void 0:b.firm_description,natureOfBusiness:null==e||null===(g=e.data)||void 0===g||null===(g=g.licenceDtl)||void 0===g||null===(g=g.nature_of_bussiness)||void 0===g?void 0:g.map((function(e){return{value:null==e?void 0:e.id,label:null==e?void 0:e.trade_item}}))[0],tocStatus:null==e||null===(x=e.data)||void 0===x||null===(x=x.licenceDtl)||void 0===x?void 0:x.toc_status})})),g(null==e||null===(n=e.data)||void 0===n||null===(n=n.natureOfBusiness)||void 0===n?void 0:n.map((function(e){return{value:null==e?void 0:e.id,label:"(".concat(null==e?void 0:e.trade_code,") - ").concat(null==e?void 0:e.trade_item)}})))}}});return null!=_&&null!==(a=_.data)&&void 0!==a&&a.status?r.jsx(y,{title:"Surrender Application",children:r.jsx("div",{className:"p-4",children:{1:r.jsx(i,{data:D,setData:O,next:q,tradeApplyData:_}),2:r.jsx(k,{data:D,setData:O,next:q,prev:S,tradeApplyData:_,natureOfBusiness:b}),3:r.jsx(A,{data:D,setData:O,next:q,prev:S}),4:r.jsx(R,{data:D,setData:O,next:q,prev:S,licenseId:m}),5:r.jsx(B,{data:D})}[w]})}):r.jsx("div",{className:"flex justify-center items-center h-96 ",children:r.jsx("div",{className:"text-base font-semibold text-center text-red-900",children:null==_||null===(d=_.data)||void 0===d?void 0:d.message})})}))}}}))}();
