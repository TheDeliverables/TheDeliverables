/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.createTable('videos', function (table) {
        table.increments('id').primary();
        table.string('title');
        table.string('shortDescription');
        table.string('fullDescription');
        table.string('videoURL');
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
    return knex.schema.dropTable('videos');
};