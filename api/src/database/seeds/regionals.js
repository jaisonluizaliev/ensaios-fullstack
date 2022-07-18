/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed (knex) {
  // Deletes ALL existing entries
  await knex('regionals').del()
  await knex('regionals').insert([
    {
      state_id: 1,
      regional_name: 'Tubarão',
      regional_address:
        'Rua Engenheiro Annes Gualberto, 1172 - Santo Antônio de Pádua, Tubarão - SC, 88701-360',
    },
    {
      state_id: 1,
      regional_name: 'Joinville',
      regional_address: 'Boa Vista, Joinville - SC, 89205-306',
    },
    {
      state_id: 1,
      regional_name: 'Itajaí',
      regional_address: 'R. São Paulo, 85 - São Judas, Itajaí - SC, 88303-330',
    },
    {
      state_id: 1,
      regional_name: 'Caçador',
      regional_address:
        'R. Hercílio Luz, 185 - Paraíso, Caçador - SC, 89500-000',
    },
  ]);
};
