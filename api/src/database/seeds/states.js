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
      state_image: 'https://i.postimg.cc/qgHTHpj5/sc.png',
    },
    {
      state_name: 'Paraná',
      state_image: 'https://i.postimg.cc/rmbTg1Wc/pr.png',
    },
    {
      state_name: 'Rio Grande do Sul',
      state_image: 'https://i.postimg.cc/6qvXP8LZ/rs.jpg',
    },
  ]);
};
