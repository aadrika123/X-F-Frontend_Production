import{r as g,j as At}from"./index-54024790.js";var be=Object.create,ie=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,Ae=Object.getOwnPropertyNames,Ee=Object.getPrototypeOf,Re=Object.prototype.hasOwnProperty,Te=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),ke=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of Ae(e))!Re.call(t,l)&&l!==n&&ie(t,l,{get:()=>e[l],enumerable:!(r=Se(e,l))||r.enumerable});return t},ae=(t,e,n)=>(n=t!=null?be(Ee(t)):{},ke(e||!t||!t.__esModule?ie(n,"default",{value:t,enumerable:!0}):n,t)),ce=Te((t,e)=>{(function(){var n={}.hasOwnProperty;function r(){for(var l=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")l.push(o);else if(Array.isArray(o)){if(o.length){var s=r.apply(null,o);s&&l.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){l.push(o.toString());continue}for(var c in o)n.call(o,c)&&o[c]&&l.push(c)}}}return l.join(" ")}typeof e<"u"&&e.exports?(r.default=r,e.exports=r):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return r}):window.classNames=r})()}),Jt=ae(ce()),Le=(t,e,n)=>{let r=null;return function(...l){let i=()=>{r=null,n||t.apply(this,l)};r&&clearTimeout(r),r=setTimeout(i,e)}},Gt=Le,Oe="DEFAULT_TOOLTIP_ID",_e={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},je={getTooltipData:()=>_e},Ne=g.createContext(je);function se(t=Oe){return g.useContext(Ne).getTooltipData(t)}ae(ce());var Pe=typeof window<"u"?g.useLayoutEffect:g.useEffect,Ce=Pe;function Tt(t){return t.split("-")[1]}function Zt(t){return t==="y"?"height":"width"}function at(t){return t.split("-")[0]}function kt(t){return["top","bottom"].includes(at(t))?"x":"y"}function Ut(t,e,n){let{reference:r,floating:l}=t,i=r.x+r.width/2-l.width/2,o=r.y+r.height/2-l.height/2,a=kt(e),s=Zt(a),c=r[s]/2-l[s]/2,f=a==="x",u;switch(at(e)){case"top":u={x:i,y:r.y-l.height};break;case"bottom":u={x:i,y:r.y+r.height};break;case"right":u={x:r.x+r.width,y:o};break;case"left":u={x:r.x-l.width,y:o};break;default:u={x:r.x,y:r.y}}switch(Tt(e)){case"start":u[a]-=c*(n&&f?-1:1);break;case"end":u[a]+=c*(n&&f?-1:1)}return u}var De=async(t,e,n)=>{let{placement:r="bottom",strategy:l="absolute",middleware:i=[],platform:o}=n,a=i.filter(Boolean),s=await(o.isRTL==null?void 0:o.isRTL(e)),c=await o.getElementRects({reference:t,floating:e,strategy:l}),{x:f,y:u}=Ut(c,r,s),m=r,p={},v=0;for(let h=0;h<a.length;h++){let{name:w,fn:x}=a[h],{x:b,y:A,data:_,reset:L}=await x({x:f,y:u,initialPlacement:r,placement:m,strategy:l,middlewareData:p,rects:c,platform:o,elements:{reference:t,floating:e}});f=b??f,u=A??u,p={...p,[w]:{...p[w],..._}},L&&v<=50&&(v++,typeof L=="object"&&(L.placement&&(m=L.placement),L.rects&&(c=L.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:l}):L.rects),{x:f,y:u}=Ut(c,m,s)),h=-1)}return{x:f,y:u,placement:m,strategy:l,middlewareData:p}};function ue(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function Ct(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function fe(t,e){var n;e===void 0&&(e={});let{x:r,y:l,platform:i,rects:o,elements:a,strategy:s}=t,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:m=!1,padding:p=0}=e,v=ue(p),h=a[m?u==="floating"?"reference":"floating":u],w=Ct(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(h)))==null||n?h:h.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:f,strategy:s})),x=u==="floating"?{...o.floating,x:r,y:l}:o.reference,b=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),A=await(i.isElement==null?void 0:i.isElement(b))&&await(i.getScale==null?void 0:i.getScale(b))||{x:1,y:1},_=Ct(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:b,strategy:s}):x);return{top:(w.top-_.top+v.top)/A.y,bottom:(_.bottom-w.bottom+v.bottom)/A.y,left:(w.left-_.left+v.left)/A.x,right:(_.right-w.right+v.right)/A.x}}var Be=Math.min,He=Math.max;function Wt(t,e,n){return He(t,Be(e,n))}var Me=t=>({name:"arrow",options:t,async fn(e){let{element:n,padding:r=0}=t||{},{x:l,y:i,placement:o,rects:a,platform:s,elements:c}=e;if(n==null)return{};let f=ue(r),u={x:l,y:i},m=kt(o),p=Zt(m),v=await s.getDimensions(n),h=m==="y",w=h?"top":"left",x=h?"bottom":"right",b=h?"clientHeight":"clientWidth",A=a.reference[p]+a.reference[m]-u[m]-a.floating[p],_=u[m]-a.reference[m],L=await(s.getOffsetParent==null?void 0:s.getOffsetParent(n)),D=L?L[b]:0;D&&await(s.isElement==null?void 0:s.isElement(L))||(D=c.floating[b]||a.floating[p]);let $=A/2-_/2,C=f[w],Y=D-v[p]-f[x],k=D/2-v[p]/2+$,R=Wt(C,k,Y),T=Tt(o)!=null&&k!=R&&a.reference[p]/2-(k<C?f[w]:f[x])-v[p]/2<0;return{[m]:u[m]-(T?k<C?C-k:Y-k:0),data:{[m]:R,centerOffset:k-R}}}}),$e=["top","right","bottom","left"];$e.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);var qe={left:"right",right:"left",bottom:"top",top:"bottom"};function Dt(t){return t.replace(/left|right|bottom|top/g,e=>qe[e])}function Ie(t,e,n){n===void 0&&(n=!1);let r=Tt(t),l=kt(t),i=Zt(l),o=l==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(o=Dt(o)),{main:o,cross:Dt(o)}}var Ke={start:"end",end:"start"};function Vt(t){return t.replace(/start|end/g,e=>Ke[e])}var Ve=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;let{placement:r,middlewareData:l,rects:i,initialPlacement:o,platform:a,elements:s}=e,{mainAxis:c=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:v=!0,...h}=t,w=at(r),x=at(o)===o,b=await(a.isRTL==null?void 0:a.isRTL(s.floating)),A=u||(x||!v?[Dt(o)]:function(R){let T=Dt(R);return[Vt(R),T,Vt(T)]}(o));u||p==="none"||A.push(...function(R,T,P,j){let O=Tt(R),N=function(X,G,ct){let st=["left","right"],nt=["right","left"],F=["top","bottom"],ut=["bottom","top"];switch(X){case"top":case"bottom":return ct?G?nt:st:G?st:nt;case"left":case"right":return G?F:ut;default:return[]}}(at(R),P==="start",j);return O&&(N=N.map(X=>X+"-"+O),T&&(N=N.concat(N.map(Vt)))),N}(o,v,p,b));let _=[o,...A],L=await fe(e,h),D=[],$=((n=l.flip)==null?void 0:n.overflows)||[];if(c&&D.push(L[w]),f){let{main:R,cross:T}=Ie(r,i,b);D.push(L[R],L[T])}if($=[...$,{placement:r,overflows:D}],!D.every(R=>R<=0)){var C,Y;let R=(((C=l.flip)==null?void 0:C.index)||0)+1,T=_[R];if(T)return{data:{index:R,overflows:$},reset:{placement:T}};let P=(Y=$.filter(j=>j.overflows[0]<=0).sort((j,O)=>j.overflows[1]-O.overflows[1])[0])==null?void 0:Y.placement;if(!P)switch(m){case"bestFit":{var k;let j=(k=$.map(O=>[O.placement,O.overflows.filter(N=>N>0).reduce((N,X)=>N+X,0)]).sort((O,N)=>O[1]-N[1])[0])==null?void 0:k[0];j&&(P=j);break}case"initialPlacement":P=o}if(r!==P)return{reset:{placement:P}}}return{}}}},We=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){let{x:n,y:r}=e,l=await async function(i,o){let{placement:a,platform:s,elements:c}=i,f=await(s.isRTL==null?void 0:s.isRTL(c.floating)),u=at(a),m=Tt(a),p=kt(a)==="x",v=["left","top"].includes(u)?-1:1,h=f&&p?-1:1,w=typeof o=="function"?o(i):o,{mainAxis:x,crossAxis:b,alignmentAxis:A}=typeof w=="number"?{mainAxis:w,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...w};return m&&typeof A=="number"&&(b=m==="end"?-1*A:A),p?{x:b*h,y:x*v}:{x:x*v,y:b*h}}(e,t);return{x:n+l.x,y:r+l.y,data:l}}}};function Fe(t){return t==="x"?"y":"x"}var ze=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:r,placement:l}=e,{mainAxis:i=!0,crossAxis:o=!1,limiter:a={fn:w=>{let{x,y:b}=w;return{x,y:b}}},...s}=t,c={x:n,y:r},f=await fe(e,s),u=kt(at(l)),m=Fe(u),p=c[u],v=c[m];if(i){let w=u==="y"?"bottom":"right";p=Wt(p+f[u==="y"?"top":"left"],p,p-f[w])}if(o){let w=m==="y"?"bottom":"right";v=Wt(v+f[m==="y"?"top":"left"],v,v-f[w])}let h=a.fn({...e,[u]:p,[m]:v});return{...h,data:{x:h.x-n,y:h.y-r}}}}};function W(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function J(t){return W(t).getComputedStyle(t)}var Qt=Math.min,St=Math.max,Bt=Math.round;function de(t){let e=J(t),n=parseFloat(e.width),r=parseFloat(e.height),l=t.offsetWidth,i=t.offsetHeight,o=Bt(n)!==l||Bt(r)!==i;return o&&(n=l,r=i),{width:n,height:r,fallback:o}}function rt(t){return me(t)?(t.nodeName||"").toLowerCase():""}var Pt;function pe(){if(Pt)return Pt;let t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(Pt=t.brands.map(e=>e.brand+"/"+e.version).join(" "),Pt):navigator.userAgent}function Z(t){return t instanceof W(t).HTMLElement}function tt(t){return t instanceof W(t).Element}function me(t){return t instanceof W(t).Node}function te(t){return typeof ShadowRoot>"u"?!1:t instanceof W(t).ShadowRoot||t instanceof ShadowRoot}function Ht(t){let{overflow:e,overflowX:n,overflowY:r,display:l}=J(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(l)}function Ze(t){return["table","td","th"].includes(rt(t))}function Ft(t){let e=/firefox/i.test(pe()),n=J(t),r=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!r&&r!=="none"||e&&n.willChange==="filter"||e&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(l=>n.willChange.includes(l))||["paint","layout","strict","content"].some(l=>{let i=n.contain;return i!=null&&i.includes(l)})}function zt(){return/^((?!chrome|android).)*safari/i.test(pe())}function Yt(t){return["html","body","#document"].includes(rt(t))}function ye(t){return tt(t)?t:t.contextElement}var he={x:1,y:1};function ht(t){let e=ye(t);if(!Z(e))return he;let n=e.getBoundingClientRect(),{width:r,height:l,fallback:i}=de(e),o=(i?Bt(n.width):n.width)/r,a=(i?Bt(n.height):n.height)/l;return o&&Number.isFinite(o)||(o=1),a&&Number.isFinite(a)||(a=1),{x:o,y:a}}function Et(t,e,n,r){var l,i;e===void 0&&(e=!1),n===void 0&&(n=!1);let o=t.getBoundingClientRect(),a=ye(t),s=he;e&&(r?tt(r)&&(s=ht(r)):s=ht(t));let c=a?W(a):window,f=zt()&&n,u=(o.left+(f&&((l=c.visualViewport)==null?void 0:l.offsetLeft)||0))/s.x,m=(o.top+(f&&((i=c.visualViewport)==null?void 0:i.offsetTop)||0))/s.y,p=o.width/s.x,v=o.height/s.y;if(a){let h=W(a),w=r&&tt(r)?W(r):r,x=h.frameElement;for(;x&&r&&w!==h;){let b=ht(x),A=x.getBoundingClientRect(),_=getComputedStyle(x);A.x+=(x.clientLeft+parseFloat(_.paddingLeft))*b.x,A.y+=(x.clientTop+parseFloat(_.paddingTop))*b.y,u*=b.x,m*=b.y,p*=b.x,v*=b.y,u+=A.x,m+=A.y,x=W(x).frameElement}}return Ct({width:p,height:v,x:u,y:m})}function et(t){return((me(t)?t.ownerDocument:t.document)||window.document).documentElement}function Mt(t){return tt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ge(t){return Et(et(t)).left+Mt(t).scrollLeft}function Rt(t){if(rt(t)==="html")return t;let e=t.assignedSlot||t.parentNode||te(t)&&t.host||et(t);return te(e)?e.host:e}function ve(t){let e=Rt(t);return Yt(e)?e.ownerDocument.body:Z(e)&&Ht(e)?e:ve(e)}function we(t,e){var n;e===void 0&&(e=[]);let r=ve(t),l=r===((n=t.ownerDocument)==null?void 0:n.body),i=W(r);return l?e.concat(i,i.visualViewport||[],Ht(r)?r:[]):e.concat(r,we(r))}function ee(t,e,n){let r;if(e==="viewport")r=function(o,a){let s=W(o),c=et(o),f=s.visualViewport,u=c.clientWidth,m=c.clientHeight,p=0,v=0;if(f){u=f.width,m=f.height;let h=zt();(!h||h&&a==="fixed")&&(p=f.offsetLeft,v=f.offsetTop)}return{width:u,height:m,x:p,y:v}}(t,n);else if(e==="document")r=function(o){let a=et(o),s=Mt(o),c=o.ownerDocument.body,f=St(a.scrollWidth,a.clientWidth,c.scrollWidth,c.clientWidth),u=St(a.scrollHeight,a.clientHeight,c.scrollHeight,c.clientHeight),m=-s.scrollLeft+ge(o),p=-s.scrollTop;return J(c).direction==="rtl"&&(m+=St(a.clientWidth,c.clientWidth)-f),{width:f,height:u,x:m,y:p}}(et(t));else if(tt(e))r=function(o,a){let s=Et(o,!0,a==="fixed"),c=s.top+o.clientTop,f=s.left+o.clientLeft,u=Z(o)?ht(o):{x:1,y:1};return{width:o.clientWidth*u.x,height:o.clientHeight*u.y,x:f*u.x,y:c*u.y}}(e,n);else{let o={...e};if(zt()){var l,i;let a=W(t);o.x-=((l=a.visualViewport)==null?void 0:l.offsetLeft)||0,o.y-=((i=a.visualViewport)==null?void 0:i.offsetTop)||0}r=o}return Ct(r)}function re(t,e){return Z(t)&&J(t).position!=="fixed"?e?e(t):t.offsetParent:null}function ne(t,e){let n=W(t);if(!Z(t))return n;let r=re(t,e);for(;r&&Ze(r)&&J(r).position==="static";)r=re(r,e);return r&&(rt(r)==="html"||rt(r)==="body"&&J(r).position==="static"&&!Ft(r))?n:r||function(l){let i=Rt(l);for(;Z(i)&&!Yt(i);){if(Ft(i))return i;i=Rt(i)}return null}(t)||n}function Ye(t,e,n){let r=Z(e),l=et(e),i=Et(t,!0,n==="fixed",e),o={scrollLeft:0,scrollTop:0},a={x:0,y:0};if(r||!r&&n!=="fixed")if((rt(e)!=="body"||Ht(l))&&(o=Mt(e)),Z(e)){let s=Et(e,!0);a.x=s.x+e.clientLeft,a.y=s.y+e.clientTop}else l&&(a.x=ge(l));return{x:i.left+o.scrollLeft-a.x,y:i.top+o.scrollTop-a.y,width:i.width,height:i.height}}var Xe={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:r,strategy:l}=t,i=n==="clippingAncestors"?function(c,f){let u=f.get(c);if(u)return u;let m=we(c).filter(w=>tt(w)&&rt(w)!=="body"),p=null,v=J(c).position==="fixed",h=v?Rt(c):c;for(;tt(h)&&!Yt(h);){let w=J(h),x=Ft(h);w.position==="fixed"?p=null:(v?x||p:x||w.position!=="static"||!p||!["absolute","fixed"].includes(p.position))?p=w:m=m.filter(b=>b!==h),h=Rt(h)}return f.set(c,m),m}(e,this._c):[].concat(n),o=[...i,r],a=o[0],s=o.reduce((c,f)=>{let u=ee(e,f,l);return c.top=St(u.top,c.top),c.right=Qt(u.right,c.right),c.bottom=Qt(u.bottom,c.bottom),c.left=St(u.left,c.left),c},ee(e,a,l));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:r}=t,l=Z(n),i=et(n);if(n===i)return e;let o={scrollLeft:0,scrollTop:0},a={x:1,y:1},s={x:0,y:0};if((l||!l&&r!=="fixed")&&((rt(n)!=="body"||Ht(i))&&(o=Mt(n)),Z(n))){let c=Et(n);a=ht(n),s.x=c.x+n.clientLeft,s.y=c.y+n.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-o.scrollLeft*a.x+s.x,y:e.y*a.y-o.scrollTop*a.y+s.y}},isElement:tt,getDimensions:function(t){return Z(t)?de(t):t.getBoundingClientRect()},getOffsetParent:ne,getDocumentElement:et,getScale:ht,async getElementRects(t){let{reference:e,floating:n,strategy:r}=t,l=this.getOffsetParent||ne,i=this.getDimensions;return{reference:Ye(e,await l(n),r),floating:{x:0,y:0,...await i(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>J(t).direction==="rtl"},oe=(t,e,n)=>{let r=new Map,l={platform:Xe,...n},i={...l.platform,_c:r};return De(t,e,{...l,platform:i})},le=async({elementReference:t=null,tooltipReference:e=null,tooltipArrowReference:n=null,place:r="top",offset:l=10,strategy:i="absolute",middlewares:o=[We(Number(l)),Ve(),ze({padding:5})]})=>{if(!t)return{tooltipStyles:{},tooltipArrowStyles:{},place:r};if(e===null)return{tooltipStyles:{},tooltipArrowStyles:{},place:r};let a=o;return n?(a.push(Me({element:n,padding:5})),oe(t,e,{placement:r,strategy:i,middleware:a}).then(({x:s,y:c,placement:f,middlewareData:u})=>{var m,p;let v={left:`${s}px`,top:`${c}px`},{x:h,y:w}=(m=u.arrow)!=null?m:{x:0,y:0},x=(p={top:"bottom",right:"left",bottom:"top",left:"right"}[f.split("-")[0]])!=null?p:"bottom",b={left:h!=null?`${h}px`:"",top:w!=null?`${w}px`:"",right:"",bottom:"",[x]:"-4px"};return{tooltipStyles:v,tooltipArrowStyles:b,place:f}})):oe(t,e,{placement:"bottom",strategy:i,middleware:a}).then(({x:s,y:c,placement:f})=>({tooltipStyles:{left:`${s}px`,top:`${c}px`},tooltipArrowStyles:{},place:f}))},it={arrow:"react-tooltip__arrow_KtSkBq",clickable:"react-tooltip__clickable_KtSkBq",dark:"react-tooltip__dark_KtSkBq",error:"react-tooltip__error_KtSkBq",fixed:"react-tooltip__fixed_KtSkBq",info:"react-tooltip__info_KtSkBq",light:"react-tooltip__light_KtSkBq",noArrow:"react-tooltip__no-arrow_KtSkBq",show:"react-tooltip__show_KtSkBq",success:"react-tooltip__success_KtSkBq",tooltip:"react-tooltip__tooltip_KtSkBq",warning:"react-tooltip__warning_KtSkBq"},Je=({id:t,className:e,classNameArrow:n,variant:r="dark",anchorId:l,anchorSelect:i,place:o="top",offset:a=10,events:s=["hover"],openOnClick:c=!1,positionStrategy:f="absolute",middlewares:u,wrapper:m,delayShow:p=0,delayHide:v=0,float:h=!1,noArrow:w=!1,clickable:x=!1,closeOnEsc:b=!1,style:A,position:_,afterShow:L,afterHide:D,content:$,isOpen:C,setIsOpen:Y,activeAnchor:k,setActiveAnchor:R})=>{let T=g.useRef(null),P=g.useRef(null),j=g.useRef(null),O=g.useRef(null),[N,X]=g.useState(o),[G,ct]=g.useState({}),[st,nt]=g.useState({}),[F,ut]=g.useState(!1),[Lt,ft]=g.useState(!1),Ot=g.useRef(!1),gt=g.useRef(null),{anchorRefs:_t,setActiveAnchor:$t}=se(t),vt=g.useRef(!1),[U,wt]=g.useState([]),ot=g.useRef(!1),dt=c||s.includes("click");Ce(()=>(ot.current=!0,()=>{ot.current=!1}),[]),g.useEffect(()=>{if(!F){let d=setTimeout(()=>{ft(!1)},150);return()=>{clearTimeout(d)}}return()=>null},[F]);let q=d=>{ot.current&&(d&&ft(!0),setTimeout(()=>{ot.current&&(Y==null||Y(d),C===void 0&&ut(d))},10))};g.useEffect(()=>{if(C===void 0)return()=>null;C&&ft(!0);let d=setTimeout(()=>{ut(C)},10);return()=>{clearTimeout(d)}},[C]),g.useEffect(()=>{F!==Ot.current&&(Ot.current=F,F?L==null||L():D==null||D())},[F]);let qt=()=>{j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{q(!0)},p)},pt=(d=v)=>{O.current&&clearTimeout(O.current),O.current=setTimeout(()=>{vt.current||q(!1)},d)},xt=d=>{var E;if(!d)return;p?qt():q(!0);let S=(E=d.currentTarget)!=null?E:d.target;R(S),$t({current:S}),O.current&&clearTimeout(O.current)},bt=()=>{x?pt(v||100):v?pt():q(!1),j.current&&clearTimeout(j.current)},mt=({x:d,y:E})=>{le({place:o,offset:a,elementReference:{getBoundingClientRect(){return{x:d,y:E,width:0,height:0,top:E,left:d,right:d,bottom:E}}},tooltipReference:T.current,tooltipArrowReference:P.current,strategy:f,middlewares:u}).then(S=>{Object.keys(S.tooltipStyles).length&&ct(S.tooltipStyles),Object.keys(S.tooltipArrowStyles).length&&nt(S.tooltipArrowStyles),X(S.place)})},yt=d=>{if(!d)return;let E=d,S={x:E.clientX,y:E.clientY};mt(S),gt.current=S},I=d=>{xt(d),v&&pt()},K=d=>{var E;[document.querySelector(`[id='${l}']`),...U].some(S=>S==null?void 0:S.contains(d.target))||(E=T.current)!=null&&E.contains(d.target)||q(!1)},y=d=>{d.key==="Escape"&&q(!1)},B=Gt(xt,50),V=Gt(bt,50);g.useEffect(()=>{var d,E;let S=new Set(_t);U.forEach(z=>{S.add({current:z})});let lt=document.querySelector(`[id='${l}']`);lt&&S.add({current:lt}),b&&window.addEventListener("keydown",y);let H=[];dt?(window.addEventListener("click",K),H.push({event:"click",listener:I})):(H.push({event:"mouseenter",listener:B},{event:"mouseleave",listener:V},{event:"focus",listener:B},{event:"blur",listener:V}),h&&H.push({event:"mousemove",listener:yt}));let M=()=>{vt.current=!0},Q=()=>{vt.current=!1,bt()};return x&&!dt&&((d=T.current)==null||d.addEventListener("mouseenter",M),(E=T.current)==null||E.addEventListener("mouseleave",Q)),H.forEach(({event:z,listener:jt})=>{S.forEach(Kt=>{var Nt;(Nt=Kt.current)==null||Nt.addEventListener(z,jt)})}),()=>{var z,jt;dt&&window.removeEventListener("click",K),b&&window.removeEventListener("keydown",y),x&&!dt&&((z=T.current)==null||z.removeEventListener("mouseenter",M),(jt=T.current)==null||jt.removeEventListener("mouseleave",Q)),H.forEach(({event:Kt,listener:Nt})=>{S.forEach(xe=>{var Xt;(Xt=xe.current)==null||Xt.removeEventListener(Kt,Nt)})})}},[Lt,_t,U,b,s]),g.useEffect(()=>{let d=i??"";!d&&t&&(d=`[data-tooltip-id='${t}']`);let E=lt=>{let H=[];lt.forEach(M=>{if(M.type==="attributes"&&M.attributeName==="data-tooltip-id"&&M.target.getAttribute("data-tooltip-id")===t&&H.push(M.target),M.type==="childList"&&(k&&[...M.removedNodes].some(Q=>Q.contains(k)?(ft(!1),q(!1),R(null),!0):!1),!!d))try{let Q=[...M.addedNodes].filter(z=>z.nodeType===1);H.push(...Q.filter(z=>z.matches(d))),H.push(...Q.flatMap(z=>[...z.querySelectorAll(d)]))}catch{}}),H.length&&wt(M=>[...M,...H])},S=new MutationObserver(E);return S.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"]}),()=>{S.disconnect()}},[t,i,k]),g.useEffect(()=>{if(_){mt(_);return}if(h){gt.current&&mt(gt.current);return}le({place:o,offset:a,elementReference:k,tooltipReference:T.current,tooltipArrowReference:P.current,strategy:f,middlewares:u}).then(d=>{ot.current&&(Object.keys(d.tooltipStyles).length&&ct(d.tooltipStyles),Object.keys(d.tooltipArrowStyles).length&&nt(d.tooltipArrowStyles),X(d.place))})},[F,k,$,o,a,f,_]),g.useEffect(()=>{var d;let E=document.querySelector(`[id='${l}']`),S=[...U,E];(!k||!S.includes(k))&&R((d=U[0])!=null?d:E)},[l,U,k]),g.useEffect(()=>()=>{j.current&&clearTimeout(j.current),O.current&&clearTimeout(O.current)},[]),g.useEffect(()=>{let d=i;if(!d&&t&&(d=`[data-tooltip-id='${t}']`),!!d)try{let E=Array.from(document.querySelectorAll(d));wt(E)}catch{wt([])}},[t,i]);let It=$&&F&&Object.keys(G).length>0;return Lt?At.jsxs(m,{id:t,role:"tooltip",className:(0,Jt.default)("react-tooltip",it.tooltip,it[r],e,`react-tooltip__place-${N}`,{[it.show]:It,[it.fixed]:f==="fixed",[it.clickable]:x}),style:{...A,...G},ref:T,children:[$,At.jsx(m,{className:(0,Jt.default)("react-tooltip-arrow",it.arrow,n,{[it.noArrow]:w}),style:st,ref:P})]}):null},Ge=Je,Ue=({content:t})=>At.jsx("span",{dangerouslySetInnerHTML:{__html:t}}),Qe=Ue,tr=({id:t,anchorId:e,anchorSelect:n,content:r,html:l,render:i,className:o,classNameArrow:a,variant:s="dark",place:c="top",offset:f=10,wrapper:u="div",children:m=null,events:p=["hover"],openOnClick:v=!1,positionStrategy:h="absolute",middlewares:w,delayShow:x=0,delayHide:b=0,float:A=!1,noArrow:_=!1,clickable:L=!1,closeOnEsc:D=!1,style:$,position:C,isOpen:Y,setIsOpen:k,afterShow:R,afterHide:T})=>{let[P,j]=g.useState(r),[O,N]=g.useState(l),[X,G]=g.useState(c),[ct,st]=g.useState(s),[nt,F]=g.useState(f),[ut,Lt]=g.useState(x),[ft,Ot]=g.useState(b),[gt,_t]=g.useState(A),[$t,vt]=g.useState(u),[U,wt]=g.useState(p),[ot,dt]=g.useState(h),[q,qt]=g.useState(null),{anchorRefs:pt,activeAnchor:xt}=se(t),bt=I=>I==null?void 0:I.getAttributeNames().reduce((K,y)=>{var B;if(y.startsWith("data-tooltip-")){let V=y.replace(/^data-tooltip-/,"");K[V]=(B=I==null?void 0:I.getAttribute(y))!=null?B:null}return K},{}),mt=I=>{let K={place:y=>{G(y??c)},content:y=>{j(y??r)},html:y=>{N(y??l)},variant:y=>{st(y??s)},offset:y=>{F(y===null?f:Number(y))},wrapper:y=>{vt(y??u)},events:y=>{let B=y==null?void 0:y.split(" ");wt(B??p)},"position-strategy":y=>{dt(y??h)},"delay-show":y=>{Lt(y===null?x:Number(y))},"delay-hide":y=>{Ot(y===null?b:Number(y))},float:y=>{_t(y===null?A:y==="true")}};Object.values(K).forEach(y=>y(null)),Object.entries(I).forEach(([y,B])=>{var V;(V=K[y])==null||V.call(K,B)})};g.useEffect(()=>{j(r)},[r]),g.useEffect(()=>{N(l)},[l]),g.useEffect(()=>{G(c)},[c]),g.useEffect(()=>{var I;let K=new Set(pt),y=n;if(!y&&t&&(y=`[data-tooltip-id='${t}']`),y)try{document.querySelectorAll(y).forEach(S=>{K.add({current:S})})}catch{}let B=document.querySelector(`[id='${e}']`);if(B&&K.add({current:B}),!K.size)return()=>null;let V=(I=q??B)!=null?I:xt.current,It=S=>{S.forEach(lt=>{var H;if(!V||lt.type!=="attributes"||!((H=lt.attributeName)!=null&&H.startsWith("data-tooltip-")))return;let M=bt(V);mt(M)})},d=new MutationObserver(It),E={attributes:!0,childList:!1,subtree:!1};if(V){let S=bt(V);mt(S),d.observe(V,E)}return()=>{d.disconnect()}},[pt,xt,q,e,n]);let yt=m;return i?yt=i({content:P??null,activeAnchor:q}):P&&(yt=P),O&&(yt=At.jsx(Qe,{content:O})),At.jsx(Ge,{id:t,anchorId:e,anchorSelect:n,className:o,classNameArrow:a,content:yt,place:X,variant:ct,offset:nt,wrapper:$t,events:U,openOnClick:v,positionStrategy:ot,middlewares:w,delayShow:ut,delayHide:ft,float:gt,noArrow:_,clickable:L,closeOnEsc:D,style:$,position:C,isOpen:Y,setIsOpen:k,afterShow:R,afterHide:T,activeAnchor:q,setActiveAnchor:I=>qt(I)})},rr=tr;/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/export{rr as N};