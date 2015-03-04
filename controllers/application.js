var config = require('/public/js/config.js');

function index(req, res) {
	if (req.method == "GET"){
		config.chatroom = req.query.chatroom;
	}
	console.log(config.chatroom);
	res.render('index', { title: 'Markus Goodyear\'s Awesome Chat Client!', 'chatroom': req.query.chatroom });
}