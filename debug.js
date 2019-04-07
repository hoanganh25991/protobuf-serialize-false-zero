// module.exports = {
//   name: 'debug',
// };

const { ServiceBroker } = require('moleculer');
const config = require('./moleculer.config');

const broker = new ServiceBroker(config);

broker.createService({
  name: 'debug',
});

broker.start().then(async () => {
  const value = await broker.call('greeter.willReturnFalse');
  console.log('[value]', value);
});
