/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
  return knex.schema
    .table('sectors', (table) => {
      table.string('sector_image')
    })
    .table('churchs', (table) => {
      table
        .integer('church_sectors_id')
        .references('sectors.id')
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
  return knex.schema.table('sectors', (table) => {
    table.dropColumn('sector_image');
  }).table('churchs', (table) => {
    table.dropColumn('church_sectors_id');
  });
}
