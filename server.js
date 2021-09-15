const express = require('express')
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

app.use(express.static("./"))
let posicoes = {}

io.on('connection', (socket) =>{
	socket.on('move', (pos) =>{

	})
	setInterval(() =>{
		socket.broadcast.emit('refresh',posicoes)
	},20)
})



server.listen(80)