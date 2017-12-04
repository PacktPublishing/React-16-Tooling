import fs from 'fs';

const readFile = path => new Promise((resolve, reject) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

export default readFile;
