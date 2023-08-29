const express = require('express')

const app = express()

const socketio = require('socket.io')

app.use(express.static(__dirname + '/public'))

const expressServer = app.listen(3001)

const io = socketio(expressServer)

io.on('connection', socket => {
	console.log(socket.id, ' has connected')
	socket.emit('messageFromServer', { data: 'Welcome from socket server!' })
	socket.on('messageFromClient', data => {
		console.log(data.data)
	})
})
