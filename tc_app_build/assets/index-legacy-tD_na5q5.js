!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,l,o=[],s=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(e){u=!0,i=e}finally{try{if(!s&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return n};var t,n={},i=Object.prototype,a=i.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",d=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(t){c=function(e,t,n){return e[t]=n}}function m(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),o=new E(r||[]);return l(a,"_invoke",{value:L(e,n,o)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=m;var v="suspendedStart",h="suspendedYield",p="executing",y="completed",x={};function g(){}function b(){}function j(){}var w={};c(w,s,(function(){return this}));var N=Object.getPrototypeOf,q=N&&N(N(F([])));q&&q!==i&&a.call(q,s)&&(w=q);var S=j.prototype=g.prototype=Object.create(w);function O(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function D(t,n){function r(i,l,o,s){var u=f(t[i],t,l);if("throw"!==u.type){var d=u.arg,c=d.value;return c&&"object"==e(c)&&a.call(c,"__await")?n.resolve(c.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):n.resolve(c).then((function(e){d.value=e,o(d)}),(function(e){return r("throw",e,o,s)}))}s(u.arg)}var i;l(this,"_invoke",{value:function(e,t){function a(){return new n((function(n,i){r(e,t,n,i)}))}return i=i?i.then(a,a):a()}})}function L(e,n,r){var i=v;return function(a,l){if(i===p)throw new Error("Generator is already running");if(i===y){if("throw"===a)throw l;return{value:t,done:!0}}for(r.method=a,r.arg=l;;){var o=r.delegate;if(o){var s=k(o,r);if(s){if(s===x)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===v)throw i=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=p;var u=f(e,n,r);if("normal"===u.type){if(i=r.done?y:h,u.arg===x)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(i=y,r.method="throw",r.arg=u.arg)}}}function k(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),x;var a=f(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,x;var l=a.arg;return l?l.done?(n[e.resultName]=l.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,x):l:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,x)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function F(n){if(n||""===n){var r=n[s];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var i=-1,l=function e(){for(;++i<n.length;)if(a.call(n,i))return e.value=n[i],e.done=!1,e;return e.value=t,e.done=!0,e};return l.next=l}}throw new TypeError(e(n)+" is not iterable")}return b.prototype=j,l(S,"constructor",{value:j,configurable:!0}),l(j,"constructor",{value:b,configurable:!0}),b.displayName=c(j,d,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,c(e,d,"GeneratorFunction")),e.prototype=Object.create(S),e},n.awrap=function(e){return{__await:e}},O(D.prototype),c(D.prototype,u,(function(){return this})),n.AsyncIterator=D,n.async=function(e,t,r,i,a){void 0===a&&(a=Promise);var l=new D(m(e,t,r,i),a);return n.isGeneratorFunction(t)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},O(S),c(S,d,"Generator"),c(S,s,(function(){return this})),c(S,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=F,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return o.type="throw",o.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var l=this.tryEntries[i],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var s=a.call(l,"catchLoc"),u=a.call(l,"finallyLoc");if(s&&u){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(s){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var l=i?i.completion:{};return l.type=e,l.arg=t,i?(this.method="next",this.next=i.finallyLoc,x):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),x},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),x}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:F(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),x}},n}function i(e,t,n,r,i,a,l){try{var o=e[a](l),s=o.value}catch(u){return void n(u)}o.done?t(s):Promise.resolve(s).then(r,i)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function o(e){i(l,r,a,o,s,"next",e)}function s(e){i(l,r,a,o,s,"throw",e)}o(void 0)}))}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(t,n,r){var i;return i=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(n,"string"),(n="symbol"==e(i)?i:String(i))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}System.register(["./index-legacy-wf7z0cRS.js","./react-legacy-B2uxfrw8.js","./index-legacy-dUenYBrB.js","./formik.esm-legacy-4K34LA0X.js","./index.esm-legacy-lBCJLnzP.js","./FormProvider-legacy-x4lzpEvm.js","./SelectField-legacy-_JYmpCEx.js","./index-legacy-NuuOs5Ko.js","./TextField-legacy-XLfqHztr.js","./react-select.esm-legacy-Viui29ZX.js","./OverLayLoader-legacy-pvkGtaRq.js","./module-legacy-HWLg1cBK.js"],(function(e,n){"use strict";var i,l,s,u,d,c,m,f,v,h,p,y,x,g,b,j,w,N,q,S,O,D,L;return{setters:[function(e){i=e.j,l=e.a,s=e.t,u=e.m,d=e.b,c=e.S,m=e.Q},function(e){f=e.e,v=e.u,h=e.r},function(e){p=e.P},function(e){y=e.u,x=e.F},function(e){g=e.c,b=e.a,j=e.f,w=e.e},function(e){N=e.F},function(e){q=e.S},null,function(e){S=e.T},function(e){O=e.T,D=e.S},function(e){L=e.O},null],execute:function(){function n(e){var t,n,r=e.data,a=(e.setData,e.next),l=e.tradeApplyData,o=y({enableReinitialize:!0,initialValues:r,validationSchema:g({applyWith:b().required("Required"),firmType:b().required("Required"),ownershipType:b().required("Required")}),onSubmit:function(e){a(e)}});return i.jsx(N,{formik:o,children:i.jsxs(f.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),i.jsxs(f.CardBody,{children:[i.jsx("div",{children:i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs(q,{label:"Apply With",name:"applyWith",formik:o,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Select"}),i.jsx("option",{value:"2",children:"New Application"})]}),i.jsxs(q,{label:"Firm Type",name:"firmType",formik:o,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Select"}),null==l||null===(t=l.data)||void 0===t||null===(t=t.data)||void 0===t||null===(t=t.firmTypeList)||void 0===t?void 0:t.map((function(e){return i.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.firm_type},null==e?void 0:e.id)}))]}),i.jsxs(q,{label:"Ownership Type",name:"ownershipType",formik:o,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Select"}),null==l||null===(n=l.data)||void 0===n||null===(n=n.data)||void 0===n||null===(n=n.ownershipTypeList)||void 0===n?void 0:n.map((function(e){return i.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.ownership_type},null==e?void 0:e.id)}))]})]})}),i.jsx("div",{className:"flex justify-end mt-4",children:i.jsx(f.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})})]})]})})}function k(e){var t,n,r,a,d,c,m,v=e.data,h=(e.setData,e.next),p=e.prev,x=e.tradeApplyData,w=e.natureOfBusiness,k=y({enableReinitialize:!0,initialValues:v,validationSchema:g({holdingNo:b().min(10).max(16).label(),zoneId:b().required("Required"),wardNo:b().required("Required"),areaSqft:b().required("Required").min(1).max(10),firmName:b().required("Required").min(2).max(500),firmNameMarathi:b().required("Required"),firmEstdDate:b().required("Required"),businessAddress:b().required("Required").min(2).max(500),landmark:b().required("Required").min(2).max(200),pincode:b().required("Required").min(6).max(6),premisesOwner:b().required("Required").min(2).max(500),businessDescription:b().required("Required").min(2).max(500),natureOfBusiness:j().required("Required")}),onSubmit:function(e){h(o(o({},v),e))}}),A=k.values,C=l({api:s.tradeGetPropByHolding,config:{holdingNo:null==A?void 0:A.holdingNo},value:[null==A?void 0:A.holdingNo],options:{enabled:!1,onSuccess:function(e){var t,n,r,i,a,l,o,s;k.setFieldValue("zoneId",null==e||null===(t=e.data)||void 0===t||null===(t=t.property)||void 0===t?void 0:t.zone_mstr_id),k.setFieldValue("wardNo",null==e||null===(n=e.data)||void 0===n||null===(n=n.property)||void 0===n?void 0:n.ward_mstr_id),k.setFieldValue("areaSqft",null==e||null===(r=e.data)||void 0===r||null===(r=r.property)||void 0===r?void 0:r.area_of_plot),k.setFieldValue("businessAddress",null==e||null===(i=e.data)||void 0===i||null===(i=i.property)||void 0===i?void 0:i.prop_address),k.setFieldValue("landmark",null==e||null===(a=e.data)||void 0===a||null===(a=a.property)||void 0===a?void 0:a.landmark),k.setFieldValue("pincode",null==e||null===(l=e.data)||void 0===l||null===(l=l.property)||void 0===l?void 0:l.prop_pin_code),k.setFieldValue("premisesOwner",null==e||null===(o=e.data)||void 0===o||null===(o=o.property)||void 0===o?void 0:o.owner_name),null==k||k.setFieldValue("propDtlId",null==e||null===(s=e.data)||void 0===s||null===(s=s.property)||void 0===s?void 0:s.id)}}}),E=l({api:null===(t=u)||void 0===t?void 0:t.getWardByZone,config:{zoneId:null==A?void 0:A.zoneId},value:[null==A?void 0:A.zoneId],options:{enabled:!(null==A||!A.zoneId)}});return i.jsxs(N,{formik:k,children:[C.isLoading&&i.jsx(L,{}),i.jsxs(f.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Firm Details"})}),i.jsxs(f.CardBody,{children:[i.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4",children:[i.jsx(S,{label:"Holding No",name:"holdingNo",formik:k,isRequiredLabel:!0,onBlur:function(){return C.refetch()}}),i.jsxs(q,{label:"Zone",name:"zoneId",formik:k,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Zone"}),null==x||null===(n=x.data)||void 0===n||null===(n=n.data)||void 0===n||null===(n=n.zone)||void 0===n?void 0:n.map((function(e){return i.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.zone_name},null==e?void 0:e.id)}))]}),i.jsxs(q,{label:"Ward No",name:"wardNo",formik:k,isRequiredLabel:!0,children:[i.jsx("option",{value:"",children:"Ward No"}),null==E||null===(r=E.data)||void 0===r||null===(r=r.data)||void 0===r?void 0:r.map((function(e){return i.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.ward_name},null==e?void 0:e.id)}))]}),i.jsx(S,{type:"number",label:"Area in Sqft",name:"areaSqft",formik:k,isRequiredLabel:!0}),i.jsx(S,{label:"Firm Name",name:"firmName",formik:k,isRequiredLabel:!0}),i.jsx(O,{onChangeText:function(e){k.setFieldValue("firmNameMarathi",e)},value:null==k||null===(a=k.values)||void 0===a?void 0:a.firmNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],label:"Firm Name (Marathi)",name:"firmNameMarathi",formik:k,isRequiredLabel:!0}),i.jsx(S,{type:"date",label:"Firm Estd. Date",name:"firmEstdDate",formik:k,isRequiredLabel:!0}),i.jsx(S,{label:"Business Address",name:"businessAddress",formik:k,isRequiredLabel:!0}),i.jsx(S,{label:"Landmark",name:"landmark",formik:k,isRequiredLabel:!0}),i.jsx(S,{label:"Pincode",name:"pincode",formik:k,type:"number",onInput:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,6)}}),i.jsx(S,{disabled:null===(d=k.values)||void 0===d?void 0:d.holdingNo,label:"Premises Owner",name:"premisesOwner",formik:k,isRequiredLabel:!0}),i.jsx(S,{label:"Business Description",name:"businessDescription",formik:k,isRequiredLabel:!0}),i.jsxs("div",{className:"col-span-2",children:[i.jsx(D,{value:null==k||null===(c=k.values)||void 0===c?void 0:c.natureOfBusiness,name:"natureOfBusiness",options:w,className:"basic-multi-select",classNamePrefix:"select",onChange:function(e){k.setFieldValue("natureOfBusiness",e)}}),i.jsx("p",{className:"text-sm text-red-500",children:null==k||null===(m=k.errors)||void 0===m?void 0:m.natureOfBusiness})]})]}),i.jsx("hr",{className:"my-4"}),i.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[i.jsx(f.Button,{color:"gray",size:"sm",onClick:function(){return p(null==k?void 0:k.values)},children:"Back"}),i.jsx(f.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})]})}function A(e){var t=e.data,n=(e.setData,e.next),r=e.prev,a=y({enableReinitialize:!0,initialValues:t,validationSchema:g({ownerDetails:w().of(g().shape({businessOwnerName:b().required("Required").min(2).max(500).label("Owner Name"),guardianName:b().required("Required").min(2).max(500).label("Guardian Name"),mobileNo:b().required("Required").min(10).max(10).label("Mobile No"),ownerNameMarathi:b().required("Required").min(2).max(500).label("Owner Name Marathi"),guardianNameMarathi:b().required("Required").min(2).max(500).label("Guardian Name Marathi"),email:b().required("Required").min(2).max(500).label("Email")}))}),onSubmit:function(e){n(e)}});return i.jsx(N,{formik:a,children:i.jsxs(f.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Owner"})}),i.jsxs(f.CardBody,{children:[i.jsx("div",{children:i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.jsx(x,{name:"ownerDetails",children:function(e){var n,r=e.push,l=e.remove;return i.jsxs(i.Fragment,{children:[null==a||null===(n=a.values)||void 0===n||null===(n=n.ownerDetails)||void 0===n?void 0:n.map((function(e,t){var n,r;return i.jsxs("div",{children:[i.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-2",children:[i.jsx(S,{isDynamic:!0,label:"Owner Name",name:"ownerDetails.".concat(t,".businessOwnerName"),formik:a,isRequiredLabel:!0}),i.jsx(S,{isDynamic:!0,label:"Guardian Name",name:"ownerDetails.".concat(t,".guardianName"),formik:a,isRequiredLabel:!0}),i.jsx(S,{type:"number",onInput:function(e){return e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,10)},isDynamic:!0,label:"Mobile No",name:"ownerDetails.".concat(t,".mobileNo"),formik:a,isRequiredLabel:!0}),i.jsx(O,{onChangeText:function(e){a.setFieldValue("ownerDetails.".concat(t,".ownerNameMarathi"),e)},value:null==a||null===(n=a.values)||void 0===n||null===(n=n.ownerDetails)||void 0===n||null===(n=n[t])||void 0===n?void 0:n.ownerNameMarathi,insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],isDynamic:!0,label:"Owner Name Marathi",name:"ownerDetails.".concat(t,".ownerNameMarathi"),formik:a,isRequiredLabel:!0}),i.jsx(O,{insertCurrentSelectionOnBlur:!0,triggerKeys:["KEY_SPACE"],isDynamic:!0,value:null==a||null===(r=a.values)||void 0===r||null===(r=r.ownerDetails)||void 0===r||null===(r=r[t])||void 0===r?void 0:r.guardianNameMarathi,onChangeText:function(e){a.setFieldValue("ownerDetails.".concat(t,".guardianNameMarathi"),e)},label:"Guardian Name Marathi",name:"ownerDetails.".concat(t,".guardianNameMarathi"),formik:a,isRequiredLabel:!0}),i.jsx(S,{isDynamic:!0,type:"email",label:"Email",name:"ownerDetails.".concat(t,".email"),formik:a,isRequiredLabel:!0}),t>0&&i.jsx("div",{className:"flex justify-end items-end col-span-2",children:i.jsx(f.Button,{color:"red",size:"sm",onClick:function(){return l(t)},children:i.jsx("small",{children:"Remove"})})})]}),i.jsx("div",{className:"border-b border-gray-300 my-4"})]},t)})),1!=(null==t?void 0:t.firmType)&&i.jsx("div",{className:"flex justify-center items-end -mt-4",children:i.jsx(f.Button,{size:"sm",onClick:function(){return r?r({businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}):null},children:"Add Owner"})})]})}})})}),i.jsxs("div",{className:"flex justify-between mt-4 gap-4",children:[i.jsx(f.Button,{color:"gray",size:"sm",onClick:function(){return r(a.values)},children:"Back"}),i.jsx(f.Button,{color:"blue",type:"submit",size:"sm",children:"Next"})]})]})]})})}function C(e){var t,n,u,v,h,p,x,j,w,S,O,D=e.data,k=(e.setData,e.next),A=e.prev,C=d({}),E=C.mutateAsync,F=C.isLoading,R=y({enableReinitialize:!0,initialValues:{licenseFor:D.licenseFor||"",licenseCharge:D.licenseCharge||"",penalty:D.penalty||"",denialAmount:D.denialAmount||"",totalCharge:D.totalCharge||""},validationSchema:g().shape({licenseFor:b().required("License For is required"),licenseCharge:b().required("License Charge is required"),penalty:b().required("Penalty is required"),denialAmount:b().required("Denial Amount is required"),totalCharge:b().required("Total Charge is required")}),onSubmit:(O=a(r().mark((function e(t,n){var i,a,l,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setSubmitting,o={initialBusinessDetails:{applyWith:null==D?void 0:D.applyWith,noticeNo:(null==D?void 0:D.noticeNo)||"",noticeDate:(null==D?void 0:D.noticeDate)||"",firmType:(null==D?void 0:D.firmType)||"",ownershipType:(null==D?void 0:D.ownershipType)||"",licenseNo:(null==D?void 0:D.licenseNo)||"",otherFirmType:(null==D?void 0:D.otherFirmType)||""},firmDetails:{wardNo:(null==D?void 0:D.wardNo)||"",holdingNo:(null==D?void 0:D.holdingNo)||"",areaSqft:(null==D?void 0:D.areaSqft)||"",firmName:(null==D?void 0:D.firmName)||"",firmNameMarathi:(null==D?void 0:D.firmNameMarathi)||"",firmEstdDate:(null==D?void 0:D.firmEstdDate)||"",businessAddress:(null==D?void 0:D.businessAddress)||"",landmark:(null==D?void 0:D.landmark)||"",pincode:(null==D?void 0:D.pincode)||"",premisesOwner:(null==D?void 0:D.premisesOwner)||"",businessDescription:(null==D?void 0:D.businessDescription)||"",natureOfBusiness:[{name:null==D||null===(i=D.natureOfBusiness)||void 0===i?void 0:i.label,id:null==D||null===(a=D.natureOfBusiness)||void 0===a?void 0:a.value}],tocStatus:0,propDtlId:(null==D?void 0:D.propDtlId)||"",zoneId:(null==D?void 0:D.zoneId)||""},ownerDetails:null==D?void 0:D.ownerDetails,licenseDetails:{licenseFor:null==t?void 0:t.licenseFor,licenseCharge:null==t?void 0:t.licenseCharge,penalty:null==t?void 0:t.penalty,denialAmount:null==t?void 0:t.denialAmount,totalCharge:null==t?void 0:t.totalCharge,paymentMode:"NA",bankName:"",chequeNo:"",chequeDate:"",branchName:""},applicationType:"NEWLICENSE"},c.fire({title:"Are you sure?",text:"You want to proceed with the payment of ₹ ".concat(null==R||null===(l=R.values)||void 0===l?void 0:l.totalCharge),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((function(e){e.isConfirmed&&B(t,o)})).catch((function(e){var t;m.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 3:case"end":return e.stop()}}),e)}))),function(e,t){return O.apply(this,arguments)})}),B=function(){var e=a(r().mark((function e(t,n){var i,a,l,u,d,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E({api:s.tradeAddNew,data:n});case 3:null!=(a=e.sent)&&null!==(i=a.data)&&void 0!==i&&i.status?(m.success((null==a||null===(l=a.data)||void 0===l?void 0:l.message)||"Application Submitted"),k(o(o(o({},D),t),{},{message:null==a||null===(u=a.data)||void 0===u?void 0:u.message,applyLicenseId:null==a||null===(d=a.data)||void 0===d||null===(d=d.data)||void 0===d?void 0:d.applyLicenseId}))):m.error((null==a||null===(c=a.data)||void 0===c?void 0:c.message)||"Something went wrong"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m.error((null===e.t0||void 0===e.t0?void 0:e.t0.message)||"Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}();return l({api:s.tradeGetDemand,config:{licenseFor:null==R||null===(t=R.values)||void 0===t?void 0:t.licenseFor,firmEstdDate:null==D?void 0:D.firmEstdDate,natureOfBusiness:[{id:null==D||null===(n=D.natureOfBusiness)||void 0===n?void 0:n.value,name:null==D||null===(u=D.natureOfBusiness)||void 0===u?void 0:u.label}],areaSqft:null==D?void 0:D.areaSqft,applicationType:"NEWLICENSE",tocStatus:0,noticeDate:""},value:[null==R||null===(v=R.values)||void 0===v?void 0:v.licenseFor],options:{enabled:!(null==R||null===(h=R.values)||void 0===h||!h.licenseFor),onSuccess:function(e){var t,n,r,i,a;R.setFieldValue("licenseCharge",null==e||null===(t=e.data)||void 0===t?void 0:t.rate),R.setFieldValue("penalty",null==e||null===(n=e.data)||void 0===n?void 0:n.penalty),R.setFieldValue("denialAmount",(null==e||null===(r=e.data)||void 0===r?void 0:r.arear_amount)+(null==e||null===(i=e.data)||void 0===i?void 0:i.notice_amount)||0),R.setFieldValue("totalCharge",(null==e||null===(a=e.data)||void 0===a?void 0:a.total_charge)||0)}}}),i.jsxs(N,{formik:R,children:[F&&i.jsx(L,{}),i.jsxs(f.Card,{children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Payable Amount"})}),i.jsxs(f.CardBody,{children:[i.jsx("div",{children:i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:i.jsxs(q,{label:"License For",name:"licenseFor",formik:R,children:[i.jsx("option",{value:"",children:"Select License For"}),i.jsx("option",{value:"1",children:"1 Year"})]})})}),i.jsx("div",{className:"border-t border-gray-200 my-5"}),i.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-4 ",children:[i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Charge Applied :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",(null==R||null===(p=R.values)||void 0===p?void 0:p.licenseCharge)||0]}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Penalty :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",(null==R||null===(x=R.values)||void 0===x?void 0:x.penalty)||0]}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Denial Amount :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",(null==R||null===(j=R.values)||void 0===j?void 0:j.denialAmount)||0]}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Total Charge :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",(null==R||null===(w=R.values)||void 0===w?void 0:w.totalCharge)||0]}),i.jsx("div",{className:"border-t border-gray-200 col-span-2 "}),i.jsx("h1",{className:"text-sm font-semibold text-gray-700",children:"Payable Amount :"}),i.jsxs("h1",{className:"text-sm font-semibold text-gray-700",children:["₹ ",(null==R||null===(S=R.values)||void 0===S?void 0:S.totalCharge)||0]})]}),i.jsxs("div",{className:"flex justify-between mt-4",children:[i.jsx(f.Button,{color:"gray",size:"sm",onClick:function(){return A(R.values)},children:"Back"}),i.jsx(f.Button,{color:"blue",type:"submit",size:"sm",children:"Final Submit"})]})]})]})]})}function E(e){var t=e.data,n=v();return i.jsx(i.Fragment,{children:i.jsxs("div",{className:"border border-gray-200 shadow-md shadow-gray-300 justify-center p-4 sm:w-1/2 lg:w-1/3 w-full bg-white mx-auto flex flex-col h-screen top-0 left-0 right-0 bottom-0 fixed",children:[i.jsxs("div",{className:"relative overflow-hidden",children:[i.jsx("div",{className:"absolute inset-0 hover:bg-white opacity-0 transition duration-700 hover:opacity-10"}),i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","data-slot":"icon",className:"text-white w-24 h-24 mb-4 mt-12 bg-green-600 max-w-full h-auto mx-auto animate-wiggle rounded-full",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"})})]}),i.jsx("div",{className:"",children:i.jsxs("div",{className:"mb-2",children:[i.jsx("h3",{className:"text-2xl  text-center mb-6 text-[#40AA15] font-openSans font-semibold",children:"This Application Is Submitted."}),i.jsxs("h3",{className:"text-xl  text-center mb-2 text-gray-400 font-openSans font-semibold ",children:["Generated Application No: ",null==t?void 0:t.message]}),i.jsx("h3",{className:"text-sm  text-center mb-3 text-gray-400 font-openSans font-semibold ",children:"( Keep This application No. for future reference. You can always find your applications in)"})]})}),i.jsx("div",{className:"",children:i.jsx("div",{className:" text-center mt-8 mb-16",children:i.jsxs("button",{onClick:function(){return n("/amc-app/trade/application-details/".concat(null==t?void 0:t.applyLicenseId),{replace:!0})},className:"bg-[#1A4D8C] text-sm px-8 py-2 text-white  rounded leading-5 shadow-lg",children:[" ","View Application"]})})})]})})}e("default",(function(){var e=t(h.useState([]),2),r=e[0],a=e[1],u=l({api:s.tradeApplyData,config:{applicationType:"NEWLICENSE"},options:{enabled:!0,onSuccess:function(e){var t;a(null==e||null===(t=e.data)||void 0===t||null===(t=t.natureOfBusiness)||void 0===t?void 0:t.map((function(e){return{value:null==e?void 0:e.id,label:"(".concat(null==e?void 0:e.trade_code,") - ").concat(null==e?void 0:e.trade_item)}})))}}}),d=t(h.useState(1),2),c=d[0],m=d[1],f=t(h.useState({applyWith:"",noticeNo:"",noticeDate:"",firmType:"",ownershipType:"",licenseNo:"",otherFirmType:"",holdingNo:"",zoneId:"",wardNo:"",areaSqft:"",firmName:"",firmNameMarathi:"",firmEstdDate:"",businessAddress:"",landmark:"",pincode:"",premisesOwner:"",businessDescription:"",natureOfBusiness:null,tocStatus:0,propDtlId:"",ownerDetails:[{businessOwnerName:"",guardianName:"",mobileNo:"",ownerNameMarathi:"",guardianNameMarathi:"",email:""}],licenseFor:"",licenseCharge:"",penalty:"",denialAmount:"",totalCharge:"",message:"",applyLicenseId:""}),2),v=f[0],y=f[1],x=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];y(o(o({},v),e)),t||m(c+1)},g=function(e){y(o(o({},v),e)),m(c-1)};return i.jsx(p,{title:"New Application Trade",children:i.jsx("div",{className:"p-4",children:{1:i.jsx(n,{data:v,setData:y,next:x,tradeApplyData:u}),2:i.jsx(k,{data:v,setData:y,next:x,prev:g,tradeApplyData:u,natureOfBusiness:r}),3:i.jsx(A,{data:v,setData:y,next:x,prev:g}),4:i.jsx(C,{data:v,setData:y,next:x,prev:g}),5:i.jsx(E,{data:v})}[c]})})}))}}}))}();
