module.exports = {
  nodeID: 'node-' + Date.now(),
  // disableBalancer: true,
  transporter: 'nats://localhost:4222',
  serializer: 'protobuf',
  // serializer: 'thrift',
  // serializer: 'notepack',
};
