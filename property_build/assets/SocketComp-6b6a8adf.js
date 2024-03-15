import{E as v,r as b,F as Oe,G as he,A as be,b as ge,j as h,g as ye}from"./index-e53b351f.js";var m={},R={},C={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isEventSourceSupported=e.isReactNative=e.ReadyState=e.UNPARSABLE_JSON_OBJECT=e.DEFAULT_RECONNECT_INTERVAL_MS=e.DEFAULT_RECONNECT_LIMIT=e.SOCKET_IO_PING_CODE=e.SOCKET_IO_PATH=e.SOCKET_IO_PING_INTERVAL=e.DEFAULT_EVENT_SOURCE_OPTIONS=e.EMPTY_EVENT_HANDLERS=e.DEFAULT_OPTIONS=void 0;var t=1,r=1e3*t;e.DEFAULT_OPTIONS={},e.EMPTY_EVENT_HANDLERS={},e.DEFAULT_EVENT_SOURCE_OPTIONS={withCredentials:!1,events:e.EMPTY_EVENT_HANDLERS},e.SOCKET_IO_PING_INTERVAL=25*r,e.SOCKET_IO_PATH="/socket.io/?EIO=3&transport=websocket",e.SOCKET_IO_PING_CODE="2",e.DEFAULT_RECONNECT_LIMIT=20,e.DEFAULT_RECONNECT_INTERVAL_MS=5e3,e.UNPARSABLE_JSON_OBJECT={},function(a){a[a.UNINSTANTIATED=-1]="UNINSTANTIATED",a[a.CONNECTING=0]="CONNECTING",a[a.OPEN=1]="OPEN",a[a.CLOSING=2]="CLOSING",a[a.CLOSED=3]="CLOSED"}(e.ReadyState||(e.ReadyState={}));var n=function(){try{return"EventSource"in globalThis}catch{return!1}};e.isReactNative=typeof navigator<"u"&&navigator.product==="ReactNative",e.isEventSourceSupported=!e.isReactNative&&n()})(C);var B={},Q={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetWebSockets=e.sharedWebSockets=void 0,e.sharedWebSockets={};var t=function(r){if(r&&e.sharedWebSockets.hasOwnProperty(r))delete e.sharedWebSockets[r];else for(var n in e.sharedWebSockets)e.sharedWebSockets.hasOwnProperty(n)&&delete e.sharedWebSockets[n]};e.resetWebSockets=t})(Q);var Y={},y={};Object.defineProperty(y,"__esModule",{value:!0});y.setUpSocketIOPing=y.appendQueryParams=y.parseSocketIOUrl=void 0;var H=C,Ne=function(e){if(e){var t=/^https|wss/.test(e),r=e.replace(/^(https?|wss?)(:\/\/)?/,""),n=r.replace(/\/$/,""),a=t?"wss":"ws";return"".concat(a,"://").concat(n).concat(H.SOCKET_IO_PATH)}else if(e===""){var t=/^https/.test(window.location.protocol),a=t?"wss":"ws",c=window.location.port?":".concat(window.location.port):"";return"".concat(a,"://").concat(window.location.hostname).concat(c).concat(H.SOCKET_IO_PATH)}return e};y.parseSocketIOUrl=Ne;var Te=function(e,t){t===void 0&&(t={});var r=/\?([\w]+=[\w]+)/,n=r.test(e),a="".concat(Object.entries(t).reduce(function(c,u){var l=u[0],s=u[1];return c+"".concat(l,"=").concat(s,"&")},"").slice(0,-1));return"".concat(e).concat(n?"&":"?").concat(a)};y.appendQueryParams=Te;var Ce=function(e,t){t===void 0&&(t=H.SOCKET_IO_PING_INTERVAL);var r=function(){return e(H.SOCKET_IO_PING_CODE)};return window.setInterval(r,t)};y.setUpSocketIOPing=Ce;var w={},q={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetSubscribers=e.removeSubscriber=e.addSubscriber=e.hasSubscribers=e.getSubscribers=void 0;var t={},r=[],n=function(s){return(0,e.hasSubscribers)(s)?Array.from(t[s]):r};e.getSubscribers=n;var a=function(s){var o;return((o=t[s])===null||o===void 0?void 0:o.size)>0};e.hasSubscribers=a;var c=function(s,o){t[s]=t[s]||new Set,t[s].add(o)};e.addSubscriber=c;var u=function(s,o){t[s].delete(o)};e.removeSubscriber=u;var l=function(s){if(s&&t.hasOwnProperty(s))delete t[s];else for(var o in t)t.hasOwnProperty(o)&&delete t[o]};e.resetSubscribers=l})(q);Object.defineProperty(w,"__esModule",{value:!0});w.resetGlobalState=w.assertIsWebSocket=void 0;var ke=Q,me=q;function pe(e,t){if(!t&&!(e instanceof WebSocket))throw new Error("")}w.assertIsWebSocket=pe;function we(e){(0,me.resetSubscribers)(e),(0,ke.resetWebSockets)(e)}w.resetGlobalState=we;var J=v&&v.__assign||function(){return J=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},J.apply(this,arguments)};Object.defineProperty(Y,"__esModule",{value:!0});Y.attachListeners=void 0;var Ie=y,g=C,Pe=w,Me=function(e,t,r){e.onmessage=function(n){t.current.onMessage&&t.current.onMessage(n),!(typeof t.current.filter=="function"&&t.current.filter(n)!==!0)&&r(n)}},Ae=function(e,t,r,n){e.onopen=function(a){t.current.onOpen&&t.current.onOpen(a),n.current=0,r(g.ReadyState.OPEN)}},Le=function(e,t,r,n,a){if(g.isEventSourceSupported&&e instanceof EventSource)return function(){};(0,Pe.assertIsWebSocket)(e,t.current.skipAssert);var c;return e.onclose=function(u){var l;if(t.current.onClose&&t.current.onClose(u),r(g.ReadyState.CLOSED),t.current.shouldReconnect&&t.current.shouldReconnect(u)){var s=(l=t.current.reconnectAttempts)!==null&&l!==void 0?l:g.DEFAULT_RECONNECT_LIMIT;if(a.current<s){var o=typeof t.current.reconnectInterval=="function"?t.current.reconnectInterval(a.current):t.current.reconnectInterval;c=window.setTimeout(function(){a.current++,n()},o??g.DEFAULT_RECONNECT_INTERVAL_MS)}else t.current.onReconnectStop&&t.current.onReconnectStop(s)}},function(){return c&&window.clearTimeout(c)}},We=function(e,t,r,n,a){var c;return e.onerror=function(u){var l;if(t.current.onError&&t.current.onError(u),g.isEventSourceSupported&&e instanceof EventSource&&(t.current.onClose&&t.current.onClose(J(J({},u),{code:1006,reason:"An error occurred with the EventSource: ".concat(u),wasClean:!1})),r(g.ReadyState.CLOSED),e.close()),t.current.retryOnError)if(a.current<((l=t.current.reconnectAttempts)!==null&&l!==void 0?l:g.DEFAULT_RECONNECT_LIMIT)){var s=typeof t.current.reconnectInterval=="function"?t.current.reconnectInterval(a.current):t.current.reconnectInterval;c=window.setTimeout(function(){a.current++,n()},s??g.DEFAULT_RECONNECT_INTERVAL_MS)}else t.current.onReconnectStop&&t.current.onReconnectStop(t.current.reconnectAttempts)},function(){return c&&window.clearTimeout(c)}},je=function(e,t,r,n,a,c){var u=t.setLastMessage,l=t.setReadyState,s,o,i;return r.current.fromSocketIO&&(s=(0,Ie.setUpSocketIOPing)(c)),Me(e,r,u),Ae(e,r,l,a),o=Le(e,r,l,n,a),i=We(e,r,l,n,a),function(){l(g.ReadyState.CLOSING),o(),i(),e.close(),s&&clearInterval(s)}};Y.attachListeners=je;var z={},F=v&&v.__assign||function(){return F=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},F.apply(this,arguments)};Object.defineProperty(z,"__esModule",{value:!0});z.attachSharedListeners=void 0;var Re=Q,I=C,$=q,Ue=y,De=function(e,t){e.onmessage=function(r){(0,$.getSubscribers)(t).forEach(function(n){n.optionsRef.current.onMessage&&n.optionsRef.current.onMessage(r),!(typeof n.optionsRef.current.filter=="function"&&n.optionsRef.current.filter(r)!==!0)&&n.setLastMessage(r)})}},$e=function(e,t){e.onopen=function(r){(0,$.getSubscribers)(t).forEach(function(n){n.reconnectCount.current=0,n.optionsRef.current.onOpen&&n.optionsRef.current.onOpen(r),n.setReadyState(I.ReadyState.OPEN)})}},Ge=function(e,t){e instanceof WebSocket&&(e.onclose=function(r){(0,$.getSubscribers)(t).forEach(function(n){n.optionsRef.current.onClose&&n.optionsRef.current.onClose(r),n.setReadyState(I.ReadyState.CLOSED)}),delete Re.sharedWebSockets[t],(0,$.getSubscribers)(t).forEach(function(n){var a;if(n.optionsRef.current.shouldReconnect&&n.optionsRef.current.shouldReconnect(r)){var c=(a=n.optionsRef.current.reconnectAttempts)!==null&&a!==void 0?a:I.DEFAULT_RECONNECT_LIMIT;if(n.reconnectCount.current<c){var u=typeof n.optionsRef.current.reconnectInterval=="function"?n.optionsRef.current.reconnectInterval(n.reconnectCount.current):n.optionsRef.current.reconnectInterval;setTimeout(function(){n.reconnectCount.current++,n.reconnect.current()},u??I.DEFAULT_RECONNECT_INTERVAL_MS)}else n.optionsRef.current.onReconnectStop&&n.optionsRef.current.onReconnectStop(n.optionsRef.current.reconnectAttempts)}})})},He=function(e,t){e.onerror=function(r){(0,$.getSubscribers)(t).forEach(function(n){n.optionsRef.current.onError&&n.optionsRef.current.onError(r),I.isEventSourceSupported&&e instanceof EventSource&&(n.optionsRef.current.onClose&&n.optionsRef.current.onClose(F(F({},r),{code:1006,reason:"An error occurred with the EventSource: ".concat(r),wasClean:!1})),n.setReadyState(I.ReadyState.CLOSED))}),I.isEventSourceSupported&&e instanceof EventSource&&e.close()}},Je=function(e,t,r,n){var a;return r.current.fromSocketIO&&(a=(0,Ue.setUpSocketIOPing)(n)),De(e,t),Ge(e,t),$e(e,t),He(e,t),function(){a&&clearInterval(a)}};z.attachSharedListeners=Je;Object.defineProperty(B,"__esModule",{value:!0});B.createOrJoinSocket=void 0;var p=Q,D=C,Fe=Y,Ve=z,ne=q,Ke=function(e,t,r,n,a){return function(){if((0,ne.removeSubscriber)(e,t),!(0,ne.hasSubscribers)(e)){try{var c=p.sharedWebSockets[e];c instanceof WebSocket&&(c.onclose=function(u){r.current.onClose&&r.current.onClose(u),n(D.ReadyState.CLOSED)}),c.close()}catch{}a&&a(),delete p.sharedWebSockets[e]}}},Be=function(e,t,r,n,a,c,u,l){if(!D.isEventSourceSupported&&n.current.eventSourceOptions)throw D.isReactNative?new Error("EventSource is not supported in ReactNative"):new Error("EventSource is not supported");if(n.current.share){var s=null;p.sharedWebSockets[t]===void 0?(p.sharedWebSockets[t]=n.current.eventSourceOptions?new EventSource(t,n.current.eventSourceOptions):new WebSocket(t,n.current.protocols),e.current=p.sharedWebSockets[t],r(D.ReadyState.CONNECTING),s=(0,Ve.attachSharedListeners)(p.sharedWebSockets[t],t,n,l)):(e.current=p.sharedWebSockets[t],r(p.sharedWebSockets[t].readyState));var o={setLastMessage:a,setReadyState:r,optionsRef:n,reconnectCount:u,reconnect:c};return(0,ne.addSubscriber)(t,o),Ke(t,o,n,r,s)}else{if(e.current=n.current.eventSourceOptions?new EventSource(t,n.current.eventSourceOptions):new WebSocket(t,n.current.protocols),r(D.ReadyState.CONNECTING),!e.current)throw new Error("WebSocket failed to be created");return(0,Fe.attachListeners)(e.current,{setLastMessage:a,setReadyState:r},n,c.current,u,l)}};B.createOrJoinSocket=Be;var X={},Qe=v&&v.__awaiter||function(e,t,r,n){function a(c){return c instanceof r?c:new r(function(u){u(c)})}return new(r||(r=Promise))(function(c,u){function l(i){try{o(n.next(i))}catch(d){u(d)}}function s(i){try{o(n.throw(i))}catch(d){u(d)}}function o(i){i.done?c(i.value):a(i.value).then(l,s)}o((n=n.apply(e,t||[])).next())})},Ye=v&&v.__generator||function(e,t){var r={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},n,a,c,u;return u={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function l(o){return function(i){return s([o,i])}}function s(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(c=o[0]&2?a.return:o[0]?a.throw||((c=a.return)&&c.call(a),0):a.next)&&!(c=c.call(a,o[1])).done)return c;switch(a=0,c&&(o=[o[0]&2,c.value]),o[0]){case 0:case 1:c=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,a=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(c=r.trys,!(c=c.length>0&&c[c.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!c||o[1]>c[0]&&o[1]<c[3])){r.label=o[1];break}if(o[0]===6&&r.label<c[1]){r.label=c[1],c=o;break}if(c&&r.label<c[2]){r.label=c[2],r.ops.push(o);break}c[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(e,r)}catch(i){o=[6,i],a=0}finally{n=c=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}};Object.defineProperty(X,"__esModule",{value:!0});X.getUrl=void 0;var ue=y,qe=function(e,t){return Qe(void 0,void 0,void 0,function(){var r,n,a;return Ye(this,function(c){switch(c.label){case 0:return typeof e!="function"?[3,2]:[4,e()];case 1:return r=c.sent(),[3,3];case 2:r=e,c.label=3;case 3:return n=t.current.fromSocketIO?(0,ue.parseSocketIOUrl)(r):r,a=t.current.queryParams?(0,ue.appendQueryParams)(n,t.current.queryParams):n,[2,a]}})})};X.getUrl=qe;var ve={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.websocketWrapper=void 0;var t=function(r,n){return new Proxy(r,{get:function(a,c){var u=a[c];return c==="reconnect"?n:typeof u=="function"?function(){}:u},set:function(a,c,u){return/^on/.test(c)?!1:(a[c]=u,!0)}})};e.websocketWrapper=t,e.default=e.websocketWrapper})(ve);var j=v&&v.__assign||function(){return j=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},j.apply(this,arguments)},ze=v&&v.__awaiter||function(e,t,r,n){function a(c){return c instanceof r?c:new r(function(u){u(c)})}return new(r||(r=Promise))(function(c,u){function l(i){try{o(n.next(i))}catch(d){u(d)}}function s(i){try{o(n.throw(i))}catch(d){u(d)}}function o(i){i.done?c(i.value):a(i.value).then(l,s)}o((n=n.apply(e,t||[])).next())})},Xe=v&&v.__generator||function(e,t){var r={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},n,a,c,u;return u={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function l(o){return function(i){return s([o,i])}}function s(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(c=o[0]&2?a.return:o[0]?a.throw||((c=a.return)&&c.call(a),0):a.next)&&!(c=c.call(a,o[1])).done)return c;switch(a=0,c&&(o=[o[0]&2,c.value]),o[0]){case 0:case 1:c=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,a=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(c=r.trys,!(c=c.length>0&&c[c.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!c||o[1]>c[0]&&o[1]<c[3])){r.label=o[1];break}if(o[0]===6&&r.label<c[1]){r.label=c[1],c=o;break}if(c&&r.label<c[2]){r.label=c[2],r.ops.push(o);break}c[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(e,r)}catch(i){o=[6,i],a=0}finally{n=c=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},Ze=v&&v.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(R,"__esModule",{value:!0});R.useWebSocket=void 0;var E=b,se=Oe,T=C,xe=B,et=X,tt=Ze(ve),ie=w,rt=function(e,t,r){t===void 0&&(t=T.DEFAULT_OPTIONS),r===void 0&&(r=!0);var n=(0,E.useState)(null),a=n[0],c=n[1],u=(0,E.useState)({}),l=u[0],s=u[1],o=(0,E.useMemo)(function(){if(a)try{return JSON.parse(a.data)}catch{return T.UNPARSABLE_JSON_OBJECT}return null},[a]),i=(0,E.useRef)(null),d=(0,E.useRef)(null),k=(0,E.useRef)(function(){}),P=(0,E.useRef)(0),M=(0,E.useRef)([]),N=(0,E.useRef)(null),f=(0,E.useRef)(t);f.current=t;var S=i.current&&l[i.current]!==void 0?l[i.current]:e!==null&&r===!0?T.ReadyState.CONNECTING:T.ReadyState.UNINSTANTIATED,U=t.queryParams?JSON.stringify(t.queryParams):null,A=(0,E.useCallback)(function(_,O){var L;O===void 0&&(O=!0),!(T.isEventSourceSupported&&d.current instanceof EventSource)&&(((L=d.current)===null||L===void 0?void 0:L.readyState)===T.ReadyState.OPEN?((0,ie.assertIsWebSocket)(d.current,f.current.skipAssert),d.current.send(_)):O&&M.current.push(_))},[]),Se=(0,E.useCallback)(function(_,O){O===void 0&&(O=!0),A(JSON.stringify(_),O)},[A]),_e=(0,E.useCallback)(function(){return f.current.share!==!0||T.isEventSourceSupported&&d.current instanceof EventSource?d.current:(N.current===null&&d.current&&((0,ie.assertIsWebSocket)(d.current,f.current.skipAssert),N.current=(0,tt.default)(d.current,k)),N.current)},[]);return(0,E.useEffect)(function(){if(e!==null&&r===!0){var _,O=!1,L=!0,ae=function(){return ze(void 0,void 0,void 0,function(){var G,W,ce;return Xe(this,function(oe){switch(oe.label){case 0:return G=i,[4,(0,et.getUrl)(e,f)];case 1:return G.current=oe.sent(),W=function(ee){O||(0,se.flushSync)(function(){return c(ee)})},ce=function(ee){O||(0,se.flushSync)(function(){return s(function(Ee){var te;return j(j({},Ee),i.current&&(te={},te[i.current]=ee,te))})})},L&&(_=(0,xe.createOrJoinSocket)(d,i.current,ce,f,W,k,P,A)),[2]}})})};return k.current=function(){O||(N.current&&(N.current=null),_==null||_(),ae())},ae(),function(){O=!0,L=!1,N.current&&(N.current=null),_==null||_(),c(null)}}else(e===null||r===!1)&&(P.current=0,s(function(G){var W;return j(j({},G),i.current&&(W={},W[i.current]=T.ReadyState.CLOSED,W))}))},[e,r,U,A]),(0,E.useEffect)(function(){S===T.ReadyState.OPEN&&M.current.splice(0).forEach(function(_){A(_)})},[S]),{sendMessage:A,sendJsonMessage:Se,lastMessage:a,lastJsonMessage:o,readyState:S,getWebSocket:_e}};R.useWebSocket=rt;var Z={},V=v&&v.__assign||function(){return V=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},V.apply(this,arguments)};Object.defineProperty(Z,"__esModule",{value:!0});Z.useSocketIO=void 0;var le=b,nt=R,at=C,re={type:"empty",payload:null},ct=function(e){if(!e||!e.data)return re;var t=e.data.match(/\[.*]/);if(!t)return re;var r=JSON.parse(t);return!Array.isArray(r)||!r[1]?re:{type:r[0],payload:r[1]}},ot=function(e,t,r){t===void 0&&(t=at.DEFAULT_OPTIONS),r===void 0&&(r=!0);var n=(0,le.useMemo)(function(){return V(V({},t),{fromSocketIO:!0})},[]),a=(0,nt.useWebSocket)(e,n,r),c=a.sendMessage,u=a.sendJsonMessage,l=a.lastMessage,s=a.readyState,o=a.getWebSocket,i=(0,le.useMemo)(function(){return ct(l)},[l]);return{sendMessage:c,sendJsonMessage:u,lastMessage:i,lastJsonMessage:i,readyState:s,getWebSocket:o}};Z.useSocketIO=ot;var x={},K=v&&v.__assign||function(){return K=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},K.apply(this,arguments)},ut=v&&v.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};Object.defineProperty(x,"__esModule",{value:!0});x.useEventSource=void 0;var fe=b,st=R,de=C,it=function(e,t,r){t===void 0&&(t=de.DEFAULT_EVENT_SOURCE_OPTIONS);var n=t.withCredentials,a=t.events,c=ut(t,["withCredentials","events"]);r===void 0&&(r=!0);var u=K(K({},c),{eventSourceOptions:{withCredentials:n}}),l=(0,fe.useRef)(de.EMPTY_EVENT_HANDLERS);a&&(l.current=a);var s=(0,st.useWebSocket)(e,u,r),o=s.lastMessage,i=s.readyState,d=s.getWebSocket;return(0,fe.useEffect)(function(){o!=null&&o.type&&Object.entries(l.current).forEach(function(k){var P=k[0],M=k[1];P===o.type&&M(o)})},[o]),{lastEvent:o,readyState:i,getEventSource:d}};x.useEventSource=it;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetGlobalState=e.useEventSource=e.ReadyState=e.useSocketIO=e.default=void 0;var t=R;Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.useWebSocket}});var r=Z;Object.defineProperty(e,"useSocketIO",{enumerable:!0,get:function(){return r.useSocketIO}});var n=C;Object.defineProperty(e,"ReadyState",{enumerable:!0,get:function(){return n.ReadyState}});var a=x;Object.defineProperty(e,"useEventSource",{enumerable:!0,get:function(){return a.useEventSource}});var c=w;Object.defineProperty(e,"resetGlobalState",{enumerable:!0,get:function(){return c.resetGlobalState}})})(m);const lt=he(m),dt=()=>{const[e,t]=b.useState("https://acaa-203-129-217-58.ngrok-free.app"),[r,n]=b.useState([]),[a,c]=b.useState(""),{api_checkHeartBeat:u}=ye(),{sendMessage:l,lastMessage:s,readyState:o}=lt(e);b.useEffect(()=>{s!==null&&(n(f=>f.concat(s)),P(s.data))},[s,n]);const i=b.useCallback(()=>t("wss://demos.kaazing.com/echo"),[]),d=b.useCallback(()=>l("Hello"),[]),k={[m.ReadyState.CONNECTING]:"Connecting",[m.ReadyState.OPEN]:"Open",[m.ReadyState.CLOSING]:"Closing",[m.ReadyState.CLOSED]:"Closed",[m.ReadyState.UNINSTANTIATED]:"Uninstantiated"}[o],P=f=>{M()},M=()=>{be.post(u,{},ge()).then(function(f){var S;(S=f==null?void 0:f.data)!=null&&S.status}).catch(function(f){})},N=()=>{setInterval(()=>{d()},2e3)};return b.useEffect(()=>{N()},[]),navigator.geolocation&&(navigator.permissions?navigator.permissions.query({name:"geolocation"}).then(f=>{f.state==="granted"?navigator.geolocation.getCurrentPosition(S=>{const U=S.coords.latitude;S.coords.longitude,c(`location: ${U}`)},S=>{}):f.state==="prompt"&&navigator.geolocation.getCurrentPosition(S=>{const U=S.coords.latitude;S.coords.longitude,c(`location: ${U}`)},S=>{})}):navigator.geolocation.getCurrentPosition(f=>{const S=f.coords.latitude;f.coords.longitude,c(`location: ${S}`)},f=>{})),h.jsxs("div",{children:[h.jsxs("div",{children:["latitude : ",a]}),h.jsx("button",{onClick:i,children:"Click Me to change Socket Url"}),h.jsx("br",{}),h.jsx("br",{}),h.jsx("button",{onClick:d,disabled:o!==m.ReadyState.OPEN,children:"Click Me to send 'Hello'"}),h.jsx("br",{}),h.jsx("br",{}),h.jsxs("span",{children:["The WebSocket is currently ",k]}),s?h.jsxs("span",{children:["Last message: ",s.data]}):null,h.jsx("ul",{children:r.map((f,S)=>h.jsx("span",{children:f?f.data:null},S))})]})};export{dt as default};
