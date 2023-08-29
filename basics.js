import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

// const expressServer = app(3001)

io.on('connection', socket => {
	console.log('connection')
})

httpServer.listen(3001)
