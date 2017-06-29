var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var tweets = [
	{text: "Hello Tweeter!", time: new Date().getTime() - 12300},
	{text: "This is so cool", time: new Date().getTime() - 1000},
	{text: "Hey, I like this!", time: new Date().getTime()}
];

app.use(express.static(__dirname + '/public'));

app.get('/ajax', function(request, response) {
	response.type('json');
	response.end(JSON.stringify({tweets:tweets}));
});

app.post('/ajax', function(request, response){
	var newTweet = {text: request.body.tweet, time: new Date().getTime()};
	tweets.push(newTweet);
	response.type('json');
	response.end(JSON.stringify(newTweet));
});
console.log('localhost:3030');
var server = app.listen(3030);
