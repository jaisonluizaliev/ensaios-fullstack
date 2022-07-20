/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('churchs').del();
  await knex('churchs').insert([
    {
      church_name: 'Tapera',
      church_image: 'https://i.postimg.cc/2jTjq84N/tapera.png',
      church_address:
        'Serv Portinari, 2 - Tapera, Florianópolis - SC, 88049-313',
      in_charge: 'Jaison Luiz',
      in_charge_contact: '48 991876255',
      rehearsal_day: '2º - Segunda-feira',
      is_adm: false,
      sector_id: 2,
      rehearsal_time: '20h00',
    },
    {
      church_name: 'Costeira do Pirajubae',
      church_image: 'https://i.postimg.cc/fbXTkcv8/costeira.png',
      church_address:
        'Av. Dep. Diomício Freitas, 6 - Carianos, Florianópolis - SC, 88047-400',
      in_charge: 'André Alexandre',
      in_charge_contact: '48 984667794',
      rehearsal_day: '3º - Segunda-feira',
      is_adm: false,
      sector_id: 2,
      rehearsal_time: '20h00',
    },
    {
      church_name: 'Morro das Pedras',
      church_image: 'https://i.postimg.cc/ydH6RDQs/morrodaspedras.png',
      church_address:
        'R. José Elías Lopes, 1085-1187 - Campeche, Florianópolis - SC, 88066-060',
      in_charge: 'Adenilson Aparecido',
      in_charge_contact: '48 984278228',
      rehearsal_day: '4º - Segunda-feira',
      is_adm: false,
      sector_id: 2,
      rehearsal_time: '20h00',
    },
    {
      church_name: 'Agronômica',
      church_image: 'https://i.postimg.cc/Z5X5T769/agronomica.png',
      church_address:
        'R. Antônio Carlos Ferreira, 623 - Agronômica, Florianópolis - SC, 88010-400',
      in_charge: 'Giovani dos Santos',
      in_charge_contact: '48 984352497',
      rehearsal_day: '1º - Segunda-feira (Mês Par)',
      is_adm: false,
      sector_id: 2,
      rehearsal_time: '20h00',
    },
  ]);
};
