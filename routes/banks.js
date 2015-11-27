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
    var options = {
        'url': global.WEBSERVICE + '/banks',
        'auth':{
            'bearer': global.BEARERTOKEN
        }
    };

    request.get(options, function (error, response, body) {
        var banks;
        // TODO: arreglar el scope de estas variables en la obtencion de datos de los paises
        var processMessage='';
        var errorState = false;
        var fakeId;

        if(!error && response.statusCode == 200){
            banks = JSON.parse(body);
            processMessage = 'Lista completa cargada sin problemas';
            errorState = false;
        }else{
            processMessage = 'Error: obteniendo la lista de los paises';
            errorState = true;
        }

        res.render('banks', {
            title : 'Bancos | Avaritia',
            level : '',
            processMessage: '',
            error: '',
            module: 'Bancos',
            moduleURL:'bancos',
            moduleDescription:'Lista de bancos',
            banks : banks
        });
    });
});

/** ADD BANK GET **/
bankRoutes.get('/bancos/agregar', function (req, res) {
    var options = {
        'url': global.WEBSERVICE + '/countries',
        'auth':{
            'bearer': global.BEARERTOKEN
        }
    };

    request.get(options, function (error, response, body) {
        var countries;
        // TODO: arreglar el scope de estas variables en la obtencion de datos de los paises
        var processMessage='';
        var errorState = false;
        var fakeId;

        if(!error && response.statusCode == 200){
            countries = JSON.parse(body);
            processMessage = 'Lista completa cargada sin problemas';
            errorState = false;
        }else{
            processMessage = 'Error: obteniendo la lista de los paises';
            errorState = true;
        }

        res.render('banks_add', {
            title : 'Bancos | Avaritia',
            level : '../',
            processMessage: '',
            error: '',
            module: 'Bancos',
            moduleURL:'bancos/agregar',
            moduleDescription:'Agregar bancos',
            countries: countries
        });
    });
});

/** ADD BANK POST **/
bankRoutes.post('/bancos/agregar', function (req, res) {
    var bankName = encodeURIComponent(req.body.inputName);
    var bankNit = encodeURIComponent(req.body.inputNit);
    var bankScore = encodeURIComponent(req.body.inputScore);
    var bankContact = encodeURIComponent(req.body.inputContact);
    var bankCityVal = encodeURIComponent(req.body.optionCountry);
    var bankCityText = encodeURIComponent(req.body.countryText);

    var options = {
        'url': global.WEBSERVICE + '/banks',
        'auth': {
            'bearer': global.BEARERTOKEN
        },
        'form': {
            'name': bankName,
            'nit': bankNit,
            'score': bankScore,
            'contact': bankContact,
            'country': {
                '_id': bankCityVal,
                'name': bankCityText
            }
        }
    };

    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.redirect('/bancos');
        } else {
            res.redirect('/bancos/agregar');
        }
    });
});

module.exports = bankRoutes;