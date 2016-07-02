'use strict';

const mysql   = require('anytv-node-mysql');
const winston = require('winston');

exports.home = (req, res, next) => {

    res.status(200)
        .sendfile('index.html');
};
