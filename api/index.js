const express = require('express');
const app = module.exports = express();
const User = require('../model/user');
const News = require('../model/news');
const permission = require('../model/permission');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db-admin:123456@ds139735.mlab.com:39735/promo-db');

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
    User.model.find({}, function (err, users) {
        if (err) return res.json({error: err});
        res.json(users);
    });
});


app.post('/api/newNews', function (req, res) {
    console.log("new api")
    // if (!!!req.body.name || !!!req.body.age) {
    //     return res.status(400).json({ err: 'Data format is not correct' });
    // }

    const News = mongoose.model('news');
    let New = new News({
        text: req.body.text,
        theme: req.body.theme,
        date: req.body.date,
        userId: user._id,
        user: user
    })

    New.save()
        .then(_ => {
            News.model.find({}, function (err, news) {
                if (err) return res.json({error: err});
                res.json(news);
            })
        }).catch(err => {
        return res.json({error: err});
    });


});