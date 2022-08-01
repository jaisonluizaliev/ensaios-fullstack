/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('sectors').del();
  await knex('sectors').insert([
    {
      sector_name: '01 - Florianópolis',
      sector_image: 'https://i.postimg.cc/HnXrW1PR/ingleses.png',
    },
    {
      sector_name: '02 - São José',
      sector_image: 'https://i.postimg.cc/0NnxTLTk/campinas.png',
    },

    {
      sector_name: '03 - Palhoça',
      sector_image: 'https://i.postimg.cc/PxBLk5K1/ponte-imarui.png',
    },
    {
      sector_name: '04 - Biguaçu',
      sector_image: 'https://i.postimg.cc/gJww5ZyY/bigua-u.png',
    },
    {
      sector_name: '05 - Serra',
      sector_image: 'https://i.postimg.cc/jqZ9vngW/painel.png',
    },
  ]);
}
