!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},i=Object.prototype,o=i.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(r){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),s=new I(n||[]);return a(o,"_invoke",{value:S(e,r,s)}),o}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var m="suspendedStart",p="suspendedYield",y="executing",v="completed",x={};function g(){}function b(){}function j(){}var w={};d(w,l,(function(){return this}));var N=Object.getPrototypeOf,P=N&&N(N(B([])));P&&P!==i&&o.call(P,l)&&(w=P);var L=j.prototype=g.prototype=Object.create(w);function O(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function E(t,r){function n(i,a,s,l){var c=h(t[i],t,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==e(d)&&o.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,s,l)}),(function(e){n("throw",e,s,l)})):r.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,l)}))}l(c.arg)}var i;a(this,"_invoke",{value:function(e,t){function o(){return new r((function(r,i){n(e,t,r,i)}))}return i=i?i.then(o,o):o()}})}function S(e,t,n){var i=m;return function(o,a){if(i===y)throw new Error("Generator is already running");if(i===v){if("throw"===o)throw a;return{value:r,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var l=_(s,n);if(l){if(l===x)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===m)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=y;var c=h(e,t,n);if("normal"===c.type){if(i=n.done?v:p,c.arg===x)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=v,n.method="throw",n.arg=c.arg)}}}function _(e,t){var n=t.method,i=e.iterator[n];if(i===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,_(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),x;var o=h(i,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,x;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,x):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,x)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function B(t){if(t||""===t){var n=t[l];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function e(){for(;++i<t.length;)if(o.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}throw new TypeError(e(t)+" is not iterable")}return b.prototype=j,a(L,"constructor",{value:j,configurable:!0}),a(j,"constructor",{value:b,configurable:!0}),b.displayName=d(j,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,j):(e.__proto__=j,d(e,u,"GeneratorFunction")),e.prototype=Object.create(L),e},n.awrap=function(e){return{__await:e}},O(E.prototype),d(E.prototype,c,(function(){return this})),n.AsyncIterator=E,n.async=function(e,t,r,i,o){void 0===o&&(o=Promise);var a=new E(f(e,t,r,i),o);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(L),d(L,u,"Generator"),d(L,l,(function(){return this})),d(L,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=B,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(F),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,i){return s.type="throw",s.arg=e,t.next=n,i&&(t.method="next",t.arg=r),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,x):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),x},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),F(r),x}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;F(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:B(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),x}},n}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(t,r,n){var i;return i=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,r||"default");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(r,"string"),(r="symbol"==e(i)?i:String(i))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function o(e,t,r,n,i,o,a){try{var s=e[o](a),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(n,i)}System.register(["./index-legacy-wpsLowul.js","./index.esm-legacy-VOC7C74u.js","./TextField-legacy-wVh32IJt.js","./index.esm-legacy-1xC1Vmkv.js","./index-legacy--OZPsWJ4.js","./FormProvider-legacy-NJDnKWWU.js","./LoaderButton-legacy-4RX3XU1_.js","./SelectField-legacy-Zh9hdnEb.js","./tiny-warning.esm-legacy-ugHgGGpL.js"],(function(e,r){"use strict";var i,a,s,l,c,u,d,f,h,m,p,y,v,x,g,b,j;return{setters:[function(e){i=e.u,a=e.l,s=e.p,l=e.j,c=e.r,u=e.L},function(e){d=e.I,f=e.a},function(e){h=e.u,m=e.T},function(e){p=e.c,y=e.a},function(e){v=e.U,x=e.P},function(e){g=e.F},function(e){b=e.L},function(e){j=e.S},null],execute:function(){e("default",(function(){var e,p,y,P,L=i(),O=L.searchProperty,E=L.setSearchProperty;v("Search Holding");var S=a({api:s.getFilterPropDetails,config:O,value:[O.filteredBy,O.parameter,O.zoneId,O.wardId,O.page,O.perPage],options:{enabled:!!O.filteredBy}}),_=S.data,k=(S.isPending,S.isLoading),F=(S.isError,S.refetch,S.isRefetching,S.isFetching,h({enableReinitialize:!0,initialValues:O,validationSchema:N,onSubmit:(D=t().mark((function e(r){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(n(n({},O),{},{filteredBy:r.filteredBy,parameter:r.parameter,zoneId:r.zoneId,wardId:r.wardId}));case 1:case"end":return e.stop()}}),e)})),T=function(){var e=this,t=arguments;return new Promise((function(r,n){var i=D.apply(e,t);function a(e){o(i,r,n,a,s,"next",e)}function s(e){o(i,r,n,a,s,"throw",e)}a(void 0)}))},function(e){return T.apply(this,arguments)})})),I=F.values,B=a({api:s.getWardByZone,config:{zoneId:I.zoneId},value:[I.zoneId],options:{enabled:!!I.zoneId}}),z=B.data;B.isPending,B.isError,B.error,B.isLoading;var D,T;return l.jsx(x,{title:"Search Holding",children:l.jsx("div",{className:"px-4 py-4 flex-1",children:l.jsxs(g,{formik:F,children:[l.jsx(c.Card,{className:"w-full",children:l.jsxs(c.CardBody,{children:[l.jsx("div",{className:"flex justify-between items-center",children:l.jsx("h1",{className:"text-sm font-semibold",children:"Search Holding"})}),l.jsx("div",{className:"my-4 border-b-2"}),l.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[l.jsxs(j,{label:"Filter By",name:"filteredBy",formik:F,children:[l.jsx("option",{value:"",children:"select"}),r.map((function(e){return l.jsx("option",{value:e.value,children:e.label},e.id)}))]}),l.jsxs(j,{label:"Zone",name:"zoneId",formik:F,children:[l.jsx("option",{value:"",children:"select"}),w.map((function(e){return l.jsx("option",{value:e.value,children:e.label},e.id)}))]}),l.jsxs(j,{label:"select",formik:F,name:"wardId",children:[l.jsx("option",{value:"1",children:"select"}),null==z||null===(e=z.data)||void 0===e?void 0:e.map((function(e){return l.jsx("option",{value:e.id,children:e.ward_name},e.id)}))]}),l.jsx(m,{label:"Parameter",name:"parameter",type:"text",formik:F})]}),l.jsx("div",{className:"flex justify-center mt-2",children:l.jsx(b,{type:"submit",disabled:k,loading:k,children:"Search"})})]})}),k?l.jsx("div",{className:"text-center py-52",children:"Loading..."}):l.jsx(l.Fragment,{children:(null==_||null===(p=_.data)||void 0===p||null===(p=p.data)||void 0===p?void 0:p.length)>0?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"my-4 border-b-2"}),l.jsxs("div",{className:"flex justify-between items-center gap-4 mt-2",children:[l.jsxs("div",{className:"flex justify-start items-center gap-2",children:[l.jsx(d,{className:"text-2xl",onClick:function(){E(n(n({},O),{},{page:O.page-1}))}}),l.jsxs(c.Typography,{color:"gray",children:[O.page," of"," ",null==_||null===(y=_.data)||void 0===y?void 0:y.last_page]}),l.jsx(f,{className:"text-2xl",onClick:function(){E(n(n({},O),{},{page:O.page+1}))}})]}),l.jsx("h1",{className:"text-sm font-semibold",children:"Holding List"}),l.jsx("div",{className:"flex items-center gap-2",children:l.jsxs(j,{name:"perPage",value:F.values.perPage,onChange:function(e){E(n(n({},O),{},{perPage:e.target.value}))},children:[l.jsx("option",{value:"10",children:"10"}),l.jsx("option",{value:"20",children:"20"}),l.jsx("option",{value:"30",children:"50"}),l.jsx("option",{value:"40",children:"100"})]})})]}),l.jsx("div",{className:"my-4 border-b-2"}),null==_||null===(P=_.data)||void 0===P||null===(P=P.data)||void 0===P?void 0:P.map((function(e){return l.jsx(c.Card,{className:"w-full mb-5",children:l.jsxs(c.CardBody,{children:[l.jsx("div",{className:"flex items-center justify-between -mt-1",children:l.jsx("div",{className:"flex items-center",children:l.jsx("h1",{className:"font-bold text-sm",children:"Details"})})}),l.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),l.jsxs("div",{className:"flex items-center justify-between mb-1",children:[l.jsx("h1",{className:"text-sm font-semibold",children:"Holding No:"}),l.jsx("p",{className:"text-sm text-end",children:e.holding_no})]}),l.jsxs("div",{className:"flex items-center justify-between mb-1",children:[l.jsx("h1",{className:"text-sm font-semibold",children:"Property No:"}),l.jsx("p",{className:"text-sm text-end",children:e.property_no})]}),l.jsxs("div",{className:"flex items-center justify-between mb-1",children:[l.jsx("h1",{className:"text-sm font-semibold",children:"Zone:"}),l.jsx("p",{className:"text-sm text-end",children:e.zone_name})]}),l.jsxs("div",{className:"flex items-center justify-between mb-1",children:[l.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),l.jsx("p",{className:"text-sm text-end truncate w-60",children:e.prop_address})]}),l.jsxs("div",{className:"flex items-center justify-between mb-1",children:[l.jsx("h1",{className:"text-sm font-semibold",children:"Mobile No:"}),l.jsx("p",{className:"text-sm text-end",children:e.mobile_no})]}),l.jsxs("div",{className:"flex items-center justify-between mb-1",children:[l.jsx("h1",{className:"text-sm font-semibold",children:"Owner Name:"}),l.jsx("p",{className:"text-sm text-end truncate w-60",children:e.owner_name})]}),l.jsxs("div",{className:"flex items-center justify-between mb-1",children:[l.jsx("h1",{className:"text-sm font-semibold",children:"Payment Status:"}),l.jsx("p",{className:"text-sm font-semibold ".concat(1===e.paid_status?"text-green-500":"text-red-500"),children:1===e.paid_status?"Paid":"Pending"})]}),l.jsx("div",{className:"my-2 border-b-2 bg-indigo-800 text-blue-gray-600"}),l.jsxs("div",{className:"flex items-center justify-around mt-4 -mb-1 gap-6",children:[l.jsx(u,{to:"/amc-app/property/pro-basic-details/".concat(e.id),className:"text-xs font-bold text-blue-600",children:"Basic Details"}),l.jsx(u,{to:"/amc-app/property/demand-details/".concat(e.id),className:"text-xs font-bold text-blue-600",children:"Demand Details"}),l.jsx(u,{to:"/amc-app/property/payment-history/".concat(e.id),className:"text-xs font-bold text-blue-600",children:"Payment History"})]})]})},e.id)}))]}):l.jsx("div",{className:"text-center py-52",children:"No Record Found!"})}),l.jsx("div",{className:"my-4 border-b-2"})]})})})}));var r=[{id:1,label:"Old Property No",value:"propertyNo"},{id:2,label:"Holding No",value:"holdingNo"},{id:3,label:"Mobile",value:"mobileNo"},{id:4,label:"Owner Name",value:"ownerName"}],w=[{id:1,label:"Zone A-East",value:"1"},{id:2,label:"Zone B-West",value:"2"},{id:3,label:"Zone C-North",value:"3"},{id:4,label:"Zone D-South",value:"4"}],N=p().shape({filteredBy:y().required("Filter By is required")})}}}))}();
