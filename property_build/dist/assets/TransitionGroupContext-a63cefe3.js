import{r as a,aX as c,aY as y,aZ as m,a_ as l,a$ as d,R as h}from"./index-bd0a6da1.js";function g(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const v=typeof window<"u"?a.useLayoutEffect:a.useEffect,E=v;function x(t){const e=a.useRef(t);return E(()=>{e.current=t}),a.useCallback((...n)=>(0,e.current)(...n),[])}function k(...t){return a.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{g(n,e)})},t)}var C=y(function(t,e){var n=t.styles,u=c([n],void 0,a.useContext(m)),f=a.useRef();return l(function(){var s=e.key+"-global",r=new e.sheet.constructor({key:s,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),i=!1,o=document.querySelector('style[data-emotion="'+s+" "+u.name+'"]');return e.sheet.tags.length&&(r.before=e.sheet.tags[0]),o!==null&&(i=!0,o.setAttribute("data-emotion",s),r.hydrate([o])),f.current=[r,i],function(){r.flush()}},[e]),l(function(){var s=f.current,r=s[0],i=s[1];if(i){s[1]=!1;return}if(u.next!==void 0&&d(e,u.next,!0),r.tags.length){var o=r.tags[r.tags.length-1].nextElementSibling;r.before=o,r.flush()}e.insert("",u,r,!1)},[e,u.name]),null});function b(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return c(e)}var R=function(){var e=b.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const S=h.createContext(null);export{C as G,S as T,k as a,E as b,R as k,g as s,x as u};
