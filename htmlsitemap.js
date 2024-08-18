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

/**
 * BLOGGER TOC WITH ACCORDION EFFECT (SORT BY LABEL)
 * ---------------------------------------------------
 * by Taufik Nurrohman
 * URL: http://gplus.to/tovic
 * Modified by TwistBlogg.com
 * URL: https://www.twistblogg.com
 * ---------------------------------------------------
 */

/*
var toc_config = {
	url: 'https://web.archive.org/web/20240725084927/https://www.twistblogg.com',
	containerId: 'tb-sitemap',
	showNew: 15,
	newText: ' <strong style="font-weight:normal;font-style:normal;color:#fff;font-size:11px;background:#5c5a78;padding:1px 6px 3px 6px;line-height:normal;float:right;border-radius:3px;">New!</strong>',
	sortAlphabetically: {
		thePanel: true,
		theList: true
	},
	maxResults: 9999,
	activePanel: 1,
	slideSpeed: {
		down: 400,
		up: 400
	},
	slideEasing: {
		down: null,
		up: null
	},
	slideCallback: {
		down: function() {},
		up: function() {}
	},
	clickCallback: function() {},
	jsonCallback: '_toc',
	delayLoading: 0
};
*/
!function(e,o){var t=o.getElementById(toc_config.containerId),c=o.getElementsByTagName("head")[0],n=[];e[toc_config.jsonCallback]=function(e){for(var o,c,i=e.feed.entry,a=e.feed.category,l="",s=0,d=a.length;d>s;++s)n.push(a[s].term);for(var r=0,f=i.length;f>r;++r)(toc_config.showNew||toc_config.showNew>0)&&r<toc_config.showNew+1&&(i[r].title.$t+=" %new%");i=toc_config.sortAlphabetically.theList?i.sort(function(e,o){return e.title.$t.localeCompare(o.title.$t)}):i,toc_config.sortAlphabetically.thePanel&&n.sort();for(var g=0,h=n.length;h>g;++g){l+='<h3 class="toc-header">'+n[g]+"</h3>",l+='<div class="toc-content"><ol>';for(var _=0,p=i.length;p>_;++_){o=i[_].title.$t;for(var w=0,u=i[_].link.length;u>w;++w)if("alternate"==i[_].link[w].rel){c=i[_].link[w].href;break}for(var v=0,m=i[_].category.length;m>v;++v)n[g]==i[_].category[v].term&&(l+='<li><a href="'+c+'">'+o.replace(/ \%new\%$/,"")+"</a>"+(o.match(/\%new\%/)?" "+toc_config.newText:"")+"</li>")}l+="</ol></div>"}t.innerHTML=l,"undefined"!=typeof jQuery&&($("#"+toc_config.containerId+" .toc-content").hide(),$("#"+toc_config.containerId+" .toc-header").click(function(){$(this).hasClass("active")||(toc_config.clickCallback(this),$("#"+toc_config.containerId+" .toc-header").removeClass("active").next().slideUp(toc_config.slideSpeed.up,toc_config.slideEasing.up,toc_config.slideCallback.up),$(this).addClass("active").next().slideDown(toc_config.slideSpeed.down,toc_config.slideEasing.down,toc_config.slideCallback.down))}).eq(toc_config.activePanel-1).addClass("active").next().slideDown(toc_config.slideSpeed.down,toc_config.slideEasing.down,toc_config.slideCallback.down))};var i=o.createElement("script");i.src=toc_config.url.replace(/\/$/,"")+"/feeds/posts/summary?alt=json-in-script&max-results="+toc_config.maxResults+"&callback="+toc_config.jsonCallback,"onload"==toc_config.delayLoading?e.onload=function(){c.appendChild(i)}:e.setTimeout(function(){c.appendChild(i)},toc_config.delayLoading)}(window,document);


}
/*
     FILE ARCHIVED ON 08:49:27 Jul 25, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:20:34 Aug 18, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.585
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.01
  cdx.remote: 10.4
  LoadShardBlock: 129.805 (3)
  PetaboxLoader3.datanode: 194.314 (5)
  load_resource: 183.358 (2)
  PetaboxLoader3.resolve: 108.338 (2)
*/
