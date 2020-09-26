const generate = require('./lib/generator');

const src = './src/templates/index.html';
const dist = './dist/index.html';

const data = {
  title: 'Konsta Purtsi',
  content: 'Welcome to my ~'
};

generate(src, dist, data);