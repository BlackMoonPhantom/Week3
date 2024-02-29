var express = require('express');
var router = express.Router();

function colorGrid(size) {
  let html = '<table>';
  for (let i = 0; i < size; i++) {
    html += '<tr>';
    for (let j = 0; j < size; j++) {
      // Generate a random color with 6 digits including leading zeros
      const color = ('000000' + ((1 << 24) * Math.random() | 0).toString(16)).slice(-6);
      html += `<td style="background-color: #${color};>
      <span  style="color: black">${color.toUpperCase()}</span>
      <span style="color: white">${color.toUpperCase()}</span></td>`;
    }
  
    html += '</tr>';
  }
  html += '</table>';
  return html;
}

router.get('/', function(req, res, next) {
  res.render('index', {
    options: [
      { value: 3, text: '3' },
      { value: 4, text: '4' },
      { value: 5, text: '5' },
      { value: 10, text: '10' },
      { value: 20, text: '20' }
    ]
  });
});

router.post('/generate', function(req, res, next) {
  const gridSize = parseInt(req.body.gridSize);
  const grid = colorGrid(gridSize);
  res.render('index', {
    options: [
      { value: 3, text: '3' },
      { value: 4, text: '4' },
      { value: 5, text: '5' },
      { value: 10, text: '10' },
      { value: 20, text: '20' }
    ],
    grid: grid
  });
});

module.exports = router;

