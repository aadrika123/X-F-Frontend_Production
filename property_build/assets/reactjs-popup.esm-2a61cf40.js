import{r as p,R as L,I as Ie}from"./index-f8fb2358.js";function M(){return M=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r])}return o},M.apply(this,arguments)}var Xe=function(e,t){t===void 0&&(t=!0),p.useEffect(function(){if(t){var r=function(a){a.key==="Escape"&&e(a)};return document.addEventListener("keyup",r),function(){t&&document.removeEventListener("keyup",r)}}},[e,t])},Ye=function(e,t){t===void 0&&(t=!0),p.useEffect(function(){if(t){var r=function(){e()};return window.addEventListener("resize",r),function(){t&&window.removeEventListener("resize",r)}}},[e,t])},De=function(e,t,r){r===void 0&&(r=!0),p.useEffect(function(){if(r){var d=function(f){var O=Array.isArray(e)?e:[e],l=!1;O.forEach(function(s){if(!s.current||s.current.contains(f.target)){l=!0;return}}),f.stopPropagation(),l||t(f)};return document.addEventListener("mousedown",d),document.addEventListener("touchstart",d),function(){r&&(document.removeEventListener("mousedown",d),document.removeEventListener("touchstart",d))}}},[e,t,r])},Me=function(e,t){t===void 0&&(t=!0),p.useEffect(function(){if(t){var r=function(a){if(a.keyCode===9){var f,O=e==null||(f=e.current)===null||f===void 0?void 0:f.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),l=Array.prototype.slice.call(O);if(l.length===1){a.preventDefault();return}var s=l[0],E=l[l.length-1];a.shiftKey&&document.activeElement===s?(a.preventDefault(),E.focus()):document.activeElement===E&&(a.preventDefault(),s.focus())}};return document.addEventListener("keydown",r),function(){t&&document.removeEventListener("keydown",r)}}},[e,t])},ze=typeof window<"u"?p.useLayoutEffect:p.useEffect,D={popupContent:{tooltip:{position:"absolute",zIndex:999},modal:{position:"relative",margin:"auto"}},popupArrow:{height:"8px",width:"16px",position:"absolute",background:"transparent",color:"#FFF",zIndex:-1},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",zIndex:999},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",display:"flex",zIndex:999}}},Ne=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom"],je=function(e,t,r,d,a){var f=a.offsetX,O=a.offsetY,l=d?8:0,s=r.split(" "),E=e.top+e.height/2,m=e.left+e.width/2,y=t.height,c=t.width,g=E-y/2,b=m-c/2,S="",k="0%",P="0%";switch(s[0]){case"top":g-=y/2+e.height/2+l,S="rotate(180deg)  translateX(50%)",k="100%",P="50%";break;case"bottom":g+=y/2+e.height/2+l,S="rotate(0deg) translateY(-100%) translateX(-50%)",P="50%";break;case"left":b-=c/2+e.width/2+l,S=" rotate(90deg)  translateY(50%) translateX(-25%)",P="100%",k="50%";break;case"right":b+=c/2+e.width/2+l,S="rotate(-90deg)  translateY(-150%) translateX(25%)",k="50%";break}switch(s[1]){case"top":g=e.top,k=e.height/2+"px";break;case"bottom":g=e.top-y+e.height,k=y-e.height/2+"px";break;case"left":b=e.left,P=e.width/2+"px";break;case"right":b=e.left-c+e.width,P=c-e.width/2+"px";break}return g=s[0]==="top"?g-O:g+O,b=s[0]==="left"?b-f:b+f,{top:g,left:b,transform:S,arrowLeft:P,arrowTop:k}},Fe=function(e){var t={top:0,left:0,width:window.innerWidth,height:window.innerHeight};if(typeof e=="string"){var r=document.querySelector(e);r!==null&&(t=r.getBoundingClientRect())}return t},qe=function(e,t,r,d,a,f){var O=a.offsetX,l=a.offsetY,s={arrowLeft:"0%",arrowTop:"0%",left:0,top:0,transform:"rotate(135deg)"},E=0,m=Fe(f),y=Array.isArray(r)?r:[r];for((f||Array.isArray(r))&&(y=[].concat(y,Ne));E<y.length;){s=je(e,t,y[E],d,{offsetX:O,offsetY:l});var c={top:s.top,left:s.left,width:t.width,height:t.height};if(c.top<=m.top||c.left<=m.left||c.top+c.height>=m.top+m.height||c.left+c.width>=m.left+m.width)E++;else break}return s},He=0,We=function(){var e=document.getElementById("popup-root");return e===null&&(e=document.createElement("div"),e.setAttribute("id","popup-root"),document.body.appendChild(e)),e},Ge=p.forwardRef(function(o,e){var t=o.trigger,r=t===void 0?null:t,d=o.onOpen,a=d===void 0?function(){}:d,f=o.onClose,O=f===void 0?function(){}:f,l=o.defaultOpen,s=l===void 0?!1:l,E=o.open,m=E===void 0?void 0:E,y=o.disabled,c=y===void 0?!1:y,g=o.nested,b=g===void 0?!1:g,S=o.closeOnDocumentClick,k=S===void 0?!0:S,P=o.repositionOnResize,ve=P===void 0?!0:P,K=o.closeOnEscape,me=K===void 0?!0:K,G=o.on,I=G===void 0?["click"]:G,J=o.contentStyle,ye=J===void 0?{}:J,Q=o.arrowStyle,j=Q===void 0?{}:Q,U=o.overlayStyle,he=U===void 0?{}:U,V=o.className,A=V===void 0?"":V,Z=o.position,we=Z===void 0?"bottom center":Z,_=o.modal,B=_===void 0?!1:_,ee=o.lockScroll,te=ee===void 0?!1:ee,oe=o.arrow,F=oe===void 0?!0:oe,re=o.offsetX,be=re===void 0?0:re,ne=o.offsetY,Ee=ne===void 0?0:ne,ie=o.mouseEnterDelay,ge=ie===void 0?100:ie,ae=o.mouseLeaveDelay,Oe=ae===void 0?100:ae,le=o.keepTooltipInside,ke=le===void 0?!1:le,z=o.children,se=p.useState(m||s),C=se[0],ue=se[1],x=p.useRef(null),h=p.useRef(null),R=p.useRef(null),fe=p.useRef(null),ce=p.useRef("popup-"+ ++He),w=B?!0:!r,X=p.useRef(0);ze(function(){return C?(fe.current=document.activeElement,pe(),Le(),Pe()):xe(),function(){clearTimeout(X.current)}},[C]),p.useEffect(function(){typeof m=="boolean"&&(m?N():T())},[m,c]);var N=function(n){C||c||(ue(!0),setTimeout(function(){return a(n)},0))},T=function(n){var v;!C||c||(ue(!1),w&&((v=fe.current)===null||v===void 0||v.focus()),setTimeout(function(){return O(n)},0))},q=function(n){n==null||n.stopPropagation(),C?T(n):N(n)},H=function(n){clearTimeout(X.current),X.current=setTimeout(function(){return N(n)},ge)},Ce=function(n){n==null||n.preventDefault(),q()},W=function(n){clearTimeout(X.current),X.current=setTimeout(function(){return T(n)},Oe)},Pe=function(){w&&te&&(document.getElementsByTagName("body")[0].style.overflow="hidden")},xe=function(){w&&te&&(document.getElementsByTagName("body")[0].style.overflow="auto")},Le=function(){var n,v=h==null||(n=h.current)===null||n===void 0?void 0:n.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),i=Array.prototype.slice.call(v)[0];i==null||i.focus()};p.useImperativeHandle(e,function(){return{open:function(){N()},close:function(){T()},toggle:function(){q()}}});var pe=function(){if(!(w||!C)&&!(!(x!=null&&x.current)||!(x!=null&&x.current)||!(h!=null&&h.current))){var n=x.current.getBoundingClientRect(),v=h.current.getBoundingClientRect(),i=qe(n,v,we,F,{offsetX:be,offsetY:Ee},ke);if(h.current.style.top=i.top+window.scrollY+"px",h.current.style.left=i.left+window.scrollX+"px",F&&R.current){var $,Y;R.current.style.transform=i.transform,R.current.style.setProperty("-ms-transform",i.transform),R.current.style.setProperty("-webkit-transform",i.transform),R.current.style.top=(($=j.top)===null||$===void 0?void 0:$.toString())||i.arrowTop,R.current.style.left=((Y=j.left)===null||Y===void 0?void 0:Y.toString())||i.arrowLeft}}};Xe(T,me),Me(h,C&&w),Ye(pe,ve),De(r?[h,x]:[h],T,k&&!b);var Se=function(){for(var n={key:"T",ref:x,"aria-describedby":ce.current},v=Array.isArray(I)?I:[I],i=0,$=v.length;i<$;i++)switch(v[i]){case"click":n.onClick=q;break;case"right-click":n.onContextMenu=Ce;break;case"hover":n.onMouseEnter=H,n.onMouseLeave=W;break;case"focus":n.onFocus=H,n.onBlur=W;break}if(typeof r=="function"){var Y=r(C);return!!r&&L.cloneElement(Y,n)}return!!r&&L.cloneElement(r,n)},Te=function(){var n=w?D.popupContent.modal:D.popupContent.tooltip,v={className:"popup-content "+(A!==""?A.split(" ").map(function(i){return i+"-content"}).join(" "):""),style:M({},n,ye,{pointerEvents:"auto"}),ref:h,onClick:function($){$.stopPropagation()}};return!B&&I.indexOf("hover")>=0&&(v.onMouseEnter=H,v.onMouseLeave=W),v},de=function(){return L.createElement("div",Object.assign({},Te(),{key:"C",role:w?"dialog":"tooltip",id:ce.current}),F&&!w&&L.createElement("div",{ref:R,style:D.popupArrow},L.createElement("svg",{"data-testid":"arrow",className:"popup-arrow "+(A!==""?A.split(" ").map(function(n){return n+"-arrow"}).join(" "):""),viewBox:"0 0 32 16",style:M({position:"absolute"},j)},L.createElement("path",{d:"M16 0l16 16H0z",fill:"currentcolor"}))),z&&typeof z=="function"?z(T,C):z)},Re=!(I.indexOf("hover")>=0),$e=w?D.overlay.modal:D.overlay.tooltip,Ae=[Re&&L.createElement("div",{key:"O","data-testid":"overlay","data-popup":w?"modal":"tooltip",className:"popup-overlay "+(A!==""?A.split(" ").map(function(u){return u+"-overlay"}).join(" "):""),style:M({},$e,he,{pointerEvents:k&&b||w?"auto":"none"}),onClick:k&&b?T:void 0,tabIndex:-1},w&&de()),!w&&de()];return L.createElement(L.Fragment,null,Se(),C&&Ie.createPortal(Ae,We()))});export{Ge as P};
