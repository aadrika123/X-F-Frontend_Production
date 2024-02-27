!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},l="function"==typeof Symbol?Symbol:{},s=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(r){d=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),l=new O(n||[]);return a(o,"_invoke",{value:_(e,r,l)}),o}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=h;var p="suspendedStart",v="suspendedYield",m="executing",y="completed",x={};function g(){}function j(){}function b(){}var w={};d(w,s,(function(){return this}));var N=Object.getPrototypeOf,S=N&&N(N(P([])));S&&S!==i&&o.call(S,s)&&(w=S);var L=b.prototype=g.prototype=Object.create(w);function A(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function E(t,r){function n(i,a,l,s){var c=f(t[i],t,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==e(d)&&o.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,l,s)}),(function(e){n("throw",e,l,s)})):r.resolve(d).then((function(e){u.value=e,l(u)}),(function(e){return n("throw",e,l,s)}))}s(c.arg)}var i;a(this,"_invoke",{value:function(e,t){function o(){return new r((function(r,i){n(e,t,r,i)}))}return i=i?i.then(o,o):o()}})}function _(e,t,n){var i=p;return function(o,a){if(i===m)throw new Error("Generator is already running");if(i===y){if("throw"===o)throw a;return{value:r,done:!0}}for(n.method=o,n.arg=a;;){var l=n.delegate;if(l){var s=k(l,n);if(s){if(s===x)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=m;var c=f(e,t,n);if("normal"===c.type){if(i=n.done?y:v,c.arg===x)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=y,n.method="throw",n.arg=c.arg)}}}function k(e,t){var n=t.method,i=e.iterator[n];if(i===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),x;var o=f(i,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,x;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,x):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,x)}function B(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(B,this),this.reset(!0)}function P(t){if(t||""===t){var n=t[s];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){for(;++i<t.length;)if(o.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}throw new TypeError(e(t)+" is not iterable")}return j.prototype=b,a(L,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:j,configurable:!0}),j.displayName=d(b,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,d(e,u,"GeneratorFunction")),e.prototype=Object.create(L),e},n.awrap=function(e){return{__await:e}},A(E.prototype),d(E.prototype,c,(function(){return this})),n.AsyncIterator=E,n.async=function(e,t,r,i,o){void 0===o&&(o=Promise);var a=new E(h(e,t,r,i),o);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},A(L),d(L,u,"Generator"),d(L,s,(function(){return this})),d(L,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=P,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(F),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,i){return l.type="throw",l.arg=e,t.next=n,i&&(t.method="next",t.arg=r),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,x):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),x},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),F(r),x}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;F(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),x}},n}function r(e,t,r,n,i,o,a){try{var l=e[o](a),s=l.value}catch(c){return void r(c)}l.done?t(s):Promise.resolve(s).then(n,i)}System.register(["./index-legacy-Wc5FCZ_j.js","./react-legacy-cmOuVUdh.js","./formik.esm-legacy-RG1cH4yA.js","./index.esm-legacy-F4Zou-Y1.js","./index.esm-legacy-cZr80w6N.js","./FormProvider-legacy-dX3nm1iJ.js","./TextField-legacy-dZPiD99e.js","./SelectField-legacy-nRmE_51f.js","./index-legacy-AZ8LWmyi.js","./index-legacy-NLJguti2.js","./index-legacy-mt4DwePb.js","./ArrowRightIcon-legacy-0WxJcC0f.js"],(function(e,n){"use strict";var i,o,a,l,s,c,u,d,h,f,p,v,m,y,x,g,j;return{setters:[function(e){i=e.u,o=e.a,a=e.p,l=e.Q,s=e.j},function(e){c=e.u,u=e.e,d=e.R},function(e){h=e.u},function(e){f=e.c,p=e.a},function(e){v=e.I},function(e){m=e.F},function(e){y=e.T},function(e){x=e.S},null,function(e){g=e.P},function(e){j=e.S},null],execute:function(){e("default",(function(){var e,n,b,w,N,S,L,A,E,_,k,B,F=c(),O=i(),P=o({api:null===(e=a)||void 0===e?void 0:e.searchApplication,config:null==O?void 0:O.searchSafApp,value:[null==O||null===(n=O.searchSafApp)||void 0===n?void 0:n.filteredBy,null==O||null===(b=O.searchSafApp)||void 0===b?void 0:b.searchBy,null==O||null===(w=O.searchSafApp)||void 0===w?void 0:w.value,null==O?void 0:O.searchSafApp.page,null==O?void 0:O.searchSafApp.perPage],options:{enabled:!(null==O||null===(N=O.searchSafApp)||void 0===N||!N.filteredBy||null==O||null===(S=O.searchSafApp)||void 0===S||!S.searchBy||null==O||null===(L=O.searchSafApp)||void 0===L||!L.value)}}),C=P.data,G=P.isLoading,T=(P.refetch,h({enableReinitialize:!0,initialValues:null==O?void 0:O.searchSafApp,validationSchema:f().shape({filteredBy:p().required("Filtered By is required"),searchBy:p().required("Search By is required"),value:p().required("Value is required")}),onSubmit:(R=t().mark((function e(r){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{null==O||O.setSearchSafApp(r)}catch(t){l.error(null==t?void 0:t.message)}case 1:case"end":return e.stop()}}),e)})),q=function(){var e=this,t=arguments;return new Promise((function(n,i){var o=R.apply(e,t);function a(e){r(o,n,i,a,l,"next",e)}function l(e){r(o,n,i,a,l,"throw",e)}a(void 0)}))},function(e){return q.apply(this,arguments)})}));var R,q;return s.jsx(g,{title:"Search Applications",children:s.jsxs("div",{className:"p-4",children:[s.jsx(u.Card,{className:"mb-4",children:s.jsxs(u.CardBody,{children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("h1",{className:"text-lg font-semibold",children:"Search Applications"}),s.jsxs("div",{className:"items-center flex justify-start px-2 py-1 border rounded-lg gap-1 cursor-pointer",onClick:function(){null==O||O.setSearchSafApp({filteredBy:"",searchBy:"",value:"",page:1,perPage:10}),null==T||T.resetForm()},children:[s.jsx(v,{className:"cursor-pointer text-blue-600",size:"1.2rem"}),s.jsx("small",{className:" text-blue-600 ",children:"Reset"})]})]}),s.jsx("div",{className:"border-t border-gray-200 my-2"}),s.jsxs(m,{formik:T,children:[s.jsxs("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-2",children:[s.jsxs(x,{label:"Filtered By",name:"filteredBy",formik:T,children:[s.jsx("option",{value:"",children:"Select"}),null===(A=[{label:"SAF",value:"saf"}])||void 0===A?void 0:A.map((function(e){return s.jsx("option",{value:null==e?void 0:e.value,children:null==e?void 0:e.label},null==e?void 0:e.value)}))]}),s.jsxs(x,{label:"Search By",name:"searchBy",formik:T,children:[s.jsx("option",{value:"",children:"Select"}),[{label:"Application",value:"applicationNo"},{label:"Mobile",value:"mobileNo"},{label:"Name",value:"name"},{label:"Holding",value:"holding"}].map((function(e){return s.jsx("option",{value:null==e?void 0:e.value,children:null==e?void 0:e.label},null==e?void 0:e.value)}))]}),s.jsx("div",{className:"col-span-2",children:s.jsx(y,{label:"Value",name:"value",formik:T})})]}),s.jsx("div",{className:"flex justify-center mt-1",children:s.jsx(u.Button,{fullWidth:!0,type:"submit",color:"blue",children:"Search"})})]})]})}),s.jsx("div",{className:"border-t border-gray-200 my-2"}),G?s.jsx("div",{className:"flex justify-center my-16 items-center",children:s.jsx("h1",{className:"font-semibold",children:"Loading..."})}):(null==C||null===(E=C.data)||void 0===E||null===(E=E.data)||void 0===E?void 0:E.length)>0?s.jsxs(s.Fragment,{children:[(null==C||null===(_=C.data)||void 0===_||null===(_=_.data)||void 0===_?void 0:_.length)>0?null==C||null===(k=C.data)||void 0===k||null===(k=k.data)||void 0===k?void 0:k.map((function(e){return s.jsxs(d.Fragment,{children:[s.jsxs(u.Card,{className:"w-full",children:[s.jsxs(u.CardBody,{children:[s.jsxs("div",{className:"flex justify-between gap-2 mb-4",children:[s.jsxs("div",{className:"relative grid items-center px-2 py-1 font-sans text-xs font-bold text-red-900 uppercase rounded-md select-none whitespace-nowrap bg-red-500/20",children:[s.jsx("div",{className:"absolute w-4 h-4 top-2/4 left-1 -translate-y-2/4",children:s.jsx("span",{className:"mx-auto mt-1 block h-2 w-2 rounded-full bg-red-900 content-['']"})}),s.jsx("span",{className:"ml-4",children:null==e?void 0:e.current_role})]}),s.jsxs("div",{className:"relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20",children:[s.jsx("div",{className:"absolute w-4 h-4 top-2/4 left-1 -translate-y-2/4",children:s.jsx("span",{className:"mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']"})}),s.jsx("span",{className:"ml-4",children:null==e?void 0:e.status})]})]}),s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold",children:"Application No"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm ",children:null==e?void 0:e.saf_no})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold",children:"Name"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm ",children:null==e?void 0:e.owner_name})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold",children:"Mobile No"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm ",children:null==e?void 0:e.mobile_no})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold",children:"Assessment"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm ",children:null==e?void 0:e.assessment_type})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold",children:"Ward"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm ",children:null==e?void 0:e.new_ward_no})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold",children:"Address"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm truncate w-20",children:null==e?void 0:e.prop_address})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm font-semibold",children:"Label"})}),s.jsx("div",{children:s.jsx("h1",{className:"text-sm truncate w-20",children:null==e?void 0:e.currentRole})})]})]}),s.jsx(u.CardFooter,{className:"-mt-8",children:s.jsxs(u.Button,{onClick:function(){return F("/amc-app/property/saf-property-details/".concat(null==e?void 0:e.id))},size:"sm",variant:"text",className:"flex items-center gap-2 bg-gray-200 text-blue-500",children:["View Details",s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"h-4 w-4",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"})})]})})]}),s.jsx("div",{className:"border-t border-gray-200 my-2"})]},null==e?void 0:e.id)})):null,s.jsx(j,{active:null==O?void 0:O.searchSafApp,noOfPage:null==C||null===(B=C.data)||void 0===B?void 0:B.total,setActive:null==O?void 0:O.setSearchSafApp})]}):s.jsx("div",{className:"flex justify-center my-16 items-center",children:s.jsx("h1",{className:"font-semibold",children:"No Record Found"})})]})})}))}}}))}();
