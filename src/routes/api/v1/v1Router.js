async function v1Router(fastify, options) {
  fastify.register(require("./todos/index"), { prefix: "/todos" });
}

module.exports = v1Router;
