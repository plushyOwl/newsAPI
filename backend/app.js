const bodyParser = require('body-parser');
const config = require('./config');
const routes = require('./routes');
const express = require('express');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/search', routes.search);

app.listen(3001);

