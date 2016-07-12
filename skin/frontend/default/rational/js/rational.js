/**
* Rational-Kombidaempfer.com
**/

jQuery(document).ready(function(){

/*FancyBox*/	
	jQuery("a[rel=img_group]").fancybox({
		'overlayColor' : '#ffffff',
		'transitionIn' : 'elastic',
		'transitionOut' : 'elastic',
		'speedIn' : 300, 
		'speedOut' : 300, 
		'overlayShow' : true,
		'autoScale' : true,
		'titlePosition' : 'outside',
		'overlayColor':	'#002652',
		'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {
		return '<span id="fancybox-title-over">Bild ' + (currentIndex + 1) + ' von ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
/*Quick View by FancyBox*/
	jQuery("li.item").mouseover(function() {
		jQuery(this).find(".ajax_quickview").css({'display':'block'});
		}).mouseout(function(){
		jQuery(this).find(".ajax_quickview").css({'display':'none'});
	});
	jQuery(".ajax_quickview").fancybox({
		'width': 650,
		'autoDimensions': false,
		'overlayColor' : '#ffffff',
		'transitionIn' : 'elastic',
		'transitionOut' : 'elastic',
		'speedIn' : 300, 
		'speedOut' : 300, 
		'overlayShow' : true,
		'titleShow' : false,
		'type': 'ajax',
		'overlayColor':	'#002652'
	});
/* HomeSlider */
	jQuery("#slider").easySlider({
		auto: true,
		continuous: true,
		numeric: true
	});
/* Top.Links Cart */
	/*jQuery(".top-link-cart").before(jQuery("<span></span>").text("S "));*/
	jQuery(".top-link-cart").html('<span>S </span> Mein Warenkorb');
/* Floating Menu */
	jQuery("#floatdiv").addFloating({  
		targetRight: 0,  
		targetTop: 250,  
		snap: true  
    }); 
});