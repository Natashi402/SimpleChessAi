var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
var port = process.env.PORT || 6969;

//Define the default route
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/chess_game_page.html');
});

//Listen to the given port
http.listen(port, function () {
    console.log("Listening on * " + port);
});
