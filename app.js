const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/test', (req, res) => {
    console.log('testing requests');
    res.json(req.body);
})


app.use('/', routes);

app.listen(9000, () => {
    console.log('api server with postgres db started');
})