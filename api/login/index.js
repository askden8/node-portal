const express = require('express');
const app = module.exports = express();

app.use('/login',function (req, res) {
    console.log("login")
    res.json({
        mes: "Сообщение отправлено!",
        status: "OK"
    });
} )