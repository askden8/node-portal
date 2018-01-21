const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const User = require('./model/user');
const News = require('./model/news');
const permission = require('./model/permission');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db-admin:123456@ds139735.mlab.com:39735/promo-db');

// view engine setup
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//require('./routers')(app);

const server = app.listen(process.env.PORT || 3000, function () {
    console.log('Сервер запущен на порте: ' + server.address().port);
});

app.post('/api/login', function (req, res) {
    console.log(req.params)
    res.json({
        access_token: "11", firstName: "11", id: "111", image: "111", middleName: "1111", permissionId: "",
        surName: "",
        username: "",
        permission: {
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
        }
    });
})
app.get('/api/getUsers', function (req, res) {
    console.log(req.params)
    res.json([{
        access_token: "11", firstName: "11", id: "111", image: "111", middleName: "1111", permissionId: "id",
        surName: "Name",
        username: "Username",
        permission: {
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
        }
    }]);
})
app.get('/api/getNews', function (req, res) {
    console.log(req.params)
    res.json([{
        userId: "111",
        text: "hnuhn",
        theme: "jmhnh",
        date: "2018-01-17 23:56:09+02:00",
        user: {access_token: "11", firstName: "11", id: "111", image: "111", middleName: "1111"}
    }]);
})


app.post('/api/newNews', function (req, res) {
    console.log("new api", req.body)
    // if (!!!req.body.text || !!!req.body.theme) {
    //     return res.status(400).json({err: 'Data format is not correct'});
    // }
    try {
        //   const News = mongoose.model('News');
        let New = new News({
            text: "cdd",
            theme: "dscd",
            date: "ddd",
            userId: "22",
            user: {
                access_token: "11", firstName: "11", id: "111", image: "111", middleName: "1111", permissionId: "",
                surName: "",
                username: "",
                permission: {
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
                }
            }
        })

        New.save()
            .then(_ => {
                console.log("db save")
                News.model.find({}, function (err, news) {
                    if (err) return res.json({error: err});
                    res.json(news);
                })
            }).catch(err => {
            return res.json({error: err});
        });

    } catch (e) {
        console.log('ERROR!!', e)
    }


});


app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});
