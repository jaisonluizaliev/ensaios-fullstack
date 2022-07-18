/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('states').del()
  await knex('states').insert([
    {
      state_name: 'Santa Catarina',
    },
    {
      state_name: 'Paraná',
    },
    {
      state_name: 'Rio Grande do Sul',
    },
  ]);
};
