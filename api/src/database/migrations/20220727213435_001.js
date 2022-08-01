/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
  return knex.schema
    .createTable('states', (table) => {
      table.increments('id');
      table.string('state_name').unique();
      table.string('state_image');
      table.timestamps(true, true);
    })
    .createTable('regionals', (table) => {
      table.increments('id');
      table.string('regional_name').unique();
      table.string('regional_address').unique();
      table.string('regional_image');
      table.timestamps(true, true);
    })
    .createTable('sub_regionals', (table) => {
      table.increments('id');
      table.string('sub_regional_name').unique();
      table.string('sub_regional_address');
      table.string('sub_regional_image');
      table.timestamps(true, true);
    })
    .createTable('sectors', (table) => {
      table.increments('id');

      table.string('sector_name').unique();

      table.timestamps(true, true);
    })
    .createTable('churchs', (table) => {
      table.increments('id');
      table.string('church_name').unique();
      table.text('church_image');

      table.string('rehearsal_time').notNullable();
      table.string('church_address').unique();
      table.string('in_charge').unique();
      table.string('in_charge_contact');
      table.string('rehearsal_day').notNullable();
      table.boolean('is_adm').defaultTo(false);
      table.timestamps(true, true);
    });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function down(knex) {
  return knex.schema
    .dropTable('churchs')
    .dropTable('sectors')
    .dropTable('sub_regionals')
    .dropTable('regionals')
    .dropTable('states');
}
