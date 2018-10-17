!function(e){function t(e){this.parent=e,this.container,this.loadbar,this.percentageContainer,this.spinner}function n(e){this.toPreload=[],this.parent=e,this.container}function i(e){this.element,this.parent=e}function r(i,r){this.element=i,this.$element=e(i),this.options=r,this.foundUrls=[],this.destroyed=!1,this.imageCounter=0,this.imageDone=0,this.alreadyLoaded=!1,this.preloadContainer=new n(this),this.overlayLoader=new t(this),this.defaultOptions={onComplete:function(){},onLoadComplete:function(){},backgroundColor:"#000",barColor:"#fff",overlayId:"qLoverlay",barHeight:1,percentage:!1,deepSearch:!0,completeAnimation:"fade",minimumTime:500},this.init()}!function(e){"use strict";function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define(o):"object"==typeof exports?module.exports=o:e.eventie=o}(this),function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if(e instanceof RegExp){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;t<e.length;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;t<e.length;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if(e instanceof RegExp)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define(function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}.call(this),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){"use strict";function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===u.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),p&&(this.jqDeferred=new p.Deferred);var r=this;setTimeout(function(){r.check()})}function a(e){this.img=e}function h(e){this.src=e,f[e]=this}var p=e.jQuery,c=e.console,d="undefined"!=typeof c,u=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},s.prototype.addImage=function(e){var t=new a(e);this.images.push(t)},s.prototype.check=function(){function e(e){return t.options.debug&&d,t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return void this.complete();for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},p&&(p.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(p(this))}),a.prototype=new t,a.prototype.check=function(){var e=f[this.img.src]||new h(this.img.src);if(e.isConfirmed)return void this.confirm(e.isLoaded,"cached was confirmed");if(this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},a.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var f={};return h.prototype=new t,h.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},h.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},h.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},h.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},h.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},h.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s}),t.prototype.createOverlay=function(){var t="absolute";if("body"==this.parent.element.tagName.toLowerCase())t="fixed";else{var n=this.parent.$element.css("position");("fixed"!=n||"absolute"!=n)&&this.parent.$element.css("position","relative")}this.container=e("<div id='"+this.parent.options.overlayId+"'></div>").css({width:"100%",height:"100%",backgroundColor:this.parent.options.backgroundColor,backgroundPosition:"fixed",position:t,zIndex:666999,top:0,left:0}).appendTo(this.parent.$element),this.loadbar=e("<div id='qLbar'></div>").css({height:this.parent.options.barHeight+"px",marginTop:"-"+this.parent.options.barHeight/2+"px",backgroundColor:this.parent.options.barColor,width:"0%",position:"absolute",top:"50%"}).appendTo(this.container),this.spinner=e(dazzle_load.logo).css({}).appendTo(this.container),1==this.parent.options.percentage&&(this.percentageContainer=e("<div id='qLpercentage'></div>").text("0%").css({height:"40px",width:"100px",position:"absolute",fontSize:"3em",top:"50%",left:"50%",marginTop:"-"+(59+this.parent.options.barHeight)+"px",textAlign:"center",marginLeft:"-50px",color:this.parent.options.barColor}).appendTo(this.container))},t.prototype.updatePercentage=function(e){this.loadbar.stop().animate({width:e+"%",minWidth:e+"%"},200),1==this.parent.options.percentage&&this.percentageContainer.text(Math.ceil(e)+"%")},n.prototype.create=function(){this.container=e("<div></div>").appendTo("body").css({display:"none",width:0,height:0,overflow:"hidden"}),this.processQueue()},n.prototype.processQueue=function(){for(var e=0;this.toPreload.length>e;e++)this.parent.destroyed||this.preloadImage(this.toPreload[e])},n.prototype.addImage=function(e){this.toPreload.push(e)},n.prototype.preloadImage=function(e){var t=new i;t.addToPreloader(this,e),t.bindLoadEvent()},i.prototype.addToPreloader=function(t,n){this.element=e("<img />").attr("src",n),this.element.appendTo(t.container),this.parent=t.parent},i.prototype.bindLoadEvent=function(){this.parent.imageCounter++,this.element[0].ref=this,new imagesLoaded(this.element,function(e){e.elements[0].ref.completeLoading()})},i.prototype.completeLoading=function(){this.parent.imageDone++;var e=this.parent.imageDone/this.parent.imageCounter*100;this.parent.overlayLoader.updatePercentage(e),(this.parent.imageDone==this.parent.imageCounter||e>=100)&&this.parent.endLoader()},r.prototype.init=function(){this.options=e.extend({},this.defaultOptions,this.options);this.findImageInElement(this.element);if(1==this.options.deepSearch)for(var t=this.$element.find("*:not(script)"),n=0;n<t.length;n++)this.findImageInElement(t[n]);this.preloadContainer.create(),this.overlayLoader.createOverlay()},r.prototype.findImageInElement=function(t){var n="",r=e(t),o="normal";if("none"!=r.css("background-image")?(n=r.css("background-image"),o="background"):"undefined"!=typeof r.attr("src")&&"img"==t.nodeName.toLowerCase()&&(n=r.attr("src")),!this.hasGradient(n)){n=this.stripUrl(n);for(var s=n.split(", "),a=0;a<s.length;a++)if(this.validUrl(s[a])&&this.urlIsNew(s[a])){var h="";if(this.isIE()||this.isOpera())h="?rand="+Math.random(),this.preloadContainer.addImage(s[a]+h);else if("background"==o)this.preloadContainer.addImage(s[a]+h);else{var p=new i(this);p.element=r,p.bindLoadEvent()}this.foundUrls.push(s[a])}}},r.prototype.hasGradient=function(e){return-1==e.indexOf("gradient")?!1:!0},r.prototype.stripUrl=function(e){return e=e.replace(/url\(\"/g,""),e=e.replace(/url\(/g,""),e=e.replace(/\"\)/g,""),e=e.replace(/\)/g,"")},r.prototype.isIE=function(){return navigator.userAgent.match(/msie/i)},r.prototype.isOpera=function(){return navigator.userAgent.match(/Opera/i)},r.prototype.validUrl=function(e){return e.length>0&&!e.match(/^(data:)/i)?!0:!1},r.prototype.urlIsNew=function(e){return-1==this.foundUrls.indexOf(e)?!0:!1},r.prototype.destroyContainers=function(){this.destroyed=!0,this.preloadContainer.container.remove(),this.overlayLoader.container.remove()},r.prototype.endLoader=function(){this.destroyed=!0,this.onLoadComplete()},r.prototype.onLoadComplete=function(){if(this.options.onLoadComplete(),"grow"==this.options.completeAnimation){var t=this.options.minimumTime;this.overlayLoader.loadbar[0].parent=this,this.overlayLoader.loadbar.stop().animate({width:"100%"},t,function(){e(this).animate({top:"0%",width:"100%",height:"100%"},500,function(){this.parent.overlayLoader.container[0].parent=this.parent,this.parent.overlayLoader.container.fadeOut(500,function(){this.parent.destroyContainers(),this.parent.options.onComplete()})})})}else{var t=this.options.minimumTime;this.overlayLoader.container[0].parent=this,this.overlayLoader.container.fadeOut(t,function(){this.parent.destroyContainers(),this.parent.options.onComplete()})}},Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var t=this.length>>>0,n=Number(arguments[1])||0;for(n=0>n?Math.ceil(n):Math.floor(n),0>n&&(n+=t);t>n;n++)if(n in this&&this[n]===e)return n;return-1}),e.fn.queryLoader2=function(e){return this.each(function(){new r(this,e)})}}(jQuery);