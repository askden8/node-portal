const express = require('express');
const app = module.exports = express();

app.post('/api/login', function (req, res) {
    console.log(req.params)
    res.json({
        access_token: "11", firstName: "11", id: "111", image: "111", middleName: "1111", permissionId: "",
        surName: "",
        username: "",
        permission:{
        chat: {
        C: true,
            D: true,
            R: true,
            U: true
    },
    news: {
        C: true,
            D: true,
            R: true,
            U: true
    },
    setting: {
        C: true,
            D: true,
            R: true,
            U: true
    }
    }});
})

app.post('/api/saveNewUser', function (req, res) {
    console.log(req.params)
    res.json({access_token: "11", firstName: "11", id: "111", image: "111", middleName: "1111"});
})

app.get('/api/getNews', function (req, res) {
    console.log(req.params)
    res.json([{id: "111", text: "hnuhn", theme: "jmhnh", date: "2018-01-17 23:56:09+02:00", user: "2018-01-17 23:56:09+02:00"}]);
})

