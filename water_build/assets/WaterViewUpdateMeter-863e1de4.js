import{l as h,R as c,v as Q,m as F,z as ee,W as te,k as m,o as Z,j as u,G as ne,N as oe,K as re,M as V,h as U,q as W}from"./index-8199b4b8.js";function I(t){return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(t)}function ae(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Y(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function ce(t,e,o){return e&&Y(t.prototype,e),o&&Y(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function le(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&$(t,e)}function $(t,e){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},$(t,e)}function ie(t){var e=se();return function(){var n=S(t),r;if(e){var l=S(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return ue(this,r)}}function ue(t,e){if(e&&(I(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return fe(t)}function fe(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function se(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},S(t)}function de(t,e){if(!document.head.querySelector("#"+t)){var o=document.createElement("style");o.textContent=e,o.type="text/css",o.id=t,document.head.appendChild(o)}}var me=function(t){le(o,t);var e=ie(o);function o(){return ae(this,o),e.apply(this,arguments)}return ce(o,[{key:"componentDidMount",value:function(){de(this.props.name,this.props.css)}},{key:"componentWillUnmount",value:function(){var r=document.getElementById(this.props.name);r.parentNode.removeChild(r)}},{key:"render",value:function(){return null}}]),o}(h.Component),he=function(e){var o=e.imageBackgroundColor;return`
  body {
    overflow: hidden;
  }

  .__react_modal_image__modal_container {
    position: fixed;
    z-index: 5000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    touch-action: none;
    overflow: hidden;
  }

  .__react_modal_image__modal_content {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .__react_modal_image__modal_content img, 
  .__react_modal_image__modal_content svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    -webkit-transform: translate3d(-50%, -50%, 0);
    -ms-transform: translate3d(-50%, -50%, 0);
    overflow: hidden;
  }

  .__react_modal_image__medium_img {
    max-width: 98%;
    max-height: 98%;
    background-color: `.concat(o,`;
  }

  .__react_modal_image__large_img {
    cursor: move;
    background-color: `).concat(o,`
  }

  .__react_modal_image__icon_menu a {
    display: inline-block;
    font-size: 40px;
    cursor: pointer;
    line-height: 40px;
    box-sizing: border-box;
    border: none;
    padding: 0px 5px 0px 5px;
    margin-left: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0);
  }

  .__react_modal_image__icon_menu {
    display: inline-block;
    float: right;
  }

  .__react_modal_image__caption {
    display: inline-block;
    color: white;
    font-size: 120%;
    padding: 10px;
    margin: 0;
  }

  .__react_modal_image__header {
    position: absolute;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    overflow: hidden;
  }
`)},pe=function(){return c.createElement("svg",{fill:"#ffffff",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.createElement("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}))},ye=function(){return c.createElement("svg",{fill:"#ffffff",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),c.createElement("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"}))},ge=function(){return c.createElement("svg",{fill:"#ffffff",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),c.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},_e=function(){return c.createElement("svg",{fill:"#ffffff",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),c.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))},ve=function(){return c.createElement("svg",{fill:"#ffffff",height:"48",viewBox:"0 0 24 24",width:"48",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"}),c.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}))},be=function(){return c.createElement("svg",{fill:"#ffffff",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{fill:"none",d:"M0 0h24v24H0V0zm0 0h24v24H0V0z"}),c.createElement("path",{d:"M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0c.51 6.16 5.66 11 11.95 11 .23 0 .44-.02.66-.03L8.8 20.15l-1.33 1.34zM12.05 0c-.23 0-.44.02-.66.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-.51-6.16-5.66-11-11.95-11zM16 14h2V8c0-1.11-.9-2-2-2h-6v2h6v6zm-8 2V4H6v2H4v2h2v8c0 1.1.89 2 2 2h8v2h2v-2h2v-2H8z"}))};function xe(t){return document.location.hostname!==new URL(t,document.location).hostname}var we=function(e){return function(o){xe(e)&&(o.preventDefault(),fetch(e).then(function(n){return n.ok||console.error("Failed to download image, HTTP status "+n.status+" from "+e),n.blob().then(function(r){var l=document.createElement("a");l.setAttribute("download",e.split("/").pop()),l.href=URL.createObjectURL(r),l.click()})}).catch(function(n){console.error(n),console.error("Failed to download image from "+e)}))}},Oe=function(e){var o=e.image,n=e.alt,r=e.zoomed,l=e.toggleZoom,s=e.toggleRotate,i=e.onClose,f=e.enableDownload,d=e.enableZoom,p=e.enableRotate;return c.createElement("div",{className:"__react_modal_image__header"},c.createElement("span",{className:"__react_modal_image__icon_menu"},f&&c.createElement("a",{href:o,download:!0,onClick:we(o)},c.createElement(ge,null)),d&&c.createElement("a",{onClick:l},r?c.createElement(ye,null):c.createElement(pe,null)),p&&c.createElement("a",{onClick:s},c.createElement(be,null)),c.createElement("a",{onClick:i},c.createElement(_e,null))),n&&c.createElement("span",{className:"__react_modal_image__caption"},n))};function C(t){return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(t)}function Ne(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function K(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Ee(t,e,o){return e&&K(t.prototype,e),o&&K(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function Me(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},k(t,e)}function Se(t){var e=Pe();return function(){var n=R(t),r;if(e){var l=R(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return Re(this,r)}}function Re(t,e){if(e&&(C(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return M(t)}function M(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Pe(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},R(t)}function z(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var G=function(t){Me(o,t);var e=Se(o);function o(){var n;Ne(this,o);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return n=e.call.apply(e,[this].concat(l)),z(M(n),"state",{loading:!0}),z(M(n),"handleOnLoad",function(){n.setState({loading:!1})}),z(M(n),"handleOnContextMenu",function(i){!n.props.contextMenu&&i.preventDefault()}),n}return Ee(o,[{key:"render",value:function(){var r=this.props,l=r.id,s=r.className,i=r.src,f=r.style,d=r.handleDoubleClick;return c.createElement("div",null,this.state.loading&&c.createElement(ve,null),c.createElement("img",{id:l,className:s,src:i,style:f,onLoad:this.handleOnLoad,onDoubleClick:d,onContextMenu:this.handleOnContextMenu}))}}]),o}(h.Component);function j(t){return j=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(t)}function De(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Te(t,e,o){return e&&q(t.prototype,e),o&&q(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function ze(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},H(t,e)}function Ie(t){var e=Ce();return function(){var n=P(t),r;if(e){var l=P(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return $e(this,r)}}function $e(t,e){if(e&&(j(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(t)}function v(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ce(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},P(t)}function x(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var ke=function(t){ze(o,t);var e=Ie(o);function o(){var n;De(this,o);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return n=e.call.apply(e,[this].concat(l)),x(v(n),"state",{move:{x:0,y:0},moveStart:void 0,zoomed:!1,rotationDeg:0}),x(v(n),"handleKeyDown",function(i){(i.keyCode===27||i.keyCode===13)&&n.props.onClose()}),x(v(n),"getCoordinatesIfOverImg",function(i){var f=i.changedTouches?i.changedTouches[0]:i;if(f.target.id==="react-modal-image-img"){var d=n.contentEl.getBoundingClientRect(),p=f.clientX-d.left,g=f.clientY-d.top;return{x:p,y:g}}}),x(v(n),"handleMouseDownOrTouchStart",function(i){if(i.preventDefault(),!(i.touches&&i.touches.length>1)){var f=n.getCoordinatesIfOverImg(i);f||n.props.onClose(),n.state.zoomed&&n.setState(function(d){return{moveStart:{x:f.x-d.move.x,y:f.y-d.move.y}}})}}),x(v(n),"handleMouseMoveOrTouchMove",function(i){if(i.preventDefault(),!(!n.state.zoomed||!n.state.moveStart)&&!(i.touches&&i.touches.length>1)){var f=n.getCoordinatesIfOverImg(i);f&&n.setState(function(d){return{move:{x:f.x-d.moveStart.x,y:f.y-d.moveStart.y}}})}}),x(v(n),"handleMouseUpOrTouchEnd",function(i){n.setState({moveStart:void 0})}),x(v(n),"toggleZoom",function(i){i.preventDefault(),n.setState(function(f){return{zoomed:!f.zoomed,move:f.zoomed?{x:0,y:0}:f.move}})}),x(v(n),"toggleRotate",function(i){i.preventDefault();var f=n.state.rotationDeg;if(f===360){n.setState({rotationDeg:90});return}n.setState(function(d){return{rotationDeg:d.rotationDeg+=90}})}),n}return Te(o,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown,!1)}},{key:"render",value:function(){var r=this,l=this.props,s=l.medium,i=l.large,f=l.alt,d=l.onClose,p=l.hideDownload,g=l.hideZoom,O=l.showRotate,y=l.imageBackgroundColor,N=y===void 0?"black":y,w=this.state,_=w.move,E=w.zoomed,b=w.rotationDeg;return c.createElement("div",null,c.createElement(me,{name:"__react_modal_image__lightbox",css:he({imageBackgroundColor:N})}),c.createElement("div",{className:"__react_modal_image__modal_container"},c.createElement("div",{className:"__react_modal_image__modal_content",onMouseDown:this.handleMouseDownOrTouchStart,onMouseUp:this.handleMouseUpOrTouchEnd,onMouseMove:this.handleMouseMoveOrTouchMove,onTouchStart:this.handleMouseDownOrTouchStart,onTouchEnd:this.handleMouseUpOrTouchEnd,onTouchMove:this.handleMouseMoveOrTouchMove,ref:function(T){r.contentEl=T}},E&&c.createElement(G,{id:"react-modal-image-img",className:"__react_modal_image__large_img",src:i||s,style:{transform:"translate3d(-50%, -50%, 0) translate3d(".concat(_.x,"px, ").concat(_.y,"px, 0) rotate(").concat(b,"deg)"),WebkitTransform:"translate3d(-50%, -50%, 0) translate3d(".concat(_.x,"px, ").concat(_.y,"px, 0) rotate(").concat(b,"deg)"),MsTransform:"translate3d(-50%, -50%, 0) translate3d(".concat(_.x,"px, ").concat(_.y,"px, 0) rotate(").concat(b,"deg)")},handleDoubleClick:this.toggleZoom}),!E&&c.createElement(G,{id:"react-modal-image-img",className:"__react_modal_image__medium_img",src:s||i,handleDoubleClick:this.toggleZoom,contextMenu:!s,style:{transform:"translate3d(-50%, -50%, 0) rotate(".concat(b,"deg)"),WebkitTransform:"translate3d(-50%, -50%, 0) rotate(".concat(b,"deg)"),MsTransform:"translate3d(-50%, -50%, 0) rotate(".concat(b,"deg)")}})),c.createElement(Oe,{image:i||s,alt:f,zoomed:E,toggleZoom:this.toggleZoom,toggleRotate:this.toggleRotate,onClose:d,enableDownload:!p,enableZoom:!g,enableRotate:!!O})))}}]),o}(h.Component);function B(t){return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(t)}function je(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function X(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function He(t,e,o){return e&&X(t.prototype,e),o&&X(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function Be(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},A(t,e)}function Ae(t){var e=Ze();return function(){var n=D(t),r;if(e){var l=D(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return Le(this,r)}}function Le(t,e){if(e&&(B(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return L(t)}function L(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ze(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},D(t)}function J(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var Ve=function(t){Be(o,t);var e=Ae(o);function o(){var n;je(this,o);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return n=e.call.apply(e,[this].concat(l)),J(L(n),"state",{modalOpen:!1}),J(L(n),"toggleModal",function(){n.setState(function(i){return{modalOpen:!i.modalOpen}})}),n}return He(o,[{key:"render",value:function(){var r=this.props,l=r.className,s=r.small,i=r.smallSrcSet,f=r.medium,d=r.large,p=r.alt,g=r.hideDownload,O=r.hideZoom,y=r.showRotate,N=r.imageBackgroundColor,w=this.state.modalOpen;return c.createElement("div",null,c.createElement("img",{className:l,style:{cursor:"pointer",maxWidth:"100%",maxHeight:"100%"},onClick:this.toggleModal,src:s,srcSet:i,alt:p}),w&&c.createElement(ke,{medium:f,large:d,alt:p,onClose:this.toggleModal,hideDownload:g,hideZoom:O,showRotate:y,imageBackgroundColor:N}))}}]),o}(h.Component);function We(t){const[e,o]=h.useState(!1),[n,r]=h.useState(),[l,s]=h.useState(0),[i,f]=h.useState(!0),[d,p]=h.useState(0),[g,O]=h.useState(),{id:y}=Q();console.log("param",y),F(),ee("Water Consumer Details");const{api_waterApprovedApplicationDetails:N,api_consumerGetMeterList:w,header:_}=te(),E=()=>{o(!0),W.post(N,{applicationId:y},_).then(function(a){console.log("water Approved Application Details",a.data.data),r(a.data.data),o(!1)}).catch(function(a){console.log("Error : water Approved Application Details",a),o(!1)})},b=()=>{o(!0),W.post(w,{consumerId:y},_).then(function(a){O(a.data.data),console.log("get consumer meter list",a.data.data),o(!1)}).catch(function(a){console.log("Error : consumer meter list",a),o(!1)})};return h.useEffect(()=>{E(),b(),(n==null?void 0:n.connectionName)=="Fixed"&&f(!1)},[y,d]),m(Z,{children:[e&&u(ne,{}),u(oe,{refetch:()=>p(a=>a+1),id:y,isConnectionFixed:i,openMeterModal:l}),u(re,{active:"meter",consumerNo:n==null?void 0:n.consumer_no}),u("div",{className:"grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-2 container mx-auto w-full",children:m("div",{className:"col-span-12 rounded-lg p-4",children:[m("div",{className:"p-4",children:[m("div",{className:"",children:[m("h1",{className:"px-1 font-semibold font-serif  text-gray-500",children:[u(V,{className:"inline"})," Basic Details"]}),u("div",{className:"py-6 mt-2 bg-white rounded-lg shadow-xl p-4",children:m("div",{className:"flex space-x-5 pl-4 ",children:[m("div",{className:"flex-1",children:[u("div",{className:"font-bold text-sm",children:n!=null&&n.consumer_no?n==null?void 0:n.consumer_no:"N/A"}),u("div",{className:"text-gray-500 text-xs",children:"Consumer No"})]}),m("div",{className:"flex-1",children:[u("div",{className:"font-bold text-sm",children:n!=null&&n.meter_no?n==null?void 0:n.meter_no:"N/A"}),u("div",{className:"text-gray-500 text-xs",children:"Meter No"})]}),m("div",{className:"flex-1",children:[u("div",{className:"font-semibold text-md",children:(n==null?void 0:n.connection_type)===1?"Meter":"Fixed"}),u("div",{className:"text-gray-500 text-xs",children:"Connection Type"})]}),m("div",{className:"flex-1",children:[u("div",{className:"font-bold text-sm",children:n!=null&&n.application_apply_date?U(n==null?void 0:n.application_apply_date,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),u("div",{className:"text-gray-500 text-xs",children:"Apply Date"})]})]})})]}),m("div",{className:"mt-10",children:[m("h1",{className:"px-1 font-semibold font-serif text-gray-500",children:[u(V,{className:"inline"}),"Consumer Meter List"]}),m("table",{className:"min-w-full leading-normal mt-2 bg-white rounded-lg shadow-xl p-4",children:[u("thead",{className:"font-bold text-left text-sm border text-gray-800 bg-white",children:m("tr",{children:[u("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"#"}),u("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"CONNECTION TYPE"}),u("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Meter No"}),u("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"INITIAL METER READING"}),u("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"METER CONNECTION DATE"}),u("th",{className:"px-2 py-3 border-b border-gray-200  text-xs uppercase text-left",children:"Document"})]})}),u("tbody",{className:"text-sm",children:u(Z,{children:g==null?void 0:g.map((a,T)=>m("tr",{className:"bg-white shadow-xl border-b border-gray-200",children:[u("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:T+1}),u("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.meter_connection_type?a==null?void 0:a.meter_connection_type:"N/A"}),u("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.meter_no?a==null?void 0:a.meter_no:"N/A"}),u("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.initial_reading?a==null?void 0:a.initial_reading:"N/A"}),u("td",{className:"px-2 py-2 text-left text-gray-500 text-xs",children:a!=null&&a.connection_date?U(a==null?void 0:a.connection_date,"YYYY-MM-DD").format("DD-MMM-yy"):"N/A"}),u("td",{className:"",children:u("p",{className:"h-10 w-14 m-3 border border-gray-600 rounded",children:u(Ve,{smallSrcSet:a==null?void 0:a.doc_path,large:a==null?void 0:a.doc_path,alt:a==null?void 0:a.doc_path})})})]}))})})]})]})]}),u("div",{className:"mt-6"})]})}),u("div",{className:"w-full h-60"})]})}export{We as default};
