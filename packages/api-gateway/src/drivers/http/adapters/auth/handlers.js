async function getGreeting(req, reply) {
  const result = '🤖: Hi, from a "public" endpoint. We are the Authentication squad 🎉🎉.';
  return reply.code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ result });
}

async function getPrivate(req, reply) {
  const result = '🤖: Hi, from a "private" endpoint! You need to be authenticated to see this.';

  return reply.code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ result });
}

async function getPrivateScoped(req, reply) {
  const result = '🤖: Hi, from a "private-scoped" endpoint! You need to be authenticated and have a scope of test:read:messages to see this.';

  return reply.code(200)
    .header('Content-Type', 'application/json; chartset:utf-8')
    .send({ result });
}

async function getMySecret(req, reply) {
  const result = '🤖: Hi, from a "my-secret" endpoint! You need to be authenticated and own the information.';

  return reply.code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ result });
}

module.exports = {
  getGreeting,
  getPrivate,
  getPrivateScoped,
  getMySecret,
};
