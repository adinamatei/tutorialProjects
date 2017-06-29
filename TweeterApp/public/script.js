// GET request
$.ajax({
	type: "GET",
	url: "/ajax",
	success: function(data){
		for (var i = 0; i < data.tweets.length; i++) {
			addNewTweet(data.tweets[i]);
		}
	}
});

function addNewTweet (tweet) {
	var newTweet = "<div class='tweetContainer'>" + "<div class='tweetTime'>" + new Date(tweet.time).toLocaleString() + "</div>" + "<div class='tweetBody'>" + tweet.text + "</div>" + "</div>";
	
	$('#tweetTarget').prepend(newTweet);
}



$('#tweetBtn').click(function(){
	$.ajax({
		type: "POST",
		url: "/ajax",
		contentType: "application/json",
		data: JSON.stringify({tweet: $('#newTweet').val()}),
		success: function(data) {
			addNewTweet(data);
			$('#newTweet').val('');
		}
	});
});

