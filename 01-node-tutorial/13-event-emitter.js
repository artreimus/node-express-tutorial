const EventEmitter = require('events');
const customEmitter = new EventEmitter();

// on - listens for event
// emit - emits the event

customEmitter.on('response', (name, id) => {
  console.log(`data received ${name} with id: ${id}`);
});

customEmitter.on('response', () => {
  console.log(`some other logic `);
});

customEmitter.emit('response', 'arthur', 34);
