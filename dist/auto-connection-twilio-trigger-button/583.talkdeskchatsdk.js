"use strict";(self.webpackChunkTalkdeskChatSDK=self.webpackChunkTalkdeskChatSDK||[]).push([[583],{21879:function(t,e,i){i.d(e,{XN:function(){return defaultRegister},rP:function(){return defaultRegister}});var s=i(1883);defaultRegister.on=registerWithSpecificEmitter;var r=defaultRegister.handlers={},n=function globalRegister(t,e,i){registerWithSpecificEmitter(s.l_,n,t,e,i)}.handlers={};function defaultRegister(t,e,i,n){registerWithSpecificEmitter(n||s.EM,r,t,e,i)}function registerWithSpecificEmitter(t,e,i,r,n){if(n||(n="feature"),t||(t=s.EM),t.isBuffering(i)){var a=e[n]=e[n]||{};(a[i]=a[i]||[]).push([t,r])}else t.on(i,r)}},47916:function(t,e,i){i.d(e,{AG:function(){return nullable},FX:function(){return getAddStringContext},n1:function(){return addCustomAttributes},uR:function(){return numeric}});var s=i(30717),r=i(89247),n=i(98065),a=Object.prototype.hasOwnProperty,l=64;function nullable(t,e,i){return t||0===t||""===t?e(t)+(i?",":""):"!"}function numeric(t,e){return e?Math.floor(t).toString(36):void 0===t||0===t?"":Math.floor(t).toString(36)}function getAddStringContext(t){var e=Object.hasOwnProperty("create")?Object.create(null):{},i=0;return function addString(s){if(void 0===s||""===s)return"";var r=new n.R({agentIdentifier:t});s=String(s),r.shouldObfuscate()&&(s=r.obfuscateString(s));return a.call(e,s)?numeric(e[s],!0):(e[s]=i++,function quoteString(t){return"'"+t.replace(h,"\\$1")}(s))}}function addCustomAttributes(t,e){var i=[];return(0,s.D)(t,(function(t,s){if(!(i.length>=l)){var n,a=5;switch(t=e(t),typeof s){case"object":s?n=e((0,r.P)(s)):a=9;break;case"number":a=6,n=s%1?s:s+".";break;case"boolean":a=s?7:8;break;case"undefined":a=9;break;default:n=e(s)}i.push([a,t+(n?","+n:"")])}})),i}var h=/([,\\;])/g},73583:function(t,e,i){i.r(e),i.d(e,{Aggregate:function(){return Aggregate}});var s=i(47916),r=i(41437),n=i(30717),a=i(46303),l=i(21879),h=i(77311),o=i(1883),c=i(25768),d=i(83707);class Aggregate extends d.W{constructor(t,e){super(t,e),this.timings=[],this.timingsSent=[],this.lcpRecorded=!1,this.lcp=null,this.clsSupported=!1,this.cls=0,this.clsSession={value:0,firstEntryTime:0,lastEntryTime:0},this.pageHideRecorded=!1,this.harvestTimeSeconds=30;try{clsSupported=PerformanceObserver.supportedEntryTypes.includes("layout-shift")}catch(t){}this.options||(this.options={});var i=this.options.maxLCPTimeSeconds||60,s=this.options.initialHarvestSeconds||10;this.harvestTimeSeconds=this.options.harvestTimeSeconds||30,this.scheduler=new a.o("events",{onFinished:(...t)=>this.onHarvestFinished(...t),getPayload:(...t)=>this.prepareHarvest(...t),onUnload:()=>this.finalHarvest()},this),(0,l.rP)("timing",((...t)=>this.processTiming(...t)),void 0,this.ee),(0,l.rP)("lcp",((...t)=>this.updateLatestLcp(...t)),void 0,this.ee),(0,l.rP)("cls",((...t)=>this.updateClsScore(...t)),void 0,this.ee),(0,l.rP)("pageHide",((...t)=>this.updatePageHide(...t)),void 0,this.ee),setTimeout((()=>{this.recordLcp(),this.lcpRecorded=!0}),1e3*i),this.scheduler.startTimer(this.harvestTimeSeconds,s)}recordLcp(){if(!this.lcpRecorded&&null!==this.lcp){var t=this.lcp[0],e=this.lcp[1],i=this.lcp[2],s={size:t.size,eid:t.id};i&&(i["net-type"]&&(s["net-type"]=i["net-type"]),i["net-etype"]&&(s["net-etype"]=i["net-etype"]),i["net-rtt"]&&(s["net-rtt"]=i["net-rtt"]),i["net-dlink"]&&(s["net-dlink"]=i["net-dlink"])),t.url&&(s.elUrl=(0,h.f)(t.url)),t.element&&t.element.tagName&&(s.elTag=t.element.tagName),(e>0||this.clsSupported)&&(s.cls=e),this.addTiming("lcp",Math.floor(t.startTime),s,!1),this.lcpRecorded=!0}}updateLatestLcp(t,e){if(this.lcp&&this.lcp[0].size>=t.size)return;this.lcp=[t,this.cls,e]}updateClsScore(t){(t.startTime-this.clsSession.lastEntryTime>1e3||t.startTime-this.clsSession.firstEntryTime>5e3)&&(this.clsSession={value:0,firstEntryTime:t.startTime,lastEntryTime:t.startTime}),this.clsSession.value+=t.value,this.clsSession.lastEntryTime=Math.max(this.clsSession.lastEntryTime,t.startTime),this.cls<this.clsSession.value&&(this.cls=this.clsSession.value)}updatePageHide(t){this.pageHideRecorded||(this.addTiming("pageHide",t,null,!0),this.pageHideRecorded=!0)}recordUnload(){this.updatePageHide((0,r.zO)()),this.addTiming("unload",(0,r.zO)(),null,!0)}addTiming(t,e,i,s){i=i||{},(this.cls>0||this.clsSupported)&&s&&(i.cls=this.cls),this.timings.push({name:t,value:e,attrs:i}),(0,o.pr)("pvtAdded",[t,e,i])}processTiming(t,e,i){"fi"===t&&setTimeout(this.recordLcp,0),this.addTiming(t,e,i,!0)}onHarvestFinished(t){if(t.retry&&this.timingsSent.length>0){for(var e=0;e<this.timingsSent.length;e++)this.timings.push(this.timingsSent[e]);this.timingsSent=[]}}finalHarvest(){this.recordLcp(),this.recordUnload();var t=this.prepareHarvest({retry:!1});this.scheduler.harvest.send("events",t,{unload:!0})}appendGlobalCustomAttributes(t){var e=t.attrs||{},i=(0,c.C)(this.agentIdentifier).jsAttributes||{},s=["size","eid","cls","type","fid","elTag","elUrl","net-type","net-etype","net-rtt","net-dlink"];(0,n.D)(i,(function(t,i){s.indexOf(t)<0&&(e[t]=i)}))}prepareHarvest(t){if(0!==this.timings.length){var e=this.getPayload(this.timings);if(t.retry)for(var i=0;i<this.timings.length;i++)this.timingsSent.push(this.timings[i]);return this.timings=[],{body:{e:e}}}}getPayload(t){for(var e=(0,s.FX)(),i="bel.6;",r=0;r<t.length;r++){var n=t[r];i+="e,",i+=e(n.name)+",",i+=(0,s.AG)(n.value,s.uR,!1)+",",this.appendGlobalCustomAttributes(n);var a=(0,s.n1)(n.attrs,e);a&&a.length>0&&(i+=(0,s.uR)(a.length)+";"+a.join(";")),r+1<t.length&&(i+=";")}return i}}}}]);
//# sourceMappingURL=583.talkdeskchatsdk.js.map