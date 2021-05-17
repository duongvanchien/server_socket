var app = require('express')();
const cors = require('cors');

app.use(
	cors({
		origin: '*',
	})
);

const listmsg = [];

var http = require('http').createServer(app);
const PORT = 8080;
var io = require('socket.io')(http);
http.listen(PORT, () => {
	console.log(`listening on:${PORT}`);
});

io.on('connection', (socket) => {
	socket.on('chat', (msg) => {
		listmsg.push(msg);
		Array.isArray(listmsg) &&
        listmsg.forEach((value) => { 
				console.log(value);
			});
	});
});
