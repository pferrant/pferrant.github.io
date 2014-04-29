// toggle visibility for css3 animations 
$(document).ready(function() {
	$('.carousel-iphone').addClass('visibility');
	$('.payoff h1').addClass('visibility');
	$('.competences .col-sm-4').addClass('visibility');
});


//header animation
$(window).load(function () {
	$('header img').addClass("animated fadeInDown");
});

// Fixed navbar
$(window).scroll(function () {

var scrollTop = $(window).scrollTop();

	if (scrollTop > 200) {
		$('.navbar-default').css('display', 'block');
		$('.navbar-default').addClass('fixed-to-top');
			
	} else if (scrollTop == 0)   {
	
		$('.navbar-default').removeClass('fixed-to-top');
	}
	
	
//animations	
	$('.competences h1').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated fadeInLeft");
			}		
				
	});
	
	$('.cbp-ig-grid .cbp-ig-img').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated pulse");
			}		
				
	});
	
	$('.competences .col-md-4').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+650) {
				$(this).addClass("animated flipInX");
			}		
				
	});
	
	$('.software .col-md-3').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+550) {
				$(this).addClass("animated fadeInLeft");
			}		
				
	});
	
	$('.get-it button.app-store').each(function(){
			
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
			
			if (imagePos < topOfWindow+850) {
				$(this).addClass("animated pulse");
			}		
				
	});
	
	
});


// Parallax Content

function parallax() {

		// Turn parallax scrolling off for iOS devices
		   
		    var iOS = false,
		        p = navigator.platform;
		
		    if (p === 'iPad' || p === 'iPhone' || p === 'iPod') {
		        iOS = true;
		    }
	
		var scaleBg = -$(window).scrollTop() / 3;

        if (iOS === false) {
            $('.payoff').css('background-position-y', scaleBg - 150);
            $('.social').css('background-position-y', scaleBg + 200);
        }
   
}

function navbar() {

	if ($(window).scrollTop() > 1) {
	    $('#navigation').addClass('show-nav');
	} else {
	    $('#navigation').removeClass('show-nav');
	}
	
}

$(document).ready(function () {

	var browserWidth = $(window).width();
	
	if (browserWidth > 560){ 
	
		$(window).scroll(function() {
			parallax();
			navbar();
		});
	
	}

});	


$(window).resize(function () {

	var browserWidth = $(window).width();
	
	if (browserWidth > 560){ 
	
		$(window).scroll(function() {
			parallax();
			navbar();
		});
	
	}

});	


// iPhone Header Carousel
$('header .carousel').carousel({
  interval: 3000
})

// iPhone Features Carousel
$('.detail .carousel').carousel({
  interval: 4000
})

