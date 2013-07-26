$(function($) {

	function getText(num) {
		$.ajax({
			url: "js/text/" + num + ".txt",
			success: function(data) {
				$('#img' + num).append('<span>' + data + '<span>');
			}
		});
	}

	function showDIv() {
		$('#img' + $(this).data('nav-number')).css('visibility', 'visible');
	}

	$('.nav div').mouseenter(function() {
		$(this).finish().animate({
			marginTop: "-=10px"
		}).delay(800).queue(function() {
			if( !!!$('#img' + $(this).data('nav-number') + ' span').text() ){
				getText($(this).data('nav-number'));
			}
			$(this).finish().animate({}, showDIv);
		});

	});

	$('.nav div').mouseleave(function() {
		$(this).finish().animate({
			marginTop: "+=10px"
		}, function() {
			$('#img' + $(this).data('nav-number')).css('visibility', 'hidden');
		});

	});
});