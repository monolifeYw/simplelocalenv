/**
 * 
 */

const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

// create server
const server = http.createServer(app);

// static folder
app.use(express.static(path.resolve(__dirname, 'assets')));

// parsing from data from express
const bodyParser = require('body-parser');

// set view engine
const expressHandlebars = require('express-handlebars');
const hbs = expressHandlebars.create({
  // extension
  extname: 'hbs',
  partialsDir: ['src/tmpls/partials'],
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
// set views folder
app.set('views', path.resolve(__dirname, 'src', 'tmpls'));

// url encode
app.use(bodyParser.urlencoded({ extended: true }));

// router
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/custom/:customTmpl', (req, res) => {
  res.render('custom/' + req.params.customTmpl);
});

// listener
server.listen(3000);
server.on('listening', () => {
  console.log(__dirname);
  console.log('onListening : ', server.address());
});
server.on('error', (err) => {
  console.log('onError', err);
});