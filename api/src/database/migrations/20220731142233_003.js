/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
  return knex.schema.table('sub_regionals', (table) => {
    table
      .integer('sub_regional_regionals_id')
      .references('regionals.id')
      .notNullable()
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function down(knex) {
  return knex.schema.table('sub_regionals', (table) => {
    table.dropColumn('sub_regional_regionals_id');
  });
}
