'use strict';

/**
 * set simple node server
 */

// set module path
require('app-module-path').addPath(process.cwd());

const http = require('http');
const { resolve } = require('path');
const express = require('express');
const app = express();
const { SERVER, PATHS } = require('app/app-config');

// create server
const server = http.createServer(app);

// static folder
app.use(express.static(PATHS.ASSETS_DIR));

// parsing from data from express
const bodyParser = require('body-parser');

// set view engine
const expressHandlebars = require('express-handlebars');
const hbs = expressHandlebars.create({
  // extension
  extname: 'hbs',
  partialsDir: [PATHS.PARTIAL_DIR],
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
// set views folder
app.set('views', PATHS.VIEW_DIR);

// url encode
app.use(bodyParser.urlencoded({ extended: true }));

// build mode
if (SERVER.BUILD_MODE) {
  app.use(require('./webpackMiddleware')());
}

// router
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/custom/:customDir/**/:customTmpl', (req, res) => {
  console.log(req.params);
  res.render(resolve(PATHS.CUSTOM_DIR, req.params.customTmpl));
});

// listener
server.listen(SERVER.PORT);
server.on('listening', () => {
  console.log(__dirname);
  console.log('onListening : ', server.address());
});
server.on('error', (err) => {
  console.log('onError', err);
});
