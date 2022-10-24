const { createReadStream } = require('fs');

// 2nd argument controls options which could change the size of buffer and encoding
const stream = createReadStream('./content/big.txt', {
  highWaterMark: 90000,
  encoding: 'utf8',
});

stream.on('data', (result) => {
  console.log(result);
});

stream.on('error', (err) => console.log(err));
