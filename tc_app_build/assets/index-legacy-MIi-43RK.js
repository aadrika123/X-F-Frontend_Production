!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,s,i,l=[],a=!0,d=!1;try{if(s=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=s.call(r)).done)&&(l.push(n.value),l.length!==t);a=!0);}catch(e){d=!0,o=e}finally{try{if(!a&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(d)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return r};var t,r={},o=Object.prototype,s=o.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},a=l.iterator||"@@iterator",d=l.asyncIterator||"@@asyncIterator",c=l.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(t){u=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,s=Object.create(o.prototype),l=new A(n||[]);return i(s,"_invoke",{value:O(e,r,l)}),s}function x(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=h;var f="suspendedStart",m="suspendedYield",p="executing",v="completed",b={};function y(){}function j(){}function g(){}var N={};u(N,a,(function(){return this}));var w=Object.getPrototypeOf,_=w&&w(w(C([])));_&&_!==o&&s.call(_,a)&&(N=_);var L=g.prototype=y.prototype=Object.create(N);function k(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(t,r){function n(o,i,l,a){var d=x(t[o],t,i);if("throw"!==d.type){var c=d.arg,u=c.value;return u&&"object"==e(u)&&s.call(u,"__await")?r.resolve(u.__await).then((function(e){n("next",e,l,a)}),(function(e){n("throw",e,l,a)})):r.resolve(u).then((function(e){c.value=e,l(c)}),(function(e){return n("throw",e,l,a)}))}a(d.arg)}var o;i(this,"_invoke",{value:function(e,t){function s(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(s,s):s()}})}function O(e,r,n){var o=f;return function(s,i){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===s)throw i;return{value:t,done:!0}}for(n.method=s,n.arg=i;;){var l=n.delegate;if(l){var a=S(l,n);if(a){if(a===b)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var d=x(e,r,n);if("normal"===d.type){if(o=n.done?v:m,d.arg===b)continue;return{value:d.arg,done:n.done}}"throw"===d.type&&(o=v,n.method="throw",n.arg=d.arg)}}}function S(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var s=x(o,e.iterator,r.arg);if("throw"===s.type)return r.method="throw",r.arg=s.arg,r.delegate=null,b;var i=s.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function C(r){if(r||""===r){var n=r[a];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(s.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(e(r)+" is not iterable")}return j.prototype=g,i(L,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:j,configurable:!0}),j.displayName=u(g,c,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,c,"GeneratorFunction")),e.prototype=Object.create(L),e},r.awrap=function(e){return{__await:e}},k(E.prototype),u(E.prototype,d,(function(){return this})),r.AsyncIterator=E,r.async=function(e,t,n,o,s){void 0===s&&(s=Promise);var i=new E(h(e,t,n,o),s);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(L),u(L,c,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=C,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&s.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=s.call(i,"catchLoc"),d=s.call(i,"finallyLoc");if(a&&d){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),I(r),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},r}function o(e,t,r,n,o,s,i){try{var l=e[s](i),a=l.value}catch(d){return void r(d)}l.done?t(a):Promise.resolve(a).then(n,o)}System.register(["./index-legacy-zVv7LN3D.js","./router-legacy-d7mQ5O4E.js","./tailwind-legacy-wJ_Ag7Dp.js","./index-legacy-CDybzcQc.js","./formik.esm-legacy--WzrQHeF.js","./index.esm-legacy-HMaAycA0.js","./FormProvider-legacy-9vZABNQN.js","./TextField-legacy-Q_HGJiNI.js","./index-legacy-eoh2ESgH.js","./reactQuery-legacy-CGVy-x5i.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-5CyayZ_y.js","./headlessui-legacy-yLFhCrEc.js","./customInputValidation-legacy-1dLT3o3X.js"],(function(e,r){"use strict";var s,i,l,a,d,c,u,h,x,f,m,p,v,b,y;return{setters:[function(e){s=e.d,i=e.p,l=e.Q,a=e.j,d=e.c,c=e.I},function(e){u=e.d,h=e.e},function(e){x=e.r},function(e){f=e.P},function(e){m=e.u},function(e){p=e.c,v=e.a},function(e){b=e.F},function(e){y=e.T},null,null,null,null,null,null],execute:function(){e("default",(function(){var e,r,n,o,s,l,m,p,v,b,y,g,N,w,_,L,k,E,O,S=t(u.useState(!1),2),P=S[0],I=S[1],A=t(u.useState({}),2),C=A[0],M=A[1],T=h().id,G=d({api:i.getPropByHolding,config:{propertyId:T},value:[T],options:{enabled:!!T}}),B=G.data,F=G.refetch,D=(G.isFetching,G.isLoading),z=G.isPending;if(D||z)return a.jsx(c,{});return a.jsxs(f,{title:"Basic Details",children:[a.jsx(j,{setOpen:I,open:P,proId:T,updateMobData:C,refetch:F}),a.jsxs("div",{className:"p-4 ",children:[a.jsxs(x.Card,{className:"w-full",children:[a.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:a.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Basic Details"})}),a.jsx(x.CardBody,{children:a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Property No: "})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:null!==(e=null==B||null===(r=B.data)||void 0===r?void 0:r.property_no)&&void 0!==e?e:"-"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Holding No.: "})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:null!==(n=null==B||null===(o=B.data)||void 0===o?void 0:o.holding_no)&&void 0!==n?n:"-"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Zone: "})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:null!==(s=null==B||null===(l=B.data)||void 0===l?void 0:l.zone_name)&&void 0!==s?s:"-"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Ward No: "})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:null!==(m=null==B||null===(p=B.data)||void 0===p?void 0:p.ward_no)&&void 0!==m?m:"-"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Date of Purchase: "})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(null==B||null===(v=B.data)||void 0===v?void 0:v.land_occupation_date)||"--"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Ownership Type: "})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(null==B||null===(b=B.data)||void 0===b?void 0:b.ownership_type)||"-"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Property Type: "})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(null==B||null===(y=B.data)||void 0===y?void 0:y.property_type)||"-"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Holding Type: "})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(null==B||null===(g=B.data)||void 0===g?void 0:g.holding_type)||"-"})})]})})]}),a.jsx("div",{className:"my-4 border-b-2"}),a.jsxs(x.Card,{className:"w-full",children:[a.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:a.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Property Address & Details"})}),a.jsx(x.CardBody,{children:a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Survey No: "})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(null==B||null===(N=B.data)||void 0===N?void 0:N.khata_no)||"--"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Plot No.: "})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(null==B||null===(w=B.data)||void 0===w?void 0:w.plot_no)||"--"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Mauja Name: "})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(null==B||null===(_=B.data)||void 0===_?void 0:_.village_mauja_name)||"--"})}),a.jsx("div",{children:a.jsxs("h1",{className:"text-xs font-semibold",children:["Area Of Plot (in Sq ft) :"," "]})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(null==B||null===(L=B.data)||void 0===L?void 0:L.area_of_plot)||"--"})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs font-semibold",children:"Property Address: "})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(null==B||null===(k=B.data)||void 0===k?void 0:k.prop_address)||"--"})}),a.jsx("div",{children:a.jsxs("h1",{className:"text-xs font-semibold",children:["Corresponding Address:"," "]})}),a.jsx("div",{children:a.jsx("h1",{className:"text-xs",children:(null==B||null===(E=B.data)||void 0===E?void 0:E.corr_address)||"--"})})]})})]}),a.jsx("div",{className:"my-4 border-b-2"}),a.jsxs(x.Card,{className:"w-full",children:[a.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:a.jsx("h1",{className:"text-sm font-semibold text-gray-100",children:"Owner Details"})}),a.jsx(x.CardBody,{children:a.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:a.jsxs("table",{className:"w-full text-xs text-left  border-slate-400 border",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Sno :"}),a.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Owner Name"}),a.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Owner Name In Marathi"}),a.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Gender"}),a.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"DOB"}),a.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Guardian Name"}),a.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Guardian Name In Marathi"}),a.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Relation"}),a.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Mobile No."}),a.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Aadhar"}),a.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Pan"}),a.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Email"}),a.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Is-Armed-Force"}),a.jsx("th",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Is-Specially-Abled?"}),a.jsx("td",{className:"text-xs font-semibold p-4 border border-slate-300",children:"Action"})]})}),a.jsx("tbody",{children:null==B||null===(O=B.data)||void 0===O||null===(O=O.owners)||void 0===O?void 0:O.map((function(e,t){return a.jsxs("tr",{children:[a.jsx("td",{className:"text-xs p-4 border border-slate-300",children:t+1}),a.jsx("td",{className:"text-xs p-4 border border-slate-300",children:null==e?void 0:e.owner_name}),a.jsx("td",{className:"text-xs p-4 border border-slate-300",children:null==e?void 0:e.owner_name_marathi}),a.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(null==e?void 0:e.gender)||"--"}),a.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(null==e?void 0:e.dob)||"--"}),a.jsx("td",{className:"text-xs p-4 border border-slate-300",children:(null==e?void 0:e.guardian_name)||"--"}),a.jsx("td",{className:"text-xs p-4 border border-slate-300",children:null==e?void 0:e.guardian_name_marathi}),a.jsx("td",{className:"text-xs p-4 border border-slate-300",children:null==e?void 0:e.relation_type}),a.jsx("td",{className:"text-xs p-4 border border-slate-300",children:null==e?void 0:e.mobile_no}),a.jsx("td",{className:"text-xs p-4 border border-slate-300",children:null==e?void 0:e.aadhar_no}),a.jsx("td",{className:"text-xs p-4 border border-slate-300",children:null==e?void 0:e.pan_no}),a.jsx("td",{className:"text-xs p-4 border border-slate-300",children:null==e?void 0:e.email}),a.jsx("td",{className:"text-xs p-4 border border-slate-300",children:null!=e&&e.is_armed_force?"Yes":"No"}),a.jsx("td",{className:"text-xs p-4 border border-slate-300",children:null!=e&&e.is_specially_abled?"Yes":"No"}),a.jsx("td",{className:"text-xs p-4 border border-slate-300",children:a.jsx("button",{className:"text-xs text-white bg-blue-500 px-3 py-1 rounded",onClick:function(){!function(e){M(e),I(!0)}(e)},children:"Edit"})})]},t)}))})]})})})]})]})]})}));var r=p().shape({mobileNo:v().required("Mobile No is required").min(10).max(10)});function j(e){var t,d,c=e.open,u=e.setOpen,h=e.updateMobData,f=e.proId,p=e.refetch,v=function(){return u(!c)},j=s({}),g=m({enableReinitialize:!0,initialValues:{propertyId:f,ownerId:h.id,mobileNo:h.mobile_no},validationSchema:r,onSubmit:(t=n().mark((function e(t){var r,o,s;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.mutateAsync({api:null===(r=i)||void 0===r?void 0:r.updateMobile,data:t});case 3:o=e.sent,null!=(s=o.data)&&s.status&&(l.success(null==s?void 0:s.message),p(),v()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),d=function(){var e=this,r=arguments;return new Promise((function(n,s){var i=t.apply(e,r);function l(e){o(i,n,s,l,a,"next",e)}function a(e){o(i,n,s,l,a,"throw",e)}l(void 0)}))},function(e){return d.apply(this,arguments)})});return a.jsxs(b,{formik:g,children:[c&&a.jsx("div",{onClick:v,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),a.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(c?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:a.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full",children:a.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700",children:[a.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"Add Mobile No"}),a.jsxs("button",{onClick:v,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[a.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:a.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),a.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),a.jsxs("div",{className:"p-4 md:p-5",children:[a.jsx("div",{className:"grid grid-cols-1 gap-4",children:a.jsx("div",{children:a.jsx(y,{type:"text",name:"mobileNo",label:"Mobile No",formik:g,placeholder:"Enter Mobile No",maxLength:10})})}),a.jsxs("div",{className:"flex items-center justify-end mt-4 gap-5",children:[a.jsx(x.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:v,className:"mr-1 bg-gray-300",children:a.jsx("span",{children:"Cancel"})}),a.jsx(x.Button,{type:"submit",size:"sm",loading:j.isLoading,disabled:j.isLoading,children:a.jsx("span",{children:"Update"})})]})]})]})})})]})}}}}))}();
