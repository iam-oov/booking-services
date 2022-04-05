'use strict';

// External dependencies
const Fastify = require('fastify');
const Autoload = require('fastify-autoload');
const Swagger = require('fastify-swagger');
const FastifyAuth0 = require('fastify-auth0-verify');

const path = require('path');

// Internal dependencies
const { version } = require('../../../package.json');
const configAuth = require('../../../config/auth0');

async function start() {

	const fastify = Fastify({ logger: true });

	/** @type {import('fastify-swagger').SwaggerOptions} */
	const swaggerOptions = {
		routePrefix: '/docs',
		openapi: {
			info: {
				title: 'Booking API Gateway',
				description: 'API Gateway for Booking Services',
				version,
			},
			schemes: ['http', 'https'],
			consumes: ['application/json'],
			produces: ['application/json'],
			tags: [
				{ name: 'Math', description: 'Math endpoints' },
				{ name: 'Status', description: 'Status endpoints' },
				{ name: 'Search Engine', description: 'Search Engine endpoints' },
				{ name: 'Geolocation', description: 'Geolocation endpoints' },
				{ name: 'Booking', description: 'Booking endpoints' },
				{ name: 'Core', description: 'Core endpoints' },
				{ name: 'Users', description: 'User endpoints' },
				{ name: 'Notifications', description: 'Notification endpoints' },
				{ name: 'Messages', description: 'Messages endpoints' },
				{ name: 'Places', description: 'Places endpoints' },
				{ name: 'Admininistration panel', description: 'Admininistration panel endpoints' },
			],
			components: {
				securitySchemes: {
					Bearer: {
						type: 'http',
						scheme: 'bearer',
					},
				},
			},
		},
		exposeRoute: true
	};

	// Swagger needs to be loaded before the routes
	fastify.register(Swagger, swaggerOptions);

	fastify.register(FastifyAuth0, {
		domain: configAuth.domain,
		audience: configAuth.audience
	});

	fastify.register(Autoload, { dir: path.join(__dirname, 'plugins')});
	fastify.register(Autoload, { dir: path.join(__dirname, 'routes')});

	try {
		await fastify.listen(process.env.SERVER_PORT || 3000, '0.0.0.0');

	} catch (error) {
		fastify.log.error(`[http-server]: Error with message ${error.message} has happened`);
		process.exit(1);
	}
}

module.exports = {
	start
}
