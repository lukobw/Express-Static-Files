const express = require('express');
const app = express();

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile('/index.html');
});

app.get('/userform', (req, res) => {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});

var server = app.listen(3000, () => {
    var port = server.address().port;

    console.log(`Application served on http://localhost:${port}`);
});
