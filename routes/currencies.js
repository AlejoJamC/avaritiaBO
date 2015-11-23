/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var currencyRoutes = express.Router();
var request = require('request');
var S = require('string');

/* GET home page. */
currencyRoutes.get('/monedas', function (req, res) {

    // Get the list of all countries
    var options = {
        'url': global.WEBSERVICE + '/currencies',
        'auth':{
            'bearer': global.BEARERTOKEN
        }
    };

    //request.get(options, function (error, response, body) {
    //    var currencies = [];
    //    // TODO: arreglar el scope de estas variables en la obtencion de datos de los paises
    //    var processMessage='';
    //    var errorState = false;
    //    var fakeId;
    //
    //    if(!error && response.statusCode == 200){
    //        var info = JSON.parse(body);
    //        console.log(info);
    //        for (var i = 0; i < info.length; i++){
    //            fakeId= i++;
    //            console.log(info[i]._id);
    //            currencies[i] = {
    //                id: fakeId,
    //                hiddenId: info[i]._id,
    //                name: info[i].name,
    //                symbol: info[i].symbol,
    //                country: info[i].country,
    //                creationDate: info[i].creationDate,
    //                lastEditionDate: info[i].lastEditionDate,
    //                enabled: info[i].enabled
    //            };
    //        }
    //        processMessage = 'Lista completa cargada sin problemas';
    //        errorState = false;
    //    }else{
    //        processMessage = 'Error: obteniendo la lista de modenas';
    //        errorState = true;
    //    }
    //    res.render('currencies', {
    //        title : 'Monedas | Avaritia',
    //        level :  '',
    //        processMessage: processMessage,
    //        error: errorState,
    //        module: 'Modenas',
    //        moduleURL:'monedas',
    //        moduleDescription:'Lista de monedas habilitados',
    //        currencies : currencies
    //    });
    //});
    res.render('currencies', {
        title : 'Monedas | Avaritia',
        level :  '',
        processMessage: '',
        error: '',
        module: 'Modenas',
        moduleURL:'monedas',
        moduleDescription:'Lista de monedas habilitados',
        currencies : ''
    });
});

module.exports = currencyRoutes;