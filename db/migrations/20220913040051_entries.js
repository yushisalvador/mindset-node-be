/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("entries", (table) => {
    table.increments("id");
    table
      .string("username")
      .references("username")
      .inTable("users")
      .onDelete("CASCADE");
    table.date("written_on");
    table.text("entry");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("entries");
};
