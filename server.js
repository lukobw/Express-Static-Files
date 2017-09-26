var express = require('express');
var app = express();
app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile('/index.html');
});

app.get('/userform', (req, res) => {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(reponse));
});

var server = app.listen(3001, () => {
    var host = server.address().address;
    var port = server.address().post;

    console.log(`Application served on http://${host}:${port}`);
});

