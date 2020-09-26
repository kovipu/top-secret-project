const generate = require('./lib/generator');

const config = {
  title: '~',
  source: './src/pages',
  templates: './src/templates',
  destination: './dist'
};

generate(config);
