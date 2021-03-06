/*!
 * Flexible nav bookmarklet
 * by @greweb
 */

(function(){
  var base = window.flexibleNavBase;
  var LINK_LIMIT = 20;

  fullFunc({
    css : [ base + "flexible-nav.min.css"],
    js  : [ base + "flexible-nav.min.js" ],
    ready : function() {
      $('nav.flexible-nav').remove();
      var headers = ['h1'];
      for(var i=2; $( headers.join(',') ).size()<LINK_LIMIT && i<=3; ++i) {
        headers.push('h'+i);
      }
      new FlexibleNav( new FlexibleNavMaker( headers.join(',') ).make().prependTo('body') );
    }
  });
}());

// jQuery bookmarklet magic...
// ... by Brett Barros (& Paul Irish)
// ... http://www.latentmotion.com/downloads/blank-bookmarklet-v1.js
function fullFunc(a){function d(b){if(b.length===0){a.ready();return false}
$.getScript(b[0],function(){d(b.slice(1))})}function e(b){$.each(b,function(c,f){$("<link>")
.attr({href:f,rel:"stylesheet",type:'text/css'}).appendTo("head")})}a.jqpath=a.
jqpath||"http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js";
(function(b){var c=document.createElement("script");c.type="text/javascript";c.src=b;
c.onload=function(){e(a.css);d(a.js)};document.body.appendChild(c)})(a.jqpath)};

