const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// view engine setup
app.use(express.static(__dirname + '/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routers')(app);

const server = app.listen(process.env.PORT || 3000, function () {
    console.log('Сервер запущен на порте: ' + server.address().port);
});