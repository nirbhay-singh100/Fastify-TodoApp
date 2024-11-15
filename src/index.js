const fastify = require("fastify")();

const app = require("./app");
const { PORT } = require("./config/serverConfig");

fastify.register(app);

fastify.listen({ port: PORT }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  console.log(`Server is running at port : ${PORT}`);
});
