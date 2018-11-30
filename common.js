
$(function() {

	$('#my-menu').mmenu({
		 
        
      extensions   : [  'theme-black', 'effect-menu-slide','pagedim-black' ],
      navbar: {
      title: '<img src="img/logo.svg" alt="Салон красоты Смитлер">'},
      offCanvas: { position: 'right' }
     
   
	});
/*кнопка меню*/

var api = $('#my-menu').data('mmenu');
api.bind("open:finish", function() {
	$('.hamburger ').addClass(' is-active');
},100);
api.bind("close:finish", function() {
	$('.hamburger ').removeClass(' is-active');
},100);

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	function carouselService(){
		$('.carousel-services-item').each(function(){
			var ths = $(this),
				thch = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height',thch);
		});

	}carouselService();
});
