'use strict';

/** @type {import('fastify').RouteOptions['schema']} */
const authEndpointsStatusSchema = {
  description: 'Get the status of the auth endpoints',
  tags: ['Status'],
  response: {
    200: {
      type: 'object',
      properties: {
        result: { type: 'object' },
      },
    },
  },
};

module.exports = {
  authEndpointsStatusSchema,
};
