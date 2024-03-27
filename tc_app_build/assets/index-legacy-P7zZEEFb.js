!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},i=Object.prototype,o=i.hasOwnProperty,l=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(r){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),a=new F(n||[]);return l(o,"_invoke",{value:E(e,r,a)}),o}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var m="suspendedStart",v="suspendedYield",p="executing",y="completed",x={};function g(){}function b(){}function j(){}var w={};d(w,s,(function(){return this}));var N=Object.getPrototypeOf,P=N&&N(N(B([])));P&&P!==i&&o.call(P,s)&&(w=P);var O=j.prototype=g.prototype=Object.create(w);function L(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function S(t,r){function n(i,l,a,s){var c=h(t[i],t,l);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==e(d)&&o.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):r.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;l(this,"_invoke",{value:function(e,t){function o(){return new r((function(r,i){n(e,t,r,i)}))}return i=i?i.then(o,o):o()}})}function E(e,t,n){var i=m;return function(o,l){if(i===p)throw new Error("Generator is already running");if(i===y){if("throw"===o)throw l;return{value:r,done:!0}}for(n.method=o,n.arg=l;;){var a=n.delegate;if(a){var s=_(a,n);if(s){if(s===x)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===m)throw i=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=p;var c=h(e,t,n);if("normal"===c.type){if(i=n.done?y:v,c.arg===x)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=y,n.method="throw",n.arg=c.arg)}}}function _(e,t){var n=t.method,i=e.iterator[n];if(i===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,_(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),x;var o=h(i,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,x;var l=o.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,x):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,x)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function B(t){if(t||""===t){var n=t[s];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,l=function e(){for(;++i<t.length;)if(o.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=r,e.done=!0,e};return l.next=l}}throw new TypeError(e(t)+" is not iterable")}return b.prototype=j,l(O,"constructor",{value:j,configurable:!0}),l(j,"constructor",{value:b,configurable:!0}),b.displayName=d(j,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,d(e,u,"GeneratorFunction")),e.prototype=Object.create(O),e},n.awrap=function(e){return{__await:e}},L(S.prototype),d(S.prototype,c,(function(){return this})),n.AsyncIterator=S,n.async=function(e,t,r,i,o){void 0===o&&(o=Promise);var l=new S(f(e,t,r,i),o);return n.isGeneratorFunction(t)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},L(O),d(O,u,"Generator"),d(O,s,(function(){return this})),d(O,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=B,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,i){return a.type="throw",a.arg=e,t.next=n,i&&(t.method="next",t.arg=r),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var l=this.tryEntries[i],a=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var s=o.call(l,"catchLoc"),c=o.call(l,"finallyLoc");if(s&&c){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(s){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var l=i?i.completion:{};return l.type=e,l.arg=t,i?(this.method="next",this.next=i.finallyLoc,x):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),x},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),x}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:B(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),x}},n}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(t,r,n){var i;return i=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,r||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(r,"string"),(r="symbol"==e(i)?i:String(i))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function o(e,t,r,n,i,o,l){try{var a=e[o](l),s=a.value}catch(c){return void r(c)}a.done?t(s):Promise.resolve(s).then(n,i)}System.register(["./index-legacy-v2qFtUJU.js","./router-legacy-rigPOyFI.js","./index.esm-legacy-Pf4e6Mnq.js","./formik.esm-legacy-LafwCeEO.js","./index.esm-legacy-5u-Ffckd.js","./tailwind-legacy-e6PAgAmt.js","./index-legacy-3NWst4mJ.js","./FormProvider-legacy-XEc5ijVo.js","./TextField-legacy-JkeAT8vG.js","./LoaderButton-legacy-3obS5HEk.js","./SelectField-legacy-YdIIj6Gh.js","./index-legacy-vtVAGFCF.js","./index-legacy-tWw1fTbn.js","./reactQuery-legacy-jKPiMKrc.js","./reactQueryDevtools-legacy-f3hWO9gP.js","./axios-legacy-rH2Rcf5_.js","./reactIcons-legacy-ELZmKVKq.js","./headlessui-legacy-Yu0VJXN1.js","./ArrowRightIcon-legacy-O7aY2XEJ.js"],(function(e,r){"use strict";var i,l,a,s,c,u,d,f,h,m,v,p,y,x,g,b,j;return{setters:[function(e){i=e.u,l=e.a,a=e.p,s=e.j},function(e){c=e.u},function(e){u=e.I},function(e){d=e.u},function(e){f=e.c,h=e.a},function(e){m=e.r},function(e){v=e.U,p=e.P},function(e){y=e.F},function(e){x=e.T},function(e){g=e.L},function(e){b=e.S},null,function(e){j=e.S},null,null,null,null,null,null],execute:function(){e("default",(function(){var e,f,h,P,O,L,S,E,_,I,k,F=c(),B=i();v("Search Holding");var z=l({api:a.getFilterPropDetails,config:null==B?void 0:B.searchProperty,value:[null==B||null===(e=B.searchProperty)||void 0===e?void 0:e.filteredBy,null==B||null===(f=B.searchProperty)||void 0===f?void 0:f.parameter,null==B||null===(h=B.searchProperty)||void 0===h?void 0:h.zoneId,null==B||null===(P=B.searchProperty)||void 0===P?void 0:P.wardId,null==B||null===(O=B.searchProperty)||void 0===O?void 0:O.page,null==B||null===(L=B.searchProperty)||void 0===L?void 0:L.perPage],options:{enabled:!(null==B||null===(S=B.searchProperty)||void 0===S||!S.filteredBy)}}),D=z.data,T=(z.isPending,z.isLoading),C=(z.isError,z.error,z.refetch,z.isRefetching,z.isFetching),G=(z.isFetched,z.isPreviousData,d({enableReinitialize:!0,initialValues:null==B?void 0:B.searchProperty,validationSchema:N,onSubmit:(W=t().mark((function e(r){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null==B||B.setSearchProperty(n(n({},null==B?void 0:B.searchProperty),{},{filteredBy:null==r?void 0:r.filteredBy,parameter:null==r?void 0:r.parameter,zoneId:null==r?void 0:r.zoneId,wardId:null!=r&&r.zoneId?null==r?void 0:r.wardId:""}));case 1:case"end":return e.stop()}}),e)})),q=function(){var e=this,t=arguments;return new Promise((function(r,n){var i=W.apply(e,t);function l(e){o(i,r,n,l,a,"next",e)}function a(e){o(i,r,n,l,a,"throw",e)}l(void 0)}))},function(e){return q.apply(this,arguments)})})),Z=G.values,A=l({api:a.getWardByZone,config:{zoneId:null==Z?void 0:Z.zoneId},value:[null==Z?void 0:Z.zoneId],options:{enabled:!(null==Z||!Z.zoneId)}}),H=A.data,R=(A.isPending,A.isError,A.error,A.isLoading);var W,q;return s.jsx(p,{title:"Search Holding",children:s.jsx("div",{className:"px-4 py-4 flex-1",children:s.jsxs(y,{formik:G,children:[s.jsx(m.Card,{className:"w-full",children:s.jsxs(m.CardBody,{children:[s.jsxs("div",{className:"flex justify-between items-center",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Search Holding"}),s.jsxs("div",{className:"items-center flex justify-start px-2 py-1 border rounded-lg gap-1 cursor-pointer",onClick:function(){null==B||B.setSearchProperty({filteredBy:"",parameter:"",zoneId:"",wardId:"",page:1,perPage:10}),null==G||G.resetForm()},children:[s.jsx(u,{className:"text-blue-600",size:"1.2rem"}),s.jsx("small",{className:"text-blue-600",children:"Reset"})]})]}),s.jsx("div",{className:"my-4 border-b-2"}),s.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[s.jsxs(b,{label:"Filter By",name:"filteredBy",formik:G,children:[s.jsx("option",{value:"",children:"select"}),null==r?void 0:r.map((function(e){return s.jsx("option",{value:null==e?void 0:e.value,children:null==e?void 0:e.label},null==e?void 0:e.id)}))]}),s.jsxs(b,{label:"Zone",name:"zoneId",formik:G,children:[s.jsx("option",{value:"",children:"select"}),w.map((function(e){return s.jsx("option",{value:null==e?void 0:e.value,children:null==e?void 0:e.label},null==e?void 0:e.id)}))]}),s.jsxs("div",{children:[s.jsxs(b,{label:"Ward",formik:G,name:"wardId",disabled:R,children:[s.jsx("option",{value:"",children:"select"}),null==H||null===(E=H.data)||void 0===E?void 0:E.map((function(e){return s.jsx("option",{value:null==e?void 0:e.id,children:null==e?void 0:e.ward_name},null==e?void 0:e.id)}))]}),s.jsx("small",{className:"text-blue-500",children:R?"Please wait...":""})]}),s.jsx(x,{label:"Parameter",name:"parameter",type:"text",formik:G})]}),s.jsx("div",{className:"flex justify-center mt-2",children:s.jsx(g,{type:"submit",disabled:C,loading:T,children:"Search"})})]})}),C?s.jsx("div",{className:"text-center py-40 text-blue-600",children:"Please Wait...."}):s.jsx(s.Fragment,{children:(null==D||null===(_=D.data)||void 0===_||null===(_=_.data)||void 0===_?void 0:_.length)>0?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"my-4 border-b-2"}),null==D||null===(I=D.data)||void 0===I||null===(I=I.data)||void 0===I?void 0:I.map((function(e){return s.jsx(m.Card,{className:"w-full mb-5",children:s.jsxs(m.CardBody,{children:[s.jsx("div",{className:"flex items-center justify-between -mt-1",children:s.jsx("div",{className:"flex items-center",children:s.jsx("h1",{className:"font-bold text-sm",children:"Details"})})}),s.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Holding No:"}),s.jsx("p",{className:"text-sm text-end",children:null==e?void 0:e.holding_no})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Property No:"}),s.jsx("p",{className:"text-sm text-end",children:null==e?void 0:e.property_no})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Zone:"}),s.jsx("p",{className:"text-sm text-end",children:null==e?void 0:e.zone_name})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),s.jsx("p",{className:"text-sm text-end truncate w-60",children:null==e?void 0:e.prop_address})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Mobile No:"}),s.jsx("p",{className:"text-sm text-end",children:null==e?void 0:e.mobile_no})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name:"}),s.jsx("p",{className:"text-sm text-end truncate w-60",children:null==e?void 0:e.owner_name})]}),s.jsxs("div",{className:"flex items-center justify-between mb-1",children:[s.jsx("h1",{className:"text-sm font-semibold",children:"Payment Status:"}),s.jsx("p",{className:"text-sm font-semibold ".concat(1===(null==e?void 0:e.paid_status)?"text-green-500":"text-red-500"),children:1===(null==e?void 0:e.paid_status)?"Paid":"Pending"})]}),s.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),s.jsxs("div",{className:"flex items-center justify-around mt-4 -mb-1 gap-6",children:[s.jsx("div",{onClick:function(){return F("/amc-app/property/pro-basic-details/".concat(null==e?void 0:e.id))},className:"text-xs font-bold text-blue-600",children:"Basic Details"}),s.jsx("div",{onClick:function(){return F("/amc-app/property/demand-details/".concat(null==e?void 0:e.id))},className:"text-xs font-bold text-blue-600",children:"Demand Details"}),s.jsx("div",{onClick:function(){return F("/amc-app/property/payment-history/".concat(null==e?void 0:e.id))},className:"text-xs font-bold text-blue-600",children:"Payment History"})]})]})},null==e?void 0:e.id)})),s.jsx("div",{className:"my-4 border-b-2"}),s.jsx(j,{active:null==B?void 0:B.searchProperty,setActive:null==B?void 0:B.setSearchProperty,noOfPage:null==D||null===(k=D.data)||void 0===k?void 0:k.last_page})]}):s.jsx("div",{className:"flex items-center justify-center py-52",children:s.jsx(m.Typography,{color:"gray",className:"text-center text-sm",children:"No Record Found!"})})})]})})})}));var r=[{id:1,label:"Old Property No",value:"propertyNo"},{id:2,label:"Holding No",value:"holdingNo"},{id:3,label:"Mobile",value:"mobileNo"},{id:4,label:"Owner Name",value:"ownerName"}],w=[{id:1,label:"Zone A-East",value:"1"},{id:2,label:"Zone B-West",value:"2"},{id:3,label:"Zone C-North",value:"3"},{id:4,label:"Zone D-South",value:"4"}],N=f().shape({filteredBy:h().required("Filter By is required")})}}}))}();
