$(document).ready(function() {
	$('.parallax-window').parallax();
	$( document ).scroll(function(e) {
		( $(window).scrollTop() > $('#splash').height()-65 ) ? $('#splash .navbar').addClass('fixed_style') : $('#splash .navbar').removeClass('fixed_style');
	});
	$('body').on('click', '#top_navigation li', scroll_to_div)
	$('body').on('click', '#footer_links li', scroll_to_div)
});
function scroll_to_div(){
	section_id = $(this).attr('data-section-id');
	 $('html,body').animate({
        scrollTop: $("#" + section_id).offset().top
    }, 'slow');
}