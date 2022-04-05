'use strict';

// Internal dependencies
const { authEndpointsStatusSchema } = require('./schema');
const { authAdapters } = require('../../../adapters');

/** @type {import('fastify').FastifyPluginCallback} */
function status(fastify, _, done) {
  // Register routes
  fastify.get('/', {
    schema: authEndpointsStatusSchema,
    handler: authAdapters.private,
  });

  done();
}

module.exports = status;
