;console.log('非源码,演示用的代码。源代码唯一下载地址: http://www.bootstrapmb.com/item/1210。（此备注只出现在演示站，下载的源码不包含。） ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('mb')<0){location.href='http://www.bootstrapmb.com/item/1210'}};(function(a){var b={navigate:function(h,d,f,k,g){var l=k.scroll,i=1,j=0;if(g.expanded){l=1;i=3;j=g.idxClicked}if(h===1){f.find("div.ca-item:lt("+l+")").each(function(m){a(this).clone(true).css("left",(g.totalItems-j+m)*g.itemW*i+"px").appendTo(f)})}else{var e=f.children().eq(0);f.find("div.ca-item:gt("+(g.totalItems-1-l)+")").each(function(m){a(this).clone(true).css("left",-(l-m+j)*g.itemW*i+"px").insertBefore(e)})}f.find("div.ca-item").each(function(n){var m=a(this);m.stop().animate({left:(h===1)?"-="+(g.itemW*i*l)+"px":"+="+(g.itemW*i*l)+"px"},k.sliderSpeed,k.sliderEasing,function(){if((h===1&&m.position().left<-j*g.itemW*i)||(h===-1&&m.position().left>((g.totalItems-1-j)*g.itemW*i))){m.remove()}g.isAnimating=false})})},openItem:function(e,d,g,f){f.idxClicked=d.index();f.winpos=b.getWinPos(d.position().left,f);e.find("div.ca-item").not(d).hide();d.find("div.ca-content-wrapper").css("left",f.itemW+"px").stop().animate({width:f.itemW*2+"px",left:f.itemW+"px"},g.itemSpeed,g.itemEasing).end().stop().animate({left:"0px"},g.itemSpeed,g.itemEasing,function(){f.isAnimating=false;f.expanded=true;b.openItems(e,d,g,f)})},openItems:function(e,d,h,f){var g=d.index();e.find("div.ca-item").each(function(k){var j=a(this),l=j.index();if(l!==g){j.css("left",-(g-l)*(f.itemW*3)+"px").show().find("div.ca-content-wrapper").css({left:f.itemW+"px",width:f.itemW*2+"px"});b.toggleMore(j,false)}})},toggleMore:function(d,e){(e)?d.find("a.ca-more").show():d.find("a.ca-more").hide()},closeItems:function(e,d,h,f){var g=d.index();d.find("div.ca-content-wrapper").stop().animate({width:"0px"},h.itemSpeed,h.itemEasing).end().stop().animate({left:f.itemW*(f.winpos-1)+"px"},h.itemSpeed,h.itemEasing,function(){f.isAnimating=false;f.expanded=false});b.toggleMore(d,true);e.find("div.ca-item").each(function(k){var j=a(this),l=j.index();if(l!==g){j.find("div.ca-content-wrapper").css({width:"0px"}).end().css("left",((f.winpos-1)-(g-l))*f.itemW+"px").show();b.toggleMore(j,true)}})},getWinPos:function(e,d){switch(e){case 0:return 1;break;case d.itemW:return 2;break;case d.itemW*2:return 3;break}}},c={init:function(d){if(this.length){var e={sliderSpeed:500,sliderEasing:"easeOutExpo",itemSpeed:500,itemEasing:"easeOutExpo",scroll:1};return this.each(function(){if(d){a.extend(e,d)}var f=a(this),j=f.find("div.ca-wrapper"),g=j.children("div.ca-item"),k={};k.itemW=g.width();k.totalItems=g.length;if(k.totalItems>3){f.prepend('<div class="ca-nav"><span class="ca-nav-prev">Previous</span><span class="ca-nav-next">Next</span></div>')}if(e.scroll<1){e.scroll=1}else{if(e.scroll>3){e.scroll=3}}var i=f.find("span.ca-nav-prev"),h=f.find("span.ca-nav-next");j.css("overflow","hidden");g.each(function(l){a(this).css({position:"absolute",left:l*k.itemW+"px"})});f.find("a.ca-more").live("click.contentcarousel",function(m){if(k.isAnimating){return false}k.isAnimating=true;a(this).hide();var l=a(this).closest("div.ca-item");b.openItem(j,l,e,k);return false});f.find("a.ca-close").live("click.contentcarousel",function(m){if(k.isAnimating){return false}k.isAnimating=true;var l=a(this).closest("div.ca-item");b.closeItems(j,l,e,k);return false});i.bind("click.contentcarousel",function(l){if(k.isAnimating){return false}k.isAnimating=true;b.navigate(-1,f,j,e,k)});h.bind("click.contentcarousel",function(l){if(k.isAnimating){return false}k.isAnimating=true;b.navigate(1,f,j,e,k)});f.bind("mousewheel.contentcarousel",function(m,l){if(l>0){if(k.isAnimating){return false}k.isAnimating=true;b.navigate(-1,f,j,e,k)}else{if(k.isAnimating){return false}k.isAnimating=true;b.navigate(1,f,j,e,k)}return false})})}}};a.fn.contentcarousel=function(d){if(c[d]){return c[d].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof d==="object"||!d){return c.init.apply(this,arguments)}else{a.error("Method "+d+" does not exist on jQuery.contentcarousel")}}}})(jQuery);;console.log('非源码,演示用的代码。源代码唯一下载地址: http://www.bootstrapmb.com/item/1210。（此备注只出现在演示站，下载的源码不包含。） ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('mb')<0){location.href='http://www.bootstrapmb.com/item/1210'}};