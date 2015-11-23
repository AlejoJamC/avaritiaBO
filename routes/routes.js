/**
 * Copyright (c) 2015-present, Alejandro Mantilla <@AlejoJamC>.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree or translated in the assets folder.
 */

/**
 * agregarRutas
 *
 * @description configura todas las rutas del proyecto en express app
 *
 * @param {express}      app      El Router de la aplicación
 */
function agregarRutas (app){
    // Instancio los archivos que contienen las rutas
    var indexRoutes = require('./index');
    var bankRoutes = require('./banks');
    var countryRoutes = require('./countries');
    var currencyRoutes = require('./currencies');
    var languageRoutes = require('./languages');
    var rateRoutes = require('./rates');
    var serviceRoutes = require('./services');

    // Assign all routes
    // Index
    app.use('/', indexRoutes);
    // Banks
    app.use('/', bankRoutes);
    // Countries
    app.use('/', countryRoutes);
    // Currencies
    app.use('/', currencyRoutes);
    // languages
    app.use('/', languageRoutes);
    // Rates
    app.use('/', rateRoutes);
    // Services
    app.use('/', serviceRoutes);
}
// Exportamos la funcion
module.exports.agregarRutas = agregarRutas;