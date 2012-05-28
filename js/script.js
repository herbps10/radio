$(document).ready(function() {
	$(".polaroid").each(function() {
		$(this).css('-webkit-transform', 'rotate(' + $(this).attr('rel') + 'deg)');
		$(this).css('-moz-transform', 'rotate(' + $(this).attr('rel') + 'deg)');
		$(this).css('-opera-transform', 'rotate(' + $(this).attr('rel') + 'deg)');
	});

	enableTwitter = true;

	if(enableTwitter) {
		$.ajax({
			url: "https://api.twitter.com/1/statuses/user_timeline.json",
			type: 'GET',
			dataType: 'jsonp',
			data: {
				screen_name: "WGSU",
				count: 7
			},
			success: function(data) {
				$("#tweets").empty();
				for(i in data) {
					var post = data[i];

					var date = Date.parse(post.created_at);
					var datestr = date.getMonth() + "/" + date.getDate();

					$("#tweets").append("<li><a href='http://twitter.com/#!/WGSU/status/" + post.id_str + "'>" + post.text + "</a><div class='date'>tweeted on " + datestr + "</div></li>");
				}
			}
		});
	}
	else {
		$("#twitter").siblings('h1').first().remove();
		$("#twitter").siblings('a').first().remove();
		$("#twitter").remove();
	}
});
