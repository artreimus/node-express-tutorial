const { readFile } = require('fs');

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText('../content/first.taxt')
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
