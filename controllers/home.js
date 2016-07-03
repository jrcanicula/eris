'use strict';

const mysql   = require('anytv-node-mysql');
const winston = require('winston');
const path = require('path');


exports.home = (req, res, next) => {

	res.sendFile(path.join(__dirname, '/../index.html')); 

};
