import knexfile from '../../knexfile.js';
import knex from 'knex';

const db = knex(knexfile.development);

export default db;



// const knexfile = require('../../knexfile');
// const knex = require('knex')(knexfile['development']);

// module.exports = knex;
