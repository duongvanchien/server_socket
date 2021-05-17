var app = require('express')();
const cors = require('cors');

app.use(
	cors({
		origin: '*',
	})
);

var http = require('http').createServer(app);
const PORT = 8080;
var io = require('socket.io')(http);
http.listen(PORT, () => {
	console.log(`listening on:${PORT}`);
});

io.on('connection', (socket) => {
	/* socket object may be used to send specific messages to the new connected client */
	socket.emit('hello', 'world');
	console.log('new client connected', socket.id);
});
