$(document).ready(function() {
 $(".header-burger").click(function(event){
	 $('.header-burger, .header-menu, .menu-body').toggleClass('active');
 	$("body").toggleClass('lock');
 	});
});