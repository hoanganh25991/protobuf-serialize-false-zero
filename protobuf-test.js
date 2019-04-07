const protobuf = require('protobufjs');
const payload = 'invalid (not an object)';
const err = AwesomeMessage.verify(payload);
if (err) {
  throw Error(err);
}
