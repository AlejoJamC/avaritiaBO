/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var bankRoutes = express.Router();
var request = require('request');

/* GET home page. */
bankRoutes.get('/bancos', function (req, res) {
    res.render('banks', {
        title : 'Bancos | Avaritia',
        level : ''
    });
});

module.exports = bankRoutes;