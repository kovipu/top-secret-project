const fs = require('fs');
const Handlebars = require('handlebars');

const generate = (src, dist, data) => {
  const html = buildHTML(src, data);
  fs.writeFileSync(dist, html);
  console.log(`${dist} created!`);
}

const buildHTML = (filename, data) => {
  const source = fs.readFileSync(filename, 'utf-8').toString();
  const template = Handlebars.compile(source);
  return template(data);
}

module.exports = generate;