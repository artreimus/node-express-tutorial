const { readFileSync, writeFileSync } = require('fs');
console.log('starting task');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
);

const resultSync = readFileSync('./content/result-sync.txt', 'utf8');
console.log('Result sync: ' + resultSync);

console.log('done with this task');
console.log('starting the next one');
