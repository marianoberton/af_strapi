'use strict';

/**
 * tweets-nd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tweets-nd.tweets-nd');
