// started operating system process
console.log('first');

setTimeout(() => {
  console.log('second');
}, 0);

console.log('third');

// 'second' will be printed last because its async
// first -> third -> second
