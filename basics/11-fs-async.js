const { readFile, writeFile } = require('fs');

console.log('starting task');

// utf8 encodes the content of the file
readFile('./content/first.txt', 'utf8', (error, result) => {
  if (error) {
    console.log(error);
    return;
  }

  const first = result;

  readFile('./content/second.txt', 'utf-8', (error, result) => {
    if (error) {
      console.log(error);
      return;
    }

    const second = result;

    writeFile(
      './content/result-async.txt',
      `Here is the async result: ${first}, ${second}`,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }

        console.log('done with async task');
      }
    );
  });
});

console.log('starting next task');
