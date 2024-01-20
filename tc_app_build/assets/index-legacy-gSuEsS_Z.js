!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},a=Object.prototype,l=a.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",d=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(n){u=function(e,t,n){return e[t]=n}}function m(e,t,n,r){var a=t&&t.prototype instanceof b?t:b,l=Object.create(a.prototype),o=new S(r||[]);return i(l,"_invoke",{value:T(e,n,o)}),l}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=m;var f="suspendedStart",x="suspendedYield",v="executing",p="completed",y={};function b(){}function j(){}function g(){}var w={};u(w,s,(function(){return this}));var N=Object.getPrototypeOf,D=N&&N(N(F([])));D&&D!==a&&l.call(D,s)&&(w=D);var L=g.prototype=b.prototype=Object.create(w);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function _(t,n){function r(a,i,o,s){var d=h(t[a],t,i);if("throw"!==d.type){var c=d.arg,u=c.value;return u&&"object"==e(u)&&l.call(u,"__await")?n.resolve(u.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):n.resolve(u).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(d.arg)}var a;i(this,"_invoke",{value:function(e,t){function l(){return new n((function(n,a){r(e,t,n,a)}))}return a=a?a.then(l,l):l()}})}function T(e,t,r){var a=f;return function(l,i){if(a===v)throw new Error("Generator is already running");if(a===p){if("throw"===l)throw i;return{value:n,done:!0}}for(r.method=l,r.arg=i;;){var o=r.delegate;if(o){var s=C(o,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===f)throw a=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=v;var d=h(e,t,r);if("normal"===d.type){if(a=r.done?p:x,d.arg===y)continue;return{value:d.arg,done:r.done}}"throw"===d.type&&(a=p,r.method="throw",r.arg=d.arg)}}}function C(e,t){var r=t.method,a=e.iterator[r];if(a===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,C(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var l=h(a,e.iterator,t.arg);if("throw"===l.type)return t.method="throw",t.arg=l.arg,t.delegate=null,y;var i=l.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,y):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function F(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(l.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return j.prototype=g,i(L,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:j,configurable:!0}),j.displayName=u(g,c,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,c,"GeneratorFunction")),e.prototype=Object.create(L),e},r.awrap=function(e){return{__await:e}},E(_.prototype),u(_.prototype,d,(function(){return this})),r.AsyncIterator=_,r.async=function(e,t,n,a,l){void 0===l&&(l=Promise);var i=new _(m(e,t,n,a),l);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(L),u(L,c,"Generator"),u(L,s,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=F,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,a){return o.type="throw",o.arg=e,t.next=r,a&&(t.method="next",t.arg=n),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=l.call(i,"catchLoc"),d=l.call(i,"finallyLoc");if(s&&d){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&l.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;P(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:F(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),y}},r}function n(e,t,n,r,a,l,i){try{var o=e[l](i),s=o.value}catch(d){return void n(d)}o.done?t(s):Promise.resolve(s).then(r,a)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(a,l){var i=e.apply(t,r);function o(e){n(i,a,l,o,s,"next",e)}function s(e){n(i,a,l,o,s,"throw",e)}o(void 0)}))}}System.register(["./index-legacy-4-SxEBEZ.js","./formik.esm-legacy-4ADF3H3U.js","./index.esm-legacy-ofE49Hji.js","./FormProvider-legacy-hfv0joRS.js","./TextField-legacy-XOlRJzAH.js","./index-legacy-qDb_YGJL.js","./index-legacy-HxVWfv7U.js","./resizeImage-legacy-qLZA4Xx9.js"],(function(e,n){"use strict";var a,l,i,o,s,d,c,u,m,h,f,x,v,p,y,b;return{setters:[function(e){a=e.a,l=e.h,i=e.n,o=e.m,s=e.w,d=e.Q,c=e.j,u=e.r},function(e){m=e.u},function(e){h=e.c,f=e.a,x=e.f},function(e){v=e.F},function(e){p=e.T},null,function(e){y=e.P},function(e){b=e.r}],execute:function(){e("default",(function(){var e,n,j,g,w,N,D,L,E,_,T,C,O,P,S,F,k,A,R,G,I=a(),M=l({}),B=i().id,U=o({api:s.waterGetDetails,config:{applicationId:B},value:[B],options:{enabled:!!B}}),q=o({api:s.waterListDemand,config:{ConsumerId:B},value:[B],options:{enabled:!!B}}),z=m({enableReinitialize:!0,initialValues:{consumerId:B,demandUpto:(new Date).toISOString().split("T")[0]||"",finalRading:"",document:"",connectionType:null==q||null===(e=q.data)||void 0===e||null===(e=e.data)||void 0===e||null===(e=e.meterDetails)||void 0===e?void 0:e.connection_type},validationSchema:h().shape({demandUpto:f().required("Demand Upto is required"),connectionType:f().optional(),finalRading:f().when("connectionType",{is:function(e){return 1==e},then:function(){return f().required("Final Meter Reading is required")}}),document:x().when("connectionType",{is:function(e){return 1==e},then:function(){return x().required("Document is required")}})}),onSubmit:(V=r(t().mark((function e(n,r){var a,l,i,o,c,u,m;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.resetForm,console.log(n),e.prev=2,(i=new FormData).append("consumerId",null==n?void 0:n.consumerId),i.append("demandUpto",null==n?void 0:n.demandUpto),i.append("finalRading",null==n?void 0:n.finalRading),i.append("document",null==n?void 0:n.document),e.next=10,M.mutateAsync({api:s.generateDemandWater,data:i});case 10:null!=(o=e.sent)&&null!==(l=o.data)&&void 0!==l&&l.status?(d.success(null==o||null===(c=o.data)||void 0===c?void 0:c.message),q.refetch()):d.error(null==o||null===(u=o.data)||void 0===u?void 0:u.message),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),d.error(null===e.t0||void 0===e.t0||null===(m=e.t0.response)||void 0===m||null===(m=m.data)||void 0===m?void 0:m.message);case 17:a();case 18:case"end":return e.stop()}}),e,null,[[2,14]])}))),function(e,t){return V.apply(this,arguments)})}),Y=function(){var e=r(t().mark((function e(n){var r,a,l;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(n.target.files[0]);case 2:a=e.sent,l=new File([a],null==n||null===(r=n.target)||void 0===r||null===(r=r.files[0])||void 0===r?void 0:r.name,{type:"image/*"}),z.setFieldValue("document",l);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var V;return c.jsx(y,{title:"Consumer Details",children:c.jsxs("div",{className:"p-4",children:[c.jsx(u.Card,{children:c.jsxs(u.CardBody,{children:[c.jsx("div",{className:"flex flex-row justify-between mb-3",children:c.jsx("h1",{className:"text-base font-semibold",children:"# Basic Details"})}),c.jsx("div",{className:"my-3 border-b-2"}),c.jsxs("div",{className:"flex flex-col",children:[c.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Applicant name:"}),c.jsx("h1",{className:"text-sm",children:null==U||null===(n=U.data)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.applicant_name})]}),c.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Property No:"}),c.jsx("h1",{className:"text-sm",children:null==U||null===(j=U.data)||void 0===j||null===(j=j.data)||void 0===j?void 0:j.folio_no})]}),c.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Consumer No:"}),c.jsx("h1",{className:"text-sm",children:null==U||null===(g=U.data)||void 0===g||null===(g=g.data)||void 0===g?void 0:g.consumer_no})]}),c.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Reading Date:"}),c.jsx("h1",{className:"text-sm",children:(null==U||null===(w=U.data)||void 0===w||null===(w=w.data)||void 0===w?void 0:w.reading_date)||"--"})]}),c.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Address:"}),c.jsx("h1",{className:"text-sm w-36 truncate",children:(null==U||null===(N=U.data)||void 0===N||null===(N=N.data)||void 0===N?void 0:N.address)||"--"})]})]})]})}),c.jsxs(u.Card,{className:"w-full mt-5",children:[c.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:c.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"# Meter/Fixed Connection Details"})}),c.jsx(u.CardBody,{children:c.jsxs("div",{className:"flex flex-col",children:[c.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Connection Type:"}),c.jsx("h1",{className:"text-sm",children:(null==q||null===(D=q.data)||void 0===D||null===(D=D.data)||void 0===D||null===(D=D.meterDetails)||void 0===D?void 0:D.ConnectionTypeName)||"--"})]}),c.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Meter No:"}),c.jsx("h1",{className:"text-sm",children:null==U||null===(L=U.data)||void 0===L||null===(L=L.data)||void 0===L||null===(L=L.meterDetails)||void 0===L?void 0:L.meter_no})]}),c.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Last Meter Reading:"}),c.jsx("h1",{className:"text-sm",children:null==U||null===(E=U.data)||void 0===E||null===(E=E.data)||void 0===E?void 0:E.finalReading})]}),c.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Reading Date:"}),c.jsx("h1",{className:"text-sm",children:(null==U||null===(_=U.data)||void 0===_||null===(_=_.data)||void 0===_?void 0:_.readingdate)||"--"})]}),c.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Connection Date:"}),c.jsx("h1",{className:"text-sm",children:(null==U||null===(T=U.data)||void 0===T||null===(T=T.data)||void 0===T||null===(T=T.meterDetails)||void 0===T?void 0:T.connection_date)||"--"})]})]})})]}),c.jsxs(u.Card,{className:"mt-4 w-full",children:[c.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:c.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Demand List"})}),c.jsx(u.CardBody,{children:c.jsx("div",{className:"relative overflow-x-auto  sm:rounded-lg",children:c.jsxs("table",{className:"w-full text-sm text-left  border-slate-400 border",children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"# Sno."}),c.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND FROM"}),c.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND UPTO"}),c.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"DEMAND AMOUNT"}),c.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"PENALTY"}),c.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"CONNECTION TYPE"}),c.jsx("th",{className:"text-sm font-semibold p-4 border border-slate-300",children:"PAYABLE AMOUNT"})]})}),c.jsx("tbody",{children:null==q||null===(C=q.data)||void 0===C||null===(C=C.data)||void 0===C||null===(C=C.consumerDemands)||void 0===C?void 0:C.map((function(e,t){return c.jsxs("tr",{children:[c.jsx("td",{className:"text-sm p-4 border border-slate-300",children:t+1}),c.jsx("td",{className:"text-sm p-4 border border-slate-300",children:e.demand_from}),c.jsx("td",{className:"text-sm p-4 border border-slate-300",children:e.demand_upto}),c.jsx("td",{className:"text-sm p-4 border border-slate-300",children:e.balance_amount}),c.jsx("td",{className:"text-sm p-4 border border-slate-300",children:e.penalty}),c.jsx("td",{className:"text-sm p-4 border border-slate-300",children:e.connection_type}),c.jsx("td",{className:"text-sm p-4 border border-slate-300",children:e.amount})]},t)}))})]})})})]}),c.jsx(v,{formik:z,children:c.jsxs(u.Card,{className:"mt-4 w-full",children:[c.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:c.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Generate Demand"})}),c.jsx(u.CardBody,{children:c.jsxs("div",{className:"my-3",children:[c.jsxs("div",{className:"flex flex-col gap-2",children:[1==(null==q||null===(O=q.data)||void 0===O||null===(O=O.data)||void 0===O||null===(O=O.meterDetails)||void 0===O?void 0:O.connection_type)&&c.jsxs(c.Fragment,{children:[c.jsx(p,{formik:z,name:"finalRading",type:"number",placeholder:"Final Meter Reading"}),c.jsxs("div",{children:[c.jsx(p,{accept:"image/*",name:"document",type:"file",onChange:function(e){return Y(e)}}),c.jsx("small",{className:"text-red-500 -mt-6",children:null==z||null===(P=z.errors)||void 0===P?void 0:P.document})]})]}),c.jsx(p,{disabled:!0,name:"demandUpto",type:"text",formik:z})]}),c.jsx("div",{className:"flex flex-row justify-center mt-2 gap-5",children:c.jsx(u.Button,{type:"submit",color:"blue",size:"sm",loading:M.isLoading,disabled:M.isLoading,children:c.jsx("small",{children:"Generate Demand"})})})]})})]})}),c.jsxs(u.Card,{className:"w-full mt-4",children:[c.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:c.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Payment Details"})}),c.jsx(u.CardBody,{children:c.jsxs("div",{className:"flex flex-col",children:[c.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Total Dues:"}),c.jsxs("h1",{className:"text-sm",children:["₹"," ",null==q||null===(S=q.data)||void 0===S||null===(S=S.data)||void 0===S?void 0:S.totalSumDemand]})]}),c.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Due From:"}),c.jsx("h1",{className:"text-sm",children:null==U||null===(F=U.data)||void 0===F||null===(F=F.data)||void 0===F?void 0:F.demand_from})]}),c.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Due Upto:"}),c.jsx("h1",{className:"text-sm",children:null==U||null===(k=U.data)||void 0===k||null===(k=k.data)||void 0===k?void 0:k.demand_upto})]}),c.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Total Due Demand:"}),c.jsx("h1",{className:"text-sm",children:(null==U||null===(A=U.data)||void 0===A||null===(A=A.data)||void 0===A?void 0:A.cycle)||"--"})]}),c.jsxs("div",{className:"flex flex-row justify-between mb-3",children:[c.jsx("h1",{className:"text-sm font-semibold",children:"Total Payable Amount:"}),c.jsxs("h1",{className:"text-sm ",children:["₹ ",(null==q||null===(R=q.data)||void 0===R||null===(R=R.data)||void 0===R?void 0:R.totalSumDemand)||"0"]})]}),c.jsx("div",{className:"my-3 border-b-2"}),c.jsxs("div",{className:"flex flex-row justify-center gap-5",children:[(null==q||null===(G=q.data)||void 0===G||null===(G=G.data)||void 0===G?void 0:G.totalSumDemand)>0&&c.jsx(u.Button,{color:"blue",size:"sm",onClick:function(){return I("/amc-app/water/water-payment/".concat(B))},children:c.jsx("small",{children:"Pay Demand"})}),c.jsx(u.Button,{color:"red",size:"sm",onClick:function(){return I("/amc-app/water/demand-receipt/".concat(B))},children:c.jsx("small",{children:"Print Demand"})})]})]})})]})]})})}))}}}))}();
