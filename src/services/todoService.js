const fp = require("fastify-plugin");

class TodoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }

  async getAll() {
    return await this.todoRepository.getAll();
  }

  async create(todoText) {
    return await this.todoRepository.create(todoText);
  }

  async getOne(id) {
    return await this.todoRepository.getOne(id);
  }

  async deleteOne(id) {}

  async deleteAll() {}
}

async function todoService(fastify, options) {
  const { todoRepository } = fastify;

  const service = new TodoService(todoRepository);

  fastify.decorate("todoService", service);
}

module.exports = fp(todoService);
