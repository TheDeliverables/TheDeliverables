/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("articles", (table) => {
    table.increments('id').primary();
    table.string('articleTitle');
    table.text('author');
    table.string('imageURL');
    table.string('markDownURL');
    table.integer('product_id');
    table.string('column1');
    table.string('column2');
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("articles");
};
