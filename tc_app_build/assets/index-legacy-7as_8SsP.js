!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return l};var a,l={},r=Object.prototype,n=r.hasOwnProperty,s=Object.defineProperty||function(e,t,a){e[t]=a.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",d=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(a){u=function(e,t,a){return e[t]=a}}function m(e,t,a,l){var r=t&&t.prototype instanceof y?t:y,n=Object.create(r.prototype),i=new F(l||[]);return s(n,"_invoke",{value:D(e,a,i)}),n}function x(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}l.wrap=m;var h="suspendedStart",v="suspendedYield",f="executing",p="completed",b={};function y(){}function j(){}function N(){}var g={};u(g,o,(function(){return this}));var w=Object.getPrototypeOf,T=w&&w(w(q([])));T&&T!==r&&n.call(T,o)&&(g=T);var P=N.prototype=y.prototype=Object.create(g);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function k(t,a){function l(r,s,i,o){var d=x(t[r],t,s);if("throw"!==d.type){var c=d.arg,u=c.value;return u&&"object"==e(u)&&n.call(u,"__await")?a.resolve(u.__await).then((function(e){l("next",e,i,o)}),(function(e){l("throw",e,i,o)})):a.resolve(u).then((function(e){c.value=e,i(c)}),(function(e){return l("throw",e,i,o)}))}o(d.arg)}var r;s(this,"_invoke",{value:function(e,t){function n(){return new a((function(a,r){l(e,t,a,r)}))}return r=r?r.then(n,n):n()}})}function D(e,t,l){var r=h;return function(n,s){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===n)throw s;return{value:a,done:!0}}for(l.method=n,l.arg=s;;){var i=l.delegate;if(i){var o=E(i,l);if(o){if(o===b)continue;return o}}if("next"===l.method)l.sent=l._sent=l.arg;else if("throw"===l.method){if(r===h)throw r=p,l.arg;l.dispatchException(l.arg)}else"return"===l.method&&l.abrupt("return",l.arg);r=f;var d=x(e,t,l);if("normal"===d.type){if(r=l.done?p:v,d.arg===b)continue;return{value:d.arg,done:l.done}}"throw"===d.type&&(r=p,l.method="throw",l.arg=d.arg)}}}function E(e,t){var l=t.method,r=e.iterator[l];if(r===a)return t.delegate=null,"throw"===l&&e.iterator.return&&(t.method="return",t.arg=a,E(e,t),"throw"===t.method)||"return"!==l&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+l+"' method")),b;var n=x(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,b;var s=n.arg;return s?s.done?(t[e.resultName]=s.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=a),t.delegate=null,b):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,b)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function q(t){if(t||""===t){var l=t[o];if(l)return l.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,s=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=a,e.done=!0,e};return s.next=s}}throw new TypeError(e(t)+" is not iterable")}return j.prototype=N,s(P,"constructor",{value:N,configurable:!0}),s(N,"constructor",{value:j,configurable:!0}),j.displayName=u(N,c,"GeneratorFunction"),l.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},l.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,N):(e.__proto__=N,u(e,c,"GeneratorFunction")),e.prototype=Object.create(P),e},l.awrap=function(e){return{__await:e}},_(k.prototype),u(k.prototype,d,(function(){return this})),l.AsyncIterator=k,l.async=function(e,t,a,r,n){void 0===n&&(n=Promise);var s=new k(m(e,t,a,r),n);return l.isGeneratorFunction(t)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},_(P),u(P,c,"Generator"),u(P,o,(function(){return this})),u(P,"toString",(function(){return"[object Generator]"})),l.keys=function(e){var t=Object(e),a=[];for(var l in t)a.push(l);return a.reverse(),function e(){for(;a.length;){var l=a.pop();if(l in t)return e.value=l,e.done=!1,e}return e.done=!0,e}},l.values=q,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function l(l,r){return i.type="throw",i.arg=e,t.next=l,r&&(t.method="next",t.arg=a),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],i=s.completion;if("root"===s.tryLoc)return l("end");if(s.tryLoc<=this.prev){var o=n.call(s,"catchLoc"),d=n.call(s,"finallyLoc");if(o&&d){if(this.prev<s.catchLoc)return l(s.catchLoc,!0);if(this.prev<s.finallyLoc)return l(s.finallyLoc)}else if(o){if(this.prev<s.catchLoc)return l(s.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return l(s.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a];if(l.tryLoc<=this.prev&&n.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var r=l;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=e,s.arg=t,r?(this.method="next",this.next=r.finallyLoc,b):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),I(a),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var l=a.completion;if("throw"===l.type){var r=l.arg;I(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,l){return this.delegate={iterator:q(e),resultName:t,nextLoc:l},"next"===this.method&&(this.arg=a),b}},l}function a(e,t,a,l,r,n,s){try{var i=e[n](s),o=i.value}catch(d){return void a(d)}i.done?t(o):Promise.resolve(o).then(l,r)}function l(e){return function(){var t=this,l=arguments;return new Promise((function(r,n){var s=e.apply(t,l);function i(e){a(s,r,n,i,o,"next",e)}function o(e){a(s,r,n,i,o,"throw",e)}i(void 0)}))}}System.register(["./index-legacy-eswIL5Je.js","./router-legacy-rigPOyFI.js","./formik.esm-legacy-LafwCeEO.js","./index.esm-legacy-5u-Ffckd.js","./index-legacy-HUEfBhIC.js","./useCustomQuery-legacy-TKSCstG_.js","./OverLayLoader-legacy-WYeNsn78.js","./tailwind-legacy-e6PAgAmt.js","./FormProvider-legacy-uUxFOAaC.js","./TextField-legacy-A_9ujB7j.js","./SelectField-legacy-MIvGjN5o.js","./index-legacy-vtVAGFCF.js","./usePathWisePermission-legacy-nSyOLiTA.js","./useSaveLocation-legacy-E6ySH9jI.js","./reactQuery-legacy-y1kqDybM.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-ELZmKVKq.js","./headlessui-legacy-Yu0VJXN1.js","./module-legacy-zlWRm64Z.js"],(function(e,a){"use strict";var r,n,s,i,o,d,c,u,m,x,h,v,f,p,b,y,j,N,g,w,T,P,_;return{setters:[function(e){r=e.j,n=e.S,s=e.Q,i=e.p,o=e.d},function(e){d=e.u,c=e.d,u=e.h,m=e.f,x=e.r},function(e){h=e.u},function(e){v=e.c,f=e.a},function(e){p=e.P},function(e){b=e.a,y=e.u},function(e){j=e.O},function(e){N=e.r},function(e){g=e.F},function(e){w=e.T},function(e){T=e.S},null,function(e){P=e.u},function(e){_=e.U},null,null,null,null,null,null],execute:function(){function a(e){var t,a,l,n,s,i,o,d,c,u,m,x=e.data,h=e.permissionResult;return r.jsx(N.Card,{children:r.jsxs("div",{className:"px-4 py-6",children:[r.jsx("div",{className:"flex flex-row justify-between mb-3",children:r.jsx("h1",{className:"text-sm font-semibold",children:"Basic Details"})}),r.jsx("div",{className:"my-3 border-b-2"}),r.jsxs("div",{className:"flex flex-col",children:[r.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[r.jsx("h1",{className:"text-sm font-semibold",children:"Holding No:"}),r.jsx("h1",{className:"text-sm",children:null==x||null===(t=x.data)||void 0===t||null===(t=t.basicDetails)||void 0===t?void 0:t.holding_no})]}),r.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[r.jsx("h1",{className:"text-sm font-semibold",children:"Property No:"}),r.jsx("h1",{className:"text-sm",children:null==x||null===(a=x.data)||void 0===a||null===(a=a.basicDetails)||void 0===a?void 0:a.property_no})]}),r.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[r.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name:"}),r.jsx("h1",{className:"text-sm",children:null==x||null===(l=x.data)||void 0===l||null===(l=l.basicDetails)||void 0===l?void 0:l.owner_name})]}),r.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[r.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name (In Marathi):"}),r.jsx("h1",{className:"text-sm",children:(null==x||null===(n=x.data)||void 0===n||null===(n=n.basicDetails)||void 0===n?void 0:n.owner_name_marathi)||"N/A"})]}),r.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[r.jsx("h1",{className:"text-sm font-semibold",children:"Applicant Name:"}),r.jsx("h1",{className:"text-sm",children:null==x||null===(s=x.data)||void 0===s||null===(s=s.basicDetails)||void 0===s?void 0:s.applicant_name})]}),r.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[r.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),r.jsx("h1",{className:"text-sm",children:null==x||null===(i=x.data)||void 0===i||null===(i=i.basicDetails)||void 0===i?void 0:i.prop_address})]}),r.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[r.jsx("h1",{className:"text-sm font-semibold",children:"Zone:"}),r.jsx("h1",{className:"text-sm",children:null==x||null===(o=x.data)||void 0===o||null===(o=o.basicDetails)||void 0===o?void 0:o.zone_name})]}),r.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[r.jsx("h1",{className:"text-sm font-semibold",children:"Ward No:"}),r.jsx("h1",{className:"text-sm",children:null==x||null===(d=x.data)||void 0===d||null===(d=d.basicDetails)||void 0===d?void 0:d.ward_no})]}),r.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[r.jsx("h1",{className:"text-sm font-semibold",children:"Ownership Type:"}),r.jsx("h1",{className:"text-sm",children:null==x||null===(c=x.data)||void 0===c||null===(c=c.basicDetails)||void 0===c?void 0:c.ownership_type})]}),r.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[r.jsx("h1",{className:"text-sm font-semibold",children:"Property Type:"}),r.jsx("h1",{className:"text-sm",children:null==x||null===(u=x.data)||void 0===u||null===(u=u.basicDetails)||void 0===u?void 0:u.property_type})]})]}),r.jsx("div",{className:"my-3 border-b-2"}),(null==h?void 0:h.read)&&r.jsx("div",{className:"grid grid-cols-1 gap-2 items-center justify-center text-center",children:r.jsx("a",{href:"/property/holdingPropertyDetails/".concat(null==x||null===(m=x.data)||void 0===m||null===(m=m.basicDetails)||void 0===m?void 0:m.id),children:r.jsx(N.Button,{variant:"outlined",size:"sm",color:"blue",fullWidth:!0,className:"p-1.5 text-[12px] capitalize",children:"Holding Details"})})})]})})}function k(e){var t,a=e.data;return r.jsx(N.Card,{className:"mt-4 w-full",children:r.jsxs(N.CardBody,{children:[r.jsx("div",{className:"flex flex-row justify-between mb-3",children:r.jsx("h1",{className:"text-sm font-semibold",children:"Demand List"})}),r.jsx("div",{className:"my-3 border-b-2"}),r.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:r.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Financial Year :"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"General Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Road Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Firefighting Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Education Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"V. sanitation tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sewage Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tree Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Professional Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tax 1"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"State Education Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Benefit"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Bill"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sp Water Cess"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Drain Cess"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Big Building"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Open Plot Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Tax"})]})}),r.jsx("tbody",{children:null==a||null===(t=a.data)||void 0===t||null===(t=t.demandList)||void 0===t?void 0:t.map((function(e,t){return r.jsxs("tr",{children:[r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.fyear}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.general_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.road_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.firefighting_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.education_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.water_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.light_cess}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.sewarage_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.tree_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.professional_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.tax1}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.state_education_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.water_benefit}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.water_bill}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.sp_water_cess}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.drain_cess}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.major_building}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.open_ploat_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==e?void 0:e.total_tax})]},t)}))})]})})]})})}function D(e){var t,a,l,n,s,i,o,d,c,u,m,x,h,v,f,p,b,y,j,g=e.data;return r.jsx(N.Card,{className:"mt-4 w-full",children:r.jsxs(N.CardBody,{children:[r.jsx("div",{className:"flex flex-row justify-between mb-3",children:r.jsx("h1",{className:"text-sm font-semibold",children:"Grand Total Tax"})}),r.jsx("div",{className:"my-3 border-b-2"}),r.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:r.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"General Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Road Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Firefighting Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Education Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"V. sanitation tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sewage Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tree Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Professional Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Tax 1"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"State Education Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Benefit"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Water Bill"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Sp Water Cess"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Drain Cess"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Big Building"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Open Plot Tax"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Interest"}),r.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"Total Tax"})]})}),r.jsx("tbody",{children:r.jsxs("tr",{children:[r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(t=g.data)||void 0===t||null===(t=t.grandTaxes)||void 0===t?void 0:t.general_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(a=g.data)||void 0===a||null===(a=a.grandTaxes)||void 0===a?void 0:a.road_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(l=g.data)||void 0===l||null===(l=l.grandTaxes)||void 0===l?void 0:l.firefighting_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(n=g.data)||void 0===n||null===(n=n.grandTaxes)||void 0===n?void 0:n.state_education_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(s=g.data)||void 0===s||null===(s=s.grandTaxes)||void 0===s?void 0:s.water_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(i=g.data)||void 0===i||null===(i=i.grandTaxes)||void 0===i?void 0:i.cleanliness_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(o=g.data)||void 0===o||null===(o=o.grandTaxes)||void 0===o?void 0:o.sewarage_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(d=g.data)||void 0===d||null===(d=d.grandTaxes)||void 0===d?void 0:d.tree_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(c=g.data)||void 0===c||null===(c=c.grandTaxes)||void 0===c?void 0:c.professional_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(u=g.data)||void 0===u||null===(u=u.grandTaxes)||void 0===u?void 0:u.tax1}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(m=g.data)||void 0===m||null===(m=m.grandTaxes)||void 0===m?void 0:m.state_education_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(x=g.data)||void 0===x||null===(x=x.grandTaxes)||void 0===x?void 0:x.water_benefit}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(h=g.data)||void 0===h||null===(h=h.grandTaxes)||void 0===h?void 0:h.water_bill}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(v=g.data)||void 0===v||null===(v=v.grandTaxes)||void 0===v?void 0:v.sp_water_cess}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(f=g.data)||void 0===f||null===(f=f.grandTaxes)||void 0===f?void 0:f.drain_cess}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(p=g.data)||void 0===p||null===(p=p.grandTaxes)||void 0===p?void 0:p.major_building}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(b=g.data)||void 0===b||null===(b=b.grandTaxes)||void 0===b?void 0:b.open_ploat_tax}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(y=g.data)||void 0===y||null===(y=y.grandTaxes)||void 0===y?void 0:y.monthlyPenalty}),r.jsx("td",{className:"text-sm p-4 border border-slate-300",children:null==g||null===(j=g.data)||void 0===j||null===(j=j.grandTaxes)||void 0===j?void 0:j.total_tax})]})})]})})]})})}e("default",(function(){var e,v,f,N=d(),g=_().saveLocation;c.useState(0);var w=b({}),T=u().id,E=m().pathname,A=P(null==E||null===(e=E.split("/"))||void 0===e||null===(e=e.slice(0,-1))||void 0===e?void 0:e.join("/")).result,F=y({api:i.getDemandDetails,config:{propId:T},value:T,options:{enabled:!!T}}),q=F.data,C=F.isLoading,M=h({enableReinitialize:!0,initialValues:{paymentMode:"",paymentType:"",chequeNo:"",chequeDate:"",bankName:"",branchName:"",paymentRemark:"",neftImage:"",paidAmount:""},validationSchema:L,onSubmit:(S=l(t().mark((function e(a){var l,r,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.fire({title:"Are you sure?",text:"You want to proceed with payment of Rs."+((null==q||null===(l=q.data)||void 0===l?void 0:l.totalInterestPenalty)>0&&"isFullPayment"===(null===(r=M.values)||void 0===r?void 0:r.paymentType)?Math.round(O()-(null==q||null===(i=q.data)||void 0===i||null===(i=i.rebates[0])||void 0===i?void 0:i.rebates_amt)||0):Math.round(O())||0),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((function(e){e.isConfirmed&&B(a)})).catch((function(e){var t;s.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 1:case"end":return e.stop()}}),e)}))),function(e){return S.apply(this,arguments)})}),B=function(){var e=l(t().mark((function e(a){var l,r,n,o,d,c,u,m,x,h,v,f,p,b,y;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l={},"ONLINE"!==(null==a?void 0:a.paymentMode)){e.next=9;break}return l={propId:T,paymentMode:null==a?void 0:a.paymentMode,paymentType:null==a?void 0:a.paymentType,paidAmount:O(),deviceType:"android",callbackUrl:"https://modernulb.com/amc-app/property/payment-history"},e.next=5,w.mutateAsync({api:i.iciciPayment,data:l});case 5:null!=(n=e.sent)&&null!==(r=n.data)&&void 0!==r&&r.status?(g({actionType:"PropertyPaymentOnline",refId:null==n||null===(o=n.data)||void 0===o||null===(o=o.data)||void 0===o?void 0:o.requestId,moduleId:1}),s.success(null==n||null===(d=n.data)||void 0===d?void 0:d.message),window.location.href=null==n||null===(c=n.data)||void 0===c||null===(c=c.data)||void 0===c?void 0:c.encryptUrl,M.resetForm()):s.error(null==n||null===(u=n.data)||void 0===u?void 0:u.message),e.next=20;break;case 9:return l="CHEQUE"===(null==a?void 0:a.paymentMode)||"DD"===(null==a?void 0:a.paymentMode)||"NEFT"===(null==a?void 0:a.paymentMode)?{id:T,paymentMode:null==a?void 0:a.paymentMode,paymentType:null==a?void 0:a.paymentType,chequeNo:null==a?void 0:a.chequeNo,chequeDate:null==a?void 0:a.chequeDate,bankName:null==a?void 0:a.bankName,branchName:null==a?void 0:a.branchName,paymentRemark:null==a?void 0:a.paymentRemark,neftImage:null==a?void 0:a.neftImage,paidAmount:O(),deviceType:"android"}:{id:T,paymentMode:null==a?void 0:a.paymentMode,paymentType:null==a?void 0:a.paymentType,paidAmount:O(),deviceType:"android"},e.prev=10,e.next=13,w.mutateAsync({api:i.holdingPayment,data:l});case 13:null!=(x=e.sent)&&null!==(m=x.data)&&void 0!==m&&m.status?(g({actionType:"successPropertyPayment",refId:null==x||null===(h=x.data)||void 0===h||null===(h=h.data)||void 0===h?void 0:h.transactionId,moduleId:1}),s.success(null==x||null===(v=x.data)||void 0===v?void 0:v.message),N("/amc-app/property/payment-response?response=".concat(null==x||null===(f=x.data)||void 0===f||null===(f=f.data)||void 0===f?void 0:f.transactionId,"&tranNo=").concat(null==x||null===(p=x.data)||void 0===p||null===(p=p.data)||void 0===p?void 0:p.TransactionNo),{replace:!0}),M.resetForm()):(s.error(null==x||null===(b=x.data)||void 0===b?void 0:b.message),g({actionType:"failedPropertyPayment",refId:T,moduleId:1})),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(10),s.error(null===e.t0||void 0===e.t0||null===(y=e.t0.response)||void 0===y||null===(y=y.data)||void 0===y?void 0:y.message);case 20:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e,t,a,l,r,n,s,i,o=0;"isFullPayment"==(null===(e=M.values)||void 0===e?void 0:e.paymentType)&&(o=parseFloat(null==q||null===(l=q.data)||void 0===l?void 0:l.payableAmt)-parseFloat(null==q||null===(r=q.data)||void 0===r?void 0:r.remainAdvance));"isArrearPayment"==(null===(t=M.values)||void 0===t?void 0:t.paymentType)&&(o=parseFloat(null==q||null===(n=q.data)||void 0===n?void 0:n.arrearPayableAmt)-parseFloat(null==q||null===(s=q.data)||void 0===s?void 0:s.remainAdvance));"isPartPayment"==(null===(a=M.values)||void 0===a?void 0:a.paymentType)&&(o=parseFloat(null===(i=M.values)||void 0===i?void 0:i.paidAmount));return o};var S;return x.useEffect((function(){var e;"paidAmount"==(null===(e=M.values)||void 0===e?void 0:e.paymentType)&&O()}),[null===(v=M.values)||void 0===v?void 0:v.paidAmount]),C?r.jsx(o,{}):r.jsxs(p,{title:"Demand Details",children:[w.isLoading&&r.jsx(j,{}),r.jsx("div",{className:"flex flex-col h-full py-3 px-4",children:r.jsxs("div",{className:"flex flex-col flex-grow",children:[r.jsx(a,{data:q,permissionResult:A}),r.jsx(k,{data:q}),r.jsx(D,{data:q}),(null==q||null===(f=q.data)||void 0===f?void 0:f.payableAmt)>0?r.jsx(I,{formik:M,data:q,calculateActualAmount:O}):r.jsx("div",{className:"flex justify-center py-6",children:r.jsx("div",{onClick:function(){return N("/amc-app/property/search-holding")},className:"text-red-500 border border-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300 ease-in-out",children:"Payment Already Done"})})]})})]})}));var E=[{id:1,label:"Cash",value:"CASH"},{id:2,label:"Cheque",value:"CHEQUE"},{id:3,label:"DD",value:"DD"},{id:4,label:"Online",value:"ONLINE"},{id:5,label:"NEFT",value:"NEFT"}],A=[{id:1,label:"Full Payment",value:"isFullPayment"},{id:2,label:"Arrear Amount",value:"isArrearPayment"},{id:3,label:"Part Payment",value:"isPartPayment"}];function I(e){var t,a,l,n,s,i,o,d,c,u,m,x,h,v,f,p,b,y,j,P,_,k=e.data,D=e.formik,I=e.calculateActualAmount;return r.jsx(N.Card,{className:"mt-4 w-full",children:r.jsxs(N.CardBody,{children:[r.jsx("div",{className:"flex flex-row justify-between mb-3",children:r.jsx("h1",{className:"text-sm font-semibold",children:"Payment Action"})}),r.jsx("div",{className:"my-3 border-b-2"}),r.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[r.jsx("div",{children:r.jsx("h1",{className:"text-xs font-semibold ",children:"* Total Arrear Amount -:"})}),r.jsx("div",{children:r.jsxs("h1",{className:"text-sm font-semibold text-red-500",children:["₹ ",null==k||null===(t=k.data)||void 0===t?void 0:t.arrear]})}),r.jsx("div",{children:r.jsx("h1",{className:"text-xs font-semibold",children:"* Total Current Amount -:"})}),r.jsx("div",{children:r.jsxs("h1",{className:"text-sm font-semibold text-cyan-500",children:["₹ ",null==k||null===(a=k.data)||void 0===a?void 0:a.currentDemand]})}),r.jsx("div",{children:r.jsx("h1",{className:"text-xs font-semibold",children:"* Total Interest Amount -:"})}),r.jsx("div",{children:r.jsxs("h1",{className:"text-sm font-semibold ",children:[r.jsxs("span",{className:"text-red-500",children:["₹ ",null==k||null===(l=k.data)||void 0===l?void 0:l.totalInterestPenalty]})," ",r.jsxs("small",{children:["( Interest on Arrear ₹ ",null==k||null===(n=k.data)||void 0===n?void 0:n.arrearInterest," + Previous Interest ₹ ",null==k||null===(s=k.data)||void 0===s?void 0:s.previousInterest,")"]})]})}),(null==k||null===(i=k.data)||void 0===i?void 0:i.totalInterestPenalty)>0&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"col-span-1"}),r.jsx("div",{className:"col-span-1",children:r.jsx("h1",{className:"text-sm font-semibold ",children:r.jsxs("small",{className:"text-green-500",children:["( If You Pay Full Amount Before"," ",null==k||null===(o=k.data)||void 0===o||null===(o=o.rebates[0])||void 0===o?void 0:o.effective_upto,", Then"," ",null==k||null===(d=k.data)||void 0===d||null===(d=d.rebates[0])||void 0===d?void 0:d.rebates," % Of Interest On The Property Will Be Waived. )"]})})})]}),r.jsx("div",{className:"my-3 border-b-2 col-span-2"}),r.jsx("div",{children:r.jsx("h1",{className:"text-xs font-semibold",children:"* Total Payable Amount -:"})}),r.jsx("div",{children:r.jsxs("h1",{className:"text-sm font-semibold",children:[r.jsxs("span",{className:"text-blue-500",children:["₹ ",null==k||null===(c=k.data)||void 0===c?void 0:c.payableAmt]})," ",r.jsx("small",{children:"(Arrear + Current + Interest)"})," ",(null==k||null===(u=k.data)||void 0===u?void 0:u.totalInterestPenalty)>0&&r.jsxs("small",{className:"text-green-500",children:["(",null==k||null===(m=k.data)||void 0===m?void 0:m.payableAmt," -"," ",null==k||null===(x=k.data)||void 0===x||null===(x=x.rebates[0])||void 0===x?void 0:x.rebates_amt,")"]})]})}),r.jsx("div",{children:r.jsx("h1",{className:"text-xs font-semibold",children:"* Advance Amount -:"})}),r.jsx("div",{children:r.jsxs("h1",{className:"text-sm font-semibold",children:[r.jsxs("span",{className:"text-blue-500",children:["₹ ",null==k||null===(h=k.data)||void 0===h?void 0:h.remainAdvance]})," ",r.jsx("small",{className:"text-green-500",children:"(This Is An Adjustable Amount From Total Payment Value.)"})]})})]}),r.jsx("div",{className:"my-3 border-b-2"}),r.jsxs(g,{formik:D,children:[r.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[r.jsx("div",{className:"mb-4",children:r.jsxs(T,{label:"Payment Mode",name:"paymentMode",formik:D,children:[r.jsx("option",{value:"",children:"select"}),null==E?void 0:E.map((function(e){return r.jsx("option",{value:null==e?void 0:e.value,children:null==e?void 0:e.label},null==e?void 0:e.id)}))]})}),r.jsx("div",{children:r.jsxs(T,{label:"Payment Option",name:"paymentType",formik:D,type:"select",children:[r.jsx("option",{value:"",children:"select"}),A.map((function(e){var t;return((null==k||null===(t=k.data)||void 0===t?void 0:t.arrear)>0||"isArrearPayment"!=e.value)&&r.jsx("option",{value:null==e?void 0:e.value,children:null==e?void 0:e.label},null==e?void 0:e.id)}))]})})]}),"CHEQUE"===(null===(v=D.values)||void 0===v?void 0:v.paymentMode)?r.jsx(F,{formik:D}):"DD"===(null===(f=D.values)||void 0===f?void 0:f.paymentMode)?r.jsx(q,{formik:D}):"NEFT"===(null===(p=D.values)||void 0===p?void 0:p.paymentMode)?r.jsx(C,{formik:D}):null,"isPartPayment"===(null===(b=D.values)||void 0===b?void 0:b.paymentType)&&r.jsx("div",{className:"",children:r.jsx(w,{label:"Part Payment Amount",name:"paidAmount",type:"number",formik:D,onInput:"isPartPayment"===(null===(y=D.values)||void 0===y?void 0:y.paymentType)?function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,10)}:null})}),r.jsx("div",{className:"flex justify-center mt-2",children:r.jsxs(N.Button,{type:"submit",color:"indigo",disabled:!D.isValid,children:["Submit ₹"," ",(null==k||null===(j=k.data)||void 0===j?void 0:j.totalInterestPenalty)>0&&"isFullPayment"===(null===(P=D.values)||void 0===P?void 0:P.paymentType)?Math.round(I()-(null==k||null===(_=k.data)||void 0===_||null===(_=_.rebates[0])||void 0===_?void 0:_.rebates_amt)||0):Math.round(I())||0]})})]})]})})}var F=function(e){var t=e.formik;return r.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[r.jsx("div",{children:r.jsx(w,{label:"Cheque No",name:"chequeNo",type:"text",formik:t})}),r.jsx("div",{children:r.jsx(w,{label:"Cheque Date",name:"chequeDate",type:"date",formik:t})}),r.jsx("div",{children:r.jsx(w,{label:"Bank Name",name:"bankName",type:"text",formik:t})}),r.jsx("div",{children:r.jsx(w,{label:"Branch Name",name:"branchName",type:"text",formik:t})}),r.jsx("div",{children:r.jsx(w,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:t})}),r.jsx("div",{children:r.jsx(w,{label:"Upload Cheque Image",name:"neftImage",type:"file",onChange:function(e){t.setFieldValue("neftImage",e.target.files[0])}})})]})},q=function(e){var t=e.formik;return r.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[r.jsx("div",{children:r.jsx(w,{label:"DD No",name:"chequeNo",type:"text",formik:t})}),r.jsx("div",{children:r.jsx(w,{label:"DD Date",name:"chequeDate",type:"date",formik:t})}),r.jsx("div",{children:r.jsx(w,{label:"Bank Name",name:"bankName",type:"text",formik:t})}),r.jsx("div",{children:r.jsx(w,{label:"Branch Name",name:"branchName",type:"text",formik:t})}),r.jsx("div",{children:r.jsx(w,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:t})}),r.jsx("div",{children:r.jsx(w,{label:"Upload DD Image",name:"neftImage",type:"file",onChange:function(e){t.setFieldValue("neftImage",e.target.files[0])}})})]})},C=function(e){var t=e.formik;return r.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[r.jsx("div",{children:r.jsx(w,{label:"NEFT No",name:"chequeNo",type:"text",formik:t})}),r.jsx("div",{children:r.jsx(w,{label:"NEFT Date",name:"chequeDate",type:"date",formik:t})}),r.jsx("div",{children:r.jsx(w,{label:"Bank Name",name:"bankName",type:"text",formik:t})}),r.jsx("div",{children:r.jsx(w,{label:"Branch Name",name:"branchName",type:"text",formik:t})}),r.jsx("div",{children:r.jsx(w,{label:"Payment Remark",name:"paymentRemark",type:"text",formik:t})}),r.jsx("div",{children:r.jsx(w,{label:"Upload NEFT Image",name:"neftImage",type:"file",onChange:function(e){t.setFieldValue("neftImage",e.target.files[0])}})})]})},L=v().shape({paymentMode:f().required("Payment Mode is required"),paymentType:f().required("Payment Type is required"),paidAmount:f().when(["paymentType"],{is:function(e){return"isPartPayment"==e},then:function(){return f().required("Part Payment Amount is required")}}),chequeNo:f().when(["paymentMode"],{is:function(e){return"CHEQUE"==e||"DD"==e||"NEFT"==e},then:function(){return f().required("Cheque No is required")}}),chequeDate:f().when(["paymentMode"],{is:function(e){return"CHEQUE"==e||"DD"==e||"NEFT"==e},then:function(){return f().required("Cheque Date is required")}}),neftImage:f().when(["paymentMode"],{is:function(e){return"CHEQUE"==e||"DD"==e||"NEFT"==e},then:function(){return f().required("Cheque Upload is required")}}),bankName:f().when(["paymentMode"],{is:function(e){return"CHEQUE"==e||"DD"==e||"NEFT"==e},then:function(){return f().required("Bank Name is required")}}),branchName:f().when(["paymentMode"],{is:function(e){return"CHEQUE"==e||"DD"==e||"NEFT"==e},then:function(){return f().required("Branch Name is required")}}),paymentRemark:f().when(["paymentMode"],{is:function(e){return"CHEQUE"==e||"DD"==e||"NEFT"==e},then:function(){return f().required("Payment Remark is required")}})})}}}))}();
