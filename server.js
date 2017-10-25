const express = require('express');
const app = express();
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');
const webpack = require('webpack');
const port = 3031;
const compiler = webpack(webpackConfig);
const fs = require('fs');
const storeDir = __dirname + '/public/';
var encoding = 'utf8';
// const mongoose = require('mongoose');
//
// /*
//  * Mongo connection
//  */
// mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
// var db = mongoose.connection;
// // db.on('success', console.log.bind(console, 'MongoDB connection succcess:'));
//
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function () {
//
//     db.db.collection("resume", function(err, resume){
        // resume.find({}).toArray(function(err, data){
        //     console.log(data); // it will print your collection data
        // })
//     });
//
// });

// db.resume.save({ "first_name": "sandesh", "last_name": "Choudhary"}, function (err, resume) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(resume);
// });

// app.get('/resume', function (req, res, next) {
//   db.db.collection("resume", function(err, resume){
//     var temp;
//     if (err) {
//       res.send(err);
//     }
//     resume.find({}).toArray(function(err, data){
//         // console.log(data); // it will print your collection data
//         res.json(data);
//         // temp = data;
//     })
//   });
// });

var checkType = function (req, res, next) {
  if (typeof(req.resolved) === 'undefined') {
    req.resolved = {};
  }
  fs.readFile(storeDir + 'resume.json', encoding, function (err, data) {
    if (err) {
      res.send(err);
    }
    req.resolved.data = data;
    next();
  });
};

app.get('/resume', checkType, function (req, res, next) {
  res.send(req.resolved.data);
});

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'app.js',
  contentBase: './dist',
  host: 'localhost',
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  reload: true,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

app.use('/dist', express.static(__dirname + '/dist/'));
app.use('/public', express.static(__dirname + '/public'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function () {
  console.log('server running at ', port);
});
