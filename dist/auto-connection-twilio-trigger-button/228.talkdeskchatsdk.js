"use strict";(self.webpackChunkTalkdeskChatSDK=self.webpackChunkTalkdeskChatSDK||[]).push([[228],{92055:function(e,t,n){n.d(t,{C:function(){return s},ee:function(){return f}});var r=n(26253),o=n(22391),a=n(30717),i="nr@context";let u=(0,r.fP)();var s;u.ee?s=u.ee:(s=ee(void 0,"globalEE"),u.ee=s);var f=ee(void 0,"baseEE");function EventContext(){}function ee(e,t){var n={},r={},u={},s={on:addEventListener,addEventListener:addEventListener,removeEventListener:function removeEventListener(e,t){var r=n[e];if(!r)return;for(var o=0;o<r.length;o++)r[o]===t&&r.splice(o,1)},emit:function emit(t,n,o,a,i){!1!==i&&(i=!0);if(f.aborted&&!a)return;e&&i&&e.emit(t,n,o);for(var u=context(o),c=listeners(t),d=c.length,l=0;l<d;l++)c[l].apply(u,n);var v=getBuffer()[r[t]];v&&v.push([s,t,n,u]);return u},get:function getOrCreate(e){return u[e]=u[e]||ee(s,e)},listeners:listeners,context:context,buffer:function bufferEventsByGroup(e,t){var n=getBuffer();if(s.aborted)return;(0,a.D)(e,(function(e,o){t=t||"feature",r[o]=t,t in n||(n[t]=[])}))},abort:abortIfNotLoaded,aborted:!1,isBuffering:function isBuffering(e){return!!getBuffer()[r[e]]},debugId:t};return e||(s.backlog={}),s;function context(e){return e&&e instanceof EventContext?e:e?(0,o.X)(e,i,getNewContext):getNewContext()}function addEventListener(e,t){n[e]=listeners(e).concat(t)}function listeners(e){return n[e]||[]}function getBuffer(){return e?e.backlog:s.backlog}}function getNewContext(){return new EventContext}function abortIfNotLoaded(){(f.backlog.api||f.backlog.feature)&&(f.aborted=!0,f.backlog={})}},1883:function(e,t,n){n.d(t,{EM:function(){return o},l_:function(){return a},pr:function(){return handle}});var r=n(92055),o=r.ee.get("handle"),a=r.C.get("handle");function handle(e,t,n,r,a){a?(a.buffer([e],r),a.emit(e,t,n)):(o.buffer([e],r),o.emit(e,t,n))}},74137:function(e,t,n){n.d(t,{m:function(){return eventListenerOpts}});var r=!1;try{var o=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}catch(e){}function eventListenerOpts(e){return r?{passive:!0,capture:!!e}:!!e}},83707:function(e,t,n){n.d(t,{W:function(){return FeatureBase}});var r=n(92055);class FeatureBase{constructor(e,t){this.agentIdentifier=e,this.aggregator=t,this.ee=r.ee.get(e)}}},22391:function(e,t,n){n.d(t,{X:function(){return getOrSet}});var r=Object.prototype.hasOwnProperty;function getOrSet(e,t,n){if(r.call(e,t))return e[t];var o=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:o,writable:!0,enumerable:!1}),o}catch(e){}return e[t]=o,o}},75228:function(e,t,n){n.r(t),n.d(t,{Instrument:function(){return Instrument}});var r=n(1883),o=n(41437),a=n(83707),i=n(74137);const u=window,s=u.document,f="addEventListener",c="attachEvent";function stateChange(e){"complete"===s.readyState&&e()}class Instrument extends a.W{constructor(e){super(e),(0,r.pr)("mark",["firstbyte",(0,o.yf)()],null,"api",this.ee),function onWindowLoad(e){s[f]?u[f]("load",e,(0,i.m)(!1)):u[c]("onload",e)}((()=>this.measureWindowLoaded())),function onDOMContentLoaded(e){s[f]?s[f]("DOMContentLoaded",e,(0,i.m)(!1)):s[c]("onreadystatechange",stateChange)}((()=>this.measureDomContentLoaded()))}measureWindowLoaded(){var e=(0,o.zO)();(0,r.pr)("mark",["onload",e+(0,o.os)()],null,"api",this.ee),(0,r.pr)("timing",["load",e],void 0,void 0,this.ee)}measureDomContentLoaded(){(0,r.pr)("mark",["domContent",(0,o.zO)()+(0,o.os)()],null,"api",this.ee)}}}}]);
//# sourceMappingURL=228.talkdeskchatsdk.js.map