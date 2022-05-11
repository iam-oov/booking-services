// Internal dependencies
const { authAdapters } = require('../../../adapters');

/** @type {import('fastify').FastifyPluginCallback} */
function main(fastify, _, done) {
  // Register routes
  fastify.get('/:userId', {
    handler: authAdapters.getMySecret,
    preValidation: fastify.authenticate,
    preHandler: [fastify.onlyTheCreator()],
  });

  done();
}

module.exports = main;
