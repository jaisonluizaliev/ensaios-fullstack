/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema
    .createTable('states', (table) => {
      table.increments('id');
      table.string('state_name').unique();
    })
    .createTable('regionals', (table) => {
      table.increments('id');
      table.string('regional_name').unique();
      table.string('regional_address').unique();

      table
      .integer('state_id')
      .references('states.id')
      .notNullable()
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.timestamps(true, true);

    })
    .createTable('sub_regionals', (table) => {
      table.increments('id');
      table.string('sub_regional_name').unique();
      table.string('sub_regional_address').unique();

      table
      .integer('regional_id')
      .references('regionals.id')
      .notNullable()
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.timestamps(true, true);

    })
    .createTable('sectors', (table) => {
      table.increments('id');
      table.string('sector_name').unique();
      table.integer('sector_number').unique();

      table
        .integer('sub_regional_id')
        .references('sub_regionals.id')
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    table.timestamps(true, true);

    })
    .createTable('churchs', (table) => {
      table.increments('id');
      table.string('church_name').unique();
      table.string('church_address').unique();
      table.string('in_charge').unique();
      table.string('in_charge_contact')
      table.string('rehearsal_day').notNullable();
      table.boolean('is_adm').defaultTo(false);

      table
      .integer('sector_id')
      .references('sectors.id')
      .notNullable()
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table.timestamps(true, true);

    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema
    .dropTable('states')
    .dropTable('regionals')
    .dropTable('sub_regionals')
    .dropTable('sectors')
    .dropTable('churchs');
};
