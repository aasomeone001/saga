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

!function(t){t.fn.tableHeadFixer=function(n){return this.each(function(){(function(){function o(n){n.each(function(n,o){var o=t(o),i=t(o).parent(),r=o.css("background-color");r="transparent"==r||"rgba(0, 0, 0, 0)"==r?null:r;var e=i.css("background-color"),a=(e="transparent"==e||"rgba(0, 0, 0, 0)"==e?null:e)||"white";a=r||a,o.css("background-color",a)})}function i(n,o){for(var i=r.left,e=1,a=1;a<=i;a+=e){var l=e>1?a-1:a,f=t(n).find("> *:nth-child("+l+")"),c=f.prop("colspan");void 0!==f.cellPos()&&f.cellPos().left<i&&o(f),e=c}}var r=t.extend({},{head:!0,foot:!1,left:0,right:0,"z-index":0},n);r.table=this,r.parent=t(r.table).parent(),l=t(r.parent),f=t(r.table),l.append(f),l.css({"overflow-x":"auto","overflow-y":"auto"}),l.scroll(function(){var t=l[0].scrollWidth,n=l[0].clientWidth,o=l[0].scrollHeight,i=l[0].clientHeight,e=l.scrollTop(),a=l.scrollLeft();r.head&&this.find("> thead > tr > *").css("top",e),r.foot&&this.find("> tfoot > tr > *").css("bottom",o-i-e),r.left>0&&r.leftColumns.css("left",a),r.right>0&&r.rightColumns.css("right",t-n-a)}.bind(f)),1==r.head&&((e=t(r.table).find("> thead")).find("> tr"),o(a=e.find("> tr > *")),a.css({position:"relative"}));var e,a;var l,f;1==r.foot&&((c=t(r.table).find("> tfoot")).find("> tr"),o(s=c.find("> tr > *")),s.css({position:"relative"}));var c,s;r.left>0&&(d=t(r.table),r.leftColumns=t(),d.find("> thead > tr, > tbody > tr, > tfoot > tr").each(function(t,n){i(n,function(t){r.leftColumns=r.leftColumns.add(t)})}),r.leftColumns.each(function(n,o){var o=t(o);o.css({position:"relative","z-index":"11"})}));var d;r.right>0&&function(){var n=t(r.table);r.right;r.rightColumns=t();var o=n.find("> thead").find("> tr"),i=n.find("> tbody").find("> tr"),e=null;o.each(function(n,o){!function(n,o){for(var i=r.right,e=1,a=1;a<=i;a+=e){var l=e>1?a-1:a,f=t(n).find("> *:nth-last-child("+l+")"),c=f.prop("colspan");o(f),e=c}}(o,function(t){0===n&&(e=t),r.rightColumns=r.rightColumns.add(e)})}),i.each(function(n,o){!function(n,o){for(var i=r.right,e=1,a=1;a<=i;a+=e){var l=e>1?a-1:a,f=t(n).find("> *:nth-last-child("+l+")"),c=f.prop("colspan");o(f),e=c}}(o,function(t){r.rightColumns=r.rightColumns.add(t)})}),r.rightColumns.each(function(n,o){var o=t(o);o.css({position:"relative","z-index":"9999"})})}();(function(){var n=t(r.table);if(r.head){if(r.left>0){var o=n.find("> thead > tr");o.each(function(n,o){i(o,function(n){t(n).css("z-index",r["z-index"]+1)})})}if(r.right>0){var o=n.find("> thead > tr");o.each(function(n,o){solveRightColspan(o,function(n){t(n).css("z-index",r["z-index"]+1)})})}}if(r.foot){if(r.left>0){var o=n.find("> tfoot > tr");o.each(function(n,o){i(o,function(n){t(n).css("z-index",r["z-index"])})})}if(r.right>0){var o=n.find("> tfoot > tr");o.each(function(n,o){solveRightColspan(o,function(n){t(n).css("z-index",r["z-index"])})})}}})(),t(r.parent).trigger("scroll"),t(window).resize(function(){t(r.parent).trigger("scroll")})}).call(this)})}}(jQuery),function(t){t.fn.cellPos=function(n){var o,i=this.first(),r=i.data("cellPos");if(!r||n){var e=i.closest("table, thead, tbody, tfoot");o=[],e.children("tr").each(function(n,i){t(i).children("td, th").each(function(i,r){var e,a,l=t(r),f=0|l.attr("colspan"),c=0|l.attr("rowspan");for(f=f||1,c=c||1;o[n]&&o[n][i];++i);for(e=i;e<i+f;++e)for(a=n;a<n+c;++a)o[a]||(o[a]=[]),o[a][e]=!0;var s={top:n,left:i};l.data("cellPos",s)})})}return r=i.data("cellPos")}}(jQuery);

}
/*
     FILE ARCHIVED ON 14:51:05 Jul 20, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:35:12 Aug 14, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 483.587
  exclusion.robots: 0.181
  exclusion.robots.policy: 0.168
  RedisCDXSource: 381.869
  esindex: 0.015
  LoadShardBlock: 82.053 (3)
  PetaboxLoader3.datanode: 92.471 (5)
  CDXLines.iter: 16.13 (3)
  load_resource: 115.371
  PetaboxLoader3.resolve: 55.483
  loaddict: 22.552
*/