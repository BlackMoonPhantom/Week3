// helpers.js
const Handlebars = require('hbs');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

Handlebars.registerHelper('error404', function() {
  const numDivs = getRandomInt(20, 50);
  let result = '<div style="text-align: center;">';

  for (let i = 0; i < numDivs; i++) {
    const classes = ['still', 'rotate', 'shrink'];
    const randomClass = classes[getRandomInt(0, 2)];
    result += `<div class="${randomClass}">404</div>`;
  }

  result += '</div>';
  return new Handlebars.SafeString(result);
});

module.exports = Handlebars.helpers;
