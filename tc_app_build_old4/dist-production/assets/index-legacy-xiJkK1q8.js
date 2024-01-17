!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var n,r={},a=Object.prototype,i=a.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",d=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(n){u=function(e,t,n){return e[t]=n}}function h(e,t,n,r){var a=t&&t.prototype instanceof g?t:g,i=Object.create(a.prototype),o=new C(r||[]);return l(i,"_invoke",{value:_(e,n,o)}),i}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}r.wrap=h;var m="suspendedStart",v="suspendedYield",x="executing",p="completed",y={};function g(){}function j(){}function b(){}var w={};u(w,s,(function(){return this}));var N=Object.getPrototypeOf,k=N&&N(N(B([])));k&&k!==a&&i.call(k,s)&&(w=k);var L=b.prototype=g.prototype=Object.create(w);function O(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(t,n){function r(a,l,o,s){var c=f(t[a],t,l);if("throw"!==c.type){var d=c.arg,u=d.value;return u&&"object"==e(u)&&i.call(u,"__await")?n.resolve(u.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):n.resolve(u).then((function(e){d.value=e,o(d)}),(function(e){return r("throw",e,o,s)}))}s(c.arg)}var a;l(this,"_invoke",{value:function(e,t){function i(){return new n((function(n,a){r(e,t,n,a)}))}return a=a?a.then(i,i):i()}})}function _(e,t,r){var a=m;return function(i,l){if(a===x)throw new Error("Generator is already running");if(a===p){if("throw"===i)throw l;return{value:n,done:!0}}for(r.method=i,r.arg=l;;){var o=r.delegate;if(o){var s=E(o,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===m)throw a=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=x;var c=f(e,t,r);if("normal"===c.type){if(a=r.done?p:v,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=p,r.method="throw",r.arg=c.arg)}}}function E(e,t){var r=t.method,a=e.iterator[r];if(a===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=n,E(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=f(a,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,y;var l=i.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,y):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function B(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,l=function e(){for(;++a<t.length;)if(i.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=n,e.done=!0,e};return l.next=l}}throw new TypeError(e(t)+" is not iterable")}return j.prototype=b,l(L,"constructor",{value:b,configurable:!0}),l(b,"constructor",{value:j,configurable:!0}),j.displayName=u(b,d,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===j||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,d,"GeneratorFunction")),e.prototype=Object.create(L),e},r.awrap=function(e){return{__await:e}},O(S.prototype),u(S.prototype,c,(function(){return this})),r.AsyncIterator=S,r.async=function(e,t,n,a,i){void 0===i&&(i=Promise);var l=new S(h(e,t,n,a),i);return r.isGeneratorFunction(t)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},O(L),u(L,d,"Generator"),u(L,s,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},r.values=B,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,a){return o.type="throw",o.arg=e,t.next=r,a&&(t.method="next",t.arg=n),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var s=i.call(l,"catchLoc"),c=i.call(l,"finallyLoc");if(s&&c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(s){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var l=a?a.completion:{};return l.type=e,l.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;A(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:B(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),y}},r}function n(e,t,n,r,a,i,l){try{var o=e[i](l),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,a)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var l=e.apply(t,r);function o(e){n(l,a,i,o,s,"next",e)}function s(e){n(l,a,i,o,s,"throw",e)}o(void 0)}))}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,l,o=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy-pbe08veb.js","./TextField-legacy-SxoZt1_w.js","./index.esm-legacy-3IpH4IPQ.js","./FormProvider-legacy-QjsiqfoT.js","./RadioButton-legacy-gGzibSst.js","./TextAreaField-legacy-2L_BL9VV.js","./index-legacy-iy-z_WGM.js","./index-legacy-76AzclQp.js","./index-legacy-NB--zh0u.js"],(function(e,n){"use strict";var i,l,o,s,c,d,u,h,f,m,v,x,p,y,g,j,b,w,N,k,L;return{setters:[function(e){i=e.j,l=e.r,o=e.g,s=e.R,c=e.m,d=e.a,u=e.l,h=e.S,f=e.Q,m=e.p,v=e.e,x=e.n},function(e){p=e.u,y=e.T},function(e){g=e.c,j=e.a,b=e.g},function(e){w=e.F},function(e){N=e.R},function(e){k=e.T},null,function(e){L=e.P},null],execute:function(){function n(e){var t=e.open,n=e.setOpen,r=e.url,a=e.ext,o=function(){return n(!t)};return i.jsxs(i.Fragment,{children:[t&&i.jsx("div",{onClick:o,className:"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"}),i.jsx("div",{id:"authentication-modal",tabIndex:-1,"aria-hidden":"true",className:"".concat(t?"flex":"hidden"," overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"),children:i.jsx("div",{className:"relative p-4 w-full max-w-md max-h-full ",children:i.jsxs("div",{className:"relative bg-white rounded-lg shadow dark:bg-gray-700 h-[500px]",children:[i.jsxs("div",{className:"flex items-center justify-between px-4 py-2 md:p-5 border-b rounded-t dark:border-gray-600",children:[i.jsx("h3",{className:"text-base font-semibold text-gray-900 dark:text-white",children:"View Sanction Plan"}),i.jsxs("button",{onClick:o,type:"button",className:"end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"authentication-modal",children:[i.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:i.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),i.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),"pdf"===a?i.jsx("embed",{src:"https://docs.google.com/viewer?url=".concat(r,"&embedded=true"),width:"100%",height:"100%"}):i.jsx("img",{src:r,alt:"Naksha",className:"w-full h-full"}),i.jsx("div",{className:"p-4 md:p-5",children:i.jsx("div",{className:"flex items-center justify-end mt-4 gap-5",children:i.jsx(l.Button,{type:"button",size:"sm",variant:"text",color:"red",onClick:o,className:"mr-1 bg-gray-300",children:i.jsx("span",{children:"Ok"})})})})]})})})]})}e("default",(function(){var e,S,_,E,P,A,C,B,F,T,I,q,V,z,G,R,D,Y,M,U,W,Q,Z=o({}),$=a(s.useState(""),2),H=$[0],J=$[1],K=a(s.useState(!1),2),X=K[0],ee=K[1],te=c().id,ne=d(),re=u({api:m.getUploadDocNaksha,config:{applicationId:te},value:[te],options:{enabled:!!te}}),ae=re.data,ie=(re.refetch,re.error,re.isLoading),le=p({enableReinitialize:!0,initialValues:{areaOfPlot:"",isNaksha:null!=ae&&null!==(e=ae.data)&&void 0!==e&&e.naksha?"":"no",comment:"",message:""},validationSchema:g({isNaksha:j().required("Required"),comment:j().required("Required").max(500,"Max 500 characters"),areaOfPlot:b().when("isNaksha",{is:"yes",then:function(){return b().required("Required")}})}),onSubmit:(se=r(t().mark((function e(n){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.fire({title:"Are you sure?",text:"You are going to verify naksha of this property ",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, Proceed!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then((function(e){e.isConfirmed&&oe(n)})).catch((function(e){var t;f.error(null==e||null===(t=e.response)||void 0===t||null===(t=t.data)||void 0===t?void 0:t.message)}));case 1:case"end":return e.stop()}}),e)}))),function(e){return se.apply(this,arguments)})}),oe=function(){var e=r(t().mark((function e(n){var r,a,i,l,o,s,c,d,u,h,v;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={applicationId:te,IsDouble:"no"===n.isNaksha,areaOfPlot:n.areaOfPlot},e.prev=1,e.next=4,Z.mutateAsync({api:m.nakshaVerify,data:r});case 4:if(null==(i=e.sent)||null===(a=i.data)||void 0===a||!a.status){e.next=14;break}return console.log(null==i||null===(l=i.data)||void 0===l?void 0:l.message),J(null==i||null===(o=i.data)||void 0===o?void 0:o.message),e.next=10,Z.mutateAsync({api:m.safLevel,data:{applicationId:te,action:"forward",comment:"Ok"}});case 10:null!=(c=e.sent)&&null!==(s=c.data)&&void 0!==s&&s.status?(ne("/amc-app/property/saf-verification-list",{replace:!0}),f.success("".concat(H," and ").concat(null==c||null===(d=c.data)||void 0===d?void 0:d.message))):f.error(null==c||null===(u=c.data)||void 0===u?void 0:u.message),e.next=15;break;case 14:f.error(null==i||null===(h=i.data)||void 0===h?void 0:h.message);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),f.error((null===e.t0||void 0===e.t0||null===(v=e.t0.data)||void 0===v?void 0:v.message)||"Something went wrong !");case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}();var se;return v.useEffect((function(){var e;"no"==(null==le||null===(e=le.values)||void 0===e?void 0:e.isNaksha)&&(le.setFieldValue("areaOfPlot",""),le.setFieldValue("message",""))}),[null==le||null===(S=le.values)||void 0===S?void 0:S.isNaksha]),ie?i.jsx(x,{}):i.jsxs(L,{title:"Naksha Verification",children:[i.jsx(n,{open:X,setOpen:ee,url:null==ae||null===(_=ae.data)||void 0===_||null===(_=_.naksha)||void 0===_?void 0:_.doc_path,ext:null==ae||null===(E=ae.data)||void 0===E||null===(E=E.naksha)||void 0===E?void 0:E.ext}),i.jsxs("div",{className:"p-4",children:[i.jsxs(l.Card,{className:"w-full",children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Basic Details"})}),i.jsx(l.CardBody,{children:i.jsxs("div",{className:"grid grid-cols-2 gap-2 items-center",children:[i.jsx("div",{children:i.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application No :"})}),i.jsx("div",{children:i.jsx("h1",{className:"text-sm  text-gray-900",children:null==ae||null===(P=ae.data)||void 0===P?void 0:P.saf_no})}),i.jsx("div",{children:i.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Owner Name :"})}),i.jsx("div",{className:"text-sm  text-gray-900",children:null==ae||null===(A=ae.data)||void 0===A?void 0:A.applicant_name}),i.jsx("div",{children:i.jsxs("h1",{className:"text-sm font-semibold text-gray-900",children:["Buildup Area (",i.jsx("small",{children:"In Sqft"}),") :"]})}),i.jsx("div",{className:"text-sm  text-gray-900",children:null==ae||null===(C=ae.data)||void 0===C?void 0:C.builtup_area}),i.jsx("div",{children:i.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Zone :"})}),i.jsx("div",{className:"text-sm  text-gray-900",children:i.jsx("h1",{className:"text-sm  text-gray-900",children:null==ae||null===(B=ae.data)||void 0===B?void 0:B.zone})}),i.jsx("div",{children:i.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Ward :"})}),i.jsx("div",{className:"text-sm  text-gray-900",children:i.jsx("h1",{className:"text-sm  text-gray-900",children:null==ae||null===(F=ae.data)||void 0===F?void 0:F.new_ward_no})}),i.jsx("div",{children:i.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Property Type :"})}),i.jsx("div",{className:"text-sm  text-gray-900",children:i.jsx("h1",{className:"text-sm  text-gray-900",children:null==ae||null===(T=ae.data)||void 0===T?void 0:T.property_type})}),i.jsx("div",{children:i.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Address :"})}),i.jsx("div",{className:"text-sm  text-gray-900",children:i.jsx("h1",{className:"text-sm  text-gray-900",children:null==ae||null===(I=ae.data)||void 0===I?void 0:I.prop_address})}),i.jsx("div",{children:i.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Assessment Type :"})}),i.jsx("div",{className:"text-sm  text-gray-900",children:i.jsx("h1",{className:"text-sm  text-gray-900",children:null==ae||null===(q=ae.data)||void 0===q?void 0:q.assessment_type})}),i.jsx("div",{children:i.jsx("h1",{className:"text-sm font-semibold text-gray-900",children:"Application Date :"})}),i.jsx("div",{className:"text-sm  text-gray-900",children:i.jsx("h1",{className:"text-sm  text-gray-900",children:null==ae||null===(V=ae.data)||void 0===V?void 0:V.application_date})}),i.jsx("div",{className:"col-span-2 flex justify-center items-center mt-3",children:i.jsx(l.Button,{size:"sm",variant:"outlined",onClick:function(){return ne("/amc-app/property/saf-property-details/".concat(te),{replace:!0})},children:i.jsx("span",{children:"View Saf Details"})})})]})})]}),i.jsx("div",{className:"border-b-2 border-gray-300 mt-2 mb-2"}),i.jsxs(l.Card,{className:"w-full",children:[i.jsx("div",{className:"flex justify-between items-center px-5 bg-blue-gray-400 py-2 rounded-tl-lg rounded-tr-lg",children:i.jsx("h1",{className:"text-base font-semibold text-gray-100",children:"Sanction Plan"})}),i.jsx(l.CardBody,{children:null!=ae&&null!==(z=ae.data)&&void 0!==z&&z.naksha?i.jsxs("div",{className:"grid grid-cols-1 gap-2 items-center",children:["jpg"==(null==ae||null===(G=ae.data)||void 0===G||null===(G=G.naksha)||void 0===G?void 0:G.ext)||"jpeg"==(null==ae||null===(R=ae.data)||void 0===R||null===(R=R.naksha)||void 0===R?void 0:R.ext)||"png"==(null==ae||null===(D=ae.data)||void 0===D||null===(D=D.naksha)||void 0===D?void 0:D.ext)?i.jsx("div",{className:"flex justify-center items-center",children:i.jsx("img",{src:null==ae||null===(Y=ae.data)||void 0===Y||null===(Y=Y.naksha)||void 0===Y?void 0:Y.doc_path,alt:"naksha",loading:"lazy",width:500,className:"w-full h-full object-cover"})}):i.jsx("div",{className:"w-full",children:i.jsx("embed",{src:"https://docs.google.com/viewer?url=".concat(null==ae||null===(M=ae.data)||void 0===M||null===(M=M.naksha)||void 0===M?void 0:M.doc_path,"&embedded=true"),width:"100%",height:"100%"})}),i.jsx("div",{className:"flex justify-center items-center",children:i.jsx(l.Button,{type:"button",size:"sm",color:"blue",onClick:function(){return ee(!0)},variant:"outlined",children:i.jsx("span",{children:"View"})})})]}):i.jsx("div",{className:"text-center",children:i.jsx("h1",{className:"text-red-900 font-semibold",children:"Sanction Plan not found!"})})})]}),i.jsx("div",{className:"border-b-2 border-gray-300 mt-2 mb-4"}),"no"==(null==le||null===(U=le.values)||void 0===U?void 0:U.isNaksha)&&i.jsx("div",{className:"flex justify-center items-center",children:i.jsx("h1",{className:"text-sm font-semibold text-red-900 text-center mb-3 w-52",children:"Double taxation will be applied for this property !"})}),i.jsxs(w,{formik:le,children:[(null==ae||null===(W=ae.data)||void 0===W?void 0:W.naksha)&&i.jsx("div",{className:"flex justify-center gap-4 items-center px-5 ",children:O.map((function(e){return i.jsx(N,{formik:le,name:"isNaksha",label:e.label,value:e.value},e.value)}))}),i.jsxs("div",{className:"grid grid-cols-1 gap-2 items-center mt-4",children:["yes"===le.values.isNaksha&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{children:[i.jsx("h1",{className:"text-sm font-semibold text-gray-900"}),i.jsx("div",{className:"flex justify-center items-center",children:i.jsx("h1",{className:"text-sm font-semibold text-red-900 text-center mb-3 w-52",children:null==le||null===(Q=le.values)||void 0===Q?void 0:Q.message})})]}),i.jsx("div",{children:i.jsx(y,{label:"Constructed Area(In Sqft) :",type:"number",formik:le,name:"areaOfPlot",placeholder:"Constructed Area (In Sqft)",onBlur:function(){var e,t,n,r;(null==le||null===(e=le.values)||void 0===e?void 0:e.areaOfPlot)<(null==ae||null===(t=ae.data)||void 0===t?void 0:t.builtup_area)?le.setFieldValue("message","100% Taxation will be applied on ".concat((null==ae||null===(n=ae.data)||void 0===n?void 0:n.builtup_area)-(null==le||null===(r=le.values)||void 0===r?void 0:r.areaOfPlot)," sqft constructed area !")):le.setFieldValue("message","")}})})]}),i.jsx("div",{children:i.jsx(k,{label:"comment",formik:le,name:"comment",placeholder:"Comment"})})]}),i.jsx("div",{className:"flex justify-center mt-4 gap-5",children:i.jsx(l.Button,{type:"submit",size:"sm",children:i.jsx("span",{children:"Forward"})})})]})]})]})}));var O=[{label:"Yes",value:"yes"},{label:"No",value:"no"}]}}}))}();
