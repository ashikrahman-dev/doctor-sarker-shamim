'use strict';

/**
 * appointment-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::appointment-data.appointment-data');
