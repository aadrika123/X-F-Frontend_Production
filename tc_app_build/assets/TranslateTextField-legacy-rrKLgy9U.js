!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}var e=["renderComponent","lang","offsetX","offsetY","onChange","onChangeText","onBlur","value","onKeyDown","containerClassName","containerStyles","activeItemStyles","maxOptions","hideSuggestionBoxOnMobileDevices","hideSuggestionBoxBreakpoint","triggerKeys","insertCurrentSelectionOnBlur","showCurrentWordAsLastSuggestion","enabled"],r=["label","name","formik","isDynamic","isRequiredLabel","className","inputValidation"];function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,e)||l(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(e,r,n){var o;return o=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(r,"string"),(r="symbol"==t(o)?o:String(o))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function c(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return r};var e,r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),u=new T(n||[]);return i(a,"_invoke",{value:C(t,r,u)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var d="suspendedStart",g="suspendedYield",y="executing",v="completed",m={};function b(){}function w(){}function x(){}var S={};f(S,u,(function(){return this}));var O=Object.getPrototypeOf,j=O&&O(O(A([])));j&&j!==n&&o.call(j,u)&&(S=j);var E=x.prototype=b.prototype=Object.create(S);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function L(e,r){function n(i,a,u,c){var s=p(e[i],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,c)}))}c(s.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}})}function C(t,r,n){var o=d;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=_(u,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=p(t,r,n);if("normal"===s.type){if(o=n.done?v:g,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function _(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function A(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,a=function t(){for(;++i<r.length;)if(o.call(r,i))return t.value=r[i],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(r)+" is not iterable")}return w.prototype=x,i(E,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},k(L.prototype),f(L.prototype,s,(function(){return this})),r.AsyncIterator=L,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new L(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),f(E,l,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=A,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},r}function s(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function h(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){h(i,n,o,a,u,"next",t)}function u(t){h(i,n,o,a,u,"throw",t)}a(void 0)}))}}System.register(["./index-legacy-e5jDIJ7v.js","./formik.esm-legacy-XdfQijo5.js","./router-legacy-kOAqN8oI.js","./TranslateField-legacy--lpTz8hS.js","./customInputValidation-legacy-09WHxC9F.js"],(function(t,o){"use strict";var a,l,f,h,d;return{setters:[function(t){a=t.j},function(t){l=t.g},function(t){f=t.r},function(t){h=t.$},function(t){d=t.c}],execute:function(){t("T",(function(t){var e=t.label,n=t.name,o=t.formik,c=t.isDynamic,s=(t.isRequiredLabel,t.className),f=t.inputValidation,h=u(t,r);return a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:n,className:"block text-gray-600 text-sm mb-1",children:e}),a.jsx(x,i(i({},h),{},{name:n,className:"".concat(s," w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 darks:text-gray-300 darks:bg-gray-700 darks:border-gray-700 darks:focus:border-gray-600"),placeholder:e,onInput:function(t){f&&d(t,f)}})),a.jsx("span",{className:"text-red-600  text-xs",children:c?l(null==o?void 0:o.touched,n)&&l(null==o?void 0:o.errors,n):(null==o?void 0:o.touched[n])&&(null==o?void 0:o.errors[n])})]})}));var o="Enter",g="Enter",y="Tab",v=" ",m="https://xlit-api.ai4bharat.org/",b=function(){var t=p(c().mark((function t(e,r){var n,o,i,a,u,l,f;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=(n=r||{numOptions:5,showCurrentWordAsLastSuggestion:!0,lang:"hi"}).showCurrentWordAsLastSuggestion,i=n.lang,a={method:"GET"},t.prev=2,t.next=5,fetch(m+"tl/".concat(i,"/").concat("."===e||".."===e?" "+e.replace(".","%2E"):encodeURIComponent(e).replace(".","%2E")),a);case 5:return u=t.sent,t.next=8,u.json();case 8:if(!((l=t.sent)&&l.result.length>0)){t.next=15;break}return f=o?[].concat(s(l.result),[e]):l.result,t.abrupt("return",f);case 15:if(!o){t.next=17;break}return t.abrupt("return",[e]);case 17:return t.abrupt("return",[]);case 18:t.next=24;break;case 20:return t.prev=20,t.t0=t.catch(2),t.abrupt("return",[]);case 24:case"end":return t.stop()}}),t,null,[[2,20]])})));return function(e,r){return t.apply(this,arguments)}}(),w=function(){var t=p(c().mark((function t(){var e,r,n,o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!sessionStorage.getItem("indic_transliterate__supported_languages")){t.next=4;break}return t.abrupt("return",JSON.parse(sessionStorage.getItem("indic_transliterate__supported_languages")||""));case 4:return e="".concat(m,"languages"),(new Headers).append("Content-Type","application/json"),r={method:"GET"},t.prev=8,t.next=11,fetch(e,r);case 11:return n=t.sent,t.next=14,n.json();case 14:return o=t.sent,sessionStorage.setItem("indic_transliterate__supported_languages",JSON.stringify(o)),t.abrupt("return",o);case 19:return t.prev=19,t.t0=t.catch(8),t.abrupt("return",[]);case 23:case"end":return t.stop()}}),t,null,[[8,19]])})));return function(){return t.apply(this,arguments)}}(),x=function(t){var r=t.renderComponent,s=void 0===r?function(t){return a.jsx("input",i({},t))}:r,l=t.lang,d=void 0===l?"hi":l,m=t.offsetX,x=void 0===m?0:m,S=t.offsetY,O=void 0===S?10:S,j=t.onChange,E=t.onChangeText,k=t.onBlur,L=t.value,C=t.onKeyDown,_=t.containerClassName,P=void 0===_?"":_,I=t.containerStyles,T=void 0===I?{}:I,A=(t.activeItemStyles,t.maxOptions),N=void 0===A?5:A,D=t.hideSuggestionBoxOnMobileDevices,B=void 0!==D&&D,F=t.hideSuggestionBoxBreakpoint,G=void 0===F?450:F,W=t.triggerKeys,M=void 0===W?[v,g,o,y]:W,R=t.insertCurrentSelectionOnBlur,K=void 0===R||R,z=t.showCurrentWordAsLastSuggestion,Y=void 0===z||z,H=t.enabled,U=void 0===H||H,V=u(t,e),q=n(f.useState([]),2),J=q[0],X=q[1],$=n(f.useState(0),2),Q=$[0],Z=$[1],tt=n(f.useState(0),2),et=tt[0],rt=tt[1],nt=n(f.useState(0),2),ot=nt[0],it=nt[1],at=n(f.useState(-1),2),ut=at[0],ct=at[1],st=n(f.useState(-1),2),lt=st[0],ft=st[1],ht=f.useRef(null),pt=n(f.useState({width:0,height:0}),2),dt=pt[0],gt=pt[1],yt=n(f.useState("ltr"),2),vt=yt[0],mt=yt[1],bt=n(f.useState(null),2),wt=bt[0],xt=bt[1],St=f.useMemo((function(){return!B||dt.width>G}),[dt,G,B]),Ot=function(){it(0),X([])},jt=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ",n=L,o=n.substring(0,ut)+J[t]+" "+n.substring(lt+1,n.length);setTimeout((function(){var e,n;e=ht.current,n="Enter"===r?ut+J[t].length:ut+J[t].length+1,e&&(e.selectionStart?(e.focus(),e.setSelectionRange(n,n)):e.focus())}),1);var i={target:{value:o}};return E(o),j&&j(i),Ot(),null===(e=ht.current)||void 0===e?void 0:e.focus()},Et=function(){var t=p(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(St){t.next=2;break}return t.abrupt("return");case 2:return r=Y?N-1:N,t.next=5,b(e,{numOptions:r,showCurrentWordAsLastSuggestion:Y,lang:d});case 5:n=t.sent,X(null!=n?n:[]);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),kt=function(){var t=p(c().mark((function t(e){var r,n,o;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return r=t.sent,n=null==r?void 0:r.find((function(t){return t.LangCode===e})),t.abrupt("return",[null!==(o=null==n?void 0:n.Direction)&&void 0!==o?o:"ltr",null==n?void 0:n.GoogleFont,null==n?void 0:n.FallbackFont]);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Lt=function(){var t=window.innerWidth,e=window.innerHeight;gt({width:t,height:e})};return f.useEffect((function(){window.addEventListener("resize",Lt);var t=window.innerWidth,e=window.innerHeight;return gt({width:t,height:e}),function(){window.removeEventListener("resize",Lt)}}),[]),f.useEffect((function(){kt(d).then((function(t){var e=n(t,3),r=e[0],o=e[1],i=e[2];if(mt(r),o){if(!document.getElementById("font-".concat(o))){var a=document.createElement("link");a.id="font-".concat(o),a.href="https://fonts.googleapis.com/css?family=".concat(o),a.rel="stylesheet",document.head.appendChild(a)}xt("".concat(o,", ").concat(null!=i?i:"sans-serif"))}else xt(null)}))}),[d]),a.jsxs("div",{style:i(i({},T),{},{position:"relative"}),className:P,children:[s(i({onChange:function(t){var e=t.currentTarget.value;if(j&&j(t),E(e),St){var r,n=(r=t.target,r&&"number"==typeof r.selectionStart&&"number"==typeof r.selectionEnd?{start:r.selectionStart,end:r.selectionEnd}:{start:0,end:0}).end,o=ht.current;if(o){var i=h(o,n),a=e.lastIndexOf(" ",n-1)<e.lastIndexOf("\n",n-1)?e.lastIndexOf("\n",n-1):e.lastIndexOf(" ",n-1);ct(a+1),ft(n-1);var u=e.slice(a+1,n);if(u&&U){Et(u);var c=o.getBoundingClientRect(),s=Math.min(i.left,c.width-50),l=Math.min(i.top+10,c.height);rt(l),Z(s)}else Ot()}}},onKeyDown:function(t){if(J.length>0)if(M.includes(t.key))t.preventDefault(),jt(ot,t.key);else switch(t.key){case"Escape":t.preventDefault(),Ot();break;case"ArrowUp":t.preventDefault(),it((J.length+ot-1)%J.length);break;case"ArrowDown":t.preventDefault(),it((ot+1)%J.length);break;default:C&&C(t)}else C&&C(t)},onBlur:function(t){"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0||(K&&J[ot]?jt(ot):Ot()),k&&k(t)},ref:ht,value:L,"data-testid":"rt-input-component",lang:d,style:i({direction:vt},wt&&{fontFamily:wt})},V)),St&&J.length>0&&a.jsx("ul",{style:i({backgroundClip:"padding-box",backgroundColor:"#fff",border:"1px solid rgba(0, 0, 0, 0.15)",boxShadow:"0 6px 12px rgba(0, 0, 0, 0.175)",display:"block",fontSize:"14px",listStyle:"none",padding:"1px",textAlign:"left",zIndex:2e4,left:"".concat(Q+x,"px"),top:"".concat(et+O,"px"),position:"absolute",width:"auto"},wt&&{fontFamily:wt}),"data-testid":"rt-suggestions-list",lang:d,children:Array.from(new Set(J)).map((function(t,e){return a.jsx("li",{style:e===ot?{cursor:"pointer",padding:"10px",minWidth:"100px",backgroundColor:"#65c3d7",color:"#fff"}:{cursor:"pointer",padding:"10px",minWidth:"100px",backgroundColor:"#fff"},onMouseEnter:function(){it(e)},onClick:function(){return jt(e)},children:t},t)}))})]})}}}}))}();
