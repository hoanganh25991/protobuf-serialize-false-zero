module.exports = {
  nodeID: 'node-' + Date.now(),
  disableBalancer: true,
  transporter: 'nats://localhost:4222',
  serializer: 'ProtoBuf',
};
