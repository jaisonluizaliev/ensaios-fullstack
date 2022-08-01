/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('sub_regionals').del();
  await knex('sub_regionals').insert([
    {
      // regional_id: 4,
      sub_regional_name: 'Campinas - São José',
      sub_regional_address:
        'Av. Salvador di Bernardi, 795 - Campinas CEP: 88101-260 - São José-SC',
      sub_regional_image: 'https://i.postimg.cc/0NnxTLTk/campinas.png',
      sub_regional_regionals_id: 3,
    },
  ]);
}
