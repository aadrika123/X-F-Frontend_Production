!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o,a,l=[],s=!0,u=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(l.push(n.value),l.length!==e);s=!0);}catch(t){u=!0,i=t}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw i}}return l}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return r};var e,r={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},l="function"==typeof Symbol?Symbol:{},s=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",c=l.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(e){d=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),l=new A(n||[]);return a(o,"_invoke",{value:L(t,r,l)}),o}function m(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var h="suspendedStart",v="suspendedYield",p="executing",y="completed",b={};function g(){}function x(){}function w(){}var j={};d(j,s,(function(){return this}));var P=Object.getPrototypeOf,S=P&&P(P(_([])));S&&S!==i&&o.call(S,s)&&(j=S);var O=w.prototype=g.prototype=Object.create(j);function E(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,r){function n(i,a,l,s){var u=m(e[i],e,a);if("throw"!==u.type){var c=u.arg,d=c.value;return d&&"object"==t(d)&&o.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,l,s)}),(function(t){n("throw",t,l,s)})):r.resolve(d).then((function(t){c.value=t,l(c)}),(function(t){return n("throw",t,l,s)}))}s(u.arg)}var i;a(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,i){n(t,e,r,i)}))}return i=i?i.then(o,o):o()}})}function L(t,r,n){var i=h;return function(o,a){if(i===p)throw new Error("Generator is already running");if(i===y){if("throw"===o)throw a;return{value:e,done:!0}}for(n.method=o,n.arg=a;;){var l=n.delegate;if(l){var s=T(l,n);if(s){if(s===b)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=p;var u=m(t,r,n);if("normal"===u.type){if(i=n.done?y:v,u.arg===b)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=y,n.method="throw",n.arg=u.arg)}}}function T(t,r){var n=r.method,i=t.iterator[n];if(i===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,T(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var o=m(i,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function _(r){if(r||""===r){var n=r[s];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,a=function t(){for(;++i<r.length;)if(o.call(r,i))return t.value=r[i],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(r)+" is not iterable")}return x.prototype=w,a(O,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:x,configurable:!0}),x.displayName=d(w,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,d(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},r.awrap=function(t){return{__await:t}},E(k.prototype),d(k.prototype,u,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,i,o){void 0===o&&(o=Promise);var a=new k(f(t,e,n,i),o);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(O),d(O,c,"Generator"),d(O,s,(function(){return this})),d(O,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=_,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(D),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,i){return l.type="throw",l.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;D(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(e,r,n){var i;return i=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,r||"default");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(r,"string"),(r="symbol"==t(i)?i:String(i))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(t){if(null==t)throw new TypeError("Cannot destructure "+t)}function s(t,e,r,n,i,o,a){try{var l=t[o](a),s=l.value}catch(u){return void r(u)}l.done?e(s):Promise.resolve(s).then(n,i)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){s(o,n,i,a,l,"next",t)}function l(t){s(o,n,i,a,l,"throw",t)}a(void 0)}))}}System.register(["./index-legacy-e5jDIJ7v.js","./router-legacy-kOAqN8oI.js","./formik.esm-legacy-XdfQijo5.js","./index.esm-legacy-d1HI7OdW.js","./FormProvider-legacy-_hPrE_So.js","./TextField-legacy-c49Cp5fy.js","./LoaderButton-legacy-FK06VX9Z.js","./TranslateField-legacy--lpTz8hS.js","./useCountDown-legacy-zU_dop9N.js","./PasswordField-legacy-8LbIf2mC.js","./reactQuery-legacy-GzPKeAE1.js","./axios-legacy-rH2Rcf5_.js","./tailwind-legacy-Cj8YFuLD.js","./reactIcons-legacy-xgqmug7p.js","./headlessui-legacy-7mFRxZdX.js","./customInputValidation-legacy-09WHxC9F.js"],(function(t,r){"use strict";var i,a,s,c,d,f,m,h,v,p,y,b,g,x,w,j,P;return{setters:[function(t){i=t.a,a=t.j,s=t.u,c=t.d,d=t.v,f=t.Q},function(t){m=t.d,h=t.e},function(t){v=t.u},function(t){p=t.c,y=t.a,b=t.g},function(t){g=t.F},function(t){x=t.T},function(t){w=t.L},null,function(t){j=t.u},function(t){P=t.P},null,null,null,null,null,null],execute:function(){t("default",(function(){var t=i({updateAction:s}),r=t.state,n=(t.actions,e(m.useState(0),2)),l=n[0],u=n[1],c=e(m.useState({mobile:"",email:"",otp:"",newPassword:"",confirmPassword:"",token:""}),2),d=c[0],f=c[1],h=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];f(o(o({},d),t)),e||u(l+1)},v=function(t){f(o(o({},d),t)),u(l-1)};return a.jsxs(a.Fragment,{children:[0===l&&a.jsx(S,{}),a.jsx("div",{children:{0:0==r.loginTabs?a.jsx(E,{state:r,next:h,data:d,setData:f}):a.jsx(A,{state:r,next:h,data:d,setData:f}),1:a.jsx(L,{state:r,next:h,prev:v,data:d,setData:f}),2:a.jsx(N,{state:r,next:h,prev:v,data:d,setData:f})}[l]})]})}));var r=[{id:0,label:"Mobile"},{id:1,label:"Email"}];function S(){var t=i({updateAction:s}),e=t.state,n=t.actions;return a.jsx("div",{className:"w-full",children:a.jsx("div",{className:"relative right-0",children:a.jsx("ul",{className:"relative flex flex-wrap p-1 list-none rounded-lg bg-blue-gray-50/60","data-tabs":"tabs",role:"list",children:null==r?void 0:r.map((function(t){return a.jsx("li",{className:"z-30 flex-auto text-center",onClick:function(){return null==n?void 0:n.updateAction({loginTabs:null==t?void 0:t.id})},children:a.jsx("a",{className:"z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit ".concat(e.loginTabs===(null==t?void 0:t.id)?"border-b-2 border-blue-500 text-blue-500":""),"data-tab-target":"",role:"tab","aria-selected":"true",children:a.jsx("span",{className:"ml-1",children:null==t?void 0:t.label})})},null==t?void 0:t.id)}))})})})}var O=p().shape({mobile:y().required("Mobile is required").min(10).max(10)});function E(t){var e,r=t.next,i=t.data,s=(t.setData,c({}).mutateAsync),m=v({enableReinitialize:!0,initialValues:{mobile:i.mobile||""},validationSchema:O,onSubmit:(e=u(n().mark((function t(e,a){var u,c,m,h;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(a),t.prev=1,t.next=4,s({api:d.forgotPassword,data:{mobile:e.mobile}});case 4:null!=(c=t.sent)&&null!==(u=c.data)&&void 0!==u&&u.status?(r(o(o({},i),{},{mobile:e.mobile})),f.success(null==c||null===(m=c.data)||void 0===m?void 0:m.message)):f.error(null==c||null===(h=c.data)||void 0===h?void 0:h.message),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),f.error(null===t.t0||void 0===t.t0?void 0:t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),function(t,r){return e.apply(this,arguments)})});return a.jsxs(g,{formik:m,children:[a.jsx("h2",{className:" font-semibold mt-8 mb-4",children:"Send OTP"}),a.jsx(x,{label:"Mobile",name:"mobile",type:"number",formik:m,placeholder:"Enter your register mobile no"}),a.jsx(w,{type:m.isSubmitting?"button":"submit",disabled:m.isSubmitting,loading:m.isSubmitting,children:"SEND OTP"})]})}var k=p().shape({otp:y().required("OTP is required")});function L(t){var e,r=t.next,i=t.data,s=t.setData,h=t.prev,p=t.state,y=j(.5),b=y.minutes,P=y.seconds,S=y.togglerTimer,O=y.runTimer,E=c({}),L=E.mutateAsync,T=E.isLoading,N=v({enableReinitialize:!0,initialValues:{mobile:i.mobile||"",email:i.email||"",otp:i.otp||""},validationSchema:k,onSubmit:(e=u(n().mark((function t(e,a){var s,u,c,m,h;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(a),t.prev=1,t.next=4,L({api:d.otpVerify,data:0==(null==p?void 0:p.loginTabs)?{mobile:e.mobile,Otp:null==e?void 0:e.otp}:{email:e.email,Otp:null==e?void 0:e.otp}});case 4:null!=(u=t.sent)&&null!==(s=u.data)&&void 0!==s&&s.status?(r(o(o({},i),{},{otp:e.otp,token:null==u||null===(c=u.data)||void 0===c||null===(c=c.data)||void 0===c?void 0:c.token})),f.success(null==u||null===(m=u.data)||void 0===m?void 0:m.message)):f.error(null==u||null===(h=u.data)||void 0===h?void 0:h.message),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),f.error(null===t.t0||void 0===t.t0?void 0:t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),function(t,r){return e.apply(this,arguments)})});m.useEffect((function(){return S(),function(){S()}}),[]);var D=function(){var t=u(n().mark((function t(){var e,r,a,l;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L({api:d.forgotPassword,data:0==(null==p?void 0:p.loginTabs)?{mobile:i.mobile}:{email:i.email}});case 3:null!=(r=t.sent)&&null!==(e=r.data)&&void 0!==e&&e.status?(f.success(null==r||null===(a=r.data)||void 0===a?void 0:a.message),s(o(o({},i),{},{otp:""})),N.setFieldValue("otp",""),S()):f.error(null==r||null===(l=r.data)||void 0===l?void 0:l.message),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),f.error(null===t.t0||void 0===t.t0?void 0:t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return a.jsxs(g,{formik:N,children:[a.jsxs("h1",{className:"text-sm mt-8 mb-4",children:["Please enter the 6-digit verification code sent to"," ",0==p.loginTabs?" your phone number":"your email-:  ",0==p.loginTabs?"+"+(null==N?void 0:N.values.mobile):null==N?void 0:N.values.email," ",a.jsx("span",{className:"text-sm text-blue-700",onClick:function(){return h(0==p.loginTabs?{mobile:null==N?void 0:N.values.mobile,otp:""}:{email:null==N?void 0:N.values.email,otp:""})},children:"Edit"})]}),a.jsx(x,{label:"Verify OTP",name:"otp",type:"text",formik:N}),a.jsx(w,{type:N.isSubmitting?"button":"submit",disabled:N.isSubmitting,loading:N.isSubmitting,children:"Verify OTP"}),a.jsxs("div",{className:"text-center mt-12 text-sm",children:["Didn't receive the code?"," ",T?a.jsx("small",{className:"text-gray-700 text-sm",children:"Please wait..."}):a.jsx(a.Fragment,{children:O?a.jsxs("span",{className:"text-gray-700 cursor-pointer",children:["Resend in ",b,":",P]}):a.jsx("span",{className:"text-blue-700 cursor-pointer",onClick:D,children:"Resend OTP"})})]})]})}var T=p().shape({newPassword:y().required("New Password is required"),confirmPassword:y().required("Confirm Password is required").oneOf([b("newPassword"),null],"Passwords must match")});function N(t){var e=t.next,r=t.data;t.setData,t.prev,t.state;j(5);var i,o=h(),s=c({}).mutateAsync,m=v({enableReinitialize:!0,initialValues:{newPassword:"",confirmPassword:""},validationSchema:T,onSubmit:(i=u(n().mark((function t(i,a){var u,c,m,h;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(a),t.prev=1,t.next=4,s({api:d.resetPassword,data:{token:null==r?void 0:r.token,password:null==i?void 0:i.newPassword}});case 4:null!=(c=t.sent)&&null!==(u=c.data)&&void 0!==u&&u.status?(e(i,!0),f.success(null==c||null===(m=c.data)||void 0===m?void 0:m.message),o("/auth/login")):f.error(null==c||null===(h=c.data)||void 0===h?void 0:h.message),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),f.error(null===t.t0||void 0===t.t0?void 0:t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),function(t,e){return i.apply(this,arguments)})});return a.jsxs(g,{formik:m,children:[a.jsx("h1",{className:"text-lg mt-5 mb-4 font-semibold",children:"Create New Password"}),a.jsx(P,{label:"New Password",name:"newPassword",formik:m}),a.jsx(P,{label:"Confirm Password",name:"confirmPassword",formik:m}),a.jsx(w,{type:m.isSubmitting?"button":"submit",disabled:m.isSubmitting,loading:m.isSubmitting,children:"RESET PASSWORD"})]})}var D=p().shape({email:y().required("Email is required").email()});function A(t){var e,r=t.next,i=t.data,s=(t.setData,c({}).mutateAsync),m=v({enableReinitialize:!0,initialValues:{email:i.email||""},validationSchema:D,onSubmit:(e=u(n().mark((function t(e,a){var u,c,m,h;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(a),t.prev=1,t.next=4,s({api:d.forgotPassword,data:{email:null==e?void 0:e.email}});case 4:null!=(c=t.sent)&&null!==(u=c.data)&&void 0!==u&&u.status?(r(o(o({},i),{},{email:null==e?void 0:e.email})),f.success(null==c||null===(m=c.data)||void 0===m?void 0:m.message)):f.error(null==c||null===(h=c.data)||void 0===h?void 0:h.message),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),f.error(null===t.t0||void 0===t.t0?void 0:t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),function(t,r){return e.apply(this,arguments)})});return a.jsxs(g,{formik:m,children:[a.jsx("h2",{className:" font-semibold mt-8 mb-4",children:"Send OTP"}),a.jsx(x,{label:"Email *",name:"email",type:"email",formik:m,placeholder:"Enter your register email id"}),a.jsx(w,{type:m.isSubmitting?"button":"submit",disabled:m.isSubmitting,loading:m.isSubmitting,children:"SEND OTP"})]})}}}}))}();
