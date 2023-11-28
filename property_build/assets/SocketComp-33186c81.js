import{D as v,r as b,E as Ee,F as Oe,A as he,b as be,j as O,g as ye}from"./index-f3761e5c.js";var p={},R={},m={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isEventSourceSupported=e.isReactNative=e.ReadyState=e.UNPARSABLE_JSON_OBJECT=e.DEFAULT_RECONNECT_INTERVAL_MS=e.DEFAULT_RECONNECT_LIMIT=e.SOCKET_IO_PING_CODE=e.SOCKET_IO_PATH=e.SOCKET_IO_PING_INTERVAL=e.DEFAULT_EVENT_SOURCE_OPTIONS=e.EMPTY_EVENT_HANDLERS=e.DEFAULT_OPTIONS=void 0;var t=1,r=1e3*t;e.DEFAULT_OPTIONS={},e.EMPTY_EVENT_HANDLERS={},e.DEFAULT_EVENT_SOURCE_OPTIONS={withCredentials:!1,events:e.EMPTY_EVENT_HANDLERS},e.SOCKET_IO_PING_INTERVAL=25*r,e.SOCKET_IO_PATH="/socket.io/?EIO=3&transport=websocket",e.SOCKET_IO_PING_CODE="2",e.DEFAULT_RECONNECT_LIMIT=20,e.DEFAULT_RECONNECT_INTERVAL_MS=5e3,e.UNPARSABLE_JSON_OBJECT={},function(a){a[a.UNINSTANTIATED=-1]="UNINSTANTIATED",a[a.CONNECTING=0]="CONNECTING",a[a.OPEN=1]="OPEN",a[a.CLOSING=2]="CLOSING",a[a.CLOSED=3]="CLOSED"}(e.ReadyState||(e.ReadyState={}));var n=function(){try{return"EventSource"in globalThis}catch{return!1}};e.isReactNative=typeof navigator<"u"&&navigator.product==="ReactNative",e.isEventSourceSupported=!e.isReactNative&&n()})(m);var B={},Q={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetWebSockets=e.sharedWebSockets=void 0,e.sharedWebSockets={};var t=function(r){if(r&&e.sharedWebSockets.hasOwnProperty(r))delete e.sharedWebSockets[r];else for(var n in e.sharedWebSockets)e.sharedWebSockets.hasOwnProperty(n)&&delete e.sharedWebSockets[n]};e.resetWebSockets=t})(Q);var Y={},N={};Object.defineProperty(N,"__esModule",{value:!0});N.setUpSocketIOPing=N.appendQueryParams=N.parseSocketIOUrl=void 0;var H=m,Ne=function(e){if(e){var t=/^https|wss/.test(e),r=e.replace(/^(https?|wss?)(:\/\/)?/,""),n=r.replace(/\/$/,""),a=t?"wss":"ws";return"".concat(a,"://").concat(n).concat(H.SOCKET_IO_PATH)}else if(e===""){var t=/^https/.test(window.location.protocol),a=t?"wss":"ws",o=window.location.port?":".concat(window.location.port):"";return"".concat(a,"://").concat(window.location.hostname).concat(o).concat(H.SOCKET_IO_PATH)}return e};N.parseSocketIOUrl=Ne;var Te=function(e,t){t===void 0&&(t={});var r=/\?([\w]+=[\w]+)/,n=r.test(e),a="".concat(Object.entries(t).reduce(function(o,u){var l=u[0],s=u[1];return o+"".concat(l,"=").concat(s,"&")},"").slice(0,-1));return"".concat(e).concat(n?"&":"?").concat(a)};N.appendQueryParams=Te;var Ce=function(e,t){t===void 0&&(t=H.SOCKET_IO_PING_INTERVAL);var r=function(){return e(H.SOCKET_IO_PING_CODE)};return window.setInterval(r,t)};N.setUpSocketIOPing=Ce;var P={},q={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetSubscribers=e.removeSubscriber=e.addSubscriber=e.hasSubscribers=e.getSubscribers=void 0;var t={},r=[],n=function(s){return(0,e.hasSubscribers)(s)?Array.from(t[s]):r};e.getSubscribers=n;var a=function(s){var c;return((c=t[s])===null||c===void 0?void 0:c.size)>0};e.hasSubscribers=a;var o=function(s,c){t[s]=t[s]||new Set,t[s].add(c)};e.addSubscriber=o;var u=function(s,c){t[s].delete(c)};e.removeSubscriber=u;var l=function(s){if(s&&t.hasOwnProperty(s))delete t[s];else for(var c in t)t.hasOwnProperty(c)&&delete t[c]};e.resetSubscribers=l})(q);Object.defineProperty(P,"__esModule",{value:!0});P.resetGlobalState=P.assertIsWebSocket=void 0;var ke=Q,me=q;function we(e,t){if(!t&&!(e instanceof WebSocket))throw new Error("")}P.assertIsWebSocket=we;function pe(e){(0,me.resetSubscribers)(e),(0,ke.resetWebSockets)(e)}P.resetGlobalState=pe;var J=v&&v.__assign||function(){return J=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},J.apply(this,arguments)};Object.defineProperty(Y,"__esModule",{value:!0});Y.attachListeners=void 0;var Ie=N,y=m,Pe=P,Me=function(e,t,r){e.onmessage=function(n){t.current.onMessage&&t.current.onMessage(n),!(typeof t.current.filter=="function"&&t.current.filter(n)!==!0)&&r(n)}},Le=function(e,t,r,n){e.onopen=function(a){t.current.onOpen&&t.current.onOpen(a),n.current=0,r(y.ReadyState.OPEN)}},Ae=function(e,t,r,n,a){if(y.isEventSourceSupported&&e instanceof EventSource)return function(){};(0,Pe.assertIsWebSocket)(e,t.current.skipAssert);var o;return e.onclose=function(u){var l;if(t.current.onClose&&t.current.onClose(u),r(y.ReadyState.CLOSED),t.current.shouldReconnect&&t.current.shouldReconnect(u)){var s=(l=t.current.reconnectAttempts)!==null&&l!==void 0?l:y.DEFAULT_RECONNECT_LIMIT;if(a.current<s){var c=typeof t.current.reconnectInterval=="function"?t.current.reconnectInterval(a.current):t.current.reconnectInterval;o=window.setTimeout(function(){a.current++,n()},c??y.DEFAULT_RECONNECT_INTERVAL_MS)}else t.current.onReconnectStop&&t.current.onReconnectStop(s),console.warn("Max reconnect attempts of ".concat(s," exceeded"))}},function(){return o&&window.clearTimeout(o)}},We=function(e,t,r,n,a){var o;return e.onerror=function(u){var l;if(t.current.onError&&t.current.onError(u),y.isEventSourceSupported&&e instanceof EventSource&&(t.current.onClose&&t.current.onClose(J(J({},u),{code:1006,reason:"An error occurred with the EventSource: ".concat(u),wasClean:!1})),r(y.ReadyState.CLOSED),e.close()),t.current.retryOnError)if(a.current<((l=t.current.reconnectAttempts)!==null&&l!==void 0?l:y.DEFAULT_RECONNECT_LIMIT)){var s=typeof t.current.reconnectInterval=="function"?t.current.reconnectInterval(a.current):t.current.reconnectInterval;o=window.setTimeout(function(){a.current++,n()},s??y.DEFAULT_RECONNECT_INTERVAL_MS)}else t.current.onReconnectStop&&t.current.onReconnectStop(t.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(t.current.reconnectAttempts," exceeded"))},function(){return o&&window.clearTimeout(o)}},je=function(e,t,r,n,a,o){var u=t.setLastMessage,l=t.setReadyState,s,c,i;return r.current.fromSocketIO&&(s=(0,Ie.setUpSocketIOPing)(o)),Me(e,r,u),Le(e,r,l,a),c=Ae(e,r,l,n,a),i=We(e,r,l,n,a),function(){l(y.ReadyState.CLOSING),c(),i(),e.close(),s&&clearInterval(s)}};Y.attachListeners=je;var z={},F=v&&v.__assign||function(){return F=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},F.apply(this,arguments)};Object.defineProperty(z,"__esModule",{value:!0});z.attachSharedListeners=void 0;var Ue=Q,M=m,$=q,Re=N,De=function(e,t){e.onmessage=function(r){(0,$.getSubscribers)(t).forEach(function(n){n.optionsRef.current.onMessage&&n.optionsRef.current.onMessage(r),!(typeof n.optionsRef.current.filter=="function"&&n.optionsRef.current.filter(r)!==!0)&&n.setLastMessage(r)})}},$e=function(e,t){e.onopen=function(r){(0,$.getSubscribers)(t).forEach(function(n){n.reconnectCount.current=0,n.optionsRef.current.onOpen&&n.optionsRef.current.onOpen(r),n.setReadyState(M.ReadyState.OPEN)})}},Ge=function(e,t){e instanceof WebSocket&&(e.onclose=function(r){(0,$.getSubscribers)(t).forEach(function(n){n.optionsRef.current.onClose&&n.optionsRef.current.onClose(r),n.setReadyState(M.ReadyState.CLOSED)}),delete Ue.sharedWebSockets[t],(0,$.getSubscribers)(t).forEach(function(n){var a;if(n.optionsRef.current.shouldReconnect&&n.optionsRef.current.shouldReconnect(r)){var o=(a=n.optionsRef.current.reconnectAttempts)!==null&&a!==void 0?a:M.DEFAULT_RECONNECT_LIMIT;if(n.reconnectCount.current<o){var u=typeof n.optionsRef.current.reconnectInterval=="function"?n.optionsRef.current.reconnectInterval(n.reconnectCount.current):n.optionsRef.current.reconnectInterval;setTimeout(function(){n.reconnectCount.current++,n.reconnect.current()},u??M.DEFAULT_RECONNECT_INTERVAL_MS)}else n.optionsRef.current.onReconnectStop&&n.optionsRef.current.onReconnectStop(n.optionsRef.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(o," exceeded"))}})})},He=function(e,t){e.onerror=function(r){(0,$.getSubscribers)(t).forEach(function(n){n.optionsRef.current.onError&&n.optionsRef.current.onError(r),M.isEventSourceSupported&&e instanceof EventSource&&(n.optionsRef.current.onClose&&n.optionsRef.current.onClose(F(F({},r),{code:1006,reason:"An error occurred with the EventSource: ".concat(r),wasClean:!1})),n.setReadyState(M.ReadyState.CLOSED))}),M.isEventSourceSupported&&e instanceof EventSource&&e.close()}},Je=function(e,t,r,n){var a;return r.current.fromSocketIO&&(a=(0,Re.setUpSocketIOPing)(n)),De(e,t),Ge(e,t),$e(e,t),He(e,t),function(){a&&clearInterval(a)}};z.attachSharedListeners=Je;Object.defineProperty(B,"__esModule",{value:!0});B.createOrJoinSocket=void 0;var I=Q,D=m,Fe=Y,Ve=z,ne=q,Ke=function(e,t,r,n,a){return function(){if((0,ne.removeSubscriber)(e,t),!(0,ne.hasSubscribers)(e)){try{var o=I.sharedWebSockets[e];o instanceof WebSocket&&(o.onclose=function(u){r.current.onClose&&r.current.onClose(u),n(D.ReadyState.CLOSED)}),o.close()}catch{}a&&a(),delete I.sharedWebSockets[e]}}},Be=function(e,t,r,n,a,o,u,l){if(!D.isEventSourceSupported&&n.current.eventSourceOptions)throw D.isReactNative?new Error("EventSource is not supported in ReactNative"):new Error("EventSource is not supported");if(n.current.share){var s=null;I.sharedWebSockets[t]===void 0?(I.sharedWebSockets[t]=n.current.eventSourceOptions?new EventSource(t,n.current.eventSourceOptions):new WebSocket(t,n.current.protocols),e.current=I.sharedWebSockets[t],r(D.ReadyState.CONNECTING),s=(0,Ve.attachSharedListeners)(I.sharedWebSockets[t],t,n,l)):(e.current=I.sharedWebSockets[t],r(I.sharedWebSockets[t].readyState));var c={setLastMessage:a,setReadyState:r,optionsRef:n,reconnectCount:u,reconnect:o};return(0,ne.addSubscriber)(t,c),Ke(t,c,n,r,s)}else{if(e.current=n.current.eventSourceOptions?new EventSource(t,n.current.eventSourceOptions):new WebSocket(t,n.current.protocols),r(D.ReadyState.CONNECTING),!e.current)throw new Error("WebSocket failed to be created");return(0,Fe.attachListeners)(e.current,{setLastMessage:a,setReadyState:r},n,o.current,u,l)}};B.createOrJoinSocket=Be;var X={},Qe=v&&v.__awaiter||function(e,t,r,n){function a(o){return o instanceof r?o:new r(function(u){u(o)})}return new(r||(r=Promise))(function(o,u){function l(i){try{c(n.next(i))}catch(d){u(d)}}function s(i){try{c(n.throw(i))}catch(d){u(d)}}function c(i){i.done?o(i.value):a(i.value).then(l,s)}c((n=n.apply(e,t||[])).next())})},Ye=v&&v.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,u;return u={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function l(c){return function(i){return s([c,i])}}function s(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(o=c[0]&2?a.return:c[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,c[1])).done)return o;switch(a=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,a=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){r.label=c[1];break}if(c[0]===6&&r.label<o[1]){r.label=o[1],o=c;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(c);break}o[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(i){c=[6,i],a=0}finally{n=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};Object.defineProperty(X,"__esModule",{value:!0});X.getUrl=void 0;var ue=N,qe=function(e,t){return Qe(void 0,void 0,void 0,function(){var r,n,a;return Ye(this,function(o){switch(o.label){case 0:return typeof e!="function"?[3,2]:[4,e()];case 1:return r=o.sent(),[3,3];case 2:r=e,o.label=3;case 3:return n=t.current.fromSocketIO?(0,ue.parseSocketIOUrl)(r):r,a=t.current.queryParams?(0,ue.appendQueryParams)(n,t.current.queryParams):n,[2,a]}})})};X.getUrl=qe;var ve={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.websocketWrapper=void 0;var t=function(r,n){return new Proxy(r,{get:function(a,o){var u=a[o];return o==="reconnect"?n:typeof u=="function"?(console.error("Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket."),function(){}):u},set:function(a,o,u){return/^on/.test(o)?(console.warn("The websocket's event handlers should be defined through the options object passed into useWebSocket."),!1):(a[o]=u,!0)}})};e.websocketWrapper=t,e.default=e.websocketWrapper})(ve);var U=v&&v.__assign||function(){return U=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},U.apply(this,arguments)},ze=v&&v.__awaiter||function(e,t,r,n){function a(o){return o instanceof r?o:new r(function(u){u(o)})}return new(r||(r=Promise))(function(o,u){function l(i){try{c(n.next(i))}catch(d){u(d)}}function s(i){try{c(n.throw(i))}catch(d){u(d)}}function c(i){i.done?o(i.value):a(i.value).then(l,s)}c((n=n.apply(e,t||[])).next())})},Xe=v&&v.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,u;return u={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function l(c){return function(i){return s([c,i])}}function s(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(o=c[0]&2?a.return:c[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,c[1])).done)return o;switch(a=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,a=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){r.label=c[1];break}if(c[0]===6&&r.label<o[1]){r.label=o[1],o=c;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(c);break}o[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(i){c=[6,i],a=0}finally{n=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},Ze=v&&v.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(R,"__esModule",{value:!0});R.useWebSocket=void 0;var g=b,se=Ee,k=m,xe=B,et=X,tt=Ze(ve),ie=P,rt=function(e,t,r){t===void 0&&(t=k.DEFAULT_OPTIONS),r===void 0&&(r=!0);var n=(0,g.useState)(null),a=n[0],o=n[1],u=(0,g.useState)({}),l=u[0],s=u[1],c=(0,g.useMemo)(function(){if(a)try{return JSON.parse(a.data)}catch{return k.UNPARSABLE_JSON_OBJECT}return null},[a]),i=(0,g.useRef)(null),d=(0,g.useRef)(null),w=(0,g.useRef)(function(){}),L=(0,g.useRef)(0),A=(0,g.useRef)([]),T=(0,g.useRef)(null),f=(0,g.useRef)(t);f.current=t;var S=i.current&&l[i.current]!==void 0?l[i.current]:e!==null&&r===!0?k.ReadyState.CONNECTING:k.ReadyState.UNINSTANTIATED,C=t.queryParams?JSON.stringify(t.queryParams):null,h=(0,g.useCallback)(function(_,E){var W;if(E===void 0&&(E=!0),k.isEventSourceSupported&&d.current instanceof EventSource){console.warn("Unable to send a message from an eventSource");return}((W=d.current)===null||W===void 0?void 0:W.readyState)===k.ReadyState.OPEN?((0,ie.assertIsWebSocket)(d.current,f.current.skipAssert),d.current.send(_)):E&&A.current.push(_)},[]),Se=(0,g.useCallback)(function(_,E){E===void 0&&(E=!0),h(JSON.stringify(_),E)},[h]),_e=(0,g.useCallback)(function(){return f.current.share!==!0||k.isEventSourceSupported&&d.current instanceof EventSource?d.current:(T.current===null&&d.current&&((0,ie.assertIsWebSocket)(d.current,f.current.skipAssert),T.current=(0,tt.default)(d.current,w)),T.current)},[]);return(0,g.useEffect)(function(){if(e!==null&&r===!0){var _,E=!1,W=!0,ae=function(){return ze(void 0,void 0,void 0,function(){var G,j,oe;return Xe(this,function(ce){switch(ce.label){case 0:return G=i,[4,(0,et.getUrl)(e,f)];case 1:return G.current=ce.sent(),j=function(ee){E||(0,se.flushSync)(function(){return o(ee)})},oe=function(ee){E||(0,se.flushSync)(function(){return s(function(ge){var te;return U(U({},ge),i.current&&(te={},te[i.current]=ee,te))})})},W&&(_=(0,xe.createOrJoinSocket)(d,i.current,oe,f,j,w,L,h)),[2]}})})};return w.current=function(){E||(T.current&&(T.current=null),_==null||_(),ae())},ae(),function(){E=!0,W=!1,T.current&&(T.current=null),_==null||_(),o(null)}}else(e===null||r===!1)&&(L.current=0,s(function(G){var j;return U(U({},G),i.current&&(j={},j[i.current]=k.ReadyState.CLOSED,j))}))},[e,r,C,h]),(0,g.useEffect)(function(){S===k.ReadyState.OPEN&&A.current.splice(0).forEach(function(_){h(_)})},[S]),{sendMessage:h,sendJsonMessage:Se,lastMessage:a,lastJsonMessage:c,readyState:S,getWebSocket:_e}};R.useWebSocket=rt;var Z={},V=v&&v.__assign||function(){return V=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},V.apply(this,arguments)};Object.defineProperty(Z,"__esModule",{value:!0});Z.useSocketIO=void 0;var le=b,nt=R,at=m,re={type:"empty",payload:null},ot=function(e){if(!e||!e.data)return re;var t=e.data.match(/\[.*]/);if(!t)return re;var r=JSON.parse(t);return!Array.isArray(r)||!r[1]?re:{type:r[0],payload:r[1]}},ct=function(e,t,r){t===void 0&&(t=at.DEFAULT_OPTIONS),r===void 0&&(r=!0);var n=(0,le.useMemo)(function(){return V(V({},t),{fromSocketIO:!0})},[]),a=(0,nt.useWebSocket)(e,n,r),o=a.sendMessage,u=a.sendJsonMessage,l=a.lastMessage,s=a.readyState,c=a.getWebSocket,i=(0,le.useMemo)(function(){return ot(l)},[l]);return{sendMessage:o,sendJsonMessage:u,lastMessage:i,lastJsonMessage:i,readyState:s,getWebSocket:c}};Z.useSocketIO=ct;var x={},K=v&&v.__assign||function(){return K=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},K.apply(this,arguments)},ut=v&&v.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};Object.defineProperty(x,"__esModule",{value:!0});x.useEventSource=void 0;var fe=b,st=R,de=m,it=function(e,t,r){t===void 0&&(t=de.DEFAULT_EVENT_SOURCE_OPTIONS);var n=t.withCredentials,a=t.events,o=ut(t,["withCredentials","events"]);r===void 0&&(r=!0);var u=K(K({},o),{eventSourceOptions:{withCredentials:n}}),l=(0,fe.useRef)(de.EMPTY_EVENT_HANDLERS);a&&(l.current=a);var s=(0,st.useWebSocket)(e,u,r),c=s.lastMessage,i=s.readyState,d=s.getWebSocket;return(0,fe.useEffect)(function(){c!=null&&c.type&&Object.entries(l.current).forEach(function(w){var L=w[0],A=w[1];L===c.type&&A(c)})},[c]),{lastEvent:c,readyState:i,getEventSource:d}};x.useEventSource=it;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetGlobalState=e.useEventSource=e.ReadyState=e.useSocketIO=e.default=void 0;var t=R;Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.useWebSocket}});var r=Z;Object.defineProperty(e,"useSocketIO",{enumerable:!0,get:function(){return r.useSocketIO}});var n=m;Object.defineProperty(e,"ReadyState",{enumerable:!0,get:function(){return n.ReadyState}});var a=x;Object.defineProperty(e,"useEventSource",{enumerable:!0,get:function(){return a.useEventSource}});var o=P;Object.defineProperty(e,"resetGlobalState",{enumerable:!0,get:function(){return o.resetGlobalState}})})(p);const lt=Oe(p),dt=()=>{const[e,t]=b.useState("https://acaa-203-129-217-58.ngrok-free.app"),[r,n]=b.useState([]),[a,o]=b.useState(""),{api_checkHeartBeat:u}=ye(),{sendMessage:l,lastMessage:s,readyState:c}=lt(e);b.useEffect(()=>{s!==null&&(n(f=>f.concat(s)),L(s.data))},[s,n]);const i=b.useCallback(()=>t("wss://demos.kaazing.com/echo"),[]),d=b.useCallback(()=>l("Hello"),[]),w={[p.ReadyState.CONNECTING]:"Connecting",[p.ReadyState.OPEN]:"Open",[p.ReadyState.CLOSING]:"Closing",[p.ReadyState.CLOSED]:"Closed",[p.ReadyState.UNINSTANTIATED]:"Uninstantiated"}[c],L=f=>{console.log("Received message:",f),A()},A=()=>{he.post(u,{},be()).then(function(f){var S;console.log("success in sending geolocation ...",f),(S=f==null?void 0:f.data)!=null&&S.status}).catch(function(f){console.log("==error in sending geolocation...",f)})},T=()=>{setInterval(()=>{d()},2e3)};return b.useEffect(()=>{T()},[]),navigator.geolocation?navigator.permissions?navigator.permissions.query({name:"geolocation"}).then(f=>{f.state==="granted"?navigator.geolocation.getCurrentPosition(S=>{const C=S.coords.latitude,h=S.coords.longitude;o(`location: ${C}`),console.log("Latitude:",C),console.log("Longitude:",h)},S=>{console.error("Error getting geolocation:",S.message)}):f.state==="prompt"?navigator.geolocation.getCurrentPosition(S=>{const C=S.coords.latitude,h=S.coords.longitude;o(`location: ${C}`),console.log("Latitude:",C),console.log("Longitude:",h)},S=>{console.error("Error getting geolocation:",S.message)}):console.error("Geolocation permission denied.")}):navigator.geolocation.getCurrentPosition(f=>{const S=f.coords.latitude,C=f.coords.longitude;o(`location: ${S}`),console.log("Latitude:",S),console.log("Longitude:",C)},f=>{console.error("Error getting geolocation:",f.message)}):console.error("Geolocation is not supported by this browser."),O.jsxs("div",{children:[O.jsxs("div",{children:["latitude : ",a]}),O.jsx("button",{onClick:i,children:"Click Me to change Socket Url"}),O.jsx("br",{}),O.jsx("br",{}),O.jsx("button",{onClick:d,disabled:c!==p.ReadyState.OPEN,children:"Click Me to send 'Hello'"}),O.jsx("br",{}),O.jsx("br",{}),O.jsxs("span",{children:["The WebSocket is currently ",w]}),s?O.jsxs("span",{children:["Last message: ",s.data]}):null,O.jsx("ul",{children:r.map((f,S)=>O.jsx("span",{children:f?f.data:null},S))})]})};export{dt as default};
