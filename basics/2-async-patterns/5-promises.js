const { readFile, writeFile } = require('fs').promises; // we dont have to use the util module if we use .promises

const start = async () => {
  try {
    const first = await readFile('../content/first.txt', 'utf8');
    const second = await readFile('../content/second.txt', 'utf8');
    await writeFile(
      '../content/result-promisify.txt',
      `This is the text I wrote! ${first} ${second}`
    );
    console.log(first, second);
    console.log();
  } catch (error) {
    console.log(error);
  }
};

start();
