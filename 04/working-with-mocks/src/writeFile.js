import fs from 'fs';

const writeFile = (path, data) => new Promise((resolve, reject) => {
  fs.writeFile(path, data, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  });
});

export default writeFile;
