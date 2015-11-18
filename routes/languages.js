/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var languageRoutes = express.Router();
var request = require('request');

/* GET home page. */
languageRoutes.get('/idiomas', function (req, res) {
    res.render('languages', {
        title : 'Idiomas | Avaritia',
        level : ''
    });
});

module.exports = languageRoutes;