/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('products', function(table) {
      table.string('column1');
      table.string('column1');
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('products', function(table) {
      table.dropColumn('column1');
      table.dropColumn('column1');
    });
  };
