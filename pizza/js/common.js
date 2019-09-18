 //var hamburger = document.querySelector(".hamburger");
  // On click
  //hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    //hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
 // });
	 $('#before-load').find('i').fadeOut().end().delay(400).fadeOut('slow');
	$('.hamburger').click(function(){
//$('.my-menu-popup').toggleClass('vis');
		$('.my-menu, .my-menu-popup').fadeToggle();
		//$('.my-menu-popup').toggleClass('vis');
	//alert('sxcscsc');
	});
   $
   ('.my-menu-popup').click(function() {
        $('.my-menu, .my-menu-popup').fadeToggle();
    });
   


    $(".menu,.my-menu,.click").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top-150;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });






	$('.slaider').owlCarousel({
	loop: true,
	dots: false,
	center: false,
	smartSpeed: 1000,
	
	nav: true,
	navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	responsiveClass: true,
	responsive: {
		0:{
			items: 1
		},
		768: {
			items:1
		},
		992:{
			items: 1
		},
		1200: {
			items: 1
		}
	}

});







$('.section_slaider2_carousel').owlCarousel({
    loop: true,
    dots: true,
    //margin: -10,
    smartSpeed: 1500,
    //autoplay: 100,
    //slideSpeed: 1900, 
    //paginationSpeed: 1900,
    //items: 3,
    //responsiveClass: true,
    //center: true,
   	//stagePadding: 50,
		//autoWidth: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    	responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        750:{
        		items: 2
        },
        1000:{
            items:3
        }
    }
});

$('#carousel3').owlCarousel({
    loop: true,
    dots: true,
    //margin: -10,
    smartSpeed: 1500,
    //autoplay: 100,
    //slideSpeed: 1900, 
    //paginationSpeed: 1900,
    //items: 3,
    //responsiveClass: true,
    //center: true,
   	//stagePadding: 50,
		//autoWidth: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    	responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        750:{
        		items: 2
        },
        1000:{
            items:4
        }
    }
});

$('.carousel4').owlCarousel({
    loop: true,
    dots: false,
    
    smartSpeed: 1500,
    
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        750:{
                items: 2
        },
        1000:{
            items:3
        }
    }
});
$('.owl-carousel').find('.owl-nav').removeClass('disabled');
//$('.owl-carousel').find('.owl-dots').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
});

$('section .h2').each(function(){
        var ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
    });
