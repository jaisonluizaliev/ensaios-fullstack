/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('sectors').del();
  await knex('sectors').insert([
    {
      sector_name: 'São José',
      sector_number: 1,

      sub_regional_id: 1,
    },
    {
      sector_name: 'Florianópolis',
      sector_number: 2,

      sub_regional_id: 1,
    },
    {
      sector_name: 'Palhoça',
      sector_number: 3,

      sub_regional_id: 1,
    },
    {
      sector_name: 'Biguaçu',
      sector_number: 4,

      sub_regional_id: 1,
    },
    {
      sector_name: 'Serra',
      sector_number: 5,

      sub_regional_id: 1,
    },
  ]);
};
