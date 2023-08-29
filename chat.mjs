import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

// You cannot use directly __dirname in module - you need following
import path from 'path'
import { fileURLToPath } from 'url'

//and additional two lines
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(__dirname + '/public'))

io.on('connection', socket => {
	console.log(socket.id, ' has connected')
	socket.emit('messageFromServer', { data: 'Welcome from socket server!' })
	socket.on('messageFromClient', data => {
		console.log(data.data)
	})
})

httpServer.listen(3001)
