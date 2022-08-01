/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
  return knex.schema
    .table('states', (table) => {
      table.increments('state_church', { primaryKey: false }).unique();
    })
    
    .table('churchs', (table) => {
      table
        .integer('church_state')
        .references('states.id')
        .notNullable()
        .unique()
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function down(knex) {
  return knex.schema
    .table('states', (table) => {
      table.dropColumn('state_church');
    })
    .table('churchs', (table) => {
      table.dropColumn('church_state');
    });
}
