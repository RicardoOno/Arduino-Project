var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function () {
    var app = express();

    app.use(cors());

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());


    consign()
        .include('app')
        .into(app);


    return app;

};

