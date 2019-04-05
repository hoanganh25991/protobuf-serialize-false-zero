module.exports = {
  nodeID: 'node-' + Date.now(),
  transporter: 'nats://localhost:4222',
  serializer: 'ProtoBuf',
};
