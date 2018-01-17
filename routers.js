

module.exports = function (app) {
    app.get('/api/getUsers', function (req, res) {
        console.log(req.params)
        res.json([{
            access_token: "11", firstName: "11", id: "111", image: "111", middleName: "1111", permissionId: "id",
            surName: "Name",
            username: "Username",
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
            }}]);
    })
    app.get('/api/getNews', function (req, res) {
        console.log(req.params)
        res.json([{userId: "111", text: "hnuhn", theme: "jmhnh", date: "2018-01-17 23:56:09+02:00",user:{access_token: "11", firstName: "11", id: "111", image: "111", middleName: "1111"}}]);
    })

    app.use('*', require('./api'));
    app.post('/',function (req, res) {
        console.log(req.query.id)
    })
    app.get('*', function(req, res)  {
        res.sendFile('index.html')
});
};