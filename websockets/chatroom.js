// broadcast incoming message to all clients
function receiveMessage(data, socket) {
  socket.broadcast.emit('message', data);
}