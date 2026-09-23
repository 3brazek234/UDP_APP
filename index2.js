const dgram = require('node:dgram');
const client = dgram.createSocket('udp4');

const message = Buffer.from('Hello, UDP server!');

client.send(message, 41234, '127.0.0.1', (err) => {
  if (err) console.error(err);
  console.log('message sent to server');
  client.close();
});