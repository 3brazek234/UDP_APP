const net = require('net');
const server = net.createServer((socket) => {
  socket.write('Hello from TCP server!\n');  
  socket.on('data', (data) => {
    console.log(`Received data: ${data}`);
  });});

server.listen(12345, () => {
  console.log('TCP server listening on port 12345');
});