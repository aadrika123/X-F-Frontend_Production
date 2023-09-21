import{b4 as h}from"./index-630682df.js";function c(s){Promise.resolve().then(s).catch(function(o){return setTimeout(function(){throw o})})}var f=function(){function s(){this.queue=[],this.transactions=0,this.notifyFn=function(n){n()},this.batchNotifyFn=function(n){n()}}var o=s.prototype;return o.batch=function(t){var i;this.transactions++;try{i=t()}finally{this.transactions--,this.transactions||this.flush()}return i},o.schedule=function(t){var i=this;this.transactions?this.queue.push(t):c(function(){i.notifyFn(t)})},o.batchCalls=function(t){var i=this;return function(){for(var u=arguments.length,e=new Array(u),a=0;a<u;a++)e[a]=arguments[a];i.schedule(function(){t.apply(void 0,e)})}},o.flush=function(){var t=this,i=this.queue;this.queue=[],i.length&&c(function(){t.batchNotifyFn(function(){i.forEach(function(u){t.notifyFn(u)})})})},o.setNotifyFunction=function(t){this.notifyFn=t},o.setBatchNotifyFunction=function(t){this.batchNotifyFn=t},s}(),r=new f,l=h.unstable_batchedUpdates;r.setBatchNotifyFunction(l);
