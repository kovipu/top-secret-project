const fs = require('fs');
const Handlebars = require('handlebars');
const marked = require('marked');

const generate = (config) => {
  const { partials, source } = config;

  // add partials
  const sourcePartials = fs.readdirSync(partials);
  sourcePartials.map(partial => registerPartial(partials, partial));

  // build pages
  const sourcePages = fs.readdirSync(source);
  sourcePages.map(page => buildPage(page, config));

  console.log('Site build successful!');
}

const registerPartial = (partialsDir, partial) => {
  const partialContent = fs.readFileSync(`${partialsDir}/${partial}`)
    .toString();

  const partialName = partial.split('.')[0];
  Handlebars.registerPartial(partialName, partialContent);
  console.log(`${partialName} partial registered.`);
}

const buildPage = (page, config) => {
  const { title, source, templates, destination } = config;

  const rawContent = fs.readFileSync(`${source}/${page}`)
    .toString();
  const content = marked(rawContent);

  const pageName = page.split('.')[0];
  const outName = `${pageName}.html`;

  const template = fs.readFileSync(`${templates}/${outName}`)
    .toString();

  const hbTemplate = Handlebars.compile(template);
  const output = hbTemplate({ title, content });

  fs.writeFileSync(`${destination}/${outName}`, output);

  console.log(`${outName} created.`);
}

module.exports = generate;