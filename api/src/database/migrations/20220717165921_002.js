/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.table('churchs', table => {
    table.string('rehearsal_time').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down (knex) {
  return knex.schema.table('churchs', table => {
    return table.dropColumn('rehearsal_time') 
  })
};
