const fp = require("fastify-plugin");

class TodoRepository {
  constructor(db) {
    this.db = db;
  }

  async getAll() {
    return this.db.todos;
  }

  async create(todoText) {
    const todoList = this.db.todos;

    this.db.todos.push({
      text: todoText,
      id: todoList.length,
    });

    return this.db.todos;
  }

  async getOne(id) {
    return this.db.todos.find((todo) => todo.id == id);
  }

  async deleteOne(id) {}

  async deleteAll() {}
}
async function todoRepository(fastify, options) {
  // once we make a plugin we can access fastify here

  const { db } = fastify; // destructing of object, we created db key

  const repo = new TodoRepository(db);

  fastify.decorate("todoRepository", repo);
}

module.exports = fp(todoRepository);
