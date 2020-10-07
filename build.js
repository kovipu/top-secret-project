const generate = require('./lib/generator');

const config = {
  title: 'Konsta Purtsi',
  source: './src/pages',
  partials: './src/partials',
  templates: './src/templates',
  destination: './dist'
};

generate(config);
