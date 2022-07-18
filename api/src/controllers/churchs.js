import db from '../database/index.js';

export async function churchIndex(req, res) {
  try {
    const result = await db('churchs');
    res.json(result);
  } catch (error) {
    res.json({ message: 'error' });
  }
}

export async function churchById(req, res) {
  const { id } = req.params;
  try {
    const result = await db('churchs').where({ id });
    res.json(result);
  } catch (error) {
    res.json({ message: 'error' });
  }
}

export async function createChurch(req, res) {
  const {data} = req.body;
  try {
    const result = await db('churchs').where({ id });
    res.json(result);
  } catch (error) {
    res.json({ message: 'error' });
  }
}

// export async function regionalAndState(req, res) {
//   try {
//     const result = await db('states')
//       .join('regionals', 'states.id', 'regionals.state_id')
//       .select('states.state_name', 'regionals.*');
//     res.json(result);
//   } catch (error) {
//     res.json({ message: error });
//   }
// }
