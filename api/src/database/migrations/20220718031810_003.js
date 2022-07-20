/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
return knex.schema.table('churchs', table => {
  table.text('church_image')
})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down (knex) {
   return knex.schema.table('churchs', (table) => {
     return table.dropColumn('church_image');
   });
};
