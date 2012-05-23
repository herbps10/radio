$(document).ready(function() {
	$(".polaroid").each(function() {
		$(this).css('-webkit-transform', 'rotate(' + $(this).attr('rel') + 'deg)');
	});
});