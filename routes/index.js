/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var indexRoutes = express.Router();
var request = require('request');
var sess;

/* GET home page. */
indexRoutes.get('/', function (req, res) {
    res.render('index', {
        title : 'Avaritia | Interfaz administrativa',
        level : '',
        processMessage: '',
        error: '',
        module: 'Dashboard',
        moduleURL:'/',
        moduleDescription:'Dashboard',
        currencies : ''
    });
});

/* GET Login. */
indexRoutes.get('/login', function (req, res) {
    res.render('login', {
        title : 'Avaritia | Iniciar sesi&oacute;n',
        messageLogin: '',
        level : ''
    });
});

/* POST Login. */
indexRoutes.post('/login', function (req, res) {
    // get the current session
    sess = req.session;
    //
    var inputEmailEncode = encodeURIComponent(req.body.inputEmail);
    var inputPasswordEncode = encodeURIComponent(req.body.inputassword);

    // Request Options
    var options = {
        'url': global.WEBSERVICE + '/login',
        'form':{
            'email': inputEmailEncode,
            'pwd': inputPasswordEncode
        }
    };

    request.post(options, function (error, response, body) {
        if(!error && response.statusCode == 200){
            sess.email = req.body.inputEmail;
            res.redirect('/');
        }else{
            sess.destroy();
            res.render('login', {
                title : 'Avaritia | Iniciar sesi&oacute;n',
                messageLogin: 'Correo electrónico y/o contrase&ntilde;a no coinciden.',
                level : ''
            });
        }
    });
});

/* GET Logout. */
indexRoutes.get('/logout', function (req, res) {
    sess = req.session;
    sess.destroy();
    res.redirect('/login');
});

module.exports = indexRoutes;