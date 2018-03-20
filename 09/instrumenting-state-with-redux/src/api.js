const LATENCY = 1000;

const BOOKS = [
  {
    title: 'React 16 Essentials',
    author: 'Artemij Fedosejev',
    imgURL:
      'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/9781787126046%20(2).jpg'
  },
  {
    title: 'Getting Started with React VR',
    author: 'John Gwinner',
    imgURL:
      'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/cover%20-%20Copy_8.png'
  },
  {
    title: 'React Native Blueprints',
    author: 'Emilio Rodriguez Martinez',
    imgURL:
      'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/B06647.png'
  },
  {
    title: 'React Design Patterns and Best Practices',
    author: 'Michele Bertoli',
    imgURL:
      'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/4538cov_.jpg'
  },
  {
    title: 'React Native Cookbook',
    author: 'Crysfel Villa, Stan Bershadskiy',
    imgURL:
      'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/2558_5549_React%20Native%20Cookbook.png'
  },
  {
    title: 'React Native By Example',
    author: 'Richard Kho',
    imgURL:
      'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/B05604.png'
  }
];

export const fetchBooks = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(BOOKS);
    }, LATENCY);
  });

export const createBook = (title, author, imgURL) =>
  new Promise(resolve => {
    setTimeout(() => {
      BOOKS.push({ title, author, imgURL });
      resolve();
    }, LATENCY);
  });

export const fetchBook = title =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(BOOKS.find(book => book.title === title));
    }, LATENCY);
  });

export const deleteBook = title =>
  new Promise(resolve => {
    setTimeout(() => {
      BOOKS.splice(BOOKS.findIndex(b => b.title === title), 1);
      resolve();
    }, LATENCY);
  });
