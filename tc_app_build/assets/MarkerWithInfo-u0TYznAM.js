import{g as q,d as w,r as a,b as j}from"./router-5yjtezO8.js";import{j as M}from"./index-WOneArS1.js";var X=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,o,s;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(o=r;o--!==0;)if(!t(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(s=Object.keys(e),r=s.length,r!==Object.keys(n).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=r;o--!==0;){var u=s[o];if(!t(e[u],n[u]))return!1}return!0}return e!==e&&n!==n};const Y=q(X);function Q(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ee(t){var e=Q(t,"string");return typeof e=="symbol"?e:String(e)}function I(){return I=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},I.apply(this,arguments)}function _(t,e){if(t==null)return{};var n={},r=Object.keys(t),o,s;for(s=0;s<r.length;s++)o=r[s],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}const S={NOT_LOADED:"NOT_LOADED",LOADING:"LOADING",LOADED:"LOADED",FAILED:"FAILED",AUTH_FAILURE:"AUTH_FAILURE"},te="https://maps.googleapis.com/maps/api/js";class D{static async load(e,n){var r;const o=e.libraries?e.libraries.split(","):[],s=this.serializeParams(e);this.listeners.push(n),(r=window.google)!=null&&(r=r.maps)!=null&&r.importLibrary?(this.serializedApiParams||(this.loadingStatus=S.LOADED),this.notifyLoadingStatusListeners()):(this.serializedApiParams=s,this.initImportLibrary(e)),this.serializedApiParams&&this.serializedApiParams!==s&&console.warn("[google-maps-api-loader] The maps API has already been loaded with different parameters and will not be loaded again. Refresh the page for new values to have effect.");const u=["maps",...o];await Promise.all(u.map(i=>google.maps.importLibrary(i)))}static serializeParams(e){return[e.v,e.key,e.language,e.region,e.authReferrerPolicy,e.solutionChannel].join("/")}static initImportLibrary(e){if(window.google||(window.google={}),window.google.maps||(window.google.maps={}),window.google.maps.importLibrary){console.error("[google-maps-api-loader-internal]: initImportLibrary must only be called once");return}let n=null;const r=()=>n||(n=new Promise((o,s)=>{var u;const i=document.createElement("script"),m=new URLSearchParams;for(const[f,c]of Object.entries(e)){const v=f.replace(/[A-Z]/g,g=>"_"+g[0].toLowerCase());m.set(v,c)}m.set("loading","async"),m.set("callback","__googleMapsCallback__"),i.async=!0,i.src=te+"?"+m.toString(),i.nonce=((u=document.querySelector("script[nonce]"))==null?void 0:u.nonce)||"",i.onerror=()=>{this.loadingStatus=S.FAILED,this.notifyLoadingStatusListeners(),s(new Error("The Google Maps JavaScript API could not load."))},window.__googleMapsCallback__=()=>{this.loadingStatus=S.LOADED,this.notifyLoadingStatusListeners(),o()},window.gm_authFailure=()=>{this.loadingStatus=S.AUTH_FAILURE,this.notifyLoadingStatusListeners()},this.loadingStatus=S.LOADING,this.notifyLoadingStatusListeners(),document.head.append(i)}),n);google.maps.importLibrary=o=>r().then(()=>google.maps.importLibrary(o))}static notifyLoadingStatusListeners(){for(const e of this.listeners)e(this.loadingStatus)}}D.loadingStatus=S.NOT_LOADED;D.serializedApiParams=void 0;D.listeners=[];const ne=["onLoad","apiKey","version","libraries"],re=["children"],oe="GMP_visgl_rgmlibrary_v1_default",N=w.createContext(null);function se(){const[t,e]=a.useState({});return{mapInstances:t,addMapInstance:(s,u="default")=>{e(i=>I({},i,{[u]:s}))},removeMapInstance:(s="default")=>{e(u=>_(u,[s].map(ee)))},clearMapInstances:()=>{e({})}}}function ae(t){const{onLoad:e,apiKey:n,version:r,libraries:o=[]}=t,s=_(t,ne),[u,i]=a.useState(D.loadingStatus),[m,f]=a.useReducer((l,d)=>I({},l,{[d.name]:d.value}),{}),c=a.useMemo(()=>o==null?void 0:o.join(","),[o]),v=a.useMemo(()=>JSON.stringify(I({apiKey:n,version:r},s)),[n,r,s]),g=a.useCallback(async l=>{var d;if(m[l])return m[l];if(!((d=google)!=null&&(d=d.maps)!=null&&d.importLibrary))throw new Error("[api-provider-internal] importLibrary was called before google.maps.importLibrary was defined.");const p=await window.google.maps.importLibrary(l);return f({name:l,value:p}),p},[m]);return a.useEffect(()=>{(async()=>{try{const l=I({key:n},s);r&&(l.v=r),(c==null?void 0:c.length)>0&&(l.libraries=c),l.solutionChannel===void 0?l.solutionChannel=oe:l.solutionChannel===""&&delete l.solutionChannel,await D.load(l,d=>i(d));for(const d of["core","maps",...o])await g(d);e&&e()}catch(l){console.error("<ApiProvider> failed to load the Google Maps JavaScript API",l)}})()},[n,c,v]),{status:u,loadedLibraries:m,importLibrary:g}}const He=t=>{const{children:e}=t,n=_(t,re),{mapInstances:r,addMapInstance:o,removeMapInstance:s,clearMapInstances:u}=se(),{status:i,loadedLibraries:m,importLibrary:f}=ae(n),c=a.useMemo(()=>({mapInstances:r,addMapInstance:o,removeMapInstance:s,clearMapInstances:u,status:i,loadedLibraries:m,importLibrary:f}),[r,o,s,u,i,m,f]);return w.createElement(N.Provider,{value:c},e)};function ie(t,e){for(const n of de){const r=e[n],o=Z[n];a.useEffect(()=>{if(!t||!r)return;const s=google.maps.event.addListener(t,o,u=>{r(le(o,t,u))});return()=>s.remove()},[t,o,r])}}function le(t,e,n){const r={type:t,map:e,detail:{},stoppable:!1,stop:()=>{}};if(ue.includes(t)){const s=r,u=e.getCenter(),i=e.getZoom(),m=e.getHeading()||0,f=e.getTilt()||0,c=e.getBounds();return(!u||!c||!Number.isFinite(i))&&console.warn("[createEvent] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),s.detail={center:(u==null?void 0:u.toJSON())||{lat:0,lng:0},zoom:i||0,heading:m,tilt:f,bounds:(c==null?void 0:c.toJSON())||{north:90,east:180,south:-90,west:-180}},s}else if(ce.includes(t)){var o;if(!n)throw new Error("[createEvent] mouse events must provide a srcEvent");const s=r;return s.domEvent=n.domEvent,s.stoppable=!0,s.stop=()=>n.stop(),s.detail={latLng:((o=n.latLng)==null?void 0:o.toJSON())||null,placeId:n.placeId},s}return r}const Z={onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onContextmenu:"contextmenu",onDblclick:"dblclick",onDrag:"drag",onDragend:"dragend",onDragstart:"dragstart",onHeadingChanged:"heading_changed",onIdle:"idle",onIsFractionalZoomEnabledChanged:"isfractionalzoomenabled_changed",onMapCapabilitiesChanged:"mapcapabilities_changed",onMapTypeIdChanged:"maptypeid_changed",onMousemove:"mousemove",onMouseout:"mouseout",onMouseover:"mouseover",onProjectionChanged:"projection_changed",onRenderingTypeChanged:"renderingtype_changed",onTilesLoaded:"tilesloaded",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed",onCameraChanged:"bounds_changed"},ue=["bounds_changed","center_changed","heading_changed","tilt_changed","zoom_changed"],ce=["click","contextmenu","dblclick","mousemove","mouseout","mouseover"],de=Object.keys(Z);function W(t,e){const n=a.useRef(void 0);(!n.current||!Y(e,n.current))&&(n.current=e),a.useEffect(t,n.current)}const fe=new Set(["backgroundColor","clickableIcons","controlSize","disableDefaultUI","disableDoubleClickZoom","draggable","draggableCursor","draggingCursor","fullscreenControl","fullscreenControlOptions","gestureHandling","isFractionalZoomEnabled","keyboardShortcuts","mapTypeControl","mapTypeControlOptions","mapTypeId","maxZoom","minZoom","noClear","panControl","panControlOptions","restriction","rotateControl","rotateControlOptions","scaleControl","scaleControlOptions","scrollwheel","streetView","streetViewControl","streetViewControlOptions","styles","zoomControl","zoomControlOptions"]);function ge(t,e){const n={},r=Object.keys(e);for(const o of r)fe.has(o)&&(n[o]=e[o]);W(()=>{t&&t.setOptions(n)},[n])}function J(){var t;return((t=a.useContext(N))==null?void 0:t.status)||S.NOT_LOADED}function me(t,e){const{viewport:n,viewState:r}=e,o=!!n;return a.useLayoutEffect(()=>{if(!t||!r)return;const{latitude:s,longitude:u,bearing:i,pitch:m,zoom:f}=r;t.moveCamera({center:{lat:s,lng:u},heading:i,tilt:m,zoom:f+1})},[t,r]),o}function pe(t){return!t||typeof t!="object"||!("lat"in t&&"lng"in t)?!1:Number.isFinite(t.lat)&&Number.isFinite(t.lng)}function he(t,e){if(!t||!e)return!1;const n=z(t),r=z(e);return!(n.lat!==r.lat||n.lng!==r.lng)}function z(t){return pe(t)?t:t.toJSON()}function Ce(t,e,n){const r=n.center?z(n.center):null;let o=null,s=null;r&&Number.isFinite(r.lat)&&Number.isFinite(r.lng)&&(o=r.lat,s=r.lng);const u=Number.isFinite(n.zoom)?n.zoom:null,i=Number.isFinite(n.heading)?n.heading:null,m=Number.isFinite(n.tilt)?n.tilt:null;a.useLayoutEffect(()=>{if(!t)return;const f={};let c=!1;o!==null&&s!==null&&(e.current.center.lat!==o||e.current.center.lng!==s)&&(f.center={lat:o,lng:s},c=!0),u!==null&&e.current.zoom!==u&&(f.zoom=u,c=!0),i!==null&&e.current.heading!==i&&(f.heading=i,c=!0),m!==null&&e.current.tilt!==m&&(f.tilt=m,c=!0),c&&t.moveCamera(f)})}const ve=()=>{const t={position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:999,display:"flex",flexFlow:"column nowrap",textAlign:"center",justifyContent:"center",fontSize:".8rem",color:"rgba(0,0,0,0.6)",background:"#dddddd",padding:"1rem 1.5rem"};return w.createElement("div",{style:t},w.createElement("h2",null,"Error: AuthFailure"),w.createElement("p",null,"A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ",w.createElement("code",null,"APIProvider.apiKey")," prop is correct. Check the error-message in the console for further details."))};function be(){const[t,e]=a.useState(null),n=a.useCallback(r=>e(r),[e]);return[t,n]}function $(){return J()===S.LOADED}function ye(){const[,t]=a.useReducer(e=>e+1,0);return t}function we(t,e){const n=t.getCenter(),r=t.getZoom(),o=t.getHeading()||0,s=t.getTilt()||0,u=t.getBounds();(!n||!u||!Number.isFinite(r))&&console.warn("[useTrackedCameraState] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),Object.assign(e.current,{center:(n==null?void 0:n.toJSON())||{lat:0,lng:0},zoom:r||0,heading:o,tilt:s})}function Ee(t){const e=ye(),n=a.useRef({center:{lat:0,lng:0},heading:0,tilt:0,zoom:0});return a.useEffect(()=>{if(!t)return;const r=google.maps.event.addListener(t,"bounds_changed",()=>{we(t,n),e()});return()=>r.remove()},[t,e]),n}const Le=["id","defaultBounds","defaultCenter","defaultZoom","defaultHeading","defaultTilt","reuseMaps"],Oe=["padding"];class R{static has(e){return this.entries[e]&&this.entries[e].length>0}static pop(e){return this.entries[e]&&this.entries[e].pop()||null}static push(e,n){this.entries[e]||(this.entries[e]=[]),this.entries[e].push(n)}}R.entries={};function xe(t,e){const n=$(),[r,o]=a.useState(null),[s,u]=be(),i=Ee(r),{id:m,defaultBounds:f,defaultCenter:c,defaultZoom:v,defaultHeading:g,defaultTilt:l,reuseMaps:d}=t,p=_(t,Le),y=t.zoom!==void 0||t.defaultZoom!==void 0,b=t.center!==void 0||t.defaultCenter!==void 0;!f&&(!y||!b)&&console.warn("<Map> component is missing configuration. You have to provide zoom and center (via the `zoom`/`defaultZoom` and `center`/`defaultCenter` props) or specify the region to show using `defaultBounds`. See https://visgl.github.io/react-google-maps/docs/api-reference/components/map#required"),!p.center&&c&&(p.center=c),!p.zoom&&Number.isFinite(v)&&(p.zoom=v),!p.heading&&Number.isFinite(g)&&(p.heading=g),!p.tilt&&Number.isFinite(l)&&(p.tilt=l);for(const C of Object.keys(p))p[C]===void 0&&delete p[C];const h=a.useRef();return a.useEffect(()=>{if(!s||!n)return;const{addMapInstance:C,removeMapInstance:L}=e,O=t.mapId,k=O||"default";let x,E;if(d&&R.has(k)?(E=R.pop(k),x=E.getDiv(),s.appendChild(x),E.setOptions(p),setTimeout(()=>E.setCenter(E.getCenter()),0)):(x=document.createElement("div"),x.style.height="100%",s.appendChild(x),E=new google.maps.Map(x,p)),o(E),C(E,m),f){const{padding:F}=f,T=_(f,Oe);E.fitBounds(T,F)}else(!y||!b)&&E.fitBounds({east:180,west:-180,south:-90,north:90});if(h.current){const{mapId:F,cameraState:T}=h.current;F!==O&&E.setOptions(T)}return()=>{h.current={mapId:O,cameraState:i.current},x.remove(),d?R.push(k,E):google.maps.event.clearInstanceListeners(E),o(null),L(m)}},[s,n,m,t.mapId]),[r,u,i]}const U=w.createContext(null),ke=t=>{const{children:e,id:n,className:r,style:o}=t,s=a.useContext(N),u=J();if(!s)throw new Error("<Map> can only be used inside an <ApiProvider> component.");const[i,m,f]=xe(t,s);Ce(i,f,t),ie(i,t),ge(i,t);const c=me(i,t),v=!!t.controlled;a.useEffect(()=>{if(i)return c&&i.setOptions({disableDefaultUI:!0}),(c||v)&&i.setOptions({gestureHandling:"none",keyboardShortcuts:!1}),()=>{i.setOptions({gestureHandling:t.gestureHandling,keyboardShortcuts:t.keyboardShortcuts})}},[i,c,v,t.gestureHandling,t.keyboardShortcuts]);const g=t.center?z(t.center):null;let l=null,d=null;g&&Number.isFinite(g.lat)&&Number.isFinite(g.lng)&&(l=g.lat,d=g.lng);const p=a.useMemo(()=>{var h,C,L,O,k;return{center:{lat:(h=l)!=null?h:0,lng:(C=d)!=null?C:0},zoom:(L=t.zoom)!=null?L:0,heading:(O=t.heading)!=null?O:0,tilt:(k=t.tilt)!=null?k:0}},[l,d,t.zoom,t.heading,t.tilt]);a.useLayoutEffect(()=>{if(!i||!v)return;i.moveCamera(p);const h=i.addListener("bounds_changed",()=>{i.moveCamera(p)});return()=>h.remove()},[i,v,p]);const y=a.useMemo(()=>I({width:"100%",height:"100%",position:"relative",zIndex:c?-1:0},o),[o,c]),b=a.useMemo(()=>({map:i}),[i]);return u===S.AUTH_FAILURE?w.createElement("div",{style:I({position:"relative"},r?{}:y),className:r},w.createElement(ve,null)):w.createElement("div",I({ref:m,"data-testid":"map",style:r?void 0:y,className:r},n?{id:n}:{}),i?w.createElement(U.Provider,{value:b},e):null)};ke.deckGLViewProps=!0;const B=new Set;function Me(...t){const e=JSON.stringify(t);B.has(e)||(B.add(e),console.error(...t))}const H=(t=null)=>{const e=a.useContext(N),{map:n}=a.useContext(U)||{};if(e===null)return Me("useMap(): failed to retrieve APIProviderContext. Make sure that the <APIProvider> component exists and that the component you are calling `useMap()` from is a sibling of the <APIProvider>."),null;const{mapInstances:r}=e;return t!==null?r[t]||null:n||r.default||null};function V(t){const e=$(),n=a.useContext(N);return a.useEffect(()=>{!e||!n||n.importLibrary(t)},[e,n,t]),(n==null?void 0:n.loadedLibraries[t])||null}function K(t,e,n){if(e!=null&&typeof e!="object")throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");const r=t.style;if(n==null){if(e==null)return;for(const o in e)e.hasOwnProperty(o)&&G(r,o,e[o]);return}for(const o in n)n.hasOwnProperty(o)&&(e==null||!e.hasOwnProperty(o))&&(o.indexOf("--")===0?r.setProperty(o,""):o==="float"?r.cssFloat="":r[o]="");if(e!=null)for(const o in e){const s=e[o];e.hasOwnProperty(o)&&n[o]!==s&&G(r,o,s)}}function G(t,e,n){const r=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,n):typeof n=="number"&&n!==0&&!Ie(e)?t[e]=n+"px":e==="float"?t.cssFloat=n:t[e]=(""+n).trim()}const Se=new Set(["animationIterationCount","aspectRatio","borderImageOutset","borderImageSlice","borderImageWidth","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","columns","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridArea","gridRow","gridRowEnd","gridRowSpan","gridRowStart","gridColumn","gridColumnEnd","gridColumnSpan","gridColumnStart","fontWeight","lineClamp","lineHeight","opacity","order","orphans","scale","tabSize","widows","zIndex","zoom","fillOpacity","floodOpacity","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth"]);function Ie(t){return Se.has(t)}function A(t,e,n){a.useEffect(()=>{if(!t||!e||!n)return;const r=google.maps.event.addListener(t,e,n);return()=>r.remove()},[t,e,n])}function P(t,e,n){a.useEffect(()=>{t&&(t[e]=n)},[t,e,n])}const _e=w.createContext(null);function Ae(t){const[e,n]=a.useState(null),[r,o]=a.useState(null),s=a.useRef(null),u=H(),i=V("marker"),{children:m,className:f,style:c,onClick:v,onDrag:g,onDragStart:l,onDragEnd:d,collisionBehavior:p,clickable:y,draggable:b,position:h,title:C,zIndex:L}=t,O=a.Children.count(m);return a.useEffect(()=>{if(!u||!i)return;const k=new i.AdvancedMarkerElement;k.map=u,n(k);let x=null;return O>0&&(x=document.createElement("div"),k.content=x,o(x)),()=>{var E;k.map=null,(E=x)==null||E.remove(),n(null),o(null)}},[u,i,O]),a.useEffect(()=>{!e||!e.content||(e.content.className=f||"")},[e,f]),P(r,"className",f!=null?f:""),a.useEffect(()=>{r&&(K(r,c||null,s.current),s.current=c||null)},[r,f,c]),P(e,"position",h),P(e,"title",C!=null?C:""),P(e,"zIndex",L),P(e,"collisionBehavior",p),a.useEffect(()=>{e&&(b!==void 0?e.gmpDraggable=b:g||l||d?e.gmpDraggable=!0:e.gmpDraggable=!1)},[e,b,g,d,l]),a.useEffect(()=>{e&&(y!==void 0?e.gmpClickable=y:v?e.gmpClickable=!0:e.gmpClickable=!1)},[e,y,v]),A(e,"click",v),A(e,"drag",g),A(e,"dragstart",l),A(e,"dragend",d),[e,r]}a.forwardRef((t,e)=>{const{children:n}=t,[r,o]=Ae(t),s=a.useMemo(()=>r?{marker:r}:null,[r]);return a.useImperativeHandle(e,()=>r,[r]),o?w.createElement(_e.Provider,{value:s},j.createPortal(n,o)):null});function Pe(){const[t,e]=a.useState(null);return[a.useCallback(r=>{e(r)},[]),t]}const De=["children","headerContent","style","className","pixelOffset","anchor","shouldFocus","onClose","onCloseClick"],Ne=t=>{const{children:e,headerContent:n,style:r,className:o,pixelOffset:s,anchor:u,shouldFocus:i,onClose:m,onCloseClick:f}=t,c=_(t,De),v=V("maps"),[g,l]=a.useState(null),d=a.useRef(null),p=a.useRef(null);a.useEffect(()=>{if(!v)return;d.current=document.createElement("div"),p.current=document.createElement("div");const h=c;s&&(h.pixelOffset=new google.maps.Size(s[0],s[1])),n&&(h.headerContent=typeof n=="string"?n:p.current);const C=new google.maps.InfoWindow(c);return C.setContent(d.current),l(C),()=>{var L,O;C.setContent(null),(L=d.current)==null||L.remove(),(O=p.current)==null||O.remove(),d.current=null,p.current=null,l(null)}},[v]);const y=a.useRef(null);a.useEffect(()=>{!g||!d.current||(K(d.current,r||null,y.current),y.current=r||null,o!==d.current.className&&(d.current.className=o||""))},[g,o,r]),W(()=>{if(!g)return;const h=c;s?h.pixelOffset=new google.maps.Size(s[0],s[1]):h.pixelOffset=null,n?h.headerContent=typeof n=="string"?n:p.current:h.headerContent=null,g.setOptions(c)},[c,s,n]),A(g,"close",m),A(g,"closeclick",f);const b=H();return a.useEffect(()=>{if(!b||!g||u===null)return;const h=!!u,C={map:b};return u&&(C.anchor=u),i!==void 0&&(C.shouldFocus=i),g.open(C),()=>{h&&g.set("anchor",null),g.close()}},[g,u,b,i]),w.createElement(w.Fragment,null,d.current&&j.createPortal(e,d.current),p.current!==null&&j.createPortal(n,p.current))},Re=["onClick","onDrag","onDragStart","onDragEnd","onMouseOver","onMouseOut"];function ze(t){const[e,n]=a.useState(null),r=H(),{onClick:o,onDrag:s,onDragStart:u,onDragEnd:i,onMouseOver:m,onMouseOut:f}=t,c=_(t,Re),{position:v,draggable:g}=c;return a.useEffect(()=>{if(!r){r===void 0&&console.error("<Marker> has to be inside a Map component.");return}const l=new google.maps.Marker(c);return l.setMap(r),n(l),()=>{l.setMap(null),n(null)}},[r]),a.useEffect(()=>{if(!e)return;const l=e,d=google.maps.event;return o&&d.addListener(l,"click",o),s&&d.addListener(l,"drag",s),u&&d.addListener(l,"dragstart",u),i&&d.addListener(l,"dragend",i),m&&d.addListener(l,"mouseover",m),f&&d.addListener(l,"mouseout",f),e.setDraggable(!!g),()=>{d.clearInstanceListeners(l)}},[e,g,o,s,u,i,m,f]),a.useEffect(()=>{e&&c&&e.setOptions(c)},[e,c]),a.useEffect(()=>{g||!v||!e||e.setPosition(v)},[g,v,e]),e}const Fe=a.forwardRef((t,e)=>{const n=ze(t);return a.useImperativeHandle(e,()=>n,[n]),w.createElement(w.Fragment,null)});function Te(t){var p;const{onClick:e,onDrag:n,onDragStart:r,onDragEnd:o,onMouseOver:s,onMouseOut:u,onRadiusChanged:i,onCenterChanged:m,radius:f,center:c,...v}=t,g=a.useRef({});Object.assign(g.current,{onClick:e,onDrag:n,onDragStart:r,onDragEnd:o,onMouseOver:s,onMouseOut:u,onRadiusChanged:i,onCenterChanged:m});const l=a.useRef(new google.maps.Circle).current;l.setOptions(v),a.useEffect(()=>{c&&(he(c,l.getCenter())||l.setCenter(c))},[c]),a.useEffect(()=>{f!=null&&f!==l.getRadius()&&l.setRadius(f)},[f]);const d=(p=a.useContext(U))==null?void 0:p.map;return a.useEffect(()=>{if(!d){d===void 0&&console.error("<Circle> has to be inside a Map component.");return}return l.setMap(d),()=>{l.setMap(null)}},[d]),a.useEffect(()=>{if(!l)return;const y=google.maps.event;return[["click","onClick"],["drag","onDrag"],["dragstart","onDragStart"],["dragend","onDragEnd"],["mouseover","onMouseOver"],["mouseout","onMouseOut"]].forEach(([b,h])=>{y.addListener(l,b,C=>{const L=g.current[h];L&&L(C)})}),y.addListener(l,"radius_changed",()=>{var h,C;const b=l.getRadius();(C=(h=g.current).onRadiusChanged)==null||C.call(h,b)}),y.addListener(l,"center_changed",()=>{var h,C;const b=l.getCenter();(C=(h=g.current).onCenterChanged)==null||C.call(h,b)}),()=>{y.clearInstanceListeners(l)}},[l]),l}const Be=a.forwardRef((t,e)=>{const n=Te(t);return a.useImperativeHandle(e,()=>n),null}),Ge=({lat:t,lng:e,popOver:n,title:r,subTitle:o,name:s})=>{const[u,i]=a.useState(!0),[m,f]=Pe();return M.jsxs(M.Fragment,{children:[M.jsx(Fe,{onClick:()=>i(!0),position:{lat:t!=null?t:28,lng:e!=null?e:-82},title:n!=null?n:"This is a marker",ref:m,icon:{url:s=="JSK"?"/assets/marker2.svg":"/assets/marker4.svg",scaledSize:{width:30,height:30}}}),u&&M.jsxs(Ne,{anchor:f,headerDisabled:!0,children:[M.jsxs("div",{className:"flex justify-between",children:[M.jsx("h1",{className:"text-xs font-bold",children:s}),M.jsx("button",{onClick:()=>i(!1),className:"text-xl font-bold -mt-2",children:"×"})]}),M.jsxs("div",{className:"bg-green-200 border border-gray-300 rounded-lg shadow-md p-2 text-center text-black",children:[M.jsx("h1",{className:"text-sm font-bold",children:r!=null?r:"Title"}),M.jsx("p",{className:"font-semibold text-xs",children:o!=null?o:"Subtitle"})]})]})]})};export{He as A,Be as C,ke as M,Ge as a};
