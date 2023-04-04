'use strict';

/**
 * executive-dev service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::executive-dev.executive-dev');
