var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(g){var window=this;'use strict';var m$a=function(a,b){this.u=a>>>0;this.j=b>>>0},o$a=function(a){if(!a)return n$a||(n$a=new m$a(0,0));
if(!/^\d+$/.test(a))return null;g.wba(a);return new m$a(g.$d,g.ae)},p$a=function(a,b,c){null!=c&&("string"===typeof c&&o$a(c),g.Fe(a,b,1),"number"===typeof c?(a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.$d=b,g.ae=c,g.De(a,g.$d),g.De(a,g.ae)):(c=o$a(c),a=a.j,b=c.j,g.De(a,c.u),g.De(a,b)))},q$a=function(a,b,c){b=g.lba(b,c);
null!=b&&(g.Fe(a,c,0),a.j.j.push(b?1:0))},r$a=function(a,b){b=b instanceof g.jg?b:g.pg(b,/^data:image\//i.test(b));
a.src=g.mg(b)},t$a=function(a){g.I.call(this,a,-1,s$a)},u$a=function(a){g.I.call(this,a)},v$a=function(a){g.I.call(this,a)},w$a=function(a){g.I.call(this,a)},x$a=function(a){g.I.call(this,a)},Y7=function(a){g.Fj(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Ta()).toString(36));
return a},Z7=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Ufa(a.u,b,c)},y$a=function(a){if(a instanceof g.pm)return a;
if("function"==typeof a.aj)return a.aj(!1);if(g.Ma(a)){var b=0,c=new g.pm;c.next=function(){for(;;){if(b>=a.length)return g.D3;if(b in a)return g.qm(a[b++]);b++}};
return c}throw Error("Not implemented");},z$a=function(a,b,c){if(g.Ma(a))g.qc(a,b,c);
else for(a=y$a(a);;){var d=a.next();if(d.done)break;b.call(c,d.value,void 0,a)}},A$a=function(a,b){var c=[];
z$a(b,function(d){try{var e=g.Do.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Cka(e)&&c.push(d)},a);
return c},B$a=function(a,b){A$a(a,b).forEach(function(c){g.Do.prototype.remove.call(this,c)},a)},C$a=function(a){if(a.V){if(a.V.locationOverrideToken)return{locationOverrideToken:a.V.locationOverrideToken};
if(null!=a.V.latitudeE7&&null!=a.V.longitudeE7)return{latitudeE7:a.V.latitudeE7,longitudeE7:a.V.longitudeE7}}return null},D$a=function(a,b){g.Ub(a,b)||a.push(b)},E$a=function(a){var b=0,c;
for(c in a)b++;return b},F$a=function(a,b){return g.wf(a,b)},G$a=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},$7=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return G$a(a)},H$a=function(a,b,c,d){var e=new g.xj(null);
a&&g.yj(e,a);b&&g.zj(e,b);c&&g.Aj(e,c);d&&(e.J=d);return e},a8=function(a,b){g.yx[a]=!0;
var c=g.wx();c&&c.publish.apply(c,arguments);g.yx[a]=!1},b8=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.mo;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",I$a(this,a.capabilities||""),J$a(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},I$a=function(a,b){a.capabilities.clear();
g.um(b.split(","),g.Sa(F$a,K$a)).forEach(function(c){a.capabilities.add(c)})},J$a=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},c8=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},d8=function(a,b){return!!b&&(a.id==b||a.uuid==b)},L$a=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},M$a=function(a){return new c8(a)},N$a=function(a){return Array.isArray(a)?g.Lk(a,M$a):[]},e8=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},O$a=function(a){return Array.isArray(a)?"["+g.Lk(a,e8).join(",")+"]":"null"},P$a=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},Q$a=function(a){return g.Lk(a,function(b){return{key:b.id,
name:b.name}})},R$a=function(a,b){return g.Sb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},f8=function(a,b){return g.Sb(a,function(c){return d8(c,b)})},S$a=function(){var a=(0,g.xz)();
a&&B$a(a,a.j.aj(!0))},g8=function(){var a=g.Az("yt-remote-connected-devices")||[];
g.nc(a);return a},T$a=function(a){if(g.Vb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Lk(a,function(d,e){return 0==e?d:d.substring(c.length)})},U$a=function(a){g.zz("yt-remote-connected-devices",a,86400)},h8=function(){if(V$a)return V$a;
var a=g.Az("yt-remote-device-id");a||(a=P$a(),g.zz("yt-remote-device-id",a,31536E3));for(var b=g8(),c=1,d=a;g.Ub(b,d);)c++,d=a+"#"+c;return V$a=d},W$a=function(){var a=g8(),b=h8();
g.Cz()&&g.pc(a,b);a=T$a(a);if(g.Vb(a))try{g.oma("remote_sid")}catch(c){}else try{g.vu("remote_sid",a.join(","),-1)}catch(c){}},X$a=function(){return g.Az("yt-remote-session-browser-channel")},Y$a=function(){return g.Az("yt-remote-local-screens")||[]},Z$a=function(){g.zz("yt-remote-lounge-token-expiration",!0,86400)},$$a=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Lk(Y$a(),function(d){return d.loungeToken}),c=g.Lk(a,function(d){return d.loungeToken});
g.Mk(c,function(d){return!g.Ub(b,d)})&&Z$a();
g.zz("yt-remote-local-screens",a,31536E3)},i8=function(a){a||(g.Bz("yt-remote-session-screen-id"),g.Bz("yt-remote-session-video-id"));
W$a();a=g8();g.Yb(a,h8());U$a(a)},aab=function(){if(!j8){var a=g.Mo();
a&&(j8=new g.Ao(a))}},bab=function(){aab();
return j8?!!j8.get("yt-remote-use-staging-server"):!1},cab=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},dab=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},eab=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},k8=function(a){a.length?fab(a.shift(),function(){k8(a)}):gab()},hab=function(a){return"chrome-extension://"+a+"/cast_sender.js"},fab=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Wi(d,g.hg(a));(document.head||document.documentElement).appendChild(d)},iab=function(){var a=cab(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20220720144237/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20220720144237/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},gab=function(){var a=eab();
a&&a(!1,"No cast extension found")},kab=function(){if(jab){var a=2,b=eab(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;fab("//web.archive.org/web/20220720144237/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",gab,c)}},lab=function(){kab();
var a=iab();a.push("//web.archive.org/web/20220720144237/https://www.gstatic.com/eureka/clank/cast_sender.js");k8(a)},nab=function(){kab();
var a=iab();a.push.apply(a,g.t(mab.map(hab)));a.push("//web.archive.org/web/20220720144237/https://www.gstatic.com/eureka/clank/cast_sender.js");k8(a)},oab=function(){this.j=l8();
this.j.ep("/client_streamz/youtube/living_room/mdx/channel/opened",{Lh:3,Kh:"channel_type"})},pab=function(a,b){a.j.Tq("/client_streamz/youtube/living_room/mdx/channel/opened",b)},qab=function(){this.j=l8();
this.j.ep("/client_streamz/youtube/living_room/mdx/channel/closed",{Lh:3,Kh:"channel_type"})},rab=function(a,b){a.j.Tq("/client_streamz/youtube/living_room/mdx/channel/closed",b)},sab=function(){this.j=l8();
this.j.ep("/client_streamz/youtube/living_room/mdx/channel/message_received",{Lh:3,Kh:"channel_type"})},tab=function(a,b){a.j.Tq("/client_streamz/youtube/living_room/mdx/channel/message_received",b)},uab=function(){this.j=l8();
this.j.ep("/client_streamz/youtube/living_room/mdx/channel/error",{Lh:3,Kh:"channel_type"})},vab=function(a,b){a.j.Tq("/client_streamz/youtube/living_room/mdx/channel/error",b)},wab=function(){this.j=l8();
this.j.ep("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},xab=function(){this.j=l8();
this.j.ep("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},m8=function(a,b,c){g.K.call(this);
this.I=null!=c?(0,g.Ra)(a,c):a;this.oh=b;this.D=(0,g.Ra)(this.qU,this);this.j=!1;this.u=0;this.B=this.qc=null;this.C=[]},n8=function(a,b,c){g.K.call(this);
this.C=null!=c?a.bind(c):a;this.oh=b;this.B=null;this.j=!1;this.u=0;this.qc=null},yab=function(a){a.qc=g.Gh(function(){a.qc=null;
a.j&&!a.u&&(a.j=!1,yab(a))},a.oh);
var b=a.B;a.B=null;a.C.apply(null,b)},o8=function(){},zab=function(){g.gf.call(this,"p")},Aab=function(){g.gf.call(this,"o")},Bab=function(){var a=new g.C.TextEncoder;
return new g.C.ReadableStream({start:function(b){for(var c=g.r(["test\r\n","test\r\n"]),d=c.next();!d.done;d=c.next())b.enqueue(a.encode(d.value));b.close()}})},Cab=function(a){return(a=/\/\/([^\/]+)\//.exec(a))?a[1].endsWith("google.com"):!1},Eab=function(a,b){if(!Dab){Dab=!0;
var c;a:{if(c=g.C.navigator)if(c=c.userAgent)break a;c=""}(-1==c.indexOf("Chrome")||-1!=c.indexOf("Edg")?0:90<=parseInt(/Chrome\/(\d+)/.exec(c)[1],10))&&Cab(a)&&window&&window.document&&Cab(window.document.URL)&&(c=document.createElement("meta"),c.httpEquiv="origin-trial",c.content="A0eNbltY1nd4MP7XTHXnTxWogDL6mWTdgIIKfKOTJoUHNbFFMZQBoiHHjJ9UK9lgYndWFaxOWR7ld8uUjcWmcwIAAAB/eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkZldGNoVXBsb2FkU3RyZWFtaW5nIiwiZXhwaXJ5IjoxNjM2NTAyMzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
document.head.appendChild(c),(new Request("",{body:new ReadableStream,method:"POST"})).headers.has("Content-Type")||(g.C.fetch(a+"?ot=1",{method:"POST",body:"test\r\n"}).catch(b),g.C.fetch(a+"?ot=2",{method:"POST",body:Bab(),LW:!1}).catch(b),g.C.fetch(a+"?ot=3",{method:"POST",body:Bab(),LW:!0}).catch(b)))}},Gab=function(){return Fab=Fab||new g.Qf},Hab=function(a){g.gf.call(this,"serverreachability",a)},p8=function(a){var b=Gab();
b.dispatchEvent(new Hab(b,a))},Iab=function(a,b){g.gf.call(this,"statevent",a);
this.stat=b},q8=function(a){var b=Gab();
b.dispatchEvent(new Iab(b,a))},Jab=function(a,b,c,d){g.gf.call(this,"timingevent",a);
this.size=b;this.lw=d},r8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},Kab=function(){},s8=function(a,b,c,d){this.D=a;
this.C=b;this.Kc=c;this.Jc=d||1;this.eb=new g.Kj(this);this.tb=45E3;a=g.XF?125:void 0;this.gb=new g.Fh(a);this.Ha=null;this.B=!1;this.N=this.Wa=this.J=this.La=this.qa=this.Fb=this.V=null;this.Y=[];this.j=null;this.W=0;this.I=this.ra=null;this.Nb=-1;this.Ea=!1;this.xb=0;this.Ta=null;this.yc=this.Sa=this.pc=this.va=!1;this.u=new Lab},Lab=function(){this.B=null;
this.j="";this.u=!1},Nab=function(a,b,c){a.La=1;
a.J=Y7(b.clone());a.N=c;a.va=!0;Mab(a,null)},Mab=function(a,b){a.qa=Date.now();
t8(a);a.Wa=a.J.clone();Z7(a.Wa,"t",a.Jc);a.W=0;var c=a.D.La;a.u=new Lab;a.j=Oab(a.D,c?b:null,!a.N);0<a.xb&&(a.Ta=new n8((0,g.Ra)(a.IL,a,a.j),a.xb));a.eb.Ma(a.j,"readystatechange",a.tU);b=a.Ha?g.Cf(a.Ha):{};a.N?(a.ra||(a.ra="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.j.send(a.Wa,a.ra,a.N,b)):(a.ra="GET",a.j.send(a.Wa,a.ra,null,b));p8(1)},Pab=function(a){return a.j?"GET"==a.ra&&2!=a.La&&a.D.De:!1},Uab=function(a,b,c){for(var d=!0,e;!a.Ea&&a.W<c.length;)if(e=Qab(a,c),e==u8){4==b&&
(a.I=4,q8(14),d=!1);
break}else if(e==Rab){a.I=4;q8(15);d=!1;break}else Sab(a,e);Pab(a)&&e!=u8&&e!=Rab&&(a.u.j="",a.W=0);4!=b||0!=c.length||a.u.u||(a.I=1,q8(16),d=!1);a.B=a.B&&d;d?0<c.length&&!a.yc&&(a.yc=!0,a.D.eJ(a)):(v8(a),w8(a))},Qab=function(a,b){var c=a.W,d=b.indexOf("\n",c);
if(-1==d)return u8;c=Number(b.substring(c,d));if(isNaN(c))return Rab;d+=1;if(d+c>b.length)return u8;b=b.slice(d,d+c);a.W=d+c;return b},t8=function(a){a.Fb=Date.now()+a.tb;
Vab(a,a.tb)},Vab=function(a,b){if(null!=a.V)throw Error("WatchDog timer not null");
a.V=r8((0,g.Ra)(a.rU,a),b)},x8=function(a){a.V&&(g.C.clearTimeout(a.V),a.V=null)},w8=function(a){a.D.Mf()||a.Ea||Wab(a.D,a)},v8=function(a){x8(a);
g.cf(a.Ta);a.Ta=null;a.gb.stop();g.Lj(a.eb);if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}},Sab=function(a,b){try{var c=a.D;
if(0!=c.og&&(c.j==a||Xab(c.u,a)))if(!a.Sa&&Xab(c.u,a)&&3==c.og){try{var d=c.Ee.j.parse(b)}catch(A){d=null}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.N){if(c.j)if(c.j.qa+3E3<a.qa)y8(c),z8(c);else break a;Yab(c);q8(18)}}else c.Gd=e[1],0<c.Gd-c.Sa&&37500>e[2]&&c.gb&&0==c.Y&&!c.W&&(c.W=r8((0,g.Ra)(c.uU,c),6E3));if(1>=Zab(c.u)&&c.Vc){try{c.Vc()}catch(A){}c.Vc=void 0}}else A8(c,11)}else if((a.Sa||c.j==a)&&y8(c),!g.ib(b))for(e=c.Ee.j.parse(b),b=0;b<e.length;b++){var f=e[b];c.Sa=f[0];f=
f[1];if(2==c.og)if("c"==f[0]){c.C=f[1];c.yc=f[2];var h=f[3];null!=h&&(c.JL=h);var l=f[5];null!=l&&"number"===typeof l&&0<l&&(c.Wa=1.5*l);d=c;var m=a.j;if(m){var n=g.yi(m,"X-Client-Wire-Protocol");if(n){var p=d.u;!p.j&&(g.lb(n,"spdy")||g.lb(n,"quic")||g.lb(n,"h2"))&&(p.C=p.D,p.j=new Set,p.u&&($ab(p,p.u),p.u=null))}if(d.va){var q=g.yi(m,"X-HTTP-Session-Id");q&&(d.fh=q,g.Fj(d.Ha,d.va,q))}}c.og=3;c.D&&c.D.PL();c.Qc&&(c.kd=Date.now()-a.qa);d=c;var u=a;d.qd=abb(d,d.La?d.yc:null,d.Jc);if(u.Sa){bbb(d.u,u);
var w=u,y=d.Wa;y&&w.setTimeout(y);w.V&&(x8(w),t8(w));d.j=u}else cbb(d);0<c.B.length&&B8(c)}else"stop"!=f[0]&&"close"!=f[0]||A8(c,7);else 3==c.og&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?A8(c,7):c.disconnect():"noop"!=f[0]&&c.D&&c.D.OL(f),c.Y=0)}p8(4)}catch(A){}},dbb=function(a,b){this.j=a;
this.map=b;this.context=null},ebb=function(a){this.D=a||10;
g.C.PerformanceNavigationTiming?(a=g.C.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(g.C.chrome&&g.C.chrome.loadTimes&&g.C.chrome.loadTimes()&&g.C.chrome.loadTimes().wasFetchedViaSpdy);this.C=a?this.D:1;this.j=null;1<this.C&&(this.j=new Set);this.u=null;this.B=[]},fbb=function(a){return a.u?!0:a.j?a.j.size>=a.C:!1},Zab=function(a){return a.u?1:a.j?a.j.size:0},Xab=function(a,b){return a.u?a.u==b:a.j?a.j.has(b):!1},$ab=function(a,
b){a.j?a.j.add(b):a.u=b},bbb=function(a,b){a.u&&a.u==b?a.u=null:a.j&&a.j.has(b)&&a.j.delete(b)},gbb=function(a){if(null!=a.u)return a.B.concat(a.u.Y);
if(null!=a.j&&0!==a.j.size){var b=a.B;a=g.r(a.j.values());for(var c=a.next();!c.done;c=a.next())b=b.concat(c.value.Y);return b}return g.ac(a.B)},hbb=function(a,b){var c=new Kab;
if(g.C.Image){var d=new Image;d.onload=g.Sa(C8,c,d,"TestLoadImage: loaded",!0,b);d.onerror=g.Sa(C8,c,d,"TestLoadImage: error",!1,b);d.onabort=g.Sa(C8,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=g.Sa(C8,c,d,"TestLoadImage: timeout",!1,b);g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);
d.src=a}else b(!1)},C8=function(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}},ibb=function(){this.j=new o8},jbb=function(a,b,c){var d=c||"";
try{g.wj(a,function(e,f){var h=e;g.Na(e)&&(h=g.ai(e));b.push(d+f+"="+encodeURIComponent(h))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;
}},D8=function(a,b,c){return c&&c.iZ?c.iZ[a]||b:b},kbb=function(a){this.B=[];
this.yc=this.qd=this.Ha=this.Jc=this.j=this.fh=this.va=this.Ea=this.J=this.Fb=this.V=null;this.Ne=this.Ta=0;this.Le=D8("failFast",!1,a);this.gb=this.W=this.N=this.I=this.D=null;this.Kc=!0;this.Hd=this.Gd=this.Sa=-1;this.pc=this.Y=this.qa=0;this.Ke=D8("baseRetryDelayMs",5E3,a);this.Ze=D8("retryDelaySeedMs",1E4,a);this.Me=D8("forwardChannelMaxRetries",2,a);this.Bd=D8("forwardChannelRequestTimeoutMs",2E4,a);this.Pd=a&&a.k1a||void 0;this.De=a&&a.i1a||!1;this.Wa=void 0;this.La=a&&a.x4||!1;this.C="";this.u=
new ebb(a&&a.V_a);this.Ee=new ibb;this.tb=a&&a.k0a||!1;this.xb=a&&a.c0a||!1;this.tb&&this.xb&&(this.xb=!1);this.bf=a&&a.P_a||!1;a&&a.m0a&&(this.Kc=!1);this.Qc=!this.tb&&this.Kc&&a&&a.Z_a||!1;this.Vc=void 0;this.kd=0;this.eb=!1;this.ra=null;this.gi=!a||!1!==a.b0a;this.Nb=null},z8=function(a){a.j&&(lbb(a),a.j.cancel(),a.j=null)},mbb=function(a){z8(a);
a.N&&(g.C.clearTimeout(a.N),a.N=null);y8(a);a.u.cancel();a.I&&("number"===typeof a.I&&g.C.clearTimeout(a.I),a.I=null)},B8=function(a){fbb(a.u)||a.I||(a.I=!0,g.wh(a.LL,a),a.qa=0)},obb=function(a,b){if(Zab(a.u)>=a.u.C-(a.I?1:0))return!1;
if(a.I)return a.B=b.Y.concat(a.B),!0;if(1==a.og||2==a.og||a.qa>=(a.Le?0:a.Me))return!1;a.I=r8((0,g.Ra)(a.LL,a,b),nbb(a,a.qa));a.qa++;return!0},qbb=function(a,b){var c;
b?c=b.Kc:c=a.Ta++;var d=a.Ha.clone();g.Fj(d,"SID",a.C);g.Fj(d,"RID",c);g.Fj(d,"AID",a.Sa);E8(a,d);a.J&&a.V&&g.Jj(d,a.J,a.V);c=new s8(a,a.C,c,a.qa+1);null===a.J&&(c.Ha=a.V);b&&(a.B=b.Y.concat(a.B));b=pbb(a,c,1E3);c.setTimeout(Math.round(.5*a.Bd)+Math.round(.5*a.Bd*Math.random()));$ab(a.u,c);Nab(c,d,b)},E8=function(a,b){a.Ea&&g.nf(a.Ea,function(c,d){g.Fj(b,d,c)});
a.D&&g.wj({},function(c,d){g.Fj(b,d,c)})},pbb=function(a,b,c){c=Math.min(a.B.length,c);
var d=a.D?(0,g.Ra)(a.D.vU,a.D,a):null;a:for(var e=a.B,f=-1;;){var h=["count="+c];-1==f?0<c?(f=e[0].j,h.push("ofs="+f)):f=0:h.push("ofs="+f);for(var l=!0,m=0;m<c;m++){var n=e[m].j,p=e[m].map;n-=f;if(0>n)f=Math.max(0,e[m].j-100),l=!1;else try{jbb(p,h,"req"+n+"_")}catch(q){d&&d(p)}}if(l){d=h.join("&");break a}}a=a.B.splice(0,c);b.Y=a;return d},cbb=function(a){a.j||a.N||(a.pc=1,g.wh(a.KL,a),a.Y=0)},Yab=function(a){if(a.j||a.N||3<=a.Y)return!1;
a.pc++;a.N=r8((0,g.Ra)(a.KL,a),nbb(a,a.Y));a.Y++;return!0},lbb=function(a){null!=a.ra&&(g.C.clearTimeout(a.ra),a.ra=null)},rbb=function(a){a.j=new s8(a,a.C,"rpc",a.pc);
null===a.J&&(a.j.Ha=a.V);a.j.xb=0;var b=a.qd.clone();g.Fj(b,"RID","rpc");g.Fj(b,"SID",a.C);g.Fj(b,"CI",a.gb?"0":"1");g.Fj(b,"AID",a.Sa);g.Fj(b,"TYPE","xmlhttp");E8(a,b);a.J&&a.V&&g.Jj(b,a.J,a.V);a.Wa&&a.j.setTimeout(a.Wa);var c=a.j;a=a.yc;c.La=1;c.J=Y7(b.clone());c.N=null;c.va=!0;Mab(c,a)},y8=function(a){null!=a.W&&(g.C.clearTimeout(a.W),a.W=null)},Wab=function(a,b){var c=null;
if(a.j==b){y8(a);lbb(a);a.j=null;var d=2}else if(Xab(a.u,b))c=b.Y,bbb(a.u,b),d=1;else return;if(0!=a.og)if(a.Hd=b.Nb,b.B)if(1==d){c=b.N?b.N.length:0;b=Date.now()-b.qa;var e=a.qa;d=Gab();d.dispatchEvent(new Jab(d,c,b,e));B8(a)}else cbb(a);else if(e=b.getLastError(),3==e||0==e&&0<a.Hd||!(1==d&&obb(a,b)||2==d&&Yab(a)))switch(c&&0<c.length&&(b=a.u,b.B=b.B.concat(c)),e){case 1:A8(a,5);break;case 4:A8(a,10);break;case 3:A8(a,6);break;default:A8(a,2)}},nbb=function(a,b){var c=a.Ke+Math.floor(Math.random()*
a.Ze);
a.isActive()||(c*=2);return c*b},A8=function(a,b){if(2==b){var c=null;
a.D&&(c=null);var d=(0,g.Ra)(a.G4,a);c||(c=new g.xj("//web.archive.org/web/20220720144237/https://www.google.com/images/cleardot.gif"),g.C.location&&"http"==g.C.location.protocol||g.yj(c,"https"),Y7(c));hbb(c.toString(),d)}else q8(2);a.og=0;a.D&&a.D.NL(b);sbb(a);mbb(a)},sbb=function(a){a.og=0;
a.Nb=[];if(a.D){var b=gbb(a.u);if(0!=b.length||0!=a.B.length)g.bc(a.Nb,b),g.bc(a.Nb,a.B),a.u.B.length=0,g.ac(a.B),a.B.length=0;a.D.ML()}},tbb=function(a){if(0==a.og)return a.Nb;
var b=[];g.bc(b,gbb(a.u));g.bc(b,a.B);return b},abb=function(a,b,c){var d=g.Gj(c);
""!=d.j?(b&&g.zj(d,b+"."+d.j),g.Aj(d,d.B)):(d=g.C.location,d=H$a(d.protocol,b?b+"."+d.hostname:d.hostname,+d.port,c));b=a.va;c=a.fh;b&&c&&g.Fj(d,b,c);g.Fj(d,"VER",a.JL);E8(a,d);return d},Oab=function(a,b,c){if(b&&!a.La)throw Error("Can't create secondary domain capable XhrIo object.");
b=c&&a.De&&!a.Pd?new g.ri(new g.oj({tS:!0})):new g.ri(a.Pd);b.J=a.La;return b},ubb=function(){},vbb=function(){if(g.Cc&&!g.zc(10))throw Error("Environmental error: no available transport.");
},G8=function(a,b){g.Qf.call(this);
this.j=new kbb(b);this.I=a;this.u=b&&b.PZ||null;a=b&&b.OZ||null;b&&b.U_a&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.j.V=a;a=b&&b.p0a||null;b&&b.eQ&&(a?a["X-WebChannel-Content-Type"]=b.eQ:a={"X-WebChannel-Content-Type":b.eQ});b&&b.VN&&(a?a["X-WebChannel-Client-Profile"]=b.VN:a={"X-WebChannel-Client-Profile":b.VN});this.j.Fb=a;(a=b&&b.n0a)&&!g.ib(a)&&(this.j.J=a);this.J=b&&b.x4||!1;this.D=b&&b.S0a||!1;(b=b&&b.aZ)&&!g.ib(b)&&(this.j.va=b,g.vf(this.u,b)&&g.zf(this.u,
b));this.C=new F8(this)},wbb=function(a){zab.call(this);
a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var b=a.__sm__;b?this.data=(this.metadataKey=g.sf(b))?g.Af(b,this.metadataKey):b:this.data=a},xbb=function(a){Aab.call(this);
this.status=1;this.errorCode=a},F8=function(a){this.j=a},ybb=function(a,b){this.u=a;
this.j=b},zbb=function(a){return tbb(a.j).map(function(b){b=b.map;
"__data__"in b&&(b=b.__data__,b=a.u.D?G$a(b):b);return b})},H8=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},J8=function(a){I8.dispatchEvent(new Abb(I8,a))},Abb=function(a,b){g.gf.call(this,"statevent",a);
this.stat=b},K8=function(a,b,c,d){this.j=a;
this.C=b;this.J=c;this.I=d||1;this.u=45E3;this.B=new g.Kj(this);this.D=new g.Fh;this.D.setInterval(250)},Cbb=function(a,b,c){a.ju=1;
a.To=Y7(b.clone());a.Qq=c;a.va=!0;Bbb(a,null)},Dbb=function(a,b,c,d,e){a.ju=1;
a.To=Y7(b.clone());a.Qq=null;a.va=c;e&&(a.fS=!1);Bbb(a,d)},Bbb=function(a,b){a.fu=Date.now();
L8(a);a.Vo=a.To.clone();Z7(a.Vo,"t",a.I);a.VA=0;a.Dh=a.j.kF(a.j.ex()?b:null);0<a.iF&&(a.TA=new n8((0,g.Ra)(a.QL,a,a.Dh),a.iF));a.B.Ma(a.Dh,"readystatechange",a.xU);b=a.Pq?g.Cf(a.Pq):{};a.Qq?(a.UA="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Dh.send(a.Vo,a.UA,a.Qq,b)):(a.UA="GET",a.fS&&!g.jf&&(b.Connection="close"),a.Dh.send(a.Vo,a.UA,null,b));a.j.Zk(1)},Gbb=function(a,b){var c=a.VA,d=b.indexOf("\n",c);
if(-1==d)return Ebb;c=Number(b.substring(c,d));if(isNaN(c))return Fbb;d+=1;if(d+c>b.length)return Ebb;b=b.slice(d,d+c);a.VA=d+c;return b},Ibb=function(a,b){a.fu=Date.now();
L8(a);var c=b?window.location.hostname:"";a.Vo=a.To.clone();g.Fj(a.Vo,"DOMAIN",c);g.Fj(a.Vo,"t",a.I);try{a.ul=new ActiveXObject("htmlfile")}catch(m){M8(a);a.Uo=7;J8(22);N8(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in O8)f=O8[f];else if(f in Hbb)f=O8[f]=Hbb[f];else{var h=f.charCodeAt(0);if(31<h&&127>h)var l=f;else{if(256>h){if(l="\\x",16>h||256<h)l+="0"}else l="\\u",4096>h&&(l+="0");l+=h.toString(16).toUpperCase()}f=
O8[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.zg(g.eg("b/12014412"),d);a.ul.open();a.ul.write(g.wg(c));a.ul.close();a.ul.parentWindow.m=(0,g.Ra)(a.u2,a);a.ul.parentWindow.d=(0,g.Ra)(a.jR,a,!0);a.ul.parentWindow.rpcClose=(0,g.Ra)(a.jR,a,!1);c=a.ul.createElement("DIV");a.ul.parentWindow.document.body.appendChild(c);d=g.og(a.Vo.toString());d=g.Qg(g.mg(d));d=g.zg(g.eg("b/12014412"),'<iframe src="'+d+'"></iframe>');g.jda(c,d);a.j.Zk(1)},L8=function(a){a.jF=
Date.now()+a.u;
Jbb(a,a.u)},Jbb=function(a,b){if(null!=a.mu)throw Error("WatchDog timer not null");
a.mu=H8((0,g.Ra)(a.wU,a),b)},Kbb=function(a){a.mu&&(g.C.clearTimeout(a.mu),a.mu=null)},N8=function(a){a.j.Mf()||a.Oq||a.j.WA(a)},M8=function(a){Kbb(a);
g.cf(a.TA);a.TA=null;a.D.stop();g.Lj(a.B);if(a.Dh){var b=a.Dh;a.Dh=null;b.abort();b.dispose()}a.ul&&(a.ul=null)},Lbb=function(a,b){try{a.j.RL(a,b),a.j.Zk(4)}catch(c){}},Nbb=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;Mbb(a,b,function(h){h?c(!0):g.C.setTimeout(function(){Nbb(a,b,c,d,f)},f)})}},Mbb=function(a,b,c){var d=new Image;
d.onload=function(){try{P8(d),c(!0)}catch(e){}};
d.onerror=function(){try{P8(d),c(!1)}catch(e){}};
d.onabort=function(){try{P8(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{P8(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
r$a(d,a)},P8=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},Obb=function(a){this.j=a;
this.u=new o8},Pbb=function(a){var b=Q8(a.j,a.Qx,"/mail/images/cleardot.gif");
Y7(b);Nbb(b.toString(),5E3,(0,g.Ra)(a.dX,a),3,2E3);a.Zk(1)},Qbb=function(a){var b=a.j.V;
if(null!=b)J8(5),b?(J8(11),R8(a.j,a,!1)):(J8(12),R8(a.j,a,!0));else if(a.ai=new K8(a),a.ai.Pq=a.lF,b=a.j,b=Q8(b,b.ex()?a.bx:null,a.mF),J8(5),!g.Cc||g.zc(10))Z7(b,"TYPE","xmlhttp"),Dbb(a.ai,b,!1,a.bx,!1);else{Z7(b,"TYPE","html");var c=a.ai;a=!!a.bx;c.ju=3;c.To=Y7(b.clone());Ibb(c,a)}},Rbb=function(a,b,c){this.j=1;
this.u=[];this.B=[];this.D=new o8;this.N=a||null;this.V=null!=b?b:null;this.J=c||!1},Sbb=function(a,b){this.j=a;
this.map=b;this.context=null},Tbb=function(a,b,c,d){g.gf.call(this,"timingevent",a);
this.size=b;this.lw=d},Ubb=function(a){g.gf.call(this,"serverreachability",a)},Wbb=function(a){a.yU(1,0);
a.XA=Q8(a,null,a.nF);Vbb(a)},Xbb=function(a){a.mp&&(a.mp.abort(),a.mp=null);
a.zf&&(a.zf.cancel(),a.zf=null);a.pn&&(g.C.clearTimeout(a.pn),a.pn=null);S8(a);a.Ei&&(a.Ei.cancel(),a.Ei=null);a.Wo&&(g.C.clearTimeout(a.Wo),a.Wo=null)},Ybb=function(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new Sbb(a.zU++,b));2!=a.j&&3!=a.j||Vbb(a)},Zbb=function(a){var b=0;
a.zf&&b++;a.Ei&&b++;return b},Vbb=function(a){a.Ei||a.Wo||(a.Wo=H8((0,g.Ra)(a.VL,a),0),a.ou=0)},bcb=function(a,b){if(1==a.j){if(!b){a.hx=Math.floor(1E5*Math.random());
b=a.hx++;var c=new K8(a,"",b);c.Pq=a.Ll;var d=$bb(a),e=a.XA.clone();g.Fj(e,"RID",b);g.Fj(e,"CVER","1");T8(a,e);Cbb(c,e,d);a.Ei=c;a.j=2}}else 3==a.j&&(b?acb(a,b):0==a.u.length||a.Ei||acb(a))},acb=function(a,b){if(b)if(6<a.Rq){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.hx-1;b=$bb(a)}else c=b.J,b=b.Qq;else c=a.hx++,b=$bb(a);var d=a.XA.clone();g.Fj(d,"SID",a.C);g.Fj(d,"RID",c);g.Fj(d,"AID",a.pu);T8(a,d);c=new K8(a,a.C,c,a.ou+1);c.Pq=a.Ll;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Ei=c;Cbb(c,d,b)},T8=function(a,b){a.gh&&(a=a.gh.ZL())&&g.nf(a,function(c,d){g.Fj(b,d,c)})},$bb=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Rq&&0<b){var d=a.u[0].j;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={Qt:e.Qt},f++){e.Qt=a.u[f].j;var h=a.u[f].map;e.Qt=6>=a.Rq?f:e.Qt-d;try{g.nf(h,function(l){return function(m,n){c.push("req"+l.Qt+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.Qt+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},ccb=function(a){a.zf||a.pn||(a.I=1,a.pn=H8((0,g.Ra)(a.UL,a),0),a.nu=0)},ecb=function(a){if(a.zf||a.pn||3<=a.nu)return!1;
a.I++;a.pn=H8((0,g.Ra)(a.UL,a),dcb(a,a.nu));a.nu++;return!0},R8=function(a,b,c){a.EE=c;
a.Ml=b.jn;a.J||Wbb(a)},S8=function(a){null!=a.Sq&&(g.C.clearTimeout(a.Sq),a.Sq=null)},dcb=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},U8=function(a,b){if(2==b||9==b){var c=null;
a.gh&&(c=null);var d=(0,g.Ra)(a.F4,a);c||(c=new g.xj("//web.archive.org/web/20220720144237/https://www.google.com/images/cleardot.gif"),Y7(c));Mbb(c.toString(),1E4,d)}else J8(2);fcb(a,b)},fcb=function(a,b){a.j=0;
a.gh&&a.gh.WL(b);gcb(a);Xbb(a)},gcb=function(a){a.j=0;
a.Ml=-1;if(a.gh)if(0==a.B.length&&0==a.u.length)a.gh.oF();else{var b=g.ac(a.B),c=g.ac(a.u);a.B.length=0;a.u.length=0;a.gh.oF(b,c)}},Q8=function(a,b,c){var d=g.Gj(c);
if(""!=d.j)b&&g.zj(d,b+"."+d.j),g.Aj(d,d.B);else{var e=window.location;d=H$a(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.gx&&g.nf(a.gx,function(f,h){g.Fj(d,h,f)});
g.Fj(d,"VER",a.Rq);T8(a,d);return d},hcb=function(){},icb=function(){this.j=[];
this.u=[]},jcb=function(){},l8=function(){if(!V8){V8=new g.Ih(new jcb);
var a=g.Nt("client_streamz_web_flush_count",-1);-1!==a&&(V8.C=a)}return V8},kcb=function(a){g.gf.call(this,"channelMessage");
this.message=a},lcb=function(a){g.gf.call(this,"channelError");
this.error=a},mcb=function(a,b){this.action=a;
this.params=b||{}},W8=function(a,b){g.K.call(this);
this.j=new g.Wn(this.j2,0,this);g.M(this,this.j);this.oh=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Ra)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Ra)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},ncb=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.qa=a;this.J=b;this.B=new g.zo;this.u=new W8(this.G3,this);this.j=null;this.W=!1;this.I=null;this.V="";this.N=this.D=0;this.C=[];this.La=c;this.Y=d;this.Sa=e;this.Ha=new oab;this.ra=new qab;this.Ea=new sab;this.va=new uab;this.Ta=new wab;this.Wa=new xab},ocb=function(a){if(a.j){var b=a.Y(),c=a.j.Ll||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.j.Ll=c}},X8=function(a){this.port=this.domain="";
this.j="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.gi(4,a))||"";b&&(this.port=":"+b);this.domain=g.hi(a)||"";a=g.ub();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.sb(a,"10.0")&&(this.u=!1))},Y8=function(a,b){var c=a.j;
a.u&&(c="https://"+a.domain+a.port+a.j);return g.ni(c+b,{})},pcb=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Sa(a.C,d,!0),onError:g.Sa(a.B,e),onTimeout:g.Sa(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.lu(b,a)},qcb=function(a,b){g.Qf.call(this);
var c=this;this.Rc=a();this.Rc.subscribe("handlerOpened",this.DU,this);this.Rc.subscribe("handlerClosed",this.BU,this);this.Rc.subscribe("handlerError",function(d,e){c.onError(e)});
this.Rc.subscribe("handlerMessage",this.CU,this);this.j=b},rcb=function(a,b,c){var d=this;
c=void 0===c?function(){return""}:c;
var e=void 0===e?new vbb:e;var f=void 0===f?new g.zo:f;this.pathPrefix=a;this.j=b;this.qa=c;this.D=f;this.N=null;this.V=this.J=0;this.channel=null;this.I=0;this.B=new W8(function(){d.B.isActive();var h;0===(null==(h=d.channel)?void 0:Zab((new ybb(h,h.j)).j.u))&&d.connect(d.N,d.J)});
this.C={};this.u={};this.W=!1;this.logger=null;this.Y=[];this.Cg=void 0;this.Ha=new oab;this.ra=new qab;this.Ea=new sab;this.va=new uab},scb=function(a){g.Jf(a.channel,"m",function(){a.I=3;
a.B.reset();a.N=null;a.J=0;for(var b=g.r(a.Y),c=b.next();!c.done;c=b.next())c=c.value,a.channel&&a.channel.send(c);a.Y=[];a.X("webChannelOpened");pab(a.Ha,"WEB_CHANNEL")});
g.Jf(a.channel,"n",function(){a.I=0;a.B.isActive()||a.X("webChannelClosed");var b,c=null==(b=a.channel)?void 0:zbb(new ybb(b,b.j));c&&(a.Y=[].concat(g.t(c)));rab(a.ra,"WEB_CHANNEL")});
g.Jf(a.channel,"p",function(b){var c=b.data;"gracefulReconnect"===c[0]?(a.B.start(),a.channel&&a.channel.close()):a.X("webChannelMessage",new mcb(c[0],c[1]));a.Cg=b.statusCode;tab(a.Ea,"WEB_CHANNEL")});
g.Jf(a.channel,"o",function(){401===a.Cg||a.B.start();a.X("webChannelError");vab(a.va,"WEB_CHANNEL")})},tcb=function(a){var b=a.qa();
b?a.C["x-youtube-lounge-xsrf-token"]=b:delete a.C["x-youtube-lounge-xsrf-token"]},ucb=function(a){g.Qf.call(this);
this.j=a();this.j.subscribe("webChannelOpened",this.GU,this);this.j.subscribe("webChannelClosed",this.EU,this);this.j.subscribe("webChannelError",this.onError,this);this.j.subscribe("webChannelMessage",this.FU,this)},vcb=function(a,b,c,d,e){function f(){return new ncb(Y8(a,"/bc"),b,!1,c,d)}
c=void 0===c?function(){return""}:c;
return g.S("enable_mdx_web_channel_desktop")?new ucb(function(){return new rcb(Y8(a,"/wc"),b,c)}):new qcb(f,e)},zcb=function(){var a=wcb;
xcb();Z8.push(a);ycb()},$8=function(a,b){xcb();
var c=Acb(a,String(b));g.Vb(Z8)?Bcb(c):(ycb(),g.qc(Z8,function(d){d(c)}))},a9=function(a){$8("CP",a)},xcb=function(){Z8||(Z8=g.Ha("yt.mdx.remote.debug.handlers_")||[],g.Ga("yt.mdx.remote.debug.handlers_",Z8))},Bcb=function(a){var b=(b9+1)%50;
b9=b;c9[b]=a;d9||(d9=49==b)},ycb=function(){var a=Z8;
if(c9[0]){var b=d9?b9:-1;do{b=(b+1)%50;var c=c9[b];g.qc(a,function(d){d(c)})}while(b!=b9);
c9=Array(50);b9=-1;d9=!1}},Acb=function(a,b){var c=(Date.now()-Ccb)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},e9=function(a){g.Ny.call(this);
this.I=a;this.screens=[]},Dcb=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},Ecb=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.um(a.screens,function(f){return!!R$a(b,f)});
for(var d=0,e=b.length;d<e;d++)c=Dcb(a,b[d])||c;return c},Fcb=function(a,b){var c=a.screens.length;
a.screens=g.um(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},Gcb=function(a,b,c,d,e){g.Ny.call(this);
this.B=a;this.J=b;this.C=c;this.I=d;this.D=e;this.u=0;this.j=null;this.qc=NaN},g9=function(a){e9.call(this,"LocalScreenService");
this.u=a;this.j=NaN;f9(this);this.info("Initializing with "+O$a(this.screens))},Hcb=function(a){if(a.screens.length){var b=g.Lk(a.screens,function(d){return d.id}),c=Y8(a.u,"/pairing/get_lounge_token_batch");
pcb(a.u,c,{screen_ids:b.join(",")},(0,g.Ra)(a.zY,a),(0,g.Ra)(a.xY,a))}},f9=function(a){if(g.S("deprecate_pair_servlet_enabled"))return Ecb(a,[]);
var b=N$a(Y$a());b=g.um(b,function(c){return!c.uuid});
return Ecb(a,b)},h9=function(a,b){$$a(g.Lk(a.screens,L$a));
b&&Z$a()},Jcb=function(a,b){g.Ny.call(this);
this.I=b;b=(b=g.Az("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var h=d[e].id;c[h]=g.Ub(b,h)}this.j=c;this.D=a;this.B=this.C=NaN;this.u=null;Icb("Initialized with "+g.ai(this.j))},Kcb=function(a,b,c){var d=Y8(a.D,"/pairing/get_screen_availability");
pcb(a.D,d,{lounge_token:b.token},(0,g.Ra)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Ra)(function(){c(!1)},a))},Mcb=function(a,b){a:if(E$a(b)!=E$a(a.j))var c=!1;
else{c=g.uf(b);for(var d=0,e=c.length;d<e;++d)if(!a.j[c[d]]){c=!1;break a}c=!0}c||(Icb("Updated online screens: "+g.ai(a.j)),a.j=b,a.X("screenChange"));Lcb(a)},i9=function(a){isNaN(a.B)||g.iu(a.B);
a.B=g.gu((0,g.Ra)(a.UJ,a),0<a.C&&a.C<g.Ta()?2E4:1E4)},Icb=function(a){$8("OnlineScreenService",a)},Ncb=function(a){var b={};
g.qc(a.I(),function(c){c.token?b[c.token]=c.id:this.Ye("Requesting availability of screen w/o lounge token.")});
return b},Lcb=function(a){a=g.uf(g.pf(a.j,function(b){return b}));
g.nc(a);a.length?g.zz("yt-remote-online-screen-ids",a.join(","),60):g.Bz("yt-remote-online-screen-ids")},j9=function(a,b){b=void 0===b?!1:b;
e9.call(this,"ScreenService");this.C=a;this.J=b;this.j=this.u=null;this.B=[];this.D={};Ocb(this)},Qcb=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var h=a.hj(),l=c?f8(h,c):null;c&&(a.J||l)||(l=f8(h,b));if(l){l.uuid=b;var m=k9(a,l);Kcb(a.j,m,function(n){e(n?m:null)})}else c?Pcb(a,c,(0,g.Ra)(function(n){var p=k9(this,new c8({name:d,
screenId:c,loungeToken:n,dialId:b||""}));Kcb(this.j,p,function(q){e(q?p:null)})},a),f):e(null)},Rcb=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},Scb=function(a,b,c){Kcb(a.j,b,c)},Pcb=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){f=h&&h.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.lu(Y8(a.C,"/pairing/get_lounge_token_batch"),e)},Tcb=function(a){a.screens=a.u.hj();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+O$a(a.screens))},Ocb=function(a){Ucb(a);
a.u=new g9(a.C);a.u.subscribe("screenChange",(0,g.Ra)(a.IY,a));Tcb(a);a.J||(a.B=N$a(g.Az("yt-remote-automatic-screen-cache")||[]));Ucb(a);a.info("Initializing automatic screens: "+O$a(a.B));a.j=new Jcb(a.C,(0,g.Ra)(a.hj,a,!0));a.j.subscribe("screenChange",(0,g.Ra)(function(){this.X("onlineScreenChange")},a))},k9=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=f8(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.J||Vcb(a));Ucb(a);a.D[b.uuid]=b.id;g.zz("yt-remote-device-id-map",a.D,31536E3);return b},Vcb=function(a){a=g.um(a.B,function(b){return"shortLived"!=b.idType});
g.zz("yt-remote-automatic-screen-cache",g.Lk(a,L$a))},Ucb=function(a){a.D=g.Az("yt-remote-device-id-map")||{}},l9=function(a,b,c){g.Ny.call(this);
this.va=c;this.B=a;this.j=b;this.C=null},m9=function(a,b){a.C=b;
a.X("sessionScreen",a.C)},Wcb=function(a,b){a.C&&(a.C.token=b,k9(a.B,a.C));
a.X("sessionScreen",a.C)},n9=function(a,b){$8(a.va,b)},o9=function(a,b,c){l9.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.Y=(0,g.Ra)(this.LU,this);this.ra=(0,g.Ra)(this.G2,this);this.W=g.gu(function(){Xcb(d,null)},12E4);
this.J=this.D=this.I=this.N=0;this.qa=!1;this.V="unknown"},Zcb=function(a,b){g.iu(a.J);
a.J=0;0==b?Ycb(a):a.J=g.gu(function(){Ycb(a)},b)},Ycb=function(a){$cb(a,"getLoungeToken");
g.iu(a.D);a.D=g.gu(function(){adb(a,null)},3E4)},$cb=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.ai());
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Ra)(function(){n9(this,"Failed to send message: "+b+".")},a)):n9(a,"Sending yt message without session: "+g.ai(c))},bdb=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.PO(b,function(c){m9(a,c)},function(){return a.Qh()},5)):a.Qh(Error("Waiting for session status timed out."))},ddb=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new c8(b);cdb(a,d,function(e){e?(a.qa=!0,k9(a.B,d),m9(a,d),a.V="unknown",Zcb(a,c)):(g.Rt(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Qh())},5)},Xcb=function(a,b){g.iu(a.W);
a.W=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?ddb(a,{name:a.j.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.Rt(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),bdb(a,b.screenId))):(g.Rt(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),bdb(a,b.screenId)):bdb(a,b.screenId):a.Qh(Error("Waiting for session status timed out."))},adb=function(a,b){g.iu(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.V=c,Zcb(a,3E4)):(Wcb(a,b.loungeToken),a.qa=!1,a.V="unknown",Zcb(a,b.loungeTokenRefreshIntervalMs))},cdb=function(a,b,c,d){g.iu(a.I);
a.I=0;Scb(a.B,b,function(e){e||0>d?c(e):a.I=g.gu(function(){cdb(a,b,c,d-1)},300)})},edb=function(a){g.iu(a.N);
a.N=0;g.iu(a.I);a.I=0;g.iu(a.W);a.W=0;g.iu(a.D);a.D=0;g.iu(a.J);a.J=0},p9=function(a,b,c,d){l9.call(this,a,b,"DialSession");
this.config_=d;this.u=this.N=null;this.ra="";this.La=c;this.Ha=null;this.W=function(){};
this.V=NaN;this.Ea=(0,g.Ra)(this.MU,this);this.D=function(){};
this.J=this.I=0;this.Y=!1;this.qa="unknown"},q9=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},fdb=function(a){a.D=a.B.bM(a.ra,a.j.label,a.j.friendlyName,q9(a),function(b,c){a.D=function(){};
a.Y=!0;m9(a,b);"shortLived"==b.idType&&0<c&&r9(a,c)},function(b){a.D=function(){};
a.Qh(b)})},gdb=function(a){var b={};
b.pairingCode=a.ra;b.theme=a.La;bab()&&(b.env_useStageMdx=1);return g.li(b)},hdb=function(a){return new Promise(function(b){a.ra=P$a();
if(a.Ha){var c=new chrome.cast.DialLaunchResponse(!0,gdb(a));b(c);fdb(a)}else a.W=function(){g.iu(a.V);a.W=function(){};
a.V=NaN;var d=new chrome.cast.DialLaunchResponse(!0,gdb(a));b(d);fdb(a)},a.V=g.gu(function(){a.W()},100)})},jdb=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new c8(b);return(new Promise(function(e){idb(a,d,function(f){f?(a.Y=!0,k9(a.B,d),m9(a,d),r9(a,c)):g.Rt(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):hdb(a)})},kdb=function(a,b){var c=a.N.receiver.label,d=a.j.friendlyName;
return(new Promise(function(e){Qcb(a.B,c,b,d,function(f){f&&f.token&&m9(a,f);e(f)},function(f){n9(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):hdb(a)})},idb=function(a,b,c,d){g.iu(a.I);
a.I=0;Scb(a.B,b,function(e){e||0>d?c(e):a.I=g.gu(function(){idb(a,b,c,d-1)},300)})},r9=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
q9(a)&&(g.iu(a.J),a.J=0,0==b?ldb(a):a.J=g.gu(function(){ldb(a)},b))},ldb=function(a){q9(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.qa=c,r9(a,3E4)):(a.Y=!1,a.qa="unknown",Wcb(a,b.loungeToken),r9(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.qa="noLoungeTokenResponse";r9(a,3E4)})},mdb=function(a){g.iu(a.I);
a.I=0;g.iu(a.J);a.J=0;a.D();a.D=function(){};
g.iu(a.V)},s9=function(a,b){l9.call(this,a,b,"ManualSession");
this.u=g.gu((0,g.Ra)(this.Jv,this,null),150)},t9=function(a,b){g.Ny.call(this);
this.config_=b;this.u=a;this.N=b.appId||"233637DE";this.C=b.theme||"cl";this.V=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.j=null;this.J=!1;this.B=[];this.D=(0,g.Ra)(this.s1,this)},ndb=function(a,b){return b?g.Sb(a.B,function(c){return d8(b,c.label)},a):null},u9=function(a){$8("Controller",a)},wcb=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},v9=function(a){return a.J||!!a.B.length||!!a.j},w9=function(a,b,c){b!=a.j&&(g.cf(a.j),(a.j=b)?(c?a.X("yt-remote-cast2-receiver-resumed",
b.j):a.X("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",(0,g.Ra)(a.hR,a,b)),b.subscribe("sessionFailed",function(){return odb(a,b)}),b.getScreen()?a.X("yt-remote-cast2-session-change",b.getScreen()):c&&a.j.Jv(null)):a.X("yt-remote-cast2-session-change",null))},odb=function(a,b){a.j==b&&a.X("yt-remote-cast2-session-failed")},pdb=function(a){var b=a.u.aM(),c=a.j&&a.j.j;
a=g.Lk(b,function(d){c&&d8(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=ndb(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},wdb=function(a,b,c,d){d.disableCastApi?x9("Cannot initialize because disabled by Mdx config."):qdb()?rdb(b,d)&&(sdb(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?tdb(a,c):(window.__onGCastApiAvailable=function(e,f){e?tdb(a,c):(y9("Failed to load cast API: "+f),udb(!1),sdb(!1),g.Bz("yt-remote-cast-available"),g.Bz("yt-remote-cast-receiver"),
vdb(),c(!1))},d.loadCastApiSetupScript?g.Dz("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=cab()&&lab():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?gab():89<=cab()?nab():(kab(),k8(mab.map(hab))))):x9("Cannot initialize because not running Chrome")},vdb=function(){x9("dispose");
var a=z9();a&&a.dispose();g.Ga("yt.mdx.remote.cloudview.instance_",null);xdb(!1);g.Bx(ydb);ydb.length=0},A9=function(){return!!g.Az("yt-remote-cast-installed")},zdb=function(){var a=g.Az("yt-remote-cast-receiver");
return a?a.friendlyName:null},Adb=function(){x9("clearCurrentReceiver");
g.Bz("yt-remote-cast-receiver")},Bdb=function(){return A9()?z9()?z9().getCastSession():(y9("getCastSelector: Cast is not initialized."),null):(y9("getCastSelector: Cast API is not installed!"),null)},Cdb=function(){A9()?z9()?B9()?(x9("Requesting cast selector."),z9().requestSession()):(x9("Wait for cast API to be ready to request the session."),ydb.push(g.Ax("yt-remote-cast2-api-ready",Cdb))):y9("requestCastSelector: Cast is not initialized."):y9("requestCastSelector: Cast API is not installed!")},
C9=function(a,b){B9()?z9().setConnectedScreenStatus(a,b):y9("setConnectedScreenStatus called before ready.")},qdb=function(){var a=0<=g.ub().search(/ (CrMo|Chrome|CriOS)\//);
return g.ID||a},Ddb=function(a,b){z9().init(a,b)},rdb=function(a,b){var c=!1;
z9()||(a=new t9(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.zz("yt-remote-cast-available",d);a8("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){x9("onReceiverSelected: "+d.friendlyName);
g.zz("yt-remote-cast-receiver",d);a8("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){x9("onReceiverResumed: "+d.friendlyName);
g.zz("yt-remote-cast-receiver",d);a8("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){x9("onSessionChange: "+e8(d));
d||g.Bz("yt-remote-cast-receiver");a8("yt-remote-cast2-session-change",d)}),g.Ga("yt.mdx.remote.cloudview.instance_",a),c=!0);
x9("cloudview.createSingleton_: "+c);return c},z9=function(){return g.Ha("yt.mdx.remote.cloudview.instance_")},tdb=function(a,b){udb(!0);
sdb(!1);Ddb(a,function(c){c?(xdb(!0),g.Cx("yt-remote-cast2-api-ready")):(y9("Failed to initialize cast API."),udb(!1),g.Bz("yt-remote-cast-available"),g.Bz("yt-remote-cast-receiver"),vdb());b(c)})},x9=function(a){$8("cloudview",a)},y9=function(a){$8("cloudview",a)},udb=function(a){x9("setCastInstalled_ "+a);
g.zz("yt-remote-cast-installed",a)},B9=function(){return!!g.Ha("yt.mdx.remote.cloudview.apiReady_")},xdb=function(a){x9("setApiReady_ "+a);
g.Ga("yt.mdx.remote.cloudview.apiReady_",a)},sdb=function(a){g.Ga("yt.mdx.remote.cloudview.initializing_",a)},D9=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.J=0;this.trackData=null;this.hasNext=this.zm=!1;this.N=this.D=this.j=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},Edb=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.zm=!1;a.hasNext=!1;a.J=0;a.I=g.Ta();a.C=0;a.j=0;a.D=0;a.N=0;a.B=NaN;a.u=!1},E9=function(a){return a.Mc()?(g.Ta()-a.I)/1E3:0},F9=function(a,b){a.J=b;
a.I=g.Ta()},G9=function(a){switch(a.playerState){case 1:case 1081:return(g.Ta()-a.I)/1E3+a.J;
case -1E3:return 0}return a.J},H9=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&Edb(a)},Fdb=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Df(a.trackData);b.hasPrevious=a.zm;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.I;b.seekableStart=a.C;b.seekableEnd=a.j;b.duration=a.D;b.loadedTime=a.N;b.liveIngestionTime=a.B;return b},J9=function(a,b){g.Ny.call(this);
this.B=0;this.C=a;this.I=[];this.D=new icb;this.u=this.j=null;this.V=(0,g.Ra)(this.U_,this);this.J=(0,g.Ra)(this.Fz,this);this.N=(0,g.Ra)(this.T_,this);this.W=(0,g.Ra)(this.X_,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.oK,this),Gdb(this))):c=3;0!=c&&(b?this.oK(c):g.gu((0,g.Ra)(function(){this.oK(c)},this),0));
(a=Bdb())&&I9(this,a);this.subscribe("yt-remote-cast2-session-change",this.W)},K9=function(a){return new D9(a.C.getPlayerContextData())},Gdb=function(a){g.qc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.C.subscribe(b,g.Sa(this.o1,b),this))},a)},Hdb=function(a){g.qc(a.I,function(b){this.C.unsubscribeByKey(b)},a);
a.I.length=0},L9=function(a){return 1==a.getState()},M9=function(a,b){var c=a.D;
50>c.j.length+c.u.length&&a.D.enqueue(b)},Idb=function(a,b,c){var d=K9(a);
F9(d,c);-1E3!=d.playerState&&(d.playerState=b);N9(a,d)},O9=function(a,b,c){a.C.sendMessage(b,c)},N9=function(a,b){Hdb(a);
a.C.setPlayerContextData(Fdb(b));Gdb(a)},I9=function(a,b){a.u&&(a.u.removeUpdateListener(a.V),a.u.removeMediaListener(a.J),a.Fz(null));
a.u=b;a.u&&(a9("Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.V),a.u.addMediaListener(a.J),a.u.media.length&&a.Fz(a.u.media[0]))},Jdb=function(a){var b=a.j.media,c=a.j.customData;
if(b&&c){var d=K9(a);b.contentId!=d.videoId&&a9("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;F9(d,a.j.getEstimatedTime());N9(a,d)}else a9("No cast media video. Ignoring state update.")},P9=function(a,b,c){return(0,g.Ra)(function(d){this.Ye("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Ye("Retrying "+b+" using MDx browser channel."),O9(this,b,c))},a)},S9=function(a,b,c,d){d=void 0===d?!1:d;
g.Ny.call(this);var e=this;this.I=NaN;this.ra=!1;this.V=this.N=this.Y=this.qa=NaN;this.W=[];this.D=this.J=this.C=this.j=this.u=null;this.Ha=a;this.Ea=d;this.W.push(g.hx(window,"beforeunload",function(){e.Su(2)}));
this.B=[];this.j=new D9;this.La=b.id;this.va=b.idType;this.u=vcb(this.Ha,c,this.fM,"shortLived"==this.va,this.La);this.u.Ma("channelOpened",function(){Kdb(e)});
this.u.Ma("channelClosed",function(){Q9("Channel closed");isNaN(e.I)?i8(!0):i8();e.dispose()});
this.u.Ma("channelError",function(f){i8();isNaN(e.Ky())?(1==f&&"shortLived"==e.va&&e.X("browserChannelAuthError",f),Q9("Channel error: "+f+" without reconnection"),e.dispose()):(e.ra=!0,Q9("Channel error: "+f+" with reconnection in "+e.Ky()+" ms"),R9(e,2))});
this.u.Ma("channelMessage",function(f){Ldb(e,f)});
this.u.Lo(b.token);this.subscribe("remoteQueueChange",function(){var f=e.j.videoId;g.Cz()&&g.zz("yt-remote-session-video-id",f)})},Mdb=function(a){return g.Sb(a.B,function(b){return"LOUNGE_SCREEN"==b.type})},Q9=function(a){$8("conn",a)},R9=function(a,b){a.X("proxyStateChange",b)},Ndb=function(a){a.I=g.gu(function(){Q9("Connecting timeout");
a.Su(1)},2E4)},Odb=function(a){g.iu(a.I);
a.I=NaN},Pdb=function(a){g.iu(a.qa);
a.qa=NaN},Rdb=function(a){Qdb(a);
a.Y=g.gu(function(){T9(a,"getNowPlaying")},2E4)},Qdb=function(a){g.iu(a.Y);
a.Y=NaN},Kdb=function(a){Q9("Channel opened");
a.ra&&(a.ra=!1,Pdb(a),a.qa=g.gu(function(){Q9("Timing out waiting for a screen.");a.Su(1)},15E3))},Tdb=function(a,b){var c=null;
if(b){var d=Mdb(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ga("yt.mdx.remote.remoteClient_",c);b&&(Odb(a),Pdb(a));c=a.u.Bv()&&isNaN(a.I);b==c?b&&(R9(a,1),T9(a,"getSubtitlesTrack")):b?(a.OO()&&a.j.reset(),R9(a,1),T9(a,"getNowPlaying"),Sdb(a)):a.Su(1)},Udb=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.j.videoId&&(g.yf(b.params)?a.j.trackData=null:a.j.trackData=b.params,a.X("remotePlayerChange"))},Vdb=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.j.listId=b.params.listId||a.j.listId;H9(a.j,d,e);a.X("remoteQueueChange",c)},Xdb=function(a,b){b.params=b.params||{};
Vdb(a,b,"NOW_PLAYING_MAY_CHANGE");Wdb(a,b);a.X("autoplayDismissed")},Wdb=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
F9(a.j,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.j.playerState&&(c=-1E3);a.j.playerState=c;c=Number(b.params.loadedTime);a.j.N=isNaN(c)?0:c;a.j.xj(Number(b.params.duration));c=a.j;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.j;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.j=isNaN(b)?0:b;1==a.j.playerState?Rdb(a):Qdb(a);a.X("remotePlayerChange")},Ydb=function(a,b){if(-1E3!=a.j.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.j.playerState=c;b=parseInt(b.params.currentTime,10);F9(a.j,isNaN(b)?0:b);a.X("remotePlayerChange")}},Zdb=function(a,b){var c="true"==b.params.muted;
a.j.volume=parseInt(b.params.volume,10);a.j.muted=c;a.X("remotePlayerChange")},$db=function(a,b){a.J=b.params.videoId;
a.X("nowAutoplaying",parseInt(b.params.timeout,10))},aeb=function(a,b){a.J=b.params.videoId||null;
a.X("autoplayUpNext",a.J)},beb=function(a,b){a.D=b.params.autoplayMode;
a.X("autoplayModeChange",a.D);"DISABLED"==a.D&&a.X("autoplayDismissed")},ceb=function(a,b){var c="true"==b.params.hasNext;
a.j.zm="true"==b.params.hasPrevious;a.j.hasNext=c;a.X("previousNextChange")},Ldb=function(a,b){b=b.message;
b.params?Q9("Received: action="+b.action+", params="+g.ai(b.params)):Q9("Received: action="+b.action+" {}");switch(b.action){case "loungeStatus":b=$7(b.params.devices);a.B=g.Lk(b,function(d){return new b8(d)});
b=!!g.Sb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
Tdb(a,b);b=a.zP("mlm");a.X("multiStateLoopEnabled",b);break;case "loungeScreenDisconnected":g.Zb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
Tdb(a,!1);break;case "remoteConnected":var c=new b8($7(b.params.device));g.Sb(a.B,function(d){return d.equals(c)})||D$a(a.B,c);
break;case "remoteDisconnected":c=new b8($7(b.params.device));g.Zb(a.B,function(d){return d.equals(c)});
break;case "gracefulDisconnect":break;case "playlistModified":Vdb(a,b,"QUEUE_MODIFIED");break;case "nowPlaying":Xdb(a,b);break;case "onStateChange":Wdb(a,b);break;case "onAdStateChange":Ydb(a,b);break;case "onVolumeChanged":Zdb(a,b);break;case "onSubtitlesTrackChanged":Udb(a,b);break;case "nowAutoplaying":$db(a,b);break;case "autoplayDismissed":a.X("autoplayDismissed");break;case "autoplayUpNext":aeb(a,b);break;case "onAutoplayModeChanged":beb(a,b);break;case "onHasPreviousNextChanged":ceb(a,b);break;
case "requestAssistedSignIn":a.X("assistedSignInRequested",b.params.authCode);break;case "onLoopModeChanged":a.X("loopModeChange",b.params.loopMode);break;default:Q9("Unrecognized action: "+b.action)}},Sdb=function(a){g.iu(a.V);
a.V=g.gu(function(){a.Su(1)},864E5)},T9=function(a,b,c){c?Q9("Sending: action="+b+", params="+g.ai(c)):Q9("Sending: action="+b);
a.u.sendMessage(b,c)},deb=function(a){e9.call(this,"ScreenServiceProxy");
this.Kf=a;this.j=[];this.j.push(this.Kf.$_s("screenChange",(0,g.Ra)(this.QU,this)));this.j.push(this.Kf.$_s("onlineScreenChange",(0,g.Ra)(this.S0,this)))},ieb=function(a,b){aab();
if(!j8||!j8.get("yt-remote-disable-remote-module-for-dev")){b=g.Q("MDX_CONFIG")||b;S$a();W$a();U9||(U9=new X8(b?b.loungeApiHost:void 0),bab()&&(U9.j="/api/loungedev"));V9||(V9=g.Ha("yt.mdx.remote.deferredProxies_")||[],g.Ga("yt.mdx.remote.deferredProxies_",V9));eeb();var c=W9();if(!c){var d=new j9(U9,b?b.disableAutomaticScreenCache||!1:!1);g.Ga("yt.mdx.remote.screenService_",d);c=W9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ga("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1);wdb(a,d,function(f){f?X9()&&C9(X9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){a8("yt-remote-receiver-availability-change")})},e)}b&&!g.Ha("yt.mdx.remote.initialized_")&&(g.Ga("yt.mdx.remote.initialized_",!0),Y9("Initializing: "+g.ai(b)),
Z9.push(g.Ax("yt-remote-cast2-api-ready",function(){a8("yt-remote-api-ready")})),Z9.push(g.Ax("yt-remote-cast2-availability-change",function(){a8("yt-remote-receiver-availability-change")})),Z9.push(g.Ax("yt-remote-cast2-receiver-selected",function(){$9(null);
a8("yt-remote-auto-connect","cast-selector-receiver")})),Z9.push(g.Ax("yt-remote-cast2-receiver-resumed",function(){a8("yt-remote-receiver-resumed","cast-selector-receiver")})),Z9.push(g.Ax("yt-remote-cast2-session-change",feb)),Z9.push(g.Ax("yt-remote-connection-change",function(f){f?C9(X9(),"YouTube TV"):a$()||(C9(null,null),Adb())})),Z9.push(g.Ax("yt-remote-cast2-session-failed",function(){a8("yt-remote-connection-failed")})),a=geb(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.S("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),Y9(" -- with channel params: "+g.ai(a)),a?(g.zz("yt-remote-session-app",a.app),g.zz("yt-remote-session-name",a.name)):(g.Bz("yt-remote-session-app"),g.Bz("yt-remote-session-name")),g.Ga("yt.mdx.remote.channelParams_",a),c.start(),X9()||heb())}},jeb=function(){var a=W9().Kf.$_gos();
var b=b$();b&&c$()&&(R$a(a,b)||a.push(b));return Q$a(a)},leb=function(){var a=keb();
!a&&A9()&&zdb()&&(a={key:"cast-selector-receiver",name:zdb()});return a},keb=function(){var a=jeb(),b=b$();
b||(b=a$());return g.Sb(a,function(c){return b&&d8(b,c.key)?!0:!1})},b$=function(){var a=X9();
if(!a)return null;var b=W9().hj();return f8(b,a)},feb=function(a){Y9("remote.onCastSessionChange_: "+e8(a));
if(a){var b=b$();if(b&&b.id==a.id){if(C9(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))d$&&(d$.token=a),(b=c$())&&b.Lo(a)}else b&&e$(),f$(a,1)}else c$()&&e$()},e$=function(){B9()?z9().stopSession():y9("stopSession called before API ready.");
var a=c$();a&&(a.disconnect(1),meb(null))},neb=function(){var a=c$();
return!!a&&3!=a.getProxyState()},Y9=function(a){$8("remote",a)},W9=function(){if(!oeb){var a=g.Ha("yt.mdx.remote.screenService_");
oeb=a?new deb(a):null}return oeb},X9=function(){return g.Ha("yt.mdx.remote.currentScreenId_")},peb=function(a){g.Ga("yt.mdx.remote.currentScreenId_",a)},qeb=function(){return g.Ha("yt.mdx.remote.connectData_")},$9=function(a){g.Ga("yt.mdx.remote.connectData_",a)},c$=function(){return g.Ha("yt.mdx.remote.connection_")},meb=function(a){var b=c$();
$9(null);a||peb("");g.Ga("yt.mdx.remote.connection_",a);V9&&(g.qc(V9,function(c){c(a)}),V9.length=0);
b&&!a?a8("yt-remote-connection-change",!1):!b&&a&&a8("yt-remote-connection-change",!0)},a$=function(){var a=g.Cz();
if(!a)return null;var b=W9();if(!b)return null;b=b.hj();return f8(b,a)},f$=function(a,b){X9();
b$()&&b$();if(g$)d$=a;else{peb(a.id);var c=g.Ha("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new S9(U9,a,geb(),c);a.connect(b,qeb());a.subscribe("beforeDisconnect",function(d){a8("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){c$()&&(c$(),meb(null))});
a.subscribe("browserChannelAuthError",function(){var d=b$();d&&"shortLived"==d.idType&&(B9()?z9().handleBrowserChannelAuthError():y9("refreshLoungeToken called before API ready."))});
meb(a)}},heb=function(){var a=a$();
a?(Y9("Resume connection to: "+e8(a)),f$(a,0)):(i8(),Adb(),Y9("Skipping connecting because no session screen found."))},eeb=function(){var a=geb();
if(g.yf(a)){a=h8();var b=g.Az("yt-remote-session-name")||"",c=g.Az("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ga("yt.mdx.remote.channelParams_",a)}},geb=function(){return g.Ha("yt.mdx.remote.channelParams_")||{}},seb=function(a,b,c){g.K.call(this);
var d=this;this.u=a;this.G=b;this.dc=c;this.events=new g.ED(this);this.W=this.events.P(this.G,"onVolumeChange",function(e){reb(d,e)});
this.D=!1;this.I=new g.EJ(64);this.j=new g.Wn(this.qS,500,this);this.B=new g.Wn(this.rS,1E3,this);this.N=new m8(this.m5,0,this);this.C={};this.V=new g.Wn(this.cT,1E3,this);this.J=new n8(this.seekTo,1E3,this);g.M(this,this.events);this.events.P(b,"onCaptionsTrackListChanged",this.D0);this.events.P(b,"captionschanged",this.R_);this.events.P(b,"captionssettingschanged",this.yS);this.events.P(b,"videoplayerreset",this.vD);this.events.P(b,"mdxautoplaycancel",function(){d.dc.jO()});
a=this.dc;a.isDisposed();a.subscribe("proxyStateChange",this.eR,this);a.subscribe("remotePlayerChange",this.Kz,this);a.subscribe("remoteQueueChange",this.vD,this);a.subscribe("previousNextChange",this.bR,this);a.subscribe("nowAutoplaying",this.VQ,this);a.subscribe("autoplayDismissed",this.zQ,this);g.M(this,this.j);g.M(this,this.B);g.M(this,this.N);g.M(this,this.V);g.M(this,this.J);this.yS();this.vD();this.Kz()},reb=function(a,b){if(h$(a)){a.dc.unsubscribe("remotePlayerChange",a.Kz,a);
var c=Math.round(b.volume);b=!!b.muted;var d=K9(a.dc);if(c!==d.volume||b!==d.muted)a.dc.setVolume(c,b),a.V.start();a.dc.subscribe("remotePlayerChange",a.Kz,a)}},teb=function(a){a.Wb(0);
a.j.stop();a.Ub(new g.EJ(64))},ueb=function(a,b){if(h$(a)&&!a.D){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.Ef(c,b));a.dc.eM(a.G.getVideoData(1).videoId,c);a.C=K9(a.dc).trackData}},veb=function(a,b){var c=a.G.getPlaylist();
if(null==c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.dc.playVideo(c.videoId,b,d,e,c.playerParams,c.Y,C$a(c));a.Ub(new g.EJ(1))},web=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{rP:1});
c&&c.length?(a.G.setOption("captions","track",b),a.D=!1):(a.G.loadModule("captions"),a.D=!0)}else a.G.setOption("captions","track",{})},h$=function(a){return K9(a.dc).videoId===a.G.getVideoData(1).videoId},i$=function(){g.X.call(this,{F:"div",
L:"ytp-mdx-popup-dialog",T:{role:"dialog"},S:[{F:"div",L:"ytp-mdx-popup-dialog-inner-content",S:[{F:"div",L:"ytp-mdx-popup-title",Z:"You're signed out"},{F:"div",L:"ytp-mdx-popup-description",Z:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{F:"div",L:"ytp-mdx-privacy-popup-buttons",S:[{F:"button",Ca:["ytp-button","ytp-mdx-privacy-popup-cancel"],Z:"Cancel"},{F:"button",Ca:["ytp-button","ytp-mdx-privacy-popup-confirm"],
Z:"Confirm"}]}]}]});this.j=new g.mL(this,250);this.cancelButton=this.ya("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.ya("ytp-mdx-privacy-popup-confirm");g.M(this,this.j);this.P(this.cancelButton,"click",this.u);this.P(this.confirmButton,"click",this.B)},j$=function(a){g.X.call(this,{F:"div",
L:"ytp-remote",S:[{F:"div",L:"ytp-remote-display-status",S:[{F:"div",L:"ytp-remote-display-status-icon",S:[g.TEa()]},{F:"div",L:"ytp-remote-display-status-text",Z:"{{statustext}}"}]}]});this.api=a;this.j=new g.mL(this,250);g.M(this,this.j);this.P(a,"presentingplayerstatechange",this.onStateChange);this.Oc(a.zb())},k$=function(a,b){g.AQ.call(this,"Play on",0,a,b);
this.G=a;this.wq={};this.P(a,"onMdxReceiversChange",this.D);this.P(a,"presentingplayerstatechange",this.D);this.D()},xeb=function(a){g.pN.call(this,a);
this.Mm={key:P$a(),name:"This computer"};this.Kj=null;this.subscriptions=[];this.FJ=this.dc=null;this.wq=[this.Mm];this.rp=this.Mm;this.Vd=new g.EJ(64);this.MP=0;this.Bg=-1;this.Sz=!1;this.Qz=this.Zv=null;if(!g.zF(this.player.R())&&!g.AF(this.player.R())){a=this.player;var b=g.RM(a);b&&(b=b.Lp())&&(b=new k$(a,b),g.M(this,b));b=new j$(a);g.M(this,b);g.aN(a,b.element,4);this.Zv=new i$;g.M(this,this.Zv);g.aN(a,this.Zv.element,4);this.Sz=!!a$()}},l$=function(a){a.Qz&&(a.player.removeEventListener("presentingplayerstatechange",
a.Qz),a.Qz=null)},yeb=function(a,b,c){a.Vd=c;
a.player.X("presentingplayerstatechange",new g.XI(c,b))},m$=function(a,b){if(b.key!==a.rp.key)if(b.key===a.Mm.key)e$();
else{var c;(c=!a.player.R().K("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.Q("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.Q("SESSION_INDEX")&&!g.Q("LOGGED_IN")))||a.Sz||!a.Zv);(c?0:g.RF(a.player.R())||g.UF(a.player.R()))&&zeb(a);a.rp=b;if(!a.player.R().K("disable_mdx_connection_in_mdx_module_for_music_web")||!g.AF(a.player.R())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.R().K("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.length;l++)h[l]=g.kN(f,l).videoId}else h=[e];f=a.player.getCurrentTime(1);a={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Y,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=C$a(c))&&(a.locationInfo=c)}Y9("Connecting to: "+g.ai(b));"cast-selector-receiver"==b.key?($9(a||null),b=a||null,B9()?z9().setLaunchParams(b):y9("setLaunchParams called before ready.")):!a&&neb()&&
X9()==b.key?a8("yt-remote-connection-change",!0):(e$(),$9(a||null),a=W9().hj(),(b=f8(a,b.key))&&f$(b,1))}}},zeb=function(a){a.player.zb().Mc()?a.player.pauseVideo():(a.Qz=function(b){!a.Sz&&g.ZI(b,8)&&(a.player.pauseVideo(),l$(a))},a.player.addEventListener("presentingplayerstatechange",a.Qz));
a.Zv&&a.Zv.ud();c$()||(g$=!0)};
g.Zp.prototype.Ep=g.ba(1,function(){return g.jd(this,6)});
g.be.prototype.aB=g.ba(0,function(){var a=g.ne(this);return 4294967296*g.ne(this)+(a>>>0)});
var n$a,Aeb=g.Ue(function(a,b,c){if(1!==a.u)return!1;g.D(b,c,g.qe(a.j));return!0},g.Ve),Beb=g.Ue(function(a,b,c,d){if(1!==a.u)return!1;
g.Bd(b,c,d,g.qe(a.j));return!0},g.Ve),Ceb=g.Ue(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.le(a.j));return!0},g.We),Deb=g.Ue(function(a,b,c,d){if(0!==a.u)return!1;
g.Bd(b,c,d,g.le(a.j));return!0},g.We),Eeb=g.Ue(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.me(a.j));return!0},g.Xe),Feb=g.Ue(function(a,b,c,d){if(0!==a.u)return!1;
g.Bd(b,c,d,g.me(a.j));return!0},g.Xe),Geb=g.Ue(function(a,b,c){if(1!==a.u)return!1;
g.D(b,c,a.j.aB());return!0},function(a,b,c){p$a(a,c,g.jd(b,c))}),Heb=g.Ue(function(a,b,c){if(1!==a.u&&2!==a.u)return!1;
b=g.pd(b,c);if(2==a.u){c=g.be.prototype.aB;var d=g.me(a.j)>>>0;for(d=a.j.j+d;a.j.j<d;)b.push(c.call(a.j))}else b.push(a.j.aB());return!0},function(a,b,c){b=g.pd(b,c);
if(null!=b)for(var d=0;d<b.length;d++)p$a(a,c,b[d])}),Ieb=g.Ue(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.re(a.j));return!0},q$a),Jeb=g.Ue(function(a,b,c,d){if(0!==a.u)return!1;
g.Bd(b,c,d,g.re(a.j));return!0},q$a),Keb=g.Ue(function(a,b,c){if(2!==a.u)return!1;
a=g.xe(a);g.zd(b,c,a);return!0},function(a,b,c){b=g.pd(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.Ge(a,c,g.uaa(e))}}),Leb=g.Ue(function(a,b,c,d){if(2!==a.u)return!1;
g.Bd(b,c,d,g.xe(a));return!0},g.gca),Meb=g.Ue(function(a,b,c,d,e){if(2!==a.u)return!1;
g.ue(a,g.oba(b,d,c),e);return!0},g.hca),s$a=[1];
g.v(t$a,g.I);g.v(u$a,g.I);var Neb=[t$a,1,g.r3,[u$a,1,Aeb,2,Ceb]];g.v(v$a,g.I);g.v(w$a,g.I);g.v(x$a,g.I);
var Oeb=[1,2],Peb=[g.Jh,1,g.q3,5,Geb,2,Meb,[v$a,1,g.s3,[w$a,1,g.q3,2,g.q3,3,Ieb],Oeb,2,g.s3,[x$a,1,g.q3,2,g.q3,3,Eeb,4,Ieb],Oeb],3,Keb,6,Heb,4,g.r3,[g.Kh,1,g.r3,[g.Lh,1,Leb,g.Oh,2,Feb,g.Oh,3,Jeb,g.Oh],2,Meb,[g.Mh,1,Deb,g.Nh,2,Beb,g.Nh,3,g.s3,Neb,g.Nh]]],Hbb={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},O8={"'":"\\'"},K$a={nba:"atp",KNa:"ska",rKa:"que",CBa:"mus",JNa:"sus",wpa:"dsp",LLa:"seq",SAa:"mic",Pka:"dpa",kca:"cds",sBa:"mlm",
Kka:"dsdtr",WCa:"ntb"};b8.prototype.equals=function(a){return a?this.id==a.id:!1};
var j8,V$a="",jab=dab("loadCastFramework")||dab("loadCastApplicationFramework"),mab=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Va(m8,g.K);g.k=m8.prototype;g.k.pU=function(a){this.C=arguments;this.j=!1;this.qc?this.B=g.Ta()+this.oh:this.qc=g.Gh(this.D,this.oh)};
g.k.stop=function(){this.qc&&(g.C.clearTimeout(this.qc),this.qc=null);this.B=null;this.j=!1;this.C=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.j&&(this.j=!1,this.I.apply(null,this.C)))};
g.k.ea=function(){this.stop();m8.Ie.ea.call(this)};
g.k.qU=function(){this.qc&&(g.C.clearTimeout(this.qc),this.qc=null);this.B?(this.qc=g.Gh(this.D,this.B-g.Ta()),this.B=null):this.u?this.j=!0:(this.j=!1,this.I.apply(null,this.C))};g.v(n8,g.K);g.k=n8.prototype;g.k.hF=function(a){this.B=arguments;this.qc||this.u?this.j=!0:yab(this)};
g.k.stop=function(){this.qc&&(g.C.clearTimeout(this.qc),this.qc=null,this.j=!1,this.B=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.j||this.qc||(this.j=!1,yab(this))};
g.k.ea=function(){g.K.prototype.ea.call(this);this.stop()};o8.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
o8.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};g.Va(zab,g.gf);g.Va(Aab,g.gf);var Dab=!1;var Fab=null;g.Va(Hab,g.gf);g.Va(Iab,g.gf);g.Va(Jab,g.gf);Kab.prototype.info=function(){};
Kab.prototype.warning=function(){};var Rab={},u8={};g.k=s8.prototype;g.k.setTimeout=function(a){this.tb=a};
g.k.tU=function(a){a=a.target;var b=this.Ta;b&&3==g.ui(a)?b.hF():this.IL(a)};
g.k.IL=function(a){try{if(a==this.j)a:{var b=g.ui(this.j),c=this.j.u,d=this.j.getStatus();if(!(3>b)&&(3!=b||g.XF||this.j&&(this.u.u||g.wi(this.j)||g.xi(this.j)))){this.Ea||4!=b||7==c||(8==c||0>=d?p8(3):p8(2));x8(this);var e=this.j.getStatus();this.Nb=e;b:if(Pab(this)){var f=g.xi(this.j);a="";var h=f.length,l=4==g.ui(this.j);if(!this.u.B){if("undefined"===typeof TextDecoder){v8(this);w8(this);var m="";break b}this.u.B=new g.C.TextDecoder}for(c=0;c<h;c++)this.u.u=!0,a+=this.u.B.decode(f[c],{stream:l&&
c==h-1});f.splice(0,h);this.u.j+=a;this.W=0;m=this.u.j}else m=g.wi(this.j);if(this.B=200==e){if(this.pc&&!this.Sa){b:{if(this.j){var n=g.yi(this.j,"X-HTTP-Initial-Response");if(n&&!g.ib(n)){var p=n;break b}}p=null}if(e=p)this.Sa=!0,Sab(this,e);else{this.B=!1;this.I=3;q8(12);v8(this);w8(this);break a}}this.va?(Uab(this,b,m),g.XF&&this.B&&3==b&&(this.eb.Ma(this.gb,"tick",this.sU),this.gb.start())):Sab(this,m);4==b&&v8(this);this.B&&!this.Ea&&(4==b?Wab(this.D,this):(this.B=!1,t8(this)))}else 400==e&&
0<m.indexOf("Unknown SID")?(this.I=3,q8(12)):(this.I=0,q8(13)),v8(this),w8(this)}}}catch(q){}finally{}};
g.k.sU=function(){if(this.j){var a=g.ui(this.j),b=g.wi(this.j);this.W<b.length&&(x8(this),Uab(this,a,b),this.B&&4!=a&&t8(this))}};
g.k.cancel=function(){this.Ea=!0;v8(this)};
g.k.rU=function(){this.V=null;var a=Date.now();0<=a-this.Fb?(2!=this.La&&(p8(3),q8(17)),v8(this),this.I=2,w8(this)):Vab(this,this.Fb-a)};
g.k.getLastError=function(){return this.I};ebb.prototype.cancel=function(){this.B=gbb(this);if(this.u)this.u.cancel(),this.u=null;else if(this.j&&0!==this.j.size){for(var a=g.r(this.j.values()),b=a.next();!b.done;b=a.next())b.value.cancel();this.j.clear()}};g.k=kbb.prototype;g.k.JL=8;g.k.og=1;g.k.connect=function(a,b,c,d){this.gi&&g.wh((0,g.Ra)(this.E3,this,a));q8(0);this.Jc=a;this.Ea=b||{};c&&void 0!==d&&(this.Ea.OSID=c,this.Ea.OAID=d);this.gb=this.Kc;this.Ha=abb(this,null,this.Jc);B8(this)};
g.k.disconnect=function(){mbb(this);if(3==this.og){var a=this.Ta++,b=this.Ha.clone();g.Fj(b,"SID",this.C);g.Fj(b,"RID",a);g.Fj(b,"TYPE","terminate");E8(this,b);a=new s8(this,this.C,a);a.La=2;a.J=Y7(b.clone());b=!1;g.C.navigator&&g.C.navigator.sendBeacon&&(b=g.C.navigator.sendBeacon(a.J.toString(),""));!b&&g.C.Image&&((new Image).src=a.J,b=!0);b||(a.j=Oab(a.D,null),a.j.send(a.J));a.qa=Date.now();t8(a)}sbb(this)};
g.k.E3=function(a){try{Eab(a,function(){})}catch(b){}};
g.k.Mf=function(){return 0==this.og};
g.k.getState=function(){return this.og};
g.k.LL=function(a){if(this.I)if(this.I=null,1==this.og){if(!a){this.Ta=Math.floor(1E5*Math.random());a=this.Ta++;var b=new s8(this,"",a),c=this.V;this.Fb&&(c?(c=g.Cf(c),g.Ef(c,this.Fb)):c=this.Fb);null!==this.J||this.xb||(b.Ha=c,c=null);var d;if(this.tb)a:{for(var e=d=0;e<this.B.length;e++){b:{var f=this.B[e];if("__data__"in f.map&&(f=f.map.__data__,"string"===typeof f)){f=f.length;break b}f=void 0}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.B.length-1){d=e+1;break a}}d=
1E3}else d=1E3;d=pbb(this,b,d);e=this.Ha.clone();g.Fj(e,"RID",a);g.Fj(e,"CVER",22);this.va&&g.Fj(e,"X-HTTP-Session-Id",this.va);E8(this,e);c&&(this.xb?d="headers="+g.Og(g.Vfa(c))+"&"+d:this.J&&g.Jj(e,this.J,c));$ab(this.u,b);this.bf&&g.Fj(e,"TYPE","init");this.tb?(g.Fj(e,"$req",d),g.Fj(e,"SID","null"),b.pc=!0,Nab(b,e,null)):Nab(b,e,d);this.og=2}}else 3==this.og&&(a?qbb(this,a):0==this.B.length||fbb(this.u)||qbb(this))};
g.k.KL=function(){this.N=null;rbb(this);if(this.Qc&&!(this.eb||null==this.j||0>=this.kd)){var a=2*this.kd;this.ra=r8((0,g.Ra)(this.Q_,this),a)}};
g.k.Q_=function(){this.ra&&(this.ra=null,this.gb=!1,this.eb=!0,q8(10),z8(this),rbb(this))};
g.k.eJ=function(a){this.j==a&&this.Qc&&!this.eb&&(lbb(this),this.eb=!0,q8(11))};
g.k.uU=function(){null!=this.W&&(this.W=null,z8(this),Yab(this),q8(19))};
g.k.G4=function(a){a?q8(2):q8(1)};
g.k.isActive=function(){return!!this.D&&this.D.isActive(this)};
g.k=ubb.prototype;g.k.PL=function(){};
g.k.OL=function(){};
g.k.NL=function(){};
g.k.ML=function(){};
g.k.isActive=function(){return!0};
g.k.vU=function(){};g.Va(G8,g.Qf);G8.prototype.open=function(){this.j.D=this.C;this.J&&(this.j.La=!0);this.j.connect(this.I,this.u||void 0)};
G8.prototype.close=function(){this.j.disconnect()};
G8.prototype.send=function(a){var b=this.j;if("string"===typeof a){var c={};c.__data__=a;a=c}else this.D&&(c={},c.__data__=g.ai(a),a=c);b.B.push(new dbb(b.Ne++,a));3==b.og&&B8(b)};
G8.prototype.ea=function(){this.j.D=null;delete this.C;this.j.disconnect();delete this.j;G8.Ie.ea.call(this)};
g.Va(wbb,zab);g.Va(xbb,Aab);g.Va(F8,ubb);F8.prototype.PL=function(){this.j.dispatchEvent("m")};
F8.prototype.OL=function(a){this.j.dispatchEvent(new wbb(a))};
F8.prototype.NL=function(a){this.j.dispatchEvent(new xbb(a))};
F8.prototype.ML=function(){this.j.dispatchEvent("n")};var I8=new g.Qf;g.v(Abb,g.gf);g.k=K8.prototype;g.k.Pq=null;g.k.hn=!1;g.k.mu=null;g.k.jF=null;g.k.fu=null;g.k.ju=null;g.k.To=null;g.k.Vo=null;g.k.Qq=null;g.k.Dh=null;g.k.VA=0;g.k.ul=null;g.k.UA=null;g.k.Uo=null;g.k.ax=-1;g.k.fS=!0;g.k.Oq=!1;g.k.iF=0;g.k.TA=null;var Fbb={},Ebb={};g.k=K8.prototype;g.k.setTimeout=function(a){this.u=a};
g.k.xU=function(a){a=a.target;var b=this.TA;b&&3==g.ui(a)?b.hF():this.QL(a)};
g.k.QL=function(a){try{if(a==this.Dh)a:{var b=g.ui(this.Dh),c=this.Dh.u,d=this.Dh.getStatus();if(g.Cc&&!g.zc(10)||g.jf&&!g.vc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.wi(this.Dh))break a;this.Oq||4!=b||7==c||(8==c||0>=d?this.j.Zk(3):this.j.Zk(2));Kbb(this);var e=this.Dh.getStatus();this.ax=e;var f=g.wi(this.Dh);if(this.hn=200==e){4==b&&M8(this);if(this.va){for(a=!0;!this.Oq&&this.VA<f.length;){var h=Gbb(this,f);if(h==Ebb){4==b&&(this.Uo=4,J8(15),a=!1);break}else if(h==Fbb){this.Uo=4;J8(16);a=
!1;break}else Lbb(this,h)}4==b&&0==f.length&&(this.Uo=1,J8(17),a=!1);this.hn=this.hn&&a;a||(M8(this),N8(this))}else Lbb(this,f);this.hn&&!this.Oq&&(4==b?this.j.WA(this):(this.hn=!1,L8(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Uo=3,J8(13)):(this.Uo=0,J8(14)),M8(this),N8(this)}}catch(l){}finally{}};
g.k.u2=function(a){H8((0,g.Ra)(this.t2,this,a),0)};
g.k.t2=function(a){this.Oq||(Kbb(this),Lbb(this,a),L8(this))};
g.k.jR=function(a){H8((0,g.Ra)(this.s2,this,a),0)};
g.k.s2=function(a){this.Oq||(M8(this),this.hn=a,this.j.WA(this),this.j.Zk(4))};
g.k.cancel=function(){this.Oq=!0;M8(this)};
g.k.wU=function(){this.mu=null;var a=Date.now();0<=a-this.jF?(2!=this.ju&&this.j.Zk(3),M8(this),this.Uo=2,J8(18),N8(this)):Jbb(this,this.jF-a)};
g.k.getLastError=function(){return this.Uo};g.k=Obb.prototype;g.k.lF=null;g.k.ai=null;g.k.RD=!1;g.k.sS=null;g.k.aC=null;g.k.tI=null;g.k.mF=null;g.k.Gj=null;g.k.jn=-1;g.k.bx=null;g.k.Qx=null;g.k.connect=function(a){this.mF=a;a=Q8(this.j,null,this.mF);J8(3);this.sS=Date.now();var b=this.j.N;null!=b?(this.bx=b[0],(this.Qx=b[1])?(this.Gj=1,Pbb(this)):(this.Gj=2,Qbb(this))):(Z7(a,"MODE","init"),this.ai=new K8(this),this.ai.Pq=this.lF,Dbb(this.ai,a,!1,null,!0),this.Gj=0)};
g.k.dX=function(a){if(a)this.Gj=2,Qbb(this);else{J8(4);var b=this.j;b.Ml=b.mp.jn;U8(b,9)}a&&this.Zk(2)};
g.k.kF=function(a){return this.j.kF(a)};
g.k.abort=function(){this.ai&&(this.ai.cancel(),this.ai=null);this.jn=-1};
g.k.Mf=function(){return!1};
g.k.RL=function(a,b){this.jn=a.ax;if(0==this.Gj)if(b){try{var c=this.u.parse(b)}catch(d){a=this.j;a.Ml=this.jn;U8(a,2);return}this.bx=c[0];this.Qx=c[1]}else a=this.j,a.Ml=this.jn,U8(a,2);else if(2==this.Gj)if(this.RD)J8(7),this.tI=Date.now();else if("11111"==b){if(J8(6),this.RD=!0,this.aC=Date.now(),a=this.aC-this.sS,!g.Cc||g.zc(10)||500>a)this.jn=200,this.ai.cancel(),J8(12),R8(this.j,this,!0)}else J8(8),this.aC=this.tI=Date.now(),this.RD=!1};
g.k.WA=function(){this.jn=this.ai.ax;if(this.ai.hn)0==this.Gj?this.Qx?(this.Gj=1,Pbb(this)):(this.Gj=2,Qbb(this)):2==this.Gj&&((!g.Cc||g.zc(10)?!this.RD:200>this.tI-this.aC)?(J8(11),R8(this.j,this,!1)):(J8(12),R8(this.j,this,!0)));else{0==this.Gj?J8(9):2==this.Gj&&J8(10);var a=this.j;this.ai.getLastError();a.Ml=this.jn;U8(a,2)}};
g.k.ex=function(){return this.j.ex()};
g.k.isActive=function(){return this.j.isActive()};
g.k.Zk=function(a){this.j.Zk(a)};g.k=Rbb.prototype;g.k.Ll=null;g.k.gx=null;g.k.Ei=null;g.k.zf=null;g.k.nF=null;g.k.XA=null;g.k.SL=null;g.k.YA=null;g.k.hx=0;g.k.zU=0;g.k.gh=null;g.k.Wo=null;g.k.pn=null;g.k.Sq=null;g.k.mp=null;g.k.EE=null;g.k.pu=-1;g.k.TL=-1;g.k.Ml=-1;g.k.ou=0;g.k.nu=0;g.k.Rq=8;g.Va(Tbb,g.gf);g.Va(Ubb,g.gf);g.k=Rbb.prototype;g.k.connect=function(a,b,c,d,e){J8(0);this.nF=b;this.gx=c||{};d&&void 0!==e&&(this.gx.OSID=d,this.gx.OAID=e);this.J?(H8((0,g.Ra)(this.WN,this,a),100),Wbb(this)):this.WN(a)};
g.k.disconnect=function(){Xbb(this);if(3==this.j){var a=this.hx++,b=this.XA.clone();g.Fj(b,"SID",this.C);g.Fj(b,"RID",a);g.Fj(b,"TYPE","terminate");T8(this,b);a=new K8(this,this.C,a);a.ju=2;a.To=Y7(b.clone());r$a(new Image,a.To.toString());a.fu=Date.now();L8(a)}gcb(this)};
g.k.WN=function(a){this.mp=new Obb(this);this.mp.lF=this.Ll;this.mp.u=this.D;this.mp.connect(a)};
g.k.Mf=function(){return 0==this.j};
g.k.getState=function(){return this.j};
g.k.VL=function(a){this.Wo=null;bcb(this,a)};
g.k.UL=function(){this.pn=null;this.zf=new K8(this,this.C,"rpc",this.I);this.zf.Pq=this.Ll;this.zf.iF=0;var a=this.SL.clone();g.Fj(a,"RID","rpc");g.Fj(a,"SID",this.C);g.Fj(a,"CI",this.EE?"0":"1");g.Fj(a,"AID",this.pu);T8(this,a);if(!g.Cc||g.zc(10))g.Fj(a,"TYPE","xmlhttp"),Dbb(this.zf,a,!0,this.YA,!1);else{g.Fj(a,"TYPE","html");var b=this.zf,c=!!this.YA;b.ju=3;b.To=Y7(a.clone());Ibb(b,c)}};
g.k.RL=function(a,b){if(0!=this.j&&(this.zf==a||this.Ei==a))if(this.Ml=a.ax,this.Ei==a&&3==this.j)if(7<this.Rq){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.pn){if(this.zf)if(this.zf.fu+3E3<this.Ei.fu)S8(this),this.zf.cancel(),this.zf=null;else break a;ecb(this);J8(19)}}else this.TL=a[1],0<this.TL-this.pu&&37500>a[2]&&this.EE&&0==this.nu&&!this.Sq&&(this.Sq=H8((0,g.Ra)(this.AU,this),6E3));else U8(this,11)}else null!=b&&U8(this,11);else if(this.zf==
a&&S8(this),!g.ib(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.pu=c[0],c=c[1],2==this.j?"c"==c[0]?(this.C=c[1],this.YA=c[2],c=c[3],null!=c?this.Rq=c:this.Rq=6,this.j=3,this.gh&&this.gh.YL(),this.SL=Q8(this,this.ex()?this.YA:null,this.nF),ccb(this)):"stop"==c[0]&&U8(this,7):3==this.j&&("stop"==c[0]?U8(this,7):"noop"!=c[0]&&this.gh&&this.gh.XL(c),this.nu=0)};
g.k.AU=function(){null!=this.Sq&&(this.Sq=null,this.zf.cancel(),this.zf=null,ecb(this),J8(20))};
g.k.WA=function(a){if(this.zf==a){S8(this);this.zf=null;var b=2}else if(this.Ei==a)this.Ei=null,b=1;else return;this.Ml=a.ax;if(0!=this.j)if(a.hn)if(1==b){b=Date.now()-a.fu;var c=I8;c.dispatchEvent(new Tbb(c,a.Qq?a.Qq.length:0,b,this.ou));Vbb(this);this.B.length=0}else ccb(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Ml)){if(d=1==b)this.Ei||this.Wo||1==this.j||2<=this.ou?d=!1:(this.Wo=H8((0,g.Ra)(this.VL,this,a),dcb(this,this.ou)),this.ou++,d=!0);d=!(d||2==b&&ecb(this))}if(d)switch(c){case 1:U8(this,
5);break;case 4:U8(this,10);break;case 3:U8(this,6);break;case 7:U8(this,12);break;default:U8(this,2)}}};
g.k.yU=function(a){if(!g.Ub(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
g.k.F4=function(a){a?J8(2):(J8(1),fcb(this,8))};
g.k.kF=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.ri;a.J=!1;return a};
g.k.isActive=function(){return!!this.gh&&this.gh.isActive(this)};
g.k.Zk=function(a){var b=I8;b.dispatchEvent(new Ubb(b,a))};
g.k.ex=function(){return!(!g.Cc||g.zc(10))};
g.k=hcb.prototype;g.k.YL=function(){};
g.k.XL=function(){};
g.k.WL=function(){};
g.k.oF=function(){};
g.k.ZL=function(){return{}};
g.k.isActive=function(){return!0};g.k=icb.prototype;g.k.enqueue=function(a){this.u.push(a)};
g.k.isEmpty=function(){return 0===this.j.length&&0===this.u.length};
g.k.clear=function(){this.j=[];this.u=[]};
g.k.contains=function(a){return g.Ub(this.j,a)||g.Ub(this.u,a)};
g.k.remove=function(a){var b=this.j;var c=(0,g.aXa)(b,a);0<=c?(g.Wb(b,c),b=!0):b=!1;return b||g.Yb(this.u,a)};
g.k.Pj=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};jcb.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.S("enable_client_streamz_web")){a=g.r(a);for(var c=a.next();!c.done;c=a.next())c=g.dea(c.value),c={serializedIncrementBatch:g.Ac(g.Te(c,Peb))},g.uv("streamzIncremented",c,{iK:b})}};var V8;g.v(kcb,g.gf);g.v(lcb,g.gf);g.Va(W8,g.K);g.k=W8.prototype;g.k.j2=function(){this.oh=Math.min(3E5,2*this.oh);this.B();this.u&&this.start()};
g.k.start=function(){var a=this.oh+15E3*Math.random();g.Xn(this.j,a);this.u=Date.now()+a};
g.k.stop=function(){this.j.stop();this.u=0};
g.k.isActive=function(){return this.j.isActive()};
g.k.reset=function(){this.j.stop();this.oh=5E3};g.Va(ncb,hcb);g.k=ncb.prototype;g.k.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.k.Hg=function(a){return this.B.Hg(a)};
g.k.X=function(a,b){return this.B.X.apply(this.B,arguments)};
g.k.dispose=function(){this.W||(this.W=!0,g.cf(this.B),this.disconnect(),g.cf(this.u),this.u=null,this.Y=function(){return""})};
g.k.isDisposed=function(){return this.W};
g.k.connect=function(a,b,c){if(!this.j||2!=this.j.getState()){this.V="";this.u.stop();this.I=a||null;this.D=b||0;a=this.qa+"/test";b=this.qa+"/bind";var d=new Rbb(c?c.firstTestResults:null,c?c.secondTestResults:null,this.La),e=this.j;e&&(e.gh=null);d.gh=this;this.j=d;ocb(this);if(this.j){d=g.Q("ID_TOKEN");var f=this.j.Ll||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.j.Ll=f}e?(3!=e.getState()&&0==Zbb(e)||e.getState(),this.j.connect(a,b,this.J,e.C,e.pu)):c?this.j.connect(a,
b,this.J,c.sessionId,c.arrayId):this.j.connect(a,b,this.J)}};
g.k.disconnect=function(a){this.N=a||0;this.u.stop();ocb(this);this.j&&(3==this.j.getState()&&bcb(this.j),this.j.disconnect());this.N=0};
g.k.sendMessage=function(a,b){a={_sc:a};b&&g.Ef(a,b);this.u.isActive()||2==(this.j?this.j.getState():0)?this.C.push(a):this.Bv()&&(ocb(this),Ybb(this.j,a))};
g.k.YL=function(){this.u.reset();this.I=null;this.D=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)Ybb(this.j,a[b])}this.X("handlerOpened");pab(this.Ha,"BROWSER_CHANNEL")};
g.k.WL=function(a){var b=2==a&&401==this.j.Ml;4==a||b||this.u.start();this.X("handlerError",a,b);vab(this.va,"BROWSER_CHANNEL")};
g.k.oF=function(a,b){if(!this.u.isActive())this.X("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.C.push(e)}rab(this.ra,"BROWSER_CHANNEL");a&&this.Ta.j.rF("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.Wa.j.rF("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.k.ZL=function(){var a={v:2};this.V&&(a.gsessionid=this.V);0!=this.D&&(a.ui=""+this.D);0!=this.N&&(a.ui=""+this.N);this.I&&g.Ef(a,this.I);return a};
g.k.XL=function(a){"S"==a[0]?this.V=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),this.j.disconnect()):this.X("handlerMessage",new mcb(a[0],a[1]));tab(this.Ea,"BROWSER_CHANNEL")};
g.k.Bv=function(){return!!this.j&&3==this.j.getState()};
g.k.Lo=function(a){(this.J.loungeIdToken=a)||this.u.stop();if(this.Sa&&this.j){var b=this.j.Ll||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.j.Ll=b}};
g.k.Ep=function(){return this.J.id};
g.k.Kp=function(){return this.u.isActive()?this.u.u-Date.now():NaN};
g.k.nt=function(){var a=this.u;g.Yn(a.j);a.start()};
g.k.G3=function(){this.u.isActive();0==Zbb(this.j)&&this.connect(this.I,this.D)};X8.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
X8.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
X8.prototype.D=function(a){a(Error("request timed out"))};g.v(qcb,g.Qf);g.k=qcb.prototype;g.k.connect=function(a,b,c){this.Rc.connect(a,b,c)};
g.k.disconnect=function(a){this.Rc.disconnect(a)};
g.k.nt=function(){this.Rc.nt()};
g.k.Ep=function(){return this.Rc.Ep()};
g.k.Kp=function(){return this.Rc.Kp()};
g.k.Bv=function(){return this.Rc.Bv()};
g.k.DU=function(){this.dispatchEvent("channelOpened");var a=this.Rc,b=this.j;g.zz("yt-remote-session-browser-channel",{firstTestResults:[""],secondTestResults:!a.j.EE,sessionId:a.j.C,arrayId:a.j.pu});g.zz("yt-remote-session-screen-id",b);a=g8();b=h8();g.Ub(a,b)||a.push(b);U$a(a);W$a()};
g.k.BU=function(){this.dispatchEvent("channelClosed")};
g.k.CU=function(a){this.dispatchEvent(new kcb(a))};
g.k.onError=function(a){this.dispatchEvent(new lcb(a?1:0))};
g.k.sendMessage=function(a,b){this.Rc.sendMessage(a,b)};
g.k.Lo=function(a){this.Rc.Lo(a)};
g.k.dispose=function(){this.Rc.dispose()};g.k=rcb.prototype;
g.k.connect=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;2!==this.I&&(this.B.stop(),this.N=a,this.J=b,tcb(this),(a=g.Q("ID_TOKEN"))?this.C["x-youtube-identity-token"]=a:delete this.C["x-youtube-identity-token"],this.j&&(this.u.device=this.j.device,this.u.name=this.j.name,this.u.app=this.j.app,this.u.id=this.j.id,this.j.LZ&&(this.u.mdxVersion=""+this.j.LZ),this.j.theme&&(this.u.theme=this.j.theme),this.j.capabilities&&(this.u.capabilities=this.j.capabilities)),0!==this.J?this.u.ui=""+this.J:delete this.u.ui,
Object.assign(this.u,this.N),this.channel=new G8(this.pathPrefix,{aZ:"gsessionid",OZ:this.C,PZ:this.u}),this.channel.open(),this.I=2,scb(this))};
g.k.disconnect=function(a){this.V=void 0===a?0:a;this.B.stop();tcb(this);this.channel&&(0!==this.V?this.u.ui=""+this.V:delete this.u.ui,this.channel.close());this.V=0};
g.k.Kp=function(){return this.B.isActive()?this.B.u-Date.now():NaN};
g.k.nt=function(){var a=this.B;g.Yn(a.j);a.start()};
g.k.sendMessage=function(a,b){this.channel&&(tcb(this),a=Object.assign({},{_sc:a},b),this.channel.send(a))};
g.k.Lo=function(a){a||this.B.stop();a?this.C["X-YouTube-LoungeId-Token"]=a:delete this.C["X-YouTube-LoungeId-Token"]};
g.k.Ep=function(){return this.j?this.j.id:""};
g.k.X=function(a){return this.D.X.apply(this.D,[a].concat(g.t(g.za.apply(1,arguments))))};
g.k.subscribe=function(a,b,c){return this.D.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.D.unsubscribe(a,b,c)};
g.k.Hg=function(a){return this.D.Hg(a)};
g.k.dispose=function(){this.W||(this.W=!0,g.cf(this.D),this.disconnect(),g.cf(this.B),this.qa=function(){return""})};
g.k.isDisposed=function(){return this.W};g.v(ucb,g.Qf);g.k=ucb.prototype;g.k.connect=function(a,b){this.j.connect(a,b)};
g.k.disconnect=function(a){this.j.disconnect(a)};
g.k.nt=function(){this.j.nt()};
g.k.Ep=function(){return this.j.Ep()};
g.k.Kp=function(){return this.j.Kp()};
g.k.Bv=function(){return 3===this.j.I};
g.k.GU=function(){this.dispatchEvent("channelOpened")};
g.k.EU=function(){this.dispatchEvent("channelClosed")};
g.k.FU=function(a){this.dispatchEvent(new kcb(a))};
g.k.onError=function(){this.dispatchEvent(new lcb(401===this.j.Cg?1:0))};
g.k.sendMessage=function(a,b){this.j.sendMessage(a,b)};
g.k.Lo=function(a){this.j.Lo(a)};
g.k.dispose=function(){this.j.dispose()};var Ccb=Date.now(),Z8=null,c9=Array(50),b9=-1,d9=!1;g.Va(e9,g.Ny);e9.prototype.hj=function(){return this.screens};
e9.prototype.contains=function(a){return!!R$a(this.screens,a)};
e9.prototype.get=function(a){return a?f8(this.screens,a):null};
e9.prototype.info=function(a){$8(this.I,a)};g.v(Gcb,g.Ny);g.k=Gcb.prototype;g.k.start=function(){!this.j&&isNaN(this.qc)&&this.yR()};
g.k.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.qc)||(g.iu(this.qc),this.qc=NaN)};
g.k.ea=function(){this.stop();g.Ny.prototype.ea.call(this)};
g.k.yR=function(){this.qc=NaN;this.j=g.lu(Y8(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.Ra)(this.IU,this),onError:(0,g.Ra)(this.HU,this),onTimeout:(0,g.Ra)(this.JU,this)})};
g.k.IU=function(a,b){this.j=null;a=b.screen||{};a.dialId=this.C;a.name=this.I;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.X("pairingComplete",new c8(a),b)};
g.k.HU=function(a){this.j=null;a.status&&404==a.status?this.u>=Qeb.length?this.X("pairingFailed",Error("DIAL polling timed out")):(a=Qeb[this.u],this.qc=g.gu((0,g.Ra)(this.yR,this),a),this.u++):this.X("pairingFailed",Error("Server error "+a.status))};
g.k.JU=function(){this.j=null;this.X("pairingFailed",Error("Server not responding"))};
var Qeb=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Va(g9,e9);g.k=g9.prototype;g.k.start=function(){f9(this)&&this.X("screenChange");!g.Az("yt-remote-lounge-token-expiration")&&Hcb(this);g.iu(this.j);this.j=g.gu((0,g.Ra)(this.start,this),1E4)};
g.k.add=function(a,b){f9(this);Dcb(this,a);h9(this,!1);this.X("screenChange");b(a);a.token||Hcb(this)};
g.k.remove=function(a,b){var c=f9(this);Fcb(this,a)&&(h9(this,!1),c=!0);b(a);c&&this.X("screenChange")};
g.k.CE=function(a,b,c,d){var e=f9(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,h9(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.X("screenChange")};
g.k.ea=function(){g.iu(this.j);g9.Ie.ea.call(this)};
g.k.zY=function(a){f9(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}h9(this,!b);b&&$8(this.I,"Missed "+b+" lounge tokens.")};
g.k.xY=function(a){$8(this.I,"Requesting lounge tokens failed: "+a)};g.v(Jcb,g.Ny);g.k=Jcb.prototype;g.k.start=function(){var a=parseInt(g.Az("yt-remote-fast-check-period")||"0",10);(this.C=g.Ta()-144E5<a?0:a)?i9(this):(this.C=g.Ta()+3E5,g.zz("yt-remote-fast-check-period",this.C),this.UJ())};
g.k.isEmpty=function(){return g.yf(this.j)};
g.k.update=function(){Icb("Updating availability on schedule.");var a=this.I(),b=g.pf(this.j,function(c,d){return c&&!!f8(a,d)},this);
Mcb(this,b)};
g.k.ea=function(){g.iu(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.Ny.prototype.ea.call(this)};
g.k.UJ=function(){g.iu(this.B);this.B=NaN;this.u&&this.u.abort();var a=Ncb(this);if(E$a(a)){var b=Y8(this.D,"/pairing/get_screen_availability");this.u=pcb(this.D,b,{lounge_token:g.uf(a).join(",")},(0,g.Ra)(this.M1,this,a),(0,g.Ra)(this.L1,this))}else Mcb(this,{}),i9(this)};
g.k.M1=function(a,b){this.u=null;var c=g.uf(Ncb(this));if(g.oc(c,g.uf(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;Mcb(this,c);i9(this)}else this.Ye("Changing Screen set during request."),this.UJ()};
g.k.L1=function(a){this.Ye("Screen availability failed: "+a);this.u=null;i9(this)};
g.k.Ye=function(a){$8("OnlineScreenService",a)};g.Va(j9,e9);g.k=j9.prototype;g.k.start=function(){this.u.start();this.j.start();this.screens.length&&(this.X("screenChange"),this.j.isEmpty()||this.X("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.j.update()};
g.k.CE=function(a,b,c,d){this.u.contains(a)?this.u.CE(a,b,c,d):(a="Updating name of unknown screen: "+a.name,$8(this.I,a),d(Error(a)))};
g.k.hj=function(a){return a?this.screens:g.$b(this.screens,g.um(this.B,function(b){return!this.contains(b)},this))};
g.k.aM=function(){return g.um(this.hj(!0),function(a){return!!this.j.j[a.id]},this)};
g.k.bM=function(a,b,c,d,e,f){var h=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new Gcb(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.cf(l);e(k9(h,m),n)});
l.subscribe("pairingFailed",function(m){g.cf(l);f(m)});
l.start();return(0,g.Ra)(l.stop,l)};
g.k.KU=function(a,b,c,d){g.lu(Y8(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Ra)(function(e,f){e=new c8(f.screen||{});if(!e.name||Rcb(this,e.name)){a:{f=e.name;for(var h=2,l=b(f,h);Rcb(this,l);){h++;if(20<h)break a;l=b(f,h)}f=l}e.name=f}c(k9(this,e))},this),
onError:(0,g.Ra)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Ra)(function(){d(Error("pairing request timed out."))},this)})};
g.k.ea=function(){g.cf(this.u);g.cf(this.j);j9.Ie.ea.call(this)};
g.k.IY=function(){Tcb(this);this.X("screenChange");this.j.update()};
j9.prototype.dispose=j9.prototype.dispose;g.Va(l9,g.Ny);g.k=l9.prototype;g.k.getScreen=function(){return this.C};
g.k.Qh=function(a){this.isDisposed()||(a&&(n9(this,""+a),this.X("sessionFailed")),this.C=null,this.X("sessionScreen",null))};
g.k.info=function(a){$8(this.va,a)};
g.k.cM=function(){return null};
g.k.mK=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Ra)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Ra)(function(){n9(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.ea=function(){this.mK("");l9.Ie.ea.call(this)};g.v(o9,l9);g.k=o9.prototype;g.k.lK=function(a){if(this.u){if(this.u==a)return;n9(this,"Overriding cast session with new session object");edb(this);this.qa=!1;this.V="unknown";this.u.removeUpdateListener(this.Y);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.ra)}this.u=a;this.u.addUpdateListener(this.Y);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.ra);$cb(this,"getMdxSessionStatus")};
g.k.Jv=function(a){this.info("launchWithParams no-op for Cast: "+g.ai(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.Ra)(function(){this.Qh()},this),(0,g.Ra)(function(){this.Qh(Error("Failed to stop receiver app."))},this)):this.Qh(Error("Stopping cast device without session."))};
g.k.mK=function(){};
g.k.ea=function(){this.info("disposeInternal");edb(this);this.u&&(this.u.removeUpdateListener(this.Y),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.ra));this.u=null;l9.prototype.ea.call(this)};
g.k.G2=function(a,b){if(!this.isDisposed())if(b)if(b=$7(b),g.Na(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.ai(b)),a){case "mdxSessionStatus":Xcb(this,b);break;case "loungeToken":adb(this,b);break;default:n9(this,"Unknown youtube message: "+a)}else n9(this,"Unable to parse message.");else n9(this,"No data in message.")};
g.k.PO=function(a,b,c,d){g.iu(this.N);this.N=0;Qcb(this.B,this.j.label,a,this.j.friendlyName,(0,g.Ra)(function(e){e?b(e):0<=d?(n9(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.N=g.gu((0,g.Ra)(this.PO,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.cM=function(){return this.u};
g.k.LU=function(a){this.isDisposed()||a||(n9(this,"Cast session died."),this.Qh())};g.v(p9,l9);g.k=p9.prototype;g.k.lK=function(a){this.u=a;this.u.addUpdateListener(this.Ea)};
g.k.Jv=function(a){this.Ha=a;this.W()};
g.k.stop=function(){mdb(this);this.u?this.u.stop((0,g.Ra)(this.Qh,this,null),(0,g.Ra)(this.Qh,this,"Failed to stop DIAL device.")):this.Qh()};
g.k.ea=function(){mdb(this);this.u&&this.u.removeUpdateListener(this.Ea);this.u=null;l9.prototype.ea.call(this)};
g.k.MU=function(a){this.isDisposed()||a||(n9(this,"DIAL session died."),this.D(),this.D=function(){},this.Qh())};g.v(s9,l9);s9.prototype.stop=function(){this.Qh()};
s9.prototype.lK=function(){};
s9.prototype.Jv=function(){g.iu(this.u);this.u=NaN;var a=f8(this.B.hj(),this.j.label);a?m9(this,a):this.Qh(Error("No such screen"))};
s9.prototype.ea=function(){g.iu(this.u);this.u=NaN;l9.prototype.ea.call(this)};g.v(t9,g.Ny);g.k=t9.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.N,[chrome.cast.Capability.AUDIO_OUT]);this.V||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Ra)(this.v1,this);c=new chrome.cast.ApiConfig(c,(0,g.Ra)(this.fR,this),e,d,a);c.customDialLaunchCallback=(0,g.Ra)(this.k0,this);
chrome.cast.initialize(c,(0,g.Ra)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),zcb(),this.u.subscribe("onlineScreenChange",(0,g.Ra)(this.dM,this)),this.B=pdb(this),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Ra)(function(f){this.Ye("Failed to set initial custom receivers: "+g.ai(f))},this)),this.X("yt-remote-cast2-availability-change",v9(this)),b(!0))},this),(0,g.Ra)(function(f){this.Ye("Failed to initialize API: "+g.ai(f));
b(!1)},this))};
g.k.P3=function(a,b){u9("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.getScreen();if(!a||c&&c.id!=a)u9("Unsetting old screen status: "+this.j.j.friendlyName),w9(this,null)}if(a&&b){if(!this.j){c=f8(this.u.hj(),a);if(!c){u9("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){u9("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=ndb(this,c);a||(u9("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Ra)(function(d){this.Ye("Failed to set initial custom receivers: "+g.ai(d))},this)));
u9("setConnectedScreenStatus: new active receiver: "+a.friendlyName);w9(this,new s9(this.u,a),!0)}this.j.mK(b)}else u9("setConnectedScreenStatus: no screen.")};
g.k.Q3=function(a){this.isDisposed()?this.Ye("Setting connection data on disposed cast v2"):this.j?this.j.Jv(a):this.Ye("Setting connection data without a session")};
g.k.OU=function(){this.isDisposed()?this.Ye("Stopping session on disposed cast v2"):this.j?(this.j.stop(),w9(this,null)):u9("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.Ra)(this.fR,this),(0,g.Ra)(this.P1,this))};
g.k.ea=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Ra)(this.dM,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=wcb,b=g.Ha("yt.mdx.remote.debug.handlers_");g.Yb(b||[],a);g.cf(this.j);g.Ny.prototype.ea.call(this)};
g.k.Ye=function(a){$8("Controller",a)};
g.k.hR=function(a,b){this.j==a&&(b||w9(this,null),this.X("yt-remote-cast2-session-change",b))};
g.k.s1=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),u9("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)u9("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{u9("onReceiverAction_: Casting to active receiver.");this.j.getScreen()&&this.X("yt-remote-cast2-session-change",this.j.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:w9(this,
new s9(this.u,a));break;case chrome.cast.ReceiverType.DIAL:w9(this,new p9(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:w9(this,new o9(this.u,a,this.config_));break;default:this.Ye("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.Ye("Stopping receiver w/o session: "+a.friendlyName)}else this.Ye("onReceiverAction_ called without receiver.")};
g.k.k0=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Ye("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.Ye("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.getScreen())return u9("Reselecting dial screen."),
this.X("yt-remote-cast2-session-change",this.j.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Ye('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);w9(this,new p9(this.u,b,this.C,this.config_))}b=this.j;b.N=a;b.N.appState==chrome.cast.DialAppState.RUNNING?(a=b.N.extraData||{},c=a.screenId||null,q9(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=jdb(b,{name:b.j.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.N.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.Rt(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=kdb(b,c)):a=kdb(b,c)):a=hdb(b);return a};
g.k.fR=function(a){var b=this;if(!this.isDisposed()&&!this.I){u9("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(c.receiverType==chrome.cast.ReceiverType.CAST)u9("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),w9(this,new o9(this.u,c,this.config_),!0);else{this.Ye("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.j.j,e=f8(this.u.hj(),
d.label);e&&d8(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(u9("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.cf(this.j),this.j=new o9(this.u,c,this.config_),this.j.subscribe("sessionScreen",(0,g.Ra)(this.hR,this,this.j)),this.j.subscribe("sessionFailed",function(){return odb(b,b.j)}),this.j.Jv(null));
this.j.lK(a)}}};
g.k.NU=function(){return this.j?this.j.cM():null};
g.k.P1=function(a){this.isDisposed()||(this.Ye("Failed to estabilish a session: "+g.ai(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&w9(this,null),this.X("yt-remote-cast2-session-failed"))};
g.k.v1=function(a){u9("Receiver availability updated: "+a);if(!this.isDisposed()){var b=v9(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;v9(this)!=b&&this.X("yt-remote-cast2-availability-change",v9(this))}};
g.k.dM=function(){this.isDisposed()||(this.B=pdb(this),u9("Updating custom receivers: "+g.ai(this.B)),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Ra)(function(){this.Ye("Failed to set custom receivers.")},this)),this.X("yt-remote-cast2-availability-change",v9(this)))};
t9.prototype.setLaunchParams=t9.prototype.Q3;t9.prototype.setConnectedScreenStatus=t9.prototype.P3;t9.prototype.stopSession=t9.prototype.OU;t9.prototype.getCastSession=t9.prototype.NU;t9.prototype.requestSession=t9.prototype.requestSession;t9.prototype.init=t9.prototype.init;t9.prototype.dispose=t9.prototype.dispose;var ydb=[];g.k=D9.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";Edb(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.zm=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.I=a.playerTimeAt,this.C=a.seekableStart,this.j=a.seekableEnd,this.D=a.duration,this.N=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.k.Mc=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.xj=function(a){this.D=isNaN(a)?0:a};
g.k.getDuration=function(){return this.u?this.D+E9(this):this.D};
g.k.clone=function(){return new D9(Fdb(this))};g.v(J9,g.Ny);g.k=J9.prototype;g.k.getState=function(){return this.B};
g.k.Kp=function(){return this.C.getReconnectTimeout()};
g.k.nt=function(){this.C.reconnect()};
g.k.play=function(){L9(this)?(this.j?this.j.play(null,g.Yf,P9(this,"play")):O9(this,"play"),Idb(this,1,G9(K9(this))),this.X("remotePlayerChange")):M9(this,this.play)};
g.k.pause=function(){L9(this)?(this.j?this.j.pause(null,g.Yf,P9(this,"pause")):O9(this,"pause"),Idb(this,2,G9(K9(this))),this.X("remotePlayerChange")):M9(this,this.pause)};
g.k.seekTo=function(a){if(L9(this)){if(this.j){var b=K9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Mc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.j.seek(c,g.Yf,P9(this,"seekTo",{newTime:a}))}else O9(this,"seekTo",{newTime:a});Idb(this,3,a);this.X("remotePlayerChange")}else M9(this,g.Sa(this.seekTo,a))};
g.k.stop=function(){if(L9(this)){this.j?this.j.stop(null,g.Yf,P9(this,"stopVideo")):O9(this,"stopVideo");var a=K9(this);a.index=-1;a.videoId="";Edb(a);N9(this,a);this.X("remotePlayerChange")}else M9(this,this.stop)};
g.k.setVolume=function(a,b){if(L9(this)){var c=K9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Ra)(function(){a9("set receiver volume: "+d)},this),(0,g.Ra)(function(){this.Ye("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Ra)(function(){a9("set receiver muted: "+b)},this),(0,g.Ra)(function(){this.Ye("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);O9(this,"setVolume",e)}c.muted=b;c.volume=a;N9(this,c)}else M9(this,g.Sa(this.setVolume,a,b))};
g.k.eM=function(a,b){if(L9(this)){var c=K9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.ai(b.style),g.Ef(a,c.trackData));O9(this,"setSubtitlesTrack",a);N9(this,c)}else M9(this,g.Sa(this.eM,a,b))};
g.k.setAudioTrack=function(a,b){L9(this)?(b=b.getLanguageInfo().getId(),O9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=K9(this),a.audioTrackId=b,N9(this,a)):M9(this,g.Sa(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;h=void 0===h?null:h;var l=K9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);H9(l,a,c||0);void 0!==b&&(F9(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);h&&(m.locationInfo=g.ai(h));O9(this,"setPlaylist",m);d||N9(this,l)};
g.k.KD=function(a,b){if(L9(this)){if(a&&b){var c=K9(this);H9(c,a,b);N9(this,c)}O9(this,"previous")}else M9(this,g.Sa(this.KD,a,b))};
g.k.nextVideo=function(a,b){if(L9(this)){if(a&&b){var c=K9(this);H9(c,a,b);N9(this,c)}O9(this,"next")}else M9(this,g.Sa(this.nextVideo,a,b))};
g.k.Ju=function(){if(L9(this)){O9(this,"clearPlaylist");var a=K9(this);a.reset();N9(this,a);this.X("remotePlayerChange")}else M9(this,this.Ju)};
g.k.jO=function(){L9(this)?O9(this,"dismissAutoplay"):M9(this,this.jO)};
g.k.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.X("proxyStateChange",a,this.B)}g.Ny.prototype.dispose.call(this)};
g.k.ea=function(){Hdb(this);this.C=null;this.D.clear();I9(this,null);g.Ny.prototype.ea.call(this)};
g.k.oK=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.X("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.j.length&&(b.j=b.u,b.j.reverse(),b.u=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.k.o1=function(a,b){this.X(a,b)};
g.k.U_=function(a){if(!a)this.Fz(null),I9(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=K9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)a9("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,N9(this,b)}};
g.k.Fz=function(a){a9("Cast media: "+!!a);this.j&&this.j.removeUpdateListener(this.N);if(this.j=a)this.j.addUpdateListener(this.N),Jdb(this),this.X("remotePlayerChange")};
g.k.T_=function(a){a?(Jdb(this),this.X("remotePlayerChange")):this.Fz(null)};
g.k.MK=function(){O9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.X_=function(){var a=Bdb();a&&I9(this,a)};
g.k.Ye=function(a){$8("CP",a)};g.v(S9,g.Ny);g.k=S9.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,h=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);h&&(m.clickTrackingParams=h);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ea&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.j.listId=c);this.j.videoId=d;this.j.index=l||0;this.j.state=3;F9(this.j,
n);this.D="UNSUPPORTED";c=this.Ea?"setInitialState":"setPlaylist";Q9("Connecting with "+c+" and params: "+g.ai(m));this.u.connect({method:c,params:g.ai(m)},a,X$a())}else Q9("Connecting without params"),this.u.connect({},a,X$a());Ndb(this)};
g.k.Lo=function(a){this.u.Lo(a)};
g.k.dispose=function(){this.isDisposed()||(g.Ga("yt.mdx.remote.remoteClient_",null),this.X("beforeDispose"),R9(this,3));g.Ny.prototype.dispose.call(this)};
g.k.ea=function(){Odb(this);Qdb(this);Pdb(this);g.iu(this.N);this.N=NaN;g.iu(this.V);this.V=NaN;this.C=null;g.ix(this.W);this.W.length=0;this.u.dispose();g.Ny.prototype.ea.call(this);this.D=this.J=this.B=this.j=this.u=null};
g.k.zP=function(a){if(!this.B||0===this.B.length)return!1;for(var b=g.r(this.B),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.k.pY=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Ky())?this.u.Bv()&&isNaN(this.I)&&(a=1):a=2);return a};
g.k.Su=function(a){Q9("Disconnecting with "+a);g.Ga("yt.mdx.remote.remoteClient_",null);Odb(this);this.X("beforeDisconnect",a);1==a&&i8();this.u.disconnect(a);this.dispose()};
g.k.nY=function(){var a=this.j;this.C&&(a=this.j.clone(),H9(a,this.C,a.index));return Fdb(a)};
g.k.R3=function(a){var b=this,c=new D9(a);c.videoId&&c.videoId!=this.j.videoId&&(this.C=c.videoId,g.iu(this.N),this.N=g.gu(function(){if(b.C){var e=b.C;b.C=null;b.j.videoId!=e&&T9(b,"getNowPlaying")}},5E3));
var d=[];this.j.listId==c.listId&&this.j.videoId==c.videoId&&this.j.index==c.index||d.push("remoteQueueChange");this.j.playerState==c.playerState&&this.j.volume==c.volume&&this.j.muted==c.muted&&G9(this.j)==G9(c)&&g.ai(this.j.trackData)==g.ai(c.trackData)||d.push("remotePlayerChange");this.j.reset(a);g.qc(d,function(e){this.X(e)},this)};
g.k.OO=function(){var a=this.u.Ep(),b=g.Sb(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Ky=function(){return this.u.Kp()};
g.k.kY=function(){return this.D||"UNSUPPORTED"};
g.k.lY=function(){return this.J||""};
g.k.PU=function(){!isNaN(this.Ky())&&this.u.nt()};
g.k.O3=function(a,b){T9(this,a,b);Sdb(this)};
g.k.fM=function(){var a=g.wu("SID","")||"",b=g.wu("SAPISID","")||"",c=g.wu("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Ac(g.eb(a),2);b=g.Ac(g.eb(b),2);c=g.Ac(g.eb(c),2);return g.Ac(g.eb(a+","+b+","+c),2)};
S9.prototype.subscribe=S9.prototype.subscribe;S9.prototype.unsubscribeByKey=S9.prototype.Hg;S9.prototype.getProxyState=S9.prototype.pY;S9.prototype.disconnect=S9.prototype.Su;S9.prototype.getPlayerContextData=S9.prototype.nY;S9.prototype.setPlayerContextData=S9.prototype.R3;S9.prototype.getOtherConnectedRemoteId=S9.prototype.OO;S9.prototype.getReconnectTimeout=S9.prototype.Ky;S9.prototype.getAutoplayMode=S9.prototype.kY;S9.prototype.getAutoplayVideoId=S9.prototype.lY;S9.prototype.reconnect=S9.prototype.PU;
S9.prototype.sendMessage=S9.prototype.O3;S9.prototype.getXsrfToken=S9.prototype.fM;S9.prototype.isCapabilitySupportedOnConnectedDevices=S9.prototype.zP;g.v(deb,e9);g.k=deb.prototype;g.k.hj=function(a){return this.Kf.$_gs(a)};
g.k.contains=function(a){return!!this.Kf.$_c(a)};
g.k.get=function(a){return this.Kf.$_g(a)};
g.k.start=function(){this.Kf.$_st()};
g.k.add=function(a,b,c){this.Kf.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Kf.$_r(a,b,c)};
g.k.CE=function(a,b,c,d){this.Kf.$_un(a,b,c,d)};
g.k.ea=function(){for(var a=0,b=this.j.length;a<b;++a)this.Kf.$_ubk(this.j[a]);this.j.length=0;this.Kf=null;e9.prototype.ea.call(this)};
g.k.QU=function(){this.X("screenChange")};
g.k.S0=function(){this.X("onlineScreenChange")};
j9.prototype.$_st=j9.prototype.start;j9.prototype.$_gspc=j9.prototype.KU;j9.prototype.$_gsppc=j9.prototype.bM;j9.prototype.$_c=j9.prototype.contains;j9.prototype.$_g=j9.prototype.get;j9.prototype.$_a=j9.prototype.add;j9.prototype.$_un=j9.prototype.CE;j9.prototype.$_r=j9.prototype.remove;j9.prototype.$_gs=j9.prototype.hj;j9.prototype.$_gos=j9.prototype.aM;j9.prototype.$_s=j9.prototype.subscribe;j9.prototype.$_ubk=j9.prototype.Hg;var d$=null,g$=!1,U9=null,V9=null,oeb=null,Z9=[];g.v(seb,g.K);g.k=seb.prototype;g.k.ea=function(){g.K.prototype.ea.call(this);this.j.stop();this.B.stop();this.N.stop();var a=this.dc;a.unsubscribe("proxyStateChange",this.eR,this);a.unsubscribe("remotePlayerChange",this.Kz,this);a.unsubscribe("remoteQueueChange",this.vD,this);a.unsubscribe("previousNextChange",this.bR,this);a.unsubscribe("nowAutoplaying",this.VQ,this);a.unsubscribe("autoplayDismissed",this.zQ,this);this.dc=this.u=null};
g.k.Tk=function(a){var b=g.za.apply(1,arguments);if(2!=this.dc.B)if(h$(this)){if(!K9(this.dc).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":K9(this.dc).Mc()?this.dc.pause():this.dc.play();break;case "control_play":this.dc.play();break;case "control_pause":this.dc.pause();break;case "control_seek":this.J.hF(b[0],b[1]);break;case "control_subtitles_set_track":ueb(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.G.getCurrentTime();veb(this,0===b?void 0:b);break;case "control_seek":veb(this,b[0]);break;case "control_subtitles_set_track":ueb(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.k.R_=function(a){this.N.pU(a)};
g.k.m5=function(a){this.Tk("control_subtitles_set_track",g.yf(a)?null:a)};
g.k.yS=function(){var a=this.G.getOption("captions","track");g.yf(a)||ueb(this,a)};
g.k.Wb=function(a){this.u.Wb(a,this.G.getVideoData().lengthSeconds)};
g.k.D0=function(){g.yf(this.C)||web(this,this.C);this.D=!1};
g.k.eR=function(a,b){this.B.stop();2===b&&this.rS()};
g.k.Kz=function(){if(h$(this)){this.j.stop();var a=K9(this.dc);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.Bg=1;break;case 1082:case 1083:this.u.Bg=0;break;default:this.u.Bg=-1}switch(a.playerState){case 1081:case 1:this.Ub(new g.EJ(8));this.qS();break;case 1085:case 3:this.Ub(new g.EJ(9));break;case 1083:case 0:this.Ub(new g.EJ(2));this.J.stop();this.Wb(this.G.getVideoData().lengthSeconds);break;case 1084:this.Ub(new g.EJ(4));break;case 2:this.Ub(new g.EJ(4));this.Wb(G9(a));
break;case -1:this.Ub(new g.EJ(64));break;case -1E3:this.Ub(new g.EJ(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",VB:2}))}a=K9(this.dc).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,web(this,a));a=K9(this.dc);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.V.isActive()||this.cT()}else teb(this)};
g.k.bR=function(){this.G.X("mdxpreviousnextchange")};
g.k.vD=function(){h$(this)||teb(this)};
g.k.VQ=function(a){isNaN(a)||this.G.X("mdxnowautoplaying",a)};
g.k.zQ=function(){this.G.X("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){h$(this)&&this.dc.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===K9(this.dc).playerState?veb(this,a):b&&this.dc.seekTo(a)};
g.k.cT=function(){var a=this;if(h$(this)){var b=K9(this.dc);this.events.xc(this.W);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.W=this.events.P(this.G,"onVolumeChange",function(c){reb(a,c)})}};
g.k.qS=function(){this.j.stop();if(!this.dc.isDisposed()){var a=K9(this.dc);a.Mc()&&this.Ub(new g.EJ(8));this.Wb(G9(a));this.j.start()}};
g.k.rS=function(){this.B.stop();this.j.stop();var a=this.dc.Kp();2==this.dc.B&&!isNaN(a)&&this.B.start()};
g.k.Ub=function(a){this.B.stop();var b=this.I;if(!g.JJ(b,a)){var c=g.W(a,2);c!==g.W(this.I,2)&&this.G.uw(c);this.I=a;yeb(this.u,b,a)}};g.v(i$,g.X);i$.prototype.ud=function(){this.j.show()};
i$.prototype.Ib=function(){this.j.hide()};
i$.prototype.u=function(){a8("mdx-privacy-popup-cancel");this.Ib()};
i$.prototype.B=function(){a8("mdx-privacy-popup-confirm");this.Ib()};g.v(j$,g.X);j$.prototype.onStateChange=function(a){this.Oc(a.state)};
j$.prototype.Oc=function(a){if(3===this.api.getPresentingPlayerType()){var b={RECEIVER_NAME:this.api.getOption("remote","currentReceiver").name};a=g.W(a,128)?g.lJ("Error on $RECEIVER_NAME",b):a.Mc()||g.W(a,4)?g.lJ("Playing on $RECEIVER_NAME",b):g.lJ("Connected to $RECEIVER_NAME",b);this.Ja("statustext",a);this.j.show()}else this.j.hide()};g.v(k$,g.AQ);k$.prototype.D=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.wq=g.rc(a,this.j,this),g.BQ(this,g.Lk(a,this.j)),a=this.G.getOption("remote","currentReceiver"),a=this.j(a),this.options[a]&&this.Ij(a),this.enable(!0)):this.enable(!1)};
k$.prototype.j=function(a){return a.key};
k$.prototype.Fk=function(a){return"cast-selector-receiver"===a?"Cast...":this.wq[a].name};
k$.prototype.Jg=function(a){g.AQ.prototype.Jg.call(this,a);this.G.setOption("remote","currentReceiver",this.wq[a]);this.ob.Ib()};g.v(xeb,g.pN);g.k=xeb.prototype;
g.k.create=function(){var a=this.player.R(),b=g.xF(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.K("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.K("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.K("enable_cast_short_lived_lounge_token")};ieb(b,a);this.subscriptions.push(g.Ax("yt-remote-before-disconnect",this.P_,this));this.subscriptions.push(g.Ax("yt-remote-connection-change",this.w1,this));this.subscriptions.push(g.Ax("yt-remote-receiver-availability-change",this.dR,
this));this.subscriptions.push(g.Ax("yt-remote-auto-connect",this.u1,this));this.subscriptions.push(g.Ax("yt-remote-receiver-resumed",this.t1,this));this.subscriptions.push(g.Ax("mdx-privacy-popup-confirm",this.b3,this));this.subscriptions.push(g.Ax("mdx-privacy-popup-cancel",this.Z2,this));this.dR()};
g.k.load=function(){this.player.cancelPlayback();g.pN.prototype.load.call(this);this.Kj=new seb(this,this.player,this.dc);var a=(a=qeb())?a.currentTime:0;var b=neb()?new J9(c$(),void 0):null;0==a&&b&&(a=G9(K9(b)));0!==a&&this.Wb(a);yeb(this,this.Vd,this.Vd);this.player.Tm(6)};
g.k.unload=function(){this.player.X("mdxautoplaycanceled");this.rp=this.Mm;g.ef(this.Kj,this.dc);this.dc=this.Kj=null;g.pN.prototype.unload.call(this);this.player.Tm(5);l$(this)};
g.k.ea=function(){g.Bx(this.subscriptions);g.pN.prototype.ea.call(this)};
g.k.Nm=function(a){var b=g.za.apply(1,arguments);this.loaded&&this.Kj.Tk.apply(this.Kj,[a].concat(g.t(b)))};
g.k.getAdState=function(){return this.Bg};
g.k.zm=function(){return this.dc?K9(this.dc).zm:!1};
g.k.hasNext=function(){return this.dc?K9(this.dc).hasNext:!1};
g.k.Wb=function(a,b){this.MP=a||0;this.player.X("progresssync",a,b);this.player.Ka("onVideoProgress",a||0)};
g.k.getCurrentTime=function(){return this.MP};
g.k.getProgressState=function(){var a=K9(this.dc),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.R().K("web_player_mdx_allow_seeking_change_killswitch")?this.player.ag():!a.isAdPlaying()&&this.player.ag(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+E9(a):a.B,isAtLiveHead:1>=(a.u?a.j+E9(a):a.j)-this.getCurrentTime(),loaded:a.N,seekableEnd:a.u?a.j+E9(a):a.j,seekableStart:0<
a.C?a.C+E9(a):a.C}};
g.k.nextVideo=function(){this.dc&&this.dc.nextVideo()};
g.k.KD=function(){this.dc&&this.dc.KD()};
g.k.P_=function(a){1===a&&(this.FJ=this.dc?K9(this.dc):null)};
g.k.w1=function(){var a=neb()?new J9(c$(),void 0):null;if(a){var b=this.rp;this.loaded&&this.unload();this.dc=a;this.FJ=null;b.key!==this.Mm.key&&(this.rp=b,this.load())}else g.cf(this.dc),this.dc=null,this.loaded&&(this.unload(),(a=this.FJ)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,G9(a)));this.player.X("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.dR=function(){var a=[this.Mm],b=a.concat,c=jeb();A9()&&g.Az("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.wq=b.call(a,c);a=leb()||this.Mm;m$(this,a);this.player.Ka("onMdxReceiversChange")};
g.k.u1=function(){var a=leb();m$(this,a)};
g.k.t1=function(){this.rp=leb()};
g.k.b3=function(){this.Sz=!0;l$(this);g$=!1;d$&&f$(d$,1);d$=null};
g.k.Z2=function(){this.Sz=!1;l$(this);m$(this,this.Mm);this.rp=this.Mm;g$=!1;d$=null;this.player.playVideo()};
g.k.qg=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.wq;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Cdb():m$(this,b)),this.loaded?this.rp:this.Mm;case "quickCast":return 2===this.wq.length&&"cast-selector-receiver"===this.wq[1].key?(b&&Cdb(),!0):!1}};
g.k.MK=function(){this.dc.MK()};
g.k.yj=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.oN("remote",xeb);})(_yt_player);


}
/*
     FILE ARCHIVED ON 14:42:37 Jul 20, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:35:42 Aug 14, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 304.421
  exclusion.robots: 0.151
  exclusion.robots.policy: 0.139
  cdx.remote: 0.101
  esindex: 0.01
  LoadShardBlock: 106.826 (3)
  PetaboxLoader3.datanode: 120.168 (4)
  CDXLines.iter: 15.64 (3)
  load_resource: 224.272
  PetaboxLoader3.resolve: 191.679
*/