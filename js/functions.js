$(document).on('ready', function(){
	
	Analytics();

	setInterval(function(){
			$(".slogan1").show("blind", { easing : 'easeInOutCirc'} , 1000, function(){
				$(".slogan2").show("blind", { easing : 'easeInOutCirc'} , 1100, function(){
					$(".slogan3").show("blind", { easing : 'easeInOutCirc'} , 1200)
				})
			})
	}, 1600);

	// Device detection
	var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }

	};
	
    if( !isMobile.any() ){
       $.stellar({
		horizontalScrolling: false,
		responsive: true
	 });
    }

    if( isMobile.any() ){
       $(".homeB1, .homeB2, .aboutusB1, .aboutusB2, .servicesB1, .servicesB2, .servicesB3, .servicesB4, .servicesB5, .one1800FB1, .one1800FB2, .one1800FB3, .one1800FB4, .oTB1, .oTB2, .oTB3, .pop1, .pop2, .pop3, .min1, .min2, .min3, .Screenshot1, .zte1, .zte2, .500bc1, .500bc6").css("background-attachment","initial");
    }

	//dots functionality
	$(".dot").mouseover(function(){
		var city = $(this).data("city");
		$("." + city).addClass("dot-selected");
	});

	$(".dot").mouseleave(function(){
		var city = $(this).data("city");
		$("." + city).removeClass("dot-selected");
	});

	$(".dots-map").mouseover(function(){
		var city = $(this).data("dot");
		$("." + city).addClass("link-selected");
	});

	$(".dots-map").mouseleave(function(){
		var city = $(this).data("dot");
		$("." + city).removeClass("link-selected");
	});

	//google maps functionality
	$(".link").on("click", function(){
		$(".map iframe").attr("src", $(this).find("a").data("link"));
		$(".link").removeClass("link-selected");
		$(this).addClass("link-selected");

		var address = $(this).find("a").data("address")

		$('article p').addClass("hide")
		$("section article.addresses").addClass("article-selected")
		$('article p[data-address='+address+']').removeClass("hide")

	});

	$("#map").addClass("scrolloff");

	$(".map").on("mouseup", function(){
		$("#map").addClass("scrolloff");
	});

	$(".map").on("mouseleave", function(){
		$("#map").addClass("scrolloff");
	});

	$(".map").on("mousedown", function(){
		$("#map").removeClass("scrolloff");
	});
	
	//Header functionality
	$( document ).scroll(function() {
  		var y = $(this).scrollTop();

  		if (y > 30) {
  			$(".show-logo").hide();
  			$(".hide-logo").show();
  			$("#nav-icon span").css(menu_click_opened);
  			$(".menu-text").css(menu_click_p);
  			$("header").css(headerFixed);
  			$(".right").addClass("scrollColor");

	    } else {
	    	$(".show-logo").show();
  			$(".hide-logo").hide();
  			$(".white-logo").hide();
  			$("header").removeAttr('style');
	        $(".menu-text").removeAttr('style');
	        $("#nav-icon span").removeAttr('style');
	    	$(".right").removeClass("scrollColor");
	    }
	});

	var menu_click_opened = {
		background : "#000000"
	}

	var menu_click_p = {
		color : "#000000"
	}

	var headerFixed = {
		background : "#ffffff",
		transition : ".4s"
	}


	if($('body').hasClass('blk-logo')){
		//$('#h1logo').attr("src", "http://d283pee6upvkfl.cloudfront.net/img/logoblack.png");
		$("#nav-icon span").addClass('span-dark');
		$('#toggle').addClass('blk-bg');
		$('.menu-text').addClass('blk-text');
	}

	function disable_scroll() {
         $('body').bind('touchmove', function(e){e.preventDefault()});
    }

    function enable_scroll() {
        $('body').unbind('touchmove');
    }
	
	// Testimonials interactions Beginning
	$(".readbutton").on("click", function(){

		var employee = $(this).parent().data("employee");
		var close = $(this).parent().find(".close");
		var parent = $(this).parent().closest(".test-interaction");
		var name = $(this).parent().find('h4').text();
		var paragraph = $(this).parent().find('.padding-Yvw-3');
		var testi_details = $(this).parent().find(".testi-details");
		var img = $(this).parent().find("img");

		// $(".testi-details").css( "display", "none");
		// $(testi_details).show()

		$(this).parent().find('.padding-Yvw-3').css( "display", "block");

		 $(".close").on("click", function(){
		 	console.log("CLose was pressed");
		 	// $(".large-12").attr("class", "large-6 medium-12 small-12 columns testi-bg test-interaction no-padding");
		 	$(this).parent().find('.padding-Yvw-3').css( "display", "none");
		 	$(this).parent().find('.close').css( "display", "none");
		 	$(this).parent().find('.readbutton').css( "display", "block");
		 	$(this).parent().find('img').css( "display", "initial");
		 	$(this).parent().find('h4').css("padding", "1.2em 0 0 0"); 	
		 })

		// console.log("You just clicked on " + employee + " " + "Bitch")
		
		var read = $(this).parent().find("h6");

		 $(this).parent().addClass("full_widhtT", 800, function(){
		 	$(read).css( "display", "none");
		 	$(paragraph).show("fade", 900, function(){
		 		$(close).show("slide", 450)
		 	})
		 	$(paragraph).css( "padding", "2em 2em 0em 2em");
		 	$(img).css( "display", "none");
		})
	});

	//open/close primary navigation
	$('.menu-click').on('click', function(){
		disable_scroll()
		$('.menu-click').toggleClass('close-menu');
		$('#primary-nav').show('blind', { easing : 'easeOutBounce'} , 900);

		$("#nav-icon span").toggleClass('white-span');
		$("#nav-icon").toggleClass('open');
		
		$('body').toggleClass('menu-visible');

			$(".white-logo").toggleClass('hide-active');
			$(".show-logo").toggleClass('hide-innactive');
  			$(".hide-logo").toggleClass('hide-innactive');

  		//Steps to execute when the menu opens
		if($(".menu-text").text() === "Menu") {
			$(".menu-text").text("Close");
			$('.menu-text').addClass('wh-text');
			$('#toggle').addClass('wh-bg');
		}
		//Steps to execute when the menu closses
		else {
			$(".menu-text").text("Menu");
			$('#toggle').removeClass('wh-bg');
			$('.menu-text').removeClass('wh-text');
			enable_scroll();
			$('#primary-nav').hide('fade' , 300);
			
			if($('body').hasClass('blk-logo')) {
				$('#h1logo, #h2logo').attr("src", "http://d283pee6upvkfl.cloudfront.net/img/logoblack.png");
			}else {
				$('#h1logo').attr("src", "http://d283pee6upvkfl.cloudfront.net/img/logowhite.png");
			}
		}

	});

   // Services page progress bar animations
   $( "#seventy-bar" )
   .animate({
   	width: "70%"
   }, {
   	queue: true,
   	duration: 3000
   });

   $( "#thirteen-bar" )
   .animate({
   	width: "13%"
   }, {
   	queue: true,
   	duration: 3000
   });

   $( "#thirteen-bar-two" )
   .animate({
   	width: "13%"
   }, {
   	queue: true,
   	duration: 3000
   });

   $( "#twentyfive-bar" )
   .animate({
   	width: "25%"
   }, {
   	queue: true,
   	duration: 3000
   });


   if ( $("body").hasClass("_services") ) {

   	function servicesDialsStart() {
   		var rp1 = radialProgress(document.getElementById('dial1'))
   		.diameter(250)
   		.value(75)
   		.render();

   		var rp2 = radialProgress(document.getElementById('dial2'))
   		.diameter(250)
   		.value(47)
   		.render();
   	}
    	//Waypoint for numbers section on the service page
    	var waypoint = new Waypoint({
    		element: document.getElementById('waypoint-numbers-section'),
    		handler: function(direction) {
    			if (direction === 'down' && ($(".dial1").attr("id") != "dial1") && ($(".dial2").attr("id") != "dial2") ) {
    				
    				$(".dial1").attr("id", "dial1");
    				$(".dial2").attr("id", "dial2");
    				servicesDialsStart();
    			}
    		},
    		offset: 600
    	});
    };

    if($("body").hasClass("_assessment-tool")){
    	$('pre.code.bash').addClass('prettyprint language-bash');
        $('pre.code.html').addClass('prettyprint language-html');
        $('pre.code.xml').addClass('prettyprint language-xml');
        $('pre.code.json').addClass('prettyprint language-js');
        $('pre.code.javascript').addClass('prettyprint language-js');
        prettyPrint();

        $("._assessment-tool .sidebar li[data-class]:not(.current)").on("click",function(){
            $("._assessment-tool .sidebar li").removeClass("current");
            $("._assessment-tool .content > div").css({"display": "none"});
            $("."+$(this).attr("data-class")).css({"display": "block"});
            $(this).addClass("current");

            if($(this).closest(".sub-menu").length > 0){
                $(".all_api").css({"display":"block"});
            }else{
                $(".all_api").css({"display":"none"});
            }
        });

        $("._assessment-tool .sidebar li[data-class='about_ae']").addClass("current");
    }

    if ( $("body").hasClass("_case-study") ) {

    	function caseStudyStart() {
	    	// 1-800-Flowers
	    	var rp1 = radialProgress(document.getElementById('case-dial1'))
	    	.diameter(150)
	    	.value(48.8)
	    	.render();

	    	var rp2 = radialProgress(document.getElementById('case-dial2'))
	    	.diameter(150)
	    	.value(5.59)
	    	.render();

	    	var rp3 = radialProgress(document.getElementById('case-dial3'))
	    	.diameter(150)
	    	.value(-66.7)
	    	.render();

	    	var rp4 = radialProgress(document.getElementById('case-dial4'))
	    	.diameter(150)
	    	.value(70.6)
	    	.render();

	      // Popcorn Trading
	      var rp5 = radialProgress(document.getElementById('otc-case-dial1'))
	      .diameter(150)
	      .value(73)
	      .render();

	      var rp6 = radialProgress(document.getElementById('otc-case-dial2'))
	      .diameter(150)
	      .value(13)
	      .render();

	      var rp7 = radialProgress(document.getElementById('otc-case-dial3'))
	      .diameter(150)
	      .value(13)
	      .render();

	      var rp8 = radialProgress(document.getElementById('otc-case-dial4'))
	      .diameter(150)
	      .value(25)
	      .render();

	       // Oriental Trading
	      var rp9 = radialProgress(document.getElementById('pop-case-dial1'))
	      .diameter(150)
	      .value(18.5)
	      .render();

	      var rp10 = radialProgress(document.getElementById('pop-case-dial2'))
	      .diameter(150)
	      .value(-6.9)
	      .render();

	      var rp11 = radialProgress(document.getElementById('pop-case-dial3'))
	      .diameter(150)
	      .value(10.7)
	      .render();

	      var rp12 = radialProgress(document.getElementById('pop-case-dial4'))
	      .diameter(150)
	      .value(20.2)
	      .render();

	      // Mindware
	      var rp13 = radialProgress(document.getElementById('min-case-dial1'))
	      .diameter(150)
	      .value(71)
	      .render();

	      var rp14 = radialProgress(document.getElementById('min-case-dial2'))
	      .diameter(150)
	      .value(64)
	      .render();

	      var rp15 = radialProgress(document.getElementById('min-case-dial3'))
	      .diameter(150)
	      .value(2.17)
	      .render();

	      var rp16 = radialProgress(document.getElementById('min-case-dial4'))
	      .diameter(150)
	      .value(36)
	      .render();
	  }

	    //Waypoint for numbers section on the service page
	    var waypoint2 = new Waypoint({
	    	element: document.getElementById('waypoint-benefits'),
	    	handler: function(direction) {
	    		if ( direction === 'down' && ( $(".benefits").attr("id") != "waypoint-on" ) ) {
	    			$(".benefits").attr("id", "waypoint-on");
		      		// Flowers
		      		$(".case-dial1").attr("id", "case-dial1");
		      		$(".case-dial2").attr("id", "case-dial2");
		      		$(".case-dial3").attr("id", "case-dial3");
		      		$(".case-dial4").attr("id", "case-dial4");
			    	// Oriental Trading
			    	$(".otc-case-dial1").attr("id", "otc-case-dial1");
			    	$(".otc-case-dial2").attr("id", "otc-case-dial2");
			    	$(".otc-case-dial3").attr("id", "otc-case-dial3");
			    	$(".otc-case-dial4").attr("id", "otc-case-dial4");
			    	// Popcorn Factory
			    	$(".pop-case-dial1").attr("id", "pop-case-dial1");
			    	$(".pop-case-dial2").attr("id", "pop-case-dial2");
			    	$(".pop-case-dial3").attr("id", "pop-case-dial3");
			    	$(".pop-case-dial4").attr("id", "pop-case-dial4");
			    	// Mindware Factory
			    	$(".min-case-dial1").attr("id", "min-case-dial1");
			    	$(".min-case-dial2").attr("id", "min-case-dial2");
			    	$(".min-case-dial3").attr("id", "min-case-dial3");
			    	$(".min-case-dial4").attr("id", "min-case-dial4");

			    	caseStudyStart()
			    }
			},
			offset: 400
		});

		
	}
	
	var waypoint3 = new Waypoint({
	    	element: document.getElementById('map-interaction'),
	    	handler: function(direction) {
	    		if ( direction === 'down' ) { 			
	      			
	      			$(".map-dot-image").show("fade", 1200, function(){
	      				$(".dot1").show("fade", 700, function(){
	      					$(".dot2").show("fade", 700, function(){
	      						$(".dot3").show("fade", 900, function(){
	      							$(".dot4").show("fade", 500)
	      						})
	      					})
	      				})
	      			});
			    	
			    }
			},
			offset: 500
		});

	

});

// Analytics function beginning
function Analytics() {

	//---- Menu Page Beginning ----//

	// Home Manu buttom
	$('#Home').on('click', function() {
	 	 ga('send', 'event', 'Manu', 'Click', 'Home');
	});

	// About us Manu buttom
	$('#About-Us').on('click', function() {
	 	 ga('send', 'event', 'Manu', 'Click', 'About-Us');
	});

	// Services Manu buttom
	$('#Services').on('click', function() {
	 	 ga('send', 'event', 'Manu', 'Click', 'Services');
	});

	// Works Manu buttom
	$('#Works').on('click', function() {
	 	 ga('send', 'event', 'Manu', 'Click', 'Works');
	});

	// Contact-us Manu buttom
	$('#Contact-us').on('click', function() {
	 	 ga('send', 'event', 'Manu', 'Click', 'Contact-us');
	});

	// Contact-us Manu buttom
	$('#Careers').on('click', function() {
	 	 ga('send', 'event', 'Manu', 'Click', 'Careers');
	});

	//---- Works Page Beginning ----//

	// 1-800-flowers Manu buttom
	$('#1-800-flowers').on('click', function() {
	 	 ga('send', 'event', 'Works', 'Click', '1-800-flowers');
	});

	// Oriental-trading Manu buttom
	$('#oriental-trading').on('click', function() {
	 	 ga('send', 'event', 'Works', 'Click', 'oriental-trading');
	});

	// Popcorn-factory Manu buttom
	$('#popcorn-factory').on('click', function() {
	 	 ga('send', 'event', 'Works', 'Click', 'popcorn-factory');
	});

	// Mindware Manu buttom
	$('#mindware').on('click', function() {
	 	 ga('send', 'event', 'Works', 'Click', 'mindware');
	});

	//---- Case Study Page Beginning ----//

	// 1-800-flowers Case Study buttom
	$('#CS1-800-flowers').on('click', function() {
	 	 ga('send', 'event', 'Case_Study ', 'Click', 'CS1-800-flowers');
	});

	// Oriental-trading Case Study buttom
	$('#CSoriental-trading').on('click', function() {
	 	 ga('send', 'event', 'Case_Study ', 'Click', 'CSoriental-trading');
	});

	// Popcorn-factory Case Study buttom
	$('#CSpopcorn-factory').on('click', function() {
	 	 ga('send', 'event', 'Case_Study ', 'Click', 'CSpopcorn-factory');
	});

	// Mindware Case Study buttom
	$('#CSmindware').on('click', function() {
	 	 ga('send', 'event', 'Case_Study', 'Click', 'CSmindware');
	});

	//---- Contact Us Page Beginning ----//

	// New-Jersey Contact Us buttom
	$('#New-Jersey').on('click', function() {
	 	 ga('send', 'event', 'Contact_Us', 'Click', 'New-Jersey');
	});

	// California Contact Us buttom
	$('#California').on('click', function() {
	 	 ga('send', 'event', 'Contact_Us ', 'Click', 'California');
	});

	// India Contact Us buttom
	$('#India').on('click', function() {
	 	 ga('send', 'event', 'Contact_Us', 'Click', 'India');
	});

	// Dubai Contact Us buttom
	$('#Dubai').on('click', function() {
	 	 ga('send', 'event', 'Contact_Us', 'Click', 'Dubai');
	});


	// Google Analytics Script Beginning 
	   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-30307619-1', 'auto');
		  ga('send', 'pageview');

  	// Google Analytics Script End 
}





//Flex slider
(function slider($, window){

    window.app = {};    
    
    app.uiSlide =
    {
        /* Test elem and Call flexslider() */
        flexslider: function ( elem, params ) {
            // Test if elem exist in dom
            if( $(elem).length > 0 ) {
                 // Call function
                 $(elem).flexslider(params);
            };
        },
        /* Define and init all elem */
        init:  function () {
                            
            // Define Objects Collection
            var elem = [
                // Slider Home Page
                {
                    slide: '.flexslider',
                    param: {
                        animation: "slide",
                        touch : true,
                        easing : "swing"
                    }
                },
                // Slider Works Page
                {
                    slide: '.flexslider-works',
                    param: {
                        animation: "slide",
                        animationLoop: true,
					    // itemWidth: 293,
					    touch : true,
					    controlNav : true
                    }
                },

                {
                	slide: '.flexslider-examples',
                	param: {
                		 animation: "slide",
						 controlNav: "thumbnails"
                	}
                }
            ];
            
            // 2 Init All
            for( var i=0; i < elem.length; i++ ) {
                this.flexslider( elem[i].slide, elem[i].param )
            }
                            
        }
    };    
    
    /* init all function() */
    app.start =
       function(){
           this.uiSlide.init()
       };
    $(document).ready(function(){app.start();})
/*-----------------------------------------------------------------------------------*/
})(jQuery, window)

var fadeStart=0 
    ,fadeUntil=350 
    ,fading = $('.fading');

$(window).bind('scroll', function(){

    var offset = $(document).scrollTop(),opacity=0;

    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    fading.css('opacity',opacity);
});

