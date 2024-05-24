import{a_ as Zt,a$ as te,r as d,b0 as ee,b1 as oe,aO as Q,j as S,aL as f,aG as nt,b2 as le,b3 as re,b4 as ne,aH as pt,aI as j,aK as zt,aN as ht,aP as $,aQ as mt,aq as Wt,b5 as se,b6 as $t,b7 as rt,b8 as ae,b9 as bt,ba as ce}from"./index-3a3e7484.js";import{c as ie,B as Lt}from"./Typography-afda6028.js";import{d as kt,u as Ft}from"./react-is.production.min-fcfdc45c.js";let U;function At(){if(U)return U;const t=document.createElement("div"),e=document.createElement("div");return e.style.width="10px",e.style.height="1px",t.appendChild(e),t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t),U="reverse",t.scrollLeft>0?U="default":(t.scrollLeft=1,t.scrollLeft===0&&(U="negative")),document.body.removeChild(t),U}function de(t,e){const r=t.scrollLeft;if(e!=="rtl")return r;switch(At()){case"negative":return t.scrollWidth-t.clientWidth+r;case"reverse":return t.scrollWidth-t.clientWidth-r;default:return r}}const ue=["className","component"];function be(t={}){const{themeId:e,defaultTheme:r,defaultClassName:s="MuiBox-root",generateClassName:n}=t,c=Zt("div",{shouldForwardProp:b=>b!=="theme"&&b!=="sx"&&b!=="as"})(te);return d.forwardRef(function(u,v){const g=ee(r),B=oe(u),{className:m,component:C="div"}=B,M=Q(B,ue);return S.jsx(c,f({as:C,ref:v,className:ie(m,n?n(s):s),theme:e&&g[e]||g},M))})}const fe=nt("MuiBox",["root"]),pe=fe,he=le(),me=be({themeId:re,defaultTheme:he,defaultClassName:pe.root,generateClassName:ne.generate}),Qe=me;function Se(t){return pt("MuiTab",t)}const ve=nt("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),O=ve,xe=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],ge=t=>{const{classes:e,textColor:r,fullWidth:s,wrapped:n,icon:c,label:h,selected:b,disabled:u}=t,v={root:["root",c&&h&&"labelIcon",`textColor${zt(r)}`,s&&"fullWidth",n&&"wrapped",b&&"selected",u&&"disabled"],iconWrapper:["iconWrapper"]};return mt(v,Se,e)},Be=j(Lt,{name:"MuiTab",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.label&&r.icon&&e.labelIcon,e[`textColor${zt(r.textColor)}`],r.fullWidth&&e.fullWidth,r.wrapped&&e.wrapped]}})(({theme:t,ownerState:e})=>f({},t.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},e.label&&{flexDirection:e.iconPosition==="top"||e.iconPosition==="bottom"?"column":"row"},{lineHeight:1.25},e.icon&&e.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${O.iconWrapper}`]:f({},e.iconPosition==="top"&&{marginBottom:6},e.iconPosition==="bottom"&&{marginTop:6},e.iconPosition==="start"&&{marginRight:t.spacing(1)},e.iconPosition==="end"&&{marginLeft:t.spacing(1)})},e.textColor==="inherit"&&{color:"inherit",opacity:.6,[`&.${O.selected}`]:{opacity:1},[`&.${O.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.textColor==="primary"&&{color:(t.vars||t).palette.text.secondary,[`&.${O.selected}`]:{color:(t.vars||t).palette.primary.main},[`&.${O.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.textColor==="secondary"&&{color:(t.vars||t).palette.text.secondary,[`&.${O.selected}`]:{color:(t.vars||t).palette.secondary.main},[`&.${O.disabled}`]:{color:(t.vars||t).palette.text.disabled}},e.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},e.wrapped&&{fontSize:t.typography.pxToRem(12)})),Ce=d.forwardRef(function(e,r){const s=ht({props:e,name:"MuiTab"}),{className:n,disabled:c=!1,disableFocusRipple:h=!1,fullWidth:b,icon:u,iconPosition:v="top",indicator:g,label:B,onChange:m,onClick:C,onFocus:M,selected:T,selectionFollowsFocus:y,textColor:H="inherit",value:R,wrapped:st=!1}=s,_=Q(s,xe),Y=f({},s,{disabled:c,disableFocusRipple:h,selected:T,icon:!!u,iconPosition:v,label:!!B,fullWidth:b,textColor:H,wrapped:st}),D=ge(Y),L=u&&B&&d.isValidElement(u)?d.cloneElement(u,{className:$(D.iconWrapper,u.props.className)}):u,J=P=>{!T&&m&&m(P,R),C&&C(P)},X=P=>{y&&!T&&m&&m(P,R),M&&M(P)};return S.jsxs(Be,f({focusRipple:!h,className:$(D.root,n),ref:r,role:"tab","aria-selected":T,disabled:c,onClick:J,onFocus:X,ownerState:Y,tabIndex:T?0:-1},_,{children:[v==="top"||v==="start"?S.jsxs(d.Fragment,{children:[L,B]}):S.jsxs(d.Fragment,{children:[B,L]}),g]}))}),Je=Ce,ye=Wt(S.jsx("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),we=Wt(S.jsx("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");function Te(t){return(1+Math.sin(Math.PI*t-Math.PI/2))/2}function Ie(t,e,r,s={},n=()=>{}){const{ease:c=Te,duration:h=300}=s;let b=null;const u=e[t];let v=!1;const g=()=>{v=!0},B=m=>{if(v){n(new Error("Animation cancelled"));return}b===null&&(b=m);const C=Math.min(1,(m-b)/h);if(e[t]=c(C)*(r-u)+u,C>=1){requestAnimationFrame(()=>{n(null)});return}requestAnimationFrame(B)};return u===r?(n(new Error("Element already at target position")),g):(requestAnimationFrame(B),g)}const Ee=["onChange"],Me={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function Re(t){const{onChange:e}=t,r=Q(t,Ee),s=d.useRef(),n=d.useRef(null),c=()=>{s.current=n.current.offsetHeight-n.current.clientHeight};return se(()=>{const h=kt(()=>{const u=s.current;c(),u!==s.current&&e(s.current)}),b=$t(n.current);return b.addEventListener("resize",h),()=>{h.clear(),b.removeEventListener("resize",h)}},[e]),d.useEffect(()=>{c(),e(s.current)},[e]),S.jsx("div",f({style:Me,ref:n},r))}function Pe(t){return pt("MuiTabScrollButton",t)}const Ne=nt("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),ze=Ne,We=["className","slots","slotProps","direction","orientation","disabled"],$e=t=>{const{classes:e,orientation:r,disabled:s}=t;return mt({root:["root",r,s&&"disabled"]},Pe,e)},Le=j(Lt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.orientation&&e[r.orientation]]}})(({ownerState:t})=>f({width:40,flexShrink:0,opacity:.8,[`&.${ze.disabled}`]:{opacity:0}},t.orientation==="vertical"&&{width:"100%",height:40,"& svg":{transform:`rotate(${t.isRtl?-90:90}deg)`}})),ke=d.forwardRef(function(e,r){var s,n;const c=ht({props:e,name:"MuiTabScrollButton"}),{className:h,slots:b={},slotProps:u={},direction:v}=c,g=Q(c,We),B=Ft(),m=f({isRtl:B},c),C=$e(m),M=(s=b.StartScrollButtonIcon)!=null?s:ye,T=(n=b.EndScrollButtonIcon)!=null?n:we,y=rt({elementType:M,externalSlotProps:u.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:m}),H=rt({elementType:T,externalSlotProps:u.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:m});return S.jsx(Le,f({component:"div",className:$(C.root,h),ref:r,role:null,ownerState:m,tabIndex:null},g,{children:v==="left"?S.jsx(M,f({},y)):S.jsx(T,f({},H))}))}),Fe=ke;function Ae(t){return pt("MuiTabs",t)}const Oe=nt("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),ft=Oe,je=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],Rt=(t,e)=>t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:t.firstChild,Pt=(t,e)=>t===e?t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:t.lastChild,lt=(t,e,r)=>{let s=!1,n=r(t,e);for(;n;){if(n===t.firstChild){if(s)return;s=!0}const c=n.disabled||n.getAttribute("aria-disabled")==="true";if(!n.hasAttribute("tabindex")||c)n=r(t,n);else{n.focus();return}}},He=t=>{const{vertical:e,fixed:r,hideScrollbar:s,scrollableX:n,scrollableY:c,centered:h,scrollButtonsHideMobile:b,classes:u}=t;return mt({root:["root",e&&"vertical"],scroller:["scroller",r&&"fixed",s&&"hideScrollbar",n&&"scrollableX",c&&"scrollableY"],flexContainer:["flexContainer",e&&"flexContainerVertical",h&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",b&&"scrollButtonsHideMobile"],scrollableX:[n&&"scrollableX"],hideScrollbar:[s&&"hideScrollbar"]},Ae,u)},_e=j("div",{name:"MuiTabs",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[{[`& .${ft.scrollButtons}`]:e.scrollButtons},{[`& .${ft.scrollButtons}`]:r.scrollButtonsHideMobile&&e.scrollButtonsHideMobile},e.root,r.vertical&&e.vertical]}})(({ownerState:t,theme:e})=>f({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&{[`& .${ft.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}})),De=j("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.scroller,r.fixed&&e.fixed,r.hideScrollbar&&e.hideScrollbar,r.scrollableX&&e.scrollableX,r.scrollableY&&e.scrollableY]}})(({ownerState:t})=>f({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),Xe=j("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.flexContainer,r.vertical&&e.flexContainerVertical,r.centered&&e.centered]}})(({ownerState:t})=>f({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})),Ue=j("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(t,e)=>e.indicator})(({ownerState:t,theme:e})=>f({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},t.indicatorColor==="primary"&&{backgroundColor:(e.vars||e).palette.primary.main},t.indicatorColor==="secondary"&&{backgroundColor:(e.vars||e).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})),Ye=j(Re)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Nt={},Ke=d.forwardRef(function(e,r){const s=ht({props:e,name:"MuiTabs"}),n=ae(),c=Ft(),{"aria-label":h,"aria-labelledby":b,action:u,centered:v=!1,children:g,className:B,component:m="div",allowScrollButtonsMobile:C=!1,indicatorColor:M="primary",onChange:T,orientation:y="horizontal",ScrollButtonComponent:H=Fe,scrollButtons:R="auto",selectionFollowsFocus:st,slots:_={},slotProps:Y={},TabIndicatorProps:D={},TabScrollButtonProps:L={},textColor:J="primary",value:X,variant:P="standard",visibleScrollbar:at=!1}=s,Ot=Q(s,je),I=P==="scrollable",w=y==="vertical",K=w?"scrollTop":"scrollLeft",Z=w?"top":"left",tt=w?"bottom":"right",ct=w?"clientHeight":"clientWidth",V=w?"height":"width",k=f({},s,{component:m,allowScrollButtonsMobile:C,indicatorColor:M,orientation:y,vertical:w,scrollButtons:R,textColor:J,variant:P,visibleScrollbar:at,fixed:!I,hideScrollbar:I&&!at,scrollableX:I&&!w,scrollableY:I&&w,centered:v&&!I,scrollButtonsHideMobile:!C}),z=He(k),jt=rt({elementType:_.StartScrollButtonIcon,externalSlotProps:Y.startScrollButtonIcon,ownerState:k}),Ht=rt({elementType:_.EndScrollButtonIcon,externalSlotProps:Y.endScrollButtonIcon,ownerState:k}),[St,_t]=d.useState(!1),[F,vt]=d.useState(Nt),[xt,Dt]=d.useState(!1),[gt,Xt]=d.useState(!1),[Bt,Ut]=d.useState(!1),[Ct,Yt]=d.useState({overflow:"hidden",scrollbarWidth:0}),yt=new Map,N=d.useRef(null),A=d.useRef(null),wt=()=>{const o=N.current;let l;if(o){const a=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:de(o,c?"rtl":"ltr"),scrollWidth:o.scrollWidth,top:a.top,bottom:a.bottom,left:a.left,right:a.right}}let i;if(o&&X!==!1){const a=A.current.children;if(a.length>0){const p=a[yt.get(X)];i=p?p.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:i}},q=bt(()=>{const{tabsMeta:o,tabMeta:l}=wt();let i=0,a;if(w)a="top",l&&o&&(i=l.top-o.top+o.scrollTop);else if(a=c?"right":"left",l&&o){const x=c?o.scrollLeftNormalized+o.clientWidth-o.scrollWidth:o.scrollLeft;i=(c?-1:1)*(l[a]-o[a]+x)}const p={[a]:i,[V]:l?l[V]:0};if(isNaN(F[a])||isNaN(F[V]))vt(p);else{const x=Math.abs(F[a]-p[a]),E=Math.abs(F[V]-p[V]);(x>=1||E>=1)&&vt(p)}}),it=(o,{animation:l=!0}={})=>{l?Ie(K,N.current,o,{duration:n.transitions.duration.standard}):N.current[K]=o},Tt=o=>{let l=N.current[K];w?l+=o:(l+=o*(c?-1:1),l*=c&&At()==="reverse"?-1:1),it(l)},It=()=>{const o=N.current[ct];let l=0;const i=Array.from(A.current.children);for(let a=0;a<i.length;a+=1){const p=i[a];if(l+p[ct]>o){a===0&&(l=o);break}l+=p[ct]}return l},Kt=()=>{Tt(-1*It())},Vt=()=>{Tt(It())},qt=d.useCallback(o=>{Yt({overflow:null,scrollbarWidth:o})},[]),Gt=()=>{const o={};o.scrollbarSizeListener=I?S.jsx(Ye,{onChange:qt,className:$(z.scrollableX,z.hideScrollbar)}):null;const i=I&&(R==="auto"&&(xt||gt)||R===!0);return o.scrollButtonStart=i?S.jsx(H,f({slots:{StartScrollButtonIcon:_.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:jt},orientation:y,direction:c?"right":"left",onClick:Kt,disabled:!xt},L,{className:$(z.scrollButtons,L.className)})):null,o.scrollButtonEnd=i?S.jsx(H,f({slots:{EndScrollButtonIcon:_.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Ht},orientation:y,direction:c?"left":"right",onClick:Vt,disabled:!gt},L,{className:$(z.scrollButtons,L.className)})):null,o},Et=bt(o=>{const{tabsMeta:l,tabMeta:i}=wt();if(!(!i||!l)){if(i[Z]<l[Z]){const a=l[K]+(i[Z]-l[Z]);it(a,{animation:o})}else if(i[tt]>l[tt]){const a=l[K]+(i[tt]-l[tt]);it(a,{animation:o})}}}),et=bt(()=>{I&&R!==!1&&Ut(!Bt)});d.useEffect(()=>{const o=kt(()=>{N.current&&q()});let l;const i=x=>{x.forEach(E=>{E.removedNodes.forEach(G=>{var W;(W=l)==null||W.unobserve(G)}),E.addedNodes.forEach(G=>{var W;(W=l)==null||W.observe(G)})}),o(),et()},a=$t(N.current);a.addEventListener("resize",o);let p;return typeof ResizeObserver<"u"&&(l=new ResizeObserver(o),Array.from(A.current.children).forEach(x=>{l.observe(x)})),typeof MutationObserver<"u"&&(p=new MutationObserver(i),p.observe(A.current,{childList:!0})),()=>{var x,E;o.clear(),a.removeEventListener("resize",o),(x=p)==null||x.disconnect(),(E=l)==null||E.disconnect()}},[q,et]),d.useEffect(()=>{const o=Array.from(A.current.children),l=o.length;if(typeof IntersectionObserver<"u"&&l>0&&I&&R!==!1){const i=o[0],a=o[l-1],p={root:N.current,threshold:.99},x=ut=>{Dt(!ut[0].isIntersecting)},E=new IntersectionObserver(x,p);E.observe(i);const G=ut=>{Xt(!ut[0].isIntersecting)},W=new IntersectionObserver(G,p);return W.observe(a),()=>{E.disconnect(),W.disconnect()}}},[I,R,Bt,g==null?void 0:g.length]),d.useEffect(()=>{_t(!0)},[]),d.useEffect(()=>{q()}),d.useEffect(()=>{Et(Nt!==F)},[Et,F]),d.useImperativeHandle(u,()=>({updateIndicator:q,updateScrollButtons:et}),[q,et]);const Mt=S.jsx(Ue,f({},D,{className:$(z.indicator,D.className),ownerState:k,style:f({},F,D.style)}));let ot=0;const Qt=d.Children.map(g,o=>{if(!d.isValidElement(o))return null;const l=o.props.value===void 0?ot:o.props.value;yt.set(l,ot);const i=l===X;return ot+=1,d.cloneElement(o,f({fullWidth:P==="fullWidth",indicator:i&&!St&&Mt,selected:i,selectionFollowsFocus:st,onChange:T,textColor:J,value:l},ot===1&&X===!1&&!o.props.tabIndex?{tabIndex:0}:{}))}),Jt=o=>{const l=A.current,i=ce(l).activeElement;if(i.getAttribute("role")!=="tab")return;let p=y==="horizontal"?"ArrowLeft":"ArrowUp",x=y==="horizontal"?"ArrowRight":"ArrowDown";switch(y==="horizontal"&&c&&(p="ArrowRight",x="ArrowLeft"),o.key){case p:o.preventDefault(),lt(l,i,Pt);break;case x:o.preventDefault(),lt(l,i,Rt);break;case"Home":o.preventDefault(),lt(l,null,Rt);break;case"End":o.preventDefault(),lt(l,null,Pt);break}},dt=Gt();return S.jsxs(_e,f({className:$(z.root,B),ownerState:k,ref:r,as:m},Ot,{children:[dt.scrollButtonStart,dt.scrollbarSizeListener,S.jsxs(De,{className:z.scroller,ownerState:k,style:{overflow:Ct.overflow,[w?`margin${c?"Left":"Right"}`:"marginBottom"]:at?void 0:-Ct.scrollbarWidth},ref:N,children:[S.jsx(Xe,{"aria-label":h,"aria-labelledby":b,"aria-orientation":y==="vertical"?"vertical":null,className:z.flexContainer,ownerState:k,onKeyDown:Jt,ref:A,role:"tablist",children:Qt}),St&&Mt]}),dt.scrollButtonEnd]}))}),Ze=Ke;export{Qe as B,Ze as T,Je as a};
