!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}System.register(["./index-legacy-4d412f93.js","./index-legacy-8c98cd13.js"],(function(t,n){"use strict";var o,r,a,l,s;return{setters:[function(e){o=e.r,r=e.f,a=e.h,l=e.g},function(e){s=e.p}],execute:function(){var n={exports:{}},i={},u={exports:{}},c={},f={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n=[].slice.call(t.querySelectorAll("*"),0).reduce((function(t,n){return t.concat(n.shadowRoot?e(n.shadowRoot):[n])}),[]);return n.filter(s)};
/*!
      	 * Adapted from jQuery UI core
      	 *
      	 * http://jqueryui.com
      	 *
      	 * Copyright 2014 jQuery Foundation and other contributors
      	 * Released under the MIT license.
      	 * http://jquery.org/license
      	 *
      	 * http://api.jqueryui.com/category/ui-core/
      	 */
var n="none",o="contents",r=/input|select|textarea|button|object|iframe/;function a(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var r=window.getComputedStyle(e),a=r.getPropertyValue("display");return t?a!==o&&function(e,t){return"visible"!==t.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0}(e,r):a===n}catch(l){return console.warn("Failed to inspect element style"),!1}}function l(e,t){var n=e.nodeName.toLowerCase();return(r.test(n)&&!e.disabled||"a"===n&&e.href||t)&&function(e){for(var t=e,n=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(n&&t===n&&(t=n.host.parentNode),a(t))return!1;t=t.parentNode}return!0}(e)}function s(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&l(e,!n)}e.exports=t.default}(f,f.exports);var d=f.exports;Object.defineProperty(c,"__esModule",{value:!0}),c.resetState=function(){m=[]},c.log=function(){},c.handleBlur=b,c.handleFocus=O,c.markForFocusLater=function(){m.push(document.activeElement)},c.returnFocus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{return void(0!==m.length&&(t=m.pop()).focus({preventScroll:e}))}catch(n){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}},c.popWithoutFocus=function(){m.length>0&&m.pop()},c.setupScopedFocus=function(e){v=e,window.addEventListener?(window.addEventListener("blur",b,!1),document.addEventListener("focus",O,!0)):(window.attachEvent("onBlur",b),document.attachEvent("onFocus",O))},c.teardownScopedFocus=function(){v=null,window.addEventListener?(window.removeEventListener("blur",b),document.removeEventListener("focus",O)):(window.detachEvent("onBlur",b),document.detachEvent("onFocus",O))};var p,h=(p=d)&&p.__esModule?p:{default:p};var m=[],v=null,y=!1;function b(){y=!0}function O(){if(y){if(y=!1,!v)return;setTimeout((function(){v.contains(document.activeElement)||((0,h.default)(v)[0]||v).focus()}),0)}}var C={exports:{}};!function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=(0,n.default)(e);if(!r.length)return void t.preventDefault();var a=void 0,l=t.shiftKey,s=r[0],i=r[r.length-1],u=o();if(e===u){if(!l)return;a=i}i!==u||l||(a=s);s===u&&l&&(a=i);if(a)return t.preventDefault(),void a.focus();var c=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null==c||"Chrome"==c[1]||null!=/\biPod\b|\biPad\b/g.exec(navigator.userAgent))return;var f=r.indexOf(u);f>-1&&(f+=l?-1:1);if(a=r[f],void 0===a)return t.preventDefault(),void(a=l?i:s).focus();t.preventDefault(),a.focus()};var n=function(e){return e&&e.__esModule?e:{default:e}}(d);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return e.activeElement.shadowRoot?o(e.activeElement.shadowRoot):e.activeElement}e.exports=t.default}(C,C.exports);var g=C.exports,w={},S=function(){},_={},E={exports:{}};
/*!
        Copyright (c) 2015 Jed Watson.
        Based on code that is Copyright 2013-2015, Facebook, Inc.
        All rights reserved.
      */
!function(e){var t,n;t=!("undefined"==typeof window||!window.document||!window.document.createElement),n={canUseDOM:t,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:t&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:t&&!!window.screen},e.exports?e.exports=n:window.ExecutionEnvironment=n}(E);var M=E.exports;Object.defineProperty(_,"__esModule",{value:!0}),_.canUseDOM=_.SafeNodeList=_.SafeHTMLCollection=void 0;var N=function(e){return e&&e.__esModule?e:{default:e}}(M);var A=N.default,R=A.canUseDOM?window.HTMLElement:{};_.SafeHTMLCollection=A.canUseDOM?window.HTMLCollection:{},_.SafeNodeList=A.canUseDOM?window.NodeList:{},_.canUseDOM=A.canUseDOM,_.default=R,Object.defineProperty(w,"__esModule",{value:!0}),w.resetState=function(){T&&(T.removeAttribute?T.removeAttribute("aria-hidden"):null!=T.length?T.forEach((function(e){return e.removeAttribute("aria-hidden")})):document.querySelectorAll(T).forEach((function(e){return e.removeAttribute("aria-hidden")})));T=null},w.log=function(){},w.assertNodeList=D,w.setElement=function(e){var t=e;if("string"==typeof t&&j.canUseDOM){var n=document.querySelectorAll(t);D(n,t),t=n}return T=t||T},w.validateElement=F,w.hide=function(e){var t=!0,n=!1,o=void 0;try{for(var r,a=F(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){r.value.setAttribute("aria-hidden","true")}}catch(l){n=!0,o=l}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}},w.show=function(e){var t=!0,n=!1,o=void 0;try{for(var r,a=F(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){r.value.removeAttribute("aria-hidden")}}catch(l){n=!0,o=l}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}},w.documentNotReadyOrSSRTesting=function(){T=null};var P=function(e){return e&&e.__esModule?e:{default:e}}(S),j=_;var T=null;function D(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function F(e){var t=e||T;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,P.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}var x={};Object.defineProperty(x,"__esModule",{value:!0}),x.resetState=function(){var e=document.getElementsByTagName("html")[0];for(var t in U)L(e,U[t]);var n=document.body;for(var o in k)L(n,k[o]);U={},k={}},x.log=function(){};var U={},k={};function L(e,t){e.classList.remove(t)}x.add=function(e,t){return n=e.classList,o="html"==e.nodeName.toLowerCase()?U:k,void t.split(" ").forEach((function(e){!function(e,t){e[t]||(e[t]=0),e[t]+=1}(o,e),n.add(e)}));var n,o},x.remove=function(e,t){return n=e.classList,o="html"==e.nodeName.toLowerCase()?U:k,void t.split(" ").forEach((function(e){!function(e,t){e[t]&&(e[t]-=1)}(o,e),0===o[e]&&n.remove(e)}));var n,o};var W={};Object.defineProperty(W,"__esModule",{value:!0}),W.log=function(){console.log("portalOpenInstances ----------"),console.log(I.openInstances.length),I.openInstances.forEach((function(e){return console.log(e)})),console.log("end portalOpenInstances ----------")},W.resetState=function(){I=new H};var H=function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.register=function(e){-1===t.openInstances.indexOf(e)&&(t.openInstances.push(e),t.emit("register"))},this.deregister=function(e){var n=t.openInstances.indexOf(e);-1!==n&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(e){t.subscribers.push(e)},this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))},this.openInstances=[],this.subscribers=[]},I=new H;W.default=I;var q={};Object.defineProperty(q,"__esModule",{value:!0}),q.resetState=function(){for(var e=[K,V],t=0;t<e.length;t++){var n=e[t];n&&(n.parentNode&&n.parentNode.removeChild(n))}K=V=null,z=[]},q.log=function(){console.log("bodyTrap ----------"),console.log(z.length);for(var e=[K,V],t=0;t<e.length;t++){var n=e[t]||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")};var B=function(e){return e&&e.__esModule?e:{default:e}}(W);var K=void 0,V=void 0,z=[];function Y(){0!==z.length&&z[z.length-1].focusContent()}B.default.subscribe((function(e,t){K||V||((K=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),K.style.position="absolute",K.style.opacity="0",K.setAttribute("tabindex","0"),K.addEventListener("focus",Y),(V=K.cloneNode()).addEventListener("focus",Y)),(z=t).length>0?(document.body.firstChild!==K&&document.body.insertBefore(K,document.body.firstChild),document.body.lastChild!==V&&document.body.appendChild(V)):(K.parentElement&&K.parentElement.removeChild(K),V.parentElement&&V.parentElement.removeChild(V))})),function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=o,u=O(s),f=b(c),d=O(g),p=b(w),h=b(x),m=_,v=O(m),y=O(W);function b(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function O(e){return e&&e.__esModule?e:{default:e}}var C={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},S=0,E=function(t){function n(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var o=function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==e(n)&&"function"!=typeof n?t:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return o.setOverlayRef=function(e){o.overlay=e,o.props.overlayRef&&o.props.overlayRef(e)},o.setContentRef=function(e){o.content=e,o.props.contentRef&&o.props.contentRef(e)},o.afterClose=function(){var e=o.props,t=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName,l=e.parentSelector,s=l&&l().ownerDocument||document;a&&h.remove(s.body,a),r&&h.remove(s.getElementsByTagName("html")[0],r),n&&S>0&&0===(S-=1)&&p.show(t),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(f.returnFocus(o.props.preventScroll),f.teardownScopedFocus()):f.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),y.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(f.setupScopedFocus(o.node),f.markForFocusLater()),o.setState({isOpen:!0},(function(){o.openAnimationFrame=requestAnimationFrame((function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})}))})))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var e=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:e},(function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())}))},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(e){(function(e){return"Tab"===e.code||9===e.keyCode})(e)&&(0,d.default)(o.content,e),o.props.shouldCloseOnEsc&&function(e){return"Escape"===e.code||27===e.keyCode}(e)&&(e.stopPropagation(),o.requestClose(e))},o.handleOverlayOnClick=function(e){null===o.shouldClose&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(e):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(e){o.props.shouldCloseOnOverlayClick||e.target!=o.overlay||e.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(e){return o.ownerHandlesClose()&&o.props.onRequestClose(e)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(e,t){var n="object"===(void 0===t?"undefined":a(t))?t:{base:C[e],afterOpen:C[e]+"--after-open",beforeClose:C[e]+"--before-close"},r=n.base;return o.state.afterOpen&&(r=r+" "+n.afterOpen),o.state.beforeClose&&(r=r+" "+n.beforeClose),"string"==typeof t&&t?r+" "+t:r},o.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,o){return n[e+"-"+o]=t[o],n}),{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+e(n));t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}(n,t),l(n,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName,a=e.parentSelector,l=a&&a().ownerDocument||document;r&&h.add(l.body,r),o&&h.add(l.getElementsByTagName("html")[0],o),n&&(S+=1,p.hide(t)),y.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,o=e.overlayClassName,a=e.defaultStyles,l=e.children,s=n?{}:a.content,i=o?{}:a.overlay;if(this.shouldBeClosed())return null;var u={ref:this.setOverlayRef,className:this.buildClassName("overlay",o),style:r({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},c=r({id:t,ref:this.setContentRef,style:r({},s,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),f=this.props.contentElement(c,l);return this.props.overlayElement(u,f)}}]),n}(i.Component);E.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},E.propTypes={isOpen:u.default.bool.isRequired,defaultStyles:u.default.shape({content:u.default.object,overlay:u.default.object}),style:u.default.shape({content:u.default.object,overlay:u.default.object}),className:u.default.oneOfType([u.default.string,u.default.object]),overlayClassName:u.default.oneOfType([u.default.string,u.default.object]),parentSelector:u.default.func,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,ariaHideApp:u.default.bool,appElement:u.default.oneOfType([u.default.instanceOf(v.default),u.default.instanceOf(m.SafeHTMLCollection),u.default.instanceOf(m.SafeNodeList),u.default.arrayOf(u.default.instanceOf(v.default))]),onAfterOpen:u.default.func,onAfterClose:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,role:u.default.string,contentLabel:u.default.string,aria:u.default.object,data:u.default.object,children:u.default.node,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func,testId:u.default.string},n.default=E,t.exports=n.default}(u,u.exports);var G=u.exports;function J(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function Q(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function X(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}J.__suppressDeprecationWarning=!0,Q.__suppressDeprecationWarning=!0,X.__suppressDeprecationWarning=!0;var Z=Object.freeze(Object.defineProperty({__proto__:null,polyfill:function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,o=null,r=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?o="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(o="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?r="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==n||null!==o||null!==r){var a=e.displayName||e.name,l="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+a+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==o?"\n  "+o:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=J,t.componentWillReceiveProps=Q),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=X;var s=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;s.call(this,e,t,o)}}return e}},Symbol.toStringTag,{value:"Module"})),$=r(Z);Object.defineProperty(i,"__esModule",{value:!0}),i.bodyOpenClassName=i.portalClassName=void 0;var ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},te=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),ne=o,oe=fe(ne),re=fe(a),ae=fe(s),le=fe(G),se=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(w),ie=_,ue=fe(ie),ce=$;function fe(e){return e&&e.__esModule?e:{default:e}}function de(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==e(n)&&"function"!=typeof n?t:n}var pe=i.portalClassName="ReactModalPortal",he=i.bodyOpenClassName="ReactModal__Body--open",me=ie.canUseDOM&&void 0!==re.default.createPortal,ve=function(e){return document.createElement(e)},ye=function(){return me?re.default.createPortal:re.default.unstable_renderSubtreeIntoContainer};function be(e){return e()}var Oe=function(t){function n(){var e,t,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,a=Array(r),l=0;l<r;l++)a[l]=arguments[l];return t=o=de(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),o.removePortal=function(){!me&&re.default.unmountComponentAtNode(o.node);var e=be(o.props.parentSelector);e&&e.contains(o.node)?e.removeChild(o.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},o.portalRef=function(e){o.portal=e},o.renderPortal=function(e){var t=ye()(o,oe.default.createElement(le.default,ee({defaultStyles:n.defaultStyles},e)),o.node);o.portalRef(t)},de(o,t)}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+e(n));t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}(n,t),te(n,[{key:"componentDidMount",value:function(){ie.canUseDOM&&(me||(this.node=ve("div")),this.node.className=this.props.portalClassName,be(this.props.parentSelector).appendChild(this.node),!me&&this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:be(e.parentSelector),nextParent:be(this.props.parentSelector)}}},{key:"componentDidUpdate",value:function(e,t,n){if(ie.canUseDOM){var o=this.props,r=o.isOpen,a=o.portalClassName;e.portalClassName!==a&&(this.node.className=a);var l=n.prevParent,s=n.nextParent;s!==l&&(l.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||r)&&!me&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(ie.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return ie.canUseDOM&&me?(!this.node&&me&&(this.node=ve("div")),ye()(oe.default.createElement(le.default,ee({ref:this.portalRef,defaultStyles:n.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){se.setElement(e)}}]),n}(ne.Component);Oe.propTypes={isOpen:ae.default.bool.isRequired,style:ae.default.shape({content:ae.default.object,overlay:ae.default.object}),portalClassName:ae.default.string,bodyOpenClassName:ae.default.string,htmlOpenClassName:ae.default.string,className:ae.default.oneOfType([ae.default.string,ae.default.shape({base:ae.default.string.isRequired,afterOpen:ae.default.string.isRequired,beforeClose:ae.default.string.isRequired})]),overlayClassName:ae.default.oneOfType([ae.default.string,ae.default.shape({base:ae.default.string.isRequired,afterOpen:ae.default.string.isRequired,beforeClose:ae.default.string.isRequired})]),appElement:ae.default.oneOfType([ae.default.instanceOf(ue.default),ae.default.instanceOf(ie.SafeHTMLCollection),ae.default.instanceOf(ie.SafeNodeList),ae.default.arrayOf(ae.default.instanceOf(ue.default))]),onAfterOpen:ae.default.func,onRequestClose:ae.default.func,closeTimeoutMS:ae.default.number,ariaHideApp:ae.default.bool,shouldFocusAfterRender:ae.default.bool,shouldCloseOnOverlayClick:ae.default.bool,shouldReturnFocusAfterClose:ae.default.bool,preventScroll:ae.default.bool,parentSelector:ae.default.func,aria:ae.default.object,data:ae.default.object,role:ae.default.string,contentLabel:ae.default.string,shouldCloseOnEsc:ae.default.bool,overlayRef:ae.default.func,contentRef:ae.default.func,id:ae.default.string,overlayElement:ae.default.func,contentElement:ae.default.func},Oe.defaultProps={isOpen:!1,portalClassName:pe,bodyOpenClassName:he,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return oe.default.createElement("div",e,t)},contentElement:function(e,t){return oe.default.createElement("div",e,t)}},Oe.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,ce.polyfill)(Oe),i.default=Oe,function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default=n.default,e.exports=t.default}(n,n.exports);t("M",l(n.exports))}}}))}();
