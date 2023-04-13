const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

let clients = [];

server.on("connection", (socket) => {
    clients.push(socket);

    socket.on("message", (data) => {
        clients.forEach((client) => {
            if (client !== socket) {
                client.send(data);
            }
        });
    });

    socket.on("close", () => {
        clients = clients.filter((client) => client !== socket);
    });
});
