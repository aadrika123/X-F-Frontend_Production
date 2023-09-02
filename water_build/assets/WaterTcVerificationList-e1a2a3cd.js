import{_ as H,b as U,n as D,i as L,c as P,t as $,f as V,r as k,g as A,s as K,d as q,e as O,S as z,R as g,u as G,p as J,j as m,k as M,F as X,l as Y,m as Z,A as ee,o as te,C as re,L as se,q as ne,a as ie}from"./index-4e890fe5.js";var ae=function(o){H(u,o);function u(n,t){var e;return e=o.call(this)||this,e.client=n,e.options=t,e.trackedProps=[],e.selectError=null,e.bindMethods(),e.setOptions(t),e}var s=u.prototype;return s.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},s.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),_(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},s.onUnsubscribe=function(){this.listeners.length||this.destroy()},s.shouldFetchOnReconnect=function(){return C(this.currentQuery,this.options,this.options.refetchOnReconnect)},s.shouldFetchOnWindowFocus=function(){return C(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},s.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},s.setOptions=function(t,e){var i=this.options,r=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();var c=this.hasListeners();c&&N(this.currentQuery,r,this.options,i)&&this.executeFetch(),this.updateResult(e),c&&(this.currentQuery!==r||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();var a=this.computeRefetchInterval();c&&(this.currentQuery!==r||this.options.enabled!==i.enabled||a!==this.currentRefetchInterval)&&this.updateRefetchInterval(a)},s.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),i=this.client.getQueryCache().build(this.client,e);return this.createResult(i,e)},s.getCurrentResult=function(){return this.currentResult},s.trackResult=function(t,e){var i=this,r={},c=function(l){i.trackedProps.includes(l)||i.trackedProps.push(l)};return Object.keys(t).forEach(function(a){Object.defineProperty(r,a,{configurable:!1,enumerable:!0,get:function(){return c(a),t[a]}})}),(e.useErrorBoundary||e.suspense)&&c("error"),r},s.getNextResult=function(t){var e=this;return new Promise(function(i,r){var c=e.subscribe(function(a){a.isFetching||(c(),a.isError&&(t!=null&&t.throwOnError)?r(a.error):i(a))})})},s.getCurrentQuery=function(){return this.currentQuery},s.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},s.refetch=function(t){return this.fetch(U({},t,{meta:{refetchPage:t==null?void 0:t.refetchPage}}))},s.fetchOptimistic=function(t){var e=this,i=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,i);return r.fetch().then(function(){return e.createResult(r,i)})},s.fetch=function(t){var e=this;return this.executeFetch(t).then(function(){return e.updateResult(),e.currentResult})},s.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(D)),e},s.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!(L||this.currentResult.isStale||!P(this.options.staleTime))){var e=$(this.currentResult.dataUpdatedAt,this.options.staleTime),i=e+1;this.staleTimeoutId=setTimeout(function(){t.currentResult.isStale||t.updateResult()},i)}},s.computeRefetchInterval=function(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1},s.updateRefetchInterval=function(t){var e=this;this.clearRefetchInterval(),this.currentRefetchInterval=t,!(L||this.options.enabled===!1||!P(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(e.options.refetchIntervalInBackground||V.isFocused())&&e.executeFetch()},this.currentRefetchInterval))},s.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},s.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},s.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},s.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},s.createResult=function(t,e){var i=this.currentQuery,r=this.options,c=this.currentResult,a=this.currentResultState,l=this.currentResultOptions,p=t!==i,v=p?t.state:this.currentQueryInitialState,d=p?this.currentResult:this.previousQueryResult,h=t.state,R=h.dataUpdatedAt,I=h.error,x=h.errorUpdatedAt,Q=h.isFetching,f=h.status,T=!1,w=!1,y;if(e.optimisticResults){var F=this.hasListeners(),W=!F&&_(t,e),j=F&&N(t,i,e,r);(W||j)&&(Q=!0,R||(f="loading"))}if(e.keepPreviousData&&!h.dataUpdateCount&&(d!=null&&d.isSuccess)&&f!=="error")y=d.data,R=d.dataUpdatedAt,f=d.status,T=!0;else if(e.select&&typeof h.data<"u")if(c&&h.data===(a==null?void 0:a.data)&&e.select===this.selectFn)y=this.selectResult;else try{this.selectFn=e.select,y=e.select(h.data),e.structuralSharing!==!1&&(y=k(c==null?void 0:c.data,y)),this.selectResult=y,this.selectError=null}catch(S){A().error(S),this.selectError=S}else y=h.data;if(typeof e.placeholderData<"u"&&typeof y>"u"&&(f==="loading"||f==="idle")){var b;if(c!=null&&c.isPlaceholderData&&e.placeholderData===(l==null?void 0:l.placeholderData))b=c.data;else if(b=typeof e.placeholderData=="function"?e.placeholderData():e.placeholderData,e.select&&typeof b<"u")try{b=e.select(b),e.structuralSharing!==!1&&(b=k(c==null?void 0:c.data,b)),this.selectError=null}catch(S){A().error(S),this.selectError=S}typeof b<"u"&&(f="success",y=b,w=!0)}this.selectError&&(I=this.selectError,y=this.selectResult,x=Date.now(),f="error");var B={status:f,isLoading:f==="loading",isSuccess:f==="success",isError:f==="error",isIdle:f==="idle",data:y,dataUpdatedAt:R,error:I,errorUpdatedAt:x,failureCount:h.fetchFailureCount,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>v.dataUpdateCount||h.errorUpdateCount>v.errorUpdateCount,isFetching:Q,isRefetching:Q&&f!=="loading",isLoadingError:f==="error"&&h.dataUpdatedAt===0,isPlaceholderData:w,isPreviousData:T,isRefetchError:f==="error"&&h.dataUpdatedAt!==0,isStale:E(t,e),refetch:this.refetch,remove:this.remove};return B},s.shouldNotifyListeners=function(t,e){if(!e)return!0;var i=this.options,r=i.notifyOnChangeProps,c=i.notifyOnChangePropsExclusions;if(!r&&!c||r==="tracked"&&!this.trackedProps.length)return!0;var a=r==="tracked"?this.trackedProps:r;return Object.keys(t).some(function(l){var p=l,v=t[p]!==e[p],d=a==null?void 0:a.some(function(R){return R===l}),h=c==null?void 0:c.some(function(R){return R===l});return v&&!h&&(!a||d)})},s.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!K(this.currentResult,e)){var i={cache:!0};(t==null?void 0:t.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,e)&&(i.listeners=!0),this.notify(U({},i,t))}},s.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))}},s.onQueryUpdate=function(t){var e={};t.type==="success"?e.onSuccess=!0:t.type==="error"&&!q(t.error)&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},s.notify=function(t){var e=this;O.batch(function(){t.onSuccess?(e.options.onSuccess==null||e.options.onSuccess(e.currentResult.data),e.options.onSettled==null||e.options.onSettled(e.currentResult.data,null)):t.onError&&(e.options.onError==null||e.options.onError(e.currentResult.error),e.options.onSettled==null||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach(function(i){i(e.currentResult)}),t.cache&&e.client.getQueryCache().notify({query:e.currentQuery,type:"observerResultsUpdated"})})},u}(z);function ue(o,u){return u.enabled!==!1&&!o.state.dataUpdatedAt&&!(o.state.status==="error"&&u.retryOnMount===!1)}function _(o,u){return ue(o,u)||o.state.dataUpdatedAt>0&&C(o,u,u.refetchOnMount)}function C(o,u,s){if(u.enabled!==!1){var n=typeof s=="function"?s(o):s;return n==="always"||n!==!1&&E(o,u)}return!1}function N(o,u,s,n){return s.enabled!==!1&&(o!==u||n.enabled===!1)&&(!s.suspense||o.state.status!=="error")&&E(o,s)}function E(o,u){return o.isStaleByTime(u.staleTime)}function oe(){var o=!1;return{clearReset:function(){o=!1},reset:function(){o=!0},isReset:function(){return o}}}var ce=g.createContext(oe()),le=function(){return g.useContext(ce)};function he(o,u,s){return typeof u=="function"?u.apply(void 0,s):typeof u=="boolean"?u:!!o}function de(o,u){var s=g.useRef(!1),n=g.useState(0),t=n[1],e=G(),i=le(),r=e.defaultQueryObserverOptions(o);r.optimisticResults=!0,r.onError&&(r.onError=O.batchCalls(r.onError)),r.onSuccess&&(r.onSuccess=O.batchCalls(r.onSuccess)),r.onSettled&&(r.onSettled=O.batchCalls(r.onSettled)),r.suspense&&(typeof r.staleTime!="number"&&(r.staleTime=1e3),r.cacheTime===0&&(r.cacheTime=1)),(r.suspense||r.useErrorBoundary)&&(i.isReset()||(r.retryOnMount=!1));var c=g.useState(function(){return new u(e,r)}),a=c[0],l=a.getOptimisticResult(r);if(g.useEffect(function(){s.current=!0,i.clearReset();var p=a.subscribe(O.batchCalls(function(){s.current&&t(function(v){return v+1})}));return a.updateResult(),function(){s.current=!1,p()}},[i,a]),g.useEffect(function(){a.setOptions(r,{listeners:!1})},[r,a]),r.suspense&&l.isLoading)throw a.fetchOptimistic(r).then(function(p){var v=p.data;r.onSuccess==null||r.onSuccess(v),r.onSettled==null||r.onSettled(v,null)}).catch(function(p){i.clearReset(),r.onError==null||r.onError(p),r.onSettled==null||r.onSettled(void 0,p)});if(l.isError&&!i.isReset()&&!l.isFetching&&he(r.suspense,r.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error;return r.notifyOnChangeProps==="tracked"&&(l=a.trackResult(l,r)),l}function fe(o,u,s){var n=J(o,u,s);return de(n,ae)}function pe(){return m("div",{className:"px-20 text-center",children:M("span",{className:"text-center bg-red-400 text-white px-6 py-4 shadow-lg border-2 border-white",children:[m(X,{className:"inline text-white text-2xl"})," Something Went Wrong.."]})})}function ye(o){var v;const[u,s]=Y.useState(!1),{api_safInboxList:n}=ie(),t=Z(),e=[{Header:"#",Cell:({row:d})=>m("div",{className:"pr-2",children:d.index+1})},{Header:"Ward No",accessor:"ward_no"},{Header:"Application No.",accessor:"saf_no"},{Header:"Owner Name",accessor:"owner_name"},{Header:"Connection Type",accessor:"property_type"},{Header:"Action",accessor:"id",Cell:({cell:d})=>m("button",{onClick:()=>t(`/water-tc-verify-form/${d.row.values.id}`),className:`bg-sky-200 px-3 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 \r
                hover:text-white text-black`,children:"View"})}],i=ee(),r=d=>{var h,R;console.log("after fetching inbox list ....",d==null?void 0:d.data),((R=(h=d==null?void 0:d.data)==null?void 0:h.data)==null?void 0:R.length)>0&&s(!0)},{isLoading:c,data:a,isError:l,error:p}=fe("safinboxList",()=>ne.get(n,i),{onSuccess:r,refetchOnWindowFocus:!1,refetchOnReconnect:!1});return M(te,{children:[c&&m(re,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}),m("h1",{className:"font-semibold text-lg mb-10",children:"Water TC Verfication List"}),l&&m(pe,{}),!c&&!l&&u==!1&&"Loading",!c&&!l&&u&&m(se,{assessmentType:!1,columns:e,dataList:(v=a==null?void 0:a.data)==null?void 0:v.data})]})}export{ye as default};
