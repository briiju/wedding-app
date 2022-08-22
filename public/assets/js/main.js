(function ($) {
 "use strict";

// Preloader 
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(350).fadeOut("slow");
	});
	setTimeout(function () {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(350).fadeOut("slow");
	}, 5000);
	jQuery(window).on('ready', function () {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(350).fadeOut("slow");
	});

/*----------------------------
 2. Mobile Menu Activation
-----------------------------*/
	jQuery('.mobile-menu nav').meanmenu({
		meanScreenWidth: "768",
	});


/*--------------------------
 3. Sticky Menu 
---------------------------- */
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>900 ){
			$('#sticky').addClass('sticky');
			} else {
			$('#sticky').removeClass('sticky');
		}
	});	


	//Single page scroll js for main menu

	$('.menu_scroll ul li a').on('click' , function(e){
	  $('.menu_scroll ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[section-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('60');
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.menu_scroll ul li');
	  if (windscroll >= 0) {
	   $('[section-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 95) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.menu_scroll ul li:first').addClass('active');
	  }

	});

/*----------------------------
4. wow js active
------------------------------ */
	new WOW().init();
 
/*----------------------------
5. owl active
------------------------------ */  
	//Event slider
	$(".event-slider").owlCarousel({
		autoPlay: true, 
		slideSpeed:2000,
		pagination:false,
		navigation:false,	  
		items : 3,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [992,2],
		itemsTablet: [768,2],
		itemsMobile : [480,1],
	});

	//Blgo slider
	$(".blog-slider").owlCarousel({
		autoPlay: true, 
		slideSpeed:2000,
		pagination:true,
		navigation:false,	  
		items : 2,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [992,2],
		itemsTablet: [768,1],
		itemsMobile : [480,1],
	});

	//testimonial slider
	$(".testimonial").owlCarousel({
		autoPlay: true, 
		slideSpeed:2000,
		pagination:true,
		navigation:false,	  
		items : 1,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [992,1],
		itemsTablet: [768,1],
		itemsMobile : [480,1],
	});

	//registry slider
	$(".registry_slider").owlCarousel({
		autoPlay: true, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 3,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [992,2],
		itemsTablet: [768,2],
		itemsMobile : [480,1],
	});

	//Family slider
	$(".familyslider").owlCarousel({
		autoPlay: true, 
		slideSpeed:2000,
		pagination:true,
		navigation:false,	  
		items : 4,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [992,3],
		itemsTablet: [768,2],
		itemsMobile : [480,1],
	});

/*--------------------------
6. jarallax active
---------------------------- */
	$('.jarallax').jarallax({
		speed: 0.5
	});


/*----------------------------
8. magnific Popup active
------------------------------ */
	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});

/*--------------------------
 9. counterdown
---------------------------- */
	function e() {
	    var e = new Date("2022-10-22T00:00:00");
	    var dd = e.getDate();
	    var mm = e.getMonth() + 1;
	    var y = e.getFullYear();
	    var futureFormattedDate = mm + "/" + dd + "/" + y + ' 13:00:00';
	    return futureFormattedDate;
	}

	$('.count-number').downCount({
		date: e(),
	    offset: 16
	});
/*--------------------------
10. bxslider active
---------------------------- */   
	//Home slider     
	$('.sliders').bxSlider({
		mode: 'fade',
	    speed:4000,
    	auto:true
	});
/*--------------------------
11. masonry active
---------------------------- */	
	$('.gallery').masonry({
	  itemSelector: '.m-item'
	});  
/*--------------------------
12. scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fas fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 

	// Contact Form Submition
	function checkRequire(formId , targetResp){
		targetResp.html('');
		var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
		var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
		var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
		var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
		var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
		var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
		var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
		var check = 0;
		var params = {};
		$('#er_msg').remove();
		var target = (typeof formId == 'object')? $(formId):$('#'+formId);
		target.find('input , textarea , select').each(function(){
			var val = $(this).val().trim();
			params[this.name] = val
			if($(this).hasClass('require')){
				if(val == ''){
					check = 1;
					$(this).focus();
					targetResp.html('You left out some fields.');
					$(this).addClass('error');
					return false;
				}else{
					$(this).removeClass('error');
				}
			}
			if($(this).val().trim() != ''){
				var valid = $(this).attr('data-valid');
				if(typeof valid != 'undefined'){
					if(!eval(valid).test($(this).val().trim())){
						$(this).addClass('error');
						$(this).focus();
						check = 1;
						targetResp.html($(this).attr('data-error'));
						return false;
					}else{
						$(this).removeClass('error');
					}
				}
			}
		});
		return { check: check, params: params };
	}
	$(".submitFormContact").on("click", function() {
		var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
		var checkResult = checkRequire(targetForm , errroTarget);
		if(checkResult.check == 0){
			$.ajax({
				method : 'post',
				url : 'contact',
				data: JSON.stringify(checkResult.params),
				dataType: 'json',
				cache:false,
				contentType: 'application/json',
				processData: false
			}).done(function(resp){
				if(resp.success){
					targetForm.find('input').val('');
					targetForm.find('textarea').val('');
					errroTarget.html('<p style="color:green;">Your message has been sent successfully.</p>');
				}else{
					errroTarget.html('<p style="color:red;">Something went wrong please try again later.</p>');
				}
			});
		}
	});
	$(".submitFormRsvp").on("click", function() {
		var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
		var checkResult = checkRequire(targetForm , errroTarget);
		if(checkResult.check == 0){
			$.ajax({
				method : 'post',
				url : 'rsvp',
				data: JSON.stringify({...checkResult.params, attending: true}),
				dataType: 'json',
				cache:false,
				contentType: 'application/json',
				processData: false
			}).done(function(resp){
				if(resp.success){
					targetForm.find('input').val('');
					targetForm.find('textarea').val('');
					errroTarget.html('<p style="color:green;">Your message has been sent successfully.</p>');
				}else{
					errroTarget.html('<p style="color:red;">Something went wrong please try again later.</p>');
				}
			});
		}
	});
	$(".submitNotAttending").on("click", function() {
		var _this = $(this);
		var targetForm = _this.closest('form');
		var errroTarget = targetForm.find('.response');
		var checkResult = checkRequire(targetForm , errroTarget);
		if(checkResult.check == 0){
			$.ajax({
				method : 'post',
				url : 'rsvp',
				data: JSON.stringify({...checkResult.params, attending: false}),
				dataType: 'json',
				cache:false,
				contentType: 'application/json',
				processData: false
			}).done(function(resp){
				if(resp.success){
					targetForm.find('input').val('');
					targetForm.find('textarea').val('');
					errroTarget.html('<p style="color:green;">Your message has been sent successfully.</p>');
				}else{
					errroTarget.html('<p style="color:red;">Something went wrong please try again later.</p>');
				}
			});
		}
	});
	
	
	// jQuery("#status").fadeOut();
	// jQuery("#preloader").delay(350).fadeOut("slow");
 
})(jQuery); 