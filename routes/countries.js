/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

var express = require('express');
var countryRoutes = express.Router();
var request = require('request');
var S = require('string');

/* GET home page. */
countryRoutes.get('/paises', function (req, res) {

    // Get the list of all countries
    var options = {
        'url': global.WEBSERVICE + '/countries',
        'auth':{
            'bearer': global.BEARERTOKEN
        }
    };

    request.get(options, function (error, response, body) {
        var countries = [];
        // TODO: arreglar el scope de estas variables en la obtencion de datos de los paises
        var processMessage='';
        var errorState = false;
        var fakeId;

        if(!error && response.statusCode == 200){
            var info = JSON.parse(body);
            for (var i = 0; i < info.length; i++){
                fakeId= i++;
                countries[i] = {
                    id: fakeId,
                    hiddenId: info[i]._id,
                    name: info[i].name,
                    creationDate: info[i].creationDate,
                    lastEditionDate: info[i].lastEditionDate,
                    enabled: info[i].enabled
                }
            }
            processMessage = 'Lista completa cargada sin problemas';
            errorState = false;
        }else{
            processMessage = 'Error: obteniendo la lista de los paises';
            errorState = true;
        }
        console.log(countries);
        res.render('countries', {
            title : 'Paises | Avaritia',
            level :  '',
            processMessage: processMessage,
            error: errorState,
            module: 'Paises',
            moduleURL:'paises',
            moduleDescription:'Lista de paises habilitados',
            countries : countries
        });
    });
});

module.exports = countryRoutes;