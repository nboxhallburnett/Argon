var config = require('/public/js/config.js');

function chat(req, res) {
	if (req.method == "GET") {
		config.chatroom = req.query.chatroom;
		config.nick = req.query.nick;
	}
	console.log(config.chatroom);
	res.render('index', {
		title: 'Markus Goodyear\'s Awesome Chat Client!',
		'chatroom': req.query.chatroom,
		'nick': req.query.nick
	});
}

function start(req, res) {
	if (req.method == "GET") {
		res.render('start');
	}
}

// render 'chatroom.ejs'
function chatroom(req, res) {
    res.render('index');
}