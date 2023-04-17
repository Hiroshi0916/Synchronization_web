const WebSocket = require('ws')

const server = new WebSocket.Server({ port: 8000 })

server.on('connection', (socket) => {
    console.log('Client connected') // クライアントが接続したことを表示する
  socket.on('message', (message) => {
    server.clients.forEach((client) => {
      if (client !== socket && client.readyState === WebSocket.OPEN) {
        client.send(message)
      }
    })
  })

  socket.on('close', () => {
    console.log('Client disconnected') // クライアントが切断したことを表示する
  })
})

console.log('WebSocket server is running on port 8080') // サーバーが起動したことを表示する
